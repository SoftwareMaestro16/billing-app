import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { subscription } from '../../constants/subscription';
import { Button } from './Button';
import { useAddSubscription } from '../../hooks/useAddSubscription';

interface SubscriptionBannerProps {
  navigation: any;
}

export function SubscriptionBanner({ navigation }: SubscriptionBannerProps) {
  const addSubscription = useAddSubscription();

  return (
    <View style={styles.container}>
      {subscription.map((sub) => {
        const hasDiscount = sub.discount > 0; 

        return (
          <View key={sub.id} style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>{sub.type} подписка</Text>
              <MaterialIcons name="star" size={20} color="#FFD700" />
            </View>

            <Text style={styles.price}>Цена: ${sub.price}</Text>

            {hasDiscount && (
              <Text style={styles.discount}>
                Скидка: ${sub.discount}
              </Text>
            )}

            <Button
              onPress={async () => {
                await addSubscription();
                navigation.replace('Main');
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginBottom: 4,
  },
  discount: {
    fontSize: 14,
    color: '#f43f5e',
    marginBottom: 8,
  },
});
