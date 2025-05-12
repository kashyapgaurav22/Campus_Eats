"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import { useState } from "react"
import { useParams } from "next/navigation"
import Layout from "@/components/layout"
import { useCart } from "@/context/cart-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  StarIcon,
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  InfoIcon,
  ShoppingBagIcon,
  HeartIcon,
  BarChart3Icon,
  CheckIcon,
  PlusIcon,
  MinusIcon,
} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// This would typically come from an API or database
const outlets = [
  {
    id: "1",
    name: "Noodle House",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=400&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop",
    location: "Student Union, Ground Floor",
    hours: "8:00 AM - 8:00 PM",
    phone: "+1 (555) 123-4567",
    cuisine: "Asian",
    description:
      "Authentic Asian noodles and soups made fresh daily. Our chefs use traditional recipes and techniques to bring you the best flavors from across Asia.",
    categories: ["Ramen", "Noodles", "Soups", "Rice Bowls", "Sides"],
    menu: [
      {
        id: "n1",
        name: "Spicy Ramen Bowl",
        description: "Rich pork broth with spicy miso, chashu pork, soft-boiled egg, and fresh vegetables",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
        category: "Ramen",
        isVeg: false,
        isSpicy: true,
        isPopular: true,
        nutrition: {
          calories: 520,
          protein: 28,
          carbs: 65,
          fat: 18,
          sugar: 4,
          fiber: 6,
        },
      },
      {
        id: "n2",
        name: "Vegetable Udon",
        description: "Thick udon noodles in vegetable broth with seasonal vegetables and tofu",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=800&auto=format&fit=crop",
        category: "Noodles",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        nutrition: {
          calories: 420,
          protein: 18,
          carbs: 72,
          fat: 8,
          sugar: 6,
          fiber: 8,
        },
      },
      {
        id: "n3",
        name: "Chicken Teriyaki Rice Bowl",
        description: "Grilled chicken with teriyaki sauce over steamed rice with vegetables",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
        category: "Rice Bowls",
        isVeg: false,
        isSpicy: false,
        isPopular: true,
        nutrition: {
          calories: 580,
          protein: 32,
          carbs: 78,
          fat: 14,
          sugar: 8,
          fiber: 4,
        },
      },
      {
        id: "n4",
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu, seaweed, and green onions",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
        category: "Soups",
        isVeg: true,
        isSpicy: false,
        isPopular: false,
        nutrition: {
          calories: 120,
          protein: 8,
          carbs: 12,
          fat: 4,
          sugar: 2,
          fiber: 2,
        },
      },
      {
        id: "n5",
        name: "Gyoza (6 pcs)",
        description: "Pan-fried dumplings filled with pork and vegetables",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop",
        category: "Sides",
        isVeg: false,
        isSpicy: false,
        isPopular: true,
        nutrition: {
          calories: 320,
          protein: 14,
          carbs: 36,
          fat: 12,
          sugar: 2,
          fiber: 2,
        },
      },
    ],
  },
  {
    id: "2",
    name: "Pizza Corner",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=400&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    location: "Engineering Building, 1st Floor",
    hours: "10:00 AM - 9:00 PM",
    phone: "+1 (555) 987-6543",
    cuisine: "Italian",
    description:
      "Hand-tossed pizzas with a variety of fresh toppings. Our dough is made fresh daily and we use only the finest ingredients.",
    categories: ["Pizzas", "Pastas", "Salads", "Sides", "Desserts"],
    menu: [
      {
        id: "p1",
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
        category: "Pizzas",
        isVeg: true,
        isSpicy: false,
        isPopular: true,
        nutrition: {
          calories: 680,
          protein: 24,
          carbs: 86,
          fat: 26,
          sugar: 8,
          fiber: 4,
        },
      },
      {
        id: "p2",
        name: "Pepperoni Pizza",
        description: "Tomato sauce, mozzarella, and pepperoni",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
        category: "Pizzas",
        isVeg: false,
        isSpicy: false,
        isPopular: true,
        nutrition: {
          calories: 780,
          protein: 32,
          carbs: 84,
          fat: 36,
          sugar: 6,
          fiber: 4,
        },
      },
    ],
  },
]

// Nutrition chart colors
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

export default function OutletDetail() {
  const params = useParams()
  const outletId = params.id as string
  const outlet = outlets.find((o) => o.id === outletId) || outlets[0]
  const { addItem, items } = useCart()

  const [activeCategory, setActiveCategory] = useState<string>(outlet.categories[0])
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({})
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  const [quickViewItem, setQuickViewItem] = useState<any>(null)

  const filteredMenu = outlet.menu.filter((item) =>
    activeCategory === "All" ? true : item.category === activeCategory,
  )

  // Convert nutrition data to chart format
  const getNutritionChartData = (nutrition: any) => {
    return [
      { name: "Protein", value: nutrition.protein },
      { name: "Carbs", value: nutrition.carbs },
      { name: "Fat", value: nutrition.fat },
      { name: "Sugar", value: nutrition.sugar },
      { name: "Fiber", value: nutrition.fiber },
    ]
  }

  // Convert nutrition data to bar chart format
  const getNutritionBarData = (nutrition: any) => {
    return [
      {
        name: "Grams",
        protein: nutrition.protein,
        carbs: nutrition.carbs,
        fat: nutrition.fat,
        sugar: nutrition.sugar,
        fiber: nutrition.fiber,
      },
    ]
  }

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      outletId: outlet.id,
      outletName: outlet.name,
    })

    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      action: (
        <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
          <CheckIcon className="h-5 w-5 text-white" />
        </div>
      ),
    })
  }

  const updateItemQuantity = (itemId: string, delta: number) => {
    setItemQuantities((prev) => {
      const currentQuantity = prev[itemId] || 1
      const newQuantity = Math.max(1, currentQuantity + delta)
      return { ...prev, [itemId]: newQuantity }
    })
  }

  const getItemQuantity = (itemId: string) => {
    return itemQuantities[itemId] || 1
  }

  const openQuickView = (item: any) => {
    setQuickViewItem(item)
    setIsQuickViewOpen(true)
  }

  return (
    <Layout>
      <Toaster />
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] -mx-4 mb-8">
        <Image src={outlet.coverImage || "/placeholder.svg"} alt={outlet.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className="flex items-center">
            <div className="relative h-20 w-20 mr-4">
              <Image
                src={outlet.image || "/placeholder.svg"}
                alt={outlet.name}
                fill
                className="rounded-full border-4 border-white object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{outlet.name}</h1>
              <div className="flex items-center text-white">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="mr-4">{outlet.rating}</span>
                <Badge className="bg-white/20">{outlet.cuisine}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <Card className="mb-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-pink-500 mr-2" />
              <span className="dark:text-gray-200">{outlet.location}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
              <span className="dark:text-gray-200">{outlet.hours}</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-green-500 mr-2" />
              <span className="dark:text-gray-200">{outlet.phone}</span>
            </div>
          </div>
          <p className="text-muted-foreground dark:text-gray-300">{outlet.description}</p>
        </CardContent>
      </Card>

      {/* Menu Section */}
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
        <CardHeader>
          <CardTitle className="dark:text-white">Menu</CardTitle>
          <CardDescription className="dark:text-gray-300">Browse our selection of delicious items</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={outlet.categories[0]} className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="mb-6 w-full overflow-x-auto flex flex-nowrap justify-start md:justify-center">
              {outlet.categories.map((category) => (
                <TabsTrigger key={category} value={category} className="whitespace-nowrap">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {filteredMenu.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.01 }}
                      className="group"
                    >
                      <Card className="overflow-hidden hover:shadow-md transition-all duration-300 dark:bg-gray-700/50">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 relative">
                              <div
                                className="aspect-square md:aspect-auto md:h-full cursor-pointer"
                                onClick={() => openQuickView(item)}
                              >
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="absolute top-2 right-2 flex space-x-1">
                                {item.isVeg && <Badge className="bg-green-500 text-white">Veg</Badge>}
                                {item.isSpicy && <Badge className="bg-red-500 text-white">Spicy</Badge>}
                                {item.isPopular && <Badge className="bg-yellow-500 text-white">Popular</Badge>}
                              </div>
                            </div>
                            <div className="p-4 md:w-3/4 flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between items-start mb-2">
                                  <h3
                                    className="text-xl font-bold dark:text-white cursor-pointer hover:underline"
                                    onClick={() => openQuickView(item)}
                                  >
                                    {item.name}
                                  </h3>
                                  <span className="font-bold dark:text-white">${item.price.toFixed(2)}</span>
                                </div>
                                <p className="text-muted-foreground dark:text-gray-300 mb-4">{item.description}</p>
                                <div className="flex items-center mb-2">
                                  <InfoIcon className="h-4 w-4 text-blue-500 mr-1" />
                                  <span className="text-sm text-muted-foreground dark:text-gray-300">
                                    {item.nutrition.calories} calories
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center mt-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm" onClick={() => setSelectedItem(item)}>
                                      <BarChart3Icon className="h-4 w-4 mr-2" />
                                      Nutrition Info
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                      <DialogTitle>{item.name} - Nutrition Information</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                                      <div>
                                        <h4 className="text-sm font-medium mb-2 text-center">Nutrition Distribution</h4>
                                        <div className="h-[180px] px-2">
                                          <ResponsiveContainer width="99%" height="99%">
                                            <PieChart>
                                              <Pie
                                                data={getNutritionChartData(item.nutrition)}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                              >
                                                {getNutritionChartData(item.nutrition).map((entry, index) => (
                                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                              </Pie>
                                              <Tooltip />
                                            </PieChart>
                                          </ResponsiveContainer>
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="text-sm font-medium mb-2 text-center">Macronutrients (g)</h4>
                                        <div className="h-[180px] px-2">
                                          <ChartContainer
                                            config={{
                                              protein: {
                                                label: "Protein",
                                                color: "hsl(var(--chart-1))",
                                              },
                                              carbs: {
                                                label: "Carbs",
                                                color: "hsl(var(--chart-2))",
                                              },
                                              fat: {
                                                label: "Fat",
                                                color: "hsl(var(--chart-3))",
                                              },
                                              sugar: {
                                                label: "Sugar",
                                                color: "hsl(var(--chart-4))",
                                              },
                                              fiber: {
                                                label: "Fiber",
                                                color: "hsl(var(--chart-5))",
                                              },
                                            }}
                                            className="h-[180px]"
                                          >
                                            <ResponsiveContainer width="100%" height="100%">
                                              <BarChart data={getNutritionBarData(item.nutrition)}>
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <ChartTooltip content={<ChartTooltipContent />} />
                                                <Legend />
                                                <Bar dataKey="protein" fill="var(--color-protein)" />
                                                <Bar dataKey="carbs" fill="var(--color-carbs)" />
                                                <Bar dataKey="fat" fill="var(--color-fat)" />
                                                <Bar dataKey="sugar" fill="var(--color-sugar)" />
                                                <Bar dataKey="fiber" fill="var(--color-fiber)" />
                                              </BarChart>
                                            </ResponsiveContainer>
                                          </ChartContainer>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                                        <p className="text-xs text-muted-foreground dark:text-gray-300">Calories</p>
                                        <p className="font-bold dark:text-white">{item.nutrition.calories}</p>
                                      </div>
                                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                                        <p className="text-xs text-muted-foreground dark:text-gray-300">Protein</p>
                                        <p className="font-bold dark:text-white">{item.nutrition.protein}g</p>
                                      </div>
                                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                                        <p className="text-xs text-muted-foreground dark:text-gray-300">Carbs</p>
                                        <p className="font-bold dark:text-white">{item.nutrition.carbs}g</p>
                                      </div>
                                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                                        <p className="text-xs text-muted-foreground dark:text-gray-300">Fat</p>
                                        <p className="font-bold dark:text-white">{item.nutrition.fat}g</p>
                                      </div>
                                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                                        <p className="text-xs text-muted-foreground dark:text-gray-300">Sugar</p>
                                        <p className="font-bold dark:text-white">{item.nutrition.sugar}g</p>
                                      </div>
                                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                                        <p className="text-xs text-muted-foreground dark:text-gray-300">Fiber</p>
                                        <p className="font-bold dark:text-white">{item.nutrition.fiber}g</p>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                <div className="flex space-x-2">
                                  <div className="flex items-center border rounded-md overflow-hidden">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 rounded-none"
                                      onClick={() => updateItemQuantity(item.id, -1)}
                                    >
                                      <MinusIcon className="h-4 w-4" />
                                    </Button>
                                    <span className="w-8 text-center">{getItemQuantity(item.id)}</span>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 rounded-none"
                                      onClick={() => updateItemQuantity(item.id, 1)}
                                    >
                                      <PlusIcon className="h-4 w-4" />
                                    </Button>
                                  </div>
                                  <Button size="sm" onClick={() => handleAddToCart(item)}>
                                    <ShoppingBagIcon className="h-4 w-4 mr-2" />
                                    Add to Cart
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <HeartIcon className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick View Dialog */}
      <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
        <DialogContent className="sm:max-w-[500px]">
          {quickViewItem && (
            <>
              <DialogHeader>
                <DialogTitle>{quickViewItem.name}</DialogTitle>
                <DialogDescription>${quickViewItem.price.toFixed(2)}</DialogDescription>
              </DialogHeader>
              <div className="relative h-[200px] w-full rounded-md overflow-hidden my-4">
                <Image
                  src={quickViewItem.image || "/placeholder.svg"}
                  alt={quickViewItem.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground dark:text-gray-300">{quickViewItem.description}</p>

                <div className="flex items-center space-x-2">
                  {quickViewItem.isVeg && <Badge className="bg-green-500 text-white">Veg</Badge>}
                  {quickViewItem.isSpicy && <Badge className="bg-red-500 text-white">Spicy</Badge>}
                  {quickViewItem.isPopular && <Badge className="bg-yellow-500 text-white">Popular</Badge>}
                </div>

                <div className="flex items-center">
                  <InfoIcon className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm text-muted-foreground dark:text-gray-300">
                    {quickViewItem.nutrition.calories} calories
                  </span>
                </div>

                <div className="flex items-center space-x-2 pt-4">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => updateItemQuantity(quickViewItem.id, -1)}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{getItemQuantity(quickViewItem.id)}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => updateItemQuantity(quickViewItem.id, 1)}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    className="flex-1"
                    onClick={() => {
                      handleAddToCart(quickViewItem)
                      setIsQuickViewOpen(false)
                    }}
                  >
                    <ShoppingBagIcon className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>

                <div className="flex justify-between pt-2">
                  <Button variant="outline" onClick={() => setIsQuickViewOpen(false)}>
                    Close
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedItem(quickViewItem)
                      setIsQuickViewOpen(false)
                    }}
                  >
                    <BarChart3Icon className="h-4 w-4 mr-2" />
                    Nutrition Info
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  )
}
