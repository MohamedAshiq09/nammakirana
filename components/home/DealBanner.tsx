// components/home/DealBanner.tsx
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface DealItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

interface DealBannerProps {
  item: DealItem;
  className?: string;
}

const DealBanner: React.FC<DealBannerProps> = ({ item, className = '' }) => {
  const handlePress = () => {
    router.push(`/deals/${item.id}`);
  };

  return (
    <TouchableOpacity
      className={`bg-white rounded-lg border border-gray-200 overflow-hidden w-40 ${className}`}
      onPress={handlePress}
    >
      <View className="h-32 bg-gray-100 items-center justify-center">
        {item.image ? (
          <Image 
            source={{ uri: item.image }} 
            className="w-full h-full"
            resizeMode="cover"
          />
        ) : (
          <View className="w-12 h-12 bg-primary/20 rounded-full items-center justify-center">
            <Text className="text-primary font-medium">
              {item.title.charAt(0)}
            </Text>
          </View>
        )}
      </View>
      
      <View className="p-2">
        <Text className="text-gray-800 font-medium">{item.title}</Text>
        <Text className="text-gray-500 text-xs">{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DealBanner;