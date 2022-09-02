import { Container, Typography } from '@mui/material';
import React from 'react'

const data = require("../Resume assets/Resume Data/SkillsList.json");

function Skills() {
  return (
    <div>
      {
        data.map(({ id, skill, level }) => {
          return (
          <Container className='programming_lang'>
            <Typography key={id} variant='h6'>
              {skill}
            </Typography>
            <progress value={level} max="100" height='24' color='purple'></progress>
          </Container>
          );
        }
        )
      }
    </div>
  )
}

export default Skills