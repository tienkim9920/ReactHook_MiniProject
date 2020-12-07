import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CartsAPI from '../../../Api/CartsAPI';
import queryString from 'query-string';


ListCart.propTypes = {
    ListCart: PropTypes.array,
    onUpdateCount: PropTypes.func
};

ListCart.defaultProps = {
    ListCart: [],
    onUpdateCount: null
}

function ListCart(props) {

    const { ListCart, onUpdateCount } = props

    const [count, setCount] = useState('1')

    const [update, setUpdate] = useState({
        idUser: 'user123',
        idProduct: '5fca45495b27480864e3b2e3',
        count: '6'
    })

    function handlerChangeText(e) {

        setCount(e.target.value)
        console.log(count)

    }

    useEffect(() => {

        const fetchData = async () => {
            
            const params = {
                idProduct: update.idProduct,
                count: update.count
            }

            const query = queryString.stringify(params)

            const newQuery = update.idUser + "?" + query

            const response = await CartsAPI.patchUpdateCount(newQuery)
            console.log(response)

        }

        fetchData()

    }, [])


    //Nó sẽ lấy idUser và idPro và count cần update để gửi lên server
    const handlerDown = (getIdUser, getIdProduct, getCount) => {

        if (!onUpdateCount){
            return
        }

        // onUpdateCount(getIdUser, getIdProduct, getCount)

    }

    const handlerUp = (getIdUser, getIdProduct, getCount) => {

        if (!onUpdateCount){
            return
        }

        // onUpdateCount(getIdUser, getIdProduct, getCount)

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
                                            <td className="remove-pr">
                                                <a className="btn btn-danger">X</a>
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