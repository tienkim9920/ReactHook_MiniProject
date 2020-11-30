import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


MainPhoto.propTypes = {
    
};

function MainPhoto(props) {
    return (
        <div>
            <Link to="/photo/add">Go To Add Photo</Link>
        </div>
    );
}

export default MainPhoto;