import React from 'react';
import '../styles/Portfolio.css';
import Button from '@mui/material/Button';
import data from './Portfolio assets/Portfolio Data/data'
import { Stack, Container, Grid, Typography, CardActionArea, CardActions, Card, CardContent, CardMedia, Chip } from '@mui/material';


function Portfolio() {
  return (
    <section id='portfolio'>
      <div>
        <Container className='porfolio_header'>
          <Typography variant="h2" component="div">
            Portfolio
          </Typography>
          {/* <Stack sx={{ pt: 1, py: 3, px: 45 }} direction='row' spacing={2}>
            <Button variant='contained'>Technical + Design</Button>
            <Button variant='contained'>Art + Photography</Button>
          </Stack> */}
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

                        {/* <Card key={id} className="portfolio_item">
                          <CardContent>
                            <Chip className="item_tag" label={tag} color="primary" />
                            <CardMedia className="item_img"
                              component="img" height="240" title={name}
                              image={img} alt={name} />
                            <Typography gutterBottom variant="h5" component="div">
                              {name}
                            </Typography>
                            <Typography variant="body2" component="div">
                              {desc}
                            </Typography>
                            </CardContent>
                          <CardActionArea>
                            <CardActions>
                              <Button size="small" variant="outlined" color="secondary"
                                href={demo} target="_blank">
                                View Project
                              </Button>
                            </CardActions>
                          </CardActionArea>
                        </Card> */}

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
    // <main>
    //   <Box sx={{bgcolor: 'pink', pt: 2, pb: 2}} >
    //     <Container maxWidth='sm'>
    //       <Typography component='h1' variant='h2'
    //         align='center' gutterBottom>
    //           Portfolio
    //         </Typography>
    //       <Typography variant="h5" align="center" color="text.secondary" paragraph>
    //         Something short and leading about the collection below—its contents,
    //         the creator, etc. Make it short and sweet, but not too short so folks
    //         don&apos;t simply skip over it entirely.
    //       </Typography>
    //       <Stack sx={{ pt: 4 }} direction='row' spacing={2}>
    //         <Button variant='contained'>Technical + Design</Button>
    //         <Button variant='outlined' color='secondary'>Art + Photography</Button>
    //       </Stack>
    //     </Container>
    //   </Box>

    // <Container >
    //    <div className='portfolio_container'>
    //     {
    //       data.map(({ id, name, desc, demo, img }) => {
    //         return (
    //           <Container maxWidth="md">
    //             <Box
    //             p={1}
    //             >
    //               <Grid cointainer spacing={1}>
    //                 <Grid key={id} item>
    //                   <Card key={id} className="portfolio_item"
    //                     sx={{
    //                       height: '100%',
    //                       display: 'flex',
    //                       flexDirection: 'column',
    //                       maxWidth: 345
    //                     }}
    //                   >
    //                     <CardActionArea>
    //                       <CardMedia className="item_img"
    //                         component="img" height="240" title={name}
    //                         image={img} alt={name} />
    //                       <CardContent>
    //                         <Typography gutterBottom variant="h5" component="div">
    //                           {name}
    //                         </Typography>
    //                         <Typography variant="body2" component="div">
    //                           {desc}
    //                         </Typography>
    //                       </CardContent>
    //                     </CardActionArea>
    //                     <CardActions>
    //                       <Button size="small" variant="outlined" color="secondary"
    //                         href={demo} target="_blank">
    //                         View Project
    //                       </Button>
    //                     </CardActions>
    //                   </Card>
    //                 </Grid>
    //               </Grid>
    //             </Box>
    //           </Container>
    //         )
    //       })
    //     }
    //   </div>
    //   </Container>
    // </main>