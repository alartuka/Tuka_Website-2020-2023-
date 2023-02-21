import React from "react";
import "../styles/About.css";
import Profile from "../assets/CardPhoto.jpg";
import { Grid, Container, Box, Typography } from "@mui/material"

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
                {/* <p>
                    I am Tuka Alarbi, a tech-savvy individual, studying at the University of 
                    Waterloo [2020-present | aka the "Pandemic Class"] for a Bachelor's 
                    degree in Computer Science with a minor in Cognitive Science. 
                    <br /><br />
                    As I am passionate about consistently advancing my knowledge and skills, 
                    I am 'always on the hunt' for 'new' experiences to apply them in 'different' 
                    ways. I have completed various online course on software development, and I 
                    try to find the sense of wonder in what I do to keep myself motivated to 
                    apply what I learn on everything I do and be dedicated to my work.
                    <br /><br />
                    As technology has always been my sense of wonder throughtout my childhood, 
                    I eventually became interested in the psychological aspect of technical 
                    creations. 
                  </p> */}

                <p>
                  I'm a third-year undergraduate student at the University of Waterloo [2020 - 2024], working towards a Bachelor
                  of Mathematics in Mathematics&Computer Science.

                  {/* I’m a senior studying Interaction Design at the University of Washington, Seattle.  */}

                  {/* Most recently, I was a Product Design Intern at Facebook where I was focused on designing 
                  for real-time video conversations on Messenger. 
                  
                  In the past, I’ve also worked on Facebook’s 
                  Messenger for Business and at India’s largest learning platform, Unacademy.  */}

                  <br /><br />

                  I have spent countless nights writing code. Every hackathon I have been to has left
                  me inspired and curious to learn more about software development. The thrill of working on an idea
                  and seeing it turn into something real is one of the most incredible experiences I
                  have ever had.

                  <br /><br />

                  The feeling of seeing something I envisioned appear on screen –functioning properly– still seems magical, just as it
                  did during my first year of university when I wrote my first functional p5.js or Racket/Scheme programs.
                  The will to keep experiencing that magic is why I strive to learn and continue to practice software
                  development every day.

                  <br /><br />

                  I believe that the projects I have worked on have been the highlight of my software development journey.
                  I have been influenced to constantly look for problems around me and solutions to them;
                  for challenges like these are what drive me to work relentlessly through sleepless nights for
                  hours on end, and I love every moment of them.

                  <br /><br />

                  The dedication, eye for detail, and perseverance that software development has taught me, are accelerators
                  in enabling me to achieve my goal of giving back to society and creating technology that connects different
                  aspects of the world

                  <br /><br />

                  Don't hesitate to reach out –
                  {/* let's grab a coffee and chat!   */}
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