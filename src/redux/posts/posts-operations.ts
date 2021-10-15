import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPostItem } from './posts-interfaces';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com/';

const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const { data }: AxiosResponse<IPostItem[]> = await axios.get('/posts');
  return data;
});

const getSinglePost = createAsyncThunk(
  'posts/getSinglePost',
  async (id: number) => {
    const { data }: AxiosResponse<IPostItem> = await axios.get(`/posts/${id}`);
    return data;
  }
);

interface IPostData {
  title: string;
  body: string;
}

const addPost = createAsyncThunk(
  'posts/addPosts',
  async (postData: IPostData) => {
    const { data }: AxiosResponse<IPostItem> = await axios.post(
      '/posts',
      postData
    );
    return data;
  }
);

const deletePost = createAsyncThunk('posts/deletePosts', async (id: number) => {
  try {
    await axios.delete(`/posts/${id}`);
    return id;
  } catch (error) {
    return error;
  }
});

const updatePost = createAsyncThunk(
  'posts/updatePosts',
  async (postData: IPostItem) => {
    const { data }: AxiosResponse<IPostItem> = await axios.put(
      `/posts/${postData.id}`,
      postData
    );
    return data;
  }
);

const postsOperations = {
  getPosts,
  addPost,
  deletePost,
  updatePost,
  getSinglePost,
};
export default postsOperations;
