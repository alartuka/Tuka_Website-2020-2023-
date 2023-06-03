import React from "react";
import "../styles/About.css";
// import Profile from "../assets/CardPhoto.jpg";
import { Grid, Container, Box, Typography, Chip } from "@mui/material"

function About() {
  return (
    <section id="about">
      <Container className="about_header">        
        <Typography id="div" variant='h1'>
          About
        </Typography>
      </Container>

      <Container className="about_section">
        <Box sx={{ flexGrow: 10 }}>
          <Grid cointainer
            className="about_container"
          >
            
            <Grid item xs={10} spacing={3}>
              <div className="about_item">
                {/* <img className="about_img" src={Profile} alt="My photo" /> */}
              </div>
            </Grid>

            <Grid item xs={10} spacing={3}>
              <div className="about_item">
                <Container className="about_itm">
                  <Typography variant="p">
                  
                    
                    Hello there! Welcome to my website! My name is Tuka [Pronounced with a Q].
                    I'm an ambitious and motivated undergraduate student pursuing a Bachelor of Mathematics degree 
                    in Computer Science and Mathematics at the University of Waterloo (2020-2024).

                    <br /><br />

                    Every hackathon I have been to has left me inspired and curious to learn more about software 
                    development and engineering. The thrill of working on an idea and seeing it turn into 
                    something real and useful is one of the most incredible experiences I have ever had. 
                    The will to keep experiencing that magic is why I strive to learn and continue to practice 
                    software engineering and its application in our world.
                    
                    <br /><br />

                    I'm genuinely fascinated by the intersection of neuroscience or cognitive science and technology. 
                    It's exciting to explore how computer science, including AI, machine learning, data analytics, 
                    and natural language processing (NLP), can be leveraged to create innovative solutions for 
                    cognitive health issues. This intersection offers us incredible opportunities to revolutionize 
                    our understanding and support of cognitive functions.

                    <br /><br />

                    Driven by curiosity and a thirst for knowledge, I find immense joy in exploring the applications 
                    of AI and other computer science concepts in the realm of cognitive or neuroscience. These 
                    technologies hold the potential to improve assessments, personalize interventions, and enhance 
                    cognitive outcomes.

                    <br /><br />

                    As a student, I acknowledge that my practical experience in tech may be limited to personal, hackathon, 
                    and school projects. However, I'm highly motivated, dedicated, and eager to dive deep into this exciting 
                    field. I embrace every opportunity to learn and apply computer science concepts, such as AI and NLP, 
                    to further advance our understanding of cognitive health. My ultimate goal is to contribute to the 
                    development of cutting-edge tech solutions that address cognitive health challenges and make a positive 
                    impact on people's lives.

                    <br /><br />

                    I strongly believe in the power of collaboration and the value of diverse perspectives. I'm 
                    enthusiastic about connecting with anyone that shares a passion for leveraging AI, NLP, 
                    and other computer science concepts in the domain of neuroscience and cognitive science. 
                    Together, we can explore novel solutions, exchange insights, and drive meaningful 
                    advancements in cognitive health.

                    <br /><br />

                    Thank you for taking the time to learn more about me! I'm thrilled about the opportunity to 
                    connect with like-minded individuals. Let's collaborate, share ideas, and work together to 
                    develop tech-driven solutions that enhance cognitive health and shape a brighter future.
                    
                    <br /><br />
                    
                    Feel free to reach out—I'm happy to connect!
                  </Typography>
                </Container>
              </div>

            </Grid>
          </Grid>

          <Grid item>
                        <div  className='lang_tech'>
                          <Typography gutterBottom variant="h3" component="div">
                            Languages & Technologies
                          </Typography>
                        <Container className='tech_container'>
                          <Chip className="item_tag" label="Python" color="primary" />
                          <Chip className="item_tag" label="HTML" color="primary" />                       
                          <Chip className="item_tag" label="JavaScript" color="primary" />
                          <Chip className="item_tag" label="CSS" color="primary" />
                          <Chip className="item_tag" label="C/C++" color="primary" />
                          </Container>

                          <Container className='tech_container'>
                            <Chip className="item_tag" label="React.js" color="primary" />
                            <Chip className="item_tag" label="Processing5.js" color="primary" />
                          </Container>
                          <Container className='tech_container'>
                          <Chip className="item_tag" label="Git" color="primary" />
                          <Chip className="item_tag" label="Linux" color="primary" />
                          <Chip className="item_tag" label="Bash" color="primary" />
                        </Container>

                        <Container className='tech_container'>
                          <Chip className="item_tag" label="Figma" color="primary" />
                        </Container>

                        </div>
            </Grid>
        </Box>
      </Container>
    </section>
  );
}

export default About;