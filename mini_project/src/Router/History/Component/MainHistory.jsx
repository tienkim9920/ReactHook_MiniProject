import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import HistoryAPI from '../../../Api/HistoryAPI';

MainHistory.propTypes = {

};

function MainHistory(props) {

    const { id } = useParams()

    const [history, setHistory] = useState([])

    console.log(id)

    useEffect(() => {

        const fectchHistory = async () => {

            if (sessionStorage.getItem('idUser')) {

                const response = await HistoryAPI.getHistory(id)
                console.log(response)

                setHistory(response)
            }

        }

        fectchHistory()

    }, [])

    return (
        <div className="wapper_cart">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="table-main table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Đơn Hàng</th>
                                        <th>Người Đặt</th>
                                        <th>Địa Chỉ</th>
                                        <th>Giá Trị Đơn Hàng</th>
                                        <th>Tình Trạng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        history && history.map(value => (
                                            <tr key={value._id}>
                                                <td className="thumbnail-img">
                                                    <a>{value._id}</a>
                                                </td>
                                                <td className="name-pr">
                                                    <a>{value.fullname}</a>
                                                </td>
                                                <td className="name-pr">
                                                    <p>{value.address}</p>
                                                </td>
                                                <td className="name-pr">
                                                    <a>{value.total}$</a>
                                                </td>
                                                <td className="name-pr">
                                                    {
                                                        value.status ? <p>Đã Thanh Toán</p> : <p>Chưa Thanh Toán</p>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHistory;