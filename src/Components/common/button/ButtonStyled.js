import styled from 'styled-components';

export const ButtonStyled = styled.div`
  .button {
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    cursor: pointer;

    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
      transform: scale(1.05);
    }
  }
  .delete-decline {
    background-color: #f84147;
  }
  .edit-warning {
    background-color: #f2e312;
  }

  .add-access {
    background-color: #00bc52;
  }
`;
