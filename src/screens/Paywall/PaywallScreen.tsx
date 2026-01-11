import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SubscriptionBanner } from '../../components/ui/SubscriptionBanner';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootstack.type';

type PaywallNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Paywall'>;

interface Props {
  navigation: PaywallNavigationProp;
};

export function PaywallScreen({ navigation }: Props) {
    
    return (
      <View style={styles.container}>
        <MaterialIcons name="lock" size={100} color="#f43f5e" />
        <Text style={styles.title}>Доступ к контенту</Text>
        <Text style={styles.description}>
          Чтобы получить полный доступ, выберите подписку ниже.
        </Text>
          <SubscriptionBanner navigation={navigation} />
      </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
});
