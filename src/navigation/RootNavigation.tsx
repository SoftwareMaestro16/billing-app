import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from '../screens/Onboarding/OnboardingScreen';
import { PaywallScreen } from '../screens/Paywall/PaywallScreen';
import { MainScreen } from '../screens/Main/MainScreen';
import { RootStackParamList } from '../types/rootstack.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Paywall" component={PaywallScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>

  );
}
