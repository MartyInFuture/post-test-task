import styled from 'styled-components';

export const CommentFormStyled = styled.form`
  .edit-comment-form-input {
    border: 1px solid gray;
    border-radius: 4px;
    width: 200px;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
    @media screen and (min-width: 768px) {
      width: 300px;
    }
  }
  .button-wrapper {
    width: 200px;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      width: 300px;
    }
  }
`;
