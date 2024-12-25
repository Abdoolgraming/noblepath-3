import React from 'react';
import { Users, GraduationCap, UserCircle, School, ClipboardCheck, BookOpen } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { ROLES, Role } from '../../config/roles';
import Button from '../../components/common/Button';

const roleConfig = {
  [ROLES.ADMIN]: {
    icon: <Users className="h-12 w-12" />,
    title: 'Administrator',
    description: 'Full system control and management',
    color: 'bg-blue-600'
  },
  [ROLES.HEAD_TEACHER]: {
    icon: <School className="h-12 w-12" />,
    title: 'Head Teacher',
    description: 'Oversee academic operations',
    color: 'bg-green-600'
  },
  [ROLES.DIRECTOR]: {
    icon: <BookOpen className="h-12 w-12" />,
    title: 'Director',
    description: 'Strategic oversight and planning',
    color: 'bg-purple-600'
  },
  [ROLES.EXAM_OFFICER]: {
    icon: <ClipboardCheck className="h-12 w-12" />,
    title: 'Exam Officer',
    description: 'Manage examinations and results',
    color: 'bg-orange-600'
  },
  [ROLES.TEACHER]: {
    icon: <GraduationCap className="h-12 w-12" />,
    title: 'Teacher',
    description: 'Manage classes and assessments',
    color: 'bg-teal-600'
  },
  [ROLES.PARENT]: {
    icon: <UserCircle className="h-12 w-12" />,
    title: 'Parent',
    description: 'Monitor student progress',
    color: 'bg-indigo-600'
  }
};

export default function LandingPage() {
  const { login, isLoading } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Noble Paths Academy
          </h1>
          <p className="text-xl text-gray-600">
            Excellence in Education - Select your role to begin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(roleConfig).map(([role, config]) => (
            <div key={role} className="relative group">
              <div className={`
                ${config.color} rounded-xl p-8 text-white
                transform transition-all duration-300
                hover:scale-105 hover:shadow-xl
              `}>
                <div className="flex justify-center mb-6">
                  {config.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {config.title}
                </h3>
                <p className="mb-6 opacity-90">
                  {config.description}
                </p>
                <Button
                  onClick={() => login(role as Role)}
                  isLoading={isLoading}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100"
                >
                  Continue as {config.title}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          <p>© 2024 Noble Paths Academy. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}