import React from 'react';
import PropTypes from 'prop-types';
import InfoOrder from '../ListCart/InfoOrder';
import ListOrder from '../ListCart/ListOrder';

Order.propTypes = {

};

function Order(props) {
    return (
        <div className="container-fluid mx-auto">
            <div className="row justify-content-md-center">
                <InfoOrder />
                <ListOrder />
            </div>
        </div>
    );
}

export default Order;