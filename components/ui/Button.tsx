// components/ui/Button.tsx
import { ClassNameValue } from 'nativewind/dist/style-sheet/types';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: ClassNameValue;
  labelClassName?: ClassNameValue;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  labelClassName = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'flex-row items-center justify-center rounded-lg';
  
  const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    outline: 'bg-transparent border border-primary',
    link: 'bg-transparent',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2.5',
    lg: 'px-6 py-3',
  };
  
  const labelClasses = {
    primary: 'text-white font-medium',
    secondary: 'text-white font-medium',
    outline: 'text-primary font-medium',
    link: 'text-primary font-medium',
  };
  
  const labelSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  
  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled || isLoading ? 'opacity-50' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={variant === 'outline' || variant === 'link' ? '#8CC84B' : '#FFFFFF'} />
      ) : (
        <Text className={`${labelClasses[variant]} ${labelSizeClasses[size]} ${labelClassName}`}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;