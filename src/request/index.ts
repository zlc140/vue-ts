import * as Axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

const service = Axios.default.create({
    baseURL: '',
    timeout: 0,
    maxContentLength: 4000,
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (error: any) => {
    Promise.reject(error)
})

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status !== 200) {
            Message({
                type: 'error',
                message: '请求错误',
            })
        } else {
            return response.data
        }
    },
    (error: any) => {
        return Promise.reject(error)
})

const httpServer = (opts: any) => {
    const defaultOpts = {
        method: opts.method || 'get',
        url: opts.url,
        params: opts.params,
        data: opts.params,
        headers: opts.method === 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'systoken': '',
        } : {
            'Content-Type': 'application/json;charset=UTF-8',
            'systoken': '',
        },
    }

    if (getToken()) {
        const token: any = getToken()
        defaultOpts.headers.systoken = token
    }
    if (opts.method === 'get' || opts.method === 'GET') {
        delete defaultOpts.data
    } else {
        delete defaultOpts.params
    }

    const promise = new Promise((resolve, reject) => {
        service(defaultOpts).then((res) => {
            if (res) {
                resolve(res)
            }
        }).catch((err) => {
            Message({
                type: 'error',
                message: '接口报错',
            })
            reject(err)
        })
    })
    return promise
}
export default httpServer
