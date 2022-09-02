import React from 'react';
import '../styles/Portfolio.css';
import Button from '@mui/material/Button';
import data from '../assets/Portfolio data/Portfolio Data/data'
import { Container, Grid, Typography, Chip } from '@mui/material';


function Portfolio() {
  return (
    <section id='portfolio'>
      <div>
        <Container className='porfolio_header'>
          <Typography variant="h2" component="div">
            Portfolio
          </Typography>
        </Container>

        <Container>
          <div className='container portfolio_container'>
            {
              data.map(({ id, name, desc, demo, img, tag }) => {
                return (
                  <Container>
                    <Grid cointainer spacing={1}>
                      <Grid key={id} item>
                        <div key={id} className='portfolio_item'>
                          <Container>
                            <Chip className="item_tag" label={tag} color="primary" />
                          
                            <img className="item_img" src={img} alt={name} />
                          </Container>

                          <Container className='item_content'>
                            <Typography gutterBottom variant="h5" component="div">
                              {name}
                            </Typography>
                            <Typography variant="body2" component="div">
                              {desc}
                            </Typography>
                          </Container>

                          <Container className='item_action'>
                            <Button size="small" variant="outlined" color="secondary"
                              href={demo} target="_blank">
                              View Project
                            </Button>
                          </Container>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                )
              })
            }
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Portfolio;
