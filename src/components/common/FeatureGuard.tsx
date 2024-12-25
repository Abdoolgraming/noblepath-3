import React from 'react';
import { useFeatures } from '../../hooks/useFeatures';

interface FeatureGuardProps {
  feature: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function FeatureGuard({ feature, children, fallback = null }: FeatureGuardProps) {
  const { hasFeature } = useFeatures();
  
  if (!hasFeature(feature)) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
}