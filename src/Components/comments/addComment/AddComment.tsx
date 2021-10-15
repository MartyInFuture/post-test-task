import { AddCommentStyled } from './AddCommentStyled';

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
    </AddCommentStyled>
  );
};

export default AddComment;

interface AddCommentProps {
  onBodyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  body: string;
}
