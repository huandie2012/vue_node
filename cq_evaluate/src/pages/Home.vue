<template>
  <div class="home">
    <a-layout>
      <a-layout-header class='layout-header'>
        <div class='page-logo'>
            <a-icon type="smile" />
            产品测评后台
        </div>
        <div class='header-content'>

        </div>
        <div class='user-info'>
            <a-avatar size="large" icon="user" />
            <div class='name'>cqyang</div>
            <a-icon type="logout" class='logout-icon'/>
        </div>
      </a-layout-header>
      <a-layout>
        <a-layout-sider 
            class='layout-sider' 
            v-model="collapsed" 
            :trigger="null" 
            collapsible
        >
            <a-icon 
                class='collapse-icon'
                :type="collapsed ? 'menu-unfold' : 'menu-fold'" 
                @click="toggleCollapsed"
            />
            <a-menu
                :selected-keys="activeKeys"
                mode="inline"
                theme="light"
                :inline-collapsed="collapsed"
                @click="handleChangeMenu"
            >
                <a-menu-item key="1">
                    <a-icon type="pie-chart" />
                    <span><router-link to='/addproduct'>新增产品</router-link></span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="desktop" />
                    <span><router-link to='/productlist'>产品列表</router-link></span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout-content class='layout-content'>
            <div class='breadcrumb-header'>
                <a-breadcrumb>
                    <a-breadcrumb-item>产品评测后台</a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">新增产品</a></a-breadcrumb-item>
                </a-breadcrumb>
            </div>
            <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            collapsed: false,
            activeKeys: ['1']
        }
    },
    methods: {
        toggleCollapsed () {
            this.collapsed = !this.collapsed
        },
        handleChangeMenu ({item, key, keyPath}) {
            this.activeKeys = keyPath
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.home{
    .layout-header{
        color: #ffffff;
        background-color: #7dbcea;
        padding: 0px;
        display: flex;
        .page-logo{
            width: 200px;
            font-size: 18px;
        }
        .header-content{
            width: 100%;
            margin: 0 -200px;
        }
        .user-info{
            width: 200px;
            display: flex;
            align-items: center;
            .name{
                margin-left: 15px;
                margin-right: 15px;
                font-size: 18px;
            }
            .logout-icon{
                font-size: 22px;
            }
        }
    }
    .layout-sider{
        height: calc(100vh - 64px);
        background-color: #7dbcea;
        position: relative;
        .collapse-icon{
            position: absolute;
            right: -25px;
            top: 10px;
            font-size: 24px;
            color: #7dbcea;
        }
    }
    .layout-content{
        .breadcrumb-header{
            width: 100%;
            padding-left: 50px;
            background-color: #ffffff;
            height: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 22px;
            border-bottom: 1px solid #e9e9e9;
        }
    }
    a{
        color: rgba(0, 0, 0, 0.65);
    }
    a.router-link-active{
        color: #1890ff;
    }
}

</style>
