import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    border-radius: 4px;
    padding: 20px;
    position: relative;
    background-color: #ffffff;
    z-index: 999;
  }
  .nameForm {
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    font-size: 26px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }
  .closeBtn {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;
    &:focus,
    &:hover {
      color: #585858;
    }
  }
`;
