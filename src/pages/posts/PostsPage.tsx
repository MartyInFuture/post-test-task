import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { postsOperations, postsSelectors } from '../../redux/posts';
import PostsList from '../../Components/posts/PostsList';
import { PostPageStyled } from './PostPageStyled';
import { Add } from '@material-ui/icons';
import Button from '../../Components/common/button/Button';
import PostForm from '../../Components/posts/postForm/PostForm';
import Modal from '../../Components/common/modal/Modal';

const PostsPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const posts = useSelector(postsSelectors.getPosts);
  const dispatch = useDispatch();
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };
  const openModal = () => {
    setIsOpenModal(true);
  };
  const addPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editPostData = {
      title,
      body,
    };

    dispatch(postsOperations.addPost(editPostData));
    setTitle('');
    setBody('');
    setIsOpenModal(false);
  };
  useEffect(() => {
    dispatch(postsOperations.getPosts());
  }, [dispatch]);
  return (
    <PostPageStyled>
      {posts.length ? <PostsList posts={posts} /> : <p>Posts doesn't exist</p>}
      <div className="button-wrapper">
        <Button
          onHandleClick={openModal}
          text="Add Post"
          icon={<Add />}
          buttonColor="add-access"
        />
      </div>
      <Modal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        modalTitle="Add Post"
      >
        <PostForm
          title={title}
          onTitleChange={onTitleChange}
          body={body}
          onBodyChange={onBodyChange}
          onHandleSubmit={addPost}
        />
      </Modal>
    </PostPageStyled>
  );
};

export default PostsPage;
