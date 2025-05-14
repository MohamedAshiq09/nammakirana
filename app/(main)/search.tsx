// app/(main)/search.tsx
import { Feather } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Mock category data
const categories = [
  {
    id: '1',
    title: 'Quality products',
    items: [
      { id: '101', name: 'Basic' },
      { id: '102', name: 'Premium' },
      { id: '103', name: 'Fresh foods' },
      { id: '104', name: 'Variety of' },
    ]
  },
  {
    id: '2',
    title: 'Refreshing beverages',
    items: [
      { id: '201', name: 'Juice/Juice' },
      { id: '202', name: 'Tumblers' },
      { id: '203', name: 'Iced coffee' },
      { id: '204', name: 'Variety of' },
    ]
  },
  {
    id: '3',
    title: 'Miscellaneous items',
    items: [
      { id: '301', name: 'Stationery' },
      { id: '302', name: 'Brushes' },
      { id: '303', name: 'Cleansers' },
      { id: '304', name: 'Household' },
    ]
  }
];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  
  const navigateToCategory = (categoryId: string, itemId: string) => {
    router.push(`/categories/${categoryId}?item=${itemId}`);
  };
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <View className="p-4">
        <Text className="text-xl font-bold mb-4">Search</Text>
        
        <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2 mb-5">
          <Feather name="search" size={18} color="#9CA3AF" />
          <TextInput
            placeholder="Search for fruits, atta, oils and more"
            className="flex-1 ml-2 text-gray-800"
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <Text className="text-lg font-semibold mb-3">Categories</Text>
          
          {categories.map((category) => (
            <View key={category.id} className="mb-5">
              <Text className="text-base font-medium text-gray-800 mb-2">
                {category.title}
              </Text>
              
              <View className="flex-row flex-wrap">
                {category.items.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    className="w-[calc(50%-8px)] mr-4 mb-4 border border-gray-200 rounded-md px-3 py-2"
                    onPress={() => navigateToCategory(category.id, item.id)}
                  >
                    <Text className="text-gray-700">{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      
      {/* Bottom navigation bar */}
      <View className="flex-row items-center justify-around py-2 border-t border-gray-200">
        <Link href="/" asChild>
          <TouchableOpacity className="items-center">
            <Feather name="home" size={22} color="#8CC84B" />
            <Text className="text-xs text-primary mt-1">Home</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/search" asChild>
          <TouchableOpacity className="items-center">
            <Feather name="search" size={22} color="#9CA3AF" />
            <Text className="text-xs text-gray-500 mt-1">Search</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/favorites" asChild>
          <TouchableOpacity className="items-center">
            <Feather name="heart" size={22} color="#9CA3AF" />
            <Text className="text-xs text-gray-500 mt-1">Favorites</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/cart" asChild>
          <TouchableOpacity className="items-center">
            <Feather name="shopping-bag" size={22} color="#9CA3AF" />
            <Text className="text-xs text-gray-500 mt-1">Cart</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}