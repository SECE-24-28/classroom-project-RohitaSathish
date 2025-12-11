import React from "react";
import { TrackSection, TrackTitle, CardRow, Card } from "./TracksStyle";

const Tracks = () => {
  return (
    <TrackSection>
      <TrackTitle>Our Tracks</TrackTitle>

      <CardRow>
        <Card>
          <img src="/uiux.jpg" />
          <h3>UI/UX Design for Beginners</h3>
          <p>$98</p>
        </Card>

        <Card>
          <img src="/frontend.jpg" />
          <h3>Front-end Developer</h3>
          <p>$128</p>
        </Card>

        <Card>
          <img src="/mern.jpg" />
          <h3>MERN Stack</h3>
          <p>$238</p>
        </Card>
      </CardRow>
    </TrackSection>
  );
};

export default Tracks;
