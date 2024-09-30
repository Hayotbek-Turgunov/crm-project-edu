import { Container } from "./style";
import { useLocation } from "react-router-dom";

export const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname} page</h1>
      <h1>Comming soon..</h1>
    </Container>
  );
};

export default Generics;
