import { Botao } from "./ButtonStyles";

const Button = ({ title, ...props }) => {
  return <Botao {...props}>{title}</Botao>;
};

export default Button;
