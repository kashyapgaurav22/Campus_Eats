"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCapIcon,
  UtensilsIcon,
  BookOpenIcon,
  CoffeeIcon,
  PizzaIcon,
  SchoolIcon,
  HeartIcon,
  StarIcon,
  TrendingUpIcon,
  ZapIcon,
  ShoppingBagIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  SparklesIcon,
} from "lucide-react"

type LogoOption = {
  id: number
  name: string
  description: string
  style: "modern" | "playful" | "academic" | "minimalist" | "bold"
  component: React.ReactNode
}

const logoOptions: LogoOption[] = [
  {
    id: 1,
    name: "Graduation Cap + Fork",
    description: "Classic academic symbol combined with dining utensil",
    style: "academic",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <GraduationCapIcon className="h-8 w-8 text-blue-600" />
          <UtensilsIcon className="h-4 w-4 text-orange-500 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Book + Pizza Slice",
    description: "Study essentials - books and food combined",
    style: "playful",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <BookOpenIcon className="h-8 w-8 text-green-600" />
          <PizzaIcon className="h-5 w-5 text-red-500 absolute -top-1 -right-2" />
        </div>
        <div>
          <span className="text-xl font-bold text-green-600">Campus</span>
          <span className="text-xl font-bold text-red-500 ml-1">Eats</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Coffee Cup Scholar",
    description: "Coffee cup with graduation cap - perfect for students",
    style: "modern",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <CoffeeIcon className="h-8 w-8 text-amber-600" />
          <div className="absolute -top-2 -right-1 w-4 h-2 bg-blue-600 rounded-t-full"></div>
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: "School Building Bites",
    description: "University building with food elements",
    style: "academic",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <SchoolIcon className="h-8 w-8 text-indigo-600" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="absolute -bottom-1 -right-3 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <div>
          <span className="text-xl font-bold text-indigo-600">Campus</span>
          <span className="text-xl font-bold text-orange-500 ml-1">Eats</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    name: "Heart + Utensils",
    description: "Love for food with dining utensils",
    style: "playful",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <HeartIcon className="h-8 w-8 text-pink-500 fill-current" />
          <UtensilsIcon className="h-4 w-4 text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    name: "Star Scholar Dining",
    description: "Star rating system with academic theme",
    style: "modern",
    component: (
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <StarIcon className="h-6 w-6 text-yellow-500 fill-current" />
          <GraduationCapIcon className="h-6 w-6 text-blue-600 -ml-2" />
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-blue-600 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    name: "Trending Campus Food",
    description: "Trending up arrow with food theme",
    style: "bold",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <TrendingUpIcon className="h-8 w-8 text-emerald-600" />
          <UtensilsIcon className="h-4 w-4 text-orange-500 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <span className="text-xl font-bold text-emerald-600">Campus</span>
          <span className="text-xl font-bold text-orange-500 ml-1">Eats</span>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    name: "Lightning Fast Delivery",
    description: "Speed and energy for quick campus delivery",
    style: "bold",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <ZapIcon className="h-8 w-8 text-yellow-500 fill-current" />
          <UtensilsIcon className="h-4 w-4 text-blue-600 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-blue-600 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    name: "Shopping Bag Scholar",
    description: "Shopping bag with graduation cap for student convenience",
    style: "modern",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <ShoppingBagIcon className="h-8 w-8 text-purple-600" />
          <GraduationCapIcon className="h-5 w-5 text-blue-600 absolute -top-1 -right-1" />
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    name: "Campus Map Pin",
    description: "Location pin showing campus food delivery",
    style: "minimalist",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <MapPinIcon className="h-8 w-8 text-red-500 fill-current" />
          <UtensilsIcon className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div>
          <span className="text-xl font-bold text-red-500">Campus</span>
          <span className="text-xl font-bold text-gray-700 ml-1">Eats</span>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    name: "Quick Time Dining",
    description: "Clock showing fast service for busy students",
    style: "modern",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <ClockIcon className="h-8 w-8 text-blue-500" />
          <UtensilsIcon className="h-4 w-4 text-orange-500 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    name: "Student Community Food",
    description: "People icon representing student community dining",
    style: "playful",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <UsersIcon className="h-8 w-8 text-teal-600" />
          <UtensilsIcon className="h-4 w-4 text-orange-500 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <span className="text-xl font-bold text-teal-600">Campus</span>
          <span className="text-xl font-bold text-orange-500 ml-1">Eats</span>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    name: "Sparkle Fresh Food",
    description: "Sparkles indicating fresh, quality food",
    style: "playful",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <SparklesIcon className="h-8 w-8 text-purple-500" />
          <UtensilsIcon className="h-4 w-4 text-green-500 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-green-500 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    name: "Minimalist CE",
    description: "Clean, simple initials with subtle food accent",
    style: "minimalist",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-2">
          <span className="text-white font-bold text-xl">CE</span>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
        </div>
        <div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Campus Eats
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 15,
    name: "Academic Appetite",
    description: "Book with bite taken out - studying makes you hungry",
    style: "playful",
    component: (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <BookOpenIcon className="h-8 w-8 text-blue-600" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-orange-500"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
        <div>
          <span className="text-xl font-bold text-blue-600">Campus</span>
          <span className="text-xl font-bold text-orange-500 ml-1">Eats</span>
        </div>
      </div>
    ),
  },
]

export default function LogoShowcase() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null)
  const [filterStyle, setFilterStyle] = useState<string>("all")

  const filteredLogos = filterStyle === "all" ? logoOptions : logoOptions.filter((logo) => logo.style === filterStyle)

  const styles = ["all", "modern", "playful", "academic", "minimalist", "bold"]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Campus Eats Logo Options
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose the perfect logo that represents your campus food delivery service
        </p>
      </div>

      {/* Style Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {styles.map((style) => (
          <Button
            key={style}
            variant={filterStyle === style ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterStyle(style)}
            className="capitalize"
          >
            {style}
          </Button>
        ))}
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLogos.map((logo) => (
          <Card
            key={logo.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedLogo === logo.id ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950" : "hover:shadow-md"
            }`}
            onClick={() => setSelectedLogo(selectedLogo === logo.id ? null : logo.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{logo.name}</CardTitle>
                <Badge variant="outline" className="capitalize">
                  {logo.style}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg">{logo.component}</div>
              <p className="text-sm text-muted-foreground text-center">{logo.description}</p>
              {selectedLogo === logo.id && (
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-300 text-center font-medium">
                    ✓ Selected as your Campus Eats logo
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedLogo && (
        <div className="mt-8 text-center">
          <Card className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Your Selected Logo</h3>
              <div className="flex justify-center mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                {logoOptions.find((logo) => logo.id === selectedLogo)?.component}
              </div>
              <p className="text-sm text-muted-foreground">
                {logoOptions.find((logo) => logo.id === selectedLogo)?.description}
              </p>
              <Button
                className="mt-4"
                onClick={() => {
                  // Here you would implement the logo selection logic
                  alert(
                    `Great choice! "${logoOptions.find((logo) => logo.id === selectedLogo)?.name}" has been selected as your Campus Eats logo.`,
                  )
                }}
              >
                Use This Logo
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Logo Selection Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Academic Style:</strong> Perfect for university-focused branding
              </div>
              <div>
                <strong className="text-foreground">Playful Style:</strong> Appeals to younger student demographics
              </div>
              <div>
                <strong className="text-foreground">Modern Style:</strong> Clean, contemporary look for tech-savvy users
              </div>
              <div>
                <strong className="text-foreground">Minimalist Style:</strong> Simple, versatile design for all
                platforms
              </div>
              <div>
                <strong className="text-foreground">Bold Style:</strong> Eye-catching design for strong brand presence
              </div>
              <div>
                <strong className="text-foreground">Consider:</strong> How it looks on mobile apps, business cards, and
                signage
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
