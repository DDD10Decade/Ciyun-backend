(function () {
    "use strict";
    var e = {
        7880: function (e, t, n) {
            var o = n(9242), r = n(3396);
            const i = {class: "navbar navbar-expand-lg bg-body-tertiary", style: {"margin-top": "-10px"}};

            function a(e, t, n, o, a, u) {
                const l = (0, r.up)("MostlyCloudy"), c = (0, r.up)("router-link"), d = (0, r.up)("el-menu-item"),
                    s = (0, r.up)("Cloudy"), f = (0, r.up)("el-menu"), p = (0, r.up)("router-view"),
                    m = (0, r.up)("el-main");
                return (0, r.wg)(), (0, r.iD)(r.HY, null, [(0, r._)("nav", i, [(0, r.Wm)(f, {
                    class: "el-menu-demo navimg",
                    mode: "horizontal",
                    ellipsis: !1,
                    style: {padding: "0", margin: "auto", width: "100%", height: "100%"}
                }, {
                    default: (0, r.w5)((() => [(0, r.Wm)(d, null, {
                        default: (0, r.w5)((() => [(0, r.Wm)(c, {
                            to: "/index",
                            class: "nav-link"
                        }, {
                            default: (0, r.w5)((() => [(0, r.Wm)(l, {
                                class: "",
                                style: {width: "50px", height: "60px"}
                            }), (0, r.Uk)(" 主页 ")])), _: 1
                        })])), _: 1
                    }), (0, r.Wm)(d, null, {
                        default: (0, r.w5)((() => [(0, r.Wm)(c, {
                            to: "/about",
                            class: "nav-link"
                        }, {
                            default: (0, r.w5)((() => [(0, r.Wm)(s, {
                                class: "",
                                style: {width: "50px", height: "60px"}
                            }), (0, r.Uk)(" 其他 ")])), _: 1
                        })])), _: 1
                    })])), _: 1
                })]), (0, r.Wm)(m, {
                    style: {
                        "margin-top": "-25px",
                        "margin-left": "-20px"
                    }
                }, {default: (0, r.w5)((() => [(0, r.Wm)(p)])), _: 1})], 64)
            }

            var u = n(2748), l = {name: "App", components: {Cloudy: u.Cloudy, MostlyCloudy: u.MostlyCloudy}}, c = n(89);
            const d = (0, c.Z)(l, [["render", a]]);
            var s = d, f = n(9154), p = (n(4415), n(4161)), m = n(2483);
            const g = {class: "common-layout bgimg"}, v = (0, r._)("strong", null, "词云", -1),
                h = {id: "word-text-area", style: {width: "70%", margin: "auto", padding: "40px"}},
                w = {id: "word-img", style: {margin: "auto"}},
                y = (0, r._)("div", {class: "image-slot"}, [(0, r._)("i", {class: "el-icon-picture-outline"})], -1),
                b = {id: "word-operation", style: {margin: "auto"}},
                x = (0, r._)("div", {style: {width: "60px"}}, null, -1);

            function k(e, t, n, o, i, a) {
                const u = (0, r.up)("el-header"), l = (0, r.up)("el-input"), c = (0, r.up)("el-container"),
                    d = (0, r.up)("el-image"), s = (0, r.up)("el-button"), f = (0, r.up)("el-row");
                return (0, r.wg)(), (0, r.iD)("div", g, [(0, r.Wm)(c, {
                    class: "",
                    style: {padding: "40px"}
                }, {
                    default: (0, r.w5)((() => [(0, r.Wm)(u, {
                        class: "card-img-top",
                        style: {color: "white", "font-size": "50px"}
                    }, {default: (0, r.w5)((() => [v])), _: 1}), (0, r._)("div", h, [(0, r.Wm)(l, {
                        type: "textarea",
                        autosize: {minRows: 6, maxRows: 8},
                        placeholder: "请输入内容",
                        modelValue: i.textarea,
                        "onUpdate:modelValue": t[0] || (t[0] = e => i.textarea = e),
                        name: "word"
                    }, null, 8, ["modelValue"])])])), _: 1
                }), i.pic ? ((0, r.wg)(), (0, r.j4)(c, {key: 0}, {
                    default: (0, r.w5)((() => [(0, r._)("div", w, [(0, r.Wm)(d, {
                        src: "data:image/png;base64," + i.pic,
                        fit: e.fit
                    }, {default: (0, r.w5)((() => [y])), _: 1}, 8, ["src", "fit"])])])), _: 1
                })) : (0, r.kq)("", !0), (0, r.Wm)(c, null, {
                    default: (0, r.w5)((() => [(0, r._)("div", b, [(0, r.Wm)(f, null, {
                        default: (0, r.w5)((() => [(0, r.Wm)(s, {
                            type: "primary",
                            plain: "",
                            onClick: a.onSubmit,
                            round: "",
                            style: {margin: "auto"},
                            icon: a.Select
                        }, {
                            default: (0, r.w5)((() => [(0, r.Uk)(" 生成词云 ")])),
                            _: 1
                        }, 8, ["onClick", "icon"]), x, (0, r.Wm)(s, {
                            type: "success",
                            plain: "",
                            onClick: a.onDownload,
                            round: "",
                            style: {margin: "auto"},
                            icon: a.Download
                        }, {default: (0, r.w5)((() => [(0, r.Uk)(" 下载图片 ")])), _: 1}, 8, ["onClick", "icon"])])),
                        _: 1
                    })])])), _: 1
                })])
            }

            var _ = {
                name: "WordCloud", computed: {
                    Download() {
                        return u.Download
                    }, Select() {
                        return u.Select
                    }
                }, data() {
                    return {word: "", textarea: "", pic: "", pageTitle: "Flask Vue Word Cloud"}
                }, methods: {
                    onSubmit() {
                        var e = {word: this.textarea};
                        this.$axios.post("/word/generate", e).then((e => {
                            this.pic = e.data, console.log(e.data)
                        })).catch((e => {
                            console.log(e.data.res)
                        }))
                    }, onDownload() {
                        const e = "data:image/png;base64," + this.pic, t = document.createElement("a");
                        t.href = e, t.setAttribute("download", "word-cloud"), t.click()
                    }
                }
            };
            const W = (0, c.Z)(_, [["render", k]]);
            var C = W;
            const O = [{path: "/", redirect: "/index"}, {path: "/index", name: "index", component: C}, {
                path: "/about",
                name: "about",
                component: () => n.e(381).then(n.bind(n, 7381))
            }], j = (0, m.p7)({history: (0, m.PO)(""), routes: O});
            var S = j;
            const P = (0, o.ri)(s).use(S);
            P.use(S).use(f.Z).mount("#app"), P.config.globalProperties.$axios = p.Z;
            for (const [T, D] of Object.entries(u)) P.component(T, D)
        }
    }, t = {};

    function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var i = t[o] = {exports: {}};
        return e[o].call(i.exports, i, i.exports, n), i.exports
    }

    n.m = e, function () {
        var e = [];
        n.O = function (t, o, r, i) {
            if (!o) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    o = e[d][0], r = e[d][1], i = e[d][2];
                    for (var u = !0, l = 0; l < o.length; l++) (!1 & i || a >= i) && Object.keys(n.O).every((function (e) {
                        return n.O[e](o[l])
                    })) ? o.splice(l--, 1) : (u = !1, i < a && (a = i));
                    if (u) {
                        e.splice(d--, 1);
                        var c = r();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [o, r, i]
        }
    }(), function () {
        n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return n.d(t, {a: t}), t
        }
    }(), function () {
        n.d = function (e, t) {
            for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {enumerable: !0, get: t[o]})
        }
    }(), function () {
        n.f = {}, n.e = function (e) {
            return Promise.all(Object.keys(n.f).reduce((function (t, o) {
                return n.f[o](e, t), t
            }), []))
        }
    }(), function () {
        n.u = function (e) {
            return "static/js/" + e + ".7fc01ef9.js"
        }
    }(), function () {
        n.miniCssF = function (e) {
        }
    }(), function () {
        n.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(), function () {
        var e = {}, t = "frontend:";
        n.l = function (o, r, i, a) {
            if (e[o]) e[o].push(r); else {
                var u, l;
                if (void 0 !== i) for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                    var s = c[d];
                    if (s.getAttribute("src") == o || s.getAttribute("data-webpack") == t + i) {
                        u = s;
                        break
                    }
                }
                u || (l = !0, u = document.createElement("script"), u.charset = "utf-8", u.timeout = 120, n.nc && u.setAttribute("nonce", n.nc), u.setAttribute("data-webpack", t + i), u.src = o), e[o] = [r];
                var f = function (t, n) {
                    u.onerror = u.onload = null, clearTimeout(p);
                    var r = e[o];
                    if (delete e[o], u.parentNode && u.parentNode.removeChild(u), r && r.forEach((function (e) {
                        return e(n)
                    })), t) return t(n)
                }, p = setTimeout(f.bind(null, void 0, {type: "timeout", target: u}), 12e4);
                u.onerror = f.bind(null, u.onerror), u.onload = f.bind(null, u.onload), l && document.head.appendChild(u)
            }
        }
    }(), function () {
        n.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }
    }(), function () {
        n.p = ""
    }(), function () {
        var e = {143: 0};
        n.f.j = function (t, o) {
            var r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r) if (r) o.push(r[2]); else {
                var i = new Promise((function (n, o) {
                    r = e[t] = [n, o]
                }));
                o.push(r[2] = i);
                var a = n.p + n.u(t), u = new Error, l = function (o) {
                    if (n.o(e, t) && (r = e[t], 0 !== r && (e[t] = void 0), r)) {
                        var i = o && ("load" === o.type ? "missing" : o.type), a = o && o.target && o.target.src;
                        u.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", u.name = "ChunkLoadError", u.type = i, u.request = a, r[1](u)
                    }
                };
                n.l(a, l, "chunk-" + t, t)
            }
        }, n.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, o) {
            var r, i, a = o[0], u = o[1], l = o[2], c = 0;
            if (a.some((function (t) {
                return 0 !== e[t]
            }))) {
                for (r in u) n.o(u, r) && (n.m[r] = u[r]);
                if (l) var d = l(n)
            }
            for (t && t(o); c < a.length; c++) i = a[c], n.o(e, i) && e[i] && e[i][0](), e[i] = 0;
            return n.O(d)
        }, o = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
        o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
    }();
    var o = n.O(void 0, [998], (function () {
        return n(7880)
    }));
    o = n.O(o)
})();