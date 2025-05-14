// app/(main)/index.tsx
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DealBanner from '../../components/home/DealBanner';

// Mock data for testing
const mockCategories = [
  { id: '1', name: 'Fruits', imageUrl: '' },
  { id: '2', name: 'Vegetables', imageUrl: '' },
  { id: '3', name: 'Dairy', imageUrl: '' },
  { id: '4', name: 'Bakery', imageUrl: '' },
];

const mockFeaturedItems = [
  { id: '1', title: 'Sweet Picks', image: '', subtitle: 'Fresh fruits and veg' },
  { id: '2', title: 'Great Discounts', image: '', subtitle: 'Organic vegetables' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-lg font-semibold text-gray-800">
            Welcome back, valued customer
          </Text>
          
          <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2 mt-3 mb-5">
            <Feather name="search" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search for groceries"
              className="flex-1 ml-2 text-gray-800"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          
          <View className="mb-6">
            <Text className="text-xl font-bold mb-3">Best Deals Today</Text>
            <TouchableOpacity className="bg-gray-100 p-4 rounded-lg">
              <Text className="text-lg font-semibold text-gray-800">Best Deals Today</Text>
              {/* Add deal content here */}
            </TouchableOpacity>
          </View>
          
          <View className="mb-6">
            <Text className="text-xl font-bold mb-3">Explore popular items</Text>
            <View className="flex-row space-x-4">
              {mockFeaturedItems.map((item) => (
                <DealBanner key={item.id} item={item} />
              ))}
            </View>
          </View>
          
          <View>
            <Text className="text-xl font-bold mb-3">Essentials</Text>
            {/* Add essentials content here */}
          </View>
        </View>
      </ScrollView>
      
      {/* Navigation bar can be added here */}
    </SafeAreaView>
  );
}