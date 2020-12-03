import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MainPhoto.css'
import ListPhoto from '../ListPhoto/ListPhoto';
import { deletePhoto } from '../../../Redux/action/ActionPhoto';


MainPhoto.propTypes = {

};

function MainPhoto(props) {

    const Photo = useSelector(state => state.Photos.list)
    const dispatch = useDispatch()

    const delete_Photo = (value) => {
        
        console.log("Delete: ", value)

        const action = deletePhoto(value)
        dispatch(action)
    }

    return (
        <div>
            <div className="add_photo">
                <Link to="/photo/add" className="link_AddPhoto" style={{ textDecoration: "none"}}>Go To Add Photo</Link>
            </div>

            <ListPhoto listPhoto={Photo} deletePhoto={delete_Photo}/>

        </div>
    );
}

export default MainPhoto;