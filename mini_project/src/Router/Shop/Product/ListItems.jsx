import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

ListItems.propTypes = {
    products: PropTypes.array,
};

ListItems.defaultProps = {
    products: []
}

function ListItems(props) {

    const { products } = props

    return (
        <div className="wrapper">
            <div className="wrapper_items">
                {
                    products && products.map(value => (
                        <div className="card_category Section_Category" key={value._id}>
                            <Link to={`/detail/${value._id}`} className="hover_link_product">
                                <div className="image_card">
                                    <img className="image_category" src={value.image} />
                                </div>
                                <div className="content_card d-flex justify-content-around">
                                    <div className="title_card" >
                                        {value.name}
                                        <br />
                                        {value.price}$
                                </div>
                                    <div className="right-menu">
                                        <div className="cart-btn">
                                            <i className='bx bx-cart-alt'></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ListItems;