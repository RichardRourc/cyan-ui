!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t(require('vue'))
  else if ('function' == typeof define && define.amd) define(['vue'], t)
  else {
    var n = 'object' == typeof exports ? t(require('vue')) : t(e.Vue)
    for (var o in n) ('object' == typeof exports ? exports : e)[o] = n[o]
  }
})(window, function (e) {
  return (function (e) {
    var t = {}
    function n(o) {
      if (t[o]) return t[o].exports
      var r = (t[o] = { i: o, l: !1, exports: {} })
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var o = Object.create(null)
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = '/lib/'),
      n((n.s = 136))
    )
  })({
    0: function (t, n) {
      t.exports = e
    },
    136: function (e, t, n) {
      'use strict'
      n.r(t)
      var o,
        r = n(0),
        i = n.n(r),
        u = {
          data: function () {
            return { notices: [] }
          },
          methods: {
            add: function (e) {
              var t = this,
                n = +new Date()
              ;(e.id = n), this.notices.push(e)
              var o = e.duration
              setTimeout(function () {
                t.remove(n)
              }, 1e3 * o)
            },
            remove: function (e) {
              for (var t = 0; t < this.notices.length; t++)
                if (this.notices[t].id === e) {
                  this.notices.splice(t, 1)
                  break
                }
            }
          }
        },
        s = n(3),
        c = Object(s.a)(
          u,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              'div',
              { staticClass: 'plat-notice' },
              e._l(e.notices, function (t) {
                return n(
                  'div',
                  { key: t.id, staticClass: 'plat-notice__main' },
                  [
                    n('div', { staticClass: 'plat-notice__title' }, [
                      e._v(e._s(t.title))
                    ]),
                    e._v(' '),
                    n('div', { staticClass: 'plat-notice__content' }, [
                      e._v(e._s(t.content))
                    ])
                  ]
                )
              }),
              0
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports
      c.newInstance = function (e) {
        var t = e || {},
          n = new i.a({
            render: function (e) {
              return e(c, { props: t })
            }
          }).$mount()
        document.body.appendChild(n.$el)
        var o = n.$children[0]
        return {
          add: function (e) {
            o.add(e)
          }
        }
      }
      t.default = function (e) {
        ;(o = o || c.newInstance()).add(e)
      }
    },
    3: function (e, t, n) {
      'use strict'
      function o(e, t, n, o, r, i, u, s) {
        var c,
          a = 'function' == typeof e ? e.options : e
        if (
          (t && ((a.render = t), (a.staticRenderFns = n), (a._compiled = !0)),
          o && (a.functional = !0),
          i && (a._scopeId = 'data-v-' + i),
          u
            ? ((c = function (e) {
                ;(e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  r && r.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(u)
              }),
              (a._ssrRegister = c))
            : r &&
              (c = s
                ? function () {
                    r.call(
                      this,
                      (a.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    )
                  }
                : r),
          c)
        )
          if (a.functional) {
            a._injectStyles = c
            var f = a.render
            a.render = function (e, t) {
              return c.call(t), f(e, t)
            }
          } else {
            var d = a.beforeCreate
            a.beforeCreate = d ? [].concat(d, c) : [c]
          }
        return { exports: e, options: a }
      }
      n.d(t, 'a', function () {
        return o
      })
    }
  })
})
//# sourceMappingURL=notice.js.map
