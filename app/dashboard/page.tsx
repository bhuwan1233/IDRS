"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Mountain,
  Search,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Camera,
  Compass,
  Heart,
  LogOut,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface Destination {
  id: number
  name: string
  location: string
  image: string
  rating: number
  price: string
  duration: string
  type: string[]
  budget: string
  season: string[]
  activities: string[]
  description: string
  highlights: string[]
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    location: "Khumbu Region",
    image: "/placeholder.svg?height=300&width=400&text=Everest+Base+Camp",
    rating: 4.9,
    price: "$1200-2000",
    duration: "12-16 days",
    type: ["Adventure", "Trekking"],
    budget: "High",
    season: ["Spring", "Autumn"],
    activities: ["Trekking", "Photography", "Cultural Experience"],
    description: "The ultimate trekking adventure to the base of the world's highest peak.",
    highlights: ["Sherpa Culture", "Stunning Mountain Views", "Namche Bazaar", "Tengboche Monastery"],
  },
  {
    id: 2,
    name: "Pokhara Lake District",
    location: "Gandaki Province",
    image: "/placeholder.svg?height=300&width=400&text=Pokhara+Lake",
    rating: 4.7,
    price: "$300-600",
    duration: "3-7 days",
    type: ["Relaxation", "Adventure"],
    budget: "Medium",
    season: ["Spring", "Summer", "Autumn"],
    activities: ["Boating", "Paragliding", "Photography", "Hiking"],
    description: "Serene lakes surrounded by the majestic Annapurna range.",
    highlights: ["Phewa Lake", "Paragliding", "World Peace Pagoda", "Sarangkot Sunrise"],
  },
  {
    id: 3,
    name: "Chitwan National Park",
    location: "Chitwan District",
    image: "/placeholder.svg?height=300&width=400&text=Chitwan+Safari",
    rating: 4.6,
    price: "$200-500",
    duration: "2-4 days",
    type: ["Wildlife", "Family"],
    budget: "Medium",
    season: ["Winter", "Spring"],
    activities: ["Safari", "Wildlife Watching", "Cultural Experience"],
    description: "UNESCO World Heritage site famous for rhinos and tigers.",
    highlights: ["One-horned Rhino", "Bengal Tigers", "Elephant Safari", "Tharu Culture"],
  },
  {
    id: 4,
    name: "Annapurna Circuit",
    location: "Annapurna Region",
    image: "/placeholder.svg?height=300&width=400&text=Annapurna+Circuit",
    rating: 4.8,
    price: "$800-1500",
    duration: "15-20 days",
    type: ["Adventure", "Trekking"],
    budget: "High",
    season: ["Spring", "Autumn"],
    activities: ["Trekking", "Photography", "Cultural Experience"],
    description: "Classic trek through diverse landscapes and cultures.",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Hot Springs", "Diverse Landscapes"],
  },
  {
    id: 5,
    name: "Kathmandu Valley",
    location: "Kathmandu",
    image: "/placeholder.svg?height=300&width=400&text=Kathmandu+Durbar",
    rating: 4.5,
    price: "$100-300",
    duration: "2-5 days",
    type: ["Cultural", "Heritage"],
    budget: "Low",
    season: ["Spring", "Summer", "Autumn", "Winter"],
    activities: ["Sightseeing", "Cultural Experience", "Photography"],
    description: "Rich cultural heritage with ancient temples and palaces.",
    highlights: ["Durbar Squares", "Swayambhunath", "Boudhanath", "Pashupatinath"],
  },
  {
    id: 6,
    name: "Bandipur Hill Station",
    location: "Tanahu District",
    image: "/placeholder.svg?height=300&width=400&text=Bandipur+Village",
    rating: 4.4,
    price: "$150-400",
    duration: "2-3 days",
    type: ["Cultural", "Relaxation"],
    budget: "Low",
    season: ["Spring", "Summer", "Autumn"],
    activities: ["Hiking", "Cultural Experience", "Photography"],
    description: "Preserved medieval town with stunning mountain views.",
    highlights: ["Newari Architecture", "Mountain Views", "Siddha Cave", "Traditional Culture"],
  },
]

