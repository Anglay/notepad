<template>
    <div class="page">
        <div class="noted-grid" v-if="todoList.length>0">
            <div class="grid-item" v-for="(item,index) in todoList" :key="index">
                <div class="item-index">
                    <div class="item-wrap">{{item.id+1}}</div>
                </div>
                <div class="item-title">
                    <div class="item-wrap">{{item.title}}</div>
                </div>
                <div class="item-date">
                    <div class="item-wrap">{{item.date}}</div>
                </div>
                <div class="item-action">
                    <span @click="viewDetail(item)">查看</span>
                    <span v-if="!item.isDone" @click="doneNote(item.id)">处理</span>
                    <!-- <span>编辑</span> -->
                    <span @click="delNote(item)">删除</span>
                </div>
            </div>
        </div>
        <div class="icon_no_list" v-if="todoList.length==0">暂无记录</div>
        <detailDialog v-if="isShow"></detailDialog>
    </div>
</template>

<script>
import detailDialog from "@/components/detailDialog"
export default {
    computed: {
        todoList:function(){
            return this.$store.getters.filterAll;
        },
        isShow:function(){
            return this.$store.state.isShow
        }
    },
    components:{
        detailDialog
    },
    methods:{
        viewDetail:function(item){
            this.$store.dispatch("viewDetail", item);
        },
        doneNote:function(id){
            this.$store.dispatch("doneNote",id);
        },
        delNote:function(item){
            this.$store.dispatch('delNote', item);
        }
    }
}
</script>


<style lang="less" scoped>

</style>

