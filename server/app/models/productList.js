const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productListSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_brand: {
        type: String
    },
    product_price: Number,
    product_use: String
}, {
    collection: 'productList',//这里是为了避免新建的表会带上 s 后
    versionKey: false // 不需要 __v 字段，默认是加上的
})

module.exports = mongoose.model('productList', productListSchema)