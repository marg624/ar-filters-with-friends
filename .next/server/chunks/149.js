"use strict";
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 2606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Container = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto px-5",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 2007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const CoverImage = ({ src , slug  })=>{
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: src,
        alt: `cover image`,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("shadow-sm w-full", {
            "hover:shadow-lg transition-shadow duration-200": slug
        }),
        width: 250,
        height: 500
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sm:mx-0",
        children: image
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoverImage);


/***/ }),

/***/ 5920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(2606);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/alert.tsx



const Alert = ({ preview  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("border-b", {
            "bg-neutral-800 border-neutral-800 text-white": preview,
            "bg-neutral-50 border-neutral-200": !preview
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-2 text-center text-sm",
                children: preview ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "This page is a preview.",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/api/exit-preview",
                            className: "underline hover:text-teal-300 duration-200 transition-colors",
                            children: "Click here"
                        }),
                        " ",
                        "to exit preview mode."
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://with-friends-collection.vercel.app/",
                                    children: "w/ friends "
                                }),
                                " "
                            ]
                        }),
                        " A collection of games you can play with friends."
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_alert = (Alert);

;// CONCATENATED MODULE: ./components/footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-neutral-50 border-t border-neutral-200",
        children: /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-28 flex flex-col lg:flex-row items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
                        children: "Games for fun."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://github.com/marg624/",
                                className: "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
                                children: "Read Documentation"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `https://github.com/marg624/`,
                                className: "mx-3 font-bold hover:underline",
                                children: "View on GitHub"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./lib/constants.ts
const EXAMPLE_PATH = "w/ friends";
const CMS_NAME = "Markdown";
const HOME_OG_IMAGE_URL = "https://wordle-with-friends.s3.us-west-2.amazonaws.com/imdb-cover.png";

;// CONCATENATED MODULE: ./components/meta.tsx



const Meta = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: `A collection of games to play with friends ${CMS_NAME}.`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: HOME_OG_IMAGE_URL
            })
        ]
    });
};
/* harmony default export */ const meta = (Meta);

;// CONCATENATED MODULE: ./components/layout.tsx




const Layout = ({ preview , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(meta, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_alert, {
                        preview: preview
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 1895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "zQ": () => (/* binding */ getPostBySlug)
/* harmony export */ });
/* unused harmony export getPostSlugs */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), "_posts");
function getPostSlugs() {
    let files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    return files.filter((f1)=>f1 != ".DS_Store");
}
function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}
function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug)=>getPostBySlug(slug, fields))// sort posts by date in descending order
    .sort((post1, post2)=>post1.date > post2.date ? -1 : 1);
    return posts;
}


/***/ })

};
;