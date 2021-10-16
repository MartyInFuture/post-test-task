import { useState } from 'react';
import { postsOperations } from '../../../redux/posts';
import { useDispatch } from 'react-redux';
import { IPostItem } from '../../../redux/posts/posts-interfaces';
import PostForm from '../postForm/PostForm';

const EditPost: React.FC<EditPostFormProps> = ({ post, setIsOpenModal }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const dispatch = useDispatch();
  const editPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editPostData = {
      title,
      body,
      id: post.id,
    };

    dispatch(postsOperations.updatePost(editPostData));
    setTitle('');
    setBody('');
    setIsOpenModal(false);
  };
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  return (
    <PostForm
      title={title}
      body={body}
      onTitleChange={onTitleChange}
      onBodyChange={onBodyChange}
      onHandleSubmit={editPost}
      setIsOpenModal={setIsOpenModal}
    />
  );
};

export default EditPost;

interface EditPostFormProps {
  post: IPostItem;
  setIsOpenModal: (active: boolean) => void;
}
