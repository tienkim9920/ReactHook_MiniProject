import React from 'react';
import PropTypes from 'prop-types';

ListOrder.propTypes = {

};

function ListOrder(props) {
    return (
        <div className="col-6 .col-md-6 .col-sm-6">
            <div className="padding_order">
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
                <div className="btn_checkout d-flex justify-content-end">
                    <button>Order</button>
                </div>
            </div>
        </div>
    );
}

export default ListOrder;