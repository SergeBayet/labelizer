/*!
 * Copyright (c) 2019 Serge Bayet
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.labelizer = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  !function r(c, a, f) {
    function o(n, t) {
      if (!a[n]) {
        if (!c[n]) {
          var e = "function" == typeof require && require;
          if (!t && e) return e(n, !0);
          if (s) return s(n, !0);
          var i = new Error("Cannot find module '" + n + "'");
          throw i.code = "MODULE_NOT_FOUND", i;
        }

        var u = a[n] = {
          exports: {}
        };
        c[n][0].call(u.exports, function (t) {
          return o(c[n][1][t] || t);
        }, u, u.exports, r, c, a, f);
      }

      return a[n].exports;
    }

    for (var s = "function" == typeof require && require, t = 0; t < f.length; t++) {
      o(f[t]);
    }

    return o;
  }({
    1: [function (t, n, r) {

      t(2);

      var e = function _interopRequireDefault(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }(t(15));

      e["default"]._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), e["default"]._babelPolyfill = !0;
    }, {
      15: 15,
      2: 2
    }],
    2: [function (t, n, r) {

      t(3), t(5), t(4), t(11), t(10), t(13), t(12), t(14), t(7), t(8), t(6), t(9), t(306), t(307);
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      3: 3,
      306: 306,
      307: 307,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
    }],
    3: [function (t, n, r) {
      t(278), t(214), t(216), t(215), t(218), t(220), t(225), t(219), t(217), t(227), t(226), t(222), t(223), t(221), t(213), t(224), t(228), t(229), t(180), t(182), t(181), t(231), t(230), t(201), t(211), t(212), t(202), t(203), t(204), t(205), t(206), t(207), t(208), t(209), t(210), t(184), t(185), t(186), t(187), t(188), t(189), t(190), t(191), t(192), t(193), t(194), t(195), t(196), t(197), t(198), t(199), t(200), t(265), t(270), t(277), t(268), t(260), t(261), t(266), t(271), t(273), t(256), t(257), t(258), t(259), t(262), t(263), t(264), t(267), t(269), t(272), t(274), t(275), t(276), t(175), t(177), t(176), t(179), t(178), t(163), t(161), t(168), t(165), t(171), t(173), t(160), t(167), t(157), t(172), t(155), t(170), t(169), t(162), t(166), t(154), t(156), t(159), t(158), t(174), t(164), t(247), t(248), t(254), t(249), t(250), t(251), t(252), t(253), t(232), t(183), t(255), t(290), t(291), t(279), t(280), t(285), t(288), t(289), t(283), t(286), t(284), t(287), t(281), t(282), t(233), t(234), t(235), t(236), t(237), t(240), t(238), t(239), t(241), t(242), t(243), t(244), t(246), t(245), n.exports = t(52);
    }, {
      154: 154,
      155: 155,
      156: 156,
      157: 157,
      158: 158,
      159: 159,
      160: 160,
      161: 161,
      162: 162,
      163: 163,
      164: 164,
      165: 165,
      166: 166,
      167: 167,
      168: 168,
      169: 169,
      170: 170,
      171: 171,
      172: 172,
      173: 173,
      174: 174,
      175: 175,
      176: 176,
      177: 177,
      178: 178,
      179: 179,
      180: 180,
      181: 181,
      182: 182,
      183: 183,
      184: 184,
      185: 185,
      186: 186,
      187: 187,
      188: 188,
      189: 189,
      190: 190,
      191: 191,
      192: 192,
      193: 193,
      194: 194,
      195: 195,
      196: 196,
      197: 197,
      198: 198,
      199: 199,
      200: 200,
      201: 201,
      202: 202,
      203: 203,
      204: 204,
      205: 205,
      206: 206,
      207: 207,
      208: 208,
      209: 209,
      210: 210,
      211: 211,
      212: 212,
      213: 213,
      214: 214,
      215: 215,
      216: 216,
      217: 217,
      218: 218,
      219: 219,
      220: 220,
      221: 221,
      222: 222,
      223: 223,
      224: 224,
      225: 225,
      226: 226,
      227: 227,
      228: 228,
      229: 229,
      230: 230,
      231: 231,
      232: 232,
      233: 233,
      234: 234,
      235: 235,
      236: 236,
      237: 237,
      238: 238,
      239: 239,
      240: 240,
      241: 241,
      242: 242,
      243: 243,
      244: 244,
      245: 245,
      246: 246,
      247: 247,
      248: 248,
      249: 249,
      250: 250,
      251: 251,
      252: 252,
      253: 253,
      254: 254,
      255: 255,
      256: 256,
      257: 257,
      258: 258,
      259: 259,
      260: 260,
      261: 261,
      262: 262,
      263: 263,
      264: 264,
      265: 265,
      266: 266,
      267: 267,
      268: 268,
      269: 269,
      270: 270,
      271: 271,
      272: 272,
      273: 273,
      274: 274,
      275: 275,
      276: 276,
      277: 277,
      278: 278,
      279: 279,
      280: 280,
      281: 281,
      282: 282,
      283: 283,
      284: 284,
      285: 285,
      286: 286,
      287: 287,
      288: 288,
      289: 289,
      290: 290,
      291: 291,
      52: 52
    }],
    4: [function (t, n, r) {
      t(292), n.exports = t(52).Array.flatMap;
    }, {
      292: 292,
      52: 52
    }],
    5: [function (t, n, r) {
      t(293), n.exports = t(52).Array.includes;
    }, {
      293: 293,
      52: 52
    }],
    6: [function (t, n, r) {
      t(294), n.exports = t(52).Object.entries;
    }, {
      294: 294,
      52: 52
    }],
    7: [function (t, n, r) {
      t(295), n.exports = t(52).Object.getOwnPropertyDescriptors;
    }, {
      295: 295,
      52: 52
    }],
    8: [function (t, n, r) {
      t(296), n.exports = t(52).Object.values;
    }, {
      296: 296,
      52: 52
    }],
    9: [function (t, n, r) {

      t(232), t(297), n.exports = t(52).Promise["finally"];
    }, {
      232: 232,
      297: 297,
      52: 52
    }],
    10: [function (t, n, r) {
      t(298), n.exports = t(52).String.padEnd;
    }, {
      298: 298,
      52: 52
    }],
    11: [function (t, n, r) {
      t(299), n.exports = t(52).String.padStart;
    }, {
      299: 299,
      52: 52
    }],
    12: [function (t, n, r) {
      t(301), n.exports = t(52).String.trimRight;
    }, {
      301: 301,
      52: 52
    }],
    13: [function (t, n, r) {
      t(300), n.exports = t(52).String.trimLeft;
    }, {
      300: 300,
      52: 52
    }],
    14: [function (t, n, r) {
      t(302), n.exports = t(151).f("asyncIterator");
    }, {
      151: 151,
      302: 302
    }],
    15: [function (t, n, r) {
      t(32), n.exports = t(18).global;
    }, {
      18: 18,
      32: 32
    }],
    16: [function (t, n, r) {
      n.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    }, {}],
    17: [function (t, n, r) {
      var e = t(28);

      n.exports = function (t) {
        if (!e(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    }, {
      28: 28
    }],
    18: [function (t, n, r) {
      var e = n.exports = {
        version: "2.6.11"
      };
      "number" == typeof __e && (__e = e);
    }, {}],
    19: [function (t, n, r) {
      var o = t(16);

      n.exports = function (e, i, t) {
        if (o(e), void 0 === i) return e;

        switch (t) {
          case 1:
            return function (t) {
              return e.call(i, t);
            };

          case 2:
            return function (t, n) {
              return e.call(i, t, n);
            };

          case 3:
            return function (t, n, r) {
              return e.call(i, t, n, r);
            };
        }

        return function () {
          return e.apply(i, arguments);
        };
      };
    }, {
      16: 16
    }],
    20: [function (t, n, r) {
      n.exports = !t(23)(function () {
        return 7 != Object.defineProperty({}, "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    }, {
      23: 23
    }],
    21: [function (t, n, r) {
      var e = t(28),
          i = t(24).document,
          o = e(i) && e(i.createElement);

      n.exports = function (t) {
        return o ? i.createElement(t) : {};
      };
    }, {
      24: 24,
      28: 28
    }],
    22: [function (t, n, r) {
      var g = t(24),
          y = t(18),
          d = t(19),
          x = t(26),
          m = t(25),
          S = "prototype",
          b = function b(t, n, r) {
        var e,
            i,
            o,
            u = t & b.F,
            c = t & b.G,
            a = t & b.S,
            f = t & b.P,
            s = t & b.B,
            l = t & b.W,
            h = c ? y : y[n] || (y[n] = {}),
            p = h[S],
            v = c ? g : a ? g[n] : (g[n] || {})[S];

        for (e in c && (r = n), r) {
          (i = !u && v && void 0 !== v[e]) && m(h, e) || (o = i ? v[e] : r[e], h[e] = c && "function" != typeof v[e] ? r[e] : s && i ? d(o, g) : l && v[e] == o ? function (e) {
            function qb(t, n, r) {
              if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e();

                  case 1:
                    return new e(t);

                  case 2:
                    return new e(t, n);
                }

                return new e(t, n, r);
              }

              return e.apply(this, arguments);
            }

            return qb[S] = e[S], qb;
          }(o) : f && "function" == typeof o ? d(Function.call, o) : o, f && ((h.virtual || (h.virtual = {}))[e] = o, t & b.R && p && !p[e] && x(p, e, o)));
        }
      };

      b.F = 1, b.G = 2, b.S = 4, b.P = 8, b.B = 16, b.W = 32, b.U = 64, b.R = 128, n.exports = b;
    }, {
      18: 18,
      19: 19,
      24: 24,
      25: 25,
      26: 26
    }],
    23: [function (t, n, r) {
      n.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    }, {}],
    24: [function (t, n, r) {
      var e = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = e);
    }, {}],
    25: [function (t, n, r) {
      var e = {}.hasOwnProperty;

      n.exports = function (t, n) {
        return e.call(t, n);
      };
    }, {}],
    26: [function (t, n, r) {
      var e = t(29),
          i = t(30);
      n.exports = t(20) ? function (t, n, r) {
        return e.f(t, n, i(1, r));
      } : function (t, n, r) {
        return t[n] = r, t;
      };
    }, {
      20: 20,
      29: 29,
      30: 30
    }],
    27: [function (t, n, r) {
      n.exports = !t(20) && !t(23)(function () {
        return 7 != Object.defineProperty(t(21)("div"), "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    }, {
      20: 20,
      21: 21,
      23: 23
    }],
    28: [function (t, n, r) {
      n.exports = function (t) {
        return "object" == _typeof(t) ? null !== t : "function" == typeof t;
      };
    }, {}],
    29: [function (t, n, r) {
      var e = t(17),
          i = t(27),
          o = t(31),
          u = Object.defineProperty;
      r.f = t(20) ? Object.defineProperty : function defineProperty(t, n, r) {
        if (e(t), n = o(n, !0), e(r), i) try {
          return u(t, n, r);
        } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[n] = r.value), t;
      };
    }, {
      17: 17,
      20: 20,
      27: 27,
      31: 31
    }],
    30: [function (t, n, r) {
      n.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n
        };
      };
    }, {}],
    31: [function (t, n, r) {
      var i = t(28);

      n.exports = function (t, n) {
        if (!i(t)) return t;
        var r, e;
        if (n && "function" == typeof (r = t.toString) && !i(e = r.call(t))) return e;
        if ("function" == typeof (r = t.valueOf) && !i(e = r.call(t))) return e;
        if (!n && "function" == typeof (r = t.toString) && !i(e = r.call(t))) return e;
        throw TypeError("Can't convert object to primitive value");
      };
    }, {
      28: 28
    }],
    32: [function (t, n, r) {
      var e = t(22);
      e(e.G, {
        global: t(24)
      });
    }, {
      22: 22,
      24: 24
    }],
    33: [function (t, n, r) {
      arguments[4][16][0].apply(r, arguments);
    }, {
      16: 16
    }],
    34: [function (t, n, r) {
      var e = t(48);

      n.exports = function (t, n) {
        if ("number" != typeof t && "Number" != e(t)) throw TypeError(n);
        return +t;
      };
    }, {
      48: 48
    }],
    35: [function (t, n, r) {
      var e = t(152)("unscopables"),
          i = Array.prototype;
      null == i[e] && t(72)(i, e, {}), n.exports = function (t) {
        i[e][t] = !0;
      };
    }, {
      152: 152,
      72: 72
    }],
    36: [function (t, n, r) {

      var e = t(129)(!0);

      n.exports = function (t, n, r) {
        return n + (r ? e(t, n).length : 1);
      };
    }, {
      129: 129
    }],
    37: [function (t, n, r) {
      n.exports = function (t, n, r, e) {
        if (!(t instanceof n) || void 0 !== e && e in t) throw TypeError(r + ": incorrect invocation!");
        return t;
      };
    }, {}],
    38: [function (t, n, r) {
      arguments[4][17][0].apply(r, arguments);
    }, {
      17: 17,
      81: 81
    }],
    39: [function (t, n, r) {

      var f = t(142),
          s = t(137),
          l = t(141);

      n.exports = [].copyWithin || function copyWithin(t, n) {
        var r = f(this),
            e = l(r.length),
            i = s(t, e),
            o = s(n, e),
            u = 2 < arguments.length ? arguments[2] : void 0,
            c = Math.min((void 0 === u ? e : s(u, e)) - o, e - i),
            a = 1;

        for (o < i && i < o + c && (a = -1, o += c - 1, i += c - 1); 0 < c--;) {
          o in r ? r[i] = r[o] : delete r[i], i += a, o += a;
        }

        return r;
      };
    }, {
      137: 137,
      141: 141,
      142: 142
    }],
    40: [function (t, n, r) {

      var c = t(142),
          a = t(137),
          f = t(141);

      n.exports = function fill(t) {
        for (var n = c(this), r = f(n.length), e = arguments.length, i = a(1 < e ? arguments[1] : void 0, r), o = 2 < e ? arguments[2] : void 0, u = void 0 === o ? r : a(o, r); i < u;) {
          n[i++] = t;
        }

        return n;
      };
    }, {
      137: 137,
      141: 141,
      142: 142
    }],
    41: [function (t, n, r) {
      var a = t(140),
          f = t(141),
          s = t(137);

      n.exports = function (c) {
        return function (t, n, r) {
          var e,
              i = a(t),
              o = f(i.length),
              u = s(r, o);

          if (c && n != n) {
            for (; u < o;) {
              if ((e = i[u++]) != e) return !0;
            }
          } else for (; u < o; u++) {
            if ((c || u in i) && i[u] === n) return c || u || 0;
          }

          return !c && -1;
        };
      };
    }, {
      137: 137,
      140: 140,
      141: 141
    }],
    42: [function (t, n, r) {
      var m = t(54),
          S = t(77),
          b = t(142),
          w = t(141),
          e = t(45);

      n.exports = function (l, t) {
        var h = 1 == l,
            p = 2 == l,
            v = 3 == l,
            g = 4 == l,
            y = 6 == l,
            d = 5 == l || y,
            x = t || e;
        return function (t, n, r) {
          for (var e, i, o = b(t), u = S(o), c = m(n, r, 3), a = w(u.length), f = 0, s = h ? x(t, a) : p ? x(t, 0) : void 0; f < a; f++) {
            if ((d || f in u) && (i = c(e = u[f], f, o), l)) if (h) s[f] = i;else if (i) switch (l) {
              case 3:
                return !0;

              case 5:
                return e;

              case 6:
                return f;

              case 2:
                s.push(e);
            } else if (g) return !1;
          }

          return y ? -1 : v || g ? g : s;
        };
      };
    }, {
      141: 141,
      142: 142,
      45: 45,
      54: 54,
      77: 77
    }],
    43: [function (t, n, r) {
      var s = t(33),
          l = t(142),
          h = t(77),
          p = t(141);

      n.exports = function (t, n, r, e, i) {
        s(n);
        var o = l(t),
            u = h(o),
            c = p(o.length),
            a = i ? c - 1 : 0,
            f = i ? -1 : 1;
        if (r < 2) for (;;) {
          if (a in u) {
            e = u[a], a += f;
            break;
          }

          if (a += f, i ? a < 0 : c <= a) throw TypeError("Reduce of empty array with no initial value");
        }

        for (; i ? 0 <= a : a < c; a += f) {
          a in u && (e = n(e, u[a], a, o));
        }

        return e;
      };
    }, {
      141: 141,
      142: 142,
      33: 33,
      77: 77
    }],
    44: [function (t, n, r) {
      var e = t(81),
          i = t(79),
          o = t(152)("species");

      n.exports = function (t) {
        var n;
        return i(t) && ("function" != typeof (n = t.constructor) || n !== Array && !i(n.prototype) || (n = void 0), e(n) && null === (n = n[o]) && (n = void 0)), void 0 === n ? Array : n;
      };
    }, {
      152: 152,
      79: 79,
      81: 81
    }],
    45: [function (t, n, r) {
      var e = t(44);

      n.exports = function (t, n) {
        return new (e(t))(n);
      };
    }, {
      44: 44
    }],
    46: [function (t, n, r) {

      var o = t(33),
          u = t(81),
          c = t(76),
          a = [].slice,
          f = {};

      n.exports = Function.bind || function bind(n) {
        var r = o(this),
            e = a.call(arguments, 1),
            i = function i() {
          var t = e.concat(a.call(arguments));
          return this instanceof i ? function (t, n, r) {
            if (!(n in f)) {
              for (var e = [], i = 0; i < n; i++) {
                e[i] = "a[" + i + "]";
              }

              f[n] = Function("F,a", "return new F(" + e.join(",") + ")");
            }

            return f[n](t, r);
          }(r, t.length, t) : c(r, t, n);
        };

        return u(r.prototype) && (i.prototype = r.prototype), i;
      };
    }, {
      33: 33,
      76: 76,
      81: 81
    }],
    47: [function (t, n, r) {
      var i = t(48),
          o = t(152)("toStringTag"),
          u = "Arguments" == i(function () {
        return arguments;
      }());

      n.exports = function (t) {
        var n, r, e;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
          try {
            return t[n];
          } catch (t) {}
        }(n = Object(t), o)) ? r : u ? i(n) : "Object" == (e = i(n)) && "function" == typeof n.callee ? "Arguments" : e;
      };
    }, {
      152: 152,
      48: 48
    }],
    48: [function (t, n, r) {
      var e = {}.toString;

      n.exports = function (t) {
        return e.call(t).slice(8, -1);
      };
    }, {}],
    49: [function (t, n, r) {

      function ag(t, n) {
        var r,
            e = p(n);
        if ("F" !== e) return t._i[e];

        for (r = t._f; r; r = r.n) {
          if (r.k == n) return r;
        }
      }

      var u = t(99).f,
          c = t(98),
          a = t(117),
          f = t(54),
          s = t(37),
          l = t(68),
          e = t(85),
          i = t(87),
          o = t(123),
          h = t(58),
          p = t(94).fastKey,
          v = t(149),
          g = h ? "_s" : "size";
      n.exports = {
        getConstructor: function getConstructor(t, o, r, e) {
          var i = t(function (t, n) {
            s(t, i, o, "_i"), t._t = o, t._i = c(null), t._f = void 0, t._l = void 0, t[g] = 0, null != n && l(n, r, t[e], t);
          });
          return a(i.prototype, {
            clear: function clear() {
              for (var t = v(this, o), n = t._i, r = t._f; r; r = r.n) {
                r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
              }

              t._f = t._l = void 0, t[g] = 0;
            },
            "delete": function _delete(t) {
              var n = v(this, o),
                  r = ag(n, t);

              if (r) {
                var e = r.n,
                    i = r.p;
                delete n._i[r.i], r.r = !0, i && (i.n = e), e && (e.p = i), n._f == r && (n._f = e), n._l == r && (n._l = i), n[g]--;
              }

              return !!r;
            },
            forEach: function forEach(t) {
              v(this, o);

              for (var n, r = f(t, 1 < arguments.length ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) {
                for (r(n.v, n.k, this); n && n.r;) {
                  n = n.p;
                }
              }
            },
            has: function has(t) {
              return !!ag(v(this, o), t);
            }
          }), h && u(i.prototype, "size", {
            get: function get() {
              return v(this, o)[g];
            }
          }), i;
        },
        def: function def(t, n, r) {
          var e,
              i,
              o = ag(t, n);
          return o ? o.v = r : (t._l = o = {
            i: i = p(n, !0),
            k: n,
            v: r,
            p: e = t._l,
            n: void 0,
            r: !1
          }, t._f || (t._f = o), e && (e.n = o), t[g]++, "F" !== i && (t._i[i] = o)), t;
        },
        getEntry: ag,
        setStrong: function setStrong(t, r, n) {
          e(t, r, function (t, n) {
            this._t = v(t, r), this._k = n, this._l = void 0;
          }, function () {
            for (var t = this, n = t._k, r = t._l; r && r.r;) {
              r = r.p;
            }

            return t._t && (t._l = r = r ? r.n : t._t._f) ? i(0, "keys" == n ? r.k : "values" == n ? r.v : [r.k, r.v]) : (t._t = void 0, i(1));
          }, n ? "entries" : "values", !n, !0), o(r);
        }
      };
    }, {
      117: 117,
      123: 123,
      149: 149,
      37: 37,
      54: 54,
      58: 58,
      68: 68,
      85: 85,
      87: 87,
      94: 94,
      98: 98,
      99: 99
    }],
    50: [function (t, n, r) {

      function _g(t) {
        return t._l || (t._l = new g());
      }

      function bh(t, n) {
        return o(t.a, function (t) {
          return t[0] === n;
        });
      }

      var u = t(117),
          c = t(94).getWeak,
          i = t(38),
          a = t(81),
          f = t(37),
          s = t(68),
          e = t(42),
          l = t(71),
          h = t(149),
          o = e(5),
          p = e(6),
          v = 0,
          g = function g() {
        this.a = [];
      };

      g.prototype = {
        get: function get(t) {
          var n = bh(this, t);
          if (n) return n[1];
        },
        has: function has(t) {
          return !!bh(this, t);
        },
        set: function set(t, n) {
          var r = bh(this, t);
          r ? r[1] = n : this.a.push([t, n]);
        },
        "delete": function _delete(n) {
          var t = p(this.a, function (t) {
            return t[0] === n;
          });
          return ~t && this.a.splice(t, 1), !!~t;
        }
      }, n.exports = {
        getConstructor: function getConstructor(t, r, e, i) {
          var o = t(function (t, n) {
            f(t, o, r, "_i"), t._t = r, t._i = v++, t._l = void 0, null != n && s(n, e, t[i], t);
          });
          return u(o.prototype, {
            "delete": function _delete(t) {
              if (!a(t)) return !1;
              var n = c(t);
              return !0 === n ? _g(h(this, r))["delete"](t) : n && l(n, this._i) && delete n[this._i];
            },
            has: function has(t) {
              if (!a(t)) return !1;
              var n = c(t);
              return !0 === n ? _g(h(this, r)).has(t) : n && l(n, this._i);
            }
          }), o;
        },
        def: function def(t, n, r) {
          var e = c(i(n), !0);
          return !0 === e ? _g(t).set(n, r) : e[t._i] = r, t;
        },
        ufstore: _g
      };
    }, {
      117: 117,
      149: 149,
      37: 37,
      38: 38,
      42: 42,
      68: 68,
      71: 71,
      81: 81,
      94: 94
    }],
    51: [function (t, n, r) {

      var y = t(70),
          d = t(62),
          x = t(118),
          m = t(117),
          S = t(94),
          b = t(68),
          w = t(37),
          _ = t(81),
          E = t(64),
          O = t(86),
          F = t(124),
          I = t(75);

      n.exports = function (e, t, n, r, i, o) {
        function ci(t) {
          var r = f[t];
          x(f, t, "delete" == t ? function (t) {
            return !(o && !_(t)) && r.call(this, 0 === t ? 0 : t);
          } : "has" == t ? function has(t) {
            return !(o && !_(t)) && r.call(this, 0 === t ? 0 : t);
          } : "get" == t ? function get(t) {
            return o && !_(t) ? void 0 : r.call(this, 0 === t ? 0 : t);
          } : "add" == t ? function add(t) {
            return r.call(this, 0 === t ? 0 : t), this;
          } : function set(t, n) {
            return r.call(this, 0 === t ? 0 : t, n), this;
          });
        }

        var u = y[e],
            c = u,
            a = i ? "set" : "add",
            f = c && c.prototype,
            s = {};

        if ("function" == typeof c && (o || f.forEach && !E(function () {
          new c().entries().next();
        }))) {
          var l = new c(),
              h = l[a](o ? {} : -0, 1) != l,
              p = E(function () {
            l.has(1);
          }),
              v = O(function (t) {
            new c(t);
          }),
              g = !o && E(function () {
            for (var t = new c(), n = 5; n--;) {
              t[a](n, n);
            }

            return !t.has(-0);
          });
          v || (((c = t(function (t, n) {
            w(t, c, e);
            var r = I(new u(), t, c);
            return null != n && b(n, i, r[a], r), r;
          })).prototype = f).constructor = c), (p || g) && (ci("delete"), ci("has"), i && ci("get")), (g || h) && ci(a), o && f.clear && delete f.clear;
        } else c = r.getConstructor(t, e, i, a), m(c.prototype, n), S.NEED = !0;

        return F(c, e), s[e] = c, d(d.G + d.W + d.F * (c != u), s), o || r.setStrong(c, e, i), c;
      };
    }, {
      117: 117,
      118: 118,
      124: 124,
      37: 37,
      62: 62,
      64: 64,
      68: 68,
      70: 70,
      75: 75,
      81: 81,
      86: 86,
      94: 94
    }],
    52: [function (t, n, r) {
      arguments[4][18][0].apply(r, arguments);
    }, {
      18: 18
    }],
    53: [function (t, n, r) {

      var e = t(99),
          i = t(116);

      n.exports = function (t, n, r) {
        n in t ? e.f(t, n, i(0, r)) : t[n] = r;
      };
    }, {
      116: 116,
      99: 99
    }],
    54: [function (t, n, r) {
      arguments[4][19][0].apply(r, arguments);
    }, {
      19: 19,
      33: 33
    }],
    55: [function (t, n, r) {

      function Qi(t) {
        return 9 < t ? t : "0" + t;
      }

      var e = t(64),
          i = Date.prototype.getTime,
          o = Date.prototype.toISOString;
      n.exports = e(function () {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1));
      }) || !e(function () {
        o.call(new Date(NaN));
      }) ? function toISOString() {
        if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
        var t = this,
            n = t.getUTCFullYear(),
            r = t.getUTCMilliseconds(),
            e = n < 0 ? "-" : 9999 < n ? "+" : "";
        return e + ("00000" + Math.abs(n)).slice(e ? -6 : -4) + "-" + Qi(t.getUTCMonth() + 1) + "-" + Qi(t.getUTCDate()) + "T" + Qi(t.getUTCHours()) + ":" + Qi(t.getUTCMinutes()) + ":" + Qi(t.getUTCSeconds()) + "." + (99 < r ? r : "0" + Qi(r)) + "Z";
      } : o;
    }, {
      64: 64
    }],
    56: [function (t, n, r) {

      var e = t(38),
          i = t(143);

      n.exports = function (t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return i(e(this), "number" != t);
      };
    }, {
      143: 143,
      38: 38
    }],
    57: [function (t, n, r) {
      n.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, {}],
    58: [function (t, n, r) {
      arguments[4][20][0].apply(r, arguments);
    }, {
      20: 20,
      64: 64
    }],
    59: [function (t, n, r) {
      arguments[4][21][0].apply(r, arguments);
    }, {
      21: 21,
      70: 70,
      81: 81
    }],
    60: [function (t, n, r) {
      n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {}],
    61: [function (t, n, r) {
      var c = t(107),
          a = t(104),
          f = t(108);

      n.exports = function (t) {
        var n = c(t),
            r = a.f;
        if (r) for (var e, i = r(t), o = f.f, u = 0; i.length > u;) {
          o.call(t, e = i[u++]) && n.push(e);
        }
        return n;
      };
    }, {
      104: 104,
      107: 107,
      108: 108
    }],
    62: [function (t, n, r) {
      var g = t(70),
          y = t(52),
          d = t(72),
          x = t(118),
          m = t(54),
          S = "prototype",
          b = function b(t, n, r) {
        var e,
            i,
            o,
            u,
            c = t & b.F,
            a = t & b.G,
            f = t & b.S,
            s = t & b.P,
            l = t & b.B,
            h = a ? g : f ? g[n] || (g[n] = {}) : (g[n] || {})[S],
            p = a ? y : y[n] || (y[n] = {}),
            v = p[S] || (p[S] = {});

        for (e in a && (r = n), r) {
          o = ((i = !c && h && void 0 !== h[e]) ? h : r)[e], u = l && i ? m(o, g) : s && "function" == typeof o ? m(Function.call, o) : o, h && x(h, e, o, t & b.U), p[e] != o && d(p, e, u), s && v[e] != o && (v[e] = o);
        }
      };

      g.core = y, b.F = 1, b.G = 2, b.S = 4, b.P = 8, b.B = 16, b.W = 32, b.U = 64, b.R = 128, n.exports = b;
    }, {
      118: 118,
      52: 52,
      54: 54,
      70: 70,
      72: 72
    }],
    63: [function (t, n, r) {
      var e = t(152)("match");

      n.exports = function (n) {
        var r = /./;

        try {
          "/./"[n](r);
        } catch (t) {
          try {
            return r[e] = !1, !"/./"[n](r);
          } catch (t) {}
        }

        return !0;
      };
    }, {
      152: 152
    }],
    64: [function (t, n, r) {
      arguments[4][23][0].apply(r, arguments);
    }, {
      23: 23
    }],
    65: [function (t, n, r) {

      t(248);

      var s = t(118),
          l = t(72),
          h = t(64),
          p = t(57),
          v = t(152),
          g = t(120),
          y = v("species"),
          d = !h(function () {
        var t = /./;
        return t.exec = function () {
          var t = [];
          return t.groups = {
            a: "7"
          }, t;
        }, "7" !== "".replace(t, "$<a>");
      }),
          x = function () {
        var t = /(?:)/,
            n = t.exec;

        t.exec = function () {
          return n.apply(this, arguments);
        };

        var r = "ab".split(t);
        return 2 === r.length && "a" === r[0] && "b" === r[1];
      }();

      n.exports = function (r, t, n) {
        var e = v(r),
            o = !h(function () {
          var t = {};
          return t[e] = function () {
            return 7;
          }, 7 != ""[r](t);
        }),
            i = o ? !h(function () {
          var t = !1,
              n = /a/;
          return n.exec = function () {
            return t = !0, null;
          }, "split" === r && (n.constructor = {}, n.constructor[y] = function () {
            return n;
          }), n[e](""), !t;
        }) : void 0;

        if (!o || !i || "replace" === r && !d || "split" === r && !x) {
          var u = /./[e],
              c = n(p, e, ""[r], function maybeCallNative(t, n, r, e, i) {
            return n.exec === g ? o && !i ? {
              done: !0,
              value: u.call(n, r, e)
            } : {
              done: !0,
              value: t.call(r, n, e)
            } : {
              done: !1
            };
          }),
              a = c[0],
              f = c[1];
          s(String.prototype, r, a), l(RegExp.prototype, e, 2 == t ? function (t, n) {
            return f.call(t, this, n);
          } : function (t) {
            return f.call(t, this);
          });
        }
      };
    }, {
      118: 118,
      120: 120,
      152: 152,
      248: 248,
      57: 57,
      64: 64,
      72: 72
    }],
    66: [function (t, n, r) {

      var e = t(38);

      n.exports = function () {
        var t = e(this),
            n = "";
        return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n;
      };
    }, {
      38: 38
    }],
    67: [function (t, n, r) {

      var p = t(79),
          v = t(81),
          g = t(141),
          y = t(54),
          d = t(152)("isConcatSpreadable");

      n.exports = function flattenIntoArray(t, n, r, e, i, o, u, c) {
        for (var a, f, s = i, l = 0, h = !!u && y(u, c, 3); l < e;) {
          if (l in r) {
            if (a = h ? h(r[l], l, n) : r[l], f = !1, v(a) && (f = void 0 !== (f = a[d]) ? !!f : p(a)), f && 0 < o) s = flattenIntoArray(t, n, a, g(a.length), s, o - 1) - 1;else {
              if (9007199254740991 <= s) throw TypeError();
              t[s] = a;
            }
            s++;
          }

          l++;
        }

        return s;
      };
    }, {
      141: 141,
      152: 152,
      54: 54,
      79: 79,
      81: 81
    }],
    68: [function (t, n, r) {
      var h = t(54),
          p = t(83),
          v = t(78),
          g = t(38),
          y = t(141),
          d = t(153),
          x = {},
          m = {};
      (r = n.exports = function (t, n, r, e, i) {
        var o,
            u,
            c,
            a,
            f = i ? function () {
          return t;
        } : d(t),
            s = h(r, e, n ? 2 : 1),
            l = 0;
        if ("function" != typeof f) throw TypeError(t + " is not iterable!");

        if (v(f)) {
          for (o = y(t.length); l < o; l++) {
            if ((a = n ? s(g(u = t[l])[0], u[1]) : s(t[l])) === x || a === m) return a;
          }
        } else for (c = f.call(t); !(u = c.next()).done;) {
          if ((a = p(c, s, u.value, n)) === x || a === m) return a;
        }
      }).BREAK = x, r.RETURN = m;
    }, {
      141: 141,
      153: 153,
      38: 38,
      54: 54,
      78: 78,
      83: 83
    }],
    69: [function (t, n, r) {
      n.exports = t(126)("native-function-to-string", Function.toString);
    }, {
      126: 126
    }],
    70: [function (t, n, r) {
      arguments[4][24][0].apply(r, arguments);
    }, {
      24: 24
    }],
    71: [function (t, n, r) {
      arguments[4][25][0].apply(r, arguments);
    }, {
      25: 25
    }],
    72: [function (t, n, r) {
      arguments[4][26][0].apply(r, arguments);
    }, {
      116: 116,
      26: 26,
      58: 58,
      99: 99
    }],
    73: [function (t, n, r) {
      var e = t(70).document;
      n.exports = e && e.documentElement;
    }, {
      70: 70
    }],
    74: [function (t, n, r) {
      arguments[4][27][0].apply(r, arguments);
    }, {
      27: 27,
      58: 58,
      59: 59,
      64: 64
    }],
    75: [function (t, n, r) {
      var o = t(81),
          u = t(122).set;

      n.exports = function (t, n, r) {
        var e,
            i = n.constructor;
        return i !== r && "function" == typeof i && (e = i.prototype) !== r.prototype && o(e) && u && u(t, e), t;
      };
    }, {
      122: 122,
      81: 81
    }],
    76: [function (t, n, r) {
      n.exports = function (t, n, r) {
        var e = void 0 === r;

        switch (n.length) {
          case 0:
            return e ? t() : t.call(r);

          case 1:
            return e ? t(n[0]) : t.call(r, n[0]);

          case 2:
            return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);

          case 3:
            return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);

          case 4:
            return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3]);
        }

        return t.apply(r, n);
      };
    }, {}],
    77: [function (t, n, r) {
      var e = t(48);
      n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == e(t) ? t.split("") : Object(t);
      };
    }, {
      48: 48
    }],
    78: [function (t, n, r) {
      var e = t(88),
          i = t(152)("iterator"),
          o = Array.prototype;

      n.exports = function (t) {
        return void 0 !== t && (e.Array === t || o[i] === t);
      };
    }, {
      152: 152,
      88: 88
    }],
    79: [function (t, n, r) {
      var e = t(48);

      n.exports = Array.isArray || function isArray(t) {
        return "Array" == e(t);
      };
    }, {
      48: 48
    }],
    80: [function (t, n, r) {
      var e = t(81),
          i = Math.floor;

      n.exports = function isInteger(t) {
        return !e(t) && isFinite(t) && i(t) === t;
      };
    }, {
      81: 81
    }],
    81: [function (t, n, r) {
      arguments[4][28][0].apply(r, arguments);
    }, {
      28: 28
    }],
    82: [function (t, n, r) {
      var e = t(81),
          i = t(48),
          o = t(152)("match");

      n.exports = function (t) {
        var n;
        return e(t) && (void 0 !== (n = t[o]) ? !!n : "RegExp" == i(t));
      };
    }, {
      152: 152,
      48: 48,
      81: 81
    }],
    83: [function (t, n, r) {
      var o = t(38);

      n.exports = function (n, t, r, e) {
        try {
          return e ? t(o(r)[0], r[1]) : t(r);
        } catch (t) {
          var i = n["return"];
          throw void 0 !== i && o(i.call(n)), t;
        }
      };
    }, {
      38: 38
    }],
    84: [function (t, n, r) {

      var e = t(98),
          i = t(116),
          o = t(124),
          u = {};
      t(72)(u, t(152)("iterator"), function () {
        return this;
      }), n.exports = function (t, n, r) {
        t.prototype = e(u, {
          next: i(1, r)
        }), o(t, n + " Iterator");
      };
    }, {
      116: 116,
      124: 124,
      152: 152,
      72: 72,
      98: 98
    }],
    85: [function (t, n, r) {

      function Qn() {
        return this;
      }

      var x = t(89),
          m = t(62),
          S = t(118),
          b = t(72),
          w = t(88),
          _ = t(84),
          E = t(124),
          O = t(105),
          F = t(152)("iterator"),
          I = !([].keys && "next" in [].keys()),
          P = "values";

      n.exports = function (t, n, r, e, i, o, u) {
        _(r, n, e);

        function Yn(t) {
          if (!I && t in p) return p[t];

          switch (t) {
            case "keys":
              return function keys() {
                return new r(this, t);
              };

            case P:
              return function values() {
                return new r(this, t);
              };
          }

          return function entries() {
            return new r(this, t);
          };
        }

        var c,
            a,
            f,
            s = n + " Iterator",
            l = i == P,
            h = !1,
            p = t.prototype,
            v = p[F] || p["@@iterator"] || i && p[i],
            g = v || Yn(i),
            y = i ? l ? Yn("entries") : g : void 0,
            d = "Array" == n && p.entries || v;
        if (d && (f = O(d.call(new t()))) !== Object.prototype && f.next && (E(f, s, !0), x || "function" == typeof f[F] || b(f, F, Qn)), l && v && v.name !== P && (h = !0, g = function values() {
          return v.call(this);
        }), x && !u || !I && !h && p[F] || b(p, F, g), w[n] = g, w[s] = Qn, i) if (c = {
          values: l ? g : Yn(P),
          keys: o ? g : Yn("keys"),
          entries: y
        }, u) for (a in c) {
          a in p || S(p, a, c[a]);
        } else m(m.P + m.F * (I || h), n, c);
        return c;
      };
    }, {
      105: 105,
      118: 118,
      124: 124,
      152: 152,
      62: 62,
      72: 72,
      84: 84,
      88: 88,
      89: 89
    }],
    86: [function (t, n, r) {
      var o = t(152)("iterator"),
          u = !1;

      try {
        var e = [7][o]();
        e["return"] = function () {
          u = !0;
        }, Array.from(e, function () {
          throw 2;
        });
      } catch (t) {}

      n.exports = function (t, n) {
        if (!n && !u) return !1;
        var r = !1;

        try {
          var e = [7],
              i = e[o]();
          i.next = function () {
            return {
              done: r = !0
            };
          }, e[o] = function () {
            return i;
          }, t(e);
        } catch (t) {}

        return r;
      };
    }, {
      152: 152
    }],
    87: [function (t, n, r) {
      n.exports = function (t, n) {
        return {
          value: n,
          done: !!t
        };
      };
    }, {}],
    88: [function (t, n, r) {
      n.exports = {};
    }, {}],
    89: [function (t, n, r) {
      n.exports = !1;
    }, {}],
    90: [function (t, n, r) {
      var e = Math.expm1;
      n.exports = !e || 22025.465794806718 < e(10) || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function expm1(t) {
        return 0 == (t = +t) ? t : -1e-6 < t && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1;
      } : e;
    }, {}],
    91: [function (t, n, r) {
      var o = t(93),
          e = Math.pow,
          u = e(2, -52),
          c = e(2, -23),
          a = e(2, 127) * (2 - c),
          f = e(2, -126);

      n.exports = Math.fround || function fround(t) {
        var n,
            r,
            e = Math.abs(t),
            i = o(t);
        return e < f ? i * (e / f / c + 1 / u - 1 / u) * f * c : a < (r = (n = (1 + c / u) * e) - (n - e)) || r != r ? i * (1 / 0) : i * r;
      };
    }, {
      93: 93
    }],
    92: [function (t, n, r) {
      n.exports = Math.log1p || function log1p(t) {
        return -1e-8 < (t = +t) && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t);
      };
    }, {}],
    93: [function (t, n, r) {
      n.exports = Math.sign || function sign(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
      };
    }, {}],
    94: [function (t, n, r) {
      function tp(t) {
        u(t, e, {
          value: {
            i: "O" + ++c,
            w: {}
          }
        });
      }

      var e = t(147)("meta"),
          i = t(81),
          o = t(71),
          u = t(99).f,
          c = 0,
          a = Object.isExtensible || function () {
        return !0;
      },
          f = !t(64)(function () {
        return a(Object.preventExtensions({}));
      }),
          s = n.exports = {
        KEY: e,
        NEED: !1,
        fastKey: function fastKey(t, n) {
          if (!i(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

          if (!o(t, e)) {
            if (!a(t)) return "F";
            if (!n) return "E";
            tp(t);
          }

          return t[e].i;
        },
        getWeak: function getWeak(t, n) {
          if (!o(t, e)) {
            if (!a(t)) return !0;
            if (!n) return !1;
            tp(t);
          }

          return t[e].w;
        },
        onFreeze: function onFreeze(t) {
          return f && s.NEED && a(t) && !o(t, e) && tp(t), t;
        }
      };
    }, {
      147: 147,
      64: 64,
      71: 71,
      81: 81,
      99: 99
    }],
    95: [function (t, n, r) {
      var u = t(70),
          c = t(136).set,
          a = u.MutationObserver || u.WebKitMutationObserver,
          f = u.process,
          s = u.Promise,
          l = "process" == t(48)(f);

      n.exports = function () {
        function Qp() {
          var t, n;

          for (l && (t = f.domain) && t.exit(); r;) {
            n = r.fn, r = r.next;

            try {
              n();
            } catch (t) {
              throw r ? i() : e = void 0, t;
            }
          }

          e = void 0, t && t.enter();
        }

        var r, e, i;
        if (l) i = function i() {
          f.nextTick(Qp);
        };else if (!a || u.navigator && u.navigator.standalone) {
          if (s && s.resolve) {
            var t = s.resolve(void 0);

            i = function i() {
              t.then(Qp);
            };
          } else i = function i() {
            c.call(u, Qp);
          };
        } else {
          var n = !0,
              o = document.createTextNode("");
          new a(Qp).observe(o, {
            characterData: !0
          }), i = function i() {
            o.data = n = !n;
          };
        }
        return function (t) {
          var n = {
            fn: t,
            next: void 0
          };
          e && (e.next = n), r || (r = n, i()), e = n;
        };
      };
    }, {
      136: 136,
      48: 48,
      70: 70
    }],
    96: [function (t, n, r) {

      var i = t(33);

      function PromiseCapability(t) {
        var r, e;
        this.promise = new t(function (t, n) {
          if (void 0 !== r || void 0 !== e) throw TypeError("Bad Promise constructor");
          r = t, e = n;
        }), this.resolve = i(r), this.reject = i(e);
      }

      n.exports.f = function (t) {
        return new PromiseCapability(t);
      };
    }, {
      33: 33
    }],
    97: [function (t, n, r) {

      var h = t(58),
          p = t(107),
          v = t(104),
          g = t(108),
          y = t(142),
          d = t(77),
          i = Object.assign;
      n.exports = !i || t(64)(function () {
        var t = {},
            n = {},
            r = Symbol(),
            e = "abcdefghijklmnopqrst";
        return t[r] = 7, e.split("").forEach(function (t) {
          n[t] = t;
        }), 7 != i({}, t)[r] || Object.keys(i({}, n)).join("") != e;
      }) ? function assign(t, n) {
        for (var r = y(t), e = arguments.length, i = 1, o = v.f, u = g.f; i < e;) {
          for (var c, a = d(arguments[i++]), f = o ? p(a).concat(o(a)) : p(a), s = f.length, l = 0; l < s;) {
            c = f[l++], h && !u.call(a, c) || (r[c] = a[c]);
          }
        }

        return r;
      } : i;
    }, {
      104: 104,
      107: 107,
      108: 108,
      142: 142,
      58: 58,
      64: 64,
      77: 77
    }],
    98: [function (e, t, n) {
      function Pq() {}

      var i = e(38),
          o = e(100),
          u = e(60),
          c = e(125)("IE_PROTO"),
          a = "prototype",
          _f = function f() {
        var t,
            n = e(59)("iframe"),
            r = u.length;

        for (n.style.display = "none", e(73).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _f = t.F; r--;) {
          delete _f[a][u[r]];
        }

        return _f();
      };

      t.exports = Object.create || function create(t, n) {
        var r;
        return null !== t ? (Pq[a] = i(t), r = new Pq(), Pq[a] = null, r[c] = t) : r = _f(), void 0 === n ? r : o(r, n);
      };
    }, {
      100: 100,
      125: 125,
      38: 38,
      59: 59,
      60: 60,
      73: 73
    }],
    99: [function (t, n, r) {
      arguments[4][29][0].apply(r, arguments);
    }, {
      143: 143,
      29: 29,
      38: 38,
      58: 58,
      74: 74
    }],
    100: [function (t, n, r) {
      var u = t(99),
          c = t(38),
          a = t(107);
      n.exports = t(58) ? Object.defineProperties : function defineProperties(t, n) {
        c(t);

        for (var r, e = a(n), i = e.length, o = 0; o < i;) {
          u.f(t, r = e[o++], n[r]);
        }

        return t;
      };
    }, {
      107: 107,
      38: 38,
      58: 58,
      99: 99
    }],
    101: [function (t, n, r) {
      var e = t(108),
          i = t(116),
          o = t(140),
          u = t(143),
          c = t(71),
          a = t(74),
          f = Object.getOwnPropertyDescriptor;
      r.f = t(58) ? f : function getOwnPropertyDescriptor(t, n) {
        if (t = o(t), n = u(n, !0), a) try {
          return f(t, n);
        } catch (t) {}
        if (c(t, n)) return i(!e.f.call(t, n), t[n]);
      };
    }, {
      108: 108,
      116: 116,
      140: 140,
      143: 143,
      58: 58,
      71: 71,
      74: 74
    }],
    102: [function (t, n, r) {
      var e = t(140),
          i = t(103).f,
          o = {}.toString,
          u = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      n.exports.f = function getOwnPropertyNames(t) {
        return u && "[object Window]" == o.call(t) ? function (t) {
          try {
            return i(t);
          } catch (t) {
            return u.slice();
          }
        }(t) : i(e(t));
      };
    }, {
      103: 103,
      140: 140
    }],
    103: [function (t, n, r) {
      var e = t(106),
          i = t(60).concat("length", "prototype");

      r.f = Object.getOwnPropertyNames || function getOwnPropertyNames(t) {
        return e(t, i);
      };
    }, {
      106: 106,
      60: 60
    }],
    104: [function (t, n, r) {
      r.f = Object.getOwnPropertySymbols;
    }, {}],
    105: [function (t, n, r) {
      var e = t(71),
          i = t(142),
          o = t(125)("IE_PROTO"),
          u = Object.prototype;

      n.exports = Object.getPrototypeOf || function (t) {
        return t = i(t), e(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
      };
    }, {
      125: 125,
      142: 142,
      71: 71
    }],
    106: [function (t, n, r) {
      var u = t(71),
          c = t(140),
          a = t(41)(!1),
          f = t(125)("IE_PROTO");

      n.exports = function (t, n) {
        var r,
            e = c(t),
            i = 0,
            o = [];

        for (r in e) {
          r != f && u(e, r) && o.push(r);
        }

        for (; n.length > i;) {
          u(e, r = n[i++]) && (~a(o, r) || o.push(r));
        }

        return o;
      };
    }, {
      125: 125,
      140: 140,
      41: 41,
      71: 71
    }],
    107: [function (t, n, r) {
      var e = t(106),
          i = t(60);

      n.exports = Object.keys || function keys(t) {
        return e(t, i);
      };
    }, {
      106: 106,
      60: 60
    }],
    108: [function (t, n, r) {
      r.f = {}.propertyIsEnumerable;
    }, {}],
    109: [function (t, n, r) {
      var i = t(62),
          o = t(52),
          u = t(64);

      n.exports = function (t, n) {
        var r = (o.Object || {})[t] || Object[t],
            e = {};
        e[t] = n(r), i(i.S + i.F * u(function () {
          r(1);
        }), "Object", e);
      };
    }, {
      52: 52,
      62: 62,
      64: 64
    }],
    110: [function (t, n, r) {
      var a = t(58),
          f = t(107),
          s = t(140),
          l = t(108).f;

      n.exports = function (c) {
        return function (t) {
          for (var n, r = s(t), e = f(r), i = e.length, o = 0, u = []; o < i;) {
            n = e[o++], a && !l.call(r, n) || u.push(c ? [n, r[n]] : r[n]);
          }

          return u;
        };
      };
    }, {
      107: 107,
      108: 108,
      140: 140,
      58: 58
    }],
    111: [function (t, n, r) {
      var e = t(103),
          i = t(104),
          o = t(38),
          u = t(70).Reflect;

      n.exports = u && u.ownKeys || function ownKeys(t) {
        var n = e.f(o(t)),
            r = i.f;
        return r ? n.concat(r(t)) : n;
      };
    }, {
      103: 103,
      104: 104,
      38: 38,
      70: 70
    }],
    112: [function (t, n, r) {
      var e = t(70).parseFloat,
          i = t(134).trim;
      n.exports = 1 / e(t(135) + "-0") != -1 / 0 ? function parseFloat(t) {
        var n = i(String(t), 3),
            r = e(n);
        return 0 === r && "-" == n.charAt(0) ? -0 : r;
      } : e;
    }, {
      134: 134,
      135: 135,
      70: 70
    }],
    113: [function (t, n, r) {
      var e = t(70).parseInt,
          i = t(134).trim,
          o = t(135),
          u = /^[-+]?0[xX]/;
      n.exports = 8 !== e(o + "08") || 22 !== e(o + "0x16") ? function parseInt(t, n) {
        var r = i(String(t), 3);
        return e(r, n >>> 0 || (u.test(r) ? 16 : 10));
      } : e;
    }, {
      134: 134,
      135: 135,
      70: 70
    }],
    114: [function (t, n, r) {
      n.exports = function (t) {
        try {
          return {
            e: !1,
            v: t()
          };
        } catch (t) {
          return {
            e: !0,
            v: t
          };
        }
      };
    }, {}],
    115: [function (t, n, r) {
      var e = t(38),
          i = t(81),
          o = t(96);

      n.exports = function (t, n) {
        if (e(t), i(n) && n.constructor === t) return n;
        var r = o.f(t);
        return (0, r.resolve)(n), r.promise;
      };
    }, {
      38: 38,
      81: 81,
      96: 96
    }],
    116: [function (t, n, r) {
      arguments[4][30][0].apply(r, arguments);
    }, {
      30: 30
    }],
    117: [function (t, n, r) {
      var i = t(118);

      n.exports = function (t, n, r) {
        for (var e in n) {
          i(t, e, n[e], r);
        }

        return t;
      };
    }, {
      118: 118
    }],
    118: [function (t, n, r) {
      var o = t(70),
          u = t(72),
          c = t(71),
          a = t(147)("src"),
          e = t(69),
          i = "toString",
          f = ("" + e).split(i);
      t(52).inspectSource = function (t) {
        return e.call(t);
      }, (n.exports = function (t, n, r, e) {
        var i = "function" == typeof r;
        i && (c(r, "name") || u(r, "name", n)), t[n] !== r && (i && (c(r, a) || u(r, a, t[n] ? "" + t[n] : f.join(String(n)))), t === o ? t[n] = r : e ? t[n] ? t[n] = r : u(t, n, r) : (delete t[n], u(t, n, r)));
      })(Function.prototype, i, function toString() {
        return "function" == typeof this && this[a] || e.call(this);
      });
    }, {
      147: 147,
      52: 52,
      69: 69,
      70: 70,
      71: 71,
      72: 72
    }],
    119: [function (t, n, r) {

      var i = t(47),
          o = RegExp.prototype.exec;

      n.exports = function (t, n) {
        var r = t.exec;

        if ("function" == typeof r) {
          var e = r.call(t, n);
          if ("object" != _typeof(e)) throw new TypeError("RegExp exec method returned something other than an Object or null");
          return e;
        }

        if ("RegExp" !== i(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, n);
      };
    }, {
      47: 47
    }],
    120: [function (t, n, r) {

      var e,
          i,
          u = t(66),
          c = RegExp.prototype.exec,
          a = String.prototype.replace,
          o = c,
          f = "lastIndex",
          s = (e = /a/, i = /b*/g, c.call(e, "a"), c.call(i, "a"), 0 !== e[f] || 0 !== i[f]),
          l = void 0 !== /()??/.exec("")[1];
      (s || l) && (o = function exec(t) {
        var n,
            r,
            e,
            i,
            o = this;
        return l && (r = new RegExp("^" + o.source + "$(?!\\s)", u.call(o))), s && (n = o[f]), e = c.call(o, t), s && e && (o[f] = o.global ? e.index + e[0].length : n), l && e && 1 < e.length && a.call(e[0], r, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            void 0 === arguments[i] && (e[i] = void 0);
          }
        }), e;
      }), n.exports = o;
    }, {
      66: 66
    }],
    121: [function (t, n, r) {
      n.exports = Object.is || function is(t, n) {
        return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
      };
    }, {}],
    122: [function (n, t, r) {
      function Wu(t, n) {
        if (i(t), !e(n) && null !== n) throw TypeError(n + ": can't set as prototype!");
      }

      var e = n(81),
          i = n(38);
      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, r, e) {
          try {
            (e = n(54)(Function.call, n(101).f(Object.prototype, "__proto__").set, 2))(t, []), r = !(t instanceof Array);
          } catch (t) {
            r = !0;
          }

          return function setPrototypeOf(t, n) {
            return Wu(t, n), r ? t.__proto__ = n : e(t, n), t;
          };
        }({}, !1) : void 0),
        check: Wu
      };
    }, {
      101: 101,
      38: 38,
      54: 54,
      81: 81
    }],
    123: [function (t, n, r) {

      var e = t(70),
          i = t(99),
          o = t(58),
          u = t(152)("species");

      n.exports = function (t) {
        var n = e[t];
        o && n && !n[u] && i.f(n, u, {
          configurable: !0,
          get: function get() {
            return this;
          }
        });
      };
    }, {
      152: 152,
      58: 58,
      70: 70,
      99: 99
    }],
    124: [function (t, n, r) {
      var e = t(99).f,
          i = t(71),
          o = t(152)("toStringTag");

      n.exports = function (t, n, r) {
        t && !i(t = r ? t : t.prototype, o) && e(t, o, {
          configurable: !0,
          value: n
        });
      };
    }, {
      152: 152,
      71: 71,
      99: 99
    }],
    125: [function (t, n, r) {
      var e = t(126)("keys"),
          i = t(147);

      n.exports = function (t) {
        return e[t] || (e[t] = i(t));
      };
    }, {
      126: 126,
      147: 147
    }],
    126: [function (t, n, r) {
      var e = t(52),
          i = t(70),
          o = "__core-js_shared__",
          u = i[o] || (i[o] = {});
      (n.exports = function (t, n) {
        return u[t] || (u[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: e.version,
        mode: t(89) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      });
    }, {
      52: 52,
      70: 70,
      89: 89
    }],
    127: [function (t, n, r) {
      var i = t(38),
          o = t(33),
          u = t(152)("species");

      n.exports = function (t, n) {
        var r,
            e = i(t).constructor;
        return void 0 === e || null == (r = i(e)[u]) ? n : o(r);
      };
    }, {
      152: 152,
      33: 33,
      38: 38
    }],
    128: [function (t, n, r) {

      var e = t(64);

      n.exports = function (t, n) {
        return !!t && e(function () {
          n ? t.call(null, function () {}, 1) : t.call(null);
        });
      };
    }, {
      64: 64
    }],
    129: [function (t, n, r) {
      var a = t(139),
          f = t(57);

      n.exports = function (c) {
        return function (t, n) {
          var r,
              e,
              i = String(f(t)),
              o = a(n),
              u = i.length;
          return o < 0 || u <= o ? c ? "" : void 0 : (r = i.charCodeAt(o)) < 55296 || 56319 < r || o + 1 === u || (e = i.charCodeAt(o + 1)) < 56320 || 57343 < e ? c ? i.charAt(o) : r : c ? i.slice(o, o + 2) : e - 56320 + (r - 55296 << 10) + 65536;
        };
      };
    }, {
      139: 139,
      57: 57
    }],
    130: [function (t, n, r) {
      var e = t(82),
          i = t(57);

      n.exports = function (t, n, r) {
        if (e(n)) throw TypeError("String#" + r + " doesn't accept regex!");
        return String(i(t));
      };
    }, {
      57: 57,
      82: 82
    }],
    131: [function (t, n, r) {
      function Aw(t, n, r, e) {
        var i = String(u(t)),
            o = "<" + n;
        return "" !== r && (o += " " + r + '="' + String(e).replace(c, "&quot;") + '"'), o + ">" + i + "</" + n + ">";
      }

      var e = t(62),
          i = t(64),
          u = t(57),
          c = /"/g;

      n.exports = function (n, t) {
        var r = {};
        r[n] = t(Aw), e(e.P + e.F * i(function () {
          var t = ""[n]('"');
          return t !== t.toLowerCase() || 3 < t.split('"').length;
        }), "String", r);
      };
    }, {
      57: 57,
      62: 62,
      64: 64
    }],
    132: [function (t, n, r) {
      var s = t(141),
          l = t(133),
          h = t(57);

      n.exports = function (t, n, r, e) {
        var i = String(h(t)),
            o = i.length,
            u = void 0 === r ? " " : String(r),
            c = s(n);
        if (c <= o || "" == u) return i;
        var a = c - o,
            f = l.call(u, Math.ceil(a / u.length));
        return f.length > a && (f = f.slice(0, a)), e ? f + i : i + f;
      };
    }, {
      133: 133,
      141: 141,
      57: 57
    }],
    133: [function (t, n, r) {

      var i = t(139),
          o = t(57);

      n.exports = function repeat(t) {
        var n = String(o(this)),
            r = "",
            e = i(t);
        if (e < 0 || e == 1 / 0) throw RangeError("Count can't be negative");

        for (; 0 < e; (e >>>= 1) && (n += n)) {
          1 & e && (r += n);
        }

        return r;
      };
    }, {
      139: 139,
      57: 57
    }],
    134: [function (t, n, r) {
      function tx(t, n, r) {
        var e = {},
            i = c(function () {
          return !!a[t]() || "​" != "​"[t]();
        }),
            o = e[t] = i ? n(s) : a[t];
        r && (e[r] = o), u(u.P + u.F * i, "String", e);
      }

      var u = t(62),
          e = t(57),
          c = t(64),
          a = t(135),
          i = "[" + a + "]",
          o = RegExp("^" + i + i + "*"),
          f = RegExp(i + i + "*$"),
          s = tx.trim = function (t, n) {
        return t = String(e(t)), 1 & n && (t = t.replace(o, "")), 2 & n && (t = t.replace(f, "")), t;
      };

      n.exports = tx;
    }, {
      135: 135,
      57: 57,
      62: 62,
      64: 64
    }],
    135: [function (t, n, r) {
      n.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    }, {}],
    136: [function (t, n, r) {
      function Zx() {
        var t = +this;

        if (d.hasOwnProperty(t)) {
          var n = d[t];
          delete d[t], n();
        }
      }

      function $x(t) {
        Zx.call(t.data);
      }

      var e,
          i,
          o,
          u = t(54),
          c = t(76),
          a = t(73),
          f = t(59),
          s = t(70),
          l = s.process,
          h = s.setImmediate,
          p = s.clearImmediate,
          v = s.MessageChannel,
          g = s.Dispatch,
          y = 0,
          d = {},
          x = "onreadystatechange";
      h && p || (h = function setImmediate(t) {
        for (var n = [], r = 1; r < arguments.length;) {
          n.push(arguments[r++]);
        }

        return d[++y] = function () {
          c("function" == typeof t ? t : Function(t), n);
        }, e(y), y;
      }, p = function clearImmediate(t) {
        delete d[t];
      }, "process" == t(48)(l) ? e = function e(t) {
        l.nextTick(u(Zx, t, 1));
      } : g && g.now ? e = function e(t) {
        g.now(u(Zx, t, 1));
      } : v ? (o = (i = new v()).port2, i.port1.onmessage = $x, e = u(o.postMessage, o, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (e = function e(t) {
        s.postMessage(t + "", "*");
      }, s.addEventListener("message", $x, !1)) : e = x in f("script") ? function (t) {
        a.appendChild(f("script"))[x] = function () {
          a.removeChild(this), Zx.call(t);
        };
      } : function (t) {
        setTimeout(u(Zx, t, 1), 0);
      }), n.exports = {
        set: h,
        clear: p
      };
    }, {
      48: 48,
      54: 54,
      59: 59,
      70: 70,
      73: 73,
      76: 76
    }],
    137: [function (t, n, r) {
      var e = t(139),
          i = Math.max,
          o = Math.min;

      n.exports = function (t, n) {
        return (t = e(t)) < 0 ? i(t + n, 0) : o(t, n);
      };
    }, {
      139: 139
    }],
    138: [function (t, n, r) {
      var e = t(139),
          i = t(141);

      n.exports = function (t) {
        if (void 0 === t) return 0;
        var n = e(t),
            r = i(n);
        if (n !== r) throw RangeError("Wrong length!");
        return r;
      };
    }, {
      139: 139,
      141: 141
    }],
    139: [function (t, n, r) {
      var e = Math.ceil,
          i = Math.floor;

      n.exports = function (t) {
        return isNaN(t = +t) ? 0 : (0 < t ? i : e)(t);
      };
    }, {}],
    140: [function (t, n, r) {
      var e = t(77),
          i = t(57);

      n.exports = function (t) {
        return e(i(t));
      };
    }, {
      57: 57,
      77: 77
    }],
    141: [function (t, n, r) {
      var e = t(139),
          i = Math.min;

      n.exports = function (t) {
        return 0 < t ? i(e(t), 9007199254740991) : 0;
      };
    }, {
      139: 139
    }],
    142: [function (t, n, r) {
      var e = t(57);

      n.exports = function (t) {
        return Object(e(t));
      };
    }, {
      57: 57
    }],
    143: [function (t, n, r) {
      arguments[4][31][0].apply(r, arguments);
    }, {
      31: 31,
      81: 81
    }],
    144: [function (t, n, r) {

      if (t(58)) {
        var y = t(89),
            d = t(70),
            x = t(64),
            m = t(62),
            S = t(146),
            e = t(145),
            h = t(54),
            b = t(37),
            i = t(116),
            w = t(72),
            o = t(117),
            u = t(139),
            _ = t(141),
            E = t(138),
            c = t(137),
            a = t(143),
            f = t(71),
            O = t(47),
            F = t(81),
            p = t(142),
            v = t(78),
            I = t(98),
            P = t(105),
            A = t(103).f,
            g = t(153),
            s = t(147),
            l = t(152),
            M = t(42),
            k = t(41),
            N = t(127),
            j = t(164),
            R = t(88),
            T = t(86),
            L = t(123),
            C = t(40),
            G = t(39),
            D = t(99),
            U = t(101),
            W = D.f,
            V = U.f,
            B = d.RangeError,
            q = d.TypeError,
            Y = d.Uint8Array,
            z = "ArrayBuffer",
            X = "Shared" + z,
            $ = "BYTES_PER_ELEMENT",
            Q = "prototype",
            Z = Array[Q],
            J = e.ArrayBuffer,
            H = e.DataView,
            K = M(0),
            tt = M(2),
            nt = M(3),
            rt = M(4),
            et = M(5),
            it = M(6),
            ot = k(!0),
            ut = k(!1),
            ct = j.values,
            at = j.keys,
            ft = j.entries,
            st = Z.lastIndexOf,
            lt = Z.reduce,
            ht = Z.reduceRight,
            pt = Z.join,
            vt = Z.sort,
            gt = Z.slice,
            yt = Z.toString,
            dt = Z.toLocaleString,
            xt = l("iterator"),
            mt = l("toStringTag"),
            St = s("typed_constructor"),
            bt = s("def_constructor"),
            wt = S.CONSTR,
            _t = S.TYPED,
            Et = S.VIEW,
            Ot = "Wrong length!",
            Ft = M(1, function (t, n) {
          return kt(N(t, t[bt]), n);
        }),
            It = x(function () {
          return 1 === new Y(new Uint16Array([1]).buffer)[0];
        }),
            Pt = !!Y && !!Y[Q].set && x(function () {
          new Y(1).set({});
        }),
            At = function At(t, n) {
          var r = u(t);
          if (r < 0 || r % n) throw B("Wrong offset!");
          return r;
        },
            Mt = function Mt(t) {
          if (F(t) && _t in t) return t;
          throw q(t + " is not a typed array!");
        },
            kt = function kt(t, n) {
          if (!(F(t) && St in t)) throw q("It is not a typed array constructor!");
          return new t(n);
        },
            Nt = function Nt(t, n) {
          return jt(N(t, t[bt]), n);
        },
            jt = function jt(t, n) {
          for (var r = 0, e = n.length, i = kt(t, e); r < e;) {
            i[r] = n[r++];
          }

          return i;
        },
            Rt = function Rt(t, n, r) {
          W(t, n, {
            get: function get() {
              return this._d[r];
            }
          });
        },
            Tt = function from(t) {
          var n,
              r,
              e,
              i,
              o,
              u,
              c = p(t),
              a = arguments.length,
              f = 1 < a ? arguments[1] : void 0,
              s = void 0 !== f,
              l = g(c);

          if (null != l && !v(l)) {
            for (u = l.call(c), e = [], n = 0; !(o = u.next()).done; n++) {
              e.push(o.value);
            }

            c = e;
          }

          for (s && 2 < a && (f = h(f, arguments[2], 2)), n = 0, r = _(c.length), i = kt(this, r); n < r; n++) {
            i[n] = s ? f(c[n], n) : c[n];
          }

          return i;
        },
            Lt = function of() {
          for (var t = 0, n = arguments.length, r = kt(this, n); t < n;) {
            r[t] = arguments[t++];
          }

          return r;
        },
            Ct = !!Y && x(function () {
          dt.call(new Y(1));
        }),
            Gt = function toLocaleString() {
          return dt.apply(Ct ? gt.call(Mt(this)) : Mt(this), arguments);
        },
            Dt = {
          copyWithin: function copyWithin(t, n) {
            return G.call(Mt(this), t, n, 2 < arguments.length ? arguments[2] : void 0);
          },
          every: function every(t) {
            return rt(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0);
          },
          fill: function fill(t) {
            return C.apply(Mt(this), arguments);
          },
          filter: function filter(t) {
            return Nt(this, tt(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0));
          },
          find: function find(t) {
            return et(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0);
          },
          findIndex: function findIndex(t) {
            return it(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0);
          },
          forEach: function forEach(t) {
            K(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0);
          },
          indexOf: function indexOf(t) {
            return ut(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0);
          },
          includes: function includes(t) {
            return ot(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0);
          },
          join: function join(t) {
            return pt.apply(Mt(this), arguments);
          },
          lastIndexOf: function lastIndexOf(t) {
            return st.apply(Mt(this), arguments);
          },
          map: function map(t) {
            return Ft(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0);
          },
          reduce: function reduce(t) {
            return lt.apply(Mt(this), arguments);
          },
          reduceRight: function reduceRight(t) {
            return ht.apply(Mt(this), arguments);
          },
          reverse: function reverse() {
            for (var t, n = this, r = Mt(n).length, e = Math.floor(r / 2), i = 0; i < e;) {
              t = n[i], n[i++] = n[--r], n[r] = t;
            }

            return n;
          },
          some: function some(t) {
            return nt(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0);
          },
          sort: function sort(t) {
            return vt.call(Mt(this), t);
          },
          subarray: function subarray(t, n) {
            var r = Mt(this),
                e = r.length,
                i = c(t, e);
            return new (N(r, r[bt]))(r.buffer, r.byteOffset + i * r.BYTES_PER_ELEMENT, _((void 0 === n ? e : c(n, e)) - i));
          }
        },
            Ut = function slice(t, n) {
          return Nt(this, gt.call(Mt(this), t, n));
        },
            Wt = function set(t) {
          Mt(this);

          var n = At(arguments[1], 1),
              r = this.length,
              e = p(t),
              i = _(e.length),
              o = 0;

          if (r < i + n) throw B(Ot);

          for (; o < i;) {
            this[n + o] = e[o++];
          }
        },
            Vt = {
          entries: function entries() {
            return ft.call(Mt(this));
          },
          keys: function keys() {
            return at.call(Mt(this));
          },
          values: function values() {
            return ct.call(Mt(this));
          }
        },
            Bt = function Bt(t, n) {
          return F(t) && t[_t] && "symbol" != _typeof(n) && n in t && String(+n) == String(n);
        },
            qt = function getOwnPropertyDescriptor(t, n) {
          return Bt(t, n = a(n, !0)) ? i(2, t[n]) : V(t, n);
        },
            Yt = function defineProperty(t, n, r) {
          return !(Bt(t, n = a(n, !0)) && F(r) && f(r, "value")) || f(r, "get") || f(r, "set") || r.configurable || f(r, "writable") && !r.writable || f(r, "enumerable") && !r.enumerable ? W(t, n, r) : (t[n] = r.value, t);
        };

        wt || (U.f = qt, D.f = Yt), m(m.S + m.F * !wt, "Object", {
          getOwnPropertyDescriptor: qt,
          defineProperty: Yt
        }), x(function () {
          yt.call({});
        }) && (yt = dt = function toString() {
          return pt.call(this);
        });
        var zt = o({}, Dt);
        o(zt, Vt), w(zt, xt, Vt.values), o(zt, {
          slice: Ut,
          set: Wt,
          constructor: function constructor() {},
          toString: yt,
          toLocaleString: Gt
        }), Rt(zt, "buffer", "b"), Rt(zt, "byteOffset", "o"), Rt(zt, "byteLength", "l"), Rt(zt, "length", "e"), W(zt, mt, {
          get: function get() {
            return this[_t];
          }
        }), n.exports = function (t, l, n, o) {
          function CC(t, i) {
            W(t, i, {
              get: function get() {
                return t = i, (n = this._d).v[r](t * l + n.o, It);
                var t, n;
              },
              set: function set(t) {
                return n = i, r = t, e = this._d, o && (r = (r = Math.round(r)) < 0 ? 0 : 255 < r ? 255 : 255 & r), void e.v[u](n * l + e.o, r, It);
                var n, r, e;
              },
              enumerable: !0
            });
          }

          var h = t + ((o = !!o) ? "Clamped" : "") + "Array",
              r = "get" + t,
              u = "set" + t,
              p = d[h],
              c = p || {},
              e = p && P(p),
              i = !p || !S.ABV,
              a = {},
              f = p && p[Q];
          i ? (p = n(function (t, n, r, e) {
            b(t, p, h, "_d");
            var i,
                o,
                u,
                c,
                a = 0,
                f = 0;

            if (F(n)) {
              if (!(n instanceof J || (c = O(n)) == z || c == X)) return _t in n ? jt(p, n) : Tt.call(p, n);
              i = n, f = At(r, l);
              var s = n.byteLength;

              if (void 0 === e) {
                if (s % l) throw B(Ot);
                if ((o = s - f) < 0) throw B(Ot);
              } else if (s < (o = _(e) * l) + f) throw B(Ot);

              u = o / l;
            } else u = E(n), i = new J(o = u * l);

            for (w(t, "_d", {
              b: i,
              o: f,
              l: o,
              e: u,
              v: new H(i)
            }); a < u;) {
              CC(t, a++);
            }
          }), f = p[Q] = I(zt), w(f, "constructor", p)) : x(function () {
            p(1);
          }) && x(function () {
            new p(-1);
          }) && T(function (t) {
            new p(), new p(null), new p(1.5), new p(t);
          }, !0) || (p = n(function (t, n, r, e) {
            var i;
            return b(t, p, h), F(n) ? n instanceof J || (i = O(n)) == z || i == X ? void 0 !== e ? new c(n, At(r, l), e) : void 0 !== r ? new c(n, At(r, l)) : new c(n) : _t in n ? jt(p, n) : Tt.call(p, n) : new c(E(n));
          }), K(e !== Function.prototype ? A(c).concat(A(e)) : A(c), function (t) {
            t in p || w(p, t, c[t]);
          }), p[Q] = f, y || (f.constructor = p));
          var s = f[xt],
              v = !!s && ("values" == s.name || null == s.name),
              g = Vt.values;
          w(p, St, !0), w(f, _t, h), w(f, Et, !0), w(f, bt, p), (o ? new p(1)[mt] == h : mt in f) || W(f, mt, {
            get: function get() {
              return h;
            }
          }), a[h] = p, m(m.G + m.W + m.F * (p != c), a), m(m.S, h, {
            BYTES_PER_ELEMENT: l
          }), m(m.S + m.F * x(function () {
            c.of.call(p, 1);
          }), h, {
            from: Tt,
            of: Lt
          }), $ in f || w(f, $, l), m(m.P, h, Dt), L(h), m(m.P + m.F * Pt, h, {
            set: Wt
          }), m(m.P + m.F * !v, h, Vt), y || f.toString == yt || (f.toString = yt), m(m.P + m.F * x(function () {
            new p(1).slice();
          }), h, {
            slice: Ut
          }), m(m.P + m.F * (x(function () {
            return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString();
          }) || !x(function () {
            f.toLocaleString.call([1, 2]);
          })), h, {
            toLocaleString: Gt
          }), R[h] = v ? s : g, y || v || w(f, xt, g);
        };
      } else n.exports = function () {};
    }, {
      101: 101,
      103: 103,
      105: 105,
      116: 116,
      117: 117,
      123: 123,
      127: 127,
      137: 137,
      138: 138,
      139: 139,
      141: 141,
      142: 142,
      143: 143,
      145: 145,
      146: 146,
      147: 147,
      152: 152,
      153: 153,
      164: 164,
      37: 37,
      39: 39,
      40: 40,
      41: 41,
      42: 42,
      47: 47,
      54: 54,
      58: 58,
      62: 62,
      64: 64,
      70: 70,
      71: 71,
      72: 72,
      78: 78,
      81: 81,
      86: 86,
      88: 88,
      89: 89,
      98: 98,
      99: 99
    }],
    145: [function (t, n, r) {

      var e = t(70),
          i = t(58),
          o = t(89),
          u = t(146),
          c = t(72),
          a = t(117),
          f = t(64),
          s = t(37),
          l = t(139),
          h = t(141),
          p = t(138),
          v = t(103).f,
          g = t(99).f,
          y = t(40),
          d = t(124),
          x = "ArrayBuffer",
          m = "DataView",
          S = "prototype",
          b = "Wrong index!",
          w = e[x],
          _ = e[m],
          E = e.Math,
          O = e.RangeError,
          F = e.Infinity,
          I = w,
          P = E.abs,
          A = E.pow,
          M = E.floor,
          k = E.log,
          N = E.LN2,
          j = "byteLength",
          R = "byteOffset",
          T = i ? "_b" : "buffer",
          L = i ? "_l" : j,
          C = i ? "_o" : R;

      function packIEEE754(t, n, r) {
        var e,
            i,
            o,
            u = new Array(r),
            c = 8 * r - n - 1,
            a = (1 << c) - 1,
            f = a >> 1,
            s = 23 === n ? A(2, -24) - A(2, -77) : 0,
            l = 0,
            h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

        for ((t = P(t)) != t || t === F ? (i = t != t ? 1 : 0, e = a) : (e = M(k(t) / N), t * (o = A(2, -e)) < 1 && (e--, o *= 2), 2 <= (t += 1 <= e + f ? s / o : s * A(2, 1 - f)) * o && (e++, o /= 2), a <= e + f ? (i = 0, e = a) : 1 <= e + f ? (i = (t * o - 1) * A(2, n), e += f) : (i = t * A(2, f - 1) * A(2, n), e = 0)); 8 <= n; u[l++] = 255 & i, i /= 256, n -= 8) {
        }

        for (e = e << n | i, c += n; 0 < c; u[l++] = 255 & e, e /= 256, c -= 8) {
        }

        return u[--l] |= 128 * h, u;
      }

      function unpackIEEE754(t, n, r) {
        var e,
            i = 8 * r - n - 1,
            o = (1 << i) - 1,
            u = o >> 1,
            c = i - 7,
            a = r - 1,
            f = t[a--],
            s = 127 & f;

        for (f >>= 7; 0 < c; s = 256 * s + t[a], a--, c -= 8) {
        }

        for (e = s & (1 << -c) - 1, s >>= -c, c += n; 0 < c; e = 256 * e + t[a], a--, c -= 8) {
        }

        if (0 === s) s = 1 - u;else {
          if (s === o) return e ? NaN : f ? -F : F;
          e += A(2, n), s -= u;
        }
        return (f ? -1 : 1) * e * A(2, s - n);
      }

      function unpackI32(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
      }

      function packI8(t) {
        return [255 & t];
      }

      function packI16(t) {
        return [255 & t, t >> 8 & 255];
      }

      function packI32(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
      }

      function packF64(t) {
        return packIEEE754(t, 52, 8);
      }

      function packF32(t) {
        return packIEEE754(t, 23, 4);
      }

      function addGetter(t, n, r) {
        g(t[S], n, {
          get: function get() {
            return this[r];
          }
        });
      }

      function get(t, n, r, e) {
        var i = p(+r);
        if (i + n > t[L]) throw O(b);
        var o = t[T]._b,
            u = i + t[C],
            c = o.slice(u, u + n);
        return e ? c : c.reverse();
      }

      function set(t, n, r, e, i, o) {
        var u = p(+r);
        if (u + n > t[L]) throw O(b);

        for (var c = t[T]._b, a = u + t[C], f = e(+i), s = 0; s < n; s++) {
          c[a + s] = f[o ? s : n - s - 1];
        }
      }

      if (u.ABV) {
        if (!f(function () {
          w(1);
        }) || !f(function () {
          new w(-1);
        }) || f(function () {
          return new w(), new w(1.5), new w(NaN), w.name != x;
        })) {
          for (var G, D = (w = function ArrayBuffer(t) {
            return s(this, w), new I(p(t));
          })[S] = I[S], U = v(I), W = 0; U.length > W;) {
            (G = U[W++]) in w || c(w, G, I[G]);
          }

          o || (D.constructor = w);
        }

        var V = new _(new w(2)),
            B = _[S].setInt8;
        V.setInt8(0, 2147483648), V.setInt8(1, 2147483649), !V.getInt8(0) && V.getInt8(1) || a(_[S], {
          setInt8: function setInt8(t, n) {
            B.call(this, t, n << 24 >> 24);
          },
          setUint8: function setUint8(t, n) {
            B.call(this, t, n << 24 >> 24);
          }
        }, !0);
      } else w = function ArrayBuffer(t) {
        s(this, w, x);
        var n = p(t);
        this._b = y.call(new Array(n), 0), this[L] = n;
      }, _ = function DataView(t, n, r) {
        s(this, _, m), s(t, w, m);
        var e = t[L],
            i = l(n);
        if (i < 0 || e < i) throw O("Wrong offset!");
        if (e < i + (r = void 0 === r ? e - i : h(r))) throw O("Wrong length!");
        this[T] = t, this[C] = i, this[L] = r;
      }, i && (addGetter(w, j, "_l"), addGetter(_, "buffer", "_b"), addGetter(_, j, "_l"), addGetter(_, R, "_o")), a(_[S], {
        getInt8: function getInt8(t) {
          return get(this, 1, t)[0] << 24 >> 24;
        },
        getUint8: function getUint8(t) {
          return get(this, 1, t)[0];
        },
        getInt16: function getInt16(t) {
          var n = get(this, 2, t, arguments[1]);
          return (n[1] << 8 | n[0]) << 16 >> 16;
        },
        getUint16: function getUint16(t) {
          var n = get(this, 2, t, arguments[1]);
          return n[1] << 8 | n[0];
        },
        getInt32: function getInt32(t) {
          return unpackI32(get(this, 4, t, arguments[1]));
        },
        getUint32: function getUint32(t) {
          return unpackI32(get(this, 4, t, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(t) {
          return unpackIEEE754(get(this, 4, t, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(t) {
          return unpackIEEE754(get(this, 8, t, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(t, n) {
          set(this, 1, t, packI8, n);
        },
        setUint8: function setUint8(t, n) {
          set(this, 1, t, packI8, n);
        },
        setInt16: function setInt16(t, n) {
          set(this, 2, t, packI16, n, arguments[2]);
        },
        setUint16: function setUint16(t, n) {
          set(this, 2, t, packI16, n, arguments[2]);
        },
        setInt32: function setInt32(t, n) {
          set(this, 4, t, packI32, n, arguments[2]);
        },
        setUint32: function setUint32(t, n) {
          set(this, 4, t, packI32, n, arguments[2]);
        },
        setFloat32: function setFloat32(t, n) {
          set(this, 4, t, packF32, n, arguments[2]);
        },
        setFloat64: function setFloat64(t, n) {
          set(this, 8, t, packF64, n, arguments[2]);
        }
      });

      d(w, x), d(_, m), c(_[S], u.VIEW, !0), r[x] = w, r[m] = _;
    }, {
      103: 103,
      117: 117,
      124: 124,
      138: 138,
      139: 139,
      141: 141,
      146: 146,
      37: 37,
      40: 40,
      58: 58,
      64: 64,
      70: 70,
      72: 72,
      89: 89,
      99: 99
    }],
    146: [function (t, n, r) {
      for (var e, i = t(70), o = t(72), u = t(147), c = u("typed_array"), a = u("view"), f = !(!i.ArrayBuffer || !i.DataView), s = f, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;) {
        (e = i[h[l++]]) ? (o(e.prototype, c, !0), o(e.prototype, a, !0)) : s = !1;
      }

      n.exports = {
        ABV: f,
        CONSTR: s,
        TYPED: c,
        VIEW: a
      };
    }, {
      147: 147,
      70: 70,
      72: 72
    }],
    147: [function (t, n, r) {
      var e = 0,
          i = Math.random();

      n.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + i).toString(36));
      };
    }, {}],
    148: [function (t, n, r) {
      var e = t(70).navigator;
      n.exports = e && e.userAgent || "";
    }, {
      70: 70
    }],
    149: [function (t, n, r) {
      var e = t(81);

      n.exports = function (t, n) {
        if (!e(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
        return t;
      };
    }, {
      81: 81
    }],
    150: [function (t, n, r) {
      var e = t(70),
          i = t(52),
          o = t(89),
          u = t(151),
          c = t(99).f;

      n.exports = function (t) {
        var n = i.Symbol || (i.Symbol = o ? {} : e.Symbol || {});
        "_" == t.charAt(0) || t in n || c(n, t, {
          value: u.f(t)
        });
      };
    }, {
      151: 151,
      52: 52,
      70: 70,
      89: 89,
      99: 99
    }],
    151: [function (t, n, r) {
      r.f = t(152);
    }, {
      152: 152
    }],
    152: [function (t, n, r) {
      var e = t(126)("wks"),
          i = t(147),
          o = t(70).Symbol,
          u = "function" == typeof o;
      (n.exports = function (t) {
        return e[t] || (e[t] = u && o[t] || (u ? o : i)("Symbol." + t));
      }).store = e;
    }, {
      126: 126,
      147: 147,
      70: 70
    }],
    153: [function (t, n, r) {
      var e = t(47),
          i = t(152)("iterator"),
          o = t(88);

      n.exports = t(52).getIteratorMethod = function (t) {
        if (null != t) return t[i] || t["@@iterator"] || o[e(t)];
      };
    }, {
      152: 152,
      47: 47,
      52: 52,
      88: 88
    }],
    154: [function (t, n, r) {
      var e = t(62);
      e(e.P, "Array", {
        copyWithin: t(39)
      }), t(35)("copyWithin");
    }, {
      35: 35,
      39: 39,
      62: 62
    }],
    155: [function (t, n, r) {

      var e = t(62),
          i = t(42)(4);
      e(e.P + e.F * !t(128)([].every, !0), "Array", {
        every: function every(t) {
          return i(this, t, arguments[1]);
        }
      });
    }, {
      128: 128,
      42: 42,
      62: 62
    }],
    156: [function (t, n, r) {
      var e = t(62);
      e(e.P, "Array", {
        fill: t(40)
      }), t(35)("fill");
    }, {
      35: 35,
      40: 40,
      62: 62
    }],
    157: [function (t, n, r) {

      var e = t(62),
          i = t(42)(2);
      e(e.P + e.F * !t(128)([].filter, !0), "Array", {
        filter: function filter(t) {
          return i(this, t, arguments[1]);
        }
      });
    }, {
      128: 128,
      42: 42,
      62: 62
    }],
    158: [function (t, n, r) {

      var e = t(62),
          i = t(42)(6),
          o = "findIndex",
          u = !0;
      o in [] && Array(1)[o](function () {
        u = !1;
      }), e(e.P + e.F * u, "Array", {
        findIndex: function findIndex(t) {
          return i(this, t, 1 < arguments.length ? arguments[1] : void 0);
        }
      }), t(35)(o);
    }, {
      35: 35,
      42: 42,
      62: 62
    }],
    159: [function (t, n, r) {

      var e = t(62),
          i = t(42)(5),
          o = "find",
          u = !0;
      o in [] && Array(1)[o](function () {
        u = !1;
      }), e(e.P + e.F * u, "Array", {
        find: function find(t) {
          return i(this, t, 1 < arguments.length ? arguments[1] : void 0);
        }
      }), t(35)(o);
    }, {
      35: 35,
      42: 42,
      62: 62
    }],
    160: [function (t, n, r) {

      var e = t(62),
          i = t(42)(0),
          o = t(128)([].forEach, !0);
      e(e.P + e.F * !o, "Array", {
        forEach: function forEach(t) {
          return i(this, t, arguments[1]);
        }
      });
    }, {
      128: 128,
      42: 42,
      62: 62
    }],
    161: [function (t, n, r) {

      var h = t(54),
          e = t(62),
          p = t(142),
          v = t(83),
          g = t(78),
          y = t(141),
          d = t(53),
          x = t(153);
      e(e.S + e.F * !t(86)(function (t) {
      }), "Array", {
        from: function from(t) {
          var n,
              r,
              e,
              i,
              o = p(t),
              u = "function" == typeof this ? this : Array,
              c = arguments.length,
              a = 1 < c ? arguments[1] : void 0,
              f = void 0 !== a,
              s = 0,
              l = x(o);
          if (f && (a = h(a, 2 < c ? arguments[2] : void 0, 2)), null == l || u == Array && g(l)) for (r = new u(n = y(o.length)); s < n; s++) {
            d(r, s, f ? a(o[s], s) : o[s]);
          } else for (i = l.call(o), r = new u(); !(e = i.next()).done; s++) {
            d(r, s, f ? v(i, a, [e.value, s], !0) : e.value);
          }
          return r.length = s, r;
        }
      });
    }, {
      141: 141,
      142: 142,
      153: 153,
      53: 53,
      54: 54,
      62: 62,
      78: 78,
      83: 83,
      86: 86
    }],
    162: [function (t, n, r) {

      var e = t(62),
          i = t(41)(!1),
          o = [].indexOf,
          u = !!o && 1 / [1].indexOf(1, -0) < 0;
      e(e.P + e.F * (u || !t(128)(o)), "Array", {
        indexOf: function indexOf(t) {
          return u ? o.apply(this, arguments) || 0 : i(this, t, arguments[1]);
        }
      });
    }, {
      128: 128,
      41: 41,
      62: 62
    }],
    163: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Array", {
        isArray: t(79)
      });
    }, {
      62: 62,
      79: 79
    }],
    164: [function (t, n, r) {

      var e = t(35),
          i = t(87),
          o = t(88),
          u = t(140);
      n.exports = t(85)(Array, "Array", function (t, n) {
        this._t = u(t), this._i = 0, this._k = n;
      }, function () {
        var t = this._t,
            n = this._k,
            r = this._i++;
        return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == n ? r : "values" == n ? t[r] : [r, t[r]]);
      }, "values"), o.Arguments = o.Array, e("keys"), e("values"), e("entries");
    }, {
      140: 140,
      35: 35,
      85: 85,
      87: 87,
      88: 88
    }],
    165: [function (t, n, r) {

      var e = t(62),
          i = t(140),
          o = [].join;
      e(e.P + e.F * (t(77) != Object || !t(128)(o)), "Array", {
        join: function join(t) {
          return o.call(i(this), void 0 === t ? "," : t);
        }
      });
    }, {
      128: 128,
      140: 140,
      62: 62,
      77: 77
    }],
    166: [function (t, n, r) {

      var e = t(62),
          i = t(140),
          o = t(139),
          u = t(141),
          c = [].lastIndexOf,
          a = !!c && 1 / [1].lastIndexOf(1, -0) < 0;
      e(e.P + e.F * (a || !t(128)(c)), "Array", {
        lastIndexOf: function lastIndexOf(t) {
          if (a) return c.apply(this, arguments) || 0;
          var n = i(this),
              r = u(n.length),
              e = r - 1;

          for (1 < arguments.length && (e = Math.min(e, o(arguments[1]))), e < 0 && (e = r + e); 0 <= e; e--) {
            if (e in n && n[e] === t) return e || 0;
          }

          return -1;
        }
      });
    }, {
      128: 128,
      139: 139,
      140: 140,
      141: 141,
      62: 62
    }],
    167: [function (t, n, r) {

      var e = t(62),
          i = t(42)(1);
      e(e.P + e.F * !t(128)([].map, !0), "Array", {
        map: function map(t) {
          return i(this, t, arguments[1]);
        }
      });
    }, {
      128: 128,
      42: 42,
      62: 62
    }],
    168: [function (t, n, r) {

      var e = t(62),
          i = t(53);
      e(e.S + e.F * t(64)(function () {
        function F() {}

        return !(Array.of.call(F) instanceof F);
      }), "Array", {
        of: function of() {
          for (var t = 0, n = arguments.length, r = new ("function" == typeof this ? this : Array)(n); t < n;) {
            i(r, t, arguments[t++]);
          }

          return r.length = n, r;
        }
      });
    }, {
      53: 53,
      62: 62,
      64: 64
    }],
    169: [function (t, n, r) {

      var e = t(62),
          i = t(43);
      e(e.P + e.F * !t(128)([].reduceRight, !0), "Array", {
        reduceRight: function reduceRight(t) {
          return i(this, t, arguments.length, arguments[1], !0);
        }
      });
    }, {
      128: 128,
      43: 43,
      62: 62
    }],
    170: [function (t, n, r) {

      var e = t(62),
          i = t(43);
      e(e.P + e.F * !t(128)([].reduce, !0), "Array", {
        reduce: function reduce(t) {
          return i(this, t, arguments.length, arguments[1], !1);
        }
      });
    }, {
      128: 128,
      43: 43,
      62: 62
    }],
    171: [function (t, n, r) {

      var e = t(62),
          i = t(73),
          f = t(48),
          s = t(137),
          l = t(141),
          h = [].slice;
      e(e.P + e.F * t(64)(function () {
        i && h.call(i);
      }), "Array", {
        slice: function slice(t, n) {
          var r = l(this.length),
              e = f(this);
          if (n = void 0 === n ? r : n, "Array" == e) return h.call(this, t, n);

          for (var i = s(t, r), o = s(n, r), u = l(o - i), c = new Array(u), a = 0; a < u; a++) {
            c[a] = "String" == e ? this.charAt(i + a) : this[i + a];
          }

          return c;
        }
      });
    }, {
      137: 137,
      141: 141,
      48: 48,
      62: 62,
      64: 64,
      73: 73
    }],
    172: [function (t, n, r) {

      var e = t(62),
          i = t(42)(3);
      e(e.P + e.F * !t(128)([].some, !0), "Array", {
        some: function some(t) {
          return i(this, t, arguments[1]);
        }
      });
    }, {
      128: 128,
      42: 42,
      62: 62
    }],
    173: [function (t, n, r) {

      var e = t(62),
          i = t(33),
          o = t(142),
          u = t(64),
          c = [].sort,
          a = [1, 2, 3];
      e(e.P + e.F * (u(function () {
        a.sort(void 0);
      }) || !u(function () {
        a.sort(null);
      }) || !t(128)(c)), "Array", {
        sort: function sort(t) {
          return void 0 === t ? c.call(o(this)) : c.call(o(this), i(t));
        }
      });
    }, {
      128: 128,
      142: 142,
      33: 33,
      62: 62,
      64: 64
    }],
    174: [function (t, n, r) {
      t(123)("Array");
    }, {
      123: 123
    }],
    175: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Date", {
        now: function now() {
          return new Date().getTime();
        }
      });
    }, {
      62: 62
    }],
    176: [function (t, n, r) {
      var e = t(62),
          i = t(55);
      e(e.P + e.F * (Date.prototype.toISOString !== i), "Date", {
        toISOString: i
      });
    }, {
      55: 55,
      62: 62
    }],
    177: [function (t, n, r) {

      var e = t(62),
          i = t(142),
          o = t(143);
      e(e.P + e.F * t(64)(function () {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
          toISOString: function toISOString() {
            return 1;
          }
        });
      }), "Date", {
        toJSON: function toJSON(t) {
          var n = i(this),
              r = o(n);
          return "number" != typeof r || isFinite(r) ? n.toISOString() : null;
        }
      });
    }, {
      142: 142,
      143: 143,
      62: 62,
      64: 64
    }],
    178: [function (t, n, r) {
      var e = t(152)("toPrimitive"),
          i = Date.prototype;
      e in i || t(72)(i, e, t(56));
    }, {
      152: 152,
      56: 56,
      72: 72
    }],
    179: [function (t, n, r) {
      var e = Date.prototype,
          i = "Invalid Date",
          o = "toString",
          u = e[o],
          c = e.getTime;
      new Date(NaN) + "" != i && t(118)(e, o, function toString() {
        var t = c.call(this);
        return t == t ? u.call(this) : i;
      });
    }, {
      118: 118
    }],
    180: [function (t, n, r) {
      var e = t(62);
      e(e.P, "Function", {
        bind: t(46)
      });
    }, {
      46: 46,
      62: 62
    }],
    181: [function (t, n, r) {

      var e = t(81),
          i = t(105),
          o = t(152)("hasInstance"),
          u = Function.prototype;
      o in u || t(99).f(u, o, {
        value: function value(t) {
          if ("function" != typeof this || !e(t)) return !1;
          if (!e(this.prototype)) return t instanceof this;

          for (; t = i(t);) {
            if (this.prototype === t) return !0;
          }

          return !1;
        }
      });
    }, {
      105: 105,
      152: 152,
      81: 81,
      99: 99
    }],
    182: [function (t, n, r) {
      var e = t(99).f,
          i = Function.prototype,
          o = /^\s*function ([^ (]*)/;
      "name" in i || t(58) && e(i, "name", {
        configurable: !0,
        get: function get() {
          try {
            return ("" + this).match(o)[1];
          } catch (t) {
            return "";
          }
        }
      });
    }, {
      58: 58,
      99: 99
    }],
    183: [function (t, n, r) {

      var e = t(49),
          i = t(149);
      n.exports = t(51)("Map", function (t) {
        return function Map() {
          return t(this, 0 < arguments.length ? arguments[0] : void 0);
        };
      }, {
        get: function get(t) {
          var n = e.getEntry(i(this, "Map"), t);
          return n && n.v;
        },
        set: function set(t, n) {
          return e.def(i(this, "Map"), 0 === t ? 0 : t, n);
        }
      }, e, !0);
    }, {
      149: 149,
      49: 49,
      51: 51
    }],
    184: [function (t, n, r) {
      var e = t(62),
          i = t(92),
          o = Math.sqrt,
          u = Math.acosh;
      e(e.S + e.F * !(u && 710 == Math.floor(u(Number.MAX_VALUE)) && u(1 / 0) == 1 / 0), "Math", {
        acosh: function acosh(t) {
          return (t = +t) < 1 ? NaN : 94906265.62425156 < t ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1));
        }
      });
    }, {
      62: 62,
      92: 92
    }],
    185: [function (t, n, r) {
      var e = t(62),
          i = Math.asinh;
      e(e.S + e.F * !(i && 0 < 1 / i(0)), "Math", {
        asinh: function asinh(t) {
          return isFinite(t = +t) && 0 != t ? t < 0 ? -asinh(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t;
        }
      });
    }, {
      62: 62
    }],
    186: [function (t, n, r) {
      var e = t(62),
          i = Math.atanh;
      e(e.S + e.F * !(i && 1 / i(-0) < 0), "Math", {
        atanh: function atanh(t) {
          return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
        }
      });
    }, {
      62: 62
    }],
    187: [function (t, n, r) {
      var e = t(62),
          i = t(93);
      e(e.S, "Math", {
        cbrt: function cbrt(t) {
          return i(t = +t) * Math.pow(Math.abs(t), 1 / 3);
        }
      });
    }, {
      62: 62,
      93: 93
    }],
    188: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Math", {
        clz32: function clz32(t) {
          return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
        }
      });
    }, {
      62: 62
    }],
    189: [function (t, n, r) {
      var e = t(62),
          i = Math.exp;
      e(e.S, "Math", {
        cosh: function cosh(t) {
          return (i(t = +t) + i(-t)) / 2;
        }
      });
    }, {
      62: 62
    }],
    190: [function (t, n, r) {
      var e = t(62),
          i = t(90);
      e(e.S + e.F * (i != Math.expm1), "Math", {
        expm1: i
      });
    }, {
      62: 62,
      90: 90
    }],
    191: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Math", {
        fround: t(91)
      });
    }, {
      62: 62,
      91: 91
    }],
    192: [function (t, n, r) {
      var e = t(62),
          a = Math.abs;
      e(e.S, "Math", {
        hypot: function hypot(t, n) {
          for (var r, e, i = 0, o = 0, u = arguments.length, c = 0; o < u;) {
            c < (r = a(arguments[o++])) ? (i = i * (e = c / r) * e + 1, c = r) : i += 0 < r ? (e = r / c) * e : r;
          }

          return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i);
        }
      });
    }, {
      62: 62
    }],
    193: [function (t, n, r) {
      var e = t(62),
          i = Math.imul;
      e(e.S + e.F * t(64)(function () {
        return -5 != i(4294967295, 5) || 2 != i.length;
      }), "Math", {
        imul: function imul(t, n) {
          var r = 65535,
              e = +t,
              i = +n,
              o = r & e,
              u = r & i;
          return 0 | o * u + ((r & e >>> 16) * u + o * (r & i >>> 16) << 16 >>> 0);
        }
      });
    }, {
      62: 62,
      64: 64
    }],
    194: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Math", {
        log10: function log10(t) {
          return Math.log(t) * Math.LOG10E;
        }
      });
    }, {
      62: 62
    }],
    195: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Math", {
        log1p: t(92)
      });
    }, {
      62: 62,
      92: 92
    }],
    196: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Math", {
        log2: function log2(t) {
          return Math.log(t) / Math.LN2;
        }
      });
    }, {
      62: 62
    }],
    197: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Math", {
        sign: t(93)
      });
    }, {
      62: 62,
      93: 93
    }],
    198: [function (t, n, r) {
      var e = t(62),
          i = t(90),
          o = Math.exp;
      e(e.S + e.F * t(64)(function () {
        return -2e-17 != !Math.sinh(-2e-17);
      }), "Math", {
        sinh: function sinh(t) {
          return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2);
        }
      });
    }, {
      62: 62,
      64: 64,
      90: 90
    }],
    199: [function (t, n, r) {
      var e = t(62),
          i = t(90),
          o = Math.exp;
      e(e.S, "Math", {
        tanh: function tanh(t) {
          var n = i(t = +t),
              r = i(-t);
          return n == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (n - r) / (o(t) + o(-t));
        }
      });
    }, {
      62: 62,
      90: 90
    }],
    200: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Math", {
        trunc: function trunc(t) {
          return (0 < t ? Math.floor : Math.ceil)(t);
        }
      });
    }, {
      62: 62
    }],
    201: [function (t, n, r) {

      function EN(t) {
        var n = s(t, !1);

        if ("string" == typeof n && 2 < n.length) {
          var r,
              e,
              i,
              o = (n = x ? n.trim() : h(n, 3)).charCodeAt(0);

          if (43 === o || 45 === o) {
            if (88 === (r = n.charCodeAt(2)) || 120 === r) return NaN;
          } else if (48 === o) {
            switch (n.charCodeAt(1)) {
              case 66:
              case 98:
                e = 2, i = 49;
                break;

              case 79:
              case 111:
                e = 8, i = 55;
                break;

              default:
                return +n;
            }

            for (var u, c = n.slice(2), a = 0, f = c.length; a < f; a++) {
              if ((u = c.charCodeAt(a)) < 48 || i < u) return NaN;
            }

            return parseInt(c, e);
          }
        }

        return +n;
      }

      var e = t(70),
          i = t(71),
          o = t(48),
          u = t(75),
          s = t(143),
          c = t(64),
          a = t(103).f,
          f = t(101).f,
          l = t(99).f,
          h = t(134).trim,
          p = "Number",
          v = e[p],
          g = v,
          y = v.prototype,
          d = o(t(98)(y)) == p,
          x = "trim" in String.prototype;

      if (!v(" 0o1") || !v("0b1") || v("+0x1")) {
        v = function Number(t) {
          var n = arguments.length < 1 ? 0 : t,
              r = this;
          return r instanceof v && (d ? c(function () {
            y.valueOf.call(r);
          }) : o(r) != p) ? u(new g(EN(n)), r, v) : EN(n);
        };

        for (var m, S = t(58) ? a(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; S.length > b; b++) {
          i(g, m = S[b]) && !i(v, m) && l(v, m, f(g, m));
        }

        (v.prototype = y).constructor = v, t(118)(e, p, v);
      }
    }, {
      101: 101,
      103: 103,
      118: 118,
      134: 134,
      143: 143,
      48: 48,
      58: 58,
      64: 64,
      70: 70,
      71: 71,
      75: 75,
      98: 98,
      99: 99
    }],
    202: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Number", {
        EPSILON: Math.pow(2, -52)
      });
    }, {
      62: 62
    }],
    203: [function (t, n, r) {
      var e = t(62),
          i = t(70).isFinite;
      e(e.S, "Number", {
        isFinite: function isFinite(t) {
          return "number" == typeof t && i(t);
        }
      });
    }, {
      62: 62,
      70: 70
    }],
    204: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Number", {
        isInteger: t(80)
      });
    }, {
      62: 62,
      80: 80
    }],
    205: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Number", {
        isNaN: function isNaN(t) {
          return t != t;
        }
      });
    }, {
      62: 62
    }],
    206: [function (t, n, r) {
      var e = t(62),
          i = t(80),
          o = Math.abs;
      e(e.S, "Number", {
        isSafeInteger: function isSafeInteger(t) {
          return i(t) && o(t) <= 9007199254740991;
        }
      });
    }, {
      62: 62,
      80: 80
    }],
    207: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
      });
    }, {
      62: 62
    }],
    208: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
      });
    }, {
      62: 62
    }],
    209: [function (t, n, r) {
      var e = t(62),
          i = t(112);
      e(e.S + e.F * (Number.parseFloat != i), "Number", {
        parseFloat: i
      });
    }, {
      112: 112,
      62: 62
    }],
    210: [function (t, n, r) {
      var e = t(62),
          i = t(113);
      e(e.S + e.F * (Number.parseInt != i), "Number", {
        parseInt: i
      });
    }, {
      113: 113,
      62: 62
    }],
    211: [function (t, n, r) {

      function XO(t, n) {
        for (var r = -1, e = n; ++r < 6;) {
          e += t * u[r], u[r] = e % 1e7, e = o(e / 1e7);
        }
      }

      function YO(t) {
        for (var n = 6, r = 0; 0 <= --n;) {
          r += u[n], u[n] = o(r / t), r = r % t * 1e7;
        }
      }

      function ZO() {
        for (var t = 6, n = ""; 0 <= --t;) {
          if ("" !== n || 0 === t || 0 !== u[t]) {
            var r = String(u[t]);
            n = "" === n ? r : n + l.call("0", 7 - r.length) + r;
          }
        }

        return n;
      }

      var e = t(62),
          f = t(139),
          s = t(34),
          l = t(133),
          i = 1..toFixed,
          o = Math.floor,
          u = [0, 0, 0, 0, 0, 0],
          h = "Number.toFixed: incorrect invocation!",
          p = function p(t, n, r) {
        return 0 === n ? r : n % 2 == 1 ? p(t, n - 1, r * t) : p(t * t, n / 2, r);
      };

      e(e.P + e.F * (!!i && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !t(64)(function () {
        i.call({});
      })), "Number", {
        toFixed: function toFixed(t) {
          var n,
              r,
              e,
              i,
              o = s(this, h),
              u = f(t),
              c = "",
              a = "0";
          if (u < 0 || 20 < u) throw RangeError(h);
          if (o != o) return "NaN";
          if (o <= -1e21 || 1e21 <= o) return String(o);
          if (o < 0 && (c = "-", o = -o), 1e-21 < o) if (r = (n = function (t) {
            for (var n = 0, r = t; 4096 <= r;) {
              n += 12, r /= 4096;
            }

            for (; 2 <= r;) {
              n += 1, r /= 2;
            }

            return n;
          }(o * p(2, 69, 1)) - 69) < 0 ? o * p(2, -n, 1) : o / p(2, n, 1), r *= 4503599627370496, 0 < (n = 52 - n)) {
            for (XO(0, r), e = u; 7 <= e;) {
              XO(1e7, 0), e -= 7;
            }

            for (XO(p(10, e, 1), 0), e = n - 1; 23 <= e;) {
              YO(1 << 23), e -= 23;
            }

            YO(1 << e), XO(1, 1), YO(2), a = ZO();
          } else XO(0, r), XO(1 << -n, 0), a = ZO() + l.call("0", u);
          return a = 0 < u ? c + ((i = a.length) <= u ? "0." + l.call("0", u - i) + a : a.slice(0, i - u) + "." + a.slice(i - u)) : c + a;
        }
      });
    }, {
      133: 133,
      139: 139,
      34: 34,
      62: 62,
      64: 64
    }],
    212: [function (t, n, r) {

      var e = t(62),
          i = t(64),
          o = t(34),
          u = 1..toPrecision;
      e(e.P + e.F * (i(function () {
        return "1" !== u.call(1, void 0);
      }) || !i(function () {
        u.call({});
      })), "Number", {
        toPrecision: function toPrecision(t) {
          var n = o(this, "Number#toPrecision: incorrect invocation!");
          return void 0 === t ? u.call(n) : u.call(n, t);
        }
      });
    }, {
      34: 34,
      62: 62,
      64: 64
    }],
    213: [function (t, n, r) {
      var e = t(62);
      e(e.S + e.F, "Object", {
        assign: t(97)
      });
    }, {
      62: 62,
      97: 97
    }],
    214: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Object", {
        create: t(98)
      });
    }, {
      62: 62,
      98: 98
    }],
    215: [function (t, n, r) {
      var e = t(62);
      e(e.S + e.F * !t(58), "Object", {
        defineProperties: t(100)
      });
    }, {
      100: 100,
      58: 58,
      62: 62
    }],
    216: [function (t, n, r) {
      var e = t(62);
      e(e.S + e.F * !t(58), "Object", {
        defineProperty: t(99).f
      });
    }, {
      58: 58,
      62: 62,
      99: 99
    }],
    217: [function (t, n, r) {
      var e = t(81),
          i = t(94).onFreeze;
      t(109)("freeze", function (n) {
        return function freeze(t) {
          return n && e(t) ? n(i(t)) : t;
        };
      });
    }, {
      109: 109,
      81: 81,
      94: 94
    }],
    218: [function (t, n, r) {
      var e = t(140),
          i = t(101).f;
      t(109)("getOwnPropertyDescriptor", function () {
        return function getOwnPropertyDescriptor(t, n) {
          return i(e(t), n);
        };
      });
    }, {
      101: 101,
      109: 109,
      140: 140
    }],
    219: [function (t, n, r) {
      t(109)("getOwnPropertyNames", function () {
        return t(102).f;
      });
    }, {
      102: 102,
      109: 109
    }],
    220: [function (t, n, r) {
      var e = t(142),
          i = t(105);
      t(109)("getPrototypeOf", function () {
        return function getPrototypeOf(t) {
          return i(e(t));
        };
      });
    }, {
      105: 105,
      109: 109,
      142: 142
    }],
    221: [function (t, n, r) {
      var e = t(81);
      t(109)("isExtensible", function (n) {
        return function isExtensible(t) {
          return !!e(t) && (!n || n(t));
        };
      });
    }, {
      109: 109,
      81: 81
    }],
    222: [function (t, n, r) {
      var e = t(81);
      t(109)("isFrozen", function (n) {
        return function isFrozen(t) {
          return !e(t) || !!n && n(t);
        };
      });
    }, {
      109: 109,
      81: 81
    }],
    223: [function (t, n, r) {
      var e = t(81);
      t(109)("isSealed", function (n) {
        return function isSealed(t) {
          return !e(t) || !!n && n(t);
        };
      });
    }, {
      109: 109,
      81: 81
    }],
    224: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Object", {
        is: t(121)
      });
    }, {
      121: 121,
      62: 62
    }],
    225: [function (t, n, r) {
      var e = t(142),
          i = t(107);
      t(109)("keys", function () {
        return function keys(t) {
          return i(e(t));
        };
      });
    }, {
      107: 107,
      109: 109,
      142: 142
    }],
    226: [function (t, n, r) {
      var e = t(81),
          i = t(94).onFreeze;
      t(109)("preventExtensions", function (n) {
        return function preventExtensions(t) {
          return n && e(t) ? n(i(t)) : t;
        };
      });
    }, {
      109: 109,
      81: 81,
      94: 94
    }],
    227: [function (t, n, r) {
      var e = t(81),
          i = t(94).onFreeze;
      t(109)("seal", function (n) {
        return function seal(t) {
          return n && e(t) ? n(i(t)) : t;
        };
      });
    }, {
      109: 109,
      81: 81,
      94: 94
    }],
    228: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Object", {
        setPrototypeOf: t(122).set
      });
    }, {
      122: 122,
      62: 62
    }],
    229: [function (t, n, r) {

      var e = t(47),
          i = {};
      i[t(152)("toStringTag")] = "z", i + "" != "[object z]" && t(118)(Object.prototype, "toString", function toString() {
        return "[object " + e(this) + "]";
      }, !0);
    }, {
      118: 118,
      152: 152,
      47: 47
    }],
    230: [function (t, n, r) {
      var e = t(62),
          i = t(112);
      e(e.G + e.F * (parseFloat != i), {
        parseFloat: i
      });
    }, {
      112: 112,
      62: 62
    }],
    231: [function (t, n, r) {
      var e = t(62),
          i = t(113);
      e(e.G + e.F * (parseInt != i), {
        parseInt: i
      });
    }, {
      113: 113,
      62: 62
    }],
    232: [function (r, t, n) {

      function $R() {}

      function fS(t) {
        var n;
        return !(!h(t) || "function" != typeof (n = t.then)) && n;
      }

      function gS(s, r) {
        if (!s._n) {
          s._n = !0;
          var e = s._c;
          x(function () {
            for (var a = s._v, f = 1 == s._s, t = 0, n = function n(t) {
              var n,
                  r,
                  e,
                  i = f ? t.ok : t.fail,
                  o = t.resolve,
                  u = t.reject,
                  c = t.domain;

              try {
                i ? (f || (2 == s._h && R(s), s._h = 1), !0 === i ? n = a : (c && c.enter(), n = i(a), c && (c.exit(), e = !0)), n === t.promise ? u(E("Promise-chain cycle")) : (r = fS(n)) ? r.call(n, o, u) : o(n)) : u(a);
              } catch (t) {
                c && !e && c.exit(), u(t);
              }
            }; e.length > t;) {
              n(e[t++]);
            }

            s._c = [], s._n = !1, r && !s._h && N(s);
          });
        }
      }

      function kS(t) {
        var n = this;
        n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), gS(n, !0));
      }

      var e,
          i,
          o,
          u,
          c = r(89),
          a = r(70),
          f = r(54),
          s = r(47),
          l = r(62),
          h = r(81),
          p = r(33),
          v = r(37),
          g = r(68),
          y = r(127),
          d = r(136).set,
          x = r(95)(),
          m = r(96),
          S = r(114),
          b = r(148),
          w = r(115),
          _ = "Promise",
          E = a.TypeError,
          O = a.process,
          F = O && O.versions,
          I = F && F.v8 || "",
          P = a[_],
          A = "process" == s(O),
          M = i = m.f,
          k = !!function () {
        try {
          var t = P.resolve(1),
              n = (t.constructor = {})[r(152)("species")] = function (t) {
            t($R, $R);
          };

          return (A || "function" == typeof PromiseRejectionEvent) && t.then($R) instanceof n && 0 !== I.indexOf("6.6") && -1 === b.indexOf("Chrome/66");
        } catch (t) {}
      }(),
          N = function N(o) {
        d.call(a, function () {
          var t,
              n,
              r,
              e = o._v,
              i = j(o);
          if (i && (t = S(function () {
            A ? O.emit("unhandledRejection", e, o) : (n = a.onunhandledrejection) ? n({
              promise: o,
              reason: e
            }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", e);
          }), o._h = A || j(o) ? 2 : 1), o._a = void 0, i && t.e) throw t.v;
        });
      },
          j = function j(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
          R = function R(n) {
        d.call(a, function () {
          var t;
          A ? O.emit("rejectionHandled", n) : (t = a.onrejectionhandled) && t({
            promise: n,
            reason: n._v
          });
        });
      },
          T = function T(t) {
        var r,
            e = this;

        if (!e._d) {
          e._d = !0, e = e._w || e;

          try {
            if (e === t) throw E("Promise can't be resolved itself");
            (r = fS(t)) ? x(function () {
              var n = {
                _w: e,
                _d: !1
              };

              try {
                r.call(t, f(T, n, 1), f(kS, n, 1));
              } catch (t) {
                kS.call(n, t);
              }
            }) : (e._v = t, e._s = 1, gS(e, !1));
          } catch (t) {
            kS.call({
              _w: e,
              _d: !1
            }, t);
          }
        }
      };

      k || (P = function Promise(t) {
        v(this, P, _, "_h"), p(t), e.call(this);

        try {
          t(f(T, this, 1), f(kS, this, 1));
        } catch (t) {
          kS.call(this, t);
        }
      }, (e = function Promise(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }).prototype = r(117)(P.prototype, {
        then: function then(t, n) {
          var r = M(y(this, P));
          return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = A ? O.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && gS(this, !1), r.promise;
        },
        "catch": function _catch(t) {
          return this.then(void 0, t);
        }
      }), o = function o() {
        var t = new e();
        this.promise = t, this.resolve = f(T, t, 1), this.reject = f(kS, t, 1);
      }, m.f = M = function M(t) {
        return t === P || t === u ? new o(t) : i(t);
      }), l(l.G + l.W + l.F * !k, {
        Promise: P
      }), r(124)(P, _), r(123)(_), u = r(52)[_], l(l.S + l.F * !k, _, {
        reject: function reject(t) {
          var n = M(this);
          return (0, n.reject)(t), n.promise;
        }
      }), l(l.S + l.F * (c || !k), _, {
        resolve: function resolve(t) {
          return w(c && this === u ? P : this, t);
        }
      }), l(l.S + l.F * !(k && r(86)(function (t) {
        P.all(t)["catch"]($R);
      })), _, {
        all: function all(t) {
          var u = this,
              n = M(u),
              c = n.resolve,
              a = n.reject,
              r = S(function () {
            var e = [],
                i = 0,
                o = 1;
            g(t, !1, function (t) {
              var n = i++,
                  r = !1;
              e.push(void 0), o++, u.resolve(t).then(function (t) {
                r || (r = !0, e[n] = t, --o || c(e));
              }, a);
            }), --o || c(e);
          });
          return r.e && a(r.v), n.promise;
        },
        race: function race(t) {
          var n = this,
              r = M(n),
              e = r.reject,
              i = S(function () {
            g(t, !1, function (t) {
              n.resolve(t).then(r.resolve, e);
            });
          });
          return i.e && e(i.v), r.promise;
        }
      });
    }, {
      114: 114,
      115: 115,
      117: 117,
      123: 123,
      124: 124,
      127: 127,
      136: 136,
      148: 148,
      152: 152,
      33: 33,
      37: 37,
      47: 47,
      52: 52,
      54: 54,
      62: 62,
      68: 68,
      70: 70,
      81: 81,
      86: 86,
      89: 89,
      95: 95,
      96: 96
    }],
    233: [function (t, n, r) {
      var e = t(62),
          o = t(33),
          u = t(38),
          c = (t(70).Reflect || {}).apply,
          a = Function.apply;
      e(e.S + e.F * !t(64)(function () {
        c(function () {});
      }), "Reflect", {
        apply: function apply(t, n, r) {
          var e = o(t),
              i = u(r);
          return c ? c(e, n, i) : a.call(e, n, i);
        }
      });
    }, {
      33: 33,
      38: 38,
      62: 62,
      64: 64,
      70: 70
    }],
    234: [function (t, n, r) {
      var e = t(62),
          c = t(98),
          a = t(33),
          f = t(38),
          s = t(81),
          i = t(64),
          l = t(46),
          h = (t(70).Reflect || {}).construct,
          p = i(function () {
        function F() {}

        return !(h(function () {}, [], F) instanceof F);
      }),
          v = !i(function () {
        h(function () {});
      });
      e(e.S + e.F * (p || v), "Reflect", {
        construct: function construct(t, n) {
          a(t), f(n);
          var r = arguments.length < 3 ? t : a(arguments[2]);
          if (v && !p) return h(t, n, r);

          if (t == r) {
            switch (n.length) {
              case 0:
                return new t();

              case 1:
                return new t(n[0]);

              case 2:
                return new t(n[0], n[1]);

              case 3:
                return new t(n[0], n[1], n[2]);

              case 4:
                return new t(n[0], n[1], n[2], n[3]);
            }

            var e = [null];
            return e.push.apply(e, n), new (l.apply(t, e))();
          }

          var i = r.prototype,
              o = c(s(i) ? i : Object.prototype),
              u = Function.apply.call(t, o, n);
          return s(u) ? u : o;
        }
      });
    }, {
      33: 33,
      38: 38,
      46: 46,
      62: 62,
      64: 64,
      70: 70,
      81: 81,
      98: 98
    }],
    235: [function (t, n, r) {
      var e = t(99),
          i = t(62),
          o = t(38),
          u = t(143);
      i(i.S + i.F * t(64)(function () {
        Reflect.defineProperty(e.f({}, 1, {
          value: 1
        }), 1, {
          value: 2
        });
      }), "Reflect", {
        defineProperty: function defineProperty(t, n, r) {
          o(t), n = u(n, !0), o(r);

          try {
            return e.f(t, n, r), !0;
          } catch (t) {
            return !1;
          }
        }
      });
    }, {
      143: 143,
      38: 38,
      62: 62,
      64: 64,
      99: 99
    }],
    236: [function (t, n, r) {
      var e = t(62),
          i = t(101).f,
          o = t(38);
      e(e.S, "Reflect", {
        deleteProperty: function deleteProperty(t, n) {
          var r = i(o(t), n);
          return !(r && !r.configurable) && delete t[n];
        }
      });
    }, {
      101: 101,
      38: 38,
      62: 62
    }],
    237: [function (t, n, r) {

      function IU(t) {
        this._t = i(t), this._i = 0;
        var n,
            r = this._k = [];

        for (n in t) {
          r.push(n);
        }
      }

      var e = t(62),
          i = t(38);
      t(84)(IU, "Object", function () {
        var t,
            n = this._k;

        do {
          if (this._i >= n.length) return {
            value: void 0,
            done: !0
          };
        } while (!((t = n[this._i++]) in this._t));

        return {
          value: t,
          done: !1
        };
      }), e(e.S, "Reflect", {
        enumerate: function enumerate(t) {
          return new IU(t);
        }
      });
    }, {
      38: 38,
      62: 62,
      84: 84
    }],
    238: [function (t, n, r) {
      var e = t(101),
          i = t(62),
          o = t(38);
      i(i.S, "Reflect", {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, n) {
          return e.f(o(t), n);
        }
      });
    }, {
      101: 101,
      38: 38,
      62: 62
    }],
    239: [function (t, n, r) {
      var e = t(62),
          i = t(105),
          o = t(38);
      e(e.S, "Reflect", {
        getPrototypeOf: function getPrototypeOf(t) {
          return i(o(t));
        }
      });
    }, {
      105: 105,
      38: 38,
      62: 62
    }],
    240: [function (t, n, r) {
      var o = t(101),
          u = t(105),
          c = t(71),
          e = t(62),
          a = t(81),
          f = t(38);
      e(e.S, "Reflect", {
        get: function get(t, n) {
          var r,
              e,
              i = arguments.length < 3 ? t : arguments[2];
          return f(t) === i ? t[n] : (r = o.f(t, n)) ? c(r, "value") ? r.value : void 0 !== r.get ? r.get.call(i) : void 0 : a(e = u(t)) ? get(e, n, i) : void 0;
        }
      });
    }, {
      101: 101,
      105: 105,
      38: 38,
      62: 62,
      71: 71,
      81: 81
    }],
    241: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Reflect", {
        has: function has(t, n) {
          return n in t;
        }
      });
    }, {
      62: 62
    }],
    242: [function (t, n, r) {
      var e = t(62),
          i = t(38),
          o = Object.isExtensible;
      e(e.S, "Reflect", {
        isExtensible: function isExtensible(t) {
          return i(t), !o || o(t);
        }
      });
    }, {
      38: 38,
      62: 62
    }],
    243: [function (t, n, r) {
      var e = t(62);
      e(e.S, "Reflect", {
        ownKeys: t(111)
      });
    }, {
      111: 111,
      62: 62
    }],
    244: [function (t, n, r) {
      var e = t(62),
          i = t(38),
          o = Object.preventExtensions;
      e(e.S, "Reflect", {
        preventExtensions: function preventExtensions(t) {
          i(t);

          try {
            return o && o(t), !0;
          } catch (t) {
            return !1;
          }
        }
      });
    }, {
      38: 38,
      62: 62
    }],
    245: [function (t, n, r) {
      var e = t(62),
          i = t(122);
      i && e(e.S, "Reflect", {
        setPrototypeOf: function setPrototypeOf(t, n) {
          i.check(t, n);

          try {
            return i.set(t, n), !0;
          } catch (t) {
            return !1;
          }
        }
      });
    }, {
      122: 122,
      62: 62
    }],
    246: [function (t, n, r) {
      var c = t(99),
          a = t(101),
          f = t(105),
          s = t(71),
          e = t(62),
          l = t(116),
          h = t(38),
          p = t(81);
      e(e.S, "Reflect", {
        set: function set(t, n, r) {
          var e,
              i,
              o = arguments.length < 4 ? t : arguments[3],
              u = a.f(h(t), n);

          if (!u) {
            if (p(i = f(t))) return set(i, n, r, o);
            u = l(0);
          }

          if (s(u, "value")) {
            if (!1 === u.writable || !p(o)) return !1;

            if (e = a.f(o, n)) {
              if (e.get || e.set || !1 === e.writable) return !1;
              e.value = r, c.f(o, n, e);
            } else c.f(o, n, l(0, r));

            return !0;
          }

          return void 0 !== u.set && (u.set.call(o, r), !0);
        }
      });
    }, {
      101: 101,
      105: 105,
      116: 116,
      38: 38,
      62: 62,
      71: 71,
      81: 81,
      99: 99
    }],
    247: [function (t, n, r) {
      var e = t(70),
          o = t(75),
          i = t(99).f,
          u = t(103).f,
          c = t(82),
          a = t(66),
          f = e.RegExp,
          s = f,
          l = f.prototype,
          h = /a/g,
          p = /a/g,
          v = new f(h) !== h;

      if (t(58) && (!v || t(64)(function () {
        return p[t(152)("match")] = !1, f(h) != h || f(p) == p || "/a/i" != f(h, "i");
      }))) {
        var DW = function DW(n) {
          n in f || i(f, n, {
            configurable: !0,
            get: function get() {
              return s[n];
            },
            set: function set(t) {
              s[n] = t;
            }
          });
        };

        f = function RegExp(t, n) {
          var r = this instanceof f,
              e = c(t),
              i = void 0 === n;
          return !r && e && t.constructor === f && i ? t : o(v ? new s(e && !i ? t.source : t, n) : s((e = t instanceof f) ? t.source : t, e && i ? a.call(t) : n), r ? this : l, f);
        };

        for (var g = u(s), y = 0; g.length > y;) {
          DW(g[y++]);
        }

        (l.constructor = f).prototype = l, t(118)(e, "RegExp", f);
      }

      t(123)("RegExp");
    }, {
      103: 103,
      118: 118,
      123: 123,
      152: 152,
      58: 58,
      64: 64,
      66: 66,
      70: 70,
      75: 75,
      82: 82,
      99: 99
    }],
    248: [function (t, n, r) {

      var e = t(120);
      t(62)({
        target: "RegExp",
        proto: !0,
        forced: e !== /./.exec
      }, {
        exec: e
      });
    }, {
      120: 120,
      62: 62
    }],
    249: [function (t, n, r) {
      t(58) && "g" != /./g.flags && t(99).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: t(66)
      });
    }, {
      58: 58,
      66: 66,
      99: 99
    }],
    250: [function (t, n, r) {

      var l = t(38),
          h = t(141),
          p = t(36),
          v = t(119);
      t(65)("match", 1, function (e, i, f, s) {
        return [function match(t) {
          var n = e(this),
              r = null == t ? void 0 : t[i];
          return void 0 !== r ? r.call(t, n) : new RegExp(t)[i](String(n));
        }, function (t) {
          var n = s(f, t, this);
          if (n.done) return n.value;
          var r = l(t),
              e = String(this);
          if (!r.global) return v(r, e);

          for (var i, o = r.unicode, u = [], c = r.lastIndex = 0; null !== (i = v(r, e));) {
            var a = String(i[0]);
            "" === (u[c] = a) && (r.lastIndex = p(e, h(r.lastIndex), o)), c++;
          }

          return 0 === c ? null : u;
        }];
      });
    }, {
      119: 119,
      141: 141,
      36: 36,
      38: 38,
      65: 65
    }],
    251: [function (t, n, r) {

      var _ = t(38),
          e = t(142),
          E = t(141),
          O = t(139),
          F = t(36),
          I = t(119),
          P = Math.max,
          A = Math.min,
          h = Math.floor,
          p = /\$([$&`']|\d\d?|<[^>]*>)/g,
          v = /\$([$&`']|\d\d?)/g;

      t(65)("replace", 2, function (i, o, b, w) {
        return [function replace(t, n) {
          var r = i(this),
              e = null == t ? void 0 : t[o];
          return void 0 !== e ? e.call(t, r, n) : b.call(String(r), t, n);
        }, function (t, n) {
          var r = w(b, t, this, n);
          if (r.done) return r.value;

          var e = _(t),
              i = String(this),
              o = "function" == typeof n;

          o || (n = String(n));
          var u = e.global;

          if (u) {
            var c = e.unicode;
            e.lastIndex = 0;
          }

          for (var a = [];;) {
            var f = I(e, i);
            if (null === f) break;
            if (a.push(f), !u) break;
            "" === String(f[0]) && (e.lastIndex = F(i, E(e.lastIndex), c));
          }

          for (var s, l = "", h = 0, p = 0; p < a.length; p++) {
            f = a[p];

            for (var v = String(f[0]), g = P(A(O(f.index), i.length), 0), y = [], d = 1; d < f.length; d++) {
              y.push(void 0 === (s = f[d]) ? s : String(s));
            }

            var x = f.groups;

            if (o) {
              var m = [v].concat(y, g, i);
              void 0 !== x && m.push(x);
              var S = String(n.apply(void 0, m));
            } else S = getSubstitution(v, i, g, y, x, n);

            h <= g && (l += i.slice(h, g) + S, h = g + v.length);
          }

          return l + i.slice(h);
        }];

        function getSubstitution(o, u, c, a, f, t) {
          var s = c + o.length,
              l = a.length,
              n = v;
          return void 0 !== f && (f = e(f), n = p), b.call(t, n, function (t, n) {
            var r;

            switch (n.charAt(0)) {
              case "$":
                return "$";

              case "&":
                return o;

              case "`":
                return u.slice(0, c);

              case "'":
                return u.slice(s);

              case "<":
                r = f[n.slice(1, -1)];
                break;

              default:
                var e = +n;
                if (0 == e) return t;

                if (l < e) {
                  var i = h(e / 10);
                  return 0 === i ? t : i <= l ? void 0 === a[i - 1] ? n.charAt(1) : a[i - 1] + n.charAt(1) : t;
                }

                r = a[e - 1];
            }

            return void 0 === r ? "" : r;
          });
        }
      });
    }, {
      119: 119,
      139: 139,
      141: 141,
      142: 142,
      36: 36,
      38: 38,
      65: 65
    }],
    252: [function (t, n, r) {

      var a = t(38),
          f = t(121),
          s = t(119);
      t(65)("search", 1, function (e, i, u, c) {
        return [function search(t) {
          var n = e(this),
              r = null == t ? void 0 : t[i];
          return void 0 !== r ? r.call(t, n) : new RegExp(t)[i](String(n));
        }, function (t) {
          var n = c(u, t, this);
          if (n.done) return n.value;
          var r = a(t),
              e = String(this),
              i = r.lastIndex;
          f(i, 0) || (r.lastIndex = 0);
          var o = s(r, e);
          return f(r.lastIndex, i) || (r.lastIndex = i), null === o ? -1 : o.index;
        }];
      });
    }, {
      119: 119,
      121: 121,
      38: 38,
      65: 65
    }],
    253: [function (t, n, r) {

      var l = t(82),
          m = t(38),
          S = t(127),
          b = t(36),
          w = t(141),
          _ = t(119),
          h = t(120),
          e = t(64),
          E = Math.min,
          p = [].push,
          u = "split",
          v = "length",
          g = "lastIndex",
          O = 4294967295,
          F = !e(function () {
      });

      t(65)("split", 2, function (i, o, y, d) {
        var x;
        return x = "c" == "abbc"[u](/(b)*/)[1] || 4 != "test"[u](/(?:)/, -1)[v] || 2 != "ab"[u](/(?:ab)*/)[v] || 4 != "."[u](/(.?)(.?)/)[v] || 1 < "."[u](/()()/)[v] || ""[u](/.?/)[v] ? function (t, n) {
          var r = String(this);
          if (void 0 === t && 0 === n) return [];
          if (!l(t)) return y.call(r, t, n);

          for (var e, i, o, u = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), a = 0, f = void 0 === n ? O : n >>> 0, s = new RegExp(t.source, c + "g"); (e = h.call(s, r)) && !(a < (i = s[g]) && (u.push(r.slice(a, e.index)), 1 < e[v] && e.index < r[v] && p.apply(u, e.slice(1)), o = e[0][v], a = i, u[v] >= f));) {
            s[g] === e.index && s[g]++;
          }

          return a === r[v] ? !o && s.test("") || u.push("") : u.push(r.slice(a)), u[v] > f ? u.slice(0, f) : u;
        } : "0"[u](void 0, 0)[v] ? function (t, n) {
          return void 0 === t && 0 === n ? [] : y.call(this, t, n);
        } : y, [function split(t, n) {
          var r = i(this),
              e = null == t ? void 0 : t[o];
          return void 0 !== e ? e.call(t, r, n) : x.call(String(r), t, n);
        }, function (t, n) {
          var r = d(x, t, this, n, x !== y);
          if (r.done) return r.value;
          var e = m(t),
              i = String(this),
              o = S(e, RegExp),
              u = e.unicode,
              c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (F ? "y" : "g"),
              a = new o(F ? e : "^(?:" + e.source + ")", c),
              f = void 0 === n ? O : n >>> 0;
          if (0 == f) return [];
          if (0 === i.length) return null === _(a, i) ? [i] : [];

          for (var s = 0, l = 0, h = []; l < i.length;) {
            a.lastIndex = F ? l : 0;

            var p,
                v = _(a, F ? i : i.slice(l));

            if (null === v || (p = E(w(a.lastIndex + (F ? 0 : l)), i.length)) === s) l = b(i, l, u);else {
              if (h.push(i.slice(s, l)), h.length === f) return h;

              for (var g = 1; g <= v.length - 1; g++) {
                if (h.push(v[g]), h.length === f) return h;
              }

              l = s = p;
            }
          }

          return h.push(i.slice(s)), h;
        }];
      });
    }, {
      119: 119,
      120: 120,
      127: 127,
      141: 141,
      36: 36,
      38: 38,
      64: 64,
      65: 65,
      82: 82
    }],
    254: [function (n, t, r) {

      n(249);

      function XZ(t) {
        n(118)(RegExp.prototype, u, t, !0);
      }

      var e = n(38),
          i = n(66),
          o = n(58),
          u = "toString",
          c = /./[u];
      n(64)(function () {
        return "/a/b" != c.call({
          source: "a",
          flags: "b"
        });
      }) ? XZ(function toString() {
        var t = e(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0);
      }) : c.name != u && XZ(function toString() {
        return c.call(this);
      });
    }, {
      118: 118,
      249: 249,
      38: 38,
      58: 58,
      64: 64,
      66: 66
    }],
    255: [function (t, n, r) {

      var e = t(49),
          i = t(149);
      n.exports = t(51)("Set", function (t) {
        return function Set() {
          return t(this, 0 < arguments.length ? arguments[0] : void 0);
        };
      }, {
        add: function add(t) {
          return e.def(i(this, "Set"), t = 0 === t ? 0 : t, t);
        }
      }, e);
    }, {
      149: 149,
      49: 49,
      51: 51
    }],
    256: [function (t, n, r) {

      t(131)("anchor", function (n) {
        return function anchor(t) {
          return n(this, "a", "name", t);
        };
      });
    }, {
      131: 131
    }],
    257: [function (t, n, r) {

      t(131)("big", function (t) {
        return function big() {
          return t(this, "big", "", "");
        };
      });
    }, {
      131: 131
    }],
    258: [function (t, n, r) {

      t(131)("blink", function (t) {
        return function blink() {
          return t(this, "blink", "", "");
        };
      });
    }, {
      131: 131
    }],
    259: [function (t, n, r) {

      t(131)("bold", function (t) {
        return function bold() {
          return t(this, "b", "", "");
        };
      });
    }, {
      131: 131
    }],
    260: [function (t, n, r) {

      var e = t(62),
          i = t(129)(!1);
      e(e.P, "String", {
        codePointAt: function codePointAt(t) {
          return i(this, t);
        }
      });
    }, {
      129: 129,
      62: 62
    }],
    261: [function (t, n, r) {

      var e = t(62),
          u = t(141),
          c = t(130),
          a = "endsWith",
          f = ""[a];
      e(e.P + e.F * t(63)(a), "String", {
        endsWith: function endsWith(t) {
          var n = c(this, t, a),
              r = 1 < arguments.length ? arguments[1] : void 0,
              e = u(n.length),
              i = void 0 === r ? e : Math.min(u(r), e),
              o = String(t);
          return f ? f.call(n, o, i) : n.slice(i - o.length, i) === o;
        }
      });
    }, {
      130: 130,
      141: 141,
      62: 62,
      63: 63
    }],
    262: [function (t, n, r) {

      t(131)("fixed", function (t) {
        return function fixed() {
          return t(this, "tt", "", "");
        };
      });
    }, {
      131: 131
    }],
    263: [function (t, n, r) {

      t(131)("fontcolor", function (n) {
        return function fontcolor(t) {
          return n(this, "font", "color", t);
        };
      });
    }, {
      131: 131
    }],
    264: [function (t, n, r) {

      t(131)("fontsize", function (n) {
        return function fontsize(t) {
          return n(this, "font", "size", t);
        };
      });
    }, {
      131: 131
    }],
    265: [function (t, n, r) {
      var e = t(62),
          o = t(137),
          u = String.fromCharCode,
          i = String.fromCodePoint;
      e(e.S + e.F * (!!i && 1 != i.length), "String", {
        fromCodePoint: function fromCodePoint(t) {
          for (var n, r = [], e = arguments.length, i = 0; i < e;) {
            if (n = +arguments[i++], o(n, 1114111) !== n) throw RangeError(n + " is not a valid code point");
            r.push(n < 65536 ? u(n) : u(55296 + ((n -= 65536) >> 10), n % 1024 + 56320));
          }

          return r.join("");
        }
      });
    }, {
      137: 137,
      62: 62
    }],
    266: [function (t, n, r) {

      var e = t(62),
          i = t(130),
          o = "includes";
      e(e.P + e.F * t(63)(o), "String", {
        includes: function includes(t) {
          return !!~i(this, t, o).indexOf(t, 1 < arguments.length ? arguments[1] : void 0);
        }
      });
    }, {
      130: 130,
      62: 62,
      63: 63
    }],
    267: [function (t, n, r) {

      t(131)("italics", function (t) {
        return function italics() {
          return t(this, "i", "", "");
        };
      });
    }, {
      131: 131
    }],
    268: [function (t, n, r) {

      var e = t(129)(!0);
      t(85)(String, "String", function (t) {
        this._t = String(t), this._i = 0;
      }, function () {
        var t,
            n = this._t,
            r = this._i;
        return r >= n.length ? {
          value: void 0,
          done: !0
        } : (t = e(n, r), this._i += t.length, {
          value: t,
          done: !1
        });
      });
    }, {
      129: 129,
      85: 85
    }],
    269: [function (t, n, r) {

      t(131)("link", function (n) {
        return function link(t) {
          return n(this, "a", "href", t);
        };
      });
    }, {
      131: 131
    }],
    270: [function (t, n, r) {
      var e = t(62),
          u = t(140),
          c = t(141);
      e(e.S, "String", {
        raw: function raw(t) {
          for (var n = u(t.raw), r = c(n.length), e = arguments.length, i = [], o = 0; o < r;) {
            i.push(String(n[o++])), o < e && i.push(String(arguments[o]));
          }

          return i.join("");
        }
      });
    }, {
      140: 140,
      141: 141,
      62: 62
    }],
    271: [function (t, n, r) {
      var e = t(62);
      e(e.P, "String", {
        repeat: t(133)
      });
    }, {
      133: 133,
      62: 62
    }],
    272: [function (t, n, r) {

      t(131)("small", function (t) {
        return function small() {
          return t(this, "small", "", "");
        };
      });
    }, {
      131: 131
    }],
    273: [function (t, n, r) {

      var e = t(62),
          i = t(141),
          o = t(130),
          u = "startsWith",
          c = ""[u];
      e(e.P + e.F * t(63)(u), "String", {
        startsWith: function startsWith(t) {
          var n = o(this, t, u),
              r = i(Math.min(1 < arguments.length ? arguments[1] : void 0, n.length)),
              e = String(t);
          return c ? c.call(n, e, r) : n.slice(r, r + e.length) === e;
        }
      });
    }, {
      130: 130,
      141: 141,
      62: 62,
      63: 63
    }],
    274: [function (t, n, r) {

      t(131)("strike", function (t) {
        return function strike() {
          return t(this, "strike", "", "");
        };
      });
    }, {
      131: 131
    }],
    275: [function (t, n, r) {

      t(131)("sub", function (t) {
        return function sub() {
          return t(this, "sub", "", "");
        };
      });
    }, {
      131: 131
    }],
    276: [function (t, n, r) {

      t(131)("sup", function (t) {
        return function sup() {
          return t(this, "sup", "", "");
        };
      });
    }, {
      131: 131
    }],
    277: [function (t, n, r) {

      t(134)("trim", function (t) {
        return function trim() {
          return t(this, 3);
        };
      });
    }, {
      134: 134
    }],
    278: [function (t, n, r) {

      function B1(t) {
        var n = W[t] = E(j[L]);
        return n._k = t, n;
      }

      function E1(t, n) {
        x(t);

        for (var r, e = y(n = b(n)), i = 0, o = e.length; i < o;) {
          Q(t, r = e[i++], n[r]);
        }

        return t;
      }

      function G1(t) {
        var n = D.call(this, t = w(t, !0));
        return !(this === B && u(W, t) && !u(V, t)) && (!(n || !u(this, t) || !u(W, t) || u(this, C) && this[C][t]) || n);
      }

      function H1(t, n) {
        if (t = b(t), n = w(n, !0), t !== B || !u(W, n) || u(V, n)) {
          var r = M(t, n);
          return !r || !u(W, n) || u(t, C) && t[C][n] || (r.enumerable = !0), r;
        }
      }

      function I1(t) {
        for (var n, r = N(b(t)), e = [], i = 0; r.length > i;) {
          u(W, n = r[i++]) || n == C || n == a || e.push(n);
        }

        return e;
      }

      function J1(t) {
        for (var n, r = t === B, e = N(r ? V : b(t)), i = [], o = 0; e.length > o;) {
          !u(W, n = e[o++]) || r && !u(B, n) || i.push(W[n]);
        }

        return i;
      }

      var e = t(70),
          u = t(71),
          i = t(58),
          o = t(62),
          c = t(118),
          a = t(94).KEY,
          f = t(64),
          s = t(126),
          l = t(124),
          h = t(147),
          p = t(152),
          v = t(151),
          g = t(150),
          y = t(61),
          d = t(79),
          x = t(38),
          m = t(81),
          S = t(142),
          b = t(140),
          w = t(143),
          _ = t(116),
          E = t(98),
          O = t(102),
          F = t(101),
          I = t(104),
          P = t(99),
          A = t(107),
          M = F.f,
          k = P.f,
          N = O.f,
          j = e.Symbol,
          R = e.JSON,
          T = R && R.stringify,
          L = "prototype",
          C = p("_hidden"),
          G = p("toPrimitive"),
          D = {}.propertyIsEnumerable,
          U = s("symbol-registry"),
          W = s("symbols"),
          V = s("op-symbols"),
          B = Object[L],
          q = "function" == typeof j && !!I.f,
          Y = e.QObject,
          z = !Y || !Y[L] || !Y[L].findChild,
          X = i && f(function () {
        return 7 != E(k({}, "a", {
          get: function get() {
            return k(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function (t, n, r) {
        var e = M(B, n);
        e && delete B[n], k(t, n, r), e && t !== B && k(B, n, e);
      } : k,
          $ = q && "symbol" == _typeof(j.iterator) ? function (t) {
        return "symbol" == _typeof(t);
      } : function (t) {
        return t instanceof j;
      },
          Q = function defineProperty(t, n, r) {
        return t === B && Q(V, n, r), x(t), n = w(n, !0), x(r), u(W, n) ? (r.enumerable ? (u(t, C) && t[C][n] && (t[C][n] = !1), r = E(r, {
          enumerable: _(0, !1)
        })) : (u(t, C) || k(t, C, _(1, {})), t[C][n] = !0), X(t, n, r)) : k(t, n, r);
      };

      q || (c((j = function _Symbol() {
        if (this instanceof j) throw TypeError("Symbol is not a constructor!");

        var n = h(0 < arguments.length ? arguments[0] : void 0),
            r = function r(t) {
          this === B && r.call(V, t), u(this, C) && u(this[C], n) && (this[C][n] = !1), X(this, n, _(1, t));
        };

        return i && z && X(B, n, {
          configurable: !0,
          set: r
        }), B1(n);
      })[L], "toString", function toString() {
        return this._k;
      }), F.f = H1, P.f = Q, t(103).f = O.f = I1, t(108).f = G1, I.f = J1, i && !t(89) && c(B, "propertyIsEnumerable", G1, !0), v.f = function (t) {
        return B1(p(t));
      }), o(o.G + o.W + o.F * !q, {
        Symbol: j
      });

      for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), J = 0; Z.length > J;) {
        p(Z[J++]);
      }

      for (var H = A(p.store), K = 0; H.length > K;) {
        g(H[K++]);
      }

      o(o.S + o.F * !q, "Symbol", {
        "for": function _for(t) {
          return u(U, t += "") ? U[t] : U[t] = j(t);
        },
        keyFor: function keyFor(t) {
          if (!$(t)) throw TypeError(t + " is not a symbol!");

          for (var n in U) {
            if (U[n] === t) return n;
          }
        },
        useSetter: function useSetter() {
          z = !0;
        },
        useSimple: function useSimple() {
          z = !1;
        }
      }), o(o.S + o.F * !q, "Object", {
        create: function create(t, n) {
          return void 0 === n ? E(t) : E1(E(t), n);
        },
        defineProperty: Q,
        defineProperties: E1,
        getOwnPropertyDescriptor: H1,
        getOwnPropertyNames: I1,
        getOwnPropertySymbols: J1
      });
      var tt = f(function () {
        I.f(1);
      });
      o(o.S + o.F * tt, "Object", {
        getOwnPropertySymbols: function getOwnPropertySymbols(t) {
          return I.f(S(t));
        }
      }), R && o(o.S + o.F * (!q || f(function () {
        var t = j();
        return "[null]" != T([t]) || "{}" != T({
          a: t
        }) || "{}" != T(Object(t));
      })), "JSON", {
        stringify: function stringify(t) {
          for (var n, r, e = [t], i = 1; i < arguments.length;) {
            e.push(arguments[i++]);
          }

          if (r = n = e[1], (m(n) || void 0 !== t) && !$(t)) return d(n) || (n = function n(t, _n) {
            if ("function" == typeof r && (_n = r.call(this, t, _n)), !$(_n)) return _n;
          }), e[1] = n, T.apply(R, e);
        }
      }), j[L][G] || t(72)(j[L], G, j[L].valueOf), l(j, "Symbol"), l(Math, "Math", !0), l(e.JSON, "JSON", !0);
    }, {
      101: 101,
      102: 102,
      103: 103,
      104: 104,
      107: 107,
      108: 108,
      116: 116,
      118: 118,
      124: 124,
      126: 126,
      140: 140,
      142: 142,
      143: 143,
      147: 147,
      150: 150,
      151: 151,
      152: 152,
      38: 38,
      58: 58,
      61: 61,
      62: 62,
      64: 64,
      70: 70,
      71: 71,
      72: 72,
      79: 79,
      81: 81,
      89: 89,
      94: 94,
      98: 98,
      99: 99
    }],
    279: [function (t, n, r) {

      var e = t(62),
          i = t(146),
          o = t(145),
          f = t(38),
          s = t(137),
          l = t(141),
          u = t(81),
          c = t(70).ArrayBuffer,
          h = t(127),
          p = o.ArrayBuffer,
          v = o.DataView,
          a = i.ABV && c.isView,
          g = p.prototype.slice,
          y = i.VIEW,
          d = "ArrayBuffer";
      e(e.G + e.W + e.F * (c !== p), {
        ArrayBuffer: p
      }), e(e.S + e.F * !i.CONSTR, d, {
        isView: function isView(t) {
          return a && a(t) || u(t) && y in t;
        }
      }), e(e.P + e.U + e.F * t(64)(function () {
        return !new p(2).slice(1, void 0).byteLength;
      }), d, {
        slice: function slice(t, n) {
          if (void 0 !== g && void 0 === n) return g.call(f(this), t);

          for (var r = f(this).byteLength, e = s(t, r), i = s(void 0 === n ? r : n, r), o = new (h(this, p))(l(i - e)), u = new v(this), c = new v(o), a = 0; e < i;) {
            c.setUint8(a++, u.getUint8(e++));
          }

          return o;
        }
      }), t(123)(d);
    }, {
      123: 123,
      127: 127,
      137: 137,
      141: 141,
      145: 145,
      146: 146,
      38: 38,
      62: 62,
      64: 64,
      70: 70,
      81: 81
    }],
    280: [function (t, n, r) {
      var e = t(62);
      e(e.G + e.W + e.F * !t(146).ABV, {
        DataView: t(145).DataView
      });
    }, {
      145: 145,
      146: 146,
      62: 62
    }],
    281: [function (t, n, r) {
      t(144)("Float32", 4, function (e) {
        return function Float32Array(t, n, r) {
          return e(this, t, n, r);
        };
      });
    }, {
      144: 144
    }],
    282: [function (t, n, r) {
      t(144)("Float64", 8, function (e) {
        return function Float64Array(t, n, r) {
          return e(this, t, n, r);
        };
      });
    }, {
      144: 144
    }],
    283: [function (t, n, r) {
      t(144)("Int16", 2, function (e) {
        return function Int16Array(t, n, r) {
          return e(this, t, n, r);
        };
      });
    }, {
      144: 144
    }],
    284: [function (t, n, r) {
      t(144)("Int32", 4, function (e) {
        return function Int32Array(t, n, r) {
          return e(this, t, n, r);
        };
      });
    }, {
      144: 144
    }],
    285: [function (t, n, r) {
      t(144)("Int8", 1, function (e) {
        return function Int8Array(t, n, r) {
          return e(this, t, n, r);
        };
      });
    }, {
      144: 144
    }],
    286: [function (t, n, r) {
      t(144)("Uint16", 2, function (e) {
        return function Uint16Array(t, n, r) {
          return e(this, t, n, r);
        };
      });
    }, {
      144: 144
    }],
    287: [function (t, n, r) {
      t(144)("Uint32", 4, function (e) {
        return function Uint32Array(t, n, r) {
          return e(this, t, n, r);
        };
      });
    }, {
      144: 144
    }],
    288: [function (t, n, r) {
      t(144)("Uint8", 1, function (e) {
        return function Uint8Array(t, n, r) {
          return e(this, t, n, r);
        };
      });
    }, {
      144: 144
    }],
    289: [function (t, n, r) {
      t(144)("Uint8", 1, function (e) {
        return function Uint8ClampedArray(t, n, r) {
          return e(this, t, n, r);
        };
      }, !0);
    }, {
      144: 144
    }],
    290: [function (t, n, r) {

      function R4(t) {
        return function WeakMap() {
          return t(this, 0 < arguments.length ? arguments[0] : void 0);
        };
      }

      var o,
          e = t(70),
          i = t(42)(0),
          u = t(118),
          c = t(94),
          a = t(97),
          f = t(50),
          s = t(81),
          l = t(149),
          h = t(149),
          p = !e.ActiveXObject && "ActiveXObject" in e,
          v = "WeakMap",
          g = c.getWeak,
          y = Object.isExtensible,
          d = f.ufstore,
          x = {
        get: function get(t) {
          if (s(t)) {
            var n = g(t);
            return !0 === n ? d(l(this, v)).get(t) : n ? n[this._i] : void 0;
          }
        },
        set: function set(t, n) {
          return f.def(l(this, v), t, n);
        }
      },
          m = n.exports = t(51)(v, R4, x, f, !0, !0);
      h && p && (a((o = f.getConstructor(R4, v)).prototype, x), c.NEED = !0, i(["delete", "has", "get", "set"], function (e) {
        var t = m.prototype,
            i = t[e];
        u(t, e, function (t, n) {
          if (!s(t) || y(t)) return i.call(this, t, n);
          this._f || (this._f = new o());

          var r = this._f[e](t, n);

          return "set" == e ? this : r;
        });
      }));
    }, {
      118: 118,
      149: 149,
      42: 42,
      50: 50,
      51: 51,
      70: 70,
      81: 81,
      94: 94,
      97: 97
    }],
    291: [function (t, n, r) {

      var e = t(50),
          i = t(149),
          o = "WeakSet";
      t(51)(o, function (t) {
        return function WeakSet() {
          return t(this, 0 < arguments.length ? arguments[0] : void 0);
        };
      }, {
        add: function add(t) {
          return e.def(i(this, o), t, !0);
        }
      }, e, !1, !0);
    }, {
      149: 149,
      50: 50,
      51: 51
    }],
    292: [function (t, n, r) {

      var e = t(62),
          i = t(67),
          o = t(142),
          u = t(141),
          c = t(33),
          a = t(45);
      e(e.P, "Array", {
        flatMap: function flatMap(t) {
          var n,
              r,
              e = o(this);
          return c(t), n = u(e.length), r = a(e, 0), i(r, e, e, n, 0, 1, t, arguments[1]), r;
        }
      }), t(35)("flatMap");
    }, {
      141: 141,
      142: 142,
      33: 33,
      35: 35,
      45: 45,
      62: 62,
      67: 67
    }],
    293: [function (t, n, r) {

      var e = t(62),
          i = t(41)(!0);
      e(e.P, "Array", {
        includes: function includes(t) {
          return i(this, t, 1 < arguments.length ? arguments[1] : void 0);
        }
      }), t(35)("includes");
    }, {
      35: 35,
      41: 41,
      62: 62
    }],
    294: [function (t, n, r) {
      var e = t(62),
          i = t(110)(!0);
      e(e.S, "Object", {
        entries: function entries(t) {
          return i(t);
        }
      });
    }, {
      110: 110,
      62: 62
    }],
    295: [function (t, n, r) {
      var e = t(62),
          a = t(111),
          f = t(140),
          s = t(101),
          l = t(53);
      e(e.S, "Object", {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
          for (var n, r, e = f(t), i = s.f, o = a(e), u = {}, c = 0; o.length > c;) {
            void 0 !== (r = i(e, n = o[c++])) && l(u, n, r);
          }

          return u;
        }
      });
    }, {
      101: 101,
      111: 111,
      140: 140,
      53: 53,
      62: 62
    }],
    296: [function (t, n, r) {
      var e = t(62),
          i = t(110)(!1);
      e(e.S, "Object", {
        values: function values(t) {
          return i(t);
        }
      });
    }, {
      110: 110,
      62: 62
    }],
    297: [function (t, n, r) {

      var e = t(62),
          i = t(52),
          o = t(70),
          u = t(127),
          c = t(115);
      e(e.P + e.R, "Promise", {
        "finally": function _finally(n) {
          var r = u(this, i.Promise || o.Promise),
              t = "function" == typeof n;
          return this.then(t ? function (t) {
            return c(r, n()).then(function () {
              return t;
            });
          } : n, t ? function (t) {
            return c(r, n()).then(function () {
              throw t;
            });
          } : n);
        }
      });
    }, {
      115: 115,
      127: 127,
      52: 52,
      62: 62,
      70: 70
    }],
    298: [function (t, n, r) {

      var e = t(62),
          i = t(132),
          o = t(148),
          u = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
      e(e.P + e.F * u, "String", {
        padEnd: function padEnd(t) {
          return i(this, t, 1 < arguments.length ? arguments[1] : void 0, !1);
        }
      });
    }, {
      132: 132,
      148: 148,
      62: 62
    }],
    299: [function (t, n, r) {

      var e = t(62),
          i = t(132),
          o = t(148),
          u = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
      e(e.P + e.F * u, "String", {
        padStart: function padStart(t) {
          return i(this, t, 1 < arguments.length ? arguments[1] : void 0, !0);
        }
      });
    }, {
      132: 132,
      148: 148,
      62: 62
    }],
    300: [function (t, n, r) {

      t(134)("trimLeft", function (t) {
        return function trimLeft() {
          return t(this, 1);
        };
      }, "trimStart");
    }, {
      134: 134
    }],
    301: [function (t, n, r) {

      t(134)("trimRight", function (t) {
        return function trimRight() {
          return t(this, 2);
        };
      }, "trimEnd");
    }, {
      134: 134
    }],
    302: [function (t, n, r) {
      t(150)("asyncIterator");
    }, {
      150: 150
    }],
    303: [function (t, n, r) {
      for (var e = t(164), i = t(107), o = t(118), u = t(70), c = t(72), a = t(88), f = t(152), s = f("iterator"), l = f("toStringTag"), h = a.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
      }, v = i(p), g = 0; g < v.length; g++) {
        var y,
            d = v[g],
            x = p[d],
            m = u[d],
            S = m && m.prototype;
        if (S && (S[s] || c(S, s, h), S[l] || c(S, l, d), a[d] = h, x)) for (y in e) {
          S[y] || o(S, y, e[y], !0);
        }
      }
    }, {
      107: 107,
      118: 118,
      152: 152,
      164: 164,
      70: 70,
      72: 72,
      88: 88
    }],
    304: [function (t, n, r) {
      var e = t(62),
          i = t(136);
      e(e.G + e.B, {
        setImmediate: i.set,
        clearImmediate: i.clear
      });
    }, {
      136: 136,
      62: 62
    }],
    305: [function (t, n, r) {
      function y7(i) {
        return function (t, n) {
          var r = 2 < arguments.length,
              e = r && u.call(arguments, 2);
          return i(r ? function () {
            ("function" == typeof t ? t : Function(t)).apply(this, e);
          } : t, n);
        };
      }

      var e = t(70),
          i = t(62),
          o = t(148),
          u = [].slice,
          c = /MSIE .\./.test(o);
      i(i.G + i.B + i.F * c, {
        setTimeout: y7(e.setTimeout),
        setInterval: y7(e.setInterval)
      });
    }, {
      148: 148,
      62: 62,
      70: 70
    }],
    306: [function (t, n, r) {
      t(305), t(304), t(303), n.exports = t(52);
    }, {
      303: 303,
      304: 304,
      305: 305,
      52: 52
    }],
    307: [function (t, n, r) {
      var e = function (o) {

        var c,
            t = Object.prototype,
            a = t.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            i = n.iterator || "@@iterator",
            r = n.asyncIterator || "@@asyncIterator",
            e = n.toStringTag || "@@toStringTag";

        function wrap(t, n, r, e) {
          var i = n && n.prototype instanceof Generator ? n : Generator,
              o = Object.create(i.prototype),
              u = new Context(e || []);
          return o._invoke = function makeInvokeMethod(o, u, c) {
            var a = f;
            return function invoke(t, n) {
              if (a === l) throw new Error("Generator is already running");

              if (a === h) {
                if ("throw" === t) throw n;
                return doneResult();
              }

              for (c.method = t, c.arg = n;;) {
                var r = c.delegate;

                if (r) {
                  var e = maybeInvokeDelegate(r, c);

                  if (e) {
                    if (e === p) continue;
                    return e;
                  }
                }

                if ("next" === c.method) c.sent = c._sent = c.arg;else if ("throw" === c.method) {
                  if (a === f) throw a = h, c.arg;
                  c.dispatchException(c.arg);
                } else "return" === c.method && c.abrupt("return", c.arg);
                a = l;
                var i = tryCatch(o, u, c);

                if ("normal" === i.type) {
                  if (a = c.done ? h : s, i.arg === p) continue;
                  return {
                    value: i.arg,
                    done: c.done
                  };
                }

                "throw" === i.type && (a = h, c.method = "throw", c.arg = i.arg);
              }
            };
          }(t, r, u), o;
        }

        function tryCatch(t, n, r) {
          try {
            return {
              type: "normal",
              arg: t.call(n, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }

        o.wrap = wrap;
        var f = "suspendedStart",
            s = "suspendedYield",
            l = "executing",
            h = "completed",
            p = {};

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {}

        var u = {};

        u[i] = function () {
          return this;
        };

        var v = Object.getPrototypeOf,
            g = v && v(v(values([])));
        g && g !== t && a.call(g, i) && (u = g);
        var y = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(u);

        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (n) {
            t[n] = function (t) {
              return this._invoke(n, t);
            };
          });
        }

        function AsyncIterator(c) {
          var t;

          this._invoke = function enqueue(r, e) {
            function callInvokeWithMethodAndArg() {
              return new Promise(function (t, n) {
                !function invoke(t, n, r, e) {
                  var i = tryCatch(c[t], c, n);

                  if ("throw" !== i.type) {
                    var o = i.arg,
                        u = o.value;
                    return u && "object" == _typeof(u) && a.call(u, "__await") ? Promise.resolve(u.__await).then(function (t) {
                      invoke("next", t, r, e);
                    }, function (t) {
                      invoke("throw", t, r, e);
                    }) : Promise.resolve(u).then(function (t) {
                      o.value = t, r(o);
                    }, function (t) {
                      return invoke("throw", t, r, e);
                    });
                  }

                  e(i.arg);
                }(r, e, t, n);
              });
            }

            return t = t ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          };
        }

        function maybeInvokeDelegate(t, n) {
          var r = t.iterator[n.method];

          if (r === c) {
            if (n.delegate = null, "throw" === n.method) {
              if (t.iterator["return"] && (n.method = "return", n.arg = c, maybeInvokeDelegate(t, n), "throw" === n.method)) return p;
              n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return p;
          }

          var e = tryCatch(r, t.iterator, n.arg);
          if ("throw" === e.type) return n.method = "throw", n.arg = e.arg, n.delegate = null, p;
          var i = e.arg;
          return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = c), n.delegate = null, p) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p);
        }

        function pushTryEntry(t) {
          var n = {
            tryLoc: t[0]
          };
          1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n);
        }

        function resetTryEntry(t) {
          var n = t.completion || {};
          n.type = "normal", delete n.arg, t.completion = n;
        }

        function Context(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(pushTryEntry, this), this.reset(!0);
        }

        function values(t) {
          if (t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;

            if (!isNaN(t.length)) {
              var r = -1,
                  e = function next() {
                for (; ++r < t.length;) {
                  if (a.call(t, r)) return next.value = t[r], next.done = !1, next;
                }

                return next.value = c, next.done = !0, next;
              };

              return e.next = e;
            }
          }

          return {
            next: doneResult
          };
        }

        function doneResult() {
          return {
            value: c,
            done: !0
          };
        }

        return GeneratorFunction.prototype = y.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[e] = GeneratorFunction.displayName = "GeneratorFunction", o.isGeneratorFunction = function (t) {
          var n = "function" == typeof t && t.constructor;
          return !!n && (n === GeneratorFunction || "GeneratorFunction" === (n.displayName || n.name));
        }, o.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, e in t || (t[e] = "GeneratorFunction")), t.prototype = Object.create(y), t;
        }, o.awrap = function (t) {
          return {
            __await: t
          };
        }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[r] = function () {
          return this;
        }, o.AsyncIterator = AsyncIterator, o.async = function (t, n, r, e) {
          var i = new AsyncIterator(wrap(t, n, r, e));
          return o.isGeneratorFunction(n) ? i : i.next().then(function (t) {
            return t.done ? t.value : i.next();
          });
        }, defineIteratorMethods(y), y[e] = "Generator", y[i] = function () {
          return this;
        }, y.toString = function () {
          return "[object Generator]";
        }, o.keys = function (n) {
          var r = [];

          for (var t in n) {
            r.push(t);
          }

          return r.reverse(), function next() {
            for (; r.length;) {
              var t = r.pop();
              if (t in n) return next.value = t, next.done = !1, next;
            }

            return next.done = !0, next;
          };
        }, o.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(resetTryEntry), !t) for (var n in this) {
              "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = c);
            }
          },
          stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(r) {
            if (this.done) throw r;
            var e = this;

            function handle(t, n) {
              return i.type = "throw", i.arg = r, e.next = t, n && (e.method = "next", e.arg = c), !!n;
            }

            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var n = this.tryEntries[t],
                  i = n.completion;
              if ("root" === n.tryLoc) return handle("end");

              if (n.tryLoc <= this.prev) {
                var o = a.call(n, "catchLoc"),
                    u = a.call(n, "finallyLoc");

                if (o && u) {
                  if (this.prev < n.catchLoc) return handle(n.catchLoc, !0);
                  if (this.prev < n.finallyLoc) return handle(n.finallyLoc);
                } else if (o) {
                  if (this.prev < n.catchLoc) return handle(n.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < n.finallyLoc) return handle(n.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t, n) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var e = this.tryEntries[r];

              if (e.tryLoc <= this.prev && a.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
                var i = e;
                break;
              }
            }

            i && ("break" === t || "continue" === t) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
            var o = i ? i.completion : {};
            return o.type = t, o.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o);
          },
          complete: function complete(t, n) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), p;
          },
          finish: function finish(t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var r = this.tryEntries[n];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), p;
            }
          },
          "catch": function _catch(t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var r = this.tryEntries[n];

              if (r.tryLoc === t) {
                var e = r.completion;

                if ("throw" === e.type) {
                  var i = e.arg;
                  resetTryEntry(r);
                }

                return i;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(t, n, r) {
            return this.delegate = {
              iterator: values(t),
              resultName: n,
              nextLoc: r
            }, "next" === this.method && (this.arg = c), p;
          }
        }, o;
      }("object" == _typeof(n) ? n.exports : {});

      try {
        regeneratorRuntime = e;
      } catch (t) {
        Function("r", "regeneratorRuntime = r")(e);
      }
    }, {}]
  }, {}, [1]);

  /**
   * Talisman stemmers/french/carry
   * ===============================
   *
   * The Carry stemmer for the French language.
   *
   * [Reference]:
   * http://www.otlet-institute.org/docs/Carry.pdf
   *
   * [Article]:
   * Carry, un algorithme de désuffixation pour le français. M. Paternostre,
   * P. Francq, J. Lamoral, D. Wartel et M. Saerens. 2002
   *
   * [Note]:
   * This algorithm has been edited to handle some more cases and is thus
   * lightly different from the original paper (modifications by Guillaume
   * Plique).
   */

  /**
   * Constants.
   */
  var VOWELS = 'aeiouyâàëéêèïîôûùœæ',
      V = "[".concat(VOWELS, "]"),
      C = "[^".concat(VOWELS, "]");
  var LC = new RegExp("^".concat(C, "+")),
      TV = new RegExp("".concat(V, "+$")),
      M = new RegExp("(".concat(V, "+").concat(C, "+)"));
  /**
   * Helpers.
   */

  function computeM(string) {
    // Removing leading consonants
    string = string.replace(LC, '').replace(TV, '');
    return (string.match(M) || []).length;
  }
  /**
   * Rules.
   */


  var STEP1 = [[0, 'issaient'], [0, 'ellement', 'el'], [0, 'issement'], [0, 'alement', 'al'], [0, 'eraient'], [0, 'iraient'], [0, 'eassent'], [0, 'ussent'], [0, 'amment'], [0, 'emment'], [0, 'issant'], [0, 'issent'], [0, 'assent'], [0, 'eaient'], [0, 'issait'], [0, 'èrent'], [0, 'erent'], [0, 'irent'], [0, 'erait'], [0, 'irait'], [0, 'iront'], [0, 'eront'], [0, 'ement'], [0, 'aient'], [0, 'îrent'], [0, 'eont'], [0, 'eant'], [0, 'eait'], [0, 'ient'], [0, 'ent'], [0, 'ont'], [0, 'ant'], [0, 'eât'], [0, 'ait'], [0, 'at'], [0, 'ât'], [0, 'it'], [0, 'ît'], [0, 't'], [0, 'uction'], [1, 'ication'], [1, 'iation'], [1, 'ation'], [0, 'ition'], [0, 'tion'], [1, 'ateur'], [1, 'teur'], [0, 'eur'], [0, 'ier'], [0, 'er'], [0, 'ir'], [0, 'r'], [0, 'eassiez'], [0, 'issiez'], [0, 'assiez'], [0, 'ussiez'], [0, 'issez'], [0, 'assez'], [0, 'eriez'], [0, 'iriez'], [0, 'erez'], [0, 'irez'], [0, 'iez'], [0, 'ez'], [0, 'erai'], [0, 'irai'], [0, 'eai'], [0, 'ai'], [0, 'i'], [0, 'ira'], [0, 'era'], [0, 'ea'], [0, 'a'], [0, 'f', 'v'], [0, 'yeux', 'oeil'], [0, 'eux'], [0, 'aux', 'al'], [0, 'x'], [0, 'issante'], [1, 'atrice'], // Added
  [0, 'eresse'], [0, 'eante'], [0, 'easse'], [0, 'eure'], [0, 'esse'], [0, 'asse'], [0, 'ance'], [0, 'ence'], [0, 'aise'], [0, 'euse'], [0, 'oise', 'o'], [0, 'isse'], [0, 'ante'], [0, 'ouse', 'ou'], [0, 'ière'], [0, 'ete'], [0, 'ète'], [0, 'iere'], [0, 'aire'], [1, 'ure'], [0, 'erie'], [0, 'étude'], [0, 'etude'], [0, 'itude'], [0, 'ade'], [0, 'isme'], [0, 'age'], [0, 'trice'], [0, 'cque', 'c'], [0, 'que', 'c'], [0, 'eille', 'eil'], [0, 'elle'], [0, 'able'], [0, 'iste'], [0, 'ulle', 'ul'], [0, 'gue', 'g'], [0, 'ette'], [0, 'nne', 'n'], [0, 'itée'], [0, 'ité'], [0, 'té'], [0, 'ée'], [0, 'é'], [0, 'usse'], [0, 'aise'], [0, 'ate'], [0, 'ite'], [0, 'ee'], [0, 'e'], [0, 'issements'], [0, 'issantes'], [1, 'ications'], [0, 'eassions'], [0, 'eresses'], [0, 'issions'], [0, 'assions'], [1, 'atrices'], // Added
  [1, 'iations'], [0, 'issants'], [0, 'ussions'], [0, 'ements'], [0, 'eantes'], [0, 'issons'], [0, 'assons'], [0, 'easses'], [0, 'études'], [0, 'etudes'], [0, 'itudes'], [0, 'issais'], [0, 'trices'], [0, 'eilles', 'eil'], [0, 'irions'], [0, 'erions'], [1, 'ateurs'], [1, 'ations'], [0, 'usses'], [0, 'tions'], [0, 'ances'], [0, 'entes'], [1, 'teurs'], [0, 'eants'], [0, 'ables'], [0, 'irons'], [0, 'irais'], [0, 'ences'], [0, 'ients'], [0, 'ieres'], [0, 'eures'], [0, 'aires'], [0, 'erons'], [0, 'esses'], [0, 'euses'], [0, 'ulles', 'ul'], [0, 'cques', 'c'], [0, 'elles'], [0, 'ables'], [0, 'istes'], [0, 'aises'], [0, 'asses'], [0, 'isses'], [0, 'oises', 'o'], [0, 'tions'], [0, 'ouses', 'ou'], [0, 'ières'], [0, 'eries'], [0, 'antes'], [0, 'ismes'], [0, 'erais'], [0, 'eâtes'], [0, 'eâmes'], [0, 'itées'], [0, 'ettes'], [0, 'ages'], [0, 'eurs'], [0, 'ents'], [0, 'ètes'], [0, 'etes'], [0, 'ions'], [0, 'ités'], [0, 'ites'], [0, 'ates'], [0, 'âtes'], [0, 'îtes'], [0, 'eurs'], [0, 'iers'], [0, 'iras'], [0, 'eras'], [1, 'ures'], [0, 'ants'], [0, 'îmes'], [0, 'ûmes'], [0, 'âmes'], [0, 'ades'], [0, 'eais'], [0, 'eons'], [0, 'ques', 'c'], [0, 'gues', 'g'], [0, 'nnes', 'n'], [0, 'ttes'], [0, 'îtes'], [0, 'tés'], [0, 'ons'], [0, 'ais'], [0, 'ées'], [0, 'ees'], [0, 'ats'], [0, 'eas'], [0, 'ts'], [0, 'rs'], [0, 'as'], [0, 'es'], [0, 'fs', 'v'], [0, 'és'], [0, 'is'], [0, 's'], [0, 'eau'], [0, 'au']];
  var STEP2 = [[1, 'ation'], [1, 'ition'], [1, 'tion'], [1, 'ent'], [1, 'el'], [0, 'i']];
  var STEP3 = [[0, 'll', 'l'], [0, 'mm', 'm'], [0, 'nn', 'n'], [0, 'pp', 'p'], [0, 'tt', 't'], [0, 'ss', 's'], [0, 'y'], [0, 't'], [0, 'qu', 'c']];
  /**
   * Function used to apply a set of rules to the current stem.
   *
   * @param  {string} stem - Target stem.
   * @return {string}      - The resulting stem.
   */

  function applyRules(rules, stem) {
    for (var i = 0, l = rules.length; i < l; i++) {
      var _rules$i = _slicedToArray(rules[i], 3),
          min = _rules$i[0],
          pattern = _rules$i[1],
          _rules$i$ = _rules$i[2],
          replacement = _rules$i$ === void 0 ? '' : _rules$i$;

      if (stem.slice(-pattern.length) === pattern) {
        var newStem = stem.slice(0, -pattern.length) + replacement,
            m = computeM(newStem);
        if (m <= min) continue;
        return newStem;
      }
    }

    return stem;
  }
  /**
   * Function stemming the given world using the Carry algorithm for the French
   * language.
   *
   * @param  {string} word - The word to stem.
   * @return {string}      - The resulting stem.
   */


  function carry(word) {
    var stem = word.toLowerCase();
    stem = applyRules(STEP1, stem);
    stem = applyRules(STEP2, stem);
    stem = applyRules(STEP3, stem);
    return stem;
  }

  var stop = {
    "fr": ["un", "une", "se", "cette", "oui", "non", "on", "aux", "n", "plus", "moins", "alors", "a", "à", "au", "aucuns", "aussi", "autre", "avant", "avec", "avoir", "bon", "car", "ce", "cela", "ces", "ceux", "chaque", "ci", "comme", "comment", "dans", "de", "d", "des", "du", "dedans", "dehors", "depuis", "devrait", "doit", "donc", "dos", "début", "elle", "elles", "en", "encore", "essai", "est", "et", "eu", "fait", "faites", "fois", "font", "hors", "ici", "il", "ils", "je", "juste", "l", "la", "le", "les", "leur", "là", "ma", "maintenant", "mais", "mes", "mine", "moins", "mon", "mot", "même", "ni", "nommés", "notre", "nous", "ou", "où", "par", "parce", "pas", "peut", "peu", "plupart", "pour", "pourquoi", "quand", "qu", "que", "quel", "quelle", "quelles", "quels", "qui", "sa", "sans", "ses", "seulement", "s", "si", "sien", "son", "sont", "sous", "soyez", "sujet", "sur", "ta", "tandis", "tellement", "tels", "tes", "ton", "tous", "tout", "trop", "très", "t", "tu", "voient", "vont", "votre", "vous", "vu", "ça", "étaient", "état", "étions", "été", "être", "soit"],
    "en": ["a", "able", "about", "above", "abst", "accordance", "according", "accordingly", "across", "act", "actually", "added", "adj", "affected", "affecting", "affects", "after", "afterwards", "again", "against", "ah", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "announce", "another", "any", "anybody", "anyhow", "anymore", "anyone", "anything", "anyway", "anyways", "anywhere", "apparently", "approximately", "are", "aren", "arent", "arise", "around", "as", "aside", "ask", "asking", "at", "auth", "available", "away", "awfully", "b", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "beginning", "beginnings", "begins", "behind", "being", "believe", "below", "beside", "besides", "between", "beyond", "biol", "both", "brief", "briefly", "but", "by", "c", "ca", "came", "can", "cannot", "can't", "cause", "causes", "certain", "certainly", "co", "com", "come", "comes", "contain", "containing", "contains", "could", "couldnt", "d", "date", "did", "didn't", "different", "do", "does", "doesn't", "doing", "done", "don't", "down", "downwards", "due", "during", "e", "each", "ed", "edu", "effect", "eg", "eight", "eighty", "either", "else", "elsewhere", "end", "ending", "enough", "especially", "et", "et-al", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "except", "f", "far", "few", "ff", "fifth", "first", "five", "fix", "followed", "following", "follows", "for", "former", "formerly", "forth", "found", "four", "from", "further", "furthermore", "g", "gave", "get", "gets", "getting", "give", "given", "gives", "giving", "go", "goes", "gone", "got", "gotten", "h", "had", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "hed", "hence", "her", "here", "hereafter", "hereby", "herein", "heres", "hereupon", "hers", "herself", "hes", "hi", "hid", "him", "himself", "his", "hither", "home", "how", "howbeit", "however", "hundred", "i", "id", "ie", "if", "i'll", "im", "immediate", "immediately", "importance", "important", "in", "inc", "indeed", "index", "information", "instead", "into", "invention", "inward", "is", "isn't", "it", "itd", "it'll", "its", "itself", "i've", "j", "just", "k", "keep \tkeeps", "kept", "kg", "km", "know", "known", "knows", "l", "largely", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "lets", "like", "liked", "likely", "line", "little", "'ll", "look", "looking", "looks", "ltd", "m", "made", "mainly", "make", "makes", "many", "may", "maybe", "me", "mean", "means", "meantime", "meanwhile", "merely", "mg", "might", "million", "miss", "ml", "more", "moreover", "most", "mostly", "mr", "mrs", "much", "mug", "must", "my", "myself", "n", "na", "name", "namely", "nay", "nd", "near", "nearly", "necessarily", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "ninety", "no", "nobody", "non", "none", "nonetheless", "noone", "nor", "normally", "nos", "not", "noted", "nothing", "now", "nowhere", "o", "obtain", "obtained", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "omitted", "on", "once", "one", "ones", "only", "onto", "or", "ord", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "owing", "own", "p", "page", "pages", "part", "particular", "particularly", "past", "per", "perhaps", "placed", "please", "plus", "poorly", "possible", "possibly", "potentially", "pp", "predominantly", "present", "previously", "primarily", "probably", "promptly", "proud", "provides", "put", "q", "que", "quickly", "quite", "qv", "r", "ran", "rather", "rd", "re", "readily", "really", "recent", "recently", "ref", "refs", "regarding", "regardless", "regards", "related", "relatively", "research", "respectively", "resulted", "resulting", "results", "right", "run", "s", "said", "same", "saw", "say", "saying", "says", "sec", "section", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sent", "seven", "several", "shall", "she", "shed", "she'll", "shes", "should", "shouldn't", "show", "showed", "shown", "showns", "shows", "significant", "significantly", "similar", "similarly", "since", "six", "slightly", "so", "some", "somebody", "somehow", "someone", "somethan", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specifically", "specified", "specify", "specifying", "still", "stop", "strongly", "sub", "substantially", "successfully", "such", "sufficiently", "suggest", "sup", "sure \tt", "take", "taken", "taking", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that'll", "thats", "that've", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "thered", "therefore", "therein", "there'll", "thereof", "therere", "theres", "thereto", "thereupon", "there've", "these", "they", "theyd", "they'll", "theyre", "they've", "think", "this", "those", "thou", "though", "thoughh", "thousand", "throug", "through", "throughout", "thru", "thus", "til", "tip", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "ts", "twice", "two", "u", "un", "under", "unfortunately", "unless", "unlike", "unlikely", "until", "unto", "up", "upon", "ups", "us", "use", "used", "useful", "usefully", "usefulness", "uses", "using", "usually", "v", "value", "various", "'ve", "very", "via", "viz", "vol", "vols", "vs", "w", "want", "wants", "was", "wasnt", "way", "we", "wed", "welcome", "we'll", "went", "were", "werent", "we've", "what", "whatever", "what'll", "whats", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "wheres", "whereupon", "wherever", "whether", "which", "while", "whim", "whither", "who", "whod", "whoever", "whole", "who'll", "whom", "whomever", "whos", "whose", "why", "widely", "willing", "wish", "with", "within", "without", "wont", "words", "world", "would", "wouldnt", "www", "x", "y", "yes", "yet", "you", "youd", "you'll", "your", "youre", "yours", "yourself", "yourselves", "you've", "z", "zero"]
  };
  function isStopWord(word) {
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "fr";
    return stop[lang].includes(word.toLowerCase());
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }

  var terminalConfig = {
    history: {
      cookies: true,
      cookieName: "lbz_history",
      expire: 90
    },
    dym: {
      max: 5,
      triggerScore: 0.3
    },
    css: {
      input: {
        position: "static",
        height: "30px",
        border: "1px solid white",
        bottom: "0px",
        width: "100%",
        backgroundColor: "#111",
        color: "#EEE"
      },
      highlight: {
        command: "aqua",
        argument: "lime",
        option: "fuchsia",
        string: "yellow",
        optionArgument: "olive",
        operator: "white",
        autocomplete: "grey"
      }
    },
    errors: {
      unknown: "unknown command '${command}'",
      helpUnknownCommand: "unknown command '${args[1]}'",
      noHelp: "No help defined for this command '${command}'",
      invalidOption: "Invalid option '${option}'"
    },
    help: "Some global help here!",
    commands: [{
      name: "entities",
      method: "getEntities",
      args: [{
        name: "type",
        info: "type of named entity",
        type: "string",
        filter: ['date', 'time', 'name', 'organization', 'locations', 'monetary', 'percentages']
      }],
      info: "Retrieving entities...",
      shortDescription: "Retrieve named entities",
      description: "Named-entity recognition (NER) (also known as entity identification, entity chunking and entity extraction) is a subtask of information extraction that seeks to locate and classify named entity mentioned in unstructured text into pre-defined categories such as person names, organizations, locations, medical codes, time expressions, quantities, monetary values, percentages, etc. "
    }, {
      name: "trans",
      method: "getTranslation",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }],
      opts: [{
        name: "language",
        abbr: "l",
        info: "Language of translation.",
        arg: {
          name: "Language",
          type: "string",
          mandatory: true
        }
      }]
    }, {
      name: "def",
      method: "getDefinition",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "derived",
      method: "getDerivedTerms",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "related",
      method: "getRelatedTerms",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "syn",
      method: "getSynonyms",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "ant",
      method: "getAntonyms",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "hyper",
      method: "getHypernyms",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "hypo",
      method: "getHyponyms",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "further",
      method: "getFurtherReading",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "pronunce",
      method: "getPronunciation",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "etymo",
      method: "getEtymology",
      args: [{
        name: "word",
        info: "written form of the word (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiktionary"
        },
        error: "word (${info}) must be a string"
      }]
    }, {
      name: "ngrams",
      method: "ngrams",
      args: [{
        name: "N",
        info: "number of contiguous items",
        type: "int",
        filter: [1, 15],
        "default": 3,
        error: "n (${info}) must be an integer between 1 and 15"
      }],
      opts: [{
        name: "minNgram",
        abbr: "m",
        info: "When recursive option is on, stop at 'minNgram'. Must be less than 'n' argument.",
        arg: {
          name: "NUM",
          type: "int",
          filter: [1, 14],
          mandatory: true
        }
      }, {
        name: "selection",
        abbr: "s",
        info: "Retrieve ngrams only in the selection"
      }, {
        name: "recursive",
        abbr: "R",
        info: "Find all the n-grams from n to 1 recursively"
      }, {
        name: "insensitive",
        abbr: "i",
        info: "Case insensitive"
      }, {
        name: "stemming",
        abbr: "t",
        info: "Group ngrams by stemming tokens"
      }, {
        name: "rsort",
        abbr: "r",
        info: "Reverse sorting"
      }, {
        name: "asort",
        abbr: "a",
        info: "Ascendant sorting"
      }],
      info: "Retrieving ngrams...",
      shortDescription: "Retrieve n-grams",
      description: "In the fields of computational linguistics and probability, an n-gram is a contiguous sequence of n items from a given sample of text or speech. The items can be phonemes, syllables, letters, words or base pairs according to the application. The n-grams typically are collected from a text or speech corpus. When the items are words, n-grams may also be called shingles"
    }, {
      name: "loadwiki",
      method: "loadHtml",
      args: [{
        name: "wikipage",
        info: "name of Wikipedia page (case sensitive)",
        type: "string",
        filter: {
          callbackMethod: "autocompleteWiki"
        },
        transform: function transform(str) {
          return str.replace(" ", "_");
        },
        error: "wikipage (${info}) must be a string"
      }],
      info: "Retrieving wikipedia page '${args[1]}'..."
    }]
  };

  var Editable =
  /*#__PURE__*/
  function () {
    function Editable(element, syntaxHighlightCallback, context) {
      _classCallCheck(this, Editable);

      this.element = element;
      this.callback = syntaxHighlightCallback;
      this.oldAnchor = null;
      this.oldFocus = null;
      this.context = context;

      var _this = this;

      this.element.addEventListener('input', function () {
        _this.updateEditor();
      });
      this.updateEditor();
    }

    _createClass(Editable, [{
      key: "getTextSegments",
      value: function getTextSegments(element) {
        var _this2 = this;

        var textSegments = []; //console.log(Array.from(this.element.childNodes));

        Array.from(element.childNodes).forEach(function (node) {
          switch (node.nodeType) {
            case node.TEXT_NODE:
              textSegments.push({
                text: node.nodeValue,
                node: node
              });
              break;

            case node.ELEMENT_NODE:
              textSegments.splice.apply(textSegments, [textSegments.length, 0].concat(_toConsumableArray(_this2.getTextSegments(node))));
              break;

            default:
              throw new Error("Unexpected node type: ".concat(node.nodeType));
          }
        }); //console.log(textSegments);

        return textSegments;
      }
    }, {
      key: "updateEditor",
      value: function updateEditor() {
        var sel = window.getSelection();
        var textSegments = this.getTextSegments(this.element);
        var textContent = textSegments.map(function (_ref) {
          var text = _ref.text;
          return text;
        }).join('');
        var anchorIndex = null;
        var focusIndex = null;
        var currentIndex = 0;
        textSegments.forEach(function (_ref2) {
          var text = _ref2.text,
              node = _ref2.node;

          if (node === sel.anchorNode) {
            anchorIndex = currentIndex + sel.anchorOffset;
          }

          if (node === sel.focusNode) {
            focusIndex = currentIndex + sel.focusOffset;
          }

          currentIndex += text.length;
        }); //console.log("'" + textContent + "'");

        this.element.innerHTML = this.callback(textContent, this.context);
        this.restoreSelection(anchorIndex, focusIndex);
      }
    }, {
      key: "restoreSelection",
      value: function restoreSelection(absoluteAnchorIndex, absoluteFocusIndex) {
        if (absoluteAnchorIndex == null) {
          // Correcting a bug with window.getSelection...
          this.placeCaretAtEnd(this.element);
          return;
        }

        var sel = window.getSelection();
        var textSegments = this.getTextSegments(this.element);
        var anchorNode = this.element;
        var anchorIndex = 0;
        var focusNode = this.element;
        var focusIndex = 0;
        var currentIndex = 0;
        textSegments.forEach(function (_ref3) {
          var text = _ref3.text,
              node = _ref3.node;
          var startIndexOfNode = currentIndex;
          var endIndexOfNode = startIndexOfNode + text.length;

          if (startIndexOfNode <= absoluteAnchorIndex && absoluteAnchorIndex <= endIndexOfNode) {
            anchorNode = node;
            anchorIndex = absoluteAnchorIndex - startIndexOfNode;
          }

          if (startIndexOfNode <= absoluteFocusIndex && absoluteFocusIndex <= endIndexOfNode) {
            focusNode = node;
            focusIndex = absoluteFocusIndex - startIndexOfNode;
          }

          currentIndex += text.length;
        });
        sel.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex);
      }
    }, {
      key: "placeCaretAtEnd",
      value: function placeCaretAtEnd(el) {
        el.focus();

        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
          var range = document.createRange();
          range.selectNodeContents(el);
          range.collapse(false);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
          var textRange = document.body.createTextRange();
          textRange.moveToElementText(el);
          textRange.collapse(false);
          textRange.select();
        }
      }
    }]);

    return Editable;
  }();

  var defaultCssJson = {};

  var Autocomplete =
  /*#__PURE__*/
  function () {
    function Autocomplete(element) {
      var _this2 = this;

      var css = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, Autocomplete);

      this.hidden = true;
      this.items = [];
      this.element = element;
      this.div = document.createElement("div");
      this.div.setAttribute("class", "autocomplete-items");
      this.div.style.display = "none";
      this.element.parentNode.appendChild(this.div);
      this.span = null;
      this.currentFocus = 0;
      this.css(css);
      this.element.addEventListener("keydown", function (e) {
        if (!_this2.hidden) {
          switch (e.keyCode) {
            case 40:
              //down
              _this2.currentFocus++;

              _this2.addActive(_this2.div.childNodes);

              break;

            case 38:
              //up
              _this2.currentFocus--;

              _this2.addActive(_this2.div.childNodes);

              break;

            case 13:
              e.preventDefault();

              if (_this2.currentFocus > -1) {
                if (_this2.div.childNodes) _this2.div.childNodes[_this2.currentFocus].click();
              }

          }
        }
      });
    }

    _createClass(Autocomplete, [{
      key: "isHidden",
      value: function isHidden() {
        return this.hidden;
      }
    }, {
      key: "css",
      value: function css(cssJson) {
        var css = cssJson || defaultCssJson;
        var rules = Object.entries(css);

        for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
          var _rules$_i = _slicedToArray(_rules[_i], 2),
              property = _rules$_i[0],
              value = _rules$_i[1];

          this.element.style[property] = value;
        }
      }
    }, {
      key: "setPositionX",
      value: function setPositionX(x) {
        this.div.style.left = x.toString() + "px";
      }
    }, {
      key: "setElementToUpdate",
      value: function setElementToUpdate(element) {
        this.span = element;
      }
    }, {
      key: "show",
      value: function show() {
        this.hidden = false;
        this.div.style.display = "block";
      }
    }, {
      key: "hide",
      value: function hide() {
        this.hidden = true;
        this.div.style.display = "none";
      }
    }, {
      key: "update",
      value: function update(data, options) {
        var _this3 = this;

        var b, i;
        this.div.innerHTML = "";

        if (data.length < 1) {
          this.hide();
          return;
        }

        this.currentFocus = -1;

        var _loop = function _loop() {
          /*check if the item starts with the same letters as the text field value:*/

          /*create a DIV element for each matching element:*/
          b = document.createElement("div");
          b.setAttribute("data-id", i.toString());
          /*make the matching letters bold:*/

          b.innerHTML = data[i][options.label];

          if (data[i][options.info]) {
            b.innerHTML += " (" + data[i][options.info] + " )";
          }
          /*insert a input field that will hold the current array item's value:*/


          b.innerHTML += "<input type='hidden' value='" + (data[i][options.value] || data[i][options.label]) + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/

          var _this = _this3;
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            _this.span.innerText = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            //_this.hide();

            _this.element.focus();
          });

          _this3.div.appendChild(b);
        };

        for (i = 0; i < data.length; i++) {
          _loop();
        } //this.element.removeEventListener("keydown");


        this.show();
      }
    }, {
      key: "addActive",
      value: function addActive(el) {
        if (!el) return false;
        this.removeActive(el);
        if (this.currentFocus >= el.length) this.currentFocus = 0;
        if (this.currentFocus < 0) this.currentFocus = el.length - 1;
        el[this.currentFocus].classList.add("autocomplete-active");
      }
    }, {
      key: "removeActive",
      value: function removeActive(el) {
        for (var i = 0; i < el.length; i++) {
          el[i].classList.remove("autocomplete-active");
        }
      }
    }]);

    return Autocomplete;
  }();

  var keyboardLayout = ["²&é\"'(§è!çà)- ³1234567890°_", ' azertyuiop^$  AZERTYUIOP"*', " qsdfghjklmùµ  QSDFGHJKLM%£", "<wxcvbn,;:=   >WXCVBN?./+  "];
  var distance = {
    kb: function kb(word, list) {
      var triggerScore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

      var masks = _toConsumableArray(list);

      var scores = [];

      for (var i = 0; i < list.length; i++) {
        scores.push({
          word: list[i],
          score: 0
        });
      }

      list.forEach(function (wordToCompare, index) {
        console.log(wordToCompare);
        var score = 0;
        word.split("").forEach(function (char1, ind1) {
          var currentRes = 1000;
          wordToCompare.split("").forEach(function (char2, ind2) {
            var res = calc(char1, char2) + (ind1 - ind2 == 0 ? 0 : 0.1);

            if (res < currentRes) {
              currentRes = res;
            }
          }); //console.log(currentRes);

          score += currentRes;
        });
        scores[index].score = score;
      });
      scores = scores.filter(function (x) {
        return x.score < triggerScore;
      }).sort(function (a, b) {
        return a.score > b.score;
      });

      if (scores.length > 0) {
        scores = scores.slice(0, max);
      }

      return scores;

      function calc(char1, char2) {
        var x1, y1, x2, y2;

        for (var _i = 0; _i < keyboardLayout.length; _i++) {
          var ind1 = keyboardLayout[_i].indexOf(char1);

          if (~ind1) {
            x1 = ind1 % 14;
            y1 = _i;
          }

          var ind2 = keyboardLayout[_i].indexOf(char2);

          if (~ind2) {
            x2 = ind2 % 14;
            y2 = _i;
          }
        }

        if (x1 && y1) {
          return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }

        return false;
      }
    },
    dym: function dym(word, list) {
      var triggerScore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
      var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

      var masks = _toConsumableArray(list);

      var scores = [];

      for (var i = 0; i < list.length; i++) {
        scores.push({
          word: list[i],
          score: 0
        });
      }

      word.toLowerCase().split("").filter(function (x) {
        return x;
      }).forEach(function (_char) {
        masks = masks.map(function (el, nEl) {
          var i = el.indexOf(_char);

          if (i !== -1) {
            el = el.substring(0, i) + "$" + el.substring(i + 1);
            scores[nEl].score += 1 / el.length;
            return el;
          }

          return el;
        });
      });
      scores = scores.filter(function (x) {
        return x.score > triggerScore;
      }).sort(function (a, b) {
        return a.score < b.score;
      });

      if (scores.length > 0) {
        scores = scores.slice(0, max);
      }

      return scores;
    }
  };

  var ARROW_DOWN = 40;
  var ARROW_UP = 38;
  var ENTER = 13;

  var Terminal =
  /*#__PURE__*/
  function () {
    function Terminal(commandsNamespace, terminalSelector) {
      _classCallCheck(this, Terminal);

      this.commandsNamespace = commandsNamespace;
      this.selector = terminalSelector;
      this.DOMelement = document.querySelector(this.selector);
      this.initialized = false;
      this.currentOption = "";
      this.currentCommand = "";
      this.history = [];
      this.historyCursor = 0;
      this.searchField = "";
      this.initHistory();
      this.init();
    }

    _createClass(Terminal, [{
      key: "initHistory",
      value: function initHistory() {
        // If cookies are enabled in config.js, retrieve history
        if (terminalConfig.history.cookies) {
          var cookie = getCookie(terminalConfig.history.cookieName || "terminalCookie");

          if (cookie != "") {
            this.history = JSON.parse(cookie);
          }
        } // Initialize cursor at the end of the history.


        this.historyCursor = this.history.length;
      }
    }, {
      key: "upHistory",
      value: function upHistory(element) {
        var command = element.target.innerText.trim();

        if (this.history.length > 0) {
          if (this.historyCursor == this.history.length) {
            this.searchField = command;
            this.history.push(command);
          }

          if (this.searchField == "") {
            this.historyCursor--;
            if (this.historyCursor < 0) this.historyCursor = 0;
          } else {
            var i = this.historyCursor - 1;

            while (i >= 0) {
              if (~this.history[i].indexOf(this.searchField)) {
                this.historyCursor = i;
                break;
              }

              i--;
            }
          }

          element.target.innerHTML = this.renderText(this.history[this.historyCursor], this);
        }
      }
    }, {
      key: "downHistory",
      value: function downHistory(element) {
        if (this.history.length > 0) {
          if (this.searchField == "") {
            this.historyCursor++;
            if (this.historyCursor > this.history.length - 1) this.historyCursor = this.history.length - 1;
          } else {
            var i = this.historyCursor + 1;

            while (i < this.history.length) {
              if (~this.history[i].indexOf(this.searchField)) {
                this.historyCursor = i;
                break;
              }

              i++;
            }
          }

          element.target.innerHTML = this.renderText(this.history[this.historyCursor], this);
        }
      }
    }, {
      key: "addHistory",
      value: function addHistory(str) {
        if (str.trim() == "") return false;

        if (this.historyCursor < this.history.length) {
          this.history.splice(this.historyCursor, 1);
        }

        if (this.history[this.history.length - 1] !== str) {
          this.history.push(str);
        }

        this.history = this.history.filter(function (x) {
          return x;
        });
        setCookie(terminalConfig.history.cookieName || "terminalCookie", JSON.stringify(this.history), terminalConfig.history.expire || 30);
        this.historyCursor = this.history.length;
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;

        // Initialize terminal only one time
        if (this.initialized) return false;
        this.initialized = true; // Create input element for the terminal with css rules from "config.js"

        var inputElement = document.createElement("div");
        inputElement.setAttribute("contenteditable", "true");
        inputElement.setAttribute("spellcheck", "false");
        inputElement.style.whiteSpace = "pre";

        if (terminalConfig.css.input) {
          var rules = Object.entries(terminalConfig.css.input);

          for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
            var _rules$_i = _slicedToArray(_rules[_i], 2),
                property = _rules$_i[0],
                value = _rules$_i[1];

            inputElement.style[property] = value;
          }
        }

        inputElement.autofocus = true;
        var editable = new Editable(inputElement, this.renderText, this); // Add input element in the DOM

        var screen = document.createElement("div");
        screen.setAttribute("class", "context");
        this.DOMelement.appendChild(screen);
        this.DOMelement = screen;
        this.selector = this.selector + " .context";
        var div = document.createElement("div");
        screen.parentNode.insertBefore(div, screen.nextSibling);
        div.appendChild(inputElement);
        div.style.position = "relative";
        var ac = new Autocomplete(inputElement); // Managing keyboard events

        inputElement.addEventListener("keyup",
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(e) {
            var items, bodyRect, elemRect, offset;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = e.keyCode;
                    _context.next = _context.t0 === ENTER ? 3 : _context.t0 === ARROW_UP ? 10 : _context.t0 === ARROW_DOWN ? 15 : 20;
                    break;

                  case 3:
                    e.preventDefault();

                    if (ac.isHidden()) {
                      _context.next = 7;
                      break;
                    }

                    ac.hide();
                    return _context.abrupt("return", false);

                  case 7:
                    _this2.execute(e.target.innerText.trim());

                    inputElement.innerHTML = "";
                    return _context.abrupt("break", 26);

                  case 10:
                    if (ac.isHidden()) {
                      _context.next = 12;
                      break;
                    }

                    return _context.abrupt("return", false);

                  case 12:
                    ac.hide();

                    _this2.upHistory(e);

                    return _context.abrupt("break", 26);

                  case 15:
                    if (ac.isHidden()) {
                      _context.next = 17;
                      break;
                    }

                    return _context.abrupt("return", false);

                  case 17:
                    ac.hide();

                    _this2.downHistory(e);

                    return _context.abrupt("break", 26);

                  case 20:
                    _context.next = 22;
                    return _this2.parserCli(e.target.innerText).autocomplete;

                  case 22:
                    items = _context.sent;

                    //console.log("items : ", items);
                    if (inputElement.lastChild !== null) {
                      bodyRect = inputElement.getBoundingClientRect(), elemRect = inputElement.lastChild.getBoundingClientRect(), offset = elemRect.left - bodyRect.left;
                      ac.setPositionX(offset);
                      ac.setElementToUpdate(inputElement.lastChild);
                    }

                    ac.update(items, {
                      label: items.label,
                      value: items.label,
                      info: items.info
                    });
                    _this2.historyCursor = _this2.history.length;

                  case 26:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    }, {
      key: "renderText",
      value: function renderText(text, context) {
        var ret = context.parserCli(text).highlighted;
        return ret;
      }
    }, {
      key: "didYouMean",
      value: function didYouMean(word, list) {
        var scores = distance.dym(word, list, terminalConfig.dym.triggerScore, terminalConfig.dym.max);
        var str = [];

        if (scores.length > 0) {
          str.push("Did you mean :");
          scores.map(function (el) {
            str.push(el.word);
          });
        }

        return str.join("<br/>");
      }
    }, {
      key: "interpolation",
      value: function interpolation(str, context) {
        if (str == undefined) return false;

        var _this = this;

        var parsed = str.replace(/(\$\{command\})/, function (x, i) {
          return _this.currentCommand || "[command undefined]";
        });
        parsed = parsed.replace(/(\$\{option\})/, function (x, i) {
          return _this.currentOption || "[option undefined]";
        });
        parsed = parsed.replace(/(\$\{info\})/, function (x, i) {
          return context.info || "[info undefined]";
        });
        parsed = parsed.replace(/\$\{args\[(\d+)\]\}/, function (x, i) {
          return context.arguments[i - 1] || "[argument undefined]";
        });
        return parsed;
      }
    }, {
      key: "autocomplete",
      value: function () {
        var _autocomplete = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(source, property, info, str) {
          var regex, tree, _loop, i, ac, ac2, _i2;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  source = source.split(">").map(function (x) {
                    return x.trim();
                  }); //console.log(source);

                  regex = /(.*)\[(.*)=["'](.*)["']\]/;
                  tree = terminalConfig;

                  _loop = function _loop(i) {
                    var m = void 0;

                    if ((m = regex.exec(source[i])) !== null) {
                      // The result can be accessed through the `m`-variable.
                      //console.log(tree, m);
                      tree = tree[m[1]].filter(function (root) {
                        return root[m[2]] == m[3];
                      })[0] || undefined;
                    } else {
                      tree = tree[source[i]];
                    }
                  };

                  for (i = 0; i < source.length; i++) {
                    _loop(i);
                  }

                  if (!tree[0].hasOwnProperty("filter")) {
                    _context2.next = 21;
                    break;
                  }

                  if (!tree[0]['filter']['callbackMethod']) {
                    _context2.next = 18;
                    break;
                  }

                  _context2.next = 9;
                  return this.commandsNamespace[tree[0]["filter"]["callbackMethod"]](str);

                case 9:
                  ac = _context2.sent;
                  ac2 = [];

                  for (_i2 = 0; _i2 < ac.length; _i2++) {
                    ac2.push({
                      name: '"' + ac[_i2] + '"'
                    });
                  }

                  ac2.label = property;
                  ac2.info = info;
                  console.log(ac2);
                  return _context2.abrupt("return", ac2);

                case 18:
                  if (Array.isArray(tree[0]['filter'])) {
                    //console.log(tree[0]['filter']);
                    ac = tree[0]['filter'].filter(function (option) {
                      return option.startsWith(str);
                    }).map(function (x) {
                      return {
                        name: x
                      };
                    }); //console.log(ac);
                  }

                case 19:
                  _context2.next = 22;
                  break;

                case 21:
                  ac = tree.filter(function (command) {
                    return command[property].startsWith(str);
                  });

                case 22:
                  ac.label = property;
                  ac.info = info;
                  return _context2.abrupt("return", ac);

                case 25:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function autocomplete(_x2, _x3, _x4, _x5) {
          return _autocomplete.apply(this, arguments);
        }

        return autocomplete;
      }()
    }, {
      key: "unquote",
      value: function unquote(str) {
        return str.replace(/^"(.*)"$/, "$1").replace(/\\/g, "");
      }
    }, {
      key: "parserCli",
      value: function parserCli(str) {
        var _this3 = this;

        var parser = {
          command: "",
          arguments: [],
          options: [],
          highlighted: "",
          autocomplete: ""
        };
        str = str.replace(/>/g, "&gt;").replace(/</g, "&lt;");
        var regSeparator = new RegExp("^\\s+");
        var regCommand = /^\s*\S+/;
        var regString = new RegExp('^"([^\\\\"]|\\\\")*"?');
        var regOption = /^(-{1,2})([^=\s]*)((=("([^\\"]|\\")*"?))|(=(\S+)))?/;
        var index = 0;
        var currentOption = "";
        var m = regCommand.exec(str);

        while (m !== null) {
          if (index == 0) {
            // command
            parser.command = m[0].trim();
            parser.highlighted += this.highlight(m[0], terminalConfig.css.highlight.command);
            parser.autocomplete = this.autocomplete("commands", "name", "shortDescription", parser.command);
          } else {
            var token = m[0].trim();

            if (token == "") {
              // separator
              parser.highlighted += this.highlight(m[0], terminalConfig.css.highlight.operator);
              parser.autocomplete = [];
            } else if (m.length <= 2) {
              // argument
              if (currentOption !== "") {
                parser.options[parser.options.length - 1].arguments.push(token);
                parser.highlighted += this.highlight(m[0], terminalConfig.css.highlight.optionArgument);
              } else {
                parser.arguments.push(this.unquote(token.trim()));
                parser.highlighted += this.highlight(m[0], terminalConfig.css.highlight.argument);
                parser.autocomplete = this.autocomplete("commands[name='" + parser.command + "'] > args", "name", "info", this.unquote(token.trim()));
              }
            } else {
              // option
              if (m[1] == "-") {
                // abbreviated option
                parser.highlighted += this.highlight("-", terminalConfig.css.highlight.operator);
                m[2].split("").map(function (opt) {
                  parser.options.push({
                    name: opt,
                    arguments: []
                  });
                  parser.highlighted += _this3.highlight(opt, terminalConfig.css.highlight.option);
                  currentOption = opt;
                });
                parser.autocomplete = this.autocomplete("commands[name='" + parser.command + "'] > opts", "abbr", "info", "");
              } else if (m[1] == "--") {
                // long option
                parser.highlighted += this.highlight("--", terminalConfig.css.highlight.operator);
                var arg = m[8] ? m[8] : m[5] ? m[5] : "";
                parser.options.push({
                  name: m[2],
                  arguments: [this.unquote(arg)]
                });
                parser.highlighted += this.highlight(m[2], terminalConfig.css.highlight.option);
                parser.autocomplete = this.autocomplete("commands[name='" + parser.command + "'] > opts", "name", "info", m[2]);

                if (m[8]) {
                  parser.highlighted += this.highlight("=", terminalConfig.css.highlight.operator);
                  parser.highlighted += this.highlight(m[8], terminalConfig.css.highlight.optionArgument);
                } else if (m[5]) {
                  parser.highlighted += this.highlight("=", terminalConfig.css.highlight.operator);
                  parser.highlighted += this.highlight(m[5], terminalConfig.css.highlight.optionArgument);
                }
              }
            }
          }

          str = str.substring(m[0].length);
          m = regSeparator.exec(str) || regString.exec(str) || regOption.exec(str) || regCommand.exec(str);
          index++;
        }

        parser.options.isOption = function (str) {
          var opt = this.filter(function (options) {
            return options.name == str;
          })[0] || [];
          return opt.length == 0 ? false : opt;
        };

        parser.arguments.isArgument = parser.options.isOption;
        return parser;
      }
    }, {
      key: "highlight",
      value: function highlight(str, color) {
        return "<span style=\"color:".concat(color, "\">").concat(str, "</span>");
      }
    }, {
      key: "execute",
      value: function execute(str) {
        var _this4 = this;

        str = str.trim();
        if (str == "") return false;
        this.addHistory(str);
        var parser = this.parserCli(str); // Display the command in the terminal

        this.info(str);
        var definition = terminalConfig.commands.filter(function (command) {
          return command.name == parser.command;
        })[0] || [];
        var context = {};
        this.currentCommand = parser.command;

        if (definition.length == 0 && parser.command !== "help") {
          this.error(this.interpolation(terminalConfig.errors.unknown, context) || "Command not found : " + parser.command);
          this.log(this.didYouMean(parser.command, terminalConfig.commands.map(function (x) {
            return x.name;
          })));
          return false;
        } // Help management


        if (parser.command == "help") {
          definition = terminalConfig.commands.filter(function (command) {
            return command.name == parser.arguments[0];
          })[0] || [];

          if (parser.arguments[0] && definition.length == 0) {
            this.error(this.interpolation(terminalConfig.errors.helpUnknownCommand || "Command not found", parser));
          } else if (definition.length == 0) {
            this.log(this.interpolation(terminalConfig.help || "No global help", context));
          } else {
            this.log(this.explain(definition));
          } // this.log(this.explain(parser));
          // this.log(definition.help || "Sorry, no help defined for this command");


          return true;
        } // Check arguments


        var args = definition.args;
        var checkResult = true;
        args.forEach(function (arg, i) {
          if (parser.arguments[i]) {
            switch (arg.type) {
              case "int":
                if (!Number.isInteger(parseFloat(arg)) && !_this4.checkFilter(parser.arguments[i], arg.filter)) {
                  _this4.error(_this4.interpolation(arg.error, arg) || "Argument error");

                  checkResult = false;
                }

                break;

              case "string":
                if (!_this4.checkFilter(parser.arguments[i], arg.filter)) {
                  _this4.error(_this4.interpolation(arg.error, arg) || "Argument error");

                  checkResult = false;
                }

                break;
            }

            if (arg.transform) {
              parser.arguments[i] = arg.transform(parser.arguments[i]);
            }
          } else {
            if (arg["default"]) {
              parser.arguments.push(arg["default"]);
            }
          }
        });
        if (!checkResult) return false; // Check Options

        var opts = definition.opts;
        parser.options.forEach(function (parsedOpt, index) {
          var validOption = false;
          _this4.currentOption = parsedOpt.name;
          opts.forEach(function (opt, i) {
            if (opt.name == parsedOpt.name || opt.abbr == parsedOpt.name) {
              parser.options[index].name = opt.name;

              if (opt.argument !== "") ;

              validOption = true;
            }
          });

          if (!validOption) {
            _this4.error(_this4.interpolation(terminalConfig.errors.invalidOption, parser) || "Invalid option");
          }
        });
        this.log(this.interpolation(definition.info, parser) || "");

        var _this = this; // Call the user method with arguments and options


        var promise = new Promise(function (resolve, reject) {
          resolve(_this.commandsNamespace[definition.method](parser.arguments, parser.options));
        });
        promise.then();
        return true;
      }
    }, {
      key: "checkFilter",
      value: function checkFilter(value, filter) {
        if (!filter) return true;

        if (Array.isArray(filter) && filter.every(function (x) {
          return !isNaN(x);
        }) && filter.length == 2) {
          return value >= filter[0] && value <= filter[1];
        } else if (filter instanceof RegExp) {
          return filter.test(value);
        } else if (_typeof(filter) === "object") {
          return true;
        }

        this.error("Filter <em>" + filter.toString() + "</em> not supported");
        return true;
      }
    }, {
      key: "humanizeFilter",
      value: function humanizeFilter(filter) {
        if (Array.isArray(filter) && filter.every(function (x) {
          return !isNaN(x);
        }) && filter.length == 2) {
          return "between ".concat(filter[0], " and ").concat(filter[1]);
        } else if (filter instanceof RegExp) {
          return "matching the regular expression : " + filter.toString();
        }

        return "";
      }
    }, {
      key: "explain",
      value: function explain(definition) {
        var str = "<dl>";
        str += "<dt>NAME</dt>";
        str += "<dd>" + definition.name + " - " + (definition.shortDescription || "") + "</dd><br/>";
        str += "<dt>SYNOPSIS</dt>";
        str += "<dd>" + definition.name + " " + this.synopsis(definition) + "</dd><br/>";
        str += "<dt>DESCRIPTION</dt>";
        str += "<dd>" + (definition.description || "no description for this command") + "</dd><br/>";

        if (definition.opts) {
          str += "<dt>OPTIONS</dt>";
          (definition.args || []).forEach(function (x) {
            var name = x.name;
            if (x["default"]) name += "=" + x["default"];
            str += "<dd>&lt;" + name + "&gt;</dd>";
            str += "<dd>&nbsp;&nbsp;&nbsp;&nbsp;" + x.info + "</dd>";
            str += "<br/>";
          });
          definition.opts.forEach(function (x) {
            var arg = "";

            if (x.arg) {
              arg = "=&lt;<u>" + x.arg.name + "</u>&gt;";

              if (!x.arg.mandatory) {
                arg = "[" + arg + "]";
              }
            }

            var options = [x.abbr ? "-" + x.abbr + arg.replace("=", " ") : "", "--" + x.name + arg].filter(function (a) {
              return a;
            }).join(", ");
            str += "<dd>" + options + "</dd>";
            str += "<dd>&nbsp;&nbsp;&nbsp;&nbsp;" + x.info + "</dd>";
            str += "<br/>";
          });
        }

        str += "</dl>";
        return str;
      }
    }, {
      key: "synopsis",
      value: function synopsis(definition) {
        var str = [];
        (definition.args || []).forEach(function (x) {
          var name = x.name;
          if (x["default"]) name += "=" + x["default"];
          str.push("&lt;" + name + "&gt;");
        });
        (definition.opts || []).forEach(function (x) {
          var arg = "";

          if (x.arg) {
            arg = "=&lt;<u>" + x.arg.name + "</u>&gt;";

            if (!x.arg.mandatory) {
              arg = "[" + arg + "]";
            }
          }

          str.push("[-" + (x.abbr || "-" + x.name) + arg + "]");
        });
        return str.join(" ");
      }
    }, {
      key: "error",
      value: function error(str) {
        if (this.initialized) {
          var consoleElement = document.createElement("p");
          consoleElement.innerHTML = "! " + str;
          consoleElement.style.color = "red";
          this.DOMelement.appendChild(consoleElement);
          this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
        } else {
          console.error(str);
        }
      }
    }, {
      key: "info",
      value: function info(str) {
        if (this.initialized) {
          var consoleElement = document.createElement("p");
          consoleElement.innerHTML = "> " + str;
          consoleElement.style.color = "green";
          this.DOMelement.appendChild(consoleElement);
          this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
        } else {
          console.log(str);
        }
      }
    }, {
      key: "log",
      value: function log(str) {
        if (this.initialized) {
          var consoleElement = document.createElement("p");
          consoleElement.innerHTML = str;
          this.DOMelement.appendChild(consoleElement);
          this.DOMelement.scrollTop = this.DOMelement.scrollHeight - this.DOMelement.clientHeight;
        } else {
          console.log(str);
        }
      }
    }]);

    return Terminal;
  }();

  var langCodes = [["gem-pro", "", "Proto-Germanic"], ["ine-pro", "", "Proto-Indo-European"], ["aar", "aa", "Afar"], ["abk", "ab", "Abkhazian"], ["ace", "", "Achinese"], ["ach", "", "Acoli"], ["ada", "", "Adangme"], ["ady", "", "Adyghe; Adygei"], ["afa", "", "Afro-Asiatic languages"], ["afh", "", "Afrihili"], ["afr", "af", "Afrikaans"], ["ain", "", "Ainu"], ["aka", "ak", "Akan"], ["akk", "", "Akkadian"], ["alb", "sq", "Albanian"], ["ale", "", "Aleut"], ["alg", "", "Algonquian languages"], ["alt", "", "Southern Altai"], ["amh", "am", "Amharic"], ["ang", "", "Old English (ca.450-1100)"], ["anp", "", "Angika"], ["apa", "", "Apache languages"], ["ara", "ar", "Arabic"], ["arc", "", "Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)"], ["arg", "an", "Aragonese"], ["arm", "hy", "Armenian"], ["arn", "", "Mapudungun; Mapuche"], ["arp", "", "Arapaho"], ["art", "", "Artificial languages"], ["arw", "", "Arawak"], ["asm", "as", "Assamese"], ["ast", "", "Asturian; Bable; Leonese; Asturleonese"], ["ath", "", "Athapascan languages"], ["aus", "", "Australian languages"], ["ava", "av", "Avaric"], ["ave", "ae", "Avestan"], ["awa", "", "Awadhi"], ["aym", "ay", "Aymara"], ["aze", "az", "Azerbaijani"], ["bad", "", "Banda languages"], ["bai", "", "Bamileke languages"], ["bak", "ba", "Bashkir"], ["bal", "", "Baluchi"], ["bam", "bm", "Bambara"], ["ban", "", "Balinese"], ["baq", "eu", "Basque"], ["bas", "", "Basa"], ["bat", "", "Baltic languages"], ["bej", "", "Beja; Bedawiyet"], ["bel", "be", "Belarusian"], ["bem", "", "Bemba"], ["ben", "bn", "Bengali"], ["ber", "", "Berber languages"], ["bho", "", "Bhojpuri"], ["bih", "bh", "Bihari languages"], ["bik", "", "Bikol"], ["bin", "", "Bini; Edo"], ["bis", "bi", "Bislama"], ["bla", "", "Siksika"], ["bnt", "", "Bantu (Other)"], ["bos", "bs", "Bosnian"], ["bra", "", "Braj"], ["bre", "br", "Breton"], ["btk", "", "Batak languages"], ["bua", "", "Buriat"], ["bug", "", "Buginese"], ["bul", "bg", "Bulgarian"], ["bur", "my", "Burmese"], ["byn", "", "Blin; Bilin"], ["cad", "", "Caddo"], ["cai", "", "Central American Indian languages"], ["car", "", "Galibi Carib"], ["cat", "ca", "Catalan; Valencian"], ["cau", "", "Caucasian languages"], ["ceb", "", "Cebuano"], ["cel", "", "Celtic languages"], ["cha", "ch", "Chamorro"], ["chb", "", "Chibcha"], ["che", "ce", "Chechen"], ["chg", "", "Chagatai"], ["chi", "zh", "Chinese"], ["chk", "", "Chuukese"], ["chm", "", "Mari"], ["chn", "", "Chinook jargon"], ["cho", "", "Choctaw"], ["chp", "", "Chipewyan; Dene Suline"], ["chr", "", "Cherokee"], ["chu", "cu", "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic"], ["chv", "cv", "Chuvash"], ["chy", "", "Cheyenne"], ["cmc", "", "Chamic languages"], ["cop", "", "Coptic"], ["cor", "kw", "Cornish"], ["cos", "co", "Corsican"], ["cpe", "", "Creoles and pidgins, English based"], ["cpf", "", "Creoles and pidgins, French-based "], ["cpp", "", "Creoles and pidgins, Portuguese-based "], ["cre", "cr", "Cree"], ["crh", "", "Crimean Tatar; Crimean Turkish"], ["crp", "", "Creoles and pidgins "], ["csb", "", "Kashubian"], ["cus", "", "Cushitic languages"], ["cze", "cs", "Czech"], ["dak", "", "Dakota"], ["dan", "da", "Danish"], ["dar", "", "Dargwa"], ["day", "", "Land Dayak languages"], ["del", "", "Delaware"], ["den", "", "Slave (Athapascan)"], ["dgr", "", "Dogrib"], ["din", "", "Dinka"], ["div", "dv", "Divehi; Dhivehi; Maldivian"], ["doi", "", "Dogri"], ["dra", "", "Dravidian languages"], ["dsb", "", "Lower Sorbian"], ["dua", "", "Duala"], ["dum", "", "Middle Dutch (ca.1050-1350)"], ["dut", "nl", "Dutch; Flemish"], ["dyu", "", "Dyula"], ["dzo", "dz", "Dzongkha"], ["efi", "", "Efik"], ["egy", "", "Egyptian (Ancient)"], ["eka", "", "Ekajuk"], ["elx", "", "Elamite"], ["eng", "en", "English"], ["enm", "", "Middle English (1100-1500)"], ["epo", "eo", "Esperanto"], ["est", "et", "Estonian"], ["ewe", "ee", "Ewe"], ["ewo", "", "Ewondo"], ["fan", "", "Fang"], ["fao", "fo", "Faroese"], ["fat", "", "Fanti"], ["fij", "fj", "Fijian"], ["fil", "", "Filipino; Pilipino"], ["fin", "fi", "Finnish"], ["fiu", "", "Finno-Ugrian languages"], ["fon", "", "Fon"], ["fre", "fr", "French"], ["frm", "", "Middle French (ca.1400-1600)"], ["fro", "", "Old French (842-ca.1400)"], ["frr", "", "Northern Frisian"], ["frs", "", "Eastern Frisian"], ["fry", "fy", "Western Frisian"], ["ful", "ff", "Fulah"], ["fur", "", "Friulian"], ["gaa", "", "Ga"], ["gay", "", "Gayo"], ["gba", "", "Gbaya"], ["gem", "", "Germanic languages"], ["geo", "ka", "Georgian"], ["ger", "de", "German"], ["gez", "", "Geez"], ["gil", "", "Gilbertese"], ["gla", "gd", "Gaelic; Scottish Gaelic"], ["gle", "ga", "Irish"], ["glg", "gl", "Galician"], ["glv", "gv", "Manx"], ["gmh", "", "German, Middle High (ca.1050-1500)"], ["goh", "", "German, Old High (ca.750-1050)"], ["gon", "", "Gondi"], ["gor", "", "Gorontalo"], ["got", "", "Gothic"], ["grb", "", "Grebo"], ["grc", "", "Ancient Greek (to 1453)"], ["gre", "el", "Modern Greek (1453-)"], ["grn", "gn", "Guarani"], ["gsw", "", "Swiss German; Alemannic; Alsatian"], ["guj", "gu", "Gujarati"], ["gwi", "", "Gwich'in"], ["hai", "", "Haida"], ["hat", "ht", "Haitian; Haitian Creole"], ["hau", "ha", "Hausa"], ["haw", "", "Hawaiian"], ["heb", "he", "Hebrew"], ["her", "hz", "Herero"], ["hil", "", "Hiligaynon"], ["him", "", "Himachali languages; Western Pahari languages"], ["hin", "hi", "Hindi"], ["hit", "", "Hittite"], ["hmn", "", "Hmong; Mong"], ["hmo", "ho", "Hiri Motu"], ["hrv", "hr", "Croatian"], ["hsb", "", "Upper Sorbian"], ["hun", "hu", "Hungarian"], ["hup", "", "Hupa"], ["iba", "", "Iban"], ["ibo", "ig", "Igbo"], ["ice", "is", "Icelandic"], ["ido", "io", "Ido"], ["iii", "ii", "Sichuan Yi; Nuosu"], ["ijo", "", "Ijo languages"], ["iku", "iu", "Inuktitut"], ["ile", "ie", "Interlingue; Occidental"], ["ilo", "", "Iloko"], ["ina", "ia", "Interlingua (International Auxiliary Language Association)"], ["inc", "", "Indic languages"], ["ind", "id", "Indonesian"], ["ine", "", "Indo-European languages"], ["inh", "", "Ingush"], ["ipk", "ik", "Inupiaq"], ["ira", "", "Iranian languages"], ["iro", "", "Iroquoian languages"], ["ita", "it", "Italian"], ["jav", "jv", "Javanese"], ["jbo", "", "Lojban"], ["jpn", "ja", "Japanese"], ["jpr", "", "Judeo-Persian"], ["jrb", "", "Judeo-Arabic"], ["kaa", "", "Kara-Kalpak"], ["kab", "", "Kabyle"], ["kac", "", "Kachin; Jingpho"], ["kal", "kl", "Kalaallisut; Greenlandic"], ["kam", "", "Kamba"], ["kan", "kn", "Kannada"], ["kar", "", "Karen languages"], ["kas", "ks", "Kashmiri"], ["kau", "kr", "Kanuri"], ["kaw", "", "Kawi"], ["kaz", "kk", "Kazakh"], ["kbd", "", "Kabardian"], ["kha", "", "Khasi"], ["khi", "", "Khoisan languages"], ["khm", "km", "Central Khmer"], ["kho", "", "Khotanese; Sakan"], ["kik", "ki", "Kikuyu; Gikuyu"], ["kin", "rw", "Kinyarwanda"], ["kir", "ky", "Kirghiz; Kyrgyz"], ["kmb", "", "Kimbundu"], ["kok", "", "Konkani"], ["kom", "kv", "Komi"], ["kon", "kg", "Kongo"], ["kor", "ko", "Korean"], ["kos", "", "Kosraean"], ["kpe", "", "Kpelle"], ["krc", "", "Karachay-Balkar"], ["krl", "", "Karelian"], ["kro", "", "Kru languages"], ["kru", "", "Kurukh"], ["kua", "kj", "Kuanyama; Kwanyama"], ["kum", "", "Kumyk"], ["kur", "ku", "Kurdish"], ["kut", "", "Kutenai"], ["lad", "", "Ladino"], ["lah", "", "Lahnda"], ["lam", "", "Lamba"], ["lao", "lo", "Lao"], ["lat", "la", "Latin"], ["lav", "lv", "Latvian"], ["lez", "", "Lezghian"], ["lim", "li", "Limburgan; Limburger; Limburgish"], ["lin", "ln", "Lingala"], ["lit", "lt", "Lithuanian"], ["lol", "", "Mongo"], ["loz", "", "Lozi"], ["ltz", "lb", "Luxembourgish; Letzeburgesch"], ["lua", "", "Luba-Lulua"], ["lub", "lu", "Luba-Katanga"], ["lug", "lg", "Ganda"], ["lui", "", "Luiseno"], ["lun", "", "Lunda"], ["luo", "", "Luo (Kenya and Tanzania)"], ["lus", "", "Lushai"], ["mac", "mk", "Macedonian"], ["mad", "", "Madurese"], ["mag", "", "Magahi"], ["mah", "mh", "Marshallese"], ["mai", "", "Maithili"], ["mak", "", "Makasar"], ["mal", "ml", "Malayalam"], ["man", "", "Mandingo"], ["mao", "mi", "Maori"], ["map", "", "Austronesian languages"], ["mar", "mr", "Marathi"], ["mas", "", "Masai"], ["may", "ms", "Malay"], ["mdf", "", "Moksha"], ["mdr", "", "Mandar"], ["men", "", "Mende"], ["mga", "", "Irish, Middle (900-1200)"], ["mic", "", "Mi'kmaq; Micmac"], ["min", "", "Minangkabau"], ["mis", "", "Uncoded languages"], ["mkh", "", "Mon-Khmer languages"], ["mlg", "mg", "Malagasy"], ["mlt", "mt", "Maltese"], ["mnc", "", "Manchu"], ["mni", "", "Manipuri"], ["mno", "", "Manobo languages"], ["moh", "", "Mohawk"], ["mon", "mn", "Mongolian"], ["mos", "", "Mossi"], ["mul", "", "Multiple languages"], ["mun", "", "Munda languages"], ["mus", "", "Creek"], ["mwl", "", "Mirandese"], ["mwr", "", "Marwari"], ["myn", "", "Mayan languages"], ["myv", "", "Erzya"], ["nah", "", "Nahuatl languages"], ["nai", "", "North American Indian languages"], ["nap", "", "Neapolitan"], ["nau", "na", "Nauru"], ["nav", "nv", "Navajo; Navaho"], ["nbl", "nr", "Ndebele, South; South Ndebele"], ["nde", "nd", "Ndebele, North; North Ndebele"], ["ndo", "ng", "Ndonga"], ["nds", "", "Low German; Low Saxon; German, Low; Saxon, Low"], ["nep", "ne", "Nepali"], ["new", "", "Nepal Bhasa; Newari"], ["nia", "", "Nias"], ["nic", "", "Niger-Kordofanian languages"], ["niu", "", "Niuean"], ["nno", "nn", "Norwegian Nynorsk; Nynorsk, Norwegian"], ["nob", "nb", "Bokmål, Norwegian; Norwegian Bokmål"], ["nog", "", "Nogai"], ["non", "", "Norse, Old"], ["nor", "no", "Norwegian"], ["nqo", "", "N'Ko"], ["nso", "", "Pedi; Sepedi; Northern Sotho"], ["nub", "", "Nubian languages"], ["nwc", "", "Classical Newari; Old Newari; Classical Nepal Bhasa"], ["nya", "ny", "Chichewa; Chewa; Nyanja"], ["nym", "", "Nyamwezi"], ["nyn", "", "Nyankole"], ["nyo", "", "Nyoro"], ["nzi", "", "Nzima"], ["oci", "oc", "Occitan (post 1500); Provençal"], ["oji", "oj", "Ojibwa"], ["ori", "or", "Oriya"], ["orm", "om", "Oromo"], ["osa", "", "Osage"], ["oss", "os", "Ossetian; Ossetic"], ["ota", "", "Turkish, Ottoman (1500-1928)"], ["oto", "", "Otomian languages"], ["paa", "", "Papuan languages"], ["pag", "", "Pangasinan"], ["pal", "", "Pahlavi"], ["pam", "", "Pampanga; Kapampangan"], ["pan", "pa", "Panjabi; Punjabi"], ["pap", "", "Papiamento"], ["pau", "", "Palauan"], ["peo", "", "Persian, Old (ca.600-400 B.C.)"], ["per", "fa", "Persian"], ["phi", "", "Philippine languages"], ["phn", "", "Phoenician"], ["pli", "pi", "Pali"], ["pol", "pl", "Polish"], ["pon", "", "Pohnpeian"], ["por", "pt", "Portuguese"], ["pra", "", "Prakrit languages"], ["pro", "", "Provençal, Old (to 1500)"], ["pus", "ps", "Pushto; Pashto"], ["qaa-qtz", "", "Reserved for local use"], ["que", "qu", "Quechua"], ["raj", "", "Rajasthani"], ["rap", "", "Rapanui"], ["rar", "", "Rarotongan; Cook Islands Maori"], ["roa", "", "Romance languages"], ["roh", "rm", "Romansh"], ["rom", "", "Romany"], ["rum", "ro", "Romanian; Moldavian; Moldovan"], ["run", "rn", "Rundi"], ["rup", "", "Aromanian; Arumanian; Macedo-Romanian"], ["rus", "ru", "Russian"], ["sad", "", "Sandawe"], ["sag", "sg", "Sango"], ["sah", "", "Yakut"], ["sai", "", "South American Indian (Other)"], ["sal", "", "Salishan languages"], ["sam", "", "Samaritan Aramaic"], ["san", "sa", "Sanskrit"], ["sas", "", "Sasak"], ["sat", "", "Santali"], ["scn", "", "Sicilian"], ["sco", "", "Scots"], ["sel", "", "Selkup"], ["sem", "", "Semitic languages"], ["sga", "", "Old Irish (to 900)"], ["sgn", "", "Sign Languages"], ["shn", "", "Shan"], ["sid", "", "Sidamo"], ["sin", "si", "Sinhala; Sinhalese"], ["sio", "", "Siouan languages"], ["sit", "", "Sino-Tibetan languages"], ["sla", "", "Slavic languages"], ["slo", "sk", "Slovak"], ["slv", "sl", "Slovenian"], ["sma", "", "Southern Sami"], ["sme", "se", "Northern Sami"], ["smi", "", "Sami languages"], ["smj", "", "Lule Sami"], ["smn", "", "Inari Sami"], ["smo", "sm", "Samoan"], ["sms", "", "Skolt Sami"], ["sna", "sn", "Shona"], ["snd", "sd", "Sindhi"], ["snk", "", "Soninke"], ["sog", "", "Sogdian"], ["som", "so", "Somali"], ["son", "", "Songhai languages"], ["sot", "st", "Southern Sotho"], ["spa", "es", "Spanish; Castilian"], ["srd", "sc", "Sardinian"], ["srn", "", "Sranan Tongo"], ["srp", "sr", "Serbian"], ["srr", "", "Serer"], ["ssa", "", "Nilo-Saharan languages"], ["ssw", "ss", "Swati"], ["suk", "", "Sukuma"], ["sun", "su", "Sundanese"], ["sus", "", "Susu"], ["sux", "", "Sumerian"], ["swa", "sw", "Swahili"], ["swe", "sv", "Swedish"], ["syc", "", "Classical Syriac"], ["syr", "", "Syriac"], ["tah", "ty", "Tahitian"], ["tai", "", "Tai languages"], ["tam", "ta", "Tamil"], ["tat", "tt", "Tatar"], ["tel", "te", "Telugu"], ["tem", "", "Timne"], ["ter", "", "Tereno"], ["tet", "", "Tetum"], ["tgk", "tg", "Tajik"], ["tgl", "tl", "Tagalog"], ["tha", "th", "Thai"], ["tib", "bo", "Tibetan"], ["tig", "", "Tigre"], ["tir", "ti", "Tigrinya"], ["tiv", "", "Tiv"], ["tkl", "", "Tokelau"], ["tlh", "", "Klingon; tlhIngan-Hol"], ["tli", "", "Tlingit"], ["tmh", "", "Tamashek"], ["tog", "", "Tonga (Nyasa)"], ["ton", "to", "Tonga (Tonga Islands)"], ["tpi", "", "Tok Pisin"], ["tsi", "", "Tsimshian"], ["tsn", "tn", "Tswana"], ["tso", "ts", "Tsonga"], ["tuk", "tk", "Turkmen"], ["tum", "", "Tumbuka"], ["tup", "", "Tupi languages"], ["tur", "tr", "Turkish"], ["tut", "", "Altaic languages"], ["tvl", "", "Tuvalu"], ["twi", "tw", "Twi"], ["tyv", "", "Tuvinian"], ["udm", "", "Udmurt"], ["uga", "", "Ugaritic"], ["uig", "ug", "Uighur; Uyghur"], ["ukr", "uk", "Ukrainian"], ["umb", "", "Umbundu"], ["und", "", "Undetermined"], ["urd", "ur", "Urdu"], ["uzb", "uz", "Uzbek"], ["vai", "", "Vai"], ["ven", "ve", "Venda"], ["vie", "vi", "Vietnamese"], ["vol", "vo", "Volapük"], ["vot", "", "Votic"], ["wak", "", "Wakashan languages"], ["wal", "", "Walamo"], ["war", "", "Waray"], ["was", "", "Washo"], ["wel", "cy", "Welsh"], ["wen", "", "Sorbian languages"], ["wln", "wa", "Walloon"], ["wol", "wo", "Wolof"], ["xal", "", "Kalmyk; Oirat"], ["xho", "xh", "Xhosa"], ["yao", "", "Yao"], ["yap", "", "Yapese"], ["yid", "yi", "Yiddish"], ["yor", "yo", "Yoruba"], ["ypk", "", "Yupik languages"], ["zap", "", "Zapotec"], ["zbl", "", "Blissymbols; Blissymbolics; Bliss"], ["zen", "", "Zenaga"], ["zgh", "", "Standard Moroccan Tamazight"], ["zha", "za", "Zhuang; Chuang"], ["znd", "", "Zande languages"], ["zul", "zu", "Zulu"], ["zun", "", "Zuni"], ["zxx", "", "No linguistic content; Not applicable"], ["zza", "", "Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki"], ["xno", "", "Anglo-Norman"], ["LL.", "", "Late-Latin"]];

  var labels = {};
  var aliases = {};
  var CE = '<small class="ce-date2">CE</small>';
  var BCE = '<small class="ce-date2">BCE</small>';
  labels["AAVE"] = {
    link: "African American Vernacular English",
    display: "AAVE"
  };
  labels["æ-tensing"] = {
    link: "æ-tensing",
    type: "sound change"
  };
  aliases["ae-tensing"] = "æ-tensing";
  labels["afb"] = {
    link: "Gulf Arabic",
    display: "Gulf Arabic"
  };
  aliases["Gulf"] = "afb";
  labels["Anglicised"] = {
    link: "Anglicisation#Anglicisation of non-English-language vocabulary and names",
    display: "Anglicised"
  };
  aliases["Anglicized"] = "Anglicised";
  labels["Aran"] = {
    link: "Aran Islands",
    display: "Aran"
  };
  labels["ar-Cairene"] = {
    link: "Egyptian Arabic",
    display: "Cairene"
  };
  aliases["Cairene"] = "ar-Cairene";
  labels["Arvanite"] = {
    link: "Arvanitika",
    display: "Arvanite"
  };
  labels["Ashkenazi Hebrew"] = {
    link: "Ashkenazi Hebrew",
    display: "Ashkenazi Hebrew"
  };
  aliases["Ashkenazi"] = "Ashkenazi Hebrew";
  labels["Australia"] = {
    link: "Australian English phonology",
    display: "General Australian"
  };
  aliases["AU"] = "Australia";
  aliases["AuE"] = "Australia";
  aliases["Aus"] = "Australia";
  aliases["AusE"] = "Australia";
  aliases["GenAus"] = "Australia";
  aliases["General Australian"] = "Australia";
  labels["Balearic Catalan"] = {
    link: "Balearic dialect",
    display: "Balearic"
  };
  aliases["Balearic"] = "Balearic Catalan";
  labels["BE-nl"] = {
    link: "Belgian Dutch",
    display: "Belgium"
  };
  aliases["BE"] = "BE-nl";
  labels["Beijing"] = {
    link: "Beijing dialect",
    display: "Beijing"
  };
  labels["Bosnia"] = {
    link: "Comparison of standard Bosnian, Croatian, Montenegrin and Serbian#Accentuation",
    display: "Bosnia"
  };
  aliases["Bosnian"] = "Bosnia";
  labels["Boston"] = {
    link: "Boston English",
    display: "Boston"
  };
  aliases["Bos"] = "Boston";
  labels["Brazil"] = {
    link: "Brazilian Portuguese",
    display: "Brazil"
  };
  aliases["BP"] = "Brazil";
  aliases["BR"] = "Brazil";
  aliases["Brazilian Portuguese"] = "Brazil";
  labels["Burträsk"] = {
    link: "Burträsk"
  };
  labels["Bygdeå"] = {
    link: "Bygdeå"
  };
  labels["Canada"] = {
    link: "Canadian English",
    display: "Canada"
  };
  aliases["CA"] = "Canada";
  aliases["Canadian"] = "Canada";
  labels["Canadian Shift"] = {
    link: "Canadian Shift",
    display: "Canadian Vowel Shift",
    type: "sound change"
  };
  aliases["Canadian shift"] = "Canadian Shift";
  aliases["Canadian Vowel Shift"] = "Canadian Shift";
  aliases["Canadian vowel shift"] = "Canadian Shift";
  labels["Carioca"] = {
    link: "Carioca#Carioca Dialect",
    display: "Carioca"
  };
  aliases["RJ"] = "Carioca";
  labels["Castilian"] = {
    link: "Castilian Spanish",
    display: "Castilian"
  };
  aliases["Spain"] = "Castilian";
  labels["Central Catalan"] = {
    link: "Central Catalan",
    display: "Central"
  };
  labels["central Germany"] = {
    display: "central Germany"
  };
  aliases["central German"] = "central Germany";
  aliases["Central German"] = "central Germany";
  aliases["Central Germany"] = "central Germany";
  labels["central Italy"] = {
    link: "Central Italian",
    display: "central Italy"
  };
  aliases["central Italian"] = "central Italy";
  aliases["Central Italian"] = "central Italy";
  aliases["Central Italy"] = "central Italy";
  labels["Central Scotland"] = {
    link: "Central Scots",
    display: "Central Scotland"
  };
  labels["Central Sweden"] = {
    link: "Central Swedish",
    display: "Central Sweden"
  };
  aliases["Central Swedish"] = "Central Sweden";
  labels["ceceo"] = {
    link: "ceceo",
    display: "''ceceo'' merger",
    type: "sound change"
  };
  labels["Clay"] = {
    link: "Clay Frisian",
    display: "Clay"
  };
  labels["Classical"] = {
    link: "Classical Latin",
    display: "Classical"
  };
  labels["Classical Sanskrit"] = {
    link: "Sanskrit#Classical Sanskrit",
    display: "Classical"
  };
  labels["Cois Fharraige"] = {
    link: "Gaeltacht Cois Fharraige",
    display: "Cois Fharraige"
  };
  aliases["CF"] = "Cois Fharraige";
  labels["Connacht"] = {
    link: "Connacht Irish",
    display: "Connacht"
  };
  labels["Cork"] = {
    link: "Gaeltacht#Cork Gaeltacht",
    display: "Cork"
  };
  labels["cot-caught"] = {
    link: "Cot–caught merger",
    display: "''cot''–''caught'' merger",
    type: "sound change"
  };
  aliases["caught-cot"] = "cot-caught";
  labels["Croatia"] = {
    link: "Comparison of standard Bosnian, Croatian, Montenegrin and Serbian#Accentuation",
    display: "Croatia"
  };
  aliases["Croatian"] = "Croatia";
  labels["cure-force"] = {
    link: "w:Cure–force merger",
    display: "''cure''–''force'' merger",
    type: "sound change"
  };
  labels["cy-N"] = {
    link: "Welsh language#Dialects",
    display: "North Wales"
  };
  aliases["cy-g"] = "cy-N";
  labels["cy-S"] = {
    link: "Welsh language#Dialects",
    display: "South Wales"
  };
  aliases["cy-h"] = "cy-S";
  labels["Dari"] = {
    link: "Dari Persian",
    display: "Dari"
  };
  labels["Delhi"] = {
    display: "Delhi Hindi"
  };
  labels["distinción"] = {
    link: "distinción",
    display: "''z''-''s'' distinction",
    type: "sound change"
  };
  aliases["distincion"] = "distinción";
  labels["Ecclesiastical"] = {
    link: "Ecclesiastical Latin",
    display: "Ecclesiastical"
  };
  labels["Egyptological"] = {
    link: "Egyptian language#Egyptological pronunciation",
    display: "modern Egyptological"
  };
  aliases["modern Egyptological"] = "Egyptological";
  labels["Estuary English"] = {
    link: "Estuary English"
  };
  labels["father-bother"] = {
    link: "Father–bother merger",
    display: "''father''-''bother'' merger",
    type: "sound change"
  };
  labels["Finland"] = {
    link: "Finland Swedish#Phonology",
    display: "Finland"
  };
  aliases["Finland Swedish"] = "Finland";
  labels["FS"] = {
    link: "Standard French",
    display: "FS"
  };
  labels["FV"] = {
    link: "French Flemish",
    display: "French Flanders"
  };
  labels["GenAm"] = {
    link: "General American"
  };
  aliases["GA"] = "GenAm";
  aliases["General American"] = "GenAm";
  labels["Geordie"] = {
    link: "Geordie"
  };
  labels["Ghawa"] = {
    display: "[[Ghawa syndrome]]"
  };
  labels["Gheg"] = {
    link: "Gheg Albanian",
    display: "Gheg"
  };
  labels["Givi"] = {
    link: "Giv, South Khorasan",
    display: "Givi"
  };
  labels["Glenties"] = {
    link: "Glenties",
    display: "The Glenties"
  };
  labels["grc-byz1"] = {
    link: "Medieval Greek",
    display: '10<sup>th</sup> ' + CE + ' Byzantine'
  };
  labels["grc-byz2"] = {
    link: "Medieval Greek",
    display: '15<sup>th</sup> ' + CE + ' Constantinopolitan'
  };
  labels["grc-cla"] = {
    link: "Ancient Greek phonology",
    display: '5<sup>th</sup> ' + BCE + ' Attic'
  };
  labels["grc-koi1"] = {
    link: "Koine Greek phonology",
    display: '1<sup>st</sup> ' + CE + ' Egyptian'
  };
  labels["grc-koi2"] = {
    link: "Koine Greek phonology",
    display: '4<sup>th</sup> ' + CE + ' Koine'
  };
  labels["hbo"] = {
    link: "Biblical Hebrew#Phonology",
    display: "Biblical Hebrew"
  };
  aliases["Biblical Hebrew"] = "hbo";
  labels["Hong Kong"] = {
    link: "Hong Kong English",
    display: "Hong Kong"
  };
  aliases["HK"] = "Hong Kong";
  labels["horse-hoarse"] = {
    link: "horse–hoarse merger",
    display: "without the ''horse''–''hoarse'' merger",
    type: "sound change"
  };
  labels["Hössjö"] = {
    link: "sv:Hössjö"
  };
  labels["hy-E"] = {
    link: "Eastern Armenian language",
    display: "Eastern Armenian"
  };
  labels["hy-IR"] = {
    link: "Armenian Iranians#Culture and language",
    display: "Eastern Armenian - Iran"
  };
  labels["hy-W"] = {
    link: "Western Armenian language",
    display: "Western Armenian"
  };
  labels["hy-Y"] = {
    link: "Yerevan",
    display: "Eastern Armenian - Yerevan"
  };
  labels["IL"] = {
    link: "Modern Hebrew phonology",
    display: "Modern Israeli Hebrew"
  };
  aliases["Israeli Hebrew"] = "IL";
  aliases["Modern Hebrew"] = "IL";
  aliases["Modern Israeli"] = "IL";
  aliases["Modern Israeli Hebrew"] = "IL";
  aliases["Modern/Israeli Hebrew"] = "IL";
  labels["InE"] = {
    link: "Indian English",
    display: "Indian English"
  };
  labels["intrusive r"] = {
    link: "Intrusive r",
    display: "intrusive r",
    type: "sound change"
  };
  labels["IR"] = {
    link: "Western Persian",
    display: "Iranian Persian"
  };
  labels["Ireland"] = {
    link: "Hiberno-English",
    display: "Ireland"
  };
  aliases["HE"] = "Ireland";
  aliases["IE"] = "Ireland";
  labels["Italian Hebrew"] = {
    link: "Italian Hebrew",
    display: "Italian Hebrew"
  };
  labels["Johor-Selangor"] = {
    link: "Malayan languages",
    display: "Johor-Selangor"
  };
  labels["Kabul, Peshawar"] = {
    link: "Pashto dialects",
    display: "Kabul, Peshawar"
  };
  labels["Kalix"] = {
    link: "Kalix"
  };
  labels["Kandahar"] = {
    link: "Kandahari Pashto",
    display: "Kandahar"
  };
  aliases["ps-Kandahar"] = "Kandahar";
  labels["Kerry"] = {
    link: "Gaeltacht#Kerry Gaeltacht",
    display: "Kerry"
  };
  labels["xme-ham"] = {
    display: "Hamadani",
    link: "Kermanic languages"
  };
  labels["xme-mah"] = {
    display: "Mahallati",
    link: "Kermanic languages"
  };
  labels["xme-von"] = {
    display: "Vonishuni",
    link: "Kermanic languages"
  };
  labels["xme-del"] = {
    display: "Delijani",
    link: "Kermanic languages"
  };
  labels["xme-kas"] = {
    display: "Kashani",
    link: "Kermanic languages"
  };
  labels["xme-kes"] = {
    display: "Kese'i",
    link: "Kermanic languages"
  };
  labels["xme-mey"] = {
    display: "Meyme'i",
    link: "Kermanic languages"
  };
  labels["xme-abz"] = {
    display: "Abuzeydabadi",
    link: "Kermanic languages"
  };
  labels["xme-aby"] = {
    display: "Abyanehi",
    link: "Kermanic languages"
  };
  labels["xme-far"] = {
    display: "Farizandi",
    link: "Kermanic languages"
  };
  labels["xme-jow"] = {
    display: "Jowshaqani",
    link: "Kermanic languages"
  };
  labels["xme-qoh"] = {
    display: "Qohrudi",
    link: "Kermanic languages"
  };
  labels["xme-yar"] = {
    display: "Yarandi",
    link: "Kermanic languages"
  };
  labels["xme-tar"] = {
    display: "Tari",
    link: "Kermanic languages"
  };
  labels["xme-sed"] = {
    display: "Sedehi",
    link: "Kermanic languages"
  };
  labels["xme-ard"] = {
    display: "Ardestani",
    link: "Kermanic languages"
  };
  labels["xme-zef"] = {
    display: "Zefre'i",
    link: "Kermanic languages"
  };
  labels["xme-isf"] = {
    display: "Isfahani",
    link: "Kermanic languages"
  };
  labels["xme-kaf"] = {
    display: "Kafroni",
    link: "Kermanic languages"
  };
  labels["xme-var"] = {
    display: "Varzenei",
    link: "Kermanic languages"
  };
  labels["xme-nay"] = {
    display: "Nayini",
    link: "Nayini language"
  };
  labels["xme-vaf"] = {
    display: "Vafsi",
    link: "Vafsi dialect"
  };
  labels["xme-ast"] = {
    display: "Ashtiani language",
    link: "nyq"
  };
  labels["xme-xun"] = {
    display: "Khunsari",
    link: "Khunsari language"
  };
  labels["xme-nat"] = {
    display: "Natanzi",
    link: "Natanzi language"
  };
  labels["xme-soi"] = {
    display: "Soi",
    link: "Soi language"
  };
  labels["xme-gaz"] = {
    display: "Gazi",
    link: "Gazi language"
  };
  labels["xme-ana"] = {
    display: "Anaraki",
    link: "Nayini language"
  };
  labels["xme-ker"] = {
    display: "Kermani",
    link: "Zoroastrian Dari language"
  };
  labels["xme-yaz"] = {
    display: "Yazdi",
    link: "Zoroastrian Dari language"
  };
  labels["LAm"] = {
    link: "Spanish language in the Americas",
    display: "Latin American"
  };
  labels["Late Egyptian"] = {
    link: "Late Egyptian language",
    display: "reconstructed Late Egyptian"
  };
  labels["Latinate"] = {
    link: "Latin#Phonology",
    display: "Latinate"
  };
  labels["lleísmo"] = {
    link: "Yeísmo",
    display: "''ll''-''y'' distinction",
    type: "sound change"
  };
  labels["Lövånger"] = {
    link: "Lövånger"
  };
  labels["Luleå"] = {
    link: "Luleå"
  };
  labels["Mary-marry-merry"] = {
    link: "Mary–marry–merry merger",
    display: "''Mary''–''marry''–''merry'' merger",
    type: "sound change"
  };
  aliases["Mmmm"] = "Mary-marry-merry";
  labels["Mayo"] = {
    link: "Gaeltacht Iorrais agus Acaill",
    display: "Mayo"
  };
  labels["Medio-Late Egyptian"] = {
    link: "Late Egyptian language",
    display: "reconstructed Medio-Late Egyptian"
  };
  labels["Middle Egyptian"] = {
    link: "Egyptian language#Middle Egyptian",
    display: "reconstructed Middle Egyptian"
  };
  labels["Midwestern US"] = {
    link: "Midwestern United States#Linguistic characteristics",
    display: "Midwestern US"
  };
  aliases["Midwest US"] = "Midwestern US";
  aliases["Midwest US English"] = "Midwestern US";
  aliases["Midwestern US English"] = "Midwestern US";
  labels["Mizrahi Hebrew"] = {
    link: "Mizrahi Hebrew",
    display: "Mizrahi Hebrew"
  };
  aliases["Mizrahi"] = "Mizrahi Hebrew";
  aliases["Mizrakhi"] = "Mizrahi Hebrew";
  aliases["Mizrachi"] = "Mizrahi Hebrew";
  aliases["Mizrakhi Hebrew"] = "Mizrahi Hebrew";
  aliases["Mizrachi Hebrew"] = "Mizrahi Hebrew";
  labels["MLE"] = {
    link: "Multicultural London English",
    display: "MLE"
  };
  labels["Montenegro"] = {
    link: "Comparison of standard Bosnian, Croatian, Montenegrin and Serbian#Accentuation",
    display: "Montenegro"
  };
  aliases["Montenegrin"] = "Montenegro";
  labels["Munster"] = {
    link: "Munster Irish",
    display: "Munster"
  };
  labels["Netherlands"] = {
    link: "Dutch phonology",
    display: "Netherlands"
  };
  aliases["NL"] = "Netherlands";
  labels["New Latin"] = {
    link: "New Latin"
  };
  labels["New York"] = {
    link: "New York dialect#Linguistic features",
    display: "NYC"
  };
  aliases["NY"] = "New York";
  aliases["NYC"] = "New York";
  labels["New Zealand"] = {
    link: "New Zealand English phonology",
    display: "General New Zealand"
  };
  aliases["NZ"] = "New Zealand";
  aliases["GNZ"] = "New Zealand";
  aliases["General New Zealand"] = "New Zealand";
  labels["non-Mary-marry-merry"] = {
    link: "Mary–marry–merry merger",
    display: "''Mary''–''marry''–''merry'' distinction",
    type: "sound change"
  };
  aliases["nMmmm"] = "non-Mary-marry-merry";
  labels["non-rhotic"] = {
    link: "Rhoticity in English",
    display: "non-rhotic"
  };
  aliases["nonrhotic"] = "non-rhotic";
  labels["non-weak vowel"] = {
    link: "Weak vowel merger",
    display: "weak vowel distinction",
    type: "sound change"
  };
  labels["northern and central Germany"] = {
    display: "northern Germany, central Germany"
  };
  aliases["north and central German"] = "northern and central Germany";
  aliases["North and Central German"] = "northern and central Germany";
  aliases["north and central Germany"] = "northern and central Germany";
  aliases["North and Central Germany"] = "northern and central Germany";
  aliases["northern and central German"] = "northern and central Germany";
  aliases["Northern and Central German"] = "northern and central Germany";
  aliases["Northern and Central Germany"] = "northern and central Germany";
  labels["Northern England"] = {
    link: "English language in Northern England",
    display: "Northern England"
  };
  aliases["North England"] = "Northern England";
  labels["northern Germany"] = {
    display: "northern Germany"
  };
  aliases["north German"] = "northern Germany";
  aliases["North German"] = "northern Germany";
  aliases["north Germany"] = "northern Germany";
  aliases["North Germany"] = "northern Germany";
  aliases["northern German"] = "northern Germany";
  aliases["Northern German"] = "northern Germany";
  aliases["Northern Germany"] = "northern Germany";
  labels["Northern Scotland"] = {
    link: "Northern Scots",
    display: "Northern Scotland"
  };
  labels["Old Egyptian"] = {
    link: "Egyptian language#Old Egyptian",
    display: "reconstructed Old Egyptian"
  };
  labels["Osaka"] = {
    link: "Kansai dialect",
    display: "Osaka"
  };
  labels["Palestinian Hebrew"] = {
    link: "Palestinian vocalization",
    display: "Palestinian Hebrew"
  };
  labels["pin-pen"] = {
    link: "pin–pen merger",
    display: "''pin''–''pen'' merger",
    type: "sound change"
  };
  aliases["pen-pin"] = "pin-pen";
  labels["Philippine"] = {
    link: "Philippine English",
    display: "Philippine"
  };
  aliases["Philippines"] = "Philippine";
  labels["Portugal"] = {
    link: "European Portuguese",
    display: "Portugal"
  };
  aliases["EP"] = "Portugal";
  aliases["PT"] = "Portugal";
  labels["ps-Kabul"] = {
    link: "Pashto dialects",
    display: "Kabuli"
  };
  labels["Quanzhou"] = {
    link: "Quanzhou"
  };
  labels["Quebec"] = {
    link: "Quebec French phonology",
    display: "Quebec"
  };
  aliases["Québec"] = "Quebec";
  aliases["Joual"] = "Quebec";
  labels["Quetta"] = {
    link: "Pashto dialects",
    display: "Quetta"
  };
  labels["r-dissimilation"] = {
    link: "Dissimilation",
    display: "''r''-dissimilation",
    type: "sound change"
  };
  labels["Rālik"] = {
    link: "Rālik Chain",
    display: "Rālik"
  };
  aliases["Ralik"] = "Rālik";
  labels["Ratak"] = {
    link: "Ratak Chain",
    display: "Ratak"
  };
  labels["rhotic"] = {
    link: "Rhotic and non-rhotic accents",
    display: "rhotic",
    type: "sound change"
  };
  labels["Riau-Lingga"] = {
    link: "Riau-Lingga Sultanate",
    display: "Riau-Lingga"
  };
  labels["Rioplatense"] = {
    link: "Rioplatense Spanish",
    display: "Rioplatense"
  };
  labels["RP"] = {
    link: "Received Pronunciation"
  };
  aliases["Received Pronunciation"] = "RP";
  labels["São Paulo"] = {
    link: "Brazilian Portuguese",
    display: "São Paulo"
  };
  labels["Scotland"] = {
    link: "Scottish English",
    display: "Scotland"
  };
  labels["Sephardi Hebrew"] = {
    link: "Sephardi Hebrew",
    display: "Sephardi Hebrew"
  };
  aliases["Sephardi"] = "Sephardi Hebrew";
  labels["Serbia"] = {
    link: "Comparison of standard Bosnian, Croatian, Montenegrin and Serbian#Accentuation",
    display: "Serbia"
  };
  aliases["Serbian"] = "Serbia";
  labels["seseo"] = {
    link: "seseo",
    display: "''seseo'' merger",
    type: "sound change"
  };
  labels["Sistani"] = {
    link: "Sistani dialect",
    display: "Sistani"
  };
  labels["Skellefteå"] = {
    link: "Skellefteå"
  };
  labels["South Africa"] = {
    link: "South African English phonology",
    display: "General South African"
  };
  aliases["SAE"] = "South Africa";
  aliases["GSAE"] = "South Africa";
  aliases["GenSAE"] = "South Africa";
  aliases["General South African"] = "South Africa";
  labels["Southern American English"] = {
    link: "Southern American English"
  };
  aliases["Southern US"] = "Southern American English";
  aliases["Southern US English"] = "Southern American English";
  aliases["Southern U.S. English"] = "Southern American English";
  labels["South Brazil"] = {
    link: "Brazilian Portuguese",
    display: "South Brazil"
  };
  labels["southern Germany"] = {
    display: "southern Germany"
  };
  aliases["south German"] = "southern Germany";
  aliases["South German"] = "southern Germany";
  aliases["south Germany"] = "southern Germany";
  aliases["South Germany"] = "southern Germany";
  aliases["southern German"] = "southern Germany";
  aliases["Southern German"] = "southern Germany";
  aliases["Southern Germany"] = "southern Germany";
  labels["Southern Scotland"] = {
    link: "Southern Scots",
    display: "Southern Scotland"
  };
  aliases["Southern Scots"] = "Southern Scotland";
  labels["St. Louis"] = {
    link: "North American regional phonology#St. Louis and vicinity",
    display: "St. Louis (Missouri)"
  };
  aliases["STL"] = "St. Louis";
  labels["standard"] = {
    display: "standard"
  };
  aliases["Standard"] = "standard";
  labels["Standard Zhuang"] = {
    link: "Standard Zhuang",
    display: "Standard Zhuang"
  };
  labels["Sweden"] = {
    link: "Swedish phonology",
    display: "Sweden"
  };
  aliases["Swedish"] = "Sweden";
  labels["Syrian Hebrew"] = {
    link: "Syrian Jews#Pronunciation of Hebrew",
    display: "Syrian Hebrew"
  };
  labels["t-glottalization"] = {
    link: "T-glottalization",
    display: "''t''-glottalization",
    type: "sound change"
  };
  aliases["t-glottaling"] = "t-glottalization";
  labels["Tajik"] = {
    link: "Tajik language",
    display: "Tajik"
  };
  aliases["Tajiki"] = "Tajik";
  labels["Tehrani"] = {
    link: "Tehrani accent",
    display: "Tehrani"
  };
  labels["th-fronting"] = {
    link: "th-fronting",
    type: "sound change"
  };
  labels["Tiberian Hebrew"] = {
    link: "Tiberian Hebrew",
    display: "Tiberian Hebrew"
  };
  aliases["Tiberian"] = "Tiberian Hebrew";
  labels["Tosk"] = {
    link: "Tosk Albanian",
    display: "Tosk"
  };
  labels["UK"] = {
    link: "British English",
    display: "UK"
  };
  aliases["British"] = "UK";
  aliases["U.K."] = "UK";
  labels["Ulaanbaatar"] = {
    link: "Ulaanbaatar"
  };
  aliases["UlaanBaatar"] = "Ulaanbaatar";
  labels["Ulster"] = {
    link: "Ulster Irish",
    display: "Ulster"
  };
  aliases["Donegal"] = "Ulster";
  labels["Umeå"] = {
    link: "Umeå"
  };
  labels["US"] = {
    link: "American English",
    display: "US"
  };
  aliases["U.S."] = "US";
  labels["Valencia"] = {
    link: "Valencian"
  };
  aliases["Valencian"] = "Valencia";
  labels["Vedic Sanskrit"] = {
    link: "Vedic Sanskrit",
    display: "Vedic"
  };
  aliases["Vedic"] = "Vedic Sanskrit";
  aliases["Rigvedic"] = "Vedic Sanskrit";
  labels["Vulgar"] = {
    link: "Vulgar Latin",
    display: "Vulgar"
  };
  labels["Wales"] = {
    link: "Welsh English",
    display: "Wales"
  };
  aliases["Welsh"] = "Wales";
  labels["Wardak"] = {
    link: "Pashto dialects",
    display: "Wardak"
  };
  labels["Waterford"] = {
    link: "Gaeltacht na nDéise",
    display: "Waterford"
  };
  labels["Wazirwola"] = {
    link: "Wazirwola dialect",
    display: "Wazirwola"
  };
  labels["weak vowel"] = {
    link: "Weak vowel merger",
    display: "weak vowel merger",
    type: "sound change"
  };
  labels["wine/whine"] = {
    link: "wine–whine merger",
    display: "without the ''wine''–''whine'' merger",
    type: "sound change"
  };
  labels["Wood"] = {
    link: "Wood Frisian",
    display: "Wood"
  };
  labels["Xiamen"] = {
    link: "Xiamen"
  };
  labels["yeísmo"] = {
    link: "Yeísmo",
    display: "''ll''-''y'' neutralization",
    type: "sound change"
  };
  labels["Yemenite Hebrew"] = {
    link: "Yemenite Hebrew",
    display: "Yemenite Hebrew"
  };
  labels["YIVO"] = {
    link: "YIVO"
  };
  labels["yod-coalescence"] = {
    link: "yod-coalescence",
    display: "yod-coalescence",
    type: "sound change"
  };
  labels["Zhangzhou"] = {
    link: "Zhangzhou"
  };
  var accents = {
    labels: labels,
    aliases: aliases
  };

  var tags = {};
  var shortcuts = {}; // ----------------------- Person -----------------------

  tags["first-person"] = {
    tag_type: "person",
    glossary: "first person",
    shortcuts: ["1"],
    wikidata: "Q21714344"
  };
  tags["second-person"] = {
    tag_type: "person",
    glossary: "second person",
    shortcuts: ["2"],
    wikidata: "Q51929049"
  };
  tags["third-person"] = {
    tag_type: "person",
    glossary: "third person",
    shortcuts: ["3"],
    wikidata: "Q51929074"
  };
  tags["impersonal"] = {
    tag_type: "person",
    glossary: "impersonal",
    shortcuts: ["impers"]
  };
  shortcuts["12"] = "1//2";
  shortcuts["13"] = "1//3";
  shortcuts["23"] = "2//3";
  shortcuts["123"] = "1//2//3"; // ----------------------- Number -----------------------

  tags["singular"] = {
    tag_type: "number",
    glossary: "singular number",
    shortcuts: ["s", "sg"],
    wikidata: "Q110786"
  };
  tags["dual"] = {
    tag_type: "number",
    glossary: "dual number",
    shortcuts: ["d", "du"],
    wikidata: "Q110022"
  };
  tags["plural"] = {
    tag_type: "number",
    glossary: "plural number",
    shortcuts: ["p", "pl"],
    wikidata: "Q146786"
  };
  tags["single-possession"] = {
    tag_type: "number",
    glossary: "singular number",
    shortcuts: ["spos"],
    wikidata: "Q110786" // -- Singular

  };
  tags["multiple-possession"] = {
    tag_type: "number",
    glossary: "plural number",
    shortcuts: ["mpos"],
    wikidata: "Q146786" // -- Plural

  };
  shortcuts["1s"] = ["1", "s"];
  shortcuts["2s"] = ["2", "s"];
  shortcuts["3s"] = ["3", "s"];
  shortcuts["1d"] = ["1", "d"];
  shortcuts["2d"] = ["2", "d"];
  shortcuts["3d"] = ["3", "d"];
  shortcuts["1p"] = ["1", "p"];
  shortcuts["2p"] = ["2", "p"];
  shortcuts["3p"] = ["3", "p"]; // ----------------------- Gender -----------------------

  tags["masculine"] = {
    tag_type: "gender",
    glossary: "gender",
    shortcuts: ["m"],
    wikidata: "Q499327"
  }; // -- This is useful e.g. in Swedish.

  tags["natural masculine"] = {
    tag_type: "gender",
    glossary: "gender",
    shortcuts: ["natm"]
  };
  tags["feminine"] = {
    tag_type: "gender",
    glossary: "gender",
    shortcuts: ["f"],
    wikidata: "Q1775415"
  };
  tags["neuter"] = {
    tag_type: "gender",
    glossary: "gender",
    shortcuts: ["n"],
    wikidata: "Q1775461"
  };
  tags["common"] = {
    tag_type: "gender",
    glossary: "gender",
    shortcuts: ["c"],
    wikidata: "Q1305037"
  };
  tags["nonvirile"] = {
    tag_type: "gender",
    glossary: "nonvirile",
    shortcuts: ["nv"]
  };
  shortcuts["mf"] = "m//f";
  shortcuts["mn"] = "m//n";
  shortcuts["fn"] = "f//n";
  shortcuts["mfn"] = "m//f//n"; // ----------------------- Animacy -----------------------
  // -- (may be useful sometimes for [[Module:object usage]].)

  tags["animate"] = {
    tag_type: "animacy",
    glossary: "animate",
    shortcuts: ["an"],
    wikidata: "Q51927507"
  };
  tags["inanimate"] = {
    tag_type: "animacy",
    glossary: "inanimate",
    shortcuts: ["in", "inan"],
    wikidata: "Q51927539"
  };
  tags["personal"] = {
    tag_type: "animacy",
    shortcuts: ["pr", "pers"],
    wikidata: "Q63302102"
  }; // ----------------------- Tense/aspect -----------------------

  tags["present"] = {
    tag_type: "tense-aspect",
    glossary: "present tense",
    shortcuts: ["pres"],
    wikidata: "Q192613"
  };
  tags["past"] = {
    tag_type: "tense-aspect",
    glossary: "past tense",
    wikidata: "Q1994301"
  };
  tags["future"] = {
    tag_type: "tense-aspect",
    glossary: "future tense",
    shortcuts: ["fut", "futr"],
    wikidata: "Q501405"
  };
  tags["non-past"] = {
    tag_type: "tense-aspect",
    glossary: "non-past tense",
    shortcuts: ["npast"],
    wikidata: "Q16916993"
  };
  tags["progressive"] = {
    tag_type: "tense-aspect",
    glossary: "progressive",
    shortcuts: ["prog"],
    wikidata: "Q56653945"
  };
  tags["preterite"] = {
    tag_type: "tense-aspect",
    shortcuts: ["pret"],
    wikidata: "Q442485"
  };
  tags["perfect"] = {
    tag_type: "tense-aspect",
    glossary: "perfect",
    shortcuts: ["perf"],
    wikidata: "Q625420"
  };
  tags["imperfect"] = {
    tag_type: "tense-aspect",
    glossary: "imperfect",
    shortcuts: ["impf", "imperf"]
  };
  tags["pluperfect"] = {
    tag_type: "tense-aspect",
    glossary: "pluperfect",
    shortcuts: ["plup", "pluperf"],
    wikidata: "Q623742"
  };
  tags["aorist"] = {
    tag_type: "tense-aspect",
    glossary: "aorist tense",
    shortcuts: ["aor", "aori"],
    wikidata: "Q216497"
  };
  tags["past historic"] = {
    tag_type: "tense-aspect",
    shortcuts: ["phis"],
    wikidata: "Q442485" // -- Preterite

  };
  tags["imperfective"] = {
    tag_type: "tense-aspect",
    glossary: "imperfective",
    shortcuts: ["impfv", "imperfv"],
    wikidata: "Q371427"
  };
  tags["perfective"] = {
    tag_type: "tense-aspect",
    glossary: "perfective",
    shortcuts: ["pfv", "perfv"],
    wikidata: "Q1424306"
  };
  shortcuts["spast"] = ["simple", "past"];
  shortcuts["simple past"] = ["simple", "past"];
  shortcuts["spres"] = ["simple", "present"];
  shortcuts["simple present"] = ["simple", "present"]; // ----------------------- Mood -----------------------

  tags["imperative"] = {
    tag_type: "mood",
    glossary: "imperative mood",
    shortcuts: ["imp", "impr", "impv"],
    wikidata: "Q22716"
  };
  tags["indicative"] = {
    tag_type: "mood",
    glossary: "indicative mood",
    shortcuts: ["ind", "indc", "indic"],
    wikidata: "Q682111"
  };
  tags["subjunctive"] = {
    tag_type: "mood",
    glossary: "subjunctive mood",
    shortcuts: ["sub", "subj"],
    wikidata: "Q473746"
  };
  tags["conditional"] = {
    tag_type: "mood",
    glossary: "conditional mood",
    shortcuts: ["cond"],
    wikidata: "Q625581"
  };
  tags["optative"] = {
    tag_type: "mood",
    glossary: "optative mood",
    shortcuts: ["opta", "opt"],
    wikidata: "Q527205"
  };
  tags["jussive"] = {
    tag_type: "mood",
    glossary: "jussive mood",
    shortcuts: ["juss"],
    wikidata: "Q462367"
  }; // ----------------------- Voice/valence -----------------------
  // -- This tag type combines what is normally called "voice" (active, passive,
  // -- middle, mediopassive) with other tags that aren't normally called
  // -- voice but are similar in that they control the valence/valency (number
  // -- and structure of the arguments of a verb).

  tags["active"] = {
    tag_type: "voice-valence",
    glossary: "active voice",
    shortcuts: ["act", "actv"],
    wikidata: "Q1317831"
  };
  tags["middle"] = {
    tag_type: "voice-valence",
    glossary: "middle voice",
    shortcuts: ["mid", "midl"]
  };
  tags["passive"] = {
    tag_type: "voice-valence",
    glossary: "passive voice",
    shortcuts: ["pass", "pasv"],
    wikidata: "Q1194697"
  };
  tags["mediopassive"] = {
    tag_type: "voice-valence",
    glossary: "mediopassive",
    shortcuts: ["mp", "mpass", "mpasv", "mpsv"],
    wikidata: "Q1601545"
  };
  tags["reflexive"] = {
    tag_type: "voice-valence",
    glossary: "reflexive",
    shortcuts: ["refl"],
    // -- the following is for "reflexive verb"
    wikidata: "Q13475484"
  };
  tags["transitive"] = {
    tag_type: "voice-valence",
    glossary: "transitive verb",
    shortcuts: ["tr", "vt"] // -- the following is for "transitive verb"
    // -- wikidata : "Q1774805",

  };
  tags["intransitive"] = {
    tag_type: "voice-valence",
    glossary: "intransitive verb",
    shortcuts: ["intr", "vi"] // -- the following is for "intransitive verb"
    // -- wikidata : "Q1166153",

  };
  tags["ditransitive"] = {
    tag_type: "voice-valence",
    glossary: "ditransitive verb",
    shortcuts: ["ditr"] // -- the following is for "ditransitive verb"
    // -- wikidata : "Q2328313",

  };
  tags["causative"] = {
    tag_type: "voice-valence",
    glossary: "causative",
    shortcuts: ["caus"],
    // -- the following is for "causative verb"
    wikidata: "Q56677011"
  }; // ----------------------- Non-finite -----------------------

  tags["infinitive"] = {
    tag_type: "non-finite",
    glossary: "infinitive",
    shortcuts: ["inf"],
    wikidata: "Q179230"
  }; // -- A form found in Portuguese and Galician
  // -- This is probably unnecessary and can be replaced with the regular "infinitive" tag. A personal infinitive is not a separate infinitive from the plain infinitive, just an inflection of the infinitive.

  tags["personal infinitive"] = {
    glossary: "Portuguese verb conjugation",
    glossary_type: "wp",
    tag_type: "non-finite",
    shortcuts: ["pinf"]
  };
  tags["participle"] = {
    tag_type: "non-finite",
    glossary: "participle",
    shortcuts: ["part", "ptcp"],
    wikidata: "Q814722"
  };
  tags["verbal noun"] = {
    tag_type: "non-finite",
    glossary: "verbal noun",
    shortcuts: ["vnoun"],
    wikidata: "Q1350145"
  };
  tags["gerund"] = {
    tag_type: "non-finite",
    glossary: "gerund",
    shortcuts: ["ger"],
    wikidata: "Q1923028"
  };
  tags["supine"] = {
    tag_type: "non-finite",
    glossary: "supine",
    shortcuts: ["sup"],
    wikidata: "Q548470"
  };
  tags["transgressive"] = {
    tag_type: "non-finite",
    glossary: "transgressive",
    wikidata: "Q904896"
  }; // ----------------------- Case -----------------------

  tags["ablative"] = {
    tag_type: "case",
    glossary: "ablative case",
    shortcuts: ["abl"],
    wikidata: "Q156986"
  };
  tags["accusative"] = {
    tag_type: "case",
    glossary: "accusative case",
    shortcuts: ["acc"],
    wikidata: "Q146078"
  };
  tags["dative"] = {
    tag_type: "case",
    glossary: "dative case",
    shortcuts: ["dat"],
    wikidata: "Q145599"
  };
  tags["genitive"] = {
    tag_type: "case",
    glossary: "genitive case",
    shortcuts: ["gen"],
    wikidata: "Q146233"
  };
  tags["instrumental"] = {
    tag_type: "case",
    glossary: "instrumental case",
    shortcuts: ["ins"],
    wikidata: "Q192997"
  };
  tags["locative"] = {
    tag_type: "case",
    glossary: "locative case",
    shortcuts: ["loc"],
    wikidata: "Q202142"
  };
  tags["nominative"] = {
    tag_type: "case",
    glossary: "nominative case",
    shortcuts: ["nom"],
    wikidata: "Q131105"
  };
  tags["prepositional"] = {
    tag_type: "case",
    glossary: "prepositional case",
    shortcuts: ["pre", "prep"],
    wikidata: "Q2114906"
  };
  tags["vocative"] = {
    tag_type: "case",
    glossary: "vocative case",
    shortcuts: ["voc"],
    wikidata: "Q185077"
  }; // ----------------------- State -----------------------

  tags["construct"] = {
    tag_type: "state",
    glossary: "construct state",
    display: "construct state",
    shortcuts: ["cons", "construct state"],
    wikidata: "Q1641446"
  };
  tags["definite"] = {
    tag_type: "state",
    glossary: "definite",
    shortcuts: ["def", "defn", "definite state"],
    wikidata: "Q53997851"
  };
  tags["indefinite"] = {
    tag_type: "state",
    glossary: "indefinite",
    shortcuts: ["indef", "indf", "indefinite state"],
    wikidata: "Q53997857"
  };
  tags["strong"] = {
    tag_type: "state",
    glossary: "indefinite",
    shortcuts: ["str"],
    wikidata: "Q53997857" // -- Indefinite

  };
  tags["weak"] = {
    tag_type: "state",
    glossary: "definite",
    shortcuts: ["wk"],
    wikidata: "Q53997851" // -- Definite

  };
  tags["mixed"] = {
    tag_type: "state",
    glossary: "mixed",
    shortcuts: ["mix"],
    wikidata: "Q63302161"
  };
  tags["attributive"] = {
    tag_type: "state",
    glossary: "attributive",
    shortcuts: ["attr"]
  };
  tags["predicative"] = {
    tag_type: "state",
    glossary: "predicative",
    shortcuts: ["pred"]
  }; // ----------------------- Degrees of comparison -----------------------

  tags["positive degree"] = {
    tag_type: "comparison",
    glossary: "positive",
    shortcuts: ["posd", "positive"],
    // -- Doesn't exist in English; only in Czech, Estonian, Finnish and
    // -- various Nordic languages.
    wikidata: "Q3482678"
  };
  tags["comparative degree"] = {
    tag_type: "comparison",
    glossary: "comparative",
    shortcuts: ["comd", "comparative"],
    wikidata: "Q14169499"
  };
  tags["superlative degree"] = {
    tag_type: "comparison",
    glossary: "superlative",
    shortcuts: ["supd", "superlative"],
    wikidata: "Q1817208"
  }; // ----------------------- Register -----------------------
  // ----------------------- Deixis -----------------------
  // ----------------------- Clusivity -----------------------
  // ----------------------- Inflectional class -----------------------

  tags["pronominal"] = {
    tag_type: "class",
    glossary: "pronominal",
    glossary_type: "wikt",
    shortcuts: ["pron"],
    // -- the following is for "pronominal attribute", existing only in the Romanian Wikipedia
    wikidata: "Q12721180"
  }; // ----------------------- Attitude -----------------------
  // -- This is a vague tag type grouping augmentative, diminutive and pejorative,
  // -- which generally indicate the speaker's attitude towards the object in
  // -- question (as well as often indicating size).

  tags["augmentative"] = {
    tag_type: "attitude",
    shortcuts: ["aug"],
    wikidata: "Q1358239"
  };
  tags["diminutive"] = {
    tag_type: "attitude",
    shortcuts: ["dim"],
    wikidata: "Q108709"
  };
  tags["pejorative"] = {
    tag_type: "attitude",
    shortcuts: ["pej"],
    wikidata: "Q545779"
  }; // ----------------------- Sound changes -----------------------

  tags["contracted"] = {
    tag_type: "sound change",
    wikidata: "Q126473"
  }; // ----------------------- Misc grammar -----------------------

  tags["simple"] = {
    tag_type: "grammar",
    shortcuts: ["sim"]
  };
  tags["short"] = {
    tag_type: "grammar"
  };
  tags["long"] = {
    tag_type: "grammar"
  };
  tags["form"] = {
    tag_type: "grammar"
  };
  tags["adjectival"] = {
    tag_type: "grammar",
    glossary: "adjectival",
    glossary_type: "wikt",
    shortcuts: ["adj"]
  };
  tags["adverbial"] = {
    tag_type: "grammar",
    glossary: "adverbial",
    shortcuts: ["adv"]
  };
  tags["negative"] = {
    tag_type: "grammar",
    shortcuts: ["neg"],
    glossary: "affirmation and negation",
    glossary_type: "wp",
    wikidata: "Q63302088"
  };
  tags["possessive"] = {
    tag_type: "non-finite",
    shortcuts: ["poss"],
    wikidata: "Q2105891"
  };
  tags["nominalized"] = {
    tag_type: "grammar",
    shortcuts: ["nomz"],
    wikidata: "Q4683152" // -- entry for "nominalized adjective"

  };
  tags["nominalization"] = {
    tag_type: "grammar",
    shortcuts: ["nomzn"],
    wikidata: "Q1500667"
  };
  tags["root"] = {
    tag_type: "grammar",
    wikidata: "Q111029"
  };
  tags["stem"] = {
    tag_type: "grammar",
    wikidata: "Q210523"
  };
  tags["dependent"] = {
    tag_type: "grammar",
    shortcuts: ["dep"],
    wikidata: "Q1122094" // -- entry for "dependent clause"

  };
  tags["independent"] = {
    tag_type: "grammar",
    shortcuts: ["indep"],
    wikidata: "Q1419215" // -- entry for "independent clause"

  }; // ----------------------- Other tags -----------------------
  // -- This consists of non-content words like "and" as well as
  // -- punctuation characters. If the punctuation characters appear
  // -- by themselves as tags, we special-case the handling of
  // -- surrounding spaces so the output looks correct.

  tags["and"] = {
    tag_type: "other"
  };
  tags[","] = {
    tag_type: "other",
    no_space_on_left: true
  };
  tags[":"] = {
    tag_type: "other",
    no_space_on_left: true
  };
  tags["/"] = {
    tag_type: "other",
    no_space_on_left: true,
    no_space_on_right: true
  };
  tags["("] = {
    tag_type: "other",
    no_space_on_right: true
  };
  tags[")"] = {
    tag_type: "other",
    no_space_on_left: true
  };
  tags["["] = {
    tag_type: "other",
    no_space_on_right: true
  };
  tags["]"] = {
    tag_type: "other",
    no_space_on_left: true
  };
  tags["-"] = {
    // -- regular hyphen-minus
    tag_type: "other",
    no_space_on_left: true,
    no_space_on_right: true
  };

  for (var tag in tags) {
    for (var shortcut in tags[tag].shortcuts) {
      var s = tags[tag].shortcuts[shortcut];

      if (!shortcuts[s]) {
        //console.log(s, tag);
        shortcuts[s] = tag;
      }
    }
  } // ----------------------- Create the shortcuts list -----------------------
  // for name, data in pairs(tags) do
  // 	if data.shortcuts then
  // 		for _, shortcut in ipairs(data.shortcuts) do
  // 			// -- If the shortcut is already in the list, then there is a duplicate.
  // 			if shortcuts[shortcut] then
  // 				error("The shortcut \"" .. shortcut .. "\" (for the grammar tag \"" .. name .. "\") conflicts with an existing shortcut for the tag \"" .. shortcuts[shortcut] .. "\".")
  // 			elseif tags[shortcut] then
  // 				error("The shortcut \"" .. shortcut .. "\" (for the grammar tag \"" .. name .. "\") conflicts with an existing tag with that name.")
  // 			end
  // 			shortcuts[shortcut] = name
  // 		end
  // 	end
  // end
  // return [tags = tags, shortcuts = shortcuts]


  var forms = {
    tags: tags,
    shortcuts: shortcuts
  };

  var _wikiTemplates;

  var MD5 = function MD5(d) {
    var result = M$1(V$1(Y(X(d), 8 * d.length)));
    return result.toLowerCase();
  };

  function M$1(d) {
    for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) {
      _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    }

    return f;
  }

  function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) {
      _[m] = 0;
    }

    for (m = 0; m < 8 * d.length; m += 8) {
      _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    }

    return _;
  }

  function V$1(d) {
    for (var _ = "", m = 0; m < 32 * d.length; m += 8) {
      _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    }

    return _;
  }

  function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;

    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
      var h = m,
          t = f,
          g = r,
          e = i;
      f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e);
    }

    return Array(m, f, r, i);
  }

  function md5_cmn(d, _, m, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
  }

  function md5_ff(d, _, m, f, r, i, n) {
    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n);
  }

  function md5_gg(d, _, m, f, r, i, n) {
    return md5_cmn(_ & f | m & ~f, d, _, r, i, n);
  }

  function md5_hh(d, _, m, f, r, i, n) {
    return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
  }

  function md5_ii(d, _, m, f, r, i, n) {
    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
  }

  function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m;
  }

  function bit_rol(d, _) {
    return d << _ | d >>> 32 - _;
  }
  var tools = {
    toSyllabicSpeech: function toSyllabicSpeech(word) {
      var alph = 'abcdefghijklmnopqrstuvwxyz';
      var speech = 'vcccvcccvcccccvcccccvcccyc';
      return word.split('').map(function (_char, i) {
        var pos = alph.indexOf(_char.toLowerCase());

        if (pos == -1) {
          return ' ';
        }

        return speech.charAt(pos);
      }).join('');
    },
    ucfirst: function ucfirst(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  };
  var alias = {
    'der2': 'der',
    'der3': 'der',
    'der4': 'der',
    'der5': 'der',
    'col2': 'der',
    'col3': 'der',
    'col4': 'der',
    'col5': 'der',
    'rel2': 'der',
    'rel3': 'der',
    'rel4': 'der',
    'rel5': 'der',
    'rel-top2': 'rel-top',
    'rel-mid2': 'rel-mid',
    'rel-top3': 'rel-top',
    'rel-mid3': 'rel-mid',
    'top3': 'top2',
    'top4': 'top2',
    'mid3': 'mid2',
    'mid4': 'mid4',
    'en-proper-noun': 'en-proper noun',
    'a': 'accent',
    'label': 'lb',
    'lbl': 'lb',
    'syn': 'synonyms',
    'ant': 'antonyms',
    'quote-text': 'quote-book',
    'en-adjective': 'en-adj',
    'en-adj-more': 'en-adj',
    'quote': 'ux',
    't+': 't',
    't-check': 't',
    't+check': 't',
    't-needed': 't',
    'ttbc': 't',
    'q': 'qualifier',
    'inh': 'inherited',
    'der': 'derived',
    'm': 'mention',
    'bor': 'borrowed',
    'suf': 'suffix',
    'cog': 'cognate',
    'etyl': 'etymology language',
    'l': 'link',
    's': 'sense'
  };
  var wikiTemplates = (_wikiTemplates = {
    "audio": {
      info: "Audio file",
      "default": {
        language: '',
        file: '',
        text: ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                language: value
              };

            case 1:
              return {
                file: value
              };

            case 2:
              return {
                text: value
              };
          }
        }
      }, {
        name: "clip",
        action: function action(value) {
          return {
            file: value
          };
        }
      }, {
        name: "context",
        action: function action(value) {
          return {
            text: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var url = 'https://upload.wikimedia.org/wikipedia/commons/';
        var file = encodeURIComponent(tools.ucfirst(obj.file.replace(/ /g, '_')));
        var hash = MD5(file).substring(0, 2);
        hash = hash.substring(0, 1) + "/" + hash + "/";
        url += hash + file;
        var type = url.slice(-3);
        type = type == 'mp3' ? 'mpeg' : type;
        console.log(file);
        return " <audio controls><source src=\"".concat(url, "\" type=\"audio/").concat(type, "\">Your browser does not support the audio element.</audio> ");
      }
    },
    "image": {
      info: "Template image",
      "default": {
        file: '',
        format: 'borderless',
        width: '200',
        height: '',
        horizontalAlignement: 'left',
        caption: ""
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          if (index == 0) {
            var url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/';
            var file = value.substring(value.indexOf(':') + 1).replace(/ /g, '_');
            var hash = MD5(file).substring(0, 2);
            hash = hash.substring(0, 1) + "/" + hash + "/";
            return {
              file: url + hash + file + "/{size}-" + file
            };
          }

          switch (value) {
            case 'thumb':
              return {
                format: 'thumb',
                width: '200',
                horizontalAlignement: 'right'
              };

            case 'frame':
              return {
                format: 'frame'
              };

            case 'left':
            case 'right':
            case 'center':
            case 'none':
              return {
                horizontalAlignement: value
              };

            default:
              var regex = /^((\d*)x)?(\d*)px/;
              var m;

              if ((m = regex.exec(value)) !== null) {
                var height = m[2] ? m[3] : '';
                var width = m[2] ? m[2] : m[3];
                return {
                  width: width,
                  height: height
                };
              } else {
                return {
                  caption: value
                };
              }

          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        var src = obj.file.replace('{size}', obj.width + "px");
        str.push("<img style=\"float:".concat(obj.horizontalAlignement, "\" src=\"").concat(src, "\"/>"));
        return str.join('');
      }
    },
    "glossary": {
      info: "This template provides a shorter way to link to the definitions of terms in Appendix:Glossary. ",
      "default": {
        term: ""
      },
      params: [{
        name: "",
        action: function action(value) {
          return {
            term: value
          };
        }
      }],
      humanize: function humanize(obj) {
        return "<a href=\"#\" data-link=\"".concat(obj.term, "\">").concat(obj.term, "</a>");
      }
    },
    "non-gloss definition": {
      info: "Use this template to apply the correct styling to a definition that is not a gloss. ",
      "default": {
        definition: ""
      },
      params: [{
        name: "",
        action: function action(value) {
          return {
            definition: value
          };
        }
      }],
      humanize: function humanize(obj) {
        return "<i>".concat(obj.definition, "</i>");
      }
    },
    "en-comparative of": {
      info: "template comparative of",
      "default": {
        term: ""
      },
      params: [{
        name: "",
        action: function action(value) {
          return {
            term: value
          };
        }
      }],
      humanize: function humanize(obj) {
        return "<i>comparative form of</i> <strong>".concat(obj.term, "</strong>: more <a href=\"#\" data-link=\"").concat(obj.term, "\">").concat(obj.term, "</a>");
      }
    },
    "head": {
      info: "This template is used to create a basic headword line.",
      "default": {
        lang: "",
        pos: "",
        head: "${head}",
        inflections: []
      },
      params: [{
        name: "",
        action: function action(value, index) {
          switch (index) {
            case 0:
              return {
                lang: value
              };

            case 1:
              return {
                pos: value
              };

            default:
              return {
                inflections: value
              };
          }
        }
      }, {
        name: "head",
        action: function action(value) {
          return {
            head: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push('<strong>' + obj.head + '</strong> ' + tools.ucfirst(obj.pos));
        var parenthesis = [];

        for (var i = 0; i < obj.inflections.length; i += 2) {
          var added = '';

          if (obj.inflections[i + 1]) {
            added = " <a href=\"#\" data-link=\"".concat(obj.inflections[i + 1], "\">").concat(obj.inflections[i + 1], "</a>");
          }

          parenthesis.push("<i>".concat(obj.inflections[i], "</i>") + added);
        }

        str.push(parenthesis.length > 0 ? ' (' + parenthesis.join(', ') + ')' : '');
        return str.join('');
      }
    },
    "vern": {
      info: "This categorizes terms in Category:Entries missing English vernacular names of taxa. ",
      "default": {
        term: '',
        plural: ''
      },
      params: [{
        name: "",
        action: function action(value, index) {
          switch (index) {
            case 0:
              return {
                term: value
              };

            case 1:
              return {
                plural: value
              };
          }
        }
      }, {
        name: "pl",
        action: function action(value, index, obj) {
          return {
            plural: obj.term + value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push("<a href=\"#\" data-link=\"".concat(obj.term, "\">").concat(obj.term, "</a>"));

        if (obj.plural !== '') {
          str.push("(<i>plural</i> <a href=\"#\" data-link=\"".concat(obj.plural, "\">").concat(obj.plural, "</a>)"));
        }

        return str.join(' ');
      }
    },
    "qualifier": {
      info: "Use this template to provide a qualifier before or after a list item, e.g. to qualify a synonym with a region or register, or a type of usage, like {{qualifier|figurative}}.",
      "default": {
        qualifier: []
      },
      params: [{
        name: "",
        action: function action(value) {
          return {
            qualifier: value
          };
        }
      }],
      humanize: function humanize(obj) {
        return '(<i>' + obj.qualifier.join(', ') + '</i>)';
      }
    },
    "sense": {
      info: "This template is used to specify a sense qualifier (a gloss) for a usage note, synonym, antonym or other -onym.",
      "default": {
        sense: ''
      },
      params: [{
        name: "",
        action: function action(value) {
          return {
            sense: value
          };
        }
      }],
      humanize: function humanize(obj) {
        return '(<i>' + obj.sense + '</i>): ';
      }
    },
    "defdate": {
      info: "This template provides information about when a sense was first used, generally given to the nearest century. ",
      "default": {
        'date': ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          return {
            date: value
          };
        }
      }],
      humanize: function humanize(obj) {
        return '<span style="font-size: smaller">&#91;' + obj.date + '&#93</span>';
      }
    },
    "rfdatek": {
      info: "This is used to attempt to ease finding dates and other missing information for quotes.",
      "default": {
        'lang': '',
        'author': ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                'lang': value
              };

            case 1:
              return {
                'author': value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        return '<a href="#" data-link="' + obj.author.replace(' ', '_') + '">' + obj.author + '</a>';
      }
    },
    "rfdate": {
      info: "Can we date this quote?",
      "default": {
        'lang': ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                'lang': value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        return '<i>No date of publication provided</i>';
      }
    },
    "antonyms": {
      info: "This template shows a line with antonyms.",
      "default": {
        'lang': "en",
        'ant': [],
        'alt': [],
        'tr': [],
        'q': []
      },
      params: [{
        name: "",
        action: function action(value, index) {
          if (index == 0) {
            return {
              lang: value
            };
          }

          return {
            ant: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str = obj.ant;
        return '<span style="font-size:smaller">Antonyms: </span>' + str.join(', ');
      }
    },
    "synonyms": {
      info: "This template shows a line with synonyms.",
      "default": {
        'lang': "en",
        'syn': [],
        'alt': [],
        'tr': [],
        'q': []
      },
      params: [{
        name: "",
        action: function action(value, index) {
          if (index == 0) {
            return {
              lang: value
            };
          }

          return {
            syn: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str = obj.syn;
        return '<span style="font-size:smaller">Synonyms: </span>' + str.join(', ');
      }
    },
    "ISBN": {
      info: "This template is used to indicate the International Standard Book Number (ISBN) of a work.",
      "default": {
        'isbn': ''
      },
      params: [{
        name: "",
        action: function action(value) {
          return {
            isbn: value
          };
        }
      }],
      humanize: function humanize(obj) {
        return '<a href="#" data-link="https://en.wiktionary.org/wiki/Special:BookSources/' + obj.ibsn + '">→ISBN</a>';
      }
    },
    "ux": {
      info: "This is used to show usage examples (not quotations) following a definition line",
      "default": {
        '1': "",
        '2': "",
        '3': "",
        'tr': "",
        'inline': "0",
        'q': [],
        'footer': '',
        'ref': '',
        'lit': '',
        'subst': '',
        'noenum': "false",
        'nocat': "false"
      },
      params: [{
        name: "",
        action: function action(value, index) {
          switch (index) {
            case 0:
              return {
                '1': value
              };

            case 1:
              return {
                '2': value
              };

            case 2:
              return {
                '3': value
              };
          }
        }
      }, {
        name: "translation",
        action: function action(value) {
          return {
            tr: value
          };
        }
      }, {
        name: "t",
        action: function action(value) {
          return {
            tr: value
          };
        }
      }, {
        name: "transliteration",
        action: function action(value) {
          return {
            tr: value
          };
        }
      }, {
        name: "q",
        action: function action(value) {
          return {
            q: value
          };
        }
      }, {
        name: "qualifier",
        action: function action(value) {
          return {
            q: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push('<i>' + obj['2'] + '</i>');
        return str.join('');
      }
    },
    "w": {
      info: "This template is for having shorter links to an English Wikipedia article when the link is identical to its label.",
      "default": {
        wikipage: "",
        display: "",
        lang: "en"
      },
      params: [{
        name: "",
        action: function action(value, index) {
          switch (index) {
            case 0:
              return {
                wikipage: value,
                display: value
              };

            case 1:
              return {
                display: value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = '<a href="#" data-link="https://en.wikipedia.org/wiki/' + obj.lang + ':' + obj.wikipage.replace(" ", "_") + '">' + obj.display + "</a>";
        return str;
      }
    },
    "quote-song": {
      info: "This template can be used in a dictionary entry to provide a quotation of lyrics from a song.",
      "default": {
        '1': "",
        year: "",
        author: "",
        title: "",
        album: "",
        url: "",
        text: "",
        translation: ""
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                '1': value
              };

            case 1:
              return {
                year: value
              };

            case 2:
              return {
                author: value
              };

            case 3:
              return {
                title: value
              };

            case 4:
              return {
                album: value
              };

            case 5:
              return {
                url: value
              };

            case 6:
              return {
                text: value
              };

            case 7:
              return {
                translation: value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        if (obj.passage !== '') obj.text = obj.passage;
        str.push(obj.year ? '<strong>' + obj.year + '</strong>' : '');
        str.push(obj.author);
        str.push(obj.title ? '“' + obj.title + '”' : '');
        str.push(obj.album ? 'in <i>' + obj.album + '</i>' : '');
        str.push(obj.artist ? 'performed by ' + obj.artist : '');
        str.push(obj.note);
        str = str.filter(function (x) {
          return x;
        });
        str[str.length - 1] += obj.text !== '' ? ': ' + '<dl><dd>' + obj.text + '</dd></dl>' : '';
        return str.filter(function (x) {
          return x;
        }).join(', ');
      }
    },
    "quote-journal": {
      info: "This template can be used in a dictionary entry to provide a quotation from a journal or other serial publication, including a magazine or a newspaper.",
      "default": {
        '1': "",
        author: "",
        authorlink: "",
        coauthors: "",
        chapter: "",
        editor: "",
        title: "",
        journal: "",
        issn: "",
        url: "",
        archiveurl: "",
        archivedate: "",
        start_date: "",
        location: "",
        publisher: "",
        date: "",
        isbn: "",
        oclc: "",
        volume: "",
        issue: "",
        page: "",
        pages: "",
        pageurl: "",
        text: "",
        passage: "",
        t: "",
        tr: "",
        year: "",
        year_published: ""
      },
      params: [{
        name: "",
        action: function action(value, index) {
          switch (index) {
            case 0:
              return {
                '1': value
              };

            case 1:
              return {
                year: value
              };

            case 2:
              return {
                author: value
              };

            case 3:
              return {
                title: value
              };

            case 4:
              return {
                journal: value
              };

            case 5:
              return {
                url: value
              };

            case 6:
              return {
                page: value
              };

            case 7:
              return {
                text: value
              };

            case 8:
              return {
                tr: value
              };

            default:
              return {};
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        if (obj.passage !== '') obj.text = obj.passage;
        str.push('<strong>' + (obj.year == '' ? obj.date : obj.year) + '</strong>');
        str.push(obj.month);
        str.push(obj.author);
        str.push('“' + obj.title + '”');
        str.push('in <i>' + (obj.journal == '' ? obj.work : obj.journal) + '</i>');
        str.push(obj.volume !== '' ? 'volume ' + obj.volume : '');
        str.push(obj.issue !== '' ? 'number ' + obj.issue : '');
        var publication = [];
        publication.push(obj.location);
        publication.push(obj.publisher);
        str.push(publication.filter(function (x) {
          return x;
        }).join(': '));
        str.push(obj.year_published !== '' ? 'published ' + obj.year_published : '');
        str.push(obj.oclc !== '' ? '<small>OCLC ' + obj.oclc + '</small>' : '');
        str.push(obj.isbn !== '' ? '<small>ISBN ' + obj.isbn + '</small>' : '');
        str.push(obj.page !== '' ? 'page ' + obj.page : '');
        str.push(obj.pages !== '' ? 'pages ' + obj.pages : '');
        str = str.filter(function (x) {
          return x;
        });
        str[str.length - 1] += obj.text !== '' ? ': ' + '<dl><dd>' + obj.text + '</dd></dl>' : '';
        return str.filter(function (x) {
          return x;
        }).join(', ');
      }
    },
    "quote-book": {
      info: "This template can be used in a dictionary entry to provide a quotation from a book. ",
      "default": {
        l: "",
        author: "",
        authorlink: "",
        chapter: "",
        editor: "",
        title: "",
        url: "",
        archiveurl: "",
        archivedate: "",
        edition: "",
        location: "",
        publisher: "",
        date: "",
        isbn: "",
        oclc: "",
        volume: "",
        section: "",
        sectionurl: "",
        page: "",
        pages: "",
        pageurl: "",
        text: "",
        passage: "",
        t: "",
        tr: "",
        year: "",
        year_published: ""
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                l: value
              };

            case 1:
              return {
                year: value
              };

            case 2:
              return {
                author: value
              };

            case 3:
              return {
                title: value
              };

            case 4:
              return {
                url: value
              };

            case 5:
              return {
                page: value
              };

            case 6:
              return {
                text: value
              };

            case 7:
              return {
                tr: value
              };

            default:
              return {};
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        if (obj.passage !== '') obj.text = obj.passage;
        str.push('<strong>' + obj.year + '</strong>');
        str.push(obj.author);
        str.push('<i>' + obj.title + '</i>');
        var publication = [];
        publication.push(obj.location);
        publication.push(obj.publisher);
        str.push(publication.filter(function (x) {
          return x;
        }).join(': '));
        str.push(obj.year_published !== '' ? 'published ' + obj.year_published : '');
        str.push(obj.oclc !== '' ? '<small>OCLC ' + obj.oclc + '</small>' : '');
        str.push(obj.isbn !== '' ? '<small>ISBN ' + obj.isbn + '</small>' : '');
        str.push(obj.page !== '' ? 'page ' + obj.page : '');
        str.push(obj.pages !== '' ? 'pages ' + obj.pages : '');
        str = str.filter(function (x) {
          return x;
        });
        str[str.length - 1] += obj.text !== '' ? ': ' + '<dl><dd>' + obj.text + '</dd></dl>' : '';
        return str.filter(function (x) {
          return x;
        }).join(', ');
      }
    },
    "lb": {
      info: "Used : 1. To label senses with restricted usage ; 2. To label senses with grammatical information, in addition to that in the part-of-speech heading and headword line",
      "default": {
        languageCode: "",
        labels: []
      },
      params: [{
        name: "",
        action: function action(value, index) {
          if (index == 0) {
            return {
              languageCode: value
            };
          } else {
            return {
              labels: value
            };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push('(<i>');

        for (var i = 0; i < obj.labels.length; i++) {
          if (i > 0) {
            switch (obj.labels[i]) {
              case 'and':
              case 'or':
                str.push(' ' + obj.labels[i]);
                break;

              case '_':
                str.push(' ');
                break;

              default:
                str.push(', ' + obj.labels[i]);
                break;
            }
          } else {
            str.push(obj.labels[i]);
          }
        }

        str.push('</i>)');
        return str.join('');
      }
    },
    "en-verb": {
      info: "inflection template for most English verbs",
      "default": {
        'canonical': "${head}",
        '3ps simple present': "${head}s",
        'past': "${head}ed",
        'present participle': "${head}ing"
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              switch (value) {
                default:
                  console.log(obj);

                  if (obj.canonical !== value) ;

              }

              break;
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push('<strong>' + obj.canonical + '</strong> Verb (<i>third-person singular simple present </i> <strong>' + obj['3ps simple present'] + '</strong>');
        str.push('<i>present participle </i><strong>' + obj['present participle'] + '</strong>');
        str.push('<i>simple past and past participle </i><strong>' + obj['past'] + '</strong>)');
        return str.join(', ');
      }
    },
    "en-adv": {
      info: "Use this template to show the headword line of an English adverb. It shows the headword in bold and its comparative and superlative inflections, if any.",
      "default": {
        adverb: "${head}",
        comparative: ["more ${head}"],
        superlative: ["most ${head}"]
      },
      params: [{
        name: "sup",
        action: function action(value, index, obj) {
          obj.superlative = [value];
        }
      }, {
        name: "",
        action: function action(value, index, obj) {
          if (index == 0) {
            obj.comparative = [];
            obj.superlative = [];
          }

          if (value == 'more') {
            return {
              comparative: "more ${head}",
              superlative: "most ${head}"
            };
          } else if (value == 'er') {
            if (tools.toSyllabicSpeech(obj.adverb) == 'cvc') {
              var letterToDouble = obj.adverb.slice(-1);
              return {
                comparative: obj.adverb + letterToDouble + 'er',
                superlative: obj.adverb + letterToDouble + 'est'
              };
            } else if (obj.adverb.slice(-1) == 'y') {
              return {
                comparative: obj.adverb.substring(0, obj.adverb.length - 1) + 'ier',
                superlative: obj.adverb.substring(0, obj.adverb.length - 1) + 'iest'
              };
            }

            return {
              comparative: "${head}er",
              superlative: "${head}est"
            };
          } else if (value.slice(-2) == 'er') {
            return {
              comparative: value,
              superlative: value.substring(0, value.length - 2) + 'est'
            };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push("<strong>" + obj.adverb + "</strong>");
        str.push("Adverb");
        var parenthesis = [];
        parenthesis.push(obj.comparative.length > 0 ? '<i>comparative</i> ' + obj.comparative.map(function (x) {
          return '<strong>' + x + '</strong>';
        }).join(' <i>or</i> ') : '');
        parenthesis.push(obj.superlative.length > 0 ? '<i>superlative</i> ' + obj.superlative.map(function (x) {
          return '<strong>' + x + '</strong>';
        }).join(' <i>or</i> ') : '');
        parenthesis = parenthesis.filter(function (x) {
          return x;
        }).join(', ');
        str.push(parenthesis ? '(' + parenthesis + ')' : '(<i>not comparable)</i>');
        return str.filter(function (x) {
          return x;
        }).join(' ');
      }
    },
    "en-adj": {
      info: "Use this template to show the headword line of an English adjective. It shows the headword in bold and its comparative and superlative inflections, if any.",
      "default": {
        adjective: "${head}",
        comparative: ["more ${head}"],
        superlative: ["most ${head}"]
      },
      params: [{
        name: "sup",
        action: function action(value, index, obj) {
          obj.superlative = [value];
        }
      }, {
        name: "",
        action: function action(value, index, obj) {
          if (index == 0) {
            obj.comparative = [];
            obj.superlative = [];
          }

          if (value == 'more') {
            return {
              comparative: "more ${head}",
              superlative: "most ${head}"
            };
          } else if (value == 'er') {
            if (tools.toSyllabicSpeech(obj.adjective) == 'cvc') {
              var letterToDouble = obj.adjective.slice(-1);
              return {
                comparative: obj.adjective + letterToDouble + 'er',
                superlative: obj.adjective + letterToDouble + 'est'
              };
            } else if (obj.adjective.slice(-1) == 'y') {
              return {
                comparative: obj.adjective.substring(0, obj.adjective.length - 1) + 'ier',
                superlative: obj.adjective.substring(0, obj.adjective.length - 1) + 'iest'
              };
            }

            return {
              comparative: "${head}er",
              superlative: "${head}est"
            };
          } else if (value.slice(-2) == 'er') {
            return {
              comparative: value,
              superlative: value.substring(0, value.length - 2) + 'est'
            };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push("<strong>" + obj.adjective + "</strong>");
        str.push("Adjective");
        var parenthesis = [];
        parenthesis.push(obj.comparative.length > 0 ? '<i>comparative</i> ' + obj.comparative.map(function (x) {
          return '<strong>' + x + '</strong>';
        }).join(' <i>or</i> ') : '');
        parenthesis.push(obj.superlative.length > 0 ? '<i>superlative</i> ' + obj.superlative.map(function (x) {
          return '<strong>' + x + '</strong>';
        }).join(' <i>or</i> ') : '');
        parenthesis = parenthesis.filter(function (x) {
          return x;
        }).join(', ');
        str.push(parenthesis ? '(' + parenthesis + ')' : '(<i>not comparable)</i>');
        return str.filter(function (x) {
          return x;
        }).join(' ');
      }
    },
    "en-pron": {
      info: "Use this template on inflection lines for English pronouns. ",
      "default": {
        'pron': '${head}',
        'desc': '',
        'info': []
      },
      params: [{
        name: "desc",
        action: function action(value) {
          return {
            desc: value
          };
        }
      }, {
        name: "",
        action: function action(value, index, obj) {
          return {
            info: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push('<strong>' + obj.pron + '</strong> Pronoun');
        str.push(obj.desc ? '<i>' + obj.desc + '</i>' : '');
        var parenthesis = [];

        for (var i = 0; i < obj.info.length - 1; i += 2) {
          parenthesis.push("<i>".concat(obj.info[i], "</i> <a href=\"#\" data-link=\"").concat(obj.info[i + 1], "\">").concat(obj.info[i + 1], "</a>"));
        }

        str.push(parenthesis.length > 0 ? '(' + parenthesis.join(', ') + ')' : '');
        return str.join(' ');
      }
    },
    "en-noun": {
      info: "inflection template for most English nouns",
      "default": {
        singular: "${head}",
        plural: ["${head}s"],
        properties: ["countable"],
        infos: []
      },
      params: [{
        name: "",
        action: function action(value, index) {
          switch (value) {
            case "s":
              return {
                plural: "${head}s"
              };

            case "es":
              return {
                plural: "${head}es"
              };

            case "-":
              return {
                plural: [],
                properties: "uncountable"
              };

            case "~":
              return {
                properties: ["countable", "uncountable"]
              };

            case "!":
              return {
                infos: "plural not attested"
              };

            case "?":
              return {
                infos: "unknown or uncertain plural"
              };

            default:
              return {
                plural: value
              };
          }
        }
      }, {
        name: "head",
        action: function action(value) {
          return {
            singular: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push("<strong>" + obj.singular + "</strong> ");
        str.push("Noun (");
        str.push("<i>");
        str.push(obj.properties.join(" and "));
        str.push("</i>");
        if (obj.properties.length > 0) str.push("; ");
        str.push("<i>plural </i>" + obj.plural.map(function (x) {
          return '<a href="#">' + x + "</a>";
        }).join(" or "));
        str.push(")");
        str = str.filter(function (x) {
          return x;
        });
        return str.join("");
      }
    },
    "en-proper noun": {
      info: "Use this template to show the inflection line of an English proper noun",
      "default": {
        singular: "${head}",
        plural: [],
        properties: [],
        infos: []
      },
      params: [{
        name: "",
        action: function action(value, index) {
          switch (value) {
            case "s":
              return {
                plural: "${head}s"
              };

            case "es":
              return {
                plural: "${head}es"
              };

            case "-":
              return {
                plural: [],
                properties: "uncountable"
              };

            case "~":
              return {
                properties: ["countable", "uncountable"]
              };

            case "!":
              return {
                infos: "plural not attested"
              };

            case "?":
              return {
                infos: "unknown or uncertain plural"
              };

            default:
              return {
                plural: value
              };
          }
        }
      }, {
        name: "head",
        action: function action(value) {
          return {
            singular: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push("<strong>" + obj.singular + "</strong> ");
        str.push("Proper Noun (");
        str.push("<i>");
        str.push(obj.properties.join(" and "));
        str.push("</i>");
        if (obj.properties.length > 0) str.push("; ");
        str.push("<i>plural </i>" + obj.plural.map(function (x) {
          return '<a href="#">' + x + "</a>";
        }).join(" or "));
        str.push(")");
        str = str.filter(function (x) {
          return x;
        });
        return str.join("");
      }
    },
    "given name": {
      info: "This template is used in definitions for given names. ",
      "default": {
        language: '',
        gender: '',
        or: '',
        from: '',
        fromt: '',
        fromalt: '',
        fromtr: '',
        frompos: '',
        fromlit: '',
        fromid: '',
        usage: '',
        meaning: '',
        dim: '',
        dimalt: '',
        dimtr: '',
        eq: '',
        eqalt: '',
        eqtr: '',
        xlit: '',
        xlitalt: '',
        "var": '',
        varalt: '',
        vartr: '',
        m: '',
        malt: '',
        mtr: '',
        f: '',
        falt: '',
        ftr: '',
        A: ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                language: value
              };

            case 1:
              return {
                gender: value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push("A ".concat(obj.gender, " given name"));
        str.push(obj.or ? 'or ' + obj.or : '');

        if (obj.from == 'surnames') {
          str.push('transferred from the surname');
        } else {
          str.push('from ' + obj.from);
        }

        return str.join(' ');
      }
    },
    "+obj": {
      info: "use with object",
      "default": {
        lang: "en"
      },
      params: [{
        name: "",
        action: function action(value, index) {
          if (index == 0) {
            return {
              lang: value
            };
          }
        }
      }],
      humanize: function humanize(obj) {
        return '[+object]';
      }
    },
    "+preo": {
      info: "use with x + object",
      "default": {
        lang: "en",
        expr: ""
      },
      params: [{
        name: "",
        action: function action(value, index) {
          if (index == 0) {
            return {
              lang: value
            };
          } else {
            return {
              expr: value
            };
          }
        }
      }],
      humanize: function humanize(obj) {
        return "[+ <i><a href=\"#\" data-link=\"".concat(obj.expr, "\">").concat(obj.expr, "</a></i> object]");
      }
    },
    "t": {
      info: "Translation information template",
      "default": {
        'lang': '',
        'translation': '',
        'categories': [],
        'script': '',
        'transliteration': '',
        'alternateForm': '',
        'literal': '',
        'id': ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                lang: value
              };

            case 1:
              return {
                translation: value
              };

            default:
              return {
                categories: value
              };
          }
        }
      }, {
        name: "sc",
        action: function action(value) {
          return {
            script: value
          };
        }
      }, {
        name: "tr",
        action: function action(value) {
          return {
            transliteration: value
          };
        }
      }, {
        name: "alt",
        action: function action(value) {
          return {
            alternateForm: value
          };
        }
      }, {
        name: "lit",
        action: function action(value) {
          return {
            literal: value
          };
        }
      }, {
        name: "id",
        action: function action(value) {
          return {
            id: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push("<a href=\"#\" data-link=\"".concat(obj.translation, "\">").concat(obj.translation, "</a>"));
        str.push(_toConsumableArray(obj.categories).join(', '));
        var parenthesis = [];
        parenthesis.push(obj.transliteration ? obj.transliteration : '');
        parenthesis.push(obj.literal ? obj.literal : '');
        parenthesis = parenthesis.filter(function (x) {
          return x;
        }).join(', ');
        str.push(parenthesis ? '(' + parenthesis + ')' : '');
        return str.filter(function (x) {
          return x;
        }).join(' ');
      }
    },
    "trans-mid": {
      info: "Separator of translation section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "trans-bottom": {
      info: "End of translation section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "checktrans-top": {
      info: "Translations to check",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '<strong>Translations to be checked</strong>';
      }
    },
    "trans-top": {
      info: "Use this template to display a “Translations” section",
      "default": {
        gloss: "",
        id: ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                gloss: value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push(obj.gloss ? '<strong>' + obj.gloss + '</strong>' : '');
        return str.join('');
      }
    },
    "der-top": {
      info: "Use this template to display a “Derived terms” section",
      "default": {
        gloss: ""
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                gloss: value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push(obj.gloss ? '<strong>' + obj.gloss + '</strong>' : '<strong>Derived terms for ${head}</strong>');
        return str.join('');
      }
    },
    "top2": {
      info: "Top of section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "mid2": {
      info: "Separator of section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "bottom": {
      info: "End of section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "der-mid": {
      info: "Separator of derived terms section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "der-bottom": {
      info: "End of derived terms section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "rel-top": {
      info: "Use this template to display a “Related terms” section",
      "default": {
        gloss: ""
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                gloss: value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push(obj.gloss ? '<strong>' + obj.gloss + '</strong>' : '');
        return str.join('');
      }
    },
    "rel-mid": {
      info: "Separator of related terms section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "rel-bottom": {
      info: "End of related terms section",
      "default": {},
      params: [],
      humanize: function humanize(obj) {
        return '';
      }
    },
    "der": {
      info: "List of derived terms",
      "default": {
        language: '',
        terms: [],
        title: '',
        sort: ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                language: value
              };

            default:
              return {
                terms: value
              };
          }
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        str.push(obj.title !== '' ? '<strong>' + obj.title + '</strong>' : '');
        obj.terms.sort(function (a, b) {
          return a > b;
        }).map(function (el) {
          str.push("<a href=\"#\" data-link=\"".concat(el, "\">").concat(el, "</a>"));
        });
        return str.join('<br/>');
      }
    },
    "inherited": {
      info: "This template is intended for terms that have an unbroken chain of inheritance from the source term in question.",
      "default": {
        'language': '',
        'languageFrom': '',
        'term': '',
        'alternativeDisplay': '',
        'gloss': ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                language: value
              };

            case 1:
              return {
                languageFrom: value
              };

            case 2:
              return {
                term: value
              };

            case 3:
              return {
                alternativeDisplay: value
              };

            case 4:
              return {
                gloss: value
              };
          }
        }
      }, {
        name: "t",
        action: function action(value) {
          return {
            gloss: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        var language = langCodes.filter(function (x) {
          return x.includes(obj.languageFrom);
        })[0] || [];

        if (language.length > 0) {
          console.log(language);
          str.push(language[2]);
        }

        str.push(obj.term ? "<a href=\"#\" data-link=\"".concat(obj.term, "\"><i>").concat(obj.term, "</i></a>") : '');
        str.push(obj.gloss ? "(\u201C".concat(obj.gloss, "\u201D)") : '');
        return str.filter(function (x) {
          return x;
        }).join(' ');
      }
    },
    "borrowed": {
      info: "This template is used to format the etymology of borrowings and loanwords",
      "default": {
        'language': '',
        'languageFrom': '',
        'term': '',
        'alternativeDisplay': '',
        'gloss': ''
      },
      params: [{
        name: "",
        action: function action(value, index, obj) {
          switch (index) {
            case 0:
              return {
                language: value
              };

            case 1:
              return {
                languageFrom: value
              };

            case 2:
              return {
                term: value
              };

            case 3:
              return {
                alternativeDisplay: value
              };

            case 4:
              return {
                gloss: value
              };
          }
        }
      }, {
        name: "t",
        action: function action(value) {
          return {
            gloss: value
          };
        }
      }],
      humanize: function humanize(obj) {
        var str = [];
        var language = langCodes.filter(function (x) {
          return x.includes(obj.languageFrom);
        })[0] || [];

        if (language.length > 0) {
          console.log(language);
          str.push(language[2]);
        }

        str.push(obj.term ? "<a href=\"#\" data-link=\"".concat(obj.term, "\"><i>").concat(obj.term, "</i></a>") : '');
        str.push(obj.gloss ? "(\u201C".concat(obj.gloss, "\u201D)") : '');
        return str.filter(function (x) {
          return x;
        }).join(' ');
      }
    }
  }, _defineProperty(_wikiTemplates, "inherited", {
    info: "This template is intended for terms that have an unbroken chain of inheritance from the source term in question.",
    "default": {
      'language': '',
      'languageFrom': '',
      'term': '',
      'alternativeDisplay': '',
      'gloss': ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          case 1:
            return {
              languageFrom: value
            };

          case 2:
            return {
              term: value
            };

          case 3:
            return {
              alternativeDisplay: value
            };

          case 4:
            return {
              gloss: value
            };
        }
      }
    }, {
      name: "t",
      action: function action(value) {
        return {
          gloss: value
        };
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      var language = langCodes.filter(function (x) {
        return x.includes(obj.languageFrom);
      })[0] || [];

      if (language.length > 0) {
        console.log(language);
        str.push(language[2]);
      }

      str.push(obj.term ? "<a href=\"#\" data-link=\"".concat(obj.term, "\"><i>").concat(obj.term, "</i></a>") : '');
      str.push(obj.gloss ? "(\u201C".concat(obj.gloss, "\u201D)") : '');
      return str.filter(function (x) {
        return x;
      }).join(' ');
    }
  }), _defineProperty(_wikiTemplates, "cognate", {
    info: "This template is used to indicate cognacy with terms in other languages that are not ancestors of the given term (hence none of {{inherited}}, {{borrowed}}, and {{derived}} are applicable).",
    "default": {
      'languageFrom': '',
      'term': '',
      'alternativeDisplay': '',
      'gloss': ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              languageFrom: value
            };

          case 1:
            return {
              term: value
            };

          case 2:
            return {
              alternativeDisplay: value
            };

          case 3:
            return {
              gloss: value
            };
        }
      }
    }, {
      name: "t",
      action: function action(value) {
        return {
          gloss: value
        };
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      var language = langCodes.filter(function (x) {
        return x.includes(obj.languageFrom);
      })[0] || [];

      if (language.length > 0) {
        str.push(language[2]);
      }

      str.push(obj.term ? "<a href=\"#\" data-link=\"".concat(obj.term, "\"><i>").concat(obj.term, "</i></a>") : '');
      str.push(obj.gloss ? "(\u201C".concat(obj.gloss, "\u201D)") : '');
      return str.filter(function (x) {
        return x;
      }).join(' ');
    }
  }), _defineProperty(_wikiTemplates, "mention", {
    info: "This template is used to format the etymology of terms derived from another language.",
    "default": {
      'language': '',
      'pageName': '',
      'alternateText': '',
      'gloss': ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          case 1:
            return {
              pageName: value,
              alternateText: value
            };

          case 2:
            return {
              alternateText: value
            };

          case 3:
            return {
              gloss: value
            };
        }
      }
    }, {
      name: "t",
      action: function action(value) {
        return {
          gloss: value
        };
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      str.push(obj.alternateText ? "<a href=\"#\" data-link=\"".concat(obj.pageName, "\"><i>").concat(obj.alternateText, "</i></a>") : '');
      str.push(obj.gloss ? "(\u201C".concat(obj.gloss, "\u201D)") : '');
      return str.filter(function (x) {
        return x;
      }).join(' ');
    }
  }), _defineProperty(_wikiTemplates, "link", {
    info: "Use this template outside running text, in sections that list entries, such as “Synonyms”, “Related terms” and “Descendants”.",
    "default": {
      'language': '',
      'pageName': '',
      'alternateText': '',
      'gloss': ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          case 1:
            return {
              pageName: value,
              alternateText: value
            };

          case 2:
            return {
              alternateText: value
            };

          case 3:
            return {
              gloss: value
            };
        }
      }
    }, {
      name: "t",
      action: function action(value) {
        return {
          gloss: value
        };
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      str.push(obj.alternateText ? "<a href=\"#\" data-link=\"".concat(obj.pageName, "\">").concat(obj.alternateText, "</a>") : '');
      str.push(obj.gloss ? "(\u201C".concat(obj.gloss, "\u201D)") : '');
      return str.filter(function (x) {
        return x;
      }).join(' ');
    }
  }), _defineProperty(_wikiTemplates, "derived", {
    info: "This template is used to format the etymology of terms derived from another language.",
    "default": {
      'language': '',
      'languageFrom': '',
      'term': '',
      'alternativeDisplay': '',
      'gloss': ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          case 1:
            return {
              languageFrom: value
            };

          case 2:
            return {
              term: value
            };

          case 3:
            return {
              alternativeDisplay: value
            };

          case 4:
            return {
              gloss: value
            };
        }
      }
    }, {
      name: "t",
      action: function action(value) {
        return {
          gloss: value
        };
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      var language = langCodes.filter(function (x) {
        return x.includes(obj.languageFrom);
      })[0] || [];

      if (language.length > 0) {
        console.log(language);
        str.push(language[2]);
      }

      str.push(obj.term ? "<a href=\"#\" data-link=\"".concat(obj.term, "\"><i>").concat(obj.term, "</i></a>") : '');
      str.push(obj.gloss ? "(\u201C".concat(obj.gloss, "\u201D)") : '');
      return str.filter(function (x) {
        return x;
      }).join(' ');
    }
  }), _defineProperty(_wikiTemplates, "etymology language", {
    info: "This template should no longer be used directly in entries; it should be replaced by {{der}}, {{bor}}, {{inh}}, {{cog}} or {{noncog}}.",
    "default": {
      'language': '',
      'languageFrom': ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              languageFrom: value
            };

          case 1:
            return {
              language: value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      var language = langCodes.filter(function (x) {
        return x.includes(obj.languageFrom);
      })[0] || [];

      if (language.length > 0) {
        str.push(language[2]);
      }

      return str.filter(function (x) {
        return x;
      }).join(' ');
    }
  }), _defineProperty(_wikiTemplates, "PIE root", {
    info: "This template adds entries to a subcategory of Category:Terms derived from Proto-Indo-European roots. It should be placed at the top of the \"Etymology\" section, before the text. ",
    "default": {
      language: '',
      roots: []
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          default:
            return {
              roots: value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      str.push('Proto-Indo-European root : ');
      str.push(obj.roots.join(", "));
      return str.join('') + ". ";
    }
  }), _defineProperty(_wikiTemplates, "prefix", {
    info: "This template is used in the etymology section",
    "default": {
      language: '',
      root: '',
      prefix: ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          case 1:
            return {
              prefix: value
            };

          case 2:
            return {
              root: value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      return "<a href=\"#\" data-link=\"".concat(obj.prefix, "\"><i>").concat(obj.prefix, "-</i></a> + <a href=\"#\" data-link=\"").concat(obj.root, "\"><i>").concat(obj.root, "</i></a>");
    }
  }), _defineProperty(_wikiTemplates, "affix", {
    info: "This template is used in the etymology section",
    "default": {
      language: '',
      parts: []
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          default:
            return {
              parts: value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      return obj.parts.map(function (x) {
        return "<a href=\"#\" data-link=\"".concat(x, "\"><i>").concat(x, "</i></a>");
      }).join(' + ');
    }
  }), _defineProperty(_wikiTemplates, "suffix", {
    info: "This template is used in the etymology section",
    "default": {
      language: '',
      root: '',
      suffix: ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          case 1:
            return {
              root: value
            };

          case 2:
            return {
              suffix: value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      return "<a href=\"#\" data-link=\"".concat(obj.root, "\"><i>").concat(obj.root, "</i></a> + <a href=\"#\" data-link=\"").concat(obj.suffix, "\"><i>").concat(obj.suffix, "</i></a>");
    }
  }), _defineProperty(_wikiTemplates, "taxlink", {
    info: "This template categorizes entries with missing taxonomic names, so that the missing names can be added (if not spelling mistakes).",
    "default": {
      taxon: '',
      level: '',
      alternativeDisplay: ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              taxon: value,
              alternativeDisplay: value
            };

          case 1:
            return {
              level: value
            };

          case 2:
            return {
              alternativeDisplay: value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      return "<a href=\"#\" data-link=\"".concat(obj.taxon, "\">").concat(obj.alternativeDisplay, "</a>");
    }
  }), _defineProperty(_wikiTemplates, "RQ", {
    info: "Quotation templates",
    "default": {
      'uniform title': '',
      'book': '',
      'chapter': '',
      'page': '',
      'pages': '',
      'text': '',
      'para': '',
      'paras': ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              'uniform title': value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      if (obj.passage) obj.text = obj.passage; // To do : manage uniform titles

      str.push(obj['uniform title'] + ' : <dt><dd>' + obj.text + '</dd></dt>');
      return str.join('');
    }
  }), _defineProperty(_wikiTemplates, "accent", {
    info: "Use this template to specify an accent qualifier for a pronunciation. ",
    "default": {
      accents: []
    },
    params: [{
      name: "",
      action: function action(value) {
        return {
          accents: value
        };
      }
    }],
    humanize: function humanize(obj) {
      console.log(obj);
      var str = [];

      for (var i = 0; i < obj.accents.length; i++) {
        if (accents.aliases[obj.accents[i]]) {
          obj.accents[i] = accents.labels[accents.aliases[obj.accents[i]]];
        } else {
          obj.accents[i] = accents.labels[obj.accents[i]] || obj.accents[i];
        }

        if (typeof obj.accents[i] == 'string') {
          str.push("<i>".concat(obj.accents[i], "</i>"));
        } else if (obj.accents[i].display) {
          str.push("<a href=\"#\" data-link=\"".concat(obj.accents[i].link, "\"><i>").concat(obj.accents[i].display, "</i></a>"));
        } else {
          str.push("<a href=\"#\" data-link=\"".concat(obj.accents[i].link, "\"><i>").concat(obj.accents[i].link, "</i></a>"));
        }
      }

      return '(' + str.join(', ') + ')';
    }
  }), _defineProperty(_wikiTemplates, 'IPA', {
    info: "This template adds the proper formatting and links to a pronunciation transcription in the International Phonetic Alphabet.",
    "default": {
      'language': '',
      'transcriptions': []
    },
    params: [{
      name: '',
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          default:
            return {
              transcriptions: value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      str.push('IPA: ');
      str.push(obj.transcriptions.join(', '));
      return str.join('');
    }
  }), _defineProperty(_wikiTemplates, 'enPR', {
    info: "This template is for phonemic transcriptions in the Appendix:English pronunciation (enPR) system, for use in the pronunciation section of entries.",
    "default": {
      'transcriptions': []
    },
    params: [{
      name: '',
      action: function action(value, index, obj) {
        return {
          transcriptions: value
        };
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      str.push('enPR: ');
      str.push(obj.transcriptions.join(', '));
      return str.join('');
    }
  }), _defineProperty(_wikiTemplates, 'inflection of', {
    info: "This template is used to create definition lines for inflected (non-lemma) forms of other terms.",
    "default": {
      language: '',
      lemma: '',
      alternative: '',
      tags: [],
      gloss: '',
      transliteration: '',
      transcription: '',
      pos: ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          case 1:
            return {
              lemma: value
            };

          case 2:
            return {
              alternative: value
            };

          default:
            return {
              tags: value
            };
        }
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      var tags = [];
      obj.tags.forEach(function (el) {
        var _short = forms.shortcuts[el];

        if (_short) {
          if (Array.isArray(_short)) {
            tags = [].concat(_toConsumableArray(tags), _toConsumableArray(_short));
          } else {
            var separated = _short.split('//');

            if (separated.length > 1) {
              tags = [].concat(_toConsumableArray(tags), _toConsumableArray(separated));
            } else {
              tags.push(_short);
            }
          }
        } else if (forms.tags[el]) {
          tags.push(el);
        }
      });
      tags.forEach(function (el) {
        var _short2 = forms.shortcuts[el];
        var tag;

        if (_short2) {
          tag = forms.tags[_short2];
          str.push("<a href=\"#\" data-link=\"".concat(tag.glossary || _short2, "\">").concat(_short2, "</a>"));
        } else {
          tag = forms.tags[el];
          str.push("<a href=\"#\" data-link=\"".concat(tag.glossary || el, "\">").concat(el, "</a>"));
        }
      });
      str.push("<i>of </i><strong>".concat(obj.lemma, "</strong>"));
      return str.join(' ');
    }
  }), _defineProperty(_wikiTemplates, 'en-letter', {
    info: "This template should be added to all English letter entries. ",
    "default": {
      'letter': '${head}',
      'upper': '',
      'lower': '',
      'mixed': ''
    },
    params: [],
    humanize: function humanize(obj) {
      if (obj.letter == obj.upper) {
        return "<strong>".concat(obj.letter, "</strong> Letter (<i>upper case</i>, <i>lower case </i><a href=\"#\" data-link=\"").concat(obj.lower, "\">").concat(obj.lower, "</a>, <i>plural </i><a href=\"#\" data-link=\"").concat(obj.upper, "'s\">").concat(obj.upper, "'s</a>)");
      } else {
        return "<strong>".concat(obj.letter, "</strong> Letter (<i>lower case</i>, <i>upper case </i><a href=\"#\" data-link=\"").concat(obj.upper, "\">").concat(obj.upper, "</a>, <i>plural </i><a href=\"#\" data-link=\"").concat(obj.lower, "'s\">").concat(obj.lower, "'s</a>)");
      }
    }
  }), _defineProperty(_wikiTemplates, 'en-number', {
    info: "This template should be added to all English number entries. ",
    "default": {
      'number': '${head}',
      'upper': '',
      'lower': '',
      'mixed': ''
    },
    params: [],
    humanize: function humanize(obj) {
      if (obj.letter == obj.upper) {
        return "<strong>".concat(obj.number, "</strong> Numeral (<i>upper case</i> <i>lower case </i><a href=\"#\" data-link=\"").concat(obj.lower, "\">").concat(obj.lower, "</a>)");
      } else {
        return "<strong>".concat(obj.number, "</strong> Numeral (<i>lower case</i> <i>upper case </i><a href=\"#\" data-link=\"").concat(obj.upper, "\">").concat(obj.upper, "</a>)");
      }
    }
  }), _defineProperty(_wikiTemplates, 'en-prep', {
    info: "Preposition template",
    "default": {
      prep: '${head}'
    },
    params: [],
    humanize: function humanize(obj) {
      return "<strong>".concat(obj.prep, "</strong> Preposition");
    }
  }), _defineProperty(_wikiTemplates, 'en-con', {
    info: "Conjunction template",
    "default": {
      conj: '${head}'
    },
    params: [],
    humanize: function humanize(obj) {
      return "<strong>".concat(obj.conj, "</strong> Conjunction");
    }
  }), _defineProperty(_wikiTemplates, 'form of', {
    info: "This template creates a definition line for the form of a primary entry",
    "default": {
      'displayed': '',
      'language': '',
      'term': '',
      'alt': '',
      'gloss': ''
    },
    params: [{
      name: "",
      action: function action(value, index, obj) {
        switch (index) {
          case 0:
            return {
              language: value
            };

          case 1:
            return {
              term: value
            };

          case 2:
            return {
              alt: value
            };

          case 3:
            return {
              gloss: value
            };
        }
      }
    }, {
      name: "t",
      action: function action(value) {
        return {
          gloss: value
        };
      }
    }],
    humanize: function humanize(obj) {
      var str = [];
      str.push('<i>' + obj.displayed + '</i>');
      str.push("<a href=\"#\" data-link=\"".concat(obj.term, "\">").concat(obj.alt !== '' ? obj.alt : obj.term, "</a>"));
      str.push(obj.gloss ? "(".concat(obj.gloss, ")") : '');
      return str.join(' ');
    }
  }), _defineProperty(_wikiTemplates, "present participle of", {
    subTemplate: {
      template: "form of",
      displayed: "present participle of"
    }
  }), _defineProperty(_wikiTemplates, "active participle of", {
    subTemplate: {
      template: "form of",
      displayed: "active participle of"
    }
  }), _defineProperty(_wikiTemplates, "feminine plural past participle of", {
    subTemplate: {
      template: "form of",
      displayed: "feminine plural past participle of"
    }
  }), _defineProperty(_wikiTemplates, "feminine singular past participle of", {
    subTemplate: {
      template: "form of",
      displayed: "feminine singular past participle of"
    }
  }), _defineProperty(_wikiTemplates, "futur participle of", {
    subTemplate: {
      template: "form of",
      displayed: "futur participle of"
    }
  }), _defineProperty(_wikiTemplates, "gerund of", {
    subTemplate: {
      template: "form of",
      displayed: "gerund of"
    }
  }), _defineProperty(_wikiTemplates, "imperative of", {
    subTemplate: {
      template: "form of",
      displayed: "imperative of"
    }
  }), _defineProperty(_wikiTemplates, "masculine plural past participle of", {
    subTemplate: {
      template: "form of",
      displayed: "masculine plural past participle of"
    }
  }), _defineProperty(_wikiTemplates, "neuter singular past participle of", {
    subTemplate: {
      template: "form of",
      displayed: "neuter singular past participle of"
    }
  }), _defineProperty(_wikiTemplates, "participle of", {
    subTemplate: {
      template: "form of",
      displayed: "participle of"
    }
  }), _defineProperty(_wikiTemplates, "passive of", {
    subTemplate: {
      template: "form of",
      displayed: "passive of"
    }
  }), _defineProperty(_wikiTemplates, "passive participle of", {
    subTemplate: {
      template: "form of",
      displayed: "passive participle of"
    }
  }), _defineProperty(_wikiTemplates, "passive past tense of", {
    subTemplate: {
      template: "form of",
      displayed: "passive past tense of"
    }
  }), _defineProperty(_wikiTemplates, "past active participle of", {
    subTemplate: {
      template: "form of",
      displayed: "past active participle of"
    }
  }), _defineProperty(_wikiTemplates, "past participle of", {
    subTemplate: {
      template: "form of",
      displayed: "past participle of"
    }
  }), _defineProperty(_wikiTemplates, "past passive participle of", {
    subTemplate: {
      template: "form of",
      displayed: "past passive participle of"
    }
  }), _defineProperty(_wikiTemplates, "past tense of", {
    subTemplate: {
      template: "form of",
      displayed: "past tense of"
    }
  }), _defineProperty(_wikiTemplates, "perfect participle of", {
    subTemplate: {
      template: "form of",
      displayed: "perfect participle of"
    }
  }), _defineProperty(_wikiTemplates, "present active participle of", {
    subTemplate: {
      template: "form of",
      displayed: "present active participle of"
    }
  }), _defineProperty(_wikiTemplates, "present tense of", {
    subTemplate: {
      template: "form of",
      displayed: "present tense of"
    }
  }), _defineProperty(_wikiTemplates, "reflexive of", {
    subTemplate: {
      template: "form of",
      displayed: "reflexive of"
    }
  }), _defineProperty(_wikiTemplates, "supine of", {
    subTemplate: {
      template: "form of",
      displayed: "supine of"
    }
  }), _defineProperty(_wikiTemplates, "verbal noun of", {
    subTemplate: {
      template: "form of",
      displayed: "verbal noun of"
    }
  }), _wikiTemplates);

  var WikiParser =
  /*#__PURE__*/
  function () {
    function WikiParser() {
      var head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      _classCallCheck(this, WikiParser);

      this.head = head;
      this.orderedList = 0;
      this.depthList = 0;
      this.context = "";
    }

    _createClass(WikiParser, [{
      key: "parse",
      value: function parse(str) {
        var ret = this.getTemplates(str);
        ret.parsed = this.wikiFormat(ret.parsed);
        return ret;
      }
    }, {
      key: "wikiFormat",
      value: function wikiFormat(str) {
        str = str.replace(/'''''(.+?)'''''/gm, "<i><strong>$1</strong></i>");
        str = str.replace(/'''(.+?)'''/gm, "<strong>$1</strong>");
        str = str.replace(/''(.+?)''/gm, "<i>$1</i>");
        str = str.replace(/(^[#\*:]+)(.*)/gm, function (matched, symbols, original) {
          var depth = symbols.length - 1;
          original = original.replace(/^: (.*)/gm); //if (depth == 0) original = '<br/>' + original;

          return "<div style='padding-left:" + (depth + 1) * 2 + "em'>" + original + "</div>";
        });
        return str;
      }
    }, {
      key: "getTemplates",
      value: function getTemplates(str) {
        var cursor = 0;
        var lastAnchor = null;
        var type = null;
        var templates = [];

        while (cursor < str.length) {
          var anchor = str.substring(cursor, cursor + 2);

          switch (anchor) {
            case "{{":
              type = "accolade";
              cursor += 2;
              lastAnchor = cursor;
              break;

            case "}}":
              if (type == "accolade" && lastAnchor !== null) {
                var inside = this.manageTemplate(str.substring(lastAnchor, cursor)); //console.log(inside);

                templates.push(inside.template);
                str = str.substring(0, lastAnchor - 2) + inside.parsed + str.substring(cursor + 2);
                lastAnchor = null;
                type = null;
                cursor = 0;
              } else {
                return {
                  templates: templates,
                  parsed: str
                };
              }

              break;

            case "[[":
              type = "bracket";
              cursor += 2;
              lastAnchor = cursor;
              break;

            case "]]":
              if (type == "bracket" && lastAnchor !== null) {
                var blend = str.substr(cursor + 2).replace(/^(\w*).*/gm, "$1");

                var _inside = this.manageLink(str.substring(lastAnchor, cursor), blend);

                templates.push(_inside);
                str = str.substring(0, lastAnchor - 2) + _inside + str.substring(cursor + 2 + blend.length);
                lastAnchor = null;
                type = null;
                cursor = 0;
              } else {
                return {
                  templates: templates,
                  parsed: str
                };
              }

              break;

            default:
              switch (anchor.substring(0, 1)) {
                case "[":
                  type = "simpleBracket";
                  cursor += 2;
                  lastAnchor = cursor;
                  break;

                case "]":
                  if (type == "simpleBracket") {
                    var _inside2 = this.manageSimpleLink(str.substring(lastAnchor - 1, cursor));

                    str = str.substring(0, lastAnchor - 2) + _inside2 + str.substring(cursor + 1);
                    lastAnchor = null;
                    type = null;
                    cursor = 0;
                  }

                  break;

                default:
                  cursor++;
              }

          }
        }

        return {
          templates: templates,
          parsed: str
        };
      }
    }, {
      key: "manageTemplate",
      value: function manageTemplate(str) {
        var template = {};
        var params = str.split("|").map(function (x) {
          return x.trim();
        });
        var templateName = params[0];
        var subTemplate = templateName.indexOf(":");

        if (subTemplate !== -1) {
          //console.log(templateName);
          params = [].concat(_toConsumableArray(templateName.split(":")), _toConsumableArray(params.slice(1)));
          templateName = params[0]; //console.log(templateName);
        }

        if (alias[params[0]] !== undefined) {
          templateName = alias[params[0]];
        }

        var wt = wikiTemplates[templateName];

        if (wt !== undefined) {
          // Subtemplate ?
          if (wt.subTemplate) {
            var displayed = wt.subTemplate.displayed;
            wt = wikiTemplates[wt.subTemplate.template];
            wt["default"].displayed = displayed;
          }

          template.templateName = templateName;

          if (wt["default"] !== undefined) {
            for (var key in wt["default"]) {
              if (!template.hasOwnProperty(key)) {
                template[key] = this.parseParameter(wt["default"][key]);
              }
            }
          }

          var index = -1;

          var _loop = function _loop(i) {
            var regex = /^(\w+)=(.*)/;
            var pair = regex.exec(params[i]);

            if (pair) {
              pair = pair.splice(1).filter(function (x) {
                return x;
              });

              if (pair[1] === undefined) {
                return "continue";
              }
            } else {
              pair = [params[i]];
            }

            var paramName = void 0,
                value = void 0;

            if (pair.length == 2) {
              paramName = pair[0];
              value = pair[1];
            } else {
              paramName = "";
              value = pair[0];
              index++;
            }

            var param = wt.params.filter(function (x) {
              return x.name == paramName;
            })[0] || undefined;

            if (param) {
              var object = param.action(value, index, template);

              for (var _key2 in object) {
                if (Array.isArray(wt["default"][_key2])) {
                  if (template.hasOwnProperty(_key2)) {
                    template[_key2] = Array.isArray(object[_key2]) ? [].concat(_toConsumableArray(template[_key2]), _toConsumableArray(object[_key2])) : [].concat(_toConsumableArray(template[_key2]), [object[_key2]]);
                  } else {
                    template[_key2] = Array.isArray(object[_key2]) ? _toConsumableArray(object[_key2]) : [object[_key2]];
                  }
                } else {
                  template[_key2] = object[_key2];
                }
              }
            } else if (paramName !== "") {
              template[paramName] = value;
            }
          };

          for (var i = 1; i < params.length; i++) {
            var _ret = _loop(i);

            if (_ret === "continue") continue;
          }

          for (var _key in template) {
            template[_key] = this.parseParameter(template[_key]);
          }

          str = wt.humanize(template);
        } //str = str.replace(/\|/g, '');          // Avoid problem of parsing with '|'
        //console.log(template);


        return {
          template: template,
          parsed: str
        };
      }
    }, {
      key: "parseParameter",
      value: function parseParameter() {
        var _this = this;

        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        if (Array.isArray(str)) {
          str = str.map(function (x) {
            return _this.parseParameter(x);
          });
        } else {
          str = str.replace("${head}", this.head);
        }

        return str;
      }
    }, {
      key: "manageSimpleLink",
      value: function manageSimpleLink(str) {
        var pair = str.split(/ (.+)/).filter(function (x) {
          return x;
        }),
            url,
            display;

        if (this.isUrl(pair[0])) {
          url = pair[0];
        } else {
          return "&#91;" + str + "&#93;";
        }

        if (pair.length == 2) {
          display = pair[1];
          return '<a href="#" data-link="' + url + '">' + display + "</a>";
        } else {
          return '<a href="#" data-link="' + url + '">&#91;*&#93;</a>';
        }
      }
    }, {
      key: "manageLink",
      value: function manageLink(str) {
        var blend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        //console.log(str);
        var params = str.split("|");

        if (/^(File:|Image:)(.*)/i.test(params[0])) {
          return "{{image|" + str + "}}";
        }

        if (params.length == 1) {
          return '<a href="#" data-link="' + params[0].replace(" ", "_") + '">' + params[0] + blend + "</a>";
        } else if (params.length == 2) {
          if (params[1] == "") {
            var transform = params[0].replace(/^(\w*:)?([^\()]*)(\(.*\))?/gm, "$2");
            return '<a href="#" data-link="' + params[0].replace(" ", "_") + '">' + transform + blend + "</a>";
          } else {
            return '<a href="#" data-link="' + params[0].replace(" ", "_") + '">' + params[1] + blend + "</a>";
          }
        }

        return str;
      }
    }, {
      key: "isUrl",
      value: function isUrl(str) {
        return /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/gim.test(str);
      }
    }]);

    return WikiParser;
  }();

  var Wiktionary =
  /*#__PURE__*/
  function () {
    function Wiktionary(word) {
      var langDestination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "French";

      _classCallCheck(this, Wiktionary);

      this.lang = langDestination;
      this.word = word;
    }

    _createClass(Wiktionary, [{
      key: "getPage",
      value: function getPage(word) {
        var _this = this;

        return new Promise(function (resolve) {
          var myHeaders = new Headers();
          word = encodeURIComponent(word);
          myHeaders.append("Content-Type", "application/json");
          fetch("https://en.wiktionary.org/w/api.php?action=query&titles=".concat(word, "&rvslots=main&prop=revisions&rvprop=content&format=json&origin=*"), {
            headers: myHeaders
          }).then(function (response) {
            return response.json();
          }).then(function (json) {
            if (json.error) ; else {
              var page = _this.getNestedObject(json, "*");

              resolve(page);
            }
          });
        });
      }
    }, {
      key: "getNestedObject",
      value: function getNestedObject(obj, prop) {
        //console.log(obj);
        for (var el in obj) {
          if (el === prop) {
            return obj[el];
          }

          if (_typeof(obj[el]) === "object") {
            var res = this.getNestedObject(obj[el], prop);
            if (res !== false) return res;
          }
        }

        return false;
      }
    }, {
      key: "getInfos",
      value: function () {
        var _getInfos = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var page, rPos, lines, count, newLines, stack, object, currentSection, currentDepth, cursor;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.getPage(this.word);

                case 2:
                  page = _context.sent;

                  if (page) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return", {
                    error: "Word doesn't exist"
                  });

                case 5:
                  rPos = /^=+([^=]*)=+$/;
                  lines = page.split("\n");
                  count = 0;
                  newLines = [];

                  while (count < lines.length) {
                    if (/^[\w\|\}]/.test(lines[count]) && !rPos.test(lines[count - 1])) {
                      newLines[newLines.length - 1] += lines[count];
                    } else {
                      newLines.push(lines[count]);
                    }

                    count++;
                  }

                  lines = newLines;
                  stack = [];
                  object = {};
                  currentSection = "";
                  currentDepth = -1;
                  lines.forEach(function (element) {
                    if (rPos.test(element)) {
                      var depth = element.replace(/(^=+).*/, "$1").length - 2;
                      currentSection = element.replace(rPos, "$1");

                      if (depth > currentDepth) {
                        stack.push(currentSection);
                      } else if (depth < currentDepth) {
                        for (var i = 0; i <= currentDepth - depth; i++) {
                          stack.pop();
                        }

                        stack.push(currentSection);
                      } else {
                        stack.pop();
                        stack.push(currentSection);
                      }

                      cursor = object;

                      for (var _i = 0; _i < stack.length; _i++) {
                        if (cursor[stack[_i]] === undefined) {
                          cursor[stack[_i]] = {
                            content: []
                          };
                        }

                        cursor = cursor[stack[_i]];
                      }

                      currentDepth = depth;
                    } else {
                      if (currentSection !== "" && element !== "") {
                        cursor.content.push(element);
                      }
                    }
                  });
                  return _context.abrupt("return", object);

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInfos() {
          return _getInfos.apply(this, arguments);
        }

        return getInfos;
      }()
    }, {
      key: "getNestedObjects",
      value: function getNestedObjects(obj, properties) {
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        for (var el in obj) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var prop = _step.value;

              if (prop instanceof RegExp) {
                if (prop.test(el)) {
                  data.push(obj[el]);
                }
              } else if (el == prop) {
                data.push(obj[el]);
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (_typeof(obj[el]) === "object") {
            this.getNestedObjects(obj[el], properties, data);
          }
        }

        return data;
      }
    }, {
      key: "getDefinition",
      value: function getDefinition(wikiObject) {
        var pos = ["Noun", "Adjective", "Verb", "Adverb", "Proper noun", "Conjunction", "Pronoun", "Preposition", "Numeral", "Letter", "Article", "Symbol", "Phrase"]; //console.log(wikiObject);

        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        var _loop = function _loop(i) {
          ret[i] = ret[i].map(function (el, index) {
            if (index == 0) {
              el = (i + 1).toString() + ". " + el;
            }

            return wp.parse(el);
          });
        };

        for (var i = 0; i < ret.length; i++) {
          _loop(i);
        } //console.log('ici : ', ret);
        //    ret = [["{{quote-book|en|year=1851|author={{w|Nathaniel Hawthorne}}|chapter=Main Street|title={{w|The Snow-Image, and Other Twice-Told Tales}}|location=Boston|publisher=Ticknor, Reed,and Fields|year_published=1852|page=96|pgeurl=https://archive.org/stream/snowimageandothe00hawtrich#page/96|passage={{...}}but the blame must rest on the sombre spirit of our forefathers, who wove their '''web''' of life with hardly a single thread of rose-color or gold, and not on me, who have a tropic-love of sunshine, and would gladly gild all the world with it, if I knew where to find so much.}}"]];


        return ret;
      }
    }, {
      key: "getTranslation",
      value: function getTranslation(wikiObject) {
        var pos = ["Translations"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getPronunciation",
      value: function getPronunciation(wikiObject) {
        var pos = ["Pronunciation"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getEtymology",
      value: function getEtymology(wikiObject) {
        var pos = [/Etymology( \d)?/];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getDerivedTerms",
      value: function getDerivedTerms(wikiObject) {
        var pos = ["Derived terms"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getRelatedTerms",
      value: function getRelatedTerms(wikiObject) {
        var pos = ["Related terms"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getSynonyms",
      value: function getSynonyms(wikiObject) {
        var pos = ["Synonyms"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getAntonyms",
      value: function getAntonyms(wikiObject) {
        var pos = ["Antonyms"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getHyponyms",
      value: function getHyponyms(wikiObject) {
        var pos = ["Hyponyms"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getHypernyms",
      value: function getHypernyms(wikiObject) {
        var pos = ["Hypernyms"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }, {
      key: "getFurtherReading",
      value: function getFurtherReading(wikiObject) {
        var pos = [/Further reading.*/, "References"];
        var ret = this.getNestedObjects(wikiObject[this.lang], pos).map(function (x) {
          return x.content;
        });
        var wp = new WikiParser(this.word);

        for (var i = 0; i < ret.length; i++) {
          ret[i] = ret[i].map(function (el, index) {
            return wp.parse(el);
          });
        }

        return ret;
      }
    }]);

    return Wiktionary;
  }();

  var particules = ['am', 'an', 'auf', 'auf der', 'aus der', 'im', 'von', 'von der', 'von und zu', 'zu', 'zum', 'zur', 'de', 'den', 'op de', 'op den', 't', 'ten', 'ter', 'te', 'van', 'vanden', 'van den', 'vander', 'van der', 'af', 'av', 'von', 'de', 'del', 'de la', 'de los', 'de las', 'y', 'a', 'da', 'das', 'de', 'do', 'dos', 'of', 'de', 'la', 'des', 'd', "'"];
  var entities = {
    findSentences: function findSentences(tokens) {},
    findNames: function findNames(tokens) {
      // Object with id and token
      var names = [];
      var cursor = 0;
      var currentEntity = [];
      var startSentence = true;

      while (cursor < tokens.length) {
        if (entities.isUcFirst(tokens[cursor].token)) {
          if (!(startSentence && isStopWord(tokens[cursor].token, 'en'))) {
            currentEntity.push({
              token: tokens[cursor].token,
              id: tokens[cursor].id,
              cursor: cursor,
              type: 'uc',
              startSentence: startSentence
            });
          }

          startSentence = false;
        } else if ((entities.isParticule(tokens[cursor].token) || entities.isBlank(tokens[cursor].token)) && currentEntity.length) {
          currentEntity.push({
            token: tokens[cursor].token,
            id: tokens[cursor].id,
            cursor: cursor,
            type: 'sep',
            startSentence: startSentence
          });
        } else {
          if (currentEntity.length) {
            var trimmedEntity = entities.trim(currentEntity);

            if (!(trimmedEntity.length == 1 && trimmedEntity[0].startSentence)) {
              names.push(trimmedEntity);
            }
          }

          currentEntity = [];
        }

        if (tokens[cursor].id == '-1' || entities.isFinalPunctuation(tokens[cursor].token)) {
          startSentence = true;
        }

        cursor++;
      }

      return names;
    },
    isUcFirst: function isUcFirst(token) {
      return /^[A-Z].*$/.test(token);
    },
    isFinalPunctuation: function isFinalPunctuation(token) {
      return /^[.!?]$/.test(token);
    },
    isBlank: function isBlank(token) {
      return /^[\s]$/.test(token);
    },
    isParticule: function isParticule(token) {
      return particules.includes(token.toLowerCase());
    },
    trim: function trim(entity) {
      var cursor = entity.length - 1;
      var newEntity;

      while (entity[cursor].type !== 'uc') {
        cursor--;
      }

      newEntity = entity.slice(0, cursor + 1);

      for (var i = 1; i < newEntity.length; i++) {
        if (+newEntity[i].id !== +newEntity[i - 1].id + 1) {
          console.log(newEntity);
          return [];
        }
      }

      return newEntity;
    }
  };

  var Labelizer =
  /*#__PURE__*/
  function () {
    function Labelizer(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Labelizer);

      this.terminal = new Terminal(this, options.consoleSelector);
      this.selector = selector;
      this.el = document.querySelector(selector);
      this.o = options;
      this.indexToken = 0;
      this.consoleInitialized = false;
      this.language = "en"; //this.loadHtml(['Email Limited']);

      this.init();
    }

    _createClass(Labelizer, [{
      key: "init",
      value: function init() {
        var _this = this;

        var as = document.querySelectorAll(this.selector + " a");
        as.forEach(function (a) {
          a.addEventListener("click", function (e) {
            return e.preventDefault();
          });
        });
        this.lastSelected = false;

        if (!this.el) {
          this.terminal.log("DOM selector must be provided!");
          return false;
        }

        this.indexToken = 0;
        this.repl(this.el);
        var css = ".token:hover{ background-color: " + (this.o.tokenColorBgHover || "#00FF00") + " ; color: " + (this.o.tokenColorFgHover || "#FF00FF") + " ; cursor:pointer ; -webkit-user-select: none ; -moz-user-select: none; -ms-user-select: none; user-select: none; } ";
        css += " .token.selected { background-color : green }";
        var style = document.createElement("style");

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName("head")[0].appendChild(style);
        var tokensEl = document.querySelectorAll(this.selector + " .token");
        tokensEl.forEach(function (el) {
          el.addEventListener("click", function (e) {
            // this.terminal.log('id : ' + el.getAttribute('data-id'));
            if (window.event.ctrlKey) {
              if (!el.classList.contains("selected")) {
                el.classList = "token selected";
                _this.lastSelected = el.getAttribute("data-id");

                _this.terminal.log("'" + e.target.innerText + "' selected");
              } else {
                el.classList = "token";
                _this.lastSelected = false;

                _this.terminal.log("'" + e.target.innerText + "' unselected");
              }
            } else if (window.event.shiftKey) {
              var idSelected = el.getAttribute("data-id");

              if (!_this.lastSelected) {
                el.classList = "token selected";

                _this.terminal.log("'" + e.target.innerText + "' selected");
              } else if (_this.lastSelected < idSelected) {
                var selectedText = [];

                for (var i = _this.lastSelected; i <= idSelected; i++) {
                  var t = document.querySelector('.token[data-id="' + i + '"]');
                  t.classList = "token selected";
                  selectedText.push(t.innerText);
                }

                _this.terminal.log("'" + selectedText.join("") + "' selected");
              } else {
                var _selectedText = [];

                for (var _i = _this.lastSelected; _i >= idSelected; _i--) {
                  var _t = document.querySelector('.token[data-id="' + _i + '"]');

                  _t.classList = "token selected";

                  _selectedText.push(_t.innerText);
                }

                _this.terminal.log("'" + _selectedText.reverse().join("") + "' selected");
              }

              _this.lastSelected = idSelected;
            } else {
              if (!el.classList.contains("selected")) {
                tokensEl.forEach(function (x) {
                  x.classList = "token";
                });
                el.classList = "token selected";
                _this.lastSelected = el.getAttribute("data-id");

                _this.terminal.log("'" + e.target.innerText + "' selected");
              } else {
                tokensEl.forEach(function (x) {
                  x.classList = "token";
                });
                _this.lastSelected = false;

                _this.terminal.log("'" + e.target.innerText + "' unselected");
              }
            }
          });
        });
        this.terminal.info("Labelizer initialized.");
      }
    }, {
      key: "repl",
      value: function repl(node) {
        var _this2 = this;

        //console.log(node.nodeName);
        var nodeBlockTypes = ['address', 'article', 'aside', 'blockquote', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcatpion', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'li', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'tfoot', 'ul', 'video'];
        var isBlockElement = nodeBlockTypes.includes(node.nodeName.toLowerCase());
        if (node.className === undefined || node.nodeName == "CODE" || node.nodeName == "PRE") return;
        var classNames = node.className.split(" ");
        if (classNames.includes("mw-editsection") || classNames.includes("plainlinks") || classNames.includes("references-small")) return;
        var nodes = node.childNodes;

        for (var i = 0, m = nodes.length; i < m; i++) {
          var n = nodes[i];

          if (n.nodeType == n.TEXT_NODE) {
            var toks = n.textContent.replace(/\s\s+/g, ' ').split(/([\x2D\.0-9A-z\xC0-\xFC]*)/g).filter(function (x) {
              return x;
            });
            console.log(n.textContent, toks);
            var _i2 = 0;

            while (toks[_i2]) {
              if (/^[^\.]*\.$/gm.test(toks[_i2])) {
                toks[_i2] = toks[_i2].substring(0, toks[_i2].length - 1);
                toks.splice(_i2 + 1, 0, ".");
                _i2++;
              }

              _i2++;
            } //console.log(toks);


            var newHTML = "";
            toks.forEach(function (el) {
              _this2.indexToken++;
              newHTML += '<span class="token" data-id="' + _this2.indexToken + '">' + el + "</span>";
            }); // do some swappy text to html here?

            var replacementNode = document.createElement("span");
            replacementNode.innerHTML = newHTML;
            n.parentNode.insertBefore(replacementNode, n);
            n.parentNode.removeChild(n);
          } else {
            this.repl(n);
          }
        } //if (isBlockElement) {


        var replacementNode = document.createElement("span");
        replacementNode.innerHTML = '<span class="token" data-id="-1"></span>';
        node.appendChild(replacementNode, node); //}
      } // Commands Console

    }, {
      key: "getEntities",
      value: function getEntities(args, opts) {
        var selector = " .token";
        var entityType = args[0];

        var tokensEl = _toConsumableArray(document.querySelectorAll(this.selector + selector)).map(function (x) {
          return {
            id: x.getAttribute('data-id'),
            token: x.innerText
          };
        }).filter(function (x) {
          return x.token || x.id == '-1';
        });

        var results;

        switch (entityType) {
          case 'name':
            results = entities.findNames(tokensEl);
            this.highlightEntities(results, 'cyan');
            break;
        }
      }
    }, {
      key: "highlightEntities",
      value: function highlightEntities(res) {
        var _this3 = this;

        var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'red';
        //let tokensEl = document.querySelectorAll(this.selector+" .token");
        res.forEach(function (el) {
          el.map(function (x) {
            var token = document.querySelector(_this3.selector + " .token[data-id='" + x.id + "']");
            token.style.backgroundColor = color;
          });
        });
      }
    }, {
      key: "getTranslation",
      value: function getTranslation(args, opts) {
        var _this4 = this;

        var w = new Wiktionary(args[0], "English");
        var index = 0;
        var lang = "";

        if (opts.isOption("language")) {
          lang = opts.isOption("language").arguments;
        }

        w.getInfos().then(function (data) {
          if (data.error) {
            _this4.terminal.error(data.error);

            return false;
          }

          var trans = w.getTranslation(data);
          trans.forEach(function (x) {
            x.forEach(function (y) {
              if (y.templates.filter(function (x) {
                return x.templateName == "trans-top";
              }).length > 0) {
                index++;

                _this4.terminal.log(index.toString() + ". " + y.parsed);
              } else {
                if (lang !== "") {
                  var display = false;
                  if (y.templates.filter(function (x) {
                    if (x.lang && lang.includes(x.lang)) {
                      display = true;
                    }
                  })) ;

                  if (display) {
                    _this4.terminal.log(y.parsed);
                  }
                } else {
                  _this4.terminal.log(y.parsed);
                }
              }
            });
          });
        });
      }
    }, {
      key: "getSynonyms",
      value: function getSynonyms(args, opts) {
        var _this5 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this5.terminal.error(data.error);

            return false;
          }

          var def = w.getSynonyms(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this5.terminal.log(y.parsed);
            });

            _this5.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getAntonyms",
      value: function getAntonyms(args, opts) {
        var _this6 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this6.terminal.error(data.error);

            return false;
          }

          var def = w.getAntonyms(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this6.terminal.log(y.parsed);
            });

            _this6.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getHyponyms",
      value: function getHyponyms(args, opts) {
        var _this7 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this7.terminal.error(data.error);

            return false;
          }

          var def = w.getHyponyms(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this7.terminal.log(y.parsed);
            });

            _this7.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getHypernyms",
      value: function getHypernyms(args, opts) {
        var _this8 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this8.terminal.error(data.error);

            return false;
          }

          var def = w.getHypernyms(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this8.terminal.log(y.parsed);
            });

            _this8.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getFurtherReading",
      value: function getFurtherReading(args, opts) {
        var _this9 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this9.terminal.error(data.error);

            return false;
          }

          var def = w.getFurtherReading(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this9.terminal.log(y.parsed);
            });

            _this9.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getDerivedTerms",
      value: function getDerivedTerms(args, opts) {
        var _this10 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this10.terminal.error(data.error);

            return false;
          }

          var def = w.getDerivedTerms(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this10.terminal.log(y.parsed);
            });

            _this10.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getRelatedTerms",
      value: function getRelatedTerms(args, opts) {
        var _this11 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this11.terminal.error(data.error);

            return false;
          }

          var def = w.getRelatedTerms(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this11.terminal.log(y.parsed);
            });

            _this11.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getEtymology",
      value: function getEtymology(args, opts) {
        var _this12 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this12.terminal.error(data.error);

            return false;
          }

          var def = w.getEtymology(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this12.terminal.log(y.parsed);
            });

            _this12.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getPronunciation",
      value: function getPronunciation(args, opts) {
        var _this13 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this13.terminal.error(data.error);

            return false;
          }

          var def = w.getPronunciation(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this13.terminal.log(y.parsed);
            });

            _this13.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "getDefinition",
      value: function getDefinition(args, opts) {
        var _this14 = this;

        var w = new Wiktionary(args[0], "English");
        w.getInfos().then(function (data) {
          if (data.error) {
            _this14.terminal.error(data.error);

            return false;
          }

          var def = w.getDefinition(data);
          def.forEach(function (x) {
            x.forEach(function (y) {
              _this14.terminal.log(y.parsed);
            });

            _this14.terminal.log("<br/>");
          });
        });
      }
    }, {
      key: "ngrams",
      value: function ngrams(args, opts) {
        var selector = " .token";
        var r = new RegExp("^[A-zÀ-ü0-9-]+$");

        if (opts.isOption("selection")) {
          selector += ".selected";
        }

        var n = parseInt(args[0]);
        var ngrams = {};
        var tokensEl = document.querySelectorAll(this.selector + selector);
        var mask = Array(tokensEl.length).fill(true);
        var insensitive = false;
        var recursive = n;
        var minimumLength = 3;
        var stem = false;

        if (opts.isOption("recursive")) {
          recursive = 1;

          if (opts.isOption("minNgram")) {
            recursive = opts.isOption("minNgram").argument;
          }
        }

        if (opts.isOption("insensitive")) {
          insensitive = true;
        }

        if (opts.isOption("stemming")) {
          stem = true;
        }

        while (n >= recursive) {
          var i = 0,
              lastIndex = 0;

          while (tokensEl[i]) {
            //console.log(tokensEl[i].innerText);
            if (r.test(tokensEl[i].innerText)) {
              lastIndex = i;
              var ng = "";
              var ngStemmed = "";
              var cursor = 1;

              while (cursor <= n && tokensEl[i]) {
                if (!mask[i]) break;
                var text = tokensEl[i].innerText;

                if (/^[\,\.\(\)\;\:\[\]\|·\(\)]$/.test(text)) {
                  break;
                }

                if (isStopWord(text, this.language)) {
                  if (cursor == 1 || cursor == n) break;
                }

                if (r.test(text)) {
                  if (cursor > 1 && ng.substring(ng.length - 1) !== " ") {
                    break;
                  }

                  cursor++;
                }

                ngStemmed += carry(text);
                ng += text;
                i++;
              }

              i = lastIndex;

              if (cursor == n + 1) {
                if (insensitive) {
                  ng = ng.toLowerCase();
                  ngStemmed = ngStemmed.toLowerCase();
                }

                if (stem) {
                  if (!ngrams[ngStemmed]) {
                    ngrams[ngStemmed] = {
                      weight: 1,
                      forms: new Set([ng])
                    };
                  } else {
                    ngrams[ngStemmed].weight += n;
                    ngrams[ngStemmed].forms.add(ng);

                    for (var x = i; x <= i + n; x++) {
                      mask[x] = false;
                    }
                  }
                } else {
                  if (!ngrams[ng]) {
                    ngrams[ng] = {
                      weight: 1
                    };
                  } else {
                    ngrams[ng].weight += n;

                    for (var _x = i; _x <= i + n; _x++) {
                      mask[_x] = false;
                    }
                  }
                }
              }
            }

            i++;
          }

          n--;
        }

        ngrams = Object.keys(ngrams).map(function (key) {
          return [key, ngrams[key].weight, ngrams[key].forms];
        });

        if (opts.isOption("rsort")) {
          ngrams.sort(function (a, b) {
            return a[1] > b[1];
          });
        } else {
          ngrams.sort(function (a, b) {
            return a[1] < b[1];
          });
        }

        this.terminal.log(ngrams.filter(function (x) {
          return x[1] > 1 && x[0].length >= minimumLength;
        }).map(function (x) {
          if (x[2]) {
            return Array.from(x[2]).join("/") + " (" + x[1] + ")";
          } else {
            return x[0] + " (" + x[1] + ")";
          }
        }).join("<br/>")); //console.log(ngrams);
      }
    }, {
      key: "stem",
      value: function stem(args, opts) {
        var selector = " .token";
        var r = new RegExp("^[A-zÀ-ü0-9-]+$");

        if (opts.isOption("selection") || opts.isOption("s")) {
          selector += ".selected";
        }

        var tokensEl = document.querySelectorAll(this.selector + selector);
        var words = [];
        tokensEl.forEach(function (e) {
          var token =  e.innerText ;

          if (r.test(token)) {
            words.push(carry(token));
          }
        }); //console.log(words);
      }
    }, {
      key: "freq",
      value: function freq(args, opts) {
        var _this15 = this;

        var selector = " .token";
        var sensitive = true;
        var stem = false;
        var r = new RegExp("^[A-zÀ-ü0-9-]+$");

        if (opts.isOption("stem")) {
          //console.log(opts);
          stem = true;
        }

        if (opts.isOption("selection")) {
          selector += ".selected";
        }

        if (opts.isOption("insensitive")) {
          sensitive = false;
        }

        var tokensEl = document.querySelectorAll(this.selector + selector);
        var wordsCount = 0;
        var words = {};
        tokensEl.forEach(function (e) {
          var token = sensitive ? e.innerText : e.innerText.toLowerCase(); //console.log(stem);

          token = stem ? carry(token) : token;

          if (r.test(token)) {
            //console.log(token);
            wordsCount++;

            if (!words[token]) {
              words[token] = 1;
            } else {
              words[token]++;
            }
          }
        });
        words = Object.keys(words).map(function (key) {
          return [key, words[key]];
        });

        if (opts.isOption("r") || opts.isOption("rsort")) {
          words.sort(function (a, b) {
            return a[1] > b[1];
          });
        } else {
          words.sort(function (a, b) {
            return a[1] < b[1];
          });
        }

        if (opts.isOption("p")) {
          this.terminal.log(words.map(function (x) {
            return x[0] + " (" + _this15.digits2(x[1] / wordsCount * 100) + "%)";
          }).join(" - "));
        } else {
          this.terminal.log(words.map(function (x) {
            return x[0] + " (" + x[1] + ")";
          }).join(" - "));
        }
      }
    }, {
      key: "digits2",
      value: function digits2(num) {
        return Math.round((num + 0.00001) * 100) / 100;
      }
    }, {
      key: "count",
      value: function count(args, opts) {
        var selector = " .token";
        var r = new RegExp("^[A-zÀ-ü0-9-]+$");

        if (opts.isOption("selection") || opts.isOption("s")) {
          selector += ".selected";
        }

        if (args.isArgument("numbers")) {
          r = new RegExp("^[0-9]+([,.][0-9]+)?$");
        }

        var tokensEl = document.querySelectorAll(this.selector + selector);
        var wordCounts = 0;
        var words = [];
        tokensEl.forEach(function (e) {
          var token = e.innerText;

          if (r.test(token)) {
            //console.log(token);
            words.push(token);
          }
        });

        if (opts.isOption("distinct")) {
          words = _toConsumableArray(new Set(words));
        }

        if (opts.isOption("asort") || opts.isOption("a")) {
          if (args.isArgument("numbers")) {
            words.sort(function (a, b) {
              return parseFloat(a) > parseFloat(b);
            });
          } else {
            words.sort(function (a, b) {
              return a > b;
            });
          }
        } else if (opts.isOption("rsort")) {
          if (args.isArgument("numbers")) {
            words.sort(function (a, b) {
              return parseFloat(a) < parseFloat(b);
            });
          } else {
            words.sort(function (a, b) {
              return a < b;
            });
          }
        }

        if (opts.isOption("list")) {
          this.terminal.log(words.join(" - "));
        }

        wordCounts = words.length;
        this.terminal.log("Words count : " + wordCounts);
        return;
      }
    }, {
      key: "changeLanguage",
      value: function changeLanguage(args) {
        var label = args[0].toLowerCase();

        if (!label) {
          this.terminal.error("Argument 'language' is missing");
          return false;
        }

        if (!["en", "fr", "de", "es", "ja", "ru", "it", "zh", "pt", "ar", "fa", "pl", "nl", "id", "uk", "he", "sv", "cs", "ko", "vi", "ca"].includes(label)) {
          this.terminal.error("Language not supported");
          return false;
        }

        this.terminal.log("Environnement language set to '" + label + "'");
        this.language = label;
      }
    }, {
      key: "autocompleteWiki",
      value: function autocompleteWiki(str) {
        var _this16 = this;

        return new Promise(function (resolve) {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          fetch("https://" + _this16.language + ".wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=" + str + "&namespace=0&limit=10&origin=*", {
            headers: myHeaders
          }).then(function (response) {
            return response.json();
          }).then(function (text) {
            if (text.error) {
              _this16.terminal.error(text.error.info);
            } else {
              resolve(text[1]);
            }
          });
        });
      }
    }, {
      key: "autocompleteWiktionary",
      value: function autocompleteWiktionary(str) {
        var _this17 = this;

        return new Promise(function (resolve) {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          fetch("https://" + _this17.language + ".wiktionary.org/w/api.php?action=opensearch&format=json&formatversion=2&search=" + str + "&namespace=0&limit=10&origin=*", {
            headers: myHeaders
          }).then(function (response) {
            return response.json();
          }).then(function (text) {
            if (text.error) {
              _this17.terminal.error(text.error.info);
            } else {
              resolve(text[1]);
            }
          });
        });
      }
    }, {
      key: "loadHtml",
      value: function loadHtml(args) {
        var _this18 = this;
        //(e || window.event).preventDefault();
        var label = args[0];

        if (!label) {
          this.terminal.log("Argument 'url' is missing");
          return false;
        }

        this.terminal.log("Loading Wikipedia page '" + label + "'...");
        var myHeaders = new Headers();
        var el = this.el;
        myHeaders.append("Content-Type", "application/json");
        fetch("http://" + this.language + ".wikipedia.org/w/api.php?action=parse&page=" + label + "&format=json&redirects&origin=*", {
          headers: myHeaders
        }).then(function (response) {
          return response.json();
        }).then(function (text) {
          if (text.error) {
            _this18.terminal.error(text.error.info);
          } else {
            _this18.terminal.log("Page loaded!");

            var html = text.parse.text["*"];
            el.innerHTML = html;

            _this18.init();
          }
        })["catch"](function (error) {
          _this18.terminal.error("! " + error);
        });
      }
    }]);

    return Labelizer;
  }();
  window.Labelizer = Labelizer;

  return Labelizer;

})));
