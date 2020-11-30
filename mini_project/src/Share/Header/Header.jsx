import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Global/Image'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

Header.propTypes = { };

function Header(props) {
    return (
        <div className="Header" id="navbar">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="Header_title d-flex flex-row">
                        <img className="Logo_title" src={Image.LOGO_3.toString()} alt=""/>
                        <p>Gentlmen</p>
                    </div>
                    <div className="Navigation d-flex">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/photo">Photo</Link></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">shop</a></li>
                        <li><a href="#">cart</a></li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;