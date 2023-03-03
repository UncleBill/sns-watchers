'use strict'
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  ['bundle.Explore', 'icons/IconStar-js'],
  {
    24101: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return d
        },
      })
      var o = n(202784),
        i = n(229496),
        a = n(973186),
        r = n(473228),
        l = n.n(r),
        c = n(351212)
      var s = 'settingsAppBar'
      var u = l().bb081ea2,
        p = { viewType: 'settings_button' },
        f = o.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return o.createElement(i.ZP, {
            accessibilityLabel: u,
            behavioralEventContext: p,
            hoverLabel: { label: u },
            icon: o.createElement(c['default'], null),
            link: a,
            onPress: t,
            pullRight: n,
            style: m.button,
            testID: s,
            type: 'primaryText',
          })
        }),
        m = a.Z.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      var d = f
    },
    753331: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return c
        },
      })
      n(334115), n(200634)
      var o = n(202784),
        i = n(272175),
        a = n(896958),
        r = n(1778),
        l = function l(e) {
          var t = e.children,
            n = e.description,
            l = e.includeOpenGraphMeta,
            c = void 0 === l || l,
            s = e.title
          return o.createElement(
            o.Fragment,
            null,
            s && o.createElement(a.Z, { title: s, withMeta: c }),
            c && o.createElement(r.Z, { description: n, title: s }),
            o.createElement(i.ql, null, o.createElement('meta', { description: n, name: 'description' })),
            t,
          )
        }
      var c = o.memo(l)
    },
    86098: function _(e, t, n) {
      n.d(t, {
        ZP: function ZP() {
          return C
        },
      })
      var o = n(709249),
        i = n(887371),
        a = n(580753),
        r = n(545754),
        l = n(486906),
        c = n(256666),
        s = (n(22144), n(818178), n(326936), n(136728), n(202784)),
        u = n(914767),
        p = n(473228),
        f = n.n(p),
        m = n(497317),
        d = n(76687),
        h = n(663143),
        w = n(266298),
        g = n(923335),
        Z = n(392160),
        v = n(173738)
      var y = (0, Z.Z)()
        .propsFromActions(function () {
          return {
            createLocalApiErrorHandler: (0, g.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
            follow: v.Z.follow,
            unfollow: v.Z.unfollow,
          }
        })
        .withAnalytics()
      var b = n(882426),
        _ = Object.freeze({ follow: f().i79ab12a, following: f().d960b55c, unfollow: f().c0f56044 }),
        E = Object.freeze({
          follow: f().fcf51fe6,
          following: f().e9a90d72,
          unfollow: f().bf403716,
          confirmationHeadline: f().c9f08e29,
          confirmationSheetText: f().abc600f4,
        }),
        S = Object.freeze({
          follow: f().cd876e02,
          following: f().f2816e02,
          unfollow: f().f5b04fbc,
          confirmationHeadline: f().c481ae3f,
          confirmationSheetText: f().aa3ba124,
        }),
        x = Object.freeze({
          follow: f().e0e730b0,
          following: f().e0e730b0,
          unfollow: f().b1850062,
          confirmationHeadline: f().gd3f996f,
          confirmationSheetText: f().i36c403c,
        }),
        T = (function (e) {
          ;(0, r.Z)(n, e)
          var t = (0, l.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++) {
              r[l] = arguments[l]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, c.Z)((0, a.Z)(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              (0, c.Z)((0, a.Z)(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case b.q.Favorite:
                  case b.q.Star:
                  case b.q.Interested:
                    return s.createElement(m['default'], null)
                  case b.q.FollowTopic:
                  case b.q.Default:
                  default:
                    return
                }
              }),
              (0, c.Z)((0, a.Z)(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? s.createElement(s.Fragment, null) : void 0
              }),
              (0, c.Z)((0, a.Z)(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case b.q.FollowTopic:
                    return { follow: _.follow, unfollow: _.unfollow, following: _.following }
                  case b.q.Favorite:
                    return {
                      follow: S.follow,
                      unfollow: S.unfollow,
                      following: S.following,
                      confirmationHeadline: S.confirmationHeadline && S.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: S.confirmationSheetText,
                    }
                  case b.q.Star:
                    return {
                      follow: E.follow,
                      unfollow: E.unfollow,
                      following: E.following,
                      confirmationHeadline: E.confirmationHeadline && E.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: E.confirmationSheetText,
                    }
                  case b.q.Interested:
                    return {
                      follow: x.follow,
                      unfollow: x.unfollow,
                      following: x.following,
                      confirmationHeadline: x.confirmationHeadline && x.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: x.confirmationSheetText,
                    }
                  case b.q.Default:
                  default:
                    return
                }
              }),
              (0, c.Z)((0, a.Z)(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.educateOnFollow,
                  i = t.follow,
                  a = t.history,
                  r = t.topic
                i(r.id)['catch'](n()),
                  e._handleScribe('follow'),
                  o && r && a.push({ pathname: '/i/topics/education', state: { topicName: r.name } })
              }),
              (0, c.Z)((0, a.Z)(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.topic
                ;(0, t.unfollow)(o.id)['catch'](n()), e._handleScribe('unfollow')
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescribedBy,
                    o = t.isTransparent,
                    i = t.nativeID,
                    a = t.showRelationshipChangeConfirmation,
                    r = t.size,
                    l = t.style,
                    c = t.textMode,
                    p = t.topic,
                    f = p.following,
                    m = p.name
                  return s.createElement(w.Z, { customText: m, displayMode: h.BH.topic }, function (t) {
                    return s.createElement(u.Z, {
                      accessibilityDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(c),
                        followingIcon: e._getFollowingButtonIcon(c),
                      },
                      buttonText: e._getButtonText(c),
                      displayMode: e._getDisplayMode(c),
                      isFollowing: f,
                      isTransparent: o,
                      name: m,
                      nativeID: i,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: a,
                      size: r,
                      style: l,
                      type: 'topic',
                      withConfirmationSheetText: f,
                    })
                  })
                },
              },
              {
                key: '_handleScribe',
                value: function value(e) {
                  this.props.analytics.scribe({ element: 'topic', action: e })
                },
              },
            ]),
            n
          )
        })(s.Component)
      ;(0, c.Z)(T, 'defaultProps', { size: 'small', textMode: b.q.Default })
      var C = (0, d.ZP)(y(T))
    },
    882426: function _(e, t, n) {
      n.d(t, {
        q: function q() {
          return o
        },
      })
      n(22144), n(202784)
      var o = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    358589: function _(e, t, n) {
      n.r(t),
        n.d(t, {
          ExploreScreen: function ExploreScreen() {
            return D
          },
          default: function _default() {
            return N
          },
        })
      var o = n(709249),
        i = n(887371),
        a = n(580753),
        r = n(545754),
        l = n(486906),
        c = n(256666),
        s = (n(818178), n(202784)),
        u = n(108352),
        p = n(473228),
        f = n.n(p),
        m = n(24101),
        d = n(790876),
        h = n(753331),
        w = n(1778),
        g = n(819313),
        Z = n(107765),
        v = n(5621),
        y = n(517847),
        b = n(129022),
        _ = n(920579),
        E = (n(477950), n(74069), n(24949)),
        S = n(16587),
        x = n(624630),
        T = n(392160),
        C = function C(e, t) {
          var n, o
          return (
            (null === (n = t.match) || void 0 === n || null === (o = n.params) || void 0 === o ? void 0 : o.tabId) ||
            void 0
          )
        }
      var F = (0, T.Z)()
        .propsFromState(function () {
          return {
            initialTabModule:
              ((e = (0, S.Z)(function (e) {
                return (0, _.fy)(e)
              })),
              (t = (0, S.Z)(function (e, t) {
                return (0, _.fy)(e, t)
              })),
              (0, E.P1)(
                x.qP,
                C,
                function (t) {
                  return e((0, x.qP)(t)).selectPageConfiguration(t)
                },
                function (e, n, o) {
                  var i
                  return t(e, o ? (null == o || null === (i = o.tabs) || void 0 === i ? void 0 : i.initialTabId) : n)
                },
              )),
            selectedTabId: C,
          }
          var e, t
        })
        .withAnalytics({ page: 'guide', section: 'main' })
      var k = n(133028),
        B = n(44895)
      var H = (0, k.Z)({}, (0, B.G)({ withThirdPartyCards: !0, errorContext: 'EXPLORE_SCREEN' }))
      var P = f().fcf3e54c,
        L = f().ead349a8,
        I = f().a19ce060,
        A = function A() {
          return s.createElement(v.Z, null)
        },
        O = function O() {
          return s.createElement(u.Z, { message: I })
        },
        R = 600,
        M = 315,
        q = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        D = (function (e) {
          ;(0, r.Z)(n, e)
          var t = (0, l.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++) {
              r[l] = arguments[l]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, c.Z)((0, a.Z)(e), '_getTabLink', function (e) {
                return { pathname: '/explore/tabs/'.concat(e) }
              }),
              (0, c.Z)((0, a.Z)(e), '_handleSettingsClick', function (t) {
                e.props.analytics.scribe({ element: 'settings_button', action: 'click' })
              }),
              (0, c.Z)((0, a.Z)(e), '_handleBackClick', function () {
                e.props.history.goBack()
              }),
              (0, c.Z)((0, a.Z)(e), '_setSearchBoxRef', function (t) {
                e._searchBoxRef = t
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.analytics,
                    n = e.history,
                    o = e.initialTabModule,
                    i = e.location,
                    a = e.selectedTabId,
                    r = s.createElement(Z.Z, { history: n }),
                    l = this.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                      ? '/settings/explore'
                      : '/settings/trends',
                    c = s.createElement(m.Z, { onPress: this._handleSettingsClick, pullRight: !0, to: l }),
                    u = i.state && i.state.searchFocused,
                    p = s.createElement(d.Z, { withSearchBox: !1, withTrends: !1 })
                  return s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(h.Z, { description: L, includeOpenGraphMeta: !1, title: P }),
                    s.createElement(w.Z, {
                      canonical: 'https://twitter.com/explore',
                      description: L,
                      image: q,
                      imageH: M,
                      imageW: R,
                      title: P,
                      type: 'article',
                    }),
                    s.createElement(y.Z, {
                      behavioralEventViewType: 'guide',
                      entryConfiguration: H,
                      fab: r,
                      getTabLink: this._getTabLink,
                      history: n,
                      initialPageNamespace: t.contextualScribeNamespace,
                      module: o,
                      onBackClick: u ? this._handleBackClick : void 0,
                      prerollDisplayLocation: b.Nw.OTHER,
                      renderEmptyState: A,
                      renderUnavailable: O,
                      rightControl: c,
                      searchBoxRef: this._setSearchBoxRef,
                      selectedTabId: a,
                      sidebarContent: p,
                      timelinePrefix: _.uI,
                      title: P,
                      withBottomLoginSignupBar: !0,
                      withDeferredView: !0,
                      withSearchBox: !0,
                    }),
                    !1,
                  )
                },
              },
            ]),
            n
          )
        })(s.Component)
      ;(0, c.Z)(D, 'contextType', g.rC)
      var N = F(D)
    },
    707251: function _(e, t, n) {
      n.r(t),
        n.d(t, {
          ExploreRevampScreen: function ExploreRevampScreen() {
            return C
          },
          default: function _default() {
            return F
          },
        })
      var o = n(133028),
        i = n(202784),
        a = n(241441),
        r = n(473228),
        l = n.n(r),
        c = n(24101),
        s = n(790876),
        u = n(612969),
        p = n(509082),
        f = n(1778),
        m = n(543467),
        d = n(819313),
        h = n(107765),
        w = n(346253),
        g = n(440082),
        Z = n(460673),
        v = n(78772)
      var y = (0, n(962104).Z)({
        timelineId: 'forYouExploreGraphQL',
        network: {
          getEndpoint: function getEndpoint(e) {
            return e.Explore.fetchForYouExplore
          },
          getEndpointParams: function getEndpointParams(e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
        },
        context: 'FETCH_FOR_YOU_EXPLORE',
        perfKey: 'forYouExploreGraphQL',
        formatResponse: v.Z,
      })
      var b = l().fcf3e54c,
        _ = l().ead349a8,
        E = { page: 'guide', section: 'main' },
        S = 600,
        x = 315,
        T = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        C = function C(e) {
          var t = e.analytics,
            n = e.history,
            r = e.location,
            l = i.useContext(d.rC).featureSwitches,
            Z = i.useRef(null),
            v = r.state && r.state.searchFocused,
            C = l.isTrue('responsive_web_trends_setting_new_endpoints') ? '/settings/explore' : '/settings/trends',
            F = i.useCallback(
              function (e) {
                t.scribe((0, o.Z)((0, o.Z)({}, E), {}, { element: 'settings_button', action: 'click' }))
              },
              [t],
            ),
            k = i.useCallback(
              function () {
                n.goBack({ backLocation: '/' })
              },
              [n],
            ),
            B = i.createElement(h.Z, { history: n }),
            H = i.createElement(c.Z, { onPress: F, pullRight: !0, to: C }),
            P = i.createElement(s.Z, { withSearchBox: !1, withTrends: !1 })
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              w.Z,
              { behavioralEventViewType: 'guide' },
              i.createElement(f.Z, {
                canonical: 'https://twitter.com/explore',
                description: _,
                image: T,
                imageH: x,
                imageW: S,
                title: b,
                type: 'article',
              }),
              i.createElement(m.Z, {
                history: n,
                onBackClick: v ? k : void 0,
                primaryContent: i.createElement(
                  p.Z,
                  { component: a.Z, fab: B },
                  i.createElement(u.Z, null, i.createElement(g.Z, { module: y, title: b })),
                ),
                rightControl: H,
                searchBoxRef: function searchBoxRef(e) {
                  Z.current = e
                },
                secondaryBar: null,
                sidebarContent: P,
                title: b,
                withBottomLoginSignupBar: !0,
                withSearchBox: !0,
              }),
            ),
            !1,
          )
        }
      var F = (0, Z.Z)(C)
    },
    611731: function _(e, t, n) {
      n.d(t, {
        Z: function Z() {
          return y
        },
      })
      var o = n(133028),
        i = n(709249),
        a = n(887371),
        r = n(580753),
        l = n(545754),
        c = n(486906),
        s = n(256666),
        u = (n(22144), n(818178), n(202784)),
        p = n(890601),
        f = n(368737),
        m = n(325686),
        d = Object.freeze({ normal: 100, long: 250, longer: 500 }),
        h = Object.freeze({ animate: 'animate', static: 'static', prep: 'prep' }),
        w = { height: 'auto', opacity: 1 },
        g = { height: 0, opacity: 0 },
        Z = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, i.Z)(this, n)
            for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) {
              l[c] = arguments[c]
            }
            return (
              (e = t.call.apply(t, [this].concat(l))),
              (0, s.Z)((0, r.Z)(e), 'state', {
                animateStage: h['static'],
                animateProps: e.props.show && !e.props.animateMount ? w : g,
                renderChildren: e.props.children,
                componentHeight: 0,
                props: (0, o.Z)((0, o.Z)({}, e.props), {}, { show: !e.props.animateMount && e.props.show }),
              }),
              (0, s.Z)((0, r.Z)(e), '_transitionStart', function (t) {
                var n = t.componentHeight,
                  o = e.state.props,
                  i = o.show,
                  a = 'fade' === o.type
                i
                  ? e.setState(
                      {
                        animateProps: { height: a ? 'auto' : 0, opacity: 0 },
                        animateStage: h.animate,
                        componentHeight: n,
                      },
                      e._requestNewFrame(function () {
                        e.setState({ animateProps: { height: a ? 'auto' : n, opacity: 1 } })
                      }),
                    )
                  : e.setState(
                      {
                        animateProps: { height: a ? 'auto' : n, opacity: 1 },
                        animateStage: h.animate,
                        componentHeight: n,
                      },
                      e._requestNewFrame(function () {
                        e.setState({ animateProps: { height: a ? 'auto' : 0, opacity: 0 } })
                      }),
                    )
              }),
              (0, s.Z)((0, r.Z)(e), '_handleTransitionEnd', function (t) {
                var n = e.props,
                  o = n.onAnimateComplete,
                  i = n.show
                t.target instanceof window.HTMLElement &&
                  t.target === e._animationNode &&
                  e.setState({ animateProps: i ? w : g, animateStage: h['static'] }, function () {
                    return o && o()
                  })
              }),
              (0, s.Z)((0, r.Z)(e), '_requestNewFrame', function (t) {
                window.requestAnimationFrame(function () {
                  window.requestAnimationFrame(function () {
                    e._mounted && t()
                  })
                })
              }),
              (0, s.Z)((0, r.Z)(e), '_setAnimationNode', function (t) {
                e._animationNode = t
              }),
              (0, s.Z)((0, r.Z)(e), '_setMeasurementNode', function (t) {
                e._measurementNode = t
              }),
              (0, s.Z)((0, r.Z)(e), '_measureComponentHeight', function () {
                return e._measurementNode instanceof window.HTMLElement
                  ? e._measurementNode.getBoundingClientRect().height
                  : null
              }),
              (0, s.Z)((0, r.Z)(e), '_measureAndAnimate', function () {
                var t = e._measureComponentHeight()
                t && e._transitionStart({ componentHeight: t })
              }),
              e
            )
          }
          return (
            (0, a.Z)(
              n,
              [
                {
                  key: 'componentDidMount',
                  value: function value() {
                    ;(this._mounted = !0), this.props.animateMount && this._measureAndAnimate()
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function value() {
                    this._mounted = !1
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function value() {
                    this.state.animateStage === h.prep && this._measureAndAnimate()
                  },
                },
                {
                  key: 'render',
                  value: function value() {
                    var e = this.state,
                      t = e.animateProps,
                      n = e.animateStage,
                      o = e.props,
                      i = o.duration,
                      a = o.show,
                      r = o.testId,
                      l = o.type,
                      c = e.renderChildren,
                      s = n === h['static'],
                      f = n === h.animate,
                      w = 'fade' === l
                    if (s && !a) return null
                    var g = [
                      !s && { willChange: 'opacity, height' },
                      f && v.transitionStyles,
                      f && { transitionDuration: ''.concat(d[i], 'ms') },
                      f && !w && v.overflowHidden,
                      !s && t,
                    ]
                    return (0, p.Z)('div', {
                      'data-testid': r,
                      onTransitionEnd: this._handleTransitionEnd,
                      ref: this._setAnimationNode,
                      style: g,
                      children: u.createElement(
                        m.Z,
                        { ref: this._setMeasurementNode },
                        'function' == typeof c ? c({ isAnimating: f }) : c,
                      ),
                    })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function value(e, t) {
                    return e.show !== t.props.show
                      ? t.animateStage === h['static']
                        ? { animateStage: h.prep, renderChildren: e.show ? e.children : t.props.children, props: e }
                        : {
                            animateStage: h.animate,
                            animateProps: e.show ? (0, o.Z)((0, o.Z)({}, w), {}, { height: t.componentHeight }) : g,
                            props: e,
                          }
                      : { props: e, renderChildren: e.children }
                  },
                },
              ],
            ),
            n
          )
        })(u.Component)
      ;(0, s.Z)(Z, 'defaultProps', { duration: 'normal', type: 'slide' })
      var v = f.Z.create({
        transitionStyles: { transitionProperty: 'opacity, height', transitionTimingFunction: 'ease' },
        overflowHidden: { overflow: 'hidden' },
      })
      var y = Z
    },
    497317: function _(e, t, n) {
      n.r(t),
        n.d(t, {
          default: function _default() {
            return c
          },
        })
      var o = n(133028),
        i = n(202784),
        a = n(890601),
        r = n(473569),
        l = function l() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, a.Z)(
            'svg',
            (0, o.Z)(
              (0, o.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [r.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z',
                  }),
                ),
              },
            ),
          )
        }
      l.metadata = { width: 24, height: 24 }
      var c = l
    },
  },
])

//# sourceMappingURL=WIPED
