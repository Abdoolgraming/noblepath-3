import React from 'react';
import { User } from '../../types/auth';
import AdminDashboard from './AdminDashboard';
import TeacherDashboard from './TeacherDashboard';
import ParentDashboard from './ParentDashboard';

interface DashboardRouterProps {
  user: User | null;
}

export function DashboardRouter({ user }: DashboardRouterProps) {
  switch (user?.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'teacher':
      return <TeacherDashboard user={user} />;
    case 'parent':
      return <ParentDashboard user={user} />;
    default:
      return <div>Invalid role</div>;
  }
}