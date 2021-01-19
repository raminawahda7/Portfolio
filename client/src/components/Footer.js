import React from "react";

export const Footer = () => {
  return (
    <>
      <div
        class="ui inverted vertical footer segment"
        style={{ backgroundColor: "white" }}
      >
        <div class="ui center aligned container">
          <h4 class="ui  header">
            &copy; Copyright 2020 | All rights reserved
            <br />
            <br />
            Made With
            <img
              alt="❤️"
              draggable="false"
              src="https://twemoji.maxcdn.com/2/72x72/2764.png"
              style={{
                height: "1em",
                width: "1em",
                margin: "0px 0.05em 0px 0.1em",
                verticalAlign: "-0.1em",
              }}
            ></img>
            by Rami Nawahda
          </h4>
          <a href="mailto:rami.nawahda@gmail.com" target="_blank">
            <i class="mail square icon big" style={{ color: "blue" }}></i>
          </a>
          <a href="https://twitter.com/wardal7ayt" target="_blank">
            <i class="twitter square icon big" style={{ color: "blue" }}></i>
          </a>
          <a href="https://www.linkedin.com/in/rami-nawahda/" target="_blank">
            <i class="linkedin square icon big" style={{ color: "blue" }}></i>
          </a>
          <a href="https://wa.link/5jvfet" target="_blank">
            <i class="phone square icon big" style={{ color: "blue" }}></i>
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
