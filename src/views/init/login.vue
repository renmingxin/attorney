<template>
    <div class="login-container">
        <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            auto-complete="on"
            label-position="left">
            <div class="title-container">
                <h3 class="title">律师问答平台</h3>
            </div>
            <el-form-item prop="username" >
                <span class="svg-container">
                    <i class="el-icon-user-solid" />
                </span>
                <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="请输入用户名"
                    name="username"
                    type="text"
                    tabindex="1"
                    auto-complete="on"
                />
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container">
                    <i class="el-icon-lock"/>
                </span>
                <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="请输入密码"
                    name="password"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin"/>
                <span class="show-pwd" @click="showPwd">
                    <i class="el-icon-view"></i>
                    <!-- <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" /> -->
                </span>
            </el-form-item>
            <el-button
                type="primary"
                style="display:inline-block;width:71%;margin-bottom:30px;"
                @click.native.prevent="handleLogin"
            >登录</el-button>
            <el-button 
                type="info" 
                style="display:inline-block;width:25%;margin-bottom:30px;"
                @click="gotoRegister"
            >注册</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        const validateUsername = (rule, value, callback) => {
            if (!value) {
                callback(new Error('用户名不能为空'))
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (!value) {
                callback(new Error('密码不能为空'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: sessionStorage.getItem('username') || '',
                password: ''
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            loading: false,
            passwordType: 'password',
            redirect: undefined
        }
    },
    computed:{
        
    },
    watch: {
        
    },
    mounted () {
    },
    methods: {
        showPwd() {
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
            this.$nextTick(() => {
                this.$refs.password.focus()
            })
        },
        gotoRegister(){
            this.$router.push({name:'register'});
        },
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    let msg = {username: this.loginForm.username, password: this.loginForm.password};
                    let callback = {
                        onOk: (data) => {
                            if(!data.errno){
                                console.log(data);
                                sessionStorage.setItem('userId',data.id);
                                sessionStorage.setItem('username',data.username);
                                sessionStorage.setItem('nickname',data.name);
                                sessionStorage.setItem('roleType',data['role_type']);
                                sessionStorage.setItem('money',data.money);
                                this.$Notice.success({
                                    title: '登录成功',
                                });
                                this.$router.push({name:'main'});
                            }else {
                                this.$Notice.error({
                                    title: '登录失败',
                                    desc:'用户名或者密码错误'
                                });
                            }
                        },
                        onError: (error) => {
                            console.log(error)
                        }
                    }
                    this.$Http.post('/users/login', msg, callback)
                }
            })
        }
    }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
        color: $cursor;
    }
}

/* reset element-ui css */
.login-container {
    
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;

        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            caret-color: $cursor;

            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
            }
        }
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #fff;

.login-container {
    background-image: url('../../images/5.jpg');
    background-size: cover;
    background-position: center 0;
    width: 100%;
    height: 100%;
    // background-color: $bg;
    overflow: hidden;
    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 120px 35px 0;
        margin: 0 auto;
        overflow: hidden;
    }

    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color:white;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
}
</style>
