import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf"
import { themeContext } from '../../Context'
import { useContext } from 'react'
  
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;  
  return (
    <div className="services">
      <div className="awesome">
        <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus
          voluptates quos necessitatibus  deserunt delectus <br/> provident.
        </span>
        <a href={Resume} download="Valleti Varish Resume">
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="cards">
        <div style={{left:'14rem'}}>
            <Card 
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, adobe"}
            />
        </div>
        <div style={{top:"12rem",left:"-4rem"}}>
            <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
            />
        </div>
        <div style={{top:"24rem",left:"14rem"}}>
            <Card 
            emoji={Humble}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
            />
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
