import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CategoryButtonProps {
  title: string;
  onPress?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.categoryButton} 
      onPress={onPress}
    >
      <Text style={styles.categoryText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    height: 100,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoryButton;