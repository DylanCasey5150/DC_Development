import React, { Component } from "react";
import "./nav.css";
import Dylan from "../images/dylan_pic1.png";
import Hamburger from "../images/icon_menu.png";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return (
      <div className="Nav_Menu_Container">
        <div className="Nav_Menu">
          <div className="nav_menu_big_screen">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to="/about_social_medias">
              <li>About/Social Medias</li>
            </Link>
            <Link to="/resume_skills">
              <li>Skills</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </div>
          <button
            onClick={this.toggleHidden.bind(this)}
            className="Hamburger_Button"
          >
            <img
              className="Hamburger_Image"
              src={Hamburger}
              width="50%"
              height="60%"
            />
          </button>
          {!this.state.isHidden && <Dropdown />}
        </div>
      </div>
    );
  }
}

const Dropdown = () => (
  <div id="Dropdown_Menu" class="dropdown_content">
    <Link to="/">
      <li>Home</li>
    </Link>

    <Link to="/projects">
      <li>Projects</li>
    </Link>
    <Link to="/about_social_medias">
      <li>About/Social Medias</li>
    </Link>
    <Link to="/resume_skills">
      <li>Skills</li>
    </Link>
    <Link to="/contact">
      <li>Contact</li>
    </Link>
  </div>
);

export default Nav;
