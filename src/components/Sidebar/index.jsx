/* eslint-disable react/jsx-key */
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Side,
  Body,
  Wrapper,
  Logo,
  LogOut,
  Menu,
  MenuItem,
  Arrow,
  ChildWrapper,
  ExitIcon,
} from "./style";
import { Navbar } from "../Navbar";
import { Profile } from "./profile";
import sidebar from "../../utils/sidebar";
import React, { useEffect, useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = JSON.parse(localStorage.getItem("open"));
    setOpen(path || []);
  }, []);

  useEffect(() => {}, [location]);

  const onClickLogo = () => {
    navigate("/");
  };

  const onLogOut = () => {
    navigate("/");
  };
  const onclickParent = ({ id, path, children }, e) => {
    if (open?.includes(id)) {
      let data = open.filter((item) => item !== id);
      localStorage.setItem("open", JSON.stringify(data));
      setOpen(data);
    } else {
      localStorage.setItem("open", JSON.stringify([...open, id]));
      setOpen([...open, id]);
    }

    if (!children) {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>CRM</Logo>
        <Profile />

        <Menu>
          {sidebar.map((parent) => {
            const { icon: Icon } = parent;
            const active = open.includes(parent.id);
            const activePath = location.pathname?.includes(parent.path);
            return (
              <React.Fragment key={parent.id}>
                <MenuItem
                  onClick={(e) => onclickParent(parent, e)}
                  active={activePath.toString()}
                >
                  <MenuItem.Title active={activePath.toString()}>
                    <Icon className="icon" /> {parent.title}
                  </MenuItem.Title>
                  {parent?.children?.length && (
                    <Arrow active={active.toString()} />
                  )}
                </MenuItem>

                <ChildWrapper active={active.toString()}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem
                        key={child?.id}
                        to={child.path}
                        active={(location.pathname === child.path).toString()}
                      >
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </React.Fragment>
            );
          })}
        </Menu>
        <LogOut onClick={onLogOut}>
          <ExitIcon /> Chiqish
        </LogOut>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};
