import React from "react";

export const Footer = () => {
  return (
    <>
      <div
        id="footer"
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
            <i
              class="fas fa-envelope-square fa-3x"
              style={{ margin: "3px", color: "blue" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/rami-nawahda/" target="_blank">
            <i
              class="fab fa-linkedin fa-3x"
              style={{ margin: "3px", color: "blue" }}
            ></i>
          </a>
          <a href="https://wa.link/5jvfet" target="_blank">
            <i
              class="fas fa-phone-square fa-3x"
              style={{ margin: "3px", color: "blue" }}
            ></i>
          </a>
          <h2  style={{ fontSize:"30px",margin: "3px", margin: "3px", color: "black" }}>Get In Touch</h2>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rami.nawahda@gmail.com&su=SUBJECT&body=BODY&tf=1"
            target="_blank"
          >
            {/* <i class="fas fa-envelope-open-text ">CONTACT ME</i> */}
            <i class="fas  aText"  style={{  margin: "3px", color: "blue" }}>rami.nawahda@gmail.com</i>
          </a>
          <h3 style={{  margin: "3px", color: "black" }}>(+970)59-730-6351</h3>
        </div>
      </div>
    </>
  );
};
export default Footer;
