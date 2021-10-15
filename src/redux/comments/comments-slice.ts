import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import commentsOperations from './comments-operations';
import { ICommentItem } from './comments-interfaces';

interface IPostsState {
  items: ICommentItem[];
  isLoading: boolean;
  error: null | string;
}

const initialState = {
  items: [],
  isLoading: false,
  error: null,
} as IPostsState;

const postsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      commentsOperations.getComments.fulfilled,
      (state, { payload }) => {
        state.items = [...payload];
      }
    );
    builder.addCase(
      commentsOperations.addComment.fulfilled,
      (state, { payload }) => {
        state.items.push(payload);
      }
    );
    builder.addCase(
      commentsOperations.deleteComment.fulfilled,
      (state, { payload }) => {
        state.items = [
          ...state.items.filter((item) => {
            return item.id !== payload;
          }),
        ];
      }
    );
    builder.addCase(
      commentsOperations.updateComment.fulfilled,
      (state, { payload }) => {
        state.items = state.items.map((project) => {
          if (payload.id === project.id) {
            project = payload;
          }
          return project;
        });
      }
    );
  },
});

export default postsSlice.reducer;
