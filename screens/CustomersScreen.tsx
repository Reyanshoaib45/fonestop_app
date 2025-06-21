import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import Header from '@/components/Header';

interface Customer {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setCustomers(data);
      } catch (err) {
        setError('Failed to fetch customers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  const renderItem = ({ item }: { item: Customer }) => (
      <View style={styles.customerCard}>
        <Image
            source={{ uri: item.avatar || 'https://i.pravatar.cc/150?img=' + item.id }}
            style={styles.avatar}
        />
        <View style={styles.customerInfo}>
          <Text style={styles.customerName}>{item.name}</Text>
          <Text style={styles.customerEmail}>{item.email}</Text>
        </View>
      </View>
  );

  if (loading) {
    return (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#3498db" />
        </View>
    );
  }

  if (error) {
    return (
        <View style={styles.center}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
    );
  }

  return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.header}>Our Customers</Text>
        <FlatList
            data={customers}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContent}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 18,
  },
  listContent: {
    padding: 16,
    paddingBottom: 20,
  },
  customerCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 4,
  },
  customerEmail: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});