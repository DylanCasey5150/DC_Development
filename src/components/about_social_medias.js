import React, { Component } from "react";
import "./about_social_medias.css";
import Dylan_Grad_Pic from "../images/dylan_grad_pic.png";
import Dylan_Guitar_Pic from "../images/dylan_guitar_pic.png";
import Instagram from "../images/instagram_icon.jpeg";
import Twitter from "../images/twitter_icon.png";
import Facebook from "../images/facebook_icon.png";

class About_Social_Medias extends React.Component {
  render() {
    let social_media_Links = {
      instagram: "https://www.instagram.com/dylancasey5150/",
      facebook: "https://www.facebook.com/dylan.casey.169"
    };
    return (
      <div className="about_social_medias">
        <div className="about_me_header">About Me</div>
        <div className="about_me_text_1">
          I'm a web developer out of Philadelphia
        </div>
        <div className="about_me_text_2">
          My mission is to help people achieve their personal and professional
          goals through technology. Bringing a vision to life using technology
          comes with a certain sense of satisfaction that I haven't found
          elsewhere. I love watching others succeed and having some success of
          my own in the process.
        </div>
        <div className="dylan_pic_flex">
          <div className="dylan_grad_pic">
            <img src={Dylan_Grad_Pic} width="100%" />
          </div>
          <div className="dylan_guitar_pic">
            <img src={Dylan_Guitar_Pic} width="100%" />
          </div>
        </div>

        <div className="social_media_header">Social Medias</div>
        <div className="social_media_text_1">Follow me on social media!</div>
        <div className="social_media_flex">
          <div className="instagram_pic">
            <a
              className="project_links_body_1_link"
              href={social_media_Links.instagram}
              target="_blank"
            >
              <img src={Instagram} width="100%" />
            </a>
          </div>

          <div className="facebook_pic">
            <a
              className="project_links_body_1_link"
              href={social_media_Links.facebook}
              target="_blank"
            >
              <img src={Facebook} width="100%" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About_Social_Medias;
