import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import Image from '../../Global/Image';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainCart from './Component/MainCart';

Cart.propTypes = {
    
};

function Cart(props) {

    return (
        <div>
            <Banner title="CARTS" backgroundUrl={Image.BG_2_2}/>

            <Switch>
                <Route exact path="/cart/:id" component={MainCart} />
            </Switch>
        </div>

    );
}

export default Cart;