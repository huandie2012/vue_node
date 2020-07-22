const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productListSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_brand: String,
    product_price: String,
    user_comment: String,
    product_use: String,
    buy_date: String,
    remarks: String,
    pay_money: String,
    own_comment: String,
    product_volume: String,
    product_effect: String
}, {
    collection: 'productList',//这里是为了避免新建的表会带上 s 后
    versionKey: false // 不需要 __v 字段，默认是加上的
})

module.exports = mongoose.model('productList', productListSchema)