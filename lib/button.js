!(function (t, e) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = e()
  else if ('function' == typeof define && define.amd) define([], e)
  else {
    var n = e()
    for (var o in n) ('object' == typeof exports ? exports : t)[o] = n[o]
  }
})(window, function () {
  return (function (t) {
    var e = {}
    function n(o) {
      if (e[o]) return e[o].exports
      var r = (e[o] = { i: o, l: !1, exports: {} })
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var o = Object.create(null)
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var r in t)
            n.d(
              o,
              r,
              function (e) {
                return t[e]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default
              }
            : function () {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = '/lib/'),
      n((n.s = 137))
    )
  })({
    137: function (t, e, n) {
      'use strict'
      n.r(e)
      var o = function () {
        var t,
          e = this.$createElement
        return (this._self._c || e)(
          'button',
          {
            staticClass: 'plat-button',
            class: ((t = {}), (t['plat-button-' + this.type] = !0), t),
            attrs: { type: 'button' },
            on: { click: this.handleClick }
          },
          [this._t('default')],
          2
        )
      }
      o._withStripped = !0
      var r = {
          name: 'PlatButton',
          props: {
            type: {
              validator: function (t) {
                return [
                  'default',
                  'primary',
                  'info',
                  'success',
                  'warning',
                  'error'
                ].includes(t)
              },
              type: String,
              default: 'default'
            }
          },
          mounted: function () {
            var t = this.$el
            t.onclick = function (e) {
              var n = document.createElement('span'),
                o = e.clientX - t.getBoundingClientRect().x - 10,
                r = e.clientY - t.getBoundingClientRect().y - 10
              ;(n.style.left = o + 'px'),
                (n.style.top = r + 'px'),
                n.classList.add('ripple-ball'),
                t.appendChild(n),
                n.addEventListener('animationend', function () {
                  t.removeChild(n)
                })
            }
          },
          methods: {
            handleClick: function (t) {
              this.$emit('click', t)
            }
          }
        },
        i = n(2),
        u = Object(i.a)(r, o, [], !1, null, null, null)
      u.options.__file = 'src/packages/button/button.vue'
      var l = u.exports
      l.install = function (t) {
        t.component(l.name, l)
      }
      e.default = l
    },
    2: function (t, e, n) {
      'use strict'
      function o(t, e, n, o, r, i, u, l) {
        var a,
          s = 'function' == typeof t ? t.options : t
        if (
          (e && ((s.render = e), (s.staticRenderFns = n), (s._compiled = !0)),
          o && (s.functional = !0),
          i && (s._scopeId = 'data-v-' + i),
          u
            ? ((a = function (t) {
                ;(t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(u)
              }),
              (s._ssrRegister = a))
            : r &&
              (a = l
                ? function () {
                    r.call(
                      this,
                      (s.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    )
                  }
                : r),
          a)
        )
          if (s.functional) {
            s._injectStyles = a
            var c = s.render
            s.render = function (t, e) {
              return a.call(e), c(t, e)
            }
          } else {
            var f = s.beforeCreate
            s.beforeCreate = f ? [].concat(f, a) : [a]
          }
        return { exports: t, options: s }
      }
      n.d(e, 'a', function () {
        return o
      })
    }
  })
})
