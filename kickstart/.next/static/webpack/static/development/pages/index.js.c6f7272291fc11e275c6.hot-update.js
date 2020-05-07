webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var web3;

if ( true && typeof window.ethereum !== 'undefined') {
  // we are in browser and user have metamask
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum);
  window.web3 = web3;
} else {}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=index.js.c6f7272291fc11e275c6.hot-update.js.map