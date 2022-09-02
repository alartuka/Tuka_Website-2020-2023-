// import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";
// Card, CardContent, CardHeader, Link,
import { Container, Typography } from "@mui/material";
import React from "react";
import '../styles/Resume.css';
// import { Link } from "react-router-dom";
// import Experience from "../pages/Resume assets/Experience";
// import Skills from "../pages/Resume assets/Skills";

// const experiences = require("../pages/Resume assets/Resume Data/Experience.json");

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

    // <Container className="resume_container">
    //       <Card className="name">
    //         <CardContent>
    //           <Typography variant="h2">
    //             Tuka Alarbi
    //           </Typography>
    //         </CardContent>
    //       </Card>

    //       <Card className="contact">
    //         <CardContent>
    //           <Typography variant="body1" component="div">

    //             <Link href="http://www.linkedin.com/in/tukaalarbi"
    //               target="_blank" color="inherit" underline="none">
    //               <LinkedIn />tukaalarbi <br />
    //             </Link>

    //             <Link
    //               href="http://www.github.com/alartuka"
    //               target="_blank"
    //               color="inherit"
    //               underline="none"
    //             >
    //               <GitHub />alartuka <br />
    //             </Link>

    //             <Email />
    //             talarbi@uwaterloo.ca <br />

    //             <Phone />
    //             226-700-0040 <br />
    //           </Typography>
    //         </CardContent>
    //       </Card>

    //       <Card className="education">
    //         <Typography variant="h4" >
    //           Education
    //         </Typography>
    //         <CardContent>
    //           <Typography variant="h5">
    //             University Of Waterloo
    //           </Typography>
    //           <Typography variant="h6">
    //             Bachelor of Mathematics - Honours Mathematics
    //           </Typography>
    //           <Typography variant="body2">
    //             2020 - 2024/25 (Present)
    //           </Typography>
    //           <Typography variant="body1">
    //             <ul>
    //               <li>Major: Computer Science</li>
    //               <li>Minor: Cognitive Science</li>
    //               <li>Specialization: Human Computer Interactions</li>
    //               <li>Certificates:</li>
    //               <ul>
    //                 <li>Global Experience</li>
    //                 <li>EDGE</li>
    //               </ul>
    //               <li>Relavant Courses:</li>
    //               <ul>
    //                 <li>Intro to Computer Programming (P5.js),
    //                   Intro to Computer Science II (Python), </li>
    //                 <li>Linear Algebra,
    //                   Calculus II, </li>
    //                 <li> Intro to Psychology, Intro to Microeconomics,
    //                   Public Speaking</ li>
    //               </ul>

    //               <li>Activities:</li>
    //               <ul>
    //                 <li>WiSTEM, WiCS, Muslim Student Association,
    //                   <br /> Hero.co, Engineers Without Borders</li>
    //               </ul>
    //             </ul>
    //           </Typography>
    //         </CardContent>
    //       </Card>

    //       <Card className="skills">
    //         <CardContent>
    //           <Typography variant="h4">
    //             Skills
    //           </Typography>
    //           <Skills></Skills>
    //         </CardContent>
    //       </Card>

    //       <Card className="projects">
    //         <CardContent>
    //           <Typography variant="h4">
    //             Projects
    //           </Typography>
    //         </CardContent>
    //       </Card>

    //       <Card className="experience">
    //         <CardContent>
    //           <Typography variant="h4">
    //             Experience
    //           </Typography>
    //         </CardContent>
    //       </Card>

    //       <Card className="certifications">
    //         <CardContent>
    //           <Typography variant="h4">
    //             Certifications
    //           </Typography>
    //         </CardContent>
    //       </Card>

    //       <Card className="leadership">
    //         <CardContent>
    //           <Typography variant="h4">
    //             Leadership
    //           </Typography>
    //         </CardContent>
    //       </Card>

    //     </Container>
    //   </div>

    // </section>

    // <Container className="education">
    //       {
    //         educ.map((ed) => (
    //           <
    //         ))
    //       }
    //     </Container>
    //     <Container className="skills"></Container>
    //     <Container className="experience"></Container>
    //   </Container>

    //   <div className="skills">
    //     {
    //       resumeSkills.map((skill) => (
    //         <Skill header={skill.header} content={skill.content} />
    //       ))
    //     }
    //   </div>
    //   <div className="experience">
    //     {
    //       experiences.map((experience) => (
    //         <Experience
    //           companyName={experience.companyName}
    //           description={experience.description}
    //           bulletPoints={experience.bulletPoints}
    //         />
    //       ))}
    //   </div>
    // </section>
    // ==============================================================
  );
}

export default Resume;