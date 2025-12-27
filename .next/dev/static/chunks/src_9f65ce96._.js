(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimateOnView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimateOnView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AnimateOnView({ children, animation = "animate-zoom-in", className = "", delay = "7000ms", rootMargin = "0px", threshold = 0.12, once = false }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimateOnView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "AnimateOnView.useEffect": (entries)=>{
                    entries.forEach({
                        "AnimateOnView.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setInView(true);
                                if (once && el) observer.unobserve(el);
                            } else {
                                if (!once) setInView(false);
                            }
                        }
                    }["AnimateOnView.useEffect"]);
                }
            }["AnimateOnView.useEffect"], {
                root: null,
                rootMargin,
                threshold
            });
            observer.observe(el);
            return ({
                "AnimateOnView.useEffect": ()=>observer.disconnect()
            })["AnimateOnView.useEffect"];
        }
    }["AnimateOnView.useEffect"], [
        rootMargin,
        threshold,
        once
    ]);
    const style = {
        // pass animation delay to CSS via variable
        ["--anim-delay"]: delay,
        opacity: inView ? undefined : 0,
        transform: inView ? undefined : "translateY(8px)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: inView ? animation : undefined,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/AnimateOnView.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AnimateOnView.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_s(AnimateOnView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
_c = AnimateOnView;
var _c;
__turbopack_context__.k.register(_c, "AnimateOnView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/images/onlylogo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/onlylogo.5251d299.png");}),
"[project]/src/images/onlylogo.png.mjs { IMAGE => \"[project]/src/images/onlylogo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/images/onlylogo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAcEAAAxIgEAk3AJFuKxGl/zwB+JvZIROUMvAgEHBAAAADIjAQCVcQsR7bscbv7IIbr/yCLf9sEfzZl0DCwmGQAAAJVwCRTstheR/8Ycpf/HINn/xyDs/8ch8+GrGIhoRQMEAOSvE2P+wRbs/8IW0f3BGV3+vhuZ/7QYsPiaEIauZAUTAPu/Fan/wRPX/8AU5/ywEUv9lw2J/48M2f2MC6PIbwYzANqkDWL8vxHC/8ESwf+mDoP/jAvx/4wL1PiICsSnWgMjAGhJAgbAjglK8bUObfufDJD9igvq+YgK2MtuB3VaLgEFABUMAABFLgEBhlsDCbNqBCHAaAQ/o1cDKVgtAQcXCgAAvjRwBVFCr2gAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/images/headerlogo.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/headerlogo.c9ed9b1f.jpeg");}),
"[project]/src/images/headerlogo.jpeg.mjs { IMAGE => \"[project]/src/images/headerlogo.jpeg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$headerlogo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/images/headerlogo.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$headerlogo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1280,
    height: 317,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAACAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1vA+1dO9LqPof/9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/images/cop1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cop1.33a35d36.png");}),
"[project]/src/images/cop1.png.mjs { IMAGE => \"[project]/src/images/cop1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/images/cop1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2816,
    height: 1536,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ANPf5t7j5t7j5c7a4bbBx5mpsaeytpCYmgCDiItocnlYXWBveX6AeXVcW1lhaW+RlpsAZmZlTE1LKisqPj89TEZDKSgqERUbKCosAH+Cg4uLiXJva2hfVZCCd1hVUh4gIA0ODl2NK0U97MLzAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/images/cop2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cop2.8cf39f94.png");}),
"[project]/src/images/cop2.png.mjs { IMAGE => \"[project]/src/images/cop2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/images/cop2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2816,
    height: 1536,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AFddXX6KkoiSmZumrqmwsLPAxdri5dTa3QBnWlOOkJPFz9myusKCgoKrtLnHy8u6v8AAZWZrlZignKKnpKircWxojIaAfXp2YGJhABUdKENLVpWHgsWuoLuWdL6fhLGbiYVyYFnUN1YioYNSAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/images/cop3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cop3.959c46cc.png");}),
"[project]/src/images/cop3.png.mjs { IMAGE => \"[project]/src/images/cop3.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/images/cop3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2816,
    height: 1536,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AKCKcpaBan5oUru3sMDN08vc48TLzOvw8gCPhnhRTENbWlWrqaOLhYCjrrObl4zF0NYAqqejiIN9qamoqaagdG1niIiHUVFQgoqNAJ2YlWJeWlpaWnVybHt3cHZqYTwyLFpOSCAxM/ZinMDTAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/images/cop4.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cop4.b1fabe95.png");}),
