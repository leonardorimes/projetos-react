import { useState, useEffect } from "react";
import TimeZoneClock from "./components/TimeZoneClock";

const fusosHorarios = [
  "UTC",
  "GMT",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Tokyo",
];

function App() {
  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusosHorariosSelecionados, setFusosHorariosSelecionados] = useState([
    fusoHorarioLocal,
  ]);

  const adicionarFusoHorario = (e) => {
    const novoFuso = e.target.value;
    if (!fusosHorariosSelecionados.includes(novoFuso)) {
      setFusosHorariosSelecionados([...fusosHorariosSelecionados, novoFuso]);
    }
  };

  return (
    <div>
      <h1> Relogio mundial</h1>
      <select onChange={(e) => adicionarFusoHorario(e)}>
        <option value="" disabled selected>
          Selecione um fuso horário
        </option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>
            {fuso}
          </option>
        ))}
      </select>
      <div>
        {fusosHorariosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso} />
        ))}
      </div>
    </div>
  );
}

export default App;
