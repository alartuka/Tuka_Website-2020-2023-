import React from "react";
import "../styles/Footer.css";
import { LinkedIn } from "@mui/icons-material";
import Link from "@mui/material/Link";
import { GitHub } from "@mui/icons-material";
import Logo from '../assets/signature.png';

function Footer() {
  return (
    <div className="footer">
      <div className="leftSide" >
        <Link to="/"><img src={Logo} alt='Logo' /></Link>
        <p>2022 &copy; </p>
      </div>

      <div className="rightSide">
        
        <Link href="http://www.linkedin.com/in/tukaalarbi"
          target="_blank" >
          <LinkedIn />
        </Link>

        <Link href="http://www.github.com/alartuka"
          target="_blank" >
          <GitHub />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
