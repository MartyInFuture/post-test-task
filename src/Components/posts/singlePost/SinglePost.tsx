import { IPostItem } from '../../../redux/posts/posts-interfaces';
import { SinglePostStyled } from './SinglePostStyled';

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  return (
    <SinglePostStyled>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </SinglePostStyled>
  );
};

export default SinglePost;

interface SinglePostProps {
  post: IPostItem;
}
