var Ed = (e) => {
  throw TypeError(e);
};
var ul = (e, t, n) => t.has(e) || Ed("Cannot " + n);
var E = (e, t, n) => (
    ul(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  Z = (e, t, n) =>
    t.has(e)
      ? Ed("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  V = (e, t, n, r) => (
    ul(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Oe = (e, t, n) => (ul(e, t, "access private method"), n);
var da = (e, t, n, r) => ({
  set _(o) {
    V(e, t, o, n);
  },
  get _() {
    return E(e, t, r);
  },
});
function e0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(r, o);
          a &&
            Object.defineProperty(
              e,
              o,
              a.get ? a : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const s of a.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = n(o);
    fetch(o.href, a);
  }
})();
function To(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ip = { exports: {} },
  Os = {},
  Wp = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zi = Symbol.for("react.element"),
  t0 = Symbol.for("react.portal"),
  n0 = Symbol.for("react.fragment"),
  r0 = Symbol.for("react.strict_mode"),
  o0 = Symbol.for("react.profiler"),
  i0 = Symbol.for("react.provider"),
  a0 = Symbol.for("react.context"),
  s0 = Symbol.for("react.forward_ref"),
  l0 = Symbol.for("react.suspense"),
  c0 = Symbol.for("react.memo"),
  u0 = Symbol.for("react.lazy"),
  Nd = Symbol.iterator;
function d0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nd && e[Nd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $p = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hp = Object.assign,
  Up = {};
function Eo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Up),
    (this.updater = n || $p));
}
Eo.prototype.isReactComponent = {};
Eo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Eo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vp() {}
Vp.prototype = Eo.prototype;
function lu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Up),
    (this.updater = n || $p));
}
var cu = (lu.prototype = new Vp());
cu.constructor = lu;
Hp(cu, Eo.prototype);
cu.isPureReactComponent = !0;
var Fd = Array.isArray,
  Gp = Object.prototype.hasOwnProperty,
  uu = { current: null },
  qp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yp(e, t, n) {
  var r,
    o = {},
    a = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Gp.call(t, r) && !qp.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Zi,
    type: e,
    key: a,
    ref: s,
    props: o,
    _owner: uu.current,
  };
}
function f0(e, t) {
  return {
    $$typeof: Zi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function du(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zi;
}
function p0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pd = /\/+/g;
function dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? p0("" + e.key)
    : t.toString(36);
}
function Ma(e, t, n, r, o) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (a) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zi:
          case t0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + dl(s, 0) : r),
      Fd(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pd, "$&/") + "/"),
          Ma(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (du(o) &&
            (o = f0(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pd, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Fd(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var c = r + dl(a, l);
      s += Ma(a, t, n, c, o);
    }
  else if (((c = d0(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(a = e.next()).done; )
      ((a = a.value), (c = r + dl(a, l++)), (s += Ma(a, t, n, c, o)));
  else if (a === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function fa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ma(e, r, "", "", function (a) {
      return t.call(n, a, o++);
    }),
    r
  );
}
function h0(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  _a = { transition: null },
  m0 = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: _a,
    ReactCurrentOwner: uu,
  };
function Kp() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: fa,
  forEach: function (e, t, n) {
    fa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!du(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
K.Component = Eo;
K.Fragment = n0;
K.Profiler = o0;
K.PureComponent = lu;
K.StrictMode = r0;
K.Suspense = l0;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0;
K.act = Kp;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Hp({}, e.props),
    o = e.key,
    a = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (s = uu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      Gp.call(t, c) &&
        !qp.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Zi, type: e.type, key: o, ref: a, props: r, _owner: s };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: a0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: i0, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = Yp;
K.createFactory = function (e) {
  var t = Yp.bind(null, e);
  return ((t.type = e), t);
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: s0, render: e };
};
K.isValidElement = du;
K.lazy = function (e) {
  return { $$typeof: u0, _payload: { _status: -1, _result: e }, _init: h0 };
};
K.memo = function (e, t) {
  return { $$typeof: c0, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = _a.transition;
  _a.transition = {};
  try {
    e();
  } finally {
    _a.transition = t;
  }
};
K.unstable_act = Kp;
K.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Ve.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
K.useId = function () {
  return Ve.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Ve.current.useRef(e);
};
K.useState = function (e) {
  return Ve.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Ve.current.useTransition();
};
K.version = "18.3.1";
Wp.exports = K;
var x = Wp.exports;
const P = To(x),
  g0 = e0({ __proto__: null, default: P }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var y0 = x,
  x0 = Symbol.for("react.element"),
  v0 = Symbol.for("react.fragment"),
  w0 = Object.prototype.hasOwnProperty,
  b0 = y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  C0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qp(e, t, n) {
  var r,
    o = {},
    a = null,
    s = null;
  (n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) w0.call(t, r) && !C0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: x0,
    type: e,
    key: a,
    ref: s,
    props: o,
    _owner: b0.current,
  };
}
Os.Fragment = v0;
Os.jsx = Qp;
Os.jsxs = Qp;
Ip.exports = Os;
var i = Ip.exports,
  Xp = { exports: {} },
  ut = {},
  Jp = { exports: {} },
  Zp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, A) {
    var z = k.length;
    k.push(A);
    e: for (; 0 < z; ) {
      var D = (z - 1) >>> 1,
        L = k[D];
      if (0 < o(L, A)) ((k[D] = A), (k[z] = L), (z = D));
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var A = k[0],
      z = k.pop();
    if (z !== A) {
      k[0] = z;
      e: for (var D = 0, L = k.length, Q = L >>> 1; D < Q; ) {
        var de = 2 * (D + 1) - 1,
          tt = k[de],
          ee = de + 1,
          wt = k[ee];
        if (0 > o(tt, z))
          ee < L && 0 > o(wt, tt)
            ? ((k[D] = wt), (k[ee] = z), (D = ee))
            : ((k[D] = tt), (k[de] = z), (D = de));
        else if (ee < L && 0 > o(wt, z)) ((k[D] = wt), (k[ee] = z), (D = ee));
        else break e;
      }
    }
    return A;
  }
  function o(k, A) {
    var z = k.sortIndex - A.sortIndex;
    return z !== 0 ? z : k.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var c = [],
    u = [],
    p = 1,
    f = null,
    d = 3,
    m = !1,
    w = !1,
    y = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(k) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= k)
        (r(u), (A.sortIndex = A.expirationTime), t(c, A));
      else break;
      A = n(u);
    }
  }
  function C(k) {
    if (((y = !1), v(k), !w))
      if (n(c) !== null) ((w = !0), W(j));
      else {
        var A = n(u);
        A !== null && Y(C, A.startTime - k);
      }
  }
  function j(k, A) {
    ((w = !1), y && ((y = !1), g(N), (N = -1)), (m = !0));
    var z = d;
    try {
      for (
        v(A), f = n(c);
        f !== null && (!(f.expirationTime > A) || (k && !I()));
      ) {
        var D = f.callback;
        if (typeof D == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var L = D(f.expirationTime <= A);
          ((A = e.unstable_now()),
            typeof L == "function" ? (f.callback = L) : f === n(c) && r(c),
            v(A));
        } else r(c);
        f = n(c);
      }
      if (f !== null) var Q = !0;
      else {
        var de = n(u);
        (de !== null && Y(C, de.startTime - A), (Q = !1));
      }
      return Q;
    } finally {
      ((f = null), (d = z), (m = !1));
    }
  }
  var S = !1,
    T = null,
    N = -1,
    M = 5,
    R = -1;
  function I() {
    return !(e.unstable_now() - R < M);
  }
  function _() {
    if (T !== null) {
      var k = e.unstable_now();
      R = k;
      var A = !0;
      try {
        A = T(!0, k);
      } finally {
        A ? G() : ((S = !1), (T = null));
      }
    } else S = !1;
  }
  var G;
  if (typeof h == "function")
    G = function () {
      h(_);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      q = O.port2;
    ((O.port1.onmessage = _),
      (G = function () {
        q.postMessage(null);
      }));
  } else
    G = function () {
      b(_, 0);
    };
  function W(k) {
    ((T = k), S || ((S = !0), G()));
  }
  function Y(k, A) {
    N = b(function () {
      k(e.unstable_now());
    }, A);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || m || ((w = !0), W(j));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (k) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var z = d;
      d = A;
      try {
        return k();
      } finally {
        d = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, A) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var z = d;
      d = k;
      try {
        return A();
      } finally {
        d = z;
      }
    }),
    (e.unstable_scheduleCallback = function (k, A, z) {
      var D = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? D + z : D))
          : (z = D),
        k)
      ) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return (
        (L = z + L),
        (k = {
          id: p++,
          callback: A,
          priorityLevel: k,
          startTime: z,
          expirationTime: L,
          sortIndex: -1,
        }),
        z > D
          ? ((k.sortIndex = z),
            t(u, k),
            n(c) === null &&
              k === n(u) &&
              (y ? (g(N), (N = -1)) : (y = !0), Y(C, z - D)))
          : ((k.sortIndex = L), t(c, k), w || m || ((w = !0), W(j))),
        k
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (k) {
      var A = d;
      return function () {
        var z = d;
        d = A;
        try {
          return k.apply(this, arguments);
        } finally {
          d = z;
        }
      };
    }));
})(Zp);
Jp.exports = Zp;
var j0 = Jp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k0 = x,
  ct = j0;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var eh = new Set(),
  Ti = {};
function wr(e, t) {
  (go(e, t), go(e + "Capture", t));
}
function go(e, t) {
  for (Ti[e] = t, e = 0; e < t.length; e++) eh.add(t[e]);
}
var on = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kl = Object.prototype.hasOwnProperty,
  S0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ad = {},
  Rd = {};
function T0(e) {
  return Kl.call(Rd, e)
    ? !0
    : Kl.call(Ad, e)
      ? !1
      : S0.test(e)
        ? (Rd[e] = !0)
        : ((Ad[e] = !0), !1);
}
function E0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function N0(e, t, n, r) {
  if (t === null || typeof t > "u" || E0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ge(e, t, n, r, o, a, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = s));
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fu = /[\-:]([a-z])/g;
function pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fu, pu);
    Re[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fu, pu);
    Re[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fu, pu);
  Re[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hu(e, t, n, r) {
  var o = Re.hasOwnProperty(t) ? Re[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (N0(t, n, o, r) && (n = null),
    r || o === null
      ? T0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dn = k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pa = Symbol.for("react.element"),
  Lr = Symbol.for("react.portal"),
  Ir = Symbol.for("react.fragment"),
  mu = Symbol.for("react.strict_mode"),
  Ql = Symbol.for("react.profiler"),
  th = Symbol.for("react.provider"),
  nh = Symbol.for("react.context"),
  gu = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Jl = Symbol.for("react.suspense_list"),
  yu = Symbol.for("react.memo"),
  Cn = Symbol.for("react.lazy"),
  rh = Symbol.for("react.offscreen"),
  Od = Symbol.iterator;
function Do(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Od && e[Od]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var he = Object.assign,
  fl;
function ui(e) {
  if (fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fl = (t && t[1]) || "";
    }
  return (
    `
` +
    fl +
    e
  );
}
var pl = !1;
function hl(e, t) {
  if (!e || pl) return "";
  pl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          a = r.stack.split(`
`),
          s = o.length - 1,
          l = a.length - 1;
        1 <= s && 0 <= l && o[s] !== a[l];
      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== a[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== a[l])) {
                var c =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    ((pl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? ui(e) : "";
}
function F0(e) {
  switch (e.tag) {
    case 5:
      return ui(e.type);
    case 16:
      return ui("Lazy");
    case 13:
      return ui("Suspense");
    case 19:
      return ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = hl(e.type, !1)), e);
    case 11:
      return ((e = hl(e.type.render, !1)), e);
    case 1:
      return ((e = hl(e.type, !0)), e);
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ir:
      return "Fragment";
    case Lr:
      return "Portal";
    case Ql:
      return "Profiler";
    case mu:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case nh:
        return (e.displayName || "Context") + ".Consumer";
      case th:
        return (e._context.displayName || "Context") + ".Provider";
      case gu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yu:
        return (
          (t = e.displayName || null),
          t !== null ? t : Zl(e.type) || "Memo"
        );
      case Cn:
        ((t = e._payload), (e = e._init));
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function P0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === mu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function oh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function A0(e) {
  var t = oh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), a.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ha(e) {
  e._valueTracker || (e._valueTracker = A0(e));
}
function ih(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = oh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ec(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function ah(e, t) {
  ((t = t.checked), t != null && hu(e, "checked", t, !1));
}
function tc(e, t) {
  ah(e, t);
  var n = Un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? nc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && nc(e, t.type, Un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Dd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function nc(e, t, n) {
  (t !== "number" || es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var di = Array.isArray;
function Xr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function rc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Md(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (di(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Un(n) };
}
function sh(e, t) {
  var n = Un(t.value),
    r = Un(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function _d(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? lh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ma,
  ch = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ma = ma || document.createElement("div"),
          ma.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ma.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ei(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  R0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(mi).forEach(function (e) {
  R0.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mi[t] = mi[e]));
  });
});
function uh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mi.hasOwnProperty(e) && mi[e])
      ? ("" + t).trim()
      : t + "px";
}
function dh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = uh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var O0 = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ic(e, t) {
  if (t) {
    if (O0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function ac(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var sc = null;
function xu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var lc = null,
  Jr = null,
  Zr = null;
function zd(e) {
  if ((e = na(e))) {
    if (typeof lc != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = zs(t)), lc(e.stateNode, e.type, t));
  }
}
function fh(e) {
  Jr ? (Zr ? Zr.push(e) : (Zr = [e])) : (Jr = e);
}
function ph() {
  if (Jr) {
    var e = Jr,
      t = Zr;
    if (((Zr = Jr = null), zd(e), t)) for (e = 0; e < t.length; e++) zd(t[e]);
  }
}
function hh(e, t) {
  return e(t);
}
function mh() {}
var ml = !1;
function gh(e, t, n) {
  if (ml) return e(t, n);
  ml = !0;
  try {
    return hh(e, t, n);
  } finally {
    ((ml = !1), (Jr !== null || Zr !== null) && (mh(), ph()));
  }
}
function Ni(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var cc = !1;
if (on)
  try {
    var Mo = {};
    (Object.defineProperty(Mo, "passive", {
      get: function () {
        cc = !0;
      },
    }),
      window.addEventListener("test", Mo, Mo),
      window.removeEventListener("test", Mo, Mo));
  } catch {
    cc = !1;
  }
function B0(e, t, n, r, o, a, s, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var gi = !1,
  ts = null,
  ns = !1,
  uc = null,
  D0 = {
    onError: function (e) {
      ((gi = !0), (ts = e));
    },
  };
function M0(e, t, n, r, o, a, s, l, c) {
  ((gi = !1), (ts = null), B0.apply(D0, arguments));
}
function _0(e, t, n, r, o, a, s, l, c) {
  if ((M0.apply(this, arguments), gi)) {
    if (gi) {
      var u = ts;
      ((gi = !1), (ts = null));
    } else throw Error(F(198));
    ns || ((ns = !0), (uc = u));
  }
}
function br(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function yh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ld(e) {
  if (br(e) !== e) throw Error(F(188));
}
function z0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = br(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var a = o.alternate;
    if (a === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === a.child) {
      for (a = o.child; a; ) {
        if (a === n) return (Ld(o), e);
        if (a === r) return (Ld(o), t);
        a = a.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) ((n = o), (r = a));
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          ((s = !0), (n = o), (r = a));
          break;
        }
        if (l === r) {
          ((s = !0), (r = o), (n = a));
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = a.child; l; ) {
          if (l === n) {
            ((s = !0), (n = a), (r = o));
            break;
          }
          if (l === r) {
            ((s = !0), (r = a), (n = o));
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function xh(e) {
  return ((e = z0(e)), e !== null ? vh(e) : null);
}
function vh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wh = ct.unstable_scheduleCallback,
  Id = ct.unstable_cancelCallback,
  L0 = ct.unstable_shouldYield,
  I0 = ct.unstable_requestPaint,
  ye = ct.unstable_now,
  W0 = ct.unstable_getCurrentPriorityLevel,
  vu = ct.unstable_ImmediatePriority,
  bh = ct.unstable_UserBlockingPriority,
  rs = ct.unstable_NormalPriority,
  $0 = ct.unstable_LowPriority,
  Ch = ct.unstable_IdlePriority,
  Bs = null,
  Ut = null;
function H0(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function")
    try {
      Ut.onCommitFiberRoot(Bs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ft = Math.clz32 ? Math.clz32 : G0,
  U0 = Math.log,
  V0 = Math.LN2;
function G0(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((U0(e) / V0) | 0)) | 0);
}
var ga = 64,
  ya = 4194304;
function fi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function os(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    a = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = fi(l)) : ((a &= s), a !== 0 && (r = fi(a)));
  } else ((s = n & ~o), s !== 0 ? (r = fi(s)) : a !== 0 && (r = fi(a)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ft(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function q0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Y0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;
  ) {
    var s = 31 - Ft(a),
      l = 1 << s,
      c = o[s];
    (c === -1
      ? (!(l & n) || l & r) && (o[s] = q0(l, t))
      : c <= t && (e.expiredLanes |= l),
      (a &= ~l));
  }
}
function dc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jh() {
  var e = ga;
  return ((ga <<= 1), !(ga & 4194240) && (ga = 64), e);
}
function gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ea(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ft(t)),
    (e[t] = n));
}
function K0(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ft(n),
      a = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a));
  }
}
function wu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ft(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var te = 0;
function kh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Sh,
  bu,
  Th,
  Eh,
  Nh,
  fc = !1,
  xa = [],
  Dn = null,
  Mn = null,
  _n = null,
  Fi = new Map(),
  Pi = new Map(),
  kn = [],
  Q0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Wd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dn = null;
      break;
    case "dragenter":
    case "dragleave":
      Mn = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      Fi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pi.delete(t.pointerId);
  }
}
function _o(e, t, n, r, o, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [o],
      }),
      t !== null && ((t = na(t)), t !== null && bu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function X0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Dn = _o(Dn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Mn = _o(Mn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((_n = _o(_n, e, t, n, r, o)), !0);
    case "pointerover":
      var a = o.pointerId;
      return (Fi.set(a, _o(Fi.get(a) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (a = o.pointerId),
        Pi.set(a, _o(Pi.get(a) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function Fh(e) {
  var t = rr(e.target);
  if (t !== null) {
    var n = br(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yh(n)), t !== null)) {
          ((e.blockedOn = t),
            Nh(e.priority, function () {
              Th(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function za(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((sc = r), n.target.dispatchEvent(r), (sc = null));
    } else return ((t = na(n)), t !== null && bu(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function $d(e, t, n) {
  za(e) && n.delete(t);
}
function J0() {
  ((fc = !1),
    Dn !== null && za(Dn) && (Dn = null),
    Mn !== null && za(Mn) && (Mn = null),
    _n !== null && za(_n) && (_n = null),
    Fi.forEach($d),
    Pi.forEach($d));
}
function zo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fc ||
      ((fc = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, J0)));
}
function Ai(e) {
  function t(o) {
    return zo(o, e);
  }
  if (0 < xa.length) {
    zo(xa[0], e);
    for (var n = 1; n < xa.length; n++) {
      var r = xa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dn !== null && zo(Dn, e),
      Mn !== null && zo(Mn, e),
      _n !== null && zo(_n, e),
      Fi.forEach(t),
      Pi.forEach(t),
      n = 0;
    n < kn.length;
    n++
  )
    ((r = kn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
    (Fh(n), n.blockedOn === null && kn.shift());
}
var eo = dn.ReactCurrentBatchConfig,
  is = !0;
function Z0(e, t, n, r) {
  var o = te,
    a = eo.transition;
  eo.transition = null;
  try {
    ((te = 1), Cu(e, t, n, r));
  } finally {
    ((te = o), (eo.transition = a));
  }
}
function ey(e, t, n, r) {
  var o = te,
    a = eo.transition;
  eo.transition = null;
  try {
    ((te = 4), Cu(e, t, n, r));
  } finally {
    ((te = o), (eo.transition = a));
  }
}
function Cu(e, t, n, r) {
  if (is) {
    var o = pc(e, t, n, r);
    if (o === null) (Tl(e, t, r, as, n), Wd(e, r));
    else if (X0(o, e, t, n, r)) r.stopPropagation();
    else if ((Wd(e, r), t & 4 && -1 < Q0.indexOf(e))) {
      for (; o !== null; ) {
        var a = na(o);
        if (
          (a !== null && Sh(a),
          (a = pc(e, t, n, r)),
          a === null && Tl(e, t, r, as, n),
          a === o)
        )
          break;
        o = a;
      }
      o !== null && r.stopPropagation();
    } else Tl(e, t, r, null, n);
  }
}
var as = null;
function pc(e, t, n, r) {
  if (((as = null), (e = xu(r)), (e = rr(e)), e !== null))
    if (((t = br(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = yh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((as = e), null);
}
function Ph(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (W0()) {
        case vu:
          return 1;
        case bh:
          return 4;
        case rs:
        case $0:
          return 16;
        case Ch:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var An = null,
  ju = null,
  La = null;
function Ah() {
  if (La) return La;
  var e,
    t = ju,
    n = t.length,
    r,
    o = "value" in An ? An.value : An.textContent,
    a = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[a - r]; r++);
  return (La = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ia(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function va() {
  return !0;
}
function Hd() {
  return !1;
}
function dt(e) {
  function t(n, r, o, a, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = s),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? va
        : Hd),
      (this.isPropagationStopped = Hd),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = va));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = va));
      },
      persist: function () {},
      isPersistent: va,
    }),
    t
  );
}
var No = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ku = dt(No),
  ta = he({}, No, { view: 0, detail: 0 }),
  ty = dt(ta),
  yl,
  xl,
  Lo,
  Ds = he({}, ta, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Su,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Lo &&
            (Lo && e.type === "mousemove"
              ? ((yl = e.screenX - Lo.screenX), (xl = e.screenY - Lo.screenY))
              : (xl = yl = 0),
            (Lo = e)),
          yl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xl;
    },
  }),
  Ud = dt(Ds),
  ny = he({}, Ds, { dataTransfer: 0 }),
  ry = dt(ny),
  oy = he({}, ta, { relatedTarget: 0 }),
  vl = dt(oy),
  iy = he({}, No, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ay = dt(iy),
  sy = he({}, No, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ly = dt(sy),
  cy = he({}, No, { data: 0 }),
  Vd = dt(cy),
  uy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  fy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function py(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fy[e]) ? !!t[e] : !1;
}
function Su() {
  return py;
}
var hy = he({}, ta, {
    key: function (e) {
      if (e.key) {
        var t = uy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ia(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? dy[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Su,
    charCode: function (e) {
      return e.type === "keypress" ? Ia(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ia(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  my = dt(hy),
  gy = he({}, Ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gd = dt(gy),
  yy = he({}, ta, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Su,
  }),
  xy = dt(yy),
  vy = he({}, No, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wy = dt(vy),
  by = he({}, Ds, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Cy = dt(by),
  jy = [9, 13, 27, 32],
  Tu = on && "CompositionEvent" in window,
  yi = null;
on && "documentMode" in document && (yi = document.documentMode);
var ky = on && "TextEvent" in window && !yi,
  Rh = on && (!Tu || (yi && 8 < yi && 11 >= yi)),
  qd = " ",
  Yd = !1;
function Oh(e, t) {
  switch (e) {
    case "keyup":
      return jy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Wr = !1;
function Sy(e, t) {
  switch (e) {
    case "compositionend":
      return Bh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yd = !0), qd);
    case "textInput":
      return ((e = t.data), e === qd && Yd ? null : e);
    default:
      return null;
  }
}
function Ty(e, t) {
  if (Wr)
    return e === "compositionend" || (!Tu && Oh(e, t))
      ? ((e = Ah()), (La = ju = An = null), (Wr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ey = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Kd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ey[e.type] : t === "textarea";
}
function Dh(e, t, n, r) {
  (fh(r),
    (t = ss(t, "onChange")),
    0 < t.length &&
      ((n = new ku("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var xi = null,
  Ri = null;
function Ny(e) {
  Gh(e, 0);
}
function Ms(e) {
  var t = Ur(e);
  if (ih(t)) return e;
}
function Fy(e, t) {
  if (e === "change") return t;
}
var Mh = !1;
if (on) {
  var wl;
  if (on) {
    var bl = "oninput" in document;
    if (!bl) {
      var Qd = document.createElement("div");
      (Qd.setAttribute("oninput", "return;"),
        (bl = typeof Qd.oninput == "function"));
    }
    wl = bl;
  } else wl = !1;
  Mh = wl && (!document.documentMode || 9 < document.documentMode);
}
function Xd() {
  xi && (xi.detachEvent("onpropertychange", _h), (Ri = xi = null));
}
function _h(e) {
  if (e.propertyName === "value" && Ms(Ri)) {
    var t = [];
    (Dh(t, Ri, e, xu(e)), gh(Ny, t));
  }
}
function Py(e, t, n) {
  e === "focusin"
    ? (Xd(), (xi = t), (Ri = n), xi.attachEvent("onpropertychange", _h))
    : e === "focusout" && Xd();
}
function Ay(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ms(Ri);
}
function Ry(e, t) {
  if (e === "click") return Ms(t);
}
function Oy(e, t) {
  if (e === "input" || e === "change") return Ms(t);
}
function By(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var At = typeof Object.is == "function" ? Object.is : By;
function Oi(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Kl.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function Jd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zd(e, t) {
  var n = Jd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Jd(n);
  }
}
function zh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? zh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Lh() {
  for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = es(e.document);
  }
  return t;
}
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dy(e) {
  var t = Lh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Eu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          a = Math.min(r.start, o);
        ((r = r.end === void 0 ? a : Math.min(r.end, o)),
          !e.extend && a > r && ((o = r), (r = a), (a = o)),
          (o = Zd(n, a)));
        var s = Zd(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var My = on && "documentMode" in document && 11 >= document.documentMode,
  $r = null,
  hc = null,
  vi = null,
  mc = !1;
function ef(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mc ||
    $r == null ||
    $r !== es(r) ||
    ((r = $r),
    "selectionStart" in r && Eu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vi && Oi(vi, r)) ||
      ((vi = r),
      (r = ss(hc, "onSelect")),
      0 < r.length &&
        ((t = new ku("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $r))));
}
function wa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Hr = {
    animationend: wa("Animation", "AnimationEnd"),
    animationiteration: wa("Animation", "AnimationIteration"),
    animationstart: wa("Animation", "AnimationStart"),
    transitionend: wa("Transition", "TransitionEnd"),
  },
  Cl = {},
  Ih = {};
on &&
  ((Ih = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hr.animationend.animation,
    delete Hr.animationiteration.animation,
    delete Hr.animationstart.animation),
  "TransitionEvent" in window || delete Hr.transitionend.transition);
function _s(e) {
  if (Cl[e]) return Cl[e];
  if (!Hr[e]) return e;
  var t = Hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ih) return (Cl[e] = t[n]);
  return e;
}
var Wh = _s("animationend"),
  $h = _s("animationiteration"),
  Hh = _s("animationstart"),
  Uh = _s("transitionend"),
  Vh = new Map(),
  tf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Qn(e, t) {
  (Vh.set(e, t), wr(t, [e]));
}
for (var jl = 0; jl < tf.length; jl++) {
  var kl = tf[jl],
    _y = kl.toLowerCase(),
    zy = kl[0].toUpperCase() + kl.slice(1);
  Qn(_y, "on" + zy);
}
Qn(Wh, "onAnimationEnd");
Qn($h, "onAnimationIteration");
Qn(Hh, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(Uh, "onTransitionEnd");
go("onMouseEnter", ["mouseout", "mouseover"]);
go("onMouseLeave", ["mouseout", "mouseover"]);
go("onPointerEnter", ["pointerout", "pointerover"]);
go("onPointerLeave", ["pointerout", "pointerover"]);
wr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
wr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
wr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
wr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var pi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));
function nf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), _0(r, t, void 0, e), (e.currentTarget = null));
}
function Gh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== a && o.isPropagationStopped())) break e;
          (nf(o, l, u), (a = c));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== a && o.isPropagationStopped())
          )
            break e;
          (nf(o, l, u), (a = c));
        }
    }
  }
  if (ns) throw ((e = uc), (ns = !1), (uc = null), e);
}
function ae(e, t) {
  var n = t[wc];
  n === void 0 && (n = t[wc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (qh(t, e, 2, !1), n.add(r));
}
function Sl(e, t, n) {
  var r = 0;
  (t && (r |= 4), qh(n, e, r, t));
}
var ba = "_reactListening" + Math.random().toString(36).slice(2);
function Bi(e) {
  if (!e[ba]) {
    ((e[ba] = !0),
      eh.forEach(function (n) {
        n !== "selectionchange" && (Ly.has(n) || Sl(n, !1, e), Sl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ba] || ((t[ba] = !0), Sl("selectionchange", !1, t));
  }
}
function qh(e, t, n, r) {
  switch (Ph(t)) {
    case 1:
      var o = Z0;
      break;
    case 4:
      o = ey;
      break;
    default:
      o = Cu;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !cc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function Tl(e, t, n, r, o) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var c = s.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = s.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = rr(l)), s === null)) return;
          if (((c = s.tag), c === 5 || c === 6)) {
            r = a = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  gh(function () {
    var u = a,
      p = xu(n),
      f = [];
    e: {
      var d = Vh.get(e);
      if (d !== void 0) {
        var m = ku,
          w = e;
        switch (e) {
          case "keypress":
            if (Ia(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = my;
            break;
          case "focusin":
            ((w = "focus"), (m = vl));
            break;
          case "focusout":
            ((w = "blur"), (m = vl));
            break;
          case "beforeblur":
          case "afterblur":
            m = vl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Ud;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = ry;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = xy;
            break;
          case Wh:
          case $h:
          case Hh:
            m = ay;
            break;
          case Uh:
            m = wy;
            break;
          case "scroll":
            m = ty;
            break;
          case "wheel":
            m = Cy;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = ly;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Gd;
        }
        var y = (t & 4) !== 0,
          b = !y && e === "scroll",
          g = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var C = v.stateNode;
          if (
            (v.tag === 5 &&
              C !== null &&
              ((v = C),
              g !== null && ((C = Ni(h, g)), C != null && y.push(Di(h, C, v)))),
            b)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new m(d, w, null, n, p)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== sc &&
            (w = n.relatedTarget || n.fromElement) &&
            (rr(w) || w[an]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            p.window === p
              ? p
              : (d = p.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          m
            ? ((w = n.relatedTarget || n.toElement),
              (m = u),
              (w = w ? rr(w) : null),
              w !== null &&
                ((b = br(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((m = null), (w = u)),
          m !== w)
        ) {
          if (
            ((y = Ud),
            (C = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Gd),
              (C = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (b = m == null ? d : Ur(m)),
            (v = w == null ? d : Ur(w)),
            (d = new y(C, h + "leave", m, n, p)),
            (d.target = b),
            (d.relatedTarget = v),
            (C = null),
            rr(p) === u &&
              ((y = new y(g, h + "enter", w, n, p)),
              (y.target = v),
              (y.relatedTarget = b),
              (C = y)),
            (b = C),
            m && w)
          )
            t: {
              for (y = m, g = w, h = 0, v = y; v; v = Nr(v)) h++;
              for (v = 0, C = g; C; C = Nr(C)) v++;
              for (; 0 < h - v; ) ((y = Nr(y)), h--);
              for (; 0 < v - h; ) ((g = Nr(g)), v--);
              for (; h--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                ((y = Nr(y)), (g = Nr(g)));
              }
              y = null;
            }
          else y = null;
          (m !== null && rf(f, d, m, y, !1),
            w !== null && b !== null && rf(f, b, w, y, !0));
        }
      }
      e: {
        if (
          ((d = u ? Ur(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var j = Fy;
        else if (Kd(d))
          if (Mh) j = Oy;
          else {
            j = Ay;
            var S = Py;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (j = Ry);
        if (j && (j = j(e, u))) {
          Dh(f, j, n, p);
          break e;
        }
        (S && S(e, d, u),
          e === "focusout" &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === "number" &&
            nc(d, "number", d.value));
      }
      switch (((S = u ? Ur(u) : window), e)) {
        case "focusin":
          (Kd(S) || S.contentEditable === "true") &&
            (($r = S), (hc = u), (vi = null));
          break;
        case "focusout":
          vi = hc = $r = null;
          break;
        case "mousedown":
          mc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((mc = !1), ef(f, n, p));
          break;
        case "selectionchange":
          if (My) break;
        case "keydown":
        case "keyup":
          ef(f, n, p);
      }
      var T;
      if (Tu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Wr
          ? Oh(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      (N &&
        (Rh &&
          n.locale !== "ko" &&
          (Wr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Wr && (T = Ah())
            : ((An = p),
              (ju = "value" in An ? An.value : An.textContent),
              (Wr = !0))),
        (S = ss(u, N)),
        0 < S.length &&
          ((N = new Vd(N, e, null, n, p)),
          f.push({ event: N, listeners: S }),
          T ? (N.data = T) : ((T = Bh(n)), T !== null && (N.data = T)))),
        (T = ky ? Sy(e, n) : Ty(e, n)) &&
          ((u = ss(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new Vd("onBeforeInput", "beforeinput", null, n, p)),
            f.push({ event: p, listeners: u }),
            (p.data = T))));
    }
    Gh(f, t);
  });
}
function Di(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ss(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      a = o.stateNode;
    (o.tag === 5 &&
      a !== null &&
      ((o = a),
      (a = Ni(e, n)),
      a != null && r.unshift(Di(e, a, o)),
      (a = Ni(e, t)),
      a != null && r.push(Di(e, a, o))),
      (e = e.return));
  }
  return r;
}
function Nr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rf(e, t, n, r, o) {
  for (var a = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((c = Ni(n, a)), c != null && s.unshift(Di(n, c, l)))
        : o || ((c = Ni(n, a)), c != null && s.push(Di(n, c, l)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Iy = /\r\n?/g,
  Wy = /\u0000|\uFFFD/g;
function of(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Iy,
      `
`,
    )
    .replace(Wy, "");
}
function Ca(e, t, n) {
  if (((t = of(t)), of(e) !== t && n)) throw Error(F(425));
}
function ls() {}
var gc = null,
  yc = null;
function xc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vc = typeof setTimeout == "function" ? setTimeout : void 0,
  $y = typeof clearTimeout == "function" ? clearTimeout : void 0,
  af = typeof Promise == "function" ? Promise : void 0,
  Hy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof af < "u"
        ? function (e) {
            return af.resolve(null).then(e).catch(Uy);
          }
        : vc;
function Uy(e) {
  setTimeout(function () {
    throw e;
  });
}
function El(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), Ai(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ai(t);
}
function zn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function sf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Fo = Math.random().toString(36).slice(2),
  Ht = "__reactFiber$" + Fo,
  Mi = "__reactProps$" + Fo,
  an = "__reactContainer$" + Fo,
  wc = "__reactEvents$" + Fo,
  Vy = "__reactListeners$" + Fo,
  Gy = "__reactHandles$" + Fo;
function rr(e) {
  var t = e[Ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[an] || n[Ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = sf(e); e !== null; ) {
          if ((n = e[Ht])) return n;
          e = sf(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function na(e) {
  return (
    (e = e[Ht] || e[an]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function zs(e) {
  return e[Mi] || null;
}
var bc = [],
  Vr = -1;
function Xn(e) {
  return { current: e };
}
function se(e) {
  0 > Vr || ((e.current = bc[Vr]), (bc[Vr] = null), Vr--);
}
function re(e, t) {
  (Vr++, (bc[Vr] = e.current), (e.current = t));
}
var Vn = {},
  ze = Xn(Vn),
  Qe = Xn(!1),
  pr = Vn;
function yo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    a;
  for (a in n) o[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function cs() {
  (se(Qe), se(ze));
}
function lf(e, t, n) {
  if (ze.current !== Vn) throw Error(F(168));
  (re(ze, t), re(Qe, n));
}
function Yh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(F(108, P0(e) || "Unknown", o));
  return he({}, n, r);
}
function us(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vn),
    (pr = ze.current),
    re(ze, e),
    re(Qe, Qe.current),
    !0
  );
}
function cf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  (n
    ? ((e = Yh(e, t, pr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Qe),
      se(ze),
      re(ze, e))
    : se(Qe),
    re(Qe, n));
}
var Zt = null,
  Ls = !1,
  Nl = !1;
function Kh(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function qy(e) {
  ((Ls = !0), Kh(e));
}
function Jn() {
  if (!Nl && Zt !== null) {
    Nl = !0;
    var e = 0,
      t = te;
    try {
      var n = Zt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Zt = null), (Ls = !1));
    } catch (o) {
      throw (Zt !== null && (Zt = Zt.slice(e + 1)), wh(vu, Jn), o);
    } finally {
      ((te = t), (Nl = !1));
    }
  }
  return null;
}
var Gr = [],
  qr = 0,
  ds = null,
  fs = 0,
  ht = [],
  mt = 0,
  hr = null,
  tn = 1,
  nn = "";
function tr(e, t) {
  ((Gr[qr++] = fs), (Gr[qr++] = ds), (ds = e), (fs = t));
}
function Qh(e, t, n) {
  ((ht[mt++] = tn), (ht[mt++] = nn), (ht[mt++] = hr), (hr = e));
  var r = tn;
  e = nn;
  var o = 32 - Ft(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var a = 32 - Ft(t) + o;
  if (30 < a) {
    var s = o - (o % 5);
    ((a = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (tn = (1 << (32 - Ft(t) + o)) | (n << o) | r),
      (nn = a + e));
  } else ((tn = (1 << a) | (n << o) | r), (nn = e));
}
function Nu(e) {
  e.return !== null && (tr(e, 1), Qh(e, 1, 0));
}
function Fu(e) {
  for (; e === ds; )
    ((ds = Gr[--qr]), (Gr[qr] = null), (fs = Gr[--qr]), (Gr[qr] = null));
  for (; e === hr; )
    ((hr = ht[--mt]),
      (ht[mt] = null),
      (nn = ht[--mt]),
      (ht[mt] = null),
      (tn = ht[--mt]),
      (ht[mt] = null));
}
var st = null,
  at = null,
  ue = !1,
  Et = null;
function Xh(e, t) {
  var n = gt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function uf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (st = e), (at = zn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (at = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hr !== null ? { id: tn, overflow: nn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (st = e),
            (at = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Cc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jc(e) {
  if (ue) {
    var t = at;
    if (t) {
      var n = t;
      if (!uf(e, t)) {
        if (Cc(e)) throw Error(F(418));
        t = zn(n.nextSibling);
        var r = st;
        t && uf(e, t)
          ? Xh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (st = e));
      }
    } else {
      if (Cc(e)) throw Error(F(418));
      ((e.flags = (e.flags & -4097) | 2), (ue = !1), (st = e));
    }
  }
}
function df(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function ja(e) {
  if (e !== st) return !1;
  if (!ue) return (df(e), (ue = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xc(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (Cc(e)) throw (Jh(), Error(F(418)));
    for (; t; ) (Xh(e, t), (t = zn(t.nextSibling)));
  }
  if ((df(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              at = zn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = st ? zn(e.stateNode.nextSibling) : null;
  return !0;
}
function Jh() {
  for (var e = at; e; ) e = zn(e.nextSibling);
}
function xo() {
  ((at = st = null), (ue = !1));
}
function Pu(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
var Yy = dn.ReactCurrentBatchConfig;
function Io(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var o = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[a] : (l[a] = s);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function ka(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ff(e) {
  var t = e._init;
  return t(e._payload);
}
function Zh(e) {
  function t(g, h) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) (t(g, h), (h = h.sibling));
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      (h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling));
    return g;
  }
  function o(g, h) {
    return ((g = $n(g, h)), (g.index = 0), (g.sibling = null), g);
  }
  function a(g, h, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function l(g, h, v, C) {
    return h === null || h.tag !== 6
      ? ((h = Dl(v, g.mode, C)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function c(g, h, v, C) {
    var j = v.type;
    return j === Ir
      ? p(g, h, v.props.children, C, v.key)
      : h !== null &&
          (h.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === Cn &&
              ff(j) === h.type))
        ? ((C = o(h, v.props)), (C.ref = Io(g, h, v)), (C.return = g), C)
        : ((C = qa(v.type, v.key, v.props, null, g.mode, C)),
          (C.ref = Io(g, h, v)),
          (C.return = g),
          C);
  }
  function u(g, h, v, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = Ml(v, g.mode, C)), (h.return = g), h)
      : ((h = o(h, v.children || [])), (h.return = g), h);
  }
  function p(g, h, v, C, j) {
    return h === null || h.tag !== 7
      ? ((h = dr(v, g.mode, C, j)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function f(g, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = Dl("" + h, g.mode, v)), (h.return = g), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case pa:
          return (
            (v = qa(h.type, h.key, h.props, null, g.mode, v)),
            (v.ref = Io(g, null, h)),
            (v.return = g),
            v
          );
        case Lr:
          return ((h = Ml(h, g.mode, v)), (h.return = g), h);
        case Cn:
          var C = h._init;
          return f(g, C(h._payload), v);
      }
      if (di(h) || Do(h))
        return ((h = dr(h, g.mode, v, null)), (h.return = g), h);
      ka(g, h);
    }
    return null;
  }
  function d(g, h, v, C) {
    var j = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return j !== null ? null : l(g, h, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case pa:
          return v.key === j ? c(g, h, v, C) : null;
        case Lr:
          return v.key === j ? u(g, h, v, C) : null;
        case Cn:
          return ((j = v._init), d(g, h, j(v._payload), C));
      }
      if (di(v) || Do(v)) return j !== null ? null : p(g, h, v, C, null);
      ka(g, v);
    }
    return null;
  }
  function m(g, h, v, C, j) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return ((g = g.get(v) || null), l(h, g, "" + C, j));
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case pa:
          return (
            (g = g.get(C.key === null ? v : C.key) || null),
            c(h, g, C, j)
          );
        case Lr:
          return (
            (g = g.get(C.key === null ? v : C.key) || null),
            u(h, g, C, j)
          );
        case Cn:
          var S = C._init;
          return m(g, h, v, S(C._payload), j);
      }
      if (di(C) || Do(C)) return ((g = g.get(v) || null), p(h, g, C, j, null));
      ka(h, C);
    }
    return null;
  }
  function w(g, h, v, C) {
    for (
      var j = null, S = null, T = h, N = (h = 0), M = null;
      T !== null && N < v.length;
      N++
    ) {
      T.index > N ? ((M = T), (T = null)) : (M = T.sibling);
      var R = d(g, T, v[N], C);
      if (R === null) {
        T === null && (T = M);
        break;
      }
      (e && T && R.alternate === null && t(g, T),
        (h = a(R, h, N)),
        S === null ? (j = R) : (S.sibling = R),
        (S = R),
        (T = M));
    }
    if (N === v.length) return (n(g, T), ue && tr(g, N), j);
    if (T === null) {
      for (; N < v.length; N++)
        ((T = f(g, v[N], C)),
          T !== null &&
            ((h = a(T, h, N)),
            S === null ? (j = T) : (S.sibling = T),
            (S = T)));
      return (ue && tr(g, N), j);
    }
    for (T = r(g, T); N < v.length; N++)
      ((M = m(T, g, N, v[N], C)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? N : M.key),
          (h = a(M, h, N)),
          S === null ? (j = M) : (S.sibling = M),
          (S = M)));
    return (
      e &&
        T.forEach(function (I) {
          return t(g, I);
        }),
      ue && tr(g, N),
      j
    );
  }
  function y(g, h, v, C) {
    var j = Do(v);
    if (typeof j != "function") throw Error(F(150));
    if (((v = j.call(v)), v == null)) throw Error(F(151));
    for (
      var S = (j = null), T = h, N = (h = 0), M = null, R = v.next();
      T !== null && !R.done;
      N++, R = v.next()
    ) {
      T.index > N ? ((M = T), (T = null)) : (M = T.sibling);
      var I = d(g, T, R.value, C);
      if (I === null) {
        T === null && (T = M);
        break;
      }
      (e && T && I.alternate === null && t(g, T),
        (h = a(I, h, N)),
        S === null ? (j = I) : (S.sibling = I),
        (S = I),
        (T = M));
    }
    if (R.done) return (n(g, T), ue && tr(g, N), j);
    if (T === null) {
      for (; !R.done; N++, R = v.next())
        ((R = f(g, R.value, C)),
          R !== null &&
            ((h = a(R, h, N)),
            S === null ? (j = R) : (S.sibling = R),
            (S = R)));
      return (ue && tr(g, N), j);
    }
    for (T = r(g, T); !R.done; N++, R = v.next())
      ((R = m(T, g, N, R.value, C)),
        R !== null &&
          (e && R.alternate !== null && T.delete(R.key === null ? N : R.key),
          (h = a(R, h, N)),
          S === null ? (j = R) : (S.sibling = R),
          (S = R)));
    return (
      e &&
        T.forEach(function (_) {
          return t(g, _);
        }),
      ue && tr(g, N),
      j
    );
  }
  function b(g, h, v, C) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Ir &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case pa:
          e: {
            for (var j = v.key, S = h; S !== null; ) {
              if (S.key === j) {
                if (((j = v.type), j === Ir)) {
                  if (S.tag === 7) {
                    (n(g, S.sibling),
                      (h = o(S, v.props.children)),
                      (h.return = g),
                      (g = h));
                    break e;
                  }
                } else if (
                  S.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Cn &&
                    ff(j) === S.type)
                ) {
                  (n(g, S.sibling),
                    (h = o(S, v.props)),
                    (h.ref = Io(g, S, v)),
                    (h.return = g),
                    (g = h));
                  break e;
                }
                n(g, S);
                break;
              } else t(g, S);
              S = S.sibling;
            }
            v.type === Ir
              ? ((h = dr(v.props.children, g.mode, C, v.key)),
                (h.return = g),
                (g = h))
              : ((C = qa(v.type, v.key, v.props, null, g.mode, C)),
                (C.ref = Io(g, h, v)),
                (C.return = g),
                (g = C));
          }
          return s(g);
        case Lr:
          e: {
            for (S = v.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  (n(g, h.sibling),
                    (h = o(h, v.children || [])),
                    (h.return = g),
                    (g = h));
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            ((h = Ml(v, g.mode, C)), (h.return = g), (g = h));
          }
          return s(g);
        case Cn:
          return ((S = v._init), b(g, h, S(v._payload), C));
      }
      if (di(v)) return w(g, h, v, C);
      if (Do(v)) return y(g, h, v, C);
      ka(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, v)), (h.return = g), (g = h))
          : (n(g, h), (h = Dl(v, g.mode, C)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return b;
}
var vo = Zh(!0),
  em = Zh(!1),
  ps = Xn(null),
  hs = null,
  Yr = null,
  Au = null;
function Ru() {
  Au = Yr = hs = null;
}
function Ou(e) {
  var t = ps.current;
  (se(ps), (e._currentValue = t));
}
function kc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function to(e, t) {
  ((hs = e),
    (Au = Yr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null)));
}
function xt(e) {
  var t = e._currentValue;
  if (Au !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yr === null)) {
      if (hs === null) throw Error(F(308));
      ((Yr = e), (hs.dependencies = { lanes: 0, firstContext: e }));
    } else Yr = Yr.next = e;
  return t;
}
var or = null;
function Bu(e) {
  or === null ? (or = [e]) : or.push(e);
}
function tm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Bu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    sn(e, r)
  );
}
function sn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var jn = !1;
function Du(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function nm(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function rn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      sn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Bu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    sn(e, n)
  );
}
function Wa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), wu(e, n));
  }
}
function pf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (a === null ? (o = a = s) : (a = a.next = s), (n = n.next));
      } while (n !== null);
      a === null ? (o = a = t) : (a = a.next = t);
    } else o = a = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ms(e, t, n, r) {
  var o = e.updateQueue;
  jn = !1;
  var a = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var c = l,
      u = c.next;
    ((c.next = null), s === null ? (a = u) : (s.next = u), (s = c));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (l = p.lastBaseUpdate),
      l !== s &&
        (l === null ? (p.firstBaseUpdate = u) : (l.next = u),
        (p.lastBaseUpdate = c)));
  }
  if (a !== null) {
    var f = o.baseState;
    ((s = 0), (p = u = c = null), (l = a));
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        p !== null &&
          (p = p.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            y = l;
          switch (((d = t), (m = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                f = w.call(m, f, d);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (d = typeof w == "function" ? w.call(m, f, d) : w),
                d == null)
              )
                break e;
              f = he({}, f, d);
              break e;
            case 2:
              jn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        ((m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          p === null ? ((u = p = m), (c = f)) : (p = p.next = m),
          (s |= d));
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        ((d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (p === null && (c = f),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else a === null && (o.shared.lanes = 0);
    ((gr |= s), (e.lanes = s), (e.memoizedState = f));
  }
}
function hf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(F(191, o));
        o.call(r);
      }
    }
}
var ra = {},
  Vt = Xn(ra),
  _i = Xn(ra),
  zi = Xn(ra);
function ir(e) {
  if (e === ra) throw Error(F(174));
  return e;
}
function Mu(e, t) {
  switch ((re(zi, t), re(_i, e), re(Vt, ra), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oc(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oc(t, e)));
  }
  (se(Vt), re(Vt, t));
}
function wo() {
  (se(Vt), se(_i), se(zi));
}
function rm(e) {
  ir(zi.current);
  var t = ir(Vt.current),
    n = oc(t, e.type);
  t !== n && (re(_i, e), re(Vt, n));
}
function _u(e) {
  _i.current === e && (se(Vt), se(_i));
}
var fe = Xn(0);
function gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Fl = [];
function zu() {
  for (var e = 0; e < Fl.length; e++)
    Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var $a = dn.ReactCurrentDispatcher,
  Pl = dn.ReactCurrentBatchConfig,
  mr = 0,
  pe = null,
  Ce = null,
  Se = null,
  ys = !1,
  wi = !1,
  Li = 0,
  Ky = 0;
function Be() {
  throw Error(F(321));
}
function Lu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!At(e[n], t[n])) return !1;
  return !0;
}
function Iu(e, t, n, r, o, a) {
  if (
    ((mr = a),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($a.current = e === null || e.memoizedState === null ? Zy : ex),
    (e = n(r, o)),
    wi)
  ) {
    a = 0;
    do {
      if (((wi = !1), (Li = 0), 25 <= a)) throw Error(F(301));
      ((a += 1),
        (Se = Ce = null),
        (t.updateQueue = null),
        ($a.current = tx),
        (e = n(r, o)));
    } while (wi);
  }
  if (
    (($a.current = xs),
    (t = Ce !== null && Ce.next !== null),
    (mr = 0),
    (Se = Ce = pe = null),
    (ys = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function Wu() {
  var e = Li !== 0;
  return ((Li = 0), e);
}
function Lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Se === null ? (pe.memoizedState = Se = e) : (Se = Se.next = e), Se);
}
function vt() {
  if (Ce === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = Se === null ? pe.memoizedState : Se.next;
  if (t !== null) ((Se = t), (Ce = e));
  else {
    if (e === null) throw Error(F(310));
    ((Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      Se === null ? (pe.memoizedState = Se = e) : (Se = Se.next = e));
  }
  return Se;
}
function Ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    o = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = a.next), (a.next = s));
    }
    ((r.baseQueue = o = a), (n.pending = null));
  }
  if (o !== null) {
    ((a = o.next), (r = r.baseState));
    var l = (s = null),
      c = null,
      u = a;
    do {
      var p = u.lane;
      if ((mr & p) === p)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((l = c = f), (s = r)) : (c = c.next = f),
          (pe.lanes |= p),
          (gr |= p));
      }
      u = u.next;
    } while (u !== null && u !== a);
    (c === null ? (s = r) : (c.next = l),
      At(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((a = o.lane), (pe.lanes |= a), (gr |= a), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Rl(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    a = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((a = e(a, s.action)), (s = s.next));
    while (s !== o);
    (At(a, t.memoizedState) || (Ke = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a));
  }
  return [a, r];
}
function om() {}
function im(e, t) {
  var n = pe,
    r = vt(),
    o = t(),
    a = !At(r.memoizedState, o);
  if (
    (a && ((r.memoizedState = o), (Ke = !0)),
    (r = r.queue),
    $u(lm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Wi(9, sm.bind(null, n, r, o, t), void 0, null),
      Te === null)
    )
      throw Error(F(349));
    mr & 30 || am(n, t, o);
  }
  return o;
}
function am(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function sm(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), cm(t) && um(e));
}
function lm(e, t, n) {
  return n(function () {
    cm(t) && um(e);
  });
}
function cm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function um(e) {
  var t = sn(e, 1);
  t !== null && Pt(t, e, 1, -1);
}
function mf(e) {
  var t = Lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ii,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jy.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function Wi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dm() {
  return vt().memoizedState;
}
function Ha(e, t, n, r) {
  var o = Lt();
  ((pe.flags |= e),
    (o.memoizedState = Wi(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Is(e, t, n, r) {
  var o = vt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ce !== null) {
    var s = Ce.memoizedState;
    if (((a = s.destroy), r !== null && Lu(r, s.deps))) {
      o.memoizedState = Wi(t, n, a, r);
      return;
    }
  }
  ((pe.flags |= e), (o.memoizedState = Wi(1 | t, n, a, r)));
}
function gf(e, t) {
  return Ha(8390656, 8, e, t);
}
function $u(e, t) {
  return Is(2048, 8, e, t);
}
function fm(e, t) {
  return Is(4, 2, e, t);
}
function pm(e, t) {
  return Is(4, 4, e, t);
}
function hm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Is(4, 4, hm.bind(null, t, e), n)
  );
}
function Hu() {}
function gm(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ym(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xm(e, t, n) {
  return mr & 21
    ? (At(n, t) || ((n = jh()), (pe.lanes |= n), (gr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function Qy(e, t) {
  var n = te;
  ((te = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Pl.transition;
  Pl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((te = n), (Pl.transition = r));
  }
}
function vm() {
  return vt().memoizedState;
}
function Xy(e, t, n) {
  var r = Wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    wm(e))
  )
    bm(t, n);
  else if (((n = tm(e, t, n, r)), n !== null)) {
    var o = Ue();
    (Pt(n, e, r, o), Cm(n, t, r));
  }
}
function Jy(e, t, n) {
  var r = Wn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wm(e)) bm(t, o);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = a(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), At(l, s))) {
          var c = t.interleaved;
          (c === null
            ? ((o.next = o), Bu(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = tm(e, t, o, r)),
      n !== null && ((o = Ue()), Pt(n, e, r, o), Cm(n, t, r)));
  }
}
function wm(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function bm(e, t) {
  wi = ys = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Cm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), wu(e, n));
  }
}
var xs = {
    readContext: xt,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1,
  },
  Zy = {
    readContext: xt,
    useCallback: function (e, t) {
      return ((Lt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: xt,
    useEffect: gf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ha(4194308, 4, hm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ha(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ha(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Lt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xy.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Lt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: mf,
    useDebugValue: Hu,
    useDeferredValue: function (e) {
      return (Lt().memoizedState = e);
    },
    useTransition: function () {
      var e = mf(!1),
        t = e[0];
      return ((e = Qy.bind(null, e[1])), (Lt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        o = Lt();
      if (ue) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), Te === null)) throw Error(F(349));
        mr & 30 || am(r, t, n);
      }
      o.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (o.queue = a),
        gf(lm.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Wi(9, sm.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Lt(),
        t = Te.identifierPrefix;
      if (ue) {
        var n = nn,
          r = tn;
        ((n = (r & ~(1 << (32 - Ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Li++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Ky++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ex = {
    readContext: xt,
    useCallback: gm,
    useContext: xt,
    useEffect: $u,
    useImperativeHandle: mm,
    useInsertionEffect: fm,
    useLayoutEffect: pm,
    useMemo: ym,
    useReducer: Al,
    useRef: dm,
    useState: function () {
      return Al(Ii);
    },
    useDebugValue: Hu,
    useDeferredValue: function (e) {
      var t = vt();
      return xm(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Ii)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: om,
    useSyncExternalStore: im,
    useId: vm,
    unstable_isNewReconciler: !1,
  },
  tx = {
    readContext: xt,
    useCallback: gm,
    useContext: xt,
    useEffect: $u,
    useImperativeHandle: mm,
    useInsertionEffect: fm,
    useLayoutEffect: pm,
    useMemo: ym,
    useReducer: Rl,
    useRef: dm,
    useState: function () {
      return Rl(Ii);
    },
    useDebugValue: Hu,
    useDeferredValue: function (e) {
      var t = vt();
      return Ce === null ? (t.memoizedState = e) : xm(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Rl(Ii)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: om,
    useSyncExternalStore: im,
    useId: vm,
    unstable_isNewReconciler: !1,
  };
function jt(e, t) {
  if (e && e.defaultProps) {
    ((t = he({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Sc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ws = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? br(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      o = Wn(e),
      a = rn(r, o);
    ((a.payload = t),
      n != null && (a.callback = n),
      (t = Ln(e, a, o)),
      t !== null && (Pt(t, e, o, r), Wa(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      o = Wn(e),
      a = rn(r, o);
    ((a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Ln(e, a, o)),
      t !== null && (Pt(t, e, o, r), Wa(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ue(),
      r = Wn(e),
      o = rn(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Ln(e, o, r)),
      t !== null && (Pt(t, e, r, n), Wa(t, e, r)));
  },
};
function yf(e, t, n, r, o, a, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Oi(n, r) || !Oi(o, a)
        : !0
  );
}
function jm(e, t, n) {
  var r = !1,
    o = Vn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = xt(a))
      : ((o = Xe(t) ? pr : ze.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? yo(e, o) : Vn)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ws),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function xf(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ws.enqueueReplaceState(t, t.state, null));
}
function Tc(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Du(e));
  var a = t.contextType;
  (typeof a == "object" && a !== null
    ? (o.context = xt(a))
    : ((a = Xe(t) ? pr : ze.current), (o.context = yo(e, a))),
    (o.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Sc(e, t, a, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ws.enqueueReplaceState(o, o.state, null),
      ms(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function bo(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += F0(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (a) {
    o =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ec(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nx = typeof WeakMap == "function" ? WeakMap : Map;
function km(e, t, n) {
  ((n = rn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (ws || ((ws = !0), (_c = r)), Ec(e, t));
    }),
    n
  );
}
function Sm(e, t, n) {
  ((n = rn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ec(e, t);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        (Ec(e, t),
          typeof r != "function" &&
            (In === null ? (In = new Set([this])) : In.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function vf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nx();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = gx.bind(null, e, t, n)), t.then(e, e));
}
function wf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = rn(-1, 1)), (t.tag = 2), Ln(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rx = dn.ReactCurrentOwner,
  Ke = !1;
function $e(e, t, n, r) {
  t.child = e === null ? em(t, null, n, r) : vo(t, e.child, n, r);
}
function Cf(e, t, n, r, o) {
  n = n.render;
  var a = t.ref;
  return (
    to(t, o),
    (r = Iu(e, t, n, r, a, o)),
    (n = Wu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ln(e, t, o))
      : (ue && n && Nu(t), (t.flags |= 1), $e(e, t, r, o), t.child)
  );
}
function jf(e, t, n, r, o) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Xu(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Tm(e, t, a, r, o))
      : ((e = qa(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & o))) {
    var s = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Oi), n(s, r) && e.ref === t.ref)
    )
      return ln(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = $n(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Tm(e, t, n, r, o) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Oi(a, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = a), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return ((t.lanes = e.lanes), ln(e, t, o));
  }
  return Nc(e, t, n, r, o);
}
function Em(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(Qr, ot),
        (ot |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(Qr, ot),
          (ot |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        re(Qr, ot),
        (ot |= r));
    }
  else
    (a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(Qr, ot),
      (ot |= r));
  return ($e(e, t, o, n), t.child);
}
function Nm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nc(e, t, n, r, o) {
  var a = Xe(n) ? pr : ze.current;
  return (
    (a = yo(t, a)),
    to(t, o),
    (n = Iu(e, t, n, r, a, o)),
    (r = Wu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ln(e, t, o))
      : (ue && r && Nu(t), (t.flags |= 1), $e(e, t, n, o), t.child)
  );
}
function kf(e, t, n, r, o) {
  if (Xe(n)) {
    var a = !0;
    us(t);
  } else a = !1;
  if ((to(t, o), t.stateNode === null))
    (Ua(e, t), jm(t, n, r), Tc(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var c = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = xt(u))
      : ((u = Xe(n) ? pr : ze.current), (u = yo(t, u)));
    var p = n.getDerivedStateFromProps,
      f =
        typeof p == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && xf(t, s, r, u)),
      (jn = !1));
    var d = t.memoizedState;
    ((s.state = d),
      ms(t, r, s, o),
      (c = t.memoizedState),
      l !== r || d !== c || Qe.current || jn
        ? (typeof p == "function" && (Sc(t, n, p, r), (c = t.memoizedState)),
          (l = jn || yf(t, n, l, r, d, c, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (s.props = r),
          (s.state = c),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      nm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : jt(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = xt(c))
        : ((c = Xe(n) ? pr : ze.current), (c = yo(t, c))));
    var m = n.getDerivedStateFromProps;
    ((p =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== c) && xf(t, s, r, c)),
      (jn = !1),
      (d = t.memoizedState),
      (s.state = d),
      ms(t, r, s, o));
    var w = t.memoizedState;
    l !== f || d !== w || Qe.current || jn
      ? (typeof m == "function" && (Sc(t, n, m, r), (w = t.memoizedState)),
        (u = jn || yf(t, n, u, r, d, w, c) || !1)
          ? (p ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, c),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, c)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = c),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Fc(e, t, n, r, a, o);
}
function Fc(e, t, n, r, o, a) {
  Nm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && cf(t, n, !1), ln(e, t, a));
  ((r = t.stateNode), (rx.current = t));
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = vo(t, e.child, null, a)), (t.child = vo(t, null, l, a)))
      : $e(e, t, l, a),
    (t.memoizedState = r.state),
    o && cf(t, n, !0),
    t.child
  );
}
function Fm(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? lf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && lf(e, t.context, !1),
    Mu(e, t.containerInfo));
}
function Sf(e, t, n, r, o) {
  return (xo(), Pu(o), (t.flags |= 256), $e(e, t, n, r), t.child);
}
var Pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ac(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pm(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    a = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    re(fe, o & 1),
    e === null)
  )
    return (
      jc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = s))
                : (a = Us(s, r, 0, null)),
              (e = dr(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Ac(n)),
              (t.memoizedState = Pc),
              e)
            : Uu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return ox(e, t, s, r, l, o, n);
  if (a) {
    ((a = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling));
    var c = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = $n(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (a = $n(l, a)) : ((a = dr(a, s, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ac(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (a.memoizedState = s),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pc),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = $n(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uu(e, t) {
  return (
    (t = Us({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Sa(e, t, n, r) {
  return (
    r !== null && Pu(r),
    vo(t, e.child, null, n),
    (e = Uu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ox(e, t, n, r, o, a, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ol(Error(F(422)))), Sa(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = r.fallback),
          (o = t.mode),
          (r = Us({ mode: "visible", children: r.children }, o, 0, null)),
          (a = dr(a, o, s, null)),
          (a.flags |= 2),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          t.mode & 1 && vo(t, e.child, null, s),
          (t.child.memoizedState = Ac(s)),
          (t.memoizedState = Pc),
          a);
  if (!(t.mode & 1)) return Sa(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (a = Error(F(419))),
      (r = Ol(a, r, void 0)),
      Sa(e, t, s, r)
    );
  }
  if (((l = (s & e.childLanes) !== 0), Ke || l)) {
    if (((r = Te), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== a.retryLane &&
          ((a.retryLane = o), sn(e, o), Pt(r, e, o, -1)));
    }
    return (Qu(), (r = Ol(Error(F(421)))), Sa(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yx.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (at = zn(o.nextSibling)),
      (st = t),
      (ue = !0),
      (Et = null),
      e !== null &&
        ((ht[mt++] = tn),
        (ht[mt++] = nn),
        (ht[mt++] = hr),
        (tn = e.id),
        (nn = e.overflow),
        (hr = t)),
      (t = Uu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), kc(e.return, t, n));
}
function Bl(e, t, n, r, o) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = o));
}
function Am(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    a = r.tail;
  if (($e(e, t, r.children, n), (r = fe.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tf(e, n, t);
        else if (e.tag === 19) Tf(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((re(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && gs(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Bl(t, !1, o, n, a));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gs(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Bl(t, !0, n, null, a);
        break;
      case "together":
        Bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ua(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ln(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = $n(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function ix(e, t, n) {
  switch (t.tag) {
    case 3:
      (Fm(t), xo());
      break;
    case 5:
      rm(t);
      break;
    case 1:
      Xe(t.type) && us(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (re(ps, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Pm(e, t, n)
            : (re(fe, fe.current & 1),
              (e = ln(e, t, n)),
              e !== null ? e.sibling : null);
      re(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Am(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        re(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Em(e, t, n));
  }
  return ln(e, t, n);
}
var Rm, Rc, Om, Bm;
Rm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Rc = function () {};
Om = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), ir(Vt.current));
    var a = null;
    switch (n) {
      case "input":
        ((o = ec(e, o)), (r = ec(e, r)), (a = []));
        break;
      case "select":
        ((o = he({}, o, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (a = []));
        break;
      case "textarea":
        ((o = rc(e, o)), (r = rc(e, r)), (a = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ls);
    }
    ic(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ti.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (c && c.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in c)
              c.hasOwnProperty(s) &&
                l[s] !== c[s] &&
                (n || (n = {}), (n[s] = c[s]));
          } else (n || (a || (a = []), a.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (a = a || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (a = a || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ti.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && ae("scroll", e),
                    a || l === c || (a = []))
                  : (a = a || []).push(u, c));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Bm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wo(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function ax(e, t, n) {
  var r = t.pendingProps;
  switch ((Fu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (De(t), null);
    case 1:
      return (Xe(t.type) && cs(), De(t), null);
    case 3:
      return (
        (r = t.stateNode),
        wo(),
        se(Qe),
        se(ze),
        zu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ja(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Et !== null && (Ic(Et), (Et = null)))),
        Rc(e, t),
        De(t),
        null
      );
    case 5:
      _u(t);
      var o = ir(zi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Om(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return (De(t), null);
        }
        if (((e = ir(Vt.current)), ja(t))) {
          ((r = t.stateNode), (n = t.type));
          var a = t.memoizedProps;
          switch (((r[Ht] = t), (r[Mi] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (ae("cancel", r), ae("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < pi.length; o++) ae(pi[o], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (ae("error", r), ae("load", r));
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              (Bd(r, a), ae("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!a.multiple }),
                ae("invalid", r));
              break;
            case "textarea":
              (Md(r, a), ae("invalid", r));
          }
          (ic(n, a), (o = null));
          for (var s in a)
            if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Ca(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Ca(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Ti.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              (ha(r), Dd(r, a, !0));
              break;
            case "textarea":
              (ha(r), _d(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ls);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = lh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ht] = t),
            (e[Mi] = r),
            Rm(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = ac(n, r)), n)) {
              case "dialog":
                (ae("cancel", e), ae("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ae("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < pi.length; o++) ae(pi[o], e);
                o = r;
                break;
              case "source":
                (ae("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (ae("error", e), ae("load", e), (o = r));
                break;
              case "details":
                (ae("toggle", e), (o = r));
                break;
              case "input":
                (Bd(e, r), (o = ec(e, r)), ae("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = he({}, r, { value: void 0 })),
                  ae("invalid", e));
                break;
              case "textarea":
                (Md(e, r), (o = rc(e, r)), ae("invalid", e));
                break;
              default:
                o = r;
            }
            (ic(n, o), (l = o));
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var c = l[a];
                a === "style"
                  ? dh(e, c)
                  : a === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && ch(e, c))
                    : a === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Ei(e, c)
                        : typeof c == "number" && Ei(e, "" + c)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (Ti.hasOwnProperty(a)
                          ? c != null && a === "onScroll" && ae("scroll", e)
                          : c != null && hu(e, a, c, s));
              }
            switch (n) {
              case "input":
                (ha(e), Dd(e, r, !1));
                break;
              case "textarea":
                (ha(e), _d(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Un(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? Xr(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      Xr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ls);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (De(t), null);
    case 6:
      if (e && t.stateNode != null) Bm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = ir(zi.current)), ir(Vt.current), ja(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ht] = t),
            (a = r.nodeValue !== n) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ca(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ca(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ht] = t),
            (t.stateNode = r));
      }
      return (De(t), null);
    case 13:
      if (
        (se(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && at !== null && t.mode & 1 && !(t.flags & 128))
          (Jh(), xo(), (t.flags |= 98560), (a = !1));
        else if (((a = ja(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(F(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(F(317));
            a[Ht] = t;
          } else
            (xo(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (De(t), (a = !1));
        } else (Et !== null && (Ic(Et), (Et = null)), (a = !0));
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? ke === 0 && (ke = 3) : Qu())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (
        wo(),
        Rc(e, t),
        e === null && Bi(t.stateNode.containerInfo),
        De(t),
        null
      );
    case 10:
      return (Ou(t.type._context), De(t), null);
    case 17:
      return (Xe(t.type) && cs(), De(t), null);
    case 19:
      if ((se(fe), (a = t.memoizedState), a === null)) return (De(t), null);
      if (((r = (t.flags & 128) !== 0), (s = a.rendering), s === null))
        if (r) Wo(a, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = gs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Wo(a, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (s = a.alternate),
                    s === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = s.childLanes),
                        (a.lanes = s.lanes),
                        (a.child = s.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = s.memoizedProps),
                        (a.memoizedState = s.memoizedState),
                        (a.updateQueue = s.updateQueue),
                        (a.type = s.type),
                        (e = s.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (re(fe, (fe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            ye() > Co &&
            ((t.flags |= 128), (r = !0), Wo(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Wo(a, !0),
              a.tail === null && a.tailMode === "hidden" && !s.alternate && !ue)
            )
              return (De(t), null);
          } else
            2 * ye() - a.renderingStartTime > Co &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Wo(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = a.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (a.last = s));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = ye()),
          (t.sibling = null),
          (n = fe.current),
          re(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        Ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function sx(e, t) {
  switch ((Fu(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && cs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wo(),
        se(Qe),
        se(ze),
        zu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (_u(t), null);
    case 13:
      if (
        (se(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        xo();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (se(fe), null);
    case 4:
      return (wo(), null);
    case 10:
      return (Ou(t.type._context), null);
    case 22:
    case 23:
      return (Ku(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ta = !1,
  _e = !1,
  lx = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function Kr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function Oc(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var Ef = !1;
function cx(e, t) {
  if (((gc = is), (e = Lh()), Eu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, a.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            c = -1,
            u = 0,
            p = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== a || (r !== 0 && f.nodeType !== 3) || (c = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;
            )
              ((d = f), (f = m));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (l = s),
                d === a && ++p === r && (c = s),
                (m = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = m;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yc = { focusedElem: e, selectionRange: n }, is = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (B = e));
    else
      for (; B !== null; ) {
        t = B;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    b = w.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : jt(t.type, y),
                      b,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (C) {
          ge(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (B = e));
          break;
        }
        B = t.return;
      }
  return ((w = Ef), (Ef = !1), w);
}
function bi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var a = o.destroy;
        ((o.destroy = void 0), a !== void 0 && Oc(t, n, a));
      }
      o = o.next;
    } while (o !== r);
  }
}
function $s(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Dm(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Dm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ht], delete t[Mi], delete t[wc], delete t[Vy], delete t[Gy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Mm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Dc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ls)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dc(e, t, n), e = e.sibling; e !== null; )
      (Dc(e, t, n), (e = e.sibling));
}
function Mc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mc(e, t, n), e = e.sibling; e !== null; )
      (Mc(e, t, n), (e = e.sibling));
}
var Pe = null,
  Tt = !1;
function yn(e, t, n) {
  for (n = n.child; n !== null; ) (_m(e, t, n), (n = n.sibling));
}
function _m(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function")
    try {
      Ut.onCommitFiberUnmount(Bs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || Kr(n, t);
    case 6:
      var r = Pe,
        o = Tt;
      ((Pe = null),
        yn(e, t, n),
        (Pe = r),
        (Tt = o),
        Pe !== null &&
          (Tt
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode)));
      break;
    case 18:
      Pe !== null &&
        (Tt
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? El(e.parentNode, n)
              : e.nodeType === 1 && El(e, n),
            Ai(e))
          : El(Pe, n.stateNode));
      break;
    case 4:
      ((r = Pe),
        (o = Tt),
        (Pe = n.stateNode.containerInfo),
        (Tt = !0),
        yn(e, t, n),
        (Pe = r),
        (Tt = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var a = o,
            s = a.destroy;
          ((a = a.tag),
            s !== void 0 && (a & 2 || a & 4) && Oc(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      yn(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (Kr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          ge(n, t, l);
        }
      yn(e, t, n);
      break;
    case 21:
      yn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), yn(e, t, n), (_e = r))
        : yn(e, t, n);
      break;
    default:
      yn(e, t, n);
  }
}
function Ff(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new lx()),
      t.forEach(function (r) {
        var o = xx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function bt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var a = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((Pe = l.stateNode), (Tt = !1));
              break e;
            case 3:
              ((Pe = l.stateNode.containerInfo), (Tt = !0));
              break e;
            case 4:
              ((Pe = l.stateNode.containerInfo), (Tt = !0));
              break e;
          }
          l = l.return;
        }
        if (Pe === null) throw Error(F(160));
        (_m(a, s, o), (Pe = null), (Tt = !1));
        var c = o.alternate;
        (c !== null && (c.return = null), (o.return = null));
      } catch (u) {
        ge(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (zm(t, e), (t = t.sibling));
}
function zm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((bt(t, e), _t(e), r & 4)) {
        try {
          (bi(3, e, e.return), $s(3, e));
        } catch (y) {
          ge(e, e.return, y);
        }
        try {
          bi(5, e, e.return);
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 1:
      (bt(t, e), _t(e), r & 512 && n !== null && Kr(n, n.return));
      break;
    case 5:
      if (
        (bt(t, e),
        _t(e),
        r & 512 && n !== null && Kr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ei(o, "");
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var a = e.memoizedProps,
          s = n !== null ? n.memoizedProps : a,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (l === "input" && a.type === "radio" && a.name != null && ah(o, a),
              ac(l, s));
            var u = ac(l, a);
            for (s = 0; s < c.length; s += 2) {
              var p = c[s],
                f = c[s + 1];
              p === "style"
                ? dh(o, f)
                : p === "dangerouslySetInnerHTML"
                  ? ch(o, f)
                  : p === "children"
                    ? Ei(o, f)
                    : hu(o, p, f, u);
            }
            switch (l) {
              case "input":
                tc(o, a);
                break;
              case "textarea":
                sh(o, a);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!a.multiple;
                var m = a.value;
                m != null
                  ? Xr(o, !!a.multiple, m, !1)
                  : d !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Xr(o, !!a.multiple, a.defaultValue, !0)
                      : Xr(o, !!a.multiple, a.multiple ? [] : "", !1));
            }
            o[Mi] = a;
          } catch (y) {
            ge(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((bt(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        ((o = e.stateNode), (a = e.memoizedProps));
        try {
          o.nodeValue = a;
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (bt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ai(t.containerInfo);
        } catch (y) {
          ge(e, e.return, y);
        }
      break;
    case 4:
      (bt(t, e), _t(e));
      break;
    case 13:
      (bt(t, e),
        _t(e),
        (o = e.child),
        o.flags & 8192 &&
          ((a = o.memoizedState !== null),
          (o.stateNode.isHidden = a),
          !a ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (qu = ye())),
        r & 4 && Ff(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (u = _e) || p), bt(t, e), (_e = u)) : bt(t, e),
        _t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (B = e, p = e.child; p !== null; ) {
            for (f = B = p; B !== null; ) {
              switch (((d = B), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bi(4, d, d.return);
                  break;
                case 1:
                  Kr(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (y) {
                      ge(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Kr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Af(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (B = m)) : Af(f);
            }
            p = p.sibling;
          }
        e: for (p = null, f = e; ; ) {
          if (f.tag === 5) {
            if (p === null) {
              p = f;
              try {
                ((o = f.stateNode),
                  u
                    ? ((a = o.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = f.stateNode),
                      (c = f.memoizedProps.style),
                      (s =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = uh("display", s))));
              } catch (y) {
                ge(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (p === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                ge(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (p === f && (p = null), (f = f.return));
          }
          (p === f && (p = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (bt(t, e), _t(e), r & 4 && Ff(e));
      break;
    case 21:
      break;
    default:
      (bt(t, e), _t(e));
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ei(o, ""), (r.flags &= -33));
          var a = Nf(e);
          Mc(e, a, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Nf(e);
          Dc(e, l, s);
          break;
        default:
          throw Error(F(161));
      }
    } catch (c) {
      ge(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ux(e, t, n) {
  ((B = e), Lm(e));
}
function Lm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B,
      a = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ta;
      if (!s) {
        var l = o.alternate,
          c = (l !== null && l.memoizedState !== null) || _e;
        l = Ta;
        var u = _e;
        if (((Ta = s), (_e = c) && !u))
          for (B = o; B !== null; )
            ((s = B),
              (c = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Rf(o)
                : c !== null
                  ? ((c.return = s), (B = c))
                  : Rf(o));
        for (; a !== null; ) ((B = a), Lm(a), (a = a.sibling));
        ((B = o), (Ta = l), (_e = u));
      }
      Pf(e);
    } else
      o.subtreeFlags & 8772 && a !== null ? ((a.return = o), (B = a)) : Pf(e);
  }
}
function Pf(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || $s(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && hf(t, a, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var f = p.dehydrated;
                    f !== null && Ai(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        _e || (t.flags & 512 && Bc(t));
      } catch (d) {
        ge(t, t.return, d);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (B = n));
      break;
    }
    B = t.return;
  }
}
function Af(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (B = n));
      break;
    }
    B = t.return;
  }
}
function Rf(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $s(4, t);
          } catch (c) {
            ge(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              ge(t, o, c);
            }
          }
          var a = t.return;
          try {
            Bc(t);
          } catch (c) {
            ge(t, a, c);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Bc(t);
          } catch (c) {
            ge(t, s, c);
          }
      }
    } catch (c) {
      ge(t, t.return, c);
    }
    if (t === e) {
      B = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (B = l));
      break;
    }
    B = t.return;
  }
}
var dx = Math.ceil,
  vs = dn.ReactCurrentDispatcher,
  Vu = dn.ReactCurrentOwner,
  yt = dn.ReactCurrentBatchConfig,
  J = 0,
  Te = null,
  ve = null,
  Ae = 0,
  ot = 0,
  Qr = Xn(0),
  ke = 0,
  $i = null,
  gr = 0,
  Hs = 0,
  Gu = 0,
  Ci = null,
  Ye = null,
  qu = 0,
  Co = 1 / 0,
  Jt = null,
  ws = !1,
  _c = null,
  In = null,
  Ea = !1,
  Rn = null,
  bs = 0,
  ji = 0,
  zc = null,
  Va = -1,
  Ga = 0;
function Ue() {
  return J & 6 ? ye() : Va !== -1 ? Va : (Va = ye());
}
function Wn(e) {
  return e.mode & 1
    ? J & 2 && Ae !== 0
      ? Ae & -Ae
      : Yy.transition !== null
        ? (Ga === 0 && (Ga = jh()), Ga)
        : ((e = te),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ph(e.type))),
          e)
    : 1;
}
function Pt(e, t, n, r) {
  if (50 < ji) throw ((ji = 0), (zc = null), Error(F(185)));
  (ea(e, n, r),
    (!(J & 2) || e !== Te) &&
      (e === Te && (!(J & 2) && (Hs |= n), ke === 4 && Sn(e, Ae)),
      Je(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((Co = ye() + 500), Ls && Jn())));
}
function Je(e, t) {
  var n = e.callbackNode;
  Y0(e, t);
  var r = os(e, e === Te ? Ae : 0);
  if (r === 0)
    (n !== null && Id(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Id(n), t === 1))
      (e.tag === 0 ? qy(Of.bind(null, e)) : Kh(Of.bind(null, e)),
        Hy(function () {
          !(J & 6) && Jn();
        }),
        (n = null));
    else {
      switch (kh(r)) {
        case 1:
          n = vu;
          break;
        case 4:
          n = bh;
          break;
        case 16:
          n = rs;
          break;
        case 536870912:
          n = Ch;
          break;
        default:
          n = rs;
      }
      n = qm(n, Im.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Im(e, t) {
  if (((Va = -1), (Ga = 0), J & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (no() && e.callbackNode !== n) return null;
  var r = os(e, e === Te ? Ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var a = $m();
    (Te !== e || Ae !== t) && ((Jt = null), (Co = ye() + 500), ur(e, t));
    do
      try {
        hx();
        break;
      } catch (l) {
        Wm(e, l);
      }
    while (!0);
    (Ru(),
      (vs.current = a),
      (J = o),
      ve !== null ? (t = 0) : ((Te = null), (Ae = 0), (t = ke)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = dc(e)), o !== 0 && ((r = o), (t = Lc(e, o)))), t === 1)
    )
      throw ((n = $i), ur(e, 0), Sn(e, r), Je(e, ye()), n);
    if (t === 6) Sn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !fx(o) &&
          ((t = Cs(e, r)),
          t === 2 && ((a = dc(e)), a !== 0 && ((r = a), (t = Lc(e, a)))),
          t === 1))
      )
        throw ((n = $i), ur(e, 0), Sn(e, r), Je(e, ye()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          nr(e, Ye, Jt);
          break;
        case 3:
          if (
            (Sn(e, r), (r & 130023424) === r && ((t = qu + 500 - ye()), 10 < t))
          ) {
            if (os(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Ue(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = vc(nr.bind(null, e, Ye, Jt), t);
            break;
          }
          nr(e, Ye, Jt);
          break;
        case 4:
          if ((Sn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Ft(r);
            ((a = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~a));
          }
          if (
            ((r = o),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * dx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vc(nr.bind(null, e, Ye, Jt), r);
            break;
          }
          nr(e, Ye, Jt);
          break;
        case 5:
          nr(e, Ye, Jt);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return (Je(e, ye()), e.callbackNode === n ? Im.bind(null, e) : null);
}
function Lc(e, t) {
  var n = Ci;
  return (
    e.current.memoizedState.isDehydrated && (ur(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && Ic(t)),
    e
  );
}
function Ic(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function fx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            a = o.getSnapshot;
          o = o.value;
          try {
            if (!At(a(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Sn(e, t) {
  for (
    t &= ~Gu,
      t &= ~Hs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ft(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Of(e) {
  if (J & 6) throw Error(F(327));
  no();
  var t = os(e, 0);
  if (!(t & 1)) return (Je(e, ye()), null);
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = dc(e);
    r !== 0 && ((t = r), (n = Lc(e, r)));
  }
  if (n === 1) throw ((n = $i), ur(e, 0), Sn(e, t), Je(e, ye()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nr(e, Ye, Jt),
    Je(e, ye()),
    null
  );
}
function Yu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    ((J = n), J === 0 && ((Co = ye() + 500), Ls && Jn()));
  }
}
function yr(e) {
  Rn !== null && Rn.tag === 0 && !(J & 6) && no();
  var t = J;
  J |= 1;
  var n = yt.transition,
    r = te;
  try {
    if (((yt.transition = null), (te = 1), e)) return e();
  } finally {
    ((te = r), (yt.transition = n), (J = t), !(J & 6) && Jn());
  }
}
function Ku() {
  ((ot = Qr.current), se(Qr));
}
function ur(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $y(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Fu(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && cs());
          break;
        case 3:
          (wo(), se(Qe), se(ze), zu());
          break;
        case 5:
          _u(r);
          break;
        case 4:
          wo();
          break;
        case 13:
          se(fe);
          break;
        case 19:
          se(fe);
          break;
        case 10:
          Ou(r.type._context);
          break;
        case 22:
        case 23:
          Ku();
      }
      n = n.return;
    }
  if (
    ((Te = e),
    (ve = e = $n(e.current, null)),
    (Ae = ot = t),
    (ke = 0),
    ($i = null),
    (Gu = Hs = gr = 0),
    (Ye = Ci = null),
    or !== null)
  ) {
    for (t = 0; t < or.length; t++)
      if (((n = or[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          a = n.pending;
        if (a !== null) {
          var s = a.next;
          ((a.next = o), (r.next = s));
        }
        n.pending = r;
      }
    or = null;
  }
  return e;
}
function Wm(e, t) {
  do {
    var n = ve;
    try {
      if ((Ru(), ($a.current = xs), ys)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        ys = !1;
      }
      if (
        ((mr = 0),
        (Se = Ce = pe = null),
        (wi = !1),
        (Li = 0),
        (Vu.current = null),
        n === null || n.return === null)
      ) {
        ((ke = 1), ($i = t), (ve = null));
        break;
      }
      e: {
        var a = e,
          s = n.return,
          l = n,
          c = t;
        if (
          ((t = Ae),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            p = l,
            f = p.tag;
          if (!(p.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = p.alternate;
            d
              ? ((p.updateQueue = d.updateQueue),
                (p.memoizedState = d.memoizedState),
                (p.lanes = d.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var m = wf(s);
          if (m !== null) {
            ((m.flags &= -257),
              bf(m, s, l, a, t),
              m.mode & 1 && vf(a, u, t),
              (t = m),
              (c = u));
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              (y.add(c), (t.updateQueue = y));
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (vf(a, u, t), Qu());
              break e;
            }
            c = Error(F(426));
          }
        } else if (ue && l.mode & 1) {
          var b = wf(s);
          if (b !== null) {
            (!(b.flags & 65536) && (b.flags |= 256),
              bf(b, s, l, a, t),
              Pu(bo(c, l)));
            break e;
          }
        }
        ((a = c = bo(c, l)),
          ke !== 4 && (ke = 2),
          Ci === null ? (Ci = [a]) : Ci.push(a),
          (a = s));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
              var g = km(a, c, t);
              pf(a, g);
              break e;
            case 1:
              l = c;
              var h = a.type,
                v = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (In === null || !In.has(v))))
              ) {
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var C = Sm(a, l, t);
                pf(a, C);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Um(n);
    } catch (j) {
      ((t = j), ve === n && n !== null && (ve = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function $m() {
  var e = vs.current;
  return ((vs.current = xs), e === null ? xs : e);
}
function Qu() {
  ((ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Te === null || (!(gr & 268435455) && !(Hs & 268435455)) || Sn(Te, Ae));
}
function Cs(e, t) {
  var n = J;
  J |= 2;
  var r = $m();
  (Te !== e || Ae !== t) && ((Jt = null), ur(e, t));
  do
    try {
      px();
      break;
    } catch (o) {
      Wm(e, o);
    }
  while (!0);
  if ((Ru(), (J = n), (vs.current = r), ve !== null)) throw Error(F(261));
  return ((Te = null), (Ae = 0), ke);
}
function px() {
  for (; ve !== null; ) Hm(ve);
}
function hx() {
  for (; ve !== null && !L0(); ) Hm(ve);
}
function Hm(e) {
  var t = Gm(e.alternate, e, ot);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Um(e) : (ve = t),
    (Vu.current = null));
}
function Um(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = sx(n, t)), n !== null)) {
        ((n.flags &= 32767), (ve = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ke = 6), (ve = null));
        return;
      }
    } else if (((n = ax(n, t, ot)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function nr(e, t, n) {
  var r = te,
    o = yt.transition;
  try {
    ((yt.transition = null), (te = 1), mx(e, t, n, r));
  } finally {
    ((yt.transition = o), (te = r));
  }
  return null;
}
function mx(e, t, n, r) {
  do no();
  while (Rn !== null);
  if (J & 6) throw Error(F(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = n.lanes | n.childLanes;
  if (
    (K0(e, a),
    e === Te && ((ve = Te = null), (Ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ea ||
      ((Ea = !0),
      qm(rs, function () {
        return (no(), null);
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    ((a = yt.transition), (yt.transition = null));
    var s = te;
    te = 1;
    var l = J;
    ((J |= 4),
      (Vu.current = null),
      cx(e, n),
      zm(n, e),
      Dy(yc),
      (is = !!gc),
      (yc = gc = null),
      (e.current = n),
      ux(n),
      I0(),
      (J = l),
      (te = s),
      (yt.transition = a));
  } else e.current = n;
  if (
    (Ea && ((Ea = !1), (Rn = e), (bs = o)),
    (a = e.pendingLanes),
    a === 0 && (In = null),
    H0(n.stateNode),
    Je(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (ws) throw ((ws = !1), (e = _c), (_c = null), e);
  return (
    bs & 1 && e.tag !== 0 && no(),
    (a = e.pendingLanes),
    a & 1 ? (e === zc ? ji++ : ((ji = 0), (zc = e))) : (ji = 0),
    Jn(),
    null
  );
}
function no() {
  if (Rn !== null) {
    var e = kh(bs),
      t = yt.transition,
      n = te;
    try {
      if (((yt.transition = null), (te = 16 > e ? 16 : e), Rn === null))
        var r = !1;
      else {
        if (((e = Rn), (Rn = null), (bs = 0), J & 6)) throw Error(F(331));
        var o = J;
        for (J |= 4, B = e.current; B !== null; ) {
          var a = B,
            s = a.child;
          if (B.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (B = u; B !== null; ) {
                  var p = B;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bi(8, p, a);
                  }
                  var f = p.child;
                  if (f !== null) ((f.return = p), (B = f));
                  else
                    for (; B !== null; ) {
                      p = B;
                      var d = p.sibling,
                        m = p.return;
                      if ((Dm(p), p === u)) {
                        B = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = m), (B = d));
                        break;
                      }
                      B = m;
                    }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var b = y.sibling;
                    ((y.sibling = null), (y = b));
                  } while (y !== null);
                }
              }
              B = a;
            }
          }
          if (a.subtreeFlags & 2064 && s !== null) ((s.return = a), (B = s));
          else
            e: for (; B !== null; ) {
              if (((a = B), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bi(9, a, a.return);
                }
              var g = a.sibling;
              if (g !== null) {
                ((g.return = a.return), (B = g));
                break e;
              }
              B = a.return;
            }
        }
        var h = e.current;
        for (B = h; B !== null; ) {
          s = B;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) ((v.return = s), (B = v));
          else
            e: for (s = h; B !== null; ) {
              if (((l = B), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $s(9, l);
                  }
                } catch (j) {
                  ge(l, l.return, j);
                }
              if (l === s) {
                B = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                ((C.return = l.return), (B = C));
                break e;
              }
              B = l.return;
            }
        }
        if (
          ((J = o), Jn(), Ut && typeof Ut.onPostCommitFiberRoot == "function")
        )
          try {
            Ut.onPostCommitFiberRoot(Bs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((te = n), (yt.transition = t));
    }
  }
  return !1;
}
function Bf(e, t, n) {
  ((t = bo(n, t)),
    (t = km(e, t, 1)),
    (e = Ln(e, t, 1)),
    (t = Ue()),
    e !== null && (ea(e, 1, t), Je(e, t)));
}
function ge(e, t, n) {
  if (e.tag === 3) Bf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (In === null || !In.has(r)))
        ) {
          ((e = bo(n, e)),
            (e = Sm(t, e, 1)),
            (t = Ln(t, e, 1)),
            (e = Ue()),
            t !== null && (ea(t, 1, e), Je(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function gx(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      (Ae & n) === n &&
      (ke === 4 || (ke === 3 && (Ae & 130023424) === Ae && 500 > ye() - qu)
        ? ur(e, 0)
        : (Gu |= n)),
    Je(e, t));
}
function Vm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ya), (ya <<= 1), !(ya & 130023424) && (ya = 4194304))
      : (t = 1));
  var n = Ue();
  ((e = sn(e, t)), e !== null && (ea(e, t, n), Je(e, n)));
}
function yx(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Vm(e, n));
}
function xx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  (r !== null && r.delete(t), Vm(e, n));
}
var Gm;
Gm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ke = !1), ix(e, t, n));
      Ke = !!(e.flags & 131072);
    }
  else ((Ke = !1), ue && t.flags & 1048576 && Qh(t, fs, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Ua(e, t), (e = t.pendingProps));
      var o = yo(t, ze.current);
      (to(t, n), (o = Iu(null, t, r, e, o, n)));
      var a = Wu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((a = !0), us(t)) : (a = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Du(t),
            (o.updater = Ws),
            (t.stateNode = o),
            (o._reactInternals = t),
            Tc(t, r, e, n),
            (t = Fc(null, t, r, !0, a, n)))
          : ((t.tag = 0), ue && a && Nu(t), $e(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ua(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = wx(r)),
          (e = jt(r, e)),
          o)
        ) {
          case 0:
            t = Nc(null, t, r, e, n);
            break e;
          case 1:
            t = kf(null, t, r, e, n);
            break e;
          case 11:
            t = Cf(null, t, r, e, n);
            break e;
          case 14:
            t = jf(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : jt(r, o)),
        Nc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : jt(r, o)),
        kf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Fm(t), e === null)) throw Error(F(387));
        ((r = t.pendingProps),
          (a = t.memoizedState),
          (o = a.element),
          nm(e, t),
          ms(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            ((o = bo(Error(F(423)), t)), (t = Sf(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = bo(Error(F(424)), t)), (t = Sf(e, t, r, n, o)));
            break e;
          } else
            for (
              at = zn(t.stateNode.containerInfo.firstChild),
                st = t,
                ue = !0,
                Et = null,
                n = em(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((xo(), r === o)) {
            t = ln(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        rm(t),
        e === null && jc(t),
        (r = t.type),
        (o = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (s = o.children),
        xc(r, o) ? (s = null) : a !== null && xc(r, a) && (t.flags |= 32),
        Nm(e, t),
        $e(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && jc(t), null);
    case 13:
      return Pm(e, t, n);
    case 4:
      return (
        Mu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vo(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : jt(r, o)),
        Cf(e, t, r, o, n)
      );
    case 7:
      return ($e(e, t, t.pendingProps, n), t.child);
    case 8:
      return ($e(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return ($e(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (a = t.memoizedProps),
          (s = o.value),
          re(ps, r._currentValue),
          (r._currentValue = s),
          a !== null)
        )
          if (At(a.value, s)) {
            if (a.children === o.children && !Qe.current) {
              t = ln(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                s = a.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (a.tag === 1) {
                      ((c = rn(-1, n & -n)), (c.tag = 2));
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        (p === null
                          ? (c.next = c)
                          : ((c.next = p.next), (p.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((a.lanes |= n),
                      (c = a.alternate),
                      c !== null && (c.lanes |= n),
                      kc(a.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (a.tag === 10) s = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((s = a.return), s === null)) throw Error(F(341));
                ((s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  kc(s, n, t),
                  (s = a.sibling));
              } else s = a.child;
              if (s !== null) s.return = a;
              else
                for (s = a; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((a = s.sibling), a !== null)) {
                    ((a.return = s.return), (s = a));
                    break;
                  }
                  s = s.return;
                }
              a = s;
            }
        ($e(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        to(t, n),
        (o = xt(o)),
        (r = r(o)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = jt(r, t.pendingProps)),
        (o = jt(r.type, o)),
        jf(e, t, r, o, n)
      );
    case 15:
      return Tm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : jt(r, o)),
        Ua(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), us(t)) : (e = !1),
        to(t, n),
        jm(t, r, o),
        Tc(t, r, o, n),
        Fc(null, t, r, !0, e, n)
      );
    case 19:
      return Am(e, t, n);
    case 22:
      return Em(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function qm(e, t) {
  return wh(e, t);
}
function vx(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function gt(e, t, n, r) {
  return new vx(e, t, n, r);
}
function Xu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function wx(e) {
  if (typeof e == "function") return Xu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gu)) return 11;
    if (e === yu) return 14;
  }
  return 2;
}
function $n(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function qa(e, t, n, r, o, a) {
  var s = 2;
  if (((r = e), typeof e == "function")) Xu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Ir:
        return dr(n.children, o, a, t);
      case mu:
        ((s = 8), (o |= 8));
        break;
      case Ql:
        return (
          (e = gt(12, n, t, o | 2)),
          (e.elementType = Ql),
          (e.lanes = a),
          e
        );
      case Xl:
        return ((e = gt(13, n, t, o)), (e.elementType = Xl), (e.lanes = a), e);
      case Jl:
        return ((e = gt(19, n, t, o)), (e.elementType = Jl), (e.lanes = a), e);
      case rh:
        return Us(n, o, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case th:
              s = 10;
              break e;
            case nh:
              s = 9;
              break e;
            case gu:
              s = 11;
              break e;
            case yu:
              s = 14;
              break e;
            case Cn:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = gt(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = a),
    t
  );
}
function dr(e, t, n, r) {
  return ((e = gt(7, e, r, t)), (e.lanes = n), e);
}
function Us(e, t, n, r) {
  return (
    (e = gt(22, e, r, t)),
    (e.elementType = rh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Dl(e, t, n) {
  return ((e = gt(6, e, null, t)), (e.lanes = n), e);
}
function Ml(e, t, n) {
  return (
    (t = gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bx(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = gl(0)),
    (this.expirationTimes = gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Ju(e, t, n, r, o, a, s, l, c) {
  return (
    (e = new bx(e, t, n, l, c)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = gt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Du(a),
    e
  );
}
function Cx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Lr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ym(e) {
  if (!e) return Vn;
  e = e._reactInternals;
  e: {
    if (br(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return Yh(e, n, t);
  }
  return t;
}
function Km(e, t, n, r, o, a, s, l, c) {
  return (
    (e = Ju(n, r, !0, e, o, a, s, l, c)),
    (e.context = Ym(null)),
    (n = e.current),
    (r = Ue()),
    (o = Wn(n)),
    (a = rn(r, o)),
    (a.callback = t ?? null),
    Ln(n, a, o),
    (e.current.lanes = o),
    ea(e, o, r),
    Je(e, r),
    e
  );
}
function Vs(e, t, n, r) {
  var o = t.current,
    a = Ue(),
    s = Wn(o);
  return (
    (n = Ym(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rn(a, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ln(o, t, s)),
    e !== null && (Pt(e, o, s, a), Wa(e, o, s)),
    s
  );
}
function js(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Df(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  (Df(e, t), (e = e.alternate) && Df(e, t));
}
function jx() {
  return null;
}
var Qm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ed(e) {
  this._internalRoot = e;
}
Gs.prototype.render = ed.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  Vs(e, t, null, null);
};
Gs.prototype.unmount = ed.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (yr(function () {
      Vs(null, e, null, null);
    }),
      (t[an] = null));
  }
};
function Gs(e) {
  this._internalRoot = e;
}
Gs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Eh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
    (kn.splice(n, 0, e), n === 0 && Fh(e));
  }
};
function td(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mf() {}
function kx(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = js(s);
        a.call(u);
      };
    }
    var s = Km(t, r, e, 0, null, !1, !1, "", Mf);
    return (
      (e._reactRootContainer = s),
      (e[an] = s.current),
      Bi(e.nodeType === 8 ? e.parentNode : e),
      yr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = js(c);
      l.call(u);
    };
  }
  var c = Ju(e, 0, !1, null, null, !1, !1, "", Mf);
  return (
    (e._reactRootContainer = c),
    (e[an] = c.current),
    Bi(e.nodeType === 8 ? e.parentNode : e),
    yr(function () {
      Vs(t, c, n, r);
    }),
    c
  );
}
function Ys(e, t, n, r, o) {
  var a = n._reactRootContainer;
  if (a) {
    var s = a;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var c = js(s);
        l.call(c);
      };
    }
    Vs(t, s, e, o);
  } else s = kx(n, t, e, o, r);
  return js(s);
}
Sh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fi(t.pendingLanes);
        n !== 0 &&
          (wu(t, n | 1), Je(t, ye()), !(J & 6) && ((Co = ye() + 500), Jn()));
      }
      break;
    case 13:
      (yr(function () {
        var r = sn(e, 1);
        if (r !== null) {
          var o = Ue();
          Pt(r, e, 1, o);
        }
      }),
        Zu(e, 1));
  }
};
bu = function (e) {
  if (e.tag === 13) {
    var t = sn(e, 134217728);
    if (t !== null) {
      var n = Ue();
      Pt(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
Th = function (e) {
  if (e.tag === 13) {
    var t = Wn(e),
      n = sn(e, t);
    if (n !== null) {
      var r = Ue();
      Pt(n, e, t, r);
    }
    Zu(e, t);
  }
};
Eh = function () {
  return te;
};
Nh = function (e, t) {
  var n = te;
  try {
    return ((te = e), t());
  } finally {
    te = n;
  }
};
lc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((tc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = zs(r);
            if (!o) throw Error(F(90));
            (ih(r), tc(r, o));
          }
        }
      }
      break;
    case "textarea":
      sh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Xr(e, !!n.multiple, t, !1));
  }
};
hh = Yu;
mh = yr;
var Sx = { usingClientEntryPoint: !1, Events: [na, Ur, zs, fh, ph, Yu] },
  $o = {
    findFiberByHostInstance: rr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Tx = {
    bundleType: $o.bundleType,
    version: $o.version,
    rendererPackageName: $o.rendererPackageName,
    rendererConfig: $o.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = xh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: $o.findFiberByHostInstance || jx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Na.isDisabled && Na.supportsFiber)
    try {
      ((Bs = Na.inject(Tx)), (Ut = Na));
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sx;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!td(t)) throw Error(F(200));
  return Cx(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!td(e)) throw Error(F(299));
  var n = !1,
    r = "",
    o = Qm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ju(e, 1, !1, null, null, n, !1, r, o)),
    (e[an] = t.current),
    Bi(e.nodeType === 8 ? e.parentNode : e),
    new ed(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return ((e = xh(t)), (e = e === null ? null : e.stateNode), e);
};
ut.flushSync = function (e) {
  return yr(e);
};
ut.hydrate = function (e, t, n) {
  if (!qs(t)) throw Error(F(200));
  return Ys(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!td(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    a = "",
    s = Qm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Km(t, null, e, 1, n ?? null, o, !1, a, s)),
    (e[an] = t.current),
    Bi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Gs(t);
};
ut.render = function (e, t, n) {
  if (!qs(t)) throw Error(F(200));
  return Ys(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!qs(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (yr(function () {
        Ys(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[an] = null));
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = Yu;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qs(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return Ys(e, t, n, !1, r);
};
ut.version = "18.3.1-next-f1338f8080-20240426";
function Xm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xm);
    } catch (e) {
      console.error(e);
    }
}
(Xm(), (Xp.exports = ut));
var oa = Xp.exports;
const Jm = To(oa);
var Zm,
  _f = oa;
((Zm = _f.createRoot), _f.hydrateRoot);
const Ex = 1,
  Nx = 1e6;
let _l = 0;
function Fx() {
  return ((_l = (_l + 1) % Number.MAX_SAFE_INTEGER), _l.toString());
}
const zl = new Map(),
  zf = (e) => {
    if (zl.has(e)) return;
    const t = setTimeout(() => {
      (zl.delete(e), ki({ type: "REMOVE_TOAST", toastId: e }));
    }, Nx);
    zl.set(e, t);
  },
  Px = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Ex) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? zf(n)
            : e.toasts.forEach((r) => {
                zf(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Ya = [];
let Ka = { toasts: [] };
function ki(e) {
  ((Ka = Px(Ka, e)),
    Ya.forEach((t) => {
      t(Ka);
    }));
}
function Ax({ ...e }) {
  const t = Fx(),
    n = (o) => ki({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => ki({ type: "DISMISS_TOAST", toastId: t });
  return (
    ki({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Rx() {
  const [e, t] = x.useState(Ka);
  return (
    x.useEffect(
      () => (
        Ya.push(t),
        () => {
          const n = Ya.indexOf(t);
          n > -1 && Ya.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: Ax,
      dismiss: (n) => ki({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function je(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Ox(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function e1(...e) {
  return (t) => e.forEach((n) => Ox(n, t));
}
function Rt(...e) {
  return x.useCallback(e1(...e), e);
}
function Bx(e, t = []) {
  let n = [];
  function r(a, s) {
    const l = x.createContext(s),
      c = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: d, children: m, ...w } = f,
        y = (d == null ? void 0 : d[e][c]) || l,
        b = x.useMemo(() => w, Object.values(w));
      return i.jsx(y.Provider, { value: b, children: m });
    }
    function p(f, d) {
      const m = (d == null ? void 0 : d[e][c]) || l,
        w = x.useContext(m);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return ((u.displayName = a + "Provider"), [u, p]);
  }
  const o = () => {
    const a = n.map((s) => x.createContext(s));
    return function (l) {
      const c = (l == null ? void 0 : l[e]) || a;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: c } }), [l, c]);
    };
  };
  return ((o.scopeName = e), [r, Dx(o, ...t)]);
}
function Dx(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (a) {
      const s = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(a)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var Hi = x.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = x.Children.toArray(n),
    a = o.find(Mx);
  if (a) {
    const s = a.props.children,
      l = o.map((c) =>
        c === a
          ? x.Children.count(s) > 1
            ? x.Children.only(null)
            : x.isValidElement(s)
              ? s.props.children
              : null
          : c,
      );
    return i.jsx(Wc, {
      ...r,
      ref: t,
      children: x.isValidElement(s) ? x.cloneElement(s, void 0, l) : null,
    });
  }
  return i.jsx(Wc, { ...r, ref: t, children: n });
});
Hi.displayName = "Slot";
var Wc = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const o = zx(n);
    return x.cloneElement(n, { ..._x(r, n.props), ref: t ? e1(t, o) : o });
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
Wc.displayName = "SlotClone";
var t1 = ({ children: e }) => i.jsx(i.Fragment, { children: e });
function Mx(e) {
  return x.isValidElement(e) && e.type === t1;
}
function _x(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? o && a
        ? (n[r] = (...l) => {
            (a(...l), o(...l));
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...a })
        : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function zx(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Lx(e) {
  const t = e + "CollectionProvider",
    [n, r] = Bx(t),
    [o, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: w, children: y } = m,
        b = P.useRef(null),
        g = P.useRef(new Map()).current;
      return i.jsx(o, { scope: w, itemMap: g, collectionRef: b, children: y });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    c = P.forwardRef((m, w) => {
      const { scope: y, children: b } = m,
        g = a(l, y),
        h = Rt(w, g.collectionRef);
      return i.jsx(Hi, { ref: h, children: b });
    });
  c.displayName = l;
  const u = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    f = P.forwardRef((m, w) => {
      const { scope: y, children: b, ...g } = m,
        h = P.useRef(null),
        v = Rt(w, h),
        C = a(u, y);
      return (
        P.useEffect(
          () => (
            C.itemMap.set(h, { ref: h, ...g }),
            () => void C.itemMap.delete(h)
          ),
        ),
        i.jsx(Hi, { [p]: "", ref: v, children: b })
      );
    });
  f.displayName = u;
  function d(m) {
    const w = a(e + "CollectionConsumer", m);
    return P.useCallback(() => {
      const b = w.collectionRef.current;
      if (!b) return [];
      const g = Array.from(b.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (C, j) => g.indexOf(C.ref.current) - g.indexOf(j.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: c, ItemSlot: f }, d, r];
}
function n1(e, t = []) {
  let n = [];
  function r(a, s) {
    const l = x.createContext(s),
      c = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: d, children: m, ...w } = f,
        y = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[c]) || l,
        b = x.useMemo(() => w, Object.values(w));
      return i.jsx(y.Provider, { value: b, children: m });
    };
    u.displayName = a + "Provider";
    function p(f, d) {
      var y;
      const m = ((y = d == null ? void 0 : d[e]) == null ? void 0 : y[c]) || l,
        w = x.useContext(m);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, p];
  }
  const o = () => {
    const a = n.map((s) => x.createContext(s));
    return function (l) {
      const c = (l == null ? void 0 : l[e]) || a;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: c } }), [l, c]);
    };
  };
  return ((o.scopeName = e), [r, Ix(o, ...t)]);
}
function Ix(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (a) {
      const s = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(a)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var Wx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  et = Wx.reduce((e, t) => {
    const n = x.forwardRef((r, o) => {
      const { asChild: a, ...s } = r,
        l = a ? Hi : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        i.jsx(l, { ...s, ref: o })
      );
    });
    return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n });
  }, {});
function r1(e, t) {
  e && oa.flushSync(() => e.dispatchEvent(t));
}
function Gt(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function $x(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Hx = "DismissableLayer",
  $c = "dismissableLayer.update",
  Ux = "dismissableLayer.pointerDownOutside",
  Vx = "dismissableLayer.focusOutside",
  Lf,
  o1 = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  nd = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: s,
        onDismiss: l,
        ...c
      } = e,
      u = x.useContext(o1),
      [p, f] = x.useState(null),
      d =
        (p == null ? void 0 : p.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = x.useState({}),
      w = Rt(t, (T) => f(T)),
      y = Array.from(u.layers),
      [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = y.indexOf(b),
      h = p ? y.indexOf(p) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = h >= g,
      j = qx((T) => {
        const N = T.target,
          M = [...u.branches].some((R) => R.contains(N));
        !C ||
          M ||
          (o == null || o(T),
          s == null || s(T),
          T.defaultPrevented || l == null || l());
      }, d),
      S = Yx((T) => {
        const N = T.target;
        [...u.branches].some((R) => R.contains(N)) ||
          (a == null || a(T),
          s == null || s(T),
          T.defaultPrevented || l == null || l());
      }, d);
    return (
      $x((T) => {
        h === u.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && l && (T.preventDefault(), l()));
      }, d),
      x.useEffect(() => {
        if (p)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Lf = d.body.style.pointerEvents),
                (d.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(p)),
            u.layers.add(p),
            If(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (d.body.style.pointerEvents = Lf);
            }
          );
      }, [p, d, n, u]),
      x.useEffect(
        () => () => {
          p &&
            (u.layers.delete(p),
            u.layersWithOutsidePointerEventsDisabled.delete(p),
            If());
        },
        [p, u],
      ),
      x.useEffect(() => {
        const T = () => m({});
        return (
          document.addEventListener($c, T),
          () => document.removeEventListener($c, T)
        );
      }, []),
      i.jsx(et.div, {
        ...c,
        ref: w,
        style: {
          pointerEvents: v ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: je(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: je(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: je(
          e.onPointerDownCapture,
          j.onPointerDownCapture,
        ),
      })
    );
  });
nd.displayName = Hx;
var Gx = "DismissableLayerBranch",
  i1 = x.forwardRef((e, t) => {
    const n = x.useContext(o1),
      r = x.useRef(null),
      o = Rt(t, r);
    return (
      x.useEffect(() => {
        const a = r.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      i.jsx(et.div, { ...e, ref: o })
    );
  });
i1.displayName = Gx;
function qx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const a = (l) => {
          if (l.target && !r.current) {
            let c = function () {
              a1(Ux, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = c),
                t.addEventListener("click", o.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Yx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (a) => {
        a.target &&
          !r.current &&
          a1(Vx, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function If() {
  const e = new CustomEvent($c);
  document.dispatchEvent(e);
}
function a1(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? r1(o, a) : o.dispatchEvent(a));
}
var Kx = nd,
  Qx = i1,
  xr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  Xx = "Portal",
  s1 = x.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, a] = x.useState(!1);
    xr(() => a(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? Jm.createPortal(i.jsx(et.div, { ...r, ref: t }), s) : null;
  });
s1.displayName = Xx;
function Jx(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var rd = (e) => {
  const { present: t, children: n } = e,
    r = Zx(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    a = Rt(r.ref, e2(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: a })
    : null;
};
rd.displayName = "Presence";
function Zx(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    o = x.useRef(e),
    a = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, c] = Jx(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = Fa(r.current);
      a.current = l === "mounted" ? u : "none";
    }, [l]),
    xr(() => {
      const u = r.current,
        p = o.current;
      if (p !== e) {
        const d = a.current,
          m = Fa(u);
        (e
          ? c("MOUNT")
          : m === "none" || (u == null ? void 0 : u.display) === "none"
            ? c("UNMOUNT")
            : c(p && d !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, c]),
    xr(() => {
      if (t) {
        let u;
        const p = t.ownerDocument.defaultView ?? window,
          f = (m) => {
            const y = Fa(r.current).includes(m.animationName);
            if (m.target === t && y && (c("ANIMATION_END"), !o.current)) {
              const b = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = p.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                })));
            }
          },
          d = (m) => {
            m.target === t && (a.current = Fa(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            (p.clearTimeout(u),
              t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f));
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: x.useCallback((u) => {
        (u && (r.current = getComputedStyle(u)), n(u));
      }, []),
    }
  );
}
function Fa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function e2(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function t2({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = n2({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    s = a ? e : r,
    l = Gt(n),
    c = x.useCallback(
      (u) => {
        if (a) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && l(f);
        } else o(u);
      },
      [a, e, o, l],
    );
  return [s, c];
}
function n2({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    o = x.useRef(r),
    a = Gt(t);
  return (
    x.useEffect(() => {
      o.current !== r && (a(r), (o.current = r));
    }, [r, o, a]),
    n
  );
}
var r2 = "VisuallyHidden",
  Ks = x.forwardRef((e, t) =>
    i.jsx(et.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Ks.displayName = r2;
var o2 = Ks,
  od = "ToastProvider",
  [id, i2, a2] = Lx("Toast"),
  [l1, s5] = n1("Toast", [a2]),
  [s2, Qs] = l1(od),
  c1 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: a = 50,
        children: s,
      } = e,
      [l, c] = x.useState(null),
      [u, p] = x.useState(0),
      f = x.useRef(!1),
      d = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${od}\`. Expected non-empty \`string\`.`,
        ),
      i.jsx(id.Provider, {
        scope: t,
        children: i.jsx(s2, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: a,
          toastCount: u,
          viewport: l,
          onViewportChange: c,
          onToastAdd: x.useCallback(() => p((m) => m + 1), []),
          onToastRemove: x.useCallback(() => p((m) => m - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: d,
          children: s,
        }),
      })
    );
  };
c1.displayName = od;
var u1 = "ToastViewport",
  l2 = ["F8"],
  Hc = "toast.viewportPause",
  Uc = "toast.viewportResume",
  d1 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = l2,
        label: o = "Notifications ({hotkey})",
        ...a
      } = e,
      s = Qs(u1, n),
      l = i2(n),
      c = x.useRef(null),
      u = x.useRef(null),
      p = x.useRef(null),
      f = x.useRef(null),
      d = Rt(t, f, s.onViewportChange),
      m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = s.toastCount > 0;
    (x.useEffect(() => {
      const b = (g) => {
        var v;
        r.length !== 0 &&
          r.every((C) => g[C] || g.code === C) &&
          ((v = f.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [r]),
      x.useEffect(() => {
        const b = c.current,
          g = f.current;
        if (w && b && g) {
          const h = () => {
              if (!s.isClosePausedRef.current) {
                const S = new CustomEvent(Hc);
                (g.dispatchEvent(S), (s.isClosePausedRef.current = !0));
              }
            },
            v = () => {
              if (s.isClosePausedRef.current) {
                const S = new CustomEvent(Uc);
                (g.dispatchEvent(S), (s.isClosePausedRef.current = !1));
              }
            },
            C = (S) => {
              !b.contains(S.relatedTarget) && v();
            },
            j = () => {
              b.contains(document.activeElement) || v();
            };
          return (
            b.addEventListener("focusin", h),
            b.addEventListener("focusout", C),
            b.addEventListener("pointermove", h),
            b.addEventListener("pointerleave", j),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
              (b.removeEventListener("focusin", h),
                b.removeEventListener("focusout", C),
                b.removeEventListener("pointermove", h),
                b.removeEventListener("pointerleave", j),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v));
            }
          );
        }
      }, [w, s.isClosePausedRef]));
    const y = x.useCallback(
      ({ tabbingDirection: b }) => {
        const h = l().map((v) => {
          const C = v.ref.current,
            j = [C, ...b2(C)];
          return b === "forwards" ? j : j.reverse();
        });
        return (b === "forwards" ? h.reverse() : h).flat();
      },
      [l],
    );
    return (
      x.useEffect(() => {
        const b = f.current;
        if (b) {
          const g = (h) => {
            var j, S, T;
            const v = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !v) {
              const N = document.activeElement,
                M = h.shiftKey;
              if (h.target === b && M) {
                (j = u.current) == null || j.focus();
                return;
              }
              const _ = y({ tabbingDirection: M ? "backwards" : "forwards" }),
                G = _.findIndex((O) => O === N);
              Ll(_.slice(G + 1))
                ? h.preventDefault()
                : M
                  ? (S = u.current) == null || S.focus()
                  : (T = p.current) == null || T.focus();
            }
          };
          return (
            b.addEventListener("keydown", g),
            () => b.removeEventListener("keydown", g)
          );
        }
      }, [l, y]),
      i.jsxs(Qx, {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", m),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            i.jsx(Vc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const b = y({ tabbingDirection: "forwards" });
                Ll(b);
              },
            }),
          i.jsx(id.Slot, {
            scope: n,
            children: i.jsx(et.ol, { tabIndex: -1, ...a, ref: d }),
          }),
          w &&
            i.jsx(Vc, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const b = y({ tabbingDirection: "backwards" });
                Ll(b);
              },
            }),
        ],
      })
    );
  });
d1.displayName = u1;
var f1 = "ToastFocusProxy",
  Vc = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      a = Qs(f1, n);
    return i.jsx(Ks, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = a.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Vc.displayName = f1;
var Xs = "Toast",
  c2 = "toast.swipeStart",
  u2 = "toast.swipeMove",
  d2 = "toast.swipeCancel",
  f2 = "toast.swipeEnd",
  p1 = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e,
      [l = !0, c] = t2({ prop: r, defaultProp: o, onChange: a });
    return i.jsx(rd, {
      present: n || l,
      children: i.jsx(m2, {
        open: l,
        ...s,
        ref: t,
        onClose: () => c(!1),
        onPause: Gt(e.onPause),
        onResume: Gt(e.onResume),
        onSwipeStart: je(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: je(e.onSwipeMove, (u) => {
          const { x: p, y: f } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${p}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`,
            ));
        }),
        onSwipeCancel: je(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: je(e.onSwipeEnd, (u) => {
          const { x: p, y: f } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${p}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`,
            ),
            c(!1));
        }),
      }),
    });
  });
p1.displayName = Xs;
var [p2, h2] = l1(Xs, { onClose() {} }),
  m2 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: a,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: c,
        onResume: u,
        onSwipeStart: p,
        onSwipeMove: f,
        onSwipeCancel: d,
        onSwipeEnd: m,
        ...w
      } = e,
      y = Qs(Xs, n),
      [b, g] = x.useState(null),
      h = Rt(t, (O) => g(O)),
      v = x.useRef(null),
      C = x.useRef(null),
      j = o || y.duration,
      S = x.useRef(0),
      T = x.useRef(j),
      N = x.useRef(0),
      { onToastAdd: M, onToastRemove: R } = y,
      I = Gt(() => {
        var q;
        ((b == null ? void 0 : b.contains(document.activeElement)) &&
          ((q = y.viewport) == null || q.focus()),
          s());
      }),
      _ = x.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(N.current),
            (S.current = new Date().getTime()),
            (N.current = window.setTimeout(I, O)));
        },
        [I],
      );
    (x.useEffect(() => {
      const O = y.viewport;
      if (O) {
        const q = () => {
            (_(T.current), u == null || u());
          },
          W = () => {
            const Y = new Date().getTime() - S.current;
            ((T.current = T.current - Y),
              window.clearTimeout(N.current),
              c == null || c());
          };
        return (
          O.addEventListener(Hc, W),
          O.addEventListener(Uc, q),
          () => {
            (O.removeEventListener(Hc, W), O.removeEventListener(Uc, q));
          }
        );
      }
    }, [y.viewport, j, c, u, _]),
      x.useEffect(() => {
        a && !y.isClosePausedRef.current && _(j);
      }, [a, j, y.isClosePausedRef, _]),
      x.useEffect(() => (M(), () => R()), [M, R]));
    const G = x.useMemo(() => (b ? w1(b) : null), [b]);
    return y.viewport
      ? i.jsxs(i.Fragment, {
          children: [
            G &&
              i.jsx(g2, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: G,
              }),
            i.jsx(p2, {
              scope: n,
              onClose: I,
              children: oa.createPortal(
                i.jsx(id.ItemSlot, {
                  scope: n,
                  children: i.jsx(Kx, {
                    asChild: !0,
                    onEscapeKeyDown: je(l, () => {
                      (y.isFocusedToastEscapeKeyDownRef.current || I(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: i.jsx(et.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": a ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...w,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: je(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (l == null || l(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            I()));
                      }),
                      onPointerDown: je(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (v.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: je(e.onPointerMove, (O) => {
                        if (!v.current) return;
                        const q = O.clientX - v.current.x,
                          W = O.clientY - v.current.y,
                          Y = !!C.current,
                          k = ["left", "right"].includes(y.swipeDirection),
                          A = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          z = k ? A(0, q) : 0,
                          D = k ? 0 : A(0, W),
                          L = O.pointerType === "touch" ? 10 : 2,
                          Q = { x: z, y: D },
                          de = { originalEvent: O, delta: Q };
                        Y
                          ? ((C.current = Q), Pa(u2, f, de, { discrete: !1 }))
                          : Wf(Q, y.swipeDirection, L)
                            ? ((C.current = Q),
                              Pa(c2, p, de, { discrete: !1 }),
                              O.target.setPointerCapture(O.pointerId))
                            : (Math.abs(q) > L || Math.abs(W) > L) &&
                              (v.current = null);
                      }),
                      onPointerUp: je(e.onPointerUp, (O) => {
                        const q = C.current,
                          W = O.target;
                        if (
                          (W.hasPointerCapture(O.pointerId) &&
                            W.releasePointerCapture(O.pointerId),
                          (C.current = null),
                          (v.current = null),
                          q)
                        ) {
                          const Y = O.currentTarget,
                            k = { originalEvent: O, delta: q };
                          (Wf(q, y.swipeDirection, y.swipeThreshold)
                            ? Pa(f2, m, k, { discrete: !0 })
                            : Pa(d2, d, k, { discrete: !0 }),
                            Y.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  g2 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Qs(Xs, t),
      [a, s] = x.useState(!1),
      [l, c] = x.useState(!1);
    return (
      v2(() => s(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : i.jsx(s1, {
            asChild: !0,
            children: i.jsx(Ks, {
              ...r,
              children:
                a && i.jsxs(i.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  y2 = "ToastTitle",
  h1 = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return i.jsx(et.div, { ...r, ref: t });
  });
h1.displayName = y2;
var x2 = "ToastDescription",
  m1 = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return i.jsx(et.div, { ...r, ref: t });
  });
m1.displayName = x2;
var g1 = "ToastAction",
  y1 = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? i.jsx(v1, {
          altText: n,
          asChild: !0,
          children: i.jsx(ad, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${g1}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
y1.displayName = g1;
var x1 = "ToastClose",
  ad = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = h2(x1, n);
    return i.jsx(v1, {
      asChild: !0,
      children: i.jsx(et.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: je(e.onClick, o.onClose),
      }),
    });
  });
ad.displayName = x1;
var v1 = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return i.jsx(et.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function w1(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        w2(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          a = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (a) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...w1(r));
      }
    }),
    t
  );
}
function Pa(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? r1(o, a) : o.dispatchEvent(a));
}
var Wf = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function v2(e = () => {}) {
  const t = Gt(e);
  xr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function w2(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function b2(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ll(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var C2 = c1,
  b1 = d1,
  C1 = p1,
  j1 = h1,
  k1 = m1,
  S1 = y1,
  T1 = ad;
function E1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = E1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function N1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = E1(e)) && (r && (r += " "), (r += t));
  return r;
}
const $f = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Hf = N1,
  F1 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Hf(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: a } = t,
      s = Object.keys(o).map((u) => {
        const p = n == null ? void 0 : n[u],
          f = a == null ? void 0 : a[u];
        if (p === null) return null;
        const d = $f(p) || $f(f);
        return o[u][d];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, p) => {
          let [f, d] = p;
          return (d === void 0 || (u[f] = d), u);
        }, {}),
      c =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, p) => {
              let { class: f, className: d, ...m } = p;
              return Object.entries(m).every((w) => {
                let [y, b] = w;
                return Array.isArray(b)
                  ? b.includes({ ...a, ...l }[y])
                  : { ...a, ...l }[y] === b;
              })
                ? [...u, f, d]
                : u;
            }, []);
    return Hf(
      e,
      s,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  P1 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var k2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S2 = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: a,
      iconNode: s,
      ...l
    },
    c,
  ) =>
    x.createElement(
      "svg",
      {
        ref: c,
        ...k2,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: P1("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, p]) => x.createElement(u, p)),
        ...(Array.isArray(a) ? a : [a]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, a) =>
    x.createElement(S2, {
      ref: a,
      iconNode: t,
      className: P1(`lucide-${j2(e)}`, r),
      ...o,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uf = sd("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T2 = sd("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gc = sd("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ld = "-",
  E2 = (e) => {
    const t = F2(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(ld);
        return (l[0] === "" && l.length !== 1 && l.shift(), A1(l, t) || N2(s));
      },
      getConflictingClassGroupIds: (s, l) => {
        const c = n[s] || [];
        return l && r[s] ? [...c, ...r[s]] : c;
      },
    };
  },
  A1 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? A1(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const a = e.join(ld);
    return (s = t.validators.find(({ validator: l }) => l(a))) == null
      ? void 0
      : s.classGroupId;
  },
  Vf = /^\[(.+)\]$/,
  N2 = (e) => {
    if (Vf.test(e)) {
      const t = Vf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  F2 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      A2(Object.entries(e.classGroups), n).forEach(([a, s]) => {
        qc(s, r, a, t);
      }),
      r
    );
  },
  qc = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const a = o === "" ? t : Gf(t, o);
        a.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (P2(o)) {
          qc(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([a, s]) => {
        qc(s, Gf(t, a), n, r);
      });
    });
  },
  Gf = (e, t) => {
    let n = e;
    return (
      t.split(ld).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  P2 = (e) => e.isThemeGetter,
  A2 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((a) =>
            typeof a == "string"
              ? t + a
              : typeof a == "object"
                ? Object.fromEntries(
                    Object.entries(a).map(([s, l]) => [t + s, l]),
                  )
                : a,
          );
          return [n, o];
        })
      : e,
  R2 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (a, s) => {
      (n.set(a, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(a) {
        let s = n.get(a);
        if (s !== void 0) return s;
        if ((s = r.get(a)) !== void 0) return (o(a, s), s);
      },
      set(a, s) {
        n.has(a) ? n.set(a, s) : o(a, s);
      },
    };
  },
  R1 = "!",
  O2 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      a = t.length,
      s = (l) => {
        const c = [];
        let u = 0,
          p = 0,
          f;
        for (let b = 0; b < l.length; b++) {
          let g = l[b];
          if (u === 0) {
            if (g === o && (r || l.slice(b, b + a) === t)) {
              (c.push(l.slice(p, b)), (p = b + a));
              continue;
            }
            if (g === "/") {
              f = b;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const d = c.length === 0 ? l : l.substring(p),
          m = d.startsWith(R1),
          w = m ? d.substring(1) : d,
          y = f && f > p ? f - p : void 0;
        return {
          modifiers: c,
          hasImportantModifier: m,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  B2 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  D2 = (e) => ({ cache: R2(e.cacheSize), parseClassName: O2(e), ...E2(e) }),
  M2 = /\s+/,
  _2 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      a = [],
      s = e.trim().split(M2);
    let l = "";
    for (let c = s.length - 1; c >= 0; c -= 1) {
      const u = s[c],
        {
          modifiers: p,
          hasImportantModifier: f,
          baseClassName: d,
          maybePostfixModifierPosition: m,
        } = n(u);
      let w = !!m,
        y = r(w ? d.substring(0, m) : d);
      if (!y) {
        if (!w) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((y = r(d)), !y)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        w = !1;
      }
      const b = B2(p).join(":"),
        g = f ? b + R1 : b,
        h = g + y;
      if (a.includes(h)) continue;
      a.push(h);
      const v = o(y, w);
      for (let C = 0; C < v.length; ++C) {
        const j = v[C];
        a.push(g + j);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function z2() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = O1(t)) && (r && (r += " "), (r += n));
  return r;
}
const O1 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = O1(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function L2(e, ...t) {
  let n,
    r,
    o,
    a = s;
  function s(c) {
    const u = t.reduce((p, f) => f(p), e());
    return ((n = D2(u)), (r = n.cache.get), (o = n.cache.set), (a = l), l(c));
  }
  function l(c) {
    const u = r(c);
    if (u) return u;
    const p = _2(c, n);
    return (o(c, p), p);
  }
  return function () {
    return a(z2.apply(null, arguments));
  };
}
const ie = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  B1 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  I2 = /^\d+\/\d+$/,
  W2 = new Set(["px", "full", "screen"]),
  $2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  H2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  U2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  V2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  G2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Kt = (e) => ro(e) || W2.has(e) || I2.test(e),
  xn = (e) => Po(e, "length", ev),
  ro = (e) => !!e && !Number.isNaN(Number(e)),
  Il = (e) => Po(e, "number", ro),
  Ho = (e) => !!e && Number.isInteger(Number(e)),
  q2 = (e) => e.endsWith("%") && ro(e.slice(0, -1)),
  U = (e) => B1.test(e),
  vn = (e) => $2.test(e),
  Y2 = new Set(["length", "size", "percentage"]),
  K2 = (e) => Po(e, Y2, D1),
  Q2 = (e) => Po(e, "position", D1),
  X2 = new Set(["image", "url"]),
  J2 = (e) => Po(e, X2, nv),
  Z2 = (e) => Po(e, "", tv),
  Uo = () => !0,
  Po = (e, t, n) => {
    const r = B1.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  ev = (e) => H2.test(e) && !U2.test(e),
  D1 = () => !1,
  tv = (e) => V2.test(e),
  nv = (e) => G2.test(e),
  rv = () => {
    const e = ie("colors"),
      t = ie("spacing"),
      n = ie("blur"),
      r = ie("brightness"),
      o = ie("borderColor"),
      a = ie("borderRadius"),
      s = ie("borderSpacing"),
      l = ie("borderWidth"),
      c = ie("contrast"),
      u = ie("grayscale"),
      p = ie("hueRotate"),
      f = ie("invert"),
      d = ie("gap"),
      m = ie("gradientColorStops"),
      w = ie("gradientColorStopPositions"),
      y = ie("inset"),
      b = ie("margin"),
      g = ie("opacity"),
      h = ie("padding"),
      v = ie("saturate"),
      C = ie("scale"),
      j = ie("sepia"),
      S = ie("skew"),
      T = ie("space"),
      N = ie("translate"),
      M = () => ["auto", "contain", "none"],
      R = () => ["auto", "hidden", "clip", "visible", "scroll"],
      I = () => ["auto", U, t],
      _ = () => [U, t],
      G = () => ["", Kt, xn],
      O = () => ["auto", ro, U],
      q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      W = () => ["solid", "dashed", "dotted", "double", "none"],
      Y = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", U],
      z = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      D = () => [ro, U];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Uo],
        spacing: [Kt, xn],
        blur: ["none", "", vn, U],
        brightness: D(),
        borderColor: [e],
        borderRadius: ["none", "", "full", vn, U],
        borderSpacing: _(),
        borderWidth: G(),
        contrast: D(),
        grayscale: A(),
        hueRotate: D(),
        invert: A(),
        gap: _(),
        gradientColorStops: [e],
        gradientColorStopPositions: [q2, xn],
        inset: I(),
        margin: I(),
        opacity: D(),
        padding: _(),
        saturate: D(),
        scale: D(),
        sepia: A(),
        skew: D(),
        space: _(),
        translate: _(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", U] }],
        container: ["container"],
        columns: [{ columns: [vn] }],
        "break-after": [{ "break-after": z() }],
        "break-before": [{ "break-before": z() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...q(), U] }],
        overflow: [{ overflow: R() }],
        "overflow-x": [{ "overflow-x": R() }],
        "overflow-y": [{ "overflow-y": R() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Ho, U] }],
        basis: [{ basis: I() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", U] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", Ho, U] }],
        "grid-cols": [{ "grid-cols": [Uo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Ho, U] }, U] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [Uo] }],
        "row-start-end": [{ row: ["auto", { span: [Ho, U] }, U] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", U] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", U] }],
        gap: [{ gap: [d] }],
        "gap-x": [{ "gap-x": [d] }],
        "gap-y": [{ "gap-y": [d] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t] }],
        "min-w": [{ "min-w": [U, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              U,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [vn] },
              vn,
            ],
          },
        ],
        h: [{ h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [U, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", vn, xn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Il,
            ],
          },
        ],
        "font-family": [{ font: [Uo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              U,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", ro, Il] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Kt,
              U,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", U] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", U] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...W(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Kt, xn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Kt, U] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: _() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              U,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", U] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...q(), Q2] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", K2] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              J2,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [a] }],
        "rounded-s": [{ "rounded-s": [a] }],
        "rounded-e": [{ "rounded-e": [a] }],
        "rounded-t": [{ "rounded-t": [a] }],
        "rounded-r": [{ "rounded-r": [a] }],
        "rounded-b": [{ "rounded-b": [a] }],
        "rounded-l": [{ "rounded-l": [a] }],
        "rounded-ss": [{ "rounded-ss": [a] }],
        "rounded-se": [{ "rounded-se": [a] }],
        "rounded-ee": [{ "rounded-ee": [a] }],
        "rounded-es": [{ "rounded-es": [a] }],
        "rounded-tl": [{ "rounded-tl": [a] }],
        "rounded-tr": [{ "rounded-tr": [a] }],
        "rounded-br": [{ "rounded-br": [a] }],
        "rounded-bl": [{ "rounded-bl": [a] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...W(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: W() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...W()] }],
        "outline-offset": [{ "outline-offset": [Kt, U] }],
        "outline-w": [{ outline: [Kt, xn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: G() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [Kt, xn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", vn, Z2] }],
        "shadow-color": [{ shadow: [Uo] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...Y(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": Y() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", vn, U] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [p] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [j] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [j] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              U,
            ],
          },
        ],
        duration: [{ duration: D() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", U] }],
        delay: [{ delay: D() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", U] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [C] }],
        "scale-x": [{ "scale-x": [C] }],
        "scale-y": [{ "scale-y": [C] }],
        rotate: [{ rotate: [Ho, U] }],
        "translate-x": [{ "translate-x": [N] }],
        "translate-y": [{ "translate-y": [N] }],
        "skew-x": [{ "skew-x": [S] }],
        "skew-y": [{ "skew-y": [S] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              U,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              U,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": _() }],
        "scroll-mx": [{ "scroll-mx": _() }],
        "scroll-my": [{ "scroll-my": _() }],
        "scroll-ms": [{ "scroll-ms": _() }],
        "scroll-me": [{ "scroll-me": _() }],
        "scroll-mt": [{ "scroll-mt": _() }],
        "scroll-mr": [{ "scroll-mr": _() }],
        "scroll-mb": [{ "scroll-mb": _() }],
        "scroll-ml": [{ "scroll-ml": _() }],
        "scroll-p": [{ "scroll-p": _() }],
        "scroll-px": [{ "scroll-px": _() }],
        "scroll-py": [{ "scroll-py": _() }],
        "scroll-ps": [{ "scroll-ps": _() }],
        "scroll-pe": [{ "scroll-pe": _() }],
        "scroll-pt": [{ "scroll-pt": _() }],
        "scroll-pr": [{ "scroll-pr": _() }],
        "scroll-pb": [{ "scroll-pb": _() }],
        "scroll-pl": [{ "scroll-pl": _() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", U] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Kt, xn, Il] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  ov = L2(rv);
function Ie(...e) {
  return ov(N1(e));
}
const iv = C2,
  M1 = x.forwardRef(({ className: e, ...t }, n) =>
    i.jsx(b1, {
      ref: n,
      className: Ie(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
M1.displayName = b1.displayName;
const av = F1(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  _1 = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    i.jsx(C1, { ref: r, className: Ie(av({ variant: t }), e), ...n }),
  );
_1.displayName = C1.displayName;
const sv = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(S1, {
    ref: n,
    className: Ie(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...t,
  }),
);
sv.displayName = S1.displayName;
const z1 = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(T1, {
    ref: n,
    className: Ie(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: i.jsx(Gc, { className: "h-4 w-4" }),
  }),
);
z1.displayName = T1.displayName;
const L1 = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(j1, { ref: n, className: Ie("text-sm font-semibold", e), ...t }),
);
L1.displayName = j1.displayName;
const I1 = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx(k1, { ref: n, className: Ie("text-sm opacity-90", e), ...t }),
);
I1.displayName = k1.displayName;
function lv() {
  const { toasts: e } = Rx();
  return i.jsxs(iv, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...a }) {
        return i.jsxs(
          _1,
          {
            ...a,
            children: [
              i.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && i.jsx(L1, { children: n }),
                  r && i.jsx(I1, { children: r }),
                ],
              }),
              o,
              i.jsx(z1, {}),
            ],
          },
          t,
        );
      }),
      i.jsx(M1, {}),
    ],
  });
}
var qf = ["light", "dark"],
  cv = "(prefers-color-scheme: dark)",
  uv = x.createContext(void 0),
  dv = { setTheme: (e) => {}, themes: [] },
  fv = () => {
    var e;
    return (e = x.useContext(uv)) != null ? e : dv;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: a,
    value: s,
    attrs: l,
    nonce: c,
  }) => {
    let u = a === "system",
      p =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((w) => `'${w}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? qf.includes(a) && a
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      d = (w, y = !1, b = !0) => {
        let g = s ? s[w] : w,
          h = y ? w + "|| ''" : `'${g}'`,
          v = "";
        return (
          o &&
            b &&
            !y &&
            qf.includes(w) &&
            (v += `d.style.colorScheme = '${w}';`),
          n === "class"
            ? y || g
              ? (v += `c.add(${h})`)
              : (v += "null")
            : g && (v += `d[s](n,${h})`),
          v
        );
      },
      m = e
        ? `!function(){${p}${d(e)}}()`
        : r
          ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${cv}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${d(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + d(a, !1, !1) + "}"}${f}}catch(e){}}()`
          : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${d(s ? "x[e]" : "e", !0)}}else{${d(a, !1, !1)};}${f}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: c,
      dangerouslySetInnerHTML: { __html: m },
    });
  },
);
var pv = (e) => {
    switch (e) {
      case "success":
        return gv;
      case "info":
        return xv;
      case "warning":
        return yv;
      case "error":
        return vv;
      default:
        return null;
    }
  },
  hv = Array(12).fill(0),
  mv = ({ visible: e }) =>
    P.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      P.createElement(
        "div",
        { className: "sonner-spinner" },
        hv.map((t, n) =>
          P.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          }),
        ),
      ),
    ),
  gv = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  yv = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  xv = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  vv = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  wv = () => {
    let [e, t] = P.useState(document.hidden);
    return (
      P.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Yc = 1,
  bv = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Yc++,
            a = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            a
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l,
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0;
          return (
            r
              .then(async (a) => {
                if (jv(a) && !a.ok) {
                  o = !1;
                  let s =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    l =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: l,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let s =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    l =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: s,
                    description: l,
                  });
                }
              })
              .catch(async (a) => {
                if (t.error !== void 0) {
                  o = !1;
                  let s =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    l =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: l,
                  });
                }
              })
              .finally(() => {
                var a;
                (o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t));
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Yc++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.subscribers = []),
        (this.toasts = []));
    }
  },
  rt = new bv(),
  Cv = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Yc++;
    return (rt.addToast({ title: e, ...t, id: n }), n);
  },
  jv = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  kv = Cv,
  Sv = () => rt.toasts;
Object.assign(
  kv,
  {
    success: rt.success,
    info: rt.info,
    warning: rt.warning,
    error: rt.error,
    custom: rt.custom,
    message: rt.message,
    promise: rt.promise,
    dismiss: rt.dismiss,
    loading: rt.loading,
  },
  { getHistory: Sv },
);
function Tv(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
Tv(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Aa(e) {
  return e.label !== void 0;
}
var Ev = 3,
  Nv = "32px",
  Fv = 4e3,
  Pv = 356,
  Av = 14,
  Rv = 20,
  Ov = 200;
function Bv(...e) {
  return e.filter(Boolean).join(" ");
}
var Dv = (e) => {
  var t, n, r, o, a, s, l, c, u, p;
  let {
      invert: f,
      toast: d,
      unstyled: m,
      interacting: w,
      setHeights: y,
      visibleToasts: b,
      heights: g,
      index: h,
      toasts: v,
      expanded: C,
      removeToast: j,
      defaultRichColors: S,
      closeButton: T,
      style: N,
      cancelButtonStyle: M,
      actionButtonStyle: R,
      className: I = "",
      descriptionClassName: _ = "",
      duration: G,
      position: O,
      gap: q,
      loadingIcon: W,
      expandByDefault: Y,
      classNames: k,
      icons: A,
      closeButtonAriaLabel: z = "Close toast",
      pauseWhenPageIsHidden: D,
      cn: L,
    } = e,
    [Q, de] = P.useState(!1),
    [tt, ee] = P.useState(!1),
    [wt, fn] = P.useState(!1),
    [pn, hn] = P.useState(!1),
    [sa, kr] = P.useState(0),
    [er, Bo] = P.useState(0),
    la = P.useRef(null),
    mn = P.useRef(null),
    al = h === 0,
    sl = h + 1 <= b,
    Ee = d.type,
    Sr = d.dismissible !== !1,
    qg = d.className || "",
    Yg = d.descriptionClassName || "",
    ca = P.useMemo(
      () => g.findIndex((H) => H.toastId === d.id) || 0,
      [g, d.id],
    ),
    Kg = P.useMemo(() => {
      var H;
      return (H = d.closeButton) != null ? H : T;
    }, [d.closeButton, T]),
    Cd = P.useMemo(() => d.duration || G || Fv, [d.duration, G]),
    ll = P.useRef(0),
    Tr = P.useRef(0),
    jd = P.useRef(0),
    Er = P.useRef(null),
    [kd, Qg] = O.split("-"),
    Sd = P.useMemo(
      () => g.reduce((H, oe, ne) => (ne >= ca ? H : H + oe.height), 0),
      [g, ca],
    ),
    Td = wv(),
    Xg = d.invert || f,
    cl = Ee === "loading";
  ((Tr.current = P.useMemo(() => ca * q + Sd, [ca, Sd])),
    P.useEffect(() => {
      de(!0);
    }, []),
    P.useLayoutEffect(() => {
      if (!Q) return;
      let H = mn.current,
        oe = H.style.height;
      H.style.height = "auto";
      let ne = H.getBoundingClientRect().height;
      ((H.style.height = oe),
        Bo(ne),
        y((Dt) =>
          Dt.find((Mt) => Mt.toastId === d.id)
            ? Dt.map((Mt) => (Mt.toastId === d.id ? { ...Mt, height: ne } : Mt))
            : [{ toastId: d.id, height: ne, position: d.position }, ...Dt],
        ));
    }, [Q, d.title, d.description, y, d.id]));
  let gn = P.useCallback(() => {
    (ee(!0),
      kr(Tr.current),
      y((H) => H.filter((oe) => oe.toastId !== d.id)),
      setTimeout(() => {
        j(d);
      }, Ov));
  }, [d, j, y, Tr]);
  (P.useEffect(() => {
    if (
      (d.promise && Ee === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let H,
      oe = Cd;
    return (
      C || w || (D && Td)
        ? (() => {
            if (jd.current < ll.current) {
              let ne = new Date().getTime() - ll.current;
              oe = oe - ne;
            }
            jd.current = new Date().getTime();
          })()
        : oe !== 1 / 0 &&
          ((ll.current = new Date().getTime()),
          (H = setTimeout(() => {
            var ne;
            ((ne = d.onAutoClose) == null || ne.call(d, d), gn());
          }, oe))),
      () => clearTimeout(H)
    );
  }, [C, w, Y, d, Cd, gn, d.promise, Ee, D, Td]),
    P.useEffect(() => {
      let H = mn.current;
      if (H) {
        let oe = H.getBoundingClientRect().height;
        return (
          Bo(oe),
          y((ne) => [
            { toastId: d.id, height: oe, position: d.position },
            ...ne,
          ]),
          () => y((ne) => ne.filter((Dt) => Dt.toastId !== d.id))
        );
      }
    }, [y, d.id]),
    P.useEffect(() => {
      d.delete && gn();
    }, [gn, d.delete]));
  function Jg() {
    return A != null && A.loading
      ? P.createElement(
          "div",
          { className: "sonner-loader", "data-visible": Ee === "loading" },
          A.loading,
        )
      : W
        ? P.createElement(
            "div",
            { className: "sonner-loader", "data-visible": Ee === "loading" },
            W,
          )
        : P.createElement(mv, { visible: Ee === "loading" });
  }
  return P.createElement(
    "li",
    {
      "aria-live": d.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: mn,
      className: L(
        I,
        qg,
        k == null ? void 0 : k.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        k == null ? void 0 : k.default,
        k == null ? void 0 : k[Ee],
        (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Ee],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = d.richColors) != null ? r : S,
      "data-styled": !(d.jsx || d.unstyled || m),
      "data-mounted": Q,
      "data-promise": !!d.promise,
      "data-removed": tt,
      "data-visible": sl,
      "data-y-position": kd,
      "data-x-position": Qg,
      "data-index": h,
      "data-front": al,
      "data-swiping": wt,
      "data-dismissible": Sr,
      "data-type": Ee,
      "data-invert": Xg,
      "data-swipe-out": pn,
      "data-expanded": !!(C || (Y && Q)),
      style: {
        "--index": h,
        "--toasts-before": h,
        "--z-index": v.length - h,
        "--offset": `${tt ? sa : Tr.current}px`,
        "--initial-height": Y ? "auto" : `${er}px`,
        ...N,
        ...d.style,
      },
      onPointerDown: (H) => {
        cl ||
          !Sr ||
          ((la.current = new Date()),
          kr(Tr.current),
          H.target.setPointerCapture(H.pointerId),
          H.target.tagName !== "BUTTON" &&
            (fn(!0), (Er.current = { x: H.clientX, y: H.clientY })));
      },
      onPointerUp: () => {
        var H, oe, ne, Dt;
        if (pn || !Sr) return;
        Er.current = null;
        let Mt = Number(
            ((H = mn.current) == null
              ? void 0
              : H.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0,
          ),
          ua =
            new Date().getTime() -
            ((oe = la.current) == null ? void 0 : oe.getTime()),
          Zg = Math.abs(Mt) / ua;
        if (Math.abs(Mt) >= Rv || Zg > 0.11) {
          (kr(Tr.current),
            (ne = d.onDismiss) == null || ne.call(d, d),
            gn(),
            hn(!0));
          return;
        }
        ((Dt = mn.current) == null ||
          Dt.style.setProperty("--swipe-amount", "0px"),
          fn(!1));
      },
      onPointerMove: (H) => {
        var oe;
        if (!Er.current || !Sr) return;
        let ne = H.clientY - Er.current.y,
          Dt = H.clientX - Er.current.x,
          Mt = (kd === "top" ? Math.min : Math.max)(0, ne),
          ua = H.pointerType === "touch" ? 10 : 2;
        Math.abs(Mt) > ua
          ? (oe = mn.current) == null ||
            oe.style.setProperty("--swipe-amount", `${ne}px`)
          : Math.abs(Dt) > ua && (Er.current = null);
      },
    },
    Kg && !d.jsx
      ? P.createElement(
          "button",
          {
            "aria-label": z,
            "data-disabled": cl,
            "data-close-button": !0,
            onClick:
              cl || !Sr
                ? () => {}
                : () => {
                    var H;
                    (gn(), (H = d.onDismiss) == null || H.call(d, d));
                  },
            className: L(
              k == null ? void 0 : k.closeButton,
              (o = d == null ? void 0 : d.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          P.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            P.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            P.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
          ),
        )
      : null,
    d.jsx || P.isValidElement(d.title)
      ? d.jsx || d.title
      : P.createElement(
          P.Fragment,
          null,
          Ee || d.icon || d.promise
            ? P.createElement(
                "div",
                {
                  "data-icon": "",
                  className: L(
                    k == null ? void 0 : k.icon,
                    (a = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : a.icon,
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || Jg()
                  : null,
                d.type !== "loading"
                  ? d.icon || (A == null ? void 0 : A[Ee]) || pv(Ee)
                  : null,
              )
            : null,
          P.createElement(
            "div",
            {
              "data-content": "",
              className: L(
                k == null ? void 0 : k.content,
                (s = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : s.content,
              ),
            },
            P.createElement(
              "div",
              {
                "data-title": "",
                className: L(
                  k == null ? void 0 : k.title,
                  (l = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              d.title,
            ),
            d.description
              ? P.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: L(
                      _,
                      Yg,
                      k == null ? void 0 : k.description,
                      (c = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : c.description,
                    ),
                  },
                  d.description,
                )
              : null,
          ),
          P.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && Aa(d.cancel)
              ? P.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: d.cancelButtonStyle || M,
                    onClick: (H) => {
                      var oe, ne;
                      Aa(d.cancel) &&
                        Sr &&
                        ((ne = (oe = d.cancel).onClick) == null ||
                          ne.call(oe, H),
                        gn());
                    },
                    className: L(
                      k == null ? void 0 : k.cancelButton,
                      (u = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : u.cancelButton,
                    ),
                  },
                  d.cancel.label,
                )
              : null,
          P.isValidElement(d.action)
            ? d.action
            : d.action && Aa(d.action)
              ? P.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: d.actionButtonStyle || R,
                    onClick: (H) => {
                      var oe, ne;
                      Aa(d.action) &&
                        (H.defaultPrevented ||
                          ((ne = (oe = d.action).onClick) == null ||
                            ne.call(oe, H),
                          gn()));
                    },
                    className: L(
                      k == null ? void 0 : k.actionButton,
                      (p = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : p.actionButton,
                    ),
                  },
                  d.action.label,
                )
              : null,
        ),
  );
};
function Yf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var Mv = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: a,
      className: s,
      offset: l,
      theme: c = "light",
      richColors: u,
      duration: p,
      style: f,
      visibleToasts: d = Ev,
      toastOptions: m,
      dir: w = Yf(),
      gap: y = Av,
      loadingIcon: b,
      icons: g,
      containerAriaLabel: h = "Notifications",
      pauseWhenPageIsHidden: v,
      cn: C = Bv,
    } = e,
    [j, S] = P.useState([]),
    T = P.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(j.filter((D) => D.position).map((D) => D.position)),
          ),
        ),
      [j, n],
    ),
    [N, M] = P.useState([]),
    [R, I] = P.useState(!1),
    [_, G] = P.useState(!1),
    [O, q] = P.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    W = P.useRef(null),
    Y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    k = P.useRef(null),
    A = P.useRef(!1),
    z = P.useCallback(
      (D) => {
        var L;
        (((L = j.find((Q) => Q.id === D.id)) != null && L.delete) ||
          rt.dismiss(D.id),
          S((Q) => Q.filter(({ id: de }) => de !== D.id)));
      },
      [j],
    );
  return (
    P.useEffect(
      () =>
        rt.subscribe((D) => {
          if (D.dismiss) {
            S((L) => L.map((Q) => (Q.id === D.id ? { ...Q, delete: !0 } : Q)));
            return;
          }
          setTimeout(() => {
            Jm.flushSync(() => {
              S((L) => {
                let Q = L.findIndex((de) => de.id === D.id);
                return Q !== -1
                  ? [...L.slice(0, Q), { ...L[Q], ...D }, ...L.slice(Q + 1)]
                  : [D, ...L];
              });
            });
          });
        }),
      [],
    ),
    P.useEffect(() => {
      if (c !== "system") {
        q(c);
        return;
      }
      (c === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? q("dark")
          : q("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: D }) => {
              q(D ? "dark" : "light");
            }));
    }, [c]),
    P.useEffect(() => {
      j.length <= 1 && I(!1);
    }, [j]),
    P.useEffect(() => {
      let D = (L) => {
        var Q, de;
        (r.every((tt) => L[tt] || L.code === tt) &&
          (I(!0), (Q = W.current) == null || Q.focus()),
          L.code === "Escape" &&
            (document.activeElement === W.current ||
              ((de = W.current) != null &&
                de.contains(document.activeElement))) &&
            I(!1));
      };
      return (
        document.addEventListener("keydown", D),
        () => document.removeEventListener("keydown", D)
      );
    }, [r]),
    P.useEffect(() => {
      if (W.current)
        return () => {
          k.current &&
            (k.current.focus({ preventScroll: !0 }),
            (k.current = null),
            (A.current = !1));
        };
    }, [W.current]),
    j.length
      ? P.createElement(
          "section",
          { "aria-label": `${h} ${Y}`, tabIndex: -1 },
          T.map((D, L) => {
            var Q;
            let [de, tt] = D.split("-");
            return P.createElement(
              "ol",
              {
                key: D,
                dir: w === "auto" ? Yf() : w,
                tabIndex: -1,
                ref: W,
                className: s,
                "data-sonner-toaster": !0,
                "data-theme": O,
                "data-y-position": de,
                "data-x-position": tt,
                style: {
                  "--front-toast-height": `${((Q = N[0]) == null ? void 0 : Q.height) || 0}px`,
                  "--offset": typeof l == "number" ? `${l}px` : l || Nv,
                  "--width": `${Pv}px`,
                  "--gap": `${y}px`,
                  ...f,
                },
                onBlur: (ee) => {
                  A.current &&
                    !ee.currentTarget.contains(ee.relatedTarget) &&
                    ((A.current = !1),
                    k.current &&
                      (k.current.focus({ preventScroll: !0 }),
                      (k.current = null)));
                },
                onFocus: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    A.current ||
                    ((A.current = !0), (k.current = ee.relatedTarget));
                },
                onMouseEnter: () => I(!0),
                onMouseMove: () => I(!0),
                onMouseLeave: () => {
                  _ || I(!1);
                },
                onPointerDown: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    G(!0);
                },
                onPointerUp: () => G(!1),
              },
              j
                .filter((ee) => (!ee.position && L === 0) || ee.position === D)
                .map((ee, wt) => {
                  var fn, pn;
                  return P.createElement(Dv, {
                    key: ee.id,
                    icons: g,
                    index: wt,
                    toast: ee,
                    defaultRichColors: u,
                    duration:
                      (fn = m == null ? void 0 : m.duration) != null ? fn : p,
                    className: m == null ? void 0 : m.className,
                    descriptionClassName:
                      m == null ? void 0 : m.descriptionClassName,
                    invert: t,
                    visibleToasts: d,
                    closeButton:
                      (pn = m == null ? void 0 : m.closeButton) != null
                        ? pn
                        : a,
                    interacting: _,
                    position: D,
                    style: m == null ? void 0 : m.style,
                    unstyled: m == null ? void 0 : m.unstyled,
                    classNames: m == null ? void 0 : m.classNames,
                    cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                    actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                    removeToast: z,
                    toasts: j.filter((hn) => hn.position == ee.position),
                    heights: N.filter((hn) => hn.position == ee.position),
                    setHeights: M,
                    expandByDefault: o,
                    gap: y,
                    loadingIcon: b,
                    expanded: R,
                    pauseWhenPageIsHidden: v,
                    cn: C,
                  });
                }),
            );
          }),
        )
      : null
  );
};
const _v = ({ ...e }) => {
    const { theme: t = "system" } = fv();
    return i.jsx(Mv, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  zv = ["top", "right", "bottom", "left"],
  Gn = Math.min,
  it = Math.max,
  ks = Math.round,
  Ra = Math.floor,
  qn = (e) => ({ x: e, y: e }),
  Lv = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Iv = { start: "end", end: "start" };
function Kc(e, t, n) {
  return it(e, Gn(t, n));
}
function cn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function un(e) {
  return e.split("-")[0];
}
function Ao(e) {
  return e.split("-")[1];
}
function cd(e) {
  return e === "x" ? "y" : "x";
}
function ud(e) {
  return e === "y" ? "height" : "width";
}
function Yn(e) {
  return ["top", "bottom"].includes(un(e)) ? "y" : "x";
}
function dd(e) {
  return cd(Yn(e));
}
function Wv(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e),
    o = dd(e),
    a = ud(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[a] > t.floating[a] && (s = Ss(s)), [s, Ss(s)]);
}
function $v(e) {
  const t = Ss(e);
  return [Qc(e), t, Qc(t)];
}
function Qc(e) {
  return e.replace(/start|end/g, (t) => Iv[t]);
}
function Hv(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    a = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Uv(e, t, n, r) {
  const o = Ao(e);
  let a = Hv(un(e), n === "start", r);
  return (
    o && ((a = a.map((s) => s + "-" + o)), t && (a = a.concat(a.map(Qc)))),
    a
  );
}
function Ss(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lv[t]);
}
function Vv(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function W1(e) {
  return typeof e != "number"
    ? Vv(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ts(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Kf(e, t, n) {
  let { reference: r, floating: o } = e;
  const a = Yn(t),
    s = dd(t),
    l = ud(s),
    c = un(t),
    u = a === "y",
    p = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    d = r[l] / 2 - o[l] / 2;
  let m;
  switch (c) {
    case "top":
      m = { x: p, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: p, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: f };
      break;
    case "left":
      m = { x: r.x - o.width, y: f };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (Ao(t)) {
    case "start":
      m[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += d * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Gv = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: a = [],
      platform: s,
    } = n,
    l = a.filter(Boolean),
    c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: p, y: f } = Kf(u, r, c),
    d = r,
    m = {},
    w = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: b, fn: g } = l[y],
      {
        x: h,
        y: v,
        data: C,
        reset: j,
      } = await g({
        x: p,
        y: f,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: m,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((p = h ?? p),
      (f = v ?? f),
      (m = { ...m, [b]: { ...m[b], ...C } }),
      j &&
        w <= 50 &&
        (w++,
        typeof j == "object" &&
          (j.placement && (d = j.placement),
          j.rects &&
            (u =
              j.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : j.rects),
          ({ x: p, y: f } = Kf(u, d, c))),
        (y = -1)));
  }
  return { x: p, y: f, placement: d, strategy: o, middlewareData: m };
};
async function Ui(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: a, rects: s, elements: l, strategy: c } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: m = 0,
    } = cn(t, e),
    w = W1(m),
    b = l[d ? (f === "floating" ? "reference" : "floating") : f],
    g = Ts(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: p,
        strategy: c,
      }),
    ),
    h =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    v = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(l.floating)),
    C = (await (a.isElement == null ? void 0 : a.isElement(v)))
      ? (await (a.getScale == null ? void 0 : a.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    j = Ts(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: h,
            offsetParent: v,
            strategy: c,
          })
        : h,
    );
  return {
    top: (g.top - j.top + w.top) / C.y,
    bottom: (j.bottom - g.bottom + w.bottom) / C.y,
    left: (g.left - j.left + w.left) / C.x,
    right: (j.right - g.right + w.right) / C.x,
  };
}
const qv = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: a,
          platform: s,
          elements: l,
          middlewareData: c,
        } = t,
        { element: u, padding: p = 0 } = cn(e, t) || {};
      if (u == null) return {};
      const f = W1(p),
        d = { x: n, y: r },
        m = dd(o),
        w = ud(m),
        y = await s.getDimensions(u),
        b = m === "y",
        g = b ? "top" : "left",
        h = b ? "bottom" : "right",
        v = b ? "clientHeight" : "clientWidth",
        C = a.reference[w] + a.reference[m] - d[m] - a.floating[w],
        j = d[m] - a.reference[m],
        S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let T = S ? S[v] : 0;
      (!T || !(await (s.isElement == null ? void 0 : s.isElement(S)))) &&
        (T = l.floating[v] || a.floating[w]);
      const N = C / 2 - j / 2,
        M = T / 2 - y[w] / 2 - 1,
        R = Gn(f[g], M),
        I = Gn(f[h], M),
        _ = R,
        G = T - y[w] - I,
        O = T / 2 - y[w] / 2 + N,
        q = Kc(_, O, G),
        W =
          !c.arrow &&
          Ao(o) != null &&
          O !== q &&
          a.reference[w] / 2 - (O < _ ? R : I) - y[w] / 2 < 0,
        Y = W ? (O < _ ? O - _ : O - G) : 0;
      return {
        [m]: d[m] + Y,
        data: {
          [m]: q,
          centerOffset: O - q - Y,
          ...(W && { alignmentOffset: Y }),
        },
        reset: W,
      };
    },
  }),
  Yv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: a,
              rects: s,
              initialPlacement: l,
              platform: c,
              elements: u,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: f = !0,
              fallbackPlacements: d,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: y = !0,
              ...b
            } = cn(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const g = un(o),
            h = Yn(l),
            v = un(l) === l,
            C = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
            j = d || (v || !y ? [Ss(l)] : $v(l)),
            S = w !== "none";
          !d && S && j.push(...Uv(l, y, w, C));
          const T = [l, ...j],
            N = await Ui(t, b),
            M = [];
          let R = ((r = a.flip) == null ? void 0 : r.overflows) || [];
          if ((p && M.push(N[g]), f)) {
            const O = Wv(o, s, C);
            M.push(N[O[0]], N[O[1]]);
          }
          if (
            ((R = [...R, { placement: o, overflows: M }]),
            !M.every((O) => O <= 0))
          ) {
            var I, _;
            const O = (((I = a.flip) == null ? void 0 : I.index) || 0) + 1,
              q = T[O];
            if (q)
              return {
                data: { index: O, overflows: R },
                reset: { placement: q },
              };
            let W =
              (_ = R.filter((Y) => Y.overflows[0] <= 0).sort(
                (Y, k) => Y.overflows[1] - k.overflows[1],
              )[0]) == null
                ? void 0
                : _.placement;
            if (!W)
              switch (m) {
                case "bestFit": {
                  var G;
                  const Y =
                    (G = R.filter((k) => {
                      if (S) {
                        const A = Yn(k.placement);
                        return A === h || A === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((A) => A > 0)
                          .reduce((A, z) => A + z, 0),
                      ])
                      .sort((k, A) => k[1] - A[1])[0]) == null
                      ? void 0
                      : G[0];
                  Y && (W = Y);
                  break;
                }
                case "initialPlacement":
                  W = l;
                  break;
              }
            if (o !== W) return { reset: { placement: W } };
          }
          return {};
        },
      }
    );
  };
function Qf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Xf(e) {
  return zv.some((t) => e[t] >= 0);
}
const Kv = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = cn(e, t);
        switch (r) {
          case "referenceHidden": {
            const a = await Ui(t, { ...o, elementContext: "reference" }),
              s = Qf(a, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Xf(s) },
            };
          }
          case "escaped": {
            const a = await Ui(t, { ...o, altBoundary: !0 }),
              s = Qf(a, n.floating);
            return { data: { escapedOffsets: s, escaped: Xf(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Qv(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = un(n),
    l = Ao(n),
    c = Yn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    p = a && c ? -1 : 1,
    f = cn(t, e);
  let {
    mainAxis: d,
    crossAxis: m,
    alignmentAxis: w,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof w == "number" && (m = l === "end" ? w * -1 : w),
    c ? { x: m * p, y: d * u } : { x: d * u, y: m * p }
  );
}
const Xv = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: a, placement: s, middlewareData: l } = t,
            c = await Qv(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + c.x, y: a + c.y, data: { ...c, placement: s } };
        },
      }
    );
  },
  Jv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: a = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (b) => {
                  let { x: g, y: h } = b;
                  return { x: g, y: h };
                },
              },
              ...c
            } = cn(e, t),
            u = { x: n, y: r },
            p = await Ui(t, c),
            f = Yn(un(o)),
            d = cd(f);
          let m = u[d],
            w = u[f];
          if (a) {
            const b = d === "y" ? "top" : "left",
              g = d === "y" ? "bottom" : "right",
              h = m + p[b],
              v = m - p[g];
            m = Kc(h, m, v);
          }
          if (s) {
            const b = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              h = w + p[b],
              v = w - p[g];
            w = Kc(h, w, v);
          }
          const y = l.fn({ ...t, [d]: m, [f]: w });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [d]: a, [f]: s } },
          };
        },
      }
    );
  },
  Zv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: a, middlewareData: s } = t,
            { offset: l = 0, mainAxis: c = !0, crossAxis: u = !0 } = cn(e, t),
            p = { x: n, y: r },
            f = Yn(o),
            d = cd(f);
          let m = p[d],
            w = p[f];
          const y = cn(l, t),
            b =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (c) {
            const v = d === "y" ? "height" : "width",
              C = a.reference[d] - a.floating[v] + b.mainAxis,
              j = a.reference[d] + a.reference[v] - b.mainAxis;
            m < C ? (m = C) : m > j && (m = j);
          }
          if (u) {
            var g, h;
            const v = d === "y" ? "width" : "height",
              C = ["top", "left"].includes(un(o)),
              j =
                a.reference[f] -
                a.floating[v] +
                ((C && ((g = s.offset) == null ? void 0 : g[f])) || 0) +
                (C ? 0 : b.crossAxis),
              S =
                a.reference[f] +
                a.reference[v] +
                (C ? 0 : ((h = s.offset) == null ? void 0 : h[f]) || 0) -
                (C ? b.crossAxis : 0);
            w < j ? (w = j) : w > S && (w = S);
          }
          return { [d]: m, [f]: w };
        },
      }
    );
  },
  e4 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: a, platform: s, elements: l } = t,
            { apply: c = () => {}, ...u } = cn(e, t),
            p = await Ui(t, u),
            f = un(o),
            d = Ao(o),
            m = Yn(o) === "y",
            { width: w, height: y } = a.floating;
          let b, g;
          f === "top" || f === "bottom"
            ? ((b = f),
              (g =
                d ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = f), (b = d === "end" ? "top" : "bottom"));
          const h = y - p.top - p.bottom,
            v = w - p.left - p.right,
            C = Gn(y - p[b], h),
            j = Gn(w - p[g], v),
            S = !t.middlewareData.shift;
          let T = C,
            N = j;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (N = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = h),
            S && !d)
          ) {
            const R = it(p.left, 0),
              I = it(p.right, 0),
              _ = it(p.top, 0),
              G = it(p.bottom, 0);
            m
              ? (N = w - 2 * (R !== 0 || I !== 0 ? R + I : it(p.left, p.right)))
              : (T =
                  y - 2 * (_ !== 0 || G !== 0 ? _ + G : it(p.top, p.bottom)));
          }
          await c({ ...t, availableWidth: N, availableHeight: T });
          const M = await s.getDimensions(l.floating);
          return w !== M.width || y !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Js() {
  return typeof window < "u";
}
function Ro(e) {
  return $1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function lt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Yt(e) {
  var t;
  return (t = ($1(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function $1(e) {
  return Js() ? e instanceof Node || e instanceof lt(e).Node : !1;
}
function Ot(e) {
  return Js() ? e instanceof Element || e instanceof lt(e).Element : !1;
}
function qt(e) {
  return Js() ? e instanceof HTMLElement || e instanceof lt(e).HTMLElement : !1;
}
function Jf(e) {
  return !Js() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot;
}
function ia(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Bt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function t4(e) {
  return ["table", "td", "th"].includes(Ro(e));
}
function Zs(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function fd(e) {
  const t = pd(),
    n = Ot(e) ? Bt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function n4(e) {
  let t = Kn(e);
  for (; qt(t) && !jo(t); ) {
    if (fd(t)) return t;
    if (Zs(t)) return null;
    t = Kn(t);
  }
  return null;
}
function pd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function jo(e) {
  return ["html", "body", "#document"].includes(Ro(e));
}
function Bt(e) {
  return lt(e).getComputedStyle(e);
}
function el(e) {
  return Ot(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Kn(e) {
  if (Ro(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Jf(e) && e.host) || Yt(e);
  return Jf(t) ? t.host : t;
}
function H1(e) {
  const t = Kn(e);
  return jo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : qt(t) && ia(t)
      ? t
      : H1(t);
}
function Vi(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = H1(e),
    a = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = lt(o);
  if (a) {
    const l = Xc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ia(o) ? o : [],
      l && n ? Vi(l) : [],
    );
  }
  return t.concat(o, Vi(o, [], n));
}
function Xc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function U1(e) {
  const t = Bt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = qt(e),
    a = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = ks(n) !== a || ks(r) !== s;
  return (l && ((n = a), (r = s)), { width: n, height: r, $: l });
}
function hd(e) {
  return Ot(e) ? e : e.contextElement;
}
function oo(e) {
  const t = hd(e);
  if (!qt(t)) return qn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: a } = U1(t);
  let s = (a ? ks(n.width) : n.width) / r,
    l = (a ? ks(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const r4 = qn(0);
function V1(e) {
  const t = lt(e);
  return !pd() || !t.visualViewport
    ? r4
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function o4(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== lt(e)) ? !1 : t);
}
function vr(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    a = hd(e);
  let s = qn(1);
  t && (r ? Ot(r) && (s = oo(r)) : (s = oo(e)));
  const l = o4(a, n, r) ? V1(a) : qn(0);
  let c = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    p = o.width / s.x,
    f = o.height / s.y;
  if (a) {
    const d = lt(a),
      m = r && Ot(r) ? lt(r) : r;
    let w = d,
      y = Xc(w);
    for (; y && r && m !== w; ) {
      const b = oo(y),
        g = y.getBoundingClientRect(),
        h = Bt(y),
        v = g.left + (y.clientLeft + parseFloat(h.paddingLeft)) * b.x,
        C = g.top + (y.clientTop + parseFloat(h.paddingTop)) * b.y;
      ((c *= b.x),
        (u *= b.y),
        (p *= b.x),
        (f *= b.y),
        (c += v),
        (u += C),
        (w = lt(y)),
        (y = Xc(w)));
    }
  }
  return Ts({ width: p, height: f, x: c, y: u });
}
function i4(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const a = o === "fixed",
    s = Yt(r),
    l = t ? Zs(t.floating) : !1;
  if (r === s || (l && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    u = qn(1);
  const p = qn(0),
    f = qt(r);
  if (
    (f || (!f && !a)) &&
    ((Ro(r) !== "body" || ia(s)) && (c = el(r)), qt(r))
  ) {
    const d = vr(r);
    ((u = oo(r)), (p.x = d.x + r.clientLeft), (p.y = d.y + r.clientTop));
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + p.x,
    y: n.y * u.y - c.scrollTop * u.y + p.y,
  };
}
function a4(e) {
  return Array.from(e.getClientRects());
}
function Jc(e, t) {
  const n = el(e).scrollLeft;
  return t ? t.left + n : vr(Yt(e)).left + n;
}
function s4(e) {
  const t = Yt(e),
    n = el(e),
    r = e.ownerDocument.body,
    o = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Jc(e);
  const l = -n.scrollTop;
  return (
    Bt(r).direction === "rtl" && (s += it(t.clientWidth, r.clientWidth) - o),
    { width: o, height: a, x: s, y: l }
  );
}
function l4(e, t) {
  const n = lt(e),
    r = Yt(e),
    o = n.visualViewport;
  let a = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    c = 0;
  if (o) {
    ((a = o.width), (s = o.height));
    const u = pd();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (c = o.offsetTop));
  }
  return { width: a, height: s, x: l, y: c };
}
function c4(e, t) {
  const n = vr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    a = qt(e) ? oo(e) : qn(1),
    s = e.clientWidth * a.x,
    l = e.clientHeight * a.y,
    c = o * a.x,
    u = r * a.y;
  return { width: s, height: l, x: c, y: u };
}
function Zf(e, t, n) {
  let r;
  if (t === "viewport") r = l4(e, n);
  else if (t === "document") r = s4(Yt(e));
  else if (Ot(t)) r = c4(t, n);
  else {
    const o = V1(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Ts(r);
}
function G1(e, t) {
  const n = Kn(e);
  return n === t || !Ot(n) || jo(n)
    ? !1
    : Bt(n).position === "fixed" || G1(n, t);
}
function u4(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Vi(e, [], !1).filter((l) => Ot(l) && Ro(l) !== "body"),
    o = null;
  const a = Bt(e).position === "fixed";
  let s = a ? Kn(e) : e;
  for (; Ot(s) && !jo(s); ) {
    const l = Bt(s),
      c = fd(s);
    (!c && l.position === "fixed" && (o = null),
      (
        a
          ? !c && !o
          : (!c &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ia(s) && !c && G1(e, s))
      )
        ? (r = r.filter((p) => p !== s))
        : (o = l),
      (s = Kn(s)));
  }
  return (t.set(e, r), r);
}
function d4(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Zs(t)
          ? []
          : u4(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    c = s.reduce(
      (u, p) => {
        const f = Zf(t, p, o);
        return (
          (u.top = it(f.top, u.top)),
          (u.right = Gn(f.right, u.right)),
          (u.bottom = Gn(f.bottom, u.bottom)),
          (u.left = it(f.left, u.left)),
          u
        );
      },
      Zf(t, l, o),
    );
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function f4(e) {
  const { width: t, height: n } = U1(e);
  return { width: t, height: n };
}
function p4(e, t, n) {
  const r = qt(t),
    o = Yt(t),
    a = n === "fixed",
    s = vr(e, !0, a, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = qn(0);
  if (r || (!r && !a))
    if (((Ro(t) !== "body" || ia(o)) && (l = el(t)), r)) {
      const m = vr(t, !0, a, t);
      ((c.x = m.x + t.clientLeft), (c.y = m.y + t.clientTop));
    } else o && (c.x = Jc(o));
  let u = 0,
    p = 0;
  if (o && !r && !a) {
    const m = o.getBoundingClientRect();
    ((p = m.top + l.scrollTop), (u = m.left + l.scrollLeft - Jc(o, m)));
  }
  const f = s.left + l.scrollLeft - c.x - u,
    d = s.top + l.scrollTop - c.y - p;
  return { x: f, y: d, width: s.width, height: s.height };
}
function Wl(e) {
  return Bt(e).position === "static";
}
function ep(e, t) {
  if (!qt(e) || Bt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (Yt(e) === n && (n = n.ownerDocument.body), n);
}
function q1(e, t) {
  const n = lt(e);
  if (Zs(e)) return n;
  if (!qt(e)) {
    let o = Kn(e);
    for (; o && !jo(o); ) {
      if (Ot(o) && !Wl(o)) return o;
      o = Kn(o);
    }
    return n;
  }
  let r = ep(e, t);
  for (; r && t4(r) && Wl(r); ) r = ep(r, t);
  return r && jo(r) && Wl(r) && !fd(r) ? n : r || n4(e) || n;
}
const h4 = async function (e) {
  const t = this.getOffsetParent || q1,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: p4(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function m4(e) {
  return Bt(e).direction === "rtl";
}
const g4 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: i4,
  getDocumentElement: Yt,
  getClippingRect: d4,
  getOffsetParent: q1,
  getElementRects: h4,
  getClientRects: a4,
  getDimensions: f4,
  getScale: oo,
  isElement: Ot,
  isRTL: m4,
};
function y4(e, t) {
  let n = null,
    r;
  const o = Yt(e);
  function a() {
    var l;
    (clearTimeout(r), (l = n) == null || l.disconnect(), (n = null));
  }
  function s(l, c) {
    (l === void 0 && (l = !1), c === void 0 && (c = 1), a());
    const { left: u, top: p, width: f, height: d } = e.getBoundingClientRect();
    if ((l || t(), !f || !d)) return;
    const m = Ra(p),
      w = Ra(o.clientWidth - (u + f)),
      y = Ra(o.clientHeight - (p + d)),
      b = Ra(u),
      h = {
        rootMargin: -m + "px " + -w + "px " + -y + "px " + -b + "px",
        threshold: it(0, Gn(1, c)) || 1,
      };
    let v = !0;
    function C(j) {
      const S = j[0].intersectionRatio;
      if (S !== c) {
        if (!v) return s();
        S
          ? s(!1, S)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...h, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, h);
    }
    n.observe(e);
  }
  return (s(!0), a);
}
function x4(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: a = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    u = hd(e),
    p = o || a ? [...(u ? Vi(u) : []), ...Vi(t)] : [];
  p.forEach((g) => {
    (o && g.addEventListener("scroll", n, { passive: !0 }),
      a && g.addEventListener("resize", n));
  });
  const f = u && l ? y4(u, n) : null;
  let d = -1,
    m = null;
  s &&
    ((m = new ResizeObserver((g) => {
      let [h] = g;
      (h &&
        h.target === u &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          var v;
          (v = m) == null || v.observe(t);
        }))),
        n());
    })),
    u && !c && m.observe(u),
    m.observe(t));
  let w,
    y = c ? vr(e) : null;
  c && b();
  function b() {
    const g = vr(e);
    (y &&
      (g.x !== y.x ||
        g.y !== y.y ||
        g.width !== y.width ||
        g.height !== y.height) &&
      n(),
      (y = g),
      (w = requestAnimationFrame(b)));
  }
  return (
    n(),
    () => {
      var g;
      (p.forEach((h) => {
        (o && h.removeEventListener("scroll", n),
          a && h.removeEventListener("resize", n));
      }),
        f == null || f(),
        (g = m) == null || g.disconnect(),
        (m = null),
        c && cancelAnimationFrame(w));
    }
  );
}
const v4 = Xv,
  w4 = Jv,
  b4 = Yv,
  C4 = e4,
  j4 = Kv,
  tp = qv,
  k4 = Zv,
  S4 = (e, t, n) => {
    const r = new Map(),
      o = { platform: g4, ...n },
      a = { ...o.platform, _c: r };
    return Gv(e, t, { ...o, platform: a });
  };
var Qa = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Es(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Es(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Es(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Y1(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function np(e, t) {
  const n = Y1(e);
  return Math.round(t * n) / n;
}
function $l(e) {
  const t = x.useRef(e);
  return (
    Qa(() => {
      t.current = e;
    }),
    t
  );
}
function T4(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: a, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: c,
      open: u,
    } = e,
    [p, f] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [d, m] = x.useState(r);
  Es(d, r) || m(r);
  const [w, y] = x.useState(null),
    [b, g] = x.useState(null),
    h = x.useCallback((k) => {
      k !== S.current && ((S.current = k), y(k));
    }, []),
    v = x.useCallback((k) => {
      k !== T.current && ((T.current = k), g(k));
    }, []),
    C = a || w,
    j = s || b,
    S = x.useRef(null),
    T = x.useRef(null),
    N = x.useRef(p),
    M = c != null,
    R = $l(c),
    I = $l(o),
    _ = $l(u),
    G = x.useCallback(() => {
      if (!S.current || !T.current) return;
      const k = { placement: t, strategy: n, middleware: d };
      (I.current && (k.platform = I.current),
        S4(S.current, T.current, k).then((A) => {
          const z = { ...A, isPositioned: _.current !== !1 };
          O.current &&
            !Es(N.current, z) &&
            ((N.current = z),
            oa.flushSync(() => {
              f(z);
            }));
        }));
    }, [d, t, n, I, _]);
  Qa(() => {
    u === !1 &&
      N.current.isPositioned &&
      ((N.current.isPositioned = !1), f((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const O = x.useRef(!1);
  (Qa(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  ),
    Qa(() => {
      if ((C && (S.current = C), j && (T.current = j), C && j)) {
        if (R.current) return R.current(C, j, G);
        G();
      }
    }, [C, j, G, R, M]));
  const q = x.useMemo(
      () => ({ reference: S, floating: T, setReference: h, setFloating: v }),
      [h, v],
    ),
    W = x.useMemo(() => ({ reference: C, floating: j }), [C, j]),
    Y = x.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!W.floating) return k;
      const A = np(W.floating, p.x),
        z = np(W.floating, p.y);
      return l
        ? {
            ...k,
            transform: "translate(" + A + "px, " + z + "px)",
            ...(Y1(W.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: z };
    }, [n, l, W.floating, p.x, p.y]);
  return x.useMemo(
    () => ({ ...p, update: G, refs: q, elements: W, floatingStyles: Y }),
    [p, G, q, W, Y],
  );
}
const E4 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? tp({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? tp({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  N4 = (e, t) => ({ ...v4(e), options: [e, t] }),
  F4 = (e, t) => ({ ...w4(e), options: [e, t] }),
  P4 = (e, t) => ({ ...k4(e), options: [e, t] }),
  A4 = (e, t) => ({ ...b4(e), options: [e, t] }),
  R4 = (e, t) => ({ ...C4(e), options: [e, t] }),
  O4 = (e, t) => ({ ...j4(e), options: [e, t] }),
  B4 = (e, t) => ({ ...E4(e), options: [e, t] });
var D4 = "Arrow",
  K1 = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...a } = e;
    return i.jsx(et.svg, {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : i.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
K1.displayName = D4;
var M4 = K1;
function _4(e, t = []) {
  let n = [];
  function r(a, s) {
    const l = x.createContext(s),
      c = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: d, children: m, ...w } = f,
        y = (d == null ? void 0 : d[e][c]) || l,
        b = x.useMemo(() => w, Object.values(w));
      return i.jsx(y.Provider, { value: b, children: m });
    }
    function p(f, d) {
      const m = (d == null ? void 0 : d[e][c]) || l,
        w = x.useContext(m);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return ((u.displayName = a + "Provider"), [u, p]);
  }
  const o = () => {
    const a = n.map((s) => x.createContext(s));
    return function (l) {
      const c = (l == null ? void 0 : l[e]) || a;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: c } }), [l, c]);
    };
  };
  return ((o.scopeName = e), [r, z4(o, ...t)]);
}
function z4(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (a) {
      const s = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(a)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function L4(e) {
  const [t, n] = x.useState(void 0);
  return (
    xr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const a = o[0];
          let s, l;
          if ("borderBoxSize" in a) {
            const c = a.borderBoxSize,
              u = Array.isArray(c) ? c[0] : c;
            ((s = u.inlineSize), (l = u.blockSize));
          } else ((s = e.offsetWidth), (l = e.offsetHeight));
          n({ width: s, height: l });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Q1 = "Popper",
  [X1, J1] = _4(Q1),
  [l5, Z1] = X1(Q1),
  eg = "PopperAnchor",
  tg = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      a = Z1(eg, n),
      s = x.useRef(null),
      l = Rt(t, s);
    return (
      x.useEffect(() => {
        a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : i.jsx(et.div, { ...o, ref: l })
    );
  });
tg.displayName = eg;
var md = "PopperContent",
  [I4, W4] = X1(md),
  ng = x.forwardRef((e, t) => {
    var wt, fn, pn, hn, sa, kr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: a = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: c = !0,
        collisionBoundary: u = [],
        collisionPadding: p = 0,
        sticky: f = "partial",
        hideWhenDetached: d = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: w,
        ...y
      } = e,
      b = Z1(md, n),
      [g, h] = x.useState(null),
      v = Rt(t, (er) => h(er)),
      [C, j] = x.useState(null),
      S = L4(C),
      T = (S == null ? void 0 : S.width) ?? 0,
      N = (S == null ? void 0 : S.height) ?? 0,
      M = r + (a !== "center" ? "-" + a : ""),
      R =
        typeof p == "number"
          ? p
          : { top: 0, right: 0, bottom: 0, left: 0, ...p },
      I = Array.isArray(u) ? u : [u],
      _ = I.length > 0,
      G = { padding: R, boundary: I.filter(H4), altBoundary: _ },
      {
        refs: O,
        floatingStyles: q,
        placement: W,
        isPositioned: Y,
        middlewareData: k,
      } = T4({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...er) =>
          x4(...er, { animationFrame: m === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          N4({ mainAxis: o + N, alignmentAxis: s }),
          c &&
            F4({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? P4() : void 0,
              ...G,
            }),
          c && A4({ ...G }),
          R4({
            ...G,
            apply: ({
              elements: er,
              rects: Bo,
              availableWidth: la,
              availableHeight: mn,
            }) => {
              const { width: al, height: sl } = Bo.reference,
                Ee = er.floating.style;
              (Ee.setProperty("--radix-popper-available-width", `${la}px`),
                Ee.setProperty("--radix-popper-available-height", `${mn}px`),
                Ee.setProperty("--radix-popper-anchor-width", `${al}px`),
                Ee.setProperty("--radix-popper-anchor-height", `${sl}px`));
            },
          }),
          C && B4({ element: C, padding: l }),
          U4({ arrowWidth: T, arrowHeight: N }),
          d && O4({ strategy: "referenceHidden", ...G }),
        ],
      }),
      [A, z] = ig(W),
      D = Gt(w);
    xr(() => {
      Y && (D == null || D());
    }, [Y, D]);
    const L = (wt = k.arrow) == null ? void 0 : wt.x,
      Q = (fn = k.arrow) == null ? void 0 : fn.y,
      de = ((pn = k.arrow) == null ? void 0 : pn.centerOffset) !== 0,
      [tt, ee] = x.useState();
    return (
      xr(() => {
        g && ee(window.getComputedStyle(g).zIndex);
      }, [g]),
      i.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: Y ? q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: tt,
          "--radix-popper-transform-origin": [
            (hn = k.transformOrigin) == null ? void 0 : hn.x,
            (sa = k.transformOrigin) == null ? void 0 : sa.y,
          ].join(" "),
          ...(((kr = k.hide) == null ? void 0 : kr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: i.jsx(I4, {
          scope: n,
          placedSide: A,
          onArrowChange: j,
          arrowX: L,
          arrowY: Q,
          shouldHideArrow: de,
          children: i.jsx(et.div, {
            "data-side": A,
            "data-align": z,
            ...y,
            ref: v,
            style: { ...y.style, animation: Y ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ng.displayName = md;
var rg = "PopperArrow",
  $4 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  og = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      a = W4(rg, r),
      s = $4[a.placedSide];
    return i.jsx("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0,
      },
      children: i.jsx(M4, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
og.displayName = rg;
function H4(e) {
  return e !== null;
}
var U4 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, g, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      c = s ? 0 : e.arrowHeight,
      [u, p] = ig(n),
      f = { start: "0%", center: "50%", end: "100%" }[p],
      d = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + l / 2,
      m = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + c / 2;
    let w = "",
      y = "";
    return (
      u === "bottom"
        ? ((w = s ? f : `${d}px`), (y = `${-c}px`))
        : u === "top"
          ? ((w = s ? f : `${d}px`), (y = `${r.floating.height + c}px`))
          : u === "right"
            ? ((w = `${-c}px`), (y = s ? f : `${m}px`))
            : u === "left" &&
              ((w = `${r.floating.width + c}px`), (y = s ? f : `${m}px`)),
      { data: { x: w, y } }
    );
  },
});
function ig(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var V4 = tg,
  G4 = ng,
  q4 = og,
  [tl, c5] = n1("Tooltip", [J1]),
  gd = J1(),
  ag = "TooltipProvider",
  Y4 = 700,
  rp = "tooltip.open",
  [K4, sg] = tl(ag),
  lg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Y4,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: a,
      } = e,
      [s, l] = x.useState(!0),
      c = x.useRef(!1),
      u = x.useRef(0);
    return (
      x.useEffect(() => {
        const p = u.current;
        return () => window.clearTimeout(p);
      }, []),
      i.jsx(K4, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          (window.clearTimeout(u.current), l(!1));
        }, []),
        onClose: x.useCallback(() => {
          (window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => l(!0), r)));
        }, [r]),
        isPointerInTransitRef: c,
        onPointerInTransitChange: x.useCallback((p) => {
          c.current = p;
        }, []),
        disableHoverableContent: o,
        children: a,
      })
    );
  };
lg.displayName = ag;
var cg = "Tooltip",
  [u5, nl] = tl(cg),
  Zc = "TooltipTrigger",
  Q4 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = nl(Zc, n),
      a = sg(Zc, n),
      s = gd(n),
      l = x.useRef(null),
      c = Rt(t, l, o.onTriggerChange),
      u = x.useRef(!1),
      p = x.useRef(!1),
      f = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      i.jsx(V4, {
        asChild: !0,
        ...s,
        children: i.jsx(et.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: c,
          onPointerMove: je(e.onPointerMove, (d) => {
            d.pointerType !== "touch" &&
              !p.current &&
              !a.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (p.current = !0));
          }),
          onPointerLeave: je(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (p.current = !1));
          }),
          onPointerDown: je(e.onPointerDown, () => {
            ((u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 }));
          }),
          onFocus: je(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: je(e.onBlur, o.onClose),
          onClick: je(e.onClick, o.onClose),
        }),
      })
    );
  });
Q4.displayName = Zc;
var X4 = "TooltipPortal",
  [d5, J4] = tl(X4, { forceMount: void 0 }),
  ko = "TooltipContent",
  ug = x.forwardRef((e, t) => {
    const n = J4(ko, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...a } = e,
      s = nl(ko, e.__scopeTooltip);
    return i.jsx(rd, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? i.jsx(dg, { side: o, ...a, ref: t })
        : i.jsx(Z4, { side: o, ...a, ref: t }),
    });
  }),
  Z4 = x.forwardRef((e, t) => {
    const n = nl(ko, e.__scopeTooltip),
      r = sg(ko, e.__scopeTooltip),
      o = x.useRef(null),
      a = Rt(t, o),
      [s, l] = x.useState(null),
      { trigger: c, onClose: u } = n,
      p = o.current,
      { onPointerInTransitChange: f } = r,
      d = x.useCallback(() => {
        (l(null), f(!1));
      }, [f]),
      m = x.useCallback(
        (w, y) => {
          const b = w.currentTarget,
            g = { x: w.clientX, y: w.clientY },
            h = r3(g, b.getBoundingClientRect()),
            v = o3(g, h),
            C = i3(y.getBoundingClientRect()),
            j = s3([...v, ...C]);
          (l(j), f(!0));
        },
        [f],
      );
    return (
      x.useEffect(() => () => d(), [d]),
      x.useEffect(() => {
        if (c && p) {
          const w = (b) => m(b, p),
            y = (b) => m(b, c);
          return (
            c.addEventListener("pointerleave", w),
            p.addEventListener("pointerleave", y),
            () => {
              (c.removeEventListener("pointerleave", w),
                p.removeEventListener("pointerleave", y));
            }
          );
        }
      }, [c, p, m, d]),
      x.useEffect(() => {
        if (s) {
          const w = (y) => {
            const b = y.target,
              g = { x: y.clientX, y: y.clientY },
              h =
                (c == null ? void 0 : c.contains(b)) ||
                (p == null ? void 0 : p.contains(b)),
              v = !a3(g, s);
            h ? d() : v && (d(), u());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [c, p, s, u, d]),
      i.jsx(dg, { ...e, ref: a })
    );
  }),
  [e3, t3] = tl(cg, { isInside: !1 }),
  dg = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        ...l
      } = e,
      c = nl(ko, n),
      u = gd(n),
      { onClose: p } = c;
    return (
      x.useEffect(
        () => (
          document.addEventListener(rp, p),
          () => document.removeEventListener(rp, p)
        ),
        [p],
      ),
      x.useEffect(() => {
        if (c.trigger) {
          const f = (d) => {
            const m = d.target;
            m != null && m.contains(c.trigger) && p();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [c.trigger, p]),
      i.jsx(nd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: i.jsxs(G4, {
          "data-state": c.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            i.jsx(t1, { children: r }),
            i.jsx(e3, {
              scope: n,
              isInside: !0,
              children: i.jsx(o2, {
                id: c.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
ug.displayName = ko;
var fg = "TooltipArrow",
  n3 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = gd(n);
    return t3(fg, n).isInside ? null : i.jsx(q4, { ...o, ...r, ref: t });
  });
n3.displayName = fg;
function r3(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function o3(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function i3(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function a3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const l = t[a].x,
      c = t[a].y,
      u = t[s].x,
      p = t[s].y;
    c > r != p > r && n < ((u - l) * (r - c)) / (p - c) + l && (o = !o);
  }
  return o;
}
function s3(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    l3(t)
  );
}
function l3(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1],
        s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1],
        s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var c3 = lg,
  pg = ug;
const u3 = c3,
  d3 = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    i.jsx(pg, {
      ref: r,
      sideOffset: t,
      className: Ie(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
d3.displayName = pg.displayName;
var rl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ol = typeof window > "u" || "Deno" in globalThis;
function kt() {}
function f3(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function p3(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function h3(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function op(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function m3(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ip(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: a,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== yd(s, t.options)) return !1;
    } else if (!qi(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const c = t.isActive();
    if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function ap(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Gi(t.options.mutationKey) !== Gi(a)) return !1;
    } else if (!qi(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function yd(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Gi)(e);
}
function Gi(e) {
  return JSON.stringify(e, (t, n) =>
    eu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function qi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((n) => !qi(e[n], t[n]))
        : !1;
}
function hg(e, t) {
  if (e === t) return e;
  const n = sp(e) && sp(t);
  if (n || (eu(e) && eu(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      a = n ? t : Object.keys(t),
      s = a.length,
      l = n ? [] : {};
    let c = 0;
    for (let u = 0; u < s; u++) {
      const p = n ? u : a[u];
      ((!n && r.includes(p)) || n) && e[p] === void 0 && t[p] === void 0
        ? ((l[p] = void 0), c++)
        : ((l[p] = hg(e[p], t[p])), l[p] === e[p] && e[p] !== void 0 && c++);
    }
    return o === s && c === o ? e : l;
  }
  return t;
}
function sp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function eu(e) {
  if (!lp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !lp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function lp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function g3(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function y3(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? hg(e, t)
      : t;
}
function x3(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function v3(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var xd = Symbol();
function mg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === xd
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var ar,
  Tn,
  ao,
  Rp,
  w3 =
    ((Rp = class extends rl {
      constructor() {
        super();
        Z(this, ar);
        Z(this, Tn);
        Z(this, ao);
        V(this, ao, (t) => {
          if (!ol && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, Tn) || this.setEventListener(E(this, ao));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, Tn)) == null || t.call(this), V(this, Tn, void 0));
      }
      setEventListener(t) {
        var n;
        (V(this, ao, t),
          (n = E(this, Tn)) == null || n.call(this),
          V(
            this,
            Tn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        E(this, ar) !== t && (V(this, ar, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof E(this, ar) == "boolean"
          ? E(this, ar)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (ar = new WeakMap()),
    (Tn = new WeakMap()),
    (ao = new WeakMap()),
    Rp),
  gg = new w3(),
  so,
  En,
  lo,
  Op,
  b3 =
    ((Op = class extends rl {
      constructor() {
        super();
        Z(this, so, !0);
        Z(this, En);
        Z(this, lo);
        V(this, lo, (t) => {
          if (!ol && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, En) || this.setEventListener(E(this, lo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, En)) == null || t.call(this), V(this, En, void 0));
      }
      setEventListener(t) {
        var n;
        (V(this, lo, t),
          (n = E(this, En)) == null || n.call(this),
          V(this, En, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        E(this, so) !== t &&
          (V(this, so, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return E(this, so);
      }
    }),
    (so = new WeakMap()),
    (En = new WeakMap()),
    (lo = new WeakMap()),
    Op),
  Ns = new b3();
function C3() {
  let e, t;
  const n = new Promise((o, a) => {
    ((e = o), (t = a));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
function j3(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function yg(e) {
  return (e ?? "online") === "online" ? Ns.isOnline() : !0;
}
var xg = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Hl(e) {
  return e instanceof xg;
}
function vg(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const a = C3(),
    s = (y) => {
      var b;
      r || (d(new xg(y)), (b = e.abort) == null || b.call(e));
    },
    l = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    u = () =>
      gg.isFocused() &&
      (e.networkMode === "always" || Ns.isOnline()) &&
      e.canRun(),
    p = () => yg(e.networkMode) && e.canRun(),
    f = (y) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onSuccess) == null || b.call(e, y),
        o == null || o(),
        a.resolve(y));
    },
    d = (y) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onError) == null || b.call(e, y),
        o == null || o(),
        a.reject(y));
    },
    m = () =>
      new Promise((y) => {
        var b;
        ((o = (g) => {
          (r || u()) && y(g);
        }),
          (b = e.onPause) == null || b.call(e));
      }).then(() => {
        var y;
        ((o = void 0), r || (y = e.onContinue) == null || y.call(e));
      }),
    w = () => {
      if (r) return;
      let y;
      const b = n === 0 ? e.initialPromise : void 0;
      try {
        y = b ?? e.fn();
      } catch (g) {
        y = Promise.reject(g);
      }
      Promise.resolve(y)
        .then(f)
        .catch((g) => {
          var S;
          if (r) return;
          const h = e.retry ?? (ol ? 0 : 3),
            v = e.retryDelay ?? j3,
            C = typeof v == "function" ? v(n, g) : v,
            j =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, g));
          if (t || !j) {
            d(g);
            return;
          }
          (n++,
            (S = e.onFail) == null || S.call(e, n, g),
            g3(C)
              .then(() => (u() ? void 0 : m()))
              .then(() => {
                t ? d(g) : w();
              }));
        });
    };
  return {
    promise: a,
    cancel: s,
    continue: () => (o == null || o(), a),
    cancelRetry: l,
    continueRetry: c,
    canStart: p,
    start: () => (p() ? w() : m().then(w), a),
  };
}
function k3() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const a = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      ((e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((c) => {
                n(c);
              });
            });
          }));
    };
  return {
    batch: (l) => {
      let c;
      t++;
      try {
        c = l();
      } finally {
        (t--, t || s());
      }
      return c;
    },
    batchCalls:
      (l) =>
      (...c) => {
        a(() => {
          l(...c);
        });
      },
    schedule: a,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var He = k3(),
  sr,
  Bp,
  wg =
    ((Bp = class {
      constructor() {
        Z(this, sr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          p3(this.gcTime) &&
            V(
              this,
              sr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (ol ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        E(this, sr) && (clearTimeout(E(this, sr)), V(this, sr, void 0));
      }
    }),
    (sr = new WeakMap()),
    Bp),
  co,
  uo,
  pt,
  Me,
  Xi,
  lr,
  St,
  Xt,
  Dp,
  S3 =
    ((Dp = class extends wg {
      constructor(t) {
        super();
        Z(this, St);
        Z(this, co);
        Z(this, uo);
        Z(this, pt);
        Z(this, Me);
        Z(this, Xi);
        Z(this, lr);
        (V(this, lr, !1),
          V(this, Xi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          V(this, pt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          V(this, co, E3(this.options)),
          (this.state = t.state ?? E(this, co)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = E(this, Me)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...E(this, Xi), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          E(this, pt).remove(this);
      }
      setData(t, n) {
        const r = y3(this.state.data, t, this.options);
        return (
          Oe(this, St, Xt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Oe(this, St, Xt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = E(this, Me)) == null ? void 0 : r.promise;
        return (
          (o = E(this, Me)) == null || o.cancel(t),
          n ? n.then(kt).catch(kt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(E(this, co)));
      }
      isActive() {
        return this.observers.some((t) => m3(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === xd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !h3(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, Me)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, Me)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          E(this, pt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (E(this, Me) &&
              (E(this, lr)
                ? E(this, Me).cancel({ revert: !0 })
                : E(this, Me).cancelRetry()),
            this.scheduleGc()),
          E(this, pt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Oe(this, St, Xt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, u, p;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (E(this, Me))
            return (E(this, Me).continueRetry(), E(this, Me).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((d) => d.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (V(this, lr, !0), r.signal),
            });
          },
          a = () => {
            const f = mg(this.options, n),
              d = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(d),
              V(this, lr, !1),
              this.options.persister ? this.options.persister(f, d, this) : f(d)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: a,
          };
        (o(s),
          (c = this.options.behavior) == null || c.onFetch(s, this),
          V(this, uo, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            Oe(this, St, Xt).call(this, {
              type: "fetch",
              meta: (p = s.fetchOptions) == null ? void 0 : p.meta,
            }));
        const l = (f) => {
          var d, m, w, y;
          ((Hl(f) && f.silent) ||
            Oe(this, St, Xt).call(this, { type: "error", error: f }),
            Hl(f) ||
              ((m = (d = E(this, pt).config).onError) == null ||
                m.call(d, f, this),
              (y = (w = E(this, pt).config).onSettled) == null ||
                y.call(w, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          V(
            this,
            Me,
            vg({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var d, m, w, y;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (b) {
                  l(b);
                  return;
                }
                ((m = (d = E(this, pt).config).onSuccess) == null ||
                  m.call(d, f, this),
                  (y = (w = E(this, pt).config).onSettled) == null ||
                    y.call(w, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (f, d) => {
                Oe(this, St, Xt).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: d,
                });
              },
              onPause: () => {
                Oe(this, St, Xt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Oe(this, St, Xt).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            }),
          ),
          E(this, Me).start()
        );
      }
    }),
    (co = new WeakMap()),
    (uo = new WeakMap()),
    (pt = new WeakMap()),
    (Me = new WeakMap()),
    (Xi = new WeakMap()),
    (lr = new WeakMap()),
    (St = new WeakSet()),
    (Xt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...T3(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Hl(o) && o.revert && E(this, uo)
              ? { ...E(this, uo), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        He.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            E(this, pt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    Dp);
function T3(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: yg(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function E3(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var It,
  Mp,
  N3 =
    ((Mp = class extends rl {
      constructor(t = {}) {
        super();
        Z(this, It);
        ((this.config = t), V(this, It, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          a = n.queryHash ?? yd(o, n);
        let s = this.get(a);
        return (
          s ||
            ((s = new S3({
              cache: this,
              queryKey: o,
              queryHash: a,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        E(this, It).has(t.queryHash) ||
          (E(this, It).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = E(this, It).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && E(this, It).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return E(this, It).get(t);
      }
      getAll() {
        return [...E(this, It).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => ip(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => ip(t, r)) : n;
      }
      notify(t) {
        He.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (It = new WeakMap()),
    Mp),
  Wt,
  We,
  cr,
  $t,
  bn,
  _p,
  F3 =
    ((_p = class extends wg {
      constructor(t) {
        super();
        Z(this, $t);
        Z(this, Wt);
        Z(this, We);
        Z(this, cr);
        ((this.mutationId = t.mutationId),
          V(this, We, t.mutationCache),
          V(this, Wt, []),
          (this.state = t.state || P3()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        E(this, Wt).includes(t) ||
          (E(this, Wt).push(t),
          this.clearGcTimeout(),
          E(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (V(
          this,
          Wt,
          E(this, Wt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          E(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        E(this, Wt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : E(this, We).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = E(this, cr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, a, s, l, c, u, p, f, d, m, w, y, b, g, h, v, C, j, S, T;
        V(
          this,
          cr,
          vg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, M) => {
              Oe(this, $t, bn).call(this, {
                type: "failed",
                failureCount: N,
                error: M,
              });
            },
            onPause: () => {
              Oe(this, $t, bn).call(this, { type: "pause" });
            },
            onContinue: () => {
              Oe(this, $t, bn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, We).canRun(this),
          }),
        );
        const n = this.state.status === "pending",
          r = !E(this, cr).canStart();
        try {
          if (!n) {
            (Oe(this, $t, bn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((a = (o = E(this, We).config).onMutate) == null
                ? void 0
                : a.call(o, t, this)));
            const M = await ((l = (s = this.options).onMutate) == null
              ? void 0
              : l.call(s, t));
            M !== this.state.context &&
              Oe(this, $t, bn).call(this, {
                type: "pending",
                context: M,
                variables: t,
                isPaused: r,
              });
          }
          const N = await E(this, cr).start();
          return (
            await ((u = (c = E(this, We).config).onSuccess) == null
              ? void 0
              : u.call(c, N, t, this.state.context, this)),
            await ((f = (p = this.options).onSuccess) == null
              ? void 0
              : f.call(p, N, t, this.state.context)),
            await ((m = (d = E(this, We).config).onSettled) == null
              ? void 0
              : m.call(
                  d,
                  N,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((y = (w = this.options).onSettled) == null
              ? void 0
              : y.call(w, N, null, t, this.state.context)),
            Oe(this, $t, bn).call(this, { type: "success", data: N }),
            N
          );
        } catch (N) {
          try {
            throw (
              await ((g = (b = E(this, We).config).onError) == null
                ? void 0
                : g.call(b, N, t, this.state.context, this)),
              await ((v = (h = this.options).onError) == null
                ? void 0
                : v.call(h, N, t, this.state.context)),
              await ((j = (C = E(this, We).config).onSettled) == null
                ? void 0
                : j.call(
                    C,
                    void 0,
                    N,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((T = (S = this.options).onSettled) == null
                ? void 0
                : T.call(S, void 0, N, t, this.state.context)),
              N
            );
          } finally {
            Oe(this, $t, bn).call(this, { type: "error", error: N });
          }
        } finally {
          E(this, We).runNext(this);
        }
      }
    }),
    (Wt = new WeakMap()),
    (We = new WeakMap()),
    (cr = new WeakMap()),
    ($t = new WeakSet()),
    (bn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        He.batch(() => {
          (E(this, Wt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            E(this, We).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    _p);
function P3() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var nt,
  Ji,
  zp,
  A3 =
    ((zp = class extends rl {
      constructor(t = {}) {
        super();
        Z(this, nt);
        Z(this, Ji);
        ((this.config = t), V(this, nt, new Map()), V(this, Ji, Date.now()));
      }
      build(t, n, r) {
        const o = new F3({
          mutationCache: this,
          mutationId: ++da(this, Ji)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        const n = Oa(t),
          r = E(this, nt).get(n) ?? [];
        (r.push(t),
          E(this, nt).set(n, r),
          this.notify({ type: "added", mutation: t }));
      }
      remove(t) {
        var r;
        const n = Oa(t);
        if (E(this, nt).has(n)) {
          const o =
            (r = E(this, nt).get(n)) == null
              ? void 0
              : r.filter((a) => a !== t);
          o && (o.length === 0 ? E(this, nt).delete(n) : E(this, nt).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = E(this, nt).get(Oa(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = E(this, nt).get(Oa(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...E(this, nt).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => ap(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => ap(t, n));
      }
      notify(t) {
        He.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return He.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(kt))),
        );
      }
    }),
    (nt = new WeakMap()),
    (Ji = new WeakMap()),
    zp);
function Oa(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function cp(e) {
  return {
    onFetch: (t, n) => {
      var p, f, d, m, w;
      const r = t.options,
        o =
          (d =
            (f = (p = t.fetchOptions) == null ? void 0 : p.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : d.direction,
        a = ((m = t.state.data) == null ? void 0 : m.pages) || [],
        s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        c = 0;
      const u = async () => {
        let y = !1;
        const b = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          g = mg(t.options, t.fetchOptions),
          h = async (v, C, j) => {
            if (y) return Promise.reject();
            if (C == null && v.pages.length) return Promise.resolve(v);
            const S = {
              queryKey: t.queryKey,
              pageParam: C,
              direction: j ? "backward" : "forward",
              meta: t.options.meta,
            };
            b(S);
            const T = await g(S),
              { maxPages: N } = t.options,
              M = j ? v3 : x3;
            return {
              pages: M(v.pages, T, N),
              pageParams: M(v.pageParams, C, N),
            };
          };
        if (o && a.length) {
          const v = o === "backward",
            C = v ? R3 : up,
            j = { pages: a, pageParams: s },
            S = C(r, j);
          l = await h(j, S, v);
        } else {
          const v = e ?? a.length;
          do {
            const C = c === 0 ? (s[0] ?? r.initialPageParam) : up(r, l);
            if (c > 0 && C == null) break;
            ((l = await h(l, C)), c++);
          } while (c < v);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, b;
            return (b = (y = t.options).persister) == null
              ? void 0
              : b.call(
                  y,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function up(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function R3(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var me,
  Nn,
  Fn,
  fo,
  po,
  Pn,
  ho,
  mo,
  Lp,
  O3 =
    ((Lp = class {
      constructor(e = {}) {
        Z(this, me);
        Z(this, Nn);
        Z(this, Fn);
        Z(this, fo);
        Z(this, po);
        Z(this, Pn);
        Z(this, ho);
        Z(this, mo);
        (V(this, me, e.queryCache || new N3()),
          V(this, Nn, e.mutationCache || new A3()),
          V(this, Fn, e.defaultOptions || {}),
          V(this, fo, new Map()),
          V(this, po, new Map()),
          V(this, Pn, 0));
      }
      mount() {
        (da(this, Pn)._++,
          E(this, Pn) === 1 &&
            (V(
              this,
              ho,
              gg.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, me).onFocus());
              }),
            ),
            V(
              this,
              mo,
              Ns.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, me).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (da(this, Pn)._--,
          E(this, Pn) === 0 &&
            ((e = E(this, ho)) == null || e.call(this),
            V(this, ho, void 0),
            (t = E(this, mo)) == null || t.call(this),
            V(this, mo, void 0)));
      }
      isFetching(e) {
        return E(this, me).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return E(this, Nn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, me).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = E(this, me).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(op(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return E(this, me)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = E(this, me).get(r.queryHash),
          a = o == null ? void 0 : o.state.data,
          s = f3(t, a);
        if (s !== void 0)
          return E(this, me)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return He.batch(() =>
          E(this, me)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, me).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = E(this, me);
        He.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = E(this, me),
          r = { type: "active", ...e };
        return He.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          ),
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = He.batch(() =>
            E(this, me)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(kt).catch(kt);
      }
      invalidateQueries(e = {}, t = {}) {
        return He.batch(() => {
          if (
            (E(this, me)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = He.batch(() =>
            E(this, me)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let a = o.fetch(void 0, n);
                return (
                  n.throwOnError || (a = a.catch(kt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : a
                );
              }),
          );
        return Promise.all(r).then(kt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = E(this, me).build(this, t);
        return n.isStaleByTime(op(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(kt).catch(kt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = cp(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(kt).catch(kt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = cp(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Ns.isOnline()
          ? E(this, Nn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return E(this, me);
      }
      getMutationCache() {
        return E(this, Nn);
      }
      getDefaultOptions() {
        return E(this, Fn);
      }
      setDefaultOptions(e) {
        V(this, Fn, e);
      }
      setQueryDefaults(e, t) {
        E(this, fo).set(Gi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...E(this, fo).values()];
        let n = {};
        return (
          t.forEach((r) => {
            qi(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        E(this, po).set(Gi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...E(this, po).values()];
        let n = {};
        return (
          t.forEach((r) => {
            qi(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...E(this, Fn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = yd(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === xd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...E(this, Fn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (E(this, me).clear(), E(this, Nn).clear());
      }
    }),
    (me = new WeakMap()),
    (Nn = new WeakMap()),
    (Fn = new WeakMap()),
    (fo = new WeakMap()),
    (po = new WeakMap()),
    (Pn = new WeakMap()),
    (ho = new WeakMap()),
    (mo = new WeakMap()),
    Lp),
  B3 = x.createContext(void 0),
  D3 = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    i.jsx(B3.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yi.apply(this, arguments)
  );
}
var On;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(On || (On = {}));
const dp = "popstate";
function M3(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: a, search: s, hash: l } = r.location;
    return tu(
      "",
      { pathname: a, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Fs(o);
  }
  return z3(t, n, null, e);
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function bg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _3() {
  return Math.random().toString(36).substr(2, 8);
}
function fp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function tu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Yi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Oo(t) : t,
      { state: n, key: (t && t.key) || r || _3() },
    )
  );
}
function Fs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Oo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function z3(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: a = !1 } = r,
    s = o.history,
    l = On.Pop,
    c = null,
    u = p();
  u == null && ((u = 0), s.replaceState(Yi({}, s.state, { idx: u }), ""));
  function p() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = On.Pop;
    let b = p(),
      g = b == null ? null : b - u;
    ((u = b), c && c({ action: l, location: y.location, delta: g }));
  }
  function d(b, g) {
    l = On.Push;
    let h = tu(y.location, b, g);
    u = p() + 1;
    let v = fp(h, u),
      C = y.createHref(h);
    try {
      s.pushState(v, "", C);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      o.location.assign(C);
    }
    a && c && c({ action: l, location: y.location, delta: 1 });
  }
  function m(b, g) {
    l = On.Replace;
    let h = tu(y.location, b, g);
    u = p();
    let v = fp(h, u),
      C = y.createHref(h);
    (s.replaceState(v, "", C),
      a && c && c({ action: l, location: y.location, delta: 0 }));
  }
  function w(b) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof b == "string" ? b : Fs(b);
    return (
      (h = h.replace(/ $/, "%20")),
      we(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, g)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(b) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(dp, f),
        (c = b),
        () => {
          (o.removeEventListener(dp, f), (c = null));
        }
      );
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: w,
    encodeLocation(b) {
      let g = w(b);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: d,
    replace: m,
    go(b) {
      return s.go(b);
    },
  };
  return y;
}
var pp;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(pp || (pp = {}));
function L3(e, t, n) {
  return (n === void 0 && (n = "/"), I3(e, t, n, !1));
}
function I3(e, t, n, r) {
  let o = typeof t == "string" ? Oo(t) : t,
    a = vd(o.pathname || "/", n);
  if (a == null) return null;
  let s = Cg(e);
  W3(s);
  let l = null;
  for (let c = 0; l == null && c < s.length; ++c) {
    let u = J3(a);
    l = Q3(s[c], u, r);
  }
  return l;
}
function Cg(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (a, s, l) => {
    let c = {
      relativePath: l === void 0 ? a.path || "" : l,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: s,
      route: a,
    };
    c.relativePath.startsWith("/") &&
      (we(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = Hn([r, c.relativePath]),
      p = n.concat(c);
    (a.children &&
      a.children.length > 0 &&
      (we(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Cg(a.children, t, p, u)),
      !(a.path == null && !a.index) &&
        t.push({ path: u, score: Y3(u, a.index), routesMeta: p }));
  };
  return (
    e.forEach((a, s) => {
      var l;
      if (a.path === "" || !((l = a.path) != null && l.includes("?"))) o(a, s);
      else for (let c of jg(a.path)) o(a, s, c);
    }),
    t
  );
}
function jg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [a, ""] : [a];
  let s = jg(r.join("/")),
    l = [];
  return (
    l.push(...s.map((c) => (c === "" ? a : [a, c].join("/")))),
    o && l.push(...s),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function W3(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : K3(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const $3 = /^:[\w-]+$/,
  H3 = 3,
  U3 = 2,
  V3 = 1,
  G3 = 10,
  q3 = -2,
  hp = (e) => e === "*";
function Y3(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(hp) && (r += q3),
    t && (r += U3),
    n
      .filter((o) => !hp(o))
      .reduce((o, a) => o + ($3.test(a) ? H3 : a === "" ? V3 : G3), r)
  );
}
function K3(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Q3(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    a = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      u = l === r.length - 1,
      p = a === "/" ? t : t.slice(a.length) || "/",
      f = mp(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        p,
      ),
      d = c.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = mp(
          { path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 },
          p,
        )),
      !f)
    )
      return null;
    (Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Hn([a, f.pathname]),
        pathnameBase: nw(Hn([a, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (a = Hn([a, f.pathnameBase])));
  }
  return s;
}
function mp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = X3(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let a = o[0],
    s = a.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, p, f) => {
      let { paramName: d, isOptional: m } = p;
      if (d === "*") {
        let y = l[f] || "";
        s = a.slice(0, a.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const w = l[f];
      return (
        m && !w ? (u[d] = void 0) : (u[d] = (w || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: a,
    pathnameBase: s,
    pattern: e,
  };
}
function X3(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    bg(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, c) => (
            r.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function J3(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      bg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function vd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Z3(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Oo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ew(n, t)) : t,
    search: rw(r),
    hash: ow(o),
  };
}
function ew(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ul(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function tw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function kg(e, t) {
  let n = tw(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Sg(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Oo(e))
    : ((o = Yi({}, e)),
      we(
        !o.pathname || !o.pathname.includes("?"),
        Ul("?", "pathname", "search", o),
      ),
      we(
        !o.pathname || !o.pathname.includes("#"),
        Ul("#", "pathname", "hash", o),
      ),
      we(!o.search || !o.search.includes("#"), Ul("#", "search", "hash", o)));
  let a = e === "" || o.pathname === "",
    s = a ? "/" : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) (d.shift(), (f -= 1));
      o.pathname = d.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = Z3(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    p = (a || s === ".") && n.endsWith("/");
  return (!c.pathname.endsWith("/") && (u || p) && (c.pathname += "/"), c);
}
const Hn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  nw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  rw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ow = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function iw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Tg = ["post", "put", "patch", "delete"];
new Set(Tg);
const aw = ["get", ...Tg];
new Set(aw);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ki() {
  return (
    (Ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ki.apply(this, arguments)
  );
}
const wd = x.createContext(null),
  sw = x.createContext(null),
  Cr = x.createContext(null),
  il = x.createContext(null),
  Zn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Eg = x.createContext(null);
function lw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  aa() || we(!1);
  let { basename: r, navigator: o } = x.useContext(Cr),
    { hash: a, pathname: s, search: l } = Pg(e, { relative: n }),
    c = s;
  return (
    r !== "/" && (c = s === "/" ? r : Hn([r, s])),
    o.createHref({ pathname: c, search: l, hash: a })
  );
}
function aa() {
  return x.useContext(il) != null;
}
function jr() {
  return (aa() || we(!1), x.useContext(il).location);
}
function Ng(e) {
  x.useContext(Cr).static || x.useLayoutEffect(e);
}
function Fg() {
  let { isDataRoute: e } = x.useContext(Zn);
  return e ? Cw() : cw();
}
function cw() {
  aa() || we(!1);
  let e = x.useContext(wd),
    { basename: t, future: n, navigator: r } = x.useContext(Cr),
    { matches: o } = x.useContext(Zn),
    { pathname: a } = jr(),
    s = JSON.stringify(kg(o, n.v7_relativeSplatPath)),
    l = x.useRef(!1);
  return (
    Ng(() => {
      l.current = !0;
    }),
    x.useCallback(
      function (u, p) {
        if ((p === void 0 && (p = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Sg(u, JSON.parse(s), a, p.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Hn([t, f.pathname])),
          (p.replace ? r.replace : r.push)(f, p.state, p));
      },
      [t, r, s, a, e],
    )
  );
}
function uw() {
  let { matches: e } = x.useContext(Zn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Pg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(Cr),
    { matches: o } = x.useContext(Zn),
    { pathname: a } = jr(),
    s = JSON.stringify(kg(o, r.v7_relativeSplatPath));
  return x.useMemo(() => Sg(e, JSON.parse(s), a, n === "path"), [e, s, a, n]);
}
function dw(e, t) {
  return fw(e, t);
}
function fw(e, t, n, r) {
  aa() || we(!1);
  let { navigator: o } = x.useContext(Cr),
    { matches: a } = x.useContext(Zn),
    s = a[a.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let c = s ? s.pathnameBase : "/";
  s && s.route;
  let u = jr(),
    p;
  if (t) {
    var f;
    let b = typeof t == "string" ? Oo(t) : t;
    (c === "/" || ((f = b.pathname) != null && f.startsWith(c)) || we(!1),
      (p = b));
  } else p = u;
  let d = p.pathname || "/",
    m = d;
  if (c !== "/") {
    let b = c.replace(/^\//, "").split("/");
    m = "/" + d.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let w = L3(e, { pathname: m }),
    y = yw(
      w &&
        w.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, l, b.params),
            pathname: Hn([
              c,
              o.encodeLocation
                ? o.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? c
                : Hn([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          }),
        ),
      a,
      n,
      r,
    );
  return t && y
    ? x.createElement(
        il.Provider,
        {
          value: {
            location: Ki(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              p,
            ),
            navigationType: On.Pop,
          },
        },
        y,
      )
    : y;
}
function pw() {
  let e = bw(),
    t = iw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const hw = x.createElement(pw, null);
class mw extends x.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          Zn.Provider,
          { value: this.props.routeContext },
          x.createElement(Eg.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function gw(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(wd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Zn.Provider, { value: t }, r)
  );
}
function yw(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var a;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (a = r) != null &&
      a.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let p = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0,
    );
    (p >= 0 || we(!1), (s = s.slice(0, Math.min(s.length, p + 1))));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < s.length; p++) {
      let f = s[p];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = p),
        f.route.id)
      ) {
        let { loaderData: d, errors: m } = n,
          w =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!m || m[f.route.id] === void 0);
        if (f.route.lazy || w) {
          ((c = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((p, f, d) => {
    let m,
      w = !1,
      y = null,
      b = null;
    n &&
      ((m = l && f.route.id ? l[f.route.id] : void 0),
      (y = f.route.errorElement || hw),
      c &&
        (u < 0 && d === 0
          ? ((w = !0), (b = null))
          : u === d &&
            ((w = !0), (b = f.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, d + 1)),
      h = () => {
        let v;
        return (
          m
            ? (v = y)
            : w
              ? (v = b)
              : f.route.Component
                ? (v = x.createElement(f.route.Component, null))
                : f.route.element
                  ? (v = f.route.element)
                  : (v = p),
          x.createElement(gw, {
            match: f,
            routeContext: { outlet: p, matches: g, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? x.createElement(mw, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: m,
          children: h(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Ag = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Ag || {}),
  Ps = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ps || {});
function xw(e) {
  let t = x.useContext(wd);
  return (t || we(!1), t);
}
function vw(e) {
  let t = x.useContext(sw);
  return (t || we(!1), t);
}
function ww(e) {
  let t = x.useContext(Zn);
  return (t || we(!1), t);
}
function Rg(e) {
  let t = ww(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || we(!1), n.route.id);
}
function bw() {
  var e;
  let t = x.useContext(Eg),
    n = vw(Ps.UseRouteError),
    r = Rg(Ps.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Cw() {
  let { router: e } = xw(Ag.UseNavigateStable),
    t = Rg(Ps.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Ng(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (o, a) {
        (a === void 0 && (a = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Ki({ fromRouteId: t }, a))));
      },
      [e, t],
    )
  );
}
function Ne(e) {
  we(!1);
}
function jw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = On.Pop,
    navigator: a,
    static: s = !1,
    future: l,
  } = e;
  aa() && we(!1);
  let c = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: c,
        navigator: a,
        static: s,
        future: Ki({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, a, s],
    );
  typeof r == "string" && (r = Oo(r));
  let {
      pathname: p = "/",
      search: f = "",
      hash: d = "",
      state: m = null,
      key: w = "default",
    } = r,
    y = x.useMemo(() => {
      let b = vd(p, c);
      return b == null
        ? null
        : {
            location: { pathname: b, search: f, hash: d, state: m, key: w },
            navigationType: o,
          };
    }, [c, p, f, d, m, w, o]);
  return y == null
    ? null
    : x.createElement(
        Cr.Provider,
        { value: u },
        x.createElement(il.Provider, { children: n, value: y }),
      );
}
function kw(e) {
  let { children: t, location: n } = e;
  return dw(nu(t), n);
}
new Promise(() => {});
function nu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let a = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, nu(r.props.children, a));
        return;
      }
      (r.type !== Ne && we(!1), !r.props.index || !r.props.children || we(!1));
      let s = {
        id: r.props.id || a.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = nu(r.props.children, a)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ru() {
  return (
    (ru = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ru.apply(this, arguments)
  );
}
function Sw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++)
    ((o = r[a]), !(t.indexOf(o) >= 0) && (n[o] = e[o]));
  return n;
}
function Tw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ew(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Tw(e);
}
const Nw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Fw = "6";
try {
  window.__reactRouterVersion = Fw;
} catch {}
const Pw = "startTransition",
  gp = g0[Pw];
function Aw(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    a = x.useRef();
  a.current == null && (a.current = M3({ window: o, v5Compat: !0 }));
  let s = a.current,
    [l, c] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    p = x.useCallback(
      (f) => {
        u && gp ? gp(() => c(f)) : c(f);
      },
      [c, u],
    );
  return (
    x.useLayoutEffect(() => s.listen(p), [s, p]),
    x.createElement(jw, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const Rw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ow = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  X = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: a,
        replace: s,
        state: l,
        target: c,
        to: u,
        preventScrollReset: p,
        viewTransition: f,
      } = t,
      d = Sw(t, Nw),
      { basename: m } = x.useContext(Cr),
      w,
      y = !1;
    if (typeof u == "string" && Ow.test(u) && ((w = u), Rw))
      try {
        let v = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          j = vd(C.pathname, m);
        C.origin === v.origin && j != null
          ? (u = j + C.search + C.hash)
          : (y = !0);
      } catch {}
    let b = lw(u, { relative: o }),
      g = Bw(u, {
        replace: s,
        state: l,
        target: c,
        preventScrollReset: p,
        relative: o,
        viewTransition: f,
      });
    function h(v) {
      (r && r(v), v.defaultPrevented || g(v));
    }
    return x.createElement(
      "a",
      ru({}, d, { href: w || b, onClick: y || a ? r : h, ref: n, target: c }),
    );
  });
var yp;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(yp || (yp = {}));
var xp;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(xp || (xp = {}));
function Bw(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: a,
      relative: s,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    c = Fg(),
    u = jr(),
    p = Pg(e, { relative: s });
  return x.useCallback(
    (f) => {
      if (Ew(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : Fs(u) === Fs(p);
        c(e, {
          replace: d,
          state: o,
          preventScrollReset: a,
          relative: s,
          viewTransition: l,
        });
      }
    },
    [u, c, p, r, o, n, e, a, s, l],
  );
}
const Dw = (e) => {
    const t = jr();
    x.useEffect(() => {
      typeof window < "u" &&
        window.gtag &&
        e &&
        (window.gtag("config", e, { page_path: t.pathname + t.search }),
        console.log("Analytics: Page view tracked for", t.pathname));
    }, [t, e]);
  },
  Mw = ({ trackingId: e }) => (
    Dw(e),
    x.useEffect(() => {
      const t = document.createElement("script");
      ((t.async = !0),
        (t.src = `https://www.googletagmanager.com/gtag/js?id=${e}`),
        document.head.appendChild(t));
      const n = document.createElement("script");
      return (
        (n.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${e}');
    `),
        document.head.appendChild(n),
        (window.gtag =
          window.gtag ||
          function () {
            ((window.dataLayer = window.dataLayer || []),
              window.dataLayer.push(arguments));
          }),
        console.log("Analytics initialized with tracking ID:", e),
        () => {
          (document.head.removeChild(t), document.head.removeChild(n));
        }
      );
    }, [e]),
    null
  ),
  _w = () => {
    const { pathname: e } = jr(),
      t = x.useRef(e);
    return (
      x.useEffect(() => {
        t.current !== e &&
          ((t.current = e),
          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }));
      }, [e]),
      null
    );
  },
  zw = F1(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "text-primary-foreground",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  So = x.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
      const s = r ? Hi : "button";
      return i.jsx(s, {
        className: Ie(zw({ variant: t, size: n, className: e })),
        ref: a,
        ...o,
      });
    },
  );
So.displayName = "Button";
const Ze = () => {
    const [e, t] = x.useState(!1);
    return i.jsx("header", {
      children: i.jsxs("nav", {
        className:
          "flex flex-row justify-between items-center px-6 md:px-12 lg:px-24 py-6 relative",
        role: "navigation",
        "aria-label": "Main navigation",
        children: [
          i.jsx(X, {
            to: "/",
            "aria-label": "Tumlet Homepage",
            children: i.jsx("img", {
              className: "w-[120px] md:w-[200px]",
              src: "/tumlet-logo.png",
              alt: "Tumlet - Nepali Board Games Company",
            }),
          }),
          i.jsxs("div", {
            className: "hidden md:flex gap-6 items-center",
            children: [
              i.jsxs("div", {
                className: "relative group",
                children: [
                  i.jsxs("button", {
                    className:
                      "flex items-center gap-1 font-medium text-gray-800 hover:text-black cursor-pointer",
                    children: ["Our online games ", i.jsx(Uf, { size: 16 })],
                  }),
                  i.jsxs("div", {
                    className:
                      "absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 min-w-[160px]",
                    children: [
                      i.jsx(X, {
                        to: "/bichitra/",
                        className: "block px-4 py-2 hover:bg-gray-100",
                        children: "Bichitra",
                      }),
                      i.jsx(X, {
                        to: "/farak/",
                        className: "block px-4 py-2 hover:bg-gray-100",
                        children: "Farak",
                      }),
                      i.jsx(X, {
                        to: "/ganthan/",
                        className: "block px-4 py-2 hover:bg-gray-100",
                        children: "Ganthan",
                      }),
                      i.jsx(X, {
                        to: "/thug/",
                        className: "block px-4 py-2 hover:bg-gray-100",
                        children: "Thug",
                      }),
                      i.jsx(X, {
                        to: "/wavelength/",
                        className: "block px-4 py-2 hover:bg-gray-100",
                        children: "Wavelength",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "relative group",
                children: [
                  i.jsxs("button", {
                    className:
                      "flex items-center gap-1 font-medium text-gray-800 hover:text-black cursor-pointer",
                    children: ["Our vibe ", i.jsx(Uf, { size: 16 })],
                  }),
                  i.jsxs("div", {
                    className:
                      "absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 min-w-[160px]",
                    children: [
                      i.jsx(X, {
                        to: "/about/",
                        className: "block px-4 py-2 hover:bg-gray-100",
                        children: "About us",
                      }),
                      i.jsx(X, {
                        to: "/game-night/",
                        className: "block px-4 py-2 hover:bg-gray-100",
                        children: "Game nights",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx("a", {
                href: "https://www.instagram.com/tumlet.boardgames/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex flex-row justify-center gap-4 items-center",
                children: i.jsxs(So, {
                  className: "nav-button",
                  children: [
                    i.jsxs("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        i.jsx("path", {
                          d: "M10.4243 8.70936C10.6613 8.58259 10.8197 8.46395 10.8197 8.46395C10.9276 8.39518 11.0356 8.36819 11.2442 8.28709C11.3942 8.17048 11.6265 8.22422 11.8022 8.19819C11.9829 8.17142 12.2166 8.17571 12.3964 8.19819C12.5948 8.22299 12.7932 8.21 12.9918 8.23562C13.3165 8.27752 13.6403 8.3031 13.9673 8.31867C14.0538 8.32279 14.166 8.29775 14.2492 8.32452C14.3208 8.34754 14.3843 8.39449 14.4551 8.42044C14.6101 8.47721 14.7388 8.50814 14.8645 8.62514C14.9678 8.7213 15.049 8.83592 15.1289 8.95149C15.284 9.176 15.4112 9.39706 15.5184 9.64864C15.6303 9.9115 15.8143 10.1831 15.8459 10.4674C15.8569 10.5665 15.893 10.6627 15.9032 10.7622C15.9167 10.894 15.9079 11.0299 15.9079 11.1623C15.9079 11.7724 15.6344 12.3444 15.3909 12.8899C15.2744 13.1509 15.1164 13.3772 14.9511 13.6093C14.8886 13.6969 14.8524 13.7959 14.7908 13.8807C14.6144 14.1233 14.437 14.3698 14.2656 14.6153C13.9985 14.9979 13.6895 15.4059 13.2655 15.6247C13.0785 15.7212 12.8995 15.7101 12.6959 15.7101C12.4703 15.7101 12.257 15.7076 12.0338 15.668C11.499 15.5731 10.9812 15.3751 10.4664 15.2153C10.2926 15.1614 10.097 15.0904 9.94936 14.9837C9.69902 14.8029 9.43677 14.6393 9.1867 14.4585C8.91359 14.2611 8.59202 14.0648 8.45446 13.7427C8.31278 13.4108 8.11255 13.0917 8.09769 12.7203C8.08541 12.4133 8.09973 12.1324 8.17022 11.8348C8.25903 11.4599 8.42962 11.0966 8.47083 10.7107C8.48853 10.545 8.53953 10.5298 8.65565 10.4136C8.80461 10.2647 8.93358 10.1139 9.06271 9.94809C9.19784 9.77457 9.35474 9.61606 9.50603 9.45681C9.60439 9.35328 9.68276 9.2356 9.79028 9.14098C9.98389 8.97061 10.1954 8.83178 10.4243 8.70936Z",
                          stroke: "white",
                          "stroke-width": "0.6",
                          "stroke-linecap": "round",
                        }),
                        i.jsx("path", {
                          d: "M11.1593 7.76354C11.281 7.68277 11.3748 7.59499 11.5102 7.53895C11.5889 7.51085 11.6293 7.48047 11.7149 7.48047C11.9541 7.48047 12.1821 7.53221 12.4214 7.5448C12.6879 7.55883 12.9522 7.65585 13.2133 7.70272C13.597 7.77158 13.8977 8.03893 14.2052 8.2595C14.4142 8.4094 14.6129 8.47971 14.7842 8.67709C14.9558 8.87474 15.1292 9.06179 15.279 9.27482C15.4071 9.45698 15.461 9.68381 15.527 9.89243C15.6269 10.208 15.7517 10.5324 15.927 10.8142L15.9313 10.8211C15.9882 10.9124 16.0133 10.9526 15.9996 11.0621C15.9869 11.1637 15.9785 11.2615 15.9785 11.3639C15.9785 11.9823 15.7598 12.5616 15.6206 13.1571C15.5572 13.4282 15.4778 13.7058 15.4404 13.9818C15.4272 14.0795 15.4575 14.2036 15.4089 14.2929C15.2621 14.562 15.0743 14.8337 14.8883 15.0766C14.5954 15.4593 14.2368 15.7227 13.8683 16.0288C13.7161 16.1553 13.5289 16.2558 13.356 16.3504C13.1419 16.4677 12.9003 16.6548 12.6612 16.7189C12.4527 16.7748 12.1659 16.7196 11.9558 16.692C11.7317 16.6625 11.5148 16.6183 11.2879 16.6183C11.0688 16.6183 10.9137 16.5966 10.723 16.4803C10.5053 16.3476 10.2743 16.2402 10.0644 16.0943C9.92759 15.9991 9.72184 15.8888 9.62928 15.7434C9.49002 15.5245 9.27108 15.3704 9.1146 15.1655C8.93992 14.9368 8.78019 14.6826 8.67128 14.4157C8.57114 14.1704 8.4567 13.9285 8.37768 13.6753C8.31902 13.4874 8.32468 13.2797 8.26772 13.0975C8.17811 12.8107 7.96091 12.5647 7.85598 12.281C7.75822 12.0167 7.83025 11.724 7.83025 11.4517C7.83025 11.1724 7.94037 10.9092 8.07121 10.6644C8.23802 10.3524 8.41543 9.99695 8.65373 9.73218C8.87466 9.4867 9.04761 9.17938 9.31345 8.97771C9.46386 8.86361 9.62455 8.78429 9.78368 8.68528C10.0144 8.5417 10.2476 8.3902 10.4645 8.22558C10.6864 8.05706 10.9272 7.91753 11.1593 7.76354Z",
                          stroke: "white",
                          "stroke-width": "0.6",
                          "stroke-linecap": "round",
                        }),
                        i.jsx("path", {
                          d: "M16.9493 6.77937C16.7485 6.77937 16.5331 6.75036 16.3896 6.91172C16.2976 7.01524 16.2045 7.10812 16.1225 7.22054C16.0297 7.34763 16.01 7.54773 16.0081 7.70256C16.0043 8.00891 16.0344 8.28274 16.3529 8.40353C16.5551 8.48024 16.8648 8.49515 17.0669 8.39699C17.2642 8.30114 17.3497 8.04228 17.397 7.84635C17.4483 7.63345 17.4164 7.43782 17.3463 7.23525C17.2984 7.09683 17.1673 7.01631 17.111 6.88967C17.0776 6.8145 16.9979 6.77937 16.9198 6.77937",
                          stroke: "white",
                          "stroke-width": "0.647652",
                          "stroke-linecap": "round",
                        }),
                        i.jsx("path", {
                          d: "M5.31758 4.91668C4.90027 5.38036 4.65265 5.88326 4.39987 6.44498C4.33007 6.6001 4.28866 6.76497 4.21199 6.91829C4.1447 7.05287 4.02475 7.27125 4.01689 7.4205C3.98627 8.00227 3.98438 8.58948 3.98438 9.17642C3.98438 9.63708 3.98438 10.0977 3.98438 10.5584C3.98438 10.8077 3.98438 11.057 3.98438 11.3063C3.98438 11.5944 4.04941 11.882 4.04941 12.1698C4.04941 12.6569 4.11444 13.14 4.11444 13.6295C4.11444 13.9113 4.13818 14.2142 4.17948 14.493C4.27787 15.1571 4.4934 15.7922 4.57691 16.4603C4.61811 16.7899 4.65798 16.974 4.82259 17.284C4.95893 17.5408 5.00485 17.8514 5.15499 18.0933C5.24896 18.2447 5.30984 18.468 5.35732 18.6389C5.40596 18.814 5.52536 18.9961 5.61746 19.152C5.78181 19.4301 5.96673 19.4967 6.2389 19.6289C6.6228 19.8153 6.99882 20.0161 7.38061 20.207C7.80196 20.4176 8.32452 20.53 8.78246 20.6405C9.12676 20.7236 9.55271 20.8344 9.90791 20.8157C10.5546 20.7817 11.2035 20.7541 11.8499 20.7182C12.3288 20.6916 12.8054 20.6473 13.2843 20.6206C13.644 20.6007 14.0088 20.4653 14.3555 20.3786C14.8465 20.2558 15.3394 20.073 15.8188 19.9071C16.2387 19.7617 16.6536 19.6055 17.0563 19.4265C17.2357 19.3468 17.379 19.1911 17.5332 19.0652C17.7494 18.8887 17.9738 18.7213 18.1871 18.5414C18.3669 18.3897 18.5307 18.1881 18.7219 18.0536C19.0362 17.8324 19.2766 17.5564 19.365 17.1684C19.4551 16.7728 19.4446 16.3628 19.5926 15.9797C19.6901 15.7274 19.8108 15.481 19.9105 15.2246C20.0392 14.8938 20.1407 14.565 20.2104 14.2166C20.2726 13.9055 20.406 13.6271 20.485 13.3224C20.6244 12.7846 20.5005 12.1575 20.4688 11.617C20.4397 11.1239 20.3622 10.6338 20.3405 10.1393C20.327 9.83301 20.2797 9.5343 20.2429 9.23062C20.2289 9.11516 20.1779 9.0292 20.1779 8.91087C20.1779 8.13478 19.8659 7.37317 19.7389 6.61118C19.6944 6.34428 19.6742 5.99887 19.5619 5.75309C19.3908 5.37885 19.1039 5.09468 18.8122 4.81913C18.6492 4.66519 18.4922 4.56883 18.2919 4.46867C18.2119 4.42866 18.1452 4.39641 18.0571 4.39641C17.8295 4.39641 17.6018 4.39488 17.3742 4.39641C17.1151 4.39814 16.8574 4.46586 16.601 4.46144C16.1433 4.45355 15.7588 4.04611 15.2931 4.03872C15.0795 4.03533 14.8637 4.03278 14.65 4.03872C14.3814 4.04618 14.1196 4.10719 13.8443 4.10375C13.7231 4.10224 13.6192 4.04267 13.5047 4.03872C13.2824 4.03105 13.0586 4.03872 12.8363 4.03872C11.7542 4.03872 10.6721 4.03872 9.58997 4.03872C9.1862 4.03872 8.77074 4.14618 8.37419 4.21756C7.95722 4.29261 7.53608 4.33703 7.12589 4.44337C6.8921 4.50399 6.67065 4.51176 6.43942 4.60596C6.25384 4.68156 6.03871 4.73238 5.83966 4.75229C5.71469 4.76478 5.61163 4.74406 5.49461 4.78661C5.2742 4.86676 5.06738 4.92372 4.86234 5.04675",
                          stroke: "white",
                          "stroke-width": "0.8",
                          "stroke-linecap": "round",
                        }),
                        i.jsx("path", {
                          d: "M14.2586 3.13007C13.9873 3.13007 13.7172 3.1219 13.4529 3.1951C13.1798 3.27074 12.9799 3.32517 12.6906 3.32517C12.4641 3.32517 12.24 3.32663 12.0221 3.39743C11.9178 3.43136 11.8013 3.5147 11.6898 3.52027C11.2518 3.54217 10.8132 3.50846 10.3764 3.57086C10.1184 3.60772 9.84744 3.65189 9.5924 3.69912C9.38645 3.73726 9.17713 3.7558 8.97276 3.79667C8.64137 3.86295 8.32666 3.86813 7.99364 3.97732C7.45549 4.15376 6.93779 4.395 6.39669 4.56082C5.85322 4.72737 5.32016 4.7956 4.78889 5.02329C4.56658 5.11857 4.45284 5.13262 4.33365 5.33401C4.13234 5.67417 3.89377 5.9931 3.69234 6.33301C3.40119 6.82433 3.36675 7.3188 3.30033 7.86673C3.20166 8.68075 3.15781 9.51973 3.0149 10.3236C2.98629 10.4845 3.00768 10.6654 3.00768 10.8294C3.00768 11.2136 3.00768 11.5978 3.00768 11.982C3.00768 12.7106 3.00768 13.4392 3.00768 14.1678C3.00768 14.5405 3.12797 14.8806 3.21904 15.2409C3.33042 15.6816 3.42212 16.1176 3.5135 16.5614C3.56646 16.8187 3.66722 17.0425 3.7086 17.2967C3.78511 17.7667 3.96132 18.246 4.17107 18.6733C4.28479 18.9049 4.37704 19.1414 4.47095 19.3814C4.57815 19.6554 4.8071 19.872 5.02374 20.0643C5.09919 20.1312 5.23641 20.3281 5.33085 20.3569C5.53463 20.4192 5.72493 20.492 5.92338 20.5773C6.30488 20.7413 6.68145 20.7916 7.08858 20.8519C7.26485 20.878 7.42961 20.9495 7.61066 20.9495C7.88103 20.9495 8.15141 20.9495 8.42178 20.9495C8.86136 20.9495 9.30095 20.9495 9.74053 20.9495C10.0769 20.9495 10.4078 20.9418 10.7431 20.9169C10.9736 20.8999 11.1729 20.8023 11.3971 20.7616C11.6155 20.7219 11.8317 20.7051 12.0474 20.6496C12.3113 20.5817 12.5765 20.5873 12.8495 20.534C13.7113 20.3655 14.5583 20.1525 15.413 19.9595C15.6063 19.9158 15.7988 19.9133 15.9874 19.8583C16.4795 19.7148 16.9836 19.6961 17.4923 19.6488C17.781 19.6219 18.0553 19.4784 18.3232 19.3742C18.4769 19.3144 18.6951 19.2505 18.811 19.1285C18.915 19.019 19.0022 18.8821 19.0964 18.7636C19.2207 18.6072 19.369 18.478 19.4939 18.3228C19.6334 18.1493 19.7842 17.9625 19.8841 17.7628C20.0531 17.4246 20.2798 17.101 20.3104 16.7186C20.3423 16.3201 20.6313 16.0325 20.7458 15.6636C20.8052 15.472 20.9091 15.2865 20.9571 15.0946C21.028 14.8112 20.9896 14.4946 20.9896 14.204C20.9896 13.8853 20.8665 13.5843 20.8596 13.2682C20.8466 12.6725 20.7247 12.0882 20.6898 11.4942C20.6602 10.9911 20.5876 10.4063 20.6898 9.90808C20.7656 9.53837 20.697 9.09169 20.697 8.71579C20.697 8.19991 20.5669 7.69205 20.5669 7.18026C20.5669 6.86246 20.4629 6.4577 20.37 6.15597C20.3026 5.937 20.2162 5.73047 20.1605 5.50743C20.1437 5.44045 20.1354 5.27589 20.0629 5.24368C19.9843 5.20875 19.9942 5.15375 19.978 5.0811C19.9488 4.94961 19.7886 4.80828 19.707 4.70715C19.486 4.43311 19.2513 4.19703 18.9989 3.95022C18.7927 3.74861 18.6102 3.80004 18.3558 3.70815C18.1513 3.63433 17.9619 3.51713 17.7632 3.42995C17.5556 3.33883 17.3212 3.28544 17.102 3.22762C16.704 3.12257 16.3633 3.03252 15.9495 3.03252C15.5623 3.03252 15.1828 3 14.7951 3C14.5201 3 14.2679 3.09755 13.9985 3.09755",
                          stroke: "white",
                          "stroke-width": "0.8",
                          "stroke-linecap": "round",
                        }),
                      ],
                    }),
                    "Say Heyyyyyyy!",
                  ],
                }),
              }),
            ],
          }),
          i.jsx("button", {
            className: "md:hidden cursor-pointer",
            onClick: () => t(!e),
            children: e ? i.jsx(Gc, { size: 28 }) : i.jsx(T2, { size: 28 }),
          }),
          e &&
            i.jsxs("div", {
              className:
                "fixed inset-0 bg-white z-50 flex flex-col p-6 md:hidden min-h-screen",
              children: [
                i.jsxs("div", {
                  className: "flex justify-between items-center mb-8",
                  children: [
                    i.jsx("img", {
                      className: "w-[120px]",
                      src: "/tumlet-logo.png",
                      alt: "Tumlet Logo",
                    }),
                    i.jsx("button", {
                      className: "cursor-pointer",
                      onClick: () => t(!1),
                      children: i.jsx(Gc, { size: 28 }),
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    i.jsx("div", {
                      className: "font-medium text-gray-800 text-lg px-4 py-3",
                      children: "Our vibe",
                    }),
                    i.jsx(X, {
                      to: "/about/",
                      className:
                        "px-4 py-3 hover:bg-gray-100 rounded-lg text-lg pl-10",
                      children: "About us",
                    }),
                    i.jsx(X, {
                      to: "/game-night/",
                      className:
                        "px-4 py-3 hover:bg-gray-100 rounded-lg text-lg pl-10",
                      children: "Game nights",
                    }),
                    i.jsx("div", {
                      className: "font-medium text-gray-800 text-lg px-4 py-3",
                      children: "Our online games",
                    }),
                    i.jsx(X, {
                      to: "/bichitra/",
                      className:
                        "px-4 py-3 hover:bg-gray-100 rounded-lg text-lg pl-10",
                      children: "Bichitra",
                    }),
                    i.jsx(X, {
                      to: "/farak/",
                      className:
                        "px-4 py-3 hover:bg-gray-100 rounded-lg text-lg pl-10",
                      children: "Farak",
                    }),
                    i.jsx(X, {
                      to: "/ganthan/",
                      className:
                        "px-4 py-3 hover:bg-gray-100 rounded-lg text-lg pl-10",
                      children: "Ganthan",
                    }),
                    i.jsx(X, {
                      to: "/thug/",
                      className:
                        "px-4 py-3 hover:bg-gray-100 rounded-lg text-lg pl-10",
                      children: "Thug",
                    }),
                    i.jsx(X, {
                      to: "/wavelength/",
                      className:
                        "px-4 py-3 hover:bg-gray-100 rounded-lg text-lg pl-10",
                      children: "Wavelength",
                    }),
                  ],
                }),
                i.jsx("a", {
                  href: "https://www.instagram.com/tumlet.boardgames/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "mt-8",
                  children: i.jsxs(So, {
                    className: "w-full nav-button text-lg py-4",
                    children: [
                      i.jsxs("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          i.jsx("path", {
                            d: "M10.4243 8.70936C10.6613 8.58259 10.8197 8.46395 10.8197 8.46395C10.9276 8.39518 11.0356 8.36819 11.2442 8.28709C11.3942 8.17048 11.6265 8.22422 11.8022 8.19819C11.9829 8.17142 12.2166 8.17571 12.3964 8.19819C12.5948 8.22299 12.7932 8.21 12.9918 8.23562C13.3165 8.27752 13.6403 8.3031 13.9673 8.31867C14.0538 8.32279 14.166 8.29775 14.2492 8.32452C14.3208 8.34754 14.3843 8.39449 14.4551 8.42044C14.6101 8.47721 14.7388 8.50814 14.8645 8.62514C14.9678 8.7213 15.049 8.83592 15.1289 8.95149C15.284 9.176 15.4112 9.39706 15.5184 9.64864C15.6303 9.9115 15.8143 10.1831 15.8459 10.4674C15.8569 10.5665 15.893 10.6627 15.9032 10.7622C15.9167 10.894 15.9079 11.0299 15.9079 11.1623C15.9079 11.7724 15.6344 12.3444 15.3909 12.8899C15.2744 13.1509 15.1164 13.3772 14.9511 13.6093C14.8886 13.6969 14.8524 13.7959 14.7908 13.8807C14.6144 14.1233 14.437 14.3698 14.2656 14.6153C13.9985 14.9979 13.6895 15.4059 13.2655 15.6247C13.0785 15.7212 12.8995 15.7101 12.6959 15.7101C12.4703 15.7101 12.257 15.7076 12.0338 15.668C11.499 15.5731 10.9812 15.3751 10.4664 15.2153C10.2926 15.1614 10.097 15.0904 9.94936 14.9837C9.69902 14.8029 9.43677 14.6393 9.1867 14.4585C8.91359 14.2611 8.59202 14.0648 8.45446 13.7427C8.31278 13.4108 8.11255 13.0917 8.09769 12.7203C8.08541 12.4133 8.09973 12.1324 8.17022 11.8348C8.25903 11.4599 8.42962 11.0966 8.47083 10.7107C8.48853 10.545 8.53953 10.5298 8.65565 10.4136C8.80461 10.2647 8.93358 10.1139 9.06271 9.94809C9.19784 9.77457 9.35474 9.61606 9.50603 9.45681C9.60439 9.35328 9.68276 9.2356 9.79028 9.14098C9.98389 8.97061 10.1954 8.83178 10.4243 8.70936Z",
                            stroke: "white",
                            "stroke-width": "0.6",
                            "stroke-linecap": "round",
                          }),
                          i.jsx("path", {
                            d: "M11.1593 7.76354C11.281 7.68277 11.3748 7.59499 11.5102 7.53895C11.5889 7.51085 11.6293 7.48047 11.7149 7.48047C11.9541 7.48047 12.1821 7.53221 12.4214 7.5448C12.6879 7.55883 12.9522 7.65585 13.2133 7.70272C13.597 7.77158 13.8977 8.03893 14.2052 8.2595C14.4142 8.4094 14.6129 8.47971 14.7842 8.67709C14.9558 8.87474 15.1292 9.06179 15.279 9.27482C15.4071 9.45698 15.461 9.68381 15.527 9.89243C15.6269 10.208 15.7517 10.5324 15.927 10.8142L15.9313 10.8211C15.9882 10.9124 16.0133 10.9526 15.9996 11.0621C15.9869 11.1637 15.9785 11.2615 15.9785 11.3639C15.9785 11.9823 15.7598 12.5616 15.6206 13.1571C15.5572 13.4282 15.4778 13.7058 15.4404 13.9818C15.4272 14.0795 15.4575 14.2036 15.4089 14.2929C15.2621 14.562 15.0743 14.8337 14.8883 15.0766C14.5954 15.4593 14.2368 15.7227 13.8683 16.0288C13.7161 16.1553 13.5289 16.2558 13.356 16.3504C13.1419 16.4677 12.9003 16.6548 12.6612 16.7189C12.4527 16.7748 12.1659 16.7196 11.9558 16.692C11.7317 16.6625 11.5148 16.6183 11.2879 16.6183C11.0688 16.6183 10.9137 16.5966 10.723 16.4803C10.5053 16.3476 10.2743 16.2402 10.0644 16.0943C9.92759 15.9991 9.72184 15.8888 9.62928 15.7434C9.49002 15.5245 9.27108 15.3704 9.1146 15.1655C8.93992 14.9368 8.78019 14.6826 8.67128 14.4157C8.57114 14.1704 8.4567 13.9285 8.37768 13.6753C8.31902 13.4874 8.32468 13.2797 8.26772 13.0975C8.17811 12.8107 7.96091 12.5647 7.85598 12.281C7.75822 12.0167 7.83025 11.724 7.83025 11.4517C7.83025 11.1724 7.94037 10.9092 8.07121 10.6644C8.23802 10.3524 8.41543 9.99695 8.65373 9.73218C8.87466 9.4867 9.04761 9.17938 9.31345 8.97771C9.46386 8.86361 9.62455 8.78429 9.78368 8.68528C10.0144 8.5417 10.2476 8.3902 10.4645 8.22558C10.6864 8.05706 10.9272 7.91753 11.1593 7.76354Z",
                            stroke: "white",
                            "stroke-width": "0.6",
                            "stroke-linecap": "round",
                          }),
                          i.jsx("path", {
                            d: "M16.9493 6.77937C16.7485 6.77937 16.5331 6.75036 16.3896 6.91172C16.2976 7.01524 16.2045 7.10812 16.1225 7.22054C16.0297 7.34763 16.01 7.54773 16.0081 7.70256C16.0043 8.00891 16.0344 8.28274 16.3529 8.40353C16.5551 8.48024 16.8648 8.49515 17.0669 8.39699C17.2642 8.30114 17.3497 8.04228 17.397 7.84635C17.4483 7.63345 17.4164 7.43782 17.3463 7.23525C17.2984 7.09683 17.1673 7.01631 17.111 6.88967C17.0776 6.8145 16.9979 6.77937 16.9198 6.77937",
                            stroke: "white",
                            "stroke-width": "0.647652",
                            "stroke-linecap": "round",
                          }),
                          i.jsx("path", {
                            d: "M5.31758 4.91668C4.90027 5.38036 4.65265 5.88326 4.39987 6.44498C4.33007 6.6001 4.28866 6.76497 4.21199 6.91829C4.1447 7.05287 4.02475 7.27125 4.01689 7.4205C3.98627 8.00227 3.98438 8.58948 3.98438 9.17642C3.98438 9.63708 3.98438 10.0977 3.98438 10.5584C3.98438 10.8077 3.98438 11.057 3.98438 11.3063C3.98438 11.5944 4.04941 11.882 4.04941 12.1698C4.04941 12.6569 4.11444 13.14 4.11444 13.6295C4.11444 13.9113 4.13818 14.2142 4.17948 14.493C4.27787 15.1571 4.4934 15.7922 4.57691 16.4603C4.61811 16.7899 4.65798 16.974 4.82259 17.284C4.95893 17.5408 5.00485 17.8514 5.15499 18.0933C5.24896 18.2447 5.30984 18.468 5.35732 18.6389C5.40596 18.814 5.52536 18.9961 5.61746 19.152C5.78181 19.4301 5.96673 19.4967 6.2389 19.6289C6.6228 19.8153 6.99882 20.0161 7.38061 20.207C7.80196 20.4176 8.32452 20.53 8.78246 20.6405C9.12676 20.7236 9.55271 20.8344 9.90791 20.8157C10.5546 20.7817 11.2035 20.7541 11.8499 20.7182C12.3288 20.6916 12.8054 20.6473 13.2843 20.6206C13.644 20.6007 14.0088 20.4653 14.3555 20.3786C14.8465 20.2558 15.3394 20.073 15.8188 19.9071C16.2387 19.7617 16.6536 19.6055 17.0563 19.4265C17.2357 19.3468 17.379 19.1911 17.5332 19.0652C17.7494 18.8887 17.9738 18.7213 18.1871 18.5414C18.3669 18.3897 18.5307 18.1881 18.7219 18.0536C19.0362 17.8324 19.2766 17.5564 19.365 17.1684C19.4551 16.7728 19.4446 16.3628 19.5926 15.9797C19.6901 15.7274 19.8108 15.481 19.9105 15.2246C20.0392 14.8938 20.1407 14.565 20.2104 14.2166C20.2726 13.9055 20.406 13.6271 20.485 13.3224C20.6244 12.7846 20.5005 12.1575 20.4688 11.617C20.4397 11.1239 20.3622 10.6338 20.3405 10.1393C20.327 9.83301 20.2797 9.5343 20.2429 9.23062C20.2289 9.11516 20.1779 9.0292 20.1779 8.91087C20.1779 8.13478 19.8659 7.37317 19.7389 6.61118C19.6944 6.34428 19.6742 5.99887 19.5619 5.75309C19.3908 5.37885 19.1039 5.09468 18.8122 4.81913C18.6492 4.66519 18.4922 4.56883 18.2919 4.46867C18.2119 4.42866 18.1452 4.39641 18.0571 4.39641C17.8295 4.39641 17.6018 4.39488 17.3742 4.39641C17.1151 4.39814 16.8574 4.46586 16.601 4.46144C16.1433 4.45355 15.7588 4.04611 15.2931 4.03872C15.0795 4.03533 14.8637 4.03278 14.65 4.03872C14.3814 4.04618 14.1196 4.10719 13.8443 4.10375C13.7231 4.10224 13.6192 4.04267 13.5047 4.03872C13.2824 4.03105 13.0586 4.03872 12.8363 4.03872C11.7542 4.03872 10.6721 4.03872 9.58997 4.03872C9.1862 4.03872 8.77074 4.14618 8.37419 4.21756C7.95722 4.29261 7.53608 4.33703 7.12589 4.44337C6.8921 4.50399 6.67065 4.51176 6.43942 4.60596C6.25384 4.68156 6.03871 4.73238 5.83966 4.75229C5.71469 4.76478 5.61163 4.74406 5.49461 4.78661C5.2742 4.86676 5.06738 4.92372 4.86234 5.04675",
                            stroke: "white",
                            "stroke-width": "0.8",
                            "stroke-linecap": "round",
                          }),
                          i.jsx("path", {
                            d: "M14.2586 3.13007C13.9873 3.13007 13.7172 3.1219 13.4529 3.1951C13.1798 3.27074 12.9799 3.32517 12.6906 3.32517C12.4641 3.32517 12.24 3.32663 12.0221 3.39743C11.9178 3.43136 11.8013 3.5147 11.6898 3.52027C11.2518 3.54217 10.8132 3.50846 10.3764 3.57086C10.1184 3.60772 9.84744 3.65189 9.5924 3.69912C9.38645 3.73726 9.17713 3.7558 8.97276 3.79667C8.64137 3.86295 8.32666 3.86813 7.99364 3.97732C7.45549 4.15376 6.93779 4.395 6.39669 4.56082C5.85322 4.72737 5.32016 4.7956 4.78889 5.02329C4.56658 5.11857 4.45284 5.13262 4.33365 5.33401C4.13234 5.67417 3.89377 5.9931 3.69234 6.33301C3.40119 6.82433 3.36675 7.3188 3.30033 7.86673C3.20166 8.68075 3.15781 9.51973 3.0149 10.3236C2.98629 10.4845 3.00768 10.6654 3.00768 10.8294C3.00768 11.2136 3.00768 11.5978 3.00768 11.982C3.00768 12.7106 3.00768 13.4392 3.00768 14.1678C3.00768 14.5405 3.12797 14.8806 3.21904 15.2409C3.33042 15.6816 3.42212 16.1176 3.5135 16.5614C3.56646 16.8187 3.66722 17.0425 3.7086 17.2967C3.78511 17.7667 3.96132 18.246 4.17107 18.6733C4.28479 18.9049 4.37704 19.1414 4.47095 19.3814C4.57815 19.6554 4.8071 19.872 5.02374 20.0643C5.09919 20.1312 5.23641 20.3281 5.33085 20.3569C5.53463 20.4192 5.72493 20.492 5.92338 20.5773C6.30488 20.7413 6.68145 20.7916 7.08858 20.8519C7.26485 20.878 7.42961 20.9495 7.61066 20.9495C7.88103 20.9495 8.15141 20.9495 8.42178 20.9495C8.86136 20.9495 9.30095 20.9495 9.74053 20.9495C10.0769 20.9495 10.4078 20.9418 10.7431 20.9169C10.9736 20.8999 11.1729 20.8023 11.3971 20.7616C11.6155 20.7219 11.8317 20.7051 12.0474 20.6496C12.3113 20.5817 12.5765 20.5873 12.8495 20.534C13.7113 20.3655 14.5583 20.1525 15.413 19.9595C15.6063 19.9158 15.7988 19.9133 15.9874 19.8583C16.4795 19.7148 16.9836 19.6961 17.4923 19.6488C17.781 19.6219 18.0553 19.4784 18.3232 19.3742C18.4769 19.3144 18.6951 19.2505 18.811 19.1285C18.915 19.019 19.0022 18.8821 19.0964 18.7636C19.2207 18.6072 19.369 18.478 19.4939 18.3228C19.6334 18.1493 19.7842 17.9625 19.8841 17.7628C20.0531 17.4246 20.2798 17.101 20.3104 16.7186C20.3423 16.3201 20.6313 16.0325 20.7458 15.6636C20.8052 15.472 20.9091 15.2865 20.9571 15.0946C21.028 14.8112 20.9896 14.4946 20.9896 14.204C20.9896 13.8853 20.8665 13.5843 20.8596 13.2682C20.8466 12.6725 20.7247 12.0882 20.6898 11.4942C20.6602 10.9911 20.5876 10.4063 20.6898 9.90808C20.7656 9.53837 20.697 9.09169 20.697 8.71579C20.697 8.19991 20.5669 7.69205 20.5669 7.18026C20.5669 6.86246 20.4629 6.4577 20.37 6.15597C20.3026 5.937 20.2162 5.73047 20.1605 5.50743C20.1437 5.44045 20.1354 5.27589 20.0629 5.24368C19.9843 5.20875 19.9942 5.15375 19.978 5.0811C19.9488 4.94961 19.7886 4.80828 19.707 4.70715C19.486 4.43311 19.2513 4.19703 18.9989 3.95022C18.7927 3.74861 18.6102 3.80004 18.3558 3.70815C18.1513 3.63433 17.9619 3.51713 17.7632 3.42995C17.5556 3.33883 17.3212 3.28544 17.102 3.22762C16.704 3.12257 16.3633 3.03252 15.9495 3.03252C15.5623 3.03252 15.1828 3 14.7951 3C14.5201 3 14.2679 3.09755 13.9985 3.09755",
                            stroke: "white",
                            "stroke-width": "0.8",
                            "stroke-linecap": "round",
                          }),
                        ],
                      }),
                      "Say Heyyyyyyy!",
                    ],
                  }),
                }),
              ],
            }),
        ],
      }),
    });
  },
  Lw = ({
    backgroundClass: e,
    logoSrc: t,
    imageSrc: n,
    imageClass: r,
    description: o,
    metaItems: a,
    ctaLink: s,
    ctaText: l,
    ctaIcon: c,
    youtubeEmbedUrl: u,
    ctaColorClass: p = "",
    textColorClass: f = "",
    h1Title: d,
    secondaryLink: m,
  }) => {
    const w = s.startsWith("http");
    return i.jsx("div", {
      className: "w-full",
      children: i.jsxs("div", {
        className: `flex flex-col items-center gap-12 p-6 sm:p-12 md:p-24 rounded-2xl border-0 sm:border-4 ${e}`,
        children: [
          i.jsx("img", { className: "w-[224px]", src: t, alt: "Game Logo" }),
          i.jsx("img", { className: r, src: n, alt: "Game Cards" }),
          a.length > 0 &&
            i.jsx("div", {
              className: "flex flex-wrap justify-center gap-6 sm:gap-12 -mt-12",
              children: a.map((y, b) =>
                i.jsxs(
                  "div",
                  {
                    className: "flex flex-col sm:flex-row items-center gap-2",
                    children: [
                      i.jsx("img", {
                        className: "w-8 sm:w-auto",
                        src: y.icon,
                        alt: "Icon",
                      }),
                      i.jsx("span", {
                        className: "text-base",
                        children: y.text,
                      }),
                    ],
                  },
                  b,
                ),
              ),
            }),
          i.jsxs("div", {
            className: `text-center text-2xl ${f}`,
            children: [
              d &&
                i.jsx("h1", {
                  className:
                    "text-center text-3xl md:text-4xl font-bold text-tumlet-text mb-8",
                  children: d,
                }),
              o,
            ],
          }),
          i.jsxs("div", {
            className: "flex flex-row items-center gap-8",
            children: [
              w
                ? i.jsx("a", {
                    href: s,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: i.jsxs(So, {
                      className: `cta-button ${p}`,
                      children: [
                        i.jsx("img", {
                          className: "icon",
                          src: c,
                          alt: "Icon",
                        }),
                        l,
                      ],
                    }),
                  })
                : i.jsx(X, {
                    to: s,
                    children: i.jsxs("button", {
                      className: `cta-button ${p}`,
                      children: [
                        i.jsx("img", {
                          className: "icon",
                          src: c,
                          alt: "Icon",
                        }),
                        l,
                      ],
                    }),
                  }),
              m &&
                i.jsx(X, {
                  to: m.href,
                  className:
                    "underline text-tumlet-text text-base hover:text-[#F16146]",
                  children: m.text,
                }),
            ],
          }),
          u &&
            i.jsx("div", {
              className: "w-full aspect-video mt-8",
              children: i.jsx("iframe", {
                className: "w-full h-full rounded-xl",
                src: u,
                title: "YouTube video player",
                frameBorder: "0",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
              }),
            }),
        ],
      }),
    });
  },
  Le = () =>
    i.jsx("footer", {
      style: {
        background: "#FAF1E4",
        borderTop: "3px solid #F3B952",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
      },
      children: i.jsxs("div", {
        style: { maxWidth: 1280, margin: "0 auto", padding: "64px 24px 48px" },
        children: [
          i.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "48px",
              marginBottom: "56px",
            },
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("img", {
                    src: "/tumlet-logo.png",
                    alt: "Tumlet",
                    style: { width: 140, marginBottom: 16 },
                  }),
                  i.jsx("p", {
                    style: {
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "#6B6B6B",
                      maxWidth: 220,
                    },
                    children:
                      "On a mission to spread playfulness amongst Nepali youths.",
                  }),
                  i.jsxs("div", {
                    style: { display: "flex", gap: 20, marginTop: 24 },
                    children: [
                      i.jsx("a", {
                        href: "mailto:tumletgames@gmail.com",
                        "aria-label": "Email",
                        style: { opacity: 0.8, transition: "opacity 0.2s" },
                        onMouseEnter: (e) =>
                          (e.currentTarget.style.opacity = "1"),
                        onMouseLeave: (e) =>
                          (e.currentTarget.style.opacity = "0.8"),
                        children: i.jsx("img", {
                          src: "/email.svg",
                          alt: "Email",
                          style: { width: 24, height: 24 },
                        }),
                      }),
                      i.jsx("a", {
                        href: "https://www.instagram.com/tumlet.boardgames",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Instagram",
                        style: { opacity: 0.8, transition: "opacity 0.2s" },
                        onMouseEnter: (e) =>
                          (e.currentTarget.style.opacity = "1"),
                        onMouseLeave: (e) =>
                          (e.currentTarget.style.opacity = "0.8"),
                        children: i.jsx("img", {
                          src: "/insta.svg",
                          alt: "Instagram",
                          style: { width: 24, height: 24 },
                        }),
                      }),
                      i.jsx("a", {
                        href: "https://www.youtube.com/@tumlet.boardgames",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "YouTube",
                        style: { opacity: 0.8, transition: "opacity 0.2s" },
                        onMouseEnter: (e) =>
                          (e.currentTarget.style.opacity = "1"),
                        onMouseLeave: (e) =>
                          (e.currentTarget.style.opacity = "0.8"),
                        children: i.jsx("img", {
                          src: "/youtube.svg",
                          alt: "YouTube",
                          style: { width: 24, height: 24 },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#F16147",
                      marginBottom: 16,
                    },
                    children: "Online games",
                  }),
                  [
                    { label: "Bichitra", to: "/bichitra/" },
                    { label: "Farak", to: "/farak/" },
                    { label: "Ganthan", to: "/ganthan/" },
                    { label: "Thug", to: "/thug/" },
                    { label: "Wavelength", to: "/wavelength/" },
                  ].map(({ label: e, to: t, href: n }) =>
                    t
                      ? i.jsx(
                          X,
                          {
                            to: t,
                            style: {
                              display: "block",
                              color: "#130D01",
                              fontSize: 15,
                              fontWeight: 500,
                              marginBottom: 10,
                              textDecoration: "none",
                              opacity: 0.8,
                              transition: "opacity 0.2s",
                            },
                            onMouseEnter: (r) =>
                              (r.currentTarget.style.opacity = "1"),
                            onMouseLeave: (r) =>
                              (r.currentTarget.style.opacity = "0.8"),
                            children: e,
                          },
                          e,
                        )
                      : i.jsx(
                          "a",
                          {
                            href: n,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                              display: "block",
                              color: "#130D01",
                              fontSize: 15,
                              fontWeight: 500,
                              marginBottom: 10,
                              textDecoration: "none",
                              opacity: 0.8,
                              transition: "opacity 0.2s",
                            },
                            onMouseEnter: (r) =>
                              (r.currentTarget.style.opacity = "1"),
                            onMouseLeave: (r) =>
                              (r.currentTarget.style.opacity = "0.8"),
                            children: e,
                          },
                          e,
                        ),
                  ),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#F16147",
                      marginBottom: 16,
                    },
                    children: "Company",
                  }),
                  [
                    { label: "About us", to: "/about/" },
                    { label: "Blog", to: "/blog/" },
                    { label: "Game nights", to: "/game-night/" },
                    {
                      label: "Corporate game nights",
                      to: "/corporate-game-night/",
                    },
                  ].map(({ label: e, to: t }) =>
                    i.jsx(
                      X,
                      {
                        to: t,
                        style: {
                          display: "block",
                          color: "#130D01",
                          fontSize: 15,
                          fontWeight: 500,
                          marginBottom: 10,
                          textDecoration: "none",
                          opacity: 0.8,
                          transition: "opacity 0.2s",
                        },
                        onMouseEnter: (n) =>
                          (n.currentTarget.style.opacity = "1"),
                        onMouseLeave: (n) =>
                          (n.currentTarget.style.opacity = "0.8"),
                        children: e,
                      },
                      e,
                    ),
                  ),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#F16147",
                      marginBottom: 16,
                    },
                    children: "Get in touch",
                  }),
                  i.jsx("p", {
                    style: {
                      fontSize: 15,
                      color: "#130D01",
                      marginBottom: 24,
                      fontWeight: 500,
                    },
                    children: "tumletgames@gmail.com",
                  }),
                  i.jsx("a", {
                    href: "https://www.instagram.com/tumlet.boardgames/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#ffffff",
                      background: "#F16147",
                      padding: "10px 20px",
                      borderRadius: 10,
                      boxShadow: "4px 4px 0 #F3B952",
                      transform: "rotate(-0.88deg)",
                      textDecoration: "none",
                      transition: "transform 0.2s",
                    },
                    onMouseEnter: (e) =>
                      (e.currentTarget.style.transform =
                        "rotate(-0.88deg) translate(-2px,-2px)"),
                    onMouseLeave: (e) =>
                      (e.currentTarget.style.transform = "rotate(-0.88deg)"),
                    children: "Say Heyyyyyyyy! →",
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            style: {
              borderTop: "1px solid #E5C97E",
              paddingTop: 24,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            },
            children: [
              i.jsx("span", {
                style: {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  color: "#6B6B6B",
                },
                children: "© 2026 Tumlet. All rights reserved.",
              }),
              i.jsx("span", {
                style: {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  color: "#6B6B6B",
                },
                children: "Made with ♥ in Kathmandu",
              }),
            ],
          }),
        ],
      }),
    });
function Vo(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function Go(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function Iw(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
function Ww(e) {
  let t = document.querySelector("script[type='application/ld+json']");
  (t ||
    ((t = document.createElement("script")),
    t.setAttribute("type", "application/ld+json"),
    document.head.appendChild(t)),
    (t.textContent = JSON.stringify(e)));
}
const $w = () => {
    const e = [
      { icon: "/player.svg", text: "2-6 players" },
      { icon: "/age.svg", text: "age 13+" },
      { icon: "/time.svg", text: "11 minutes" },
    ];
    return (
      x.useEffect(() => {
        ((document.title = "Tumlet | Spreading Playfulness Across Nepal"),
          Vo(
            "description",
            "Play, laugh, repeat! Tumlet crafts games that spark connection, nostalgia, and pure fun for young Nepali adults.",
          ),
          Iw("https://tumlet.com/"),
          Go("og:title", "Tumlet | Spreading Playfulness Across Nepal"),
          Go(
            "og:description",
            "Play, laugh, repeat! Tumlet crafts games that spark connection, nostalgia, and pure fun for young Nepali adults.",
          ),
          Go("og:type", "website"),
          Go("og:url", "https://tumlet.com/"),
          Go("og:image", "https://tumlet.com/unfurl.png"),
          Vo("twitter:card", "summary_large_image"),
          Vo("twitter:title", "Tumlet | Spreading Playfulness Across Nepal"),
          Vo(
            "twitter:description",
            "Play, laugh, repeat! Tumlet crafts games that spark connection, nostalgia, and pure fun for young Nepali adults.",
          ),
          Vo("twitter:image", "https://tumlet.com/unfurl.png"),
          Ww({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tumlet",
            description:
              "Nepali board game company spreading playfulness across Nepal",
            url: "https://tumlet.com",
            logo: "https://tumlet.com/tumlet-logo.png",
            sameAs: ["https://www.instagram.com/tumlet.boardgames/"],
            foundingDate: "2022",
            foundingLocation: { "@type": "Place", name: "Kathmandu, Nepal" },
          }));
      }, []),
      i.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [
          i.jsx(Ze, {}),
          i.jsxs("main", {
            className: "flex-1",
            children: [
              i.jsx("section", {
                className: "container mx-auto px-4 md:px-12 pt-8 md:pt-14",
                children: i.jsx(Lw, {
                  backgroundClass: "bluff-background",
                  logoSrc: "/bluff-momo-logo.png",
                  imageSrc: "/char-combined.webp",
                  imageClass: " w-[145%] self-center rounded-2xl",
                  description:
                    "Bluff momo is a card game based in the street of kathmandu, where players bluff, deceive, and outsmart their friends to steal the most momo and poison their way to victory!",
                  metaItems: e,
                  ctaLink: "https://www.instagram.com/tumlet.boardgames/",
                  ctaText: "DM us to order",
                  ctaIcon: "/insta-draw-white.svg",
                  ctaColorClass: "color-red",
                  youtubeEmbedUrl:
                    "https://www.youtube.com/embed/di6Ek8Nf4mQ?si=QPyyUvBOyPjzArWc",
                  h1Title: "Bluff momo - Board game for Nepali adults",
                  secondaryLink: { text: "Learn who we are", href: "/about/" },
                }),
              }),
              i.jsx("section", {
                className: "container mx-auto px-4 md:px-12 mt-12 mb-16",
                children: i.jsx("div", {
                  className: "text-center",
                  children: i.jsxs("p", {
                    className: "text-lg md:text-xl text-gray-700 mb-4",
                    children: [
                      "Explore our online games: ",
                      i.jsx(X, {
                        to: "/bichitra/",
                        className:
                          "underline hover:text-tumlet-text/80 text-tumlet-text",
                        children: "bichitra",
                      }),
                      ", ",
                      i.jsx(X, {
                        to: "/farak/",
                        className:
                          "underline hover:text-tumlet-text/80 text-tumlet-text",
                        children: "farak",
                      }),
                      ", ",
                      i.jsx(X, {
                        to: "/ganthan/",
                        className:
                          "underline hover:text-tumlet-text/80 text-tumlet-text",
                        children: "ganthan",
                      }),
                      ", ",
                      i.jsx(X, {
                        to: "/thug/",
                        className:
                          "underline hover:text-tumlet-text/80 text-tumlet-text",
                        children: "thug",
                      }),
                      ", and ",
                      i.jsx(X, {
                        to: "/wavelength/",
                        className:
                          "underline hover:text-tumlet-text/80 text-tumlet-text",
                        children: "wavelength",
                      }),
                      ". Or race through Kathmandu with ",
                      i.jsx(X, {
                        to: "/tundikhel/",
                        className:
                          "underline hover:text-tumlet-text/80 text-tumlet-text",
                        children: "race to tundikhel",
                      }),
                      ".",
                    ],
                  }),
                }),
              }),
            ],
          }),
          i.jsx(Le, {}),
        ],
      })
    );
  },
  Og = x.forwardRef(({ className: e, ...t }, n) =>
    i.jsx("div", {
      className: "relative w-full overflow-auto",
      children: i.jsx("table", {
        ref: n,
        className: Ie("w-full caption-bottom text-sm", e),
        ...t,
      }),
    }),
  );
Og.displayName = "Table";
const Bg = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx("thead", { ref: n, className: Ie("[&_tr]:border-b", e), ...t }),
);
Bg.displayName = "TableHeader";
const Dg = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx("tbody", {
    ref: n,
    className: Ie("[&_tr:last-child]:border-0", e),
    ...t,
  }),
);
Dg.displayName = "TableBody";
const Hw = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx("tfoot", {
    ref: n,
    className: Ie("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
    ...t,
  }),
);
Hw.displayName = "TableFooter";
const hi = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx("tr", {
    ref: n,
    className: Ie(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e,
    ),
    ...t,
  }),
);
hi.displayName = "TableRow";
const Xa = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx("th", {
    ref: n,
    className: Ie(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e,
    ),
    ...t,
  }),
);
Xa.displayName = "TableHead";
const zt = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx("td", {
    ref: n,
    className: Ie("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t,
  }),
);
zt.displayName = "TableCell";
const Uw = x.forwardRef(({ className: e, ...t }, n) =>
  i.jsx("caption", {
    ref: n,
    className: Ie("mt-4 text-sm text-muted-foreground", e),
    ...t,
  }),
);
Uw.displayName = "TableCaption";
function Fr(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function qo(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function Vw(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
const Gw = () => {
  x.useState(null);
  const e = x.useRef(null);
  x.useEffect(() => {
    ((document.title = "Bluff Momo Rules | How to Play the Nepali Card Game"),
      Fr(
        "description",
        "Learn how to play Bluff Momo — the Nepali bluffing card game by Tumlet. Watch the gameplay video and reference every character's actions and blocks.",
      ),
      Fr(
        "keywords",
        "bluff momo rules, how to play bluff momo, nepali card game, tumlet bluff momo",
      ),
      Vw("https://tumlet.com/bluff-momo-rules/"),
      qo("og:title", "Bluff Momo Rules | How to Play the Nepali Card Game"),
      qo(
        "og:description",
        "Learn how to play Bluff Momo — the Nepali bluffing card game by Tumlet. Watch the gameplay video and reference every character's actions and blocks.",
      ),
      qo("og:type", "website"),
      qo("og:url", "https://tumlet.com/bluff-momo-rules/"),
      qo("og:image", "https://tumlet.com/unfurl.png"),
      Fr("twitter:card", "summary_large_image"),
      Fr(
        "twitter:title",
        "Bluff Momo Rules | How to Play the Nepali Card Game",
      ),
      Fr(
        "twitter:description",
        "Learn how to play Bluff Momo — the Nepali bluffing card game by Tumlet. Watch the gameplay video and reference every character's actions and blocks.",
      ),
      Fr("twitter:image", "https://tumlet.com/unfurl.png"));
  }, []);
  const t = () => {
      e.current && e.current.scrollIntoView({ behavior: "smooth" });
    },
    n = [
      {
        id: "hante",
        name: "हन्ते",
        action: "Take 3 momo from the middle pile in one move",
        blocks: "X",
      },
      {
        id: "chor",
        name: "चोर",
        action: "Steal 2 momo from any player",
        blocks: "Blocks चोर's attempt to steal your momo",
      },
      {
        id: "bhattiko-dai",
        name: "भट्टीको दाई",
        action: "Use 3 momo to poison any player (They lose one card)",
        blocks: "X",
      },
      {
        id: "aama",
        name: "आमा",
        action: "X",
        blocks: "Blocks भट्टीको दाई's poison attempt",
      },
      {
        id: "mantri",
        name: "मन्त्री",
        action:
          "Force any player to show one of their cards or draw a new card from the deck, look at it, and put back any 1 of your cards",
        blocks:
          "Blocks चोर's attempt to steal your momo and मन्त्री's attempt to look at your card",
      },
    ];
  return i.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [
      i.jsxs("nav", {
        className:
          "flex flex-row justify-between items-center px-6 md:px-12 lg:px-36 py-6",
        children: [
          i.jsx(X, {
            to: "/",
            children: i.jsx("img", {
              className: "w-[120px] md:w-[200px]",
              src: "/tumlet-logo.png",
              alt: "Tumlet Logo",
            }),
          }),
          i.jsx(So, {
            onClick: t,
            className: "nav-button",
            children: "Character Reference",
          }),
        ],
      }),
      i.jsxs("div", {
        className: "px-6 md:px-12 lg:px-36 py-6",
        children: [
          i.jsxs("div", {
            className: "flex flex-col gap-4 justify-center h-[600px] mb-[48px]",
            children: [
              i.jsx("h1", {
                className:
                  "text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:text-center",
                children: "How to play bluff momo?",
              }),
              i.jsx("iframe", {
                className: "w-full h-full rounded-xl",
                src: "https://www.youtube.com/embed/di6Ek8Nf4mQ?si=QPyyUvBOyPjzArWc",
                title: "YouTube video player",
                frameBorder: "0",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
              }),
            ],
          }),
          i.jsx("h2", {
            className: "text-xl md:text-2xl font-bold mb-4",
            children: "Character reference table",
          }),
          i.jsx("div", {
            className: "overflow-x-auto",
            ref: e,
            children: i.jsxs(Og, {
              children: [
                i.jsx(Bg, {
                  children: i.jsxs(hi, {
                    children: [
                      i.jsx(Xa, {
                        className: "font-bold",
                        children: "Character",
                      }),
                      i.jsx(Xa, { className: "font-bold", children: "Action" }),
                      i.jsx(Xa, { className: "font-bold", children: "Blocks" }),
                    ],
                  }),
                }),
                i.jsxs(Dg, {
                  children: [
                    i.jsxs(hi, {
                      children: [
                        i.jsx(zt, { className: "font-medium", children: "—" }),
                        i.jsx(zt, { children: "Take 1 momo from the middle" }),
                        i.jsx(zt, {
                          children: "Cannot be blocked or challenged",
                        }),
                      ],
                    }),
                    i.jsxs(hi, {
                      children: [
                        i.jsx(zt, { className: "font-medium", children: "—" }),
                        i.jsx(zt, {
                          children:
                            "Use 7 momo to food-poison another player (they lose one card)",
                        }),
                        i.jsx(zt, {
                          children: "Cannot be blocked or challenged",
                        }),
                      ],
                    }),
                    n.map((r) =>
                      i.jsxs(
                        hi,
                        {
                          children: [
                            i.jsx(zt, {
                              className: "font-medium",
                              children: r.name,
                            }),
                            i.jsx(zt, { children: r.action }),
                            i.jsx(zt, { children: r.blocks }),
                          ],
                        },
                        r.id,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          }),
          i.jsx("div", {
            className: "mt-12 text-center",
            children: i.jsxs("p", {
              className: "text-lg md:text-xl text-gray-700 mb-4",
              children: [
                "Want to play Bluff Momo with your team? We host ",
                i.jsx(X, {
                  to: "/corporate-game-night/",
                  className:
                    "underline hover:text-tumlet-text/80 text-tumlet-text",
                  children: "corporate game nights",
                }),
                " where we bring games to your office and run the entire session.",
              ],
            }),
          }),
        ],
      }),
      i.jsx("div", { className: "mt-auto", children: i.jsx(Le, {}) }),
    ],
  });
};
var Mg = { exports: {} },
  qw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Yw = qw,
  Kw = Yw;
function _g() {}
function zg() {}
zg.resetWarningCache = _g;
var Qw = function () {
  function e(r, o, a, s, l, c) {
    if (c !== Kw) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: zg,
    resetWarningCache: _g,
  };
  return ((n.PropTypes = n), n);
};
Mg.exports = Qw();
var Xw = Mg.exports;
const le = To(Xw);
function Jw(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var Lg = x,
  Zw = Jw(Lg);
function vp(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function e8(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t));
}
var t8 = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function n8(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function.",
    );
  function r(o) {
    return o.displayName || o.name || "Component";
  }
  return function (a) {
    if (typeof a != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var s = [],
      l;
    function c() {
      ((l = e(
        s.map(function (p) {
          return p.props;
        }),
      )),
        u.canUseDOM ? t(l) : n && (l = n(l)));
    }
    var u = (function (p) {
      e8(f, p);
      function f() {
        return p.apply(this, arguments) || this;
      }
      ((f.peek = function () {
        return l;
      }),
        (f.rewind = function () {
          if (f.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state.",
            );
          var w = l;
          return ((l = void 0), (s = []), w);
        }));
      var d = f.prototype;
      return (
        (d.UNSAFE_componentWillMount = function () {
          (s.push(this), c());
        }),
        (d.componentDidUpdate = function () {
          c();
        }),
        (d.componentWillUnmount = function () {
          var w = s.indexOf(this);
          (s.splice(w, 1), c());
        }),
        (d.render = function () {
          return Zw.createElement(a, this.props);
        }),
        f
      );
    })(Lg.PureComponent);
    return (
      vp(u, "displayName", "SideEffect(" + r(a) + ")"),
      vp(u, "canUseDOM", t8),
      u
    );
  };
}
var r8 = n8;
const o8 = To(r8);
var i8 = typeof Element < "u",
  a8 = typeof Map == "function",
  s8 = typeof Set == "function",
  l8 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ja(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ja(e[r], t[r])) return !1;
      return !0;
    }
    var a;
    if (a8 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!Ja(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (s8 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (l8 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (i8 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !Ja(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var c8 = function (t, n) {
  try {
    return Ja(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return (
        console.warn("react-fast-compare cannot handle circular refs"),
        !1
      );
    throw r;
  }
};
const u8 = To(c8);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var wp = Object.getOwnPropertySymbols,
  d8 = Object.prototype.hasOwnProperty,
  f8 = Object.prototype.propertyIsEnumerable;
function p8(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined",
    );
  return Object(e);
}
function h8() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (a) {
      return t[a];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (a) {
        o[a] = a;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var m8 = h8()
  ? Object.assign
  : function (e, t) {
      for (var n, r = p8(e), o, a = 1; a < arguments.length; a++) {
        n = Object(arguments[a]);
        for (var s in n) d8.call(n, s) && (r[s] = n[s]);
        if (wp) {
          o = wp(n);
          for (var l = 0; l < o.length; l++)
            f8.call(n, o[l]) && (r[o[l]] = n[o[l]]);
        }
      }
      return r;
    };
const g8 = To(m8);
var fr = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  $ = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys($).map(function (e) {
  return $[e];
});
var ce = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  As = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  Qi = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  y8 = Object.keys(As).reduce(function (e, t) {
    return ((e[As[t]] = t), e);
  }, {}),
  x8 = [$.NOSCRIPT, $.SCRIPT, $.STYLE],
  Nt = "data-react-helmet",
  v8 =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  w8 = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  b8 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        ((o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o));
      }
    }
    return function (t, n, r) {
      return (n && e(t.prototype, n), r && e(t, r), t);
    };
  })(),
  qe =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  C8 = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t,
      );
    ((e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t)));
  },
  bp = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  j8 = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  ou = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  k8 = function (t) {
    var n = io(t, $.TITLE),
      r = io(t, Qi.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var o = io(t, Qi.DEFAULT_TITLE);
    return n || o || void 0;
  },
  S8 = function (t) {
    return io(t, Qi.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  Vl = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, o) {
        return qe({}, r, o);
      }, {});
  },
  T8 = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[$.BASE] < "u";
      })
      .map(function (r) {
        return r[$.BASE];
      })
      .reverse()
      .reduce(function (r, o) {
        if (!r.length)
          for (var a = Object.keys(o), s = 0; s < a.length; s++) {
            var l = a[s],
              c = l.toLowerCase();
            if (t.indexOf(c) !== -1 && o[c]) return r.concat(o);
          }
        return r;
      }, []);
  },
  Yo = function (t, n, r) {
    var o = {};
    return r
      .filter(function (a) {
        return Array.isArray(a[t])
          ? !0
          : (typeof a[t] < "u" &&
              P8(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  v8(a[t]) +
                  '"',
              ),
            !1);
      })
      .map(function (a) {
        return a[t];
      })
      .reverse()
      .reduce(function (a, s) {
        var l = {};
        s.filter(function (d) {
          for (var m = void 0, w = Object.keys(d), y = 0; y < w.length; y++) {
            var b = w[y],
              g = b.toLowerCase();
            (n.indexOf(g) !== -1 &&
              !(m === ce.REL && d[m].toLowerCase() === "canonical") &&
              !(g === ce.REL && d[g].toLowerCase() === "stylesheet") &&
              (m = g),
              n.indexOf(b) !== -1 &&
                (b === ce.INNER_HTML ||
                  b === ce.CSS_TEXT ||
                  b === ce.ITEM_PROP) &&
                (m = b));
          }
          if (!m || !d[m]) return !1;
          var h = d[m].toLowerCase();
          return (
            o[m] || (o[m] = {}),
            l[m] || (l[m] = {}),
            o[m][h] ? !1 : ((l[m][h] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (d) {
            return a.push(d);
          });
        for (var c = Object.keys(l), u = 0; u < c.length; u++) {
          var p = c[u],
            f = g8({}, o[p], l[p]);
          o[p] = f;
        }
        return a;
      }, [])
      .reverse();
  },
  io = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var o = t[r];
      if (o.hasOwnProperty(n)) return o[n];
    }
    return null;
  },
  E8 = function (t) {
    return {
      baseTag: T8([ce.HREF, ce.TARGET], t),
      bodyAttributes: Vl(fr.BODY, t),
      defer: io(t, Qi.DEFER),
      encode: io(t, Qi.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Vl(fr.HTML, t),
      linkTags: Yo($.LINK, [ce.REL, ce.HREF], t),
      metaTags: Yo(
        $.META,
        [ce.NAME, ce.CHARSET, ce.HTTPEQUIV, ce.PROPERTY, ce.ITEM_PROP],
        t,
      ),
      noscriptTags: Yo($.NOSCRIPT, [ce.INNER_HTML], t),
      onChangeClientState: S8(t),
      scriptTags: Yo($.SCRIPT, [ce.SRC, ce.INNER_HTML], t),
      styleTags: Yo($.STYLE, [ce.CSS_TEXT], t),
      title: k8(t),
      titleAttributes: Vl(fr.TITLE, t),
    };
  },
  iu = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            iu(t);
          }, 0);
    };
  })(),
  Cp = function (t) {
    return clearTimeout(t);
  },
  N8 =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        iu
      : global.requestAnimationFrame || iu,
  F8 =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        Cp
      : global.cancelAnimationFrame || Cp,
  P8 = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  Ko = null,
  A8 = function (t) {
    (Ko && F8(Ko),
      t.defer
        ? (Ko = N8(function () {
            jp(t, function () {
              Ko = null;
            });
          }))
        : (jp(t), (Ko = null)));
  },
  jp = function (t, n) {
    var r = t.baseTag,
      o = t.bodyAttributes,
      a = t.htmlAttributes,
      s = t.linkTags,
      l = t.metaTags,
      c = t.noscriptTags,
      u = t.onChangeClientState,
      p = t.scriptTags,
      f = t.styleTags,
      d = t.title,
      m = t.titleAttributes;
    (au($.BODY, o), au($.HTML, a), R8(d, m));
    var w = {
        baseTag: Pr($.BASE, r),
        linkTags: Pr($.LINK, s),
        metaTags: Pr($.META, l),
        noscriptTags: Pr($.NOSCRIPT, c),
        scriptTags: Pr($.SCRIPT, p),
        styleTags: Pr($.STYLE, f),
      },
      y = {},
      b = {};
    (Object.keys(w).forEach(function (g) {
      var h = w[g],
        v = h.newTags,
        C = h.oldTags;
      (v.length && (y[g] = v), C.length && (b[g] = w[g].oldTags));
    }),
      n && n(),
      u(t, y, b));
  },
  Ig = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  R8 = function (t, n) {
    (typeof t < "u" && document.title !== t && (document.title = Ig(t)),
      au($.TITLE, n));
  },
  au = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var o = r.getAttribute(Nt),
          a = o ? o.split(",") : [],
          s = [].concat(a),
          l = Object.keys(n),
          c = 0;
        c < l.length;
        c++
      ) {
        var u = l[c],
          p = n[u] || "";
        (r.getAttribute(u) !== p && r.setAttribute(u, p),
          a.indexOf(u) === -1 && a.push(u));
        var f = s.indexOf(u);
        f !== -1 && s.splice(f, 1);
      }
      for (var d = s.length - 1; d >= 0; d--) r.removeAttribute(s[d]);
      a.length === s.length
        ? r.removeAttribute(Nt)
        : r.getAttribute(Nt) !== l.join(",") && r.setAttribute(Nt, l.join(","));
    }
  },
  Pr = function (t, n) {
    var r = document.head || document.querySelector($.HEAD),
      o = r.querySelectorAll(t + "[" + Nt + "]"),
      a = Array.prototype.slice.call(o),
      s = [],
      l = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (c) {
          var u = document.createElement(t);
          for (var p in c)
            if (c.hasOwnProperty(p))
              if (p === ce.INNER_HTML) u.innerHTML = c.innerHTML;
              else if (p === ce.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = c.cssText)
                  : u.appendChild(document.createTextNode(c.cssText));
              else {
                var f = typeof c[p] > "u" ? "" : c[p];
                u.setAttribute(p, f);
              }
          (u.setAttribute(Nt, "true"),
            a.some(function (d, m) {
              return ((l = m), u.isEqualNode(d));
            })
              ? a.splice(l, 1)
              : s.push(u));
        }),
      a.forEach(function (c) {
        return c.parentNode.removeChild(c);
      }),
      s.forEach(function (c) {
        return r.appendChild(c);
      }),
      { oldTags: a, newTags: s }
    );
  },
  Wg = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + o : o;
    }, "");
  },
  O8 = function (t, n, r, o) {
    var a = Wg(r),
      s = Ig(n);
    return a
      ? "<" + t + " " + Nt + '="true" ' + a + ">" + ou(s, o) + "</" + t + ">"
      : "<" + t + " " + Nt + '="true">' + ou(s, o) + "</" + t + ">";
  },
  B8 = function (t, n, r) {
    return n.reduce(function (o, a) {
      var s = Object.keys(a)
          .filter(function (u) {
            return !(u === ce.INNER_HTML || u === ce.CSS_TEXT);
          })
          .reduce(function (u, p) {
            var f = typeof a[p] > "u" ? p : p + '="' + ou(a[p], r) + '"';
            return u ? u + " " + f : f;
          }, ""),
        l = a.innerHTML || a.cssText || "",
        c = x8.indexOf(t) === -1;
      return (
        o +
        "<" +
        t +
        " " +
        Nt +
        '="true" ' +
        s +
        (c ? "/>" : ">" + l + "</" + t + ">")
      );
    }, "");
  },
  $g = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return ((r[As[o] || o] = t[o]), r);
    }, n);
  },
  D8 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return ((r[y8[o] || o] = t[o]), r);
    }, n);
  },
  M8 = function (t, n, r) {
    var o,
      a = ((o = { key: n }), (o[Nt] = !0), o),
      s = $g(r, a);
    return [P.createElement($.TITLE, s, n)];
  },
  _8 = function (t, n) {
    return n.map(function (r, o) {
      var a,
        s = ((a = { key: o }), (a[Nt] = !0), a);
      return (
        Object.keys(r).forEach(function (l) {
          var c = As[l] || l;
          if (c === ce.INNER_HTML || c === ce.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            s.dangerouslySetInnerHTML = { __html: u };
          } else s[c] = r[l];
        }),
        P.createElement(t, s)
      );
    });
  },
  Qt = function (t, n, r) {
    switch (t) {
      case $.TITLE:
        return {
          toComponent: function () {
            return M8(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return O8(t, n.title, n.titleAttributes, r);
          },
        };
      case fr.BODY:
      case fr.HTML:
        return {
          toComponent: function () {
            return $g(n);
          },
          toString: function () {
            return Wg(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return _8(t, n);
          },
          toString: function () {
            return B8(t, n, r);
          },
        };
    }
  },
  Hg = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      o = t.encode,
      a = t.htmlAttributes,
      s = t.linkTags,
      l = t.metaTags,
      c = t.noscriptTags,
      u = t.scriptTags,
      p = t.styleTags,
      f = t.title,
      d = f === void 0 ? "" : f,
      m = t.titleAttributes;
    return {
      base: Qt($.BASE, n, o),
      bodyAttributes: Qt(fr.BODY, r, o),
      htmlAttributes: Qt(fr.HTML, a, o),
      link: Qt($.LINK, s, o),
      meta: Qt($.META, l, o),
      noscript: Qt($.NOSCRIPT, c, o),
      script: Qt($.SCRIPT, u, o),
      style: Qt($.STYLE, p, o),
      title: Qt($.TITLE, { title: d, titleAttributes: m }, o),
    };
  },
  z8 = function (t) {
    var n, r;
    return (
      (r = n =
        (function (o) {
          C8(a, o);
          function a() {
            return (w8(this, a), j8(this, o.apply(this, arguments)));
          }
          return (
            (a.prototype.shouldComponentUpdate = function (l) {
              return !u8(this.props, l);
            }),
            (a.prototype.mapNestedChildrenToProps = function (l, c) {
              if (!c) return null;
              switch (l.type) {
                case $.SCRIPT:
                case $.NOSCRIPT:
                  return { innerHTML: c };
                case $.STYLE:
                  return { cssText: c };
              }
              throw new Error(
                "<" +
                  l.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information.",
              );
            }),
            (a.prototype.flattenArrayTypeChildren = function (l) {
              var c,
                u = l.child,
                p = l.arrayTypeChildren,
                f = l.newChildProps,
                d = l.nestedChildren;
              return qe(
                {},
                p,
                ((c = {}),
                (c[u.type] = [].concat(p[u.type] || [], [
                  qe({}, f, this.mapNestedChildrenToProps(u, d)),
                ])),
                c),
              );
            }),
            (a.prototype.mapObjectTypeChildren = function (l) {
              var c,
                u,
                p = l.child,
                f = l.newProps,
                d = l.newChildProps,
                m = l.nestedChildren;
              switch (p.type) {
                case $.TITLE:
                  return qe(
                    {},
                    f,
                    ((c = {}),
                    (c[p.type] = m),
                    (c.titleAttributes = qe({}, d)),
                    c),
                  );
                case $.BODY:
                  return qe({}, f, { bodyAttributes: qe({}, d) });
                case $.HTML:
                  return qe({}, f, { htmlAttributes: qe({}, d) });
              }
              return qe({}, f, ((u = {}), (u[p.type] = qe({}, d)), u));
            }),
            (a.prototype.mapArrayTypeChildrenToProps = function (l, c) {
              var u = qe({}, c);
              return (
                Object.keys(l).forEach(function (p) {
                  var f;
                  u = qe({}, u, ((f = {}), (f[p] = l[p]), f));
                }),
                u
              );
            }),
            (a.prototype.warnOnInvalidChildren = function (l, c) {
              return !0;
            }),
            (a.prototype.mapChildrenToProps = function (l, c) {
              var u = this,
                p = {};
              return (
                P.Children.forEach(l, function (f) {
                  if (!(!f || !f.props)) {
                    var d = f.props,
                      m = d.children,
                      w = bp(d, ["children"]),
                      y = D8(w);
                    switch ((u.warnOnInvalidChildren(f, m), f.type)) {
                      case $.LINK:
                      case $.META:
                      case $.NOSCRIPT:
                      case $.SCRIPT:
                      case $.STYLE:
                        p = u.flattenArrayTypeChildren({
                          child: f,
                          arrayTypeChildren: p,
                          newChildProps: y,
                          nestedChildren: m,
                        });
                        break;
                      default:
                        c = u.mapObjectTypeChildren({
                          child: f,
                          newProps: c,
                          newChildProps: y,
                          nestedChildren: m,
                        });
                        break;
                    }
                  }
                }),
                (c = this.mapArrayTypeChildrenToProps(p, c)),
                c
              );
            }),
            (a.prototype.render = function () {
              var l = this.props,
                c = l.children,
                u = bp(l, ["children"]),
                p = qe({}, u);
              return (
                c && (p = this.mapChildrenToProps(c, p)),
                P.createElement(t, p)
              );
            }),
            b8(a, null, [
              {
                key: "canUseDOM",
                set: function (l) {
                  t.canUseDOM = l;
                },
              },
            ]),
            a
          );
        })(P.Component)),
      (n.propTypes = {
        base: le.object,
        bodyAttributes: le.object,
        children: le.oneOfType([le.arrayOf(le.node), le.node]),
        defaultTitle: le.string,
        defer: le.bool,
        encodeSpecialCharacters: le.bool,
        htmlAttributes: le.object,
        link: le.arrayOf(le.object),
        meta: le.arrayOf(le.object),
        noscript: le.arrayOf(le.object),
        onChangeClientState: le.func,
        script: le.arrayOf(le.object),
        style: le.arrayOf(le.object),
        title: le.string,
        titleAttributes: le.object,
        titleTemplate: le.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var o = t.rewind();
        return (
          o ||
            (o = Hg({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          o
        );
      }),
      r
    );
  },
  L8 = function () {
    return null;
  },
  I8 = o8(E8, A8, Hg)(L8),
  Rs = z8(I8);
Rs.renderStatic = Rs.rewind;
const W8 = {
  title: "Best Nepali Board Games I've Actually Played",
  slug: "best-nepali-board-games",
  excerpt:
    "I've been exploring Nepal's board game scene for a while now. These four games stood out after countless sessions with friends and family.",
  publishedAt: "2025-06-22",
  author: "Yashant",
  readTime: "5 min read",
  category: "Board Games",
  coverImage: "/blogs/best-nepali-board-games/unfurl.png",
  images: [
    "/blogs/best-nepali-board-games/bluff-momo.png",
    "/blogs/best-nepali-board-games/samrajya.png",
    "/blogs/best-nepali-board-games/baag-chal.png",
    "/blogs/best-nepali-board-games/marriage.png",
  ],
};
function kp(e) {
  const t = {
    a: "a",
    em: "em",
    h2: "h2",
    h4: "h4",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...e.components,
  };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs(Rs, {
        children: [
          i.jsx("title", {
            children: "Best Nepali Board Games I've Actually Played",
          }),
          i.jsx("meta", {
            property: "og:title",
            content: "Best Nepali Board Games I've Actually Played",
          }),
          i.jsx("meta", {
            property: "og:description",
            content:
              "I've been exploring Nepal's board game scene for a while now. These four games stood out after countless sessions with friends and family.",
          }),
          i.jsx("meta", {
            property: "og:image",
            content:
              "https://tumlet.com/blogs/best-nepali-board-games/unfurl.png",
          }),
          i.jsx("meta", {
            property: "og:url",
            content: "https://tumlet.com/blog/best-nepali-board-games",
          }),
          i.jsx("meta", { property: "og:type", content: "article" }),
          i.jsx("meta", {
            name: "twitter:card",
            content: "summary_large_image",
          }),
          i.jsx("meta", {
            name: "twitter:title",
            content: "Best Nepali Board Games I've Actually Played",
          }),
          i.jsx("meta", {
            name: "twitter:description",
            content:
              "I've been exploring Nepal's board game scene for a while now. These four games stood out after countless sessions with friends and family.",
          }),
          i.jsx("meta", {
            name: "twitter:image",
            content:
              "https://tumlet.com/blogs/best-nepali-board-games/unfurl.png",
          }),
        ],
      }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "I've been exploring Nepal's board game scene for a while now, and these four games stood out after countless sessions with friends and family. If you're looking for where to play board games in Nepal or discover game nights and cafés, check out our ",
          i.jsx(t.a, {
            href: "/blog/board-game-nepal",
            children: "complete guide to board games in Nepal",
          }),
          ".",
        ],
      }),
      `
`,
      i.jsx(t.h2, { children: "1. Bluff Momo" }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.em, {
          children: "A lying game that gets better the more you lie.",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.img, {
          src: "/blogs/best-nepali-board-games/bluff-momo.png",
          alt: "Bluff Momo",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "Set in the chaos of Kathmandu's streets, Bluff Momo is all about deception. You can pretend to be any character to use their power — like claiming to be the Chor to steal someone's momo. But if someone calls your bluff and you were lying, you lose cards. If you were telling the truth, they lose cards instead.",
      }),
      `
`,
      i.jsx(t.p, {
        children: `It's funny, unpredictable, and full of "I knew it!" moments.`,
      }),
      `
`,
      i.jsx(t.h4, { children: "Why I love it:" }),
      `
`,
      i.jsxs(t.ul, {
        children: [
          `
`,
          i.jsx(t.li, {
            children: "The artwork and characters feel very Nepali",
          }),
          `
`,
          i.jsx(t.li, { children: "It's not luck-based." }),
          `
`,
          i.jsx(t.li, {
            children: "Every game plays out differently — high replayability",
          }),
          `
`,
          i.jsx(t.li, {
            children:
              "Once you learn it, it's all about reading people, not rules",
          }),
          `
`,
        ],
      }),
      `
`,
      i.jsx(t.h4, { children: "What it's not great for:" }),
      `
`,
      i.jsxs(t.ul, {
        children: [
          `
`,
          i.jsx(t.li, {
            children: "Parties — strategy and lying don't mix well with drinks",
          }),
          `
`,
          i.jsx(t.li, { children: "Kids — too much to track" }),
          `
`,
          i.jsx(t.li, {
            children:
              "First-time players — steep learning curve in the beginning",
          }),
          `
`,
        ],
      }),
      `
`,
      i.jsx(t.h4, { children: "My experience:" }),
      `
`,
      i.jsx(t.p, {
        children: `Parents often hesitate to learn this one. But once they get it, they're hooked — they'll keep asking to play "just one more round."`,
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "(For the record, my dad loses every time. He's just too honest to survive in this game.)",
      }),
      `
`,
      i.jsx(t.h4, { children: "Where to buy:" }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "👉 ",
          i.jsx(t.a, {
            href: "https://www.instagram.com/tumlet.boardgames/",
            children: "Instagram @tumlet.boardgames",
          }),
        ],
      }),
      `
`,
      i.jsx(t.hr, {}),
      `
`,
      i.jsx(t.h2, { children: "2. Samrajya" }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.em, {
          children: "Simple dice game based on Nepal's unification history.",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.img, {
          src: "/blogs/best-nepali-board-games/samrajya.png",
          alt: "Samrajya Board",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "You roll the dice, move your token, and follow what the board says. Cards throw in a bit of randomness. The goal is to conquer the valley, just like Prithvi Narayan Shah did.",
      }),
      `
`,
      i.jsx(t.h4, { children: "Why I love it:" }),
      `
`,
      i.jsxs(t.ul, {
        children: [
          `
`,
          i.jsx(t.li, {
            children: "The artwork and characters feel very Nepali",
          }),
          `
`,
          i.jsx(t.li, { children: "Teaches you a bit of history" }),
          `
`,
          i.jsx(t.li, { children: "Easy for kids and grandparents to learm" }),
          `
`,
        ],
      }),
      `
`,
      i.jsx(t.h4, { children: "What it's not great for:" }),
      `
`,
      i.jsxs(t.ul, {
        children: [
          `
`,
          i.jsx(t.li, { children: "Strategy-heavy players" }),
          `
`,
          i.jsx(t.li, { children: "People who hate losing to luck" }),
          `
`,
          i.jsx(t.li, { children: "Less replaybility for adults" }),
          `
`,
        ],
      }),
      `
`,
      i.jsx(t.h4, { children: "My experience:" }),
      `
`,
      i.jsx(t.p, {
        children:
          "I've played this with 7-year-olds and grandparents, and it was really easy to introduce this to them. Nice to have if you want to bring something historical to the table. But not something I'd play every weekend.",
      }),
      `
`,
      i.jsx(t.h4, { children: "Where to buy:" }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "👉 ",
          i.jsx(t.a, {
            href: "https://alchi.co/shop/50",
            children: "Alchi website",
          }),
        ],
      }),
      `
`,
      i.jsx(t.hr, {}),
      `
`,
      i.jsx(t.h2, { children: "3. Baag Chal" }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.em, {
          children: "A timeless Nepali strategy game—no luck, all brainpower.",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.img, {
          src: "/blogs/best-nepali-board-games/baag-chal.png",
          alt: "baag chal",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "One player controls 4 tigers, the other 20 goats, on a 5 ×5 board. Tigers jump goats to capture them; goats try to trap the tigers.",
      }),
      `
`,
      i.jsx(t.h4, { children: "Why I love it:" }),
      `
`,
      i.jsxs(t.ul, {
        children: [
          `
`,
          i.jsx(t.li, { children: "Pure strategy — no luck involved" }),
          `
`,
          i.jsx(t.li, { children: "Easy to learn, hard to master" }),
          `
`,
          i.jsx(t.li, {
            children:
              "Travel-friendly — draw it in chalk and use pebbles if you need to",
          }),
          `
`,
        ],
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "Baag Chal is fading from everyday play, but apps, tournaments, and beautiful wooden boards are helping keep it alive.",
      }),
      `
`,
      i.jsx(t.h4, { children: "Where do I play:" }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "👉 ",
          i.jsx(t.a, {
            href: "https://www.ujjwalpaudel1.com.np/",
            children: "Play it online",
          }),
        ],
      }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "👉 ",
          i.jsx(t.a, {
            href: "https://alchi.co/shop/213",
            children: "Buy a physical copy",
          }),
        ],
      }),
      `
`,
      i.jsx(t.hr, {}),
      `
`,
      i.jsx(t.h2, { children: "4. Marriage card game" }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.em, {
          children:
            "A fast-paced rummy-style game with deep roots in Nepali culture.",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.img, {
          src: "/blogs/best-nepali-board-games/marriage.png",
          alt: "Marriage card game",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "Marriage (aka Nepali Taas) uses three decks, and each player gets 21 cards. The goal: build valid sets — like pure sequences, dublee (pairs), and special combos like Marriage (Tiplu, Jhiplu, Poplu). There's a joker for every round, but you only find out what it is after meeting a few conditions.",
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "It's part strategy, part memory, and part luck — with moments of pure chaos when someone finishes out of nowhere.",
      }),
      `
`,
      i.jsx(t.h4, { children: "Why I like it:" }),
      `
`,
      i.jsxs(t.ul, {
        children: [
          `
`,
          i.jsx(t.li, { children: "Fast-paced but still strategic" }),
          `
`,
          i.jsx(t.li, {
            children: "Easy to jump into once you've seen it played once",
          }),
          `
`,
          i.jsx(t.li, { children: "Really fun with experienced players" }),
          `
`,
        ],
      }),
      `
`,
      i.jsx(t.h4, { children: "What I dislike:" }),
      `
`,
      i.jsxs(t.ul, {
        children: [
          `
`,
          i.jsx(t.li, {
            children: "The rules & the scoring system aren't beginner-friendly",
          }),
          `
`,
          i.jsx(t.li, { children: "You need 3 decks of card to play" }),
          `
`,
          i.jsx(t.li, { children: "The game are usually long" }),
          `
`,
        ],
      }),
      `
`,
      i.jsx(t.h4, { children: "Where to play:" }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "👉 ",
          i.jsx(t.a, {
            href: "https://bhoos.com/marriage/",
            children: "Play it online",
          }),
        ],
      }),
      `
`,
      i.jsx(t.hr, {}),
      `
`,
      i.jsx(t.h2, { children: "Final picks" }),
      `
`,
      i.jsx(t.p, { children: "Here's when I reach for each one:" }),
      `
`,
      i.jsxs(t.ul, {
        children: [
          `
`,
          i.jsx(t.li, {
            children:
              "Bluff Momo → My goto Nepali board game to play with friends",
          }),
          `
`,
          i.jsx(t.li, { children: "Samrajya → Family time with kids" }),
          `
`,
          i.jsx(t.li, { children: "Baag Chal → Deep strategy" }),
          `
`,
          i.jsx(t.li, { children: "Marriage → During Dashain" }),
          `
`,
        ],
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "Support local. The prices are fair, and the experience is one-of-a-kind. Plus, playing something that reflects your own culture hits different.",
      }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "Read more: Guide about ",
          i.jsx(t.a, {
            href: "/blog/board-game-nepal",
            children: "board games in Nepal",
          }),
          ".",
        ],
      }),
    ],
  });
}
function $8(e = {}) {
  const { wrapper: t } = e.components || {};
  return t ? i.jsx(t, { ...e, children: i.jsx(kp, { ...e }) }) : kp(e);
}
const H8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $8, meta: W8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U8 = () =>
    i.jsx("div", {
      style: {
        background: "url(/footer-blog-cta.png) center/contain no-repeat",
        borderRadius: "1.5rem",
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: "3rem 0 0 0",
        padding: "2.5rem 1rem",
        position: "relative",
      },
      children: i.jsx("a", {
        href: "https://www.instagram.com/tumlet.boardgames/",
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "flex flex-row justify-center gap-4 items-center no-underline",
        style: {
          width: "fit-content",
          marginBottom: "1.5rem",
          textDecoration: "none",
        },
        children: i.jsx("span", {
          style: { textDecoration: "none" },
          children: i.jsxs(So, {
            className: "nav-button",
            children: [
              i.jsxs("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  i.jsx("path", {
                    d: "M8.42426 6.71107C8.66127 6.5843 8.81971 6.46566 8.81971 6.46566C8.92765 6.39689 9.03559 6.3699 9.24424 6.2888C9.39416 6.17219 9.62648 6.22593 9.80219 6.1999C9.98289 6.17313 10.2166 6.17742 10.3964 6.1999C10.5948 6.2247 10.7932 6.21171 10.9918 6.23733C11.3165 6.27923 11.6403 6.30481 11.9673 6.32038C12.0538 6.3245 12.166 6.29946 12.2492 6.32623C12.3208 6.34925 12.3843 6.3962 12.4551 6.42215C12.6101 6.47892 12.7388 6.50985 12.8645 6.62685C12.9678 6.72301 13.049 6.83763 13.1289 6.9532C13.284 7.17771 13.4112 7.39876 13.5184 7.65035C13.6303 7.91321 13.8143 8.18482 13.8459 8.46915C13.8569 8.56825 13.893 8.66438 13.9032 8.76392C13.9167 8.89573 13.9079 9.03159 13.9079 9.16397C13.9079 9.77414 13.6344 10.3462 13.3909 10.8916C13.2744 11.1526 13.1164 11.3789 12.9511 11.611C12.8886 11.6986 12.8524 11.7977 12.7908 11.8824C12.6144 12.125 12.437 12.3715 12.2656 12.617C11.9985 12.9996 11.6895 13.4076 11.2655 13.6264C11.0785 13.7229 10.8995 13.7118 10.6959 13.7118C10.4703 13.7118 10.257 13.7094 10.0338 13.6697C9.49905 13.5748 8.98117 13.3768 8.46637 13.217C8.29265 13.1631 8.09703 13.0921 7.94936 12.9854C7.69902 12.8046 7.43677 12.641 7.1867 12.4602C6.91359 12.2628 6.59202 12.0665 6.45446 11.7444C6.31278 11.4125 6.11255 11.0934 6.09769 10.722C6.08541 10.415 6.09973 10.1341 6.17022 9.83655C6.25903 9.46156 6.42962 9.09836 6.47083 8.71246C6.48853 8.54674 6.53953 8.53147 6.65565 8.41535C6.80461 8.26639 6.93358 8.11561 7.06271 7.9498C7.19784 7.77628 7.35474 7.61777 7.50603 7.45852C7.60439 7.35499 7.68276 7.23731 7.79028 7.14269C7.98389 6.97232 8.19538 6.83349 8.42426 6.71107Z",
                    stroke: "#FEF5E0",
                    strokeWidth: "0.6",
                    strokeLinecap: "round",
                  }),
                  i.jsx("path", {
                    d: "M9.15927 5.76232C9.28098 5.68155 9.37476 5.59377 9.51018 5.53773C9.58889 5.50963 9.62931 5.47925 9.71488 5.47925C9.95413 5.47925 10.1821 5.53099 10.4214 5.54358C10.6879 5.55761 10.9522 5.65463 11.2133 5.70149C11.597 5.77036 11.8977 6.03771 12.2052 6.25828C12.4142 6.40818 12.6129 6.47849 12.7842 6.67587C12.9558 6.87352 13.1292 7.06057 13.279 7.2736C13.4071 7.45576 13.461 7.68259 13.527 7.89121C13.6269 8.20681 13.7517 8.53122 13.927 8.81294L13.9313 8.81987C13.9882 8.91116 14.0133 8.95139 13.9996 9.06092C13.9869 9.16251 13.9785 9.26032 13.9785 9.36271C13.9785 9.98103 13.7598 10.5604 13.6206 11.1559C13.5572 11.427 13.4778 11.7046 13.4404 11.9805C13.4272 12.0783 13.4575 12.2024 13.4089 12.2917C13.2621 12.5607 13.0743 12.8325 12.8883 13.0754C12.5954 13.4581 12.2368 13.7215 11.8683 14.0275C11.7161 14.154 11.5289 14.2545 11.356 14.3492C11.1419 14.4665 10.9003 14.6535 10.6612 14.7177C10.4527 14.7736 10.1659 14.7184 9.95584 14.6908C9.73166 14.6613 9.51479 14.6171 9.28794 14.6171C9.06881 14.6171 8.91374 14.5954 8.72296 14.4791C8.5053 14.3463 8.27427 14.239 8.06441 14.0931C7.92759 13.9979 7.72184 13.8876 7.62928 13.7421C7.49002 13.5233 7.27108 13.3691 7.1146 13.1643C6.93992 12.9356 6.78019 12.6813 6.67128 12.4145C6.57114 12.1692 6.4567 11.9272 6.37768 11.6741C6.31902 11.4862 6.32468 11.2785 6.26772 11.0962C6.17811 10.8095 5.96091 10.5635 5.85598 10.2798C5.75822 10.0155 5.83025 9.72275 5.83025 9.45044C5.83025 9.17118 5.94037 8.90794 6.07121 8.66322C6.23802 8.35122 6.41543 7.99573 6.65373 7.73095C6.87466 7.48547 7.04761 7.17816 7.31345 6.97649C7.46386 6.86239 7.62455 6.78307 7.78368 6.68406C8.01443 6.54048 8.24763 6.38898 8.46445 6.22436C8.68641 6.05583 8.92722 5.91631 9.15927 5.76232Z",
                    stroke: "#FEF5E0",
                    strokeWidth: "0.6",
                    strokeLinecap: "round",
                  }),
                  i.jsx("path", {
                    d: "M14.9493 4.77962C14.7485 4.77962 14.5331 4.75061 14.3896 4.91197C14.2976 5.01548 14.2045 5.10836 14.1225 5.22079C14.0297 5.34787 14.01 5.54797 14.0081 5.7028C14.0043 6.00915 14.0344 6.28299 14.3529 6.40377C14.5551 6.48048 14.8648 6.49539 15.0669 6.39724C15.2642 6.30138 15.3497 6.04252 15.397 5.84659C15.4483 5.6337 15.4164 5.43807 15.3463 5.23549C15.2984 5.09707 15.1673 5.01656 15.111 4.88991C15.0776 4.81475 14.9979 4.77962 14.9198 4.77962",
                    stroke: "#FEF5E0",
                    strokeWidth: "0.647652",
                    strokeLinecap: "round",
                  }),
                  i.jsx("path", {
                    d: "M3.31758 2.91839C2.90027 3.38207 2.65265 3.88497 2.39987 4.44669C2.33007 4.60181 2.28866 4.76668 2.21199 4.92C2.1447 5.05458 2.02475 5.27296 2.01689 5.42221C1.98627 6.00398 1.98437 6.59119 1.98437 7.17813C1.98437 7.63879 1.98437 8.09945 1.98437 8.56011C1.98437 8.80941 1.98437 9.05871 1.98437 9.308C1.98437 9.59607 2.04941 9.88373 2.04941 10.1715C2.04941 10.6586 2.11444 11.1417 2.11444 11.6312C2.11444 11.913 2.13818 12.2159 2.17948 12.4947C2.27787 13.1588 2.4934 13.7939 2.57691 14.462C2.61811 14.7916 2.65798 14.9757 2.82259 15.2857C2.95893 15.5425 3.00485 15.8532 3.15499 16.0951C3.24896 16.2464 3.30984 16.4697 3.35732 16.6406C3.40596 16.8157 3.52536 16.9978 3.61746 17.1537C3.78181 17.4318 3.96673 17.4984 4.2389 17.6306C4.6228 17.817 4.99882 18.0178 5.38061 18.2087C5.80196 18.4193 6.32452 18.5317 6.78246 18.6422C7.12676 18.7253 7.55271 18.8362 7.90791 18.8175C8.55462 18.7834 9.20353 18.7558 9.84991 18.7199C10.3288 18.6933 10.8054 18.649 11.2843 18.6224C11.644 18.6024 12.0088 18.467 12.3555 18.3803C12.8465 18.2575 13.3394 18.0747 13.8188 17.9088C14.2387 17.7634 14.6536 17.6072 15.0563 17.4283C15.2357 17.3485 15.379 17.1928 15.5332 17.067C15.7494 16.8905 15.9738 16.723 16.1871 16.5431C16.3669 16.3914 16.5307 16.1898 16.7219 16.0553C17.0362 15.8341 17.2766 15.5581 17.365 15.1701C17.4551 14.7745 17.4446 14.3646 17.5926 13.9814C17.6901 13.7291 17.8108 13.4827 17.9105 13.2263C18.0392 12.8955 18.1407 12.5668 18.2104 12.2183C18.2726 11.9072 18.406 11.6288 18.485 11.3241C18.6244 10.7863 18.5005 10.1592 18.4688 9.61872C18.4397 9.12557 18.3622 8.63553 18.3405 8.141C18.327 7.83472 18.2797 7.53601 18.2429 7.23233C18.2289 7.11686 18.1779 7.03091 18.1779 6.91258C18.1779 6.13648 17.8659 5.37488 17.7389 4.61289C17.6944 4.34599 17.6742 4.00058 17.5619 3.7548C17.3908 3.38056 17.1039 3.09639 16.8122 2.82084C16.6492 2.6669 16.4922 2.57054 16.2919 2.47037C16.2119 2.43037 16.1452 2.39811 16.0571 2.39811C15.8295 2.39811 15.6018 2.39659 15.3742 2.39811C15.1151 2.39985 14.8574 2.46757 14.601 2.46315C14.1433 2.45526 13.7588 2.04782 13.2931 2.04043C13.0795 2.03703 12.8637 2.03449 12.65 2.04043C12.3814 2.04789 12.1196 2.1089 11.8443 2.10546C11.7231 2.10395 11.6192 2.04438 11.5047 2.04043C11.2824 2.03276 11.0586 2.04043 10.8363 2.04043C9.75416 2.04043 8.67206 2.04043 7.58997 2.04043C7.1862 2.04043 6.77074 2.14789 6.37419 2.21927C5.95722 2.29432 5.53608 2.33874 5.12589 2.44508C4.8921 2.5057 4.67065 2.51347 4.43942 2.60767C4.25384 2.68327 4.03871 2.73409 3.83966 2.754C3.71469 2.76649 3.61163 2.74577 3.49461 2.78832C3.2742 2.86847 3.06738 2.92543 2.86234 3.04846",
                    stroke: "#FEF5E0",
                    strokeWidth: "0.8",
                    strokeLinecap: "round",
                  }),
                  i.jsx("path", {
                    d: "M12.2586 1.13007C11.9873 1.13007 11.7172 1.1219 11.4529 1.1951C11.1798 1.27074 10.9799 1.32517 10.6906 1.32517C10.4641 1.32517 10.24 1.32663 10.0221 1.39743C9.91776 1.43136 9.80126 1.5147 9.68975 1.52027C9.25178 1.54217 8.81322 1.50846 8.37642 1.57086C8.11837 1.60772 7.84744 1.65189 7.5924 1.69912C7.38645 1.73726 7.17713 1.7558 6.97276 1.79667C6.64137 1.86295 6.32666 1.86813 5.99364 1.97732C5.45549 2.15376 4.93779 2.395 4.39669 2.56082C3.85322 2.72737 3.32016 2.7956 2.78889 3.02329C2.56658 3.11857 2.45284 3.13262 2.33365 3.33401C2.13234 3.67417 1.89377 3.9931 1.69234 4.33301C1.40119 4.82433 1.36675 5.3188 1.30033 5.86673C1.20166 6.68075 1.15781 7.51973 1.0149 8.32358C0.986291 8.48453 1.00768 8.66542 1.00768 8.8294C1.00768 9.21359 1.00768 9.59777 1.00768 9.98195C1.00768 10.7106 1.00768 11.4392 1.00768 12.1678C1.00768 12.5405 1.12797 12.8806 1.21904 13.2409C1.33042 13.6816 1.42212 14.1176 1.5135 14.5614C1.56646 14.8187 1.66722 15.0425 1.7086 15.2967C1.78511 15.7667 1.96132 16.246 2.17107 16.6733C2.28479 16.9049 2.37704 17.1414 2.47095 17.3814C2.57815 17.6554 2.8071 17.872 3.02374 18.0643C3.09919 18.1312 3.23641 18.3281 3.33085 18.3569C3.53463 18.4192 3.72493 18.492 3.92338 18.5773C4.30488 18.7413 4.68145 18.7916 5.08858 18.8519C5.26485 18.878 5.42961 18.9495 5.61066 18.9495C5.88103 18.9495 6.15141 18.9495 6.42178 18.9495C6.86136 18.9495 7.30095 18.9495 7.74053 18.9495C8.07688 18.9495 8.40783 18.9418 8.74314 18.9169C8.97361 18.8999 9.17294 18.8023 9.3971 18.7616C9.61549 18.7219 9.83167 18.7051 10.0474 18.6496C10.3113 18.5817 10.5765 18.5873 10.8495 18.534C11.7113 18.3655 12.5583 18.1525 13.413 17.9595C13.6063 17.9158 13.7988 17.9133 13.9874 17.8583C14.4795 17.7148 14.9836 17.6961 15.4923 17.6488C15.781 17.6219 16.0553 17.4784 16.3232 17.3742C16.4769 17.3144 16.6951 17.2505 16.811 17.1285C16.915 17.019 17.0022 16.8821 17.0964 16.7636C17.2207 16.6072 17.369 16.478 17.4939 16.3228C17.6334 16.1493 17.7842 15.9625 17.8841 15.7628C18.0531 15.4246 18.2798 15.101 18.3104 14.7186C18.3423 14.3201 18.6313 14.0325 18.7458 13.6636C18.8052 13.472 18.9091 13.2865 18.9571 13.0946C19.028 12.8112 18.9896 12.4946 18.9896 12.204C18.9896 11.8853 18.8665 11.5843 18.8596 11.2682C18.8466 10.6725 18.7247 10.0882 18.6898 9.4942C18.6602 8.9911 18.5876 8.40634 18.6898 7.90808C18.7656 7.53837 18.697 7.09169 18.697 6.71579C18.697 6.19991 18.5669 5.69205 18.5669 5.18026C18.5669 4.86246 18.4629 4.4577 18.37 4.15597C18.3026 3.937 18.2162 3.73047 18.1605 3.50743C18.1437 3.44045 18.1354 3.27589 18.0629 3.24368C17.9843 3.20875 17.9942 3.15375 17.978 3.0811C17.9488 2.94961 17.7886 2.80828 17.707 2.70715C17.486 2.43311 17.2513 2.19703 16.9989 1.95022C16.7927 1.74861 16.6102 1.80004 16.3558 1.70815C16.1513 1.63433 15.9619 1.51713 15.7632 1.42995C15.5556 1.33883 15.3212 1.28544 15.102 1.22762C14.704 1.12257 14.3633 1.03252 13.9495 1.03252C13.5623 1.03252 13.1828 1 12.7951 1C12.5201 1 12.2679 1.09755 11.9985 1.09755",
                    stroke: "#FEF5E0",
                    strokeWidth: "0.8",
                    strokeLinecap: "round",
                  }),
                ],
              }),
              "DM us to order",
            ],
          }),
        }),
      }),
    }),
  V8 = {
    title: "Board Games in Nepal — A Quick Guide",
    slug: "board-game-nepal",
    excerpt:
      "Board games in Nepal, especially in Kathmandu, are no longer just for kids. Here's a tour of game nights, cafés with games, and local Nepali board games you can buy.",
    publishedAt: "2025-01-13",
    author: "Yashant",
    readTime: "8 min read",
    category: "Board Games",
    featured: !0,
  };
function Sp(e) {
  const t = {
    a: "a",
    br: "br",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...e.components,
  };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs(Rs, {
        children: [
          i.jsx("title", {
            children:
              "Board Games in Nepal – Where to Play, Events, and Local Games",
          }),
          i.jsx("meta", {
            name: "description",
            content:
              "Discover board games in Nepal. Find game nights, cafés with games, and Nepali-made games like Firiri and Bagh Chal. Play, meet people, and have fun.",
          }),
          i.jsx("meta", {
            property: "og:title",
            content:
              "Board Games in Nepal – Where to Play, Events, and Local Games",
          }),
          i.jsx("meta", {
            property: "og:description",
            content:
              "Discover board games in Nepal. Find game nights, cafés with games, and Nepali-made games like Firiri and Bagh Chal. Play, meet people, and have fun.",
          }),
          i.jsx("meta", {
            property: "og:url",
            content: "https://tumlet.com/blog/board-game-nepal",
          }),
          i.jsx("meta", { property: "og:type", content: "article" }),
          i.jsx("meta", {
            name: "twitter:card",
            content: "summary_large_image",
          }),
          i.jsx("meta", {
            name: "twitter:title",
            content:
              "Board Games in Nepal – Where to Play, Events, and Local Games",
          }),
          i.jsx("meta", {
            name: "twitter:description",
            content:
              "Discover board games in Nepal. Find game nights, cafés with games, and Nepali-made games like Firiri and Bagh Chal. Play, meet people, and have fun.",
          }),
        ],
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "Board games in Nepal, especially in Kathmandu, are no longer just for kids.",
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "These days, you can spot people playing all kinds of games in different corners of the city. Walk into a local chiya pasal and you might see at least one group deep into an online game of Ludo.",
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "In the past few years, game nights have popped up in cafés, bars, and even offices. People now meet not just to eat, but to sit around a table, laugh, and PLAY.",
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "If you've been searching for board games in Nepal or wondering where to play, this guide is for you. Here's a tour of game nights, cafés with games, and local Nepali board games you can buy.",
      }),
      `
`,
      i.jsx(t.h2, { children: "1. Board Game Nights in Nepal" }),
      `
`,
      i.jsx(t.h3, { children: "Tumlet Game Nights" }),
      `
`,
      i.jsx(t.p, {
        children:
          "Tumlet is a Nepali board game brand that makes games for young adults with high replay value. We want to grow the board game culture in Nepal, so we host free game nights every month.",
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "We bring a mix of games (Nepali and bestsellers) for different tastes and love teaching them to new players. You can meet people, try games you've never seen before, and spark new connections.",
      }),
      `
`,
      i.jsx(t.p, { children: "Or just play for the fun of it." }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "📩 ",
          i.jsx(t.strong, { children: "Note:" }),
          " We usually host games nights 1st friday of each month. ",
          i.jsx(t.a, {
            href: "https://www.instagram.com/tumlet.boardgames/",
            children: "DM us on Instagram",
          }),
          " to know when our next game night is.",
        ],
      }),
      `
`,
      i.jsx(t.h3, { children: "Nextdoor – Free Game Night Every Thursday" }),
      `
`,
      i.jsx(t.p, {
        children:
          "Nextdoor, in Sanepa, runs a free board game night every Thursday from 6 PM. You can just walk in, pick a game, and join a table. If you're new, they'll happily teach you how to play.",
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "It's a friendly, inclusive space where anyone can join — no matter how much experience you have. It's the perfect place to wind down, connect with new people, and learn some of the most popular games.",
      }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "📱 ",
          i.jsx(t.a, {
            href: "https://www.instagram.com/stay.nextdoor/?hl=en",
            children: "Follow them on Instagram",
          }),
          " for updates.",
        ],
      }),
      `
`,
      i.jsx(t.h2, { children: "2. Cafés and Restaurants with Board Games" }),
      `
`,
      i.jsx(t.p, {
        children:
          "Several cafés in Kathmandu keep board games ready for customers. You only pay for your food or drinks, and the games are free to play.",
      }),
      `
`,
      i.jsx(t.h3, { children: "The Chiya Spot" }),
      `
`,
      i.jsx(t.p, {
        children: i.jsx(t.a, {
          href: "https://www.instagram.com/thechiyaspot/?hl=en",
          children: "Instagram",
        }),
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "With several branches around the city, Chiyaspot is a hangout spot for tea lovers. You'll often see a group balancing a Jenga tower while sipping tea. I love their seating options. You can even sit on the floor, which is perfect for board games.",
      }),
      `
`,
      i.jsx(t.h3, { children: "Mellow Bakeshop" }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "📍 ",
          i.jsx(t.a, {
            href: "https://share.google/Q6ZlR8tW7Ag2OTbgM",
            children: "Google Maps",
          }),
        ],
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "This is your stop if you want the best cheesecake in town while playing a round of a Nepali board game. Their game collection is small, but if you have a sweet tooth and a soft spot for games, Mellow is worth the trip.",
      }),
      `
`,
      i.jsx(t.h3, { children: "Khushi Coffee House" }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "📍 ",
          i.jsx(t.a, {
            href: "https://share.google/83DZP4WXkVjfc634D",
            children: "Google Maps",
          }),
        ],
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "Khusi Café might just have the biggest board game collection in the city. From Ticket to Ride to Catan, they've got it all. The owner is passionate about games and has created a cozy space where you can play for hours without any extra charge.",
      }),
      `
`,
      i.jsx(t.h3, { children: "☕️ Daily Drip" }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "📍 ",
          i.jsx(t.a, {
            href: "https://share.google/cPyPdVcCpgk4Mvg5E",
            children: "Google Maps",
          }),
        ],
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "A fun little café run by friendly owners who are always happy to join you for a game. They've got a good collection, and the coffee is excellent. If you go, try a few rounds of Guess Who with friends. Btw I've never lost a single round.",
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "These spots are perfect for long, lazy game days when you don't want to host at home.",
      }),
      `
`,
      i.jsx(t.h2, { children: "3. Nepali Board Games You Can Try and Buy" }),
      `
`,
      i.jsx(t.p, {
        children:
          "Board game Nepal is not just about imported games — local creators are making amazing ones too.",
      }),
      `
`,
      i.jsx(t.h3, { children: "Bluff Momo – By Tumlet" }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "Our first game, Bluff Momo, is all about deception and Nepali humor. You'll meet characters like Hante, Aama, and Bhatti ko Dai. Bluff momo has a bit of a learning curve to it. You need to memorize different powers. But once you do that, you can end of playing for hours. I've written a detailed review of ",
          i.jsx(t.a, {
            href: "/blog/best-nepali-board-games",
            children:
              "Bluff Momo and other Nepali board games I've actually played",
          }),
          " if you want to know more.",
        ],
      }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "💰 ",
          i.jsx(t.strong, { children: "Price:" }),
          " Rs. 1490",
          i.jsx(t.br, {}),
          `
`,
          "📩 ",
          i.jsx(t.a, {
            href: "https://www.instagram.com/tumlet.boardgames/",
            children: "Order via DM on Instagram",
          }),
        ],
      }),
      `
`,
      i.jsx(t.h3, { children: "Samrajya – By Alchi" }),
      `
`,
      i.jsx(t.p, {
        children:
          "Alchi is another Nepali brand making games with cultural and educational twists for Nepali Kids. Samrajya was their first game and is filled with Nepali touches. It's simple enough for kids, but still fun for adults.",
      }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "They have plenty more games worth checking out. See the full collection here: ",
          i.jsx(t.a, { href: "https://alchi.co", children: "alchi.co" }),
        ],
      }),
      `
`,
      i.jsxs(t.p, {
        children: [
          "Here's my ",
          i.jsx(t.a, {
            href: "https://tumlet.com/blog/best-nepali-board-games",
            children: "best 5 picks for Nepali board games",
          }),
          " →",
        ],
      }),
      `
`,
      i.jsx(t.h2, { children: "Final Thoughts" }),
      `
`,
      i.jsx(t.p, {
        children:
          "The board game culture in Nepal is still small, but it's growing fast. At Tumlet, we're on a mission to spread playfulness among young Nepalis, and board games are our favorite way to do it.",
      }),
      `
`,
      i.jsx(t.p, {
        children:
          "So here's an open invite: join one of our game nights or just say hi. You're never too old to have fun and your next great evening might just be one roll of the dice away.",
      }),
      `
`,
      `
`,
      i.jsx(U8, {}),
    ],
  });
}
function G8(e = {}) {
  const { wrapper: t } = e.components || {};
  return t ? i.jsx(t, { ...e, children: i.jsx(Sp, { ...e }) }) : Sp(e);
}
const q8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: G8, meta: V8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Tp = Object.assign({
    "../blogs/best-nepali-board-games/index.mdx": H8,
    "../blogs/board-game-nepal/index.mdx": q8,
  }),
  bd = {};
for (const e in Tp) {
  const t = Tp[e],
    n = t.meta || t.frontmatter;
  n && n.slug && (bd[n.slug] = { ...n, component: t.default });
}
const Y8 = () =>
    Object.values(bd).sort(
      (e, t) =>
        new Date(t.publishedAt).getTime() - new Date(e.publishedAt).getTime(),
    ),
  K8 = (e) => bd[e];
function Qo(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function Xo(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function Q8(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
const X8 = () => {
    const e = Y8();
    return (
      x.useEffect(() => {
        ((document.title =
          "Tumlet Blog | Stories from Nepal's board game scene"),
          Qo(
            "description",
            "Stories, insights, and discoveries from the world of Nepali games and play. Read about board game culture in Nepal and beyond.",
          ),
          Q8("https://tumlet.com/blog/"),
          Xo("og:title", "Tumlet Blog | Stories from Nepal's board game scene"),
          Xo(
            "og:description",
            "Stories, insights, and discoveries from the world of Nepali games and play. Read about board game culture in Nepal and beyond.",
          ),
          Xo("og:type", "website"),
          Xo("og:url", "https://tumlet.com/blog/"),
          Xo("og:image", "https://tumlet.com/unfurl.png"),
          Qo("twitter:card", "summary_large_image"),
          Qo(
            "twitter:title",
            "Tumlet Blog | Stories from Nepal's board game scene",
          ),
          Qo(
            "twitter:description",
            "Stories, insights, and discoveries from the world of Nepali games and play. Read about board game culture in Nepal and beyond.",
          ),
          Qo("twitter:image", "https://tumlet.com/unfurl.png"));
      }, []),
      i.jsxs("div", {
        className: "min-h-screen flex flex-col",
        style: {
          background: "#ffffff",
          color: "#130D01",
          fontFamily: "'Baloo 2', system-ui, sans-serif",
        },
        children: [
          i.jsx(Ze, {}),
          i.jsxs("main", {
            className: "flex-1",
            children: [
              i.jsxs("section", {
                className: "max-w-[760px] mx-auto px-6 pt-16 pb-12",
                children: [
                  i.jsx("span", {
                    style: {
                      display: "inline-block",
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#F16147",
                      background: "#FDE8E4",
                      padding: "6px 14px",
                      borderRadius: "999px",
                      marginBottom: "20px",
                    },
                    children: "Tumlet · Stories",
                  }),
                  i.jsx("h1", {
                    style: {
                      fontFamily: "'Baloo 2', system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(36px, 5vw, 60px)",
                      color: "#130D01",
                      lineHeight: 1.1,
                      margin: "0 0 16px 0",
                    },
                    children: "The Blog",
                  }),
                  i.jsx("p", {
                    style: {
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontSize: "20px",
                      color: "#4B5563",
                      lineHeight: 1.5,
                      margin: 0,
                    },
                    children:
                      "Stories, insights, and discoveries from the world of Nepali games and play.",
                  }),
                ],
              }),
              i.jsxs("section", {
                className: "max-w-[760px] mx-auto px-6 pb-24",
                children: [
                  e.map((t, n) =>
                    i.jsxs(
                      "article",
                      {
                        style: {
                          paddingBottom: "40px",
                          marginBottom: "40px",
                          borderBottom:
                            n !== e.length - 1 ? "1px solid #f3f4f6" : "none",
                        },
                        children: [
                          i.jsx("div", {
                            style: { marginBottom: "12px" },
                            children: i.jsx("span", {
                              style: {
                                fontFamily: "'Outfit', system-ui, sans-serif",
                                fontWeight: 700,
                                fontSize: "12px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "#F16147",
                                background: "#FDE8E4",
                                padding: "4px 12px",
                                borderRadius: "999px",
                              },
                              children: t.category,
                            }),
                          }),
                          i.jsx(X, {
                            to: `/blog/${t.slug}/`,
                            style: { textDecoration: "none" },
                            children: i.jsx("h2", {
                              style: {
                                fontFamily: "'Baloo 2', system-ui, sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(28px, 3.5vw, 36px)",
                                color: "#130D01",
                                lineHeight: 1.15,
                                margin: "0 0 12px 0",
                                textDecoration: "none",
                                cursor: "pointer",
                              },
                              onMouseEnter: (r) =>
                                (r.currentTarget.style.textDecoration =
                                  "underline"),
                              onMouseLeave: (r) =>
                                (r.currentTarget.style.textDecoration = "none"),
                              children: t.title,
                            }),
                          }),
                          i.jsx("p", {
                            style: {
                              fontFamily: "'Outfit', system-ui, sans-serif",
                              fontSize: "18px",
                              color: "#4B5563",
                              lineHeight: 1.6,
                              margin: "0 0 16px 0",
                            },
                            children: t.excerpt,
                          }),
                          i.jsxs("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontFamily: "'Outfit', system-ui, sans-serif",
                              fontSize: "13px",
                              color: "#6B6B6B",
                              marginBottom: "16px",
                            },
                            children: [
                              i.jsxs("span", { children: ["By ", t.author] }),
                              i.jsx("span", {
                                style: {
                                  width: 4,
                                  height: 4,
                                  borderRadius: "50%",
                                  background: "#cbcbcb",
                                  display: "inline-block",
                                  flexShrink: 0,
                                },
                              }),
                              i.jsx("span", {
                                children: new Date(
                                  t.publishedAt,
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }),
                              }),
                              i.jsx("span", {
                                style: {
                                  width: 4,
                                  height: 4,
                                  borderRadius: "50%",
                                  background: "#cbcbcb",
                                  display: "inline-block",
                                  flexShrink: 0,
                                },
                              }),
                              i.jsx("span", { children: t.readTime }),
                            ],
                          }),
                          i.jsx(X, {
                            to: `/blog/${t.slug}/`,
                            style: {
                              fontFamily: "'Outfit', system-ui, sans-serif",
                              fontWeight: 500,
                              fontSize: "15px",
                              color: "#F16147",
                              textDecoration: "underline",
                              textUnderlineOffset: "3px",
                            },
                            children: "Read →",
                          }),
                        ],
                      },
                      t.slug,
                    ),
                  ),
                  e.length === 0 &&
                    i.jsxs("div", {
                      style: { textAlign: "center", padding: "64px 0" },
                      children: [
                        i.jsx("h2", {
                          style: {
                            fontFamily: "'Baloo 2', system-ui, sans-serif",
                            fontWeight: 700,
                            fontSize: "24px",
                            color: "#130D01",
                            marginBottom: "16px",
                          },
                          children: "No blog posts yet",
                        }),
                        i.jsx("p", {
                          style: {
                            fontFamily: "'Outfit', system-ui, sans-serif",
                            color: "#6B6B6B",
                          },
                          children: "Check back soon for our first articles!",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          i.jsx(Le, {}),
        ],
      })
    );
  },
  J8 = ({ children: e, className: t = "" }) =>
    i.jsx("div", {
      className: `blog-typography ${t} mdx-outer`,
      children: i.jsx("div", { className: "mdx-content", children: e }),
    }),
  Z8 = `
  .blog-typography {
    background: transparent;
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-size: 19px;
    line-height: 1.7;
    color: #2a241a;
    word-break: break-word;
  }

  .mdx-outer {
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .mdx-content {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-size: 19px;
    line-height: 1.7;
    color: #2a241a;
  }

  .blog-typography h1,
  .mdx-content h1 {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 800;
    font-size: clamp(36px, 5vw, 56px);
    color: #130D01;
    letter-spacing: -0.01em;
    margin-bottom: 24px;
    margin-top: 0;
    line-height: 1.1;
  }

  .blog-typography h2,
  .mdx-content h2 {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 4vw, 40px);
    color: #1F5F3A;
    margin-top: 56px;
    margin-bottom: 18px;
    line-height: 1.15;
  }

  .blog-typography h3,
  .mdx-content h3 {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: #1F5F3A;
    margin-top: 36px;
    margin-bottom: 12px;
    line-height: 1.2;
  }

  .blog-typography h4,
  .mdx-content h4 {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #130D01;
    margin-top: 32px;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .blog-typography p,
  .mdx-content p {
    font-size: 19px;
    line-height: 1.7;
    color: #2a241a;
    margin-bottom: 22px;
    margin-top: 0;
  }

  .blog-typography p strong,
  .mdx-content p strong {
    color: #130D01;
    font-weight: 700;
  }

  .blog-typography p em,
  .mdx-content p em {
    font-style: italic;
    color: #F16147;
    font-weight: 600;
  }

  .blog-typography a,
  .mdx-content a {
    color: #F16147;
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 600;
    transition: color 0.2s;
  }

  .blog-typography a:hover,
  .mdx-content a:hover {
    color: #c94f3a;
  }

  .blog-typography ul,
  .mdx-content ul {
    list-style: none;
    padding-left: 0;
    font-size: 19px;
    line-height: 1.65;
    margin-bottom: 24px;
    margin-top: 0;
  }

  .blog-typography ul li,
  .mdx-content ul li {
    position: relative;
    padding-left: 28px;
    margin-bottom: 10px;
  }

  .blog-typography ul li::before,
  .mdx-content ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 14px;
    width: 14px;
    height: 3px;
    background: #F16147;
    border-radius: 2px;
  }

  .blog-typography ol,
  .mdx-content ol {
    font-size: 19px;
    line-height: 1.65;
    margin-bottom: 24px;
    margin-top: 0;
    padding-left: 28px;
  }

  .blog-typography ol li::marker,
  .mdx-content ol li::marker {
    color: #F16147;
    font-weight: 700;
  }

  .blog-typography blockquote,
  .mdx-content blockquote {
    font-family: 'Baloo 2', system-ui, sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.3;
    color: #130D01;
    border-left: 6px solid #F3B952;
    padding: 10px 0 10px 28px;
    margin: 40px 0;
  }

  .blog-typography blockquote p,
  .mdx-content blockquote p {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
  }

  .blog-typography hr,
  .mdx-content hr {
    border: 0;
    margin: 64px 0;
    text-align: center;
  }

  .blog-typography hr::after,
  .mdx-content hr::after {
    content: "✦  ✦  ✦";
    color: #F16147;
    letter-spacing: 0.5em;
    font-size: 14px;
  }

  .blog-typography img,
  .mdx-content img {
    width: 100%;
    border-radius: 14px;
    margin: 36px 0;
    display: block;
  }

  .blog-typography code,
  .mdx-content code {
    font-family: 'Menlo', 'Monaco', 'Consolas', monospace;
    font-size: 0.9em;
    background: #f1f5f9;
    padding: 0.2em 0.5em;
    border-radius: 0.3em;
    color: #dc2626;
  }

  .blog-typography pre,
  .mdx-content pre {
    font-family: 'Menlo', 'Monaco', 'Consolas', monospace;
    font-size: 1em;
    line-height: 1.5;
    background: #1e293b;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 0.75rem;
    overflow-x: auto;
    margin: 2.5rem 0;
  }

  /* Responsive typography */
  @media (max-width: 768px) {
    .blog-typography,
    .mdx-content {
      font-size: 17px;
    }

    .blog-typography p,
    .mdx-content p,
    .blog-typography ul,
    .mdx-content ul,
    .blog-typography ol,
    .mdx-content ol {
      font-size: 17px;
      margin-bottom: 18px;
    }

    .blog-typography blockquote,
    .mdx-content blockquote {
      font-size: 22px;
      padding: 8px 0 8px 20px;
    }

    .blog-typography img,
    .mdx-content img {
      margin: 24px 0;
    }
  }

  /* Print styles */
  @media print {
    .blog-typography,
    .mdx-content {
      font-size: 12pt;
      line-height: 1.6;
    }

    .blog-typography h1, .blog-typography h2, .blog-typography h3,
    .mdx-content h1, .mdx-content h2, .mdx-content h3 {
      page-break-after: avoid;
    }

    .blog-typography p, .blog-typography blockquote,
    .mdx-content p, .mdx-content blockquote {
      orphans: 3;
      widows: 3;
    }
  }
`,
  su = {},
  Ug = P.createContext(su);
function e6(e) {
  const t = P.useContext(Ug);
  return P.useMemo(
    function () {
      return typeof e == "function" ? e(t) : { ...t, ...e };
    },
    [t, e],
  );
}
function t6(e) {
  let t;
  return (
    e.disableParentContext
      ? (t =
          typeof e.components == "function"
            ? e.components(su)
            : e.components || su)
      : (t = e6(e.components)),
    P.createElement(Ug.Provider, { value: t }, e.children)
  );
}
function Jo(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function Zo(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function n6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
function r6(e) {
  let t = document.getElementById("blog-jsonld");
  (t ||
    ((t = document.createElement("script")),
    (t.type = "application/ld+json"),
    (t.id = "blog-jsonld"),
    document.head.appendChild(t)),
    (t.textContent = JSON.stringify(e)));
}
const o6 = () => {
    var a;
    const { slug: e } = uw(),
      t = e ? K8(e) : void 0,
      [n, r] = x.useState(!1);
    if (
      (x.useEffect(() => {
        if (t) {
          ((document.title = `${t.title} | Tumlet Blog`),
            Jo("description", t.excerpt),
            n6(`https://tumlet.com/blog/${t.slug}/`),
            Zo("og:title", t.title),
            Zo("og:description", t.excerpt),
            Zo("og:type", "article"),
            Zo("og:url", `https://tumlet.com/blog/${t.slug}/`));
          const s =
            t.slug === "best-nepali-board-games"
              ? "https://tumlet.com/blogs/best-nepali-board-games/unfurl.png"
              : t.coverImage
                ? `https://tumlet.com${t.coverImage}`
                : "https://tumlet.com/unfurl.png";
          (Zo("og:image", s),
            Jo("twitter:card", "summary_large_image"),
            Jo("twitter:title", t.title),
            Jo("twitter:description", t.excerpt),
            Jo("twitter:image", s),
            r6({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: t.title,
              description: t.excerpt,
              image: s,
              author: { "@type": "Person", name: t.author },
              datePublished: t.publishedAt,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://tumlet.com/blog/${t.slug}/`,
              },
              url: `https://tumlet.com/blog/${t.slug}/`,
              publisher: {
                "@type": "Organization",
                name: "Tumlet",
                logo: { "@type": "ImageObject", url: s },
              },
              keywords: t.tags ? t.tags.join(", ") : "",
            }));
        }
      }, [t]),
      !t)
    )
      return i.jsxs("div", {
        className: "min-h-screen flex flex-col",
        style: { background: "#ffffff" },
        children: [
          i.jsx(Ze, {}),
          i.jsx("div", {
            className: "container mx-auto px-4 py-16",
            children: i.jsxs("div", {
              className: "text-center",
              children: [
                i.jsx("h1", {
                  className: "text-4xl font-bold text-tumlet-text mb-4",
                  children: "Blog post not found",
                }),
                i.jsx("p", {
                  className: "text-lg text-gray-600",
                  children: "The blog post you're looking for doesn't exist.",
                }),
              ],
            }),
          }),
          i.jsx(Le, {}),
        ],
      });
    const o = t.component;
    return i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      style: {
        background: "#ffffff",
        color: "#130D01",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
      },
      children: [
        i.jsx("style", { children: Z8 }),
        i.jsx(Ze, {}),
        i.jsxs("main", {
          className: "flex-1",
          children: [
            i.jsxs("article", {
              style: {
                maxWidth: 760,
                margin: "0 auto",
                padding: "48px 24px 96px",
              },
              children: [
                i.jsx("div", {
                  style: { textAlign: "center", marginBottom: "28px" },
                  children: i.jsxs("span", {
                    style: {
                      display: "inline-block",
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#2D7A4F",
                      background: "#EDF5DD",
                      padding: "6px 18px",
                      borderRadius: "999px",
                      border: "1.5px solid #2D7A4F",
                    },
                    children: ["Field Notes · ", t.category],
                  }),
                }),
                i.jsx("h1", {
                  style: {
                    fontFamily: "'Baloo 2', system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(40px, 6vw, 64px)",
                    lineHeight: 1.1,
                    color: "#1F5F3A",
                    marginBottom: "28px",
                    letterSpacing: "-0.01em",
                    marginTop: 0,
                    textAlign: "center",
                  },
                  children: t.title,
                }),
                i.jsx("p", {
                  style: {
                    fontSize: "21px",
                    lineHeight: 1.55,
                    color: "#2a241a",
                    marginBottom: "40px",
                    fontWeight: 500,
                    marginTop: 0,
                    textAlign: "center",
                    maxWidth: "580px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                  children: t.excerpt,
                }),
                i.jsx("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "64px",
                  },
                  children: i.jsxs("div", {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      border: "2px solid #130D01",
                      borderRadius: "999px",
                      boxShadow: "4px 4px 0 #130D01",
                      padding: "8px 20px 8px 8px",
                      background: "#ffffff",
                    },
                    children: [
                      i.jsx("div", {
                        style: {
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "#2D7A4F",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "16px",
                          fontFamily: "'Outfit', sans-serif",
                          flexShrink: 0,
                        },
                        children: t.author[0],
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsxs("div", {
                            style: {
                              fontFamily: "'Baloo 2', sans-serif",
                              fontWeight: 700,
                              fontSize: "15px",
                              color: "#130D01",
                              lineHeight: 1.2,
                            },
                            children: [t.author, " · Tumlet"],
                          }),
                          i.jsxs("div", {
                            style: {
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "12px",
                              color: "#6B6B6B",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                            },
                            children: [
                              new Date(t.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                },
                              ),
                              " · ",
                              t.readTime,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (t.coverImage || ((a = t.images) == null ? void 0 : a[0])) &&
                  i.jsx("div", {
                    style: { marginBottom: "56px" },
                    children: i.jsx("img", {
                      src: t.coverImage || t.images[0],
                      alt: t.title,
                      style: {
                        width: "100%",
                        aspectRatio: "16 / 9",
                        objectFit: "cover",
                        borderRadius: "16px",
                        border: "3px solid #1F5F3A",
                        boxShadow: "8px 8px 0 #1F5F3A",
                        display: "block",
                      },
                    }),
                  }),
                i.jsx(J8, { children: i.jsx(t6, { children: i.jsx(o, {}) }) }),
              ],
            }),
            i.jsx("section", {
              style: {
                maxWidth: 760,
                margin: "0 auto 96px",
                padding: "0 24px",
              },
              children: i.jsxs("div", {
                style: {
                  background: "#F3B952",
                  border: "3px solid #130D01",
                  boxShadow: "12px 12px 0 #130D01",
                  transform: "rotate(-0.5deg)",
                  borderRadius: "20px",
                  textAlign: "center",
                  padding: "48px 32px",
                },
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: "#130D01",
                      marginBottom: "14px",
                    },
                    children: "From the makers",
                  }),
                  i.jsx("h3", {
                    style: {
                      fontFamily: "'Baloo 2', system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: "30px",
                      color: "#130D01",
                      marginBottom: "14px",
                      lineHeight: 1.1,
                      marginTop: 0,
                    },
                    children:
                      "Tumlet makes Nepali board games — for Nepalis, by Nepalis.",
                  }),
                  i.jsx("p", {
                    style: {
                      fontSize: "17px",
                      lineHeight: 1.5,
                      color: "#130D01",
                      marginBottom: "22px",
                      marginTop: 0,
                    },
                    children:
                      "If this resonated, follow us. We hand-pack and sign the first run of every game.",
                  }),
                  i.jsx("a", {
                    href: "https://www.instagram.com/tumlet.boardgames/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      background: "#130D01",
                      color: "#ffffff",
                      fontFamily: "'Baloo 2', system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: "16px",
                      padding: "14px 40px",
                      borderRadius: "12px",
                      boxShadow: "8px 8px 0 #F16147",
                      transform: n
                        ? "rotate(-0.88deg) translateY(-4px)"
                        : "rotate(-0.88deg)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textDecoration: "none",
                    },
                    onMouseEnter: () => r(!0),
                    onMouseLeave: () => r(!1),
                    children: "Follow @tumlet.boardgames",
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    });
  },
  i6 = () =>
    i.jsxs("div", {
      className:
        "relative flex justify-center items-center h-40 w-40 mx-auto perspective-1000",
      children: [
        i.jsx("div", {
          className: "opacity-100 scale-100",
          children: i.jsxs("div", {
            className: "dice-container preserve-3d relative w-20 h-20",
            style: {
              transformStyle: "preserve-3d",
              animation: "diceRoll 2s linear infinite",
            },
            children: [
              i.jsx("div", {
                className:
                  "dice-face dice-face-front bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center",
                children: i.jsx("div", {
                  className: "w-4 h-4 bg-tumlet-brown rounded-full",
                }),
              }),
              i.jsx("div", {
                className:
                  "dice-face dice-face-back bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center",
                children: i.jsxs("div", {
                  className: "flex justify-between w-full px-2",
                  children: [
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className:
                  "dice-face dice-face-right bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center",
                children: i.jsxs("div", {
                  className: "flex flex-col justify-between h-full py-2",
                  children: [
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full mx-auto",
                    }),
                    i.jsx("div", {
                      className:
                        "w-3 h-3 bg-tumlet-brown rounded-full self-end",
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className:
                  "dice-face dice-face-left bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center",
                children: i.jsxs("div", {
                  className: "grid grid-cols-2 gap-2 w-full h-full p-2",
                  children: [
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className:
                  "dice-face dice-face-top bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center",
                children: i.jsxs("div", {
                  className:
                    "grid grid-cols-2 gap-1 w-full h-full p-2 relative",
                  children: [
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className:
                        "w-3 h-3 bg-tumlet-brown rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className:
                  "dice-face dice-face-bottom bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center",
                children: i.jsxs("div", {
                  className: "grid grid-cols-2 gap-2 w-full h-full p-2",
                  children: [
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                    i.jsx("div", {
                      className: "w-3 h-3 bg-tumlet-brown rounded-full",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        i.jsx("style", {
          children: `
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }

        .dice-face-front {
          transform: translateZ(40px);
        }
        
        .dice-face-back {
          transform: translateZ(-40px) rotateY(180deg);
        }
        
        .dice-face-right {
          transform: rotateY(90deg) translateZ(40px);
        }
        
        .dice-face-left {
          transform: rotateY(-90deg) translateZ(40px);
        }
        
        .dice-face-top {
          transform: rotateX(90deg) translateZ(40px);
        }
        
        .dice-face-bottom {
          transform: rotateX(-90deg) translateZ(40px);
        }

        @keyframes diceRoll {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            transform: rotateX(90deg) rotateY(180deg) rotateZ(90deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg);
          }
          75% {
            transform: rotateX(270deg) rotateY(540deg) rotateZ(270deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
          }
        }
      `,
        }),
      ],
    }),
  a6 = () => {
    const e = jr(),
      t = Fg();
    x.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        e.pathname,
      );
    }, [e.pathname]);
    const n = () => {
      t("/");
    };
    return i.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-tumlet-beige",
      children: i.jsxs("div", {
        className: "text-center max-w-md mx-auto px-6",
        children: [
          i.jsx("div", { className: "mb-8", children: i.jsx(i6, {}) }),
          i.jsx("div", {
            className: "mb-8",
            children: i.jsx("h1", {
              className: "font-outfit text-3xl font-bold text-tumlet-text mb-4",
              children: "Page not found",
            }),
          }),
          i.jsx("button", {
            onClick: n,
            className:
              "font-baloo bg-tumlet-primaryRed text-white px-8 py-4 rounded-xl border-2 border-tumlet-brown shadow-[4px_4px_0px_0px_#6B4226] hover:shadow-[2px_2px_0px_0px_#6B4226] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-lg font-semibold",
            children: "Roll back home",
          }),
        ],
      }),
    });
  };
function Ar(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function ei(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function s6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
function l6(e) {
  let t = document.querySelector("script[type='application/ld+json']");
  (t ||
    ((t = document.createElement("script")),
    t.setAttribute("type", "application/ld+json"),
    document.head.appendChild(t)),
    (t.textContent = JSON.stringify(e)));
}
const c6 = [
    {
      icon: "1",
      title: "An image appears.",
      body: "Something in it is the last name. Look closely. It might be obvious. It might take a minute. That's the whole game.",
    },
    {
      icon: "2",
      title: "Type the थर.",
      body: "No options. No hints to start. Just you and the image. Trust what you see — or think you see.",
    },
  ],
  u6 = () => (
    x.useEffect(() => {
      ((document.title = "Bichitra | Guess the Nepali Last Name"),
        Ar(
          "description",
          "Bichitra is a Nepali last name puzzle from Tumlet. A photo hides a थर somewhere inside it — can you find it? No options, no shortcuts. Play free online now.",
        ),
        Ar(
          "keywords",
          "bichitra, nepali last name quiz, nepali thar puzzle, tumlet, nepali game online, guess nepali last name",
        ),
        s6("https://tumlet.com/bichitra/"),
        ei("og:title", "Bichitra | Guess the Nepali Last Name"),
        ei(
          "og:description",
          "A photo. A hidden clue. Can you guess the Nepali last name? No options — just you and the image. Play free online.",
        ),
        ei("og:type", "website"),
        ei("og:url", "https://tumlet.com/bichitra/"),
        ei("og:image", "https://tumlet.com/tumlet-logo.png"),
        Ar("twitter:card", "summary_large_image"),
        Ar("twitter:title", "Bichitra | Guess the Nepali Last Name"),
        Ar(
          "twitter:description",
          "A photo. A hidden clue. Can you guess the Nepali last name? No options — just you and the image. Play free online.",
        ),
        Ar("twitter:image", "https://tumlet.com/tumlet-logo.png"),
        l6({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Bichitra",
          description:
            "A Nepali last name puzzle. A photo hides a थर somewhere inside it — no options, type your guess and find it.",
          url: "https://bichitra.tumlet.com/",
          applicationCategory: "Game",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          creator: {
            "@type": "Organization",
            name: "Tumlet",
            url: "https://tumlet.com",
          },
        }));
    }, []),
    i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      style: {
        background: "#ffffff",
        color: "#130D01",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
      },
      children: [
        i.jsx(Ze, {}),
        i.jsxs("main", {
          className: "flex-1",
          children: [
            i.jsxs("section", {
              className:
                "max-w-[760px] mx-auto px-6 pt-16 pb-0 mb-0 text-center",
              children: [
                i.jsx("span", {
                  className:
                    "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6",
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    color: "#364587",
                    background: "#BAC1E1",
                    letterSpacing: "0.18em",
                  },
                  children: "Tumlet · Free to play",
                }),
                i.jsx("h1", {
                  className: "font-extrabold mb-5 leading-tight",
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    color: "#130D01",
                    fontSize: "clamp(32px, 5vw, 58px)",
                    letterSpacing: "-0.01em",
                  },
                  children: "Bichitra — Guess the Nepali Last Name",
                }),
                i.jsx("p", {
                  className: "font-semibold mb-7 leading-snug",
                  style: {
                    color: "#4B5563",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                  },
                  children:
                    "It's not about reading faces. The थर is hiding somewhere in the image — you just have to find it.",
                }),
                i.jsxs("div", {
                  className:
                    "flex justify-center items-center gap-8 flex-wrap mb-14",
                  children: [
                    i.jsx("a", {
                      href: "https://bichitra.tumlet.com/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontSize: "1.1rem",
                        background: "#364587",
                        boxShadow: "8px 8px 0px #F3B952",
                        transform: "rotate(-0.88deg)",
                      },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.transform =
                          "rotate(-0.88deg) translate(-4px,-4px)"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.transform = "rotate(-0.88deg)"),
                      children: "Play Bichitra free →",
                    }),
                    i.jsx("a", {
                      href: "#how-it-works",
                      className: "underline font-medium text-base",
                      style: { color: "#364587" },
                      children: "How it works →",
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("section", {
              className: "max-w-[760px] mx-auto px-6 mb-20",
              children: i.jsx("div", {
                className: "grid grid-cols-3 rounded-2xl overflow-hidden",
                style: { border: "3px solid #7184BE", background: "#FAF1E4" },
                children: [
                  { num: "6", lbl: "packs" },
                  { num: "Free", lbl: "to play" },
                  { num: "Viral", lbl: "in Nepal" },
                ].map(({ num: e, lbl: t }, n) =>
                  i.jsxs(
                    "div",
                    {
                      className: "py-6 text-center",
                      style: {
                        borderRight: n < 2 ? "2px solid #7184BE" : void 0,
                      },
                      children: [
                        i.jsx("div", {
                          className: "font-extrabold text-3xl leading-none",
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            color: "#364587",
                          },
                          children: e,
                        }),
                        i.jsx("div", {
                          className:
                            "text-sm font-semibold uppercase tracking-wider mt-1.5",
                          style: { color: "#6B6B6B", letterSpacing: "0.04em" },
                          children: t,
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            }),
            i.jsxs("article", {
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: [
                i.jsx("span", {
                  className:
                    "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6",
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    color: "#364587",
                    background: "#BAC1E1",
                    letterSpacing: "0.18em",
                  },
                  children: "Why it's addictive",
                }),
                i.jsx("h2", {
                  className: "font-extrabold mb-6 leading-tight",
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    color: "#130D01",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    letterSpacing: "-0.01em",
                  },
                  children: "The moment it clicks, you can't unsee it.",
                }),
                i.jsx("p", {
                  className: "text-lg leading-relaxed mb-5",
                  style: { color: "#2a241a" },
                  children:
                    "Each image hides a Nepali last name inside it — visually, cleverly, sometimes maddeningly. Type your guess. Too far off? You're stuck. Getting warm? You'll know. Three wrong answers and you earn a hint — but by then your pride is already on the line.",
                }),
                i.jsx("p", {
                  className: "text-lg leading-relaxed mb-5",
                  style: { color: "#2a241a" },
                  children:
                    "It's the kind of puzzle that makes you feel genius when you crack it and unreasonably frustrated when you don't. Nepalis have been dropping it in group chats with zero context and watching friends spiral.",
                }),
              ],
            }),
            i.jsxs("section", {
              id: "how-it-works",
              className: "max-w-[1180px] mx-auto px-6 mb-24",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-12",
                  children: [
                    i.jsx("span", {
                      className:
                        "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        color: "#364587",
                        letterSpacing: "0.18em",
                      },
                      children: "How it works",
                    }),
                    i.jsx("h2", {
                      className: "font-extrabold leading-tight",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        color: "#130D01",
                        fontSize: "clamp(28px, 4vw, 44px)",
                        letterSpacing: "-0.01em",
                      },
                      children: "Simple rules. Maddening puzzles.",
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: {
                    border: "3px solid #7184BE",
                    background: "#FAF1E4",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  },
                  className: "rounded-2xl overflow-hidden",
                  children: c6.map(({ icon: e, title: t, body: n }, r) =>
                    i.jsxs(
                      "div",
                      {
                        className: "flex gap-5 items-start p-8",
                        style: {
                          borderRight: "2px solid #7184BE",
                          borderBottom: "2px solid #7184BE",
                        },
                        children: [
                          i.jsx("div", {
                            className:
                              "flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl",
                            style: {
                              width: 56,
                              height: 56,
                              fontFamily: "'Outfit', sans-serif",
                              background: "#BAC1E1",
                              border: "2px solid #7184BE",
                              color: "#364587",
                            },
                            children: e,
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("h3", {
                                className:
                                  "font-bold text-xl mb-1.5 leading-tight",
                                style: {
                                  fontFamily: "'Baloo 2', sans-serif",
                                  color: "#130D01",
                                },
                                children: t,
                              }),
                              i.jsx("p", {
                                className: "text-sm leading-relaxed",
                                style: { color: "#3a3225" },
                                children: n,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx("section", {
              className: "max-w-[760px] mx-auto mb-24 px-6",
              children: i.jsxs("div", {
                style: {
                  background: "#F3B952",
                  border: "3px solid #130D01",
                  boxShadow: "12px 12px 0 #130D01",
                  transform: "rotate(-0.5deg)",
                },
                className: "text-center px-8 py-14 rounded-[20px]",
                children: [
                  i.jsx("div", {
                    className:
                      "text-xs font-bold uppercase tracking-widest mb-4",
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      color: "#130D01",
                      letterSpacing: "0.16em",
                    },
                    children: "Free · No signup · Play now",
                  }),
                  i.jsx("h2", {
                    className: "font-extrabold leading-tight mb-4",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      color: "#130D01",
                      fontSize: "clamp(28px, 4vw, 44px)",
                      letterSpacing: "-0.01em",
                    },
                    children: "Think you can guess the Nepali last name?",
                  }),
                  i.jsx("p", {
                    className: "text-lg leading-relaxed mb-7",
                    style: { color: "#130D01" },
                    children:
                      "Most people need at least one hint. Prove them wrong.",
                  }),
                  i.jsx("a", {
                    href: "https://bichitra.tumlet.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      fontSize: "1.1rem",
                      background: "#130D01",
                      boxShadow: "8px 8px 0px #364587",
                      transform: "rotate(-0.88deg)",
                    },
                    onMouseEnter: (e) =>
                      (e.currentTarget.style.transform =
                        "rotate(-0.88deg) translate(-4px,-4px)"),
                    onMouseLeave: (e) =>
                      (e.currentTarget.style.transform = "rotate(-0.88deg)"),
                    children: "Play Bichitra free →",
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    })
  ),
  d6 = [
    "Play runs deep in our culture. We see it during Holi when we're throwing colors, in card games during Dashain, in playing Bhailo in Tihar. It's there.",
    "And is it only during festivals? Not really.",
    "When we go on trips with friends, to Nagarkot or anywhere else, we often carry games. Usually UNO, Jenga, or something similar. All fun, but all foreign. “कति गेम्सको त slangs पनि बुझ्दैन and can't really relate to them.” Because it was not made for Nepali people.",
    "This is where we see the gap.",
    "Where are the Nepali board games? They're almost non-existent. There are a few options, but they are targeted towards kids. And if you're a young Nepali living abroad, you can easily buy international games, but not a single one that feels like home.",
    "So when it comes to board games, we hit a wall  🚧",
    "And we want to change that.",
    "",
    "We are a Nepali board game company, plain and simple.",
    "We're from here. Our games are too.",
    "We also bring games to offices and host corporate game nights for teams who want to connect and have fun together.",
    "We pull from the way we joke. The way we argue. The way we play. We put it into cards, pieces, rules, and laughter.",
    "We're not perfect. We don't want to be.",
    "",
    "We just want to make something that feels like home.",
    "",
    "That's Tumlet.",
    "A Nepali board game company, trying to take you back to your childhood.",
  ];
function ti(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function ni(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function f6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
const p6 = () => (
  x.useState(null),
  x.useEffect(() => {
    ((document.title = "About Us | Tumlet - Nepali board game company"),
      ti(
        "description",
        "Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.",
      ),
      f6("https://tumlet.com/about/"),
      ni("og:title", "About Us | Tumlet - Nepali board game company"),
      ni(
        "og:description",
        "Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.",
      ),
      ni("og:type", "website"),
      ni("og:url", "https://tumlet.com/about/"),
      ni("og:image", "https://tumlet.com/tumlet-logo.png"),
      ti("twitter:card", "summary_large_image"),
      ti("twitter:title", "About Us | Tumlet - Nepali board game company"),
      ti(
        "twitter:description",
        "Tumlet is a Nepali board game company bringing play and connection back to Nepali homes. Learn about our story and why we make games for Nepal.",
      ),
      ti("twitter:image", "https://tumlet.com/tumlet-logo.png"));
  }, []),
  i.jsxs("div", {
    className: "min-h-screen flex flex-col bg-white",
    style: { fontFamily: "'Baloo 2', system-ui, sans-serif", color: "#130D01" },
    children: [
      i.jsx(Ze, {}),
      i.jsxs("main", {
        className: "flex-1",
        children: [
          i.jsxs("section", {
            style: { maxWidth: 900, margin: "0 auto", padding: "64px 24px 0" },
            children: [
              i.jsx("style", {
                children: `
            .founder-cards-row {
              display: flex;
              justify-content: center;
              align-items: flex-end;
              gap: 32px;
            }
            .founder-card {
              width: 260px;
              flex-shrink: 0;
              position: relative;
              cursor: default;
              transition: z-index 0s;
            }
            .founder-card-yashant {
              transform: rotate(-2deg);
              z-index: 2;
            }
            .founder-card-sarina {
              transform: rotate(1.5deg);
              margin-bottom: 24px;
              z-index: 1;
            }
            .founder-card:hover {
              z-index: 10;
            }
            .founder-card .card-inner {
              border: 3px solid #130D01;
              border-radius: 20px;
              overflow: hidden;
              background: #FAF1E4;
              transition: transform 0.2s, box-shadow 0.2s;
            }
            .founder-card-yashant .card-inner {
              box-shadow: 8px 8px 0 #F3B952;
            }
            .founder-card-sarina .card-inner {
              box-shadow: 8px 8px 0 #F16147;
            }
            .founder-card:hover .card-inner {
              transform: translate(-3px, -3px);
            }
            .founder-card-yashant:hover .card-inner {
              box-shadow: 11px 11px 0 #F3B952;
            }
            .founder-card-sarina:hover .card-inner {
              box-shadow: 11px 11px 0 #F16147;
            }
            @media (max-width: 600px) {
              .founder-cards-row {
                gap: 0;
                justify-content: center;
              }
              .founder-card {
                width: 52vw;
              }
              .founder-card-yashant {
                margin-right: -18vw;
                z-index: 2;
              }
              .founder-card-sarina {
                z-index: 1;
              }
              .founder-card-yashant:hover {
                z-index: 10;
              }
              .founder-card-sarina:hover {
                z-index: 10;
              }
            }
          `,
              }),
              i.jsxs("div", {
                className: "founder-cards-row",
                children: [
                  i.jsx("div", {
                    className: "founder-card founder-card-yashant",
                    children: i.jsxs("div", {
                      className: "card-inner",
                      children: [
                        i.jsx("div", {
                          style: {
                            width: "100%",
                            aspectRatio: "3/4",
                            background: "#E5E7EB",
                            overflow: "hidden",
                          },
                          children: i.jsx("img", {
                            src: "/about/yashant.webp",
                            alt: "Yashant Gyawali",
                            style: {
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                            },
                            onError: (e) => {
                              e.currentTarget.style.display = "none";
                            },
                          }),
                        }),
                        i.jsxs("div", {
                          style: { padding: "14px 16px 16px" },
                          children: [
                            i.jsx("div", {
                              style: {
                                fontFamily: "'Baloo 2', sans-serif",
                                fontWeight: 800,
                                fontSize: 16,
                                color: "#130D01",
                              },
                              children: "Yashant Gyawali",
                            }),
                            i.jsx("div", {
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 12,
                                color: "#6B6B6B",
                                marginTop: 2,
                              },
                              children: "Co-founder · Tumlet",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx("div", {
                    className: "founder-card founder-card-sarina",
                    children: i.jsxs("div", {
                      className: "card-inner",
                      children: [
                        i.jsx("div", {
                          style: {
                            width: "100%",
                            aspectRatio: "3/4",
                            background: "#E5E7EB",
                            overflow: "hidden",
                          },
                          children: i.jsx("img", {
                            src: "/about/sarina.webp",
                            alt: "Sarina Pantha",
                            style: {
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                            },
                            onError: (e) => {
                              e.currentTarget.style.display = "none";
                            },
                          }),
                        }),
                        i.jsxs("div", {
                          style: { padding: "14px 16px 16px" },
                          children: [
                            i.jsx("div", {
                              style: {
                                fontFamily: "'Baloo 2', sans-serif",
                                fontWeight: 800,
                                fontSize: 16,
                                color: "#130D01",
                              },
                              children: "Sarina Pantha",
                            }),
                            i.jsx("div", {
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 12,
                                color: "#6B6B6B",
                                marginTop: 2,
                              },
                              children: "Co-founder · Tumlet",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("section", {
            style: { maxWidth: 760, margin: "0 auto", padding: "48px 24px 0" },
            children: [
              i.jsx("h1", {
                style: {
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(40px, 6vw, 60px)",
                  letterSpacing: "-0.01em",
                  color: "#130D01",
                  marginBottom: 56,
                  marginTop: 0,
                },
                children: "We're Tumlet.",
              }),
              d6.map((e, t) => {
                if (e.trim() === "")
                  return i.jsx("div", { style: { height: 40 } }, t);
                if (e.includes("Where are the Nepali board games?")) {
                  const n = e.split("Nepali board games");
                  return i.jsxs(
                    "p",
                    {
                      style: {
                        fontSize: "clamp(20px, 2.5vw, 26px)",
                        lineHeight: 1.65,
                        color: "#130D01",
                        marginBottom: 32,
                        marginTop: 0,
                      },
                      children: [
                        n[0],
                        i.jsx(X, {
                          to: "/blog/best-nepali-board-games/",
                          style: {
                            textDecoration: "underline",
                            color: "#F16147",
                          },
                          children: "Nepali board games",
                        }),
                        n[1],
                      ],
                    },
                    t,
                  );
                }
                if (e.includes("corporate game nights")) {
                  const n = e.split("corporate game nights");
                  return i.jsxs(
                    "p",
                    {
                      style: {
                        fontSize: "clamp(20px, 2.5vw, 26px)",
                        lineHeight: 1.65,
                        color: "#130D01",
                        marginBottom: 32,
                        marginTop: 0,
                      },
                      children: [
                        n[0],
                        i.jsx(X, {
                          to: "/corporate-game-night/",
                          style: {
                            textDecoration: "underline",
                            color: "#F16147",
                          },
                          children: "corporate game nights",
                        }),
                        n[1],
                      ],
                    },
                    t,
                  );
                }
                return i.jsx(
                  "p",
                  {
                    style: {
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      lineHeight: 1.65,
                      color: "#130D01",
                      marginBottom: 32,
                      marginTop: 0,
                    },
                    children: e,
                  },
                  t,
                );
              }),
              i.jsx("p", {
                style: {
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#6B6B6B",
                  marginTop: 48,
                },
                children: "— Sarina Pantha & Yashant Gyawali",
              }),
            ],
          }),
          i.jsxs("section", {
            style: {
              maxWidth: 760,
              margin: "80px auto 96px",
              padding: "0 24px",
            },
            children: [
              i.jsxs("div", {
                style: { marginBottom: 24 },
                children: [
                  i.jsx("span", {
                    style: {
                      display: "inline-block",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#F16147",
                      background: "#FDE8E4",
                      padding: "6px 14px",
                      borderRadius: 999,
                      marginBottom: 16,
                    },
                    children: "Watch us",
                  }),
                  i.jsx("h2", {
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(24px, 3vw, 36px)",
                      color: "#130D01",
                      margin: 0,
                      lineHeight: 1.2,
                    },
                    children: "Catch us on a podcast.",
                  }),
                ],
              }),
              i.jsx("a", {
                href: "https://www.youtube.com/watch?v=3YyEpIA8FfY&t=597s",
                target: "_blank",
                rel: "noopener noreferrer",
                style: { display: "block", textDecoration: "none" },
                children: i.jsxs("div", {
                  style: {
                    border: "3px solid #130D01",
                    borderRadius: 16,
                    boxShadow: "8px 8px 0 #130D01",
                    overflow: "hidden",
                    transform: "rotate(-0.5deg)",
                    transition: "transform 0.2s",
                  },
                  onMouseEnter: (e) =>
                    (e.currentTarget.style.transform =
                      "rotate(-0.5deg) translate(-4px,-4px)"),
                  onMouseLeave: (e) =>
                    (e.currentTarget.style.transform = "rotate(-0.5deg)"),
                  children: [
                    i.jsx("img", {
                      src: "https://img.youtube.com/vi/3YyEpIA8FfY/maxresdefault.jpg",
                      alt: "Bluff or Not? — Tumlet on YouTube",
                      style: {
                        width: "100%",
                        display: "block",
                        aspectRatio: "16/9",
                        objectFit: "cover",
                      },
                    }),
                    i.jsxs("div", {
                      style: {
                        background: "#FAF1E4",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      },
                      children: [
                        i.jsxs("div", {
                          children: [
                            i.jsx("div", {
                              style: {
                                fontFamily: "'Baloo 2', sans-serif",
                                fontWeight: 700,
                                fontSize: 16,
                                color: "#130D01",
                              },
                              children: "Bluff or Not?",
                            }),
                            i.jsx("div", {
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 13,
                                color: "#6B6B6B",
                              },
                              children: "Watch on YouTube →",
                            }),
                          ],
                        }),
                        i.jsx("div", {
                          style: {
                            background: "#F16147",
                            color: "white",
                            fontFamily: "'Baloo 2', sans-serif",
                            fontWeight: 700,
                            fontSize: 13,
                            padding: "8px 16px",
                            borderRadius: 8,
                            boxShadow: "3px 3px 0 #130D01",
                            flexShrink: 0,
                          },
                          children: "▶ Watch",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      i.jsx(Le, {}),
    ],
  })
);
function Rr(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function ri(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function h6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
function m6(e) {
  let t = document.querySelector("script[type='application/ld+json']");
  (t ||
    ((t = document.createElement("script")),
    t.setAttribute("type", "application/ld+json"),
    document.head.appendChild(t)),
    (t.textContent = JSON.stringify(e)));
}
const be = "#F16147",
  Ep = "#7184BE",
  Ba = "#BAC1E1",
  g6 = [
    {
      icon: "1",
      title: "Open Ganthan on your phone.",
      body: "No login, no setup. Open it when you're about to call aama-baba, or right in the middle of dal-bhat.",
    },
    {
      icon: "2",
      title: "Pick a question — or let it surprise you.",
      body: "Tap through until one lands. Or hit shuffle and trust the app. Every question is available in Nepali and English.",
    },
    {
      icon: "3",
      title: "Ask your family member and really listen.",
      body: "Put the question out there. Then stop talking. The best part of Ganthan is what happens after you ask.",
    },
  ],
  y6 = () => (
    x.useEffect(() => {
      ((document.title =
        "Ganthan | Meaningful Conversation Prompts for Nepali Families"),
        Rr(
          "description",
          "Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories and stories. Free and bilingual.",
        ),
        Rr(
          "keywords",
          "ganthan, nepali family conversations, conversation prompts, nepali diaspora, bilingual questions, tumlet",
        ),
        h6("https://tumlet.com/ganthan/"),
        ri(
          "og:title",
          "Ganthan | Meaningful Conversation Prompts for Nepali Families",
        ),
        ri(
          "og:description",
          "Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories and stories. Free and bilingual.",
        ),
        ri("og:type", "website"),
        ri("og:url", "https://tumlet.com/ganthan/"),
        ri("og:image", "https://tumlet.com/tumlet-logo.png"),
        Rr("twitter:card", "summary_large_image"),
        Rr(
          "twitter:title",
          "Ganthan | Meaningful Conversation Prompts for Nepali Families",
        ),
        Rr(
          "twitter:description",
          "Ganthan gives Nepali families meaningful questions to go beyond daily check-ins. Talk to your aama-baba about memories and stories. Free and bilingual.",
        ),
        Rr("twitter:image", "https://tumlet.com/tumlet-logo.png"),
        m6({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Ganthan",
          description:
            "Ganthan gives Nepali families meaningful conversation prompts to go beyond daily check-ins. Bilingual questions in Nepali and English.",
          url: "https://ganthan.tumlet.com/",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          creator: {
            "@type": "Organization",
            name: "Tumlet",
            url: "https://tumlet.com",
          },
        }));
    }, []),
    i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      style: {
        background: "#ffffff",
        color: "#130D01",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
      },
      children: [
        i.jsx(Ze, {}),
        i.jsxs("main", {
          className: "flex-1",
          children: [
            i.jsx("section", {
              className: "max-w-[1280px] mx-auto px-6 md:px-12 pt-14 mb-20",
              children: i.jsxs("div", {
                className: "relative rounded-[20px] overflow-hidden border-4",
                style: { background: "#F0EBF8", borderColor: be },
                children: [
                  i.jsxs("div", {
                    className: "px-8 md:px-16 pt-14 pb-12 text-center",
                    children: [
                      i.jsx("span", {
                        className:
                          "inline-block text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full border-2 mb-8",
                        style: {
                          fontFamily: "'Outfit', sans-serif",
                          background: "#FAF1E4",
                          color: be,
                          borderColor: be,
                          letterSpacing: "0.1em",
                        },
                        children: "गन्थन · Ganthan",
                      }),
                      i.jsx("h1", {
                        className: "font-extrabold mb-5 leading-tight",
                        style: {
                          fontFamily: "'Baloo 2', sans-serif",
                          color: "#130D01",
                          fontSize: "clamp(30px, 5vw, 58px)",
                          letterSpacing: "-0.01em",
                        },
                        children:
                          "Ganthan — conversations worth having with your family",
                      }),
                      i.jsx("p", {
                        className: "font-semibold text-2xl mb-8",
                        style: {
                          fontFamily: "'Outfit', sans-serif",
                          color: Ep,
                        },
                        children: `Because "k khanu bhayo?" shouldn't be the only question.`,
                      }),
                      i.jsxs("div", {
                        className:
                          "flex justify-center items-center gap-8 flex-wrap mb-11",
                        children: [
                          i.jsx("a", {
                            href: "https://ganthan.tumlet.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "inline-flex items-center gap-3 font-bold px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap text-white",
                            style: {
                              fontFamily: "'Baloo 2', sans-serif",
                              background: be,
                              boxShadow: "8px 8px 0px #130D01",
                              transform: "rotate(-0.88deg)",
                              fontSize: "1.1rem",
                            },
                            onMouseEnter: (e) =>
                              (e.currentTarget.style.transform =
                                "rotate(-0.88deg) translate(-4px,-4px)"),
                            onMouseLeave: (e) =>
                              (e.currentTarget.style.transform =
                                "rotate(-0.88deg)"),
                            children: "Start a conversation",
                          }),
                          i.jsx("a", {
                            href: "#how-it-works",
                            className: "underline font-medium text-base",
                            style: { color: be },
                            children: "See how it works →",
                          }),
                        ],
                      }),
                      i.jsx("p", {
                        className:
                          "text-lg max-w-2xl mx-auto mb-5 leading-relaxed",
                        style: { color: "#2a241a" },
                        children:
                          "A lot of Nepalis live far from the people they grew up with. Maybe you're in Kathmandu while baba is in Pokhara. Maybe you're in Australia and aama is back home. The calls happen — sometimes every day — but after a while, they start to sound the same. How's the weather. What did you eat. Sleep well.",
                      }),
                      i.jsx("p", {
                        className:
                          "text-lg max-w-2xl mx-auto mb-11 leading-relaxed",
                        style: { color: "#2a241a" },
                        children:
                          "Ganthan was made to break that routine. You open the app, get a question, and ask it. That's all. Some questions are light. Some go deep. All of them are more interesting than the weather.",
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "grid grid-cols-3 border-t-2",
                    style: { background: "#FAF1E4", borderColor: be },
                    children: [
                      { num: "Bilingual", lbl: "Nepali + English" },
                      { num: "Free", lbl: "forever" },
                      { num: "Infinite", lbl: "questions" },
                    ].map(({ num: e, lbl: t }, n) =>
                      i.jsxs(
                        "div",
                        {
                          className: "py-5 text-center",
                          style: {
                            borderRight: n < 2 ? `2px solid ${be}` : void 0,
                          },
                          children: [
                            i.jsx("div", {
                              className: "font-extrabold text-2xl leading-none",
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                color: be,
                              },
                              children: e,
                            }),
                            i.jsx("div", {
                              className:
                                "text-sm font-semibold uppercase tracking-wider mt-1.5",
                              style: {
                                color: "#6B6B6B",
                                letterSpacing: "0.04em",
                              },
                              children: t,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            i.jsxs("article", {
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: [
                i.jsx("span", {
                  className:
                    "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6",
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    color: be,
                    background: "#F0EBF8",
                    letterSpacing: "0.18em",
                  },
                  children: "Why we built it",
                }),
                i.jsx("h2", {
                  className: "font-extrabold mb-6 leading-tight",
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    color: "#130D01",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    letterSpacing: "-0.01em",
                  },
                  children:
                    "The daily call is a habit. Ganthan makes it a conversation.",
                }),
                i.jsx("p", {
                  className: "text-lg leading-relaxed mb-5",
                  style: { color: "#2a241a" },
                  children:
                    "There's a specific kind of loneliness in a phone call that ends and you realize you didn't actually learn anything new about the person you called. You know they're fine. You know they ate. You don't know what they were thinking about at 3am last Tuesday, or what they wish they'd done differently, or what memory makes them laugh when no one's watching.",
                }),
                i.jsx("p", {
                  className: "text-lg leading-relaxed mb-5",
                  style: { color: "#2a241a" },
                  children:
                    'Ganthan — गन्थन, which means "to weave" or "to connect" — is built on one belief: the right question can open up years of conversation. We wrote questions that aama can answer in Nepali and you can answer in English. Questions about childhood, about what your parents were like before they were parents, about the things that shaped your family without anyone naming them. The app is the easy part. The conversation is yours.',
                }),
              ],
            }),
            i.jsxs("section", {
              id: "how-it-works",
              className: "max-w-[1180px] mx-auto px-6 mb-24",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-12",
                  children: [
                    i.jsx("span", {
                      className:
                        "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        color: be,
                        letterSpacing: "0.18em",
                      },
                      children: "How it works",
                    }),
                    i.jsx("h2", {
                      className: "font-extrabold leading-tight",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        color: "#130D01",
                        fontSize: "clamp(28px, 4vw, 44px)",
                        letterSpacing: "-0.01em",
                      },
                      children: "Three steps. One real conversation.",
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: {
                    border: `3px solid ${be}`,
                    background: "#FAF1E4",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  },
                  className: "rounded-2xl overflow-hidden",
                  children: g6.map(({ icon: e, title: t, body: n }, r) =>
                    i.jsxs(
                      "div",
                      {
                        className: "flex gap-5 items-start p-8",
                        style: {
                          borderRight: `2px solid ${be}`,
                          borderBottom: `2px solid ${be}`,
                        },
                        children: [
                          i.jsx("div", {
                            className:
                              "flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl",
                            style: {
                              width: 56,
                              height: 56,
                              fontFamily: "'Outfit', sans-serif",
                              background: Ba,
                              border: `2px solid ${be}`,
                              color: be,
                            },
                            children: e,
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("h3", {
                                style: {
                                  fontFamily: "'Baloo 2', sans-serif",
                                  color: be,
                                },
                                className:
                                  "font-bold text-xl mb-1.5 leading-tight",
                                children: t,
                              }),
                              i.jsx("p", {
                                className: "text-sm leading-relaxed",
                                style: { color: "#3a3225" },
                                children: n,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
            i.jsxs("section", {
              className: "py-20 mb-24 relative overflow-hidden",
              style: { background: Ep, color: "white" },
              children: [
                i.jsx("div", {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px, 60px 60px",
                  },
                }),
                i.jsxs("div", {
                  className: "max-w-[1180px] mx-auto px-6 relative",
                  children: [
                    i.jsxs("div", {
                      className: "text-center mb-14",
                      children: [
                        i.jsx("span", {
                          className:
                            "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            color: "#F3B952",
                            letterSpacing: "0.18em",
                          },
                          children: "What makes it different",
                        }),
                        i.jsx("h2", {
                          className: "font-extrabold leading-tight",
                          style: {
                            fontFamily: "'Baloo 2', sans-serif",
                            fontSize: "clamp(28px, 5vw, 52px)",
                            letterSpacing: "-0.01em",
                          },
                          children: "Questions that actually go somewhere.",
                        }),
                        i.jsx("p", {
                          className: "text-lg mt-3 max-w-lg mx-auto",
                          style: { color: Ba },
                          children:
                            "Not icebreakers. Not party games. Questions built for families.",
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                      children: [
                        {
                          num: "01",
                          title: "Bilingual — Nepali and English",
                          body: "Every question works in both languages so aama can answer in her words and you can answer in yours. No one gets left out of the conversation.",
                        },
                        {
                          num: "02",
                          title: "Built for real conversations, not small talk",
                          body: "These aren't conversation starters for strangers. They're questions designed to help you actually know the people you love — including sides of them you've never seen.",
                        },
                        {
                          num: "03",
                          title: "Works mid-call, mid-meal, mid-anything",
                          body: "Pull it out during a phone call, a video chat, or dal-bhat on a Sunday. No login, no setup, no waiting. Just press a button and ask.",
                        },
                      ].map(({ num: e, title: t, body: n }) =>
                        i.jsxs(
                          "div",
                          {
                            className: "rounded-2xl p-7",
                            style: {
                              background: "rgba(255,255,255,0.1)",
                              border: "2px solid rgba(255,255,255,0.2)",
                            },
                            children: [
                              i.jsx("div", {
                                className: "font-black leading-none mb-4",
                                style: {
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: 40,
                                  color: "#F3B952",
                                },
                                children: e,
                              }),
                              i.jsx("h3", {
                                className:
                                  "font-bold text-xl mb-3 leading-tight",
                                style: { fontFamily: "'Baloo 2', sans-serif" },
                                children: t,
                              }),
                              i.jsx("p", {
                                className: "text-sm leading-relaxed",
                                style: { color: Ba },
                                children: n,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("section", {
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: [
                i.jsx("span", {
                  className:
                    "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6",
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    color: be,
                    background: "#F0EBF8",
                    letterSpacing: "0.18em",
                  },
                  children: "Who it's for",
                }),
                i.jsx("h2", {
                  className: "font-extrabold mb-8 leading-tight",
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    color: "#130D01",
                    fontSize: "clamp(26px, 4vw, 40px)",
                    letterSpacing: "-0.01em",
                  },
                  children:
                    "If you have a family you don't talk to deeply enough, this is for you.",
                }),
                i.jsx("div", {
                  className: "flex flex-col gap-5",
                  children: [
                    {
                      who: "Students abroad missing home",
                      desc: "You call every week and the call is fine. Ganthan helps you make it mean something.",
                    },
                    {
                      who: "Couples learning each other's childhoods",
                      desc: "You know the big stories. Ganthan gets to the small ones — the ones that actually shaped who they are.",
                    },
                    {
                      who: "Friends who want to go deeper",
                      desc: "Not every conversation has to be banter. Some nights you want to actually know what your people are carrying.",
                    },
                  ].map(({ who: e, desc: t }) =>
                    i.jsxs(
                      "div",
                      {
                        className: "flex gap-5 items-start p-6 rounded-xl",
                        style: {
                          background: "#F0EBF8",
                          border: `2px solid ${Ba}`,
                        },
                        children: [
                          i.jsx("div", {
                            className: "flex-shrink-0",
                            style: {
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              background: be,
                              marginTop: 6,
                            },
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("p", {
                                className:
                                  "font-bold text-lg leading-tight mb-1",
                                style: {
                                  fontFamily: "'Baloo 2', sans-serif",
                                  color: "#130D01",
                                },
                                children: e,
                              }),
                              i.jsx("p", {
                                className: "text-sm leading-relaxed",
                                style: { color: "#3a3225" },
                                children: t,
                              }),
                            ],
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx("section", {
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: i.jsxs("div", {
                className: "text-center px-8 py-14 rounded-[20px]",
                style: {
                  background: "#F3B952",
                  border: "3px solid #130D01",
                  boxShadow: "12px 12px 0 #130D01",
                  transform: "rotate(-0.5deg)",
                },
                children: [
                  i.jsx("div", {
                    className:
                      "text-xs font-bold uppercase tracking-widest mb-4",
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      color: "#130D01",
                      letterSpacing: "0.16em",
                    },
                    children: "Free · Bilingual · No login needed",
                  }),
                  i.jsx("h2", {
                    className: "font-extrabold leading-tight mb-4",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      color: "#130D01",
                      fontSize: "clamp(26px, 4vw, 42px)",
                      letterSpacing: "-0.01em",
                    },
                    children: "Call your family. Then actually talk to them.",
                  }),
                  i.jsx("p", {
                    className: "text-lg leading-relaxed mb-7",
                    style: { color: "#130D01" },
                    children:
                      'Ganthan is free, always. Open it before your next call and let one question do what a hundred "k chha?" conversations never quite managed.',
                  }),
                  i.jsx("a", {
                    href: "https://ganthan.tumlet.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center gap-3 text-white font-bold px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      background: "#130D01",
                      boxShadow: `8px 8px 0px ${be}`,
                      transform: "rotate(-0.88deg)",
                      fontSize: "1.05rem",
                    },
                    onMouseEnter: (e) =>
                      (e.currentTarget.style.transform =
                        "rotate(-0.88deg) translate(-4px,-4px)"),
                    onMouseLeave: (e) =>
                      (e.currentTarget.style.transform = "rotate(-0.88deg)"),
                    children: "Start a conversation",
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    })
  ),
  x6 = ({ items: e, height: t = 200 }) => {
    const [n, r] = x.useState(!1),
      o = x.useRef([]),
      [a, s] = x.useState({}),
      l = (f) =>
        f && f.naturalWidth && f.naturalHeight
          ? (t * f.naturalWidth) / f.naturalHeight
          : f && f.videoWidth && f.videoHeight
            ? (t * f.videoWidth) / f.videoHeight
            : t * 1.5,
      c = [...e, ...e],
      u = (f, d) => {
        d &&
          d.naturalWidth &&
          d.naturalHeight &&
          !a[f] &&
          s((m) => ({ ...m, [f]: l(d) }));
      },
      p = (f, d) => {
        d &&
          d.videoWidth &&
          d.videoHeight &&
          !a[f] &&
          s((m) => ({ ...m, [f]: (t * d.videoWidth) / d.videoHeight }));
      };
    return i.jsxs("div", {
      className: "relative overflow-hidden w-full",
      style: { height: t },
      onMouseEnter: () => r(!0),
      onMouseLeave: () => r(!1),
      children: [
        i.jsx("div", {
          className: `flex gap-4 w-max animate-marquee${n ? " paused" : ""}`,
          style: {
            animationDuration: "30s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          },
          children: c.map((f, d) =>
            i.jsx(
              "div",
              {
                className: "flex-shrink-0 rounded-lg overflow-hidden",
                style: {
                  height: t,
                  width: a[d] || t * 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                onMouseEnter: () => {
                  var m;
                  f.type === "video" &&
                    o.current[d] &&
                    ((m = o.current[d]) == null || m.play());
                },
                onMouseLeave: () => {
                  var m;
                  f.type === "video" &&
                    o.current[d] &&
                    ((m = o.current[d]) == null || m.pause(),
                    (o.current[d].currentTime = 0));
                },
                children:
                  f.type === "image"
                    ? i.jsx("img", {
                        src: f.src,
                        alt: f.alt || "",
                        className: "object-contain w-full h-full",
                        draggable: !1,
                        onLoad: (m) => u(d, m.currentTarget),
                      })
                    : i.jsx("video", {
                        ref: (m) => (o.current[d] = m),
                        src: f.src,
                        poster: f.poster,
                        className: "object-contain w-full h-full",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        preload: "metadata",
                        style: { pointerEvents: "none" },
                        onLoadedMetadata: (m) => p(d, m.currentTarget),
                      }),
              },
              d,
            ),
          ),
        }),
        i.jsx("style", {
          children: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `,
        }),
      ],
    });
  },
  v6 = [
    {
      name: "Bluff Momo",
      emoji: "🥟",
      description:
        "Bluff, deceive, and outsmart your way to victory. Based in the streets of Kathmandu.",
      category: "Bluffing",
      bestFor: "Competitive groups",
      videoUrl: "https://www.youtube.com/watch?v=di6Ek8Nf4mQ",
    },
    {
      name: "Race to Tundikhel",
      emoji: "🏁",
      description:
        "Think Ludo but psychological. Less luck, more mind games and chaos.",
      category: "Mind Games",
      bestFor: "Thinkers",
      videoUrl:
        "https://drive.google.com/file/d/1TdYXJFCyP2mrr9zSUOmOFdj7bRrK7Gps/view?usp=drive_link",
    },
    {
      name: "Danger Danger",
      emoji: "⚡",
      description:
        "Think fast, act faster. High-pressure rounds that get everyone screaming.",
      category: "Fast-paced",
      bestFor: "High-energy groups",
      videoUrl: "https://www.youtube.com/watch?v=IRk1hsFjlww",
    },
    {
      name: "Cluedo",
      emoji: "🔍",
      description:
        "Solve a murder mystery. Deduce the weapon, location, and culprit before anyone else.",
      category: "Mystery",
      bestFor: "Wannabe detectives",
      videoUrl: "https://www.youtube.com/watch?v=LTUFY0URGQo",
    },
    {
      name: "Dixit",
      emoji: "🎨",
      description:
        "Tell stories through surreal art. Be creative enough to fool some, but not all.",
      category: "Creative",
      bestFor: "Imaginative teams",
      videoUrl: "https://www.youtube.com/watch?v=Qi4MoW6NuaQ&t=15s",
    },
    {
      name: "Firiri",
      emoji: "🎵",
      description:
        "Cards Against Humanity meets Nepali songs. For the playlist lovers who know every lyric.",
      category: "Music",
      bestFor: "Nepali music fans",
      videoUrl: "https://www.youtube.com/watch?v=Uyciy8LmmXg",
    },
    {
      name: "Codenames",
      emoji: "🕵️",
      description:
        "Give one-word clues. Hope your team gets all your words. Classic smart chaos.",
      category: "Wordplay",
      bestFor: "Wordsmiths",
    },
    {
      name: "Ticket to Ride",
      emoji: "🚂",
      description:
        "Claim train routes across the map. Block your frenemies. Chill but sneaky.",
      category: "Strategy",
      bestFor: "Planners",
    },
    {
      name: "That's Not a Hat",
      emoji: "🎩",
      description:
        "Remember what gift you got? No? Bluff anyway. A hilarious memory game.",
      category: "Memory",
      bestFor: "Forgetful friends",
    },
    {
      name: "Carcassonne",
      emoji: "🏰",
      description:
        "Build medieval landscapes tile by tile. Claim cities, roads, and monasteries.",
      category: "Tile Placement",
      bestFor: "Strategic builders",
    },
    {
      name: "Catan",
      emoji: "🌾",
      description:
        "Trade resources, build settlements, and negotiate like your career depends on it.",
      category: "Trading",
      bestFor: "Deal-makers",
    },
    {
      name: "Flip 7",
      emoji: "🃏",
      description:
        "Keep flipping cards. Push your luck. Hit 8 and you're out. Simple, addictive, ruthless.",
      category: "Push Your Luck",
      bestFor: "Risk-takers",
    },
    {
      name: "Secret Hitler",
      emoji: "🗳️",
      description:
        "Liberals vs fascists. Trust no one. Find the hidden threat before it's too late.",
      category: "Social Deduction",
      bestFor: "Paranoid groups",
    },
    {
      name: "Scout",
      emoji: "🔭",
      description:
        "Your hand stays as dealt — no rearranging. Recruit cards and build combos to win.",
      category: "Card Climbing",
      bestFor: "Quick learners",
    },
    {
      name: "Startup",
      emoji: "🚀",
      description:
        "Build your company from nothing, raise funds, hire talent, and crush rival founders.",
      category: "Business",
      bestFor: "Ambitious teams",
    },
    {
      name: "Guess the Price",
      emoji: "🏷️",
      description:
        "We buy everyday Nepali items. You guess the price. Closest guess wins the item.",
      category: "Add-on",
      bestFor: "Everyone",
    },
  ],
  w6 = [
    {
      num: "01",
      title: "You pick",
      desc: "Choose games from our collection. Or let us surprise you with a curated mix.",
      accent: "#F3B952",
    },
    {
      num: "02",
      title: "We set up",
      desc: "We show up, bring everything, explain the rules, and host the full session.",
      accent: "#F16147",
    },
    {
      num: "03",
      title: "You play",
      desc: "Your team bonds, competes, laughs, and forgets about Jira for two hours.",
      accent: "#2D7A4F",
    },
  ],
  b6 = [
    {
      type: "image",
      src: "/blogs/corporate-game-night/1.jpg",
      alt: "Game night photo",
    },
    { type: "video", src: "/blogs/corporate-game-night/2.mp4" },
    {
      type: "image",
      src: "/blogs/corporate-game-night/3.jpg",
      alt: "Game night photo",
    },
    { type: "video", src: "/blogs/corporate-game-night/4.mp4" },
    {
      type: "image",
      src: "/blogs/corporate-game-night/10.jpg",
      alt: "Game night photo",
    },
    { type: "video", src: "/blogs/corporate-game-night/6.mov" },
    { type: "image", src: "/blogs/corporate-game-night/7.jpg" },
    {
      type: "image",
      src: "/blogs/corporate-game-night/8.jpg",
      alt: "Game night photo",
    },
    { type: "image", src: "/blogs/corporate-game-night/9.jpg" },
  ],
  C6 = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1);
    x.useEffect(() => {
      document.title =
        "Corporate Game Night | Tumlet - Team Building with Board Games";
      let a = document.querySelector("meta[name='description']");
      (a ||
        ((a = document.createElement("meta")),
        a.setAttribute("name", "description"),
        document.head.appendChild(a)),
        a.setAttribute(
          "content",
          "Host a fun corporate game night with Tumlet. We bring board games to your office, set everything up, and run the entire 2-hour session for your team.",
        ));
    }, []);
    const o = () => {
      const a = encodeURIComponent("Corporate Game Night Inquiry"),
        s = encodeURIComponent(`Hi Tumlet team,

I am interested in hosting a corporate game night for my team. Please provide more details.

Thanks!`);
      window.open(`mailto:tumletgames@gmail.com?subject=${a}&body=${s}`);
    };
    return i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      style: {
        background: "#ffffff",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
        color: "#130D01",
      },
      children: [
        i.jsx(Ze, {}),
        i.jsxs("main", {
          className: "flex-1",
          children: [
            i.jsxs("section", {
              style: {
                maxWidth: 900,
                margin: "0 auto",
                padding: "64px 24px 0",
                textAlign: "center",
              },
              children: [
                i.jsx("span", {
                  style: {
                    display: "inline-block",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#F16147",
                    background: "#FDE8E4",
                    padding: "6px 16px",
                    borderRadius: 999,
                    marginBottom: 24,
                  },
                  children: "Team bonding · Kathmandu",
                }),
                i.jsxs("h1", {
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 6vw, 64px)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.01em",
                    color: "#130D01",
                    marginTop: 0,
                    marginBottom: 20,
                  },
                  children: [
                    "We bring the games.",
                    i.jsx("br", {}),
                    "You bring the team.",
                  ],
                }),
                i.jsx("p", {
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    lineHeight: 1.55,
                    color: "#4B5563",
                    maxWidth: 580,
                    margin: "0 auto 40px",
                  },
                  children:
                    "We show up at your office with a bunch of board games, set everything up, explain all the rules, and host the entire session. Your team just has to show up and have fun.",
                }),
                i.jsx("button", {
                  onClick: o,
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#ffffff",
                    background: "#F16147",
                    padding: "14px 36px",
                    borderRadius: 12,
                    border: "none",
                    boxShadow: "8px 8px 0 #F3B952",
                    transform: e
                      ? "rotate(-0.88deg) translate(-3px,-3px)"
                      : "rotate(-0.88deg)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  },
                  onMouseEnter: () => t(!0),
                  onMouseLeave: () => t(!1),
                  children: "Book your game night →",
                }),
              ],
            }),
            i.jsx("div", {
              style: { margin: "64px 0 0" },
              children: i.jsx(x6, { items: b6, height: 220 }),
            }),
            i.jsxs("section", {
              style: {
                maxWidth: 1e3,
                margin: "0 auto",
                padding: "80px 24px 0",
              },
              children: [
                i.jsxs("div", {
                  style: { textAlign: "center", marginBottom: 48 },
                  children: [
                    i.jsx("span", {
                      style: {
                        display: "inline-block",
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#2D7A4F",
                        background: "#EDF5DD",
                        padding: "6px 14px",
                        borderRadius: 999,
                        marginBottom: 16,
                      },
                      children: "How it works",
                    }),
                    i.jsx("h2", {
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(28px, 4vw, 42px)",
                        color: "#130D01",
                        margin: 0,
                      },
                      children: "Three steps. Zero effort from you.",
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 24,
                  },
                  children: w6.map((a) =>
                    i.jsxs(
                      "div",
                      {
                        style: {
                          background: "#FAF1E4",
                          border: "3px solid #130D01",
                          borderRadius: 16,
                          boxShadow: `6px 6px 0 ${a.accent}`,
                          padding: "32px 28px",
                          position: "relative",
                          overflow: "hidden",
                        },
                        children: [
                          i.jsx("div", {
                            style: {
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 800,
                              fontSize: 48,
                              color: a.accent,
                              opacity: 0.25,
                              position: "absolute",
                              top: 12,
                              right: 18,
                              lineHeight: 1,
                            },
                            children: a.num,
                          }),
                          i.jsx("h3", {
                            style: {
                              fontFamily: "'Baloo 2', sans-serif",
                              fontWeight: 800,
                              fontSize: 24,
                              color: "#130D01",
                              marginTop: 0,
                              marginBottom: 8,
                            },
                            children: a.title,
                          }),
                          i.jsx("p", {
                            style: {
                              fontFamily: "'Baloo 2', sans-serif",
                              fontSize: 16,
                              lineHeight: 1.55,
                              color: "#4B5563",
                              margin: 0,
                            },
                            children: a.desc,
                          }),
                        ],
                      },
                      a.num,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx("section", {
              style: {
                maxWidth: 520,
                margin: "0 auto",
                padding: "80px 24px 0",
                textAlign: "center",
              },
              children: i.jsxs("div", {
                style: {
                  background: "#130D01",
                  border: "3px solid #130D01",
                  borderRadius: 20,
                  boxShadow: "10px 10px 0 #F3B952",
                  padding: "48px 36px",
                  transform: "rotate(-0.5deg)",
                  color: "#FAF1E4",
                },
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#F3B952",
                      marginBottom: 16,
                    },
                    children: "Pricing",
                  }),
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(40px, 5vw, 56px)",
                      lineHeight: 1,
                      marginBottom: 8,
                    },
                    children: "Rs. 10,000",
                  }),
                  i.jsx("p", {
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      fontSize: 18,
                      color: "#d4c9b5",
                      margin: "0 0 24px",
                    },
                    children: "for up to 20 people · 2-hour session",
                  }),
                  i.jsx("div", {
                    style: {
                      display: "inline-flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: 10,
                    },
                    children: [
                      "We bring the games",
                      "We explain the rules",
                      "We host the session",
                    ].map((a) =>
                      i.jsxs(
                        "span",
                        {
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 13,
                            fontWeight: 600,
                            padding: "6px 14px",
                            borderRadius: 999,
                            background: "rgba(243,185,82,0.15)",
                            color: "#F3B952",
                          },
                          children: ["✓ ", a],
                        },
                        a,
                      ),
                    ),
                  }),
                  i.jsx("p", {
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      color: "#8a8070",
                      marginTop: 24,
                      marginBottom: 0,
                    },
                    children: "Got a bigger team? Email us for a custom quote.",
                  }),
                ],
              }),
            }),
            i.jsxs("section", {
              style: {
                maxWidth: 1100,
                margin: "0 auto",
                padding: "80px 24px 0",
              },
              children: [
                i.jsxs("div", {
                  style: { textAlign: "center", marginBottom: 48 },
                  children: [
                    i.jsx("span", {
                      style: {
                        display: "inline-block",
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#F16147",
                        background: "#FDE8E4",
                        padding: "6px 14px",
                        borderRadius: 999,
                        marginBottom: 16,
                      },
                      children: "Pick your lineup",
                    }),
                    i.jsx("h2", {
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(28px, 4vw, 42px)",
                        color: "#130D01",
                        margin: "0 0 8px",
                      },
                      children: "Our game collection",
                    }),
                    i.jsx("p", {
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontSize: 17,
                        color: "#6B6B6B",
                        margin: 0,
                      },
                      children:
                        "Pick ~3 games for your night. We'll teach all the rules in person.",
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 20,
                  },
                  children: v6.map((a, s) =>
                    i.jsx(k6, { game: a, index: s }, a.name),
                  ),
                }),
              ],
            }),
            i.jsx("section", {
              style: {
                maxWidth: 760,
                margin: "80px auto 96px",
                padding: "0 24px",
              },
              children: i.jsxs("div", {
                style: {
                  background: "#F3B952",
                  border: "3px solid #130D01",
                  boxShadow: "12px 12px 0 #130D01",
                  transform: "rotate(-0.5deg)",
                  borderRadius: 20,
                  textAlign: "center",
                  padding: "48px 32px",
                },
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: "#130D01",
                      marginBottom: 14,
                    },
                    children: "Ready to play?",
                  }),
                  i.jsx("h3", {
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(24px, 3.5vw, 34px)",
                      color: "#130D01",
                      marginTop: 0,
                      marginBottom: 14,
                      lineHeight: 1.15,
                    },
                    children: "Email us. Pick a date. We'll handle the rest.",
                  }),
                  i.jsx("p", {
                    style: {
                      fontSize: 17,
                      lineHeight: 1.5,
                      color: "#130D01",
                      marginBottom: 24,
                      marginTop: 0,
                    },
                    children:
                      "tumletgames@gmail.com — include your office name, team size, and preferred date.",
                  }),
                  i.jsx("button", {
                    onClick: o,
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      background: "#130D01",
                      color: "#ffffff",
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      padding: "14px 36px",
                      borderRadius: 12,
                      border: "none",
                      boxShadow: "8px 8px 0 #F16147",
                      transform: n
                        ? "rotate(-0.88deg) translateY(-4px)"
                        : "rotate(-0.88deg)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    },
                    onMouseEnter: () => r(!0),
                    onMouseLeave: () => r(!1),
                    children: "Book your game night →",
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    });
  },
  j6 = {
    Bluffing: { bg: "#FDE8E4", text: "#F16147" },
    "Mind Games": { bg: "#FFF3D6", text: "#B8860B" },
    "Fast-paced": { bg: "#FFE8D6", text: "#D2691E" },
    Mystery: { bg: "#E8E0F0", text: "#6A0DAD" },
    Creative: { bg: "#EDF5DD", text: "#2D7A4F" },
    Music: { bg: "#FFF3D6", text: "#B8860B" },
    Wordplay: { bg: "#E8E0F0", text: "#6A0DAD" },
    Strategy: { bg: "#D6EEFF", text: "#1565C0" },
    Memory: { bg: "#FFE8F0", text: "#C2185B" },
    "Tile Placement": { bg: "#E0D6C0", text: "#5D4037" },
    Trading: { bg: "#EDF5DD", text: "#2D7A4F" },
    "Push Your Luck": { bg: "#FDE8E4", text: "#F16147" },
    "Social Deduction": { bg: "#E8E0F0", text: "#6A0DAD" },
    "Card Climbing": { bg: "#D6EEFF", text: "#1565C0" },
    Business: { bg: "#D6EEFF", text: "#1565C0" },
    "Add-on": { bg: "#F0F0F0", text: "#666666" },
  },
  Np = [
    -0.8, 0.5, -0.3, 0.7, -0.6, 0.4, -0.5, 0.8, -0.4, 0.6, -0.7, 0.3, -0.9, 0.5,
    -0.2, 0.9,
  ];
function k6({ game: e, index: t }) {
  const [n, r] = x.useState(!1),
    o = j6[e.category] || { bg: "#F0F0F0", text: "#666" },
    a = Np[t % Np.length];
  return i.jsxs("div", {
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    style: {
      background: "#FAF1E4",
      border: "2.5px solid #130D01",
      borderRadius: 14,
      boxShadow: n ? "8px 8px 0 #130D01" : "5px 5px 0 #130D01",
      padding: "24px 22px",
      transform: n ? `rotate(${a}deg) translate(-3px,-3px)` : `rotate(${a}deg)`,
      transition: "all 0.2s",
      cursor: "default",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    children: [
      i.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: 10 },
        children: [
          i.jsx("span", { style: { fontSize: 28 }, children: e.emoji }),
          i.jsx("h3", {
            style: {
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 19,
              color: "#130D01",
              margin: 0,
            },
            children: e.name,
          }),
        ],
      }),
      i.jsx("span", {
        style: {
          display: "inline-block",
          alignSelf: "flex-start",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: o.text,
          background: o.bg,
          padding: "3px 10px",
          borderRadius: 999,
        },
        children: e.category,
      }),
      i.jsx("p", {
        style: {
          fontFamily: "'Baloo 2', sans-serif",
          fontSize: 15,
          lineHeight: 1.5,
          color: "#4B5563",
          margin: 0,
          flex: 1,
        },
        children: e.description,
      }),
      i.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          flexWrap: "wrap",
        },
        children: [
          i.jsxs("div", {
            style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              color: "#9CA3AF",
              fontWeight: 600,
            },
            children: ["Best for: ", e.bestFor],
          }),
          e.videoUrl &&
            i.jsx("a", {
              href: e.videoUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: "#F16147",
                textDecoration: "none",
                whiteSpace: "nowrap",
              },
              children: "Watch how to play →",
            }),
        ],
      }),
    ],
  });
}
function Or(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function oi(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function S6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
function T6(e) {
  let t = document.querySelector("script[type='application/ld+json']");
  (t ||
    ((t = document.createElement("script")),
    t.setAttribute("type", "application/ld+json"),
    document.head.appendChild(t)),
    (t.textContent = JSON.stringify(e)));
}
const xe = "#2D5A27",
  E6 = "#5A8A4A",
  Gl = "#C8E2B4",
  N6 = [
    {
      icon: "1",
      title: "Open Thug and pick a category.",
      body: "Choose from deeply Nepali categories — last names, दाल types, cities, Kathmandu landmarks, Nepali snacks. There's no shortage.",
    },
    {
      icon: "2",
      title: "Pass the phone around — secretly.",
      body: `Everyone reads the word in turn. Everyone except one person: they see "THUG" instead. They've got nothing. They've got to fake it.`,
    },
    {
      icon: "3",
      title: "Go around — one clue each.",
      body: "Each player gives a single word clue about the category word. The Thug listens carefully and bluffs their way through. Watch faces. Listen closely.",
    },
    {
      icon: "4",
      title: "Vote — and find out who was lying.",
      body: "If the group correctly identifies the Thug, everyone wins. If the Thug survives without being caught, they win. It's pure social intelligence.",
    },
  ],
  F6 = () => (
    x.useEffect(() => {
      ((document.title =
        "Thug | Social Deduction Game for Nepali Friend Groups"),
        Or(
          "description",
          "Thug is a free social deduction game for Nepali friend groups. One person gets a different word — can you figure out who? Built around Nepali culture.",
        ),
        Or(
          "keywords",
          "thug game, nepali social deduction game, nepali party game, tumlet, nepali friend groups",
        ),
        S6("https://tumlet.com/thug/"),
        oi("og:title", "Thug | Social Deduction Game for Nepali Friend Groups"),
        oi(
          "og:description",
          "Thug is a free social deduction game for Nepali friend groups. One person gets a different word — can you figure out who? Built around Nepali culture.",
        ),
        oi("og:type", "website"),
        oi("og:url", "https://tumlet.com/thug/"),
        oi("og:image", "https://tumlet.com/tumlet-logo.png"),
        Or("twitter:card", "summary_large_image"),
        Or(
          "twitter:title",
          "Thug | Social Deduction Game for Nepali Friend Groups",
        ),
        Or(
          "twitter:description",
          "Thug is a free social deduction game for Nepali friend groups. One person gets a different word — can you figure out who? Built around Nepali culture.",
        ),
        Or("twitter:image", "https://tumlet.com/tumlet-logo.png"),
        T6({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Thug",
          description:
            "A free social deduction game for Nepali friend groups. One person gets a different word and must bluff their way through.",
          url: "https://thug.tumlet.com/",
          applicationCategory: "Game",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          numberOfPlayers: {
            "@type": "QuantitativeValue",
            minValue: 3,
            maxValue: 10,
          },
          creator: {
            "@type": "Organization",
            name: "Tumlet",
            url: "https://tumlet.com",
          },
        }));
    }, []),
    i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      style: {
        background: "#ffffff",
        color: "#130D01",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
      },
      children: [
        i.jsx(Ze, {}),
        i.jsxs("main", {
          className: "flex-1",
          children: [
            i.jsx("section", {
              className: "max-w-[1280px] mx-auto px-6 md:px-12 pt-14 mb-20",
              children: i.jsxs("div", {
                className: "relative rounded-[20px] overflow-hidden border-4",
                style: { background: "#EDF5E8", borderColor: xe },
                children: [
                  i.jsxs("div", {
                    className: "px-8 md:px-16 pt-14 pb-12 text-center",
                    children: [
                      i.jsx("span", {
                        className:
                          "inline-block text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full border-2 mb-8",
                        style: {
                          fontFamily: "'Outfit', sans-serif",
                          background: "#FAF1E4",
                          color: xe,
                          borderColor: xe,
                          letterSpacing: "0.1em",
                        },
                        children: "Thug · tumlet.com/thug",
                      }),
                      i.jsx("h1", {
                        className: "font-extrabold mb-5 leading-tight",
                        style: {
                          fontFamily: "'Baloo 2', sans-serif",
                          color: "#130D01",
                          fontSize: "clamp(30px, 5vw, 58px)",
                          letterSpacing: "-0.01em",
                        },
                        children:
                          "Thug — the social deduction game for Nepali friend groups",
                      }),
                      i.jsx("p", {
                        className: "font-semibold text-2xl mb-8",
                        style: {
                          fontFamily: "'Outfit', sans-serif",
                          color: E6,
                        },
                        children:
                          "There is a Thug among you. They're hiding in plain sight.",
                      }),
                      i.jsxs("div", {
                        className:
                          "flex justify-center items-center gap-8 flex-wrap",
                        children: [
                          i.jsx("a", {
                            href: "https://thug.tumlet.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "inline-flex items-center gap-3 font-bold px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap text-white",
                            style: {
                              fontFamily: "'Baloo 2', sans-serif",
                              background: xe,
                              boxShadow: "8px 8px 0px #130D01",
                              transform: "rotate(-0.88deg)",
                              fontSize: "1.1rem",
                            },
                            onMouseEnter: (e) =>
                              (e.currentTarget.style.transform =
                                "rotate(-0.88deg) translate(-4px,-4px)"),
                            onMouseLeave: (e) =>
                              (e.currentTarget.style.transform =
                                "rotate(-0.88deg)"),
                            children: "Find the Thug",
                          }),
                          i.jsx("a", {
                            href: "#how-it-works",
                            className: "underline font-medium text-base",
                            style: { color: xe },
                            children: "See how to play →",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "grid grid-cols-3 border-t-2",
                    style: { background: "#FAF1E4", borderColor: xe },
                    children: [
                      { num: "3–99+", lbl: "players" },
                      { num: "Free", lbl: "to play" },
                      { num: "10 min", lbl: "a round" },
                    ].map(({ num: e, lbl: t }, n) =>
                      i.jsxs(
                        "div",
                        {
                          className: "py-5 text-center",
                          style: {
                            borderRight: n < 2 ? `2px solid ${xe}` : void 0,
                          },
                          children: [
                            i.jsx("div", {
                              className: "font-extrabold text-2xl leading-none",
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                color: xe,
                              },
                              children: e,
                            }),
                            i.jsx("div", {
                              className:
                                "text-sm font-semibold uppercase tracking-wider mt-1.5",
                              style: {
                                color: "#6B6B6B",
                                letterSpacing: "0.04em",
                              },
                              children: t,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            i.jsxs("section", {
              id: "how-it-works",
              className: "max-w-[1180px] mx-auto px-6 mb-24",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-12",
                  children: [
                    i.jsx("span", {
                      className:
                        "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        color: xe,
                        letterSpacing: "0.18em",
                      },
                      children: "How to play",
                    }),
                    i.jsx("h2", {
                      className: "font-extrabold leading-tight",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        color: "#130D01",
                        fontSize: "clamp(28px, 4vw, 44px)",
                        letterSpacing: "-0.01em",
                      },
                      children: "Four steps and you're playing.",
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: {
                    border: `3px solid ${xe}`,
                    background: "#FAF1E4",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  },
                  className: "rounded-2xl overflow-hidden",
                  children: N6.map(({ icon: e, title: t, body: n }, r) =>
                    i.jsxs(
                      "div",
                      {
                        className: "flex gap-5 items-start p-8",
                        style: {
                          borderRight: `2px solid ${xe}`,
                          borderBottom: `2px solid ${xe}`,
                        },
                        children: [
                          i.jsx("div", {
                            className:
                              "flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl",
                            style: {
                              width: 56,
                              height: 56,
                              fontFamily: "'Outfit', sans-serif",
                              background: Gl,
                              border: `2px solid ${xe}`,
                              color: xe,
                            },
                            children: e,
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("h3", {
                                style: {
                                  fontFamily: "'Baloo 2', sans-serif",
                                  color: xe,
                                },
                                className:
                                  "font-bold text-xl mb-1.5 leading-tight",
                                children: t,
                              }),
                              i.jsx("p", {
                                className: "text-sm leading-relaxed",
                                style: { color: "#3a3225" },
                                children: n,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
            i.jsxs("section", {
              className: "py-20 mb-24 relative overflow-hidden",
              style: { background: xe, color: "white" },
              children: [
                i.jsx("div", {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle at 15% 40%, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(circle at 80% 65%, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "44px 44px, 66px 66px",
                  },
                }),
                i.jsxs("div", {
                  className: "max-w-[1180px] mx-auto px-6 relative",
                  children: [
                    i.jsxs("div", {
                      className: "text-center mb-14",
                      children: [
                        i.jsx("span", {
                          className:
                            "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            color: "#F3B952",
                            letterSpacing: "0.18em",
                          },
                          children: "What makes Thug different",
                        }),
                        i.jsx("h2", {
                          className: "font-extrabold leading-tight",
                          style: {
                            fontFamily: "'Baloo 2', sans-serif",
                            fontSize: "clamp(28px, 5vw, 52px)",
                            letterSpacing: "-0.01em",
                          },
                          children: "Built for people who grew up Nepali.",
                        }),
                        i.jsx("p", {
                          className: "text-lg mt-3 max-w-lg mx-auto",
                          style: { color: Gl },
                          children:
                            "The categories are the game. And these categories are ours.",
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                      children: [
                        {
                          num: "01",
                          title: "All categories are deeply Nepali",
                          body: `No generic "animals" or "countries" lists. Every category is something that makes a Nepali person lean forward — last names, foods, places, brands, things you only know if you're from here.`,
                        },
                        {
                          num: "02",
                          title: "No app required during gameplay",
                          body: "Thug generates the word and distributes it. After that, put the phone down and play. The social part of the game happens offline, in the room, between the people.",
                        },
                        {
                          num: "03",
                          title: "Works with any group size 3–99+",
                          body: "Three friends at a hostel or a huge family gathering — Thug scales. Any age that knows their Nepali culture can play. That's most of the table.",
                        },
                      ].map(({ num: e, title: t, body: n }) =>
                        i.jsxs(
                          "div",
                          {
                            className: "rounded-2xl p-7",
                            style: {
                              background: "rgba(255,255,255,0.1)",
                              border: "2px solid rgba(255,255,255,0.2)",
                            },
                            children: [
                              i.jsx("div", {
                                className: "font-black leading-none mb-4",
                                style: {
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: 40,
                                  color: "#F3B952",
                                },
                                children: e,
                              }),
                              i.jsx("h3", {
                                className:
                                  "font-bold text-xl mb-3 leading-tight",
                                style: { fontFamily: "'Baloo 2', sans-serif" },
                                children: t,
                              }),
                              i.jsx("p", {
                                className: "text-sm leading-relaxed",
                                style: { color: Gl },
                                children: n,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("section", {
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: [
                i.jsx("span", {
                  className:
                    "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6",
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    color: xe,
                    background: "#EDF5E8",
                    letterSpacing: "0.18em",
                  },
                  children: "The categories",
                }),
                i.jsx("h2", {
                  className: "font-extrabold mb-6 leading-tight",
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    color: "#130D01",
                    fontSize: "clamp(26px, 4vw, 40px)",
                    letterSpacing: "-0.01em",
                  },
                  children: "You'll know these. That's the whole point.",
                }),
                i.jsx("p", {
                  className: "text-lg leading-relaxed mb-8",
                  style: { color: "#2a241a" },
                  children:
                    "The categories in Thug are the reason it works. They're specific enough that everyone has an opinion, familiar enough that giving a clue should be easy — unless you're the Thug.",
                }),
                i.jsx("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    "Food · खाना",
                    "Location · स्थान",
                    "Brands",
                    "Lastname · थर",
                    "KTM Cafés",
                    "Animals · जनावर",
                  ].map((e) =>
                    i.jsx(
                      "span",
                      {
                        className:
                          "px-5 py-2.5 rounded-full font-semibold text-sm",
                        style: {
                          fontFamily: "'Baloo 2', sans-serif",
                          background: "#EDF5E8",
                          border: `2px solid ${xe}`,
                          color: xe,
                        },
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx("section", {
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: i.jsxs("div", {
                className: "text-center px-8 py-14 rounded-[20px]",
                style: {
                  background: "#F3B952",
                  border: "3px solid #130D01",
                  boxShadow: "12px 12px 0 #130D01",
                  transform: "rotate(-0.5deg)",
                },
                children: [
                  i.jsx("div", {
                    className:
                      "text-xs font-bold uppercase tracking-widest mb-4",
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      color: "#130D01",
                      letterSpacing: "0.16em",
                    },
                    children: "Free · No login · 3–99+ players",
                  }),
                  i.jsx("h2", {
                    className: "font-extrabold leading-tight mb-4",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      color: "#130D01",
                      fontSize: "clamp(26px, 4vw, 42px)",
                      letterSpacing: "-0.01em",
                    },
                    children: "Someone in your group is lying right now.",
                  }),
                  i.jsx("p", {
                    className: "text-lg leading-relaxed mb-7",
                    style: { color: "#130D01" },
                    children:
                      "Thug is free and needs no installation. Open it, pick a category, pass the phone. The game starts the moment everyone looks at their screen.",
                  }),
                  i.jsx("a", {
                    href: "https://thug.tumlet.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center gap-3 text-white font-bold px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      background: "#130D01",
                      boxShadow: `8px 8px 0px ${xe}`,
                      transform: "rotate(-0.88deg)",
                      fontSize: "1.05rem",
                    },
                    onMouseEnter: (e) =>
                      (e.currentTarget.style.transform =
                        "rotate(-0.88deg) translate(-4px,-4px)"),
                    onMouseLeave: (e) =>
                      (e.currentTarget.style.transform = "rotate(-0.88deg)"),
                    children: "Find the Thug",
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    })
  );
function Br(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function ii(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function P6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
function A6(e) {
  let t = document.querySelector("script[type='application/ld+json']");
  (t ||
    ((t = document.createElement("script")),
    t.setAttribute("type", "application/ld+json"),
    document.head.appendChild(t)),
    (t.textContent = JSON.stringify(e)));
}
const R6 = [
    {
      icon: "1",
      title: "Everyone opens the app.",
      body: "All players open Farak on their phone. Most see the same question. One person — picked at random — sees something completely different. Nobody knows who got the different one.",
    },
    {
      icon: "2",
      title: "Everyone points at someone.",
      body: "On three, everyone points at the person who best fits their question. Fingers go up at the same time. Most fingers will go in similar directions. One set might not.",
    },
    {
      icon: "3",
      title: "The real question is revealed.",
      body: "The original question appears for everyone to see. Now someone's logic starts to sound strange. Their answer made sense for a different question. The crack is there — you just have to find it.",
    },
    {
      icon: "4",
      title: "Everyone defends their answer.",
      body: "Each person explains who they pointed at and why. The imposter has to lie. They heard a different question, so their reasoning will have a strange edge. They have to make it sound normal.",
    },
    {
      icon: "5",
      title: "Vote on who got the different question.",
      body: "The group votes. If you catch the imposter, they lose. If they bluff well enough to avoid the vote, they win. Simple. Brutal. Extremely revealing.",
    },
  ],
  O6 = () => (
    x.useEffect(() => {
      ((document.title =
        "Farak | Who's Most Likely To — With an Imposter Twist"),
        Br(
          "description",
          "Farak is the imposter edition of Who's Most Likely To. Everyone gets the same question — except one. Can you catch the odd one out? Play free online.",
        ),
        Br(
          "keywords",
          "farak, whos most likely to, imposter game, party game online, nepali party game, tumlet",
        ),
        P6("https://tumlet.com/farak/"),
        ii("og:title", "Farak | Who's Most Likely To — With an Imposter Twist"),
        ii(
          "og:description",
          "Farak is the imposter edition of Who's Most Likely To. Everyone gets the same question — except one. Can you catch the odd one out? Play free online.",
        ),
        ii("og:type", "website"),
        ii("og:url", "https://tumlet.com/farak/"),
        ii("og:image", "https://tumlet.com/og-farak.png"),
        Br("twitter:card", "summary_large_image"),
        Br(
          "twitter:title",
          "Farak | Who's Most Likely To — With an Imposter Twist",
        ),
        Br(
          "twitter:description",
          "Farak is the imposter edition of Who's Most Likely To. Everyone gets the same question — except one. Can you catch the odd one out? Play free online.",
        ),
        Br("twitter:image", "https://tumlet.com/og-farak.png"),
        A6({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Farak",
          description:
            "The imposter edition of Who's Most Likely To. Everyone gets the same question — except one player who gets something different.",
          url: "https://farak.tumlet.com/",
          applicationCategory: "Game",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          creator: {
            "@type": "Organization",
            name: "Tumlet",
            url: "https://tumlet.com",
          },
        }));
    }, []),
    i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      style: {
        background: "#ffffff",
        color: "#130D01",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
      },
      children: [
        i.jsx(Ze, {}),
        i.jsxs("main", {
          className: "flex-1",
          children: [
            i.jsxs("section", {
              className:
                "max-w-[760px] mx-auto px-6 pt-16 pb-0 mb-0 text-center",
              children: [
                i.jsx("span", {
                  className:
                    "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6",
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    color: "#F16147",
                    background: "#FDE8E4",
                    letterSpacing: "0.18em",
                  },
                  children: "Tumlet · 3–10 players · Free",
                }),
                i.jsx("h1", {
                  className: "font-extrabold mb-5 leading-tight",
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    color: "#130D01",
                    fontSize: "clamp(32px, 5vw, 58px)",
                    letterSpacing: "-0.01em",
                  },
                  children:
                    "Farak — Who's Most Likely To, but with an imposter",
                }),
                i.jsx("p", {
                  className: "font-semibold mb-7 leading-snug",
                  style: {
                    color: "#4B5563",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                  },
                  children:
                    "One person got a completely different question. They don't know it. You have to find them.",
                }),
                i.jsxs("div", {
                  className:
                    "flex justify-center items-center gap-8 flex-wrap mb-14",
                  children: [
                    i.jsx("a", {
                      href: "https://farak.tumlet.com/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontSize: "1.1rem",
                        background: "#F16147",
                        boxShadow: "8px 8px 0px #F3B952",
                        transform: "rotate(-0.88deg)",
                      },
                      onMouseEnter: (e) =>
                        (e.currentTarget.style.transform =
                          "rotate(-0.88deg) translate(-4px,-4px)"),
                      onMouseLeave: (e) =>
                        (e.currentTarget.style.transform = "rotate(-0.88deg)"),
                      children: "Play Farak free →",
                    }),
                    i.jsx("a", {
                      href: "#how-it-works",
                      className: "underline font-medium text-base",
                      style: { color: "#F16147" },
                      children: "How it works →",
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("section", {
              className: "max-w-[760px] mx-auto px-6 mb-20",
              children: i.jsx("div", {
                className: "grid grid-cols-3 rounded-2xl overflow-hidden",
                style: { border: "3px solid #F16147", background: "#FAF1E4" },
                children: [
                  { num: "3–10", lbl: "players" },
                  { num: "Free", lbl: "to play" },
                  { num: "~5 min", lbl: "a round" },
                ].map(({ num: e, lbl: t }, n) =>
                  i.jsxs(
                    "div",
                    {
                      className: "py-6 text-center",
                      style: {
                        borderRight: n < 2 ? "2px solid #F16147" : void 0,
                      },
                      children: [
                        i.jsx("div", {
                          className: "font-extrabold text-3xl leading-none",
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            color: "#F16147",
                          },
                          children: e,
                        }),
                        i.jsx("div", {
                          className:
                            "text-sm font-semibold uppercase tracking-wider mt-1.5",
                          style: { color: "#6B6B6B", letterSpacing: "0.04em" },
                          children: t,
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            }),
            i.jsxs("article", {
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: [
                i.jsx("span", {
                  className:
                    "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6",
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    color: "#F16147",
                    background: "#FDE8E4",
                    letterSpacing: "0.18em",
                  },
                  children: "Why it works",
                }),
                i.jsx("h2", {
                  className: "font-extrabold mb-6 leading-tight",
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    color: "#130D01",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    letterSpacing: "-0.01em",
                  },
                  children: "The tension is instant.",
                }),
                i.jsx("p", {
                  className: "text-lg leading-relaxed mb-5",
                  style: { color: "#2a241a" },
                  children:
                    "The moment the real question drops and everyone starts explaining their answer — that's where Farak lives. One person's reasoning will have a slightly different shape. Not wrong exactly, just angled differently. The group feels it before they can name it.",
                }),
                i.jsxs("p", {
                  className: "text-lg leading-relaxed mb-5",
                  style: { color: "#2a241a" },
                  children: [
                    "Farak rewards people who read people. It's also a test of how well you know the group you're with — because a good imposter doesn't get caught by hiding. They get caught by someone who knows them well enough to notice that something is ",
                    i.jsx("em", {
                      style: { color: "#F16147", fontWeight: 600 },
                      children: "off",
                    }),
                    ".",
                  ],
                }),
                i.jsx("p", {
                  className: "text-lg leading-relaxed mb-5",
                  style: { color: "#2a241a" },
                  children:
                    "It works best with groups who already have history. The more you know each other, the sharper the reads, the better the bluffs, the louder the reveal. It's a second-or-third-hour-of-the-night game. When everyone's already talking and ready to turn on each other in the most affectionate way possible.",
                }),
              ],
            }),
            i.jsxs("section", {
              id: "how-it-works",
              className: "max-w-[1180px] mx-auto px-6 mb-24",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-12",
                  children: [
                    i.jsx("span", {
                      className:
                        "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        color: "#F16147",
                        letterSpacing: "0.18em",
                      },
                      children: "How it works",
                    }),
                    i.jsx("h2", {
                      className: "font-extrabold leading-tight",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        color: "#130D01",
                        fontSize: "clamp(28px, 4vw, 44px)",
                        letterSpacing: "-0.01em",
                      },
                      children:
                        "One different question. One imposter. Five steps.",
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: {
                    border: "3px solid #F16147",
                    background: "#FAF1E4",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  },
                  className: "rounded-2xl overflow-hidden",
                  children: R6.map(({ icon: e, title: t, body: n }, r) =>
                    i.jsxs(
                      "div",
                      {
                        className: "flex gap-5 items-start p-8",
                        style: {
                          borderRight: "2px solid #F16147",
                          borderBottom: "2px solid #F16147",
                        },
                        children: [
                          i.jsx("div", {
                            className:
                              "flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl",
                            style: {
                              width: 56,
                              height: 56,
                              fontFamily: "'Outfit', sans-serif",
                              background: "#FDE8E4",
                              border: "2px solid #F16147",
                              color: "#F16147",
                            },
                            children: e,
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("h3", {
                                className:
                                  "font-bold text-xl mb-1.5 leading-tight",
                                style: {
                                  fontFamily: "'Baloo 2', sans-serif",
                                  color: "#130D01",
                                },
                                children: t,
                              }),
                              i.jsx("p", {
                                className: "text-sm leading-relaxed",
                                style: { color: "#3a3225" },
                                children: n,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx("section", {
              className: "max-w-[760px] mx-auto mb-24 px-6",
              children: i.jsxs("div", {
                style: {
                  background: "#F3B952",
                  border: "3px solid #130D01",
                  boxShadow: "12px 12px 0 #130D01",
                  transform: "rotate(-0.5deg)",
                },
                className: "text-center px-8 py-14 rounded-[20px]",
                children: [
                  i.jsx("div", {
                    className:
                      "text-xs font-bold uppercase tracking-widest mb-4",
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      color: "#130D01",
                      letterSpacing: "0.16em",
                    },
                    children: "Free · No signup · Play with friends",
                  }),
                  i.jsx("h2", {
                    className: "font-extrabold leading-tight mb-4",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      color: "#130D01",
                      fontSize: "clamp(28px, 4vw, 44px)",
                      letterSpacing: "-0.01em",
                    },
                    children: "One of you is already lying. Find out who.",
                  }),
                  i.jsx("p", {
                    className: "text-lg leading-relaxed mb-7",
                    style: { color: "#130D01" },
                    children: "No signup. Open it, pass it around, play.",
                  }),
                  i.jsx("a", {
                    href: "https://farak.tumlet.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center gap-2 font-bold px-12 py-4 rounded-xl text-white cursor-pointer transition-all duration-200 whitespace-nowrap",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      fontSize: "1.1rem",
                      background: "#130D01",
                      boxShadow: "8px 8px 0px #F16147",
                      transform: "rotate(-0.88deg)",
                    },
                    onMouseEnter: (e) =>
                      (e.currentTarget.style.transform =
                        "rotate(-0.88deg) translate(-4px,-4px)"),
                    onMouseLeave: (e) =>
                      (e.currentTarget.style.transform = "rotate(-0.88deg)"),
                    children: "Play Farak free →",
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    })
  );
function Dr(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function ai(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function B6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
function D6(e) {
  let t = document.querySelector("script[type='application/ld+json']");
  (t ||
    ((t = document.createElement("script")),
    t.setAttribute("type", "application/ld+json"),
    document.head.appendChild(t)),
    (t.textContent = JSON.stringify(e)));
}
const M6 = [
    {
      num: "01",
      title: "Familiar world first",
      body: "Before learning the rules, players should recognize the setting. Microbuses, traffic, potholes, landmarks. It should feel like a real place.",
    },
    {
      num: "02",
      title: "Control over chance",
      body: "Players should feel responsible for their moves. The board has chaos, but the decisions are yours.",
    },
    {
      num: "03",
      title: "Fast and replayable",
      body: "Quick to learn. Quick to play. Enough interaction to create tension every round.",
    },
  ],
  _6 = [
    {
      icon: "1",
      title: "Pick your charge.",
      body: "Each player chooses a card in secret. Higher numbers move you farther. Lower numbers help you stay flexible.",
    },
    {
      icon: "2",
      title: "Reveal at the same time.",
      body: "If two players choose the same number, they both stay where they are. If not, everyone moves based on their card.",
    },
    {
      icon: "3",
      title: "Resolve the road.",
      body: "Landing on certain spaces triggers events. You might get a boost. You might hit a pothole. You might get blocked.",
    },
    {
      icon: "4",
      title: "Complete one loop to win.",
      body: "First player to go around Tundikhel wins.",
    },
  ],
  z6 = () => (
    x.useEffect(() => {
      ((document.title =
        "Race to Tundikhel — A new board game from Tumlet | tumlet.com/tundikhel"),
        Dr(
          "description",
          "Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck — just micro-driver chaos through the streets of Kathmandu. Coming soon.",
        ),
        Dr(
          "keywords",
          "race to tundikhel, tundikhel board game, nepali board game, kathmandu game, tumlet",
        ),
        B6("https://tumlet.com/tundikhel/"),
        ai("og:title", "Race to Tundikhel — A new board game from Tumlet"),
        ai(
          "og:description",
          "Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck — just micro-driver chaos through the streets of Kathmandu. Coming soon.",
        ),
        ai("og:type", "website"),
        ai("og:url", "https://tumlet.com/tundikhel/"),
        ai("og:image", "https://tumlet.com/tundikhel/hero-art.png"),
        Dr("twitter:card", "summary_large_image"),
        Dr("twitter:title", "Race to Tundikhel — A new board game from Tumlet"),
        Dr(
          "twitter:description",
          "Race to Tundikhel is a new Nepali board game from Tumlet. No dice, no luck — just micro-driver chaos through the streets of Kathmandu. Coming soon.",
        ),
        Dr("twitter:image", "https://tumlet.com/tundikhel/hero-art.png"),
        D6({
          "@context": "https://schema.org",
          "@type": "Game",
          name: "Race to Tundikhel",
          description:
            "A Nepali board game where players race micro-buses through the streets of Kathmandu to reach Tundikhel first. No dice — pure bluff and battery management.",
          url: "https://tumlet.com/tundikhel/",
          image: "https://tumlet.com/tundikhel/hero-art.png",
          numberOfPlayers: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 6,
          },
          typicalAgeRange: "10+",
          creator: {
            "@type": "Organization",
            name: "Tumlet",
            url: "https://tumlet.com",
          },
          gameLocation: {
            "@type": "Place",
            name: "Tundikhel, Kathmandu, Nepal",
          },
        }));
    }, []),
    i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      style: {
        background: "#ffffff",
        color: "#130D01",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
      },
      children: [
        i.jsx(Ze, {}),
        i.jsxs("main", {
          className: "flex-1",
          children: [
            i.jsx("section", {
              className:
                "max-w-[1280px] mx-auto px-6 md:px-12 pt-8 md:pt-14 mb-20",
              children: i.jsxs("div", {
                className: "relative rounded-[20px] overflow-hidden border-4",
                style: { background: "#EDF5DD", borderColor: "#1F5F3A" },
                children: [
                  i.jsx("span", {
                    className:
                      "absolute top-6 left-6 z-10 font-bold text-sm uppercase tracking-widest px-4 py-2 rounded-full border-2",
                    style: {
                      background: "#F3B952",
                      color: "#130D01",
                      borderColor: "#130D01",
                      transform: "rotate(-3deg)",
                      boxShadow: "4px 4px 0 #130D01",
                      letterSpacing: "0.08em",
                    },
                    children: "Coming Soon · 2026",
                  }),
                  i.jsx("div", {
                    style: { background: "#BDE0B8" },
                    children: i.jsx("img", {
                      src: "/tundikhel/hero-art.png",
                      alt: "Race to Tundikhel — micro-driver racing through Kathmandu, with Dharahara tower in the background, electric microbuses dodging cones and potholes",
                      className: "w-full block",
                    }),
                  }),
                  i.jsxs("div", {
                    className: "px-8 md:px-16 pt-10 pb-14 text-center",
                    children: [
                      i.jsx("span", {
                        className:
                          "inline-block text-sm font-medium px-4 py-1 rounded-full border mb-7",
                        style: {
                          fontFamily: "'Outfit', system-ui, monospace",
                          background: "#FAF1E4",
                          color: "#1F5F3A",
                          borderColor: "#1F5F3A",
                          borderWidth: "1.5px",
                        },
                        children: "tumlet.com/tundikhel",
                      }),
                      i.jsx("h1", {
                        className: "font-extrabold mb-5 leading-tight",
                        style: {
                          fontFamily: "'Baloo 2', sans-serif",
                          color: "#1F5F3A",
                          fontSize: "clamp(28px, 5vw, 56px)",
                          letterSpacing: "-0.01em",
                        },
                        children:
                          "Race to Tundikhel — A new Nepali board game from Tumlet",
                      }),
                      i.jsxs("p", {
                        className:
                          "text-xl max-w-2xl mx-auto mb-9 leading-relaxed",
                        style: { color: "#2a3a2a" },
                        children: [
                          "A bus race through the streets of Kathmandu. No dice. No luck. Just you, your battery, and the worst traffic in the world.",
                          " ",
                          i.jsx("em", {
                            style: { color: "#2D7A4F", fontWeight: 600 },
                            children: "Race to Tundikhel",
                          }),
                          " is the next game from Tumlet — and we're letting you in on it early.",
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "flex justify-center items-center gap-8 flex-wrap",
                        children: [
                          i.jsxs("a", {
                            href: "https://www.instagram.com/tumlet.boardgames/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "inline-flex items-center gap-3 text-white font-medium px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap",
                            style: {
                              fontFamily: "'Baloo 2', sans-serif",
                              background: "#2D7A4F",
                              boxShadow: "8px 8px 0px #F3B952",
                              transform: "rotate(-0.88deg)",
                            },
                            onMouseEnter: (e) =>
                              (e.currentTarget.style.transform =
                                "rotate(-0.88deg) translate(-4px,-4px)"),
                            onMouseLeave: (e) =>
                              (e.currentTarget.style.transform =
                                "rotate(-0.88deg)"),
                            children: [
                              i.jsxs("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: "2",
                                children: [
                                  i.jsx("rect", {
                                    x: "3",
                                    y: "3",
                                    width: "18",
                                    height: "18",
                                    rx: "5",
                                  }),
                                  i.jsx("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "4",
                                  }),
                                  i.jsx("circle", {
                                    cx: "17.5",
                                    cy: "6.5",
                                    r: "0.6",
                                    fill: "white",
                                  }),
                                ],
                              }),
                              "Follow for launch",
                            ],
                          }),
                          i.jsx("a", {
                            href: "#story",
                            className: "underline font-medium text-base",
                            style: { color: "#1F5F3A" },
                            children: "Read the story →",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "grid grid-cols-3 border-t-2",
                    style: { background: "#FAF1E4", borderColor: "#1F5F3A" },
                    children: [
                      { num: "2–6", lbl: "drivers" },
                      { num: "0", lbl: "dice" },
                      { num: "15m", lbl: "a round" },
                    ].map(({ num: e, lbl: t }, n) =>
                      i.jsxs(
                        "div",
                        {
                          className: "py-5 text-center",
                          style: {
                            borderRight: n < 2 ? "2px solid #1F5F3A" : void 0,
                          },
                          children: [
                            i.jsx("div", {
                              className: "font-extrabold text-3xl leading-none",
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                color: "#1F5F3A",
                              },
                              children: e,
                            }),
                            i.jsx("div", {
                              className:
                                "text-sm font-semibold uppercase tracking-wider mt-1.5",
                              style: {
                                color: "#6B6B6B",
                                letterSpacing: "0.04em",
                              },
                              children: t,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            i.jsxs("article", {
              id: "story",
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: [
                i.jsx("span", {
                  className:
                    "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6",
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    color: "#2D7A4F",
                    background: "#EDF5DD",
                    letterSpacing: "0.18em",
                  },
                  children: "The story",
                }),
                i.jsx("h2", {
                  className: "font-extrabold mb-6 leading-tight",
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    color: "#1F5F3A",
                    fontSize: "clamp(32px, 5vw, 52px)",
                    letterSpacing: "-0.01em",
                  },
                  children: "Race to Tundikhel",
                }),
                [
                  i.jsx(i.Fragment, {
                    children:
                      "We started with one rule: every Nepali should recognize the world instantly.",
                  }),
                  i.jsx(i.Fragment, {
                    children:
                      'The traffic. The potholes. The cows blocking the road. The smell of momo from a side gully. The conductor leaning out shouting "Ratnapark!"',
                  }),
                  i.jsx(i.Fragment, {
                    children:
                      "That everyday Kathmandu experience became the setting.",
                  }),
                  i.jsx(i.Fragment, {
                    children: "So we chose a simple goal: race to Tundikhel.",
                  }),
                  i.jsx(i.Fragment, {
                    children:
                      "Everyone has been stuck on that route at some point. Honking. Waiting. Moving inch by inch. We turned that shared experience into a game you can actually win.",
                  }),
                ].map((e, t) =>
                  i.jsx(
                    "p",
                    {
                      className: "text-lg leading-relaxed mb-5",
                      style: { color: "#2a241a" },
                      children: e,
                    },
                    t,
                  ),
                ),
                i.jsx("h3", {
                  className: "font-extrabold text-3xl mb-5 mt-10 leading-tight",
                  style: { color: "#1F5F3A" },
                  children: "What makes it different",
                }),
                [
                  i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("strong", {
                        style: { color: "#1F5F3A" },
                        children: "No dice. No luck.",
                      }),
                      i.jsx("br", {}),
                      "Every move is a decision. You choose how far to go. You decide when to push and when to hold back. If something goes wrong, it's not random. It's because of the choices on the table.",
                    ],
                  }),
                  i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("strong", {
                        style: { color: "#1F5F3A" },
                        children: "Simple to learn.",
                      }),
                      i.jsx("br", {}),
                      "The goal is clear: complete one loop around Tundikhel and win. Most players understand the rules in a few minutes.",
                    ],
                  }),
                  i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("strong", {
                        style: { color: "#1F5F3A" },
                        children: "Depth comes from players.",
                      }),
                      i.jsx("br", {}),
                      "The strategy is in reading others, timing your moves, and managing your cards. Not in memorizing rules.",
                    ],
                  }),
                ].map((e, t) =>
                  i.jsx(
                    "p",
                    {
                      className: "text-lg leading-relaxed mb-5",
                      style: { color: "#2a241a" },
                      children: e,
                    },
                    t,
                  ),
                ),
                i.jsx("p", {
                  className: "mt-9 text-lg leading-relaxed",
                  style: { color: "#2a241a" },
                  children:
                    "We are still playtesting and refining. But this is the core of the game.",
                }),
              ],
            }),
            i.jsxs("section", {
              className: "max-w-[1180px] mx-auto px-6 mb-24",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-12",
                  children: [
                    i.jsx("span", {
                      className:
                        "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        color: "#2D7A4F",
                        letterSpacing: "0.18em",
                      },
                      children: "What we focused on",
                    }),
                    i.jsx("h2", {
                      className: "font-extrabold leading-tight",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        color: "#1F5F3A",
                        fontSize: "clamp(32px, 4vw, 48px)",
                        letterSpacing: "-0.01em",
                      },
                      children: "What we focused on",
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                  children: M6.map(({ num: e, title: t, body: n }) =>
                    i.jsxs(
                      "div",
                      {
                        className:
                          "rounded-2xl p-8 transition-transform duration-200 cursor-default",
                        style: {
                          background: "#FAF1E4",
                          border: "3px solid #1F5F3A",
                          boxShadow: "8px 8px 0 #1F5F3A",
                        },
                        onMouseEnter: (r) => {
                          ((r.currentTarget.style.transform =
                            "translate(-2px,-2px)"),
                            (r.currentTarget.style.boxShadow =
                              "10px 10px 0 #1F5F3A"));
                        },
                        onMouseLeave: (r) => {
                          ((r.currentTarget.style.transform = ""),
                            (r.currentTarget.style.boxShadow =
                              "8px 8px 0 #1F5F3A"));
                        },
                        children: [
                          i.jsx("div", {
                            className: "font-black leading-none mb-4",
                            style: {
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: 64,
                              color: "#2D7A4F",
                            },
                            children: e,
                          }),
                          i.jsx("h3", {
                            className: "font-bold text-2xl mb-3 leading-tight",
                            style: {
                              fontFamily: "'Baloo 2', sans-serif",
                              color: "#1F5F3A",
                            },
                            children: t,
                          }),
                          i.jsx("p", {
                            className: "text-base leading-relaxed",
                            style: { color: "#3a3225" },
                            children: n,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            i.jsxs("section", {
              className: "py-20 mb-24 relative overflow-hidden",
              style: { background: "#1F5F3A", color: "white" },
              children: [
                i.jsx("div", {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "40px 40px, 60px 60px",
                  },
                }),
                i.jsxs("div", {
                  className: "max-w-[1180px] mx-auto px-6 relative",
                  children: [
                    i.jsxs("div", {
                      className: "text-center mb-14",
                      children: [
                        i.jsx("span", {
                          className:
                            "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            color: "#F3B952",
                            letterSpacing: "0.18em",
                          },
                          children: "A peek inside the box",
                        }),
                        i.jsx("h2", {
                          className: "font-extrabold leading-tight",
                          style: {
                            fontFamily: "'Baloo 2', sans-serif",
                            fontSize: "clamp(32px, 5vw, 56px)",
                            letterSpacing: "-0.01em",
                          },
                          children: "What you'll be holding.",
                        }),
                        i.jsx("p", {
                          className: "text-lg mt-3 max-w-lg mx-auto",
                          style: { color: "#C8E2B4" },
                          children:
                            "Battery cards, road cards, micro-drivers, and a board that's basically Kathmandu after a strike.",
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                      style: {
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(280px, 1fr))",
                      },
                      children: [
                        {
                          src: "/tundikhel/cards-set.png",
                          alt: "Race to Tundikhel road cards: positive, negative, and neutral events including Khaldo Filled, Cows on Road, Sawari, Dharahara, and All Ahead +1",
                          title: "Road cards",
                          desc: "Positive, negative, neutral. Sawari, cows, Khaldo, Bharaldo — every Nepali traffic moment, in your hand.",
                          pill: "~30 cards",
                        },
                        {
                          src: "/tundikhel/battery-charger.png",
                          alt: "Battery and charger tokens — six-sided dial showing 1 through 6",
                          title: "Battery dials",
                          desc: "The heart of the bluff. Pick your charge, hide your hand, reveal at the same time.",
                          pill: "1 per driver",
                        },
                      ].map(({ src: e, alt: t, title: n, desc: r, pill: o }) =>
                        i.jsxs(
                          "div",
                          {
                            className: "rounded-2xl overflow-hidden",
                            style: {
                              background: "rgba(255,255,255,0.05)",
                              border: "2px solid rgba(255,255,255,0.18)",
                            },
                            children: [
                              i.jsx("div", {
                                className: "flex items-center justify-center",
                                style: {
                                  background: "#1a1a1a",
                                  aspectRatio: "4/3",
                                },
                                children: i.jsx("img", {
                                  src: e,
                                  alt: t,
                                  className: "object-contain",
                                  style: { maxWidth: "92%", maxHeight: "92%" },
                                }),
                              }),
                              i.jsxs("div", {
                                className:
                                  "px-6 py-5 flex items-center justify-between gap-4 flex-wrap",
                                children: [
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("h4", {
                                        className:
                                          "font-bold text-xl leading-tight",
                                        style: {
                                          fontFamily: "'Baloo 2', sans-serif",
                                        },
                                        children: n,
                                      }),
                                      i.jsx("p", {
                                        className: "text-sm mt-1",
                                        style: { color: "#C8E2B4" },
                                        children: r,
                                      }),
                                    ],
                                  }),
                                  i.jsx("span", {
                                    className:
                                      "text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full flex-shrink-0",
                                    style: {
                                      fontFamily: "'Outfit', sans-serif",
                                      color: "#F3B952",
                                      border: "1.5px solid #F3B952",
                                      letterSpacing: "0.08em",
                                    },
                                    children: o,
                                  }),
                                ],
                              }),
                            ],
                          },
                          n,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("section", {
              className: "max-w-[1180px] mx-auto px-6 mb-24",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-12",
                  children: [
                    i.jsx("span", {
                      className:
                        "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        color: "#2D7A4F",
                        letterSpacing: "0.18em",
                      },
                      children: "How the game works",
                    }),
                    i.jsx("h2", {
                      className: "font-extrabold leading-tight",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        color: "#1F5F3A",
                        fontSize: "clamp(32px, 4vw, 48px)",
                        letterSpacing: "-0.01em",
                      },
                      children: "How the game works",
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "rounded-2xl overflow-hidden",
                  style: {
                    border: "3px solid #1F5F3A",
                    background: "#FAF1E4",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  },
                  children: _6.map(({ icon: e, title: t, body: n }, r) =>
                    i.jsxs(
                      "div",
                      {
                        className: "flex gap-5 items-start p-8",
                        style: {
                          borderRight: "2px solid #1F5F3A",
                          borderBottom: "2px solid #1F5F3A",
                        },
                        children: [
                          i.jsx("div", {
                            className:
                              "flex-shrink-0 flex items-center justify-center font-extrabold text-xl rounded-xl",
                            style: {
                              width: 56,
                              height: 56,
                              fontFamily: "'Outfit', sans-serif",
                              background: "#C8E2B4",
                              border: "2px solid #1F5F3A",
                              color: "#1F5F3A",
                            },
                            children: e,
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("h3", {
                                className:
                                  "font-bold text-xl mb-1.5 leading-tight",
                                style: {
                                  fontFamily: "'Baloo 2', sans-serif",
                                  color: "#1F5F3A",
                                },
                                children: t,
                              }),
                              i.jsx("p", {
                                className: "text-sm leading-relaxed",
                                style: { color: "#3a3225" },
                                children: n,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx("section", {
              className: "max-w-[760px] mx-auto px-6 mb-24",
              children: i.jsxs("div", {
                className: "text-center px-8 py-14 rounded-[20px]",
                style: {
                  background: "#F3B952",
                  border: "3px solid #130D01",
                  boxShadow: "12px 12px 0 #130D01",
                  transform: "rotate(-0.5deg)",
                },
                children: [
                  i.jsx("div", {
                    className:
                      "text-xs font-bold uppercase tracking-widest mb-4",
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      color: "#130D01",
                      letterSpacing: "0.16em",
                    },
                    children: "Get on the list",
                  }),
                  i.jsxs("h2", {
                    className: "font-extrabold leading-tight mb-4",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      color: "#130D01",
                      fontSize: "clamp(28px, 4vw, 44px)",
                      letterSpacing: "-0.01em",
                    },
                    children: [
                      "Be first to know when ",
                      i.jsx("em", { children: "Race to Tundikhel" }),
                      " ships.",
                    ],
                  }),
                  i.jsx("p", {
                    className: "text-lg leading-relaxed mb-7",
                    style: { color: "#130D01" },
                    children:
                      "We're following the same path we did with Bluff Momo — small batches, hand-packed, signed copies for the first run. Follow us on Instagram and you'll be in the front of the line.",
                  }),
                  i.jsxs("a", {
                    href: "https://www.instagram.com/tumlet.boardgames/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center gap-3 text-white font-medium px-12 py-4 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      background: "#130D01",
                      boxShadow: "8px 8px 0px #F16147",
                      transform: "rotate(-0.88deg)",
                    },
                    onMouseEnter: (e) =>
                      (e.currentTarget.style.transform =
                        "rotate(-0.88deg) translate(-4px,-4px)"),
                    onMouseLeave: (e) =>
                      (e.currentTarget.style.transform = "rotate(-0.88deg)"),
                    children: [
                      i.jsxs("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "2",
                        children: [
                          i.jsx("rect", {
                            x: "3",
                            y: "3",
                            width: "18",
                            height: "18",
                            rx: "5",
                          }),
                          i.jsx("circle", { cx: "12", cy: "12", r: "4" }),
                          i.jsx("circle", {
                            cx: "17.5",
                            cy: "6.5",
                            r: "0.6",
                            fill: "white",
                          }),
                        ],
                      }),
                      "Follow @tumlet.boardgames",
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    })
  );
function Mr(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function si(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function L6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
const I6 = [
    {
      num: "01",
      title: "First",
      body: "All drivers secretly choose a number for how far they want to move on the board.",
    },
    {
      num: "02",
      title: "Then",
      body: "On the count of three, everyone reveals their number at the same time. NO CHEATING!!",
    },
    {
      num: "03",
      title: "Finally",
      body: "If two or more drivers pick the same number, they're stuck. Only unique numbers move forward. Only yellow would move 2 steps ahead if everyone else picked the same number — they're stuck because their numbers clashed.",
    },
    {
      num: "04",
      title: "Complete one loop to win",
      body: "First player to race all the way around Tundikhel and cross the finish wins. No dice. No luck. Just timing, bluff, and battery.",
    },
  ],
  W6 = () => {
    const e = x.useRef(null);
    return (
      x.useEffect(() => {
        ((document.title =
          "How to Play Race to Tundikhel | Instruction Video & Rules"),
          Mr(
            "description",
            "Watch the instruction video and learn how to play Race to Tundikhel — the Nepali board game by Tumlet. No dice, no luck, just bluff and battery.",
          ),
          Mr(
            "keywords",
            "how to play race to tundikhel, tundikhel rules, nepali board game instructions, tumlet",
          ),
          L6("https://tumlet.com/tundikhel-how/"),
          si(
            "og:title",
            "How to Play Race to Tundikhel | Instruction Video & Rules",
          ),
          si(
            "og:description",
            "Watch the instruction video and learn how to play Race to Tundikhel — the Nepali board game by Tumlet.",
          ),
          si("og:type", "website"),
          si("og:url", "https://tumlet.com/tundikhel-how/"),
          si("og:image", "https://tumlet.com/unfurl.png"),
          Mr("twitter:card", "summary_large_image"),
          Mr(
            "twitter:title",
            "How to Play Race to Tundikhel | Instruction Video & Rules",
          ),
          Mr(
            "twitter:description",
            "Watch the instruction video and learn how to play Race to Tundikhel — the Nepali board game by Tumlet.",
          ),
          Mr("twitter:image", "https://tumlet.com/unfurl.png"));
      }, []),
      i.jsxs("div", {
        className: "min-h-screen flex flex-col",
        style: {
          background: "#ffffff",
          color: "#130D01",
          fontFamily: "'Baloo 2', system-ui, sans-serif",
        },
        children: [
          i.jsxs("nav", {
            className:
              "flex flex-row justify-between items-center px-6 md:px-12 lg:px-24 py-5 border-b",
            style: { borderColor: "#E5E5E5" },
            children: [
              i.jsx(X, {
                to: "/",
                children: i.jsx("img", {
                  className: "w-[120px] md:w-[160px]",
                  src: "/tumlet-logo.png",
                  alt: "Tumlet Logo",
                }),
              }),
              i.jsx("button", {
                onClick: () => {
                  var t;
                  return (t = e.current) == null
                    ? void 0
                    : t.scrollIntoView({ behavior: "smooth" });
                },
                className:
                  "font-semibold text-sm px-5 py-2.5 rounded-xl border-2 transition-all duration-150",
                style: {
                  fontFamily: "'Outfit', sans-serif",
                  borderColor: "#1F5F3A",
                  color: "#1F5F3A",
                  background: "transparent",
                },
                onMouseEnter: (t) => {
                  ((t.currentTarget.style.background = "#1F5F3A"),
                    (t.currentTarget.style.color = "#ffffff"));
                },
                onMouseLeave: (t) => {
                  ((t.currentTarget.style.background = "transparent"),
                    (t.currentTarget.style.color = "#1F5F3A"));
                },
                children: "Rules Reference",
              }),
            ],
          }),
          i.jsxs("main", {
            className: "flex-1 px-6 md:px-12 lg:px-24 py-10",
            children: [
              i.jsxs("div", {
                className: "max-w-3xl mx-auto mb-8 text-center",
                children: [
                  i.jsx("span", {
                    className:
                      "inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4",
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      color: "#2D7A4F",
                      background: "#EDF5DD",
                      letterSpacing: "0.16em",
                    },
                    children: "tumlet.com/tundikhel-how",
                  }),
                  i.jsx("h1", {
                    className: "font-extrabold leading-tight mb-3",
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      color: "#1F5F3A",
                      fontSize: "clamp(26px, 5vw, 48px)",
                      letterSpacing: "-0.01em",
                    },
                    children: "How to Play Race to Tundikhel",
                  }),
                  i.jsx("p", {
                    className: "text-lg leading-relaxed",
                    style: { color: "#3a3225" },
                    children:
                      "Watch the video below — it's the fastest way to learn. Scroll down for a quick rules reference once you're done.",
                  }),
                ],
              }),
              i.jsx("div", {
                className: "max-w-4xl mx-auto mb-16",
                children: i.jsx("div", {
                  className: "rounded-2xl overflow-hidden",
                  style: {
                    border: "3px solid #1F5F3A",
                    boxShadow: "8px 8px 0 #F3B952",
                    aspectRatio: "16/9",
                  },
                  children: i.jsx("iframe", {
                    className: "w-full h-full",
                    src: "https://drive.google.com/file/d/1TdYXJFCyP2mrr9zSUOmOFdj7bRrK7Gps/preview",
                    title: "How to play Race to Tundikhel — instruction video",
                    allow: "autoplay",
                    allowFullScreen: !0,
                  }),
                }),
              }),
              i.jsxs("div", {
                ref: e,
                className: "max-w-5xl mx-auto mb-16",
                children: [
                  i.jsxs("div", {
                    className: "mb-8 text-center",
                    children: [
                      i.jsx("span", {
                        className:
                          "inline-block text-xs font-bold uppercase tracking-widest mb-3",
                        style: {
                          fontFamily: "'Outfit', sans-serif",
                          color: "#2D7A4F",
                          letterSpacing: "0.18em",
                        },
                        children: "Quick rules",
                      }),
                      i.jsx("h2", {
                        className: "font-extrabold leading-tight",
                        style: {
                          fontFamily: "'Baloo 2', sans-serif",
                          color: "#1F5F3A",
                          fontSize: "clamp(24px, 4vw, 40px)",
                          letterSpacing: "-0.01em",
                        },
                        children: "How the game works",
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                    children: I6.map(({ num: t, title: n, body: r }) =>
                      i.jsxs(
                        "div",
                        {
                          className: "rounded-2xl p-7 flex gap-5",
                          style: {
                            background: "#FAF1E4",
                            border: "2.5px solid #1F5F3A",
                          },
                          children: [
                            i.jsx("div", {
                              className:
                                "flex-shrink-0 font-black leading-none",
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 48,
                                color: "#C8E2B4",
                                lineHeight: 1,
                              },
                              children: t,
                            }),
                            i.jsxs("div", {
                              children: [
                                i.jsx("h3", {
                                  className:
                                    "font-bold text-xl mb-2 leading-tight",
                                  style: {
                                    fontFamily: "'Baloo 2', sans-serif",
                                    color: "#1F5F3A",
                                  },
                                  children: n,
                                }),
                                i.jsx("p", {
                                  className: "text-sm leading-relaxed",
                                  style: { color: "#3a3225" },
                                  children: r,
                                }),
                              ],
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
              i.jsx("div", {
                className: "max-w-2xl mx-auto mb-10",
                children: i.jsxs("div", {
                  className: "px-8 py-10 rounded-[20px] text-center",
                  style: {
                    background: "#F3B952",
                    border: "3px solid #130D01",
                    boxShadow: "8px 8px 0 #130D01",
                    transform: "rotate(-0.5deg)",
                  },
                  children: [
                    i.jsx("h2", {
                      className: "font-extrabold mb-3 leading-tight",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        color: "#130D01",
                        fontSize: "clamp(22px, 3vw, 34px)",
                        letterSpacing: "-0.01em",
                      },
                      children: "Follow us for launch updates",
                    }),
                    i.jsx("p", {
                      className: "text-base leading-relaxed mb-6",
                      style: { color: "#130D01" },
                      children:
                        "Race to Tundikhel is coming soon. Follow us on Instagram to be first in line when it ships.",
                    }),
                    i.jsxs("a", {
                      href: "https://www.instagram.com/tumlet.boardgames/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "inline-flex items-center gap-3 text-white font-medium px-10 py-3.5 rounded-xl transition-all duration-200 whitespace-nowrap",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        background: "#130D01",
                        boxShadow: "6px 6px 0px #F16147",
                        transform: "rotate(-0.88deg)",
                      },
                      onMouseEnter: (t) =>
                        (t.currentTarget.style.transform =
                          "rotate(-0.88deg) translate(-3px,-3px)"),
                      onMouseLeave: (t) =>
                        (t.currentTarget.style.transform = "rotate(-0.88deg)"),
                      children: [
                        i.jsxs("svg", {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "white",
                          strokeWidth: "2",
                          children: [
                            i.jsx("rect", {
                              x: "3",
                              y: "3",
                              width: "18",
                              height: "18",
                              rx: "5",
                            }),
                            i.jsx("circle", { cx: "12", cy: "12", r: "4" }),
                            i.jsx("circle", {
                              cx: "17.5",
                              cy: "6.5",
                              r: "0.6",
                              fill: "white",
                            }),
                          ],
                        }),
                        "@tumlet.boardgames",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          i.jsx(Le, {}),
        ],
      })
    );
  };
function _r(e, t) {
  let n = document.querySelector(`meta[name='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("name", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function li(e, t) {
  let n = document.querySelector(`meta[property='${e}']`);
  (n ||
    ((n = document.createElement("meta")),
    n.setAttribute("property", e),
    document.head.appendChild(n)),
    n.setAttribute("content", t));
}
function $6(e) {
  let t = document.querySelector("link[rel='canonical']");
  (t ||
    ((t = document.createElement("link")),
    t.setAttribute("rel", "canonical"),
    document.head.appendChild(t)),
    t.setAttribute("href", e));
}
function H6(e) {
  let t = document.querySelector("script[type='application/ld+json']");
  (t ||
    ((t = document.createElement("script")),
    t.setAttribute("type", "application/ld+json"),
    document.head.appendChild(t)),
    (t.textContent = JSON.stringify(e)));
}
const Ct = "#1B9C90",
  Fe = "#0E5F58",
  U6 = "#45B9AD",
  Za = "#B7E3DD",
  Vg = "#FBEFD8",
  Bn = "#5A3A1F",
  en = "#130D01",
  Gg = "#F3B952",
  Si = "#F16147",
  wn = "#FFFFFF",
  V6 = "#FAF1E4",
  Fp = Math.PI / 180;
function ft(e, t, n, r) {
  return [e + n * Math.cos(r * Fp), t - n * Math.sin(r * Fp)];
}
function Da(e, t, n, r, o, a) {
  const [s, l] = ft(e, t, n, r),
    [c, u] = ft(e, t, n, o);
  return `<path d="M ${e} ${t} L ${s.toFixed(1)} ${l.toFixed(1)} A ${n} ${n} 0 0 1 ${c.toFixed(1)} ${u.toFixed(1)} Z" fill="${a}"/>`;
}
function G6(e) {
  const t = {
      needle: null,
      mystery: !1,
      poleL: "",
      poleR: "",
      score: null,
      spin: !1,
      mini: !1,
      ...e,
    },
    n = 400,
    r = t.mini ? 232 : 250,
    o = 200,
    a = 214,
    s = 178;
  let l = "";
  if (((l += Da(o, a, s, 180, 0, Vg)), t.mystery)) {
    l += '<g opacity="0.55">';
    const [m, w] = ft(o, a, s, t.target + 30),
      [y, b] = ft(o, a, s, t.target - 30);
    ((l += `<path d="M ${o} ${a} L ${m.toFixed(1)} ${w.toFixed(1)} A ${s} ${s} 0 0 1 ${y.toFixed(1)} ${b.toFixed(1)} Z" fill="none" stroke="${Ct}" stroke-width="3" stroke-dasharray="7 7"/>`),
      (l += "</g>"));
    const [g, h] = ft(o, a, s * 0.6, t.target);
    l += `<text x="${g.toFixed(1)}" y="${(h + 16).toFixed(1)}" font-family="Outfit, sans-serif" font-weight="800" font-size="58" fill="${Ct}" text-anchor="middle" opacity="0.85">?</text>`;
  } else {
    ((l += Da(o, a, s, t.target + 30, t.target - 30, Za)),
      (l += Da(o, a, s, t.target + 17, t.target - 17, U6)),
      (l += Da(o, a, s, t.target + 7, t.target - 7, Fe)));
    const m = (w, y, b) => {
      const [g, h] = ft(o, a, s * 0.82, w);
      return `<text x="${g.toFixed(1)}" y="${(h + 5).toFixed(1)}" font-family="Outfit, sans-serif" font-weight="800" font-size="16" fill="${b}" text-anchor="middle">${y}</text>`;
    };
    ((l += m(t.target, "4", "#fff")),
      (l += m(t.target + 12, "3", "#fff")),
      (l += m(t.target - 12, "3", "#fff")),
      (l += m(t.target + 23.5, "2", Fe)),
      (l += m(t.target - 23.5, "2", Fe)));
  }
  const [c, u] = ft(o, a, s, 180),
    [p, f] = ft(o, a, s, 0);
  ((l += `<path d="M ${c} ${u} A ${s} ${s} 0 0 1 ${p} ${f}" fill="none" stroke="${Bn}" stroke-width="4"/>`),
    (l += `<line x1="${c}" y1="${u}" x2="${p}" y2="${f}" stroke="${Bn}" stroke-width="4" stroke-linecap="round"/>`));
  for (let m = 0; m <= 180; m += 15) {
    const [w, y] = ft(o, a, s, m),
      [b, g] = ft(o, a, s - 11, m);
    l += `<line x1="${w.toFixed(1)}" y1="${y.toFixed(1)}" x2="${b.toFixed(1)}" y2="${g.toFixed(1)}" stroke="${Bn}" stroke-width="2" opacity="0.4"/>`;
  }
  if (t.needle !== null) {
    const [m, w] = ft(o, a, s - 16, t.needle);
    ((l += `<g class="${t.spin ? "needle-spin" : ""}">`),
      (l += `<line x1="${o}" y1="${a}" x2="${m.toFixed(1)}" y2="${w.toFixed(1)}" stroke="${en}" stroke-width="6" stroke-linecap="round"/>`),
      (l += `<circle cx="${m.toFixed(1)}" cy="${w.toFixed(1)}" r="7" fill="${Si}" stroke="${en}" stroke-width="2.5"/>`),
      (l += "</g>"));
  }
  if (
    ((l += `<circle cx="${o}" cy="${a}" r="15" fill="${Gg}" stroke="${en}" stroke-width="3"/>`),
    (l += `<circle cx="${o}" cy="${a}" r="4" fill="${en}"/>`),
    t.score !== null && t.needle !== null)
  ) {
    const [m, w] = ft(o, a, s - 16, t.needle);
    ((l += `<g transform="translate(${(m + 14).toFixed(1)}, ${(w - 18).toFixed(1)}) rotate(-6)">`),
      (l += `<rect x="-4" y="-20" width="58" height="34" rx="9" fill="${Si}" stroke="${en}" stroke-width="2.5"/>`),
      (l += `<text x="25" y="3" font-family="Outfit, sans-serif" font-weight="800" font-size="20" fill="#fff" text-anchor="middle">+${t.score}</text>`),
      (l += "</g>"));
  }
  (t.poleL &&
    (l += `<text x="6" y="${r - 6}" font-family="Baloo 2, sans-serif" font-weight="700" font-size="17" fill="${Bn}" text-anchor="start">◄ ${t.poleL}</text>`),
    t.poleR &&
      (l += `<text x="${n - 6}" y="${r - 6}" font-family="Baloo 2, sans-serif" font-weight="700" font-size="17" fill="${Fe}" text-anchor="end">${t.poleR} ►</text>`));
  const d = t.mini
    ? "display:block;height:100%;width:auto"
    : "display:block;width:100%;height:auto";
  return `<svg viewBox="0 0 ${n} ${r}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wavelength dial" style="${d}">${l}</svg>`;
}
const ql = (e) => {
    const t = e.mini
      ? {
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }
      : { width: "100%" };
    return i.jsx("div", {
      style: t,
      dangerouslySetInnerHTML: { __html: G6(e) },
    });
  },
  q6 = [
    {
      subj: "an umbrella in monsoon",
      note: "is it though?",
      l: "pointless",
      r: "life-saving",
      pos: 90,
    },
    {
      subj: "dalle khursani",
      note: "handle with care",
      l: "mild",
      r: "deadly",
      pos: 86,
    },
    {
      subj: "Kathmandu traffic at 5pm",
      note: "every single day",
      l: "calm",
      r: "chaos",
      pos: 80,
    },
    {
      subj: "a trip to Pokhara",
      note: "worth the bus ride?",
      l: "overrated",
      r: "underrated",
      pos: 58,
    },
    {
      subj: "aloo paratha for dinner",
      note: "controversial, we know",
      l: "sad meal",
      r: "elite meal",
      pos: 66,
    },
    {
      subj: "gifting socks for Dashain",
      note: "be honest",
      l: "terrible gift",
      r: "perfect gift",
      pos: 30,
    },
  ],
  Y6 = () => (
    x.useEffect(() => {
      ((document.title = "Wavelength | Read your friends' minds | Tumlet"),
        _r(
          "description",
          "Wavelength is a Tumlet party game about getting on the same wavelength as your friends. One player gives a clue, the rest spin the dial to guess. Free to play online.",
        ),
        _r(
          "keywords",
          "wavelength, tumlet party game, nepali party game, board game online, dial game, group game nepal",
        ),
        $6("https://tumlet.com/wavelength/"),
        li("og:title", "Wavelength | Read your friends' minds | Tumlet"),
        li(
          "og:description",
          "A team party game about how alike you really think. One clue, one dial, one shared brain. Play free online.",
        ),
        li("og:type", "website"),
        li("og:url", "https://tumlet.com/wavelength/"),
        li("og:image", "https://tumlet.com/tumlet-logo.png"),
        _r("twitter:card", "summary_large_image"),
        _r("twitter:title", "Wavelength | Read your friends' minds | Tumlet"),
        _r(
          "twitter:description",
          "A team party game about how alike you really think. One clue, one dial, one shared brain. Play free online.",
        ),
        _r("twitter:image", "https://tumlet.com/tumlet-logo.png"),
        H6({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Wavelength",
          description:
            "A team party game about getting on the same wavelength as your friends. One player gives a clue, the rest spin the dial to guess.",
          url: "https://wavelength.tumlet.com/",
          applicationCategory: "Game",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          creator: {
            "@type": "Organization",
            name: "Tumlet",
            url: "https://tumlet.com",
          },
        }));
    }, []),
    i.jsxs("div", {
      className: "min-h-screen flex flex-col",
      style: {
        background: V6,
        color: en,
        fontFamily: "'Baloo 2', system-ui, sans-serif",
      },
      children: [
        i.jsx("style", {
          children: `
        @keyframes wl-settle {
          0%   { transform: rotate(-46deg); }
          55%  { transform: rotate(14deg); }
          78%  { transform: rotate(-6deg); }
          100% { transform: rotate(0deg); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .needle-spin { transform-box: fill-box; transform-origin: bottom center; animation: wl-settle 2.4s cubic-bezier(.2,.9,.2,1) 0.3s both; }
        }
        .wl-btn { transition: transform 0.2s ease, box-shadow 0.15s ease; }
        .wl-btn:hover { transform: rotate(-0.88deg) translate(-4px, -4px) !important; }
        .wl-clue-bubble::after {
          content: ""; position: absolute; bottom: -11px; left: 26px;
          border-left: 11px solid transparent; border-right: 0 solid transparent;
          border-top: 13px solid ${Ct};
        }
        .wl-final::before, .wl-final::after {
          content: ""; position: absolute; border-radius: 50%; border: 14px solid rgba(255,255,255,0.10); pointer-events: none;
        }
        .wl-final::before { width: 240px; height: 240px; top: -120px; left: -60px; }
        .wl-final::after  { width: 320px; height: 320px; bottom: -200px; right: -60px; }
        .wl-mini { height: 132px; display: flex; align-items: center; justify-content: flex-start; }
      `,
        }),
        i.jsx(Ze, {}),
        i.jsxs("main", {
          className: "flex-1",
          children: [
            i.jsx("section", {
              className: "max-w-[1180px] mx-auto px-6 md:px-12 pt-8 md:pt-14",
              children: i.jsxs("div", {
                className:
                  "flex flex-col items-center gap-6 rounded-[20px] sm:rounded-3xl py-8 px-5 sm:p-12 lg:flex-row lg:items-center lg:gap-12 lg:py-14 lg:px-[60px] relative overflow-hidden",
                style: {
                  background: Vg,
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(27,156,144,0.05) 0 1px, transparent 1px 26px)",
                  border: `4px solid ${Ct}`,
                },
                children: [
                  i.jsxs("div", {
                    className:
                      "flex flex-col items-center text-center gap-5 lg:flex-1 lg:basis-[48%] lg:items-start lg:text-left",
                    children: [
                      i.jsxs("span", {
                        className:
                          "inline-flex items-center gap-2 whitespace-nowrap",
                        style: {
                          fontFamily: "'Caveat', 'Baloo 2', cursive",
                          fontWeight: 600,
                          fontSize: 26,
                          color: Fe,
                          transform: "rotate(-1.6deg)",
                        },
                        children: [
                          i.jsx("svg", {
                            viewBox: "0 0 60 28",
                            width: 30,
                            height: 14,
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: 4,
                            strokeLinecap: "round",
                            children: i.jsx("path", {
                              d: "M3 14 Q12 2 21 14 T39 14 T57 14",
                            }),
                          }),
                          "a Tumlet party game",
                        ],
                      }),
                      i.jsxs("div", {
                        className: "relative",
                        children: [
                          i.jsx("h1", {
                            style: {
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 800,
                              fontSize: "clamp(46px, 8vw, 84px)",
                              lineHeight: 0.92,
                              letterSpacing: "-0.03em",
                              color: en,
                            },
                            children: "wavelength",
                          }),
                          i.jsx("svg", {
                            viewBox: "0 0 460 18",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: 6,
                            strokeLinecap: "round",
                            style: {
                              width: "clamp(200px, 46vw, 400px)",
                              height: 16,
                              marginTop: 4,
                              color: Ct,
                              display: "block",
                            },
                            className: "mx-auto lg:ml-0",
                            children: i.jsx("path", {
                              d: "M5 11 Q35 -4 65 11 T125 11 T185 11 T245 11 T305 11 T365 11 T425 11 T455 11",
                            }),
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "max-w-[520px]",
                        children: i.jsxs("p", {
                          style: {
                            fontSize: "clamp(17px, 2.2vw, 20px)",
                            color: "#2c2521",
                          },
                          children: [
                            "It's a board game about ",
                            i.jsx("span", {
                              style: { color: Fe, fontWeight: 700 },
                              children: "how alike you really think.",
                            }),
                            " One player sees a secret spot on the dial and gives a clue. Everyone else argues, debates, and spins to land as close as they can.",
                          ],
                        }),
                      }),
                      i.jsxs("div", {
                        className:
                          "flex flex-wrap gap-x-7 gap-y-3.5 justify-center lg:justify-start",
                        children: [
                          i.jsxs("div", {
                            className: "flex items-center gap-2.5",
                            style: { fontSize: 17, fontWeight: 500 },
                            children: [
                              i.jsx("img", {
                                src: "/player.svg",
                                alt: "",
                                width: 28,
                                height: 28,
                              }),
                              "2–12 players",
                            ],
                          }),
                          i.jsxs("div", {
                            className: "flex items-center gap-2.5",
                            style: { fontSize: 17, fontWeight: 500 },
                            children: [
                              i.jsx("img", {
                                src: "/age.svg",
                                alt: "",
                                width: 28,
                                height: 28,
                              }),
                              "age 13+",
                            ],
                          }),
                          i.jsxs("div", {
                            className: "flex items-center gap-2.5",
                            style: { fontSize: 17, fontWeight: 500 },
                            children: [
                              i.jsx("img", {
                                src: "/time.svg",
                                alt: "",
                                width: 28,
                                height: 28,
                              }),
                              "10 minutes",
                            ],
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className:
                          "flex flex-wrap items-center gap-x-7 gap-y-4 justify-center lg:justify-start",
                        children: [
                          i.jsx("a", {
                            href: "https://wavelength.tumlet.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: i.jsxs("button", {
                              className:
                                "wl-btn inline-flex items-center justify-center gap-3 rounded-xl cursor-pointer",
                              style: {
                                fontFamily: "'Baloo 2', sans-serif",
                                fontWeight: 600,
                                fontSize: 18,
                                padding: "16px 42px",
                                border: 0,
                                background: Ct,
                                color: wn,
                                boxShadow: `8px 8px 0 0 ${Fe}`,
                                transform: "rotate(-0.88deg)",
                              },
                              children: [
                                i.jsx("svg", {
                                  width: 22,
                                  height: 22,
                                  viewBox: "0 0 24 24",
                                  fill: "white",
                                  children: i.jsx("path", {
                                    d: "M7 5.5v13a1 1 0 0 0 1.52.86l10.5-6.5a1 1 0 0 0 0-1.72L8.52 4.64A1 1 0 0 0 7 5.5z",
                                  }),
                                }),
                                "Play now — it's free",
                              ],
                            }),
                          }),
                          i.jsx("a", {
                            href: "#how",
                            className: "underline",
                            style: { fontSize: 16, fontWeight: 600 },
                            children: "how do you play? ↓",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "w-full max-w-[560px] lg:flex-1 lg:basis-[52%]",
                    children: i.jsx(ql, {
                      target: 112,
                      needle: 96,
                      spin: !0,
                      poleL: "overrated",
                      poleR: "underrated",
                    }),
                  }),
                ],
              }),
            }),
            i.jsxs("section", {
              id: "how",
              className:
                "max-w-[1180px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-2",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-11",
                  children: [
                    i.jsx("span", {
                      style: {
                        fontFamily: "'Caveat', 'Baloo 2', cursive",
                        fontWeight: 600,
                        fontSize: 24,
                        color: Si,
                        transform: "rotate(-1.4deg)",
                        display: "inline-block",
                      },
                      children: "never played before? hajur, it's easy",
                    }),
                    i.jsx("h2", {
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        fontSize: "clamp(28px, 5vw, 44px)",
                        lineHeight: 1.12,
                        marginTop: 6,
                      },
                      children: "How to play, in 3 turns",
                    }),
                    i.jsx("p", {
                      style: {
                        maxWidth: 560,
                        margin: "14px auto 0",
                        fontSize: 18,
                        color: "#4a423c",
                      },
                      children:
                        "Think of the dial as a scale between two opposites. Somewhere on it is a hidden target. Your job as a team — find it.",
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "grid gap-6 md:gap-7 grid-cols-1 lg:grid-cols-3",
                  children: [
                    {
                      shadow: Za,
                      visual: i.jsx(ql, {
                        mini: !0,
                        target: 70,
                        mystery: !0,
                        poleL: "",
                        poleR: "",
                      }),
                      title: "One player gets a secret",
                      body: i.jsxs(i.Fragment, {
                        children: [
                          "The dial shows a spectrum — like ",
                          i.jsx("b", {
                            style: { color: Fe },
                            children: "overrated ↔ underrated",
                          }),
                          ". One teammate, the ",
                          i.jsx("b", {
                            style: { color: Fe },
                            children: "Psychic",
                          }),
                          ", secretly sees where the target sits. Nobody else can.",
                        ],
                      }),
                    },
                    {
                      shadow: Gg,
                      visual: i.jsxs("div", {
                        className: "flex flex-col items-center gap-2.5",
                        children: [
                          i.jsx("div", {
                            className: "wl-clue-bubble relative",
                            style: {
                              background: Ct,
                              color: wn,
                              fontWeight: 700,
                              fontSize: 17,
                              padding: "12px 20px",
                              borderRadius: 14,
                              transform: "rotate(-1.5deg)",
                              boxShadow: `3px 3px 0 0 ${Fe}`,
                              border: `2px solid ${Fe}`,
                            },
                            children: '"...sutkeri ko khana?"',
                          }),
                          i.jsxs("div", {
                            className: "flex gap-2.5 items-center",
                            style: { fontSize: 13, color: Bn, fontWeight: 700 },
                            children: [
                              i.jsx("span", { children: "bland" }),
                              i.jsx("span", {
                                style: {
                                  width: 86,
                                  height: 8,
                                  borderRadius: 6,
                                  background: `linear-gradient(90deg, ${Za}, ${Ct})`,
                                },
                              }),
                              i.jsx("span", { children: "tasty" }),
                            ],
                          }),
                        ],
                      }),
                      title: "They drop one clue",
                      body: i.jsxs(i.Fragment, {
                        children: [
                          "The Psychic names ",
                          i.jsx("b", {
                            style: { color: Fe },
                            children: "one thing",
                          }),
                          " that fits that exact spot on the scale. Just a word or a phrase — no pointing, no winking.",
                        ],
                      }),
                    },
                    {
                      shadow: "#F4C0B4",
                      visual: i.jsx(ql, {
                        mini: !0,
                        target: 70,
                        needle: 78,
                        score: 3,
                      }),
                      title: "The team spins & guesses",
                      body: i.jsxs(i.Fragment, {
                        children: [
                          "Everyone debates the clue and turns the dial together. Land ",
                          i.jsx("b", {
                            style: { color: Fe },
                            children: "bang on the target",
                          }),
                          " for 4 points, close for 2 or 3. Then you swap and do it again.",
                        ],
                      }),
                    },
                  ].map((e, t) =>
                    i.jsxs(
                      "div",
                      {
                        className: "relative flex flex-col gap-3.5 rounded-2xl",
                        style: {
                          background: wn,
                          border: `2px solid ${Bn}`,
                          padding: "26px 24px 28px",
                          boxShadow: `6px 6px 0 0 ${e.shadow}`,
                        },
                        children: [
                          i.jsx("span", {
                            className: "absolute",
                            style: {
                              top: -18,
                              left: 22,
                              width: 40,
                              height: 40,
                              borderRadius: "50%",
                              background: Ct,
                              color: wn,
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 800,
                              fontSize: 20,
                              display: "grid",
                              placeItems: "center",
                              border: `2px solid ${en}`,
                              transform: "rotate(-4deg)",
                              boxShadow: `2px 2px 0 0 ${en}`,
                            },
                            children: t + 1,
                          }),
                          i.jsx("div", {
                            className: "wl-mini mt-1.5",
                            children: e.visual,
                          }),
                          i.jsx("h3", {
                            style: {
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 700,
                              fontSize: 21,
                            },
                            children: e.title,
                          }),
                          i.jsx("p", {
                            style: { fontSize: 16, color: "#4a423c" },
                            children: e.body,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            i.jsxs("section", {
              className:
                "max-w-[1180px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-2",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-11",
                  children: [
                    i.jsx("span", {
                      style: {
                        fontFamily: "'Caveat', 'Baloo 2', cursive",
                        fontWeight: 600,
                        fontSize: 24,
                        color: Si,
                        transform: "rotate(-1.4deg)",
                        display: "inline-block",
                      },
                      children: "warning: friendships will be tested",
                    }),
                    i.jsx("h2", {
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        fontSize: "clamp(28px, 5vw, 44px)",
                        lineHeight: 1.12,
                        marginTop: 6,
                      },
                      children: "The spectrums you'll fight over",
                    }),
                    i.jsx("p", {
                      style: {
                        maxWidth: 560,
                        margin: "14px auto 0",
                        fontSize: 18,
                        color: "#4a423c",
                      },
                      children:
                        "The dial is split between two extremes. Where does it land? Nobody agrees — that's the whole point.",
                    }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                  children: q6.map((e, t) =>
                    i.jsxs(
                      "div",
                      {
                        className: "flex flex-col gap-3.5 rounded-2xl",
                        style: {
                          background: wn,
                          border: `2px solid ${Bn}`,
                          padding: "20px 22px",
                        },
                        children: [
                          i.jsxs("div", {
                            style: {
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 700,
                              fontSize: 18,
                            },
                            children: [
                              e.subj,
                              i.jsx("span", {
                                style: {
                                  color: "#6B6B6B",
                                  fontWeight: 500,
                                  fontSize: 14,
                                  display: "block",
                                  fontFamily: "'Baloo 2', sans-serif",
                                },
                                children: e.note,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                              i.jsx("span", {
                                style: {
                                  fontSize: 13,
                                  fontWeight: 700,
                                  color: Bn,
                                  whiteSpace: "nowrap",
                                },
                                children: e.l,
                              }),
                              i.jsx("span", {
                                className: "flex-1 relative",
                                style: {
                                  height: 10,
                                  borderRadius: 6,
                                  background: `linear-gradient(90deg, #EBD9BC, ${Za}, ${Ct})`,
                                  border: "1px solid rgba(90,58,31,0.25)",
                                },
                                children: i.jsx("span", {
                                  className: "absolute",
                                  style: {
                                    top: "50%",
                                    left: `${e.pos}%`,
                                    width: 16,
                                    height: 16,
                                    borderRadius: "50%",
                                    background: Si,
                                    border: `2px solid ${wn}`,
                                    transform: "translate(-50%, -50%)",
                                    boxShadow: "0 1px 4px rgba(0,0,0,.25)",
                                  },
                                }),
                              }),
                              i.jsx("span", {
                                style: {
                                  fontSize: 13,
                                  fontWeight: 700,
                                  color: Fe,
                                  whiteSpace: "nowrap",
                                },
                                children: e.r,
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            i.jsx("section", {
              className: "max-w-[1180px] mx-auto px-6 md:px-12 pt-12 md:pt-16",
              children: i.jsxs("div", {
                className:
                  "wl-final text-center relative overflow-hidden rounded-3xl",
                style: {
                  background: Ct,
                  color: wn,
                  border: `4px solid ${Fe}`,
                  padding: "52px 28px",
                },
                children: [
                  i.jsx("h2", {
                    style: {
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(28px, 5vw, 44px)",
                      letterSpacing: "-0.02em",
                      position: "relative",
                    },
                    children: "Gather the group. Spin the dial.",
                  }),
                  i.jsx("p", {
                    style: {
                      fontSize: 19,
                      margin: "12px auto 28px",
                      maxWidth: 520,
                      opacity: 0.95,
                      position: "relative",
                    },
                    children:
                      "No app to download, no setup. Open it on one phone or the TV, pass it around, and find out who's actually on your wavelength.",
                  }),
                  i.jsx("a", {
                    href: "https://wavelength.tumlet.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: { position: "relative" },
                    children: i.jsxs("button", {
                      className:
                        "wl-btn inline-flex items-center justify-center gap-3 rounded-xl cursor-pointer",
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 600,
                        fontSize: 18,
                        padding: "16px 42px",
                        border: 0,
                        background: wn,
                        color: Fe,
                        boxShadow: `8px 8px 0 0 ${Fe}`,
                        transform: "rotate(-0.88deg)",
                      },
                      children: [
                        i.jsx("svg", {
                          width: 22,
                          height: 22,
                          viewBox: "0 0 24 24",
                          children: i.jsx("path", {
                            d: "M7 5.5v13a1 1 0 0 0 1.52.86l10.5-6.5a1 1 0 0 0 0-1.72L8.52 4.64A1 1 0 0 0 7 5.5z",
                            fill: "currentColor",
                          }),
                        }),
                        "Play Wavelength now",
                      ],
                    }),
                  }),
                ],
              }),
            }),
            i.jsx("section", {
              className: "text-center my-16 px-6",
              children: i.jsxs("p", {
                style: { fontSize: 18, color: "#4a423c" },
                children: [
                  "more of our online games:",
                  " ",
                  i.jsx("a", {
                    href: "/bichitra/",
                    className: "underline",
                    children: "bichitra",
                  }),
                  ",",
                  " ",
                  i.jsx("a", {
                    href: "/farak/",
                    className: "underline",
                    children: "farak",
                  }),
                  ",",
                  " ",
                  i.jsx("a", {
                    href: "/ganthan/",
                    className: "underline",
                    children: "ganthan",
                  }),
                  ", and",
                  " ",
                  i.jsx("a", {
                    href: "/thug/",
                    className: "underline",
                    children: "thug",
                  }),
                  ".",
                ],
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    })
  ),
  K6 = "https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE",
  Pp = ({ color: e = "#fff" }) =>
    i.jsx("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 32 32",
      fill: "none",
      "aria-hidden": "true",
      style: { flex: "none" },
      children: i.jsx("path", {
        fill: e,
        d: "M16.01 4C9.4 4 4.03 9.36 4.03 15.96c0 2.11.55 4.16 1.6 5.98L4 28l6.23-1.63a11.96 11.96 0 0 0 5.78 1.47h.01c6.6 0 11.97-5.36 11.97-11.96 0-3.2-1.25-6.2-3.5-8.46A11.9 11.9 0 0 0 16.01 4Zm5.46 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z",
      }),
    }),
  Q6 = [
    {
      id: "ev-misfits-jun-2026",
      href: "/game-night/misfits-june-2026",
      isLink: !0,
      when: "Jun 2026 · Konti Path",
      title: "Behind the Door That Isn't a Door",
      desc: "Misfits Kathmandu. A crazy door, intentional drinks, and 40+ players who stayed till the venue pulled the lights.",
    },
  ],
  Ap = [
    "Free entry ✦",
    "सबैलाई स्वागत छ ✦",
    "No experience needed ✦",
    "New venue every month ✦",
    "We teach the rules ✦",
    "Come solo, leave with a squad ✦",
  ],
  X6 = [
    {
      num: "01",
      title: "It's free. Always.",
      desc: `No tickets, no cover, no "pay what you like" guilt. Buy yourself a coffee at the venue if you want. That's it.`,
    },
    {
      num: "02",
      title: "Nobody needs to know the rules.",
      desc: "Never touched a board game? Perfect. There's a teaching table all night. Three minutes of rules, then you're in the round.",
    },
    {
      num: "03",
      title: "Come solo, leave with a squad.",
      desc: "Half the room shows up alone. The table does the introductions. You just have to sit down and play.",
    },
  ],
  zr = ({ children: e, light: t = !1 }) =>
    i.jsx("span", {
      style: {
        display: "inline-block",
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: t ? "#F3B952" : "#F16147",
        background: t ? "rgba(243,185,82,.14)" : "#FBE0D5",
        padding: "6px 14px",
        borderRadius: 999,
      },
      children: e,
    }),
  J6 = ({ height: e = 185, dark: t = !1 }) =>
    i.jsx("div", {
      style: {
        width: "100%",
        height: e,
        background: t
          ? "linear-gradient(135deg, #2a2318 0%, #1a1710 100%)"
          : "linear-gradient(135deg, #e8e0d0 0%, #d4c8b4 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: t ? "rgba(255,255,255,0.18)" : "#9e9080",
        fontSize: 12,
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        borderBottom: t ? "none" : "3px solid #130D01",
      },
      children: "Photo coming soon",
    }),
  Yl = ({
    children: e,
    onClick: t,
    href: n,
    style: r,
    shadowColor: o = "#F3B952",
  }) => {
    const [a, s] = x.useState(!1),
      l = i.jsx("button", {
        onClick: t,
        style: {
          color: "#fff",
          fontFamily: "'Baloo 2', sans-serif",
          fontWeight: 600,
          display: "inline-flex",
          transform: a
            ? "rotate(-0.88deg) translate(-4px,-4px)"
            : "rotate(-0.88deg)",
          padding: "16px 42px",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          borderRadius: 12,
          cursor: "pointer",
          transition: "transform .2s ease, box-shadow .15s ease",
          border: "none",
          fontSize: 17,
          background: "#F16147",
          boxShadow: a ? "2px 2px 0 0 #A42726" : `8px 8px 0 0 ${o}`,
          ...r,
        },
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: e,
      });
    return n
      ? n.startsWith("http") || n.startsWith("mailto")
        ? i.jsx("a", {
            href: n,
            target: n.startsWith("http") ? "_blank" : void 0,
            rel: "noopener noreferrer",
            children: l,
          })
        : i.jsx("a", { href: n, children: l })
      : l;
  },
  Z6 = () => {
    x.useEffect(() => {
      document.title =
        "Board Game Night: free, every month, all around Kathmandu | Tumlet";
      let t = document.querySelector("meta[name='description']");
      (t ||
        ((t = document.createElement("meta")),
        t.setAttribute("name", "description"),
        document.head.appendChild(t)),
        t.setAttribute(
          "content",
          "Tumlet hosts a free board game night every month, somewhere new in Kathmandu. No tickets, no experience needed. We teach the rules. Join the WhatsApp community to catch the next one.",
        ));
      let n = document.querySelector("link[rel='canonical']"),
        r = !1;
      return (
        n ||
          ((n = document.createElement("link")),
          n.setAttribute("rel", "canonical"),
          document.head.appendChild(n),
          (r = !0)),
        n.setAttribute("href", "https://www.tumlet.com/game-night"),
        () => {
          r && n && n.remove();
        }
      );
    }, []);
    const e = K6;
    return i.jsxs("div", {
      style: {
        background: "#ffffff",
        color: "#130D01",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
        overflowX: "hidden",
      },
      children: [
        i.jsx("style", {
          children: `
        @keyframes gn-tick {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .gn-ticker-track { animation: gn-tick 28s linear infinite; }
        }
        .gn-hl {
          color: #F16147;
          text-decoration: underline wavy #F3B952 4px;
          text-underline-offset: 8px;
        }
        .gn-rule-card:nth-child(1) { transform: rotate(-0.8deg); }
        .gn-rule-card:nth-child(2) { transform: rotate(0.6deg); }
        .gn-rule-card:nth-child(3) { transform: rotate(-0.5deg); }
        .gn-rule-card:hover {
          transform: rotate(0deg) translate(-2px,-2px) !important;
          box-shadow: 11px 11px 0 #F3B952 !important;
        }
        .gn-night-card:nth-child(odd)  { transform: rotate(-0.7deg); }
        .gn-night-card:nth-child(even) { transform: rotate(0.7deg); }
        .gn-night-card:hover {
          transform: rotate(0deg) translate(-3px,-3px) !important;
          box-shadow: 11px 11px 0 #F16147 !important;
        }
        .gn-footer-link:hover { color: #F16147 !important; text-decoration: underline; }
        @media (min-width: 768px)  { .gn-hero-meta { padding: 56px 64px 64px !important; } }
        @media (min-width: 768px)  { .gn-signup-inner { padding: 0 48px !important; } }
      `,
        }),
        i.jsx(Ze, {}),
        i.jsxs("main", {
          children: [
            i.jsx("section", {
              style: {
                maxWidth: 1240,
                margin: "0 auto",
                padding: "32px 24px 0",
              },
              children: i.jsxs("div", {
                style: {
                  position: "relative",
                  background: "#FAF1E4",
                  border: "4px solid #130D01",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "12px 12px 0 0 #F3B952",
                },
                children: [
                  i.jsx("span", {
                    style: {
                      position: "absolute",
                      top: 20,
                      left: 20,
                      zIndex: 5,
                      background: "#F3B952",
                      color: "#130D01",
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "10px 18px",
                      borderRadius: 999,
                      border: "2px solid #130D01",
                      whiteSpace: "nowrap",
                      transform: "rotate(-3deg)",
                      boxShadow: "4px 4px 0 #130D01",
                      display: "inline-block",
                    },
                    children: "Free · Every month",
                  }),
                  i.jsx("span", {
                    style: {
                      position: "absolute",
                      top: 18,
                      right: 22,
                      zIndex: 5,
                      width: 54,
                      height: 54,
                      borderRadius: 14,
                      background: "#F16147",
                      border: "2px solid #130D01",
                      boxShadow: "4px 4px 0 #130D01",
                      transform: "rotate(8deg)",
                      display: "grid",
                      placeItems: "center",
                    },
                    "aria-hidden": "true",
                    children: i.jsxs("svg", {
                      width: "34",
                      height: "34",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        i.jsx("rect", {
                          x: "2.5",
                          y: "2.5",
                          width: "19",
                          height: "19",
                          rx: "5",
                          stroke: "#fff",
                          strokeWidth: "2",
                        }),
                        i.jsx("circle", {
                          cx: "8.2",
                          cy: "8.2",
                          r: "1.7",
                          fill: "#fff",
                        }),
                        i.jsx("circle", {
                          cx: "15.8",
                          cy: "8.2",
                          r: "1.7",
                          fill: "#fff",
                        }),
                        i.jsx("circle", {
                          cx: "8.2",
                          cy: "15.8",
                          r: "1.7",
                          fill: "#fff",
                        }),
                        i.jsx("circle", {
                          cx: "15.8",
                          cy: "15.8",
                          r: "1.7",
                          fill: "#fff",
                        }),
                        i.jsx("circle", {
                          cx: "12",
                          cy: "12",
                          r: "1.7",
                          fill: "#fff",
                        }),
                      ],
                    }),
                  }),
                  i.jsxs("div", {
                    className: "gn-hero-meta",
                    style: { padding: "64px 28px 52px", textAlign: "center" },
                    children: [
                      i.jsxs("h1", {
                        style: {
                          fontFamily: "'Baloo 2', sans-serif",
                          fontWeight: 800,
                          fontSize: "clamp(36px, 5.4vw, 60px)",
                          lineHeight: 1.08,
                          letterSpacing: "-0.01em",
                          color: "#130D01",
                          margin: "40px auto 20px",
                          maxWidth: 880,
                        },
                        children: [
                          "A ",
                          i.jsx("span", {
                            className: "gn-hl",
                            children: "free board game night",
                          }),
                          ", every month, somewhere new in Kathmandu.",
                        ],
                      }),
                      i.jsx("p", {
                        style: {
                          fontSize: 21,
                          maxWidth: 700,
                          margin: "0 auto 34px",
                          color: "#3a3225",
                        },
                        children:
                          "We bring a mountain of board games and teach you the rules. You just show up. Come solo or drag your whole gang.",
                      }),
                      i.jsxs("div", {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          gap: 28,
                          flexWrap: "wrap",
                          alignItems: "center",
                        },
                        children: [
                          i.jsxs(Yl, {
                            href: e,
                            children: [
                              i.jsx(Pp, {}),
                              "Join the WhatsApp community",
                            ],
                          }),
                          i.jsx("a", {
                            href: "#nights",
                            style: {
                              textDecoration: "underline",
                              color: "#130D01",
                              fontSize: 16,
                              fontWeight: 500,
                            },
                            children: "See past nights →",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      borderTop: "3px solid #130D01",
                      background: "#fff",
                    },
                    children: [
                      { num: "Rs. 0", lbl: "entry, forever" },
                      { num: "30+", lbl: "players a night" },
                      { num: "1×", lbl: "a month, new venue" },
                    ].map((t, n) =>
                      i.jsxs(
                        "div",
                        {
                          style: {
                            padding: "22px 12px",
                            textAlign: "center",
                            borderRight: n < 2 ? "3px solid #130D01" : "none",
                          },
                          children: [
                            i.jsx("div", {
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 800,
                                fontSize: 32,
                                color: "#F16147",
                                lineHeight: 1.1,
                              },
                              children: t.num,
                            }),
                            i.jsx("div", {
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 14,
                                color: "#6B6B6B",
                                letterSpacing: "0.04em",
                                marginTop: 6,
                                textTransform: "uppercase",
                                fontWeight: 600,
                              },
                              children: t.lbl,
                            }),
                          ],
                        },
                        n,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            i.jsx("div", {
              style: {
                margin: "72px 0",
                background: "#F3B952",
                borderTop: "3px solid #130D01",
                borderBottom: "3px solid #130D01",
                overflow: "hidden",
                whiteSpace: "nowrap",
                transform: "rotate(-0.6deg) scale(1.01)",
              },
              "aria-hidden": "true",
              children: i.jsx("div", {
                className: "gn-ticker-track",
                style: { display: "inline-flex", padding: "12px 0" },
                children: [...Ap, ...Ap].map((t, n) =>
                  i.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#130D01",
                        padding: "0 18px",
                        flex: "none",
                      },
                      children: t,
                    },
                    n,
                  ),
                ),
              }),
            }),
            i.jsxs("article", {
              id: "story",
              style: {
                maxWidth: 760,
                margin: "0 auto 96px",
                padding: "0 24px",
              },
              children: [
                i.jsx("div", {
                  style: { marginBottom: 24 },
                  children: i.jsx(zr, { children: "The story" }),
                }),
                i.jsx("h2", {
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 4.8vw, 52px)",
                    lineHeight: 1.1,
                    color: "#130D01",
                    marginBottom: 24,
                    letterSpacing: "-0.01em",
                    marginTop: 0,
                  },
                  children:
                    "Why we host a free game night, every single month.",
                }),
                i.jsx("p", {
                  style: {
                    fontSize: 19,
                    lineHeight: 1.7,
                    color: "#2a241a",
                    marginBottom: 22,
                  },
                  children: `Somewhere between school, jobs and screens, we stopped gathering around a table just to mess around together. Weekends became scrolling. "Let's catch up" became a text that never turns into a plan.`,
                }),
                i.jsxs("p", {
                  style: {
                    fontSize: 19,
                    lineHeight: 1.7,
                    color: "#2a241a",
                    marginBottom: 22,
                  },
                  children: [
                    "So we made the plan for you. ",
                    i.jsx("strong", {
                      style: { color: "#F16147", fontWeight: 700 },
                      children:
                        "One night a month, somewhere in Kathmandu, we take over a café and fill it with board games.",
                    }),
                    " Bluff Momo, Codenames, Catan, a whole shelf of them. We teach anyone who walks in. People who arrived as strangers argue like cousins by round three.",
                  ],
                }),
                i.jsx("blockquote", {
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(26px, 3.4vw, 34px)",
                    lineHeight: 1.3,
                    color: "#130D01",
                    borderLeft: "6px solid #F16147",
                    padding: "10px 0 10px 28px",
                    margin: "36px 0",
                  },
                  children: '"Kathmandu just needs an excuse to play."',
                }),
                i.jsxs("p", {
                  style: {
                    fontSize: 19,
                    lineHeight: 1.7,
                    color: "#2a241a",
                    marginBottom: 22,
                  },
                  children: [
                    "It's free because it has to be. The point was never to sell tickets. It's to spread playfulness amongst Nepali young adults, and to build a community that keeps showing up for each other.",
                    " ",
                    i.jsx("em", {
                      style: {
                        fontStyle: "italic",
                        color: "#F16147",
                        fontWeight: 600,
                      },
                      children: "खेल्न आउनुस् न!",
                    }),
                  ],
                }),
                i.jsxs("p", {
                  style: {
                    marginTop: 36,
                    color: "#130D01",
                    fontWeight: 700,
                    fontSize: 20,
                    marginBottom: 0,
                  },
                  children: [
                    "— Sarina Pantha & Yashant Gyawali",
                    i.jsx("br", {}),
                    i.jsx("span", {
                      style: {
                        fontWeight: 500,
                        color: "#3a3225",
                        fontSize: 16,
                      },
                      children: "Tumlet · Kathmandu",
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("section", {
              style: {
                maxWidth: 1180,
                margin: "0 auto 96px",
                padding: "0 24px",
              },
              children: [
                i.jsxs("div", {
                  style: { textAlign: "center", marginBottom: 48 },
                  children: [
                    i.jsx("div", {
                      style: { marginBottom: 16 },
                      children: i.jsx(zr, { children: "House rules" }),
                    }),
                    i.jsx("h2", {
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(34px, 4.4vw, 48px)",
                        color: "#130D01",
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                        margin: 0,
                      },
                      children: "The only three rules of game night",
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 24,
                  },
                  children: X6.map((t, n) =>
                    i.jsxs(
                      "div",
                      {
                        className: "gn-rule-card",
                        style: {
                          background: "#fff",
                          border: "3px solid #130D01",
                          borderRadius: 16,
                          padding: 32,
                          boxShadow: "8px 8px 0 #130D01",
                          transition: "transform .2s ease, box-shadow .2s ease",
                        },
                        children: [
                          i.jsx("div", {
                            style: {
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 900,
                              fontSize: 64,
                              lineHeight: 1,
                              color: "#F16147",
                              marginBottom: 14,
                            },
                            children: t.num,
                          }),
                          i.jsx("h3", {
                            style: {
                              fontFamily: "'Baloo 2', sans-serif",
                              fontWeight: 700,
                              fontSize: 24,
                              marginBottom: 12,
                              color: "#130D01",
                              lineHeight: 1.2,
                              marginTop: 0,
                            },
                            children: t.title,
                          }),
                          i.jsx("p", {
                            style: {
                              fontSize: 16,
                              lineHeight: 1.6,
                              color: "#3a3225",
                              margin: 0,
                            },
                            children: t.desc,
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            i.jsxs("section", {
              style: {
                background: "#130D01",
                color: "#fff",
                padding: "80px 0",
                marginBottom: 96,
                position: "relative",
              },
              children: [
                i.jsx("div", {
                  style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, rgba(255,255,255,.05) 1px, transparent 1px), radial-gradient(circle at 70% 70%, rgba(255,255,255,.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px, 60px 60px",
                  },
                  "aria-hidden": "true",
                }),
                i.jsxs("div", {
                  style: {
                    maxWidth: 1180,
                    margin: "0 auto",
                    padding: "0 24px",
                    position: "relative",
                  },
                  children: [
                    i.jsxs("div", {
                      style: { textAlign: "center", marginBottom: 56 },
                      children: [
                        i.jsx("div", {
                          style: { marginBottom: 16 },
                          children: i.jsx(zr, {
                            light: !0,
                            children: "A peek at the table",
                          }),
                        }),
                        i.jsx("h2", {
                          style: {
                            fontFamily: "'Baloo 2', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(36px, 5vw, 56px)",
                            lineHeight: 1.1,
                            letterSpacing: "-0.01em",
                            color: "#fff",
                            margin: "0 0 12px",
                          },
                          children: "What a night looks like.",
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      style: {
                        display: "grid",
                        gap: 24,
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(300px, 1fr))",
                      },
                      children: [
                        {
                          title: "The teaching table",
                          desc: "Where first-timers learn a game in three minutes and become liars by the fourth. (Bluff Momo does that.)",
                          img: "/game-night-2.jpg",
                          alt: "Someone explaining the rules of a board game to players at game night",
                        },
                        {
                          title: "The loud table",
                          desc: "The sweaty-competitive crowd. Rematches until the café kicks us out.",
                          img: "/game-night-1.jpg",
                          alt: "Players gathered around a table deep in a card game at night",
                        },
                      ].map((t, n) =>
                        i.jsxs(
                          "div",
                          {
                            style: {
                              background: "rgba(255,255,255,.05)",
                              border: "2px solid rgba(255,255,255,.18)",
                              borderRadius: 14,
                              overflow: "hidden",
                            },
                            children: [
                              i.jsx("img", {
                                src: t.img,
                                alt: t.alt,
                                style: {
                                  width: "100%",
                                  height: 280,
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  display: "block",
                                },
                              }),
                              i.jsx("div", {
                                style: {
                                  padding: "22px 26px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: 16,
                                  flexWrap: "wrap",
                                },
                                children: i.jsxs("div", {
                                  children: [
                                    i.jsx("h4", {
                                      style: {
                                        fontFamily: "'Baloo 2', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 22,
                                        lineHeight: 1.2,
                                        color: "#fff",
                                        margin: "0 0 4px",
                                      },
                                      children: t.title,
                                    }),
                                    i.jsx("p", {
                                      style: {
                                        fontSize: 14,
                                        color: "#D8CCB8",
                                        margin: 0,
                                      },
                                      children: t.desc,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          n,
                        ),
                      ),
                    }),
                    i.jsxs("div", {
                      style: { marginTop: 44, textAlign: "center" },
                      children: [
                        i.jsx("p", {
                          style: {
                            color: "#D8CCB8",
                            fontSize: 17,
                            marginBottom: 16,
                          },
                          children: "On the shelf, always:",
                        }),
                        i.jsxs("div", {
                          style: {
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 10,
                          },
                          children: [
                            [
                              "Bluff Momo",
                              "Firiri",
                              "Codenames",
                              "Catan",
                              "Dixit",
                              "Secret Hitler",
                            ].map((t) =>
                              i.jsx(
                                "span",
                                {
                                  style: {
                                    fontFamily: "'Baloo 2', sans-serif",
                                    fontWeight: 600,
                                    fontSize: 15,
                                    color: "#130D01",
                                    background: "#F3B952",
                                    border: "2px solid #130D01",
                                    borderRadius: 999,
                                    padding: "5px 16px",
                                    whiteSpace: "nowrap",
                                  },
                                  children: t,
                                },
                                t,
                              ),
                            ),
                            i.jsx("span", {
                              style: {
                                fontFamily: "'Baloo 2', sans-serif",
                                fontWeight: 600,
                                fontSize: 15,
                                background: "transparent",
                                color: "#fff",
                                border: "2px solid rgba(255,255,255,.4)",
                                borderRadius: 999,
                                padding: "5px 16px",
                                whiteSpace: "nowrap",
                              },
                              children: "+ whatever you bring",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("section", {
              id: "nights",
              style: {
                maxWidth: 1180,
                margin: "0 auto 96px",
                padding: "0 24px",
              },
              children: [
                i.jsxs("div", {
                  style: { textAlign: "center", marginBottom: 48 },
                  children: [
                    i.jsx("div", {
                      style: { marginBottom: 16 },
                      children: i.jsx(zr, {
                        children: "The growing scrapbook",
                      }),
                    }),
                    i.jsx("h2", {
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(34px, 4.4vw, 48px)",
                        color: "#130D01",
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                        margin: "0 0 8px",
                      },
                      children: "Past nights",
                    }),
                    i.jsx("p", {
                      style: { fontSize: 18, color: "#3a3225", margin: 0 },
                      children:
                        "Every game night gets its own little recap. Scroll back through the chaos.",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  style: {
                    display: "grid",
                    gap: 28,
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(300px, 1fr))",
                  },
                  children: [
                    Q6.map((t) => {
                      const n = i.jsxs(i.Fragment, {
                          children: [
                            i.jsx(J6, { height: 185 }),
                            i.jsxs("div", {
                              style: {
                                padding: "20px 22px 24px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                                flex: 1,
                              },
                              children: [
                                i.jsx("span", {
                                  style: {
                                    display: "inline-flex",
                                    alignSelf: "flex-start",
                                    gap: 8,
                                    alignItems: "center",
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 12.5,
                                    letterSpacing: "0.07em",
                                    textTransform: "uppercase",
                                    background: "#F3B952",
                                    border: "2px solid #130D01",
                                    borderRadius: 999,
                                    padding: "4px 12px",
                                    whiteSpace: "nowrap",
                                  },
                                  children: t.when,
                                }),
                                i.jsx("h3", {
                                  style: {
                                    fontFamily: "'Baloo 2', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 22,
                                    lineHeight: 1.2,
                                    margin: 0,
                                  },
                                  children: t.title,
                                }),
                                i.jsx("p", {
                                  style: {
                                    fontSize: 15.5,
                                    color: "#3a3225",
                                    flex: 1,
                                    margin: 0,
                                  },
                                  children: t.desc,
                                }),
                                i.jsx("span", {
                                  style: {
                                    fontWeight: 700,
                                    color: "#F16147",
                                    fontSize: 15.5,
                                  },
                                  children: "Read the recap →",
                                }),
                              ],
                            }),
                          ],
                        }),
                        r = {
                          background: "#fff",
                          border: "3px solid #130D01",
                          borderRadius: 16,
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: "7px 7px 0 #F3B952",
                          transition: "transform .2s ease, box-shadow .2s ease",
                          textDecoration: "none",
                          color: "inherit",
                        };
                      return t.isLink
                        ? i.jsx(
                            "a",
                            {
                              href: t.href,
                              className: "gn-night-card",
                              style: r,
                              children: n,
                            },
                            t.id,
                          )
                        : i.jsx(
                            "div",
                            {
                              className: "gn-night-card",
                              style: r,
                              children: n,
                            },
                            t.id,
                          );
                    }),
                    i.jsxs("div", {
                      style: {
                        borderStyle: "dashed",
                        borderWidth: 3,
                        borderColor: "#5A3A1F",
                        borderRadius: 16,
                        background: "transparent",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "40px 24px",
                        minHeight: 320,
                      },
                      children: [
                        i.jsx(zr, { children: "Coming soon" }),
                        i.jsx("div", {
                          style: {
                            fontFamily: "'Baloo 2', sans-serif",
                            fontWeight: 800,
                            fontSize: 24,
                            margin: "12px 0 6px",
                            color: "#130D01",
                          },
                          children: "The next one is being planned right now.",
                        }),
                        i.jsx("p", {
                          style: {
                            fontSize: 15.5,
                            color: "#3a3225",
                            margin: 0,
                          },
                          children:
                            "Join the WhatsApp to get the date and venue first.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("section", {
              id: "brands",
              style: {
                maxWidth: 880,
                margin: "0 auto 96px",
                padding: "0 24px",
              },
              children: i.jsxs("div", {
                style: {
                  position: "relative",
                  background: "#fff",
                  border: "3px solid #130D01",
                  borderRadius: 20,
                  padding: "48px 40px 52px",
                  boxShadow: "10px 10px 0 #F16147",
                  transform: "rotate(0.4deg)",
                  textAlign: "center",
                },
                children: [
                  i.jsx("span", {
                    style: {
                      position: "absolute",
                      top: -16,
                      right: 32,
                      background: "#F3B952",
                      color: "#130D01",
                      padding: "7px 16px",
                      borderRadius: 999,
                      border: "2px solid #130D01",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      transform: "rotate(3deg)",
                      whiteSpace: "nowrap",
                    },
                    children: "We're picky",
                  }),
                  i.jsx("div", {
                    style: { marginBottom: 16 },
                    children: i.jsx(zr, { children: "For brands" }),
                  }),
                  i.jsx("h2", {
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(30px, 4vw, 42px)",
                      lineHeight: 1.12,
                      color: "#130D01",
                      marginBottom: 16,
                      letterSpacing: "-0.01em",
                      marginTop: 0,
                    },
                    children: "Want your brand at the table?",
                  }),
                  i.jsxs("p", {
                    style: {
                      fontSize: 18,
                      lineHeight: 1.65,
                      color: "#3a3225",
                      maxWidth: 620,
                      margin: "0 auto 14px",
                    },
                    children: [
                      "Every game night puts ",
                      i.jsx("strong", {
                        style: { color: "#F16147", fontWeight: 700 },
                        children: "40+ young adults",
                      }),
                      " around a table for three hours. Phones down, fully there.",
                    ],
                  }),
                  i.jsx("p", {
                    style: {
                      fontSize: 18,
                      lineHeight: 1.65,
                      color: "#3a3225",
                      maxWidth: 620,
                      margin: "0 auto 14px",
                    },
                    children:
                      "We're very selective about the sponsors and brands we work with. But if young adults are your people, and you can add fuel to the fun with a venue, snacks, prizes, or momo, we're all ears.",
                  }),
                  i.jsxs("div", {
                    style: {
                      marginTop: 28,
                      display: "flex",
                      justifyContent: "center",
                      gap: 28,
                      flexWrap: "wrap",
                      alignItems: "center",
                    },
                    children: [
                      i.jsx(Yl, {
                        href: "mailto:tumletgames@gmail.com?subject=Game%20Night%20sponsorship",
                        style: { whiteSpace: "nowrap", padding: "16px 32px" },
                        children: "Pitch us your idea →",
                      }),
                      i.jsx("a", {
                        href: "mailto:tumletgames@gmail.com",
                        style: {
                          textDecoration: "underline",
                          color: "#130D01",
                          fontSize: 16,
                          fontWeight: 500,
                        },
                        children: "tumletgames@gmail.com",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            i.jsxs("section", {
              id: "join",
              style: {
                background: "#F3B952",
                borderTop: "3px solid #130D01",
                borderBottom: "3px solid #130D01",
                padding: "56px 0",
                position: "relative",
              },
              children: [
                i.jsx("span", {
                  style: {
                    position: "absolute",
                    top: -16,
                    right: "5%",
                    background: "#F16147",
                    color: "#fff",
                    padding: "7px 16px",
                    borderRadius: 999,
                    border: "2px solid #130D01",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    transform: "rotate(4deg)",
                  },
                  children: "It's free",
                }),
                i.jsxs("div", {
                  className: "gn-signup-inner",
                  style: {
                    maxWidth: 1180,
                    margin: "0 auto",
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 40,
                    flexWrap: "wrap",
                  },
                  children: [
                    i.jsxs("div", {
                      style: { maxWidth: 600, textAlign: "left" },
                      children: [
                        i.jsx("div", {
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            fontSize: 13,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "#130D01",
                            marginBottom: 10,
                          },
                          children: "Get on the list",
                        }),
                        i.jsx("h2", {
                          style: {
                            fontFamily: "'Baloo 2', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(30px, 3.6vw, 40px)",
                            color: "#130D01",
                            lineHeight: 1.12,
                            margin: "0 0 10px",
                            letterSpacing: "-0.01em",
                          },
                          children: "Be there when Kathmandu plays next.",
                        }),
                        i.jsx("p", {
                          style: { fontSize: 17, color: "#130D01", margin: 0 },
                          children:
                            "The date and venue drop in the WhatsApp community a week before every game night, and nowhere else.",
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                      },
                      children: i.jsxs(Yl, {
                        href: e,
                        shadowColor: "#130D01",
                        children: [
                          i.jsx(Pp, {}),
                          "Join the WhatsApp community",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    });
  },
  e5 = "https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE",
  t5 = ({ color: e = "#fff" }) =>
    i.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 32 32",
      fill: "none",
      "aria-hidden": "true",
      style: { flex: "none" },
      children: i.jsx("path", {
        fill: e,
        d: "M16.01 4C9.4 4 4.03 9.36 4.03 15.96c0 2.11.55 4.16 1.6 5.98L4 28l6.23-1.63a11.96 11.96 0 0 0 5.78 1.47h.01c6.6 0 11.97-5.36 11.97-11.96 0-3.2-1.25-6.2-3.5-8.46A11.9 11.9 0 0 0 16.01 4Zm5.46 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z",
      }),
    }),
  ci = ({
    gridArea: e,
    rotation: t,
    shadowColor: n,
    caption: r,
    dark: o = !0,
    src: a,
    alt: s,
  }) => {
    const [l, c] = x.useState(!1);
    return i.jsxs("div", {
      style: {
        gridArea: e,
        background: "#fff",
        border: "3px solid #130D01",
        padding: "10px 10px 44px",
        boxShadow: l ? `3px 3px 0 0 ${n}` : `9px 9px 0 0 ${n}`,
        transform: l ? "rotate(0deg) translate(-4px, -4px)" : `rotate(${t})`,
        transition: "transform 0.22s ease, box-shadow 0.18s ease",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
        cursor: "default",
        zIndex: l ? 10 : 1,
        position: "relative",
      },
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
      children: [
        i.jsx("div", {
          style: {
            flex: 1,
            overflow: "hidden",
            background: o
              ? "linear-gradient(135deg, #1c1812 0%, #272017 100%)"
              : "linear-gradient(135deg, #e8dece 0%, #d0c4ae 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          },
          children: a
            ? i.jsx("img", {
                src: a,
                alt: s || r,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                },
              })
            : i.jsx("span", {
                style: {
                  color: o ? "rgba(255,255,255,0.14)" : "#9e9080",
                  fontSize: 11,
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                },
                children: "Photo coming soon",
              }),
        }),
        i.jsx("p", {
          style: {
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11,
            color: "#7a6e60",
            textAlign: "center",
            margin: "12px 0 0",
            fontStyle: "italic",
            letterSpacing: "0.04em",
            fontWeight: 500,
            lineHeight: 1.4,
          },
          children: r,
        }),
      ],
    });
  },
  n5 = () => (
    x.useEffect(() => {
      document.title =
        "Tumlet Game Night: Behind the Door That Isn't a Door · Misfits, June 2026";
      let e = document.querySelector("meta[name='description']");
      (e ||
        ((e = document.createElement("meta")),
        e.setAttribute("name", "description"),
        document.head.appendChild(e)),
        e.setAttribute(
          "content",
          "A crazy door, intentional drinks, staff you actually like, and a game night that went all the way. A recap of Tumlet Game Night at Misfits Kathmandu, June 2026.",
        ));
      let t = document.querySelector("link[rel='canonical']"),
        n = !1;
      return (
        t ||
          ((t = document.createElement("link")),
          t.setAttribute("rel", "canonical"),
          document.head.appendChild(t),
          (n = !0)),
        t.setAttribute(
          "href",
          "https://www.tumlet.com/game-night/misfits-june-2026",
        ),
        () => {
          n && t && t.remove();
        }
      );
    }, []),
    i.jsxs("div", {
      style: {
        background: "#ffffff",
        color: "#130D01",
        fontFamily: "'Baloo 2', system-ui, sans-serif",
        overflowX: "hidden",
      },
      children: [
        i.jsx("style", {
          children: `
        /* Drop cap */
        .gn-drop::first-letter {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          float: left;
          font-size: 72px;
          line-height: 0.82;
          padding: 6px 10px 0 0;
          color: #F16147;
        }

        /* Gallery grid — desktop */
        @media (min-width: 700px) {
          .gn-gallery {
            display: grid !important;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 270px 270px 210px;
            grid-template-areas:
              "g1 g1 g2"
              "g3 g4 g2"
              "g5 g5 g5";
          }
        }

        /* Gallery grid — mobile */
        @media (max-width: 699px) {
          .gn-gallery {
            display: flex !important;
            flex-direction: column;
          }
          .gn-gallery > div {
            height: 260px;
          }
        }

        .gn-back:hover { color: #F16147 !important; }
        .gn-cta-btn:hover {
          transform: translate(-3px, -3px) !important;
          box-shadow: 9px 9px 0 0 #130D01 !important;
        }
      `,
        }),
        i.jsx(Ze, {}),
        i.jsxs("main", {
          style: { maxWidth: 1020, margin: "0 auto", padding: "0 24px 96px" },
          children: [
            i.jsx("div", {
              style: { padding: "22px 0 0" },
              children: i.jsx(X, {
                to: "/game-night",
                className: "gn-back",
                style: {
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#130D01",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  display: "inline-flex",
                  gap: 6,
                  alignItems: "center",
                  transition: "color 0.15s",
                },
                children: "← All game nights",
              }),
            }),
            i.jsxs("header", {
              style: { padding: "28px 0 0", maxWidth: 740 },
              children: [
                i.jsx("div", {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 22,
                  },
                  children: [
                    { label: "June 2026", filled: !0 },
                    { label: "Misfits, Kathmandu", filled: !1 },
                    { label: "Recap", filled: !1 },
                  ].map((e) =>
                    i.jsx(
                      "span",
                      {
                        style: {
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: 11.5,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          padding: "5px 14px",
                          borderRadius: 999,
                          border: "2px solid #130D01",
                          background: e.filled ? "#F3B952" : "transparent",
                          color: "#130D01",
                          whiteSpace: "nowrap",
                        },
                        children: e.label,
                      },
                      e.label,
                    ),
                  ),
                }),
                i.jsx("h1", {
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(30px, 5vw, 54px)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.02em",
                    color: "#130D01",
                    margin: "0 0 24px",
                  },
                  children:
                    "Tumlet Game Night — Behind the Door That Isn't a Door",
                }),
                i.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: 14 },
                  children: [
                    i.jsx("div", {
                      style: {
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#F3B952",
                        border: "2px solid #130D01",
                        display: "grid",
                        placeItems: "center",
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 800,
                        fontSize: 17,
                        color: "#130D01",
                        flex: "none",
                      },
                      children: "T",
                    }),
                    i.jsxs("div", {
                      children: [
                        i.jsx("div", {
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            fontSize: 14,
                          },
                          children: "Tumlet",
                        }),
                        i.jsx("div", {
                          style: {
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 13,
                            color: "#7a6e60",
                            marginTop: 2,
                          },
                          children: "3 June 2026 · 3 min read",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              style: { margin: "36px 0 0" },
              children: [
                i.jsx("div", {
                  style: {
                    width: "100%",
                    height: "clamp(240px, 44vw, 500px)",
                    background:
                      "linear-gradient(135deg, #1c1812 0%, #272017 100%)",
                    border: "3px solid #130D01",
                    borderRadius: 16,
                    boxShadow: "10px 10px 0 0 #F3B952",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.14)",
                    fontSize: 12,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    overflow: "hidden",
                  },
                  children: "Cover photo coming soon",
                }),
                i.jsx("p", {
                  style: {
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12,
                    color: "#7a6e60",
                    textAlign: "center",
                    marginTop: 12,
                    fontStyle: "italic",
                  },
                  children:
                    "somewhere inside Misfits, Konti Path — game night, June 3rd",
                }),
              ],
            }),
            i.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: "4px 24px",
                background: "#F3B952",
                border: "2px solid #130D01",
                borderRadius: 16,
                padding: "22px 28px",
                boxShadow: "6px 6px 0 0 #130D01",
                margin: "44px 0 0",
                maxWidth: 680,
              },
              children: [
                { k: "Date", v: "Tue, 3 Jun 2026" },
                { k: "Where", v: "Misfits, Konti Path" },
                { k: "Turnout", v: "40+ players" },
                { k: "Entry", v: "Free, as always" },
              ].map((e) =>
                i.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 10,
                      alignItems: "baseline",
                      padding: "7px 0",
                    },
                    children: [
                      i.jsx("span", {
                        style: {
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          minWidth: 72,
                          opacity: 0.6,
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          flex: "none",
                        },
                        children: e.k,
                      }),
                      i.jsx("span", {
                        style: {
                          fontFamily: "'Baloo 2', sans-serif",
                          fontWeight: 700,
                          fontSize: 16,
                        },
                        children: e.v,
                      }),
                    ],
                  },
                  e.k,
                ),
              ),
            }),
            i.jsxs("div", {
              style: {
                maxWidth: 680,
                margin: "52px 0 0",
                fontSize: 18,
                lineHeight: 1.72,
                color: "#2a241a",
              },
              children: [
                i.jsx("p", {
                  className: "gn-drop",
                  style: { marginBottom: 22 },
                  children:
                    "Nobody walked past the entrance without stopping. The door at Misfits isn't a door so much as a statement — the kind that makes you check twice whether you've found the right place. You have. Go in. The lights, the seating, the neon: nothing about this space is accidental. Which turned out to be exactly the right energy for a night of board games where nothing is left to chance either.",
                }),
                i.jsx("blockquote", {
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(21px, 2.6vw, 28px)",
                    lineHeight: 1.3,
                    color: "#130D01",
                    borderLeft: "6px solid #F16147",
                    padding: "8px 0 8px 26px",
                    margin: "36px 0",
                  },
                  children: `"So, what are we? A cafe? A bistro? A bar? We are everything, and nothing." — Misfits' own words. Felt about right at 9 PM with Bluff Momo on the table.`,
                }),
                i.jsx("p", {
                  children:
                    "Forty-something players showed up — half of them alone. By round two of Bluff Momo the tables had found their characters: the strategists, the chaotic bluffers, the people losing on purpose just to watch everyone else lose their minds. Staff were rooting for tables by the end of the night. That's a good venue.",
                }),
              ],
            }),
            i.jsx("div", {
              style: { maxWidth: 680, margin: "56px 0 0" },
              children: i.jsxs("div", {
                style: {
                  background: "#FAF1E4",
                  border: "2px solid #130D01",
                  borderRadius: 16,
                  padding: "28px 32px",
                  boxShadow: "6px 6px 0 0 #F3B952",
                },
                children: [
                  i.jsx("h3", {
                    style: {
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 800,
                      fontSize: 21,
                      margin: "0 0 18px",
                      color: "#130D01",
                    },
                    children: "Why Misfits worked",
                  }),
                  i.jsx("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                    },
                    children: [
                      {
                        num: "01",
                        strong: "The entry door.",
                        rest: " Genuinely wild. Sets the tone before you've sat down.",
                      },
                      {
                        num: "02",
                        strong: "The drinks.",
                        rest: " Actually good. Players were ordering rounds, not nursing one drink all night.",
                      },
                      {
                        num: "03",
                        strong: "Everything is intentional.",
                        rest: " Designed, not decorated. Board games belong somewhere that someone thought about.",
                      },
                      {
                        num: "04",
                        strong: "The staff.",
                        rest: " Present without being overbearing. By the end they were rooting for tables.",
                      },
                    ].map((e) =>
                      i.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            gap: 16,
                            alignItems: "flex-start",
                          },
                          children: [
                            i.jsx("span", {
                              style: {
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 900,
                                fontSize: 17,
                                color: "#F16147",
                                lineHeight: 1.5,
                                flex: "none",
                                width: 26,
                              },
                              children: e.num,
                            }),
                            i.jsxs("p", {
                              style: {
                                fontFamily: "'Baloo 2', sans-serif",
                                fontSize: 15.5,
                                lineHeight: 1.65,
                                margin: 0,
                              },
                              children: [
                                i.jsx("strong", {
                                  style: { fontWeight: 700 },
                                  children: e.strong,
                                }),
                                e.rest,
                              ],
                            }),
                          ],
                        },
                        e.num,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            i.jsxs("div", {
              style: { margin: "72px 0 0" },
              children: [
                i.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    marginBottom: 28,
                  },
                  children: [
                    i.jsx("h2", {
                      style: {
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 800,
                        fontSize: 26,
                        margin: 0,
                        color: "#130D01",
                        whiteSpace: "nowrap",
                      },
                      children: "The night in photos",
                    }),
                    i.jsx("div", {
                      style: {
                        flex: 1,
                        height: 3,
                        background: "#130D01",
                        borderRadius: 2,
                      },
                    }),
                    i.jsx("span", {
                      style: {
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#7a6e60",
                        whiteSpace: "nowrap",
                      },
                      children: "Jun 3, 2026",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "gn-gallery",
                  style: { gap: 18 },
                  children: [
                    i.jsx(ci, {
                      gridArea: "g1",
                      rotation: "-0.4deg",
                      shadowColor: "#F3B952",
                      caption: "the full room, Misfits Konti Path",
                    }),
                    i.jsx(ci, {
                      gridArea: "g2",
                      rotation: "1.8deg",
                      shadowColor: "#F16147",
                      caption: "the door",
                    }),
                    i.jsx(ci, {
                      gridArea: "g3",
                      rotation: "-2.4deg",
                      shadowColor: "#130D01",
                      caption: "table two, round three",
                      dark: !1,
                    }),
                    i.jsx(ci, {
                      gridArea: "g4",
                      rotation: "1.4deg",
                      shadowColor: "#F3B952",
                      caption: "the drinks were doing their bit",
                    }),
                    i.jsx(ci, {
                      gridArea: "g5",
                      rotation: "0.5deg",
                      shadowColor: "#F16147",
                      caption: "end of night — everyone still here",
                      dark: !1,
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              style: { maxWidth: 680, margin: "60px 0 0" },
              children: [
                i.jsx("h2", {
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 800,
                    fontSize: 24,
                    margin: "0 0 16px",
                    color: "#130D01",
                  },
                  children: "On the table",
                }),
                i.jsx("div", {
                  style: { display: "flex", flexWrap: "wrap", gap: 10 },
                  children: [
                    { label: "Bluff Momo", filled: !0 },
                    { label: "Dixit", filled: !0 },
                    { label: "Codenames", filled: !0 },
                    { label: "Skull", filled: !0 },
                    { label: "Carrom", filled: !1 },
                    { label: "+ whatever you brought", filled: !1 },
                  ].map((e) =>
                    i.jsx(
                      "span",
                      {
                        style: {
                          fontFamily: "'Baloo 2', sans-serif",
                          fontWeight: 600,
                          fontSize: 14.5,
                          padding: "6px 16px",
                          borderRadius: 999,
                          border: "2px solid #130D01",
                          background: e.filled ? "#F3B952" : "transparent",
                          color: "#130D01",
                          whiteSpace: "nowrap",
                        },
                        children: e.label,
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
            i.jsxs("section", {
              style: {
                background: "#F16147",
                border: "3px solid #130D01",
                borderRadius: 20,
                padding: "44px 36px",
                textAlign: "center",
                boxShadow: "10px 10px 0 0 #F3B952",
                margin: "72px 0 0",
              },
              children: [
                i.jsx("h2", {
                  style: {
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(24px, 3.4vw, 34px)",
                    color: "#fff",
                    margin: "0 0 10px",
                    lineHeight: 1.12,
                  },
                  children: "Next one's already being planned.",
                }),
                i.jsx("p", {
                  style: {
                    fontSize: 17,
                    color: "#fff",
                    margin: "0 0 28px",
                    opacity: 0.95,
                  },
                  children:
                    "Join the WhatsApp community — that's where the next date and venue drop first, and nowhere else.",
                }),
                i.jsxs("a", {
                  href: e5,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "gn-cta-btn",
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#F3B952",
                    color: "#130D01",
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    padding: "14px 36px",
                    borderRadius: 12,
                    border: "2.5px solid #130D01",
                    boxShadow: "6px 6px 0 0 #130D01",
                    textDecoration: "none",
                    transition: "transform 0.18s ease, box-shadow 0.15s ease",
                  },
                  children: [
                    i.jsx(t5, { color: "#130D01" }),
                    "Join the WhatsApp community",
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              style: { textAlign: "center", marginTop: 44 },
              children: i.jsx(X, {
                to: "/game-night",
                style: {
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#F16147",
                  textDecoration: "underline",
                  letterSpacing: "0.02em",
                },
                children: "← Back to all game nights",
              }),
            }),
          ],
        }),
        i.jsx(Le, {}),
      ],
    })
  ),
  r5 = new O3(),
  o5 = "G-CXY6SHNGBH",
  i5 = () =>
    i.jsx(D3, {
      client: r5,
      children: i.jsxs(u3, {
        children: [
          i.jsx(lv, {}),
          i.jsx(_v, {}),
          i.jsxs(Aw, {
            children: [
              i.jsx(_w, {}),
              i.jsx(Mw, { trackingId: o5 }),
              i.jsxs(kw, {
                children: [
                  i.jsx(Ne, { path: "/", element: i.jsx($w, {}) }),
                  i.jsx(Ne, {
                    path: "/bluff-momo-rules",
                    element: i.jsx(Gw, {}),
                  }),
                  i.jsx(Ne, { path: "/blog", element: i.jsx(X8, {}) }),
                  i.jsx(Ne, { path: "/blog/:slug", element: i.jsx(o6, {}) }),
                  i.jsx(Ne, { path: "/bichitra", element: i.jsx(u6, {}) }),
                  i.jsx(Ne, { path: "/about", element: i.jsx(p6, {}) }),
                  i.jsx(Ne, { path: "/ganthan", element: i.jsx(y6, {}) }),
                  i.jsx(Ne, {
                    path: "/corporate-game-night",
                    element: i.jsx(C6, {}),
                  }),
                  i.jsx(Ne, { path: "/thug", element: i.jsx(F6, {}) }),
                  i.jsx(Ne, { path: "/farak", element: i.jsx(O6, {}) }),
                  i.jsx(Ne, { path: "/tundikhel", element: i.jsx(z6, {}) }),
                  i.jsx(Ne, { path: "/tundikhel-how", element: i.jsx(W6, {}) }),
                  i.jsx(Ne, { path: "/wavelength", element: i.jsx(Y6, {}) }),
                  i.jsx(Ne, { path: "/game-night", element: i.jsx(Z6, {}) }),
                  i.jsx(Ne, {
                    path: "/game-night/misfits-june-2026",
                    element: i.jsx(n5, {}),
                  }),
                  i.jsx(Ne, { path: "*", element: i.jsx(a6, {}) }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
Zm(document.getElementById("root")).render(i.jsx(i5, {}));
