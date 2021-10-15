import { createSlice } from '@reduxjs/toolkit';
import postsOperations from './posts-operations';
import { IPostItem } from './posts-interfaces';

interface postsState {
  items: IPostItem[];
  isLoading: boolean;
  error: null | string;
}

const initialState = {
  items: [],
  isLoading: false,
  error: null,
} as postsState;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      postsOperations.getPosts.fulfilled,
      (state, { payload }) => {
        state.items = [...payload];
      }
    );
    builder.addCase(
      postsOperations.getSinglePost.fulfilled,
      (state, { payload }) => {
        state.items = [payload];
      }
    );
    builder.addCase(postsOperations.addPost.fulfilled, (state, { payload }) => {
      state.items.push(payload);
    });
    builder.addCase(
      postsOperations.deletePost.fulfilled,
      (state, { payload }) => {
        state.items = [
          ...state.items.filter((item) => {
            return item.id !== payload;
          }),
        ];
      }
    );
    builder.addCase(
      postsOperations.updatePost.fulfilled,
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
