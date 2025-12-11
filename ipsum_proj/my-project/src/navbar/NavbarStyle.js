import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1d2d50;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    font-size: 18px;
    color: #222;
  }
`;

export const NavBtn = styled.button`
  padding: 10px 28px;
  background: #34495e;
  border-radius: 40px;
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;
