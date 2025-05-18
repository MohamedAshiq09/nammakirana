// app/(main)/checkout/index.tsx
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useOrder } from "@/contexts/OrderContent";

// Mock address data
const addresses = [
  {
    id: "addr1",
    name: "Home",
    addressLine1: "123 Main Street",
    addressLine2: "Apartment 4B",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
    phone: "9876543210",
    isDefault: true,
  },
  {
    id: "addr2",
    name: "Work",
    addressLine1: "ABC Tech Park",
    addressLine2: "Building 3, Floor 5",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600042",
    phone: "9876543210",
    isDefault: false,
  },
];

// Payment methods
const paymentMethods = [
  { id: "upi", name: "UPI", icon: "smartphone" },
  { id: "card", name: "Credit/Debit Card", icon: "credit-card" },
  { id: "cod", name: "Cash on Delivery", icon: "dollar-sign" },
];

export default function CheckoutScreen() {
  const { cart, getCartTotal, placeOrder } = useOrder();
  const [selectedAddress, setSelectedAddress] = useState(
    addresses.find((addr) => addr.isDefault)?.id || ""
  );
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [isLoading, setIsLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      Alert.alert("Error", "Please select a delivery address");
      return;
    }

    const address = addresses.find((addr) => addr.id === selectedAddress);
    if (!address) {
      Alert.alert("Error", "Invalid address selected");
      return;
    }

    setIsLoading(true);
    try {
      await placeOrder(address, selectedPayment);
      router.push("../order-confirmation");
    } catch (error) {
      Alert.alert("Error", "Failed to place order. Please try again.");
    } finally {
      setIsLoading(false);
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
          Checkout
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Delivery Address */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-lg font-semibold text-gray-800">
                Delivery Address
              </Text>
              <TouchableOpacity onPress={() => router.push("../addresses")}>
                <Text className="text-primary font-medium">+ Add New</Text>
              </TouchableOpacity>
            </View>

            {addresses.map((address) => (
              <TouchableOpacity
                key={address.id}
                className={`border rounded-lg p-3 mb-2 ${
                  selectedAddress === address.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200"
                }`}
                onPress={() => setSelectedAddress(address.id)}
              >
                <View className="flex-row justify-between items-start">
                  <View className="flex-row items-center">
                    <Text className="font-semibold text-gray-800">
                      {address.name}
                    </Text>
                    {address.isDefault && (
                      <View className="bg-gray-100 rounded-full px-2 py-0.5 ml-2">
                        <Text className="text-xs text-gray-500">Default</Text>
                      </View>
                    )}
                  </View>

                  <View
                    className="h-5 w-5 border-2 rounded-full items-center justify-center
                    ${selectedAddress === address.id ? 'border-primary' : 'border-gray-300'}"
                  >
                    {selectedAddress === address.id && (
                      <View className="h-2.5 w-2.5 bg-primary rounded-full" />
                    )}
                  </View>
                </View>

                <Text className="text-gray-600 mt-1">
                  {address.addressLine1},{" "}
                  {address.addressLine2 && `${address.addressLine2}, `}
                  {address.city}, {address.state} - {address.pincode}
                </Text>

                <Text className="text-gray-600 mt-1">
                  Phone: {address.phone}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Payment Method */}
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-3">
              Payment Method
            </Text>

            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                className={`flex-row items-center border rounded-lg p-3 mb-2 ${
                  selectedPayment === method.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200"
                }`}
                onPress={() => setSelectedPayment(method.id)}
              >
                <View className="w-8 h-8 bg-primary/10 rounded-full items-center justify-center">
                  <Feather
                    name={method.icon as any}
                    size={16}
                    color="#8CC84B"
                  />
                </View>

                <Text className="flex-1 ml-3 font-medium text-gray-800">
                  {method.name}
                </Text>

                <View
                  className="h-5 w-5 border-2 rounded-full items-center justify-center
                  ${selectedPayment === method.id ? 'border-primary' : 'border-gray-300'}"
                >
                  {selectedPayment === method.id && (
                    <View className="h-2.5 w-2.5 bg-primary rounded-full" />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Order Summary */}
          <View className="bg-gray-50 rounded-lg p-4 mb-6">
            <Text className="text-gray-800 font-semibold mb-3">
              Order Summary
            </Text>

            {cart.map((item) => (
              <View
                key={item.product.id}
                className="flex-row justify-between mb-2"
              >
                <Text className="text-gray-600">
                  {item.product.name} x{item.quantity}
                </Text>
                <Text className="text-gray-800 font-medium">
                  ₹
                  {(item.product.discountPrice || item.product.price) *
                    item.quantity}
                </Text>
              </View>
            ))}

            <View className="flex-row justify-between my-2">
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

          {/* First to Accept Process */}
          <View className="bg-yellow-50 rounded-lg p-4 mb-6">
            <View className="flex-row items-start">
              <Feather name="info" size={18} color="#F59E0B" />
              <View className="flex-1 ml-2">
                <Text className="text-gray-800 font-semibold">
                  How First-to-Accept Works
                </Text>
                <Text className="text-gray-600 mt-1">
                  1. Your order will be broadcast to nearby kirana stores
                </Text>
                <Text className="text-gray-600">
                  2. The first store to accept your order will process it
                </Text>
                <Text className="text-gray-600">
                  3. You'll receive confirmation once a store accepts
                </Text>
                <Text className="text-gray-600">
                  4. Track delivery status in real-time
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="p-4 border-t border-gray-200">
        <TouchableOpacity
          className={`py-3 rounded-lg items-center ${
            isLoading ? "bg-primary/70" : "bg-primary"
          }`}
          onPress={handlePlaceOrder}
          disabled={isLoading}
        >
          {isLoading ? (
            <Text className="text-white font-bold">Placing Order...</Text>
          ) : (
            <Text className="text-white font-bold">
              Place Order • ₹{getCartTotal() + 30}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
