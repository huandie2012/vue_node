const router = require('koa-router')()

const productList_controller = require('../../app/controllers/productList_controllers')

router.get('/product/list', productList_controller.getProductList)
router.post('/product/submit', productList_controller.postProductList)
router.post('/product/del', productList_controller.delProduct)

module.exports = router
