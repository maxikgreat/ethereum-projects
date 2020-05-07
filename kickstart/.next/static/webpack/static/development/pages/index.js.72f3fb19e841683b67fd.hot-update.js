webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _web = _interopRequireDefault(__webpack_require__(/*! ./web3 */ "./ethereum/web3.js"));

var _CampaignFactory = _interopRequireDefault(__webpack_require__(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json"));

var factory;

if (true) {
  factory = new _web["default"].eth.Contract(_CampaignFactory["default"].abi, '0x45cE9Ae7d685F0A677D543d19aFd807843e3B4a8');
}

module.exports = factory;

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _web = _interopRequireDefault(__webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js"));

var web3;

if (true) {
  web3 = new _web["default"](window.ethereum);
  window.web3 = web3;
}

module.exports = web3;

/***/ })

})
//# sourceMappingURL=index.js.72f3fb19e841683b67fd.hot-update.js.map