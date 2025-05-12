import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { RootStackParamList } from '../navigation/AppNavigator';

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>NAMMA KIRANA</Text>
          <Text style={styles.subtitle}>FRESH. SHOP LOCAL. SAVE BIG.</Text>
        </View>
        
        <View style={styles.groceryBagContainer}>
          <Image
            source={require('../assets/grocery-bag.png')}
            style={styles.groceryBag}
            resizeMode="contain"
          />
        </View>
      </View>
      
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
        
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By continuing, I accept the</Text>
          <View style={styles.termsLinksContainer}>
            <Text style={styles.termsLink}>Terms of Service</Text>
            <Text style={styles.termsText}>     </Text>
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8CC152', // Updated to brighter green to match image
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    marginTop: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  groceryBagContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  groceryBag: {
    width: 600,
    height: 600,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#76B041',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  getStartedText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsContainer: {
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#333',
  },
  termsLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  termsLink: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;