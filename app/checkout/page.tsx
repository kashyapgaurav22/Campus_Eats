"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Layout from "@/components/layout"
import { useCart } from "@/context/cart-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TimeSlotSelector } from "@/components/time-slot-selector"
import Image from "next/image"
import { CheckIcon, CreditCardIcon, HomeIcon, MapPinIcon, Loader2Icon, ClockIcon } from "lucide-react"
// Import the PaymentDebug component
import { PaymentDebug } from "@/components/payment-debug"

// Razorpay types
declare global {
  interface Window {
    Razorpay: any
  }
}

type Address = {
  name: string
  phone: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  pincode: string
  type: "home" | "work" | "other"
}

type TimeSlot = {
  id: string
  startTime: Date
  endTime: Date
  label: string
  available: boolean
}

const savedAddresses: Address[] = [
  {
    name: "John Doe",
    phone: "9876543210",
    addressLine1: "Room 123, Block A",
    addressLine2: "Student Hostel",
    city: "University City",
    state: "State",
    pincode: "123456",
    type: "home",
  },
]

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const [addressTab, setAddressTab] = useState("saved")
  const [paymentMethod, setPaymentMethod] = useState("razorpay")
  const [selectedAddress, setSelectedAddress] = useState<number | null>(0)
  const [newAddress, setNewAddress] = useState<Partial<Address>>({
    type: "home",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)
  const [deliveryOption, setDeliveryOption] = useState<"asap" | "scheduled">("asap")

  const deliveryFee = subtotal > 0 ? 2.99 : 0
  const total = subtotal + deliveryFee

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewAddress((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddressTypeChange = (value: string) => {
    setNewAddress((prev) => ({ ...prev, type: value as "home" | "work" | "other" }))
  }

  const handlePayment = async () => {
    if (items.length === 0) return
    if (deliveryOption === "scheduled" && !selectedTimeSlot) {
      alert("Please select a delivery time slot")
      return
    }

    setIsProcessing(true)

    try {
      // In a real app, you would make an API call to your backend to create an order
      // and get the order ID from Razorpay

      // Simulate API call to create order
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate a random order ID
      const generatedOrderId = `ORDER_${Math.floor(Math.random() * 1000000)}`
      setOrderId(generatedOrderId)

      if (paymentMethod === "razorpay") {
        // For test mode, we'll simulate a successful payment
        if (window.location.hostname === "localhost" || window.location.hostname.includes("vercel.app")) {
          console.log("Running in test mode - simulating successful payment")
          // Simulate a successful payment after 2 seconds
          setTimeout(() => {
            completeOrder(generatedOrderId)
          }, 2000)
          return
        }

        // Load Razorpay script
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.async = true
        script.onload = () => {
          try {
            // Create a new Razorpay instance
            const razorpay = new window.Razorpay({
              key: "rzp_test_1DP5mmOlF5G5ag", // Razorpay test key
              amount: Math.round(total * 100), // Amount in smallest currency unit (paise for INR)
              currency: "INR",
              name: "Campus Eats",
              description: "Food Order Payment",
              order_id: generatedOrderId, // This would come from your backend in a real app
              image: "https://your-logo-url.png", // Replace with your logo
              handler: (response: any) => {
                // Handle successful payment
                console.log("Payment successful:", response)
                completeOrder(generatedOrderId)
              },
              prefill: {
                name: selectedAddress !== null ? savedAddresses[selectedAddress].name : newAddress.name,
                contact: selectedAddress !== null ? savedAddresses[selectedAddress].phone : newAddress.phone,
                email: "customer@example.com",
              },
              theme: {
                color: "#3B82F6",
              },
              modal: {
                ondismiss: () => {
                  console.log("Payment modal closed")
                  setIsProcessing(false)
                },
              },
            })

            razorpay.on("payment.failed", (response: any) => {
              console.error("Payment failed:", response.error)
              alert(`Payment failed: ${response.error.description}`)
              setIsProcessing(false)
            })

            razorpay.open()
          } catch (error) {
            console.error("Razorpay initialization error:", error)
            alert("Could not initialize payment gateway. Using test mode instead.")
            // Fallback to test mode
            setTimeout(() => {
              completeOrder(generatedOrderId)
            }, 2000)
          }
        }

        script.onerror = () => {
          console.error("Failed to load Razorpay script")
          alert("Could not load payment gateway. Using test mode instead.")
          // Fallback to test mode
          setTimeout(() => {
            completeOrder(generatedOrderId)
          }, 2000)
        }

        document.body.appendChild(script)
      } else {
        // Simulate payment for cash on delivery
        setTimeout(() => {
          completeOrder(generatedOrderId)
        }, 2000)
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("An error occurred during payment processing. Using test mode instead.")

      // Fallback to test mode
      const generatedOrderId = `ORDER_${Math.floor(Math.random() * 1000000)}`
      setTimeout(() => {
        completeOrder(generatedOrderId)
      }, 2000)
    }
  }

  const completeOrder = (orderId: string) => {
    console.log(`Order ${orderId} completed successfully`)
    setIsProcessing(false)
    setOrderComplete(true)

    // Calculate estimated delivery time based on selected time slot or ASAP
    let estimatedDelivery: Date
    if (deliveryOption === "scheduled" && selectedTimeSlot) {
      estimatedDelivery = new Date(selectedTimeSlot.startTime)
    } else {
      // Default: 30 minutes from now for ASAP delivery
      estimatedDelivery = new Date(Date.now() + 30 * 60000)
    }

    // Save order details to localStorage for tracking
    const orderDetails = {
      id: orderId,
      items: items,
      total: total,
      address: selectedAddress !== null ? savedAddresses[selectedAddress] : newAddress,
      paymentMethod: paymentMethod,
      status: "confirmed",
      timestamp: new Date().toISOString(),
      estimatedDelivery: estimatedDelivery.toISOString(),
      scheduledDelivery:
        deliveryOption === "scheduled" && selectedTimeSlot
          ? {
              timeSlot: selectedTimeSlot.label,
              startTime: selectedTimeSlot.startTime.toISOString(),
              endTime: selectedTimeSlot.endTime.toISOString(),
            }
          : null,
      deliveryPerson: {
        name: "Alex Johnson",
        phone: "9876543210",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      },
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    localStorage.setItem("orders", JSON.stringify([orderDetails, ...existingOrders]))

    clearCart()

    // Redirect to order tracking after a delay
    setTimeout(() => {
      router.push(`/order-tracking/${orderId}`)
    }, 3000)
  }

  if (orderComplete) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-green-100 p-4 dark:bg-green-900">
            <CheckIcon className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="mt-6 text-3xl font-bold dark:text-white">Order Placed Successfully!</h1>
          <p className="mt-2 text-center text-muted-foreground dark:text-gray-300">
            Your order has been placed and is being processed. You will receive a confirmation shortly.
          </p>
          <div className="mt-4 text-center">
            <p className="text-lg font-medium dark:text-white">Order ID: {orderId}</p>
            <p className="text-muted-foreground dark:text-gray-300">You can track your order status in real-time</p>
            {deliveryOption === "scheduled" && selectedTimeSlot && (
              <p className="mt-2 text-sm font-medium dark:text-white">Scheduled delivery: {selectedTimeSlot.label}</p>
            )}
          </div>
          <Button className="mt-8" onClick={() => router.push(`/order-tracking/${orderId}`)}>
            Track Your Order
          </Button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPinIcon className="mr-2 h-5 w-5" />
                Delivery Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={addressTab} onValueChange={setAddressTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="saved">Saved Addresses</TabsTrigger>
                  <TabsTrigger value="new">Add New Address</TabsTrigger>
                </TabsList>

                <TabsContent value="saved">
                  {savedAddresses.length > 0 ? (
                    <div className="space-y-4">
                      {savedAddresses.map((address, index) => (
                        <div
                          key={index}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedAddress === index
                              ? "border-primary bg-primary/5 dark:bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedAddress(index)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <div className="mt-0.5">
                                {address.type === "home" ? (
                                  <HomeIcon className="h-5 w-5 text-blue-500" />
                                ) : (
                                  <MapPinIcon className="h-5 w-5 text-pink-500" />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-medium dark:text-white">{address.name}</h3>
                                  <Badge className="ml-2 capitalize">{address.type}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground dark:text-gray-300 mt-1">{address.phone}</p>
                                <p className="text-sm text-muted-foreground dark:text-gray-300 mt-1">
                                  {address.addressLine1}, {address.addressLine2}, {address.city}, {address.state} -{" "}
                                  {address.pincode}
                                </p>
                              </div>
                            </div>
                            {selectedAddress === index && (
                              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                                <CheckIcon className="h-4 w-4 text-white" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground dark:text-gray-300">
                        You don't have any saved addresses. Add a new address to continue.
                      </p>
                      <Button className="mt-4" onClick={() => setAddressTab("new")}>
                        Add New Address
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="new">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={newAddress.name || ""}
                          onChange={handleAddressChange}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={newAddress.phone || ""}
                          onChange={handleAddressChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="addressLine1">Address Line 1</Label>
                      <Input
                        id="addressLine1"
                        name="addressLine1"
                        value={newAddress.addressLine1 || ""}
                        onChange={handleAddressChange}
                        placeholder="House/Flat No., Building Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="addressLine2">Address Line 2</Label>
                      <Input
                        id="addressLine2"
                        name="addressLine2"
                        value={newAddress.addressLine2 || ""}
                        onChange={handleAddressChange}
                        placeholder="Street, Area, Landmark"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={newAddress.city || ""}
                          onChange={handleAddressChange}
                          placeholder="City"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={newAddress.state || ""}
                          onChange={handleAddressChange}
                          placeholder="State"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={newAddress.pincode || ""}
                          onChange={handleAddressChange}
                          placeholder="Pincode"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Address Type</Label>
                      <RadioGroup
                        value={newAddress.type}
                        onValueChange={handleAddressTypeChange}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="home" id="home" />
                          <Label htmlFor="home" className="cursor-pointer">
                            Home
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="work" id="work" />
                          <Label htmlFor="work" className="cursor-pointer">
                            Work
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other" className="cursor-pointer">
                            Other
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button
                      className="mt-2"
                      onClick={() => {
                        // In a real app, you would save this address to the user's profile
                        setAddressTab("saved")
                        setSelectedAddress(0)
                      }}
                    >
                      Save & Use This Address
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Delivery Time Selection */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClockIcon className="mr-2 h-5 w-5" />
                Delivery Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={deliveryOption}
                onValueChange={(value) => setDeliveryOption(value as "asap" | "scheduled")}
              >
                <div className="space-y-4">
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      deliveryOption === "asap"
                        ? "border-primary bg-primary/5 dark:bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setDeliveryOption("asap")}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="asap" id="asap" />
                      <Label htmlFor="asap" className="ml-3 cursor-pointer font-medium">
                        Deliver ASAP (30-45 minutes)
                      </Label>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 mt-2 pl-7">
                      Get your order as soon as possible
                    </p>
                  </div>

                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      deliveryOption === "scheduled"
                        ? "border-primary bg-primary/5 dark:bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setDeliveryOption("scheduled")}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="scheduled" id="scheduled" />
                      <Label htmlFor="scheduled" className="ml-3 cursor-pointer font-medium">
                        Schedule for Later
                      </Label>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 mt-2 pl-7">
                      Choose a specific time slot for delivery
                    </p>

                    {deliveryOption === "scheduled" && (
                      <div className="mt-4 pl-7">
                        <TimeSlotSelector onSelectTimeSlot={setSelectedTimeSlot} selectedTimeSlot={selectedTimeSlot} />
                      </div>
                    )}
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCardIcon className="mr-2 h-5 w-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-4">
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "razorpay"
                        ? "border-primary bg-primary/5 dark:bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setPaymentMethod("razorpay")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="razorpay" id="razorpay" />
                        <div className="flex items-center">
                          <Image
                            src="https://razorpay.com/assets/razorpay-logo.svg"
                            alt="Razorpay"
                            width={100}
                            height={30}
                            className="h-8 w-auto"
                          />
                          <Label htmlFor="razorpay" className="ml-2 cursor-pointer">
                            Pay with Razorpay
                          </Label>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
                          alt="Visa"
                          width={32}
                          height={32}
                          className="h-8 w-auto"
                        />
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
                          alt="Mastercard"
                          width={32}
                          height={32}
                          className="h-8 w-auto"
                        />
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                          alt="UPI"
                          width={32}
                          height={32}
                          className="h-8 w-auto"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 mt-2 pl-7">
                      Pay securely using Credit/Debit card, Net Banking, UPI, or Wallets
                    </p>
                  </div>

                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-primary bg-primary/5 dark:bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setPaymentMethod("cod")}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="ml-3 cursor-pointer">
                        Cash on Delivery
                      </Label>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 mt-2 pl-7">
                      Pay with cash when your order is delivered
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24">
            <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  {items.length} {items.length === 1 ? "item" : "items"} in your cart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="max-h-64 overflow-y-auto space-y-3 pr-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium truncate dark:text-white">{item.name}</h4>
                          <p className="text-xs text-muted-foreground dark:text-gray-300">
                            {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="text-sm font-medium dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground dark:text-gray-300">Subtotal</span>
                      <span className="dark:text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground dark:text-gray-300">Delivery Fee</span>
                      <span className="dark:text-white">${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="dark:text-white">Total</span>
                      <span className="dark:text-white">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    disabled={
                      items.length === 0 ||
                      isProcessing ||
                      (addressTab === "saved" && selectedAddress === null) ||
                      (addressTab === "new" &&
                        (!newAddress.name ||
                          !newAddress.phone ||
                          !newAddress.addressLine1 ||
                          !newAddress.city ||
                          !newAddress.state ||
                          !newAddress.pincode)) ||
                      (deliveryOption === "scheduled" && !selectedTimeSlot)
                    }
                    onClick={handlePayment}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      `Pay ${total.toFixed(2)}`
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground dark:text-gray-300">
                    By placing your order, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <PaymentDebug />
    </Layout>
  )
}

import { Badge } from "@/components/ui/badge"
