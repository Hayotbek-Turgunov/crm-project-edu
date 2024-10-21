import styled from "styled-components";
import getValue from "../../hook/getStyleValue";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => getValue(gap, "16px")};
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid red;
`;

export { Container, Wrapper, Card };
