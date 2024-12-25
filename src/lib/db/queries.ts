import { mockTeachers } from './mockData';

// Mock class subjects data
const mockClassSubjects = [
  { id: '1', name: 'Mathematics', classId: 'class1' },
  { id: '2', name: 'English', classId: 'class1' },
  { id: '3', name: 'Science', classId: 'class1' }
];

// Mock teacher classes data
const mockTeacherClasses = [
  { id: 'class1', name: 'Class 1A', teacherId: '1' },
  { id: 'class2', name: 'Class 1B', teacherId: '1' }
];

// Use mock data instead of Firebase queries
export const getTeachers = async () => {
  return mockTeachers;
};

export const getTeacherClasses = async (teacherId: string) => {
  return mockTeacherClasses.filter(c => c.teacherId === teacherId);
};

export const getClassSubjects = async (classId: string) => {
  return mockClassSubjects.filter(s => s.classId === classId);
};

export const getStudentsByClass = async (classId: string) => {
  return []; // Return empty array for now
};