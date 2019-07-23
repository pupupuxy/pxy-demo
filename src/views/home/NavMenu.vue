<template>
    <Sider style="" :style="{background:theme=='light'?'#fff':theme=='dark'?'#515a6e':'#2d8cf0'}"  :collapsed-width="78" v-model="isCollapsed">

        <Menu active-name="1-2" :theme="theme" width="auto" :class="menuitemClasses">
            <Submenu name="1-1">
                <template slot="title">
                    <Icon type="ios-navigate" class="nav-icon"></Icon>
                    <span>个人中心</span>

                </template>
                <MenuItem name="userCenter" to="/userCenter">个人中心</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>

            </Submenu>
            <Submenu name="1-2">
                <template slot="title">
                    <Icon type="ios-navigate" class="nav-icon"></Icon>
                    <span>菜单1</span>

                </template>
                <MenuGroup title="使用">

                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="1-3">
                <template slot="title">
                    <Icon type="ios-navigate" class="nav-icon"></Icon>
                    <span>菜单1</span>
                </template>
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>

<script>
    import Submenu from "iview/src/components/menu/submenu";

    export default {
        components: {Submenu},
        name: "nav-menu",
        props:['theme'],
        data() {
            return {
                isCollapsed: false
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }

    }
</script>

<style scoped>
    .layout-con {
        height: 100%;
        width: 100%;
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .submenu i :nth-child(1) {
        display: none;
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i :nth-child(1){
        display: none;
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>