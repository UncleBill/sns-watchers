;(window.webpackJsonp = window.webpackJsonp || []).push([
  [89],
  {
    '55TG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return m
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('2G9S'), n('kGix')),
        o = n('XMGw'),
        i = n('Ssj5'),
        l = n('oEOe')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = 'verifyPassword',
        f = 'rweb/'.concat(o.a, '/').concat(d),
        b = Object(l.a)(f, 'VERIFY_PASSWORD'),
        p = { fetchStatus: c.a.NONE }
      i.a.register(
        a()({}, d, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case b.REQUEST:
              return u(u({}, e), {}, { fetchStatus: c.a.LOADING })
            case b.SUCCESS:
              return u(u({}, e), {}, { fetchStatus: c.a.LOADED })
            case b.FAILURE:
              return u(u({}, e), {}, { error: t.payload, fetchStatus: c.a.FAILED })
            default:
              return e
          }
        }),
      )
      var h = function (e) {
          return e.verifyPassword.fetchStatus
        },
        m = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(l.b)(t, { params: { password: e }, request: a.Settings.verifyPassword })({
              actionTypes: b,
              context: 'VERIFY_PASSWORD',
            })
          }
        }
    },
    '89Im': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M11.47 14.53c.146.146.338.22.53.22s.384-.073.53-.22l5-5c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-3.72 3.72V2c0-.414-.337-.75-.75-.75s-.75.336-.75.75v10.19L7.53 8.47c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l5 5z',
            }),
            c.createElement('path', {
              d: 'M21.25 13.25c-.414 0-.75.336-.75.75v5.652c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V14c0-.414-.336-.75-.75-.75S2 13.586 2 14v5.652c0 1.264 1.028 2.292 2.292 2.292h15.416c1.264 0 2.292-1.028 2.292-2.292V14c0-.414-.336-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    ClNT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        E = n('k49u'),
        O = n('rxPX'),
        g = n('0KEI'),
        v = Object(O.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        w = n('kGix'),
        S = n('v//M'),
        P = n('5FtR')
      function j(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var D = (function (e) {
          u()(n, e)
          var t = j(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(l()(e), 'state', { verificationRequired: !1 }),
              m()(l()(e), '_handleFetch', function () {
                var t,
                  n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    r(
                      ((t = {}),
                      m()(t, E.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, E.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.renderChildren,
                    r = this.state.verificationRequired,
                    a = t === w.a.FAILED && r
                  return y.createElement(
                    y.Fragment,
                    null,
                    a
                      ? y.createElement(P.a, { to: '/i/flow/verify_account_ownership' })
                      : y.createElement(S.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component),
        _ = v.forwardRef(D)
      t.a = _
    },
    Ezva: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountInformation', function () {
          return Pe
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('ERkP')),
        E = n('QJRq'),
        O = n('Fcaw'),
        g = n('ZyHq'),
        v = n('vEo5'),
        w = n('NeAX'),
        S = n('YeIG'),
        P = n('P1r1'),
        j = n('RqPI'),
        D = n('G6rE'),
        _ = n('rxPX'),
        A = n('0KEI'),
        L = n('S/HT'),
        I = n('kGix'),
        R = function (e, t) {
          var n = D.e.selectLoggedInUser(e),
            r = Object(S.a)(n) ? I.a.LOADED : v.selectFetchStatus(e)
          return Object(I.d)(w.selectFetchDataStatus(e), w.selectPreferencesFetchStatus(e), r)
        },
        k = function (e) {
          var t = Object(P.j)(e)
          return t && Object(L.b)(e, t)
        },
        x = Object(_.a)()
          .propsFromState(function () {
            return {
              countryName: k,
              email: v.selectFirstEmail,
              fetchStatus: R,
              loggedInUser: D.e.selectLoggedInUser,
              managingAccount: O.b,
              phone: v.selectFirstPhoneNumber,
              ages: w.selectAge,
              birthdate: w.selectBirthdate,
              gender: w.selectGender,
              languages: w.selectLanguage,
              languageCode: j.n,
              signupDetails: w.selectSignupDetails,
              verificationAccess: g.m,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_ACCOUNT_INFORMATION_SCREEN',
              ),
              fetchAccountVerificationAccess: g.a,
              fetchDevices: v.fetchDevices,
              fetchData: w.fetchDataIfNeeded,
              fetchPreferences: w.fetchPreferencesIfNeeded,
              fetchCountryNamesIfNeeded: L.a,
              fetchUserAccountLabel: O.a,
            }
          }),
        F = n('yoO3'),
        N = n('PK8P'),
        T = n('7JQg'),
        C = n('7FtF'),
        H = n('rHpw').a.create(function (e) {
          return {
            helpText: { display: 'block', fontSize: e.fontSizes.subtext2, lineHeight: '1.55' },
            infoItem: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
            },
          }
        }),
        M = n('MWbm'),
        U = n('t62R'),
        B = n('csss'),
        z = n('o1YB'),
        G = n('v6aA'),
        K = n('3XMw'),
        W = n.n(K)
      function Y(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var V = W.a.f15bfdb3,
        q = W.a.d0a77c9a,
        X = W.a.jade381b,
        Z = W.a.d1f6d336,
        J = W.a.a3841918,
        Q = W.a.f70cd5ed,
        $ = W.a.ib6f1694,
        ee = W.a.a8d0108d,
        te = W.a.de32365f,
        ne = W.a.b6ab31bd,
        re = W.a.c21037d0,
        ae = W.a.h3290871,
        ce = W.a.d12d42db,
        oe = W.a.hbd12156,
        ie = W.a.b7ec04f3,
        le = W.a.f70d5780,
        se = W.a.dc62d3c6,
        ue = W.a.ab22c36c,
        de = W.a.j3a1cff6,
        fe = W.a.i62a03aa,
        be = W.a.c119dee8,
        pe = y.createElement(
          W.a.I18NFormatMessage,
          { $i18n: 'f1a3d63c' },
          y.createElement(U.b, { link: '/i/profile' }, W.a.c036653e),
        ),
        he = W.a.bf96fda4,
        me = W.a.d495680d,
        ye = W.a.f445dc78,
        Ee = W.a.d6d80990,
        Oe = y.createElement(
          W.a.I18NFormatMessage,
          { $i18n: 'f2df3f23' },
          y.createElement(U.b, { link: '/settings/account/personalization' }, W.a.bad6cf6e),
        ),
        ge = W.a.i859a9d3,
        ve = 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts',
        we = '/settings/account/request_verification',
        Se = { page: 'settings', section: 'account_information' },
        Pe = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(l()(e), 'combinedFetches', function () {
                var t = e.props,
                  n = t.fetchAccountVerificationAccess,
                  r = t.fetchCountryNamesIfNeeded,
                  a = t.fetchData,
                  c = t.fetchDevices,
                  o = t.fetchPreferences,
                  i = t.fetchUserAccountLabel,
                  l = t.languageCode,
                  s = t.loggedInUser,
                  u = [a(), o(), r(l || '')]
                return (
                  s &&
                    (u.push(c()),
                    e.context.featureSwitches.isTrue('identity_verification_intake_enabled') && u.push(n()),
                    e.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled') &&
                      u.push(i(s.id_str))),
                  Promise.all(u)
                )
              }),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.ages,
                  r = t.birthdate,
                  a = t.countryName,
                  c = t.email,
                  o = t.gender,
                  i = t.languages,
                  l = t.loggedInUser,
                  s = t.phone,
                  u = t.signupDetails,
                  d = n
                    .map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    })
                    .join(', '),
                  f = r && X(new Date(''.concat(r, 'T00:00:00'))),
                  b = i
                    .map(function (e) {
                      return e.display
                    })
                    .join(', ')
                return y.createElement(
                  M.a,
                  null,
                  l
                    ? y.createElement(B.a, {
                        description:
                          l.screen_name &&
                          y.createElement(U.b, { color: 'gray700', size: 'subtext2' }, '@'.concat(l.screen_name)),
                        label: Z,
                        link: '/settings/screen_name',
                      })
                    : null,
                  l ? y.createElement(B.a, { description: s, label: Q, link: '/settings/phone' }) : null,
                  l ? y.createElement(B.a, { description: c, label: J, link: '/settings/email' }) : null,
                  l ? e._renderVerified() : null,
                  l
                    ? y.createElement(B.a, {
                        description: l.protected ? ie : fe,
                        label: ye,
                        link: '/settings/audience_and_tagging',
                      })
                    : null,
                  l
                    ? y.createElement(
                        M.a,
                        { style: [H.infoItem, H.bottomBorder], testID: 'account-creation' },
                        y.createElement(U.b, { color: 'normal' }, $),
                        y.createElement(U.b, { color: 'gray700', style: H.helpText }, q(new Date(l.created_at))),
                        u.creation_ip && u.country
                          ? y.createElement(
                              U.b,
                              { color: 'gray700', style: H.helpText },
                              ''.concat(u.creation_ip, ' (').concat(u.country, ')'),
                            )
                          : null,
                      )
                    : null,
                  l ? y.createElement(B.a, { description: a, label: re, link: '/settings/country' }) : null,
                  y.createElement(B.a, { description: b, label: me, link: '/settings/languages' }),
                  y.createElement(B.a, {
                    description: e._renderGender(o.value),
                    label: ee,
                    link: '/settings/your_twitter_data/gender',
                  }),
                  l
                    ? y.createElement(
                        M.a,
                        { style: [H.infoItem, H.bottomBorder], testID: 'birthday' },
                        y.createElement(U.b, { color: 'normal' }, be),
                        r ? y.createElement(U.b, { color: 'gray700', size: 'subtext2' }, f) : null,
                        y.createElement(U.b, { color: 'gray700', style: H.helpText }, pe),
                      )
                    : null,
                  y.createElement(B.a, { description: d, label: he, link: '/settings/your_twitter_data/age' }),
                  l ? e._renderAutomation() : null,
                  l
                    ? null
                    : y.createElement(
                        M.a,
                        { style: H.infoItem, testID: 'loggedOutHelp' },
                        y.createElement(U.b, { color: 'gray700', style: H.helpText }, Ee),
                        y.createElement('br', null),
                        y.createElement(U.b, { color: 'gray700', style: H.helpText }, Oe),
                      ),
                )
              }),
              m()(l()(e), '_renderGender', function (e) {
                switch (e) {
                  case 'female':
                    return te
                  case 'male':
                    return ne
                  default:
                    return e
                }
              }),
              m()(l()(e), '_renderVerified', function () {
                var t,
                  n = y.createElement(z.a, {
                    label: ae,
                    learnMoreLabel: ge,
                    learnMoreLink: ve,
                    subtext: null !== (t = e.props.loggedInUser) && void 0 !== t && t.verified ? le : se,
                  })
                if (e.context.featureSwitches.isTrue('identity_verification_intake_enabled')) {
                  var r, a
                  switch (e.props.verificationAccess.status) {
                    case E.a.DISABLED:
                    case E.a.NOT_ELIGIBLE:
                      return n
                    case E.a.VERIFIED:
                      a = le
                      break
                    default:
                      ;(r = oe), (a = se)
                  }
                  return y.createElement(z.a, { label: ae, learnMoreLabel: r, learnMoreLink: we, subtext: a })
                }
                return n
              }),
              m()(l()(e), '_renderAutomation', function () {
                if (e.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled')) {
                  var t = e.props.managingAccount ? de : ue
                  return y.createElement(B.a, { description: t, label: ce, link: '/settings/account/automation' })
                }
                return null
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
                    t = e.fetchStatus,
                    n = e.location
                  return y.createElement(
                    T.b,
                    { namespace: Se },
                    y.createElement(
                      F.a,
                      null,
                      y.createElement(
                        C.a,
                        { location: n, title: V },
                        y.createElement(N.a, { fetch: this.combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      m()(Pe, 'contextType', G.a)
      var je = x(Pe)
      t.default = je
    },
    Fcaw: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      }),
        n.d(t, 'a', function () {
          return h
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('yH/f'), n('oEOe')),
        o = n('iD2S'),
        i = n.n(o),
        l = n('Ssj5')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = 'accountTaxonomy',
        f = ('rweb/'.concat(d), i()({ account_label: void 0 })),
        b = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE',
        })
      l.a.register(
        a()({}, d, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case b.SUCCESS:
              var n, r, a
              return u(
                u({}, e),
                {},
                {
                  account_label:
                    null == t ||
                    null === (n = t.payload) ||
                    void 0 === n ||
                    null === (r = n.user) ||
                    void 0 === r ||
                    null === (a = r.result) ||
                    void 0 === a
                      ? void 0
                      : a.account_label,
                },
              )
            default:
              return e
          }
        }),
      )
      var p = function (e) {
          var t, n, r
          return null === (t = e.accountTaxonomy) ||
            void 0 === t ||
            null === (n = t.account_label) ||
            void 0 === n ||
            null === (r = n.managed_label) ||
            void 0 === r
            ? void 0
            : r.owner_screen_name
        },
        h = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(c.b)(t, { request: a.AccountTaxonomy.fetchUserAccountLabel, params: { userId: e } })({
              actionTypes: b,
              context: 'FETCH_USER_ACCOUNT_LABEL',
            })
          }
        }
    },
    NyKK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return O
        }),
        n.d(t, 'g', function () {
          return g
        }),
        n.d(t, 'h', function () {
          return v
        }),
        n.d(t, 'd', function () {
          return w
        }),
        n.d(t, 'c', function () {
          return S
        }),
        n.d(t, 'e', function () {
          return P
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        c = n('KEM+'),
        o = n.n(c),
        i = (n('yH/f'), n('LW0h'), n('2G9S'), n('kGix')),
        l = n('Ssj5'),
        s = n('oEOe')
      function u(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = 'userData',
        b = 'rweb/'.concat(f),
        p = Object(s.a)(b, 'FETCH_DOWNLOADS'),
        h = Object(s.a)(b, 'CREATE_DOWNLOAD'),
        m = Object.freeze({
          NEW: 'NEW',
          INPROGRESS: 'INPROGRESS',
          INPROGRESS_ASYNC: 'INPROGRESS_ASYNC',
          ZIPPING: 'ZIPPING',
          PUBLISHING: 'PUBLISHING',
          NOTIFYING: 'NOTIFYING',
          COMPLETE: 'COMPLETED',
          FAILED: 'FAILED',
          NONE: 'NONE',
        }),
        y = [m.NEW, m.INPROGRESS, m.INPROGRESS_ASYNC, m.ZIPPING, m.PUBLISHING, m.NOTIFYING],
        E = { fetchStatus: i.a.None, downloads: { all: [], nonFailed: [] } }
      l.a.register(
        o()({}, f, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case p.SUCCESS:
              var r = n.payload || [],
                c = r.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return d(
                d({}, t),
                {},
                { fetchStatus: i.a.LOADED, downloads: d(d({}, t.downloads), {}, { all: r, nonFailed: c }) },
              )
            case p.REQUEST:
              return d(d({}, t), {}, { fetchStatus: i.a.LOADING })
            case p.FAILURE:
              return d(d({}, t), {}, { error: n.payload, fetchStatus: i.a.FAILED })
            case h.SUCCESS:
              return d(
                d({}, t),
                {},
                {
                  downloads: d(
                    d({}, t.downloads),
                    {},
                    { nonFailed: (e = [{ status: 'INPROGRESS' }]).concat.apply(e, a()(t.downloads.nonFailed)) },
                  ),
                },
              )
            case h.FAILURE:
              return d(d({}, t), {}, { fetchStatus: i.a.NONE })
            default:
              return t
          }
        }),
      )
      var O = function (e) {
          return e.userData.downloads
        },
        g = function (e) {
          return e.userData.fetchStatus
        },
        v = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        w = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.fetchDownloads })({
              actionTypes: p,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        S = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.createDataDownload })({
              actionTypes: h,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        P = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(s.d)(t, { params: e, request: a.UserData.markDataAsDownloaded })('MARK_DATA_AS_DOWNLOADED')
          }
        }
    },
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      }),
        n.d(t, 'a', function () {
          return b
        })
      var r = n('97Jx'),
        a = n.n(r),
        c = n('m3Bd'),
        o = n.n(c),
        i = (n('hBvt'), n('ERkP')),
        l = n('rHpw'),
        s = n('csss'),
        u = function (e) {
          return i.createElement(e.Icon, { style: d.thumbnail })
        },
        d = l.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function f(e) {
        var t = e.Icon,
          n = o()(e, ['Icon'])
        return i.createElement(s.a, a()({}, n, { thumbnail: i.createElement(u, { Icon: t }), thumbnailSize: 'large' }))
      }
      function b(e) {
        e.link
        var t = o()(e, ['link'])
        return i.createElement(s.a, a()({}, t, { link: { external: !0, pathname: e.link } }))
      }
    },
    PK8P: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        E = n('k49u'),
        O = n('hqKg'),
        g = n('0KEI'),
        v = n('oEGd'),
        w = n('55TG'),
        S = Object(O.createSelector)(w.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        P = {
          verifyPassword: w.b,
          createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        j = Object(v.g)(S, P, null, { pure: !1 }),
        D = n('kGix'),
        _ = n('v//M'),
        A = n('3XMw'),
        L = n.n(A),
        I = n('5FtR'),
        R = n('iCwC'),
        k = n('MWbm'),
        x = n('TnY3'),
        F = n('t62R'),
        N = n('6vad'),
        T = n('p+r5'),
        C = n('mw9i'),
        H = n('/yvb'),
        M = n('rHpw'),
        U = n('v6aA')
      function B(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var z = L.a.fe36fe1f,
        G = L.a.dec3c9b8,
        K = L.a.hccd9dbd,
        W = L.a.d1091f50,
        Y = L.a.g9677c6d,
        V = L.a.c8cb0b4c,
        q = (function (e) {
          u()(n, e)
          var t = B(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(l()(e), 'state', { password: '' }),
              m()(
                l()(e),
                '_passwordlessSsoEnabled',
                e.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              m()(l()(e), '_handlePasswordSubmit', function () {
                var t,
                  n = e.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.verifyPassword,
                  c = e.state.password
                '' !== c &&
                  a(c)
                    .then(function () {
                      e.setState({ password: '', verificationRequired: !1 }), e._makeFetch()
                    })
                    .catch(
                      r(
                        ((t = {}),
                        m()(t, E.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: V })
                          },
                        }),
                        m()(t, 'showToast', !0),
                        t),
                      ),
                    )
              }),
              m()(l()(e), '_makeFetch', function () {
                var t,
                  n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    r(
                      ((t = {}),
                      m()(t, E.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              m()(l()(e), '_handleFetch', e._makeFetch),
              m()(l()(e), '_handleChange', function (t) {
                e.setState({ passwordError: void 0, password: t.target.value })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._makeFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.fetchStatus === D.a.LOADED && this.props.fetchStatus === D.a.NONE && this._makeFetch()
                },
              },
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var e = this.props.titleHeader,
                    t = this.state.passwordError,
                    n = y.createElement(
                      F.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      W,
                    )
                  return y.createElement(
                    y.Fragment,
                    null,
                    e ? y.createElement(N.b, { text: e }) : null,
                    y.createElement(
                      k.a,
                      { style: [R.a.viewItem, R.a.bottomBorder] },
                      y.createElement(F.b, { color: 'gray700', size: 'subtext2' }, K),
                    ),
                    y.createElement(T.a, {
                      errorText: t,
                      helperText: n,
                      invalid: !!t,
                      label: G,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: this.state.password,
                    }),
                    y.createElement(
                      C.a,
                      { style: X.buttonContainer },
                      y.createElement(
                        H.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: X.button, type: 'brandFilled' },
                        Y,
                      ),
                    ),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location,
                    r = e.render,
                    a = this.state.verificationRequired,
                    c = t === D.a.FAILED && a
                  return y.createElement(
                    y.Fragment,
                    null,
                    c
                      ? this._passwordlessSsoEnabled
                        ? y.createElement(I.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : y.createElement(_.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: r }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      m()(q, 'contextType', U.a), m()(q, 'defaultProps', { titleHeader: z })
      var X = M.a.create(function (e) {
          return {
            buttonContainer: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 0,
              marginHorizontal: 'auto',
              paddingBottom: e.spaces.space12,
              paddingHorizontal: 0,
            },
            button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        Z = j(q)
      t.a = Object(x.a)(Z)
    },
    QoYZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ArchiveUnavailable', function () {
          return J
        }),
        n.d(t, 'YourTwitterData', function () {
          return Q
        })
      n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('yH/f'), n('vrRf'), n('1t7P'), n('jQ/y'), n('ERkP')),
        o = n('v6aA'),
        i = n('1YZw'),
        l = n('NyKK'),
        s = n('rxPX'),
        u = n('0KEI'),
        d = Object(s.a)()
          .propsFromState(function () {
            return { fetchStatus: l.g, downloads: l.f, isUserDataUnavailable: l.h }
          })
          .propsFromActions(function () {
            return {
              addToast: i.b,
              createDataDownload: l.c,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('DOWNLOAD_YOUR_DATA'),
              fetchDownloads: l.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'account', component: 'download_your_data' }),
        f = n('fs1G'),
        b = n('yoO3'),
        p = n('7JQg'),
        h = n('7FtF'),
        m = n('rHpw').a.create(function (e) {
          return {
            description: { flexShrink: 1 },
            helpText: { display: 'block', fontSize: e.fontSizes.subtext2, lineHeight: '1.55' },
            errorText: { marginRight: e.spaces.space20 },
            floatingLink: { paddingLeft: e.spaces.space20 },
            labelContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            narrowButton: { alignSelf: 'center', marginLeft: e.spaces.space12, paddingLeft: e.spaces.space20 },
            narrowButtonRow: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            noShrink: { flexShrink: 0 },
          }
        }),
        y = n('ClNT'),
        E = n('MWbm'),
        O = n('t62R'),
        g = n('0yYu'),
        v = n('o1YB'),
        w = n('xHsv'),
        S = n('/yvb'),
        P = n('6vad'),
        j = n('csss'),
        D = n('3XMw'),
        _ = n.n(D)
      function A(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var I = _.a.f56af9cc,
        R = _.a.cce24bf3,
        k = _.a.d6eb9b9a,
        x = _.a.d2fb334b,
        F = _.a.b708417b,
        N = _.a.jbf5843d,
        T = _.a.ea886c6e,
        C = _.a.cdcc2ad3,
        H = _.a.dbeff879,
        M = _.a.ce5d2c46,
        U = _.a.b2ed92c3,
        B = _.a.gee8110d,
        z = _.a.f56af9cc,
        G = _.a.hb02ed28,
        K = _.a.c2254083,
        W = _.a.f62d1d9d,
        Y = _.a.i859a9d3,
        V = c.createElement(
          _.a.I18NFormatMessage,
          { $i18n: 'ba13ef22' },
          c.createElement(
            O.b,
            {
              link: 'https://help.twitter.com/forms/feature_report?feature=emails&subtopic=email_twitter_archive&was_redirect=true',
            },
            _.a.c9c1ebbb,
          ),
        ),
        q = _.a.b221ca4b,
        X = { page: 'settings', section: 'account', component: 'download_your_data' },
        Z = Object.freeze(L(L({}, l.b), {}, { UNAVAILABLE: 'UNAVAILABLE' })),
        J = function () {
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(g.a, null),
            c.createElement(v.a, { label: z, withBottomBorder: !0 }),
            c.createElement(w.a, { description: G }),
          )
        }
      function Q(e) {
        var t = c.useContext(o.a).loggedInUserId,
          n = e.addToast,
          r = e.analytics,
          a = e.createDataDownload,
          i = e.createLocalApiErrorHandler,
          s = e.downloads,
          u = e.fetchDownloads,
          d = e.fetchStatus,
          v = e.isUserDataUnavailable,
          D = e.location,
          _ = !!t,
          A = !_,
          L = v,
          z = !v && _
        function Q() {
          r.scribe({ element: 'request_button', action: 'click' }),
            a()
              .then(function () {
                return n({ text: q })
              })
              .catch(i())
        }
        var $ = function () {
          var e = s.all,
            t = s.nonFailed,
            n = t.length ? t[0].status : e.length ? l.b.FAILED : l.b.NONE,
            r = !!t.length && void 0 !== t[0].urls,
            a = l.a.indexOf(n) >= 0,
            o = r && n === l.b.COMPLETE,
            i = n === l.b.FAILED,
            u = n === l.b.COMPLETE && !r,
            d = u ? Z.UNAVAILABLE : n,
            b = n === l.b.NONE ? Q : f.a,
            p = function () {
              return c.createElement(
                S.a,
                {
                  disabled: a || i || u,
                  link: o ? '/settings/your_twitter_data/data' : void 0,
                  onPress: b,
                  size: 'small',
                  style: m.narrowButton,
                  type: 'brandFilled',
                },
                (function (e) {
                  switch (e) {
                    case Z.NONE:
                      return H
                    case Z.FAILED:
                      return C
                    case Z.COMPLETE:
                      return B
                    case Z.UNAVAILABLE:
                      return M
                    default:
                      return U
                  }
                })(d),
              )
            }
          return c.createElement(
            E.a,
            { style: [m.narrowButtonRow, m.labelContainer] },
            c.createElement(
              E.a,
              { style: m.description },
              c.createElement(O.b, { color: 'normal' }, x),
              c.createElement(
                O.b,
                { color: 'gray700', style: [m.errorText, m.helpText] },
                (function (e) {
                  switch (e) {
                    case Z.NONE:
                      return null
                    case Z.FAILED:
                      return V
                    case Z.COMPLETE:
                      return W
                    case Z.UNAVAILABLE:
                      return G
                    default:
                      return K
                  }
                })(d),
              ),
            ),
            c.createElement(E.a, { style: m.noShrink }, c.createElement(p, null)),
          )
        }
        return c.createElement(
          p.b,
          { namespace: X },
          c.createElement(
            b.a,
            null,
            c.createElement(
              h.a,
              { location: D, screenType: 'secondaryDetail', title: I },
              c.createElement(w.a, { description: R }),
              z
                ? c.createElement(y.a, {
                    fetch: function () {
                      return u()
                    },
                    fetchStatus: d,
                    renderChildren: function () {
                      return c.createElement(
                        c.Fragment,
                        null,
                        c.createElement(
                          E.a,
                          null,
                          c.createElement(P.b, { text: k }),
                          c.createElement(w.a, {
                            description: F,
                            learnMoreLabel: Y,
                            learnMoreLink: 'https://help.twitter.com/managing-your-account/accessing-your-twitter-data',
                          }),
                          $(),
                        ),
                        c.createElement(g.a, null),
                        c.createElement(
                          E.a,
                          null,
                          c.createElement(P.b, { text: N }),
                          c.createElement(j.a, {
                            label: T,
                            link: { external: !0, pathname: 'https://pscp.tv/account/your-data' },
                          }),
                        ),
                      )
                    },
                  })
                : null,
              A && c.createElement(j.a, { label: B, link: '/settings/your_twitter_data/request_data' }),
              L && c.createElement(J, null),
            ),
          ),
        )
      }
      var $ = d(Q)
      t.default = $
    },
    'S/HT': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return b
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return h
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('kGix')),
        o = n('Ssj5')
      function i(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var s = 'countryNames',
        u = { fetchStatus: c.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(s, '_REQUEST'), FAILURE: ''.concat(s, '_FAILURE'), SUCCESS: ''.concat(s, '_SUCCESS') },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              return l(l({}, e), {}, { fetchStatus: c.a.LOADING })
            case d.FAILURE:
              return l(l({}, e), {}, { fetchStatus: c.a.NONE })
            case d.SUCCESS:
              return l(l({}, e), {}, { countries: t.payload, fetchStatus: c.a.LOADED })
            default:
              return e
          }
        }
      o.a.register(a()({}, s, f))
      var b = function (e) {
          return e.countryNames.countries
        },
        p = function (e, t) {
          var n = t && t.toUpperCase()
          return e.countryNames.countries[n]
        },
        h = function e(t) {
          return function (r, a) {
            return a().countryNames.fetchStatus === c.a.LOADED
              ? Promise.resolve()
              : (r({ type: d.REQUEST }),
                (function (e) {
                  switch (e) {
                    case 'ar':
                      return n.e(231).then(n.t.bind(null, 'heBS', 3))
                    case 'bg':
                      return n.e(232).then(n.t.bind(null, '9kpF', 3))
                    case 'bn':
                      return n.e(233).then(n.t.bind(null, 'GG9y', 3))
                    case 'ca':
                      return n.e(234).then(n.t.bind(null, 'icrD', 3))
                    case 'cs':
                      return n.e(235).then(n.t.bind(null, 'rxOR', 3))
                    case 'da':
                      return n.e(236).then(n.t.bind(null, '6Nxr', 3))
                    case 'de':
                      return n.e(237).then(n.t.bind(null, 'zSOo', 3))
                    case 'el':
                      return n.e(238).then(n.t.bind(null, 'MOmn', 3))
                    case 'en-GB':
                      return n.e(240).then(n.t.bind(null, 'vzeG', 3))
                    case 'en':
                      return n.e(239).then(n.t.bind(null, 'WqZ6', 3))
                    case 'es':
                      return n.e(241).then(n.t.bind(null, 'v4/g', 3))
                    case 'eu':
                      return n.e(242).then(n.t.bind(null, 'KXIK', 3))
                    case 'fa':
                      return n.e(243).then(n.t.bind(null, 'vzCi', 3))
                    case 'fi':
                      return n.e(244).then(n.t.bind(null, 'YthM', 3))
                    case 'fil':
                      return n.e(245).then(n.t.bind(null, 'AcRS', 3))
                    case 'fr':
                      return n.e(246).then(n.t.bind(null, 'PuNY', 3))
                    case 'ga':
                      return n.e(247).then(n.t.bind(null, 'FSy8', 3))
                    case 'gl':
                      return n.e(248).then(n.t.bind(null, 'igcB', 3))
                    case 'gu':
                      return n.e(249).then(n.t.bind(null, 'DaQw', 3))
                    case 'he':
                      return n.e(250).then(n.t.bind(null, '8mgg', 3))
                    case 'hi':
                      return n.e(251).then(n.t.bind(null, 'w88S', 3))
                    case 'hr':
                      return n.e(252).then(n.t.bind(null, 'dvLs', 3))
                    case 'hu':
                      return n.e(253).then(n.t.bind(null, '9fGX', 3))
                    case 'id':
                      return n.e(254).then(n.t.bind(null, 'elf3', 3))
                    case 'it':
                      return n.e(255).then(n.t.bind(null, 'sxFK', 3))
                    case 'ja':
                      return n.e(256).then(n.t.bind(null, '1/Dg', 3))
                    case 'kn':
                      return n.e(257).then(n.t.bind(null, 'nFOI', 3))
                    case 'ko':
                      return n.e(258).then(n.t.bind(null, 'RRUG', 3))
                    case 'mr':
                      return n.e(259).then(n.t.bind(null, 'EpxJ', 3))
                    case 'ms':
                      return n.e(260).then(n.t.bind(null, 'cSS2', 3))
                    case 'nb':
                      return n.e(261).then(n.t.bind(null, 'bg3k', 3))
                    case 'nl':
                      return n.e(262).then(n.t.bind(null, 'eXnI', 3))
                    case 'pl':
                      return n.e(263).then(n.t.bind(null, 'ACpo', 3))
                    case 'pt':
                      return n.e(264).then(n.t.bind(null, 'J0At', 3))
                    case 'ro':
                      return n.e(265).then(n.t.bind(null, 'hxXa', 3))
                    case 'ru':
                      return n.e(266).then(n.t.bind(null, 'gXfs', 3))
                    case 'sk':
                      return n.e(267).then(n.t.bind(null, 'fy2h', 3))
                    case 'sr':
                      return n.e(268).then(n.t.bind(null, 'FmvU', 3))
                    case 'sv':
                      return n.e(269).then(n.t.bind(null, 'prb2', 3))
                    case 'ta':
                      return n.e(270).then(n.t.bind(null, '8KkY', 3))
                    case 'th':
                      return n.e(271).then(n.t.bind(null, 'g4c5', 3))
                    case 'tr':
                      return n.e(272).then(n.t.bind(null, 'NngR', 3))
                    case 'uk':
                      return n.e(273).then(n.t.bind(null, '62bs', 3))
                    case 'ur':
                      return n.e(274).then(n.t.bind(null, 'aKQ3', 3))
                    case 'zh-Hant':
                      return n.e(276).then(n.t.bind(null, 'Wk8C', 3))
                    case 'zh':
                      return n.e(275).then(n.t.bind(null, 'YXaK', 3))
                    default:
                      return Promise.reject(
                        new Error('Tried to import country names for unknown language key: '.concat(e)),
                      )
                  }
                })(t)
                  .then(function (e) {
                    var n = e.main[t].localeDisplayNames.territories
                    r({ type: d.SUCCESS, payload: n })
                  })
                  .catch(function () {
                    r('en' === t ? { type: d.FAILURE } : e('en'))
                  }))
          }
        }
    },
    UAMM: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('97Jx'),
        a = n.n(r),
        c = (n('z84I'), n('hBvt'), n('ERkP')),
        o = n('3XMw'),
        i = n.n(o),
        l = n('yoO3'),
        s = n('7JQg'),
        u = n('xHsv'),
        d = n('7FtF'),
        f = n('OySi'),
        b = 'notificationsScreen',
        p = n('MWbm'),
        h = n('+RfI'),
        m = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        y = n.n(m),
        E = n('Lsrn'),
        O = n('k/Ka')
      function g(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(O.a)(
          'svg',
          v(
            v({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [E.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M17.46 16.272c-.142 0-.284-.04-.41-.123-.347-.23-.443-.694-.216-1.04.512-.777.974-1.695.895-3.136-.08-1.44-.64-2.303-1.23-3.02-.265-.32-.22-.793.1-1.057.317-.263.79-.22 1.056.1.678.82 1.47 2.006 1.572 3.895.104 1.89-.555 3.153-1.14 4.042-.144.22-.384.338-.628.338z',
            }),
            c.createElement('path', {
              d: 'M20.077 18.102c-.142 0-.284-.04-.41-.123-.347-.23-.443-.694-.216-1.04.775-1.178 1.55-2.692 1.424-5s-1.06-3.73-1.958-4.817c-.264-.32-.22-.792.1-1.056.318-.264.792-.22 1.057.1 1.054 1.276 2.15 2.95 2.3 5.69.15 2.744-.76 4.525-1.667 5.907-.145.22-.385.338-.63.338zM12.862 2h-9c-1.24 0-2.25 1.01-2.25 2.25v15.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V4.25c0-1.24-1.01-2.25-2.25-2.25zm.75 17.75c0 .41-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75v-2.14h10.5v2.14zm0-3.64h-10.5V4.25c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75v11.86z',
            }),
            c.createElement('path', {
              d: 'M8.946 19.822H7.78c-.415 0-.75-.336-.75-.75s.335-.75.75-.75h1.166c.414 0 .75.336.75.75s-.335.75-.75.75z',
            }),
          ),
        )
      }
      w.metadata = { width: 24, height: 24 }
      var S = w,
        P = i.a.eb75875d,
        j = i.a.a3f22d8d,
        D = i.a.i647fb03,
        _ = i.a.ef1b5cbb,
        A = i.a.bcd81cab,
        L = i.a.da867c58,
        I = { page: 'settings', section: 'notification' },
        R = [
          { description: _, label: D, link: '/settings/notifications/filters', Icon: h.a },
          { description: L, label: A, link: '/settings/notifications/preferences', Icon: S },
        ]
      t.default = function (e) {
        var t = e.location
        return c.createElement(
          s.b,
          { namespace: I },
          c.createElement(
            l.a,
            null,
            c.createElement(
              d.a,
              { location: t, screenType: 'primaryDetail', title: P },
              c.createElement(
                p.a,
                { testID: b },
                c.createElement(u.a, { description: j }),
                R.map(function (e) {
                  return c.createElement(f.b, a()({}, e, { key: e.link }))
                }),
              ),
            ),
          ),
        )
      }
    },
    nnZo: function (e, t, n) {
      'use strict'
      n.r(t)
      n('z84I'), n('hBvt')
      var r = n('ERkP'),
        a = n('v6aA'),
        c = n('3XMw'),
        o = n.n(c),
        i = n('yoO3'),
        l = n('7JQg'),
        s = n('7FtF'),
        u = n('OySi'),
        d = 'accountScreen',
        f = n('MWbm'),
        b = n('boUI'),
        p = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        h = n.n(p),
        m = n('Lsrn'),
        y = n('k/Ka')
      function E(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var g = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(y.a)(
          'svg',
          O(
            O({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [m.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          r.createElement(
            'g',
            null,
            r.createElement('path', {
              d: 'M8.307 22.163c-1.68 0-3.36-.64-4.638-1.918-2.56-2.558-2.56-6.72 0-9.276 1.51-1.512 3.62-2.177 5.705-1.835l7.073-7.078c.147-.148.35-.226.56-.22l4.35.17c.39.017.704.33.72.72l.17 4.35c.008.2-.064.396-.2.542-.14.145-.33.23-.53.236l-2.135.056-.056 2.136c-.01.4-.332.72-.73.73l-2.136.056-.055 2.137c-.005.193-.084.376-.22.512l-1.362 1.362c.23 1.985-.455 3.98-1.877 5.402-1.278 1.277-2.958 1.917-4.64 1.917zm-.01-11.617c-1.324 0-2.603.52-3.566 1.483C2.76 14 2.76 17.21 4.73 19.183c1.973 1.973 5.183 1.973 7.156 0 1.17-1.17 1.694-2.843 1.402-4.474-.043-.24.034-.488.208-.662l1.417-1.417.066-2.548c.01-.4.33-.72.73-.73l2.135-.056.056-2.136c.012-.4.333-.72.73-.73l2.09-.055-.115-2.896-3.327-.13-7.125 7.128c-.183.183-.452.26-.7.2-.384-.09-.772-.132-1.155-.132zm7.358 2.404h.01-.01z',
            }),
            r.createElement('path', {
              d: 'M8.308 18.132c-.647 0-1.294-.246-1.787-.738-.983-.985-.983-2.588 0-3.573.988-.984 2.59-.982 3.574 0 .984.986.984 2.59 0 3.574-.492.492-1.14.738-1.786.738zm0-3.55c-.264 0-.526.1-.727.3-.398.4-.398 1.05 0 1.45.4.4 1.052.402 1.453 0 .4-.4.4-1.05 0-1.45-.2-.2-.462-.3-.725-.3z',
            }),
          ),
        )
      }
      g.metadata = { width: 24, height: 24 }
      var v = g,
        w = n('89Im'),
        S = n('wz7L')
      function P(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var D = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(y.a)(
          'svg',
          j(
            j({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [m.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          r.createElement(
            'g',
            null,
            r.createElement('path', {
              d: 'M16.75 2.36c-2.34 0-3.92 1.62-4.74 2.8-.83-1.18-2.41-2.8-4.75-2.8-2.93 0-5.51 2.74-5.51 5.86 0 6.51 7.61 13.37 10.27 13.42 2.63-.05 10.23-6.91 10.23-13.42 0-3.12-2.57-5.86-5.5-5.86zm-4.73 17.78c-1.52-.02-8.77-6.03-8.77-11.92 0-2.33 1.88-4.36 4.01-4.36 2.1 0 3.45 1.97 3.9 2.74v.01L9.02 10.5c-.11.2-.12.45-.03.66.1.21.29.37.51.43l2.72.66-2.16 3.15c-.24.34-.15.81.19 1.05.13.08.28.13.43.13.23 0 .47-.12.62-.33l2.77-4.04c.13-.21.17-.47.08-.7-.09-.23-.28-.4-.52-.46l-2.82-.69L12.7 6.9s1.46-3.04 4.05-3.04c2.13 0 4 2.03 4 4.36 0 5.89-7.24 11.9-8.73 11.92z',
            }),
          ),
        )
      }
      D.metadata = { width: 24, height: 24 }
      var _ = D,
        A = n('Nh1N'),
        L = n('xHsv'),
        I = n('4zmP'),
        R = n('rHpw'),
        k = o.a.hc73f03f,
        x = o.a.d3a2bde7,
        F = o.a.f15bfdb3,
        N = o.a.idca4741,
        T = o.a.b6ded35d,
        C = o.a.ab1f7eef,
        H = o.a.f56af9cc,
        M = o.a.cce24bf3,
        U = o.a.d13e165c,
        B = o.a.d1e97fdf,
        z = o.a.hfb92b14,
        G = o.a.i203df96,
        K = { page: 'settings', section: 'account' },
        W = { label: 'Go to Security settings', link: '/settings/security_and_account_access' },
        Y = R.a.create(function (e) {
          return { callout: { marginHorizontal: e.componentDimensions.gutterHorizontal, width: 'auto' } }
        })
      t.default = function (e) {
        var t = e.location,
          n = r.useContext(a.a).featureSwitches.isTrue('responsive_web_delegate_enabled'),
          c = r.useMemo(
            function () {
              return (function (e) {
                return [
                  { description: N, label: F, link: '/settings/your_twitter_data/account', Icon: b.a },
                  { description: T, label: C, link: '/settings/password', Icon: v },
                  { description: M, label: H, link: '/settings/download_your_data', Icon: w.a },
                  { description: B, disabled: e, label: U, link: '/settings/teams', Icon: S.a },
                  { description: G, label: z, link: '/settings/deactivate', Icon: _ },
                ]
              })(n)
            },
            [n],
          )
        return r.createElement(
          l.b,
          { namespace: K },
          r.createElement(
            i.a,
            null,
            r.createElement(
              s.a,
              { location: t, screenType: 'primaryDetail', title: k },
              r.createElement(
                f.a,
                { testID: d },
                r.createElement(L.a, { description: x }),
                c.map(function (e) {
                  return r.createElement(
                    f.a,
                    { key: e.label },
                    r.createElement(u.b, e),
                    e.disabled &&
                      '/settings/teams' === e.link &&
                      r.createElement(I.a, {
                        Icon: A.a,
                        action: W,
                        headline: 'TweetDeck Teams moved',
                        style: Y.callout,
                        text: "We're moving the Teams feature to Twitter Delegate in your Security and account access settings.",
                      }),
                  )
                }),
              ),
            ),
          ),
        )
      }
    },
    o1YB: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('uFXj'), n('ERkP')),
        E = n('t62R'),
        O = n('rHpw'),
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var w = (function (e) {
        u()(n, e)
        var t = v(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(c))),
            m()(l()(e), '_renderSubtextAndLink', function () {
              var t = e.props.subtext
              return y.createElement(E.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
            }),
            m()(l()(e), '_renderLearnMore', function () {
              var t = e.props,
                n = t.learnMoreLabel,
                r = t.learnMoreLink
              return r && n ? y.createElement(E.b, { link: r, size: 'subtext2' }, n) : null
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
                  t = e.label,
                  n = e.learnMoreLabel,
                  r = e.learnMoreLink,
                  a = e.subtext,
                  c = e.withBottomBorder
                return y.createElement(
                  g.a,
                  { style: [S.root, c && S.bottomBorder] },
                  y.createElement(E.b, null, t),
                  a
                    ? n && r
                      ? this._renderSubtextAndLink()
                      : y.createElement(E.b, { color: 'gray700', size: 'subtext2' }, a)
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(y.Component)
      m()(w, 'defaultProps', { withBottomBorder: !0 })
      var S = O.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          bottomBorder: {
            borderBottomWidth: e.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
        }
      })
      t.a = w
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
  },
])
//# sourceMappingURL=WIPED
