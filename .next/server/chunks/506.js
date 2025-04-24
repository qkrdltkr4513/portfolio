"use strict";
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 1506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9711);
/* harmony import */ var _components_common_GridBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1190);
/* harmony import */ var _components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8072);
/* harmony import */ var _components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7056);
/* harmony import */ var _components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(542);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__]);
_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Home = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // 전달 받은 URL로 페이지 이동한다.
    const moveToPage = (pageUrl)=>{
        router.push(pageUrl);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .SEO_STATIC_INFO */ .Zy.home.title,
                description: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .SEO_STATIC_INFO */ .Zy.home.description,
                url: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .SEO_STATIC_INFO */ .Zy.home.url,
                imageName: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .SEO_STATIC_INFO */ .Zy.home.imageName
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_GridBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        columnSize: "1 / 3",
                        height: 305,
                        isResizeHeight: true,
                        imageName: "img-main-about-me2",
                        onClick: ()=>moveToPage(_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_INFOS */ .rc.ABOUT.path),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            textContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[0].type,
                                main: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[0].main,
                                sub: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[0].sub
                            })
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        columnSize: "3 / 4",
                        height: 305,
                        isResizeHeight: true,
                        imageName: "img-main-resume",
                        onClick: ()=>moveToPage(_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_INFOS */ .rc.RESUME.path),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            textContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[1].type,
                                main: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[1].main,
                                sub: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[1].sub
                            })
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        columnSize: "4 / 5",
                        height: 305,
                        isResizeHeight: true,
                        imageName: "img-main-commerce",
                        onClick: ()=>moveToPage(`${_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_INFOS */ .rc.WORK.path}/detail/23`),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            textContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[2].type,
                                main: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[2].main,
                                sub: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[2].sub
                            })
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        columnSize: "1 / 2",
                        height: 305,
                        isResizeHeight: true,
                        imageName: "img-main-mobile-app",
                        onClick: ()=>moveToPage(`${_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_INFOS */ .rc.WORK.path}/detail/26`),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            textContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[3].type,
                                main: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[3].main,
                                sub: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[3].sub
                            })
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        columnSize: "2 / 3",
                        height: 305,
                        isResizeHeight: true,
                        imageName: "img-main-smart-building",
                        onClick: ()=>moveToPage(`${_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_INFOS */ .rc.WORK.path}/detail/10`),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            textContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[4].type,
                                main: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[4].main,
                                sub: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[4].sub
                            })
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        columnSize: "3 / 5",
                        height: 305,
                        isResizeHeight: true,
                        imageName: "img-main-all-project",
                        onClick: ()=>moveToPage(_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_INFOS */ .rc.WORK.path),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            textContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[5].type,
                                main: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[5].main,
                                sub: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[5].sub
                            })
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        columnSize: "1 / 3",
                        height: 305,
                        isResizeHeight: true,
                        imageName: "img-main-dashboard",
                        onClick: ()=>moveToPage(_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_INFOS */ .rc.DASHBOARD.path),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            textContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[6].type,
                                main: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[6].main,
                                sub: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[6].sub
                            })
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GridCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        columnSize: "3 / 5",
                        height: 305,
                        isResizeHeight: true,
                        imageName: "img-main-contact",
                        onClick: ()=>moveToPage(_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .PAGE_INFOS */ .rc.ABOUT.path),
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            textContent: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThumbnailContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[7].type,
                                main: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[7].main,
                                sub: _core_constants__WEBPACK_IMPORTED_MODULE_7__/* .THUMBNAIL_LIST */ .IW[7].sub
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;