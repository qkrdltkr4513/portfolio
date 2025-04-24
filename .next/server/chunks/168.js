"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 3137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_motion_MotionBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8455);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(770);
/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_motion_MotionBox__WEBPACK_IMPORTED_MODULE_3__]);
_components_motion_MotionBox__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const { LEFT_TOP, RIGHT_TOP, LEFT_BOTTOM, RIGHT_BOTTOM } = _core_constants__WEBPACK_IMPORTED_MODULE_4__.COMMON_POSITION_TYPES;
const motionBoxStyle = (maxWidth)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  @media (max-width: 1080px) {
    width: 100%;
    ${maxWidth && _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
      max-width: ${maxWidth};
    `}
  }
`;
const wrapperStyle = (width, height, isHoverAction)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  width: ${width};
  // max-width: ${width}px;
  ${height && _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
    height: ${height};
  `};
  background-color: ${!isHoverAction && _styles_themes__WEBPACK_IMPORTED_MODULE_5__/* .themes */ .n.colors.CardBackGround};
  border-radius: 16px;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;
const innerStyle = (isFullCard)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  display: flex;
  flex-direction: column;
  ${!isFullCard && _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
    padding: 18px;
  `};
  gap: 18px;
`;
const ImagePositionStyle = (position, isCircleImage)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  display: flex;
  ${position === LEFT_TOP || position === LEFT_BOTTOM ? _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
        justify-content: flex-start;
      ` : (position === RIGHT_TOP || position === RIGHT_BOTTOM) && _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
        justify-content: flex-end;
      `};
`;
const circleBoxStyle = ()=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  border-radius: 100%;
`;
const Card = ({ isFullCard = false, isHoverAction = false, motionType, useMotion = true, width = "400px", maxWidth, height, imageName, imagePosition, isCircleImage = false, children, className })=>{
    // console.log(isCircleImage);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_motion_MotionBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        motionType: motionType,
        useMotion: useMotion,
        css: motionBoxStyle(maxWidth),
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            css: wrapperStyle(width, height, isHoverAction),
            className: className,
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                css: innerStyle(isFullCard),
                children: [
                    imageName && (imagePosition === LEFT_TOP || imagePosition === RIGHT_TOP) && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        css: ImagePositionStyle(imagePosition, isCircleImage),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: imageName,
                            width: "80",
                            height: "80",
                            css: circleBoxStyle(),
                            alt: ""
                        })
                    }),
                    children,
                    imageName && (imagePosition === LEFT_BOTTOM || imagePosition === RIGHT_BOTTOM) && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        css: ImagePositionStyle(imagePosition, isCircleImage),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: imageName,
                            width: "80",
                            height: "80",
                            css: circleBoxStyle(),
                            alt: ""
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);



const textStyle = ({ size, weight, color, textAlign })=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  display: block;
  color: ${color};
  text-align: ${textAlign};
  ${size};
  ${weight};
`;
const Text = ({ size, weight, color, textAlign = "left", children, className })=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        css: textStyle({
            size,
            weight,
            color,
            textAlign
        }),
        className: className,
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Text));


/***/ })

};
;