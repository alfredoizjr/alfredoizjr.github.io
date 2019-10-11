webpackHotUpdate("static\\development\\pages\\index.js",{

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
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, news.map(function (article) {
    return __jsx(_New__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: article.url,
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
//# sourceMappingURL=index.js.940844015b82995d0d37.hot-update.js.map