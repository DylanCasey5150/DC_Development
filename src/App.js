import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dylan from "./components/header.js";
import Recent from "./components/recent_work.js";
import Nav from "./components/nav.js";
import Projects from "./components/projects.js";
import About_Social_Medias from "./components/about_social_medias.js";
import Resume_Skills from "./components/resume_skills.js";
import Contact from "./components/contact.js";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about_social_medias" component={About_Social_Medias} />
          <Route path="/resume_skills" component={Resume_Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <Dylan />
    <Recent />
  </div>
);

export default App;
