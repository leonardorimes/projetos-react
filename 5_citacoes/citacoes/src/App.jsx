import Citacao from "./components/Citacao";
import citacoes from "./data";

import { useState } from "react";

function App() {
  const [indice, setindice] = useState(0);

  const proximaCitacao = () => {
    setindice((indiceAtual) => (indiceAtual + 1) % citacoes.length);
  };

  return (
    <div className="container mt-5">
      <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor} />
      <button className="btn btn-success mt-2" onClick={proximaCitacao}>
        Próxima citação
      </button>
    </div>
  );
}

export default App;
