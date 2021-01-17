import React from "react";
import "./projectCard.css";
import background from "./projC.jpg";

const ProjectCard = (props) => {
  const renderDemoButton = () => {
    if (props.demo === "") {
      return <button className="ui disabled button">Demo</button>;
    } else {
      return (
        <a href={props.demo} target="_blank">
          <button className="ui button">Demo</button>
        </a>
      );
    }
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${background})` }}>
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="content">
        <div
          className="header"
          style={{
            color:"#1a1aff",
            fontSize: "30px",
          }}
        >
          {props.name}
        </div>
        <div className="description">
          <p style={{ color: "black" }}>{props.description}</p>
        </div>
      </div>
      <div className="extra content">
        <a href={props.github} target="_blank">
          <button className="ui button">Code</button>
        </a>

        {renderDemoButton()}
      </div>
    </div>
  );
};

export default ProjectCard;
