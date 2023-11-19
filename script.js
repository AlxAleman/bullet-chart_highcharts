document.addEventListener("DOMContentLoaded", function (event) {
  /**
   * Highcharts JS v11.2.0 (2023-10-30)
   *
   * (c) 2009-2021 Torstein Honsi
   *
   * License: www.highcharts.com/license
   */ !(function (t, e) {
    "object" == typeof module && module.exports
      ? ((e.default = e), (module.exports = t.document ? e(t) : e))
      : "function" == typeof define && define.amd
      ? define("highcharts/highcharts", function () {
          return e(t);
        })
      : (t.Highcharts && t.Highcharts.error(16, !0), (t.Highcharts = e(t)));
  })("undefined" != typeof window ? window : this, function (t) {
    "use strict";
    var e = {};
    function i(e, i, s, o) {
      e.hasOwnProperty(i) ||
        ((e[i] = o.apply(null, s)),
        "function" == typeof CustomEvent &&
          t.dispatchEvent(
            new CustomEvent("HighchartsModuleLoaded", {
              detail: { path: i, module: e[i] },
            })
          ));
    }
    return (
      i(e, "Core/Globals.js", [], function () {
        var e, i;
        return (
          ((i = e || (e = {})).SVG_NS = "http://www.w3.org/2000/svg"),
          (i.product = "Highcharts"),
          (i.version = "11.2.0"),
          (i.win = void 0 !== t ? t : {}),
          (i.doc = i.win.document),
          (i.svg =
            i.doc &&
            i.doc.createElementNS &&
            !!i.doc.createElementNS(i.SVG_NS, "svg").createSVGRect),
          (i.userAgent = (i.win.navigator && i.win.navigator.userAgent) || ""),
          (i.isChrome = -1 !== i.userAgent.indexOf("Chrome")),
          (i.isFirefox = -1 !== i.userAgent.indexOf("Firefox")),
          (i.isMS = /(edge|msie|trident)/i.test(i.userAgent) && !i.win.opera),
          (i.isSafari = !i.isChrome && -1 !== i.userAgent.indexOf("Safari")),
          (i.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(
            i.userAgent
          )),
          (i.isWebKit = -1 !== i.userAgent.indexOf("AppleWebKit")),
          (i.deg2rad = (2 * Math.PI) / 360),
          (i.hasBidiBug =
            i.isFirefox && 4 > parseInt(i.userAgent.split("Firefox/")[1], 10)),
          (i.hasTouch = !!i.win.TouchEvent),
          (i.marginNames = [
            "plotTop",
            "marginRight",
            "marginBottom",
            "plotLeft",
          ]),
          (i.noop = function () {}),
          (i.supportsPassiveEvents = (function () {
            let t = !1;
            if (!i.isMS) {
              let e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                },
              });
              i.win.addEventListener &&
                i.win.removeEventListener &&
                (i.win.addEventListener("testPassive", i.noop, e),
                i.win.removeEventListener("testPassive", i.noop, e));
            }
            return t;
          })()),
          (i.charts = []),
          (i.dateFormats = {}),
          (i.seriesTypes = {}),
          (i.symbolSizes = {}),
          (i.chartCount = 0),
          e
        );
      }),
      i(e, "Core/Utilities.js", [e["Core/Globals.js"]], function (t) {
        let e;
        let { charts: i, doc: s, win: o } = t;
        function r(e, i, s, n) {
          let a = i ? "Highcharts error" : "Highcharts warning";
          32 === e && (e = `${a}: Deprecated member`);
          let h = p(e),
            l = h
              ? `${a} #${e}: www.highcharts.com/errors/${e}/`
              : e.toString();
          if (void 0 !== n) {
            let t = "";
            h && (l += "?"),
              S(n, function (e, i) {
                (t += `
 - ${i}: ${e}`),
                  h && (l += encodeURI(i) + "=" + encodeURI(e));
              }),
              (l += t);
          }
          C(
            t,
            "displayError",
            { chart: s, code: e, message: l, params: n },
            function () {
              if (i) throw Error(l);
              o.console && -1 === r.messages.indexOf(l) && console.warn(l);
            }
          ),
            r.messages.push(l);
        }
        function n(t, e) {
          return parseInt(t, e || 10);
        }
        function a(t) {
          return "string" == typeof t;
        }
        function h(t) {
          let e = Object.prototype.toString.call(t);
          return "[object Array]" === e || "[object Array Iterator]" === e;
        }
        function l(t, e) {
          return !!t && "object" == typeof t && (!e || !h(t));
        }
        function d(t) {
          return l(t) && "number" == typeof t.nodeType;
        }
        function c(t) {
          let e = t && t.constructor;
          return !!(l(t, !0) && !d(t) && e && e.name && "Object" !== e.name);
        }
        function p(t) {
          return "number" == typeof t && !isNaN(t) && t < 1 / 0 && t > -1 / 0;
        }
        function u(t) {
          return null != t;
        }
        function g(t, e, i) {
          let s;
          let o = a(e) && !u(i),
            r = (e, i) => {
              u(e)
                ? t.setAttribute(i, e)
                : o
                ? (s = t.getAttribute(i)) ||
                  "class" !== i ||
                  (s = t.getAttribute(i + "Name"))
                : t.removeAttribute(i);
            };
          return a(e) ? r(i, e) : S(e, r), s;
        }
        function f(t) {
          return h(t) ? t : [t];
        }
        function m(t, e) {
          let i;
          for (i in (t || (t = {}), e)) t[i] = e[i];
          return t;
        }
        function x() {
          let t = arguments,
            e = t.length;
          for (let i = 0; i < e; i++) {
            let e = t[i];
            if (null != e) return e;
          }
        }
        function y(e, i) {
          t.isMS &&
            !t.svg &&
            i &&
            u(i.opacity) &&
            (i.filter = `alpha(opacity=${100 * i.opacity})`),
            m(e.style, i);
        }
        function b(t) {
          return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
        }
        function v(t, e) {
          return t > 1e14 ? t : parseFloat(t.toPrecision(e || 14));
        }
        ((r || (r = {})).messages = []),
          (Math.easeInOutSine = function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          });
        let k = Array.prototype.find
          ? function (t, e) {
              return t.find(e);
            }
          : function (t, e) {
              let i;
              let s = t.length;
              for (i = 0; i < s; i++) if (e(t[i], i)) return t[i];
            };
        function S(t, e, i) {
          for (let s in t)
            Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t);
        }
        function M(t, e, i) {
          function s(e, i) {
            let s = t.removeEventListener;
            s && s.call(t, e, i, !1);
          }
          function o(i) {
            let o, r;
            t.nodeName &&
              (e ? ((o = {})[e] = !0) : (o = i),
              S(o, function (t, e) {
                if (i[e]) for (r = i[e].length; r--; ) s(e, i[e][r].fn);
              }));
          }
          let r = ("function" == typeof t && t.prototype) || t;
          if (Object.hasOwnProperty.call(r, "hcEvents")) {
            let t = r.hcEvents;
            if (e) {
              let r = t[e] || [];
              i
                ? ((t[e] = r.filter(function (t) {
                    return i !== t.fn;
                  })),
                  s(e, i))
                : (o(t), (t[e] = []));
            } else o(t), delete r.hcEvents;
          }
        }
        function C(e, i, o, r) {
          let n;
          if (
            ((o = o || {}),
            s.createEvent && (e.dispatchEvent || (e.fireEvent && e !== t)))
          )
            (n = s.createEvent("Events")).initEvent(i, !0, !0),
              (o = m(n, o)),
              e.dispatchEvent ? e.dispatchEvent(o) : e.fireEvent(i, o);
          else if (e.hcEvents) {
            o.target ||
              m(o, {
                preventDefault: function () {
                  o.defaultPrevented = !0;
                },
                target: e,
                type: i,
              });
            let t = [],
              s = e,
              r = !1;
            for (; s.hcEvents; )
              Object.hasOwnProperty.call(s, "hcEvents") &&
                s.hcEvents[i] &&
                (t.length && (r = !0), t.unshift.apply(t, s.hcEvents[i])),
                (s = Object.getPrototypeOf(s));
            r && t.sort((t, e) => t.order - e.order),
              t.forEach((t) => {
                !1 === t.fn.call(e, o) && o.preventDefault();
              });
          }
          r && !o.defaultPrevented && r.call(e, o);
        }
        S(
          {
            map: "map",
            each: "forEach",
            grep: "filter",
            reduce: "reduce",
            some: "some",
          },
          function (e, i) {
            t[i] = function (t) {
              return (
                r(32, !1, void 0, { [`Highcharts.${i}`]: `use Array.${e}` }),
                Array.prototype[e].apply(t, [].slice.call(arguments, 1))
              );
            };
          }
        );
        let w = (function () {
          let t = Math.random().toString(36).substring(2, 9) + "-",
            i = 0;
          return function () {
            return "highcharts-" + (e ? "" : t) + i++;
          };
        })();
        o.jQuery &&
          (o.jQuery.fn.highcharts = function () {
            let e = [].slice.call(arguments);
            if (this[0])
              return e[0]
                ? (new t[a(e[0]) ? e.shift() : "Chart"](this[0], e[0], e[1]),
                  this)
                : i[g(this[0], "data-highcharts-chart")];
          });
        let T = {
          addEvent: function (e, i, s, o = {}) {
            let r = ("function" == typeof e && e.prototype) || e;
            Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {});
            let n = r.hcEvents;
            t.Point &&
              e instanceof t.Point &&
              e.series &&
              e.series.chart &&
              (e.series.chart.runTrackerClick = !0);
            let a = e.addEventListener;
            a &&
              a.call(
                e,
                i,
                s,
                !!t.supportsPassiveEvents && {
                  passive:
                    void 0 === o.passive
                      ? -1 !== i.indexOf("touch")
                      : o.passive,
                  capture: !1,
                }
              ),
              n[i] || (n[i] = []);
            let h = {
              fn: s,
              order: "number" == typeof o.order ? o.order : 1 / 0,
            };
            return (
              n[i].push(h),
              n[i].sort((t, e) => t.order - e.order),
              function () {
                M(e, i, s);
              }
            );
          },
          arrayMax: function (t) {
            let e = t.length,
              i = t[0];
            for (; e--; ) t[e] > i && (i = t[e]);
            return i;
          },
          arrayMin: function (t) {
            let e = t.length,
              i = t[0];
            for (; e--; ) t[e] < i && (i = t[e]);
            return i;
          },
          attr: g,
          clamp: function (t, e, i) {
            return t > e ? (t < i ? t : i) : e;
          },
          clearTimeout: function (t) {
            u(t) && clearTimeout(t);
          },
          correctFloat: v,
          createElement: function (t, e, i, o, r) {
            let n = s.createElement(t);
            return (
              e && m(n, e),
              r && y(n, { padding: "0", border: "none", margin: "0" }),
              i && y(n, i),
              o && o.appendChild(n),
              n
            );
          },
          css: y,
          defined: u,
          destroyObjectProperties: function (t, e) {
            S(t, function (i, s) {
              i && i !== e && i.destroy && i.destroy(), delete t[s];
            });
          },
          diffObjects: function (t, e, i, s) {
            let o = {};
            return (
              (function t(e, o, r, n) {
                let a = i ? o : e;
                S(e, function (i, d) {
                  if (!n && s && s.indexOf(d) > -1 && o[d]) {
                    (i = f(i)), (r[d] = []);
                    for (let e = 0; e < Math.max(i.length, o[d].length); e++)
                      o[d][e] &&
                        (void 0 === i[e]
                          ? (r[d][e] = o[d][e])
                          : ((r[d][e] = {}), t(i[e], o[d][e], r[d][e], n + 1)));
                  } else l(i, !0) && !i.nodeType ? ((r[d] = h(i) ? [] : {}), t(i, o[d] || {}, r[d], n + 1), 0 !== Object.keys(r[d]).length || ("colorAxis" === d && 0 === n) || delete r[d]) : (e[d] !== o[d] || (d in e && !(d in o))) && (r[d] = a[d]);
                });
              })(t, e, o, 0),
              o
            );
          },
          discardElement: function (t) {
            t && t.parentElement && t.parentElement.removeChild(t);
          },
          erase: function (t, e) {
            let i = t.length;
            for (; i--; )
              if (t[i] === e) {
                t.splice(i, 1);
                break;
              }
          },
          error: r,
          extend: m,
          extendClass: function (t, e) {
            let i = function () {};
            return (i.prototype = new t()), m(i.prototype, e), i;
          },
          find: k,
          fireEvent: C,
          getClosestDistance: function (t, e) {
            let i, s, o;
            let r = !e;
            return (
              t.forEach((t) => {
                if (t.length > 1)
                  for (o = t.length - 1; o > 0; o--)
                    (s = t[o] - t[o - 1]) < 0 && !r
                      ? (e?.(), (e = void 0))
                      : s && (void 0 === i || s < i) && (i = s);
              }),
              i
            );
          },
          getMagnitude: b,
          getNestedProperty: function (t, e) {
            let i = t.split(".");
            for (; i.length && u(e); ) {
              let t = i.shift();
              if (void 0 === t || "__proto__" === t) return;
              if ("this" === t) {
                let t;
                return l(e) && (t = e["@this"]), t ?? e;
              }
              let s = e[t];
              if (
                !u(s) ||
                "function" == typeof s ||
                "number" == typeof s.nodeType ||
                s === o
              )
                return;
              e = s;
            }
            return e;
          },
          getStyle: function t(e, i, s) {
            let r;
            if ("width" === i) {
              let i = Math.min(e.offsetWidth, e.scrollWidth),
                s = e.getBoundingClientRect && e.getBoundingClientRect().width;
              return (
                s < i && s >= i - 1 && (i = Math.floor(s)),
                Math.max(
                  0,
                  i -
                    (t(e, "padding-left", !0) || 0) -
                    (t(e, "padding-right", !0) || 0)
                )
              );
            }
            if ("height" === i)
              return Math.max(
                0,
                Math.min(e.offsetHeight, e.scrollHeight) -
                  (t(e, "padding-top", !0) || 0) -
                  (t(e, "padding-bottom", !0) || 0)
              );
            let a = o.getComputedStyle(e, void 0);
            return (
              a &&
                ((r = a.getPropertyValue(i)),
                x(s, "opacity" !== i) && (r = n(r))),
              r
            );
          },
          inArray: function (t, e, i) {
            return (
              r(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }),
              e.indexOf(t, i)
            );
          },
          insertItem: function (t, e) {
            let i;
            let s = t.options.index,
              o = e.length;
            for (i = t.options.isInternal ? o : 0; i < o + 1; i++)
              if (
                !e[i] ||
                (p(s) && s < x(e[i].options.index, e[i]._i)) ||
                e[i].options.isInternal
              ) {
                e.splice(i, 0, t);
                break;
              }
            return i;
          },
          isArray: h,
          isClass: c,
          isDOMElement: d,
          isFunction: function (t) {
            return "function" == typeof t;
          },
          isNumber: p,
          isObject: l,
          isString: a,
          keys: function (t) {
            return (
              r(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }),
              Object.keys(t)
            );
          },
          merge: function () {
            let t,
              e = arguments,
              i = {},
              s = function (t, e) {
                return (
                  "object" != typeof t && (t = {}),
                  S(e, function (i, o) {
                    "__proto__" !== o &&
                      "constructor" !== o &&
                      (!l(i, !0) || c(i) || d(i)
                        ? (t[o] = e[o])
                        : (t[o] = s(t[o] || {}, i)));
                  }),
                  t
                );
              };
            !0 === e[0] && ((i = e[1]), (e = Array.prototype.slice.call(e, 2)));
            let o = e.length;
            for (t = 0; t < o; t++) i = s(i, e[t]);
            return i;
          },
          normalizeTickInterval: function (t, e, i, s, o) {
            let r,
              n = t;
            i = x(i, b(t));
            let a = t / i;
            for (
              !e &&
                ((e = o
                  ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
                  : [1, 2, 2.5, 5, 10]),
                !1 === s &&
                  (1 === i
                    ? (e = e.filter(function (t) {
                        return t % 1 == 0;
                      }))
                    : i <= 0.1 && (e = [1 / i]))),
                r = 0;
              r < e.length &&
              ((n = e[r]),
              (!o || !(n * i >= t)) &&
                (o || !(a <= (e[r] + (e[r + 1] || e[r])) / 2)));
              r++
            );
            return v(n * i, -Math.round(Math.log(0.001) / Math.LN10));
          },
          objectEach: S,
          offset: function (t) {
            let e = s.documentElement,
              i =
                t.parentElement || t.parentNode
                  ? t.getBoundingClientRect()
                  : { top: 0, left: 0, width: 0, height: 0 };
            return {
              top: i.top + (o.pageYOffset || e.scrollTop) - (e.clientTop || 0),
              left:
                i.left + (o.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
              width: i.width,
              height: i.height,
            };
          },
          pad: function (t, e, i) {
            return (
              Array((e || 2) + 1 - String(t).replace("-", "").length).join(
                i || "0"
              ) + t
            );
          },
          pick: x,
          pInt: n,
          pushUnique: function (t, e) {
            return 0 > t.indexOf(e) && !!t.push(e);
          },
          relativeLength: function (t, e, i) {
            return /%$/.test(t)
              ? (e * parseFloat(t)) / 100 + (i || 0)
              : parseFloat(t);
          },
          removeEvent: M,
          splat: f,
          stableSort: function (t, e) {
            let i, s;
            let o = t.length;
            for (s = 0; s < o; s++) t[s].safeI = s;
            for (
              t.sort(function (t, s) {
                return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i;
              }),
                s = 0;
              s < o;
              s++
            )
              delete t[s].safeI;
          },
          syncTimeout: function (t, e, i) {
            return e > 0 ? setTimeout(t, e, i) : (t.call(0, i), -1);
          },
          timeUnits: {
            millisecond: 1,
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            week: 6048e5,
            month: 24192e5,
            year: 314496e5,
          },
          uniqueKey: w,
          useSerialIds: function (t) {
            return (e = x(t, e));
          },
          wrap: function (t, e, i) {
            let s = t[e];
            t[e] = function () {
              let t = arguments,
                e = this;
              return i.apply(
                this,
                [
                  function () {
                    return s.apply(e, arguments.length ? arguments : t);
                  },
                ].concat([].slice.call(arguments))
              );
            };
          },
        };
        return T;
      }),
      i(e, "Core/Chart/ChartDefaults.js", [], function () {
        return {
          alignThresholds: !1,
          panning: { enabled: !1, type: "x" },
          styledMode: !1,
          borderRadius: 0,
          colorCount: 10,
          allowMutatingData: !0,
          ignoreHiddenSeries: !0,
          spacing: [10, 10, 15, 10],
          resetZoomButton: { theme: {}, position: {} },
          reflow: !0,
          type: "line",
          zooming: {
            singleTouch: !1,
            resetButton: {
              theme: { zIndex: 6 },
              position: { align: "right", x: -10, y: 10 },
            },
          },
          width: null,
          height: null,
          borderColor: "#334eff",
          backgroundColor: "#ffffff",
          plotBorderColor: "#cccccc",
        };
      }),
      i(e, "Core/Color/Palettes.js", [], function () {
        return {
          colors: [
            "#2caffe",
            "#544fc5",
            "#00e272",
            "#fe6a35",
            "#6b8abc",
            "#d568fb",
            "#2ee0ca",
            "#fa4b42",
            "#feb56a",
            "#91e8e1",
          ],
        };
      }),
      i(
        e,
        "Core/Time.js",
        [e["Core/Globals.js"], e["Core/Utilities.js"]],
        function (t, e) {
          let { win: i } = t,
            {
              defined: s,
              error: o,
              extend: r,
              isObject: n,
              merge: a,
              objectEach: h,
              pad: l,
              pick: d,
              splat: c,
              timeUnits: p,
            } = e,
            u =
              t.isSafari &&
              i.Intl &&
              i.Intl.DateTimeFormat.prototype.formatRange,
            g =
              t.isSafari &&
              i.Intl &&
              !i.Intl.DateTimeFormat.prototype.formatRange;
          return class {
            constructor(t) {
              (this.options = {}),
                (this.useUTC = !1),
                (this.variableTimezone = !1),
                (this.Date = i.Date),
                (this.getTimezoneOffset = this.timezoneOffsetFunction()),
                this.update(t);
            }
            get(t, e) {
              if (this.variableTimezone || this.timezoneOffset) {
                let i = e.getTime(),
                  s = i - this.getTimezoneOffset(e);
                e.setTime(s);
                let o = e["getUTC" + t]();
                return e.setTime(i), o;
              }
              return this.useUTC ? e["getUTC" + t]() : e["get" + t]();
            }
            set(t, e, i) {
              if (this.variableTimezone || this.timezoneOffset) {
                if (
                  "Milliseconds" === t ||
                  "Seconds" === t ||
                  ("Minutes" === t && this.getTimezoneOffset(e) % 36e5 == 0)
                )
                  return e["setUTC" + t](i);
                let s = this.getTimezoneOffset(e),
                  o = e.getTime() - s;
                e.setTime(o), e["setUTC" + t](i);
                let r = this.getTimezoneOffset(e);
                return (o = e.getTime() + r), e.setTime(o);
              }
              return this.useUTC || (u && "FullYear" === t)
                ? e["setUTC" + t](i)
                : e["set" + t](i);
            }
            update(t = {}) {
              let e = d(t.useUTC, !0);
              (this.options = t = a(!0, this.options, t)),
                (this.Date = t.Date || i.Date || Date),
                (this.useUTC = e),
                (this.timezoneOffset = (e && t.timezoneOffset) || void 0),
                (this.getTimezoneOffset = this.timezoneOffsetFunction()),
                (this.variableTimezone =
                  e && !!(t.getTimezoneOffset || t.timezone));
            }
            makeTime(t, e, i, s, o, r) {
              let n, a, h;
              return (
                this.useUTC
                  ? ((n = this.Date.UTC.apply(0, arguments)),
                    (a = this.getTimezoneOffset(n)),
                    (n += a),
                    a !== (h = this.getTimezoneOffset(n))
                      ? (n += h - a)
                      : a - 36e5 !== this.getTimezoneOffset(n - 36e5) ||
                        g ||
                        (n -= 36e5))
                  : (n = new this.Date(
                      t,
                      e,
                      d(i, 1),
                      d(s, 0),
                      d(o, 0),
                      d(r, 0)
                    ).getTime()),
                n
              );
            }
            timezoneOffsetFunction() {
              let t = this,
                e = this.options,
                s = e.getTimezoneOffset,
                r = e.moment || i.moment;
              if (!this.useUTC)
                return function (t) {
                  return 6e4 * new Date(t.toString()).getTimezoneOffset();
                };
              if (e.timezone) {
                if (r)
                  return function (t) {
                    return -(6e4 * r.tz(t, e.timezone).utcOffset());
                  };
                o(25);
              }
              return this.useUTC && s
                ? function (t) {
                    return 6e4 * s(t.valueOf());
                  }
                : function () {
                    return 6e4 * (t.timezoneOffset || 0);
                  };
            }
            dateFormat(e, i, o) {
              if (!s(i) || isNaN(i))
                return (
                  (t.defaultOptions.lang &&
                    t.defaultOptions.lang.invalidDate) ||
                  ""
                );
              e = d(e, "%Y-%m-%d %H:%M:%S");
              let n = this,
                a = new this.Date(i),
                c = this.get("Hours", a),
                p = this.get("Day", a),
                u = this.get("Date", a),
                g = this.get("Month", a),
                f = this.get("FullYear", a),
                m = t.defaultOptions.lang,
                x = m && m.weekdays,
                y = m && m.shortWeekdays,
                b = r(
                  {
                    a: y ? y[p] : x[p].substr(0, 3),
                    A: x[p],
                    d: l(u),
                    e: l(u, 2, " "),
                    w: p,
                    b: m.shortMonths[g],
                    B: m.months[g],
                    m: l(g + 1),
                    o: g + 1,
                    y: f.toString().substr(2, 2),
                    Y: f,
                    H: l(c),
                    k: c,
                    I: l(c % 12 || 12),
                    l: c % 12 || 12,
                    M: l(this.get("Minutes", a)),
                    p: c < 12 ? "AM" : "PM",
                    P: c < 12 ? "am" : "pm",
                    S: l(this.get("Seconds", a)),
                    L: l(Math.floor(i % 1e3), 3),
                  },
                  t.dateFormats
                );
              return (
                h(b, function (t, s) {
                  for (; -1 !== e.indexOf("%" + s); )
                    e = e.replace(
                      "%" + s,
                      "function" == typeof t ? t.call(n, i) : t
                    );
                }),
                o ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
              );
            }
            resolveDTLFormat(t) {
              return n(t, !0)
                ? t
                : { main: (t = c(t))[0], from: t[1], to: t[2] };
            }
            getTimeTicks(t, e, i, o) {
              let n, a, h, l;
              let c = this,
                u = c.Date,
                g = [],
                f = {},
                m = new u(e),
                x = t.unitRange,
                y = t.count || 1;
              if (((o = d(o, 1)), s(e))) {
                c.set(
                  "Milliseconds",
                  m,
                  x >= p.second
                    ? 0
                    : y * Math.floor(c.get("Milliseconds", m) / y)
                ),
                  x >= p.second &&
                    c.set(
                      "Seconds",
                      m,
                      x >= p.minute
                        ? 0
                        : y * Math.floor(c.get("Seconds", m) / y)
                    ),
                  x >= p.minute &&
                    c.set(
                      "Minutes",
                      m,
                      x >= p.hour ? 0 : y * Math.floor(c.get("Minutes", m) / y)
                    ),
                  x >= p.hour &&
                    c.set(
                      "Hours",
                      m,
                      x >= p.day ? 0 : y * Math.floor(c.get("Hours", m) / y)
                    ),
                  x >= p.day &&
                    c.set(
                      "Date",
                      m,
                      x >= p.month
                        ? 1
                        : Math.max(1, y * Math.floor(c.get("Date", m) / y))
                    ),
                  x >= p.month &&
                    (c.set(
                      "Month",
                      m,
                      x >= p.year ? 0 : y * Math.floor(c.get("Month", m) / y)
                    ),
                    (a = c.get("FullYear", m))),
                  x >= p.year && ((a -= a % y), c.set("FullYear", m, a)),
                  x === p.week &&
                    ((l = c.get("Day", m)),
                    c.set(
                      "Date",
                      m,
                      c.get("Date", m) - l + o + (l < o ? -7 : 0)
                    )),
                  (a = c.get("FullYear", m));
                let t = c.get("Month", m),
                  r = c.get("Date", m),
                  d = c.get("Hours", m);
                (e = m.getTime()),
                  (c.variableTimezone || !c.useUTC) &&
                    s(i) &&
                    (h =
                      i - e > 4 * p.month ||
                      c.getTimezoneOffset(e) !== c.getTimezoneOffset(i));
                let u = m.getTime();
                for (n = 1; u < i; )
                  g.push(u),
                    x === p.year
                      ? (u = c.makeTime(a + n * y, 0))
                      : x === p.month
                      ? (u = c.makeTime(a, t + n * y))
                      : h && (x === p.day || x === p.week)
                      ? (u = c.makeTime(
                          a,
                          t,
                          r + n * y * (x === p.day ? 1 : 7)
                        ))
                      : h && x === p.hour && y > 1
                      ? (u = c.makeTime(a, t, r, d + n * y))
                      : (u += x * y),
                    n++;
                g.push(u),
                  x <= p.hour &&
                    g.length < 1e4 &&
                    g.forEach(function (t) {
                      t % 18e5 == 0 &&
                        "000000000" === c.dateFormat("%H%M%S%L", t) &&
                        (f[t] = "day");
                    });
              }
              return (g.info = r(t, { higherRanks: f, totalRange: x * y })), g;
            }
            getDateFormat(t, e, i, s) {
              let o = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                r = "01-01 00:00:00.000",
                n = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
                a = "millisecond",
                h = a;
              for (a in p) {
                if (
                  t === p.week &&
                  +this.dateFormat("%w", e) === i &&
                  o.substr(6) === r.substr(6)
                ) {
                  a = "week";
                  break;
                }
                if (p[a] > t) {
                  a = h;
                  break;
                }
                if (n[a] && o.substr(n[a]) !== r.substr(n[a])) break;
                "week" !== a && (h = a);
              }
              return this.resolveDTLFormat(s[a]).main;
            }
          };
        }
      ),
      i(
        e,
        "Core/Defaults.js",
        [
          e["Core/Chart/ChartDefaults.js"],
          e["Core/Globals.js"],
          e["Core/Color/Palettes.js"],
          e["Core/Time.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o) {
          let { isTouchDevice: r, svg: n } = e,
            { merge: a } = o,
            h = {
              colors: i.colors,
              symbols: [
                "circle",
                "diamond",
                "square",
                "triangle",
                "triangle-down",
              ],
              lang: {
                loading: "Loading...",
                months: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                shortMonths: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                weekdays: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                decimalPoint: ".",
                numericSymbols: ["k", "M", "G", "T", "P", "E"],
                resetZoom: "Reset zoom",
                resetZoomTitle: "Reset zoom level 1:1",
                thousandsSep: " ",
              },
              global: {},
              time: {
                Date: void 0,
                getTimezoneOffset: void 0,
                timezone: void 0,
                timezoneOffset: 0,
                useUTC: !0,
              },
              chart: t,
              title: {
                style: { color: "#333333", fontWeight: "bold" },
                text: "Chart title",
                align: "center",
                margin: 15,
                widthAdjust: -44,
              },
              subtitle: {
                style: { color: "#666666", fontSize: "0.8em" },
                text: "",
                align: "center",
                widthAdjust: -44,
              },
              caption: {
                margin: 15,
                style: { color: "#666666", fontSize: "0.8em" },
                text: "",
                align: "left",
                verticalAlign: "bottom",
              },
              plotOptions: {},
              legend: {
                enabled: !0,
                align: "center",
                alignColumns: !0,
                className: "highcharts-no-tooltip",
                layout: "horizontal",
                itemMarginBottom: 2,
                itemMarginTop: 2,
                labelFormatter: function () {
                  return this.name;
                },
                borderColor: "#999999",
                borderRadius: 0,
                navigation: {
                  style: { fontSize: "0.8em" },
                  activeColor: "#0022ff",
                  inactiveColor: "#cccccc",
                },
                itemStyle: {
                  color: "#333333",
                  cursor: "pointer",
                  fontSize: "0.8em",
                  textDecoration: "none",
                  textOverflow: "ellipsis",
                },
                itemHoverStyle: { color: "#000000" },
                itemHiddenStyle: {
                  color: "#666666",
                  textDecoration: "line-through",
                },
                shadow: !1,
                itemCheckboxStyle: {
                  position: "absolute",
                  width: "13px",
                  height: "13px",
                },
                squareSymbol: !0,
                symbolPadding: 5,
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                title: { style: { fontSize: "0.8em", fontWeight: "bold" } },
              },
              loading: {
                labelStyle: {
                  fontWeight: "bold",
                  position: "relative",
                  top: "45%",
                },
                style: {
                  position: "absolute",
                  backgroundColor: "#ffffff",
                  opacity: 0.5,
                  textAlign: "center",
                },
              },
              tooltip: {
                enabled: !0,
                animation: n,
                borderRadius: 3,
                dateTimeLabelFormats: {
                  millisecond: "%A, %e %b, %H:%M:%S.%L",
                  second: "%A, %e %b, %H:%M:%S",
                  minute: "%A, %e %b, %H:%M",
                  hour: "%A, %e %b, %H:%M",
                  day: "%A, %e %b %Y",
                  week: "Week from %A, %e %b %Y",
                  month: "%B %Y",
                  year: "%Y",
                },
                footerFormat: "",
                headerShape: "callout",
                hideDelay: 500,
                padding: 8,
                shape: "callout",
                shared: !1,
                snap: r ? 25 : 10,
                headerFormat:
                  '<span style="font-size: 0.8em">{point.key}</span><br/>',
                pointFormat:
                  '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                backgroundColor: "#ffffff",
                borderWidth: void 0,
                shadow: !0,
                stickOnContact: !1,
                style: {
                  color: "#333333",
                  cursor: "default",
                  fontSize: "0.8em",
                },
                useHTML: !1,
              },
              credits: {
                enabled: !0,
                href: "https://www.highcharts.com?credits",
                position: {
                  align: "right",
                  x: -10,
                  verticalAlign: "bottom",
                  y: -5,
                },
                style: {
                  cursor: "pointer",
                  color: "#999999",
                  fontSize: "0.6em",
                },
                text: "Highcharts.com",
              },
            };
          h.chart.styledMode = !1;
          let l = new s(h.time);
          return {
            defaultOptions: h,
            defaultTime: l,
            getOptions: function () {
              return h;
            },
            setOptions: function (t) {
              return (
                a(!0, h, t),
                (t.time || t.global) &&
                  (e.time
                    ? e.time.update(a(h.global, h.time, t.global, t.time))
                    : (e.time = l)),
                h
              );
            },
          };
        }
      ),
      i(
        e,
        "Core/Color/Color.js",
        [e["Core/Globals.js"], e["Core/Utilities.js"]],
        function (t, e) {
          let { isNumber: i, merge: s, pInt: o } = e;
          class r {
            static parse(t) {
              return t ? new r(t) : r.None;
            }
            constructor(e) {
              (this.rgba = [NaN, NaN, NaN, NaN]), (this.input = e);
              let i = t.Color;
              if (i && i !== r) return new i(e);
              this.init(e);
            }
            init(t) {
              let e, i, s, o;
              if ("object" == typeof t && void 0 !== t.stops)
                this.stops = t.stops.map((t) => new r(t[1]));
              else if ("string" == typeof t) {
                if (
                  ((this.input = t = r.names[t.toLowerCase()] || t),
                  "#" === t.charAt(0))
                ) {
                  let e = t.length,
                    s = parseInt(t.substr(1), 16);
                  7 === e
                    ? (i = [(16711680 & s) >> 16, (65280 & s) >> 8, 255 & s, 1])
                    : 4 === e &&
                      (i = [
                        ((3840 & s) >> 4) | ((3840 & s) >> 8),
                        ((240 & s) >> 4) | (240 & s),
                        ((15 & s) << 4) | (15 & s),
                        1,
                      ]);
                }
                if (!i)
                  for (s = r.parsers.length; s-- && !i; )
                    (e = (o = r.parsers[s]).regex.exec(t)) && (i = o.parse(e));
              }
              i && (this.rgba = i);
            }
            get(t) {
              let e = this.input,
                o = this.rgba;
              if ("object" == typeof e && void 0 !== this.stops) {
                let i = s(e);
                return (
                  (i.stops = [].slice.call(i.stops)),
                  this.stops.forEach((e, s) => {
                    i.stops[s] = [i.stops[s][0], e.get(t)];
                  }),
                  i
                );
              }
              return o && i(o[0])
                ? "rgb" !== t && (t || 1 !== o[3])
                  ? "a" === t
                    ? `${o[3]}`
                    : "rgba(" + o.join(",") + ")"
                  : "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")"
                : e;
            }
            brighten(t) {
              let e = this.rgba;
              if (this.stops)
                this.stops.forEach(function (e) {
                  e.brighten(t);
                });
              else if (i(t) && 0 !== t)
                for (let i = 0; i < 3; i++)
                  (e[i] += o(255 * t)),
                    e[i] < 0 && (e[i] = 0),
                    e[i] > 255 && (e[i] = 255);
              return this;
            }
            setOpacity(t) {
              return (this.rgba[3] = t), this;
            }
            tweenTo(t, e) {
              let s = this.rgba,
                o = t.rgba;
              if (!i(s[0]) || !i(o[0])) return t.input || "none";
              let r = 1 !== o[3] || 1 !== s[3];
              return (
                (r ? "rgba(" : "rgb(") +
                Math.round(o[0] + (s[0] - o[0]) * (1 - e)) +
                "," +
                Math.round(o[1] + (s[1] - o[1]) * (1 - e)) +
                "," +
                Math.round(o[2] + (s[2] - o[2]) * (1 - e)) +
                (r ? "," + (o[3] + (s[3] - o[3]) * (1 - e)) : "") +
                ")"
              );
            }
          }
          return (
            (r.names = { white: "#ffffff", black: "#000000" }),
            (r.parsers = [
              {
                regex:
                  /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function (t) {
                  return [o(t[1]), o(t[2]), o(t[3]), parseFloat(t[4], 10)];
                },
              },
              {
                regex:
                  /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                parse: function (t) {
                  return [o(t[1]), o(t[2]), o(t[3]), 1];
                },
              },
            ]),
            (r.None = new r("")),
            r
          );
        }
      ),
      i(
        e,
        "Core/Animation/Fx.js",
        [
          e["Core/Color/Color.js"],
          e["Core/Globals.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { parse: s } = t,
            { win: o } = e,
            { isNumber: r, objectEach: n } = i;
          class a {
            constructor(t, e, i) {
              (this.pos = NaN),
                (this.options = e),
                (this.elem = t),
                (this.prop = i);
            }
            dSetter() {
              let t = this.paths,
                e = t && t[0],
                i = t && t[1],
                s = this.now || 0,
                o = [];
              if (1 !== s && e && i) {
                if (e.length === i.length && s < 1)
                  for (let t = 0; t < i.length; t++) {
                    let n = e[t],
                      a = i[t],
                      h = [];
                    for (let t = 0; t < a.length; t++) {
                      let e = n[t],
                        i = a[t];
                      r(e) && r(i) && !("A" === a[0] && (4 === t || 5 === t))
                        ? (h[t] = e + s * (i - e))
                        : (h[t] = i);
                    }
                    o.push(h);
                  }
                else o = i;
              } else o = this.toD || [];
              this.elem.attr("d", o, void 0, !0);
            }
            update() {
              let t = this.elem,
                e = this.prop,
                i = this.now,
                s = this.options.step;
              this[e + "Setter"]
                ? this[e + "Setter"]()
                : t.attr
                ? t.element && t.attr(e, i, null, !0)
                : (t.style[e] = i + this.unit),
                s && s.call(t, i, this);
            }
            run(t, e, i) {
              let s = this,
                r = s.options,
                n = function (t) {
                  return !n.stopped && s.step(t);
                },
                h =
                  o.requestAnimationFrame ||
                  function (t) {
                    setTimeout(t, 13);
                  },
                l = function () {
                  for (let t = 0; t < a.timers.length; t++)
                    a.timers[t]() || a.timers.splice(t--, 1);
                  a.timers.length && h(l);
                };
              t !== e || this.elem["forceAnimate:" + this.prop]
                ? ((this.startTime = +new Date()),
                  (this.start = t),
                  (this.end = e),
                  (this.unit = i),
                  (this.now = this.start),
                  (this.pos = 0),
                  (n.elem = this.elem),
                  (n.prop = this.prop),
                  n() && 1 === a.timers.push(n) && h(l))
                : (delete r.curAnim[this.prop],
                  r.complete &&
                    0 === Object.keys(r.curAnim).length &&
                    r.complete.call(this.elem));
            }
            step(t) {
              let e, i;
              let s = +new Date(),
                o = this.options,
                r = this.elem,
                a = o.complete,
                h = o.duration,
                l = o.curAnim;
              return (
                r.attr && !r.element
                  ? (e = !1)
                  : t || s >= h + this.startTime
                  ? ((this.now = this.end),
                    (this.pos = 1),
                    this.update(),
                    (l[this.prop] = !0),
                    (i = !0),
                    n(l, function (t) {
                      !0 !== t && (i = !1);
                    }),
                    i && a && a.call(r),
                    (e = !1))
                  : ((this.pos = o.easing((s - this.startTime) / h)),
                    (this.now =
                      this.start + (this.end - this.start) * this.pos),
                    this.update(),
                    (e = !0)),
                e
              );
            }
            initPath(t, e, i) {
              let s = t.startX,
                o = t.endX,
                n = i.slice(),
                a = t.isArea,
                h = a ? 2 : 1,
                l,
                d,
                c,
                p,
                u = e && e.slice();
              if (!u) return [n, n];
              function g(t, e) {
                for (; t.length < d; ) {
                  let i = t[0],
                    s = e[d - t.length];
                  if (
                    (s &&
                      "M" === i[0] &&
                      ("C" === s[0]
                        ? (t[0] = ["C", i[1], i[2], i[1], i[2], i[1], i[2]])
                        : (t[0] = ["L", i[1], i[2]])),
                    t.unshift(i),
                    a)
                  ) {
                    let e = t.pop();
                    t.push(t[t.length - 1], e);
                  }
                }
              }
              function f(t, e) {
                for (; t.length < d; ) {
                  let e = t[Math.floor(t.length / h) - 1].slice();
                  if (("C" === e[0] && ((e[1] = e[5]), (e[2] = e[6])), a)) {
                    let i = t[Math.floor(t.length / h)].slice();
                    t.splice(t.length / 2, 0, e, i);
                  } else t.push(e);
                }
              }
              if (s && o && o.length) {
                for (c = 0; c < s.length; c++) {
                  if (s[c] === o[0]) {
                    l = c;
                    break;
                  }
                  if (s[0] === o[o.length - s.length + c]) {
                    (l = c), (p = !0);
                    break;
                  }
                  if (s[s.length - 1] === o[o.length - s.length + c]) {
                    l = s.length - c;
                    break;
                  }
                }
                void 0 === l && (u = []);
              }
              return (
                u.length &&
                  r(l) &&
                  ((d = n.length + l * h),
                  p ? (g(u, n), f(n, u)) : (g(n, u), f(u, n))),
                [u, n]
              );
            }
            fillSetter() {
              a.prototype.strokeSetter.apply(this, arguments);
            }
            strokeSetter() {
              this.elem.attr(
                this.prop,
                s(this.start).tweenTo(s(this.end), this.pos),
                void 0,
                !0
              );
            }
          }
          return (a.timers = []), a;
        }
      ),
      i(
        e,
        "Core/Animation/AnimationUtilities.js",
        [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]],
        function (t, e) {
          let {
            defined: i,
            getStyle: s,
            isArray: o,
            isNumber: r,
            isObject: n,
            merge: a,
            objectEach: h,
            pick: l,
          } = e;
          function d(t) {
            return n(t)
              ? a({ duration: 500, defer: 0 }, t)
              : { duration: t ? 500 : 0, defer: 0 };
          }
          function c(e, i) {
            let s = t.timers.length;
            for (; s--; )
              t.timers[s].elem !== e ||
                (i && i !== t.timers[s].prop) ||
                (t.timers[s].stopped = !0);
          }
          return {
            animate: function (e, i, l) {
              let d,
                p = "",
                u,
                g,
                f;
              n(l) ||
                ((f = arguments),
                (l = { duration: f[2], easing: f[3], complete: f[4] })),
                r(l.duration) || (l.duration = 400),
                (l.easing =
                  "function" == typeof l.easing
                    ? l.easing
                    : Math[l.easing] || Math.easeInOutSine),
                (l.curAnim = a(i)),
                h(i, function (r, n) {
                  c(e, n),
                    (g = new t(e, l, n)),
                    (u = void 0),
                    "d" === n && o(i.d)
                      ? ((g.paths = g.initPath(e, e.pathArray, i.d)),
                        (g.toD = i.d),
                        (d = 0),
                        (u = 1))
                      : e.attr
                      ? (d = e.attr(n))
                      : ((d = parseFloat(s(e, n)) || 0),
                        "opacity" !== n && (p = "px")),
                    u || (u = r),
                    "string" == typeof u &&
                      u.match("px") &&
                      (u = u.replace(/px/g, "")),
                    g.run(d, u, p);
                });
            },
            animObject: d,
            getDeferredAnimation: function (t, e, s) {
              let o = d(e),
                r = s ? [s] : t.series,
                n = 0,
                a = 0;
              r.forEach((t) => {
                let s = d(t.options.animation);
                (n =
                  e && i(e.defer)
                    ? o.defer
                    : Math.max(n, s.duration + s.defer)),
                  (a = Math.min(o.duration, s.duration));
              }),
                t.renderer.forExport && (n = 0);
              let h = { defer: Math.max(0, n - a), duration: Math.min(n, a) };
              return h;
            },
            setAnimation: function (t, e) {
              e.renderer.globalAnimation = l(t, e.options.chart.animation, !0);
            },
            stop: c,
          };
        }
      ),
      i(
        e,
        "Core/Renderer/HTML/AST.js",
        [e["Core/Globals.js"], e["Core/Utilities.js"]],
        function (t, e) {
          let { SVG_NS: i, win: s } = t,
            {
              attr: o,
              createElement: r,
              css: n,
              error: a,
              isFunction: h,
              isString: l,
              objectEach: d,
              splat: c,
            } = e,
            { trustedTypes: p } = s,
            u =
              p &&
              h(p.createPolicy) &&
              p.createPolicy("highcharts", { createHTML: (t) => t }),
            g = u ? u.createHTML("") : "",
            f = (function () {
              try {
                return !!new DOMParser().parseFromString(g, "text/html");
              } catch (t) {
                return !1;
              }
            })();
          class m {
            static filterUserAttributes(t) {
              return (
                d(t, (e, i) => {
                  let s = !0;
                  -1 === m.allowedAttributes.indexOf(i) && (s = !1),
                    -1 !==
                      ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(
                        i
                      ) &&
                      (s =
                        l(e) &&
                        m.allowedReferences.some((t) => 0 === e.indexOf(t))),
                    s ||
                      (a(33, !1, void 0, {
                        "Invalid attribute in config": `${i}`,
                      }),
                      delete t[i]),
                    l(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
                }),
                t
              );
            }
            static parseStyle(t) {
              return t.split(";").reduce((t, e) => {
                let i = e.split(":").map((t) => t.trim()),
                  s = i.shift();
                return (
                  s &&
                    i.length &&
                    (t[s.replace(/-([a-z])/g, (t) => t[1].toUpperCase())] =
                      i.join(":")),
                  t
                );
              }, {});
            }
            static setElementHTML(t, e) {
              if (((t.innerHTML = m.emptyHTML), e)) {
                let i = new m(e);
                i.addToDOM(t);
              }
            }
            constructor(t) {
              this.nodes = "string" == typeof t ? this.parseMarkup(t) : t;
            }
            addToDOM(e) {
              return (function e(s, r) {
                let h;
                return (
                  c(s).forEach(function (s) {
                    let l;
                    let c = s.tagName,
                      p = s.textContent
                        ? t.doc.createTextNode(s.textContent)
                        : void 0,
                      u = m.bypassHTMLFiltering;
                    if (c) {
                      if ("#text" === c) l = p;
                      else if (-1 !== m.allowedTags.indexOf(c) || u) {
                        let a = "svg" === c ? i : r.namespaceURI || i,
                          h = t.doc.createElementNS(a, c),
                          g = s.attributes || {};
                        d(s, function (t, e) {
                          "tagName" !== e &&
                            "attributes" !== e &&
                            "children" !== e &&
                            "style" !== e &&
                            "textContent" !== e &&
                            (g[e] = t);
                        }),
                          o(h, u ? g : m.filterUserAttributes(g)),
                          s.style && n(h, s.style),
                          p && h.appendChild(p),
                          e(s.children || [], h),
                          (l = h);
                      } else
                        a(33, !1, void 0, { "Invalid tagName in config": c });
                    }
                    l && r.appendChild(l), (h = l);
                  }),
                  h
                );
              })(this.nodes, e);
            }
            parseMarkup(t) {
              let e;
              let i = [];
              if (
                ((t = t.trim().replace(/ style=(["'])/g, " data-style=$1")), f)
              )
                e = new DOMParser().parseFromString(
                  u ? u.createHTML(t) : t,
                  "text/html"
                );
              else {
                let i = r("div");
                (i.innerHTML = t), (e = { body: i });
              }
              let s = (t, e) => {
                let i = t.nodeName.toLowerCase(),
                  o = { tagName: i };
                "#text" === i && (o.textContent = t.textContent || "");
                let r = t.attributes;
                if (r) {
                  let t = {};
                  [].forEach.call(r, (e) => {
                    "data-style" === e.name
                      ? (o.style = m.parseStyle(e.value))
                      : (t[e.name] = e.value);
                  }),
                    (o.attributes = t);
                }
                if (t.childNodes.length) {
                  let e = [];
                  [].forEach.call(t.childNodes, (t) => {
                    s(t, e);
                  }),
                    e.length && (o.children = e);
                }
                e.push(o);
              };
              return [].forEach.call(e.body.childNodes, (t) => s(t, i)), i;
            }
          }
          return (
            (m.allowedAttributes = [
              "alt",
              "aria-controls",
              "aria-describedby",
              "aria-expanded",
              "aria-haspopup",
              "aria-hidden",
              "aria-label",
              "aria-labelledby",
              "aria-live",
              "aria-pressed",
              "aria-readonly",
              "aria-roledescription",
              "aria-selected",
              "class",
              "clip-path",
              "color",
              "colspan",
              "cx",
              "cy",
              "d",
              "dx",
              "dy",
              "disabled",
              "fill",
              "filterUnits",
              "flood-color",
              "flood-opacity",
              "height",
              "href",
              "id",
              "in",
              "markerHeight",
              "markerWidth",
              "offset",
              "opacity",
              "orient",
              "padding",
              "paddingLeft",
              "paddingRight",
              "patternUnits",
              "r",
              "refX",
              "refY",
              "role",
              "scope",
              "slope",
              "src",
              "startOffset",
              "stdDeviation",
              "stroke",
              "stroke-linecap",
              "stroke-width",
              "style",
              "tableValues",
              "result",
              "rowspan",
              "summary",
              "target",
              "tabindex",
              "text-align",
              "text-anchor",
              "textAnchor",
              "textLength",
              "title",
              "type",
              "valign",
              "width",
              "x",
              "x1",
              "x2",
              "xlink:href",
              "y",
              "y1",
              "y2",
              "zIndex",
            ]),
            (m.allowedReferences = [
              "https://",
              "http://",
              "mailto:",
              "/",
              "../",
              "./",
              "#",
            ]),
            (m.allowedTags = [
              "a",
              "abbr",
              "b",
              "br",
              "button",
              "caption",
              "circle",
              "clipPath",
              "code",
              "dd",
              "defs",
              "div",
              "dl",
              "dt",
              "em",
              "feComponentTransfer",
              "feDropShadow",
              "feFuncA",
              "feFuncB",
              "feFuncG",
              "feFuncR",
              "feGaussianBlur",
              "feOffset",
              "feMerge",
              "feMergeNode",
              "filter",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "hr",
              "i",
              "img",
              "li",
              "linearGradient",
              "marker",
              "ol",
              "p",
              "path",
              "pattern",
              "pre",
              "rect",
              "small",
              "span",
              "stop",
              "strong",
              "style",
              "sub",
              "sup",
              "svg",
              "table",
              "text",
              "textPath",
              "thead",
              "title",
              "tbody",
              "tspan",
              "td",
              "th",
              "tr",
              "u",
              "ul",
              "#text",
            ]),
            (m.emptyHTML = g),
            (m.bypassHTMLFiltering = !1),
            m
          );
        }
      ),
      i(
        e,
        "Core/Templating.js",
        [e["Core/Defaults.js"], e["Core/Utilities.js"]],
        function (t, e) {
          let { defaultOptions: i, defaultTime: s } = t,
            {
              extend: o,
              getNestedProperty: r,
              isArray: n,
              isNumber: a,
              isObject: h,
              isString: l,
              pick: d,
              pInt: c,
            } = e,
            p = {
              add: (t, e) => t + e,
              divide: (t, e) => (0 !== e ? t / e : ""),
              eq: (t, e) => t == e,
              each: function (t) {
                let e = arguments[arguments.length - 1];
                return (
                  !!n(t) &&
                  t
                    .map((i, s) =>
                      u(
                        e.body,
                        o(h(i) ? i : { "@this": i }, {
                          "@index": s,
                          "@first": 0 === s,
                          "@last": s === t.length - 1,
                        })
                      )
                    )
                    .join("")
                );
              },
              ge: (t, e) => t >= e,
              gt: (t, e) => t > e,
              if: (t) => !!t,
              le: (t, e) => t <= e,
              lt: (t, e) => t < e,
              multiply: (t, e) => t * e,
              ne: (t, e) => t != e,
              subtract: (t, e) => t - e,
              unless: (t) => !t,
            };
          function u(t = "", e, o) {
            let n = /\{([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= #\(\)]+)\}/g,
              a = /\(([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= ]+)\)/g,
              h = [],
              l = /f$/,
              c = /\.([0-9])/,
              f = i.lang,
              m = (o && o.time) || s,
              x = (o && o.numberFormatter) || g,
              y = (t = "") => {
                let i;
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ((i = Number(t)).toString() === t ? i : r(t, e)))
                );
              },
              b,
              v,
              k = 0,
              S;
            for (; null !== (b = n.exec(t)); ) {
              let i = a.exec(b[1]);
              i && ((b = i), (S = !0)),
                (v && v.isBlock) ||
                  (v = {
                    ctx: e,
                    expression: b[1],
                    find: b[0],
                    isBlock: "#" === b[1].charAt(0),
                    start: b.index,
                    startInner: b.index + b[0].length,
                    length: b[0].length,
                  });
              let s = b[1].split(" ")[0].replace("#", "");
              p[s] && (v.isBlock && s === v.fn && k++, v.fn || (v.fn = s));
              let o = "else" === b[1];
              if (v.isBlock && v.fn && (b[1] === `/${v.fn}` || o)) {
                if (k) !o && k--;
                else {
                  let e = v.startInner,
                    i = t.substr(e, b.index - e);
                  void 0 === v.body
                    ? ((v.body = i), (v.startInner = b.index + b[0].length))
                    : (v.elseBody = i),
                    (v.find += i + b[0]),
                    o || (h.push(v), (v = void 0));
                }
              } else v.isBlock || h.push(v);
              if (i && !v?.isBlock) break;
            }
            return (
              h.forEach((i) => {
                let s, o;
                let { body: r, elseBody: n, expression: a, fn: h } = i;
                if (h) {
                  let t = [i],
                    l = a.split(" ");
                  for (o = p[h].length; o--; ) t.unshift(y(l[o + 1]));
                  (s = p[h].apply(e, t)),
                    i.isBlock && "boolean" == typeof s && (s = u(s ? r : n, e));
                } else {
                  let t = a.split(":");
                  if (
                    ((s = y(t.shift() || "")), t.length && "number" == typeof s)
                  ) {
                    let e = t.join(":");
                    if (l.test(e)) {
                      let t = parseInt((e.match(c) || ["", "-1"])[1], 10);
                      null !== s &&
                        (s = x(
                          s,
                          t,
                          f.decimalPoint,
                          e.indexOf(",") > -1 ? f.thousandsSep : ""
                        ));
                    } else s = m.dateFormat(e, s);
                  }
                }
                t = t.replace(i.find, d(s, ""));
              }),
              S ? u(t, e, o) : t
            );
          }
          function g(t, e, s, o) {
            let r, n;
            (t = +t || 0), (e = +e);
            let h = i.lang,
              l = (t.toString().split(".")[1] || "").split("e")[0].length,
              p = t.toString().split("e"),
              u = e;
            -1 === e
              ? (e = Math.min(l, 20))
              : a(e)
              ? e &&
                p[1] &&
                p[1] < 0 &&
                ((n = e + +p[1]) >= 0
                  ? ((p[0] = (+p[0]).toExponential(n).split("e")[0]), (e = n))
                  : ((p[0] = p[0].split(".")[0] || 0),
                    (t = e < 20 ? (p[0] * Math.pow(10, p[1])).toFixed(e) : 0),
                    (p[1] = 0)))
              : (e = 2);
            let g = (
                Math.abs(p[1] ? p[0] : t) + Math.pow(10, -Math.max(e, l) - 1)
              ).toFixed(e),
              f = String(c(g)),
              m = f.length > 3 ? f.length % 3 : 0;
            return (
              (s = d(s, h.decimalPoint)),
              (o = d(o, h.thousandsSep)),
              (r = (t < 0 ? "-" : "") + (m ? f.substr(0, m) + o : "")),
              0 > +p[1] && !u
                ? (r = "0")
                : (r += f.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + o)),
              e && (r += s + g.slice(-e)),
              p[1] && 0 != +r && (r += "e" + p[1]),
              r
            );
          }
          return {
            dateFormat: function (t, e, i) {
              return s.dateFormat(t, e, i);
            },
            format: u,
            helpers: p,
            numberFormat: g,
          };
        }
      ),
      i(
        e,
        "Core/Renderer/RendererUtilities.js",
        [e["Core/Utilities.js"]],
        function (t) {
          var e;
          let { clamp: i, pick: s, pushUnique: o, stableSort: r } = t;
          return (
            ((e || (e = {})).distribute = function t(e, n, a) {
              let h = e,
                l = h.reducedLen || n,
                d = (t, e) => t.target - e.target,
                c = [],
                p = e.length,
                u = [],
                g = c.push,
                f,
                m,
                x,
                y = !0,
                b,
                v,
                k = 0,
                S;
              for (f = p; f--; ) k += e[f].size;
              if (k > l) {
                for (
                  r(e, (t, e) => (e.rank || 0) - (t.rank || 0)),
                    x = (S = e[0].rank === e[e.length - 1].rank) ? p / 2 : -1,
                    m = S ? x : p - 1;
                  x && k > l;

                )
                  (b = e[(f = Math.floor(m))]),
                    o(u, f) && (k -= b.size),
                    (m += x),
                    S && m >= e.length && ((x /= 2), (m = x));
                u.sort((t, e) => e - t).forEach((t) =>
                  g.apply(c, e.splice(t, 1))
                );
              }
              for (
                r(e, d),
                  e = e.map((t) => ({
                    size: t.size,
                    targets: [t.target],
                    align: s(t.align, 0.5),
                  }));
                y;

              ) {
                for (f = e.length; f--; )
                  (b = e[f]),
                    (v =
                      (Math.min.apply(0, b.targets) +
                        Math.max.apply(0, b.targets)) /
                      2),
                    (b.pos = i(v - b.size * b.align, 0, n - b.size));
                for (f = e.length, y = !1; f--; )
                  f > 0 &&
                    e[f - 1].pos + e[f - 1].size > e[f].pos &&
                    ((e[f - 1].size += e[f].size),
                    (e[f - 1].targets = e[f - 1].targets.concat(e[f].targets)),
                    (e[f - 1].align = 0.5),
                    e[f - 1].pos + e[f - 1].size > n &&
                      (e[f - 1].pos = n - e[f - 1].size),
                    e.splice(f, 1),
                    (y = !0));
              }
              return (
                g.apply(h, c),
                (f = 0),
                e.some((e) => {
                  let i = 0;
                  return (e.targets || []).some(() =>
                    ((h[f].pos = e.pos + i),
                    void 0 !== a && Math.abs(h[f].pos - h[f].target) > a)
                      ? (h.slice(0, f + 1).forEach((t) => delete t.pos),
                        (h.reducedLen = (h.reducedLen || n) - 0.1 * n),
                        h.reducedLen > 0.1 * n && t(h, n, a),
                        !0)
                      : ((i += h[f].size), f++, !1)
                  );
                }),
                r(h, d),
                h
              );
            }),
            e
          );
        }
      ),
      i(
        e,
        "Core/Renderer/SVG/SVGElement.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Color/Color.js"],
          e["Core/Globals.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s) {
          let { animate: o, animObject: r, stop: n } = t,
            { deg2rad: a, doc: h, noop: l, svg: d, SVG_NS: c, win: p } = i,
            {
              addEvent: u,
              attr: g,
              createElement: f,
              css: m,
              defined: x,
              erase: y,
              extend: b,
              fireEvent: v,
              isArray: k,
              isFunction: S,
              isObject: M,
              isString: C,
              merge: w,
              objectEach: T,
              pick: A,
              pInt: P,
              syncTimeout: L,
              uniqueKey: O,
            } = s;
          class D {
            constructor() {
              (this.element = void 0),
                (this.onEvents = {}),
                (this.opacity = 1),
                (this.renderer = void 0),
                (this.SVG_NS = c);
            }
            _defaultGetter(t) {
              let e = A(
                this[t + "Value"],
                this[t],
                this.element ? this.element.getAttribute(t) : null,
                0
              );
              return /^[\-0-9\.]+$/.test(e) && (e = parseFloat(e)), e;
            }
            _defaultSetter(t, e, i) {
              i.setAttribute(e, t);
            }
            add(t) {
              let e;
              let i = this.renderer,
                s = this.element;
              return (
                t && (this.parentGroup = t),
                void 0 !== this.textStr &&
                  "text" === this.element.nodeName &&
                  i.buildText(this),
                (this.added = !0),
                (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()),
                e || (t ? t.element : i.box).appendChild(s),
                this.onAdd && this.onAdd(),
                this
              );
            }
            addClass(t, e) {
              let i = e ? "" : this.attr("class") || "";
              return (
                (t = (t || "")
                  .split(/ /g)
                  .reduce(
                    function (t, e) {
                      return -1 === i.indexOf(e) && t.push(e), t;
                    },
                    i ? [i] : []
                  )
                  .join(" ")) !== i && this.attr("class", t),
                this
              );
            }
            afterSetters() {
              this.doTransform &&
                (this.updateTransform(), (this.doTransform = !1));
            }
            align(t, e, i) {
              let s, o, r, n, a;
              let h = {},
                l = this.renderer,
                d = l.alignedObjects;
              t
                ? ((this.alignOptions = t),
                  (this.alignByTranslate = e),
                  (!i || C(i)) &&
                    ((this.alignTo = r = i || "renderer"),
                    y(d, this),
                    d.push(this),
                    (i = void 0)))
                : ((t = this.alignOptions),
                  (e = this.alignByTranslate),
                  (r = this.alignTo)),
                (i = A(
                  i,
                  l[r],
                  "scrollablePlotBox" === r ? l.plotBox : void 0,
                  l
                ));
              let c = t.align,
                p = t.verticalAlign;
              return (
                (s = (i.x || 0) + (t.x || 0)),
                (o = (i.y || 0) + (t.y || 0)),
                "right" === c ? (n = 1) : "center" === c && (n = 2),
                n && (s += (i.width - (t.width || 0)) / n),
                (h[e ? "translateX" : "x"] = Math.round(s)),
                "bottom" === p ? (a = 1) : "middle" === p && (a = 2),
                a && (o += (i.height - (t.height || 0)) / a),
                (h[e ? "translateY" : "y"] = Math.round(o)),
                this[this.placed ? "animate" : "attr"](h),
                (this.placed = !0),
                (this.alignAttr = h),
                this
              );
            }
            alignSetter(t) {
              let e = { left: "start", center: "middle", right: "end" };
              e[t] &&
                ((this.alignValue = t),
                this.element.setAttribute("text-anchor", e[t]));
            }
            animate(t, e, i) {
              let s = r(A(e, this.renderer.globalAnimation, !0)),
                n = s.defer;
              return (
                h.hidden && (s.duration = 0),
                0 !== s.duration
                  ? (i && (s.complete = i),
                    L(() => {
                      this.element && o(this, t, s);
                    }, n))
                  : (this.attr(t, void 0, i || s.complete),
                    T(
                      t,
                      function (t, e) {
                        s.step &&
                          s.step.call(this, t, { prop: e, pos: 1, elem: this });
                      },
                      this
                    )),
                this
              );
            }
            applyTextOutline(t) {
              let e = this.element,
                s = -1 !== t.indexOf("contrast");
              s &&
                (t = t.replace(
                  /contrast/g,
                  this.renderer.getContrast(e.style.fill)
                ));
              let o = t.split(" "),
                r = o[o.length - 1],
                n = o[0];
              if (n && "none" !== n && i.svg) {
                (this.fakeTS = !0),
                  (n = n.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                    return 2 * Number(e) + i;
                  })),
                  this.removeTextOutline();
                let t = h.createElementNS(c, "tspan");
                g(t, {
                  class: "highcharts-text-outline",
                  fill: r,
                  stroke: r,
                  "stroke-width": n,
                  "stroke-linejoin": "round",
                });
                let i = e.querySelector("textPath") || e;
                [].forEach.call(i.childNodes, (e) => {
                  let i = e.cloneNode(!0);
                  i.removeAttribute &&
                    ["fill", "stroke", "stroke-width", "stroke"].forEach((t) =>
                      i.removeAttribute(t)
                    ),
                    t.appendChild(i);
                });
                let s = 0;
                [].forEach.call(i.querySelectorAll("text tspan"), (t) => {
                  s += Number(t.getAttribute("dy"));
                });
                let o = h.createElementNS(c, "tspan");
                (o.textContent = "​"),
                  g(o, { x: Number(e.getAttribute("x")), dy: -s }),
                  t.appendChild(o),
                  i.insertBefore(t, i.firstChild);
              }
            }
            attr(t, e, i, s) {
              let o = this.element,
                r = D.symbolCustomAttribs,
                a,
                h,
                l = this,
                d;
              return (
                "string" == typeof t &&
                  void 0 !== e &&
                  ((a = t), ((t = {})[a] = e)),
                "string" == typeof t
                  ? (l = (this[t + "Getter"] || this._defaultGetter).call(
                      this,
                      t,
                      o
                    ))
                  : (T(
                      t,
                      function (e, i) {
                        (d = !1),
                          s || n(this, i),
                          this.symbolName &&
                            -1 !== r.indexOf(i) &&
                            (h || (this.symbolAttr(t), (h = !0)), (d = !0)),
                          this.rotation &&
                            ("x" === i || "y" === i) &&
                            (this.doTransform = !0),
                          d ||
                            (this[i + "Setter"] || this._defaultSetter).call(
                              this,
                              e,
                              i,
                              o
                            );
                      },
                      this
                    ),
                    this.afterSetters()),
                i && i.call(this),
                l
              );
            }
            clip(t) {
              return this.attr(
                "clip-path",
                t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none"
              );
            }
            crisp(t, e) {
              e = e || t.strokeWidth || 0;
              let i = (Math.round(e) % 2) / 2;
              return (
                (t.x = Math.floor(t.x || this.x || 0) + i),
                (t.y = Math.floor(t.y || this.y || 0) + i),
                (t.width = Math.floor((t.width || this.width || 0) - 2 * i)),
                (t.height = Math.floor((t.height || this.height || 0) - 2 * i)),
                x(t.strokeWidth) && (t.strokeWidth = e),
                t
              );
            }
            complexColor(t, i, s) {
              let o = this.renderer,
                r,
                n,
                a,
                h,
                l,
                d,
                c,
                p,
                u,
                g,
                f = [],
                m;
              v(
                this.renderer,
                "complexColor",
                { args: arguments },
                function () {
                  if (
                    (t.radialGradient
                      ? (n = "radialGradient")
                      : t.linearGradient && (n = "linearGradient"),
                    n)
                  ) {
                    if (
                      ((a = t[n]),
                      (l = o.gradients),
                      (d = t.stops),
                      (u = s.radialReference),
                      k(a) &&
                        (t[n] = a =
                          {
                            x1: a[0],
                            y1: a[1],
                            x2: a[2],
                            y2: a[3],
                            gradientUnits: "userSpaceOnUse",
                          }),
                      "radialGradient" === n &&
                        u &&
                        !x(a.gradientUnits) &&
                        ((h = a),
                        (a = w(a, o.getRadialAttr(u, h), {
                          gradientUnits: "userSpaceOnUse",
                        }))),
                      T(a, function (t, e) {
                        "id" !== e && f.push(e, t);
                      }),
                      T(d, function (t) {
                        f.push(t);
                      }),
                      l[(f = f.join(","))])
                    )
                      g = l[f].attr("id");
                    else {
                      a.id = g = O();
                      let t = (l[f] = o.createElement(n).attr(a).add(o.defs));
                      (t.radAttr = h),
                        (t.stops = []),
                        d.forEach(function (i) {
                          0 === i[1].indexOf("rgba")
                            ? ((c = (r = e.parse(i[1])).get("rgb")),
                              (p = r.get("a")))
                            : ((c = i[1]), (p = 1));
                          let s = o
                            .createElement("stop")
                            .attr({
                              offset: i[0],
                              "stop-color": c,
                              "stop-opacity": p,
                            })
                            .add(t);
                          t.stops.push(s);
                        });
                    }
                    (m = "url(" + o.url + "#" + g + ")"),
                      s.setAttribute(i, m),
                      (s.gradient = f),
                      (t.toString = function () {
                        return m;
                      });
                  }
                }
              );
            }
            css(t) {
              let e = this.styles,
                i = {},
                s = this.element,
                o,
                r = !e;
              if (
                (e &&
                  T(t, function (t, s) {
                    e && e[s] !== t && ((i[s] = t), (r = !0));
                  }),
                r)
              ) {
                e && (t = b(e, i)),
                  null === t.width || "auto" === t.width
                    ? delete this.textWidth
                    : "text" === s.nodeName.toLowerCase() &&
                      t.width &&
                      (o = this.textWidth = P(t.width)),
                  (this.styles = t),
                  o && !d && this.renderer.forExport && delete t.width;
                let r = w(t);
                s.namespaceURI === this.SVG_NS &&
                  (["textOutline", "textOverflow", "width"].forEach(
                    (t) => r && delete r[t]
                  ),
                  r.color && (r.fill = r.color)),
                  m(s, r);
              }
              return (
                this.added &&
                  ("text" === this.element.nodeName &&
                    this.renderer.buildText(this),
                  t.textOutline && this.applyTextOutline(t.textOutline)),
                this
              );
            }
            dashstyleSetter(t) {
              let e,
                i = this["stroke-width"];
              if (("inherit" === i && (i = 1), (t = t && t.toLowerCase()))) {
                let s = t
                  .replace("shortdashdotdot", "3,1,1,1,1,1,")
                  .replace("shortdashdot", "3,1,1,1")
                  .replace("shortdot", "1,1,")
                  .replace("shortdash", "3,1,")
                  .replace("longdash", "8,3,")
                  .replace(/dot/g, "1,3,")
                  .replace("dash", "4,3,")
                  .replace(/,$/, "")
                  .split(",");
                for (e = s.length; e--; ) s[e] = "" + P(s[e]) * A(i, NaN);
                (t = s.join(",").replace(/NaN/g, "none")),
                  this.element.setAttribute("stroke-dasharray", t);
              }
            }
            destroy() {
              let t = this,
                e = t.element || {},
                i = t.renderer,
                s = e.ownerSVGElement,
                o = ("SPAN" === e.nodeName && t.parentGroup) || void 0,
                r,
                a;
              if (
                ((e.onclick =
                  e.onmouseout =
                  e.onmouseover =
                  e.onmousemove =
                  e.point =
                    null),
                n(t),
                t.clipPath && s)
              ) {
                let e = t.clipPath;
                [].forEach.call(
                  s.querySelectorAll("[clip-path],[CLIP-PATH]"),
                  function (t) {
                    t.getAttribute("clip-path").indexOf(e.element.id) > -1 &&
                      t.removeAttribute("clip-path");
                  }
                ),
                  (t.clipPath = e.destroy());
              }
              if (((t.connector = t.connector?.destroy()), t.stops)) {
                for (a = 0; a < t.stops.length; a++) t.stops[a].destroy();
                (t.stops.length = 0), (t.stops = void 0);
              }
              for (
                t.safeRemoveChild(e);
                o && o.div && 0 === o.div.childNodes.length;

              )
                (r = o.parentGroup),
                  t.safeRemoveChild(o.div),
                  delete o.div,
                  (o = r);
              t.alignTo && y(i.alignedObjects, t),
                T(t, function (e, i) {
                  t[i] &&
                    t[i].parentGroup === t &&
                    t[i].destroy &&
                    t[i].destroy(),
                    delete t[i];
                });
            }
            dSetter(t, e, i) {
              k(t) &&
                ("string" == typeof t[0] &&
                  (t = this.renderer.pathToSegments(t)),
                (this.pathArray = t),
                (t = t.reduce(
                  (t, e, i) =>
                    e && e.join
                      ? (i ? t + " " : "") + e.join(" ")
                      : (e || "").toString(),
                  ""
                ))),
                /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"),
                this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
            }
            fillSetter(t, e, i) {
              "string" == typeof t
                ? i.setAttribute(e, t)
                : t && this.complexColor(t, e, i);
            }
            hrefSetter(t, e, i) {
              i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
            }
            getBBox(t, e) {
              let i, s, o, r, n;
              let {
                  alignValue: h,
                  element: l,
                  renderer: d,
                  styles: c,
                  textStr: p,
                } = this,
                { cache: u, cacheKeys: g } = d,
                f = l.namespaceURI === this.SVG_NS,
                y = A(e, this.rotation, 0),
                v = d.styledMode
                  ? l && D.prototype.getStyle.call(l, "font-size")
                  : c && c.fontSize;
              if (
                (x(p) &&
                  (-1 === (n = p.toString()).indexOf("<") &&
                    (n = n.replace(/[0-9]/g, "0")),
                  (n += [
                    "",
                    d.rootFontSize,
                    v,
                    y,
                    this.textWidth,
                    h,
                    c && c.textOverflow,
                    c && c.fontWeight,
                  ].join(","))),
                n && !t && (i = u[n]),
                !i)
              ) {
                if (f || d.forExport) {
                  try {
                    (r =
                      this.fakeTS &&
                      function (t) {
                        let e = l.querySelector(".highcharts-text-outline");
                        e && m(e, { display: t });
                      }),
                      S(r) && r("none"),
                      (i = l.getBBox
                        ? b({}, l.getBBox())
                        : {
                            width: l.offsetWidth,
                            height: l.offsetHeight,
                            x: 0,
                            y: 0,
                          }),
                      S(r) && r("");
                  } catch (t) {}
                  (!i || i.width < 0) &&
                    (i = { x: 0, y: 0, width: 0, height: 0 });
                } else i = this.htmlGetBBox();
                if (
                  ((s = i.width),
                  (o = i.height),
                  f &&
                    (i.height = o =
                      { "11px,17": 14, "13px,20": 16 }[
                        `${v || ""},${Math.round(o)}`
                      ] || o),
                  y)
                ) {
                  let t = Number(l.getAttribute("y") || 0) - i.y,
                    e = { right: 1, center: 0.5 }[h || 0] || 0,
                    r = y * a,
                    n = (y - 90) * a,
                    d = s * Math.cos(r),
                    c = s * Math.sin(r),
                    p = Math.cos(n),
                    u = Math.sin(n),
                    g = i.x + e * (s - d),
                    f = i.y + t - e * c,
                    m = g + t * p,
                    x = m + d,
                    b = x - o * p,
                    v = b - d,
                    k = f + t * u,
                    S = k + c,
                    M = S - o * u,
                    C = M - c;
                  (i.x = Math.min(m, x, b, v)),
                    (i.y = Math.min(k, S, M, C)),
                    (i.width = Math.max(m, x, b, v) - i.x),
                    (i.height = Math.max(k, S, M, C) - i.y);
                }
              }
              if (n && ("" === p || i.height > 0)) {
                for (; g.length > 250; ) delete u[g.shift()];
                u[n] || g.push(n), (u[n] = i);
              }
              return i;
            }
            getStyle(t) {
              return p
                .getComputedStyle(this.element || this, "")
                .getPropertyValue(t);
            }
            hasClass(t) {
              return -1 !== ("" + this.attr("class")).split(" ").indexOf(t);
            }
            hide() {
              return this.attr({ visibility: "hidden" });
            }
            htmlGetBBox() {
              return { height: 0, width: 0, x: 0, y: 0 };
            }
            init(t, e) {
              (this.element =
                "span" === e ? f(e) : h.createElementNS(this.SVG_NS, e)),
                (this.renderer = t),
                v(this, "afterInit");
            }
            on(t, e) {
              let { onEvents: i } = this;
              return i[t] && i[t](), (i[t] = u(this.element, t, e)), this;
            }
            opacitySetter(t, e, i) {
              let s = Number(Number(t).toFixed(3));
              (this.opacity = s), i.setAttribute(e, s);
            }
            removeClass(t) {
              return this.attr(
                "class",
                ("" + this.attr("class"))
                  .replace(C(t) ? RegExp(`(^| )${t}( |$)`) : t, " ")
                  .replace(/ +/g, " ")
                  .trim()
              );
            }
            removeTextOutline() {
              let t = this.element.querySelector(
                "tspan.highcharts-text-outline"
              );
              t && this.safeRemoveChild(t);
            }
            safeRemoveChild(t) {
              let e = t.parentNode;
              e && e.removeChild(t);
            }
            setRadialReference(t) {
              let e =
                this.element.gradient &&
                this.renderer.gradients[this.element.gradient];
              return (
                (this.element.radialReference = t),
                e &&
                  e.radAttr &&
                  e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
                this
              );
            }
            setTextPath(t, e) {
              e = w(
                !0,
                {
                  enabled: !0,
                  attributes: {
                    dy: -5,
                    startOffset: "50%",
                    textAnchor: "middle",
                  },
                },
                e
              );
              let i = this.renderer.url,
                s = this.text || this,
                o = s.textPath,
                { attributes: r, enabled: n } = e;
              if (((t = t || (o && o.path)), o && o.undo(), t && n)) {
                let e = u(s, "afterModifyTree", (e) => {
                  if (t && n) {
                    let o = t.attr("id");
                    o || t.attr("id", (o = O()));
                    let n = { x: 0, y: 0 };
                    x(r.dx) && ((n.dx = r.dx), delete r.dx),
                      x(r.dy) && ((n.dy = r.dy), delete r.dy),
                      s.attr(n),
                      this.attr({ transform: "" }),
                      this.box && (this.box = this.box.destroy());
                    let a = e.nodes.slice(0);
                    (e.nodes.length = 0),
                      (e.nodes[0] = {
                        tagName: "textPath",
                        attributes: b(r, {
                          "text-anchor": r.textAnchor,
                          href: `${i}#${o}`,
                        }),
                        children: a,
                      });
                  }
                });
                s.textPath = { path: t, undo: e };
              } else s.attr({ dx: 0, dy: 0 }), delete s.textPath;
              return (
                this.added && ((s.textCache = ""), this.renderer.buildText(s)),
                this
              );
            }
            shadow(t) {
              let { renderer: e } = this,
                i = w(
                  this.parentGroup?.rotation === 90
                    ? { offsetX: -1, offsetY: -1 }
                    : {},
                  M(t) ? t : {}
                ),
                s = e.shadowDefinition(i);
              return this.attr({ filter: t ? `url(${e.url}#${s})` : "none" });
            }
            show(t = !0) {
              return this.attr({ visibility: t ? "inherit" : "visible" });
            }
            "stroke-widthSetter"(t, e, i) {
              (this[e] = t), i.setAttribute(e, t);
            }
            strokeWidth() {
              if (!this.renderer.styledMode) return this["stroke-width"] || 0;
              let t = this.getStyle("stroke-width"),
                e = 0,
                i;
              return (
                t.indexOf("px") === t.length - 2
                  ? (e = P(t))
                  : "" !== t &&
                    (g((i = h.createElementNS(c, "rect")), {
                      width: t,
                      "stroke-width": 0,
                    }),
                    this.element.parentNode.appendChild(i),
                    (e = i.getBBox().width),
                    i.parentNode.removeChild(i)),
                e
              );
            }
            symbolAttr(t) {
              let e = this;
              D.symbolCustomAttribs.forEach(function (i) {
                e[i] = A(t[i], e[i]);
              }),
                e.attr({
                  d: e.renderer.symbols[e.symbolName](
                    e.x,
                    e.y,
                    e.width,
                    e.height,
                    e
                  ),
                });
            }
            textSetter(t) {
              t !== this.textStr &&
                (delete this.textPxLength,
                (this.textStr = t),
                this.added && this.renderer.buildText(this));
            }
            titleSetter(t) {
              let e = this.element,
                i =
                  e.getElementsByTagName("title")[0] ||
                  h.createElementNS(this.SVG_NS, "title");
              e.insertBefore
                ? e.insertBefore(i, e.firstChild)
                : e.appendChild(i),
                (i.textContent = String(A(t, ""))
                  .replace(/<[^>]*>/g, "")
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">"));
            }
            toFront() {
              let t = this.element;
              return t.parentNode.appendChild(t), this;
            }
            translate(t, e) {
              return this.attr({ translateX: t, translateY: e });
            }
            updateTransform() {
              let {
                  element: t,
                  matrix: e,
                  rotation: i = 0,
                  scaleX: s,
                  scaleY: o,
                  translateX: r = 0,
                  translateY: n = 0,
                } = this,
                a = ["translate(" + r + "," + n + ")"];
              x(e) && a.push("matrix(" + e.join(",") + ")"),
                i &&
                  a.push(
                    "rotate(" +
                      i +
                      " " +
                      A(this.rotationOriginX, t.getAttribute("x"), 0) +
                      " " +
                      A(this.rotationOriginY, t.getAttribute("y") || 0) +
                      ")"
                  ),
                (x(s) || x(o)) &&
                  a.push("scale(" + A(s, 1) + " " + A(o, 1) + ")"),
                a.length &&
                  !(this.text || this).textPath &&
                  t.setAttribute("transform", a.join(" "));
            }
            visibilitySetter(t, e, i) {
              "inherit" === t
                ? i.removeAttribute(e)
                : this[e] !== t && i.setAttribute(e, t),
                (this[e] = t);
            }
            xGetter(t) {
              return (
                "circle" === this.element.nodeName &&
                  ("x" === t ? (t = "cx") : "y" === t && (t = "cy")),
                this._defaultGetter(t)
              );
            }
            zIndexSetter(t, e) {
              let i = this.renderer,
                s = this.parentGroup,
                o = s || i,
                r = o.element || i.box,
                n = this.element,
                a = r === i.box,
                h,
                l,
                d,
                c = !1,
                p,
                u = this.added,
                g;
              if (
                (x(t)
                  ? (n.setAttribute("data-z-index", t),
                    (t = +t),
                    this[e] === t && (u = !1))
                  : x(this[e]) && n.removeAttribute("data-z-index"),
                (this[e] = t),
                u)
              ) {
                for (
                  (t = this.zIndex) && s && (s.handleZ = !0),
                    g = (h = r.childNodes).length - 1;
                  g >= 0 && !c;
                  g--
                )
                  (p = !x((d = (l = h[g]).getAttribute("data-z-index")))),
                    l !== n &&
                      (t < 0 && p && !a && !g
                        ? (r.insertBefore(n, h[g]), (c = !0))
                        : (P(d) <= t || (p && (!x(t) || t >= 0))) &&
                          (r.insertBefore(n, h[g + 1]), (c = !0)));
                c || (r.insertBefore(n, h[a ? 3 : 0]), (c = !0));
              }
              return c;
            }
          }
          return (
            (D.symbolCustomAttribs = [
              "anchorX",
              "anchorY",
              "clockwise",
              "end",
              "height",
              "innerR",
              "r",
              "start",
              "width",
              "x",
              "y",
            ]),
            (D.prototype.strokeSetter = D.prototype.fillSetter),
            (D.prototype.yGetter = D.prototype.xGetter),
            (D.prototype.matrixSetter =
              D.prototype.rotationOriginXSetter =
              D.prototype.rotationOriginYSetter =
              D.prototype.rotationSetter =
              D.prototype.scaleXSetter =
              D.prototype.scaleYSetter =
              D.prototype.translateXSetter =
              D.prototype.translateYSetter =
              D.prototype.verticalAlignSetter =
                function (t, e) {
                  (this[e] = t), (this.doTransform = !0);
                }),
            D
          );
        }
      ),
      i(
        e,
        "Core/Renderer/RendererRegistry.js",
        [e["Core/Globals.js"]],
        function (t) {
          var e, i;
          let s;
          return (
            ((i = e || (e = {})).rendererTypes = {}),
            (i.getRendererType = function (t = s) {
              return i.rendererTypes[t] || i.rendererTypes[s];
            }),
            (i.registerRendererType = function (e, o, r) {
              (i.rendererTypes[e] = o),
                (!s || r) && ((s = e), (t.Renderer = o));
            }),
            e
          );
        }
      ),
      i(
        e,
        "Core/Renderer/SVG/SVGLabel.js",
        [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]],
        function (t, e) {
          let {
            defined: i,
            extend: s,
            isNumber: o,
            merge: r,
            pick: n,
            removeEvent: a,
          } = e;
          class h extends t {
            constructor(t, e, i, s, o, r, n, a, l, d) {
              let c;
              super(),
                (this.paddingLeftSetter = this.paddingSetter),
                (this.paddingRightSetter = this.paddingSetter),
                this.init(t, "g"),
                (this.textStr = e),
                (this.x = i),
                (this.y = s),
                (this.anchorX = r),
                (this.anchorY = n),
                (this.baseline = l),
                (this.className = d),
                this.addClass(
                  "button" === d ? "highcharts-no-tooltip" : "highcharts-label"
                ),
                d && this.addClass("highcharts-" + d),
                (this.text = t.text(void 0, 0, 0, a).attr({ zIndex: 1 })),
                "string" == typeof o &&
                  ((c = /^url\((.*?)\)$/.test(o)) ||
                    this.renderer.symbols[o]) &&
                  (this.symbolKey = o),
                (this.bBox = h.emptyBBox),
                (this.padding = 3),
                (this.baselineOffset = 0),
                (this.needsBox = t.styledMode || c),
                (this.deferredAttr = {}),
                (this.alignFactor = 0);
            }
            alignSetter(t) {
              let e = { left: 0, center: 0.5, right: 1 }[t];
              e !== this.alignFactor &&
                ((this.alignFactor = e),
                this.bBox &&
                  o(this.xSetting) &&
                  this.attr({ x: this.xSetting }));
            }
            anchorXSetter(t, e) {
              (this.anchorX = t),
                this.boxAttr(
                  e,
                  Math.round(t) - this.getCrispAdjust() - this.xSetting
                );
            }
            anchorYSetter(t, e) {
              (this.anchorY = t), this.boxAttr(e, t - this.ySetting);
            }
            boxAttr(t, e) {
              this.box ? this.box.attr(t, e) : (this.deferredAttr[t] = e);
            }
            css(e) {
              if (e) {
                let t = {};
                (e = r(e)),
                  h.textProps.forEach((i) => {
                    void 0 !== e[i] && ((t[i] = e[i]), delete e[i]);
                  }),
                  this.text.css(t),
                  "fontSize" in t || "fontWeight" in t
                    ? this.updateTextPadding()
                    : ("width" in t || "textOverflow" in t) &&
                      this.updateBoxSize();
              }
              return t.prototype.css.call(this, e);
            }
            destroy() {
              a(this.element, "mouseenter"),
                a(this.element, "mouseleave"),
                this.text && this.text.destroy(),
                this.box && (this.box = this.box.destroy()),
                t.prototype.destroy.call(this);
            }
            fillSetter(t, e) {
              t && (this.needsBox = !0), (this.fill = t), this.boxAttr(e, t);
            }
            getBBox() {
              this.textStr &&
                0 === this.bBox.width &&
                0 === this.bBox.height &&
                this.updateBoxSize();
              let t = this.padding,
                e = n(this.paddingLeft, t);
              return {
                width: this.width || 0,
                height: this.height || 0,
                x: this.bBox.x - e,
                y: this.bBox.y - t,
              };
            }
            getCrispAdjust() {
              return this.renderer.styledMode && this.box
                ? (this.box.strokeWidth() % 2) / 2
                : ((this["stroke-width"]
                    ? parseInt(this["stroke-width"], 10)
                    : 0) %
                    2) /
                    2;
            }
            heightSetter(t) {
              this.heightSetting = t;
            }
            onAdd() {
              this.text.add(this),
                this.attr({
                  text: n(this.textStr, ""),
                  x: this.x || 0,
                  y: this.y || 0,
                }),
                this.box &&
                  i(this.anchorX) &&
                  this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
            }
            paddingSetter(t, e) {
              o(t)
                ? t !== this[e] && ((this[e] = t), this.updateTextPadding())
                : (this[e] = void 0);
            }
            rSetter(t, e) {
              this.boxAttr(e, t);
            }
            strokeSetter(t, e) {
              (this.stroke = t), this.boxAttr(e, t);
            }
            "stroke-widthSetter"(t, e) {
              t && (this.needsBox = !0),
                (this["stroke-width"] = t),
                this.boxAttr(e, t);
            }
            "text-alignSetter"(t) {
              this.textAlign = t;
            }
            textSetter(t) {
              void 0 !== t && this.text.attr({ text: t }),
                this.updateTextPadding();
            }
            updateBoxSize() {
              let t;
              let e = this.text,
                r = {},
                n = this.padding,
                a = (this.bBox =
                  (!o(this.widthSetting) ||
                    !o(this.heightSetting) ||
                    this.textAlign) &&
                  i(e.textStr)
                    ? e.getBBox()
                    : h.emptyBBox);
              (this.width = this.getPaddedWidth()),
                (this.height = (this.heightSetting || a.height || 0) + 2 * n);
              let l = this.renderer.fontMetrics(e);
              if (
                ((this.baselineOffset =
                  n +
                  Math.min(
                    (this.text.firstLineMetrics || l).b,
                    a.height || 1 / 0
                  )),
                this.heightSetting &&
                  (this.baselineOffset += (this.heightSetting - l.h) / 2),
                this.needsBox && !e.textPath)
              ) {
                if (!this.box) {
                  let t = (this.box = this.symbolKey
                    ? this.renderer.symbol(this.symbolKey)
                    : this.renderer.rect());
                  t.addClass(
                    ("button" === this.className
                      ? ""
                      : "highcharts-label-box") +
                      (this.className
                        ? " highcharts-" + this.className + "-box"
                        : "")
                  ),
                    t.add(this);
                }
                (t = this.getCrispAdjust()),
                  (r.x = t),
                  (r.y = (this.baseline ? -this.baselineOffset : 0) + t),
                  (r.width = Math.round(this.width)),
                  (r.height = Math.round(this.height)),
                  this.box.attr(s(r, this.deferredAttr)),
                  (this.deferredAttr = {});
              }
            }
            updateTextPadding() {
              let t = this.text;
              if (!t.textPath) {
                this.updateBoxSize();
                let e = this.baseline ? 0 : this.baselineOffset,
                  s = n(this.paddingLeft, this.padding);
                i(this.widthSetting) &&
                  this.bBox &&
                  ("center" === this.textAlign || "right" === this.textAlign) &&
                  (s +=
                    { center: 0.5, right: 1 }[this.textAlign] *
                    (this.widthSetting - this.bBox.width)),
                  (s !== t.x || e !== t.y) &&
                    (t.attr("x", s),
                    t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)),
                    void 0 !== e && t.attr("y", e)),
                  (t.x = s),
                  (t.y = e);
              }
            }
            widthSetter(t) {
              this.widthSetting = o(t) ? t : void 0;
            }
            getPaddedWidth() {
              let t = this.padding,
                e = n(this.paddingLeft, t),
                i = n(this.paddingRight, t);
              return (this.widthSetting || this.bBox.width || 0) + e + i;
            }
            xSetter(t) {
              (this.x = t),
                this.alignFactor &&
                  ((t -= this.alignFactor * this.getPaddedWidth()),
                  (this["forceAnimate:x"] = !0)),
                (this.xSetting = Math.round(t)),
                this.attr("translateX", this.xSetting);
            }
            ySetter(t) {
              (this.ySetting = this.y = Math.round(t)),
                this.attr("translateY", this.ySetting);
            }
          }
          return (
            (h.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }),
            (h.textProps = [
              "color",
              "direction",
              "fontFamily",
              "fontSize",
              "fontStyle",
              "fontWeight",
              "lineHeight",
              "textAlign",
              "textDecoration",
              "textOutline",
              "textOverflow",
              "whiteSpace",
              "width",
            ]),
            h
          );
        }
      ),
      i(
        e,
        "Core/Renderer/SVG/Symbols.js",
        [e["Core/Utilities.js"]],
        function (t) {
          let { defined: e, isNumber: i, pick: s } = t;
          function o(t, i, o, r, n) {
            let a = [];
            if (n) {
              let h = n.start || 0,
                l = s(n.r, o),
                d = s(n.r, r || o),
                c = 0.001 > Math.abs((n.end || 0) - h - 2 * Math.PI),
                p = (n.end || 0) - 0.001,
                u = n.innerR,
                g = s(n.open, c),
                f = Math.cos(h),
                m = Math.sin(h),
                x = Math.cos(p),
                y = Math.sin(p),
                b = s(n.longArc, p - h - Math.PI < 0.001 ? 0 : 1),
                v = ["A", l, d, 0, b, s(n.clockwise, 1), t + l * x, i + d * y];
              (v.params = { start: h, end: p, cx: t, cy: i }),
                a.push(["M", t + l * f, i + d * m], v),
                e(u) &&
                  (((v = [
                    "A",
                    u,
                    u,
                    0,
                    b,
                    e(n.clockwise) ? 1 - n.clockwise : 0,
                    t + u * f,
                    i + u * m,
                  ]).params = { start: p, end: h, cx: t, cy: i }),
                  a.push(
                    g
                      ? ["M", t + u * x, i + u * y]
                      : ["L", t + u * x, i + u * y],
                    v
                  )),
                g || a.push(["Z"]);
            }
            return a;
          }
          function r(t, e, i, s, o) {
            return o && o.r
              ? n(t, e, i, s, o)
              : [
                  ["M", t, e],
                  ["L", t + i, e],
                  ["L", t + i, e + s],
                  ["L", t, e + s],
                  ["Z"],
                ];
          }
          function n(t, e, i, s, o) {
            let r = o?.r || 0;
            return [
              ["M", t + r, e],
              ["L", t + i - r, e],
              ["A", r, r, 0, 0, 1, t + i, e + r],
              ["L", t + i, e + s - r],
              ["A", r, r, 0, 0, 1, t + i - r, e + s],
              ["L", t + r, e + s],
              ["A", r, r, 0, 0, 1, t, e + s - r],
              ["L", t, e + r],
              ["A", r, r, 0, 0, 1, t + r, e],
              ["Z"],
            ];
          }
          return {
            arc: o,
            callout: function (t, e, s, o, r) {
              let a = Math.min((r && r.r) || 0, s, o),
                h = a + 6,
                l = r && r.anchorX,
                d = (r && r.anchorY) || 0,
                c = n(t, e, s, o, { r: a });
              if (!i(l) || (l < s && l > 0 && d < o && d > 0)) return c;
              if (t + l > s - h) {
                if (d > e + h && d < e + o - h)
                  c.splice(
                    3,
                    1,
                    ["L", t + s, d - 6],
                    ["L", t + s + 6, d],
                    ["L", t + s, d + 6],
                    ["L", t + s, e + o - a]
                  );
                else if (l < s) {
                  let i = d < e + h,
                    r = i ? e : e + o;
                  c.splice(i ? 2 : 5, 0, ["L", l, d], ["L", t + s - a, r]);
                } else
                  c.splice(
                    3,
                    1,
                    ["L", t + s, o / 2],
                    ["L", l, d],
                    ["L", t + s, o / 2],
                    ["L", t + s, e + o - a]
                  );
              } else if (t + l < h) {
                if (d > e + h && d < e + o - h)
                  c.splice(
                    7,
                    1,
                    ["L", t, d + 6],
                    ["L", t - 6, d],
                    ["L", t, d - 6],
                    ["L", t, e + a]
                  );
                else if (l > 0) {
                  let i = d < e + h,
                    s = i ? e : e + o;
                  c.splice(i ? 1 : 6, 0, ["L", l, d], ["L", t + a, s]);
                } else
                  c.splice(
                    7,
                    1,
                    ["L", t, o / 2],
                    ["L", l, d],
                    ["L", t, o / 2],
                    ["L", t, e + a]
                  );
              } else
                d > o && l < s - h
                  ? c.splice(
                      5,
                      1,
                      ["L", l + 6, e + o],
                      ["L", l, e + o + 6],
                      ["L", l - 6, e + o],
                      ["L", t + a, e + o]
                    )
                  : d < 0 &&
                    l > h &&
                    c.splice(
                      1,
                      1,
                      ["L", l - 6, e],
                      ["L", l, e - 6],
                      ["L", l + 6, e],
                      ["L", s - a, e]
                    );
              return c;
            },
            circle: function (t, e, i, s) {
              return o(t + i / 2, e + s / 2, i / 2, s / 2, {
                start: 0.5 * Math.PI,
                end: 2.5 * Math.PI,
                open: !1,
              });
            },
            diamond: function (t, e, i, s) {
              return [
                ["M", t + i / 2, e],
                ["L", t + i, e + s / 2],
                ["L", t + i / 2, e + s],
                ["L", t, e + s / 2],
                ["Z"],
              ];
            },
            rect: r,
            roundedRect: n,
            square: r,
            triangle: function (t, e, i, s) {
              return [
                ["M", t + i / 2, e],
                ["L", t + i, e + s],
                ["L", t, e + s],
                ["Z"],
              ];
            },
            "triangle-down": function (t, e, i, s) {
              return [
                ["M", t, e],
                ["L", t + i, e],
                ["L", t + i / 2, e + s],
                ["Z"],
              ];
            },
          };
        }
      ),
      i(
        e,
        "Core/Renderer/SVG/TextBuilder.js",
        [
          e["Core/Renderer/HTML/AST.js"],
          e["Core/Globals.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { doc: s, SVG_NS: o, win: r } = e,
            {
              attr: n,
              extend: a,
              fireEvent: h,
              isString: l,
              objectEach: d,
              pick: c,
            } = i;
          return class {
            constructor(t) {
              let e = t.styles;
              (this.renderer = t.renderer),
                (this.svgElement = t),
                (this.width = t.textWidth),
                (this.textLineHeight = e && e.lineHeight),
                (this.textOutline = e && e.textOutline),
                (this.ellipsis = !!(e && "ellipsis" === e.textOverflow)),
                (this.noWrap = !!(e && "nowrap" === e.whiteSpace));
            }
            buildSVG() {
              let e = this.svgElement,
                i = e.element,
                o = e.renderer,
                r = c(e.textStr, "").toString(),
                n = -1 !== r.indexOf("<"),
                a = i.childNodes,
                h = !e.added && o.box,
                d = [
                  r,
                  this.ellipsis,
                  this.noWrap,
                  this.textLineHeight,
                  this.textOutline,
                  e.getStyle("font-size"),
                  this.width,
                ].join(",");
              if (d !== e.textCache) {
                (e.textCache = d), delete e.actualWidth;
                for (let t = a.length; t--; ) i.removeChild(a[t]);
                if (
                  n ||
                  this.ellipsis ||
                  this.width ||
                  e.textPath ||
                  (-1 !== r.indexOf(" ") &&
                    (!this.noWrap || /<br.*?>/g.test(r)))
                ) {
                  if ("" !== r) {
                    h && h.appendChild(i);
                    let s = new t(r);
                    this.modifyTree(s.nodes),
                      s.addToDOM(i),
                      this.modifyDOM(),
                      this.ellipsis &&
                        -1 !== (i.textContent || "").indexOf("…") &&
                        e.attr(
                          "title",
                          this.unescapeEntities(e.textStr || "", [
                            "&lt;",
                            "&gt;",
                          ])
                        ),
                      h && h.removeChild(i);
                  }
                } else
                  i.appendChild(s.createTextNode(this.unescapeEntities(r)));
                l(this.textOutline) &&
                  e.applyTextOutline &&
                  e.applyTextOutline(this.textOutline);
              }
            }
            modifyDOM() {
              let t;
              let e = this.svgElement,
                i = n(e.element, "x");
              for (e.firstLineMetrics = void 0; (t = e.element.firstChild); )
                if (/^[\s\u200B]*$/.test(t.textContent || " "))
                  e.element.removeChild(t);
                else break;
              [].forEach.call(
                e.element.querySelectorAll("tspan.highcharts-br"),
                (t, s) => {
                  t.nextSibling &&
                    t.previousSibling &&
                    (0 === s &&
                      1 === t.previousSibling.nodeType &&
                      (e.firstLineMetrics = e.renderer.fontMetrics(
                        t.previousSibling
                      )),
                    n(t, { dy: this.getLineHeight(t.nextSibling), x: i }));
                }
              );
              let a = this.width || 0;
              if (!a) return;
              let h = (t, r) => {
                  let h = t.textContent || "",
                    l = h.replace(/([^\^])-/g, "$1- ").split(" "),
                    d =
                      !this.noWrap &&
                      (l.length > 1 || e.element.childNodes.length > 1),
                    c = this.getLineHeight(r),
                    p = 0,
                    u = e.actualWidth;
                  if (this.ellipsis)
                    h &&
                      this.truncate(
                        t,
                        h,
                        void 0,
                        0,
                        Math.max(0, a - 0.8 * c),
                        (t, e) => t.substring(0, e) + "…"
                      );
                  else if (d) {
                    let h = [],
                      d = [];
                    for (; r.firstChild && r.firstChild !== t; )
                      d.push(r.firstChild), r.removeChild(r.firstChild);
                    for (; l.length; )
                      l.length &&
                        !this.noWrap &&
                        p > 0 &&
                        (h.push(t.textContent || ""),
                        (t.textContent = l.join(" ").replace(/- /g, "-"))),
                        this.truncate(
                          t,
                          void 0,
                          l,
                          (0 === p && u) || 0,
                          a,
                          (t, e) => l.slice(0, e).join(" ").replace(/- /g, "-")
                        ),
                        (u = e.actualWidth),
                        p++;
                    d.forEach((e) => {
                      r.insertBefore(e, t);
                    }),
                      h.forEach((e) => {
                        r.insertBefore(s.createTextNode(e), t);
                        let a = s.createElementNS(o, "tspan");
                        (a.textContent = "​"),
                          n(a, { dy: c, x: i }),
                          r.insertBefore(a, t);
                      });
                  }
                },
                l = (t) => {
                  let i = [].slice.call(t.childNodes);
                  i.forEach((i) => {
                    i.nodeType === r.Node.TEXT_NODE
                      ? h(i, t)
                      : (-1 !== i.className.baseVal.indexOf("highcharts-br") &&
                          (e.actualWidth = 0),
                        l(i));
                  });
                };
              l(e.element);
            }
            getLineHeight(t) {
              let e = t.nodeType === r.Node.TEXT_NODE ? t.parentElement : t;
              return this.textLineHeight
                ? parseInt(this.textLineHeight.toString(), 10)
                : this.renderer.fontMetrics(e || this.svgElement.element).h;
            }
            modifyTree(t) {
              let e = (i, s) => {
                let {
                    attributes: o = {},
                    children: r,
                    style: n = {},
                    tagName: h,
                  } = i,
                  l = this.renderer.styledMode;
                if (
                  ("b" === h || "strong" === h
                    ? l
                      ? (o.class = "highcharts-strong")
                      : (n.fontWeight = "bold")
                    : ("i" === h || "em" === h) &&
                      (l
                        ? (o.class = "highcharts-emphasized")
                        : (n.fontStyle = "italic")),
                  n && n.color && (n.fill = n.color),
                  "br" === h)
                ) {
                  (o.class = "highcharts-br"), (i.textContent = "​");
                  let e = t[s + 1];
                  e &&
                    e.textContent &&
                    (e.textContent = e.textContent.replace(/^ +/gm, ""));
                } else
                  "a" === h &&
                    r &&
                    r.some((t) => "#text" === t.tagName) &&
                    (i.children = [{ children: r, tagName: "tspan" }]);
                "#text" !== h && "a" !== h && (i.tagName = "tspan"),
                  a(i, { attributes: o, style: n }),
                  r && r.filter((t) => "#text" !== t.tagName).forEach(e);
              };
              t.forEach(e), h(this.svgElement, "afterModifyTree", { nodes: t });
            }
            truncate(t, e, i, s, o, r) {
              let n, a;
              let h = this.svgElement,
                { renderer: l, rotation: d } = h,
                c = [],
                p = i ? 1 : 0,
                u = (e || i || "").length,
                g = u,
                f = function (e, o) {
                  let r = o || e,
                    n = t.parentNode;
                  if (n && void 0 === c[r] && n.getSubStringLength)
                    try {
                      c[r] = s + n.getSubStringLength(0, i ? r + 1 : r);
                    } catch (t) {}
                  return c[r];
                };
              if (((h.rotation = 0), s + (a = f(t.textContent.length)) > o)) {
                for (; p <= u; )
                  (g = Math.ceil((p + u) / 2)),
                    i && (n = r(i, g)),
                    (a = f(g, n && n.length - 1)),
                    p === u ? (p = u + 1) : a > o ? (u = g - 1) : (p = g);
                0 === u
                  ? (t.textContent = "")
                  : (e && u === e.length - 1) ||
                    (t.textContent = n || r(e || i, g));
              }
              i && i.splice(0, g), (h.actualWidth = a), (h.rotation = d);
            }
            unescapeEntities(t, e) {
              return (
                d(this.renderer.escapes, function (i, s) {
                  (e && -1 !== e.indexOf(i)) ||
                    (t = t.toString().replace(RegExp(i, "g"), s));
                }),
                t
              );
            }
          };
        }
      ),
      i(
        e,
        "Core/Renderer/SVG/SVGRenderer.js",
        [
          e["Core/Renderer/HTML/AST.js"],
          e["Core/Color/Color.js"],
          e["Core/Globals.js"],
          e["Core/Renderer/RendererRegistry.js"],
          e["Core/Renderer/SVG/SVGElement.js"],
          e["Core/Renderer/SVG/SVGLabel.js"],
          e["Core/Renderer/SVG/Symbols.js"],
          e["Core/Renderer/SVG/TextBuilder.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o, r, n, a, h) {
          let l;
          let {
              charts: d,
              deg2rad: c,
              doc: p,
              isFirefox: u,
              isMS: g,
              isWebKit: f,
              noop: m,
              SVG_NS: x,
              symbolSizes: y,
              win: b,
            } = i,
            {
              addEvent: v,
              attr: k,
              createElement: S,
              css: M,
              defined: C,
              destroyObjectProperties: w,
              extend: T,
              isArray: A,
              isNumber: P,
              isObject: L,
              isString: O,
              merge: D,
              pick: E,
              pInt: I,
              uniqueKey: B,
            } = h;
          class j {
            constructor(t, e, i, s, o, r, n) {
              (this.alignedObjects = void 0),
                (this.box = void 0),
                (this.boxWrapper = void 0),
                (this.cache = void 0),
                (this.cacheKeys = void 0),
                (this.chartIndex = void 0),
                (this.defs = void 0),
                (this.globalAnimation = void 0),
                (this.gradients = void 0),
                (this.height = void 0),
                (this.imgCount = void 0),
                (this.style = void 0),
                (this.url = void 0),
                (this.width = void 0),
                this.init(t, e, i, s, o, r, n);
            }
            init(t, e, i, s, o, r, n) {
              let a, h;
              let l = this.createElement("svg").attr({
                  version: "1.1",
                  class: "highcharts-root",
                }),
                d = l.element;
              n || l.css(this.getStyle(s)),
                t.appendChild(d),
                k(t, "dir", "ltr"),
                -1 === t.innerHTML.indexOf("xmlns") &&
                  k(d, "xmlns", this.SVG_NS),
                (this.box = d),
                (this.boxWrapper = l),
                (this.alignedObjects = []),
                (this.url = this.getReferenceURL());
              let c = this.createElement("desc").add();
              c.element.appendChild(
                p.createTextNode("Created with Highcharts 11.2.0")
              ),
                (this.defs = this.createElement("defs").add()),
                (this.allowHTML = r),
                (this.forExport = o),
                (this.styledMode = n),
                (this.gradients = {}),
                (this.cache = {}),
                (this.cacheKeys = []),
                (this.imgCount = 0),
                (this.rootFontSize = l.getStyle("font-size")),
                this.setSize(e, i, !1),
                u &&
                  t.getBoundingClientRect &&
                  ((a = function () {
                    M(t, { left: 0, top: 0 }),
                      (h = t.getBoundingClientRect()),
                      M(t, {
                        left: Math.ceil(h.left) - h.left + "px",
                        top: Math.ceil(h.top) - h.top + "px",
                      });
                  })(),
                  (this.unSubPixelFix = v(b, "resize", a)));
            }
            definition(e) {
              let i = new t([e]);
              return i.addToDOM(this.defs.element);
            }
            getReferenceURL() {
              if ((u || f) && p.getElementsByTagName("base").length) {
                if (!C(l)) {
                  let e = B(),
                    i = new t([
                      {
                        tagName: "svg",
                        attributes: { width: 8, height: 8 },
                        children: [
                          {
                            tagName: "defs",
                            children: [
                              {
                                tagName: "clipPath",
                                attributes: { id: e },
                                children: [
                                  {
                                    tagName: "rect",
                                    attributes: { width: 4, height: 4 },
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            tagName: "rect",
                            attributes: {
                              id: "hitme",
                              width: 8,
                              height: 8,
                              "clip-path": `url(#${e})`,
                              fill: "rgba(0,0,0,0.001)",
                            },
                          },
                        ],
                      },
                    ]),
                    s = i.addToDOM(p.body);
                  M(s, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                  let o = p.elementFromPoint(6, 6);
                  (l = "hitme" === (o && o.id)), p.body.removeChild(s);
                }
                if (l)
                  return b.location.href
                    .split("#")[0]
                    .replace(/<[^>]*>/g, "")
                    .replace(/([\('\)])/g, "\\$1")
                    .replace(/ /g, "%20");
              }
              return "";
            }
            getStyle(t) {
              return (
                (this.style = T(
                  {
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "1rem",
                  },
                  t
                )),
                this.style
              );
            }
            setStyle(t) {
              this.boxWrapper.css(this.getStyle(t));
            }
            isHidden() {
              return !this.boxWrapper.getBBox().width;
            }
            destroy() {
              let t = this.defs;
              return (
                (this.box = null),
                (this.boxWrapper = this.boxWrapper.destroy()),
                w(this.gradients || {}),
                (this.gradients = null),
                (this.defs = t.destroy()),
                this.unSubPixelFix && this.unSubPixelFix(),
                (this.alignedObjects = null),
                null
              );
            }
            createElement(t) {
              let e = new this.Element();
              return e.init(this, t), e;
            }
            getRadialAttr(t, e) {
              return {
                cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                r: (e.r || 0) * t[2],
              };
            }
            shadowDefinition(t) {
              let e = [
                  `highcharts-drop-shadow-${this.chartIndex}`,
                  ...Object.keys(t).map((e) => `${e}-${t[e]}`),
                ]
                  .join("-")
                  .toLowerCase()
                  .replace(/[^a-z0-9\-]/g, ""),
                i = D(
                  {
                    color: "#000000",
                    offsetX: 1,
                    offsetY: 1,
                    opacity: 0.15,
                    width: 5,
                  },
                  t
                );
              return (
                this.defs.element.querySelector(`#${e}`) ||
                  this.definition({
                    tagName: "filter",
                    attributes: { id: e, filterUnits: i.filterUnits },
                    children: [
                      {
                        tagName: "feDropShadow",
                        attributes: {
                          dx: i.offsetX,
                          dy: i.offsetY,
                          "flood-color": i.color,
                          "flood-opacity": Math.min(5 * i.opacity, 1),
                          stdDeviation: i.width / 2,
                        },
                      },
                    ],
                  }),
                e
              );
            }
            buildText(t) {
              new a(t).buildSVG();
            }
            getContrast(t) {
              let i = e.parse(t).rgba.map((t) => {
                  let e = t / 255;
                  return e <= 0.03928
                    ? e / 12.92
                    : Math.pow((e + 0.055) / 1.055, 2.4);
                }),
                s = 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
              return 1.05 / (s + 0.05) > (s + 0.05) / 0.05
                ? "#FFFFFF"
                : "#000000";
            }
            button(e, i, s, o, r = {}, n, a, h, l, d) {
              let c, p, u;
              let f = this.label(
                  e,
                  i,
                  s,
                  l,
                  void 0,
                  void 0,
                  d,
                  void 0,
                  "button"
                ),
                m = this.styledMode,
                x = r.states || {},
                y = 0;
              (r = D(r)), delete r.states;
              let b = D(
                {
                  color: "#333333",
                  cursor: "pointer",
                  fontSize: "0.8em",
                  fontWeight: "normal",
                },
                r.style
              );
              delete r.style;
              let k = t.filterUserAttributes(r);
              return (
                f.attr(D({ padding: 8, r: 2 }, k)),
                m ||
                  ((k = D(
                    { fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 },
                    k
                  )),
                  (c = (n = D(
                    k,
                    { fill: "#e6e6e6" },
                    t.filterUserAttributes(n || x.hover || {})
                  )).style),
                  delete n.style,
                  (p = (a = D(
                    k,
                    {
                      fill: "#e6e9ff",
                      style: { color: "#000000", fontWeight: "bold" },
                    },
                    t.filterUserAttributes(a || x.select || {})
                  )).style),
                  delete a.style,
                  (u = (h = D(
                    k,
                    { style: { color: "#cccccc" } },
                    t.filterUserAttributes(h || x.disabled || {})
                  )).style),
                  delete h.style),
                v(f.element, g ? "mouseover" : "mouseenter", function () {
                  3 !== y && f.setState(1);
                }),
                v(f.element, g ? "mouseout" : "mouseleave", function () {
                  3 !== y && f.setState(y);
                }),
                (f.setState = function (t) {
                  if (
                    (1 !== t && (f.state = y = t),
                    f
                      .removeClass(
                        /highcharts-button-(normal|hover|pressed|disabled)/
                      )
                      .addClass(
                        "highcharts-button-" +
                          ["normal", "hover", "pressed", "disabled"][t || 0]
                      ),
                    !m)
                  ) {
                    f.attr([k, n, a, h][t || 0]);
                    let e = [b, c, p, u][t || 0];
                    L(e) && f.css(e);
                  }
                }),
                !m &&
                  (f.attr(k).css(T({ cursor: "default" }, b)),
                  d && f.text.css({ pointerEvents: "none" })),
                f
                  .on("touchstart", (t) => t.stopPropagation())
                  .on("click", function (t) {
                    3 !== y && o.call(f, t);
                  })
              );
            }
            crispLine(t, e, i = "round") {
              let s = t[0],
                o = t[1];
              return (
                C(s[1]) &&
                  s[1] === o[1] &&
                  (s[1] = o[1] = Math[i](s[1]) - (e % 2) / 2),
                C(s[2]) &&
                  s[2] === o[2] &&
                  (s[2] = o[2] = Math[i](s[2]) + (e % 2) / 2),
                t
              );
            }
            path(t) {
              let e = this.styledMode ? {} : { fill: "none" };
              return (
                A(t) ? (e.d = t) : L(t) && T(e, t),
                this.createElement("path").attr(e)
              );
            }
            circle(t, e, i) {
              let s = L(t) ? t : void 0 === t ? {} : { x: t, y: e, r: i },
                o = this.createElement("circle");
              return (
                (o.xSetter = o.ySetter =
                  function (t, e, i) {
                    i.setAttribute("c" + e, t);
                  }),
                o.attr(s)
              );
            }
            arc(t, e, i, s, o, r) {
              let n;
              L(t)
                ? ((e = (n = t).y),
                  (i = n.r),
                  (s = n.innerR),
                  (o = n.start),
                  (r = n.end),
                  (t = n.x))
                : (n = { innerR: s, start: o, end: r });
              let a = this.symbol("arc", t, e, i, i, n);
              return (a.r = i), a;
            }
            rect(t, e, i, s, o, r) {
              let n = L(t)
                  ? t
                  : void 0 === t
                  ? {}
                  : {
                      x: t,
                      y: e,
                      r: o,
                      width: Math.max(i || 0, 0),
                      height: Math.max(s || 0, 0),
                    },
                a = this.createElement("rect");
              return (
                this.styledMode ||
                  (void 0 !== r && ((n["stroke-width"] = r), T(n, a.crisp(n))),
                  (n.fill = "none")),
                (a.rSetter = function (t, e, i) {
                  (a.r = t), k(i, { rx: t, ry: t });
                }),
                (a.rGetter = function () {
                  return a.r || 0;
                }),
                a.attr(n)
              );
            }
            roundedRect(t) {
              return this.symbol("roundedRect").attr(t);
            }
            setSize(t, e, i) {
              (this.width = t),
                (this.height = e),
                this.boxWrapper.animate(
                  { width: t, height: e },
                  {
                    step: function () {
                      this.attr({
                        viewBox:
                          "0 0 " +
                          this.attr("width") +
                          " " +
                          this.attr("height"),
                      });
                    },
                    duration: E(i, !0) ? void 0 : 0,
                  }
                ),
                this.alignElements();
            }
            g(t) {
              let e = this.createElement("g");
              return t ? e.attr({ class: "highcharts-" + t }) : e;
            }
            image(t, e, i, s, o, r) {
              let n = { preserveAspectRatio: "none" };
              P(e) && (n.x = e),
                P(i) && (n.y = i),
                P(s) && (n.width = s),
                P(o) && (n.height = o);
              let a = this.createElement("image").attr(n),
                h = function (e) {
                  a.attr({ href: t }), r.call(a, e);
                };
              if (r) {
                a.attr({
                  href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                });
                let e = new b.Image();
                v(e, "load", h), (e.src = t), e.complete && h({});
              } else a.attr({ href: t });
              return a;
            }
            symbol(t, e, i, s, o, r) {
              let n, a, h, l;
              let c = this,
                u = /^url\((.*?)\)$/,
                g = u.test(t),
                f = !g && (this.symbols[t] ? t : "circle"),
                m = f && this.symbols[f];
              if (m)
                "number" == typeof e &&
                  (a = m.call(
                    this.symbols,
                    Math.round(e || 0),
                    Math.round(i || 0),
                    s || 0,
                    o || 0,
                    r
                  )),
                  (n = this.path(a)),
                  c.styledMode || n.attr("fill", "none"),
                  T(n, {
                    symbolName: f || void 0,
                    x: e,
                    y: i,
                    width: s,
                    height: o,
                  }),
                  r && T(n, r);
              else if (g) {
                h = t.match(u)[1];
                let s = (n = this.image(h));
                (s.imgwidth = E(r && r.width, y[h] && y[h].width)),
                  (s.imgheight = E(r && r.height, y[h] && y[h].height)),
                  (l = (t) => t.attr({ width: t.width, height: t.height })),
                  ["width", "height"].forEach((t) => {
                    s[`${t}Setter`] = function (t, e) {
                      this[e] = t;
                      let {
                          alignByTranslate: i,
                          element: s,
                          width: o,
                          height: n,
                          imgwidth: a,
                          imgheight: h,
                        } = this,
                        l = "width" === e ? a : h,
                        d = 1;
                      r && "within" === r.backgroundSize && o && n && a && h
                        ? ((d = Math.min(o / a, n / h)),
                          k(s, {
                            width: Math.round(a * d),
                            height: Math.round(h * d),
                          }))
                        : s && l && s.setAttribute(e, l),
                        !i &&
                          a &&
                          h &&
                          this.translate(
                            ((o || 0) - a * d) / 2,
                            ((n || 0) - h * d) / 2
                          );
                    };
                  }),
                  C(e) && s.attr({ x: e, y: i }),
                  (s.isImg = !0),
                  C(s.imgwidth) && C(s.imgheight)
                    ? l(s)
                    : (s.attr({ width: 0, height: 0 }),
                      S("img", {
                        onload: function () {
                          let t = d[c.chartIndex];
                          0 === this.width &&
                            (M(this, { position: "absolute", top: "-999em" }),
                            p.body.appendChild(this)),
                            (y[h] = { width: this.width, height: this.height }),
                            (s.imgwidth = this.width),
                            (s.imgheight = this.height),
                            s.element && l(s),
                            this.parentNode &&
                              this.parentNode.removeChild(this),
                            c.imgCount--,
                            c.imgCount || !t || t.hasLoaded || t.onload();
                        },
                        src: h,
                      }),
                      this.imgCount++);
              }
              return n;
            }
            clipRect(t, e, i, s) {
              let o = B() + "-",
                r = this.createElement("clipPath")
                  .attr({ id: o })
                  .add(this.defs),
                n = this.rect(t, e, i, s, 0).add(r);
              return (n.id = o), (n.clipPath = r), (n.count = 0), n;
            }
            text(t, e, i, s) {
              let o = {};
              if (s && (this.allowHTML || !this.forExport))
                return this.html(t, e, i);
              (o.x = Math.round(e || 0)),
                i && (o.y = Math.round(i)),
                C(t) && (o.text = t);
              let r = this.createElement("text").attr(o);
              return (
                (s && (!this.forExport || this.allowHTML)) ||
                  (r.xSetter = function (t, e, i) {
                    let s = i.getElementsByTagName("tspan"),
                      o = i.getAttribute(e);
                    for (let i = 0, r; i < s.length; i++)
                      (r = s[i]).getAttribute(e) === o && r.setAttribute(e, t);
                    i.setAttribute(e, t);
                  }),
                r
              );
            }
            fontMetrics(t) {
              let e = I(o.prototype.getStyle.call(t, "font-size") || 0),
                i = e < 24 ? e + 3 : Math.round(1.2 * e),
                s = Math.round(0.8 * i);
              return { h: i, b: s, f: e };
            }
            rotCorr(t, e, i) {
              let s = t;
              return (
                e && i && (s = Math.max(s * Math.cos(e * c), 4)),
                { x: (-t / 3) * Math.sin(e * c), y: s }
              );
            }
            pathToSegments(t) {
              let e = [],
                i = [],
                s = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
              for (let o = 0; o < t.length; o++)
                O(i[0]) &&
                  P(t[o]) &&
                  i.length === s[i[0].toUpperCase()] &&
                  t.splice(o, 0, i[0].replace("M", "L").replace("m", "l")),
                  "string" == typeof t[o] &&
                    (i.length && e.push(i.slice(0)), (i.length = 0)),
                  i.push(t[o]);
              return e.push(i.slice(0)), e;
            }
            label(t, e, i, s, o, n, a, h, l) {
              return new r(this, t, e, i, s, o, n, a, h, l);
            }
            alignElements() {
              this.alignedObjects.forEach((t) => t.align());
            }
          }
          return (
            T(j.prototype, {
              Element: o,
              SVG_NS: x,
              escapes: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
              },
              symbols: n,
              draw: m,
            }),
            s.registerRendererType("svg", j, !0),
            j
          );
        }
      ),
      i(
        e,
        "Core/Renderer/HTML/HTMLElement.js",
        [
          e["Core/Globals.js"],
          e["Core/Renderer/SVG/SVGElement.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { isFirefox: s, isMS: o, isWebKit: r, win: n } = t,
            { css: a, defined: h, extend: l, pick: d, pInt: c } = i,
            p = [];
          class u extends e {
            static compose(t) {
              if (i.pushUnique(p, t)) {
                let e = u.prototype,
                  i = t.prototype;
                (i.getSpanCorrection = e.getSpanCorrection),
                  (i.htmlCss = e.htmlCss),
                  (i.htmlGetBBox = e.htmlGetBBox),
                  (i.htmlUpdateTransform = e.htmlUpdateTransform),
                  (i.setSpanRotation = e.setSpanRotation);
              }
              return t;
            }
            getSpanCorrection(t, e, i) {
              (this.xCorr = -t * i), (this.yCorr = -e);
            }
            htmlCss(t) {
              let e;
              let i = this.element,
                s = "SPAN" === i.tagName && t && "width" in t,
                o = d(s && t.width, void 0);
              return (
                s && (delete t.width, (this.textWidth = o), (e = !0)),
                t &&
                  "ellipsis" === t.textOverflow &&
                  ((t.whiteSpace = "nowrap"), (t.overflow = "hidden")),
                (this.styles = l(this.styles, t)),
                a(this.element, t),
                e && this.htmlUpdateTransform(),
                this
              );
            }
            htmlGetBBox() {
              let t = this.element;
              return {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: t.offsetWidth,
                height: t.offsetHeight,
              };
            }
            htmlUpdateTransform() {
              if (!this.added) {
                this.alignOnAdd = !0;
                return;
              }
              let t = this.renderer,
                e = this.element,
                i = this.translateX || 0,
                s = this.translateY || 0,
                o = this.x || 0,
                r = this.y || 0,
                n = this.textAlign || "left",
                l = { left: 0, center: 0.5, right: 1 }[n],
                d = this.styles,
                p = d && d.whiteSpace;
              if (
                (a(e, { marginLeft: i, marginTop: s }), "SPAN" === e.tagName)
              ) {
                let i = this.rotation,
                  s = this.textWidth && c(this.textWidth),
                  d = [i, n, e.innerHTML, this.textWidth, this.textAlign].join(
                    ","
                  ),
                  u,
                  g = !1;
                if (s !== this.oldTextWidth) {
                  let t = this.textPxLength
                    ? this.textPxLength
                    : (a(e, { width: "", whiteSpace: p || "nowrap" }),
                      e.offsetWidth);
                  (s > this.oldTextWidth || t > s) &&
                    (/[ \-]/.test(e.textContent || e.innerText) ||
                      "ellipsis" === e.style.textOverflow) &&
                    (a(e, {
                      width: t > s || i ? s + "px" : "auto",
                      display: "block",
                      whiteSpace: p || "normal",
                    }),
                    (this.oldTextWidth = s),
                    (g = !0));
                }
                (this.hasBoxWidthChanged = g),
                  d !== this.cTT &&
                    ((u = t.fontMetrics(e).b),
                    h(i) &&
                      (i !== (this.oldRotation || 0) || n !== this.oldAlign) &&
                      this.setSpanRotation(i, l, u),
                    this.getSpanCorrection(
                      (!h(i) && this.textPxLength) || e.offsetWidth,
                      u,
                      l,
                      i,
                      n
                    )),
                  a(e, {
                    left: o + (this.xCorr || 0) + "px",
                    top: r + (this.yCorr || 0) + "px",
                  }),
                  (this.cTT = d),
                  (this.oldRotation = i),
                  (this.oldAlign = n);
              }
            }
            setSpanRotation(t, e, i) {
              let h = {},
                l =
                  o && !/Edge/.test(n.navigator.userAgent)
                    ? "-ms-transform"
                    : r
                    ? "-webkit-transform"
                    : s
                    ? "MozTransform"
                    : n.opera
                    ? "-o-transform"
                    : void 0;
              l &&
                ((h[l] = h.transform = "rotate(" + t + "deg)"),
                (h[l + (s ? "Origin" : "-origin")] = h.transformOrigin =
                  100 * e + "% " + i + "px"),
                a(this.element, h));
            }
          }
          return u;
        }
      ),
      i(
        e,
        "Core/Renderer/HTML/HTMLRenderer.js",
        [
          e["Core/Renderer/HTML/AST.js"],
          e["Core/Renderer/SVG/SVGElement.js"],
          e["Core/Renderer/SVG/SVGRenderer.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s) {
          let { attr: o, createElement: r, extend: n, pick: a } = s,
            h = [];
          class l extends i {
            static compose(t) {
              if (s.pushUnique(h, t)) {
                let e = l.prototype,
                  i = t.prototype;
                i.html = e.html;
              }
              return t;
            }
            html(i, s, h) {
              let l = this.createElement("span"),
                d = l.element,
                c = l.renderer,
                p = function (t, i) {
                  ["opacity", "visibility"].forEach(function (s) {
                    t[s + "Setter"] = function (o, r, n) {
                      let a = t.div ? t.div.style : i;
                      e.prototype[s + "Setter"].call(this, o, r, n),
                        a && (a[r] = o);
                    };
                  }),
                    (t.addedSetters = !0);
                };
              return (
                (l.textSetter = function (e) {
                  e !== this.textStr &&
                    (delete this.bBox,
                    delete this.oldTextWidth,
                    t.setElementHTML(this.element, a(e, "")),
                    (this.textStr = e),
                    (l.doTransform = !0));
                }),
                p(l, l.element.style),
                (l.xSetter =
                  l.ySetter =
                  l.alignSetter =
                  l.rotationSetter =
                    function (t, e) {
                      "align" === e
                        ? (l.alignValue = l.textAlign = t)
                        : (l[e] = t),
                        (l.doTransform = !0);
                    }),
                (l.afterSetters = function () {
                  this.doTransform &&
                    (this.htmlUpdateTransform(), (this.doTransform = !1));
                }),
                l
                  .attr({ text: i, x: Math.round(s), y: Math.round(h) })
                  .css({ position: "absolute" }),
                c.styledMode ||
                  l.css({
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize,
                  }),
                (d.style.whiteSpace = "nowrap"),
                (l.css = l.htmlCss),
                (l.add = function (t) {
                  let e, i;
                  let s = c.box.parentNode,
                    a = [];
                  if (((this.parentGroup = t), t)) {
                    if (!(e = t.div)) {
                      for (i = t; i; ) a.push(i), (i = i.parentGroup);
                      a.reverse().forEach(function (t) {
                        var i;
                        let h = o(t.element, "class"),
                          d = t.css;
                        function c(e, i) {
                          (t[i] = e),
                            "translateX" === i
                              ? (g.left = e + "px")
                              : (g.top = e + "px"),
                            (t.doTransform = !0);
                        }
                        let u = t.styles || {};
                        e = t.div =
                          t.div ||
                          r(
                            "div",
                            h ? { className: h } : void 0,
                            {
                              position: "absolute",
                              left: (t.translateX || 0) + "px",
                              top: (t.translateY || 0) + "px",
                              display: t.display,
                              opacity: t.opacity,
                              visibility: t.visibility,
                            },
                            e || s
                          );
                        let g = e.style;
                        n(t, {
                          classSetter:
                            ((i = e),
                            function (t) {
                              this.element.setAttribute("class", t),
                                (i.className = t);
                            }),
                          css: function (e) {
                            return (
                              d.call(t, e),
                              ["cursor", "pointerEvents"].forEach((t) => {
                                e[t] && (g[t] = e[t]);
                              }),
                              t
                            );
                          },
                          on: function () {
                            return (
                              a[0].div &&
                                l.on.apply(
                                  { element: a[0].div, onEvents: t.onEvents },
                                  arguments
                                ),
                              t
                            );
                          },
                          translateXSetter: c,
                          translateYSetter: c,
                        }),
                          t.addedSetters || p(t),
                          t.css(u);
                      });
                    }
                  } else e = s;
                  return (
                    e.appendChild(d),
                    (l.added = !0),
                    l.alignOnAdd && l.htmlUpdateTransform(),
                    l
                  );
                }),
                l
              );
            }
          }
          return l;
        }
      ),
      i(e, "Core/Axis/AxisDefaults.js", [], function () {
        var t, e;
        return (
          ((e = t || (t = {})).defaultXAxisOptions = {
            alignTicks: !0,
            allowDecimals: void 0,
            panningEnabled: !0,
            zIndex: 2,
            zoomEnabled: !0,
            dateTimeLabelFormats: {
              millisecond: { main: "%H:%M:%S.%L", range: !1 },
              second: { main: "%H:%M:%S", range: !1 },
              minute: { main: "%H:%M", range: !1 },
              hour: { main: "%H:%M", range: !1 },
              day: { main: "%e %b" },
              week: { main: "%e %b" },
              month: { main: "%b '%y" },
              year: { main: "%Y" },
            },
            endOnTick: !1,
            gridLineDashStyle: "Solid",
            gridZIndex: 1,
            labels: {
              autoRotation: void 0,
              autoRotationLimit: 80,
              distance: 15,
              enabled: !0,
              indentation: 10,
              overflow: "justify",
              padding: 5,
              reserveSpace: void 0,
              rotation: void 0,
              staggerLines: 0,
              step: 0,
              useHTML: !1,
              zIndex: 7,
              style: { color: "#333333", cursor: "default", fontSize: "0.8em" },
            },
            maxPadding: 0.01,
            minorGridLineDashStyle: "Solid",
            minorTickLength: 2,
            minorTickPosition: "outside",
            minorTicksPerMajor: 5,
            minPadding: 0.01,
            offset: void 0,
            opposite: !1,
            reversed: void 0,
            reversedStacks: !1,
            showEmpty: !0,
            showFirstLabel: !0,
            showLastLabel: !0,
            startOfWeek: 1,
            startOnTick: !1,
            tickLength: 10,
            tickPixelInterval: 100,
            tickmarkPlacement: "between",
            tickPosition: "outside",
            title: {
              align: "middle",
              rotation: 0,
              useHTML: !1,
              x: 0,
              y: 0,
              style: { color: "#666666", fontSize: "0.8em" },
            },
            type: "linear",
            uniqueNames: !0,
            visible: !0,
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#333333",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            gridLineWidth: void 0,
            tickColor: "#333333",
          }),
          (e.defaultYAxisOptions = {
            reversedStacks: !0,
            endOnTick: !0,
            maxPadding: 0.05,
            minPadding: 0.05,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: { x: void 0 },
            startOnTick: !0,
            title: { rotation: 270, text: "Values" },
            stackLabels: {
              animation: {},
              allowOverlap: !1,
              enabled: !1,
              crop: !0,
              overflow: "justify",
              formatter: function () {
                let { numberFormatter: t } = this.axis.chart;
                return t(this.total || 0, -1);
              },
              style: {
                color: "#000000",
                fontSize: "0.7em",
                fontWeight: "bold",
                textOutline: "1px contrast",
              },
            },
            gridLineWidth: 1,
            lineWidth: 0,
          }),
          (e.defaultLeftAxisOptions = { title: { rotation: 270 } }),
          (e.defaultRightAxisOptions = { title: { rotation: 90 } }),
          (e.defaultBottomAxisOptions = {
            labels: { autoRotation: [-45] },
            margin: 15,
            title: { rotation: 0 },
          }),
          (e.defaultTopAxisOptions = {
            labels: { autoRotation: [-45] },
            margin: 15,
            title: { rotation: 0 },
          }),
          t
        );
      }),
      i(e, "Core/Foundation.js", [e["Core/Utilities.js"]], function (t) {
        var e;
        let { addEvent: i, isFunction: s, objectEach: o, removeEvent: r } = t;
        return (
          ((e || (e = {})).registerEventOptions = function (t, e) {
            (t.eventOptions = t.eventOptions || {}),
              o(e.events, function (e, o) {
                t.eventOptions[o] !== e &&
                  (t.eventOptions[o] &&
                    (r(t, o, t.eventOptions[o]), delete t.eventOptions[o]),
                  s(e) && ((t.eventOptions[o] = e), i(t, o, e, { order: 0 })));
              });
          }),
          e
        );
      }),
      i(
        e,
        "Core/Axis/Tick.js",
        [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]],
        function (t, e, i) {
          let { deg2rad: s } = e,
            {
              clamp: o,
              correctFloat: r,
              defined: n,
              destroyObjectProperties: a,
              extend: h,
              fireEvent: l,
              isNumber: d,
              merge: c,
              objectEach: p,
              pick: u,
            } = i;
          return class {
            constructor(t, e, i, s, o) {
              (this.isNew = !0),
                (this.isNewLabel = !0),
                (this.axis = t),
                (this.pos = e),
                (this.type = i || ""),
                (this.parameters = o || {}),
                (this.tickmarkOffset = this.parameters.tickmarkOffset),
                (this.options = this.parameters.options),
                l(this, "init"),
                i || s || this.addLabel();
            }
            addLabel() {
              let e = this,
                i = e.axis,
                s = i.options,
                o = i.chart,
                a = i.categories,
                c = i.logarithmic,
                p = i.names,
                g = e.pos,
                f = u(e.options && e.options.labels, s.labels),
                m = i.tickPositions,
                x = g === m[0],
                y = g === m[m.length - 1],
                b = (!f.step || 1 === f.step) && 1 === i.tickInterval,
                v = m.info,
                k = e.label,
                S,
                M,
                C,
                w = this.parameters.category || (a ? u(a[g], p[g], g) : g);
              c && d(w) && (w = r(c.lin2log(w))),
                i.dateTime &&
                  (v
                    ? (S = (M = o.time.resolveDTLFormat(
                        s.dateTimeLabelFormats[
                          (!s.grid && v.higherRanks[g]) || v.unitName
                        ]
                      )).main)
                    : d(w) &&
                      (S = i.dateTime.getXDateFormat(
                        w,
                        s.dateTimeLabelFormats || {}
                      ))),
                (e.isFirst = x),
                (e.isLast = y);
              let T = {
                axis: i,
                chart: o,
                dateTimeLabelFormat: S,
                isFirst: x,
                isLast: y,
                pos: g,
                tick: e,
                tickPositionInfo: v,
                value: w,
              };
              l(this, "labelFormat", T);
              let A = (e) =>
                  f.formatter
                    ? f.formatter.call(e, e)
                    : f.format
                    ? ((e.text = i.defaultLabelFormatter.call(e, e)),
                      t.format(f.format, e, o))
                    : i.defaultLabelFormatter.call(e, e),
                P = A.call(T, T),
                L = M && M.list;
              L
                ? (e.shortenLabel = function () {
                    for (C = 0; C < L.length; C++)
                      if (
                        (h(T, { dateTimeLabelFormat: L[C] }),
                        k.attr({ text: A.call(T, T) }),
                        k.getBBox().width < i.getSlotWidth(e) - 2 * f.padding)
                      )
                        return;
                    k.attr({ text: "" });
                  })
                : (e.shortenLabel = void 0),
                b && i._addedPlotLB && e.moveLabel(P, f),
                n(k) || e.movedLabel
                  ? k &&
                    k.textStr !== P &&
                    !b &&
                    (!k.textWidth ||
                      f.style.width ||
                      k.styles.width ||
                      k.css({ width: null }),
                    k.attr({ text: P }),
                    (k.textPxLength = k.getBBox().width))
                  : ((e.label = k = e.createLabel({ x: 0, y: 0 }, P, f)),
                    (e.rotation = 0));
            }
            createLabel(t, e, i) {
              let s = this.axis,
                o = s.chart,
                r =
                  n(e) && i.enabled
                    ? o.renderer.text(e, t.x, t.y, i.useHTML).add(s.labelGroup)
                    : null;
              return (
                r &&
                  (o.styledMode || r.css(c(i.style)),
                  (r.textPxLength = r.getBBox().width)),
                r
              );
            }
            destroy() {
              a(this, this.axis);
            }
            getPosition(t, e, i, s) {
              let n = this.axis,
                a = n.chart,
                h = (s && a.oldChartHeight) || a.chartHeight,
                d = {
                  x: t
                    ? r(n.translate(e + i, void 0, void 0, s) + n.transB)
                    : n.left +
                      n.offset +
                      (n.opposite
                        ? ((s && a.oldChartWidth) || a.chartWidth) -
                          n.right -
                          n.left
                        : 0),
                  y: t
                    ? h - n.bottom + n.offset - (n.opposite ? n.height : 0)
                    : r(h - n.translate(e + i, void 0, void 0, s) - n.transB),
                };
              return (
                (d.y = o(d.y, -1e5, 1e5)),
                l(this, "afterGetPosition", { pos: d }),
                d
              );
            }
            getLabelPosition(t, e, i, o, r, a, h, d) {
              let c, p;
              let g = this.axis,
                f = g.transA,
                m =
                  g.isLinked && g.linkedParent
                    ? g.linkedParent.reversed
                    : g.reversed,
                x = g.staggerLines,
                y = g.tickRotCorr || { x: 0, y: 0 },
                b =
                  o || g.reserveSpaceDefault
                    ? 0
                    : -g.labelOffset * ("center" === g.labelAlign ? 0.5 : 1),
                v = r.distance,
                k = {};
              return (
                (c =
                  0 === g.side
                    ? i.rotation
                      ? -v
                      : -i.getBBox().height
                    : 2 === g.side
                    ? y.y + v
                    : Math.cos(i.rotation * s) *
                      (y.y - i.getBBox(!1, 0).height / 2)),
                n(r.y) && (c = 0 === g.side && g.horiz ? r.y + c : r.y),
                (t =
                  t +
                  u(r.x, [0, 1, 0, -1][g.side] * v) +
                  b +
                  y.x -
                  (a && o ? a * f * (m ? -1 : 1) : 0)),
                (e = e + c - (a && !o ? a * f * (m ? 1 : -1) : 0)),
                x &&
                  ((p = (h / (d || 1)) % x),
                  g.opposite && (p = x - p - 1),
                  (e += p * (g.labelOffset / x))),
                (k.x = t),
                (k.y = Math.round(e)),
                l(this, "afterGetLabelPosition", {
                  pos: k,
                  tickmarkOffset: a,
                  index: h,
                }),
                k
              );
            }
            getLabelSize() {
              return this.label
                ? this.label.getBBox()[this.axis.horiz ? "height" : "width"]
                : 0;
            }
            getMarkPath(t, e, i, s, o, r) {
              return r.crispLine(
                [
                  ["M", t, e],
                  ["L", t + (o ? 0 : -i), e + (o ? i : 0)],
                ],
                s
              );
            }
            handleOverflow(t) {
              let e = this.axis,
                i = e.options.labels,
                o = t.x,
                r = e.chart.chartWidth,
                n = e.chart.spacing,
                a = u(e.labelLeft, Math.min(e.pos, n[3])),
                h = u(
                  e.labelRight,
                  Math.max(e.isRadial ? 0 : e.pos + e.len, r - n[1])
                ),
                l = this.label,
                d = this.rotation,
                c = { left: 0, center: 0.5, right: 1 }[
                  e.labelAlign || l.attr("align")
                ],
                p = l.getBBox().width,
                g = e.getSlotWidth(this),
                f = {},
                m = g,
                x = 1,
                y;
              d || "justify" !== i.overflow
                ? d < 0 && o - c * p < a
                  ? (y = Math.round(o / Math.cos(d * s) - a))
                  : d > 0 &&
                    o + c * p > h &&
                    (y = Math.round((r - o) / Math.cos(d * s)))
                : (o - c * p < a
                    ? (m = t.x + m * (1 - c) - a)
                    : o + (1 - c) * p > h && ((m = h - t.x + m * c), (x = -1)),
                  (m = Math.min(g, m)) < g &&
                    "center" === e.labelAlign &&
                    (t.x += x * (g - m - c * (g - Math.min(p, m)))),
                  (p > m || (e.autoRotation && (l.styles || {}).width)) &&
                    (y = m)),
                y &&
                  (this.shortenLabel
                    ? this.shortenLabel()
                    : ((f.width = Math.floor(y) + "px"),
                      (i.style || {}).textOverflow ||
                        (f.textOverflow = "ellipsis"),
                      l.css(f)));
            }
            moveLabel(t, e) {
              let i = this,
                s = i.label,
                o = i.axis,
                r = !1,
                n;
              s && s.textStr === t
                ? ((i.movedLabel = s), (r = !0), delete i.label)
                : p(o.ticks, function (e) {
                    r ||
                      e.isNew ||
                      e === i ||
                      !e.label ||
                      e.label.textStr !== t ||
                      ((i.movedLabel = e.label),
                      (r = !0),
                      (e.labelPos = i.movedLabel.xy),
                      delete e.label);
                  }),
                !r &&
                  (i.labelPos || s) &&
                  ((n = i.labelPos || s.xy),
                  (i.movedLabel = i.createLabel(n, t, e)),
                  i.movedLabel && i.movedLabel.attr({ opacity: 0 }));
            }
            render(t, e, i) {
              let s = this.axis,
                o = s.horiz,
                r = this.pos,
                n = u(this.tickmarkOffset, s.tickmarkOffset),
                a = this.getPosition(o, r, n, e),
                h = a.x,
                d = a.y,
                c = (o && h === s.pos + s.len) || (!o && d === s.pos) ? -1 : 1,
                p = u(i, this.label && this.label.newOpacity, 1);
              (i = u(i, 1)),
                (this.isActive = !0),
                this.renderGridLine(e, i, c),
                this.renderMark(a, i, c),
                this.renderLabel(a, e, p, t),
                (this.isNew = !1),
                l(this, "afterRender");
            }
            renderGridLine(t, e, i) {
              let s = this.axis,
                o = s.options,
                r = {},
                n = this.pos,
                a = this.type,
                h = u(this.tickmarkOffset, s.tickmarkOffset),
                l = s.chart.renderer,
                d = this.gridLine,
                c,
                p = o.gridLineWidth,
                g = o.gridLineColor,
                f = o.gridLineDashStyle;
              "minor" === this.type &&
                ((p = o.minorGridLineWidth),
                (g = o.minorGridLineColor),
                (f = o.minorGridLineDashStyle)),
                d ||
                  (s.chart.styledMode ||
                    ((r.stroke = g),
                    (r["stroke-width"] = p || 0),
                    (r.dashstyle = f)),
                  a || (r.zIndex = 1),
                  t && (e = 0),
                  (this.gridLine = d =
                    l
                      .path()
                      .attr(r)
                      .addClass(
                        "highcharts-" + (a ? a + "-" : "") + "grid-line"
                      )
                      .add(s.gridGroup))),
                d &&
                  (c = s.getPlotLinePath({
                    value: n + h,
                    lineWidth: d.strokeWidth() * i,
                    force: "pass",
                    old: t,
                    acrossPanes: !1,
                  })) &&
                  d[t || this.isNew ? "attr" : "animate"]({ d: c, opacity: e });
            }
            renderMark(t, e, i) {
              let s = this.axis,
                o = s.options,
                r = s.chart.renderer,
                n = this.type,
                a = s.tickSize(n ? n + "Tick" : "tick"),
                h = t.x,
                l = t.y,
                d = u(
                  o["minor" !== n ? "tickWidth" : "minorTickWidth"],
                  !n && s.isXAxis ? 1 : 0
                ),
                c = o["minor" !== n ? "tickColor" : "minorTickColor"],
                p = this.mark,
                g = !p;
              a &&
                (s.opposite && (a[0] = -a[0]),
                p ||
                  ((this.mark = p =
                    r
                      .path()
                      .addClass("highcharts-" + (n ? n + "-" : "") + "tick")
                      .add(s.axisGroup)),
                  s.chart.styledMode ||
                    p.attr({ stroke: c, "stroke-width": d })),
                p[g ? "attr" : "animate"]({
                  d: this.getMarkPath(
                    h,
                    l,
                    a[0],
                    p.strokeWidth() * i,
                    s.horiz,
                    r
                  ),
                  opacity: e,
                }));
            }
            renderLabel(t, e, i, s) {
              let o = this.axis,
                r = o.horiz,
                n = o.options,
                a = this.label,
                h = n.labels,
                l = h.step,
                c = u(this.tickmarkOffset, o.tickmarkOffset),
                p = t.x,
                g = t.y,
                f = !0;
              a &&
                d(p) &&
                ((a.xy = t = this.getLabelPosition(p, g, a, r, h, c, s, l)),
                (!this.isFirst || this.isLast || n.showFirstLabel) &&
                (!this.isLast || this.isFirst || n.showLastLabel)
                  ? !r ||
                    h.step ||
                    h.rotation ||
                    e ||
                    0 === i ||
                    this.handleOverflow(t)
                  : (f = !1),
                l && s % l && (f = !1),
                f && d(t.y)
                  ? ((t.opacity = i),
                    a[this.isNewLabel ? "attr" : "animate"](t).show(!0),
                    (this.isNewLabel = !1))
                  : (a.hide(), (this.isNewLabel = !0)));
            }
            replaceMovedLabel() {
              let t = this.label,
                e = this.axis;
              t &&
                !this.isNew &&
                (t.animate({ opacity: 0 }, void 0, t.destroy),
                delete this.label),
                (e.isDirty = !0),
                (this.label = this.movedLabel),
                delete this.movedLabel;
            }
          };
        }
      ),
      i(
        e,
        "Core/Axis/Axis.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Axis/AxisDefaults.js"],
          e["Core/Color/Color.js"],
          e["Core/Defaults.js"],
          e["Core/Foundation.js"],
          e["Core/Globals.js"],
          e["Core/Axis/Tick.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o, r, n, a) {
          let { animObject: h } = t,
            { defaultOptions: l } = s,
            { registerEventOptions: d } = o,
            { deg2rad: c } = r,
            {
              arrayMax: p,
              arrayMin: u,
              clamp: g,
              correctFloat: f,
              defined: m,
              destroyObjectProperties: x,
              erase: y,
              error: b,
              extend: v,
              fireEvent: k,
              getClosestDistance: S,
              insertItem: M,
              isArray: C,
              isNumber: w,
              isString: T,
              merge: A,
              normalizeTickInterval: P,
              objectEach: L,
              pick: O,
              relativeLength: D,
              removeEvent: E,
              splat: I,
              syncTimeout: B,
            } = a,
            j = (t, e) =>
              P(
                e,
                void 0,
                void 0,
                O(t.options.allowDecimals, e < 0.5 || void 0 !== t.tickAmount),
                !!t.tickAmount
              );
          class R {
            constructor(t, e, i) {
              (this.alternateBands = void 0),
                (this.bottom = void 0),
                (this.chart = void 0),
                (this.closestPointRange = void 0),
                (this.coll = void 0),
                (this.eventOptions = void 0),
                (this.hasNames = void 0),
                (this.hasVisibleSeries = void 0),
                (this.height = void 0),
                (this.index = void 0),
                (this.isLinked = void 0),
                (this.labelEdge = void 0),
                (this.labelFormatter = void 0),
                (this.left = void 0),
                (this.len = void 0),
                (this.max = void 0),
                (this.maxLabelLength = void 0),
                (this.min = void 0),
                (this.minorTickInterval = void 0),
                (this.minorTicks = void 0),
                (this.minPixelPadding = void 0),
                (this.names = void 0),
                (this.offset = void 0),
                (this.options = void 0),
                (this.overlap = void 0),
                (this.paddedTicks = void 0),
                (this.plotLinesAndBands = void 0),
                (this.plotLinesAndBandsGroups = void 0),
                (this.pointRange = void 0),
                (this.pointRangePadding = void 0),
                (this.pos = void 0),
                (this.positiveValuesOnly = void 0),
                (this.right = void 0),
                (this.series = void 0),
                (this.side = void 0),
                (this.tickAmount = void 0),
                (this.tickInterval = void 0),
                (this.tickmarkOffset = void 0),
                (this.tickPositions = void 0),
                (this.tickRotCorr = void 0),
                (this.ticks = void 0),
                (this.top = void 0),
                (this.transA = void 0),
                (this.transB = void 0),
                (this.translationSlope = void 0),
                (this.userOptions = void 0),
                (this.visible = void 0),
                (this.width = void 0),
                (this.zoomEnabled = void 0),
                this.init(t, e, i);
            }
            init(t, e, i = this.coll) {
              let s = "xAxis" === i;
              (this.chart = t),
                (this.horiz = this.isZAxis || (t.inverted ? !s : s)),
                (this.isXAxis = s),
                (this.coll = i),
                k(this, "init", { userOptions: e }),
                (this.opposite = O(e.opposite, this.opposite)),
                (this.side = O(
                  e.side,
                  this.side,
                  this.horiz ? (this.opposite ? 0 : 2) : this.opposite ? 1 : 3
                )),
                this.setOptions(e);
              let o = this.options,
                r = o.labels,
                n = o.type;
              (this.userOptions = e),
                (this.minPixelPadding = 0),
                (this.reversed = O(o.reversed, this.reversed)),
                (this.visible = o.visible),
                (this.zoomEnabled = o.zoomEnabled),
                (this.hasNames = "category" === n || !0 === o.categories),
                (this.categories =
                  o.categories || (this.hasNames ? [] : void 0)),
                this.names || ((this.names = []), (this.names.keys = {})),
                (this.plotLinesAndBandsGroups = {}),
                (this.positiveValuesOnly = !!this.logarithmic),
                (this.isLinked = m(o.linkedTo)),
                (this.ticks = {}),
                (this.labelEdge = []),
                (this.minorTicks = {}),
                (this.plotLinesAndBands = []),
                (this.alternateBands = {}),
                (this.len = 0),
                (this.minRange = this.userMinRange = o.minRange || o.maxZoom),
                (this.range = o.range),
                (this.offset = o.offset || 0),
                (this.max = null),
                (this.min = null);
              let a = O(
                o.crosshair,
                I(t.options.tooltip.crosshairs)[s ? 0 : 1]
              );
              (this.crosshair = !0 === a ? {} : a),
                -1 === t.axes.indexOf(this) &&
                  (s
                    ? t.axes.splice(t.xAxis.length, 0, this)
                    : t.axes.push(this),
                  M(this, t[this.coll])),
                t.orderItems(this.coll),
                (this.series = this.series || []),
                t.inverted &&
                  !this.isZAxis &&
                  s &&
                  void 0 === this.reversed &&
                  (this.reversed = !0),
                (this.labelRotation = w(r.rotation) ? r.rotation : void 0),
                d(this, o),
                k(this, "afterInit");
            }
            setOptions(t) {
              (this.options = A(
                e.defaultXAxisOptions,
                "yAxis" === this.coll && e.defaultYAxisOptions,
                [
                  e.defaultTopAxisOptions,
                  e.defaultRightAxisOptions,
                  e.defaultBottomAxisOptions,
                  e.defaultLeftAxisOptions,
                ][this.side],
                A(l[this.coll], t)
              )),
                k(this, "afterSetOptions", { userOptions: t });
            }
            defaultLabelFormatter(t) {
              let e = this.axis,
                i = this.chart,
                { numberFormatter: s } = i,
                o = w(this.value) ? this.value : NaN,
                r = e.chart.time,
                n = e.categories,
                a = this.dateTimeLabelFormat,
                h = l.lang,
                d = h.numericSymbols,
                c = h.numericSymbolMagnitude || 1e3,
                p = e.logarithmic ? Math.abs(o) : e.tickInterval,
                u = d && d.length,
                g,
                f;
              if (n) f = `${this.value}`;
              else if (a) f = r.dateFormat(a, o);
              else if (u && p >= 1e3)
                for (; u-- && void 0 === f; )
                  p >= (g = Math.pow(c, u + 1)) &&
                    (10 * o) % g == 0 &&
                    null !== d[u] &&
                    0 !== o &&
                    (f = s(o / g, -1) + d[u]);
              return (
                void 0 === f &&
                  (f = Math.abs(o) >= 1e4 ? s(o, -1) : s(o, -1, void 0, "")),
                f
              );
            }
            getSeriesExtremes() {
              let t;
              let e = this;
              e.chart,
                k(this, "getSeriesExtremes", null, function () {
                  (e.hasVisibleSeries = !1),
                    (e.dataMin = e.dataMax = e.threshold = null),
                    (e.softThreshold = !e.isXAxis),
                    e.series.forEach(function (i) {
                      if (i.reserveSpace()) {
                        let s = i.options,
                          o,
                          r = s.threshold,
                          n,
                          a;
                        if (
                          ((e.hasVisibleSeries = !0),
                          e.positiveValuesOnly && r <= 0 && (r = null),
                          e.isXAxis)
                        )
                          (o = i.xData) &&
                            o.length &&
                            ((o = e.logarithmic ? o.filter((t) => t > 0) : o),
                            (n = (t = i.getXExtremes(o)).min),
                            (a = t.max),
                            w(n) ||
                              n instanceof Date ||
                              ((o = o.filter(w)),
                              (n = (t = i.getXExtremes(o)).min),
                              (a = t.max)),
                            o.length &&
                              ((e.dataMin = Math.min(O(e.dataMin, n), n)),
                              (e.dataMax = Math.max(O(e.dataMax, a), a))));
                        else {
                          let t = i.applyExtremes();
                          w(t.dataMin) &&
                            ((n = t.dataMin),
                            (e.dataMin = Math.min(O(e.dataMin, n), n))),
                            w(t.dataMax) &&
                              ((a = t.dataMax),
                              (e.dataMax = Math.max(O(e.dataMax, a), a))),
                            m(r) && (e.threshold = r),
                            (!s.softThreshold || e.positiveValuesOnly) &&
                              (e.softThreshold = !1);
                        }
                      }
                    });
                }),
                k(this, "afterGetSeriesExtremes");
            }
            translate(t, e, i, s, o, r) {
              let n = this.linkedParent || this,
                a = s && n.old ? n.old.min : n.min;
              if (!w(a)) return NaN;
              let h = n.minPixelPadding,
                l =
                  (n.isOrdinal ||
                    (n.brokenAxis && n.brokenAxis.hasBreaks) ||
                    (n.logarithmic && o)) &&
                  n.lin2val,
                d = 1,
                c = 0,
                p = s && n.old ? n.old.transA : n.transA,
                u = 0;
              if (
                (p || (p = n.transA),
                i && ((d *= -1), (c = n.len)),
                n.reversed && ((d *= -1), (c -= d * (n.sector || n.len))),
                e)
              )
                (u = (t = t * d + c - h) / p + a), l && (u = n.lin2val(u));
              else {
                l && (t = n.val2lin(t));
                let e = d * (t - a) * p;
                u = (n.isRadial ? e : f(e)) + c + d * h + (w(r) ? p * r : 0);
              }
              return u;
            }
            toPixels(t, e) {
              return (
                this.translate(t, !1, !this.horiz, void 0, !0) +
                (e ? 0 : this.pos)
              );
            }
            toValue(t, e) {
              return this.translate(
                t - (e ? 0 : this.pos),
                !0,
                !this.horiz,
                void 0,
                !0
              );
            }
            getPlotLinePath(t) {
              let e = this,
                i = e.chart,
                s = e.left,
                o = e.top,
                r = t.old,
                n = t.value,
                a = t.lineWidth,
                h = (r && i.oldChartHeight) || i.chartHeight,
                l = (r && i.oldChartWidth) || i.chartWidth,
                d = e.transB,
                c = t.translatedValue,
                p = t.force,
                u,
                f,
                m,
                x,
                y;
              function b(t, e, i) {
                return (
                  "pass" !== p &&
                    (t < e || t > i) &&
                    (p ? (t = g(t, e, i)) : (y = !0)),
                  t
                );
              }
              let v = {
                value: n,
                lineWidth: a,
                old: r,
                force: p,
                acrossPanes: t.acrossPanes,
                translatedValue: c,
              };
              return (
                k(this, "getPlotLinePath", v, function (t) {
                  (u = m =
                    Math.round(
                      (c = g(
                        (c = O(c, e.translate(n, void 0, void 0, r))),
                        -1e5,
                        1e5
                      )) + d
                    )),
                    (f = x = Math.round(h - c - d)),
                    w(c)
                      ? e.horiz
                        ? ((f = o),
                          (x = h - e.bottom),
                          (u = m = b(u, s, s + e.width)))
                        : ((u = s),
                          (m = l - e.right),
                          (f = x = b(f, o, o + e.height)))
                      : ((y = !0), (p = !1)),
                    (t.path =
                      y && !p
                        ? void 0
                        : i.renderer.crispLine(
                            [
                              ["M", u, f],
                              ["L", m, x],
                            ],
                            a || 1
                          ));
                }),
                v.path || null
              );
            }
            getLinearTickPositions(t, e, i) {
              let s, o, r;
              let n = f(Math.floor(e / t) * t),
                a = f(Math.ceil(i / t) * t),
                h = [];
              if ((f(n + t) === n && (r = 20), this.single)) return [e];
              for (s = n; s <= a && (h.push(s), (s = f(s + t, r)) !== o); )
                o = s;
              return h;
            }
            getMinorTickInterval() {
              let t = this.options;
              return !0 === t.minorTicks
                ? O(t.minorTickInterval, "auto")
                : !1 === t.minorTicks
                ? null
                : t.minorTickInterval;
            }
            getMinorTickPositions() {
              let t = this.options,
                e = this.tickPositions,
                i = this.minorTickInterval,
                s = this.pointRangePadding || 0,
                o = this.min - s,
                r = this.max + s,
                n = r - o,
                a = [],
                h;
              if (n && n / i < this.len / 3) {
                let s = this.logarithmic;
                if (s)
                  this.paddedTicks.forEach(function (t, e, o) {
                    e &&
                      a.push.apply(
                        a,
                        s.getLogTickPositions(i, o[e - 1], o[e], !0)
                      );
                  });
                else if (
                  this.dateTime &&
                  "auto" === this.getMinorTickInterval()
                )
                  a = a.concat(
                    this.getTimeTicks(
                      this.dateTime.normalizeTimeTickInterval(i),
                      o,
                      r,
                      t.startOfWeek
                    )
                  );
                else
                  for (h = o + ((e[0] - o) % i); h <= r && h !== a[0]; h += i)
                    a.push(h);
              }
              return 0 !== a.length && this.trimTicks(a), a;
            }
            adjustForMinRange() {
              let t = this.options,
                e = this.logarithmic,
                i = this.min,
                s = this.max,
                o,
                r,
                n,
                a,
                h,
                l;
              this.isXAxis &&
                void 0 === this.minRange &&
                !e &&
                (m(t.min) || m(t.max) || m(t.floor) || m(t.ceiling)
                  ? (this.minRange = null)
                  : ((n =
                      S(
                        this.series.map(
                          (t) =>
                            (t.xIncrement ? t.xData?.slice(0, 2) : t.xData) ||
                            []
                        )
                      ) || 0),
                    (this.minRange = Math.min(
                      5 * n,
                      this.dataMax - this.dataMin
                    )))),
                s - i < this.minRange &&
                  ((r = this.dataMax - this.dataMin >= this.minRange),
                  (o = ((l = this.minRange) - s + i) / 2),
                  (a = [i - o, O(t.min, i - o)]),
                  r && (a[2] = e ? e.log2lin(this.dataMin) : this.dataMin),
                  (h = [(i = p(a)) + l, O(t.max, i + l)]),
                  r && (h[2] = e ? e.log2lin(this.dataMax) : this.dataMax),
                  (s = u(h)) - i < l &&
                    ((a[0] = s - l), (a[1] = O(t.min, s - l)), (i = p(a)))),
                (this.min = i),
                (this.max = s);
            }
            getClosest() {
              let t, e;
              if (this.categories) e = 1;
              else {
                let i = [];
                this.series.forEach(function (t) {
                  let s = t.closestPointRange;
                  t.xData?.length === 1
                    ? i.push(t.xData[0])
                    : !t.noSharedTooltip &&
                      m(s) &&
                      t.reserveSpace() &&
                      (e = m(e) ? Math.min(e, s) : s);
                }),
                  i.length && (i.sort((t, e) => t - e), (t = S([i])));
              }
              return t && e ? Math.min(t, e) : t || e;
            }
            nameToX(t) {
              let e = C(this.options.categories),
                i = e ? this.categories : this.names,
                s = t.options.x,
                o;
              return (
                (t.series.requireSorting = !1),
                m(s) ||
                  (s =
                    this.options.uniqueNames && i
                      ? e
                        ? i.indexOf(t.name)
                        : O(i.keys[t.name], -1)
                      : t.series.autoIncrement()),
                -1 === s ? !e && i && (o = i.length) : (o = s),
                void 0 !== o
                  ? ((this.names[o] = t.name), (this.names.keys[t.name] = o))
                  : t.x && (o = t.x),
                o
              );
            }
            updateNames() {
              let t = this,
                e = this.names,
                i = e.length;
              i > 0 &&
                (Object.keys(e.keys).forEach(function (t) {
                  delete e.keys[t];
                }),
                (e.length = 0),
                (this.minRange = this.userMinRange),
                (this.series || []).forEach(function (e) {
                  (e.xIncrement = null),
                    (!e.points || e.isDirtyData) &&
                      ((t.max = Math.max(t.max, e.xData.length - 1)),
                      e.processData(),
                      e.generatePoints()),
                    e.data.forEach(function (i, s) {
                      let o;
                      i &&
                        i.options &&
                        void 0 !== i.name &&
                        void 0 !== (o = t.nameToX(i)) &&
                        o !== i.x &&
                        ((i.x = o), (e.xData[s] = o));
                    });
                }));
            }
            setAxisTranslation() {
              let t = this,
                e = t.max - t.min,
                i = t.linkedParent,
                s = !!t.categories,
                o = t.isXAxis,
                r = t.axisPointRange || 0,
                n,
                a = 0,
                h = 0,
                l,
                d = t.transA;
              (o || s || r) &&
                ((n = t.getClosest()),
                i
                  ? ((a = i.minPointOffset), (h = i.pointRangePadding))
                  : t.series.forEach(function (e) {
                      let i = s
                          ? 1
                          : o
                          ? O(e.options.pointRange, n, 0)
                          : t.axisPointRange || 0,
                        l = e.options.pointPlacement;
                      if (((r = Math.max(r, i)), !t.single || s)) {
                        let t = e.is("xrange") ? !o : o;
                        (a = Math.max(a, t && T(l) ? 0 : i / 2)),
                          (h = Math.max(h, t && "on" === l ? 0 : i));
                      }
                    }),
                (l =
                  t.ordinal && t.ordinal.slope && n ? t.ordinal.slope / n : 1),
                (t.minPointOffset = a *= l),
                (t.pointRangePadding = h *= l),
                (t.pointRange = Math.min(r, t.single && s ? 1 : e)),
                o && n && (t.closestPointRange = n)),
                (t.translationSlope =
                  t.transA =
                  d =
                    t.staticScale || t.len / (e + h || 1)),
                (t.transB = t.horiz ? t.left : t.bottom),
                (t.minPixelPadding = d * a),
                k(this, "afterSetAxisTranslation");
            }
            minFromRange() {
              return this.max - this.range;
            }
            setTickInterval(t) {
              let e = this.chart,
                i = this.logarithmic,
                s = this.options,
                o = this.isXAxis,
                r = this.isLinked,
                n = s.tickPixelInterval,
                a = this.categories,
                h = this.softThreshold,
                l = s.maxPadding,
                d = s.minPadding,
                c,
                p,
                u =
                  w(s.tickInterval) && s.tickInterval >= 0
                    ? s.tickInterval
                    : void 0,
                g = w(this.threshold) ? this.threshold : null,
                x,
                y,
                v,
                S;
              if (
                (this.dateTime || a || r || this.getTickAmount(),
                (v = O(this.userMin, s.min)),
                (S = O(this.userMax, s.max)),
                r
                  ? ((this.linkedParent = e[this.coll][s.linkedTo]),
                    (p = this.linkedParent.getExtremes()),
                    (this.min = O(p.min, p.dataMin)),
                    (this.max = O(p.max, p.dataMax)),
                    s.type !== this.linkedParent.options.type && b(11, 1, e))
                  : (h &&
                      m(g) &&
                      (this.dataMin >= g
                        ? ((x = g), (d = 0))
                        : this.dataMax <= g && ((y = g), (l = 0))),
                    (this.min = O(v, x, this.dataMin)),
                    (this.max = O(S, y, this.dataMax))),
                i &&
                  (this.positiveValuesOnly &&
                    !t &&
                    0 >= Math.min(this.min, O(this.dataMin, this.min)) &&
                    b(10, 1, e),
                  (this.min = f(i.log2lin(this.min), 16)),
                  (this.max = f(i.log2lin(this.max), 16))),
                this.range &&
                  m(this.max) &&
                  ((this.userMin =
                    this.min =
                    v =
                      Math.max(this.dataMin, this.minFromRange())),
                  (this.userMax = S = this.max),
                  (this.range = null)),
                k(this, "foundExtremes"),
                this.beforePadding && this.beforePadding(),
                this.adjustForMinRange(),
                !w(this.userMin) &&
                  w(s.softMin) &&
                  s.softMin < this.min &&
                  (this.min = v = s.softMin),
                !w(this.userMax) &&
                  w(s.softMax) &&
                  s.softMax > this.max &&
                  (this.max = S = s.softMax),
                !a &&
                  !this.axisPointRange &&
                  !(this.stacking && this.stacking.usePercentage) &&
                  !r &&
                  m(this.min) &&
                  m(this.max) &&
                  (c = this.max - this.min) &&
                  (!m(v) && d && (this.min -= c * d),
                  !m(S) && l && (this.max += c * l)),
                !w(this.userMin) &&
                  w(s.floor) &&
                  (this.min = Math.max(this.min, s.floor)),
                !w(this.userMax) &&
                  w(s.ceiling) &&
                  (this.max = Math.min(this.max, s.ceiling)),
                h &&
                  m(this.dataMin) &&
                  ((g = g || 0),
                  !m(v) && this.min < g && this.dataMin >= g
                    ? (this.min = this.options.minRange
                        ? Math.min(g, this.max - this.minRange)
                        : g)
                    : !m(S) &&
                      this.max > g &&
                      this.dataMax <= g &&
                      (this.max = this.options.minRange
                        ? Math.max(g, this.min + this.minRange)
                        : g)),
                w(this.min) &&
                  w(this.max) &&
                  !this.chart.polar &&
                  this.min > this.max &&
                  (m(this.options.min)
                    ? (this.max = this.min)
                    : m(this.options.max) && (this.min = this.max)),
                this.min === this.max ||
                void 0 === this.min ||
                void 0 === this.max
                  ? (this.tickInterval = 1)
                  : r &&
                    this.linkedParent &&
                    !u &&
                    n === this.linkedParent.options.tickPixelInterval
                  ? (this.tickInterval = u = this.linkedParent.tickInterval)
                  : (this.tickInterval = O(
                      u,
                      this.tickAmount
                        ? (this.max - this.min) /
                            Math.max(this.tickAmount - 1, 1)
                        : void 0,
                      a
                        ? 1
                        : ((this.max - this.min) * n) / Math.max(this.len, n)
                    )),
                o && !t)
              ) {
                let t =
                  this.min !== (this.old && this.old.min) ||
                  this.max !== (this.old && this.old.max);
                this.series.forEach(function (e) {
                  (e.forceCrop = e.forceCropping && e.forceCropping()),
                    e.processData(t);
                }),
                  k(this, "postProcessData", { hasExtremesChanged: t });
              }
              this.setAxisTranslation(),
                k(this, "initialAxisTranslation"),
                this.pointRange &&
                  !u &&
                  (this.tickInterval = Math.max(
                    this.pointRange,
                    this.tickInterval
                  ));
              let M = O(
                s.minTickInterval,
                this.dateTime && !this.series.some((t) => t.noSharedTooltip)
                  ? this.closestPointRange
                  : 0
              );
              !u && this.tickInterval < M && (this.tickInterval = M),
                this.dateTime ||
                  this.logarithmic ||
                  u ||
                  (this.tickInterval = j(this, this.tickInterval)),
                this.tickAmount || (this.tickInterval = this.unsquish()),
                this.setTickPositions();
            }
            setTickPositions() {
              let t = this.options,
                e = t.tickPositions,
                i = t.tickPositioner,
                s = this.getMinorTickInterval(),
                o = this.hasVerticalPanning(),
                r = "colorAxis" === this.coll,
                n = (r || !o) && t.startOnTick,
                a = (r || !o) && t.endOnTick,
                h = [],
                l;
              if (
                ((this.tickmarkOffset =
                  this.categories &&
                  "between" === t.tickmarkPlacement &&
                  1 === this.tickInterval
                    ? 0.5
                    : 0),
                (this.minorTickInterval =
                  "auto" === s && this.tickInterval
                    ? this.tickInterval / t.minorTicksPerMajor
                    : s),
                (this.single =
                  this.min === this.max &&
                  m(this.min) &&
                  !this.tickAmount &&
                  (parseInt(this.min, 10) === this.min ||
                    !1 !== t.allowDecimals)),
                e)
              )
                h = e.slice();
              else if (w(this.min) && w(this.max)) {
                if (
                  (!this.ordinal || !this.ordinal.positions) &&
                  (this.max - this.min) / this.tickInterval >
                    Math.max(2 * this.len, 200)
                )
                  (h = [this.min, this.max]), b(19, !1, this.chart);
                else if (this.dateTime)
                  h = this.getTimeTicks(
                    this.dateTime.normalizeTimeTickInterval(
                      this.tickInterval,
                      t.units
                    ),
                    this.min,
                    this.max,
                    t.startOfWeek,
                    this.ordinal && this.ordinal.positions,
                    this.closestPointRange,
                    !0
                  );
                else if (this.logarithmic)
                  h = this.logarithmic.getLogTickPositions(
                    this.tickInterval,
                    this.min,
                    this.max
                  );
                else {
                  let t = this.tickInterval,
                    e = t;
                  for (; e <= 2 * t; )
                    if (
                      ((h = this.getLinearTickPositions(
                        this.tickInterval,
                        this.min,
                        this.max
                      )),
                      this.tickAmount && h.length > this.tickAmount)
                    )
                      this.tickInterval = j(this, (e *= 1.1));
                    else break;
                }
                h.length > this.len &&
                  (h = [h[0], h[h.length - 1]])[0] === h[1] &&
                  (h.length = 1),
                  i &&
                    ((this.tickPositions = h),
                    (l = i.apply(this, [this.min, this.max])) && (h = l));
              }
              (this.tickPositions = h),
                (this.paddedTicks = h.slice(0)),
                this.trimTicks(h, n, a),
                !this.isLinked &&
                  w(this.min) &&
                  w(this.max) &&
                  (this.single &&
                    h.length < 2 &&
                    !this.categories &&
                    !this.series.some(
                      (t) =>
                        t.is("heatmap") &&
                        "between" === t.options.pointPlacement
                    ) &&
                    ((this.min -= 0.5), (this.max += 0.5)),
                  e || l || this.adjustTickAmount()),
                k(this, "afterSetTickPositions");
            }
            trimTicks(t, e, i) {
              let s = t[0],
                o = t[t.length - 1],
                r = (!this.isOrdinal && this.minPointOffset) || 0;
              if ((k(this, "trimTicks"), !this.isLinked)) {
                if (e && s !== -1 / 0) this.min = s;
                else for (; this.min - r > t[0]; ) t.shift();
                if (i) this.max = o;
                else for (; this.max + r < t[t.length - 1]; ) t.pop();
                0 === t.length &&
                  m(s) &&
                  !this.options.tickPositions &&
                  t.push((o + s) / 2);
              }
            }
            alignToOthers() {
              let t;
              let e = this,
                i = [this],
                s = e.options,
                o =
                  "yAxis" === this.coll &&
                  this.chart.options.chart.alignThresholds,
                r = [];
              if (
                ((e.thresholdAlignment = void 0),
                ((!1 !== this.chart.options.chart.alignTicks && s.alignTicks) ||
                  o) &&
                  !1 !== s.startOnTick &&
                  !1 !== s.endOnTick &&
                  !e.logarithmic)
              ) {
                let s = (t) => {
                    let { horiz: e, options: i } = t;
                    return [e ? i.left : i.top, i.width, i.height, i.pane].join(
                      ","
                    );
                  },
                  o = s(this);
                this.chart[this.coll].forEach(function (r) {
                  let { series: n } = r;
                  n.length &&
                    n.some((t) => t.visible) &&
                    r !== e &&
                    s(r) === o &&
                    ((t = !0), i.push(r));
                });
              }
              if (t && o) {
                i.forEach((t) => {
                  let i = t.getThresholdAlignment(e);
                  w(i) && r.push(i);
                });
                let t =
                  r.length > 1
                    ? r.reduce((t, e) => (t += e), 0) / r.length
                    : void 0;
                i.forEach((e) => {
                  e.thresholdAlignment = t;
                });
              }
              return t;
            }
            getThresholdAlignment(t) {
              if (
                ((!w(this.dataMin) ||
                  (this !== t &&
                    this.series.some((t) => t.isDirty || t.isDirtyData))) &&
                  this.getSeriesExtremes(),
                w(this.threshold))
              ) {
                let t = g(
                  (this.threshold - (this.dataMin || 0)) /
                    ((this.dataMax || 0) - (this.dataMin || 0)),
                  0,
                  1
                );
                return this.options.reversed && (t = 1 - t), t;
              }
            }
            getTickAmount() {
              let t = this.options,
                e = t.tickPixelInterval,
                i = t.tickAmount;
              m(t.tickInterval) ||
                i ||
                !(this.len < e) ||
                this.isRadial ||
                this.logarithmic ||
                !t.startOnTick ||
                !t.endOnTick ||
                (i = 2),
                !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1),
                i < 4 && ((this.finalTickAmt = i), (i = 5)),
                (this.tickAmount = i);
            }
            adjustTickAmount() {
              let t = this,
                {
                  finalTickAmt: e,
                  max: i,
                  min: s,
                  options: o,
                  tickPositions: r,
                  tickAmount: n,
                  thresholdAlignment: a,
                } = t,
                h = r && r.length,
                l = O(t.threshold, t.softThreshold ? 0 : null),
                d,
                c,
                p = t.tickInterval,
                u,
                g = () => r.push(f(r[r.length - 1] + p)),
                x = () => r.unshift(f(r[0] - p));
              if (
                (w(a) &&
                  ((u =
                    a < 0.5 ? Math.ceil(a * (n - 1)) : Math.floor(a * (n - 1))),
                  o.reversed && (u = n - 1 - u)),
                t.hasData() && w(s) && w(i))
              ) {
                let a = () => {
                  (t.transA *= (h - 1) / (n - 1)),
                    (t.min = o.startOnTick ? r[0] : Math.min(s, r[0])),
                    (t.max = o.endOnTick
                      ? r[r.length - 1]
                      : Math.max(i, r[r.length - 1]));
                };
                if (w(u) && w(t.threshold)) {
                  for (
                    ;
                    r[u] !== l ||
                    r.length !== n ||
                    r[0] > s ||
                    r[r.length - 1] < i;

                  ) {
                    for (r.length = 0, r.push(t.threshold); r.length < n; )
                      void 0 === r[u] || r[u] > t.threshold ? x() : g();
                    if (p > 8 * t.tickInterval) break;
                    p *= 2;
                  }
                  a();
                } else if (h < n) {
                  for (; r.length < n; ) r.length % 2 || s === l ? g() : x();
                  a();
                }
                if (m(e)) {
                  for (c = d = r.length; c--; )
                    ((3 === e && c % 2 == 1) ||
                      (e <= 2 && c > 0 && c < d - 1)) &&
                      r.splice(c, 1);
                  t.finalTickAmt = void 0;
                }
              }
            }
            setScale() {
              let { coll: t, stacking: e } = this,
                i = !1,
                s = !1;
              this.series.forEach((t) => {
                (i = i || t.isDirtyData || t.isDirty),
                  (s = s || (t.xAxis && t.xAxis.isDirty) || !1);
              }),
                this.setAxisSize();
              let o = this.len !== (this.old && this.old.len);
              o ||
              i ||
              s ||
              this.isLinked ||
              this.forceRedraw ||
              this.userMin !== (this.old && this.old.userMin) ||
              this.userMax !== (this.old && this.old.userMax) ||
              this.alignToOthers()
                ? (e && "yAxis" === t && e.buildStacks(),
                  (this.forceRedraw = !1),
                  this.userMinRange || (this.minRange = void 0),
                  this.getSeriesExtremes(),
                  this.setTickInterval(),
                  e && "xAxis" === t && e.buildStacks(),
                  this.isDirty ||
                    (this.isDirty =
                      o ||
                      this.min !== (this.old && this.old.min) ||
                      this.max !== (this.old && this.old.max)))
                : e && e.cleanStacks(),
                i && this.panningState && (this.panningState.isDirty = !0),
                k(this, "afterSetScale");
            }
            setExtremes(t, e, i, s, o) {
              let r = this,
                n = r.chart;
              (i = O(i, !0)),
                r.series.forEach(function (t) {
                  delete t.kdTree;
                }),
                k(
                  r,
                  "setExtremes",
                  (o = v(o, { min: t, max: e })),
                  function () {
                    (r.userMin = t),
                      (r.userMax = e),
                      (r.eventArgs = o),
                      i && n.redraw(s);
                  }
                );
            }
            zoom(t, e) {
              let i = this,
                s = this.dataMin,
                o = this.dataMax,
                r = this.options,
                n = Math.min(s, O(r.min, s)),
                a = Math.max(o, O(r.max, o)),
                h = { newMin: t, newMax: e };
              return (
                k(this, "zoom", h, function (t) {
                  let e = t.newMin,
                    r = t.newMax;
                  (e !== i.min || r !== i.max) &&
                    (!i.allowZoomOutside &&
                      (m(s) && (e < n && (e = n), e > a && (e = a)),
                      m(o) && (r < n && (r = n), r > a && (r = a))),
                    (i.displayBtn = void 0 !== e || void 0 !== r),
                    i.setExtremes(e, r, !1, void 0, { trigger: "zoom" })),
                    (t.zoomed = !0);
                }),
                h.zoomed
              );
            }
            setAxisSize() {
              let t = this.chart,
                e = this.options,
                i = e.offsets || [0, 0, 0, 0],
                s = this.horiz,
                o = (this.width = Math.round(
                  D(O(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)
                )),
                r = (this.height = Math.round(
                  D(O(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)
                )),
                n = (this.top = Math.round(
                  D(O(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)
                )),
                a = (this.left = Math.round(
                  D(O(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft)
                ));
              (this.bottom = t.chartHeight - r - n),
                (this.right = t.chartWidth - o - a),
                (this.len = Math.max(s ? o : r, 0)),
                (this.pos = s ? a : n);
            }
            getExtremes() {
              let t = this.logarithmic;
              return {
                min: t ? f(t.lin2log(this.min)) : this.min,
                max: t ? f(t.lin2log(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax,
              };
            }
            getThreshold(t) {
              let e = this.logarithmic,
                i = e ? e.lin2log(this.min) : this.min,
                s = e ? e.lin2log(this.max) : this.max;
              return (
                null === t || t === -1 / 0
                  ? (t = i)
                  : t === 1 / 0
                  ? (t = s)
                  : i > t
                  ? (t = i)
                  : s < t && (t = s),
                this.translate(t, 0, 1, 0, 1)
              );
            }
            autoLabelAlign(t) {
              let e = (O(t, 0) - 90 * this.side + 720) % 360,
                i = { align: "center" };
              return (
                k(this, "autoLabelAlign", i, function (t) {
                  e > 15 && e < 165
                    ? (t.align = "right")
                    : e > 195 && e < 345 && (t.align = "left");
                }),
                i.align
              );
            }
            tickSize(t) {
              let e = this.options,
                i = O(
                  e["tick" === t ? "tickWidth" : "minorTickWidth"],
                  "tick" === t && this.isXAxis && !this.categories ? 1 : 0
                ),
                s = e["tick" === t ? "tickLength" : "minorTickLength"],
                o;
              i &&
                s &&
                ("inside" === e[t + "Position"] && (s = -s), (o = [s, i]));
              let r = { tickSize: o };
              return k(this, "afterTickSize", r), r.tickSize;
            }
            labelMetrics() {
              let t = this.chart.renderer,
                e = this.ticks,
                i = e[Object.keys(e)[0]] || {};
              return this.chart.renderer.fontMetrics(
                i.label || i.movedLabel || t.box
              );
            }
            unsquish() {
              let t = this.options.labels,
                e = this.horiz,
                i = this.tickInterval,
                s =
                  this.len /
                  (((this.categories ? 1 : 0) + this.max - this.min) / i),
                o = t.rotation,
                r = 0.75 * this.labelMetrics().h,
                n = Math.max(this.max - this.min, 0),
                a = function (t) {
                  let e = t / (s || 1);
                  return (
                    (e = e > 1 ? Math.ceil(e) : 1) * i > n &&
                      t !== 1 / 0 &&
                      s !== 1 / 0 &&
                      n &&
                      (e = Math.ceil(n / i)),
                    f(e * i)
                  );
                },
                h = i,
                l,
                d = Number.MAX_VALUE,
                p;
              if (e) {
                if (
                  (!t.staggerLines &&
                    (w(o)
                      ? (p = [o])
                      : s < t.autoRotationLimit && (p = t.autoRotation)),
                  p)
                ) {
                  let t, e;
                  for (let i of p)
                    (i === o || (i && i >= -90 && i <= 90)) &&
                      (e =
                        (t = a(Math.abs(r / Math.sin(c * i)))) +
                        Math.abs(i / 360)) < d &&
                      ((d = e), (l = i), (h = t));
                }
              } else h = a(r);
              return (
                (this.autoRotation = p),
                (this.labelRotation = O(l, w(o) ? o : 0)),
                t.step ? i : h
              );
            }
            getSlotWidth(t) {
              let e = this.chart,
                i = this.horiz,
                s = this.options.labels,
                o = Math.max(
                  this.tickPositions.length - (this.categories ? 0 : 1),
                  1
                ),
                r = e.margin[3];
              if (t && w(t.slotWidth)) return t.slotWidth;
              if (i && s.step < 2)
                return s.rotation
                  ? 0
                  : ((this.staggerLines || 1) * this.len) / o;
              if (!i) {
                let t = s.style.width;
                if (void 0 !== t) return parseInt(String(t), 10);
                if (r) return r - e.spacing[3];
              }
              return 0.33 * e.chartWidth;
            }
            renderUnsquish() {
              let t = this.chart,
                e = t.renderer,
                i = this.tickPositions,
                s = this.ticks,
                o = this.options.labels,
                r = o.style,
                n = this.horiz,
                a = this.getSlotWidth(),
                h = Math.max(1, Math.round(a - 2 * o.padding)),
                l = {},
                d = this.labelMetrics(),
                c = r.textOverflow,
                p,
                u,
                g = 0,
                f,
                m;
              if (
                (T(o.rotation) || (l.rotation = o.rotation || 0),
                i.forEach(function (t) {
                  let e = s[t];
                  e.movedLabel && e.replaceMovedLabel(),
                    e &&
                      e.label &&
                      e.label.textPxLength > g &&
                      (g = e.label.textPxLength);
                }),
                (this.maxLabelLength = g),
                this.autoRotation)
              )
                g > h && g > d.h
                  ? (l.rotation = this.labelRotation)
                  : (this.labelRotation = 0);
              else if (a && ((p = h), !c))
                for (u = "clip", m = i.length; !n && m--; )
                  (f = s[i[m]].label) &&
                    (f.styles && "ellipsis" === f.styles.textOverflow
                      ? f.css({ textOverflow: "clip" })
                      : f.textPxLength > a && f.css({ width: a + "px" }),
                    f.getBBox().height > this.len / i.length - (d.h - d.f) &&
                      (f.specificTextOverflow = "ellipsis"));
              l.rotation &&
                ((p = g > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : g),
                c || (u = "ellipsis")),
                (this.labelAlign =
                  o.align || this.autoLabelAlign(this.labelRotation)),
                this.labelAlign && (l.align = this.labelAlign),
                i.forEach(function (t) {
                  let e = s[t],
                    i = e && e.label,
                    o = r.width,
                    n = {};
                  i &&
                    (i.attr(l),
                    e.shortenLabel
                      ? e.shortenLabel()
                      : p &&
                        !o &&
                        "nowrap" !== r.whiteSpace &&
                        (p < i.textPxLength || "SPAN" === i.element.tagName)
                      ? ((n.width = p + "px"),
                        c || (n.textOverflow = i.specificTextOverflow || u),
                        i.css(n))
                      : i.styles &&
                        i.styles.width &&
                        !n.width &&
                        !o &&
                        i.css({ width: null }),
                    delete i.specificTextOverflow,
                    (e.rotation = l.rotation));
                }, this),
                (this.tickRotCorr = e.rotCorr(
                  d.b,
                  this.labelRotation || 0,
                  0 !== this.side
                ));
            }
            hasData() {
              return (
                this.series.some(function (t) {
                  return t.hasData();
                }) ||
                (this.options.showEmpty && m(this.min) && m(this.max))
              );
            }
            addTitle(t) {
              let e;
              let i = this.chart.renderer,
                s = this.horiz,
                o = this.opposite,
                r = this.options,
                n = r.title,
                a = this.chart.styledMode;
              this.axisTitle ||
                ((e = n.textAlign) ||
                  (e = (
                    s
                      ? { low: "left", middle: "center", high: "right" }
                      : {
                          low: o ? "right" : "left",
                          middle: "center",
                          high: o ? "left" : "right",
                        }
                  )[n.align]),
                (this.axisTitle = i
                  .text(n.text || "", 0, 0, n.useHTML)
                  .attr({ zIndex: 7, rotation: n.rotation, align: e })
                  .addClass("highcharts-axis-title")),
                a || this.axisTitle.css(A(n.style)),
                this.axisTitle.add(this.axisGroup),
                (this.axisTitle.isNew = !0)),
                a ||
                  n.style.width ||
                  this.isRadial ||
                  this.axisTitle.css({ width: this.len + "px" }),
                this.axisTitle[t ? "show" : "hide"](t);
            }
            generateTick(t) {
              let e = this.ticks;
              e[t] ? e[t].addLabel() : (e[t] = new n(this, t));
            }
            getOffset() {
              let t = this,
                {
                  chart: e,
                  horiz: i,
                  options: s,
                  side: o,
                  ticks: r,
                  tickPositions: n,
                  coll: a,
                  axisParent: h,
                } = t,
                l = e.renderer,
                d = e.inverted && !t.isZAxis ? [1, 0, 3, 2][o] : o,
                c = t.hasData(),
                p = s.title,
                u = s.labels,
                g = w(s.crossing),
                f = e.axisOffset,
                x = e.clipOffset,
                y = [-1, 1, 1, -1][o],
                b = s.className,
                v,
                S = 0,
                M,
                C = 0,
                T = 0,
                A,
                P;
              if (
                ((t.showAxis = v = c || s.showEmpty),
                (t.staggerLines = (t.horiz && u.staggerLines) || void 0),
                !t.axisGroup)
              ) {
                let e = (t, e, i) =>
                  l
                    .g(t)
                    .attr({ zIndex: i })
                    .addClass(
                      `highcharts-${a.toLowerCase()}${e} ` +
                        (this.isRadial ? `highcharts-radial-axis${e} ` : "") +
                        (b || "")
                    )
                    .add(h);
                (t.gridGroup = e("grid", "-grid", s.gridZIndex)),
                  (t.axisGroup = e("axis", "", s.zIndex)),
                  (t.labelGroup = e("axis-labels", "-labels", u.zIndex));
              }
              if (
                (c || t.isLinked
                  ? (n.forEach(function (e) {
                      t.generateTick(e);
                    }),
                    t.renderUnsquish(),
                    (t.reserveSpaceDefault =
                      0 === o ||
                      2 === o ||
                      { 1: "left", 3: "right" }[o] === t.labelAlign),
                    O(
                      u.reserveSpace,
                      !g && null,
                      "center" === t.labelAlign || null,
                      t.reserveSpaceDefault
                    ) &&
                      n.forEach(function (t) {
                        T = Math.max(r[t].getLabelSize(), T);
                      }),
                    t.staggerLines && (T *= t.staggerLines),
                    (t.labelOffset = T * (t.opposite ? -1 : 1)))
                  : L(r, function (t, e) {
                      t.destroy(), delete r[e];
                    }),
                p &&
                  p.text &&
                  !1 !== p.enabled &&
                  (t.addTitle(v),
                  v &&
                    !g &&
                    !1 !== p.reserveSpace &&
                    ((t.titleOffset = S =
                      t.axisTitle.getBBox()[i ? "height" : "width"]),
                    (C = m((M = p.offset)) ? 0 : O(p.margin, i ? 5 : 10)))),
                t.renderLine(),
                (t.offset = y * O(s.offset, f[o] ? f[o] + (s.margin || 0) : 0)),
                (t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }),
                (P =
                  0 === o
                    ? -t.labelMetrics().h
                    : 2 === o
                    ? t.tickRotCorr.y
                    : 0),
                (A = Math.abs(T) + C),
                T &&
                  ((A -= P),
                  (A +=
                    y *
                    (i
                      ? O(u.y, t.tickRotCorr.y + y * u.distance)
                      : O(u.x, y * u.distance)))),
                (t.axisTitleMargin = O(M, A)),
                t.getMaxLabelDimensions &&
                  (t.maxLabelDimensions = t.getMaxLabelDimensions(r, n)),
                "colorAxis" !== a)
              ) {
                let e = this.tickSize("tick");
                f[o] = Math.max(
                  f[o],
                  (t.axisTitleMargin || 0) + S + y * t.offset,
                  A,
                  n && n.length && e ? e[0] + y * t.offset : 0
                );
                let i =
                  !t.axisLine || s.offset
                    ? 0
                    : 2 * Math.floor(t.axisLine.strokeWidth() / 2);
                x[d] = Math.max(x[d], i);
              }
              k(this, "afterGetOffset");
            }
            getLinePath(t) {
              let e = this.chart,
                i = this.opposite,
                s = this.offset,
                o = this.horiz,
                r = this.left + (i ? this.width : 0) + s,
                n = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
              return (
                i && (t *= -1),
                e.renderer.crispLine(
                  [
                    ["M", o ? this.left : r, o ? n : this.top],
                    [
                      "L",
                      o ? e.chartWidth - this.right : r,
                      o ? n : e.chartHeight - this.bottom,
                    ],
                  ],
                  t
                )
              );
            }
            renderLine() {
              this.axisLine ||
                ((this.axisLine = this.chart.renderer
                  .path()
                  .addClass("highcharts-axis-line")
                  .add(this.axisGroup)),
                this.chart.styledMode ||
                  this.axisLine.attr({
                    stroke: this.options.lineColor,
                    "stroke-width": this.options.lineWidth,
                    zIndex: 7,
                  }));
            }
            getTitlePosition(t) {
              let e = this.horiz,
                i = this.left,
                s = this.top,
                o = this.len,
                r = this.options.title,
                n = e ? i : s,
                a = this.opposite,
                h = this.offset,
                l = r.x,
                d = r.y,
                c = this.chart.renderer.fontMetrics(t),
                p = t ? Math.max(t.getBBox(!1, 0).height - c.h - 1, 0) : 0,
                u = {
                  low: n + (e ? 0 : o),
                  middle: n + o / 2,
                  high: n + (e ? o : 0),
                }[r.align],
                g =
                  (e ? s + this.height : i) +
                  (e ? 1 : -1) * (a ? -1 : 1) * (this.axisTitleMargin || 0) +
                  [-p, p, c.f, -p][this.side],
                f = {
                  x: e ? u + l : g + (a ? this.width : 0) + h + l,
                  y: e ? g + d - (a ? this.height : 0) + h : u + d,
                };
              return k(this, "afterGetTitlePosition", { titlePosition: f }), f;
            }
            renderMinorTick(t, e) {
              let i = this.minorTicks;
              i[t] || (i[t] = new n(this, t, "minor")),
                e && i[t].isNew && i[t].render(null, !0),
                i[t].render(null, !1, 1);
            }
            renderTick(t, e, i) {
              let s = this.isLinked,
                o = this.ticks;
              (!s ||
                (t >= this.min && t <= this.max) ||
                (this.grid && this.grid.isColumn)) &&
                (o[t] || (o[t] = new n(this, t)),
                i && o[t].isNew && o[t].render(e, !0, -1),
                o[t].render(e));
            }
            render() {
              let t, e;
              let i = this,
                s = i.chart,
                o = i.logarithmic,
                a = s.renderer,
                l = i.options,
                d = i.isLinked,
                c = i.tickPositions,
                p = i.axisTitle,
                u = i.ticks,
                g = i.minorTicks,
                f = i.alternateBands,
                m = l.stackLabels,
                x = l.alternateGridColor,
                y = l.crossing,
                b = i.tickmarkOffset,
                v = i.axisLine,
                S = i.showAxis,
                M = h(a.globalAnimation);
              if (
                ((i.labelEdge.length = 0),
                (i.overlap = !1),
                [u, g, f].forEach(function (t) {
                  L(t, function (t) {
                    t.isActive = !1;
                  });
                }),
                w(y))
              ) {
                let t = this.isXAxis ? s.yAxis[0] : s.xAxis[0],
                  e = [1, -1, -1, 1][this.side];
                if (t) {
                  let s = t.toPixels(y, !0);
                  i.horiz && (s = t.len - s), (i.offset = e * s);
                }
              }
              if (i.hasData() || d) {
                let a = i.chart.hasRendered && i.old && w(i.old.min);
                i.minorTickInterval &&
                  !i.categories &&
                  i.getMinorTickPositions().forEach(function (t) {
                    i.renderMinorTick(t, a);
                  }),
                  c.length &&
                    (c.forEach(function (t, e) {
                      i.renderTick(t, e, a);
                    }),
                    b &&
                      (0 === i.min || i.single) &&
                      (u[-1] || (u[-1] = new n(i, -1, null, !0)),
                      u[-1].render(-1))),
                  x &&
                    c.forEach(function (n, a) {
                      (e = void 0 !== c[a + 1] ? c[a + 1] + b : i.max - b),
                        a % 2 == 0 &&
                          n < i.max &&
                          e <= i.max + (s.polar ? -b : b) &&
                          (f[n] || (f[n] = new r.PlotLineOrBand(i)),
                          (t = n + b),
                          (f[n].options = {
                            from: o ? o.lin2log(t) : t,
                            to: o ? o.lin2log(e) : e,
                            color: x,
                            className: "highcharts-alternate-grid",
                          }),
                          f[n].render(),
                          (f[n].isActive = !0));
                    }),
                  i._addedPlotLB ||
                    ((i._addedPlotLB = !0),
                    (l.plotLines || [])
                      .concat(l.plotBands || [])
                      .forEach(function (t) {
                        i.addPlotBandOrLine(t);
                      }));
              }
              [u, g, f].forEach(function (t) {
                let e = [],
                  i = M.duration;
                L(t, function (t, i) {
                  t.isActive ||
                    (t.render(i, !1, 0), (t.isActive = !1), e.push(i));
                }),
                  B(
                    function () {
                      let i = e.length;
                      for (; i--; )
                        t[e[i]] &&
                          !t[e[i]].isActive &&
                          (t[e[i]].destroy(), delete t[e[i]]);
                    },
                    t !== f && s.hasRendered && i ? i : 0
                  );
              }),
                v &&
                  (v[v.isPlaced ? "animate" : "attr"]({
                    d: this.getLinePath(v.strokeWidth()),
                  }),
                  (v.isPlaced = !0),
                  v[S ? "show" : "hide"](S)),
                p &&
                  S &&
                  (p[p.isNew ? "attr" : "animate"](i.getTitlePosition(p)),
                  (p.isNew = !1)),
                m && m.enabled && i.stacking && i.stacking.renderStackTotals(),
                (i.old = {
                  len: i.len,
                  max: i.max,
                  min: i.min,
                  transA: i.transA,
                  userMax: i.userMax,
                  userMin: i.userMin,
                }),
                (i.isDirty = !1),
                k(this, "afterRender");
            }
            redraw() {
              this.visible &&
                (this.render(),
                this.plotLinesAndBands.forEach(function (t) {
                  t.render();
                })),
                this.series.forEach(function (t) {
                  t.isDirty = !0;
                });
            }
            getKeepProps() {
              return this.keepProps || R.keepProps;
            }
            destroy(t) {
              let e = this,
                i = e.plotLinesAndBands,
                s = this.eventOptions;
              if (
                (k(this, "destroy", { keepEvents: t }),
                t || E(e),
                [e.ticks, e.minorTicks, e.alternateBands].forEach(function (t) {
                  x(t);
                }),
                i)
              ) {
                let t = i.length;
                for (; t--; ) i[t].destroy();
              }
              for (let t in ([
                "axisLine",
                "axisTitle",
                "axisGroup",
                "gridGroup",
                "labelGroup",
                "cross",
                "scrollbar",
              ].forEach(function (t) {
                e[t] && (e[t] = e[t].destroy());
              }),
              e.plotLinesAndBandsGroups))
                e.plotLinesAndBandsGroups[t] =
                  e.plotLinesAndBandsGroups[t].destroy();
              L(e, function (t, i) {
                -1 === e.getKeepProps().indexOf(i) && delete e[i];
              }),
                (this.eventOptions = s);
            }
            drawCrosshair(t, e) {
              let s = this.crosshair,
                o = O(s && s.snap, !0),
                r = this.chart,
                n,
                a,
                h,
                l = this.cross,
                d;
              if (
                (k(this, "drawCrosshair", { e: t, point: e }),
                t || (t = this.cross && this.cross.e),
                s && !1 !== (m(e) || !o))
              ) {
                if (
                  (o
                    ? m(e) &&
                      (a = O(
                        "colorAxis" !== this.coll ? e.crosshairPos : null,
                        this.isXAxis ? e.plotX : this.len - e.plotY
                      ))
                    : (a =
                        t &&
                        (this.horiz
                          ? t.chartX - this.pos
                          : this.len - t.chartY + this.pos)),
                  m(a) &&
                    ((d = {
                      value: e && (this.isXAxis ? e.x : O(e.stackY, e.y)),
                      translatedValue: a,
                    }),
                    r.polar &&
                      v(d, {
                        isCrosshair: !0,
                        chartX: t && t.chartX,
                        chartY: t && t.chartY,
                        point: e,
                      }),
                    (n = this.getPlotLinePath(d) || null)),
                  !m(n))
                ) {
                  this.hideCrosshair();
                  return;
                }
                (h = this.categories && !this.isRadial),
                  l ||
                    ((this.cross = l =
                      r.renderer
                        .path()
                        .addClass(
                          "highcharts-crosshair highcharts-crosshair-" +
                            (h ? "category " : "thin ") +
                            (s.className || "")
                        )
                        .attr({ zIndex: O(s.zIndex, 2) })
                        .add()),
                    !r.styledMode &&
                      (l
                        .attr({
                          stroke:
                            s.color ||
                            (h
                              ? i.parse("#ccd3ff").setOpacity(0.25).get()
                              : "#cccccc"),
                          "stroke-width": O(s.width, 1),
                        })
                        .css({ "pointer-events": "none" }),
                      s.dashStyle && l.attr({ dashstyle: s.dashStyle }))),
                  l.show().attr({ d: n }),
                  h && !s.width && l.attr({ "stroke-width": this.transA }),
                  (this.cross.e = t);
              } else this.hideCrosshair();
              k(this, "afterDrawCrosshair", { e: t, point: e });
            }
            hideCrosshair() {
              this.cross && this.cross.hide(), k(this, "afterHideCrosshair");
            }
            hasVerticalPanning() {
              let t = this.chart.options.chart.panning;
              return !!(t && t.enabled && /y/.test(t.type));
            }
            update(t, e) {
              let i = this.chart;
              (t = A(this.userOptions, t)),
                this.destroy(!0),
                this.init(i, t),
                (i.isDirtyBox = !0),
                O(e, !0) && i.redraw();
            }
            remove(t) {
              let e = this.chart,
                i = this.coll,
                s = this.series,
                o = s.length;
              for (; o--; ) s[o] && s[o].remove(!1);
              y(e.axes, this),
                y(e[i] || [], this),
                e.orderItems(i),
                this.destroy(),
                (e.isDirtyBox = !0),
                O(t, !0) && e.redraw();
            }
            setTitle(t, e) {
              this.update({ title: t }, e);
            }
            setCategories(t, e) {
              this.update({ categories: t }, e);
            }
          }
          return (
            (R.defaultOptions = e.defaultXAxisOptions),
            (R.keepProps = [
              "coll",
              "extKey",
              "hcEvents",
              "names",
              "series",
              "userMax",
              "userMin",
            ]),
            R
          );
        }
      ),
      i(e, "Core/Axis/DateTimeAxis.js", [e["Core/Utilities.js"]], function (t) {
        var e;
        let {
          addEvent: i,
          getMagnitude: s,
          normalizeTickInterval: o,
          timeUnits: r,
        } = t;
        return (
          (function (e) {
            let n = [];
            function a() {
              return this.chart.time.getTimeTicks.apply(
                this.chart.time,
                arguments
              );
            }
            function h(t) {
              let e = t.userOptions;
              if ("datetime" !== e.type) {
                this.dateTime = void 0;
                return;
              }
              this.dateTime || (this.dateTime = new l(this));
            }
            e.compose = function (e) {
              if (t.pushUnique(n, e)) {
                e.keepProps.push("dateTime");
                let t = e.prototype;
                (t.getTimeTicks = a), i(e, "init", h);
              }
              return e;
            };
            class l {
              constructor(t) {
                this.axis = t;
              }
              normalizeTimeTickInterval(t, e) {
                let i = e || [
                    ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                    ["second", [1, 2, 5, 10, 15, 30]],
                    ["minute", [1, 2, 5, 10, 15, 30]],
                    ["hour", [1, 2, 3, 4, 6, 8, 12]],
                    ["day", [1, 2]],
                    ["week", [1, 2]],
                    ["month", [1, 2, 3, 4, 6]],
                    ["year", null],
                  ],
                  n = i[i.length - 1],
                  a = r[n[0]],
                  h = n[1],
                  l;
                for (l = 0; l < i.length; l++)
                  if (((a = r[(n = i[l])[0]]), (h = n[1]), i[l + 1])) {
                    let e = (a * h[h.length - 1] + r[i[l + 1][0]]) / 2;
                    if (t <= e) break;
                  }
                a === r.year && t < 5 * a && (h = [1, 2, 5]);
                let d = o(
                  t / a,
                  h,
                  "year" === n[0] ? Math.max(s(t / a), 1) : 1
                );
                return { unitRange: a, count: d, unitName: n[0] };
              }
              getXDateFormat(t, e) {
                let { axis: i } = this,
                  s = i.chart.time;
                return i.closestPointRange
                  ? s.getDateFormat(
                      i.closestPointRange,
                      t,
                      i.options.startOfWeek,
                      e
                    ) || s.resolveDTLFormat(e.year).main
                  : s.resolveDTLFormat(e.day).main;
              }
            }
            e.Additions = l;
          })(e || (e = {})),
          e
        );
      }),
      i(
        e,
        "Core/Axis/LogarithmicAxis.js",
        [e["Core/Utilities.js"]],
        function (t) {
          var e;
          let { addEvent: i, normalizeTickInterval: s, pick: o } = t;
          return (
            (function (e) {
              let r = [];
              function n(t) {
                let e = t.userOptions,
                  i = this.logarithmic;
                "logarithmic" !== e.type
                  ? (this.logarithmic = void 0)
                  : i || (i = this.logarithmic = new h(this));
              }
              function a() {
                let t = this.logarithmic;
                t &&
                  ((this.lin2val = function (e) {
                    return t.lin2log(e);
                  }),
                  (this.val2lin = function (e) {
                    return t.log2lin(e);
                  }));
              }
              e.compose = function (e) {
                return (
                  t.pushUnique(r, e) &&
                    (e.keepProps.push("logarithmic"),
                    i(e, "init", n),
                    i(e, "afterInit", a)),
                  e
                );
              };
              class h {
                constructor(t) {
                  this.axis = t;
                }
                getLogTickPositions(t, e, i, r) {
                  let n = this.axis,
                    a = n.len,
                    h = n.options,
                    l = [];
                  if ((r || (this.minorAutoInterval = void 0), t >= 0.5))
                    (t = Math.round(t)),
                      (l = n.getLinearTickPositions(t, e, i));
                  else if (t >= 0.08) {
                    let s, o, n, a, h, d, c;
                    let p = Math.floor(e);
                    for (
                      s =
                        t > 0.3
                          ? [1, 2, 4]
                          : t > 0.15
                          ? [1, 2, 4, 6, 8]
                          : [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        o = p;
                      o < i + 1 && !c;
                      o++
                    )
                      for (n = 0, a = s.length; n < a && !c; n++)
                        (h = this.log2lin(this.lin2log(o) * s[n])) > e &&
                          (!r || d <= i) &&
                          void 0 !== d &&
                          l.push(d),
                          d > i && (c = !0),
                          (d = h);
                  } else {
                    let d = this.lin2log(e),
                      c = this.lin2log(i),
                      p = r ? n.getMinorTickInterval() : h.tickInterval,
                      u = "auto" === p ? null : p,
                      g = h.tickPixelInterval / (r ? 5 : 1),
                      f = r ? a / n.tickPositions.length : a;
                    (t = s(
                      (t = o(
                        u,
                        this.minorAutoInterval,
                        ((c - d) * g) / (f || 1)
                      ))
                    )),
                      (l = n.getLinearTickPositions(t, d, c).map(this.log2lin)),
                      r || (this.minorAutoInterval = t / 5);
                  }
                  return r || (n.tickInterval = t), l;
                }
                lin2log(t) {
                  return Math.pow(10, t);
                }
                log2lin(t) {
                  return Math.log(t) / Math.LN10;
                }
              }
              e.Additions = h;
            })(e || (e = {})),
            e
          );
        }
      ),
      i(
        e,
        "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",
        [e["Core/Utilities.js"]],
        function (t) {
          var e;
          let { erase: i, extend: s, isNumber: o } = t;
          return (
            (function (e) {
              let r;
              let n = [];
              function a(t) {
                return this.addPlotBandOrLine(t, "plotBands");
              }
              function h(t, e) {
                let i = this.userOptions,
                  s = new r(this, t);
                if ((this.visible && (s = s.render()), s)) {
                  if (
                    (this._addedPlotLB ||
                      ((this._addedPlotLB = !0),
                      (i.plotLines || [])
                        .concat(i.plotBands || [])
                        .forEach((t) => {
                          this.addPlotBandOrLine(t);
                        })),
                    e)
                  ) {
                    let s = i[e] || [];
                    s.push(t), (i[e] = s);
                  }
                  this.plotLinesAndBands.push(s);
                }
                return s;
              }
              function l(t) {
                return this.addPlotBandOrLine(t, "plotLines");
              }
              function d(t, e, i) {
                i = i || this.options;
                let s = this.getPlotLinePath({
                    value: e,
                    force: !0,
                    acrossPanes: i.acrossPanes,
                  }),
                  r = [],
                  n = this.horiz,
                  a =
                    !o(this.min) ||
                    !o(this.max) ||
                    (t < this.min && e < this.min) ||
                    (t > this.max && e > this.max),
                  h = this.getPlotLinePath({
                    value: t,
                    force: !0,
                    acrossPanes: i.acrossPanes,
                  }),
                  l,
                  d = 1,
                  c;
                if (h && s)
                  for (
                    a && ((c = h.toString() === s.toString()), (d = 0)), l = 0;
                    l < h.length;
                    l += 2
                  ) {
                    let t = h[l],
                      e = h[l + 1],
                      i = s[l],
                      o = s[l + 1];
                    ("M" === t[0] || "L" === t[0]) &&
                      ("M" === e[0] || "L" === e[0]) &&
                      ("M" === i[0] || "L" === i[0]) &&
                      ("M" === o[0] || "L" === o[0]) &&
                      (n && i[1] === t[1]
                        ? ((i[1] += d), (o[1] += d))
                        : n || i[2] !== t[2] || ((i[2] += d), (o[2] += d)),
                      r.push(
                        ["M", t[1], t[2]],
                        ["L", e[1], e[2]],
                        ["L", o[1], o[2]],
                        ["L", i[1], i[2]],
                        ["Z"]
                      )),
                      (r.isFlat = c);
                  }
                else h = null;
                return r;
              }
              function c(t) {
                this.removePlotBandOrLine(t);
              }
              function p(t) {
                let e = this.plotLinesAndBands,
                  s = this.options,
                  o = this.userOptions;
                if (e) {
                  let r = e.length;
                  for (; r--; ) e[r].id === t && e[r].destroy();
                  [
                    s.plotLines || [],
                    o.plotLines || [],
                    s.plotBands || [],
                    o.plotBands || [],
                  ].forEach(function (e) {
                    for (r = e.length; r--; )
                      (e[r] || {}).id === t && i(e, e[r]);
                  });
                }
              }
              function u(t) {
                this.removePlotBandOrLine(t);
              }
              e.compose = function (e, i) {
                return (
                  r || (r = e),
                  t.pushUnique(n, i) &&
                    s(i.prototype, {
                      addPlotBand: a,
                      addPlotLine: l,
                      addPlotBandOrLine: h,
                      getPlotBandPath: d,
                      removePlotBand: c,
                      removePlotLine: u,
                      removePlotBandOrLine: p,
                    }),
                  i
                );
              };
            })(e || (e = {})),
            e
          );
        }
      ),
      i(
        e,
        "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
        [
          e["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e) {
          let {
            arrayMax: i,
            arrayMin: s,
            defined: o,
            destroyObjectProperties: r,
            erase: n,
            fireEvent: a,
            merge: h,
            objectEach: l,
            pick: d,
          } = e;
          class c {
            static compose(e) {
              return t.compose(c, e);
            }
            constructor(t, e) {
              (this.id = void 0),
                (this.axis = t),
                e && ((this.options = e), (this.id = e.id));
            }
            render() {
              a(this, "render");
              let t = this,
                e = t.axis,
                i = e.horiz,
                s = e.logarithmic,
                r = t.options,
                n = r.color,
                c = d(r.zIndex, 0),
                p = r.events,
                u = {},
                g = e.chart.renderer,
                f = r.label,
                m = t.label,
                x = r.to,
                y = r.from,
                b = r.value,
                v = t.svgElem,
                k = [],
                S,
                M = o(y) && o(x),
                C = o(b),
                w = !v,
                T = {
                  class:
                    "highcharts-plot-" +
                    (M ? "band " : "line ") +
                    (r.className || ""),
                },
                A = M ? "bands" : "lines";
              if (
                (s &&
                  ((y = s.log2lin(y)), (x = s.log2lin(x)), (b = s.log2lin(b))),
                !e.chart.styledMode &&
                  (C
                    ? ((T.stroke = n || "#999999"),
                      (T["stroke-width"] = d(r.width, 1)),
                      r.dashStyle && (T.dashstyle = r.dashStyle))
                    : M &&
                      ((T.fill = n || "#e6e9ff"),
                      r.borderWidth &&
                        ((T.stroke = r.borderColor),
                        (T["stroke-width"] = r.borderWidth)))),
                (u.zIndex = c),
                (A += "-" + c),
                (S = e.plotLinesAndBandsGroups[A]) ||
                  (e.plotLinesAndBandsGroups[A] = S =
                    g
                      .g("plot-" + A)
                      .attr(u)
                      .add()),
                w && (t.svgElem = v = g.path().attr(T).add(S)),
                C)
              )
                k = e.getPlotLinePath({
                  value: b,
                  lineWidth: v.strokeWidth(),
                  acrossPanes: r.acrossPanes,
                });
              else {
                if (!M) return;
                k = e.getPlotBandPath(y, x, r);
              }
              return (
                !t.eventsAdded &&
                  p &&
                  (l(p, function (e, i) {
                    v.on(i, function (e) {
                      p[i].apply(t, [e]);
                    });
                  }),
                  (t.eventsAdded = !0)),
                (w || !v.d) && k && k.length
                  ? v.attr({ d: k })
                  : v &&
                    (k
                      ? (v.show(), v.animate({ d: k }))
                      : v.d && (v.hide(), m && (t.label = m = m.destroy()))),
                f &&
                (o(f.text) || o(f.formatter)) &&
                k &&
                k.length &&
                e.width > 0 &&
                e.height > 0 &&
                !k.isFlat
                  ? ((f = h(
                      {
                        align: i && M && "center",
                        x: i ? !M && 4 : 10,
                        verticalAlign: !i && M && "middle",
                        y: i ? (M ? 16 : 10) : M ? 6 : -4,
                        rotation: i && !M && 90,
                      },
                      f
                    )),
                    this.renderLabel(f, k, M, c))
                  : m && m.hide(),
                t
              );
            }
            renderLabel(t, e, o, r) {
              let n = this.axis,
                a = n.chart.renderer,
                l = this.label;
              l ||
                ((this.label = l =
                  a.text(this.getLabelText(t), 0, 0, t.useHTML).attr({
                    align: t.textAlign || t.align,
                    rotation: t.rotation,
                    class:
                      "highcharts-plot-" +
                      (o ? "band" : "line") +
                      "-label " +
                      (t.className || ""),
                    zIndex: r,
                  })),
                n.chart.styledMode ||
                  l.css(
                    h({ fontSize: "0.8em", textOverflow: "ellipsis" }, t.style)
                  ),
                l.add());
              let d = e.xBounds || [e[0][1], e[1][1], o ? e[2][1] : e[0][1]],
                c = e.yBounds || [e[0][2], e[1][2], o ? e[2][2] : e[0][2]],
                p = s(d),
                u = s(c);
              if (
                (l.align(t, !1, {
                  x: p,
                  y: u,
                  width: i(d) - p,
                  height: i(c) - u,
                }),
                !l.alignValue || "left" === l.alignValue)
              ) {
                let e = t.clip ? n.width : n.chart.chartWidth;
                l.css({
                  width:
                    (90 === l.rotation
                      ? n.height - (l.alignAttr.y - n.top)
                      : e - (l.alignAttr.x - n.left)) + "px",
                });
              }
              l.show(!0);
            }
            getLabelText(t) {
              return o(t.formatter) ? t.formatter.call(this) : t.text;
            }
            destroy() {
              n(this.axis.plotLinesAndBands, this), delete this.axis, r(this);
            }
          }
          return c;
        }
      ),
      i(
        e,
        "Core/Tooltip.js",
        [
          e["Core/Templating.js"],
          e["Core/Globals.js"],
          e["Core/Renderer/RendererUtilities.js"],
          e["Core/Renderer/RendererRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o) {
          let { format: r } = t,
            { doc: n, isSafari: a } = e,
            { distribute: h } = i,
            {
              addEvent: l,
              clamp: d,
              css: c,
              discardElement: p,
              extend: u,
              fireEvent: g,
              isArray: f,
              isNumber: m,
              isString: x,
              merge: y,
              pick: b,
              splat: v,
              syncTimeout: k,
            } = o;
          class S {
            constructor(t, e) {
              (this.allowShared = !0),
                (this.crosshairs = []),
                (this.distance = 0),
                (this.isHidden = !0),
                (this.isSticky = !1),
                (this.now = {}),
                (this.options = {}),
                (this.outside = !1),
                (this.chart = t),
                this.init(t, e);
            }
            bodyFormatter(t) {
              return t.map(function (t) {
                let e = t.series.tooltipOptions;
                return (
                  e[(t.point.formatPrefix || "point") + "Formatter"] ||
                  t.point.tooltipFormatter
                ).call(
                  t.point,
                  e[(t.point.formatPrefix || "point") + "Format"] || ""
                );
              });
            }
            cleanSplit(t) {
              this.chart.series.forEach(function (e) {
                let i = e && e.tt;
                i &&
                  (!i.isActive || t ? (e.tt = i.destroy()) : (i.isActive = !1));
              });
            }
            defaultFormatter(t) {
              let e;
              let i = this.points || v(this);
              return (
                (e = (e = [t.tooltipFooterHeaderFormatter(i[0])]).concat(
                  t.bodyFormatter(i)
                )).push(t.tooltipFooterHeaderFormatter(i[0], !0)),
                e
              );
            }
            destroy() {
              this.label && (this.label = this.label.destroy()),
                this.split &&
                  (this.cleanSplit(!0),
                  this.tt && (this.tt = this.tt.destroy())),
                this.renderer &&
                  ((this.renderer = this.renderer.destroy()),
                  p(this.container)),
                o.clearTimeout(this.hideTimer),
                o.clearTimeout(this.tooltipTimeout);
            }
            getAnchor(t, e) {
              let i;
              let s = this.chart,
                o = s.pointer,
                r = s.inverted,
                n = s.plotTop,
                a = s.plotLeft;
              if (
                ((t = v(t))[0].series &&
                  t[0].series.yAxis &&
                  !t[0].series.yAxis.options.reversedStacks &&
                  (t = t.slice().reverse()),
                this.followPointer && e)
              )
                void 0 === e.chartX && (e = o.normalize(e)),
                  (i = [e.chartX - a, e.chartY - n]);
              else if (t[0].tooltipPos) i = t[0].tooltipPos;
              else {
                let s = 0,
                  o = 0;
                t.forEach(function (t) {
                  let e = t.pos(!0);
                  e && ((s += e[0]), (o += e[1]));
                }),
                  (s /= t.length),
                  (o /= t.length),
                  this.shared &&
                    t.length > 1 &&
                    e &&
                    (r ? (s = e.chartX) : (o = e.chartY)),
                  (i = [s - a, o - n]);
              }
              return i.map(Math.round);
            }
            getClassName(t, e, i) {
              let s = this.options,
                o = t.series,
                r = o.options;
              return [
                s.className,
                "highcharts-label",
                i && "highcharts-tooltip-header",
                e ? "highcharts-tooltip-box" : "highcharts-tooltip",
                !i && "highcharts-color-" + b(t.colorIndex, o.colorIndex),
                r && r.className,
              ]
                .filter(x)
                .join(" ");
            }
            getLabel() {
              let t = this,
                i = this.chart.styledMode,
                o = this.options,
                r = this.split && this.allowShared,
                n = this.container,
                a = this.chart.renderer;
              if (this.label) {
                let t = !this.label.hasClass("highcharts-label");
                ((!r && t) || (r && !t)) && this.destroy();
              }
              if (!this.label) {
                if (this.outside) {
                  let t = this.chart.options.chart.style,
                    i = s.getRendererType();
                  (this.container = n = e.doc.createElement("div")),
                    (n.className = "highcharts-tooltip-container"),
                    c(n, {
                      position: "absolute",
                      top: "1px",
                      pointerEvents: "none",
                      zIndex: Math.max(
                        this.options.style.zIndex || 0,
                        ((t && t.zIndex) || 0) + 3
                      ),
                    }),
                    (this.renderer = a =
                      new i(n, 0, 0, t, void 0, void 0, a.styledMode));
                }
                if (
                  (r
                    ? (this.label = a.g("tooltip"))
                    : ((this.label = a
                        .label(
                          "",
                          0,
                          0,
                          o.shape,
                          void 0,
                          void 0,
                          o.useHTML,
                          void 0,
                          "tooltip"
                        )
                        .attr({ padding: o.padding, r: o.borderRadius })),
                      i ||
                        this.label
                          .attr({
                            fill: o.backgroundColor,
                            "stroke-width": o.borderWidth || 0,
                          })
                          .css(o.style)
                          .css({
                            pointerEvents:
                              o.style.pointerEvents ||
                              (this.shouldStickOnContact() ? "auto" : "none"),
                          })),
                  t.outside)
                ) {
                  let e = this.label,
                    { xSetter: i, ySetter: s } = e;
                  (e.xSetter = function (s) {
                    i.call(e, t.distance), n && (n.style.left = s + "px");
                  }),
                    (e.ySetter = function (i) {
                      s.call(e, t.distance), n && (n.style.top = i + "px");
                    });
                }
                this.label.attr({ zIndex: 8 }).shadow(o.shadow).add();
              }
              return (
                n && !n.parentElement && e.doc.body.appendChild(n), this.label
              );
            }
            getPlayingField() {
              let { body: t, documentElement: e } = n,
                { chart: i, distance: s, outside: o } = this;
              return {
                width: o
                  ? Math.max(
                      t.scrollWidth,
                      e.scrollWidth,
                      t.offsetWidth,
                      e.offsetWidth,
                      e.clientWidth
                    ) -
                    2 * s
                  : i.chartWidth,
                height: o
                  ? Math.max(
                      t.scrollHeight,
                      e.scrollHeight,
                      t.offsetHeight,
                      e.offsetHeight,
                      e.clientHeight
                    )
                  : i.chartHeight,
              };
            }
            getPosition(t, e, i) {
              let s = this.chart,
                o = this.distance,
                r = {},
                n = (s.inverted && i.h) || 0,
                a = this.outside,
                h = this.getPlayingField(),
                l = h.width,
                d = h.height,
                c = s.pointer.getChartPosition(),
                p = (t) => t * c.scaleX,
                u = (t) => t * c.scaleY,
                g = (r) => {
                  let n = "x" === r;
                  return [r, n ? l : d, n ? t : e].concat(
                    a
                      ? [
                          n ? p(t) : u(e),
                          n
                            ? c.left - o + p(i.plotX + s.plotLeft)
                            : c.top - o + u(i.plotY + s.plotTop),
                          0,
                          n ? l : d,
                        ]
                      : [
                          n ? t : e,
                          n ? i.plotX + s.plotLeft : i.plotY + s.plotTop,
                          n ? s.plotLeft : s.plotTop,
                          n
                            ? s.plotLeft + s.plotWidth
                            : s.plotTop + s.plotHeight,
                        ]
                  );
                },
                f = g("y"),
                m = g("x"),
                x,
                y = !!i.negative;
              !s.polar &&
                s.hoverSeries &&
                s.hoverSeries.yAxis &&
                s.hoverSeries.yAxis.reversed &&
                (y = !y);
              let v = !this.followPointer && b(i.ttBelow, !s.inverted === y),
                k = function (t, e, i, s, h, l, d) {
                  let c = a ? ("y" === t ? u(o) : p(o)) : o,
                    g = (i - s) / 2,
                    f = s < h - o,
                    m = h + o + s < e,
                    x = h - c - i + g,
                    y = h + c - g;
                  if (v && m) r[t] = y;
                  else if (!v && f) r[t] = x;
                  else if (f) r[t] = Math.min(d - s, x - n < 0 ? x : x - n);
                  else {
                    if (!m) return !1;
                    r[t] = Math.max(l, y + n + i > e ? y : y + n);
                  }
                },
                S = function (t, e, i, s, n) {
                  let a;
                  return (
                    n < o || n > e - o
                      ? (a = !1)
                      : n < i / 2
                      ? (r[t] = 1)
                      : n > e - s / 2
                      ? (r[t] = e - s - 2)
                      : (r[t] = n - i / 2),
                    a
                  );
                },
                M = function (t) {
                  let e = f;
                  (f = m), (m = e), (x = t);
                },
                C = function () {
                  !1 !== k.apply(0, f)
                    ? !1 !== S.apply(0, m) || x || (M(!0), C())
                    : x
                    ? (r.x = r.y = 0)
                    : (M(!0), C());
                };
              return (s.inverted || this.len > 1) && M(), C(), r;
            }
            hide(t) {
              let e = this;
              o.clearTimeout(this.hideTimer),
                (t = b(t, this.options.hideDelay)),
                this.isHidden ||
                  (this.hideTimer = k(function () {
                    let i = e.getLabel();
                    e.getLabel().animate(
                      { opacity: 0 },
                      {
                        duration: t ? 150 : t,
                        complete: () => {
                          i.hide(), e.container && e.container.remove();
                        },
                      }
                    ),
                      (e.isHidden = !0);
                  }, t));
            }
            init(t, e) {
              (this.chart = t),
                (this.options = e),
                (this.crosshairs = []),
                (this.now = { x: 0, y: 0 }),
                (this.isHidden = !0),
                (this.split = e.split && !t.inverted && !t.polar),
                (this.shared = e.shared || this.split),
                (this.outside = b(
                  e.outside,
                  !!(t.scrollablePixelsX || t.scrollablePixelsY)
                ));
            }
            shouldStickOnContact(t) {
              return !!(
                !this.followPointer &&
                this.options.stickOnContact &&
                (!t ||
                  this.chart.pointer.inClass(t.target, "highcharts-tooltip"))
              );
            }
            move(t, e, i, s) {
              let r = this,
                n = r.now,
                a =
                  !1 !== r.options.animation &&
                  !r.isHidden &&
                  (Math.abs(t - n.x) > 1 || Math.abs(e - n.y) > 1),
                h = r.followPointer || r.len > 1;
              u(n, {
                x: a ? (2 * n.x + t) / 3 : t,
                y: a ? (n.y + e) / 2 : e,
                anchorX: h ? void 0 : a ? (2 * n.anchorX + i) / 3 : i,
                anchorY: h ? void 0 : a ? (n.anchorY + s) / 2 : s,
              }),
                r.getLabel().attr(n),
                r.drawTracker(),
                a &&
                  (o.clearTimeout(this.tooltipTimeout),
                  (this.tooltipTimeout = setTimeout(function () {
                    r && r.move(t, e, i, s);
                  }, 32)));
            }
            refresh(t, e) {
              let i = this.chart,
                s = this.options,
                n = i.pointer,
                a = v(t),
                h = a[0],
                l = [],
                d = s.format,
                c = s.formatter || this.defaultFormatter,
                p = this.shared,
                u = i.styledMode,
                m = {};
              if (!s.enabled || !h.series) return;
              o.clearTimeout(this.hideTimer),
                (this.allowShared = !(
                  !f(t) &&
                  t.series &&
                  t.series.noSharedTooltip
                )),
                (this.followPointer =
                  !this.split && h.series.tooltipOptions.followPointer);
              let y = this.getAnchor(t, e),
                k = y[0],
                S = y[1];
              p && this.allowShared
                ? (n.applyInactiveState(a),
                  a.forEach(function (t) {
                    t.setState("hover"), l.push(t.getLabelConfig());
                  }),
                  ((m = h.getLabelConfig()).points = l))
                : (m = h.getLabelConfig()),
                (this.len = l.length);
              let M = x(d) ? r(d, m, i) : c.call(m, this),
                C = h.series;
              if (
                ((this.distance = b(C.tooltipOptions.distance, 16)), !1 === M)
              )
                this.hide();
              else {
                if (this.split && this.allowShared) this.renderSplit(M, a);
                else {
                  let t = k,
                    o = S;
                  if (
                    (e &&
                      n.isDirectTouch &&
                      ((t = e.chartX - i.plotLeft), (o = e.chartY - i.plotTop)),
                    i.polar ||
                      !1 === C.options.clip ||
                      a.some(
                        (e) =>
                          n.isDirectTouch || e.series.shouldShowTooltip(t, o)
                      ))
                  ) {
                    let t = this.getLabel();
                    (!s.style.width || u) &&
                      t.css({
                        width:
                          (this.outside ? this.getPlayingField() : i.spacingBox)
                            .width + "px",
                      }),
                      t.attr({ text: M && M.join ? M.join("") : M }),
                      t.addClass(this.getClassName(h), !0),
                      u ||
                        t.attr({
                          stroke:
                            s.borderColor || h.color || C.color || "#666666",
                        }),
                      this.updatePosition({
                        plotX: k,
                        plotY: S,
                        negative: h.negative,
                        ttBelow: h.ttBelow,
                        h: y[2] || 0,
                      });
                  } else {
                    this.hide();
                    return;
                  }
                }
                this.isHidden &&
                  this.label &&
                  this.label.attr({ opacity: 1 }).show(),
                  (this.isHidden = !1);
              }
              g(this, "refresh");
            }
            renderSplit(t, e) {
              let i = this,
                {
                  chart: s,
                  chart: {
                    chartWidth: o,
                    chartHeight: r,
                    plotHeight: l,
                    plotLeft: c,
                    plotTop: p,
                    pointer: g,
                    scrollablePixelsY: f = 0,
                    scrollablePixelsX: m,
                    scrollingContainer: { scrollLeft: y, scrollTop: v } = {
                      scrollLeft: 0,
                      scrollTop: 0,
                    },
                    styledMode: k,
                  },
                  distance: S,
                  options: M,
                  options: { positioner: C },
                } = i,
                w =
                  i.outside && "number" != typeof m
                    ? n.documentElement.getBoundingClientRect()
                    : { left: y, right: y + o, top: v, bottom: v + r },
                T = i.getLabel(),
                A = this.renderer || s.renderer,
                P = !!(s.xAxis[0] && s.xAxis[0].opposite),
                { left: L, top: O } = g.getChartPosition(),
                D = p + v,
                E = 0,
                I = l - f;
              function B(t, e, s, o, r = !0) {
                let n, a;
                return (
                  s
                    ? ((n = P ? 0 : I),
                      (a = d(
                        t - o / 2,
                        w.left,
                        w.right - o - (i.outside ? L : 0)
                      )))
                    : ((n = e - D),
                      (a = d(
                        (a = r ? t - o - S : t + S),
                        r ? a : w.left,
                        w.right
                      ))),
                  { x: a, y: n }
                );
              }
              x(t) && (t = [!1, t]);
              let j = t.slice(0, e.length + 1).reduce(function (t, s, o) {
                if (!1 !== s && "" !== s) {
                  let r = e[o - 1] || {
                      isHeader: !0,
                      plotX: e[0].plotX,
                      plotY: l,
                      series: {},
                    },
                    n = r.isHeader,
                    a = n ? i : r.series,
                    h = (a.tt = (function (t, e, s) {
                      let o = t,
                        { isHeader: r, series: n } = e;
                      if (!o) {
                        let t = { padding: M.padding, r: M.borderRadius };
                        k ||
                          ((t.fill = M.backgroundColor),
                          (t["stroke-width"] = M.borderWidth ?? 1)),
                          (o = A.label(
                            "",
                            0,
                            0,
                            M[r ? "headerShape" : "shape"],
                            void 0,
                            void 0,
                            M.useHTML
                          )
                            .addClass(i.getClassName(e, !0, r))
                            .attr(t)
                            .add(T));
                      }
                      return (
                        (o.isActive = !0),
                        o.attr({ text: s }),
                        k ||
                          o.css(M.style).attr({
                            stroke:
                              M.borderColor || e.color || n.color || "#333333",
                          }),
                        o
                      );
                    })(a.tt, r, s.toString())),
                    u = h.getBBox(),
                    g = u.width + h.strokeWidth();
                  n && ((E = u.height), (I += E), P && (D -= E));
                  let { anchorX: f, anchorY: m } = (function (t) {
                    let e, i;
                    let {
                      isHeader: s,
                      plotX: o = 0,
                      plotY: r = 0,
                      series: n,
                    } = t;
                    if (s) (e = Math.max(c + o, c)), (i = p + l / 2);
                    else {
                      let { xAxis: t, yAxis: s } = n;
                      (e = t.pos + d(o, -S, t.len + S)),
                        n.shouldShowTooltip(0, s.pos - p + r, {
                          ignoreX: !0,
                        }) && (i = s.pos + r);
                    }
                    return {
                      anchorX: (e = d(e, w.left - S, w.right + S)),
                      anchorY: i,
                    };
                  })(r);
                  if ("number" == typeof m) {
                    let e = u.height + 1,
                      s = C ? C.call(i, g, e, r) : B(f, m, n, g);
                    t.push({
                      align: C ? 0 : void 0,
                      anchorX: f,
                      anchorY: m,
                      boxWidth: g,
                      point: r,
                      rank: b(s.rank, n ? 1 : 0),
                      size: e,
                      target: s.y,
                      tt: h,
                      x: s.x,
                    });
                  } else h.isActive = !1;
                }
                return t;
              }, []);
              !C &&
                j.some((t) => {
                  let { outside: e } = i,
                    s = (e ? L : 0) + t.anchorX;
                  return (
                    (s < w.left && s + t.boxWidth < w.right) ||
                    (s < L - w.left + t.boxWidth && w.right - s > s)
                  );
                }) &&
                (j = j.map((t) => {
                  let { x: e, y: i } = B(
                    t.anchorX,
                    t.anchorY,
                    t.point.isHeader,
                    t.boxWidth,
                    !1
                  );
                  return u(t, { target: i, x: e });
                })),
                i.cleanSplit(),
                h(j, I);
              let R = { left: L, right: L };
              j.forEach(function (t) {
                let { x: e, boxWidth: s, isHeader: o } = t;
                !o &&
                  (i.outside && L + e < R.left && (R.left = L + e),
                  !o && i.outside && R.left + s > R.right && (R.right = L + e));
              }),
                j.forEach(function (t) {
                  let {
                      x: e,
                      anchorX: s,
                      anchorY: o,
                      pos: r,
                      point: { isHeader: n },
                    } = t,
                    a = {
                      visibility: void 0 === r ? "hidden" : "inherit",
                      x: e,
                      y: (r || 0) + D,
                      anchorX: s,
                      anchorY: o,
                    };
                  if (i.outside && e < s) {
                    let t = L - R.left;
                    t > 0 &&
                      (n || ((a.x = e + t), (a.anchorX = s + t)),
                      n &&
                        ((a.x = (R.right - R.left) / 2), (a.anchorX = s + t)));
                  }
                  t.tt.attr(a);
                });
              let { container: z, outside: N, renderer: W } = i;
              if (N && z && W) {
                let { width: t, height: e, x: i, y: s } = T.getBBox();
                W.setSize(t + i, e + s, !1),
                  (z.style.left = R.left + "px"),
                  (z.style.top = O + "px");
              }
              a && T.attr({ opacity: 1 === T.opacity ? 0.999 : 1 });
            }
            drawTracker() {
              if (!this.shouldStickOnContact()) {
                this.tracker && (this.tracker = this.tracker.destroy());
                return;
              }
              let t = this.chart,
                e = this.label,
                i = this.shared ? t.hoverPoints : t.hoverPoint;
              if (!e || !i) return;
              let s = { x: 0, y: 0, width: 0, height: 0 },
                o = this.getAnchor(i),
                r = e.getBBox();
              (o[0] += t.plotLeft - (e.translateX || 0)),
                (o[1] += t.plotTop - (e.translateY || 0)),
                (s.x = Math.min(0, o[0])),
                (s.y = Math.min(0, o[1])),
                (s.width =
                  o[0] < 0
                    ? Math.max(Math.abs(o[0]), r.width - o[0])
                    : Math.max(Math.abs(o[0]), r.width)),
                (s.height =
                  o[1] < 0
                    ? Math.max(Math.abs(o[1]), r.height - Math.abs(o[1]))
                    : Math.max(Math.abs(o[1]), r.height)),
                this.tracker
                  ? this.tracker.attr(s)
                  : ((this.tracker = e.renderer
                      .rect(s)
                      .addClass("highcharts-tracker")
                      .add(e)),
                    t.styledMode ||
                      this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
            }
            styledModeFormat(t) {
              return t
                .replace(
                  'style="font-size: 0.8em"',
                  'class="highcharts-header"'
                )
                .replace(
                  /style="color:{(point|series)\.color}"/g,
                  'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"'
                );
            }
            tooltipFooterHeaderFormatter(t, e) {
              let i = t.series,
                s = i.tooltipOptions,
                o = i.xAxis,
                n = o && o.dateTime,
                a = { isFooter: e, labelConfig: t },
                h = s.xDateFormat,
                l = s[e ? "footerFormat" : "headerFormat"];
              return (
                g(this, "headerFormatter", a, function (e) {
                  n &&
                    !h &&
                    m(t.key) &&
                    (h = n.getXDateFormat(t.key, s.dateTimeLabelFormats)),
                    n &&
                      h &&
                      ((t.point && t.point.tooltipDateKeys) || ["key"]).forEach(
                        function (t) {
                          l = l.replace(
                            "{point." + t + "}",
                            "{point." + t + ":" + h + "}"
                          );
                        }
                      ),
                    i.chart.styledMode && (l = this.styledModeFormat(l)),
                    (e.text = r(l, { point: t, series: i }, this.chart));
                }),
                a.text
              );
            }
            update(t) {
              this.destroy(), this.init(this.chart, y(!0, this.options, t));
            }
            updatePosition(t) {
              let {
                  chart: e,
                  container: i,
                  distance: s,
                  options: o,
                  renderer: r,
                } = this,
                { height: n = 0, width: a = 0 } = this.getLabel(),
                h = e.pointer,
                {
                  left: l,
                  top: d,
                  scaleX: p,
                  scaleY: u,
                } = h.getChartPosition(),
                g = (o.positioner || this.getPosition).call(this, a, n, t),
                f = (t.plotX || 0) + e.plotLeft,
                m = (t.plotY || 0) + e.plotTop,
                x;
              r &&
                i &&
                (o.positioner && ((g.x += l - s), (g.y += d - s)),
                (x = (o.borderWidth || 0) + 2 * s + 2),
                r.setSize(a + x, n + x, !1),
                (1 !== p || 1 !== u) &&
                  (c(i, { transform: `scale(${p}, ${u})` }),
                  (f *= p),
                  (m *= u)),
                (f += l - g.x),
                (m += d - g.y)),
                this.move(Math.round(g.x), Math.round(g.y || 0), f, m);
            }
          }
          return (
            (function (t) {
              let e = [];
              t.compose = function (i) {
                o.pushUnique(e, i) &&
                  l(i, "afterInit", function () {
                    let e = this.chart;
                    e.options.tooltip &&
                      (e.tooltip = new t(e, e.options.tooltip));
                  });
              };
            })(S || (S = {})),
            S
          );
        }
      ),
      i(
        e,
        "Core/Series/Point.js",
        [
          e["Core/Renderer/HTML/AST.js"],
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Defaults.js"],
          e["Core/Templating.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o) {
          let { animObject: r } = e,
            { defaultOptions: n } = i,
            { format: a } = s,
            {
              addEvent: h,
              defined: l,
              erase: d,
              extend: c,
              fireEvent: p,
              getNestedProperty: u,
              isArray: g,
              isFunction: f,
              isNumber: m,
              isObject: x,
              merge: y,
              objectEach: b,
              pick: v,
              syncTimeout: k,
              removeEvent: S,
              uniqueKey: M,
            } = o;
          class C {
            constructor() {
              (this.category = void 0),
                (this.destroyed = !1),
                (this.formatPrefix = "point"),
                (this.id = void 0),
                (this.isNull = !1),
                (this.name = void 0),
                (this.options = void 0),
                (this.percentage = void 0),
                (this.selected = !1),
                (this.series = void 0),
                (this.shapeArgs = void 0),
                (this.total = void 0),
                (this.visible = !0),
                (this.x = void 0);
            }
            animateBeforeDestroy() {
              let t = this,
                e = { x: t.startXPos, opacity: 0 },
                i = t.getGraphicalProps();
              i.singular.forEach(function (i) {
                t[i] = t[i].animate(
                  "dataLabel" === i
                    ? { x: t[i].startXPos, y: t[i].startYPos, opacity: 0 }
                    : e
                );
              }),
                i.plural.forEach(function (e) {
                  t[e].forEach(function (e) {
                    e.element &&
                      e.animate(
                        c(
                          { x: t.startXPos },
                          e.startYPos ? { x: e.startXPos, y: e.startYPos } : {}
                        )
                      );
                  });
                });
            }
            applyOptions(t, e) {
              let i = this.series,
                s = i.options.pointValKey || i.pointValKey;
              return (
                c(this, (t = C.prototype.optionsToObject.call(this, t))),
                (this.options = this.options ? c(this.options, t) : t),
                t.group && delete this.group,
                t.dataLabels && delete this.dataLabels,
                s && (this.y = C.prototype.getNestedProperty.call(this, s)),
                this.selected && (this.state = "select"),
                "name" in this &&
                  void 0 === e &&
                  i.xAxis &&
                  i.xAxis.hasNames &&
                  (this.x = i.xAxis.nameToX(this)),
                void 0 === this.x && i
                  ? void 0 === e
                    ? (this.x = i.autoIncrement())
                    : (this.x = e)
                  : m(t.x) &&
                    i.options.relativeXValue &&
                    (this.x = i.autoIncrement(t.x)),
                (this.isNull = this.isValid && !this.isValid()),
                (this.formatPrefix = this.isNull ? "null" : "point"),
                this
              );
            }
            destroy() {
              if (!this.destroyed) {
                let t = this,
                  e = t.series,
                  i = e.chart,
                  s = e.options.dataSorting,
                  o = i.hoverPoints,
                  n = t.series.chart.renderer.globalAnimation,
                  a = r(n),
                  h = () => {
                    for (let e in ((t.graphic ||
                      t.graphics ||
                      t.dataLabel ||
                      t.dataLabels) &&
                      (S(t), t.destroyElements()),
                    t))
                      delete t[e];
                  };
                t.legendItem && i.legend.destroyItem(t),
                  o &&
                    (t.setState(), d(o, t), o.length || (i.hoverPoints = null)),
                  t === i.hoverPoint && t.onMouseOut(),
                  s && s.enabled
                    ? (this.animateBeforeDestroy(), k(h, a.duration))
                    : h(),
                  i.pointCount--;
              }
              this.destroyed = !0;
            }
            destroyElements(t) {
              let e = this,
                i = e.getGraphicalProps(t);
              i.singular.forEach(function (t) {
                e[t] = e[t].destroy();
              }),
                i.plural.forEach(function (t) {
                  e[t].forEach(function (t) {
                    t && t.element && t.destroy();
                  }),
                    delete e[t];
                });
            }
            firePointEvent(t, e, i) {
              let s = this,
                o = this.series,
                r = o.options;
              (r.point.events[t] ||
                (s.options && s.options.events && s.options.events[t])) &&
                s.importEvents(),
                "click" === t &&
                  r.allowPointSelect &&
                  (i = function (t) {
                    !s.destroyed &&
                      s.select &&
                      s.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
                  }),
                p(s, t, e, i);
            }
            getClassName() {
              return (
                "highcharts-point" +
                (this.selected ? " highcharts-point-select" : "") +
                (this.negative ? " highcharts-negative" : "") +
                (this.isNull ? " highcharts-null-point" : "") +
                (void 0 !== this.colorIndex
                  ? " highcharts-color-" + this.colorIndex
                  : "") +
                (this.options.className ? " " + this.options.className : "") +
                (this.zone && this.zone.className
                  ? " " + this.zone.className.replace("highcharts-negative", "")
                  : "")
              );
            }
            getGraphicalProps(t) {
              let e, i;
              let s = this,
                o = [],
                r = { singular: [], plural: [] };
              for (
                (t = t || { graphic: 1, dataLabel: 1 }).graphic &&
                  o.push("graphic", "connector"),
                  t.dataLabel &&
                    o.push("dataLabel", "dataLabelPath", "dataLabelUpper"),
                  i = o.length;
                i--;

              )
                s[(e = o[i])] && r.singular.push(e);
              return (
                ["graphic", "dataLabel"].forEach(function (e) {
                  let i = e + "s";
                  t[e] && s[i] && r.plural.push(i);
                }),
                r
              );
            }
            getLabelConfig() {
              return {
                x: this.category,
                y: this.y,
                color: this.color,
                colorIndex: this.colorIndex,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal,
              };
            }
            getNestedProperty(t) {
              return t
                ? 0 === t.indexOf("custom.")
                  ? u(t, this.options)
                  : this[t]
                : void 0;
            }
            getZone() {
              let t = this.series,
                e = t.zones,
                i = t.zoneAxis || "y",
                s,
                o = 0;
              for (s = e[0]; this[i] >= s.value; ) s = e[++o];
              return (
                this.nonZonedColor || (this.nonZonedColor = this.color),
                s && s.color && !this.options.color
                  ? (this.color = s.color)
                  : (this.color = this.nonZonedColor),
                s
              );
            }
            hasNewShapeType() {
              let t =
                this.graphic &&
                (this.graphic.symbolName || this.graphic.element.nodeName);
              return t !== this.shapeType;
            }
            init(t, e, i) {
              return (
                (this.series = t),
                this.applyOptions(e, i),
                (this.id = l(this.id) ? this.id : M()),
                this.resolveColor(),
                t.chart.pointCount++,
                p(this, "afterInit"),
                this
              );
            }
            isValid() {
              return (m(this.x) || this.x instanceof Date) && m(this.y);
            }
            optionsToObject(t) {
              let e = this.series,
                i = e.options.keys,
                s = i || e.pointArrayMap || ["y"],
                o = s.length,
                r = {},
                n,
                a = 0,
                h = 0;
              if (m(t) || null === t) r[s[0]] = t;
              else if (g(t))
                for (
                  !i &&
                  t.length > o &&
                  ("string" == (n = typeof t[0])
                    ? (r.name = t[0])
                    : "number" === n && (r.x = t[0]),
                  a++);
                  h < o;

                )
                  (i && void 0 === t[a]) ||
                    (s[h].indexOf(".") > 0
                      ? C.prototype.setNestedProperty(r, t[a], s[h])
                      : (r[s[h]] = t[a])),
                    a++,
                    h++;
              else
                "object" == typeof t &&
                  ((r = t),
                  t.dataLabels && (e.hasDataLabels = () => !0),
                  t.marker && (e._hasPointMarkers = !0));
              return r;
            }
            pos(t, e = this.plotY) {
              if (!this.destroyed) {
                let { plotX: i, series: s } = this,
                  { chart: o, xAxis: r, yAxis: n } = s,
                  a = 0,
                  h = 0;
                if (m(i) && m(e))
                  return (
                    t &&
                      ((a = r ? r.pos : o.plotLeft),
                      (h = n ? n.pos : o.plotTop)),
                    o.inverted && r && n
                      ? [n.len - e + h, r.len - i + a]
                      : [i + a, e + h]
                  );
              }
            }
            resolveColor() {
              let t = this.series,
                e = t.chart.options.chart,
                i = t.chart.styledMode,
                s,
                o,
                r = e.colorCount,
                n;
              delete this.nonZonedColor,
                t.options.colorByPoint
                  ? (i ||
                      ((s = (o = t.options.colors || t.chart.options.colors)[
                        t.colorCounter
                      ]),
                      (r = o.length)),
                    (n = t.colorCounter),
                    t.colorCounter++,
                    t.colorCounter === r && (t.colorCounter = 0))
                  : (i || (s = t.color), (n = t.colorIndex)),
                (this.colorIndex = v(this.options.colorIndex, n)),
                (this.color = v(this.options.color, s));
            }
            setNestedProperty(t, e, i) {
              let s = i.split(".");
              return (
                s.reduce(function (t, i, s, o) {
                  let r = o.length - 1 === s;
                  return (t[i] = r ? e : x(t[i], !0) ? t[i] : {}), t[i];
                }, t),
                t
              );
            }
            shouldDraw() {
              return !this.isNull;
            }
            tooltipFormatter(t) {
              let e = this.series,
                i = e.tooltipOptions,
                s = v(i.valueDecimals, ""),
                o = i.valuePrefix || "",
                r = i.valueSuffix || "";
              return (
                e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t)),
                (e.pointArrayMap || ["y"]).forEach(function (e) {
                  (e = "{point." + e),
                    (o || r) &&
                      (t = t.replace(RegExp(e + "}", "g"), o + e + "}" + r)),
                    (t = t.replace(RegExp(e + "}", "g"), e + ":,." + s + "f}"));
                }),
                a(t, { point: this, series: this.series }, e.chart)
              );
            }
            update(t, e, i, s) {
              let o;
              let r = this,
                n = r.series,
                a = r.graphic,
                h = n.chart,
                l = n.options;
              function d() {
                r.applyOptions(t);
                let s = a && r.hasMockGraphic,
                  d = null === r.y ? !s : s;
                a && d && ((r.graphic = a.destroy()), delete r.hasMockGraphic),
                  x(t, !0) &&
                    (a &&
                      a.element &&
                      t &&
                      t.marker &&
                      void 0 !== t.marker.symbol &&
                      (r.graphic = a.destroy()),
                    t?.dataLabels &&
                      r.dataLabel &&
                      (r.dataLabel = r.dataLabel.destroy())),
                  (o = r.index),
                  n.updateParallelArrays(r, o),
                  (l.data[o] =
                    x(l.data[o], !0) || x(t, !0) ? r.options : v(t, l.data[o])),
                  (n.isDirty = n.isDirtyData = !0),
                  !n.fixedBox && n.hasCartesianSeries && (h.isDirtyBox = !0),
                  "point" === l.legendType && (h.isDirtyLegend = !0),
                  e && h.redraw(i);
              }
              (e = v(e, !0)),
                !1 === s ? d() : r.firePointEvent("update", { options: t }, d);
            }
            remove(t, e) {
              this.series.removePoint(this.series.data.indexOf(this), t, e);
            }
            select(t, e) {
              let i = this,
                s = i.series,
                o = s.chart;
              (t = v(t, !i.selected)),
                (this.selectedStaging = t),
                i.firePointEvent(
                  t ? "select" : "unselect",
                  { accumulate: e },
                  function () {
                    (i.selected = i.options.selected = t),
                      (s.options.data[s.data.indexOf(i)] = i.options),
                      i.setState(t && "select"),
                      e ||
                        o.getSelectedPoints().forEach(function (t) {
                          let e = t.series;
                          t.selected &&
                            t !== i &&
                            ((t.selected = t.options.selected = !1),
                            (e.options.data[e.data.indexOf(t)] = t.options),
                            t.setState(
                              o.hoverPoints && e.options.inactiveOtherPoints
                                ? "inactive"
                                : ""
                            ),
                            t.firePointEvent("unselect"));
                        });
                  }
                ),
                delete this.selectedStaging;
            }
            onMouseOver(t) {
              let e = this.series,
                i = e.chart,
                s = i.pointer;
              (t = t
                ? s.normalize(t)
                : s.getChartCoordinatesFromPoint(this, i.inverted)),
                s.runPointActions(t, this);
            }
            onMouseOut() {
              let t = this.series.chart;
              this.firePointEvent("mouseOut"),
                this.series.options.inactiveOtherPoints ||
                  (t.hoverPoints || []).forEach(function (t) {
                    t.setState();
                  }),
                (t.hoverPoints = t.hoverPoint = null);
            }
            importEvents() {
              if (!this.hasImportedEvents) {
                let t = this,
                  e = y(t.series.options.point, t.options),
                  i = e.events;
                (t.events = i),
                  b(i, function (e, i) {
                    f(e) && h(t, i, e);
                  }),
                  (this.hasImportedEvents = !0);
              }
            }
            setState(e, i) {
              let s = this.series,
                o = this.state,
                r = s.options.states[e || "normal"] || {},
                a = n.plotOptions[s.type].marker && s.options.marker,
                h = a && !1 === a.enabled,
                l = (a && a.states && a.states[e || "normal"]) || {},
                d = !1 === l.enabled,
                u = this.marker || {},
                g = s.chart,
                f = a && s.markerAttribs,
                x = s.halo,
                y,
                b,
                k,
                S = s.stateMarkerGraphic,
                M;
              if (
                ((e = e || "") === this.state && !i) ||
                (this.selected && "select" !== e) ||
                !1 === r.enabled ||
                (e && (d || (h && !1 === l.enabled))) ||
                (e && u.states && u.states[e] && !1 === u.states[e].enabled)
              )
                return;
              if (
                ((this.state = e),
                f && (y = s.markerAttribs(this, e)),
                this.graphic && !this.hasMockGraphic)
              ) {
                if (
                  (o && this.graphic.removeClass("highcharts-point-" + o),
                  e && this.graphic.addClass("highcharts-point-" + e),
                  !g.styledMode)
                ) {
                  (b = s.pointAttribs(this, e)),
                    (k = v(g.options.chart.animation, r.animation));
                  let t = b.opacity;
                  s.options.inactiveOtherPoints &&
                    m(t) &&
                    (this.dataLabels || []).forEach(function (e) {
                      e &&
                        !e.hasClass("highcharts-data-label-hidden") &&
                        (e.animate({ opacity: t }, k),
                        e.connector && e.connector.animate({ opacity: t }, k));
                    }),
                    this.graphic.animate(b, k);
                }
                y &&
                  this.graphic.animate(
                    y,
                    v(g.options.chart.animation, l.animation, a.animation)
                  ),
                  S && S.hide();
              } else
                e &&
                  l &&
                  ((M = u.symbol || s.symbol),
                  S && S.currentSymbol !== M && (S = S.destroy()),
                  y &&
                    (S
                      ? S[i ? "animate" : "attr"]({ x: y.x, y: y.y })
                      : M &&
                        ((s.stateMarkerGraphic = S =
                          g.renderer
                            .symbol(M, y.x, y.y, y.width, y.height)
                            .add(s.markerGroup)),
                        (S.currentSymbol = M))),
                  !g.styledMode &&
                    S &&
                    "inactive" !== this.state &&
                    S.attr(s.pointAttribs(this, e))),
                  S &&
                    (S[e && this.isInside ? "show" : "hide"](),
                    (S.element.point = this),
                    S.addClass(this.getClassName(), !0));
              let C = r.halo,
                w = this.graphic || S,
                T = (w && w.visibility) || "inherit";
              C && C.size && w && "hidden" !== T && !this.isCluster
                ? (x || (s.halo = x = g.renderer.path().add(w.parentGroup)),
                  x
                    .show()
                    [i ? "animate" : "attr"]({ d: this.haloPath(C.size) }),
                  x.attr({
                    class:
                      "highcharts-halo highcharts-color-" +
                      v(this.colorIndex, s.colorIndex) +
                      (this.className ? " " + this.className : ""),
                    visibility: T,
                    zIndex: -1,
                  }),
                  (x.point = this),
                  g.styledMode ||
                    x.attr(
                      c(
                        {
                          fill: this.color || s.color,
                          "fill-opacity": C.opacity,
                        },
                        t.filterUserAttributes(C.attributes || {})
                      )
                    ))
                : x &&
                  x.point &&
                  x.point.haloPath &&
                  x.animate({ d: x.point.haloPath(0) }, null, x.hide),
                p(this, "afterSetState", { state: e });
            }
            haloPath(t) {
              let e = this.pos();
              return e
                ? this.series.chart.renderer.symbols.circle(
                    Math.floor(e[0]) - t,
                    e[1] - t,
                    2 * t,
                    2 * t
                  )
                : [];
            }
          }
          return C;
        }
      ),
      i(
        e,
        "Core/Pointer.js",
        [
          e["Core/Color/Color.js"],
          e["Core/Globals.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { parse: s } = t,
            { charts: o, noop: r } = e,
            {
              addEvent: n,
              attr: a,
              css: h,
              defined: l,
              extend: d,
              find: c,
              fireEvent: p,
              isNumber: u,
              isObject: g,
              objectEach: f,
              offset: m,
              pick: x,
              splat: y,
            } = i;
          class b {
            constructor(t, e) {
              (this.lastValidTouch = {}),
                (this.pinchDown = []),
                (this.runChartClick = !1),
                (this.eventsToUnbind = []),
                (this.chart = t),
                (this.hasDragged = !1),
                (this.options = e),
                this.init(t, e);
            }
            applyInactiveState(t) {
              let e = [],
                i;
              (t || []).forEach(function (t) {
                (i = t.series),
                  e.push(i),
                  i.linkedParent && e.push(i.linkedParent),
                  i.linkedSeries && (e = e.concat(i.linkedSeries)),
                  i.navigatorSeries && e.push(i.navigatorSeries);
              }),
                this.chart.series.forEach(function (t) {
                  -1 === e.indexOf(t)
                    ? t.setState("inactive", !0)
                    : t.options.inactiveOtherPoints &&
                      t.setAllPointsToState("inactive");
                });
            }
            destroy() {
              let t = this;
              this.eventsToUnbind.forEach((t) => t()),
                (this.eventsToUnbind = []),
                !e.chartCount &&
                  (b.unbindDocumentMouseUp &&
                    (b.unbindDocumentMouseUp = b.unbindDocumentMouseUp()),
                  b.unbindDocumentTouchEnd &&
                    (b.unbindDocumentTouchEnd = b.unbindDocumentTouchEnd())),
                clearInterval(t.tooltipTimeout),
                f(t, function (e, i) {
                  t[i] = void 0;
                });
            }
            getSelectionMarkerAttrs(t, e) {
              let i = {
                args: { chartX: t, chartY: e },
                attrs: {},
                shapeType: "rect",
              };
              return (
                p(this, "getSelectionMarkerAttrs", i, (i) => {
                  let s;
                  let {
                      chart: o,
                      mouseDownX: r = 0,
                      mouseDownY: n = 0,
                      zoomHor: a,
                      zoomVert: h,
                    } = this,
                    l = i.attrs;
                  (l.x = o.plotLeft),
                    (l.y = o.plotTop),
                    (l.width = a ? 1 : o.plotWidth),
                    (l.height = h ? 1 : o.plotHeight),
                    a &&
                      ((s = t - r),
                      (l.width = Math.abs(s)),
                      (l.x = (s > 0 ? 0 : s) + r)),
                    h &&
                      ((s = e - n),
                      (l.height = Math.abs(s)),
                      (l.y = (s > 0 ? 0 : s) + n));
                }),
                i
              );
            }
            drag(t) {
              let e = this.chart,
                i = e.options.chart,
                o = e.plotLeft,
                r = e.plotTop,
                n = e.plotWidth,
                a = e.plotHeight,
                h = this.mouseDownX || 0,
                l = this.mouseDownY || 0,
                d = g(i.panning) ? i.panning && i.panning.enabled : i.panning,
                c = i.panKey && t[i.panKey + "Key"],
                p = t.chartX,
                u = t.chartY,
                f,
                m = this.selectionMarker;
              if (
                (!m || !m.touch) &&
                (p < o ? (p = o) : p > o + n && (p = o + n),
                u < r ? (u = r) : u > r + a && (u = r + a),
                (this.hasDragged = Math.sqrt(
                  Math.pow(h - p, 2) + Math.pow(l - u, 2)
                )),
                this.hasDragged > 10)
              ) {
                f = e.isInsidePlot(h - o, l - r, { visiblePlotOnly: !0 });
                let { shapeType: n, attrs: a } = this.getSelectionMarkerAttrs(
                  p,
                  u
                );
                (e.hasCartesianSeries || e.mapView) &&
                  (this.zoomX || this.zoomY) &&
                  f &&
                  !c &&
                  !m &&
                  ((this.selectionMarker = m = e.renderer[n]()),
                  m
                    .attr({ class: "highcharts-selection-marker", zIndex: 7 })
                    .add(),
                  e.styledMode ||
                    m.attr({
                      fill:
                        i.selectionMarkerFill ||
                        s("#334eff").setOpacity(0.25).get(),
                    })),
                  m && m.attr(a),
                  f && !m && d && e.pan(t, i.panning);
              }
            }
            dragStart(t) {
              let e = this.chart;
              (e.mouseIsDown = t.type),
                (e.cancelClick = !1),
                (e.mouseDownX = this.mouseDownX = t.chartX),
                (e.mouseDownY = this.mouseDownY = t.chartY);
            }
            getSelectionBox(t) {
              let e = { args: { marker: t }, result: {} };
              return (
                p(this, "getSelectionBox", e, (e) => {
                  e.result = {
                    x: t.attr ? +t.attr("x") : t.x,
                    y: t.attr ? +t.attr("y") : t.y,
                    width: t.attr ? t.attr("width") : t.width,
                    height: t.attr ? t.attr("height") : t.height,
                  };
                }),
                e.result
              );
            }
            drop(t) {
              let e = this,
                i = this.chart,
                s = this.hasPinched;
              if (this.selectionMarker) {
                let {
                    x: o,
                    y: r,
                    width: n,
                    height: a,
                  } = this.getSelectionBox(this.selectionMarker),
                  h = {
                    originalEvent: t,
                    xAxis: [],
                    yAxis: [],
                    x: o,
                    y: r,
                    width: n,
                    height: a,
                  },
                  c = !!i.mapView;
                (this.hasDragged || s) &&
                  (i.axes.forEach(function (i) {
                    if (
                      i.zoomEnabled &&
                      l(i.min) &&
                      (s || e[{ xAxis: "zoomX", yAxis: "zoomY" }[i.coll]]) &&
                      u(o) &&
                      u(r) &&
                      u(n) &&
                      u(a)
                    ) {
                      let e = i.horiz,
                        s = "touchend" === t.type ? i.minPixelPadding : 0,
                        l = i.toValue((e ? o : r) + s),
                        d = i.toValue((e ? o + n : r + a) - s);
                      h[i.coll].push({
                        axis: i,
                        min: Math.min(l, d),
                        max: Math.max(l, d),
                      }),
                        (c = !0);
                    }
                  }),
                  c &&
                    p(i, "selection", h, function (t) {
                      i.zoom(d(t, s ? { animation: !1 } : null));
                    })),
                  u(i.index) &&
                    (this.selectionMarker = this.selectionMarker.destroy()),
                  s && this.scaleGroups();
              }
              i &&
                u(i.index) &&
                (h(i.container, { cursor: i._cursor }),
                (i.cancelClick = +this.hasDragged > 10),
                (i.mouseIsDown = this.hasDragged = this.hasPinched = !1),
                (this.pinchDown = []));
            }
            findNearestKDPoint(t, e, i) {
              let s;
              return (
                t.forEach(function (t) {
                  let o = t.noSharedTooltip && e,
                    r = !o && 0 > t.options.findNearestPointBy.indexOf("y"),
                    n = t.searchPoint(i, r);
                  g(n, !0) &&
                    n.series &&
                    (!g(s, !0) ||
                      (function (t, i) {
                        let s = t.distX - i.distX,
                          o = t.dist - i.dist,
                          r =
                            (i.series.group && i.series.group.zIndex) -
                            (t.series.group && t.series.group.zIndex);
                        return 0 !== s && e
                          ? s
                          : 0 !== o
                          ? o
                          : 0 !== r
                          ? r
                          : t.series.index > i.series.index
                          ? -1
                          : 1;
                      })(s, n) > 0) &&
                    (s = n);
                }),
                s
              );
            }
            getChartCoordinatesFromPoint(t, e) {
              let i = t.series,
                s = i.xAxis,
                o = i.yAxis,
                r = t.shapeArgs;
              if (s && o) {
                let i = x(t.clientX, t.plotX),
                  n = t.plotY || 0;
                return (
                  t.isNode && r && u(r.x) && u(r.y) && ((i = r.x), (n = r.y)),
                  e
                    ? { chartX: o.len + o.pos - n, chartY: s.len + s.pos - i }
                    : { chartX: i + s.pos, chartY: n + o.pos }
                );
              }
              if (r && r.x && r.y) return { chartX: r.x, chartY: r.y };
            }
            getChartPosition() {
              if (this.chartPosition) return this.chartPosition;
              let { container: t } = this.chart,
                e = m(t);
              this.chartPosition = {
                left: e.left,
                top: e.top,
                scaleX: 1,
                scaleY: 1,
              };
              let i = t.offsetWidth,
                s = t.offsetHeight;
              return (
                i > 2 &&
                  s > 2 &&
                  ((this.chartPosition.scaleX = e.width / i),
                  (this.chartPosition.scaleY = e.height / s)),
                this.chartPosition
              );
            }
            getCoordinates(t) {
              let e = { xAxis: [], yAxis: [] };
              return (
                this.chart.axes.forEach(function (i) {
                  e[i.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: i,
                    value: i.toValue(t[i.horiz ? "chartX" : "chartY"]),
                  });
                }),
                e
              );
            }
            getHoverData(t, e, i, s, o, r) {
              let n = [],
                a = function (t) {
                  return (
                    t.visible &&
                    !(!o && t.directTouch) &&
                    x(t.options.enableMouseTracking, !0)
                  );
                },
                h = e,
                l,
                d = {
                  chartX: r ? r.chartX : void 0,
                  chartY: r ? r.chartY : void 0,
                  shared: o,
                };
              p(this, "beforeGetHoverData", d);
              let u = h && !h.stickyTracking;
              l = u
                ? [h]
                : i.filter((t) => t.stickyTracking && (d.filter || a)(t));
              let f = (s && t) || !r ? t : this.findNearestKDPoint(l, o, r);
              return (
                (h = f && f.series),
                f &&
                  (o && !h.noSharedTooltip
                    ? (l = i.filter(function (t) {
                        return d.filter
                          ? d.filter(t)
                          : a(t) && !t.noSharedTooltip;
                      })).forEach(function (t) {
                        let e = c(t.points, function (t) {
                          return t.x === f.x && !t.isNull;
                        });
                        g(e) &&
                          (t.boosted && t.boost && (e = t.boost.getPoint(e)),
                          n.push(e));
                      })
                    : n.push(f)),
                p(this, "afterGetHoverData", (d = { hoverPoint: f })),
                { hoverPoint: d.hoverPoint, hoverSeries: h, hoverPoints: n }
              );
            }
            getPointFromEvent(t) {
              let e = t.target,
                i;
              for (; e && !i; ) (i = e.point), (e = e.parentNode);
              return i;
            }
            onTrackerMouseOut(t) {
              let e = this.chart,
                i = t.relatedTarget,
                s = e.hoverSeries;
              (this.isDirectTouch = !1),
                !s ||
                  !i ||
                  s.stickyTracking ||
                  this.inClass(i, "highcharts-tooltip") ||
                  (this.inClass(i, "highcharts-series-" + s.index) &&
                    this.inClass(i, "highcharts-tracker")) ||
                  s.onMouseOut();
            }
            inClass(t, e) {
              let i = t,
                s;
              for (; i; ) {
                if ((s = a(i, "class"))) {
                  if (-1 !== s.indexOf(e)) return !0;
                  if (-1 !== s.indexOf("highcharts-container")) return !1;
                }
                i = i.parentElement;
              }
            }
            init(t, e) {
              (this.options = e),
                (this.chart = t),
                (this.runChartClick = !!(
                  e.chart.events && e.chart.events.click
                )),
                (this.pinchDown = []),
                (this.lastValidTouch = {}),
                this.setDOMEvents(),
                p(this, "afterInit");
            }
            normalize(t, e) {
              let i = t.touches,
                s = i
                  ? i.length
                    ? i.item(0)
                    : x(i.changedTouches, t.changedTouches)[0]
                  : t;
              e || (e = this.getChartPosition());
              let o = s.pageX - e.left,
                r = s.pageY - e.top;
              return d(t, {
                chartX: Math.round((o /= e.scaleX)),
                chartY: Math.round((r /= e.scaleY)),
              });
            }
            onContainerClick(t) {
              let e = this.chart,
                i = e.hoverPoint,
                s = this.normalize(t),
                o = e.plotLeft,
                r = e.plotTop;
              !e.cancelClick &&
                (i && this.inClass(s.target, "highcharts-tracker")
                  ? (p(i.series, "click", d(s, { point: i })),
                    e.hoverPoint && i.firePointEvent("click", s))
                  : (d(s, this.getCoordinates(s)),
                    e.isInsidePlot(s.chartX - o, s.chartY - r, {
                      visiblePlotOnly: !0,
                    }) && p(e, "click", s)));
            }
            onContainerMouseDown(t) {
              let i = (1 & (t.buttons || t.button)) == 1;
              (t = this.normalize(t)),
                e.isFirefox && 0 !== t.button && this.onContainerMouseMove(t),
                (void 0 === t.button || i) &&
                  (this.zoomOption(t),
                  i && t.preventDefault && t.preventDefault(),
                  this.dragStart(t));
            }
            onContainerMouseLeave(t) {
              let e = o[x(b.hoverChartIndex, -1)];
              (t = this.normalize(t)),
                this.onContainerMouseMove(t),
                e &&
                  t.relatedTarget &&
                  !this.inClass(t.relatedTarget, "highcharts-tooltip") &&
                  (e.pointer.reset(), (e.pointer.chartPosition = void 0));
            }
            onContainerMouseEnter(t) {
              delete this.chartPosition;
            }
            onContainerMouseMove(t) {
              let e = this.chart,
                i = e.tooltip,
                s = this.normalize(t);
              this.setHoverChartIndex(t),
                ("mousedown" === e.mouseIsDown || this.touchSelect(s)) &&
                  this.drag(s),
                !e.openMenu &&
                  (this.inClass(s.target, "highcharts-tracker") ||
                    e.isInsidePlot(
                      s.chartX - e.plotLeft,
                      s.chartY - e.plotTop,
                      {
                        visiblePlotOnly: !0,
                      }
                    )) &&
                  !(i && i.shouldStickOnContact(s)) &&
                  (this.inClass(s.target, "highcharts-no-tooltip")
                    ? this.reset(!1, 0)
                    : this.runPointActions(s));
            }
            onDocumentTouchEnd(t) {
              let e = o[x(b.hoverChartIndex, -1)];
              e && e.pointer.drop(t);
            }
            onContainerTouchMove(t) {
              this.touchSelect(t)
                ? this.onContainerMouseMove(t)
                : this.touch(t);
            }
            onContainerTouchStart(t) {
              this.touchSelect(t)
                ? this.onContainerMouseDown(t)
                : (this.zoomOption(t), this.touch(t, !0));
            }
            onDocumentMouseMove(t) {
              let e = this.chart,
                i = e.tooltip,
                s = this.chartPosition,
                o = this.normalize(t, s);
              !s ||
                e.isInsidePlot(o.chartX - e.plotLeft, o.chartY - e.plotTop, {
                  visiblePlotOnly: !0,
                }) ||
                (i && i.shouldStickOnContact(o)) ||
                this.inClass(o.target, "highcharts-tracker") ||
                this.reset();
            }
            onDocumentMouseUp(t) {
              let e = o[x(b.hoverChartIndex, -1)];
              e && e.pointer.drop(t);
            }
            pinch(t) {
              let e = this,
                i = e.chart,
                s = e.pinchDown,
                o = t.touches || [],
                n = o.length,
                a = e.lastValidTouch,
                h = e.hasZoom,
                l = {},
                c =
                  1 === n &&
                  ((e.inClass(t.target, "highcharts-tracker") &&
                    i.runTrackerClick) ||
                    e.runChartClick),
                u = {},
                g = e.chart.tooltip,
                f = 1 === n && x(g && g.options.followTouchMove, !0),
                m = e.selectionMarker;
              n > 1 ? (e.initiated = !0) : f && (e.initiated = !1),
                h &&
                  e.initiated &&
                  !c &&
                  !1 !== t.cancelable &&
                  t.preventDefault(),
                [].map.call(o, function (t) {
                  return e.normalize(t);
                }),
                "touchstart" === t.type
                  ? ([].forEach.call(o, function (t, e) {
                      s[e] = { chartX: t.chartX, chartY: t.chartY };
                    }),
                    (a.x = [s[0].chartX, s[1] && s[1].chartX]),
                    (a.y = [s[0].chartY, s[1] && s[1].chartY]),
                    i.axes.forEach(function (t) {
                      if (t.zoomEnabled) {
                        let e = i.bounds[t.horiz ? "h" : "v"],
                          s = t.minPixelPadding,
                          o = t.toPixels(
                            Math.min(x(t.options.min, t.dataMin), t.dataMin)
                          ),
                          r = t.toPixels(
                            Math.max(x(t.options.max, t.dataMax), t.dataMax)
                          ),
                          n = Math.min(o, r),
                          a = Math.max(o, r);
                        (e.min = Math.min(t.pos, n - s)),
                          (e.max = Math.max(t.pos + t.len, a + s));
                      }
                    }),
                    (e.res = !0))
                  : f
                  ? this.runPointActions(e.normalize(t))
                  : s.length &&
                    (p(i, "touchpan", { originalEvent: t }, () => {
                      m ||
                        (e.selectionMarker = m =
                          d({ destroy: r, touch: !0 }, i.plotBox)),
                        e.pinchTranslate(s, o, l, m, u, a),
                        (e.hasPinched = h),
                        e.scaleGroups(l, u);
                    }),
                    e.res && ((e.res = !1), this.reset(!1, 0)));
            }
            pinchTranslate(t, e, i, s, o, r) {
              this.zoomHor &&
                this.pinchTranslateDirection(!0, t, e, i, s, o, r),
                this.zoomVert &&
                  this.pinchTranslateDirection(!1, t, e, i, s, o, r);
            }
            pinchTranslateDirection(t, e, i, s, o, r, n, a) {
              let h = this.chart,
                l = t ? "x" : "y",
                d = t ? "X" : "Y",
                c = "chart" + d,
                p = t ? "width" : "height",
                u = h["plot" + (t ? "Left" : "Top")],
                g = h.inverted,
                f = h.bounds[t ? "h" : "v"],
                m = 1 === e.length,
                x = e[0][c],
                y = !m && e[1][c],
                b = function () {
                  "number" == typeof w &&
                    Math.abs(x - y) > 20 &&
                    (M = a || Math.abs(C - w) / Math.abs(x - y)),
                    (S = (u - C) / M + x),
                    (v = h["plot" + (t ? "Width" : "Height")] / M);
                },
                v,
                k,
                S,
                M = a || 1,
                C = i[0][c],
                w = !m && i[1][c],
                T;
              b(),
                (k = S) < f.min
                  ? ((k = f.min), (T = !0))
                  : k + v > f.max && ((k = f.max - v), (T = !0)),
                T
                  ? ((C -= 0.8 * (C - n[l][0])),
                    "number" == typeof w && (w -= 0.8 * (w - n[l][1])),
                    b())
                  : (n[l] = [C, w]),
                g || ((r[l] = S - u), (r[p] = v));
              let A = g ? (t ? "scaleY" : "scaleX") : "scale" + d,
                P = g ? 1 / M : M;
              (o[p] = v),
                (o[l] = k),
                (s[A] = M * (g && !t ? -1 : 1)),
                (s["translate" + d] = P * u + (C - P * x));
            }
            reset(t, e) {
              let i = this.chart,
                s = i.hoverSeries,
                o = i.hoverPoint,
                r = i.hoverPoints,
                n = i.tooltip,
                a = n && n.shared ? r : o;
              t &&
                a &&
                y(a).forEach(function (e) {
                  e.series.isCartesian && void 0 === e.plotX && (t = !1);
                }),
                t
                  ? n &&
                    a &&
                    y(a).length &&
                    (n.refresh(a),
                    n.shared && r
                      ? r.forEach(function (t) {
                          t.setState(t.state, !0),
                            t.series.isCartesian &&
                              (t.series.xAxis.crosshair &&
                                t.series.xAxis.drawCrosshair(null, t),
                              t.series.yAxis.crosshair &&
                                t.series.yAxis.drawCrosshair(null, t));
                        })
                      : o &&
                        (o.setState(o.state, !0),
                        i.axes.forEach(function (t) {
                          t.crosshair &&
                            o.series[t.coll] === t &&
                            t.drawCrosshair(null, o);
                        })))
                  : (o && o.onMouseOut(),
                    r &&
                      r.forEach(function (t) {
                        t.setState();
                      }),
                    s && s.onMouseOut(),
                    n && n.hide(e),
                    this.unDocMouseMove &&
                      (this.unDocMouseMove = this.unDocMouseMove()),
                    i.axes.forEach(function (t) {
                      t.hideCrosshair();
                    }),
                    (this.hoverX = i.hoverPoints = i.hoverPoint = null));
            }
            runPointActions(t, e, i) {
              let s = this.chart,
                r = s.series,
                a = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0,
                h = !!a && a.shared,
                l = e || s.hoverPoint,
                d = (l && l.series) || s.hoverSeries,
                p =
                  (!t || "touchmove" !== t.type) &&
                  (!!e || (d && d.directTouch && this.isDirectTouch)),
                u = this.getHoverData(l, d, r, p, h, t);
              (l = u.hoverPoint), (d = u.hoverSeries);
              let g = u.hoverPoints,
                f =
                  d &&
                  d.tooltipOptions.followPointer &&
                  !d.tooltipOptions.split,
                m = h && d && !d.noSharedTooltip;
              if (l && (i || l !== s.hoverPoint || (a && a.isHidden))) {
                if (
                  ((s.hoverPoints || []).forEach(function (t) {
                    -1 === g.indexOf(t) && t.setState();
                  }),
                  s.hoverSeries !== d && d.onMouseOver(),
                  this.applyInactiveState(g),
                  (g || []).forEach(function (t) {
                    t.setState("hover");
                  }),
                  s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"),
                  !l.series)
                )
                  return;
                (s.hoverPoints = g),
                  (s.hoverPoint = l),
                  l.firePointEvent("mouseOver", void 0, () => {
                    a && l && a.refresh(m ? g : l, t);
                  });
              } else if (f && a && !a.isHidden) {
                let e = a.getAnchor([{}], t);
                s.isInsidePlot(e[0], e[1], { visiblePlotOnly: !0 }) &&
                  a.updatePosition({ plotX: e[0], plotY: e[1] });
              }
              this.unDocMouseMove ||
                ((this.unDocMouseMove = n(
                  s.container.ownerDocument,
                  "mousemove",
                  function (t) {
                    let e = o[b.hoverChartIndex];
                    e && e.pointer.onDocumentMouseMove(t);
                  }
                )),
                this.eventsToUnbind.push(this.unDocMouseMove)),
                s.axes.forEach(function (e) {
                  let i;
                  let o = x((e.crosshair || {}).snap, !0);
                  !o ||
                    ((i = s.hoverPoint) && i.series[e.coll] === e) ||
                    (i = c(g, (t) => t.series && t.series[e.coll] === e)),
                    i || !o ? e.drawCrosshair(t, i) : e.hideCrosshair();
                });
            }
            scaleGroups(t, e) {
              let i = this.chart;
              i.series.forEach(function (s) {
                let o = t || s.getPlotBox("series");
                s.group &&
                  ((s.xAxis && s.xAxis.zoomEnabled) || i.mapView) &&
                  (s.group.attr(o),
                  s.markerGroup &&
                    (s.markerGroup.attr(t || s.getPlotBox("marker")),
                    s.markerGroup.clip(e ? i.clipRect : null)),
                  s.dataLabelsGroup && s.dataLabelsGroup.attr(o));
              }),
                i.clipRect.attr(e || i.clipBox);
            }
            setDOMEvents() {
              let t = this.chart.container,
                i = t.ownerDocument;
              (t.onmousedown = this.onContainerMouseDown.bind(this)),
                (t.onmousemove = this.onContainerMouseMove.bind(this)),
                (t.onclick = this.onContainerClick.bind(this)),
                this.eventsToUnbind.push(
                  n(t, "mouseenter", this.onContainerMouseEnter.bind(this))
                ),
                this.eventsToUnbind.push(
                  n(t, "mouseleave", this.onContainerMouseLeave.bind(this))
                ),
                b.unbindDocumentMouseUp ||
                  (b.unbindDocumentMouseUp = n(
                    i,
                    "mouseup",
                    this.onDocumentMouseUp.bind(this)
                  ));
              let s = this.chart.renderTo.parentElement;
              for (; s && "BODY" !== s.tagName; )
                this.eventsToUnbind.push(
                  n(s, "scroll", () => {
                    delete this.chartPosition;
                  })
                ),
                  (s = s.parentElement);
              e.hasTouch &&
                (this.eventsToUnbind.push(
                  n(t, "touchstart", this.onContainerTouchStart.bind(this), {
                    passive: !1,
                  })
                ),
                this.eventsToUnbind.push(
                  n(t, "touchmove", this.onContainerTouchMove.bind(this), {
                    passive: !1,
                  })
                ),
                b.unbindDocumentTouchEnd ||
                  (b.unbindDocumentTouchEnd = n(
                    i,
                    "touchend",
                    this.onDocumentTouchEnd.bind(this),
                    { passive: !1 }
                  )));
            }
            setHoverChartIndex(t) {
              let i = this.chart,
                s = e.charts[x(b.hoverChartIndex, -1)];
              s &&
                s !== i &&
                s.pointer.onContainerMouseLeave(
                  t || { relatedTarget: i.container }
                ),
                (s && s.mouseIsDown) || (b.hoverChartIndex = i.index);
            }
            touch(t, e) {
              let i, s;
              let o = this.chart;
              this.setHoverChartIndex(),
                1 === t.touches.length
                  ? ((t = this.normalize(t)),
                    o.isInsidePlot(
                      t.chartX - o.plotLeft,
                      t.chartY - o.plotTop,
                      {
                        visiblePlotOnly: !0,
                      }
                    ) && !o.openMenu
                      ? (e && this.runPointActions(t),
                        "touchmove" === t.type &&
                          (i =
                            !!(s = this.pinchDown)[0] &&
                            Math.sqrt(
                              Math.pow(s[0].chartX - t.chartX, 2) +
                                Math.pow(s[0].chartY - t.chartY, 2)
                            ) >= 4),
                        x(i, !0) && this.pinch(t))
                      : e && this.reset())
                  : 2 === t.touches.length && this.pinch(t);
            }
            touchSelect(t) {
              return !!(
                this.chart.zooming.singleTouch &&
                t.touches &&
                1 === t.touches.length
              );
            }
            zoomOption(t) {
              let e = this.chart,
                i = (e.options.chart, e.inverted),
                s = e.zooming.type || "",
                o,
                r;
              /touch/.test(t.type) && (s = x(e.zooming.pinchType, s)),
                (this.zoomX = o = /x/.test(s)),
                (this.zoomY = r = /y/.test(s)),
                (this.zoomHor = (o && !i) || (r && i)),
                (this.zoomVert = (r && !i) || (o && i)),
                (this.hasZoom = o || r);
            }
          }
          return (
            (function (t) {
              let e = [],
                s = [];
              (t.compose = function (e) {
                i.pushUnique(s, e) &&
                  n(e, "beforeRender", function () {
                    this.pointer = new t(this, this.options);
                  });
              }),
                (t.dissolve = function () {
                  for (let t = 0, i = e.length; t < i; ++t) e[t]();
                  e.length = 0;
                });
            })(b || (b = {})),
            b
          );
        }
      ),
      i(
        e,
        "Core/Legend/Legend.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Templating.js"],
          e["Core/Globals.js"],
          e["Core/Series/Point.js"],
          e["Core/Renderer/RendererUtilities.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o, r) {
          let { animObject: n, setAnimation: a } = t,
            { format: h } = e,
            { marginNames: l } = i,
            { distribute: d } = o,
            {
              addEvent: c,
              createElement: p,
              css: u,
              defined: g,
              discardElement: f,
              find: m,
              fireEvent: x,
              isNumber: y,
              merge: b,
              pick: v,
              relativeLength: k,
              stableSort: S,
              syncTimeout: M,
            } = r;
          class C {
            constructor(t, e) {
              (this.allItems = []),
                (this.box = void 0),
                (this.contentGroup = void 0),
                (this.display = !1),
                (this.group = void 0),
                (this.initialItemY = 0),
                (this.itemHeight = 0),
                (this.itemMarginBottom = 0),
                (this.itemMarginTop = 0),
                (this.itemX = 0),
                (this.itemY = 0),
                (this.lastItemY = 0),
                (this.lastLineHeight = 0),
                (this.legendHeight = 0),
                (this.legendWidth = 0),
                (this.maxItemWidth = 0),
                (this.maxLegendWidth = 0),
                (this.offsetWidth = 0),
                (this.options = void 0),
                (this.padding = 0),
                (this.pages = []),
                (this.proximate = !1),
                (this.scrollGroup = void 0),
                (this.symbolHeight = 0),
                (this.symbolWidth = 0),
                (this.titleHeight = 0),
                (this.totalItemWidth = 0),
                (this.widthOption = 0),
                (this.chart = t),
                this.init(t, e);
            }
            init(t, e) {
              (this.chart = t),
                this.setOptions(e),
                e.enabled &&
                  (this.render(),
                  c(this.chart, "endResize", function () {
                    this.legend.positionCheckboxes();
                  })),
                c(this.chart, "render", () => {
                  this.options.enabled &&
                    this.proximate &&
                    (this.proximatePositions(), this.positionItems());
                });
            }
            setOptions(t) {
              let e = v(t.padding, 8);
              (this.options = t),
                this.chart.styledMode ||
                  ((this.itemStyle = t.itemStyle),
                  (this.itemHiddenStyle = b(
                    this.itemStyle,
                    t.itemHiddenStyle
                  ))),
                (this.itemMarginTop = t.itemMarginTop),
                (this.itemMarginBottom = t.itemMarginBottom),
                (this.padding = e),
                (this.initialItemY = e - 5),
                (this.symbolWidth = v(t.symbolWidth, 16)),
                (this.pages = []),
                (this.proximate =
                  "proximate" === t.layout && !this.chart.inverted),
                (this.baseline = void 0);
            }
            update(t, e) {
              let i = this.chart;
              this.setOptions(b(!0, this.options, t)),
                this.destroy(),
                (i.isDirtyLegend = i.isDirtyBox = !0),
                v(e, !0) && i.redraw(),
                x(this, "afterUpdate", { redraw: e });
            }
            colorizeItem(t, e) {
              let {
                group: i,
                label: s,
                line: o,
                symbol: r,
              } = t.legendItem || {};
              if (
                (i &&
                  i[e ? "removeClass" : "addClass"](
                    "highcharts-legend-item-hidden"
                  ),
                !this.chart.styledMode)
              ) {
                let { itemHiddenStyle: i } = this,
                  n = i.color,
                  a = (e && t.color) || n,
                  h = t.options && t.options.marker,
                  l = { fill: a };
                s?.css(b(e ? this.itemStyle : i)),
                  o?.attr({ stroke: a }),
                  r &&
                    (h &&
                      r.isMarker &&
                      ((l = t.pointAttribs()), e || (l.stroke = l.fill = n)),
                    r.attr(l));
              }
              x(this, "afterColorizeItem", { item: t, visible: e });
            }
            positionItems() {
              this.allItems.forEach(this.positionItem, this),
                this.chart.isResizing || this.positionCheckboxes();
            }
            positionItem(t) {
              let { group: e, x: i = 0, y: s = 0 } = t.legendItem || {},
                o = this.options,
                r = o.symbolPadding,
                n = !o.rtl,
                a = t.checkbox;
              if (e && e.element) {
                let o = {
                  translateX: n ? i : this.legendWidth - i - 2 * r - 4,
                  translateY: s,
                };
                e[g(e.translateY) ? "animate" : "attr"](o, void 0, () => {
                  x(this, "afterPositionItem", { item: t });
                });
              }
              a && ((a.x = i), (a.y = s));
            }
            destroyItem(t) {
              let e = t.checkbox,
                i = t.legendItem || {};
              for (let t of ["group", "label", "line", "symbol"])
                i[t] && (i[t] = i[t].destroy());
              e && f(e), (t.legendItem = void 0);
            }
            destroy() {
              for (let t of this.getAllItems()) this.destroyItem(t);
              for (let t of [
                "clipRect",
                "up",
                "down",
                "pager",
                "nav",
                "box",
                "title",
                "group",
              ])
                this[t] && (this[t] = this[t].destroy());
              this.display = null;
            }
            positionCheckboxes() {
              let t;
              let e = this.group && this.group.alignAttr,
                i = this.clipHeight || this.legendHeight,
                s = this.titleHeight;
              e &&
                ((t = e.translateY),
                this.allItems.forEach(function (o) {
                  let r;
                  let n = o.checkbox;
                  n &&
                    ((r = t + s + n.y + (this.scrollOffset || 0) + 3),
                    u(n, {
                      left: e.translateX + o.checkboxOffset + n.x - 20 + "px",
                      top: r + "px",
                      display:
                        this.proximate || (r > t - 6 && r < t + i - 6)
                          ? ""
                          : "none",
                    }));
                }, this));
            }
            renderTitle() {
              let t = this.options,
                e = this.padding,
                i = t.title,
                s,
                o = 0;
              i.text &&
                (this.title ||
                  ((this.title = this.chart.renderer
                    .label(
                      i.text,
                      e - 3,
                      e - 4,
                      void 0,
                      void 0,
                      void 0,
                      t.useHTML,
                      void 0,
                      "legend-title"
                    )
                    .attr({ zIndex: 1 })),
                  this.chart.styledMode || this.title.css(i.style),
                  this.title.add(this.group)),
                i.width ||
                  this.title.css({ width: this.maxLegendWidth + "px" }),
                (o = (s = this.title.getBBox()).height),
                (this.offsetWidth = s.width),
                this.contentGroup.attr({ translateY: o })),
                (this.titleHeight = o);
            }
            setText(t) {
              let e = this.options;
              t.legendItem.label.attr({
                text: e.labelFormat
                  ? h(e.labelFormat, t, this.chart)
                  : e.labelFormatter.call(t),
              });
            }
            renderItem(t) {
              let e = (t.legendItem = t.legendItem || {}),
                i = this.chart,
                s = i.renderer,
                o = this.options,
                r = "horizontal" === o.layout,
                n = this.symbolWidth,
                a = o.symbolPadding || 0,
                h = this.itemStyle,
                l = this.itemHiddenStyle,
                d = r ? v(o.itemDistance, 20) : 0,
                c = !o.rtl,
                p = !t.series,
                u = !p && t.series.drawLegendSymbol ? t.series : t,
                g = u.options,
                f = !!this.createCheckboxForItem && g && g.showCheckbox,
                m = o.useHTML,
                x = t.options.className,
                y = e.label,
                k = n + a + d + (f ? 20 : 0);
              !y &&
                ((e.group = s
                  .g("legend-item")
                  .addClass(
                    "highcharts-" +
                      u.type +
                      "-series highcharts-color-" +
                      t.colorIndex +
                      (x ? " " + x : "") +
                      (p ? " highcharts-series-" + t.index : "")
                  )
                  .attr({ zIndex: 1 })
                  .add(this.scrollGroup)),
                (e.label = y =
                  s.text("", c ? n + a : -a, this.baseline || 0, m)),
                i.styledMode || y.css(b(t.visible ? h : l)),
                y.attr({ align: c ? "left" : "right", zIndex: 2 }).add(e.group),
                !this.baseline &&
                  ((this.fontMetrics = s.fontMetrics(y)),
                  (this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop),
                  y.attr("y", this.baseline),
                  (this.symbolHeight = v(o.symbolHeight, this.fontMetrics.f)),
                  o.squareSymbol &&
                    ((this.symbolWidth = v(
                      o.symbolWidth,
                      Math.max(this.symbolHeight, 16)
                    )),
                    (k = this.symbolWidth + a + d + (f ? 20 : 0)),
                    c && y.attr("x", this.symbolWidth + a))),
                u.drawLegendSymbol(this, t),
                this.setItemEvents && this.setItemEvents(t, y, m)),
                f &&
                  !t.checkbox &&
                  this.createCheckboxForItem &&
                  this.createCheckboxForItem(t),
                this.colorizeItem(t, t.visible),
                (i.styledMode || !h.width) &&
                  y.css({
                    width:
                      (o.itemWidth || this.widthOption || i.spacingBox.width) -
                      k +
                      "px",
                  }),
                this.setText(t);
              let S = y.getBBox(),
                M = (this.fontMetrics && this.fontMetrics.h) || 0;
              (t.itemWidth = t.checkboxOffset =
                o.itemWidth || e.labelWidth || S.width + k),
                (this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth)),
                (this.totalItemWidth += t.itemWidth),
                (this.itemHeight = t.itemHeight =
                  Math.round(
                    e.labelHeight || (S.height > 1.5 * M ? S.height : M)
                  ));
            }
            layoutItem(t) {
              let e = this.options,
                i = this.padding,
                s = "horizontal" === e.layout,
                o = t.itemHeight,
                r = this.itemMarginBottom,
                n = this.itemMarginTop,
                a = s ? v(e.itemDistance, 20) : 0,
                h = this.maxLegendWidth,
                l =
                  e.alignColumns && this.totalItemWidth > h
                    ? this.maxItemWidth
                    : t.itemWidth,
                d = t.legendItem || {};
              s &&
                this.itemX - i + l > h &&
                ((this.itemX = i),
                this.lastLineHeight &&
                  (this.itemY += n + this.lastLineHeight + r),
                (this.lastLineHeight = 0)),
                (this.lastItemY = n + this.itemY + r),
                (this.lastLineHeight = Math.max(o, this.lastLineHeight)),
                (d.x = this.itemX),
                (d.y = this.itemY),
                s
                  ? (this.itemX += l)
                  : ((this.itemY += n + o + r), (this.lastLineHeight = o)),
                (this.offsetWidth =
                  this.widthOption ||
                  Math.max(
                    (s ? this.itemX - i - (t.checkbox ? 0 : a) : l) + i,
                    this.offsetWidth
                  ));
            }
            getAllItems() {
              let t = [];
              return (
                this.chart.series.forEach(function (e) {
                  let i = e && e.options;
                  e &&
                    v(i.showInLegend, !g(i.linkedTo) && void 0, !0) &&
                    (t = t.concat(
                      (e.legendItem || {}).labels ||
                        ("point" === i.legendType ? e.data : e)
                    ));
                }),
                x(this, "afterGetAllItems", { allItems: t }),
                t
              );
            }
            getAlignment() {
              let t = this.options;
              return this.proximate
                ? t.align.charAt(0) + "tv"
                : t.floating
                ? ""
                : t.align.charAt(0) +
                  t.verticalAlign.charAt(0) +
                  t.layout.charAt(0);
            }
            adjustMargins(t, e) {
              let i = this.chart,
                s = this.options,
                o = this.getAlignment();
              o &&
                [
                  /(lth|ct|rth)/,
                  /(rtv|rm|rbv)/,
                  /(rbh|cb|lbh)/,
                  /(lbv|lm|ltv)/,
                ].forEach(function (r, n) {
                  r.test(o) &&
                    !g(t[n]) &&
                    (i[l[n]] = Math.max(
                      i[l[n]],
                      i.legend[(n + 1) % 2 ? "legendHeight" : "legendWidth"] +
                        [1, -1, -1, 1][n] * s[n % 2 ? "x" : "y"] +
                        v(s.margin, 12) +
                        e[n] +
                        (i.titleOffset[n] || 0)
                    ));
                });
            }
            proximatePositions() {
              let t;
              let e = this.chart,
                i = [],
                s = "left" === this.options.align;
              for (let o of (this.allItems.forEach(function (t) {
                let o,
                  r,
                  n = s,
                  a,
                  h;
                t.yAxis &&
                  (t.xAxis.options.reversed && (n = !n),
                  t.points &&
                    (o = m(
                      n ? t.points : t.points.slice(0).reverse(),
                      function (t) {
                        return y(t.plotY);
                      }
                    )),
                  (r =
                    this.itemMarginTop +
                    t.legendItem.label.getBBox().height +
                    this.itemMarginBottom),
                  (h = t.yAxis.top - e.plotTop),
                  (a = t.visible
                    ? (o ? o.plotY : t.yAxis.height) + (h - 0.3 * r)
                    : h + t.yAxis.height),
                  i.push({ target: a, size: r, item: t }));
              }, this),
              d(i, e.plotHeight)))
                (t = o.item.legendItem || {}),
                  y(o.pos) && (t.y = e.plotTop - e.spacing[0] + o.pos);
            }
            render() {
              let t = this.chart,
                e = t.renderer,
                i = this.options,
                s = this.padding,
                o = this.getAllItems(),
                r,
                n,
                a,
                h = this.group,
                l,
                d = this.box;
              (this.itemX = s),
                (this.itemY = this.initialItemY),
                (this.offsetWidth = 0),
                (this.lastItemY = 0),
                (this.widthOption = k(i.width, t.spacingBox.width - s)),
                (l = t.spacingBox.width - 2 * s - i.x),
                ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) >
                  -1 && (l /= 2),
                (this.maxLegendWidth = this.widthOption || l),
                h ||
                  ((this.group = h =
                    e
                      .g("legend")
                      .addClass(i.className || "")
                      .attr({ zIndex: 7 })
                      .add()),
                  (this.contentGroup = e.g().attr({ zIndex: 1 }).add(h)),
                  (this.scrollGroup = e.g().add(this.contentGroup))),
                this.renderTitle(),
                S(
                  o,
                  (t, e) =>
                    ((t.options && t.options.legendIndex) || 0) -
                    ((e.options && e.options.legendIndex) || 0)
                ),
                i.reversed && o.reverse(),
                (this.allItems = o),
                (this.display = r = !!o.length),
                (this.lastLineHeight = 0),
                (this.maxItemWidth = 0),
                (this.totalItemWidth = 0),
                (this.itemHeight = 0),
                o.forEach(this.renderItem, this),
                o.forEach(this.layoutItem, this),
                (n = (this.widthOption || this.offsetWidth) + s),
                (a = this.lastItemY + this.lastLineHeight + this.titleHeight),
                (a = this.handleOverflow(a) + s),
                d ||
                  (this.box = d =
                    e
                      .rect()
                      .addClass("highcharts-legend-box")
                      .attr({ r: i.borderRadius })
                      .add(h)),
                t.styledMode ||
                  d
                    .attr({
                      stroke: i.borderColor,
                      "stroke-width": i.borderWidth || 0,
                      fill: i.backgroundColor || "none",
                    })
                    .shadow(i.shadow),
                n > 0 &&
                  a > 0 &&
                  d[d.placed ? "animate" : "attr"](
                    d.crisp.call(
                      {},
                      { x: 0, y: 0, width: n, height: a },
                      d.strokeWidth()
                    )
                  ),
                h[r ? "show" : "hide"](),
                t.styledMode && "none" === h.getStyle("display") && (n = a = 0),
                (this.legendWidth = n),
                (this.legendHeight = a),
                r && this.align(),
                this.proximate || this.positionItems(),
                x(this, "afterRender");
            }
            align(t = this.chart.spacingBox) {
              let e = this.chart,
                i = this.options,
                s = t.y;
              /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0
                ? (s += e.titleOffset[0])
                : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                  e.titleOffset[2] > 0 &&
                  (s -= e.titleOffset[2]),
                s !== t.y && (t = b(t, { y: s })),
                e.hasRendered || (this.group.placed = !1),
                this.group.align(
                  b(i, {
                    width: this.legendWidth,
                    height: this.legendHeight,
                    verticalAlign: this.proximate ? "top" : i.verticalAlign,
                  }),
                  !0,
                  t
                );
            }
            handleOverflow(t) {
              let e = this,
                i = this.chart,
                s = i.renderer,
                o = this.options,
                r = o.y,
                n = "top" === o.verticalAlign,
                a = this.padding,
                h = o.maxHeight,
                l = o.navigation,
                d = v(l.animation, !0),
                c = l.arrowSize || 12,
                p = this.pages,
                u = this.allItems,
                g = function (t) {
                  "number" == typeof t
                    ? S.attr({ height: t })
                    : S && ((e.clipRect = S.destroy()), e.contentGroup.clip()),
                    e.contentGroup.div &&
                      (e.contentGroup.div.style.clip = t
                        ? "rect(" + a + "px,9999px," + (a + t) + "px,0)"
                        : "auto");
                },
                f = function (t) {
                  return (
                    (e[t] = s
                      .circle(0, 0, 1.3 * c)
                      .translate(c / 2, c / 2)
                      .add(k)),
                    i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)"),
                    e[t]
                  );
                },
                m,
                x,
                y,
                b = i.spacingBox.height + (n ? -r : r) - a,
                k = this.nav,
                S = this.clipRect;
              return (
                "horizontal" !== o.layout ||
                  "middle" === o.verticalAlign ||
                  o.floating ||
                  (b /= 2),
                h && (b = Math.min(b, h)),
                (p.length = 0),
                t && b > 0 && t > b && !1 !== l.enabled
                  ? ((this.clipHeight = m =
                      Math.max(b - 20 - this.titleHeight - a, 0)),
                    (this.currentPage = v(this.currentPage, 1)),
                    (this.fullHeight = t),
                    u.forEach((t, e) => {
                      y = t.legendItem || {};
                      let i = y.y || 0,
                        s = Math.round(y.label.getBBox().height),
                        o = p.length;
                      (!o || (i - p[o - 1] > m && (x || i) !== p[o - 1])) &&
                        (p.push(x || i), o++),
                        (y.pageIx = o - 1),
                        x && ((u[e - 1].legendItem || {}).pageIx = o - 1),
                        e === u.length - 1 &&
                          i + s - p[o - 1] > m &&
                          i > p[o - 1] &&
                          (p.push(i), (y.pageIx = o)),
                        i !== x && (x = i);
                    }),
                    S ||
                      ((S = e.clipRect = s.clipRect(0, a - 2, 9999, 0)),
                      e.contentGroup.clip(S)),
                    g(m),
                    k ||
                      ((this.nav = k =
                        s.g().attr({ zIndex: 1 }).add(this.group)),
                      (this.up = s.symbol("triangle", 0, 0, c, c).add(k)),
                      f("upTracker").on("click", function () {
                        e.scroll(-1, d);
                      }),
                      (this.pager = s
                        .text("", 15, 10)
                        .addClass("highcharts-legend-navigation")),
                      !i.styledMode && l.style && this.pager.css(l.style),
                      this.pager.add(k),
                      (this.down = s
                        .symbol("triangle-down", 0, 0, c, c)
                        .add(k)),
                      f("downTracker").on("click", function () {
                        e.scroll(1, d);
                      })),
                    e.scroll(0),
                    (t = b))
                  : k &&
                    (g(),
                    (this.nav = k.destroy()),
                    this.scrollGroup.attr({ translateY: 1 }),
                    (this.clipHeight = 0)),
                t
              );
            }
            scroll(t, e) {
              let i = this.chart,
                s = this.pages,
                o = s.length,
                r = this.clipHeight,
                h = this.options.navigation,
                l = this.pager,
                d = this.padding,
                c = this.currentPage + t;
              if ((c > o && (c = o), c > 0)) {
                void 0 !== e && a(e, i),
                  this.nav.attr({
                    translateX: d,
                    translateY: r + this.padding + 7 + this.titleHeight,
                    visibility: "inherit",
                  }),
                  [this.up, this.upTracker].forEach(function (t) {
                    t.attr({
                      class:
                        1 === c
                          ? "highcharts-legend-nav-inactive"
                          : "highcharts-legend-nav-active",
                    });
                  }),
                  l.attr({ text: c + "/" + o }),
                  [this.down, this.downTracker].forEach(function (t) {
                    t.attr({
                      x: 18 + this.pager.getBBox().width,
                      class:
                        c === o
                          ? "highcharts-legend-nav-inactive"
                          : "highcharts-legend-nav-active",
                    });
                  }, this),
                  i.styledMode ||
                    (this.up.attr({
                      fill: 1 === c ? h.inactiveColor : h.activeColor,
                    }),
                    this.upTracker.css({
                      cursor: 1 === c ? "default" : "pointer",
                    }),
                    this.down.attr({
                      fill: c === o ? h.inactiveColor : h.activeColor,
                    }),
                    this.downTracker.css({
                      cursor: c === o ? "default" : "pointer",
                    })),
                  (this.scrollOffset = -s[c - 1] + this.initialItemY),
                  this.scrollGroup.animate({ translateY: this.scrollOffset }),
                  (this.currentPage = c),
                  this.positionCheckboxes();
                let t = n(v(e, i.renderer.globalAnimation, !0));
                M(() => {
                  x(this, "afterScroll", { currentPage: c });
                }, t.duration);
              }
            }
            setItemEvents(t, e, i) {
              let o = this,
                r = t.legendItem || {},
                n = o.chart.renderer.boxWrapper,
                a = t instanceof s,
                h = "highcharts-legend-" + (a ? "point" : "series") + "-active",
                l = o.chart.styledMode,
                d = i ? [e, r.symbol] : [r.group],
                c = (e) => {
                  o.allItems.forEach((i) => {
                    t !== i &&
                      [i].concat(i.linkedSeries || []).forEach((t) => {
                        t.setState(e, !a);
                      });
                  });
                };
              for (let i of d)
                i &&
                  i
                    .on("mouseover", function () {
                      t.visible && c("inactive"),
                        t.setState("hover"),
                        t.visible && n.addClass(h),
                        l || e.css(o.options.itemHoverStyle);
                    })
                    .on("mouseout", function () {
                      o.chart.styledMode ||
                        e.css(b(t.visible ? o.itemStyle : o.itemHiddenStyle)),
                        c(""),
                        n.removeClass(h),
                        t.setState();
                    })
                    .on("click", function (e) {
                      let i = "legendItemClick",
                        s = function () {
                          t.setVisible && t.setVisible(),
                            c(t.visible ? "inactive" : "");
                        };
                      n.removeClass(h),
                        (e = { browserEvent: e }),
                        t.firePointEvent
                          ? t.firePointEvent(i, e, s)
                          : x(t, i, e, s);
                    });
            }
            createCheckboxForItem(t) {
              (t.checkbox = p(
                "input",
                {
                  type: "checkbox",
                  className: "highcharts-legend-checkbox",
                  checked: t.selected,
                  defaultChecked: t.selected,
                },
                this.options.itemCheckboxStyle,
                this.chart.container
              )),
                c(t.checkbox, "click", function (e) {
                  let i = e.target;
                  x(
                    t.series || t,
                    "checkboxClick",
                    { checked: i.checked, item: t },
                    function () {
                      t.select();
                    }
                  );
                });
            }
          }
          return (
            (function (t) {
              let e = [];
              t.compose = function (i) {
                r.pushUnique(e, i) &&
                  c(i, "beforeMargins", function () {
                    this.legend = new t(this, this.options.legend);
                  });
              };
            })(C || (C = {})),
            C
          );
        }
      ),
      i(
        e,
        "Core/Legend/LegendSymbol.js",
        [e["Core/Utilities.js"]],
        function (t) {
          var e, i;
          let { extend: s, merge: o, pick: r } = t;
          return (
            ((i = e || (e = {})).lineMarker = function (t, e) {
              let i = (this.legendItem = this.legendItem || {}),
                n = this.options,
                a = t.symbolWidth,
                h = t.symbolHeight,
                l = this.symbol || "circle",
                d = h / 2,
                c = this.chart.renderer,
                p = i.group,
                u = t.baseline - Math.round(0.3 * t.fontMetrics.b),
                g = {},
                f,
                m = n.marker,
                x = 0;
              if (
                (this.chart.styledMode ||
                  ((g = { "stroke-width": Math.min(n.lineWidth || 0, 24) }),
                  n.dashStyle
                    ? (g.dashstyle = n.dashStyle)
                    : "square" === n.linecap ||
                      (g["stroke-linecap"] = "round")),
                (i.line = c.path().addClass("highcharts-graph").attr(g).add(p)),
                g["stroke-linecap"] &&
                  (x = Math.min(i.line.strokeWidth(), a) / 2),
                a &&
                  i.line.attr({
                    d: [
                      ["M", x, u],
                      ["L", a - x, u],
                    ],
                  }),
                m && !1 !== m.enabled && a)
              ) {
                let t = Math.min(r(m.radius, d), d);
                0 === l.indexOf("url") &&
                  ((m = o(m, { width: h, height: h })), (t = 0)),
                  (i.symbol = f =
                    c
                      .symbol(
                        l,
                        a / 2 - t,
                        u - t,
                        2 * t,
                        2 * t,
                        s({ context: "legend" }, m)
                      )
                      .addClass("highcharts-point")
                      .add(p)),
                  (f.isMarker = !0);
              }
            }),
            (i.rectangle = function (t, e) {
              let i = e.legendItem || {},
                s = t.options,
                o = t.symbolHeight,
                n = s.squareSymbol,
                a = n ? o : t.symbolWidth;
              i.symbol = this.chart.renderer
                .rect(
                  n ? (t.symbolWidth - o) / 2 : 0,
                  t.baseline - o + 1,
                  a,
                  o,
                  r(t.options.symbolRadius, o / 2)
                )
                .addClass("highcharts-point")
                .attr({ zIndex: 3 })
                .add(i.group);
            }),
            e
          );
        }
      ),
      i(e, "Core/Series/SeriesDefaults.js", [], function () {
        return {
          lineWidth: 2,
          allowPointSelect: !1,
          crisp: !0,
          showCheckbox: !1,
          animation: { duration: 1e3 },
          enableMouseTracking: !0,
          events: {},
          marker: {
            enabledThreshold: 2,
            lineColor: "#ffffff",
            lineWidth: 0,
            radius: 4,
            states: {
              normal: { animation: !0 },
              hover: {
                animation: { duration: 150 },
                enabled: !0,
                radiusPlus: 2,
                lineWidthPlus: 1,
              },
              select: {
                fillColor: "#cccccc",
                lineColor: "#000000",
                lineWidth: 2,
              },
            },
          },
          point: { events: {} },
          dataLabels: {
            animation: {},
            align: "center",
            borderWidth: 0,
            defer: !0,
            formatter: function () {
              let { numberFormatter: t } = this.series.chart;
              return "number" != typeof this.y ? "" : t(this.y, -1);
            },
            padding: 5,
            style: {
              fontSize: "0.7em",
              fontWeight: "bold",
              color: "contrast",
              textOutline: "1px contrast",
            },
            verticalAlign: "bottom",
            x: 0,
            y: 0,
          },
          cropThreshold: 300,
          opacity: 1,
          pointRange: 0,
          softThreshold: !0,
          states: {
            normal: { animation: !0 },
            hover: {
              animation: { duration: 150 },
              lineWidthPlus: 1,
              marker: {},
              halo: { size: 10, opacity: 0.25 },
            },
            select: { animation: { duration: 0 } },
            inactive: { animation: { duration: 150 }, opacity: 0.2 },
          },
          stickyTracking: !0,
          turboThreshold: 1e3,
          findNearestPointBy: "x",
        };
      }),
      i(
        e,
        "Core/Series/SeriesRegistry.js",
        [
          e["Core/Globals.js"],
          e["Core/Defaults.js"],
          e["Core/Series/Point.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s) {
          var o;
          let { defaultOptions: r } = e,
            { extendClass: n, merge: a } = s;
          return (
            (function (e) {
              function s(t, s) {
                let o = r.plotOptions || {},
                  n = s.defaultOptions,
                  a = s.prototype;
                (a.type = t),
                  a.pointClass || (a.pointClass = i),
                  n && (o[t] = n),
                  (e.seriesTypes[t] = s);
              }
              (e.seriesTypes = t.seriesTypes),
                (e.registerSeriesType = s),
                (e.seriesType = function (t, o, h, l, d) {
                  let c = r.plotOptions || {};
                  return (
                    (o = o || ""),
                    (c[t] = a(c[o], h)),
                    s(t, n(e.seriesTypes[o] || function () {}, l)),
                    (e.seriesTypes[t].prototype.type = t),
                    d && (e.seriesTypes[t].prototype.pointClass = n(i, d)),
                    e.seriesTypes[t]
                  );
                });
            })(o || (o = {})),
            o
          );
        }
      ),
      i(
        e,
        "Core/Series/Series.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Defaults.js"],
          e["Core/Foundation.js"],
          e["Core/Globals.js"],
          e["Core/Legend/LegendSymbol.js"],
          e["Core/Series/Point.js"],
          e["Core/Series/SeriesDefaults.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Renderer/SVG/SVGElement.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o, r, n, a, h, l) {
          let { animObject: d, setAnimation: c } = t,
            { defaultOptions: p } = e,
            { registerEventOptions: u } = i,
            { hasTouch: g, svg: f, win: m } = s,
            { seriesTypes: x } = a,
            {
              addEvent: y,
              arrayMax: b,
              arrayMin: v,
              clamp: k,
              correctFloat: S,
              defined: M,
              diffObjects: C,
              erase: w,
              error: T,
              extend: A,
              find: P,
              fireEvent: L,
              getClosestDistance: O,
              getNestedProperty: D,
              insertItem: E,
              isArray: I,
              isNumber: B,
              isString: j,
              merge: R,
              objectEach: z,
              pick: N,
              removeEvent: W,
              splat: H,
              syncTimeout: G,
            } = l;
          class X {
            constructor() {
              (this._i = void 0),
                (this.chart = void 0),
                (this.data = void 0),
                (this.eventOptions = void 0),
                (this.eventsToUnbind = void 0),
                (this.index = void 0),
                (this.linkedSeries = void 0),
                (this.options = void 0),
                (this.points = void 0),
                (this.processedXData = void 0),
                (this.processedYData = void 0),
                (this.tooltipOptions = void 0),
                (this.userOptions = void 0),
                (this.xAxis = void 0),
                (this.yAxis = void 0),
                (this.zones = void 0);
            }
            init(t, e) {
              let i;
              L(this, "init", { options: e });
              let s = this,
                o = t.series;
              (this.eventsToUnbind = []),
                (s.chart = t),
                (s.options = s.setOptions(e));
              let r = s.options,
                n = !1 !== r.visible;
              (s.linkedSeries = []),
                s.bindAxes(),
                A(s, {
                  name: r.name,
                  state: "",
                  visible: n,
                  selected: !0 === r.selected,
                }),
                u(this, r);
              let a = r.events;
              ((a && a.click) ||
                (r.point && r.point.events && r.point.events.click) ||
                r.allowPointSelect) &&
                (t.runTrackerClick = !0),
                s.getColor(),
                s.getSymbol(),
                s.parallelArrays.forEach(function (t) {
                  s[t + "Data"] || (s[t + "Data"] = []);
                }),
                s.isCartesian && (t.hasCartesianSeries = !0),
                o.length && (i = o[o.length - 1]),
                (s._i = N(i && i._i, -1) + 1),
                (s.opacity = s.options.opacity),
                t.orderItems("series", E(this, o)),
                r.dataSorting && r.dataSorting.enabled
                  ? s.setDataSortingOptions()
                  : s.points || s.data || s.setData(r.data, !1),
                L(this, "afterInit");
            }
            is(t) {
              return x[t] && this instanceof x[t];
            }
            bindAxes() {
              let t;
              let e = this,
                i = e.options,
                s = e.chart;
              L(this, "bindAxes", null, function () {
                (e.axisTypes || []).forEach(function (o) {
                  s[o].forEach(function (s) {
                    (t = s.options),
                      (N(i[o], 0) === s.index ||
                        (void 0 !== i[o] && i[o] === t.id)) &&
                        (E(e, s.series), (e[o] = s), (s.isDirty = !0));
                  }),
                    e[o] || e.optionalAxis === o || T(18, !0, s);
                });
              }),
                L(this, "afterBindAxes");
            }
            updateParallelArrays(t, e, i) {
              let s = t.series,
                o = B(e)
                  ? function (i) {
                      let o = "y" === i && s.toYData ? s.toYData(t) : t[i];
                      s[i + "Data"][e] = o;
                    }
                  : function (t) {
                      Array.prototype[e].apply(s[t + "Data"], i);
                    };
              s.parallelArrays.forEach(o);
            }
            hasData() {
              return (
                (this.visible &&
                  void 0 !== this.dataMax &&
                  void 0 !== this.dataMin) ||
                (this.visible && this.yData && this.yData.length > 0)
              );
            }
            hasMarkerChanged(t, e) {
              let i = t.marker,
                s = e.marker || {};
              return (
                i &&
                ((s.enabled && !i.enabled) ||
                  s.symbol !== i.symbol ||
                  s.height !== i.height ||
                  s.width !== i.width)
              );
            }
            autoIncrement(t) {
              let e = this.options,
                i = e.pointIntervalUnit,
                s = e.relativeXValue,
                o = this.chart.time,
                r = this.xIncrement,
                n,
                a;
              return ((r = N(r, e.pointStart, 0)),
              (this.pointInterval = a =
                N(this.pointInterval, e.pointInterval, 1)),
              s && B(t) && (a *= t),
              i &&
                ((n = new o.Date(r)),
                "day" === i
                  ? o.set("Date", n, o.get("Date", n) + a)
                  : "month" === i
                  ? o.set("Month", n, o.get("Month", n) + a)
                  : "year" === i &&
                    o.set("FullYear", n, o.get("FullYear", n) + a),
                (a = n.getTime() - r)),
              s && B(t))
                ? r + a
                : ((this.xIncrement = r + a), r);
            }
            setDataSortingOptions() {
              let t = this.options;
              A(this, {
                requireSorting: !1,
                sorted: !1,
                enabledDataSorting: !0,
                allowDG: !1,
              }),
                M(t.pointRange) || (t.pointRange = 1);
            }
            setOptions(t) {
              let e;
              let i = this.chart,
                s = i.options,
                o = s.plotOptions,
                r = i.userOptions || {},
                n = R(t),
                a = i.styledMode,
                h = { plotOptions: o, userOptions: n };
              L(this, "setOptions", h);
              let l = h.plotOptions[this.type],
                d = r.plotOptions || {},
                c = d.series || {},
                u = p.plotOptions[this.type] || {},
                g = d[this.type] || {};
              this.userOptions = h.userOptions;
              let f = R(l, o.series, g, n);
              (this.tooltipOptions = R(
                p.tooltip,
                p.plotOptions.series?.tooltip,
                u?.tooltip,
                i.userOptions.tooltip,
                d.series?.tooltip,
                g.tooltip,
                n.tooltip
              )),
                (this.stickyTracking = N(
                  n.stickyTracking,
                  g.stickyTracking,
                  c.stickyTracking,
                  (!!this.tooltipOptions.shared && !this.noSharedTooltip) ||
                    f.stickyTracking
                )),
                null === l.marker && delete f.marker,
                (this.zoneAxis = f.zoneAxis);
              let m = (this.zones = (f.zones || []).slice());
              return (
                (f.negativeColor || f.negativeFillColor) &&
                  !f.zones &&
                  ((e = {
                    value: f[this.zoneAxis + "Threshold"] || f.threshold || 0,
                    className: "highcharts-negative",
                  }),
                  a ||
                    ((e.color = f.negativeColor),
                    (e.fillColor = f.negativeFillColor)),
                  m.push(e)),
                m.length &&
                  M(m[m.length - 1].value) &&
                  m.push(
                    a ? {} : { color: this.color, fillColor: this.fillColor }
                  ),
                L(this, "afterSetOptions", { options: f }),
                f
              );
            }
            getName() {
              return N(this.options.name, "Series " + (this.index + 1));
            }
            getCyclic(t, e, i) {
              let s, o;
              let r = this.chart,
                n = `${t}Index`,
                a = `${t}Counter`,
                h = i?.length || r.options.chart.colorCount;
              !e &&
                (M(
                  (o = N(
                    "color" === t ? this.options.colorIndex : void 0,
                    this[n]
                  ))
                )
                  ? (s = o)
                  : (r.series.length || (r[a] = 0),
                    (s = r[a] % h),
                    (r[a] += 1)),
                i && (e = i[s])),
                void 0 !== s && (this[n] = s),
                (this[t] = e);
            }
            getColor() {
              this.chart.styledMode
                ? this.getCyclic("color")
                : this.options.colorByPoint
                ? (this.color = "#cccccc")
                : this.getCyclic(
                    "color",
                    this.options.color || p.plotOptions[this.type].color,
                    this.chart.options.colors
                  );
            }
            getPointsCollection() {
              return (this.hasGroupedData ? this.points : this.data) || [];
            }
            getSymbol() {
              let t = this.options.marker;
              this.getCyclic("symbol", t.symbol, this.chart.options.symbols);
            }
            findPointIndex(t, e) {
              let i, s, o;
              let n = t.id,
                a = t.x,
                h = this.points,
                l = this.options.dataSorting;
              if (n) {
                let t = this.chart.get(n);
                t instanceof r && (i = t);
              } else if (
                this.linkedParent ||
                this.enabledDataSorting ||
                this.options.relativeXValue
              ) {
                let e = (e) => !e.touched && e.index === t.index;
                if (
                  (l && l.matchByName
                    ? (e = (e) => !e.touched && e.name === t.name)
                    : this.options.relativeXValue &&
                      (e = (e) => !e.touched && e.options.x === t.x),
                  !(i = P(h, e)))
                )
                  return;
              }
              return (
                i && void 0 !== (o = i && i.index) && (s = !0),
                void 0 === o && B(a) && (o = this.xData.indexOf(a, e)),
                -1 !== o &&
                  void 0 !== o &&
                  this.cropped &&
                  (o = o >= this.cropStart ? o - this.cropStart : o),
                !s && B(o) && h[o] && h[o].touched && (o = void 0),
                o
              );
            }
            updateData(t, e) {
              let i = this.options,
                s = i.dataSorting,
                o = this.points,
                r = [],
                n = this.requireSorting,
                a = t.length === o.length,
                h,
                l,
                d,
                c,
                p = !0;
              if (
                ((this.xIncrement = null),
                t.forEach(function (t, e) {
                  let l;
                  let d =
                      (M(t) &&
                        this.pointClass.prototype.optionsToObject.call(
                          { series: this },
                          t
                        )) ||
                      {},
                    p = d.x,
                    u = d.id;
                  u || B(p)
                    ? (-1 === (l = this.findPointIndex(d, c)) || void 0 === l
                        ? r.push(t)
                        : o[l] && t !== i.data[l]
                        ? (o[l].update(t, !1, null, !1),
                          (o[l].touched = !0),
                          n && (c = l + 1))
                        : o[l] && (o[l].touched = !0),
                      (!a ||
                        e !== l ||
                        (s && s.enabled) ||
                        this.hasDerivedData) &&
                        (h = !0))
                    : r.push(t);
                }, this),
                h)
              )
                for (l = o.length; l--; )
                  (d = o[l]) && !d.touched && d.remove && d.remove(!1, e);
              else
                !a || (s && s.enabled)
                  ? (p = !1)
                  : (t.forEach(function (t, e) {
                      t === o[e].y ||
                        o[e].destroyed ||
                        o[e].update(t, !1, null, !1);
                    }),
                    (r.length = 0));
              return (
                o.forEach(function (t) {
                  t && (t.touched = !1);
                }),
                !!p &&
                  (r.forEach(function (t) {
                    this.addPoint(t, !1, null, null, !1);
                  }, this),
                  null === this.xIncrement &&
                    this.xData &&
                    this.xData.length &&
                    ((this.xIncrement = b(this.xData)), this.autoIncrement()),
                  !0)
              );
            }
            setData(t, e = !0, i, s) {
              let o = this,
                r = o.points,
                n = (r && r.length) || 0,
                a = o.options,
                h = o.chart,
                l = a.dataSorting,
                d = o.xAxis,
                c = a.turboThreshold,
                p = this.xData,
                u = this.yData,
                g = o.pointArrayMap,
                f = g && g.length,
                m = a.keys,
                x,
                y,
                b,
                v = 0,
                k = 1,
                S = null,
                M;
              h.options.chart.allowMutatingData ||
                (a.data && delete o.options.data,
                o.userOptions.data && delete o.userOptions.data,
                (M = R(!0, t))),
                (t = M || t || []);
              let C = t.length;
              if (
                (l && l.enabled && (t = this.sortData(t)),
                h.options.chart.allowMutatingData &&
                  !1 !== s &&
                  C &&
                  n &&
                  !o.cropped &&
                  !o.hasGroupedData &&
                  o.visible &&
                  !o.boosted &&
                  (b = this.updateData(t, i)),
                !b)
              ) {
                if (
                  ((o.xIncrement = null),
                  (o.colorCounter = 0),
                  this.parallelArrays.forEach(function (t) {
                    o[t + "Data"].length = 0;
                  }),
                  c && C > c)
                ) {
                  if (B((S = o.getFirstValidPoint(t))))
                    for (x = 0; x < C; x++)
                      (p[x] = this.autoIncrement()), (u[x] = t[x]);
                  else if (I(S)) {
                    if (f) {
                      if (S.length === f)
                        for (x = 0; x < C; x++)
                          (p[x] = this.autoIncrement()), (u[x] = t[x]);
                      else
                        for (x = 0; x < C; x++)
                          (y = t[x]), (p[x] = y[0]), (u[x] = y.slice(1, f + 1));
                    } else if (
                      (m &&
                        ((v = m.indexOf("x")),
                        (k = m.indexOf("y")),
                        (v = v >= 0 ? v : 0),
                        (k = k >= 0 ? k : 1)),
                      1 === S.length && (k = 0),
                      v === k)
                    )
                      for (x = 0; x < C; x++)
                        (p[x] = this.autoIncrement()), (u[x] = t[x][k]);
                    else
                      for (x = 0; x < C; x++)
                        (y = t[x]), (p[x] = y[v]), (u[x] = y[k]);
                  } else T(12, !1, h);
                } else
                  for (x = 0; x < C; x++)
                    (y = { series: o }),
                      o.pointClass.prototype.applyOptions.apply(y, [t[x]]),
                      o.updateParallelArrays(y, x);
                for (
                  u && j(u[0]) && T(14, !0, h),
                    o.data = [],
                    o.options.data = o.userOptions.data = t,
                    x = n;
                  x--;

                )
                  r[x]?.destroy();
                d && (d.minRange = d.userMinRange),
                  (o.isDirty = h.isDirtyBox = !0),
                  (o.isDirtyData = !!r),
                  (i = !1);
              }
              "point" === a.legendType &&
                (this.processData(), this.generatePoints()),
                e && h.redraw(i);
            }
            sortData(t) {
              let e = this,
                i = e.options,
                s = i.dataSorting,
                o = s.sortKey || "y",
                r = function (t, e) {
                  return (
                    (M(e) &&
                      t.pointClass.prototype.optionsToObject.call(
                        { series: t },
                        e
                      )) ||
                    {}
                  );
                };
              t.forEach(function (i, s) {
                (t[s] = r(e, i)), (t[s].index = s);
              }, this);
              let n = t.concat().sort((t, e) => {
                let i = D(o, t),
                  s = D(o, e);
                return s < i ? -1 : s > i ? 1 : 0;
              });
              return (
                n.forEach(function (t, e) {
                  t.x = e;
                }, this),
                e.linkedSeries &&
                  e.linkedSeries.forEach(function (e) {
                    let i = e.options,
                      s = i.data;
                    (i.dataSorting && i.dataSorting.enabled) ||
                      !s ||
                      (s.forEach(function (i, o) {
                        (s[o] = r(e, i)),
                          t[o] && ((s[o].x = t[o].x), (s[o].index = o));
                      }),
                      e.setData(s, !1));
                  }),
                t
              );
            }
            getProcessedData(t) {
              let e = this,
                i = e.xAxis,
                s = e.options,
                o = s.cropThreshold,
                r = t || e.getExtremesFromAll || s.getExtremesFromAll,
                n = i?.logarithmic,
                a = e.isCartesian,
                h,
                l,
                d = 0,
                c,
                p,
                u,
                g = e.xData,
                f = e.yData,
                m = !1,
                x = g.length;
              i &&
                ((p = (c = i.getExtremes()).min),
                (u = c.max),
                (m = !!(i.categories && !i.names.length))),
                a &&
                  e.sorted &&
                  !r &&
                  (!o || x > o || e.forceCrop) &&
                  (g[x - 1] < p || g[0] > u
                    ? ((g = []), (f = []))
                    : e.yData &&
                      (g[0] < p || g[x - 1] > u) &&
                      ((g = (h = this.cropData(e.xData, e.yData, p, u)).xData),
                      (f = h.yData),
                      (d = h.start),
                      (l = !0)));
              let y = O(
                [n ? g.map(n.log2lin) : g],
                () => e.requireSorting && !m && T(15, !1, e.chart)
              );
              return {
                xData: g,
                yData: f,
                cropped: l,
                cropStart: d,
                closestPointRange: y,
              };
            }
            processData(t) {
              let e = this.xAxis;
              if (
                this.isCartesian &&
                !this.isDirty &&
                !e.isDirty &&
                !this.yAxis.isDirty &&
                !t
              )
                return !1;
              let i = this.getProcessedData();
              (this.cropped = i.cropped),
                (this.cropStart = i.cropStart),
                (this.processedXData = i.xData),
                (this.processedYData = i.yData),
                (this.closestPointRange = this.basePointRange =
                  i.closestPointRange),
                L(this, "afterProcessData");
            }
            cropData(t, e, i, s) {
              let o = t.length,
                r,
                n,
                a = 0,
                h = o;
              for (r = 0; r < o; r++)
                if (t[r] >= i) {
                  a = Math.max(0, r - 1);
                  break;
                }
              for (n = r; n < o; n++)
                if (t[n] > s) {
                  h = n + 1;
                  break;
                }
              return {
                xData: t.slice(a, h),
                yData: e.slice(a, h),
                start: a,
                end: h,
              };
            }
            generatePoints() {
              let t = this.options,
                e = this.processedData || t.data,
                i = this.processedXData,
                s = this.processedYData,
                o = this.pointClass,
                r = i.length,
                n = this.cropStart || 0,
                a = this.hasGroupedData,
                h = t.keys,
                l = [],
                d = t.dataGrouping && t.dataGrouping.groupAll ? n : 0,
                c,
                p,
                u,
                g,
                f = this.data;
              if (!f && !a) {
                let t = [];
                (t.length = e.length), (f = this.data = t);
              }
              for (h && a && (this.options.keys = !1), g = 0; g < r; g++)
                (p = n + g),
                  a
                    ? (((u = new o().init(
                        this,
                        [i[g]].concat(H(s[g]))
                      )).dataGroup = this.groupMap[d + g]),
                      u.dataGroup.options &&
                        ((u.options = u.dataGroup.options),
                        A(u, u.dataGroup.options),
                        delete u.dataLabels))
                    : (u = f[p]) ||
                      void 0 === e[p] ||
                      (f[p] = u = new o().init(this, e[p], i[g])),
                  u && ((u.index = a ? d + g : p), (l[g] = u));
              if (((this.options.keys = h), f && (r !== (c = f.length) || a)))
                for (g = 0; g < c; g++)
                  g !== n || a || (g += r),
                    f[g] && (f[g].destroyElements(), (f[g].plotX = void 0));
              (this.data = f),
                (this.points = l),
                L(this, "afterGeneratePoints");
            }
            getXExtremes(t) {
              return { min: v(t), max: b(t) };
            }
            getExtremes(t, e) {
              let i = this.xAxis,
                s = this.yAxis,
                o = this.processedXData || this.xData,
                r = [],
                n = this.requireSorting && !this.is("column") ? 1 : 0,
                a = !!s && s.positiveValuesOnly,
                h,
                l,
                d,
                c,
                p,
                u,
                g,
                f = 0,
                m = 0,
                x = 0;
              t = t || this.stackedYData || this.processedYData || [];
              let y = t.length;
              for (
                i && ((f = (h = i.getExtremes()).min), (m = h.max)), u = 0;
                u < y;
                u++
              )
                if (
                  ((c = o[u]),
                  (l =
                    (B((p = t[u])) || I(p)) &&
                    ((B(p) ? p > 0 : p.length) || !a)),
                  (d =
                    e ||
                    this.getExtremesFromAll ||
                    this.options.getExtremesFromAll ||
                    this.cropped ||
                    !i ||
                    ((o[u + n] || c) >= f && (o[u - n] || c) <= m)),
                  l && d)
                ) {
                  if ((g = p.length)) for (; g--; ) B(p[g]) && (r[x++] = p[g]);
                  else r[x++] = p;
                }
              let k = { activeYData: r, dataMin: v(r), dataMax: b(r) };
              return L(this, "afterGetExtremes", { dataExtremes: k }), k;
            }
            applyExtremes() {
              let t = this.getExtremes();
              return (this.dataMin = t.dataMin), (this.dataMax = t.dataMax), t;
            }
            getFirstValidPoint(t) {
              let e = t.length,
                i = 0,
                s = null;
              for (; null === s && i < e; ) (s = t[i]), i++;
              return s;
            }
            translate() {
              this.processedXData || this.processData(), this.generatePoints();
              let t = this.options,
                e = t.stacking,
                i = this.xAxis,
                s = i.categories,
                o = this.enabledDataSorting,
                r = this.yAxis,
                n = this.points,
                a = n.length,
                h = this.pointPlacementToXValue(),
                l = !!h,
                d = t.threshold,
                c = t.startFromThreshold ? d : 0,
                p,
                u,
                g,
                f,
                m = Number.MAX_VALUE;
              function x(t) {
                return k(t, -1e5, 1e5);
              }
              for (p = 0; p < a; p++) {
                let t;
                let a = n[p],
                  y = a.x,
                  b,
                  v,
                  k = a.y,
                  C = a.low,
                  w =
                    e &&
                    r.stacking?.stacks[
                      (this.negStacks && k < (c ? 0 : d) ? "-" : "") +
                        this.stackKey
                    ];
                (u = i.translate(y, !1, !1, !1, !0, h)),
                  (a.plotX = B(u) ? S(x(u)) : void 0),
                  e &&
                    this.visible &&
                    w &&
                    w[y] &&
                    ((f = this.getStackIndicator(f, y, this.index)),
                    !a.isNull && f.key && (v = (b = w[y]).points[f.key]),
                    b &&
                      I(v) &&
                      ((C = v[0]),
                      (k = v[1]),
                      C === c &&
                        f.key === w[y].base &&
                        (C = N(B(d) ? d : r.min)),
                      r.positiveValuesOnly && M(C) && C <= 0 && (C = void 0),
                      (a.total = a.stackTotal = N(b.total)),
                      (a.percentage =
                        M(a.y) && b.total ? (a.y / b.total) * 100 : void 0),
                      (a.stackY = k),
                      this.irregularWidths ||
                        b.setOffset(
                          this.pointXOffset || 0,
                          this.barW || 0,
                          void 0,
                          void 0,
                          void 0,
                          this.xAxis
                        ))),
                  (a.yBottom = M(C)
                    ? x(r.translate(C, !1, !0, !1, !0))
                    : void 0),
                  this.dataModify && (k = this.dataModify.modifyValue(k, p)),
                  B(k) &&
                    void 0 !== a.plotX &&
                    (t = B((t = r.translate(k, !1, !0, !1, !0)))
                      ? x(t)
                      : void 0),
                  (a.plotY = t),
                  (a.isInside = this.isPointInside(a)),
                  (a.clientX = l ? S(i.translate(y, !1, !1, !1, !0, h)) : u),
                  (a.negative = (a.y || 0) < (d || 0)),
                  (a.category = N(s && s[a.x], a.x)),
                  a.isNull ||
                    !1 === a.visible ||
                    (void 0 !== g && (m = Math.min(m, Math.abs(u - g))),
                    (g = u)),
                  (a.zone = this.zones.length ? a.getZone() : void 0),
                  !a.graphic && this.group && o && (a.isNew = !0);
              }
              (this.closestPointRangePx = m), L(this, "afterTranslate");
            }
            getValidPoints(t, e, i) {
              let s = this.chart;
              return (t || this.points || []).filter(function (t) {
                let { plotX: o, plotY: r } = t,
                  n = !i && (t.isNull || !B(r));
                return (
                  !n &&
                  (!e || !!s.isInsidePlot(o, r, { inverted: s.inverted })) &&
                  !1 !== t.visible
                );
              });
            }
            getClipBox() {
              let { chart: t, xAxis: e, yAxis: i } = this,
                s = R(t.clipBox);
              return (
                e && e.len !== t.plotSizeX && (s.width = e.len),
                i && i.len !== t.plotSizeY && (s.height = i.len),
                s
              );
            }
            getSharedClipKey() {
              return (
                (this.sharedClipKey =
                  (this.options.xAxis || 0) + "," + (this.options.yAxis || 0)),
                this.sharedClipKey
              );
            }
            setClip() {
              let { chart: t, group: e, markerGroup: i } = this,
                s = t.sharedClips,
                o = t.renderer,
                r = this.getClipBox(),
                n = this.getSharedClipKey(),
                a = s[n];
              a ? a.animate(r) : (s[n] = a = o.clipRect(r)),
                e && e.clip(!1 === this.options.clip ? void 0 : a),
                i && i.clip();
            }
            animate(t) {
              let { chart: e, group: i, markerGroup: s } = this,
                o = e.inverted,
                r = d(this.options.animation),
                n = [
                  this.getSharedClipKey(),
                  r.duration,
                  r.easing,
                  r.defer,
                ].join(","),
                a = e.sharedClips[n],
                h = e.sharedClips[n + "m"];
              if (t && i) {
                let t = this.getClipBox();
                if (a) a.attr("height", t.height);
                else {
                  (t.width = 0),
                    o && (t.x = e.plotHeight),
                    (a = e.renderer.clipRect(t)),
                    (e.sharedClips[n] = a);
                  let i = {
                    x: -99,
                    y: -99,
                    width: o ? e.plotWidth + 199 : 99,
                    height: o ? 99 : e.plotHeight + 199,
                  };
                  (h = e.renderer.clipRect(i)), (e.sharedClips[n + "m"] = h);
                }
                i.clip(a), s && s.clip(h);
              } else if (a && !a.hasClass("highcharts-animating")) {
                let t = this.getClipBox(),
                  e = r.step;
                s &&
                  s.element.childNodes.length &&
                  (r.step = function (t, i) {
                    e && e.apply(i, arguments),
                      "width" === i.prop &&
                        h &&
                        h.element &&
                        h.attr(o ? "height" : "width", t + 99);
                  }),
                  a.addClass("highcharts-animating").animate(t, r);
              }
            }
            afterAnimate() {
              this.setClip(),
                z(this.chart.sharedClips, (t, e, i) => {
                  t &&
                    !this.chart.container.querySelector(
                      `[clip-path="url(#${t.id})"]`
                    ) &&
                    (t.destroy(), delete i[e]);
                }),
                (this.finishedAnimating = !0),
                L(this, "afterAnimate");
            }
            drawPoints(t = this.points) {
              let e, i, s, o, r, n, a;
              let h = this.chart,
                l = h.styledMode,
                { colorAxis: d, options: c } = this,
                p = c.marker,
                u = this[this.specialGroup || "markerGroup"],
                g = this.xAxis,
                f = N(
                  p.enabled,
                  !g || !!g.isRadial || null,
                  this.closestPointRangePx >= p.enabledThreshold * p.radius
                );
              if (!1 !== p.enabled || this._hasPointMarkers)
                for (e = 0; e < t.length; e++) {
                  (o = (s = (i = t[e]).graphic) ? "animate" : "attr"),
                    (r = i.marker || {}),
                    (n = !!i.marker);
                  let c =
                    ((f && void 0 === r.enabled) || r.enabled) &&
                    !i.isNull &&
                    !1 !== i.visible;
                  if (c) {
                    let t = N(r.symbol, this.symbol, "rect");
                    (a = this.markerAttribs(i, i.selected && "select")),
                      this.enabledDataSorting &&
                        (i.startXPos = g.reversed ? -(a.width || 0) : g.width);
                    let e = !1 !== i.isInside;
                    if (
                      (!s &&
                        e &&
                        ((a.width || 0) > 0 || i.hasImage) &&
                        ((i.graphic = s =
                          h.renderer
                            .symbol(t, a.x, a.y, a.width, a.height, n ? r : p)
                            .add(u)),
                        this.enabledDataSorting &&
                          h.hasRendered &&
                          (s.attr({ x: i.startXPos }), (o = "animate"))),
                      s &&
                        "animate" === o &&
                        s[e ? "show" : "hide"](e).animate(a),
                      s)
                    ) {
                      let t = this.pointAttribs(
                        i,
                        l || !i.selected ? void 0 : "select"
                      );
                      l ? d && s.css({ fill: t.fill }) : s[o](t);
                    }
                    s && s.addClass(i.getClassName(), !0);
                  } else s && (i.graphic = s.destroy());
                }
            }
            markerAttribs(t, e) {
              let i = this.options,
                s = i.marker,
                o = t.marker || {},
                r = o.symbol || s.symbol,
                n = {},
                a,
                h,
                l = N(o.radius, s && s.radius);
              e &&
                ((a = s.states[e]),
                (l = N(
                  (h = o.states && o.states[e]) && h.radius,
                  a && a.radius,
                  l && l + ((a && a.radiusPlus) || 0)
                ))),
                (t.hasImage = r && 0 === r.indexOf("url")),
                t.hasImage && (l = 0);
              let d = t.pos();
              return (
                B(l) &&
                  d &&
                  ((n.x = d[0] - l),
                  (n.y = d[1] - l),
                  i.crisp && (n.x = Math.floor(n.x))),
                l && (n.width = n.height = 2 * l),
                n
              );
            }
            pointAttribs(t, e) {
              let i = this.options.marker,
                s = t && t.options,
                o = (s && s.marker) || {},
                r = s && s.color,
                n = t && t.color,
                a = t && t.zone && t.zone.color,
                h,
                l,
                d = this.color,
                c,
                p,
                u = N(o.lineWidth, i.lineWidth),
                g = 1;
              return (
                (d = r || a || n || d),
                (c = o.fillColor || i.fillColor || d),
                (p = o.lineColor || i.lineColor || d),
                (e = e || "normal"),
                (h = i.states[e] || {}),
                (u = N(
                  (l = (o.states && o.states[e]) || {}).lineWidth,
                  h.lineWidth,
                  u + N(l.lineWidthPlus, h.lineWidthPlus, 0)
                )),
                (c = l.fillColor || h.fillColor || c),
                {
                  stroke: (p = l.lineColor || h.lineColor || p),
                  "stroke-width": u,
                  fill: c,
                  opacity: (g = N(l.opacity, h.opacity, g)),
                }
              );
            }
            destroy(t) {
              let e, i, s;
              let o = this,
                r = o.chart,
                n = /AppleWebKit\/533/.test(m.navigator.userAgent),
                a = o.data || [];
              for (
                L(o, "destroy", { keepEventsForUpdate: t }),
                  this.removeEvents(t),
                  (o.axisTypes || []).forEach(function (t) {
                    (s = o[t]) &&
                      s.series &&
                      (w(s.series, o), (s.isDirty = s.forceRedraw = !0));
                  }),
                  o.legendItem && o.chart.legend.destroyItem(o),
                  e = a.length;
                e--;

              )
                (i = a[e]) && i.destroy && i.destroy();
              o.clips && o.clips.forEach((t) => t.destroy()),
                l.clearTimeout(o.animationTimeout),
                z(o, function (t, e) {
                  t instanceof h &&
                    !t.survive &&
                    t[n && "group" === e ? "hide" : "destroy"]();
                }),
                r.hoverSeries === o && (r.hoverSeries = void 0),
                w(r.series, o),
                r.orderItems("series"),
                z(o, function (e, i) {
                  (t && "hcEvents" === i) || delete o[i];
                });
            }
            applyZones() {
              let t = this,
                e = this.chart,
                i = e.renderer,
                s = this.zones,
                o = this.clips || [],
                r = this.graph,
                n = this.area,
                a = Math.max(e.plotWidth, e.plotHeight),
                h = this[(this.zoneAxis || "y") + "Axis"],
                l = e.inverted,
                d,
                c,
                p,
                u,
                g,
                f,
                m,
                x,
                y,
                b,
                v,
                S = !1;
              s.length && (r || n) && h && void 0 !== h.min
                ? ((g = h.reversed),
                  (f = h.horiz),
                  r && !this.showLine && r.hide(),
                  n && n.hide(),
                  (u = h.getExtremes()),
                  s.forEach(function (s, M) {
                    (d = g
                      ? f
                        ? e.plotWidth
                        : 0
                      : f
                      ? 0
                      : h.toPixels(u.min) || 0),
                      (d = k(N(c, d), 0, a)),
                      (c = k(
                        Math.round(h.toPixels(N(s.value, u.max), !0) || 0),
                        0,
                        a
                      )),
                      S && (d = c = h.toPixels(u.max)),
                      (m = Math.abs(d - c)),
                      (x = Math.min(d, c)),
                      (y = Math.max(d, c)),
                      h.isXAxis
                        ? ((p = { x: l ? y : x, y: 0, width: m, height: a }),
                          f || (p.x = e.plotHeight - p.x))
                        : ((p = { x: 0, y: l ? y : x, width: a, height: m }),
                          f && (p.y = e.plotWidth - p.y)),
                      o[M] ? o[M].animate(p) : (o[M] = i.clipRect(p)),
                      (b = t["zone-area-" + M]),
                      (v = t["zone-graph-" + M]),
                      r && v && v.clip(o[M]),
                      n && b && b.clip(o[M]),
                      (S = s.value > u.max),
                      t.resetZones && 0 === c && (c = void 0);
                  }),
                  (this.clips = o))
                : t.visible && (r && r.show(), n && n.show());
            }
            plotGroup(t, e, i, s, o) {
              let r = this[t],
                n = !r,
                a = { visibility: i, zIndex: s || 0.1 };
              return (
                void 0 === this.opacity ||
                  this.chart.styledMode ||
                  "inactive" === this.state ||
                  (a.opacity = this.opacity),
                n && (this[t] = r = this.chart.renderer.g().add(o)),
                r.addClass(
                  "highcharts-" +
                    e +
                    " highcharts-series-" +
                    this.index +
                    " highcharts-" +
                    this.type +
                    "-series " +
                    (M(this.colorIndex)
                      ? "highcharts-color-" + this.colorIndex + " "
                      : "") +
                    (this.options.className || "") +
                    (r.hasClass("highcharts-tracker")
                      ? " highcharts-tracker"
                      : ""),
                  !0
                ),
                r.attr(a)[n ? "attr" : "animate"](this.getPlotBox(e)),
                r
              );
            }
            getPlotBox(t) {
              let e = this.xAxis,
                i = this.yAxis,
                s = this.chart,
                o =
                  s.inverted &&
                  !s.polar &&
                  e &&
                  !1 !== this.invertible &&
                  "series" === t;
              return (
                s.inverted && ((e = i), (i = this.xAxis)),
                {
                  translateX: e ? e.left : s.plotLeft,
                  translateY: i ? i.top : s.plotTop,
                  rotation: o ? 90 : 0,
                  rotationOriginX: o ? (e.len - i.len) / 2 : 0,
                  rotationOriginY: o ? (e.len + i.len) / 2 : 0,
                  scaleX: o ? -1 : 1,
                  scaleY: 1,
                }
              );
            }
            removeEvents(t) {
              t || W(this),
                this.eventsToUnbind.length &&
                  (this.eventsToUnbind.forEach(function (t) {
                    t();
                  }),
                  (this.eventsToUnbind.length = 0));
            }
            render() {
              let t = this,
                e = t.chart,
                i = t.options,
                s = d(i.animation),
                o = t.visible ? "inherit" : "hidden",
                r = i.zIndex,
                n = t.hasRendered,
                a = e.seriesGroup;
              e.inverted;
              let h = t.finishedAnimating ? 0 : s.duration;
              L(this, "render"),
                t.plotGroup("group", "series", o, r, a),
                (t.markerGroup = t.plotGroup(
                  "markerGroup",
                  "markers",
                  o,
                  r,
                  a
                )),
                !1 !== i.clip && t.setClip(),
                t.animate && h && t.animate(!0),
                t.drawGraph && (t.drawGraph(), t.applyZones()),
                t.visible && t.drawPoints(),
                t.drawDataLabels && t.drawDataLabels(),
                t.redrawPoints && t.redrawPoints(),
                t.drawTracker && i.enableMouseTracking && t.drawTracker(),
                t.animate && h && t.animate(),
                n ||
                  (h && s.defer && (h += s.defer),
                  (t.animationTimeout = G(function () {
                    t.afterAnimate();
                  }, h || 0))),
                (t.isDirty = !1),
                (t.hasRendered = !0),
                L(t, "afterRender");
            }
            redraw() {
              let t = this.isDirty || this.isDirtyData;
              this.translate(), this.render(), t && delete this.kdTree;
            }
            reserveSpace() {
              return (
                this.visible || !this.chart.options.chart.ignoreHiddenSeries
              );
            }
            searchPoint(t, e) {
              let i = this.xAxis,
                s = this.yAxis,
                o = this.chart.inverted;
              return this.searchKDTree(
                {
                  clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                  plotY: o ? s.len - t.chartX + s.pos : t.chartY - s.pos,
                },
                e,
                t
              );
            }
            buildKDTree(t) {
              this.buildingKdTree = !0;
              let e = this,
                i = e.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
              delete e.kdTree,
                G(
                  function () {
                    (e.kdTree = (function t(i, s, o) {
                      let r, n;
                      let a = i && i.length;
                      if (a)
                        return (
                          (r = e.kdAxisArray[s % o]),
                          i.sort(function (t, e) {
                            return t[r] - e[r];
                          }),
                          {
                            point: i[(n = Math.floor(a / 2))],
                            left: t(i.slice(0, n), s + 1, o),
                            right: t(i.slice(n + 1), s + 1, o),
                          }
                        );
                    })(e.getValidPoints(null, !e.directTouch), i, i)),
                      (e.buildingKdTree = !1);
                  },
                  e.options.kdNow || (t && "touchstart" === t.type) ? 0 : 1
                );
            }
            searchKDTree(t, e, i) {
              let s = this,
                [o, r] = this.kdAxisArray,
                n = e ? "distX" : "dist",
                a =
                  (s.options.findNearestPointBy || "").indexOf("y") > -1
                    ? 2
                    : 1,
                h = !!s.isBubble;
              if (
                (this.kdTree || this.buildingKdTree || this.buildKDTree(i),
                this.kdTree)
              )
                return (function t(e, i, a, l) {
                  let d = i.point,
                    c = s.kdAxisArray[a % l],
                    p,
                    u,
                    g = d;
                  !(function (t, e) {
                    let i = t[o],
                      s = e[o],
                      n = M(i) && M(s) ? i - s : null,
                      a = t[r],
                      l = e[r],
                      d = M(a) && M(l) ? a - l : 0,
                      c = (h && e.marker?.radius) || 0;
                    (e.dist = Math.sqrt(((n && n * n) || 0) + d * d) - c),
                      (e.distX = M(n) ? Math.abs(n) - c : Number.MAX_VALUE);
                  })(e, d);
                  let f =
                      (e[c] || 0) -
                      (d[c] || 0) +
                      ((h && d.marker?.radius) || 0),
                    m = f < 0 ? "left" : "right",
                    x = f < 0 ? "right" : "left";
                  return (
                    i[m] && (g = (p = t(e, i[m], a + 1, l))[n] < g[n] ? p : d),
                    i[x] &&
                      Math.sqrt(f * f) < g[n] &&
                      (g = (u = t(e, i[x], a + 1, l))[n] < g[n] ? u : g),
                    g
                  );
                })(t, this.kdTree, a, a);
            }
            pointPlacementToXValue() {
              let {
                  options: { pointPlacement: t, pointRange: e },
                  xAxis: i,
                } = this,
                s = t;
              return (
                "between" === s && (s = i.reversed ? -0.5 : 0.5),
                B(s) ? s * (e || i.pointRange) : 0
              );
            }
            isPointInside(t) {
              let { chart: e, xAxis: i, yAxis: s } = this,
                o =
                  void 0 !== t.plotY &&
                  void 0 !== t.plotX &&
                  t.plotY >= 0 &&
                  t.plotY <= (s ? s.len : e.plotHeight) &&
                  t.plotX >= 0 &&
                  t.plotX <= (i ? i.len : e.plotWidth);
              return o;
            }
            drawTracker() {
              let t = this,
                e = t.options,
                i = e.trackByArea,
                s = [].concat(i ? t.areaPath : t.graphPath),
                o = t.chart,
                r = o.pointer,
                n = o.renderer,
                a = o.options.tooltip.snap,
                h = t.tracker,
                l = function (i) {
                  e.enableMouseTracking &&
                    o.hoverSeries !== t &&
                    t.onMouseOver();
                },
                d = "rgba(192,192,192," + (f ? 1e-4 : 0.002) + ")";
              h
                ? h.attr({ d: s })
                : t.graph &&
                  ((t.tracker = n
                    .path(s)
                    .attr({
                      visibility: t.visible ? "inherit" : "hidden",
                      zIndex: 2,
                    })
                    .addClass(
                      i ? "highcharts-tracker-area" : "highcharts-tracker-line"
                    )
                    .add(t.group)),
                  o.styledMode ||
                    t.tracker.attr({
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      stroke: d,
                      fill: i ? d : "none",
                      "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a),
                    }),
                  [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach(
                    function (t) {
                      t &&
                        (t
                          .addClass("highcharts-tracker")
                          .on("mouseover", l)
                          .on("mouseout", function (t) {
                            r.onTrackerMouseOut(t);
                          }),
                        e.cursor &&
                          !o.styledMode &&
                          t.css({ cursor: e.cursor }),
                        g && t.on("touchstart", l));
                    }
                  )),
                L(this, "afterDrawTracker");
            }
            addPoint(t, e, i, s, o) {
              let r, n;
              let a = this.options,
                h = this.data,
                l = this.chart,
                d = this.xAxis,
                c = d && d.hasNames && d.names,
                p = a.data,
                u = this.xData;
              e = N(e, !0);
              let g = { series: this };
              this.pointClass.prototype.applyOptions.apply(g, [t]);
              let f = g.x;
              if (((n = u.length), this.requireSorting && f < u[n - 1]))
                for (r = !0; n && u[n - 1] > f; ) n--;
              this.updateParallelArrays(g, "splice", [n, 0, 0]),
                this.updateParallelArrays(g, n),
                c && g.name && (c[f] = g.name),
                p.splice(n, 0, t),
                (r || this.processedData) &&
                  (this.data.splice(n, 0, null), this.processData()),
                "point" === a.legendType && this.generatePoints(),
                i &&
                  (h[0] && h[0].remove
                    ? h[0].remove(!1)
                    : (h.shift(),
                      this.updateParallelArrays(g, "shift"),
                      p.shift())),
                !1 !== o && L(this, "addPoint", { point: g }),
                (this.isDirty = !0),
                (this.isDirtyData = !0),
                e && l.redraw(s);
            }
            removePoint(t, e, i) {
              let s = this,
                o = s.data,
                r = o[t],
                n = s.points,
                a = s.chart,
                h = function () {
                  n && n.length === o.length && n.splice(t, 1),
                    o.splice(t, 1),
                    s.options.data.splice(t, 1),
                    s.updateParallelArrays(r || { series: s }, "splice", [
                      t,
                      1,
                    ]),
                    r && r.destroy(),
                    (s.isDirty = !0),
                    (s.isDirtyData = !0),
                    e && a.redraw();
                };
              c(i, a),
                (e = N(e, !0)),
                r ? r.firePointEvent("remove", null, h) : h();
            }
            remove(t, e, i, s) {
              let o = this,
                r = o.chart;
              function n() {
                o.destroy(s),
                  (r.isDirtyLegend = r.isDirtyBox = !0),
                  r.linkSeries(s),
                  N(t, !0) && r.redraw(e);
              }
              !1 !== i ? L(o, "remove", null, n) : n();
            }
            update(t, e) {
              L(this, "update", { options: (t = C(t, this.userOptions)) });
              let i = this,
                s = i.chart,
                o = i.userOptions,
                r = i.initialType || i.type,
                n = s.options.plotOptions,
                a = x[r].prototype,
                h = i.finishedAnimating && { animation: !1 },
                l = {},
                d,
                c,
                p = [
                  "colorIndex",
                  "eventOptions",
                  "navigatorSeries",
                  "symbolIndex",
                  "baseSeries",
                ],
                u = t.type || o.type || s.options.chart.type,
                g = !(
                  this.hasDerivedData ||
                  (u && u !== this.type) ||
                  void 0 !== t.pointStart ||
                  void 0 !== t.pointInterval ||
                  void 0 !== t.relativeXValue ||
                  t.joinBy ||
                  t.mapData ||
                  [
                    "dataGrouping",
                    "pointStart",
                    "pointInterval",
                    "pointIntervalUnit",
                    "keys",
                  ].some((t) => i.hasOptionChanged(t))
                );
              (u = u || r),
                g &&
                  (p.push(
                    "data",
                    "isDirtyData",
                    "isDirtyCanvas",
                    "points",
                    "processedData",
                    "processedXData",
                    "processedYData",
                    "xIncrement",
                    "cropped",
                    "_hasPointMarkers",
                    "hasDataLabels",
                    "clips",
                    "nodes",
                    "layout",
                    "level",
                    "mapMap",
                    "mapData",
                    "minY",
                    "maxY",
                    "minX",
                    "maxX"
                  ),
                  !1 !== t.visible && p.push("area", "graph"),
                  i.parallelArrays.forEach(function (t) {
                    p.push(t + "Data");
                  }),
                  t.data &&
                    (t.dataSorting && A(i.options.dataSorting, t.dataSorting),
                    this.setData(t.data, !1))),
                (t = R(
                  o,
                  h,
                  {
                    index: void 0 === o.index ? i.index : o.index,
                    pointStart: N(
                      n?.series?.pointStart,
                      o.pointStart,
                      i.xData[0]
                    ),
                  },
                  !g && { data: i.options.data },
                  t
                )),
                g && t.data && (t.data = i.options.data),
                (p = [
                  "group",
                  "markerGroup",
                  "dataLabelsGroup",
                  "transformGroup",
                ].concat(p)).forEach(function (t) {
                  (p[t] = i[t]), delete i[t];
                });
              let f = !1;
              if (x[u]) {
                if (((f = u !== i.type), i.remove(!1, !1, !1, !0), f)) {
                  if (Object.setPrototypeOf)
                    Object.setPrototypeOf(i, x[u].prototype);
                  else {
                    let t =
                      Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
                    for (c in a) i[c] = void 0;
                    A(i, x[u].prototype),
                      t ? (i.hcEvents = t) : delete i.hcEvents;
                  }
                }
              } else T(17, !0, s, { missingModuleFor: u });
              if (
                (p.forEach(function (t) {
                  i[t] = p[t];
                }),
                i.init(s, t),
                g && this.points)
              )
                for (let t of (!1 === (d = i.options).visible
                  ? ((l.graphic = 1), (l.dataLabel = 1))
                  : (this.hasMarkerChanged(d, o) && (l.graphic = 1),
                    i.hasDataLabels?.() || (l.dataLabel = 1)),
                this.points))
                  t &&
                    t.series &&
                    (t.resolveColor(),
                    Object.keys(l).length && t.destroyElements(l),
                    !1 === d.showInLegend &&
                      t.legendItem &&
                      s.legend.destroyItem(t));
              (i.initialType = r),
                s.linkSeries(),
                f && i.linkedSeries.length && (i.isDirtyData = !0),
                L(this, "afterUpdate"),
                N(e, !0) && s.redraw(!!g && void 0);
            }
            setName(t) {
              (this.name = this.options.name = this.userOptions.name = t),
                (this.chart.isDirtyLegend = !0);
            }
            hasOptionChanged(t) {
              let e = this.chart,
                i = this.options[t],
                s = e.options.plotOptions,
                o = this.userOptions[t],
                r = N(s?.[this.type]?.[t], s?.series?.[t]);
              return o && !M(r) ? i !== o : i !== N(r, i);
            }
            onMouseOver() {
              let t = this.chart,
                e = t.hoverSeries,
                i = t.pointer;
              i.setHoverChartIndex(),
                e && e !== this && e.onMouseOut(),
                this.options.events.mouseOver && L(this, "mouseOver"),
                this.setState("hover"),
                (t.hoverSeries = this);
            }
            onMouseOut() {
              let t = this.options,
                e = this.chart,
                i = e.tooltip,
                s = e.hoverPoint;
              (e.hoverSeries = null),
                s && s.onMouseOut(),
                this && t.events.mouseOut && L(this, "mouseOut"),
                i &&
                  !this.stickyTracking &&
                  (!i.shared || this.noSharedTooltip) &&
                  i.hide(),
                e.series.forEach(function (t) {
                  t.setState("", !0);
                });
            }
            setState(t, e) {
              let i = this,
                s = i.options,
                o = i.graph,
                r = s.inactiveOtherPoints,
                n = s.states,
                a = N(
                  n[t || "normal"] && n[t || "normal"].animation,
                  i.chart.options.chart.animation
                ),
                h,
                l = s.lineWidth,
                d = 0,
                c = s.opacity;
              if (
                ((t = t || ""),
                i.state !== t &&
                  ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(
                    function (e) {
                      e &&
                        (i.state &&
                          e.removeClass("highcharts-series-" + i.state),
                        t && e.addClass("highcharts-series-" + t));
                    }
                  ),
                  (i.state = t),
                  !i.chart.styledMode))
              ) {
                if (n[t] && !1 === n[t].enabled) return;
                if (
                  (t &&
                    ((l = n[t].lineWidth || l + (n[t].lineWidthPlus || 0)),
                    (c = N(n[t].opacity, c))),
                  o && !o.dashstyle && B(l))
                )
                  for (
                    h = { "stroke-width": l }, o.animate(h, a);
                    i["zone-graph-" + d];

                  )
                    i["zone-graph-" + d].animate(h, a), (d += 1);
                r ||
                  [
                    i.group,
                    i.markerGroup,
                    i.dataLabelsGroup,
                    i.labelBySeries,
                  ].forEach(function (t) {
                    t && t.animate({ opacity: c }, a);
                  });
              }
              e && r && i.points && i.setAllPointsToState(t || void 0);
            }
            setAllPointsToState(t) {
              this.points.forEach(function (e) {
                e.setState && e.setState(t);
              });
            }
            setVisible(t, e) {
              let i = this,
                s = i.chart,
                o = s.options.chart.ignoreHiddenSeries,
                r = i.visible;
              i.visible =
                t =
                i.options.visible =
                i.userOptions.visible =
                  void 0 === t ? !r : t;
              let n = t ? "show" : "hide";
              [
                "group",
                "dataLabelsGroup",
                "markerGroup",
                "tracker",
                "tt",
              ].forEach((t) => {
                i[t]?.[n]();
              }),
                (s.hoverSeries === i || s.hoverPoint?.series === i) &&
                  i.onMouseOut(),
                i.legendItem && s.legend.colorizeItem(i, t),
                (i.isDirty = !0),
                i.options.stacking &&
                  s.series.forEach((t) => {
                    t.options.stacking && t.visible && (t.isDirty = !0);
                  }),
                i.linkedSeries.forEach((e) => {
                  e.setVisible(t, !1);
                }),
                o && (s.isDirtyBox = !0),
                L(i, n),
                !1 !== e && s.redraw();
            }
            show() {
              this.setVisible(!0);
            }
            hide() {
              this.setVisible(!1);
            }
            select(t) {
              (this.selected =
                t =
                this.options.selected =
                  void 0 === t ? !this.selected : t),
                this.checkbox && (this.checkbox.checked = t),
                L(this, t ? "select" : "unselect");
            }
            shouldShowTooltip(t, e, i = {}) {
              return (
                (i.series = this),
                (i.visiblePlotOnly = !0),
                this.chart.isInsidePlot(t, e, i)
              );
            }
            drawLegendSymbol(t, e) {
              o[this.options.legendSymbol || "rectangle"]?.call(this, t, e);
            }
          }
          return (
            (X.defaultOptions = n),
            (X.types = a.seriesTypes),
            (X.registerType = a.registerSeriesType),
            A(X.prototype, {
              axisTypes: ["xAxis", "yAxis"],
              coll: "series",
              colorCounter: 0,
              directTouch: !1,
              isCartesian: !0,
              kdAxisArray: ["clientX", "plotY"],
              parallelArrays: ["x", "y"],
              pointClass: r,
              requireSorting: !0,
              sorted: !0,
            }),
            (a.series = X),
            X
          );
        }
      ),
      i(
        e,
        "Core/Chart/Chart.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Axis/Axis.js"],
          e["Core/Defaults.js"],
          e["Core/Templating.js"],
          e["Core/Foundation.js"],
          e["Core/Globals.js"],
          e["Core/Renderer/RendererRegistry.js"],
          e["Core/Series/Series.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Renderer/SVG/SVGRenderer.js"],
          e["Core/Time.js"],
          e["Core/Utilities.js"],
          e["Core/Renderer/HTML/AST.js"],
        ],
        function (t, e, i, s, o, r, n, a, h, l, d, c, p) {
          let { animate: u, animObject: g, setAnimation: f } = t,
            { defaultOptions: m, defaultTime: x } = i,
            { numberFormat: y } = s,
            { registerEventOptions: b } = o,
            { charts: v, doc: k, marginNames: S, svg: M, win: C } = r,
            { seriesTypes: w } = h,
            {
              addEvent: T,
              attr: A,
              createElement: P,
              css: L,
              defined: O,
              diffObjects: D,
              discardElement: E,
              erase: I,
              error: B,
              extend: j,
              find: R,
              fireEvent: z,
              getStyle: N,
              isArray: W,
              isNumber: H,
              isObject: G,
              isString: X,
              merge: Y,
              objectEach: F,
              pick: U,
              pInt: V,
              relativeLength: q,
              removeEvent: Z,
              splat: $,
              syncTimeout: _,
              uniqueKey: K,
            } = c;
          class J {
            static chart(t, e, i) {
              return new J(t, e, i);
            }
            constructor(t, e, i) {
              (this.axes = void 0),
                (this.axisOffset = void 0),
                (this.bounds = void 0),
                (this.chartHeight = void 0),
                (this.chartWidth = void 0),
                (this.clipBox = void 0),
                (this.colorCounter = void 0),
                (this.container = void 0),
                (this.eventOptions = void 0),
                (this.index = void 0),
                (this.isResizing = void 0),
                (this.labelCollectors = void 0),
                (this.margin = void 0),
                (this.numberFormatter = void 0),
                (this.options = void 0),
                (this.plotBox = void 0),
                (this.plotHeight = void 0),
                (this.plotLeft = void 0),
                (this.plotTop = void 0),
                (this.plotWidth = void 0),
                (this.pointCount = void 0),
                (this.pointer = void 0),
                (this.renderer = void 0),
                (this.renderTo = void 0),
                (this.series = void 0),
                (this.sharedClips = {}),
                (this.spacing = void 0),
                (this.spacingBox = void 0),
                (this.symbolCounter = void 0),
                (this.time = void 0),
                (this.titleOffset = void 0),
                (this.userOptions = void 0),
                (this.xAxis = void 0),
                (this.yAxis = void 0),
                (this.zooming = void 0),
                this.getArgs(t, e, i);
            }
            getArgs(t, e, i) {
              X(t) || t.nodeName
                ? ((this.renderTo = t), this.init(e, i))
                : this.init(t, e);
            }
            setZoomOptions() {
              let t = this.options.chart,
                e = t.zooming;
              this.zooming = {
                ...e,
                type: U(t.zoomType, e.type),
                key: U(t.zoomKey, e.key),
                pinchType: U(t.pinchType, e.pinchType),
                singleTouch: U(t.zoomBySingleTouch, e.singleTouch, !1),
                resetButton: Y(e.resetButton, t.resetZoomButton),
              };
            }
            init(t, e) {
              z(this, "init", { args: arguments }, function () {
                let i = Y(m, t),
                  s = i.chart;
                (this.userOptions = j({}, t)),
                  (this.margin = []),
                  (this.spacing = []),
                  (this.bounds = { h: {}, v: {} }),
                  (this.labelCollectors = []),
                  (this.callback = e),
                  (this.isResizing = 0),
                  (this.options = i),
                  (this.axes = []),
                  (this.series = []),
                  (this.time =
                    t.time && Object.keys(t.time).length
                      ? new d(t.time)
                      : r.time),
                  (this.numberFormatter = s.numberFormatter || y),
                  (this.styledMode = s.styledMode),
                  (this.hasCartesianSeries = s.showAxes),
                  (this.index = v.length),
                  v.push(this),
                  r.chartCount++,
                  b(this, s),
                  (this.xAxis = []),
                  (this.yAxis = []),
                  (this.pointCount =
                    this.colorCounter =
                    this.symbolCounter =
                      0),
                  this.setZoomOptions(),
                  z(this, "afterInit"),
                  this.firstRender();
              });
            }
            initSeries(t) {
              let e = this.options.chart,
                i = t.type || e.type,
                s = w[i];
              s || B(17, !0, this, { missingModuleFor: i });
              let o = new s();
              return "function" == typeof o.init && o.init(this, t), o;
            }
            setSeriesData() {
              this.getSeriesOrderByLinks().forEach(function (t) {
                t.points ||
                  t.data ||
                  !t.enabledDataSorting ||
                  t.setData(t.options.data, !1);
              });
            }
            getSeriesOrderByLinks() {
              return this.series.concat().sort(function (t, e) {
                return t.linkedSeries.length || e.linkedSeries.length
                  ? e.linkedSeries.length - t.linkedSeries.length
                  : 0;
              });
            }
            orderItems(t, e = 0) {
              let i = this[t],
                s = (this.options[t] = $(this.options[t]).slice()),
                o = (this.userOptions[t] = this.userOptions[t]
                  ? $(this.userOptions[t]).slice()
                  : []);
              if ((this.hasRendered && (s.splice(e), o.splice(e)), i))
                for (let t = e, r = i.length; t < r; ++t) {
                  let e = i[t];
                  e &&
                    ((e.index = t),
                    e instanceof a && (e.name = e.getName()),
                    e.options.isInternal ||
                      ((s[t] = e.options), (o[t] = e.userOptions)));
                }
            }
            isInsidePlot(t, e, i = {}) {
              let {
                  inverted: s,
                  plotBox: o,
                  plotLeft: r,
                  plotTop: n,
                  scrollablePlotBox: a,
                } = this,
                h = 0,
                l = 0;
              i.visiblePlotOnly &&
                this.scrollingContainer &&
                ({ scrollLeft: h, scrollTop: l } = this.scrollingContainer);
              let d = i.series,
                c = (i.visiblePlotOnly && a) || o,
                p = i.inverted ? e : t,
                u = i.inverted ? t : e,
                g = { x: p, y: u, isInsidePlot: !0, options: i };
              if (!i.ignoreX) {
                let t = (d && (s && !this.polar ? d.yAxis : d.xAxis)) || {
                    pos: r,
                    len: 1 / 0,
                  },
                  e = i.paneCoordinates ? t.pos + p : r + p;
                (e >= Math.max(h + r, t.pos) &&
                  e <= Math.min(h + r + c.width, t.pos + t.len)) ||
                  (g.isInsidePlot = !1);
              }
              if (!i.ignoreY && g.isInsidePlot) {
                let t = (!s && i.axis && !i.axis.isXAxis && i.axis) ||
                    (d && (s ? d.xAxis : d.yAxis)) || { pos: n, len: 1 / 0 },
                  e = i.paneCoordinates ? t.pos + u : n + u;
                (e >= Math.max(l + n, t.pos) &&
                  e <= Math.min(l + n + c.height, t.pos + t.len)) ||
                  (g.isInsidePlot = !1);
              }
              return z(this, "afterIsInsidePlot", g), g.isInsidePlot;
            }
            redraw(t) {
              z(this, "beforeRedraw");
              let e = this.hasCartesianSeries
                  ? this.axes
                  : this.colorAxis || [],
                i = this.series,
                s = this.pointer,
                o = this.legend,
                r = this.userOptions.legend,
                n = this.renderer,
                a = n.isHidden(),
                h = [],
                l,
                d,
                c,
                p = this.isDirtyBox,
                u = this.isDirtyLegend,
                g;
              for (
                n.rootFontSize = n.boxWrapper.getStyle("font-size"),
                  this.setResponsive && this.setResponsive(!1),
                  f(!!this.hasRendered && t, this),
                  a && this.temporaryDisplay(),
                  this.layOutTitles(!1),
                  c = i.length;
                c--;

              )
                if (
                  ((g = i[c]).options.stacking || g.options.centerInCategory) &&
                  ((d = !0), g.isDirty)
                ) {
                  l = !0;
                  break;
                }
              if (l)
                for (c = i.length; c--; )
                  (g = i[c]).options.stacking && (g.isDirty = !0);
              i.forEach(function (t) {
                t.isDirty &&
                  ("point" === t.options.legendType
                    ? ("function" == typeof t.updateTotals && t.updateTotals(),
                      (u = !0))
                    : r && (r.labelFormatter || r.labelFormat) && (u = !0)),
                  t.isDirtyData && z(t, "updatedData");
              }),
                u &&
                  o &&
                  o.options.enabled &&
                  (o.render(), (this.isDirtyLegend = !1)),
                d && this.getStacks(),
                e.forEach(function (t) {
                  t.updateNames(), t.setScale();
                }),
                this.getMargins(),
                e.forEach(function (t) {
                  t.isDirty && (p = !0);
                }),
                e.forEach(function (t) {
                  let e = t.min + "," + t.max;
                  t.extKey !== e &&
                    ((t.extKey = e),
                    h.push(function () {
                      z(t, "afterSetExtremes", j(t.eventArgs, t.getExtremes())),
                        delete t.eventArgs;
                    })),
                    (p || d) && t.redraw();
                }),
                p && this.drawChartBox(),
                z(this, "predraw"),
                i.forEach(function (t) {
                  (p || t.isDirty) && t.visible && t.redraw(),
                    (t.isDirtyData = !1);
                }),
                s && s.reset(!0),
                n.draw(),
                z(this, "redraw"),
                z(this, "render"),
                a && this.temporaryDisplay(!0),
                h.forEach(function (t) {
                  t.call();
                });
            }
            get(t) {
              let e = this.series;
              function i(e) {
                return e.id === t || (e.options && e.options.id === t);
              }
              let s = R(this.axes, i) || R(this.series, i);
              for (let t = 0; !s && t < e.length; t++)
                s = R(e[t].points || [], i);
              return s;
            }
            getAxes() {
              let t = this.options;
              for (let i of (z(this, "getAxes"), ["xAxis", "yAxis"])) {
                let s = (t[i] = $(t[i] || {}));
                for (let t of s) new e(this, t, i);
              }
              z(this, "afterGetAxes");
            }
            getSelectedPoints() {
              return this.series.reduce(
                (t, e) => (
                  e.getPointsCollection().forEach((e) => {
                    U(e.selectedStaging, e.selected) && t.push(e);
                  }),
                  t
                ),
                []
              );
            }
            getSelectedSeries() {
              return this.series.filter(function (t) {
                return t.selected;
              });
            }
            setTitle(t, e, i) {
              this.applyDescription("title", t),
                this.applyDescription("subtitle", e),
                this.applyDescription("caption", void 0),
                this.layOutTitles(i);
            }
            applyDescription(t, e) {
              let i = this,
                s = (this.options[t] = Y(this.options[t], e)),
                o = this[t];
              o && e && (this[t] = o = o.destroy()),
                s &&
                  !o &&
                  (((o = this.renderer
                    .text(s.text, 0, 0, s.useHTML)
                    .attr({
                      align: s.align,
                      class: "highcharts-" + t,
                      zIndex: s.zIndex || 4,
                    })
                    .add()).update = function (e, s) {
                    i.applyDescription(t, e), i.layOutTitles(s);
                  }),
                  this.styledMode ||
                    o.css(
                      j(
                        "title" === t
                          ? { fontSize: this.options.isStock ? "1em" : "1.2em" }
                          : {},
                        s.style
                      )
                    ),
                  (this[t] = o));
            }
            layOutTitles(t = !0) {
              let e = [0, 0, 0],
                i = this.renderer,
                s = this.spacingBox;
              ["title", "subtitle", "caption"].forEach(function (t) {
                let o = this[t],
                  r = this.options[t],
                  n = r.verticalAlign || "top",
                  a =
                    "title" === t
                      ? "top" === n
                        ? -3
                        : 0
                      : "top" === n
                      ? e[0] + 2
                      : 0;
                if (o) {
                  o.css({
                    width: (r.width || s.width + (r.widthAdjust || 0)) + "px",
                  });
                  let t = i.fontMetrics(o).b,
                    h = Math.round(o.getBBox(r.useHTML).height);
                  o.align(
                    j({ y: "bottom" === n ? t : a + t, height: h }, r),
                    !1,
                    "spacingBox"
                  ),
                    r.floating ||
                      ("top" === n
                        ? (e[0] = Math.ceil(e[0] + h))
                        : "bottom" === n && (e[2] = Math.ceil(e[2] + h)));
                }
              }, this),
                e[0] &&
                  "top" === (this.options.title.verticalAlign || "top") &&
                  (e[0] += this.options.title.margin),
                e[2] &&
                  "bottom" === this.options.caption.verticalAlign &&
                  (e[2] += this.options.caption.margin);
              let o =
                !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
              (this.titleOffset = e),
                z(this, "afterLayOutTitles"),
                !this.isDirtyBox &&
                  o &&
                  ((this.isDirtyBox = this.isDirtyLegend = o),
                  this.hasRendered && t && this.isDirtyBox && this.redraw());
            }
            getContainerBox() {
              return {
                width: N(this.renderTo, "width", !0) || 0,
                height: N(this.renderTo, "height", !0) || 0,
              };
            }
            getChartSize() {
              let t = this.options.chart,
                e = t.width,
                i = t.height,
                s = this.getContainerBox();
              (this.chartWidth = Math.max(0, e || s.width || 600)),
                (this.chartHeight = Math.max(
                  0,
                  q(i, this.chartWidth) || (s.height > 1 ? s.height : 400)
                )),
                (this.containerBox = s);
            }
            temporaryDisplay(t) {
              let e = this.renderTo,
                i;
              if (t)
                for (; e && e.style; )
                  e.hcOrigStyle && (L(e, e.hcOrigStyle), delete e.hcOrigStyle),
                    e.hcOrigDetached &&
                      (k.body.removeChild(e), (e.hcOrigDetached = !1)),
                    (e = e.parentNode);
              else
                for (
                  ;
                  e &&
                  e.style &&
                  (k.body.contains(e) ||
                    e.parentNode ||
                    ((e.hcOrigDetached = !0), k.body.appendChild(e)),
                  ("none" === N(e, "display", !1) || e.hcOricDetached) &&
                    ((e.hcOrigStyle = {
                      display: e.style.display,
                      height: e.style.height,
                      overflow: e.style.overflow,
                    }),
                    (i = { display: "block", overflow: "hidden" }),
                    e !== this.renderTo && (i.height = 0),
                    L(e, i),
                    e.offsetWidth ||
                      e.style.setProperty("display", "block", "important")),
                  (e = e.parentNode) !== k.body);

                );
            }
            setClassName(t) {
              this.container.className = "highcharts-container " + (t || "");
            }
            getContainer() {
              let t = this.options,
                e = t.chart,
                i = "data-highcharts-chart",
                s = K(),
                o,
                r = this.renderTo;
              r || (this.renderTo = r = e.renderTo),
                X(r) && (this.renderTo = r = k.getElementById(r)),
                r || B(13, !0, this);
              let a = V(A(r, i));
              H(a) && v[a] && v[a].hasRendered && v[a].destroy(),
                A(r, i, this.index),
                (r.innerHTML = p.emptyHTML),
                e.skipClone || r.offsetWidth || this.temporaryDisplay(),
                this.getChartSize();
              let h = this.chartWidth,
                d = this.chartHeight;
              L(r, { overflow: "hidden" }),
                this.styledMode ||
                  (o = j(
                    {
                      position: "relative",
                      overflow: "hidden",
                      width: h + "px",
                      height: d + "px",
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                      userSelect: "none",
                      "touch-action": "manipulation",
                      outline: "none",
                    },
                    e.style || {}
                  ));
              let c = P("div", { id: s }, o, r);
              (this.container = c), (this._cursor = c.style.cursor);
              let u = e.renderer || !M ? n.getRendererType(e.renderer) : l;
              if (
                ((this.renderer = new u(
                  c,
                  h,
                  d,
                  void 0,
                  e.forExport,
                  t.exporting && t.exporting.allowHTML,
                  this.styledMode
                )),
                (this.containerBox = this.getContainerBox()),
                f(void 0, this),
                this.setClassName(e.className),
                this.styledMode)
              )
                for (let e in t.defs) this.renderer.definition(t.defs[e]);
              else this.renderer.setStyle(e.style);
              (this.renderer.chartIndex = this.index),
                z(this, "afterGetContainer");
            }
            getMargins(t) {
              let { spacing: e, margin: i, titleOffset: s } = this;
              this.resetMargins(),
                s[0] &&
                  !O(i[0]) &&
                  (this.plotTop = Math.max(this.plotTop, s[0] + e[0])),
                s[2] &&
                  !O(i[2]) &&
                  (this.marginBottom = Math.max(
                    this.marginBottom,
                    s[2] + e[2]
                  )),
                this.legend &&
                  this.legend.display &&
                  this.legend.adjustMargins(i, e),
                z(this, "getMargins"),
                t || this.getAxisMargins();
            }
            getAxisMargins() {
              let t = this,
                e = (t.axisOffset = [0, 0, 0, 0]),
                i = t.colorAxis,
                s = t.margin,
                o = function (t) {
                  t.forEach(function (t) {
                    t.visible && t.getOffset();
                  });
                };
              t.hasCartesianSeries ? o(t.axes) : i && i.length && o(i),
                S.forEach(function (i, o) {
                  O(s[o]) || (t[i] += e[o]);
                }),
                t.setChartSize();
            }
            getOptions() {
              return D(this.userOptions, m);
            }
            reflow(t) {
              let e = this,
                i = e.containerBox,
                s = e.getContainerBox();
              delete e.pointer.chartPosition,
                !e.isPrinting &&
                  !e.isResizing &&
                  i &&
                  s.width &&
                  ((s.width !== i.width || s.height !== i.height) &&
                    (c.clearTimeout(e.reflowTimeout),
                    (e.reflowTimeout = _(
                      function () {
                        e.container && e.setSize(void 0, void 0, !1);
                      },
                      t ? 100 : 0
                    ))),
                  (e.containerBox = s));
            }
            setReflow() {
              let t = this,
                e = (e) => {
                  t.options?.chart.reflow && t.hasLoaded && t.reflow(e);
                };
              if ("function" == typeof ResizeObserver)
                new ResizeObserver(e).observe(t.renderTo);
              else {
                let t = T(C, "resize", e);
                T(this, "destroy", t);
              }
            }
            setSize(t, e, i) {
              let s = this,
                o = s.renderer;
              (s.isResizing += 1), f(i, s);
              let r = o.globalAnimation;
              (s.oldChartHeight = s.chartHeight),
                (s.oldChartWidth = s.chartWidth),
                void 0 !== t && (s.options.chart.width = t),
                void 0 !== e && (s.options.chart.height = e),
                s.getChartSize(),
                s.styledMode ||
                  (r ? u : L)(
                    s.container,
                    {
                      width: s.chartWidth + "px",
                      height: s.chartHeight + "px",
                    },
                    r
                  ),
                s.setChartSize(!0),
                o.setSize(s.chartWidth, s.chartHeight, r),
                s.axes.forEach(function (t) {
                  (t.isDirty = !0), t.setScale();
                }),
                (s.isDirtyLegend = !0),
                (s.isDirtyBox = !0),
                s.layOutTitles(),
                s.getMargins(),
                s.redraw(r),
                (s.oldChartHeight = null),
                z(s, "resize"),
                setTimeout(() => {
                  s &&
                    z(s, "endResize", void 0, () => {
                      s.isResizing -= 1;
                    });
                }, g(r).duration);
            }
            setChartSize(t) {
              let e, i, s, o;
              let r = this.inverted,
                n = this.renderer,
                a = this.chartWidth,
                h = this.chartHeight,
                l = this.options.chart,
                d = this.spacing,
                c = this.clipOffset;
              (this.plotLeft = e = Math.round(this.plotLeft)),
                (this.plotTop = i = Math.round(this.plotTop)),
                (this.plotWidth = s =
                  Math.max(0, Math.round(a - e - this.marginRight))),
                (this.plotHeight = o =
                  Math.max(0, Math.round(h - i - this.marginBottom))),
                (this.plotSizeX = r ? o : s),
                (this.plotSizeY = r ? s : o),
                (this.plotBorderWidth = l.plotBorderWidth || 0),
                (this.spacingBox = n.spacingBox =
                  {
                    x: d[3],
                    y: d[0],
                    width: a - d[3] - d[1],
                    height: h - d[0] - d[2],
                  }),
                (this.plotBox = n.plotBox =
                  { x: e, y: i, width: s, height: o });
              let p = 2 * Math.floor(this.plotBorderWidth / 2),
                u = Math.ceil(Math.max(p, c[3]) / 2),
                g = Math.ceil(Math.max(p, c[0]) / 2);
              (this.clipBox = {
                x: u,
                y: g,
                width: Math.floor(this.plotSizeX - Math.max(p, c[1]) / 2 - u),
                height: Math.max(
                  0,
                  Math.floor(this.plotSizeY - Math.max(p, c[2]) / 2 - g)
                ),
              }),
                t ||
                  (this.axes.forEach(function (t) {
                    t.setAxisSize(), t.setAxisTranslation();
                  }),
                  n.alignElements()),
                z(this, "afterSetChartSize", { skipAxes: t });
            }
            resetMargins() {
              z(this, "resetMargins");
              let t = this,
                e = t.options.chart;
              ["margin", "spacing"].forEach(function (i) {
                let s = e[i],
                  o = G(s) ? s : [s, s, s, s];
                ["Top", "Right", "Bottom", "Left"].forEach(function (s, r) {
                  t[i][r] = U(e[i + s], o[r]);
                });
              }),
                S.forEach(function (e, i) {
                  t[e] = U(t.margin[i], t.spacing[i]);
                }),
                (t.axisOffset = [0, 0, 0, 0]),
                (t.clipOffset = [0, 0, 0, 0]);
            }
            drawChartBox() {
              let t = this.options.chart,
                e = this.renderer,
                i = this.chartWidth,
                s = this.chartHeight,
                o = this.styledMode,
                r = this.plotBGImage,
                n = t.backgroundColor,
                a = t.plotBackgroundColor,
                h = t.plotBackgroundImage,
                l = this.plotLeft,
                d = this.plotTop,
                c = this.plotWidth,
                p = this.plotHeight,
                u = this.plotBox,
                g = this.clipRect,
                f = this.clipBox,
                m = this.chartBackground,
                x = this.plotBackground,
                y = this.plotBorder,
                b,
                v,
                k,
                S = "animate";
              m ||
                ((this.chartBackground = m =
                  e.rect().addClass("highcharts-background").add()),
                (S = "attr")),
                o
                  ? (b = v = m.strokeWidth())
                  : ((v = (b = t.borderWidth || 0) + (t.shadow ? 8 : 0)),
                    (k = { fill: n || "none" }),
                    (b || m["stroke-width"]) &&
                      ((k.stroke = t.borderColor), (k["stroke-width"] = b)),
                    m.attr(k).shadow(t.shadow)),
                m[S]({
                  x: v / 2,
                  y: v / 2,
                  width: i - v - (b % 2),
                  height: s - v - (b % 2),
                  r: t.borderRadius,
                }),
                (S = "animate"),
                x ||
                  ((S = "attr"),
                  (this.plotBackground = x =
                    e.rect().addClass("highcharts-plot-background").add())),
                x[S](u),
                !o &&
                  (x.attr({ fill: a || "none" }).shadow(t.plotShadow),
                  h &&
                    (r
                      ? (h !== r.attr("href") && r.attr("href", h),
                        r.animate(u))
                      : (this.plotBGImage = e.image(h, l, d, c, p).add()))),
                g
                  ? g.animate({ width: f.width, height: f.height })
                  : (this.clipRect = e.clipRect(f)),
                (S = "animate"),
                y ||
                  ((S = "attr"),
                  (this.plotBorder = y =
                    e
                      .rect()
                      .addClass("highcharts-plot-border")
                      .attr({ zIndex: 1 })
                      .add())),
                o ||
                  y.attr({
                    stroke: t.plotBorderColor,
                    "stroke-width": t.plotBorderWidth || 0,
                    fill: "none",
                  }),
                y[S](
                  y.crisp({ x: l, y: d, width: c, height: p }, -y.strokeWidth())
                ),
                (this.isDirtyBox = !1),
                z(this, "afterDrawChartBox");
            }
            propFromSeries() {
              let t, e, i;
              let s = this,
                o = s.options.chart,
                r = s.options.series;
              ["inverted", "angular", "polar"].forEach(function (n) {
                for (
                  e = w[o.type],
                    i = o[n] || (e && e.prototype[n]),
                    t = r && r.length;
                  !i && t--;

                )
                  (e = w[r[t].type]) && e.prototype[n] && (i = !0);
                s[n] = i;
              });
            }
            linkSeries(t) {
              let e = this,
                i = e.series;
              i.forEach(function (t) {
                t.linkedSeries.length = 0;
              }),
                i.forEach(function (t) {
                  let i = t.options.linkedTo;
                  X(i) &&
                    (i =
                      ":previous" === i ? e.series[t.index - 1] : e.get(i)) &&
                    i.linkedParent !== t &&
                    (i.linkedSeries.push(t),
                    (t.linkedParent = i),
                    i.enabledDataSorting && t.setDataSortingOptions(),
                    (t.visible = U(
                      t.options.visible,
                      i.options.visible,
                      t.visible
                    )));
                }),
                z(this, "afterLinkSeries", { isUpdating: t });
            }
            renderSeries() {
              this.series.forEach(function (t) {
                t.translate(), t.render();
              });
            }
            render() {
              let t = this.axes,
                e = this.colorAxis,
                i = this.renderer,
                s = function (t) {
                  t.forEach(function (t) {
                    t.visible && t.render();
                  });
                },
                o = 0;
              this.setTitle(),
                z(this, "beforeMargins"),
                this.getStacks && this.getStacks(),
                this.getMargins(!0),
                this.setChartSize();
              let r = this.plotWidth;
              t.some(function (t) {
                if (
                  t.horiz &&
                  t.visible &&
                  t.options.labels.enabled &&
                  t.series.length
                )
                  return (o = 21), !0;
              }),
                (this.plotHeight = Math.max(this.plotHeight - o, 0));
              let n = this.plotHeight;
              t.forEach(function (t) {
                t.setScale();
              }),
                this.getAxisMargins();
              let a = r / this.plotWidth > 1.1,
                h = n / this.plotHeight > 1.05;
              (a || h) &&
                (t.forEach(function (t) {
                  ((t.horiz && a) || (!t.horiz && h)) && t.setTickInterval(!0);
                }),
                this.getMargins()),
                this.drawChartBox(),
                this.hasCartesianSeries ? s(t) : e && e.length && s(e),
                this.seriesGroup ||
                  (this.seriesGroup = i
                    .g("series-group")
                    .attr({ zIndex: 3 })
                    .shadow(this.options.chart.seriesGroupShadow)
                    .add()),
                this.renderSeries(),
                this.addCredits(),
                this.setResponsive && this.setResponsive(),
                (this.hasRendered = !0);
            }
            addCredits(t) {
              let e = this,
                i = Y(!0, this.options.credits, t);
              i.enabled &&
                !this.credits &&
                ((this.credits = this.renderer
                  .text(i.text + (this.mapCredits || ""), 0, 0)
                  .addClass("highcharts-credits")
                  .on("click", function () {
                    i.href && (C.location.href = i.href);
                  })
                  .attr({ align: i.position.align, zIndex: 8 })),
                e.styledMode || this.credits.css(i.style),
                this.credits.add().align(i.position),
                (this.credits.update = function (t) {
                  (e.credits = e.credits.destroy()), e.addCredits(t);
                }));
            }
            destroy() {
              let t;
              let e = this,
                i = e.axes,
                s = e.series,
                o = e.container,
                n = o && o.parentNode;
              for (
                z(e, "destroy"),
                  e.renderer.forExport ? I(v, e) : (v[e.index] = void 0),
                  r.chartCount--,
                  e.renderTo.removeAttribute("data-highcharts-chart"),
                  Z(e),
                  t = i.length;
                t--;

              )
                i[t] = i[t].destroy();
              for (
                this.scroller &&
                  this.scroller.destroy &&
                  this.scroller.destroy(),
                  t = s.length;
                t--;

              )
                s[t] = s[t].destroy();
              [
                "title",
                "subtitle",
                "chartBackground",
                "plotBackground",
                "plotBGImage",
                "plotBorder",
                "seriesGroup",
                "clipRect",
                "credits",
                "pointer",
                "rangeSelector",
                "legend",
                "resetZoomButton",
                "tooltip",
                "renderer",
              ].forEach(function (t) {
                let i = e[t];
                i && i.destroy && (e[t] = i.destroy());
              }),
                o && ((o.innerHTML = p.emptyHTML), Z(o), n && E(o)),
                F(e, function (t, i) {
                  delete e[i];
                });
            }
            firstRender() {
              let t = this,
                e = t.options;
              t.getContainer(),
                t.resetMargins(),
                t.setChartSize(),
                t.propFromSeries(),
                t.getAxes();
              let i = W(e.series) ? e.series : [];
              (e.series = []),
                i.forEach(function (e) {
                  t.initSeries(e);
                }),
                t.linkSeries(),
                t.setSeriesData(),
                z(t, "beforeRender"),
                t.render(),
                t.pointer.getChartPosition(),
                t.renderer.imgCount || t.hasLoaded || t.onload(),
                t.temporaryDisplay(!0);
            }
            onload() {
              this.callbacks.concat([this.callback]).forEach(function (t) {
                t && void 0 !== this.index && t.apply(this, [this]);
              }, this),
                z(this, "load"),
                z(this, "render"),
                O(this.index) && this.setReflow(),
                this.warnIfA11yModuleNotLoaded(),
                (this.hasLoaded = !0);
            }
            warnIfA11yModuleNotLoaded() {
              let { options: t, title: e } = this;
              !t ||
                this.accessibility ||
                (this.renderer.boxWrapper.attr({
                  role: "img",
                  "aria-label": ((e && e.element.textContent) || "").replace(
                    /</g,
                    "&lt;"
                  ),
                }),
                (t.accessibility && !1 === t.accessibility.enabled) ||
                  B(
                    'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                    !1,
                    this
                  ));
            }
            addSeries(t, e, i) {
              let s;
              let o = this;
              return (
                t &&
                  ((e = U(e, !0)),
                  z(o, "addSeries", { options: t }, function () {
                    (s = o.initSeries(t)),
                      (o.isDirtyLegend = !0),
                      o.linkSeries(),
                      s.enabledDataSorting && s.setData(t.data, !1),
                      z(o, "afterAddSeries", { series: s }),
                      e && o.redraw(i);
                  })),
                s
              );
            }
            addAxis(t, e, i, s) {
              return this.createAxis(e ? "xAxis" : "yAxis", {
                axis: t,
                redraw: i,
                animation: s,
              });
            }
            addColorAxis(t, e, i) {
              return this.createAxis("colorAxis", {
                axis: t,
                redraw: e,
                animation: i,
              });
            }
            createAxis(t, i) {
              let s = new e(this, i.axis, t);
              return U(i.redraw, !0) && this.redraw(i.animation), s;
            }
            showLoading(t) {
              let e = this,
                i = e.options,
                s = i.loading,
                o = function () {
                  r &&
                    L(r, {
                      left: e.plotLeft + "px",
                      top: e.plotTop + "px",
                      width: e.plotWidth + "px",
                      height: e.plotHeight + "px",
                    });
                },
                r = e.loadingDiv,
                n = e.loadingSpan;
              r ||
                (e.loadingDiv = r =
                  P(
                    "div",
                    {
                      className: "highcharts-loading highcharts-loading-hidden",
                    },
                    null,
                    e.container
                  )),
                n ||
                  ((e.loadingSpan = n =
                    P(
                      "span",
                      { className: "highcharts-loading-inner" },
                      null,
                      r
                    )),
                  T(e, "redraw", o)),
                (r.className = "highcharts-loading"),
                p.setElementHTML(n, U(t, i.lang.loading, "")),
                e.styledMode ||
                  (L(r, j(s.style, { zIndex: 10 })),
                  L(n, s.labelStyle),
                  e.loadingShown ||
                    (L(r, { opacity: 0, display: "" }),
                    u(
                      r,
                      { opacity: s.style.opacity || 0.5 },
                      { duration: s.showDuration || 0 }
                    ))),
                (e.loadingShown = !0),
                o();
            }
            hideLoading() {
              let t = this.options,
                e = this.loadingDiv;
              e &&
                ((e.className = "highcharts-loading highcharts-loading-hidden"),
                this.styledMode ||
                  u(
                    e,
                    { opacity: 0 },
                    {
                      duration: t.loading.hideDuration || 100,
                      complete: function () {
                        L(e, { display: "none" });
                      },
                    }
                  )),
                (this.loadingShown = !1);
            }
            update(t, e, i, s) {
              let o, r, n;
              let a = this,
                h = {
                  credits: "addCredits",
                  title: "setTitle",
                  subtitle: "setSubtitle",
                  caption: "setCaption",
                },
                l = t.isResponsiveOptions,
                c = [];
              z(a, "update", { options: t }),
                l || a.setResponsive(!1, !0),
                (t = D(t, a.options)),
                (a.userOptions = Y(a.userOptions, t));
              let p = t.chart;
              p &&
                (Y(!0, a.options.chart, p),
                this.setZoomOptions(),
                "className" in p && a.setClassName(p.className),
                ("inverted" in p || "polar" in p || "type" in p) &&
                  (a.propFromSeries(), (o = !0)),
                "alignTicks" in p && (o = !0),
                "events" in p && b(this, p),
                F(p, function (t, e) {
                  -1 !== a.propsRequireUpdateSeries.indexOf("chart." + e) &&
                    (r = !0),
                    -1 !== a.propsRequireDirtyBox.indexOf(e) &&
                      (a.isDirtyBox = !0),
                    -1 !== a.propsRequireReflow.indexOf(e) &&
                      (l ? (a.isDirtyBox = !0) : (n = !0));
                }),
                !a.styledMode &&
                  p.style &&
                  a.renderer.setStyle(a.options.chart.style || {})),
                !a.styledMode && t.colors && (this.options.colors = t.colors),
                t.time &&
                  (this.time === x && (this.time = new d(t.time)),
                  Y(!0, a.options.time, t.time)),
                F(t, function (e, i) {
                  a[i] && "function" == typeof a[i].update
                    ? a[i].update(e, !1)
                    : "function" == typeof a[h[i]]
                    ? a[h[i]](e)
                    : "colors" !== i &&
                      -1 === a.collectionsWithUpdate.indexOf(i) &&
                      Y(!0, a.options[i], t[i]),
                    "chart" !== i &&
                      -1 !== a.propsRequireUpdateSeries.indexOf(i) &&
                      (r = !0);
                }),
                this.collectionsWithUpdate.forEach(function (e) {
                  t[e] &&
                    ($(t[e]).forEach(function (t, s) {
                      let o;
                      let r = O(t.id);
                      r && (o = a.get(t.id)),
                        !o &&
                          a[e] &&
                          (o = a[e][U(t.index, s)]) &&
                          ((r && O(o.options.id)) || o.options.isInternal) &&
                          (o = void 0),
                        o &&
                          o.coll === e &&
                          (o.update(t, !1), i && (o.touched = !0)),
                        !o &&
                          i &&
                          a.collectionsWithInit[e] &&
                          (a.collectionsWithInit[e][0].apply(
                            a,
                            [t]
                              .concat(a.collectionsWithInit[e][1] || [])
                              .concat([!1])
                          ).touched = !0);
                    }),
                    i &&
                      a[e].forEach(function (t) {
                        t.touched || t.options.isInternal
                          ? delete t.touched
                          : c.push(t);
                      }));
                }),
                c.forEach(function (t) {
                  t.chart && t.remove && t.remove(!1);
                }),
                o &&
                  a.axes.forEach(function (t) {
                    t.update({}, !1);
                  }),
                r &&
                  a.getSeriesOrderByLinks().forEach(function (t) {
                    t.chart && t.update({}, !1);
                  }, this);
              let u = p && p.width,
                g =
                  p &&
                  (X(p.height) ? q(p.height, u || a.chartWidth) : p.height);
              n || (H(u) && u !== a.chartWidth) || (H(g) && g !== a.chartHeight)
                ? a.setSize(u, g, s)
                : U(e, !0) && a.redraw(s),
                z(a, "afterUpdate", { options: t, redraw: e, animation: s });
            }
            setSubtitle(t, e) {
              this.applyDescription("subtitle", t), this.layOutTitles(e);
            }
            setCaption(t, e) {
              this.applyDescription("caption", t), this.layOutTitles(e);
            }
            showResetZoom() {
              let t = this,
                e = m.lang,
                i = t.zooming.resetButton,
                s = i.theme,
                o =
                  "chart" === i.relativeTo || "spacingBox" === i.relativeTo
                    ? null
                    : "scrollablePlotBox";
              function r() {
                t.zoomOut();
              }
              z(this, "beforeShowResetZoom", null, function () {
                t.resetZoomButton = t.renderer
                  .button(e.resetZoom, null, null, r, s)
                  .attr({ align: i.position.align, title: e.resetZoomTitle })
                  .addClass("highcharts-reset-zoom")
                  .add()
                  .align(i.position, !1, o);
              }),
                z(this, "afterShowResetZoom");
            }
            zoomOut() {
              z(this, "selection", { resetSelection: !0 }, this.zoom);
            }
            zoom(t) {
              let e = this,
                i = e.pointer,
                s = !1,
                o;
              !t || t.resetSelection
                ? (e.axes.forEach(function (t) {
                    o = t.zoom();
                  }),
                  (i.initiated = !1))
                : t.xAxis.concat(t.yAxis).forEach(function (t) {
                    let r = t.axis,
                      n = r.isXAxis,
                      { hasPinched: a, mouseDownX: h, mouseDownY: l } = i;
                    ((i[n ? "zoomX" : "zoomY"] &&
                      O(h) &&
                      O(l) &&
                      e.isInsidePlot(h - e.plotLeft, l - e.plotTop, {
                        axis: r,
                        ignoreX: a,
                        ignoreY: a,
                      })) ||
                      !O(e.inverted ? h : l)) &&
                      ((o = r.zoom(t.min, t.max)), r.displayBtn && (s = !0));
                  });
              let r = e.resetZoomButton;
              s && !r
                ? e.showResetZoom()
                : !s && G(r) && (e.resetZoomButton = r.destroy()),
                o &&
                  e.redraw(
                    U(
                      e.options.chart.animation,
                      t && t.animation,
                      e.pointCount < 100
                    )
                  );
            }
            pan(t, e) {
              let i;
              let s = this,
                o = s.hoverPoints,
                r = "object" == typeof e ? e : { enabled: e, type: "x" },
                n = s.options.chart;
              n && n.panning && (n.panning = r);
              let a = r.type;
              z(this, "pan", { originalEvent: t }, function () {
                o &&
                  o.forEach(function (t) {
                    t.setState();
                  });
                let e = s.xAxis;
                "xy" === a
                  ? (e = e.concat(s.yAxis))
                  : "y" === a && (e = s.yAxis);
                let r = {};
                e.forEach(function (e) {
                  if (!e.options.panningEnabled || e.options.isInternal) return;
                  let o = e.horiz,
                    n = t[o ? "chartX" : "chartY"],
                    h = o ? "mouseDownX" : "mouseDownY",
                    l = s[h],
                    d = e.minPointOffset || 0,
                    c =
                      (e.reversed && !s.inverted) || (!e.reversed && s.inverted)
                        ? -1
                        : 1,
                    p = e.getExtremes(),
                    u = e.toValue(l - n, !0) + d * c,
                    g =
                      e.toValue(l + e.len - n, !0) -
                      (d * c || (e.isXAxis && e.pointRangePadding) || 0),
                    f = g < u,
                    m = e.hasVerticalPanning(),
                    x = f ? g : u,
                    y = f ? u : g,
                    b = e.panningState,
                    v;
                  m &&
                    !e.isXAxis &&
                    (!b || b.isDirty) &&
                    e.series.forEach(function (t) {
                      let e = t.getProcessedData(!0),
                        i = t.getExtremes(e.yData, !0);
                      b ||
                        (b = {
                          startMin: Number.MAX_VALUE,
                          startMax: -Number.MAX_VALUE,
                        }),
                        H(i.dataMin) &&
                          H(i.dataMax) &&
                          ((b.startMin = Math.min(
                            U(t.options.threshold, 1 / 0),
                            i.dataMin,
                            b.startMin
                          )),
                          (b.startMax = Math.max(
                            U(t.options.threshold, -1 / 0),
                            i.dataMax,
                            b.startMax
                          )));
                    });
                  let k = Math.min(
                      U(b && b.startMin, p.dataMin),
                      d
                        ? p.min
                        : e.toValue(e.toPixels(p.min) - e.minPixelPadding)
                    ),
                    S = Math.max(
                      U(b && b.startMax, p.dataMax),
                      d
                        ? p.max
                        : e.toValue(e.toPixels(p.max) + e.minPixelPadding)
                    );
                  (e.panningState = b),
                    e.isOrdinal ||
                      ((v = k - x) > 0 && ((y += v), (x = k)),
                      (v = y - S) > 0 && ((y = S), (x -= v)),
                      e.series.length &&
                        x !== p.min &&
                        y !== p.max &&
                        x >= k &&
                        y <= S &&
                        (e.setExtremes(x, y, !1, !1, { trigger: "pan" }),
                        !s.resetZoomButton &&
                          x !== k &&
                          y !== S &&
                          a.match("y") &&
                          (s.showResetZoom(), (e.displayBtn = !1)),
                        (i = !0)),
                      (r[h] = n));
                }),
                  F(r, (t, e) => {
                    s[e] = t;
                  }),
                  i && s.redraw(!1),
                  L(s.container, { cursor: "move" });
              });
            }
          }
          return (
            j(J.prototype, {
              callbacks: [],
              collectionsWithInit: {
                xAxis: [J.prototype.addAxis, [!0]],
                yAxis: [J.prototype.addAxis, [!1]],
                series: [J.prototype.addSeries],
              },
              collectionsWithUpdate: ["xAxis", "yAxis", "series"],
              propsRequireDirtyBox: [
                "backgroundColor",
                "borderColor",
                "borderWidth",
                "borderRadius",
                "plotBackgroundColor",
                "plotBackgroundImage",
                "plotBorderColor",
                "plotBorderWidth",
                "plotShadow",
                "shadow",
              ],
              propsRequireReflow: [
                "margin",
                "marginTop",
                "marginRight",
                "marginBottom",
                "marginLeft",
                "spacing",
                "spacingTop",
                "spacingRight",
                "spacingBottom",
                "spacingLeft",
              ],
              propsRequireUpdateSeries: [
                "chart.inverted",
                "chart.polar",
                "chart.ignoreHiddenSeries",
                "chart.type",
                "colors",
                "plotOptions",
                "time",
                "tooltip",
              ],
            }),
            J
          );
        }
      ),
      i(
        e,
        "Extensions/ScrollablePlotArea.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Axis/Axis.js"],
          e["Core/Chart/Chart.js"],
          e["Core/Series/Series.js"],
          e["Core/Renderer/RendererRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o, r) {
          let { stop: n } = t,
            {
              addEvent: a,
              createElement: h,
              defined: l,
              merge: d,
              pick: c,
            } = r;
          a(i, "afterSetChartSize", function (t) {
            let i = this.options.chart.scrollablePlotArea,
              s = i && i.minWidth,
              o = i && i.minHeight,
              r,
              n,
              a;
            this.renderer.forExport ||
              (s
                ? ((this.scrollablePixelsX = r =
                    Math.max(0, s - this.chartWidth)),
                  r &&
                    ((this.scrollablePlotBox = this.renderer.scrollablePlotBox =
                      d(this.plotBox)),
                    (this.plotBox.width = this.plotWidth += r),
                    this.inverted
                      ? (this.clipBox.height += r)
                      : (this.clipBox.width += r),
                    (a = { 1: { name: "right", value: r } })))
                : o &&
                  ((this.scrollablePixelsY = n =
                    Math.max(0, o - this.chartHeight)),
                  l(n) &&
                    ((this.scrollablePlotBox = this.renderer.scrollablePlotBox =
                      d(this.plotBox)),
                    (this.plotBox.height = this.plotHeight += n),
                    this.inverted
                      ? (this.clipBox.width += n)
                      : (this.clipBox.height += n),
                    (a = { 2: { name: "bottom", value: n } }))),
              a &&
                !t.skipAxes &&
                this.axes.forEach(function (t) {
                  a[t.side]
                    ? (t.getPlotLinePath = function () {
                        let i = a[t.side].name,
                          s = a[t.side].value,
                          o = this[i],
                          r;
                        return (
                          (this[i] = o - s),
                          (r = e.prototype.getPlotLinePath.apply(
                            this,
                            arguments
                          )),
                          (this[i] = o),
                          r
                        );
                      })
                    : (t.setAxisSize(), t.setAxisTranslation());
                }));
          }),
            a(i, "render", function () {
              this.scrollablePixelsX || this.scrollablePixelsY
                ? (this.setUpScrolling && this.setUpScrolling(),
                  this.applyFixed())
                : this.fixedDiv && this.applyFixed();
            }),
            (i.prototype.setUpScrolling = function () {
              let t;
              let e = {
                WebkitOverflowScrolling: "touch",
                overflowX: "hidden",
                overflowY: "hidden",
              };
              this.scrollablePixelsX && (e.overflowX = "auto"),
                this.scrollablePixelsY && (e.overflowY = "auto"),
                (this.scrollingParent = h(
                  "div",
                  { className: "highcharts-scrolling-parent" },
                  { position: "relative" },
                  this.renderTo
                )),
                (this.scrollingContainer = h(
                  "div",
                  { className: "highcharts-scrolling" },
                  e,
                  this.scrollingParent
                )),
                a(this.scrollingContainer, "scroll", () => {
                  this.pointer &&
                    (delete this.pointer.chartPosition,
                    this.hoverPoint && (t = this.hoverPoint),
                    this.pointer.runPointActions(void 0, t, !0));
                }),
                (this.innerContainer = h(
                  "div",
                  { className: "highcharts-inner-container" },
                  null,
                  this.scrollingContainer
                )),
                this.innerContainer.appendChild(this.container),
                (this.setUpScrolling = null);
            }),
            (i.prototype.moveFixedElements = function () {
              let t = this.container,
                e = this.fixedRenderer,
                i = [
                  ".highcharts-breadcrumbs-group",
                  ".highcharts-contextbutton",
                  ".highcharts-credits",
                  ".highcharts-legend",
                  ".highcharts-legend-checkbox",
                  ".highcharts-navigator-series",
                  ".highcharts-navigator-xaxis",
                  ".highcharts-navigator-yaxis",
                  ".highcharts-navigator",
                  ".highcharts-reset-zoom",
                  ".highcharts-drillup-button",
                  ".highcharts-scrollbar",
                  ".highcharts-subtitle",
                  ".highcharts-title",
                ],
                s;
              this.scrollablePixelsX && !this.inverted
                ? (s = ".highcharts-yaxis")
                : this.scrollablePixelsX && this.inverted
                ? (s = ".highcharts-xaxis")
                : this.scrollablePixelsY && !this.inverted
                ? (s = ".highcharts-xaxis")
                : this.scrollablePixelsY &&
                  this.inverted &&
                  (s = ".highcharts-yaxis"),
                s &&
                  i.push(
                    `${s}:not(.highcharts-radial-axis)`,
                    `${s}-labels:not(.highcharts-radial-axis-labels)`
                  ),
                i.forEach(function (i) {
                  [].forEach.call(t.querySelectorAll(i), function (t) {
                    (t.namespaceURI === e.SVG_NS
                      ? e.box
                      : e.box.parentNode
                    ).appendChild(t),
                      (t.style.pointerEvents = "auto");
                  });
                });
            }),
            (i.prototype.applyFixed = function () {
              let t, e, i;
              let s = !this.fixedDiv,
                r = this.options.chart,
                l = r.scrollablePlotArea,
                d = o.getRendererType();
              s
                ? ((this.fixedDiv = h(
                    "div",
                    { className: "highcharts-fixed" },
                    {
                      position: "absolute",
                      overflow: "hidden",
                      pointerEvents: "none",
                      zIndex: ((r.style && r.style.zIndex) || 0) + 2,
                      top: 0,
                    },
                    null,
                    !0
                  )),
                  this.scrollingContainer &&
                    this.scrollingContainer.parentNode.insertBefore(
                      this.fixedDiv,
                      this.scrollingContainer
                    ),
                  (this.renderTo.style.overflow = "visible"),
                  (this.fixedRenderer = t =
                    new d(
                      this.fixedDiv,
                      this.chartWidth,
                      this.chartHeight,
                      this.options.chart.style
                    )),
                  (this.scrollableMask = t
                    .path()
                    .attr({
                      fill: this.options.chart.backgroundColor || "#fff",
                      "fill-opacity": c(l.opacity, 0.85),
                      zIndex: -1,
                    })
                    .addClass("highcharts-scrollable-mask")
                    .add()),
                  a(this, "afterShowResetZoom", this.moveFixedElements),
                  a(this, "afterApplyDrilldown", this.moveFixedElements),
                  a(this, "afterLayOutTitles", this.moveFixedElements))
                : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight),
                (this.scrollableDirty || s) &&
                  ((this.scrollableDirty = !1), this.moveFixedElements()),
                (e = this.chartWidth + (this.scrollablePixelsX || 0)),
                (i = this.chartHeight + (this.scrollablePixelsY || 0)),
                n(this.container),
                (this.container.style.width = e + "px"),
                (this.container.style.height = i + "px"),
                this.renderer.boxWrapper.attr({
                  width: e,
                  height: i,
                  viewBox: [0, 0, e, i].join(" "),
                }),
                this.chartBackground.attr({ width: e, height: i }),
                (this.scrollingContainer.style.height =
                  this.chartHeight + "px"),
                s &&
                  (l.scrollPositionX &&
                    (this.scrollingContainer.scrollLeft =
                      this.scrollablePixelsX * l.scrollPositionX),
                  l.scrollPositionY &&
                    (this.scrollingContainer.scrollTop =
                      this.scrollablePixelsY * l.scrollPositionY));
              let p = this.axisOffset,
                u = this.plotTop - p[0] - 1,
                g = this.plotLeft - p[3] - 1,
                f = this.plotTop + this.plotHeight + p[2] + 1,
                m = this.plotLeft + this.plotWidth + p[1] + 1,
                x =
                  this.plotLeft +
                  this.plotWidth -
                  (this.scrollablePixelsX || 0),
                y =
                  this.plotTop +
                  this.plotHeight -
                  (this.scrollablePixelsY || 0),
                b;
              (b = this.scrollablePixelsX
                ? [
                    ["M", 0, u],
                    ["L", this.plotLeft - 1, u],
                    ["L", this.plotLeft - 1, f],
                    ["L", 0, f],
                    ["Z"],
                    ["M", x, u],
                    ["L", this.chartWidth, u],
                    ["L", this.chartWidth, f],
                    ["L", x, f],
                    ["Z"],
                  ]
                : this.scrollablePixelsY
                ? [
                    ["M", g, 0],
                    ["L", g, this.plotTop - 1],
                    ["L", m, this.plotTop - 1],
                    ["L", m, 0],
                    ["Z"],
                    ["M", g, y],
                    ["L", g, this.chartHeight],
                    ["L", m, this.chartHeight],
                    ["L", m, y],
                    ["Z"],
                  ]
                : [["M", 0, 0]]),
                "adjustHeight" !== this.redrawTrigger &&
                  this.scrollableMask.attr({ d: b });
            }),
            a(e, "afterInit", function () {
              this.chart.scrollableDirty = !0;
            }),
            a(s, "show", function () {
              this.chart.scrollableDirty = !0;
            });
        }
      ),
      i(
        e,
        "Core/Axis/Stacking/StackItem.js",
        [
          e["Core/Templating.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { format: s } = t,
            { series: o } = e,
            {
              destroyObjectProperties: r,
              fireEvent: n,
              isNumber: a,
              pick: h,
            } = i;
          return class {
            constructor(t, e, i, s, o) {
              let r = t.chart.inverted,
                n = t.reversed;
              this.axis = t;
              let a = (this.isNegative = !!i != !!n);
              (this.options = e = e || {}),
                (this.x = s),
                (this.total = null),
                (this.cumulative = null),
                (this.points = {}),
                (this.hasValidPoints = !1),
                (this.stack = o),
                (this.leftCliff = 0),
                (this.rightCliff = 0),
                (this.alignOptions = {
                  align: e.align || (r ? (a ? "left" : "right") : "center"),
                  verticalAlign:
                    e.verticalAlign || (r ? "middle" : a ? "bottom" : "top"),
                  y: e.y,
                  x: e.x,
                }),
                (this.textAlign =
                  e.textAlign || (r ? (a ? "right" : "left") : "center"));
            }
            destroy() {
              r(this, this.axis);
            }
            render(t) {
              let e = this.axis.chart,
                i = this.options,
                o = i.format,
                r = o ? s(o, this, e) : i.formatter.call(this);
              if (this.label)
                this.label.attr({ text: r, visibility: "hidden" });
              else {
                this.label = e.renderer.label(
                  r,
                  null,
                  void 0,
                  i.shape,
                  void 0,
                  void 0,
                  i.useHTML,
                  !1,
                  "stack-labels"
                );
                let s = {
                  r: i.borderRadius || 0,
                  text: r,
                  padding: h(i.padding, 5),
                  visibility: "hidden",
                };
                e.styledMode ||
                  ((s.fill = i.backgroundColor),
                  (s.stroke = i.borderColor),
                  (s["stroke-width"] = i.borderWidth),
                  this.label.css(i.style || {})),
                  this.label.attr(s),
                  this.label.added || this.label.add(t);
              }
              (this.label.labelrank = e.plotSizeY), n(this, "afterRender");
            }
            setOffset(t, e, i, s, r, l) {
              let {
                  alignOptions: d,
                  axis: c,
                  label: p,
                  options: u,
                  textAlign: g,
                } = this,
                f = c.chart,
                m = this.getStackBox({
                  xOffset: t,
                  width: e,
                  boxBottom: i,
                  boxTop: s,
                  defaultX: r,
                  xAxis: l,
                }),
                { verticalAlign: x } = d;
              if (p && m) {
                let t = p.getBBox(),
                  e = p.padding,
                  i = "justify" === h(u.overflow, "justify"),
                  s;
                (d.x = u.x || 0), (d.y = u.y || 0);
                let { x: r, y: n } = this.adjustStackPosition({
                  labelBox: t,
                  verticalAlign: x,
                  textAlign: g,
                });
                (m.x -= r),
                  (m.y -= n),
                  p.align(d, !1, m),
                  (s = f.isInsidePlot(
                    p.alignAttr.x + d.x + r,
                    p.alignAttr.y + d.y + n
                  )) || (i = !1),
                  i &&
                    o.prototype.justifyDataLabel.call(
                      c,
                      p,
                      d,
                      p.alignAttr,
                      t,
                      m
                    ),
                  p.attr({
                    x: p.alignAttr.x,
                    y: p.alignAttr.y,
                    rotation: u.rotation,
                    rotationOriginX: t.width / 2,
                    rotationOriginY: t.height / 2,
                  }),
                  h(!i && u.crop, !0) &&
                    (s =
                      a(p.x) &&
                      a(p.y) &&
                      f.isInsidePlot(p.x - e + (p.width || 0), p.y) &&
                      f.isInsidePlot(p.x + e, p.y)),
                  p[s ? "show" : "hide"]();
              }
              n(this, "afterSetOffset", { xOffset: t, width: e });
            }
            adjustStackPosition({
              labelBox: t,
              verticalAlign: e,
              textAlign: i,
            }) {
              let s = {
                  bottom: 0,
                  middle: 1,
                  top: 2,
                  right: 1,
                  center: 0,
                  left: -1,
                },
                o = s[e],
                r = s[i];
              return {
                x: t.width / 2 + (t.width / 2) * r,
                y: (t.height / 2) * o,
              };
            }
            getStackBox(t) {
              let e = this.axis,
                i = e.chart,
                {
                  boxTop: s,
                  defaultX: o,
                  xOffset: r,
                  width: n,
                  boxBottom: l,
                } = t,
                d = e.stacking.usePercentage ? 100 : h(s, this.total, 0),
                c = e.toPixels(d),
                p = t.xAxis || i.xAxis[0],
                u = h(o, p.translate(this.x)) + r,
                g = e.toPixels(
                  l ||
                    (a(e.min) &&
                      e.logarithmic &&
                      e.logarithmic.lin2log(e.min)) ||
                    0
                ),
                f = Math.abs(c - g),
                m = i.inverted,
                x = this.isNegative;
              return m
                ? {
                    x: (x ? c : c - f) - i.plotLeft,
                    y: p.height - u - n,
                    width: f,
                    height: n,
                  }
                : {
                    x: u + p.transB - i.plotLeft,
                    y: (x ? c - f : c) - i.plotTop,
                    width: n,
                    height: f,
                  };
            }
          };
        }
      ),
      i(
        e,
        "Core/Axis/Stacking/StackingAxis.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Axis/Axis.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Axis/Stacking/StackItem.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o) {
          var r;
          let { getDeferredAnimation: n } = t,
            {
              series: { prototype: a },
            } = i,
            {
              addEvent: h,
              correctFloat: l,
              defined: d,
              destroyObjectProperties: c,
              fireEvent: p,
              isArray: u,
              isNumber: g,
              objectEach: f,
              pick: m,
            } = o;
          function x() {
            let t = this.inverted;
            this.axes.forEach((t) => {
              t.stacking &&
                t.stacking.stacks &&
                t.hasVisibleSeries &&
                (t.stacking.oldStacks = t.stacking.stacks);
            }),
              this.series.forEach((e) => {
                let i = (e.xAxis && e.xAxis.options) || {};
                e.options.stacking &&
                  e.reserveSpace() &&
                  (e.stackKey = [
                    e.type,
                    m(e.options.stack, ""),
                    t ? i.top : i.left,
                    t ? i.height : i.width,
                  ].join(","));
              });
          }
          function y() {
            let t = this.stacking;
            if (t) {
              let e = t.stacks;
              f(e, (t, i) => {
                c(t), delete e[i];
              }),
                t.stackTotalGroup?.destroy();
            }
          }
          function b() {
            this.stacking || (this.stacking = new w(this));
          }
          function v(t, e, i, s) {
            return (
              !d(t) || t.x !== e || (s && t.stackKey !== s)
                ? (t = { x: e, index: 0, key: s, stackKey: s })
                : t.index++,
              (t.key = [i, e, t.index].join(",")),
              t
            );
          }
          function k() {
            let t;
            let e = this,
              i = e.yAxis,
              s = e.stackKey || "",
              o = i.stacking.stacks,
              r = e.processedXData,
              n = e.options.stacking,
              a = e[n + "Stacker"];
            a &&
              [s, "-" + s].forEach((i) => {
                let s = r.length,
                  n,
                  h,
                  l;
                for (; s--; )
                  (n = r[s]),
                    (t = e.getStackIndicator(t, n, e.index, i)),
                    (h = o[i]?.[n]),
                    (l = h?.points[t.key || ""]) && a.call(e, l, h, s);
              });
          }
          function S(t, e, i) {
            let s = e.total ? 100 / e.total : 0;
            (t[0] = l(t[0] * s)),
              (t[1] = l(t[1] * s)),
              (this.stackedYData[i] = t[1]);
          }
          function M(t) {
            this.options.centerInCategory &&
            (this.is("column") || this.is("columnrange")) &&
            !this.options.stacking &&
            this.chart.series.length > 1
              ? a.setStackedPoints.call(this, t, "group")
              : t.stacking.resetStacks();
          }
          function C(t, e) {
            let i, o, r, n, a, h, c, p, g;
            let f = e || this.options.stacking;
            if (
              !f ||
              !this.reserveSpace() ||
              ({ group: "xAxis" }[f] || "yAxis") !== t.coll
            )
              return;
            let x = this.processedXData,
              y = this.processedYData,
              b = [],
              v = y.length,
              k = this.options,
              S = k.threshold || 0,
              M = k.startFromThreshold ? S : 0,
              C = k.stack,
              w = e ? `${this.type},${f}` : this.stackKey || "",
              T = "-" + w,
              A = this.negStacks,
              P = t.stacking,
              L = P.stacks,
              O = P.oldStacks;
            for (P.stacksTouched += 1, c = 0; c < v; c++) {
              (p = x[c]),
                (g = y[c]),
                (h = (i = this.getStackIndicator(i, p, this.index)).key || ""),
                L[(a = (o = A && g < (M ? 0 : S)) ? T : w)] || (L[a] = {}),
                L[a][p] ||
                  (O[a]?.[p]
                    ? ((L[a][p] = O[a][p]), (L[a][p].total = null))
                    : (L[a][p] = new s(t, t.options.stackLabels, !!o, p, C))),
                (r = L[a][p]),
                null !== g
                  ? ((r.points[h] = r.points[this.index] =
                      [m(r.cumulative, M)]),
                    d(r.cumulative) || (r.base = h),
                    (r.touched = P.stacksTouched),
                    i.index > 0 &&
                      !1 === this.singleStacks &&
                      (r.points[h][0] =
                        r.points[this.index + "," + p + ",0"][0]))
                  : (delete r.points[h], delete r.points[this.index]);
              let e = r.total || 0;
              "percent" === f
                ? ((n = o ? w : T),
                  (e =
                    A && L[n]?.[p]
                      ? ((n = L[n][p]).total =
                          Math.max(n.total || 0, e) + Math.abs(g) || 0)
                      : l(e + (Math.abs(g) || 0))))
                : "group" === f
                ? (u(g) && (g = g[0]), null !== g && e++)
                : (e = l(e + (g || 0))),
                "group" === f
                  ? (r.cumulative = (e || 1) - 1)
                  : (r.cumulative = l(m(r.cumulative, M) + (g || 0))),
                (r.total = e),
                null !== g &&
                  (r.points[h].push(r.cumulative),
                  (b[c] = r.cumulative),
                  (r.hasValidPoints = !0));
            }
            "percent" === f && (P.usePercentage = !0),
              "group" !== f && (this.stackedYData = b),
              (P.oldStacks = {});
          }
          class w {
            constructor(t) {
              (this.oldStacks = {}),
                (this.stacks = {}),
                (this.stacksTouched = 0),
                (this.axis = t);
            }
            buildStacks() {
              let t, e;
              let i = this.axis,
                s = i.series,
                o = "xAxis" === i.coll,
                r = i.options.reversedStacks,
                n = s.length;
              for (this.resetStacks(), this.usePercentage = !1, e = n; e--; )
                (t = s[r ? e : n - e - 1]),
                  o && t.setGroupedPoints(i),
                  t.setStackedPoints(i);
              if (!o) for (e = 0; e < n; e++) s[e].modifyStacks();
              p(i, "afterBuildStacks");
            }
            cleanStacks() {
              this.oldStacks &&
                ((this.stacks = this.oldStacks),
                f(this.stacks, (t) => {
                  f(t, (t) => {
                    t.cumulative = t.total;
                  });
                }));
            }
            resetStacks() {
              f(this.stacks, (t) => {
                f(t, (e, i) => {
                  g(e.touched) && e.touched < this.stacksTouched
                    ? (e.destroy(), delete t[i])
                    : ((e.total = null), (e.cumulative = null));
                });
              });
            }
            renderStackTotals() {
              let t = this.axis,
                e = t.chart,
                i = e.renderer,
                s = this.stacks,
                o = t.options.stackLabels?.animation,
                r = n(e, o || !1),
                a = (this.stackTotalGroup =
                  this.stackTotalGroup ||
                  i.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add());
              a.translate(e.plotLeft, e.plotTop),
                f(s, (t) => {
                  f(t, (t) => {
                    t.render(a);
                  });
                }),
                a.animate({ opacity: 1 }, r);
            }
          }
          return (
            (function (t) {
              let e = [];
              t.compose = function (t, i, s) {
                if (
                  (o.pushUnique(e, t) && (h(t, "init", b), h(t, "destroy", y)),
                  o.pushUnique(e, i))
                ) {
                  let t = i.prototype;
                  t.getStacks = x;
                }
                if (o.pushUnique(e, s)) {
                  let t = s.prototype;
                  (t.getStackIndicator = v),
                    (t.modifyStacks = k),
                    (t.percentStacker = S),
                    (t.setGroupedPoints = M),
                    (t.setStackedPoints = C);
                }
              };
            })(r || (r = {})),
            r
          );
        }
      ),
      i(
        e,
        "Series/Line/LineSeries.js",
        [
          e["Core/Series/Series.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { defined: s, merge: o, isObject: r } = i;
          class n extends t {
            constructor() {
              super(...arguments),
                (this.data = void 0),
                (this.options = void 0),
                (this.points = void 0);
            }
            drawGraph() {
              let t = this,
                e = this.options,
                i = (this.gappedPath || this.getGraphPath).call(this),
                s = this.chart.styledMode,
                n = [["graph", "highcharts-graph"]];
              s ||
                n[0].push(e.lineColor || this.color || "#cccccc", e.dashStyle),
                (n = t.getZonesGraphs(n)).forEach(function (n, a) {
                  let h = n[0],
                    l,
                    d = t[h],
                    c = d ? "animate" : "attr";
                  d
                    ? ((d.endX = t.preventGraphAnimation ? null : i.xMap),
                      d.animate({ d: i }))
                    : i.length &&
                      (t[h] = d =
                        t.chart.renderer
                          .path(i)
                          .addClass(n[1])
                          .attr({ zIndex: 1 })
                          .add(t.group)),
                    d &&
                      !s &&
                      ((l = {
                        stroke: n[2],
                        "stroke-width": e.lineWidth || 0,
                        fill: (t.fillGraph && t.color) || "none",
                      }),
                      n[3]
                        ? (l.dashstyle = n[3])
                        : "square" !== e.linecap &&
                          (l["stroke-linecap"] = l["stroke-linejoin"] =
                            "round"),
                      d[c](l).shadow(
                        a < 2 &&
                          e.shadow &&
                          o(
                            { filterUnits: "userSpaceOnUse" },
                            r(e.shadow) ? e.shadow : {}
                          )
                      )),
                    d && ((d.startX = i.xMap), (d.isArea = i.isArea));
                });
            }
            getGraphPath(t, e, i) {
              let o = this,
                r = o.options,
                n = [],
                a = [],
                h,
                l = r.step;
              t = t || o.points;
              let d = t.reversed;
              return (
                d && t.reverse(),
                (l = { right: 1, center: 2 }[l] || (l && 3)) &&
                  d &&
                  (l = 4 - l),
                (t = this.getValidPoints(
                  t,
                  !1,
                  !(r.connectNulls && !e && !i)
                )).forEach(function (d, c) {
                  let p;
                  let u = d.plotX,
                    g = d.plotY,
                    f = t[c - 1],
                    m = d.isNull || "number" != typeof g;
                  (d.leftCliff || (f && f.rightCliff)) && !i && (h = !0),
                    m && !s(e) && c > 0
                      ? (h = !r.connectNulls)
                      : m && !e
                      ? (h = !0)
                      : (0 === c || h
                          ? (p = [["M", d.plotX, d.plotY]])
                          : o.getPointSpline
                          ? (p = [o.getPointSpline(t, d, c)])
                          : l
                          ? (p =
                              1 === l
                                ? [["L", f.plotX, g]]
                                : 2 === l
                                ? [
                                    ["L", (f.plotX + u) / 2, f.plotY],
                                    ["L", (f.plotX + u) / 2, g],
                                  ]
                                : [["L", u, f.plotY]]).push(["L", u, g])
                          : (p = [["L", u, g]]),
                        a.push(d.x),
                        l && (a.push(d.x), 2 === l && a.push(d.x)),
                        n.push.apply(n, p),
                        (h = !1));
                }),
                (n.xMap = a),
                (o.graphPath = n),
                n
              );
            }
            getZonesGraphs(t) {
              return (
                this.zones.forEach(function (e, i) {
                  let s = [
                    "zone-graph-" + i,
                    "highcharts-graph highcharts-zone-graph-" +
                      i +
                      " " +
                      (e.className || ""),
                  ];
                  this.chart.styledMode ||
                    s.push(
                      e.color || this.color,
                      e.dashStyle || this.options.dashStyle
                    ),
                    t.push(s);
                }, this),
                t
              );
            }
          }
          return (
            (n.defaultOptions = o(t.defaultOptions, {
              legendSymbol: "lineMarker",
            })),
            e.registerSeriesType("line", n),
            n
          );
        }
      ),
      i(
        e,
        "Series/Area/AreaSeries.js",
        [
          e["Core/Color/Color.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { parse: s } = t,
            {
              seriesTypes: { line: o },
            } = e,
            { extend: r, merge: n, objectEach: a, pick: h } = i;
          class l extends o {
            constructor() {
              super(...arguments),
                (this.data = void 0),
                (this.options = void 0),
                (this.points = void 0);
            }
            drawGraph() {
              (this.areaPath = []), super.drawGraph.apply(this);
              let t = this,
                e = this.areaPath,
                i = this.options,
                s = this.zones,
                o = [["area", "highcharts-area", this.color, i.fillColor]];
              s.forEach(function (e, s) {
                o.push([
                  "zone-area-" + s,
                  "highcharts-area highcharts-zone-area-" +
                    s +
                    " " +
                    e.className,
                  e.color || t.color,
                  e.fillColor || i.fillColor,
                ]);
              }),
                o.forEach(function (s) {
                  let o = s[0],
                    r = {},
                    n = t[o],
                    a = n ? "animate" : "attr";
                  n
                    ? ((n.endX = t.preventGraphAnimation ? null : e.xMap),
                      n.animate({ d: e }))
                    : ((r.zIndex = 0),
                      ((n = t[o] =
                        t.chart.renderer
                          .path(e)
                          .addClass(s[1])
                          .add(t.group)).isArea = !0)),
                    t.chart.styledMode ||
                      (s[3]
                        ? (r.fill = s[3])
                        : ((r.fill = s[2]),
                          (r["fill-opacity"] = h(i.fillOpacity, 0.75)))),
                    n[a](r),
                    (n.startX = e.xMap),
                    (n.shiftUnit = i.step ? 2 : 1);
                });
            }
            getGraphPath(t) {
              let e, i, s;
              let r = o.prototype.getGraphPath,
                n = this.options,
                a = n.stacking,
                l = this.yAxis,
                d = [],
                c = [],
                p = this.index,
                u = l.stacking.stacks[this.stackKey],
                g = n.threshold,
                f = Math.round(l.getThreshold(n.threshold)),
                m = h(n.connectNulls, "percent" === a),
                x = function (i, s, o) {
                  let r = t[i],
                    n = a && u[r.x].points[p],
                    h = r[o + "Null"] || 0,
                    m = r[o + "Cliff"] || 0,
                    x,
                    y,
                    b = !0;
                  m || h
                    ? ((x = (h ? n[0] : n[1]) + m), (y = n[0] + m), (b = !!h))
                    : !a && t[s] && t[s].isNull && (x = y = g),
                    void 0 !== x &&
                      (c.push({
                        plotX: e,
                        plotY: null === x ? f : l.getThreshold(x),
                        isNull: b,
                        isCliff: !0,
                      }),
                      d.push({
                        plotX: e,
                        plotY: null === y ? f : l.getThreshold(y),
                        doCurve: !1,
                      }));
                };
              (t = t || this.points), a && (t = this.getStackPoints(t));
              for (let o = 0, r = t.length; o < r; ++o)
                a ||
                  (t[o].leftCliff =
                    t[o].rightCliff =
                    t[o].leftNull =
                    t[o].rightNull =
                      void 0),
                  (i = t[o].isNull),
                  (e = h(t[o].rectPlotX, t[o].plotX)),
                  (s = a ? h(t[o].yBottom, f) : f),
                  (i && !m) ||
                    (m || x(o, o - 1, "left"),
                    (i && !a && m) ||
                      (c.push(t[o]), d.push({ x: o, plotX: e, plotY: s })),
                    m || x(o, o + 1, "right"));
              let y = r.call(this, c, !0, !0);
              d.reversed = !0;
              let b = r.call(this, d, !0, !0),
                v = b[0];
              v && "M" === v[0] && (b[0] = ["L", v[1], v[2]]);
              let k = y.concat(b);
              k.length && k.push(["Z"]);
              let S = r.call(this, c, !1, m);
              return (k.xMap = y.xMap), (this.areaPath = k), S;
            }
            getStackPoints(t) {
              let e = this,
                i = [],
                s = [],
                o = this.xAxis,
                r = this.yAxis,
                n = r.stacking.stacks[this.stackKey],
                l = {},
                d = r.series,
                c = d.length,
                p = r.options.reversedStacks ? 1 : -1,
                u = d.indexOf(e);
              if (((t = t || this.points), this.options.stacking)) {
                for (let e = 0; e < t.length; e++)
                  (t[e].leftNull = t[e].rightNull = void 0), (l[t[e].x] = t[e]);
                a(n, function (t, e) {
                  null !== t.total && s.push(e);
                }),
                  s.sort(function (t, e) {
                    return t - e;
                  });
                let g = d.map((t) => t.visible);
                s.forEach(function (t, a) {
                  let f = 0,
                    m,
                    x;
                  if (l[t] && !l[t].isNull)
                    i.push(l[t]),
                      [-1, 1].forEach(function (i) {
                        let o = 1 === i ? "rightNull" : "leftNull",
                          r = n[s[a + i]],
                          h = 0;
                        if (r) {
                          let i = u;
                          for (; i >= 0 && i < c; ) {
                            let s = d[i].index;
                            !(m = r.points[s]) &&
                              (s === e.index
                                ? (l[t][o] = !0)
                                : g[i] &&
                                  (x = n[t].points[s]) &&
                                  (h -= x[1] - x[0])),
                              (i += p);
                          }
                        }
                        l[t][1 === i ? "rightCliff" : "leftCliff"] = h;
                      });
                  else {
                    let e = u;
                    for (; e >= 0 && e < c; ) {
                      let i = d[e].index;
                      if ((m = n[t].points[i])) {
                        f = m[1];
                        break;
                      }
                      e += p;
                    }
                    (f = h(f, 0)),
                      (f = r.translate(f, 0, 1, 0, 1)),
                      i.push({
                        isNull: !0,
                        plotX: o.translate(t, 0, 0, 0, 1),
                        x: t,
                        plotY: f,
                        yBottom: f,
                      });
                  }
                });
              }
              return i;
            }
          }
          return (
            (l.defaultOptions = n(o.defaultOptions, {
              threshold: 0,
              legendSymbol: "rectangle",
            })),
            r(l.prototype, { singleStacks: !1 }),
            e.registerSeriesType("area", l),
            l
          );
        }
      ),
      i(
        e,
        "Series/Spline/SplineSeries.js",
        [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]],
        function (t, e) {
          let { line: i } = t.seriesTypes,
            { merge: s, pick: o } = e;
          class r extends i {
            constructor() {
              super(...arguments),
                (this.data = void 0),
                (this.options = void 0),
                (this.points = void 0);
            }
            getPointSpline(t, e, i) {
              let s, r, n, a;
              let h = e.plotX || 0,
                l = e.plotY || 0,
                d = t[i - 1],
                c = t[i + 1];
              function p(t) {
                return t && !t.isNull && !1 !== t.doCurve && !e.isCliff;
              }
              if (p(d) && p(c)) {
                let t = d.plotX || 0,
                  i = d.plotY || 0,
                  o = c.plotX || 0,
                  p = c.plotY || 0,
                  u = 0;
                (s = (1.5 * h + t) / 2.5),
                  (r = (1.5 * l + i) / 2.5),
                  (n = (1.5 * h + o) / 2.5),
                  (a = (1.5 * l + p) / 2.5),
                  n !== s && (u = ((a - r) * (n - h)) / (n - s) + l - a),
                  (r += u),
                  (a += u),
                  r > i && r > l
                    ? ((r = Math.max(i, l)), (a = 2 * l - r))
                    : r < i && r < l && ((r = Math.min(i, l)), (a = 2 * l - r)),
                  a > p && a > l
                    ? ((a = Math.max(p, l)), (r = 2 * l - a))
                    : a < p && a < l && ((a = Math.min(p, l)), (r = 2 * l - a)),
                  (e.rightContX = n),
                  (e.rightContY = a),
                  (e.controlPoints = { low: [s, r], high: [n, a] });
              }
              let u = [
                "C",
                o(d.rightContX, d.plotX, 0),
                o(d.rightContY, d.plotY, 0),
                o(s, h, 0),
                o(r, l, 0),
                h,
                l,
              ];
              return (d.rightContX = d.rightContY = void 0), u;
            }
          }
          return (
            (r.defaultOptions = s(i.defaultOptions)),
            t.registerSeriesType("spline", r),
            r
          );
        }
      ),
      i(
        e,
        "Series/AreaSpline/AreaSplineSeries.js",
        [
          e["Series/Spline/SplineSeries.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let {
              area: s,
              area: { prototype: o },
            } = e.seriesTypes,
            { extend: r, merge: n } = i;
          class a extends t {
            constructor() {
              super(...arguments),
                (this.data = void 0),
                (this.points = void 0),
                (this.options = void 0);
            }
          }
          return (
            (a.defaultOptions = n(t.defaultOptions, s.defaultOptions)),
            r(a.prototype, {
              getGraphPath: o.getGraphPath,
              getStackPoints: o.getStackPoints,
              drawGraph: o.drawGraph,
            }),
            e.registerSeriesType("areaspline", a),
            a
          );
        }
      ),
      i(e, "Series/Column/ColumnSeriesDefaults.js", [], function () {
        return {
          borderRadius: 3,
          centerInCategory: !1,
          groupPadding: 0.2,
          marker: null,
          pointPadding: 0.1,
          minPointLength: 0,
          cropThreshold: 50,
          pointRange: null,
          states: {
            hover: { halo: !1, brightness: 0.1 },
            select: { color: "#cccccc", borderColor: "#000000" },
          },
          dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
          startFromThreshold: !0,
          stickyTracking: !1,
          tooltip: { distance: 6 },
          threshold: 0,
          borderColor: "#ffffff",
        };
      }),
      i(
        e,
        "Series/Column/ColumnSeries.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Color/Color.js"],
          e["Series/Column/ColumnSeriesDefaults.js"],
          e["Core/Globals.js"],
          e["Core/Series/Series.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o, r, n) {
          let { animObject: a } = t,
            { parse: h } = e,
            { hasTouch: l, noop: d } = s,
            {
              clamp: c,
              defined: p,
              extend: u,
              fireEvent: g,
              isArray: f,
              isNumber: m,
              merge: x,
              pick: y,
              objectEach: b,
              relativeLength: v,
            } = n;
          class k extends o {
            constructor() {
              super(...arguments),
                (this.borderWidth = void 0),
                (this.data = void 0),
                (this.group = void 0),
                (this.options = void 0),
                (this.points = void 0);
            }
            animate(t) {
              let e, i;
              let s = this,
                o = this.yAxis,
                r = o.pos,
                n = s.options,
                h = this.chart.inverted,
                l = {},
                d = h ? "translateX" : "translateY";
              t
                ? ((l.scaleY = 0.001),
                  (i = c(o.toPixels(n.threshold), r, r + o.len)),
                  h ? (l.translateX = i - o.len) : (l.translateY = i),
                  s.clipBox && s.setClip(),
                  s.group.attr(l))
                : ((e = Number(s.group.attr(d))),
                  s.group.animate(
                    { scaleY: 1 },
                    u(a(s.options.animation), {
                      step: function (t, i) {
                        s.group &&
                          ((l[d] = e + i.pos * (r - e)), s.group.attr(l));
                      },
                    })
                  ));
            }
            init(t, e) {
              super.init.apply(this, arguments);
              let i = this;
              (t = i.chart).hasRendered &&
                t.series.forEach(function (t) {
                  t.type === i.type && (t.isDirty = !0);
                });
            }
            getColumnMetrics() {
              let t = this,
                e = t.options,
                i = t.xAxis,
                s = t.yAxis,
                o = i.options.reversedStacks,
                r = (i.reversed && !o) || (!i.reversed && o),
                n = {},
                a,
                h = 0;
              !1 === e.grouping
                ? (h = 1)
                : t.chart.series.forEach(function (e) {
                    let i;
                    let o = e.yAxis,
                      r = e.options;
                    e.type === t.type &&
                      e.reserveSpace() &&
                      s.len === o.len &&
                      s.pos === o.pos &&
                      (r.stacking && "group" !== r.stacking
                        ? (void 0 === n[(a = e.stackKey)] && (n[a] = h++),
                          (i = n[a]))
                        : !1 !== r.grouping && (i = h++),
                      (e.columnIndex = i));
                  });
              let l = Math.min(
                  Math.abs(i.transA) *
                    ((!i.brokenAxis?.hasBreaks && i.ordinal?.slope) ||
                      e.pointRange ||
                      i.closestPointRange ||
                      i.tickInterval ||
                      1),
                  i.len
                ),
                d = l * e.groupPadding,
                c = (l - 2 * d) / (h || 1),
                p = Math.min(
                  e.maxPointWidth || i.len,
                  y(e.pointWidth, c * (1 - 2 * e.pointPadding))
                ),
                u = (c - p) / 2,
                g = (t.columnIndex || 0) + (r ? 1 : 0),
                f = u + (d + g * c - l / 2) * (r ? -1 : 1);
              return (
                (t.columnMetrics = {
                  width: p,
                  offset: f,
                  paddedWidth: c,
                  columnCount: h,
                }),
                t.columnMetrics
              );
            }
            crispCol(t, e, i, s) {
              this.chart;
              let o = this.borderWidth,
                r = -(o % 2 ? 0.5 : 0),
                n = o % 2 ? 0.5 : 1;
              this.options.crisp &&
                (i = Math.round(t + i) + r - (t = Math.round(t) + r));
              let a = Math.round(e + s) + n,
                h = 0.5 >= Math.abs(e) && a > 0.5;
              return (
                (s = a - (e = Math.round(e) + n)),
                h && s && ((e -= 1), (s += 1)),
                { x: t, y: e, width: i, height: s }
              );
            }
            adjustForMissingColumns(t, e, i, s) {
              if (!i.isNull && s.columnCount > 1) {
                let o = this.xAxis.series
                    .filter((t) => t.visible)
                    .map((t) => t.index),
                  r = 0,
                  n = 0;
                b(this.xAxis.stacking?.stacks, (t) => {
                  if ("number" == typeof i.x) {
                    let e = t[i.x.toString()];
                    if (e) {
                      let t = e.points[this.index];
                      if (f(t)) {
                        let t = Object.keys(e.points)
                          .filter(
                            (t) =>
                              !t.match(",") &&
                              e.points[t] &&
                              e.points[t].length > 1
                          )
                          .map(parseFloat)
                          .filter((t) => -1 !== o.indexOf(t))
                          .sort((t, e) => e - t);
                        (r = t.indexOf(this.index)), (n = t.length);
                      }
                    }
                  }
                });
                let a = (n - 1) * s.paddedWidth + e;
                t = (i.plotX || 0) + a / 2 - e - r * s.paddedWidth;
              }
              return t;
            }
            translate() {
              let t = this,
                e = t.chart,
                i = t.options,
                s = (t.dense = t.closestPointRange * t.xAxis.transA < 2),
                r = (t.borderWidth = y(i.borderWidth, s ? 0 : 1)),
                n = t.xAxis,
                a = t.yAxis,
                h = i.threshold,
                l = y(i.minPointLength, 5),
                d = t.getColumnMetrics(),
                u = d.width,
                f = (t.pointXOffset = d.offset),
                x = t.dataMin,
                b = t.dataMax,
                v = (t.barW = Math.max(u, 1 + 2 * r)),
                k = (t.translatedThreshold = a.getThreshold(h));
              e.inverted && (k -= 0.5),
                i.pointPadding && (v = Math.ceil(v)),
                o.prototype.translate.apply(t),
                t.points.forEach(function (s) {
                  let o = y(s.yBottom, k),
                    r = 999 + Math.abs(o),
                    g = s.plotX || 0,
                    S = c(s.plotY, -r, a.len + r);
                  s.stackBox;
                  let M,
                    C = Math.min(S, o),
                    w = Math.max(S, o) - C,
                    T = u,
                    A = g + f,
                    P = v;
                  l &&
                    Math.abs(w) < l &&
                    ((w = l),
                    (M =
                      (!a.reversed && !s.negative) ||
                      (a.reversed && s.negative)),
                    m(h) &&
                      m(b) &&
                      s.y === h &&
                      b <= h &&
                      (a.min || 0) < h &&
                      (x !== b || (a.max || 0) <= h) &&
                      ((M = !M), (s.negative = !s.negative)),
                    (C = Math.abs(C - k) > l ? o - l : k - (M ? l : 0))),
                    p(s.options.pointWidth) &&
                      (A -= Math.round(
                        ((T = P = Math.ceil(s.options.pointWidth)) - u) / 2
                      )),
                    i.centerInCategory &&
                      !i.stacking &&
                      (A = t.adjustForMissingColumns(A, T, s, d)),
                    (s.barX = A),
                    (s.pointWidth = T),
                    (s.tooltipPos = e.inverted
                      ? [
                          c(
                            a.len + a.pos - e.plotLeft - S,
                            a.pos - e.plotLeft,
                            a.len + a.pos - e.plotLeft
                          ),
                          n.len + n.pos - e.plotTop - A - P / 2,
                          w,
                        ]
                      : [
                          n.left - e.plotLeft + A + P / 2,
                          c(
                            S + a.pos - e.plotTop,
                            a.pos - e.plotTop,
                            a.len + a.pos - e.plotTop
                          ),
                          w,
                        ]),
                    (s.shapeType =
                      t.pointClass.prototype.shapeType || "roundedRect"),
                    (s.shapeArgs = t.crispCol(
                      A,
                      s.isNull ? k : C,
                      P,
                      s.isNull ? 0 : w
                    ));
                }),
                g(this, "afterColumnTranslate");
            }
            drawGraph() {
              this.group[this.dense ? "addClass" : "removeClass"](
                "highcharts-dense-data"
              );
            }
            pointAttribs(t, e) {
              let i = this.options,
                s = this.pointAttrToOptions || {},
                o = s.stroke || "borderColor",
                r = s["stroke-width"] || "borderWidth",
                n,
                a,
                l,
                d = (t && t.color) || this.color,
                c = (t && t[o]) || i[o] || d,
                p = (t && t.options.dashStyle) || i.dashStyle,
                u = (t && t[r]) || i[r] || this[r] || 0,
                g = y(t && t.opacity, i.opacity, 1);
              t &&
                this.zones.length &&
                ((a = t.getZone()),
                (d =
                  t.options.color ||
                  (a && (a.color || t.nonZonedColor)) ||
                  this.color),
                a &&
                  ((c = a.borderColor || c),
                  (p = a.dashStyle || p),
                  (u = a.borderWidth || u))),
                e &&
                  t &&
                  ((l = (n = x(
                    i.states[e],
                    (t.options.states && t.options.states[e]) || {}
                  )).brightness),
                  (d =
                    n.color ||
                    (void 0 !== l && h(d).brighten(n.brightness).get()) ||
                    d),
                  (c = n[o] || c),
                  (u = n[r] || u),
                  (p = n.dashStyle || p),
                  (g = y(n.opacity, g)));
              let f = { fill: d, stroke: c, "stroke-width": u, opacity: g };
              return p && (f.dashstyle = p), f;
            }
            drawPoints(t = this.points) {
              let e;
              let i = this,
                s = this.chart,
                o = i.options,
                r = s.renderer,
                n = o.animationLimit || 250;
              t.forEach(function (t) {
                let a = t.plotY,
                  h = t.graphic,
                  l = !!h,
                  d = h && s.pointCount < n ? "animate" : "attr";
                m(a) && null !== t.y
                  ? ((e = t.shapeArgs),
                    h && t.hasNewShapeType() && (h = h.destroy()),
                    i.enabledDataSorting &&
                      (t.startXPos = i.xAxis.reversed
                        ? -((e && e.width) || 0)
                        : i.xAxis.width),
                    !h &&
                      ((t.graphic = h =
                        r[t.shapeType](e).add(t.group || i.group)),
                      h &&
                        i.enabledDataSorting &&
                        s.hasRendered &&
                        s.pointCount < n &&
                        (h.attr({ x: t.startXPos }),
                        (l = !0),
                        (d = "animate"))),
                    h && l && h[d](x(e)),
                    s.styledMode ||
                      h[d](i.pointAttribs(t, t.selected && "select")).shadow(
                        !1 !== t.allowShadow && o.shadow
                      ),
                    h &&
                      (h.addClass(t.getClassName(), !0),
                      h.attr({ visibility: t.visible ? "inherit" : "hidden" })))
                  : h && (t.graphic = h.destroy());
              });
            }
            drawTracker(t = this.points) {
              let e;
              let i = this,
                s = i.chart,
                o = s.pointer,
                r = function (t) {
                  let e = o.getPointFromEvent(t);
                  void 0 !== e &&
                    i.options.enableMouseTracking &&
                    ((o.isDirectTouch = !0), e.onMouseOver(t));
                };
              t.forEach(function (t) {
                (e = f(t.dataLabels)
                  ? t.dataLabels
                  : t.dataLabel
                  ? [t.dataLabel]
                  : []),
                  t.graphic && (t.graphic.element.point = t),
                  e.forEach(function (e) {
                    e.div ? (e.div.point = t) : (e.element.point = t);
                  });
              }),
                i._hasTracking ||
                  (i.trackerGroups.forEach(function (t) {
                    i[t] &&
                      (i[t]
                        .addClass("highcharts-tracker")
                        .on("mouseover", r)
                        .on("mouseout", function (t) {
                          o.onTrackerMouseOut(t);
                        }),
                      l && i[t].on("touchstart", r),
                      !s.styledMode &&
                        i.options.cursor &&
                        i[t].css({ cursor: i.options.cursor }));
                  }),
                  (i._hasTracking = !0)),
                g(this, "afterDrawTracker");
            }
            remove() {
              let t = this,
                e = t.chart;
              e.hasRendered &&
                e.series.forEach(function (e) {
                  e.type === t.type && (e.isDirty = !0);
                }),
                o.prototype.remove.apply(t, arguments);
            }
          }
          return (
            (k.defaultOptions = x(o.defaultOptions, i)),
            u(k.prototype, {
              directTouch: !0,
              getSymbol: d,
              negStacks: !0,
              trackerGroups: ["group", "dataLabelsGroup"],
            }),
            r.registerSeriesType("column", k),
            k
          );
        }
      ),
      i(
        e,
        "Core/Series/DataLabel.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Templating.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          var s;
          let { getDeferredAnimation: o } = t,
            { format: r } = e,
            {
              defined: n,
              extend: a,
              fireEvent: h,
              isArray: l,
              isString: d,
              merge: c,
              objectEach: p,
              pick: u,
              pInt: g,
              splat: f,
            } = i;
          return (
            (function (t) {
              let e = [];
              function s() {
                return f(this.options.dataLabels || {}).some((t) => t?.enabled);
              }
              function m(t, e, i, s, o) {
                let r = this,
                  h = this.chart,
                  l = this.isCartesian && h.inverted,
                  d = this.enabledDataSorting,
                  c = t.plotX,
                  p = t.plotY,
                  g = i.rotation,
                  f = i.align,
                  m =
                    n(c) &&
                    n(p) &&
                    h.isInsidePlot(c, Math.round(p), {
                      inverted: l,
                      paneCoordinates: !0,
                      series: r,
                    }),
                  x = (i) => {
                    d && r.xAxis && !k && r.setDataLabelStartPos(t, e, o, m, i);
                  },
                  y,
                  b,
                  v,
                  k = "justify" === u(i.overflow, d ? "none" : "justify"),
                  S =
                    this.visible &&
                    !1 !== t.visible &&
                    n(c) &&
                    (t.series.forceDL ||
                      (d && !k) ||
                      m ||
                      (u(i.inside, !!this.options.stacking) &&
                        s &&
                        h.isInsidePlot(c, l ? s.x + 1 : s.y + s.height - 1, {
                          inverted: l,
                          paneCoordinates: !0,
                          series: r,
                        }))),
                  M = t.pos();
                if (S && M) {
                  g && e.attr({ align: f });
                  let t = e.getBBox(!0),
                    n = [0, 0];
                  if (
                    ((y = h.renderer.fontMetrics(e).b),
                    (s = a(
                      { x: M[0], y: Math.round(M[1]), width: 0, height: 0 },
                      s
                    )),
                    a(i, { width: t.width, height: t.height }),
                    g
                      ? ((k = !1),
                        (b = h.renderer.rotCorr(y, g)),
                        (v = {
                          x: s.x + (i.x || 0) + s.width / 2 + b.x,
                          y:
                            s.y +
                            (i.y || 0) +
                            { top: 0, middle: 0.5, bottom: 1 }[
                              i.verticalAlign
                            ] *
                              s.height,
                        }),
                        (n = [
                          t.x - Number(e.attr("x")),
                          t.y - Number(e.attr("y")),
                        ]),
                        x(v),
                        e[o ? "attr" : "animate"](v))
                      : (x(s), e.align(i, void 0, s), (v = e.alignAttr)),
                    k && s.height >= 0)
                  )
                    this.justifyDataLabel(e, i, v, t, s, o);
                  else if (u(i.crop, !0)) {
                    let { x: e, y: i } = v;
                    (e += n[0]),
                      (i += n[1]),
                      (S =
                        h.isInsidePlot(e, i, {
                          paneCoordinates: !0,
                          series: r,
                        }) &&
                        h.isInsidePlot(e + t.width, i + t.height, {
                          paneCoordinates: !0,
                          series: r,
                        }));
                  }
                  i.shape &&
                    !g &&
                    e[o ? "attr" : "animate"]({ anchorX: M[0], anchorY: M[1] });
                }
                o && d && (e.placed = !1),
                  S || (d && !k) ? e.show() : (e.hide(), (e.placed = !1));
              }
              function x() {
                return this.plotGroup(
                  "dataLabelsGroup",
                  "data-labels",
                  this.hasRendered ? "inherit" : "hidden",
                  this.options.dataLabels.zIndex || 6
                );
              }
              function y(t) {
                let e = this.hasRendered || 0,
                  i = this.initDataLabelsGroup().attr({ opacity: +e });
                return (
                  !e &&
                    i &&
                    (this.visible && i.show(),
                    this.options.animation
                      ? i.animate({ opacity: 1 }, t)
                      : i.attr({ opacity: 1 })),
                  i
                );
              }
              function b(t) {
                t = t || this.points;
                let e = this,
                  i = e.chart,
                  s = e.options,
                  a = i.renderer,
                  { backgroundColor: l, plotBackgroundColor: c } =
                    i.options.chart,
                  m = i.options.plotOptions,
                  x = a.getContrast((d(c) && c) || (d(l) && l) || "#000000"),
                  y = s.dataLabels,
                  b;
                y = k(k(m?.series?.dataLabels, m?.[e.type]?.dataLabels), y);
                let { animation: v, defer: S } = f(y)[0],
                  M = S ? o(i, v, e) : { defer: 0, duration: 0 };
                h(this, "drawDataLabels"),
                  e.hasDataLabels?.() &&
                    ((b = this.initDataLabels(M)),
                    t.forEach((t) => {
                      let o = t.dataLabels || [];
                      f(k(y, t.dlOptions || t.options?.dataLabels)).forEach(
                        (h, l) => {
                          let c =
                              h.enabled &&
                              t.visible &&
                              (!t.isNull || t.dataLabelOnNull) &&
                              (function (t, e) {
                                let i = e.filter;
                                if (i) {
                                  let e = i.operator,
                                    s = t[i.property],
                                    o = i.value;
                                  return (
                                    (">" === e && s > o) ||
                                    ("<" === e && s < o) ||
                                    (">=" === e && s >= o) ||
                                    ("<=" === e && s <= o) ||
                                    ("==" === e && s == o) ||
                                    ("===" === e && s === o)
                                  );
                                }
                                return !0;
                              })(t, h),
                            f = h.style || {},
                            m = h.distance,
                            y,
                            v,
                            k,
                            S,
                            M = {},
                            C = o[l],
                            w = !C;
                          if (c) {
                            if (
                              ((v = u(h[t.formatPrefix + "Format"], h.format)),
                              (y = t.getLabelConfig()),
                              (k = n(v)
                                ? r(v, y, i)
                                : (
                                    h[t.formatPrefix + "Formatter"] ||
                                    h.formatter
                                  ).call(y, h)),
                              (S = h.rotation),
                              !i.styledMode &&
                                ((f.color = u(
                                  h.color,
                                  f.color,
                                  d(e.color) ? e.color : void 0,
                                  "#000000"
                                )),
                                "contrast" === f.color
                                  ? ((t.contrastColor = a.getContrast(
                                      t.color || e.color
                                    )),
                                    (f.color =
                                      (!n(m) && h.inside) ||
                                      0 > g(m || 0) ||
                                      s.stacking
                                        ? t.contrastColor
                                        : x))
                                  : delete t.contrastColor,
                                s.cursor && (f.cursor = s.cursor)),
                              (M = {
                                r: h.borderRadius || 0,
                                rotation: S,
                                padding: h.padding,
                                zIndex: 1,
                              }),
                              !i.styledMode)
                            ) {
                              let { backgroundColor: e, borderColor: i } = h;
                              (M.fill = "auto" === e ? t.color : e),
                                (M.stroke = "auto" === i ? t.color : i),
                                (M["stroke-width"] = h.borderWidth);
                            }
                            p(M, (t, e) => {
                              void 0 === t && delete M[e];
                            });
                          }
                          if (
                            (!C ||
                              (c &&
                                n(k) &&
                                !!C.div == !!h.useHTML &&
                                ((C.rotation && h.rotation) ||
                                  C.rotation === h.rotation)) ||
                              ((C = void 0), (w = !0)),
                            c &&
                              n(k) &&
                              (C
                                ? (M.text = k)
                                : (C = S
                                    ? a
                                        .text(k, 0, 0, h.useHTML)
                                        .addClass("highcharts-data-label")
                                    : a.label(
                                        k,
                                        0,
                                        0,
                                        h.shape,
                                        void 0,
                                        void 0,
                                        h.useHTML,
                                        void 0,
                                        "data-label"
                                      )) &&
                                  C.addClass(
                                    " highcharts-data-label-color-" +
                                      t.colorIndex +
                                      " " +
                                      (h.className || "") +
                                      (h.useHTML ? " highcharts-tracker" : "")
                                  ),
                              C))
                          ) {
                            (C.options = h),
                              C.attr(M),
                              i.styledMode || C.css(f).shadow(h.shadow);
                            let s =
                              h[t.formatPrefix + "TextPath"] || h.textPath;
                            s &&
                              !h.useHTML &&
                              (C.setTextPath(
                                t.getDataLabelPath?.(C) || t.graphic,
                                s
                              ),
                              t.dataLabelPath &&
                                !s.enabled &&
                                (t.dataLabelPath = t.dataLabelPath.destroy())),
                              C.added || C.add(b),
                              e.alignDataLabel(t, C, h, void 0, w),
                              (C.isActive = !0),
                              o[l] && o[l] !== C && o[l].destroy(),
                              (o[l] = C);
                          }
                        }
                      );
                      let h = o.length;
                      for (; h--; )
                        o[h] && o[h].isActive
                          ? (o[h].isActive = !1)
                          : (o[h]?.destroy(), o.splice(h, 1));
                      (t.dataLabel = o[0]), (t.dataLabels = o);
                    })),
                  h(this, "afterDrawDataLabels");
              }
              function v(t, e, i, s, o, r) {
                let n = this.chart,
                  a = e.align,
                  h = e.verticalAlign,
                  l = t.box ? 0 : t.padding || 0,
                  { x: d = 0, y: c = 0 } = e,
                  p,
                  u;
                return (
                  (p = (i.x || 0) + l) < 0 &&
                    ("right" === a && d >= 0
                      ? ((e.align = "left"), (e.inside = !0))
                      : (d -= p),
                    (u = !0)),
                  (p = (i.x || 0) + s.width - l) > n.plotWidth &&
                    ("left" === a && d <= 0
                      ? ((e.align = "right"), (e.inside = !0))
                      : (d += n.plotWidth - p),
                    (u = !0)),
                  (p = i.y + l) < 0 &&
                    ("bottom" === h && c >= 0
                      ? ((e.verticalAlign = "top"), (e.inside = !0))
                      : (c -= p),
                    (u = !0)),
                  (p = (i.y || 0) + s.height - l) > n.plotHeight &&
                    ("top" === h && c <= 0
                      ? ((e.verticalAlign = "bottom"), (e.inside = !0))
                      : (c += n.plotHeight - p),
                    (u = !0)),
                  u &&
                    ((e.x = d),
                    (e.y = c),
                    (t.placed = !r),
                    t.align(e, void 0, o)),
                  u
                );
              }
              function k(t, e) {
                let i = [],
                  s;
                if (l(t) && !l(e))
                  i = t.map(function (t) {
                    return c(t, e);
                  });
                else if (l(e) && !l(t))
                  i = e.map(function (e) {
                    return c(t, e);
                  });
                else if (l(t) || l(e)) {
                  if (l(t) && l(e))
                    for (s = Math.max(t.length, e.length); s--; )
                      i[s] = c(t[s], e[s]);
                } else i = c(t, e);
                return i;
              }
              function S(t, e, i, s, o) {
                let r = this.chart,
                  n = r.inverted,
                  a = this.xAxis,
                  h = a.reversed,
                  l = ((n ? e.height : e.width) || 0) / 2,
                  d = t.pointWidth,
                  c = d ? d / 2 : 0;
                (e.startXPos = n ? o.x : h ? -l - c : a.width - l + c),
                  (e.startYPos = n
                    ? h
                      ? this.yAxis.height - l + c
                      : -l - c
                    : o.y),
                  s
                    ? "hidden" === e.visibility &&
                      (e.show(), e.attr({ opacity: 0 }).animate({ opacity: 1 }))
                    : e
                        .attr({ opacity: 1 })
                        .animate({ opacity: 0 }, void 0, e.hide),
                  r.hasRendered &&
                    (i && e.attr({ x: e.startXPos, y: e.startYPos }),
                    (e.placed = !0));
              }
              t.compose = function (t) {
                if (i.pushUnique(e, t)) {
                  let e = t.prototype;
                  (e.initDataLabelsGroup = x),
                    (e.initDataLabels = y),
                    (e.alignDataLabel = m),
                    (e.drawDataLabels = b),
                    (e.justifyDataLabel = v),
                    (e.setDataLabelStartPos = S),
                    (e.hasDataLabels = s);
                }
              };
            })(s || (s = {})),
            s
          );
        }
      ),
      i(
        e,
        "Series/Column/ColumnDataLabel.js",
        [
          e["Core/Series/DataLabel.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          var s;
          let { series: o } = e,
            { merge: r, pick: n } = i;
          return (
            (function (e) {
              let s = [];
              function a(t, e, i, s, a) {
                let h = this.chart.inverted,
                  l = t.series,
                  d = (l.xAxis ? l.xAxis.len : this.chart.plotSizeX) || 0,
                  c = (l.yAxis ? l.yAxis.len : this.chart.plotSizeY) || 0,
                  p = t.dlBox || t.shapeArgs,
                  u = n(t.below, t.plotY > n(this.translatedThreshold, c)),
                  g = n(i.inside, !!this.options.stacking);
                if (p) {
                  if (
                    ((s = r(p)), !("allow" === i.overflow && !1 === i.crop))
                  ) {
                    s.y < 0 && ((s.height += s.y), (s.y = 0));
                    let t = s.y + s.height - c;
                    t > 0 && t < s.height && (s.height -= t);
                  }
                  h &&
                    (s = {
                      x: c - s.y - s.height,
                      y: d - s.x - s.width,
                      width: s.height,
                      height: s.width,
                    }),
                    g ||
                      (h
                        ? ((s.x += u ? 0 : s.width), (s.width = 0))
                        : ((s.y += u ? s.height : 0), (s.height = 0)));
                }
                (i.align = n(
                  i.align,
                  !h || g ? "center" : u ? "right" : "left"
                )),
                  (i.verticalAlign = n(
                    i.verticalAlign,
                    h || g ? "middle" : u ? "top" : "bottom"
                  )),
                  o.prototype.alignDataLabel.call(this, t, e, i, s, a),
                  i.inside &&
                    t.contrastColor &&
                    e.css({ color: t.contrastColor });
              }
              e.compose = function (e) {
                t.compose(o),
                  i.pushUnique(s, e) && (e.prototype.alignDataLabel = a);
              };
            })(s || (s = {})),
            s
          );
        }
      ),
      i(
        e,
        "Series/Bar/BarSeries.js",
        [
          e["Series/Column/ColumnSeries.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { extend: s, merge: o } = i;
          class r extends t {
            constructor() {
              super(...arguments),
                (this.data = void 0),
                (this.options = void 0),
                (this.points = void 0);
            }
          }
          return (
            (r.defaultOptions = o(t.defaultOptions, {})),
            s(r.prototype, { inverted: !0 }),
            e.registerSeriesType("bar", r),
            r
          );
        }
      ),
      i(e, "Series/Scatter/ScatterSeriesDefaults.js", [], function () {
        return {
          lineWidth: 0,
          findNearestPointBy: "xy",
          jitter: { x: 0, y: 0 },
          marker: { enabled: !0 },
          tooltip: {
            headerFormat:
              '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
          },
        };
      }),
      i(
        e,
        "Series/Scatter/ScatterSeries.js",
        [
          e["Series/Scatter/ScatterSeriesDefaults.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { column: s, line: o } = e.seriesTypes,
            { addEvent: r, extend: n, merge: a } = i;
          class h extends o {
            constructor() {
              super(...arguments),
                (this.data = void 0),
                (this.options = void 0),
                (this.points = void 0);
            }
            applyJitter() {
              let t = this,
                e = this.options.jitter,
                i = this.points.length;
              e &&
                this.points.forEach(function (s, o) {
                  ["x", "y"].forEach(function (r, n) {
                    let a,
                      h = "plot" + r.toUpperCase(),
                      l,
                      d,
                      c;
                    e[r] &&
                      !s.isNull &&
                      ((a = t[r + "Axis"]),
                      (c = e[r] * a.transA),
                      a &&
                        !a.isLog &&
                        ((l = Math.max(0, s[h] - c)),
                        (d = Math.min(a.len, s[h] + c)),
                        (s[h] =
                          l +
                          (d - l) *
                            (function (t) {
                              let e = 1e4 * Math.sin(t);
                              return e - Math.floor(e);
                            })(o + n * i)),
                        "x" === r && (s.clientX = s.plotX)));
                  });
                });
            }
            drawGraph() {
              this.options.lineWidth
                ? super.drawGraph()
                : this.graph && (this.graph = this.graph.destroy());
            }
          }
          return (
            (h.defaultOptions = a(o.defaultOptions, t)),
            n(h.prototype, {
              drawTracker: s.prototype.drawTracker,
              sorted: !1,
              requireSorting: !1,
              noSharedTooltip: !0,
              trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
              takeOrdinalPosition: !1,
            }),
            r(h, "afterTranslate", function () {
              this.applyJitter();
            }),
            e.registerSeriesType("scatter", h),
            h
          );
        }
      ),
      i(
        e,
        "Series/CenteredUtilities.js",
        [
          e["Core/Globals.js"],
          e["Core/Series/Series.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          var s, o;
          let { deg2rad: r } = t,
            { fireEvent: n, isNumber: a, pick: h, relativeLength: l } = i;
          return (
            ((o = s || (s = {})).getCenter = function () {
              let t = this.options,
                i = this.chart,
                s = 2 * (t.slicedOffset || 0),
                o = i.plotWidth - 2 * s,
                r = i.plotHeight - 2 * s,
                d = t.center,
                c = Math.min(o, r),
                p = t.thickness,
                u,
                g = t.size,
                f = t.innerSize || 0,
                m,
                x;
              "string" == typeof g && (g = parseFloat(g)),
                "string" == typeof f && (f = parseFloat(f));
              let y = [
                h(d[0], "50%"),
                h(d[1], "50%"),
                h(g && g < 0 ? void 0 : t.size, "100%"),
                h(f && f < 0 ? void 0 : t.innerSize || 0, "0%"),
              ];
              for (
                !i.angular || this instanceof e || (y[3] = 0), m = 0;
                m < 4;
                ++m
              )
                (x = y[m]),
                  (u = m < 2 || (2 === m && /%$/.test(x))),
                  (y[m] = l(x, [o, r, c, y[2]][m]) + (u ? s : 0));
              return (
                y[3] > y[2] && (y[3] = y[2]),
                a(p) && 2 * p < y[2] && p > 0 && (y[3] = y[2] - 2 * p),
                n(this, "afterGetCenter", { positions: y }),
                y
              );
            }),
            (o.getStartAndEndRadians = function (t, e) {
              let i = a(t) ? t : 0,
                s = a(e) && e > i && e - i < 360 ? e : i + 360;
              return { start: r * (i + -90), end: r * (s + -90) };
            }),
            s
          );
        }
      ),
      i(
        e,
        "Series/Pie/PiePoint.js",
        [
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Series/Point.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i) {
          let { setAnimation: s } = t,
            {
              addEvent: o,
              defined: r,
              extend: n,
              isNumber: a,
              isString: h,
              pick: l,
              relativeLength: d,
            } = i;
          class c extends e {
            constructor() {
              super(...arguments),
                (this.half = 0),
                (this.options = void 0),
                (this.series = void 0);
            }
            getConnectorPath(t) {
              let e = t.dataLabelPosition,
                i = t.options || {},
                s = i.connectorShape,
                o = this.connectorShapes[s] || s;
              return (
                (e &&
                  o.call(
                    this,
                    { ...e.computed, alignment: e.alignment },
                    e.connectorPosition,
                    i
                  )) ||
                []
              );
            }
            getTranslate() {
              return (
                (this.sliced && this.slicedTranslation) || {
                  translateX: 0,
                  translateY: 0,
                }
              );
            }
            haloPath(t) {
              let e = this.shapeArgs;
              return this.sliced || !this.visible
                ? []
                : this.series.chart.renderer.symbols.arc(
                    e.x,
                    e.y,
                    e.r + t,
                    e.r + t,
                    {
                      innerR: e.r - 1,
                      start: e.start,
                      end: e.end,
                      borderRadius: e.borderRadius,
                    }
                  );
            }
            init() {
              super.init.apply(this, arguments),
                (this.name = l(this.name, "Slice"));
              let t = (t) => {
                this.slice("select" === t.type);
              };
              return o(this, "select", t), o(this, "unselect", t), this;
            }
            isValid() {
              return a(this.y) && this.y >= 0;
            }
            setVisible(t, e) {
              let i = this.series,
                s = i.chart,
                o = i.options.ignoreHiddenPoint;
              (e = l(e, o)),
                t !== this.visible &&
                  ((this.visible =
                    this.options.visible =
                    t =
                      void 0 === t ? !this.visible : t),
                  (i.options.data[i.data.indexOf(this)] = this.options),
                  ["graphic", "dataLabel", "connector"].forEach((e) => {
                    this[e] && this[e][t ? "show" : "hide"](t);
                  }),
                  this.legendItem && s.legend.colorizeItem(this, t),
                  t || "hover" !== this.state || this.setState(""),
                  o && (i.isDirty = !0),
                  e && s.redraw());
            }
            slice(t, e, i) {
              let o = this.series,
                n = o.chart;
              s(i, n),
                (e = l(e, !0)),
                (this.sliced =
                  this.options.sliced =
                  t =
                    r(t) ? t : !this.sliced),
                (o.options.data[o.data.indexOf(this)] = this.options),
                this.graphic && this.graphic.animate(this.getTranslate());
            }
          }
          return (
            n(c.prototype, {
              connectorShapes: {
                fixedOffset: function (t, e, i) {
                  let s = e.breakAt,
                    o = e.touchingSliceAt,
                    r = i.softConnector
                      ? [
                          "C",
                          t.x + ("left" === t.alignment ? -5 : 5),
                          t.y,
                          2 * s.x - o.x,
                          2 * s.y - o.y,
                          s.x,
                          s.y,
                        ]
                      : ["L", s.x, s.y];
                  return [["M", t.x, t.y], r, ["L", o.x, o.y]];
                },
                straight: function (t, e) {
                  let i = e.touchingSliceAt;
                  return [
                    ["M", t.x, t.y],
                    ["L", i.x, i.y],
                  ];
                },
                crookedLine: function (t, e, i) {
                  let { breakAt: s, touchingSliceAt: o } = e,
                    { series: r } = this,
                    [n, a, h] = r.center,
                    l = h / 2,
                    { plotLeft: c, plotWidth: p } = r.chart,
                    u = "left" === t.alignment,
                    { x: g, y: f } = t,
                    m = s.x;
                  if (i.crookDistance) {
                    let t = d(i.crookDistance, 1);
                    m = u ? n + l + (p + c - n - l) * (1 - t) : c + (n - l) * t;
                  } else
                    m = n + (a - f) * Math.tan((this.angle || 0) - Math.PI / 2);
                  let x = [["M", g, f]];
                  return (
                    (u ? m <= g && m >= s.x : m >= g && m <= s.x) &&
                      x.push(["L", m, f]),
                    x.push(["L", s.x, s.y], ["L", o.x, o.y]),
                    x
                  );
                },
              },
            }),
            c
          );
        }
      ),
      i(e, "Series/Pie/PieSeriesDefaults.js", [], function () {
        return {
          borderRadius: 3,
          center: [null, null],
          clip: !1,
          colorByPoint: !0,
          dataLabels: {
            connectorPadding: 5,
            connectorShape: "crookedLine",
            crookDistance: void 0,
            distance: 30,
            enabled: !0,
            formatter: function () {
              return this.point.isNull ? void 0 : this.point.name;
            },
            softConnector: !0,
            x: 0,
          },
          fillColor: void 0,
          ignoreHiddenPoint: !0,
          inactiveOtherPoints: !0,
          legendType: "point",
          marker: null,
          size: null,
          showInLegend: !1,
          slicedOffset: 10,
          stickyTracking: !1,
          tooltip: { followPointer: !0 },
          borderColor: "#ffffff",
          borderWidth: 1,
          lineWidth: void 0,
          states: { hover: { brightness: 0.1 } },
        };
      }),
      i(
        e,
        "Series/Pie/PieSeries.js",
        [
          e["Series/CenteredUtilities.js"],
          e["Series/Column/ColumnSeries.js"],
          e["Core/Globals.js"],
          e["Series/Pie/PiePoint.js"],
          e["Series/Pie/PieSeriesDefaults.js"],
          e["Core/Series/Series.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Renderer/SVG/Symbols.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o, r, n, a, h) {
          let { getStartAndEndRadians: l } = t,
            { noop: d } = i,
            {
              clamp: c,
              extend: p,
              fireEvent: u,
              merge: g,
              pick: f,
              relativeLength: m,
              splat: x,
            } = h;
          class y extends r {
            constructor() {
              super(...arguments),
                (this.center = void 0),
                (this.data = void 0),
                (this.options = void 0),
                (this.points = void 0);
            }
            animate(t) {
              let e = this,
                i = e.points,
                s = e.startAngleRad;
              t ||
                i.forEach(function (t) {
                  let i = t.graphic,
                    o = t.shapeArgs;
                  i &&
                    o &&
                    (i.attr({
                      r: f(t.startR, e.center && e.center[3] / 2),
                      start: s,
                      end: s,
                    }),
                    i.animate(
                      { r: o.r, start: o.start, end: o.end },
                      e.options.animation
                    ));
                });
            }
            drawEmpty() {
              let t, e;
              let i = this.startAngleRad,
                s = this.endAngleRad,
                o = this.options;
              0 === this.total && this.center
                ? ((t = this.center[0]),
                  (e = this.center[1]),
                  this.graph ||
                    (this.graph = this.chart.renderer
                      .arc(t, e, this.center[1] / 2, 0, i, s)
                      .addClass("highcharts-empty-series")
                      .add(this.group)),
                  this.graph.attr({
                    d: a.arc(t, e, this.center[2] / 2, 0, {
                      start: i,
                      end: s,
                      innerR: this.center[3] / 2,
                    }),
                  }),
                  this.chart.styledMode ||
                    this.graph.attr({
                      "stroke-width": o.borderWidth,
                      fill: o.fillColor || "none",
                      stroke: o.color || "#cccccc",
                    }))
                : this.graph && (this.graph = this.graph.destroy());
            }
            drawPoints() {
              let t = this.chart.renderer;
              this.points.forEach(function (e) {
                e.graphic &&
                  e.hasNewShapeType() &&
                  (e.graphic = e.graphic.destroy()),
                  e.graphic ||
                    ((e.graphic = t[e.shapeType](e.shapeArgs).add(
                      e.series.group
                    )),
                    (e.delayedRendering = !0));
              });
            }
            generatePoints() {
              super.generatePoints(), this.updateTotals();
            }
            getX(t, e, i, s) {
              let o = this.center,
                r = this.radii ? this.radii[i.index] || 0 : o[2] / 2,
                n = s.dataLabelPosition,
                a = n?.distance || 0,
                h = Math.asin(c((t - o[1]) / (r + a), -1, 1)),
                l =
                  o[0] +
                  (e ? -1 : 1) * (Math.cos(h) * (r + a)) +
                  (a > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0);
              return l;
            }
            hasData() {
              return !!this.processedXData.length;
            }
            redrawPoints() {
              let t, e, i, s;
              let o = this,
                r = o.chart;
              this.drawEmpty(),
                o.group && !r.styledMode && o.group.shadow(o.options.shadow),
                o.points.forEach(function (n) {
                  let a = {};
                  (e = n.graphic),
                    !n.isNull && e
                      ? ((s = n.shapeArgs),
                        (t = n.getTranslate()),
                        r.styledMode ||
                          (i = o.pointAttribs(n, n.selected && "select")),
                        n.delayedRendering
                          ? (e.setRadialReference(o.center).attr(s).attr(t),
                            r.styledMode ||
                              e.attr(i).attr({ "stroke-linejoin": "round" }),
                            (n.delayedRendering = !1))
                          : (e.setRadialReference(o.center),
                            r.styledMode || g(!0, a, i),
                            g(!0, a, s, t),
                            e.animate(a)),
                        e.attr({
                          visibility: n.visible ? "inherit" : "hidden",
                        }),
                        e.addClass(n.getClassName(), !0))
                      : e && (n.graphic = e.destroy());
                });
            }
            sortByAngle(t, e) {
              t.sort(function (t, i) {
                return void 0 !== t.angle && (i.angle - t.angle) * e;
              });
            }
            translate(t) {
              u(this, "translate"), this.generatePoints();
              let e = this.options,
                i = e.slicedOffset,
                s = l(e.startAngle, e.endAngle),
                o = (this.startAngleRad = s.start),
                r = (this.endAngleRad = s.end),
                n = r - o,
                a = this.points,
                h = e.ignoreHiddenPoint,
                d = a.length,
                c,
                p,
                g,
                f,
                m,
                x,
                y,
                b = 0;
              for (
                t || (this.center = t = this.getCenter()), x = 0;
                x < d;
                x++
              ) {
                (y = a[x]),
                  (c = o + b * n),
                  y.isValid() && (!h || y.visible) && (b += y.percentage / 100),
                  (p = o + b * n);
                let e = {
                  x: t[0],
                  y: t[1],
                  r: t[2] / 2,
                  innerR: t[3] / 2,
                  start: Math.round(1e3 * c) / 1e3,
                  end: Math.round(1e3 * p) / 1e3,
                };
                (y.shapeType = "arc"),
                  (y.shapeArgs = e),
                  (g = (p + c) / 2) > 1.5 * Math.PI
                    ? (g -= 2 * Math.PI)
                    : g < -Math.PI / 2 && (g += 2 * Math.PI),
                  (y.slicedTranslation = {
                    translateX: Math.round(Math.cos(g) * i),
                    translateY: Math.round(Math.sin(g) * i),
                  }),
                  (f = (Math.cos(g) * t[2]) / 2),
                  (m = (Math.sin(g) * t[2]) / 2),
                  (y.tooltipPos = [t[0] + 0.7 * f, t[1] + 0.7 * m]),
                  (y.half = g < -Math.PI / 2 || g > Math.PI / 2 ? 1 : 0),
                  (y.angle = g);
              }
              u(this, "afterTranslate");
            }
            updateTotals() {
              let t = this.points,
                e = t.length,
                i = this.options.ignoreHiddenPoint,
                s,
                o,
                r = 0;
              for (s = 0; s < e; s++)
                (o = t[s]).isValid() && (!i || o.visible) && (r += o.y);
              for (s = 0, this.total = r; s < e; s++)
                ((o = t[s]).percentage =
                  r > 0 && (o.visible || !i) ? (o.y / r) * 100 : 0),
                  (o.total = r);
            }
          }
          return (
            (y.defaultOptions = g(r.defaultOptions, o)),
            p(y.prototype, {
              axisTypes: [],
              directTouch: !0,
              drawGraph: void 0,
              drawTracker: e.prototype.drawTracker,
              getCenter: t.getCenter,
              getSymbol: d,
              isCartesian: !1,
              noSharedTooltip: !0,
              pointAttribs: e.prototype.pointAttribs,
              pointClass: s,
              requireSorting: !1,
              searchPoint: d,
              trackerGroups: ["group", "dataLabelsGroup"],
            }),
            n.registerSeriesType("pie", y),
            y
          );
        }
      ),
      i(
        e,
        "Series/Pie/PieDataLabel.js",
        [
          e["Core/Series/DataLabel.js"],
          e["Core/Globals.js"],
          e["Core/Renderer/RendererUtilities.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, s, o) {
          var r;
          let { noop: n } = e,
            { distribute: a } = i,
            { series: h } = s,
            {
              arrayMax: l,
              clamp: d,
              defined: c,
              pick: p,
              relativeLength: u,
            } = o;
          return (
            (function (e) {
              let i = [],
                s = {
                  radialDistributionY: function (t, e) {
                    return (
                      (e.dataLabelPosition?.top || 0) + t.distributeBox.pos
                    );
                  },
                  radialDistributionX: function (t, e, i, s, o) {
                    let r = o.dataLabelPosition;
                    return t.getX(
                      i < (r?.top || 0) + 2 || i > (r?.bottom || 0) - 2 ? s : i,
                      e.half,
                      e,
                      o
                    );
                  },
                  justify: function (t, e, i, s) {
                    return (
                      s[0] +
                      (t.half ? -1 : 1) *
                        (i + (e.dataLabelPosition?.distance || 0))
                    );
                  },
                  alignToPlotEdges: function (t, e, i, s) {
                    let o = t.getBBox().width;
                    return e ? o + s : i - o - s;
                  },
                  alignToConnectors: function (t, e, i, s) {
                    let o = 0,
                      r;
                    return (
                      t.forEach(function (t) {
                        (r = t.dataLabel.getBBox().width) > o && (o = r);
                      }),
                      e ? o + s : i - o - s
                    );
                  },
                };
              function r(t, e) {
                let { center: i, options: s } = this,
                  o = i[2] / 2,
                  r = t.angle || 0,
                  n = Math.cos(r),
                  a = Math.sin(r),
                  h = i[0] + n * o,
                  l = i[1] + a * o,
                  d = Math.min(
                    (s.slicedOffset || 0) + (s.borderWidth || 0),
                    e / 5
                  );
                return {
                  natural: { x: h + n * e, y: l + a * e },
                  computed: {},
                  alignment: e < 0 ? "center" : t.half ? "right" : "left",
                  connectorPosition: {
                    breakAt: { x: h + n * d, y: l + a * d },
                    touchingSliceAt: { x: h, y: l },
                  },
                  distance: e,
                };
              }
              function g() {
                let t = this,
                  e = t.points,
                  i = t.chart,
                  s = i.plotWidth,
                  o = i.plotHeight,
                  r = i.plotLeft,
                  n = Math.round(i.chartWidth / 3),
                  d = t.center,
                  g = d[2] / 2,
                  f = d[1],
                  m = [[], []],
                  x = [0, 0, 0, 0],
                  y = t.dataLabelPositioners,
                  b,
                  v,
                  k,
                  S = 0;
                t.visible &&
                  t.hasDataLabels?.() &&
                  (e.forEach((t) => {
                    (t.dataLabels || []).forEach((t) => {
                      t.shortened &&
                        (t
                          .attr({ width: "auto" })
                          .css({ width: "auto", textOverflow: "clip" }),
                        (t.shortened = !1));
                    });
                  }),
                  h.prototype.drawDataLabels.apply(t),
                  e.forEach((t) => {
                    (t.dataLabels || []).forEach((e, i) => {
                      let s = d[2] / 2,
                        o = e.options,
                        r = u(o?.distance || 0, s);
                      0 === i && m[t.half].push(t),
                        !c(o?.style?.width) &&
                          e.getBBox().width > n &&
                          (e.css({ width: Math.round(0.7 * n) + "px" }),
                          (e.shortened = !0)),
                        (e.dataLabelPosition = this.getDataLabelPosition(t, r)),
                        (S = Math.max(S, r));
                    });
                  }),
                  m.forEach((e, n) => {
                    let h = e.length,
                      l = [],
                      u,
                      m,
                      b = 0,
                      M;
                    h &&
                      (t.sortByAngle(e, n - 0.5),
                      S > 0 &&
                        ((u = Math.max(0, f - g - S)),
                        (m = Math.min(f + g + S, i.plotHeight)),
                        e.forEach((t) => {
                          (t.dataLabels || []).forEach((e, s) => {
                            let o = e.dataLabelPosition;
                            o &&
                              o.distance > 0 &&
                              ((o.top = Math.max(0, f - g - o.distance)),
                              (o.bottom = Math.min(
                                f + g + o.distance,
                                i.plotHeight
                              )),
                              (b = e.getBBox().height || 21),
                              (t.distributeBox = {
                                target:
                                  (e.dataLabelPosition?.natural.y || 0) -
                                  o.top +
                                  b / 2,
                                size: b,
                                rank: t.y,
                              }),
                              l.push(t.distributeBox));
                          });
                        }),
                        a(l, (M = m + b - u), M / 5)),
                      e.forEach((i) => {
                        (i.dataLabels || []).forEach((a) => {
                          let h = a.options || {},
                            u = i.distributeBox,
                            f = a.dataLabelPosition,
                            m = f?.natural.y || 0,
                            b = h.connectorPadding || 0,
                            S = 0,
                            M = m,
                            C = "inherit";
                          if (f) {
                            if (
                              (l &&
                                c(u) &&
                                f.distance > 0 &&
                                (void 0 === u.pos
                                  ? (C = "hidden")
                                  : ((k = u.size),
                                    (M = y.radialDistributionY(i, a)))),
                              h.justify)
                            )
                              S = y.justify(i, a, g, d);
                            else
                              switch (h.alignTo) {
                                case "connectors":
                                  S = y.alignToConnectors(e, n, s, r);
                                  break;
                                case "plotEdges":
                                  S = y.alignToPlotEdges(a, n, s, r);
                                  break;
                                default:
                                  S = y.radialDistributionX(t, i, M, m, a);
                              }
                            if (
                              ((f.attribs = {
                                visibility: C,
                                align: f.alignment,
                              }),
                              (f.posAttribs = {
                                x:
                                  S +
                                  (h.x || 0) +
                                  ({ left: b, right: -b }[f.alignment] || 0),
                                y: M + (h.y || 0) - a.getBBox().height / 2,
                              }),
                              (f.computed.x = S),
                              (f.computed.y = M),
                              p(h.crop, !0))
                            ) {
                              let t;
                              S - (v = a.getBBox().width) < b && 1 === n
                                ? ((t = Math.round(v - S + b)),
                                  (x[3] = Math.max(t, x[3])))
                                : S + v > s - b &&
                                  0 === n &&
                                  ((t = Math.round(S + v - s + b)),
                                  (x[1] = Math.max(t, x[1]))),
                                M - k / 2 < 0
                                  ? (x[0] = Math.max(
                                      Math.round(-M + k / 2),
                                      x[0]
                                    ))
                                  : M + k / 2 > o &&
                                    (x[2] = Math.max(
                                      Math.round(M + k / 2 - o),
                                      x[2]
                                    )),
                                (f.sideOverflow = t);
                            }
                          }
                        });
                      }));
                  }),
                  (0 === l(x) || this.verifyDataLabelOverflow(x)) &&
                    (this.placeDataLabels(),
                    this.points.forEach((e) => {
                      (e.dataLabels || []).forEach((s) => {
                        let { connectorColor: o, connectorWidth: r = 1 } =
                            s.options || {},
                          n = s.dataLabelPosition;
                        if (r) {
                          let a;
                          (b = s.connector),
                            n && n.distance > 0
                              ? ((a = !b),
                                b ||
                                  (s.connector = b =
                                    i.renderer
                                      .path()
                                      .addClass(
                                        "highcharts-data-label-connector  highcharts-color-" +
                                          e.colorIndex +
                                          (e.className ? " " + e.className : "")
                                      )
                                      .add(t.dataLabelsGroup)),
                                i.styledMode ||
                                  b.attr({
                                    "stroke-width": r,
                                    stroke: o || e.color || "#666666",
                                  }),
                                b[a ? "attr" : "animate"]({
                                  d: e.getConnectorPath(s),
                                }),
                                b.attr({ visibility: n.attribs?.visibility }))
                              : b && (s.connector = b.destroy());
                        }
                      });
                    })));
              }
              function f() {
                this.points.forEach((t) => {
                  (t.dataLabels || []).forEach((t) => {
                    let e = t.dataLabelPosition;
                    e
                      ? (e.sideOverflow &&
                          (t.css({
                            width:
                              Math.max(t.getBBox().width - e.sideOverflow, 0) +
                              "px",
                            textOverflow:
                              (t.options?.style || {}).textOverflow ||
                              "ellipsis",
                          }),
                          (t.shortened = !0)),
                        t.attr(e.attribs),
                        t[t.moved ? "animate" : "attr"](e.posAttribs),
                        (t.moved = !0))
                      : t && t.attr({ y: -9999 });
                  }),
                    delete t.distributeBox;
                }, this);
              }
              function m(t) {
                let e = this.center,
                  i = this.options,
                  s = i.center,
                  o = i.minSize || 80,
                  r = o,
                  n = null !== i.size;
                return (
                  !n &&
                    (null !== s[0]
                      ? (r = Math.max(e[2] - Math.max(t[1], t[3]), o))
                      : ((r = Math.max(e[2] - t[1] - t[3], o)),
                        (e[0] += (t[3] - t[1]) / 2)),
                    null !== s[1]
                      ? (r = d(r, o, e[2] - Math.max(t[0], t[2])))
                      : ((r = d(r, o, e[2] - t[0] - t[2])),
                        (e[1] += (t[0] - t[2]) / 2)),
                    r < e[2]
                      ? ((e[2] = r),
                        (e[3] = Math.min(
                          i.thickness
                            ? Math.max(0, r - 2 * i.thickness)
                            : Math.max(0, u(i.innerSize || 0, r)),
                          r
                        )),
                        this.translate(e),
                        this.drawDataLabels && this.drawDataLabels())
                      : (n = !0)),
                  n
                );
              }
              e.compose = function (e) {
                if ((t.compose(h), o.pushUnique(i, e))) {
                  let t = e.prototype;
                  (t.dataLabelPositioners = s),
                    (t.alignDataLabel = n),
                    (t.drawDataLabels = g),
                    (t.getDataLabelPosition = r),
                    (t.placeDataLabels = f),
                    (t.verifyDataLabelOverflow = m);
                }
              };
            })(r || (r = {})),
            r
          );
        }
      ),
      i(
        e,
        "Extensions/OverlappingDataLabels.js",
        [e["Core/Utilities.js"]],
        function (t) {
          let {
              addEvent: e,
              fireEvent: i,
              isNumber: s,
              objectEach: o,
              pick: r,
              pushUnique: n,
            } = t,
            a = [];
          function h(t) {
            let e = t.length,
              o = this.renderer,
              r = (t, e) =>
                !(
                  e.x >= t.x + t.width ||
                  e.x + e.width <= t.x ||
                  e.y >= t.y + t.height ||
                  e.y + e.height <= t.y
                ),
              n = (t) => {
                let e = t.box ? 0 : t.padding || 0,
                  i,
                  r,
                  n,
                  a = 0,
                  h = 0,
                  l,
                  d;
                if (t && (!t.alignAttr || t.placed))
                  return (
                    (i = t.alignAttr || { x: t.attr("x"), y: t.attr("y") }),
                    (r = t.parentGroup),
                    t.width ||
                      ((n = t.getBBox()),
                      (t.width = n.width),
                      (t.height = n.height),
                      (a = o.fontMetrics(t.element).h)),
                    (l = t.width - 2 * e),
                    (d = { left: "0", center: "0.5", right: "1" }[t.alignValue])
                      ? (h = +d * l)
                      : s(t.x) &&
                        Math.round(t.x) !== t.translateX &&
                        (h = t.x - (t.translateX || 0)),
                    {
                      x: i.x + (r.translateX || 0) + e - (h || 0),
                      y: i.y + (r.translateY || 0) + e - a,
                      width: t.width - 2 * e,
                      height: (t.height || 0) - 2 * e,
                    }
                  );
              },
              a,
              h,
              d,
              c,
              p,
              u = !1;
            for (let i = 0; i < e; i++)
              (a = t[i]) &&
                ((a.oldOpacity = a.opacity),
                (a.newOpacity = 1),
                (a.absoluteBox = n(a)));
            t.sort((t, e) => (e.labelrank || 0) - (t.labelrank || 0));
            for (let i = 0; i < e; ++i) {
              c = (h = t[i]) && h.absoluteBox;
              for (let s = i + 1; s < e; ++s)
                (p = (d = t[s]) && d.absoluteBox),
                  c &&
                    p &&
                    h !== d &&
                    0 !== h.newOpacity &&
                    0 !== d.newOpacity &&
                    "hidden" !== h.visibility &&
                    "hidden" !== d.visibility &&
                    r(c, p) &&
                    ((h.labelrank < d.labelrank ? h : d).newOpacity = 0);
            }
            for (let e of t) l(e, this) && (u = !0);
            u && i(this, "afterHideAllOverlappingLabels");
          }
          function l(t, e) {
            let s,
              o = !1;
            return (
              t &&
                ((s = t.newOpacity),
                t.oldOpacity !== s &&
                  (t.alignAttr && t.placed
                    ? (t[s ? "removeClass" : "addClass"](
                        "highcharts-data-label-hidden"
                      ),
                      (o = !0),
                      (t.alignAttr.opacity = s),
                      t[t.isOld ? "animate" : "attr"](
                        t.alignAttr,
                        null,
                        function () {
                          e.styledMode ||
                            t.css({ pointerEvents: s ? "auto" : "none" });
                        }
                      ),
                      i(e, "afterHideOverlappingLabel"))
                    : t.attr({ opacity: s })),
                (t.isOld = !0)),
              o
            );
          }
          function d() {
            let t = this,
              e = [];
            for (let i of t.labelCollectors || []) e = e.concat(i());
            for (let i of t.yAxis || [])
              i.stacking &&
                i.options.stackLabels &&
                !i.options.stackLabels.allowOverlap &&
                o(i.stacking.stacks, (t) => {
                  o(t, (t) => {
                    t.label && e.push(t.label);
                  });
                });
            for (let i of t.series || [])
              if (i.visible && i.hasDataLabels?.()) {
                let s = (i) => {
                  for (let s of i)
                    s.visible &&
                      (s.dataLabels || []).forEach((i) => {
                        let o = i.options || {};
                        (i.labelrank = r(
                          o.labelrank,
                          s.labelrank,
                          s.shapeArgs?.height
                        )),
                          o.allowOverlap ?? Number(o.distance) > 0
                            ? ((i.oldOpacity = i.opacity),
                              (i.newOpacity = 1),
                              l(i, t))
                            : e.push(i);
                      });
                };
                s(i.nodes || []), s(i.points);
              }
            this.hideOverlappingLabels(e);
          }
          return {
            compose: function (t) {
              if (n(a, t)) {
                let i = t.prototype;
                (i.hideOverlappingLabels = h), e(t, "render", d);
              }
            },
          };
        }
      ),
      i(
        e,
        "Extensions/BorderRadius.js",
        [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]],
        function (t, e, i) {
          let { defaultOptions: s } = t,
            { noop: o } = e,
            {
              addEvent: r,
              extend: n,
              isObject: a,
              merge: h,
              pushUnique: l,
              relativeLength: d,
            } = i,
            c = [],
            p = { radius: 0, scope: "stack", where: void 0 },
            u = o,
            g = o;
          function f(t, e, i, s, o = {}) {
            let r = u(t, e, i, s, o),
              { innerR: n = 0, r: a = i, start: h = 0, end: l = 0 } = o;
            if (o.open || !o.borderRadius) return r;
            let c = l - h,
              p = Math.sin(c / 2),
              g = Math.max(
                Math.min(
                  d(o.borderRadius || 0, a - n),
                  (a - n) / 2,
                  (a * p) / (1 + p)
                ),
                0
              ),
              f = Math.min(g, 2 * (c / Math.PI) * n),
              m = r.length - 1;
            for (; m--; )
              !(function (t, e, i) {
                let s, o, r;
                let n = t[e],
                  a = t[e + 1];
                if (
                  ("Z" === a[0] && (a = t[0]),
                  ("M" === n[0] || "L" === n[0]) && "A" === a[0]
                    ? ((s = n), (o = a), (r = !0))
                    : "A" === n[0] &&
                      ("M" === a[0] || "L" === a[0]) &&
                      ((s = a), (o = n)),
                  s && o && o.params)
                ) {
                  let n = o[1],
                    a = o[5],
                    h = o.params,
                    { start: l, end: d, cx: c, cy: p } = h,
                    u = a ? n - i : n + i,
                    g = u ? Math.asin(i / u) : 0,
                    f = a ? g : -g,
                    m = Math.cos(g) * u;
                  r
                    ? ((h.start = l + f),
                      (s[1] = c + m * Math.cos(l)),
                      (s[2] = p + m * Math.sin(l)),
                      t.splice(e + 1, 0, [
                        "A",
                        i,
                        i,
                        0,
                        0,
                        1,
                        c + n * Math.cos(h.start),
                        p + n * Math.sin(h.start),
                      ]))
                    : ((h.end = d - f),
                      (o[6] = c + n * Math.cos(h.end)),
                      (o[7] = p + n * Math.sin(h.end)),
                      t.splice(e + 1, 0, [
                        "A",
                        i,
                        i,
                        0,
                        0,
                        1,
                        c + m * Math.cos(d),
                        p + m * Math.sin(d),
                      ])),
                    (o[4] = Math.abs(h.end - h.start) < Math.PI ? 0 : 1);
                }
              })(r, m, m > 1 ? f : g);
            return r;
          }
          function m() {
            if (
              this.options.borderRadius &&
              !(this.chart.is3d && this.chart.is3d())
            ) {
              let { options: t, yAxis: e } = this,
                i = "percent" === t.stacking,
                o = s.plotOptions?.[this.type]?.borderRadius,
                r = x(t.borderRadius, a(o) ? o : {}),
                h = e.options.reversed;
              for (let s of this.points) {
                let { shapeArgs: o } = s;
                if ("roundedRect" === s.shapeType && o) {
                  let { width: a = 0, height: l = 0, y: c = 0 } = o,
                    p = c,
                    u = l;
                  if ("stack" === r.scope && s.stackTotal) {
                    let o = e.translate(i ? 100 : s.stackTotal, !1, !0, !1, !0),
                      r = e.translate(t.threshold || 0, !1, !0, !1, !0),
                      n = this.crispCol(0, Math.min(o, r), 0, Math.abs(o - r));
                    (p = n.y), (u = n.height);
                  }
                  let g = (s.negative ? -1 : 1) * (h ? -1 : 1) == -1,
                    f = r.where;
                  !f &&
                    this.is("waterfall") &&
                    Math.abs(
                      (s.yBottom || 0) - (this.translatedThreshold || 0)
                    ) > this.borderWidth &&
                    (f = "all"),
                    f || (f = "end");
                  let m =
                    Math.min(
                      d(r.radius, a),
                      a / 2,
                      "all" === f ? l / 2 : 1 / 0
                    ) || 0;
                  "end" === f && (g && (p -= m), (u += m)),
                    n(o, { brBoxHeight: u, brBoxY: p, r: m });
                }
              }
            }
          }
          function x(t, e) {
            return a(t) || (t = { radius: t || 0 }), h(p, e, t);
          }
          function y() {
            let t = x(this.options.borderRadius);
            for (let e of this.points) {
              let i = e.shapeArgs;
              i && (i.borderRadius = d(t.radius, (i.r || 0) - (i.innerR || 0)));
            }
          }
          function b(t, e, i, s, o = {}) {
            let r = g(t, e, i, s, o),
              { r: n = 0, brBoxHeight: a = s, brBoxY: h = e } = o,
              l = e - h,
              d = h + a - (e + s),
              c = l - n > -0.1 ? 0 : n,
              p = d - n > -0.1 ? 0 : n,
              u = Math.max(c && l, 0),
              f = Math.max(p && d, 0),
              m = [t + c, e],
              x = [t + i - c, e],
              y = [t + i, e + c],
              b = [t + i, e + s - p],
              v = [t + i - p, e + s],
              k = [t + p, e + s],
              S = [t, e + s - p],
              M = [t, e + c],
              C = (t, e) => Math.sqrt(Math.pow(t, 2) - Math.pow(e, 2));
            if (u) {
              let t = C(c, c - u);
              (m[0] -= t), (x[0] += t), (y[1] = M[1] = e + c - u);
            }
            if (s < c - u) {
              let o = C(c, c - u - s);
              (y[0] = b[0] = t + i - c + o),
                (v[0] = Math.min(y[0], v[0])),
                (k[0] = Math.max(b[0], k[0])),
                (S[0] = M[0] = t + c - o),
                (y[1] = M[1] = e + s);
            }
            if (f) {
              let t = C(p, p - f);
              (v[0] += t), (k[0] -= t), (b[1] = S[1] = e + s - p + f);
            }
            if (s < p - f) {
              let o = C(p, p - f - s);
              (y[0] = b[0] = t + i - p + o),
                (x[0] = Math.min(y[0], x[0])),
                (m[0] = Math.max(b[0], m[0])),
                (S[0] = M[0] = t + p - o),
                (b[1] = S[1] = e);
            }
            return (
              (r.length = 0),
              r.push(
                ["M", ...m],
                ["L", ...x],
                ["A", c, c, 0, 0, 1, ...y],
                ["L", ...b],
                ["A", p, p, 0, 0, 1, ...v],
                ["L", ...k],
                ["A", p, p, 0, 0, 1, ...S],
                ["L", ...M],
                ["A", c, c, 0, 0, 1, ...m],
                ["Z"]
              ),
              r
            );
          }
          return {
            compose: function (t, e, i, s) {
              if (
                (l(c, t) && r(t, "afterColumnTranslate", m, { order: 9 }),
                l(c, e) && r(e, "afterTranslate", y),
                l(c, i) &&
                  i.symbolCustomAttribs.push(
                    "borderRadius",
                    "brBoxHeight",
                    "brBoxY"
                  ),
                l(c, s))
              ) {
                let t = s.prototype.symbols;
                (u = t.arc),
                  (g = t.roundedRect),
                  (t.arc = f),
                  (t.roundedRect = b);
              }
            },
            optionsToObject: x,
          };
        }
      ),
      i(e, "Core/Responsive.js", [e["Core/Utilities.js"]], function (t) {
        var e;
        let {
          diffObjects: i,
          extend: s,
          find: o,
          isArray: r,
          isObject: n,
          merge: a,
          objectEach: h,
          pick: l,
          splat: d,
          uniqueKey: c,
        } = t;
        return (
          (function (e) {
            let r = [];
            function n(t, e) {
              let i = t.condition,
                s =
                  i.callback ||
                  function () {
                    return (
                      this.chartWidth <= l(i.maxWidth, Number.MAX_VALUE) &&
                      this.chartHeight <= l(i.maxHeight, Number.MAX_VALUE) &&
                      this.chartWidth >= l(i.minWidth, 0) &&
                      this.chartHeight >= l(i.minHeight, 0)
                    );
                  };
              s.call(this) && e.push(t._id);
            }
            function h(t, e) {
              let s = this.options.responsive,
                r = this.currentResponsive,
                n = [],
                h;
              !e &&
                s &&
                s.rules &&
                s.rules.forEach((t) => {
                  void 0 === t._id && (t._id = c()),
                    this.matchResponsiveRule(t, n);
                }, this);
              let l = a(
                ...n
                  .map((t) => o((s || {}).rules || [], (e) => e._id === t))
                  .map((t) => t && t.chartOptions)
              );
              (l.isResponsiveOptions = !0), (n = n.toString() || void 0);
              let d = r && r.ruleIds;
              n !== d &&
                (r && this.update(r.undoOptions, t, !0),
                n
                  ? (((h = i(
                      l,
                      this.options,
                      !0,
                      this.collectionsWithUpdate
                    )).isResponsiveOptions = !0),
                    (this.currentResponsive = {
                      ruleIds: n,
                      mergedOptions: l,
                      undoOptions: h,
                    }),
                    this.update(l, t, !0))
                  : (this.currentResponsive = void 0));
            }
            e.compose = function (e) {
              return (
                t.pushUnique(r, e) &&
                  s(e.prototype, { matchResponsiveRule: n, setResponsive: h }),
                e
              );
            };
          })(e || (e = {})),
          e
        );
      }),
      i(
        e,
        "masters/highcharts.src.js",
        [
          e["Core/Globals.js"],
          e["Core/Utilities.js"],
          e["Core/Defaults.js"],
          e["Core/Animation/Fx.js"],
          e["Core/Animation/AnimationUtilities.js"],
          e["Core/Renderer/HTML/AST.js"],
          e["Core/Templating.js"],
          e["Core/Renderer/RendererUtilities.js"],
          e["Core/Renderer/SVG/SVGElement.js"],
          e["Core/Renderer/SVG/SVGRenderer.js"],
          e["Core/Renderer/HTML/HTMLElement.js"],
          e["Core/Renderer/HTML/HTMLRenderer.js"],
          e["Core/Axis/Axis.js"],
          e["Core/Axis/DateTimeAxis.js"],
          e["Core/Axis/LogarithmicAxis.js"],
          e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
          e["Core/Axis/Tick.js"],
          e["Core/Tooltip.js"],
          e["Core/Series/Point.js"],
          e["Core/Pointer.js"],
          e["Core/Legend/Legend.js"],
          e["Core/Chart/Chart.js"],
          e["Core/Axis/Stacking/StackingAxis.js"],
          e["Core/Axis/Stacking/StackItem.js"],
          e["Core/Series/Series.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Series/Column/ColumnSeries.js"],
          e["Series/Column/ColumnDataLabel.js"],
          e["Series/Pie/PieSeries.js"],
          e["Series/Pie/PieDataLabel.js"],
          e["Core/Series/DataLabel.js"],
          e["Extensions/OverlappingDataLabels.js"],
          e["Extensions/BorderRadius.js"],
          e["Core/Responsive.js"],
          e["Core/Color/Color.js"],
          e["Core/Time.js"],
        ],
        function (
          t,
          e,
          i,
          s,
          o,
          r,
          n,
          a,
          h,
          l,
          d,
          c,
          p,
          u,
          g,
          f,
          m,
          x,
          y,
          b,
          v,
          k,
          S,
          M,
          C,
          w,
          T,
          A,
          P,
          L,
          O,
          D,
          E,
          I,
          B,
          j
        ) {
          return (
            (t.animate = o.animate),
            (t.animObject = o.animObject),
            (t.getDeferredAnimation = o.getDeferredAnimation),
            (t.setAnimation = o.setAnimation),
            (t.stop = o.stop),
            (t.timers = s.timers),
            (t.AST = r),
            (t.Axis = p),
            (t.Chart = k),
            (t.chart = k.chart),
            (t.Fx = s),
            (t.Legend = v),
            (t.PlotLineOrBand = f),
            (t.Point = y),
            (t.Pointer = b),
            (t.Series = C),
            (t.StackItem = M),
            (t.SVGElement = h),
            (t.SVGRenderer = l),
            (t.Templating = n),
            (t.Tick = m),
            (t.Time = j),
            (t.Tooltip = x),
            (t.Color = B),
            (t.color = B.parse),
            c.compose(l),
            d.compose(h),
            b.compose(k),
            v.compose(k),
            (t.defaultOptions = i.defaultOptions),
            (t.getOptions = i.getOptions),
            (t.time = i.defaultTime),
            (t.setOptions = i.setOptions),
            (t.dateFormat = n.dateFormat),
            (t.format = n.format),
            (t.numberFormat = n.numberFormat),
            e.extend(t, e),
            (t.distribute = a.distribute),
            (t.seriesType = w.seriesType),
            A.compose(T),
            E.compose(C, P, h, l),
            O.compose(C),
            u.compose(p),
            g.compose(p),
            D.compose(k),
            L.compose(P),
            f.compose(p),
            I.compose(k),
            S.compose(p, k, C),
            x.compose(b),
            t
          );
        }
      ),
      (e["masters/highcharts.src.js"]._modules = e),
      e["masters/highcharts.src.js"]
    );
  }); //# sourceMappingURL=highcharts.js.map

  //bullet Chart
  /**
   * Highcharts JS v11.2.0 (2023-10-30)
   *
   * Bullet graph series type for Highcharts
   *
   * (c) 2010-2021 Kacper Madej
   *
   * License: www.highcharts.com/license
   */ !(function (t) {
    "object" == typeof module && module.exports
      ? ((t.default = t), (module.exports = t))
      : "function" == typeof define && define.amd
      ? define("highcharts/modules/bullet", ["highcharts"], function (e) {
          return t(e), (t.Highcharts = e), t;
        })
      : t("undefined" != typeof Highcharts ? Highcharts : void 0);
  })(function (t) {
    "use strict";
    var e = t ? t._modules : {};
    function i(t, e, i, r) {
      t.hasOwnProperty(e) ||
        ((t[e] = r.apply(null, i)),
        "function" == typeof CustomEvent &&
          window.dispatchEvent(
            new CustomEvent("HighchartsModuleLoaded", {
              detail: { path: e, module: t[e] },
            })
          ));
    }
    i(
      e,
      "Series/Bullet/BulletPoint.js",
      [e["Series/Column/ColumnSeries.js"]],
      function (t) {
        class e extends t.prototype.pointClass {
          constructor() {
            super(...arguments),
              (this.options = void 0),
              (this.series = void 0);
          }
          destroy() {
            this.targetGraphic &&
              (this.targetGraphic = this.targetGraphic.destroy()),
              super.destroy.apply(this, arguments);
          }
        }
        return e;
      }
    ),
      i(e, "Series/Bullet/BulletSeriesDefaults.js", [], function () {
        return {
          targetOptions: {
            width: "140%",
            height: 3,
            borderWidth: 0,
            borderRadius: 0,
          },
          tooltip: {
            pointFormat:
              '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b>. Target: <b>{point.target}</b><br/>',
          },
        };
      }),
      i(
        e,
        "Series/Bullet/BulletSeries.js",
        [
          e["Series/Bullet/BulletPoint.js"],
          e["Series/Bullet/BulletSeriesDefaults.js"],
          e["Series/Column/ColumnSeries.js"],
          e["Core/Series/SeriesRegistry.js"],
          e["Core/Utilities.js"],
        ],
        function (t, e, i, r, s) {
          let {
            extend: o,
            isNumber: a,
            merge: l,
            pick: n,
            relativeLength: d,
          } = s;
          class h extends i {
            constructor() {
              super(...arguments),
                (this.data = void 0),
                (this.options = void 0),
                (this.points = void 0),
                (this.targetData = void 0);
            }
            drawPoints() {
              let t = this.chart,
                e = this.options,
                i = e.animationLimit || 250;
              for (let r of (super.drawPoints.apply(this, arguments),
              this.points)) {
                let s = r.options,
                  o = r.target,
                  h = r.y,
                  p,
                  u = r.targetGraphic,
                  c,
                  g,
                  m,
                  f;
                if (a(o) && null !== o) {
                  g = (m = l(e.targetOptions, s.targetOptions)).height;
                  let y = r.shapeArgs;
                  r.dlBox && y && !a(y.width) && (y = r.dlBox),
                    (c = d(m.width, y.width)),
                    (f =
                      this.yAxis.translate(o, !1, !0, !1, !0) -
                      m.height / 2 -
                      0.5),
                    (p = this.crispCol.apply(
                      {
                        chart: t,
                        borderWidth: m.borderWidth,
                        options: { crisp: e.crisp },
                      },
                      [y.x + y.width / 2 - c / 2, f, c, g]
                    )),
                    u
                      ? (u[t.pointCount < i ? "animate" : "attr"](p),
                        a(h) && null !== h
                          ? (u.element.point = r)
                          : (u.element.point = void 0))
                      : (r.targetGraphic = u =
                          t.renderer.rect().attr(p).add(this.group)),
                    t.styledMode ||
                      u.attr({
                        fill: n(
                          m.color,
                          s.color,
                          (this.zones.length &&
                            (r.getZone.call({
                              series: this,
                              x: r.x,
                              y: o,
                              options: {},
                            }).color ||
                              this.color)) ||
                            void 0,
                          r.color,
                          this.color
                        ),
                        stroke: n(
                          m.borderColor,
                          r.borderColor,
                          this.options.borderColor
                        ),
                        "stroke-width": m.borderWidth,
                        r: m.borderRadius,
                      }),
                    a(h) && null !== h && (u.element.point = r),
                    u.addClass(
                      r.getClassName() + " highcharts-bullet-target",
                      !0
                    );
                } else u && (r.targetGraphic = u.destroy());
              }
            }
            getExtremes(t) {
              let e = super.getExtremes.call(this, t),
                i = this.targetData;
              if (i && i.length) {
                let t = super.getExtremes.call(this, i);
                a(t.dataMin) &&
                  (e.dataMin = Math.min(n(e.dataMin, 1 / 0), t.dataMin)),
                  a(t.dataMax) &&
                    (e.dataMax = Math.max(n(e.dataMax, -1 / 0), t.dataMax));
              }
              return e;
            }
          }
          return (
            (h.defaultOptions = l(i.defaultOptions, e)),
            o(h.prototype, {
              parallelArrays: ["x", "y", "target"],
              pointArrayMap: ["y", "target"],
            }),
            (h.prototype.pointClass = t),
            r.registerSeriesType("bullet", h),
            h
          );
        }
      ),
      i(e, "masters/modules/bullet.src.js", [], function () {});
  }); //# sourceMappingURL=bullet.js.map

  //Chart Settings

  Highcharts.setOptions({
    chart: {
      inverted: true,
      marginLeft: 1,
      type: "bullet",
    },
    title: {
      text: null,
    },
    legend: {
      enabled: false,
    },
    dataLabels: [
      {
        enabled: true,
        inside: true,
      },
      {
        enabled: true,
        formatter() {
          //console.log(this)
          return this.point.target;
        },
      },
    ],
    yAxis: {
      gridLineWidth: 0,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          strokeWidth: 0,
        },
        pointPadding: 0.25,
        borderWidth: 3,
        color: "#dac0e0",
        borderColor: "#dac0e0",
        borderRadius: 10,
        targetOptions: {
          width: "180%",
          height: 18,
          borderWidth: 0,
          borderRadius: 10,
          color: "#000000",
          borderColor: "#000000",
          text: "45",
          textColor: "#ffffff",
        },
      },
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
  });

  Highcharts.chart("container1", {
    xAxis: {
      // categories: ['<span class="hc-cat-title">Profit</span><br/>%'],
    },
    yAxis: {
      plotBands: [
        {
          from: 0,
          to: 40,
          color: "#e8efff",
        },
        {
          from: 40,
          to: 50,
          color: "#a1c0ff",
        },
        {
          from: 50,
          to: 65,
          color: "#508eff",
        },
        {
          from: 65,
          to: 100,
          color: "#0059ff",
        },
      ],
      labels: {
        format: "{value}%",
      },
      title: null,
    },
    series: [
      {
        data: [
          {
            y: 70,
            target: 85,
            display: true,
          },
        ],
        animation: {
          duration: 0,
        },
      },
    ],
    tooltip: {
      pointFormat: "<b>{point.y}</b> (with target at {point.target})",
    },
  });

  Highcharts.chart("container2", {
    xAxis: {
      // categories: ['<span class="hc-cat-title">Profit</span><br/>%'],
    },
    yAxis: {
      plotBands: [
        {
          from: 0,
          to: 40,
          color: "#e8efff",
        },
        {
          from: 40,
          to: 50,
          color: "#a1c0ff",
        },
        {
          from: 50,
          to: 65,
          color: "#508eff",
        },
        {
          from: 65,
          to: 100,
          color: "#0059ff",
        },
      ],
      labels: {
        format: "{value}%",
      },
      title: null,
    },
    series: [
      {
        data: [
          {
            y: 70,
            target: 85,
            display: true,
          },
        ],
        animation: {
          duration: 0,
        },
      },
    ],
    tooltip: {
      pointFormat: "<b>{point.y}</b> (with target at {point.target})",
    },
  });

  Highcharts.chart("container3", {
    xAxis: {
      // categories: ['<span class="hc-cat-title">Profit</span><br/>%'],
    },
    yAxis: {
      plotBands: [
        {
          from: 0,
          to: 40,
          color: "#e8efff",
        },
        {
          from: 40,
          to: 50,
          color: "#a1c0ff",
        },
        {
          from: 50,
          to: 65,
          color: "#508eff",
        },
        {
          from: 65,
          to: 100,
          color: "#0059ff",
        },
      ],
      labels: {
        format: "{value}%",
      },
      title: null,
    },
    series: [
      {
        data: [
          {
            y: 70,
            target: 85,
            display: true,
          },
        ],
        animation: {
          duration: 0,
        },
      },
    ],
    tooltip: {
      pointFormat: "<b>{point.y}</b> (with target at {point.target})",
    },
  });
});
