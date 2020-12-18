
import axiosClient from './axiosClient'

const HistoryAPI = {

    getHistory: (id) => {
        const url = `/history/${id}`
        return axiosClient.get(url)
    }

}

export default HistoryAPI