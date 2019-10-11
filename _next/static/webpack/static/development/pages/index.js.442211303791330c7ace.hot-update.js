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

var Event = function Event(event) {
  return __jsx("div", {
    "class": "card text-white bg-primary mb-3",
    style: "max-width: 20rem;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    "class": "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Header"), __jsx("div", {
    "class": "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h4", {
    "class": "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Primary card title"), __jsx("p", {
    "class": "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Some quick example text to build on the card title and make up the bulk of the card's content.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

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


var Events = function Events(_ref) {
  var events = _ref.events;
  return __jsx("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, events.map(function (event) {
    return __jsx(_Event__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: event.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ })

})
//# sourceMappingURL=index.js.442211303791330c7ace.hot-update.js.map