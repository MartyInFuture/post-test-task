import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICommentItem } from './comments-interfaces';

const getComments = createAsyncThunk('comments/getComments', async () => {
  const { data }: AxiosResponse<ICommentItem[]> = await axios.get('/comments');
  return data;
});

interface ICommentData {
  postId: number;
  body: string;
}

const addComment = createAsyncThunk(
  'comments/addComments',
  async (commentData: ICommentData) => {
    const { data }: AxiosResponse<ICommentItem> = await axios.post(
      '/comments',
      commentData
    );
    return data;
  }
);

const deleteComment = createAsyncThunk(
  'comments/deleteComments',
  async (id: number) => {
    try {
      await axios.delete(`/comments/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);

const updateComment = createAsyncThunk(
  'comments/updateComments',
  async (commentData: ICommentItem) => {
    const { data }: AxiosResponse<ICommentItem> = await axios.put(
      `/comments/${commentData.id}`,
      {
        title: commentData.postId,
        body: commentData.body,
      }
    );
    return data;
  }
);

const commentsOperations = {
  getComments,
  addComment,
  deleteComment,
  updateComment,
};
export default commentsOperations;
