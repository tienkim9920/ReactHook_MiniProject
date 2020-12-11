import React from 'react';
import PropTypes from 'prop-types';

IndexPage.propTypes = {
    indexPage: PropTypes.array,
    handlerChangePage: PropTypes.func,
    pagination: PropTypes.object
};

IndexPage.defaultProps = {
    indexPage: null,
    handlerChangePage: null,
    pagination: {}
}

function IndexPage(props) {
    
    const { indexPage, handlerChangePage, pagination } = props

    const { page } = pagination

    const onIndexPage = (value) => {

        if (!handlerChangePage){
            return
        }

        handlerChangePage(value)

    }

    console.log(indexPage)

    return (
        <div>
            {
                indexPage && indexPage.map(value => (
                    <button className="page_count" key={value}
                        onClick={() => onIndexPage(value)}
                        style={value === parseInt(page) ? 
                            {color: '#ffffff', backgroundColor: '#00ccff'} : 
                            {color: '#00ccff', backgroundColor: '#ffffff'}}
                        >
                        {value}
                    </button>
                ))
            }
        </div>
    );
}

export default IndexPage;