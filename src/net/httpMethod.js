//http请求
var stream = weex.requireModule('stream');
export default {
    methods: {
        //http请求
        httpReq(key){
            var me = this;
            //文字转码
            var keyWord=encodeURI(key);
            var url="http://open.abc.com/search/video/by_keywords?category=1362&keywords="+keyWord+"&size=20&page=1";
            console.log("request http for "+url);
            stream.fetch({
                method: 'GET',
                url: url,
                type:'jsonp'
            }, function(ret) {
                if(!ret.ok){
                    me.getJsonpResult = "request failed";
                    return 0;
                }else{
                    var _count=me.parseInfo(ret.data);
                    console.log('_count:'+_count);
                    return _count;
                }
            });
        },
        parseInfo(_info){
            var me = this;
            me.getJsonpResult =  JSON.stringify(_info);
            // console.log('get:'+me.getJsonpResult);
            var obj =JSON.parse(me.getJsonpResult);
            var objArray =obj.body.resources;
            for(var i=0;i<objArray.length;i++){
                // console.log('title:'+objArray[i].title);
                console.log('title:'+objArray[i].id);
            }
            return objArray.length;
        }
    }
}