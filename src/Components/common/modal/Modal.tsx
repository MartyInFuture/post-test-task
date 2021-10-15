import React, { MouseEvent, useEffect } from 'react';
import { ModalStyled } from './ModalStyled';
import { Close } from '@material-ui/icons';

type TBody = HTMLBodyElement;

const Modal: React.FC<IModalProps> = ({
  isOpenModal,
  setIsOpenModal,
  children,
  modalTitle = 'Name form',
}) => {
  useEffect(() => {
    window.addEventListener('keydown', () => handleEscape); // Здесь было без функции
    const body: TBody = document.querySelector('body')!;
    if (isOpenModal) body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', () => handleEscape); // Здесь было без функции
      const body = document.querySelector('body')!;
      body.style.overflow = 'auto';
    };
  });

  const handleEscape = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.code === 'Escape' && setIsOpenModal(false);

  const onOverlayClick = ({
    target,
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    target === currentTarget && setIsOpenModal(false);
  };
  return (
    <>
      {isOpenModal && (
        <ModalStyled onClick={onOverlayClick}>
          <div className="modal">
            <button
              type="button"
              className="closeBtn"
              onClick={() => setIsOpenModal(false)}
            >
              <Close />
            </button>
            <h2 className="nameForm">{modalTitle}</h2>
            {children}
          </div>
        </ModalStyled>
      )}
    </>
  );
};

export default Modal;

interface IModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (active: boolean) => void;
  children: JSX.Element;
  modalTitle: string;
}
