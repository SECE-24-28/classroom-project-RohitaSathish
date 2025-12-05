// ImpactAtAGlanceComponent.jsx

import React from "react";
import {
  GlanceContainer,
  Title,
  BoxGrid,
  InfoBox,
  Label,
  Number,
} from "./impact-at-a-glance-style";

const ImpactAtAGlanceComponent = () => {
  return (
    <GlanceContainer>
      <Title>
        Impact at a <span>Glance</span>
      </Title>

      <BoxGrid>
        <InfoBox bg="#ffe0e6">
          <div>
            <Label>Colleges</Label>
            <Number>100+</Number>
          </div>

          {/* 🎓 College Icon */}
          <img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3eb.png"
            alt="college"
          />
        </InfoBox>

        <InfoBox bg="#e4f1ff">
          <div>
            <Label>Students</Label>
            <Number>1,00,000</Number>
          </div>

          {/* 🎒 Students Icon */}
          <img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f392.png"
            alt="students"
          />
        </InfoBox>

        <InfoBox bg="#e3ffe9">
          <div>
            <Label>Study Materials</Label>
            <Number>1000+</Number>
          </div>

          {/* 📚 Books Icon */}
          <img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4da.png"
            alt="books"
          />
        </InfoBox>

        <InfoBox bg="#ffe8cc">
          <div>
            <Label>Professional Trainers</Label>
            <Number>150</Number>
          </div>

          {/* 👨‍🏫 Trainer Icon */}
          <img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f9d1-200d-1f3eb.png"
            alt="trainers"
          />
        </InfoBox>
      </BoxGrid>
    </GlanceContainer>
  );
};

export default ImpactAtAGlanceComponent;
