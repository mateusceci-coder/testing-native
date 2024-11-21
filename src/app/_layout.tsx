import { Stack } from "expo-router/stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function AppLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, headerTintColor: "white" }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
