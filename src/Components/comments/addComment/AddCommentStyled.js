import styled from 'styled-components';

export const AddCommentStyled = styled.form`
  display: flex;
  flex-direction: column;
  .comment-form-label {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
  }

  .button-wrapper {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`;
