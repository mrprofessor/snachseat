import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const CustomHeader = () => (
  <Jumbotron>
    <h1>Snach Seat</h1>
    <p>
      Well you can book seats here...and pay cash at the counter{" "}
      <span role="img" aria-label="Don't see evil">
        🙈🙈🙈
      </span>
    </p>
  </Jumbotron>
);

export default CustomHeader;
