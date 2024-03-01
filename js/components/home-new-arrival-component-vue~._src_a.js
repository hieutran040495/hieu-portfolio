(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/home-new-arrival-component-vue~._src_a"],{

/***/ "./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/home/new-arrival.component.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/home/new-arrival.component.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var _home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-property-decorator */ \"./node_modules/vue-property-decorator/lib/vue-property-decorator.js\");\n/* harmony import */ var _shared_utils_lazy_load_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/shared/utils/lazy-load.service */ \"./src/shared/utils/lazy-load.service.ts\");\n/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shared/models/product */ \"./src/shared/models/product.ts\");\n/* harmony import */ var _shared_constants_data_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/shared/constants/data-product */ \"./src/shared/constants/data-product.ts\");\n/* harmony import */ var _shared_utils_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/shared/utils/helper */ \"./src/shared/utils/helper.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar HomeNewArrivalComponent = /*#__PURE__*/function (_Vue) {\n  Object(_home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(HomeNewArrivalComponent, _Vue);\n\n  var _super = Object(_home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HomeNewArrivalComponent);\n\n  function HomeNewArrivalComponent() {\n    var _this;\n\n    Object(_home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HomeNewArrivalComponent);\n\n    _this = _super.apply(this, arguments);\n    _this.pageTitle = 'New Arrival';\n    _this.products = [];\n    return _this;\n  }\n\n  Object(_home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HomeNewArrivalComponent, [{\n    key: \"created\",\n    value: function created() {\n      // Call api\n      var newData = _shared_constants_data_product__WEBPACK_IMPORTED_MODULE_9__[\"PRODUCT_DATA\"].reverse().map(function (item) {\n        return new _shared_models_product__WEBPACK_IMPORTED_MODULE_8__[\"Product\"]().deserialize(item);\n      });\n\n      if (Object(_shared_utils_helper__WEBPACK_IMPORTED_MODULE_10__[\"isScreenLarge\"])()) {\n        this.products = Object(_shared_utils_helper__WEBPACK_IMPORTED_MODULE_10__[\"sliceArray\"])(newData, 4);\n        return;\n      }\n\n      this.products = Object(_shared_utils_helper__WEBPACK_IMPORTED_MODULE_10__[\"sliceArray\"])(newData, 8);\n    }\n  }, {\n    key: \"mounted\",\n    value: function mounted() {//\n    }\n  }]);\n\n  return HomeNewArrivalComponent;\n}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_6__[\"Vue\"]);\n\nHomeNewArrivalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_5__[\"__decorate\"])([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_6__[\"Component\"])({\n  name: 'HomeNewArrivalComponent',\n  components: {\n    CardPostComponent: _shared_utils_lazy_load_service__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loadComponent('card-post.component'),\n    HeaderPageComponent: _shared_utils_lazy_load_service__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loadComponent('header-page.component')\n  }\n})], HomeNewArrivalComponent);\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeNewArrivalComponent);\n\n//# sourceURL=webpack:///./src/components/home/new-arrival.component.vue?./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1d742ea8-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/home/new-arrival.component.vue?vue&type=template&id=76118c8a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1d742ea8-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/home/new-arrival.component.vue?vue&type=template&id=76118c8a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n\n\n\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"home-new-arrival s-container s-container--spacing px-0 pt-0\"\n    },\n    [\n      _c(\"HeaderPageComponent\", { attrs: { title: _vm.pageTitle } }),\n      _c(\n        vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VRow\"],\n        { attrs: { \"no-gutters\": \"\" } },\n        _vm._l(_vm.products, function(item) {\n          return _c(\n            vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VCol\"],\n            {\n              key: item.id,\n              staticClass: \"px-4 mb-10\",\n              attrs: { sm: \"6\", lg: \"3\", cols: \"12\" }\n            },\n            [_c(\"CardPostComponent\", { attrs: { item: item } })],\n            1\n          )\n        }),\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/home/new-arrival.component.vue?./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%221d742ea8-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/images/apps.svg":
/*!************************************!*\
  !*** ./src/assets/images/apps.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apps.29232cc4.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/apps.svg?");

/***/ }),

