import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Category.css'
import NavCategory from '../Component/NavCategory';
import DataCategory from '../Component/DataCategory';


Category.propTypes = {

};

function Category(props) {

    const [category, setCategory] = useState('tshirt')

    const ChangeCategory = (value) => {
        console.log("Category: ", value)

        setCategory(value)
    }

    //Conditional JSX
    // const render = (
    //     category === 'all' ? <AllCategory /> :  
    //     ( category === 'tshirt' ? <TshirtCategory /> : <PantsCategory /> )
    // )

    return (
        <div className="container-fluid wrapper_Category">
            <div className="group_Category">
                <h1 className="title_Category">Category</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias aliquam eveniet, iure praesentium dicta ex dolorum
                     inventore itaque minus repudiandae, odio provident? Velit architecto natus expedita non? Odio, dolorum.</p>
                <NavCategory Click={ChangeCategory} category={category}/>
                {/* { render } */}
                <DataCategory category={category} />
            </div>
        </div>
    );
}

export default Category;