webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/*! exports provided: factory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json");
var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json", 1);


var factory = function factory(web3) {
  return new web3.eth.Contract(_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__.abi, '0x45cE9Ae7d685F0A677D543d19aFd807843e3B4a8');
};

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import Web3 from 'web3';
// export const web3 = new Web3(window.ethereum);

/***/ })

})
//# sourceMappingURL=index.js.c6dc3ceed01daf372760.hot-update.js.map