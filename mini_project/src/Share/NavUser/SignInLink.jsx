import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

SignInLink.propTypes = {
    
};

function SignInLink(props) {
    return (
        <li>
            <Link to="/login">Log In</Link>
        </li>
    );
}

export default SignInLink;