import { useState } from 'react';
import { ROLES, Role } from '../config/roles';
import { User } from '../types/auth';

const mockUsers: Record<Role, Omit<User, 'id'>> = {
  admin: {
    name: 'Admin User',
    email: 'admin@school.com',
    role: ROLES.ADMIN
  },
  head_teacher: {
    name: 'Head Teacher',
    email: 'headteacher@school.com',
    role: ROLES.HEAD_TEACHER
  },
  director: {
    name: 'School Director',
    email: 'director@school.com',
    role: ROLES.DIRECTOR
  },
  exam_officer: {
    name: 'Exam Officer',
    email: 'examofficer@school.com',
    role: ROLES.EXAM_OFFICER
  },
  teacher: {
    name: 'Teacher User',
    email: 'teacher@school.com',
    role: ROLES.TEACHER,
    subjects: ['Mathematics', 'Physics'],
    classes: ['Class 1A', 'Class 1B']
  },
  parent: {
    name: 'Parent User',
    email: 'parent@school.com',
    role: ROLES.PARENT
  }
};

export function useAuth() {
  const [authState, setAuthState] = useState({
    user: null as User | null,
    isAuthenticated: false,
    isLoading: false
  });

  const login = async (role: Role) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockUser = {
        id: `${role}-1`,
        ...mockUsers[role]
      };
      
      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  return {
    ...authState,
    login,
    logout
  };
}