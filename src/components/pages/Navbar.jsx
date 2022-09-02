import React, { useState } from 'react';
import Logo from '../assets/signature.png';
import { Link } from 'react-router-dom';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import '../styles/Navbar.css';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <Link to="/"><img src={Logo} alt='Logo' /></Link>
        <div className='hiddenLinks'>
        <Link to="/"> Home </Link>
        <Link to="/Portfolio"> Portfolio </Link>
        {/* <Link to="/Resume"> Resume </Link> */}
        <Link to="/About"> About </Link>
        {/* <Link to="/Contact"> Contact </Link> */}
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/Portfolio"> Portfolio </Link>
        {/* <Link to="/Resume"> Resume </Link> */}
        <Link to="/About"> About </Link>
        {/* <Link to="/Contact"> Contact </Link> */}
        <button onClick={toggleNavbar}>
          <ReorderRoundedIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar