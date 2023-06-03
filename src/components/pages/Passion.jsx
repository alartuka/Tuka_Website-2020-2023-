import React from 'react'
import '../styles/Passion.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, Chip } from '@mui/material';

function Passion() {
  return (
    <section id="passion">
      <Container className="passion_header">        
        <Typography id="div" variant='h1'>
          Passion Projects
        </Typography>
        <br /><br />
        <Typography variant='p'>
          - PAGE UNDER CONSTRUCTION - 
        </Typography>
      </Container>

      <Container className="passion_content">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2 }}>
              <img src="https://i.ibb.co/VcYyJ2s/Screenshot-2020-12-17-at-9-00-58-AM.png" alt="" />
              <Typography id="div" variant='h3'>
                <Link to="/projects/project1">Project 1</Link>
              </Typography>
              <Typography id="div" variant='h5'>
                <Link to="/projects/project1">Project 1 description</Link>
              </Typography>
              <Typography id="div" variant='h5'>
                <Link to="/projects/project1">Project 1 link</Link>
              </Typography>
            </Box>

          </Grid>
        </Grid>

      </Container>
    </section>
  );
};

export default Passion