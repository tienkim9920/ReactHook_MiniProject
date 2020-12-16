import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ListCart from '../ListCart/ListCart';
import './MainCart.css'
import CartsAPI from '../../../Api/CartsAPI';
import queryString from 'query-string';
import alertify from 'alertifyjs'
import Checkout from '../ListCart/Checkout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartTemp, updateCartTemp } from '../../../Redux/action/ActionCartTemp';

MainCart.propTypes = {

};

function MainCart(props) {

    //Get listCart từ redux khi user chưa đăng nhập
    let listCart = useSelector(state => state.CartTemp.listCart)

    const dispatch = useDispatch()

    const id = useParams()

    const idUser = id.id

    const [cart, setCard] = useState([])

    //State này dùng để load dữ liệu lại khi người dùng thay đổi số lượng
    const [load, setLoad] = useState({

        //State Update
        idUser: '',
        idProduct: '',
        count: '',

        // StateDelete
        idUserDelete: '',
        idProductDelete: '',

    })

    const [loadRedux, setLoadRedux] = useState({
        idProduct: '',
        count: ''
    })

    useEffect(() => {

        const fetchData = async () => {

            //Lần đầu sẽ không thực hiện delete được vì deleteCart.idProductDelete = ''
            if (load.idProductDelete !== ''){

                const params = {
                    idProduct: load.idProductDelete
                }

                const query = queryString.stringify(params)

                const newQuery = load.idUserDelete + "?" + query

                console.log(newQuery)

                const response = await CartsAPI.deleteCart(newQuery)
                console.log(response)

                alertify.set('notifier','position', 'bottom-left');
                alertify.error('Bạn Đã Xóa Hàng Thành Công!');

                setLoad({
                    //State Update
                    idUser: '',
                    idProduct: '',
                    count: '',

                    //State Delete
                    idUserDelete: '',
                    idProductDelete: '',
                })

            }

            //Lần đầu sẽ không thực hiện update được vì load = ''
            if (load.idUser !== '') {

                //Nó sẽ lấy idUser và idPro và count cần update để gửi lên server
                const params = {
                    idProduct: load.idProduct,
                    count: load.count
                }

                const query = queryString.stringify(params)

                const newQuery = load.idUser + "?" + query

                console.log(newQuery)

                const response = await CartsAPI.patchUpdateCount(newQuery)
                console.log(response)
            }


            if (sessionStorage.getItem('idUser')){
                const response = await CartsAPI.getCarttAll(idUser)

                console.log(response)
                setCard(response)
            }

        }

        fetchData()

    }, [load])


    //Hàm này dùng để Load dữ liệu ở Redux
    useEffect(() => {

        const fetchDataRedux = () => {

            if (!sessionStorage.getItem('idUser')){
                setCard(listCart)
            }

        }

        fetchDataRedux()

    }, [loadRedux])


    //Hàm này dùng để truyền xuống cho component con xử và trả ngược dữ liệu lại component cha 
    const onUpdateCount = (getUser, getProduct, getCount) => {
        console.log("Count: " + getCount + ", idUser: " + getUser + ", idProduct: " + getProduct)

        if (sessionStorage.getItem('idUser')){
            //Sau khi nhận được dữ liệu ở component con truyền lên thì sẽ setLoad
            //Để thay đổi state load và load lại hàm useEffect
            setLoad({
                //State Update
                idUser: getUser,
                idProduct: getProduct,
                count: getCount,

                //State Delete
                idUserDelete: '',
                idProductDelete: '',
            })
        }else{

            //Nếu không có phiên làm việc của Session User thì mình sẽ xử lý với Redux
            const data = {
                idProduct: getProduct,
                idUser: getUser,
                count: getCount
            }

            //Đưa dữ liệu vào Redux
            const action = updateCartTemp(data)
            dispatch(action)

            //set state loadRedux để nó load lại hàm useEffect để tiếp tục lấy dữ liệu từ redux
            setLoadRedux({
                idProduct: getProduct,
                count: getCount
            })
        }

    }

    //Hàm này dùng để truyền xuống cho component con xử và trả ngược dữ liệu lại component cha 
    const onDeleteCart = (getUser, getProduct) => {
        console.log( "idUser: " + getUser + ", idProduct: " + getProduct)

        if (sessionStorage.getItem('idUser')){
            //Sau khi nhận được dữ liệu ở component con truyền lên thì sẽ setLoad
            //Để thay đổi state deleteCart và load lại hàm useEffect
            setLoad({
                //State Update
                idUser: '',
                idProduct: '',
                count: '',

                //State Delete
                idUserDelete: getUser,
                idProductDelete: getProduct,
            })
        }else{

            //Nếu không có phiên làm việc của Session User thì mình sẽ xử lý với Redux
            const data = {
                idProduct: getProduct,
                idUser: getUser,
            }

            //Đưa dữ liệu vào Redux
            const action = deleteCartTemp(data)
            dispatch(action)

            alertify.set('notifier','position', 'bottom-left');
            alertify.error('Bạn Đã Xóa Hàng Thành Công!');

            //set state loadRedux để nó load lại hàm useEffect để tiếp tục lấy dữ liệu từ redux
            setLoadRedux({
                idProduct: getProduct,
                count: ''
            })
            
        }

    }


    // ----------------------------------------Xử Lý Với Redux Khi User Chưa Đăng Nhập-------------------------------//


    return (
        <div className="wapper_cart">
            <ListCart ListCart={cart} onUpdateCount={onUpdateCount} onDeleteCart={onDeleteCart}/>

            <Checkout ListCart={cart}/>
        </div>
    );
}

export default MainCart;