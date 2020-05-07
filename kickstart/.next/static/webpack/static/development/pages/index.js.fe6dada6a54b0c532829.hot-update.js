webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return factory; });
/* harmony import */ var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json");
var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json", 1);
//import {web3} from './web3';

function factory(web3) {
  return new web3.eth.Contract(_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_0__.abi, '0x45cE9Ae7d685F0A677D543d19aFd807843e3B4a8');
}
;

/***/ })

})
//# sourceMappingURL=index.js.fe6dada6a54b0c532829.hot-update.js.map