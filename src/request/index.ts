import Axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const httpServer = (opts: any) => {
    const defaultOpts = {
        method: opts.method || 'get',
        baseURL: '',
        url: opts.url,
        timeout: 10000,
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
        Axios(defaultOpts).then((res) => {
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