/***/ "./src/assets/images/design.svg":
/*!**************************************!*\
  !*** ./src/assets/images/design.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/design.cbcc9057.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/design.svg?");

/***/ }),

/***/ "./src/assets/images/layer.svg":
/*!*************************************!*\
  !*** ./src/assets/images/layer.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/layer.e6a7f413.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/layer.svg?");

/***/ }),

/***/ "./src/assets/images/marketing.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/marketing.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/marketing.dfa71a6f.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/marketing.svg?");

/***/ }),

/***/ "./src/assets/images/products/product-12.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-12.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-12.b53d1c37.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-12.jpg?");

/***/ }),

/***/ "./src/assets/images/products/product-13.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-13.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-13.1f5a1c38.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-13.jpg?");

/***/ }),

/***/ "./src/assets/images/products/product-14.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-14.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-14.0f2d9f2e.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-14.jpg?");

/***/ }),

/***/ "./src/assets/images/products/product-15.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-15.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-15.b4604738.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-15.jpg?");

/***/ }),

/***/ "./src/assets/images/products/product-16.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-16.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-16.ec57c085.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-16.jpg?");

/***/ }),

/***/ "./src/assets/images/products/product-17.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-17.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-17.0209b71b.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-17.jpg?");

/***/ }),

/***/ "./src/assets/images/products/product-18.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-18.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-18.c36f69ee.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-18.jpg?");

/***/ }),

/***/ "./src/assets/images/products/product-19-2.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/products/product-19-2.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-19-2.2d7012c5.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-19-2.jpg?");

/***/ }),

/***/ "./src/assets/images/products/product-19.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-19.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/product-19.71910dc4.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/products/product-19.jpg?");

/***/ }),

/***/ "./src/components/home/new-arrival.component.vue":
/*!*******************************************************!*\
  !*** ./src/components/home/new-arrival.component.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _new_arrival_component_vue_vue_type_template_id_76118c8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-arrival.component.vue?vue&type=template&id=76118c8a& */ \"./src/components/home/new-arrival.component.vue?vue&type=template&id=76118c8a&\");\n/* harmony import */ var _new_arrival_component_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-arrival.component.vue?vue&type=script&lang=ts& */ \"./src/components/home/new-arrival.component.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _new_arrival_component_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _new_arrival_component_vue_vue_type_template_id_76118c8a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _new_arrival_component_vue_vue_type_template_id_76118c8a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/home/new-arrival.component.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/home/new-arrival.component.vue?");

/***/ }),

/***/ "./src/components/home/new-arrival.component.vue?vue&type=script&lang=ts&":
/*!********************************************************************************!*\
  !*** ./src/components/home/new-arrival.component.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_cli_plugin_typescript_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_new_arrival_component_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!../../../node_modules/babel-loader/lib!../../../node_modules/ts-loader??ref--14-2!../../../node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./new-arrival.component.vue?vue&type=script&lang=ts& */ \"./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/home/new-arrival.component.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_cli_plugin_typescript_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_new_arrival_component_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/home/new-arrival.component.vue?");

/***/ }),

/***/ "./src/components/home/new-arrival.component.vue?vue&type=template&id=76118c8a&":
/*!**************************************************************************************!*\
  !*** ./src/components/home/new-arrival.component.vue?vue&type=template&id=76118c8a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1d742ea8_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_new_arrival_component_vue_vue_type_template_id_76118c8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"1d742ea8-vue-loader-template\"}!../../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./new-arrival.component.vue?vue&type=template&id=76118c8a& */ \"./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"1d742ea8-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/home/new-arrival.component.vue?vue&type=template&id=76118c8a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1d742ea8_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_new_arrival_component_vue_vue_type_template_id_76118c8a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_1d742ea8_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_new_arrival_component_vue_vue_type_template_id_76118c8a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/home/new-arrival.component.vue?");

/***/ }),

/***/ "./src/shared/constants/breakpoint.ts":
/*!********************************************!*\
  !*** ./src/shared/constants/breakpoint.ts ***!
  \********************************************/
