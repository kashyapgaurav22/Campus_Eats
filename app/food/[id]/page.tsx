"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon, Clock, Utensils, Flame } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// This would typically come from an API or database
const foodItem = {
  id: 1,
  name: "Spicy Ramen Bowl",
  description:
    "A hearty bowl of ramen with spicy broth, tender pork, and fresh vegetables. Topped with a soft-boiled egg, green onions, and nori.",
  price: 8.99,
  image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=800&auto=format&fit=crop",
  ],
  outlet: "Noodle House",
  rating: 4.5,
  isVeg: false,
  prepTime: "15 min",
  calories: 520,
  spicyLevel: "Medium",
  ingredients: [
    "Ramen noodles",
    "Pork belly",
    "Soft-boiled egg",
    "Green onions",
    "Nori",
    "Spicy broth",
    "Bean sprouts",
  ],
}

const reviews = [
  { id: 1, user: "Alice", rating: 5, comment: "Absolutely delicious! The broth is perfect.", date: "2025-03-15" },
  { id: 2, user: "Bob", rating: 4, comment: "Great flavor, but a bit too spicy for me.", date: "2025-03-10" },
  {
    id: 3,
    user: "Charlie",
    rating: 5,
    comment: "My favorite ramen on campus! I order this at least twice a week.",
    date: "2025-03-05",
  },
]

export default function FoodDetail() {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  return (
    <Layout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[300px] rounded-lg overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={foodItem.gallery[activeImage] || "/placeholder.svg"}
                        alt={foodItem.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                <div className="flex space-x-2">
                  {foodItem.gallery.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative h-16 w-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                        activeImage === index ? "border-primary" : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${foodItem.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-3xl font-bold mb-2 dark:text-white"
                >
                  {foodItem.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-muted-foreground dark:text-gray-300 mb-4"
                >
                  {foodItem.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center mb-4"
                >
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-semibold mr-2 dark:text-white">{foodItem.rating}</span>
                  <Badge
                    variant={foodItem.isVeg ? "success" : "secondary"}
                    className="dark:bg-gray-700 dark:text-white"
                  >
                    {foodItem.isVeg ? "Veg" : "Non-veg"}
                  </Badge>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="grid grid-cols-3 gap-2 mb-4"
                >
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground dark:text-gray-400" />
                    <span className="text-sm dark:text-gray-300">{foodItem.prepTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="h-4 w-4 mr-2 text-muted-foreground dark:text-gray-400" />
                    <span className="text-sm dark:text-gray-300">{foodItem.calories} cal</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-4 w-4 mr-2 text-red-500" />
                    <span className="text-sm dark:text-gray-300">{foodItem.spicyLevel}</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h3 className="font-semibold mb-2 dark:text-white">Ingredients:</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {foodItem.ingredients.map((ingredient, idx) => (
                      <Badge key={idx} variant="outline" className="dark:text-gray-200 dark:border-gray-600">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-2xl font-bold mb-4 dark:text-white"
                >
                  ${foodItem.price.toFixed(2)}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <Button variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </Button>
                  <span className="font-semibold dark:text-white">{quantity}</span>
                  <Button variant="outline" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </Button>
                  <Button className="flex-1">Add to Cart</Button>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
          <CardHeader>
            <CardTitle className="dark:text-white">Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence>
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="mb-4 pb-4 border-b dark:border-gray-700 last:border-b-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold mr-2">
                        {review.user.charAt(0)}
                      </div>
                      <span className="font-semibold dark:text-white">{review.user}</span>
                    </div>
                    <span className="text-sm text-muted-foreground dark:text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground dark:text-gray-300">{review.comment}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </Layout>
  )
}
