import React from "react";
import "./projectCard.css";
import background from "./projC.jpg";

const ProjectCard = (props) => {
  const renderDemoButton = () => {
    if (props.demo !== "") {
    //   return <button className="ui disabled button">Demo</button>;
    // } else {
      return (
        <a href={props.demo} target="_blank">
          <i class="fab fa-youtube fa-2x" style={{color:"red", marginLeft: "0.6em" }}></i>
        </a>
      );
    }
  };

  return (
    <div className="ui card">
      <div
        className="ui image"
        // style={{ width: "100%", height: "auto", objectFit: "cover" }}
      >
        <img src={props.image} />
      </div>
      <div
        className="content"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className="header"
          style={{
            color: "#1a1aff",
            fontSize: "30px",
          }}
        >
          {props.name}
        </div>
        <div className="description">
          <p style={{ color: "black" }}>{props.description}</p>
        </div>
      </div>
      <div
        className="extra content"
        style={{ backgroundImage: `url(${background})` }}
      >
        <a href={props.github} target="_blank">
          <i class="fab fa-github fa-2x" style={{ color:"black",marginRight: "0.6em" }}></i>
        </a>

        {renderDemoButton()}
      </div>
      
    </div>
    
  );
};

export default ProjectCard;
