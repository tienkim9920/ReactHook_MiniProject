import React from 'react';
import PropTypes from 'prop-types';
import IndexPage from './IndexPage';

Pagination.propTypes = {
    pagination: PropTypes.object,
    handlerChangePage: PropTypes.func,
    totalPage: PropTypes.number
};

Pagination.defaultProps = {
    pagination: {},
    handlerChangePage: null,
    totalPage: null
}

function Pagination(props) {

    const { pagination, handlerChangePage, totalPage } = props

    const { page } = pagination

    let indexPage = []

    for (var i = 1; i <= totalPage; i++){
        indexPage.push(i)
    }

    const onDownPage = (value) => {
        
        if (!handlerChangePage){
            return
        }

        const newPage = parseInt(value) - 1
        handlerChangePage(newPage)

    }

    const onUpPage = (value) => {
                
        if (!handlerChangePage){
            return
        }

        const newPage = parseInt(value) + 1
        handlerChangePage(newPage)
    }

    return (
        <div className="pagination">
            <button
                disabled={page <= 1 }
                onClick={() => onDownPage(page)}
                >
                Previous
            </button>
            &nbsp;
            <IndexPage indexPage={indexPage} handlerChangePage={handlerChangePage} pagination={pagination}/>
            &nbsp;
            <button className="page_next"
                disabled={page >= totalPage}
                onClick={() => onUpPage(page)}
                >
                Next
            </button>
        </div>
    );
}

export default Pagination;