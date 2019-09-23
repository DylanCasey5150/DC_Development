import React, { Component } from "react";
import "./recent_work.css";
import True_Tone from "../images/true_tone_logo_1.jpg";
import City_Of_Philly from "../images/react_philadelphia.png";
import Github from "../images/github_picture.png";
import Scroll from "../images/smooth_scroll_icon.png";

class Recent extends React.Component {
  scroll_top() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    let externalUrlLinks = {
      truetone: "http://truetonebeta.com/",
      github: "https://github.com/DylanCasey5150",
      react_data: "https://dylancasey5150.github.io/City_Of_Philadelphia_Test/"
    };
    return (
      <div className="Projects_Container">
        <div className="projects_text_container">
          <div className="projects_header">Recent Work</div>
          <div className="projects_text_1">See my recent projects!</div>
        </div>
        <div className="Projects">
          <div className="projects_1">
            <a
              className="project_links_body_1_link"
              href={externalUrlLinks.truetone}
              target="_blank"
            >
              <img src={True_Tone} width="100%" height="80%" />
              <div className="project_1_caption">True Tone</div>
            </a>
          </div>

          <div className="projects_2">
            <a
              className="project_links_body_1_link"
              href={externalUrlLinks.react_data}
              target="_blank"
            >
              <img src={City_Of_Philly} width="100%" height="80%" />
              <div className="project_2_caption">React Data Project</div>
            </a>
          </div>

          <div className="projects_3">
            <a
              className="project_links_body_1_link"
              href={externalUrlLinks.github}
              target="_blank"
            >
              <img src={Github} width="100%" height="80%" />
              <div className="project_3_caption">Check Out My Github!</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recent;
