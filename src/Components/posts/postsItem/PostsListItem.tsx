import { IPostItem } from '../../../redux/posts/posts-interfaces';
import { PostsListItemStyled } from './PostsListItemStyled';
import { Link } from 'react-router-dom';
import { postsOperations } from '../../../redux/posts';
import { useDispatch } from 'react-redux';
import Button from '../../common/button/Button';
import Modal from '../../common/modal/Modal';
import { useState } from 'react';
import { Delete, Edit } from '@material-ui/icons';
import EditPostForm from '../editPost/EditPost';

const PostsListItem: React.FC<PostsListItemProps> = ({ post }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Title');
  const dispatch = useDispatch();
  const deletePost = () => {
    dispatch(postsOperations.deletePost(post.id));
  };
  const editTitle = () => {
    setIsOpenModal(true);
  };
  return (
    <PostsListItemStyled>
      <Link to={`/post/${post.id}`}>
        <h2 className="post-header">{post.title}</h2>
        <p className="post-body">{post.body}</p>
      </Link>
      <div className="post-actions">
        <Button
          onHandleClick={editTitle}
          text="Edit"
          icon={<Edit />}
          buttonColor="edit-warning"
        />
        <Button
          onHandleClick={deletePost}
          text="Delete"
          icon={<Delete />}
          buttonColor="delete-decline"
        />
      </div>
      <Modal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        modalTitle={modalTitle}
      >
        <EditPostForm post={post} />
      </Modal>
    </PostsListItemStyled>
  );
};

export default PostsListItem;

interface PostsListItemProps {
  post: IPostItem;
}
