"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useAuth } from "../contexts/AuthContext"
import { useNavigation } from "@react-navigation/native"

export default function RegisterScreen() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigation = useNavigation()

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match")
      return
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters")
      return
    }

    setLoading(true)
    const success = await register(name, email, password)
    setLoading(false)

    if (!success) {
      Alert.alert("Error", "Registration failed")
    }
  }

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <View className="items-center mb-8">
        <View className="w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-4">
          <Ionicons name="person-add" size={40} color="#2563EB" />
        </View>
        <Text className="text-3xl font-bold text-gray-900">Create Account</Text>
        <Text className="text-gray-600 text-center mt-2">Join our POS system today</Text>
      </View>

      <View className="space-y-4">
        <View>
          <Text className="text-sm font-medium text-gray-700 mb-2">Full Name</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-base"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />
        </View>

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

        <View>
          <Text className="text-sm font-medium text-gray-700 mb-2">Confirm Password</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-base"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
          />
        </View>

        <TouchableOpacity className="bg-blue-600 py-4 rounded-lg mt-6" onPress={handleRegister} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center text-lg font-semibold">Create Account</Text>
          )}
        </TouchableOpacity>

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
            <Text className="text-blue-600 font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
