// app/(main)/index.tsx
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryCard from "../../components/home/CategoryCard";
import DealBanner from "../../components/home/DealBanner";

// Mock data for testing
const mockCategories = [
  {
    id: "1",
    name: "Fruits & Veggies",
    imageUrl: require("../../assets/images/placeholder.png"),
  },
  {
    id: "2",
    name: "Dairy & Breakfast",
    imageUrl: require("../../assets/images/placeholder.png"),
  },
  {
    id: "3",
    name: "Snacks & Beverages",
    imageUrl: require("../../assets/images/placeholder.png"),
  },
  {
    id: "4",
    name: "Household",
    imageUrl: require("../../assets/images/placeholder.png"),
  },
];

const mockFeaturedItems = [
  {
    id: "1",
    title: "Fresh Picks",
    image: require("../../assets/images/placeholder.png"),
    subtitle: "Fresh fruits and vegetables",
  },
  {
    id: "2",
    title: "Weekend Deals",
    image: require("../../assets/images/placeholder.png"),
    subtitle: "Up to 30% off on groceries",
  },
];

const popularProducts = [
  {
    id: "101",
    name: "Organic Tomatoes",
    price: 40,
    discountPrice: 35,
    unit: "kg",
    imageUrl: require("../../assets/images/placeholder.png"),
  },
  {
    id: "102",
    name: "Fresh Onions",
    price: 30,
    unit: "kg",
    imageUrl: require("../../assets/images/placeholder.png"),
  },
  {
    id: "103",
    name: "Toor Dal",
    price: 120,
    discountPrice: 99,
    unit: "500g",
    imageUrl: require("../../assets/images/placeholder.png"),
  },
  {
    id: "104",
    name: "Whole Wheat Atta",
    price: 55,
    unit: "kg",
    imageUrl: require("../../assets/images/placeholder.png"),
  },
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  const navigateToProduct = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Welcome to
              </Text>
              <Text className="text-2xl font-bold text-primary">
                Namma Kirana
              </Text>
            </View>

            <TouchableOpacity
              className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
              onPress={() => router.push({ pathname: "/notifications" })}
            >
              <Feather name="bell" size={20} color="#4B5563" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2.5 mb-6">
            <Feather name="search" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search for groceries, vegetables..."
              className="flex-1 ml-2 text-gray-800"
              placeholderTextColor="#9CA3AF"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={() =>
                router.push({
                  pathname: "/search",
                  params: { query: searchText },
                })
              }
            />
          </View>

          {/* Location Selector */}
          <TouchableOpacity
            className="flex-row items-center mb-6 bg-gray-50 p-3 rounded-lg border border-gray-200"
            onPress={() => router.push("/locations")}
          >
            <Feather name="map-pin" size={18} color="#8CC84B" />
            <View className="flex-1 ml-2">
              <Text className="text-xs text-gray-500">DELIVERY LOCATION</Text>
              <Text className="text-base text-gray-800 font-medium">
                T. Nagar, Chennai
              </Text>
            </View>
            <Feather name="chevron-right" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          {/* Main Categories */}
          <View className="mb-8">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-semibold">Shop by Category</Text>
              <TouchableOpacity onPress={() => router.push("/categories")}>
                <Text className="text-primary font-medium">See All</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row flex-wrap justify-between">
              {mockCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  className="w-[48%] mb-4"
                />
              ))}
            </View>
          </View>

          {/* Featured Banner */}
          <View className="mb-8">
            <TouchableOpacity
              className="bg-primary/10 rounded-lg p-4 overflow-hidden"
              onPress={() => router.push("/deals")}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-lg font-bold text-primary mb-1">
                    FIRST ORDER OFFER
                  </Text>
                  <Text className="text-gray-700 mb-3">
                    Get 20% off on your first order!
                  </Text>
                  <View className="bg-primary rounded-full py-1 px-4 self-start">
                    <Text className="text-white font-medium text-sm">
                      Order Now
                    </Text>
                  </View>
                </View>
                <Image
                  source={require("../../assets/images/placeholder.png")}
                  className="w-24 h-24 rounded-lg"
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Featured Items */}
          <View className="mb-8">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-semibold">Special Offers</Text>
              <TouchableOpacity onPress={() => router.push("/deals")}>
                <Text className="text-primary font-medium">See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4">
                {mockFeaturedItems.map((item) => (
                  <DealBanner key={item.id} item={item} />
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Popular Products */}
          <View className="mb-8">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-semibold">Popular Products</Text>
              <TouchableOpacity onPress={() => router.push("/popular")}>
                <Text className="text-primary font-medium">See All</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row flex-wrap justify-between">
              {popularProducts.map((product) => (
                <TouchableOpacity
                  key={product.id}
                  className="w-[48%] mb-4 bg-white rounded-lg border border-gray-200 overflow-hidden"
                  onPress={() => navigateToProduct(product.id)}
                >
                  <Image
                    source={product.imageUrl}
                    className="w-full h-24"
                    resizeMode="cover"
                  />

                  <View className="p-2">
                    <Text className="text-gray-800 font-medium">
                      {product.name}
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      {product.unit}
                    </Text>

                    <View className="flex-row items-center mt-1">
                      {product.discountPrice ? (
                        <>
                          <Text className="text-primary font-bold">
                            ₹{product.discountPrice}
                          </Text>
                          <Text className="text-gray-500 text-xs line-through ml-1">
                            ₹{product.price}
                          </Text>
                        </>
                      ) : (
                        <Text className="text-primary font-bold">
                          ₹{product.price}
                        </Text>
                      )}

                      <TouchableOpacity
                        className="ml-auto bg-primary rounded-full w-6 h-6 items-center justify-center"
                        onPress={(e) => {
                          e.stopPropagation();
                          // Add to cart functionality
                        }}
                      >
                        <Feather name="plus" size={16} color="#FFF" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Zero Commission Banner */}
          <View className="mb-8">
            <View className="bg-secondary/10 rounded-lg p-4">
              <Text className="text-lg font-bold text-secondary mb-2">
                0% COMMISSION
              </Text>
              <Text className="text-gray-700 mb-1">
                Supporting local kirana stores
              </Text>
              <Text className="text-gray-700 mb-3">
                Better prices for customers
              </Text>

              <TouchableOpacity
                className="bg-secondary rounded-full py-1 px-4 self-start"
                onPress={() => router.push("/about")}
              >
                <Text className="text-white font-medium text-sm">
                  Learn More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
