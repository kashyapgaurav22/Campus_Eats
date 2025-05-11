"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon, MapPinIcon, ClockIcon, ExternalLinkIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const trendingFood = [
  {
    id: 1,
    name: "Spicy Ramen Bowl",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
    outlet: "Noodle House",
    outletId: "1",
    price: 8.99,
    rating: 4.8,
    tags: ["Spicy", "Popular"],
  },
  {
    id: 2,
    name: "Veggie Supreme Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    outlet: "Pizza Corner",
    outletId: "2",
    price: 12.99,
    rating: 4.5,
    tags: ["Vegetarian", "New"],
  },
  {
    id: 3,
    name: "Grilled Chicken Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    outlet: "Health Hut",
    outletId: "3",
    price: 10.5,
    rating: 4.7,
    tags: ["Healthy", "Protein-Rich"],
  },
  {
    id: 4,
    name: "Classic Cheeseburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    outlet: "Burger Shack",
    outletId: "4",
    price: 9.99,
    rating: 4.6,
    tags: ["Bestseller", "Comfort Food"],
  },
  {
    id: 5,
    name: "Fresh Fruit Smoothie",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=800&auto=format&fit=crop",
    outlet: "Health Hut",
    outletId: "3",
    price: 6.5,
    rating: 4.9,
    tags: ["Refreshing", "Healthy"],
  },
]

const outlets = [
  {
    id: "1",
    name: "Noodle House",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=400&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop",
    location: "Student Union, Ground Floor",
    hours: "8:00 AM - 8:00 PM",
    cuisine: "Asian",
    description: "Authentic Asian noodles and soups made fresh daily.",
  },
  {
    id: "2",
    name: "Pizza Corner",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=400&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    location: "Engineering Building, 1st Floor",
    hours: "10:00 AM - 9:00 PM",
    cuisine: "Italian",
    description: "Hand-tossed pizzas with a variety of fresh toppings.",
  },
  {
    id: "3",
    name: "Health Hut",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=400&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=800&auto=format&fit=crop",
    location: "Sports Complex",
    hours: "7:00 AM - 7:00 PM",
    cuisine: "Health Food",
    description: "Nutritious meals, smoothies, and protein shakes for the health-conscious.",
  },
  {
    id: "4",
    name: "Burger Shack",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=400&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    location: "Central Quad",
    hours: "11:00 AM - 10:00 PM",
    cuisine: "American",
    description: "Juicy burgers and crispy fries that satisfy your cravings.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleFoods, setVisibleFoods] = useState(trendingFood.slice(0, 3))

  // Auto-rotate through trending foods
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % trendingFood.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Trending Today
            </span>
          </motion.h2>
          <div className="flex space-x-2">
            {trendingFood.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[400px] mb-8 overflow-hidden rounded-xl shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="relative h-full">
                <Image
                  src={trendingFood[activeIndex].image || "/placeholder.svg"}
                  alt={trendingFood[activeIndex].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold mb-2">{trendingFood[activeIndex].name}</h3>
                    <p className="text-lg mb-2">From {trendingFood[activeIndex].outlet}</p>
                    <div className="flex items-center mb-4">
                      <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="mr-4">{trendingFood[activeIndex].rating}</span>
                      <span className="text-xl font-bold">${trendingFood[activeIndex].price.toFixed(2)}</span>
                    </div>
                    <div className="flex space-x-2">
                      {trendingFood[activeIndex].tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/20 hover:bg-white/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleFoods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                <div className="relative">
                  <Image
                    src={food.image || "/placeholder.svg"}
                    alt={food.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-white/80 dark:bg-gray-900/80 text-primary dark:text-white hover:bg-white dark:hover:bg-gray-900">
                      ${food.price.toFixed(2)}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">{food.name}</h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">{food.outlet}</p>
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="dark:text-white">{food.rating}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    {food.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs dark:text-gray-200 dark:border-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/food/${food.id}`}>
                    <motion.button
                      className="mt-4 w-full flex items-center justify-center p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="mr-1">Order Now</span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Campus Outlets
          </span>
        </motion.h2>
        <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
          {outlets.map((outlet, index) => (
            <motion.div
              key={outlet.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Link href={`/outlet/${outlet.id}`} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 p-4 flex justify-center items-center bg-gradient-to-br from-pink-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                          <Image
                            src={outlet.coverImage || "/placeholder.svg"}
                            alt={`${outlet.name} background`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <motion.div
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="z-10"
                        >
                          <Image
                            src={outlet.image || "/placeholder.svg"}
                            alt={outlet.name}
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                          />
                        </motion.div>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold dark:text-white">{outlet.name}</h3>
                          <Badge className="ml-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600">
                            {outlet.cuisine}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground dark:text-gray-300 mb-4">{outlet.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-2 text-pink-500" />
                            <span className="dark:text-gray-200">{outlet.location}</span>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-2 text-blue-500" />
                            <span className="dark:text-gray-200">{outlet.hours}</span>
                          </div>
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="flex items-center mr-4">
                            <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                            <span className="font-semibold dark:text-white">{outlet.rating}</span>
                          </div>
                          <motion.div
                            className="flex items-center text-primary dark:text-blue-400 hover:underline"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <span className="mr-1">View Menu</span>
                            <ExternalLinkIcon className="h-4 w-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  )
}
