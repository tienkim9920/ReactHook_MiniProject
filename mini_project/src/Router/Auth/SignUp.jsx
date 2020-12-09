import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import { useDispatch } from 'react-redux';
import Image from '../../Global/Image';
import Notification from './Notification';
import './Auth.css'
import AccountsAPI from '../../Api/AccountsAPI';
import queryString from 'query-string'

SignUp.propTypes = {

};

function SignUp(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [success, setSuccess] = useState(false)

    const dispatch = useDispatch()

    const [account, setAccount] = useState({
        fullname: '',
        email: '',
        password: ''
    })

    const onChangeName = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const onChangeTextEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }

    const onChangeTextPassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    //Khi bấm đăng ký nó sẽ thay đổi state success và hiện modal thông báo
    //Và nó sẽ setAccount để chạy lại useEffect
    const onSubmitForm = (e) => {
        e.preventDefault()

        setAccount({
            fullname: name,
            email: email,
            password: password
        })

        setSuccess(true)

        setName('')
        setEmail('')
        setPassword('')

        console.log(success)
    }

    //function này sẽ lấy dữ liệu từ component Notification truyền lên và thay đổi state
    const onChangeSuccess = (value) => {
        console.log("Value: ", value)

        //Set state bằng false để nó ẩn Notification
        setSuccess(false)
    }


    useEffect(() => {

        const postData = async () => {
            
            //useEffect lần đầu sẽ không chạy được vì account.email = ''
            if (account.email !== ''){

                const params = {
                    fullname: account.fullname,
                    email: account.email,
                    password: account.password
                }

                const query = queryString.stringify(params)

                const newQuery = '?' + query

                const response = await AccountsAPI.postAccounts(newQuery)
                console.log(response)

            }

        }

        postData()

    }, [account])

    return (
        <div>
            <Banner title="Sign Up" backgroundUrl={Image.BG_4} />

            { success && <Notification onChangeSuccess={onChangeSuccess}/>}

            <div className="container fix_Container">
                <div className="d-flex justify-content-center py-5">
                    <form className="w-75" onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Full Name:</label>
                            <input type="text" className="form-control" value={name} onChange={onChangeName} placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address:</label>
                            <input type="email" className="form-control" value={email} onChange={onChangeTextEmail} placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password:</label>
                            <input type="password" className="form-control" value={password} onChange={onChangeTextPassword} placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default SignUp;