import styled from "styled-components";

export const HomeStyle = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  padding: 70px 40px;
  background: #fff7ee; /* orangeish background */

  /* LEFT TEXT */
  .hero-left {
    max-width: 600px;
    z-index: 2; /* keep text above image */
    position: relative;
  }

  .hero-left h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.2;
  }

  .hero-left h1 span {
    color: #f89a2b;
  }

  .hero-left p {
    margin-top: 15px;
    color: #666;
    font-size: 17px;
  }

  .buttons {
    margin-top: 30px;
    display: flex;
    gap: 15px;
  }

  .shop {
    background: #000;
    color: #fff;
    padding: 12px 26px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }

  .arrival {
    background: white;
    border: 1px solid #aaa;
    padding: 12px 26px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }

  /* RIGHT HERO IMAGE */
  .hero-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%; /* adjust as needed */
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    overflow: hidden;
  }

  .hero-right img {
    width: 100%;
    max-width: 600px; /* limit max size */
    height: auto;
    object-fit: cover;

    /* curved left edge to blend with orange background */
    border-top-left-radius: 300px;
    border-bottom-left-radius: 300px;

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .hero-right {
      width: 40%;
    }
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
    .hero-left {
      max-width: 100%;
    }

    .hero-right {
      position: relative;
      width: 100%;
      margin-top: 30px;
      justify-content: center;
      border-radius: 30px;
      overflow: hidden;
    }

    .hero-right img {
      border-radius: 30px;
      max-width: 100%;
    }
  }
`;
