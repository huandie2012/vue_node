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

const postProductList = async (ctx, next) => {
    const req = ctx.request.body

    ctx.status = 200
    if(!req.msg || typeof req.msg != 'string'){
        ctx.status = 401
        ctx.body = {
            msg: 'post request!',
            desc: `parameter error!! msg: ${req.msg}`,
            data: req
        }
        return 
    }

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