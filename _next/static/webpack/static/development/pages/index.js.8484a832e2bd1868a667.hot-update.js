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
  var urlToImage = article.urlToImage,
      url = article.url,
      title = article.title,
      description = article.description,
      source = article.source;
  var img = '';

  if (urlToImage !== '') {
    img = __jsx("img", {
      className: "card-img-top",
      href: urlToImage,
      alt: 'thumbnails',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  } else {
    img = __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "No image for this article");
  }

  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, img), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, description))));
};

/* harmony default export */ __webpack_exports__["default"] = (New);

/***/ })

})
//# sourceMappingURL=index.js.8484a832e2bd1868a667.hot-update.js.map