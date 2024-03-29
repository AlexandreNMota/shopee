/* single-spa@5.9.0 - SystemJS - prod */
System.register([], function (t) {
  "use strict";
  return {
    execute: function () {
      t({
        addErrorHandler: c,
        checkActivityFunctions: bt,
        ensureJQuerySupport: lt,
        getAppNames: Ot,
        getAppStatus: Tt,
        getMountedApps: yt,
        mountRootParcel: W,
        navigateToUrl: et,
        pathToActiveWhen: Ut,
        registerApplication: Pt,
        removeErrorHandler: s,
        setBootstrapMaxTime: H,
        setMountMaxTime: J,
        setUnloadMaxTime: V,
        setUnmountMaxTime: Q,
        start: Bt,
        triggerAppChange: Lt,
        unloadApplication: Nt,
        unregisterApplication: At,
      });
      var n = Object.freeze({
        __proto__: null,
        get start() {
          return Bt;
        },
        get ensureJQuerySupport() {
          return lt;
        },
        get setBootstrapMaxTime() {
          return H;
        },
        get setMountMaxTime() {
          return J;
        },
        get setUnmountMaxTime() {
          return Q;
        },
        get setUnloadMaxTime() {
          return V;
        },
        get registerApplication() {
          return Pt;
        },
        get unregisterApplication() {
          return At;
        },
        get getMountedApps() {
          return yt;
        },
        get getAppStatus() {
          return Tt;
        },
        get unloadApplication() {
          return Nt;
        },
        get checkActivityFunctions() {
          return bt;
        },
        get getAppNames() {
          return Ot;
        },
        get pathToActiveWhen() {
          return Ut;
        },
        get navigateToUrl() {
          return et;
        },
        get triggerAppChange() {
          return Lt;
        },
        get addErrorHandler() {
          return c;
        },
        get removeErrorHandler() {
          return s;
        },
        get mountRootParcel() {
          return W;
        },
        get NOT_LOADED() {
          return p;
        },
        get LOADING_SOURCE_CODE() {
          return h;
        },
        get NOT_BOOTSTRAPPED() {
          return m;
        },
        get BOOTSTRAPPING() {
          return d;
        },
        get NOT_MOUNTED() {
          return v;
        },
        get MOUNTING() {
          return w;
        },
        get UPDATING() {
          return E;
        },
        get LOAD_ERROR() {
          return O;
        },
        get MOUNTED() {
          return g;
        },
        get UNMOUNTING() {
          return y;
        },
        get SKIP_BECAUSE_BROKEN() {
          return T;
        },
      });
      function e(t) {
        return (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      var o = (
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {}
        ).CustomEvent,
        i = (function () {
          try {
            var t = new o("cat", { detail: { foo: "bar" } });
            return "cat" === t.type && "bar" === t.detail.foo;
          } catch (t) {}
          return !1;
        })()
          ? o
          : "undefined" != typeof document &&
            "function" == typeof document.createEvent
          ? function (t, n) {
              var e = document.createEvent("CustomEvent");
              return (
                n
                  ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail)
                  : e.initCustomEvent(t, !1, !1, void 0),
                e
              );
            }
          : function (t, n) {
              var e = document.createEventObject();
              return (
                (e.type = t),
                n
                  ? ((e.bubbles = Boolean(n.bubbles)),
                    (e.cancelable = Boolean(n.cancelable)),
                    (e.detail = n.detail))
                  : ((e.bubbles = !1),
                    (e.cancelable = !1),
                    (e.detail = void 0)),
                e
              );
            },
        u = [];
      function a(t, n, e) {
        var r = l(t, n, e);
        u.length
          ? u.forEach(function (t) {
              return t(r);
            })
          : setTimeout(function () {
              throw r;
            });
      }
      function c(t) {
        if ("function" != typeof t) throw Error(f(28, !1));
        u.push(t);
      }
      function s(t) {
        if ("function" != typeof t) throw Error(f(29, !1));
        var n = !1;
        return (
          (u = u.filter(function (e) {
            var r = e === t;
            return (n = n || r), !r;
          })),
          n
        );
      }
      function f(t, n) {
        for (
          var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2;
          o < e;
          o++
        )
          r[o - 2] = arguments[o];
        return "single-spa minified message #"
          .concat(t, ": ")
          .concat(
            n ? n + " " : "",
            "See https://single-spa.js.org/error/?code="
          )
          .concat(t)
          .concat(r.length ? "&arg=".concat(r.join("&arg=")) : "");
      }
      function l(t, n, e) {
        var r,
          o = ""
            .concat(S(n), " '")
            .concat(A(n), "' died in status ")
            .concat(n.status, ": ");
        if (t instanceof Error) {
          try {
            t.message = o + t.message;
          } catch (t) {}
          r = t;
        } else {
          console.warn(f(30, !1, n.status, A(n)));
          try {
            r = Error(o + JSON.stringify(t));
          } catch (n) {
            r = t;
          }
        }
        return (r.appOrParcelName = A(n)), (n.status = e), r;
      }
      var p = t("NOT_LOADED", "NOT_LOADED"),
        h = t("LOADING_SOURCE_CODE", "LOADING_SOURCE_CODE"),
        m = t("NOT_BOOTSTRAPPED", "NOT_BOOTSTRAPPED"),
        d = t("BOOTSTRAPPING", "BOOTSTRAPPING"),
        v = t("NOT_MOUNTED", "NOT_MOUNTED"),
        w = t("MOUNTING", "MOUNTING"),
        g = t("MOUNTED", "MOUNTED"),
        E = t("UPDATING", "UPDATING"),
        y = t("UNMOUNTING", "UNMOUNTING"),
        O = t("LOAD_ERROR", "LOAD_ERROR"),
        T = t("SKIP_BECAUSE_BROKEN", "SKIP_BECAUSE_BROKEN");
      function P(t) {
        return t.status === g;
      }
      function b(t) {
        try {
          return t.activeWhen(window.location);
        } catch (n) {
          return a(n, t, T), !1;
        }
      }
      function A(t) {
        return t.name;
      }
      function N(t) {
        return Boolean(t.unmountThisParcel);
      }
      function S(t) {
        return N(t) ? "parcel" : "application";
      }
      function _() {
        for (var t = arguments.length - 1; t > 0; t--)
          for (var n in arguments[t])
            "__proto__" !== n && (arguments[t - 1][n] = arguments[t][n]);
        return arguments[0];
      }
      function U(t, n) {
        for (var e = 0; e < t.length; e++) if (n(t[e])) return t[e];
        return null;
      }
      function D(t) {
        return (
          t &&
          ("function" == typeof t ||
            ((n = t),
            Array.isArray(n) &&
              !U(n, function (t) {
                return "function" != typeof t;
              })))
        );
        var n;
      }
      function M(t, n) {
        var e = t[n] || [];
        0 === (e = Array.isArray(e) ? e : [e]).length &&
          (e = [
            function () {
              return Promise.resolve();
            },
          ]);
        var r = S(t),
          o = A(t);
        return function (t) {
          return e.reduce(function (e, i, u) {
            return e.then(function () {
              var e = i(t);
              return j(e) ? e : Promise.reject(f(15, !1, r, o, n, u));
            });
          }, Promise.resolve());
        };
      }
      function j(t) {
        return t && "function" == typeof t.then && "function" == typeof t.catch;
      }
      function L(t, n) {
        return Promise.resolve().then(function () {
          return t.status !== m
            ? t
            : ((t.status = d),
              t.bootstrap
                ? q(t, "bootstrap")
                    .then(e)
                    .catch(function (e) {
                      if (n) throw l(e, t, T);
                      return a(e, t, T), t;
                    })
                : Promise.resolve().then(e));
        });
        function e() {
          return (t.status = v), t;
        }
      }
      function R(t, n) {
        return Promise.resolve().then(function () {
          if (t.status !== g) return t;
          t.status = y;
          var e = Object.keys(t.parcels).map(function (n) {
            return t.parcels[n].unmountThisParcel();
          });
          return Promise.all(e)
            .then(r, function (e) {
              return r().then(function () {
                var r = Error(e.message);
                if (n) throw l(r, t, T);
                a(r, t, T);
              });
            })
            .then(function () {
              return t;
            });
          function r() {
            return q(t, "unmount")
              .then(function () {
                t.status = v;
              })
              .catch(function (e) {
                if (n) throw l(e, t, T);
                a(e, t, T);
              });
          }
        });
      }
      var I = !1,
        x = !1;
      function B(t, n) {
        return Promise.resolve().then(function () {
          return t.status !== v
            ? t
            : (I ||
                (window.dispatchEvent(new i("single-spa:before-first-mount")),
                (I = !0)),
              q(t, "mount")
                .then(function () {
                  return (
                    (t.status = g),
                    x ||
                      (window.dispatchEvent(new i("single-spa:first-mount")),
                      (x = !0)),
                    t
                  );
                })
                .catch(function (e) {
                  return (t.status = g), R(t, !0).then(r, r);
                  function r() {
                    if (n) throw l(e, t, T);
                    return a(e, t, T), t;
                  }
                }));
        });
      }
      var G = 0,
        C = { parcels: {} };
      function W() {
        return $.apply(C, arguments);
      }
      function $(t, n) {
        var r = this;
        if (!t || ("object" !== e(t) && "function" != typeof t))
          throw Error(f(2, !1));
        if (t.name && "string" != typeof t.name)
          throw Error(f(3, !1, e(t.name)));
        if ("object" !== e(n)) throw Error(f(4, !1, name, e(n)));
        if (!n.domElement) throw Error(f(5, !1, name));
        var o,
          i = G++,
          u = "function" == typeof t,
          a = u
            ? t
            : function () {
                return Promise.resolve(t);
              },
          c = {
            id: i,
            parcels: {},
            status: u ? h : m,
            customProps: n,
            parentName: A(r),
            unmountThisParcel: function () {
              return y
                .then(function () {
                  if (c.status !== g) throw Error(f(6, !1, name, c.status));
                  return R(c, !0);
                })
                .then(function (t) {
                  return c.parentName && delete r.parcels[c.id], t;
                })
                .then(function (t) {
                  return p(t), t;
                })
                .catch(function (t) {
                  throw ((c.status = T), d(t), t);
                });
            },
          };
        r.parcels[i] = c;
        var s = a();
        if (!s || "function" != typeof s.then) throw Error(f(7, !1));
        var p,
          d,
          w = (s = s.then(function (t) {
            if (!t) throw Error(f(8, !1));
            var n = t.name || "parcel-".concat(i);
            if (
              Object.prototype.hasOwnProperty.call(t, "bootstrap") &&
              !D(t.bootstrap)
            )
              throw Error(f(9, !1, n));
            if (!D(t.mount)) throw Error(f(10, !1, n));
            if (!D(t.unmount)) throw Error(f(11, !1, n));
            if (t.update && !D(t.update)) throw Error(f(12, !1, n));
            var e = M(t, "bootstrap"),
              r = M(t, "mount"),
              u = M(t, "unmount");
            (c.status = m),
              (c.name = n),
              (c.bootstrap = e),
              (c.mount = r),
              (c.unmount = u),
              (c.timeouts = z(t.timeouts)),
              t.update &&
                ((c.update = M(t, "update")),
                (o.update = function (t) {
                  return (
                    (c.customProps = t),
                    k(
                      (function (t) {
                        return Promise.resolve().then(function () {
                          if (t.status !== g) throw Error(f(32, !1, A(t)));
                          return (
                            (t.status = E),
                            q(t, "update")
                              .then(function () {
                                return (t.status = g), t;
                              })
                              .catch(function (n) {
                                throw l(n, t, T);
                              })
                          );
                        });
                      })(c)
                    )
                  );
                }));
          })).then(function () {
            return L(c, !0);
          }),
          y = w.then(function () {
            return B(c, !0);
          }),
          O = new Promise(function (t, n) {
            (p = t), (d = n);
          });
        return (o = {
          mount: function () {
            return k(
              Promise.resolve().then(function () {
                if (c.status !== v) throw Error(f(13, !1, name, c.status));
                return (r.parcels[i] = c), B(c);
              })
            );
          },
          unmount: function () {
            return k(c.unmountThisParcel());
          },
          getStatus: function () {
            return c.status;
          },
          loadPromise: k(s),
          bootstrapPromise: k(w),
          mountPromise: k(y),
          unmountPromise: k(O),
        });
      }
      function k(t) {
        return t.then(function () {
          return null;
        });
      }
      function K(t) {
        var r = A(t),
          o =
            "function" == typeof t.customProps
              ? t.customProps(r, window.location)
              : t.customProps;
        ("object" !== e(o) || null === o || Array.isArray(o)) &&
          ((o = {}), console.warn(f(40, !1), r, o));
        var i = _({}, o, { name: r, mountParcel: $.bind(t), singleSpa: n });
        return N(t) && (i.unmountSelf = t.unmountThisParcel), i;
      }
      var F = {
        bootstrap: { millis: 4e3, dieOnTimeout: !1, warningMillis: 1e3 },
        mount: { millis: 3e3, dieOnTimeout: !1, warningMillis: 1e3 },
        unmount: { millis: 3e3, dieOnTimeout: !1, warningMillis: 1e3 },
        unload: { millis: 3e3, dieOnTimeout: !1, warningMillis: 1e3 },
        update: { millis: 3e3, dieOnTimeout: !1, warningMillis: 1e3 },
      };
      function H(t, n, e) {
        if ("number" != typeof t || t <= 0) throw Error(f(16, !1));
        F.bootstrap = { millis: t, dieOnTimeout: n, warningMillis: e || 1e3 };
      }
      function J(t, n, e) {
        if ("number" != typeof t || t <= 0) throw Error(f(17, !1));
        F.mount = { millis: t, dieOnTimeout: n, warningMillis: e || 1e3 };
      }
      function Q(t, n, e) {
        if ("number" != typeof t || t <= 0) throw Error(f(18, !1));
        F.unmount = { millis: t, dieOnTimeout: n, warningMillis: e || 1e3 };
      }
      function V(t, n, e) {
        if ("number" != typeof t || t <= 0) throw Error(f(19, !1));
        F.unload = { millis: t, dieOnTimeout: n, warningMillis: e || 1e3 };
      }
      function q(t, n) {
        var e = t.timeouts[n],
          r = e.warningMillis,
          o = S(t);
        return new Promise(function (i, u) {
          var a = !1,
            c = !1;
          t[n](K(t))
            .then(function (t) {
              (a = !0), i(t);
            })
            .catch(function (t) {
              (a = !0), u(t);
            }),
            setTimeout(function () {
              return l(1);
            }, r),
            setTimeout(function () {
              return l(!0);
            }, e.millis);
          var s = f(31, !1, n, o, A(t), e.millis);
          function l(t) {
            if (!a)
              if (!0 === t)
                (c = !0), e.dieOnTimeout ? u(Error(s)) : console.error(s);
              else if (!c) {
                var n = t,
                  o = n * r;
                console.warn(s),
                  o + r < e.millis &&
                    setTimeout(function () {
                      return l(n + 1);
                    }, r);
              }
          }
        });
      }
      function z(t) {
        var n = {};
        for (var e in F) n[e] = _({}, F[e], (t && t[e]) || {});
        return n;
      }
      function X(t) {
        return Promise.resolve().then(function () {
          return t.loadPromise
            ? t.loadPromise
            : t.status !== p && t.status !== O
            ? t
            : ((t.status = h),
              (t.loadPromise = Promise.resolve()
                .then(function () {
                  var o = t.loadApp(K(t));
                  if (!j(o)) throw ((r = !0), Error(f(33, !1, A(t))));
                  return o.then(function (r) {
                    var o;
                    (t.loadErrorTime = null),
                      "object" !== e((n = r)) && (o = 34),
                      Object.prototype.hasOwnProperty.call(n, "bootstrap") &&
                        !D(n.bootstrap) &&
                        (o = 35),
                      D(n.mount) || (o = 36),
                      D(n.unmount) || (o = 37);
                    var i = S(n);
                    if (o) {
                      var u;
                      try {
                        u = JSON.stringify(n);
                      } catch (t) {}
                      return (
                        console.error(f(o, !1, i, A(t), u), n),
                        a(void 0, t, T),
                        t
                      );
                    }
                    return (
                      n.devtools &&
                        n.devtools.overlays &&
                        (t.devtools.overlays = _(
                          {},
                          t.devtools.overlays,
                          n.devtools.overlays
                        )),
                      (t.status = m),
                      (t.bootstrap = M(n, "bootstrap")),
                      (t.mount = M(n, "mount")),
                      (t.unmount = M(n, "unmount")),
                      (t.unload = M(n, "unload")),
                      (t.timeouts = z(n.timeouts)),
                      delete t.loadPromise,
                      t
                    );
                  });
                })
                .catch(function (n) {
                  var e;
                  return (
                    delete t.loadPromise,
                    r
                      ? (e = T)
                      : ((e = O), (t.loadErrorTime = new Date().getTime())),
                    a(n, t, e),
                    t
                  );
                })));
          var n, r;
        });
      }
      var Y,
        Z = "undefined" != typeof window,
        tt = { hashchange: [], popstate: [] },
        nt = ["hashchange", "popstate"];
      function et(t) {
        var n;
        if ("string" == typeof t) n = t;
        else if (this && this.href) n = this.href;
        else {
          if (
            !(t && t.currentTarget && t.currentTarget.href && t.preventDefault)
          )
            throw Error(f(14, !1));
          (n = t.currentTarget.href), t.preventDefault();
        }
        var e = st(window.location.href),
          r = st(n);
        0 === n.indexOf("#")
          ? (window.location.hash = r.hash)
          : e.host !== r.host && r.host
          ? (window.location.href = n)
          : r.pathname === e.pathname && r.search === e.search
          ? (window.location.hash = r.hash)
          : window.history.pushState(null, null, n);
      }
      function rt(t) {
        var n = this;
        if (t) {
          var e = t[0].type;
          nt.indexOf(e) >= 0 &&
            tt[e].forEach(function (e) {
              try {
                e.apply(n, t);
              } catch (t) {
                setTimeout(function () {
                  throw t;
                });
              }
            });
        }
      }
      function ot() {
        Rt([], arguments);
      }
      function it(t, n) {
        return function () {
          var e = window.location.href,
            r = t.apply(this, arguments),
            o = window.location.href;
          return (
            (Y && e === o) ||
              (Gt()
                ? window.dispatchEvent(ut(window.history.state, n))
                : Rt([])),
            r
          );
        };
      }
      function ut(t, n) {
        var e;
        try {
          e = new PopStateEvent("popstate", { state: t });
        } catch (n) {
          (e = document.createEvent("PopStateEvent")).initPopStateEvent(
            "popstate",
            !1,
            !1,
            t
          );
        }
        return (e.singleSpa = !0), (e.singleSpaTrigger = n), e;
      }
      if (Z) {
        window.addEventListener("hashchange", ot),
          window.addEventListener("popstate", ot);
        var at = window.addEventListener,
          ct = window.removeEventListener;
        (window.addEventListener = function (t, n) {
          if (
            !("function" == typeof n && nt.indexOf(t) >= 0) ||
            U(tt[t], function (t) {
              return t === n;
            })
          )
            return at.apply(this, arguments);
          tt[t].push(n);
        }),
          (window.removeEventListener = function (t, n) {
            if (!("function" == typeof n && nt.indexOf(t) >= 0))
              return ct.apply(this, arguments);
            tt[t] = tt[t].filter(function (t) {
              return t !== n;
            });
          }),
          (window.history.pushState = it(
            window.history.pushState,
            "pushState"
          )),
          (window.history.replaceState = it(
            window.history.replaceState,
            "replaceState"
          )),
          window.singleSpaNavigate
            ? console.warn(f(41, !1))
            : (window.singleSpaNavigate = et);
      }
      function st(t) {
        var n = document.createElement("a");
        return (n.href = t), n;
      }
      var ft = !1;
      function lt() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window.jQuery;
        if (
          (t ||
            (window.$ && window.$.fn && window.$.fn.jquery && (t = window.$)),
          t && !ft)
        ) {
          var n = t.fn.on,
            e = t.fn.off;
          (t.fn.on = function (t, e) {
            return pt.call(this, n, window.addEventListener, t, e, arguments);
          }),
            (t.fn.off = function (t, n) {
              return pt.call(
                this,
                e,
                window.removeEventListener,
                t,
                n,
                arguments
              );
            }),
            (ft = !0);
        }
      }
      function pt(t, n, e, r, o) {
        return "string" != typeof e
          ? t.apply(this, o)
          : (e.split(/\s+/).forEach(function (t) {
              nt.indexOf(t) >= 0 && (n(t, r), (e = e.replace(t, "")));
            }),
            "" === e.trim() ? this : t.apply(this, o));
      }
      var ht = {};
      function mt(t) {
        return Promise.resolve().then(function () {
          var n = ht[A(t)];
          return n
            ? t.status === p
              ? (dt(t, n), t)
              : "UNLOADING" === t.status
              ? n.promise.then(function () {
                  return t;
                })
              : t.status !== v
              ? t
              : ((t.status = "UNLOADING"),
                q(t, "unload")
                  .then(function () {
                    return dt(t, n), t;
                  })
                  .catch(function (e) {
                    return (
                      (function (t, n, e) {
                        delete ht[A(t)],
                          delete t.bootstrap,
                          delete t.mount,
                          delete t.unmount,
                          delete t.unload,
                          a(e, t, T),
                          n.reject(e);
                      })(t, n, e),
                      t
                    );
                  }))
            : t;
        });
      }
      function dt(t, n) {
        delete ht[A(t)],
          delete t.bootstrap,
          delete t.mount,
          delete t.unmount,
          delete t.unload,
          (t.status = p),
          n.resolve();
      }
      function vt(t, n, e, r) {
        (ht[A(t)] = { app: t, resolve: e, reject: r }),
          Object.defineProperty(ht[A(t)], "promise", { get: n });
      }
      function wt(t) {
        return ht[t];
      }
      var gt = [];
      function Et() {
        var t = [],
          n = [],
          e = [],
          r = [],
          o = new Date().getTime();
        return (
          gt.forEach(function (i) {
            var u = i.status !== T && b(i);
            switch (i.status) {
              case O:
                u && o - i.loadErrorTime >= 200 && e.push(i);
                break;
              case p:
              case h:
                u && e.push(i);
                break;
              case m:
              case v:
                !u && wt(A(i)) ? t.push(i) : u && r.push(i);
                break;
              case g:
                u || n.push(i);
            }
          }),
          { appsToUnload: t, appsToUnmount: n, appsToLoad: e, appsToMount: r }
        );
      }
      function yt() {
        return gt.filter(P).map(A);
      }
      function Ot() {
        return gt.map(A);
      }
      function Tt(t) {
        var n = U(gt, function (n) {
          return A(n) === t;
        });
        return n ? n.status : null;
      }
      function Pt(t, n, r, o) {
        var i = (function (t, n, r, o) {
          var i,
            u = {
              name: null,
              loadApp: null,
              activeWhen: null,
              customProps: null,
            };
          return (
            "object" === e(t)
              ? ((function (t) {
                  if (Array.isArray(t) || null === t) throw Error(f(39, !1));
                  var n = ["name", "app", "activeWhen", "customProps"],
                    r = Object.keys(t).reduce(function (t, e) {
                      return n.indexOf(e) >= 0 ? t : t.concat(e);
                    }, []);
                  if (0 !== r.length)
                    throw Error(f(38, !1, n.join(", "), r.join(", ")));
                  if ("string" != typeof t.name || 0 === t.name.length)
                    throw Error(f(20, !1));
                  if ("object" !== e(t.app) && "function" != typeof t.app)
                    throw Error(f(20, !1));
                  var o = function (t) {
                    return "string" == typeof t || "function" == typeof t;
                  };
                  if (
                    !(
                      o(t.activeWhen) ||
                      (Array.isArray(t.activeWhen) && t.activeWhen.every(o))
                    )
                  )
                    throw Error(f(24, !1));
                  if (!_t(t.customProps)) throw Error(f(22, !1));
                })(t),
                (u.name = t.name),
                (u.loadApp = t.app),
                (u.activeWhen = t.activeWhen),
                (u.customProps = t.customProps))
              : ((function (t, n, e, r) {
                  if ("string" != typeof t || 0 === t.length)
                    throw Error(f(20, !1));
                  if (!n) throw Error(f(23, !1));
                  if ("function" != typeof e) throw Error(f(24, !1));
                  if (!_t(r)) throw Error(f(22, !1));
                })(t, n, r, o),
                (u.name = t),
                (u.loadApp = n),
                (u.activeWhen = r),
                (u.customProps = o)),
            (u.loadApp =
              "function" != typeof (i = u.loadApp)
                ? function () {
                    return Promise.resolve(i);
                  }
                : i),
            (u.customProps = (function (t) {
              return t || {};
            })(u.customProps)),
            (u.activeWhen = (function (t) {
              var n = Array.isArray(t) ? t : [t];
              return (
                (n = n.map(function (t) {
                  return "function" == typeof t ? t : Ut(t);
                })),
                function (t) {
                  return n.some(function (n) {
                    return n(t);
                  });
                }
              );
            })(u.activeWhen)),
            u
          );
        })(t, n, r, o);
        if (-1 !== Ot().indexOf(i.name)) throw Error(f(21, !1, i.name));
        gt.push(
          _(
            {
              loadErrorTime: null,
              status: p,
              parcels: {},
              devtools: { overlays: { options: {}, selectors: [] } },
            },
            i
          )
        ),
          Z && (lt(), Rt());
      }
      function bt() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window.location;
        return gt
          .filter(function (n) {
            return n.activeWhen(t);
          })
          .map(A);
      }
      function At(t) {
        if (
          0 ===
          gt.filter(function (n) {
            return A(n) === t;
          }).length
        )
          throw Error(f(25, !1, t));
        return Nt(t).then(function () {
          var n = gt.map(A).indexOf(t);
          gt.splice(n, 1);
        });
      }
      function Nt(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { waitForUnmount: !1 };
        if ("string" != typeof t) throw Error(f(26, !1));
        var e = U(gt, function (n) {
          return A(n) === t;
        });
        if (!e) throw Error(f(27, !1, t));
        var r,
          o = wt(A(e));
        if (n && n.waitForUnmount) {
          if (o) return o.promise;
          var i = new Promise(function (t, n) {
            vt(
              e,
              function () {
                return i;
              },
              t,
              n
            );
          });
          return i;
        }
        return (
          o
            ? ((r = o.promise), St(e, o.resolve, o.reject))
            : (r = new Promise(function (t, n) {
                vt(
                  e,
                  function () {
                    return r;
                  },
                  t,
                  n
                ),
                  St(e, t, n);
              })),
          r
        );
      }
      function St(t, n, e) {
        R(t)
          .then(mt)
          .then(function () {
            n(),
              setTimeout(function () {
                Rt();
              });
          })
          .catch(e);
      }
      function _t(t) {
        return (
          !t ||
          "function" == typeof t ||
          ("object" === e(t) && null !== t && !Array.isArray(t))
        );
      }
      function Ut(t, n) {
        var e = (function (t, n) {
          var e = 0,
            r = !1,
            o = "^";
          "/" !== t[0] && (t = "/" + t);
          for (var i = 0; i < t.length; i++) {
            var u = t[i];
            ((!r && ":" === u) || (r && "/" === u)) && a(i);
          }
          return a(t.length), new RegExp(o, "i");
          function a(i) {
            var u = t.slice(e, i).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
            if (((o += r ? "[^/]+/?" : u), i === t.length))
              if (r) n && (o += "$");
              else {
                var a = n ? "" : ".*";
                o =
                  "/" === o.charAt(o.length - 1)
                    ? "".concat(o).concat(a, "$")
                    : "".concat(o, "(/").concat(a, ")?(#.*)?$");
              }
            (r = !r), (e = i);
          }
        })(t, n);
        return function (t) {
          var n = t.href
            .replace(t.origin, "")
            .replace(t.search, "")
            .split("?")[0];
          return e.test(n);
        };
      }
      var Dt = !1,
        Mt = [],
        jt = Z && window.location.href;
      function Lt() {
        return Rt();
      }
      function Rt() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 ? arguments[1] : void 0;
        if (Dt)
          return new Promise(function (t, e) {
            Mt.push({ resolve: t, reject: e, eventArguments: n });
          });
        var e,
          o = Et(),
          u = o.appsToUnload,
          a = o.appsToUnmount,
          c = o.appsToLoad,
          s = o.appsToMount,
          f = !1,
          l = jt,
          h = (jt = window.location.href);
        return Gt()
          ? ((Dt = !0), (e = u.concat(c, a, s)), w())
          : ((e = c), d());
        function m() {
          f = !0;
        }
        function d() {
          return Promise.resolve().then(function () {
            var t = c.map(X);
            return Promise.all(t)
              .then(y)
              .then(function () {
                return [];
              })
              .catch(function (t) {
                throw (y(), t);
              });
          });
        }
        function w() {
          return Promise.resolve().then(function () {
            if (
              (window.dispatchEvent(
                new i(
                  0 === e.length
                    ? "single-spa:before-no-app-change"
                    : "single-spa:before-app-change",
                  O(!0)
                )
              ),
              window.dispatchEvent(
                new i(
                  "single-spa:before-routing-event",
                  O(!0, { cancelNavigation: m })
                )
              ),
              f)
            )
              return (
                window.dispatchEvent(
                  new i("single-spa:before-mount-routing-event", O(!0))
                ),
                E(),
                void et(l)
              );
            var n = u.map(mt),
              r = a
                .map(R)
                .map(function (t) {
                  return t.then(mt);
                })
                .concat(n),
              o = Promise.all(r);
            o.then(function () {
              window.dispatchEvent(
                new i("single-spa:before-mount-routing-event", O(!0))
              );
            });
            var p = c.map(function (t) {
                return X(t).then(function (t) {
                  return It(t, o);
                });
              }),
              h = s
                .filter(function (t) {
                  return c.indexOf(t) < 0;
                })
                .map(function (t) {
                  return It(t, o);
                });
            return o
              .catch(function (t) {
                throw (y(), t);
              })
              .then(function () {
                return (
                  y(),
                  Promise.all(p.concat(h))
                    .catch(function (n) {
                      throw (
                        (t.forEach(function (t) {
                          return t.reject(n);
                        }),
                        n)
                      );
                    })
                    .then(E)
                );
              });
          });
        }
        function E() {
          var n = yt();
          t.forEach(function (t) {
            return t.resolve(n);
          });
          try {
            var r =
              0 === e.length
                ? "single-spa:no-app-change"
                : "single-spa:app-change";
            window.dispatchEvent(new i(r, O())),
              window.dispatchEvent(new i("single-spa:routing-event", O()));
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
          if (((Dt = !1), Mt.length > 0)) {
            var o = Mt;
            (Mt = []), Rt(o);
          }
          return n;
        }
        function y() {
          t.forEach(function (t) {
            rt(t.eventArguments);
          }),
            rt(n);
        }
        function O() {
          var t,
            o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = arguments.length > 1 ? arguments[1] : void 0,
            m = {},
            d = (r((t = {}), g, []), r(t, v, []), r(t, p, []), r(t, T, []), t);
          o
            ? (c.concat(s).forEach(function (t, n) {
                E(t, g);
              }),
              u.forEach(function (t) {
                E(t, p);
              }),
              a.forEach(function (t) {
                E(t, v);
              }))
            : e.forEach(function (t) {
                E(t);
              });
          var w = {
            detail: {
              newAppStatuses: m,
              appsByNewStatus: d,
              totalAppChanges: e.length,
              originalEvent: null == n ? void 0 : n[0],
              oldUrl: l,
              newUrl: h,
              navigationIsCanceled: f,
            },
          };
          return i && _(w.detail, i), w;
          function E(t, n) {
            var e = A(t);
            (n = n || Tt(e)), (m[e] = n), (d[n] = d[n] || []).push(e);
          }
        }
      }
      function It(t, n) {
        return b(t)
          ? L(t).then(function (t) {
              return n.then(function () {
                return b(t) ? B(t) : t;
              });
            })
          : n.then(function () {
              return t;
            });
      }
      var xt = !1;
      function Bt(t) {
        var n;
        (xt = !0),
          t && t.urlRerouteOnly && ((n = t.urlRerouteOnly), (Y = n)),
          Z && Rt();
      }
      function Gt() {
        return xt;
      }
      Z &&
        setTimeout(function () {
          xt || console.warn(f(1, !1));
        }, 5e3);
      var Ct = {
        getRawAppData: function () {
          return [].concat(gt);
        },
        reroute: Rt,
        NOT_LOADED: p,
        toLoadPromise: X,
        toBootstrapPromise: L,
        unregisterApplication: At,
      };
      Z &&
        window.__SINGLE_SPA_DEVTOOLS__ &&
        (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Ct);
    },
  };
});
//# sourceMappingURL=single-spa.min.js.map
