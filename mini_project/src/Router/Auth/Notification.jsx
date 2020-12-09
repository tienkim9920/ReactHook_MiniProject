import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Auth.css'

Notification.propTypes = {
    onChangeSuccess: PropTypes.func,
};

Notification.defaultProps = {
    onChangeSuccess: null,
}

function Notification(props) {

    const { onChangeSuccess } = props
    
    const handlerShow = (value) => {
        
        console.log(value)

        onChangeSuccess(value)
    }


    return (
        <div className="modal_signup">
            <div className="wapper-modal">
                <div className="group-modal">
                    <h3>Thông Báo</h3>
                    <p>Bạn Đã Đăng Ký Thành Công</p>
                    <div className="btn-modal">
                        <a className="btnTiepTuc" onClick={() => handlerShow(false)}>Tiếp Tục</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;