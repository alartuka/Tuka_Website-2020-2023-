import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const projGal = ({ projectName, description, demoLink, codeLink, pic }) => (
    <div>
        <h5> {projectName} </h5>
        <p> {description} </p>
        <img src={pic} alt="Project Image" />

        <Link to={demoLink}>
            <button type="button">Demo</button>
        </Link>

        <Link to={codeLink}>
            <button type="button">Code</button>
        </Link>
    </div>

);

projGal.propTypes = {
    projectName: PropTypes.string,
    description: PropTypes.string,
    demoLink: PropTypes.string,
    codeLink: PropTypes.string,
    pic: PropTypes.string,
};

projGal.defaultProps = {
    projectName: null,
    description: null,
    demoLink: null,
    codeLink: null,
    pic: null,
};

export default projGal;
