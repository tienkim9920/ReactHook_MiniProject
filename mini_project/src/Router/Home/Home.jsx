import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import Image from '../../Global/Image'


Home.propTypes = {
    
};

function Home(props) {
    return (
        <div>
            <Banner title="MEN'S SUIT" backgroundUrl={Image.BG_4}/>

            <h1>This is Page Home</h1>
        </div>
    );
}

export default Home;