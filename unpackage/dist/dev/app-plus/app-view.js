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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/main.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! uni-pages?{"type":"view"} */ 1); // @ts-nocheck

function initView() {
  function injectStyles(context) {

    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 37);
    if (style0.__inject__) style0.__inject__(context);

  }
  typeof injectStyles === 'function' && injectStyles();
  Vue.component('tab-bar', __webpack_require__(/*! components/tabbar.vue */ 42).default);
  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!***********************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages.json?{"type":"view"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

window.__uniConfig = { "window": { "navigationBarTextStyle": "black", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#F8F8F8", "backgroundColor": "#F8F8F8" } };
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/home', function () {return Vue.extend(__webpack_require__(/*! pages/index/home.vue?mpType=page */ 2).default);});
__definePage('pages/index/policy', function () {return Vue.extend(__webpack_require__(/*! pages/index/policy.vue?mpType=page */ 8).default);});
__definePage('pages/index/match', function () {return Vue.extend(__webpack_require__(/*! pages/index/match.vue?mpType=page */ 13).default);});
__definePage('pages/index/mine', function () {return Vue.extend(__webpack_require__(/*! pages/index/mine.vue?mpType=page */ 18).default);});
__definePage('pages/index/login', function () {return Vue.extend(__webpack_require__(/*! pages/index/login.vue?mpType=page */ 29).default);});
__definePage('pages/index/otherLogin', function () {return Vue.extend(__webpack_require__(/*! pages/index/otherLogin.vue?mpType=page */ 50).default);});
__definePage('pages/index/register', function () {return Vue.extend(__webpack_require__(/*! pages/index/register.vue?mpType=page */ 58).default);});

/***/ }),
/* 2 */
/*!*****************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/home.vue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=1e445df6&mpType=page */ 3);
/* harmony import */ var _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!***********************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/home.vue?vue&type=template&id=1e445df6&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./home.vue?vue&type=template&id=1e445df6&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_template_id_1e445df6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/home.vue?vue&type=template&id=1e445df6&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("uni-view", { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } }, [
        _vm._v("home")
      ]),
      _c("tab-bar", { attrs: { _i: 2 } })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*****************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/home.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./home.vue?vue&type=script&lang=js&mpType=page */ 6);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/home.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!*******************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/policy.vue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policy.vue?vue&type=template&id=72423850&mpType=page */ 9);
/* harmony import */ var _policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policy.vue?vue&type=script&lang=js&mpType=page */ 11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/policy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/*!*************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/policy.vue?vue&type=template&id=72423850&mpType=page ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./policy.vue?vue&type=template&id=72423850&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_template_id_72423850_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/policy.vue?vue&type=template&id=72423850&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("uni-view", { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } }, [
    _vm._v("policy")
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!*******************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/policy.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./policy.vue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_policy_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/policy.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 13 */
/*!******************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/match.vue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.vue?vue&type=template&id=3c0e95a2&mpType=page */ 14);
/* harmony import */ var _match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.vue?vue&type=script&lang=js&mpType=page */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/match.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/*!************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/match.vue?vue&type=template&id=3c0e95a2&mpType=page ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./match.vue?vue&type=template&id=3c0e95a2&mpType=page */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_template_id_3c0e95a2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/match.vue?vue&type=template&id=3c0e95a2&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("uni-view", { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } }, [
        _vm._v("match")
      ]),
      _c("tab-bar", { attrs: { _i: 2 } })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!******************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/match.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./match.vue?vue&type=script&lang=js&mpType=page */ 17);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_match_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/match.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 18 */
/*!*****************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/mine.vue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mine.vue?vue&type=template&id=699a9879&scoped=true&mpType=page */ 19);
/* harmony import */ var _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mine.vue?vue&type=script&lang=js&mpType=page */ 21);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _mine_vue_vue_type_style_index_0_id_699a9879_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mine.vue?vue&type=style&index=0&id=699a9879&lang=scss&scoped=true&mpType=page */ 23);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs





/* normalize component */

var component = Object(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "699a9879",
  null,
  false,
  _mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/mine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/*!***********************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/mine.vue?vue&type=template&id=699a9879&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./mine.vue?vue&type=template&id=699a9879&scoped=true&mpType=page */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_template_id_699a9879_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/mine.vue?vue&type=template&id=699a9879&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                    [
                      _c("v-uni-image", {
                        staticClass: _vm._$g(5, "sc"),
                        attrs: {
                          src: _vm._$g(5, "a-src"),
                          mode: "aspectFill",
                          _i: 5
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                    [_c("v-uni-text", { attrs: { _i: 8 } }, [_vm._v("名字")])],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                    [_c("v-uni-text", { attrs: { _i: 10 } }, [_vm._v("其他")])],
                    1
                  )
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                    [
                      _c("v-uni-text", {
                        staticClass: _vm._$g(13, "sc"),
                        attrs: { _i: 13 }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c("tab-bar", { attrs: { _i: 14 } })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 21 */
/*!*****************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/mine.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./mine.vue?vue&type=script&lang=js&mpType=page */ 22);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/mine.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 23 */
/*!**************************************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/mine.vue?vue&type=style&index=0&id=699a9879&lang=scss&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_style_index_0_id_699a9879_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./mine.vue?vue&type=style&index=0&id=699a9879&lang=scss&scoped=true&mpType=page */ 24);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_style_index_0_id_699a9879_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_style_index_0_id_699a9879_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_style_index_0_id_699a9879_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_style_index_0_id_699a9879_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_mine_vue_vue_type_style_index_0_id_699a9879_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/mine.vue?vue&type=style&index=0&id=699a9879&lang=scss&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./mine.vue?vue&type=style&index=0&id=699a9879&lang=scss&scoped=true&mpType=page */ 25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 27).default
var update = add("b28b5a22", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 25 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/mine.vue?vue&type=style&index=0&id=699a9879&lang=scss&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\n.mine-page .mine-page-container .user-info-plate[data-v-699a9879] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 32rpx;\n}\n.mine-page .mine-page-container .user-info-plate .avatar[data-v-699a9879] {\r\n  width: 150rpx;\r\n  height: 150rpx;\r\n  border-radius: 50%;\n}\n.mine-page .mine-page-container .user-info-plate .avatar .image-wrap[data-v-699a9879] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.mine-page .mine-page-container .user-info-plate .avatar .image-wrap .image[data-v-699a9879] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\n}\n.mine-page .mine-page-container .user-info-plate .info[data-v-699a9879] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 20rpx;\n}\n.mine-page .mine-page-container .user-info-plate .info .title[data-v-699a9879] {\r\n  font-size: 32rpx;\r\n  font-weight: bold;\r\n  color: #000;\n}\n.mine-page .mine-page-container .user-info-plate .info .subtitle[data-v-699a9879] {\r\n  font-size: 26rpx;\r\n  color: #999;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 26 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 27 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 28);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}|@media.+?\{/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 28 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 29 */
/*!******************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/login.vue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page */ 30);
/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 32);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_e40dfa5a_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=e40dfa5a&lang=scss&scoped=true&mpType=page */ 34);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs





/* normalize component */

