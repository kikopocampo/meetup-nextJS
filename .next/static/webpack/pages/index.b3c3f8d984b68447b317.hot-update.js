webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/kikoocampo/Documents/lighthouse-react/Udemy-react/next-project-meetup/pages/index.js\",\n    _this = undefined;\n\n\n\n\nvar HomePage = function HomePage(props) {\n  return;\n\n  /*#__PURE__*/\n  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"React meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true);\n}; // // getServerSideProps for needeing req and res\n// export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   //fetch API\n//   return {\n//     props: {meetups: DUMMY}\n//   }\n// };\n\n\n_c = HomePage;\n; // export async function getStaticProps() {\n//   const client = await MongoClient.connect('mongodb+srv://kiko:foiegras25@cluster0.a7gxmqk.mongodb.net/meetups?retryWrites=true&w=majority');\n//     const db = client.db();\n//     const meetupsCollection = db.collection('meetups');\n//     const meetups = meetupsCollection.find().toArray();\n//     console.log(meetups);\n//     client.close();\n//   return {\n//     props: {\n//       meetups: meetups?.map(meetup => {\n//        return {\n//          title: meetup.title,\n//          address: meetup.address,\n//          image: meetup.image,\n//          id: meetup._id.toString()\n//        } \n//       })\n//     },\n//     revalidate: 1,\n//   };\n// };\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBRTFCOztBQUNBO0FBQUE7QUFBQSw0QkFDQSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBSUEscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpBO0FBQUE7QUFNRCxDQVRELEMsQ0FXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQW5CTUYsUTtBQTZDTCxDLENBRUQ7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiBcbiAgPD5cbiAgPEhlYWQ+XG4gICAgPHRpdGxlPlJlYWN0IG1lZXR1cHM8L3RpdGxlPlxuICA8L0hlYWQ+XG4gIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9Lz4gICBcbiAgPC8+XG59O1xuXG4vLyAvLyBnZXRTZXJ2ZXJTaWRlUHJvcHMgZm9yIG5lZWRlaW5nIHJlcSBhbmQgcmVzXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xuLy8gICAvL2ZldGNoIEFQSVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7bWVldHVwczogRFVNTVl9XG4vLyAgIH1cbi8vIH07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8va2lrbzpmb2llZ3JhczI1QGNsdXN0ZXIwLmE3Z3htcWsubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuICAgIGNsaWVudC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHM/Lm1hcChtZWV0dXAgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICAgICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBcbi8vICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9raWtvOmZvaWVncmFzMjVAY2x1c3RlcjAuYTdneG1xay5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuLy8gICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbi8vICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuLy8gICAgIGNvbnN0IG1lZXR1cHMgPSBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuLy8gICAgIGNvbnNvbGUubG9nKG1lZXR1cHMpO1xuLy8gICAgIGNsaWVudC5jbG9zZSgpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IG1lZXR1cHM/Lm1hcChtZWV0dXAgPT4ge1xuLy8gICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxuLy8gICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4vLyAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuLy8gICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxuLy8gICAgICAgIH0gXG4vLyAgICAgICB9KVxuLy8gICAgIH0sXG4vLyAgICAgcmV2YWxpZGF0ZTogMSxcbi8vICAgfTtcbi8vIH07XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})