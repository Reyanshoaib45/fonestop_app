import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function ProductsScreen() {
  const navigation = useNavigation()

  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, stock: 25, category: "Electronics" },
    { id: 2, name: "Coffee Mug", price: 12.99, stock: 50, category: "Kitchen" },
    { id: 3, name: "Notebook", price: 8.99, stock: 100, category: "Stationery" },
    { id: 4, name: "Phone Case", price: 24.99, stock: 30, category: "Accessories" },
    { id: 5, name: "Desk Lamp", price: 45.99, stock: 15, category: "Furniture" },
  ]

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.filterSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.filterTags}>
              <TouchableOpacity style={[styles.filterTag, styles.activeFilter]}>
                <Text style={styles.activeFilterText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterTag}>
                <Text style={styles.filterText}>Electronics</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterTag}>
                <Text style={styles.filterText}>Kitchen</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterTag}>
                <Text style={styles.filterText}>Stationery</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.productsList}>
          {products.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <View style={styles.productImage}>
                <Text style={styles.productEmoji}>📦</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productCategory}>{product.category}</Text>
                <View style={styles.productDetails}>
                  <Text style={styles.productPrice}>${product.price}</Text>
                  <Text style={styles.productStock}>Stock: {product.stock}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.productAction}>
                <Text style={styles.productActionText}>Edit</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  addButton: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  filterSection: {
    marginBottom: 20,
  },
  filterTags: {
    flexDirection: "row",
    gap: 12,
  },
  filterTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  activeFilter: {
    backgroundColor: "#4f46e5",
    borderColor: "#4f46e5",
  },
  filterText: {
    color: "#6b7280",
    fontSize: 14,
  },
  activeFilterText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
  productsList: {
    gap: 12,
  },
  productCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  productEmoji: {
    fontSize: 24,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 8,
  },
  productDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#10b981",
  },
  productStock: {
    fontSize: 12,
    color: "#6b7280",
  },
  productAction: {
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  productActionText: {
    color: "#4f46e5",
    fontSize: 12,
    fontWeight: "500",
  },
})
