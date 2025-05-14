// components/SplashScreen.tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

interface SplashScreenProps {
  onFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  React.useEffect(() => {
    // Simulate splash screen delay
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View className="flex-1 bg-primary items-center justify-center">
      <StatusBar style="light" />
      
      <View className="items-center">
        <Text className="text-4xl font-bold text-white mb-2">NAMMA KIRANA</Text>
        <Text className="text-white text-lg">FRESH. SHOP LOCAL. SAVE BIG.</Text>
      </View>
      
      <View className="absolute bottom-8">
        <Text className="text-white/80 text-sm">Version 1.0.0</Text>
      </View>
    </View>
  );
};

export default SplashScreen;