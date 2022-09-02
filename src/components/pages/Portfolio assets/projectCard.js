// import React from 'react'
// import { Link } from 'react-router-dom';
// import projectImg from './projImgs/ProPy.png';
// // const projects = require("./Portfolio Data/data");

// function projectCard() {
//   return (
//     <div>
//         <Link to="/projects" className="projectCard_Img">
//         <img src={projectImg} alt="Overview image" />
//         </Link>
//         <div className='projectCard_Info'>
//             <Link to="#">
//                 <h3 className='projectCard_Title'>Project 1: ProPy</h3>
//             </Link>
//             <p className='projectCard_desc'>
//                 Lorem ipsum dolor sit amet con......jkjbk...jhjh klink dfclh
//                 jkhkj jnyb, rdvhoo hjhu lokj, kirk bir yur akmm jhu.
//                 </p>
//         </div>
//     </div>
//   )
// }

// export default projectCard

import React from 'react';
import CardLayout from './CardLayout';

const data = require("./Portfolio Data/Technical.json");

function projectCard() {
    return (
        <div>
            {
            data.map(({id, name, img, desc, demo}) => (
                <CardLayout
                    name={name}
                    desc={desc}
                    demo={demo}
                    img={img}
                />
            ))};
        </div>
    );
};

export default projectCard