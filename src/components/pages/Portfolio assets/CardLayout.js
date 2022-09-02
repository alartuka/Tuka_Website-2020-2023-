// import React from 'react';
// import { Link } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from "@mui/material/Grid";

// function Cardlayout({ name, desc, demo, img }) {
//     return (
//         // <div>
//             <Grid container>
//                 <Grid item>
//                     <Card sx={{ maxWidth: 345 }}>
//                         <CardMedia
//                             component="img"
//                             height="140"
//                             image={img}
//                             alt="project overview"
//                         />
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 {name}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 {desc}
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <Button component={Link} to={demo} variant="contained"
//                                 size="small">View project</Button>
//                             {/* <Button size="small">Learn More</Button> */}
//                         </CardActions>
//                     </Card>
//                 </Grid>
//             </Grid>
//         // </div>
//     );
// };

// export default Cardlayout

// import React from "react";
// import { makeStyles } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";


// function Cardlayout({ name, desc, demo, img }) {
//   return (
//     <Grid container>
//       <Grid item>
//         <Card >
//           <Typography >
//             {name}   
//           </Typography>

//           <Typography variant="body2" color="text.secondary">
//             {desc} 

//           </Typography>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

// export default Cardlayout;


import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Cardlayout({ name, desc, demo, img }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={demo}>
          <Button variant="contained" color="primary" size="small">
            View project
          </Button>
        </Link>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

export default Cardlayout