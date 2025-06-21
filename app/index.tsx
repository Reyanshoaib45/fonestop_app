"use client"

import { useEffect } from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useAuth } from "../contexts/AuthContext"

export default function LandingScreen() {
  const router = useRouter()
  const { isAuthenticated, loading } = useAuth()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.replace("/(tabs)")
    }
  }, [isAuthenticated, loading])

  if (loading) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-blue-600 px-6 py-12">
        <View className="items-center">
          <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-4">
            <Ionicons name="storefront" size={40} color="#2563EB" />
          </View>
          <Text className="text-3xl font-bold text-white text-center mb-2">Modern POS System</Text>
          <Text className="text-blue-100 text-center text-lg">
            Streamline your business operations with our powerful point of sale solution
          </Text>
        </View>
      </View>

      {/* Features */}
      <View className="px-6 py-12">
        <Text className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our POS?</Text>

        <View className="space-y-6">
          <View className="flex-row items-center space-x-4">
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
              <Ionicons name="flash" size={24} color="#2563EB" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">Fast & Efficient</Text>
              <Text className="text-gray-600">Process transactions quickly and efficiently</Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-4">
            <View className="w-12 h-12 bg-green-100 rounded-full items-center justify-center">
              <Ionicons name="people" size={24} color="#059669" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">Customer Management</Text>
              <Text className="text-gray-600">Keep track of your customers and their preferences</Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-4">
            <View className="w-12 h-12 bg-purple-100 rounded-full items-center justify-center">
              <Ionicons name="analytics" size={24} color="#7C3AED" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">Analytics & Reports</Text>
              <Text className="text-gray-600">Get insights into your business performance</Text>
            </View>
          </View>
        </View>
      </View>

      {/* CTA Buttons */}
      <View className="px-6 pb-12 space-y-4">
        <TouchableOpacity className="bg-blue-600 py-4 px-6 rounded-lg" onPress={() => router.push("/login")}>
          <Text className="text-white text-center text-lg font-semibold">Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-blue-600 py-4 px-6 rounded-lg"
          onPress={() => router.push("/register")}
        >
          <Text className="text-blue-600 text-center text-lg font-semibold">Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
