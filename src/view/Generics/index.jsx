import { Container } from "./style";
import { useLocation } from "react-router-dom";

export const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      {location.pathname}
      <h1>Comming soon..</h1>
    </Container>
  );
};

export default Generics;
