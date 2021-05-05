import React from "react";
import "./Toolbar.css";
import { Card } from "antd";
import Hamburger from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";
function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toggle_toolbar_button">
          <Hamburger click={props.SideToggle} />
        </div>
        <div className="toolbar_logo">
          <div>CovidDiaries</div>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <Link to="/addStory" style={{ color: "#1c9963" }}>
                Write a story
              </Link>
            </li>
            <li>
              <Link to="/">Stories</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
