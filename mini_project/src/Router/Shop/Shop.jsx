import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import Image from '../../Global/Image';
import ShopMain from './Main/ShopMain';

Shop.propTypes = {
    
};

function Shop(props) {


    return (
        <div>    
            <Banner title="SHOP" backgroundUrl={Image.BG_2_2}/>

            <ShopMain />
        </div>
    );
}

export default Shop;