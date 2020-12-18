import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { hideLoader } from '../../../Redux/action/ActionLoader';

Success.propTypes = {
    
};

function Success(props) {

    // const dispatch = useDispatch()

    // // Hàm này để ẩn cái loader :))
    // useEffect(() => {

    //     const loaderCSS = () => {

    //         const action = hideLoader(false)
    //         dispatch(action)

    //     }

    //     loaderCSS()

    // }, [])

    return (
        <div className="container">
            <h1 className="success_h1">Bạn Đã Đặt Hàng Thành Công!</h1>
            <p className="success_p">Vui Lòng Kiểm Tra Lại Email.</p>
        </div>
    );
}

export default Success;