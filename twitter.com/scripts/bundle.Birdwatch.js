;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36, 167],
  {
    '/ZwF': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchTweetNotesScreen', function () {
          return se
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('z84I'), n('uFXj'), n('ERkP')),
        c = n('v6aA'),
        i = n('ZD0R'),
        l = n('vZpt'),
        s = n('L5MV'),
        u = (n('WNMA'), n('KqXw'), n('MvLc')),
        d = n('XOJV'),
        f = n('G6rE'),
        p = n('rxPX'),
        b = n('0KEI'),
        m = function (e, t) {
          return t.match.params.tweetId
        },
        h = function (e, t) {
          var n = m(0, t)
          return n ? d.a.selectHydrated(e, n) : void 0
        },
        y = function (e, t) {
          return u.r(e, m(0, t))
        },
        g = function (e, t) {
          return u.w(e, m(0, t))
        },
        v = function (e, t) {
          return u.v(e, m(0, t))
        },
        w = Object(p.a)()
          .propsFromState(function () {
            return {
              ownNoteData: g,
              fetchStatus: v,
              loggedInUser: f.e.selectLoggedInUser,
              tweet: h,
              tweetId: m,
              notes: y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: u.j,
              fetchTweet: d.a.fetchOneIfNeeded,
              fetchUserAlias: u.k,
            }
          }),
        E = n('kGix'),
        O = n('3XMw'),
        S = n.n(O),
        _ = n('yoO3'),
        C = n('7JQg'),
        j = n('VS6U'),
        T = n('xZXe'),
        x = n('MWbm'),
        A = n('FIs5'),
        I = n('4zmP'),
        P = n('t62R'),
        L = n('htQn'),
        D = n('6vad'),
        R = n('0yYu'),
        B = n('/yvb'),
        N = n('Qwev'),
        M = n('rHpw'),
        k = n('Nh1N'),
        H = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        F = n.n(H),
        z = n('Lsrn'),
        W = n('k/Ka')
      function U(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                F()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var V = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(W.a)(
          'svg',
          K(
            K({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [z.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zM9.145 16.033c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.046c0-.414.336-.75.75-.75s.75.336.75.75v5.046zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.95c0-.415.336-.75.75-.75s.75.335.75.75v9.083zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.56c0-.414.336-.75.75-.75s.75.336.75.75v6.56z',
            }),
          ),
        )
      }
      V.metadata = { width: 24, height: 24 }
      var X = V,
        G = S.a.h8335712,
        q = S.a.fe27c1e1,
        Z = S.a.c59107c3,
        Q = S.a.i859a9d3,
        Y = S.a.ib73f867,
        J = S.a.efd14e79,
        $ = S.a.d06b723c,
        ee = S.a.j0790071,
        te = S.a.j679dcda,
        ne = S.a.d4f03f72,
        ae = S.a.d94e246a,
        re = S.a.d5c203a5,
        oe = S.a.bd3f064b,
        ce = S.a.ia596d40,
        ie = S.a.deff0bdd,
        le = o.createElement(A.a, { buttonLink: '/i/birdwatch/about', buttonText: Q, header: Y }),
        se = function (e) {
          var t = o.useContext(c.a).featureSwitches,
            n = e.createLocalApiErrorHandler,
            a = e.fetchNotes,
            u = e.fetchStatus,
            d = e.fetchTweet,
            f = e.fetchUserAlias,
            p = e.history,
            b = e.loggedInUser,
            m = e.notes,
            h = e.ownNoteData,
            y = e.tweet,
            g = e.tweetId,
            v = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            w =
              t.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
              t.isTrue('responsive_web_birdwatch_rating_crowd_enabled'),
            O = o.useMemo(
              function () {
                return { page: 'birdwatch', section: v ? 'tweet_notes_participant' : 'tweet_notes' }
              },
              [v],
            ),
            S = o.useState(h),
            A = r()(S, 2),
            M = A[0],
            H = A[1],
            F = function (e) {
              H(null)
            }
          o.useEffect(
            function () {
              g && (a(g).catch(n()), d(g).catch(n()))
            },
            [n, a, d, g],
          ),
            o.useEffect(
              function () {
                H(h)
              },
              [h],
            ),
            o.useEffect(
              function () {
                f().catch(n())
              },
              [n, f],
            )
          var z,
            W,
            U,
            K = o.createElement(
              x.a,
              { style: ue.appealsCallout },
              o.createElement(I.a, {
                Icon: k.a,
                action: { label: Q, link: 'https://twitter.github.io/birdwatch/additional-review' },
                headline: re,
                text: oe,
                type: 'primary',
              }),
            ),
            V = o.createElement(
              x.a,
              { style: ue.actionModuleContainer },
              o.createElement(
                x.a,
                { style: ue.actionModule },
                w ? o.createElement(X, { style: ue.icon }) : o.createElement(k.a, { style: ue.icon }),
                o.createElement(P.b, { size: 'headline1', style: ue.header, weight: 'bold' }, w ? $ : ne),
                o.createElement(P.b, { color: 'gray700' }, w ? ee : ae),
                w
                  ? o.createElement(
                      P.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' } },
                      te,
                    )
                  : o.createElement(
                      P.b,
                      { link: { external: !0, pathname: 'https://twitter.github.io/birdwatch/overview' } },
                      Q,
                    ),
              ),
            )
          return o.createElement(
            C.b,
            { namespace: O },
            o.createElement(
              _.a,
              null,
              o.createElement(j.a, {
                TabBar: s.a,
                backLocation: '/i/birdwatch',
                history: p,
                logoButton: o.createElement(o.Fragment, null),
                primaryContent:
                  ((z = M || m.length),
                  (W = '/i/birdwatch/contribute/'.concat(g)),
                  (U =
                    t.isTrue('responsive_web_birdwatch_appeals_enabled') &&
                    (null == b ? void 0 : b.id_str) === (null == y ? void 0 : y.user.id_str)),
                  o.createElement(
                    L.a,
                    null,
                    o.createElement(
                      x.a,
                      { style: ue.contentWrapper },
                      o.createElement(
                        x.a,
                        { style: ue.withBottomBorder },
                        o.createElement(T.b, {
                          displayPromotedContent: !1,
                          tweetId: g,
                          withActions: !0,
                          withActionsDisabled: !0,
                          withBirdwatchPivots: !1,
                          withCurationMenu: !1,
                        }),
                      ),
                      z
                        ? o.createElement(
                            o.Fragment,
                            null,
                            M &&
                              o.createElement(
                                x.a,
                                null,
                                o.createElement(D.b, { text: G }),
                                o.createElement(i.a, { handleDelete: F, isTweetAuthor: U, note: M }),
                              ),
                            !!m.length &&
                              o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(x.a, { style: ue.divider }),
                                o.createElement(D.b, { text: q }),
                                U ? K : V,
                                o.createElement(R.a, null),
                                m.map(function (e) {
                                  return o.createElement(
                                    o.Fragment,
                                    { key: e.rest_id },
                                    o.createElement(i.a, { isTweetAuthor: U, note: e }),
                                    o.createElement(R.a, null),
                                  )
                                }),
                                v && !M
                                  ? o.createElement(
                                      x.a,
                                      { style: ue.actionModuleContainer },
                                      o.createElement(
                                        x.a,
                                        { style: ue.actionModule },
                                        o.createElement(P.b, { style: ue.improveText }, ce),
                                        o.createElement(
                                          B.a,
                                          { accessibilityLabel: ie, link: W, type: 'brandOutlined' },
                                          ie,
                                        ),
                                      ),
                                    )
                                  : null,
                              ),
                          )
                        : u === E.a.LOADING
                        ? o.createElement(N.a, { accessibilityLabel: J, size: 'large', style: ue.spinner })
                        : le,
                    ),
                  )),
                sidebarContent: o.createElement(l.a, null),
                title: Z,
                withTweetButton: !1,
              }),
            ),
          )
        },
        ue = M.a.create(function (e) {
          return {
            actionModule: {
              alignItems: 'center',
              paddingTop: e.spaces.space20,
              paddingBottom: e.spaces.space32,
              textAlign: 'center',
              width: '70%',
            },
            actionModuleContainer: { alignItems: 'center' },
            appealsCallout: { padding: e.spaces.space16, paddingTop: 0 },
            contentWrapper: { backgroundColor: e.colors.cellBackground, paddingBottom: e.spaces.space48 },
            divider: { backgroundColor: e.colors.borderColor, height: e.spaces.space8, marginTop: e.spaces.space4 },
            header: { paddingBottom: e.spaces.space12 },
            icon: {
              color: e.colors.primary,
              height: e.spaces.space48,
              marginBottom: e.spaces.space20,
              width: e.spaces.space48,
            },
            improveText: { paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 },
            spinner: { paddingTop: e.spaces.space20 },
            withBottomBorder: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
            },
          }
        }),
        de = w(se)
      t.default = de
    },
    '0SuV': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchPrinciples', function () {
          return x
        })
      n('MvUL'), n('KqXw'), n('7x/C'), n('lTEL'), n('kYxP')
      var a = n('ERkP'),
        r = (n('WNMA'), n('MvLc')),
        o = n('rxPX'),
        c = n('0KEI'),
        i = function (e, t) {
          return t.match.params.tweetId
        },
        l = function (e, t) {
          return r.w(e, i(0, t))
        },
        s = Object(o.a)()
          .propsFromState(function () {
            return { ownNoteData: l, tweetId: i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchNotes: r.j,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form', component: 'values' }),
        u = n('3XMw'),
        d = n.n(u),
        f = n('5FtR'),
        p = n('aITJ'),
        b = n('MWbm'),
        m = n('t62R'),
        h = n('h0NW'),
        y = n('feu+'),
        g = n('rHpw'),
        v = n('yygM'),
        w = n('QDet'),
        E = n('wz7L'),
        O = d.a.gfa725ae,
        S = d.a.c3d89aca,
        _ = d.a.h7ad677b,
        C = d.a.eac7b6ab,
        j = d.a.b0381cfb,
        T = d.a.f0addddc,
        x = function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.fetchNotes,
            o = e.history,
            c = e.ownNoteData,
            i = e.tweetId,
            l = i ? '/i/birdwatch/'.concat(i, '/contribute_complete') : '/'
          a.useEffect(
            function () {
              i && r(i).catch(n())
            },
            [n, r, i],
          )
          var s = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            u = function (e) {
              return a.createElement(b.a, { style: A.valueItem }, a.createElement(m.b, { color: 'gray700' }, e))
            },
            d = {
              accessibilityLabel: O,
              items: [
                { label: '', decoration: a.createElement(v.a, null), description: u(C) },
                { label: '', decoration: a.createElement(w.a, null), description: u(j) },
                { label: '', decoration: a.createElement(E.a, null), description: u(T) },
              ],
            },
            g = a.createElement(b.a, { style: A.values }, a.createElement(h.a, d))
          return c
            ? a.createElement(f.a, { to: l })
            : a.createElement(y.a, {
                actionLabel: S,
                graphicDisplayMode: 'none',
                headline: _,
                isFullHeightOnMobile: !0,
                onAction: function () {
                  s('continue'), i && o.replace('/i/birdwatch/contribute_form/'.concat(i))
                },
                onClose: function () {
                  s('close'), i && o.goBackThroughModals({ fallbackPath: '/i/status/'.concat(i) })
                },
                subtext: g,
                withCloseButton: !p.b.isTwitterApp(),
              })
        },
        A = g.a.create(function (e) {
          return {
            valueItem: { flexDirection: 'row', marginLeft: e.spaces.space16 },
            values: { marginVertical: e.spaces.space16, textAlign: 'left', width: '100%' },
          }
        }),
        I = s(x)
      t.default = I
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        l = n.n(i),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        f = n.n(d),
        p = n('ERkP'),
        b = n('rHpw'),
        m = n('MWbm')
      function h(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var y = (function (e) {
          l()(n, e)
          var t = h(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return p.createElement(m.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(p.Component),
        g = b.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        l = n.n(i),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        f = n.n(d),
        p = n('ERkP'),
        b = n('3XMw'),
        m = n.n(b),
        h = n('rHpw'),
        y = n('+/1j'),
        g = n('MWbm')
      function v(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var w = m.a.e5b0063d,
        E = 0,
        O = (function (e) {
          l()(n, e)
          var t = v(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(E)), (E += 1), e
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = w({ title: n })
                  return p.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: h.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.createElement(g.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.Component)
      t.a = O
    },
    '89Im': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M11.47 14.53c.146.146.338.22.53.22s.384-.073.53-.22l5-5c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-3.72 3.72V2c0-.414-.337-.75-.75-.75s-.75.336-.75.75v10.19L7.53 8.47c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l5 5z',
            }),
            o.createElement('path', {
              d: 'M21.25 13.25c-.414 0-.75.336-.75.75v5.652c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V14c0-.414-.336-.75-.75-.75S2 13.586 2 14v5.652c0 1.264 1.028 2.292 2.292 2.292h15.416c1.264 0 2.292-1.028 2.292-2.292V14c0-.414-.336-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    '9StO': function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('7x/C'), n('lTEL'), n('kYxP'), n('jwue'), n('+oxZ'), n('ERkP')),
        c = n.p + 'birdwatch_owl.9e2a1755.png',
        i = n('MvLc'),
        l = n('1YZw'),
        s = n('rxPX'),
        u = n('0KEI'),
        d = Object(s.a)()
          .propsFromState(function () {
            return { aliasSelfSelectOptions: i.m }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchAliasSelfSelectOptions: i.e,
              selectAlias: i.l,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'alias_select' }),
        f = n('W6+M'),
        p = n('3XMw'),
        b = n.n(p),
        m = n('t62R'),
        h = n('h0NW'),
        y = n('feu+'),
        g = n('gSL+'),
        v = n('Qwev'),
        w = n('4zmP'),
        E = n('rHpw'),
        O = n('j7Bv'),
        S = n('ms2t'),
        _ = n('VwDm'),
        C = n('EQ/a'),
        j = n('U+bB'),
        T = n('MWbm'),
        x = b.a.f084f1cd,
        A = b.a.ja0ee36f,
        I = b.a.j761c248,
        P = b.a.h66bd30a,
        L = b.a.j48ab593,
        D = b.a.e17c80bc,
        R = b.a.d939cf16,
        B = b.a.a56f0c32,
        N = b.a.d17c59e4,
        M = b.a.i719f8e1,
        k = b.a.d0e190cd,
        H = b.a.e74a2cd5,
        F = b.a.g9677c6d,
        z = b.a.e4a6e006,
        W = b.a.f83d0446,
        U = function (e) {
          return o.createElement(m.b, { weight: 'bold' }, e)
        },
        K = function () {
          return o.createElement(j.a, { source: c, style: V.image })
        },
        V = E.a.create(function (e) {
          return {
            aliasIcon: { marginRight: e.spaces.space12 },
            aliasSelectContainer: { paddingVertical: e.spaces.space16 },
            aliasSubtext: { paddingTop: e.spaces.space8 },
            icon: { color: e.colors.primary, marginRight: e.spaces.space20 },
            image: { height: '125px', width: '125px' },
            infoItemContainer: { paddingHorizontal: 0 },
            optionContainer: { color: e.colors.text, paddingLeft: 0, textTransform: 'capitalize' },
            subtextContainer: { paddingTop: e.spaces.space12 },
            values: { color: e.colors.text, textAlign: 'left', width: '100%' },
          }
        }),
        X = o.createElement(O.a, { Icon: S.a, color: 'neutral', size: 'large', style: V.aliasIcon }),
        G = {
          accessibilityLabel: x,
          containerStyle: V.infoItemContainer,
          items: [
            { label: U(L), decoration: o.createElement(S.a, { style: V.icon }), description: D },
            { label: U(R), decoration: o.createElement(_.a, { style: V.icon }), description: B },
            { label: U(N), decoration: o.createElement(C.a, { style: V.icon }), description: M },
          ],
        },
        q = d(function (e) {
          var t = e.addToast,
            n = e.aliasSelfSelectOptions,
            a = e.createLocalApiErrorHandler,
            c = e.fetchAliasSelfSelectOptions,
            i = e.onAliasSelected,
            l = e.selectAlias,
            s = o.useState(!0),
            u = r()(s, 2),
            d = u[0],
            p = u[1],
            b = o.useState(''),
            E = r()(b, 2),
            O = E[0],
            S = E[1],
            _ = o.useState(!1),
            C = r()(_, 2),
            j = C[0],
            x = C[1]
          o.useEffect(
            function () {
              c()
                .then(function (e) {
                  e && e[0] ? S(e[0]) : x(!0)
                })
                .catch(a())
            },
            [a, c],
          )
          var L,
            D,
            R = o.createElement(
              m.b,
              { color: 'normal', link: 'https://twitter.github.io/birdwatch/aliases/', withUnderline: !0 },
              P,
            ),
            B = o.createElement(T.a, { style: V.values }, o.createElement(h.a, G)),
            N = o.createElement(y.a, {
              actionLabel: A,
              footer: R,
              graphic: K,
              graphicDisplayMode: 'illustration',
              headline: I,
              isFullHeightOnMobile: !0,
              onAction: function () {
                p(!1)
              },
              subtext: B,
            }),
            M = o.useCallback(
              function (e, t) {
                S(t)
              },
              [S],
            ),
            U = o.createElement(
              T.a,
              null,
              o.createElement(m.b, { style: V.aliasSubtext }, H),
              n
                ? o.createElement(
                    T.a,
                    { style: V.aliasSelectContainer },
                    o.createElement(g.a, {
                      name: 'example',
                      onChange: M,
                      options:
                        ((L = n),
                        (D = []),
                        L.forEach(function (e) {
                          D.push({ containerStyle: V.optionContainer, label: Object(f.a)(e), value: e, decoration: X })
                        }),
                        D),
                      value: O,
                    }),
                  )
                : o.createElement(v.a, null),
              j ? o.createElement(w.a, { text: z, type: 'danger' }) : void 0,
            ),
            q = o.createElement(y.a, {
              actionLabel: F,
              footer: R,
              graphicDisplayMode: 'none',
              headline: k,
              isFullHeightOnMobile: !0,
              onAction: function () {
                O &&
                  l(O)
                    .then(function (e) {
                      'Done' === e.authenticated_user_birdwatch_alias_self_selection_put
                        ? (i(!1), t({ text: W, withClearButton: !0 }))
                        : x(!0)
                    })
                    .catch(function (e) {
                      a({ defaultToast: { text: z, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e)
                    })
              },
              subtext: U,
            })
          return d ? N : q
        })
      t.a = q
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('KOtZ'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        g = n('3XMw'),
        v = n.n(g),
        w = n('oQhu'),
        E = n('mjJ+'),
        O = n('eb3s')
      function S(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var _ = v.a.cfd2f35d,
        C = (function (e) {
          u()(n, e)
          var t = S(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { activeConfirmation: null }),
              h()(l()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              h()(l()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              h()(l()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : y.createElement(E.a, {
                        cancelButtonLabel: _,
                        items: this._getProcessedActionItems(),
                        onCloseRequested: e,
                      })
                },
              },
              {
                key: '_renderConfirmation',
                value: function (e) {
                  if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm)
                  var t = e || {},
                    n = t.confirmButtonType,
                    a = t.headline,
                    r = t.label,
                    o = t.text,
                    c = t.withCancelButton
                  return y.createElement(O.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: n,
                    headline: a,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: o,
                    withCancelButton: c,
                  })
                },
              },
              {
                key: '_getProcessedActionItems',
                value: function () {
                  var e = this.props,
                    t = e.actionItems,
                    n = e.dividerIndices,
                    a = e.onClose
                  return j(t, n, a, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(y.Component),
        j = Object(w.a)(function (e, t, n, a) {
          return e.reduce(function (e, r, o) {
            var c = r.Icon,
              i = r.behavioralEventContext,
              l = r.confirmation,
              s = r.disabled,
              u = r.excludeFromActionMenu,
              d = r.isEmphasized,
              f = r.link,
              p = r.onClick,
              b = r.subText,
              m = r.testID,
              h = r.text
            r.withCancelButton
            if (!u) {
              var y = p
                ? function () {
                    l
                      ? l.render
                        ? a({ callback: p, render: l.render })
                        : a({
                            callback: p,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (p(), n())
                  }
                : n
              e.push({
                behavioralEventContext: i,
                disabled: s,
                Icon: c,
                isEmphasized: d,
                testID: m,
                subText: b,
                text: h,
                onClick: y,
                link: f,
                withBottomBorder: t && t.includes(o),
              })
            }
            return e
          }, [])
        })
      t.default = C
    },
    'B/qP': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M11.434 16.22l-3.38 5.3c-.076.116-.21.19-.35.19h-.05c-.16-.018-.292-.127-.34-.277l-.937-2.564-2.72.25c-.168.024-.317-.06-.4-.194-.083-.134-.082-.31.002-.442l3.018-4.725c.1.108.2.208.307.292.1.117.207.21.315.294 1.03.898 2.276 1.505 3.617 1.762.15.026.3.043.45.07.033 0 .058.008.092.008.115.017.24.026.374.035zm9.306 2.8c-.084.134-.235.216-.393.19l-2.725-.28-.956 2.553c-.06.15-.193.257-.352.273h-.042c-.142 0-.275-.077-.35-.194l-3.356-5.335c.133-.008.26-.015.392-.03.025 0 .05-.01.075-.01.15-.023.3-.047.442-.072 1.344-.26 2.597-.86 3.628-1.74.11-.09.21-.19.31-.28.11-.1.21-.2.302-.308l3.026 4.792c.085.133.084.308 0 .44zM18.187 8.446c-.007 1.376-.473 2.65-1.245 3.67-.974 1.304-2.47 2.213-4.182 2.42-.26.032-.517.047-.784.046-.242 0-.483-.02-.725-.054-1.715-.2-3.203-1.11-4.188-2.415-.77-1.046-1.238-2.333-1.23-3.733.02-3.41 2.8-6.154 6.21-6.136 3.41.018 6.164 2.793 6.145 6.202z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    'EQ/a': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M9.944 10.68H2.75c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h7.194c.414 0 .75.337.75.75s-.336.75-.75.75zm4.112-4.11H2.75c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h11.306c.414 0 .75.335.75.75s-.336.75-.75.75z',
            }),
            o.createElement('path', {
              d: 'M8.917 21.986c-.198 0-.39-.078-.53-.22L2.61 15.99c-.293-.294-.293-.77 0-1.062s.768-.293 1.06 0l5.15 5.147L20.64 3.33c.237-.34.706-.42 1.044-.18.338.238.42.706.18 1.045L9.53 21.67c-.128.18-.33.295-.55.313-.02.002-.042.003-.063.003z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    FS1z: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n('rxPX'),
        v = n('0KEI'),
        w = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        O = Object(g.a)()
          .propsFromState(function (e) {
            return { fetchStatus: w, items: E }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        S = n('v//M'),
        _ = n('sIe2'),
        C = n('3XMw'),
        j = n.n(C),
        T = n('TEoO')
      function x(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var A = j.a.i9028824,
        I = 'sliceTimeline',
        P = function (e) {
          return e
        },
        L = { viewType: 'timeline' },
        D = (function (e) {
          u()(n, e)
          var t = x(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  o = t.numColumns,
                  c = t.onScrollEnd,
                  i = t.renderer,
                  l = t.withoutHeadroom
                return !a || o < 1
                  ? null
                  : 1 === o
                  ? y.createElement(T.a, {
                      cacheKey: I,
                      footer: n,
                      identityFunction: P,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: c,
                      renderer: i,
                      withoutHeadroom: l,
                    })
                  : y.createElement(_.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: P,
                      numColumns: o,
                      renderItem: i,
                    })
              }),
              h()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              h()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetch,
                  o = t.fetchIfNeeded
                ;(n ? r : o)().catch(a())
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.module
                  e.module !== t && this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.module,
                    a = e.retryMessage
                  return n
                    ? y.createElement(S.a, {
                        accessibilityLabel: A,
                        behavioralEventContext: L,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: a,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
      h()(D, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var R = O(D)
      t.a = R
    },
    KqB4: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var n = [], a = (0, r.default)(e, t), o = 0; o < a.length; o++) n.push(a[o].url)
          return n
        })
      var r = a(n('vwfs'))
      e.exports = t.default
    },
    Ku87: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchAboutScreen', function () {
          return C
        })
      n('z84I'), n('uFXj')
      var a = n('ERkP'),
        r = n('v6aA'),
        o = n.p + 'birdwatch_logo.0a5315e5.png',
        c = n('vZpt'),
        i = n('L5MV'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('VS6U'),
        p = n('t62R'),
        b = n('/yvb'),
        m = n('rHpw'),
        h = n('U+bB'),
        y = n('MWbm'),
        g = s.a.b721eb37,
        v = s.a.a225549d,
        w = [s.a.bc203ca1, s.a.iea72310, s.a.c337f3d1],
        E = s.a.ff3e0be2,
        O = s.a.i859a9d3,
        S = { external: !0, pathname: 'https://twitter.github.io/birdwatch' },
        _ = { page: 'birdwatch', section: 'about' },
        C = function (e) {
          var t = e.history,
            n = a.useContext(r.a).featureSwitches,
            l = a.createElement(
              a.Fragment,
              null,
              a.createElement(
                y.a,
                { style: j.header },
                a.createElement(y.a, { style: j.imageContainer }, a.createElement(h.a, { source: o, style: j.image })),
              ),
              a.createElement(
                y.a,
                { style: j.content },
                a.createElement(p.b, { size: 'title4', style: j.textSection, weight: 'heavy' }, v),
                w.map(function (e, t) {
                  return a.createElement(p.b, { color: 'gray700', key: 'aboutText'.concat(t), style: j.textSection }, e)
                }),
              ),
              a.createElement(y.a, { style: j.learnMore }, a.createElement(p.b, { link: S }, O)),
              !n.isTrue('responsive_web_birdwatch_note_writing_enabled') &&
                a.createElement(
                  y.a,
                  { style: j.buttonContainer },
                  a.createElement(
                    b.a,
                    { accessibilityLabel: E, link: '/i/flow/join-birdwatch', style: j.button, type: 'brandFilled' },
                    E,
                  ),
                ),
            )
          return a.createElement(
            d.b,
            { namespace: _ },
            a.createElement(
              u.a,
              null,
              a.createElement(f.a, {
                TabBar: i.a,
                history: t,
                logoButton: a.createElement(a.Fragment, null),
                primaryContent: l,
                sidebarContent: a.createElement(c.a, null),
                title: g,
                withTweetButton: !1,
              }),
            ),
          )
        },
        j = m.a.create(function (e) {
          return {
            button: { marginTop: e.spaces.space20 },
            buttonContainer: { alignItems: 'center' },
            content: { margin: e.spaces.space20 },
            header: {
              alignItems: 'center',
              backgroundColor: '#EAF5FD',
              height: '167px',
              justifyContent: 'center',
              width: '100%',
            },
            image: { height: '100%', width: '100%' },
            imageContainer: { height: '90px', width: '90px' },
            learnMore: {
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderTopWidth: e.borderWidths.small,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
            textSection: { marginBottom: e.spaces.space16 },
          }
        })
      t.default = C
    },
    L5MV: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        h = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n('MvLc'),
        v = n('rxPX'),
        w = n('0KEI'),
        E = Object(v.a)()
          .propsFromState(function () {
            return { userAlias: g.x }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: g.k,
            }
          })
          .withAnalytics({ page: 'birdwatch', component: 'birdwatch_tab_bar' }),
        O = n('3XMw'),
        S = n.n(O),
        _ = n('gASw'),
        C = n('v6aA'),
        j = n('C6f5'),
        T = n('2qZs'),
        x = n('PU7B'),
        A = n('YI7k'),
        I = n('boUI'),
        P = n('6ZHn'),
        L = n('89Im'),
        D = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        R = n('k/Ka')
      function B(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(R.a)(
          'svg',
          N(
            N({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [D.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M11.188 14.813c.217.217.506.337.812.337.307 0 .596-.12.813-.337l5-5c.217-.218.337-.507.337-.815 0-.307-.12-.595-.338-.812-.217-.216-.506-.336-.814-.336h-.003c-.307 0-.594.12-.81.337l-3.035 3.037V2c0-.634-.517-1.15-1.15-1.15-.634 0-1.15.516-1.15 1.15v9.225L7.813 8.188C7.596 7.97 7.307 7.85 7 7.85c-.308 0-.596.12-.813.338-.218.22-.337.51-.337.817 0 .306.12.593.337.808l5 5z',
            }),
            y.createElement('path', {
              d: 'M21.25 12.85c-.634 0-1.15.517-1.15 1.15v5.652c0 .216-.176.392-.392.392H4.292c-.216 0-.392-.176-.392-.392V14c0-.634-.516-1.15-1.15-1.15S1.6 13.366 1.6 14v5.652c0 1.484 1.208 2.692 2.692 2.692h15.416c1.484 0 2.692-1.208 2.692-2.692V14c0-.634-.516-1.15-1.15-1.15z',
            }),
          ),
        )
      }
      M.metadata = { width: 24, height: 24 }
      var k = M,
        H = n('6s7X'),
        F = n('Nh1N')
      function z(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var W = S.a.d5b2da0a,
        U = S.a.b5711f09,
        K = S.a.ha8209bb,
        V = S.a.ff692d63,
        X = S.a.cb1adfa0,
        G = S.a.b721eb37,
        q = function (e, t) {
          return (
            '/i/birdwatch' === t.pathname || '/i/birdwatch/all' === t.pathname || '/i/birdwatch/helpful' === t.pathname
          )
        },
        Z = function () {
          return !1
        },
        Q = (function (e) {
          u()(n, e)
          var t = z(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleTabClickFactory', function (t) {
                return function (n) {
                  e.props.analytics.scribe({ element: t, action: 'navigate' })
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchUserAlias)().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.layout,
                    n = void 0 === t ? 'horizontal' : t,
                    a = e.wideMode,
                    r = void 0 !== a && a,
                    o = e.withLabel,
                    c = void 0 !== o && o
                  return y.createElement(
                    j.b,
                    { layout: n, primaryLabel: W, wideMode: r },
                    y.createElement(_.a, {
                      accessibilityLabel: U,
                      isActive: Z,
                      label: U,
                      layout: n,
                      onClick: this._handleTabClickFactory('home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(T.a, T.a, n),
                      withLabel: c,
                    }),
                    y.createElement(_.a, {
                      accessibilityLabel: K,
                      isActive: q,
                      label: K,
                      layout: n,
                      onClick: this._handleTabClickFactory('timeline_home'),
                      path: '/i/birdwatch',
                      renderIcon: Object(j.c)(x.a, A.a, n),
                      withLabel: c,
                    }),
                    y.createElement(_.a, {
                      accessibilityLabel: V,
                      label: V,
                      layout: n,
                      onClick: this._handleTabClickFactory('user_notes'),
                      path: '/i/birdwatch/u/me',
                      renderIcon: Object(j.c)(I.a, P.a, n),
                      withLabel: c,
                    }),
                    y.createElement(_.a, {
                      accessibilityLabel: X,
                      label: X,
                      layout: n,
                      onClick: this._handleTabClickFactory('download_data'),
                      path: '/i/birdwatch/download-data',
                      renderIcon: Object(j.c)(L.a, k, n),
                      withLabel: c,
                    }),
                    y.createElement(_.a, {
                      accessibilityLabel: G,
                      label: G,
                      layout: n,
                      onClick: this._handleTabClickFactory('about'),
                      path: '/i/birdwatch/about',
                      renderIcon: Object(j.c)(H.a, F.a, n),
                      withLabel: c,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      h()(Q, 'contextType', C.a)
      var Y = E(Q)
      t.a = Y
    },
    MvLc: function (e, t, n) {
      'use strict'
      n.d(t, 'q', function () {
        return L
      }),
        n.d(t, 'w', function () {
          return B
        }),
        n.d(t, 'n', function () {
          return N
        }),
        n.d(t, 't', function () {
          return M
        }),
        n.d(t, 'r', function () {
          return k
        }),
        n.d(t, 'x', function () {
          return F
        }),
        n.d(t, 'u', function () {
          return z
        }),
        n.d(t, 'm', function () {
          return W
        }),
        n.d(t, 'o', function () {
          return U
        }),
        n.d(t, 'v', function () {
          return K
        }),
        n.d(t, 's', function () {
          return V
        }),
        n.d(t, 'p', function () {
          return X
        }),
        n.d(t, 'j', function () {
          return G
        }),
        n.d(t, 'f', function () {
          return q
        }),
        n.d(t, 'g', function () {
          return Z
        }),
        n.d(t, 'k', function () {
          return Q
        }),
        n.d(t, 'i', function () {
          return Y
        }),
        n.d(t, 'e', function () {
          return J
        }),
        n.d(t, 'l', function () {
          return $
        }),
        n.d(t, 'c', function () {
          return ee
        }),
        n.d(t, 'a', function () {
          return te
        }),
        n.d(t, 'y', function () {
          return ne
        }),
        n.d(t, 'b', function () {
          return ae
        }),
        n.d(t, 'd', function () {
          return re
        }),
        n.d(t, 'h', function () {
          return oe
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('KEM+'),
        c = n.n(o),
        i = (n('yH/f'), n('KOtZ'), n('z84I'), n('LW0h'), n('JtPf'), n('7x/C'), n('/kEJ')),
        l = n('kGix'),
        s = n('Ssj5'),
        u = n('oEOe'),
        d = n('3A2y'),
        f = n('YeIG')
      function p(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var m = 'birdwatchNotes',
        h = 'rweb/'.concat(m),
        y = Object(u.a)(h, 'DELETE_NOTE'),
        g = Object(u.a)(h, 'CREATE_RATING'),
        v = Object(u.a)(h, 'DELETE_RATING'),
        w = Object(u.a)(h, 'SELECT_ALIAS'),
        E = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_DATA_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_DATA_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_DATA_FAILURE',
        }),
        O = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_ALIAS_SELECT_OPTIONS_FAILURE',
        }),
        _ = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/CREATE_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/CREATE_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/CREATE_NOTE_FAILURE',
        }),
        C = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_TWEET_NOTES_FAILURE',
        }),
        j = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_BIRDWATCH_PROFILE_FAILURE',
        }),
        T = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_SHOW_ALIAS_SELECT_FAILURE',
        }),
        x = Object.freeze({
          REQUEST: 'rweb/birdwatchNotes/FETCH_NOTE_REQUEST',
          SUCCESS: 'rweb/birdwatchNotes/FETCH_NOTE_SUCCESS',
          FAILURE: 'rweb/birdwatchNotes/FETCH_NOTE_FAILURE',
        }),
        A = 'rweb/birdwatchNotes/SAVE_FORM_DRAFT',
        I = { drafts: {}, notes: {}, tweetNotes: {}, contributor: {}, publicData: {} }
      s.a.register(
        c()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case _.SUCCESS:
              var n,
                a = null === (n = t.payload) || void 0 === n ? void 0 : n.result
              if (a) {
                var o,
                  i,
                  s =
                    null === (o = t.payload) || void 0 === o || null === (i = o.entities) || void 0 === i
                      ? void 0
                      : i.birdwatchNotes[a],
                  u = s.tweet.rest_id
                return b(
                  b({}, e),
                  {},
                  {
                    notes: b(b({}, e.notes), {}, c()({}, a, s)),
                    tweetNotes: b(
                      b({}, e.tweetNotes),
                      {},
                      c()(
                        {},
                        u,
                        b(b({}, e.tweetNotes && e.tweetNotes[u]), {}, { ownNoteId: a, fetchStatus: l.a.LOADED }),
                      ),
                    ),
                  },
                )
              }
              return e
            case y.SUCCESS:
              var p,
                m = null === (p = t.meta) || void 0 === p ? void 0 : p.note_id
              return m ? b(b({}, e), {}, { notes: Object(d.a)(e.notes, m) }) : e
            case g.SUCCESS:
              var h,
                P = null === (h = t.meta) || void 0 === h ? void 0 : h.note_id,
                L = t.payload
              return P
                ? b(b({}, e), {}, { notes: b(b({}, e.notes), {}, c()({}, P, b(b({}, e.notes[P]), {}, { rating: L }))) })
                : e
            case v.SUCCESS:
              var D,
                R = null === (D = t.meta) || void 0 === D ? void 0 : D.note_id
              if (R) {
                var B = e.notes[R],
                  N = (B.rating, r()(B, ['rating']))
                return b(b({}, e), {}, { notes: b(b({}, e.notes), {}, c()({}, R, b({}, N))) })
              }
              return e
            case C.REQUEST:
              var M,
                k = null === (M = t.meta) || void 0 === M ? void 0 : M.tweet_id
              return k
                ? b(
                    b({}, e),
                    {},
                    {
                      tweetNotes: b(
                        b({}, e.tweetNotes),
                        {},
                        c()({}, k, b(b({}, e.tweetNotes && e.tweetNotes[k]), {}, { fetchStatus: l.a.LOADING })),
                      ),
                    },
                  )
                : e
            case C.FAILURE:
              var H,
                F = null === (H = t.meta) || void 0 === H ? void 0 : H.tweet_id
              return F
                ? b(
                    b({}, e),
                    {},
                    {
                      tweetNotes: b(
                        b({}, e.tweetNotes),
                        {},
                        c()({}, F, b(b({}, e.tweetNotes[F]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case C.SUCCESS:
              var z,
                W,
                U = null === (z = t.payload) || void 0 === z ? void 0 : z.result,
                K = null === (W = t.meta) || void 0 === W ? void 0 : W.tweet_id
              if (U) {
                var V,
                  X,
                  G =
                    null === (V = t.payload) || void 0 === V || null === (X = V.entities) || void 0 === X
                      ? void 0
                      : X.birdwatchNotes[U],
                  q = (null == G ? void 0 : G.ids) || [],
                  Z = q.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  Q = q.map(function (e) {
                    return e.rest_id
                  }),
                  Y = {}
                return (
                  (Y.ids = Q),
                  (Y.fetchStatus = l.a.LOADED),
                  null != G && G.ownNoteId && (Y.ownNoteId = null == G ? void 0 : G.ownNoteId),
                  t.meta
                    ? b(
                        b({}, e),
                        {},
                        { notes: b(b({}, e.notes), Z), tweetNotes: b(b({}, e.tweetNotes), {}, c()({}, K, Y)) },
                      )
                    : e
                )
              }
              return K
                ? b(b({}, e), {}, { tweetNotes: b(b({}, e.tweetNotes), {}, c()({}, K, { fetchStatus: l.a.LOADED })) })
                : e
            case j.REQUEST:
              var J,
                $ = null === (J = t.meta) || void 0 === J ? void 0 : J.alias
              return $
                ? b(
                    b({}, e),
                    {},
                    {
                      contributor: b(
                        b({}, e.contributor),
                        {},
                        c()({}, $, b(b({}, e.contributor[$]), {}, { fetchStatus: l.a.LOADING })),
                      ),
                    },
                  )
                : e
            case j.FAILURE:
              var ee,
                te = null === (ee = t.meta) || void 0 === ee ? void 0 : ee.alias
              return te
                ? b(
                    b({}, e),
                    {},
                    {
                      contributor: b(
                        b({}, e.contributor),
                        {},
                        c()({}, te, b(b({}, e.contributor[te]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case j.SUCCESS:
              var ne,
                ae,
                re = null === (ne = t.meta) || void 0 === ne ? void 0 : ne.alias,
                oe = null === (ae = t.payload) || void 0 === ae ? void 0 : ae.result
              if (oe && t.meta) {
                var ce,
                  ie,
                  le =
                    null === (ce = t.payload) || void 0 === ce || null === (ie = ce.entities) || void 0 === ie
                      ? void 0
                      : ie.birdwatchNotes[oe],
                  se = (null == le ? void 0 : le.notes) || [],
                  ue = se.reduce(function (e, t) {
                    return (e[t.rest_id] = t), e
                  }, {}),
                  de = se.map(function (e) {
                    return e.rest_id
                  }),
                  fe = {
                    helpful: null == le ? void 0 : le.ratings_received_helpful_count,
                    notHelpful: null == le ? void 0 : le.ratings_received_not_helpful_count,
                    somewhatHelpful: null == le ? void 0 : le.ratings_received_somewhat_helpful_count,
                  },
                  pe = (null == le ? void 0 : le.badges) || []
                return b(
                  b({}, e),
                  {},
                  {
                    notes: b(b({}, e.notes), ue),
                    contributor: b(
                      b({}, e.contributor),
                      {},
                      c()({}, oe, { badges: pe, notes: de, ratings: fe, fetchStatus: l.a.LOADED }),
                    ),
                  },
                )
              }
              return re
                ? b(
                    b({}, e),
                    {},
                    {
                      contributor: b(
                        b({}, e.contributor),
                        {},
                        c()({}, re, b(b({}, e.contributor[re]), {}, { fetchStatus: l.a.FAILED })),
                      ),
                    },
                  )
                : e
            case O.SUCCESS:
              var be = t.payload
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { ownAlias: be }) })
            case T.SUCCESS:
              var me = t.payload
              return b(
                b({}, e),
                {},
                {
                  contributor: b(
                    b({}, e.contributor),
                    {},
                    { showAliasSelfSelect: (null == me ? void 0 : me.can_select) && !(null != me && me.has_selected) },
                  ),
                },
              )
            case S.SUCCESS:
              var he = t.payload
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { aliasSelfSelectOptions: he }) })
            case x.SUCCESS:
              var ye,
                ge = t.payload,
                ve = null == ge ? void 0 : ge.result
              return ve
                ? b(
                    b({}, e),
                    {},
                    {
                      notes: b(
                        b({}, e.notes),
                        {},
                        c()(
                          {},
                          ve,
                          b(
                            b(
                              {},
                              null == ge || null === (ye = ge.entities) || void 0 === ye
                                ? void 0
                                : ye.birdwatchNotes[ve],
                            ),
                            {},
                            { fetchStatus: l.a.LOADED },
                          ),
                        ),
                      ),
                    },
                  )
                : e
            case x.REQUEST:
              var we,
                Ee = null === (we = t.meta) || void 0 === we ? void 0 : we.note_id
              return b(
                b({}, e),
                {},
                {
                  notes: b(
                    b({}, e.notes),
                    {},
                    c()({}, Ee, b(b({}, e.notes && e.notes[Ee]), {}, { fetchStatus: l.a.LOADING })),
                  ),
                },
              )
            case x.FAILURE:
              var Oe,
                Se = null === (Oe = t.meta) || void 0 === Oe ? void 0 : Oe.note_id
              return b(
                b({}, e),
                {},
                { notes: b(b({}, e.notes), {}, c()({}, Se, b(b({}, e.notes[Se]), {}, { fetchStatus: l.a.FAILED }))) },
              )
            case E.SUCCESS:
              var _e = t.payload
              return _e ? b(b({}, e), {}, { publicData: _e }) : e
            case w.SUCCESS:
              var Ce,
                je = null === (Ce = t.meta) || void 0 === Ce ? void 0 : Ce.alias
              return b(b({}, e), {}, { contributor: b(b({}, e.contributor), {}, { ownAlias: je }) })
            case A:
              var Te = t.payload
              if (Object(f.a)(Te)) return e
              var xe = Te.updates,
                Ae = Te.tweetId
              return b(b({}, e), {}, { drafts: b(b({}, e.drafts), {}, c()({}, Ae, xe)) })
            default:
              return e
          }
        }),
      )
      var P = [],
        L = function (e, t) {
          return e.birdwatchNotes.notes[t]
        },
        D = function (e, t) {
          var n
          return null === (n = e.birdwatchNotes.tweetNotes[t]) || void 0 === n ? void 0 : n.ids
        },
        R = function (e, t) {
          var n
          return null === (n = e.birdwatchNotes.tweetNotes[t]) || void 0 === n ? void 0 : n.ownNoteId
        },
        B = function (e, t) {
          if (!t) return null
          var n = R(e, t)
          return n ? L(e, n) : null
        },
        N = function (e, t) {
          var n, a
          if (t)
            return null === (n = e.birdwatchNotes) || void 0 === n || null === (a = n.contributor[t]) || void 0 === a
              ? void 0
              : a.badges
        },
        M = function (e) {
          return e.birdwatchNotes.publicData
        },
        k = function (e, t) {
          var n = t ? D(e, t) : void 0
          if (n) {
            var a = R(e, t)
            return (
              a &&
                (n = n.filter(function (e) {
                  return e !== a
                })),
              n
                .map(function (t) {
                  return L(e, t)
                })
                .filter(Boolean)
            )
          }
          return P
        },
        H = function (e, t) {
          var n = e.birdwatchNotes.contributor[t]
          return n ? n.notes : void 0
        },
        F = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.ownAlias : void 0
        },
        z = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.showAliasSelfSelect : void 0
        },
        W = function (e) {
          var t = e.birdwatchNotes.contributor
          return t ? t.aliasSelfSelectOptions : void 0
        },
        U = function (e, t) {
          if (t) {
            var n = e.birdwatchNotes.contributor[t]
            return n ? n.ratings : void 0
          }
        },
        K = function (e, t) {
          var n = e.birdwatchNotes.tweetNotes[t]
          return n ? n.fetchStatus : l.a.NONE
        },
        V = function (e, t) {
          var n = e.birdwatchNotes.notes[t]
          return n ? n.fetchStatus : l.a.NONE
        },
        X = function (e, t) {
          if (t) {
            var n = e.birdwatchNotes.drafts
            return n ? n[t] : void 0
          }
        },
        G = function (e) {
          return function (t, n, a) {
            a.api
            var r = !!D(n(), e),
              o = K(n(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
                      return Object(u.b)(t, { request: r.Birdwatch.fetchNotes, params: { tweet_id: e } })(
                        { actionTypes: C, context: 'FETCH_TWEET_NOTES', meta: { tweet_id: e } },
                        function (e) {
                          if (e) {
                            var t = e.entities
                            return t ? [Object(i.c)(t)] : void 0
                          }
                        },
                      )
                    }
                  })(e),
                )
          }
        },
        q = function (e) {
          return function (t, n, a) {
            a.api
            var r = !!e && !!H(n(), e),
              o =
                (function (e, t) {
                  var n = e.birdwatchNotes.contributor[t]
                  return n ? n.fetchStatus : l.a.NONE
                })(n(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
                      return e
                        ? Object(u.b)(t, { request: r.Birdwatch.fetchBirdwatchProfile, params: { alias: e } })(
                            { actionTypes: j, context: 'FETCH_BIRDWATCH_PROFILE', meta: { alias: e } },
                            function (e) {
                              if (e) {
                                var t = e.entities
                                return t && [Object(i.c)(t)]
                              }
                            },
                          )
                        : Promise.resolve()
                    }
                  })(e),
                )
          }
        },
        Z = function (e) {
          return function (t, n, a) {
            a.api
            var r = !!L(n(), e),
              o = V(n(), e) === l.a.LOADING
            return r || o
              ? Promise.resolve()
              : t(
                  (function (e) {
                    return function (t, n, a) {
                      var r = a.api
                      return Object(u.b)(t, { request: r.Birdwatch.fetchOneNote, params: { note_id: e } })({
                        actionTypes: x,
                        context: 'FETCH_NOTE',
                        meta: { note_id: e },
                      })
                    }
                  })(e),
                )
          }
        },
        Q = function () {
          return function (e, t, n) {
            n.api
            return !!F(t())
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var a = n.api
                  return Object(u.b)(e, { request: a.Birdwatch.fetchUserAlias, params: {} })({
                    actionTypes: O,
                    context: 'FETCH_USER_ALIAS',
                  })
                })
          }
        },
        Y = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(u.b)(e, { request: a.Birdwatch.fetchAliasSelfSelectStatus, params: {} })({
              actionTypes: T,
              context: 'FETCH_SHOW_ALIAS_SELECT',
              meta: {},
            })
          }
        },
        J = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(u.b)(e, { request: a.Birdwatch.fetchAliasSelfSelectOptions, params: {} })({
              actionTypes: S,
              context: 'FETCH_ALIAS_SELECT_OPTIONS',
              meta: {},
            })
          }
        },
        $ = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(u.b)(t, { request: r.Birdwatch.selectAlias, params: { alias: e } })({
              actionTypes: w,
              context: 'SELECT_ALIAS',
              meta: { alias: e },
            })
          }
        },
        ee = function (e) {
          return { meta: { note_id: e }, type: y.SUCCESS }
        },
        te = function (e, t) {
          return function (n, a, r) {
            var o = r.api
            return Object(u.b)(n, { request: o.Birdwatch.createNote, params: { tweet_id: e, data: t } })({
              actionTypes: _,
              context: 'CREATE_NOTE',
            })
          }
        },
        ne = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: A, payload: e }
              })(e),
            )
          }
        },
        ae = function (e, t) {
          return function (n, a, r) {
            var o = r.api
            return Object(u.b)(n, { request: o.Birdwatch.createRating, params: { note_id: e, data: t } })({
              actionTypes: g,
              context: 'CREATE_RATING',
              meta: { note_id: e },
            })
          }
        },
        re = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(u.b)(t, { request: r.Birdwatch.deleteRating, params: { note_id: e } })({
              actionTypes: v,
              context: 'DELETE_RATING',
              meta: { note_id: e },
            })
          }
        },
        oe = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(u.b)(e, { request: a.Birdwatch.fetchPublicData, params: {} })({
              actionTypes: E,
              context: 'FETCH_DATA',
              meta: {},
            })
          }
        }
    },
    PKU5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchNoteScreen', function () {
          return I
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('ZD0R'),
        i = (n('WNMA'), n('KqXw'), n('MvLc')),
        l = n('rxPX'),
        s = n('0KEI'),
        u = function (e, t) {
          return t.match.params.noteId
        },
        d = function (e, t) {
          return i.q(e, u(0, t))
        },
        f = function (e, t) {
          return i.s(e, u(0, t))
        },
        p = Object(l.a)()
          .propsFromState(function () {
            return { noteData: d, noteId: u, fetchStatus: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchOneNoteIfNeeded: i.g,
            }
          }),
        b = n('kGix'),
        m = n('jHSc'),
        h = n('3XMw'),
        y = n.n(h),
        g = n('aITJ'),
        v = n('MWbm'),
        w = n('FIs5'),
        E = n('htQn'),
        O = n('rHpw'),
        S = n('Qwev'),
        _ = y.a.c87f3cf8,
        C = y.a.i859a9d3,
        j = y.a.efd14e79,
        T = y.a.a5b19492,
        x = o.createElement(w.a, { buttonLink: '/i/birdwatch/about', buttonText: C, header: T }),
        A = function () {
          return null
        },
        I = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchOneNoteIfNeeded,
            a = e.fetchStatus,
            i = e.history,
            l = e.noteData,
            s = e.noteId,
            u = o.useState(l),
            d = r()(u, 2),
            f = d[0],
            p = d[1]
          o.useEffect(
            function () {
              s && n(s).catch(t())
            },
            [t, n, s],
          ),
            o.useEffect(
              function () {
                p(l)
              },
              [l],
            )
          var h = o.createElement(
            E.a,
            null,
            f && f.data_v1
              ? o.createElement(
                  v.a,
                  { style: P.contentWrapper },
                  o.createElement(c.a, {
                    handleDelete: function (e) {
                      p(null)
                    },
                    note: f,
                    showPivot: !0,
                    showTweet: !0,
                  }),
                )
              : a === b.a.LOADING
              ? L
              : x,
          )
          return o.createElement(
            m.b,
            { history: i, renderHeader: g.b.isTwitterApp() ? A : void 0, title: _ },
            o.createElement(v.a, { style: P.contentWrapper }, h),
          )
        },
        P = O.a.create(function (e) {
          return {
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            spinner: { paddingTop: e.spaces.space80 },
          }
        }),
        L = o.createElement(S.a, { accessibilityLabel: j, size: 'large', style: P.spinner }),
        D = p(I)
      t.default = D
    },
    QDet: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M12 3.413c.45 0 .814-.365.814-.815V1.315a.814.814 0 10-1.628 0v1.284c0 .449.364.814.814.814zm0 17.174a.814.814 0 00-.814.815v1.284a.814.814 0 101.628 0v-1.284a.813.813 0 00-.814-.815zm10.685-9.402h-1.284a.814.814 0 100 1.628h1.284a.814.814 0 100-1.628zm-20.087.001H1.315a.814.814 0 100 1.628h1.284a.814.814 0 10-.001-1.628zm16.626-5.259l.908-.908a.814.814 0 10-1.152-1.152l-.908.907a.814.814 0 101.152 1.153zM4.777 18.072l-.908.908a.814.814 0 101.152 1.152l.908-.908a.814.814 0 10-1.152-1.152zm14.447 0a.814.814 0 10-1.152 1.152l.908.908a.814.814 0 101.152-1.152l-.908-.908zM4.776 5.927a.814.814 0 101.152-1.152l-.908-.907A.814.814 0 103.868 5.02l.908.907zm10.264.372c-1.378 0-2.408.841-3.039 1.621-.631-.78-1.661-1.621-3.039-1.621-2.005 0-3.763 1.866-3.763 3.992 0 4.281 5.042 8.802 6.815 8.834 1.747-.032 6.788-4.553 6.788-8.834 0-2.126-1.759-3.992-3.762-3.992zm-3.025 11.389c-.934-.05-5.378-3.835-5.378-7.397 0-1.337 1.108-2.555 2.326-2.555 1.496 0 2.367 1.781 2.374 1.798.11.269.372.441.663.443h.003a.723.723 0 00.664-.442c.007-.018.879-1.799 2.374-1.799 1.217 0 2.325 1.218 2.325 2.555-.002 3.562-4.445 7.348-5.351 7.397z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('5UID'),
        i = n('3GUV'),
        l = n('iBK2'),
        s = o.createElement(i.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, ['accessibilityTitle']),
            a = o.createElement(l.b, n)
          return t ? o.createElement(c.a, { title: t }, a) : a
        }
      ;(u.defaultProps = { footer: s }), (t.a = u)
    },
    'W6+M': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('7xRU'), n('z84I'), n('Ysgh'), n('KqXw')
      var a = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return e
          .split('-')
          .map(function (e) {
            return t ? e[0].toUpperCase() + e.substring(1) : e
          })
          .join(' ')
      }
    },
    XioW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchForm', function () {
          return Ae
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var a = n('RhWx'),
        r = n.n(a),
        o = n('KEM+'),
        c = n.n(o),
        i = n('ddV6'),
        l = n.n(i),
        s =
          (n('2G9S'),
          n('tVqn'),
          n('jwue'),
          n('jQ3i'),
          n('x4t0'),
          n('LW0h'),
          n('z84I'),
          n('7x/C'),
          n('DZ+c'),
          n('MvUL'),
          n('KqXw'),
          n('+oxZ'),
          n('uFXj'),
          n('ERkP')),
        u = n('v6aA'),
        d = n('9StO'),
        f = (n('WNMA'), n('MvLc')),
        p = n('1YZw'),
        b = n('XOJV'),
        m = n('rxPX'),
        h = n('0KEI'),
        y = function (e, t) {
          return t.match.params.tweetId
        },
        g = function (e, t) {
          return f.w(e, y(0, t))
        },
        v = function (e, t) {
          return f.p(e, y(0, t))
        },
        w = function (e, t) {
          return f.u(e)
        },
        E = Object(m.a)()
          .propsFromState(function () {
            return { draftData: v, ownNoteData: g, tweetId: y, showAliasSelfSelect: w, userAlias: f.x }
          })
          .propsFromActions(function () {
            return {
              addToast: p.b,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createNote: f.a,
              fetchNotes: f.j,
              fetchShowAliasSelfSelect: f.i,
              fetchTweet: b.a.fetchOneIfNeeded,
              fetchUserAlias: f.k,
              saveFormData: f.y,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'contribute_form' }),
        O = n('W6+M'),
        S = n('jHSc'),
        _ = n('3XMw'),
        C = n.n(_),
        j = n('5FtR'),
        T = n('SrIh'),
        x = n('Rp9C'),
        A = n('xZXe'),
        I = n('aITJ'),
        P = n('MWbm'),
        L = n('t62R'),
        D = n('XiMS'),
        R = n('fyvP'),
        B = n('p+r5'),
        N = n('4zmP'),
        M = n('/yvb'),
        k = n('feu+'),
        H = n('rHpw'),
        F = n('KqB4'),
        z = n.n(F),
        W = n('S1qy'),
        U = n.n(W),
        K = n('Oib4'),
        V = n('DlMI'),
        X = n('ms2t'),
        G = n('I/9y'),
        q = n('EHV7'),
        Z = 'MisinformedOrPotentiallyMisleading',
        Q = 'NotMisleading',
        Y = {
          classification: {
            label: C.a.c8a7eee9,
            options: [
              { label: C.a.d4e419f5, value: Z },
              { label: C.a.ha9655c2, value: Q },
            ],
          },
          misleading_tags: {
            label: C.a.a0cf39fc,
            options: [
              { label: C.a.c33bc7d3, value: 'FactualError' },
              { label: C.a.j6e12b24, value: 'ManipulatedMedia' },
              { label: C.a.aadb676b, value: 'OutdatedInformation' },
              { label: C.a.g21a0ef3, value: 'MissingImportantContext' },
              { label: C.a.daf354dd, value: 'DisputedClaimAsFact' },
              { label: C.a.d1d2ef84, value: 'MisinterpretedSatire' },
              { label: C.a.c365dcc5, value: 'Other' },
            ],
          },
          believable: {
            label: C.a.ce5fa5d4,
            options: [
              { label: C.a.d617b1b9, value: 'BelievableByFew' },
              { label: C.a.c5be638b, value: 'BelievableByMany' },
            ],
          },
          harmful: {
            label: C.a.cd06cf1a,
            options: [
              { label: C.a.c23c72e6, value: 'LittleHarm' },
              { label: C.a.ee822d70, value: 'ConsiderableHarm' },
            ],
          },
          validation: {
            label: C.a.d19bf2bc,
            options: [
              { label: C.a.h25771bb, value: 'Easy' },
              { label: C.a.e0830664, value: 'Challenging' },
            ],
          },
          not_misleading_tags: {
            label: C.a.j206b73d,
            options: [
              { label: C.a.g228df26, value: 'FactuallyCorrect' },
              { label: C.a.dd55f821, value: 'OutdatedNowButNotWhenWritten' },
              { label: C.a.hf607a09, value: 'ClearlySatire' },
              { label: C.a.j6ac7741, value: 'PersonalOpinion' },
              { label: C.a.c365dcc5, value: 'Other' },
            ],
          },
          trustworthy_sources: {
            label: C.a.b1d82aae,
            options: [
              { label: C.a.b7ec04f3, value: !0 },
              { label: C.a.i62a03aa, value: !1 },
            ],
          },
        }
      function J(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ee = C.a.d39e8b30,
        te = C.a.a91bb144,
        ne = C.a.hb2bf967,
        ae = C.a.dc7a6625,
        re = C.a.af778d9e,
        oe = C.a.ifd2c15f,
        ce = C.a.f24ec219,
        ie = C.a.j679dcda,
        le = { external: !0, pathname: 'https://twitter.github.io/birdwatch/note-examples' },
        se = C.a.b7476596,
        ue = C.a.df6c8291,
        de = C.a.h0e35524,
        fe = ['believable', 'harmful', 'validation'],
        pe = ['classification', 'summary', 'trustworthy_sources'],
        be = ['misleading_tags'].concat(fe),
        me = ['not_misleading_tags'],
        he = ['classification', 'believable', 'harmful', 'validation', 'trustworthy_sources'],
        ye = ['misleading_tags', 'not_misleading_tags'],
        ge = C.a.b47b5a16,
        ve = C.a.i0e66c5a,
        we = C.a.j8e3e3be,
        Ee = C.a.f1e851ff,
        Oe = C.a.ff5dcac8,
        Se = {
          classification: ve,
          misleading_tags: we,
          believable: ve,
          harmful: ve,
          validation: ve,
          summary: Ee,
          not_misleading_tags: we,
          trustworthy_sources: ve,
        },
        _e = C.a.abdd8d09,
        Ce = { explanation: C.a.c097608d, source: C.a.g9cffe15 },
        je = { explanation: C.a.ba25898c, source: C.a.e764d704 },
        Te = { explanation: C.a.gb67e44c, source: C.a.d6b758a1 },
        xe = { defaultWeight: 1, maxWeightedTweetLength: 280, scale: 1, transformedURLLength: 1 },
        Ae = function (e) {
          var t = s.useContext(u.a).featureSwitches,
            n = e.addToast,
            a = e.analytics,
            o = e.createLocalApiErrorHandler,
            i = e.createNote,
            f = e.draftData,
            p = e.fetchNotes,
            b = e.fetchShowAliasSelfSelect,
            m = e.fetchTweet,
            h = e.fetchUserAlias,
            y = e.history,
            g = e.ownNoteData,
            v = e.saveFormData,
            w = e.showAliasSelfSelect,
            E = e.tweetId,
            _ = e.userAlias,
            C = function (e) {
              return void 0 === e ? ve : ''
            },
            H = function (e) {
              return U()(e, xe).weightedLength
            },
            F = function (e) {
              if (!e) return Ee
              var t = H(e.trim())
              return t <= 0 ? Ee : t > 280 ? Oe : ''
            },
            W = s.useState(f || {}),
            J = l()(W, 2),
            Ae = J[0],
            Pe = J[1],
            Le = s.useState(
              (function () {
                var e = Se
                return (
                  he.forEach(function (t) {
                    e[t] = C(Ae[t])
                  }),
                  ye.forEach(function (t) {
                    var n
                    e[t] = (n = Ae[t]) && n.length > 0 ? '' : we
                  }),
                  (e.summary = F(Ae.summary)),
                  e
                )
              })(),
            ),
            De = l()(Le, 2),
            Re = De[0],
            Be = De[1],
            Ne = s.useState(!1),
            Me = l()(Ne, 2),
            ke = Me[0],
            He = Me[1],
            Fe = s.useState(!1),
            ze = l()(Fe, 2),
            We = ze[0],
            Ue = ze[1],
            Ke = s.useState(null),
            Ve = l()(Ke, 2),
            Xe = Ve[0],
            Ge = Ve[1],
            qe = s.useState(w),
            Ze = l()(qe, 2),
            Qe = Ze[0],
            Ye = Ze[1],
            Je = '/i/birdwatch/'.concat(E, '/contribute_complete')
          s.useEffect(
            function () {
              E && (m(E).catch(o()), p(E).catch(o()))
            },
            [o, p, m, E],
          ),
            s.useEffect(
              function () {
                h().catch(o())
              },
              [o, h],
            ),
            s.useEffect(
              function () {
                b().catch(o())
              },
              [o, b],
            ),
            s.useEffect(
              function () {
                Ye(w)
              },
              [w],
            )
          var $e,
            et = function (e) {
              var t = x.a.forTweet(E)
              a.scribe({ element: e, action: 'click', data: { targets: [t] } })
            },
            tt = function (e) {
              return function (t, n) {
                et(e),
                  Pe(function (t) {
                    var a = n
                    'trustworthy_sources' === e && ('true' === n ? (a = !0) : 'false' === n && (a = !1))
                    var r = $($({}, t), {}, c()({}, e, a))
                    return v({ updates: r, tweetId: E }), r
                  }),
                  Be(function (t) {
                    return $($({}, t), {}, c()({}, e, C(n)))
                  })
              }
            },
            nt = function (e) {
              return function (t) {
                return function () {
                  Pe(function (n) {
                    if (!n[e]) {
                      Be(function (t) {
                        return $($({}, t), {}, c()({}, e, ''))
                      })
                      var a = $($({}, n), {}, c()({}, e, [t]))
                      return v({ updates: a, tweetId: E }), a
                    }
                    var o = n[e].includes(t),
                      i = n[e].filter(function (e) {
                        return e !== t
                      })
                    if (o) {
                      Be(function (t) {
                        return i.length > 0 ? $($({}, t), {}, c()({}, e, '')) : $($({}, t), {}, c()({}, e, we))
                      })
                      var l = $($({}, n), {}, c()({}, e, i))
                      return v({ updates: l, tweetId: E }), l
                    }
                    Be(function (t) {
                      return $($({}, t), {}, c()({}, e, ''))
                    })
                    var s = $($({}, n), {}, c()({}, e, [].concat(r()(n[e]), [t])))
                    return v({ updates: s, tweetId: E }), s
                  })
                }
              }
            },
            at = (null == Ae ? void 0 : Ae.misleading_tags) || [],
            rt = (null == Ae ? void 0 : Ae.not_misleading_tags) || [],
            ot = function (e) {
              return (
                ke &&
                '' !== e &&
                s.createElement(
                  P.a,
                  { style: Ie.errorContainer },
                  s.createElement(K.a, { style: Ie.errorIcon }),
                  s.createElement(L.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, e),
                )
              )
            },
            ct = s.createElement(
              P.a,
              null,
              s.createElement(
                P.a,
                { style: Ie.questionSection },
                s.createElement(
                  P.a,
                  { accessibilityLabel: Y.misleading_tags.label, accessibilityRole: 'group' },
                  s.createElement(L.b, { weight: 'bold' }, Y.misleading_tags.label, ' '),
                  Y.misleading_tags.options.map(function (e) {
                    return s.createElement(D.a, {
                      checked: at.includes(e.value),
                      key: e.value,
                      label: e.label,
                      onChange: nt('misleading_tags')(e.value),
                      style: Ie.checkbox,
                    })
                  }),
                  ot(Re.misleading_tags),
                ),
              ),
              fe.map(function (e) {
                return s.createElement(
                  P.a,
                  { key: Y[e].label, style: Ie.questionSection },
                  s.createElement(R.a, {
                    label: Y[e].label,
                    name: e,
                    onChange: tt(e),
                    options: Y[e].options,
                    value: Ae[e],
                  }),
                  ot(Re[e]),
                )
              }),
            ),
            it = s.createElement(
              P.a,
              { style: Ie.questionSection },
              s.createElement(
                P.a,
                { accessibilityLabel: Y.not_misleading_tags.label, accessibilityRole: 'group' },
                s.createElement(L.b, { weight: 'bold' }, Y.not_misleading_tags.label, ' '),
                Y.not_misleading_tags.options.map(function (e) {
                  return s.createElement(D.a, {
                    checked: rt.includes(e.value),
                    key: e.value,
                    label: e.label,
                    onChange: nt('not_misleading_tags')(e.value),
                    style: Ie.checkbox,
                  })
                }),
                ot(Re.not_misleading_tags),
              ),
            ),
            lt = function (e) {
              return (
                0 ===
                e.filter(function (e) {
                  return !!Re[e]
                }).length
              )
            },
            st = function () {
              var e = Ae.summary || ''
              return !(!lt(pe) || '' !== F(e)) && !!((dt === Z && lt(be)) || (dt === Q && lt(me)))
            },
            ut = function () {
              Ue(!0),
                i(E, Ae)
                  .then(function (e) {
                    if (e && e.error) {
                      var t = ''.concat(e.error, ': ').concat(JSON.stringify(e.reason || ''))
                      n({ text: t, withAutoDismiss: !1, withClearButton: !0 }),
                        Object(T.a)('BirdwatchNoteCreationFailure: '.concat(t)),
                        et('submit_failed'),
                        Ue(!1)
                    } else v({ updates: {}, tweetId: E }), y.replace(Je)
                  })
                  .catch(function (e) {
                    o({ defaultToast: { text: de, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })(e),
                      Ue(!1),
                      et('submit_failed'),
                      Object(T.a)('BirdwatchNoteCreationFailure: '.concat(JSON.stringify(e)))
                  })
            },
            dt = Ae.classification,
            ft = Ae.trustworthy_sources,
            pt = void 0 === ft ? '' : ft ? 'true' : 'false',
            bt = dt === Q,
            mt = !t.isTrue('responsive_web_birdwatch_hcomp_user'),
            ht = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            yt = _ && Object(O.a)(_, !0),
            gt = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                P.a,
                { style: Ie.tweetContainer },
                s.createElement(A.b, { displayPromotedContent: !1, tweetId: E, withCurationMenu: !1 }),
              ),
              s.createElement(
                P.a,
                { style: Ie.formQuestions },
                s.createElement(
                  P.a,
                  { style: Ie.questionSection },
                  s.createElement(R.a, {
                    label: Y.classification.label,
                    name: 'misleading_radio',
                    onChange: tt('classification'),
                    options: Y.classification.options,
                    value: dt,
                  }),
                  ot(Re.classification),
                ),
                dt === Z && ct,
                bt && it,
                !!dt &&
                  s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      P.a,
                      { style: Ie.questionSection },
                      s.createElement(
                        P.a,
                        { accessibilityLabel: bt ? ce : oe, accessibilityRole: 'group' },
                        s.createElement(L.b, { weight: 'bold' }, bt ? ce : oe),
                        s.createElement(L.b, { link: le }, ie),
                        s.createElement(B.a, {
                          calculateLength: H,
                          helperText: se,
                          invalid: !!Re.summary && ke,
                          label: ue,
                          maxNumberOfLines: 20,
                          multiline: !0,
                          name: 'FormTextInput',
                          numberOfLines: 5,
                          onBlur: function (e) {
                            v({ updates: Ae, tweetId: E })
                          },
                          onChange: function (e) {
                            var t = e.target.value
                            Pe(function (e) {
                              return $($({}, e), {}, { summary: t })
                            }),
                              Be(function (e) {
                                return $($({}, e), {}, { summary: F(t) })
                              })
                          },
                          style: Ie.textInput,
                          validLength: 280,
                          value: null == Ae ? void 0 : Ae.summary,
                        }),
                        ot(Re.summary),
                      ),
                    ),
                    s.createElement(
                      P.a,
                      { style: Ie.questionSection },
                      s.createElement(R.a, {
                        label: Y.trustworthy_sources.label,
                        name: 'trustworthy_sources_radio',
                        onChange: tt('trustworthy_sources'),
                        options:
                          (($e = Y.trustworthy_sources.options),
                          $e.map(function (e) {
                            return { label: e.label, value: e.value.toString() }
                          })),
                        value: pt,
                      }),
                      ot(Re.trustworthy_sources),
                    ),
                    mt &&
                      !ht &&
                      s.createElement(P.a, { style: Ie.callout }, s.createElement(N.a, { Icon: V.a, text: ne })),
                    mt &&
                      ht &&
                      yt &&
                      s.createElement(
                        P.a,
                        { style: Ie.callout },
                        s.createElement(N.a, {
                          Icon: X.a,
                          headline: ae({ displayAlias: yt }),
                          text: re,
                          withThumbnail: !0,
                        }),
                      ),
                    ke &&
                      !st() &&
                      s.createElement(
                        P.a,
                        { style: Ie.callout },
                        s.createElement(N.a, { Icon: K.a, text: ge, type: 'danger' }),
                      ),
                    s.createElement(
                      M.a,
                      {
                        disabled: We,
                        onPress: function () {
                          et('submit'), He(!0)
                          var e = (function () {
                            var e = z()(Ae.summary)
                            if (0 === (null == e ? void 0 : e.length)) return 'source'
                            var t = Ae.summary
                            return (
                              e.forEach(function (e) {
                                if (!t) return 'explanation'
                                t = t.replace(e, '')
                              }),
                              t && 0 !== t.trim().length ? null : 'explanation'
                            )
                          })()
                          st() && (e ? Ge(e) : ut())
                        },
                        style: Ie.submitButton,
                        type: 'brandFilled',
                      },
                      te,
                    ),
                  ),
              ),
            )
          return ht && Qe
            ? s.createElement(d.a, {
                onAliasSelected: function (e) {
                  Ye(e)
                },
              })
            : g
            ? s.createElement(j.a, { to: Je })
            : Xe
            ? s.createElement(k.a, {
                actionLabel: _e,
                graphic: 'source' === Xe ? G.a : q.a,
                graphicDisplayMode: 'thumbnail',
                headline: Ce[Xe],
                onAction: function () {
                  et('nudge_edit'), Ge(null)
                },
                onClose: function () {},
                onImpression: function () {
                  var e = x.a.forTweet(E)
                  a.scribe({ element: 'nudge', action: 'show', data: { targets: [e] } })
                },
                onTertiaryAction: function () {
                  et('nudge_submit'), ut()
                },
                subtext: je[Xe],
                tertiaryActionLabel: Te[Xe],
                withCloseButton: !1,
              })
            : s.createElement(
                S.b,
                {
                  history: y,
                  onBackClick: function () {
                    et('close'), y.goBack()
                  },
                  renderHeader: I.b.isTwitterApp()
                    ? function () {
                        return null
                      }
                    : void 0,
                  title: ee,
                },
                s.createElement(P.a, { style: Ie.contentWrapper }, gt),
              )
        },
        Ie = H.a.create(function (e) {
          return {
            callout: { marginTop: e.spaces.space12 },
            checkbox: { paddingVertical: e.spaces.space8 },
            contentWrapper: { backgroundColor: e.colors.cellBackground },
            errorContainer: { flexDirection: 'row' },
            errorIcon: { color: e.colors.magenta500, paddingRight: e.spaces.space12 },
            formQuestions: { paddingHorizontal: e.spaces.space36, paddingVertical: e.spaces.space16 },
            noteText: { backgroundColor: e.colors.gray50, padding: e.spaces.space12 },
            questionSection: { paddingBottom: e.spaces.space20 },
            submitButton: { marginVertical: e.spaces.space16 },
            textInput: { paddingHorizontal: 0 },
            tweetContainer: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
          }
        }),
        Pe = E(Ae)
      t.default = Pe
    },
    YI7k: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
    Yyvu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotAvailablePage', function () {
          return y
        })
      var a = n('ERkP'),
        r = n('vZpt'),
        o = n('L5MV'),
        c = n('3XMw'),
        i = n.n(c),
        l = n('VS6U'),
        s = n('MWbm'),
        u = n('FIs5'),
        d = n('rHpw'),
        f = i.a.b5711f09,
        p = i.a.e96677aa,
        b = i.a.f026d2ee,
        m = i.a.i859a9d3,
        h = { external: !0, pathname: 'https://twitter.github.io/birdwatch/join' },
        y = function (e) {
          var t = e.history,
            n = a.createElement(
              s.a,
              { style: g.contentWrapper },
              a.createElement(u.a, {
                buttonLink: h,
                buttonText: m,
                buttonType: 'brandOutlined',
                header: p,
                message: b,
              }),
            )
          return a.createElement(l.a, {
            TabBar: o.a,
            history: t,
            logoButton: a.createElement(a.Fragment, null),
            primaryContent: n,
            sidebarContent: a.createElement(r.a, null),
            title: f,
            withTweetButton: !1,
          })
        },
        g = d.a.create(function (e) {
          return { contentWrapper: { marginHorizontal: '100px' } }
        })
      t.default = y
    },
    ZD0R: function (e, t, n) {
      'use strict'
      var a,
        r,
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('N+ot'),
        b = n.n(p),
        m = n('AuHH'),
        h = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = n('ddV6'),
        w = n.n(v),
        E = (n('jQ3i'), n('x4t0'), n('2G9S'), n('OZaJ'), n('ERkP')),
        O = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        S = n.n(O),
        _ = (n('z84I'), n('7x/C'), n('DZ+c'), n('LW0h'), n('v6aA')),
        C = n('MvLc'),
        j = n('rxPX'),
        T = n('0KEI'),
        x = Object(j.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: C.b,
              deleteRating: C.d,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        A = n('ACNv'),
        I = n('YeIG'),
        P = n('MWbm'),
        L = n('t62R'),
        D = n('XiMS'),
        R = n('fyvP'),
        B = n('/yvb'),
        N = n('IG7M'),
        M = n('rHpw'),
        k = (n('yH/f'), n('3XMw')),
        H = n.n(k),
        F = Object.freeze({
          Informative: 'Informative',
          Clear: 'Clear',
          Empathetic: 'Empathetic',
          GoodSources: 'GoodSources',
          UniqueContext: 'UniqueContext',
          AddressesClaim: 'AddressesClaim',
          ImportantContext: 'ImportantContext',
          UnbiasedLanguage: 'UnbiasedLanguage',
          Other: 'Other',
        }),
        z = [F.Informative, F.Clear, F.Empathetic, F.GoodSources, F.UniqueContext, F.Other],
        W =
          ((a = {}),
          g()(a, F.Clear, H.a.dfa44ddd),
          g()(a, F.Empathetic, H.a.hc2b6a7e),
          g()(a, F.GoodSources, H.a.a7bc3191),
          g()(a, F.Informative, H.a.f3e6f0a9),
          g()(a, F.Other, H.a.c365dcc5),
          g()(a, F.UniqueContext, H.a.c5d55592),
          a),
        U = Object.freeze({
          NoSources: 'NoSources',
          Incorrect: 'Incorrect',
          Outdated: 'Outdated',
          Biased: 'Biased',
          MissingKeyPoints: 'MissingKeyPoints',
          Unclear: 'Unclear',
          Rude: 'Rude',
          OffTopic: 'OffTopic',
          TwitterViolationAny: 'TwitterViolationAny',
          IrrelevantSources: 'IrrelevantSources',
          OpinionSpeculation: 'OpinionSpeculation',
          NoteNotNeeded: 'NoteNotNeeded',
          Other: 'Other',
        }),
        K = [
          U.NoSources,
          U.Incorrect,
          U.Outdated,
          U.Biased,
          U.MissingKeyPoints,
          U.Unclear,
          U.Rude,
          U.OffTopic,
          U.TwitterViolationAny,
          U.Other,
        ],
        V =
          ((r = {}),
          g()(r, U.Biased, H.a.bbe8b4ac),
          g()(r, U.Incorrect, H.a.heb35e12),
          g()(r, U.MissingKeyPoints, H.a.c34e0b2b),
          g()(r, U.NoSources, H.a.a802709f),
          g()(r, U.OffTopic, H.a.dd1f17e9),
          g()(r, U.Outdated, H.a.if966b54),
          g()(r, U.Other, H.a.c365dcc5),
          g()(r, U.Rude, H.a.d0ba7db4),
          g()(r, U.TwitterViolationAny, H.a.aa520d31),
          g()(r, U.Unclear, H.a.e25e5ed1),
          r),
        X = n('hiGS'),
        G = n('TW8A'),
        q = n('WtWS')
      function Z(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Y = H.a.ed5156f9,
        J = [
          { label: H.a.b7ec04f3, value: !0 },
          { label: H.a.i62a03aa, value: !1 },
        ],
        $ = {
          helpful: { label: H.a.a7338bc2, options: J },
          agree: { label: H.a.d93489e6, options: J },
          helpful_tags: {
            label: H.a.j63844f5,
            options: z.map(function (e) {
              return { label: W[e], value: e }
            }),
          },
          not_helpful_tags: {
            label: H.a.e0806a48,
            options: K.map(function (e) {
              return { label: V[e], value: e }
            }),
          },
        },
        ee = H.a.a91bb144,
        te = H.a.abd845fd,
        ne = H.a.d96cf7cd,
        ae = H.a.j6aa6172,
        re = H.a.i411275f,
        oe = H.a.d1a479a8,
        ce = function (e) {
          return e.map(function (e) {
            return { label: e.label, value: e.value.toString() }
          })
        },
        ie = E.createElement(L.b, { weight: 'bold' }),
        le = E.createElement(L.b, { weight: 'bold' }),
        se = E.createElement(L.b, { weight: 'bold' }),
        ue = E.createElement(L.b, { weight: 'bold' }),
        de = E.createElement(H.a.I18NFormatMessage, { $i18n: 'if77e237' }, E.cloneElement(se, null, H.a.a43beaf2)),
        fe = E.createElement(H.a.I18NFormatMessage, { $i18n: 'c312ca7d' }, E.cloneElement(ue, null, H.a.cb1d0ef3)),
        pe = E.createElement(H.a.I18NFormatMessage, { $i18n: 'j575fa79' }, E.cloneElement(ie, null, H.a.he5f1491)),
        be = E.createElement(H.a.I18NFormatMessage, { $i18n: 'h61f9ad3' }, E.cloneElement(le, null, H.a.a67e7d91)),
        me = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'd570f1d9' },
          E.cloneElement(se, null, H.a.c9c4850a),
          E.cloneElement(ie, null, H.a.ffa975fd),
        ),
        he = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'c6cb9513' },
          E.cloneElement(se, null, H.a.c9701442),
          E.cloneElement(le, null, H.a.d2be9800),
        ),
        ye = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'fe957a43' },
          E.cloneElement(ue, null, H.a.cf87d556),
          E.cloneElement(ie, null, H.a.hec80c95),
        ),
        ge = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'gbfec7fd' },
          E.cloneElement(ue, null, H.a.bfa5f565),
          E.cloneElement(le, null, H.a.eb1cc800),
        ),
        ve = M.a.create(function (e) {
          return {
            button: { alignSelf: 'center' },
            checkbox: { paddingVertical: e.spaces.space8 },
            checkboxContainer: { paddingTop: e.spaces.space12 },
            icon: { color: e.colors.primary, paddingRight: e.spaces.space12 },
            root: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.xLarge, padding: e.spaces.space16 },
            row: { flex: 1, flexDirection: 'row', width: '100%' },
            showSubmittedRating: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        we = x(function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            a = e.createRating,
            r = e.deleteRating,
            o = e.noteId,
            c = e.rating,
            i = E.useContext(_.a).featureSwitches,
            l = c || {},
            s = E.useState(l),
            u = w()(s, 2),
            d = u[0],
            f = u[1],
            p = E.useState(Object(I.a)(c)),
            b = w()(p, 2),
            m = b[0],
            h = b[1],
            y = function (e) {
              return function (t, n) {
                f(function (t) {
                  var a = n
                  return 'true' === n ? (a = !0) : 'false' === n && (a = !1), Q(Q({}, t), {}, g()({}, e, a))
                })
              }
            },
            v = function (e) {
              var t = d[e] || []
              return E.createElement(
                P.a,
                { style: ve.checkboxContainer },
                E.createElement(L.b, { weight: 'bold' }, $[e].label),
                $[e].options.map(function (n) {
                  return E.createElement(D.a, {
                    checked: t.includes(n.value),
                    key: n.value,
                    label: n.label,
                    onChange: j(e)(n.value),
                    style: ve.checkbox,
                  })
                }),
              )
            },
            O = function () {
              T('delete'),
                r(o)
                  .then(function (e) {
                    'Done' === e.birdwatchnote_rating_delete && (f({}), h(!0))
                  })
                  .catch(n())
            },
            C = function () {
              T('edit'), h(!0)
            },
            j = function (e) {
              return function (t) {
                return function () {
                  f(function (n) {
                    return n[e]
                      ? n[e].includes(t)
                        ? Q(
                            Q({}, n),
                            {},
                            g()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : Q(Q({}, n), {}, g()({}, e, [].concat(S()(n[e]), [t])))
                      : Q(Q({}, n), {}, g()({}, e, [t]))
                  })
                }
              }
            },
            T = function (e) {
              t.scribeAction('click_'.concat(e))
            },
            x = void 0 !== (null == d ? void 0 : d.helpful),
            M = x ? (null != d && d.helpful ? 'true' : 'false') : '',
            k = void 0 !== (null == d ? void 0 : d.agree),
            H = k ? (null != d && d.agree ? 'true' : 'false') : ''
          return m
            ? E.createElement(
                P.a,
                { style: ve.root },
                E.createElement(R.a, {
                  label: $.helpful.label,
                  name: $.helpful.label + o,
                  onChange: y('helpful'),
                  options: ce(J),
                  value: M,
                }),
                x && (null != d && d.helpful ? v('helpful_tags') : v('not_helpful_tags')),
                E.createElement(R.a, {
                  label: $.agree.label,
                  name: $.agree.label + o,
                  onChange: y('agree'),
                  options: ce(J),
                  value: H,
                }),
                !Object(I.a)(d) &&
                  E.createElement(
                    B.a,
                    {
                      onClick: function () {
                        T('submit'),
                          d &&
                            a(o, d)
                              .then(function () {
                                h(!1)
                              })
                              .catch(
                                n({
                                  defaultToast: { text: Y, withAutoDismiss: !1, withClearButton: !0 },
                                  showToast: !0,
                                }),
                              )
                      },
                      style: ve.button,
                      type: 'brandFilled',
                    },
                    ee,
                  ),
              )
            : E.createElement(
                P.a,
                { style: [ve.root, ve.showSubmittedRating] },
                E.createElement(
                  P.a,
                  { style: ve.row },
                  E.createElement(q.a, { style: ve.icon }),
                  E.createElement(
                    L.b,
                    { size: 'subtext2' },
                    null != d && d.helpful && !k
                      ? de
                      : (null != d && d.helpful) || k
                      ? null != d && d.agree && !x
                        ? pe
                        : (null != d && d.agree) || x
                        ? null != d && d.helpful && null != d && d.agree
                          ? me
                          : null == d || !d.helpful || (null != d && d.agree)
                          ? (null != d && d.helpful) || null == d || !d.agree
                            ? (null != d && d.helpful) || (null != d && d.agree)
                              ? void 0
                              : ge
                            : ye
                          : he
                        : be
                      : fe,
                  ),
                ),
                E.createElement(N.a, {
                  renderActionMenu: function (e) {
                    return E.createElement(A.default, {
                      actionItems:
                        ((t = []),
                        t.push({
                          confirmation: { label: ne, headline: ae, text: re, confirmButtonType: 'destructiveFilled' },
                          isEmphasized: !0,
                          text: ne,
                          Icon: X.a,
                          onClick: O,
                        }),
                        i.isTrue('responsive_web_birdwatch_ratings_v2_enabled')
                          ? t.push({ disabled: !0, text: te, subText: oe, Icon: G.a })
                          : t.push({ text: te, Icon: G.a, onClick: C }),
                        t),
                      onClose: e,
                    })
                    var t
                  },
                }),
              )
        }),
        Ee = (n('uFXj'), n('xZGM')),
        Oe = n('1YZw'),
        Se = Object(j.a)()
          .propsFromState(function () {
            return {
              shouldShowDataPrivacyPrompt: function (e, t) {
                return Object(Ee.y)(e, Ee.c)
              },
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: Ee.v,
              addToast: Oe.b,
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              createRating: C.b,
              deleteRating: C.d,
            }
          })
          .withAnalytics({ component: 'birdwatch_rating' }),
        _e = n('cHvH'),
        Ce = n('h0NW'),
        je = n('feu+')
      function Te(e) {
        var t,
          n,
          a = H.a.a7bc3191,
          r = H.a.a26f8dc1,
          o = H.a.d89cfe9e,
          c = H.a.faa5f9e7,
          i = H.a.c365dcc5
        return e
          ? ((t = {}),
            g()(t, F.GoodSources, a),
            g()(t, F.Clear, r),
            g()(t, F.AddressesClaim, o),
            g()(t, F.ImportantContext, c),
            g()(t, F.UnbiasedLanguage, H.a.gf3b38f4),
            g()(t, F.Other, i),
            t)
          : ((n = {}),
            g()(n, F.GoodSources, a),
            g()(n, F.Clear, r),
            g()(n, F.AddressesClaim, o),
            g()(n, F.ImportantContext, c),
            g()(n, F.Other, i),
            n)
      }
      function xe(e) {
        return Object.keys(Te(e))
      }
      function Ae(e) {
        var t,
          n,
          a = H.a.ef490ae8,
          r = H.a.bf3dc461,
          o = H.a.heb35e12,
          c = H.a.ib117531,
          i = H.a.c365dcc5
        return e
          ? ((t = {}),
            g()(t, U.NoSources, a),
            g()(t, U.IrrelevantSources, r),
            g()(t, U.Incorrect, o),
            g()(t, U.OpinionSpeculation, H.a.h7c59ea2),
            g()(t, U.Unclear, H.a.d60c0063),
            g()(t, U.MissingKeyPoints, H.a.e06416c9),
            g()(t, U.Rude, H.a.cff1aa8b),
            g()(t, U.NoteNotNeeded, H.a.cc443e25),
            g()(t, U.TwitterViolationAny, c),
            g()(t, U.Other, i),
            t)
          : ((n = {}),
            g()(n, U.NoSources, a),
            g()(n, U.IrrelevantSources, r),
            g()(n, U.Incorrect, o),
            g()(n, U.Unclear, H.a.d60c0063),
            g()(n, U.MissingKeyPoints, H.a.c34e0b2b),
            g()(n, U.Rude, H.a.d24b99ed),
            g()(n, U.TwitterViolationAny, c),
            g()(n, U.Other, i),
            n)
      }
      function Ie(e) {
        return Object.keys(Ae(e))
      }
      var Pe = n('EQ/a'),
        Le = n('DlMI')
      function De(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Be = H.a.ed5156f9,
        Ne = [
          { label: H.a.b7ec04f3, value: 'Helpful' },
          { label: H.a.i26425d8, value: 'SomewhatHelpful' },
          { label: H.a.i62a03aa, value: 'NotHelpful' },
        ],
        Me = H.a.a91bb144,
        ke = H.a.abd845fd,
        He = H.a.d96cf7cd,
        Fe = H.a.j6aa6172,
        ze = H.a.i411275f,
        We = H.a.e2988ed0,
        Ue = H.a.c1a50438,
        Ke = H.a.d2ae3d42,
        Ve = H.a.c01f8d12,
        Xe = H.a.e21a6afe,
        Ge = H.a.d57ed9c7,
        qe = H.a.b165ae7b,
        Ze = E.createElement(L.b, { weight: 'bold' }),
        Qe = E.createElement(L.b, {
          link: 'https://twitter.github.io/birdwatch/about/overview/#transparency-and-visibility',
          withInteractiveStyling: !0,
          withUnderline: !0,
        }),
        Ye = E.createElement(
          H.a.I18NFormatMessage,
          { $i18n: 'ca2f5036' },
          E.cloneElement(Ze, null, H.a.e0440086),
          E.cloneElement(Qe, null, H.a.e30eecce),
        ),
        Je = E.createElement(L.b, { weight: 'bold' }),
        $e = E.createElement(L.b, { weight: 'bold' }),
        et = E.createElement(L.b, { weight: 'bold' }),
        tt = E.createElement(H.a.I18NFormatMessage, { $i18n: 'had203a8' }, E.cloneElement(Je, null, H.a.f2ceaed4)),
        nt = E.createElement(H.a.I18NFormatMessage, { $i18n: 'h42a21df' }, E.cloneElement($e, null, H.a.i7d91dc8)),
        at = E.createElement(H.a.I18NFormatMessage, { $i18n: 'c3d1a1b0' }, E.cloneElement(et, null, H.a.c206a60f)),
        rt = M.a.create(function (e) {
          return {
            button: { alignSelf: 'center' },
            checkbox: { paddingVertical: e.spaces.space8 },
            checkboxContainer: { paddingTop: e.spaces.space12 },
            helpfulButtons: { flex: 'auto', marginHorizontal: e.spaces.space2 },
            helpfulContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            helpfulOptions: { flexDirection: 'row' },
            helpfulQuestionMobile: { paddingBottom: e.spaces.space8 },
            icon: { color: e.colors.primary, paddingRight: e.spaces.space12 },
            iconDataPrivacy: {
              color: e.colors.primary,
              height: e.spaces.space20,
              width: e.spaces.space20,
              paddingTop: e.spaces.space4,
              paddingRight: e.spaces.space20,
            },
            infoItemContainer: { paddingHorizontal: 0 },
            root: {
              backgroundColor: e.colors.gray0,
              borderRadius: e.borderRadii.xLarge,
              marginTop: e.spaces.space4,
              padding: e.spaces.space16,
            },
            row: { alignItems: 'center', flex: 1, flexDirection: 'row', width: '100%' },
            showSubmittedRating: { flexDirection: 'row', justifyContent: 'space-between' },
          }
        }),
        ot = {
          accessibilityLabel: Ke,
          containerStyle: rt.infoItemContainer,
          items: [
            { label: '', decoration: E.createElement(Pe.a, { style: rt.iconDataPrivacy }), description: qe },
            { label: '', decoration: E.createElement(Le.a, { style: rt.iconDataPrivacy }), description: Ye },
          ],
        },
        ct = Se(function (e) {
          var t = e.addFlag,
            n = e.addToast,
            a = e.analytics,
            r = e.createLocalApiErrorHandler,
            o = e.createRating,
            c = e.deleteRating,
            i = e.noteId,
            l = e.rating,
            s = e.ratingSurvey,
            u = e.shouldShowDataPrivacyPrompt,
            d = E.useContext(_.a).featureSwitches,
            f = E.useState(l),
            p = w()(f, 2),
            b = p[0],
            m = p[1],
            h = E.useState(Object(I.a)(l)),
            y = w()(h, 2),
            v = y[0],
            O = y[1],
            C = E.useState(!1),
            j = w()(C, 2),
            T = j[0],
            x = j[1],
            R = d.isTrue('responsive_web_birdwatch_ratings_m2_tags_enabled'),
            k = {
              helpful: { label: H.a.a7338bc2, options: Ne },
              helpful_tags: {
                label: H.a.ac7f9745,
                options: xe(R).map(function (e) {
                  return { label: Te(R)[e], value: e }
                }),
              },
              not_helpful_tags: {
                label: H.a.c7751803,
                options: Ie(R).map(function (e) {
                  return { label: Ae(R)[e], value: e }
                }),
              },
            },
            F = function (e) {
              a.scribeAction('click_'.concat(e))
            },
            z = function () {
              F('delete'),
                c(i)
                  .then(function (e) {
                    if ('Done' === e.birdwatchnote_rating_delete) {
                      var t = Object.freeze({})
                      m(t), O(!0)
                    }
                  })
                  .catch(r())
            },
            W = function () {
              F('edit'), O(!0)
            },
            K = function () {
              var e, t
              ;(F('submit'),
              o(i, b)
                .then(function () {
                  O(!1)
                })
                .catch(r({ defaultToast: { text: Be, withAutoDismiss: !1, withClearButton: !0 }, showToast: !0 })),
              d.isTrue('responsive_web_birdwatch_rating_mini_survey_enabled') &&
                !Object(I.a)(null == s ? void 0 : s.url)) &&
                ((null !== (e = b.helpful_tags) && void 0 !== e && e.includes('Other')) ||
                  (null !== (t = b.not_helpful_tags) && void 0 !== t && t.includes('Other')) ||
                  Math.random() < 0.05) &&
                n({
                  text: We,
                  action: { label: Ue, link: null == s ? void 0 : s.url },
                  withAutoDismiss: !0,
                  withClearButton: !0,
                })
            },
            V = function (e) {
              return function (t) {
                return function () {
                  m(function (n) {
                    return n[e]
                      ? n[e].includes(t)
                        ? Re(
                            Re({}, n),
                            {},
                            g()(
                              {},
                              e,
                              n[e].filter(function (e) {
                                return e !== t
                              }),
                            ),
                          )
                        : Re(Re({}, n), {}, g()({}, e, [].concat(S()(n[e]), [t])))
                      : Re(Re({}, n), {}, g()({}, e, [t]))
                  })
                }
              }
            },
            Z = function (e) {
              var t = (b && b[e]) || []
              return E.createElement(
                P.a,
                { style: rt.checkboxContainer },
                E.createElement(L.b, { weight: 'bold' }, k[e].label),
                k[e].options.map(function (n) {
                  return (
                    !(
                      'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level) &&
                      n.value === U.TwitterViolationAny
                    ) &&
                    E.createElement(D.a, {
                      checked: t.includes(n.value),
                      key: n.value,
                      label: n.label,
                      onChange: V(e)(n.value),
                      style: rt.checkbox,
                    })
                  )
                }),
              )
            },
            Q = E.createElement(_e.a, null, function (e) {
              var t = e.windowWidth <= M.a.theme.breakpoints.small
              return E.createElement(
                P.a,
                { style: !t && rt.helpfulContainer },
                E.createElement(L.b, { style: t && rt.helpfulQuestionMobile, weight: 'bold' }, k.helpful.label),
                E.createElement(
                  P.a,
                  { style: rt.helpfulOptions },
                  Ne.map(function (e) {
                    return E.createElement(
                      B.a,
                      {
                        key: e.value,
                        onClick:
                          ((t = e.value),
                          function () {
                            m(function (e) {
                              return Re(Re({}, e), {}, { helpfulness_level: t })
                            })
                          }),
                        size: 'small',
                        style: rt.helpfulButtons,
                        type: (null == b ? void 0 : b.helpfulness_level) === e.value ? 'brandFilled' : 'brandOutlined',
                      },
                      e.label,
                    )
                    var t
                  }),
                ),
              )
            }),
            Y = E.createElement(Ce.a, ot),
            J = E.createElement(je.a, {
              actionLabel: Ve,
              headline: Ge,
              isFullHeightOnMobile: !0,
              onAction: function () {
                K(), t(Ee.c), x(!1)
              },
              onSecondaryAction: function () {
                return x(!1)
              },
              secondaryActionLabel: Xe,
              subtext: Y,
            }),
            $ = void 0 !== (null == b ? void 0 : b.helpfulness_level),
            ee =
              $ &&
              ('Helpful' === (null == b ? void 0 : b.helpfulness_level) ||
                'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level)),
            te =
              $ &&
              ('NotHelpful' === (null == b ? void 0 : b.helpfulness_level) ||
                'SomewhatHelpful' === (null == b ? void 0 : b.helpfulness_level))
          return E.createElement(
            E.Fragment,
            null,
            T ? J : null,
            v
              ? E.createElement(
                  P.a,
                  { style: rt.root },
                  Q,
                  ee && Z('helpful_tags'),
                  te && Z('not_helpful_tags'),
                  !Object(I.a)(b) &&
                    E.createElement(
                      B.a,
                      {
                        onClick: function () {
                          u && d.isTrue('responsive_web_birdwatch_rating_crowd_enabled') ? x(!0) : b && K()
                        },
                        style: rt.button,
                        type: 'brandFilled',
                      },
                      Me,
                    ),
                )
              : E.createElement(
                  P.a,
                  { style: [rt.root, rt.showSubmittedRating] },
                  E.createElement(
                    P.a,
                    { style: rt.row },
                    E.createElement(q.a, { style: rt.icon }),
                    E.createElement(
                      L.b,
                      { size: 'subtext2' },
                      (function () {
                        switch (null == b ? void 0 : b.helpfulness_level) {
                          case 'Helpful':
                            return tt
                          case 'SomewhatHelpful':
                            return nt
                          case 'NotHelpful':
                            return at
                          default:
                            return
                        }
                      })(),
                    ),
                  ),
                  E.createElement(N.a, {
                    renderActionMenu: function (e) {
                      return E.createElement(A.default, {
                        actionItems:
                          ((t = []),
                          t.push({
                            confirmation: { label: He, headline: Fe, text: ze, confirmButtonType: 'destructiveFilled' },
                            isEmphasized: !0,
                            text: He,
                            Icon: X.a,
                            onClick: z,
                          }),
                          t.push({ text: ke, Icon: G.a, onClick: W }),
                          t),
                        onClose: e,
                      })
                      var t
                    },
                  }),
                ),
          )
        }),
        it = n('xSpP'),
        lt = n('XOJV'),
        st = function (e, t) {
          var n,
            a = null === (n = t.note) || void 0 === n ? void 0 : n.tweet
          return a ? lt.a.selectFetchStatus(e, a.rest_id) : void 0
        },
        ut = Object(j.a)()
          .propsFromState(function () {
            return { tweetFetchStatus: st, userAlias: C.x }
          })
          .propsFromActions(function () {
            return {
              addToast: Oe.b,
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              deleteNote: it.b,
              fetchTweet: lt.a.fetchOneIfNeeded,
              fetchUserAlias: C.k,
            }
          })
          .withAnalytics({ component: 'birdwatch_note' }),
        dt = n('eqZz'),
        ft = n('W6+M'),
        pt = n('yrzJ'),
        bt = n('sgih')
      function mt(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return b()(this, n)
        }
      }
      var ht = H.a.e4579709,
        yt = H.a.df587b98,
        gt = H.a.fd284b08,
        vt = H.a.h201bdc8,
        wt = H.a.fe1f6043,
        Et = H.a.ia5e7487,
        Ot = H.a.j58e7b00,
        St = (function (e) {
          f()(n, e)
          var t = mt(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.alias,
                    n = e.closeNoteDetails,
                    a = e.created_at,
                    r = e.rest_id,
                    o = e.userBadges,
                    c = this.context.featureSwitches,
                    i = c.isTrue('responsive_web_birdwatch_note_awards_enabled'),
                    l = c.isTrue('responsive_web_birdwatch_aliases_enabled'),
                    s = i && o && o.length > 0,
                    u = E.createElement(
                      P.a,
                      { style: _t.noteDetailsContainer },
                      E.createElement(
                        P.a,
                        { style: _t.noteDetailsHeader },
                        E.createElement(L.b, { size: 'headline1', weight: 'bold' }, ht),
                      ),
                      E.createElement(
                        P.a,
                        { style: _t.noteDetails },
                        E.createElement(
                          P.a,
                          { style: [_t.noteDetailsSection, _t.noteDetailsSectionBorder] },
                          E.createElement(L.b, { color: 'normal', style: _t.noteDetailsText }, yt),
                          E.createElement(L.b, { style: _t.noteDetailsContentText }, r),
                        ),
                        E.createElement(
                          P.a,
                          { style: [_t.noteDetailsSection, _t.noteDetailsSectionBorder] },
                          E.createElement(L.b, { color: 'normal', style: _t.noteDetailsText }, vt),
                          l
                            ? E.createElement(
                                L.b,
                                { color: 'gray700', dir: 'ltr', numberOfLines: 1, style: _t.profileText },
                                Object(ft.a)(t),
                              )
                            : E.createElement(pt.a, { screenName: t }),
                          l &&
                            E.createElement(
                              L.b,
                              {
                                color: 'link',
                                link: '/i/birdwatch/u/'.concat(t),
                                onClick: n,
                                style: _t.viewProfileLink,
                              },
                              Ot,
                            ),
                        ),
                        E.createElement(
                          P.a,
                          {
                            style: [_t.noteDetailsSection, s ? _t.noteDetailsSectionBorder : _t.noteDetailsSectionLast],
                          },
                          E.createElement(L.b, { color: 'normal', style: _t.noteDetailsText }, wt),
                          E.createElement(
                            L.b,
                            { style: _t.noteDetailsContentText },
                            (function (e) {
                              if (!e) return ''
                              var t = new Date(e).toLocaleString('default', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                }),
                                n = new Date(e).toLocaleString('default', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  second: '2-digit',
                                })
                              return ''.concat(t, ' ').concat(n)
                            })(a),
                          ),
                        ),
                        s &&
                          E.createElement(
                            P.a,
                            { style: [_t.noteDetailsSection, _t.noteDetailsSectionLast] },
                            E.createElement(L.b, { color: 'normal', style: _t.awardDetailsText }, gt),
                            o
                              ? o.map(function (e, t) {
                                  return E.createElement(dt.a, { badgeType: e, key: t })
                                })
                              : null,
                          ),
                        E.createElement(P.a, { style: _t.contentSpacer }),
                      ),
                      E.createElement(
                        P.a,
                        { style: _t.noteDetailsButtonSection },
                        E.createElement(P.a, { style: _t.buttonSpacer }),
                        E.createElement(B.a, { onClick: n, style: _t.noteDetailsButton, type: 'brandFilled' }, Et),
                      ),
                    )
                  return E.createElement(_e.a, null, function (e) {
                    var t = e.windowWidth
                    return E.createElement(bt.a, {
                      allowBackNavigation: !0,
                      children: u,
                      onMaskClick: n,
                      type: t >= M.a.theme.breakpoints.medium ? 'center' : 'full',
                      withMask: !0,
                    })
                  })
                },
              },
            ]),
            n
          )
        })(E.Component)
      g()(St, 'contextType', _.a)
      var _t = M.a.create(function (e) {
          return {
            awardDetailsText: { marginBottom: e.spaces.space8 },
            noteDetails: { alignItems: 'flex-start', display: 'flex', paddingHorizontal: e.spaces.space8 },
            noteDetailsButton: { width: '100%' },
            noteDetailsButtonSection: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
              padding: e.spaces.space16,
            },
            noteDetailsContainer: { display: 'flex', height: '100%' },
            noteDetailsContentText: { color: e.colors.gray700 },
            noteDetailsHeader: { textAlign: 'center', marginTop: e.spaces.space32, marginBottom: e.spaces.space16 },
            noteDetailsSection: { alignItems: 'flex-start', padding: e.spaces.space16, width: '100%' },
            noteDetailsSectionBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            noteDetailsSectionLast: { paddingBottom: 0 },
            noteDetailsText: { marginBottom: e.spaces.space4 },
            viewProfileLink: { marginTop: e.spaces.space4 },
            contentSpacer: { flex: 1, minHeight: e.spaces.space32 },
            buttonSpacer: { flex: 1 },
            profileText: { textTransform: 'capitalize' },
          }
        }),
        Ct = St,
        jt = n('b5s6'),
        Tt = n('rcen'),
        xt = n('Rp9C'),
        At = 'helpfulRatingTags',
        It = 'notHelpfulRatingTags',
        Pt = 'ratingStatus',
        Lt = n('pjBI'),
        Dt = n('GBcw'),
        Rt = n('htQn'),
        Bt = n('zIWA'),
        Nt = n('/WPq'),
        Mt = n('x0mb'),
        kt = n('fBGZ'),
        Ht = n('Lsrn'),
        Ft = n('k/Ka')
      function zt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? zt(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : zt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ut = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Ft.a)(
          'svg',
          Wt(
            Wt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ht.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          E.createElement(
            'g',
            null,
            E.createElement('path', {
              d: 'M8 20V5.8l2.7 2.7c.3.3.8.3 1.1 0s.3-.8 0-1.1l-4-4c-.3-.2-.8-.2-1.1.1l-4 4c-.1.1-.2.3-.2.5s.1.4.2.5c.3.3.8.3 1.1 0l2.7-2.7V20c0 .4.3.8.8.8s.7-.4.7-.8zm9.3.5l4-4c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-2.7 2.7V4c0-.4-.3-.8-.8-.8s-.7.4-.7.8v14.2l-2.7-2.7c-.3-.3-.8-.3-1.1 0-.1.1-.2.3-.2.5s.1.4.2.5l4 4c.3.3.8.3 1.1 0z',
            }),
          ),
        )
      }
      Ut.metadata = { width: 24, height: 24 }
      var Kt = Ut,
        Vt = n('Nh1N')
      function Xt(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return b()(this, n)
        }
      }
      var Gt = H.a.d96cf7cd,
        qt = H.a.e272836c,
        Zt = H.a.e4579709,
        Qt = H.a.fa0d3ee3,
        Yt = H.a.ccf2f24e,
        Jt = H.a.df321fc3,
        $t = E.createElement(L.b, { color: 'primary' }, Jt),
        en = H.a.gdcbac31,
        tn = H.a.be86e75d,
        nn = H.a.f2d93c3d,
        an = H.a.d1dd62ac,
        rn = H.a.b664c554,
        on = H.a.ab66e1f2,
        cn = H.a.b2792b8c,
        ln = H.a.d49cbe9f,
        sn = H.a.hfd2544f,
        un = H.a.b9e1cf02,
        dn = H.a.cfd2f35d,
        fn = 'CurrentlyRatedHelpful',
        pn = 'CurrentlyRatedNotHelpful',
        bn = 'NeedsMoreRatings',
        mn = function (e, t, n) {
          switch (e) {
            case fn:
              if (2 === t.length) {
                var a = w()(t, 2),
                  r = a[0],
                  o = a[1],
                  c = xe(!0),
                  i = Te(!0),
                  l = c.includes(r) ? i[r] : W[r],
                  s = c.includes(o) ? i[o] : W[o],
                  u = ''.concat(l, ' · ').concat(s)
                return l && s
                  ? E.createElement(
                      L.b,
                      { color: 'gray700', hoverLabel: { label: u }, size: 'subtext2', style: gn.ratingTag, testID: At },
                      u,
                    )
                  : null
              }
              return null
            case pn:
              if (2 === n.length) {
                var d = w()(n, 2),
                  f = d[0],
                  p = d[1],
                  b = Ie(!0).includes(f) ? Ae(!0)[f] : V[f],
                  m = Ie(!0).includes(p) ? Ae(!0)[p] : V[p],
                  h = ''.concat(b, ' · ').concat(m)
                return b && m
                  ? E.createElement(
                      L.b,
                      { color: 'gray700', hoverLabel: { label: h }, size: 'subtext2', style: gn.ratingTag, testID: It },
                      h,
                    )
                  : null
              }
              return null
            default:
              return null
          }
        },
        hn = function (e, t) {
          return E.createElement(
            P.a,
            { style: gn.ratingInfoItem, testID: Pt },
            vn(e),
            E.createElement(L.b, { size: 'subtext2', weight: 'bold' }, t),
          )
        },
        yn = (function (e) {
          f()(n, e)
          var t = Xt(n)
          function n(e, a) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e, a)),
              g()(u()(r), '_handleFetchTweet', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweet,
                  a = e.note.tweet,
                  o = null == a ? void 0 : a.rest_id
                o && n(o).catch(t())
              }),
              g()(u()(r), '_isOwner', function () {
                var e,
                  t = r.props,
                  n = t.note,
                  a = t.userAlias,
                  o = null == n || null === (e = n.birdwatch_profile) || void 0 === e ? void 0 : e.alias
                return !(!a || !o) && o === a
              }),
              g()(u()(r), '_handleDeleteConfirm', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.deleteNote,
                  a = e.handleDelete,
                  o = e.note,
                  c = o.birdwatch_profile,
                  i = o.rest_id
                r._scribeOnClick('delete')(),
                  null != c &&
                    c.alias &&
                    r._isOwner() &&
                    n(i)
                      .then(function (e) {
                        null == a || a(i)
                      })
                      .catch(t())
              }),
              g()(u()(r), '_getMenuActionItems', function () {
                var e = r.props.note,
                  t = e.birdwatch_profile,
                  n = e.rest_id,
                  a = []
                return (
                  null != t &&
                    t.alias &&
                    r._isOwner() &&
                    a.push({
                      confirmation: { label: Gt, headline: qt, text: Qt, confirmButtonType: 'destructiveFilled' },
                      isEmphasized: !0,
                      text: Gt,
                      Icon: X.a,
                      onClick: r._handleDeleteConfirm,
                    }),
                  a.push({
                    text: Yt,
                    Icon: Bt.a,
                    link: { pathname: 'https://help.twitter.com/en/forms/birdwatch?note_id='.concat(n) },
                    onClick: r._scribeOnClick('report'),
                  }),
                  a.push({ text: Zt, Icon: Nt.a, onClick: r._onNoteDetailsClick }),
                  a
                )
              }),
              g()(u()(r), '_onNoteDetailsClick', function () {
                r.setState({ noteDetailsOpen: !0 }), r._scribeOnClick('note_details')
              }),
              g()(u()(r), '_renderCurationActionMenu', function (e) {
                return E.createElement(A.default, { actionItems: r._getMenuActionItems(), onClose: e })
              }),
              g()(u()(r), '_scribeOnClick', function (e) {
                return function () {
                  var t = r.props,
                    n = t.analytics,
                    a = t.note.tweet
                  if (a) {
                    var o = xt.a.forTweet(a.rest_id)
                    n.scribe({ element: e, action: 'click', data: { targets: [o] } })
                  }
                }
              }),
              g()(u()(r), '_handleRequestAppeal', function () {}),
              g()(u()(r), '_handleOpenAppealsModal', function () {
                r.setState({ appealsRequestOpen: !0 })
              }),
              g()(u()(r), '_handleCloseAppealsModal', function () {
                r.setState({ appealsRequestOpen: !1 })
              }),
              g()(u()(r), '_renderAppealsModal', function () {
                var e = E.createElement(P.a, null, E.createElement(L.b, null, on), E.createElement(Ce.a, wn))
                return E.createElement(je.a, {
                  actionLabel: un,
                  graphicDisplayMode: 'none',
                  headline: rn,
                  isFullHeightOnMobile: !0,
                  onAction: r._handleRequestAppeal,
                  onSecondaryAction: r._handleCloseAppealsModal,
                  secondaryActionLabel: dn,
                  subtext: e,
                })
              }),
              (r.state = { noteDetailsOpen: !1, appealsRequestOpen: !1 }),
              r
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchUserAlias,
                    a = e.note.tweet,
                    r = e.showTweet
                  n().catch(t()), r && null != a && a.rest_id && this._handleFetchTweet()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this,
                    a = this.props,
                    r = a.isTweetAuthor,
                    o = a.note,
                    c = o.created_at,
                    i = o.rating,
                    l = o.rating_status,
                    s = o.rating_survey,
                    u = o.helpful_tags,
                    d = void 0 === u ? [] : u,
                    f = o.not_helpful_tags,
                    p = void 0 === f ? [] : f,
                    b = o.rest_id,
                    m = o.data_v1,
                    h = o.tweetId,
                    y = o.tweet,
                    g = a.showPivot,
                    v = a.showRating,
                    w = a.showTweet,
                    O = this.context.featureSwitches,
                    S = h || (null == y ? void 0 : y.rest_id),
                    _ = (null == m || null === (e = m.summary) || void 0 === e ? void 0 : e.text) || '',
                    C = (null == m || null === (t = m.summary) || void 0 === t ? void 0 : t.entities) || [],
                    j = (null == i ? void 0 : i.data_v1) || {},
                    T = (null == i ? void 0 : i.data_v2) || {},
                    x = 2 === (null == i ? void 0 : i.version),
                    A = x ? T : j,
                    D = Object(I.a)(A),
                    R = (O.isTrue('responsive_web_birdwatch_ratings_v2_enabled') && D) || x,
                    B =
                      (O.isTrue('responsive_web_birdwatch_rating_participant_enabled') ||
                        O.isTrue('responsive_web_birdwatch_rating_crowd_enabled')) &&
                      !this._isOwner() &&
                      v,
                    k = O.isTrue('responsive_web_birdwatch_appeals_enabled') && this.state.appealsRequestOpen,
                    F = this.props.note.birdwatch_profile,
                    z = (null == F ? void 0 : F.alias) || '',
                    W = (null == F ? void 0 : F.badges) || [],
                    U = function () {
                      return n.setState({ noteDetailsOpen: !1 })
                    },
                    K = E.createElement(
                      H.a.I18NFormatMessage,
                      { $i18n: 'c5c4d000' },
                      E.createElement(
                        L.b,
                        { onPress: this._handleOpenAppealsModal, withInteractiveStyling: !0, withUnderline: !0 },
                        H.a.c8259b73,
                      ),
                    )
                  return E.createElement(_e.a, null, function (e) {
                    var t = e.windowWidth
                    return E.createElement(
                      P.a,
                      { key: b, style: gn.noteContainer },
                      k && n._renderAppealsModal(),
                      E.createElement(
                        P.a,
                        { style: gn.noteTopContainer },
                        w && S
                          ? E.createElement(
                              P.a,
                              { style: gn.tweetContainer },
                              E.createElement(jt.a, { isCondensed: !0, tweetId: S }),
                            )
                          : null,
                        E.createElement(
                          P.a,
                          { style: [gn.noteTop, w && gn.noteTopWithQT] },
                          E.createElement(
                            P.a,
                            { style: gn.noteBody },
                            E.createElement(
                              Lt.a,
                              { style: gn.noteInfoMiddots },
                              (function (e) {
                                switch (e) {
                                  case fn:
                                    return hn(gn.iconGreen, en)
                                  case pn:
                                    return hn(gn.iconRed, nn)
                                  case bn:
                                    return hn(gn.iconGray, tn)
                                  default:
                                    return null
                                }
                              })(l),
                              t >= M.a.theme.breakpoints.medium ? mn(l, d, p) : null,
                              c
                                ? E.createElement(Dt.a, { style: [gn.ratingInfoItem, gn.timestamp], timestamp: c })
                                : null,
                            ),
                            t < M.a.theme.breakpoints.medium
                              ? E.createElement(Lt.a, { style: gn.noteInfoMiddots }, mn(l, d, p))
                              : null,
                            E.createElement(
                              P.a,
                              { style: gn.noteTextSection },
                              E.createElement(Tt.a, { entities: C, onEntityClick: n._scribeOnClick('link'), text: _ }),
                            ),
                          ),
                          E.createElement(N.a, { renderActionMenu: n._renderCurationActionMenu, style: gn.caret }),
                        ),
                        B
                          ? E.createElement(
                              P.a,
                              { style: gn.ratingContainer },
                              R
                                ? E.createElement(ct, { noteId: b, rating: T, ratingSurvey: s })
                                : E.createElement(we, { noteId: b, rating: j }),
                            )
                          : null,
                        r ? E.createElement(L.b, { color: 'gray700', size: 'subtext2' }, K) : null,
                      ),
                      g &&
                        S &&
                        E.createElement(
                          Rt.a,
                          null,
                          E.createElement(
                            L.b,
                            {
                              link: '/i/birdwatch/t/'.concat(S),
                              onPress: n._scribeOnClick('pivot'),
                              style: [gn.pivot, w && gn.pivotWithQT],
                              withInteractiveStyling: !1,
                            },
                            $t,
                          ),
                        ),
                      n.state.noteDetailsOpen &&
                        E.createElement(Ct, {
                          alias: z,
                          closeNoteDetails: U,
                          created_at: c,
                          rest_id: b,
                          userBadges: W,
                        }),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(E.Component)
      g()(yn, 'defaultProps', { showPivot: !1, showRating: !0, showTweet: !1 }), g()(yn, 'contextType', _.a)
      var gn = M.a.create(function (e) {
          return {
            caret: { display: 'flex', alignSelf: 'flex-start', flex: 1, flexBasis: '0%', flexDirection: 'row-reverse' },
            classification: { paddingRight: e.spaces.space4 },
            icon: {
              height: e.spaces.space12,
              paddingBottom: e.spaces.space2,
              paddingRight: e.spaces.space8,
              width: e.spaces.space12,
            },
            iconAppeals: {
              height: e.spaces.space20,
              width: e.spaces.space20,
              paddingTop: e.spaces.space4,
              paddingRight: e.spaces.space20,
            },
            iconGreen: { color: e.colors.green500 },
            iconGray: { color: e.colors.gray700 },
            iconRed: { color: e.colors.red500 },
            infoItemContainer: { paddingHorizontal: 0 },
            noteBody: { flex: 9, flexBasis: '0%' },
            noteContainer: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8 },
            noteHeader: { flexDirection: 'row', flexWrap: 'wrap', paddingBottom: e.spaces.space8 },
            noteTextSection: {
              display: 'inline',
              flexDirection: 'row',
              paddingBottom: e.spaces.space4,
              paddingTop: e.spaces.space4,
            },
            noteTop: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
            noteTopWithQT: { paddingLeft: e.spaces.space12 },
            noteTopContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            ratingContainer: { paddingBottom: e.spaces.space16 },
            ratingTag: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' },
            ratingInfoItem: { alignItems: 'center', flexDirection: 'row' },
            noteInfoMiddots: {
              alignItems: 'center',
              flexDirection: 'row',
              overflow: 'hidden',
              paddingBottom: e.spaces.space4,
            },
            pivot: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            pivotWithQT: { paddingHorizontal: e.spaces.space28 },
            timestamp: { fontSize: e.fontSizes.subtext2 },
            tweetContainer: { marginBottom: e.spaces.space12 },
          }
        }),
        vn = function (e) {
          return E.createElement(Mt.a, { style: [gn.icon, e] })
        },
        wn = {
          accessibilityLabel: an,
          containerStyle: gn.infoItemContainer,
          items: [
            { label: '', decoration: E.createElement(kt.a, { style: gn.iconAppeals }), description: cn },
            { label: '', decoration: E.createElement(Kt, { style: gn.iconAppeals }), description: ln },
            { label: '', decoration: E.createElement(Vt.a, { style: gn.iconAppeals }), description: sn },
          ],
        },
        En = ut(yn)
      t.a = En
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        l = n('v6aA'),
        s = n('XOJV'),
        u = n('eSoz'),
        d = n('rxPX'),
        f = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        b = function (e, t) {
          var n = t.tweetId,
            a = n && s.a.select(e, n)
          return a ? Object(u.f)(e, a) : void 0
        },
        m = Object(d.a)()
          .propsFromState(function () {
            return { community: b, hydratedTweet: s.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.b.fetchOneIfNeeded,
            }
          }),
        h = n('YeIG'),
        y = n('uCxL'),
        g = n('x5Pi'),
        v = m(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.hydratedTweet,
            s =
              (e.tweetId,
              c()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = i.useContext(l.a),
            d = u.featureSwitches,
            f = u.loggedInUserId,
            p = null == o ? void 0 : o.community_id_str
          i.useEffect(
            function () {
              p && Object(h.a)(t) && a(p).catch(n())
            },
            [t, p, n, a],
          )
          var b = d.isTrue('responsive_web_alt_text_badge_enabled'),
            m = o && Object(g.f)(o, f, t),
            v = m && Object(g.e)(m),
            w = d.isTrue('responsive_web_reactions_enabled')
          return i.createElement(
            y.a,
            r()({}, s, {
              loggedInUserId: f,
              shouldShowAltLabelAlways: b,
              socialContextProps: v,
              tweet: o,
              withReactions: w,
            }),
          )
        })
      t.a = v
    },
    dW4k: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SelfUserNotePageRedirect', function () {
          return E
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Qwev'),
        i = n('v6aA'),
        l = n('9StO'),
        s = n('vZpt'),
        u = n('L5MV'),
        d = n('MvLc'),
        f = n('rxPX'),
        p = n('0KEI'),
        b = Object(f.a)()
          .propsFromState(function () {
            return { userAlias: d.x, showAliasSelfSelect: d.u }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUserAlias: d.k,
              fetchShowAliasSelfSelect: d.i,
            }
          }),
        m = n('3XMw'),
        h = n.n(m),
        y = n('5FtR'),
        g = n('VS6U'),
        v = n('nymP'),
        w = h.a.ff692d63,
        E = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchShowAliasSelfSelect,
            a = e.fetchUserAlias,
            d = e.history,
            f = e.showAliasSelfSelect,
            p = e.userAlias,
            b = o.useContext(i.a).featureSwitches.isTrue('responsive_web_birdwatch_aliases_enabled'),
            m = o.useState(!0),
            h = r()(m, 2),
            E = h[0],
            O = h[1]
          o.useEffect(
            function () {
              a()
                .then(function () {
                  return O(!1)
                })
                .catch(t())
            },
            [t, a],
          ),
            o.useEffect(
              function () {
                n().catch(t())
              },
              [t, n],
            )
          var S = function (e) {
            a()
              .then(function () {
                return O(!1)
              })
              .catch(t())
          }
          return o.createElement(g.a, {
            TabBar: u.a,
            history: d,
            logoButton: o.createElement(o.Fragment, null),
            primaryContent: E
              ? o.createElement(c.a, { size: 'large' })
              : p
              ? o.createElement(y.a, { to: '/i/birdwatch/u/'.concat(p) })
              : b && f
              ? o.createElement(l.a, { onAliasSelected: S })
              : o.createElement(v.a, null),
            sidebarContent: o.createElement(s.a, null),
            title: w,
            withTweetButton: !1,
          })
        },
        O = b(E)
      t.default = O
    },
    eqZz: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n('3XMw'),
        o = n.n(r),
        c = n('B/qP'),
        i = n('MWbm'),
        l = n('j7Bv'),
        s = n('t62R'),
        u = n('rHpw'),
        d = o.a.c57760e9,
        f = o.a.c45ef9c1,
        p = o.a.g29805f5,
        b = o.a.b1056323,
        m = function () {
          return a.createElement(c.a, { style: h.innerIconColor })
        },
        h = u.a.create(function (e) {
          return {
            awardSection: { flexDirection: 'row', marginBottom: e.spaces.space8, alignItems: 'center' },
            goldAward: { backgroundColor: e.colors.yellow500 },
            innerIconColor: { color: e.colors.buttonAlwaysBlack },
            ratingAward: { marginRight: e.spaces.space8 },
            ratingAwardText: { color: e.colors.text, marginRight: e.spaces.space4 },
            silverAward: { backgroundColor: e.colors.gray300 },
          }
        }),
        y = {
          Top10Author: { badgeStyle: h.goldAward, contributorText: p, badgeText: d },
          Top10Rater: { badgeStyle: h.goldAward, contributorText: p, badgeText: f },
          Top25Author: { badgeStyle: h.silverAward, contributorText: b, badgeText: d },
          Top25Rater: { badgeStyle: h.silverAward, contributorText: b, badgeText: f },
        }
      t.a = function (e) {
        var t = e.badgeType,
          n = y[t],
          r = n.badgeStyle,
          o = n.badgeText,
          c = n.contributorText
        return a.createElement(
          i.a,
          { style: h.awardSection },
          a.createElement(l.a, { Icon: m, size: 'large', style: [h.ratingAward, r] }),
          a.createElement(s.b, { style: h.ratingAwardText, weight: 'bold' }, c),
          a.createElement(s.b, null, o),
        )
      }
    },
    fBGZ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M23.53 15.155c0 .716-.58 1.296-1.296 1.296h-4.128c-.034-.144-.077-.29-.136-.425-.05-.145-.102-.29-.17-.426-.444-.948-1.16-1.74-2.082-2.304-.12-.085-.247-.162-.375-.213-.12-.077-.247-.136-.384-.188.118-.18.255-.34.408-.495.86-.853 2.098-1.322 3.497-1.322h.017c2.738 0 4.648 1.68 4.648 4.077zM21.398 7.77c0 .682-.162 1.21-.478 1.578-.52.588-1.322.665-2.038.665-.725 0-1.527-.077-2.038-.665-.435-.495-.58-1.262-.435-2.328.195-1.5 1.116-2.396 2.464-2.396 1.34 0 2.26.895 2.465 2.396.032.264.058.52.058.75zm-9.408 4.52c-.084 0-.17 0-.246.01.077.008.162.008.24.008.084 0 .178 0 .263-.01-.085-.008-.17-.008-.256-.008z',
            }),
            o.createElement('path', {
              d: 'M14.806 9.8c0 .768-.18 1.356-.537 1.765-.496.57-1.255.708-1.98.733-.017 0-.026.01-.043 0-.085-.01-.17-.01-.256-.01s-.17 0-.246.01c-.742-.017-1.535-.136-2.047-.733-.486-.554-.64-1.416-.478-2.618.23-1.68 1.26-2.686 2.762-2.686s2.54 1.007 2.763 2.687c.044.307.06.588.06.853zm2.43 8.16c0 .786-.63 1.417-1.416 1.417H8.145c-.776 0-1.416-.63-1.416-1.416 0-1.176.46-2.276 1.287-3.103.972-.972 2.405-1.492 3.974-1.5.922 0 1.75.16 2.466.468.136.05.264.11.384.188.128.06.256.128.375.213.563.358 1.032.82 1.373 1.373.085.135.162.28.23.425.068.136.12.28.17.426.163.47.248.974.248 1.51zM.47 15.155c0 .716.58 1.296 1.296 1.296h4.128c.034-.144.077-.29.136-.425.05-.145.102-.29.17-.426.444-.948 1.16-1.74 2.082-2.304.12-.085.247-.162.375-.213.12-.077.247-.136.384-.188-.118-.18-.255-.34-.408-.495-.86-.853-2.098-1.322-3.497-1.322h-.017c-2.746 0-4.648 1.68-4.648 4.077zM2.602 7.77c0 .682.162 1.21.478 1.578.52.588 1.322.665 2.038.665.725 0 1.527-.077 2.038-.665.435-.495.58-1.262.435-2.328-.204-1.5-1.125-2.397-2.472-2.397-1.34 0-2.26.895-2.465 2.396-.034.264-.05.52-.05.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            o.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    'iCa+': function (e, t, n) {
      'use strict'
      n.r(t)
      n('WNMA'), n('KqXw'), n('MvUL')
      var a = n('ERkP'),
        r = n('3XMw'),
        o = n.n(r),
        c = n.p + 'birdwatch_note_live.b1a67015.png',
        i = n('aITJ'),
        l = n('t62R'),
        s = n('feu+'),
        u = n('rHpw'),
        d = n('U+bB'),
        f = n('MWbm'),
        p = o.a.a05667aa,
        b = o.a.j5a1d85a,
        m = o.a.ace99891,
        h = function () {
          return a.createElement(d.a, { source: c, style: y.image })
        },
        y = u.a.create(function (e) {
          return { content: { marginVertical: e.spaces.space16 }, image: { height: '189px', width: '152px' } }
        })
      t.default = function (e) {
        var t = e.history,
          n = e.match.params.tweetId,
          r = a.createElement(f.a, null, a.createElement(l.b, null, p))
        return a.createElement(s.a, {
          actionLabel: b,
          contentStyle: y.content,
          graphic: h,
          graphicDisplayMode: 'illustration',
          headline: m,
          isFullHeightOnMobile: !0,
          onAction: function () {
            t.push('/i/birdwatch/t/'.concat(n))
          },
          onClose: function () {
            i.b.isTwitterApp() || t.replace('/i/status/'.concat(n))
          },
          subtext: r,
          withCloseButton: !i.b.isTwitterApp(),
        })
      }
    },
    mQYW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchNotesUserScreen', function () {
          return he
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('z84I'), n('uFXj'), n('ERkP')),
        c = n('v6aA'),
        i = n('9StO'),
        l = n('eqZz'),
        s = n('97Jx'),
        u = n.n(s),
        d = n('m3Bd'),
        f = n.n(d),
        p = n('ZD0R'),
        b = n('xSpP'),
        m = n('rxPX'),
        h = function (e, t) {
          var n = t.noteId
          return b.a.select(e, n)
        },
        y = Object(m.a)().propsFromState(function () {
          return { note: h }
        })(function (e) {
          var t = e.note,
            n = (e.noteId, f()(e, ['note', 'noteId']))
          return t ? o.createElement(p.a, u()({ note: t }, n)) : null
        }),
        g = n('vZpt'),
        v = n('L5MV'),
        w = (n('WNMA'), n('KqXw'), n('MvLc')),
        E = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        O = n.n(E),
        S = n('wAC9')
      function _(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j = n('hqKg'),
        T = n('0KEI'),
        x = function (e, t) {
          return t.match.params.alias
        },
        A = function (e, t) {
          return Object(j.createSelector)(x, function (e) {
            return e
              ? (function (e) {
                  return Object(S.a)({
                    contextSuffix: 'BIRDWATCH_CONTRIBUTOR_NOTES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Birdwatch.fetchBirdwatchContributorNotesSlice
                    },
                    getEndpointParams: function (t) {
                      return C(C({}, t), {}, { alias: e })
                    },
                    sliceKey: 'birdwatchContributorNotesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        I = function (e, t) {
          return w.o(e, x(0, t))
        },
        P = function (e, t) {
          return w.n(e, x(0, t))
        },
        L = function (e, t) {
          return w.u(e)
        },
        D = Object(m.a)()
          .propsFromState(function () {
            return {
              alias: x,
              notesSlice: A(),
              ratingsData: I,
              contributorBadgeData: P,
              showAliasSelfSelect: L,
              userAlias: w.x,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchBirdwatchProfile: w.f,
              fetchShowAliasSelfSelect: w.i,
              fetchUserAlias: w.k,
            }
          }),
        R = n('W6+M'),
        B = n('BcsE'),
        N = n('yoO3'),
        M = n('7JQg'),
        k = n('VS6U'),
        H = n('FS1z'),
        F = n('aITJ'),
        z = n('nymP'),
        W = n('MWbm'),
        U = n('t62R'),
        K = n('FIs5'),
        V = n('MtXG'),
        X = n('0yYu'),
        G = n('/yvb'),
        q = n('j7Bv'),
        Z = n('6vad'),
        Q = n('cHvH'),
        Y = n('rHpw'),
        J = n('3XMw'),
        $ = n.n(J),
        ee = n('B/qP'),
        te = n('6s7X'),
        ne = n('ms2t'),
        ae = $.a.ff692d63,
        re = $.a.ab28945b,
        oe = $.a.jaf0d42c,
        ce = $.a.fe27c1e1,
        ie = $.a.b8b34f54,
        le = $.a.fd284b08,
        se = $.a.ff746f63,
        ue = $.a.hc19704b,
        de = $.a.j44125ee,
        fe = $.a.da55067b,
        pe = o.createElement(
          $.a.I18NFormatMessage,
          { $i18n: 'bc62b131' },
          o.createElement(U.b, { link: 'https://twitter.github.io/birdwatch/aliases/' }, $.a.j1a30557),
        ),
        be = { label: ue, preferredHorizontalOrientation: 'start' },
        me = { pathname: 'https://twitter.github.io/birdwatch/about/ranking-notes/', external: !0 },
        he = function (e) {
          var t = o.useContext(c.a).featureSwitches,
            n = e.alias,
            a = e.contributorBadgeData,
            s = e.createLocalApiErrorHandler,
            u = e.fetchBirdwatchProfile,
            d = e.fetchShowAliasSelfSelect,
            f = e.fetchUserAlias,
            p = e.history,
            b = e.notesSlice,
            m = e.ratingsData,
            h = e.showAliasSelfSelect,
            w = e.userAlias,
            E = o.useState(h),
            O = r()(E, 2),
            S = O[0],
            _ = O[1],
            C = w === n
          o.useEffect(
            function () {
              d().catch(s())
            },
            [s, d],
          ),
            o.useEffect(
              function () {
                n && u(n).catch(s())
              },
              [s, u, n],
            ),
            o.useEffect(
              function () {
                f().catch(s())
              },
              [s, f],
            ),
            o.useEffect(
              function () {
                _(h)
              },
              [h],
            )
          var j,
            T,
            x,
            A,
            I,
            P,
            L,
            D,
            J,
            ue = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            he = t.isTrue('responsive_web_birdwatch_ratings_v2_enabled'),
            ge = t.isTrue('responsive_web_birdwatch_aliases_enabled'),
            ve = o.useMemo(
              function () {
                return { page: 'birdwatch', section: ue ? 'user_notes_participant' : 'user_notes' }
              },
              [ue],
            ),
            we = o.createElement(K.a, { header: de, message: fe }),
            Ee = o.createElement(z.a, null),
            Oe = function (e) {
              return o.createElement(
                W.a,
                { key: e },
                o.createElement(y, { noteId: e, showPivot: C, showRating: !1, showTweet: !0 }),
                o.createElement(X.a, null),
              )
            },
            Se = function () {
              return C ? Ee : we
            },
            _e = C ? ae : re,
            Ce = ge && S && C,
            je = ge ? void 0 : '@'.concat(n)
          return o.createElement(
            M.b,
            { namespace: ve },
            o.createElement(
              N.a,
              null,
              o.createElement(k.a, {
                TabBar: v.a,
                backLocation: '/i/birdwatch',
                history: p,
                logoButton: o.createElement(o.Fragment, null),
                primaryContent: Ce
                  ? o.createElement(i.a, {
                      onAliasSelected: function (e) {
                        p.push('/i/birdwatch/u/me')
                      },
                    })
                  : ((T = null == m ? void 0 : m.helpful),
                    (x = null == m ? void 0 : m.somewhatHelpful),
                    (A = null == m ? void 0 : m.notHelpful),
                    (I = void 0 !== T),
                    (P = I && t.isTrue('responsive_web_birdwatch_profile_awards_enabled')),
                    (L = a || []),
                    (D = o.createElement(te.a, { style: ye.badgeStandingIcon })),
                    (J = o.createElement(G.a, { hoverLabel: be, icon: D, link: me, style: ye.badgeStandingButton })),
                    o.createElement(
                      W.a,
                      null,
                      F.b.isTwitterApp() &&
                        o.createElement(
                          W.a,
                          { style: ye.birdwatchProfileContainer },
                          o.createElement(
                            U.b,
                            { numberOfLines: 1, size: 'headline1', style: ye.birdwatchProfileTitle, weight: 'bold' },
                            _e,
                          ),
                          o.createElement(X.a, null),
                        ),
                      ge &&
                        o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(q.a, {
                            Icon: ne.a,
                            color: 'neutral',
                            size: 'xxLarge',
                            style: ye.genericBirdwatchProfileIcon,
                          }),
                          o.createElement(Z.b, { style: ye.profileText, text: Object(R.a)(n) }),
                          o.createElement(U.b, { color: 'gray700', style: ye.birdwatchAliasDisclaimerText }, pe),
                          o.createElement(X.a, null),
                        ),
                      P &&
                        o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(Z.b, { rightControl: J, text: le }),
                          o.createElement(
                            W.a,
                            { style: ye.awardsContainer },
                            L.length > 0
                              ? o.createElement(Q.a, null, function (e) {
                                  var t = e.windowWidth
                                  return o.createElement(
                                    W.a,
                                    {
                                      style:
                                        t >= Y.a.theme.breakpoints.medium
                                          ? ye.badgeContainerLarge
                                          : ye.badgeContainerSmall,
                                    },
                                    L &&
                                      L.map(function (e, t) {
                                        return o.createElement(l.a, { badgeType: e, key: t })
                                      }),
                                  )
                                })
                              : o.createElement(
                                  W.a,
                                  { style: ye.awardSection },
                                  o.createElement(q.a, {
                                    Icon: function () {
                                      return o.createElement(ee.a, { style: ye.noAward })
                                    },
                                    size: 'large',
                                    style: [ye.ratingAward, ye.noAwardThumbnail],
                                  }),
                                  o.createElement(U.b, { size: 'subtext1', style: ye.noAwardText }, se),
                                ),
                          ),
                        ),
                      I &&
                        C &&
                        o.createElement(
                          W.a,
                          { style: ye.ratingsContainer },
                          o.createElement(U.b, { style: ye.ratingsReceived, weight: 'bold' }, ie),
                          o.createElement(
                            W.a,
                            { style: ye.ratingNumbers },
                            Object(B.a)(T)
                              ? o.createElement(
                                  W.a,
                                  { style: ye.helpfulStats },
                                  (function (e) {
                                    return o.createElement(
                                      V.a,
                                      null,
                                      o.createElement(
                                        $.a.I18NFormatMessage,
                                        { $i18n: 'g6ea1d54' },
                                        o.createElement(V.a.Value, null, $.a.b5eb23f9({ count: e })),
                                        o.createElement(V.a.Label, null, $.a.ebecb73c),
                                      ),
                                    )
                                  })(T),
                                )
                              : null,
                            he && Object(B.a)(x)
                              ? o.createElement(
                                  W.a,
                                  { style: ye.helpfulStats },
                                  (function (e) {
                                    return o.createElement(
                                      V.a,
                                      null,
                                      o.createElement(
                                        $.a.I18NFormatMessage,
                                        { $i18n: 'b93058db' },
                                        o.createElement(V.a.Value, null, $.a.i1f57cc4({ count: e })),
                                        o.createElement(V.a.Label, null, $.a.e8907cd9),
                                      ),
                                    )
                                  })(x),
                                )
                              : null,
                            Object(B.a)(A)
                              ? ((j = A),
                                o.createElement(
                                  V.a,
                                  null,
                                  o.createElement(
                                    $.a.I18NFormatMessage,
                                    { $i18n: 'c6726126' },
                                    o.createElement(V.a.Value, null, $.a.d551bc31({ count: j })),
                                    o.createElement(V.a.Label, null, $.a.c1db7f3a),
                                  ),
                                ))
                              : null,
                          ),
                        ),
                      b
                        ? o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(Z.b, { text: C ? oe : ce }),
                            o.createElement(H.a, { module: b, noItemsRenderer: Se, renderer: Oe }),
                          )
                        : null,
                    )),
                sidebarContent: o.createElement(g.a, null),
                subtitle: je,
                title: _e,
                withTweetButton: !1,
              }),
            ),
          )
        },
        ye = Y.a.create(function (e) {
          return {
            awardsContainer: { paddingLeft: e.spaces.space12 },
            awardSection: {
              display: 'flex',
              flexDirection: 'row',
              marginBottom: e.spaces.space4,
              alignItems: 'center',
            },
            badgeContainerLarge: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: e.spaces.space8,
            },
            badgeContainerSmall: { display: 'flex' },
            badgeStandingButton: { border: 'none' },
            badgeStandingIcon: { color: e.colors.gray300 },
            helpfulStats: { paddingRight: e.spaces.space12 },
            noAward: { color: e.colors.gray300 },
            noAwardText: { color: e.colors.gray700 },
            noAwardThumbnail: {
              backgroundColor: e.colors.transparent,
              borderStyle: 'dashed',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderRadius: e.borderRadii.infinite,
            },
            ratingAward: { marginRight: e.spaces.space8 },
            genericBirdwatchProfileIcon: {
              color: e.colors.gray600,
              backgroundColor: e.colors.gray100,
              marginLeft: e.componentDimensions.gutterHorizontal,
            },
            ratingNumbers: { flexDirection: 'row' },
            ratingsContainer: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space20,
            },
            ratingsReceived: { paddingBottom: e.spaces.space4 },
            spinner: { paddingTop: e.spaces.space20 },
            profileText: { textTransform: 'capitalize' },
            birdwatchAliasDisclaimerText: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingBottom: e.spaces.space12,
            },
            birdwatchProfileTitle: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingBottom: e.spaces.space12,
            },
            birdwatchProfileContainer: { paddingTop: e.spaces.space16, paddingBottom: e.spaces.space12 },
          }
        }),
        ge = D(he)
      t.default = ge
    },
    nIpi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchDownloadDataScreen', function () {
          return B
        })
      n('2G9S'), n('z84I')
      var a = n('ERkP'),
        r = n('vZpt'),
        o = n('L5MV'),
        c = n('MvLc'),
        i = n('hqKg'),
        l = n('rxPX'),
        s = n('0KEI'),
        u = function (e, t) {
          return c.t(e)
        },
        d = Object(l.a)()
          .propsFromState(function () {
            return {
              publicData: Object(i.createSelector)(u, function (e) {
                return e
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchPublicData: c.h,
            }
          })
          .withAnalytics({ page: 'birdwatch', section: 'download_data' }),
        f = n('89Im'),
        p = n('tI3i'),
        b = n.n(p),
        m = n('yoO3'),
        h = n('VS6U'),
        y = n('MWbm'),
        g = n('t62R'),
        v = n('/yvb'),
        w = n('0yYu'),
        E = n('6vad'),
        O = n('rHpw'),
        S = n('3XMw'),
        _ = n.n(S),
        C = _.a.cb1adfa0,
        j = _.a.e72533f5,
        T = _.a.g652cada,
        x = _.a.g4d71b5e,
        A = _.a.b8a27fe1,
        I = _.a.j1c99e0f,
        P = _.a.i6f69313,
        L = _.a.h786cd79,
        D = _.a.d0fe8052,
        R = a.createElement(
          g.b,
          { color: 'gray700', size: 'subtext2' },
          a.createElement(
            _.a.I18NFormatMessage,
            { $i18n: 'ec38eaf7' },
            a.createElement(
              g.b,
              { color: 'link', link: 'https://developer.twitter.com/en/developer-terms' },
              _.a.g0cacb73,
            ),
          ),
        ),
        B = function (e) {
          var t,
            n,
            c,
            i = e.analytics,
            l = e.createLocalApiErrorHandler,
            s = e.fetchPublicData,
            u = e.history,
            d = e.publicData
          a.useEffect(
            function () {
              s().catch(l())
            },
            [l, s],
          )
          var p,
            O = null == d || null === (t = d.notes) || void 0 === t ? void 0 : t.urls,
            S = null == O ? void 0 : O.length,
            B = null == d || null === (n = d.ratings) || void 0 === n ? void 0 : n.urls,
            M = null == B ? void 0 : B.length,
            k = null == d || null === (c = d.notes) || void 0 === c ? void 0 : c.created_at,
            H = function (e, t, n, r) {
              return (
                b()(void 0 !== n, 'totalFiles must be defined'),
                a.createElement(
                  y.a,
                  { key: t, style: [N.fileSection, t > 1 && N.fileSectionNotFirst] },
                  a.createElement(
                    g.b,
                    null,
                    a.createElement(_.a.I18NFormatMessage, { $i18n: 'g19fcc5a', fileIndex: t, totalFiles: n }),
                  ),
                  a.createElement(v.a, {
                    icon: a.createElement(f.a, null),
                    link: e,
                    onPress:
                      ((o = ''.concat(r, '_').concat(t)),
                      function () {
                        i.scribeAction('click_'.concat(o))
                      }),
                    type: 'brandText',
                  }),
                )
              )
              var o
            },
            F = a.createElement(
              a.Fragment,
              null,
              a.createElement(
                y.a,
                { style: N.headerWrapper },
                a.createElement(g.b, { size: 'title4', style: N.textSection, weight: 'heavy' }, j),
                a.createElement(g.b, { color: 'gray700', style: N.textSection }, T),
                a.createElement(
                  g.b,
                  { color: 'gray700' },
                  x,
                  a.createElement(
                    g.b,
                    { link: { pathname: 'https://twitter.github.io/birdwatch/data', external: !0 } },
                    A,
                  ),
                  '.',
                ),
              ),
              a.createElement(w.a, null),
              a.createElement(E.b, { text: I }),
              O && (null == O ? void 0 : O.length) > 0
                ? O.map(function (e, t) {
                    return H(e, t + 1, S, 'notes')
                  })
                : a.createElement(g.b, { color: 'gray700', style: N.emptyData }, L),
              a.createElement(w.a, null),
              a.createElement(E.b, { text: P }),
              B && (null == B ? void 0 : B.length) > 0
                ? B.map(function (e, t) {
                    return H(e, t + 1, M, 'ratings')
                  })
                : a.createElement(g.b, { color: 'gray700', style: N.emptyData }, D),
              a.createElement(w.a, null),
              a.createElement(
                y.a,
                { style: N.footerText },
                a.createElement(
                  g.b,
                  { color: 'gray700', style: N.dateGenerated },
                  a.createElement(_.a.I18NFormatMessage, {
                    $i18n: 'g812cfc3',
                    date:
                      ((p = k),
                      p
                        ? new Date(p).toLocaleString('default', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : ''),
                  }),
                ),
                R,
              ),
            )
          return a.createElement(
            m.a,
            null,
            a.createElement(h.a, {
              TabBar: o.a,
              history: u,
              logoButton: a.createElement(a.Fragment, null),
              primaryContent: F,
              sidebarContent: a.createElement(r.a, null),
              title: C,
              withTweetButton: !1,
            }),
          )
        },
        N = O.a.create(function (e) {
          return {
            dateGenerated: { paddingBottom: e.spaces.space16 },
            emptyData: {
              display: 'flex',
              justifyContent: 'center',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
            fileSection: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space4,
            },
            fileSectionNotFirst: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
            },
            footerText: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            headerWrapper: { alignItems: 'center', margin: e.spaces.space32, textAlign: 'center' },
            textSection: { marginBottom: e.spaces.space16 },
          }
        }),
        M = d(B)
      t.default = M
    },
    nymP: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n('v6aA'),
        o = n('FIs5'),
        c = n('3XMw'),
        i = n.n(c),
        l = { external: !0, pathname: 'https://twitter.github.io/birdwatch/writing-notes' },
        s = i.a.i859a9d3,
        u = i.a.ff3e0be2,
        d = i.a.e9f1fbcb,
        f = i.a.db08295d,
        p = i.a.f4d67927,
        b = i.a.eae6767a
      t.a = function () {
        var e = a.useContext(r.a).featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled')
        return a.createElement(o.a, {
          buttonLink: e ? l : '/i/flow/join-birdwatch',
          buttonText: e ? s : u,
          header: e ? d : f,
          message: e ? b : p,
        })
      }
    },
    owBv: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('lTXM'),
        c = n('m3Bd'),
        i = n.n(c),
        l = (n('z84I'), n('ho0z'), n('YeIG')),
        s = n('kLu5'),
        u = n('7MdP')
      function d(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = function (e) {
          var t = Object(s.b)(),
            n = (function (e) {
              if ('SegmentedTimelines' === e.body.__typename) {
                var t = e.body.timelines.map(function (e) {
                  return {
                    graphQLTimelineId: e.timeline.id,
                    id: e.id,
                    labelText: e.labelText,
                    scribeConfig: Object(l.a)(e.scribeConfig) ? void 0 : f({}, e.scribeConfig),
                    refreshIntervalSec: e.refreshIntervalSec,
                  }
                })
                return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t }
              }
            })(e),
            a = (function (e, t) {
              var n = t.header
              if (n && 'TopicPageHeader' === n.__typename) {
                n.__typename
                var a = n.facepile,
                  r = n.topic,
                  o = i()(n, ['__typename', 'facepile', 'topic']),
                  c = a && Object(u.b)(e, a),
                  l = Object(u.a)(e, r)
                return f(f({}, o), {}, { topicId: l, facepile: c })
              }
            })(t, e),
            r = (function (e, t) {
              var n = t.navBar
              if (!n) return {}
              switch (n.__typename) {
                case 'TitleNavBar':
                  return { title: n.title, subtitle: n.subtitle }
                case 'TopicPageNavBar':
                  return {
                    navBar: { topicId: Object(u.a)(e, n.topic), clientEventInfo: n.clientEventInfo },
                    title: n.topic.name,
                    subtitle: void 0,
                  }
                default:
                  return {}
              }
            })(t, e)
          return {
            globalObjects: t,
            pageConfiguration: {
              id: e.id,
              tabs: n,
              header: a,
              navBar: r.navBar && r.navBar,
              title: r.title,
              subtitle: r.subtitle,
              scribeConfig: f({}, e.scribeConfig),
            },
          }
        },
        b = n('WpDa'),
        m = n('IcAo')
      function h(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t,
          n,
          a =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(b.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (n = t.initialTimeline) &&
                void 0 !== n &&
                n.timeline.timeline
              ? Object(b.a)(t.initialTimeline.timeline.timeline)
              : Object(b.a)(o.c),
          r = p(e),
          c = r.globalObjects,
          i = r.pageConfiguration
        return y(y({}, a), {}, { globalObjects: Object(m.a)(c, a.globalObjects), pageConfiguration: i })
      }
    },
    uw5z: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BirdwatchGlobalTimelineScreen', function () {
          return z
        })
      var a = n('ERkP'),
        r = n('v6aA'),
        o = n('vZpt'),
        c = n('L5MV'),
        i = (n('WNMA'), n('KqXw'), n('owBv')),
        l = n('ZNT5'),
        s = n('hqKg'),
        u = n('rxPX'),
        d = function (e, t) {
          var n, a
          return (
            (null === (n = t.match) || void 0 === n || null === (a = n.params) || void 0 === a ? void 0 : a.tabId) ||
            void 0
          )
        },
        f = function () {
          return Object(s.createSelector)(d, function (e) {
            return (function (e) {
              return Object(l.a)({
                timelineId: 'birdwatch-global-timeline',
                getEndpoint: function (e) {
                  return e.Birdwatch.fetchGlobalTimeline
                },
                getEndpointParams: function () {
                  return { tabId: e }
                },
                context: 'FETCH_BIRDWATCH_GLOBAL_TIMELINE',
                perfKey: 'birdwatch-global-timeline',
                formatResponse: i.a,
              })
            })(e)
          })
        },
        p = Object(u.a)().propsFromState(function () {
          return { module: f(), selectedTabId: d }
        }),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        m = n.n(b),
        h = n('8UdT'),
        y = n('ezF+'),
        g = n('VPAj'),
        v = (n('hBvt'), n('fs1G')),
        w = n('t62R'),
        E = n('csss'),
        O = function (e) {
          var t = e.link,
            n = e.onClick,
            r = void 0 === n ? v.a : n,
            o = e.subtext,
            c = e.text,
            i = a.createElement(w.b, { color: t ? 'primary' : 'normal' }, c)
          return a.createElement(E.a, { description: o, label: i, link: t, onPress: r })
        },
        S = n('caTy'),
        _ = n('zh9S')
      function C(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T,
        x = y.e(
          y.g({
            component: O,
            bindActions: Object(g.a)({ scribe: _.c }),
            createProps: function (e) {
              var t = e.actions.scribe,
                n = e.entry,
                a = e.scribeData,
                r = e.scribeNamespace,
                o = n.content,
                c = o.subtext,
                i = o.text,
                l = o.url
              return {
                subtext: c,
                text: i,
                link: l && Object(S.b)(l),
                onClick: function () {
                  t(j(j({}, r), {}, { action: 'click_label' }), a)
                },
              }
            },
          }),
        ),
        A = n('S/Qv'),
        I = n('5Y9N'),
        P = n('Yy//')
      function L(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var R =
          ((T = {}),
          m()(T, h.b.Label, x),
          m()(T, h.b.Message, Object(A.a)({})),
          m()(T, h.b.Tweet, Object(P.a)({ displayBlocked: !1, withActionsDisabled: !0 })),
          T),
        B = D(D({}, Object(I.a)({})), R),
        N = n('3XMw'),
        M = n.n(N),
        k = n('UZjl'),
        H = M.a.ha8209bb,
        F = function (e) {
          return { pathname: '/i/birdwatch/'.concat(e) }
        },
        z = function (e) {
          var t = a.useContext(r.a).featureSwitches,
            n = e.history,
            i = e.module,
            l = e.selectedTabId,
            s = t.isTrue('responsive_web_birdwatch_note_writing_enabled'),
            u = a.useMemo(
              function () {
                var e = null != l ? l : 'global_timeline'
                return { page: 'birdwatch', section: s ? ''.concat(e, '_participant') : e }
              },
              [s, l],
            )
          return a.createElement(k.a, {
            TabBar: c.a,
            entryConfiguration: B,
            getTabLink: F,
            history: n,
            initialPageNamespace: u,
            logoButton: a.createElement(a.Fragment, null),
            module: i,
            selectedTabId: l,
            sidebarContent: a.createElement(o.a, null),
            timelinePrefix: 'birdwatch-',
            title: H,
            withTweetButton: !1,
          })
        },
        W = p(z)
      t.default = W
    },
    vZpt: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ddV6'),
        c = n.n(o),
        i = (n('uFXj'), n('ERkP')),
        l = n('v6aA'),
        s = n('G6rE'),
        u = n('rxPX'),
        d = n('0KEI'),
        f = function (e, t) {
          return s.e.select(e, '1319036828964454402')
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { birdwatchAccount: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('BIRDWATCH_SCREEN'),
              fetchUsersIfNeeded: s.e.fetchManyIfNeeded,
            }
          }),
        b = n('FQwk'),
        m = n('MWbm'),
        h = n('t62R'),
        y = n('6vad'),
        g = n('/yvb'),
        v = n('h0NW'),
        w = n('rC8y'),
        E = n('rHpw'),
        O = n('3XMw'),
        S = n.n(O),
        _ = n('yygM'),
        C = n('QDet'),
        j = n('wz7L'),
        T = n('88ay'),
        x = S.a.de962615,
        A = S.a.cbfa448b,
        I = S.a.b171d7c4,
        P = '1319036828964454402',
        L = S.a.ab23a972,
        D = S.a.gfa725ae,
        R = S.a.eac7b6ab,
        B = S.a.b0381cfb,
        N = S.a.f0addddc,
        M = S.a.c68f3bcf,
        k = S.a.dfb1f498,
        H = i.createElement(
          h.b,
          null,
          i.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'fdd69021' },
            i.createElement(
              h.b,
              { color: 'link', link: { external: !0, pathname: '/messages/compose?recipient_id=1319036828964454402' } },
              S.a.b8a36128,
            ),
          ),
        ),
        F = E.a.create(function (e) {
          return {
            root: { paddingBottom: e.spaces.space64, paddingTop: e.spaces.space12 },
            footer: {
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
            },
            infoItemContainer: { paddingLeft: e.spaces.space16, paddingRight: 0 },
            module: {
              backgroundColor: e.colors.cellBackground,
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.xLarge,
              marginBottom: e.spaces.space16,
              overflow: 'hidden',
            },
            moduleBody: { padding: e.spaces.space16 },
            row: { flexDirection: 'row' },
            text: { paddingRight: e.spaces.space16 },
            transparentModule: { backgroundColor: 'transparent', borderWidth: 0 },
            valuesGroup: { paddingBottom: e.spaces.space20, paddingTop: e.spaces.space20 },
            valueIcon: { color: e.colors.gray700 },
            valueItem: {
              textAlign: 'left',
              flexDirection: 'row',
              marginLeft: e.spaces.space16,
              color: e.colors.gray700,
            },
          }
        }),
        z = p(function (e) {
          var t = e.birdwatchAccount,
            n = e.createLocalApiErrorHandler,
            a = e.fetchUsersIfNeeded,
            o = i.useContext(l.a).featureSwitches,
            s = i.useState(null == t ? void 0 : t.following),
            u = c()(s, 2),
            d = u[0],
            f = u[1],
            p = o.isTrue('responsive_web_birdwatch_note_writing_enabled')
          i.useEffect(
            function () {
              a([P])
                .then(function (e) {
                  var t
                  e && f(null === (t = e.entities) || void 0 === t ? void 0 : t.users['1319036828964454402'].following)
                })
                .catch(n())
            },
            [n, a],
          )
          var E = i.createElement(
              m.a,
              { style: F.module },
              i.createElement(y.b, { text: x }),
              i.createElement(
                m.a,
                { style: [F.moduleBody, F.row] },
                i.createElement(h.b, { color: 'gray700', style: F.text }, A),
                i.createElement(g.a, { accessibilityLabel: I, link: '/i/flow/join-birdwatch', type: 'brandFilled' }, I),
              ),
            ),
            O = i.createElement(
              m.a,
              { style: F.module },
              i.createElement(y.b, { text: L }),
              i.createElement(
                m.a,
                null,
                i.createElement(T.b, { decoration: T.e, displayMode: 'UserCompact', userId: P, withFollowsYou: !0 }),
              ),
            ),
            S = function (e) {
              return i.createElement(m.a, { style: F.valueItem }, i.createElement(h.b, { color: 'gray700' }, e))
            },
            z = {
              accessibilityLabel: D,
              items: [
                { label: '', decoration: i.createElement(_.a, { style: F.valueIcon }), description: S(R) },
                { label: '', decoration: i.createElement(C.a, { style: F.valueIcon }), description: S(B) },
                { label: '', decoration: i.createElement(j.a, { style: F.valueIcon }), description: S(N) },
              ],
            },
            W = i.createElement(
              m.a,
              { style: F.module },
              i.createElement(y.b, { text: D }),
              i.createElement(
                m.a,
                { style: F.valuesGroup },
                i.createElement(v.a, r()({}, z, { containerStyle: F.infoItemContainer })),
              ),
              i.createElement(
                m.a,
                { style: F.footer },
                i.createElement(w.a, {
                  link: 'https://twitter.github.io/birdwatch/contributing/values/',
                  text: M,
                  withBottomRadius: !0,
                }),
              ),
            ),
            U = i.createElement(
              m.a,
              { style: F.module },
              i.createElement(y.b, { text: k }),
              i.createElement(m.a, { style: F.moduleBody }, H),
            )
          return i.createElement(
            m.a,
            { accessibilityRole: 'complementary', style: F.root },
            p ? null : E,
            d ? null : O,
            W,
            U,
            i.createElement(
              m.a,
              { style: [F.module, F.transparentModule] },
              i.createElement(b.a, { textColor: 'gray700', withOverflow: !0 }),
            ),
          )
        })
      t.a = z
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    xSpP: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
      })
      var a = n('oEOe'),
        r = n('MvLc'),
        o = n('3zvM'),
        c = n('lMB6'),
        i = Object(o.f)({ namespace: 'birdwatchContributorNotes' }),
        l = function (e) {
          return function (t, n, o) {
            var c = o.api
            return a.b(t, { request: c.Birdwatch.deleteNote, params: { note_id: e } })(
              { actionTypes: i.actionTypes.OPTIMISTIC_UPDATE, context: 'DELETE_NOTE' },
              function (t) {
                if (t) return [i.deleteOne(e), Object(r.c)(e)]
              },
            )
          }
        }
      t.a = c.a.register(i)
    },
    yygM: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 26 26' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M13 20.673c-.414 0-.75-.336-.75-.75V14.46c0-.414.336-.75.75-.75s.75.336.75.75v5.463c0 .414-.336.75-.75.75z',
            }),
            o.createElement('path', {
              d: 'M13 4.5c-4.687 0-8.5 3.813-8.5 8.5 0 3.424 2.037 6.494 5.19 7.83.094.04.196.067.306.067.414 0 .75-.336.75-.75 0-.31-.188-.575-.456-.69C7.685 18.36 6 15.826 6 13c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.825-1.683 5.358-4.288 6.454-.273.112-.467.38-.467.693 0 .414.336.75.75.75.105 0 .204-.022.294-.06C19.455 19.51 21.5 16.433 21.5 13c0-4.687-3.813-8.5-8.5-8.5zM13 3c-.414 0-.75-.34-.75-.757V.757C12.25.34 12.586 0 13 0s.75.34.75.757v1.486c0 .418-.336.757-.75.757zM3 13c0 .414-.34.75-.757.75H.757C.34 13.75 0 13.414 0 13s.34-.75.757-.75h1.486c.418 0 .757.336.757.75zm23 0c0 .414-.34.75-.757.75h-1.486c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h1.486c.418 0 .757.336.757.75zM5.93 5.93c-.294.292-.77.29-1.067-.006l-1.05-1.05c-.296-.296-.298-.774-.005-1.066s.77-.29 1.066.005l1.05 1.05c.295.296.298.773.005 1.066zm16.262-2.122c.293.293.29.77-.005 1.066l-1.05 1.05c-.296.296-.774.3-1.067.006s-.29-.77.005-1.066l1.05-1.05c.297-.297.775-.3 1.067-.006zM17 22.75c0 .414-.34.75-.757.75H9.757c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h6.486c.418 0 .757.336.757.75zm-1 2.5c0 .414-.34.75-.757.75h-4.486c-.418 0-.757-.336-.757-.75s.34-.75.757-.75h4.486c.418 0 .757.336.757.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 26, height: 26 }), (t.a = u)
    },
  },
])
//# sourceMappingURL=WIPED
