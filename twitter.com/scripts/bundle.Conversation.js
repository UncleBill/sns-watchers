;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    '8BIC': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationAnalyticsScreen', function () {
          return Q
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        g = n('KEM+'),
        h = n.n(g),
        y = (n('2G9S'), n('ho0z'), n('WNMA'), n('KqXw'), n('ERkP')),
        b = n('zh9S'),
        v = n('hqKg'),
        E = n('XOJV'),
        w = n('0KEI'),
        _ = n('oEGd'),
        O = function (e, t) {
          return t.match.params.statusId
        },
        P = Object(v.createSelector)(
          function (e, t) {
            return E.a.selectFetchStatus(e, O(0, t))
          },
          O,
          function (e, t) {
            return E.a.selectHydrated(e, O(0, t))
          },
          function (e, t, n) {
            return { fetchStatus: e, statusId: t, tweet: n }
          },
        ),
        I = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'CONVERSATION_ANALYTICS_SCREEN',
          ),
          fetchTweetIfNeeded: E.a.fetchOneIfNeeded,
          scribeAction: b.c,
        },
        T = Object(_.g)(P, I),
        C = n('v//M'),
        k = n('W5XZ'),
        S = n('jHSc'),
        j = n('3XMw'),
        L = n.n(j),
        x = n('SrIh'),
        A = n('Rp9C'),
        R = n('v6aA'),
        B = n('7JQg'),
        D = n('E0cF'),
        F = n('q9Zt'),
        N = n('bPFD'),
        M = n('rHpw'),
        q = n('yE5w')
      function H(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function U(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var G = L.a.g9079b93,
        V = L.a.a57daeb1,
        W = L.a.deaf5b15,
        Q = (function (e) {
          s()(n, e)
          var t = U(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(n(k.a))
              }),
              h()(l()(e), '_render', function () {
                var t = e.props.tweet,
                  n = (t && D.a.getOriginalTweet(t)) || void 0
                if (!n || (n && n.user.id_str !== e.context.loggedInUserId))
                  return y.createElement(F.a, { onRetry: null, title: G })
                return y.createElement(N.a, {
                  dangerouslyDisableSandbox: !0,
                  onMessage: e._handleIFrameMessage,
                  reportError: x.a,
                  src: ''.concat('', '/i/tfb/v1/quick_promote/lite/').concat(n.id_str),
                  style: X.iframe,
                })
              }),
              h()(l()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              h()(l()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              h()(l()(e), '_handleIFrameMessage', function (t) {
                if (t && 'quick_promote' === t.name)
                  if ('scribe' === t.type) {
                    var n = e.props,
                      r = n.scribeAction,
                      a = n.scribeNamespace,
                      o = n.tweet,
                      c = (o && D.a.getOriginalTweet(o)) || void 0,
                      i = t.scribeData || {},
                      l = 'string' == typeof i.component ? i.component : 'quick_promote',
                      u = 'string' == typeof i.uiEvent ? i.uiEvent : ''
                    r(
                      z(z({}, a), {}, { component: l, action: u }),
                      z(z({}, i), {}, { items: c ? [A.a.getTweetItem(c)] : [] }),
                    )
                  } else if ('navigation' === t.type) {
                    var s = e.props,
                      d = s.history,
                      f = s.match,
                      p = s.tweet,
                      m = p && D.a.getOriginalTweet(p)
                    m &&
                      d.push(
                        '/'
                          .concat(f.params.screenName, '/status/')
                          .concat(m.id_str, '/')
                          .concat(q.a.Rweb, '/')
                          .concat(q.c.Intro),
                      )
                  } else 'close' === t.type && e._appBarRef && e._appBarRef.goBack()
              }),
              h()(l()(e), '_handleScribeAction', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'IframeTweetAnalytics',
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'view',
                  a = e.props,
                  o = a.scribeAction,
                  c = a.scribeNamespace,
                  i = a.tweet,
                  l = (i && D.a.getOriginalTweet(i)) || void 0
                o(
                  z(z({}, c), {}, { component: n, action: r }),
                  z(z({}, t), {}, { items: l ? [A.a.getTweetItem(l)] : [] }),
                )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchTweet(), (this._dwellStartTime = Date.now())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history,
                    r = e.tweet,
                    a = (r && D.a.getOriginalTweet(r)) || void 0
                  return y.createElement(
                    S.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: a ? a.permalink : '/',
                      history: n,
                      onBackClick: this._handleGoBack,
                      title: V,
                    },
                    y.createElement(C.a, { fetchStatus: t, render: this._render, retryMessage: W }),
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = Date.now() - this._dwellStartTime
                  this._handleScribeAction({ event_info: JSON.stringify({ duration_ms: e }) })
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Q, 'contextType', R.a)
      var X = M.a.create(function (e) {
        return { iframe: { flexGrow: 1 } }
      })
      t.default = Object(B.c)({ page: 'tweet', section: 'analytics' })(T(Q))
    },
    'AEu/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationHiddenRepliesScreen', function () {
          return $
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        g = n('KEM+'),
        h = n.n(g),
        y = (n('2G9S'), n('ERkP')),
        b = n('es0u'),
        v = n('m3Bd'),
        E = n.n(v),
        w =
          (n('WNMA'),
          n('KqXw'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('8Lfv')),
        _ = n('G6rE'),
        O = n('rxPX'),
        P = n('0KEI')
      function I(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      var T = function (e, t) {
          return t.match.params.statusId
        },
        C = function (e, t) {
          return t.match.params.screenName
        },
        k = function (e, t) {
          return 'PUSH' === t.history.action
        },
        S = Object(O.a)()
          .propsFromState(function () {
            return { screenName: C, statusId: T, isForwardNavigation: k, loggedInUser: _.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = E()(e, ['loggedInUser'])
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? I(Object(n), !0).forEach(function (t) {
                      h()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : I(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ loggedInScreenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('HIDDEN_REPLIES_PAGE'),
              clearTimelineCache: function (e) {
                return Object(w.a)(e)
              },
            }
          })
          .withAnalytics({ page: 'tweet', section: 'moderated_replies' }),
        j = n('xZXe'),
        L = n('QIgh'),
        x = n('8UdT'),
        A = n('IcAo'),
        R = n('VrCx'),
        B = n('yy6l'),
        D = function (e) {
          return Object(B.a)({
            component: j.a,
            createAdditionalProps: function () {
              return { withUnhideReply: e }
            },
            displayBlocked: !0,
            divider: { top: !0, bottom: !0 },
          })
        },
        F = n('WU0f'),
        N = n('oQhu'),
        M = n('yoO3'),
        q = n('fTQJ'),
        H = n('VS6U'),
        z = n('t62R'),
        U = n('FIs5'),
        G = n('3XMw'),
        V = n.n(G)
      function W(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Q = V.a.d806aa19,
        X = V.a.d80c77dc,
        K = V.a.ef939f4b,
        J = V.a.f7f2db4f,
        Z = y.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'cf1aca58' },
          y.createElement(
            z.b,
            { link: 'https://help.twitter.com/using-twitter/mentions-and-replies#hidden-reply' },
            V.a.a7511618,
          ),
        ),
        Y = function () {
          return y.createElement(U.a, { header: J, message: Z })
        },
        $ = (function (e) {
          s()(n, e)
          var t = W(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(
                l()(r),
                '_getMemoizedModule',
                Object(N.a)(function (e) {
                  return Object(F.a)(e)
                }),
              ),
              h()(l()(r), '_getModule', function () {
                var e = r.props.statusId
                return r._getMemoizedModule(e)
              }),
              r._clearTimelineCache(),
              r
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.loggedInScreenName,
                    r = e.screenName,
                    a = e.statusId
                  return r && a
                    ? y.createElement(
                        M.a,
                        null,
                        y.createElement(H.a, {
                          backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(a),
                          history: t,
                          primaryContent: this._renderPrimaryContent(),
                          sidebarContent: y.createElement(b.a, null),
                          subtitle: r === n ? X : K({ screenName: r }),
                          title: Q,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderPrimaryContent',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.loggedInScreenName,
                    a = n.screenName
                  return y.createElement(q.a, {
                    entryConfiguration:
                      ((e = { withUnhideReply: a === r }),
                      (t = e.withUnhideReply),
                      Object(A.a)({}, L.b, h()({}, x.b.Tweet, { handlers: h()({}, R.a.Tweet, D(t)) }))),
                    module: this._getModule(),
                    renderEmptyState: Y,
                    title: Q,
                  })
                },
              },
              {
                key: '_clearTimelineCache',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getModule(),
                    t = this.props,
                    n = t.clearTimelineCache,
                    r = t.createLocalApiErrorHandler,
                    a = t.isForwardNavigation
                  a && n(e).catch(r({}))
                },
              },
            ]),
            n
          )
        })(y.Component)
      t.default = S($)
    },
    JiIh: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('0GBF')
      t.a = function (e) {
        return r.createElement(a.a, e)
      }
    },
    aH1V: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'QuickPromoteScreen', function () {
          return Ra
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        g = n('KEM+'),
        h = n.n(g),
        y =
          (n('2G9S'),
          n('WNMA'),
          n('KqXw'),
          n('MvUL'),
          n('jQ3i'),
          n('x4t0'),
          n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('ERkP'))
      n('hBpG'), n('+KXO')
      function b(e) {
        throw new Error('Not reachable section reached!')
      }
      var v = n('97Jx'),
        E = n.n(v),
        w = (n('z84I'), n('i4UL'), n('vrRf'), n('M+/F'), n('RqPI')),
        _ = n('rxPX'),
        O = n('0KEI'),
        P = n('S3l+'),
        I = function (e) {
          return e.quickPromote.budget.dailyBudget
        },
        T = function (e) {
          return e.quickPromote.budget.durationDays
        },
        C = function (e) {
          return e.quickPromote.budget.errorMessage
        },
        k = function (e) {
          return (
            e.quickPromote.budget.availableBudgets ||
            (function (e) {
              throw new Error(e)
            })('No budgets found')
          )
        },
        S = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        j = function (e, t) {
          var n,
            r,
            a = Object(P.k)(e)
          return null === (n = e.ads.typeahead.forecastAudience[a]) ||
            void 0 === n ||
            null === (r = n.result) ||
            void 0 === r
            ? void 0
            : r.estimatedImpressions
        },
        L = Object(_.a)()
          .propsFromState(function () {
            return {
              dailyBudget: I,
              durationDays: T,
              availableBudgets: k,
              lang: w.n,
              currency: S,
              audience: j,
              errorMessage: C,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_BUDGET_SELECT_SCREEN',
              ),
              setDailyBudget: P.y,
              setBudgetDuration: P.u,
              fetchForecastedAudienceIfNeeded: P.f,
              setBudgetErrorMessage: P.v,
            }
          })
          .withAnalytics({ page: 'quick_promote' }),
        x = (n('1t7P'), n('jQ/y'), n('MWbm')),
        A = n('t62R'),
        R = n('rHpw'),
        B = function (e) {
          var t = e.children,
            n = e.description,
            r = e.descriptionDir,
            a = e.descriptionTestID,
            o = e.label,
            c = e.withBottomBorder,
            i = void 0 === c || c
          return y.createElement(
            x.a,
            { style: [D.descriptionItem, i ? D.bottomBorder : void 0] },
            !!o && y.createElement(A.b, { weight: 'bold' }, o),
            !!n &&
              y.createElement(
                x.a,
                { style: D.descriptionContainer },
                y.createElement(
                  A.b,
                  { color: 'gray700', dir: r, size: 'subtext2', style: D.descriptionContainer, testID: a },
                  n,
                ),
              ),
            t,
          )
        },
        D = R.a.create(function (e) {
          return {
            descriptionItem: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            descriptionContainer: { marginTop: e.spaces.space2 },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
          }
        }),
        F = n('E6XO'),
        N = n('WM1P'),
        M = function (e) {
          return (
            (function (e) {
              Object(N.c)(function () {
                var t = F.e(),
                  n = function () {
                    t.resume()
                  },
                  r = function () {
                    t.pause()
                  }
                return (
                  window.addEventListener('focus', n),
                  window.addEventListener('blur', r),
                  function () {
                    F.c(''.concat(N.a, ':dwell:').concat(e), t.end()),
                      window.removeEventListener('focus', n),
                      window.removeEventListener('blur', r)
                  }
                )
              })
            })(e.screenType),
            null
          )
        },
        q = n('Gpeq'),
        H = n('tevE'),
        z = function (e) {
          var t = e.primaryLabel,
            n = e.subtitle,
            r = e.title
          return y.createElement(
            x.a,
            { style: [U.bottomBorder, U.titleContainer] },
            y.createElement(
              A.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                align: 'center',
                size: 'headline1',
                weight: 'heavy',
              },
              r,
            ),
            !!t &&
              y.createElement(
                x.a,
                { style: U.primaryLabelContainer },
                y.createElement(A.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            y.createElement(
              x.a,
              { style: U.subtitleContainer },
              y.createElement(H.a, { align: 'center', color: 'gray700' }, n),
            ),
          )
        },
        U = R.a.create(function (e) {
          return {
            titleContainer: { paddingVertical: e.spaces.space32 },
            primaryLabelContainer: { marginTop: e.spaces.space12 },
            subtitleContainer: { marginTop: e.spaces.space12 },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
          }
        }),
        G = n('3XMw'),
        V = n.n(G),
        W = 'introButton',
        Q = 'nextButton',
        X = 'objectiveScreen',
        K = 'targetingScreen',
        J = function (e) {
          return 'targetingScreenGender'.concat(e)
        },
        Z = function (e) {
          return 'objectiveScreenObjective'.concat(e)
        },
        Y = 'targetingLocationScreen',
        $ = 'budgetSelectScreen',
        ee = 'reviewScreen',
        te = 'reviewButton',
        ne = 'reviewObjectiveDescription',
        re = 'reviewTargetingDescription',
        ae = 'reviewBudgetAndDurationDescription',
        oe = 'reviewPaymentPivot',
        ce = 'targetingLocationPivot',
        ie = 'backButton',
        le = 'targetingLocationSearch',
        ue = 'targetingLocationItem',
        se = n('4zmP'),
        de = n('9RkS'),
        fe = n('v6aA'),
        pe = n('Xrkv'),
        me = n('SrIh'),
        ge = V.a.dc4a9413,
        he = V.a.bad70c09,
        ye = V.a.c133a39b,
        be = V.a.ee5da8f4,
        ve = V.a.g4bf9cb7,
        Ee = V.a.gc3ce5d9,
        we = V.a.c1778029,
        _e = V.a.cb51c854,
        Oe = V.a.bb7b39e1,
        Pe = V.a.eb9466d0,
        Ie = V.a.c21037d0,
        Te = V.a.b07cc9f1,
        Ce = V.a.ce309bed,
        ke = V.a.c6c16a51,
        Se = V.a.cc49d03f,
        je = V.a.dbe9353d,
        Le = V.a.c64974fb,
        xe = V.a.i638f89c
      function Ae(e) {
        switch (e) {
          case 'AnyGender':
            return _e
          case 'Male':
            return Oe
          case 'Female':
            return Pe
          default:
            return Object(me.a)('Unknown gender: '.concat(e)), e
        }
      }
      function Re(e) {
        switch (e) {
          case 'COUNTRIES':
            return Ie
          case 'REGIONS':
            return Te
          case 'METROS':
            return Ce
          case 'CITIES':
            return ke
          case 'POSTAL_CODES':
            return Se
          default:
            return Object(me.a)('Unknown targeting locationType: '.concat(e)), e
        }
      }
      function Be(e) {
        var t = e.currency,
          n = e.durationDays,
          r = e.lang,
          a = e.totalBudgetNum.toLocaleString(Object(q.a)(r), {
            currency: t,
            style: 'currency',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        return ge({ totalBudget: a, durationLabel: Fe({ durationDays: n }) })
      }
      function De(e) {
        var t = e.numLocations,
          n = V.a.ia24dc8c(t)
        return he({ numLocations: n })
      }
      function Fe(e) {
        var t = e.durationDays,
          n = V.a.ia24dc8c(t)
        return ve({ durationDays: n })
      }
      var Ne = n('yE5w')
      function Me(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var qe = V.a.a3a09d48,
        He = V.a.e7eb3683,
        ze = V.a.d9f6e3cd,
        Ue = V.a.d9d6e10e,
        Ge = V.a.b3954ec9,
        Ve = V.a.e1b48db4,
        We = Array(30)
          .fill(null)
          .map(function (e, t) {
            return t + 1
          }),
        Qe = (function (e) {
          s()(n, e)
          var t = Me(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_fetchForecastedAudienceIfNeeded', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchForecastedAudienceIfNeeded)(t.match.params.statusId, n).catch(r())
              }),
              h()(l()(e), '_getSliderProps', function (e, t) {
                return { max: e.length - 1, min: 0, value: e.indexOf(t) }
              }),
              h()(l()(e), '_handleDurationSlider', function (t) {
                var n = e.props,
                  r = n.analytics,
                  a = n.durationDays,
                  o = n.setBudgetDuration,
                  c = We[t]
                a !== c &&
                  (Object(Ne.o)(r)(Ne.m.setBudgetDuration(''.concat(c))), o(c), e._fetchForecastedAudienceIfNeeded())
              }),
              h()(l()(e), '_handleBudgetSlider', function (t) {
                var n = e.props,
                  r = n.analytics,
                  a = n.availableBudgets,
                  o = n.dailyBudget,
                  c = n.setDailyBudget,
                  i = a[t]
                o !== i &&
                  (Object(Ne.o)(r)(Ne.m.setDailyBudget(''.concat(i))), c(i), e._fetchForecastedAudienceIfNeeded())
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.analytics
                  Object(Ne.o)(e)(Ne.m.budgetSelectPageLoad()), this._fetchForecastedAudienceIfNeeded()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(0, this.props.setBudgetErrorMessage)(null)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    a,
                    o = this.props,
                    c = o.audience,
                    i = o.availableBudgets,
                    l = o.currency,
                    u = o.dailyBudget,
                    s = o.durationDays,
                    d = o.errorMessage,
                    f = o.lang,
                    p = u.toLocaleString(Object(q.a)(f), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    m = i[0].toLocaleString(Object(q.a)(f), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    g = i
                      .slice(-1)[0]
                      .toLocaleString(Object(q.a)(f), {
                        currency: l,
                        style: 'currency',
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }),
                    h = c
                      ? ((t = (e = c).high),
                        (n = e.low),
                        (r = V.a.cf8abf58(n)),
                        (a = V.a.cf8abf58(t)),
                        Ee({ audienceLow: r, audienceHigh: a }))
                      : ' ',
                    b = Fe({ durationDays: s }),
                    v = Fe({ durationDays: We[0] }),
                    w = Fe({ durationDays: We.slice(-1)[0] }),
                    _ = this._getSliderProps(i, u),
                    O = this._getSliderProps(We, s),
                    P = Be({ totalBudgetNum: u * s, durationDays: s, lang: f, currency: l })
                  return y.createElement(
                    x.a,
                    { style: Xe.qpContainer, testID: $ },
                    y.createElement(M, { screenType: Ne.c.BudgetSelect }),
                    d && y.createElement(x.a, { style: Xe.gutter }, y.createElement(se.a, { text: d, type: 'danger' })),
                    y.createElement(z, { primaryLabel: P, subtitle: h, title: qe }),
                    y.createElement(
                      B,
                      { label: He },
                      y.createElement(
                        x.a,
                        { style: Xe.childSpacing },
                        y.createElement(
                          de.a,
                          E()({ accessibilityLabel: ze, accessibilityLabelValueText: '"'.concat(p, '"') }, _, {
                            maxIcon: y.createElement(A.b, { style: Xe.iconText }, g),
                            minIcon: y.createElement(A.b, { style: Xe.iconText }, m),
                            onChange: this._handleBudgetSlider,
                            thumbLabel: p,
                          }),
                        ),
                      ),
                    ),
                    y.createElement(
                      B,
                      { label: Ue },
                      y.createElement(
                        x.a,
                        { style: Xe.childSpacing },
                        y.createElement(
                          de.a,
                          E()({ accessibilityLabel: Ge, accessibilityLabelValueText: '"'.concat(b, '"') }, O, {
                            maxIcon: y.createElement(A.b, { style: Xe.iconText }, w),
                            minIcon: y.createElement(A.b, { style: Xe.iconText }, v),
                            onChange: this._handleDurationSlider,
                            thumbLabel: b,
                          }),
                        ),
                      ),
                    ),
                    y.createElement(
                      x.a,
                      { style: Xe.disclaimer },
                      y.createElement(H.a, { align: 'center', color: 'gray700', size: 'subtext2' }, Ve),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Qe, 'contextType', fe.a)
      var Xe = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            disclaimer: {
              marginVertical: e.componentDimensions.gutterVertical,
              marginHorizontal: e.componentDimensions.gutterHorizontal,
            },
            gutter: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            childSpacing: { marginTop: e.spaces.space4 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        Ke = L(Qe),
        Je = n('XOJV'),
        Ze = n('kGix'),
        Ye = function (e, t) {
          return t.match.params.statusId
        },
        $e = function (e, t) {
          return Je.a.selectHydrated(e, Ye(0, t))
        },
        et = function (e, t) {
          return Object(Ze.d)(
            Je.a.selectFetchStatus(e, Ye(0, t)),
            e.quickPromote.budget.availableBudgetsFetchStatus,
            e.quickPromote.targeting.initialTargetedLocationsFetchStatus,
            e.quickPromote.account.accountDataFetchStatus,
            e.quickPromote.firstLoad ? Ze.a.LOADED : Ze.a.LOADING,
          )
        },
        tt = function (e, t) {
          return e.quickPromote.promoteStatus
        },
        nt = function (e, t) {
          return e.quickPromote.promoteErrorCode
        },
        rt = Object(_.a)()
          .propsFromState(function () {
            return { statusId: Ye, fetchStatus: et, tweet: $e, promoteFetchStatus: tt, promoteErrorCode: nt }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_SCREEN',
              ),
              fetchTweetIfNeeded: Je.a.fetchOneIfNeeded,
              fetchCurrentTargetingLocationIfNeeded: P.e,
              fetchAvailableBudgetsIfNeeded: P.c,
              fetchAdsAccountDataIfNeeded: P.b,
              fetchProfessionalEligibilityIfNeeded: P.h,
              fetchCouponsIfNeeded: P.d,
              handleFirstLoad: function () {
                return (function (e) {
                  var t = e.analytics,
                    n = e.history,
                    r = e.location,
                    a = e.match.params,
                    o = a.quickPromotePlatform,
                    c = a.quickPromoteScreenName,
                    i = a.screenName,
                    l = a.statusId,
                    u = { pa_signup_complete: r.query.pa_signup_complete || '' }
                  return Object(P.j)(i, l, o, c, n, u, t)
                })(e)
              },
              setPromoteFetchStatus: P.E,
            }
          })
          .withAnalytics(Ne.n),
        at = Object(_.a)().withAnalytics(Ne.n),
        ot = n('feu+')
      function ct(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var it = V.a.e1bca506,
        lt = V.a.e4a4c608,
        ut = V.a.a219e217,
        st = (function (e) {
          s()(n, e)
          var t = ct(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleGoToAnalytics', function () {
                var t = e.props,
                  n = t.history,
                  r = t.match.params,
                  a = r.quickPromotePlatform,
                  o = r.screenName,
                  c = r.statusId
                Object(Ne.k)(n)(o, c, a)
              }),
              h()(l()(e), '_handleClose', function () {
                e.props.history.goBackThroughModals()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.analytics
                  Object(Ne.o)(e)(Ne.m.donePageLoad())
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: Ne.c.Done }),
                    y.createElement(ot.a, {
                      actionLabel: ut,
                      headline: it,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToAnalytics,
                      onClose: this._handleClose,
                      subtext: lt,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(st, 'contextType', fe.a)
      var dt = at(st),
        ft = n('v//M'),
        pt = n('W5XZ'),
        mt = n('jHSc'),
        gt =
          (n('Cm4o'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        ht = function (e) {
          return e.quickPromote.coupons
        },
        yt = Object(_.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: gt, coupons: ht }
          })
          .withAnalytics(Ne.n),
        bt = n.p + 'desktop_header_image.bfa9e365.png',
        vt = n('TIdA'),
        Et = n('A91F')
      function wt(e) {
        var t = e.style
        return y.createElement(
          x.a,
          { style: t },
          y.createElement(vt.a, { accessibilityLabel: '', aspectMode: Et.a.exact(750 / 306), image: bt }),
        )
      }
      var _t = n.p + 'mobile_header_image.431e8465.png'
      function Ot(e) {
        var t = e.style
        return y.createElement(
          x.a,
          { style: t },
          y.createElement(vt.a, { accessibilityLabel: '', aspectMode: Et.a.COVER, image: _t }),
        )
      }
      var Pt = n('cHvH')
      function It(e) {
        var t = e.style
        return y.createElement(Pt.a, null, function (e) {
          var n = e.windowHeight
          return e.windowWidth > R.a.theme.breakpoints.medium
            ? y.createElement(wt, { style: t })
            : y.createElement(Ot, { style: [t, { height: 0.5 * n }] })
        })
      }
      function Tt(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Ct = V.a.dcfb0332,
        kt = V.a.db841200,
        St = V.a.hc67be9d,
        jt = (function (e) {
          s()(n, e)
          var t = Tt(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleGoToNextPage', function () {
                var t = e.props,
                  n = t.history,
                  r = t.match.params,
                  a = r.quickPromotePlatform,
                  o = r.screenName,
                  c = r.statusId,
                  i = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled')
                n.push(Object(Ne.i)(o, c, a, i ? Ne.c.Objective : Ne.c.Targeting))
              }),
              h()(l()(e), '_handleClose', function () {
                e.props.history.goBackThroughModals()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.analytics,
                    a = n.hasFundingInstrument,
                    o = n.location,
                    c = n.match.params,
                    i = c.screenName,
                    l = c.statusId,
                    u = (function (e, t, n) {
                      if (!e) return 'none'
                      var r = new URL(e, window.location.origin)
                      if (r.pathname === '/'.concat(t)) return 'me'
                      if (r.pathname === '/'.concat(t, '/status/').concat(n)) return 'tweet'
                      if (r.pathname === '/'.concat(t, '/status/').concat(n, '/analytics')) return 'analytics'
                      if ('/i/flow/convert_to_professional' === r.pathname) return 'ptt'
                      return 'other'
                    })(null === (e = o.state) || void 0 === e ? void 0 : e.previousPath, i, l),
                    s = 'other' === u ? (null === (t = o.state) || void 0 === t ? void 0 : t.previousPath) : void 0
                  Object(Ne.o)(r)(Ne.m.introPageLoad({ hasFundingInstrument: a, entryPoint: u, otherEntryPoint: s }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.match.params.quickPromotePlatform === Ne.a.Rweb
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: Ne.c.Intro }),
                    y.createElement(ot.a, {
                      actionLabel: St,
                      graphic: It,
                      graphicDisplayMode: 'illustrationFullWidth',
                      headline: Ct,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToNextPage,
                      onClose: this._handleClose,
                      primaryButtonTestID: W,
                      subtext: kt,
                      withCloseButton: e,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(jt, 'contextType', fe.a)
      var Lt = yt(jt),
        xt = (n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        At = n.n(xt),
        Rt = function (e, t) {
          return e.quickPromote.objective
        },
        Bt = function (e, t) {
          return Je.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        Dt = Object(_.a)()
          .propsFromState(function () {
            return { selectedObjective: Rt, tweet: Bt }
          })
          .propsFromActions(function () {
            return { setObjective: P.C }
          })
          .withAnalytics(Ne.n),
        Ft = n('h0NW'),
        Nt = V.a.d7d55f3b,
        Mt = V.a.b25fd3d6,
        qt = V.a.bf214f47,
        Ht = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            r = e.onLoad
          return (
            y.useEffect(function () {
              return r()
            }, []),
            y.createElement(ot.a, {
              actionLabel: qt,
              children: y.createElement(
                x.a,
                { style: zt.infoItemGroup },
                y.createElement(Ft.a, { containerStyle: zt.infoItem, items: t }),
              ),
              contentStyle: zt.heading,
              graphicDisplayMode: 'none',
              headline: Nt,
              onAction: n,
              onClose: n,
              subtext: Mt,
              withCloseButton: !1,
            })
          )
        },
        zt = R.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        Ut = n('W2FU'),
        Gt = n('E0cF'),
        Vt = n('gSL+'),
        Wt = n('xHsv'),
        Qt = n('Oib4'),
        Xt = n('Dcm7'),
        Kt = n('iEUn'),
        Jt = n('pwey'),
        Zt = n('Lsrn'),
        Yt = n('k/Ka')
      function $t(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $t(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $t(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var tn = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Yt.a)(
          'svg',
          en(
            en({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Zt.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M11.25 22h-7C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v7c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7c0-.413-.337-.75-.75-.75H4.25c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h7c.414 0 .75.336.75.75s-.336.75-.75.75z',
            }),
            y.createElement('path', {
              d: 'M22.094 20.01l-3.614-3.614 2.586-.997c.19-.074.313-.26.307-.465-.008-.204-.144-.38-.34-.44l-8.55-2.6c-.168-.05-.353-.006-.478.12-.125.124-.17.31-.12.478l2.6 8.55c.06.195.237.33.44.34h.02c.196 0 .374-.122.445-.308l.997-2.586L20 22.102c.195.194.514.194.708 0l1.386-1.386c.194-.195.194-.513 0-.707z',
            }),
          ),
        )
      }
      tn.metadata = { width: 24, height: 24 }
      var nn = tn
      function rn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function an(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? rn(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : rn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var on = V.a.fcc839b5,
        cn = V.a.d80964aa,
        ln = V.a.d4f57cce,
        un = V.a.g06d6bf8,
        sn = V.a.c1a1817b,
        dn = V.a.efc9b3fe,
        fn = Qt.a,
        pn = V.a.h277a2e8,
        mn = V.a.gd429fea,
        gn = Xt.a,
        hn = V.a.icb22cdd,
        yn = V.a.i859a9d3,
        bn = V.a.e974b2d4,
        vn = V.a.b9c9b214,
        En = V.a.i0e569bf,
        wn = R.a.create(function (e) {
          return {
            labelContainer: { flexGrow: 1, paddingVertical: e.spaces.space16 },
            qpContainer: { flex: 1 },
            radioGroupContainer: { paddingHorizontal: e.spaces.space32 },
            titleContainer: { paddingVertical: e.spaces.space32 },
            icon: { marginRight: e.spaces.space24, fontSize: e.spaces.space20 },
            engagementIcon: { color: e.colors.red600 },
            followersIcon: { color: e.colors.green600 },
            websiteClicksIcon: { color: e.colors.blue500 },
            goalSelectionCallout: { marginHorizontal: 'auto', marginTop: 'auto', marginBottom: e.spaces.space36 },
          }
        }),
        _n = {
          label: cn,
          value: Ut.c.Engagements,
          decoration: y.createElement(Kt.a, { style: [wn.icon, wn.engagementIcon] }),
          testID: Z(Ut.c.Engagements),
        },
        On = {
          label: ln,
          value: Ut.c.Followers,
          decoration: y.createElement(Jt.a, { style: [wn.icon, wn.followersIcon] }),
          testID: Z(Ut.c.Followers),
        },
        Pn = {
          label: un,
          value: Ut.c.WebsiteClicks,
          decoration: y.createElement(nn, { style: [wn.icon, wn.websiteClicksIcon] }),
          testID: Z(Ut.c.WebsiteClicks),
        },
        In = [
          { label: cn, description: bn, decoration: y.createElement(Kt.a, { style: [wn.icon, wn.engagementIcon] }) },
          { label: ln, description: vn, decoration: y.createElement(Jt.a, { style: [wn.icon, wn.followersIcon] }) },
          { label: un, description: En, decoration: y.createElement(nn, { style: [wn.icon, wn.websiteClicksIcon] }) },
        ]
      function Tn() {
        return y.createElement(se.a, { Icon: fn, headline: sn, text: dn, type: 'warning' })
      }
      function Cn() {
        return y.createElement(se.a, { Icon: gn, headline: pn, text: mn, type: 'danger' })
      }
      var kn = Dt(function (e) {
          var t,
            n,
            r,
            a,
            o,
            c,
            i,
            l = e.analytics,
            u = e.history,
            s = e.location,
            d = e.selectedObjective,
            f = e.setObjective,
            p = e.tweet,
            m = p ? Gt.a.getOriginalTweet(p) : p,
            g =
              null !=
                (null == m || null === (t = m.entities) || void 0 === t || null === (n = t.media) || void 0 === n
                  ? void 0
                  : n.length) &&
              (null == m || null === (r = m.entities) || void 0 === r || null === (a = r.media) || void 0 === a
                ? void 0
                : a.length) > 0,
            h =
              1 ===
              (null == m || null === (o = m.entities) || void 0 === o || null === (c = o.urls) || void 0 === c
                ? void 0
                : c.length),
            b = !!(
              (null != m && m.in_reply_to_status_id_str) ||
              (null != m && m.in_reply_to_name) ||
              (null != m && m.in_reply_to_screen_name) ||
              (null != m && m.in_reply_to_user_id_str) ||
              (null != m && m.in_reply_to_user)
            )
          y.useEffect(function () {
            Object(Ne.o)(l)(Ne.m.goalSelectionPageLoad())
          }, [])
          var v = y.useMemo(
              function () {
                return (function (e) {
                  var t = e.selectedObjective,
                    n = e.tweetContainsLinks,
                    r = e.tweetHasMedia,
                    a = e.tweetIsReply
                  return [_n]
                    .concat(
                      At()(a ? [] : [an(an({}, On), {}, { description: r && t === Ut.c.Followers ? Tn() : void 0 })]),
                      [an(an({}, Pn), {}, { disabled: !n, description: !n && Cn() })],
                    )
                    .map(function (e) {
                      return an(
                        an({}, e),
                        {},
                        { label: y.createElement(A.b, { size: 'headline2', weight: 'bold' }, e.label) },
                      )
                    })
                })({ tweetHasMedia: g, tweetContainsLinks: h, selectedObjective: d, tweetIsReply: b })
              },
              [g, h, d, b],
            ),
            E = y.useCallback(
              function (e, t) {
                f(t), Object(Ne.o)(l)(Ne.m.setPromoteGoal(t))
              },
              [l, f],
            )
          return y.createElement(
            x.a,
            { style: wn.qpContainer, testID: X },
            y.createElement(M, { screenType: Ne.c.Objective }),
            y.createElement(
              x.a,
              { style: wn.titleContainer },
              y.createElement(A.b, { align: 'center', size: 'headline1', weight: 'bold' }, on),
            ),
            y.createElement(
              x.a,
              null,
              y.createElement(Vt.a, { name: 'objective-picker', onChange: E, options: v, value: d }),
            ),
            y.createElement(
              x.a,
              { style: wn.goalSelectionCallout },
              y.createElement(Wt.a, {
                description: hn,
                learnMoreLabel: yn,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: s.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = s.state) && void 0 !== i && i.showEducationInterstitial
              ? y.createElement(Ht, {
                  infoItems: In,
                  onClose: function () {
                    return u.replace(s.pathname, { showEducationInterstitial: !1 })
                  },
                  onLoad: function () {
                    return Object(Ne.o)(l)(Ne.m.educationInterstitialLoad())
                  },
                })
              : null,
          )
        }),
        Sn = (n('ho0z'), n('zh9S')),
        jn = n('y0iL'),
        Ln = function (e, t) {
          return t.match.params.statusId
        },
        xn = function (e, t) {
          return Je.a.selectHydrated(e, Ln(0, t))
        },
        An = function (e, t) {
          return Je.a.selectFetchStatus(e, Ln(0, t))
        },
        Rn = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        Bn = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        Dn = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: An, tweet: xn, adsAccount: Rn, fundingInstrument: Bn }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: Je.a.fetchOneIfNeeded,
              scribeAction: Sn.c,
              savePlatformRedirectBackState: function () {
                return Object(jn.i)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: jn.b,
            }
          })
          .withAnalytics(Ne.n),
        Fn = n('tI3i'),
        Nn = n.n(Fn),
        Mn = n('Rp9C'),
        qn = n('bPFD')
      function Hn(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var zn = (function (e) {
        s()(n, e)
        var t = Hn(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            h()(l()(e), '_setAppBarRef', function (t) {
              e._appBarRef = t
            }),
            h()(l()(e), '_handleIFrameMessage', function (t) {
              var n = e.props,
                r = n.analytics,
                a = n.tweet
              if (t && 'quick_promote' === t.name)
                if ('scribe' === t.type) {
                  var o = (a && Gt.a.getOriginalTweet(a)) || void 0,
                    c = o ? [Mn.a.getTweetItem(o)] : [],
                    i = t.scribeData || {},
                    l = 'string' == typeof i.component ? i.component : 'quick_promote',
                    u = 'string' == typeof i.uiEvent ? i.uiEvent : ''
                  r.scribe({ component: l, action: u, data: { items: c } })
                } else if ('navigation' === t.type) {
                  var s = e.props,
                    d = s.createLocalApiErrorHandler,
                    f = s.fetchAdsAccountDataIfNeeded,
                    p = s.history,
                    m = s.match.params,
                    g = m.quickPromotePlatform,
                    h = m.screenName,
                    y = m.statusId
                  Nn()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
                    f(e.context.loggedInUserId, !0).catch(d()),
                    p.push('/'.concat(h, '/status/').concat(y, '/').concat(g, '/').concat(Ne.c.Review))
                } else 'close' === t.type && e._appBarRef && e._appBarRef.goBack()
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
                  t = e.adsAccount,
                  n = e.analytics,
                  r = e.fundingInstrument,
                  a = e.match,
                  o = e.savePlatformRedirectBackState,
                  c = a.params,
                  i = c.quickPromotePlatform,
                  l = c.statusId
                o()
                var u = Object(Ne.h)(i, t, l, r)
                Object(Ne.o)(n)(Ne.m.paymentPageLoad(u.url)), u.isSameHost || (window.location.href = u.url)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.adsAccount,
                  n = e.fundingInstrument,
                  r = e.match.params,
                  a = r.quickPromotePlatform,
                  o = r.statusId,
                  c = Object(Ne.h)(a, t, o, n)
                return c.isSameHost
                  ? y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(M, { screenType: Ne.c.Payment }),
                      y.createElement(qn.a, {
                        dangerouslyDisableSandbox: !0,
                        onMessage: this._handleIFrameMessage,
                        reportError: me.a,
                        src: c.url,
                        style: Un.iframe,
                      }),
                    )
                  : null
              },
            },
          ]),
          n
        )
      })(y.PureComponent)
      h()(zn, 'contextType', fe.a)
      var Un = R.a.create(function (e) {
          return { iframe: { flexGrow: 1, paddingTop: 0 } }
        }),
        Gn = Dn(zn)
      function Vn(e) {
        new Image().src = e
      }
      function Wn() {
        return y.createElement(Pt.a, null, function (e) {
          e.windowHeight
          return Vn(e.windowWidth > R.a.theme.breakpoints.medium ? bt : _t), null
        })
      }
      var Qn = function (e) {
          return e.quickPromote.objective
        },
        Xn = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Kn = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Jn = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Zn = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        Yn = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        $n = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        er = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        tr = function (e) {
          return e.quickPromote.account.vatInfo
        },
        nr = function (e) {
          return e.quickPromote.account.adsAccount
        },
        rr = function (e) {
          return e.quickPromote.promoteStatus
        },
        ar = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        or = Object(_.a)()
          .propsFromState(function () {
            return {
              objective: Qn,
              targetedLocations: Xn,
              ageBucket: Kn,
              gender: Jn,
              dailyBudget: Zn,
              durationDays: Yn,
              lang: w.n,
              country: P.n,
              currency: $n,
              fundingInstrument: er,
              vatInfo: tr,
              adsAccount: nr,
              promoteStatus: rr,
              promoteErrorCode: ar,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_REVIEW_SCREEN',
              ),
              clearPersistedRedirectBackState: function () {
                return Object(jn.i)()
              },
              createPromotion:
                ((t = e),
                (n = t.history),
                (r = t.match),
                function (e) {
                  var t = r.params,
                    a = t.quickPromotePlatform,
                    o = t.screenName,
                    c = t.statusId
                  return Object(P.a)(n, o, c, a, e)
                }),
            }
            var t, n, r
          })
          .withAnalytics(Ne.n),
        cr = n('csss'),
        ir = n('/yvb'),
        lr = n('shC7')
      function ur(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var sr = V.a.c3c57e3e,
        dr = V.a.h06724b4,
        fr = V.a.a96f811e,
        pr = V.a.b069d89c,
        mr = V.a.a3a09d48,
        gr = V.a.e36bce63,
        hr = V.a.i41612d9,
        yr = V.a.cdae1af0,
        br = V.a.ed8bb5af,
        vr = V.a.be2dc078,
        Er = V.a.da2805d1,
        wr = V.a.ef4602eb,
        _r = V.a.a4db098b,
        Or = V.a.ef7e3916,
        Pr = (function (e) {
          s()(n, e)
          var t = ur(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getPaymentDescription', function (t) {
                var n = e.props.adsAccount
                return n && n.timezone && n.country_code ? (t ? yr : br) : vr
              }),
              h()(l()(e), '_handlePromote', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createPromotion
                Object(Ne.o)(n)(Ne.m.promotionClick()), r(n)
              }),
              h()(l()(e), '_getErrorMessage', function () {
                var t = e.props,
                  n = t.promoteErrorCode,
                  r = t.promoteStatus
                if (!n) return r === Ze.a.LOADED ? Er : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return Or
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return _r
                  default:
                    return wr
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
                    t = e.analytics,
                    n = e.clearPersistedRedirectBackState,
                    r = e.fundingInstrument
                  n()
                  var a = !!r
                  Object(Ne.o)(t)(Ne.m.reviewPageLoad({ hasFundingInstrument: a }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    a = this.props,
                    o = a.ageBucket,
                    c = a.country,
                    i = a.currency,
                    l = a.dailyBudget,
                    u = a.durationDays,
                    s = a.fundingInstrument,
                    d = a.gender,
                    f = a.lang,
                    p = a.match,
                    m = a.objective,
                    g = a.promoteStatus,
                    h = a.targetedLocations,
                    v = a.vatInfo,
                    E =
                      ((e = Ut.e[o]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? ye({ minAge: n, maxAge: t }) : be({ minAge: n })),
                    w = (function (e) {
                      switch (e) {
                        case 'Engagements':
                          return je
                        case 'Followers':
                          return Le
                        case 'WebsiteClicks':
                          return xe
                        default:
                          throw b()
                      }
                    })(m),
                    _ = (function (e) {
                      var t = e.formattedAge,
                        n = e.gender,
                        r = e.locations,
                        a = r.length
                      return we({
                        newlinePlaceholder: '\n',
                        locations: Object(pe.a)(r),
                        locationsHeading: De({ numLocations: a }),
                        formattedAge: t,
                        gender: n,
                      })
                    })({
                      locations: h.map(function (e) {
                        return e.localized_name
                      }),
                      formattedAge: E,
                      gender: Ae(d),
                    }),
                    O = Be({ totalBudgetNum: l * u, durationDays: u, lang: f, currency: i }),
                    I = p.params,
                    T = I.quickPromotePlatform,
                    C = I.screenName,
                    k = I.statusId,
                    S = this._getErrorMessage(),
                    j = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    L = v && null === v.tax_id && null === v.tax_exemption_id && 'NOT_SET' === v.tax_category,
                    R = !!s
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: Ne.c.Review }),
                    y.createElement(
                      x.a,
                      { style: Tr.qpContainer, testID: ee },
                      S &&
                        y.createElement(x.a, { style: Tr.gutter }, y.createElement(se.a, { text: S, type: 'danger' })),
                      y.createElement(z, { subtitle: dr, title: sr }),
                      j && y.createElement(B, { description: w, descriptionTestID: ne, label: fr }),
                      y.createElement(B, { description: _, descriptionTestID: re, label: pr }),
                      y.createElement(B, {
                        description: O,
                        descriptionDir: lr.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: ae,
                        label: mr,
                      }),
                      y.createElement(cr.a, {
                        description:
                          s && !L
                            ? s.description
                            : y.createElement(
                                A.b,
                                { color: 'primary', size: 'subtext2' },
                                this._getPaymentDescription(R),
                              ),
                        label: y.createElement(A.b, { weight: 'bold' }, gr),
                        link: !s || L ? Object(Ne.i)(C, k, T, Ne.c.Payment) : void 0,
                        testID: oe,
                      }),
                    ),
                    y.createElement(
                      x.a,
                      { style: Tr.bottomElements },
                      y.createElement(
                        ir.a,
                        {
                          disabled: !s || L || P.M.includes(g),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: te,
                          type: 'brandFilled',
                        },
                        hr,
                      ),
                      y.createElement(
                        H.a,
                        { style: Tr.terms },
                        ((r = c),
                        y.createElement(
                          V.a.I18NFormatMessage,
                          { $i18n: 'c99d7100' },
                          y.createElement(A.b, { link: Object(Ne.j)(r) }, V.a.d56b5ac3),
                        )),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Pr, 'contextType', fe.a)
      var Ir,
        Tr = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1, overflow: 'auto' },
            bottomElements: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space32 },
            terms: {
              marginTop: e.spaces.space12,
              textAlign: 'center',
              color: e.colors.gray700,
              fontSize: e.fontSizes.subtext3,
            },
            gutter: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        Cr = or(Pr),
        kr = n('Ty5D'),
        Sr =
          (n('yH/f'),
          n('7xRU'),
          function (e, t) {
            var n = Lr(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        jr = function (e, t) {
          var n,
            r = Lr(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[r]) || void 0 === n ? void 0 : n.fetchStatus
        },
        Lr = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        xr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Ar = Object(_.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: Lr,
              targetingLocations: Sr,
              targetedLocations: xr,
              fetchStatus: jr,
              userCountry: w.v,
            }
          })
          .propsFromActions(function () {
            return {
              setTargetedLocations: P.I,
              setAndFetchTargetingLocationQuery: P.q,
              setTargetingLocationQuery: P.K,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_TARGETING_LOCATION_SCREEN',
              ),
            }
          })
          .withAnalytics(Ne.n),
        Rr = n('VwDm'),
        Br = n('G1WX'),
        Dr = n('cCdp'),
        Fr = n('xKuM'),
        Nr = n('5Vk4'),
        Mr = n('6OUF'),
        qr = n('zrOZ'),
        Hr = n('kevv')
      function zr(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Ur = V.a.cc642518,
        Gr = V.a.i0e8c3c6,
        Vr = V.a.deaf5b15,
        Wr = V.a.f69ad048,
        Qr = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        Xr = Object.freeze(
          ((Ir = {}), h()(Ir, Ne.e.CurrentCountryMatch, 0), h()(Ir, Ne.e.Match, 1), h()(Ir, Ne.e.NoMatch, 2), Ir),
        ),
        Kr = (function (e) {
          s()(n, e)
          var t = zr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { errorMessage: null }),
              h()(l()(e), '_renderSearch', function () {
                var t = e.props,
                  n = t.fetchStatus,
                  r = t.targetingLocationQuery
                return y.createElement(
                  Jr,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  y.createElement(x.a, null, y.createElement(A.b, { style: Zr.headingText, weight: 'heavy' }, Gr)),
                  y.createElement(Br.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: Vr }),
                )
              }),
              h()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              h()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(qr.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  r = e._getTargetingLocationOptions()
                return y.createElement(
                  x.a,
                  { style: Zr.overflow },
                  r.map(function (t) {
                    var r = t.localized_name,
                      a = t.location_type,
                      o = t.targeting_value
                    return y.createElement(Dr.a, {
                      checked: n.has(o),
                      helpText: Re(a),
                      key: o,
                      label: r,
                      name: o,
                      onChange: e._handleSearchSelect,
                      testID: ue,
                    })
                  }),
                )
              }),
              h()(l()(e), '_getTargetingLocationOptions', function () {
                var t,
                  n,
                  r,
                  a = e.props,
                  o = a.targetingLocationQuery,
                  c = a.targetingLocations,
                  i = a.userCountry,
                  l =
                    null !==
                      (t =
                        null == c || null === (n = c.result) || void 0 === n || null === (r = n[0]) || void 0 === r
                          ? void 0
                          : r.locations) && void 0 !== t
                      ? t
                      : [],
                  u = Object(Ne.g)(i || 'US'),
                  s = l.filter(function (e) {
                    var t = e.country_code,
                      n = e.localized_name
                    return u(n, t, o) !== Ne.e.NoMatch
                  })
                return Object(Hr.a)(
                  s,
                  [
                    function (e) {
                      var t = e.country_code,
                        n = e.localized_name,
                        r = u(n, t, o)
                      return Xr[r]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = Qr[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(me.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(Qr).join(', '), '}'),
                            )
                          })(n) || Object.keys(Qr).length
                    },
                    function (e) {
                      return e.localized_name
                    },
                  ],
                  'asc',
                )
              }),
              h()(l()(e), '_handleSearchSelect', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.setTargetedLocations,
                  c = r.setTargetingLocationQuery
                if (n) {
                  e.setState({ errorMessage: null })
                  var i = e._getTargetingLocationOptions().find(function (e) {
                    return e.targeting_value === t
                  })
                  i
                    ? (Object(Ne.o)(a)(
                        Ne.m.setTargetingLocation({
                          id: i.targeting_value,
                          locationType: i.location_type,
                          countryCode: i.country_code,
                        }),
                      ),
                      o([i]),
                      e._handleGoBack())
                    : Object(me.a)('Quick Promote: could not find "'.concat(t, '" in list of targeting options'))
                } else Object(Ne.o)(a)(Ne.m.targetingLocationError()), e.setState({ errorMessage: Wr })
                c('')
              }),
              h()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  r = t.targetingLocationQuery,
                  a = e.state.errorMessage
                return y.createElement(
                  Jr,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  y.createElement(
                    x.a,
                    null,
                    a && y.createElement(x.a, { style: Zr.gutter }, y.createElement(se.a, { text: a, type: 'danger' })),
                    y.createElement(A.b, { style: Zr.headingText, weight: 'heavy' }, De({ numLocations: n.length })),
                  ),
                  y.createElement(
                    x.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        r = t.location_type,
                        a = t.targeting_value
                      return y.createElement(Dr.a, {
                        checked: !0,
                        helpText: Re(r),
                        key: a,
                        label: n,
                        name: a,
                        onChange: e._handleSearchSelect,
                        testID: ue,
                      })
                    }),
                  ),
                )
              }),
              h()(l()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.history,
                  r = t.location,
                  a = t.match.params,
                  o = a.quickPromotePlatform,
                  c = a.quickPromoteScreenName,
                  i = a.screenName,
                  l = a.statusId,
                  u = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled')
                Object(Ne.l)(n, r)(i, l, o, c, u)
              }),
              h()(l()(e), '_handleTargetingLocationChange', function (t) {
                var n = t.target.value,
                  r = e.props,
                  a = r.analytics,
                  o = r.createLocalApiErrorHandler,
                  c = r.setAndFetchTargetingLocationQuery
                Object(Ne.o)(a)(Ne.m.targetingLocationSearch(n)), c(n).catch(o())
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.analytics
                  Object(Ne.o)(e)(Ne.m.targetingLocationPageLoad())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._handleClear()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.targetingLocationQuery
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: Ne.c.TargetingLocation }),
                    e ? this._renderSearch() : this._renderSelected(),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Kr, 'contextType', fe.a)
      var Jr = function (e) {
          var t = e.children,
            n = e.onBack,
            r = e.onChange,
            a = e.onClear,
            o = e.targetingLocationQuery
          return y.createElement(
            x.a,
            { style: Zr.qpContainer, testID: Y },
            y.createElement(Fr.a, {
              leftControl: y.createElement(Nr.a, { onClick: n }),
              middleControl: y.createElement(Mr.a, {
                Icon: Rr.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: r,
                onClear: a,
                placeholder: Ur,
                style: Zr.input,
                testID: le,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        Zr = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            input: { marginVertical: e.spaces.space12 },
            headingText: {
              fontSize: e.fontSizes.headline1,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              borderTopWidth: 1,
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
            },
            gutter: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            overflow: { flex: '1 1 200px', overflowY: 'auto' },
          }
        }),
        Yr = Ar(Kr),
        $r = n('ddV6'),
        ea = n.n($r),
        ta = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        na = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        ra = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        aa = Object(_.a)()
          .propsFromState(function () {
            return { targetedLocations: ta, selectedGender: na, selectedAgeBucket: ra }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: P.G, setTargetedGender: P.H }
          })
          .withAnalytics(Ne.n),
        oa = n('JiIh'),
        ca = n('fyvP'),
        ia = n('J4ZH'),
        la = n('tn7R'),
        ua = n('mN6z')
      function sa(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var da = V.a.hba1d105,
        fa = V.a.cba0133d,
        pa = V.a.e1efbead,
        ma = V.a.c6ff7c1f,
        ga = V.a.b555fb45,
        ha = V.a.a8d0108d,
        ya = [Ut.b.Any, Ut.b.Female, Ut.b.Male].map(function (e) {
          return { label: Ae(e), value: e, testID: J(e) }
        }),
        ba = V.a.j2c03e12,
        va = ['13', '18', '21', '25', '35', '50'],
        Ea = [void 0, void 0, void 0, '24', '34', '49', '54'],
        wa = Object(ia.a)(Object(la.a)(Ut.e), function (e) {
          return e.maxAge || 'over'
        }),
        _a = Ea.length
      function Oa(e, t) {
        var n
        if (e && t) return null === (n = Ut.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var Pa = (function (e) {
        s()(n, e)
        var t = sa(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            h()(l()(e), '_handleGenderChange', function (t, n) {
              var r = e.props,
                a = r.analytics
              ;(0, r.setTargetedGender)(n), Object(Ne.o)(a)(Ne.m.setTargetingGender(n))
            }),
            h()(l()(e), '_handleAgeBucketChange', function (t, n) {
              var r = ea()(t, 2),
                a = r[0],
                o = r[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                u = c.setTargetedAgeBucket,
                s = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(ua.a)(s, [a, o]))
                if (n) {
                  var d = va[a]
                  if (!d) return
                  var f = Oa(d, o === _a ? 'over' : Ea[o])
                  if (f) Object(Ne.o)(i)(Ne.m.setTargetingAgeBucket(f)), u(f)
                  else {
                    var p = Object.keys(Ut.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: p })
                  }
                } else {
                  var m = o === _a ? 'over' : Ea[o]
                  if (!m) return
                  var g = Oa(va[a], m)
                  if (g) Object(Ne.o)(i)(Ne.m.setTargetingAgeBucket(g)), u(g)
                  else {
                    var h = wa[m].slice(-1)[0].minAge
                    e._setAgeBucket({ minAge: h, maxAge: m })
                  }
                }
            }),
            h()(l()(e), '_setAgeBucket', function (t) {
              var n = t.maxAge,
                r = t.minAge,
                a = e.props,
                o = a.analytics,
                c = a.setTargetedAgeBucket,
                i = Ut.d[r][n || 'over']
              if (!i)
                throw new Error(
                  'Age bucket not found for minAge: "'.concat(r, '", maxAge: "').concat(n || '<empty>', '"'),
                )
              Object(Ne.o)(o)(Ne.m.setTargetingAgeBucket(i)), c(i)
            }),
            e
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props.analytics
                Object(Ne.o)(e)(Ne.m.targetingPageLoad())
              },
            },
            {
              key: '_sliderValueFromSelectedAgeBucket',
              value: function (e) {
                var t = Ut.e[e],
                  n = t.maxAge,
                  r = t.minAge
                return [va.indexOf(r), n ? Ea.indexOf(n) : _a]
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.match,
                  n = e.selectedAgeBucket,
                  r = e.selectedGender,
                  a = e.targetedLocations,
                  o = t.params,
                  c = o.quickPromotePlatform,
                  i = o.screenName,
                  l = o.statusId,
                  u = De({ numLocations: a.length }),
                  s = Ut.e[n],
                  d = s.maxAge,
                  f = s.minAge,
                  p = this._sliderValueFromSelectedAgeBucket(n),
                  m = d || ba
                return y.createElement(
                  x.a,
                  { style: Ia.qpContainer, testID: K },
                  y.createElement(M, { screenType: Ne.c.Targeting }),
                  y.createElement(z, { subtitle: fa, title: da }),
                  y.createElement(cr.a, {
                    description: Object(pe.a)(
                      a.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: y.createElement(A.b, { weight: 'bold' }, u),
                    link: Object(Ne.i)(i, l, c, Ne.c.TargetingLocation),
                    testID: ce,
                  }),
                  y.createElement(
                    B,
                    { label: pa },
                    y.createElement(
                      x.a,
                      { style: Ia.ageRangeSlider },
                      y.createElement(oa.a, {
                        endThumbAccessibilityLabel: ga,
                        endThumbAccessibilityLabelValueText: '"'.concat(m, '"'),
                        endThumbLabel: m,
                        max: _a,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: ma,
                        startThumbAccessibilityLabelValueText: '"'.concat(f, '"'),
                        startThumbLabel: f,
                        value: p,
                      }),
                    ),
                  ),
                  y.createElement(
                    B,
                    { label: ha, withBottomBorder: !1 },
                    y.createElement(
                      x.a,
                      { style: Ia.genderSelection },
                      y.createElement(ca.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: ya,
                        value: r,
                      }),
                    ),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(y.PureComponent)
      h()(Pa, 'contextType', fe.a)
      var Ia = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        Ta = aa(Pa),
        Ca = n('q9Zt'),
        ka = n('JYMr')
      function Sa(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ja = V.a.a065172e,
        La = V.a.cfcdb4a1,
        xa = V.a.dcfb0332,
        Aa = V.a.c1df579e,
        Ra = (function (e) {
          s()(n, e)
          var t = Sa(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getRetweetOrTweet', function () {
                var t = e.props.tweet
                return t ? Gt.a.getOriginalTweet(t) : t
              }),
              h()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? y.createElement(
                      mt.b,
                      { history: t, onBackClick: e._handleGoBack, title: xa },
                      y.createElement(Ca.a, { onRetry: null, title: ja }),
                    )
                  : e._renderPage()
              }),
              h()(l()(e), '_renderHeader', function () {
                return null
              }),
              h()(l()(e), '_renderPage', function () {
                var t = e.props,
                  n = t.history,
                  r = t.match,
                  a = t.promoteErrorCode,
                  o = t.promoteFetchStatus,
                  c = r.params,
                  i = c.quickPromotePlatform,
                  l = c.quickPromoteScreenName,
                  u = c.screenName,
                  s = c.statusId,
                  d = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                  f = d ? Ne.d : Ne.b,
                  p = function (e) {
                    return Object(Ne.i)(u, s, i, e)
                  }
                switch (l) {
                  case 'intro':
                    return e._renderSplashPage()
                  case 'objective':
                    if (d) {
                      var m = p(Ne.c.Targeting)
                      return e._renderProgressPage(Ne.d.Objective, m)
                    }
                    n.replace(Object(Ne.i)(u, s, i, Ne.c.Targeting))
                    break
                  case 'targeting':
                    var g = p(Ne.c.BudgetSelect)
                    return e._renderProgressPage(f.Targeting, g)
                  case 'budget_select':
                    var h = p(Ne.c.Review)
                    return e._renderProgressPage(f.BudgetSelect, h)
                  case 'review':
                    var y = [Ze.a.LOADING, Ze.a.LOADED].includes(o) && !a
                    return e._renderProgressPage(y ? f.Finish : f.Review)
                  case 'payment':
                    return e._renderProgressPage(f.Review)
                  case 'targeting_location':
                    return e._renderPopupPage()
                  case 'done':
                    return e._renderSplashPage()
                  default:
                    throw b()
                }
              }),
              h()(l()(e), '_renderProgressPage', function (t, n) {
                var r = e.props.history
                return y.createElement(
                  mt.b,
                  { documentTitle: xa, history: r, renderHeader: e._renderHeader },
                  y.createElement(Fr.a, {
                    leftControl: y.createElement(Nr.a, { autofocus: !0, onClick: e._handleGoBack, testID: ie }),
                    rightControl: n && y.createElement(ir.a, { link: n, testID: Q, type: 'brandText' }, Aa),
                  }),
                  y.createElement(ka.a, { progress: t, style: Ba.progressBar }),
                  y.createElement(x.a, { style: Ba.noScrollView }, e._renderRoutes()),
                )
              }),
              h()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return y.createElement(
                  mt.b,
                  { documentTitle: xa, history: t, renderHeader: e._renderHeader },
                  e._renderRoutes(),
                )
              }),
              h()(l()(e), '_renderSplashPage', function () {
                return e._renderRoutes()
              }),
              h()(l()(e), '_renderRoutes', function () {
                var t = e.props.match.params.quickPromoteScreenName
                switch (t) {
                  case 'intro':
                    return y.createElement(kr.c, { component: Lt })
                  case 'objective':
                    return y.createElement(kr.c, { component: kn })
                  case 'targeting':
                    return y.createElement(kr.c, { component: Ta })
                  case 'targeting_location':
                    return y.createElement(kr.c, { component: Yr })
                  case 'budget_select':
                    return y.createElement(kr.c, { component: Ke })
                  case 'review':
                    return y.createElement(kr.c, { component: Cr })
                  case 'payment':
                    return y.createElement(kr.c, { component: Gn })
                  case 'done':
                    return y.createElement(kr.c, { component: dt })
                  default:
                    throw b()
                }
              }),
              h()(l()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.history,
                  a = t.location,
                  o = t.match.params,
                  c = o.quickPromotePlatform,
                  i = o.quickPromoteScreenName,
                  l = o.screenName,
                  u = o.statusId,
                  s = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled')
                Object(Ne.o)(n)(Ne.m.back(i)), Object(Ne.l)(r, a)(l, u, c, i, s)
              }),
              h()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.match.params.quickPromoteScreenName
                Object(Ne.o)(n)(Ne.m.reload(r)), window.location.reload()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.analytics,
                    r = t.createLocalApiErrorHandler,
                    a = t.fetchAdsAccountDataIfNeeded,
                    o = t.fetchAvailableBudgetsIfNeeded,
                    c = t.fetchCouponsIfNeeded,
                    i = t.fetchCurrentTargetingLocationIfNeeded,
                    l = t.fetchProfessionalEligibilityIfNeeded,
                    u = t.fetchTweetIfNeeded,
                    s = t.match,
                    d = t.promoteFetchStatus,
                    f = t.setPromoteFetchStatus,
                    p = t.statusId,
                    m = s.params.quickPromoteScreenName,
                    g = this.context.loggedInUserId
                  return g
                    ? (Ze.a.LOADED === d && m !== Ne.c.Done && f(Ze.a.NONE),
                      Object(N.b)(
                        'initial-load',
                        Promise.all([u(p), i(), a(g), l(), c()])
                          .then(function () {
                            return o()
                          })
                          .then(function () {
                            return (0, e.props.handleFirstLoad)()
                          }),
                      ).catch(function (e) {
                        r(pt.a)(e), Object(Ne.o)(n)(Ne.m.pageLoadFail(e.message))
                      }))
                    : Promise.resolve()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history
                  return this.context.loggedInUserId
                    ? t !== Ze.a.LOADED
                      ? y.createElement(
                          mt.b,
                          { documentTitle: xa, history: n, renderHeader: this._renderHeader },
                          y.createElement(Wn, null),
                          y.createElement(ft.a, {
                            fetchStatus: t,
                            onRequestRetry: this._handleRequestRetry,
                            render: this._render,
                            retryMessage: La,
                          }),
                        )
                      : y.createElement(ft.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: La,
                        })
                    : this._render()
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Ra, 'contextType', fe.a)
      var Ba = R.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        Da = rt(Ra)
      t.default = Da
    },
    kevv: function (e, t, n) {
      'use strict'
      var r = n('T0aG'),
        a = n.n(r),
        o = (n('i4UL'), n('z84I'), n('tQbP'), n('2G9S'), n('BcsE')),
        c = n('aTAq'),
        i = function (e, t) {
          if (Object(o.a)(e) && Object(o.a)(t)) {
            if (e > t) return 1
            if (e < t) return -1
          } else if (Object(c.a)(e) && Object(c.a)(t)) {
            if (e > t) return 1
            if (e < t) return -1
          }
          return 0
        }
      t.a = function (e, t, n) {
        var r = Object(c.a)(n) ? Array(t.length).fill(n) : n,
          l = t.map(function (e) {
            return Object(c.a)(e)
              ? function (t) {
                  var n = 'object' === a()(t) ? (null == t ? void 0 : t[e]) : void 0
                  return Object(c.a)(n) || Object(o.a)(n) ? n : void 0
                }
              : e
          })
        return e.concat().sort(
          (function (e, t) {
            return function (n, r) {
              for (var a = 0; a < e.length; a++) {
                var o = e[a],
                  c = t[a] || 'asc',
                  l = i(o(n), o(r))
                if (0 !== l) return 'desc' === c ? -1 * l : l
              }
              return 0
            }
          })(l, r),
        )
      }
    },
    z4TA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationScreen', function () {
          return et
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        g = n('KEM+'),
        h = n.n(g),
        y =
          (n('hBpG'),
          n('jQ3i'),
          n('x4t0'),
          n('7x/C'),
          n('lTEL'),
          n('kYxP'),
          n('5BYb'),
          n('MvUL'),
          n('KqXw'),
          n('2G9S'),
          n('ho0z'),
          n('aeN7')),
        b = n('ERkP'),
        v = n('s4rk'),
        E = n('zI2C'),
        w = n('6ZtA'),
        _ = n('es0u'),
        O = (n('WNMA'), n('6/RC')),
        P = n('x5Pi'),
        I = n('8Lfv'),
        T = n('QK5w'),
        C = n('eSoz'),
        k = n('RqPI'),
        S = n('If64'),
        j = n('pNZL'),
        L = n('XOJV'),
        x = n('G6rE'),
        A = n('rxPX'),
        R = n('0KEI'),
        B = n('Mx3A'),
        D = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        F = function (e, t) {
          return 'PUSH' === t.history.action
        },
        N = function (e, t) {
          var n = D(t, 'focal')
          return n || M(e, t)
        },
        M = function (e, t) {
          var n = t.location,
            r = t.match
          return r.params && r.params.statusId
            ? r.params.statusId
            : n.query && n.query.tweet_id && 'string' == typeof n.query.tweet_id
            ? n.query.tweet_id
            : ''
        },
        q = function (e, t) {
          return t.match.params.screenName
        },
        H = function (e, t) {
          return D(t, 'socialContext')
        },
        z = function (e, t) {
          return D(t, 'topicFollowPrompt')
        },
        U = function (e, t) {
          return D(t, 'contextTweetId')
        },
        G = function (e, t) {
          return D(t, 'promotedContent')
        },
        V = function (e, t) {
          return D(t, 'overflow')
        },
        W = function (e, t) {
          return D(t, 'contextualClientEventInfo')
        },
        Q = function (e, t) {
          var n = D(t, 'referrer'),
            r = N(e, t)
          return !!n && n.includes('/i/topics/tweet/'.concat(r))
        },
        X = function (e, t) {
          if (!O.canUseDOM) return !1
          var n = t.location.query,
            r = Object(T.a)(e, t)
          return (
            Object(B.b)({
              query: n,
              httpReferer: r ? '' : document.referrer || '',
              requestUrl: window.location.href,
              emptyIfServerRendered: !1,
            }).referral_type === B.a.Web
          )
        },
        K = function (e, t) {
          return L.a.selectHydrated(e, N(e, t))
        },
        J = function (e, t) {
          var n = N(e, t),
            r = L.a.selectHydrated(e, n)
          return r && r.conversation_id_str ? L.a.selectHydrated(e, r.conversation_id_str) : null
        },
        Z = function (e, t) {
          return L.a.selectFetchStatus(e, N(e, t))
        },
        Y = function (e, t) {
          return t.location.query && 'string' == typeof t.location.query.cxt ? t.location.query.cxt : void 0
        }
      function $(e, t) {
        var n = K(e, t),
          r = n ? Object(C.f)(e, n) : void 0
        return n && r ? Object(P.c)(n, r) : void 0
      }
      var ee = Object(A.a)()
          .propsFromState(function () {
            return {
              communitySocialContextOfFocalTweet: $,
              contextTweetId: U,
              contextualClientEventInfo: W,
              focalTweet: K,
              initialFetchStatus: Z,
              isForwardNavigation: F,
              isReferralSource: X,
              isReferredFromExploreTopics: Q,
              userLanguage: k.n,
              loggedInUser: x.e.selectLoggedInUser,
              overflowCount: V,
              promotedContent: G,
              richLandingContextId: Y,
              rootTweet: J,
              screenName: q,
              selectedTweetId: M,
              socialContext: H,
              startLocation: S.a,
              statusId: N,
              topicFollowPrompt: z,
              tweetDetailNav: j.a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)('CONVERSATION_SCREEN'),
              clearTimelineCache: function (e, t) {
                return Object(I.a)(e, t)
              },
            }
          })
          .withAnalytics({ page: 'tweet' }),
        te = n('ymux'),
        ne = n('rkhm'),
        re = n('SrtL'),
        ae = n('8UdT'),
        oe = n('kGix'),
        ce = n('muX9'),
        ie = n('3XMw'),
        le = n.n(ie),
        ue = (n('JtPf'), n('87if'), n('zb92')),
        se = Object(ue.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(182)]).then(n.bind(null, 'uo3S'))
          },
          renderPlaceholder: function (e, t) {
            return null
          },
        }),
        de = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('/yvb')),
        fe = n('sebV'),
        pe = n('BXlL'),
        me = n('Irs7'),
        ge = n('aITJ')
      function he(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? he(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var be = le.a.af9c8a3d,
        ve = function (e) {
          var t = e.featureSwitches,
            n = e.scribeNamespace,
            r = e.startLocation,
            a = e.userId,
            o = Object(me.b)(),
            c = !!a && ge.b.isMobileOS() && !fe.a.isStandaloneApp(),
            i = b.useCallback(
              function (e) {
                e.preventDefault(),
                  o.scribe(ye(ye({}, n), {}, { element: 'open_app_button', action: 'click' })),
                  Object(pe.b)({ startLocation: r, featureSwitches: t, userId: a })
              },
              [o, t, n, r, a],
            )
          return c && t.isTrue('responsive_web_open_app_appbar_button_enabled')
            ? b.createElement(de.a, {
                accessibilityLabel: be,
                children: be,
                onPress: i,
                size: 'small',
                type: 'primaryOutlined',
              })
            : null
        },
        Ee = n('rJoH'),
        we = n('yoO3'),
        _e = n('caTy'),
        Oe = n('PeW/'),
        Pe = n('AUxQ'),
        Ie = n('Rp9C'),
        Te = n('7JQg'),
        Ce = n('VS6U'),
        ke = n('tocL'),
        Se = n('HBr9'),
        je = n('2fY8'),
        Le = n('MWbm'),
        xe = n('G8HL'),
        Ae = n('pxuL'),
        Re = n('t62R'),
        Be = n('rHpw'),
        De = n('oQhu'),
        Fe = n('mN6z')
      function Ne(e) {
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Me = le.a.ea831526,
        qe = le.a.a90e1e67({ noun: '' }),
        He = le.a.c299a6cf,
        ze = le.a.c2ed3314,
        Ue = le.a.ad666301,
        Ge = le.a.f0c37ddb,
        Ve = { page: 'tweet' },
        We = { page: 'tweet', section: 'landing' },
        Qe = Object(De.a)(function (e, t) {
          return { items: [Ie.a.forTweet(e, t)], tweet_id: e }
        }),
        Xe = Object(De.a)(function (e) {
          return Object(ne.a)(e)
        }),
        Ke = Object(De.a)(function (e, t, n, r, a) {
          var o, c
          return {
            referrer: e,
            controller_data:
              e &&
              (null == t ||
              null === (o = t.details) ||
              void 0 === o ||
              null === (c = o.timelinesDetails) ||
              void 0 === c
                ? void 0
                : c.controllerData),
            overflowCount: n,
            with_rux_injections: r,
            rux_context: a,
          }
        }),
        Je = Object(De.a)(function (e, t, n) {
          return Object(te.a)({ focalTweetId: e, fetchOptions: t, featureSwitches: n })
        }),
        Ze = [ke.a.Community]
      function Ye(e) {
        var t = e.context
        if (!t) return null
        switch (t.contextType) {
          case ke.a.Community:
            var n = t.landingUrl ? Object(_e.b)(t.landingUrl) : void 0
            return b.createElement(Re.b, { link: n }, t.text)
          default:
            return null
        }
      }
      function $e(e) {
        if (!e) return null
        switch (e.contextType) {
          case ke.a.Community:
            return ze
          default:
            return null
        }
      }
      var et = (function (e) {
        s()(n, e)
        var t = Ne(n)
        function n(e, r) {
          var o
          return (
            a()(this, n),
            (o = t.call(this, e, r)),
            h()(l()(o), '_getFabState', function () {
              var e = o.props,
                t = e.promotedContent
              return { inReplyToStatusId: e.statusId, promotedContent: t }
            }),
            h()(l()(o), '_getNavigationParams', function () {
              var e = o.props,
                t = e.contextualClientEventInfo,
                n = e.overflowCount,
                r = e.richLandingContextId,
                a = e.tweetDetailNav,
                c = o._shouldRenderRuxInjections()
              return Ke(a, t, n, c, r)
            }),
            h()(l()(o), '_getModule', function () {
              var e = o.props.statusId,
                t = o.context.featureSwitches,
                n = o._getNavigationParams()
              return Je(e, n, t)
            }),
            h()(l()(o), '_handleEntriesRendered', function (e) {
              var t = e.entries,
                n = e.fetchStatus,
                r = o.props.recordTTFL
              if ((n === oe.a.FAILED && (o._shouldRecordTTFL = !1), o._shouldRecordTTFL && t.length)) {
                var a = t.some(function (e) {
                  return e.type === ae.b.Tweet
                })
                ;(o._shouldRecordTTFL = !1), a && r && r('permalink')
              }
            }),
            h()(l()(o), '_shouldRedirectToCanonical', function () {
              var e,
                t = o.props,
                n = t.focalTweet,
                r = t.screenName
              return (
                !(
                  t.selectedTweetId !== t.statusId ||
                  null == n ||
                  null === (e = n.user) ||
                  void 0 === e ||
                  !e.screen_name
                ) &&
                r &&
                n &&
                r.toLowerCase() !== n.user.screen_name.toLowerCase()
              )
            }),
            h()(l()(o), '_redirectToCanonical', function () {
              var e = o.props,
                t = e.history,
                n = e.location
              t.replace({ pathname: o._getCanonicalPath(), query: n.query, state: n.state })
            }),
            h()(l()(o), '_getCanonicalPath', function () {
              var e = o.props.focalTweet
              return e ? '/'.concat(e.user.screen_name, '/status/').concat(e.id_str) : '/'
            }),
            h()(l()(o), '_getPathForTweetId', function (e, t) {
              return '/'.concat(t || 'i', '/status/').concat(e)
            }),
            h()(l()(o), '_getScribeNamespace', function () {
              return o._shouldRenderRuxInjections() ? We : Ve
            }),
            (o._shouldRecordTTFL = !0),
            (o._downvoteEnabled = o.context.featureSwitches.isTrue('rweb_reply_downvote_enabled')),
            o
          )
        }
        return (
          c()(n, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return !Object(Fe.a)(e, this.props)
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                this.props.isForwardNavigation && this._clearTimelineCache()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.context.setBackgroundClickHandler(null)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this._shouldRedirectToCanonical()
                  ? this._redirectToCanonical()
                  : this.props.statusId !== e.statusId && this.props.isForwardNavigation && this._clearTimelineCache()
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t,
                  n,
                  r,
                  a,
                  o = this.context.loggedInUserId,
                  c = this.props,
                  i = c.communitySocialContextOfFocalTweet,
                  l = c.focalTweet,
                  u = c.history,
                  s = c.promotedContent,
                  d = c.socialContext,
                  f = c.statusId,
                  p = c.userLanguage
                l &&
                  ((e = Ge({ tweetText: Object(je.a)(l.text), fullName: l.user.name })),
                  (t = 'twitter://status?id='.concat(l.id_str)),
                  (n = 'https://twitter.com'.concat(this._getCanonicalPath() || '')),
                  (r = Ue({ fullName: l.user.name })),
                  (a = l.possibly_sensitive))
                var m = (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    return t.find(function (e) {
                      return e && Ze.includes(e.contextType)
                    })
                  })(d, i),
                  g = m && b.createElement(Ye, { context: m })
                return b.createElement(
                  Te.b,
                  { data: Qe(f, s), namespace: this._getScribeNamespace() },
                  b.createElement(
                    we.a,
                    null,
                    a
                      ? b.createElement(ce.a, null, b.createElement('meta', { content: 'adult', name: 'rating' }))
                      : null,
                    n
                      ? b.createElement(
                          ce.a,
                          null,
                          b.createElement('link', { href: n, rel: 'canonical' }),
                          b.createElement('link', {
                            href: 'https://publish.twitter.com/oembed?url='.concat(n),
                            rel: 'alternate',
                            title: e,
                            type: 'application/json+oembed',
                          }),
                        )
                      : null,
                    b.createElement(Ee.a, {
                      canonical: n,
                      description: null == l ? void 0 : l.full_text,
                      image: null == l ? void 0 : l.user.profile_image_url_https,
                      title: r,
                      type: 'article',
                    }),
                    b.createElement(w.a, {
                      featureSwitches: this.context.featureSwitches,
                      loggedInUserId: o,
                      userLanguage: p,
                    }),
                    b.createElement(E.a, { deepLink: t }),
                    n ? b.createElement(v.a, { canonical: n }) : null,
                    b.createElement(
                      P.b.Provider,
                      { value: null == m ? void 0 : m.contextType },
                      b.createElement(Ce.a, {
                        backLocation: '/',
                        documentTitle: e,
                        history: u,
                        primaryContent: this._renderTimeline(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: this._renderSidebarContent(),
                        subtitle: g,
                        title: (m && $e(m)) || (l && l.self_thread ? He : qe),
                      }),
                    ),
                    b.createElement(re.a, { title: e, withMeta: !1 }),
                  ),
                )
              },
            },
            {
              key: '_renderRightControl',
              value: function () {
                var e = this.context,
                  t = e.featureSwitches,
                  n = e.loggedInUserId,
                  r = this.props,
                  a = r.focalTweet,
                  o = r.startLocation
                return b.createElement(
                  Le.a,
                  { style: tt.mobileAppBarRightControl },
                  b.createElement(ve, {
                    featureSwitches: t,
                    scribeNamespace: this._getScribeNamespace(),
                    startLocation: o,
                    userId: n,
                  }),
                  b.createElement(Oe.b, { focalTweet: a, module: this._getModule() }),
                )
              },
            },
            {
              key: '_renderSidebarContent',
              value: function () {
                var e = this.props.focalTweet
                return e && e.user.id_str
                  ? b.createElement(
                      _.a,
                      { focalTweetId: null == e ? void 0 : e.id_str, withTopicsToFollow: !1, withWhoToFollow: !1 },
                      b.createElement(se, { focalTweetId: e.id_str }),
                    )
                  : null
              },
            },
            {
              key: '_renderTimeline',
              value: function () {
                var e = this.props,
                  t = e.contextTweetId,
                  n = e.focalTweet,
                  r = e.location,
                  a = e.promotedContent,
                  o = e.rootTweet,
                  c = e.screenName,
                  i = e.selectedTweetId,
                  l = e.socialContext,
                  u = e.statusId,
                  s = e.topicFollowPrompt,
                  d = { selectedTweetId: i }
                return b.createElement(
                  Se.a,
                  { collectionName: Me },
                  b.createElement(Pe.a, {
                    apiErrorHandlerMap: Xe(c),
                    contextTweetId: t,
                    fetchOptions: this._getNavigationParams(),
                    focalTweet: n,
                    focalTweetId: u,
                    location: r,
                    module: this._getModule(),
                    onEntriesRendered: this._handleEntriesRendered,
                    promotedContent: a,
                    rootTweet: o || void 0,
                    selectedTweet: d,
                    socialContext: l,
                    topicFollowPrompt: s,
                    withRuxInjections: this._shouldRenderRuxInjections(),
                  }),
                )
              },
            },
            {
              key: '_shouldRenderRuxInjections',
              value: function () {
                var e = this.props,
                  t = e.isReferralSource,
                  n = e.isReferredFromExploreTopics
                return !!e.richLandingContextId || n || t
              },
            },
            {
              key: '_clearTimelineCache',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getModule(),
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getNavigationParams(),
                  n = this.props,
                  r = n.clearTimelineCache,
                  a = n.createLocalApiErrorHandler,
                  o = n.screenName
                r(e, t).catch(a(Xe(o)))
              },
            },
          ]),
          n
        )
      })(b.Component)
      h()(et, 'contextType', Ae.a), h()(et, 'defaultProps', { recordTTFL: y.c })
      var tt = Be.a.create(function (e) {
        return {
          mobileAppBarRightControl: {
            flexDirection: 'row',
            alignItems: 'center',
            height: e.componentDimensions.appBarHeightPx,
          },
        }
      })
      t.default = ee(Object(xe.a)(et))
    },
  },
])
//# sourceMappingURL=WIPED
