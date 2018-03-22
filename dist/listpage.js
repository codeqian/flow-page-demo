// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = test;
exports.httpReq = httpReq;
exports.parseInfo = parseInfo;
//http请求
function test() {
    console.log("test");
}
function httpReq(key, httpCallback) {
    //文字转码
    var keyWord = encodeURI(key);
    var url = "http://open.boosj.com/search/video/by_keywords?category=1362&keywords=" + keyWord + "&size=20&page=1";
    console.log("request http for " + url);
    var stream = weex.requireModule('stream');
    stream.fetch({
        method: 'GET',
        url: url,
        type: 'jsonp'
    }, function (ret) {
        if (!ret.ok) {
            this.getJsonpResult = "request failed";
            httpCallback(0);
        } else {
            var _count = parseInfo(ret.data);
            console.log('count:' + _count);
            httpCallback(_count);
        }
    });
}

function parseInfo(_info) {
    var getJsonpResult = JSON.stringify(_info);
    // console.log('get:'+me.getJsonpResult);
    var obj = JSON.parse(getJsonpResult);
    var objArray = obj.body.resources;
    for (var i = 0; i < objArray.length; i++) {
        // console.log('title:'+objArray[i].title);
        console.log('title:' + objArray[i].id);
    }
    return objArray.length;
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\Git\\flow-page-demo\\src\\listpage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d7d9910a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {
  "mainBody": {
    "height": 100,
    "width": 100
  },
  "titleBar": {
    "paddingTop": 10 * CSS_UNIT.PT,
    "paddingRight": 10 * CSS_UNIT.PT,
    "paddingBottom": 10 * CSS_UNIT.PT,
    "paddingLeft": 10 * CSS_UNIT.PT,
    "backgroundColor": "#0099ff"
  },
  "menuBody": {
    "display": "inline-block",
    "paddingTop": 10 * CSS_UNIT.PT,
    "paddingRight": 10 * CSS_UNIT.PT,
    "paddingBottom": 10 * CSS_UNIT.PT,
    "paddingLeft": 10 * CSS_UNIT.PT
  },
  "menuText": {
    "fontSize": 20 * CSS_UNIT.PT,
    "color": "#5f6bff"
  },
  "inlineBox": {
    "marginTop": 10 * CSS_UNIT.PT,
    "marginRight": 10 * CSS_UNIT.PT,
    "marginBottom": 10 * CSS_UNIT.PT,
    "marginLeft": 10 * CSS_UNIT.PT,
    "verticalAlign": "center",
    "float": "left"
  },
  "barText": {
    "fontSize": 20 * CSS_UNIT.PT,
    "color": "#fcffff"
  },
  "inputText": {
    "backgroundColor": "#FAEBD7"
  },
  "hintText": {
    "fontSize": 20 * CSS_UNIT.PT,
    "color": "#676569"
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _httpFunction = __webpack_require__(15);

var httpJs = _interopRequireWildcard(_httpFunction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//混入测试
// Vue.mixin(mixJs);

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import netJs from "./net/httpMethod";
// import mixJs from "./net/mixTest";

module.exports = {
    data: function data() {
        return {
            txtInput: '',
            txtChange: '',
            txtReturnType: '',
            txtSelection: '',
            autoFocus: false,
            totalCount: 0
        };
    },
    created: function created() {
        // this.mix_test();
        console.log("created：" + this.totalCount);
    },
    methods: {
        jumpIn: function jumpIn(event) {
            var url = weex.config.bundleUrl; //获取当前路径
            console.log(url);
            url = url.split('/').slice(0, -1).join('/') + '/index.html'; //拼接当前路径到要跳转的文件
            console.log(url);
            navigator.push({
                url: url,
                animated: 'true'
            }, function (event) {
                // 完成后执行的操作
            });
        },
        jumpOut: function jumpOut() {
            navigator.pop({
                animated: 'true'
            });
        },
        search: function search(key) {
            // netJs.methods.httpReq(key);
            httpJs.httpReq(key, this.httpCallback);
        },

        onchange: function onchange(event) {
            //输入完毕回车或失去焦点时触发
            this.txtChange = event.value;
            console.log('onchange', event.value);
        },
        oninput: function oninput(event) {
            //输入时触发
            this.txtInput = event.value;
            console.log('oninput', event.value);
        },
        httpCallback: function httpCallback(val) {
            this.totalCount = val;
        }
    }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mainBody"]
  }, [_c('div', {
    staticClass: ["titleBar"]
  }, [_c('text', {
    staticClass: ["barText"],
    on: {
      "click": _vm.jumpOut
    }
  }, [_vm._v("back")])]), _c('div', {
    staticClass: ["menuBody"]
  }, [_c('div', {
    staticClass: ["inlineBox"]
  }, [_c('text', {
    staticClass: ["menuText"]
  }, [_vm._v("共 " + _vm._s(_vm.totalCount) + " 条")])]), _c('div', {
    staticClass: ["inlineBox"]
  }, [_c('input', {
    staticClass: ["inputText"],
    attrs: {
      "type": "text",
      "placeholder": "Input Text",
      "autoFocus": true,
      "value": ""
    },
    on: {
      "change": _vm.onchange,
      "input": _vm.oninput
    }
  })]), _c('div', {
    staticClass: ["inlineBox"]
  }, [_c('text', {
    staticClass: ["menuText"],
    on: {
      "click": function($event) {
        _vm.search(_vm.txtInput)
      }
    }
  }, [_vm._v("Search")])])]), _c('div', {
    staticStyle: {
      backgroundColor: "#afddff",
      width: "100%",
      height: "1pt"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });