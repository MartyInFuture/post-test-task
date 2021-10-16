import { PostFormStyled } from './PostFormStyled';
import Button from '../../common/button/Button';
import { Add, Close } from '@material-ui/icons';

const PostForm: React.FC<PostFormProps> = ({
  title,
  onTitleChange,
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
      document.querySelector('#post-form')?.dispatchEvent(event);
    }
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <PostFormStyled id="post-form" onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={title}
        className="edit-post-form-input"
        onChange={onTitleChange}
        required
      />
      <textarea
        value={body}
        className="edit-post-form-input"
        onChange={onBodyChange}
        onKeyDown={onEnterPress}
        required
      />
      <div className="post-button-wrapper">
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
    </PostFormStyled>
  );
};

export default PostForm;

interface PostFormProps {
  title: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  body: string;
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setIsOpenModal: (active: boolean) => void;
}
