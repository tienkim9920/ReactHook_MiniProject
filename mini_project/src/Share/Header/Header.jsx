import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Global/Image'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

Header.propTypes = {

};


function Header(props) {

    return (
        <div className="Header" id="navbar">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="Header_title d-flex flex-row">
                        <Link to="/home" className="d-flex link_home">
                            <img className="Logo_title" src={Image.LOGO_3.toString()} alt="" />
                            <p>Gentlmen</p>
                        </Link>
                    </div>
                    <div className="Navigation d-flex">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/photo">Photo</Link></li>
                        <div className="right-menu">
                            <div className="cart-btn">
                                <i className='bx bx-cart-alt'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;