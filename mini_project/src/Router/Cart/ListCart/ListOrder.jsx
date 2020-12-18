import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import EmailAPI from '../../../Api/EmailAPI';
import queryString from 'query-string'
import { useDispatch } from 'react-redux';
import { showLoader } from '../../../Redux/action/ActionLoader';

ListOrder.propTypes = {
    ListCart: PropTypes.array,
    fullname: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,

    onErrorName: PropTypes.func,
    onErrorEmail: PropTypes.func,
    onErrorAddress: PropTypes.func,
    onErrorPhone: PropTypes.func,

    onChangeLoader: PropTypes.func
};

ListOrder.defaultProps = {
    ListCart: [],
    fullname: '',
    email: '',
    address: '',
    phone: '',

    onErrorName: null,
    onErrorEmail: null,
    onErrorAddress: null,
    onErrorPhone: null,

    onChangeLoader: null
}

function ListOrder(props) {

    const { ListCart, 
            fullname, 
            email, 
            address, 
            phone, 
            onErrorName, 
            onErrorEmail, 
            onErrorAddress, 
            onErrorPhone, 
            onChangeLoader } = props

    const idUser = sessionStorage.getItem('idUser')

    const [sendmail, setSendMail] = useState(false)

    const [redirect, setRedirect] = useState(false)

    const dispatch = useDispatch()

    let sum = 0;

    const total = ListCart.map(value => {
        return sum += parseInt(value.price) * parseInt(value.count)
    })

    console.log(sum)

    const handlerOrder = () => {
        
        if (fullname === ''){
            onErrorName(true)
            return
        }else{
            onErrorName(false)
            if (email === ''){
                onErrorEmail(true)
                return
            }else{
                onErrorEmail(false)
                if (address === ''){
                    onErrorAddress(true)
                    return
                }else{
                    onErrorAddress(false)
                    if (phone === ''){
                        onErrorPhone(true)
                        return
                    }else{
                        onErrorPhone(false)
                    }
                }
            }
        }

        //Ghi đầy đủ thông tin sẽ sẽ cập nhật lại state sendmail để chạy useEffect
        setSendMail(true)

    }

    //Hàm này dùng để gửi mail và nó hoạt động phụ thuộc vào state sendmail
    useEffect(() => {

        const SendMail = async () => {
            if (sendmail){

                // Gọi hàm onChangeLoader để thay đổi thành true truyền ngược lên component cha Order
                onChangeLoader(true)

                const param = {
                    to: email,
                    idUser: idUser,
                    fullname: fullname,
                    address: address,
                    phone: phone
                }

                const query = queryString.stringify(param)

                const newQuery = '?' + query

                const response = await EmailAPI.SendMail(newQuery)
                console.log(response)

                setSendMail(false)

                setRedirect(true)

            }

        }

        SendMail()

    }, [sendmail])

    return (
        <div className="col-8">
            <div className="container">
                <div className="row">
                    <div className="table-main table-responsive fix_table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Images</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Sub Total</th>
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
                                            <td className="price-pr">
                                                <p>{value.count}</p>
                                            </td>
                                            <td className="price-pr">
                                                <p>{value.price * value.count} $</p>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <h3 className="h3_total">Total: {sum}$</h3>
                </div>

                <div className="btn_checkout d-flex justify-content-end">
                    {
                        redirect && <Redirect to={`/cart/${idUser}/success`} />
                    }
                    <button onClick={handlerOrder}>Order</button>
                </div>
            </div>
        </div>
    );
}

export default ListOrder;