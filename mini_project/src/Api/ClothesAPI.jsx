import axiosClient from './axiosClient'

const ClothesAPI = {
    
    getAll: () => {
        const url = '/clothes'
        return axiosClient.get(url)
    },

    getCategory: (params) => {
        const url = '/clothes/category/'
        return axiosClient.get(url, { params })
    },

    getDetail: (id) => {
        const url = `/clothes/detail/${id}`
        return axiosClient.get(url)
    },

    getPagination: (query) => {
        const url = `/clothes/page/${query}`
        return axiosClient.get(url)
    }
}

export default ClothesAPI