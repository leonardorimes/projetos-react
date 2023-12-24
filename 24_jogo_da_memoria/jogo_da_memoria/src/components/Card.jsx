const Card = ({ card, onClick }) => {
  return (
    <div
      key={card.id}
      className={`card ${card.isFlipped ? "flipped" : ""}`}
      onClick={() => onClick(card)}
    >
      {card.isFlipped ? card.value : "?"}
    </div>
  );
};

export default Card;
