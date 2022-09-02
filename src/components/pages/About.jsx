import React from "react";
import "../styles/About.css";
import Profile from "../assets/CardPhoto.jpg";
import { Grid, Container, Box, Typography } from "@mui/material";

function About() {
  return (
    <section id="about">
      <Container className="about_section">
        <Typography variant="h1">
          About
        </Typography>

        <Box sx={{ flexGrow: 10 }}>
          <Grid cointainer
            alignItems="center"
            className="about_container"
          >

            <Grid item xs={10} spacing={3}>
              <div className="about_item">
                <img className="about_img" src={Profile} alt="My photo" />
              </div>
            </Grid>

            <Grid item xs={10} spacing={3}>
              <div className="about_item">
                  <p>
                    I am Tuka Alarbi, a tech-savvy individual, studying at the University of Waterloo (2020-present) for a Bachelor's degree
                    in Computer Science with a minor in Cognitive Science. 
                    <br /><br />
                    As I am passionate about consistently advancing my knowledge and skills, I am 'always on the hunt' for 'new' experiences 
                    to apply them in 'different' ways. I have completed various online course on software development, and I try to find the 
                    sense of wonder in what I do to keep myself motivated to apply what I learn on everything I do and be dedicated to 
                    my work.
                    <br /><br />
                    As technology has always been my sense of wonder throughtout my childhood, I eventually became interested
                    in the psychological aspect of technical creations. 
                  </p> 
              </div>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </section>
  );
}

export default About;