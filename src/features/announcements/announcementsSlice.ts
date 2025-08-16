import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AnnouncementsState, Announcement } from '../../types';
import { announcementsService } from '../../services/announcementsService';

const initialState: AnnouncementsState = {
  announcements: [],
  loading: false,
  error: null,
};

export const fetchAnnouncements = createAsyncThunk(
  'announcements/fetchAll',
  async (semester?: string) => {
    const response = await announcementsService.getAll(semester);
    return response;
  }
);

export const createAnnouncement = createAsyncThunk(
  'announcements/create',
  async (data: Partial<Announcement>) => {
    const response = await announcementsService.create(data);
    return response;
  }
);

export const updateAnnouncement = createAsyncThunk(
  'announcements/update',
  async ({ id, data }: { id: string; data: Partial<Announcement> }) => {
    const response = await announcementsService.update(id, data);
    return response;
  }
);

export const deleteAnnouncement = createAsyncThunk(
  'announcements/delete',
  async (id: string) => {
    await announcementsService.delete(id);
    return id;
  }
);

const announcementsSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch announcements
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch announcements';
      })
      // Create announcement
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.announcements.unshift(action.payload);
      })
      // Update announcement
      .addCase(updateAnnouncement.fulfilled, (state, action) => {
        const index = state.announcements.findIndex(a => a._id === action.payload._id);
        if (index !== -1) {
          state.announcements[index] = action.payload;
        }
      })
      // Delete announcement
      .addCase(deleteAnnouncement.fulfilled, (state, action) => {
        state.announcements = state.announcements.filter(a => a._id !== action.payload);
      });
  },
});

export const { clearError } = announcementsSlice.actions;
export default announcementsSlice.reducer;
