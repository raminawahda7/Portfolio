import React from "react";
import "./header.scss";
// import PropTypes from 'prop-types'
// import 'semantic-ui-css/semantic.min.css';
// import './mysass.scss';
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
// const showModal = () => {
//   return (
//     <Modal show={true}>
//       <Modal.Header>Hi</Modal.Header>
//       <Modal.Body>asdfasdf</Modal.Body>
//       <Modal.Footer>This is the footer</Modal.Footer>
//     </Modal>
//   );
// };
const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="section">
      <header>
        <h1>RAMI NAWAHDA</h1>
        <p class="subTitle">Software Engineer | Full Stack Developer</p>
        <nav>
          <a href="https://github.com/raminawahda7" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/rami-nawahda/" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://twitter.com/wardal7ayt" target="_blank">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/star7.nawahda/" target="_blank">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1s4HSztRNnJt0unRMFLBATAEzUsyxPJbi/view"
            target="_blank"
          >
            <i class="fas fa-2x">CV</i>
          </a>
          <a href="#" onClick={showModal}>
            <i class="fas fa-2x">About Me</i>
          </a>
          <Modal show={isOpen} onHide={hideModal} centered>
            <Modal.Header>
              <Modal.Title>Hi 👋 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I like building new stuff and work with other people – nothing
              really interesting is ever built alone!
              <br/>
              <br/>
              My working philosophies:
              <li>
                Communication and collaboration with other developers and
                stakeholders is the key to a successful project.
              </li>
              <li>
                Use the right tool for the job. A programming language is just a
                tool!
              </li>
              <li>Always try to learn something new.</li>
              <br />
              Beside programming I am interested in sports (running, football,
              table tennis ) and birds and their ecology and conservation.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={hideModal}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </nav>
      </header>
    </div>
  );
};

// Header.propTypes = {

// }

export default Header;
