import { useAuth } from './useAuth';
import { ROLE_FEATURES } from '../config/roles';

export function useFeatures() {
  const { user } = useAuth();
  
  const hasFeature = (feature: string): boolean => {
    if (!user?.role) return false;
    const features = ROLE_FEATURES[user.role];
    return features.includes('*') || features.includes(feature);
  };
  
  return {
    hasFeature
  };
}