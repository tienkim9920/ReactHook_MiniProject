import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import Image from '../../Global/Image';
import AccountsAPI from '../../Api/AccountsAPI';
import { Link, Redirect } from 'react-router-dom';
import { addSession } from '../../Redux/action/ActionSession';
import { useDispatch, useSelector } from 'react-redux';
import './Auth.css'
import CartsAPI from '../../Api/CartsAPI';
import queryString from 'query-string'


SignIn.propTypes = {

};

function SignIn(props) {

    const listCart = useSelector(state => state.CartTemp.listCart)

    const [accounts, setAccounts] = useState([])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorEmail, setErrorEmail] = useState(true)
    const [errorPass, setErrorPass] = useState(true)

    const [redirect, setRedirect] = useState(false)

    const [checkPush, setCheckPush] = useState(false)

    const dispatch = useDispatch()

    //Hàm này để lấy tất cả các account của User
    useEffect(() => {

        //Gọi API lấy tất cả các Accounts
        const fetchAccount = async () => {

            const accounts = await AccountsAPI.getAccounts()
            console.log(accounts)

            setAccounts(accounts)
        }

        fetchAccount()

    }, [])


    const onChangeTextEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }

    const onChangeTextPassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()

        const account = accounts.find(value => {
            return value.email === email
        })

        if (account){
            
            if (account.password !== password){
                setErrorPass(false)
                setErrorEmail(true)
                return
            }else{
                //Sau khi đăng nhập thành công nó sẽ tạo ra 1 session
                sessionStorage.setItem('idUser', account._id)
                
                //Và sau đó đưa idUser vào redux
                const action = addSession(sessionStorage.getItem('idUser'))
                dispatch(action)

                setCheckPush(true)
            }

        }else{
            setErrorEmail(false)
            return
        }

    }

    useEffect(() => {
        const fetchData = async () => {

            //Lần đầu sẽ không thực hiện insert được vì addCart = ''
            if (checkPush === true) {

                for (let i = 0; i < listCart.length; i++){

                    //Nó sẽ lấy idUser và idPro và count cần update để gửi lên server
                    const params = {
                        idUser: sessionStorage.getItem('idUser'),
                        count: listCart[i].count
                    }

                    const query = queryString.stringify(params)

                    const newQuery = listCart[i].idProduct + "?" + query

                    console.log(newQuery)

                    const response = await CartsAPI.postCart(newQuery)
                    console.log(response)

                }

                setRedirect(true)
            }

        }

        fetchData()

    }, [checkPush])


    return (
        <div>
            <Banner title="Login" backgroundUrl={Image.BG_4}/>

            <div className="container fix_Container">
                <div className="d-flex justify-content-center py-5">
                    <form className="w-75" onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" onChange={onChangeTextEmail} placeholder="Enter email" />
                            {
                                !errorEmail && <span className="text-danger">Vui Lòng Kiểm Tra Lại Email!</span>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" onChange={onChangeTextPassword} placeholder="Password" />
                            {
                                !errorPass && <span className="text-danger">Vui Lòng Kiểm Tra Lại Password!</span>
                            }
                        </div>
                        <li><Link to="/signup">Click here to register for a new account</Link></li>
                        {redirect && <Redirect to='/home' />}
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default SignIn;