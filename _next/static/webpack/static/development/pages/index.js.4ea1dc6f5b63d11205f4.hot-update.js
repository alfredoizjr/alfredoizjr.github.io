webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Event.js":
/*!*****************************!*\
  !*** ./components/Event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\react\\next-app\\components\\Event.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Event = function Event(props) {
  var _props$event = props.event,
      name = _props$event.name,
      url = _props$event.url,
      description = _props$event.description;
  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250) + '...';
  }

  return __jsx("a", {
    href: url,
    target: "_blank",
    className: "list-group-item active text-ligth mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name.text), __jsx("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, desc));
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ })

})
//# sourceMappingURL=index.js.4ea1dc6f5b63d11205f4.hot-update.js.map