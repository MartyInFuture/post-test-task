import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/posts-slice';
import commentReducer from './comments/comments-slice';

type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
  },
});

export default RootState;

export type AppDispatch = typeof store.dispatch;
