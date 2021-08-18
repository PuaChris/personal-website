import React from 'react';

import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { Link } from 'react-scroll';

import './App.css';
import picture from './Profile.jpg';
import skills from './Skills.png';

function App() {
  return (
    <main>
      <div id="Home">
        <h1 className="Name"> Hi! My name is <span style={{color: "#ff695e"}}>Chris Pua</span>. </h1>
        
        <Link activeClass="active" to="About" spy={true} smooth={true} duration={1000}>
          <Button inverted color="teal" size="massive">
          Who am I?
          </Button>
        </Link>
      </div>

      <div id="About">
        <div className="About-Profile">
          <img src={picture} className="About-Picture"/>

          <div className="About-Description">
            <h1 className="About-Title">
              About Me
            </h1>
            <p>
              I'm a 4th year computer engineering student from the University of Toronto with fullstack experience. Check out my past projects and resume below!
            </p>
            <div className="About-Buttons">
              <Button inverted color="blue" size="huge">
                <a href="https://drive.google.com/file/d/12rizTUMw5fkZdmEcZF5Td6Nh_DJeweGS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
              <Button inverted color="blue" size="huge">
                <a href="https://github.com/PuaChris">
                  Projects
                </a>
              </Button>  
            </div>
          </div>
        </div>
        
        <div className="About-Skills-Section">
          <img src={skills} className="About-Skills"/>
        </div>
        <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={1000}>
          <Button inverted color="blue" size="massive">
            Contact Information
          </Button>  
        </Link>
        
      </div>

      <div id="Contact">
        <div className="Contact-Description">
          <p className="Contact-Motto">
            Let's talk.
          </p>
          <p className="Contact-Email">
            <u>
              chris.pua@mail.utoronto.ca
            </u>
          </p>
          <div className="Contact-Links">
            <a href="https://www.linkedin.com/in/christopher-pua/">
              <u>
                LinkedIn
              </u>
            </a>
            <a href="https://github.com/PuaChris">
              <u>
                GitHub
              </u>
            </a>
            <a href="https://medium.com/@chrisatpua">
              <u>
                Medium
              </u>
            </a>
          </div>  
        </div>
        
      </div>
    </main>
  );
}

export default App;
