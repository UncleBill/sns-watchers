;(window.webpackJsonp = window.webpackJsonp || []).push([
  [213],
  {
    RfPh: function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        o = r('ezF+'),
        i = r('ERkP'),
        a = r('VPAj'),
        l = r('RoyM'),
        s = r('ddV6'),
        u = r.n(s),
        p = (r('hBvt'), r('z84I'), r('7xRU'), r('v6aA')),
        y = r('caTy'),
        f = r('rcen'),
        b = r('t62R'),
        m = r('rHpw'),
        O = function (e) {
          var t = e.focused,
            r = e.link,
            n = e.onClick,
            c = e.template.aggregateUserActionsV1.showAllLinkText
          return c && r
            ? i.createElement(
                b.b,
                { link: r, nativeID: t ? 'notification-show-more-text' : void 0, onClick: n, style: g.showMore },
                c,
              )
            : null
        },
        g = m.a.create(function (e) {
          return { showMore: { marginTop: e.spaces.space12 } }
        }),
        d = r('qbku'),
        v = r('SQlS'),
        h = function (e) {
          var t = e.focused,
            r = e.text
          return i.createElement(f.a, {
            alignment: r.alignment,
            color: 'gray700',
            entities: r.entities,
            nativeID: t ? 'notification-additional-context' : void 0,
            rtl: r.rtl,
            text: r.text,
          })
        },
        j = r('MWbm'),
        w = r('cTG8'),
        E = function (e) {
          var t = e.focused,
            r = e.template.aggregateUserActionsV1,
            n = r.additionalContext,
            c = r.targetObjects.filter(function (e) {
              return e.tweet
            }),
            o = c.length ? c[0].tweet : null
          return o
            ? i.createElement(
                j.a,
                { style: P.target },
                (function (e) {
                  var r = e.retweeted_status || e
                  return i.createElement(w.a, {
                    color: 'gray700',
                    displayTextRange: r.display_text_range,
                    entities: r.entities,
                    lang: r.lang,
                    nativeID: t ? 'notification-tweet-text' : void 0,
                    text: r.text,
                    withMediaLinks: !0,
                    withQuoteLinks: !0,
                  })
                })(o),
              )
            : n && n.contextText
            ? i.createElement(j.a, { style: P.target }, i.createElement(h, { focused: t, text: n.contextText }))
            : null
        },
        P = m.a.create(function (e) {
          return { target: { marginTop: e.spaces.space12 } }
        }),
        D = (r('M+/F'), r('jhWN')),
        x = function (e) {
          var t = e.userDecorations,
            r = e.users.slice(0, e.maxItems).filter(function (e) {
              return !!e
            })
          return i.createElement(
            j.a,
            { style: [_.root, 'center' === e.align && _.rootCenter, e.style] },
            r.map(function (r, n) {
              return i.createElement(D.a, {
                accessibilityHidden: !0,
                decoration: t && t[n],
                key: n,
                screenName: r.screen_name,
                size: 'large',
                style: [_.item, 0 === n && 'left' === e.align && _.itemLeftFirst],
                uri: r.profile_image_url_https,
                withHoverCard: !0,
                withLink: !0,
              })
            }),
          )
        }
      x.defaultProps = { align: 'left', maxItems: 10 }
      var _ = m.a.create(function (e) {
          return {
            root: { flexWrap: 'wrap', flexDirection: 'row', overflow: 'hidden', height: e.spaces.space32 },
            rootCenter: { justifyContent: 'center' },
            item: { marginHorizontal: e.spaces.space4 },
            itemLeftFirst: { marginLeft: 0 },
          }
        }),
        k = x,
        C = r('de1q'),
        z = r('PbQQ'),
        M = r('htQn'),
        B = r('5mJL'),
        H = r('xrkw'),
        S = r('RLww'),
        F = r('2qZs'),
        A = r('cOhU'),
        L = r('GCOQ'),
        R = r('uCrx'),
        I = r('Lsrn'),
        V = r('k/Ka')
      function T(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var G = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          U(
            U({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M23 17.482c0 .549-.45.998-1 .998h-2.34v2.397c0 .549-.45.998-1 .998s-1-.449-1-.998V18.48h-2.34c-.56 0-1-.449-1-.998 0-.559.44-.998 1-.998h2.34v-2.406c0-.549.45-.998 1-.998s1 .449 1 .998v2.406H22c.55-.001 1 .439 1 .998z',
            }),
            i.createElement('path', {
              d: 'M21.01 7.507c0 1.498-.41 2.995-1.07 4.433-.37-.23-.81-.36-1.28-.36-1.38 0-2.5 1.118-2.5 2.496v.909h-.84c-1.38 0-2.5 1.108-2.5 2.496 0 .799.38 1.508.96 1.957-1.17.879-2.18 1.398-2.78 1.408-2.17-.04-10-6.82-10-13.34C1 4.74 3.24 2.124 6.01 2.124c3.08 0 4.75 3.105 4.99 3.455.24-.35 1.94-3.455 5-3.455 2.77.001 5.01 2.617 5.01 5.383z',
            }),
          ),
        )
      }
      G.metadata = { width: 24, height: 24 }
      var N = G,
        K = r('wpLu'),
        Q = r('GcQN'),
        W = r('a5gf'),
        Z = r('YI7k')
      function q(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var X = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          J(
            J({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M8.18 5.317c-.067.067-.118.148-.16.236l-.006-.005-6.722 15.145.006.006c-.125.24.084.732.51 1.16.428.427.92.636 1.16.51l.007.007 15.145-6.722-.005-.005c.088-.042.17-.093.237-.16.937-.937-.582-3.973-3.39-6.782-2.81-2.81-5.845-4.328-6.782-3.39z',
              fill: '#E0245E',
            }),
            i.createElement('path', {
              d: 'M15.005 8.66c2.8 2.8 4.353 5.785 3.47 6.668-.883.883-3.868-.67-6.67-3.47-2.8-2.8-4.352-5.786-3.47-6.67.884-.882 3.87.672 6.67 3.472z',
              fill: '#A01744',
            }),
            i.createElement('path', {
              d: 'M15.186 12.756c-.176 0-.35-.077-.47-.225-.206-.258-.164-.635.095-.842.132-.105 3.25-2.553 7.653-1.923.328.047.556.35.51.678-.048.328-.35.557-.68.508-3.89-.552-6.705 1.652-6.732 1.674-.11.09-.243.132-.374.132z',
              fill: '#FFAD1F',
            }),
            i.createElement('path', {
              d: 'M20.177 14.654c1.182-.334 1.998.194 2.193.886.194.692-.227 1.568-1.408 1.9-.46.13-.6.35-.58.42.02.07.254.187.714.057 1.182-.332 1.998.195 2.192.887.196.692-.227 1.567-1.41 1.9-.46.13-.6.35-.58.42.02.07.254.187.716.058.318-.09.65.096.74.414.088.32-.098.65-.417.74-1.18.332-1.998-.194-2.193-.887-.194-.693.227-1.567 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.188-.714-.058-1.183.333-1.998-.193-2.193-.886-.195-.692.227-1.566 1.41-1.9.46-.13.6-.35.58-.42-.02-.07-.253-.187-.715-.057-.32.09-.65-.097-.74-.415-.09-.32.096-.652.415-.74zM3.864 10.42c-.057 0-.115-.01-.173-.026-.316-.096-.496-.43-.4-.747.68-2.262 1.295-5.87.54-6.812-.087-.106-.214-.21-.507-.19-.563.044-.51 1.23-.508 1.242.025.33-.223.618-.553.643-.335.02-.618-.223-.642-.553-.062-.827.195-2.42 1.613-2.526.633-.047 1.16.173 1.53.635 1.42 1.77-.02 6.897-.325 7.907-.078.26-.317.427-.574.427z',
              fill: '#794BC4',
            }),
            i.createElement('circle', { cx: '1.826', cy: '12.857', fill: '#FFAD1F', r: '1.076' }),
            i.createElement('circle', { cx: '17.702', cy: '6.814', fill: '#E0245E', r: '.899' }),
            i.createElement('circle', { cx: '15.628', cy: '20.377', fill: '#DF235F', r: '1.064' }),
            i.createElement('circle', { cx: '21.878', cy: '5.9', fill: '#FFAD1F', r: '1.004' }),
            i.createElement('circle', { cx: '18.458', cy: '2.733', fill: '#E0245E', r: '1.199' }),
            i.createElement('path', {
              d: 'M12.313 8.463c-.12.096-.275.147-.44.13-.52-.057-.958-.238-1.264-.524-.325-.304-.485-.71-.442-1.117.077-.714.794-1.37 2.016-1.238.476.05.688-.102.695-.175.007-.073-.167-.268-.642-.32-.52-.055-.958-.236-1.265-.522-.324-.303-.485-.71-.44-1.116.078-.715.794-1.37 2.015-1.238.347.037.53-.034.606-.08.062-.04.087-.075.09-.096.006-.072-.166-.267-.643-.32-.328-.035-.567-.33-.53-.66.035-.328.33-.566.66-.53 1.22.13 1.782.924 1.705 1.64-.077.714-.794 1.37-2.016 1.237-.347-.038-.53.034-.607.08-.06.037-.087.074-.09.094-.007.072.167.267.643.318 1.22.132 1.782.925 1.705 1.64-.076.715-.793 1.37-2.014 1.238-.347-.037-.53.035-.606.08-.062.04-.086.075-.088.096-.008.073.166.267.642.32.33.035.568.33.53.66-.02.163-.102.304-.22.4z',
              fill: '#FFAD1F',
            }),
          ),
        )
      }
      X.metadata = { width: 24, height: 24 }
      var Y = X,
        $ = r('6ZHn'),
        ee = r('AtEG')
      function te(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? te(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : te(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ne = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          re(
            re({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M20.222 10.66H3.5v-1.5h13.64c.152 0 .277-.124.277-.277V6.57c0-.153-.125-.277-.278-.277H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-2.934h10.556c.153 0 .278-.124.278-.277v-2.313c0-.153-.125-.278-.278-.278H3.5v-1.5h16.722c.153 0 .278-.125.278-.278v-2.31c0-.155-.125-.28-.278-.28z',
            }),
          ),
        )
      }
      ne.metadata = { width: 24, height: 24 }
      var ce = ne,
        oe = r('yVEN')
      function ie(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ie(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ie(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var le = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          ae(
            ae({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z',
              fill: '#794BC4',
            }),
          ),
        )
      }
      le.metadata = { width: 24, height: 24 }
      var se = le
      function ue(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ue(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ue(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ye = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          pe(
            pe({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M12 1.75c-.138 0-.276.038-.398.114-.044.028-4.515 2.8-9.21 3.494-.362.053-.632.358-.642.723-.003.118-.188 11.742 9.938 16.353.1.045.206.067.312.067V1.75z',
              fill: '#1DA1F2',
            }),
            i.createElement('path', {
              d: 'M12 1.75c.138 0 .276.038.398.114.044.028 4.515 2.8 9.21 3.494.362.053.632.358.64.723.004.118.19 11.742-9.937 16.353-.098.045-.204.067-.31.067V1.75z',
              fill: '#78C6EE',
            }),
          ),
        )
      }
      ye.metadata = { width: 24, height: 24 }
      var fe = ye,
        be = r('EHV7'),
        me = r('lUZE'),
        Oe = r('Hp3u')
      function ge(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ge(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ge(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ve = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          de(
            de({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M21.6 3.18C15.59-.06 8.4-.06 2.39 3.18c-.24.13-.39.39-.39.65v8.56c0 8.54 9.73 10.82 9.83 10.84.05.02.11.02.17.02.05 0 .11 0 .16-.02.1-.02 9.84-2.3 9.84-10.84V3.83c0-.26-.16-.52-.4-.65zM16.67 13.8c-.65.66-1.55 1.06-2.55 1.06H9.87c-2 0-3.61-1.62-3.61-3.6 0-.99.4-1.9 1.05-2.55.66-.64 1.56-1.05 2.56-1.05h4.25c2 0 3.61 1.61 3.61 3.6 0 .99-.4 1.89-1.06 2.54z',
            }),
            i.createElement('path', {
              d: 'M12.08 11.26c0 1.21-.98 2.2-2.2 2.2-1.21 0-2.2-.99-2.2-2.2 0-1.22.99-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2z',
            }),
          ),
        )
      }
      ve.metadata = { width: 24, height: 24 }
      var he = ve
      function je(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? je(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : je(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Ee = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          we(
            we({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z',
              fill: '#F4212E',
            }),
            i.createElement('path', {
              d: 'M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
              fill: '#FFF',
            }),
          ),
        )
      }
      Ee.metadata = { width: 24, height: 24 }
      var Pe = Ee
      function De(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : De(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var _e = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          xe(
            xe({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              fill: '#FFAD1F',
            }),
            i.createElement('path', {
              d: 'M12 16.3c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm0-10.6c-2.3 0-4.2 1.9-4.2 4.2 0 .4.3.8.8.8s.8-.3.8-.8c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-.4 0-.8.3-.8.8v1.1c0 .4.3.8.8.8s.8-.3.8-.8v-.4c2-.4 3.4-2.1 3.4-4.1-.2-2.4-2-4.3-4.3-4.3z',
              fill: '#14171A',
            }),
          ),
        )
      }
      _e.metadata = { width: 24, height: 24 }
      var ke = _e,
        Ce = r('EyD/'),
        ze = r('0weh')
      function Me(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Me(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Me(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var He = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(V.a)(
          'svg',
          Be(
            Be({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [I.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M12 22.75c-1.484 0-2.827-.753-3.636-2-.295.062-.6.095-.91.095-2.417 0-4.385-2.045-4.385-4.56v-.11c-1.133-.852-1.82-2.228-1.82-3.697 0-1.538.723-2.935 1.92-3.776-.067-.323-.102-.653-.102-.987 0-2.514 1.968-4.56 4.386-4.56.312 0 .616.033.91.097.81-1.25 2.152-2.002 3.636-2.002 1.46 0 2.826.77 3.634 2.002.294-.063.6-.096.912-.096 2.418 0 4.386 2.045 4.386 4.56 0 .333-.034.663-.102.985 1.198.843 1.92 2.24 1.92 3.777 0 1.468-.687 2.844-1.82 3.696v.112c0 2.514-1.967 4.56-4.385 4.56-.31 0-.616-.033-.91-.098-.81 1.234-2.175 2.003-3.635 2.003zm-3.273-3.642c.284 0 .553.162.68.434.49 1.054 1.484 1.708 2.593 1.708 1.11 0 2.104-.654 2.593-1.707.167-.36.583-.528.954-.383.312.122.648.185 1 .185 1.59 0 2.885-1.372 2.885-3.06 0-.136-.01-.268-.027-.4-.036-.294.106-.582.362-.733.915-.543 1.483-1.567 1.483-2.674 0-1.17-.642-2.255-1.636-2.762-.335-.17-.492-.563-.366-.918.122-.345.184-.71.184-1.083 0-1.687-1.295-3.06-2.886-3.06-.353 0-.688.063-.996.186-.368.148-.79-.02-.957-.38-.49-1.055-1.483-1.71-2.593-1.71-1.11 0-2.103.655-2.593 1.71-.168.36-.587.53-.958.38-.308-.122-.642-.184-.995-.184-1.59 0-2.886 1.372-2.886 3.06 0 .372.06.737.183 1.082.125.354-.03.747-.366.918-.994.508-1.636 1.592-1.636 2.762 0 1.107.57 2.132 1.482 2.673.255.152.397.44.362.734-.016.133-.025.266-.025.402 0 1.687 1.294 3.06 2.885 3.06.35 0 .687-.063.998-.186.09-.035.182-.052.274-.052z',
            }),
            i.createElement('path', {
              d: 'M15.416 8.376c-.345-.23-.81-.137-1.04.208l-3.493 5.24L9.3 12.24c-.292-.293-.767-.293-1.06 0s-.293.768 0 1.06l2.23 2.23.113.094c.128.085.272.126.416.126.24 0 .48-.117.624-.334l4-6c.23-.345.137-.81-.208-1.04z',
            }),
          ),
        )
      }
      He.metadata = { width: 24, height: 24 }
      var Se = He,
        Fe = r('A7Fw'),
        Ae = 'notification-message-text',
        Le = 'notification-tweet-text',
        Re = 'notification-show-more-text',
        Ie = 'notification-additional-context',
        Ve = m.a.create(function (e) {
          return {
            root: {
              cursor: 'pointer',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            isTweet: { padding: 0 },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            itemIcon: { alignItems: 'flex-end' },
            itemContent: { flexGrow: 1 },
            curationControl: {
              position: 'absolute',
              top: e.componentDimensions.gutterVertical,
              right: e.componentDimensions.gutterHorizontal,
            },
            curationPadding: { paddingRight: e.spaces.space20 },
            icon: { height: '2em' },
            colorDeepGray: { color: e.colors.gray700 },
            colorRed: { color: e.colors.magenta500 },
            socialContext: { marginBottom: e.spaces.space4 },
            twitterIcon: { color: e.colors.brandColor },
            colorBlue: { color: e.colors.blue500 },
            colorGreen: { color: e.colors.green500 },
            colorOrange: { color: e.colors.orange500 },
            colorPrimary: { color: e.colors.primary },
            colorPlum: { color: e.colors.plum500 },
            colorPurple: { color: e.colors.purple500 },
            userAvatarList: { marginBottom: e.spaces.space12, paddingRight: e.spaces.space20 },
            timelineRowText: { justifyContent: 'center' },
            avatarDecoration: { width: '1.2em', height: '1.2em', position: 'absolute', top: '1em', right: 0 },
          }
        }),
        Te = i.createElement(H.a, { style: [Ve.colorPurple, Ve.icon] }),
        Ue = i.createElement(S.a, { style: [Ve.colorBlue, Ve.icon] }),
        Ge = i.createElement(F.a, { style: [Ve.colorBlue, Ve.icon] }),
        Ne = i.createElement(A.a, { style: [Ve.colorBlue, Ve.icon] }),
        Ke = i.createElement(L.a, { style: [Ve.colorRed, Ve.icon] }),
        Qe = i.createElement(R.a, { style: [Ve.colorRed, Ve.icon] }),
        We = i.createElement(N, { style: [Ve.colorRed, Ve.icon] }),
        Ze = i.createElement(K.a, { style: [Ve.colorDeepGray, Ve.icon] }),
        qe = i.createElement(Q.a, { style: [Ve.colorBlue, Ve.icon] }),
        Je = i.createElement(W.a, { style: [Ve.colorDeepGray, Ve.icon] }),
        Xe = i.createElement(Z.a, { style: [Ve.colorDeepGray, Ve.icon] }),
        Ye = i.createElement(Y, { style: Ve.icon }),
        $e = i.createElement($.a, { style: [Ve.colorBlue, Ve.icon] }),
        et = i.createElement(ee.a, { style: [Ve.colorBlue, Ve.icon] }),
        tt = i.createElement(ce, { style: [Ve.colorDeepGray, Ve.icon] }),
        rt = i.createElement(oe.a, { style: [Ve.colorGreen, Ve.icon] }),
        nt = i.createElement(se, { style: Ve.icon }),
        ct = i.createElement(fe, { style: Ve.icon }),
        ot = i.createElement(v.a, { style: Ve.icon }),
        it = i.createElement(be.a, { style: [Ve.colorPrimary, Ve.icon] }),
        at = i.createElement(me.a, { style: [Ve.twitterIcon, Ve.icon] }),
        lt = i.createElement(Oe.a, { style: [Ve.colorOrange, Ve.icon] }),
        st = i.createElement(he, { style: [Ve.colorOrange, Ve.icon] }),
        ut = i.createElement(Pe, { style: Ve.icon }),
        pt = i.createElement(ke, { style: Ve.icon }),
        yt = i.createElement(Ce.a, { style: [Ve.colorPlum, Ve.icon] }),
        ft = i.createElement(ze.a, { style: [Ve.colorRed, Ve.icon] }),
        bt = i.createElement(Se, { style: [Ve.colorBlue, Ve.icon] }),
        mt = i.createElement(Fe.a, { style: [Ve.colorBlue, Ve.icon] }),
        Ot = {
          alert_bell_icon: Ue,
          bar_chart_icon: Te,
          bell_icon: Ue,
          birdwatch_icon: Ge,
          bird_icon: at,
          communities_icon: Ne,
          conversation_bubble_icon: lt,
          heart_icon: Qe,
          heart_plus_icon: We,
          histogram_icon: tt,
          lightning_bolt_icon: qe,
          list_icon: Ze,
          lock_icon: Je,
          magic_rec_icon: at,
          milestone_icon: Ye,
          news_icon: Xe,
          person_icon: $e,
          play_icon: et,
          reply_icon: lt,
          report_icon: Ke,
          recommendation_icon: nt,
          retweet_icon: rt,
          safety_icon: ct,
          security_alert_icon: ut,
          security_unknown_icon: pt,
          shield_icon: st,
          spaces_icon: ot,
          stacked_cards_icon: at,
          super_follows_icon: yt,
          super_follows_error_icon: ft,
          topic_icon: it,
          trending_icon: at,
          verified_general_icon: bt,
          verified_notable_icon: mt,
        },
        gt = function (e) {
          var t = e.curationControl,
            r = e.isUnread,
            n = e.link,
            c = e.notification,
            o = c.icon,
            a = c.message,
            l = c.template,
            s = e.onClick,
            b = e.socialContext,
            m = i.useContext(p.a).featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
            g = i.useState(!1),
            v = u()(g, 2),
            h = v[0],
            w = v[1]
          function P() {
            w(!0)
          }
          function D() {
            w(!1)
          }
          var x = l.aggregateUserActionsV1.fromUsers
              .map(function (e) {
                return e.user
              })
              .filter(Boolean),
            _ = l.aggregateUserActionsV1.fromUsers
              .map(function (e) {
                return e.reactionType
              })
              .filter(Boolean),
            H = _.length
              ? _.map(function (e) {
                  return i.createElement(C.a, {
                    legacyHeart: m,
                    reactionType: e,
                    style: Ve.avatarDecoration,
                    withAnimation: !1,
                  })
                })
              : void 0,
            S = t && !x.length && !b,
            F = o && o.id && Ot[o.id] ? Ot[o.id] : at,
            A = n && ('string' == typeof n ? { pathname: n } : n)
          return i.createElement(z.a.Consumer, null, function (e) {
            return i.createElement(
              M.a,
              {
                accessibilityLabelledBy: h ? [Ae, Le, Re, Ie].join(' ') : void 0,
                accessibilityRole: 'article',
                link: A ? e.withAnchorless(A) : void 0,
                onBlur: D,
                onClick: s,
                onFocus: P,
                style: [Ve.root, r && Ve.unread],
              },
              b
                ? i.createElement(d.a, {
                    contextType: b.contextType,
                    link: b.landingUrl ? Object(y.b)(b.landingUrl) : void 0,
                    style: Ve.socialContext,
                    text: b.text,
                  })
                : null,
              i.createElement(
                B.a,
                {
                  avatarCell: F,
                  avatarCellStyle: Ve.itemIcon,
                  cellStyle: [Ve.itemContent, Ve.timelineRowText, S && Ve.curationPadding],
                },
                x.length
                  ? i.createElement(
                      j.a,
                      { style: Ve.userAvatarList },
                      i.createElement(k, { userDecorations: H, users: x }),
                    )
                  : null,
                i.createElement(f.a, {
                  alignment: a.alignment,
                  entities: a.entities,
                  nativeID: h ? Ae : void 0,
                  rtl: a.rtl,
                  text: a.text,
                }),
                i.createElement(E, { focused: h, template: l }),
                i.createElement(O, { focused: h, link: n, template: l }),
              ),
              t ? i.createElement(j.a, { style: Ve.curationControl }, t) : null,
            )
          })
        },
        dt = r('vjRr'),
        vt = r('hqKg'),
        ht = r('NjAB'),
        jt = r('3zvM'),
        wt = r('lMB6'),
        Et = r('kHBp'),
        Pt = r('kw0K'),
        Dt = r('XOJV'),
        xt = r('G6rE'),
        _t = Object(jt.f)({ namespace: 'genericNotifications' })
      _t.selectNotification = Object(vt.createSelector)(
        _t.selectAll,
        Dt.a.selectAll,
        xt.e.selectAll,
        Et.a.selectAll,
        dt.a.selectAll,
        function (e, t) {
          return t
        },
        function (e, t, r, n, c, o) {
          return Object(ht.a)(e[o], Pt.a, { cards: c, tweets: t, users: r, lists: n })
        },
      )
      var kt = wt.a.register(_t),
        Ct = r('zh9S'),
        zt = r('Rp9C')
      function Mt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Bt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Mt(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Mt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Ht = o.g({
        isFocusable: Object(a.a)(!0),
        component: gt,
        bindActions: function (e) {
          e.module
          return { scribe: Ct.c }
        },
        selectData: function (e) {
          var t = e.entry,
            r = e.module
          return {
            notification: function (e) {
              return kt.selectNotification(e, t.content.id)
            },
            isUnread: function (e) {
              return r.selectIsUnread(e, t.entryId)
            },
          }
        },
        onImpression: function (e) {
          var t = e.actions.scribe,
            r = (e.entry, e.scribeData)
          t(Bt(Bt({}, e.scribeNamespace), {}, { action: 'impression' }), r)
        },
        shouldDisplayBorder: Object(a.a)(!0),
        createProps: function (e) {
          var t = e.actions.scribe,
            r = e.data,
            n = r.isUnread,
            c = r.notification,
            o = e.entry,
            a = e.feedbackItems,
            s = (e.module.selectFeedbackActions, e.scribeData),
            u = e.scribeNamespace,
            p = o.content,
            f = p.socialContext,
            b = p.url
          return {
            isUnread: n,
            link: b && Object(y.b)(b),
            notification: c,
            curationControl: i.createElement(l.a, { feedbackItems: a }),
            onClick: function () {
              return t(Bt(Bt({}, u), {}, { action: 'navigate' }), s)
            },
            socialContext: f && f.generalContext,
          }
        },
        getScribeDataItem: function (e) {
          var t = e.itemMetadata.clientEventInfo
          return zt.a.getAllSurfaceDetails(t)
        },
      })
      t.default = Ht
    },
    YI7k: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        c = r.n(n),
        o = r('ERkP'),
        i = r('Lsrn'),
        a = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                c()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(a.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-10.75 5.5H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.75c.414 0 .75.336.75.75s-.336.75-.75.75zm3.25-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H6c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8c.414 0 .75.336.75.75s-.336.75-.75.75zm6.75 10.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h2.5v6.5z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
  },
])
//# sourceMappingURL=WIPED
