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
]);

//# sourceMappingURL=src_components_AnimateOnView_tsx_9ead246b._.js.map