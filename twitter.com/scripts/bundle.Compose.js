;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return v
      }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'h', function () {
          return _
        }),
        n.d(t, 'g', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return T
        }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return S
        }),
        n.d(t, 'i', function () {
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        s = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        l = n('kGix'),
        c = (n('hBpG'), n('M6MT')),
        u = n('Ssj5'),
        d = n('qlwE'),
        m = n('a/ea'),
        p = n('474o'),
        h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        g = Object.freeze({
          initial: { fetchStatus: l.a.NONE },
          lastSearch: { fetchStatus: l.a.NONE },
          lastSelectedPlace: void 0,
        })
      var v = function (e) {
          return e.placePicker.initial.results
        },
        y = function (e) {
          return e.placePicker.initial.fetchStatus
        },
        _ = function (e) {
          return e.placePicker.lastSearch.results
        },
        b = function (e) {
          return e.placePicker.lastSearch.fetchStatus
        },
        C = function (e) {
          return (function (e, t) {
            return null != t
              ? t
              : null == e
              ? void 0
              : e.places.find(function (t) {
                  return (null == e ? void 0 : e.autotag_place_id) === t.place.id
                })
          })(
            v(e),
            (function (e) {
              return e.placePicker.lastSelectedPlace
            })(e),
          )
        },
        w = function (e, t) {
          return function (n, a, r) {
            var o = r.api
            return Object(s.b)(n, { request: o.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        T = function (e) {
          return function (t, n, a) {
            a.api
            var r = Object(m.d)(n())
            return t(
              w(
                {
                  query_type: p.a.tweet_compose_location,
                  lat: null == r ? void 0 : r.coords.latitude,
                  long: null == r ? void 0 : r.coords.longitude,
                  hacc: null == r ? void 0 : r.coords.accuracy,
                  search_term: e,
                },
                p.c.lastSearch,
              ),
            )
          }
        },
        E = function () {
          return function (e, t, n) {
            n.api
            var a = y(t()),
              r = v(t())
            if (a === l.a.LOADING || r) return Promise.resolve()
            var o = Object(m.d)(t())
            return o
              ? e(
                  w(
                    {
                      lat: o.coords.latitude,
                      long: o.coords.longitude,
                      hacc: o.coords.accuracy,
                      query_type: p.a.tweet_compose_location,
                      count: 50,
                    },
                    p.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        S = function () {
          return function (e, t, n) {
            n.api
            return Object(d.l)(t()) && Object(m.c)(t()) === c.b.granted
              ? e(Object(m.b)())
                  .then(function () {
                    return e(E())
                  })
                  .then(function () {
                    return C(t())
                  })
              : Promise.resolve()
          }
        },
        x = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        I = function (e) {
          return { type: x, payload: e }
        }
      u.a.register(
        r()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return i()(i()({}, e), {}, r()({}, n, { fetchStatus: l.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return i()(i()({}, e), {}, r()({}, a, { fetchStatus: l.a.FAILED }))
            case f.SUCCESS:
              var o = t.meta.resultSet,
                s = t.payload
              return i()(i()({}, e), {}, r()({}, o, { fetchStatus: l.a.LOADED, results: s }))
            case x:
              var c = t.payload
              return i()(i()({}, e), {}, { lastSelectedPlace: null != c ? c : void 0 })
            default:
              return e
          }
        }),
      )
    },
    '3GUV': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = n('ERkP'),
        m = n.n(d),
        p = n('rHpw'),
        h = n('MWbm'),
        f = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return m.a.createElement(h.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        g = p.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = f
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('2G9S')
      var a = n('1YZw'),
        r = n('pXBW'),
        o = n('3XMw'),
        i = n.n(o),
        s = n('SrIh'),
        l = i.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(s.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '474o': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return o
        })
      n('yH/f')
      var a = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        r = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        o = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '5UID': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = n('ERkP'),
        m = n.n(d),
        p = n('3XMw'),
        h = n.n(p),
        f = n('rHpw'),
        g = n('+/1j'),
        v = n('MWbm'),
        y = h.a.e5b0063d,
        _ = 0,
        b = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(_)), (_ += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = y({ title: n })
                  return m.a.createElement(
                    v.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    m.a.createElement(
                      g.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: f.a.visuallyHidden,
                      },
                      n,
                    ),
                    m.a.createElement(v.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      t.a = b
    },
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return $
      }),
        n.d(t, 'e', function () {
          return ee
        }),
        n.d(t, 'f', function () {
          return te
        }),
        n.d(t, 'd', function () {
          return ne
        }),
        n.d(t, 'a', function () {
          return oe
        })
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        _ = n('97Jx'),
        b = n.n(_),
        C = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('7x/C'), n('ERkP')),
        w = n.n(C),
        T = n('6rlp'),
        E = n('zh9S'),
        S = n('G6rE'),
        x = n('rxPX'),
        I = n('0KEI'),
        R = function (e, t) {
          return S.e.select(e, t.userId)
        },
        k = function (e, t) {
          return t.promotedContent
        },
        A = Object(x.a)()
          .propsFromState(function () {
            return { promotedContent: k, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: T.a,
              scribeAction: E.c,
            }
          }),
        P = n('I57f'),
        O = n('vMjK'),
        D = n('MWbm'),
        L = n('IG7M'),
        M = n('rHpw'),
        B = function (e) {
          var t = e.children,
            n = e.promotedContent,
            a = e.user
          return w.a.createElement(
            D.a,
            { style: F.decorationWrapper },
            t,
            w.a.createElement(L.a, {
              renderActionMenu: function (e) {
                return w.a.createElement(O.b, { onClose: e, promotedContent: n, user: a, view: 'follower' })
              },
              style: F.actionMenu,
            }),
          )
        },
        F = M.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        N = n('uIZp'),
        V = n('mN6z'),
        j = n('caTy'),
        U = n('3IPs'),
        H = n('Rp9C'),
        z = n('X04g'),
        W = n('Re5t'),
        q = n('TnY3'),
        G = n('hxu0'),
        K = n('v6aA'),
        X = n('7JQg'),
        Y = n('IMA+'),
        Q = n('cFuS'),
        J = [
          'avatarDecoration',
          'bottomControl',
          'cellClickable',
          'createLocalApiErrorHandler',
          'decoration',
          'followRequestReceived',
          'hideBlocked',
          'history',
          'isAutoblocking',
          'isBlockedBy',
          'isBlocking',
          'isDeviceFollowing',
          'isFollowing',
          'isInSidebar',
          'location',
          'log',
          'onClick',
          'promotedItemId',
          'saveAsRecentSearch',
          'scribeAction',
          'scribeData',
          'scribeNamespace',
          'shouldScribeImpression',
          'shouldScribeProfileClick',
          'shouldStoreTypeaheadItem',
          'socialContext',
          'user',
        ],
        Z = function (e) {
          var t = e.user
          return t && t.profile_image_url_https
            ? w.a.createElement(
                ae,
                b()({}, e, {
                  avatarUri: t.profile_image_url_https,
                  description: t.description,
                  entities: t.entities,
                  followRequestReceived: t.follow_request_received,
                  highlightedLabel: t.highlightedLabel,
                  isAutoblocking: t.smart_blocking,
                  isBlockedBy: t.blocked_by,
                  isBlocking: t.blocking,
                  isDeviceFollowing: t.notifications,
                  isFollowedBy: t.followed_by,
                  isFollowing: t.following,
                  isProtected: t.protected,
                  isVerified: t.verified,
                  name: t.name,
                  screenName: t.screen_name,
                  translatorType: t.translator_type,
                  user: t,
                  withheldDescription: t.withheld_description,
                  withheldEntities: t.withheld_entities,
                }),
              )
            : null
        }
      Z.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: W.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Q.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var $ = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return w.a.createElement(P.a, { isFollowing: t, style: re.followButton, userId: n })
        },
        ee = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            a = e.userId
          return t !== a
            ? w.a.createElement(N.a, { promotedContent: n, size: 'small', style: re.followButton, userId: a })
            : null
        },
        te = function (e) {
          return w.a.createElement(B, { promotedContent: e.promotedContent, user: e.user }, ee(e))
        },
        ne = function (e) {
          return w.a.createElement(L.a, {
            renderActionMenu: function (t) {
              return w.a.createElement(O.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        ae = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(m()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.PROFILE_IMAGE_CLICK)
              }),
              y()(m()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  a = t.onClick,
                  r = t.screenName,
                  o = t.user,
                  i = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  a ? a({ user: o, state: i }) : n.push({ pathname: '/'.concat(r), state: i || void 0 })
              }),
              y()(m()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Q.b.SCREEN_NAME_CLICK)
              }),
              y()(m()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.userId
                n && a && a(z.a.ItemType.USER) && n({ user: { id: r, type: U.a.User } })
              }),
              y()(m()(e), '_scribeAction', function (t) {
                var n,
                  a = e.props,
                  r = a.promotedContent,
                  o = a.scribeAction,
                  s = a.scribeData,
                  l = a.scribeNamespace,
                  c = a.user,
                  u = a.userId,
                  d =
                    null == s || null === (n = s.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === z.a.ItemType.USER && e.id === u
                        }),
                  m = s.search_details,
                  p = { items: [i()(i()({}, d), H.a.getUserItem(c, r))], profile_id: u, search_details: m }
                o(i()(i()({}, l), t), p)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(V.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarDecoration,
                    n = (e.bottomControl, e.cellClickable),
                    a =
                      (e.createLocalApiErrorHandler,
                      e.decoration,
                      e.followRequestReceived,
                      e.hideBlocked,
                      e.history,
                      e.isAutoblocking,
                      e.isBlockedBy,
                      e.isBlocking,
                      e.isDeviceFollowing,
                      e.isFollowing,
                      e.isInSidebar),
                    o =
                      (e.location,
                      e.log,
                      e.onClick,
                      e.promotedItemId,
                      e.saveAsRecentSearch,
                      e.scribeAction,
                      e.scribeData,
                      e.scribeNamespace,
                      e.shouldScribeImpression,
                      e.shouldScribeProfileClick,
                      e.shouldStoreTypeaheadItem,
                      e.socialContext),
                    i = e.user,
                    s = r()(e, J)
                  return this._shouldRender()
                    ? w.a.createElement(
                        Y.a,
                        b()({}, s, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: i.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: n ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: o
                            ? {
                                contextType: o.contextType,
                                text: o.text,
                                link: o.landingUrl ? Object(j.b)(o.landingUrl) : void 0,
                              }
                            : void 0,
                          withDarkerInteractiveBackground: a,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderBottomControl',
                value: function () {
                  return this._renderControl(this.props.bottomControl || null)
                },
              },
              {
                key: '_renderDecoration',
                value: function () {
                  return this._renderControl(this.props.decoration)
                },
              },
              {
                key: '_renderControl',
                value: function (e) {
                  var t = this.context.loggedInUserId,
                    n = this.props,
                    a = n.displayMode,
                    r = n.followRequestReceived,
                    o = n.isAutoblocking,
                    i = n.isBlocking,
                    s = n.isDeviceFollowing,
                    l = n.isFollowing,
                    c = n.promotedContent,
                    u = n.screenName,
                    d = n.user,
                    m = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: a,
                        followRequestReceived: r,
                        isAutoblocking: o,
                        isBlocking: i,
                        isDeviceFollowing: !!s,
                        isFollowing: !!l,
                        loggedInUserId: t,
                        promotedContent: c,
                        screenName: u,
                        user: d,
                        userId: m,
                      })
                    : e
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props,
                    t = e.hideBlocked,
                    n = e.isBlockedBy,
                    a = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (n || a))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    n = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || n ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.promotedItemType
                  return t && n === Q.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.log,
                    r = t.promotedContent,
                    o = t.promotedItemId,
                    i = t.promotedItemType,
                    s = t.userId
                  r &&
                    a({
                      disclosureType: r.disclosure_type,
                      itemId: o || s,
                      itemType: i,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    a = e.promotedContent,
                    r = e.promotedItemType,
                    o = e.shouldScribeImpression,
                    i = e.userId
                  if (a && r === Q.c.USER) {
                    var s = a.disclosure_type,
                      l = a.impression_id
                    n({
                      disclosureType: s,
                      itemId: i,
                      itemType: Q.c.USER,
                      params: { event: Q.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else o && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      y()(ae, 'contextType', K.a), y()(ae, 'defaultProps', Z.defaultProps)
      var re = M.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        oe = Object(q.a)(Object(G.a)(A(Z)))
      t.b = Object(X.c)({ element: 'user' })(oe)
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
              }),
              i.a.createElement('path', {
                d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    Drq4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
              i.a.createElement('path', {
                d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
              }),
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    FS1z: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        v = n('rxPX'),
        y = n('0KEI'),
        _ = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        b = function (e, t) {
          return t.module.selectItems(e)
        },
        C = Object(v.a)()
          .propsFromState(function (e) {
            return { fetchStatus: _, items: b }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        w = n('v//M'),
        T = n('sIe2'),
        E = n('3XMw'),
        S = n.n(E),
        x = n('TEoO'),
        I = S.a.i9028824,
        R = 'sliceTimeline',
        k = function (e) {
          return e
        },
        A = { viewType: 'timeline' },
        P = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  s = t.renderer,
                  l = t.withoutHeadroom
                return !a || o < 1
                  ? null
                  : 1 === o
                  ? g.a.createElement(x.a, {
                      cacheKey: R,
                      footer: n,
                      identityFunction: k,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: s,
                      withoutHeadroom: l,
                    })
                  : g.a.createElement(T.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: k,
                      numColumns: o,
                      renderItem: s,
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
            i()(n, [
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
                    ? g.a.createElement(w.a, {
                        accessibilityLabel: I,
                        behavioralEventContext: A,
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
        })(g.a.Component)
      h()(P, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var O = C(P)
      t.a = O
    },
    JFx8: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 158 20',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M1.29 9.333v3.992H0V4.31h3.412c.876 0 1.443.22 1.88.593.54.464.89 1.147.89 1.92 0 .772-.35 1.454-.89 1.918-.437.375-1.004.593-1.88.593H1.29M3.35 8.11c.618 0 .953-.155 1.185-.4.22-.23.36-.54.36-.888s-.142-.657-.36-.888c-.232-.245-.567-.4-1.185-.4H1.29V8.11h2.06zm6.155-.966c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.785-1.996-1.905-1.996S7.6 9.192 7.6 10.3c0 1.107.784 1.996 1.905 1.996zm9.025-5.021l1.662 4.134 1.66-4.134h1.263l-2.46 6.053h-.85l-1.7-4.25-1.7 4.25h-.85l-2.458-6.053h1.262l1.66 4.134 1.66-4.134h.85m6.091 3.284c.065 1.017.903 1.83 1.958 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.315 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258H24.62m.104-1.03h3.297c-.18-.774-.875-1.315-1.596-1.315-.786 0-1.494.528-1.7 1.314zm9.066-1.173c-.143-.04-.284-.052-.477-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.295-.412.926-.824 1.815-.824.13 0 .335.013.476.04l-.14 1.17m1.647 2.203c.064 1.017.902 1.83 1.957 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.314 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.663m.103-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.786 0-1.494.528-1.7 1.314zm10.534 3.244c-.49.438-1.146.682-1.867.682-.54 0-1.108-.154-1.52-.4-.915-.54-1.545-1.544-1.545-2.755 0-1.212.645-2.23 1.56-2.77.41-.245.913-.386 1.48-.386.657 0 1.314.206 1.854.657V4.183h1.223v9.143h-1.185v-.553m-.038-3.606c-.373-.49-.992-.863-1.726-.863-1.172 0-1.945.94-1.945 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm7.815 4.159h-1.185V4.182h1.224v3.62c.54-.452 1.196-.658 1.853-.658.567 0 1.07.142 1.48.386.915.54 1.56 1.558 1.56 2.77 0 1.21-.632 2.214-1.546 2.755-.412.245-.98.4-1.52.4-.72 0-1.378-.245-1.867-.683v.554m.04-1.893c.41.554 1.042.863 1.66.863 1.172 0 2.01-.914 2.01-1.996 0-1.056-.773-1.996-1.946-1.996-.734 0-1.352.374-1.725.863v2.266zm6.296 4.983l1.635-3.72-2.588-5.423h1.313l1.893 3.992 1.74-3.992h1.287l-3.98 9.143h-1.3m39.407-8.563v1.223H96.63v4.25h-1.288V4.31h5.15v1.225H96.63v2.318h2.962m4.223-.709c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.784-1.996-1.905-1.996-1.12 0-1.906.89-1.906 1.996 0 1.107.785 1.996 1.905 1.996zm4.841.143c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.13.953.348 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.648-.384-2.15-1.015m10.25-4.082c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.186v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.144 1.17m1.48 3.362c.567.438 1.185.67 1.79.67.528 0 1.056-.283 1.056-.76 0-.695-1.005-.734-1.893-1.03-.735-.244-1.392-.708-1.392-1.558 0-1.3 1.16-1.893 2.24-1.893.89 0 1.533.283 2.01.67l-.63.876c-.374-.282-.812-.475-1.302-.475-.592 0-1.095.283-1.095.76 0 .412.477.554 1.083.708.953.245 2.202.67 2.202 1.92 0 1.145-1.07 1.853-2.254 1.853-.965 0-1.776-.296-2.446-.837l.632-.904m8.228 1.738c-.54 0-1.108-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.412-.245.914-.386 1.48-.386.684 0 1.34.206 1.894.682v-.553h1.185v9.143h-1.224v-3.62c-.49.427-1.107.658-1.828.658m1.828-4.288c-.373-.49-.99-.863-1.726-.863-1.172 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm3.45 3.272c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.128.953.347 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.647-.384-2.15-1.015m11.333.335c-.49.438-1.146.682-1.867.682-.54 0-1.107-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.413-.245.916-.386 1.482-.386.683 0 1.34.206 1.893.682v-.553h1.185v6.052h-1.185v-.553m-.04-3.606c-.372-.49-.99-.863-1.724-.863-1.17 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm6.232-.81c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.142 1.17m1.905 2.203c.065 1.017.902 1.83 1.957 1.83.903 0 1.392-.44 1.74-.825l.797.76c-.45.58-1.313 1.133-2.55 1.133-1.764 0-3.13-1.34-3.13-3.155 0-1.816 1.237-3.155 2.95-3.155 1.687 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.66m.102-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.785 0-1.493.528-1.7 1.314zM86.48 0H75.813C74.34 0 73.91 1.107 73.91 1.805v16.947c0 .786.42 1.077.658 1.173.237.097.892.177 1.284-.276 0 0 5.105-5.863 5.188-5.954.08-.09.17-.092.22-.092h3.234c1.37 0 1.59-.992 1.732-1.567.12-.48 1.455-7.32 1.9-9.488C88.466.89 88.046 0 86.48 0m-.254 12.037c.12-.48 1.455-7.32 1.9-9.488m-2.275.337l-.447 2.333c-.053.253-.302.49-.596.49l-4.156-.005c-.467 0-.87.352-.87.82v.508c0 .467.38.85.85.85h3.524c.33 0 .608.31.537.663-.07.353-.438 2.216-.48 2.41-.04.192-.246.454-.576.454h-2.878c-.598.02-.726.023-1.077.46-.352.435-3.506 4.222-3.506 4.222-.03.037-.062.026-.062-.014V2.852c0-.298.26-.648.648-.648h8.56c.317 0 .61.296.53.683z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 158, height: 20 }), (t.a = c)
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      n('yH/f')
      var a = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    ODCi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Recipients', function () {
          return j
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('ddV6'),
        i = n.n(o),
        s = (n('vrRf'), n('LW0h'), n('7x/C'), n('2G9S'), n('ERkP')),
        l = n.n(s),
        c = (n('z84I'), n('RqPI')),
        u = n('xVN5'),
        d = n('wpu3'),
        m = n('hqKg'),
        p = n('o52z'),
        h = n('oEGd'),
        f = function (e, t) {
          return t.location.state
        },
        g = function (e, t) {
          var n = f(0, t)
          return n && n.inReplyToStatus
        },
        v = Object(m.createSelector)(g, c.q, function (e, t) {
          return e && t
            ? Object(d.a)({ inReplyToStatus: e, loggedInUserId: t, excludeReplyUser: !0 }).map(function (e) {
                return e.id_str
              })
            : Object(p.a)()
        }),
        y = Object(m.createSelector)(
          v,
          function (e, t) {
            var n = f(0, t)
            return (n && n.excludedRecipients) || Object(p.a)()
          },
          g,
          function (e, t, n) {
            return { recipientIds: e, initialExcludedRecipients: t, inReplyToStatus: n }
          },
        ),
        _ = { updateExcludedRecipientsV2: u.v },
        b = Object(h.g)(y, _),
        C = n('jHSc'),
        w = n('3XMw'),
        T = n.n(w),
        E = n('5FtR'),
        S = n('7JQg'),
        x = n('s1N3'),
        I = n('88ay'),
        R = n('hqDb'),
        k = n('MWbm'),
        A = n('0yYu'),
        P = n('6vad'),
        O = n('XiMS'),
        D = n('t62R'),
        L = n('/yvb'),
        M = T.a.c55eed71,
        B = T.a.b772cd65,
        F = T.a.caca3101,
        N = T.a.c6a6dc2f,
        V = { page: 'compose', section: 'recipients' },
        j = function (e) {
          var t = e.history,
            n = e.inReplyToStatus,
            a = e.initialExcludedRecipients,
            o = e.recipientIds,
            s = e.updateExcludedRecipientsV2,
            c = l.a.useState(a),
            u = i()(c, 2),
            d = u[0],
            m = u[1]
          if (!n) return l.a.createElement(E.a, { to: '/compose/tweet' })
          var h = (n.retweeted_status || n).user,
            f = function (e) {
              m(e ? Object(p.a)() : o)
            },
            g = function (e) {
              return function () {
                var t = -1 !== d.indexOf(e)
                m(
                  t
                    ? d.filter(function (t) {
                        return t !== e
                      })
                    : Object(x.a)([].concat(r()(d), [e])),
                )
              }
            },
            v = function () {
              s(d), t.goBack()
            },
            y = function () {
              return o.length > 1 ? l.a.createElement(O.a, { checked: 0 === d.length, onChange: f }) : null
            },
            _ = function (e) {
              var t = e.isBlocking,
                n = e.screenName
              return t ? l.a.createElement(D.b, { color: 'magenta500', size: 'subtext2' }, N({ screenName: n })) : null
            },
            b = function (e) {
              if (!n) return null
              var t = (n.retweeted_status || n).user,
                a = -1 !== d.indexOf(e),
                r = e === t.id_str,
                o = l.a.createElement(O.a, { checked: !a, disabled: r, onChange: g(e) })
              return l.a.createElement(I.b, {
                bottomControl: _,
                cellClickable: !r,
                decoration: o,
                key: e,
                onClick: g(e),
                promotedItemType: 'users',
                userId: e,
                withLink: !1,
              })
            }
          return l.a.createElement(
            S.b,
            { namespace: V },
            l.a.createElement(
              C.b,
              {
                backLocation: '/compose/tweet',
                history: t,
                onBackClick: v,
                rightControl: l.a.createElement(L.a, { onPress: v, size: 'xSmall', type: 'brandFilled' }, B),
                title: M,
              },
              b(h.id_str),
              o.length
                ? l.a.createElement(
                    k.a,
                    null,
                    l.a.createElement(A.a, null),
                    l.a.createElement(P.b, { rightControl: y(), text: F }),
                    l.a.createElement(R.a, { renderUserCell: b, userIds: o }),
                  )
                : null,
            ),
          )
        }
      t.default = b(j)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('5UID'),
        l = n('3GUV'),
        c = n('iBK2'),
        u = ['accessibilityTitle'],
        d = i.a.createElement(l.a, null),
        m = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, u),
            a = i.a.createElement(c.b, n)
          return t ? i.a.createElement(s.a, { title: t }, a) : a
        }
      ;(m.defaultProps = { footer: d }), (t.a = m)
    },
    WOwf: function (e, t, n) {
      'use strict'
      function a(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    XpKj: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return _
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'a', function () {
          return C
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        s = (n('yH/f'), n('LW0h'), n('7x/C'), n('oEOe')),
        l = n('kGix'),
        c = n('Ssj5'),
        u = 'scheduledTweets',
        d = { fetchStatus: l.a.NONE, scheduledTweets: [] },
        m = 'FETCH_SCHEDULED_TWEETS',
        p = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE',
        }),
        h = 'DELETE_SCHEDULED_TWEET',
        f = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE',
        }),
        g = function (e, t) {
          return t.filter(function (t) {
            return t.rest_id !== e
          })
        }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case p.SUCCESS:
            if (t.payload) return i()(i()({}, e), {}, { fetchStatus: l.a.LOADED, scheduledTweets: t.payload })
            break
          case p.FAILURE:
            return i()(i()({}, e), {}, { fetchStatus: l.a.FAILED })
          case p.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: l.a.LOADING })
          case f.SUCCESS:
            var n = t.meta
            return n && n.deleteScheduledTweetId
              ? i()(i()({}, e), {}, { scheduledTweets: g(n.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(r()({}, u, v))
      var y = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        _ = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        b = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(s.b)(e, { request: a.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: p,
              context: m,
            }).then(function () {})
          }
        },
        C = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(s.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: f,
              context: h,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return d
      }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return v
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        s = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        l = n('Ssj5'),
        c = 'geoLocation',
        u = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var d = function (e) {
          return e.geoLocation.permissionStatus
        },
        m = function (e) {
          return e.geoLocation.position
        },
        p = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: p }
        },
        f = 'rweb/geoLocation/SET_POSITION',
        g = function () {
          return function (e, t) {
            return y()
              .then(function (t) {
                return e({ payload: t, type: f })
              })
              .catch(function (t) {
                return e(h(s.b.denied)), Promise.reject(t)
              })
          }
        },
        v = function () {
          return function (e, t) {
            return m(t()) ? Promise.resolve() : e(g())
          }
        },
        y = function () {
          return new Promise(function (e, t) {
            return navigator.geolocation.getCurrentPosition(function (t) {
              var n = {
                timestamp: t.timestamp,
                coords: {
                  latitude: t.coords.latitude,
                  longitude: t.coords.longitude,
                  altitude: t.coords.altitude,
                  accuracy: t.coords.accuracy,
                  altitudeAccuracy: t.coords.altitudeAccuracy,
                  heading: t.coords.heading,
                  speed: t.coords.speed,
                },
              }
              return e(n)
            }, t)
          })
        }
      l.a.register(
        r()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case p:
              return i()(i()({}, e), {}, { permissionStatus: t.payload })
            case f:
              return i()(i()({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    h5NW: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('RhWx'),
        i = n.n(o),
        s = n('yiKp'),
        l = n.n(s),
        c = n('VrFO'),
        u = n.n(c),
        d = n('Y9Ll'),
        m = n.n(d),
        p = n('1Pcy'),
        h = n.n(p),
        f = n('5Yy7'),
        g = n.n(f),
        v = n('2VqO'),
        y = n.n(v),
        _ = n('KEM+'),
        b = n.n(_),
        C =
          (n('2G9S'),
          n('yH/f'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('5BYb'),
          n('KqXw'),
          n('3uku'),
          n('7xRU'),
          n('JtPf'),
          n('jQ3i'),
          n('x4t0'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('MvUL'),
          n('ulNE'),
          n('urw/'),
          n('LW0h'),
          n('hCOa'),
          n('DfhM'),
          n('hBvt'),
          n('vrRf'),
          n('uFXj'),
          n('ERkP')),
        w = n.n(C),
        T = n('ye3X'),
        E = n('pXBW'),
        S = n('6/RC'),
        x = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('v6aA'),
        R = n('+Kfv'),
        k = n('eSoz'),
        A = n('rxPX'),
        P = function (e, t) {
          var n = t.communityId
          return n ? k.c.select(e, n) : void 0
        },
        O = Object(A.a)().propsFromState(function () {
          return { community: P }
        }),
        D = n('MtXG'),
        L = n('t62R'),
        M = n('CKsB'),
        B = n('rHpw'),
        F = n('3XMw'),
        N = n.n(F),
        V = N.a.d58baa7e,
        j = O(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var o,
              i = n.member_count
            return w.a.createElement(M.a, {
              actionSubText:
                ((o = V(i)),
                w.a.createElement(
                  D.a.Group,
                  null,
                  w.a.createElement(
                    D.a,
                    null,
                    w.a.createElement(
                      L.b,
                      { color: 'white' },
                      w.a.createElement(
                        N.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(D.a.Value, null, N.a.ibd0106d({ formattedCount: o })),
                        w.a.createElement(D.a.Label, null, N.a.cface2d0({ count: i })),
                      ),
                    ),
                  ),
                )),
              actionText: n.name,
              isSelected: r === a,
              key: a,
              media: n.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: a,
                conversationControlsValue: 'community_members',
              }),
              selectable: !0,
              style: U.menuItem,
            })
          }),
        ),
        U = B.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        H = n('0zXz'),
        z = n('FS1z'),
        W = n('MWbm'),
        q = n('yw4N'),
        G = n('/yvb'),
        K = n('+Eiw'),
        X = n('Zg3A'),
        Y = n('EyD/'),
        Q = N.a.e815fc33,
        J = N.a.c63602d3,
        Z = N.a.baffe39a,
        $ = N.a.aa4209e8,
        ee = N.a.d0748dae,
        te = N.a.abd845fd,
        ne = N.a.d58baa7e,
        ae = B.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: K.a.getBackgroundImage() },
            viewport: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'auto',
              zIndex: void 0,
            },
          }
        }),
        re = function (e) {
          var t,
            n,
            a = e.audienceControlsValue,
            r = e.dismiss,
            o = e.hasMemberships,
            i = e.isC9sParticipationEnabled,
            s = e.isSuperFollowsCreator,
            l = e.onAudienceControlsValueChange,
            c = e.sliceModule,
            u = w.a.useContext(I.a),
            d = a.communityIdValue || void 0,
            m = a.exclusivityControlValue || void 0,
            p = a.trustedFriendsValue || void 0,
            h = u.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            f = w.a.useCallback(
              function (e) {
                return function () {
                  l(e), r()
                }
              },
              [l, r],
            ),
            g = function (t) {
              t.stopPropagation()
              var n = e.dismiss,
                a = e.history
              return n(), a.push('/i/twittercircle/edit')
            }
          return w.a.createElement(
            W.a,
            { style: ae.root },
            w.a.createElement(
              q.a,
              { style: ae.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(L.b, { size: 'headline1', style: ae.title, weight: 'bold' }, Q),
                w.a.createElement(
                  R.a,
                  { viewType: 'everyone' },
                  w.a.createElement(M.a, {
                    Icon: X.a,
                    actionText: Z,
                    isSelected: !m && !d && !p,
                    onClick: f({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: ae.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                s
                  ? w.a.createElement(M.a, {
                      Icon: Y.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!m,
                      onClick: f({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: ae.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                h
                  ? w.a.createElement(M.a, {
                      Icon: Y.a,
                      actionSubText:
                        ((t = 5),
                        (n = ne(t)),
                        w.a.createElement(
                          D.a.Group,
                          null,
                          w.a.createElement(
                            D.a,
                            null,
                            w.a.createElement(
                              L.b,
                              { color: 'white' },
                              w.a.createElement(
                                N.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(D.a.Value, null, N.a.a5f7b70f({ formattedCount: n })),
                                w.a.createElement(D.a.Label, null, N.a.a7daec1e({ count: t })),
                              ),
                            ),
                            w.a.createElement(G.a, { onPress: g, size: 'xSmall', type: 'primaryText' }, te),
                          ),
                        )),
                      actionText: ee,
                      iconThumbnailColor: 'success',
                      isSelected: !!p,
                      onClick: f({
                        _type: 'trusted_friends_tweet',
                        conversationControlsValue: 'trusted_friends_tweet',
                        trustedFriendsValue: {},
                      }),
                      selectable: !0,
                      style: ae.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              o && c && i
                ? w.a.createElement(
                    W.a,
                    null,
                    w.a.createElement(
                      R.a,
                      { viewType: 'community' },
                      w.a.createElement(L.b, { style: ae.title, weight: 'bold' }, J),
                      w.a.createElement(z.a, {
                        module: c,
                        noItemsRenderer: H.a,
                        renderer: function (e) {
                          return w.a.createElement(j, {
                            clickHandler: f,
                            communityId: e,
                            dismiss: r,
                            key: e,
                            selectedCommunityId: d,
                          })
                        },
                        withoutHeadroom: !0,
                      }),
                    ),
                  )
                : null,
            ),
          )
        },
        oe = n('xVN5'),
        ie = n('wa7Z'),
        se = n('hqKg'),
        le = n('li/m'),
        ce = n('RqPI'),
        ue = n('xZGM'),
        de = n('0KEI'),
        me = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? k.c.select(e, n) : void 0
        },
        pe = function (e, t) {
          return Object(ue.z)(e, ue.f)
        },
        he = Object(A.a)()
          .propsFromState(function () {
            return {
              communities: k.f,
              educationalVisibilityFlag: pe,
              hasMemberships: le.d,
              selectedCommunity: me,
              sliceModule: Object(se.createSelector)(ce.q, function (e) {
                return e ? Object(ie.a)(e) : void 0
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(ue.w)(ue.f)
              },
              updateSingleComposer: oe.x,
            }
          }),
        fe = n('FG+G'),
        ge = n('Sp5X'),
        ve = n('X00g'),
        ye = n('efqG'),
        _e = N.a.baffe39a,
        be = N.a.e815fc33,
        Ce = N.a.aa4209e8,
        we = N.a.d0748dae,
        Te = w.a.createElement(fe.a, null),
        Ee = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_renderContent', function (e) {
                var t = r.props,
                  n = t.audienceControlsValue,
                  a = t.hasMemberships,
                  o = t.isC9sParticipationEnabled,
                  i = t.isSuperFollowsCreator,
                  s = t.sliceModule
                return w.a.createElement(re, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: ge.a,
                  isC9sParticipationEnabled: o,
                  isSuperFollowsCreator: i,
                  onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                  sliceModule: s,
                })
              }),
              b()(h()(r), '_handleAudienceControlsValueChange', function (e) {
                var t = r.props.updateSingleComposer
                r._handleDismissEducationalVisibilty(),
                  r.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              b()(h()(r), '_handleOpen', function () {
                r.setState({ popoverIsOpen: !0 })
              }),
              b()(h()(r), '_handleDismiss', function () {
                r.setState({ popoverIsOpen: !1 }), r._handleDismissEducationalVisibilty()
              }),
              b()(h()(r), '_handleDismissEducationalVisibilty', function () {
                r.props.addEducationFlag()
              }),
              (r.state = { popoverIsOpen: !1 }),
              r
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    a = t.educationalVisibilityFlag,
                    o = t.hasMemberships,
                    i = t.isSuperFollowsCreator,
                    s = t.selectedCommunity,
                    l = this.state.popoverIsOpen,
                    c = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    u = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    d = n.communityIdValue || !1,
                    m = n.exclusivityControlValue || !1,
                    p = n.trustedFriendsValue || !1,
                    h = a && !s,
                    f = _e
                  if ((d && null != s && s.name ? (f = s.name) : m ? (f = Ce) : p && (f = we), m))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (d && null != s && s.theme && c) {
                    var g = ve.a.getCommunityUIColorName(s.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o || u
                    ? w.a.createElement(
                        R.a,
                        { viewType: 'communities_controls' },
                        w.a.createElement(
                          W.a,
                          { style: Se.container },
                          w.a.createElement(
                            ye.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            w.a.createElement(
                              G.a,
                              r()(
                                {
                                  accessibilityExpanded: l,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: be,
                                  accessibilityRole: 'button',
                                  icon: Te,
                                  size: 'xSmall',
                                },
                                e,
                              ),
                              f,
                            ),
                          ),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Ee, 'contextType', I.a)
      var Se = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        xe = he(Ee),
        Ie = n('ddV6'),
        Re = n.n(Ie),
        ke = n('PKbs'),
        Ae = function (e, t) {
          var n = t.selectedCommunityId
          return n ? k.c.select(e, n) : void 0
        },
        Pe = Object(A.a)()
          .propsFromState(function () {
            return { community: Ae }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: k.c.fetchOneIfNeeded,
            }
          }),
        Oe = n('YeIG'),
        De = n('21zW'),
        Le = N.a.gfca5254,
        Me = N.a.f510c8b2,
        Be = w.a.createElement(L.b, { weight: 'bold' }, Me),
        Fe = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            badgeStyle: { marginRight: e.spaces.space12 },
            container: {
              display: 'inline-flex',
              flexDirection: 'row',
              paddingBottom: e.spaces.space12,
              alignItems: 'baseline',
            },
            rulesHeader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space12 },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: 'normal' },
          }
        }),
        Ne = Pe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          w.a.useEffect(
            function () {
              o && Object(Oe.a)(t) && a(o).catch(n())
            },
            [t, o, n, a],
          )
          var s = w.a.useState(!1),
            l = Re()(s, 2),
            c = l[0],
            u = l[1],
            d = w.a.useContext(I.a).featureSwitches,
            m = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(ke.b, {
                    badgeStyle: Fe.badgeStyle,
                    headerContainerStyle: Fe.rulesHeader,
                    heading: Be,
                    ruleContainerStyle: Fe.ruleContainerStyle,
                    rules: n,
                    theme: a,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var p = t.theme,
              h = ve.a.getCommunityUIColorName(p),
              f = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              W.a,
              { style: Fe.container },
              i ? w.a.createElement(De.a, null) : null,
              w.a.createElement(
                ye.a,
                {
                  onDismiss: function () {
                    return u(!1)
                  },
                  onOpen: function () {
                    return u(!0)
                  },
                  renderContent: m,
                },
                w.a.createElement(
                  G.a,
                  r()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Fe.button,
                    },
                    f,
                  ),
                  Le,
                ),
              ),
            )
          }
          return null
        }),
        Ve = function (e, t) {
          return Object(ue.z)(e, ue.g)
        },
        je = Object(A.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Ve }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ue.w)(ue.g)
              },
            }
          }),
        Ue = n('4zmP'),
        He = N.a.g46f363d,
        ze = { viewType: 'rule_education' }
      var We = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        qe = je(function (e) {
          var t = e.addEducationFlag,
            n = e.shouldShowEducation,
            a = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return a
            }),
            n
              ? w.a.createElement(
                  W.a,
                  { style: We.container },
                  w.a.createElement(Ue.a, { behavioralEventContext: ze, onClose: a, text: He, withCloseButton: !0 }),
                )
              : null
          )
        }),
        Ge = n('H7Rt'),
        Ke = n('m3Bd'),
        Xe = n.n(Ke),
        Ye = n('yZqq'),
        Qe = function (e, t) {
          return Object(ue.z)(e, ue.q)
        },
        Je = Object(A.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Qe }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ue.w)(ue.q)
              },
            }
          }),
        Ze = N.a.aa65a449,
        $e = { viewType: 'persistent_conversation_controls_education' }
      var et = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        tt = Je(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = w.a.useContext(I.a).featureSwitches,
            o = w.a.useState(),
            i = Re()(o, 2),
            s = i[0],
            l = i[1],
            c = function () {
              t()
            }
          return (
            w.a.useEffect(function () {
              return c
            }, []),
            w.a.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    a = e.width
                  l(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.a.createElement(
                  W.a,
                  { style: et.container },
                  w.a.createElement(Ue.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: $e,
                    onClose: c,
                    text: Ze,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        nt = n('Irs7'),
        at = n('DlMI'),
        rt = n('gBde'),
        ot = n('gUPl'),
        it = n('cOhU'),
        st = ['analytics'],
        lt = w.a.createElement(at.a, null),
        ct = w.a.createElement(rt.a, null),
        ut = w.a.createElement(ot.a, null),
        dt = w.a.createElement(it.a, null),
        mt = 'conversation_control',
        pt = Object.freeze({
          all: { icon: lt, label: N.a.i8ea6d4e },
          community: { icon: ut, label: N.a.ec5a4a25 },
          by_invitation: { icon: ct, label: N.a.b4543009 },
          community_members: { icon: dt, label: N.a.i13be5a0 },
          super_followers_exclusive: { icon: lt, label: N.a.f8393bda },
          trusted_friends_tweet: { icon: lt, label: N.a.c0857ccd },
        }),
        ht =
          (Object.freeze(['community', 'by_invitation']),
          Object(nt.a)(function (e) {
            var t = e.analytics,
              n = Xe()(e, st),
              a = e.disabled,
              r = e.value,
              o = pt[r],
              i = o.icon,
              s = o.label,
              l = w.a.useState(!1),
              c = Re()(l, 2),
              u = c[0],
              d = c[1],
              m = w.a.useRef(null)
            w.a.useEffect(function () {
              r !== Ge.a.all && r !== Ge.a.community_members && d(!0)
            }, [])
            var p = w.a.useCallback(
              function (e) {
                t.scribe({ element: mt, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              R.a,
              { viewType: mt },
              u ? w.a.createElement(tt, { buttonRef: m.current }) : null,
              w.a.createElement(
                W.a,
                { style: ft.controlsContainer },
                w.a.createElement(
                  Ye.a,
                  n,
                  w.a.createElement(
                    G.a,
                    { disabled: a, icon: i, onPress: p, ref: m, size: 'xSmall', style: ft.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        ft = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        gt = n('krmn'),
        vt = n('cIoY'),
        yt = n('w3n3'),
        _t = n('MLl7'),
        bt = n('1auM'),
        Ct = n('07FG'),
        wt = n('Q8CU'),
        Tt = n('QbaN'),
        Et = n('VPdC'),
        St = n('WPfJ'),
        xt = B.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            avatarContainerExpanded: { paddingTop: e.spaces.space4 },
            avatarContainer: { justifyContent: 'center' },
            avatar: { width: '100%' },
            controlsContainer: {
              marginLeft: -e.spacesPx.space8,
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.spaces.space1,
              flexWrap: 'wrap',
              width: '100%',
            },
            mobileControlsLayout: { flexDirection: 'column' },
            controlsLayout: { flexDirection: 'row', alignItems: 'center' },
            rightColumn: {
              paddingTop: e.spaces.space4,
              justifyContent: 'center',
              position: 'static',
              transitionProperty: 'opacity, color',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
            },
            composeBoxContainer: {
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              flexShrink: 1,
              position: 'static',
              zIndex: 1,
            },
            inputArea: { zIndex: 1 },
            dragDrop: {
              borderColor: e.colors.transparent,
              borderRadius: e.borderRadii.small,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
            },
            textInputArea: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              zIndex: St.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: St.e },
            iconEmojiPicker: { zIndex: St.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: St.a,
            },
            firstToolBarButton: { marginLeft: '-'.concat(e.spaces.space8) },
            toolBarButton: { marginHorizontal: 0 },
            toolBarIconsContainer: { alignItems: 'center', flexDirection: 'row', marginTop: e.spaces.space12 },
            separator: {
              width: '1px',
              backgroundColor: e.colors.gray300,
              height: e.fontSizes.title2,
              marginRight: e.spaces.space12,
              marginLeft: 'calc('.concat(e.spaces.space12, ' - 2px)'),
            },
            conversationLine: {
              alignSelf: 'center',
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              flexShrink: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginTop: e.spaces.space4,
              marginBottom: e.spaces.space4,
            },
            conversationLineWithOverflow: { marginTop: '-'.concat(e.spaces.space4) },
            attachmentContainer: { marginTop: e.spaces.space4, marginBottom: e.spaces.space4 },
            mediaPreview: { marginTop: e.spaces.space4 },
            quoteTweet: { backgroundColor: e.colors.transparent, marginTop: e.spaces.space4, marginBottom: 0 },
            addImageTextContainer: {
              alignSelf: 'flex-start',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            },
            addImageActionIcon: { marginHorizontal: e.spaces.space4 },
            addImageTextPadding: { marginEnd: e.spaces.space48 },
            imageActions: { alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: e.spaces.space4 },
            blurStyle: { opacity: 0.5 },
            inputStyle: { width: '100%' },
            collapsedInputStyle: { flexGrow: 1, flexShrink: 1 },
            highlightedText: {
              borderRadius: e.borderRadii.large,
              paddingVertical: e.spaces.space12,
              paddingLeft: e.spaces.space12,
              marginTop: 0,
              marginBottom: 0,
            },
            highlightedTextInner: { marginHorizontal: e.spaces.space4 },
            taggedLocationButton: {
              paddingLeft: e.spacesPx.space8 + e.spacesPx.space2,
              paddingRight: e.spacesPx.space8 + e.spacesPx.space2,
              maxWidth: '100%',
            },
            taggedLocationContainer: {
              display: 'inline-flex',
              flexDirection: 'row',
              minWidth: 0,
              flexShrink: 1,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        It = N.a.bdbcdd93,
        Rt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            o = n || t.length >= 4,
            i = t.length < 3
          return w.a.createElement(Et.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? It : void 0,
            disabled: o,
            multiple: i,
            onChange: a,
            onPress: r,
            style: [xt.toolBarButton, xt.firstToolBarButton],
            type: 'brandText',
          })
        },
        kt = n('p+r5'),
        At = n('GWvE'),
        Pt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(h()(e), '_setInputRef', function (t) {
                e._inputRef = t
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.defaultValue,
                    a = e.editable,
                    r = e.label,
                    o = e.name,
                    i = e.onBlur,
                    s = e.onChange
                  return w.a.createElement(
                    W.a,
                    { style: Ot.root },
                    w.a.createElement(kt.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: r,
                      maxLength: 25,
                      name: o,
                      onBlur: i,
                      onChange: s,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Ot.formTextInput,
                    }),
                  )
                },
              },
              {
                key: 'value',
                get: function () {
                  return this._inputRef && this._inputRef.getValue()
                },
              },
              {
                key: 'isValid',
                get: function () {
                  var e = this.props.optional
                  return (
                    (!this.value && e) ||
                    (this.value && !Object(At.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Pt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Ot = B.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1 },
            action: { width: e.spaces.space40 },
            addButton: { flexGrow: 1, minHeight: '100%', padding: 0 },
            formTextInput: {
              flexGrow: 1,
              flexShrink: 1,
              marginVertical: 0,
              paddingTop: 0,
              paddingHorizontal: 0,
              paddingBottom: e.spaces.space12,
            },
          }
        }),
        Dt = Pt,
        Lt = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        Mt = n('6XNv'),
        Bt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            return u()(this, n), t.apply(this, arguments)
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.label,
                    a = e.last,
                    r = e.max,
                    o = e.min,
                    i = e.onChange,
                    s = e.testID,
                    l = !t || o === r,
                    c = e.value.toString(),
                    u = Object(Lt.a)(o, r + 1).map(function (e) {
                      return { label: ''.concat(N.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(Mt.a, {
                    disabled: l,
                    label: n,
                    onChange: i,
                    options: u,
                    style: [Ft.selector, !a && Ft.rightMargin],
                    testID: s,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(Bt, 'defaultProps', { last: !1 })
      var Ft = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Nt = Bt,
        Vt = 'addPollChoice',
        jt = 'selectPollDays',
        Ut = 'selectPollHours',
        Ht = 'selectPollMinutes',
        zt = 'removePollButton',
        Wt = N.a.caf8edc4,
        qt = N.a.g93586be,
        Gt = N.a.d073b644,
        Kt = N.a.a2f0728e,
        Xt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_handleDaysChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.hours,
                    o = a.minutes,
                    i = 0 === n && 0 === r && 0 === o ? 1 : 7 === n ? 0 : r,
                    s = { days: n, hours: i, minutes: 7 === n ? 0 : 0 === n && 0 === i && o < 5 ? 5 : o }
                  return t && t(s), { duration: s }
                })
              }),
              b()(h()(r), '_handleHoursChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.days,
                    o = a.minutes,
                    i = { days: r, hours: n, minutes: 0 === r && 0 === n && o < 5 ? 5 : o }
                  return t && t(i), { duration: i }
                })
              }),
              b()(h()(r), '_handleMinutesChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = { days: a.days, hours: a.hours, minutes: n }
                  return t && t(r), { duration: r }
                })
              }),
              (r.state = { duration: e.initialDuration }),
              r
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    n = e.style
                  return w.a.createElement(
                    W.a,
                    { style: n },
                    w.a.createElement(L.b, { color: 'normal', style: Yt.durationLabel }, t ? Wt : ''),
                    this._renderPicker(),
                  )
                },
              },
              {
                key: '_renderPicker',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.isActive,
                    a = this.state.duration,
                    r = a.days,
                    o = a.hours,
                    i = a.minutes
                  return w.a.createElement(
                    W.a,
                    { style: Yt.durationControls },
                    w.a.createElement(Nt, {
                      editable: t && n,
                      label: qt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: jt,
                      value: r,
                    }),
                    w.a.createElement(Nt, {
                      editable: t && n,
                      label: Gt,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Ut,
                      value: o,
                    }),
                    w.a.createElement(Nt, {
                      editable: t && n,
                      label: Kt,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === o ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Ht,
                      value: i,
                    }),
                  )
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this.state.duration
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Xt, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var Yt = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Qt = Xt,
        Jt = n('iY63'),
        Zt = n('jtO7'),
        $t = N.a.g589c2e1,
        en = N.a.a1e6c3a1,
        tn = N.a.a739e006,
        nn = N.a.d89a5b92,
        an = N.a.c2a8118d,
        rn = N.a.a8ede1de,
        on = N.a.af40a8ef,
        sn = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            u()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_setChoice1Ref', function (e) {
                r._choice1 = e
              }),
              b()(h()(r), '_setChoice2Ref', function (e) {
                r._choice2 = e
              }),
              b()(h()(r), '_setChoice3Ref', function (e) {
                r._choice3 = e
              }),
              b()(h()(r), '_setChoice4Ref', function (e) {
                r._choice4 = e
              }),
              b()(h()(r), '_setDurationPickerRef', function (e) {
                r._durationPicker = e
              }),
              b()(h()(r), '_handleValidation', function () {
                var e = r.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  a = e.onValid,
                  o = r.choices,
                  i = h()(r),
                  s = [i._choice1, i._choice2, i._choice3, i._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                o && o.length >= 2 && s ? a() : n(), t && t({ choices: o, duration: r.duration })
              }),
              b()(h()(r), '_handleAdd', function () {
                r.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  r.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              b()(h()(r), '_handleDurationChange', function (e) {
                var t = r.props.onChange
                t && t({ choices: r.choices, duration: e })
              }),
              b()(h()(r), '_handleBlur', function () {
                var e = r.props.onBlur
                null == e || e()
              })
            var o = e.initialChoices,
              i = void 0 === o,
              s = (o || []).length,
              l = s > 2 ? s : 2
            return (r.state = { autoFocus: i, choiceCount: l }), r
          }
          return (
            m()(n, [
              {
                key: '_renderChoices',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialChoices,
                    a = void 0 === n ? [] : n,
                    r = e.isActive,
                    o = this.state,
                    i = o.autoFocus,
                    s = o.choiceCount,
                    l = w.a.createElement(
                      W.a,
                      { style: ln.rightColumn },
                      s < 4
                        ? w.a.createElement(G.a, {
                            accessibilityLabel: rn,
                            disabled: !(t && r),
                            hoverLabel: { label: on },
                            icon: w.a.createElement(Jt.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: ln.addButton,
                            testID: Vt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    W.a,
                    { style: ln.choicesAndAddButton },
                    w.a.createElement(
                      W.a,
                      { style: ln.choices },
                      w.a.createElement(Dt, {
                        autoFocus: i,
                        defaultValue: a[0],
                        editable: t && r,
                        label: $t,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(Dt, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: en,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.a.createElement(Dt, {
                            autoFocus: i,
                            defaultValue: a[2],
                            editable: t && r,
                            label: tn,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.a.createElement(Dt, {
                            autoFocus: i,
                            defaultValue: a[3],
                            editable: t && r,
                            label: nn,
                            name: 'Choice4',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    l,
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialDuration,
                    a = e.isActive,
                    r = e.onRemove
                  return w.a.createElement(
                    W.a,
                    { style: ln.root },
                    this._renderChoices(),
                    w.a.createElement(Qt, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: ln.durationPicker,
                    }),
                    w.a.createElement(
                      W.a,
                      { style: ln.removePollButton },
                      w.a.createElement(Zt.a, { color: 'red500', label: an, onPress: r, testID: zt }),
                    ),
                  )
                },
              },
              {
                key: 'choices',
                get: function () {
                  var e = this._choice1,
                    t = this._choice2,
                    n = this._choice3,
                    a = this._choice4
                  return [e && e.value, t && t.value, n && n.value, a && a.value].filter(Boolean)
                },
              },
              {
                key: 'duration',
                get: function () {
                  return this._durationPicker ? this._durationPicker.duration : void 0
                },
              },
            ]),
            n
          )
        })(w.a.Component),
        ln = B.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.transparent,
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.xLarge,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              flexDirection: 'column',
              overflow: 'hidden',
              paddingTop: e.spaces.space12,
            },
            choicesAndAddButton: { paddingHorizontal: e.spaces.space12, flexDirection: 'row' },
            choices: { flexGrow: 1, flexShrink: 1 },
            removePollButton: {
              borderBottomLeftRadius: e.borderRadii.xLarge,
              borderBottomRightRadius: e.borderRadii.xLarge,
            },
            rightColumn: { flexDirection: 'column-reverse' },
            addButton: { marginBottom: e.spaces.space24, marginLeft: e.spaces.space4 },
            durationPicker: {
              borderTopColor: e.colors.nestedBorderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomColor: e.colors.nestedBorderColor,
              borderBottomWidth: e.borderWidths.small,
              padding: e.spaces.space12,
            },
          }
        }),
        cn = Object(nt.a)(sn),
        un = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        dn = N.a.i859676b,
        mn = w.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            L.b,
            { link: '/settings/audience_and_tagging', style: un.link, withInteractiveStyling: !0, withUnderline: !0 },
            N.a.c9a48d3f,
          ),
        )
      function pn() {
        return w.a.createElement(W.a, { style: un.container }, w.a.createElement(Ue.a, { headline: dn, text: mn }))
      }
      var hn = n('b5s6'),
        fn = n('rcen'),
        gn = n('zmS9'),
        vn = 'addButton',
        yn = 'addSubtitlesLabel',
        _n = 'altTextLabel',
        bn = 'tagPeopleLabel',
        Cn = 'attachments',
        wn = 'createPollButton',
        Tn = 'geoButton',
        En = 'gifSearchButton',
        Sn = 'scheduleOption',
        xn = 'taggedUsersLabel',
        In = 'tweetTextarea_',
        Rn = 'toolBar',
        kn = 'scheduledTweetIndicator',
        An = n('xM7j'),
        Pn = n('6OUF'),
        On = n('tZIO'),
        Dn = n('5mJL'),
        Ln = n('DNho'),
        Mn = n('jhWN'),
        Bn = n('rFBM'),
        Fn = n('zfvc'),
        Nn = n('Ujvi'),
        Vn = n('yTN1'),
        jn = n('gpVt'),
        Un = n('hOZg'),
        Hn = n('ll3R'),
        zn = n('J0mu'),
        Wn = n('EfHu'),
        qn = n('KrGU'),
        Gn = n('boUI'),
        Kn = n('6ZHn'),
        Xn = n('/WPq'),
        Yn = n('wpLu'),
        Qn = n('pHub'),
        Jn = n('8A5z'),
        Zn = n('pKoL'),
        $n = n('ZvMt'),
        ea = n('9Xij'),
        ta = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            return u()(this, n), t.apply(this, arguments)
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.media,
                    n = e.style
                  return w.a.createElement(W.a, { style: n }, this._renderImageGroup(t.length))
                },
              },
              {
                key: '_renderImageGroup',
                value: function (e) {
                  switch (e) {
                    case 1:
                      return this._renderGroupOf1()
                    case 2:
                      return this._renderGroupOf2()
                    case 3:
                      return this._renderGroupOf3()
                    case 4:
                      return this._renderGroupOf4()
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderGroupOf1',
                value: function () {
                  var e = this.props.media,
                    t = e && !!e[0].mediaFile,
                    n = (e && !t && e[0].externalMediaDetails) || {},
                    a = n.height,
                    r = n.width,
                    o = B.a.theme.aspectRatios.landscape
                  if (t) {
                    var i,
                      s,
                      l = B.a.theme.aspectRatios.minTimelineImage,
                      c = B.a.theme.aspectRatios.maxTimelineImage
                    o = $n.a.getImageAspectRatio(l, c, {
                      width: null === (i = e[0].mediaFile) || void 0 === i ? void 0 : i.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                  }
                  return w.a.createElement(
                    ea.a,
                    { ratio: t ? o : r / a },
                    w.a.createElement(W.a, { style: na.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return w.a.createElement(
                    ea.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: na.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, na.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return w.a.createElement(
                    ea.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: na.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, na.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return w.a.createElement(
                    ea.a,
                    { ratio: B.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: na.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], na.gutterRight),
                      this._renderColumnWithIndices([1, 3]),
                    ),
                  )
                },
              },
              {
                key: '_renderColumnWithIndices',
                value: function (e, t) {
                  return w.a.createElement(
                    W.a,
                    { style: [na.column, t] },
                    this._renderMediaAtIndex(e[0], na.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var n,
                    a,
                    r,
                    o,
                    i = this.props,
                    s = i.editable,
                    l = i.isActive,
                    c = i.media,
                    u = i.onClickMedia,
                    d = i.onEditMedia,
                    m = i.onEditSensitiveWarning,
                    p = i.onRemoveMedia,
                    h = i.onSetMediaPreviewRef,
                    f = c[e],
                    g = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    v = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    y = !(
                      null === (r = f.mediaMetadata) ||
                      void 0 === r ||
                      null === (o = r.sensitiveMediaWarning) ||
                      void 0 === o ||
                      !o.size
                    ),
                    _ = d && s && l,
                    b = _ && y && !!m
                  return w.a.createElement(Zn.a, {
                    accessibilityLabel: g || v,
                    accessibilityRole: 'group',
                    enableGif: l,
                    key: f.id,
                    mediaItem: f,
                    onClick: u ? u(f.id) : void 0,
                    onEdit: d ? d(f.id) : void 0,
                    onEditSensitiveWarning: m && b ? m(f.id) : void 0,
                    onRemove: p(f.id),
                    ref: h,
                    style: [na.mediaContainer, t],
                    withAltTextLabel: !!g,
                    withCloseButton: s && l,
                    withEditButton: _,
                    withEditSensitiveWarningButton: b,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(ta, 'contextType', I.a)
      var na = B.a.create(function (e) {
          return {
            column: { flexDirection: 'column', flexGrow: 1, flexBasis: 0 },
            gutterRight: { marginRight: e.spaces.space12 },
            gutterBottom: { marginBottom: e.spaces.space12 },
            mediaContainer: {
              borderRadius: e.borderRadii.xLarge,
              transitionProperty: 'width',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
              overflow: 'hidden',
              flexGrow: 1,
              flexBasis: 0,
            },
            mediaPreviewWrapper: { flexDirection: 'row', height: '100%' },
          }
        }),
        aa = n('oQhu'),
        ra = n('+d3d'),
        oa = n('S1qy'),
        ia = n.n(oa),
        sa = n('cjAp'),
        la = n.n(sa),
        ca = N.a.f0afcc0e,
        ua = N.a.ha5e2e79,
        da = N.a.a3de3b68,
        ma = N.a.cc2b28fc,
        pa = N.a.g45af04e,
        ha = N.a.ee9c4013,
        fa = N.a.af40a8ef,
        ga = N.a.e68b09b4,
        va = N.a.ec10ee02,
        ya = N.a.h735a98d,
        _a = N.a.c4ccfbe2,
        ba = N.a.j499fbcb,
        Ca = N.a.b7d8e3f0,
        wa = N.a.d1175c78,
        Ta = N.a.bf4e9d79,
        Ea = N.a.e0342f98,
        Sa = N.a.e349147b,
        xa = N.a.e3a24e4b,
        Ia = N.a.de4669e2,
        Ra = N.a.d2c7a41c,
        ka = N.a.f7364fa1,
        Aa = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Pa = N.a.ia24dc8c,
        Oa = w.a.createElement(Un.a, null),
        Da = w.a.createElement(Jt.a, null),
        La = w.a.createElement(Hn.a, null),
        Ma = w.a.createElement(zn.a, null),
        Ba = { viewType: 'schedule_tweet' },
        Fa = { viewType: 'add_poll' },
        Na = { viewType: 'add_composer' },
        Va = { viewType: 'tag_location' },
        ja = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var o
            u()(this, n),
              (o = t.call(this, e, a)),
              b()(h()(o), '_handleConversationControlsValueChange', function (e) {
                o._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              b()(h()(o), '_handleAudienceControlsValueChange', function (e) {
                o.props.updateAudienceControlsValue(e)
              }),
              b()(
                h()(o),
                '_triggerConversationControlsImpression',
                Object(aa.a)(function () {
                  return o.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              b()(h()(o), '_shouldRenderControls', function (e, t) {
                var n = o.state.isFocused,
                  a = o.props,
                  r = a.audienceControlsValue,
                  i = a.isActive,
                  s = a.isInline,
                  l = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== Ge.a.community_members &&
                      r.conversationControlsValue !== Ge.a.super_followers_exclusive &&
                      r.conversationControlsValue !== Ge.a.trusted_friends_tweet) ||
                    !l
                  ) ||
                  (i && !l && (!s || n || e))
                )
              }),
              b()(h()(o), '_renderConversationControls', function (e) {
                var t = o.state.isFocused,
                  n = o.props,
                  a = n.audienceControlsValue,
                  r = n.isInline
                if (
                  (n.isReply || (!t && r) || o._triggerConversationControlsImpression(),
                  !o._conversationControlsCreationEnabled)
                )
                  return null
                var i = a.conversationControlsValue,
                  s = o._shouldRenderControls(e, 'conversation'),
                  l =
                    i === Ge.a.community_members ||
                    i === Ge.a.super_followers_exclusive ||
                    i === Ge.a.trusted_friends_tweet ||
                    o._isScheduled()
                return s
                  ? w.a.createElement(ht, { disabled: l, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              b()(h()(o), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  W.a,
                  { style: xt.taggedLocationContainer },
                  w.a.createElement(
                    G.a,
                    {
                      icon: w.a.createElement(Wn.a, null),
                      onPress: o._handleGeoButtonClick,
                      size: 'xSmall',
                      style: xt.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              b()(h()(o), '_renderMainContent', function () {
                var e = o.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  r = e.isExpanded,
                  i = e.isInline,
                  s = e.isInlineReply,
                  l = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  u = n.cardUrl,
                  d = n.media,
                  m = n.pollActive,
                  p = n.quotedStatus,
                  h = n.text,
                  f = Object(jn.b)(h) || (u && !Object(Ct.a)(u) && [u]),
                  g = !!d.length || m || !!p,
                  v = o.props.typeaheadWrapper,
                  y = !o._isEmpty()
                return w.a.createElement(
                  W.a,
                  { style: xt.textInputArea },
                  w.a.createElement(
                    W.a,
                    { style: r ? xt.inputStyle : xt.collapsedInputStyle },
                    o._renderAudienceControls(y),
                    w.a.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: i,
                        isInlineReply: s,
                        onTextUpdated: c ? o._handleRichTextChange : o._handlePlainTextChange,
                        onTypeaheadStateChange: l,
                      },
                      o._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.a.createElement(jn.a, { index: a, isCardPreviewTombstoned: Object(Ct.a)(u), urls: f })
                      : null,
                  ),
                  r ? null : t,
                )
              }),
              b()(h()(o), '_renderFieldTextInput', function (e) {
                var t = o.props,
                  n = t.autoFocus,
                  a = t.data,
                  i = t.editable,
                  s = t.index,
                  l = t.isActive,
                  c = t.isExpanded,
                  u = t.isInline,
                  d = t.isInlineReply,
                  m = t.isLast,
                  p = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  v = o.state.isFocused,
                  y = a.text,
                  _ = 0 === s && m,
                  b = !!g,
                  C = g || {},
                  T = C.dismissComposerCommandName,
                  E = C.element,
                  S = C.sendTweetCommandName,
                  x = d && !g && !c,
                  I = g
                    ? {
                        onChange: o._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: T,
                          editorState: o.state.editorState,
                          element: E,
                          sendTweetCommandName: S,
                        },
                      }
                    : { onChange: o._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  Pn.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: da,
                      autoFocus: n || (l && !u),
                      closeButton:
                        l && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !_
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: i,
                      inputStyle: [xt.textInputStyle, x && xt.textInputMobileCollapsed],
                      keyCommandHandlers: p,
                      maxNumberOfLines: b ? 30 : 10,
                      multiline: !0,
                      numberOfLines: o._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: o._handleFilesAdded,
                      placeholder: o._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: o._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(In).concat(s),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              b()(
                h()(o),
                '_getHandleRichTextChange',
                Object(aa.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                h()(o),
                '_getHandlePlainTextChange',
                Object(aa.a)(function (e) {
                  return function (t) {
                    e(t), o._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(h()(o), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(pn, null) : null
              }),
              b()(h()(o), '_renderAudienceControls', function (e) {
                var t = o.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  i = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  l = o.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === a && (i || s || l)
                  ? w.a.createElement(xe, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: i,
                      isSuperFollowsCreator: r && s,
                      onAudienceControlsValueChange: o._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              b()(h()(o), '_renderCommunitiesRulesEducation', function () {
                return o.shouldRenderCommunitiesRules ? w.a.createElement(qe, null) : null
              }),
              b()(h()(o), '_renderCommunitiesRules', function (e) {
                var t = o.props.audienceControlsValue.communityIdValue || void 0
                return o.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(Ne, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              b()(h()(o), '_calcNumberOfLines', function () {
                var e = o.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  i = t.media,
                  s = t.pollActive,
                  l = t.quotedStatus,
                  c = !!i.length || !!s || !!l
                return (r && (a || c)) || !n ? 1 : 4
              }),
              b()(h()(o), '_renderScheduledTweetLegend', function () {
                var e = o.props.scheduledFor
                return w.a.createElement(gn.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: kn,
                })
              }),
              b()(h()(o), '_handlePressScheduledTweetLegend', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              b()(h()(o), '_renderEmojiPicker', function () {
                return w.a.createElement(gt.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              b()(
                h()(o),
                '_getEmojiPickerButtonStyles',
                Object(aa.a)(function () {
                  return [xt.iconEmojiPicker, xt.toolBarButton]
                }),
              ),
              b()(h()(o), '_isSchedulingDisabled', function () {
                var e = o.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  i = n.pollActive,
                  s = n.quotedStatus,
                  l = n.text,
                  c = e.index,
                  u = e.isLast,
                  d = 0 === c && u,
                  m = t.conversationControlsValue !== Ge.a.all
                return Boolean(i || !d || (s && '' === l && !a.length) || m || r.length > 0)
              }),
              b()(h()(o), '_renderSchedulingButton', function () {
                return w.a.createElement(G.a, {
                  accessibilityLabel: ua,
                  behavioralEventContext: Ba,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: ya },
                  icon: Ma,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: xt.toolBarButton,
                  testID: Sn,
                  type: 'brandText',
                })
              }),
              b()(h()(o), '_handleClickScheduler', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              b()(h()(o), '_renderCloseButton', function () {
                var e = o.props.onRemoveComposer
                return w.a.createElement(G.a, {
                  accessibilityLabel: ha,
                  hoverLabel: { label: ga },
                  icon: Oa,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              b()(h()(o), '_renderTweetAttachment', function () {
                var e = o.props,
                  t = e.data,
                  n = e.editable,
                  a = e.isActive,
                  r = t.media,
                  i = t.pollActive,
                  s = t.pollChoices,
                  l = t.pollDuration,
                  c = t.quotedStatus
                if (0 === r.length && !i && !c) return null
                var u = o.hasAttachedVideo && (o._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  W.a,
                  { onClick: o._handleFocus, style: [xt.attachmentContainer, xt.tweetAttachmentArea], testID: Cn },
                  r.length > 0
                    ? w.a.createElement(ta, {
                        editable: n,
                        isActive: a,
                        media: r,
                        onClickMedia: o.hasAttachedImage ? o._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: o.hasAttachedImage
                          ? o._handleClickMediaDetail('crop')
                          : u
                          ? o._handleClickMediaDetail(u)
                          : void 0,
                        onEditSensitiveWarning:
                          o.hasAttachedImage || o.hasAttachedVideo
                            ? o._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: o._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: o._handleSetMediaPreviewRef,
                        style: xt.mediaPreview,
                      })
                    : null,
                  a ? o._renderMediaActions() : null,
                  i
                    ? w.a.createElement(cn, {
                        editable: n,
                        initialChoices: s,
                        initialDuration: l,
                        isActive: a,
                        onBlur: o._handlePollChoiceBlur,
                        onChange: o._handlePollChange,
                        onInvalid: o._handlePollInvalid,
                        onRemove: o._handlePollRemove,
                        onValid: o._handlePollValid,
                        ref: o._setPollCreatorRef,
                      })
                    : null,
                  c ? o._renderQuoteTweet(c) : null,
                )
              }),
              b()(h()(o), '_renderQuoteTweet', function (e) {
                var t = o.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.a.createElement(
                      An.a,
                      null,
                      w.a.createElement(fn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement(hn.a, {
                      isCondensed: t.length > 0,
                      style: xt.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              b()(h()(o), '_renderToolbar', function (e) {
                var t = o.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  r = t.hidePoll,
                  i = t.hideScheduling,
                  s = t.isInlineReply,
                  l = t.isReply,
                  c = t.isSelfThreadReply,
                  u = t.richTextInputContext,
                  d = t.setActiveParentKey,
                  m = !!u,
                  p = !s && !r,
                  h = !s && !i
                return w.a.createElement(
                  W.a,
                  { style: xt.toolBar, testID: Rn },
                  w.a.createElement(
                    W.a,
                    { style: xt.toolBarIconsContainer },
                    w.a.createElement(Rt, {
                      media: a,
                      mediaAttachDisabled: o.mediaAttachDisabled,
                      onFilesAdded: o._handleFilesAdded,
                      setActiveParentKey: d,
                    }),
                    o._renderGifButton(),
                    p ? o._renderPollButton() : null,
                    m ? o._renderEmojiPicker() : null,
                    h ? o._renderSchedulingButton() : null,
                    o._renderGeoButton(),
                  ),
                  w.a.createElement(
                    W.a,
                    { style: xt.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (l && !c) || !e
                      ? null
                      : w.a.createElement(
                          w.a.Fragment,
                          null,
                          w.a.createElement(W.a, { style: xt.separator }),
                          o._renderAddComposerButton(),
                        ),
                    n,
                  ),
                )
              }),
              b()(h()(o), '_addOverflowStyle', function (e) {
                var t = o.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    a = n.length,
                    r = o._getParsedTweet(n).validRangeEnd,
                    i = r + 1 < a
                  if (o.state.hasOverflowStyle || i) {
                    var s = i ? r + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, s, o.state.hasOverflowStyle),
                      hasOverflowStyle: i,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: i }
                }
              }),
              b()(h()(o), '_handleRichTextChange', function (e) {
                var t = o.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  o.setState(o._addOverflowStyle(a))
                }
                o._handleTextValueChange(n)
              }),
              b()(h()(o), '_handlePlainTextChange', function (e) {
                var t = On.a.replaceCarriageReturns(e.target.value)
                o._handleTextValueChange(t)
              }),
              b()(h()(o), '_handleTextValueChange', function (e) {
                var t = o.props,
                  n = t.data,
                  a = n.key,
                  r = n.text,
                  i = t.onTextChange
                r !== e && i(e, a)
              }),
              b()(h()(o), '_handleClickAltTextShortcut', function () {
                o.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              b()(h()(o), '_handleClickSubtitlesShortcut', function () {
                o.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              b()(h()(o), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var n = o.props,
                      a = n.analytics,
                      r = n.history
                    a.scribe({ element: 'media_detail_button', action: 'click' }),
                      (o.hasAttachedImage || o.hasAttachedVideo) &&
                        r.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              b()(h()(o), '_handleFilesAdded', function (e) {
                var t = o.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  r = t.onFilesAdded
                a ? n({ text: ma }) : r(e)
              }),
              b()(h()(o), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  o.props.onRemoveMedia(o.props.index, e)
                }
              }),
              b()(h()(o), '_handleInsertEmoji', function (e) {
                var t = o.state.editorState,
                  n = o.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  o._handleRichTextChange(a)
                }
              }),
              b()(h()(o), '_validateMedia', function (e) {
                var t = o.props.data.media
                return x.c(t.concat(e))
              }),
              b()(h()(o), '_handlePollAdd', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              b()(h()(o), '_handlePollRemove', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'remove_poll', action: 'click' }), a({ pollActive: !1 }, n)
              }),
              b()(h()(o), '_handlePollInvalid', function () {
                var e = o.props,
                  t = e.data.pollValid,
                  n = e.index,
                  a = e.updateSingleComposer
                t && a({ pollValid: !1 }, n)
              }),
              b()(h()(o), '_handlePollValid', function () {
                var e = o.props,
                  t = e.data.pollValid,
                  n = e.index,
                  a = e.updateSingleComposer
                !t && a({ pollValid: !0 }, n)
              }),
              b()(h()(o), '_updatePoll', function (e) {
                var t = e.choices,
                  n = e.duration,
                  a = o.props,
                  r = a.index
                ;(0, a.updateSingleComposer)({ pollChoices: t, pollDuration: n }, r)
              }),
              b()(h()(o), '_handlePollChange', Object(ra.a)(o._updatePoll, 200, { leading: !0, trailing: !0 })),
              b()(h()(o), '_handlePollChoiceBlur', function () {
                o._handlePollChange.flush()
              }),
              b()(h()(o), '_handleGeoButtonClick', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              b()(h()(o), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  o.focus()
              }),
              b()(h()(o), '_handleFocus', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isActive,
                  a = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  n ||
                    (window.requestAnimationFrame(function () {
                      o._mediaPreviewRef && o._mediaPreviewRef.playVideo()
                    }),
                    a(t))
              }),
              b()(h()(o), '_handleEditorFocus', function () {
                return o.setState({ isFocused: !0 })
              }),
              b()(h()(o), '_formatCountdownNumber', function (e) {
                return Pa(Math.ceil(e / o._userLanguageWeight))
              }),
              b()(h()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  i = e.isReply,
                  s = e.isSelfThreadReply
                return a ? Ia : n ? ka : i && !s ? Ra : s || r > 0 ? xa : Sa
              }),
              b()(h()(o), '_getNumberOfAltTextEntries', function () {
                return o.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              b()(
                h()(o),
                '_getParsedTweet',
                Object(aa.a)(function (e) {
                  var t = la.a[o.props.twitterTextConfigurationVersion]
                  return ia()(e, t)
                }),
              ),
              b()(h()(o), '_isEmpty', function () {
                var e = o.props.data
                return Object(wt.c)(e)
              }),
              b()(h()(o), '_isScheduled', function () {
                var e = o.props.data.scheduledFor
                return Object(Tt.h)(e)
              }),
              b()(h()(o), '_autotagLocationIfNeeded', function () {
                var e = o.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  r = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && r({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              b()(h()(o), '_setPollCreatorRef', function (e) {
                o._pollCreatorRef = e
              }),
              b()(h()(o), '_handleSetMediaPreviewRef', function (e) {
                o._mediaPreviewRef = e
              }),
              b()(h()(o), '_setTextInputRef', function (e) {
                o._textInputRef = e
              })
            var i = e.data.text,
              s = e.richTextInputContext,
              l = e.userLanguage,
              c = (s || {}).initEditorState
            return (
              (o._conversationControlsCreationEnabled =
                !0 ===
                o.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (o._deleteNonemptyTweetstormComposerEnabled = o.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (o._userLanguageWeight = l && Aa.indexOf(l) > -1 ? 2 : 1),
              o._autotagLocationIfNeeded(),
              (o.state = { editorState: c ? c(i) : null, hasOverflowStyle: !1, isFocused: !1 }),
              o
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof bt.a) && e.mediaFile.isVideo
                    })) &&
                    e.isActive &&
                    !this.props.isActive &&
                    this._mediaPreviewRef &&
                    this._mediaPreviewRef.pauseVideo()
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._textInputRef && this._textInputRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.data.taggedLocation,
                    a = t.isActive,
                    r = t.isExpanded,
                    o = t.isInline,
                    i = t.isLast,
                    s = t.loggedInUser,
                    l = t.windowWidth,
                    c = t.withAvatar,
                    u = !this._isEmpty(),
                    d = this._shouldRenderControls(u),
                    m = l < B.a.theme.breakpoints.small
                  return w.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [xt.root, !a && xt.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      Dn.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(Ln.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(Mn.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: xt.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
                                  withLink: o,
                                })
                              })
                            : null,
                          i
                            ? null
                            : w.a.createElement(W.a, {
                                style: [xt.conversationLine, !c && xt.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? xt.avatarContainerExpanded : xt.avatarContainer,
                        cellStyle: xt.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: xt.inputArea },
                        w.a.createElement(
                          Bn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: xt.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(W.a, { style: xt.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        W.a,
                        { style: [(d || n) && xt.controlsContainer, m ? xt.mobileControlsLayout : xt.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(m),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(Fn.b, { show: a && r }, this._renderToolbar(u)),
                    ),
                  )
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = e.history,
                    o = e.loggedInUser,
                    i = e.setActiveParentKey,
                    s = a || n.length || !o
                  return w.a.createElement(yt.a, {
                    enabled: !s,
                    gifSearchKeySource: _t.a.Composition,
                    history: r,
                    onPress: i,
                    testID: En,
                  })
                },
              },
              {
                key: '_renderPollButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = t.quotedStatus,
                    o = e.loggedInUser,
                    i = this._isScheduled(),
                    s = !(!(a || n.length || r || i) && o)
                  return w.a.createElement(G.a, {
                    accessibilityLabel: ca,
                    behavioralEventContext: Fa,
                    disabled: s,
                    hoverLabel: { label: va },
                    icon: La,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: xt.toolBarButton,
                    testID: wn,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGeoButton',
                value: function () {
                  var e = this.props,
                    t = e.data.taggedLocation,
                    n = e.geoEnabled,
                    a = e.loggedInUser,
                    r = !(n && a),
                    o = t ? w.a.createElement(Wn.a, null) : w.a.createElement(qn.a, null)
                  return w.a.createElement(G.a, {
                    accessibilityLabel: _a,
                    behavioralEventContext: Va,
                    disabled: r,
                    hoverLabel: { label: _a },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: xt.toolBarButton,
                    testID: Tn,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderMediaActions',
                value: function () {
                  var e = this.props.data,
                    t = e.gifMetadata,
                    n = e.media,
                    a = 0 !== e.mediaTags.length,
                    r =
                      n.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || r)) return null
                  var o = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return w.a.createElement(
                    W.a,
                    { style: xt.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          W.a,
                          { style: xt.addImageTextPadding },
                          w.a.createElement(vt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          L.b,
                          {
                            accessibilityLabel: wa,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [xt.addImageTextContainer, xt.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? w.a.createElement(
                          L.b,
                          {
                            accessibilityLabel: ba({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: xt.addImageTextContainer,
                          },
                          this._renderAltTextLabel(),
                        )
                      : null,
                    this.hasAttachedVideo ? this._renderSubtitlesLabel() : null,
                  )
                },
              },
              {
                key: '_renderTagPeopleLabel',
                value: function () {
                  return w.a.createElement(
                    L.b,
                    { color: 'gray700', size: 'subtext2', testID: bn },
                    w.a.createElement(Gn.a, { style: xt.addImageActionIcon }),
                    wa,
                  )
                },
              },
              {
                key: '_renderTaggedUsers',
                value: function () {
                  var e = this.props,
                    t = e.data.mediaTags,
                    n = e.loggedInUser,
                    a = t.map(function (e) {
                      return {
                        name: e.data.name,
                        screen_name: e.data.screen_name,
                        type: e.type,
                        user_id: e.data.id_str,
                      }
                    })
                  return w.a.createElement(
                    L.b,
                    { color: 'gray700', size: 'subtext2', testID: xn },
                    w.a.createElement(Kn.a, { style: xt.addImageActionIcon }),
                    w.a.createElement(Nn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
                  )
                },
              },
              {
                key: '_renderAltTextLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = e[0].mediaMetadata
                  return this.hasAttachedAltText
                    ? e.length > 1
                      ? w.a.createElement(
                          L.b,
                          { color: 'gray700', size: 'subtext2', testID: _n },
                          w.a.createElement(Yn.a, { style: xt.addImageActionIcon }),
                          Ca({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          L.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: _n },
                          w.a.createElement(Yn.a, { style: xt.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        L.b,
                        { color: 'gray700', size: 'subtext2', testID: _n },
                        w.a.createElement(Xn.a, { style: xt.addImageActionIcon }),
                        ba({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Qn.a : Jn.a
                  return w.a.createElement(
                    L.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: xt.addImageTextContainer,
                      testID: yn,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Ea : void 0,
                      style: xt.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Ta,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = la.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(Vn.a, {
                    count: r,
                    formatNumber: this._formatCountdownNumber,
                    maxCount: a.maxWeightedTweetLength,
                    warningCount: 260,
                  })
                },
              },
              {
                key: '_renderAddComposerButton',
                value: function () {
                  var e = this.props,
                    t = e.disableAddTweet,
                    n = e.isCommunityTweetFromProtectedUser,
                    a = e.isInline,
                    r = e.loggedInUser,
                    o = e.onAddComposer,
                    i = this._isEmpty(),
                    s = this._isScheduled(),
                    l = t || i || s || !r || n
                  return w.a.createElement(G.a, {
                    accessibilityLabel: pa,
                    behavioralEventContext: Na,
                    disabled: l,
                    hoverLabel: { label: fa },
                    icon: Da,
                    link: !a || i || l ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: vn,
                    type: 'brandOutlined',
                  })
                },
              },
              {
                key: 'pollChoices',
                get: function () {
                  return this.props.data.pollActive && this._pollCreatorRef ? this._pollCreatorRef.choices : void 0
                },
              },
              {
                key: 'pollDuration',
                get: function () {
                  return this.props.data.pollActive && this._pollCreatorRef ? this._pollCreatorRef.duration : void 0
                },
              },
              {
                key: 'mediaAttachDisabled',
                get: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    a = t.pollActive,
                    r = e.loggedInUser,
                    o = n.length,
                    i = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    s = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof bt.a) && e.mediaFile.isVideo
                    })
                  return 4 === o || i || s || a || this.hasExternalMedia || !r
                },
              },
              {
                key: 'hasAttachedImage',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isImage
                  })
                },
              },
              {
                key: 'hasAttachedVideo',
                get: function () {
                  var e = this.props.data.media.some(function (e) {
                    var t
                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isVideo
                  })
                  return (
                    e &&
                      (this._videoTrimmerEnabled = this.context.featureSwitches.isTrue(
                        'responsive_web_video_trimmer_enabled',
                      )),
                    e
                  )
                },
              },
              {
                key: 'attachedSubtitles',
                get: function () {
                  var e,
                    t = this.props.data.media
                  if (this.hasAttachedVideo) {
                    var n = t.find(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof bt.a) && e.mediaFile.isVideo
                    })
                    return null == n || null === (e = n.mediaMetadata) || void 0 === e ? void 0 : e.subtitles
                  }
                },
              },
              {
                key: 'hasAttachedAltText',
                get: function () {
                  return this._getNumberOfAltTextEntries() > 0
                },
              },
              {
                key: 'hasExternalMedia',
                get: function () {
                  return this.props.data.media.some(function (e) {
                    return !!e.externalMediaDetails
                  })
                },
              },
              {
                key: 'shouldRenderCommunitiesRules',
                get: function () {
                  var e = this.props.audienceControlsValue,
                    t = this.context.featureSwitches.isTrue('c9s_enabled'),
                    n = e.communityIdValue || void 0,
                    a = t && n,
                    r = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(r && a)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(ja, 'contextType', I.a),
        b()(ja, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Ua = Object(nt.a)(ja),
        Ha = w.a.createElement(L.b, { weight: 'bold' }),
        za = w.a.createElement(L.b, { color: 'link' }),
        Wa = function (e) {
          return '@'.concat(e)
        },
        qa = n('SrIh'),
        Ga = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Ka = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(za, null, N.a.b50e199a({ userName: Wa(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(za, null, N.a.f2e4dd37({ replyUserName: Wa(t), otherUserName: Wa(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    za,
                    null,
                    N.a.eccfddc3({ userOneName: Wa(t), userTwoName: Wa(a), userThreeName: Wa(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(za, null, N.a.h758cd22({ userOneName: Wa(n), userTwoName: Wa(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(za, null, N.a.e9f8a0eb({ userName: Wa(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(za, null, N.a.df7e9fbc({ replyUserName: Wa(n), otherUserName: Wa(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    za,
                    null,
                    N.a.b45fa505({ userOneName: Wa(n), userTwoName: Wa(r), userThreeName: Wa(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(za, null, N.a.a4383815({ userOneName: Wa(a), userTwoName: Wa(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(za, null, N.a.ff792e35({ userName: Wa(t) })),
                  w.a.cloneElement(Ha, null, N.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(za, null, N.a.g7d5e985({ replyUserName: Wa(t), otherUserName: Wa(n) })),
                  w.a.cloneElement(Ha, null, N.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    za,
                    null,
                    N.a.fe5a61e9({ userOneName: Wa(t), userTwoName: Wa(a), userThreeName: Wa(n) }),
                  ),
                  w.a.cloneElement(Ha, null, N.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(za, null, N.a.bc9dd514({ userOneName: Wa(n), userTwoName: Wa(a), othersCount: t })),
                  w.a.cloneElement(Ha, null, N.a.de5071ba),
                )
              },
            },
            i = x.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            l = s.exclusivity_info,
            c = s.user,
            u = i.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            d = Re()(u, 2),
            m = d[0],
            p = d[1],
            h = [c, m, p].map(Ga),
            f = Re()(h, 3),
            g = f[0],
            v = f[1],
            y = f[2],
            _ = i.length - 2
          switch (i.length) {
            case 0:
              return Object(qa.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? o.communityReplyToOne({ communityName: t, userName: g })
                : l
                ? o.exclusiveReplyToOne({ userName: g })
                : o.replyToOne({ userName: g })
            case 2:
              return t
                ? o.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: v })
                : l
                ? o.exclusiveReplyToTwo({ userOneName: g, userTwoName: v })
                : o.replyToTwo({ userOneName: g, userTwoName: v })
            case 3:
              return t
                ? o.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: v, userThreeName: y })
                : l
                ? o.exclusiveReplyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
                : o.replyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
            default:
              return t
                ? o.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: v, othersCount: _ })
                : l
                ? o.exclusiveReplyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
                : o.replyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
          }
        },
        Xa = w.a.memo(Ka),
        Ya = n('fs1G'),
        Qa = n('BLtI'),
        Ja = n('kY28')
      function Za(e) {
        null == e || e.preventDefault()
      }
      var $a = B.a.create(function (e) {
          return {
            replyUsersContainer: {
              flexDirection: 'row',
              minHeight: e.spaces.space12,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: 0,
            },
            grid: { flexGrow: 1, flexShrink: 1 },
            repliesTextContainer: { flexGrow: 1 },
            repliesMessage: { flexGrow: 1, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space4 },
            conversationLineContainer: { alignItems: 'center' },
            conversationLine: {
              backgroundColor: e.colors.gray200,
              flexGrow: 1,
              minHeight: 0,
              width: e.componentDimensions.conversationLineWidth,
              marginBottom: e.spaces.space4,
            },
          }
        }),
        er = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = e.onPress,
            i = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            l = void 0 === s || s
          return w.a.createElement(
            W.a,
            null,
            l
              ? w.a.createElement(Qa.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: Ya.a,
                  onAvatarClick: Za,
                  onEntityClick: Za,
                  onMediaClick: Za,
                  onReplyContextClick: Za,
                  replyContext: Ja.a.ReplyContextTypes.None,
                  tweet: a,
                  withAvatarLink: !1,
                  withCardLinks: !0,
                  withInlineMedia: !1,
                  withQuotedTweetLinks: !0,
                  withSocialContext: !1,
                  withTimestampLink: !1,
                  withUserHoverCard: !1,
                })
              : null,
            w.a.createElement(
              W.a,
              { style: $a.replyUsersContainer },
              w.a.createElement(
                Dn.a,
                {
                  avatarCell: l ? w.a.createElement(W.a, { style: $a.conversationLine }) : null,
                  avatarCellStyle: $a.conversationLineContainer,
                  cellStyle: $a.repliesTextContainer,
                  style: $a.grid,
                },
                i
                  ? w.a.createElement(
                      L.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: l && $a.repliesMessage },
                      w.a.createElement(Xa, {
                        communityName: t,
                        excludedRecipients: n,
                        inReplyToStatus: a,
                        loggedInUserId: r,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        tr = n('Tb0w'),
        nr = n('1YZw'),
        ar = n('pidX'),
        rr = n('5oBF'),
        or = n('JYYi'),
        ir = n('/Rsk'),
        sr = n('qlwE'),
        lr = n('XOJV'),
        cr = n('G6rE'),
        ur = n('AspN'),
        dr = n('oEGd'),
        mr = n('P1r1'),
        pr = ['mediaIds'],
        hr = function (e) {
          return e.parentTweetId || (e.isInline ? or.a.homeTimeline : or.a.modal)
        },
        fr = function (e, t) {
          var n = hr(t)
          return oe.l(e, n)
        },
        gr = function (e, t) {
          var n = hr(t)
          return oe.m(e, n)
        },
        vr = function (e, t) {
          var n = hr(t)
          return oe.k(e, n)
        },
        yr = function (e, t) {
          var n = xr(e, t),
            a = vr(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            o = r ? k.c.select(e, r) : void 0
          return o ? o.name : void 0
        },
        _r = function (e, t) {
          var n = hr(t)
          return oe.n(e, n)
        },
        br = function (e, t) {
          var n = hr(t)
          return oe.j(e, n)
        },
        Cr = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        wr = Object(se.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          cr.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Tr = function (e, t) {
          return t.parentTweetId || Er(e, t) || Sr(e, t)
        },
        Er = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Sr = Cr(function (e) {
          return e.inReplyToStatusId
        }),
        xr = function (e, t) {
          var n = Tr(e, t)
          return n ? lr.a.selectHydrated(e, n) : void 0
        },
        Ir = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Rr = Cr(function (e) {
          return e.hasArticleNudge
        }),
        kr = Cr(function (e) {
          return e.convoCardData
        }),
        Ar = Cr(function (e) {
          return e.externalMedia
        }),
        Pr = Cr(function (e) {
          return e.externalMediaFiles
        }),
        Or = Cr(function (e) {
          return e.previewTweetId
        }),
        Dr = Cr(function (e) {
          return e.defaultText
        }),
        Lr = function (e, t) {
          var n = Dr(e, t),
            a = Object(ar.a)(t.location)
          return (Ir(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Mr = Cr(function (e) {
          return e.quotedStatusId
        }),
        Br = Cr(function (e) {
          return e.quotedStatus
        }),
        Fr = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Br(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Mr(e, t)
              return n ? lr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Nr = Cr(function (e) {
          return e.isSelfThreadReply
        }),
        Vr = Cr(function (e) {
          return e.positionCursorAtBeginning
        }),
        jr = Cr(function (e) {
          return e.promotedContent
        }),
        Ur = function () {
          return Object(se.createSelector)(fr, Lr, Fr, ur.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return l()(
                l()({}, ((o = e).mediaIds, Xe()(o, pr))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === r ? n : void 0,
                  text: 0 === r && t ? t : e.text,
                },
              )
              var o
            })
          })
        },
        Hr = {
          addComposer: oe.a,
          addToast: nr.b,
          createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: oe.b,
          deletePreviewTweet: rr.c,
          fetchAutotaggedLocationIfNeeded: ir.a,
          fetchTweetIfNeeded: lr.a.fetchOneIfNeeded,
          removeComposer: oe.f,
          resetDraft: oe.g,
          retweet: lr.a.retweet,
          schedule: oe.i,
          draftTweet: oe.e,
          send: oe.r,
          updateActiveComposerIndex: oe.t,
          updateAudienceControlsValue: oe.u,
          updateConvoCardState: tr.b,
          preUploadMedia: ur.e,
          addMedia: ur.b,
          processMultipleMedia: ur.g,
          removeMediaUpload: ur.i,
          updateSingleComposer: oe.x,
          setActiveParentKey: oe.s,
          copyDataFromInlineComposerToModalComposer: oe.c,
          copyDataFromInlineReplyComposerToModalComposer: oe.d,
        },
        zr = Object(dr.e)(function () {
          return Object(se.createStructuredSelector)({
            activeComposerIndex: br,
            activeUser: wr,
            altTextNudgeType: mr.h,
            audienceControlsValue: vr,
            composerData: Ur(),
            dataSaverMode: mr.k,
            excludedRecipients: gr,
            externalMedia: Ar,
            externalMediaFiles: Pr,
            geoEnabled: mr.p,
            hasArticleNudge: Rr,
            inReplyToStatus: xr,
            inReplyToStatusId: Tr,
            isIntentRoute: Ir,
            isSelfThreadReply: Nr,
            isSending: _r,
            isSuperFollowsCreator: ce.l,
            positionCursorAtBeginning: Vr,
            loggedInUser: cr.e.selectLoggedInUser,
            prepopulatedText: Lr,
            previewTweetId: Or,
            promotedContent: jr,
            scheduledFor: oe.o,
            selectedCommunityName: yr,
            sendingProgress: oe.p,
            convoCardData: kr,
            undoTweetSettings: sr.p,
            userLanguage: ce.o,
            quotedStatusId: Mr,
          })
        }, Hr),
        Wr = n('45mF'),
        qr = n('c0ZR'),
        Gr = n('W5XZ'),
        Kr = n('lsKC'),
        Xr = n('Drq4'),
        Yr = n('I8M8'),
        Qr = n('7myi'),
        Jr = n('7nmT'),
        Zr = n.n(Jr),
        $r = n('vbWy'),
        eo = n('Rp9C'),
        to = n('Q5Mu'),
        no = n('N5qz'),
        ao = 'tweetButton',
        ro = 'tweetButtonInline',
        oo = Object(A.a)()
          .propsFromState(function () {
            return { loggedInUser: cr.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return {
              userName: t && t.name,
              userProfileImageUrl: t && t.profile_image_url_https,
              userScreenName: t && t.screen_name,
            }
          })
          .withAnalytics(),
        io = n('cHvH'),
        so = n('sgih'),
        lo = n('xKuM'),
        co = n('5Vk4'),
        uo = B.a.create(function (e) {
          return {
            mainCard: {
              marginHorizontal: 'auto',
              paddingVertical: e.spaces.space16,
              textAlign: 'center',
              alignItems: 'center',
            },
            largeScreenCard: { width: '70%' },
            smallScreenCard: { width: '85%' },
            sheetStyle: { justifyContent: 'center' },
          }
        }),
        mo = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            o = e.sheetType,
            i = e.showActionButton
          return w.a.createElement(io.a, null, function (e) {
            var s = e.windowWidth > B.a.theme.breakpoints.small
            return w.a.createElement(
              so.a,
              { onMaskClick: r, style: uo.sheetStyle, type: o, withMask: !0 },
              i &&
                w.a.createElement(lo.a, {
                  leftControl: w.a.createElement(co.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(W.a, { style: [uo.mainCard, s ? uo.largeScreenCard : uo.smallScreenCard] }, n),
            )
          })
        },
        po = N.a.cb7c0987,
        ho = N.a.de3bcf27,
        fo = N.a.e710ce75,
        go = N.a.h11e5910,
        vo = N.a.b7ec04f3,
        yo = N.a.i62a03aa,
        _o = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        bo = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            mo,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(L.b, { size: 'title4', style: _o.itemPadding, weight: 'heavy' }, po),
            w.a.createElement(L.b, { color: 'gray700', style: _o.itemPadding }, ho),
            w.a.createElement(L.b, { color: 'gray700', style: _o.itemPadding }, fo),
            w.a.createElement(
              W.a,
              { style: _o.buttonContainer },
              w.a.createElement(L.b, { size: 'title4', style: _o.itemPadding, weight: 'heavy' }, go),
              w.a.createElement(G.a, { onPress: a, style: _o.itemPadding, type: 'brandOutlined' }, vo),
              w.a.createElement(G.a, { onPress: n, style: _o.itemPadding, type: 'brandOutlined' }, yo),
            ),
          )
        },
        Co = n('cm6r'),
        wo = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        To = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(Co.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(G.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: wo.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(L.b, { color: 'gray700' }, n),
            )
          })
        },
        Eo = n('sjK1'),
        So = n('FDY4'),
        xo = n('tevE'),
        Io = n('jV+4'),
        Ro = n('UgB4'),
        ko = n('TW8A'),
        Ao = n('hiGS'),
        Po = n('WtWS'),
        Oo = n('Lsrn'),
        Do = n('k/Ka'),
        Lo = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Do.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Oo.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
              }),
            ),
          )
        }
      Lo.metadata = { width: 24, height: 24 }
      var Mo = Lo,
        Bo = [
          { headlineText: N.a.f3a7a80c, subTextLine1: N.a.ge52d1de, subTextLine2: null },
          { headlineText: N.a.j311bf49, subTextLine1: N.a.ae42ebff, subTextLine2: N.a.aa350ab1 },
          { headlineText: N.a.j18b2956, subTextLine1: N.a.f6bee896, subTextLine2: N.a.dddd0995 },
          { headlineText: N.a.d02a94fa, subTextLine1: N.a.dddd0995, subTextLine2: null },
          { headlineText: N.a.i018b746, subTextLine1: N.a.b8d85df9, subTextLine2: N.a.d5ca11f0 },
        ],
        Fo = N.a.h11e5910,
        No = N.a.abd845fd,
        Vo = N.a.bea869b3,
        jo = N.a.d96cf7cd,
        Uo = N.a.d3145da8,
        Ho = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
            profanityIcon: {
              backgroundColor: e.colors.primary,
              color: e.colors.whiteOnColor,
              width: e.spaces.space48,
              height: e.spaces.space48,
              borderRadius: e.borderRadii.infinite,
            },
            tweetContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              width: '100%',
              textAlign: 'left',
            },
            tweetContent: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
            tweetBody: { flexDirection: 'row' },
            userName: { paddingBottom: e.spaces.space4 },
            mobileButtonContainer: {
              justifyContent: 'space-around',
              flexDirection: 'row',
              width: '100%',
              marginTop: e.spaces.space72,
            },
            thanksContainer: { flexDirection: 'row', alignItems: 'center' },
            thanksCheckMark: { color: B.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        zo = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            o = e.onEditTweet,
            i = e.onSendTweet,
            s = e.onWeGotItWrong,
            l = e.tweetText,
            c = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            m = w.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            p = Bo[(m = m >= 0 && m <= 4 ? m : 0)]
          return w.a.createElement(io.a, null, function (e) {
            var m,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              mo,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: g > B.a.theme.breakpoints.medium,
              },
              w.a.createElement(Mo, { style: [Ho.profanityIcon, Ho.itemPadding] }),
              w.a.createElement(xo.a, { size: 'title4', style: Ho.itemPadding, weight: 'heavy' }, p.headlineText),
              w.a.createElement(L.b, { color: 'gray700', style: Ho.itemPadding }, p.subTextLine1),
              w.a.createElement(L.b, { color: 'gray700', style: Ho.itemPadding }, p.subTextLine2),
              w.a.createElement(
                W.a,
                { style: [Ho.tweetContainer, Ho.itemPadding] },
                w.a.createElement(
                  W.a,
                  { style: Ho.tweetContent },
                  w.a.createElement(Io.a, { name: c, profileImageUrl: u, screenName: d, style: Ho.userName }),
                  w.a.createElement(
                    W.a,
                    { style: Ho.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Eo.c) r = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var o
                          r = null === (o = e.mediaFile) || void 0 === o ? void 0 : o.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: r,
                          width: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.width) || 100,
                          height: (null === (a = e.mediaFile) || void 0 === a ? void 0 : a.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return w.a.createElement(
                        W.a,
                        { style: Ho.photos },
                        w.a.createElement(So.a, {
                          containerAspectRatio: 1,
                          images: e,
                          previewMode: !1,
                          singleImageMaxAspectRatio: 1,
                          singleImageMinAspectRatio: 1,
                          withCenterCrop: !0,
                          withLink: !1,
                        }),
                      )
                    })(),
                    w.a.createElement(L.b, { style: Ho.textStyle }, l),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    W.a,
                    { style: Ho.thanksContainer },
                    w.a.createElement(Po.a, { style: Ho.thanksCheckMark }),
                    w.a.createElement(L.b, { align: 'center', style: Ho.itemPadding }, Uo),
                  )
                : w.a.createElement(L.b, { align: 'center', onPress: s, style: Ho.itemPadding, withUnderline: !0 }, Fo),
              g > B.a.theme.breakpoints.small
                ? w.a.createElement(
                    W.a,
                    { style: Ho.buttonContainer },
                    w.a.createElement(G.a, { onPress: o, style: Ho.itemPadding, type: 'brandFilled' }, No),
                    w.a.createElement(G.a, { onPress: i, style: Ho.itemPadding, type: 'brandOutlined' }, Vo),
                    w.a.createElement(G.a, { onPress: a, style: Ho.itemPadding, type: 'destructiveText' }, jo),
                  )
                : ((m = w.a.createElement(Ro.a, { style: { color: B.a.theme.colors.text } })),
                  (h = w.a.createElement(ko.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = w.a.createElement(Ao.a, { style: { color: B.a.theme.colors.red500 } })),
                  w.a.createElement(
                    W.a,
                    { style: Ho.mobileButtonContainer },
                    w.a.createElement(To, { icon: m, label: Vo, onPress: i }),
                    w.a.createElement(To, { icon: h, label: No, onPress: o }),
                    w.a.createElement(To, { icon: f, label: jo, onPress: a }),
                  )),
            )
          })
        },
        Wo = oo(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            o = e.onDismiss,
            i = e.onEditTweet,
            s = e.onSendTweet,
            l = e.tweetText,
            c = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            m = w.a.useState(!1),
            p = Re()(m, 2),
            h = p[0],
            f = p[1],
            g = w.a.useState(!1),
            v = Re()(g, 2),
            y = v[0],
            _ = v[1],
            b = function (e) {
              var n = e.action,
                r = e.element,
                o = e.page
              t.scribe({ action: n, data: { nudge_id: a }, element: r, page: o, section: 'dialog' })
            }
          return h
            ? w.a.createElement(bo, {
                onBack: function () {
                  b({ action: 'back', element: 'action', page: 'nudge_more_info' }), f(!1)
                },
                onNo: function () {
                  b({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
                onYes: function () {
                  b({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), _(!0), f(!1)
                },
              })
            : w.a.createElement(zo, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  b({ action: 'cancel', element: 'action', page: 'nudge' }), r()
                },
                onDismiss: function () {
                  b({ action: 'dismiss', element: 'action', page: 'nudge' }), o()
                },
                onEditTweet: function () {
                  b({ action: 'revise', element: 'action', page: 'nudge' }), i()
                },
                onSendTweet: function () {
                  b({ action: 'send', element: 'action', page: 'nudge' }), s()
                },
                onWeGotItWrong: function () {
                  b({ action: 'more_info', element: 'action', page: 'nudge' }),
                    b({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: l,
                userName: c,
                userProfileImageUrl: u,
                userScreenName: d,
              })
        }),
        qo = n('aITJ'),
        Go = n('eb3s'),
        Ko = n('JYMr'),
        Xo = n('sCk0'),
        Yo = n('3A2y'),
        Qo = n('zrOZ'),
        Jo = n('s1N3'),
        Zo = n('4FGy'),
        $o = n('mN6z'),
        ei = n('eyty'),
        ti = n('rziq'),
        ni = n('jTgF'),
        ai = N.a.d28215f0,
        ri = N.a.ec909a54,
        oi = N.a.jd53409d,
        ii = {
          singular: N.a.edae65de,
          plural: N.a.a859846a,
          oneOfMultiple: N.a.e90118f5,
          someOfMultiple: N.a.c211dcb1,
        },
        si = { singular: N.a.d7c26bfb, plural: N.a.a75e3ccc },
        li = N.a.dcb7e3a0,
        ci = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = si.singular), (t = r ? ii.singular : ii.oneOfMultiple))
              : ((n = si.plural), (t = r ? ii.plural : ii.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(li)
          )
        },
        ui = N.a.c1bf53b0,
        di = N.a.bb8170da,
        mi = N.a.dad5a4b8,
        pi = N.a.e65aed64,
        hi = N.a.bc2ceaf2,
        fi = N.a.d8222374,
        gi = N.a.j890123a,
        vi = N.a.bb01231c,
        yi = N.a.d4ab68e2,
        _i = N.a.d8af8a4c,
        bi = N.a.d09d4c05,
        Ci = N.a.i2209530,
        wi = N.a.bf9b89e4,
        Ti = N.a.f277e949,
        Ei = N.a.b551cd22,
        Si = N.a.f026a7fa,
        xi = N.a.a5d4fda0,
        Ii = N.a.ib067d6a,
        Ri = S.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        ki = { element: 'alt_text_prompt' },
        Ai = { component: 'article_nudge' },
        Pi = { viewType: 'send_tweet' },
        Oi = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Di = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r, o, s
            u()(this, n),
              (s = t.call(this, e, a)),
              b()(h()(s), '_getParentKey', function () {
                var e = s.props,
                  t = e.isInline
                return e.parentTweetId || (t ? or.a.homeTimeline : or.a.modal)
              }),
              b()(h()(s), '_updateSingleComposer', function (e, t) {
                return (0, s.props.updateSingleComposer)({ updates: e, index: t, parentKey: s._getParentKey() })
              }),
              b()(h()(s), '_resetDraft', function () {
                ;(0, s.props.resetDraft)({ parentKey: s._getParentKey(), isPreview: s.isPreview })
              }),
              b()(h()(s), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              b()(h()(s), '_syncTexts', function () {
                var e = s.props.composerData,
                  t = s.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && s._updateSingleComposer({ text: a }, n)
                })
              }),
              b()(h()(s), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              b()(h()(s), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              b()(h()(s), '_handleDeletePreviewTweet', function () {
                var e = s.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId
                n && t(n)
              }),
              b()(h()(s), '_handleAnimateComplete', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = Zr.a.findDOMNode(s._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    o = r.bottom,
                    i = r.top,
                    l = Math.max(i, window.scrollY)
                  if (l < window.pageYOffset || o > window.innerHeight) {
                    var c = n ? l - n() - 14 : l - 14,
                      u = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Ri ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
                    })
                  }
                }
              }),
              b()(h()(s), '_handleFetchTweetIfNeeded', function () {
                var e = s.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  o = e.quotedStatus,
                  i = e.quotedStatusId
                !a && r && n(r).catch(t(Gr.a)), !o && i && n(i).catch(t(Gr.a))
              }),
              b()(h()(s), '_blockHistory', function (e, t) {
                var n = s.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  o = !r && /unsent/.test(e.pathname),
                  i = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return s.shouldShowDiscardConfirmation && 'POP' === t && i
                  ? (s.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : s._canSaveDraft && o && 'PUSH' === t
                  ? s.shouldShowDiscardConfirmation
                    ? (s.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: o }), !1)
                    : (s._resetDraft(), !0)
                  : s.shouldShowBackgroundSendConfirmation && 'POP' === t && i
                  ? (s._cancelAllMediaUploads(), !1)
                  : !('POP' === t && i && s._areComposersEmptyOrUnchanged && !Object(wt.a)(a)) || (s._resetDraft(), !0)
              }),
              b()(h()(s), '_getKeyCommandHandlers', function () {
                return s.state.typeaheadActive ? s._keyCommandHandlersForActiveTypeahead : s._keyCommandHandlers
              }),
              b()(h()(s), 'handleTweetOrRetweet', function () {
                if (
                  (s._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  s._areComposersValid())
                )
                  return s.shouldShowAltTextPrompt
                    ? (s.setState({ showAltTextPrompt: !0 }), void s._scribe(l()(l()({}, ki), {}, { action: 'show' })))
                    : s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleTweetOrRetweet', function () {
                return s.isRetweet ? s._handleRetweet() : s._handleTweet()
              }),
              b()(h()(s), '_renderReplyContext', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  o = e.isSelfThreadReply,
                  i = e.selectedCommunityName
                if (a && s._shouldBeExpanded())
                  return w.a.createElement(er, {
                    communityName: i,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: s._handleViewRecipients,
                    shouldDisplayRepliesText: !o,
                    showParentTweet: !r,
                  })
              }),
              b()(h()(s), '_renderAltTextPrompt', function () {
                var e = s._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement(Go.a, {
                  Icon: Xr.a,
                  cancelButtonLabel: di,
                  confirmButtonLabel: ui({ numOfDescriptions: t }),
                  headline: oi,
                  onCancel: s._handleIgnoreAltTextPrompt,
                  onConfirm: s._handleAcceptAltTextPrompt,
                  onMaskClick: s._handleCancelAltTextPrompt,
                  text: ci({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              b()(h()(s), '_renderToxicReplyNudge', function () {
                var e = s._getSingleComposerDataWithLatestText(s.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(Wo, {
                  media: n,
                  nudgeId: s.state.nudgeId,
                  onDeleteTweet: s._handleReplyNudgeDeleteTweet,
                  onDismiss: s._handleReplyNudgeDismiss,
                  onEditTweet: s._handleReplyNudgeEditTweet,
                  onSendTweet: s._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              b()(h()(s), '_handleReplyNudgeDeleteTweet', function () {
                s._hideToxicReplyNudge(), s._handleConfirmDiscardTweet()
              }),
              b()(h()(s), '_handleReplyNudgeDismiss', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeEditTweet', function () {
                s._hideToxicReplyNudge()
              }),
              b()(h()(s), '_handleReplyNudgeSendTweet', function () {
                s._hideToxicReplyNudge(), s._handleSendTweet()
              }),
              b()(h()(s), '_setRootRef', function (e) {
                e && (s._root = e)
              }),
              b()(h()(s), '_handleTweet', function () {
                var e = s.props.composerData[0].scheduledFor
                s.setState({ errorMessage: void 0 }),
                  e ? Object(Tt.h)(e) && s._handleScheduleTweet() : s._checkToxicReplyAndSendTweet()
              }),
              b()(h()(s), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = s.props,
                    r = a.analytics,
                    o = a.createLocalApiErrorHandler
                  if (Object(ni.d)(n) && n.code === Yr.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var i = Object(ni.b)(n)
                  if (i) return s.setState({ errorMessage: i }), Promise.resolve()
                  var c = t || Object(Wr.a)(void 0, !1)
                  o(l()({}, c))(n)
                  var u = n instanceof E.a && (null == t ? void 0 : t[n.errors[0].code])
                  s.setState({ errorMessage: { text: u ? u.toast.text : xi } })
                }
              }),
              b()(h()(s), '_handleScheduleTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  o = e.schedule,
                  i = s._getSingleComposerDataWithLatestText(n[0])
                o({ excludedRecipients: a, inReplyToStatus: r, scheduleData: i })
                  .then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(Tt.c)(i.scheduledFor)
                    if (a) {
                      var r = Object(Tt.b)(a),
                        o = Object(Tt.i)(a),
                        c = Ei({ scheduleDate: r, scheduleTime: o })
                      t({ text: c, action: { label: Ti, link: '/compose/tweet/unsent/scheduled' } }),
                        s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.scheduled_id_str }), {
                          isScheduled: !0,
                        })
                    }
                    s._updateConvoCardState(), s._close()
                  })
                  .catch(s._handleTweetError('schedule_tweet_cancel'))
              }),
              b()(h()(s), '_handleDraftTweet', function () {
                var e = s.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: s._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    s.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: wi, action: { label: Ti, link: '/compose/tweet/unsent/drafts' } }),
                      s._scribeTweetSent(n[0], l()(l()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      s._updateConvoCardState(),
                      s._close()
                  })
                  .catch(s._handleTweetError('draft_tweet_cancel', to.a))
              }),
              b()(h()(s), '_checkToxicReply', function () {
                var e = s.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  o = e.parentTweetId,
                  i = t(
                    s._getSingleComposerDataWithLatestText(n[0]).text,
                    o || r,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t,
                      n,
                      a,
                      r,
                      o,
                      i,
                      l,
                      c = s.context.featureSwitches.getValueWithoutScribeImpression(
                        'responsive_web_reply_nudge_supported_languages',
                      )
                    if (
                      !c ||
                      !Array.isArray(c) ||
                      !c.includes(
                        null === (t = e.create_nudge) || void 0 === t || null === (n = t.nudge) || void 0 === n
                          ? void 0
                          : n.proposed_tweet_language,
                      )
                    )
                      return !1
                    var u =
                        null == e ||
                        null === (a = e.create_nudge) ||
                        void 0 === a ||
                        null === (r = a.nudge) ||
                        void 0 === r ||
                        null === (o = r.nudge_type) ||
                        void 0 === o
                          ? void 0
                          : o.__typename,
                      d =
                        null == e ||
                        null === (i = e.create_nudge) ||
                        void 0 === i ||
                        null === (l = i.nudge) ||
                        void 0 === l
                          ? void 0
                          : l.id
                    return d && s.setState({ nudgeId: d }), !!u
                  }),
                  l = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([i, l])
              }),
              b()(h()(s), '_showToxicReplyNudge', function () {
                s._scribe({ page: 'nudge', section: 'dialog', action: 'impression' }, { nudge_id: s.state.nudgeId }),
                  s.setState({ showToxicReplyNudge: !0 })
              }),
              b()(h()(s), '_hideToxicReplyNudge', function () {
                return s.setState({ showToxicReplyNudge: !1 })
              }),
              b()(h()(s), '_checkToxicReplyAndSendTweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = s.state.nudgeId
                if (
                  !(
                    !s._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    s.isReply &&
                    !n &&
                    s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return s._handleSendTweet()
                s._checkToxicReply().then(function (e) {
                  if (!e) return s._handleSendTweet()
                  s.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled'),
                    s.context.featureSwitches.getArrayValue('responsive_web_reply_nudge_supported_languages'),
                    s._showToxicReplyNudge()
                })
              }),
              b()(h()(s), '_handleSendTweet', function () {
                var e = s.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  r = e.audienceControlsValue,
                  o = e.composeSemanticCoreId,
                  i = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  u = e.history,
                  d = e.inReplyToStatus,
                  m = e.isSelfThreadReply,
                  p = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  g = e.send,
                  v = r.conversationControlsValue,
                  y = r.exclusivityControlValue,
                  _ = void 0 === y ? void 0 : y,
                  b = s.isPreview,
                  C = s.props.composerData.map(function (e) {
                    return s._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(Tt.c)(C[0].scheduledFor)
                if (w) {
                  var T = Object(Tt.b)(w),
                    E = Object(Tt.i)(w),
                    S = Ei({ scheduleDate: T, scheduleTime: E })
                  return n({ text: S, action: { label: Ti, link: '' } }), void s._close()
                }
                if (
                  (i.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  s._conversationControlsCreationEnabled)
                )
                  if ('community' === v) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var I = s._getSingleComposerDataWithLatestText(C[0]).text,
                      R = Object(x.d)(I)
                    a.scribe({
                      action: R ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && a.scribe({ action: 'send_my_followers_tweet' })
                var k = (null == d ? void 0 : d.community_id_str) || r.communityIdValue || void 0,
                  A = k ? '8.31.'.concat(k) : '',
                  P = o ? (k ? [o, A].join(',') : o) : A
                g({
                  sendData: C,
                  communityIdValue: k,
                  conversationControlsValue: v,
                  excludedRecipients: i,
                  exclusivityControlValue: _,
                  inReplyToStatus: d,
                  isSelfThreadReply: m,
                  promotedContent: h,
                  composeSemanticCoreId: P,
                  isPreview: b,
                })
                  .then(function (e) {
                    b || s.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return s._scribeTweetSent(C[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && s._scribeThreadSent(C, e, 'thread_send_success')
                    var a = e.length > 1 ? pi : mi
                    if (k && f) {
                      var r = f,
                        o = e.length
                      a = ri({ numOfTweets: o, communityName: r })
                    }
                    var i = b && s.isReply
                    if (i || !b) {
                      var l = i ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: i ? hi : a,
                        action: { label: Ti, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(l || '') },
                      })
                    }
                    s.isInlineReply && s.setState({ focused: !1 }), s._updateConvoCardState(), s._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      r = void 0 === n ? [] : n,
                      o = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      i = null == e ? void 0 : e.url,
                      d = null == e ? void 0 : e.status,
                      m = { message: e.type, event_info: o ? ''.concat(o) : void 0, status_code: d, url: i }
                    throw (
                      (r.map(
                        function (e, t) {
                          return s._scribeTweetSent(C[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(ni.d)(e) && e.code === Yr.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: m }),
                      C.length > 1 && s._scribeThreadSent(C, r, 'thread_send_failure'),
                      r.length &&
                        u.replace({
                          pathname: p.pathname,
                          state: l()(
                            l()({}, Object(Yo.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(s._handleTweetError('send_tweet_cancel', to.a))
              }),
              b()(h()(s), '_setActiveParentKey', function () {
                ;(0, s.props.setActiveParentKey)(s._getParentKey())
              }),
              b()(h()(s), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  o = n.isDraftTweet,
                  i = void 0 !== o && o,
                  c = n.isScheduled,
                  u = void 0 !== c && c,
                  d = s.state.nudgeId,
                  m = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = i ? p : u ? m : 'send_',
                  f = { items: [eo.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  _ = Object(Qo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  b = s.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (s._scribe({ action: ''.concat(h, 'tweet') }, f),
                  i || !e.draftTweetId || e.scheduledTweetId || s._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  s.isQuoteTweet &&
                    (s._scribe({ action: 'retweet_with_comment' }, f),
                    r && s._scribe(l()(l()({}, Ai), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  s.isReply && s._scribe({ component: b, action: ''.concat(h, 'reply') }, f),
                  g && s._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  s._hasPhoto(e) &&
                    (s._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    v && s._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && s._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  s._hasVideo(e) &&
                    (s._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && s._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  _.size)
                ) {
                  var C = s._hasPhoto(e) ? 'photo' : 'video'
                  _.forEach(function (e) {
                    s._scribe({ action: ''.concat(h).concat(C, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (d &&
                    s.isReply &&
                    !u &&
                    (i
                      ? s._scribe(l()(l()({}, w), {}, { action: 'save' }), { nudge_id: d })
                      : s._scribe(l()(l()({}, w), {}, { action: 'sent' }), { nudge_id: d })),
                  d || i || !s.isReply || u || s._scribe(l()(l()({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var T = t.id_str && eo.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  s._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: T ? [T] : [] })
                  var E = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || E) &&
                    s._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: T ? [T] : [] },
                    ),
                    y && s._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else s._hasGif(e) && (s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && s._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              b()(h()(s), '_scribeThreadSent', function (e, t, n) {
                var a = s.props.inReplyToStatus,
                  r = { items: [eo.a.getSendThreadItem(e, t.length, !!a)] }
                s._scribe({ action: n }, r)
              }),
              b()(h()(s), '_scribeRetweet', function (e) {
                var t = s.props.hasArticleNudge,
                  n = { items: [eo.a.getTweetItem(e)] }
                s._scribe({ action: 'retweet' }, n),
                  t && s._scribe(l()(l()({}, Ai), {}, { element: 'result', action: 'retweet' }), n)
              }),
              b()(h()(s), '_handleRetweet', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (s._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    s.setState({ tweetsSentOrScheduled: !0 }), s._close()
                  }, n($r.a)))
              }),
              b()(h()(s), 'handleDismissComposer', function () {
                s.shouldShowDiscardConfirmation
                  ? s.setState({ showDiscardTweetConfirmation: !0 })
                  : s.shouldShowBackgroundSendConfirmation
                  ? s._cancelAllMediaUploads()
                  : s._close()
              }),
              b()(h()(s), '_cancelAllMediaUploads', function () {
                s.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              b()(h()(s), '_handleConfirmDiscardTweet', function () {
                var e = s.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = s._canSaveDraft ? 'draft' : 'send'
                s.setState({ showDiscardTweetConfirmation: !1 }),
                  s._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && s._scribe(l()(l()({}, Ai), {}, { element: 'result', action: 'cancel' })),
                  s.state.nudgeId &&
                    s._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { nudge_id: s.state.nudgeId },
                    )
              }),
              b()(h()(s), '_handleCancelDiscardTweet', function () {
                s.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  s._restoreFocusToActiveComposer()
                })
              }),
              b()(h()(s), '_handleAcceptAltTextPrompt', function () {
                s.setState({ showAltTextPrompt: !1 })
                var e = s.props.history,
                  t = s._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (s._scribe(l()(l()({}, ki), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              b()(h()(s), '_handleIgnoreAltTextPrompt', function () {
                s._scribe(l()(l()({}, ki), {}, { action: 'declined' })),
                  s.setState({ showAltTextPrompt: !1 }),
                  s._handleTweetOrRetweet()
              }),
              b()(h()(s), '_handleCancelAltTextPrompt', function () {
                s._scribe(l()(l()({}, ki), {}, { action: 'cancel' })),
                  s.setState({ showAltTextPrompt: !1 }, function () {
                    s._restoreFocusToActiveComposer()
                  })
              }),
              b()(h()(s), '_restoreFocusToActiveComposer', function () {
                var e = s.props.activeComposerIndex
                void 0 !== e && s._composerRefs[e] && s._composerRefs[e].focus()
              }),
              b()(h()(s), '_close', function () {
                var e = s.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || s._resetDraft(),
                  s.state.navigatingToOutbox
                    ? s._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              b()(h()(s), '_handleComposerFocus', function (e) {
                s._composerRefs[e]
                  ? s.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      s._restoreFocusToActiveComposer()
                    }, 0)
              }),
              b()(h()(s), '_handleFocus', function () {
                s.state.focused ||
                  (s.isInlineReply && s._scribe({ element: 'inline_reply', action: 'reply' }),
                  s.setState({ focused: !0 }))
              }),
              b()(h()(s), '_handleTypeaheadStateChange', function (e) {
                s.setState({ typeaheadActive: e })
              }),
              b()(h()(s), '_handleRemoveComposer', function () {
                var e = s.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  o = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(Yo.a)(r.state || {}, 'quotedStatus') }),
                  o(),
                  setTimeout(s._restoreFocusToActiveComposer)
              }),
              b()(h()(s), '_handleViewRecipients', function () {
                var e = s.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                s._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              b()(h()(s), '_handleTextChange', function (e, t) {
                var n = s.state.textMap,
                  a = s.props,
                  r = a.activeComposerIndex,
                  o = a.isInline,
                  i = a.setValidity
                if (
                  (s.setState({ textMap: l()(l()({}, n), {}, b()({}, t, e)) }, function () {
                    i && i(s._areComposersValid())
                  }),
                  s.setState({ errorMessage: void 0 }),
                  qo.b.isIOS())
                ) {
                  var c = o ? 0 : r
                  s._updateSingleComposer({ text: e }, c)
                }
              }),
              b()(
                h()(s),
                '_handleTextOnBlur',
                Object(aa.a)(function (e, t) {
                  return function () {
                    var n = s.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      o = s.props.composerData,
                      i = a[e],
                      l = o.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof i && !r && l && s._updateSingleComposer({ text: i }, t)
                  }
                }),
              ),
              b()(h()(s), '_updateAudienceControlsValue', function (e) {
                var t = s.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = s.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!s._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!s._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (s._updateSingleComposer({ pollActive: !1 }, 0), s.setState({ errorMessage: { text: ai } })),
                      (null == r ? void 0 : r.text) === ai && s.setState({ errorMessage: void 0 })
                }
                a(e, s._getParentKey())
              }),
              b()(h()(s), '_renderProgressBar', function () {
                var e = s.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement(Ko.a, { progress: t ? Math.max(n, 0.02) : 0, style: Li.progressBar })
              }),
              b()(h()(s), '_updateConvoCardState', function () {
                var e = s.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              b()(h()(s), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(qr.a)(e)
                    }),
                  ).then(s._handleAddMediaFiles(e))
                }
              }),
              b()(h()(s), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    o = s.props,
                    i = o.addMedia,
                    l = o.addToast,
                    c = o.composerData,
                    u = o.dataSaverMode,
                    d = o.preUploadMedia,
                    m = o.processMultipleMedia,
                    p = o.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    v = Object(ei.e)(
                      null === (a = h()(s)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  g ||
                    i(t, { location: ei.d.Tweet, canUploadLongVideo: v }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        s._updateSingleComposer({ mediaIds: Object(Jo.a)(r.concat(a)) }, e),
                          m(t, { onFailure: s._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else l({ text: Ii }), p(a)
                    })
                }
              }),
              b()(h()(s), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return s._handleMediaRemove(e, t)
                }
              }),
              b()(h()(s), '_handleMediaRemove', function (e, t) {
                var n = s.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  o = a[e],
                  i = o.media,
                  l = o.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(Zo.a)(e, n)
                  })(
                    i.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  u = c.length > 0 ? l : []
                s._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: u }, e),
                  r(t),
                  s.setState({ errorMessage: void 0 })
              }),
              b()(h()(s), '_setComposerRef', function (e) {
                return function (t) {
                  s._composerRefs[e] = t
                }
              }),
              b()(h()(s), '_shouldBeExpanded', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (s.state.focused) return !0
                var a = !Object(wt.c)(s._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              b()(h()(s), '_areComposersValid', function () {
                var e = s.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  o = 'community_members' === t
                return (
                  (s.isRetweet && !r && !o) ||
                  n.every(function (e) {
                    return Object(wt.e)(s._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              b()(h()(s), '_areComposersEmptyOrUnchanged', function () {
                var e = s.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(wt.d)(s._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              b()(h()(s), '_getAltTextMetadata', function () {
                var e = s.props.composerData,
                  t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] }
                return (
                  e.forEach(function (e) {
                    var n,
                      a = (e.media || []).filter(function (e) {
                        var t = e.mediaFile
                        return (null == t ? void 0 : t.isImage) || (null == t ? void 0 : t.isGif)
                      }),
                      r = a
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += a.length), (n = t.noDescriptionImageIDs).push.apply(n, i()(r))
                  }),
                  (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                  t
                )
              }),
              b()(h()(s), '_getSingleComposerDataWithLatestText', function (e) {
                var t = s.state.textMap
                return 'string' == typeof t[e.key] ? l()(l()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
            return (
              (s.state = {
                focused: c,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (s._composerRefs = {}),
              (s._conversationControlsCreationEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (s._throttledSyncTexts = Object(ra.a)(s._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (s._keyCommandHandlers =
                ((o = {}), b()(o, ti.b, s.handleTweetOrRetweet), b()(o, ti.a, s.handleDismissComposer), o)),
              (s._keyCommandHandlersForActiveTypeahead = b()({}, ti.b, s.handleTweetOrRetweet)),
              (s._isAltTextNudgeEnabled =
                !0 ===
                s.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (s._isCommunitiesEnabled = s.context.featureSwitches.isTrue('c9s_enabled')),
              s
            )
          }
          return (
            m()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props.onRef
                  e && e(this)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.convoCardData,
                    n = e.externalMedia,
                    a = e.externalMediaFiles,
                    r = e.history,
                    o = e.isInline,
                    i = e.isIntentRoute,
                    s = e.location,
                    c = e.prepopulatedText,
                    u = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    c || (t && t.cardUrl))
                  ) {
                    var d = l()({}, null)
                    c && (d.text = c), t && t.cardUrl && (d.cardUrl = t.cardUrl), this._updateSingleComposer(d)
                  }
                  ;(c || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !i &&
                    r.replace({
                      query: Object(ar.b)(s.query),
                      search: '',
                      pathname: s.pathname,
                      state: Object(Yo.a)(Object(ar.b)(s.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    u && u(this._areComposersValid()),
                    o || this._setActiveParentKey(),
                    this.isInlineReply && this._root && (this._height = this._root.getBoundingClientRect().height)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.addToast,
                    r = n.composerData,
                    o = n.copyDataFromInlineReplyComposerToModalComposer,
                    i = n.externalMedia,
                    s = n.externalMediaFiles,
                    l = n.onRef,
                    c = n.parentTweetId,
                    u = n.replyPressToggle,
                    d = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== l && e.onRef(void 0),
                    l && l !== e.onRef && l(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: Si }),
                    i.length > 0 && i !== e.externalMedia
                      ? this._attachExternalMedia(0)(i)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    d && !Object($o.a)(r, e.composerData) && d && d(this._areComposersValid()),
                    u !== e.replyPressToggle && o(c)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props.onRef
                  this._unblockHistory && this._unblockHistory(), e && e(void 0), this._syncTexts()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this,
                    a = this.props,
                    o = a.activeUser,
                    i = a.addComposer,
                    s = a.addToast,
                    l = a.audienceControlsValue,
                    c = a.composeHeader,
                    u = a.composerData,
                    d = a.copyDataFromInlineComposerToModalComposer,
                    m = a.customizePropsForSingleComposerItem,
                    p = a.geoEnabled,
                    h = a.history,
                    f = a.inReplyToStatus,
                    g = a.isInline,
                    v = a.isModal,
                    y = a.isSelfThreadReply,
                    _ = a.isSending,
                    b = a.isSuperFollowsCreator,
                    C = a.parentTweetId,
                    T = a.positionCursorAtBeginning,
                    E = a.richTextInputContext,
                    S = a.scheduledFor,
                    x = a.typeaheadWrapper,
                    I = a.userLanguage,
                    R = a.windowWidth,
                    k = this.state,
                    A = k.errorMessage,
                    P = k.focused,
                    O = k.shouldDisableButton,
                    D = k.showAltTextPrompt,
                    L = k.showDiscardTweetConfirmation,
                    M = k.showToxicReplyNudge,
                    B = k.typeaheadActive,
                    F = !v && B,
                    N = g ? 0 : this.props.activeComposerIndex,
                    V = F || g ? [u[N]] : u,
                    j = this._areComposersValid(),
                    U = this.hasNonCompliantQuote && this.isRetweet,
                    H = g ? W.a : Xo.a,
                    z = g ? {} : { onAnimateComplete: v ? void 0 : this._handleAnimateComplete },
                    q = O || !j || U || this.isCommunityTweetFromProtectedUser,
                    K = (g && no.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    X = (g && no.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !C && Li.root },
                    g ? this._renderProgressBar() : null,
                    A &&
                      w.a.createElement(
                        W.a,
                        { style: Li.inlineCallout },
                        w.a.createElement(Ue.a, {
                          action:
                            null !== (e = A.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = A.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: A.action.label, link: A.action.link }
                              : void 0,
                          text: A.text,
                          type: 'danger',
                        }),
                      ),
                    w.a.createElement(
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Li.content, C && Li.contentInlineReply, v && Li.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      c,
                      w.a.createElement(
                        H,
                        z,
                        V.map(function (e, t) {
                          var a = Object(Tt.h)(e.scheduledFor),
                            c = u.indexOf(e),
                            C = m(e, t, V),
                            k =
                              v || g
                                ? w.a.createElement(
                                    G.a,
                                    {
                                      behavioralEventContext: Pi,
                                      disabled: q,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Li.inlineSendButton,
                                      testID: v ? ao : ro,
                                      type: 'brandFilled',
                                    },
                                    Object(Kr.a)({
                                      inReplyToStatus: !!f,
                                      isSelfThreadReply: !!y,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            A = n._getSingleComposerDataWithLatestText(e)
                          return w.a.createElement(
                            W.a,
                            { key: e.key },
                            w.a.createElement(
                              Ua,
                              r()(
                                {
                                  addToast: s,
                                  additionalToolbarContent: k,
                                  audienceControlsValue: l,
                                  autoFocus: n.isInlineReply && P,
                                  data: A,
                                  disableAddTweet: u.length >= 25,
                                  editable: !_ && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: p,
                                  hidePoll: K,
                                  hideScheduling: X,
                                  history: h,
                                  index: c,
                                  isActive: c === N && !_,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: g,
                                  isInlineReply: n.isInlineReply,
                                  isLast: g || c === u.length - 1,
                                  isReply: !!f || n.isInlineReply,
                                  isSelfThreadReply: !!y,
                                  isSuperFollowsCreator: b,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: o,
                                  onAddComposer: g ? d : i,
                                  onFilesAdded: n._handleAddMediaFiles(c),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(A.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!T,
                                  ref: n._setComposerRef(c),
                                  richTextInputContext: E,
                                  scheduledFor: S,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: B,
                                  typeaheadWrapper: x,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: I,
                                  windowWidth: R,
                                },
                                C,
                              ),
                            ),
                          )
                        }),
                      ),
                      L
                        ? this._canSaveDraft
                          ? w.a.createElement(Go.a, {
                              cancelButtonLabel: yi,
                              confirmButtonLabel: Ci,
                              headline: _i,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: bi,
                            })
                          : w.a.createElement(Go.a, {
                              confirmButtonLabel: yi,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? gi : fi,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: vi,
                            })
                        : null,
                      D ? this._renderAltTextPrompt() : null,
                      M ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(W.a, { style: _ && Li.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(l()(l()({}, e), {}, { data: t }))
                },
              },
              {
                key: 'isInlineReply',
                get: function () {
                  return !!this.props.parentTweetId
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length,
                    n = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && '' === n && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData,
                    t = this._getSingleComposerDataWithLatestText(e[0]).text
                  return !this.isThread && e[0].quotedStatus && t.length > 0
                },
              },
              {
                key: 'hasNonCompliantQuote',
                get: function () {
                  var e
                  return (
                    'non_compliant' ===
                    (null === (e = this.props.composerData[0].quotedStatus) || void 0 === e
                      ? void 0
                      : e.limited_actions)
                  )
                },
              },
              {
                key: 'shouldShowDiscardConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t[0].scheduledTweetId,
                    r = this.state.showDiscardTweetConfirmation,
                    o = this._areComposersEmptyOrUnchanged()
                  return !(n || o || r || a)
                },
              },
              {
                key: 'shouldShowBackgroundSendConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    a = t.some(function (e) {
                      return e.media.some(function (e) {
                        return e.uploading
                      })
                    })
                  return n && a
                },
              },
              {
                key: 'shouldShowAltTextPrompt',
                get: function () {
                  var e = this.props.altTextNudgeType
                  return (
                    !(
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== T.a.prompt
                    ) && this._getAltTextMetadata().numberOfDescriptionsMissing > 0
                  )
                },
              },
              {
                key: '_canSaveDraft',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isInline
                  return !(
                    this.isCommunityTweet ||
                    this.isExclusiveTweet ||
                    this.isThread ||
                    t[0].pollActive ||
                    0 !== t[0].mediaTags.length ||
                    n
                  )
                },
              },
              {
                key: 'isCommunityTweet',
                get: function () {
                  var e = this.props,
                    t = e.audienceControlsValue,
                    n = e.inReplyToStatus
                  return !!((null != n && n.community_id_str) || 'community_members' === t._type)
                },
              },
              {
                key: 'isCommunityTweetFromProtectedUser',
                get: function () {
                  var e
                  return !(
                    !this.isCommunityTweet ||
                    null === (e = this.props.activeUser) ||
                    void 0 === e ||
                    !e.protected
                  )
                },
              },
              {
                key: 'isReply',
                get: function () {
                  return !(!this.props.inReplyToStatus && !this.props.inReplyToStatusId)
                },
              },
              {
                key: 'isExclusiveTweet',
                get: function () {
                  return !!this.props.audienceControlsValue.exclusivityControlValue
                },
              },
              {
                key: 'tweetType',
                get: function () {
                  return this.isQuoteTweet
                    ? Oi.Quote
                    : this.isThread
                    ? Oi.Thread
                    : this.isReply
                    ? Oi.Reply
                    : Oi.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    n,
                    a,
                    r = this.props.undoTweetSettings,
                    o =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    i =
                      null == this ||
                      null === (n = this.context) ||
                      void 0 === n ||
                      null === (a = n.featureSwitches) ||
                      void 0 === a
                        ? void 0
                        : a.isTrue('subscriptions_undo_quote_tweets_enabled')
                  return (
                    o &&
                    ('original' === this.tweetType ||
                      'reply' === this.tweetType ||
                      ('quote' === this.tweetType && i)) &&
                    (!r || void 0 === r[this.tweetType] || r[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Di, 'defaultProps', {
        customizePropsForSingleComposerItem: function (e, t, n) {
          return {}
        },
        externalMedia: [],
        externalMediaFiles: [],
        isSelfThreadReply: !1,
        isModal: !1,
        positionCursorAtBeginning: !1,
        prepopulatedText: '',
        setValidity: function () {},
        typeaheadWrapper: Qr.a,
      }),
        b()(Di, 'contextType', I.a),
        b()(Di, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(x.c)(n.concat(t))
        })
      var Li = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: l()({}, B.a.absoluteFillObject),
          inlineSendButton: { marginLeft: e.spaces.space12 },
          progressBar: {
            position: 'absolute',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
          },
          inlineCallout: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          hidden: { position: 'absolute', visibility: 'hidden', width: '100%' },
        }
      })
      t.a = Object(nt.a)(zr(Di))
    },
    hqDb: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        _ = (n('2G9S'), n('ERkP')),
        b = n.n(_),
        C = n('k49u'),
        w = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        T = n('kGix'),
        E = n('G6rE'),
        S = n('rxPX'),
        x = n('0KEI'),
        I = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!E.e.select(e, t)
          })
        },
        k = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = E.e.selectFetchStatus(e, n)
            return (t[n] = a === T.a.NONE ? T.a.LOADING : a), t
          }, {})
        },
        A = Object(S.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(w.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(w.a)(R, k, I, function (e, t, n) {
                for (var a = T.a.LOADED, r = 0; r < n.length; r++) {
                  var o = n[r]
                  if (-1 === e.indexOf(o)) {
                    var i = t[o] || T.a.LOADING
                    a = a === T.a.LOADED ? i : a
                  }
                  if (a === T.a.LOADED) break
                }
                return a
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: E.e.fetchManyIfNeeded,
            }
          }),
        P = n('v//M'),
        O = n('3XMw'),
        D = n.n(O),
        L = n('pQ3Z'),
        M = n.n(L),
        B = (n('z84I'), n('cFuS')),
        F = n('Re5t'),
        N = n('MWbm'),
        V = n('88ay'),
        j = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return b.a.createElement(
            N.a,
            null,
            a.map(function (e, a) {
              return n
                ? n(e)
                : b.a.createElement(V.b, {
                    decoration: V.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: B.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      j.defaultProps = { displayMode: F.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var U = j,
        H = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        z = D.a.f5b426c2,
        W = { viewType: 'user_list' },
        q = A(
          (function (e) {
            h()(n, e)
            var t = g()(n)
            function n() {
              var e
              l()(this, n)
              for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                y()(m()(e), 'state', { allUsersUnavailable: !1 }),
                y()(m()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    a = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, i()(t, H))
                  return b.a.createElement(U, r()({}, a, { userIds: n }))
                }),
                y()(m()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    M()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return b.a.createElement(P.a, {
                      accessibilityLabel: z,
                      behavioralEventContext: W,
                      fetchStatus: this.state.allUsersUnavailable ? T.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      n = this.props,
                      a = n.availableUserIds,
                      r = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      r(
                        ((e = {}),
                        y()(e, C.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        y()(e, C.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(b.a.Component),
        )
      t.a = q
    },
    hxu0: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        s = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(s.a.Consumer, null, function (n) {
            return i.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n('3XMw'),
        r = n.n(a),
        o = r.a.g34f2c63,
        i = r.a.f70a36d0,
        s = r.a.d17df547,
        l = r.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? l : t ? s : e.isThread ? i : o({ verb: '' })
        }
    },
    o52z: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('VPAj'),
        r = Object(a.a)([])
      Object(a.a)({})
    },
    pcjM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Compose', function () {
          return We
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('2VqO'),
        h = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        y = n.n(v),
        _ = n('HPNB'),
        b = n('h5NW'),
        C = n('m3Bd'),
        w = n.n(C),
        T = (n('vrRf'), n('z84I'), n('LW0h'), n('7x/C'), n('5BYb'), n('xVN5')),
        E = n('pidX'),
        S = n('AspN'),
        x = n('XOJV'),
        I = n('G6rE'),
        R = n('xZGM'),
        k = n('0KEI'),
        A = n('hqKg'),
        P = n('oEGd'),
        O = n('rU/Q'),
        D = n('XpKj'),
        L = ['cardUrl', 'mediaIds'],
        M = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        B = Object(A.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          I.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        F = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        N = M(function (e) {
          return e.inReplyToStatusId
        }),
        V = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        j = M(function (e) {
          return e.defaultText
        }),
        U = M(function (e) {
          return e.quotedStatus
        }),
        H = M(function (e) {
          return e.isSelfThreadReply
        }),
        z = M(function (e) {
          return e.hideUnsentTweetsButton
        }),
        W = M(function (e) {
          return e.headingSubtitle
        }),
        q = M(function (e) {
          return e.headingTitle
        }),
        G = M(function (e) {
          return e.selectedCommunityId
        }),
        K = Object(A.createSelector)(
          function (e) {
            return T.l(e, '')
          },
          function (e, t) {
            var n = j(e, t)
            return Object(E.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : U(e, t)
          },
          S.j,
          V,
          function (e, t, n, a, o) {
            return e.map(function (e, i) {
              return r()(
                r()({}, ((s = e).cardUrl, s.mediaIds, w()(s, L))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === i ? n : void 0,
                  text: 0 === i && t && !o ? t : e.text,
                },
              )
              var s
            })
          },
        ),
        X = Object(A.createStructuredSelector)({
          activeUser: B,
          composerData: K,
          draftTweets: O.e,
          inReplyToStatus: function (e, t) {
            var n = F(0, t) || N(e, t)
            return n ? x.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: F,
          isIntentRoute: V,
          isSelfThreadReply: H,
          isSending: function (e) {
            return T.n(e, '')
          },
          scheduledTweets: D.f,
          sendingProgress: T.p,
          composeSemanticCoreId: M(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: z,
          subtitle: W,
          title: q,
          selectedCommunityIdFromLocationState: G,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(R.z)(e, R.e)
          },
        }),
        Y = {
          createDraftTweetApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(O.d),
          createScheduledTweetApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(D.d),
          fetchScheduledTweets: D.c,
          fetchDraftTweets: O.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(R.w)(R.e)
          },
          updateAudienceControlsValue: T.u,
        },
        Q = Object(P.g)(X, Y),
        J = n('RgK2'),
        Z = n.n(J),
        $ = n('jHSc'),
        ee = n('lsKC'),
        te = n('3XMw'),
        ne = n.n(te),
        ae = n('iFPY'),
        re = n('QbaN'),
        oe = n('v6aA'),
        ie = n('rxPX'),
        se = function (e) {
          return Object(R.z)(e, R.p)
        },
        le = Object(ie.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: se }
          })
          .propsFromActions(function () {
            return { addFlag: R.w }
          }),
        ce = n('Lsrn'),
        ue = n('k/Ka'),
        de = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ue.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ce.a.root, e.style],
                viewBox: '0 0 32 32',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M18.672 15.25H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-5.297H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4.304 10.594h-6.29c-.414 0-.75.336-.75.75s.336.75.75.75h6.29c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              y.a.createElement('path', {
                d: 'M29.284 15.25h-4.548V5.736C24.736 4.228 23.51 3 22 3H4.75C3.24 3 2.014 4.228 2.014 5.736v20.527C2.014 27.773 3.24 29 4.75 29h21.885c1.874 0 3.4-1.524 3.4-3.398V16c0-.414-.337-.75-.75-.75zM3.514 26.264V5.736c0-.68.554-1.236 1.236-1.236H22c.682 0 1.236.555 1.236 1.236V25.6c0 .704.214 1.357.58 1.9H4.75c-.682 0-1.236-.555-1.236-1.236zm23.12 1.236c-1.046 0-1.897-.852-1.897-1.898V16.75h3.798v8.852c0 1.046-.853 1.898-1.9 1.898z',
              }),
            ),
          )
        }
      de.metadata = { width: 32, height: 32 }
      var me = de,
        pe = n('MWbm'),
        he = n('4zmP'),
        fe = n('rHpw'),
        ge = ne.a.ed33a3b6,
        ve = ne.a.d5bda8b3,
        ye = ne.a.i859a9d3,
        _e = fe.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        be = le(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = y.a.useContext(oe.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? y.a.createElement(
                pe.a,
                { style: _e.revueCallout },
                y.a.createElement(he.a, {
                  Icon: me,
                  action: {
                    label: ye,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: ge,
                  onClose: function () {
                    t(R.p)
                  },
                  text: ve,
                  withCloseButton: !0,
                }),
              )
            : null
        }),
        Ce = n('7nmT'),
        we = n.n(Ce),
        Te = n('Dtul'),
        Ee = n('zh9S'),
        Se = n('7JQg'),
        xe = 'tweetButton',
        Ie = n('/yvb'),
        Re = n('JYMr'),
        ke = n('cHvH'),
        Ae = n('feu+'),
        Pe = n('7N4s'),
        Oe = n('oQhu'),
        De = n('3A2y'),
        Le = ne.a.b8f0483e,
        Me = ne.a.a133d13e,
        Be = ne.a.a1183237,
        Fe = ne.a.da2663f5,
        Ne = ne.a.j24c37b2,
        Ve = 'compose',
        je = { page: Ve },
        Ue = { page: Ve, section: 'reply' },
        He = { context: 'compose_intent_logged_in' },
        ze = { viewType: 'send_tweet' },
        We = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(u()(e), 'state', { isValid: !1 }),
              g()(u()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              g()(
                u()(e),
                '_handleAppBarHeight',
                Object(Oe.a)(function () {
                  var t = we.a.findDOMNode(e._appBarRef)
                  return (t && t instanceof window.Element && t.getBoundingClientRect().height) || 50
                }),
              ),
              g()(u()(e), '_handleBackClick', function () {
                e._composeContainerRef && e._composeContainerRef.handleDismissComposer()
              }),
              g()(u()(e), '_handleCloseComposer', function () {
                e._appBarRef && e._appBarRef.goBack()
              }),
              g()(u()(e), '_handleSendTweet', function () {
                e._composeContainerRef && e._composeContainerRef.handleTweetOrRetweet()
              }),
              g()(u()(e), '_setValidity', function (t) {
                t !== e.state.isValid && e.setState({ isValid: t })
              }),
              g()(u()(e), '_getScribeNamespace', function () {
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? Ue : je
              }),
              g()(u()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? He : Z.a
              }),
              g()(u()(e), '_renderAppBarRightControl', function () {
                var t = e.state.isValid,
                  n = e.context.isModal,
                  a = e.props,
                  r = a.activeUser,
                  o = a.inReplyToStatus,
                  i = a.isSelfThreadReply,
                  s = a.isSending,
                  l = !t || s || !r
                return n
                  ? void 0
                  : y.a.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: ze,
                        disabled: l,
                        onPress: e._handleSendTweet,
                        size: 'small',
                        testID: xe,
                        type: 'brandFilled',
                      },
                      Object(ee.a)({
                        inReplyToStatus: !!o,
                        isSelfThreadReply: !!i,
                        isQuoteTweet: !!e.isQuoteTweet,
                        isRetweet: !!e.isRetweet,
                        isScheduled: !!e.isScheduled,
                        isThread: e.isThread,
                      }),
                    )
              }),
              g()(u()(e), '_renderHeaderWithProgressBar', function (t) {
                var n = e.context.isModal,
                  a = e.props,
                  r = a.isSending,
                  o = a.sendingProgress
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(Re.a, {
                    progress: r ? Math.max(o, 0.02) : 0,
                    style: [qe.progressBar, n && qe.progressBarModal],
                  }),
                  t,
                )
              }),
              g()(u()(e), '_renderUnsentHeading', function () {
                var t = e.props,
                  n = t.draftTweets,
                  a = t.hideUnsentTweetsButton,
                  r = t.scheduledTweets
                if (!a && (r.length > 0 || n.length > 0))
                  return y.a.createElement(
                    pe.a,
                    { style: qe.unsentHeadingContainer },
                    y.a.createElement(Ie.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Me),
                  )
              }),
              g()(u()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(Ee.c)(r()(r()({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
                  t.push('/compose/tweet/unsent/drafts')
              }),
              g()(u()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              g()(u()(e), '_handleComposeContainerRef', function (t) {
                e._composeContainerRef = t
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.activeUser,
                    n = e.createDraftTweetApiErrorHandler,
                    a = e.createScheduledTweetApiErrorHandler,
                    r = e.fetchDraftTweets,
                    o = e.fetchScheduledTweets,
                    i = e.history,
                    s = e.inReplyToStatus,
                    l = e.location,
                    c = e.selectedCommunityIdFromLocationState,
                    u = e.updateAudienceControlsValue
                  ;(this._unlockReload = Te.a.acquire()),
                    i.setModalRouteBreakpoint(i.location),
                    t && (o().catch(a()), r().catch(n())),
                    c &&
                      (u({
                        _type: 'community_members',
                        communityIdValue: c,
                        conversationControlsValue: 'community_members',
                      }),
                      i.replace({ pathname: l.pathname, state: Object(De.a)(l.state || {}, 'selectedCommunityId') })),
                    null != s && s.exclusivity_info
                      ? u({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != s && s.community_id_str
                      ? u({
                          _type: 'community_members',
                          communityIdValue: s.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != s &&
                        s.trusted_friends_tweet &&
                        u({
                          _type: 'trusted_friends_tweet',
                          conversationControlsValue: 'trusted_friends_tweet',
                          trustedFriendsValue: {},
                        })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unlockReload()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.activeUser,
                    a = t.composeHeader,
                    r = t.composeSemanticCoreId,
                    o = t.composerData,
                    i = t.customizePropsForSingleComposerItem,
                    s = t.history,
                    l = t.isIntentRoute,
                    c = t.location,
                    u = t.quotedStatus,
                    d = t.richTextInputContext,
                    m = t.subtitle,
                    p = t.title,
                    h = t.typeaheadWrapper,
                    f = l && !n,
                    g = this.context.isModal
                  return y.a.createElement(
                    Se.b,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    y.a.createElement(ke.a, null, function (t) {
                      var l = t.windowWidth,
                        v = _.a.shouldRenderAsModal(l),
                        C = (f || e.showCommunityAudienceEducation) && v,
                        w = (null == o ? void 0 : o.length) > 1
                      return y.a.createElement(
                        y.a.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? y.a.createElement(Ae.a, {
                              actionLabel: Ne,
                              graphicDisplayMode: 'none',
                              headline: Be,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: Fe,
                              withCloseButton: !1,
                            })
                          : null,
                        f && y.a.createElement(ae.a, { history: s, location: c }),
                        !C &&
                          y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(
                              $.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: Ve,
                                documentTitle: Le,
                                hideBackButton: !1,
                                history: s,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: m,
                                title: p,
                              },
                              y.a.createElement(b.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
                                customizePropsForSingleComposerItem: i,
                                history: s,
                                isModal: g,
                                location: c,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: u,
                                richTextInputContext: d,
                                setValidity: e._setValidity,
                                typeaheadWrapper: h,
                                windowWidth: l,
                              }),
                            ),
                            w ? y.a.createElement(be, null) : null,
                          ),
                      )
                    }),
                  )
                },
              },
              {
                key: 'showCommunityAudienceEducation',
                get: function () {
                  var e = this.props,
                    t = e.inReplyToStatus,
                    n = e.selectedCommunityIdFromLocationState,
                    a = e.shouldShowCommunityAudienceEducation,
                    r = !!((null != t && t.community_id_str) || n)
                  return a && r
                },
              },
              {
                key: 'isThread',
                get: function () {
                  return this.props.composerData.length > 1
                },
              },
              {
                key: 'isRetweet',
                get: function () {
                  var e = this.props.composerData,
                    t = 0 === e[0].media.length
                  return !this.isThread && e[0].quotedStatus && '' === e[0].text && t
                },
              },
              {
                key: 'isQuoteTweet',
                get: function () {
                  var e = this.props.composerData
                  return !this.isThread && !!e[0].quotedStatus
                },
              },
              {
                key: 'isScheduled',
                get: function () {
                  var e = this.props.composerData
                  return Object(re.h)(e[0].scheduledFor)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(We, 'contextType', Pe.b)
      var qe = fe.a.create(function (e) {
        return {
          progressBar: {
            position: 'fixed',
            borderTopLeftRadius: e.borderRadii.small,
            borderTopRightRadius: e.borderRadii.small,
            zIndex: e.componentZIndices.appBarZIndex + 1,
          },
          progressBarModal: { position: 'absolute' },
          unsentHeadingContainer: { marginLeft: 'auto' },
        }
      })
      t.default = Q(We)
    },
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return u
      })
      var a = n('ddV6'),
        r = n.n(a),
        o =
          (n('z84I'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('KqXw'),
          n('Ysgh'),
          n('LW0h'),
          n('2G9S'),
          n('3XMw')),
        i = n.n(o),
        s = n('3A2y'),
        l = i.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          o = r()(a, 6),
          i = o[0],
          s = o[1],
          u = o[2],
          d = o[3],
          m = o[4],
          p = o[5],
          h = [
            i,
            s && '@'.concat(s.toString()),
            u,
            d,
            m &&
              m
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            p && l({ viaScreenName: p }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var u = function (e) {
        return Object(s.a)(e, c)
      }
    },
    rziq: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      var a = 'send-tweet',
        r = 'dismiss-composer'
    },
    sCk0: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        f = (n('2G9S'), n('z84I'), n('7x/C'), n('JtPf'), n('DfhM'), n('ERkP')),
        g = n.n(f),
        v = n('zfvc'),
        y = n('RhWx'),
        _ = n.n(y),
        b = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', {
                isAnimating: !1,
                renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                  return { status: C.static, child: e }
                }),
              }),
              h()(l()(e), '_handleEachAnimateComplete', function () {
                var t = e.state.isAnimating,
                  n = e.props,
                  a = n.children,
                  r = n.onAnimateComplete
                t &&
                  (r && r(),
                  e.setState({
                    renderChildren: g.a.Children.toArray(a).map(function (e) {
                      return { status: C.static, child: e }
                    }),
                    isAnimating: !1,
                  }))
              }),
              e
            )
          }
          return (
            i()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this
                    return this.state.renderChildren.map(function (t) {
                      var n = t.child,
                        a = t.status
                      return g.a.createElement(
                        v.a,
                        {
                          animateMount: a !== C.static,
                          key: n.key,
                          onAnimateComplete: e._handleEachAnimateComplete,
                          show: a !== C.out,
                        },
                        n,
                      )
                    })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = (function (e, t) {
                      for (
                        var n = 0,
                          a = 0,
                          r = [],
                          o = function () {
                            if (n >= t.length)
                              return (
                                r.push.apply(
                                  r,
                                  _()(
                                    e.slice(a).map(function (e) {
                                      return { child: e, status: C.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var o = t[n],
                              i = e[a]
                            if (o.key === i.key) r.push({ child: o, status: C.static }), (n += 1)
                            else {
                              var s = Object(b.a)(t, function (e) {
                                return e.key === i.key
                              })
                              s >= 0
                                ? (r.push.apply(
                                    r,
                                    _()(
                                      t.slice(n, s).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[s], status: C.static }]),
                                  ),
                                  (n = s + 1))
                                : r.push({ child: i, status: C.out })
                            }
                            a += 1
                          };
                        a < e.length && 'break' !== o();

                      );
                      return (
                        n < t.length &&
                          r.push.apply(
                            r,
                            _()(
                              t.slice(n).map(function (e) {
                                return { child: e, status: C.in }
                              }),
                            ),
                          ),
                        r
                      )
                    })(
                      t.renderChildren.map(function (e) {
                        return e.child
                      }),
                      g.a.Children.toArray(e.children),
                    )
                    return {
                      renderChildren: n,
                      isAnimating: !n.every(function (e) {
                        return e.status === C.static
                      }),
                    }
                  },
                },
              ],
            ),
            n
          )
        })(g.a.Component)
      t.a = w
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        o = n('N9G2'),
        i = n('BIH/'),
        s = n('lhaq'),
        l = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = i(t),
              a = l(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : s(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    vOV5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PlacePickerScreen', function () {
          return le
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('2VqO'),
        h = n.n(p),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('LW0h'), n('7x/C'), n('jQ3i'), n('x4t0'), n('z84I'), n('KqXw'), n('LJOr'), n('ERkP')),
        y = n.n(v),
        _ = n('a/ea'),
        b = n('/Rsk'),
        C = n('P1r1'),
        w = n('xVN5'),
        T = n('RqPI'),
        E = n('rxPX'),
        S = n('0KEI'),
        x = Object(E.a)()
          .propsFromState(function () {
            return {
              autotaggedLocation: b.d,
              initialResults: b.f,
              initialFetchStatus: b.e,
              lastSearchResults: b.h,
              lastSearchFetchStatus: b.g,
              position: _.d,
              taggedLocation: w.q,
              userCountry: T.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('PLACE_PICKER'),
              loadGeoLocation: _.a,
              fetchInitialPlacesIfNeeded: b.b,
              searchPlaces: b.c,
              updateLastSelectedPlace: b.i,
              updateSettings: C.L,
              updateSingleComposer: w.x,
            }
          })
          .withAnalytics({ page: 'compose', section: 'place_picker' }),
        I = n('kGix'),
        R = n('v//M'),
        k = n('jHSc'),
        A = n('M6MT'),
        P = n('3XMw'),
        O = n.n(P),
        D = n('MWbm'),
        L = n('pjBI'),
        M = n('t62R'),
        B = n('CKsB'),
        F = n('/yvb'),
        N = n('6OUF'),
        V = n('cmUU'),
        j = n('rHpw'),
        U =
          (n('hBpG'),
          (function () {
            function e(t, n, a) {
              i()(this, e), (this.formatter = t), (this.fallbackFormatter = n), (this.fallbackRatio = a)
            }
            return (
              l()(e, [
                {
                  key: 'format',
                  value: function (e) {
                    var t = Math.round(10 * e) / 10
                    return t > 0
                      ? this.formatter({ distance: t })
                      : this.fallbackFormatter({ distance: Math.round(e * this.fallbackRatio) })
                  },
                },
              ]),
              e
            )
          })()),
        H = new U(O.a.b01ed2da, O.a.i83e29e0, 5280),
        z = new U(O.a.d4b7cff7, O.a.b211849e, 1e3),
        W = 1.609344,
        q = ['lr', 'mm', 'uk', 'us'],
        G = n('JFx8'),
        K = n('VwDm'),
        X = n('EfHu'),
        Y = n('474o'),
        Q = O.a.b772cd65,
        J = O.a.e7c766ee,
        Z = O.a.ab68727a,
        $ = O.a.ae4057a2,
        ee = O.a.bf2923a5,
        te = O.a.d963d1b6,
        ne = O.a.a893d601,
        ae = O.a.e68b09b4,
        re = O.a.be6cc44d,
        oe = O.a.d8ef3232,
        ie = O.a.cce30dcc,
        se = O.a.fa9adac1,
        le = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              g()(u()(a), 'state', {
                activeResultSet: Y.c.initial,
                geoLocationError: void 0,
                query: '',
                selectedLocation: void 0,
                showSearchForButton: !1,
              }),
              g()(u()(a), '_appBarRef', y.a.createRef()),
              g()(u()(a), '_fetchInitialPlaces', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInitialPlacesIfNeeded,
                  r = e.taggedLocation
                n()
                  .then(function () {
                    var e = a.props.autotaggedLocation
                    r || a.setState({ selectedLocation: e })
                  })
                  .catch(t())
              }),
              g()(u()(a), '_getActiveResults', function () {
                var e = a.props,
                  t = e.initialResults,
                  n = e.lastSearchResults
                return a.state.activeResultSet === Y.c.initial ? t : n
              }),
              g()(u()(a), '_selectResults', function () {
                var e,
                  t = a.state,
                  n = t.query,
                  o = t.selectedLocation,
                  i = (null === (e = a._getActiveResults()) || void 0 === e ? void 0 : e.places) || []
                return (
                  o &&
                    (i = [o].concat(
                      r()(
                        i.filter(function (e) {
                          return e.place.id !== o.place.id
                        }),
                      ),
                    )),
                  i.filter(function (e) {
                    return e.place.full_name.toLowerCase().includes(n.toLowerCase())
                  })
                )
              }),
              g()(u()(a), '_goBack', function () {
                var e
                null === (e = a._appBarRef.current) || void 0 === e || e.goBack()
              }),
              g()(u()(a), '_setTaggedLocation', function (e) {
                var t = a.props,
                  n = t.updateLastSelectedPlace,
                  r = t.updateSettings
                ;(0, t.updateSingleComposer)({ updates: { taggedLocation: e } }),
                  n(e),
                  r({ shouldAutoTagLocation: !!e })
              }),
              g()(u()(a), '_handleBack', function () {
                return a._goBack()
              }),
              g()(u()(a), '_handleDone', function () {
                var e = a.state.selectedLocation
                e && a._setTaggedLocation(e), a._goBack()
              }),
              g()(u()(a), '_handleRemove', function () {
                a._setTaggedLocation(null), a._goBack()
              }),
              g()(u()(a), '_handleRetry', function () {
                var e = a.props.searchPlaces,
                  t = a.state,
                  n = t.activeResultSet,
                  r = t.query
                n === Y.c.initial ? a._fetchInitialPlaces() : e(r)
              }),
              g()(u()(a), '_handleLocationDisabledPromptDismiss', function () {
                a.props.history.goBack()
              }),
              g()(u()(a), '_handleChange', function (e) {
                var t = e.currentTarget.value,
                  n = t.length ? a.state.activeResultSet : Y.c.initial
                a.setState({ activeResultSet: n, query: t, showSearchForButton: !!t.length })
              }),
              g()(u()(a), '_handleClear', function () {
                a.setState({ activeResultSet: Y.c.initial, query: '' })
              }),
              g()(u()(a), '_handleSubmit', function () {
                var e = a.state.query,
                  t = a.props.searchPlaces
                e.length && (a.setState({ activeResultSet: Y.c.lastSearch, showSearchForButton: !1 }), t(e))
              }),
              g()(u()(a), '_handlePlaceClick', function (e) {
                return function () {
                  a._setTaggedLocation(e), a._goBack()
                }
              }),
              g()(u()(a), '_renderPlaceSubtext', function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  s,
                  l = a.props,
                  c = l.position,
                  u = l.userCountry,
                  d = e.place,
                  m = d.attributes.street_address,
                  p = d.centroid
                if (m && p && 2 === p.length && c) {
                  var h =
                    ((t = { lat: c.coords.latitude, long: c.coords.longitude }),
                    (n = { lat: p[1], long: p[0] }),
                    (r = t.lat * (Math.PI / 180)),
                    (o = n.lat * (Math.PI / 180)),
                    (i = o - r),
                    (s = (n.long - t.long) * (Math.PI / 180)),
                    7917.6 *
                      Math.asin(
                        Math.sqrt(
                          Math.sin(i / 2) * Math.sin(i / 2) +
                            Math.cos(r) * Math.cos(o) * Math.sin(s / 2) * Math.sin(s / 2),
                        ),
                      ))
                  return y.a.createElement(
                    L.a,
                    null,
                    y.a.createElement(M.b, null, m),
                    y.a.createElement(
                      M.b,
                      null,
                      (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'us'
                        if (
                          q.find(function (e) {
                            return e === t.toLowerCase()
                          })
                        )
                          return H.format(e)
                        var n = e * W
                        return z.format(n)
                      })(h, u),
                    ),
                  )
                }
              }),
              g()(u()(a), '_renderPlace', function (e) {
                var t = a.state.selectedLocation
                return y.a.createElement(B.a, {
                  actionSubText: a._renderPlaceSubtext(e),
                  actionText: e.place.full_name,
                  isSelected: e.place.id === (null == t ? void 0 : t.place.id),
                  key: e.place.id,
                  onClick: a._handlePlaceClick(e),
                  selectable: !0,
                })
              }),
              g()(u()(a), '_renderPlaces', function (e) {
                return e.length
                  ? e.map(function (e) {
                      return a._renderPlace(e)
                    })
                  : y.a.createElement(M.b, { align: 'center', style: ce.noPlacesText }, te)
              }),
              g()(u()(a), '_renderAttributionIfNeeded', function () {
                var e = a._getActiveResults()
                return null != e && e.attributions.has(Y.b.foursquare)
                  ? y.a.createElement(G.a, { style: ce.foursquareIcon })
                  : null
              }),
              g()(u()(a), '_renderResults', function () {
                var e = a.state,
                  t = e.query,
                  n = e.showSearchForButton,
                  r = a._selectResults()
                return y.a.createElement(
                  D.a,
                  null,
                  a._renderPlaces(r),
                  n
                    ? y.a.createElement(B.a, {
                        actionText: se({ query: t }),
                        onClick: a._handleSubmit,
                        textColor: 'primary',
                      })
                    : null,
                  a._renderAttributionIfNeeded(),
                )
              }),
              g()(u()(a), '_renderRightControl', function () {
                return y.a.createElement(
                  D.a,
                  { style: ce.actionButtonContainer },
                  y.a.createElement(
                    F.a,
                    { onPress: a._handleRemove, size: 'small', style: ce.actionButton, type: 'primaryText' },
                    ae,
                  ),
                  y.a.createElement(
                    F.a,
                    { onPress: a._handleDone, size: 'small', style: ce.actionButton, type: 'primaryFilled' },
                    Q,
                  ),
                )
              }),
              g()(u()(a), '_renderGeoPicker', function () {
                var e = a.props,
                  t = e.history,
                  n = e.initialFetchStatus,
                  r = e.lastSearchFetchStatus,
                  o = a.state.activeResultSet === Y.c.initial ? n : r
                return y.a.createElement(
                  k.b,
                  {
                    appBarRef: a._appBarRef,
                    history: t,
                    onBackClick: a._handleBack,
                    rightControl: a._renderRightControl(),
                    title: ie,
                    withBottomBorder: !1,
                  },
                  y.a.createElement(N.a, {
                    Icon: K.a,
                    onChange: a._handleChange,
                    onClear: a._handleClear,
                    onSubmitEditing: a._handleSubmit,
                    placeholder: re,
                    style: ce.search,
                    withClearButton: !0,
                  }),
                  y.a.createElement(R.a, {
                    fetchStatus: o === I.a.NONE ? I.a.LOADING : o,
                    onRequestRetry: a._handleRetry,
                    render: a._renderResults,
                    retryMessage: oe,
                  }),
                )
              }),
              g()(u()(a), '_renderLocationDisabledPrompt', function () {
                var e = a.state.geoLocationError,
                  t = $,
                  n = ee
                return (
                  e && e.code === A.a.PERMISSION_DENIED && ((t = J), (n = Z)),
                  y.a.createElement(V.a, {
                    actionLabel: ne,
                    graphic: X.a,
                    headline: t,
                    onAction: a._handleLocationDisabledPromptDismiss,
                    onClose: a._handleLocationDisabledPromptDismiss,
                    subtext: n,
                  })
                )
              })
            var o = e.autotaggedLocation,
              s = e.initialResults,
              l = e.taggedLocation
            return l ? (a.state.selectedLocation = l) : s && (a.state.selectedLocation = o), a
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  return (0, this.props.loadGeoLocation)().then(this._fetchInitialPlaces, function (t) {
                    return e.setState({ geoLocationError: t })
                  })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.geoLocationError ? this._renderLocationDisabledPrompt() : this._renderGeoPicker()
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        ce = j.a.create(function (e) {
          return {
            search: { marginHorizontal: e.spaces.space16, flexGrow: 0 },
            actionButtonContainer: { flexDirection: 'row' },
            actionButton: { marginLeft: e.spaces.space12 },
            noPlacesText: { marginVertical: e.spaces.space16 },
            foursquareIcon: { marginVertical: e.spaces.space16, fill: e.colors.gray700 },
          }
        }),
        ue = x(le)
      t.default = ue
    },
    wa7Z: function (e, t, n) {
      'use strict'
      var a = n('wAC9')
      t.a = function (e) {
        return Object(a.a)({
          contextSuffix: 'COMMUNITIES_MEMBERSHIPS_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMembershipsSlice
          },
          getEndpointParams: function (e) {
            return e
          },
          sliceKey: 'communitiesMembershipsSlice-'.concat(e),
        })
      }
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('WOwf'),
        i = n('3XMw'),
        s = n.n(i),
        l = n('k6Ei'),
        c = n('rHpw'),
        u = n('+/1j'),
        d = n('MWbm'),
        m = s.a.c2fc878c,
        p = s.a.db11b27f,
        h = function (e) {
          return e
        },
        f = c.a.create(function (e) {
          var t = e.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30 },
            center: { alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
            hide: { opacity: 0 },
            text: { fontSize: 13, lineHeight: 0.8, minWidth: 16, textAlign: 'center' },
            gray700: { color: t.gray700 },
            red500: { color: t.red500 },
          }
        })
      t.a = function (e) {
        var t = e.count,
          n = e.maxCount,
          a = e.formatNumber,
          i = void 0 === a ? h : a,
          s = e.warningCount,
          g = n - t,
          v = g >= 0 ? p({ count: i(g) }) : m({ count: i(t - n) }),
          y =
            t >= s
              ? r.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  v,
                )
              : null,
          _ = Object(o.a)(g, n),
          b = t >= n ? 'red500' : t >= s ? 'yellow500' : 'primary',
          C = r.a.createElement(l.a, {
            color: b,
            progress: _,
            size: t >= s ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          w = t >= s ? r.a.createElement(u.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, i(g)) : null
        return r.a.createElement(
          d.a,
          { style: [f.root, f.center] },
          y,
          C,
          r.a.createElement(d.a, { style: [c.a.absoluteFill, f.center] }, w),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        s = n('ddV6'),
        l = n.n(s),
        c = n('ERkP'),
        u = n.n(c),
        d = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        m = n('3XMw'),
        p = n.n(m),
        h = n('MWbm'),
        f = n('t62R'),
        g = n('CKsB'),
        v = n('/yvb'),
        y = n('rHpw'),
        _ = n('Zg3A'),
        b = n('yiKp'),
        C = n.n(b),
        w = n('Lsrn'),
        T = n('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
              }),
              u.a.createElement('path', {
                d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var S = E,
        x = n('boUI'),
        I = n('EweD'),
        R = p.a.g6185a9e,
        k = p.a.g2d04222,
        A = p.a.baffe39a,
        P = p.a.af293dc2,
        O = p.a.h1053f7e,
        D = p.a.bf994ab2,
        L = p.a.cf7f7e39,
        M = p.a.cfd2f35d,
        B = y.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space4,
              borderRadius: e.borderRadii.xLarge,
            },
            popover: { maxWidth: 5 * e.spacesPx.space64 },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 },
            menuRow: {
              flexDirection: 'row',
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
            },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
          }
        }),
        F = function (e) {
          var t,
            n,
            a = e.dismiss,
            r = e.isModal,
            o = e.midConversationTweet,
            i = e.value,
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            l = !!o,
            c =
              l &&
              !(
                null != o &&
                null !== (t = o.entities) &&
                void 0 !== t &&
                null !== (n = t.user_mentions) &&
                void 0 !== n &&
                n.some(function (e) {
                  return e.id_str !== o.user.id_str
                })
              ),
            m = O
          return (
            c ? (m = D) : l && (m = L),
            u.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [B.root, r ? B.modal : B.popover],
              },
              u.a.createElement(
                h.a,
                { style: B.title },
                u.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, R),
                u.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  k,
                ),
              ),
              u.a.createElement(
                h.a,
                null,
                u.a.createElement(g.a, {
                  Icon: _.a,
                  actionText: A,
                  isSelected: d.a.all === i,
                  onClick: s(d.a.all),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(g.a, {
                  Icon: S,
                  actionText: P,
                  isSelected: d.a.community === i,
                  onClick: s(d.a.community),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(g.a, {
                  Icon: c ? x.a : I.a,
                  actionText: m,
                  isSelected: d.a.by_invitation === i,
                  onClick: s(d.a.by_invitation),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? u.a.createElement(
                      v.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: B.cancelButton,
                        type: 'primaryOutlined',
                      },
                      M,
                    )
                  : null,
              ),
            )
          )
        },
        N = n('OiMc'),
        V = n('efqG'),
        j = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          o = e.disabled,
          s = u.a.useState(!1),
          c = l()(s, 2),
          d = c[0],
          m = c[1],
          p = u.a.useCallback(function () {
            return m(!0)
          }, []),
          h = u.a.useCallback(function () {
            return m(!1)
          }, []),
          f = a ? (d ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: p, closePopover: h }) : t
        return u.a.createElement(
          V.a,
          {
            disabled: o,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = i()(e, j)
              return u.a.createElement(F, r()({}, a, { dismiss: t, isModal: 'sheet' === n }))
            },
            visibilityBehavior: f,
          },
          g,
        )
      }
    },
    ye3X: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
      var a = Object.freeze({ inline: 'inline', prompt: 'prompt', require: 'require' })
    },
  },
])
//# sourceMappingURL=WIPED
