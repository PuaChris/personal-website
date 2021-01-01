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
      <div className="Home">
        <h1 className="Name">
          Chris Pua
        </h1>
        <p className="Description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat leo, elementum ut nibh quis. 
        </p>
        
        <Link activeClass="active" to="About" spy={true} smooth={true} duration={1000}>
          <Button inverted color="red" size="huge">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat leo, elementum ut nibh quis. 
            </p>
            <div className="About-Buttons">
              <Button inverted color="blue" size="huge">
                Resume
              </Button>
              <Button inverted color="blue" size="huge">
                Projects
              </Button>  
            </div>
          </div>
        </div>
        
        <div className="About-Skills-Section">
          <img src={skills} className="About-Skills"/>
        </div>
        <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={2500}>
          <Button inverted color="blue" size="huge">
            Contact Information
          </Button>  
        </Link>
        
      </div>

      <div id="Contact">
        <div className="Contact-Description">
          <p>
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
