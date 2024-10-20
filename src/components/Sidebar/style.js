import styled from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react";
import exitIcon from "../../assets/icons/exit.svg?react";
import { NavLink } from "react-router-dom";

const Arrow = styled(arrow)`
  display: flex;
  margin-left: auto;
  transform: ${({ active }) => active === "true" && "rotate(90deg)"};
  transition: all 0.1s;
`;

const Container = styled.div`
  display: flex;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  background-color: white;

  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Body = styled.div`
  flex: 1;
  /* border: 2px solid blue; */
`;

const Wrapper = styled.div`
  border: 2px solid blue;
  margin: 16px;
  background-color: white;
`;

const Logo = styled.div`
  position: sticky;
  top: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: dodgerblue;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(222, 225, 227, 1);
  cursor: pointer;
  z-index: 999;
  background-color: white;
`;

const LogOut = styled(Logo)`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(222, 225, 227, 1);
  border-bottom: 0;
  position: sticky;
  bottom: 0;
  margin-top: auto;
  z-index: 999;
  background-color: white;
`;

//Profile
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px 24px 32px 24px;
`;

ProfileContainer.Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;
ProfileContainer.Name = styled.div`
  width: 168px;
  font-weight: 600;
  size: 14px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primaryColor);
`;
ProfileContainer.Email = styled.div`
  width: 168px;
  font-weight: 500;
  size: 12px;
  line-height: 20px;
  color: var(--secondaryColor);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

//Menu

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 24px; */
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: var(--primaryColor);
  display: flex;
  align-items: center;
  padding-right: 24px;
  &:hover {
    background-color: rgba(248, 250, 252, 1);
    cursor: pointer;
  }

  color: ${({ active }) =>
    active === "true" ? "var(--activeColor)" : "var(--primaryColor)"};
  background-color: ${({ active }) =>
    active === "true" ? "rgba(248, 250, 252, 1)" : "inherit"};
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 24px;

  &:hover {
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }

  & path {
    fill: ${({ active }) => active === "true" && "var(--primaryColor)"};
  }

  .icon {
    margin-right: 16px;
  }
`;

const ChildWrapper = styled.div`
  margin-left: 35px;
  height: ${({ active }) => (active === "true" ? "auto" : "0px")};
  overflow: hidden;
`;

// logout

const ExitIcon = styled(exitIcon)`
  margin-right: 16px;
`;

export {
  Container,
  Side,
  Body,
  Wrapper,
  Logo,
  LogOut,
  ProfileContainer,
  Menu,
  MenuItem,
  Arrow,
  ChildWrapper,
  ExitIcon,
};
