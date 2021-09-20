<template>
    <div class="div-container">
        <el-card class="box-card">
            <el-form label-width="120px">
                <el-form-item label="用户名" style="width: 80%">
                <el-input v-model="form.account"></el-input>
                </el-form-item>
                <el-form-item label="昵称" style="width: 80%">
                <el-input v-model="form.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="userLogin">登陆</el-button>
            <!-- <span>登陆</span> -->
            <!-- <el-lable>asfd</el-lable>
            <el-input style="margin-top: 15px"></el-input>
            <el-input style="margin-top: 15px"></el-input> -->
        </el-card>
    </div>
</template>

<script>
import request from '../request.js'

export default {
    name: 'Login',
    data() {
        return {
            form: {
                account: '',
                password: ''
            }
        }
    },
    methods: {
        userLogin() {
            console.log('userLogin', this.form);
            request.post('/api/login', this.form).then(res => {
                console.log(res);
                this.$router.replace('/');
                // this.$bus.$emit('getContent', res.data.content);
            });
        }
    }
}
</script>

<style scoped>
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .box-card {
        width: 430px;
        height: 300px;
    }
    .div-container {
        display: inline-block;
        vertical-align: middle;
        margin-top: 10%;
    }
</style>