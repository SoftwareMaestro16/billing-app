import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components/ui/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootstack.type';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export function OnboardingScreen({ navigation }: Props) {
  const handleContinue = () => {
    navigation.replace('Paywall');
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="rocket-launch" size={120} color="#1E40AF" />
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Text style={styles.description}>
        Здесь будет короткий текст о приложении, который увидит пользователь впервые.
      </Text>
      <Button onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
});
