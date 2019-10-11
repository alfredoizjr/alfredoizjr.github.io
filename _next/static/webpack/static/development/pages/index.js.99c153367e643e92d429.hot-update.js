webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Events.js":
/*!******************************!*\
  !*** ./components/Events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./components/Event.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\react\\next-app\\components\\Events.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Events = function Events(props) {
  var eventId = Object.key(props.events);
  return __jsx("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, eventId.map(function (key) {
    return __jsx(_Event__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      info: props.events[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ })

})
//# sourceMappingURL=index.js.99c153367e643e92d429.hot-update.js.map