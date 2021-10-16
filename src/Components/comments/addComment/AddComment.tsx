import { AddCommentStyled } from './AddCommentStyled';
import Button from '../../common/button/Button';
import { Add } from '@material-ui/icons';

const AddComment: React.FC<AddCommentProps> = ({
  onHandleSubmit,
  onBodyChange,
  body,
}) => {
  return (
    <AddCommentStyled onSubmit={onHandleSubmit}>
      <label className="comment-form-label" htmlFor="comment-input">
        Add comment
      </label>
      <input
        placeholder="..."
        id="comment-input"
        type="text"
        value={body}
        onChange={onBodyChange}
        required
      />
      <div className="button-wrapper">
        <Button
          onHandleClick={() => {}}
          text="Add"
          type="submit"
          icon={<Add />}
          buttonColor="add-access"
        />
      </div>
    </AddCommentStyled>
  );
};

export default AddComment;

interface AddCommentProps {
  onBodyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  body: string;
}
