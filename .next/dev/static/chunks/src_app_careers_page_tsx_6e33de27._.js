(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/careers/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CareersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CareersPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "8fbc82bc5de72cc00721826160c8f85f49c8375dabb2bc4ce4773bf820789a68") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8fbc82bc5de72cc00721826160c8f85f49c8375dabb2bc4ce4773bf820789a68";
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
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "mb-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-extrabold text-slate-900",
                    children: "Join Our Team"
                }, void 0, false, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 110,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-slate-600 max-w-2xl mx-auto",
                    children: "We're building delightful software — come help shape the future with us."
                }, void 0, false, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 110,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "sr-only",
            children: "Search jobs"
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                lineNumber: 124,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "CareersPage[<input>.onChange]": (e)=>setQuery(e.target.value)
        })["CareersPage[<input>.onChange]"];
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== query) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "pl-10 pr-4 py-3 w-full md:w-96 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-200",
                            placeholder: "Search roles, skills, or keywords",
                            value: query,
                            onChange: t8
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 140,
                            columnNumber: 68
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 140,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[16] = query;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "CareersPage[<select>.onChange]": (e_0)=>setLocationFilter(e_0.target.value)
        })["CareersPage[<select>.onChange]"];
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "All locations"
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
    } else {
        t10 = $[18];
        t11 = $[19];
    }
    let t12;
    if ($[20] !== locations) {
        t12 = locations.map(_CareersPageLocationsMap);
        $[20] = locations;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== locationFilter || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "rounded-lg border border-slate-200 py-2 px-3 bg-white text-sm",
            value: locationFilter,
            onChange: t10,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[22] = locationFilter;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t15 || $[29] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row gap-4 md:items-center md:justify-between",
            children: [
                t9,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t9;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== error || $[32] !== filtered || $[33] !== loading) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500",
                children: "Loading jobs…"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 207,
                columnNumber: 44
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: [
                    "Failed to load jobs: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 207,
                columnNumber: 102
            }, this) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-600",
                children: "No job openings match your search."
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 207,
                columnNumber: 189
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: filtered.map(_CareersPageFilteredMap)
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 207,
                columnNumber: 260
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[31] = error;
        $[32] = filtered;
        $[33] = loading;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t16 || $[36] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-linear-to-b from-slate-50 via-white to-indigo-50 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-md rounded-lg p-6 -mt-4",
                        children: [
                            t16,
                            t17
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/careers/page.tsx",
                        lineNumber: 217,
                        columnNumber: 143
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/careers/page.tsx",
                lineNumber: 217,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[35] = t16;
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    return t18;
}
_s(CareersPage, "JU01CdSbu3bDa9TmH7HA/8Kpqzw=");
_c = CareersPage;
function _CareersPageFilteredMap(job) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "relative bg-linear-to-b from-white to-slate-50 border border-slate-100 rounded-xl p-5 shadow hover:shadow-lg transition transform hover:-translate-y-1",
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
                            lineNumber: 227,
                            columnNumber: 271
                        }, this),
                        job.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500 mt-1",
                            children: [
                                "📍 ",
                                job.location
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 227,
                            columnNumber: 357
                        }, this),
                        job.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm text-slate-700 line-clamp-3",
                            children: job.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 227,
                            columnNumber: 442
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 227,
                    columnNumber: 247
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shrink-0 text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-400",
                            children: new Date(job.createdAt).toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 227,
                            columnNumber: 563
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "mt-3 inline-block bg-indigo-600 text-white text-sm px-3 py-2 rounded-md hover:bg-indigo-700",
                            href: `mailto:careers@tantradot.com?subject=${encodeURIComponent("Application for " + job.title)}`,
                            children: "Apply"
                        }, void 0, false, {
                            fileName: "[project]/src/app/careers/page.tsx",
                            lineNumber: 227,
                            columnNumber: 651
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/careers/page.tsx",
                    lineNumber: 227,
                    columnNumber: 526
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/careers/page.tsx",
            lineNumber: 227,
            columnNumber: 191
        }, this)
    }, job._id, false, {
        fileName: "[project]/src/app/careers/page.tsx",
        lineNumber: 227,
        columnNumber: 10
    }, this);
}
function _CareersPageLocationsMap(loc) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: loc,
        children: loc
    }, loc, false, {
        fileName: "[project]/src/app/careers/page.tsx",
        lineNumber: 230,
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

//# sourceMappingURL=src_app_careers_page_tsx_6e33de27._.js.map