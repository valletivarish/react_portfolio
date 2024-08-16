import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Github from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>varishvalleti@gmail.com</span>
        <div className="f-icons">
          <a href=""><Insta color="white" size={"3rem"} /></a>
          <a href="">
          <Whatsapp color="white" size={"3rem"} />
          </a>
         <a href="">
         <Github color="white" size={"3rem"} />
         </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
