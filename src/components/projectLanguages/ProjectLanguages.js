import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectLanguages extends Component {
  render() {
    const logos = this.props.logos || [];

    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline-languages"
                    name={logo.skillName}
                  >
                    {logo.imageSrc ? (
                      // 👉 If PNG was provided, show image
                      <img
                        className="project-language-img"
                        src={require(`../../assets/images/${logo.imageSrc}`)}
                        alt={logo.name}
                      />
                    ) : (
                      // 👉 Otherwise use iconify
                      <span
                        className="iconify"
                        data-icon={logo.iconifyClass}
                        data-inline="false"
                      ></span>
                    )}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
