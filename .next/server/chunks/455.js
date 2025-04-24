"use strict";
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 7056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);




const wrapperStyle = ()=>_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const innerStyle = ()=>_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
`;
const boxStyle = (image, hasIcon)=>_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: ${image || hasIcon ? "space-between;" : "flex-end"};
`;
const imageBoxStyle = (width, height)=>_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
  width: ${width}px;
  height: ${height}px;
`;
const circleImageStyle = (width, height)=>_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
  width: ${width}px;
  height: ${height}px;
  border-radius: ${width / 2}px;
`;
const Thumbnail = ({ image, hasIcon = false, textContent, className, onClick })=>{
    const ThumbnailImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!image) return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
        const { name, width, height, isCircle } = image;
        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            css: imageBoxStyle(width, height),
            children: isCircle ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                css: circleImageStyle(width, height),
                src: name,
                width: width,
                height: height,
                alt: ""
            }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: name,
                width: width,
                height: height,
                alt: ""
            })
        });
    }, [
        image
    ]);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: wrapperStyle(),
        className: className,
        onClick: onClick,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            css: innerStyle(),
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                css: boxStyle(image, hasIcon),
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThumbnailImage, {}),
                    textContent
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnail);


/***/ }),

/***/ 542:
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
/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(984);
/* harmony import */ var _components_common_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5136);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(770);






const wrapperStyle = (type)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 0px 30px;
  ${type !== _core_constants__WEBPACK_IMPORTED_MODULE_5__.THUMBNAIL_TYPES.PROJECT ? _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
        margin-bottom: 20px;
      ` : _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
        margin-top: 30px;
      `}
`;
const boxStyle = ()=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ThumbnailContent = ({ type, main, sub })=>{
    const { ABOUT, OTHER, PROJECT } = _core_constants__WEBPACK_IMPORTED_MODULE_5__.THUMBNAIL_TYPES;
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        css: wrapperStyle(PROJECT),
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            css: boxStyle(),
            children: type === ABOUT ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        size: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontSize.ClampSubTitle,
                        weight: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontWeight.Medium,
                        color: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.colors.White,
                        children: main
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        size: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontSize.ClampBody4,
                        weight: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontWeight.Medium,
                        color: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.colors.Contents,
                        children: sub
                    })
                ]
            }) : type === OTHER ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        size: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontSize.ClampBody2,
                        weight: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontWeight.Medium,
                        color: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.colors.Contents,
                        children: main
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        size: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontSize.ClampSubTitle,
                        weight: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontWeight.Medium,
                        color: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.colors.White,
                        children: sub
                    })
                ]
            }) : /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        size: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontSize.ClampBody4,
                        weight: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontWeight.Medium,
                        color: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.colors.White,
                        children: main
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        size: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontSize.ClampBody2,
                        weight: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.fontWeight.Medium,
                        color: _styles_themes__WEBPACK_IMPORTED_MODULE_3__/* .themes */ .n.colors.White,
                        children: sub
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(ThumbnailContent));


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