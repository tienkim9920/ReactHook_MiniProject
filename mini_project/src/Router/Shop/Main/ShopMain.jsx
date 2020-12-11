import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListItems from '../Product/ListItems';
import Pagination from '../Pagination/Pagination';
import './ShopMain.css'
import ClothesAPI from '../../../Api/ClothesAPI';
import queryString from 'query-string'
import Search from '../Search/Search';

ShopMain.propTypes = {
    
};

function ShopMain(props) {

    const [products, setProducts] = useState()

    const [totalPage, setTotalPage] = useState()

    const [pagination, setPagination] = useState({
        page: '1',
        count: '4',
        search: ''
    })

    //Hàm này sẽ truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
    const handlerChangePage = (value) => {
        console.log("Value: ", value)

        //Sau đó set lại cái pagination để gọi chạy làm useEffect gọi lại API pagination
        setPagination({
            page: value,
            count: pagination.count,
            search: pagination.search
        })        
    }


    //Hàm này sẽ truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
    const handlerSearch = (value) => {
        console.log("Value: ", value)

        setPagination({
            page: pagination.page,
            count: pagination.count,
            search: value
        })
    }


    //Gọi hàm useEffect tìm tổng số sản phẩm để tính tổng số trang
    //Và nó chỉ chạy đúng 1 lần
    useEffect(() => {

        const fetchAllData = async () => {

            const response = await ClothesAPI.getAll()
            console.log(response)

            //Tính tổng số trang = tổng số sản phẩm / số lượng sản phẩm 1 trang
            const totalPage = Math.ceil(parseInt(response.length) / parseInt(pagination.count))
            console.log(totalPage)

            setTotalPage(totalPage)
        }

        fetchAllData()

    }, [])

    //Gọi làm Pagination
    useEffect(() => {

        const fetchData = async () => {

            const params = {
                page: pagination.page,
                count: pagination.count,
                search: pagination.search
            }

            const query = queryString.stringify(params)

            const newQuery = '?' + query

            const response = await ClothesAPI.getPagination(newQuery)
            console.log(response)

            setProducts(response)

        }

        fetchData()

    }, [pagination])

    return (
        <div className="wrapper_shop">
            <h1 className="text-center p-5">Menu Clothes</h1>

            <Search handlerSearch={handlerSearch}/>
            
            <ListItems products={products}/>

            <Pagination pagination={pagination} handlerChangePage={handlerChangePage} totalPage={totalPage}/>
        </div>
    );
}

export default ShopMain;