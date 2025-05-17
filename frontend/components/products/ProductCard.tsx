// components/products/ProductCard.tsx
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../types/models";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  className = "",
}) => {
  const handlePress = () => {
    router.push(`/products/${product.id}`);
  };

  const handleAddToCart = (e: any) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <TouchableOpacity
      className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${className}`}
      onPress={handlePress}
    >
      <Image
        source={{ uri: product.imageUrl }}
        className="w-full h-24"
        resizeMode="cover"
      />

      <View className="p-2">
        <Text className="text-gray-800 font-medium">{product.name}</Text>
        <Text className="text-gray-500 text-xs">{product.unit}</Text>

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
            <Text className="text-primary font-bold">₹{product.price}</Text>
          )}

          <TouchableOpacity
            className="ml-auto bg-primary rounded-full w-6 h-6 items-center justify-center"
            onPress={handleAddToCart}
          >
            <Feather name="plus" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
