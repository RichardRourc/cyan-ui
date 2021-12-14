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
      n((n.s = 138))
    )
  })({
    0: function (t, n) {
      t.exports = e
    },
    138: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n(0),
        r = n.n(o),
        i = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            { staticClass: 'plat-notice' },
            e._l(e.notices, function (t) {
              return n('div', { key: t.id, staticClass: 'plat-notice__main' }, [
                n('div', { staticClass: 'plat-notice__title' }, [
                  e._v(e._s(t.title))
                ]),
                e._v(' '),
                n('div', { staticClass: 'plat-notice__content' }, [
                  e._v(e._s(t.content))
                ])
              ])
            }),
            0
          )
        }
      i._withStripped = !0
      var s = {
          name: 'PlatNotice',
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
        c = n(2),
        u = Object(c.a)(s, i, [], !1, null, null, null)
      u.options.__file = 'src/packages/notice/notice.vue'
      var a,
        f = u.exports
      f.newInstance = function (e) {
        var t = e || {},
          n = new r.a({
            render: function (e) {
              return e(f, { props: t })
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
        ;(a = a || f.newInstance()).add(e)
      }
    },
    2: function (e, t, n) {
      'use strict'
      function o(e, t, n, o, r, i, s, c) {
        var u,
          a = 'function' == typeof e ? e.options : e
        if (
          (t && ((a.render = t), (a.staticRenderFns = n), (a._compiled = !0)),
          o && (a.functional = !0),
          i && (a._scopeId = 'data-v-' + i),
          s
            ? ((u = function (e) {
                ;(e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  r && r.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(s)
              }),
              (a._ssrRegister = u))
            : r &&
              (u = c
                ? function () {
                    r.call(
                      this,
                      (a.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    )
                  }
                : r),
          u)
        )
          if (a.functional) {
            a._injectStyles = u
            var f = a.render
            a.render = function (e, t) {
              return u.call(t), f(e, t)
            }
          } else {
            var d = a.beforeCreate
            a.beforeCreate = d ? [].concat(d, u) : [u]
          }
        return { exports: e, options: a }
      }
      n.d(t, 'a', function () {
        return o
      })
    }
  })
})
