import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { postsOperations, postsSelectors } from '../../redux/posts';
import { useParams } from 'react-router';
import SinglePost from '../../Components/posts/singlePost/SinglePost';
import CommentsList from '../../Components/comments/CommentsList';
import { SinglePostPageStyled } from './SinglePostPageStyled';
import { commentsOperations } from '../../redux/comments';
import AddComment from '../../Components/comments/addComment/AddComment';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';

const SinglePostPage = () => {
  const post = useSelector(postsSelectors.getPosts);
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const [body, setBody] = useState('');

  useEffect(() => {
    dispatch(postsOperations.getSinglePost(id));
  }, [dispatch, id]);

  const addComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addBodyObj = {
      postId: Number(id),
      body,
    };
    dispatch(commentsOperations.addComment(addBodyObj));
    setBody('');
  };
  const onBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  return (
    <SinglePostPageStyled>
      <Link className="back-arrow" to="/">
        <ArrowBack />
        BACK
      </Link>
      {post.length ? (
        <>
          <SinglePost post={post[0]} />
          <AddComment
            body={body}
            onHandleSubmit={addComment}
            onBodyChange={onBodyChange}
          />
          <CommentsList />
        </>
      ) : (
        <p>Post Doesn't exist</p>
      )}
    </SinglePostPageStyled>
  );
};

export default SinglePostPage;
