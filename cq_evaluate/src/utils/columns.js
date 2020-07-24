export const addProductCol = [
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
        title: '产品标价',
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
        title: '产品容量',
        dataIndex: 'product_volume',
        key: 'product_volume',
        align: 'center',
    }, {
        title: '购买日期',
        dataIndex: 'buy_date',
        key: 'buy_date',
        align: 'center'
    }, {
        title: '实付金额',
        dataIndex: 'pay_money',
        key: 'pay_money',
        align: 'center'
    }, {
        title: '产品功效',
        dataIndex: 'product_effect',
        key: 'product_effect',
        align: 'center',
        width: 180
    }, {
        title: '用户评价',
        dataIndex: 'user_comment',
        key: 'user_comment',
        align: 'center'
    }, {
        title: '产品备注',
        dataIndex: 'remarks',
        key: 'remarks',
        align: 'center',
        width: 100
    }, {
        title: '自己评价',
        dataIndex: 'own_comment',
        key: 'own_comment',
        align: 'center',
        width: 200
    }, {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        align: 'center',
        scopedSlots: { customRender: 'operate' },
    }
]