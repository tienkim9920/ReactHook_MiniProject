import React from 'react';
import PropTypes from 'prop-types';

InfoOrder.propTypes = {

};

function InfoOrder(props) {
    return (
        <div className=".col-12 .col-md-8">
            <div className="padding_order">
                <h1>Ordering information</h1>
                <div className="form-group">
                    <label htmlFor="Fullname">Full Name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email Order:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Address:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="Phone">Phone Number:</label>
                    <input type="text" className="form-control" />
                </div>
                
            </div>
        </div>
    );
}

export default InfoOrder;