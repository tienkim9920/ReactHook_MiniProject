import React from 'react';
import PropTypes from 'prop-types';

InfoOrder.propTypes = {
    onChangeName: PropTypes.func,
    onChangeEmail: PropTypes.func,
    onChangeAddress: PropTypes.func,
    onChangePhone: PropTypes.func,

    errorName: PropTypes.bool,
    errorEmail: PropTypes.bool,
    errorAddress: PropTypes.bool,
    errorPhone: PropTypes.bool,
};

InfoOrder.defaultProps = {
    onChangeName: null,
    onChangeEmail: null,
    onChangeAddress: null,
    onChangePhone: null,

    errorName: null,
    errorEmail: null,
    errorAddress: null,
    errorPhone: null,
}

function InfoOrder(props) {

    const { onChangeName, 
            onChangeEmail, 
            onChangeAddress, 
            onChangePhone,
            errorName,
            errorEmail,
            errorAddress,
            errorPhone } = props

    const handlerName = (e) => {

        const value = e.target.value

        onChangeName(value)
    }

    
    const handlerEmail = (e) => {

        const value = e.target.value

        onChangeEmail(value)
    }

    
    const handlerAddress = (e) => {

        const value = e.target.value

        onChangeAddress(value)
    }

    
    const handlerPhone = (e) => {

        const value = e.target.value

        onChangePhone(value)
    }

    return (
        <div className="col-4">
                <div className="form-group">
                    <label htmlFor="Fullname">Full Name:</label>
                    <input type="text" className="form-control" required onChange={handlerName}/>
                    {
                        errorName && <span style={{color: 'red'}}>* Require to enter Full Name</span>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email Order:</label>
                    <input type="text" className="form-control" required onChange={handlerEmail}/>
                    {
                        errorEmail && <span style={{color: 'red'}}>* Require to enter Email</span>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Address:</label>
                    <input type="text" className="form-control" required onChange={handlerAddress}/>
                    {
                        errorAddress && <span style={{color: 'red'}}>* Require to enter Address</span>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="Phone">Phone Number:</label>
                    <input type="text" className="form-control" required onChange={handlerPhone}/>
                    {
                        errorPhone && <span style={{color: 'red'}}>* Require to enter Phone</span>
                    }
                </div>
        </div>
    );
}

export default InfoOrder;