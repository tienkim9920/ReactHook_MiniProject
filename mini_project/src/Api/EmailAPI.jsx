
import axiosClient from './axiosClient'

const EmailAPI = {

    SendMail: (query) => {
        const url = `/email/${query}`
        return axiosClient.post(url)
    }

}

export default EmailAPI