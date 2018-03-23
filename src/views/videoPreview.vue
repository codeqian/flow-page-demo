<!--视频列表元素组件-->
<template>
    <div>
        <div class="inlineBox">
            <image :src="_src"></image>
        </div>
        <div class="inlineBox">
            <text>{{_title}}</text>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: "video-preview",
        data:function () {
            return{
                _title:'',
                _src:''
            }
        },
        methods:{
            setInfo(){
                //
            }
        }
    }
</script>

<style scoped>
    .inlineBox{
        margin: 10pt;
        vertical-align: center;
        float: left;
    }
</style>