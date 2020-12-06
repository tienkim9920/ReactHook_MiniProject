import axiosClient from "./axiosClient"

const ProductAPI = {

    getAPI: () => {
        const url = '/products'
        return axiosClient.get(url)
    },

    getPagination: (params) => {
        const url = '/products/page/'
        return axiosClient.get(url, { params })
    }

} 

export default ProductAPI