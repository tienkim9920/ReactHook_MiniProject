import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClothesAPI from '../../../Api/ClothesAPI';
import { Link } from 'react-router-dom';

DataCategory.propTypes = {
    category: PropTypes.string
};

DataCategory.defaultProps = {
    category: ''
}

function DataCategory(props) {

    const { category } = props

    const [product, setProduct] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            if (category === 'all') {

                // const response = await ClothesAPI.getAll()
                // console.log(response)

                // setProduct(response)

            } else {

                const params = {
                    category: category
                }

                console.log(params)

                const response = await ClothesAPI.getCategory(params)
                console.log(response)

                setProduct(response)

            }

        }

        fetchData()

    }, [category])

    return (
        <div className="row wrapper_category">
            {
                product && product.map(value => (
                    <div className="card_category col-3 Section_Category" key={value._id}>
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
    );
}

export default DataCategory;