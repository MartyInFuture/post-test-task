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
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;
