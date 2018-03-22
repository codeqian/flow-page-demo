//http请求
export function test(){
    console.log("test");
}
export function httpReq(key){
    console.log("totalCount text:"+this.totalCount)
    //文字转码
    var keyWord=encodeURI(key);
    var url="http://open.boosj.com/search/video/by_keywords?category=1362&keywords="+keyWord+"&size=20&page=1";
    console.log("request http for "+url);
    var stream = weex.requireModule('stream');
    stream.fetch({
        method: 'GET',
        url: url,
        type:'jsonp'
    }, function(ret) {
        if(!ret.ok){
            this.getJsonpResult = "request failed";
            return 0;
        }else{
            var _count=parseInfo(ret.data);
            console.log('count:'+_count);
            return _count;
        }
    });
}

export function parseInfo(_info){
    var getJsonpResult =  JSON.stringify(_info);
    // console.log('get:'+me.getJsonpResult);
    var obj =JSON.parse(getJsonpResult);
    var objArray =obj.body.resources;
    for(var i=0;i<objArray.length;i++){
        // console.log('title:'+objArray[i].title);
        console.log('title:'+objArray[i].id);
    }
    return objArray.length;
}