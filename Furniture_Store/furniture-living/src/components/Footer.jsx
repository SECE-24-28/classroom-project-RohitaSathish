import React from "react";
import {
  FooterContainer,
  FooterTop,
  LogoSection,
  NavLinks,
  FooterBottom,
  CopyRight,
  SocialIcons
} from "./footer-style";

import logo from "../assets/image.png"; // import your logo image
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      {/* Top section with logo + nav links */}
      <FooterTop>
        <LogoSection>
          <img src={logo} alt="Logo" />
          <span>Velora</span>
          <p>Furniture Store</p>
        </LogoSection>

        <NavLinks>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#product">Product</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Us</a>
        </NavLinks>
      </FooterTop>

      {/* Bottom section with copyright and social icons */}
      <FooterBottom>
        <CopyRight>
          <span>© 2025 Velora. All rights reserved.</span>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </CopyRight>

        <SocialIcons>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://youtube.com" target="_blank">
            <FaYoutube />
          </a>
        </SocialIcons>
      </FooterBottom>
    </FooterContainer>
  );
}
