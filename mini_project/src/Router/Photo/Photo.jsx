import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../Share/Banner/Banner';
import Image from '../../Global/Image'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import MainPhoto from './Main/MainPhoto';
import AddPhoto from './AddPhoto/AddPhoto';


Photo.propTypes = {
    
};

function Photo(props) {

    const match = useRouteMatch();
    console.log({ match })

    return (
        <div>
            <Banner title="This Is Page Photo" backgroundUrl={Image.BG_4}/>

            <Switch>
                <Route exact path={`${match.url}`} component={MainPhoto}/>
                
                <Route path={`${match.url}/:id`} component={AddPhoto}/>
                <Route path={`${match.url}/add`} component={AddPhoto}/>
            </Switch>
        </div>
    );
}

export default Photo;