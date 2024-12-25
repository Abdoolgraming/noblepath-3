import { ROLES } from './roles';

export const FEATURES = {
  // Student Management
  VIEW_STUDENTS: 'view_students',
  MANAGE_STUDENTS: 'manage_students',
  
  // Class Management
  VIEW_CLASSES: 'view_classes',
  MANAGE_CLASSES: 'manage_classes',
  
  // Subject Management
  VIEW_SUBJECTS: 'view_subjects',
  MANAGE_SUBJECTS: 'manage_subjects',
  
  // Attendance
  VIEW_ATTENDANCE: 'view_attendance',
  MANAGE_ATTENDANCE: 'manage_attendance',
  
  // Results & Grading
  VIEW_RESULTS: 'view_results',
  MANAGE_RESULTS: 'manage_results',
  APPROVE_RESULTS: 'approve_results',
  
  // Reports
  VIEW_REPORTS: 'view_reports',
  GENERATE_REPORTS: 'generate_reports',
  
  // System Settings
  MANAGE_SETTINGS: 'manage_settings',
  
  // Users
  MANAGE_USERS: 'manage_users'
} as const;

export const ROLE_FEATURES = {
  [ROLES.ADMIN]: [
    FEATURES.VIEW_STUDENTS,
    FEATURES.MANAGE_STUDENTS,
    FEATURES.VIEW_CLASSES,
    FEATURES.MANAGE_CLASSES,
    FEATURES.VIEW_SUBJECTS,
    FEATURES.MANAGE_SUBJECTS,
    FEATURES.VIEW_ATTENDANCE,
    FEATURES.MANAGE_ATTENDANCE,
    FEATURES.VIEW_RESULTS,
    FEATURES.MANAGE_RESULTS,
    FEATURES.APPROVE_RESULTS,
    FEATURES.VIEW_REPORTS,
    FEATURES.GENERATE_REPORTS,
    FEATURES.MANAGE_SETTINGS,
    FEATURES.MANAGE_USERS
  ],
  
  [ROLES.TEACHER]: [
    FEATURES.VIEW_STUDENTS,
    FEATURES.VIEW_CLASSES,
    FEATURES.VIEW_SUBJECTS,
    FEATURES.VIEW_ATTENDANCE,
    FEATURES.MANAGE_ATTENDANCE,
    FEATURES.VIEW_RESULTS,
    FEATURES.MANAGE_RESULTS,
    FEATURES.VIEW_REPORTS,
    FEATURES.GENERATE_REPORTS
  ],
  
  [ROLES.PARENT]: [
    FEATURES.VIEW_ATTENDANCE,
    FEATURES.VIEW_RESULTS,
    FEATURES.VIEW_REPORTS
  ]
} as const;