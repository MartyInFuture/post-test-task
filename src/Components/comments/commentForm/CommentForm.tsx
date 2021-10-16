import { CommentFormStyled } from './CommentFormStyled';
import Button from '../../common/button/Button';
import { Add, Close } from '@material-ui/icons';

const CommentForm: React.FC<EditCommentProps> = ({
  body,
  onBodyChange,
  onHandleSubmit,
  setIsOpenModal,
}) => {
  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const event = new Event('submit', {
        bubbles: true,
        cancelable: true,
      });
      document.querySelector('#comment-form')?.dispatchEvent(event);
    }
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <CommentFormStyled id="comment-form" onSubmit={onHandleSubmit}>
      <textarea
        className="edit-comment-form-input"
        value={body}
        onChange={onBodyChange}
        onKeyDown={onEnterPress}
        required
      ></textarea>
      <div className="button-wrapper">
        <Button
          onHandleClick={closeModal}
          text="Decline"
          icon={<Close />}
          buttonColor="delete-decline"
        />
        <Button
          onHandleClick={() => {}}
          text="Add"
          type="submit"
          icon={<Add />}
          buttonColor="add-access"
        />
      </div>
    </CommentFormStyled>
  );
};

export default CommentForm;

interface EditCommentProps {
  body: string;
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setIsOpenModal: (active: boolean) => void;
}
