import RootState from '../store';

const getPosts = (state: RootState) => state.posts.items;

const postsSelectors = {
  getPosts,
};
export default postsSelectors;
