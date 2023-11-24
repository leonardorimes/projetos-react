import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ClimaContainer = styled.div`
  background: linear-gradient(to bottom, #89cff0, #005c99);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 80px;
`;

export const PrincipaisCidades = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
