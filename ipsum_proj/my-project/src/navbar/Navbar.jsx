import React from "react";
import { NavContainer, Logo, NavLinks, NavBtn } from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>ipsum</Logo>

      <NavLinks>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Our Service</a>
        <a href="#">Contact us</a>
      </NavLinks>

      <NavBtn>Sign in</NavBtn>
    </NavContainer>
  );
};

export default Navbar;
