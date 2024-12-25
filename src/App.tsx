import React from 'react';
import { useAuth } from './hooks/useAuth';
import LandingPage from './pages/auth/LandingPage';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import AdminDashboard from './components/dashboard/AdminDashboard';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import ParentDashboard from './components/dashboard/ParentDashboard';
import DirectorDashboard from './components/dashboard/DirectorDashboard';
import HeadTeacherDashboard from './components/dashboard/HeadTeacherDashboard';
import ExamOfficerDashboard from './components/dashboard/ExamOfficerDashboard';

export default function App() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  const getDashboardComponent = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'head_teacher':
        return <HeadTeacherDashboard />;
      case 'director':
        return <DirectorDashboard />;
      case 'exam_officer':
        return <ExamOfficerDashboard />;
      case 'teacher':
        return <TeacherDashboard user={user} />;
      case 'parent':
        return <ParentDashboard user={user} />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <DashboardLayout user={user} onLogout={logout}>
      {getDashboardComponent()}
    </DashboardLayout>
  );
}