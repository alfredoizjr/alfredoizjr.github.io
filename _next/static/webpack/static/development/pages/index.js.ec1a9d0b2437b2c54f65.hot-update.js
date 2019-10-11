webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/New.js":
/*!***************************!*\
  !*** ./components/New.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\react\\next-app\\components\\New.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var New = function New(_ref) {
  var article = _ref.article;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "news");
};

/* harmony default export */ __webpack_exports__["default"] = (New);

/***/ }),

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _New__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New */ "./components/New.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\react\\next-app\\components\\News.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var News = function News(_ref) {
  var news = _ref.news;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, news.map(function (article) {
    return __jsx(_New__WEBPACK_IMPORTED_MODULE_1__["default"], {
      article: article,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=index.js.ec1a9d0b2437b2c54f65.hot-update.js.map