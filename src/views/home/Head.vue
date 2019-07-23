<template>
    <div class="header" :style="{background:theme=='light'?'#fff':theme=='dark'?'#515a6e':'#2d8cf0'}
   ">
        <div :style="{color:theme=='light'?'#515a6e':theme=='dark'?'#fff':'#fff'}">
            <p>改变主题</p>
            <RadioGroup v-model="theme">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
                <Radio label="primary"></Radio>
            </RadioGroup>
        </div>
        <Input search style="width: 200px;" placeholder="Enter something..."/>

        <div class="userSpan">
            <Avatar size="small">
                <img v-if="userImg" :src="userImg" alt="">
                <span>{{user?user:icon}}</span></Avatar>
            <Dropdown @on-click="loginOut">
                <a href="javascript:void(0)" :style="{color:theme=='light'?'#515a6e':theme=='dark'?'#fff':'#fff'}">
                    {{user}}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem name="loginOut">注销</DropdownItem>
                    <DropdownItem name="changeHeader">
                        <Upload :on-progress="uploadFile">
                            更换头像
                        </Upload>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "head",
        data() {
            return {
                userImg: '',
                icon: 'user',
                theme: 'dark',
                user: '未登录'
            }
        },
        updated() {
            this.$emit('changeTheme', this.theme)
        },

        methods: {
            uploadFile(event, file) {
                console.log(event);
                console.log(file)
            },
            loginOut(name) {
                if (name == 'loginOut') {
                    this.$Modal.confirm({
                        title: '提示',
                        content: '是否确认注销？',
                        onOk: () => {
                            this.$Message.info('注销成功');
                            this.$router.push({
                                path: '/login'
                            })
                        },
                        onCancel: () => {
                            this.$Message.info('取消注销');
                        }
                    });
                }
            }

        },
        mounted() {
            this.user = this.$route.query.username;
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 50px;
        background: #515a6e;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #fff;
        border-bottom: 0.5px solid #dcdee2;
    }

    .userSpan a {
        margin-left: 10px;
        color: #fff;

    }

</style>