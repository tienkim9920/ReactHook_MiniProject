import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

ListPhoto.propTypes = {
    listPhoto: PropTypes.array,
    deletePhoto: PropTypes.func
};

ListPhoto.defaultProps = {
    listPhoto: [],
    deletePhoto: null
}

function ListPhoto(props) {

    const { listPhoto, deletePhoto } = props

    console.log(listPhoto)

    const handlerDelete = (value) => {

        if(!deletePhoto){
            return
        }

        var id = value.id

        const index = listPhoto.findIndex(value => {
            return value.id === id
        })

        console.log(index)

        deletePhoto(index)

    }


    return (
        <div className="container group_Image">
            <div className="row justify-content-center padding_Row">
                {listPhoto && listPhoto.map(value => {
                    return (
                        <div className="col-6 edit_Photo" key={value.id}>
                            <div className="card">
                                <img className="background_Image" src={value.img} alt="" />
                                <div className="group_content">
                                    <p className="title_content">{value.title}</p>
                                    <div className="edit_content">
                                        <Link to={`/photo/${value.id}`}>Edit</Link>
                                        &nbsp;&nbsp;
                                        <a onClick={() => handlerDelete(value)}>Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ListPhoto;