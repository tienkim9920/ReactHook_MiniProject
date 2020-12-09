
import axiosClient from './axiosClient'

const AccountsAPI = {
    
    getAccounts: () => {
        const url = '/accounts'
        return axiosClient.get(url)
    },

    postAccounts: (query) => {
        const url = `/accounts/${query}`
        return axiosClient.post(url)
    }

}

export default AccountsAPI