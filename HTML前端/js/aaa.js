/*!
 * aria v4.1.7
 * (c) Licensed under the MIT license.  
 * Copyright 2022 All Rights Reserved
 * http://license.cnwza.cn 
 * elease time : Tue Apr 19 2022 11:30:22 GMT+0800 (中国标准时间)
 */
var mainversion = 4;
! function() {
    var n = {
            817: function(e, t, n) {
                n(9554), e.exports = n(2649)("Array", "forEach")
            },
            2724: function(e, t, n) {
                n(2772), e.exports = n(2649)("Array", "indexOf")
            },
            9021: function(e, t, n) {
                n(4812), e.exports = n(2649)("Function", "bind")
            },
            9116: function(e, t, n) {
                n(9601), e.exports = n(857).Object.assign
            },
            1200: function(e, t, n) {
                n(8011);
                var r = n(857).Object;
                e.exports = function(e, t) {
                    return r.create(e, t)
                }
            },
            4678: function(e, t, n) {
                n(9070);
                var r = n(857).Object,
                    e = e.exports = function(e, t, n) {
                        return r.defineProperty(e, t, n)
                    };
                r.defineProperty.sham && (e.sham = !0)
            },
            7633: function(e, t, n) {
                n(1539), n(8783), n(3948), n(8674), n(7727), e.exports = n(857).Promise
            },
            7528: function(e, t, n) {
                e.exports = n(817)
            },
            854: function(e, t, n) {
                e.exports = n(2724)
            },
            1858: function(e, t, n) {
                e.exports = n(9021)
            },
            7671: function(e, t, n) {
                e.exports = n(9116)
            },
            7862: function(e, t, n) {
                e.exports = n(1200)
            },
            8842: function(e, t, n) {
                e.exports = n(4678)
            },
            3867: function(e, t, n) {
                e.exports = n(7633), n(8628), n(7314), n(7479), n(6290)
            },
            3099: function(e) {
                e.exports = function(e) {
                    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                    return e
                }
            },
            1223: function(e, t, n) {
                var r = n(5112)("unscopables"),
                    i = n(30),
                    n = n(5185),
                    o = Array.prototype;
                null == o[r] && n(o, r, i(null)), e.exports = function(e) {
                    o[r][e] = !0
                }
            },
            5787: function(e) {
                e.exports = function(e, t, n) {
                    if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
                    return e
                }
            },
            9670: function(e, t, n) {
                var r = n(111);
                e.exports = function(e) {
                    if (!r(e)) throw TypeError(String(e) + " is not an object");
                    return e
                }
            },
            8533: function(e, t, n) {
                "use strict";
                var r = [].forEach,
                    i = n(7550)(0),
                    n = n(6637)("forEach");
                e.exports = n ? function(e) {
                    return i(this, e, arguments[1])
                } : r
            },
            1318: function(e, t, n) {
                var c = n(5656),
                    l = n(7466),
                    u = n(1400);
                e.exports = function(s) {
                    return function(e, t, n) {
                        var r, i = c(e),
                            o = l(i.length),
                            a = u(n, o);
                        if (s && t != t) {
                            for (; a < o;)
                                if ((r = i[a++]) != r) return !0
                        } else
                            for (; a < o; a++)
                                if ((s || a in i) && i[a] === t) return s || a || 0;
                        return !s && -1
                    }
                }
            },
            7550: function(e, t, n) {
                var y = n(244),
                    w = n(8361),
                    x = n(7908),
                    T = n(7466),
                    r = n(5417);
                e.exports = function(d, e) {
                    var f = 1 == d,
                        g = 2 == d,
                        p = 3 == d,
                        h = 4 == d,
                        v = 6 == d,
                        m = 5 == d || v,
                        b = e || r;
                    return function(e, t, n) {
                        for (var r, i, o = x(e), a = w(o), s = y(t, n, 3), c = T(a.length), l = 0, u = f ? b(e, c) : g ? b(e, 0) : void 0; l < c; l++)
                            if ((m || l in a) && (i = s(r = a[l], l, o), d))
                                if (f) u[l] = i;
                                else if (i) switch (d) {
                            case 3:
                                return !0;
                            case 5:
                                return r;
                            case 6:
                                return l;
                            case 2:
                                u.push(r)
                        } else if (h) return !1;
                        return v ? -1 : p || h ? h : u
                    }
                }
            },
            5417: function(e, t, n) {
                var r = n(111),
                    i = n(3157),
                    o = n(5112)("species");
                e.exports = function(e, t) {
                    var n;
                    return new(void 0 === (n = i(e) && ("function" == typeof(n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) ? void 0 : n) ? Array : n)(0 === t ? 0 : t)
                }
            },
            244: function(e, t, n) {
                var o = n(3099);
                e.exports = function(r, i, e) {
                    if (o(r), void 0 === i) return r;
                    switch (e) {
                        case 0:
                            return function() {
                                return r.call(i)
                            };
                        case 1:
                            return function(e) {
                                return r.call(i, e)
                            };
                        case 2:
                            return function(e, t) {
                                return r.call(i, e, t)
                            };
                        case 3:
                            return function(e, t, n) {
                                return r.call(i, e, t, n)
                            }
                    }
                    return function() {
                        return r.apply(i, arguments)
                    }
                }
            },
            3411: function(e, t, n) {
                var i = n(9670);
                e.exports = function(t, e, n, r) {
                    try {
                        return r ? e(i(n)[0], n[1]) : e(n)
                    } catch (e) {
                        n = t.return;
                        throw void 0 !== n && i(n.call(t)), e
                    }
                }
            },
            7072: function(e, t, n) {
                var i = n(5112)("iterator"),
                    o = !1;
                try {
                    var r = 0,
                        a = {
                            next: function() {
                                return {
                                    done: !!r++
                                }
                            },
                            return: function() {
                                o = !0
                            }
                        };
                    a[i] = function() {
                        return this
                    }, Array.from(a, function() {
                        throw 2
                    })
                } catch (e) {}
                e.exports = function(e, t) {
                    if (!t && !o) return !1;
                    var n = !1;
                    try {
                        var r = {};
                        r[i] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: n = !0
                                    }
                                }
                            }
                        }, e(r)
                    } catch (e) {}
                    return n
                }
            },
            4326: function(e) {
                var t = {}.toString;
                e.exports = function(e) {
                    return t.call(e).slice(8, -1)
                }
            },
            648: function(e, t, n) {
                var r = n(4326),
                    i = n(5112)("toStringTag"),
                    o = "Arguments" == r(function() {
                        return arguments
                    }());
                e.exports = function(e) {
                    var t;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(e = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {}
                    }(t = Object(e), i)) ? e : o ? r(t) : "Object" == (e = r(t)) && "function" == typeof t.callee ? "Arguments" : e
                }
            },
            9920: function(e, t, n) {
                var s = n(6656),
                    c = n(3887),
                    l = n(1236),
                    u = n(3070);
                e.exports = function(e, t) {
                    for (var n = c(t), r = u.f, i = l.f, o = 0; o < n.length; o++) {
                        var a = n[o];
                        s(e, a) || r(e, a, i(t, a))
                    }
                }
            },
            8544: function(e, t, n) {
                e.exports = !n(7293)(function() {
                    function e() {}
                    return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                })
            },
            4994: function(e, t, n) {
                "use strict";

                function r() {
                    return this
                }
                var i = n(3383).IteratorPrototype,
                    o = n(30),
                    a = n(9114),
                    s = n(8003),
                    c = n(7497);
                e.exports = function(e, t, n) {
                    t += " Iterator";
                    return e.prototype = o(i, {
                        next: a(1, n)
                    }), s(e, t, !1, !0), c[t] = r, e
                }
            },
            9114: function(e) {
                e.exports = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            },
            654: function(e, t, n) {
                "use strict";

                function h() {
                    return this
                }
                var v = n(2109),
                    m = n(4994),
                    b = n(9518),
                    y = n(7674),
                    w = n(8003),
                    x = n(5185),
                    T = n(1320),
                    C = n(1913),
                    k = n(5112)("iterator"),
                    A = n(7497),
                    n = n(3383),
                    E = n.IteratorPrototype,
                    S = n.BUGGY_SAFARI_ITERATORS,
                    O = "values",
                    N = "entries";
                e.exports = function(e, t, n, r, i, o, a) {
                    m(n, t, r);

                    function s(e) {
                        if (e === i && p) return p;
                        if (!S && e in f) return f[e];
                        switch (e) {
                            case "keys":
                            case O:
                            case N:
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this)
                        }
                    }
                    var c, l, u = t + " Iterator",
                        d = !1,
                        f = e.prototype,
                        g = f[k] || f["@@iterator"] || i && f[i],
                        p = !S && g || s(i),
                        r = "Array" == t && f.entries || g;
                    if (r && (e = b(r.call(new e)), E !== Object.prototype && e.next && (C || b(e) === E || (y ? y(e, E) : "function" != typeof e[k] && x(e, k, h)), w(e, u, !0, !0), C && (A[u] = h))), i == O && g && g.name !== O && (d = !0, p = function() {
                            return g.call(this)
                        }), C && !a || f[k] === p || x(f, k, p), A[t] = p, i)
                        if (c = {
                                values: s(O),
                                keys: o ? p : s("keys"),
                                entries: s(N)
                            }, a)
                            for (l in c) !S && !d && l in f || T(f, l, c[l]);
                        else v({
                            target: t,
                            proto: !0,
                            forced: S || d
                        }, c);
                    return c
                }
            },
            9781: function(e, t, n) {
                e.exports = !n(7293)(function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            317: function(e, t, n) {
                var r = n(111),
                    i = n(7854).document,
                    o = r(i) && r(i.createElement);
                e.exports = function(e) {
                    return o ? i.createElement(e) : {}
                }
            },
            8324: function(e) {
                e.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                }
            },
            2649: function(e, t, n) {
                var r = n(7854),
                    i = n(244),
                    o = Function.call;
                e.exports = function(e, t, n) {
                    return i(o, r[e].prototype[t], n)
                }
            },
            748: function(e) {
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            2109: function(e, t, n) {
                var l = n(7854),
                    u = n(1236).f,
                    d = n(5185),
                    f = n(1320),
                    g = n(3505),
                    p = n(9920),
                    h = n(4705);
                e.exports = function(e, t) {
                    var n, r, i, o = e.target,
                        a = e.global,
                        s = e.stat,
                        c = a ? l : s ? l[o] || g(o, {}) : (l[o] || {}).prototype;
                    if (c)
                        for (n in t) {
                            if (r = t[n], i = e.noTargetGet ? (i = u(c, n)) && i.value : c[n], !h(a ? n : o + (s ? "." : "#") + n, e.forced) && void 0 !== i) {
                                if (typeof r == typeof i) continue;
                                p(r, i)
                            }(e.sham || i && i.sham) && d(r, "sham", !0), f(c, n, r, e)
                        }
                }
            },
            7293: function(e) {
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            },
            7065: function(e, t, n) {
                "use strict";
                var o = n(3099),
                    a = n(111),
                    s = [].slice,
                    c = {};
                e.exports = Function.bind || function(t) {
                    var n = o(this),
                        r = s.call(arguments, 1),
                        i = function() {
                            var e = r.concat(s.call(arguments));
                            return this instanceof i ? function(e, t, n) {
                                if (!(t in c)) {
                                    for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
                                    c[t] = Function("C,a", "return new C(" + r.join(",") + ")")
                                }
                                return c[t](e, n)
                            }(n, e.length, e) : n.apply(t, e)
                        };
                    return a(n.prototype) && (i.prototype = n.prototype), i
                }
            },
            2521: function(e, t, n) {
                e.exports = n(2309)("native-function-to-string", Function.toString)
            },
            5005: function(e, t, n) {
                function r(e) {
                    return "function" == typeof e ? e : void 0
                }
                var i = n(857),
                    o = n(7854);
                e.exports = function(e, t) {
                    return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t]
                }
            },
            1246: function(e, t, n) {
                var r = n(648),
                    i = n(5112)("iterator"),
                    o = n(7497);
                e.exports = function(e) {
                    if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
                }
            },
            7854: function(e) {
                e.exports = "object" == typeof window && window && window.Math == Math ? window : "object" == typeof self && self && self.Math == Math ? self : Function("return this")()
            },
            6656: function(e) {
                var n = {}.hasOwnProperty;
                e.exports = function(e, t) {
                    return n.call(e, t)
                }
            },
            3501: function(e) {
                e.exports = {}
            },
            5185: function(e, t, n) {
                var r = n(3070),
                    i = n(9114);
                e.exports = n(9781) ? function(e, t, n) {
                    return r.f(e, t, i(1, n))
                } : function(e, t, n) {
                    return e[t] = n, e
                }
            },
            842: function(e, t, n) {
                var r = n(7854);
                e.exports = function(e, t) {
                    var n = r.console;
                    n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
                }
            },
            490: function(e, t, n) {
                n = n(7854).document;
                e.exports = n && n.documentElement
            },
            4664: function(e, t, n) {
                e.exports = !n(9781) && !n(7293)(function() {
                    return 7 != Object.defineProperty(n(317)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            8361: function(e, t, n) {
                var r = n(7293),
                    i = n(4326),
                    o = "".split;
                e.exports = r(function() {
                    return !Object("z").propertyIsEnumerable(0)
                }) ? function(e) {
                    return "String" == i(e) ? o.call(e, "") : Object(e)
                } : Object
            },
            9909: function(e, t, n) {
                var r, i, o, a, s, c, l, u, d = n(8536),
                    f = n(111),
                    g = n(5185),
                    p = n(6656),
                    h = n(6200),
                    v = n(3501),
                    n = n(7854).WeakMap;
                l = d ? (r = new n, i = r.get, o = r.has, a = r.set, s = function(e, t) {
                    return a.call(r, e, t), t
                }, c = function(e) {
                    return i.call(r, e) || {}
                }, function(e) {
                    return o.call(r, e)
                }) : (v[u = h("state")] = !0, s = function(e, t) {
                    return g(e, u, t), t
                }, c = function(e) {
                    return p(e, u) ? e[u] : {}
                }, function(e) {
                    return p(e, u)
                }), e.exports = {
                    set: s,
                    get: c,
                    has: l,
                    enforce: function(e) {
                        return l(e) ? c(e) : s(e, {})
                    },
                    getterFor: function(n) {
                        return function(e) {
                            var t;
                            if (!f(e) || (t = c(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                            return t
                        }
                    }
                }
            },
            7659: function(e, t, n) {
                var r = n(7497),
                    i = n(5112)("iterator"),
                    o = Array.prototype;
                e.exports = function(e) {
                    return void 0 !== e && (r.Array === e || o[i] === e)
                }
            },
            3157: function(e, t, n) {
                var r = n(4326);
                e.exports = Array.isArray || function(e) {
                    return "Array" == r(e)
                }
            },
            4705: function(e, t, n) {
                function r(e, t) {
                    return (e = s[a(e)]) == l || e != c && ("function" == typeof t ? i(t) : !!t)
                }
                var i = n(7293),
                    o = /#|\.prototype\./,
                    a = r.normalize = function(e) {
                        return String(e).replace(o, ".").toLowerCase()
                    },
                    s = r.data = {},
                    c = r.NATIVE = "N",
                    l = r.POLYFILL = "P";
                e.exports = r
            },
            111: function(e) {
                e.exports = function(e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }
            },
            1913: function(e) {
                e.exports = !1
            },
            408: function(e, t, n) {
                var u = n(9670),
                    d = n(7659),
                    f = n(7466),
                    g = n(244),
                    p = n(1246),
                    h = n(3411),
                    v = {};
                (e.exports = function(e, t, n, r, i) {
                    var o, a, s, c, l = g(t, n, r ? 2 : 1);
                    if (i) o = e;
                    else {
                        if ("function" != typeof(i = p(e))) throw TypeError("Target is not iterable");
                        if (d(i)) {
                            for (a = 0, s = f(e.length); a < s; a++)
                                if ((r ? l(u(c = e[a])[0], c[1]) : l(e[a])) === v) return v;
                            return
                        }
                        o = i.call(e)
                    }
                    for (; !(c = o.next()).done;)
                        if (h(o, l, c.value, r) === v) return v
                }).BREAK = v
            },
            3383: function(e, t, n) {
                "use strict";
                var r, i = n(9518),
                    o = n(5185),
                    a = n(6656),
                    s = n(1913),
                    c = n(5112)("iterator"),
                    l = !1;
                [].keys && ("next" in (n = [].keys()) ? (n = i(i(n))) !== Object.prototype && (r = n) : l = !0), null == r && (r = {}), s || a(r, c) || o(r, c, function() {
                    return this
                }), e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: l
                }
            },
            7497: function(e) {
                e.exports = {}
            },
            5948: function(e, t, n) {
                var r, i, o, a, s, c, l, u = n(7854),
                    d = n(1236).f,
                    f = n(4326),
                    g = n(261).set,
                    p = n(227),
                    h = u.MutationObserver || u.WebKitMutationObserver,
                    v = u.process,
                    n = u.Promise,
                    m = "process" == f(v),
                    d = d(u, "queueMicrotask"),
                    d = d && d.value;
                d || (r = function() {
                    var e, t;
                    for (m && (e = v.domain) && e.exit(); i;) {
                        t = i.fn, i = i.next;
                        try {
                            t()
                        } catch (e) {
                            throw i ? a() : o = void 0, e
                        }
                    }
                    o = void 0, e && e.enter()
                }, a = m ? function() {
                    v.nextTick(r)
                } : h && !/(iPhone|iPod|iPad).*AppleWebKit/i.test(p) ? (s = !0, c = document.createTextNode(""), new h(r).observe(c, {
                    characterData: !0
                }), function() {
                    c.data = s = !s
                }) : n && n.resolve ? (l = n.resolve(void 0), function() {
                    l.then(r)
                }) : function() {
                    g.call(u, r)
                }), e.exports = d || function(e) {
                    e = {
                        fn: e,
                        next: void 0
                    };
                    o && (o.next = e), i || (i = e, a()), o = e
                }
            },
            133: function(e, t, n) {
                e.exports = !n(7293)(function() {
                    return !String(Symbol())
                })
            },
            8536: function(e, t, n) {
                var r = n(2521),
                    n = n(7854).WeakMap;
                e.exports = "function" == typeof n && /native code/.test(r.call(n))
            },
            8523: function(e, t, n) {
                "use strict";

                function r(e) {
                    var n, r;
                    this.promise = new e(function(e, t) {
                        if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
                        n = e, r = t
                    }), this.resolve = i(n), this.reject = i(r)
                }
                var i = n(3099);
                e.exports.f = function(e) {
                    return new r(e)
                }
            },
            1574: function(e, t, n) {
                "use strict";
                var f = n(1956),
                    g = n(5181),
                    p = n(5296),
                    h = n(7908),
                    v = n(8361),
                    i = Object.assign;
                e.exports = !i || n(7293)(function() {
                    var e = {},
                        t = {},
                        n = Symbol(),
                        r = "abcdefghijklmnopqrst";
                    return e[n] = 7, r.split("").forEach(function(e) {
                        t[e] = e
                    }), 7 != i({}, e)[n] || f(i({}, t)).join("") != r
                }) ? function(e, t) {
                    for (var n = h(e), r = arguments.length, i = 1, o = g.f, a = p.f; i < r;)
                        for (var s, c = v(arguments[i++]), l = o ? f(c).concat(o(c)) : f(c), u = l.length, d = 0; d < u;) a.call(c, s = l[d++]) && (n[s] = c[s]);
                    return n
                } : i
            },
            30: function(e, t, n) {
                function r() {}
                var i = n(9670),
                    o = n(6048),
                    a = n(748),
                    s = n(490),
                    c = n(317),
                    l = n(6200)("IE_PROTO"),
                    u = "prototype",
                    d = function() {
                        var e = c("iframe"),
                            t = a.length;
                        for (e.style.display = "none", s.appendChild(e), e.src = String("javascript:"), (e = e.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; t--;) delete d[u][a[t]];
                        return d()
                    };
                e.exports = Object.create || function(e, t) {
                    var n;
                    return null !== e ? (r[u] = i(e), n = new r, r[u] = null, n[l] = e) : n = d(), void 0 === t ? n : o(n, t)
                }, n(3501)[l] = !0
            },
            6048: function(e, t, n) {
                var r = n(9781),
                    a = n(3070),
                    s = n(9670),
                    c = n(1956);
                e.exports = r ? Object.defineProperties : function(e, t) {
                    s(e);
                    for (var n, r = c(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
                    return e
                }
            },
            3070: function(e, t, n) {
                var r = n(9781),
                    i = n(4664),
                    o = n(9670),
                    a = n(7593),
                    s = Object.defineProperty;
                t.f = r ? s : function(e, t, n) {
                    if (o(e), t = a(t, !0), o(n), i) try {
                        return s(e, t, n)
                    } catch (e) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                    return "value" in n && (e[t] = n.value), e
                }
            },
            1236: function(e, t, n) {
                var r = n(9781),
                    i = n(5296),
                    o = n(9114),
                    a = n(5656),
                    s = n(7593),
                    c = n(6656),
                    l = n(4664),
                    u = Object.getOwnPropertyDescriptor;
                t.f = r ? u : function(e, t) {
                    if (e = a(e), t = s(t, !0), l) try {
                        return u(e, t)
                    } catch (e) {}
                    if (c(e, t)) return o(!i.f.call(e, t), e[t])
                }
            },
            8006: function(e, t, n) {
                var r = n(6324),
                    i = n(748).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function(e) {
                    return r(e, i)
                }
            },
            5181: function(e, t) {
                t.f = Object.getOwnPropertySymbols
            },
            9518: function(e, t, n) {
                var r = n(6656),
                    i = n(7908),
                    o = n(6200)("IE_PROTO"),
                    n = n(8544),
                    a = Object.prototype;
                e.exports = n ? Object.getPrototypeOf : function(e) {
                    return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
                }
            },
            6324: function(e, t, n) {
                var a = n(6656),
                    s = n(5656),
                    c = n(1318)(!1),
                    l = n(3501);
                e.exports = function(e, t) {
                    var n, r = s(e),
                        i = 0,
                        o = [];
                    for (n in r) !a(l, n) && a(r, n) && o.push(n);
                    for (; t.length > i;) a(r, n = t[i++]) && (~c(o, n) || o.push(n));
                    return o
                }
            },
            1956: function(e, t, n) {
                var r = n(6324),
                    i = n(748);
                e.exports = Object.keys || function(e) {
                    return r(e, i)
                }
            },
            5296: function(e, t) {
                "use strict";
                var n = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    i = r && !n.call({
                        1: 2
                    }, 1);
                t.f = i ? function(e) {
                    e = r(this, e);
                    return !!e && e.enumerable
                } : n
            },
            7674: function(e, t, n) {
                var i = n(9475);
                e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var n, r = !1,
                        e = {};
                    try {
                        (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), r = e instanceof Array
                    } catch (e) {}
                    return function(e, t) {
                        return i(e, t), r ? n.call(e, t) : e.__proto__ = t, e
                    }
                }() : void 0)
            },
            288: function(e, t, n) {
                "use strict";
                var r = n(648),
                    i = {};
                i[n(5112)("toStringTag")] = "z", e.exports = "[object z]" !== String(i) ? function() {
                    return "[object " + r(this) + "]"
                } : i.toString
            },
            3887: function(e, t, n) {
                var r = n(8006),
                    i = n(5181),
                    o = n(9670),
                    n = n(7854).Reflect;
                e.exports = n && n.ownKeys || function(e) {
                    var t = r.f(o(e)),
                        n = i.f;
                    return n ? t.concat(n(e)) : t
                }
            },
            857: function(e, t, n) {
                e.exports = n(7854)
            },
            2534: function(e) {
                e.exports = function(e) {
                    try {
                        return {
                            error: !1,
                            value: e()
                        }
                    } catch (e) {
                        return {
                            error: !0,
                            value: e
                        }
                    }
                }
            },
            9478: function(e, t, n) {
                var r = n(9670),
                    i = n(111),
                    o = n(8523);
                e.exports = function(e, t) {
                    if (r(e), i(t) && t.constructor === e) return t;
                    e = o.f(e);
                    return (0, e.resolve)(t), e.promise
                }
            },
            2248: function(e, t, n) {
                var i = n(1320);
                e.exports = function(e, t, n) {
                    for (var r in t) i(e, r, t[r], n);
                    return e
                }
            },
            1320: function(e, t, n) {
                var a = n(7854),
                    s = n(5185),
                    c = n(6656),
                    l = n(3505),
                    r = n(2521),
                    i = n(9909),
                    o = i.get,
                    u = i.enforce,
                    d = String(r).split("toString");
                n(2309)("inspectSource", function(e) {
                    return r.call(e)
                }), (e.exports = function(e, t, n, r) {
                    var i = !!r && !!r.unsafe,
                        o = !!r && !!r.enumerable,
                        r = !!r && !!r.noTargetGet;
                    "function" == typeof n && ("string" != typeof t || c(n, "name") || s(n, "name", t), u(n).source = d.join("string" == typeof t ? t : "")), e !== a ? (i ? !r && e[t] && (o = !0) : delete e[t], o ? e[t] = n : s(e, t, n)) : o ? e[t] = n : l(t, n)
                })(Function.prototype, "toString", function() {
                    return "function" == typeof this && o(this).source || r.call(this)
                })
            },
            4488: function(e) {
                e.exports = function(e) {
                    if (null == e) throw TypeError("Can't call method on " + e);
                    return e
                }
            },
            3505: function(e, t, n) {
                var r = n(7854),
                    i = n(5185);
                e.exports = function(t, n) {
                    try {
                        i(r, t, n)
                    } catch (e) {
                        r[t] = n
                    }
                    return n
                }
            },
            6340: function(e, t, n) {
                "use strict";
                var r = n(5005),
                    i = n(3070),
                    o = n(9781),
                    a = n(5112)("species");
                e.exports = function(e) {
                    var t = r(e),
                        e = i.f;
                    o && t && !t[a] && e(t, a, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }
            },
            8003: function(e, t, n) {
                var r = n(3070).f,
                    i = n(6656),
                    o = n(5112)("toStringTag");
                e.exports = function(e, t, n) {
                    e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                        configurable: !0,
                        value: t
                    })
                }
            },
            6200: function(e, t, n) {
                var r = n(2309)("keys"),
                    i = n(9711);
                e.exports = function(e) {
                    return r[e] || (r[e] = i(e))
                }
            },
            2309: function(e, t, n) {
                var r = n(7854),
                    i = n(3505),
                    o = "__core-js_shared__",
                    a = r[o] || i(o, {});
                (e.exports = function(e, t) {
                    return a[e] || (a[e] = void 0 !== t ? t : {})
                })("versions", []).push({
                    version: "3.0.1",
                    mode: n(1913) ? "pure" : "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                })
            },
            6637: function(e, t, n) {
                "use strict";
                var r = n(7293);
                e.exports = function(e, t) {
                    var n = [][e];
                    return !n || !r(function() {
                        n.call(null, t || function() {
                            throw 1
                        }, 1)
                    })
                }
            },
            6707: function(e, t, n) {
                var r = n(9670),
                    i = n(3099),
                    o = n(5112)("species");
                e.exports = function(e, t) {
                    var n, e = r(e).constructor;
                    return void 0 === e || null == (n = r(e)[o]) ? t : i(n)
                }
            },
            5866: function(e, t, n) {
                var a = n(9958),
                    s = n(4488);
                e.exports = function(e, t, n) {
                    var r, i = String(s(e)),
                        o = a(t),
                        e = i.length;
                    return o < 0 || e <= o ? n ? "" : void 0 : (t = i.charCodeAt(o)) < 55296 || 56319 < t || o + 1 === e || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? n ? i.charAt(o) : t : n ? i.slice(o, o + 2) : r - 56320 + (t - 55296 << 10) + 65536
                }
            },
            261: function(e, t, n) {
                function r() {
                    var e, t = +this;
                    v.hasOwnProperty(t) && (e = v[t], delete v[t], e())
                }

                function i(e) {
                    r.call(e.data)
                }
                var o, a = n(7854),
                    s = n(4326),
                    c = n(244),
                    l = n(490),
                    u = n(317),
                    d = a.setImmediate,
                    f = a.clearImmediate,
                    g = a.process,
                    n = a.MessageChannel,
                    p = a.Dispatch,
                    h = 0,
                    v = {},
                    m = "onreadystatechange";
                d && f || (d = function(e) {
                    for (var t = [], n = 1; n < arguments.length;) t.push(arguments[n++]);
                    return v[++h] = function() {
                        ("function" == typeof e ? e : Function(e)).apply(void 0, t)
                    }, o(h), h
                }, f = function(e) {
                    delete v[e]
                }, "process" == s(g) ? o = function(e) {
                    g.nextTick(c(r, e, 1))
                } : p && p.now ? o = function(e) {
                    p.now(c(r, e, 1))
                } : n ? (n = (s = new n).port2, s.port1.onmessage = i, o = c(n.postMessage, n, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts ? (o = function(e) {
                    a.postMessage(e + "", "*")
                }, a.addEventListener("message", i, !1)) : o = m in u("script") ? function(e) {
                    l.appendChild(u("script"))[m] = function() {
                        l.removeChild(this), r.call(e)
                    }
                } : function(e) {
                    setTimeout(c(r, e, 1), 0)
                }), e.exports = {
                    set: d,
                    clear: f
                }
            },
            1400: function(e, t, n) {
                var r = n(9958),
                    i = Math.max,
                    o = Math.min;
                e.exports = function(e, t) {
                    e = r(e);
                    return e < 0 ? i(e + t, 0) : o(e, t)
                }
            },
            5656: function(e, t, n) {
                var r = n(8361),
                    i = n(4488);
                e.exports = function(e) {
                    return r(i(e))
                }
            },
            9958: function(e) {
                var t = Math.ceil,
                    n = Math.floor;
                e.exports = function(e) {
                    return isNaN(e = +e) ? 0 : (0 < e ? n : t)(e)
                }
            },
            7466: function(e, t, n) {
                var r = n(9958),
                    i = Math.min;
                e.exports = function(e) {
                    return 0 < e ? i(r(e), 9007199254740991) : 0
                }
            },
            7908: function(e, t, n) {
                var r = n(4488);
                e.exports = function(e) {
                    return Object(r(e))
                }
            },
            7593: function(e, t, n) {
                var i = n(111);
                e.exports = function(e, t) {
                    if (!i(e)) return e;
                    var n, r;
                    if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
                    if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
                    if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            9711: function(e) {
                var t = 0,
                    n = Math.random();
                e.exports = function(e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36))
                }
            },
            227: function(e, t, n) {
                n = n(7854).navigator;
                e.exports = n && n.userAgent || ""
            },
            9475: function(e, t, n) {
                var r = n(111),
                    i = n(9670);
                e.exports = function(e, t) {
                    if (i(e), !r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                }
            },
            5112: function(e, t, n) {
                var r = n(2309)("wks"),
                    i = n(9711),
                    o = n(7854).Symbol,
                    a = n(133);
                e.exports = function(e) {
                    return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
                }
            },
            9554: function(e, t, n) {
                "use strict";
                var r = n(8533);
                n(2109)({
                    target: "Array",
                    proto: !0,
                    forced: [].forEach != r
                }, {
                    forEach: r
                })
            },
            2772: function(e, t, n) {
                "use strict";
                var r = n(1318)(!1),
                    i = [].indexOf,
                    o = !!i && 1 / [1].indexOf(1, -0) < 0,
                    a = n(6637)("indexOf");
                n(2109)({
                    target: "Array",
                    proto: !0,
                    forced: o || a
                }, {
                    indexOf: function(e) {
                        return o ? i.apply(this, arguments) || 0 : r(this, e, arguments[1])
                    }
                })
            },
            6992: function(e, t, n) {
                "use strict";
                var r = n(5656),
                    i = n(1223),
                    o = n(7497),
                    a = n(9909),
                    n = n(654),
                    s = "Array Iterator",
                    c = a.set,
                    l = a.getterFor(s);
                e.exports = n(Array, "Array", function(e, t) {
                    c(this, {
                        type: s,
                        target: r(e),
                        index: 0,
                        kind: t
                    })
                }, function() {
                    var e = l(this),
                        t = e.target,
                        n = e.kind,
                        r = e.index++;
                    return !t || r >= t.length ? {
                        value: e.target = void 0,
                        done: !0
                    } : "keys" == n ? {
                        value: r,
                        done: !1
                    } : "values" == n ? {
                        value: t[r],
                        done: !1
                    } : {
                        value: [r, t[r]],
                        done: !1
                    }
                }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
            },
            4812: function(e, t, n) {
                n(2109)({
                    target: "Function",
                    proto: !0
                }, {
                    bind: n(7065)
                })
            },
            9601: function(e, t, n) {
                var r = n(1574);
                n(2109)({
                    target: "Object",
                    stat: !0,
                    forced: Object.assign !== r
                }, {
                    assign: r
                })
            },
            8011: function(e, t, n) {
                n(2109)({
                    target: "Object",
                    stat: !0,
                    sham: !n(9781)
                }, {
                    create: n(30)
                })
            },
            9070: function(e, t, n) {
                var r = n(9781);
                n(2109)({
                    target: "Object",
                    stat: !0,
                    forced: !r,
                    sham: !r
                }, {
                    defineProperty: n(3070).f
                })
            },
            1539: function(e, t, n) {
                var r = n(288),
                    i = Object.prototype;
                r !== i.toString && n(1320)(i, "toString", r, {
                    unsafe: !0
                })
            },
            7727: function(e, t, n) {
                "use strict";
                var r = n(5005),
                    i = n(6707),
                    o = n(9478);
                n(2109)({
                    target: "Promise",
                    proto: !0,
                    real: !0
                }, {
                    finally: function(t) {
                        var n = i(this, r("Promise")),
                            e = "function" == typeof t;
                        return this.then(e ? function(e) {
                            return o(n, t()).then(function() {
                                return e
                            })
                        } : t, e ? function(e) {
                            return o(n, t()).then(function() {
                                throw e
                            })
                        } : t)
                    }
                })
            },
            8674: function(e, t, n) {
                "use strict";
                var r, i, o, a = "Promise",
                    s = n(1913),
                    p = n(7854),
                    c = n(2109),
                    l = n(111),
                    u = n(3099),
                    d = n(5787),
                    f = n(4326),
                    g = n(408),
                    h = n(7072),
                    v = n(6707),
                    m = n(261).set,
                    b = n(5948),
                    y = n(9478),
                    w = n(842),
                    x = n(8523),
                    T = n(2534),
                    C = n(227),
                    k = n(5112)("species"),
                    A = n(9909),
                    E = n(4705),
                    S = A.get,
                    O = A.set,
                    N = A.getterFor(a),
                    L = p[a],
                    R = p.TypeError,
                    I = p.document,
                    D = p.process,
                    P = p.fetch,
                    A = D && D.versions,
                    F = A && A.v8 || "",
                    M = x.f,
                    j = M,
                    B = "process" == f(D),
                    K = !!(I && I.createEvent && p.dispatchEvent),
                    H = "unhandledrejection",
                    _ = "rejectionhandled",
                    U = 1,
                    z = 2,
                    W = 1,
                    q = 2,
                    E = E(a, function() {
                        function t() {}
                        var e = L.resolve(1),
                            n = (e.constructor = {})[k] = function(e) {
                                e(t, t)
                            };
                        return !((B || "function" == typeof PromiseRejectionEvent) && (!s || e.finally) && e.then(t) instanceof n && 0 !== F.indexOf("6.6") && -1 === C.indexOf("Chrome/66"))
                    }),
                    h = E || !h(function(e) {
                        L.all(e).catch(function() {})
                    }),
                    V = function(e) {
                        var t;
                        return !(!l(e) || "function" != typeof(t = e.then)) && t
                    },
                    G = function(f, g, n) {
                        var o;
                        g.notified || (g.notified = !0, o = g.reactions, b(function() {
                            for (var r, i, u = g.value, d = g.state == U, e = 0, t = function(e) {
                                    var t, n, r, i, o, a = d ? e.ok : e.fail,
                                        s = e.resolve,
                                        c = e.reject,
                                        l = e.domain;
                                    try {
                                        a ? (d || (g.rejection === q && (i = f, o = g, m.call(p, function() {
                                            B ? D.emit("rejectionHandled", i) : Y(_, i, o.value)
                                        })), g.rejection = W), !0 === a ? t = u : (l && l.enter(), t = a(u), l && (l.exit(), r = !0)), t === e.promise ? c(R("Promise-chain cycle")) : (n = V(t)) ? n.call(t, s, c) : s(t)) : c(u)
                                    } catch (e) {
                                        l && !r && l.exit(), c(e)
                                    }
                                }; o.length > e;) t(o[e++]);
                            g.reactions = [], g.notified = !1, n && !g.rejection && (r = f, i = g, m.call(p, function() {
                                var e, t = i.value,
                                    n = X(i);
                                if (n && (e = T(function() {
                                        B ? D.emit("unhandledRejection", t, r) : Y(H, r, t)
                                    }), i.rejection = B || X(i) ? q : W, e.error)) throw e.value
                            }))
                        }))
                    },
                    Y = function(e, t, n) {
                        var r;
                        K ? ((r = I.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), p.dispatchEvent(r)) : r = {
                            promise: t,
                            reason: n
                        }, (t = p["on" + e]) ? t(r) : e === H && w("Unhandled promise rejection", n)
                    },
                    X = function(e) {
                        return e.rejection !== W && !e.parent
                    },
                    Z = function(t, n, r, i) {
                        return function(e) {
                            t(n, r, e, i)
                        }
                    },
                    J = function(e, t, n, r) {
                        t.done || (t.done = !0, (t = r ? r : t).value = n, t.state = z, G(e, t, !0))
                    },
                    $ = function(n, r, e, t) {
                        if (!r.done) {
                            r.done = !0, t && (r = t);
                            try {
                                if (n === e) throw R("Promise can't be resolved itself");
                                var i = V(e);
                                i ? b(function() {
                                    var t = {
                                        done: !1
                                    };
                                    try {
                                        i.call(e, Z($, n, t, r), Z(J, n, t, r))
                                    } catch (e) {
                                        J(n, t, e, r)
                                    }
                                }) : (r.value = e, r.state = U, G(n, r, !1))
                            } catch (e) {
                                J(n, {
                                    done: !1
                                }, e, r)
                            }
                        }
                    };
                E && (L = function(e) {
                    d(this, L, a), u(e), r.call(this);
                    var t = S(this);
                    try {
                        e(Z($, this, t), Z(J, this, t))
                    } catch (e) {
                        J(this, t, e)
                    }
                }, (r = function(e) {
                    O(this, {
                        type: a,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: [],
                        rejection: !1,
                        state: 0,
                        value: void 0
                    })
                }).prototype = n(2248)(L.prototype, {
                    then: function(e, t) {
                        var n = N(this),
                            r = M(v(this, L));
                        return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = B ? D.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && G(this, n, !1), r.promise
                    },
                    catch: function(e) {
                        return this.then(void 0, e)
                    }
                }), i = function() {
                    var e = new r,
                        t = S(e);
                    this.promise = e, this.resolve = Z($, e, t), this.reject = Z(J, e, t)
                }, x.f = M = function(e) {
                    return e === L || e === o ? new i : j(e)
                }, s || "function" != typeof P || c({
                    global: !0,
                    enumerable: !0,
                    forced: !0
                }, {
                    fetch: function(e) {
                        return y(L, P.apply(p, arguments))
                    }
                })), c({
                    global: !0,
                    wrap: !0,
                    forced: E
                }, {
                    Promise: L
                }), n(8003)(L, a, !1, !0), n(6340)(a), o = n(857)[a], c({
                    target: a,
                    stat: !0,
                    forced: E
                }, {
                    reject: function(e) {
                        var t = M(this);
                        return t.reject.call(void 0, e), t.promise
                    }
                }), c({
                    target: a,
                    stat: !0,
                    forced: s || E
                }, {
                    resolve: function(e) {
                        return y(s && this === o ? L : this, e)
                    }
                }), c({
                    target: a,
                    stat: !0,
                    forced: h
                }, {
                    all: function(e) {
                        var a = this,
                            t = M(a),
                            s = t.resolve,
                            c = t.reject,
                            n = T(function() {
                                var r = [],
                                    i = 0,
                                    o = 1;
                                g(e, function(e) {
                                    var t = i++,
                                        n = !1;
                                    r.push(void 0), o++, a.resolve(e).then(function(e) {
                                        n || (n = !0, r[t] = e, --o || s(r))
                                    }, c)
                                }), --o || s(r)
                            });
                        return n.error && c(n.value), t.promise
                    },
                    race: function(e) {
                        var t = this,
                            n = M(t),
                            r = n.reject,
                            i = T(function() {
                                g(e, function(e) {
                                    t.resolve(e).then(n.resolve, r)
                                })
                            });
                        return i.error && r(i.value), n.promise
                    }
                })
            },
            8783: function(e, t, n) {
                "use strict";
                var r = n(5866),
                    i = n(9909),
                    n = n(654),
                    o = "String Iterator",
                    a = i.set,
                    s = i.getterFor(o);
                n(String, "String", function(e) {
                    a(this, {
                        type: o,
                        string: String(e),
                        index: 0
                    })
                }, function() {
                    var e = s(this),
                        t = e.string,
                        n = e.index;
                    return n >= t.length ? {
                        value: void 0,
                        done: !0
                    } : (n = r(t, n, !0), e.index += n.length, {
                        value: n,
                        done: !1
                    })
                })
            },
            8628: function(e, t, n) {
                function i(e, t) {
                    var n = this;
                    if (!(n instanceof i)) return new i(e, t);
                    a && (n = a(new Error(t), o(n)));
                    var r = [];
                    return s(e, r.push, r), n.errors = r, void 0 !== t && c(n, "message", String(t)), n
                }
                var o = n(9518),
                    a = n(7674),
                    r = n(30),
                    s = n(408),
                    c = n(5185);
                i.prototype = r(Error.prototype, {
                    constructor: {
                        value: i,
                        configurable: !0,
                        writable: !0
                    },
                    name: {
                        value: "AggregateError",
                        configurable: !0,
                        writable: !0
                    }
                }), n(2109)({
                    global: !0
                }, {
                    AggregateError: i
                })
            },
            7314: function(e, t, n) {
                "use strict";
                var i = n(8523),
                    o = n(2534),
                    c = n(408);
                n(2109)({
                    target: "Promise",
                    stat: !0
                }, {
                    allSettled: function(e) {
                        var a = this,
                            t = i.f(a),
                            s = t.resolve,
                            n = t.reject,
                            r = o(function() {
                                var r = [],
                                    i = 0,
                                    o = 1;
                                c(e, function(e) {
                                    var t = i++,
                                        n = !1;
                                    r.push(void 0), o++, a.resolve(e).then(function(e) {
                                        n || (n = !0, r[t] = {
                                            status: "fulfilled",
                                            value: e
                                        }, --o || s(r))
                                    }, function(e) {
                                        n || (n = !0, r[t] = {
                                            status: "rejected",
                                            reason: e
                                        }, --o || s(r))
                                    })
                                }), --o || s(r)
                            });
                        return r.error && n(r.value), t.promise
                    }
                })
            },
            6290: function(e, t, n) {
                "use strict";
                var u = n(5005),
                    r = n(8523),
                    i = n(2534),
                    d = n(408),
                    f = "No one promise resolved";
                n(2109)({
                    target: "Promise",
                    stat: !0
                }, {
                    any: function(e) {
                        var s = this,
                            t = r.f(s),
                            c = t.resolve,
                            l = t.reject,
                            n = i(function() {
                                var r = [],
                                    i = 0,
                                    o = 1,
                                    a = !1;
                                d(e, function(e) {
                                    var t = i++,
                                        n = !1;
                                    r.push(void 0), o++, s.resolve(e).then(function(e) {
                                        n || a || (a = !0, c(e))
                                    }, function(e) {
                                        n || a || (n = !0, r[t] = e, --o || l(new(u("AggregateError"))(r, f)))
                                    })
                                }), --o || l(new(u("AggregateError"))(r, f))
                            });
                        return n.error && l(n.value), t.promise
                    }
                })
            },
            7479: function(e, t, n) {
                "use strict";
                var r = n(8523),
                    i = n(2534);
                n(2109)({
                    target: "Promise",
                    stat: !0
                }, {
                    try: function(e) {
                        var t = r.f(this),
                            e = i(e);
                        return (e.error ? t.reject : t.resolve)(e.value), t.promise
                    }
                })
            },
            3948: function(e, t, n) {
                var r, i = n(8324),
                    o = n(6992),
                    a = n(7854),
                    s = n(5185),
                    n = n(5112),
                    c = n("iterator"),
                    l = n("toStringTag"),
                    u = o.values;
                for (r in i) {
                    var d = a[r],
                        f = d && d.prototype;
                    if (f) {
                        if (f[c] !== u) try {
                            s(f, c, u)
                        } catch (e) {
                            f[c] = u
                        }
                        if (f[l] || s(f, l, r), i[r])
                            for (var g in o)
                                if (f[g] !== o[g]) try {
                                    s(f, g, o[g])
                                } catch (e) {
                                    f[g] = o[g]
                                }
                    }
                }
            },
            9575: function(e, t, n) {
                "undefined" != typeof self || "undefined" != typeof window || void 0 !== n.g && n.g, e.exports = function() {
                    "use strict";
                    var e = "3.7.2",
                        t = e,
                        n = typeof atob === "function",
                        r = typeof btoa === "function",
                        i = typeof Buffer === "function",
                        o = typeof TextDecoder === "function" ? new TextDecoder : undefined,
                        a = typeof TextEncoder === "function" ? new TextEncoder : undefined,
                        s, c = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
                        l = function(e) {
                            var n = {};
                            e.forEach(function(e, t) {
                                return n[e] = t
                            });
                            return n
                        }(c),
                        u = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
                        d = String.fromCharCode.bind(String),
                        f = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : function(e, t) {
                            if (t === void 0) t = function(e) {
                                return e
                            };
                            return new Uint8Array(Array.prototype.slice.call(e, 0).map(t))
                        },
                        g = function(e) {
                            return e.replace(/=/g, "").replace(/[+\/]/g, function(e) {
                                return e == "+" ? "-" : "_"
                            })
                        },
                        p = function(e) {
                            return e.replace(/[^A-Za-z0-9\+\/]/g, "")
                        },
                        h = function(e) {
                            var t, n, r, i, o = "";
                            var a = e.length % 3;
                            for (var s = 0; s < e.length;) {
                                if ((n = e.charCodeAt(s++)) > 255 || (r = e.charCodeAt(s++)) > 255 || (i = e.charCodeAt(s++)) > 255) throw new TypeError("invalid character found");
                                t = n << 16 | r << 8 | i;
                                o += c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[t & 63]
                            }
                            return a ? o.slice(0, a - 3) + "===".substring(a) : o
                        },
                        v = r ? function(e) {
                            return btoa(e)
                        } : i ? function(e) {
                            return Buffer.from(e, "binary").toString("base64")
                        } : h,
                        m = i ? function(e) {
                            return Buffer.from(e).toString("base64")
                        } : function(e) {
                            var t = 4096;
                            var n = [];
                            for (var r = 0, i = e.length; r < i; r += t) n.push(d.apply(null, e.subarray(r, r + t)));
                            return v(n.join(""))
                        },
                        b = function(e, t) {
                            if (t === void 0) t = false;
                            return t ? g(m(e)) : m(e)
                        },
                        y = function(e) {
                            if (e.length < 2) {
                                var t = e.charCodeAt(0);
                                return t < 128 ? e : t < 2048 ? d(192 | t >>> 6) + d(128 | t & 63) : d(224 | t >>> 12 & 15) + d(128 | t >>> 6 & 63) + d(128 | t & 63)
                            } else {
                                var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
                                return d(240 | t >>> 18 & 7) + d(128 | t >>> 12 & 63) + d(128 | t >>> 6 & 63) + d(128 | t & 63)
                            }
                        },
                        w = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        x = function(e) {
                            return e.replace(w, y)
                        },
                        T = i ? function(e) {
                            return Buffer.from(e, "utf8").toString("base64")
                        } : a ? function(e) {
                            return m(a.encode(e))
                        } : function(e) {
                            return v(x(e))
                        },
                        C = function(e, t) {
                            if (t === void 0) t = false;
                            return t ? g(T(e)) : T(e)
                        },
                        k = function(e) {
                            return C(e, true)
                        },
                        A = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                        E = function(e) {
                            switch (e.length) {
                                case 4:
                                    var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                                        n = t - 65536;
                                    return d((n >>> 10) + 55296) + d((n & 1023) + 56320);
                                case 3:
                                    return d((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                                default:
                                    return d((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                            }
                        },
                        S = function(e) {
                            return e.replace(A, E)
                        },
                        O = function(e) {
                            e = e.replace(/\s+/g, "");
                            if (!u.test(e)) throw new TypeError("malformed base64.");
                            e += "==".slice(2 - (e.length & 3));
                            var t, n = "",
                                r, i;
                            for (var o = 0; o < e.length;) {
                                t = l[e.charAt(o++)] << 18 | l[e.charAt(o++)] << 12 | (r = l[e.charAt(o++)]) << 6 | (i = l[e.charAt(o++)]);
                                n += r === 64 ? d(t >> 16 & 255) : i === 64 ? d(t >> 16 & 255, t >> 8 & 255) : d(t >> 16 & 255, t >> 8 & 255, t & 255)
                            }
                            return n
                        },
                        N = n ? function(e) {
                            return atob(p(e))
                        } : i ? function(e) {
                            return Buffer.from(e, "base64").toString("binary")
                        } : O,
                        L = i ? function(e) {
                            return f(Buffer.from(e, "base64"))
                        } : function(e) {
                            return f(N(e), function(e) {
                                return e.charCodeAt(0)
                            })
                        },
                        R = function(e) {
                            return L(D(e))
                        },
                        I = i ? function(e) {
                            return Buffer.from(e, "base64").toString("utf8")
                        } : o ? function(e) {
                            return o.decode(L(e))
                        } : function(e) {
                            return S(N(e))
                        },
                        D = function(e) {
                            return p(e.replace(/[-_]/g, function(e) {
                                return e == "-" ? "+" : "/"
                            }))
                        },
                        P = function(e) {
                            return I(D(e))
                        },
                        F, M = function(e) {
                            return {
                                value: e,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        },
                        j = function() {
                            var e = function(e, t) {
                                return Object.defineProperty(String.prototype, e, M(t))
                            };
                            e("fromBase64", function() {
                                return P(this)
                            });
                            e("toBase64", function(e) {
                                return C(this, e)
                            });
                            e("toBase64URI", function() {
                                return C(this, true)
                            });
                            e("toBase64URL", function() {
                                return C(this, true)
                            });
                            e("toUint8Array", function() {
                                return R(this)
                            })
                        },
                        B = function() {
                            var e = function(e, t) {
                                return Object.defineProperty(Uint8Array.prototype, e, M(t))
                            };
                            e("toBase64", function(e) {
                                return b(this, e)
                            });
                            e("toBase64URI", function() {
                                return b(this, true)
                            });
                            e("toBase64URL", function() {
                                return b(this, true)
                            })
                        },
                        K, H = {
                            version: e,
                            VERSION: t,
                            atob: N,
                            atobPolyfill: O,
                            btoa: v,
                            btoaPolyfill: h,
                            fromBase64: P,
                            toBase64: C,
                            encode: C,
                            encodeURI: k,
                            encodeURL: k,
                            utob: x,
                            btou: S,
                            decode: P,
                            isValid: function(e) {
                                if (typeof e !== "string") return false;
                                var t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
                                return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t)
                            },
                            fromUint8Array: b,
                            toUint8Array: R,
                            extendString: j,
                            extendUint8Array: B,
                            extendBuiltins: function() {
                                j();
                                B()
                            },
                            Base64: {}
                        };
                    return Object.keys(H).forEach(function(e) {
                        return H.Base64[e] = H[e]
                    }), H
                }()
            },
            4762: function(e, t, n) {
                var r = n(5266),
                    i = n(3956),
                    o = n(7437),
                    a = n(7810);
                n(7209), n(642);
                var s = n(8545),
                    c = n(641),
                    l = n(2807),
                    u = n(702),
                    n = {};
                n.settings = s.ariaSettings, n.scrInfo = c.getAppid(), n.initcallback = l, n.status = function() {
                    return i.status
                }, n.start = u.start, n.end = u.end, u.startRead(), u.CheckAutoStart(), o.removeRegisterEvent(a.globalStart), o.removeRegisterEvent(a.globalEnd), o.registerEvent(a.globalStart, n.start, 0), o.registerEvent(a.globalEnd, n.end, 0), window.isAriaDev ? (n.Selector = r, window.ariaDev = n) : window.aria = n, e.exports = n
            },
            702: function(e, t, n) {
                var r = n(1284),
                    i = n(8243),
                    o = n(3956);
                n(7437), n(7810), n(5674);
                n(7209);
                var a = n(1366),
                    s = n(6568),
                    c = n(9246),
                    l = (n(1069), n(8879));
                n(642);
                n(6387), n(8545);
                var u = n(2606),
                    d = n(5367),
                    f = n(641),
                    g = (n(2807), n(8927)),
                    p = n(5300),
                    h = n(8519),
                    v = !1;

                function m() {
                    v = !0, r.init().then(function() {
                        d.start();
                        try {
                            u.isMobile() ? (g.loadConfig(), h.checkViewport()) : (o.status = !0, i.start(), u.setBtn(!0)), window.isAriaDev && ariaDev && "function" == typeof ariaDev.css && ariaDev.css()
                        } catch (e) {}
                    })
                }

                function b() {
                    v = !1, d.stop(), d.end(), o.status = !1, (u.isMobile() ? a : i).end(), u.setBtn(!1)
                }
                var y = null;
                e.exports = {
                    start: m,
                    end: b,
                    startRead: function() {
                        p.setHasOldFixed(), r.checkJs(), u.removeListenBtn(), u.addListenBtn(), f.addWelcomeContent(), u.isMobile() ? l.start() : s.start(document)
                    },
                    CheckAutoStart: function() {
                        function e() {
                            y && (y = null, clearInterval(y)), y = setInterval(function() {
                                var e = o.status;
                                v != e && (e ? v || m() : v && b(), v = e)
                            }, 2e3)
                        }
                        "0" == c.queryString.val("aria") && (o.status = !1), !o.status && "1" != c.queryString.val("aria") || (u.isMobile() ? v || r.init().then(function() {
                            a.start()
                        }) : v || m(), v = !0), u.isMobile() || e(), !o.status && u.isMobile() && a.noStart(), h.checkViewport(), h.checkCompatible()
                    }
                }
            },
            1227: function(e, t, n) {
                var r = n(5285),
                    i = n(9246),
                    n = (n(3956), n(9378));
                e.exports = {
                    checkDialogShow: function() {
                        var n, e = new r(i.arrToSizzle(i.HtmlElemRoles.dialog));
                        return i.each(e, function(e, t) {
                            t = new r(t);
                            if (!t.isHidden()) return n = t
                        }), n
                    },
                    eventKeyCode: n.eventKeyCode,
                    checkKeyCode: n.checkKeyCode,
                    keyCodeSettings: n.keyCodeSettings
                }
            },
            9378: function(e, t, n) {
                var i = n(6056),
                    r = n(641),
                    a = n(2807);
                r.keys().status;

                function s(e, t) {
                    if (!e || !t) return !1;
                    if (void 0 === (t = !t.keyCode ? {
                            keyCode: t
                        } : t).status && (t.status = !0), t.status && !i.status) return !1;
                    var n = e.keyCode || e.which || e.charCode;
                    if (n) {
                        var r = a.getDisableShortKeys();
                        if (!(0 < r.length && -1 < [].indexOf.call(r, n) || "number" == typeof t.keyCode && t.keyCode != n || "object" == typeof t.keyCode && [].indexOf.call(t.keyCode, n) < 0)) {
                            r = e.ctrlKey, n = e.shfitKey, e = e.altKey;
                            return !(t.ctrlKey && !r) && (!(t.shfitKey && !n) && !(t.altKey && !e))
                        }
                    }
                }
                var c = {
                    wakeup: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !1,
                        status: !1,
                        keyCode: 192
                    },
                    wakupConfig: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        status: !0,
                        keyCode: 76
                    },
                    dialogClose: {
                        shiftKey: !1,
                        ctrlKey: !1,
                        altKey: !1,
                        keyCode: 27
                    },
                    changeRegion: {
                        next: {
                            shiftKey: !1,
                            ctrlKey: !0,
                            altKey: !0,
                            status: !0,
                            keyCode: [34, 40]
                        },
                        pre: {
                            shiftKey: !1,
                            ctrlKey: !0,
                            altKey: !0,
                            status: !0,
                            keyCode: [33, 38]
                        }
                    },
                    opVoice: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        status: !0,
                        keyCode: 86
                    },
                    vocierate: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        status: !0,
                        keyCode: 75
                    },
                    mouseb: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 77
                    },
                    mouseten: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 78
                    },
                    reset: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 67
                    },
                    readsrc: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        status: !1,
                        keyCode: 82
                    },
                    bigsrc: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 66
                    },
                    readtype: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 70
                    },
                    exitservice: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 69
                    },
                    changeTheme: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 84
                    },
                    fontTob: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: [187, 107]
                    },
                    fontTos: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: [189, 109]
                    },
                    help: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 191
                    },
                    showImg: {
                        shiftKey: !1,
                        ctrlKey: !1,
                        altKey: !0,
                        keyCode: [57, 105]
                    },
                    showQrcode: {
                        shiftKey: !1,
                        ctrlKey: !1,
                        altKey: !0,
                        keyCode: [48, 96]
                    },
                    openOldFixed: {
                        shiftKey: !1,
                        ctrlKey: !0,
                        altKey: !0,
                        keyCode: 79
                    }
                };
                e.exports = {
                    eventKeyCode: function(e) {
                        return e.keyCode || e.which || e.charCode
                    },
                    checkKeyCode: s,
                    keyCodeSettings: c,
                    toWakeUpRead: function(e) {
                        var t = e.altKey,
                            n = e.ctrlKey,
                            r = e.shfitKey,
                            i = e.keyCode || e.which || e.charCode,
                            o = a.getDisableShortKeys();
                        if (!(0 < o.length && -1 < [].indexOf.call(o, i))) return t && (48 <= i && i <= 57 || 96 <= i && i <= 105) ? !n && !r || void 0 : !!s(e, c.readsrc)
                    }
                }
            },
            8545: function(e, t, n) {
                var r = n(3956),
                    i = n(2668),
                    o = n(5367);
                e.exports = {
                    ariaSettings: {
                        get voice() {
                            return r.voice.enable
                        },
                        set voice(e) {
                            e || o.stop(), r.voice.enable = e
                        },
                        get voiceRate() {
                            return r.voice.rate
                        },
                        set voiceRate(e) {
                            r.voice.rate = e
                        },
                        get scale() {
                            return r.scale
                        },
                        set scale(e) {
                            r.scale = e, i.setBodyTran()
                        },
                        get themes() {
                            return r.Themes
                        },
                        get theme() {
                            return r.defaultTheme
                        },
                        set theme(e) {
                            r.defaultTheme = e, i.setSettingTheme()
                        },
                        readSrc: function(e) {
                            if (void 0 === e) return r.status && r.readsrc;
                            r.readsrc = e, (r.status = e) && (r.voice.enable = !1, r.defaultTheme = "default", r.scale = 1, o.stop())
                        },
                        zzms: function(e) {
                            if (void 0 === e) return r.status && !r.readsrc;
                            e && (r.readsrc = !1, r.voice.enable = !0)
                        }
                    }
                }
            },
            5674: function(e, t, n) {
                var r = n(9246);
                e.exports = {
                    check: function() {
                        return !0
                    },
                    browserIE: function() {
                        return "IE" == r.browser.getBrowserInfo().browser
                    }
                }
            },
            4036: function(e, t, n) {
                var r = n(7107),
                    i = n(641),
                    o = i.keys(),
                    n = "/api/services/Accessibility",
                    a = {
                        data: {
                            config: n + "/Configuration/GetAll",
                            curconf: n + "/Configuration/GetConf",
                            security: n + "/Security/Get",
                            ttsurl: n + "/TTS/Create",
                            mp3: n + "/TTS/mp3"
                        },
                        get serviceUrl() {
                            var e = location.protocol + "://" + location.host + ":" + location.port,
                                t = r.get(o.runtime.serviceUrl);
                            return null != t ? t : e
                        },
                        set serviceUrl(e) {
                            r.set(o.runtime.serviceUrl, e)
                        },
                        get config() {
                            return this.serviceUrl + a.data.config
                        },
                        get curconf() {
                            return this.serviceUrl + a.data.curconf
                        },
                        get security() {
                            return this.serviceUrl + a.data.security
                        },
                        get ttsurl() {
                            return a.data.ttsurl.indexOf("//") < 0 ? this.serviceUrl + a.data.ttsurl : a.data.ttsurl
                        },
                        get mp3() {
                            return a.data.ttsurl.indexOf("//") < 0 ? this.serviceUrl + a.data.mp3 : a.data.mp3
                        }
                    };
                e.exports = {
                    keys: o,
                    api: a,
                    elem: {
                        shortCutIcon: "aria-shortCutIcon"
                    },
                    copyright: {
                        name: "aria",
                        version: "3.0.1",
                        description: "无障碍功能脚本",
                        author: "Locas"
                    },
                    getAppid: i.getAppid
                }
            },
            641: function(e) {
                var r = {
                    val: function(e, t) {
                        return t = t || location.search.substring(1), new RegExp("(^|/?|&)" + e + "=([^&]*)(/s|&|$)", "i").test(t) ? RegExp.$2 : ""
                    }
                };

                function a(e, t) {
                    var n = {
                        success: !1
                    };
                    n.road = e.substr(0, t + 1), "undefined" != typeof ariaAppid ? n.appid = ariaAppid : n.appid = r.val("appid", e);
                    t = r.val("callback", e);
                    t && 0 < t.length && (n.callback = t);
                    e = r.val("initcallback", e);
                    return e && 0 < e.length && (n.initcallback = e), n.success = !0, n
                }

                function s() {
                    var e = document.scripts,
                        t = "";
                    if (window.isAriaDev) t = "ariaDev.";
                    else {
                        var t = "aria.",
                            n = document.getElementById("ariascripts");
                        if (null != n) return (i = n.src.indexOf("/" + t)) <= 0 && (i = n.src.indexOf("/_" + t)), a(n.src, i)
                    }
                    for (var r = 0; r < e.length; r++) try {
                        var i, o = e[r];
                        if ((i = (i = o.src.indexOf("/" + t)) <= 0 ? o.src.indexOf("/_" + t) : i) <= 0 && (i = o.src.indexOf("/ariaEdit.js")), null !== o.src && -1 < i) return o.id = "ariascripts", a(o.src, i)
                    } catch (e) {}
                    return {
                        success: !1
                    }
                }
                var c = "aria";
                window.isAriaDev && (c = "ariaDev");
                var t = null;
                var n = {
                    en: "welcome {0},Blind users use operation intelligent guidance, press the shortcut key Ctrl + Alt + R; To read the detailed operation instructions, press the shortcut key Ctrl + Alt + question mark",
                    "zh-CN": "欢迎进入 {0},盲人用户使用操作智能引导，请按快捷键Ctrl+Alt+R；阅读详细操作说明请按快捷键Ctrl+Alt+问号键。"
                };

                function i() {
                    for (var e, t = document.head.querySelectorAll("meta[http-equiv]"), n = 0; n < t.length; n++) {
                        var r = t[n],
                            i = r.getAttribute("http-equiv");
                        if (!i && "content-language" == i.toLocaleLowerCase()) {
                            e = r.getAttribute("content");
                            break
                        }
                    }
                    return e = -1 < (e = e || "zh-CN").indexOf("en") ? "en" : "zh-CN"
                }
                e.exports = {
                    keys: function() {
                        var e = s().appid;
                        window.ariaAppId = e;

                        function t() {
                            return c + "/" + e
                        }

                        function n() {
                            return t() + "/runtime/settings"
                        }

                        function r() {
                            return t() + "/data/settings"
                        }

                        function i() {
                            return t() + "/runtime"
                        }

                        function o() {
                            return t() + "/data"
                        }
                        var a = c + "/userSettings";
                        return {
                            base: c,
                            status: c + "/status",
                            userSettings: {
                                root: a,
                                defaultTheme: a + "/defaultTheme",
                                scale: a + "/scale",
                                ariaPointerRead: a + "/ariaPointerRead",
                                bigpoint: a + "/bigpoint",
                                leftfixed: a + "/leftfixed",
                                topfixed: a + "/fixed",
                                readtype: a + "/readtype",
                                readsrc: a + "/readsrc",
                                voice: {
                                    root: a + "/voice",
                                    enable: a + "/voice/enable",
                                    rate: a + "/voice/rate"
                                },
                                mousemode: a + "/mousemode",
                                mouseten: a + "/mouseten",
                                py: a + "/py",
                                big5: a + "/big5",
                                bigsrc: a + "/bigsrc",
                                canRead: a + "/canRead",
                                brightness: a + "/brightness",
                                contrast: a + "/contrast",
                                grayscale: a + "/grayscale"
                            },
                            road: t() + "/road",
                            root: t(),
                            runtime: {
                                root: i(),
                                serviceUrl: i() + "/serviceUrl",
                                fileUrl: i() + "/fileUrl",
                                security: i() + "/security",
                                appid: i() + "/appid",
                                callback: i() + "/callback",
                                settings: {
                                    root: n(),
                                    highlight: {
                                        root: n() + "/highlight",
                                        enable: n() + "/highlight/enable",
                                        rate: n() + "/highlight/rate",
                                        mode: n() + "/highlight/mode"
                                    },
                                    voice: {
                                        root: n() + "/voice",
                                        enable: n() + "/voice/enable",
                                        maxRate: n() + "/voice/maxRate",
                                        minRate: n() + "/voice/minRate",
                                        rate: n() + "/voice/rate"
                                    },
                                    curregion: {
                                        id: n() + "/curregion/id"
                                    },
                                    golabSkipScale: n() + "/golabSkipScale",
                                    golabSkipAll: n() + "/golabSkipAll",
                                    golabSkipTheme: n() + "/golabSkipTheme",
                                    golabFocus: n() + "/golabFocus",
                                    golabRegion1: n() + "/golabRegion1",
                                    golabRegion2: n() + "/golabRegion2",
                                    golabRegion3: n() + "/golabRegion3",
                                    golabRegion4: n() + "/golabRegion4",
                                    golabReplaceBg: n() + "/golabReplaceBg",
                                    tellerMode: n() + "/tellerMode",
                                    defaultLanguage: n() + "/defaultLanguage",
                                    shortCutIcon: n() + "/shortCutIcon",
                                    css: n() + "/css",
                                    closeShortIcon: n() + "/closeShortIcon",
                                    bodyfont: n() + "/bodyfont",
                                    reticle: n() + "/reticle",
                                    spacing: n() + "/spacing",
                                    padding: n() + "/padding",
                                    maxZoom: n() + "/maxZoom",
                                    minZoom: n() + "/minZoom",
                                    focusTheme: n() + "/focusTheme",
                                    useOldFixed: n() + "/useOldFixed",
                                    oldFixedCss: n() + "/oldFixedCss",
                                    defaultTheme: n() + "/defaultTheme",
                                    scale: n() + "/scale",
                                    golabFixedCss: n() + "/golabFixedCss",
                                    golabCss: n() + "/golabCss",
                                    iconType: n() + "/iconType",
                                    pageDesc: n() + "/pageDesc",
                                    mobileToolPosition: n() + "/mobileToolPosition",
                                    mobileToolSelectedColor: n() + "/mobileToolSelectedColor",
                                    mobileCss: n() + "/mobileCss",
                                    useOldFixedInMobile: n() + "/useOldFixedInMobile"
                                }
                            },
                            data: {
                                root: o(),
                                serviceVersion: o() + "/serviceVersion",
                                languages: o() + "/languages",
                                themes: o() + "/theme",
                                golbalElems: o() + "/golbalElems",
                                roles: o() + "/roles",
                                conf: {
                                    root: o() + "/conf",
                                    region: o() + "/conf/region"
                                },
                                settings: {
                                    root: r(),
                                    enable: r() + "/enable",
                                    topfixed: r() + "/fixed",
                                    highlight: {
                                        root: r() + "/highlight",
                                        enable: r() + "/highlight/enable",
                                        rate: r() + "/highlight/rate",
                                        mode: r() + "/highlight/mode"
                                    },
                                    voice: {
                                        root: r() + "/voice",
                                        enable: r() + "/voice/enable",
                                        rate: r() + "/voice/rate"
                                    },
                                    tellerMode: r() + "/tellerMode",
                                    defaultTheme: r() + "/defaultTheme",
                                    defaultLanguage: r() + "/defaultLanguage",
                                    shortCutIcon: r() + "/shortCutIcon",
                                    scale: r() + "/scale",
                                    golabFixedCss: r() + "/golabFixedCss",
                                    golabCss: r() + "/golabCss",
                                    iconType: r() + "/iconType",
                                    spacing: r() + "/spacing",
                                    padding: r() + "/padding"
                                }
                            }
                        }
                    },
                    getAppid: s,
                    queryString: r,
                    AppIdChangeAddListen: function(e) {
                        t = setInterval(function() {
                            appid = s().appid, window.ariaAppId != appid && e && "function" == typeof e && (window.ariaAppId = appid, e())
                        }, 1500)
                    },
                    AppIdChangeRemoveListen: function() {
                        clearInterval(t), t = null
                    },
                    addWelcomeContent: function() {
                        var e = i(),
                            t = n[e];
                        t && (t = t.replace("{0}", document.title), (e = document.querySelector("#ariaTipText")) || ((e = document.createElement("a")).id = "ariaTipText", e.setAttribute("role", "pagedescription"), e.setAttribute("aria-label", t), e.setAttribute("href", "javascript:void(0)"), document.body.insertBefore(e, document.body.firstElementChild)))
                    },
                    welcomeContent: n,
                    getLanguageName: i
                }
            },
            6056: function(e, t, n) {
                var r = n(5086),
                    i = "aria";
                window.isAriaDev && (i = "ariaDev"), e.exports = {
                    get status() {
                        var e = r.getCookie(i + "Status");
                        if (void 0 !== e) return JSON.parse(e)
                    },
                    set status(e) {
                        r.setCookie(i + "Status", e)
                    },
                    get bigsrc() {
                        var e = r.getCookie(i + "Bigsrc");
                        if (void 0 !== e) return JSON.parse(e)
                    },
                    set bigsrc(e) {
                        r.setCookie(i + "Bigsrc", e)
                    },
                    get defaultTheme() {
                        return r.getCookie(i + "DefaultTheme")
                    },
                    set defaultTheme(e) {
                        r.setCookie(i + "DefaultTheme", e)
                    },
                    get fixed() {
                        var e = r.getCookie(i + "Fixed");
                        if (void 0 !== e) return JSON.parse(e)
                    },
                    set fixed(e) {
                        r.setCookie(i + "Fixed", e)
                    },
                    get mousemode() {
                        var e = r.getCookie(i + "Mousemode");
                        if (void 0 !== e) return JSON.parse(e)
                    },
                    set mousemode(e) {
                        r.setCookie(i + "Mousemode", e)
                    },
                    get mouseten() {
                        var e = r.getCookie(i + "Mouseten");
                        if (void 0 !== e && "undefined" != e) return JSON.parse(e)
                    },
                    set mouseten(e) {
                        r.setCookie(i + "Mouseten", e)
                    },
                    get oldFixedStatus() {
                        var e = r.getCookie(i + "oldFixedStatus");
                        if (void 0 !== e && "undefined" != e) return JSON.parse(e)
                    },
                    set oldFixedStatus(e) {
                        r.setCookie(i + "oldFixedStatus", e)
                    },
                    get scale() {
                        var e = r.getCookie(i + "Scale");
                        return void 0 !== e && "undefined" != e ? JSON.parse(e) : 1
                    },
                    set scale(e) {
                        r.setCookie(i + "Scale", e)
                    },
                    get readtype() {
                        var e = r.getCookie(i + "Readtype");
                        if (void 0 !== e && "undefined" != e) return JSON.parse(e)
                    },
                    set readtype(e) {
                        r.setCookie(i + "Readtype", e)
                    },
                    clearAll: function() {
                        r.devareCookie(i + "Bigsrc"), r.devareCookie(i + "Readtype"), r.devareCookie(i + "Fixed"), r.devareCookie(i + "Mouseten"), r.devareCookie(i + "Scale"), r.devareCookie(i + "Mousemode"), r.devareCookie(i + "DefaultTheme")
                    }
                }
            },
            1284: function(e, t, n) {
                var i = n(4036),
                    o = n(1198),
                    a = n(3956);
                n(9246);

                function s(n) {
                    return n || ((n = {}).appid = a.appid), new Promise(function(t, e) {
                        o.checkUpdateToken() ? o.getService().then(function() {
                            o.get(i.api.config, {
                                appid: n.appid
                            }).then(function(e) {
                                if (!e) throw "未正常获取到基础信息数据，请与服务端维护人员联系";
                                a.data = e, a.init(e.settings), t(e)
                            })
                        }) : t(a.data)
                    })
                }
                e.exports = {
                    init: function(r) {
                        return new Promise(function(t, e) {
                            a.conf && 30 < a.conf.length && (a.conf = []);
                            var n = a.conf || [];
                            n && "object" != typeof n && (n = JSON.parse(n)), o.getService().then(function() {
                                if (r && void 0 !== r || (r = {}), !a.appid && !r.appid) throw "请先设置Appid字段，请登录后台查看";
                                if (a.curpageConf) return t(a.conf);
                                r.serviceUrl && (a.serviceUrl = r.serviceUrl), r.appid && (a.appid = r.appid), r.appid || (r.appid = a.appid), r.beforeInit && "function" == typeof r.beforeInit && r.beforeInit(), s(r).then(function() {
                                    o.get(i.api.curconf).then(function(e) {
                                        null != e ? n.push({
                                            name: window.location.href,
                                            value: e
                                        }) : n.push({
                                            name: window.location.href,
                                            value: {}
                                        }), a.conf = n, t(e)
                                    })
                                }, function(e) {})
                            }, function(e) {})
                        })
                    },
                    settings: a,
                    checkJs: function() {
                        o.checkUpdateToken() && a.clear();
                        var e = i.getAppid();
                        return a.appid = e.appid, a.road = e.road, e.callback && 0 < e.callback.lenght && (a.callback = e.callback), e.success
                    },
                    initConfig: s
                }
            },
            2807: function(e) {
                e.exports = {
                    disableShortKeys: function(e) {
                        window.disablShortKeys = e
                    },
                    getDisableShortKeys: function() {
                        return window.disablShortKeys || []
                    }
                }
            },
            1198: function(e, t, n) {
                var i = n(6121),
                    o = n(7107),
                    a = n(9246),
                    s = n(4036);

                function c() {
                    var e = o.get(s.keys.runtime.security);
                    return void 0 === e || null == e || (!e || !e.timestamp || e.timestamp < (new Date).getTime() - 864e5)
                }

                function l() {
                    return new Promise(function(t, e) {
                        var n = o.get(s.keys.runtime.serviceUrl),
                            r = o.get(s.keys.road);
                        n ? t() : i.get(r + "config.json?domain=" + location.hostname).then(function(e) {
                            (e = "object" != typeof e ? JSON.parse(e) : e).url || (e.url = location.protocol + "//" + location.host), o.set(s.keys.runtime.serviceUrl, e.url), o.set(s.keys.runtime.fileUrl, e.fileUrl || e.url), t()
                        }, function(e) {})
                    })
                }

                function u() {
                    return new Promise(function(e, t) {
                        var n, r, i = o.get(s.keys.runtime.security);
                        c() ? (n = (new Date).getTime(), r = o.get(s.keys.runtime.appid), s.api.security, o.set(s.keys.runtime.security, {
                            timestamp: n,
                            appid: r,
                            domain: document.location.hostname
                        }), e({
                            timestamp: n,
                            appid: r,
                            domain: document.location.hostname
                        })) : e(i)
                    })
                }

                function r(r) {
                    return new Promise(function(n, e) {
                        r = r || {}, l().then(function() {
                            u().then(function(e) {
                                e.referer = encodeURIComponent(document.location.href), r.type || (r.type = "post"), r.data && "function" == typeof r.data && (r.success = r.data, r.data = {}), r.data = Object.assign({}, r.data, e), "undefined" != typeof mainversion && (r.data.mainversion = mainversion), r.headers || (r.headers = []), r.headers && "object" == typeof r.headers && (r.headers["Content-Type"] || r.headers.push({
                                    name: "Content-Type",
                                    value: "application/json"
                                })), r.headers.push({
                                    name: "Accept-Language",
                                    value: "zh-Hans"
                                }), r.error || (r.error = function(e) {});
                                var t = r.success;
                                r.success = null, i.ajax(r).then(function(e) {
                                    r.xhrFields && "blob" == r.xhrFields.responseType ? n(e) : (a.isIE() && (e = JSON.parse(e)), t && "function" == typeof t && t(e.result), n(e.result))
                                }, function(e, t) {})
                            })
                        })
                    })
                }
                e.exports = {
                    ajax: r,
                    get: function(e, t, n) {
                        return r({
                            url: e,
                            type: "GET",
                            data: t,
                            success: n
                        })
                    },
                    post: function(e, t, n) {
                        return r({
                            url: e,
                            type: "POST",
                            data: t,
                            success: n
                        })
                    },
                    checkUpdateToken: c,
                    beforeSend: u,
                    getService: l
                }
            },
            3956: function(e, t, n) {
                var r, i = n(4036),
                    o = n(1079),
                    a = n(7107),
                    s = n(9246),
                    c = n(6056),
                    l = i.keys.runtime,
                    u = i.keys.data,
                    d = i.keys.userSettings,
                    f = {
                        hostEnable: {
                            get highlight() {
                                if (f.Theme) return f.Theme.highlight.enable
                            },
                            get mouseover() {
                                if (f.Theme) return f.Theme.mouseover.enable
                            },
                            get focus() {
                                if (f.Theme) return f.Theme.focus.enable
                            },
                            get region() {
                                if (f.Theme) return f.Theme.region.enable
                            },
                            get voice() {
                                return a.get(u.settings.voice.enable)
                            },
                            get shortCutIcon() {
                                return a.get(u.settings.shortCutIcon)
                            },
                            get fontScal() {
                                return 0 <= a.get(u.settings.scale)
                            },
                            get enable() {
                                return a.get(u.settings.enable)
                            }
                        },
                        init: function(e) {
                            var t = a.get(l.settings.root),
                                t = o(!0, e, t);
                            a.set(l.settings.root, t)
                        },
                        clear: function() {
                            a.remove(i.keys.data.root), a.remove(i.keys.runtime.root)
                        },
                        clearAll: function() {
                            a.remove(i.keys.base)
                        },
                        reset: function() {
                            var e = a.get(d.voice.root);
                            a.set(d.root, {}), a.set(d.voice.root, e), c.clearAll(), this.mouseten = !1
                        },
                        className: {
                            region: "ariaregion",
                            highlight: "ariahighlight",
                            focus: "ariafocus"
                        },
                        get serviceVersion() {
                            return a.get(u.serviceVersion) || 0
                        },
                        get golabFixedCss() {
                            return a.get(l.settings.golabFixedCss)
                        },
                        get golabCss() {
                            return a.get(l.settings.golabCss)
                        },
                        get focusTheme() {
                            return a.get(l.settings.focusTheme)
                        },
                        get useOldFixed() {
                            return !!window.isAriaDev || a.get(l.settings.useOldFixed)
                        },
                        get oldFixedCss() {
                            return a.get(l.settings.oldFixedCss)
                        },
                        get golabSkipScale() {
                            return a.get(l.settings.golabSkipScale)
                        },
                        get golabReplaceBg() {
                            return a.get(l.settings.golabReplaceBg)
                        },
                        get golabSkipAll() {
                            return a.get(l.settings.golabSkipAll)
                        },
                        get golabFocus() {
                            return a.get(l.settings.golabFocus)
                        },
                        get golabRegion1() {
                            return a.get(l.settings.golabRegion1)
                        },
                        get golabRegion2() {
                            return a.get(l.settings.golabRegion2)
                        },
                        get golabRegion3() {
                            return a.get(l.settings.golabRegion3)
                        },
                        get golabRegion4() {
                            return a.get(l.settings.golabRegion4)
                        },
                        get golabSkipTheme() {
                            return a.get(l.settings.golabSkipTheme)
                        },
                        get topfixed() {
                            var e = c.fixed;
                            return void 0 === (e = void 0 === e ? a.get(d.topfixed) : e) && (e = a.get(u.settings.topfixed), a.set(d.topfixed, e), c.fixed = e), e
                        },
                        set topfixed(e) {
                            a.set(d.topfixed, e), c.fixed = e
                        },
                        get minZoom() {
                            var e = a.get(l.settings.minZoom);
                            return e = 0 == e ? .5 : e
                        },
                        get maxZoom() {
                            var e = a.get(l.settings.maxZoom);
                            return e = 0 == e ? .5 : e
                        },
                        get py() {
                            return a.get(d.py)
                        },
                        set py(e) {
                            a.set(d.py, e)
                        },
                        get big5() {
                            return a.get(d.big5)
                        },
                        set big5(e) {
                            a.set(d.big5, e)
                        },
                        get canRead() {
                            return a.get(d.canRead)
                        },
                        set canRead(e) {
                            a.set(d.canRead, e)
                        },
                        get iconType() {
                            var e = a.get(u.settings.iconType);
                            return e = void 0 === e || 0 == e ? 1 : e
                        },
                        get themeRoad() {
                            return this.road + "public/theme/" + this.iconType
                        },
                        get readsrc() {
                            return a.get(d.readsrc)
                        },
                        set readsrc(e) {
                            a.set(d.readsrc, e)
                        },
                        get readtype() {
                            return void 0 !== c.readtype && c.readtype
                        },
                        set readtype(e) {
                            c.readtype = e
                        },
                        get oldFixedStatus() {
                            return void 0 !== c.oldFixedStatus && c.oldFixedStatus
                        },
                        set oldFixedStatus(e) {
                            c.oldFixedStatus = e
                        },
                        get leftfixed() {
                            return a.get(d.leftfixed)
                        },
                        set leftfixed(e) {
                            a.set(d.leftfixed, e)
                        },
                        get bigpoint() {
                            return a.get(d.bigpoint)
                        },
                        set bigpoint(e) {
                            a.set(d.bigpoint, e)
                        },
                        get reticle() {
                            return a.get(l.settings.reticle)
                        },
                        set reticle(e) {
                            a.set(l.settings.reticle, e)
                        },
                        set conf(e) {
                            "object" != typeof e && (e = JSON.parse(e)), a.set(u.conf.root, e)
                        },
                        get golbalElems() {
                            return a.get(u.golbalElems)
                        },
                        get conf() {
                            return a.get(u.conf.root)
                        },
                        get curpageConf() {
                            var t = top.location.href,
                                e = a.get(u.conf.root);
                            if (e) return 0 < (e = (e = "object" != typeof e ? JSON.parse(e) : e).filter(function(e) {
                                return e.name == t
                            })).length ? e[0] : void 0
                        },
                        confQuerySelector: function(e) {
                            if (e && (n = e.key)) {
                                switch (e.type) {
                                    case 1:
                                        for (var t = n.split(" "), n = "#" === t[0].substr(0, 1) ? t[0] : "#" + t[0], r = 1; r < t.length; r++) 0 < (o = t[r]).length && (n += ":is(", n += "#" === o.substr(0, 1) ? o : "#" + o, n += ")");
                                        return n;
                                    case 2:
                                        var i = n.split(" ");
                                        n = "." === i[0].substr(0, 1) ? i[0] : "." + i[0];
                                        for (var o, r = 1; r < i.length; r++) 0 < (o = i[r]).length && (n += ":is(", n += "." === o.substr(0, 1) ? o : "." + o, n += ")");
                                        return n
                                }
                                return n
                            }
                        },
                        get shortCutIcon() {
                            return a.get(l.settings.shortCutIcon)
                        },
                        set shortCutIcon(e) {
                            a.set(l.settings.shortCutIcon, e)
                        },
                        get scale() {
                            var e = a.get(d.scale) || c.scale;
                            return e || (e = a.get(u.settings.scale), a.set(d.scale, e), c.scale = e), e
                        },
                        set scale(e) {
                            e = parseFloat(e), a.set(d.scale, e), c.scale = e
                        },
                        get callback() {
                            return a.get(l.callback)
                        },
                        set callback(e) {
                            a.set(l.callback, e)
                        },
                        get road() {
                            return a.get(i.keys.road)
                        },
                        set road(e) {
                            a.set(i.keys.road, e)
                        },
                        get ariaPointerRead() {
                            return a.get(d.ariaPointerRead)
                        },
                        set ariaPointerRead(e) {
                            a.set(d.ariaPointerRead, e)
                        },
                        get bodyfont() {
                            var e = a.get(l.settings.bodyfont);
                            return e ? 24 < e ? 24 : e : (e = parseInt(s.getStyle(document.body)["font-size"], 10), a.set(l.settings.bodyfont, e = 24 < e ? 24 : e), e)
                        },
                        get inFrame() {
                            return window.self !== top
                        },
                        get data() {
                            return a.get(i.keys.data.root)
                        },
                        set data(e) {
                            a.set(i.keys.data.root, e)
                        },
                        get appid() {
                            return a.get(l.appid)
                        },
                        set appid(e) {
                            a.set(l.appid, e)
                        },
                        get serviceUrl() {
                            return a.get(l.serviceUrl)
                        },
                        set serviceUrl(e) {
                            a.set(l.serviceUrl, e)
                        },
                        get fileUrl() {
                            return a.get(l.fileUrl) || a.get(l.serviceUrl)
                        },
                        set fileUrl(e) {
                            a.set(l.fileUrl, e)
                        },
                        get root() {
                            return a.get(l.root)
                        },
                        get settingsRoot() {
                            return a.get(l.settings.root)
                        },
                        voice: {
                            set enable(e) {
                                a.set(d.voice.enable, e), a.set(d.voice.isActive, e)
                            },
                            get enable() {
                                var e = a.get(d.voice.enable);
                                return void 0 !== e && null != e || (e = a.get(u.settings.voice.enable), a.set(d.voice.enable, e)), e
                            },
                            get maxRate() {
                                var e = a.get(i.keys.runtime.settings.voice.maxRate);
                                return e = e < 2 ? 3 : e
                            },
                            get minRate() {
                                var e = a.get(i.keys.runtime.settings.voice.minRate);
                                return e = e <= .5 ? .5 : e
                            },
                            get rate() {
                                var e = a.get(d.voice.rate);
                                return void 0 !== e && null != e || (e = a.get(u.settings.voice.rate), a.set(d.voice.rate, e)), e
                            },
                            set rate(e) {
                                a.set(d.voice.rate, e)
                            }
                        },
                        highlight: {
                            set enable(e) {
                                a.set(l.settings.highlight.enable, e), a.set(l.settings.highlight.isActive, e)
                            },
                            get enable() {
                                return a.get(l.settings.highlight.enable)
                            },
                            get rate() {
                                return a.get(l.settings.highlight.rate)
                            },
                            set rate(e) {
                                a.set(l.settings.highlight.rate, e)
                            },
                            get mode() {
                                return a.get(l.settings.highlight.mode)
                            },
                            set mode(e) {
                                a.set(l.settings.highlight.mode, e)
                            }
                        },
                        get padding() {
                            return a.get(l.settings.padding)
                        },
                        set padding(e) {
                            a.set(l.settings.padding, e)
                        },
                        get spacing() {
                            return a.get(l.settings.spacing)
                        },
                        set spacing(e) {
                            a.set(l.settings.spacing, e)
                        },
                        get tellerMode() {
                            return a.get(l.settings.tellerMode)
                        },
                        set tellerMode(e) {
                            a.set(l.settings.tellerMode, e)
                        },
                        get mobileToolPosition() {
                            return a.get(l.settings.mobileToolPosition)
                        },
                        get mobileToolSelectedColor() {
                            return a.get(l.settings.mobileToolSelectedColor)
                        },
                        get mobileCss() {
                            return a.get(l.settings.mobileCss)
                        },
                        get useOldFixedInMobile() {
                            return a.get(l.settings.useOldFixedInMobile)
                        },
                        get status() {
                            return void 0 !== c.status && c.status
                        },
                        set status(e) {
                            c.status = e
                        },
                        get mousemode() {
                            return c.mousemode
                        },
                        set mousemode(e) {
                            c.mousemode = e
                        },
                        get mouseten() {
                            return c.mouseten
                        },
                        set mouseten(e) {
                            c.mouseten = e
                        },
                        get bigsrc() {
                            return c.bigsrc
                        },
                        set bigsrc(e) {
                            c.bigsrc = e
                        },
                        get defaultTheme() {
                            var e = c.defaultTheme || a.get(d.defaultTheme);
                            return void 0 !== e && "undefined" != e || (e = a.get(u.settings.defaultTheme), a.set(d.defaultTheme, e), c.defaultTheme = e), e
                        },
                        set defaultTheme(e) {
                            a.set(d.defaultTheme, e), c.defaultTheme = e
                        },
                        get Theme() {
                            var t = f.defaultTheme;
                            if (t) {
                                var e = a.get(i.keys.data.themes),
                                    e = (e = "object" != typeof e ? JSON.parse(e) : e).filter(function(e) {
                                        return e.name == t
                                    });
                                return r = 0 < e.length ? e[0].value : r
                            }
                        },
                        get Themes() {
                            var e = a.get(i.keys.data.themes);
                            return void 0 === e ? [] : "object" != typeof e ? JSON.parse(e) : e
                        },
                        get defaultLanguage() {
                            return a.get(l.settings.defaultLanguage)
                        },
                        set defaultLanguage(e) {
                            a.set(l.settings.defaultLanguage, e)
                        },
                        get Language() {
                            var e = this.defaultLanguage;
                            if (e) return a.get(i.keys.data.languages)[e]
                        },
                        get Languages() {
                            return a.get(i.keys.data.languages)
                        },
                        getText: function(e) {
                            var t = this.Language;
                            if (t) return t[e]
                        },
                        set closeShortIcon(e) {
                            a.set(l.settings.closeShortIcon, e)
                        },
                        get closeShortIcon() {
                            return a.get(l.settings.closeShortIcon)
                        }
                    };
                e.exports = f
            },
            8519: function(e) {
                e.exports = {
                    checkViewport: function() {
                        var e = document.head.querySelector("[name='viewport']");
                        e || (e = document.createElement("meta"), document.head.appendChild(e)), e.id = "viewport", e.setAttribute("name", "viewport"), e.content = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    },
                    checkCompatible: function() {
                        var e = document.head.querySelector("[http-equiv='X-UA-Compatible']");
                        e && (e.content = "IE=10,chrome=1")
                    }
                }
            },
            7810: function(e) {
                e.exports = {
                    globalListen: "globalListen",
                    voicePlay: "voicePlay",
                    click: "click",
                    focusIn: "focusIn",
                    blur: "blur",
                    globalStart: "globalStart",
                    globalEnd: "globalEnd",
                    startService: "startService",
                    endService: "endService",
                    SizzleKeyDown: "SizzleKeyDown",
                    TouchWakeup: "TouchWakeup"
                }
            },
            7437: function(e, t, n) {
                var o = n(9246),
                    n = n(7810),
                    a = [];
                e.exports = {
                    registerEvent: function(e, t, n) {
                        "object" == typeof e && a.push(e), a.push({
                            name: e,
                            event: t,
                            priority: n
                        })
                    },
                    execEvent: function(t, n) {
                        if (t) {
                            for (var r = !1, i = 0; i < 10; i++) {
                                var e = a.filter(function(e) {
                                    return e.name == t && e.priority == i
                                });
                                o.each(e, function(e, t) {
                                    t && t.event && "function" == typeof t.event && (r = "array" == o.type(n) ? r || t.event.apply(this, n) : r || t.event.call(this, n))
                                })
                            }
                            return r
                        }
                    },
                    eventNames: n,
                    removeRegisterEvent: function(e) {
                        for (var t = a.length; t < 0; t--) a[t].name == e && a.splice(t, 1)
                    }
                }
            },
            4824: function(e, t, n) {
                var f, r, g, p = n(5285),
                    h = n(1227),
                    v = ["aria-message", "aria-error", "aria-success"],
                    m = n(8870),
                    b = n(5367),
                    i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                    y = !0,
                    w = 2e3,
                    x = !1;

                function o(e) {
                    if (void 0 !== e) {
                        y || (w = 100), g = "";
                        var t = h.checkDialogShow(),
                            n = [],
                            r = new p(document.activeElement);
                        if (t && 0 < t.length && !r.aria.dialog) return document.activeElement.blur(), t.aria.tabindex = 0, void t.focus();
                        for (var i = [], o = 0; o < e.length; o++) {
                            var a, s = e[o],
                                c = s.type,
                                l = s.target;
                            switch (c) {
                                case "childList":
                                    if (s.addedNodes && 0 < s.addedNodes.length)
                                        for (var u = 0; u < s.addedNodes.length; u++) {
                                            var d = s.addedNodes[u];
                                            1 == d.nodeType && [].indexOf.call(["SCRIPT", "STYLE", "I"], d.nodeName) < 0 && i.push(s)
                                        }
                                    break;
                                case "attributes":
                                    -1 < [].indexOf.call(v, s.attributeName) && ((a = new p(l).attr(s.attributeName)) && [].indexOf.call(n, l) < 0 && (g += f[s.attributeName] + a))
                            }
                        }
                        0 < i.length && !x && (x = !0, setTimeout(function() {
                            m.starAll(), x = !1
                        }, w)), 0 < g.length && b.play(g)
                    }
                }
                e.exports = {
                    start: function(e) {
                        !r && i && (r = new i(o)).observe(e.body, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                            attributeOldValue: !0
                        })
                    },
                    end: function() {
                        r && r.disconnect()
                    },
                    MutationObserver: i
                }
            },
            6974: function(e, t, n) {
                var s, c = n(5285),
                    l = n(3956),
                    u = n(9246);
                e.exports = {
                    breakEvents: function(e, t) {
                        try {
                            if ("true" == e.ariaAttr("skipall") || "body" == e.aria.role || "iframe" == e.aria.role) return !0
                        } catch (e) {
                            return !0
                        }
                        return !1
                    },
                    breakEventsFirst: function(e) {
                        return 1 != e.target.nodeType || 9 == e.target.nodeType && 2 == l.readtype || ("HTML" == e.target.nodeName || "BODY" == e.target.nodeName)
                    },
                    viewDocument: function(e) {
                        try {
                            return e.target.ownerDocument
                        } catch (e) {}
                    },
                    realPlayElem: function(e) {
                        if (e.aria.atomic) return e.aria.atomicElem;
                        if (e.ariaAttr("label") || "a" == e.aria.role) return e;
                        if (0 != e.length) {
                            if (-1 < [].indexOf.call(u.HtmlElemRoles.foucsable0, e.aria.role)) return e;
                            var t = e.parent();
                            if ("a" == t.aria.role) return t.aria.atomic || (e.attr("title") && !t.attr("title") && t.attr("title", e.attr("title")), e.attr("alt") && !t.attr("alt") && t.attr("alt", e.attr("alt")), e.attr("aria-label") && !t.attr("aria-label") && t.attr("aria-label", e.attr("aria-label"))), t;
                            if (e.find("*").length < 2) return e;
                            var n = e.childNodes();
                            if (0 == n.length) return e;
                            if (1 == l.readtype)
                                for (var r = 0; r < n.length; r++)
                                    if (3 == n[r].nodeType) return e;
                            if (1 == n.length && "A" == n[0].nodeName) return new c(n[0]);
                            if (3 == n[0].nodeType) return new c(n[0]);
                            return -1 < [].indexOf.call(["ul", "li"], e.aria.nodeName) && -1 < [].indexOf.call(["A", "H1", "H2", "H3", "H4", "H5"], n[0].nodeName) ? new c(n[0]) : -1 < [].indexOf.call(["td", "li", "dd", "label", "span", "a", "p", "img", "h1", "h2", "h3", "h4", "h5", "h6"], e.aria.role) ? e : void 0
                        }
                    },
                    CenterScale: function(e, t) {
                        s = s || l.Language, new c(".ariaBigCenterScale").remove(), t = t || 2;
                        var n = document.createElement("div");
                        n.classList.add("ariaBigCenterScale"), n.setAttribute("role", "dialog"), n.setAttribute("tabindex", 0), n.setAttribute("aria-label", e.aria.lastText + "," + s.keyESCExist);
                        var r = document.createElement("div");
                        r.classList.add("ariablackground"), n.appendChild(r);
                        var i = e.firstNode.cloneNode(!0);
                        i.classList.add("ariaCloneDom"), i.removeAttribute("aria-isCenterScale"), n.appendChild(i), u.getContainerDom().appendChild(n);
                        var o = new c(".ariaCloneDom"),
                            a = o.width();
                        return 0 == a && (a = e.width()), 0 == (r = o.height()) && (r = e.height()), e = isNaN(a) || 0 == a ? 2 : window.innerWidth / t / a, t = isNaN(r) || 0 == r ? 2 : window.innerHeight / t / r, e = t < e ? t : e, "IMG" != i.nodeName ? (i.style.zoom = e, u.isFF() && (i.style.transform = "scale(" + e + ")")) : 400 < a * e ? o.css({
                            width: a * e,
                            height: r * e
                        }) : o.css({
                            width: 400,
                            height: "auto"
                        }), setTimeout(function() {
                            n.focus()
                        }, 150), !0
                    },
                    removeCenterScale: function() {
                        new c(".ariaBigCenterScale").remove()
                    },
                    consolLog: function(e, t) {}
                }
            },
            9031: function(e, t, n) {
                var l, u = n(5367),
                    d = n(5285),
                    f = n(1284),
                    g = n(2220),
                    p = n(641),
                    h = n(2606);
                e.exports = {
                    start: function() {
                        if (!h.isMobile()) {
                            l = l || f.Language;
                            var e, t = "",
                                n = f.curpageConf;
                            if (n && n.name && n.value && null != n.value.pageDesc && ((e = l.ariaCurrentContent) && (t = e), t += n.value.pageDesc), f.readsrc) {
                                t = l.firstRead_welcome + " " + document.title + " ，" + t, regions = g.getAll();
                                for (var r = !1, i = 0, o = 1; o < 7; o++) i += a = regions[o] ? regions[o].length : 0, 0 < a && (r || (t += l.firstRead_first), r = !0, t += a + l.firstRead_unit + l["regiontype" + o] + ",");
                                0 < i && (t += l.firstRead_sum.replace("{0}", i) + ",");
                                for (var a, o = 1; o < 7; o++) 0 < (a = regions[o] ? regions[o].length : 0) && (t += (1 < a ? l.firstRead_loopvisit : l.firstRead_visit).replace("{0}", o), t += l["regiontype" + o] + ",");
                                t += l.firstRead_remark, t += l.ariaacchelpbook
                            } else var s = (s = f.defaultLanguage) || p.getLanguageName(),
                                c = p.welcomeContent[s],
                                t = (t = (t = c ? c.replace("{0}", document.title + t) : t) || new d('[name="description"]', document.head).attr("content")) || document.title;
                            s = new d("#ariaTipText");
                            0 == s.length && (document.body.focus(), (c = document.createElement("a")).setAttribute("href", "javascript:void(0);"), c.setAttribute("role", "pagedescription"), c.id = "ariaTipText", document.body.insertBefore(c, document.body.firstElementChild), s = new d("#ariaTipText")), s.ariaAttr("label", t), u.play(t)
                        }
                    }
                }
            },
            6242: function(e, t, n) {
                var r = n(642),
                    i = n(5285),
                    o = n(5367),
                    a = n(9246),
                    s = n(3956),
                    c = n(8204),
                    l = n(6974),
                    l = n(6974);

                function u(e) {
                    var t;
                    l.consolLog("焦点开始阅读", !0), 2 != s.readtype && (new i(e.target).aria.skipall || function(e) {
                        a.stopBubble(), a.stopDefault();
                        e = new i(e.target);
                        if (e.aria.isCenterScale) {
                            if (!e.ariaAttr("fromClone")) return l.CenterScale(e, 2), e.ariaAttr("fromClone", !0), !0;
                            e.removeAttr("fromClone")
                        }
                    }(e) || (t = e.target, t = new i(t), r.setClass(t, l.viewDocument(e)), 2 != s.readtype && (c.foucseEvent(e), l.breakEvents(t, e) || (t.aria.dialog || (globalActiveElem = t), t.ariaAttr("label") ? o.play(t.aria.lastText) : (t = l.realPlayElem(t)) && window.playElem != t && (window.playElem = t, o.play(t.aria.lastText)), l.consolLog("焦点结束", !1)))))
                }

                function d(e) {}
                e.exports = {
                    start: function(e) {
                        e = e || document, new i(e).on("focusin", "*:not(iframe)", u), new i(e.body).on("blur", "*", d)
                    },
                    end: function(e) {
                        e = e || document, new i(e).off("focusin", "*:not(iframe)", u), new i(e.body).off("blur", "*", d)
                    }
                }
            },
            646: function(e, t, n) {
                var i = n(5285),
                    o = n(3956),
                    a = n(8204),
                    s = n(1358);
                n(6148);
                var c = n(6568),
                    l = n(5233),
                    u = n(6974),
                    d = n(9246),
                    f = n(1762),
                    g = n(5367);

                function r(t) {
                    if (!new i(t.target).aria.skipall && (window.canRead = !0, (u.viewDocument(t) == document || !c.keydown(t)) && 2 != o.readtype && o.status))
                        if (function(e) {
                                var t = new i(".ariaBigCenterScale");
                                if (0 != t.length && 27 == (e.keyCode || e.which || e.charCode)) {
                                    t.remove();
                                    t = new i("[aria-fromClone]");
                                    return g.stop(), t.focus(), t.removeAttr("aria-fromClone"), !0
                                }
                            }(t)) setTimeout(function() {
                            t.keyCode = 40
                        }, 350);
                        else if (!f.showImg(t) && !f.showQrcode(t)) {
                        if (s.doEventTab(t)) return !1;
                        if (a.doEventEnter(t)) return d.stopBubble(), void d.stopDefault();
                        if (a.doEventESC(t)) return d.stopBubble(), void d.stopDefault();
                        if (!l.doEvent(t)) {
                            var n = t.view.document,
                                r = t.keyCode || t.which || t.charCode,
                                e = new i(t.target);
                            if (!u.breakEvents(e, t)) {
                                if (9 == r && d.triggerEvent(t.target, "mouseout"), 13 == r) {
                                    if ("a" == e.attr("role")) return void(1 == e.find("a").length ? e.find("a") : e).click();
                                    if (1 == e.find(" [type =button], [role =button]").length) return void e.find("[type=button],[role=button]").click()
                                }
                                setTimeout(function() {
                                    var e = new i(n.activeElement);
                                    0 != e.length && ("true" == e.ariaAttr("skipall") || 0 < e.closest('[aria-skipall="true"]').length || (9 != r || e.aria.hidden && (t.shiftKey ? (e.aria.preFocus && e.aria.preFocus.focus(), e.aria.preFocus) : (e.aria.nextFocus && e.aria.nextFocus.focus(), e.aria.nextFocus))))
                                }, 5), window.preAcitveElem = n.activeElement, 13 == r && (d.stopBubble(), d.stopDefault(), new i(t.target).click()), 27 == r && d.triggerEvent(document.body, "mouseover")
                            }
                        }
                    }
                }
                e.exports = {
                    start: function(e) {
                        e = e || document, new i(e).on("keydown", "*", r)
                    },
                    end: function(e) {
                        e = e || document, new i(e).off("keydown", "*", r)
                    }
                }
            },
            5233: function(e, t, n) {
                var s = n(5285),
                    c = n(1227),
                    l = n(9246);
                n(6974);

                function u(e) {
                    var t = null;
                    return 1 == (t = null == (t = null == (t = "true" == e.ariaAttr("aria-popup") ? e.find("a,select,input,[role]") : t) || 0 == t.length ? e.closest('[aria-popup="true"]').find("a,select,input,[role]") : t) || 0 == t.length ? new s(e.parent().child()) : t).length && (isChild = !0, t = new s(e.parent().parent().child()), e = new s(e.parent())), t
                }
                e.exports = {
                    doEvent: function(e) {
                        var t = new s(e.target);
                        if ("SELECT" != t.firstNode.nodeName) {
                            var n = e.ctrlKey,
                                r = e.shfitKey,
                                i = e.altKey;
                            if (!(n || r || i)) {
                                var o, a, i = c.eventKeyCode(e);
                                switch (i) {
                                    case 40:
                                    case 39:
                                        return l.stopBubble(e), l.stopDefault(e),
                                            function(e) {
                                                var t = u(e),
                                                    e = e.index(t);
                                                e == t.length - 1 ? e = 0 : e += 1;
                                                e = t.nodeList[e];
                                                e.setAttribute("tabindex", 0), e.focus(), l.triggerEvent(e, "mouseover")
                                            }(t), !0;
                                    case 38:
                                    case 37:
                                        return l.stopBubble(e), l.stopDefault(e), 0 != (a = u(o = t)).length && ((o = o.index(a)) <= 0 ? o = a.length - 1 : --o, (o = a.nodeList[o]).setAttribute("tabindex", 0), o.focus(), l.triggerEvent(o, "mouseover")), !0
                                }
                            }
                        }
                    }
                }
            },
            1358: function(e, t, n) {
                var r = n(5285),
                    i = n(9246),
                    o = n(1227),
                    a = n(7437),
                    n = n(7810);

                function s(e) {
                    var t = o.eventKeyCode(e),
                        n = !0;
                    (n = "dialogclose" == new r(e.target).aria.action && 13 == t ? !1 : n) && !o.checkKeyCode(e, o.keyCodeSettings.dialogClose) || (t = o.checkDialogShow()) && (0 < t.closest(".aria-container").length ? new r(".icon-close").click() : 0 < (e = n ? t.find("[aria-action='dialogclose']") : new r(e.target)).length ? e.click() : (t.css("display", "none"), t.attr("tabindex", -1)))
                }
                a.registerEvent(n.globalListen, s, 0), e.exports = {
                    doEventTab: function(e) {
                        if (!o.checkKeyCode(e, 9)) return !1;
                        var t = !1,
                            n = o.checkDialogShow();
                        return !!n && ((e = new r(e.target || e.currentTarget)).aria.isDialog || (t = !0), (t = e.aria.dialog.firstNode != n.firstNode || t) ? (i.stopBubble(), i.stopDefault(), !0) : void 0)
                    },
                    KeyEsc: s
                }
            },
            8204: function(e, t, n) {
                var i = n(5285),
                    o = n(9246),
                    a = n(8870),
                    s = n(6974);
                e.exports = {
                    doEventEnter: function(e) {
                        var t = e.keyCode || e.which || e.charCode,
                            n = e.ctrlKey;
                        if (n && 40 == t) {
                            n = new i(e.target);
                            if ("1" == n.aria.enterownsmethod || 0 != (n = n.closest("[aria-enterownsmethod]")).length || n.firstNode == e.target) {
                                t = n.aria.owns;
                                if (t) {
                                    var r, n = new i(t, s.viewDocument(e));
                                    return 0 < n.length && (n.ariaAttr("owns") || a.start(), t = (r = 0) == r ? -1 : 0, (e = n).attr("oldtabindex") || e.attr("oldtabindex", e.attr("tabindex") || "none"), e.attr("tabindex", r), t = e.find("[tabindex='" + t + "'],a,input,select"), o.each(t, function(e, t) {
                                        t.getAttribute("oldtabindex") || t.setAttribute("oldtabindex", t.getAttribute("tabindex") || "none"), t.setAttribute("tabindex", r)
                                    }), n.show(), (n.ariaAttr("label") ? n : (t = s.realPlayElem(n)) && 0 < t.length ? t : 0 < (t = n.find("a,input,select,[role='a']")).length || 0 < (t = n.find("li")).length ? t[0] : n).focus()), !0
                                }
                            }
                        }
                    },
                    doEventESC: function(e) {
                        if (27 == (e.keyCode || e.which || e.charCode)) {
                            var t = new i(e.target),
                                t = "true" == t.ariaAttr("popup") ? t : t.closest("[aria-popup]");
                            if (0 < t.length && t.aria.owns) {
                                e = new i(t.aria.owns, s.viewDocument(e));
                                return e.focus(), void(e.aria.eschide && t.hide())
                            }
                            return !0
                        }
                    },
                    foucseEvent: function(e) {},
                    ResetRegTabindex: function(e) {
                        var n = e.attr("oldtabindex");
                        n && ("none" == n ? e.removeAttr("tabindex") : e.attr("tabindex", n)), e = e.find("a,input,select"), o.each(e, function(e, t) {
                            (n = t.getAttribute("oldtabindex")) && ("none" == n ? new i(t).removeAttr("tabindex") : t.setAttribute("tabindex", n))
                        })
                    }
                }
            },
            6568: function(e, t, n) {
                var r = n(3956),
                    i = n(7437),
                    o = n(7810),
                    a = (n(5285), n(1227)),
                    s = n(5674),
                    c = n(9378),
                    l = n(7437);

                function u(e) {
                    var t;
                    if (window.canRead = !0, (t = e).keyCode || t.which || t.charCode, c.checkKeyCode(t, a.keyCodeSettings.wakeup) ? (r.status ? l.execEvent(o.globalEnd) : l.execEvent(o.globalStart), 0) : r.status || !c.toWakeUpRead(t) || (r.voice.enable = !1, r.readsrc = !0, l.execEvent(o.globalStart), 0)) return i.execEvent(o.globalListen, e)
                }
                e.exports = {
                    start: function(e) {
                        s.check() && (e = e || document, document.addEventListener("keydown", u))
                    },
                    end: function() {
                        document.removeEventListener("keydown", u)
                    },
                    keydown: u
                }
            },
            6148: function(e, t, n) {
                var r = n(7437),
                    i = n(7810),
                    o = n(1227),
                    a = n(5285),
                    s = n(642),
                    c = n(6974);

                function l(e) {
                    var t;
                    o.checkKeyCode(e, o.keyCodeSettings.changeRegion.next) && (t = new a(e.target, c.viewDocument(e)), 0 != (t = new a(t.aria.regionN)).length && (s.setClass(t, c.viewDocument(e)), t.focus()))
                }

                function u(e) {
                    var t;
                    o.checkKeyCode(e, o.keyCodeSettings.changeRegion.pre) && (t = new a(e.target, c.viewDocument(e)), 0 != (t = new a(t.aria.regionP)).length && (s.setClass(t, c.viewDocument(e)), t.focus()))
                }
                r.registerEvent(i.globalListen, l, 0), r.registerEvent(i.globalListen, u, 0), e.exports = {
                    goNext: l,
                    goPre: u
                }
            },
            7343: function(e, t, n) {
                var r, i = n(5285),
                    o = n(642),
                    a = (n(5367), n(4403)),
                    s = n(3956),
                    c = n(6974),
                    c = n(6974);
                n(9246);

                function l(e) {
                    if (2 != s.readtype) {
                        var t = new i(e.target);
                        if (!(t.aria.skipall || ("dialogclose" == t.attr("aria-action") && a.dialogClose(), window.canRead = !0, c.breakEventsFirst(e) || 2 == s.readtype || e.target == document.body || void 0 !== r && e.target == r || 1 != e.target.nodeType))) {
                            var n = new i(e.target);
                            if (!c.breakEvents(n, e)) {
                                t = c.realPlayElem(n);
                                if (t && 0 < t.length) {
                                    3 == (window.playElem = t).firstNode.nodeType && (t = t.parent());
                                    try {
                                        o.setClass(n, c.viewDocument(e))
                                    } catch (e) {}
                                }
                                r = e.target
                            }
                        }
                    }
                }
                e.exports = {
                    start: function(e) {
                        e = e || document, new i(e).on("click", "*", l)
                    },
                    end: function(e) {
                        e = e || document, new i(e).off("click", "*", l)
                    }
                }
            },
            4403: function(e, t, n) {
                var r = n(5285),
                    i = n(9246);
                e.exports = {
                    dialogClose: function() {
                        var e = i.arrToSizzle(i.HtmlElemRoles.dialog);
                        0 < (e = new r(this).closest(e)).length && (e.aria.tabindex = -1, e.hide(), globalActiveElem && globalActiveElem.focus())
                    }
                }
            },
            8004: function(e, t, n) {
                var r = n(5285),
                    i = n(5367),
                    o = n(3956),
                    a = n(6974),
                    s = n(6455),
                    c = (new Date).getTime(),
                    l = null,
                    u = null;

                function d(e) {
                    u && (clearTimeout(u), u = null)
                }
                var f, g = {
                    screenX: 0,
                    screenY: 0
                };

                function p(t) {
                    if (a.consolLog("mouseover开始", !0), o.mouseten && s.listenMouseTen(t), 2 != o.readtype && !new r(t.target).aria.skipall && !(c + 20 > (new Date).getTime() || (c = (new Date).getTime(), a.breakEventsFirst(t)))) {
                        var n = new r(t.target);
                        if (0 != n.length) {
                            if ("BODY" == t.target.nodeName) return i.play(document.body.title), void a.consolLog("mouseover结束", !0);
                            a.breakEvents(n, t) || (u = setTimeout(function() {
                                if (a.consolLog("mouseover延迟开始", !0), g.screenX == t.screenX && g.screenY == t.screenY) {
                                    if (f && t == f) return;
                                    var e = a.realPlayElem(n);
                                    if (e && 0 < e.length) {
                                        if (l && l.firstNode == e.firstNode) return;
                                        l = e, f = t, i.play(e.aria.lastText)
                                    }
                                }
                                a.consolLog("mouseover延迟结束", !1)
                            }, 100), g.screenX = t.screenX, g.screenY = t.screenY, a.consolLog("mouseover结束", !1))
                        }
                    }
                }
                e.exports = {
                    start: function(e) {
                        e = e || document, new r(e).on("mousemove", "*:not([aria-hidden='true'])", p), new r(e).on("mouseout", "*:not([aria-hidden='true'])", d)
                    },
                    end: function(e) {
                        e = e || document, new r(e).off("mousemove", "*:not([aria-hidden='true'])", p), new r(e).off("mouseout", "*:not([aria-hidden='true'])", d)
                    }
                }
            },
            3827: function(e, t, n) {
                var r = n(5285),
                    i = n(5367),
                    o = n(3956),
                    a = n(6974);
                var s = !0;

                function c() {
                    s = !1
                }
                var l = {
                    x: 0,
                    y: 0
                };

                function u(e) {
                    var t, n;
                    2 == o.readtype && (n = new r(e.target), a.breakEventsFirst(e) || a.breakEvents(n, e) || (t = e, n = n, 2 == o.readtype && (0 == n.length || "true" == n.ariaAttr("skipall") || 0 < n.closest('[aria-skipall="true"]').length || (l = {
                        x: t.clientX,
                        y: t.clientY
                    }, s = !0, setTimeout(function() {
                        t.clientX == l.x && t.clientY == l.y && s && (canNextRead = !1, mouseMove = !0, i.play(t.target), setTimeout(function() {
                            canNextRead = !0
                        }, 2e4))
                    }, 4e3)))))
                }
                e.exports = {
                    start: function(e) {
                        e = e || document, new r(e).on("mousemove", u), e == document && document.body.addEventListener("mouseout", c)
                    },
                    end: function(e) {
                        e = e || document, new r(e).off("mousemove", u), e == document && document.body.removeEventListener("mouseout", c)
                    }
                }
            },
            344: function(e, t, n) {
                var r = n(5285),
                    i = n(3956),
                    o = n(5367);

                function a(e) {
                    2 != i.readtype && (e = new r(e.target), o.play(e.aria.lastText))
                }
                e.exports = {
                    start: function(e) {
                        e = e || document, new r(e).on("change", "*", a)
                    },
                    end: function(e) {
                        e = e || document, new r(e).off("change", "*", a)
                    }
                }
            },
            5430: function(e, t, n) {
                var r = n(2668);

                function i() {
                    r.setBodyTran()
                }
                e.exports = {
                    start: function() {
                        window.addEventListener("resize", i)
                    },
                    end: function() {
                        window.removeEventListener("resize", i)
                    }
                }
            },
            1968: function(e, t, n) {
                var r, c = n(5285),
                    i = n(9246),
                    o = n(8870),
                    a = n(4824);
                if (!i.isIE()) try {
                    function s(e) {
                        var t = window.history[e],
                            n = new Event(e);
                        return function() {
                            var e = t.apply(this, arguments);
                            return n.arguments = arguments, window.dispatchEvent(n), e
                        }
                    }
                    history.pushState = s("pushState"), history.replaceState = s("replaceState")
                } catch (e) {}
                var l = location.href;
                var u = 350,
                    d = 0,
                    f = 0;

                function g(e) {
                    [].indexOf.call(["DIV", "TABLE", "LI"], e.target.nodeName) < 0 || (f || (f = (new Date).getTime() + u, setTimeout(function() {
                        0 < f && o.starAll(e)
                    }, u)), f + u < (new Date).getTime() && 0 < d ? setTimeout(function() {
                        0 < f && (f = d = 0, o.starAll(e))
                    }, 100) : d++)
                }

                function p(e, t, n, r, i) {
                    for (var o = r.getElementsByTagName("iframe"), a = 0; a < o.length; a++) {
                        var s = o[a].contentWindow;
                        try {
                            s.document.body && (i ? (new c(s.document.body).on(e, t, n), new c(s.document.body).attr("ariaevent", "true")) : (new c(s.document.body).off(e, t, n), new c(s.document.body).removeAttr("ariaevent")), p(e, t, n, s.document, i))
                        } catch (e) {}
                    }
                }
                e.exports = {
                    start: function() {
                        var e;
                        i.addEventListener(window, "pushState", o.starAll), i.addEventListener(window, "replaceState", o.starAll), void 0 === a.MutationObserver && new c(document.body).on("DOMNodeInserted", "*:not(i):not(#text)", g), "onhashchange" in window && (void 0 === document.documentMode || 8 === document.documentMode) ? document.addEventListener("hashchange", o.starAll) : e = setInterval(function() {
                            l == location.href || (l = location.href, 0) || (o.starAll(), clearInterval(e), e = null)
                        }, 150)
                    },
                    end: function() {
                        void 0 === a.MutationObserver && new c(document.body).off("DOMNodeInserted", "*:not(i):not(#text)", g), window.removeEventListener("pushState", o.starAll), window.removeEventListener("replaceState", o.starAll), "onhashchange" in window && (void 0 === document.documentMode || 8 === document.documentMode) && (window.onhashchange = null), clearInterval(r), r = null
                    },
                    removelistenIncludeIframe: function(e, t, n) {
                        p(e, t, n, document, !1), new c(document.body).off(e, t, n)
                    },
                    listenIncludeIframe: function(e, t, n) {
                        p(e, t, n, document, !0), new c(document.body).on(e, t, n)
                    }
                }
            },
            1762: function(e, t, n) {
                var s, o, c = n(5285),
                    l = (n(9246), n(9378)),
                    u = n(5769),
                    d = n(6974);
                e.exports = {
                    showImg: function(e) {
                        if (l.checkKeyCode(e, l.keyCodeSettings.showImg)) {
                            d.removeCenterScale();
                            var n = new c("img").nodeList;
                            if (u.getAll(document, function(e) {
                                    var t = new c("img").nodeList;
                                    0 < t.length && n.concat(t)
                                }), 0 == n.length) return !0;
                            for (var t = [], r = 0; r < n.length; r++) {
                                var i = n[r],
                                    o = new c(i),
                                    a = o.width(),
                                    o = o.height();
                                200 < a && 100 < o && i.src && t.push(i)
                            }
                            if (0 == t.length) return !0;
                            r = 0;
                            return s && (r = [].indexOf.call(t, s) + 1) > t.length - 1 && (r = 0), s = t[r], d.CenterScale(new c(t[r]), 1.2), !0
                        }
                    },
                    showQrcode: function(e) {
                        if (l.checkKeyCode(e, l.keyCodeSettings.showQrcode)) {
                            d.removeCenterScale();
                            var n = new c("[role='qrcode']").nodeList;
                            if (u.getAll(document, function(e) {
                                    var t = new c("[role='qrcode']").nodeList;
                                    0 < t.length && n.concat(t)
                                }), 0 == n.length) return !0;
                            for (var t = [], r = 0; r < n.length; r++) {
                                var i = n[r];
                                i.src && t.push(i)
                            }
                            if (0 == t.length) return !0;
                            r = 0;
                            return o && (r = [].indexOf.call(t, o) + 1) > t.length - 1 && (r = 0), o = t[r], d.CenterScale(new c(t[r]), 2), !0
                        }
                    }
                }
            },
            2409: function(e, t, n) {
                var o = n(3956),
                    a = n(5285),
                    s = n(5154);
                e.exports = {
                    innerBigSrc: function(e) {
                        if (o.bigsrc)
                            if (o.big5 && (e = s.toBig5(e)), o.py && "undefined" != typeof ariaPY) {
                                new a("#accscreen #acctip").html("");
                                for (var t = 0; t < e.length; t++) {
                                    for (var n = ariaPY.parse_word(e[t]), r = '<div class="pinyin ariaskiptheme">', i = 0; i < n.length; i++) !1 !== n[i] && (r += '<b class="ariaskiptheme"><i class="ariaskiptheme">' + n[i][1] + '</i><i class="ariaskiptheme">' + n[i][0] + "</i></b>");
                                    r += "</div>", new a("#accscreen #acctip").append(r)
                                }
                            } else new a("#accscreen #acctip").html(e)
                    }
                }
            },
            686: function(e) {
                e.exports = function() {
                    try {
                        var t = new Audio;
                        return t.id = "ariadudio", t
                    } catch (e) {
                        t = document.createElement("audio");
                        return t.autoplay = !0, t.controls = "controls", t.id = "ariadudio", document.body.appendChild(t), document.getElementById("ariadudio")
                    }
                }
            },
            5367: function(e, t, n) {
                var r = n(3956),
                    i = n(86);
                e.exports = {
                    play: function(e) {
                        1 == r.readtype || "string" == typeof e ? i.startSingle(e) : i.startContinu(e)
                    },
                    stop: i.stop,
                    start: i.start,
                    end: i.end
                }
            },
            550: function(e) {
                var t, n;

                function r(e) {
                    window.aria || (window.aria = {}), n.pause()
                }
                t = void 0 !== document.hidden ? "visibilitychange" : void 0 !== document.mozHidden ? "mozvisibilitychange" : void 0 !== document.msHidden ? "msvisibilitychange" : void 0 !== document.webkitHidden ? "webkitvisibilitychange" : "visibilitychange", e.exports = {
                    start: function(e) {
                        n = e, document.addEventListener(t, r)
                    },
                    end: function(e) {
                        n = e, document.removeEventListener(t, r)
                    }
                }
            },
            86: function(e, t, n) {
                var r = n(3956),
                    i = n(1198),
                    o = n(4036),
                    a = n(686),
                    s = n(550),
                    c = n(9246),
                    l = n(9575),
                    u = n(2409),
                    d = n(5285);
                n(6974), (new Date).getTime();

                function f(e) {}

                function g(e) {
                    0
                }

                function p(e) {
                    S()
                }

                function h(e) {}

                function v() {
                    (w = w || a()).removeEventListener("abort", f), w.removeEventListener("canplay", g), w.removeEventListener("durationchange", h), w.removeEventListener("ended", S), w.removeEventListener("error", p), w.removeEventListener("timeupdate", h), s.end(w)
                }

                function m(t, n) {
                    if (w = w || a(), r.status && r.hostEnable.voice && r.voice.enable && t) {
                        try {
                            if (0 == c.replaceSpChar(t).length) return
                        } catch (e) {}
                        80 < t.length && (t = t.substr(0, 80)), c.IsIos() && c.DevLog("检查为IOS系统"), 4 <= r.serviceVersion && !c.IsIos() && !c.isIE() ? (c.DevLog("这是发送mp3请求"), i.beforeSend().then(function(e) {
                            b(o.api.mp3 + "?text=" + l.Base64.encode(t) + "&appid=" + e.appid + "&Timestamp=" + e.timestamp)
                        })) : (c.DevLog("这是发送Create请求"), i.post(o.api.ttsurl, {
                            text: l.Base64.encode(t),
                            error: function() {
                                n()
                            }
                        }).then(function(e) {
                            e ? b(0 < e.indexOf(".mp3") ? r.fileUrl + e : e) : n()
                        }))
                    }
                }

                function b(e) {
                    w.pause(), w.loop = !1, w.playbackRate = r.voice.rate || 1, w.defaultPlaybackRate = r.voice.rate, w.src = e, w.load(), w.play(), c.isIE() && c.DevLog("手工开启播放")
                }

                function y() {
                    w && !w.paused && w.pause()
                }
                var w, x = [],
                    T = 0,
                    C = null,
                    k = !1;
                window.ariaPlayElem = null;
                var A = "";

                function E(e) {
                    w = w || a(), e && (e.jTool && (e = new d(e).aria.lastText), A == e && 2 != r.readtype || (k && (T = 0, x = [], w.removeEventListener("ended", S)), y(), A = e, C && (clearInterval(C), C = null), x = c.splitBylength(e, 40), k = !0, T = 0, r.voice.enable ? (S(), w.addEventListener("ended", S)) : function e() {
                        if (T >= x.length) return;
                        try {
                            u.innerBigSrc(x[T])
                        } catch (e) {}
                        var t = parseInt(c.getLength(x[T]) / 16);
                        C = setTimeout(function() {
                            e(), T += 1
                        }, 1e3 * t)
                    }()))
                }

                function S(e) {
                    if (x.length > T) {
                        if (0 == c.replaceSpChar(x[T]).length) return T += 1, void S();
                        setTimeout(function() {
                            m(x[T], S);
                            try {
                                u.innerBigSrc(x[T])
                            } catch (e) {}
                            T += 1
                        }, 250)
                    } else k = !1, w.removeEventListener("ended", S), 2 == r.readtype ? N() : (T = 0, x = [], A = "", window.ariaPlayElem && R(window.ariaPlayElem), window.ariaPlayElem = null)
                }

                function O(e) {
                    if (e) {
                        var t = (e = !e.jTool ? new d(e) : e).firstNode;
                        if (0 != e.length) {
                            if (3 == t.nodeType) return e;
                            if (e.aria.atomic) return e.aria.atomicElem;
                            var n = ["STYLE", "SCRIPT", "INPUT", "SELECT", "OBJECT", "A", "COMBOBOX", "SELECT-ONE", "SELECT-MULTIPLE", "TEXTAREA", "BUTTON", "CHECKBOX"];
                            if (-1 < [].indexOf.call(n, t.nodeName)) return e;
                            t = e.childNodes();
                            if (0 == t.length) return e;
                            return -1 < [].indexOf.call(["ul", "li", "td", "label", "span", "dd", "dt"], e.aria.nodeName) && -1 < [].indexOf.call(n, t[0].nodeName) ? new d(t[0]) : O(t[0])
                        }
                    }
                }

                function N() {
                    if (window.ariaPlayElem) {
                        var e = window.ariaPlayElem;
                        if (!e.aria.skipall) {
                            R(e);
                            var t = e.next();
                            if (!t) return R(window.ariaPlayElem), void(window.ariaPlayElem = null);
                            if ("IFRAME" == t.nodeName) try {
                                var n = t.contentDocument;
                                if (null == n || !n.body) return window.ariaPlayElem = t.next(), void N();
                                t = new d(n.body.firstChild)
                            } catch (e) {
                                return window.ariaPlayElem = t.next(), void N()
                            }
                            if (0 != (t = 0 == (t = new d(t)).length ? e.parent().next() : t).length) {
                                t = new d(O(t));
                                window.ariaPlayElem = t;
                                if (-1 < [].indexOf.call(["STYLE", "SCRIPT"], t.firstNode.nodeName)) N();
                                else if (t.isHidden()) N();
                                else try {
                                    !t.aria.lastText || 0 == c.replaceSpChar(t.aria.lastText).length ? N() : (R(null, t), E(t.aria.lastText))
                                } catch (e) {}
                            }
                        }
                    }
                }

                function L(e) {
                    var t;
                    null != e && 0 != (e = !e.jTool ? new d(e) : e).length && ((e = 3 == e.firstNode.nodeType ? e.parent() : e).removeClass("ariafocus"), "none" == (t = e.ariaAttr("oldTabindex")) ? e.removeAttr("tabindex") : e.attr("tabindex", t))
                }

                function R(e, t) {
                    var n;
                    t && 0 != (t = !t.jTool ? new d(t) : t).length ? (t = 3 == t.firstNode.nodeType ? t.parent() : t).aria.skipall || (n = t.attr("tabindex") || "none", t.ariaAttr("oldTabindex", n), t.attr("tabindex", 0), t.addClass("ariafocus"), t.focus()) : L(e)
                }
                e.exports = {
                    play: m,
                    stop: y,
                    start: function() {
                        w = w || a(), v(), w.addEventListener("abort", f), w.addEventListener("canplay", g), w.addEventListener("durationchange", h), w.addEventListener("ended", S), w.addEventListener("error", p), w.addEventListener("timeupdate", h), s.start(w)
                    },
                    end: v,
                    startContinu: function(e) {
                        e && ((e = new d(O(e))).aria.skipall || (R(null, e), window.ariaPlayElem = e, -1 < [].indexOf.call(["STYLE", "SCRIPT"], e.firstNode.nodeName) ? N() : E(e.aria.lastText)))
                    },
                    startSingle: E
                }
            },
            6455: function(e, t, n) {
                var r = n(5285),
                    i = n(9246);
                (new Date).getTime();

                function o(e) {
                    var t, n, r;
                    i.stopBubble(), i.stopDefault(), e && ("mousemove" != e.type && "keydown" != e.type || (t = e.clientX, n = e.clientY, t = (r = function(e) {
                        var t = e.view;
                        if (!t) return {
                            x: e.clientX,
                            y: e.clientY
                        };
                        if (t == window || !t.parent) return {
                            x: e.clientX,
                            y: e.clientY
                        };
                        var n = t.parent;
                        var r = t.location,
                            i = null,
                            o = 0,
                            a = 0;
                        for (; null != n && void 0 !== n;) {
                            for (var s = 0; s < n.frames.length; s++)
                                if (r == n.frames[s].location) {
                                    i = n.frames[s].frameElement;
                                    break
                                } if (i)
                                for (; o += i.offsetLeft - i.scrollLeft || 0, a += i.offsetTop - i.scrollTop || 0, i = i.offsetParent;);
                            if (n == window) break;
                            r = n.location, n = n.parent
                        }
                        return {
                            x: o + e.clientX - (document.documentElement.scrollLeft || 0),
                            y: a + e.clientY - document.documentElement.scrollTop || 0
                        }
                    }(e)).x, n = r.y, e = document.getElementById("ariamouseten1"), r = document.getElementById("ariamouseten2"), e.style.top = n + 15 + "px", r.style.left = t + 15 + "px"))
                }
                e.exports = {
                    start: function(e) {
                        (e = e || document) == document && function(e) {
                            if (e = e || window.event, !document.getElementById("ariamouseten1")) {
                                var t = document.createElement("div"),
                                    n = document.createElement("div");
                                if (t.style.width = "100%", t.style.left = "0px", t.style.height = "4px", t.className = "mouseten noscale ariaskiptheme", e) try {
                                    t.style.top = (e.clientY || 150) - 2 + "px"
                                } catch (e) {
                                    t.style.top = "150px"
                                }
                                if (t.setAttribute("id", "ariamouseten1"), t.setAttribute("aria-skipall", "true"), i.getContainerDom().appendChild(t), n.style.height = "100%", n.style.width = "4px", n.className = "mouseten noscale ariaskiptheme", n.style.top = "0px", e) try {
                                    n.style.left = (e.clientX || 150) - 2 + "px"
                                } catch (e) {
                                    n.style.left = "150px"
                                }
                                n.setAttribute("aria-skipall", "true"), n.setAttribute("id", "ariamouseten2"), i.getContainerDom().appendChild(n), o(e)
                            }
                        }()
                    },
                    end: function(e) {
                        (e = e || document) == document && (new r("#ariamouseten1").remove(), new r("#ariamouseten2").remove())
                    },
                    listenMouseTen: o
                }
            },
            5154: function(e) {
                e.exports = {
                    toBig5: function(e) {
                        if (e) {
                            for (var t = "", n = 0; n < e.length; n++) {
                                var r = e[n],
                                    i = "皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩" ["皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄".indexOf(r)];
                                t += void 0 === i ? r : i
                            }
                            return t
                        }
                    }
                }
            },
            7061: function(e, t, n) {
                n(5285), n(9246);
                e.exports = {
                    start: function(e) {},
                    end: function(e) {}
                }
            },
            5769: function(e, t, n) {
                var s = n(9246);
                e.exports = {
                    getAll: function e(t, n) {
                        for (var r, i = (t = t || document).getElementsByTagName("iframe"), o = 0; o < i.length; o++) try {
                            (r = i[o].getAttribute("id")) || (r = s.genID(), i[o].setAttribute("id", r));
                            var a = i[o].contentWindow.document;
                            if (!a.body) continue;
                            n && "function" == typeof n && n(a, i[o]), e(a, n)
                        } catch (e) {}
                    }
                }
            },
            7942: function(e, t, n) {
                n(5285);
                e.exports = {
                    iframeMouse: function(e) {}
                }
            },
            8870: function(e, t, n) {
                var l = n(9246),
                    u = n(5285),
                    d = n(3956),
                    a = n(2668),
                    o = n(2606),
                    r = n(1284),
                    i = n(5769);

                function s(e) {
                    var r, t, n, i;
                    e = e || document, l.isFF() && function() {
                        var e = ["ariatoolcss", "ariaToptoolbar", "accscreen", "ariamouseten1", "ariamouseten2", "pack_popup_depart"];
                        if ("true" != document.body.getAttribute("ariaCopy")) {
                            var t = document.createElement("div");
                            t.id = "ariaContainer", t.className = "elemscale";
                            for (var n = document.body.children, r = n.length - 1; - 1 < r; r--) {
                                var i = n[r],
                                    o = new u(i),
                                    a = o.css("position");
                                [].indexOf.call(e, i.id) < 0 && i.id.indexOf("pack_popup") < 0 && !o.hasClass("city-plug") && [].indexOf.call(["fixed", "absolute"], a) < 0 && t.insertBefore(i, t.firstChild)
                            }
                            document.body.insertBefore(t, document.body.firstChild), document.body.setAttribute("ariaCopy", !0)
                        }
                    }(), r = e, n = d.curpageConf, r.body && (c(0, !0), function(e) {
                        var t = d.golabSkipAll;
                        t && (n = new u(e.body).find(t), l.each(n, function(e, t) {
                            t.setAttribute("aria-skipall", "true")
                        }));
                        var n = d.golabFocus;
                        n && (r = new u(e.body).find(n), l.each(r, function(e, t) {
                            "0" != t.getAttribute("tabindex") && t.setAttribute("tabindex", 0)
                        }));
                        var r = d.golabRegion1;
                        r && (i = new u(e.body).find(r), l.each(i, function(e, t) {
                            var n = new u(t);
                            n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 1), "0" != t.getAttribute("tabindex") && n.attr("tabindex", 0)
                        }));
                        var i = d.golabRegion2;
                        i && (o = new u(e.body).find(i), l.each(o, function(e, t) {
                            var n = new u(t);
                            n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 2), "0" != t.getAttribute("tabindex") && n.attr("tabindex", 0)
                        }));
                        var o = d.golabRegion3;
                        o && (a = new u(e.body).find(o), l.each(a, function(e, t) {
                            var n = new u(t);
                            n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 3), "0" != t.getAttribute("tabindex") && n.attr("tabindex", 0)
                        }));
                        var a = d.golabRegion4;
                        a && (s = new u(e.body).find(a), l.each(s, function(e, t) {
                            var n = new u(t);
                            n.ariaAttr("region", "true"), n.ariaAttr("regiontype", 4), "0" != t.getAttribute("tabindex") && n.attr("tabindex", 0)
                        }));
                        var s = d.golabSkipTheme;
                        s && (c = new u(e.body).find(s), l.each(c, function(e, t) {
                            t = new u(t);
                            t.addClass("ariaskiptheme"), t.ariaAttr("skiptheme", "true")
                        }));
                        var c = d.golabSkipScale;
                        c && (c = new u(e.body).find(c), l.each(c, function(e, t) {
                            new u(t).ariaAttr("skipscale", "true")
                        }))
                    }(r), c(0, !1), c(0, !0), function(n) {
                        var e = d.golbalElems;
                        e && l.each(e, function(e, t) {
                            p(t, n)
                        })
                    }(r), c(0, !1), n && n.name && null != n.value && null != n.value.name ? (c(0, !0), function(e, n) {
                        e.value && e.value.elems && l.each(e.value.elems, function(e, t) {
                            p(t, n)
                        });
                        e.value && e.value.templateElems && l.each(e.value.templateElems, function(e, t) {
                            p(t, n)
                        })
                    }(n, r), c(0, !1)) : (c(0, !0), function(e) {
                        var t = new u(e.body).find("form,div.login_box");
                        l.each(t, function(e, t) {
                            t = new u(t);
                            "true" != t.ariaAttr("region") && 0 == t.closest('[aria-region="true"]').length && (t.ariaAttr("region", "true"), t.ariaAttr("regiontype", 3), t.aria.focusable = 1)
                        });
                        t = new u(e.body).find("header,nav,#header,#nav,div.header,div.nav,div.left-nav,div.d-subnav");
                        l.each(t, function(e, t) {
                            t = new u(t);
                            "true" != t.ariaAttr("region") && 0 == t.closest('[aria-region="true"]').length && (t.ariaAttr("region", "true"), t.ariaAttr("regiontype", 2), t.aria.focusable = 1)
                        });
                        t = new u(e.body).find("#content,div.wrapper,#wrapper,div.main-r,div.main,#main");
                        l.each(t, function(e, t) {
                            t = new u(t);
                            "true" != t.ariaAttr("region") && 0 == t.closest('[aria-region="true"]').length && (t.ariaAttr("region", "true"), t.ariaAttr("regiontype", 1), t.aria.focusable = 1)
                        });
                        e = new u(e.body).find("div.footer,#footer,footer");
                        l.each(e, function(e, t) {
                            t = new u(t);
                            "true" != t.ariaAttr("region") && 0 == t.closest('[aria-region="true"]').length && (t.ariaAttr("region", "true"), t.ariaAttr("regiontype", 4), t.aria.focusable = 1)
                        })
                    }(r), c(0, !1)), c(0, !0), n = new u(r.body).find("[role]:not([setedaria='true'])").nodeList, l.each(n, function(e, t) {
                        var n = !1,
                            r = new u(t);
                        t.setAttribute("setedaria", "true"), r.isHidden() ? g(r, -1) : (!n && -1 < [].indexOf.call(l.HtmlElemRoles.foucsable0, r.aria.role) && (g(r, 0), n = !0), !n && -1 < [].indexOf.call(l.HtmlElemRoles.foucsable0, r.aria.nodeName) && g(r, 0))
                    }), c(0, !1), c(0, !0), n = new u(r.body).find("p:not([setedaria='true'])"), l.each(n, function(e, t) {
                        var n = new u(t, r.body);
                        t.setAttribute("setedaria", "true");
                        t = l.reMoveHtml(n.text());
                        t && 0 < t.length && 0 != n.aria.tabindex && (n.aria.tabindex = 0)
                    }), c(0, !1), c(0, !0), n = new u(r.body).find("[aria-hidden='true']"), l.each(n, function(e, t) {
                        t = new u(t, r.body); - 1 != t.aria.tabindex && (t.aria.tabindex = -1)
                    }), c(0, !1), l.isFF() && (t = new u("body").child(), l.each(t, function(e, t) {
                        var n = new u(t);
                        1 == t.nodeType && n.aria && !n.aria.skipscale && n.addClass("elemscale")
                    })), c(0, !0), t = new u(r.body).find("[aria-region='true']"), l.each(t, function(e, t) {
                        t = new u(t);
                        0 != t.aria.tabindex && (t.aria.tabindex = 0)
                    }), new u(r.body).find("[role='floatingwindow']").remove(), function(e) {
                        var t = new u("[aria-atomic='true']", e).find("*");
                        l.each(t, function(e, t) {
                            "-1" != t.getAttribute("tabindex") && t.setAttribute("tabindex", -1)
                        }), f || (f = !0, new u(e).on("keydown", "[aria-atomic='true']", function(e) {
                            13 != e.keyCode || 1 != this.nodeType || 0 < (e = new u(this).find("a,[role='a'],[role='button']")).length && e.firstNode.click()
                        }))
                    }(r), c(0, !1), o.isMobile() && function(o) {
                        new u(o.body).find("#ariabodyscale").remove();
                        var e = new u(o.body).find("a"),
                            t = "*:not(.setfont):not(a)";
                        e.length < 2e3 && (t = "*:not(.setfont)");
                        t = new u(o.body).find(t);
                        l.each(t, function(e, t) {
                            try {
                                var n = new u(t, o),
                                    r = l.getStyle(t);
                                24 < (r = parseInt(r.fontSize, 10)) && (r = 24);
                                var i = "",
                                    i = n.aria && (n.aria.skipall || n.aria.skiptheme) ? "ariaskiptheme" : "ariatheme";
                                n.addClass("setfont ariafont" + r + " " + i)
                            } catch (e) {}
                        }), a.setBodyTran()
                    }(r), c(0, !0), c(0, !1), c(0, !0), function(e) {
                        new u(e).find("[aria-skipall],[aria-skiptheme]").addClass("ariaskiptheme"), new u(e).find("[aria-skipall],[aria-skiptheme]").find("*").addClass("ariaskiptheme")
                    }(r), c(0, !1), c(0, !0), function(e) {
                        e = new u(e.body).find("a");
                        e.length < 500 && l.each(e, function(e, t) {
                            ("" == t.textContent || 1 < t.children.length) && t.classList.add("ariaskiptheme")
                        })
                    }(r), c(0, !1), c(0, !0), function(e) {
                        {
                            var t;
                            d.focusTheme && (t = "[aria-focustheme]", d.focusTheme && (t += "," + d.focusTheme), (t = new u(e.body).find(t)).removeClass("ariaskiptheme"), t.removeAttr("aria-skipall"), t.removeAttr("aria-skiptheme"))
                        }
                    }(r), c(0, !1), c(0, !0), function(e) {
                        new u(e).find("#ariamovedown").remove();
                        var t = new u(e.body).find("[aria-movedown]"),
                            r = [];
                        l.each(t, function(e, t) {
                            var n = new u(t),
                                t = parseInt(n.css("top"), 10);
                            t && [].indexOf.call(r, t) < 0 && r.push(t), n.addClass("ariamovedown" + t)
                        }), a.moveDown(r, e)
                    }(r), c(0, !1), c(0, !0), function(e) {
                        new u(e).find("#ariamoveup").remove();
                        var t = new u(e.body).find("[aria-moveup]"),
                            r = [];
                        l.each(t, function(e, t) {
                            var n = new u(t),
                                t = parseInt(n.css("bottom"), 10);
                            t && [].indexOf.call(r, t) < 0 && r.push(t), n.addClass("ariamoveup" + t)
                        }), a.moveUp(r, e)
                    }(r), c(0, !1), c(0, !0), function(e) {
                        var t = new u(e.body).find("[v]");
                        l.each(t, function(e, t) {
                            var n = new u(t);
                            n.attr("fromvlabel") || (n.attr("fromvlabel", !0), n.aria.label || n.aria.title || n.aria.placeholder || ("INPUT" == t.nodeType ? n.aria.placeholder = n.attr("v") : n.aria.title = n.attr("v")))
                        });
                        e = new u(e.body).find("[aria-region='true']:not([aria-autolabel='true']),[aria-haspopup='true']:not([aria-autolabel='true'])");
                        l.each(e, function(e, t) {
                            t = new u(t);
                            "true" != t.ariaAttr("autolabel") && (t.ariaAttr("setlabel", !0), t.aria.label = t.aria.lastText, t.ariaAttr("autolabel", "true"), t.removeAttr("aria-setlabel"))
                        })
                    }(r), c(0, !1), c(0, !0), function(e) {
                        new u(e.body).find("[accesskey]").removeAttr("accesskey")
                    }(r), c(0, !1)), e = new u("[aria-owns]", i = e), l.each(e, function(e, t) {
                        var n = new u(t),
                            t = new u(n.aria.owns, i);
                        0 < t.length && !n.ariaAttr("autoowns") && (n.aria.ownsfor = "#" + t.aria.id, n.ariaAttr("sourceowns", !0), t.aria.tabindex = 0, t.aria.owns = "#" + n.aria.id, t.ariaAttr("autoowns", !0), n.aria.haspopup && t.ariaAttr("popup", !0))
                    })
                }

                function c(e, t) {
                    t && (new Date).getTime(), t || (new Date).getTime()
                }
                var f = !1;

                function g(e, t) {
                    e.aria.tabindex || (e.aria.tabindex = t)
                }

                function p(e, t) {
                    var n = e.selector;
                    if (n) {
                        var r, i = new u(t.body).find(n);
                        if (!i.hasClass("setedaria") && 0 < i.length) {
                            for (var o in e.focusable && (i.aria.focusable = 0), e.hidden && (i.aria.focusable = -1), e.role && (i.aria.role = e.role), e.prop) "label" == o && "true" == i.ariaAttr("autolabel") || e.prop[o] && Object.hasOwnProperty.call(e.prop, o) && (r = e.prop[o], i.ariaAttr(o, r), "skipAll" == o && (i.addClass("ariaskip"), i.addClass("ariaskiptheme")), "skipTheme" == o && i.addClass("ariaskiptheme"), "fixedOldWidth" == o && i.addClass("fixedOldWidth" + r));
                            e.prop && e.prop.dialogclose && i.find(e.prop.dialogclose).ariaAttr("action", "dialogclose")
                        }
                    }
                }
                e.exports = {
                    start: s,
                    starAll: function(e) {
                        d.status && (runReStart = !0, r.init().then(function(e) {
                            s(), i.getAll(document, function(e) {
                                s(e)
                            })
                        }))
                    }
                }
            },
            2668: function(e, t, n) {
                var o = n(9246),
                    c = n(7107),
                    l = n(3956),
                    u = n(4036),
                    a = n(5285),
                    d = n(2606),
                    s = (n(1958), n(5769));

                function r() {
                    var e, t, n, r, i, o, a = "",
                        s = l.curpageConf;
                    return s && s.value.pageCss && (a += s.value.pageCss), l.golabCss && (a += l.golabCss), l.useOldFixed && l.oldFixedCss && (!d.isMobile() || d.isMobile() && l.useOldFixedInMobile) && (a += l.oldFixedCss), d.isMobile() && l.mobileCss && (a += l.mobileCss), l.status && (e = ".mouseten{", t = "{", n = " a:not(.ariaskiptheme) , a:not(.ariaskiptheme) span:not(.ariaskiptheme),a:not(.ariaskiptheme) p:not(.ariaskiptheme),[role='a']:not(.ariaskiptheme) {", (o = l.Theme) && (l.hostEnable.region && (a += h(o.region, ".ariaregion")), o.backgroundColor && (t += "background-color:" + o.backgroundColor + " !important;", n += "background:" + o.backgroundColor + "  !important;;"), o.color && (t += "color:" + o.color + " !important;", e += "background-color:" + o.color + " !important;"), o.link && (n += "color:" + o.link + " !important;")), r = l.scale, s = l.bodyfont, l.hostEnable.fontScal && (r = parseFloat(r), l.padding, l.spacing, a += "input[type='checkbox'],input[type='radio'] {", a += "min-height:  " + (s = l.bodyfont * r) + "px !important;", a += "min-width:   " + s + "px !important;", a += "}"), l.Theme && l.Theme.backgroundColor && (l.golabReplaceBg && (a += l.golabReplaceBg + ","), a += "[aria-clearbg]{", a += "background-image:none !important;", a += "}"), o && (l.hostEnable.focus && (a += h(o.focus, ".ariafocus:not(.ariaskiptheme)"), (i = o.focus.value) && i.value && (delete i.value.outline, a += h(i, ".ariafocus:not(.ariaskiptheme) *"))), l.hostEnable.mouseover && (a += h(o.mouseover, ".ariamouseover"))), i = "[aria-focustheme]", l.focusTheme && (i += "," + l.focusTheme), a = a + n + "}" + ("*:not(.ariaskiptheme):not(i):not(a):not(input):not(span) " + t + "}") + (i += t + "}"), i = l.highlight, l.hostEnable.highlight && i.enable && (i.rate && i.rate > r && i.rate, a += ".ariahighlight{", o && (r = o.highlight.backgroundColor, (i = o.highlight.color) && (a += " color: " + i + " !important;"), r && (a += "background-color: " + r + " !important;"), a += "}", (o = o.highlight.link) && (a += ".ariahighlight a{", a += " color: " + o + "  !important;", a += "}"))), a += "input:not(.ariaskiptheme) {color:black !important;background-color:white !important;}", a += "input:disabled {color:black !important;background-color:#ccc !important;}", a += e + "}"), c.set(u.keys.runtime.settings.css, a), a
                }

                function i(e) {
                    l.golabFixedCss && o.appendCss(e, "golabFixedCss", l.golabFixedCss)
                }

                function f(e) {
                    new a(e.body).find("#golabFixedCss").remove()
                }

                function g() {
                    var e = parseFloat(l.scale),
                        t = "";
                    if (new a("#ariabodyscale").remove(), 1 != e)
                        if (d.isMobile())
                            for (var n = 10; n < 30; n++) t += ".ariafont" + n + "{font-size:" + parseInt(n * e) + "px  !important;}";
                        else o.isFF() ? t += function() {
                            var e = l.scale;
                            if (1 == e) return "";
                            var t = "#ariaContainer{";
                            return t += "-moz-transform:scale(" + e + ");", t += "transform-origin: 0 0;", t += "}"
                        }() : t += function() {
                            var e = l.scale;
                            if (1 == e) return "";
                            var t = "body{";
                            return t += "zoom:" + e + "  !important;", t += "transform-origin: 0 0;", t += "}"
                        }();
                    t += (i = "", d.isMobile() || (r = l.scale || 1, i += ".ariabodytopfiexed { padding-top:" + (100 * (r = parseFloat(1 / r).toFixed(3))).toFixed(2) + "px !important;}", i += ".noscale{", o.isFF() || o.isIE() || (i += "zoom:" + r + " !important;"), i += "transform-origin: 0 0;", i += "-o-transform: scale(" + r + ")  !important;", i += "-o-transform-origin: 0 0;", i += "}", 1 < r && (i += "body{overflow-x:auto !important;}")), i), o.appendCss(document, "ariabodyscale", t), o.isIE() || s.getAll(document, function(e) {
                        o.appendCss(e, "ariabodyscale", t)
                    });
                    var r = (document.documentElement.scrollWidth - document.documentElement.offsetWidth) / 2,
                        i = (document.documentElement.scrollWidth - document.documentElement.clientWidth) / 2;
                    r < i && (r = i), window.scrollTo(r, function() {
                        var e = 0;
                        document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop);
                        return e
                    }())
                }

                function p(e, t) {
                    new a(e.body).find("#ariacss").remove(), o.appendCss(e, "ariacss", t)
                }

                function h(e, t) {
                    var n = "ariafocus" == t ? ":focus," : "";
                    return e && e.enable && (n += t + "{", o.each(e, function(e, t) {
                        "enable" != e && null != t && ("outline" == e && (n += "border-radius: 3px;outline-offset:-2px;"), n += o.toCssCamelCase(e) + ":" + t + " !important;")
                    }), n += "}"), n
                }
                e.exports = {
                    start: function(e) {
                        e = e || document;
                        var t = c.get(u.keys.runtime.settings.css) || r();
                        0 == new a(e).find("#ariaiconstyle").length && new a(o.getContainerDom(e)).append('<link type="text/css" isaria="true" rel="stylesheet" id="ariaiconstyle" href="' + l.themeRoad + '/css/font.min.css"></link>'), p(e, t), i(e), g()
                    },
                    end: function(e) {
                        e = e || document, new a(e.body).find("style[isaria],link[isaria]").remove(), f(e)
                    },
                    setSettingTheme: function(e) {
                        p(e = e || document, r()), i(e), e == document && g()
                    },
                    setBodyTran: g,
                    addPy: function() {
                        var e = document.createElement("script");
                        e.setAttribute("id", "ariapy"), e.setAttribute("charset", "UTF-8"), e.setAttribute("data-for", "result"), e.src = l.road + "public/pinyin.min.js", document.head.appendChild(e)
                    },
                    setMouseb: function(e) {
                        e = e || document;
                        var t = "\n *,a {\n";
                        t += "cursor: url(" + l.themeRoad + "/images/allaw.cur), auto !important;\n", o.appendCss(e, "ariatoolbarstylemouse", t += "}\n")
                    },
                    removeMouseb: function(e) {
                        e = e || document, new a(e).find("#ariatoolbarstylemouse").remove()
                    },
                    cssToStore: r,
                    seGolabFixedCss: i,
                    removeGolabFixedCss: f,
                    moveDown: function(e, t) {
                        if (e && 0 != e.length) {
                            for (var n = "", r = 0; r < e.length; r++) {
                                var i = e[r];
                                n += " body.ariabodytopfiexed .ariamovedown" + i + " {", n += "top:" + (i + 100) + "px; ", n += "position:absolute; ", n += "}"
                            }
                            o.appendCss(t, "ariamovedown", n)
                        }
                    },
                    moveUp: function(e, t) {
                        if (e && 0 != e.length) {
                            for (var n = "", r = 0; r < e.length; r++) {
                                var i = e[r];
                                n += " body.ariabodybottomfiexed .ariamoveup" + i + " {", n += "bottom:" + (i + 150) + "px; ", n += "position:absolute; ", n += "}"
                            }
                            o.appendCss(t, "ariamoveup", n)
                        }
                    }
                }
            },
            5300: function(e, t, n) {
                var i = n(5769),
                    o = n(5285),
                    a = n(3956),
                    r = n(2606);

                function s() {
                    var e = "";
                    return r.isMobile() && (e += "UseInMobile "), (!r.isMobile() || r.isMobile() && a.useOldFixedInMobile) && (e += "useOldFixed "), e
                }
                e.exports = {
                    start: function() {
                        var t;
                        (a.useOldFixed || r.isMobile()) && (a.oldFixedStatus = !0, 0 != (t = s().trim()).length && (new o(document.body).addClass(t), i.getAll(document, function(e) {
                            new o(e.body).addClass(t)
                        })))
                    },
                    end: function() {
                        a.oldFixedStatus = !1;
                        for (var r = s().split(" "), e = 0; e < r.length; e++) {
                            var t = r[e];
                            0 < t.length && new o(document.body).removeClass(t)
                        }
                        i.getAll(document, function(e) {
                            for (var t = 0; t < r.length; t++) {
                                var n = r[t];
                                0 < n.length && new o(e.body).removeClass(n)
                            }
                        })
                    },
                    setHasOldFixed: function() {
                        a.useOldFixed && (r.isMobile(), new o(document.body).addClass("hasOldFixed"))
                    }
                }
            },
            2606: function(e, t, n) {
                var r = n(6056),
                    i = !1;

                function o(e, t) {
                    a(".cnwza", e), a("#cnwza", e), a("#cniil_wza", e), a(e ? "[onclick='aria.start();'],[onclick='aria.start()']" : "[onclick='aria.end();'],[onclick='aria.end()']", e), t && a(t, e)
                }

                function a(e, t) {
                    var n = "string" == typeof e ? document.querySelectorAll(e) : [e];
                    if (n && void 0 !== n && 0 != n.length)
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                                o = i.getAttribute("clickhide"),
                                a = i.getAttribute("closeText"),
                                s = (s = i.getAttribute("openText")) || i.innerText;
                            t ? "false" != o ? i.classList.add("ariaHide") : a && (i.innerText = a) : "false" != o ? i.classList.remove("ariaHide") : s && (i.innerText = s), "string" == typeof e && (-1 < e.indexOf("end") && i.setAttribute("onclick", "aria.start()"), -1 < e.indexOf("start") && i.setAttribute("onclick", "aria.end()"))
                        }
                }

                function s(e) {
                    null != (e.target.closestReplenish("#cniil_wza") || e.target.closestReplenish("#cnwza") || e.target.closestReplenish(".cnwza")) && (r.status ? aria && "function" == typeof aria.end && (o(!1), aria.end()) : aria && "function" == typeof aria.start && (o(!0), aria.start()))
                }
                Element.prototype.closestReplenish = function(t) {
                    var e = this,
                        n = function() {
                            if (t instanceof HTMLElement) return [t];
                            try {
                                t = document.querySelectorAll(t)
                            } catch (e) {} finally {
                                var e = Object.prototype.toString.call(t).slice(8, -1);
                                if (-1 < ["NodeList", "HTMLCollection", "Array"].indexOf(e)) return [].slice.call(t)
                            }
                        }();
                    do {
                        if (-1 < n.indexOf(e)) return e
                    } while (null !== (e = e.parentElement));
                    return null
                }, e.exports = {
                    setBtn: o,
                    addListenBtn: function() {
                        i || (window.addEventListener("click", s), i = !0)
                    },
                    removeListenBtn: function() {
                        i = !1, window.removeEventListener("click", s)
                    },
                    mobileHide: function() {
                        for (var e = document.querySelectorAll("[mobilehide]"), t = 0; t < e.length; t++) {
                            var n = e[t];
                            try {
                                var r = n.getAttribute("mobilehide");
                                "none" == r && (n.style.display = "none"), "hidden" == r && (n.style.visibility = "hidden")
                            } catch (e) {}
                        }
                    },
                    isMobile: function() {
                        for (var e = navigator.userAgent, t = ["2.0 MMP", "240320", "AvantGo", "BlackBerry", "Blazer", "Cellphone", "Danger", "DoCoMo", "Elaine/3.0", "EudoraWeb", "hiptop", "IEMobile", "KYOCERA/WX310K", "LG/U990", "MIDP-2.0", "MMEF20", "MOT-V", "NetFront", "Newt", "Nintendo Wii", "Nitro", "Nokia", "Opera Mini", "Opera Mobi", "Miui", "Palm", "Playstation Portable", "portalmmm", "Proxinet", "ProxiNet", "SHARP-TQ-GX10", "Small", "SonyEricsson", "Symbian OS", "SymbianOS", "TS21i-10", "UP.Browser", "UP.Link", "Windows CE", "WinWAP", "Android", "iPhone", "Windows Phone", "HTC"], n = !1, r = 0; r < t.length; r++)
                            if (0 < e.indexOf(t[r])) {
                                n = !0;
                                break
                            } var i = window.screen.width,
                            o = window.screen.height;
                        return n = i < 500 && o < 800 ? !0 : n
                    }
                }
            },
            8243: function(e, t, n) {
                var r = n(6387),
                    i = n(2219);
                e.exports = {
                    start: function() {
                        r.start().then(function() {
                            i.start()
                        })
                    },
                    end: function() {
                        r.end(), i.end()
                    }
                }
            },
            2220: function(e, t, n) {
                var a = n(5285),
                    r = (n(9246), n(3956), n(5769)),
                    o = n(8204);

                function i(e, t) {
                    for (var n = new a(e.body).find("[aria-region='true']"), r = 0; r < n.length; r++) {
                        var i = new a(n[r]),
                            o = i.ariaAttr("regiontype");
                        null == t[o] && (t[o] = []), t[o].push(i)
                    }
                    return t
                }

                function s() {
                    var n = {},
                        n = i(document, n);
                    return r.getAll(document, function(e, t) {
                        n = i(e, n)
                    }), n
                }
                e.exports = {
                    getAll: s,
                    changeRegion: function(e) {
                        var t, n = s()[e];
                        if (null == n || 0 == n.length) return !1;
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (i.hasClass("currentRegion" + e)) {
                                r == n.length - 1 ? r = 0 : r += 1, i.blur(), t = n[r], i.removeClass("currentRegion" + e), o.ResetRegTabindex(t);
                                break
                            }
                        }
                        return (t = void 0 === t ? n[0] : t).addClass("currentRegion" + e), t
                    }
                }
            },
            1958: function(e, t, n) {
                var r = n(5285),
                    i = n(9246),
                    o = n(3956);

                function a() {
                    var e = 0,
                        t = window.screen,
                        n = navigator.userAgent.toLowerCase();
                    return void 0 !== window.devicePixelRatio ? e = window.devicePixelRatio : ~n.indexOf("msie") ? t.deviceXDPI && t.logicalXDPI && (e = t.deviceXDPI / t.logicalXDPI) : void 0 !== window.outerWidth && void 0 !== window.innerWidth && (e = window.outerWidth / window.innerWidth), e && (i.IsIos() && (e /= 2), e = Math.round(100 * e)), e
                }
                e.exports = {
                    getZoom: a,
                    getRealScale: function() {
                        return o.scale, 100 / a()
                    },
                    width100: function() {
                        return (document.documentElement.clientWidth * a() / 100).toFixed(2)
                    },
                    initInOldFixedScale: function() {
                        var e;
                        0 < new r("body.useOldFixed") && (e = document.documentElement.clientWidth, o.scale = parseFloat((e / 740).toFixed(2)))
                    }
                }
            },
            642: function(e, t, n) {
                var r = n(5285),
                    i = n(3956),
                    o = n(7437),
                    a = n(7810),
                    s = n(5769);

                function c() {}

                function l(t) {
                    new r(document).find("." + t).removeClass(t), s.getAll(document, function(e) {
                        new r(e).find("." + t).removeClass(t)
                    })
                }
                o.registerEvent(a.startService, c, 0), e.exports = {
                    setFontSize: c,
                    setClass: function(e, t) {
                        0 != e.length && (t = t || document, l(i.className.focus), e.aria.canSetClass && e.addClass(i.className.focus), t = e.aria.regionElem, l(i.className.region), t && 0 < t.length && e.aria.canSetClass && t.addClass(i.className.region), t = e, 0 < (t = t = 1 === i.highlight.mode ? new r(t.aria.regionElem) : t).length && i.highlight.enable && (l("ariahighlight"), e.aria.canSetClass && t.addClass(i.className.highlight)), 0 < t.length && i.highlight.enable && !t.hasClass("ariahighlightScale") && t.width() * i.highlight.rate + t.firstNode.offsetLeft <= document.body.scrollWidth && e.aria.canSetClass && (l("ariahighlightScale"), e.aria.canSetClass && t.addClass("ariahighlightScale")))
                    }
                }
            },
            6387: function(e, t, n) {
                var s, r, i = n(6121),
                    c = n(5285),
                    l = n(9246),
                    u = n(3956),
                    o = n(1227),
                    a = n(7437),
                    d = n(7810),
                    f = (n(7437), n(5367)),
                    g = n(2219),
                    p = n(2668),
                    h = (n(642), u.hostEnable),
                    v = n(9031),
                    m = n(2220),
                    b = n(5300),
                    y = n(1958);

                function w(e) {
                    J(new c(this).attr("regiontype"))
                }

                function x(e) {
                    window.open(u.road + "public/instructions_" + u.defaultLanguage + ".html?appid=" + window.ariaAppId)
                }

                function T() {
                    u.py ? new c("#accscreen-py").attr("title", "拼音已启用") : new c("#accscreen-py").attr("title", "拼音已关闭")
                }

                function C(e) {
                    var t = u.py;
                    e && ((u.py = !t) ? f.play("拼音已启用") : f.play("拼音已关闭")), T()
                }

                function k(e) {
                    var t = u.big5,
                        n = new c("#accscreen-jt");
                    t ? (n.html("简体"), n.attr("title", "繁体已启用"), e && f.play("繁体已启用")) : (n.html("繁体"), n.attr("title", "简体已启用"), e && f.play("简体已启用"))
                }

                function A(e) {
                    var t = u.big5;
                    e && (u.big5 = !t, k(e))
                }

                function E(e) {
                    b.setHasOldFixed(),
                        function() {
                            new c("#acccont-logo-img").css("background-image", "url(" + u.themeRoad + "/images/" + u.defaultLanguage + (u.readsrc ? 2 : 1) + ".png)");
                            var e = u.scale;
                            new c(".ariazoomb").attr("title", s.curZoomPage.replace("{0}", e.toFixed(1)) + "," + s.airafontScaleTextToBig), new c(".ariazooms").attr("title", s.curZoomPage.replace("{0}", e.toFixed(1)) + "," + s.airafontScaleTextToSmall), new c(".ariaTopsubzoomb").html(s.ariaTopsubzoomb), new c(".ariaTopsubzooms").html(s.ariaTopsubzooms), L(), new c(".ariathemebtn").attr("title", s.ariathemebtn + (u.Theme && u.Theme.displayName ? u.Theme.displayName : "无")), new c(".ariaTopsubtheme").html(s.ariaTopsubtheme), new c(".ariaReadScreen").attr("title", s.ariaReadScreen), new c(".ariaTopsubReadScreen").html(s.ariaTopsubReadScreen), new c(".ariaTopsubVoice").html(s.ariaTopsubVoice), P(), new c(".ariaTopsubVoiceRate").html(s.ariaTopsubVoiceRate), F(), new c(".ariaTopsubReadtype").html(s.ariaTopsubReadtype), D(), new c(".ariaTopsubmouseb ").html(s.ariaTopsubmouseb), new c(".ariaTopsubten ").html(s.ariaTopsubten), I(), new c(".ariareset").attr("title", s.ariareset), new c(".ariaTopsubreset").html(s.ariaTopsubreset), new c(".ariatopfixedtext").attr("title", s.ariatopfixedtext), new c(".ariaTopsubtopfixed").html(s.ariaTopsubtopfixed), new c(".ariaTopsubigsrc").html(s.ariaTopsubigsrc), new c(".ariabigsrc").attr("title", u.bigsrc ? s.ariabigsrcopen : s.ariabigsrcclose), new c(".ariaTopsubtopexit").html(s.ariaTopsubtopexit), new c(".ariaexit").attr("title", s.ariaexit), new c(".ariaacchelpbook").attr("title", s.ariaacchelpbook), new c(".ariaTopacchelpbook").html(s.ariaTopacchelpbook), T(), k()
                        }(), V(e), X(), q(null), H(null), K(null), G(null), j(null), R(null), U(), setTimeout(function() {
                            S(), u.readsrc && O()
                        }, 500), r = setInterval(S, 1e3)
                }

                function S() {
                    for (var e = m.getAll(), t = new c(".onlineread"), n = new c(".readsrc").length < 2, r = 1; r < 7; r++) {
                        var i, o, a = e[r] ? e[r].length : 0;
                        n ? (i = '<div id="acccross' + r + '" regiontype="' + r + '" ' + (0 == a ? "disable=true" : "") + '  class="readsrc ariaregionbutton acccross' + r + " " + (0 == a ? "disable" : "") + '">', i += ' <label class="title "><label class="regionname" role="button">' + (o = (o = s["regiontype" + r]) || s[void 0]) + '</label><label role="button" class="regioncount ariaicon-regioncount' + r + '" aria-label="' + o + a + '"><cc>(</cc><t id="regioncount' + r + '">' + a + "</t><cc>)</cc></label></label>", i += '<label class="desc">ALT+' + r + "</label>", i += "</div>", t.append(i)) : a != parseInt(new c("#regioncount" + r).html()) && (new c("#regioncount" + r).html(a), 0 < a ? new c(".acccross" + r).removeClass("disable") : new c(".acccross" + r).addClass("disable"))
                    }
                    new c(".ariaregionbutton").off("click", w), new c(".ariaregionbutton").on("click", w)
                }

                function O(e) {
                    var t = u.readsrc;
                    void 0 !== e && (u.readsrc = !t, t = !t), t ? (new c(".notonlineread").addClass("ariaHide"), new c(".onlineread").removeClass("ariaHide"), G()) : (new c(".notonlineread").removeClass("ariaHide"), new c(".onlineread").addClass("ariaHide")), v.start(), f.play(new c("#ariaTipText")), new c("#acccont-logo-img").css("background-image", "url(" + u.themeRoad + "/images/" + u.defaultLanguage + (u.readsrc ? 2 : 1) + ".png)")
                }

                function N(e) {
                    clearInterval(r), r = null, u.reset(), E(), _(), g.setSettingTheme(), window.canRead = !0, f.play(s.ariaresetsuccess)
                }

                function L() {
                    var e = "ariaOldFixedBtn0";
                    u.oldFixedStatus ? (new c(".ariaOldFixed").attr("title", s.ariaOldFixedOpen), new c(".ariaOldFixed").addClass("fixedSelect"), e = "ariaOldFixedBtn1") : (new c(".ariaOldFixed").attr("title", s.ariaOldFixedClose), new c(".ariaOldFixed").removeClass("fixedSelect")), new c(".ariaOldFixedTitile").html(s[e])
                }

                function R(e) {
                    var t = u.oldFixedStatus;
                    e && ((u.oldFixedStatus = t = !t) ? (u.scale = 1, f.play(s.ariaOldFixedOpen)) : f.play(s.ariaOldFixedClose)), t ? (p.setBodyTran(), b.start()) : b.end(), L()
                }

                function I() {
                    u.mousemode ? new c(".ariamouseb").attr("title", s.ariamousebopen) : new c(".ariamouseb").attr("title", s.ariamousebclose), u.mouseten ? new c(".ariamouseten").attr("title", s.ariamousetenopen) : new c(".ariamouseten").attr("title", s.ariamousetenclose)
                }

                function D() {
                    var e = 2 == u.readtype ? "2" : "1",
                        e = s["ariaReadtype" + e];
                    new c(".ariaReadtype").attr("title", e)
                }

                function P(e) {
                    e || u.voice.enable ? new c(".ariavoice").attr("title", s.openvoice) : new c(".ariavoice").attr("title", s.closevoice)
                }

                function F() {
                    var e = u.voice.rate;
                    new c(".ariaVoiceRate").attr("title", s.ariaVoiceRate.replace("{0}", e))
                }

                function M() {
                    a.execEvent(d.globalEnd)
                }

                function j(e) {
                    var t = u.readtype,
                        n = new c(".ariaReadtype");
                    e && (f.play(s["ariaReadtype" + (2 == u.readtype ? "1" : "2")]), t = u.readtype = 2 == t ? 1 : 2), 2 == t ? (n.removeClass("ariaicon-finger_reading"), n.addClass("ariaicon-continuous_reading")) : (u.readtype = 1, n.addClass("ariaicon-finger_reading"), n.removeClass("ariaicon-continuous_reading")), D()
                }

                function B(e) {
                    var t = u.highlight.enable;
                    e ? t ? (u.highlight.enable = !1, new c(".ariahighlighttool").parent().removeClass("fixedSelect"), new c(".ariahighlighttool").ariaAttr("success", s.unsethighlight)) : (u.highlight.enable = !0, new c(".ariahighlighttool").parent().addClass("fixedSelect"), new c(".ariahighlighttool").ariaAttr("success", s.sethighlight)) : t && new c(".ariahighlighttool").parent().addClass("fixedSelect")
                }

                function K(e) {
                    var t = u.mouseten;
                    e && (u.mouseten = t = !t, I(), t ? f.play(s.ariamousetenopen) : f.play(s.ariamousetenclose)), t ? g.startMouseTen() : g.endMouseTen()
                }

                function H(e) {
                    var t = new c(".ariamouseb"),
                        n = u.mousemode;
                    e ? (n ? (t.removeClass("fixedSelect"), u.mousemode = null, f.play(s.ariamousebclose)) : (u.mousemode = !0, f.play(s.ariamousebopen)), n = u.mousemode, I()) : n && t.addClass("fixedSelect"), _(n)
                }

                function _(e) {
                    e ? g.startBigMouse() : g.endBigMouse()
                }

                function U(e) {
                    var t;
                    u.voice.enable ? (t = u.voice.rate, e && (t >= u.voice.maxRate ? t = u.voice.minRate : t += t < 1 ? .1 : .5, u.voice.rate = parseFloat(t.toFixed(1)), f.play(s.ariaCurVoiceRate.replace("{0}", t.toFixed(1)))), e = new c(".ariaVoiceRate"), t <= 1 ? (e.removeClass("ariaicon-quick_read"), e.addClass("ariaicon-slow_read")) : (e.addClass("ariaicon-quick_read"), e.removeClass("ariaicon-slow_read")), F()) : f.play(s.ariaVoiceUnEnable)
                }

                function z() {
                    var e = u.scale;
                    e >= u.maxZoom ? f.play(s.maxZoomPage) : (e ? e += .1 : e = 1, u.scale = parseFloat(e.toFixed(1)), f.play(s.curZoomPage.replace("{0}", e.toFixed(1))), new c(".ariazoomb").attr("title", s.curZoomPage.replace("{0}", e.toFixed(1)) + "," + s.airafontScaleTextToBig), new c(".ariazooms").attr("title", s.curZoomPage.replace("{0}", e.toFixed(1)) + "," + s.airafontScaleTextToSmall), p.setBodyTran())
                }

                function W() {
                    var e = u.scale;
                    e <= u.minZoom ? f.play(s.minZoomPage) : (e ? (e -= .1, u.scale = parseFloat(e.toFixed(1))) : e = 1, f.play(s.curZoomPage.replace("{0}", e.toFixed(1))), new c(".ariazoomb").attr("title", s.curZoomPage.replace("{0}", e.toFixed(1)) + "," + s.airafontScaleTextToBig), new c(".ariazooms").attr("title", s.curZoomPage.replace("{0}", e.toFixed(1)) + "," + s.airafontScaleTextToSmall), p.setBodyTran())
                }

                function q(e) {
                    var t, n = u.Themes,
                        r = u.defaultTheme,
                        i = "";
                    if (e) {
                        if (r) {
                            for (var o = 0; o < n.length; o++)
                                if (n[o].name == r) {
                                    o == n.length - 1 ? u.defaultTheme = n[0].name : u.defaultTheme = n[o + 1].name;
                                    break
                                }
                        } else u.defaultTheme = n[0].name;
                        _(u.mousemode), g.setSettingTheme(), i = s.ariathemebtn + (u.Theme && u.Theme.displayName ? u.Theme.displayName : "无")
                    }
                    if (r = u.defaultTheme, n && 0 < n.length) {
                        for (var a, o = 0; o < n.length; o++)
                            if (n[o].name == r) {
                                t = o + 1 < n.length ? n[o + 1] : n[0];
                                break
                            } t ? (a = "#ariaToptoolbar .ariathemebtn ,#ariaToptoolbar .ariathemebtn span{", a += "color:" + (t.value.color || "black") + " !important;", a += "background-color:" + (t.value.backgroundColor || "white") + " !important", a += "}", l.appendCss(document, "ariathemebtn", a), i += "," + s.arianextTheme + t.value.displayName) : new c("#ariathemebtn").remove()
                    }
                    e && (f.play(i), new c(".ariathemebtn").attr("title", i))
                }

                function V(e) {
                    var t = u.voice.enable,
                        n = new c(".ariavoice");
                    e && ((u.voice.enable = t = !t) ? f.play(s.openvoice) : (f.play(s.closevoice), f.stop()), P()), t ? (n.removeClass("ariaicon-close_sound"), n.addClass("ariaicon-open_sound")) : (n.removeClass("ariaicon-open_sound"), n.addClass("ariaicon-close_sound"))
                }

                function G(e) {
                    var t, n = u.bigsrc;
                    e && (u.bigsrc = !n, e = (n = !n) ? s.ariabigsrcopen : s.ariabigsrcclose, new c(".ariabigsrc").attr("title", e), f.play(e)), n ? (new c(document.body).css("margin-bottom") < 150 && new c(document.body).addClass("ariabodybottomfiexed"), new c("#accscreen").addClass("expanded"), new c(".ariabigsrc").addClass("fixedSelect"), 0 == new c("[aria-moveup]").length && (t = new c("div,footer"), l.each(t, function(e, t) {
                        var n = new c(t),
                            r = n.css("bottom");
                        "accscreen" != t.id && "fixed" == n.css("position") && !n.aria.skipall && r < 99 && (n.css("bottom", r + 150), n.addClass("fixedbottom100"))
                    }))) : (new c(".ariabigsrc").removeClass("fixedSelect"), new c(document.body).removeClass("ariabodybottomfiexed"), new c("#accscreen").removeClass("expanded"), 0 == new c("[aria-moveup]").length && (t = new c(".fixedbottom100"), l.each(t, function(e, t) {
                        var n = new c(t),
                            t = n.css("bottom");
                        n.css("bottom", t - 150)
                    }), new c(".fixedbottom100").removeClass("fixedbottom100")))
                }

                function Y() {
                    new c(".ariabodytopfiexed").removeClass("ariabodytopfiexed");
                    new c(".fiexdTop100");
                    new c(".fiexdToabsolute").css("positon", "absolute"), new c(".fiexdToabsolute").removeClass("fiexdToabsolute"), new c(".fiexdTop100").removeClass("fiexdTop100"), new c("#ariaToptoolbar").removeClass("expanded")
                }

                function X(e) {
                    var t = u.topfixed;
                    e && (u.topfixed = t = !t);
                    var n = new c(".ariatopfixed");
                    t ? (new c(document.body).addClass("ariabodytopfiexed"), t = new c("div,header"), l.each(t, function(e, t) {
                        new c(t).css("top")
                    }), e && f.play(s.ariatopfixedtextopen), n.addClass("fixedSelect"), new c("#ariaToptoolbar").addClass("expanded")) : (n.removeClass("fixedSelect"), Y(), e && f.play(s.ariatopfixedtextclose))
                }

                function Z(e) {
                    new c("#ariaToptoolbar").removeClass("showpannel")
                }

                function J(e) {
                    var t, n, r, i = m.changeRegion(e);
                    i ? i && ((t = i).addClass("currentRegion" + e), t.attr("tabindex", 0), (n = new c(".acccross" + e)).addClass("ariatoolselect"), setTimeout(function() {
                        n.removeClass("ariatoolselect")
                    }, 500), null != (r = t.aria.owns) ? (0 < (r = new c(t.context).find(r)).length && (i = i.aria.expandShowMethod, window.isAriaDev ? window.ariaDev.forHideRegion = !0 : window.aria.forHideRegion = !0, "click" == i ? l.triggerEvent(r.firstNode, "click") : "focus" == i ? r.firstNode.focus() : l.triggerEvent(new c(t.context).find(r).firstNode, "mouseover")), setTimeout(function() {
                        window.isAriaDev ? window.ariaDev.forHideRegion = null : window.aria.forHideRegion = null, t.addClass("currentRegion" + e), t.focus(), f.play(t.aria.lastText)
                    }, 200)) : (t.focus(), f.play(t.aria.lastText))) : f.play(s.noregiontype.replace("{0}", s["regiontype" + e]))
                }
                u.hostEnable, a.registerEvent(d.globalListen, function(e) {
                    var t = o.eventKeyCode(e);
                    if (u.status && 49 <= t && t <= 54 && e.altKey) return J(t - 48), l.stopBubble(), l.stopDefault(), !0;
                    if (u.status && 96 <= t && t <= 105 && e.altKey) return J(t - 96), l.stopBubble(), l.stopDefault(), !0;
                    if (!o.checkKeyCode(e, o.keyCodeSettings.readtype)) return o.checkKeyCode(e, o.keyCodeSettings.readsrc) ? (O(e), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.help) ? (x(), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.wakupConfig) ? (X(e), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.opVoice) ? (V(e), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.vocierate) ? (U(e), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.changeTheme) ? (q(e), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.fontTob) ? (z(), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.fontTos) ? (W(), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.mouseb) ? (H(e), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.mouseten) ? (K(e), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.reset) ? (N(), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.bigsrc) ? (G(e), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.exitservice) ? (M(), l.stopBubble(), l.stopDefault(), !0) : o.checkKeyCode(e, o.keyCodeSettings.openOldFixed) ? (R(e), l.stopBubble(), l.stopDefault(), !0) : void 0;
                    j(e), l.stopBubble(), l.stopDefault()
                }, 1), e.exports = {
                    start: function() {
                        return new Promise(function(t, e) {
                            s = s || u.Language, h.enable && void 0 !== u.road && (u.inFrame || 0 < new c("#ariaToptoolbar").length || (p.start(document), i.getText(u.themeRoad + "/toolbar.min.html?v=" + decodeURI(document.location.hostname), function(e) {
                                "undefined" == typeof ariaPY && p.addPy(), 0 == new c("#ariaiconstyle").length && new c(l.getContainerDom()).append('<link type="text/css" rel="stylesheet" isaria="true" id="ariaiconstyle" href="' + u.themeRoad + '/css/font.min.css"></link>'), e = l.replaceAll(e, "{road}", u.themeRoad), e = l.replaceAll(e, "noscalevalue", y.getRealScale()), new c(l.getContainerDom()).append(e), "zh-CN" != u.defaultLanguage && (new c("#accscreen-py").hide(), new c("#accscreen-jt").hide()), E(), u.readsrc || (v.start(), f.play(new c("#ariaTipText"))), setTimeout(function() {
                                    new c(".ariavoice").on("click", V), new c(".ariatopfixed").on("click", X), new c(".ariathemebtn").on("click", q), new c(".ariazoomb").on("click", z), new c(".ariazooms").on("click", W), new c(".ariareset").on("click", N), new c(".ariaVoiceRate").on("click", U), new c(".ariaReadtype").on("click", j), new c(".ariamouseb").on("click", H), new c(".ariamouseten").on("click", K), new c(".ariahighlighttool").on("click", B), new c(".ariaexit").on("click", M), new c(".ariabigsrc").on("click", G), new c(".ariablackgroud").on("click", Z), new c("#accscreen-py").on("click", C), new c("#accscreen-jt").on("click", A), new c(".ariaacchelpbook").on("click", x), new c(".ariaReadScreen").on("click", O), new c(".ariaOldFixed").on("click", R), t()
                                }, 350)
                            })))
                        })
                    },
                    end: function() {
                        Y(), _(), g.endMouseTen(), new c("[isaria]").remove(), r && (clearInterval(r), r = null), new c(".ariavoice").off("click", V), new c(".ariatopfixed").off("click", X), new c(".ariathemebtn").off("click", q), new c(".ariazoomb").off("click", z), new c(".ariazooms").off("click", W), new c(".ariareset").off("click", N), new c(".ariaVoiceRate").off("click", U), new c(".ariaReadtype").off("click", j), new c(".ariamouseb").off("click", H), new c(".ariamouseten").off("click", K), new c(".ariahighlighttool").off("click", B), new c(".ariaexit").off("click", M), new c(".ariabigsrc").off("click", G), new c(".ariablackgroud").off("click", Z), new c("#accscreen-py").off("click", C), new c("#accscreen-jt").off("click", A), new c(".ariaacchelpbook").off("click", x), new c(".ariaReadScreen").off("click", O), new c(".ariaOldFixed").off("click", R);
                        var e = new c(".fixedbottom100");
                        l.each(e, function(e, t) {
                            var n = new c(t),
                                t = n.css("bottom");
                            n.css("bottom", t - 150)
                        }), new c(".fixedbottom100").removeClass("fixedbottom100")
                    }
                }
            },
            2219: function(e, t, n) {
                var r = n(7209),
                    i = n(2622),
                    o = n(1968),
                    a = n(3956),
                    s = n(4824),
                    c = n(5285),
                    l = n(2668),
                    u = n(6455),
                    d = n(7942),
                    f = n(5769),
                    g = n(6568);

                function p(e) {
                    var t;
                    e = e || document, i.start(e), r.start(e), o.start(e), s.start(e), a.mouseten && u.start(e), a.bigpoint && (l.setMouseb(e), l.seGolabFixedCss(e)), e == document && (v(document), null == h && (h = setInterval(function() {
                        return a.status || null == clearInterval ? void v(document) : (clearInterval(h), void(h = null))
                    }, 2e3)), t = e, l.setSettingTheme(t), d.iframeMouse(e)), e != document && a.status && g.start(e)
                }
                var h = null;

                function v(e) {
                    f.getAll(e, function(e, t) {
                        e.body && 0 != e.body.childElementCount && "true" != e.body.getAttribute("ariaevent") && 0 < e.body.childElementCount && (p(e), e.body.setAttribute("ariaevent", !0))
                    })
                }
                e.exports = {
                    start: p,
                    end: function() {
                        o.end(), i.end(), r.end(), s.end(), l.end(), clearInterval(h), h = null, f.getAll(document, function(e) {
                            new c("body", e).attr("ariaevent", "false"), i.end(e), r.end(e), l.end(e), o.end(e)
                        })
                    },
                    startBigMouse: function() {
                        l.setMouseb(document), f.getAll(document, function(e) {
                            l.setMouseb(e)
                        })
                    },
                    endBigMouse: function() {
                        l.removeMouseb(), f.getAll(document, function(e) {
                            l.removeMouseb(e)
                        })
                    },
                    startMouseTen: function() {
                        u.start(), f.getAll(document, function(e) {
                            u.start(e)
                        })
                    },
                    endMouseTen: function() {
                        u.end(), f.getAll(document, function(e) {
                            u.end(e)
                        })
                    },
                    setSettingTheme: function() {
                        l.setSettingTheme(), f.getAll(document, function(e) {
                            l.setSettingTheme(e)
                        })
                    }
                }
            },
            7209: function(e, t, n) {
                var r = n(7343),
                    i = n(6242),
                    o = n(646),
                    a = n(344),
                    s = n(8004),
                    c = n(3827),
                    l = n(5430);
                e.exports = {
                    start: function(e) {
                        e = e || document, o.start(e), i.start(e), r.start(e), a.start(e), s.start(e), c.start(e), l.start()
                    },
                    end: function(e) {
                        e = e || document, o.end(e), i.end(e), r.end(e), a.end(e), s.end(e), c.end(e), l.end()
                    }
                }
            },
            2622: function(e, t, n) {
                n(3956);
                var r = n(2668),
                    i = n(8870),
                    o = n(642),
                    a = n(7061);
                n(5285);
                e.exports = {
                    start: function(e) {
                        e = e || document, i.start(e), r.start(e), o.setFontSize(e), a.start(e)
                    },
                    end: function(e) {
                        e = e || document, r.end(e), a.end(e)
                    }
                }
            },
            3957: function(e, t, n) {
                var r, i = n(9246),
                    s = n(5062),
                    c = n(766),
                    l = n(5702),
                    u = n(3956),
                    d = n(5668);
                e.exports = function(o, a) {
                    function e(e) {
                        if (e && 0 < e.length) {
                            e = e.split(",");
                            for (var t = "", n = 0; n < e.length; n++) {
                                var r = e[n];
                                0 < r.length && (t += "," + r)
                            }
                            0 < t.length && (t = t.substring(1, t.length));
                            var i = o.find(t);
                            return 0 == i.length ? new a(t) : i
                        }
                        return null
                    }
                    return r = r || u.Language, {
                        get id() {
                            var e = o.attr("id");
                            return e || (e = i.genID(), o.attr("id", e)), e
                        },
                        get isCenterScale() {
                            return "true" === o.ariaAttr("isCenterScale")
                        },
                        get canSetClass() {
                            return "true" !== o.ariaAttr("skipall") && (!(0 < o.closest("[aria-skipall='true']").length) && ("true" !== o.ariaAttr("skiptheme") || void 0))
                        },
                        set id(e) {
                            o.attr("id", e)
                        },
                        get isregion() {
                            return "true" === o.ariaAttr("region") || !1
                        },
                        get region() {
                            return o.ariaAttr("region")
                        },
                        set region(e) {
                            o.ariaAttr("region", e)
                        },
                        get regions() {
                            return new a("[aria-region='true']")
                        },
                        get regionN() {
                            var e = o.aria.regionElem,
                                t = o.aria.regions;
                            if (!e) return t.firstNode;
                            e = e.index(t.nodeList);
                            return e < t.length - 1 ? t[e + 1] : null
                        },
                        get regionP() {
                            var e = o.aria.regionElem,
                                t = o.aria.regions;
                            if (!e) return t.firstNode;
                            e = e.index(t.nodeList);
                            return 0 < e ? t[e - 1] : null
                        },
                        get expandShowMethod() {
                            return o.ariaAttr("expandShowMethod")
                        },
                        set expandShowMethod(e) {
                            o.ariaAttr("expandShowMethod", e)
                        },
                        get regionElem() {
                            return "true" == o.ariaAttr("region") ? o : new a(o.closest("[aria-region='true']"))
                        },
                        get nodeName() {
                            if (0 === o.length) return null;
                            try {
                                var e = o.firstNode.nodeName.toLowerCase();
                                return -1 < [].indexOf.call(i.HtmlElemRoles.select, e) ? "select" : e
                            } catch (e) {}
                        },
                        get role() {
                            return l.getRole(o)
                        },
                        set role(e) {
                            o.attr("role", e)
                        },
                        get roleText() {
                            return l.getRoleText(o)
                        },
                        get mainText() {
                            return s.mainText(o.aria)
                        },
                        get descText() {
                            return s.descText(o.aria)
                        },
                        get orientation() {
                            return o.ariaAttr("orientation")
                        },
                        set orientation(e) {
                            o.ariaAttr("orientation", e)
                        },
                        get errormessage() {
                            return o.ariaAttr("errormessage") || o.attr("errormessage")
                        },
                        set errormessage(e) {
                            o.ariaAttr("errormessage", e)
                        },
                        get description() {
                            return o.ariaAttr("description")
                        },
                        set description(e) {
                            o.ariaAttr("description", e)
                        },
                        get current() {
                            return o.ariaAttr("current")
                        },
                        set current(e) {
                            o.ariaAttr("current", e)
                        },
                        get modal() {
                            return o.ariaAttr("modal")
                        },
                        set modal(e) {
                            o.ariaAttr("modal", e)
                        },
                        get pressed() {
                            return o.ariaAttr("pressed")
                        },
                        set pressed(e) {
                            o.ariaAttr("pressed", e)
                        },
                        get valueText() {
                            return c(o)
                        },
                        set valueText(e) {
                            o.ariaAttr("valuetext", e), o.val(e), o.text(e)
                        },
                        get valuenow() {
                            return o.ariaAttr("valuenow") || o.val()
                        },
                        set valuenow(e) {
                            o.ariaAttr("valuenow", e), o.val(e)
                        },
                        get valuemin() {
                            return o.ariaAttr("valuemin") || o.attr("min")
                        },
                        get valueminText() {
                            return this.valuemin ? r.min + this.valuemin : null
                        },
                        set valuemin(e) {
                            o.ariaAttr("valuemin", e), o.attr("min", e)
                        },
                        get valuemax() {
                            return o.ariaAttr("valuemax") || o.attr("max")
                        },
                        set valuemax(e) {
                            o.ariaAttr("valuemax", e), o.attr("max", e)
                        },
                        get valuemaxText() {
                            return this.valuemax ? r.max + this.valuemax : null
                        },
                        get value() {
                            return o.val()
                        },
                        get text() {
                            return o.text()
                        },
                        get sort() {
                            return o.ariaAttr("sort") || o.attr("sort")
                        },
                        set sort(e) {
                            o.ariaAttr("sort", e), o.attr("sort", e)
                        },
                        get relevant() {
                            return o.ariaAttr("relevant")
                        },
                        set relevant(e) {
                            o.ariaAttr("relevant", e)
                        },
                        get posinset() {
                            return i.formatInt(o.ariaAttr("posinset"))
                        },
                        set posinset(e) {
                            o.ariaAttr("posinset", e)
                        },
                        get owns() {
                            return o.ariaAttr("owns")
                        },
                        set owns(e) {
                            o.ariaAttr("owns", e)
                        },
                        get ownsfor() {
                            return o.ariaAttr("ownsfor")
                        },
                        set ownsfor(e) {
                            o.ariaAttr("ownsfor", e)
                        },
                        get live() {
                            return o.ariaAttr("live")
                        },
                        set live(e) {
                            o.ariaAttr("live", e)
                        },
                        get computedName() {
                            return o.attr("computedName")
                        },
                        get describedby() {
                            return e(o.ariaAttr("describedby"))
                        },
                        set describedby(e) {
                            o.ariaAttr("describedby", e)
                        },
                        get labelledbyText() {
                            return o.ariaAttr("labelledbyText")
                        },
                        get described() {
                            return o.ariaAttr("described")
                        },
                        set described(e) {
                            o.ariaAttr("described", e)
                        },
                        get labelledby() {
                            return function(e) {
                                var t = o.find(e);
                                if (0 == (t = 0 == t.length ? new a(e) : t).length) return "";
                                var n = "";
                                return i.each(t.nodeList, function(e, t) {
                                    n += t.value || t.textContent, n += ","
                                }), n = i.reMoveHtml(n)
                            }(o.ariaAttr("labelledby") || o.attr("labelled-by"))
                        },
                        set labelledby(e) {
                            o.ariaAttr("labelledby", e)
                        },
                        get toolTipText() {
                            return o.attr("data-tooltip-text")
                        },
                        get labelforText() {
                            var e = o.attr("id");
                            if (!e || 0 === e.length) return null;
                            e = new a("label[for='" + e + "']");
                            return 0 < e.nodeList.length ? e.text() : null
                        },
                        get labelfor() {
                            return o.attr("for")
                        },
                        set labelfor(e) {
                            o.attr("for", e)
                        },
                        get labelWrapperText() {
                            if (0 === o.nodeList.length) return null;
                            var e = o.nodeList[0];
                            if (!e.labels || 0 === e.labels.length) return null;
                            var t = "",
                                e = new a(e.labels[0]).aria.descText;
                            return e && (t += e), t += v.innerHTML
                        },
                        get placeholder() {
                            return o.attr("placeholder")
                        },
                        set placeholder(e) {
                            o.attr("placeholder", e)
                        },
                        get title() {
                            return o.attr("title")
                        },
                        set title(e) {
                            o.attr("title", e)
                        },
                        get alt() {
                            return o.attr("alt")
                        },
                        set alt(e) {
                            o.attr("alt", e)
                        },
                        get label() {
                            return o.ariaAttr("label")
                        },
                        set label(e) {
                            o.ariaAttr("label", e)
                        },
                        get grabbed() {
                            return o.ariaAttr("grabbed")
                        },
                        set grabbed(e) {
                            o.ariaAttr("grabbed", e)
                        },
                        get flowto() {
                            return e(o.ariaAttr("flowto"))
                        },
                        set flowto(e) {
                            o.ariaAttr("flowto", e)
                        },
                        get dropeffect() {
                            return o.ariaAttr("dropeffect")
                        },
                        set dropeffect(e) {
                            o.ariaAttr("dropeffect", e)
                        },
                        get controls() {
                            return e(o.ariaAttr("controls"))
                        },
                        get nextFocus() {
                            return d.nextFocus1(o, a)
                        },
                        get preFocus() {
                            return d.preFocus1(o, a)
                        },
                        get firstFocus() {
                            return d.firstFocus1(o, a)
                        },
                        get lastFocus() {
                            return d.lastFocus1(o, a)
                        },
                        set controls(e) {
                            o.ariaAttr("controls", e)
                        },
                        get busy() {
                            return i.strToObj(o.ariaAttr("busy"))
                        },
                        set busy(e) {
                            o.ariaAttr("busy", e)
                        },
                        get autocomplete() {
                            return o.ariaAttr("autocomplete")
                        },
                        set autocomplete(e) {
                            "none" === e ? o.attr("autocomplete", "off") : o.attr("autocomplete", "on"), o.ariaAttr("autocomplete", e)
                        },
                        get atomic() {
                            return 0 < o.closest("[aria-atomic='true']").length || "true" == o.ariaAttr("atomic")
                        },
                        set atomic(e) {
                            o.ariaAttr("atomic", e)
                        },
                        get atomicElem() {
                            return "true" == o.ariaAttr("atomic") ? o : o.closest("[aria-atomic='true']")
                        },
                        get atomicText() {
                            var e = "true" == o.ariaAttr("atomic") ? o : o.closest("[aria-atomic='true']");
                            return e ? e.textAll(!0) : null
                        },
                        get activedescendant() {
                            return o.ariaAttr("activedescendant")
                        },
                        set activedescendant(e) {
                            o.ariaAttr("activedescendant", e)
                        },
                        get hidden() {
                            return i.strToObj(o.ariaAttr("hidden") || o.isHidden())
                        },
                        set hidden(e) {
                            o.ariaAttr("hidden", e), e ? o.hidden() : o.show()
                        },
                        get expanded() {
                            return i.strToObj(o.ariaAttr("expanded"))
                        },
                        set expanded(e) {
                            o.ariaAttr("expanded", e), o.attr("expanded", e)
                        },
                        get checked() {
                            return -1 < ["checkbox", "radiobox", "radio", "switch"].indexOf(o.aria.role) ? o.firstNode.checked || !1 : i.strToObj(o.attr("checked") || o.ariaAttr("checked"))
                        },
                        set checked(e) {
                            e ? (o.ariaAttr("checked", e), o.attr("checked", e)) : (o.removeAttr("checked"), o.removeAttr("aria-checked"))
                        },
                        get haspopup() {
                            return i.strToObj(o.attr("haspopup") || o.ariaAttr("haspopup"))
                        },
                        set haspopup(e) {
                            o.ariaAttr("haspopup", e), o.attr("haspopup", e)
                        },
                        get disabled() {
                            return o.is("disabled") || i.strToObj(o.attr("disabled") || o.ariaAttr("disabled"))
                        },
                        set disabled(e) {
                            o.ariaAttr("disabled", e), o.attr("disabled", e)
                        },
                        get invalid() {
                            return i.strToObj(o.ariaAttr("invalid"))
                        },
                        set invalid(e) {
                            o.ariaAttr("invalid", e)
                        },
                        get selected() {
                            return i.strToObj(o.is("selected") || o.attr("selected") || o.ariaAttr("selected"))
                        },
                        set selected(e) {
                            o.ariaAttr("selected", e), o.attr("selected", e)
                        },
                        get level() {
                            var e, t = o.ariaAttr("level");
                            return t || (e = this.nodeName, -1 < i.HtmlElemRoles.heading.indexOf(e) && (t = e.replace("h", ""))), i.strToObj(t)
                        },
                        set level(e) {
                            o.ariaAttr("level", e)
                        },
                        get multiselectable() {
                            return i.strToObj(o.ariaAttr("multiselectable"))
                        },
                        set multiselectable(e) {
                            o.ariaAttr("multiselectable", e)
                        },
                        get required() {
                            return i.strToObj(o.ariaAttr("required") || o.attr("required"))
                        },
                        set required(e) {
                            o.ariaAttr("required", e), o.attr("required", e)
                        },
                        get readonly() {
                            return o.is("readonly") || i.strToObj(o.ariaAttr("readonly") || o.attr("readonly"))
                        },
                        set readonly(e) {
                            o.ariaAttr("readonly", e), o.attr("readonly", e)
                        },
                        get multiLine() {
                            return i.strToObj(o.ariaAttr("multiline") || o.attr("multiline"))
                        },
                        set multiLine(e) {
                            o.ariaAttr("multiline", e), o.attr("multiline", e)
                        },
                        get focusable() {
                            if (o.isHidden()) return !1;
                            var e = o.firstNode;
                            if (!e) return !1;
                            if (1 == e.nodeType) {
                                if ("0" == e.getAttribute("tabindex")) return !0;
                                if ("INPUT" == e.tagName) {
                                    var t = e.getAttribute("type");
                                    if (!t || "hidden" != t) return !0
                                }
                                if ("A" == e.tagName && e.getAttribute("href") || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || "BUTTON" == e.tagName) return !0
                            }
                            return !1
                        },
                        set focusable(e) {
                            o.attr("tabindex", e = e || 0)
                        },
                        get skiptheme() {
                            return "true" == o.ariaAttr("skiptheme") || 0 < o.closest("[aria-skiptheme='true']").length || "true" == o.ariaAttr("skipall") || 0 < o.closest("[aria-skipall='true']").length
                        },
                        get skipall() {
                            return "true" == o.ariaAttr("skipall") || 0 < o.closest("[aria-skipall='true']").length
                        },
                        get skipscale() {
                            return "true" == o.ariaAttr("skipscale") || 0 < o.closest("[aria-skipscale='true']").length || "true" == o.ariaAttr("skipall") || 0 < o.closest("[aria-skipall='true']").length
                        },
                        get isDialog() {
                            return -1 < [].indexOf.call(i.HtmlElemRoles.dialog, o.aria.role) || 0 < o.closest(i.arrToSizzle(i.HtmlElemRoles.dialog)).length
                        },
                        get dialog() {
                            if (-1 < [].indexOf.call(i.HtmlElemRoles.dialog, o.aria.role)) return o;
                            var e = o.closest(i.arrToSizzle(i.HtmlElemRoles.dialog));
                            return 0 < e.length ? e : null
                        },
                        get action() {
                            return o.ariaAttr("action")
                        },
                        get lastText() {
                            try {
                                return s.lastDesc(o)
                            } catch (e) {}
                            return ""
                        },
                        get tabindex() {
                            return o.attr("tabindex")
                        },
                        set tabindex(e) {
                            null != e ? o.attr("tabindex", e) : o.removeAttr("tabindex")
                        },
                        get enterownsmethod() {
                            var e = o.ariaAttr("enterownsmethod");
                            return "Ctrl+Enter" == e ? "1" : e
                        },
                        set enterownsmethod(e) {
                            o.ariaAttr("enterownsmethod", e)
                        },
                        get eschide() {
                            return o.ariaAttr("eschide")
                        }
                    }
                }
            },
            1366: function(e, t, n) {
                var r, i = n(8517),
                    o = n(4246),
                    a = n(2190),
                    s = n(4581),
                    c = n(3857),
                    l = n(2668),
                    u = n(8870),
                    d = n(3956),
                    f = n(1284),
                    g = (n(7437), n(7810), n(5300)),
                    p = n(5285),
                    h = !1,
                    v = n(5367);
                d.defaultTheme, d.scale, d.voice.enable, d.status;
                e.exports = {
                    start: function(e) {
                        v.start(), h = !0, r || (clearInterval(r), r = null), g.start(), new p("body").addClass("ariatheme"), f.init().then(function() {
                            if (u.start(), l.setSettingTheme(), i.start(), o.start(), a.start(), d.readsrc || (s.start(), c.start()), d.status = !0, d.callback) try {
                                window[d.callback]()
                            } catch (e) {}
                        })
                    },
                    end: function() {
                        if (v.end(), h = !1, r || (clearInterval(r), r = null), g.end(), i.end(), o.end(), a.end(), !d.readsrc) try {
                            s.end(), c.end()
                        } catch (e) {}
                        l.end(), d.status = !1
                    },
                    getMobileStart: function() {
                        return h
                    },
                    noStart: function() {
                        f.initConfig().then(function() {
                            d.useOldFixed && (g.setHasOldFixed(), g.start(), l.setSettingTheme())
                        })
                    }
                }
            },
            8879: function(e, t, n) {
                var r = n(5285),
                    i = n(3956),
                    o = n(5367),
                    a = (n(2668), n(8870));

                function s(e) {
                    e = new r(e.target);
                    o.play(e.aria.lastText)
                }
                var c = 100,
                    l = 0,
                    u = 0;

                function d(e) {
                    3 == e.target.nodeType || -1 < [].indexOf.call(["I", "STYLE"], e.target.nodeName) || (u + c < (new Date).getTime() && 0 < l ? (l = 0, u = (new Date).getTime(), f(), u = 0) : l++)
                }

                function f(e) {
                    setTimeout(function() {
                        i.status && a.start()
                    }, 50)
                }
                e.exports = {
                    start: function(e) {
                        function t(e) {
                            var t = history[e],
                                n = new Event(e);
                            return function() {
                                var e = t.apply(this, arguments);
                                return n.arguments = arguments, window.dispatchEvent(n), e
                            }
                        }
                        new r(document.body).on("DOMNodeInserted", "*:not(i):not(#text)", d), history.pushState = t("pushState"), history.replaceState = t("replaceState"), window.addEventListener("pushState", f), window.addEventListener("replaceState", f), window.addEventListener("popstate", f), window.addEventListener("hashchange", f), new r(document).on("change", "*", s)
                    },
                    end: function() {
                        window.removeEventListener("popstate", f), window.removeEventListener("pushState", f), window.removeEventListener("replaceState", f), window.removeEventListener("hashchange", f), new r(document).off("change", "*", s), new r(document.body).off("DOMNodeInserted", "*:not(i):not(#text)", d)
                    }
                }
            },
            3857: function(e, t, n) {
                var r = n(2164);

                function i() {
                    r.off(document, "doubletap", "*", o)
                }

                function o(e) {
                    window.doubletap = !0
                }
                e.exports = {
                    start: function() {
                        try {
                            i()
                        } catch (e) {}
                        r.on(document, "doubletap", "*", o)
                    },
                    end: i
                }
            },
            1069: function(e, t, n) {
                var r = n(2164),
                    i = n(3956),
                    o = n(1366);

                function a(e) {
                    window.canRead = !0, 2 == e.fingersCount && (i.status ? o.end() : o.start(), window.ariaHold = !0)
                }
                e.exports = {
                    start: function() {
                        r.on(document, "hold", "*", a), setInterval(function() {
                            i.status && !o.getMobileStart() && o.start(), !i.status && o.getMobileStart() && o.end()
                        }, 500)
                    },
                    end: function() {
                        r.off(document, "hold", "*", a)
                    }
                }
            },
            8927: function(e, t, n) {
                var r = n(5285),
                    o = n(3956),
                    i = n(6121),
                    a = n(2164),
                    s = n(8545),
                    c = n(1366),
                    l = n(2668),
                    u = n(5367);

                function d() {
                    T(), x.init()
                }

                function f() {
                    new r(document.body).removeClass("ariatouchActionNone"), new r("#ariaConfigPanel").addClass("ariaHidden")
                }

                function g() {
                    new r(document.body).addClass("ariatouchActionNone"), new r("#ariaConfigPanel").removeClass("ariaHidden")
                }

                function p() {
                    a.on(document, "click", "#ariaConfigPanel .ariaMask,#ariaConfigPanel #ArialoseSettingPage", f), a.on(document, "click", "#ariaConfigPanel .arianavbar-item", b), a.on(document, "click", "#ariaConfigPanel #zzmsbtn", m), a.on(document, "click", "#ariaConfigPanel #dkmdbtn", v), h.init()
                }
                var h = {
                    init: function() {
                        this.clickFontsize(), this.clickVoice(), this.clickVoiceRate(), this.clickTheme()
                    },
                    clickVoice: function() {
                        document.getElementById("voicebtn").addEventListener("click", function() {
                            x.voiceBtn(this.checked)
                        })
                    },
                    clickVoiceRate: function() {
                        for (var e = document.getElementsByName("voicespeed"), t = 0; t < e.length; t++) e[t].addEventListener("click", function() {
                            x.voiceRate(parseFloat(this.value))
                        })
                    },
                    clickFontsize: function() {
                        for (var e = document.getElementsByName("fontsize"), t = 0; t < e.length; t++) e[t].addEventListener("click", function() {
                            x.fontScale(parseFloat(this.value))
                        })
                    },
                    clickTheme: function() {
                        document.addEventListener("change", function(e) {
                            e = e.srcElement || e.target;
                            "ariasettheme" == e.name && x.setTheme(e.value)
                        }, !1)
                    }
                };

                function v() {
                    if (x.readSrc(this.checked), this.checked && !o.status) return c.start(), w(), void(o.status = !0);
                    o.status = !1, window.isAriaDev ? this.checked || "undefined" == typeof ariaDev || "function" != typeof ariaDev.end || ariaDev.end() : this.checked || "undefined" == typeof aria || "function" != typeof aria.end || aria.end()
                }

                function m() {
                    if (x.showDetail(this.checked), this.checked && !o.status) return c.start(), w(), void(o.status = !0);
                    o.status = !1, window.isAriaDev ? this.checked || "undefined" == typeof ariaDev || "function" != typeof ariaDev.end || ariaDev.end() : this.checked || "undefined" == typeof aria || "function" != typeof aria.end || aria.end()
                }

                function b(e) {
                    var t = new r(this);
                    t.hasClass("active") || (new r("#ariaConfigPanel .active").addClass("noactive").removeClass("active").ariaAttr("selected", "false"), t.addClass("active").ariaAttr("selected", "true"), new r("#ariaConfigPanel .ariacontent").addClass("ariaHidden"), t = t.attr("for"), new r("#ariaConfigPanel #" + t).removeClass("ariaHidden"))
                }

                function y(e, t) {
                    for (var n = document.getElementsByName(e), r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (i.value == t) {
                            i.checked = !0;
                            break
                        }
                    }
                }

                function w() {
                    if (o.callback) try {
                        window[o.callback](aria)
                    } catch (e) {}
                }
                var x = {
                        init: function() {
                            this.showDetail(), this.voiceBtn(), this.voiceRate(), this.fontScale(), this.setTheme(), this.readSrc()
                        },
                        readSrc: function(e) {
                            void 0 === e ? e = s.readSrc() : (s.readSrc(e), this.showDetail(), this.voiceBtn(), this.voiceRate(), this.fontScale(), this.setTheme()), document.getElementById("dkmdbtn").checked = e
                        },
                        showDetail: function(e) {
                            void 0 === e ? void 0 === (e = s.zzms()) && (e = !1) : (s.zzms(e), this.voiceBtn(), this.voiceRate(), this.fontScale(), this.setTheme(), this.readSrc()), (document.getElementById("zzmsbtn").checked = e) ? new r("#zzmssub").removeClass("ariaHidden") : new r("#zzmssub").addClass("ariaHidden")
                        },
                        voiceBtn: function(e) {
                            void 0 === e ? e = s.voice : s.voice = e, (document.getElementById("voicebtn").checked = e) ? (new r("#readrate").removeClass("ariaHidden"), u.start()) : (new r("#readrate").addClass("ariaHidden"), u.end())
                        },
                        voiceRate: function(e) {
                            void 0 === e ? e = s.voiceRate || 1 : s.voiceRate = e, y("voicespeed", e)
                        },
                        fontScale: function(e) {
                            void 0 === e ? e = s.scale || 1 : s.scale = e, y("fontsize", e)
                        },
                        setTheme: function(e) {
                            void 0 === e ? e = s.theme || "default" : s.theme = e, y("ariasettheme", e)
                        }
                    },
                    T = function() {
                        function e(e) {
                            var t = document.createElement("li"),
                                n = document.createElement("label"),
                                r = document.createElement("input");
                            r.value = e.name, r.type = "radio", r.name = "ariasettheme", r.id = "aira" + e.name, r.setAttribute("aria-label", "当前主题" + e.displayName), t.appendChild(r), n.setAttribute("role", "radio"), n.setAttribute("for", "aira" + e.name), n.setAttribute("aria-label", "当前主题" + e.displayName), n.innerHTML = e.displayName, t.appendChild(n), i.appendChild(t)
                        }
                        var t = o.Themes,
                            i = document.getElementById("ariacolorset");
                        i.innerHTML = "", e({
                            name: "default",
                            displayName: "默认"
                        });
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n].value;
                            "default" != r.name && e(r)
                        }
                    },
                    s = {
                        get voice() {
                            return o.voice.enable
                        },
                        set voice(e) {
                            e || u.stop(), o.voice.enable = e
                        },
                        get voiceRate() {
                            return o.voice.rate
                        },
                        set voiceRate(e) {
                            o.voice.rate = e
                        },
                        get scale() {
                            return o.scale
                        },
                        set scale(e) {
                            o.scale = e, l.setBodyTran()
                        },
                        get themes() {
                            return o.Themes
                        },
                        get theme() {
                            return o.defaultTheme
                        },
                        set theme(e) {
                            o.defaultTheme = e, l.setSettingTheme()
                        },
                        readSrc: function(e) {
                            if (void 0 === e) return o.status && o.readsrc;
                            o.readsrc = e, (o.status = e) && (o.voice.enable = !1, o.defaultTheme = "default", o.scale = 1, u.stop())
                        },
                        zzms: function(e) {
                            if (void 0 === e) return o.status && !o.readsrc;
                            e && (o.readsrc = !1, o.voice.enable = !0)
                        }
                    };
                e.exports = {
                    loadConfig: function() {
                        0 == new r("#ariaConfigPanel").length ? i.getText(o.themeRoad + "/wap.min.html", function(e) {
                            new r(document.body).append(e), d(), p(), g()
                        }) : (d(), p(), g())
                    }
                }
            },
            2190: function(e, t, n) {
                var r = n(2164),
                    o = n(5285),
                    a = n(9246),
                    s = n(5367),
                    c = n(642);
                var l = 0;

                function i(e) {
                    var t = e.fingersCount,
                        n = e.distance,
                        e = e.direction;
                    if (!(n < 100) && window.startSwipe) {
                        if (1 == t) {
                            var n = window.ariaFocusElem,
                                r = new o(n),
                                i = r;
                            switch (e) {
                                case "left":
                                    i = r.aria.preFocus;
                                    break;
                                case "right":
                                    i = r.aria.nextFocus
                            }(i = !(window.ariaFocusElem = i).jTool ? new o(i) : i) != r && (i.focus(), s.play(i.aria.lastText), c.setClass(i), a.stopDefault(), a.stopBubble())
                        }
                        if (2 == t) switch (e) {
                            case "up":
                                a.scroll(0, 0);
                                break;
                            case "down":
                                a.scroll(0, document.body.scrollHeight);
                                break;
                            case "right":
                                l += 1, u();
                                break;
                            case "left":
                                --l, u()
                        }
                        window.startSwipe = !1
                    }
                }

                function u() {
                    var e = new o("[aria-region='true']");
                    0 != e.length && ((l = l < 0 ? e.length - 1 : l) >= e.length && (l = 0), (e = new o(e[l])).focus(), c.setClass(e), s.play(e.aria.lastText))
                }
                e.exports = {
                    start: function() {
                        r.on(document, "swipe", "*", i)
                    },
                    end: function() {
                        r.off(document, "swipe", "*", i)
                    }
                }
            },
            4581: function(e, t, n) {
                var r = n(2164),
                    i = n(5367),
                    o = n(5285),
                    a = n(642),
                    s = (n(9246), n(3956), null);

                function c() {
                    r.off(document, "tap", "*", u)
                }
                var l = ["p"];

                function u(e) {
                    window.canRead = !0;
                    var t = new o(e.target);
                    [].indexOf.call(l, t.aria.role) < 0 && 3 < t.child().length || s != e.target && (s = e.target, window.ariaFocusElem = t, i.play(t.aria.lastText), a.setClass(t, document), setTimeout(function() {
                        s = null
                    }, 5e3))
                }
                e.exports = {
                    start: function() {
                        try {
                            c()
                        } catch (e) {}
                        r.on(document, "tap", "*", u)
                    },
                    end: c
                }
            },
            2164: function(e, t, n) {
                "use strict";
                var r;
                void 0 === (r = "function" == typeof(r = function() {
                    var f = {
                        PCevts: {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            touchcancel: "mouseout"
                        }
                    };
                    f.hasTouch = "ontouchstart" in window, f.getType = function(e) {
                        return Object.prototype.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
                    }, f.getSelector = function(e) {
                        if (e.id) return "#" + e.id;
                        if (e.className) {
                            var t = e.className.split(/\s+/);
                            return "." + t.join(".")
                        } else if (e === document) return "body";
                        else return e.tagName.toLowerCase()
                    }, f.matchSelector = function(e, t) {
                        return e.webkitMatchesSelector(t)
                    }, f.getEventListeners = function(e) {
                        return e.listeners
                    }, f.getPCevts = function(e) {
                        return this.PCevts[e] || e
                    }, f.forceReflow = function() {
                        var e = "reflowDivBlock";
                        var t = document.getElementById(e);
                        if (!t) {
                            t = document.createElement("div");
                            t.id = e;
                            document.body.appendChild(t)
                        }
                        var n = t.parentNode;
                        var r = t.nextSibling;
                        n.removeChild(t);
                        n.insertBefore(t, r)
                    }, f.simpleClone = function(e) {
                        return Object.create(e)
                    }, f.getPosOfEvent = function(e) {
                        if (this.hasTouch) {
                            var t = [];
                            var n = null;
                            for (var r = 0, i = e.touches.length; r < i; r++) {
                                n = e.touches[r];
                                t.push({
                                    x: n.pageX,
                                    y: n.pageY
                                })
                            }
                            return t
                        } else return [{
                            x: e.pageX,
                            y: e.pageY
                        }]
                    }, f.getDistance = function(e, t) {
                        var n = t.x - e.x,
                            r = t.y - e.y;
                        return Math.sqrt(n * n + r * r)
                    }, f.getFingers = function(e) {
                        return e.touches ? e.touches.length : 1
                    }, f.calScale = function(e, t) {
                        if (e.length >= 2 && t.length >= 2) {
                            var n = this.getDistance(e[1], e[0]);
                            var r = this.getDistance(t[1], t[0]);
                            return r / n
                        }
                        return 1
                    }, f.getAngle = function(e, t) {
                        return Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI
                    }, f.getAngle180 = function(e, t) {
                        var n = Math.atan((t.y - e.y) * -1 / (t.x - e.x)) * (180 / Math.PI);
                        return n < 0 ? n + 180 : n
                    }, f.getDirectionFromAngle = function(e) {
                        var t = {
                            up: e < -45 && e > -135,
                            down: e >= 45 && e < 135,
                            left: e >= 135 || e <= -135,
                            right: e >= -45 && e <= 45
                        };
                        for (var n in t)
                            if (t[n]) return n;
                        return null
                    }, f.getXYByElement = function(e) {
                        var t = 0,
                            n = 0;
                        while (e.offsetParent) {
                            t += e.offsetLeft;
                            n += e.offsetTop;
                            e = e.offsetParent
                        }
                        return {
                            left: t,
                            top: n
                        }
                    }, f.reset = function() {
                        i = t = o = null;
                        s = x = b = l = false;
                        y = false;
                        v = {};
                        d = false
                    }, f.isTouchMove = function(e) {
                        return e.type === "touchmove" || e.type === "mousemove"
                    }, f.isTouchEnd = function(e) {
                        return e.type === "touchend" || e.type === "mouseup" || e.type === "touchcancel"
                    }, f.env = function() {
                        var e = {},
                            t = navigator.userAgent,
                            n = t.match(/(Android)[\s\/]+([\d\.]+)/),
                            r = t.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),
                            i = t.match(/(Windows\s+Phone)\s([\d\.]+)/),
                            o = /WebKit\/[\d.]+/i.test(t),
                            a = r ? navigator.standalone ? o : /Safari/i.test(t) && !/CriOS/i.test(t) && !/MQQBrowser/i.test(t) : false;
                        if (n) {
                            e.android = true;
                            e.version = n[2]
                        }
                        if (r) {
                            e.ios = true;
                            e.version = r[2].replace(/_/g, ".");
                            e.ios7 = /^7/.test(e.version);
                            if (r[1] === "iPad") e.ipad = true;
                            else if (r[1] === "iPhone") {
                                e.iphone = true;
                                e.iphone5 = screen.height == 568
                            } else if (r[1] === "iPod") e.ipod = true
                        }
                        if (i) {
                            e.wp = true;
                            e.version = i[2];
                            e.wp8 = /^8/.test(e.version)
                        }
                        if (o) e.webkit = true;
                        if (a) e.safari = true;
                        return e
                    }();
                    var g = {
                            proxyid: 0,
                            proxies: [],
                            trigger: function(e, t, n) {
                                n = n || {};
                                var r, i = {
                                    bubbles: true,
                                    cancelable: true,
                                    detail: n
                                };
                                try {
                                    if (typeof CustomEvent !== "undefined") {
                                        r = new CustomEvent(t, i);
                                        if (e) e.dispatchEvent(r)
                                    } else {
                                        r = document.createEvent("CustomEvent");
                                        r.initCustomEvent(t, true, true, n);
                                        if (e) e.dispatchEvent(r)
                                    }
                                } catch (e) {
                                    console.warn("Touch.js is not supported by environment.")
                                }
                            },
                            bind: function(e, t, r) {
                                e.listeners = e.listeners || {};
                                if (!e.listeners[t]) e.listeners[t] = [r];
                                else e.listeners[t].push(r);
                                var n = function(e) {
                                    if (f.env.ios7) f.forceReflow();
                                    e.originEvent = e;
                                    for (var t in e.detail)
                                        if (t !== "type") e[t] = e.detail[t];
                                    e.startRotate = function() {
                                        d = true
                                    };
                                    var n = r.call(e.target, e);
                                    if (typeof n !== "undefined" && !n) {
                                        e.stopPropagation();
                                        e.preventDefault()
                                    }
                                };
                                r.proxy = r.proxy || {};
                                if (!r.proxy[t]) r.proxy[t] = [this.proxyid++];
                                else r.proxy[t].push(this.proxyid++);
                                this.proxies.push(n);
                                if (e.addEventListener) e.addEventListener(t, n, false)
                            },
                            unbind: function(t, n, e) {
                                if (!e) {
                                    var r = t.listeners[n];
                                    if (r && r.length) r.forEach(function(e) {
                                        t.removeEventListener(n, e, false)
                                    })
                                } else {
                                    var i = e.proxy[n];
                                    if (i && i.length) i.forEach(function(e) {
                                        if (t.removeEventListener) t.removeEventListener(n, this.proxies[this.proxyid], false)
                                    })
                                }
                            },
                            delegate: function(s, e, c, l) {
                                var t = function(e) {
                                    var t, n;
                                    e.originEvent = e;
                                    for (var r in e.detail)
                                        if (r !== "type") e[r] = e.detail[r];
                                    e.startRotate = function() {
                                        d = true
                                    };
                                    var i = f.getSelector(s) + " " + c;
                                    var o = f.matchSelector(e.target, i);
                                    var a = f.matchSelector(e.target, i + " " + e.target.nodeName);
                                    if (!o && a) {
                                        if (f.env.ios7) f.forceReflow();
                                        t = e.target;
                                        while (!f.matchSelector(t, i)) t = t.parentNode;
                                        n = l.call(e.target, e);
                                        if (typeof n !== "undefined" && !n) {
                                            e.stopPropagation();
                                            e.preventDefault()
                                        }
                                    } else {
                                        if (f.env.ios7) f.forceReflow();
                                        if (o || a) {
                                            n = l.call(e.target, e);
                                            if (typeof n !== "undefined" && !n) {
                                                e.stopPropagation();
                                                e.preventDefault()
                                            }
                                        }
                                    }
                                };
                                l.proxy = l.proxy || {};
                                if (!l.proxy[e]) l.proxy[e] = [this.proxyid++];
                                else l.proxy[e].push(this.proxyid++);
                                this.proxies.push(t);
                                s.listeners = s.listeners || {};
                                if (!s.listeners[e]) s.listeners[e] = [t];
                                else s.listeners[e].push(t);
                                if (s.addEventListener) s.addEventListener(e, t, false)
                            },
                            undelegate: function(t, n, e, r) {
                                if (!r) {
                                    var i = t.listeners[n];
                                    i.forEach(function(e) {
                                        t.removeEventListener(n, e, false)
                                    })
                                } else try {
                                    var o = r.proxy[n];
                                    var a = this;
                                    if (o.length) o.forEach(function(e) {
                                        if (t.removeEventListener) t.removeEventListener(n, a.proxies[e], false)
                                    })
                                } catch (e) {}
                            }
                        },
                        p = {
                            tap: true,
                            doubleTap: true,
                            tapMaxDistance: 10,
                            hold: true,
                            tapTime: 200,
                            holdTime: 650,
                            maxDoubleTapInterval: 300,
                            swipe: true,
                            swipeTime: 300,
                            swipeMinDistance: 18,
                            swipeFactor: 5,
                            drag: true,
                            pinch: true,
                            minScaleRate: 0,
                            minRotationAngle: 0
                        },
                        h = {
                            TOUCH_START: "touchstart",
                            TOUCH_MOVE: "touchmove",
                            TOUCH_END: "touchend",
                            TOUCH_CANCEL: "touchcancel",
                            MOUSE_DOWN: "mousedown",
                            MOUSE_MOVE: "mousemove",
                            MOUSE_UP: "mouseup",
                            CLICK: "click",
                            PINCH_START: "pinchstart",
                            PINCH_END: "pinchend",
                            PINCH: "pinch",
                            PINCH_IN: "pinchin",
                            PINCH_OUT: "pinchout",
                            ROTATION_LEFT: "rotateleft",
                            ROTATION_RIGHT: "rotateright",
                            ROTATION: "rotate",
                            SWIPE_START: "swipestart",
                            SWIPING: "swiping",
                            SWIPE_END: "swipeend",
                            SWIPE_LEFT: "swipeleft",
                            SWIPE_RIGHT: "swiperight",
                            SWIPE_UP: "swipeup",
                            SWIPE_DOWN: "swipedown",
                            SWIPE: "swipe",
                            DRAG: "drag",
                            DRAGSTART: "dragstart",
                            DRAGEND: "dragend",
                            HOLD: "hold",
                            TAP: "tap",
                            DOUBLE_TAP: "doubletap"
                        },
                        v = {
                            start: null,
                            move: null,
                            end: null
                        },
                        m = 0,
                        e = 0,
                        i = null,
                        t = null,
                        o = null,
                        b = false,
                        l = false,
                        y = false,
                        w = {},
                        x = false,
                        a = null,
                        s = false,
                        n = null,
                        c = null,
                        u = 1,
                        d = false,
                        T = [],
                        C = 0,
                        k = 0,
                        A = 0,
                        E = null,
                        S = {
                            getAngleDiff: function(e) {
                                var t = parseInt(C - f.getAngle180(e[0], e[1]), 10);
                                var n = 0;
                                while (Math.abs(t - k) > 90 && n++ < 50)
                                    if (k < 0) t -= 180;
                                    else t += 180;
                                k = parseInt(t, 10);
                                return k
                            },
                            pinch: function(e) {
                                var t = e.target;
                                if (p.pinch) {
                                    if (!x) return;
                                    if (f.getFingers(e) < 2)
                                        if (!f.isTouchEnd(e)) return;
                                    var n = f.calScale(v.start, v.move);
                                    var r = this.getAngleDiff(v.move);
                                    var i = {
                                        type: "",
                                        originEvent: e,
                                        scale: n,
                                        rotation: r,
                                        direction: r > 0 ? "right" : "left",
                                        fingersCount: f.getFingers(e)
                                    };
                                    if (!l) {
                                        l = true;
                                        i.fingerStatus = "start";
                                        g.trigger(t, h.PINCH_START, i)
                                    } else if (f.isTouchMove(e)) {
                                        i.fingerStatus = "move";
                                        g.trigger(t, h.PINCH, i)
                                    } else if (f.isTouchEnd(e)) {
                                        i.fingerStatus = "end";
                                        g.trigger(t, h.PINCH_END, i);
                                        f.reset()
                                    }
                                    if (Math.abs(1 - n) > p.minScaleRate) {
                                        var o = f.simpleClone(i);
                                        var a = 1e-11;
                                        if (n > u) {
                                            u = n - a;
                                            g.trigger(t, h.PINCH_OUT, o, false)
                                        } else if (n < u) {
                                            u = n + a;
                                            g.trigger(t, h.PINCH_IN, o, false)
                                        }
                                        if (f.isTouchEnd(e)) u = 1
                                    }
                                    if (Math.abs(r) > p.minRotationAngle) {
                                        var s = f.simpleClone(i),
                                            c;
                                        c = r > 0 ? h.ROTATION_RIGHT : h.ROTATION_LEFT;
                                        g.trigger(t, c, s, false);
                                        g.trigger(t, h.ROTATION, i)
                                    }
                                }
                            },
                            rotateSingleFinger: function(e) {
                                var t = e.target;
                                if (d && f.getFingers(e) < 2) {
                                    if (!v.move) return;
                                    if (T.length < 2) {
                                        var n = f.getXYByElement(t);
                                        T = [{
                                            x: n.left + t.offsetWidth / 2,
                                            y: n.top + t.offsetHeight / 2
                                        }, v.move[0]];
                                        C = parseInt(f.getAngle180(T[0], T[1]), 10)
                                    }
                                    var r = [T[0], v.move[0]];
                                    var i = this.getAngleDiff(r);
                                    var o = {
                                        type: "",
                                        originEvent: e,
                                        rotation: i,
                                        direction: i > 0 ? "right" : "left",
                                        fingersCount: f.getFingers(e)
                                    };
                                    if (f.isTouchMove(e)) o.fingerStatus = "move";
                                    else if (f.isTouchEnd(e) || e.type === "mouseout") {
                                        o.fingerStatus = "end";
                                        g.trigger(t, h.PINCH_END, o);
                                        f.reset()
                                    }
                                    var a = i > 0 ? h.ROTATION_RIGHT : h.ROTATION_LEFT;
                                    g.trigger(t, a, o);
                                    g.trigger(t, h.ROTATION, o)
                                }
                            },
                            swipe: function(e) {
                                var t = e.target;
                                if (!x || !v.move || f.getFingers(e) > 1) return;
                                var n = Date.now();
                                var r = n - m;
                                var i = f.getDistance(v.start[0], v.move[0]);
                                var o = {
                                    x: v.move[0].x - w.left,
                                    y: v.move[0].y - w.top
                                };
                                var a = f.getAngle(v.start[0], v.move[0]);
                                var s = f.getDirectionFromAngle(a);
                                var c = r / 1e3;
                                var l = (10 - p.swipeFactor) * 10 * c * c;
                                var u = {
                                    type: h.SWIPE,
                                    originEvent: e,
                                    position: o,
                                    direction: s,
                                    distance: i,
                                    distanceX: v.move[0].x - v.start[0].x,
                                    distanceY: v.move[0].y - v.start[0].y,
                                    x: v.move[0].x - v.start[0].x,
                                    y: v.move[0].y - v.start[0].y,
                                    angle: a,
                                    duration: r,
                                    fingersCount: f.getFingers(e),
                                    factor: l
                                };
                                if (p.swipe) {
                                    var d = function() {
                                        var e = h;
                                        switch (s) {
                                            case "up":
                                                g.trigger(t, e.SWIPE_UP, u);
                                                break;
                                            case "down":
                                                g.trigger(t, e.SWIPE_DOWN, u);
                                                break;
                                            case "left":
                                                g.trigger(t, e.SWIPE_LEFT, u);
                                                break;
                                            case "right":
                                                g.trigger(t, e.SWIPE_RIGHT, u);
                                                break
                                        }
                                    };
                                    if (!b) {
                                        u.fingerStatus = u.swipe = "start";
                                        b = true;
                                        g.trigger(t, h.SWIPE_START, u)
                                    } else if (f.isTouchMove(e)) {
                                        u.fingerStatus = u.swipe = "move";
                                        g.trigger(t, h.SWIPING, u);
                                        if (r > p.swipeTime && r < p.swipeTime + 50 && i > p.swipeMinDistance) {
                                            d();
                                            g.trigger(t, h.SWIPE, u, false)
                                        }
                                    } else if (f.isTouchEnd(e) || e.type === "mouseout") {
                                        u.fingerStatus = u.swipe = "end";
                                        g.trigger(t, h.SWIPE_END, u);
                                        if (p.swipeTime > r && i > p.swipeMinDistance) {
                                            d();
                                            g.trigger(t, h.SWIPE, u, false)
                                        }
                                    }
                                }
                                if (p.drag)
                                    if (!y) {
                                        u.fingerStatus = u.swipe = "start";
                                        y = true;
                                        g.trigger(t, h.DRAGSTART, u)
                                    } else if (f.isTouchMove(e)) {
                                    u.fingerStatus = u.swipe = "move";
                                    g.trigger(t, h.DRAG, u)
                                } else if (f.isTouchEnd(e)) {
                                    u.fingerStatus = u.swipe = "end";
                                    g.trigger(t, h.DRAGEND, u)
                                }
                            },
                            tap: function(e) {
                                var t = e.target;
                                if (p.tap) {
                                    var n = Date.now();
                                    var r = n - m;
                                    var i = f.getDistance(v.start[0], v.move ? v.move[0] : v.start[0]);
                                    clearTimeout(a);
                                    var o = function() {
                                        if (E && p.doubleTap && m - A < p.maxDoubleTapInterval) {
                                            var e = f.getDistance(E, v.start[0]);
                                            if (e < 16) return true
                                        }
                                        return false
                                    }();
                                    if (o) {
                                        clearTimeout(c);
                                        g.trigger(t, h.DOUBLE_TAP, {
                                            type: h.DOUBLE_TAP,
                                            originEvent: e,
                                            position: v.start[0]
                                        });
                                        return
                                    }
                                    if (p.tapMaxDistance < i) return;
                                    if (p.holdTime > r && f.getFingers(e) <= 1) {
                                        s = true;
                                        A = n;
                                        E = v.start[0];
                                        c = setTimeout(function() {
                                            g.trigger(t, h.TAP, {
                                                type: h.TAP,
                                                originEvent: e,
                                                fingersCount: f.getFingers(e),
                                                position: E
                                            })
                                        }, p.tapTime)
                                    }
                                }
                            },
                            hold: function(t) {
                                var n = t.target;
                                if (p.hold) {
                                    clearTimeout(a);
                                    a = setTimeout(function() {
                                        if (!v.start) return;
                                        var e = f.getDistance(v.start[0], v.move ? v.move[0] : v.start[0]);
                                        if (p.tapMaxDistance < e) return;
                                        if (!s) g.trigger(n, "hold", {
                                            type: "hold",
                                            originEvent: t,
                                            fingersCount: f.getFingers(t),
                                            position: v.start[0]
                                        })
                                    }, p.holdTime)
                                }
                            }
                        },
                        r = function(e) {
                            var t = e.target;
                            switch (e.type) {
                                case "touchstart":
                                case "mousedown":
                                    T = [];
                                    x = true;
                                    if (!v.start || v.start.length < 2) v.start = f.getPosOfEvent(e);
                                    if (f.getFingers(e) >= 2) C = parseInt(f.getAngle180(v.start[0], v.start[1]), 10);
                                    m = Date.now();
                                    i = e;
                                    w = {};
                                    var n = t.getBoundingClientRect();
                                    var r = document.documentElement;
                                    w = {
                                        top: n.top + (window.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                                        left: n.left + (window.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
                                    };
                                    S.hold(e);
                                    break;
                                case "touchmove":
                                case "mousemove":
                                    if (!x || !v.start) return;
                                    v.move = f.getPosOfEvent(e);
                                    if (f.getFingers(e) >= 2) S.pinch(e);
                                    else if (d) S.rotateSingleFinger(e);
                                    else S.swipe(e);
                                    break;
                                case "touchend":
                                case "touchcancel":
                                case "mouseup":
                                case "mouseout":
                                    if (!x) return;
                                    o = e;
                                    if (l) S.pinch(e);
                                    else if (d) S.rotateSingleFinger(e);
                                    else if (b) S.swipe(e);
                                    else S.tap(e);
                                    f.reset();
                                    C = 0;
                                    k = 0;
                                    if (e.touches && e.touches.length === 1) {
                                        x = true;
                                        d = true
                                    }
                                    break
                            }
                        },
                        O = function() {
                            var e, n, r, i, t = arguments;
                            if (t.length < 2 || t > 4) return console.error("unexpected arguments!");
                            var o = f.getType(t[0]) === "string" ? document.querySelectorAll(t[0]) : t[0];
                            o = o.length ? Array.prototype.slice.call(o) : [o];
                            if (t.length === 3 && f.getType(t[1]) === "string") {
                                e = t[1].split(" ");
                                n = t[2];
                                e.forEach(function(t) {
                                    if (!f.hasTouch) t = f.getPCevts(t);
                                    o.forEach(function(e) {
                                        g.bind(e, t, n)
                                    })
                                });
                                return
                            }

                            function a(t) {
                                if (!f.hasTouch) t = f.getPCevts(t);
                                o.forEach(function(e) {
                                    g.delegate(e, t, i, r[t])
                                })
                            }
                            if (t.length === 3 && f.getType(t[1]) === "object") {
                                r = t[1];
                                i = t[2];
                                for (var s in r) a(s);
                                return
                            }

                            function c(t) {
                                if (!f.hasTouch) t = f.getPCevts(t);
                                o.forEach(function(e) {
                                    g.bind(e, t, r[t])
                                })
                            }
                            if (t.length === 2 && f.getType(t[1]) === "object") {
                                r = t[1];
                                for (var l in r) c(l);
                                return
                            }
                            if (t.length === 4 && f.getType(t[2]) === "object") {
                                e = t[1].split(" ");
                                n = t[3];
                                e.forEach(function(t) {
                                    if (!f.hasTouch) t = f.getPCevts(t);
                                    o.forEach(function(e) {
                                        g.bind(e, t, n)
                                    })
                                });
                                return
                            }
                            if (t.length === 4) {
                                var u = o[0];
                                e = t[1].split(" ");
                                i = t[2];
                                n = t[3];
                                e.forEach(function(e) {
                                    if (!f.hasTouch) e = f.getPCevts(e);
                                    g.delegate(u, e, i, n)
                                });
                                return
                            }
                        },
                        N = function() {
                            var e, n;
                            var r = arguments;
                            if (r.length < 1 || r.length > 4) return console.error("unexpected arguments!");
                            var t = f.getType(r[0]) === "string" ? document.querySelectorAll(r[0]) : r[0];
                            t = t.length ? Array.prototype.slice.call(t) : [t];
                            if (r.length === 1 || r.length === 2) {
                                t.forEach(function(t) {
                                    e = r[1] ? r[1].split(" ") : Object.keys(t.listeners);
                                    if (e.length) e.forEach(function(e) {
                                        if (!f.hasTouch) e = f.getPCevts(e);
                                        g.unbind(t, e);
                                        g.undelegate(t, e)
                                    })
                                });
                                return
                            }
                            if (r.length === 3 && f.getType(r[2]) === "function") {
                                n = r[2];
                                t.forEach(function(t) {
                                    e = r[1].split(" ");
                                    e.forEach(function(e) {
                                        if (!f.hasTouch) e = f.getPCevts(e);
                                        g.unbind(t, e, n)
                                    })
                                });
                                return
                            }
                            if (r.length === 3 && f.getType(r[2]) === "string") {
                                var i = r[2];
                                t.forEach(function(t) {
                                    e = r[1].split(" ");
                                    e.forEach(function(e) {
                                        if (!f.hasTouch) e = f.getPCevts(e);
                                        g.undelegate(t, e, i)
                                    })
                                });
                                return
                            }
                            if (r.length === 4) {
                                n = r[3];
                                t.forEach(function(t) {
                                    e = r[1].split(" ");
                                    e.forEach(function(e) {
                                        if (!f.hasTouch) e = f.getPCevts(e);
                                        g.undelegate(t, e, i, n)
                                    })
                                });
                                return
                            }
                        },
                        L = function(e, t, n) {
                            var r = arguments;
                            if (!f.hasTouch) t = f.getPCevts(t);
                            var i = f.getType(r[0]) === "string" ? document.querySelectorAll(r[0]) : r[0];
                            i = i.length ? Array.prototype.call(i) : [i];
                            i.forEach(function(e) {
                                g.trigger(e, t, n)
                            })
                        };

                    function R() {
                        if (!f.hasTouch) return;
                        var e = "mouseup mousedown mousemove mouseout",
                            t = "touchstart touchmove touchend touchcancel";
                        var n = f.hasTouch ? t : e;
                        n.split(" ").forEach(function(e) {
                            document.addEventListener(e, r, false)
                        })
                    }
                    R();
                    var I = {};
                    return I.on = I.bind = I.live = O, I.off = I.unbind = I.die = N, I.config = p, I.trigger = L, I
                }) ? r.call(t, n, t, e) : r) || (e.exports = r)
            },
            4246: function(e, t, n) {
                var r = n(2164),
                    i = n(3956);

                function o() {
                    r.off(document, "touchend", "*", a)
                }

                function a(e) {
                    i.readsrc || window.doubletap && !window.ariaHold || i.voice.enable && (e.preventDefault(), e.stopPropagation())
                }
                e.exports = {
                    start: function() {
                        try {
                            o()
                        } catch (e) {}
                        r.on(document, "touchend", "*", a)
                    },
                    end: o
                }
            },
            8517: function(e, t, n) {
                var r = n(2164);

                function i() {
                    r.off(document, "touchstart", "*", o)
                }

                function o(e) {
                    window.doubletap = !1, window.canRead = !0, window.startSwipe = !0, window.ariaHold = !1
                }
                e.exports = {
                    start: function() {
                        try {
                            i()
                        } catch (e) {}
                        r.on(document, "touchstart", "*", o)
                    },
                    end: i
                }
            },
            5702: function(e, t, n) {
                var r = n(9246),
                    i = n(1284);
                e.exports = {
                    getRole: function(e) {
                        if (0 !== e.nodeList.length) {
                            var t = e,
                                e = (t = 3 == t.firstNode.nodeType ? t.parent() : t).attr("role");
                            if (t.hasClass("alert") && (e = "alert"), t.hasClass("nav") && (e = "navigation"), t.hasClass("alertdialog") && (e = "alertdialog"), t.hasClass("log") && (e = "log"), t.hasClass("menu") && (e = "menu"), t.hasClass("menubar") && (e = "menubar"), t.hasClass("menuitem") && (e = "menuitem"), t.hasClass("row") && (e = "row"), t.hasClass("separator") && (e = "separator"), t.hasClass("slider") && (e = "slider"), t.hasClass("spinbutton") && (e = "spinbutton"), t.hasClass("tab") && (e = "tab"), t.hasClass("tablist") && (e = "tablist"), t.hasClass("tabpanel") && (e = "tabpanel"), t.hasClass("timer") && (e = "timer"), t.hasClass("toolbar") && (e = "toolbar"), t.hasClass("tooltip") && (e = "tooltip"), t.hasClass("tree") && (e = "tree"), t.hasClass("treeitem") && (e = "treeitem"), !(e = t.hasClass("button") ? "button" : e) || 0 === e.length) try {
                                e = t.firstNode.type || t.firstNode.nodeName.toLowerCase()
                            } catch (e) {}
                            return e = e && -1 < [].indexOf.call(r.HtmlElemRoles.heading, e) ? "heading" : e
                        }
                    },
                    getRoleText: function(e) {
                        var t = e.aria.role,
                            n = e.aria.nodeName;
                        return e.aria.role ? (n && "textbox" === t && (t = n), i.settings.getText(e.aria.role)) : ""
                    }
                }
            },
            5062: function(e, t, n) {
                var o, a = n(9246),
                    s = n(3956),
                    c = n(2606);

                function l(e) {
                    return !e.atomicText && (e.labelledbyText || e.label || e.labelledby || e.describedbyText || e.labelforText || e.toolTipText || e.placeholder || e.title || e.alt || e.labelWrapperText) || ""
                }

                function u(e) {
                    o = o || s.Language;
                    var t = "";
                    return e.atomicText ? t += "," + e.atomicText : e.label || e.title || e.alt || e.toolTipText ? "" : (e.valueText ? t += "," + e.valueText : e.value ? t += "," + o.curvalue + e.value : e.text && (t += "," + e.text), e.valueminText && (t += "," + o.min + e.valueminText), e.valuemaxText && (t += "," + o.max + e.valuemaxText), t)
                }

                function d(e, t) {
                    var n = "";
                    return n = (o = o || s.Language) && void 0 !== t ? t ? "," + o[e] : "," + o["un" + e] : n
                }

                function f(e, t) {
                    var n = "";
                    return n = t ? "," + o[e] : n
                }
                e.exports = {
                    lastDesc: function(e) {
                        if (3 == e.firstNode.nodeType) return e.firstNode.nodeValue;
                        if ("true" == e.ariaAttr("autolabel") && "true" != e.ariaAttr("setlabel")) return e.aria.label;
                        var t = "",
                            n = e.aria;
                        if (o = o || s.Language, !n || n.busy) return "";
                        var r = n.roleText;
                        t += f("readonly", n.readonly), t += f("multiselectable", n.multiselectable), t += f("multiLine", n.multiLine), n.multiple && (t += o.multiple), !n.isregion || (i = o["regiontype" + e.ariaAttr("regiontype")]) && (t += i), r && (t += r);
                        var i = l(n);
                        return "" != i || !n.isregion || 0 < (r = e.find("h1,h2,h3,h4,h5,h6,title,.title,title")).length && (i = r.aria.text), t += "," + i, n.isregion || ([].indexOf.call(["password", "video"], e.aria.role) < 0 && (t += "," + u(n)), t += "," + function(e) {
                            o = o || s.Language;
                            var t = "";
                            try {
                                t += f("disabled", e.disabled), t += d("checked", e.checked), t += d("expanded", e.expanded), 0 < (t += d("selected", e.selected)).length && (t = o.curstatus + t)
                            } catch (e) {}
                            return t
                        }(n)), n.described && (t += "," + n.described), c.isMobile() || (t += f("haspopup", n.haspopup)), t = a.formatStrToRead(t, !0), c.isMobile() && s.voice.enable && -1 < [].indexOf.call(a.HtmlElemRoles.mobileDoubleInre, e.aria.role) && (t += ",双击激活操作"), t = 0 < t.length && "," == t.substring(0, 1) ? t.substring(1, t.length) : t
                    },
                    descText: l,
                    mainText: u
                }
            },
            5668: function(e) {
                function r(e, i) {
                    return function e(t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t.nodeList[n];
                            if ((r = new i(r)).aria.focusable && !r.aria.hidden) return r;
                            if (0 < (r = new i(r.child())).length) return e(r)
                        }
                    }(e = "BODY" == e.firstNode.nodeName ? new i(e.child()) : e)
                }

                function i(e, i) {
                    return function e(t) {
                        for (var n = t.length - 1; 0 <= n; n--) {
                            var r = t.nodeList[n];
                            if ((r = new i(r)).aria.focusable && !r.aria.hidden) return r;
                            if (0 < (r = new i(r.child())).length) return e(r)
                        }
                    }(e = "BODY" == e.firstNode.nodeName ? new i(e.child()) : e)
                }
                e.exports = {
                    nextFocus1: function e(t, n) {
                        if ("BODY" == (t = t.jTool ? t : new n(t)).firstNode.nodeName) return r(t, n);
                        t = new n(t.firstNode).nextNode(), t = new n(t);
                        return t && t.aria && t.aria.focusable && !t.aria.hidden ? t : e(t, n)
                    },
                    preFocus1: function e(t, n) {
                        if ("BODY" == (t = t.jTool ? t : new n(t)).firstNode.nodeName) return i(t, n);
                        t = new n(t.firstNode).preNode(), t = new n(t);
                        return t && t.aria && t.aria.focusable && !t.aria.hidden ? t : e(t, n)
                    },
                    firstFocus1: r,
                    lastFocus1: i
                }
            },
            766: function(e, t, n) {
                var r, i = n(9246),
                    o = n(1284);
                e.exports = function(e) {
                    var t = "";
                    return r = r || o.settings.Language, -1 < [].indexOf.call(i.HtmlElemRoles.select, e.aria.role) ? void 0 !== (t = e.attr("aria-label") || i.reMoveHtml(e.text())) && 0 < t.length ? r.selectedelem + t : r.unselectedelem : (t = e.textAll(), i.reMoveHtml(t))
                }
            },
            1317: function(e, t, n) {
                var l = n(9246),
                    u = n(713);
                e.exports = {
                    visibility: function() {
                        l.each(this.nodeList, function(e, t) {
                            t.style.visibility = "visible"
                        })
                    },
                    unvisibility: function() {
                        l.each(this.nodeList, function(e, t) {
                            t.style.visibility = "hidden"
                        })
                    },
                    show: function() {
                        return l.each(this.nodeList, function(e, t) {
                            var n = "";
                            if (-1 !== t.nodeName.indexOf(["SPAN", "A", "FONT", "I"])) return t.style.visibility && (t.style.visibility = "visible"), t.style.display = "inline-block", this;
                            switch (t.nodeName) {
                                case "TABLE":
                                    n = "table";
                                    break;
                                case "THEAD":
                                    n = "table-header-group";
                                    break;
                                case "TBODY":
                                    n = "table-row-group";
                                    break;
                                case "TR":
                                    n = "table-row";
                                    break;
                                case "TH":
                                case "TD":
                                    n = "table-cell";
                                    break;
                                default:
                                    n = "block"
                            }
                            t.style.visibility && (t.style.visibility = "visible"), t.style.display = n
                        }), this
                    },
                    hide: function() {
                        return l.each(this.nodeList, function(e, t) {
                            t.style.visibility && (t.style.visibility = "hidden"), t.style.display = "none"
                        }), this
                    },
                    animate: function(e, t, n) {
                        var r, i, o = this,
                            a = "",
                            s = "",
                            c = o.nodeList[0];
                        e && ("undefined" === l.type(n) && "function" === l.type(t) && (n = t, t = 0), "undefined" === l.type(n) && (n = l.noop), "undefined" === l.type(t) && (t = 0), l.each(e, function(e, t) {
                            a += e + ":" + l.getStyle(c, e) + ";", s += e + ":" + t + ";"
                        }), r = "@keyframes jToolAnimate {from {" + a + "}to {" + s + "}}", (i = document.createElement("style")).className = "jTool-animate-style", i.type = "text/css", document.head.appendChild(i), i.textContent = i.textContent + r, c.style.animation = "jToolAnimate " + t / 1e3 + "s ease-in-out forwards", window.setTimeout(function() {
                            u.css.call(o, e), c.style.animation = "", document.head.removeChild(i), n()
                        }, t))
                    }
                }
            },
            7538: function(e, t, n) {
                var i = n(9246);
                e.exports = {
                    addClass: function(e) {
                        return this.changeClass(e, "add")
                    },
                    removeClass: function(e) {
                        return this.changeClass(e, "remove")
                    },
                    toggleClass: function(e) {
                        return this.changeClass(e, "toggle")
                    },
                    hasClass: function(e) {
                        var t = this.firstNode;
                        return !(!t || 1 != t.nodeType) && t.classList.contains(e)
                    },
                    parseClassName: function(e) {
                        return e.indexOf(" ") ? e.split(" ") : [e]
                    },
                    changeClass: function(e, r) {
                        var t = this.parseClassName(e);
                        return i.each(this.nodeList, function(e, n) {
                            1 == n.nodeType && i.each(t, function(e, t) {
                                n.classList[r](t)
                            })
                        }), this
                    }
                }
            },
            6003: function(e) {
                e.exports = {
                    getContainerDom: function(e) {
                        var t = document.querySelector("#aging-tools-pc");
                        return null != t ? t : (void 0 !== e && e.body ? e : document).body
                    }
                }
            },
            5086: function(e) {
                function t() {}

                function i() {
                    var e = document.domain.split("."),
                        t = e.length;
                    if (1 == t) return document.domain;
                    var n = e[t - 2] + "." + e[t - 1];
                    return "." + (n = 2 < n.length && -1 < [].indexOf.call(["com", "gov", "org", "net"], e[t - 2]) ? e[t - 3] + "." + n : n)
                }
                t.prototype.devareCookie = function(e) {
                    var t = new Date;
                    t.setTime(t.getTime() - 1e4), document.cookie = e + "=v; expires=" + t.toGMTString() + ";path=/;domain=" + i()
                }, t.prototype.setCookie = function(e, t) {
                    this.devareCookie(e);
                    var n, r = new Date;
                    r.setTime(r.getTime() + 31536e6), n = document.domain, /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(n) ? document.cookie = e + "=" + t + "; expires=" + r.toGMTString() + ";path=/;" : document.cookie = e + "=" + t + "; expires=" + r.toGMTString() + ";path=/;domain=" + i()
                }, t.prototype.getCookie = function(e) {
                    for (var t = document.cookie.split("; "), n = 0; n < t.length; n++) {
                        var r = t[n].split("=");
                        if (r[0] == e) return r[1]
                    }
                }, t.prototype.getCookies = function(e) {
                    for (var t = document.cookie.split("; "), n = 0; n < t.length; n++)
                        if (t[n].split("=")[0] == e) return t[n].substring(t[n].indexOf("=") + 1)
                }, t.prototype.getAllCookie = function() {
                    var e = document.cookie.split("; ");
                    return 0 < arrcookie.length ? e : ""
                };
                var n = new t;
                e.exports = n
            },
            713: function(e, t, n) {
                var s = n(9246);
                e.exports = {
                    css: function(e, t) {
                        var i = this;
                        if (0 != i.length) {
                            var o = ["width", "height", "min-width", "max-width", "min-height", "min-height", "top", "left", "right", "bottom", "padding-top", "padding-right", "padding-bottom", "padding-left", "font-size", "margin-top", "margin-right", "margin-bottom", "margin-left", "border-width", "border-top-width", "border-left-width", "border-right-width", "border-bottom-width"];
                            if ("string" === s.type(e) && !t && 0 !== t) return -1 !== o.indexOf(e) ? parseInt(s.getStyle(this.firstNode, e), 10) : s.getStyle(this.firstNode, e);
                            if ("object" === s.type(e)) {
                                var n, r = e;
                                for (n in r) a(n, r[n])
                            } else a(e, t);
                            return this
                        }

                        function a(n, r) {
                            n = n.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            }), "number" === s.type(r) && (r = r.toString() + "px"), -1 !== o.indexOf(n) && -1 === r.indexOf("px") && (r += "px"), s.each(i.nodeList, function(e, t) {
                                try {
                                    t.style[n] = r
                                } catch (e) {}
                            })
                        }
                    },
                    width: function(e) {
                        return this.css("width", e)
                    },
                    height: function(e) {
                        return this.css("height", e)
                    }
                }
            },
            7483: function(e, t, n) {
                var i = n(9246);
                e.exports = {
                    data: function(e, t) {
                        return "data-" !== (e = e.toLowerCase()).substr(0, 5) && (e = "data-" + e), this.attr(e, t)
                    },
                    removeData: function(e) {
                        "data-" !== (e = e.toLowerCase()).substr(0, 5) && (e = "data-" + e), this.removeAttr(e)
                    },
                    ariaAttr: function(e, t) {
                        return "aria-" !== (e = e.toLowerCase()).substr(0, 5) && (e = "aria-" + e), this.attr(e, t)
                    },
                    removeAriaAttr: function(e) {
                        "aria-" !== (e = e.toLowerCase()).substr(0, 5) && (e = "aria-" + e), this.removeAttr(e)
                    },
                    attr: function(n, r) {
                        if (0 !== this.nodeList.length) return void 0 === n && void 0 === r ? null : void 0 !== r ? (i.each(this.nodeList, function(e, t) {
                            1 == t.nodeType && t.setAttribute(n, r)
                        }), this) : 1 == this.firstNode.nodeType ? this.transformValue(this.firstNode.getAttribute(n)) : void 0
                    },
                    removeAttr: function(n) {
                        void 0 !== n && i.each(this.nodeList, function(e, t) {
                            t.removeAttribute(n)
                        })
                    },
                    prop: function(n, r) {
                        if (0 !== this.nodeList.length) return void 0 === n && void 0 === r ? null : void 0 !== r ? (i.each(this.nodeList, function(e, t) {
                            t[n] = r
                        }), this) : this.transformValue(this.firstNode[n])
                    },
                    removeProp: function(n) {
                        void 0 !== n && i.each(this.nodeList, function(e, t) {
                            delete t[n]
                        })
                    },
                    val: function(e) {
                        return this.prop("value", e) || null
                    },
                    transformValue: function(e) {
                        return e = "null" === i.type(e) ? void 0 : e
                    }
                }
            },
            9207: function(e, t, n) {
                var s = n(9246),
                    c = n(5285),
                    l = n(3546);

                function u(e) {
                    var t = e.nodeType;
                    if (1 == t && "checkbox" == e.type && "on" == e.value) return "";
                    var n = "";
                    if ("VIDEO" == e.nodeName) return "";
                    switch (t) {
                        case 1:
                            n = e.innerHTML || e.value;
                            break;
                        case 3:
                            n = e.nodeValue.trim()
                    }
                    return n
                }
                e.exports = {
                    append: function(e) {
                        return this.html(e, "append")
                    },
                    prepend: function(e) {
                        return this.html(e, "prepend")
                    },
                    before: function(e) {
                        e.jTool && (e = e.nodeList[0]);
                        var t = this.firstNode;
                        return t.parentNode.insertBefore(e, t), this
                    },
                    after: function(e) {
                        var n;
                        (e = "string" == typeof e ? new c(e) : e).jTool && (n = this.firstNode.parentNode, s.each(e.nodeList, function(e, t) {
                            n.appendChild(t)
                        }))
                    },
                    text: function(n) {
                        if (0 !== this.nodeList.length) return void 0 !== n ? (s.each(this.nodeList, function(e, t) {
                            t.textContent = n
                        }), this) : l.getText(this.firstNode, this.aria ? this.aria.role : this.nodeName.toLowerCase())
                    },
                    html: function(t, r) {
                        if (0 !== this.nodeList.length) {
                            if (this.firstNode && void 0 === t && void 0 === r) try {
                                return this.firstNode.innerHTML
                            } catch (e) {
                                return
                            }
                            var i, e = s.type(t);
                            return t.jTool ? t = t.nodeList : "string" === e ? t = s.createDOM(t || "") : "number" === e ? t = s.createDOM(t.toString() || "") : "element" === e && (t = [t]), s.each(this.nodeList, function(e, n) {
                                r ? "prepend" === r && (i = n.firstChild) : n.innerHTML = "", s.each(t, function(e, t) {
                                    (t = t.cloneNode(!0)).nodeType || (t = document.createTextNode(t)), i ? n.insertBefore(t, i) : n.appendChild(t)
                                })
                            }), this
                        }
                    },
                    wrap: function(r, i) {
                        var o;
                        return s.each(this.nodeList, function(e, t) {
                            o = t.parentNode;
                            var n = new c(r, t.ownerDocument).get(0);
                            o.insertBefore(n, t), (i ? n.querySelector(i) : n.querySelector(":empty")).appendChild(t)
                        }), this
                    },
                    closest: function(e) {
                        if (0 !== this.nodeList.length) {
                            var t = this.firstNode.parentNode;
                            if (void 0 === e) return new c(t);
                            var n = (this.firstNode.ownerDocument || document).querySelectorAll(e);
                            return function e() {
                                t && 0 !== n.length && 1 === t.nodeType ? -1 === [].indexOf.call(n, t) && (t = t.parentNode, e()) : t = null
                            }(), new c(t)
                        }
                    },
                    parent: function() {
                        return this.closest()
                    },
                    clone: function(e) {
                        return new c(this.firstNode.cloneNode(e || !1))
                    },
                    remove: function() {
                        s.each(this.nodeList, function(e, t) {
                            t.parentNode.removeChild(t)
                        })
                    },
                    textAll: function(e) {
                        if (0 !== this.nodeList.length) {
                            var t = "",
                                n = this.firstNode.getAttribute("aria-label") || this.firstNode.getAttribute("title") || this.firstNode.getAttribute("alt");
                            return n ? n : (t = function o(e) {
                                var e = (e = e.jTool ? e : new c(e)).childNodes(),
                                    a = "";
                                return s.each(e, function(e, t) {
                                    var n, r, i = new c(t);
                                    "video" != i.aria.role && (n = i.childNodes(), 1 == t.nodeType ? (i = t.getAttribute("aria-label") || t.getAttribute("title") || t.getAttribute("alt")) && a.indexOf(i) < 0 ? a += i : ((i = t.getAttribute("aria-described")) && (a += i), i = (i = t.getAttribute("role") || t.nodeName).toLowerCase(), -1 < [].indexOf.call(s.HtmlElemRoles.select, i) ? a += "," + l.getText(t, i) : -1 < [].indexOf.call(["input", "textbox", "textarea"], i) ? a += "," + new c(t).val() : 0 < n.length ? (n = o(t)) && a.indexOf(n) < 0 && (a += "," + n) : (r = u(t)) && a.indexOf(r) < 0 && (a += r)) : (r = u(t)) && a.indexOf(r) < 0 && (a += r))
                                }), a
                            }(this), t = e ? s.formatStrToRead(t, e) : t)
                        }
                    }
                }
            },
            2019: function(e, t, n) {
                var o = n(5285),
                    a = n(9246),
                    r = n(1837);
                e.exports = {
                    focus: function() {
                        this.jTool && this.firstNode && 1 == this.firstNode.nodeType && this.firstNode.focus()
                    },
                    blur: function() {
                        this.jTool && this.firstNode && 1 == this.firstNode.nodeType && this.firstNode.blur()
                    },
                    siblings: function(e) {
                        if (0 != this.length) {
                            if (e) {
                                for (var t = this.firstNode, n = [], r = t.previousSibling; r;) 1 == r.nodeType && r.tagName == t.tagName && n.unshift(r), r = r.previousSibling;
                                for (var i = t.nextSibling; i;) 1 == i.nodeType && i.tagName == t.tagName && n.push(i), i = i.nextSibling;
                                return new o(n)
                            }
                            return new o(this.parent().child())
                        }
                    },
                    next: function() {
                        if (0 != this.length) {
                            var e = this.firstNode,
                                t = e.nextSibling;
                            return null != t ? !(-1 < [].indexOf.call(["HEAD", "STYLE", "SCRIPT"], t.nodeName)) && (1 == t.nodeType || 3 == t.nodeType && /\S/.test(t.nodeValue)) ? t : new o(t).next() : null == e.parentNode && e.defaultView && e.defaultView.frameElement ? new o(e.defaultView.frameElement).next() : null != e.parentNode ? new o(e.parentNode).next() : void 0
                        }
                    },
                    pre: function() {
                        if (0 != this.length) {
                            var e = this.firstNode,
                                t = e.previousElementSibling;
                            return null != t ? -1 < [].indexOf.call(["HEAD", "STYLE", "SCRIPT"], t.nodeName) ? new o(t).pre() : 1 === t.nodeType ? t : void 0 : null == e.parentNode && e.defaultView && e.defaultView.frameElement ? new o(e.defaultView.frameElement).pre() : null != e.parentNode ? new o(e.parentNode).pre() : void 0
                        }
                    },
                    nextAll: function() {
                        if (0 != this.length) {
                            for (var e = this.firstNode, t = next(e), n = []; null != t;) n.push(t), t = next(t);
                            return n
                        }
                    },
                    preAll: function() {
                        if (0 != this.length) {
                            for (var e = this.firstNode, t = pre(e), n = []; null != t;) n.push(t), t = pre(t);
                            return n
                        }
                    },
                    get: function(e) {
                        return this.nodeList[e]
                    },
                    is: function(e) {
                        if (e && 0 !== this.length) return 0 === e.indexOf(":") && (e = e.subStr(1, e.length)), this.firstNode[e]
                    },
                    eq: function(e) {
                        return new o(this.nodeList[e])
                    },
                    first: function() {
                        return this.firstNode
                    },
                    last: function() {
                        return this.nodeList[this.nodeList.length - 1]
                    },
                    childNodes: function() {
                        var e = this.firstNode.childNodes,
                            r = [];
                        return a.each(e, function(e, t) {
                            switch (t.nodeType) {
                                case 1:
                                    r.push(t);
                                    break;
                                case 3:
                                    var n = t.nodeValue;
                                    /\S/.test(n) && r.push(t)
                            }
                        }), r
                    },
                    child: function() {
                        var e = this.firstNode.childNodes,
                            n = [];
                        return a.each(e, function(e, t) {
                            1 === t.nodeType && n.push(t)
                        }), n
                    },
                    find: function(r) {
                        if (r instanceof HTMLElement) {
                            var i, e = r.getAttribute("id");
                            return e ? new o(e, this) : (function n(e) {
                                a.each(e, function(e, t) {
                                    t == r ? i = new o(r) : i || n(new o(t).child())
                                })
                            }(this), i = i || new o)
                        }
                        return new o(r, this)
                    },
                    isHidden: function() {
                        return function e(t) {
                            var n = new o(t);
                            try {
                                if (1 == t.nodeType || 9 == t.nodeType) {
                                    if ("BODY" == t.nodeName) return !1;
                                    if ("none" === n.css("display") || "hidden" === n.css("visibility") || "hidden" === n.attr("type")) return !0
                                }
                            } catch (e) {
                                return !0
                            }
                            return e(n.parent().firstNode)
                        }(this.firstNode)
                    },
                    cssPath: function(e) {
                        if (0 != this.length) return r(this, "", e) || "body.useOldFixed"
                    },
                    index: function(e) {
                        var t = this.firstNode;
                        return e ? e.jTool && (e = e.nodeList) : e = this.parent().child().nodeList, e ? [].indexOf.call(e, t) : -1
                    },
                    tofirstChild: function() {
                        var e = this.firstNode;
                        if ("IFRAME" == this.firstNode.nodeName) try {
                            var t = e.contentDocument;
                            if (null == t || !t.body) return null;
                            e = t.body.firstElementChild
                        } catch (e) {
                            return null
                        } else var n = this.child(),
                            e = 0 < n.length ? n[0] : this.firstNode;
                        if (-1 < [].indexOf.call(["A"], e.nodeName)) return e;
                        n = new o(e).find("*");
                        return 0 == n.length ? e : new o(n[0]).tofirstChild()
                    },
                    nextNode: function() {
                        var t = this.next();
                        if (t = t || this.parent().next()) {
                            if (-1 < [].indexOf.call(["A"], t.nodeName)) return t;
                            if ("IFRAME" == t.nodeName) try {
                                var e = t.contentDocument;
                                if (null == e || !e.body) return new o(t).nextNode();
                                t = e.body.firstChild
                            } catch (e) {
                                return new o(t).nextNode()
                            }
                            return function e(t) {
                                if (-1 < [].indexOf.call(["A"], t.nodeName)) return t;
                                var n = new o(t).find("*");
                                return 0 == n.length ? t : e(n[0])
                            }(t) || new o(t).nextNode()
                        }
                    },
                    preNode: function() {
                        var e = this.pre();
                        if (e = e || this.parent().pre()) {
                            "IFRAME" == e.nodeName && (e = e.contentDocument);
                            var t = new o(e).child();
                            return 0 == t ? e : function e(t) {
                                for (i = t.length - 1; 0 <= i; i--) {
                                    var n = new o(t[i]).child();
                                    return 0 == n.length ? t[i] : e(n)
                                }
                            }(t)
                        }
                    }
                }
            },
            1999: function(e, t, n) {
                var c = n(9246);
                e.exports = {
                    dblclick: function(e, t, n) {
                        return this.on("dblclick", e, t, n)
                    },
                    click: function(e, t, n) {
                        return e ? this.on("click", e, t, n) : this.trigger("click")
                    },
                    mousemove: function(e, t, n) {
                        return this.on("mousemove", e, t, n)
                    },
                    mousedown: function(e, t, n) {
                        return this.on("mousedown", e, t, n)
                    },
                    touchstart: function(e, t, n) {
                        return this.on("touchstart", e, t, n)
                    },
                    touchend: function(e, t, n) {
                        return this.on("touchend", e, t, n)
                    },
                    touchmove: function(e, t, n) {
                        return this.on("touchmove", e, t, n)
                    },
                    change: function(e, t, n) {
                        return this.on("change", e, t, n)
                    },
                    on: function(e, t, n, r) {
                        return this.addEvent(this.getEventObject(e, t, n, r))
                    },
                    off: function(e, t) {
                        return this.removeEvent(this.getEventObject(e, t))
                    },
                    bind: function(e, t, n) {
                        return this.on(e, void 0, t, n)
                    },
                    unbind: function(e) {
                        return this.removeEvent(this.getEventObject(e))
                    },
                    trigger: function(r) {
                        return c.each(this.nodeList, function(e, t) {
                            try {
                                var n;
                                t.qToolEvent && t.qToolEvent[r] && 0 < t.qToolEvent[r].length ? (n = new Event(r), t.dispatchEvent(n)) : "click" !== r || "click" === r && t[r]()
                            } catch (e) {}
                        }), this
                    },
                    getEventObject: function(e, n, r, i) {
                        if ("function" == typeof n && (i = r || !1, r = n, n = void 0), !e) return this;
                        var o;
                        "" !== (n = !n || "element" !== c.type(this.firstNode) ? "" : n) && (o = r, r = function(e) {
                            for (var t = e.target; t && t !== this;) {
                                if (-1 !== [].indexOf.call(this.querySelectorAll(n), t)) {
                                    o.apply(t, arguments);
                                    break
                                }
                                t = t.parentNode
                            }
                        });
                        var a, e = e.split(" "),
                            s = [];
                        return c.each(e, function(e, t) {
                            return "" === t.trim() || (a = t.split("."), a = {
                                eventName: t + n,
                                type: a[0],
                                querySelector: n,
                                callback: r || c.noop,
                                useCapture: i || !1,
                                nameScope: a[1] || void 0
                            }, void s.push(a))
                        }), s
                    },
                    addEvent: function(e) {
                        var t = this;
                        return c.each(e, function(e, n) {
                            c.each(t.nodeList, function(e, t) {
                                t.qToolEvent = t.qToolEvent || {}, t.qToolEvent[n.eventName] = t.qToolEvent[n.eventName] || [], t.qToolEvent[n.eventName].push(n), c.addEventListener(t, n.type, n.callback, n.useCapture)
                            })
                        }), t
                    },
                    removeEvent: function(e) {
                        var r, n = this;
                        return c.each(e, function(e, t) {
                            c.each(n.nodeList, function(e, n) {
                                n.qToolEvent && (r = n.qToolEvent[t.eventName]) && (c.each(r, function(e, t) {
                                    n.removeEventListener(t.type, t.callback)
                                }), delete n.qToolEvent[t.eventName])
                            })
                        }), n
                    }
                }
            },
            3552: function(e, t, n) {
                var r = n(9246);
                e.exports = {
                    offset: function() {
                        var e = {
                                top: 0,
                                left: 0
                            },
                            t = this.firstNode;
                        if (!t.getClientRects().length) return e;
                        if ("none" === r.getStyle(t, "display")) return e;
                        e = t.getBoundingClientRect(), t = t.ownerDocument.documentElement;
                        return {
                            top: e.top + window.pageYOffset - t.clientTop,
                            left: e.left + window.pageXOffset - t.clientLeft
                        }
                    },
                    scrollTop: function(e) {
                        return this.scrollFN(e, "top")
                    },
                    scrollLeft: function(e) {
                        return this.scrollFN(e, "left")
                    },
                    scrollFN: function(e, t) {
                        var n = this.firstNode;
                        return e || 0 === e ? (this.setScrollFN(n, t, e), this) : this.getScrollFN(n, t)
                    },
                    getScrollFN: function(e, t) {
                        return r.isWindow(e) ? "top" === t ? e.pageYOffset : e.pageXOffset : 9 === e.nodeType ? "top" === t ? e.body.scrollTop : e.body.scrollLeft : 1 === e.nodeType ? "top" === t ? e.scrollTop : e.scrollLeft : void 0
                    },
                    setScrollFN: function(e, t, n) {
                        return r.isWindow(e) ? "top" === t ? e.document.body.scrollTop = n : e.document.body.scrollLeft = n : 9 === e.nodeType ? "top" === t ? e.body.scrollTop = n : e.body.scrollLeft = n : 1 === e.nodeType ? "top" === t ? e.scrollTop = n : e.scrollLeft = n : void 0
                    }
                }
            },
            5285: function(e, t, n) {
                function i(n, e) {
                    var r;
                    if (n)
                        if (s.isWindow(n)) r = [n], e = void 0;
                        else if (n instanceof HTMLElement) r = [n], e = void 0;
                    else if (n instanceof NodeList || n instanceof Array) r = n, e = void 0;
                    else if (n.jTool) r = n.nodeList, e = void 0;
                    else if (/<.+>/.test(n)) r = s.createDOM(n), e = void 0;
                    else {
                        if (e) "string" == typeof e ? e = c(e) : e instanceof HTMLElement ? e = [e] : e instanceof NodeList || (e.jTool ? e = e.nodeList : "document" == s.type(e) || (e = void 0));
                        else try {
                            r = c(n)
                        } catch (e) {
                            r = [n]
                        }
                        if (e)
                            if (r = [], "document" == s.type(e)) try {
                                r = e.querySelectorAll(n)
                            } catch (e) {
                                r = [n]
                            } else s.each(e, function(e, t) {
                                try {
                                    s.each(t.querySelectorAll(n), function(e, t) {
                                        t && r.push(t)
                                    })
                                } catch (e) {}
                            })
                    } else n = null;
                    return r && 0 !== r.length || (r = []), this.jTool = !0, this.context = e || document, this.nodeList = r, this.length = this.nodeList ? this.nodeList.length : 0, this.querySelector = n, i.prototype.extend = a, i.prototype.extend(r), 0 < this.length ? (this.aria = o(this, i), this.firstNode = this.nodeList[0]) : (this.aria = {}, this.firstNode = null), this
                }
                var o = n(3957),
                    s = n(9246),
                    a = n(1079);

                function c(i) {
                    var o = document.querySelectorAll(i) || [];
                    return function e(t, n) {
                        t = t || document;
                        var r = t.getElementsByTagName("iframe");
                        for (var i = 0; i < r.length; i++) try {
                            var o = r[i].getAttribute("id");
                            o || (o = s.genID(), r[i].setAttribute("id", o));
                            var a = r[i].contentWindow.document;
                            if (!a.body) continue;
                            n && "function" == typeof n && n(a, r[i]), e(a, n)
                        } catch (e) {}
                    }(document, function(e) {
                        for (var t = e.querySelectorAll(i), n = 0; n < t.length; n++) {
                            var r = t[n];
                            o.push(r)
                        }
                    }), o
                }
                e.exports = i
            },
            7107: function(e) {
                function i(e) {
                    if (null === e) return "null";
                    if (e != e) return "nan";
                    if ("function" == typeof Array.isArray) {
                        if (Array.isArray(e)) return "array"
                    } else if ("[object Array]" === Object.prototype.toString.call(e)) return "array";
                    return (typeof e).toLowerCase()
                }

                function t() {
                    this.name = "Store"
                }
                t.prototype = {
                    init: function(e) {
                        return this.store = window[e], this
                    },
                    set: function(e, t) {
                        if (null != (e = "object" == typeof e ? e.root : e)) {
                            var n = e.split("/"),
                                r = (r = this.get(n[0])) || {};
                            switch (i(r = 1 < n.length ? function e(t, n, r, i) {
                                    return (t = t || {})[n[i]] || (t[n[i]] = {}), i >= n.length - 1 ? void 0 === r ? delete t[n[i]] : t[n[i]] = r : e(t[n[i]], n, r, i + 1), t
                                }(r, n, t, 1) : r)) {
                                case "object":
                                case "array":
                                    this.store.setItem(n[0], JSON.stringify(r));
                                    break;
                                default:
                                    this.store.setItem(n[0], r)
                            }
                        }
                    },
                    get: function(e) {
                        if (e) {
                            e = e.split("/");
                            return function e(t, n, r) {
                                if (null === t) return null;
                                try {
                                    t = "number" === i(+t) ? t : JSON.parse(t)
                                } catch (e) {}
                                return 1 === n.length ? t : ("object" == typeof t && (t = t[n[r]]), (r += 1) > n.length - 1 ? t : e(t, n, r))
                            }(this.store.getItem(e[0]), e, 1)
                        }
                    },
                    getAll: function() {
                        var e, t = JSON.parse(JSON.stringify(this.store)),
                            n = {},
                            r = "";
                        for (e in t) {
                            try {
                                r = "number" === i(+(r = t[e])) ? r : JSON.parse(r)
                            } catch (e) {}
                            n[e] = r
                        }
                        return n
                    },
                    remove: function(e) {
                        this.set(e, void 0)
                    },
                    clear: function() {
                        this.store.clear()
                    }
                };
                var n = (new t).init("localStorage");
                (new t).init("sessionStorage");
                e.exports = n
            },
            6121: function(e, t, n) {
                var r = n(1079),
                    u = n(9246);

                function i(s) {
                    var c, e = {
                        url: null,
                        type: "GET",
                        data: null,
                        headers: {},
                        async: !0,
                        xhrFields: {},
                        beforeSend: u.noop,
                        complete: u.noop,
                        success: u.noop,
                        error: u.noop
                    };
                    if ((s = r(e, s)).url) {
                        s.data = s.data || {};
                        try {
                            c = new XMLHttpRequest
                        } catch (e) {}
                        var l = new Promise(function(e, t) {
                            var n, r, i = "";
                            "GET" === s.type.toUpperCase() && (n = "", (i = "object" === u.type(s.data) ? (u.each(s.data, function(e, t) {
                                void 0 !== t && ("" !== n && (n += "&"), n += e + "=" + t)
                            }), n) : s.data) && (s.url = s.url + (-1 === s.url.indexOf("?") ? "?" : "&") + i), i = null);
                            try {
                                c.open(s.type, s.url, s.async)
                            } catch (e) {}
                            for (r in s.xhrFields) c[r] = s.xhrFields[r];
                            for (var o = 0; o < s.headers.length; o++) {
                                var a = s.headers[o];
                                c.setRequestHeader(a.name, a.value)
                            }
                            "POST" === s.type.toUpperCase() && (c.setRequestHeader("Content-Type", "application/json;charset=utf-8"), i = JSON.stringify(s.data)), s.beforeSend(c), c.responseType || (c.responseType = "json");
                            try {
                                c.send(i)
                            } catch (e) {}
                            s.async ? (c.onload = function() {
                                200 === c.status ? (l.done && "function" == typeof l.done && l.done(c.responseJSON || c.response || c.responseText), s.success && s.success(c.response, c.status), e && "function" == typeof e && e(c.response || c.responseText)) : t && "function" == typeof t && t(c, c.status)
                            }, c.onerror = function() {
                                s.error && s.error(c, c.status), t && "function" == typeof t && t(c, c.status)
                            }) : 200 === c.status ? (l.done && "function" == typeof l.done && l.done(c.responseJSON || c.response || c.responseText), s.success && s.success(c.response, c.status), e(c.response || c.responseText)) : (s.error && s.error(c, c.status), t && "function" == typeof t && t(c, c.status))
                        });
                        return l
                    }
                }
                e.exports = {
                    ajax: i,
                    post: function(e, t, n) {
                        return i({
                            url: e,
                            type: "POST",
                            data: t,
                            success: n
                        })
                    },
                    get: function(e, t, n) {
                        return i({
                            url: e,
                            type: "GET",
                            data: t,
                            success: n
                        })
                    },
                    getText: function(e, t) {
                        return i({
                            url: e,
                            type: "GET",
                            headers: {
                                "Content-Type": "text/html;charset:utf-8"
                            },
                            xhrFields: {
                                responseType: "text"
                            },
                            success: t
                        })
                    },
                    jsonp: function(e, r) {
                        var i, o = document.createElement("script");
                        return "object" == typeof e && (e = (r = e).url, delete r.url), e = e + (0 < e.indexOf("?") ? "&" : "?") + function(e) {
                            var t, n = [];
                            for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                            return n.join("&")
                        }(r.data), new Promise(function(t, n) {
                            o.onerror = function(e) {
                                return r.error && r.error(e), n("出错了")
                            }, i = ("jsonp_" + Math.random()).replace(".", ""), window[i] = function(e) {
                                return document.head.removeChild(o), r.success && r.success(e), t(e)
                            }, o.src = e + (0 <= e.indexOf("?") ? "&" : "?") + (r.callback || "callback") + "=" + i, document.head.append(o)
                        })
                    }
                }
            },
            1079: function(e, t, n) {
                var o = n(9246);
                e.exports = function() {
                    if (0 === arguments.length) return {};
                    var i = !1,
                        e = 1,
                        t = arguments[0];
                    for (1 === arguments.length && "object" == typeof arguments[0] ? (t = this, e = 0) : 2 === arguments.length && "boolean" == typeof arguments[0] ? (i = arguments[0], t = this, e = 1) : 2 < arguments.length && "boolean" == typeof arguments[0] && (i = arguments[0], t = arguments[1] || {}, e = 2); e < arguments.length; e++)(function e(t, n) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i && "object" === o.type(t[r]) ? ("object" !== o.type(n[r]) && (n[r] = {}), e(t[r], n[r])) : n[r] = t[r])
                    })(arguments[e] || {}, t);
                    return t
                }
            },
            1837: function(e, t, n) {
                var h = n(5285),
                    v = ["clearfix", "on", "active"];

                function m(e) {
                    return /[A-Z]/.test(e) && /[0-9]/.test(e)
                }

                function b(e) {
                    var t = new h("#" + e);
                    return 0 != t.length && "string" != typeof t.firstNode && (e && 0 != e.indexOf("aria") && [].indexOf.call([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], parseInt(e.substring(0, 1))) < 0)
                }

                function y(e, t) {
                    var n = new h(e.parent().child());
                    return 0 == n.length ? t : t + ":nth-child(" + (e.index(n) + 1) + ")"
                }
                e.exports = function e(t, n, r) {
                    var i = " > ";
                    r && (i = " ");
                    var o = n ? i + n : "",
                        a = t.firstNode.nodeName.toLowerCase();
                    if ("body" == a) return n;
                    var s = t.attr("id");
                    if (b(s)) return m(s) ? "[id^=" + s + "]" + o : "#" + s + o;
                    var c = b(c = function e(t) {
                            return 0 == t.length || "HTML" == t.firstNode.nodeName || 0 == (t = t.closest("[id]")).length || "body" == t.firstNode.nodeName.toLowerCase() ? "" : 0 != t.attr("id").indexOf("aria") ? t.attr("id") : e(t)
                        }(t)) ? m(s) ? "[id^=" + c + "]" : "#" + c + " " : "",
                        i = "",
                        n = "",
                        s = t.attr("class");
                    if (s) {
                        for (var l = s.split(" "), u = "", d = 0; d < l.length; d++) {
                            var f = l[d];
                            0 < (f = f.replace(/\n/g, "")).length && 0 != f.indexOf("aria") && [].indexOf.call(v, f) < 0 && "setfont" != f && (m(f) ? u += "[class^=" + f + "]" : u += "." + f)
                        }
                        var g = c + a + u;
                        if (1 == new h(g).length) return g + o;
                        i = r ? a + u : y(t, a + u)
                    }
                    g = t.attr("name");
                    if (g && 0 < (g = g.replace(/\n/g, "")).length) {
                        var p = a + "[name='" + g + "']";
                        if (1 == new h(p).length) return p + o;
                        n = r ? p : y(t, p)
                    }
                    p = "", p = 0 < i.indexOf("nth-child") && 0 < n.length && n.indexOf("nth-child") < 0 ? n + o : (i = r || 0 != i.length ? i : y(t, a)) + o;
                    return "body" != a ? e(new h(t.parent()), p, r) : p
                }
            },
            3546: function(e, t, n) {
                var a = n(5285),
                    r = n(9246);
                e.exports = {
                    getText: function(e, t) {
                        return null !== t && -1 < [].indexOf.call(r.HtmlElemRoles.select, t) ? function(e) {
                            var t = [];
                            if ("SELECT" === e.nodeName) {
                                for (var n, r = 0; r < e.length; r++) e.options[r].selected && (n = (n = e[r].getAttribute("aria-label")) || e[r].text, t.push(n));
                                return 0 === t.length ? void 0 : 1 === t.length ? t[0] : t
                            }
                            var i = new a(e);
                            if ("select" !== i.aria.nodeName && "select" === i.aria.role) {
                                var o = e.getAttribute("aria-controls");
                                if (o) {
                                    i = o.substring(0, 1);
                                    return [].indexOf.call(["#", "."], i) < 0 && (o = "#" + o), t = document.querySelector(o) ? document.querySelector(o).textContent : t
                                }
                            }
                        }(e) : e.textContent || e.value
                    }
                }
            },
            5266: function(e, t, n) {
                function r(e, t) {
                    return new i(e, t)
                }
                var i = n(5285),
                    o = n(1079),
                    a = n(9246),
                    s = n(6121),
                    c = n(1999),
                    l = n(713),
                    u = n(7538),
                    d = n(9207),
                    f = n(3552),
                    g = n(2019),
                    p = n(1317),
                    h = n(7483),
                    n = n(7107);
                i.prototype = r.prototype = {}, r.extend = r.prototype.extend = o, r.extend(a), r.extend(s), r.store = n, r.prototype.extend(c), r.prototype.extend(l), r.prototype.extend(u), r.prototype.extend(d), r.prototype.extend(f), r.prototype.extend(g), r.prototype.extend(p), r.prototype.extend(h), e.exports = r
            },
            9246: function(e, t, n) {
                n(8842), n(7862), n(7671), n(7528), n(854), n(1858), n(3867);
                var i = n(6003),
                    r = {
                        "[object String]": "string",
                        "[object Boolean]": "boolean",
                        "[object Undefined]": "undefined",
                        "[object Number]": "number",
                        "[object Object]": "object",
                        "[object Error]": "error",
                        "[object Function]": "function",
                        "[object Date]": "date",
                        "[object Array]": "array",
                        "[object RegExp]": "regexp",
                        "[object Null]": "null",
                        "[object Arguments]": "arguments",
                        "[object Window]": "window",
                        "[object HTMLDocument]": "document",
                        "[object NodeList]": "array",
                        "[object HTMLCollection]": "array"
                    };

                function a(e) {
                    return r[Object.prototype.toString.call(e)] || (e instanceof Node && 1 == e.nodeType ? "element" : "")
                }

                function o(e, t) {
                    var n = a(e = e && e.jTool ? e.nodeList : e);
                    if ("array" === n || "nodeList" === n || "arguments" === n)
                        for (var r = Array.prototype.slice.call(e, 0, e.length), i = 0; i < r.length; i++) {
                            var o = r[i];
                            t.call(o, i, o)
                        } else if ("object" === n)
                            for (var i in e)
                                if (!1 === t.call(e[i], i, e[i])) break
                }
                n = {
                    getBrowserInfo: function() {
                        var e = navigator.userAgent.toLowerCase(),
                            t = "",
                            n = "";
                        if (0 < e.indexOf("msie")) t = "IE", n = "" + e.match(/msie [\d.]+;/gi);
                        else if (0 < e.indexOf("trident")) t = "IE", n = 11;
                        else if (0 < e.indexOf("edge")) t = "IE", n = 12;
                        else if (0 < e.indexOf("firefox")) t = "firefox", n = "" + e.match(/firefox\/[\d.]+/gi);
                        else if (0 < e.indexOf("chrome")) t = "chrome", n = "" + e.match(/chrome\/[\d.]+/gi);
                        else if (0 < e.indexOf("safari") && e.indexOf("chrome") < 0) t = "safari", n = "" + e.match(/version\/[\d.]+/gi);
                        else if (0 <= e.indexOf("opera")) t = "opera", n = "" + e.match(/version\/[\d.]+/gi);
                        else if ("Netscape" == navigator.appName) {
                            try {
                                n = e.split(";")[7].replace(/[ ]/g, "").match(/[\d\.]/g).toString().replace(/[,]/g, "")
                            } catch (e) {
                                n = "11"
                            }
                            t = "IE"
                        }
                        return n = (n + "").replace(/[^0-9.]/gi, ""), {
                            browser: t,
                            version: parseInt(n)
                        }
                    },
                    language: (navigator.browserLanguage || navigator.language).toLowerCase()
                };

                function s(e) {
                    if (null == e || "" == e) return 0;
                    for (var t, n = 0, r = e.length, i = 0; i < r; i++) n += 0 <= (t = e.charCodeAt(i)) && t <= 128 ? 1 : 2;
                    return n
                }

                function c(e, t, n) {
                    if (!e) return "";
                    t = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    return e.replace(new RegExp(t, "g"), n)
                }

                function l(e) {
                    if (e) return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.toString()).replace(/<script[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")).replace(/aria-[a-zA-z]+=\"(.*?)\"/gi, "")).replace("  ", "")).replace("  ", "")).replace("  ", "")).replace(/<style[^<]*(?:(?!<\/script>)<[^<]*)*<\/style>/gi, "")).replace(/ /g, "acaicaele")).replace(/<\/?[^>]*>|(\n|\t|\r)|(\s)/g, "")).replace(/acaicaele/g, " ")).trim()
                }

                function u(e) {
                    if (null == e || void 0 === e) return "";
                    return e = e.trim().replace(/\\|\/|\?|\？|\,|\，|\*|\"|\“|\”|\'|\-|\‘|\’|\<|\>|\{|\}|\[|\]|\【|\】|\：|\:|\、|\^|\$|\!|\~|\`|\•|\|/g, "")
                }
                e.exports = {
                    addEventListener: function(e, t, n, r) {
                        if (e) try {
                            e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent("on" + t, n.bind(e))
                        } catch (e) {}
                    },
                    removeEventListener: function(e, t, n) {
                        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n.bind(e))
                    },
                    isWindow: function(e) {
                        return null !== e && e === e.window
                    },
                    noop: function() {},
                    type: a,
                    isEmptyObject: function(e) {
                        var t, n = !0;
                        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (n = !1);
                        return n
                    },
                    each: o,
                    createDOM: function(e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e, t.childNodes
                    },
                    getStyle: function(e, t) {
                        try {
                            return t ? window.getComputedStyle(e)[t] : window.getComputedStyle(e)
                        } catch (e) {
                            return null
                        }
                    },
                    version: "1.3.0",
                    browser: n,
                    genID: function(e) {
                        return e = e || 4, "aria" + Number(Math.random().toString().substr(3, e) + Date.now()).toString(36)
                    },
                    splitBylength: function(e, t) {
                        var n = e.split(/([,，。；;])/),
                            r = [],
                            i = "";
                        do {
                            for (var o = 0; o < n.length; o++)
                                if (i += n[o], o < n.length - 1 && (i += n[o += 1]), 80 < s(i) || o == n.length - 1 || o < n.length - 1 && 106 < s(i) + s(n[o + 1])) {
                                    n.splice(0, o + 1), 1 < u(i).length && r.push(i), i = "";
                                    break
                                }
                        } while (0 < n.length);
                        return r
                    },
                    replaceAll: c,
                    formatString: function() {
                        if (arguments.length < 1) return null;
                        for (var e = arguments[0], t = 1; t < arguments.length; t++) e = c(e, "{" + (t - 1) + "}", arguments[t]);
                        return e
                    },
                    toPascalCase: function(e) {
                        return e && e.length ? 1 === e.length ? e.charAt(0).toUpperCase() : e.charAt(0).toUpperCase() + e.substr(1) : e
                    },
                    toCamelCase: function(e) {
                        return e && e.length ? 1 === e.length ? e.charAt(0).toLowerCase() : e.charAt(0).toLowerCase() + e.substr(1) : e
                    },
                    queryString: {
                        toJson: function(e) {
                            for (var t = {}, n = (e = e || location.search.substring(1)).split("&"), r = 0; r < n.length; r++) {
                                var i = n[r].indexOf("=");
                                if (-1 !== i) {
                                    var o = n[r].substring(0, i),
                                        i = n[r].substring(i + 1),
                                        i = decodeURIComponent(i);
                                    try {
                                        t[o] = JSON.parse(i)
                                    } catch (e) {
                                        t[o] = i
                                    }
                                }
                            }
                            return t
                        },
                        val: function(e, t) {
                            if (t = t || location.search.substring(1), !new RegExp("(^|/?|&)" + e + "=([^&]*)(/s|&|$)", "i").test(t)) return "";
                            try {
                                return JSON.parse(RegExp.$2)
                            } catch (e) {
                                return RegExp.$2
                            }
                        }
                    },
                    formatBoolean: function(e) {
                        return void 0 === e ? e : Boolean(e)
                    },
                    formatInt: function(e) {
                        return void 0 === e ? 0 : parseInt(e)
                    },
                    reMoveHtml: l,
                    formatStrToRead: function(e, t) {
                        var n;
                        if (e) return n = {
                            lt: "<",
                            gt: ">",
                            nbsp: " ",
                            amp: "&",
                            quot: '"'
                        }, e = e.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(e, t) {
                            return n[t]
                        }), t && (e = c(l(e), ",,", ","), e = c(e, ",,", ",")), e = 1 < e.length && "," === (e = "," === e.substr(0, 1) ? e.substr(1, e.length) : e).substr(e.length - 1, 1) ? e.substr(0, e.length - 1) : e
                    },
                    strToObj: function(e) {
                        if (void 0 === e) return e;
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            return {}
                        }
                    },
                    HtmlElemRoles: {
                        moveoverBesides: ["div", "ul", "table", "tr", "html", "body"],
                        noregion: ["option", "radiobox", "checkbox"],
                        heading: ["h1", "h2", "h3", "h4", "h5", "h6", "h7"],
                        textbox: ["text", "tel", "date"],
                        dialog: ["alert", "alertdialog", "dialog", "confirm"],
                        mobileDoubleInre: ["combobox", "select", "select-one", "select-multiple", "input", "textarea", "a", "button", "checkbox", "radio", "tab"],
                        select: ["combobox", "select", "select-one", "select-multiple"],
                        foucsable0: ["0", "region", "combobox", "select", "select-one", "select-multiple", "input", "textarea", "a", "button", "checkbox", "group", "heading", "log", "menu", "menubar", "option", "radio", "radiogroup", "row"],
                        foucsable1: ["tablistbox", "alert", "alertdialog", "dialog", "dd", "dt", "confirm", "application", "grid", "gridcell", "menuitem", "menuitemcheckbox", "menuitemradio", "presentation", "tr", "td", "th", "li"]
                    },
                    stopBubble: function(e) {
                        (e = e || window.event) && (e && e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
                    },
                    stopDefault: function(e) {
                        if (e = e || window.event) return e && e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                    },
                    arrToSizzle: function(e) {
                        var n = e.toString();
                        return o(e, function(e, t) {
                            n += ",[role='" + t + "']"
                        }), n
                    },
                    triggerEvent: function(e, t) {
                        var n;
                        document.createEvent ? ((n = document.createEvent("HTMLEvents")).initEvent(t, !0, !0), n.eventName = t, e.dispatchEvent(n)) : ((n = document.createEventObject()).eventType = t, n.eventName = t, e.fireEvent("on" + n.eventType, n))
                    },
                    colorRgbToHex: function(e) {
                        if (/^(rgb|RGB)/.test(e)) {
                            for (var t = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), n = "#", r = 0; r < t.length; r++) {
                                var i = Number(t[r]).toString(16);
                                n += i = i.length < 2 ? "0" + i : i
                            }
                            return n = 7 !== n.length ? e : n
                        }
                        if (/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) {
                            var o = e.replace(/#/, "").split("");
                            if (6 === o.length) return e;
                            if (3 === o.length) {
                                for (var a = "#", s = 0; s < o.length; s += 1) a += o[s] + o[s];
                                return a
                            }
                        }
                        return e
                    },
                    colorHexToRgb: function(e) {
                        if ((e = e.toLowerCase()) && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)) {
                            if (4 === e.length) {
                                for (var t = "#", n = 1; n < 4; n += 1) t += e.slice(n, n + 1).concat(e.slice(n, n + 1));
                                e = t
                            }
                            for (var r = [], i = 1; i < 7; i += 2) r.push(parseInt("0x" + e.slice(i, i + 2)));
                            return "RGB(" + r.join(",") + ")"
                        }
                        return e
                    },
                    toCssCamelCase: function(e) {
                        return e.replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        })
                    },
                    isIE: function() {
                        return -1 < navigator.userAgent.toLowerCase().indexOf("trident")
                    },
                    hasScrollbar: function() {
                        return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
                    },
                    getMouseOffset: function(e) {
                        var t = document.documentElement.scrollTop || document.body.scrollTop;
                        return {
                            x: (document.documentElement.scrollLeft || document.body.scrollLeft) + e.clientX,
                            y: t + e.clientY
                        }
                    },
                    isElementInViewport: function(e) {
                        return 0 <= (e = e.getBoundingClientRect()).top && 0 <= e.left && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
                    },
                    scroll: function t(n, r) {
                        var i = r - n,
                            o = n;
                        setTimeout(function() {
                            var e = Math.ceil(i / 10);
                            o += e, window.scrollTo(o, n), 10 < i || i < -10 ? t(o, r) : window.scrollTo(o, r)
                        }, 1)
                    },
                    isFF: function() {
                        return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
                    },
                    appendCss: function(e, t, n) {
                        var r = e.getElementById(t);
                        if (!r) return (r = e.createElement("style")).setAttribute("type", "text/css"), r.id = t, r.innerHTML = n, r.setAttribute("isaria", "true"), void i.getContainerDom(e).appendChild(r);
                        r.innerHTML = n
                    },
                    getLength: s,
                    replaceSpChar: u,
                    getContainerDom: i.getContainerDom,
                    getPosition_Iframe: function(e) {
                        var t = e.view;
                        if (!t) return {
                            x: e.clientX,
                            y: e.clientY
                        };
                        if (t == window || !t.parent) return {
                            x: e.clientX,
                            y: e.clientY
                        };
                        for (var n = t.parent, r = t.location, i = null, o = 0, a = 0; null != n && void 0 !== n;) {
                            for (var s = 0; s < n.frames.length; s++)
                                if (r == n.frames[s].location) {
                                    i = n.frames[s].frameElement;
                                    break
                                } if (i)
                                for (; o += i.offsetLeft - i.scrollLeft || 0, a += i.offsetTop - i.scrollTop || 0, i = i.offsetParent;);
                            if (n == window) break;
                            r = n.location, n = n.parent
                        }
                        return {
                            x: o + e.clientX - (document.documentElement.scrollLeft || 0),
                            y: a + e.clientY - document.documentElement.scrollTop || 0
                        }
                    },
                    sort1: function(e) {
                        for (var t = 0; t < e.length - 1; t++)
                            for (var n, r = 0; r < e.length - 1 - t; r++) e[r] > e[r + 1] && (n = e[r], e[r] = e[r + 1], e[r + 1] = n);
                        return e
                    },
                    getStyleSheetFromId: function(e, t) {
                        for (var n = (t = t || document).styleSheets, r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (i.ownerNode && ownerNode.ownerNode.id == e) return i
                        }
                    },
                    IsIos: function() {
                        return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /macintosh|mac os x/i.test(navigator.userAgent)
                    },
                    DevLog: function(e) {}
                }
            }
        },
        r = {};

    function o(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        t = r[e] = {
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.exports
    }
    o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();
    o(4762)
}();