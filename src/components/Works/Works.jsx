import React from "react";
import "./Works.css";
import Amazon from "../../img/amazon.png"
import fiver from "../../img/fiverr.png"
import upwork from "../../img/Upwork.png"
import shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'
 
const Works = () => {
  const theme = useContext(themeContext);
const darkMode=theme.state.darkMode; 
  return (
    <div className="works" id="works">
     <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
           <span style={{color : darkMode? 'white' : ''}}>Works for All these</span> 
          <span>Brands & Clients</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right */}
      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={fiver} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>

  </div>
  );
};

export default Works;
