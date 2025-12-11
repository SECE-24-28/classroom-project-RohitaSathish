import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 42px;
    height: 42px;
  }

  span {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    margin-left: 12px;
    font-size: 14px;
    color: #aaa;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #ffa51f;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333;
  padding-top: 20px;
  flex-wrap: wrap;
`;

export const CopyRight = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;

  a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: #ffa51f;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
      color: #ffa51f;
    }
  }
`;
