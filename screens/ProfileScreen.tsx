"use client"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useAuth } from "../contexts/AuthContext"

export default function ProfileScreen() {
  const { user, logout } = useAuth()

  const menuItems = [
    { title: "Edit Profile", icon: "person-outline", action: () => {} },
    { title: "Settings", icon: "settings-outline", action: () => {} },
    { title: "Help & Support", icon: "help-circle-outline", action: () => {} },
    { title: "About", icon: "information-circle-outline", action: () => {} },
  ]

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 py-6">
        {/* User Info */}
        <View className="bg-white rounded-lg p-6 mb-6 shadow-sm items-center">
          <View className="w-20 h-20 bg-blue-500 rounded-full items-center justify-center mb-4">
            <Ionicons name="person" size={40} color="white" />
          </View>
          <Text className="text-2xl font-bold text-gray-900 mb-1">{user?.name}</Text>
          <Text className="text-gray-600 mb-1">{user?.email}</Text>
          <View className="bg-blue-100 px-3 py-1 rounded-full">
            <Text className="text-blue-600 font-semibold capitalize">{user?.role}</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="bg-white rounded-lg shadow-sm mb-6">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className={`flex-row items-center justify-between p-4 ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
              onPress={item.action}
            >
              <View className="flex-row items-center space-x-3">
                <Ionicons name={item.icon as any} size={24} color="#6B7280" />
                <Text className="text-base text-gray-900">{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="bg-red-500 py-4 px-6 rounded-lg" onPress={logout}>
          <Text className="text-white text-center text-lg font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
