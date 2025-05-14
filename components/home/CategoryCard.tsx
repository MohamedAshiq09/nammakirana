// components/home/CategoryCard.tsx
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Category } from '../../types/models';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className = '' }) => {
  const handlePress = () => {
    router.push(`/categories/${category.id}`);
  };

  return (
    <TouchableOpacity
      className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${className}`}
      onPress={handlePress}
    >
      <View className="h-20 bg-gray-100 items-center justify-center">
        {category.imageUrl ? (
          <Image 
            source={{ uri: category.imageUrl }} 
            className="w-full h-full"
            resizeMode="cover"
          />
        ) : (
          <View className="w-10 h-10 bg-primary/20 rounded-full items-center justify-center">
            <Text className="text-primary font-medium">
              {category.name.charAt(0)}
            </Text>
          </View>
        )}
      </View>
      
      <View className="p-2">
        <Text className="text-gray-800 font-medium text-center">{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;