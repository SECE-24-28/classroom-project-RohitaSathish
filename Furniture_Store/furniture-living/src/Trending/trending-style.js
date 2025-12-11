import styled from "styled-components";

export const TrendingWrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
`;

export const TitleBox = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 28px;
    font-weight: 700;
  }

  p {
    color: #777;
    font-size: 15px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  min-width: 420px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .content {
    padding: 15px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  p {
    color: #777;
    margin-bottom: 10px;
  }

  .shop-btn {
    background: #2f2f2f;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  strong {
    font-size: 18px;
  }

  .old {
    text-decoration: line-through;
    color: #999;
  }
`;

export const OffTag = styled.span`
  background: #d4f3d0;
  padding: 3px 8px;
  border-radius: 8px;
  color: #009d32;
  font-size: 12px;
  font-weight: 600;
`;

export const ArrowBtn = styled.button`
  position: absolute;
  top: 40%;
  ${(props) => (props.left ? "left: -10px;" : "right: -10px;")}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: white;
  box-shadow: 0 0 6px rgba(0,0,0,0.2);
  cursor: pointer;
  font-size: 20px;
`;
