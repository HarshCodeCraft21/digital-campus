import { User, mockUsers } from './mockData';

const STORAGE_KEY = 'mock_auth_user';
const ENROLLED_COURSES_KEY = 'enrolled_courses';

// ⚠️ WARNING: This is NOT secure authentication - for demonstration only!
// In production, use proper backend authentication

export const login = (email: string, password: string): User | null => {
  // Mock validation - accepts any password
  const user = mockUsers.find(u => u.email === email);
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }
  return null;
};

export const signup = (userData: Omit<User, 'id'>): User => {
  const newUser: User = {
    ...userData,
    id: `u${Date.now()}`,
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  return newUser;
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getCurrentUser = (): User | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const updateUser = (userData: Partial<User>) => {
  const current = getCurrentUser();
  if (current) {
    const updated = { ...current, ...userData };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }
  return null;
};

export const enrollInCourse = (courseId: string) => {
  const enrolled = getEnrolledCourses();
  if (!enrolled.includes(courseId)) {
    enrolled.push(courseId);
    localStorage.setItem(ENROLLED_COURSES_KEY, JSON.stringify(enrolled));
  }
};

export const getEnrolledCourses = (): string[] => {
  const stored = localStorage.getItem(ENROLLED_COURSES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const isEnrolled = (courseId: string): boolean => {
  return getEnrolledCourses().includes(courseId);
};
