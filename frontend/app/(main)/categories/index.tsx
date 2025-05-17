// app/(main)/categories/index.tsx
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

// Mock data for categories
const mainCategories = [
  {
    id: "1",
    name: "Fruits & Veggies",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "2",
    name: "Snacks & Drinks",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "3",
    name: "Beauty & Wellness",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "4",
    name: "House Essentials",
    image: require("../../../assets/images/placeholder.png"),
  },
];

const groceryCategories = [
  {
    id: "101",
    name: "Fresh Vegetables",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "102",
    name: "Fresh Fruits",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "103",
    name: "Dairy, Bread & Eggs",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "104",
    name: "Cereals & Breakfast",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "105",
    name: "Rice, Atta & Dals",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "106",
    name: "Oils & Ghee",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "107",
    name: "Masalas & Dry Fruits",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "108",
    name: "Bakery",
    image: require("../../../assets/images/placeholder.png"),
  },
];

const snacksCategories = [
  {
    id: "201",
    name: "Chips & Namkeens",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "202",
    name: "Tea, Coffee & More",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "203",
    name: "Ice Creams & More",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "204",
    name: "Frozen Food",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "205",
    name: "Cold Drinks & Juices",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "206",
    name: "Munchies",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "207",
    name: "Biscuits & Cookies",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "208",
    name: "Sweet Cravings",
    image: require("../../../assets/images/placeholder.png"),
  },
];

const beautyCategories = [
  {
    id: "301",
    name: "Bath & Body",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "302",
    name: "Hair Care",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "303",
    name: "Skincare & Beauty",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "304",
    name: "Oral Care",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "305",
    name: "Feminine Hygiene",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "306",
    name: "Health Care",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "307",
    name: "Baby Care",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "308",
    name: "Pet Supplies",
    image: require("../../../assets/images/placeholder.png"),
  },
];

const householdCategories = [
  {
    id: "401",
    name: "Cleaning Essentials",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "402",
    name: "Home & Fashion",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "403",
    name: "Electrical & Electronics",
    image: require("../../../assets/images/placeholder.png"),
  },
  {
    id: "404",
    name: "Oral Care",
    image: require("../../../assets/images/placeholder.png"),
  },
];

export default function CategoriesScreen() {
  const [searchText, setSearchText] = useState("");

  const navigateToCategory = (categoryId: string) => {
    router.push(`/categories/${categoryId}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="p-4">
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
          {/* Main Categories */}
          <View className="flex-row flex-wrap justify-between mb-6">
            {mainCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                className="w-[48%] bg-white rounded-lg mb-4 overflow-hidden"
                onPress={() => navigateToCategory(category.id)}
              >
                <Image
                  source={category.image}
                  className="w-full h-20"
                  resizeMode="cover"
                />
                <Text className="text-center py-2 text-gray-800 font-medium">
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Best Deals Banner */}
          <View className="bg-yellow-100 rounded-lg p-4 mb-6">
            <Text className="text-lg font-bold mb-1">BEST DEALS</Text>
            <Text className="text-gray-700 mb-2">
              Fresh Supplies Delivered Now.
            </Text>
            <TouchableOpacity
              className="bg-primary rounded-md px-4 py-1.5 self-start"
              onPress={() => router.push("./deals")}
            >
              <Text className="text-white font-medium">Order Now</Text>
            </TouchableOpacity>
          </View>

          {/* Grocery & Kitchen Categories */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">GROCERY & KITCHEN</Text>
              <TouchableOpacity
                onPress={() => router.push("/categories/grocery")}
              >
                <Text className="text-primary font-medium">See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4">
                {groceryCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    className="items-center w-20"
                    onPress={() => navigateToCategory(category.id)}
                  >
                    <Image
                      source={category.image}
                      className="w-16 h-16 rounded-lg mb-1"
                      resizeMode="cover"
                    />
                    <Text className="text-gray-800 text-xs text-center">
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Snacks & Drinks Categories */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">SNACKS & DRINKS</Text>
              <TouchableOpacity
                onPress={() => router.push("/categories/snacks")}
              >
                <Text className="text-primary font-medium">See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4">
                {snacksCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    className="items-center w-20"
                    onPress={() => navigateToCategory(category.id)}
                  >
                    <Image
                      source={category.image}
                      className="w-16 h-16 rounded-lg mb-1"
                      resizeMode="cover"
                    />
                    <Text className="text-gray-800 text-xs text-center">
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Beauty & Personal Care Categories */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">BEAUTY & PERSONAL CARE</Text>
              <TouchableOpacity
                onPress={() => router.push("/categories/beauty")}
              >
                <Text className="text-primary font-medium">See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4">
                {beautyCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    className="items-center w-20"
                    onPress={() => navigateToCategory(category.id)}
                  >
                    <Image
                      source={category.image}
                      className="w-16 h-16 rounded-lg mb-1"
                      resizeMode="cover"
                    />
                    <Text className="text-gray-800 text-xs text-center">
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Household Essentials Categories */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">HOUSEHOLD ESSENTIALS</Text>
              <TouchableOpacity
                onPress={() => router.push("/categories/household")}
              >
                <Text className="text-primary font-medium">See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4">
                {householdCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    className="items-center w-20"
                    onPress={() => navigateToCategory(category.id)}
                  >
                    <Image
                      source={category.image}
                      className="w-16 h-16 rounded-lg mb-1"
                      resizeMode="cover"
                    />
                    <Text className="text-gray-800 text-xs text-center">
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
