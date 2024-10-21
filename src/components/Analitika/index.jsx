import { privateData } from "../../utils/analitics";
import SupTitle from "../Generics/SupTitle";
import Title from "../Generics/Title";
import {
  Card,
  Wrapper,
  Container,
  Section,
  Plus,
  Counter,
  Arrow,
} from "./style";

export const Analitika = () => {
  return (
    <Container>
      <Title mb={16}>Analitika</Title>

      <Wrapper gap={24}>
        {privateData.map((value) => {
          const { icon: Icon } = value;
          const { img: Img } = value;
          return (
            <Card key={value.id} gap={24} title={value.title}>
              {/* top */}
              <Section title={value.title}>
                <Title>
                  <Icon className="icon" /> {value.title}
                </Title>
                <Plus title={value.title} />
              </Section>
              {/* bottom */}
              <Section title={value.title}>
                <Title>
                  <Arrow /> <Counter>{value.count}</Counter>
                </Title>
                <Img title={value.title} />
              </Section>
            </Card>
          );
        })}
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
