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
import { addIdTemp } from '../../Redux/action/ActionCartTemp';

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
    }else{
        //Đưa idTemp vào Redux temp để tạm lưu trữ
        sessionStorage.setItem('idTemp', 'abc999')
        const action = addIdTemp(sessionStorage.getItem('idTemp'))
        dispatch(action)
    }

    //Get IdUser từ redux khi user đã đăng nhập
    var idUser = useSelector(state => state.Session.idUser)

    //Get idtemp từ redux khi user chưa đăng nhập
    var idTemp = useSelector(state => state.CartTemp.idTemp)

    console.log(idUser)

    console.log(idTemp)

    var loginUser

    if (!idUser){
        loginUser = <SignInLink />      
    }else{
        if (!sessionStorage.getItem('idUser')){
            loginUser = <SignInLink /> 
        }else{
            loginUser = <SignOutLink />
        }
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
                        {
                            idUser && <li><Link to={`/history/${idUser}`}>History</Link></li>
                        }
                        {loginUser}
                        <div className="right-menu">
                            <Link
                                
                                //Nếu user đã đăng nhập thì sẽ Link để cart User
                                //Nếu user chưa đăng nhập thì sẽ Link đển idTemp để lấy dữ liệu cart trong redux
                                to={ sessionStorage.getItem('idUser') ? `/cart/${idUser}` : `/cart/${idTemp}`} 
                                style={{textDecoration: 'none'}}
                                >
                                <div className="cart-btn">
                                    <i className='bx bx-cart-alt'></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;