webpackHotUpdate("static/development/pages/campaigns/[campaign_id].js",{

/***/ "./pages/campaigns/[campaign_id]/index.js":
/*!************************************************!*\
  !*** ./pages/campaigns/[campaign_id]/index.js ***!
  \************************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ContributeForm */ "./components/ContributeForm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/macbook/ethereum/kickstart/pages/campaigns/[campaign_id]/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var CampaignShow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CampaignShow, _Component);

  var _super = _createSuper(CampaignShow);

  function CampaignShow() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CampaignShow);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          minimumContribution = _this$props.minimumContribution,
          balance = _this$props.balance,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount,
          manager = _this$props.manager;
      var items = [{
        header: manager,
        meta: 'Address of manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become an approver'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Request must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people you have already donated to this Campaign'
      }, {
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__["default"].utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend'
      }];
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"].Group, {
        items: items,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 16
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["Layout"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: "ui header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, "Campaign details"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
        width: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }
      }, this.renderCards()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, {
        width: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, __jsx(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        address: this.props.address,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 29
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/campaigns/[campaign_id]/requests",
        as: "/campaigns/".concat(this.props.address, "/requests"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 29
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        primary: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 33
        }
      }, "View Requests"))))));
    }
  }]);

  return CampaignShow;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(CampaignShow));

/***/ })

})
//# sourceMappingURL=[campaign_id].js.91336853c373651eef9e.hot-update.js.map