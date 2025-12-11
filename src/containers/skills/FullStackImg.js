import React, { Component } from "react";
import TwoFactorSVG from "../../assets/images/undraw_server-cluster_ugi.svg";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <img
        src={TwoFactorSVG}
        alt="two factor authentication illustration"
        style={{
          width: "100%",
          maxWidth: "650px", // ⭐ Adjust size here
          height: "auto",
          filter: theme.isDark ? "brightness(0.85)" : "none",
        }}
      />
    );
  }
}
