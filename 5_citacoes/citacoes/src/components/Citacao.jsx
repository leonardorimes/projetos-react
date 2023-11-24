import { useState, useEffect } from "react";

const Citacao = ({ texto, autor }) => {
  const [traducao, setTraducao] = useState("");
  const [idiomasSuportados, setIdiomasSuportados] = useState("");

  async function listaIdiomas() {
    try {
      const res = await fetch("https://libretranslate.de/languages");
      const lista = await res.json();
      setIdiomasSuportados(lista[0].targets);
      console.log(idiomasSuportados);
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  async function traduzirCitacao(idioma) {
    try {
      const resposta = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: texto,
          source: "pt",
          target: idioma,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await resposta.json();
      console.log(data);

      setTraducao(data.translatedText);
    } catch (error) {
      console.log("Error ao traduzir");
    }
  }

  useEffect(() => {
    listaIdiomas();
  }, []);

  useEffect(() => {
    setTraducao("");
  }, [texto]);

  const handleChange = (event) => {
    traduzirCitacao(event.target.value);
  };

  return (
    <div>
      <blockquote className="blockquote">
        <p>{traducao ? traducao : texto}</p>
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>
      <button
        className="btn btn-primary mr-1"
        onClick={() => traduzirCitacao("en")}
      >
        Traduzir para o Ingles
      </button>
      <button
        className="btn btn-secondary m-1"
        onClick={() => traduzirCitacao("es")}
      >
        Traduzir para o Espanhol
      </button>

      <select name="idiomas" id="" onChange={handleChange}>
        {idiomasSuportados &&
          idiomasSuportados.map((idioma) => (
            <option key={idioma} value={idioma}>
              {idioma}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Citacao;
