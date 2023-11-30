import { useEffect, useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNext, setIsNext] = useState(true);
  const winner = false;

  const handleClick = (i) => {
    console.log(i)
  }

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
        <Square value={0} onClick={() => handleClick(0)}/>
        <Square value={0} onClick={() => handleClick(1)}/>
        <Square value={0} onClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={3} onClick={() => handleClick(3)}/>
        <Square value={4} onClick={() => handleClick(4)}/>
        <Square value={5} onClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={6} onClick={() => handleClick(6)}/>
        <Square value={7} onClick={() => handleClick(7)}/>
        <Square value={8} onClick={() => handleClick(8)}/>
      </div>

      <button className="reset-button">Reiniciar Jogo</button>
    </div>
  );
};

export default Board;
