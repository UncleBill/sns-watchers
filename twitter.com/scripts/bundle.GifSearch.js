;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    '3GUV': function (e, t, a) {
      'use strict'
      var r = a('VrFO'),
        n = a.n(r),
        i = a('Y9Ll'),
        o = a.n(i),
        c = a('5Yy7'),
        u = a.n(c),
        l = a('2VqO'),
        s = a.n(l),
        h = a('ERkP'),
        d = a.n(h),
        f = a('rHpw'),
        g = a('MWbm'),
        y = (function (e) {
          u()(a, e)
          var t = s()(a)
          function a() {
            return n()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return d.a.createElement(g.a, { style: m.root })
                },
              },
            ]),
            a
          )
        })(d.a.Component),
        m = f.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, a) {
      'use strict'
      var r = a('VrFO'),
        n = a.n(r),
        i = a('Y9Ll'),
        o = a.n(i),
        c = a('5Yy7'),
        u = a.n(c),
        l = a('2VqO'),
        s = a.n(l),
        h = a('ERkP'),
        d = a.n(h),
        f = a('3XMw'),
        g = a.n(f),
        y = a('rHpw'),
        m = a('+/1j'),
        p = a('MWbm'),
        v = g.a.e5b0063d,
        b = 0,
        S = (function (e) {
          u()(a, e)
          var t = s()(a)
          function a() {
            var e
            return n()(this, a), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(b)), (b += 1), e
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.title,
                    r = v({ title: a })
                  return d.a.createElement(
                    p.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    d.a.createElement(
                      m.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: y.a.visuallyHidden,
                      },
                      a,
                    ),
                    d.a.createElement(p.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            a
          )
        })(d.a.Component)
      t.a = S
    },
    EP6G: function (e, t, a) {
      'use strict'
      var r = a('VrFO'),
        n = a.n(r),
        i = a('Y9Ll'),
        o = a.n(i),
        c = a('1Pcy'),
        u = a.n(c),
        l = a('5Yy7'),
        s = a.n(l),
        h = a('2VqO'),
        d = a.n(h),
        f = a('KEM+'),
        g = a.n(f),
        y = a('ddV6'),
        m = a.n(y),
        p = (a('7xRU'), a('z84I'), a('ERkP')),
        v = a.n(p),
        b = a('RhWx'),
        S = a.n(b),
        _ = a('yiKp'),
        E = a.n(_),
        w = (a('tQbP'), a('zh9S')),
        C = a('xVN5'),
        O = a('CDB5'),
        I = a('Qyxo'),
        x = a('hqKg'),
        P = a('AspN'),
        k = a('oEGd'),
        M = Object(x.createSelector)(
          function (e, t) {
            var a = t.module,
              r = t.query
            return a.selectInitialFetchStatus(e, r)
          },
          function (e, t) {
            var a = t.module,
              r = t.query
            return a.selectItems(e, r)
          },
          function (e, t) {
            var a = t.module,
              r = t.query
            return a.selectNextFetchStatus(e, r)
          },
          function (e, t, a) {
            return {
              initialFetchStatus: e,
              items: Array.isArray(t)
                ? Object(I.a)(t, function (e) {
                    return e.url
                      ? E()(
                          E()({}, e),
                          {},
                          {
                            thumbnail_images: S()(e.thumbnail_images).sort(function (e, t) {
                              return t.height * t.width - e.height * e.width
                            }),
                          },
                        )
                      : void 0
                  })
                : void 0,
              nextFetchStatus: a,
            }
          },
        ),
        N = Object(k.d)(M, function (e) {
          var t,
            a = e.history,
            r = e.module
          return {
            addExternalMediaUpload: P.a,
            addMediaToDM:
              ((t = a.location.state),
              function (e, a) {
                var r = t && t.dmConversationId
                return Object(O.a)(r, e, a)
              }),
            setMediaMetadata: P.n,
            fetchInitialIfNeeded: r.fetchInitialIfNeeded,
            fetchNextIfNeeded: r.fetchNextIfNeeded,
            scribeAction: w.c,
            updateSingleComposerV2: C.x,
          }
        }),
        G = a('v//M'),
        A = a('x5W0'),
        R = a('U+bB'),
        F = a('XOY5'),
        q = a('cm6r'),
        T = a('rHpw'),
        j = (function (e) {
          s()(a, e)
          var t = d()(a)
          function a() {
            return n()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.backgroundColor,
                    a = e.height,
                    r = e.onClick,
                    n = e.width
                  return v.a.createElement(
                    q.a,
                    { onPress: r, style: [K.imageContainer, L(t, a, n).background] },
                    this._renderPreview(),
                  )
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e = this.props,
                    t = e.altText,
                    a = e.animatedMediaUrl,
                    r = e.height,
                    n = e.shouldAutoPlayGif,
                    i = e.stillMediaUrl,
                    o = { height: r, width: e.width, uri: n ? a : i }
                  return v.a.createElement(R.a, { accessibilityLabel: t, source: o, testID: F.a.gifSearchGifImage })
                },
              },
            ]),
            a
          )
        })(v.a.Component),
        L = function (e, t, a) {
          return T.a.create(function (r) {
            return { background: { backgroundColor: e, height: t, width: a } }
          })
        },
        K = T.a.create(function (e) {
          return { imageContainer: { marginHorizontal: '1px', overflow: 'hidden', flexShrink: 1 } }
        }),
        D = j,
        V = a('MLl7'),
        B = a('3XMw'),
        U = a.n(B),
        H = a('TEoO'),
        Y = a('eyty'),
        Q = a('7nmT'),
        W = a.n(Q),
        z = a('MWbm'),
        X =
          (a('KOtZ'),
          a('7x/C'),
          a('LW0h'),
          function (e, t) {
            var a = e.reduce(function (e, t) {
              var a = t.original_image
              return e + a.width / a.height
            }, 0)
            return Math.ceil(t / a)
          })
      function J(e, t, a) {
        return e
          .reduce(
            function (e, r, n) {
              return (
                e[e.length - 1].push(E()(E()({}, r), {}, { index: n })),
                e[e.length - 1].length > 0 && X(e[e.length - 1], a) < t && e.push([]),
                e
              )
            },
            [[]],
          )
          .filter(function (e) {
            return e.length > 0
          })
      }
      var Z = a('VPAj'),
        $ = a('oQhu'),
        ee = a('FIs5'),
        te = U.a.a66b7760,
        ae = U.a.b719e223,
        re = U.a.aed71818,
        ne = function (e) {
          return e
            .map(function (e) {
              return e.id
            })
            .join('-')
        },
        ie = Object(Z.a)(null),
        oe = [],
        ce = Object($.a)(function (e, t, a) {
          return function (r) {
            var n = X(r, t),
              i = t - 2 * r.length - 1,
              o = 0
            return v.a.createElement(
              z.a,
              { style: [se.imageRow, { height: n }] },
              r.map(function (t, c) {
                var u = m()(t.thumbnail_images, 1)[0],
                  l = n / u.height,
                  s = c === r.length - 1 ? i - o : Math.round(u.width * l),
                  h = u.still_image_url,
                  d = u.url
                return (
                  (o += s),
                  v.a.createElement(D, {
                    altText: t.alt_text || te,
                    animatedMediaUrl: d,
                    backgroundColor: Object(A.a)(t.index),
                    height: n,
                    key: t.index,
                    onClick: a(t),
                    shouldAutoPlayGif: e,
                    stillMediaUrl: h,
                    width: s,
                  })
                )
              }),
            )
          }
        }),
        ue = Object($.a)(function (e, t) {
          return v.a.createElement(G.a, { fetchStatus: e, onRequestRetry: t, render: ie })
        }),
        le = (function (e) {
          s()(a, e)
          var t = d()(a)
          function a(e, r) {
            var i
            return (
              n()(this, a),
              (i = t.call(this, e, r)),
              g()(u()(i), '_rootNode', null),
              g()(u()(i), '_render', function () {
                var e = i.props,
                  t = e.items,
                  a = e.query,
                  r = i.state.width,
                  n = t ? i._brickLayout(t, 150, r) : oe
                return r > 0
                  ? v.a.createElement(H.a, {
                      assumedItemHeight: 150,
                      cacheKey: 'gifSearchCategory/'.concat(a),
                      footer: i._getRenderFooter(),
                      identityFunction: ne,
                      items: n,
                      noItemsRenderer: i._renderEmptyItem,
                      onNearEnd: i._handleFetchNext,
                      renderer: i._getRowRenderer(),
                    })
                  : null
              }),
              g()(u()(i), '_getRowRenderer', function () {
                var e = i.props.shouldAutoPlayGif,
                  t = i.state.width
                return ce(e, t, i._handleClickFactory)
              }),
              g()(u()(i), '_handleClickFactory', function (e) {
                return function () {
                  var t = i.props,
                    a = t.addExternalMediaUpload,
                    r = t.addMediaToDM,
                    n = t.fromSearch,
                    o = t.gifSearchKey,
                    c = t.history,
                    u = t.scribeAction,
                    l = t.setMediaMetadata,
                    s = t.updateSingleComposerV2,
                    h = e.alt_text,
                    d = e.found_media_origin,
                    f = e.provider,
                    g = e.original_image.url,
                    y = e.preview_image,
                    p = y.height,
                    v = y.url,
                    b = y.width,
                    S = m()(e.thumbnail_images, 1)[0],
                    _ = e.url,
                    E = a({
                      mediaCategory: o === V.a.Composition ? Y.b.TweetGif : Y.b.DMGif,
                      mediaType: 'image/gif',
                      previewMediaType: 'video/mp4',
                      previewUrl: v,
                      sourceUrl: g,
                      stillMediaUrl: S.still_image_url,
                      width: b,
                      height: p,
                    }).map(function (e) {
                      return e.id
                    }),
                    w = { found_media_origin: d, provider: f, url: _ }
                  h && l(E[0], { defaultAltText: h }),
                    o === V.a.Composition
                      ? s({ updates: { mediaIds: E, gifMetadata: w } })
                      : o === V.a.DMComposition && r(E, w),
                    u({ page: o, section: 'gif_search', element: 'category', action: n ? 'search' : 'select' }),
                    c.go(-2)
                }
              }),
              g()(u()(i), '_renderEmptyItem', function () {
                return v.a.createElement(ee.a, { header: ae, message: re })
              }),
              g()(u()(i), '_getRenderFooter', function () {
                var e = i.props.nextFetchStatus
                return ue(e, i._handleFetchNext)
              }),
              g()(u()(i), '_handleFetch', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.props.query,
                  t = i.props.fetchInitialIfNeeded
                t({ query: e })
              }),
              g()(u()(i), '_handleFetchNext', function () {
                var e = i.props
                ;(0, e.fetchNextIfNeeded)({ query: e.query })
              }),
              g()(u()(i), '_handleResize', function () {
                i._rootNode && i._rootNode instanceof Element && i.setState({ width: i._rootNode.clientWidth })
              }),
              g()(u()(i), '_brickLayout', Object($.a)(J)),
              g()(u()(i), '_setRootNode', function (e) {
                i._rootNode = W.a.findDOMNode(e)
              }),
              (i.state = { width: 0 }),
              i
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.query !== this.props.query && this._handleFetch(this.props.query)
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  window.addEventListener('resize', this._handleResize), this._handleFetch(), this._handleResize()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('resize', this._handleResize)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.initialFetchStatus
                  return v.a.createElement(
                    'div',
                    { ref: this._setRootNode },
                    v.a.createElement(G.a, {
                      fetchStatus: e,
                      onRequestRetry: this._handleFetch,
                      ref: this._setRootNode,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(v.a.Component)
      g()(le, 'defaultProps', { fromSearch: !1 })
      var se = T.a.create(function (e) {
        return {
          emptyItem: {
            display: 'inline-block',
            paddingHorizontal: e.spaces.space12,
            paddingVertical: e.spaces.space32,
          },
          imageRow: { flexDirection: 'row', marginBottom: 2 },
        }
      })
      t.a = N(le)
    },
    TEoO: function (e, t, a) {
      'use strict'
      var r = a('m3Bd'),
        n = a.n(r),
        i = a('ERkP'),
        o = a.n(i),
        c = a('5UID'),
        u = a('3GUV'),
        l = a('iBK2'),
        s = ['accessibilityTitle'],
        h = o.a.createElement(u.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            a = n()(e, s),
            r = o.a.createElement(l.b, a)
          return t ? o.a.createElement(c.a, { title: t }, r) : r
        }
      ;(d.defaultProps = { footer: h }), (t.a = d)
    },
    XOY5: function (e, t, a) {
      'use strict'
      t.a = { gifSearchSearchInput: 'gifSearchSearchInput', gifSearchGifImage: 'gifSearchGifImage' }
    },
    XYn1: function (e, t, a) {
      'use strict'
      a.r(t)
      var r = a('ERkP'),
        n = a.n(r),
        i = a('ddV6'),
        o = a.n(i),
        c = a('yiKp'),
        u = a.n(c),
        l = (a('2G9S'), a('7x/C'), a('JtPf'), a('z84I'), a('zh9S')),
        s = a('pX0s'),
        h = a('lnti'),
        d = a('hqKg'),
        f = a('oEGd'),
        g = s.a,
        y = Object(d.createSelector)(
          function (e) {
            return g.selectItems(e)
          },
          function (e) {
            return g.selectInitialFetchStatus(e)
          },
          function (e, t) {
            return {
              categories:
                e &&
                Object(h.a)(
                  e.map(function (e) {
                    return e.display_name ? e : void 0
                  }),
                ),
              initialFetchStatus: t,
            }
          },
        ),
        m = { fetchInitialIfNeeded: g.fetchInitialIfNeeded, fetchNextIfNeeded: g.fetchNextIfNeeded, scribeAction: l.c },
        p = Object(f.g)(y, m),
        v = a('v//M'),
        b = a('jHSc'),
        S = a('x5W0'),
        _ = a('ij+d'),
        E = a('3XMw'),
        w = a.n(E),
        C = a('cm6r'),
        O = a('t62R'),
        I = a('rHpw'),
        x = a('7JQg'),
        P = a('U+bB'),
        k = a('MWbm'),
        M = w.a.c6f5ac52,
        N = n.a.memo(function (e) {
          var t = e.category,
            a = e.gifSearchKey,
            r = e.history,
            i = e.index,
            o = e.withLeftMargin,
            c = t.display_name,
            u = t.original_image.still_image_url,
            l = n.a.useCallback(
              function () {
                var e,
                  n = null === (e = r.location.state) || void 0 === e ? void 0 : e.dmConversationId
                r.push({
                  pathname: ''.concat(_.GifSearchPaths.category, '/').concat(t.id),
                  state: { category: t, gifSearchKey: a, dmConversationId: n },
                })
              },
              [r, t, a],
            )
          return n.a.createElement(
            C.a,
            { onPress: l, style: [G.category, o && G.leftMargin] },
            n.a.createElement(P.a, { source: u, style: [G.categoryImage, { backgroundColor: Object(S.a)(i) }] }),
            n.a.createElement(
              k.a,
              { style: G.categoryNameContainer },
              n.a.createElement(O.b, { color: 'white', size: 'headline1', weight: 'bold' }, c),
            ),
          )
        }),
        G = I.a.create(function (e) {
          return {
            row: { flexDirection: 'row', marginTop: e.spaces.space4 },
            firstRow: { marginTop: 0 },
            category: { height: '10rem', flexGrow: 1 },
            leftMargin: { marginLeft: e.spaces.space4 },
            categoryImage: { flexGrow: 1 },
            categoryNameContainer: {
              position: 'absolute',
              bottom: 0,
              width: '100%',
              padding: e.spaces.space8,
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))',
            },
          }
        }),
        A = Object(x.c)({ element: 'category' })(
          p(function (e) {
            var t,
              a = e.categories,
              r = e.fetchInitialIfNeeded,
              i = e.gifSearchKey,
              c = e.history,
              l = e.initialFetchStatus,
              s = e.location,
              h = e.scribeAction,
              d = e.scribeNamespace,
              f = e.searchBox,
              g = n.a.useCallback(
                function () {
                  r()
                },
                [r],
              ),
              y = null == s || null === (t = s.state) || void 0 === t ? void 0 : t.searchFocused,
              m = n.a.useCallback(
                function () {
                  y || h(u()(u()({}, d), {}, { action: 'cancel' })), c.goBack({ backLocation: '/' })
                },
                [c, y, h, d],
              ),
              p = n.a.useCallback(
                function () {
                  var e = []
                  if (a) for (var t = 0; t < a.length; t += 2) e.push([a[t], a[t + 1]])
                  return n.a.createElement(
                    k.a,
                    null,
                    n.a.Children.toArray(
                      e.map(function (e, t) {
                        var a = o()(e, 2),
                          r = a[0],
                          u = a[1]
                        return n.a.createElement(
                          k.a,
                          { style: [G.row, 0 === t && G.firstRow] },
                          n.a.createElement(N, {
                            category: r,
                            gifSearchKey: i,
                            history: c,
                            index: 2 * t,
                            withLeftMargin: !1,
                          }),
                          u
                            ? n.a.createElement(N, {
                                category: u,
                                gifSearchKey: i,
                                history: c,
                                index: 2 * t + 1,
                                withLeftMargin: !0,
                              })
                            : null,
                        )
                      }),
                    ),
                  )
                },
                [a, i, c],
              )
            return (
              n.a.useEffect(
                function () {
                  g()
                },
                [g],
              ),
              n.a.createElement(
                b.b,
                { documentTitle: M, history: c, middleControl: f, onBackClick: m },
                n.a.createElement(v.a, { fetchStatus: l, onRequestRetry: g, render: p }),
              )
            )
          }),
        ),
        R = a('VrFO'),
        F = a.n(R),
        q = a('Y9Ll'),
        T = a.n(q),
        j = a('1Pcy'),
        L = a.n(j),
        K = a('5Yy7'),
        D = a.n(K),
        V = a('2VqO'),
        B = a.n(V),
        U = a('KEM+'),
        H = a.n(U),
        Y = a('hiCj'),
        Q = a('VAZu'),
        W = a('EP6G'),
        z = a('MLl7'),
        X = w.a.ab468378,
        J = (function (e) {
          D()(a, e)
          var t = B()(a)
          function a() {
            var e
            F()(this, a)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              H()(L()(e), 'state', { shouldAutoPlayGifOverride: null }),
              H()(L()(e), '_handleToggleChange', function (t) {
                e.setState({ shouldAutoPlayGifOverride: t })
              }),
              H()(L()(e), '_renderHeader', function () {
                var t = e.props,
                  a = t.history,
                  r = t.searchBox
                return n.a.createElement(Q.a, { history: a, middleControl: r })
              }),
              e
            )
          }
          return (
            T()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gifSearchKey,
                    a = e.history,
                    r = e.location,
                    i = e.query,
                    o = e.searchBox,
                    c = e.shouldAutoPlayGif,
                    u = this.state.shouldAutoPlayGifOverride,
                    l = Object(z.c)(u, c)
                  return n.a.createElement(
                    b.b,
                    { backButtonType: 'back', documentTitle: X({ query: i }), history: a, middleControl: o },
                    n.a.createElement(Y.a, {
                      location: r,
                      onToggleChange: this._handleToggleChange,
                      shouldAutoPlayGif: l,
                    }),
                    n.a.createElement(W.a, {
                      fromSearch: !0,
                      gifSearchKey: t,
                      history: a,
                      module: s.c,
                      query: i,
                      shouldAutoPlayGif: l,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(n.a.Component),
        Z = Object(x.c)({ element: 'gallery' })(J)
      t.default = function (e) {
        var t = e.gifSearchKey,
          a = e.history,
          r = e.location,
          i = e.searchBox,
          o = e.shouldAutoPlayGif,
          c = r.state && r.state.query
        return c
          ? n.a.createElement(Z, {
              gifSearchKey: t,
              history: a,
              location: r,
              query: c,
              searchBox: i,
              shouldAutoPlayGif: o,
            })
          : n.a.createElement(A, { gifSearchKey: t, history: a, location: r, searchBox: i })
      }
    },
    hiCj: function (e, t, a) {
      'use strict'
      var r = a('VrFO'),
        n = a.n(r),
        i = a('Y9Ll'),
        o = a.n(i),
        c = a('1Pcy'),
        u = a.n(c),
        l = a('5Yy7'),
        s = a.n(l),
        h = a('2VqO'),
        d = a.n(h),
        f = a('KEM+'),
        g = a.n(f),
        y = (a('2G9S'), a('ERkP')),
        m = a.n(y),
        p = a('P1r1'),
        v = a('0KEI'),
        b = a('oEGd'),
        S = {
          createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
            'FOUND_MEDIA_AUTOPLAY_TOGGLE',
          ),
          updateSettings: p.L,
        },
        _ = Object(b.g)(function () {
          return {}
        }, S),
        E = a('3XMw'),
        w = a.n(E),
        C = a('fHOo'),
        O = a('MWbm'),
        I = a('t62R'),
        x = a('CK8+'),
        P = a('rHpw'),
        k = w.a.j7fc4f9b,
        M = (function (e) {
          s()(a, e)
          var t = d()(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(u()(e), '_handleSwitchChanged', function (t) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler,
                  n = a.onToggleChange
                ;(0, a.updateSettings)({ shouldAutoPlayGif: t }).catch(r({ showToast: !0 })), n(t)
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    a = e.shouldAutoPlayGif,
                    r = t.state && t.state.query,
                    n = t.state && t.state.category ? t.state.category.display_name : ''
                  return Object(C.a)() && (r || n)
                    ? m.a.createElement(
                        O.a,
                        { style: N.root },
                        m.a.createElement(I.b, { color: 'gray700' }, k),
                        m.a.createElement(x.a, {
                          accessibilityLabel: k,
                          onValueChange: this._handleSwitchChanged,
                          value: a,
                        }),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(m.a.Component),
        N = P.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between', margin: e.spaces.space12 } }
        })
      t.a = _(M)
    },
    'ij+d': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'GifSearchPaths', function () {
          return Y
        }),
        a.d(t, 'GifSearchScreen', function () {
          return Q
        })
      var r = a('VrFO'),
        n = a.n(r),
        i = a('Y9Ll'),
        o = a.n(i),
        c = a('1Pcy'),
        u = a.n(c),
        l = a('5Yy7'),
        s = a.n(l),
        h = a('2VqO'),
        d = a.n(h),
        f = a('KEM+'),
        g = a.n(f),
        y =
          (a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('3voH'),
          a('KqXw'),
          a('MvUL'),
          a('2G9S'),
          a('ERkP')),
        m = a.n(y),
        p = a('38/B'),
        v = a('hqKg'),
        b = a('H9MA'),
        S = a('zHh/'),
        _ = a('oEGd'),
        E = a('P1r1'),
        w = Object(v.createSelector)(E.g, E.k, b.d, function (e, t, a) {
          return {
            isDataSaverEnabled: t,
            shouldAutoPlayGif: (e.shouldAutoPlayGif || Object(S.a)(a)) && !p.a.reducedMotionEnabled,
          }
        }),
        C = Object(_.c)(w),
        O = a('Y6L+'),
        I = a('3XMw'),
        x = a.n(I),
        P = a('VwDm'),
        k = a('MLl7'),
        M = a('/de5'),
        N = a('5FtR'),
        G = a('wytG'),
        A = a('7JQg'),
        R = a('XOY5'),
        F = a('MWbm'),
        q = a('6OUF'),
        T = a('/yvb'),
        j = a('rHpw'),
        L = a('oQhu'),
        K = a('VY6S'),
        D = a('zCf4'),
        V = x.a.a50ba821,
        B = x.a.a9ae1e78,
        U = Object(G.a)(function () {
          return Promise.resolve().then(a.bind(null, 'XYn1'))
        }),
        H = Object(G.a)(function () {
          return Promise.resolve().then(a.bind(null, 'k5pS'))
        }),
        Y = { category: '/i/foundmedia/category', search: '/i/foundmedia/search' },
        Q = (function (e) {
          s()(a, e)
          var t = d()(a)
          function a(e) {
            var r
            return (
              n()(this, a),
              (r = t.call(this, e)),
              g()(u()(r), 'state', { searchDisabled: !0 }),
              g()(u()(r), '_gifSearchKey', r._getGifSearchKey()),
              g()(
                u()(r),
                '_getScribeNamespace',
                Object(L.a)(function (e) {
                  return { page: e, section: 'gif_search' }
                }),
              ),
              g()(u()(r), '_setTextInputRef', function (e) {
                r._textInputRef = e
              }),
              g()(u()(r), '_handleChange', function (e) {
                var t = e.currentTarget.value
                r._shouldRenderResultsOnChange ? r._goToQueryDebounced(t) : r.setState({ searchDisabled: !t })
              }),
              g()(u()(r), '_handleClear', function () {
                var e = r.props,
                  t = e.history,
                  a = e.isDataSaverEnabled,
                  n = e.location,
                  i = n.pathname.startsWith(Y.category),
                  o = n.pathname === Y.search && n.state && n.state.query
                !a && (i || o) ? t.goBack() : a && r.setState({ searchDisabled: !0 })
              }),
              g()(u()(r), '_handleSubmit', function () {
                var e = r._textInputRef && r._textInputRef.getValue()
                r._goToQuery(e)
              }),
              g()(u()(r), '_handleSearch', function (e) {
                var t = e.currentTarget.value
                r._goToQuery(t)
              }),
              g()(u()(r), '_goToQuery', function (e) {
                var t = r.props,
                  a = t.history,
                  n = t.isDataSaverEnabled,
                  i = t.location,
                  o = {}
                o.pathname = Y.search
                var c = i.state && i.state.query,
                  u = i.pathname === Y.search && !c,
                  l = i.pathname.startsWith(Y.category) || (i.pathname === Y.search && c),
                  s = !n && l,
                  h = i.state && i.state.dmConversationId
                e ? ((o.state = { dmConversationId: h, query: e }), u ? a.push(o) : a.replace(o)) : s && a.goBack()
              }),
              (r._goToQueryDebounced = Object(K.a)(function () {
                var e
                return (e = r)._goToQuery.apply(e, arguments)
              }, 500)),
              (r._shouldRenderResultsOnChange = !r.props.isDataSaverEnabled),
              r
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    a = e.location,
                    r = e.shouldAutoPlayGif,
                    n = {
                      gifSearchKey: this._gifSearchKey,
                      history: t,
                      location: a,
                      searchBox: this._renderSearchBox(),
                      shouldAutoPlayGif: r,
                    },
                    i = this._gifSearchKey ? this._gifSearchKey : void 0
                  return this._gifSearchKey
                    ? m.a.createElement(
                        A.b,
                        { namespace: this._getScribeNamespace(i) },
                        m.a.createElement(
                          D.d,
                          null,
                          m.a.createElement(D.b, { exact: !0, path: Y.search }, m.a.createElement(U, n)),
                          m.a.createElement(
                            D.b,
                            { exact: !0, path: ''.concat(Y.category, '/').concat(O.o) },
                            m.a.createElement(H, n),
                          ),
                          m.a.createElement(D.b, { component: M.b }),
                        ),
                      )
                    : m.a.createElement(N.a, { to: '/' })
                },
              },
              {
                key: '_getGifSearchKey',
                value: function () {
                  var e = this.props.location.state || {},
                    t = e.gifSearchKey,
                    a = e.gifSearchKeySource
                  return t || (a && Object(k.b)(a) && a)
                },
              },
              {
                key: '_getQueryOrCategory',
                value: function () {
                  var e = this.props.location,
                    t = e.state && e.state.query,
                    a = e.state && e.state.category ? e.state.category.display_name : ''
                  return t || a
                },
              },
              {
                key: '_renderSearchBox',
                value: function () {
                  var e = this.state.searchDisabled,
                    t = this._getQueryOrCategory()
                  return m.a.createElement(
                    F.a,
                    { style: W.searchContainer },
                    m.a.createElement(q.a, {
                      Icon: P.a,
                      autoFocus: !0,
                      defaultValue: t,
                      key: t,
                      onChange: this._handleChange,
                      onClear: this._handleClear,
                      onSubmitEditing: this._handleSearch,
                      placeholder: V,
                      ref: this._setTextInputRef,
                      style: W.searchInput,
                      testID: R.a.gifSearchSearchInput,
                      withClearButton: !0,
                    }),
                    this._shouldRenderResultsOnChange
                      ? null
                      : m.a.createElement(
                          T.a,
                          {
                            disabled: e,
                            onPress: this._handleSubmit,
                            size: 'small',
                            style: W.searchButton,
                            type: 'brandFilled',
                          },
                          B,
                        ),
                  )
                },
              },
            ]),
            a
          )
        })(m.a.Component),
        W = j.a.create(function (e) {
          return {
            searchContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', marginVertical: e.spaces.space8 },
            searchInput: { height: '100%' },
            searchButton: { marginStart: e.spaces.space12 },
          }
        })
      t.default = C(Q)
    },
    k5pS: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'GifSearchCategory', function () {
          return I
        })
      var r = a('VrFO'),
        n = a.n(r),
        i = a('Y9Ll'),
        o = a.n(i),
        c = a('1Pcy'),
        u = a.n(c),
        l = a('5Yy7'),
        s = a.n(l),
        h = a('2VqO'),
        d = a.n(h),
        f = a('KEM+'),
        g = a.n(f),
        y = (a('2G9S'), a('ERkP')),
        m = a.n(y),
        p = a('hiCj'),
        v = a('pX0s'),
        b = a('jHSc'),
        S = a('EP6G'),
        _ = a('3XMw'),
        E = a.n(_),
        w = a('7JQg'),
        C = a('MLl7'),
        O = E.a.f5ff0d6f,
        I = (function (e) {
          s()(a, e)
          var t = d()(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(u()(e), 'state', { shouldAutoPlayGifOverride: null }),
              g()(u()(e), '_handleToggleChange', function (t) {
                e.setState({ shouldAutoPlayGifOverride: t })
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gifSearchKey,
                    a = e.history,
                    r = e.location,
                    n = e.searchBox,
                    i = e.shouldAutoPlayGif,
                    o = r.state && r.state.category,
                    c = o && o.display_name,
                    u = this.state.shouldAutoPlayGifOverride,
                    l = Object(C.c)(u, i)
                  return m.a.createElement(
                    b.b,
                    { backButtonType: 'back', documentTitle: O({ category: c }), history: a, middleControl: n },
                    m.a.createElement(p.a, {
                      location: r,
                      onToggleChange: this._handleToggleChange,
                      shouldAutoPlayGif: l,
                    }),
                    !!o &&
                      m.a.createElement(S.a, {
                        gifSearchKey: t,
                        history: a,
                        module: v.b,
                        query: o.id,
                        shouldAutoPlayGif: l,
                      }),
                  )
                },
              },
            ]),
            a
          )
        })(m.a.Component)
      t.default = Object(w.c)({ element: 'gallery' })(I)
    },
    pX0s: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return E
      }),
        a.d(t, 'b', function () {
          return w
        }),
        a.d(t, 'c', function () {
          return C
        })
      var r = a('KEM+'),
        n = a.n(r),
        i = a('yiKp'),
        o = a.n(i),
        c = a('RhWx'),
        u = a.n(c),
        l = (a('LW0h'), a('7x/C'), a('2G9S'), a('KqXw'), a('LJOr'), a('9OUN')),
        s = a('m3Bd'),
        h = a.n(s),
        d = (a('JtPf'), a('oEOe')),
        f = a('kGix'),
        g = 'gifSearch',
        y = 'rweb/'.concat(g),
        m = ['fetchStatus'],
        p = {},
        v = { cursor: {}, items: [], initialFetchStatus: f.a.NONE, nextFetchStatus: f.a.NONE },
        b = function (e) {
          var t = e.defaultQuery,
            a = e.getApiMethod,
            r = e.getParams,
            i = e.localNamespace,
            c = e.mergeNewItems,
            u = d.a(''.concat(y, '/').concat(i), 'FETCH'),
            l = function (e, t, a) {
              var r = a.fetchStatus,
                i = h()(a, m),
                c = e[t] || {},
                u = (c.cursor || {}).next ? 'nextFetchStatus' : 'initialFetchStatus'
              return o()(o()({}, e), {}, n()({}, t, o()(o()(o()(o()({}, v), c), i), {}, n()({}, u, r))))
            },
            s = function (e) {
              var t = e.cursor,
                n = e.query
              return function (e, i, o) {
                var c = o.api
                return d.b(e, { request: a(c), params: r(t, n) })({ actionTypes: u, meta: { query: n } })
              }
            },
            g = function (e) {
              var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
              return (e.gifSearch[i] || {})[a] || {}
            }
          return {
            actionTypes: u,
            fetchInitialIfNeeded: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = e.query,
                r = void 0 === a ? t : a
              return function (e, t, a) {
                a.api
                var n = g(t(), r)
                return n.initialFetchStatus === f.a.LOADING || n.items ? Promise.resolve() : e(s({ query: r }))
              }
            },
            fetchNextIfNeeded: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = e.query,
                r = void 0 === a ? t : a
              return function (e, t, a) {
                a.api
                var n = g(t(), r),
                  i = n.cursor,
                  o = void 0 === i ? {} : i
                return n.nextFetchStatus !== f.a.LOADING && o.next
                  ? e(s({ query: r, cursor: o.next }))
                  : Promise.resolve()
              }
            },
            reducer: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
                t = arguments.length > 1 ? arguments[1] : void 0
              switch (t.type) {
                case u.REQUEST:
                  var a = t.meta.query
                  return l(e, a, { fetchStatus: f.a.LOADING })
                case u.FAILURE:
                  var r = t.meta.query
                  return l(e, r, { fetchStatus: f.a.FAILED })
                case u.SUCCESS:
                  var n = t.payload.cursor,
                    i = t.meta.query,
                    o = (e[i] || {}).items || []
                  return l(e, i, { cursor: n, fetchStatus: f.a.LOADED, items: c(o, t.payload) })
                default:
                  return e
              }
            },
            selectInitialFetchStatus: function (e, t) {
              return g(e, t).initialFetchStatus || f.a.NONE
            },
            selectItems: function (e, t) {
              return g(e, t).items
            },
            selectNextFetchStatus: function (e, t) {
              return g(e, t).nextFetchStatus || f.a.NONE
            },
            selectQueryState: g,
          }
        },
        S = a('Ssj5'),
        _ = function (e) {
          return e.filter(function (e) {
            var t = e.original_image,
              a = (t = void 0 === t ? {} : t).height,
              r = t.width
            return a > 0 && r > 0
          })
        },
        E = b({
          defaultQuery: 'categories',
          getApiMethod: function (e) {
            return e.GifSearch.categories
          },
          getParams: function (e) {
            return e ? { cursor: e } : {}
          },
          mergeNewItems: function (e, t) {
            var a
            return [].concat(
              u()(e),
              u()((null == t || null === (a = t.data) || void 0 === a ? void 0 : a.groups) || []),
            )
          },
          localNamespace: 'categories',
        }),
        w = b({
          getApiMethod: function (e) {
            return e.GifSearch.category
          },
          getParams: function (e, t) {
            return o()({ category: t }, e ? { cursor: e } : {})
          },
          mergeNewItems: function (e, t) {
            var a
            return [].concat(
              u()(e),
              u()(_((null == t || null === (a = t.data) || void 0 === a ? void 0 : a.items) || [])),
            )
          },
          localNamespace: 'category',
        }),
        C = b({
          getApiMethod: function (e) {
            return e.GifSearch.search
          },
          getParams: function (e, t) {
            return o()({ q: t }, e ? { cursor: e } : {})
          },
          mergeNewItems: function (e, t) {
            var a
            return [].concat(
              u()(e),
              u()(_((null == t || null === (a = t.data) || void 0 === a ? void 0 : a.items) || [])),
            )
          },
          localNamespace: 'search',
        }),
        O = Object(l.c)({ categories: E.reducer, category: w.reducer, search: C.reducer })
      S.a.register(n()({}, g, O))
    },
    x5W0: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
      })
      var r = a('rHpw').a.theme.colors,
        n = r.blue500,
        i = r.green500,
        o = r.magenta500,
        c = [n, i, r.orange500, r.purple500, o, r.yellow500],
        u = function () {
          return Math.floor(Math.random() * c.length + 1)
        },
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u()
          return c[e % c.length]
        }
    },
  },
])
//# sourceMappingURL=WIPED
