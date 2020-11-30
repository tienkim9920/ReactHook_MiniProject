import React from 'react';
import PropTypes from 'prop-types';
import './PhotoForm.css'
import Select from 'react-select';
import { Category } from '../../../Global/Category';

PhotoForm.propTypes = {
    
};

function PhotoForm(props) {
    return (
        <div className="container">
            <form className="form_photo w-50 mx-auto">
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input type="text" className="form-control"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="Category">Category:</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        { Category && Category.map(value => (
                            <option value={value.value}>{value.category}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
}

export default PhotoForm;