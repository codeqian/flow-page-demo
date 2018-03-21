<template>
  <div class="mainBody">
    <text class="hintText" @click="jumpIn">back</text>
  </div>
</template>

<style>
  .mainBody{
    height: 100%;
    width: 100%;
  }
  .hintText{
    margin: 10px;
    font-size: 20pt;
    color: #676569;
  }
</style>

<script>
    var navigator = weex.requireModule('navigator')
    export default {
        methods: {
            jumpIn (event) {
                var url = weex.config.bundleUrl;  //获取当前路径
                console.log(url);
                url = url.split('/').slice(0,-1).join('/') + '/index.html';//拼接当前路径到要跳转的文件
                console.log(url);
                navigator.push({
                    url: url,
                    animated: 'true'
                }, event => {
                    // 完成后执行的操作
                })
            },
            jumpOut () {
                navigator.pop({
                    animated: 'true'
                })
            }
        }
    }
</script>
