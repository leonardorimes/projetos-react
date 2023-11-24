import { BuscaContainer, BuscaCidade } from "./BuscaStyles";
import Button from "./Button";

const Busca = ({ cidade, setCidade, buscarClima }) => {
  return (
    <BuscaContainer>
      <BuscaCidade
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade..."
      />
      <Button title="Buscar" onClick={buscarClima}>
        {" "}
        Buscar{" "}
      </Button>
    </BuscaContainer>
  );
};

export default Busca;
