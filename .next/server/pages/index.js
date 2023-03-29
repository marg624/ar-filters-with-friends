"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(2606);
;// CONCATENATED MODULE: ./components/intro.tsx

const Intro = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://filters-with-friends.vercel.app/",
                    children: "Filters w/ friends"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "text-center md:text-left text-lg mt-5 md:pl-8",
                children: "A bunch of AR filters."
            })
        ]
    });
};
/* harmony default export */ const intro = (Intro);

// EXTERNAL MODULE: ./components/layout.tsx + 4 modules
var layout = __webpack_require__(5920);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(2007);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/post-preview.tsx



const PostPreview = ({ title , coverImage , excerpt , slug , gameUrl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    slug: slug,
                    title: title,
                    src: coverImage
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-3xl mb-3 leading-snug",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: gameUrl,
                    className: "hover:underline",
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-lg leading-relaxed mb-4",
                children: excerpt
            })
        ]
    });
};
/* harmony default export */ const post_preview = (PostPreview);

;// CONCATENATED MODULE: ./components/more-stories.tsx


const MoreStories = ({ posts  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight",
                children: "the collection"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(post_preview, {
                        title: post.title,
                        coverImage: post.coverImage,
                        slug: post.slug,
                        gameUrl: post.gameUrl,
                        excerpt: post.excerpt
                    }, post.slug))
            })
        ]
    });
};
/* harmony default export */ const more_stories = (MoreStories);

// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(1895);
;// CONCATENATED MODULE: ./pages/index.tsx








function Index({ allPosts  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Filters w/ friends"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(intro, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(more_stories, {
                            posts: allPosts
                        })
                    ]
                })
            ]
        })
    });
}
const getStaticProps = async ()=>{
    const allPosts = (0,api/* getAllPosts */.Bd)([
        "title",
        "date",
        "slug",
        "coverImage",
        "gameUrl",
        "excerpt"
    ]);
    return {
        props: {
            allPosts
        }
    };
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,149], () => (__webpack_exec__(5014)));
module.exports = __webpack_exports__;

})();