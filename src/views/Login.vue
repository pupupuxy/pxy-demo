<template>
    <div>
        <Card style="width:350px;margin: 150px auto">
            <p slot="title">登录</p>
            <Form ref="loginForm" :model="loginForm" :rules="ruleInline" >
                <FormItem prop="user">
                    <Input type="text" v-model="loginForm.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="loginForm.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                </FormItem>
            </Form>
        </Card>
    </div>


</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                loginForm:{
                    user:'',
                    password:'',
                },
                ruleInline:{
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码最少为6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            handleSubmit(){
                this.$refs.loginForm.validate((valid)=>{
                  if(valid){
                      this.$Message.success('登录成功!');
                      this.$router.push({
                          path:'/',
                          query:{
                              username:this.loginForm.user,
                          }
                      })
                  }else{
                      return false;
                  }
                })
            }
        }
    }
</script>

<style scoped>

</style>