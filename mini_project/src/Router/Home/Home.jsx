import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import Image from '../../Global/Image'
import Category from './Category/Category';


Home.propTypes = {
    
};

function Home(props) {

    return (
        <div>
            <Banner title="MEN'S SUIT" backgroundUrl={Image.BG_2_2}/>

            <Category />

        </div>
    );
}

export default Home;