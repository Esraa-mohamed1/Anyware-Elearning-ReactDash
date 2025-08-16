import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { QuizzesState, Quiz } from '../../types';
import { quizzesService } from '../../services/quizzesService';

const initialState: QuizzesState = {
  quizzes: [],
  loading: false,
  error: null,
};

export const fetchQuizzes = createAsyncThunk(
  'quizzes/fetchAll',
  async (semester?: string) => {
    const response = await quizzesService.getAll(semester);
    return response;
  }
);

export const createQuiz = createAsyncThunk(
  'quizzes/create',
  async (data: Partial<Quiz>) => {
    const response = await quizzesService.create(data);
    return response;
  }
);

export const updateQuiz = createAsyncThunk(
  'quizzes/update',
  async ({ id, data }: { id: string; data: Partial<Quiz> }) => {
    const response = await quizzesService.update(id, data);
    return response;
  }
);

export const deleteQuiz = createAsyncThunk(
  'quizzes/delete',
  async (id: string) => {
    await quizzesService.delete(id);
    return id;
  }
);

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch quizzes
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch quizzes';
      })
      // Create quiz
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.quizzes.unshift(action.payload);
      })
      // Update quiz
      .addCase(updateQuiz.fulfilled, (state, action) => {
        const index = state.quizzes.findIndex(q => q._id === action.payload._id);
        if (index !== -1) {
          state.quizzes[index] = action.payload;
        }
      })
      // Delete quiz
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.quizzes = state.quizzes.filter(q => q._id !== action.payload);
      });
  },
});

export const { clearError } = quizzesSlice.actions;
export default quizzesSlice.reducer;
