export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Announcement {
  _id: string;
  title: string;
  content: string;
  date: string;
  semester: string;
  createdAt: string;
  updatedAt: string;
}

export interface Quiz {
  _id: string;
  title: string;
  description?: string;
  dueDate: string;
  course: string;
  semester: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface AnnouncementsState {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

export interface QuizzesState {
  quizzes: Quiz[];
  loading: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  announcements: AnnouncementsState;
  quizzes: QuizzesState;
}
