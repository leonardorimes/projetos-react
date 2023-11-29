import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <h1> Relogio mundial</h1>
      <select>
        <option value="" disabled selected>
          Selecione um fuso horário
        </option>
      </select>
      <div></div>
    </div>
  );
}

export default App;
