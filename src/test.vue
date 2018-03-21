<template>
    <div class="mainBody">
        <text class="buttonText" @click="jumpIn">test button</text><br/>
    </div>
</template>

<script>
    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')

    export default {
        methods: {
            jumpIn (event) {
                var url = weex.config.bundleUrl;  //获取当前路径
                console.log(url);
                url = url.split('/').slice(0,-1).join('/') + '/listpage.html';//拼接当前路径到要跳转的文件
                console.log(url);
                navigator.push({
                    url: url,
                    animated: 'true'
                }, event => {
                    // 完成后执行的操作
                })
            }
        }
    }
</script>

<style scoped>
    .mainBody{
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .buttonText{
        margin: 10px;
        font-size: 80px;
        color: #5f6bff;
        /*padding: 10px;*/
        /*border-color: #9392c9;*/
        /*border-width: 5px;*/
        /*border-style: solid;*/
    }
</style>