/*! exports provided: BEAKPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BEAKPOINTS\", function() { return BEAKPOINTS; });\nvar BEAKPOINTS = {\n  LARGE: 1264,\n  MEDIUM: 960,\n  SMALL: 600,\n  EXTRA_SMALL: 599\n};\n\n//# sourceURL=webpack:///./src/shared/constants/breakpoint.ts?");

/***/ }),

/***/ "./src/shared/constants/data-product.ts":
/*!**********************************************!*\
  !*** ./src/shared/constants/data-product.ts ***!
  \**********************************************/
/*! exports provided: PRODUCT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_DATA\", function() { return PRODUCT_DATA; });\nvar PRODUCT_DATA = [{\n  id: 1,\n  category: {\n    id: 1,\n    name: 'Body Oil'\n  },\n  name: 'Essential Daily primer',\n  fee: 100000,\n  image_url: __webpack_require__(/*! @/assets/images/layer.svg */ \"./src/assets/images/layer.svg\")\n}, {\n  id: 2,\n  category: {\n    id: 1,\n    name: 'Blush Powder'\n  },\n  name: 'Essential Daily primer',\n  fee: 120000,\n  image_url: __webpack_require__(/*! @/assets/images/design.svg */ \"./src/assets/images/design.svg\")\n}, {\n  id: 3,\n  category: {\n    id: 1,\n    name: 'Cream Foundation'\n  },\n  name: 'Essential Daily primer',\n  fee: 140000,\n  image_url: __webpack_require__(/*! @/assets/images/marketing.svg */ \"./src/assets/images/marketing.svg\")\n}, {\n  id: 4,\n  category: {\n    id: 1,\n    name: 'Marooned Lipstick'\n  },\n  name: 'Essential Daily primer',\n  fee: 200000,\n  image_url: __webpack_require__(/*! @/assets/images/apps.svg */ \"./src/assets/images/apps.svg\")\n}, {\n  id: 5,\n  category: {\n    id: 1,\n    name: 'Body Oil'\n  },\n  name: 'Essential Daily primer',\n  fee: 100000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-12.jpg */ \"./src/assets/images/products/product-12.jpg\")\n}, {\n  id: 6,\n  category: {\n    id: 1,\n    name: 'Blush Powder'\n  },\n  name: 'Essential Daily primer',\n  fee: 120000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-13.jpg */ \"./src/assets/images/products/product-13.jpg\")\n}, {\n  id: 7,\n  category: {\n    id: 1,\n    name: 'Cream Foundation'\n  },\n  name: 'Essential Daily primer',\n  fee: 140000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-14.jpg */ \"./src/assets/images/products/product-14.jpg\")\n}, {\n  id: 8,\n  category: {\n    id: 1,\n    name: 'Marooned Lipstick'\n  },\n  name: 'Essential Daily primer',\n  fee: 200000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-15.jpg */ \"./src/assets/images/products/product-15.jpg\")\n}, {\n  id: 9,\n  category: {\n    id: 1,\n    name: 'Marooned Lipstick'\n  },\n  name: 'Essential Daily primer',\n  fee: 200000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-16.jpg */ \"./src/assets/images/products/product-16.jpg\")\n}, {\n  id: 10,\n  category: {\n    id: 1,\n    name: 'Marooned Lipstick'\n  },\n  name: 'Essential Daily primer',\n  fee: 200000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-17.jpg */ \"./src/assets/images/products/product-17.jpg\")\n}, {\n  id: 11,\n  category: {\n    id: 1,\n    name: 'Marooned Lipstick'\n  },\n  name: 'Essential Daily primer',\n  fee: 200000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-18.jpg */ \"./src/assets/images/products/product-18.jpg\")\n}, {\n  id: 12,\n  category: {\n    id: 1,\n    name: 'Marooned Lipstick'\n  },\n  name: 'Essential Daily primer',\n  fee: 200000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-19.jpg */ \"./src/assets/images/products/product-19.jpg\")\n}, {\n  id: 13,\n  category: {\n    id: 1,\n    name: 'Marooned Lipstick'\n  },\n  name: 'Essential Daily primer',\n  fee: 200000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-19-2.jpg */ \"./src/assets/images/products/product-19-2.jpg\")\n}, {\n  id: 14,\n  category: {\n    id: 1,\n    name: 'Marooned Lipstick'\n  },\n  name: 'Essential Daily primer',\n  fee: 200000,\n  image_url: __webpack_require__(/*! @/assets/images/products/product-16.jpg */ \"./src/assets/images/products/product-16.jpg\")\n}];\n\n//# sourceURL=webpack:///./src/shared/constants/data-product.ts?");

