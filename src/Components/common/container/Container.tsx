import { ContainterStyled } from './Containter';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainterStyled>{children}</ContainterStyled>;
};

export default Container;

interface ContainerProps {
  children: JSX.Element;
}