var component = Object(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e40dfa5a",
  null,
  false,
  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/*!************************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page */ 31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 31 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("uni-view", {
        staticClass: _vm._$g(1, "sc"),
        style: _vm._$g(1, "s"),
        attrs: { _i: 1 }
      }),
      _c(
        "uni-view",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(4, "sc"),
                  attrs: { _i: 4 },
                  on: {
                    click: function($event) {
                      return _vm.$handleViewEvent($event)
                    }
                  }
                },
                [
                  _c("v-uni-text", {
                    staticClass: _vm._$g(5, "sc"),
                    attrs: { _i: 5 }
                  })
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(6, "sc"),
                  attrs: { _i: 6 },
                  on: {
                    click: function($event) {
                      return _vm.$handleViewEvent($event)
                    }
                  }
                },
                [_c("v-uni-text", { attrs: { _i: 7 } }, [_vm._v("更多")])],
                1
              )
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                        [
                          _c("v-uni-image", {
                            staticClass: _vm._$g(12, "sc"),
                            attrs: {
                              src: _vm._$g(12, "a-src"),
                              mode: "aspectFill",
                              _i: 12
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 14 } }, [
                        _vm._v(_vm._$g(14, "t0-0"))
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                [
                  _vm._$g(16, "i")
                    ? _c(
                        "uni-view",
                        { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(17, "sc"),
                              attrs: { _i: 17 }
                            },
                            [
                              _c("v-uni-input", {
                                staticClass: _vm._$g(18, "sc"),
                                attrs: {
                                  type: "number",
                                  placeholder: "输入验证码",
                                  _i: 18
                                },
                                model: {
                                  value: _vm._$g(18, "v-model"),
                                  callback: function($$v) {
                                    _vm.$handleVModelEvent(18, $$v)
                                  },
                                  expression: "vcode"
                                }
                              })
                            ],
                            1
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(19, "sc"),
                              attrs: { _i: 19 }
                            },
                            [
                              _vm._$g(20, "i")
                                ? _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(20, "sc"),
                                      attrs: { _i: 20 },
                                      on: {
                                        click: function($event) {
                                          return _vm.$handleViewEvent($event)
                                        }
                                      }
                                    },
                                    [_vm._v("获取验证码")]
                                  )
                                : _vm._e(),
                              _vm._$g(21, "i")
                                ? _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(21, "sc"),
                                      attrs: { _i: 21 }
                                    },
                                    [_vm._v(_vm._$g(21, "t0-0") + "秒后发送")]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._$g(22, "i")
                    ? _c(
                        "uni-view",
                        { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(23, "sc"),
                              attrs: { _i: 23 }
                            },
                            [
                              _c("v-uni-text", {
                                staticClass: _vm._$g(24, "sc"),
                                attrs: { _i: 24 }
                              })
                            ],
                            1
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(25, "sc"),
                              attrs: { _i: 25 }
                            },
                            [
                              _c("v-uni-input", {
                                staticClass: _vm._$g(26, "sc"),
                                attrs: {
                                  type: "number",
                                  placeholder: "请输入密码",
                                  _i: 26
                                },
                                model: {
                                  value: _vm._$g(26, "v-model"),
                                  callback: function($$v) {
                                    _vm.$handleVModelEvent(26, $$v)
                                  },
                                  expression: "vcode"
                                }
                              })
                            ],
                            1
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(27, "sc"),
                              attrs: { _i: 27 }
                            },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(28, "sc"),
                                  attrs: { _i: 28 },
                                  on: {
                                    click: function($event) {
                                      return _vm.$handleViewEvent($event)
                                    }
                                  }
                                },
                                [_vm._v("忘记密码")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(31, "sc"),
                              attrs: { _i: 31 }
                            },
                            [_vm._v("登录")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                    [
                      _vm._$g(33, "i")
                        ? _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(33, "sc"),
                              attrs: { _i: 33 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c("v-uni-text", { attrs: { _i: 34 } }, [
                                _vm._v("账号密码登录")
                              ])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(35, "i")
                        ? _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(35, "sc"),
                              attrs: { _i: 35 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c("v-uni-text", { attrs: { _i: 36 } }, [
                                _vm._v("短信验证码登录")
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(38, "sc"),
                  attrs: { _i: 38 },
                  on: {
                    click: function($event) {
                      return _vm.$handleViewEvent($event)
                    }
                  }
                },
                [
                  _c(
                    "v-uni-radio-group",
                    { attrs: { _i: 39 } },
                    [
                      _c("v-uni-radio", {
                        staticStyle: { transform: "scale(0.7,0.7)" },
                        attrs: { checked: _vm._$g(40, "a-checked"), _i: 40 }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                [
                  _c(
                    "v-uni-text",
                    { staticStyle: { color: "#999" }, attrs: { _i: 42 } },
                    [_vm._v("您已阅读并同意")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 43 } }, [
                    _vm._v("《xxxxxxxx服务协议》《隐私权政策》")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 32 */
/*!******************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/login.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=script&lang=js&mpType=page */ 33);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/login.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 34 */
/*!***************************************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/login.vue?vue&type=style&index=0&id=e40dfa5a&lang=scss&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_id_e40dfa5a_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=style&index=0&id=e40dfa5a&lang=scss&scoped=true&mpType=page */ 35);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_id_e40dfa5a_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_id_e40dfa5a_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_id_e40dfa5a_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_id_e40dfa5a_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_id_e40dfa5a_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/login.vue?vue&type=style&index=0&id=e40dfa5a&lang=scss&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=style&index=0&id=e40dfa5a&lang=scss&scoped=true&mpType=page */ 36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 27).default
var update = add("482535f5", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 36 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/login.vue?vue&type=style&index=0&id=e40dfa5a&lang=scss&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\n.login-page .login-page-container[data-v-e40dfa5a] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  position: relative;\r\n  height: 100%;\r\n  padding-bottom: 32rpx;\n}\n.login-page .login-page-container .close-btn[data-v-e40dfa5a] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 32rpx;\n}\n.login-page .login-page-container .content[data-v-e40dfa5a] {\r\n  flex: 1;\n}\n.login-page .login-page-container .content .user-info-plate[data-v-e40dfa5a] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 100rpx 0 60rpx;\n}\n.login-page .login-page-container .content .user-info-plate .avatar[data-v-e40dfa5a] {\r\n  width: 148rpx;\r\n  height: 148rpx;\n}\n.login-page .login-page-container .content .user-info-plate .avatar .image-wrap[data-v-e40dfa5a] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.login-page .login-page-container .content .user-info-plate .avatar .image-wrap .image[data-v-e40dfa5a] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\n}\n.login-page .login-page-container .content .user-info-plate .user-name[data-v-e40dfa5a] {\r\n  margin-top: 20rpx;\r\n  font-size: 28rpx;\r\n  color: #666;\n}\n.login-page .login-page-container .content .login-plate[data-v-e40dfa5a] {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.login-page .login-page-container .content .login-plate .login-plate-item[data-v-e40dfa5a] {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 10rpx 20rpx;\n}\n.login-page .login-page-container .content .login-plate .phone[data-v-e40dfa5a] {\r\n  border-bottom: 2rpx solid #f1f1f1;\n}\n.login-page .login-page-container .content .login-plate .phone .label[data-v-e40dfa5a] {\r\n  margin-right: 32rpx;\r\n  font-size: 28rpx;\r\n  color: #000;\n}\n.login-page .login-page-container .content .login-plate .phone .input[data-v-e40dfa5a] {\r\n  flex: 1;\n}\n.login-page .login-page-container .content .login-plate .code[data-v-e40dfa5a] {\r\n  border-bottom: 2rpx solid #f1f1f1;\n}\n.login-page .login-page-container .content .login-plate .code .icon[data-v-e40dfa5a] {\r\n  margin-right: 20rpx;\n}\n.login-page .login-page-container .content .login-plate .code .input[data-v-e40dfa5a] {\r\n  flex: 1;\n}\n.login-page .login-page-container .content .login-plate .code .get-code[data-v-e40dfa5a] {\r\n  margin-left: 32rpx;\r\n  font-size: 26rpx;\r\n  color: #000;\n}\n.login-page .login-page-container .content .login-plate .login-btn[data-v-e40dfa5a] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-top: 60rpx;\n}\n.login-page .login-page-container .content .login-plate .login-btn .btn-wrap[data-v-e40dfa5a] {\r\n  width: 100%;\r\n  padding: 20rpx 0;\r\n  text-align: center;\r\n  background-color: #EBD32B;\r\n  border-radius: 48rpx;\n}\n.login-page .login-page-container .content .login-plate .login-btn .btn-wrap .btn[data-v-e40dfa5a] {\r\n  font-size: 36rpx;\r\n  color: #888;\n}\n.login-page .login-page-container .content .login-plate .change-type[data-v-e40dfa5a] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-top: 30rpx;\r\n  font-size: 28rpx;\r\n  color: #666;\n}\n.login-page .login-page-container .tips[data-v-e40dfa5a] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  /* radio 边框颜色 */\r\n  /* radio 选中后的样式 */\r\n  /* radio 选中后的图标样式*/\n}\n.login-page .login-page-container .tips .choose-tips[data-v-e40dfa5a] {\r\n  flex-shrink: 0;\r\n  -webkit-transform: translate(0, -4rpx);\r\n          transform: translate(0, -4rpx);\n}\n.login-page .login-page-container .tips .tips-content[data-v-e40dfa5a] {\r\n  flex: 1;\r\n  font-size: 26rpx;\n}\n.login-page .login-page-container .tips[data-v-e40dfa5a] uni-radio .uni-radio-input {\r\n  border-color: #C0C2C9 !important;\n}\n.login-page .login-page-container .tips uni-radio .uni-radio-input.uni-radio-input-checked[data-v-e40dfa5a] {\r\n  background-color: #248067 !important;\r\n  border-color: #248067 !important;\r\n  background-clip: content-box !important;\r\n  padding: 6rpx !important;\r\n  box-sizing: border-box;\n}\n.login-page .login-page-container .tips uni-radio .uni-radio-input.uni-radio-input-checked[data-v-e40dfa5a]::before {\r\n  display: none !important;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 37 */
/*!*************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 38);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 27).default
var update = add("aaae16c4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 39 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 26);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js */ 40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/static/font/iconfont.ttf */ 41);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*每个页面公共css */\r\n/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */\n@font-face {\r\n  font-family: 'iconfont';  /* Project id 3567627 */\r\n  src: \r\n       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAn8AAsAAAAAEQAAAAmuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACEQgqSeI9mATYCJAM0CxwABCAFhGcHgR4bjg4jESZcFUj2VwfmyaeQoQS21nwFNLkgzTEKJMvUvZHHZp1rkLukJmsNz3weSglR7ffZs3REoEHdOSJ2pI5TPuwiVCouLkICuvd+VXTchwQIeByetvnvYAkcgjvOTJyivUgrMCmjMLETNld3W1PCKsBl4FzXcSwqfyTCONCcl7x3r7W33QmLMJ2y9pafnlKSkD/II/yZAwRe/7fW6g2P7YhVs0YvM3M6N7Py8cHcK/FChJDUdlFp0C7yqDxCTGhbc42IXsnuWmIn5ZO/7R4RpVRv0F+65yBALM06qM7P7mESt/F4l1wGZ63Ap7tsy9oC0XImpiVYiNZc31MN8gIL6lZdBfAc/778A62NA4XVOFb6V7uW+fxaBaj6MnIJ/QuE9vlGcbsrwAIaqKcsW963F7ykU1Yf89i6voZ9IFWyfFXlUb3R3lg/yr/wQwEC1EgEHqWMIsOCfmQ8p0FIle6iTMvZckE8scQRQxTRWByGuf/zEBAHx+Mx620uy6P4dkNQAcRCjAYQBzEWaYgBPxKIgogCEA3RCcBC/APAQfwLwED8jzRoCABAQVDhfCc8ITwlF1RDOzCZOOpyzMSVCudz++HRqd+42OKKBDgnFi6LmVCQkRbvmZWampHoolxSOxYGHM50h8dbWbFGOTKYsDBXBOdmw4Jsab2WA6kO21RoFGi5GjPYAUxAEKoDcqFF7AK9O0+F1sEbgvdGHp+xDTROMXptQaFt09pKIYWIxBfnYSSpsFhws1lOEN3YEAQptuNGwKVBinlLt9qrFTZ6n5JtuFfxFjuVHNF6Fm2WFqtwmxKpGkOybR6a8wT/DZBgIjL1ujt17B5q0Gym45aJGjRvZc30YQFRITfi2xVDmKF9hCQJB5m3tMy6I7aISJkB8xPRCiKSIhBbiMsTms0i5G8pNMo7adIiGkZCo8kEupXcF4ySE9LibQ76Yt0IjYkNS/exG/TqZmFDiu10Nm6UGyoxVCRQblXrbMSiNPQaHyLWbMO3cIRClWpQiwjaw7SbRTgn0V1nMytuq31IkNIzZoZKhbgma6pxTtlGZakS27pRUc5cTXcpcCh/ez12dPSoCDHUpAddVg7kQoI5fraZkISQHXBLoN5eh+potG+LdPyondHsj+whxFANRoaguywT9aYqQi5p7mirtNXa7TTzmWWMuyDbDaDT+6iDIcW+y118Lu4BYxfl6RT9NmhkjxIhKFEooEFFUNicYwFJQvftxSkrE8oJwbHeVAVmN5IkRhCuG8xm3GKpZWDkbRK6qxHynUfpMG7anfchbhLSd3KUCBuWH8dPKEak2FZUve4JyoPG1YcDbOwlyrXbD59V4xpEubmdfrZ9ItVoAKPzhsidlem3beGQ4qWflEfzSiMwu+/TxaYiVwUE7Q1UZopo0EWuA4iFWGV7/eZvHKXT/r07u8lL7hXy5W75dJ/zYPJU9hVgYq3uWGJyNXUtG3JtY99tlvmV+a7R+En9y+qbeRWcBn5eUk5taENYD3CN7m4ojMgLD8+dVFA32+XP+5ukTlhY89+2TQX+ADzXpEyeFZWdHyKd1dVTN6kgPDcvvDCiLjpcEhoqkQlbl6W9wFSID7vD64PbhyYMXi7aQb1p32Ln3tPHlPrKuMo8/Ni+Jc49p01KXeL9JyrdT98BmlipO8A74P3NRYvKqhHZT59V1s8JrMrJ7jxRCivTGmoNc5nscXYO6bwBh+Rcjdf1R0wHppu9GxN1oAwXohkTHGe1UtdPgEG7ui6og9I4USQIqoM6AxqyRA28DtAQsH0hkoIks5Ot+dRd7BD2yAlxZDVTxpR6lnst28Kp4lQ4ljlV6vWVTmWOFdU0umWpV7lHCVzJrIkUj4ywQ8Ckoo6xtRocOnZqbGZsINc3NtaXa+LG+A6DG3gelrnrRdfq21fmOge5/V9icg/zQc5zr9wOu5O7mRntFMPcbBXmFFojH98sDaWfzQ36WzreujY1pTw68+PyOlZQScJ4ZPzk4JJa1vKPmaHlaXx2rV2xf++c8SXJOrerWi1brlT2Wxu05Wk2uuQS4HGbsaAqvR1tr0pbYPufDdEM4OVD/8djVQhTu2neQruFmwa0jm52Wrwer9PauwHo79N5qTwen5dRsJ4Bwb3Pzuz6gsCMAH4qL53X92hOqneUV2SkV5TPGmHjieuVUufYZjBADmCEFwYLDLbIOhLli5/Pt7/0+47KHwWd6YnsHwA/B2I6Zp+FRlH4M95csuczWHYsBp/zeh1iaxDmBYXCIAe8en4JBgkRwYHpGUFBG4ISj6sGR8Dg47Qltq6/FbpucC38zfVcGwMkLJ78XothQHt6LDLkM4QACl1SukwnkEB79mRDg4LrvnQJBaQPeR9DRo33YbeuGq7jRfolL04DYv8kv/hELj17hI0nrmaBOC0Zj5xYz1t1gtXOGfOq02lmpWx6DxtnVcLwLA5/Hgn+pO9e0Q4xjtHeBHuhx0I24bjrg+N3xw8jjgS7Q9rC2yE6JsbB6Qs37r7bZPnGxflm3fr7xGVxY2O53MeOC6csmNI+pePrguBKlha/vRPwFvUvfkcEqNbAqrv2XqM/+nbf/G7jWgkXXGxWI1c5bRGEqDm2tvuvipclynxXZW61irGyZrxoleWE5g5wS52XGBuCWoO4hcmLpMLBDVYnu8YX6I382fb9EYeUlMW8BLsNYDlhj0KHbbI8obrAuMMqlqkuHueDhFuD/j8AiDx3gOocR8uDqIroudZRe9jVPAqNXuMPXdEL/a4h+m+1k3In+p3/tUZv9g+01WJmatf/vU4fldoBtq+vmsqc7ianYOE8l9T2Pzr+Yqv/hj7LYtIfXfIrxkJVP3wO4ymnjbTYQuOZlZBg/jLG8ReSsh0ZkQjsMxQk8MQ2c9Zhse4qYDVLUv3h9DQWRQrROYcUr4gij+k6pZQZKLXxljhamYPSHh9Lna6z40izj0ZMDFDpBvFCsg/xikQ+MQ3lCzNQvsZbMvnMQQnFxzIqCebiqFwt9GaMzje4LiCkfZDm8Ua/OQ4tWlXtP1sVVMOJF1Rs/uKebYoj6hjP7gGCaQef4s24bRWKaWbyfXIvl0Nged0Re9Ju88Yw5GHyG+BqSS+I6oX5Pf/3vrFo0ELWE/1LU3nKbRw4sefYA33xvte4lPStRtEZ52QAPjOuqQN8yhislRoUUOrrMkZGwZ40oq64cHDnC335fn21e+CcZzeh8wMSpGq6YVq24wpP+iWPkkxDFtRZ+vi6pgH7gIH7WbCPL0WruGj/RNiVoT5VRqP0VLQVWl46Nd757A/JZR87dEoPQ2V7SNrxw6TWbDYA') format('woff2'),\r\n       url('//at.alicdn.com/t/c/font_3567627_u1rdu28vmc.woff?t=1661853417872') format('woff'),\r\n       url('//at.alicdn.com/t/c/font_3567627_u1rdu28vmc.ttf?t=1661853417872') format('truetype');\n}\n.iconfont {\r\n  font-family: \"iconfont\" !important;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-file:before {\r\n  content: \"\\e815\";\n}\n.icon-lost:before {\r\n  content: \"\\e814\";\n}\n.icon-readCount:before {\r\n  content: \"\\e813\";\n}\n.icon-about:before {\r\n  content: \"\\e812\";\n}\n.icon-coupon:before {\r\n  content: \"\\e80f\";\n}\n.icon-return:before {\r\n  content: \"\\e80c\";\n}\n.icon-pager-left:before {\r\n  content: \"\\e80d\";\n}\n.icon-pager-right:before {\r\n  content: \"\\e80e\";\n}\n.icon-sex-girl:before {\r\n  content: \"\\e80a\";\n}\n.icon-sex-boy:before {\r\n  content: \"\\e80b\";\n}\n.icon-safe:before {\r\n  content: \"\\e808\";\n}\n.icon-add:before {\r\n  content: \"\\e809\";\n}\n.icon-close:before {\r\n  content: \"\\e6dc\";\n}\n.icon-dingyue:before {\r\n  content: \"\\e807\";\n}\n.icon-viewrecord:before {\r\n  content: \"\\e806\";\n}\n.icon-personal:before {\r\n  content: \"\\e804\";\n}\n.icon-collection:before {\r\n  content: \"\\e805\";\n}\n.icon-share2:before {\r\n  content: \"\\e802\";\n}\n.icon-kefu:before {\r\n  content: \"\\e606\";\n}\n.icon-star:before {\r\n  content: \"\\e803\";\n}\n.icon-share:before {\r\n  content: \"\\e800\";\n}\n.icon-position:before {\r\n  content: \"\\e7ff\";\n}\n.icon-campus:before {\r\n  content: \"\\e7fd\";\n}\n.icon-search:before {\r\n  content: \"\\e779\";\n}\n.icon-policy-copy:before {\r\n  content: \"\\e810\";\n}\n.icon-policy:before {\r\n  content: \"\\e7fc\";\n}\n.icon-more-txt:before {\r\n  content: \"\\e741\";\n}\n.icon-more:before {\r\n  content: \"\\e742\";\n}\n.icon-match:before {\r\n  content: \"\\e607\";\n}\n.icon-match-copy:before {\r\n  content: \"\\e811\";\n}\n.icon-user:before {\r\n  content: \"\\e603\";\n}\n.icon-home:before {\r\n  content: \"\\e605\";\n}\n.icon-work:before {\r\n  content: \"\\e602\";\n}\n.page-common{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tline-height: 1.5;\r\n\tbox-sizing: border-box;\n}\nuni-page-body{\r\n\twidth: 100%;\r\n\theight: 100%;\n}\n.hover-effect{\r\n\topacity: 0.8;\n}\n@font-face {\r\n\tfont-family: 'iconfont';\r\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\r\n/* 把我们所有标签的内外边距清零 */\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\n}\r\n/* em 和 i 斜体的文字都不倾斜 */\nem,\r\ni {\r\n\tfont-style: normal\n}\r\n/* 去掉每个li前面的小圆点 */\nli {\r\n\tlist-style: none\n}\nimg {\r\n\tborder: 0;/* 为了照顾低版本浏览器,如果 图片的外面包含了链接 会出现边框的问题 */\r\n\tvertical-align: middle /* 解决图片底侧出现空白缝隙的问题 */\n}\nuni-button {\r\n\tcursor: pointer /* 当我们鼠标经过button按钮时,鼠标变成小手的样子 */\n}\na {\r\n\tcolor: #666;\r\n\ttext-decoration: none\n}\nuni-button,\r\nuni-input {\r\n\tfont-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, \"\\5B8B\\4F53\", sans-serif\n}\nbody {\r\n\t/* 抗锯齿性,避免文字被放大后会产生锯齿 */\r\n\t-webkit-font-smoothing: antialiased;\r\n\tbackground-color: #fff;\r\n\t/* 12px/1.5 表示所有字体的大小为12px,1.5倍的行高 */\r\n\t/* \"\\5B8B\\4F53\" 代表的是宋体，用这种方式，浏览器的兼容性会比较好。 把中文字体的名称用相应的Unicode编码来代替，这样就可以有效地避免浏览器解释CSS代码时出现乱码的情况*/\r\n\tfont: 16px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, \"\\5B8B\\4F53\", sans-serif;\r\n\tcolor: #666\n}\n.hide,\r\n.none {\r\n\tdisplay: none\n}\r\n/* 清除浮动 */\n.clearfix:after {\r\n\tvisibility: hidden;\r\n\tclear: both;\r\n\tdisplay: block;\r\n\tcontent: \".\";\r\n\theight: 0\n}\nbody{\r\n\tfont-family:\"微软雅黑\";\n}\r\n\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 40 */
/*!**************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {}
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = url && url.__esModule ? url.default : url

  if (typeof url !== 'string') {
    return url
  } // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1)
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls

  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
  }
  if (url.indexOf('/') === 0) {
    return url.substr(1)
  }
  return url
}


/***/ }),
/* 41 */
/*!*********************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/static/font/iconfont.ttf ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/font/iconfont.ttf";

/***/ }),
/* 42 */
/*!******************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/components/tabbar.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbar.vue?vue&type=template&id=852a8b4e&scoped=true& */ 43);
/* harmony import */ var _tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbar.vue?vue&type=script&lang=js& */ 45);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tabbar_vue_vue_type_style_index_0_id_852a8b4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabbar.vue?vue&type=style&index=0&id=852a8b4e&lang=scss&scoped=true& */ 47);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs





