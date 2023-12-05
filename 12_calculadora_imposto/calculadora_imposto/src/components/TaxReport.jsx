import { Container, Typography } from "@mui/material";

const TaxReport = ({ taxData }) => {
  return (
    <Container>
      <Typography variant="h5"> Relatório de Impostos</Typography>
      <Typography variant="body1">Nome: {taxData.name}</Typography>
      <Typography variant="body1">Idade: {taxData.age}</Typography>
      <Typography variant="body1">
        Renda:{" "}
        {parseFloat(taxData.income).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      <Typography variant="body1">
        Imposto a pagar:{" "}
        {parseFloat(taxData.tax).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
    </Container>
  );
};

export default TaxReport;
