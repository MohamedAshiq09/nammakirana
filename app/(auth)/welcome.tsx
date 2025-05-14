// components/ui/Input.tsx
import { Feather } from '@expo/vector-icons';
import { ClassNameValue } from 'nativewind/dist/style-sheet/types';
import React, { forwardRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: keyof typeof Feather.glyphMap;
  rightIcon?: keyof typeof Feather.glyphMap;
  onRightIconPress?: () => void;
  containerClassName?: ClassNameValue;
  inputClassName?: ClassNameValue;
  labelClassName?: ClassNameValue;
  errorClassName?: ClassNameValue;
}

const Input = forwardRef<TextInput, InputProps>(
  ({ 
    label, 
    error, 
    leftIcon, 
    rightIcon,
    onRightIconPress,
    containerClassName = '',
    inputClassName = '',
    labelClassName = '',
    errorClassName = '',
    ...props 
  }, ref) => {
    return (
      <View className={`w-full mb-4 ${containerClassName}`}>
        {label && (
          <Text className={`text-gray-700 font-medium mb-1 ${labelClassName}`}>
            {label}
          </Text>
        )}
        
        <View className="relative w-full">
          {leftIcon && (
            <View className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
              <Feather name={leftIcon} size={18} color="#6B7280" />
            </View>
          )}
          
          <TextInput
            ref={ref}
            className={`w-full bg-white border rounded-lg py-2.5 px-3 text-gray-800 
              ${leftIcon ? 'pl-10' : ''} 
              ${rightIcon ? 'pr-10' : ''} 
              ${error ? 'border-red-500' : 'border-gray-300'}
              ${inputClassName}`}
            placeholderTextColor="#9CA3AF"
            {...props}
          />
          
          {rightIcon && (
            <View 
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
              onTouchEnd={onRightIconPress ? onRightIconPress : undefined}
            >
              <Feather name={rightIcon} size={18} color="#6B7280" />
            </View>
          )}
        </View>
        
        {error && (
          <Text className={`text-red-500 text-sm mt-1 ${errorClassName}`}>
            {error}
          </Text>
        )}
      </View>
    );
  }
);

export default Input;