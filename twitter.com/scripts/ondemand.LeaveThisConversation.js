;(window.webpackJsonp = window.webpackJsonp || []).push([
  [220],
  {
    '+NEM': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n.p + 'illustration_unmention_1200w.a6d67a65.png',
        r = n.p + 'illustration_unmention_1800w.62507075.png',
        i = 600,
        o = 175,
        c = {
          image: { url: r, width: 1800, height: 525 },
          customVariants: [
            { uri: n.p + 'illustration_unmention_600w.b146e2e5.png', width: i, height: o },
            { uri: a, width: 1200, height: 350 },
            { uri: r, width: 1800, height: 525 },
          ],
        }
    },
    IpT4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.238 2.257c-.293-.293-.768-.293-1.06 0L2.52 20.917c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.073.53-.22l18.658-18.66c.293-.293.293-.767 0-1.06zM2.986 17.82c.155 0 .312-.048.446-.148.112-.083 2.752-2.104 2.708-7.248-.02-2.16.643-3.98 1.913-5.266 1.093-1.107 2.577-1.72 4.18-1.727 1.325.006 2.562.42 3.578 1.195.137.104.297.153.455.153.227 0 .45-.102.598-.295.25-.33.188-.8-.142-1.052-1.278-.975-2.828-1.493-4.483-1.5h-.003c-2.008.008-3.87.78-5.248 2.173-1.536 1.551-2.368 3.8-2.348 6.332.037 4.33-2.02 5.967-2.103 6.03-.332.247-.4.718-.154 1.05.147.2.374.303.603.303zm16.844-7.382c.002-.246-.003-.487-.017-.723-.024-.414-.387-.74-.792-.706-.413.023-.728.378-.705.79.012.205.017.413.015.624-.024 2.868.785 4.765 1.526 5.896h-8.314c-.414 0-.75.336-.75.75s.336.75.75.75h3.522c-.1 1.48-1.323 2.66-2.828 2.66-1.003 0-1.913-.514-2.436-1.372-.214-.354-.675-.467-1.03-.25-.354.214-.467.675-.25 1.03.795 1.31 2.185 2.09 3.716 2.09 2.332 0 4.227-1.85 4.328-4.158h4.922c.32 0 .604-.206.707-.51.104-.305 0-.643-.255-.84-.087-.066-2.145-1.7-2.108-6.032z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        g = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        f = n.n(g),
        y = n('TIdA'),
        b = n('t62R'),
        E = n('A91F'),
        w = n('/yvb'),
        v = n('rHpw'),
        C = 'inlinePrompt',
        A = 'inlinePrompt-primaryAction',
        k = 'inlinePrompt-secondaryAction',
        x = 'inlinePrompt-centeredImageContainer',
        M = n('MWbm'),
        _ = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderImage', function (e, t) {
                var n = f.a.createElement(y.a, {
                  accessibilityLabel: '',
                  aspectMode: E.a.exact(e.width / e.height),
                  backgroundColor: e.backgroundColor,
                  customVariants: t,
                  image: e,
                })
                return e.isCentered
                  ? f.a.createElement(
                      M.a,
                      { style: L.centeredImage, testID: x },
                      f.a.createElement(
                        M.a,
                        { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                        n,
                      ),
                    )
                  : n
              }),
              h()(l()(e), '_renderTitle', function () {
                var t = e.props.headline
                return t
                  ? f.a.createElement(
                      b.b,
                      {
                        accessibilityRole: 'heading',
                        align: 'left',
                        size: 'title4',
                        style: L.flexGrow,
                        weight: 'bold',
                        withHashflags: !0,
                      },
                      t,
                    )
                  : null
              }),
              h()(l()(e), '_renderBodyText', function () {
                var t = e.props.subtext
                return t
                  ? f.a.createElement(
                      b.b,
                      { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 },
                      t,
                    )
                  : null
              }),
              h()(l()(e), '_renderAction', function (t) {
                var n = t.action,
                  a = t.buttonSize,
                  r = t.buttonType,
                  i = t.style,
                  o = t.testID,
                  c = e.props.secondaryAction,
                  l = n.link,
                  s = n.onClick,
                  u = n.text
                return f.a.createElement(
                  M.a,
                  { style: [e.styles.actionContainer, i, { justifyContent: 'flex-start' }], testID: o },
                  f.a.createElement(
                    w.a,
                    { link: l, onPress: s, size: a, style: { width: c ? '100%' : 'auto' }, type: r },
                    u,
                  ),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.image,
                    n = e.imageVariants,
                    a = e.primaryAction,
                    r = e.rightControl,
                    i = e.secondaryAction,
                    o = e.shouldRenderBorder
                  return f.a.createElement(
                    M.a,
                    { style: o ? [I.root, I.rootMargin] : L.root },
                    f.a.createElement(
                      f.a.Fragment,
                      null,
                      t ? this._renderImage(t, n) : null,
                      f.a.createElement(
                        M.a,
                        { style: this.styles.rootPadding, testID: C },
                        this._renderTitle(),
                        this._renderBodyText(),
                        a
                          ? this._renderAction({
                              action: a,
                              buttonType: 'primaryFilled',
                              style: this.styles.primaryAction,
                              buttonSize: 'large',
                              testID: A,
                            })
                          : null,
                        i
                          ? this._renderAction({
                              action: i,
                              buttonType: 'primaryOutlined',
                              style: this.styles.secondaryAction,
                              buttonSize: 'large',
                              testID: k,
                            })
                          : null,
                      ),
                    ),
                    r ? f.a.createElement(M.a, { style: L.rightControl }, r) : null,
                  )
                },
              },
              {
                key: 'styles',
                get: function () {
                  return this.props.isCompact ? z : P
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      h()(_, 'defaultProps', { shouldRenderBorder: !1 })
      var L = v.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            flexGrow: { flexGrow: 1 },
            centeredImage: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
            rightControl: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              position: 'absolute',
              right: 0,
              top: 0,
            },
          }
        }),
        I = v.a.create(function (e) {
          return {
            root: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
            },
            rootMargin: { marginLeft: e.spaces.space16, marginRight: e.spaces.space16 },
          }
        }),
        P = v.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        z = v.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space16 },
            body: { marginTop: e.spaces.space2 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space4 },
            secondaryAction: { marginTop: e.spaces.space2 },
          }
        })
    },
    REvk: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('uFXj'), n('ERkP')),
        o = n.n(i),
        c = n('RoyM'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('qFUP'),
        d = n('7JQg'),
        m = n('+NEM'),
        p = n('Irs7'),
        h = n('MWbm'),
        g = n('PnKw'),
        f = n('t62R'),
        y = n('rHpw'),
        b = 'leave_this_conversation_inline_education',
        E = s.a.j24c37b2,
        w = s.a.e839db39,
        v = s.a.eba8b1c8,
        C = s.a.i859a9d3,
        A = s.a.ac1daf50,
        k = function (e) {
          var t = e.onClose
          return o.a.createElement(
            d.c,
            { namespace: { element: 'leave_this_conversation_education_sheet' } },
            o.a.createElement(u.a, { actionLabel: E, onAction: t, onClose: t }),
          )
        },
        x = y.a.create(function (e) {
          return {
            footerLearnMoreLink: { whiteSpace: 'nowrap' },
            wrapper: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small },
          }
        })
      t.default = function (e) {
        var t = e.onDismiss,
          n = o.a.useState(!1),
          a = r()(n, 2),
          i = a[0],
          l = a[1],
          s = Object(p.b)()
        o.a.useEffect(
          function () {
            s.scribe({ element: b, action: 'impression' })
          },
          [s],
        )
        var u = [
          {
            text: w,
            onClick: function () {
              s.scribe({ element: b, action: 'dismiss' }), t()
            },
          },
        ]
        return o.a.createElement(
          o.a.Fragment,
          null,
          i &&
            o.a.createElement(k, {
              onClose: function () {
                l(!1)
              },
            }),
          o.a.createElement(
            h.a,
            { style: x.wrapper },
            o.a.createElement(g.a, {
              headline: v,
              image: m.a.image,
              imageVariants: m.a.customVariants,
              rightControl: o.a.createElement(c.a, { feedbackItems: u, isDisplayedOnMedia: !0 }),
              subtext: o.a.createElement(
                o.a.Fragment,
                null,
                A,
                ' ',
                o.a.createElement(
                  f.b,
                  {
                    color: 'text',
                    onClick: function () {
                      l(!0)
                    },
                    size: 'subtext1',
                    style: x.footerLearnMoreLink,
                    weight: 'bold',
                    withInteractiveStyling: !0,
                    withUnderline: !0,
                  },
                  C,
                ),
              ),
            }),
          ),
        )
      }
    },
    RoyM: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        o = Object(i.a)({
          loader: function () {
            return n.e(175).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        l = n('IG7M'),
        s = n('rHpw'),
        u = n('Irs7'),
        d = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          a = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return r.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.a.createElement(o, { actionItems: n, onClose: e })
            },
            style: d.curationControl,
            testID: c.a.caret,
            withDarkBackground: a,
          })
        }
        return null
      })
    },
    cM6C: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        c = n('qFUP'),
        l = n('7JQg'),
        s = o.a.bb16cc75,
        u = o.a.j33c9fc6
      t.default = function (e) {
        var t = e.onCancel,
          n = e.onConfirm
        return r.a.createElement(
          l.c,
          { namespace: { element: 'leave_this_conversation_confirmation_sheet' } },
          r.a.createElement(c.a, {
            actionLabel: s,
            onAction: n,
            onClose: t,
            onSecondaryAction: t,
            secondaryActionLabel: u,
          }),
        )
      }
    },
    qFUP: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        c = n('+NEM'),
        l = n('Irs7'),
        s = n('MWbm'),
        u = n('TIdA'),
        d = n('A91F'),
        m = n('t62R'),
        p = n('feu+'),
        h = n('rHpw'),
        g = n('yiKp'),
        f = n.n(g),
        y = n('Lsrn'),
        b = n('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(b.a)(
            'svg',
            f()(
              f()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [y.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M18.13 20.495c-.04.2-.15.37-.31.48-1.78 1.22-3.58 1.77-5.82 1.77-2.11 0-4.08-.61-5.73-1.67l1.08-1.08c1.36.8 2.95 1.26 4.65 1.26 1.92 0 3.46-.47 4.97-1.51.33-.22.82-.13 1.04.2.11.16.16.36.12.55zm-4.52-13.46l-1.33 1.33c-.05-.01-.11-.01-.16-.01h-.1c-1.6.06-2.92 1.55-3.12 3.39l-1.88 1.88c-.11-.39-.16-.81-.16-1.24 0-3.3 2.07-5.7 4.93-5.7.74 0 1.34.15 1.82.35z',
              }),
              r.a.createElement('path', {
                d: 'M17.73 2.925l-1.09 1.08c-1.36-.79-2.95-1.25-4.64-1.25-5.1 0-9.25 4.15-9.25 9.25 0 1.69.46 3.27 1.26 4.63l-1.09 1.09c-1.05-1.66-1.66-3.62-1.66-5.73 0-5.92 4.82-10.74 10.74-10.74 2.11 0 4.07.61 5.73 1.67zm5.01 9.07c0 4.88-4.35 5.18-4.84 5.18-2.9 0-3.5-1.75-3.5-1.75s-1.32 1.49-3.63 1.49c-.11 0-.21-.01-.32-.02l1.91-1.91c.55-.2 1.04-.6 1.44-1.17h.01c.14-.2.25-.41.36-.63l2.47-2.48c-.25 1.48-.53 3.09-.53 3.09-.33 1.89 1.37 2.11 1.9 2.11 1.42 0 3.24-.99 3.24-3.9 0-1.69-.46-3.28-1.26-4.64l1.09-1.09c1.06 1.66 1.66 3.62 1.66 5.72zm-.99-8.51L3.48 21.745c-.17.17-.39.26-.61.26-.23 0-.45-.09-.62-.26-.34-.34-.34-.89 0-1.23l18.26-18.26c.17-.17.4-.26.62-.26s.45.09.62.26c.34.34.34.89 0 1.23z',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var w = E,
        v = n('pu5c'),
        C = n('IpT4'),
        A = o.a.aed79c53,
        k = o.a.h12044a3,
        x = o.a.f100e566,
        M = o.a.f094f6d6,
        _ = o.a.b00255b5,
        L = o.a.geea29ee,
        I = o.a.c54678e7,
        P = o.a.ga4fa180,
        z = o.a.h8dde771,
        T = o.a.i859a9d3,
        R = function (e) {
          var t = e.style
          return r.a.createElement(
            s.a,
            { style: t },
            r.a.createElement(u.a, {
              accessibilityLabel: '',
              aspectMode: d.a.exact(c.a.image.width / c.a.image.height),
              customVariants: c.a.customVariants,
              image: c.a.image,
            }),
          )
        },
        D = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(m.b, null, k),
            r.a.createElement(
              s.a,
              { style: B.details },
              r.a.createElement(w, { style: B.icon }),
              r.a.createElement(
                s.a,
                null,
                r.a.createElement(m.b, { style: B.title }, x),
                r.a.createElement(m.b, null, M),
              ),
              r.a.createElement(v.a, { style: B.icon }),
              r.a.createElement(
                s.a,
                null,
                r.a.createElement(m.b, { style: B.title }, _),
                r.a.createElement(m.b, null, L),
              ),
              r.a.createElement(C.a, { style: B.icon }),
              r.a.createElement(
                s.a,
                null,
                r.a.createElement(m.b, { style: B.title }, I),
                r.a.createElement(m.b, null, P),
              ),
            ),
          )
        },
        S = function () {
          return r.a.createElement(
            s.a,
            { style: B.footerContainer },
            r.a.createElement(
              m.b,
              { align: 'center' },
              z,
              ' ',
              r.a.createElement(
                m.b,
                {
                  color: 'text',
                  link: 'https://help.twitter.com/using-twitter/mentions-and-replies#mention-control',
                  style: B.footerLearnMoreLink,
                  withUnderline: !0,
                },
                T,
              ),
            ),
          )
        },
        F = function () {
          return r.a.createElement(m.b, { style: B.headline }, A)
        },
        B = h.a.create(function (e) {
          return {
            details: {
              display: 'grid',
              gridTemplateColumns: 'auto auto',
              gridColumnGap: e.spaces.space24,
              gridRowGap: e.spaces.space24,
              paddingTop: e.spaces.space32,
            },
            footerContainer: { display: 'flex', alignItems: 'center' },
            footerLearnMoreLink: { whiteSpace: 'nowrap' },
            headline: { fontSize: e.fontSizes.title2 },
            icon: { color: e.colors.text, width: e.spaces.space24, height: e.spacesPx.space24 },
            image: { width: '100%' },
            title: {
              color: e.colors.text,
              fontSize: e.fontSizes.headline2,
              fontWeight: e.fontWeights.medium,
              paddingBottom: e.spaces.space4,
            },
          }
        })
      t.a = function (e) {
        var t = e.actionLabel,
          n = e.onAction,
          a = e.onClose,
          i = e.onSecondaryAction,
          o = e.secondaryActionLabel,
          c = Object(l.b)()
        r.a.useEffect(
          function () {
            c.scribeAction('impression')
          },
          [c],
        )
        var s = i
            ? function (e) {
                c.scribeAction('secondary_cta'), null == i || i(e)
              }
            : void 0,
          u = a
            ? function () {
                c.scribeAction('close'), a()
              }
            : void 0
        return r.a.createElement(p.a, {
          actionLabel: t,
          footer: r.a.createElement(S, null),
          graphic: R,
          graphicDisplayMode: 'illustrationFullWidth',
          graphicStyle: B.image,
          headline: r.a.createElement(F, null),
          isFullHeightOnMobile: !0,
          onAction: function (e) {
            c.scribeAction('primary_cta'), n(e)
          },
          onClose: u,
          onSecondaryAction: s,
          secondaryActionLabel: o,
          subtext: r.a.createElement(D, null),
          withBottomPadding: !0,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
