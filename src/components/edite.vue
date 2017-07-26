<template>
    <div class="page">
        <div class="noted-edite">
            <div class="form-content">
                <div class="form-item">
                    <div class="item-content">
                        <input type="text" placeholder="请输入标题" v-model.trim="title" />
                    </div>
                </div>
                <div class="form-item">
                    <div class="item-content">
                        <textarea placeholder="请输入内容" v-model="content" />
                    </div>
                </div>
                <div class="form-item">
                    <button @click="addNote">保 存</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            title: "",
            content: ""
        }
    },
    methods: {
        addNote: function () {
            let item = { title: this.title, content: this.content }
            this.$store.dispatch("addNote", item);
            this.title = "";
            this.content = "";
        }
    }
}
</script>


<style lang="less" scoped>
.noted-edite {
    height: auto;
    overflow: hidden;
    padding: 20px;
    .form-content {
        height: auto;
        overflow: hidden;
        .form-item {
            height: auto;
            overflow: hidden;
            padding-bottom: 25px;
            .item-content {
                border: 1px solid #ccc;
                padding: 5px;
                border-radius: 4px;
                input {
                    display: block;
                    width: 100%;
                    background: none;
                    border: none;
                    box-shadow: none;
                    outline: 0;
                    height: 30px;
                    font-size: 14px;
                }
                textarea {
                    display: block;
                    width: 100%;
                    background: none;
                    border: none;
                    box-shadow: none;
                    outline: 0;
                    height: 300px;
                    font-size: 14px;
                }
            }
            button {
                display: block;
                margin: 0 auto;
                width: 120px;
                background: #e5687f;
                border: 0;
                box-shadow: none;
                padding: 15px;
                color: #fff;
                text-align: center;
                outline: 0;
                font-size: 16px;
                border-radius: 4px;
            }
        }
    }
}
</style>

