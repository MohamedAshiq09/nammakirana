// app/(main)/order-confirmation/index.tsx
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useOrder } from "@/contexts/OrderContent";

export default function OrderConfirmationScreen() {
  const { currentOrder } = useOrder();
  const [countdown, setCountdown] = useState(60); // 60 seconds countdown

  useEffect(() => {
    if (!currentOrder) {
      router.replace("/");
      return;
    }

    // Countdown timer for First-to-Accept
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1 || currentOrder?.status !== "pending") {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentOrder]);

  if (!currentOrder) {
    return null; // Redirecting to home
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Order Confirmation */}
      <ScrollView className="flex-1">
        <View className="p-4 items-center">
          <View className="w-20 h-20 bg-primary/20 rounded-full items-center justify-center mb-4">
            {currentOrder.status === "pending" ? (
              <Feather name="clock" size={32} color="#8CC84B" />
            ) : currentOrder.status === "confirmed" ? (
              <Feather name="check-circle" size={32} color="#8CC84B" />
            ) : (
              <Feather name="package" size={32} color="#8CC84B" />
            )}
          </View>

          <Text className="text-2xl font-bold text-gray-800 mb-2">
            {currentOrder.status === "pending"
              ? "Finding a Store..."
              : currentOrder.status === "confirmed"
              ? "Order Confirmed!"
              : "Order in Progress"}
          </Text>

          <Text className="text-gray-600 text-center mb-6">
            {currentOrder.status === "pending"
              ? `Broadcasting your order to nearby stores. A store will accept it shortly.`
              : currentOrder.status === "confirmed"
              ? "Your order has been accepted by a store and is being prepared."
              : "Your order is on the way!"}
          </Text>

          {/* Order ID and Date */}
          <View className="w-full bg-gray-50 rounded-lg p-4 mb-6">
            <Text className="text-gray-800 font-medium mb-1">
              Order #{currentOrder.id.slice(-6)}
            </Text>
            <Text className="text-gray-600">
              Placed on {currentOrder.createdAt.toLocaleDateString()},{" "}
              {currentOrder.createdAt.toLocaleTimeString()}
            </Text>
          </View>

          {/* Order Status Tracker */}
          <View className="w-full mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-3">
              Order Status
            </Text>

            <View className="flex-row items-center mb-4">
              <View className="w-8 h-8 rounded-full bg-primary items-center justify-center">
                <Feather name="check" size={16} color="#FFF" />
              </View>
              <View className="flex-1 ml-3">
                <Text className="font-medium text-gray-800">Order Placed</Text>
                <Text className="text-gray-500 text-sm">
                  {currentOrder.createdAt.toLocaleTimeString()}
                </Text>
              </View>
            </View>

            <View className="w-0.5 h-10 bg-gray-200 ml-4 -my-1" />

            <View className="flex-row items-center mb-4">
              <View
                className={`w-8 h-8 rounded-full items-center justify-center
                ${
                  currentOrder.status !== "pending"
                    ? "bg-primary"
                    : "bg-gray-200"
                }`}
              >
                {currentOrder.status !== "pending" ? (
                  <Feather name="check" size={16} color="#FFF" />
                ) : (
                  <Text className="text-white font-bold">{countdown}</Text>
                )}
              </View>
              <View className="flex-1 ml-3">
                <Text
                  className={`font-medium ${
                    currentOrder.status !== "pending"
                      ? "text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  Store Acceptance
                </Text>
                {currentOrder.status !== "pending" && (
                  <Text className="text-gray-500 text-sm">
                    {new Date().toLocaleTimeString()}
                  </Text>
                )}
              </View>
            </View>

            <View className="w-0.5 h-10 bg-gray-200 ml-4 -my-1" />

            <View className="flex-row items-center mb-4">
              <View
                className={`w-8 h-8 rounded-full items-center justify-center
                ${
                  currentOrder.status === "shipped" ||
                  currentOrder.status === "delivered"
                    ? "bg-primary"
                    : "bg-gray-200"
                }`}
              >
                {currentOrder.status === "shipped" ||
                currentOrder.status === "delivered" ? (
                  <Feather name="check" size={16} color="#FFF" />
                ) : (
                  <Text className="text-white">3</Text>
                )}
              </View>
              <View className="flex-1 ml-3">
                <Text
                  className={`font-medium ${
                    currentOrder.status === "shipped" ||
                    currentOrder.status === "delivered"
                      ? "text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  On the Way
                </Text>
                {(currentOrder.status === "shipped" ||
                  currentOrder.status === "delivered") && (
                  <Text className="text-gray-500 text-sm">
                    {new Date().toLocaleTimeString()}
                  </Text>
                )}
              </View>
            </View>

            <View className="w-0.5 h-10 bg-gray-200 ml-4 -my-1" />

            <View className="flex-row items-center">
              <View
                className={`w-8 h-8 rounded-full items-center justify-center
                ${
                  currentOrder.status === "delivered"
                    ? "bg-primary"
                    : "bg-gray-200"
                }`}
              >
                {currentOrder.status === "delivered" ? (
                  <Feather name="check" size={16} color="#FFF" />
                ) : (
                  <Text className="text-white">4</Text>
                )}
              </View>
              <View className="flex-1 ml-3">
                <Text
                  className={`font-medium ${
                    currentOrder.status === "delivered"
                      ? "text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  Delivered
                </Text>
                {currentOrder.status === "delivered" && (
                  <Text className="text-gray-500 text-sm">
                    {new Date().toLocaleTimeString()}
                  </Text>
                )}
              </View>
            </View>
          </View>

          {/* First to Accept Info */}
          {currentOrder.status === "pending" && (
            <View className="w-full bg-yellow-50 rounded-lg p-4 mb-6">
              <View className="flex-row items-start">
                <Feather name="info" size={18} color="#F59E0B" />
                <View className="flex-1 ml-2">
                  <Text className="text-gray-800 font-semibold">
                    Waiting for a Store to Accept
                  </Text>
                  <Text className="text-gray-600 mt-1">
                    Your order has been broadcast to nearby kirana stores. The
                    first store to accept will prepare and deliver your order.
                  </Text>
                </View>
              </View>
            </View>
          )}

          {/* Actions */}
          <View className="w-full flex-row justify-between mt-6">
            <TouchableOpacity
              className="flex-1 py-3 rounded-lg border border-primary mr-2 items-center"
              onPress={() => router.push("../order-tracking")}
            >
              <Text className="text-primary font-semibold">Track Order</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 py-3 rounded-lg bg-primary ml-2 items-center"
              onPress={() => router.replace("/")}
            >
              <Text className="text-white font-semibold">Go to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
