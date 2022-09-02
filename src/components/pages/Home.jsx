import React from "react";
import "../styles/Home.css";
import bannerIMG from "../assets/homebanner.jpg";
import selfIMG from "../assets/CardPhoto.jpg";
import portfolioIMG from "../assets/portfolio4.jpg";

import { init } from "ityped";
import { useEffect, useRef } from "react";

import {
  Grid, Box, Typography, Container
} from "@mui/material";
import { Link } from "react-router-dom";



function Home() {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed: 60,
      strings: ["Student", "Creator",
        "Wonderer"],
    });
  }, []);

  return (
    <section id="home">
      <header className="home_header">
        <img src={bannerIMG} alt="BANNER" width="100%" height="400" />
        <h1>
          A Sense of Wonder in A World Gone Mad
        </h1>
      </header>

      {/* <Container className="hero_section">
        <h2>Hello, I'm</h2>
        <h1>Tuka Alarbi</h1>
        <h3>
          A <span ref={textRef}></span>
        </h3>
      </Container> */}

      <Container className="attributes_section">
        {/* Creator:
          Learner:
          Problem-solver:*/}

        <Box sx={{ flexGrow: 6 }}>
          <Grid cointainer
            alignItems="center"
            className="attribute_container" >

            <Grid item xs={10} spacing={3}>

              <div key="1" className="attribute_item">
                <div className="attribute_content">
                  {/* <Typography variant="h2">
                    Creator
                  </Typography>
                  <Typography variant="body1">
                    Understanding people's way of thinking and putting
                    the people at the center of what I do ensures that
                    value is given to my creations
                  </Typography> */}

                  <h2>Hello, I'm</h2>
                  <h1>Tuka A.</h1>
                </div>
              </div>
            </Grid>

            <Grid item xs={10} spacing={3}>
              <div key="2" className="attribute_item">
                <div className="attribute_content">
                  {/* <Typography variant="h2">
                    Other"""
                  </Typography>
                  <Typography variant="body1">
                    With """"" experience and team
                    spirit comes organization, efficiency and
                    aptitude for management
                  </Typography> */}
                  <h3>
                    A <span ref={textRef}></span>
                  </h3>
                </div>
              </div>
            </Grid>

            {/* <Grid item xs={10} spacing={3}>
            <div key="3" className="attribute_item">
                <div className="attribute_content">
                  <Typography variant="h2">
                    Adventurer
                  </Typography>
                  <Typography variant="body1">
                    An open perspective with a diverse background
                    leads to a creative, adventurous and a continual
                    learning mindset
                  </Typography>
                </div>
              </div>
            </Grid> */}

          </Grid>
        </Box>
      </Container>

      <Container className="links_section">
        <Box sx={{ flexGrow: 10 }}>
          <Grid cointainer
            alignItems="center"
            className="links_container"
          >

            <Grid item xs={10} spacing={3}>
              <Link to="./About">
                <div className="links_item">
                  <div className="links_content">

                    <Typography variant="h3" color="white">
                      About Me
                    </Typography>

                    <img className="links_img" src={selfIMG} alt="Tuka A" />

                  </div>
                </div>
              </Link>
            </Grid>

            <Grid item xs={10} spacing={3}>
              <Link to="./Portfolio">
                <div className="links_item">
                  <div className="links_content">

                    <Typography variant="h3" color="white">
                      Portfolio
                    </Typography>

                    <img className="links_img" src={portfolioIMG} alt="My work" />

                  </div>
                </div>
              </Link>
            </Grid>

            <Grid item xs={10} spacing={3}>
              <div className="links_item">
                <div className="links_content">

                  <Typography variant="h3">
                    Passion projects
                  </Typography>

                  <img className="links_img" src={portfolioIMG} alt="Sense of Wonder" />

                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

export default Home;
