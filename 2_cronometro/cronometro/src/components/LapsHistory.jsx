import "./LapsHistory.css";

const LapsHistory = ({ date, storageList }) => {
  let itens = storageList();

  return (
    <div className="lapshistory">
      <p> Histórico de Voltas</p>
      <div className="data">
        {itens && itens.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
};

export default LapsHistory;
