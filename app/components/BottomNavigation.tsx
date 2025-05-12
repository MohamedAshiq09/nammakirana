import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BottomNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
});

export default BottomNavigation;