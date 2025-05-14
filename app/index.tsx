// app/index.tsx
import { Redirect } from 'expo-router';

// This is our app entry point
// Here we check if user is authenticated and redirect accordingly
export default function Index() {
  // In a real app, you would check for authentication state here
  const isAuthenticated = false; // Replace with actual auth check

  if (isAuthenticated) {
    return <Redirect href="/(app)" />;  // Changed from "/App" to "/(app)"
  }

  return <Redirect href="/(auth)/welcome" />;
}