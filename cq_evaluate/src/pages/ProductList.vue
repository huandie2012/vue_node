<template>
    <div class="product-list">
        <a-table 
            class='list-table'
            :pagination="false"
            :columns="columns" 
            :data-source="data"
            :rowKey="record => record._id"
        >
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
        align: 'center'
    }, {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        align: 'center',
        scopedSlots: { customRender: 'operate' },
    }
]
import { get } from '../utils/request'
export default {
    name: 'ProducList',
    mounted () {
        this.getProductList()
    },
    data () {
        return {
            columns,
            data: []
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
            console.log(record)
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
