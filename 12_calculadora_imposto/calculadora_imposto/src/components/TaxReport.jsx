import { Container, Typography } from "@mui/material";

const TaxReport = () => {
  return (
    <Container>
      <Typography variant="h5"> Relatório de Impostos</Typography>
      <Typography variant="body1">Nome: </Typography>
      <Typography variant="body1">Idade: anos</Typography>
      <Typography variant="body1">Renda: </Typography>
      <Typography variant="body1">Imposto a pagar: </Typography>
    </Container>
  );
};

export default TaxReport;
