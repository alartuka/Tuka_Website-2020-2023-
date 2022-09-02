import React from 'react';
import PropTypes from "prop-types";

const Gallary = ({ projectName, description, pic}) => (
    <div>
        <h5> {projectName} </h5>
        <p> {description} </p>
        <img src={pic} alt="Project Image" />
    </div>

);

Gallary.propTypes = {
    projectName: PropTypes.string,
    description: PropTypes.string,
    pic: PropTypes.string,
};

Gallary.defaultProps = {
    projectName: null,
    description: null,
    pic: null,
};

export default Gallary;