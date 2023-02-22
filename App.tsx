import React from "react";
import { NetworkProvider } from "react-native-offline";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigator from "./src/navigation/Navigator";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <Navigator />
      </NetworkProvider>
    </QueryClientProvider>
  );
}
