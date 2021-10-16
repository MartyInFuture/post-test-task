import { ButtonStyled } from './ButtonStyled';

const Button: React.FC<ButtonProps> = ({
  onHandleClick,
  text,
  icon,
  buttonColor,
  type = 'button',
}) => {
  return (
    <ButtonStyled>
      <button
        onClick={() => onHandleClick()}
        className={`button ${buttonColor}`}
        type={type}
      >
        {text}
        {icon}
      </button>
    </ButtonStyled>
  );
};

export default Button;

interface ButtonProps {
  onHandleClick: () => void;
  text: string;
  icon: JSX.Element | null;
  buttonColor: string;
  type?: 'button' | 'submit' | 'reset';
}
