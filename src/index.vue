<template>
  <div class="mainBody">
    <div class="wrapper">
      <image :src="logo" class="logoImage"></image>
      <text class="greeting">A list page build by weex.</text><br/>
      <text class="buttonText" @click="jumpIn">Enter</text><br/>
    </div>
    <div class="foot">
        <text class="hintText">DEMO</text>
    </div>
  </div>
</template>

<script>
    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')

    export default {
      data () {
        return {
          logo: 'http://img2.ph.126.net/12MZEnxM2E35rMPvTCrYRg==/6632712635095805282.jpg',
        }
      },
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
        },
        jumpOut () {
          navigator.pop({
            animated: 'true'
          })
        }
      }
    }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .mainBody{
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .foot{
    vert-align:bottom ;
    horiz-align: center;
  }
  .logoImage {
    width: 474wx;
    height: 632wx;
  }
  .greeting {
    margin: 20px;
    font-size: 50px;
    color: #41B883;
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
  .hintText{
    font-size: 20pt;
    color: #676569;
  }
</style>
