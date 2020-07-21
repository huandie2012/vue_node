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
    // if(!req.msg || typeof req.msg != 'string'){
    //     ctx.status = 
    //     ctx.body = {
    //         msg: 'post request!',
    //         desc: `parameter error!! msg: ${req.msg}`,
    //         data: req
    //     }
    //     return 
    // }

    const result = await productList_col.create({
        product_name: req.product_name,
        product_brand: req.product_brand,
        product_use: req.product_use,
        product_price: req.product_price
    })

    ctx.body = {
        msg: 'post request!!',
        desc: 'insert success!',
        data: result
    }
}

module.exports = {
    getProductList,
    postProductList
}