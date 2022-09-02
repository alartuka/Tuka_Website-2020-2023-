
import { Container, Typography } from "@mui/material";
import React from "react";
import '../styles/Resume.css';

function Resume() {
  return (
    // IMPORT LINK TO PDF->

    <section id="resume">
      <Container className='resume_header'>
        <Typography variant="h2" component="div">
          Resume
        </Typography>
      </Container>
     <Container className="resume_container" >
     <Typography variant="h3">
        <br /><br />
        PREVIEW of RESUME pdf will be provided here soon...
        <br /><br />
      </Typography>
     </Container>
    </section>
  );
}

export default Resume;