import styled from 'styled-components';

export const PostFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  .edit-post-form-input {
    /* border: none; */
    border: 1px solid gray;
    border-radius: 4px;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;
