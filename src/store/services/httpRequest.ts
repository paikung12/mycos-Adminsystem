import axios, { AxiosInstance } from 'axios'

const API_URL = 'http://192.168.123.148:5000/api'

class HttpRequest {
    axiosInstance: AxiosInstance
    apiUrl: string
    constructor() {
        this.apiUrl = API_URL as string
        this.axiosInstance = axios.create({
            // baseURL: process.env.REACT_APP_CLOUD_API,
            timeout: 120000,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        /**
         * For authentication in the future
         */
        const token = localStorage.getItem('token')
        if (token) {
            this.setAuthorization(token)
        } else {
            this.deleteAuthorization()
        }

        this.axiosInstance.interceptors.request.use(
            function (config) {
                // Do something before request is sent
                return config
            },
            function (error) {
                return Promise.reject(error)
            },
        )

        // Add a response interceptor
        this.axiosInstance.interceptors.response.use(
            function (response) {
                // Do something with response data
                return response
            },
            function (error) {
                // Do something with response error
                return Promise.reject(error)
            },
        )
    }

    setHeader(header: { key: string; value: string }) {
        this.axiosInstance.defaults.headers.common[header.key] = header.value
    }

    setAuthorization(token: string, type: string = 'Bearer') {
        this.axiosInstance.defaults.headers.common[
            'Authorization'
        ] = `${type} ${token}`
    }

    deleteAuthorization() {
        delete this.axiosInstance.defaults.headers.common['Authorization']
    }

    get<Type>(methodName: string, data?: any) {
        return this.axiosInstance.get<Type>(
            `${this.apiUrl}${methodName}`,
            data,
        )
    }

    post<Type>(methodName: string, data?: any) {
        return this.axiosInstance.post<Type>(
            `${this.apiUrl}${methodName}`,
            data,
        )
    }

    put<Type>(methodName: string, data?: any) {
        return this.axiosInstance.put<Type>(
            `${this.apiUrl}${methodName}`,
            data,
        )
    }

    delete<Type>(methodName: string, data?: any) {
        return this.axiosInstance.delete<Type>(
            `${this.apiUrl}${methodName}`,
            data,
        )
    }
}
const httpRequest = new HttpRequest()
export default httpRequest
