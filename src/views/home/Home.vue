<template>
    <div class="home">
        <div class="layout" >
            <Layout :style="{minHeight: '100vh',flexDirection:'inherit'}">
                <nav-menu :theme="theme"></nav-menu>
                <Layout>
                    <Head ref="header" @changeTheme="changeTheme"></Head>
                    <Content :style="{padding: '0 16px 16px'}">

                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import NavMenu from "./NavMenu";
    import Head from "./Head";
    export default {
        name: 'home',
        components: {
            Head,
            NavMenu
        },
        data() {
            return {
                isCollapsed: false,
                theme:'dark',
            };
        },
        methods:{
            changeTheme(theme) {
                this.theme=theme
            }
        }

    }
</script>
<style scoped>

</style>