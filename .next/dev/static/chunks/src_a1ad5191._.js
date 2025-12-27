(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/CTAWithLogoColor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTAWithLogoColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/images/onlylogo.png.mjs { IMAGE => "[project]/src/images/onlylogo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function getAverageColorFromImage(img, sample = 6) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    const w = canvas.width = 80;
    const h = canvas.height = 80;
    // draw image scaled to canvas
    ctx.drawImage(img, 0, 0, w, h);
    try {
        const data = ctx.getImageData(0, 0, w, h).data;
        let r = 0, g = 0, b = 0, count = 0;
        // sample pixels for speed
        for(let y = 0; y < h; y += sample){
            for(let x = 0; x < w; x += sample){
                const idx = (y * w + x) * 4;
                const alpha = data[idx + 3];
                if (alpha === 0) continue; // skip transparent
                r += data[idx];
                g += data[idx + 1];
                b += data[idx + 2];
                count++;
            }
        }
        if (count === 0) return null;
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        return {
            r,
            g,
            b
        };
    } catch (e) {
        return null;
    }
}
function rgbToCss({ r, g, b }) {
    return `rgb(${r}, ${g}, ${b})`;
}
function luminance(r, g, b) {
    // relative luminance
    const a = [
        r,
        g,
        b
    ].map((v)=>{
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function CTAWithLogoColor() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "27866d5940c6894f87f682082f5ee4e24935808b3273eab0315185806b80ceaa") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "27866d5940c6894f87f682082f5ee4e24935808b3273eab0315185806b80ceaa";
    }
    const [bg, setBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#0f172a");
    const [textColor, setTextColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("white");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "CTAWithLogoColor[useEffect()]": ()=>{
                const img = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
                img.crossOrigin = "anonymous";
                img.src = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"];
                const onLoad = {
                    "CTAWithLogoColor[useEffect() > onLoad]": ()=>{
                        const avg = getAverageColorFromImage(img, 6);
                        if (!avg) {
                            return;
                        }
                        const css = rgbToCss(avg);
                        setBg(css);
                        const lum = luminance(avg.r, avg.g, avg.b);
                        setTextColor(lum > 0.5 ? "#0f172a" : "white");
                    }
                }["CTAWithLogoColor[useEffect() > onLoad]"];
                img.addEventListener("load", onLoad);
                img.addEventListener("error", _CTAWithLogoColorUseEffectImgAddEventListener);
                return ()=>{
                    img.removeEventListener("load", onLoad);
                };
            }
        })["CTAWithLogoColor[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const backgroundStyle = `linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.06)), ${bg}`;
    let t2;
    if ($[3] !== backgroundStyle || $[4] !== textColor) {
        t2 = {
            background: backgroundStyle,
            color: textColor
        };
        $[3] = backgroundStyle;
        $[4] = textColor;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-4 mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 relative rounded-md overflow-hidden shadow-sm bg-white/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$onlylogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$onlylogo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "logo",
                    fill: true,
                    sizes: "48px",
                    style: {
                        objectFit: "contain"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/CTAWithLogoColor.tsx",
                    lineNumber: 127,
                    columnNumber: 156
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CTAWithLogoColor.tsx",
                lineNumber: 127,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CTAWithLogoColor.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold",
            children: [
                "Let’s Build Something ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-yellow-400",
                    children: "Great"
                }, void 0, false, {
                    fileName: "[project]/src/components/CTAWithLogoColor.tsx",
                    lineNumber: 136,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CTAWithLogoColor.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const t5 = textColor === "white" ? "rgba(255,255,255,0.9)" : "rgba(15,23,42,0.9)";
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 max-w-2xl mx-auto",
            style: {
                color: t5
            },
            children: "Whether you’re a startup, business, or institution — TantraDOT is ready to transform your ideas into powerful digital solutions."
        }, void 0, false, {
            fileName: "[project]/src/components/CTAWithLogoColor.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const t7 = textColor === "white" ? "#FBBF24" : "#FBBF24";
    let t8;
    if ($[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/contact",
            className: "inline-block mt-8 px-8 py-3 rounded-md font-semibold shadow-md",
            style: {
                background: t7,
                color: "#0f172a"
            },
            children: "Contact Us"
        }, void 0, false, {
            fileName: "[project]/src/components/CTAWithLogoColor.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t2 || $[13] !== t6 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-3xl p-12 text-center",
            style: t2,
            children: [
                t3,
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CTAWithLogoColor.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t6;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    return t9;
}
_s(CTAWithLogoColor, "FJPTQBg3Fhdvqr6YDbkyw1iIJik=");
_c = CTAWithLogoColor;
function _CTAWithLogoColorUseEffectImgAddEventListener() {}
var _c;
__turbopack_context__.k.register(_c, "CTAWithLogoColor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a1ad5191._.js.map