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
"[project]/src/app/careers/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CareersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimateOnView.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CareersPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "5304279042d988ee6c926a8c56f7fd71dea48a8c3f4e612ace825eaf04368082") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5304279042d988ee6c926a8c56f7fd71dea48a8c3f4e612ace825eaf04368082";
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
    const [skillsFilter, setSkillsFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CareersPage[useEffect()]": ()=>{
                fetch("/api/jobs").then(_CareersPageUseEffectAnonymous).then({
                    "CareersPage[useEffect() > (anonymous)()]": (data)=>setJobs(Array.isArray(data) ? data : [])
                }["CareersPage[useEffect() > (anonymous)()]"]).catch({
                    "CareersPage[useEffect() > (anonymous)()]": (err)=>setError(String(err))
                }["CareersPage[useEffect() > (anonymous)()]"]).finally({
                    "CareersPage[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["CareersPage[useEffect() > (anonymous)()]"]);
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
    let t3;
    if ($[4] !== jobs || $[5] !== query || $[6] !== skillsFilter) {
        const q = query.toLowerCase();
        t3 = jobs.filter({
            "CareersPage[jobs.filter()]": (j_0)=>(!q || j_0.title.toLowerCase().includes(q) || (j_0.description || "").toLowerCase().includes(q)) && (!skillsFilter || j_0.requiredSkills === skillsFilter)
        }["CareersPage[jobs.filter()]"]);
        $[4] = jobs;
        $[5] = query;
        $[6] = skillsFilter;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const filtered = t3;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animation: "animate-zoom-in",
            delay: "80ms",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block mb-4 rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700",
                children: "Careers at TantraDOT"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 71,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            animation: "animate-zoom-in",
            delay: "140ms",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl md:text-5xl font-extrabold text-slate-900",
                children: [
                    "Join Our ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-yellow-400",
                        children: "Team"
                    }, void 0, false, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 78,
                        columnNumber: 143
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 78,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "text-center mb-12",
            children: [
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    animation: "animate-slide-left",
                    delay: "200ms",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 max-w-2xl mx-auto text-slate-600",
                        children: "Build real-world software, work on live projects, and grow your career with hands-on experience at TantraDOT Technologies."
                    }, void 0, false, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 85,
                        columnNumber: 116
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 85,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "CareersPage[<input>.onChange]": (e)=>setQuery(e.target.value)
        })["CareersPage[<input>.onChange]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== query) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "w-full md:w-96 rounded-lg border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-yellow-200",
            placeholder: "Search roles or skills",
            value: query,
            onChange: t7
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[12] = query;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: {
                    "CareersPage[<button>.onClick]": ()=>{
                        setQuery("");
                        setSkillsFilter("");
                    }
                }["CareersPage[<button>.onClick]"],
                className: "bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition",
                children: "Reset"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 109,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-md p-6 mb-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-4 justify-between",
                children: [
                    t8,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 121,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[15] = t8;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== error || $[18] !== filtered || $[19] !== loading) {
        t11 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-slate-500",
            children: "Loading opportunities…"
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 129,
            columnNumber: 21
        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 129,
            columnNumber: 100
        }, this) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-slate-600",
            children: "No openings available right now."
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 129,
            columnNumber: 178
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "grid sm:grid-cols-2 lg:grid-cols-1 gap-8",
            children: filtered.map(_CareersPageFilteredMap)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 129,
            columnNumber: 259
        }, this);
        $[17] = error;
        $[18] = filtered;
        $[19] = loading;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t10 || $[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-linear-to-b from-yellow-50 via-white to-white py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    t6,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 139,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    return t12;
}
_s(CareersPage, "L4R8bmZLkmAjY6JkQ4YAZWFclgk=");
_c = CareersPage;
function _CareersPageFilteredMap(job, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimateOnView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        animation: "animate-slide-up",
        delay: `${i * 100}ms`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-slate-900",
                    children: job.title
                }, void 0, false, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 149,
                    columnNumber: 213
                }, this),
                job.requiredSkills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-yellow-600 font-semibold",
                    children: [
                        "🛠️ ",
                        job.requiredSkills
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 149,
                    columnNumber: 305
                }, this),
                job.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-slate-600 line-clamp-3",
                    children: job.description
                }, void 0, false, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 149,
                    columnNumber: 412
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-400",
                            children: new Date(job.createdAt).toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 149,
                            columnNumber: 546
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:careers@tantradot.com?subject=Application for ${job.title}`,
                            className: "bg-yellow-400 text-slate-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition",
                            children: "Apply"
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 149,
                            columnNumber: 640
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 149,
                    columnNumber: 490
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 149,
            columnNumber: 91
        }, this)
    }, job._id, false, {
        fileName: "[project]/src/app/careers/page.tsx",
        lineNumber: 149,
        columnNumber: 10
    }, this);
}
function _CareersPageJobsMap(j) {
    return j.requiredSkills;
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

//# sourceMappingURL=src_8897589a._.js.map