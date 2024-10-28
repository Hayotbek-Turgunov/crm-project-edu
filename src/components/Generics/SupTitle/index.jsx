/* eslint-disable react/prop-types */
import { Container, Counter } from "./style";

export const SupTitle = (props) => {
  return (
    <Container {...props}>
      {props?.children} {props?.count && <Counter>{props.count}</Counter>}
    </Container>
  );
};

export default SupTitle;
