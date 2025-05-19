# Namma Kirana

## 📱 About The Project

Namma Kirana is a mobile application built with React Native and Expo that connects local grocery stores ("kirana" shops) with customers in their neighborhood. The app aims to digitize the traditional shopping experience while preserving the personal touch of local businesses.

## ✨ Features

- **User Authentication**: Secure signup/login system
- **Product Browsing**: Browse groceries by categories
- **Search Functionality**: Easily find products
- **Shopping Cart**: Add products and place orders
- **Order Tracking**: Real-time updates on order status
- **User Profiles**: Save addresses and preferences
- **Multi-language Support**: Available in multiple regional languages

## 🛠️ Built With

- **Framework**: [React Native](https://reactnative.dev/)
- **Development Platform**: [Expo](https://expo.dev/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) (via NativeWind)
- **State Management**: [React Context API](https://reactjs.org/docs/context.html)
- **Authentication**: Firebase Authentication
- **Backend**: Firebase Firestore

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedAshiq09/namma-kirana.git
   cd namma-kirana
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on a device or emulator**
   - Press `i` to open in iOS simulator
   - Press `a` to open in Android emulator
   - Scan the QR code with the Expo Go app on your physical device

## 📁 Project Structure

```
namma-kirana/
├── app/                      # App screens using Expo Router
│   ├── (auth)/               # Authentication screens
│   │   ├── welcome.tsx       # Welcome screen
│   │   ├── signup.tsx        # Signup screen
│   │   └── login.tsx         # Login screen
│   ├── (main)/               # Main app screens
│   │   ├── index.tsx         # Home screen
│   │   ├── search.tsx        # Search screen
│   │   ├── categories/       # Category related screens
│   │   │   ├── index.tsx     # All categories
│   │   │   └── [category].tsx # Specific category
│   │   ├── products/         # Product related screens
│   │   │   └── [id].tsx      # Product details
│   │   └── profile/          # User profile screens
│   │       └── index.tsx     # Profile page
│   ├── _layout.tsx           # Root layout configuration
│   └── index.tsx             # Entry point (redirects to welcome or home)
├── assets/                   # Static assets
├── components/               # Reusable components
├── constants/                # App constants
├── hooks/                    # Custom hooks
├── services/                 # API and service functions
├── types/                    # TypeScript type definitions
├── utils/                    # Utility functions
├── store/                    # State management
└── ...                       # Configuration files
```

## 🔄 Workflow

1. **User Journey**
   - Users start at the welcome screen and can sign up or log in
   - After authentication, they are redirected to the home screen
   - Users can browse categories, search for products, and view product details
   - Products can be added to cart and orders can be placed
   - Users can track their orders and manage their profile

2. **Data Flow**
   - User authentication data is managed through authentication services
   - Product data is fetched from backend services
   - Shopping cart is managed through local state with persistence

## 🧪 Testing

To run tests:

```bash
npm test
# or
yarn test
```

## 📱 Building for Production

To create a production build:

```bash
npx expo build:android
# or
npx expo build:ios
```

## 🚧 Roadmap

- [ ] Implement payment gateway integration
- [ ] Add real-time chat with shop owners
- [ ] Develop shop owner companion app
- [ ] Implement loyalty programs
- [ ] Add voice search functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

