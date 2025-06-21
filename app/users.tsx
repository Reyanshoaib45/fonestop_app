"use client"

import { useState, useEffect } from "react"
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
  }
  address: {
    street: string
    city: string
  }
}

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error("Error fetching users:", error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    fetchUsers()
  }

  const renderUser = ({ item }: { item: User }) => (
    <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
      <View className="flex-row items-start space-x-3">
        <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
          <Text className="text-blue-600 font-bold text-lg">{item.name.charAt(0)}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-900 mb-1">{item.name}</Text>
          <Text className="text-gray-600 mb-1">@{item.username}</Text>

          <View className="flex-row items-center space-x-1 mb-1">
            <Ionicons name="mail" size={14} color="#6B7280" />
            <Text className="text-sm text-gray-600">{item.email}</Text>
          </View>

          <View className="flex-row items-center space-x-1 mb-1">
            <Ionicons name="call" size={14} color="#6B7280" />
            <Text className="text-sm text-gray-600">{item.phone}</Text>
          </View>

          <View className="flex-row items-center space-x-1 mb-1">
            <Ionicons name="business" size={14} color="#6B7280" />
            <Text className="text-sm text-gray-600">{item.company.name}</Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Ionicons name="location" size={14} color="#6B7280" />
            <Text className="text-sm text-gray-600">
              {item.address.street}, {item.address.city}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )

  if (loading) {
    return (
      <View className="flex-1 bg-gray-50 justify-center items-center">
        <ActivityIndicator size="large" color="#2563EB" />
        <Text className="text-gray-600 mt-4">Loading users...</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-gray-50">
      <View className="px-6 py-6">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-2xl font-bold text-gray-900">Users</Text>
          <View className="bg-blue-100 px-3 py-1 rounded-full">
            <Text className="text-blue-600 font-semibold">{users.length} users</Text>
          </View>
        </View>

        <FlatList
          data={users}
          renderItem={renderUser}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#2563EB"]} />}
        />
      </View>
    </View>
  )
}
