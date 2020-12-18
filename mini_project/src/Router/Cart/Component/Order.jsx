import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InfoOrder from '../ListCart/InfoOrder';
import ListOrder from '../ListCart/ListOrder';
import CartsAPI from '../../../Api/CartsAPI';
import { useSelector } from 'react-redux';

Order.propTypes = {

};

function Order(props) {

    const [loader, setLoader] = useState(false)

    const [carts, setCarts] = useState()

    const idUser = sessionStorage.getItem('idUser')

    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorAddress, setErrorAddress] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)

    const onChangeName = (value) => {
        console.log("Value: ", value)
        setFullName(value)
    }

    const onChangeEmail = (value) => {
        console.log("Value: ", value)
        setEmail(value)
    }

    const onChangeAddress = (value) => {
        console.log("Value: ", value)
        setAddress(value)
    }

    const onChangePhone = (value) => {
        console.log("Value: ", value)
        setPhone(value)
    }


    //--------------------Validation-----------------------//

    const onErrorName = (value) => {
        console.log("Value: ", value)
        setErrorName(value)
    }

    const onErrorEmail = (value) => {
        console.log("Value: ", value)
        setErrorEmail(value)
    }

    const onErrorAddress = (value) => {
        console.log("Value: ", value)
        setErrorAddress(value)
    }

    const onErrorPhone = (value) => {
        console.log("Value: ", value)
        setErrorPhone(value)
    }

    useEffect(() => {

        const fetchData = async () => {

            const response = await CartsAPI.getCarttAll(idUser)
            console.log(response)

            setCarts(response)

        }

        fetchData()

    }, [])

    const onChangeLoader = (value) => {
        console.log("Loader: ", value)
        setLoader(value)
    }

    return (
        <div className="container">
            <h1 className="text-center p-5">Ordering Information</h1>
            <div className="row justify-content-center">

                {
                    loader && 
                    (<div className="wrapper_loader">
                        <div className="loader"></div>
                    </div>)
                }

                <InfoOrder
                    onChangeName={onChangeName}
                    onChangeEmail={onChangeEmail}
                    onChangeAddress={onChangeAddress}
                    onChangePhone={onChangePhone}

                    errorName={errorName}
                    errorEmail={errorEmail}
                    errorAddress={errorAddress}
                    errorPhone={errorPhone}
                />
                <ListOrder
                    ListCart={carts}
                    fullname={fullname}
                    email={email}
                    address={address}
                    phone={phone}

                    onErrorName={onErrorName}
                    onErrorEmail={onErrorEmail}
                    onErrorAddress={onErrorAddress}
                    onErrorPhone={onErrorPhone}

                    onChangeLoader={onChangeLoader}
                />
            </div>
        </div>
    );
}

export default Order;