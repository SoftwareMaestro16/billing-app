import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { ShoppingCart } from 'lucide-react-native';

interface BuyButtonProps {
  onPress?: () => void;
}

export function Button({ onPress }: BuyButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Купить</Text>
      <ShoppingCart size={20} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },
});
