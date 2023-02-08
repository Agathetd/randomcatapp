import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Navigator from './src/navigation/Navigator';
import { ScreenContainer } from './src/screens/ScreenContainer';
import { NetworkProvider } from "react-native-offline";

export default function App() {
  return (
    <NetworkProvider>
        <Navigator></Navigator>
      </NetworkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