/***/ }),

/***/ "./src/shared/models sync recursive ^.*\\.jpg$":
/*!******************************************!*\
  !*** ./src/shared/models sync ^.*\.jpg$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/shared/models sync recursive ^.*\\\\.jpg$\";\n\n//# sourceURL=webpack:///./src/shared/models_sync_^.*\\.jpg$?");

/***/ }),

/***/ "./src/shared/models/category.ts":
/*!***************************************!*\
  !*** ./src/shared/models/category.ts ***!
  \***************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Category = /*#__PURE__*/function () {\n  function Category() {\n    Object(_home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Category);\n\n    this.name = '';\n  }\n\n  Object(_home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Category, [{\n    key: \"deserialize\",\n    value: function deserialize(input) {\n      Object.assign(this, input);\n      return this;\n    }\n  }]);\n\n  return Category;\n}();\n\n//# sourceURL=webpack:///./src/shared/models/category.ts?");

/***/ }),

/***/ "./src/shared/models/product.ts":
/*!**************************************!*\
  !*** ./src/shared/models/product.ts ***!
  \**************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return Product; });\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ \"./src/shared/models/category.ts\");\n\n\n\n\nvar Product = /*#__PURE__*/function () {\n  function Product() {\n    Object(_home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Product);\n\n    this.name = '';\n    this.image_url = '';\n    this.category = new _category__WEBPACK_IMPORTED_MODULE_3__[\"Category\"]();\n  }\n\n  Object(_home_hieuttn_Documents_My_Project_Portfolio_Deployed_hieu_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Product, [{\n    key: \"deserialize\",\n    value: function deserialize(input) {\n      Object.assign(this, input);\n      return this;\n    }\n  }, {\n    key: \"imagePath\",\n    get: function get() {\n      return __webpack_require__(\"./src/shared/models sync recursive ^.*\\\\.jpg$\")(\"\".concat(this.image_url, \".jpg\"));\n    }\n  }]);\n\n  return Product;\n}();\n\n//# sourceURL=webpack:///./src/shared/models/product.ts?");

/***/ }),

/***/ "./src/shared/utils/helper.ts":
/*!************************************!*\
  !*** ./src/shared/utils/helper.ts ***!
  \************************************/
/*! exports provided: jsonParse, sliceArray, isScreenSmall, isScreenLarge, aosDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsonParse\", function() { return jsonParse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sliceArray\", function() { return sliceArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isScreenSmall\", function() { return isScreenSmall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isScreenLarge\", function() { return isScreenLarge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aosDelay\", function() { return aosDelay; });\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/breakpoint */ \"./src/shared/constants/breakpoint.ts\");\n\n\nfunction jsonParse(data) {\n  var txt = JSON.stringify(data);\n  return JSON.parse(txt);\n}\nfunction sliceArray(items, amount) {\n  return items.slice(0, amount);\n}\nfunction isScreenSmall() {\n  return window.innerWidth < _constants_breakpoint__WEBPACK_IMPORTED_MODULE_1__[\"BEAKPOINTS\"].SMALL;\n}\nfunction isScreenLarge() {\n  return window.innerWidth < _constants_breakpoint__WEBPACK_IMPORTED_MODULE_1__[\"BEAKPOINTS\"].LARGE;\n}\nfunction aosDelay(max) {\n  var item = 0;\n  var arr = [item];\n\n  for (var i = 1; i < max; i++) {\n    item += 50;\n    arr.push(item);\n  }\n\n  return arr;\n}\n\n//# sourceURL=webpack:///./src/shared/utils/helper.ts?");

/***/ })

}]);