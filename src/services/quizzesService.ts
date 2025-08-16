import api from './api';
import { Quiz } from '../types';

export const quizzesService = {
  getAll: async (semester?: string): Promise<Quiz[]> => {
    const params = semester ? { semester } : {};
    const response = await api.get('/quizzes', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Quiz> => {
    const response = await api.get(`/quizzes/${id}`);
    return response.data;
  },

  create: async (data: Partial<Quiz>): Promise<Quiz> => {
    const response = await api.post('/quizzes', data);
    return response.data;
  },

  update: async (id: string, data: Partial<Quiz>): Promise<Quiz> => {
    const response = await api.put(`/quizzes/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/quizzes/${id}`);
  },
};
