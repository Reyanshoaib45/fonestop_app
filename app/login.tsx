"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useAuth } from "../contexts/AuthContext"
import { useRouter } from "expo-router"

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    setLoading(true)
    const success = await login(email, password)
    setLoading(false)

    if (success) {
      router.replace("/(tabs)")
    } else {
      Alert.alert("Error", "Invalid credentials")
    }
  }

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <View className="items-center mb-8">
        <View className="w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-4">
          <Ionicons name="storefront" size={40} color="#2563EB" />
        </View>
        <Text className="text-3xl font-bold text-gray-900">Welcome Back</Text>
        <Text className="text-gray-600 text-center mt-2">Sign in to your POS account</Text>
      </View>

      <View className="space-y-4">
        <View>
          <Text className="text-sm font-medium text-gray-700 mb-2">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-base"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text className="text-sm font-medium text-gray-700 mb-2">Password</Text>
          <View className="relative">
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-3 pr-12 text-base"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity className="absolute right-4 top-3" onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="bg-blue-600 py-4 rounded-lg mt-6" onPress={handleLogin} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center text-lg font-semibold">Sign In</Text>
          )}
        </TouchableOpacity>

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text className="text-blue-600 font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-blue-600 text-center font-semibold mt-4">Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
