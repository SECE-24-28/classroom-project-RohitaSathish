// import styled from "styled-components";

// export const NavbarStyle = styled.div`
//   width: 100%;
//   background: white;

//   /* =============== NAVBAR =============== */
//   .navbar {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 15px 40px;
//     border-bottom: 1px solid #e6e6e6;
//   }

//   .left {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//   }

//   .left img {
//     width: 32px;
//   }

//   .center {
//     display: flex;
//     gap: 40px;
//   }

//   .center h4 {
//     font-weight: 500;
//     cursor: pointer;
//   }

//   .right {
//     display: flex;
//     align-items: center;
//     gap: 25px;
//   }

//   .signin {
//     font-weight: 600;
//     cursor: pointer;
//   }

//   .register {
//     background: #333;
//     color: #fff;
//     border: none;
//     padding: 8px 18px;
//     border-radius: 8px;
//     font-weight: 600;
//     cursor: pointer;
//   }

//   /* =============== HERO SECTION =============== */
//   .hero {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 70px 40px;
//     background: linear-gradient(to right, #fff7ee 0%, white 40%);
//   }

//   /* LEFT TEXT */
//   .hero-left {
//     width: 50%;
//   }

//   .hero-left h1 {
//     font-size: 48px;
//     font-weight: 800;
//     line-height: 1.2;
//   }

//   .hero-left h1 span {
//     color: #f89a2b;
//   }

//   .hero-left p {
//     margin-top: 15px;
//     color: #666;
//     font-size: 17px;
//   }

//   .buttons {
//     margin-top: 30px;
//     display: flex;
//     gap: 15px;
//   }

//   .shop {
//     background: #000;
//     color: #fff;
//     padding: 12px 26px;
//     border: none;
//     border-radius: 8px;
//     font-size: 16px;
//     cursor: pointer;
//   }

//   .arrival {
//     background: white;
//     border: 1px solid #aaa;
//     padding: 12px 26px;
//     border-radius: 8px;
//     font-size: 16px;
//     cursor: pointer;
//   }

//   /* RIGHT CIRCULAR IMAGE */
//   .hero-right {
//     width: 50%;
//     display: flex;
//     justify-content: center;
//   }

//   .hero-right img {
//     width: 90%;
//     height: auto;
//     border-radius: 0;
//     clip-path: circle(70% at 70% 50%);
//   }
// `;

import styled from "styled-components";

export const NavbarStyle = styled.div`
  width: 100%;
  background: white;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    border-bottom: 1px solid #e6e6e6;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .left img {
    width: 32px;
  }

  .center {
    display: flex;
    gap: 40px;
  }

  .center h4 {
    font-weight: 500;
    cursor: pointer;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .signin {
    font-weight: 600;
    cursor: pointer;
  }

  .register {
    background: #333;
    color: white;
    border: none;
    padding: 8px 18px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }
`;
