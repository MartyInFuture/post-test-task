import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
  .modal {
    border-radius: 4px;
    width: 320px;
    height: 50vh;
    position: relative;
    top: 40%;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    z-index: 999;
    @media screen and (min-width: 768px) {
      width: 500px;
      height: 300px;
    }
  }
  .nameForm {
    padding-top: 20px;
    text-align: center;
    font-size: 26px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }
  .closeBtn {
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
