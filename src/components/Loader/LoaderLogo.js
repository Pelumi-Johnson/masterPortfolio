// src/components/Loader/LoaderLogo.js
import React from "react";
import "./LoaderLogo.css";

export default function LoaderLogo() {
  return (
    <div className="loader-logo" id="logo">
      <div className="hexagon-wrapper">
        <svg
          className="hexagon"
          viewBox="0 0 200 230"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            className="hexagon-border"
            points="100,10 180,60 180,160 100,210 20,160 20,60"
          />
        </svg>

        <div className="loader-initials">PJ</div>
      </div>

      <div className="loader-name">Pelumi Johnson</div>
    </div>
  );
}
