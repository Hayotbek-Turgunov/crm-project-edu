import SupTitle from "../Generics/SupTitle";
import Title from "../Generics/Title";
import { Card, Wrapper, Container } from "./style";

export const Analitika = () => {
  return (
    <Container>
      <Title mb={16}>Analitika</Title>

      <Wrapper gap={24}>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
      </Wrapper>
      <SupTitle mt={24} mb={16}>
        Ijtimoiy Tarmoqlar
      </SupTitle>
      <Wrapper>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
      </Wrapper>
    </Container>
  );
};

export default Analitika;
