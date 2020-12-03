import React from 'react';
import PropTypes from 'prop-types';
import PhotoForm from '../Component/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from '../../../Redux/action/ActionPhoto';
import { useHistory, useParams } from 'react-router-dom';


AddPhoto.propTypes = {
    
};

function AddPhoto(props) {

    const dispatch = useDispatch()
    const history = useHistory()

    //Lấy tất cả data Photo
    const photo = useSelector(state => state.Photos.list)

    //Lấy Params của Photo
    const { id } = useParams()

    console.log(id)

    //Tìm data Photo cụ thể
    const findPhoto = photo.find(value => value.id === id)

    console.log(findPhoto)

    //Tạo ra Biến Check để kiểm tra là Đang ở Route Edit hay là Route Add
    const isCheck = findPhoto ? true : false

    //Tạo ra Biến state để đưa dữ liệu xuống Route Edit hoặc là Route Add
    const initialState = findPhoto ? findPhoto : {
        title: '',
        img: ''
    }

    console.log(initialState)

    //Phương Thức Submit
    const handlerSubmit = (value) => {
        console.log("Add Value: ", value)

        const action = addPhoto(value)

        dispatch(action)

        history.push('/photo')
    }

    //Phương Thức Edit
    const handlerEdit = (value) => {
        console.log("Edit Value: ", value)

        const action = updatePhoto(value)
        dispatch(action)

        history.push('/photo')
    }

    return (
        <div>
            <PhotoForm 
                handlerSubmit={handlerSubmit} 
                handlerEdit={handlerEdit} 
                initialState={initialState}
                isCheck={isCheck}
            />
        </div>
    );
}

export default AddPhoto;