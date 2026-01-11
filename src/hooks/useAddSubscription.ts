import { useCallback } from 'react';
import { subscriptionService } from '../services/subscriptionMethods';

export const useAddSubscription = () => {
  return useCallback(async () => {
    await subscriptionService.addSubscription();
  }, []);
};
