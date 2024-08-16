import React from "react";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from '../../Context'
import { useContext } from 'react'

import './Intro.css'
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;  
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode? 'white': ''}}>Hey! I Am</span>
          <span>Varish Valleti</span>
          <span>Java Full Stack Developer with high level experience in backend with spring boot</span>
        </div>
        <button className="button i-button">Contact Me</button>
        <div className="i-icons">
            <a href="">
            <img src={Github} alt="GitHub logo" />
            </a>
            <a href="">
            <img src={LinkedIn} alt="LinkedIn logo" />
            </a>
            <a href="">
            <img src={Instagram} alt="Instagram logo" />
            </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top:'-4%',left:'68%'}}>
          <FloatingDiv image={Crown} text1={"Web"} text2={"Developer"}/>
        </div>
        <div style={{top:'22.8rem',left:'3rem'}}>
          <FloatingDiv image={thumbup} text1={"Best Design"} text2={"Award"}/>
        </div>
        <div className="blur" style={{background
          :"rgb(238,210,255)"}}></div>
          <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "20rem",
            width: "22rem",
            height: "13rem",
            left: "-4rem",
          }}
        ></div>
      </div>
      
    </div>
  );
};

export default Intro;
