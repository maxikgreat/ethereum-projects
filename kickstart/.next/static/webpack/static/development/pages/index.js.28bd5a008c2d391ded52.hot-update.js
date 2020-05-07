webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _web = _interopRequireDefault(__webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js"));

var _CampaignFactory = _interopRequireDefault(__webpack_require__(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json"));

var web3;

if (true) {
  web3 = new _web["default"](window.ethereum);
  window.web3 = web3;

  var _factory = new web3.eth.Contract(_CampaignFactory["default"].abi, '0x45cE9Ae7d685F0A677D543d19aFd807843e3B4a8');
}

module.exports = factory;

/***/ })

})
//# sourceMappingURL=index.js.28bd5a008c2d391ded52.hot-update.js.map