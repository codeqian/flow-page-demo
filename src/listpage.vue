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
      <list class="videoList">
          <!--boxs是数据中的列表，对应script中data属性里的数据名称。item是元素的名字，随便取，后面绑定数据的时候用到。v-for是循环语句-->
          <cell class="cell" v-for="(item,index) in boxes" @click="jumpIn(index)">
              <div class="inlineBox">
                  <image class="imageBox" :src="item.imageUrl" />
              </div>
              <div class="inlineBox, cellText">
                  <text class="hintText">{{item.title}}</text><br />
                  <!--<text class="contentText" lines="2">{{item.description}}</text>-->
                  <text class="hintText">播放：{{item.click}}</text>
              </div>
          </cell>
      </list>
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
  .videoList{
      margin: 10pt;
  }
  .cell{
      display: inline-block;
  }
  .cellText{
      width: 60%;
  }
  .imageBox{
      width: 150pt;
      height: 150pt;
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
  .contentText{
      font-size: 20pt;
      color: #3d3f66;
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

    const storage = weex.requireModule('storage');
    const navigator = weex.requireModule('navigator');
    module.exports = {
        data: function () {
            return {
                logo: 'http://img2.ph.126.net/12MZEnxM2E35rMPvTCrYRg==/6632712635095805282.jpg',
                txtInput: '',
                txtChange: '',
                txtReturnType: '',
                txtSelection:'',
                autoFocus: false,
                totalCount:0,
                boxes: []
            };
        },
        created: function() {
            // this.mix_test();
            console.log("created!");
        },
        methods: {
            jumpIn (_index) {
                console.log("index:"+_index);
                var url = weex.config.bundleUrl;  //获取当前路径
                console.log(url);
                url = url.split('/').slice(0,-1).join('/') + '/player.html';//拼接当前路径到要跳转的文件
                console.log(url);
                navigator.push({
                    url: url,
                    animated: 'true'
                }, event => {
                    // 完成后执行的操作
                });
                storage.setItem('vid', this.boxes[_index].id, event => {
                    console.log('set success:'+this.boxes[_index].id)
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
                this.search(this.txtInput);
            },
            oninput: function (event) {//输入时触发
                this.txtInput = event.value;
                console.log('oninput', event.value);
            },
            httpCallback:function(val){//获得HTTP请求数据后的回调
                this.boxes=val;
            },
        }
    }
</script>
