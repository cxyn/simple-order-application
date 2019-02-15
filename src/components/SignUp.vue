<template>
  <div id="app">
    <el-container class="signup">
      <el-header>账户注册</el-header>
      <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="重复密码" prop="checkPassword">
            <el-input type="password" v-model="ruleForm.checkPassword"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="fullName">
            <el-input v-model="ruleForm.fullName"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="ruleForm.sex" placeholder="请选择性别">
              <el-option label="帅哥" value="male"></el-option>
              <el-option label="美女" value="female"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="signupAction">
            <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        ruleForm: {
          username: '',
          password: '',
          checkPassword: '',
          fullName: '',
          sex: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 8, message: '字符长度介于4-8位之间', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '字符长度介于6-16位之间', trigger: 'blur' }
          ],
          checkPassword: [
            { required: true, message: '请重复输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '字符长度介于6-16位之间', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          fullName: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' },
            { min: 2, max: 4, message: '字符长度介于2-4位之间', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-form-item__content {
  text-align: left;
}
.signup {
  width: 60%;
  margin: 0 auto;
}
.signupAction .el-form-item__content{
  text-align: center;
}
</style>
