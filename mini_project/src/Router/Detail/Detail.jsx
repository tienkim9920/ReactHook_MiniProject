import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import Image from '../../Global/Image'
import { Route, Switch } from 'react-router-dom';
import MainDetail from './Component/MainDetail';

Detail.propTypes = {
    
};

function Detail(props) {
    return (
        <div>
            <Banner title="DETAIL" backgroundUrl={Image.BG_2}/>

            <Switch>
                <Route exact path="/detail/:id" component={MainDetail}/>
            </Switch>
        </div>
    );
}

export default Detail;