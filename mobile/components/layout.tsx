import { Slot, Stack } from "expo-router";
import { InfoProvider } from "@/contexts/context";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <InfoProvider>
      <StatusBar backgroundColor={"white"} animated={false} />
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
