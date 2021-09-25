<template>
    <div class="header">
        {{ 'lzx header' }}
        <div v-if="JSON.stringify(currentUser) !== '{}'" class="avatar">
            {{ currentUser.nickname }}
        </div>
        <div class="dropdown" v-else>
            <el-button @click.native="login" size="small" type="primary">
                登陆
            </el-button>
            <!-- <el-dropdown>
                <span class="el-dropdown-link">
                    登陆<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="login">用户登陆</el-dropdown-item>
                    <el-dropdown-item>管理员登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> -->
        </div>
    </div>
</template>

<script>
import request from '../request.js';
import axios from 'axios'

export default {
    name: 'Head',
    data() {
        return {
            token: '',
            currentUser: {}
        }
    },
    methods: {
        login() {
            this.$router.push({ path: '/login'})
        },
        getUserInfo(token) {
            console.log('token', token);
            request.get('/api/users/currentUser', {headers: {'Authorization':token}}).then(res => {
                console.log('currentToken', res);
                this.currentUser = JSON.parse(JSON.stringify(res.data));
            });
        }
     },
    mounted() {
        if(localStorage.token == !undefined) {
            console.log('token exist', this.token);
        }
        // request.get('/user/currentUser').then(res => {
        //     this.currentUser = res;
        // });
        let that = this;
        this.$bus.$on('getCurrentUser', (token) => {
            console.log('token1', token);
            if(token == undefined)
                localStorage.token = token;
            this.token = token;
            this.getUserInfo(token);
            // this.currentUser = JSON.parse(JSON.stringify(user));
        })
        this.token = localStorage.token;
    }
}
</script>

<style scoped>
    .header {
        background-color: antiquewhite;
        height: 50px;
        /* display: flex; */
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .dropdown {
        display: inline-block;
        margin-right: 15px;
        vertical-align: middle;
        line-height: 50px;
        float: right;
        /* align-self: center; */
    }
    .avatar {
        display: inline-block;
        margin-right: 15px;
        vertical-align: middle;
        line-height: 50px;
        float: right;
    }
</style>