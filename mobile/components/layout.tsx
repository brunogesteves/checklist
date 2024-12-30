import { Slot, Stack } from "expo-router";
import { InfoProvider } from "@/contexts/context";

const Layout = () => {
  return (
    <InfoProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </InfoProvider>
  );
};

export default Layout;
