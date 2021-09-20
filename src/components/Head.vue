<template>
    <div class="header">
        {{ 'lzx header' }}
        <div class="dropdown">
            <el-dropdown>
            <span class="el-dropdown-link">
                登陆<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="login">用户登陆</el-dropdown-item>
                <el-dropdown-item>管理员登陆</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Head',
    methods: {
        login() {
            this.$router.push({ path: '/login'})
        }
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
</style>