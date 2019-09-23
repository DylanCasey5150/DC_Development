import React, { Component } from "react";
import "./resume_skills.css";
import Resume from "../images/resume.docx";

class Resume_Skills extends React.Component {
  render() {
    return (
      <div className="resume_skills_container">
        <div className="skills_text_container">
          <div className="skills_header">Skills</div>
          <div className="skills_list">
            HTML, CSS, PHP, JavaScript, JSX, JQuery, Ajax, Bootstrap, SQL,
            PhpMyAdmin, Wordpress, JustInMind, React
          </div>
        </div>
      </div>
    );
  }
}

export default Resume_Skills;
