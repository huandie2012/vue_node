import axios from 'axios'

const API_HOST = 'http://localhost:5000'

const REQUEST_CONFIG = {
    method: 'get',
    timeout: 1000 * 60 * 3,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        withCredentials: true
    },
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
}

export const request = (url, options, isShowError) => {
    const config = Object.assign({}, REQUEST_CONFIG, options)

    return new Promise((resolve, reject) => {
        axios(API_HOST + url, config)
        .then(res => {
            // console.log(res)
            const response = res.data.data
            if(res.data.errno === 0){
                resolve(response)
            }
        })
        .catch(e => {
            console.log(e)
        })
    })
}

export const get = (url, params, isShowError = true) => {
    const options = Object.assign({}, { params }, { method: 'get' })
    return request(url, options, isShowError)
}

export const post = (url, params, isShowError = true) => {
    const options = Object.assign({}, { data: params }, { method: 'post' })
    return request(url, options, isShowError)
}