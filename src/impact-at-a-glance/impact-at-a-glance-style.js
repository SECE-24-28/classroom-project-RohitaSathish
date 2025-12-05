// impact-at-a-glance-style.js
import styled from "styled-components";

export const GlanceContainer = styled.div`
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h1`
font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;

  span {
    color: #ff3b55;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  max-width: 1250px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoBox = styled.div`
  background: ${(props) => props.bg || "#fff"};
  border-radius: 20px;
  padding: 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 75px;
  }

  @media (max-width: 768px) {
    img {
      width: 50px;
    }
  }
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #333;
`;

export const Number = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
