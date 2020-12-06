import React, { useState } from 'react';
import PropTypes from 'prop-types';

NavCategory.propTypes = {
    Click: PropTypes.func,
    category: PropTypes.string
};

NavCategory.defaultProps = {
    Click: null,
    category: ''
}

function NavCategory(props) {

    const { Click, category } = props

    
    const handlerChange = (value) => {

        if (!Click){
            return
        }

        // setActive(value)
        Click(value)
    }

    return (
        <div className="btn_category">
            {/* <a 
                className="Click_category" 
                style={category === 'all' ? {backgroundColor: '#00ccff', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#00ccff'}} 
                onClick={() => handlerChange('all')}>
                All
            </a> */}
            <a 
                className="Click_category" 
                style={category === 'tshirt' ? {backgroundColor: '#00ccff', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#00ccff'}} 
                onClick={() => handlerChange('tshirt')}>
                T-Shirt
            </a>
            <a 
                className="Click_category" 
                style={category === 'pants' ? {backgroundColor: '#00ccff', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#00ccff'}} 
                onClick={() => handlerChange('pants')}>
                Pants
            </a>
            <a 
                className="Click_category" 
                style={category === 'sneaker' ? {backgroundColor: '#00ccff', color: '#ffffff'} : {backgroundColor: '#ffffff', color: '#00ccff'}} 
                onClick={() => handlerChange('sneaker')}>
                Sneaker
            </a>
        </div>
    );
}

export default NavCategory;