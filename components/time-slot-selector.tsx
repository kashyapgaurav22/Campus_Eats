"use client"

import { useState, useEffect } from "react"
import { format, addMinutes, isBefore, addDays, setHours, setMinutes } from "date-fns"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ClockIcon, CalendarIcon } from "lucide-react"

type TimeSlot = {
  id: string
  startTime: Date
  endTime: Date
  label: string
  available: boolean
}

type TimeSlotSelectorProps = {
  onSelectTimeSlot: (timeSlot: TimeSlot | null) => void
  selectedTimeSlot: TimeSlot | null
}

export function TimeSlotSelector({ onSelectTimeSlot, selectedTimeSlot }: TimeSlotSelectorProps) {
  const [activeTab, setActiveTab] = useState("today")
  const [timeSlots, setTimeSlots] = useState<{ today: TimeSlot[]; tomorrow: TimeSlot[] }>({
    today: [],
    tomorrow: [],
  })

  // Generate time slots for today and tomorrow
  useEffect(() => {
    const generateTimeSlots = () => {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()

      // Round up to the nearest 30 minutes and add 30 minutes preparation time
      let startMinute = Math.ceil(currentMinute / 30) * 30 + 30
      let startHour = currentHour
      if (startMinute >= 60) {
        startMinute = 0
        startHour += 1
      }

      const startTime = new Date(now)
      startTime.setHours(startHour, startMinute, 0, 0)

      // Generate slots for today
      const todaySlots: TimeSlot[] = []
      let slotTime = startTime
      const endOfDay = new Date(now)
      endOfDay.setHours(22, 0, 0, 0) // Restaurant closes at 10 PM

      while (isBefore(slotTime, endOfDay)) {
        const slotEndTime = addMinutes(slotTime, 30)
        todaySlots.push({
          id: `today-${format(slotTime, "HH:mm")}`,
          startTime: new Date(slotTime),
          endTime: new Date(slotEndTime),
          label: `${format(slotTime, "h:mm a")} - ${format(slotEndTime, "h:mm a")}`,
          available: true,
        })
        slotTime = addMinutes(slotTime, 30)
      }

      // Generate slots for tomorrow
      const tomorrowSlots: TimeSlot[] = []
      const tomorrow = addDays(now, 1)
      let tomorrowTime = setHours(setMinutes(tomorrow, 0), 10) // Restaurant opens at 10 AM

      const endOfTomorrow = setHours(tomorrow, 22) // Restaurant closes at 10 PM

      while (isBefore(tomorrowTime, endOfTomorrow)) {
        const slotEndTime = addMinutes(tomorrowTime, 30)
        tomorrowSlots.push({
          id: `tomorrow-${format(tomorrowTime, "HH:mm")}`,
          startTime: new Date(tomorrowTime),
          endTime: new Date(slotEndTime),
          label: `${format(tomorrowTime, "h:mm a")} - ${format(slotEndTime, "h:mm a")}`,
          available: true,
        })
        tomorrowTime = addMinutes(tomorrowTime, 30)
      }

      setTimeSlots({
        today: todaySlots,
        tomorrow: tomorrowSlots,
      })

      // If no slots available today, switch to tomorrow tab
      if (todaySlots.length === 0 && tomorrowSlots.length > 0) {
        setActiveTab("tomorrow")
      }
    }

    generateTimeSlots()
  }, [])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    onSelectTimeSlot(null) // Reset selection when changing tabs
  }

  const handleTimeSlotSelect = (timeSlot: TimeSlot) => {
    onSelectTimeSlot(timeSlot)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="today" disabled={timeSlots.today.length === 0}>
              <CalendarIcon className="h-4 w-4 mr-2" />
              Today
            </TabsTrigger>
            <TabsTrigger value="tomorrow">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Tomorrow
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            {timeSlots.today.length > 0 ? (
              <RadioGroup
                value={selectedTimeSlot?.id}
                onValueChange={(value) => {
                  const selected = timeSlots.today.find((slot) => slot.id === value)
                  if (selected) handleTimeSlotSelect(selected)
                }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.today.map((slot) => (
                    <div key={slot.id}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={slot.id} id={slot.id} />
                        <Label htmlFor={slot.id} className="cursor-pointer flex items-center">
                          <ClockIcon className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span>{slot.label}</span>
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                No more delivery slots available for today. Please check tomorrow.
              </div>
            )}
          </TabsContent>

          <TabsContent value="tomorrow">
            <RadioGroup
              value={selectedTimeSlot?.id}
              onValueChange={(value) => {
                const selected = timeSlots.tomorrow.find((slot) => slot.id === value)
                if (selected) handleTimeSlotSelect(selected)
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.tomorrow.map((slot) => (
                  <div key={slot.id}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={slot.id} id={slot.id} />
                      <Label htmlFor={slot.id} className="cursor-pointer flex items-center">
                        <ClockIcon className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span>{slot.label}</span>
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </TabsContent>
        </Tabs>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>Select your preferred delivery time slot. Standard delivery time is 30 minutes.</p>
        </div>
      </CardContent>
    </Card>
  )
}