"[project]/src/images/cop4.png.mjs { IMAGE => \"[project]/src/images/cop4.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/images/cop4.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2816,
    height: 1536,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AHd7eIuSjoaJgZCXjqepn87IuOTe0vr69wBvcW6KjoiRkoaWmYyDem+zq5vMwK3d0sQAc3Z1hIyLhYuIgIaBR0NAiIqHr6ykvLmzAFtaVF1dV1pbVWJlYDQ2Nm9yb6usqM3NyheCNbp45MpJAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/careers/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CareersPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimateOnView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/images/logo.png.mjs { IMAGE => "[project]/src/images/logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/images/onlylogo.png.mjs { IMAGE => "[project]/src/images/onlylogo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$headerlogo$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$headerlogo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/images/headerlogo.jpeg.mjs { IMAGE => "[project]/src/images/headerlogo.jpeg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/images/cop1.png.mjs { IMAGE => "[project]/src/images/cop1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/images/cop2.png.mjs { IMAGE => "[project]/src/images/cop2.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/images/cop3.png.mjs { IMAGE => "[project]/src/images/cop3.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/images/cop4.png.mjs { IMAGE => "[project]/src/images/cop4.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const metadata = {
    title: "Careers — TantraDOT Technologies",
    description: "Join TantraDOT — see open roles, internships, and how we hire."
};
function CareersPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "cfa86f6364112206b6027494961ce38bda5a9555f0a70bbe02dee0ba5304b948") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfa86f6364112206b6027494961ce38bda5a9555f0a70bbe02dee0ba5304b948";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [jobs, setJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationFilter, setLocationFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CareersPage[useEffect()]": ()=>{
                let mounted = true;
                setLoading(true);
                fetch("/api/jobs").then(_CareersPageUseEffectAnonymous).then({
                    "CareersPage[useEffect() > (anonymous)()]": (data)=>{
                        if (!mounted) {
                            return;
                        }
                        setJobs(Array.isArray(data) ? data : []);
                    }
                }["CareersPage[useEffect() > (anonymous)()]"]).catch({
                    "CareersPage[useEffect() > (anonymous)()]": (err)=>{
                        if (!mounted) {
                            return;
                        }
                        setError(String(err));
                    }
                }["CareersPage[useEffect() > (anonymous)()]"]).finally({
                    "CareersPage[useEffect() > (anonymous)()]": ()=>mounted && setLoading(false)
                }["CareersPage[useEffect() > (anonymous)()]"]);
                return ()=>{
                    mounted = false;
                };
            }
        })["CareersPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let set;
    if ($[4] !== jobs) {
        set = new Set();
        jobs.forEach({
            "CareersPage[jobs.forEach()]": (j)=>j.location && set.add(j.location)
        }["CareersPage[jobs.forEach()]"]);
        $[4] = jobs;
        $[5] = set;
    } else {
        set = $[5];
    }
    let t3;
    if ($[6] !== set) {
        t3 = Array.from(set);
        $[6] = set;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const locations = t3;
    let t4;
    if ($[8] !== jobs || $[9] !== locationFilter || $[10] !== query) {
        const q = query.trim().toLowerCase();
        t4 = jobs.filter({
            "CareersPage[jobs.filter()]": (j_0)=>{
                const matchesQuery = !q || j_0.title.toLowerCase().includes(q) || (j_0.description || "").toLowerCase().includes(q);
                const matchesLocation = !locationFilter || j_0.location === locationFilter;
                return matchesQuery && matchesLocation;
            }
        }["CareersPage[jobs.filter()]"]);
        $[8] = jobs;
        $[9] = locationFilter;
        $[10] = query;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const filtered = t4;
    let t5;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animation: "animate-zoom-in",
            delay: "80ms",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700",
                children: "Careers at TantraDOT"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 122,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animation: "animate-zoom-in",
            delay: "140ms",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-4 text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 responsive-title",
                children: "Join Our Team"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 129,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative overflow-hidden bg-linear-to-b from-yellow-50 via-white to-white py-20 hero-section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-8 text-center",
                children: [
                    t5,
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        animation: "animate-slide-left",
                        delay: "200ms",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed",
                            children: "We're building delightful software — come help shape the future with us."
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 136,
                            columnNumber: 244
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 136,
                        columnNumber: 184
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-yellow-200 opacity-30 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 136,
                        columnNumber: 413
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 136,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "sr-only",
            children: "Search jobs"
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 150,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "CareersPage[<input>.onChange]": (e)=>setQuery(e.target.value)
        })["CareersPage[<input>.onChange]"];
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== query) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "pl-10 pr-4 py-3 w-full md:w-96 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200",
                            placeholder: "Search roles, skills, or keywords",
                            value: query,
                            onChange: t10
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 166,
                            columnNumber: 69
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 166,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[18] = query;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "CareersPage[<select>.onChange]": (e_0)=>setLocationFilter(e_0.target.value)
        })["CareersPage[<select>.onChange]"];
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "All locations"
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t13;
    } else {
        t12 = $[20];
        t13 = $[21];
    }
    let t14;
    if ($[22] !== locations) {
        t14 = locations.map(_CareersPageLocationsMap);
        $[22] = locations;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== locationFilter || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "rounded-lg border border-slate-200 py-2 px-3 bg-white text-sm",
            value: locationFilter,
            onChange: t12,
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[24] = locationFilter;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition",
            onClick: {
                "CareersPage[<button>.onClick]": ()=>{
                    setQuery("");
                    setLocationFilter("");
                }
            }["CareersPage[<button>.onClick]"],
            children: "Reset"
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== t11 || $[31] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row gap-4 md:items-center md:justify-between",
            children: [
                t11,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[30] = t11;
        $[31] = t17;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== error || $[34] !== filtered || $[35] !== loading) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500",
                children: "Loading jobs…"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 233,
                columnNumber: 44
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: [
                    "Failed to load jobs: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 233,
                columnNumber: 102
            }, this) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-600",
                children: "No job openings match your search."
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 233,
                columnNumber: 189
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                children: filtered.map(_CareersPageFilteredMap)
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 233,
                columnNumber: 260
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[33] = error;
        $[34] = filtered;
        $[35] = loading;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== t18 || $[38] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-7xl mx-auto px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow-md rounded-lg p-6 -mt-4",
                children: [
                    t18,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 243,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[37] = t18;
        $[38] = t19;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    let t22;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-semibold text-slate-900",
            children: "Our Clients"
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-600",
            children: "Trusted by teams and companies across industries"
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[40] = t21;
        $[41] = t22;
    } else {
        t21 = $[40];
        t22 = $[41];
    }
    let t23;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-8 text-center",
                children: [
                    t21,
                    t22,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 clients-marquee",
                        "aria-label": "Client logos carousel",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-track",
                            role: "list",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$headerlogo$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$headerlogo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                            ].concat([
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$headerlogo$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$headerlogo$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$cop4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$cop4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                            ]).map(_CareersPageAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 263,
                            columnNumber: 173
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 263,
                        columnNumber: 100
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 263,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[42] = t23;
    } else {
        t23 = $[42];
    }
    let t24;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animation: "animate-zoom-out",
            delay: "120ms",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-slate-900 text-white rounded-3xl p-12 text-center max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold",
                        children: [
                            "Join the team or refer someone — ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400",
                                children: "Let’s talk"
                            }, void 0, false, {
                                fileName: "[project]/src/app/careers/page.tsx",
                                lineNumber: 270,
                                columnNumber: 234
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 270,
                        columnNumber: 166
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-slate-300 max-w-2xl mx-auto",
                        children: "If you’re excited about building products and working with an experienced engineering team, reach out."
                    }, void 0, false, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 270,
                        columnNumber: 290
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/contact",
                        className: "inline-block mt-8 bg-yellow-400 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition shadow-md",
                        children: "Contact Us"
                    }, void 0, false, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 270,
                        columnNumber: 449
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 270,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] !== t20) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "space-y-28",
            children: [
                t7,
                t20,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[44] = t20;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    return t25;
}
_s(CareersPage, "JU01CdSbu3bDa9TmH7HA/8Kpqzw=");
_c = CareersPage;
function _CareersPageAnonymous(src, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "marquee-item",
        role: "listitem",
        "aria-hidden": idx >= 7 ? true : false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-28 h-12 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src.src || src,
                alt: `client ${idx + 1}`,
                width: 140,
                height: 48,
                className: "client-logo"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 286,
                columnNumber: 164
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 286,
            columnNumber: 104
        }, this)
    }, idx, false, {
        fileName: "[project]/src/app/careers/page.tsx",
        lineNumber: 286,
        columnNumber: 10
    }, this);
}
function _CareersPageFilteredMap(job, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        animation: i % 2 === 0 ? "animate-zoom-in" : "animate-zoom-out",
        delay: `${i * 80}ms`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "relative bg-white border border-slate-100 rounded-xl p-5 shadow hover:shadow-lg transition transform hover:-translate-y-1 flip-card",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flip-card-inner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-slate-900",
                                    children: job.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/careers/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 387
                                }, this),
                                job.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 mt-1",
                                    children: [
                                        "📍 ",
                                        job.location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/careers/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 473
                                }, this),
                                job.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-slate-700 line-clamp-3",
                                    children: job.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/careers/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 558
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 289,
                            columnNumber: 363
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400",
                                    children: new Date(job.createdAt).toLocaleDateString()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/careers/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 679
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "mt-3 inline-block bg-indigo-600 text-white text-sm px-3 py-2 rounded-md hover:bg-indigo-700",
                                    href: `mailto:careers@tantradot.com?subject=${encodeURIComponent("Application for " + job.title)}`,
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/careers/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 767
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 289,
                            columnNumber: 642
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 289,
                    columnNumber: 307
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 289,
                columnNumber: 274
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 289,
            columnNumber: 126
        }, this)
    }, job._id, false, {
        fileName: "[project]/src/app/careers/page.tsx",
        lineNumber: 289,
        columnNumber: 10
    }, this);
}
function _CareersPageLocationsMap(loc) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: loc,
        children: loc
    }, loc, false, {
        fileName: "[project]/src/app/careers/page.tsx",
        lineNumber: 292,
        columnNumber: 10
    }, this);
}
function _CareersPageUseEffectAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "CareersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9f65ce96._.js.map