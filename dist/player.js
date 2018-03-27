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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
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
__vue_options__.__file = "F:\\Git\\flow-page-demo\\src\\player.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-14bc19af"
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
/* 10 */
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
  "barText": {
    "fontSize": 20 * CSS_UNIT.PT,
    "color": "#fcffff"
  },
  "videoPlayer": {
    "width": 100
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');

exports.default = {
    name: "player",
    data: function data() {
        return {
            vid: '',
            state: '----',
            title: "test video",
            videoSrc: "http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
        };
    },
    created: function created() {
        var _this = this;

        // this.mix_test();
        storage.getItem('vid', function (event) {
            console.log('get value:', event.data);
            _this.vid = event.data;
            _this.title = "id:" + _this.vid;
        });
    },
    methods: {
        jumpOut: function jumpOut() {
            navigator.pop({
                animated: 'true'
            });
        },
        onstart: function onstart(event) {
            this.state = 'onstart';
        },
        onpause: function onpause(event) {
            this.state = 'onpause';
        },
        onfinish: function onfinish(event) {
            this.state = 'onfinish';
        },
        onfail: function onfail(event) {
            this.state = 'onfinish';
        }
    }
};

/***/ }),
/* 12 */
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
  }, [_vm._v("back")])]), _c('video', {
    staticClass: ["videoPlayer"],
    attrs: {
      "id": "Player",
      "src": _vm.videoSrc,
      "autoPlay": "true",
      "controls": ""
    },
    on: {
      "start": _vm.onstart,
      "pause": _vm.onpause,
      "finish": _vm.onfinish,
      "fail": _vm.onfail
    }
  }), _c('text', [_vm._v("标题：" + _vm._s(_vm.title))]), _c('text', [_vm._v("当前状态：" + _vm._s(_vm.state))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);