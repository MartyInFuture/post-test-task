import RootState from '../store';

const getComments = (state: RootState) => state.comments.items;

const commentsSelectors = {
  getComments,
};
export default commentsSelectors;
