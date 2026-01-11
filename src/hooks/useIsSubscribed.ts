import { useState, useEffect } from 'react';
import { subscriptionService } from '../services/subscriptionMethods';

export const useIsSubscribed = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);

  useEffect(() => {
    const check = async () => {
      const result = await subscriptionService.hasSubscription();
      console.log('Subscription boolean:', result); 
      setIsSubscribed(result);
    };
    check();
  }, []);

  return isSubscribed; 
};
