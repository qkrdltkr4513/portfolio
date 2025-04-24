"use strict";
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 1190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);


const wrapperStyle = (rows, columns)=>_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
  display: grid;
  grid-template-columns: repeat(${columns}, minmax(50px, 1fr));
  grid-template-rows: repeat(${rows}, minmax(150px, 1fr));
  gap: 30px 30px;
  padding: 0 20px;
`;
const GridBox = ({ rows = 2, columns = 4, children, className })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: wrapperStyle(rows, columns),
        className: className,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridBox);


/***/ }),

/***/ 8072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_motion_MotionBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8455);
/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_motion_MotionBox__WEBPACK_IMPORTED_MODULE_3__]);
_components_motion_MotionBox__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const wrapperStyle = (columnSize, rowSize, height, isResizeHeight, type)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  display: flex;
  ${height && _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
    height: ${height}px;
  `}
  align-items: center;
  background-color: ${_styles_themes__WEBPACK_IMPORTED_MODULE_4__/* .themes */ .n.colors.CardBackGround};
  border-radius: 18px;
  cursor: pointer;

  grid-column: ${columnSize};
  grid-row: ${rowSize};

  ${type === "dashboard" ? _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
        @media (max-width: 1080px) {
          ${columnSize === "1 / 2" && "grid-column: 1 / 3"};
          ${columnSize === "1 / 3" && "grid-column: 1 / 5"};
          ${columnSize === "1 / 4" && "grid-column: 1 / 5"};
          ${columnSize === "2 / 3" && "grid-column: 3 / 5"};
          ${columnSize === "3 / 4" && "grid-column: 1 / 3"};
          ${columnSize === "3 / 5" && "grid-column: 1 / 5"};
          ${columnSize === "4 / 5" && "grid-column: 3 / 5"};
        }

        @media (max-width: 550px) {
          ${columnSize === "1 / 2" && "grid-column: 1 / 5"};
          ${columnSize === "1 / 3" && "grid-column: 1 / 5"};
          ${columnSize === "1 / 4" && "grid-column: 1 / 5"};
          ${columnSize === "2 / 3" && "grid-column: 1 / 5"};
          ${columnSize === "3 / 4" && "grid-column: 1 / 5"};
          ${columnSize === "3 / 5" && "grid-column: 1 / 5"};
          ${columnSize === "4 / 5" && "grid-column: 1 / 5"};

          ${isResizeHeight && "height: 200px;"}
        }
      ` : _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
        @media (max-width: 1080px) {
          ${columnSize === "1 / 2" && "grid-column: 1 / 3"};
          ${columnSize === "1 / 3" && "grid-column: 1 / 5"};
          ${columnSize === "1 / 4" && "grid-column: 1 / 5"};
          ${columnSize === "2 / 3" && "grid-column: 3 / 5"};
          ${columnSize === "3 / 4" && "grid-column: 1 / 3"};
          ${columnSize === "3 / 5" && "grid-column: 1 / 5"};
          ${columnSize === "4 / 5" && "grid-column: 3 / 5"};
        }

        @media (max-width: 550px) {
          ${columnSize === "1 / 2" && "grid-column: 1 / 5"};
          ${columnSize === "1 / 3" && "grid-column: 1 / 5"};
          ${columnSize === "1 / 4" && "grid-column: 1 / 5"};
          ${columnSize === "2 / 3" && "grid-column: 1 / 5"};
          ${columnSize === "3 / 4" && "grid-column: 1 / 5"};
          ${columnSize === "3 / 5" && "grid-column: 1 / 5"};
          ${columnSize === "4 / 5" && "grid-column: 1 / 5"};

          ${isResizeHeight && "height: 200px;"}
        }
      `}
`;
const imageBackgroundStyle = (imageName)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/assets/images/main/${imageName}.png);
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  opacity: 0.3;
`;
const innerStyle = ()=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  @media (max-width: 550px) {
    // padding: 4px;
    padding: 10px 20px;
  }
`;
const GridCard = ({ height, imageName, columnSize, rowSize, isResizeHeight, children, className, motionType, type, onClick })=>{
    const ImageBackground = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props)=>{
        const { imageName } = props;
        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            css: imageBackgroundStyle(imageName)
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("card item mounted");
    }, []);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_motion_MotionBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        css: wrapperStyle(columnSize, rowSize, height, isResizeHeight, type),
        className: className,
        motionType: motionType,
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            css: innerStyle(),
            onClick: onClick,
            children: [
                imageName && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageBackground, {
                    imageName: imageName
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;