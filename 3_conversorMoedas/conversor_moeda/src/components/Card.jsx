import "./Card.css";

const Card = ({ fromCurrency, toCurrency, convertedAmount }) => {
  return (
    <div className="card">
      <h3>Resumo Real </h3>
      <p>{toCurrency}</p>

      {convertedAmount}
    </div>
  );
};

export default Card;
