<template>
    <div class="product-list">
        <a-table 
            class='list-table'
            :pagination="false"
            :columns="columns" 
            :data-source="data"
            :rowKey="record => record._id"
        >
            <span 
                slot="product_use" 
                slot-scope="text, record" 
            >
                {{formatterUse(text)}}
            </span>
            <a-icon 
                slot="operate" 
                slot-scope="text, record" 
                type="delete" 
                @click="handleDelete(record)"
            />
        </a-table>
    </div>
</template>

<script>
const columns = [
    {
        title: '产品名称',
        dataIndex: 'product_name',
        key: 'product_name',
        align: 'center'
    }, {
        title: '产品品牌',
        dataIndex: 'product_brand',
        key: 'product_brand',
        align: 'center'
    }, {
        title: '产品价格',
        dataIndex: 'product_price',
        key: 'product_price',
        align: 'center'
    }, {
        title: '产品用途',
        dataIndex: 'product_use',
        key: 'product_use',
        align: 'center',
        scopedSlots: { customRender: 'product_use' },
    }, {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        align: 'center',
        scopedSlots: { customRender: 'operate' },
    }
]
import { get, post } from '../utils/request'
import { productUse } from '../utils/tool'
export default {
    name: 'ProducList',
    mounted () {
        this.getProductList()
    },
    data () {
        return {
            columns,
            data: [],
            productUse
        }
    },
    methods: {
        getProductList () {
            get('/product/list').then(res => {
                console.log(res)
                this.data = res.lists
            })
        },
        handleDelete (record) {
            post('/product/del', {
                id: record._id
            }).then(res => {
                if(res.errno === 0){
                    this.$notification.success({
                        message: res.msg
                    })
                    this.getProductList()
                }
            })
        },
        formatterUse (text) {
            const filterUse = this.productUse.filter(item =>{
                return item.key == text
            })
            return filterUse[0].name
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.product-list{
    background-color: #ffffff;
    padding: 20px 0;
    .list-table{
        width: 98%;
        margin: 0px auto;
        border: 1px solid #e9e9e9;
    }
}

</style>
