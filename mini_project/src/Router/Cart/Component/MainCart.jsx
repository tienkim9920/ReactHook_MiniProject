import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ListCart from '../ListCart/ListCart';
import './MainCart.css'
import CartsAPI from '../../../Api/CartsAPI';

MainCart.propTypes = {

};

function MainCart(props) {

    const id = useParams()

    const idUser = id.id

    const [cart, setCard] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const response = await CartsAPI.getCarttAll(idUser)

            console.log(response)

            setCard(response)

        }

        fetchData()

    }, [])

    const onUpdateCount = async (getUser, getProduct, getCount) => {
        console.log("Count: " + getCount + ", idUser: " + getUser + ", idProduct: " + getProduct)
    }

    return (
        <div className="wapper_cart">
            <ListCart ListCart={cart} onUpdateCount={onUpdateCount} />
        </div>
    );
}

export default MainCart;