export default function Dashboard() {
  const [userName, setUserName] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [recommendations, setRecommendations] = useState<Destination[]>([])
  const [formData, setFormData] = useState({
    travelType: "",
    budget: "",
    duration: "",
    travelingWith: "",
    season: "",
    activities: [] as string[],
  })
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const storedUserName = localStorage.getItem("userName") || localStorage.getItem("userEmail")

    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    if (storedUserName) {
      setUserName(storedUserName.split("@")[0])
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    router.push("/")
  }

  const handleActivityChange = (activity: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        activities: [...formData.activities, activity],
      })
    } else {
      setFormData({
        ...formData,
        activities: formData.activities.filter((a) => a !== activity),
      })
    }
  }

  const generateRecommendations = () => {
    const filtered = destinations.filter((dest) => {
      let score = 0

      // Travel Type matching
      if (formData.travelType && dest.type.some((t) => t.toLowerCase().includes(formData.travelType.toLowerCase()))) {
        score += 3
      }

      // Budget matching
      if (formData.budget && dest.budget.toLowerCase() === formData.budget.toLowerCase()) {
        score += 2
      }

      // Season matching
      if (formData.season && dest.season.includes(formData.season)) {
        score += 2
      }

      // Activities matching
      const activityMatches = formData.activities.filter((activity) =>
        dest.activities.some((destActivity) => destActivity.toLowerCase().includes(activity.toLowerCase())),
      ).length
      score += activityMatches

      return score > 0
    })

    // Sort by relevance (you could implement a more sophisticated scoring system)
    filtered.sort((a, b) => b.rating - a.rating)

    setRecommendations(filtered.slice(0, 6))
    setShowRecommendations(true)
  }

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const activityOptions = [
    "Trekking",
    "Photography",
    "Cultural Experience",
    "Wildlife Watching",
    "Boating",
    "Paragliding",
    "Hiking",
    "Safari",
    "Sightseeing",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">NepalTravel</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, {userName}!</span>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <Search className="h-6 w-6 text-gray-400" />
              <Input
                placeholder="Find your perfect destination in Nepal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg h-12 border-0 bg-transparent focus-visible:ring-0"
              />
            </div>
          </Card>
        </motion.div>

        {/* Recommendation Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Compass className="h-6 w-6 text-blue-600" />
                <span>Find Your Perfect Destination</span>
              </CardTitle>
              <CardDescription>
                Tell us about your preferences and we'll recommend the best places for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Travel Type */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Mountain className="h-4 w-4" />
                    <span>Travel Type</span>
                  </Label>
                  <Select
                    value={formData.travelType}
                    onValueChange={(value) => setFormData({ ...formData, travelType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select travel type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Adventure">Adventure</SelectItem>
                      <SelectItem value="Cultural">Cultural</SelectItem>
                      <SelectItem value="Relaxation">Relaxation</SelectItem>
                      <SelectItem value="Wildlife">Wildlife</SelectItem>
                      <SelectItem value="Trekking">Trekking</SelectItem>
                      <SelectItem value="Family">Family</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4" />
                    <span>Budget Range</span>
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low ($100-500)</SelectItem>
                      <SelectItem value="Medium">Medium ($500-1000)</SelectItem>
                      <SelectItem value="High">High ($1000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Trip Duration */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Trip Duration</span>
                  </Label>
                  <Select
                    value={formData.duration}
                    onValueChange={(value) => setFormData({ ...formData, duration: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3 days">1-3 days</SelectItem>
                      <SelectItem value="4-7 days">4-7 days</SelectItem>
                      <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                      <SelectItem value="2+ weeks">2+ weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Traveling With */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Traveling With</span>
                  </Label>
                  <Select
                    value={formData.travelingWith}
                    onValueChange={(value) => setFormData({ ...formData, travelingWith: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select companions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Solo">Solo</SelectItem>
                      <SelectItem value="Partner">Partner</SelectItem>
                      <SelectItem value="Family">Family</SelectItem>
                      <SelectItem value="Friends">Friends</SelectItem>
                      <SelectItem value="Group">Group</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Travel Season */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Travel Season</span>
                  </Label>
                  <Select
                    value={formData.season}
                    onValueChange={(value) => setFormData({ ...formData, season: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Spring">Spring (Mar-May)</SelectItem>
                      <SelectItem value="Summer">Summer (Jun-Aug)</SelectItem>
                      <SelectItem value="Autumn">Autumn (Sep-Nov)</SelectItem>
                      <SelectItem value="Winter">Winter (Dec-Feb)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preferred Activities */}
              <div className="space-y-3">
                <Label className="flex items-center space-x-2">
                  <Camera className="h-4 w-4" />
                  <span>Preferred Activities</span>
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {activityOptions.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2">
                      <Checkbox
                        id={activity}
                        checked={formData.activities.includes(activity)}
                        onCheckedChange={(checked) => handleActivityChange(activity, checked as boolean)}
                      />
                      <Label htmlFor={activity} className="text-sm">
                        {activity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={generateRecommendations} className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                Get My Recommendations
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommendations Results */}
        {showRecommendations && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span>Recommended for You</span>
                </CardTitle>
                <CardDescription>Based on your preferences, here are our top recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendations.map((destination, index) => (
                    <motion.div
                      key={destination.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
                        <div className="relative">
                          <img
                            src={destination.image || "/placeholder.svg"}
                            alt={destination.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge className="absolute top-2 right-2 bg-blue-600">Recommended</Badge>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg">{destination.name}</h3>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{destination.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {destination.location}
                          </p>
                          <p className="text-gray-700 text-sm mb-3">{destination.description}</p>
                          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                            <span className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {destination.price}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {destination.duration}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {destination.type.map((type) => (
                              <Badge key={type} variant="secondary" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">View Details</Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* All Destinations */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-green-600" />
                <span>All Destinations</span>
              </CardTitle>
              <CardDescription>Explore all the amazing places Nepal has to offer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{destination.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{destination.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {destination.location}
                        </p>
                        <p className="text-gray-700 text-sm mb-3">{destination.description}</p>
                        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {destination.price}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {destination.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {destination.type.map((type) => (
                            <Badge key={type} variant="secondary" className="text-xs">
                              {type}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Explore Now</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
