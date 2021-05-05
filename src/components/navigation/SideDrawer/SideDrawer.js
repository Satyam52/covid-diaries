import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
function SideDrawer(props) {
  let side = "side-drawer";
  if (props.show) side = "side-drawer open";

  return (
    <nav className={side}>
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
    </nav>
  );
}

export default SideDrawer;
