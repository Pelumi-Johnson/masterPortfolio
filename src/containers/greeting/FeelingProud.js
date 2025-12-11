import React from "react";

const FeelingProud = ({ theme }) => {
  // theme is still accepted so Greeting.js doesn't break,
  // but we don't actually need to use it for this image.
  return (
    <img
      src={require("../../assets/images/undraw_connected-world_anke.svg")}
      alt="Cybersecurity illustration"
      style={{
        width: "100%",
        maxWidth: "1000px", // make it bigger or smaller here
        display: "block",
      }}
    />
  );
};

export default FeelingProud;
