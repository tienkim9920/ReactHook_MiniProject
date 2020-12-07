import axiosClient from './axiosClient'

const CartsAPI = {
    
    getCarttAll: (id) => {
        const url = `/carts/${id}`
        return axiosClient.get(url)
    },

    patchUpdateCount: (query) => {
        const url = `/carts/${query}`
        return axiosClient.patch(url)
    }

}

export default CartsAPI