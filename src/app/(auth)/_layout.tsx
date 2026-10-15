import { AuthProvider } from "@/context/AuthContext";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
      </Stack>
    </AuthProvider>
  );
}
