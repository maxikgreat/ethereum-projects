webpackHotUpdate(1,{

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
/* harmony import */ var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json");
var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json", 1);


console.log(_web3__WEBPACK_IMPORTED_MODULE_0__["web3"].version);
var factory = new _web3__WEBPACK_IMPORTED_MODULE_0__["web3"].eth.Contract(_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__.abi, '0x45cE9Ae7d685F0A677D543d19aFd807843e3B4a8');

/***/ })

})
//# sourceMappingURL=1.1add3021ed32a5c7ba66.hot-update.js.map