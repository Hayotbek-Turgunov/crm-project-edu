/* eslint-disable react/jsx-key */
import { Outlet, useNavigate } from "react-router-dom";
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
} from "./style";
import { Navbar } from "../Navbar";
import { Profile } from "./profile";
import sidebar from "../../utils/sidebar";
import { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState([]);

  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };

  const onLogOut = () => {
    navigate("/");
  };
  const onclickParent = (id) => {
    if (open.includes(id)) {
      let data = open.filter((item) => item !== id);
      setOpen(data);
    } else {
      setOpen([...open, id]);
    }

    console.log(open);
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
            return (
              <>
                <MenuItem
                  key={parent.id}
                  onClick={() => onclickParent(parent.id)}
                >
                  <MenuItem.Title>
                    <Icon className="icon" /> {parent.title}
                  </MenuItem.Title>
                  {parent?.children?.length && <Arrow active={active} />}
                </MenuItem>

                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem key={child?.id}>
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </>
            );
          })}
        </Menu>
        <LogOut onClick={onLogOut}>Chiqish</LogOut>
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
