import styled from "styled-components";

export const FeatureWrapper = styled.div`
  width: 100%;
  background: #fef6ee;
  padding: 40px 20px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const FeatureItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px 10px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;

//   &:hover {
//     border: 2px solid #f7d774;
//   }

  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    stroke-width: 1.3;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 70px;
//   border-right: 2px dotted #74a8ff;

  @media (max-width: 768px) {
    display: none;
  }
`;
