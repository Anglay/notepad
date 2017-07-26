<template>
    <div class="dialog">
        <div class="dialog-mask" @click="hideDetail"></div>
        <div class="dialog-content">
            <div class="detail-item">
                <span>标题：</span>
                <p>{{detail.title}}</p>
            </div>
            <div class="detail-item">
                <span>创建时间：</span>
                <p>{{detail.date}}</p>
            </div>
            <div class="detail-item">
                <span>状态：</span>
                <p>{{detail.isDone?'已完成':'待处理'}}</p>
            </div>
            <div class="detail-item">
                <span>内容：</span>
                <p>{{detail.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        detail: function () {
            return this.$store.state.detail
        }
    },
    methods: {
        hideDetail: function () {
            this.$store.dispatch("hideDetail")
        }
    }
}
</script>

<style lang="less" scoped>
.dialog {
    .dialog-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 99;
    }
    .dialog-content {
        position: absolute;
        left: 50%;
        margin-left: -300px;
        top: 50%;
        margin-top: -125px;
        padding: 40px 20px 20px;
        height: 230px;
        width: 560px;
        background: #fff;
        z-index: 100;
        .detail-item {
            height: auto;
            overflow: hidden;
            margin-bottom: 10px;
            span {
                display: inline-block;
                float: left;
                width: 100px;
                font-size: 16px;
                color: #333;
                font-weight: bold;
                text-align: right;
                height: 30px;
                line-height: 30px;
            }
            p {
                display: block;
                margin-left: 110px;
                font-size: 14px;
                color: #7e8c8d;
                line-height: 30px;
            }
        }
    }
}
</style>

