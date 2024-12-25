import { Role } from '../config/roles';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  subjects?: string[];
  classes?: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}