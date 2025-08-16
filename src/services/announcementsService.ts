import api from './api';
import { Announcement } from '../types';

export const announcementsService = {
  getAll: async (semester?: string): Promise<Announcement[]> => {
    const params = semester ? { semester } : {};
    const response = await api.get('/announcements', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Announcement> => {
    const response = await api.get(`/announcements/${id}`);
    return response.data;
  },

  create: async (data: Partial<Announcement>): Promise<Announcement> => {
    const response = await api.post('/announcements', data);
    return response.data;
  },

  update: async (id: string, data: Partial<Announcement>): Promise<Announcement> => {
    const response = await api.put(`/announcements/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/announcements/${id}`);
  },
};
