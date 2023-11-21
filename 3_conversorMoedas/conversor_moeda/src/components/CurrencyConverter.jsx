import "./CurrencyConverter.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CurrencyConverter = () => {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/33332548d2112393d3992002/latest/USD"
      )
      .then((response) => {
        setRates(response.data.conversion_rates);
      })
      .catch((error) => {
        console.log("Erro ao obter dados da API", error);
      });
  }, []);

  useEffect(() => {
    if (rates) {
      const rateFrom = rates[fromCurrency] || 0;
      const rateTo = rates[toCurrency] || 0;
      setConvertedAmount(calculate(rateFrom, rateTo, amount));
    }
  }, [amount, rates, fromCurrency, toCurrency]);

  useEffect(
    () => {
      localStorage.setItem(
        "conversions",
        JSON.stringify({
          fromCurrency,
          toCurrency,
          amount,
        })
      );
    },
    [amount],
    [fromCurrency],
    [convertedAmount]
  );

  const calculate = (rateFrom, rateTo, amount) => {
    return ((amount / rateFrom) * rateTo).toFixed(2);
  };

  if (!rates) {
    return <h1> Carregando ...</h1>;
  }

  return (
    <div className="converter">
      <h2>Conversor de Moedas</h2>
      <input
        type="number"
        placeholder="Digite o valor..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <span>Selecione as moedas</span>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {rates &&
          Object.keys(rates).map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
      </select>
      <span>para</span>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {rates &&
          Object.keys(rates).map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
      </select>
      <h3>
        {convertedAmount} {toCurrency}
      </h3>
      <p>
        {amount} {fromCurrency} valem {convertedAmount} {toCurrency}
      </p>
      <div className="resumeReal">
        <Card
          fromCurrency="BRL"
          toCurrency="USD"
          convertedAmount={calculate(rates["BRL"], rates["USD"], 1)}
        />
        <Card
          fromCurrency="BRL"
          toCurrency="EUR"
          convertedAmount={calculate(rates["BRL"], rates["EUR"], 1)}
        />
        <Card
          fromCurrency="BRL"
          toCurrency="MXN"
          convertedAmount={calculate(rates["BRL"], rates["MXN"], 1)}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
