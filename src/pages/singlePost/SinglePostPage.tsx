import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { postsOperations, postsSelectors } from '../../redux/posts';
import { useParams } from 'react-router';
import SinglePost from '../../Components/posts/singlePost/SinglePost';

const SinglePostPage = () => {
  const post = useSelector(postsSelectors.getPosts);
  const dispatch = useDispatch();
  const { id }: any = useParams();

  useEffect(() => {
    dispatch(postsOperations.getSinglePost(id));
  }, [dispatch]);

  return (
    <>
      {post.length ? <SinglePost post={post[0]} /> : <p>Post Doesn't exist</p>}
    </>
  );
};

export default SinglePostPage;
