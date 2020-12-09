import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CartsAPI from '../../../Api/CartsAPI';
import queryString from 'query-string';


ListCart.propTypes = {
    ListCart: PropTypes.array,
    onUpdateCount: PropTypes.func,
    onDeleteCart: PropTypes.func
};

ListCart.defaultProps = {
    ListCart: [],
    onUpdateCount: null,
    onDeleteCart: null
}

function ListCart(props) {

    const { ListCart, onUpdateCount, onDeleteCart } = props

    const [count, setCount] = useState('1')

    function handlerChangeText(e) {

        setCount(e.target.value)
        console.log(count)

    }

    
    const handlerDown = (getIdUser, getIdProduct, getCount) => {

        if (!onUpdateCount){
            return
        }

        if (getCount === 1){
            return
        }

        //Trước khi trả dữ liệu về component cha thì phải thay đổi biến count
        const updateCount = parseInt(getCount) - 1

        onUpdateCount(getIdUser, getIdProduct, updateCount)

    }

    const handlerUp = (getIdUser, getIdProduct, getCount) => {

        if (!onUpdateCount){
            return
        }

        //Trước khi trả dữ liệu về component cha thì phải thay đổi biến count
        const updateCount = parseInt(getCount) + 1

        onUpdateCount(getIdUser, getIdProduct, updateCount)

    }

    const handlerDelete = (getUser, getProduct) => {

        if (!onDeleteCart){
            return
        }

        onDeleteCart(getUser, getProduct)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-main table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Images</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Sub Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ListCart && ListCart.map(value => (
                                        <tr key={value._id}>
                                            <td className="thumbnail-img">
                                                <a><img className="img-fluid" src={value.image} /></a>
                                            </td>
                                            <td className="name-pr">
                                                <a>{value.name}</a>
                                            </td>
                                            <td className="price-pr">
                                                <p>{value.price} $</p>
                                            </td>
                                            <td className="quantity-box group_quality_detail">
                                                <button onClick={() => handlerDown(value.idUser, value.idProduct, value.count)}>-</button>
                                                &nbsp;
                                                <input type="text"
                                                    className="c-input-text qty text"
                                                    value={value.count}
                                                    onChange={handlerChangeText}
                                                />
                                                &nbsp;
                                                <button onClick={() => handlerUp(value.idUser, value.idProduct, value.count)}>+</button>
                                            </td>
                                            <td className="price-pr">
                                                <p>{value.price * value.count} $</p>
                                            </td>
                                            <td className="remove-pr">
                                                <a className="btn btn-danger" onClick={() => handlerDelete(value.idUser, value.idProduct)}>X</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCart;