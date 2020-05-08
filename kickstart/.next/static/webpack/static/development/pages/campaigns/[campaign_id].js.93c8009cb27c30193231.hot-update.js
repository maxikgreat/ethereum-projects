webpackHotUpdate("static/development/pages/campaigns/[campaign_id].js",{

/***/ "./ethereum/campaign.js":
/*!******************************!*\
  !*** ./ethereum/campaign.js ***!
  \******************************/
/*! exports provided: campaignCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignCreate", function() { return campaignCreate; });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_Campaign_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/Campaign.json */ "./ethereum/build/Campaign.json");
var _build_Campaign_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/Campaign.json */ "./ethereum/build/Campaign.json", 1);


var campaignCreate = function campaignCreate(address) {
  return new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(_build_Campaign_json__WEBPACK_IMPORTED_MODULE_1__.abi, address);
};

/***/ })

})
//# sourceMappingURL=[campaign_id].js.93c8009cb27c30193231.hot-update.js.map