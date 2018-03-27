<!--播放页面-->
<template>
    <div class="mainBody">
        <div class="titleBar">
            <text class="barText" @click='jumpOut'>back</text>
        </div>
        <video class="videoPlayer" id="Player" :src="videoSrc" auto-play="true" controls @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
        <text>标题：{{title}}</text>
        <text>当前状态：{{state}}</text>
    </div>
</template>

<script>
    var navigator = weex.requireModule('navigator');
    const storage = weex.requireModule('storage');

    export default {
        name: "player",
        data:function () {
            return{
                vid:'',
                state: '----',
                title:"test video",
                videoSrc:"http://www.w3school.com.cn/example/html5/mov_bbb.mp4",
            }
        },
        created: function() {
            // this.mix_test();
            storage.getItem('vid', event => {
                console.log('get value:', event.data);
                this.vid=event.data;
                this.title="id:"+this.vid;
            })
        },
        methods: {
            jumpOut () {
                navigator.pop({
                    animated: 'true'
                })
            },
            onstart (event) {
                this.state = 'onstart'
            },
            onpause (event) {
                this.state = 'onpause'
            },
            onfinish (event) {
                this.state = 'onfinish'
            },
            onfail (event) {
                this.state = 'onfinish'
            }
        }
    }
</script>

<style scoped>
    .mainBody{
        height: 100%;
        width: 100%;
    }
    .titleBar{
        padding: 10pt;
        background-color: #0099ff;
    }
    .barText{
        font-size: 20pt;
        color: #fcffff;
    }
    .videoPlayer{
        width: 100%;
        height: auto;
    }
</style>