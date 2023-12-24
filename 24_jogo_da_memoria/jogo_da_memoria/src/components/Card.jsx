const Card = ({ card }) => {
  return (
    <div key={card.id} className={`card ${card.isFlipped ? "flipped" : ""}`}>
      {card.value}
    </div>
  );
};

export default Card;
