import styled from 'styled-components';

export const PostsListItemStyled = styled.li`
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 10px;

  .post-header {
    margin-bottom: 5px;
  }
  .post-body {
    margin-bottom: 5px;
  }

  .post-actions {
    display: flex;
    justify-content: space-between;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
