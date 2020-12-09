import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ClothesAPI from '../../../Api/ClothesAPI';
import './MainDetail.css'
import alertify from 'alertifyjs'
import CartsAPI from '../../../Api/CartsAPI';
import queryString from 'query-string';
import { useSelector } from 'react-redux';

MainDetail.propTypes = {

};

function MainDetail(props) {

    const { id } = useParams()

    const idUser = useSelector(state => state.Session.idUser)

    console.log(id)

    const [detail, setDetail] = useState({})

    const [quality, setQuality] = useState('1')

    const [addCart, setAddCart] = useState({
        idProduct: '',
        idUser: '',
        count: ''
    })

    const handlerDown = () => {

        if (parseInt(quality) === 1){
            return
        }

        const newQuality = parseInt(quality) - 1
        setQuality(newQuality)
    }

    const handlerUp = () => {

        if (parseInt(quality) === 10){
            return
        }

        const newQuality = parseInt(quality) + 1
        setQuality(newQuality)
    }

    const handlerAddCart = () => {

        //Để thay đổi state addCart và load lại hàm useEffect
        setAddCart({
            idProduct: id,
            idUser: idUser, //Tạm thời set cứng vì chưa có session
            count: quality
        })

        alertify.set('notifier','position', 'bottom-left');
        alertify.success('Bạn Đã Thêm Hàng Thành Công!');

        setQuality('1')

    }

    const handlerChangeText = (e) => {

        if (parseInt(quality) === 10){
            return
        }

    }

    useEffect(() => {

        const fetchData = async () => {

            //Lần đầu sẽ không thực hiện insert được vì addCart = ''
            if (addCart.idProduct !== '') {

                //Nó sẽ lấy idUser và idPro và count cần update để gửi lên server
                const params = {
                    idUser: addCart.idUser,
                    count: addCart.count
                }

                const query = queryString.stringify(params)

                const newQuery = addCart.idProduct + "?" + query

                console.log(newQuery)

                const response = await CartsAPI.postCart(newQuery)
                console.log(response)
            }

            const response = await ClothesAPI.getDetail(id)
            console.log(response)

            setDetail(response)

        }

        fetchData()

    }, [addCart])

    return (
        <div className="container">
            <div className="wrapper_detail">
                <div className="row">
                    <div className="col-sm">
                        <img className="image_detail" src={detail.image} alt="" />
                    </div>
                    <div className="col-sm">
                        <div className="group_content_detail">
                            <h4>{detail.name}</h4>
                            <p>{detail.price}$</p>
                            <h5>Show Description:</h5>
                            <span>{detail.description}</span>
                            <div className="form-group group_quality_detail">
                                <h6>Quality:</h6>
                                <button onClick={handlerDown}>-</button>
                                &nbsp;
                                <input type="text" value={quality} onChange={handlerChangeText}/>
                                &nbsp;
                                <button onClick={handlerUp}>+</button>
                            </div>
                            <div className="group_add_item">
                                <i className='bx bx-cart-alt fix_icon'></i>
                                <a className="add_item" onClick={handlerAddCart}>ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainDetail;