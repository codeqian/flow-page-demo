<template>
  <div class="mainBody">
      <div class="titleBar">
          <text class="barText" @click='jumpOut'>back</text>
      </div>
      <div class="menuBody">
          <div class="inlineBox">
              <text class="menuText">共 {{totalCount}} 条</text>
          </div>
          <div class="inlineBox">
              <input type="text" placeholder="Input Text" class="inputText" :autoFocus=true value="" @change="onchange" @input="oninput"/>
          </div>
          <div class="inlineBox">
              <text class="menuText" @click='search(txtInput)'>Search</text>
          </div>
      </div>
      <div style="background-color: #afddff; width: 100%;height: 1pt;"></div>
  </div>
</template>

<style>
  .mainBody{
    height: 100%;
    width: 100%;
  }
  .titleBar{
      padding: 10pt;
      background-color: #0099ff;
  }
  .menuBody{
      display: inline-block;
      padding: 10pt;
  }
  .menuText{
      font-size: 20pt;
      color: #5f6bff;
  }
  .inlineBox{
      margin: 10pt;
      vertical-align: center;
      float: left;
  }
  .barText{
      font-size: 20pt;
      color: #fcffff;
  }
  .inputText{
      background-color: antiquewhite;
  }
  .hintText{
    font-size: 20pt;
    color: #676569;
  }
</style>

<script>
    // import netJs from "./net/httpMethod";
    // import mixJs from "./net/mixTest";
    import * as httpJs from "./net/httpFunction";

    //混入测试
    // Vue.mixin(mixJs);

    var navigator = weex.requireModule('navigator');
    module.exports = {
        data: function () {
            return {
                txtInput: '',
                txtChange: '',
                txtReturnType: '',
                txtSelection:'',
                autoFocus: false,
                totalCount:0
            };
        },
        created: function() {
            // this.mix_test();
            console.log("created："+this.totalCount);
        },
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
            },
            search(key){
                // netJs.methods.httpReq(key);
                httpJs.httpReq(key,this.httpCallback);
            },
            onchange: function (event) {//输入完毕回车或失去焦点时触发
                this.txtChange = event.value;
                console.log('onchange', event.value);
            },
            oninput: function (event) {//输入时触发
                this.txtInput = event.value;
                console.log('oninput', event.value);
            },
            httpCallback:function(val){
                this.totalCount = val;
            }
        }
    }
</script>
