import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import alertify from 'alertifyjs';
import { useSelector } from 'react-redux';

Checkout.propTypes = {
    ListCart: PropTypes.array,
};

Checkout.defaultProps = {
    ListCart: []
}

function Checkout(props) {

    const { ListCart } = props

    const [redirect, setRedirect] = useState(false)

    const idUser = useSelector(state => state.Session.idUser)

    let sum = 0;

    const total = ListCart.map(value => {
        return sum += parseInt(value.price) * parseInt(value.count)
    })

    console.log(sum)

    const handlerCheckout = () => {
        console.log("True")

        if (!sessionStorage.getItem('idUser')){
            alertify.set('notifier','position', 'bottom-left');
            alertify.error('Vui Lòng Kiểm Tra Đăng Nhập.')
            return
        }else{
            setRedirect(true)
        }
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <h3 className="h3_total">Total: {sum}$</h3>
            </div>
            <div className="btn_checkout d-flex justify-content-end">
                {
                    redirect && <Redirect to={`/cart/${idUser}/order`} />
                }
                <button onClick={handlerCheckout}>Checkout</button>
            </div>
        </div>
    );
}

export default Checkout;