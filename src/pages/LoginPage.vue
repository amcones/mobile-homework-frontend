<template>
  <div id="login-wrapper">
    <h1>登录</h1>
    <el-form
        :model="loginForm"
        label-width="70px"
        :rules="rules"
        ref="formRef"
        hide-required-asterisk
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码"/>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="onSubmit" size="large">
      登录
    </el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      loginForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['formRef'].validate(valid => {
        if (valid) {
          console.log(this.loginForm)
          axios
              .post('http://123.60.135.201:8080/checkLogin', {
                user_name: this.loginForm.name,
                user_password: this.loginForm.password
              })
              .then(successResponse => {
                if (successResponse.data.code === 200) {
                  window.isLogin = true
                  window.uid = successResponse.data.data.userId
                  this.$router.replace({path: '/'})
                } else {
                  alert(successResponse.data.message)
                }
              })
              .catch(failResponse => {
                alert("登录失败" + failResponse)
              })
        }
      })
    },
    login() {

    }
  }
}
</script>

<style scoped>
* {
  text-align: center;
  box-sizing: border-box;
}

h1 {
  margin: 40px;
}

#login-wrapper {
  margin: 50px 50px;
}

form {
  margin: 80px 0;
}

button {
  width: 200px;
}
</style>