import styled from "styled-components";
import getValue from "../../../hook/getStyleValue";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--primaryColor);
  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};
  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ pr }) => getValue(pr)};
  padding-left: ${({ pl }) => getValue(pl)};
`;

const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  width: 28px;
  height: 28px;
  padding: 4px 8px 4px 8px;
  border-radius: 16px;
  opacity: 0px;
  color: #ffffff;
  background-color: #1890ff;
  margin-left: 8px;
`;

export { Container, Counter };
