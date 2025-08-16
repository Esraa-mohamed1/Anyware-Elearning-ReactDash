import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import announcementsReducer from '../features/announcements/announcementsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    announcements: announcementsReducer,
    quizzes: quizzesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
