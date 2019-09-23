import React, { Component } from "react";
import "./header.css";
import Dylan from "../images/dylan_pic1.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="text_1">
          {"<"}Coder{">"}
        </div>
        <img className="Header_Image" src={Dylan} width="55%" height="80%" />
      </div>
    );
  }
}

export default Header;
