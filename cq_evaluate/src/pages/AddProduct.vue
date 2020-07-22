<template>
    <div class="add-product">
        <a-form 
            :form="form" 
            :label-col="{ span: 6 }" 
            :wrapper-col="{ span: 15 }"
            @submit="handleSubmit"
        >
            <a-row type="flex" justify='start' :gutter='24'>
                <a-col :span='6'>
                    <a-form-item label="产品名称">
                        <a-input
                            v-decorator="['product_name']"
                        />
                    </a-form-item>
                    <a-form-item label="产品用途">
                        <a-select
                            v-decorator="['product_use']"
                            placeholder="请选择该产品的用途"
                            @change="handleSelectChange"
                        >
                            <a-select-option 
                                v-for='item in productUse'
                                :key='item.key'
                                :value="item.key"
                            >
                                {{item.name}}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="用户评价">
                        <a-input
                            v-decorator="['user_comment']"
                            placeholder='请填写用户评价分数'
                        />
                    </a-form-item>
                </a-col>
                <a-col :span='6'>
                    <a-form-item label="产品品牌">
                        <a-input
                            v-decorator="['product_brand']"
                        />
                    </a-form-item>
                    <a-form-item label="购买日期" align='left'>
                        <a-date-picker 
                            v-decorator="['date']" 
                            placeholder='请选择购买日期'
                        />
                    </a-form-item>
                    <a-form-item label="产品备注">
                        <a-input
                            v-decorator="['remarks']"
                        />
                    </a-form-item>
                </a-col>
                <a-col :span='6'>
                    <a-form-item label="产品标价">
                        <a-input
                            v-decorator="['product_price']"
                        />
                    </a-form-item>
                    <a-form-item label="实付金额">
                        <a-input
                            v-decorator="['pay_money']"
                            placeholder='请填写用户评价分数'
                        />
                    </a-form-item>
                    <a-form-item label="自己评价">
                        <a-input
                            v-decorator="['own_comment']"
                            placeholder='请填写自己对产品的使用评价'
                        />
                    </a-form-item>
                </a-col>
                <a-col :span='6'>
                    <a-form-item label="产品容量">
                        <a-input
                            v-decorator="['product_volume']"
                        />
                    </a-form-item>
                    <a-form-item label="产品功效">
                        <a-input
                            v-decorator="['product_effect']"
                        />
                    </a-form-item>
                </a-col>
            </a-row>
            <a-form-item class='submit-button'>
                <a-button 
                    type="primary" 
                    html-type="submit" 
                >
                    保存
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { post } from '../utils/request'
import { productUse } from '../utils/tool'
import moment from 'moment'
export default {
    name: 'AddProduct',
    data () {
        return {
            formLayout: 'Inline',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            productUse
        }
    },
    methods: {
        handleSubmit (e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.submitData({
                        ...values,
                        buy_date: moment(values.date).format('YYYY-MM-DD')
                    })
                }
            });
            
        },
        submitData (params) {
            post('/product/submit', params).then(res => {
                if(res.errno === 0){
                    this.$notification.success({
                        message: res.msg
                    });
                }
                // this.data = res.lists
            })
        },
        handleSelectChange () {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-product{
    background-color: #ffffff;
    height: calc(100vh - 114px);
    padding-top: 50px;
}
.submit-button{
    display: flex;
    justify-content: center;
}
</style>
