import React from "react";
import { ExcellenceContainer } from "./symbol-of-excellence-style";

const SymbolOfExcellenceComponent = () => {
  return (
    <ExcellenceContainer>
      <h1 className="title">A Symbol of Excellence in Placement Training</h1>

      <p className="description">
        Aptitude Guru Hem was born from the aspiration to create a learning
        environment that inspires greatness. Our founder, driven by personal
        experiences and a desire to make a difference, established the company
        with a mission to empower students with the right skills and mindset
        for success.
      </p>

      <div className="box-wrapper">
        <div className="vision">
          <h2 className="heading vision-heading">| Our Vision</h2>
          <p>
            Our vision is to empower individuals from diverse backgrounds to
            become accomplished professionals. At Aptitude Guru Hem, we
            believe that knowledge has the power to transcend boundaries.
          </p>
        </div>

        <div className="divider"></div>

        <div className="mission">
          <h2 className="heading mission-heading">| Our Mission</h2>
          <p>
            Our mission is to revolutionize education by providing
            comprehensive training in aptitude, coding, and web/mobile
            development. We foster a culture of inclusivity and personal
            growth.
          </p>
        </div>
      </div>
    </ExcellenceContainer>
  );
};

export default SymbolOfExcellenceComponent;
