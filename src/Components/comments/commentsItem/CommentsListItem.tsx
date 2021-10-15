import { ICommentItem } from '../../../redux/comments/comments-interfaces';
import { CommentsListItemStyled } from './CommentsListItemStyled';
import Button from '../../common/button/Button';
import { Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { commentsOperations } from '../../../redux/comments';

const CommentsListItem: React.FC<CommentsListItemProps> = ({ comment }) => {
  const dispatch = useDispatch();

  const deleteComment = () => {
    dispatch(commentsOperations.deleteComment(comment.id));
  };

  return (
    <CommentsListItemStyled>
      <p className="comment-item-text">{comment.body}</p>
      <div className="button-wrapper">
        <Button
          onHandleClick={deleteComment}
          text="Delete"
          icon={<Delete />}
          buttonColor="delete-decline"
        />
      </div>
    </CommentsListItemStyled>
  );
};

export default CommentsListItem;

interface CommentsListItemProps {
  comment: ICommentItem;
}
