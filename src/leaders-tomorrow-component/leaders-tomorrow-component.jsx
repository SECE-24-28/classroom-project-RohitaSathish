import React from "react";
import {
  CapsuleContainer,
  CapsuleText,
  CapsuleSubText,
} from "./leaders-tomorrow-style";

const CapsuleBanner = () => {
  return (
    <CapsuleContainer>
      <CapsuleText>Learners Today, Leaders Tomorrow</CapsuleText>
      <CapsuleSubText>
        With our continuous research and development, we provide you with an excellent Aptitude training.
      </CapsuleSubText>
    </CapsuleContainer>
  );
};

export default CapsuleBanner;

/*import React from "react";
import { LeadersTomorrowStyle } from "./leaders-tomorrow-style";
const LeadersTomorrowComponent = () => {
  return (
    <LeadersTomorrowStyle>
      <div className="capsule">
        <h1 className="heading">Learners Today, Leaders Tomorrow</h1>
        <p className="sub__heading">
          With our continuous research and development, we provide you with an
          excellent Aptitude training.
        </p>
      </div>
    </LeadersTomorrowStyle>
  );
};
export default LeadersTomorrowComponent;
*/