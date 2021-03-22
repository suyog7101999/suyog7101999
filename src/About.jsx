import React from 'react';
import Sidebar from './Sidebar.jsx';
import web1 from "../src/images/4.jpg";

const About = () =>{
  return(
    <React.Fragment>
            <Sidebar name="Welcome to About Page"
             imgsrc={web1} visit="/contact"
              btname="Conatct Now"
              butname="Service"
              bttname="About" 
              link="./contact"
              link1="./service"
              link2="./about"/>
    </React.Fragment>
  );
};

export default About;