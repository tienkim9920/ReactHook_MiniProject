import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../../Global/Image'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import SignInLink from '../NavUser/SignInLink';
import SignOutLink from '../NavUser/SignOutLink';
import { useDispatch, useSelector } from 'react-redux';
import { addSession } from '../../Redux/action/ActionSession';

Header.propTypes = {
    userLogin: PropTypes.string
};

Header.defaultProps = {
    userLogin: ''
}


function Header(props) {

    const dispatch = useDispatch()

    //Sau khi F5 nó sẽ kiểm tra nếu phiên làm việc của Session vẫn còn thì nó sẽ tiếp tục
    // đưa dữ liệu vào Redux
    if (sessionStorage.getItem('idUser')){
        const action = addSession(sessionStorage.getItem('idUser'))
        dispatch(action)
    }

    var idUser = useSelector(state => state.Session.idUser)

    console.log(idUser)

    var loginUser

    if (!idUser){
        loginUser = <SignInLink />      
    }else{
        loginUser = <SignOutLink />
    }


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
                        {loginUser}
                        {
                            idUser && 
                            <div className="right-menu">
                                <Link to={`/cart/${idUser}`} style={{textDecoration: 'none'}}>
                                    <div className="cart-btn">
                                        <i className='bx bx-cart-alt'></i>
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;