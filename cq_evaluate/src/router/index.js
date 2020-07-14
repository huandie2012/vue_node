import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import AddProduct from '@/pages/AddProduct'
import ProductList from '@/pages/ProductList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path:'/addproduct',
        name:'AddProduct',
        component: AddProduct
      }, {
        path:'/productlist',
        name:'ProductList',
        component: ProductList
      }]
    }
  ]
})
