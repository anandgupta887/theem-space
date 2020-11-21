import "../Styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  const [open, setOpen] = useState(false);
  const List = styled.ul`
    @media (max-width: 768px) {
      display: ${!open && "none"};
    } ;
  `;

  return (
    <div className="header">
      <div className="logo">
        <a href="/">Theem Space</a>
      </div>
      <div className="header__search">
        <input className="header__searchInput" />
        <IconButton>
          <SearchIcon className="header__searchIcon" />
        </IconButton>
      </div>
      <div className="header__responsive">
        <IconButton className="header__button">
          {open ? (
            <CloseIcon
              onClick={() => setOpen(!open)}
              className="header__burger"
            />
          ) : (
            <MenuIcon
              onClick={() => setOpen(!open)}
              className="header__burger"
            />
          )}
        </IconButton>
      </div>
      <List>
        <ul className="header__right">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <Button>Login</Button>
      </List>
    </div>
  );
}

export default Header;
