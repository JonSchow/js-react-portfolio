import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Work.css";

const Work = () => {
  return (
    <div className="wrapper">
      <div id="submenu">
        <div className="wd">
          <span className="submenuRed" />
          <span>website design</span>
        </div>

        <div className="ld">
          <span className="submenuBlue" />
          <span>Logo design</span>
        </div>

        <div className="ph">
          <span className="submenuYel" />
          <span>photography</span>
        </div>
      </div>
      <div id="workContent">
        <div className="card">
          <img src="./img/4.jpg" width="100%" />
        </div>
        <div className="card">
          <img src="./img/5.jpg" width="100%" />
        </div>
        <div className="card">
          <img src="./img/6.jpg" width="100%" />
        </div>
        <div className="card">
          <img src="./img/10.jpg" width="100%" />
        </div>
        <div className="card">
          <img src="./img/4.jpg" width="100%" />
        </div>
        <div className="card">
          <img src="./img/9.jpg" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Work;
