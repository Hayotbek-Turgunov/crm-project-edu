import { media, privateData } from "../../utils/analitics";
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
  SubCard,
} from "./style";

export const Analitika = () => {
  return (
    <Container>
      <Title mb={"16px"}>Analitika</Title>
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
        {media.map((value) => {
          const { icon: Icon } = value;

          return (
            <SubCard key={value.id} gap={24} title={value.title}>
              {/* top */}
              <Section title={value.title}>
                <SupTitle>
                  <Icon className="subicon" /> {value.title}
                </SupTitle>
                <Plus title={value.title} />
              </Section>
              {/* bottom */}
              <Section title={value.title}>
                <Title color={"#52C41A"}>
                  <Arrow />
                  22%
                </Title>
                <Counter>{value.count}</Counter>
              </Section>
            </SubCard>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Analitika;
