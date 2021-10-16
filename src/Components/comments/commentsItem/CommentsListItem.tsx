import { ICommentItem } from '../../../redux/comments/comments-interfaces';
import { CommentsListItemStyled } from './CommentsListItemStyled';
import Button from '../../common/button/Button';
import { Delete, Edit } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { commentsOperations } from '../../../redux/comments';
import Modal from '../../common/modal/Modal';
import EditComment from '../editComment/EditComment';
import { useState } from 'react';

const CommentsListItem: React.FC<CommentsListItemProps> = ({ comment }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const deleteComment = () => {
    dispatch(commentsOperations.deleteComment(comment.id));
  };

  const editComment = () => {
    setIsOpenModal(true);
  };

  return (
    <CommentsListItemStyled>
      <p className="comment-item-text">{comment.body}</p>
      <div className="button-wrapper">
        <Button
          onHandleClick={editComment}
          text="Edit"
          icon={<Edit />}
          buttonColor="edit-warning"
        />
        <Button
          onHandleClick={deleteComment}
          text="Delete"
          icon={<Delete />}
          buttonColor="delete-decline"
        />
      </div>
      <Modal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        modalTitle="Edit Comment"
      >
        <EditComment comment={comment} setIsOpenModal={setIsOpenModal} />
      </Modal>
    </CommentsListItemStyled>
  );
};

export default CommentsListItem;

interface CommentsListItemProps {
  comment: ICommentItem;
}
