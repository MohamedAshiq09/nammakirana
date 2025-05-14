// app/(auth)/signup.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

// Define validation schema with Zod
const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { control, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      // Here you would typically call your auth service
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to home screen after successful signup
      router.replace('/(main)/');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView className="flex-1 p-6">
        <View className="items-center mt-8 mb-10">
          <View className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg items-center justify-center mb-6">
            {/* Placeholder for logo */}
            <Text className="text-gray-400">Logo</Text>
          </View>
          
          <Text className="text-xl font-semibold text-gray-800 mb-1">LocalGrocer</Text>
          <Text className="text-sm text-gray-600">Join us for fresh deals and more</Text>
        </View>
        
        <View className="mb-8">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Email *"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                leftIcon="mail"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.email?.message}
              />
            )}
          />
          
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Password *"
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                leftIcon="lock"
                rightIcon={showPassword ? "eye-off" : "eye"}
                onRightIconPress={toggleShowPassword}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.password?.message}
              />
            )}
          />
        </View>
        
        <Button
          label="Get Started"
          variant="primary"
          size="lg"
          className="w-full mb-6"
          isLoading={isLoading}
          onPress={handleSubmit(onSubmit)}
        />
        
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text className="text-primary font-medium">Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}