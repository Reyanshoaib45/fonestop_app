import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function HomeScreen() {
  const stats = [
    { title: "Today's Sales", value: "$2,450", icon: "cash", color: "bg-green-500" },
    { title: "Total Customers", value: "1,234", icon: "people", color: "bg-blue-500" },
    { title: "Products Sold", value: "89", icon: "cube", color: "bg-purple-500" },
    { title: "Pending Orders", value: "12", icon: "time", color: "bg-orange-500" },
  ]

  const quickActions = [
    { title: "New Sale", icon: "add-circle", color: "bg-green-500" },
    { title: "Add Product", icon: "cube", color: "bg-blue-500" },
    { title: "View Reports", icon: "analytics", color: "bg-purple-500" },
    { title: "Settings", icon: "settings", color: "bg-gray-500" },
  ]

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 py-6">
        <Text className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</Text>

        {/* Stats Grid */}
        <View className="flex-row flex-wrap -mx-2 mb-8">
          {stats.map((stat, index) => (
            <View key={index} className="w-1/2 px-2 mb-4">
              <View className="bg-white rounded-lg p-4 shadow-sm">
                <View className="flex-row items-center justify-between mb-2">
                  <View className={`w-10 h-10 ${stat.color} rounded-full items-center justify-center`}>
                    <Ionicons name={stat.icon as any} size={20} color="white" />
                  </View>
                </View>
                <Text className="text-2xl font-bold text-gray-900">{stat.value}</Text>
                <Text className="text-sm text-gray-600">{stat.title}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <Text className="text-xl font-bold text-gray-900 mb-4">Quick Actions</Text>
        <View className="flex-row flex-wrap -mx-2">
          {quickActions.map((action, index) => (
            <View key={index} className="w-1/2 px-2 mb-4">
              <TouchableOpacity className="bg-white rounded-lg p-4 shadow-sm items-center">
                <View className={`w-12 h-12 ${action.color} rounded-full items-center justify-center mb-3`}>
                  <Ionicons name={action.icon as any} size={24} color="white" />
                </View>
                <Text className="text-sm font-medium text-gray-900 text-center">{action.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Recent Activity */}
        <Text className="text-xl font-bold text-gray-900 mb-4 mt-6">Recent Activity</Text>
        <View className="bg-white rounded-lg shadow-sm">
          {[1, 2, 3].map((item, index) => (
            <View key={index} className={`p-4 ${index !== 2 ? "border-b border-gray-100" : ""}`}>
              <View className="flex-row items-center space-x-3">
                <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center">
                  <Ionicons name="receipt" size={20} color="#2563EB" />
                </View>
                <View className="flex-1">
                  <Text className="font-medium text-gray-900">Sale #00{item}</Text>
                  <Text className="text-sm text-gray-600">Customer purchased items</Text>
                </View>
                <Text className="text-sm text-gray-500">2 min ago</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
