import { useEffect, useState } from "react";
import Square from "./Square";

const Board = () => {
  const [isNext, setIsNext] = useState(true);
  const winner = false;

  return (
    <div>
      <div className="status">
        Status:{" "}
        {winner ? (
          <p className="winner">O vencedor é: {winner} !</p>
        ) : (
          `Próximo a jogar: ${isNext ? "X" : "O"}`
        )}
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <button className="reset-button">Reiniciar Jogo</button>
    </div>
  );
};

export default Board;