/* normalize component */

var component = Object(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "852a8b4e",
  null,
  false,
  _tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/tabbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 43 */
/*!*************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/components/tabbar.vue?vue&type=template&id=852a8b4e&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./tabbar.vue?vue&type=template&id=852a8b4e&scoped=true& */ 44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_template_id_852a8b4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 44 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/components/tabbar.vue?vue&type=template&id=852a8b4e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        _vm._l(_vm._$g(2, "f"), function(item, index, $20, $30) {
          return _c(
            "uni-view",
            {
              key: item,
              staticClass: _vm._$g("2-" + $30, "sc"),
              attrs: { _i: "2-" + $30 },
              on: {
                click: function($event) {
                  return _vm.$handleViewEvent($event)
                }
              }
            },
            [
              _vm._$g("3-" + $30, "i")
                ? _c("img", {
                    staticClass: _vm._$g("3-" + $30, "sc"),
                    attrs: { src: _vm._$g("3-" + $30, "a-src"), _i: "3-" + $30 }
                  })
                : _c("img", {
                    staticClass: _vm._$g("4-" + $30, "sc"),
                    attrs: { src: _vm._$g("4-" + $30, "a-src"), _i: "4-" + $30 }
                  }),
              _c(
                "v-uni-text",
                { class: _vm._$g("5-" + $30, "c"), attrs: { _i: "5-" + $30 } },
                [_vm._v(_vm._$g("5-" + $30, "t0-0"))]
              )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 45 */
/*!*******************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/components/tabbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./tabbar.vue?vue&type=script&lang=js& */ 46);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 46 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/components/tabbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 47 */
/*!****************************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/components/tabbar.vue?vue&type=style&index=0&id=852a8b4e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_style_index_0_id_852a8b4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./tabbar.vue?vue&type=style&index=0&id=852a8b4e&lang=scss&scoped=true& */ 48);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_style_index_0_id_852a8b4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_style_index_0_id_852a8b4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_style_index_0_id_852a8b4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_style_index_0_id_852a8b4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_tabbar_vue_vue_type_style_index_0_id_852a8b4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 48 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/components/tabbar.vue?vue&type=style&index=0&id=852a8b4e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./tabbar.vue?vue&type=style&index=0&id=852a8b4e&lang=scss&scoped=true& */ 49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 27).default
var update = add("3f39864a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 49 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/components/tabbar.vue?vue&type=style&index=0&id=852a8b4e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\n.tabbar[data-v-852a8b4e] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100rpx;\r\n  z-index: 999;\r\n  background: #F5F5F5;\r\n  border-top: 2rpx solid #eee;\n}\n.navigator[data-v-852a8b4e] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 85%;\r\n  margin: 0 auto;\r\n  padding: 20rpx;\n}\n.navigator-item[data-v-852a8b4e] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  width: 50rpx;\r\n  height: 100%;\n}\n.item-text[data-v-852a8b4e] {\r\n  margin-top: 6rpx;\r\n  color: #777E86;\r\n  font-size: 24rpx;\n}\n.text-active[data-v-852a8b4e] {\r\n  color: #2E92FD !important;\n}\n.icon[data-v-852a8b4e] {\r\n  width: 20px;\r\n  height: 20px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 50 */
/*!***********************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/otherLogin.vue?mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otherLogin.vue?vue&type=template&id=90f7a842&scoped=true&mpType=page */ 51);
/* harmony import */ var _otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otherLogin.vue?vue&type=script&lang=js&mpType=page */ 53);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _otherLogin_vue_vue_type_style_index_0_id_90f7a842_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherLogin.vue?vue&type=style&index=0&id=90f7a842&lang=scss&scoped=true&mpType=page */ 55);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs





