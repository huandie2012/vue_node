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
            <a-popconfirm
                slot="operate" 
                slot-scope="text, record" 
                title="是否确定要删除这条数据?"
                ok-text="确认"
                cancel-text="取消"
                @confirm="handleDelete(record)"
            >
                <a-icon type="delete" />
            </a-popconfirm>
        </a-table>
    </div>
</template>

<script>
import { get, post } from '../utils/request'
import { productUse } from '../utils/tool'
import { addProductCol } from '../utils/columns'
export default {
    name: 'ProducList',
    mounted () {
        this.getProductList()
    },
    data () {
        return {
            columns: addProductCol,
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
    min-height: calc(100vh - 114px);
    .list-table{
        width: 98%;
        margin: 0px auto;
        border: 1px solid #e9e9e9;
    }
}

</style>
