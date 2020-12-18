import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import Image from '../../Global/Image';
import { Route, Switch } from 'react-router-dom';
import MainHistory from './Component/MainHistory';

History.propTypes = {
    
};

function History(props) {
    return (
        <div>
            <Banner title="History" backgroundUrl={Image.BG_1}/>

            <Switch>
                <Route exact path="/history/:id" component={MainHistory} />
            </Switch>
        </div>
    );
}

export default History;