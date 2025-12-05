import styled from "styled-components";

export const ExcellenceContainer = styled.div`
  width: 100%;
  padding: 60px 120px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #4a5568;

  .title {
    font-size: 42px;
    font-weight: 700;
    color: #000;
    margin-bottom: 25px;
  }

  .description {
    font-size: 18px;
    line-height: 1.6;
    width: 70%;
    margin: 0 auto 60px auto;
    color: #555;
  }

  .box-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    margin-top: 30px;
  }

  .vision,
  .mission {
    width: 40%;
    text-align: left;
  }

  .heading {
    font-size: 26px;
    margin-bottom: 15px;
    font-weight: 600;
  }

  .vision-heading {
    color: #f4a742; /* Yellowish Orange */
  }

  .mission-heading {
    color: #16c5e0; /* Light Blue */
  }

  .divider {
    width: 2px;
    background-color: #ccc;
    height: 170px;
  }
`;