/* normalize component */

var component = Object(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "90f7a842",
  null,
  false,
  _otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/otherLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 51 */
/*!*****************************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/otherLogin.vue?vue&type=template&id=90f7a842&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./otherLogin.vue?vue&type=template&id=90f7a842&scoped=true&mpType=page */ 52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_template_id_90f7a842_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 52 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/otherLogin.vue?vue&type=template&id=90f7a842&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("uni-view", {
        staticClass: _vm._$g(1, "sc"),
        style: _vm._$g(1, "s"),
        attrs: { _i: 1 }
      }),
      _c(
        "uni-view",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(5, "sc"),
                      attrs: { _i: 5 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [
                      _c("v-uni-text", {
                        staticClass: _vm._$g(6, "sc"),
                        attrs: { _i: 6 }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                        [
                          _c("v-uni-text", { attrs: { _i: 10 } }, [
                            _vm._v("亲，欢迎登录")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                        [
                          _c("v-uni-text", { attrs: { _i: 12 } }, [
                            _vm._v("没有账号？")
                          ]),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(13, "sc"),
                              attrs: { _i: 13 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [_vm._v("立即注册")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                    [
                      _vm._$g(15, "i")
                        ? _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(15, "sc"),
                              attrs: { _i: 15 }
                            },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(16, "sc"),
                                  attrs: { _i: 16 }
                                },
                                [
                                  _c("v-uni-text", { attrs: { _i: 17 } }, [
                                    _vm._v("+86")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(18, "sc"),
                                  attrs: { _i: 18 }
                                },
                                [
                                  _c("v-uni-input", {
                                    attrs: {
                                      type: "text",
                                      maxlength: "11",
                                      placeholder: "请输入手机号",
                                      _i: 19
                                    },
                                    model: {
                                      value: _vm._$g(19, "v-model"),
                                      callback: function($$v) {
                                        _vm.$handleVModelEvent(19, $$v)
                                      },
                                      expression: "phoneNumber"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(20, "i")
                        ? _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(20, "sc"),
                              attrs: { _i: 20 }
                            },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(21, "sc"),
                                  attrs: { _i: 21 }
                                },
                                [
                                  _c("v-uni-input", {
                                    staticClass: _vm._$g(22, "sc"),
                                    attrs: {
                                      type: "number",
                                      placeholder: "输入验证码",
                                      _i: 22
                                    },
                                    model: {
                                      value: _vm._$g(22, "v-model"),
                                      callback: function($$v) {
                                        _vm.$handleVModelEvent(22, $$v)
                                      },
                                      expression: "vcode"
                                    }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(23, "sc"),
                                  attrs: { _i: 23 }
                                },
                                [
                                  _vm._$g(24, "i")
                                    ? _c(
                                        "uni-view",
                                        {
                                          staticClass: _vm._$g(24, "sc"),
                                          attrs: { _i: 24 },
                                          on: {
                                            click: function($event) {
                                              return _vm.$handleViewEvent(
                                                $event
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("获取验证码")]
                                      )
                                    : _vm._e(),
                                  _vm._$g(25, "i")
                                    ? _c(
                                        "uni-view",
                                        {
                                          staticClass: _vm._$g(25, "sc"),
                                          attrs: { _i: 25 }
                                        },
                                        [
                                          _vm._v(
                                            _vm._$g(25, "t0-0") + "秒后发送"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(26, "i")
                        ? _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(26, "sc"),
                              attrs: { _i: 26 }
                            },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(27, "sc"),
                                  attrs: { _i: 27 }
                                },
                                [
                                  _c("v-uni-input", {
                                    attrs: {
                                      type: "text",
                                      maxlength: "11",
                                      placeholder: "请输入手机号",
                                      _i: 28
                                    },
                                    model: {
                                      value: _vm._$g(28, "v-model"),
                                      callback: function($$v) {
                                        _vm.$handleVModelEvent(28, $$v)
                                      },
                                      expression: "phoneNumber"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(29, "i")
                        ? _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(29, "sc"),
                              attrs: { _i: 29 }
                            },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(30, "sc"),
                                  attrs: { _i: 30 }
                                },
                                [
                                  _c("v-uni-input", {
                                    staticClass: _vm._$g(31, "sc"),
                                    attrs: {
                                      type: "number",
                                      placeholder: "请输入密码",
                                      _i: 31
                                    },
                                    model: {
                                      value: _vm._$g(31, "v-model"),
                                      callback: function($$v) {
                                        _vm.$handleVModelEvent(31, $$v)
                                      },
                                      expression: "vcode"
                                    }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(32, "sc"),
                                  attrs: { _i: 32 }
                                },
                                [
                                  _c("v-uni-text", {
                                    staticClass: _vm._$g(33, "sc"),
                                    attrs: { _i: 33 }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
                        [
                          _vm._$g(35, "i")
                            ? _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(35, "sc"),
                                  attrs: { _i: 35 }
                                },
                                [
                                  _vm._$g(36, "i")
                                    ? _c(
                                        "uni-view",
                                        {
                                          staticClass: _vm._$g(36, "sc"),
                                          attrs: { _i: 36 },
                                          on: {
                                            click: function($event) {
                                              return _vm.$handleViewEvent(
                                                $event
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-uni-text",
                                            { attrs: { _i: 37 } },
                                            [_vm._v("账号密码登录")]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._$g(38, "i")
                            ? _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(38, "sc"),
                                  attrs: { _i: 38 }
                                },
                                [
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(39, "sc"),
                                      attrs: { _i: 39 },
                                      on: {
                                        click: function($event) {
                                          return _vm.$handleViewEvent($event)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-uni-text", { attrs: { _i: 40 } }, [
                                        _vm._v("短信验证码登录")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(41, "sc"),
                                      attrs: { _i: 41 }
                                    },
                                    [
                                      _c(
                                        "uni-view",
                                        {
                                          staticClass: _vm._$g(42, "sc"),
                                          attrs: { _i: 42 },
                                          on: {
                                            click: function($event) {
                                              return _vm.$handleViewEvent(
                                                $event
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("忘记密码")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(44, "sc"),
                              attrs: { _i: 44 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g(45, "sc"),
                                  attrs: { _i: 45 }
                                },
                                [_vm._v("登录")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(47, "sc"),
                      attrs: { _i: 47 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-uni-radio-group",
                        { attrs: { _i: 48 } },
                        [
                          _c("v-uni-radio", {
                            staticStyle: { transform: "scale(0.7,0.7)" },
                            attrs: { checked: _vm._$g(49, "a-checked"), _i: 49 }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticStyle: { color: "#999" }, attrs: { _i: 51 } },
                        [_vm._v("您已阅读并同意")]
                      ),
                      _c("v-uni-text", { attrs: { _i: 52 } }, [
                        _vm._v("《xxxxxxxx服务协议》《隐私权政策》")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(53, "sc"),
              style: _vm._$g(53, "s"),
              attrs: { _i: 53 }
            },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(56, "sc"), attrs: { _i: 56 } },
                        [
                          _c("v-uni-text", { attrs: { _i: 57 } }, [
                            _vm._v("服务协议及隐私保护")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(58, "sc"), attrs: { _i: 58 } },
                        [
                          _c("v-uni-text", { attrs: { _i: 59 } }, [
                            _vm._v("您已阅读并同意")
                          ]),
                          _c("v-uni-text", { attrs: { _i: 60 } }, [
                            _vm._v("您已阅读并同意您已阅读并同意您已阅读并同意")
                          ]),
                          _c("v-uni-text", { attrs: { _i: 61 } }, [
                            _vm._v(
                              "您已阅读并同意您已阅读并同意您已阅读并同意您已阅读并同意您已阅读并同意"
                            )
                          ])
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(62, "sc"), attrs: { _i: 62 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(63, "sc"),
                              attrs: { _i: 63 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c("v-uni-text", { attrs: { _i: 64 } }, [
                                _vm._v("不同意")
                              ])
                            ],
                            1
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(65, "sc"),
                              attrs: { _i: 65 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c("v-uni-text", { attrs: { _i: 66 } }, [
                                _vm._v("同意")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(67, "sc"),
                      attrs: { _i: 67 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [_c("v-uni-text", { attrs: { _i: 68 } }, [_vm._v("x")])],
                    1
                  )
                ],
                1
              ),
              _c("uni-view", {
                staticClass: _vm._$g(69, "sc"),
                attrs: { _i: 69 }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 53 */
/*!***********************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/otherLogin.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./otherLogin.vue?vue&type=script&lang=js&mpType=page */ 54);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/otherLogin.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 55 */
/*!********************************************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/otherLogin.vue?vue&type=style&index=0&id=90f7a842&lang=scss&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_style_index_0_id_90f7a842_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./otherLogin.vue?vue&type=style&index=0&id=90f7a842&lang=scss&scoped=true&mpType=page */ 56);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_style_index_0_id_90f7a842_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_style_index_0_id_90f7a842_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_style_index_0_id_90f7a842_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_style_index_0_id_90f7a842_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_otherLogin_vue_vue_type_style_index_0_id_90f7a842_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 56 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/otherLogin.vue?vue&type=style&index=0&id=90f7a842&lang=scss&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./otherLogin.vue?vue&type=style&index=0&id=90f7a842&lang=scss&scoped=true&mpType=page */ 57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 27).default
var update = add("fe61456c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 57 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/otherLogin.vue?vue&type=style&index=0&id=90f7a842&lang=scss&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\n.login-page[data-v-90f7a842] {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.login-page .login-page-container[data-v-90f7a842] {\r\n  flex: 1;\n}\n.login-page .login-page-container .popup[data-v-90f7a842] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.login-page .login-page-container .popup .popup-wrap[data-v-90f7a842] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n  max-width: 350px;\r\n  z-index: 100;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content[data-v-90f7a842] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  padding: 40rpx 46rpx;\r\n  text-align: center;\r\n  border-radius: 32rpx;\r\n  background-color: #fff;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .title[data-v-90f7a842] {\r\n  font-size: 32rpx;\r\n  color: #000;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .content[data-v-90f7a842] {\r\n  margin-top: 12rpx;\r\n  min-height: 60px;\r\n  text-align: start;\r\n  font-size: 26rpx;\r\n  color: #999;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .btn-wrap[data-v-90f7a842] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 40rpx;\r\n  padding: 0 20rpx;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .btn-wrap .btn[data-v-90f7a842] {\r\n  flex: 1;\r\n  padding: 20rpx 32rpx;\r\n  border-radius: 52rpx;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .btn-wrap .btn1[data-v-90f7a842] {\r\n  margin-right: 32rpx;\r\n  color: #EBD32B;\r\n  background-color: #fff;\r\n  border: 2rpx solid #EBD32B;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .btn-wrap .btn2[data-v-90f7a842] {\r\n  color: #fff;\r\n  background-color: #EBD32B;\n}\n.login-page .login-page-container .popup .popup-wrap .close-btn[data-v-90f7a842] {\r\n  margin-top: 40rpx;\r\n  width: 70rpx;\r\n  height: 70rpx;\r\n  line-height: 70rpx;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.login-page .login-page-container .popup .mask[data-v-90f7a842] {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.login-page .login-page-wrap[data-v-90f7a842] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  position: relative;\r\n  padding: 0 32rpx;\r\n  height: 100%;\r\n  padding-bottom: 32rpx;\n}\n.login-page .login-page-wrap .close-btn[data-v-90f7a842] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 32rpx;\n}\n.login-page .login-page-wrap .content[data-v-90f7a842] {\r\n  flex: 1;\n}\n.login-page .login-page-wrap .content .top[data-v-90f7a842] {\r\n  padding: 64rpx 20rpx;\n}\n.login-page .login-page-wrap .content .top .title[data-v-90f7a842] {\r\n  font-size: 56rpx;\r\n  color: #000;\n}\n.login-page .login-page-wrap .content .top .subtitle[data-v-90f7a842] {\r\n  margin-top: 10rpx;\r\n  font-size: 32rpx;\n}\n.login-page .login-page-wrap .content .top .subtitle .register[data-v-90f7a842] {\r\n  color: #EBD32B;\n}\n.login-page .login-page-wrap .content .login-plate[data-v-90f7a842] {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.login-page .login-page-wrap .content .login-plate .login-plate-item[data-v-90f7a842] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 16rpx 20rpx;\r\n  margin-bottom: 36rpx;\n}\n.login-page .login-page-wrap .content .login-plate .phone[data-v-90f7a842] {\r\n  border-bottom: 2rpx solid #f1f1f1;\n}\n.login-page .login-page-wrap .content .login-plate .phone .label[data-v-90f7a842] {\r\n  margin-right: 32rpx;\r\n  font-size: 28rpx;\r\n  color: #000;\n}\n.login-page .login-page-wrap .content .login-plate .phone .input[data-v-90f7a842] {\r\n  flex: 1;\n}\n.login-page .login-page-wrap .content .login-plate .code[data-v-90f7a842] {\r\n  border-bottom: 2rpx solid #f1f1f1;\n}\n.login-page .login-page-wrap .content .login-plate .code .icon[data-v-90f7a842] {\r\n  margin-right: 20rpx;\n}\n.login-page .login-page-wrap .content .login-plate .code .input[data-v-90f7a842] {\r\n  flex: 1;\n}\n.login-page .login-page-wrap .content .login-plate .code .get-code[data-v-90f7a842] {\r\n  margin-left: 32rpx;\r\n  font-size: 26rpx;\r\n  color: #000;\n}\n.login-page .login-page-wrap .content .login-plate .login-btn[data-v-90f7a842] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 60rpx;\n}\n.login-page .login-page-wrap .content .login-plate .login-btn .btn-wrap[data-v-90f7a842] {\r\n  width: 100%;\r\n  padding: 20rpx 0;\r\n  text-align: center;\r\n  background-color: #EBD32B;\r\n  border-radius: 48rpx;\n}\n.login-page .login-page-wrap .content .login-plate .login-btn .btn-wrap .btn[data-v-90f7a842] {\r\n  font-size: 36rpx;\r\n  color: #888;\n}\n.login-page .login-page-wrap .content .login-plate .change-type[data-v-90f7a842] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 28rpx;\r\n  color: #666;\n}\n.login-page .login-page-wrap .content .login-plate .change-type .change-type-wrap[data-v-90f7a842] {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\n}\n.login-page .login-page-wrap .tips[data-v-90f7a842] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  /* radio 边框颜色 */\r\n  /* radio 选中后的样式 */\r\n  /* radio 选中后的图标样式*/\n}\n.login-page .login-page-wrap .tips .choose-tips[data-v-90f7a842] {\r\n  flex-shrink: 0;\r\n  -webkit-transform: translate(0, -4rpx);\r\n          transform: translate(0, -4rpx);\n}\n.login-page .login-page-wrap .tips .tips-content[data-v-90f7a842] {\r\n  flex: 1;\r\n  font-size: 26rpx;\n}\n.login-page .login-page-wrap .tips[data-v-90f7a842] uni-radio .uni-radio-input {\r\n  border-color: #C0C2C9 !important;\n}\n.login-page .login-page-wrap .tips uni-radio .uni-radio-input.uni-radio-input-checked[data-v-90f7a842] {\r\n  background-color: #248067 !important;\r\n  border-color: #248067 !important;\r\n  background-clip: content-box !important;\r\n  padding: 6rpx !important;\r\n  box-sizing: border-box;\n}\n.login-page .login-page-wrap .tips uni-radio .uni-radio-input.uni-radio-input-checked[data-v-90f7a842]::before {\r\n  display: none !important;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/*!*********************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/register.vue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=4d20986e&scoped=true&mpType=page */ 59);
/* harmony import */ var _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js&mpType=page */ 61);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _register_vue_vue_type_style_index_0_id_4d20986e_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&id=4d20986e&lang=scss&scoped=true&mpType=page */ 63);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs





/* normalize component */

var component = Object(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d20986e",
  null,
  false,
  _register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */
/*!***************************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/register.vue?vue&type=template&id=4d20986e&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=template&id=4d20986e&scoped=true&mpType=page */ 60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_4d20986e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 60 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/register.vue?vue&type=template&id=4d20986e&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("uni-view", {
        staticClass: _vm._$g(1, "sc"),
        style: _vm._$g(1, "s"),
        attrs: { _i: 1 }
      }),
      _c(
        "uni-view",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(5, "sc"),
                      attrs: { _i: 5 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [
                      _c("v-uni-text", {
                        staticClass: _vm._$g(6, "sc"),
                        attrs: { _i: 6 }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                [
                  _vm._$g(8, "i")
                    ? _c(
                        "uni-view",
                        { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                        [
                          _c(
                            "uni-view",
                            { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                            [
                              _c("v-uni-text", { attrs: { _i: 10 } }, [
                                _vm._v("手机号注册")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._$g(11, "i")
                    ? _c(
                        "uni-view",
                        { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(12, "sc"),
                              attrs: { _i: 12 }
                            },
                            [
                              _c("v-uni-text", { attrs: { _i: 13 } }, [
                                _vm._v("手机号注册")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                    [
                      _vm._$g(15, "i")
                        ? _c(
                            "uni-view",
                            { attrs: { _i: 15 } },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(16, "sc"),
                                  attrs: { _i: 16 }
                                },
                                [
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(17, "sc"),
                                      attrs: { _i: 17 }
                                    },
                                    [
                                      _c("v-uni-text", { attrs: { _i: 18 } }, [
                                        _vm._v("+86")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(19, "sc"),
                                      attrs: { _i: 19 }
                                    },
                                    [
                                      _c("v-uni-input", {
                                        attrs: {
                                          type: "text",
                                          maxlength: "11",
                                          placeholder: "请输入手机号",
                                          _i: 20
                                        },
                                        model: {
                                          value: _vm._$g(20, "v-model"),
                                          callback: function($$v) {
                                            _vm.$handleVModelEvent(20, $$v)
                                          },
                                          expression: "phoneNumber"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(21, "sc"),
                                  attrs: { _i: 21 }
                                },
                                [
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(22, "sc"),
                                      attrs: { _i: 22 }
                                    },
                                    [
                                      _c("v-uni-input", {
                                        staticClass: _vm._$g(23, "sc"),
                                        attrs: {
                                          type: "number",
                                          placeholder: "输入验证码",
                                          _i: 23
                                        },
                                        model: {
                                          value: _vm._$g(23, "v-model"),
                                          callback: function($$v) {
                                            _vm.$handleVModelEvent(23, $$v)
                                          },
                                          expression: "vcode"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(24, "sc"),
                                      attrs: { _i: 24 }
                                    },
                                    [
                                      _vm._$g(25, "i")
                                        ? _c(
                                            "uni-view",
                                            {
                                              staticClass: _vm._$g(25, "sc"),
                                              attrs: { _i: 25 },
                                              on: {
                                                click: function($event) {
                                                  return _vm.$handleViewEvent(
                                                    $event
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("获取验证码")]
                                          )
                                        : _vm._e(),
                                      _vm._$g(26, "i")
                                        ? _c(
                                            "uni-view",
                                            {
                                              staticClass: _vm._$g(26, "sc"),
                                              attrs: { _i: 26 }
                                            },
                                            [
                                              _vm._v(
                                                _vm._$g(26, "t0-0") + "秒后发送"
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(27, "i")
                        ? _c(
                            "uni-view",
                            { attrs: { _i: 27 } },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(28, "sc"),
                                  attrs: { _i: 28 }
                                },
                                [
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(29, "sc"),
                                      attrs: { _i: 29 }
                                    },
                                    [
                                      _c("v-uni-input", {
                                        attrs: {
                                          type: "text",
                                          maxlength: "11",
                                          placeholder: "请输入手机号",
                                          _i: 30
                                        },
                                        model: {
                                          value: _vm._$g(30, "v-model"),
                                          callback: function($$v) {
                                            _vm.$handleVModelEvent(30, $$v)
                                          },
                                          expression: "phoneNumber"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(31, "sc"),
                                  attrs: { _i: 31 }
                                },
                                [
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(32, "sc"),
                                      attrs: { _i: 32 }
                                    },
                                    [
                                      _c("v-uni-input", {
                                        staticClass: _vm._$g(33, "sc"),
                                        attrs: {
                                          type: "number",
                                          placeholder: "请输入密码",
                                          _i: 33
                                        },
                                        model: {
                                          value: _vm._$g(33, "v-model"),
                                          callback: function($$v) {
                                            _vm.$handleVModelEvent(33, $$v)
                                          },
                                          expression: "vcode"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(34, "sc"),
                                      attrs: { _i: 34 }
                                    },
                                    [
                                      _c("v-uni-text", {
                                        staticClass: _vm._$g(35, "sc"),
                                        attrs: { _i: 35 }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(36, "sc"),
                                  attrs: { _i: 36 }
                                },
                                [
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(37, "sc"),
                                      attrs: { _i: 37 }
                                    },
                                    [
                                      _c("v-uni-input", {
                                        staticClass: _vm._$g(38, "sc"),
                                        attrs: {
                                          type: "number",
                                          placeholder: "再次输入密码",
                                          _i: 38
                                        },
                                        model: {
                                          value: _vm._$g(38, "v-model"),
                                          callback: function($$v) {
                                            _vm.$handleVModelEvent(38, $$v)
                                          },
                                          expression: "vcode"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(39, "sc"),
                                      attrs: { _i: 39 }
                                    },
                                    [
                                      _c("v-uni-text", {
                                        staticClass: _vm._$g(40, "sc"),
                                        attrs: { _i: 40 }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                        [
                          _vm._$g(42, "i")
                            ? _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(42, "sc"),
                                  attrs: { _i: 42 }
                                },
                                [
                                  _vm._$g(43, "i")
                                    ? _c(
                                        "uni-view",
                                        {
                                          staticClass: _vm._$g(43, "sc"),
                                          attrs: { _i: 43 },
                                          on: {
                                            click: function($event) {
                                              return _vm.$handleViewEvent(
                                                $event
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-uni-text",
                                            { attrs: { _i: 44 } },
                                            [_vm._v("账号密码注册")]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._$g(45, "i")
                            ? _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(45, "sc"),
                                  attrs: { _i: 45 }
                                },
                                [
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(46, "sc"),
                                      attrs: { _i: 46 },
                                      on: {
                                        click: function($event) {
                                          return _vm.$handleViewEvent($event)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-uni-text", { attrs: { _i: 47 } }, [
                                        _vm._v("短信验证码注册")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(49, "sc"),
                              attrs: { _i: 49 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g(50, "sc"),
                                  attrs: { _i: 50 }
                                },
                                [_vm._v("注册")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(51, "sc"), attrs: { _i: 51 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(52, "sc"),
                      attrs: { _i: 52 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-uni-radio-group",
                        { attrs: { _i: 53 } },
                        [
                          _c("v-uni-radio", {
                            staticStyle: { transform: "scale(0.7,0.7)" },
                            attrs: { checked: _vm._$g(54, "a-checked"), _i: 54 }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticStyle: { color: "#999" }, attrs: { _i: 56 } },
                        [_vm._v("您已阅读并同意")]
                      ),
                      _c("v-uni-text", { attrs: { _i: 57 } }, [
                        _vm._v("《xxxxxxxx服务协议》《隐私权政策》")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(58, "sc"),
              style: _vm._$g(58, "s"),
              attrs: { _i: 58 }
            },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(59, "sc"), attrs: { _i: 59 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(60, "sc"), attrs: { _i: 60 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(61, "sc"), attrs: { _i: 61 } },
                        [
                          _c("v-uni-text", { attrs: { _i: 62 } }, [
                            _vm._v("服务协议及隐私保护")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(63, "sc"), attrs: { _i: 63 } },
                        [
                          _c("v-uni-text", { attrs: { _i: 64 } }, [
                            _vm._v("您已阅读并同意")
                          ]),
                          _c("v-uni-text", { attrs: { _i: 65 } }, [
                            _vm._v("您已阅读并同意您已阅读并同意您已阅读并同意")
                          ]),
                          _c("v-uni-text", { attrs: { _i: 66 } }, [
                            _vm._v(
                              "您已阅读并同意您已阅读并同意您已阅读并同意您已阅读并同意您已阅读并同意"
                            )
                          ])
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(67, "sc"), attrs: { _i: 67 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(68, "sc"),
                              attrs: { _i: 68 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c("v-uni-text", { attrs: { _i: 69 } }, [
                                _vm._v("不同意")
                              ])
                            ],
                            1
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(70, "sc"),
                              attrs: { _i: 70 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c("v-uni-text", { attrs: { _i: 71 } }, [
                                _vm._v("同意")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(72, "sc"),
                      attrs: { _i: 72 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [_c("v-uni-text", { attrs: { _i: 73 } }, [_vm._v("x")])],
                    1
                  )
                ],
                1
              ),
              _c("uni-view", {
                staticClass: _vm._$g(74, "sc"),
                attrs: { _i: 74 }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 61 */
/*!*********************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/register.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=script&lang=js&mpType=page */ 62);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 62 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/register.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 63 */
/*!******************************************************************************************************************************************************!*\
  !*** D:/project file/my-project/uniCloud/Repatriation/pages/index/register.vue?vue&type=style&index=0&id=4d20986e&lang=scss&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_id_4d20986e_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=style&index=0&id=4d20986e&lang=scss&scoped=true&mpType=page */ 64);
/* harmony import */ var _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_id_4d20986e_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_id_4d20986e_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_id_4d20986e_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_id_4d20986e_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_program_file_HbuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_id_4d20986e_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 64 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/register.vue?vue&type=style&index=0&id=4d20986e&lang=scss&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=style&index=0&id=4d20986e&lang=scss&scoped=true&mpType=page */ 65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 27).default
var update = add("07db015f", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 65 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/project file/my-project/uniCloud/Repatriation/pages/index/register.vue?vue&type=style&index=0&id=4d20986e&lang=scss&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../program file/HbuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 26);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\n.login-page[data-v-4d20986e] {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.login-page .login-page-container[data-v-4d20986e] {\r\n  flex: 1;\n}\n.login-page .login-page-container .popup[data-v-4d20986e] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.login-page .login-page-container .popup .popup-wrap[data-v-4d20986e] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n  max-width: 350px;\r\n  z-index: 100;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content[data-v-4d20986e] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  padding: 40rpx 46rpx;\r\n  text-align: center;\r\n  border-radius: 32rpx;\r\n  background-color: #fff;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .title[data-v-4d20986e] {\r\n  font-size: 32rpx;\r\n  color: #000;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .content[data-v-4d20986e] {\r\n  margin-top: 12rpx;\r\n  min-height: 60px;\r\n  text-align: start;\r\n  font-size: 26rpx;\r\n  color: #999;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .btn-wrap[data-v-4d20986e] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 40rpx;\r\n  padding: 0 20rpx;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .btn-wrap .btn[data-v-4d20986e] {\r\n  flex: 1;\r\n  padding: 20rpx 32rpx;\r\n  border-radius: 52rpx;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .btn-wrap .btn1[data-v-4d20986e] {\r\n  margin-right: 32rpx;\r\n  color: #EBD32B;\r\n  background-color: #fff;\r\n  border: 2rpx solid #EBD32B;\n}\n.login-page .login-page-container .popup .popup-wrap .popup-content .btn-wrap .btn2[data-v-4d20986e] {\r\n  color: #fff;\r\n  background-color: #EBD32B;\n}\n.login-page .login-page-container .popup .popup-wrap .close-btn[data-v-4d20986e] {\r\n  margin-top: 40rpx;\r\n  width: 70rpx;\r\n  height: 70rpx;\r\n  line-height: 70rpx;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.login-page .login-page-container .popup .mask[data-v-4d20986e] {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.login-page .login-page-wrap[data-v-4d20986e] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  position: relative;\r\n  padding: 0 32rpx;\r\n  height: 100%;\r\n  padding-bottom: 32rpx;\n}\n.login-page .login-page-wrap .close-btn[data-v-4d20986e] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 32rpx;\n}\n.login-page .login-page-wrap .content[data-v-4d20986e] {\r\n  flex: 1;\n}\n.login-page .login-page-wrap .content .top[data-v-4d20986e] {\r\n  padding: 64rpx 20rpx;\n}\n.login-page .login-page-wrap .content .top .title[data-v-4d20986e] {\r\n  font-size: 56rpx;\r\n  color: #000;\n}\n.login-page .login-page-wrap .content .top .subtitle[data-v-4d20986e] {\r\n  margin-top: 10rpx;\r\n  font-size: 32rpx;\n}\n.login-page .login-page-wrap .content .top .subtitle .register[data-v-4d20986e] {\r\n  color: #EBD32B;\n}\n.login-page .login-page-wrap .content .login-plate[data-v-4d20986e] {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.login-page .login-page-wrap .content .login-plate .login-plate-item[data-v-4d20986e] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 16rpx 20rpx;\r\n  margin-bottom: 36rpx;\n}\n.login-page .login-page-wrap .content .login-plate .phone[data-v-4d20986e] {\r\n  border-bottom: 2rpx solid #f1f1f1;\n}\n.login-page .login-page-wrap .content .login-plate .phone .label[data-v-4d20986e] {\r\n  margin-right: 32rpx;\r\n  font-size: 28rpx;\r\n  color: #000;\n}\n.login-page .login-page-wrap .content .login-plate .phone .input[data-v-4d20986e] {\r\n  flex: 1;\n}\n.login-page .login-page-wrap .content .login-plate .code[data-v-4d20986e] {\r\n  border-bottom: 2rpx solid #f1f1f1;\n}\n.login-page .login-page-wrap .content .login-plate .code .icon[data-v-4d20986e] {\r\n  margin-right: 20rpx;\n}\n.login-page .login-page-wrap .content .login-plate .code .input[data-v-4d20986e] {\r\n  flex: 1;\n}\n.login-page .login-page-wrap .content .login-plate .code .get-code[data-v-4d20986e] {\r\n  margin-left: 32rpx;\r\n  font-size: 26rpx;\r\n  color: #000;\n}\n.login-page .login-page-wrap .content .login-plate .login-btn[data-v-4d20986e] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 60rpx;\n}\n.login-page .login-page-wrap .content .login-plate .login-btn .btn-wrap[data-v-4d20986e] {\r\n  width: 100%;\r\n  padding: 20rpx 0;\r\n  text-align: center;\r\n  background-color: #EBD32B;\r\n  border-radius: 48rpx;\n}\n.login-page .login-page-wrap .content .login-plate .login-btn .btn-wrap .btn[data-v-4d20986e] {\r\n  font-size: 36rpx;\r\n  color: #888;\n}\n.login-page .login-page-wrap .content .login-plate .change-type[data-v-4d20986e] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 28rpx;\r\n  color: #666;\n}\n.login-page .login-page-wrap .content .login-plate .change-type .change-type-wrap[data-v-4d20986e] {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\n}\n.login-page .login-page-wrap .tips[data-v-4d20986e] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  /* radio 边框颜色 */\r\n  /* radio 选中后的样式 */\r\n  /* radio 选中后的图标样式*/\n}\n.login-page .login-page-wrap .tips .choose-tips[data-v-4d20986e] {\r\n  flex-shrink: 0;\r\n  -webkit-transform: translate(0, -4rpx);\r\n          transform: translate(0, -4rpx);\n}\n.login-page .login-page-wrap .tips .tips-content[data-v-4d20986e] {\r\n  flex: 1;\r\n  font-size: 26rpx;\n}\n.login-page .login-page-wrap .tips[data-v-4d20986e] uni-radio .uni-radio-input {\r\n  border-color: #C0C2C9 !important;\n}\n.login-page .login-page-wrap .tips uni-radio .uni-radio-input.uni-radio-input-checked[data-v-4d20986e] {\r\n  background-color: #248067 !important;\r\n  border-color: #248067 !important;\r\n  background-clip: content-box !important;\r\n  padding: 6rpx !important;\r\n  box-sizing: border-box;\n}\n.login-page .login-page-wrap .tips uni-radio .uni-radio-input.uni-radio-input-checked[data-v-4d20986e]::before {\r\n  display: none !important;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ })
/******/ ]);