import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Category item component
const CategoryItem: React.FC<{ title: string, onPress?: () => void }> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
    <Image 
      source={require('../assets/images/grocery-bag.png')}
      style={styles.categoryImage}
      resizeMode="contain"
    />
    <Text style={styles.categoryTitle}>{title}</Text>
  </TouchableOpacity>
);

// Grocery item component
const GroceryItem: React.FC<{ title: string, onPress?: () => void }> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.groceryItem} onPress={onPress}>
    <Image 
      source={require('../assets/images/grocery-bag.png')}
      style={styles.groceryItemImage}
      resizeMode="contain"
    />
    <Text style={styles.groceryItemTitle}>{title}</Text>
  </TouchableOpacity>
);

// Section header component
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.seeAllText}>See All</Text>
    </TouchableOpacity>
  </View>
);

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for fruits, atta, oils and more"
            placeholderTextColor="#888"
          />
        </View>

        {/* Top Categories */}
        <View style={styles.categoriesGrid}>
          <CategoryItem title="Fruits & Veggies" />
          <CategoryItem title="Snacks & Drinks" />
          <CategoryItem title="Beauty & Wellness" />
          <CategoryItem title="House Essentials" />
        </View>

        {/* Best Deals Section */}
        <View style={styles.bestDealsContainer}>
          <Text style={styles.bestDealsLabel}>BEST DEALS</Text>
          <View style={styles.bestDealsCard}>
            <View style={styles.bestDealsContent}>
              <Text style={styles.bestDealsTitle}>Fresh Supplies</Text>
              <Text style={styles.bestDealsSubtitle}>Delivered Now.</Text>
              <TouchableOpacity style={styles.orderNowButton}>
                <Text style={styles.orderNowText}>Order Now</Text>
              </TouchableOpacity>
            </View>
            <Image 
              source={require('../assets/images/grocery-bag.png')} 
              style={styles.bestDealsImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* GROCERY & KITCHEN Section */}
        <View style={styles.section}>
          <SectionHeader title="GROCERY & KITCHEN" />
          <View style={styles.groceryGrid}>
            <GroceryItem title="Fresh Vegetables" />
            <GroceryItem title="Fresh Fruits" />
            <GroceryItem title="Dairy, Bread & Eggs" />
            <GroceryItem title="Cereals & Breakfast" />
            <GroceryItem title="Rice, Atta & Dals" />
            <GroceryItem title="Oils & Ghee" />
            <GroceryItem title="Masalas & Dry Fruits" />
            <GroceryItem title="Bakery" />
            <GroceryItem title="Biscuits & Cakes" />
            <GroceryItem title="Tea, Coffee & More" />
            <GroceryItem title="Kitchen & Dining" />
            <GroceryItem title="Meat & Seafood" />
          </View>
        </View>

        {/* SNACKS & DRINKS Section */}
        <View style={styles.section}>
          <SectionHeader title="SNACKS & DRINKS" />
          <View style={styles.groceryGrid}>
            <GroceryItem title="Chips & Namkeens" />
            <GroceryItem title="Tea, Coffee & More" />
            <GroceryItem title="Ice Creams & More" />
            <GroceryItem title="Frozen Food" />
            <GroceryItem title="Cold Drinks & Juices" />
            <GroceryItem title="Munchies" />
            <GroceryItem title="Biscuits & Cookies" />
            <GroceryItem title="Sweet Cravings" />
          </View>
        </View>

        {/* BEAUTY & PERSONAL CARE Section */}
        <View style={styles.section}>
          <SectionHeader title="BEAUTY & PERSONAL CARE" />
          <View style={styles.groceryGrid}>
            <GroceryItem title="Bath & Body" />
            <GroceryItem title="Hair Care" />
            <GroceryItem title="Skincare & Beauty" />
            <GroceryItem title="Oral Care" />
            <GroceryItem title="Feminine Hygiene" />
            <GroceryItem title="Health Care" />
            <GroceryItem title="Baby Care" />
            <GroceryItem title="Pet Supplies" />
          </View>
        </View>

        {/* HOUSEHOLD ESSENTIALS Section */}
        <View style={styles.section}>
          <SectionHeader title="HOUSEHOLD ESSENTIALS" />
          <View style={styles.groceryGrid}>
            <GroceryItem title="Cleaning Essentials" />
            <GroceryItem title="Home & Fashion" />
            <GroceryItem title="Electrical & Electronics" />
            <GroceryItem title="Oral Care" />
          </View>
        </View>

        {/* Bottom padding for navigation */}
        <View style={styles.bottomNavPadding} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/images/grocery-bag.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/images/grocery-bag.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Categories</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/images/grocery-bag.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../assets/images/grocery-bag.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingBottom: 70, // Space for bottom navigation
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  searchInput: {
    height: 36,
    fontSize: 14,
    paddingLeft: 10,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#e6f7e6',
    paddingVertical: 16,
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bestDealsContainer: {
    padding: 16,
    backgroundColor: '#e6f7e6',
  },
  bestDealsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  bestDealsCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  bestDealsContent: {
    flex: 1,
  },
  bestDealsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4c8c4a',
  },
  bestDealsSubtitle: {
    fontSize: 14,
    color: '#4c8c4a',
    marginBottom: 10,
  },
  orderNowButton: {
    backgroundColor: '#4c8c4a',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  orderNowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bestDealsImage: {
    width: 80,
    height: 80,
  },
  section: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    color: '#4c8c4a',
    fontWeight: 'bold',
    fontSize: 12,
  },
  groceryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  groceryItem: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 16,
  },
  groceryItemImage: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  groceryItemTitle: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  bottomNavPadding: {
    height: 70,
  },
  bottomNav: {
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
    paddingBottom: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 10,
    color: '#888',
    marginTop: 2,
  },
  activeNavText: {
    color: '#4c8c4a',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

