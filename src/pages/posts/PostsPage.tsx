import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { postsOperations, postsSelectors } from '../../redux/posts';
import PostsList from '../../Components/posts/PostsList';
import { PostPageStyled } from './PostPageStyled';

const PostsPage = () => {
  const posts = useSelector(postsSelectors.getPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsOperations.getPosts());
  }, [dispatch]);
  return (
    <PostPageStyled>
      {posts.length ? <PostsList posts={posts} /> : <p>Posts doesn't exist</p>}
    </PostPageStyled>
  );
};

export default PostsPage;
