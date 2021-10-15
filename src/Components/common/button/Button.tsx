import { ButtonStyled } from './ButtonStyled';

const Button: React.FC<ButtonProps> = ({
  onHandleClick,
  text,
  icon,
  buttonColor,
}) => {
  return (
    <ButtonStyled>
      <button
        onClick={() => onHandleClick()}
        className={`button ${buttonColor}`}
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
}
