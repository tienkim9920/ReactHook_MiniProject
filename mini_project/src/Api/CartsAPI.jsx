import axiosClient from './axiosClient'

const CartsAPI = {
    
    getCarttAll: (id) => {
        const url = `/carts/${id}`
        return axiosClient.get(url)
    },

    patchUpdateCount: (query) => {
        const url = `/carts/${query}`
        return axiosClient.patch(url)
    },

    postCart: (query) => {
        const url = `/carts/${query}`
        return axiosClient.post(url)
    },

    deleteCart: (query) => {
        const url = `/carts/${query}`
        return axiosClient.delete(url)
    }

}

export default CartsAPI