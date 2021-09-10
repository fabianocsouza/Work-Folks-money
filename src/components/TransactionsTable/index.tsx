import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>10/09/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>10/09/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>10/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}