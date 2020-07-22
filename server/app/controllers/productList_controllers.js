const productList_col = require('../models/productList.js')

const getProductList = async (ctx, next) => {
    // ctx.set('Access-Control-Allow-Origin', '*')

    const req = ctx.request.body
    const lists = await productList_col.find({})

    ctx.status = 200
    ctx.body = {
        msg: 'success!',
        errno: 0,
        data: {
            data: req,
            lists
        }
    }
}

const postProductList = async (ctx, next) => {//前端post请求发送formData的类型数据时，需要服务端引入中间件body-parser，主要原因是post请求发送的数据，是在http的body里面，所以需要进行解析，否则获取不到数据（数据为空）
    //FormData没办法通过ctx.req.body拿到
    const req = ctx.request.body
    console.log(ctx)
    console.log(req)

    ctx.status = 200

    const result = await productList_col.create({
        ...req
    })

    console.log('postProductList',postProductList)

    ctx.body = {
        msg: '提交成功！',
        desc: 'success!',
        errno: 0
    }
}

const delProduct = async (ctx, next) => {//前端post请求发送formData的类型数据时，需要服务端引入中间件body-parser，主要原因是post请求发送的数据，是在http的body里面，所以需要进行解析，否则获取不到数据（数据为空）
    //FormData没办法通过ctx.req.body拿到
    const req = ctx.request.body

    ctx.status = 200

    const result = await productList_col.remove({
        _id: req.id
    }, err => {
        console.log(err)
    })

    console.log('result', result)

    ctx.body = {
        msg: '删除成功！',
        desc: 'success!',
        errno: 0
    }
}

module.exports = {
    getProductList,
    postProductList,
    delProduct
}