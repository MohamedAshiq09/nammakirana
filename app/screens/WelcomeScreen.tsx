import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { RootStackParamList } from '../navigation/AppNavigator';

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>NAMMA KIRANA</Text>
        <Text style={styles.subtitle}>FRESH. SHOP LOCAL. SAVE BIG.</Text>
        
        <View style={styles.groceryBagContainer}>
          <Image 
            source={require('../../assets/images/grocery-bag.png')} 
            style={styles.groceryBag}
            resizeMode="contain"
          />
        </View>
        
        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By continuing, I accept the Terms of Service & Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  groceryBagContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groceryBag: {
    width: 200,
    height: 200,
  },
  getStartedButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 30,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

export default WelcomeScreen;