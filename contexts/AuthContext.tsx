"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface User {
  id: string
  name: string
  email: string
  role: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken")
      const userData = await AsyncStorage.getItem("userData")

      if (token && userData) {
        setUser(JSON.parse(userData))
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error("Auth check error:", error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockUser = {
        id: "1",
        name: "John Doe",
        email: email,
        role: "admin",
      }

      await AsyncStorage.setItem("authToken", "mock-token")
      await AsyncStorage.setItem("userData", JSON.stringify(mockUser))

      setUser(mockUser)
      setIsAuthenticated(true)
      return true
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockUser = {
        id: "2",
        name: name,
        email: email,
        role: "user",
      }

      await AsyncStorage.setItem("authToken", "mock-token")
      await AsyncStorage.setItem("userData", JSON.stringify(mockUser))

      setUser(mockUser)
      setIsAuthenticated(true)
      return true
    } catch (error) {
      console.error("Register error:", error)
      return false
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("authToken")
      await AsyncStorage.removeItem("userData")
      setUser(null)
      setIsAuthenticated(false)
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
