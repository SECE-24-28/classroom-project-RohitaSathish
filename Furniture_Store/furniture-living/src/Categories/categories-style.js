// import styled from "styled-components";

// export const CategoriesStyle = styled.div`
//   padding: 60px 40px;
//   text-align: left;

//   h2 {
//     font-size: 28px;
//     font-weight: 700;
//     margin-bottom: 8px;
//   }

//   p {
//     font-size: 16px;
//     color: #666;
//     margin-bottom: 40px;
//   }

//   .cards {
//     display: flex;
//     gap: 20px;
//     flex-wrap: wrap;
//   }

//   .card {
//     position: relative;
//     flex: 1 1 calc(33% - 20px);
//     border-radius: 16px;
//     overflow: hidden;
//     cursor: pointer;
//     min-width: 250px;
//     max-width: 350px;
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   }

//   .card img {
//     width: 100%;
//     height: 220px;
//     object-fit: cover;
//     display: block;
//   }

//   .overlay {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     padding: 12px 16px;
//     background: rgba(255, 255, 255, 0.8);
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-weight: 600;
//     font-size: 16px;
//     transition: background 0.3s;
//   }

//   .overlay span {
//     font-size: 20px;
//     font-weight: 700;
//   }

//   .card:hover .overlay {
//     background: rgba(255, 255, 255, 1);
//   }

//   @media (max-width: 1024px) {
//     .cards {
//       justify-content: center;
//     }
//   }

//   @media (max-width: 768px) {
//     .card {
//       flex: 1 1 100%;
//       max-width: 100%;
//     }
//   }
// `;

import styled from "styled-components";

export const CategoriesStyle = styled.div`
  padding: 60px 40px;
  text-align: left;

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
  }

  .cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
   justify-content: center;
  }

  .card {
  
    position: relative;
    flex: 1 1 calc(33% - 20px);
    border-radius: 16px;
    overflow: hidden;
    // cursor: pointer;
    min-width: 250px;
    max-width: 350px;
    
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }

  /* PILLS OVERLAY */
  .overlay {
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: flex;
    // align-items: center;
    justify-content: space-between;
    width: 309px;              /* custom width */
    height: 48px;              /* custom height */
    padding: 6px 6px 6px 16px; /* top right bottom left */
    gap: 10px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 100px;      /* pill shape */
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .overlay span {
    font-size: 20px;
    font-weight: 700;
  }

  .card:hover .overlay {
    background: rgba(255, 255, 255, 1);
  }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .cards {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .card {
      flex: 1 1 100%;
      max-width: 100%;
    }
    .overlay {
      width: 100%;
      max-width: 100%;
    }
  }
`;
