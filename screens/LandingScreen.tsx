import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, StatusBar } from "react-native"
import { useNavigation } from "@react-navigation/native"

const { width, height } = Dimensions.get("window")

export default function LandingScreen() {
  const navigation = useNavigation()

  const navigateToCustomers = () => {
    navigation.navigate("Customers" as never)
  }

  const navigateToProducts = () => {
    navigation.navigate("Products" as never)
  }

  return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.logo}>POS Pro</Text>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Streamline Your Business with POS Pro</Text>
              <Text style={styles.heroSubtitle}>Manage sales, inventory, and customers all in one powerful platform</Text>
              <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaButtonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActionsSection}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.quickActionsGrid}>
              <TouchableOpacity style={[styles.actionCard, styles.customersCard]} onPress={navigateToCustomers}>
                <View style={styles.actionIcon}>
                  <Text style={styles.actionIconText}>👥</Text>
                </View>
                <Text style={styles.actionTitle}>Customers</Text>
                <Text style={styles.actionDescription}>Manage customer information and purchase history</Text>
                <View style={styles.actionArrow}>
                  <Text style={styles.actionArrowText}>→</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.actionCard, styles.productsCard]} onPress={navigateToProducts}>
                <View style={styles.actionIcon}>
                  <Text style={styles.actionIconText}>📦</Text>
                </View>
                <Text style={styles.actionTitle}>Products</Text>
                <Text style={styles.actionDescription}>Browse and manage your product inventory</Text>
                <View style={styles.actionArrow}>
                  <Text style={styles.actionArrowText}>→</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Features Section */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionTitle}>Why Choose POS Pro?</Text>
            <View style={styles.featuresGrid}>
              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>⚡</Text>
                <Text style={styles.featureTitle}>Lightning Fast</Text>
                <Text style={styles.featureDescription}>Process transactions in seconds with our optimized system</Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>📊</Text>
                <Text style={styles.featureTitle}>Real-time Analytics</Text>
                <Text style={styles.featureDescription}>
                  Track sales, inventory, and performance with live dashboards
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>🔒</Text>
                <Text style={styles.featureTitle}>Secure & Reliable</Text>
                <Text style={styles.featureDescription}>Bank-level security with 99.9% uptime guarantee</Text>
              </View>

              <View style={styles.featureCard}>
                <Text style={styles.featureIcon}>📱</Text>
                <Text style={styles.featureTitle}>Mobile Ready</Text>
                <Text style={styles.featureDescription}>Access your POS system anywhere, anytime on any device</Text>
              </View>
            </View>
          </View>

          {/* Stats Section */}
          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Today's Overview</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>$2,847</Text>
                <Text style={styles.statLabel}>Total Sales</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>156</Text>
                <Text style={styles.statLabel}>Transactions</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statNumber}>89</Text>
                <Text style={styles.statLabel}>Items Sold</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "#1a1a2e",
    paddingTop: StatusBar.currentHeight || 44,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  headerActions: {
    flexDirection: "row",
    gap: 12,
  },
  headerButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
  },
  headerButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heroContent: {
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 36,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#a0a0a0",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  quickActionsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 20,
  },
  quickActionsGrid: {
    gap: 16,
  },
  actionCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    position: "relative",
  },
  customersCard: {
    borderLeftWidth: 4,
    borderLeftColor: "#10b981",
  },
  productsCard: {
    borderLeftWidth: 4,
    borderLeftColor: "#f59e0b",
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  actionIconText: {
    fontSize: 24,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  actionDescription: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },
  actionArrow: {
    position: "absolute",
    top: 24,
    right: 24,
  },
  actionArrowText: {
    fontSize: 20,
    color: "#9ca3af",
  },
  featuresSection: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  featureCard: {
    width: (width - 56) / 2,
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 16,
  },
  statsSection: {
    padding: 20,
  },
  statsGrid: {
    flexDirection: "row",
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
})
