import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useIsSubscribed } from './src/hooks/useIsSubscribed';
import { RootNavigator } from './src/navigation/RootNavigation';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MainScreen } from './src/screens/Main/MainScreen';

export default function App() {
  const isSubscribed = useIsSubscribed();

  console.log('isSubscribed type:', typeof isSubscribed, 'value:', isSubscribed);

  if (isSubscribed === null) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isSubscribed ? <MainScreen /> : <RootNavigator />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
