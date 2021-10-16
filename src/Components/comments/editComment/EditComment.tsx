import { ICommentItem } from '../../../redux/comments/comments-interfaces';
import CommentForm from '../commentForm/CommentForm';
import { useDispatch } from 'react-redux';
import { commentsOperations } from '../../../redux/comments';
import { useState } from 'react';

const EditComment: React.FC<EditCommentProps> = ({
  comment,
  setIsOpenModal,
}) => {
  const [body, setBody] = useState(comment.body);

  const editComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editCommentData = {
      body,
      postId: comment.postId,
      id: comment.id,
    };

    dispatch(commentsOperations.updateComment(editCommentData));
    setBody('');
    setIsOpenModal(false);
  };

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const dispatch = useDispatch();
  return (
    <CommentForm
      onHandleSubmit={editComment}
      body={body}
      onBodyChange={onBodyChange}
      setIsOpenModal={setIsOpenModal}
    />
  );
};

export default EditComment;

interface EditCommentProps {
  comment: ICommentItem;
  setIsOpenModal: (active: boolean) => void;
}
