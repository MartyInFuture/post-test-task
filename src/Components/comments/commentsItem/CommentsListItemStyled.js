import styled from 'styled-components';

export const CommentsListItemStyled = styled.li`
  border: 1px solid gray;
  padding: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  .comment-item-text {
    margin-bottom: 5px;
  }
  .button-wrapper {
    width: 100px;
    margin-left: auto;
  }
`;
