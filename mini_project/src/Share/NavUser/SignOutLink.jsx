import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSession } from '../../Redux/action/ActionSession';

SignOutLink.propTypes = {
    
};

function SignOutLink(props) {

    const dispatch = useDispatch()

    const handlerClear = () => {

        sessionStorage.clear()

        const action = deleteSession('')
        dispatch(action)
        
    }

    return (
        <li onClick={handlerClear}>
            <Link to="/login">Log Out</Link>
        </li>
    );
}

export default SignOutLink;