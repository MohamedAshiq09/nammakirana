import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import CategoryButton from '../components/CategoryButton';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchPlaceholder}>
            Search for fruits, atta, oils and more
          </Text>
        </View>

        {/* Categories Grid */}
        <View style={styles.categoriesContainer}>
          <CategoryButton title="Fruits & Veggies" />
          <CategoryButton title="Snacks & Drinks" />
          <CategoryButton title="Beauty & Wellness" />
          <CategoryButton title="House Essentials" />
        </View>

        {/* Best Deals Section */}
        <View style={styles.bestDealsContainer}>
          <Text style={styles.bestDealsTitle}>BEST DEALS</Text>
          <View style={styles.bestDealsCard}>
            <Text style={styles.bestDealsText}>Fresh Supplies Delivered Now.</Text>
            <TouchableOpacity style={styles.orderNowButton}>
              <Text style={styles.orderNowText}>Order Now</Text>
            </TouchableOpacity>
            <Image 
              source={require('../../assets/images/grocery-bag.png')} 
              style={styles.bestDealsImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Grocery & Kitchen Section */}
        <View style={styles.grocerySection}>
          <View style={styles.grocerySectionHeader}>
            <Text style={styles.grocerySectionTitle}>GROCERY & KITCHEN</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.groceryItemsContainer}
          >
            {/* Grocery items */}
            <View style={styles.groceryItem}></View>
            <View style={styles.groceryItem}></View>
            <View style={styles.groceryItem}></View>
          </ScrollView>
        </View>
        
        {/* Bottom padding for navigation */}
        <View style={styles.bottomNavPadding} />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 60, // Space for bottom navigation
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 16,
  },
  searchPlaceholder: {
    color: '#888',
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  bestDealsContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  bestDealsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bestDealsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bestDealsText: {
    flex: 1,
    fontSize: 16,
  },
  orderNowButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  orderNowText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bestDealsImage: {
    width: 50,
    height: 50,
    marginLeft: 16,
  },
  grocerySection: {
    padding: 16,
  },
  grocerySectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  grocerySectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#ff6347',
    fontWeight: 'bold',
  },
  groceryItemsContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  groceryItem: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginRight: 8,
  },
  bottomNavPadding: {
    height: 60,
  }
});

export default HomeScreen;