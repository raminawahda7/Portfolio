import React from "react";
import "./header.css";
// import PropTypes from 'prop-types'
// import 'semantic-ui-css/semantic.min.css';
// import './mysass.scss';

const Header = (props) => {
  return (
    <div className="section">
      <header>
        <h1>RAMI NAWAHDA</h1>
        <p class="greeting-text-p subTitle">Software Engineer | Full Stack Developer</p>
        <nav>
          <a href="https://github.com/raminawahda7" target="_blank"><i class="fab fa-github fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/rami-nawahda/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
          <a href="https://twitter.com/wardal7ayt" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
          <a href="https://www.facebook.com/star7.nawahda/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
          <a href="https://drive.google.com/file/d/1s4HSztRNnJt0unRMFLBATAEzUsyxPJbi/view" target="_blank"><i class="fas fa-file fa-2x"></i></a>

        </nav>
      </header>
    </div>
  );
};

// Header.propTypes = {

// }

export default Header;
