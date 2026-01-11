import { useCallback } from 'react';
import { subscriptionService } from '../services/subscriptionMethods';

export const useRemoveSubscription = () => {
  return useCallback(async () => {
    await subscriptionService.removeSubscription();
  }, []);
};

