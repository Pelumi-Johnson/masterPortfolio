import React, { Component } from "react";
import projectIllustration from "../../assets/images/undraw_programming_j1zw.svg";

export default class ProjectsImg extends Component {
  render() {
    return (
      <img
        src={projectIllustration}
        alt="Projects illustration"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
    );
  }
}
