import { IPostItem } from '../../redux/posts/posts-interfaces';
import PostsListItem from './postsItem/PostsListItem';
import { PostsListStyled } from './PostsListStyled';

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <PostsListStyled>
      {posts.map((item) => (
        <PostsListItem key={item.id} post={item} />
      ))}
    </PostsListStyled>
  );
};

export default PostsList;

interface PostsListProps {
  posts: IPostItem[];
}
