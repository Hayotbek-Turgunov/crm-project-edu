import Input from "../Generics/Input";
import DateTime from "./DataTimePicker";
import GenericSelect from "./Select";
import { Container, SearchIcon, Section } from "./style";
import Time from "./Time";

export const Navbar = () => {
  return (
    <Container>
      <Input
        width={500}
        height={40}
        borderRadius={8}
        iconLeft={<SearchIcon />}
      />
      <Section>
        <Time />
        <DateTime />
        <GenericSelect />
      </Section>
    </Container>
  );
};

export default Navbar;
