import React, { Component } from "react";
import "./projects.css";
import True_Tone_Picture from "../images/true_tone_logo_1.jpg";
import React_Data_Example from "../images/react_philadelphia.png";
import Github_Picture from "../images/github_picture.png";
import Rock_Paper_Scissors from "../images/rock-paper-scissors.png";

class Projects extends React.Component {
  render() {
    let externalUrlLinks = {
      truetone: "http://truetonebeta.com/",
      github: "https://github.com/DylanCasey5150",
      react_data: "https://dylancasey5150.github.io/City_Of_Philadelphia_Test/",
      rock: "https://dylancasey5150.github.io/Rock_Paper_Scissors/"
    };
    return (
      <div className="Projects_Container">
        <div className="projects_text_container">
          <div className="projects_header">Projects</div>
          <div className="projects_text_1">See my projects!</div>
        </div>
        <div className="Projects">
          <div className="projects_1">
            <a
              className="project_links_body_1_link"
              href={externalUrlLinks.truetone}
              target="_blank"
            >
              <img src={True_Tone_Picture} width="100%" height="80%" />
              <div className="project_1_caption">True Tone</div>
            </a>
          </div>

          <div className="projects_2">
            <a
              className="project_links_body_1_link"
              href={externalUrlLinks.react_data}
              target="_blank"
            >
              <img src={React_Data_Example} width="100%" height="80%" />
              <div className="project_2_caption">React Data Project</div>
            </a>
          </div>

          <div className="projects_3">
            <a
              className="project_links_body_1_link"
              href={externalUrlLinks.github}
              target="_blank"
            >
              <img src={Github_Picture} width="100%" height="80%" />
              <div className="project_3_caption">Check Out My Github!</div>
            </a>
          </div>

          <div className="projects_4">
            <a
              className="project_links_body_1_link"
              href={externalUrlLinks.rock}
              target="_blank"
            >
              <img src={Rock_Paper_Scissors} width="100%" height="80%" />
              <div className="project_4_caption">Check Out My Github!</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
