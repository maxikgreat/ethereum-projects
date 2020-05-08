webpackHotUpdate("static/development/pages/campaigns/[campaign_id]/requests/new.js",{

/***/ "./pages/campaigns/[campaign_id]/requests/new.js":
/*!*******************************************************!*\
  !*** ./pages/campaigns/[campaign_id]/requests/new.js ***!
  \*******************************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestNew; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../ethereum/campaign */ "./ethereum/campaign.js");








var _jsxFileName = "/Users/macbook/ethereum/kickstart/pages/campaigns/[campaign_id]/requests/new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var RequestNew = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestNew, _Component);

  var _super = _createSuper(RequestNew);

  function RequestNew() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RequestNew);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      description: '',
      value: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onCreateRequest", function _callee(e) {
      var campaign, _this$state, description, value, recipient, accoutns;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_14__["campaignCreate"])(_this.props.campaign_id);
              _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

              _this.setState({
                loading: true,
                errorMessage: ''
              });

              _context.prev = 4;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].eth.getAccounts());

            case 7:
              accoutns = _context.sent;
              _context.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__["default"].utils.toWei(value, 'ether'), recipient).send({
                from: accoutns[0]
              }));

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 15:
              _this.setState({
                loading: false
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[4, 12]], Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RequestNew, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["Layout"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, "Create a Request"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onCreateRequest,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }
      }, "Description"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.description,
        onChange: function onChange(e) {
          return _this2.setState({
            description: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }
      }, "Value in Ether"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.value,
        onChange: function onChange(e) {
          return _this2.setState({
            value: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, "Recipient"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        value: this.state.recipient,
        onChange: function onChange(e) {
          return _this2.setState({
            recipient: e.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        primary: true,
        loading: this.state.loading,
        disabled: this.state.loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }
      }, "Create!")));
    }
  }]);

  return RequestNew;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var __N_SSP = true;


/***/ })

})
//# sourceMappingURL=new.js.115d055ca52a6cc1cb57.hot-update.js.map