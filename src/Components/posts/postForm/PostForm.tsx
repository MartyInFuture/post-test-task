import { PostFormStyled } from './PostFormStyled';

const PostForm: React.FC<PostFormProps> = ({
  title,
  onTitleChange,
  body,
  onBodyChange,
  onHandleSubmit,
}) => {
  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      console.log(e.target);
      const formNode = document.querySelector('#post-form');
      console.log(formNode?.ATTRIBUTE_NODE);
    }
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
}
