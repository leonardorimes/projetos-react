import { TextField, Button, Container } from "@mui/material";

const TaxForm = () => {
  return (
    <Container>
      <form>
        <TextField
          fullWidth
          label="Nome"
          name="name"
          style={{ marginBottom: "16px" }}
        />
        <TextField
          fullWidth
          label="Idade"
          name="age"
          type="number"
          style={{ marginBottom: "16px" }}
        />
        <TextField
          fullWidth
          label="Renda"
          name="income"
          type="number"
          style={{ marginBottom: "16px" }}
        />

        <Button type="submit" variant="contained" color="primary">
          Calcular
        </Button>
      </form>
    </Container>
  );
};

export default TaxForm;
