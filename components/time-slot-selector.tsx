"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClockIcon } from "lucide-react"

type TimeSlot = {
  id: string
  startTime: Date
  endTime: Date
  label: string
  available: boolean
}

interface TimeSlotSelectorProps {
  onSelectTimeSlot: (timeSlot: TimeSlot | null) => void
  selectedTimeSlot: TimeSlot | null
}

export function TimeSlotSelector({ onSelectTimeSlot, selectedTimeSlot }: TimeSlotSelectorProps) {
  // Generate time slots for the next 3 days
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []
    const now = new Date()

    for (let day = 0; day < 3; day++) {
      const date = new Date(now)
      date.setDate(date.getDate() + day)

      // Generate slots from 11 AM to 9 PM
      for (let hour = 11; hour <= 21; hour += 2) {
        const startTime = new Date(date)
        startTime.setHours(hour, 0, 0, 0)

        const endTime = new Date(startTime)
        endTime.setHours(hour + 1, 30, 0, 0)

        // Skip past time slots for today
        if (day === 0 && startTime <= now) continue

        const slot: TimeSlot = {
          id: `${date.toDateString()}-${hour}`,
          startTime,
          endTime,
          label: `${startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`,
          available: Math.random() > 0.3, // 70% availability
        }

        slots.push(slot)
      }
    }

    return slots
  }

  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots())

  const groupedSlots = timeSlots.reduce(
    (acc, slot) => {
      const dateKey = slot.startTime.toDateString()
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(slot)
      return acc
    },
    {} as Record<string, TimeSlot[]>,
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (date.toDateString() === today.toDateString()) {
      return "Today"
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow"
    } else {
      return date.toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <ClockIcon className="h-4 w-4 text-purple-500" />
        <span className="text-sm font-medium">Select a delivery time</span>
      </div>

      {Object.entries(groupedSlots).map(([dateString, slots]) => (
        <div key={dateString} className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">{formatDate(dateString)}</h4>
          <div className="grid grid-cols-2 gap-2">
            {slots.map((slot) => (
              <Button
                key={slot.id}
                variant={selectedTimeSlot?.id === slot.id ? "default" : "outline"}
                size="sm"
                disabled={!slot.available}
                onClick={() => onSelectTimeSlot(slot.available ? slot : null)}
                className={`text-xs h-8 ${
                  selectedTimeSlot?.id === slot.id
                    ? "bg-purple-600 hover:bg-purple-700"
                    : slot.available
                      ? "hover:bg-purple-50 border-purple-200"
                      : "opacity-50 cursor-not-allowed"
                }`}
              >
                {slot.label}
                {!slot.available && (
                  <Badge variant="secondary" className="ml-1 text-xs">
                    Full
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      ))}

      {selectedTimeSlot && (
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Selected: {formatDate(selectedTimeSlot.startTime.toDateString())} at {selectedTimeSlot.label}
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default TimeSlotSelector
