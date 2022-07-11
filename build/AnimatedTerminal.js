var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = [];
        for (var i3 = 0; i3 < arguments.length; i3++) {
          var arg = arguments[i3];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f;
var e = {};
var c = [];
var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function h(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function v(l3, u3, i3) {
  var t3, o3, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
  return y(l3, f3, t3, o3, null);
}
function y(n2, i3, t3, o3, r3) {
  var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function d(n2) {
  return n2.children;
}
function _(n2, l3) {
  this.props = n2, this.context = l3;
}
function k(n2, l3) {
  if (null == l3)
    return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? k(n2) : null;
}
function b(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return b(n2);
  }
}
function m(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l3, u3, i3, t3, o3, r3;
      n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? k(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && b(t3)));
    });
}
function w(n2, l3, u3, i3, t3, o3, r3, f3, s3, a3) {
  var h3, v3, p3, _3, b3, m3, g3, w4 = i3 && i3.__k || c, A4 = w4.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if (null != (_3 = u3.__k[h3] = null == (_3 = l3[h3]) || "boolean" == typeof _3 ? null : "string" == typeof _3 || "number" == typeof _3 || "bigint" == typeof _3 ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3)) {
      if (_3.__ = u3, _3.__b = u3.__b + 1, null === (p3 = w4[h3]) || p3 && _3.key == p3.key && _3.type === p3.type)
        w4[h3] = void 0;
      else
        for (v3 = 0; v3 < A4; v3++) {
          if ((p3 = w4[v3]) && _3.key == p3.key && _3.type === p3.type) {
            w4[v3] = void 0;
            break;
          }
          p3 = null;
        }
      j(n2, _3, p3 = p3 || e, t3, o3, r3, f3, s3, a3), b3 = _3.__e, (v3 = _3.ref) && p3.ref != v3 && (g3 || (g3 = []), p3.ref && g3.push(p3.ref, null, _3), g3.push(v3, _3.__c || b3, _3)), null != b3 ? (null == m3 && (m3 = b3), "function" == typeof _3.type && _3.__k === p3.__k ? _3.__d = s3 = x(_3, s3, n2) : s3 = P(n2, _3, p3, w4, b3, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && p3.__e == s3 && s3.parentNode != n2 && (s3 = k(p3));
    }
  for (u3.__e = m3, h3 = A4; h3--; )
    null != w4[h3] && ("function" == typeof u3.type && null != w4[h3].__e && w4[h3].__e == u3.__d && (u3.__d = k(i3, h3 + 1)), N(w4[h3], w4[h3]));
  if (g3)
    for (h3 = 0; h3 < g3.length; h3++)
      M(g3[h3], g3[++h3], g3[++h3]);
}
function x(n2, l3, u3) {
  for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
    (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function A(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    A(n3, l3);
  }) : l3.push(n2)), l3;
}
function P(n2, l3, u3, i3, t3, o3) {
  var r3, f3, e3;
  if (void 0 !== l3.__d)
    r3 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != o3 || null == t3.parentNode)
    n:
      if (null == o3 || o3.parentNode !== n2)
        n2.appendChild(t3), r3 = null;
      else {
        for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
          if (f3 == t3)
            break n;
        n2.insertBefore(t3, o3), r3 = o3;
      }
  return void 0 !== r3 ? r3 : t3.nextSibling;
}
function C(n2, l3, u3, i3, t3) {
  var o3;
  for (o3 in u3)
    "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
  for (o3 in l3)
    t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
}
function $(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || s.test(l3) ? u3 : u3 + "px";
}
function H(n2, l3, u3, i3, t3) {
  var o3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
  var s3, h3, v3, y3, p3, k3, b3, m3, g3, x4, A4, P3, C3, $3 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s3 = l.__b) && s3(u3);
  try {
    n:
      if ("function" == typeof $3) {
        if (m3 = u3.props, g3 = (s3 = $3.contextType) && t3[s3.__c], x4 = s3 ? g3 ? g3.props.value : s3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in $3 && $3.prototype.render ? u3.__c = h3 = new $3(m3, x4) : (u3.__c = h3 = new _(m3, x4), h3.constructor = $3, h3.render = O), g3 && g3.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x4, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), null == h3.__s && (h3.__s = h3.state), null != $3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, $3.getDerivedStateFromProps(m3, h3.__s))), y3 = h3.props, p3 = h3.state, v3)
          null == $3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (null == $3.getDerivedStateFromProps && m3 !== y3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m3, x4), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m3, h3.__s, x4) || u3.__v === i3.__v) {
            h3.props = m3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), h3.__h.length && f3.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(m3, h3.__s, x4), null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(y3, p3, k3);
          });
        }
        if (h3.context = x4, h3.props = m3, h3.__v = u3, h3.__P = n2, A4 = l.__r, P3 = 0, "prototype" in $3 && $3.prototype.render)
          h3.state = h3.__s, h3.__d = false, A4 && A4(u3), s3 = h3.render(h3.props, h3.state, h3.context);
        else
          do {
            h3.__d = false, A4 && A4(u3), s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++P3 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (t3 = a(a({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k3 = h3.getSnapshotBeforeUpdate(y3, p3)), C3 = null != s3 && s3.type === d && null == s3.key ? s3.props.children : s3, w(n2, Array.isArray(C3) ? C3 : [C3], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
    (s3 = l.diffed) && s3(u3);
  } catch (n3) {
    u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function z(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function L(l3, u3, i3, t3, o3, r3, f3, c3) {
  var s3, a3, v3, y3 = i3.props, p3 = u3.props, d3 = u3.type, _3 = 0;
  if ("svg" === d3 && (o3 = true), null != r3) {
    for (; _3 < r3.length; _3++)
      if ((s3 = r3[_3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
        l3 = s3, r3[_3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d3)
      return document.createTextNode(p3);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
  }
  if (null === d3)
    y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
  else {
    if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
      if (null != r3)
        for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
          y3[l3.attributes[_3].name] = l3.attributes[_3].value;
      (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p3, y3, o3, c3), v3)
      u3.__k = [];
    else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, o3 && "foreignObject" !== d3, r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), null != r3)
      for (_3 = r3.length; _3--; )
        null != r3[_3] && h(r3[_3]);
    c3 || ("value" in p3 && void 0 !== (_3 = p3.value) && (_3 !== l3.value || "progress" === d3 && !_3 || "option" === d3 && _3 !== y3.value) && H(l3, "value", _3, y3.value, false), "checked" in p3 && void 0 !== (_3 = p3.checked) && _3 !== l3.checked && H(l3, "checked", _3, y3.checked, false));
  }
  return l3;
}
function M(n2, u3, i3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function N(n2, u3, i3) {
  var t3, o3;
  if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = n2.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && N(t3[o3], u3, "function" != typeof n2.type);
  i3 || null == n2.__e || h(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function S(u3, i3, t3) {
  var o3, r3, f3;
  l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = v(d, null, [u3]), r3 || e, e, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(f3, u3);
}
n = c.slice, l = { __e: function(n2, l3, u3, i3) {
  for (var t3, o3, r3; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
          return t3.__E = t3;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, _.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n2 && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), null != n2 && this.__v && (l3 && this.__h.push(l3), m(this));
}, _.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
}, _.prototype.render = d, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var u2;
var r2;
var o2;
var i2 = 0;
var c2 = [];
var f2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
function p(t3, r3) {
  l.__h && l.__h(u2, t3, i2 || r3), i2 = 0;
  var o3 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t3 >= o3.__.length && o3.__.push({ __V: f2 }), o3.__[t3];
}
function y2(n2) {
  return i2 = 1, d2(z2, n2);
}
function d2(n2, r3, o3) {
  var i3 = p(t2++, 2);
  return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : z2(void 0, r3), function(n3) {
    var t3 = i3.t(i3.__[0], n3);
    i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
  }], i3.__c = u2), i3.__;
}
function _2(r3, o3) {
  var i3 = p(t2++, 3);
  !l.__s && w2(i3.__H, o3) && (i3.__ = r3, i3.u = o3, u2.__H.__h.push(i3));
}
function s2(n2) {
  return i2 = 5, F(function() {
    return { current: n2 };
  }, []);
}
function F(n2, u3) {
  var r3 = p(t2++, 7);
  return w2(r3.__H, u3) ? (r3.__V = n2(), r3.u = u3, r3.__h = n2, r3.__V) : r3.__;
}
function b2() {
  for (var t3; t3 = c2.shift(); )
    if (t3.__P)
      try {
        t3.__H.__h.forEach(j2), t3.__H.__h.forEach(k2), t3.__H.__h = [];
      } catch (u3) {
        t3.__H.__h = [], l.__e(u3, t3.__v);
      }
}
l.__b = function(n2) {
  u2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var o3 = (u2 = n2.__c).__H;
  o3 && (r2 === u2 ? (o3.__h = [], u2.__h = [], o3.__.forEach(function(n3) {
    n3.__V = f2, n3.u = void 0;
  })) : (o3.__h.forEach(j2), o3.__h.forEach(k2), o3.__h = [])), r2 = u2;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var i3 = t3.__c;
  i3 && i3.__H && (i3.__H.__h.length && (1 !== c2.push(i3) && o2 === l.requestAnimationFrame || ((o2 = l.requestAnimationFrame) || function(n2) {
    var t4, u3 = function() {
      clearTimeout(r3), g2 && cancelAnimationFrame(t4), setTimeout(n2);
    }, r3 = setTimeout(u3, 100);
    g2 && (t4 = requestAnimationFrame(u3));
  })(b2)), i3.__H.__.forEach(function(n2) {
    n2.u && (n2.__H = n2.u), n2.__V !== f2 && (n2.__ = n2.__V), n2.u = void 0, n2.__V = f2;
  })), r2 = u2 = null;
}, l.__c = function(t3, u3) {
  u3.some(function(t4) {
    try {
      t4.__h.forEach(j2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || k2(n2);
      });
    } catch (r3) {
      u3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u3 = [], l.__e(r3, t4.__v);
    }
  }), l2 && l2(t3, u3);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var u3, r3 = t3.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n2) {
    try {
      j2(n2);
    } catch (n3) {
      u3 = n3;
    }
  }), u3 && l.__e(u3, r3.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t3 = u2, r3 = n2.__c;
  "function" == typeof r3 && (n2.__c = void 0, r3()), u2 = t3;
}
function k2(n2) {
  var t3 = u2;
  n2.__c = n2.__(), u2 = t3;
}
function w2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
    return t4 !== n2[u3];
  });
}
function z2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// node_modules/preact/compat/dist/compat.module.js
function S2(n2, t3) {
  for (var e3 in t3)
    n2[e3] = t3[e3];
  return n2;
}
function C2(n2, t3) {
  for (var e3 in n2)
    if ("__source" !== e3 && !(e3 in t3))
      return true;
  for (var r3 in t3)
    if ("__source" !== r3 && n2[r3] !== t3[r3])
      return true;
  return false;
}
function E(n2) {
  this.props = n2;
}
(E.prototype = new _()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t3) {
  return C2(this.props, n2) || C2(this.state, t3);
};
var w3 = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w3 && w3(n2);
};
var x3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var A3 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u3, o3 = t3; o3 = o3.__; )
      if ((u3 = o3.__c) && u3.__c)
        return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
  }
  A3(n2, t3, e3, r3);
};
var O2 = l.unmount;
function T3() {
  this.__u = 0, this.t = null, this.__b = null;
}
function L2(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function D2() {
  this.u = null, this.o = null;
}
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), O2 && O2(n2);
}, (T3.prototype = new _()).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  null == r3.t && (r3.t = []), r3.t.push(e3);
  var u3 = L2(r3.__v), o3 = false, i3 = function() {
    o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
  };
  e3.__R = i3;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = function n4(t5, e4, r4) {
          return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
            return n4(t6, e4, r4);
          }), t5.__c && t5.__c.__P === e4 && (t5.__e && r4.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r4)), t5;
        }(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
        t4.forceUpdate();
    }
  }, f3 = true === t3.__h;
  r3.__u++ || f3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, T3.prototype.componentWillUnmount = function() {
  this.t = [];
}, T3.prototype.render = function(n2, t3) {
  if (this.__b) {
    if (this.__v.__k) {
      var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
      this.__v.__k[0] = function n3(t4, e4, r4) {
        return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
          "function" == typeof n4.__c && n4.__c();
        }), t4.__c.__H = null), null != (t4 = S2({}, t4)).__c && (t4.__c.__P === r4 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
          return n3(t5, e4, r4);
        })), t4;
      }(this.__b, e3, r3.__O = r3.__P);
    }
    this.__b = null;
  }
  var u3 = t3.__a && v(d, null, n2.fallback);
  return u3 && (u3.__h = null), [v(d, null, t3.__a ? null : n2.children), u3];
};
var F2 = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e3 = n2.u; e3; ) {
      for (; e3.length > 3; )
        e3.pop()();
      if (e3[1] < e3[0])
        break;
      n2.u = e3 = e3[2];
    }
};
(D2.prototype = new _()).__a = function(n2) {
  var t3 = this, e3 = L2(t3.__v), r3 = t3.o.get(n2);
  return r3[0]++, function(u3) {
    var o3 = function() {
      t3.props.revealOrder ? (r3.push(u3), F2(t3, n2, r3)) : u3();
    };
    e3 ? e3(o3) : o3();
  };
}, D2.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t3 = A(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
  for (var e3 = t3.length; e3--; )
    this.o.set(t3[e3], this.u = [1, 0, this.u]);
  return n2.children;
}, D2.prototype.componentDidUpdate = D2.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t3, e3) {
    F2(n2, e3, t3);
  });
};
var W = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var P2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var $2 = "undefined" != typeof document;
var j3 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
function z3(n2, t3, e3) {
  return null == t3.__k && (t3.textContent = ""), S(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
_.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
  Object.defineProperty(_.prototype, n2, { configurable: true, get: function() {
    return this["UNSAFE_" + n2];
  }, set: function(t3) {
    Object.defineProperty(this, n2, { configurable: true, writable: true, value: t3 });
  } });
});
var H2 = l.event;
function Z() {
}
function Y() {
  return this.cancelBubble;
}
function q3() {
  return this.defaultPrevented;
}
l.event = function(n2) {
  return H2 && (n2 = H2(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = q3, n2.nativeEvent = n2;
};
var G;
var J = { configurable: true, get: function() {
  return this.class;
} };
var K = l.vnode;
l.vnode = function(n2) {
  var t3 = n2.type, e3 = n2.props, r3 = e3;
  if ("string" == typeof t3) {
    var u3 = -1 === t3.indexOf("-");
    for (var o3 in r3 = {}, e3) {
      var i3 = e3[o3];
      $2 && "children" === o3 && "noscript" === t3 || "value" === o3 && "defaultValue" in e3 && null == i3 || ("defaultValue" === o3 && "value" in e3 && null == e3.value ? o3 = "value" : "download" === o3 && true === i3 ? i3 = "" : /ondoubleclick/i.test(o3) ? o3 = "ondblclick" : /^onchange(textarea|input)/i.test(o3 + t3) && !j3(e3.type) ? o3 = "oninput" : /^onfocus$/i.test(o3) ? o3 = "onfocusin" : /^onblur$/i.test(o3) ? o3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o3) ? o3 = o3.toLowerCase() : u3 && P2.test(o3) ? o3 = o3.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i3 && (i3 = void 0), /^oninput$/i.test(o3) && (o3 = o3.toLowerCase(), r3[o3] && (o3 = "oninputCapture")), r3[o3] = i3);
    }
    "select" == t3 && r3.multiple && Array.isArray(r3.value) && (r3.value = A(e3.children).forEach(function(n3) {
      n3.props.selected = -1 != r3.value.indexOf(n3.props.value);
    })), "select" == t3 && null != r3.defaultValue && (r3.value = A(e3.children).forEach(function(n3) {
      n3.props.selected = r3.multiple ? -1 != r3.defaultValue.indexOf(n3.props.value) : r3.defaultValue == n3.props.value;
    })), n2.props = r3, e3.class != e3.className && (J.enumerable = "className" in e3, null != e3.className && (r3.class = e3.className), Object.defineProperty(r3, "className", J));
  }
  n2.$$typeof = W, K && K(n2);
};
var Q = l.__r;
l.__r = function(n2) {
  Q && Q(n2), G = n2.__c;
};
function un(n2) {
  return !!n2.__k && (S(null, n2), true);
}
var cn = d;

// node_modules/preact/compat/client.mjs
function createRoot(container) {
  return {
    render(children) {
      z3(children, container);
    },
    unmount() {
      un(container);
    }
  };
}

// node_modules/@nitric/react-animated-term/dist/index.mjs
var import_classnames = __toESM(require_classnames(), 1);
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a3, b3) => {
  for (var prop in b3 || (b3 = {}))
    if (__hasOwnProp2.call(b3, prop))
      __defNormalProp(a3, prop, b3[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b3)) {
      if (__propIsEnum.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    }
  return a3;
};
var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var cursor = /* @__PURE__ */ v("span", {
  className: "Terminal-cursor"
});
var prompt = (prefix) => /* @__PURE__ */ v("span", {
  className: "Terminal-prompt"
}, prefix || "$", " ");
var renderLines = (lines) => {
  return lines.map((line) => {
    return /* @__PURE__ */ v(d, {
      key: line.id
    }, line.cmd ? prompt(line.prompt) : "", line.text ? /* @__PURE__ */ v("span", {
      style: { color: line.color }
    }, line.text) : line.text, line.current ? cursor : "", /* @__PURE__ */ v("br", null));
  });
};
var getWindowStyle = (white) => {
  return (0, import_classnames.default)({
    "Terminal-window": true,
    "Terminal-window-white": white
  });
};
var getTerminalStyle = (code) => {
  return (0, import_classnames.default)({
    "Terminal-term": true,
    "Terminal-term-code": code
  });
};
var getButtonStyle = (type) => {
  return (0, import_classnames.default)({
    "Terminal-btn": true,
    "Terminal-btn-close": type === "close",
    "Terminal-btn-minimize": type === "minimize",
    "Terminal-btn-maximize": type === "maximize"
  });
};
var getBodyStyle = (code) => {
  return (0, import_classnames.default)({
    "Terminal-body": true,
    "Terminal-body-animated": !code
  });
};
var getConsoleStyle = (code, white) => {
  return (0, import_classnames.default)({
    "Terminal-console": true,
    "Terminal-console-code": code,
    "Terminal-console-white": white
  });
};
var Terminal = ({
  children,
  white,
  height,
  code,
  onReplay,
  completed,
  replay = true
}) => {
  const btnClassName = white ? "Terminal-control-btn Terminal-control-btn-white" : "Terminal-control-btn";
  return /* @__PURE__ */ v("div", {
    className: getWindowStyle(white)
  }, /* @__PURE__ */ v("div", {
    className: getTerminalStyle(code),
    style: height ? { height } : null
  }, /* @__PURE__ */ v("div", {
    className: "Terminal-header"
  }, /* @__PURE__ */ v("span", {
    className: getButtonStyle("close")
  }), /* @__PURE__ */ v("span", {
    className: getButtonStyle("minimize")
  }), /* @__PURE__ */ v("span", {
    className: getButtonStyle("maximize")
  })), /* @__PURE__ */ v("div", {
    className: getBodyStyle(code)
  }, /* @__PURE__ */ v("div", {
    className: getConsoleStyle(code, white)
  }, code ? /* @__PURE__ */ v("code", {
    className: "Terminal-code"
  }, children) : /* @__PURE__ */ v("div", null, /* @__PURE__ */ v("div", {
    className: "Terminal-code"
  }, renderLines(children)), completed && replay ? /* @__PURE__ */ v("a", {
    className: btnClassName,
    onClick: () => onReplay()
  }, "Replay") : null)))));
};
var Terminal_default = Terminal;
var terminalContent = function* (lines) {
  if (lines.length === 0) {
    return [];
  }
  let lineIndex = 0;
  let linePosition = 0;
  let cmdTimer = null;
  let frameIndex = 0;
  let frameTimer = null;
  let frameRepeatCounter = 0;
  const buffer = [];
  while (true) {
    if (lineIndex < lines.length) {
      if (!lines[lineIndex].cmd) {
        const frames = lines[lineIndex].frames;
        if (!frames) {
          buffer.push({
            id: lineIndex,
            text: lines[lineIndex].text,
            cmd: false,
            current: false,
            color: lines[lineIndex].color
          });
          yield buffer;
          linePosition = 0;
          lineIndex++;
        } else if (frameIndex < frames.length) {
          if (frameIndex === 0) {
            if (!frameTimer && frameRepeatCounter === 0) {
              buffer.push({
                id: lineIndex,
                text: frames[0].text,
                cmd: false,
                current: true,
                color: lines[lineIndex].color
              });
            }
          }
          buffer[lineIndex].text = frames[frameIndex].text;
          if (frameTimer == null) {
            if (!isNaN(frames[frameIndex].delay)) {
              frameTimer = setTimeout(() => {
                clearTimeout(frameTimer);
                frameTimer = null;
                frameIndex++;
              }, frames[frameIndex].delay);
              yield buffer;
            } else {
              frameIndex++;
            }
          }
        } else {
          const { repeat, repeatCount } = lines[lineIndex];
          if (repeat && frameRepeatCounter <= repeatCount) {
            frameRepeatCounter++;
            frameIndex = 0;
          } else {
            if (lines[lineIndex].text) {
              buffer[lineIndex].text = lines[lineIndex].text;
            }
            buffer[lineIndex].current = false;
            linePosition = 0;
            frameIndex = 0;
            frameRepeatCounter = 0;
            lineIndex++;
          }
        }
      } else if (linePosition > lines[lineIndex].text.length) {
        buffer[lineIndex].current = lineIndex === lines.length - 1;
        linePosition = 0;
        lineIndex++;
      } else {
        if (linePosition === 0 && !cmdTimer) {
          buffer.push({
            id: lineIndex,
            text: "",
            cmd: lines[lineIndex].cmd,
            prompt: lines[lineIndex].prompt,
            color: lines[lineIndex].color,
            current: true
          });
        }
        buffer[lineIndex].text = lines[lineIndex].text.substring(0, linePosition);
        if (cmdTimer == null) {
          const delay = lines[lineIndex].delay;
          if (!isNaN(delay)) {
            cmdTimer = setTimeout(() => {
              clearTimeout(cmdTimer);
              cmdTimer = null;
              linePosition++;
            }, delay);
          } else {
            linePosition++;
          }
        }
      }
      yield buffer;
    } else {
      return buffer;
    }
  }
};
var contentHandler_default = terminalContent;
var Renderer = (_a) => {
  var _b = _a, {
    lines: initialLines = [],
    interval = 100,
    onCompleted
  } = _b, rest = __objRest(_b, [
    "lines",
    "interval",
    "onCompleted"
  ]);
  const [lines, setLines] = y2([]);
  const [completed, setCompleted] = y2(false);
  let intervalRef = s2();
  let contentRef = s2();
  _2(() => {
    contentRef.current = contentHandler_default(initialLines);
    intervalRef.current = setInterval(() => {
      const { value, done } = contentRef.current.next();
      if (value) {
        setLines([...lines, ...value]);
      }
      if (done) {
        clearTimeout(intervalRef.current);
        setCompleted(true);
      }
    }, interval);
    return () => clearTimeout(intervalRef.current);
  }, []);
  const replay = () => {
    contentRef.current = contentHandler_default(initialLines);
    setCompleted(false);
    intervalRef.current = setInterval(() => {
      if (contentRef.current) {
        const { value, done } = contentRef.current.next();
        setLines([...value]);
        if (done) {
          clearInterval(intervalRef.current);
          setCompleted(true);
        }
      }
    }, interval);
  };
  _2(() => {
    if (completed && typeof onCompleted !== "undefined") {
      onCompleted();
    }
  }, [completed]);
  return /* @__PURE__ */ v(Terminal_default, __spreadProps(__spreadValues({}, rest), {
    onReplay: () => replay(),
    completed
  }), lines);
};
var Renderer_default = Renderer;
var src_default = Renderer_default;

// src/AnimatedTerminal.tsx
function animatedTerminal(element, content, interval = 40) {
  const root = createRoot(element);
  root.render(/* @__PURE__ */ v(cn, null, /* @__PURE__ */ v(src_default, {
    lines: content,
    interval,
    height: 160
  })));
}
export {
  animatedTerminal as default
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
