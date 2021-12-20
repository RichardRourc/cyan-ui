!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t(require('vue'))
  else if ('function' == typeof define && define.amd) define(['vue'], t)
  else {
    var r = 'object' == typeof exports ? t(require('vue')) : t(e.Vue)
    for (var n in r) ('object' == typeof exports ? exports : e)[n] = r[n]
  }
})(window, function (e) {
  return (function (e) {
    var t = {}
    function r(n) {
      if (t[n]) return t[n].exports
      var o = (t[n] = { i: n, l: !1, exports: {} })
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var n = Object.create(null)
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t]
              }.bind(null, o)
            )
        return n
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return r.d(t, 'a', t), t
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (r.p = '/lib/'),
      r((r.s = 139))
    )
  })({
    0: function (t, r) {
      t.exports = e
    },
    1: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return m
      }),
        r.d(t, 'd', function () {
          return o.a
        }),
        r.d(t, 'b', function () {
          return O
        }),
        r.d(t, 'c', function () {
          return w
        }),
        r.d(t, 'e', function () {
          return C
        })
      var n = r(0),
        o = r.n(n)
      /**
       * vue-class-component v7.2.6
       * (c) 2015-present Evan You
       * @license MIT
       */
      function i(e) {
        return (i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        )
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t]
              return r
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            )
          })()
        )
      }
      function u() {
        return (
          'undefined' != typeof Reflect &&
          Reflect.defineMetadata &&
          Reflect.getOwnMetadataKeys
        )
      }
      function s(e, t) {
        f(e, t),
          Object.getOwnPropertyNames(t.prototype).forEach(function (r) {
            f(e.prototype, t.prototype, r)
          }),
          Object.getOwnPropertyNames(t).forEach(function (r) {
            f(e, t, r)
          })
      }
      function f(e, t, r) {
        ;(r
          ? Reflect.getOwnMetadataKeys(t, r)
          : Reflect.getOwnMetadataKeys(t)
        ).forEach(function (n) {
          var o = r
            ? Reflect.getOwnMetadata(n, t, r)
            : Reflect.getOwnMetadata(n, t)
          r
            ? Reflect.defineMetadata(n, o, e, r)
            : Reflect.defineMetadata(n, o, e)
        })
      }
      var p = { __proto__: [] } instanceof Array
      function l(e) {
        return function (t, r, n) {
          var o = 'function' == typeof t ? t : t.constructor
          o.__decorators__ || (o.__decorators__ = []),
            'number' != typeof n && (n = void 0),
            o.__decorators__.push(function (t) {
              return e(t, r, n)
            })
        }
      }
      function d(e, t) {
        var r = t.prototype._init
        t.prototype._init = function () {
          var t = this,
            r = Object.getOwnPropertyNames(e)
          if (e.$options.props)
            for (var n in e.$options.props) e.hasOwnProperty(n) || r.push(n)
          r.forEach(function (r) {
            Object.defineProperty(t, r, {
              get: function () {
                return e[r]
              },
              set: function (t) {
                e[r] = t
              },
              configurable: !0
            })
          })
        }
        var n = new t()
        t.prototype._init = r
        var o = {}
        return (
          Object.keys(n).forEach(function (e) {
            void 0 !== n[e] && (o[e] = n[e])
          }),
          o
        )
      }
      var y = [
        'data',
        'beforeCreate',
        'created',
        'beforeMount',
        'mounted',
        'beforeDestroy',
        'destroyed',
        'beforeUpdate',
        'updated',
        'activated',
        'deactivated',
        'render',
        'errorCaptured',
        'serverPrefetch'
      ]
      function h(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        t.name = t.name || e._componentTag || e.name
        var r = e.prototype
        Object.getOwnPropertyNames(r).forEach(function (e) {
          if ('constructor' !== e)
            if (y.indexOf(e) > -1) t[e] = r[e]
            else {
              var n = Object.getOwnPropertyDescriptor(r, e)
              void 0 !== n.value
                ? 'function' == typeof n.value
                  ? ((t.methods || (t.methods = {}))[e] = n.value)
                  : (t.mixins || (t.mixins = [])).push({
                      data: function () {
                        return c({}, e, n.value)
                      }
                    })
                : (n.get || n.set) &&
                  ((t.computed || (t.computed = {}))[e] = {
                    get: n.get,
                    set: n.set
                  })
            }
        }),
          (t.mixins || (t.mixins = [])).push({
            data: function () {
              return d(this, e)
            }
          })
        var n = e.__decorators__
        n &&
          (n.forEach(function (e) {
            return e(t)
          }),
          delete e.__decorators__)
        var i = Object.getPrototypeOf(e.prototype),
          a = i instanceof o.a ? i.constructor : o.a,
          f = a.extend(t)
        return b(f, e, a), u() && s(f, e), f
      }
      var v = { prototype: !0, arguments: !0, callee: !0, caller: !0 }
      function b(e, t, r) {
        Object.getOwnPropertyNames(t).forEach(function (n) {
          if (!v[n]) {
            var o = Object.getOwnPropertyDescriptor(e, n)
            if (!o || o.configurable) {
              var c,
                a,
                u = Object.getOwnPropertyDescriptor(t, n)
              if (!p) {
                if ('cid' === n) return
                var s = Object.getOwnPropertyDescriptor(r, n)
                if (
                  ((c = u.value),
                  (a = i(c)),
                  null != c &&
                    ('object' === a || 'function' === a) &&
                    s &&
                    s.value === u.value)
                )
                  return
              }
              0, Object.defineProperty(e, n, u)
            }
          }
        })
      }
      function A(e) {
        return 'function' == typeof e
          ? h(e)
          : function (t) {
              return h(t, e)
            }
      }
      A.registerHooks = function (e) {
        y.push.apply(y, a(e))
      }
      var m = A
      var g = 'undefined' != typeof Reflect && void 0 !== Reflect.getMetadata
      function _(e, t, r) {
        if (
          g &&
          !Array.isArray(e) &&
          'function' != typeof e &&
          !e.hasOwnProperty('type') &&
          void 0 === e.type
        ) {
          var n = Reflect.getMetadata('design:type', t, r)
          n !== Object && (e.type = n)
        }
      }
      function O(e) {
        return (
          void 0 === e && (e = {}),
          function (t, r) {
            _(e, t, r),
              l(function (t, r) {
                ;(t.props || (t.props = {}))[r] = e
              })(t, r)
          }
        )
      }
      function w(e, t) {
        return (
          void 0 === t && (t = {}),
          function (r, n) {
            _(t, r, n),
              l(function (r, n) {
                ;((r.props || (r.props = {}))[e] = t),
                  ((r.computed || (r.computed = {}))[n] = {
                    get: function () {
                      return this[e]
                    },
                    set: function (t) {
                      this.$emit('update:' + e, t)
                    }
                  })
              })(r, n)
          }
        )
      }
      function C(e, t) {
        void 0 === t && (t = {})
        var r = t.deep,
          n = void 0 !== r && r,
          o = t.immediate,
          i = void 0 !== o && o
        return l(function (t, r) {
          'object' != typeof t.watch && (t.watch = Object.create(null))
          var o = t.watch
          'object' != typeof o[e] || Array.isArray(o[e])
            ? void 0 === o[e] && (o[e] = [])
            : (o[e] = [o[e]]),
            o[e].push({ handler: r, deep: n, immediate: i })
        })
      }
    },
    132: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEUAAACXqbeXp7uZqriYqbiZq7igor+Zqbj///+Zp7iYqbiXp7eYq7mXqbaYqbeZq7iYq7dJogO5AAAAEXRSTlMAgBA1XU4IegEnbiBtYnlwUgGxiX4AAACrSURBVCjPjZLtEsQQDEUJCVr9eP+n3dtZxNhpZs+v6plcQVyDQqwp1RjIrRD7AS+6JD+RyuyCBwgUQbgHYarDctv7at+wHLWEzEPcQA4k930ZdXCTRS23QqS0zJGMX9S7iW4htp70Q9GC+kQofavqHtCrrFLQrymt2MtsyDyKeQnG9d3GxZ9kPFnMr48NOL+MyRnVrgN2U2a102he39FU+8N/tjjDQr7ZUvIHH2sEm41VSKcAAAAASUVORK5CYII='
    },
    133: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEWYqbYAAACZqruho72aqLmZrbiYqrWbqraWp7Saq7mZprkKiy4tAAAAC3RSTlNNAB4JLRVFQj06KJdZ/GQAAACuSURBVCjPZZJNDgFBEIU/gsFKT5OIFUfoRKyJlR03kLjAHIEbWDgAN1VTbRh5L+lK9ZfXf1VNqDU7VMXj5KmDNa59AxZ89MogXhswTA42fHWpQTz/wCAZmNPSzcCzDcaByJ8SU4v9EtPqaGHHxGInLKEbPMWw5aUZjJqZLfjEIfS4ky3ZwIiKbMkGChvZYgaXAFkim8qxcjG5ujxOni8FkhJKkaUN0ihppTRbvsMbs40b5cy5PB8AAAAASUVORK5CYII='
    },
    139: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          {
            staticClass: 'plat-m-search-bar',
            class: {
              'plat-m-search-bar__clicked': e.isSearchClick || e.keywordCopy
            },
            on: { click: e.handleSearchClick }
          },
          [
            n(
              'div',
              {
                staticClass: 'search-bar-wrap',
                class: {
                  'search-bar-wrap__clicked': e.isSearchClick || e.keywordCopy
                }
              },
              [
                n('img', {
                  staticClass: 'icon-search pointer',
                  attrs: { src: r(132), alt: '' },
                  on: {
                    click: function (t) {
                      return (
                        t.stopPropagation(), e.search.apply(null, arguments)
                      )
                    }
                  }
                }),
                e._v(' '),
                e.isSearchClick || e.keywordCopy
                  ? e._e()
                  : [
                      n('div', { staticClass: 'search-placeholder' }, [
                        e._v('输入关键词进行搜索')
                      ])
                    ],
                e._v(' '),
                e.isSearchClick || e.keywordCopy
                  ? [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.keywordCopy,
                            expression: 'keywordCopy'
                          }
                        ],
                        ref: 'searchInput',
                        staticClass: 'search-input',
                        attrs: { type: 'text' },
                        domProps: { value: e.keywordCopy },
                        on: {
                          blur: e.handleSearchBlur,
                          keyup: function (t) {
                            return !t.type.indexOf('key') &&
                              e._k(t.keyCode, 'enter', 13, t.key, 'Enter')
                              ? null
                              : e.search.apply(null, arguments)
                          },
                          input: function (t) {
                            t.target.composing ||
                              (e.keywordCopy = t.target.value)
                          }
                        }
                      }),
                      e._v(' '),
                      e.showIcon
                        ? n('img', {
                            staticClass: 'icon-reset pointer',
                            attrs: { src: r(133), alt: '' },
                            on: {
                              click: function (t) {
                                return (
                                  t.stopPropagation(),
                                  e.handleResetClick.apply(null, arguments)
                                )
                              }
                            }
                          })
                        : n('div', { staticClass: 'icon-reset' })
                    ]
                  : e._e()
              ],
              2
            )
          ]
        )
      }
      n._withStripped = !0
      var o,
        i = r(1),
        c =
          ((o = function (e, t) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              })(e, t)
          }),
          function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Class extends value ' +
                  String(t) +
                  ' is not a constructor or null'
              )
            function r() {
              this.constructor = e
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()))
          }),
        a = function (e, t, r, n) {
          var o,
            i = arguments.length,
            c =
              i < 3
                ? t
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(t, r))
                : n
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.decorate
          )
            c = Reflect.decorate(e, t, r, n)
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) &&
                (c = (i < 3 ? o(c) : i > 3 ? o(t, r, c) : o(t, r)) || c)
          return i > 3 && c && Object.defineProperty(t, r, c), c
        },
        u = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this
            return (
              (t.isSearchClick = !1), (t.keyword = ''), (t.showIcon = !1), t
            )
          }
          return (
            c(t, e),
            (t.prototype.handleSearchClick = function () {
              var e = this
              ;(this.isSearchClick = !0),
                this.$nextTick(function () {
                  e.$refs.searchInput.focus()
                })
            }),
            (t.prototype.handleSearchBlur = function () {
              this.isSearchClick = !1
            }),
            (t.prototype.handleResetClick = function () {
              ;(this.keyword = ''), (this.isSearchClick = !1)
            }),
            (t.prototype.search = function () {
              this.$emit('on-search')
            }),
            (t.prototype.changeSuffix = function (e) {
              var t = this
              this.iconTimer && clearTimeout(this.iconTimer),
                !1 === e &&
                  (this.iconTimer = setTimeout(function () {
                    t.showIcon = !1
                  }, 150)),
                e && (this.showIcon = !0)
            }),
            a(
              [Object(i.c)('keyword', { required: !0 })],
              t.prototype,
              'keywordCopy',
              void 0
            ),
            a(
              [Object(i.e)('isSearchClick')],
              t.prototype,
              'changeSuffix',
              null
            ),
            (t = a([Object(i.a)({ name: 'PlatMSearchBar' })], t))
          )
        })(i.d),
        s = r(2),
        f = Object(s.a)(u, n, [], !1, null, null, null)
      f.options.__file = 'src/packages/m-search-bar/m-search-bar.vue'
      var p = f.exports
      p.install = function (e) {
        e.component(p.name, p)
      }
      t.default = p
    },
    2: function (e, t, r) {
      'use strict'
      function n(e, t, r, n, o, i, c, a) {
        var u,
          s = 'function' == typeof e ? e.options : e
        if (
          (t && ((s.render = t), (s.staticRenderFns = r), (s._compiled = !0)),
          n && (s.functional = !0),
          i && (s._scopeId = 'data-v-' + i),
          c
            ? ((u = function (e) {
                ;(e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  o && o.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(c)
              }),
              (s._ssrRegister = u))
            : o &&
              (u = a
                ? function () {
                    o.call(
                      this,
                      (s.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    )
                  }
                : o),
          u)
        )
          if (s.functional) {
            s._injectStyles = u
            var f = s.render
            s.render = function (e, t) {
              return u.call(t), f(e, t)
            }
          } else {
            var p = s.beforeCreate
            s.beforeCreate = p ? [].concat(p, u) : [u]
          }
        return { exports: e, options: s }
      }
      r.d(t, 'a', function () {
        return n
      })
    }
  })
})
