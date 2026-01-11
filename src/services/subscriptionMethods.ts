import AsyncStorage from '@react-native-async-storage/async-storage';

const SUBSCRIPTION_KEY = 'isSubscribed';

class SubscriptionService {
  async addSubscription(): Promise<void> {
    try {
      await AsyncStorage.setItem(SUBSCRIPTION_KEY, 'true');
    } catch (error) {
      console.error('Failed to add subscription', error);
    }
  }

  async removeSubscription(): Promise<void> {
    try {
      await AsyncStorage.removeItem(SUBSCRIPTION_KEY);
    } catch (error) {
      console.error('Failed to remove subscription', error);
    }
  }

  async hasSubscription(): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem(SUBSCRIPTION_KEY);
      console.log('Raw subscription value:', value);
      return value === 'true';
    } catch (error) {
      console.error('Failed to check subscription', error);
      return false;
    }
  }
  
}

export const subscriptionService = new SubscriptionService();
