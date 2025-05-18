import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useOrder } from "../../../contexts/OrderContext";

export default function CartScreen() {
  const { cart, removeFromCart, updateCartItem, getCartTotal } = useOrder();

  const handleIncrement = (productId: string, currentQuantity: number) => {
    updateCartItem(productId, currentQuantity + 1);
  };

  const handleDecrement = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateCartItem(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-semibold">
          Shopping Cart
        </Text>
        <View style={{ width: 24 }} />
      </View>

      {cart.length === 0 ? (
        <View className="flex-1 items-center justify-center p-4">
          <Feather name="shopping-bag" size={64} color="#CCCCCC" />
          <Text className="text-lg font-semibold text-gray-800 mt-4">
            Your cart is empty
          </Text>
          <Text className="text-gray-500 text-center mb-6">
            Add items to your cart to get started
          </Text>
          <TouchableOpacity
            className="bg-primary py-3 px-6 rounded-lg"
            onPress={() => router.push("/")}
          >
            <Text className="text-white font-semibold">Start Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <ScrollView className="flex-1">
            <View className="p-4">
              {/* Cart Items */}
              <View className="mb-4">
                {cart.map((item) => (
                  <View
                    key={item.product.id}
                    className="flex-row py-3 border-b border-gray-100"
                  >
                    <Image
                      source={{ uri: item.product.imageUrl }}
                      className="w-16 h-16 rounded-md"
                    />

                    <View className="flex-1 ml-3">
                      <Text className="text-gray-800 font-medium">
                        {item.product.name}
                      </Text>
                      <Text className="text-gray-500 text-xs">
                        {item.product.unit}
                      </Text>

                      <View className="flex-row items-center justify-between mt-2">
                        <Text className="font-bold text-primary">
                          ₹{item.product.discountPrice || item.product.price}
                        </Text>

                        <View className="flex-row items-center">
                          <TouchableOpacity
                            className="w-7 h-7 bg-gray-100 rounded-full items-center justify-center"
                            onPress={() =>
                              handleDecrement(item.product.id, item.quantity)
                            }
                          >
                            <Feather name="minus" size={16} color="#4B5563" />
                          </TouchableOpacity>

                          <Text className="mx-3 font-medium">
                            {item.quantity}
                          </Text>

                          <TouchableOpacity
                            className="w-7 h-7 bg-gray-100 rounded-full items-center justify-center"
                            onPress={() =>
                              handleIncrement(item.product.id, item.quantity)
                            }
                          >
                            <Feather name="plus" size={16} color="#4B5563" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>

                    <TouchableOpacity
                      className="ml-2 h-7 w-7 items-center justify-center"
                      onPress={() => removeFromCart(item.product.id)}
                    >
                      <Feather name="trash-2" size={18} color="#F87171" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              {/* Promo Code */}
              <View className="flex-row items-center mb-6 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <Feather name="gift" size={18} color="#8CC84B" />
                <Text className="flex-1 ml-2 text-gray-700">
                  Apply promo code
                </Text>
                <Feather name="chevron-right" size={18} color="#9CA3AF" />
              </View>

              {/* Order Summary */}
              <View className="bg-gray-50 rounded-lg p-4 mb-6">
                <Text className="text-gray-800 font-semibold mb-3">
                  Order Summary
                </Text>

                <View className="flex-row justify-between mb-2">
                  <Text className="text-gray-600">Subtotal</Text>
                  <Text className="text-gray-800 font-medium">
                    ₹{getCartTotal()}
                  </Text>
                </View>

                <View className="flex-row justify-between mb-2">
                  <Text className="text-gray-600">Delivery Fee</Text>
                  <Text className="text-gray-800 font-medium">₹30</Text>
                </View>

                <View className="flex-row justify-between pt-2 border-t border-gray-200 mt-2">
                  <Text className="text-gray-800 font-semibold">Total</Text>
                  <Text className="text-primary font-bold">
                    ₹{getCartTotal() + 30}
                  </Text>
                </View>
              </View>

              {/* First to Accept Info */}
              <View className="bg-primary/10 rounded-lg p-4 mb-6">
                <View className="flex-row items-start">
                  <Feather name="info" size={18} color="#8CC84B" />
                  <View className="flex-1 ml-2">
                    <Text className="text-gray-800 font-semibold">
                      First to Accept Order System
                    </Text>
                    <Text className="text-gray-600 mt-1">
                      Your order will be sent to nearby kirana stores and the
                      first store to accept it will fulfill your order.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Bottom Action Bar */}
          <View className="p-4 border-t border-gray-200">
            <TouchableOpacity
              className="bg-primary py-3 rounded-lg items-center"
              onPress={() => router.push("/checkout")}
            >
              <Text className="text-white font-bold">
                Proceed to Checkout • ₹{getCartTotal() + 30}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
