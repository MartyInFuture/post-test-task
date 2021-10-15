import { IPostItem } from '../../../redux/posts/posts-interfaces';
import { SinglePostStyled } from './SinglePostStyled';

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  return (
    <SinglePostStyled>
      <h2 className="single-post-title">{post.title}</h2>
      <p className="single-post-text">{post.body}</p>
    </SinglePostStyled>
  );
};

export default SinglePost;

interface SinglePostProps {
  post: IPostItem;
}
