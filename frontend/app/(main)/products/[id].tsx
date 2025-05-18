// app/(main)/products/[id].tsx
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Mock product data
const getMockProduct = (id: string) => ({
  id,
  name: "Premium Green Grapes",
  description:
    "Fresh, sweet and juicy green grapes. Perfect for snacking, salads, or making juice. Sourced from local farms.",
  price: 120,
  discountPrice: 99,
  imageUrl: require("../../../assets/images/placeholder.png"),
  categoryId: "1",
  inStock: true,
  unit: "kg",
  quantity: 1,
  storeInfo: {
    name: "Lakshmi Kirana Store",
    distance: "1.2 km away",
    deliveryTime: "20-30 min",
  },
  nutrition: [
    { name: "Calories", value: "69 kcal" },
    { name: "Protein", value: "0.72 g" },
    { name: "Carbs", value: "18.1 g" },
  ],
});

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = getMockProduct(id as string);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-semibold">
          Product Details
        </Text>
        <TouchableOpacity onPress={() => router.push("../cart")}>
          <Feather name="shopping-bag" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Product Image */}
        <Image
          source={product.imageUrl}
          className="w-full h-80"
          resizeMode="cover"
        />

        {/* Product Info */}
        <View className="p-4">
          <Text className="text-2xl font-bold text-gray-800">
            {product.name}
          </Text>

          <View className="flex-row items-center justify-between mt-2">
            <View className="flex-row items-center">
              <Text className="text-xl font-bold text-primary">
                ₹{product.discountPrice || product.price}
              </Text>
              {product.discountPrice && (
                <Text className="ml-2 text-gray-500 line-through">
                  ₹{product.price}
                </Text>
              )}
            </View>

            <View className="flex-row items-center border border-gray-300 rounded-lg">
              <TouchableOpacity
                className="px-3 py-1"
                onPress={decrementQuantity}
              >
                <Feather name="minus" size={18} color="#4B5563" />
              </TouchableOpacity>

              <Text className="px-3 py-1 border-l border-r border-gray-300 font-medium">
                {quantity}
              </Text>

              <TouchableOpacity
                className="px-3 py-1"
                onPress={incrementQuantity}
              >
                <Feather name="plus" size={18} color="#4B5563" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row items-center mt-4 pb-4 border-b border-gray-200">
            <View className="flex-row items-center">
              <Feather name="check-circle" size={16} color="#8CC84B" />
              <Text className="ml-1 text-gray-700">In Stock</Text>
            </View>
            <View className="flex-row items-center ml-4">
              <Feather name="package" size={16} color="#8CC84B" />
              <Text className="ml-1 text-gray-700">{product.unit}</Text>
            </View>
          </View>

          {/* Store Info - First to Accept */}
          <View className="my-4 p-3 bg-gray-50 rounded-lg">
            <View className="flex-row justify-between items-center">
              <Text className="font-semibold text-gray-800">
                {product.storeInfo.name}
              </Text>
              <View className="bg-primary/20 px-2 py-1 rounded">
                <Text className="text-xs text-primary font-medium">
                  First to Accept
                </Text>
              </View>
            </View>
            <View className="flex-row mt-2">
              <View className="flex-row items-center mr-3">
                <Feather name="map-pin" size={14} color="#6B7280" />
                <Text className="ml-1 text-xs text-gray-600">
                  {product.storeInfo.distance}
                </Text>
              </View>
              <View className="flex-row items-center">
                <Feather name="clock" size={14} color="#6B7280" />
                <Text className="ml-1 text-xs text-gray-600">
                  {product.storeInfo.deliveryTime}
                </Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View className="my-4">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Description
            </Text>
            <Text className="text-gray-600">{product.description}</Text>
          </View>

          {/* Nutrition Info */}
          <View className="my-4">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Nutritional Information
            </Text>
            <View className="flex-row flex-wrap">
              {product.nutrition.map((item, index) => (
                <View key={index} className="w-1/3 mb-2">
                  <Text className="text-gray-500 text-xs">{item.name}</Text>
                  <Text className="text-gray-800 font-medium">
                    {item.value}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="p-4 border-t border-gray-200">
        <TouchableOpacity
          className="bg-primary py-3 rounded-lg items-center"
          onPress={() => {
            // Add to cart functionality
            router.push("../cart");
          }}
        >
          <Text className="text-white font-bold">
            Add to Cart • ₹{(product.discountPrice || product.price) * quantity}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
