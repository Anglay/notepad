<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/icon_logo.png" />
            <span>记事本</span>
        </div>
        <div class="nav-bar">
            <span>
                <router-link to="/all">全部</router-link>
            </span>
            <span>
                <router-link to="/untreated">待处理</router-link>
            </span>
            <span>
                <router-link to="/over">已完成</router-link>
            </span>
        </div>
        <router-link to="/add"><span class="btn-add"></span></router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: #fff;
    z-index: 9999;
    height: 65px;
    padding: 10px;
    box-shadow: 0px 2px 2px #eee;
    .logo {
        display: inline-block;
        float: left;
        height: 65px;
        height: 65px;
        img {
            display: inline-block;
            float: left;
            width: 65px;
            height: 65px;
        }
        span{
            display: inline-block;
            float: left;
            font-size: 20px;
            font-weight: bold;
            color: #e5687f;
            padding-top: 35px;
            margin-left: 15px;
        }
    }
    .nav-bar {
        display: inline-block;
        float: left;
        height: auto;
        overflow: hidden;
        padding-top: 35px;
        padding-left: 20px;
        span {
            display: inline-block;
            width: 80px;
            text-align: center;
            a {
                display: inline-block;
                padding: 5px;
            }
            a.active {
                border-bottom: 4px solid #81cde6;
            }
        }
    }
    .btn-add {
        display: inline-block;
        float: right;
        width: 50px;
        height: 50px;
        background: url(../assets/icon_add.png) no-repeat center center;
        background-size: 30px;
        margin-top: 20px;
    }
}
</style>
