;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '0ULw': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '1tGk': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'screen_EditMembershipType_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'membership_settings',
              plural: !1,
              selections: [
                {
                  kind: 'InlineDataFragmentSpread',
                  name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
                  selections: [
                    {
                      kind: 'InlineFragment',
                      selections: [
                        (a = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      ],
                      type: 'CommunityOpenMembershipSettings',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        a,
                        { alias: null, args: null, kind: 'ScalarField', name: 'invites_policy', storageKey: null },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'join_approval_policy',
                          storageKey: null,
                        },
                      ],
                      type: 'CommunityRestrictedMembershipSettings',
                      abstractKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (t.default = r)
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        i = n('yLYC'),
        l = n('Ud88'),
        o = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, n) {
        o()
        var c,
          m = l(),
          d = t.fetchKey,
          y = t.fetchPolicy,
          p = t.source,
          f = t.variables,
          g = t.networkCacheConfig,
          b = i(e, f, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && a(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: s(m, b.request.identifier, function () {
                return m === t.environment && null != p
                  ? m.executeWithSource({ operation: b, source: p })
                  : m.execute({ operation: b })
              }),
              fetchPolicy: y,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(m, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && m === t.environment ? p.ifEmpty(h) : (t.environment, h),
            fetchKey: d,
            fetchPolicy: y,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(c)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        i = a.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          r(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '2fn4': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityDescriptionToggleQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityDescriptionToggle_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'CommunityDescriptionToggleQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '-6vJGc53mXOIPSWTq8JgMw',
            metadata: {},
            name: 'CommunityDescriptionToggleQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '05581b25a196bea06f3f6c130610a5b9'), (t.default = i)
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('fyvP'),
        l = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(o.a, { style: c.root }, r.a.createElement(i.a, e))
      }
      var c = l.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '8sFp': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return d
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        l = n.n(i),
        o = n('mw9i'),
        c = n('FIs5'),
        s = n('rHpw'),
        u = l.a.c2117be6,
        m = l.a.c2c4dad3
      function d() {
        return r.a.createElement(o.a, { style: y.root }, r.a.createElement(c.a, { header: u, message: m }))
      }
      var y = s.a.create(function (e) {
        return {
          root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
        }
      })
    },
    '8vG3': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'cell_CommunityJoinRequest',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'UserCommunityRelationship',
            kind: 'LinkedField',
            name: 'user_relationship',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'UserResults',
                kind: 'LinkedField',
                name: 'user_results',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ApiUser',
                            kind: 'LinkedField',
                            name: 'legacy',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: 'blocking', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'following', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'muting', storageKey: null },
                              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'profile_image_url_https',
                                storageKey: null,
                              },
                              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'User',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'CommunityJoinRequestActions',
            kind: 'LinkedField',
            name: 'actions',
            plural: !1,
            selections: [{ args: null, kind: 'FragmentSpread', name: 'controls_CommunityJoinRequestActions' }],
            storageKey: null,
          },
        ],
        type: 'CommunityJoinRequest',
        abstractKey: null,
        hash: '3a11674bc1557a220eb3c68ecd6f9e0a',
      }
      t.default = a
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        r = n('ERkP'),
        i = n('Ud88'),
        l = n('K1lQ').commitMutation,
        o = r.useState,
        c = r.useEffect,
        s = r.useRef,
        u = r.useCallback,
        m = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = i(),
          r = m(),
          d = s(n),
          y = s(e),
          p = s(new Set()),
          f = o(!1),
          g = f[0],
          b = f[1],
          h = u(
            function (t) {
              d.current === n && y.current === e && (p.current.delete(t), r.current && b(p.current.size > 0))
            },
            [n, r, e],
          )
        c(
          function () {
            ;(d.current === n && y.current === e) ||
              ((p.current = new Set()), r.current && b(!1), (d.current = n), (y.current = e))
          },
          [n, r, e],
        )
        var v = u(
          function (i) {
            var l = t(
              n,
              (0, a.default)(
                (0, a.default)({}, i),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    h(l), i.onCompleted && i.onCompleted(e, t)
                  },
                  onError: function (e) {
                    h(l), i.onError && i.onError(e)
                  },
                  onUnsubscribe: function () {
                    h(l), i.onUnsubscribe && i.onUnsubscribe()
                  },
                },
              ),
            )
            return p.current.add(l), r.current && b(!0), l
          },
          [h, t, n, r, e],
        )
        return [v, g]
      }
    },
    AfjF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('eb3s'),
        l = n('3XMw'),
        o = n.n(l),
        c = o.a.d45ae5e0,
        s = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return r.a.createElement(i.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: c,
            onCancel: t,
            onConfirm: n,
            text: s,
          })
        }
    },
    BX8b: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityRules_community',
          selections: [
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [
                a,
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (t.default = r)
    },
    Bg9b: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M22.498 6.008c-.02-.718-.537-1.326-1.24-1.447-4.102-.626-8.048-3.065-8.468-3.328-.44-.293-1.074-.324-1.572 0-.04.02-4.19 2.672-8.497 3.33-.683.12-1.2.728-1.22 1.467 0 .495.03 12.174 9.933 16.85.195.08.39.12.566.12.243 0 .458-.07.595-.132 10.118-4.776 9.913-16.79 9.903-16.86zm-11.23 15.1C2.984 16.634 2.964 6.484 2.944 6.058c3.516-.535 6.876-2.286 8.32-3.106v18.156h.002zm1.464 0V2.952c1.465.84 4.815 2.58 8.302 3.117 0 .1.214 10.453-8.302 15.038z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    DCZs: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useCommunityTheme_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '8e7a3fa0cf4dcd04e0d8c3c8397e274b',
      }
      t.default = a
    },
    'DV/y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityInviteScreen', function () {
          return ae
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        l = n.n(i),
        o = n('ddV6'),
        c = n.n(o),
        s = (n('KqXw'), n('WNMA'), n('LW0h'), n('7x/C'), n('z84I'), n('1Iuc'), n('ERkP')),
        u = n.n(s),
        m = n('+Kfv'),
        d = n('eSoz'),
        y = n('rxPX'),
        p = n('0KEI'),
        f = function (e, t) {
          var n = t.match.params.communityId
          return n ? d.c.select(e, n) : void 0
        },
        g = Object(y.a)()
          .propsFromState(function () {
            return { community: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_INVITE_SCREEN',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'invite' }),
        b = n('jHSc'),
        h = n('3XMw'),
        v = n.n(h),
        E = n('/yvb'),
        _ = (n('2G9S'), n('KhuB')),
        C = n('li/m'),
        k = function (e, t) {
          return t.communityId && t.userId ? _.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        },
        S = Object(y.a)()
          .propsFromState(function () {
            return { inviteActionResult: k }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'INVITE_TO_COMMUNITY_BUTTON',
              ),
              inviteToCommunity: C.a,
            }
          }),
        I = v.a.cd133485,
        w = v.a.hb1e378e,
        T = v.a.bcd6bb0d,
        F = 'primaryFilled',
        x = { viewType: 'invite' }
      var M = S(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            a = e.inviteActionResult,
            r = e.inviteToCommunity,
            i = e.onInvite,
            l = e.onInviteActionResultChange,
            o = e.userId,
            c = e.viewerInvited,
            s = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return I
              switch (e.reason) {
                case 'UserIsMember':
                  return T
                case 'UserIsInvited':
                  return w
                default:
                  return I
              }
            })(a),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return F
              switch (e.reason) {
                case 'UserIsMember':
                  return F
                default:
                  return 'primaryOutlined'
              }
            })(a)
          u.a.useEffect(
            function () {
              a && l(o, a)
            },
            [a, o, l],
          )
          var d = 'UserCommunityInviteAction' === (null == a ? void 0 : a.__typename)
          return !d && !c
            ? null
            : u.a.createElement(
                E.a,
                {
                  accessibilityLabel: s,
                  behavioralEventContext: x,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      r(t, o)
                        .then(function () {
                          return i && i(o)
                        })
                        .catch(n())
                  },
                  size: 'small',
                  type: m,
                },
                s,
              )
        }),
        R = n('5FtR'),
        L = n('4e/K'),
        K = n('MWbm'),
        O = n('4zmP'),
        A = n('t62R'),
        N = n('FIs5'),
        j = n('rHpw'),
        P = n('GZwR'),
        H = v.a.b139b549,
        B = v.a.dfddd842,
        D = v.a.cf4898a0,
        U = v.a.a3b3939a,
        z = v.a.db4f0cc9,
        V = v.a.h252ede6,
        q = v.a.a5cd93f9,
        W = v.a.ba5a88e3,
        Q = v.a.i6568549,
        X = v.a.b772cd65,
        J = v.a.b4f16d00,
        G = v.a.ja1387a7,
        Y = v.a.b92a21d8,
        Z = v.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        te = [P.a.CommunityUsers],
        ne = { viewType: 'community' }
      function ae(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          i = (t || {}).invites_result,
          o = e.match.params.communityId || '',
          s = u.a.useState(''),
          d = c()(s, 2),
          y = d[0],
          p = d[1],
          f = u.a.useState({}),
          g = c()(f, 2),
          h = g[0],
          v = g[1],
          _ = u.a.useState({}),
          C = c()(_, 2),
          k = C[0],
          S = C[1]
        u.a.useEffect(
          function () {
            o && a(o).catch(n())
          },
          [o, n, a],
        )
        var I,
          w,
          T = u.a.useMemo(
            function () {
              return y.length > 0 || !t
                ? ee
                : 'CommunityInvites' === i.__typename
                ? i.users_to_invite_slice.items.map(P.g).filter(Boolean)
                : ee
            },
            [t, i, y.length],
          ),
          F = u.a.useCallback(
            function (e, t) {
              v(function (n) {
                return l()(l()({}, n), {}, r()({}, e, t))
              })
            },
            [v],
          ),
          x = u.a.useCallback(
            function (e) {
              S(function (t) {
                return l()(l()({}, t), {}, r()({}, e, !0))
              })
            },
            [S],
          ),
          j = o
            ? u.a.createElement(R.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(R.a, { to: '/' }),
          ae = u.a.createElement(
            E.a,
            {
              behavioralEventContext: $,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            X,
          )
        return 'CommunityInvitesUnavailable' === (null == i ? void 0 : i.__typename)
          ? j
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ne },
              u.a.createElement(
                b.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ae, subtitle: B, title: H },
                ((I = (null == i ? void 0 : i.remaining_invite_count) || 0),
                (w = I > 999),
                'CommunityInvites' === (null == i ? void 0 : i.__typename) &&
                  !w &&
                  u.a.createElement(
                    K.a,
                    { style: re.callout },
                    u.a.createElement(O.a, { text: Q({ remaining_invite_count: I }) }),
                  )),
                u.a.createElement(L.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: te,
                  getItemDisabledMessage: function (e) {
                    var t
                    if ('user' === e.type) {
                      var n = e.data,
                        a = n.id_str,
                        r = n.screen_name,
                        i = h[a]
                      if ('UserCommunityInviteActionUnavailable' === (null == i ? void 0 : i.__typename))
                        switch (i.reason) {
                          case 'UserIsInvited':
                            return U({ screen_name: r })
                          case 'UserIsMember':
                            return z({ screen_name: r })
                          case 'ViewerOutOfInvites':
                            return V
                          default:
                            return null !== (t = i.message) && void 0 !== t ? t : q({ screen_name: r })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var t = e.data.id_str,
                        n = h[t]
                      return !k[t] && 'UserCommunityInviteAction' !== (null == n ? void 0 : n.__typename)
                    }
                    return !0
                  },
                  injectedItems: T,
                  inputStyle: re.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    p(e)
                  },
                  placeholder: D,
                  renderEmptyState: function () {
                    return u.a.createElement(N.a, { header: J, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        K.a,
                        { style: re.input },
                        u.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, W),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return u.a.createElement(N.a, { header: Y({ query: y }), message: Z })
                  },
                  renderUserDecoration: function (e) {
                    var t = e.userId
                    return u.a.createElement(M, {
                      communityId: o,
                      onInvite: x,
                      onInviteActionResultChange: F,
                      userId: t,
                      viewerInvited: k[t],
                    })
                  },
                  rounded: !0,
                  shouldAutoFocus: !0,
                  shouldFocusOnClear: !0,
                  source: P.d.CommunityInvites,
                  style: re.input,
                }),
              ),
            )
      }
      var re = j.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        ie = g(ae)
      t.default = ie
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        f = n('ERkP'),
        g = n.n(f),
        b = n('jtO7'),
        h = n('eb3s'),
        v = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(c()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              p()(c()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              p()(c()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    i = e.confirmationSheetHeadline,
                    l = e.confirmationSheetText,
                    o = e.label
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(b.a, { align: t, color: n, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? g.a.createElement(h.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: i,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: l,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      p()(v, 'defaultProps', { color: 'red500', align: 'center' })
    },
    Eh7u: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c,
        s,
        u,
        m,
        d = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityFacePile_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'UserResults',
              kind: 'LinkedField',
              name: 'members_facepile_results',
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'result',
                  plural: !1,
                  selections: [
                    (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'ApiUser',
                          kind: 'LinkedField',
                          name: 'legacy',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'profile_image_url_https',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: 'User',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        (i = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                        {
                          alias: null,
                          args: null,
                          concreteType: 'TimelineRichText',
                          kind: 'LinkedField',
                          name: 'unavailable_message',
                          plural: !1,
                          selections: [
                            { alias: null, args: null, kind: 'ScalarField', name: 'alignment', storageKey: null },
                            {
                              alias: null,
                              args: null,
                              concreteType: 'TimelineRichTextEntity',
                              kind: 'LinkedField',
                              name: 'entities',
                              plural: !0,
                              selections: [
                                {
                                  alias: 'fromIndex',
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'from_index',
                                  storageKey: null,
                                },
                                {
                                  alias: 'toIndex',
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'to_index',
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'format', storageKey: null },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: 'LinkedField',
                                  name: 'ref',
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: 'type',
                                      args: null,
                                      kind: 'ScalarField',
                                      name: '__typename',
                                      storageKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: (o = [
                                        (l = {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'text',
                                          storageKey: null,
                                        }),
                                      ]),
                                      type: 'TimelineRichTextCashtag',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                                        (c = {
                                          alias: null,
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'url',
                                          storageKey: null,
                                        }),
                                      ],
                                      type: 'TimelineRichTextList',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: o,
                                      type: 'TimelineRichTextHashtag',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        c,
                                        {
                                          alias: 'urlType',
                                          args: null,
                                          kind: 'ScalarField',
                                          name: 'url_type',
                                          storageKey: null,
                                        },
                                        {
                                          alias: 'urtEndpointOptions',
                                          args: null,
                                          concreteType: 'TimelineUrtEndpointOptions',
                                          kind: 'LinkedField',
                                          name: 'urt_endpoint_options',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: 'cacheId',
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'cache_id',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'subtitle',
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'title',
                                              storageKey: null,
                                            },
                                            {
                                              alias: 'requestParams',
                                              args: null,
                                              concreteType: 'RequestParamsEntry',
                                              kind: 'LinkedField',
                                              name: 'request_params',
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: 'ScalarField',
                                                  name: 'key',
                                                  storageKey: null,
                                                },
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: 'ScalarField',
                                                  name: 'value',
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: 'TimelineUrl',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [
                                        (m = {
                                          alias: null,
                                          args: null,
                                          concreteType: 'UserResults',
                                          kind: 'LinkedField',
                                          name: 'user_results',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType: null,
                                              kind: 'LinkedField',
                                              name: 'result',
                                              plural: !1,
                                              selections: [
                                                r,
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: 'ApiUser',
                                                      kind: 'LinkedField',
                                                      name: 'legacy',
                                                      plural: !1,
                                                      selections: [
                                                        (s = {
                                                          alias: null,
                                                          args: null,
                                                          kind: 'ScalarField',
                                                          name: 'screen_name',
                                                          storageKey: null,
                                                        }),
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    a,
                                                  ],
                                                  type: 'User',
                                                  abstractKey: null,
                                                },
                                                {
                                                  kind: 'InlineFragment',
                                                  selections: [
                                                    (u = {
                                                      alias: 'reason',
                                                      args: null,
                                                      kind: 'ScalarField',
                                                      name: 'unavailable_reason',
                                                      storageKey: null,
                                                    }),
                                                    i,
                                                  ],
                                                  type: 'UserUnavailable',
                                                  abstractKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        }),
                                      ],
                                      type: 'TimelineRichTextUser',
                                      abstractKey: null,
                                    },
                                    {
                                      kind: 'InlineFragment',
                                      selections: [s, m],
                                      type: 'TimelineRichTextMention',
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            { alias: null, args: null, kind: 'ScalarField', name: 'rtl', storageKey: null },
                            l,
                          ],
                          storageKey: null,
                        },
                        u,
                      ],
                      type: 'UserUnavailable',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'CommunityMemberCount_community' },
            { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(d.hash = 'e2457666463c59c1a72f329db4ba964b'), (t.default = d)
    },
    FSMj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ToolsPeopleScreen', function () {
          return E
        })
      n('vrRf')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('XtoV'),
        l = n('rxPX'),
        o = Object(l.a)().withAnalytics({ page: 'communities', section: 'people' }),
        c = n('3XMw'),
        s = n.n(c),
        u = n('gDCe'),
        m = n('yoO3'),
        d = n('k/OQ'),
        y = n('mWs5'),
        p = n('MWbm'),
        f = n('krnS'),
        g = n('zCf4'),
        b = s.a.dc6ce7b4,
        h = s.a.f8321d82,
        v = s.a.ga2aa43c,
        E = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.location,
            l = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            o = l ? h : v,
            c = r.a.useMemo(
              function () {
                var e = n
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/members'), state: a.state },
                        label: h,
                        key: h,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/moderators'), state: a.state },
                        label: v,
                        key: v,
                      },
                    ]
                  : []
                return r.a.createElement(d.a, { accessibilityLabel: o, links: e })
              },
              [n, o, a],
            )
          return r.a.createElement(
            m.a,
            null,
            r.a.createElement(
              y.a,
              { communityId: t.id_str, rightControl: l ? r.a.createElement(i.a, { community: t }) : void 0, title: b },
              r.a.createElement(
                p.a,
                null,
                c,
                r.a.createElement(
                  g.d,
                  null,
                  r.a.createElement(
                    g.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                    r.a.createElement(f.b, {
                      communityId: t.id_str,
                      mode: f.a.Members,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                  r.a.createElement(
                    g.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                    r.a.createElement(u.a, { community: t }),
                    r.a.createElement(f.b, {
                      communityId: t.id_str,
                      mode: f.a.Moderators,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                ),
              ),
            ),
          )
        }
      t.default = o(E)
    },
    'Fq/Z': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeedbackType', function () {
          return X
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return J
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        l = n.n(i),
        o = (n('yH/f'), n('KqXw'), n('WNMA'), n('ERkP')),
        c = n.n(o),
        s = n('v6aA'),
        u = n('+Kfv'),
        m = n('es0u'),
        d = (n('ZVkB'), n('ulNE'), n('urw/'), n('jQ3i'), n('x4t0'), n('eSoz')),
        y = n('XOJV'),
        p = n('G6rE'),
        f = n('rxPX'),
        g = function (e, t) {
          var n = t.match.params.tweetId
          return n ? y.a.selectHydrated(e, n) : void 0
        },
        b = function (e, t) {
          var n = t.match.params
          return Object.entries(n).flat().includes('tweetId') ? X.HiddenTweet : X.RemovedMember
        },
        h = function (e, t) {
          if (b(0, t) === X.HiddenTweet) {
            var n,
              a = t.match.params.tweetId,
              r = a ? y.a.selectHydrated(e, a) : void 0,
              i = null == r || null === (n = r.community_relationship) || void 0 === n ? void 0 : n.community
            return i ? d.c.select(e, i) : void 0
          }
          var l = t.match.params.communityId
          return l ? d.c.select(e, l) : void 0
        },
        v = function (e, t) {
          if (b(0, t) === X.HiddenTweet) {
            var n = t.match.params.tweetId
            return n ? y.a.selectFetchStatus(e, n) : void 0
          }
          var a = t.match.params.communityId
          return a ? d.c.selectFetchStatus(e, a) : void 0
        },
        E = Object(f.a)()
          .propsFromState(function () {
            return { community: h, fetchStatus: v, loggedInUser: p.e.selectLoggedInUser, tweet: g, type: b }
          })
          .propsFromActions(function () {
            return { fetchCommunity: d.c.fetchOne, fetchTweet: y.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        _ = (n('ho0z'), n('PKbs')),
        C = n('egQk'),
        k = n('3XMw'),
        S = n.n(k),
        I = n('/de5'),
        w = n('b5s6'),
        T = n('MWbm'),
        F = n('X00g'),
        x = n('t62R'),
        M = n('4zmP'),
        R = n('0yYu'),
        L = n('6vad'),
        K = n('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        N = S.a.a5baa7d1,
        j = S.a.icc32e3d,
        P = F.a.getCommunityTheme('Default'),
        H = K.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: K.a.theme.colors.gray50,
              borderRadius: K.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: K.a.theme.spacesPx.space16,
              marginBottom: K.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: K.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        B = function (e) {
          var t,
            n = e.community,
            a = e.history,
            r = e.location,
            i = e.match,
            l = e.tweet,
            o = e.type,
            s = { history: a, location: r, match: i },
            u = null == l ? void 0 : l.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (t = (function (e) {
                  switch (e) {
                    case X.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case X.RemovedMember:
                      return null == n ? void 0 : n.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === t
                ? void 0
                : t.name) || '',
            y = null == n ? void 0 : n.name,
            p = null == n ? void 0 : n.rules,
            f = (null == n ? void 0 : n.theme) || P,
            g = F.a.getCommunityUIColorName(f),
            b = Object(C.a)({ communityName: y })
          return f && null != p && p.length
            ? c.a.createElement(
                T.a,
                { style: H.tweetInfo },
                c.a.createElement(
                  T.a,
                  { style: H.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case X.HiddenTweet:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            x.b,
                            { color: g, size: 'subtext1', style: H.communityTitle, weight: 'bold' },
                            y,
                          ),
                          c.a.createElement(
                            x.b,
                            { size: 'headline1', style: [H.titleText, H.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          c.a.createElement(w.a, {
                            style: H.tweetContainer,
                            tweetId: null == l ? void 0 : l.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          c.a.createElement(M.a, { headline: A, text: d }),
                          c.a.createElement(x.b, { style: H.helpText }, N),
                        )
                      case X.RemovedMember:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            x.b,
                            { size: 'headline1', style: H.titleText, weight: 'heavy' },
                            j({ communityName: y }),
                          ),
                          c.a.createElement(
                            T.a,
                            { style: H.removedMemberReason },
                            c.a.createElement(x.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                c.a.createElement(R.a, null),
                c.a.createElement(L.b, { text: b }),
                c.a.createElement(_.b, {
                  badgeStyle: H.badges,
                  ruleContainerStyle: H.rules,
                  rules: p,
                  theme: f,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : c.a.createElement(I.b, s)
        },
        D = n('G1WX'),
        U = n('yoO3'),
        z = n('VS6U'),
        V = n('0KEI'),
        q = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        W = S.a.jf99d610,
        Q = { viewType: 'community' },
        X = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function J(e) {
        var t = c.a.useContext(s.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          a = e.fetchCommunity,
          i = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          p = e.type,
          f = l()(e, q),
          g = function (e) {
            var t, a
            switch (e) {
              case X.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == y ? void 0 : y.user.id_str)),
                  _handleRetry: C,
                  shouldRenderFeedback: Boolean(
                    null == y || null === (t = y.community_relationship) || void 0 === t
                      ? void 0
                      : t.moderation_state.rule,
                  ),
                }
              case X.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == n ? void 0 : n.viewerViolatedRule)),
                  _handleRetry: k,
                  shouldRenderFeedback: Boolean(
                    'CommunityUserRemovedModerationState' ===
                      (null == n || null === (a = n.viewer_relationship) || void 0 === a
                        ? void 0
                        : a.moderation_state.__typename),
                  ),
                }
              default:
                return {}
            }
          },
          b = e.match.params,
          h = b.communityId,
          v = b.tweetId,
          E = Object(V.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          _ = Object(V.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          C = c.a.useEffect(
            function () {
              v && o(v).catch(E)
            },
            [E, o, v],
          ),
          k = c.a.useEffect(
            function () {
              h && a(h).catch(_)
            },
            [h, _, a],
          ),
          S = c.a.createElement(I.b, f)
        return c.a.createElement(D.a, {
          fetchStatus: i,
          onRequestRetry: g(p)._handleRetry,
          render: function () {
            var n = g(p),
              a = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              i = n.isAuthorizedViewer,
              l = n.shouldRenderFeedback
            return i && t
              ? c.a.createElement(
                  u.a,
                  { behavioralEventContext: Q },
                  l
                    ? c.a.createElement(
                        U.a,
                        { behavioralEventViewType: a },
                        c.a.createElement(z.a, {
                          backLocation: '/notifications',
                          history: f.history,
                          primaryContent: c.a.createElement(B, r()({}, e, { type: p })),
                          sidebarContent: c.a.createElement(m.a, null),
                          title: W,
                        }),
                      )
                    : S,
                )
              : S
          },
        })
      }
      var G = E(J)
      t.default = G
    },
    Jt8P: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'list_communityJoinRequestsSlice',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'CommunityJoinRequest',
            kind: 'LinkedField',
            name: 'items',
            plural: !0,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
              { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
            ],
            storageKey: null,
          },
        ],
        type: 'CommunityJoinRequestsSlice',
        abstractKey: null,
        hash: '53ebb4923797f8ac8a789c20901e1a59',
      }
      t.default = a
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('hBvt'), n('ERkP')),
        l = n.n(i),
        o = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return l.a.createElement(o.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return l.a.createElement(s.a, r()({ isActive: t }, e, { label: l.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        l = n.n(i),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('i4UL'), n('+/5o')),
        h = n('ERkP'),
        v = n.n(h),
        E = n('HPNB'),
        _ = n('VAZu'),
        C = n('wiP2'),
        k = n('Es6L'),
        S = n('yiKp'),
        I = n.n(S),
        w = n('rHpw'),
        T = w.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I()(I()({}, w.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        F = n('MWbm'),
        x = n('yw4N'),
        M = n('TnY3'),
        R = n('cHvH'),
        L = n('3xLC'),
        K = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        O = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      F.a,
                      { style: T.fill },
                      v.a.createElement(
                        x.a,
                        { style: T.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(R.a, null, function (t) {
                    var n = t.windowWidth
                    return E.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, K))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(k.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(C.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    a = n.SideNavButton,
                    r = n.TabBar,
                    i = n.TeamsSwitcher,
                    l = n.backLocation,
                    o = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    m = n.middleControl,
                    d = n.onBackClick,
                    y = n.rightControl,
                    p = n.screenType,
                    f = n.searchBoxOptions,
                    g = n.secondaryBar,
                    h = n.showSubtitleOnRoot,
                    E = n.showSubtitleOnWideDetail,
                    k = n.subtitle,
                    S = n.title,
                    I = n.titleIconCell,
                    w = n.titleIconCellSize,
                    x = n.withDetailOpen,
                    M = n.withSearchBox,
                    R = n.withTweetButton,
                    L = 'root' === p,
                    K = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && E) || (L && h),
                    N = L || (O && t),
                    j = L ? b.c : O ? b.a : void 0,
                    P = v.a.createElement(
                      F.a,
                      { style: T.appBarContainer },
                      v.a.createElement(_.a, {
                        backLocation: l,
                        fixed: !1,
                        hideBackButton: N,
                        history: s,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: y,
                        secondaryBar: g,
                        subtitle: A ? k : void 0,
                        title: S,
                        titleDomId: j,
                        titleIconCell: I,
                        titleIconCellSize: w,
                      }),
                    ),
                    H =
                      L || (K && x)
                        ? null
                        : v.a.createElement(C.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: l,
                            documentTitle: o,
                            headerless: c,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: y,
                            searchBoxOptions: f,
                            subtitle: k,
                            title: S,
                            withSearchBox: M,
                            withTweetButton: R,
                          })
                  return v.a.createElement(v.a.Fragment, null, H, P)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(O, 'contextType', L.a),
        g()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(M.a)(O)
    },
    MCGW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesScreen', function () {
          return k
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('97Jx'),
        l = n.n(i),
        o = (n('KqXw'), n('WNMA'), n('ho0z'), n('uFXj'), n('ERkP')),
        c = n.n(o),
        s = n('v6aA'),
        u = n('es0u'),
        m = n('PKbs'),
        d = n('egQk'),
        y = n('1Idg'),
        p = n('eSoz'),
        f = n('rxPX'),
        g = n('0KEI'),
        b = Object(f.a)()
          .propsFromState(function () {
            return { community: y.a, fetchStatus: y.b, isCommunityMember: y.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              fetchCommunityIfNeeded: p.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules' }),
        h = n('MDbM'),
        v = n('/de5'),
        E = n('5FtR'),
        _ = n('VS6U'),
        C = n('rHpw'),
        k = function (e) {
          var t = c.a.useContext(s.a).featureSwitches,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            p = e.isCommunityMember,
            f = e.location,
            g = e.match,
            b = g.params.communityId,
            C = t.isTrue('c9s_participation_enabled')
          c.a.useEffect(function () {
            b && !n && o !== h.a.LOADED && i(b).catch(a())
          })
          var k = c.a.useMemo(
            function () {
              return { selectedCommunityId: b || '', defaultText: '' }
            },
            [b],
          )
          if (n && b) {
            var S = n.name,
              w = n.rules,
              T = n.theme,
              F = {
                composeOptions: k,
                history: y,
                sidebarContent: c.a.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: C && p,
              }
            if (w.length > 0) {
              var x = c.a.createElement(m.b, {
                badgeStyle: I.badgeStyle,
                headerContainerStyle: I.containerStyle,
                headerExplanationStyle: I.explanationStyle,
                ruleContainerStyle: I.ruleContainerStyle,
                rules: w,
                theme: T,
                withBottomMargin: !0,
              })
              return c.a.createElement(
                _.a,
                l()({}, F, {
                  backLocation: '/i/communities/'.concat(b),
                  documentTitle: Object(d.a)({ communityName: S }),
                  primaryContent: x,
                }),
              )
            }
            var M = r()(r()({}, F), {}, { title: null }),
              R = c.a.createElement(v.b, { history: y, location: f, match: g })
            return c.a.createElement(_.a, l()({}, M, { primaryContent: R }))
          }
          return o === h.a.LOADED ? c.a.createElement(E.a, { to: '/' }) : null
        },
        S = b(k),
        I =
          ((t.default = S),
          C.a.create(function (e) {
            return {
              badgeStyle: { marginRight: e.spaces.space16 },
              containerStyle: {
                paddingVertical: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                borderBottomColor: e.colors.gray50,
                borderBottomStyle: 'solid',
                borderBottomWidth: e.borderWidths.small,
              },
              ruleContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
              explanationStyle: { color: e.colors.text },
            }
          }))
    },
    OUEC: function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        l = n.n(i),
        o = n('ezF+'),
        c =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(199).then(n.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: n('XBtf').a.Critical,
          }),
        s = o.e(c),
        u = n('QIgh'),
        m = n('8UdT')
      t.a = l()(l()({}, u.b), {}, r()({}, m.b.Community, s))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        l = n.n(i),
        o = n('v6aA'),
        c = n('3XMw'),
        s = n.n(c),
        u = n('Nh1N'),
        m = n('MWbm'),
        d = n('Ig1G'),
        y = n('4zmP'),
        p = n('p+r5'),
        f = n('rHpw'),
        g = s.a.c66769a3,
        b = s.a.ef02695a,
        h = s.a.ef02695a,
        v = s.a.c824202f,
        E = s.a.d32cf5e6,
        _ = s.a.f8fa00c7,
        C = s.a.fc2a5c92,
        k = function (e) {
          var t = l.a.useContext(o.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            a = t.getNumberValue('c9s_max_rule_description_length', 160),
            i = e.description,
            c = e.errorText,
            s = e.name,
            f = e.onChange,
            k = l.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 3, n)
              },
              [n],
            ),
            I = l.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 0, a)
              },
              [a],
            ),
            w = l.a.useState(s),
            T = r()(w, 2),
            F = T[0],
            x = T[1],
            M = l.a.useState(k(s)),
            R = r()(M, 2),
            L = R[0],
            K = R[1],
            O = l.a.useState(void 0),
            A = r()(O, 2),
            N = A[0],
            j = A[1],
            P = l.a.useState(i),
            H = r()(P, 2),
            B = H[0],
            D = H[1],
            U = l.a.useState(I(i)),
            z = r()(U, 2),
            V = z[0],
            q = z[1],
            W = l.a.useState(void 0),
            Q = r()(W, 2),
            X = Q[0],
            J = Q[1],
            G = l.a.useState('' !== s),
            Y = r()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = l.a.useCallback(
              function (e) {
                var t = !1,
                  a = e.target.value
                k(a) && ((t = !0), j(h({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  K(t),
                  x(a),
                  f({ description: B, name: a, valid: !t && !V })
              },
              [n, B, f, V, k],
            ),
            te = l.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                I(n) && ((t = !0), J(_({ maxCharacterCount: a }))),
                  q(t),
                  D(n),
                  f({ name: F, description: n, valid: !t && !L })
              },
              [a, F, f, L, I],
            ),
            ne = L && N ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: n }),
            ae = V ? void 0 : E({ maxCharacterCount: a }),
            re = c
              ? l.a.createElement(
                  m.a,
                  { style: S.error },
                  l.a.createElement(y.a, { Icon: u.a, headline: C, text: c, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            l.a.Fragment,
            null,
            re,
            l.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: N,
              helperText: ne,
              invalid: L && Z,
              label: g,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: n,
              value: F,
            }),
            l.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: X,
              helperText: ae,
              invalid: V,
              label: v,
              name: 'typedRuleDescription',
              onChange: te,
              spellCheck: 'false',
              validLength: a,
              value: B,
            }),
          )
        },
        S = f.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    PMbW: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'controls_CommunityJoinRequestActions',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'join_request_approve_action_result',
              plural: !1,
              selections: (a = [
                { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
              ]),
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'join_request_deny_action_result',
              plural: !1,
              selections: a,
              storageKey: null,
            },
          ],
          type: 'CommunityJoinRequestActions',
          abstractKey: null,
        }
      ;(r.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (t.default = r)
    },
    PbB6: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'screen_EditMembershipType_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'membership_settings',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'invites_policy', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'join_approval_policy',
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityRestrictedMembershipSettings',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Ait9u_LZpvdybQ5u8YzViw',
            metadata: {},
            name: 'EditMembershipTypeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (t.default = i)
    },
    Phky: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) {
            var i = n[a].screenName
            t.push(i)
          }
          return t
        })
      var r = a(n('GiKA'))
      e.exports = t.default
    },
    QRqA: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        l = n('+Kfv'),
        o = n('xZGM'),
        c = n('rxPX'),
        s = function (e, t) {
          return Object(o.z)(e, o.i)
        },
        u = Object(c.a)()
          .propsFromState(function () {
            return { shouldShowEducation: s }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(o.w)(o.i)
              },
            }
          }),
        m = n('3XMw'),
        d = n.n(m),
        y = n('MWbm'),
        p = n('X00g'),
        f = n('feu+'),
        g = n('h0NW'),
        b = n('rHpw'),
        h = n('r9x5'),
        v = n('cOhU'),
        E = n('uCrx'),
        _ = d.a.b60e4f77,
        C = d.a.f0fc827d,
        k = d.a.c8e93b51,
        S = d.a.fc5c6913,
        I = d.a.ad211086,
        w = d.a.gf803ba1,
        T = d.a.e92fe01b,
        F = d.a.h3bb8068,
        x = d.a.a709f8f8,
        M = { viewType: 'welcome_education' }
      var R = b.a.create(function (e) {
          return {
            infoItemsContainer: { marginBottom: e.spaces.space32 },
            itemContainer: { paddingLeft: 0, paddingRight: 0 },
            decorationContainer: {
              color: e.colors.text,
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space20,
            },
          }
        }),
        L = u(function (e) {
          var t = e.addEducationFlag,
            n = e.forSingleCommunity,
            a = e.shouldShowEducation,
            o = r.a.useContext(i.a).featureSwitches
          if (!a || !1 === (null == n ? void 0 : n.canJoinCommunity)) return null
          var c = o.isTrue('c9s_ui_colors_enabled_rweb') && (null == n ? void 0 : n.theme),
            s = [R.decorationContainer, c && { color: p.a.getCommunityUIColor(c) }],
            u = r.a.createElement(h.a, { style: s }),
            m = r.a.createElement(v.a, { style: s }),
            d = r.a.createElement(E.a, { style: s }),
            b = function () {
              t()
            }
          return r.a.createElement(
            l.a,
            { behavioralEventContext: M },
            r.a.createElement(
              f.a,
              {
                actionLabel: _,
                graphicDisplayMode: 'none',
                headline: C,
                onAction: b,
                onClose: b,
                subtext: k,
                withCloseButton: !n,
              },
              r.a.createElement(
                y.a,
                { style: R.infoItemsContainer },
                r.a.createElement(g.a, {
                  containerStyle: R.itemContainer,
                  items: [
                    { label: S, description: I, decoration: u },
                    { label: w, description: T, decoration: m },
                    { label: F, description: x, decoration: d },
                  ],
                }),
              ),
            ),
          )
        })
      t.a = L
    },
    R5kW: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return g
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        l = n.n(i),
        o = (n('yH/f'), n('oEOe')),
        c = n('kGix'),
        s = n('Ssj5'),
        u = 'communityModeration',
        m = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        d = function (e, t) {
          return e[u][t]
        },
        y = function (e, t) {
          var n
          return null !== (n = e[u].fetchStatus[t]) && void 0 !== n ? n : c.a.NONE
        },
        p = Object.freeze({ fetchStatus: {} })
      function f(e) {
        return e.meta.communityId
      }
      var g = function (e) {
        return function (t, n, a) {
          var r = a.api
          return o.b(t, { params: { communityId: e }, request: r.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      s.a.register(
        r()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return l()(l()({}, e), {}, { fetchStatus: l()(l()({}, e.fetchStatus), {}, r()({}, f(t), c.a.LOADING)) })
            case m.FAILURE:
              return l()(
                l()({}, e),
                {},
                { fetchStatus: l()(l()({}, e.fetchStatus), {}, r()({}, f(t), c.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return l()(
                  l()({}, e),
                  {},
                  ((n = {}),
                  r()(n, f(t), t.payload),
                  r()(n, 'fetchStatus', l()(l()({}, e.fetchStatus), {}, r()({}, f(t), c.a.LOADED))),
                  r()(n, 'error', null),
                  n),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
    },
    ROT1: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        o = n('v6aA'),
        c = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = n('nmVb'),
        y = n.n(d),
        p = n('Phky'),
        f = n.n(p),
        g = u.a.h3e55b40,
        b = u.a.dd71d9c9,
        h = u.a.cf65e56a,
        v = u.a.d936eeca,
        E = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityName,
            i = e.onChange,
            s = l.a.useContext(o.a).featureSwitches,
            u = l.a.useState(!1),
            d = r()(u, 2),
            p = d[0],
            E = d[1],
            _ = l.a.useState(void 0),
            C = r()(_, 2),
            k = C[0],
            S = C[1],
            I = s.getNumberValue('c9s_max_community_name_length', 30),
            w = l.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(m.g)(t, 3, I)
                  ? (y()(t).length > 0 || f()(t).length > 0) && ((n = !0), S(v))
                  : ((n = !0), S(h({ minCharacterCount: 3, maxCharacterCount: I }))),
                  E(n),
                  i(t, n)
              },
              [I, i, S],
            ),
            T = b({ minCharacterCount: 3, maxCharacterCount: I })
          return l.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: k,
            helperText: T,
            invalid: p,
            label: g,
            name: 'typedCommunityName',
            onChange: w,
            spellCheck: 'false',
            validLength: I,
            value: a,
          })
        }
    },
    'S+H3': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SNyS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
              }),
              l.a.createElement('path', {
                d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SyZD: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesRouter', function () {
          return D
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('KqXw'), n('WNMA'), n('2G9S'), n('ERkP')),
        l = n.n(i),
        o = n('v6aA'),
        c = n('Ig1G'),
        s = n('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = n('3XMw'),
        d = n.n(m),
        y = n('yoO3'),
        p = n('5FtR'),
        f = n('ddV6'),
        g = n.n(f),
        b = (n('z84I'), n('/yvb')),
        h = n('eSoz'),
        v = n('0KEI'),
        E = Object(s.a)()
          .propsFromActions(function () {
            return {
              reorderRules: h.c.reorderRules,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        _ = n('rHpw'),
        C = _.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        k = n('mWs5'),
        S = n('PKbs'),
        I = d.a.b772cd65,
        w = d.a.gfca5254
      var T = E(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.explanation,
            r = e.history,
            i = e.reorderRules,
            o = t.id_str,
            c = t.rules,
            s = t.theme,
            u = l.a.useState(c),
            m = g()(u, 2),
            d = m[0],
            p = m[1],
            f = l.a.useCallback(
              function (e) {
                p(e)
              },
              [p],
            ),
            h = l.a.useCallback(
              function () {
                var e = n({}),
                  t = d.map(function (e) {
                    return e.rest_id
                  })
                i(o, { ruleIds: t })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, i, r, n],
            ),
            v = l.a.createElement(b.a, { onPress: h, size: 'small', type: 'brandFilled' }, I)
          return l.a.createElement(
            y.a,
            null,
            l.a.createElement(
              k.a,
              { communityId: o, rightControl: v, screenType: 'primaryDetail', title: w },
              l.a.createElement(S.b, {
                badgeStyle: C.badgeStyle,
                displayType: S.a.Reorder,
                explanation: a,
                headerContainerStyle: C.headerContainerStyle,
                onReorder: f,
                ruleContainerStyle: C.ruleContainerStyle,
                rules: d,
                theme: s,
              }),
            ),
          )
        }),
        F = n('MWbm'),
        x = n('mjJ+'),
        M = n('iY63'),
        R = n('ACHU'),
        L = n('zCf4'),
        K = d.a.gfca5254,
        O = d.a.d94edeb4,
        A = d.a.j560c8ea,
        N = d.a.ab8089ea,
        j = d.a.h63a5c3b,
        P = l.a.createElement(M.a, null),
        H = l.a.createElement(R.a, null),
        B = { viewType: 'add' },
        D = function (e) {
          var t = l.a.useContext(o.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            a = t.isTrue('c9s_rule_editing_enabled'),
            i = t.isTrue('c9s_rule_reordering_enabled'),
            s = e.community,
            u = e.history,
            m = e.match,
            d = s.id_str,
            f = s.role,
            g = s.rules,
            h = s.theme,
            v = m.url,
            E = f === c.a.Admin,
            _ =
              n && E
                ? l.a.createElement(b.a, {
                    accessibilityLabel: A,
                    behavioralEventContext: B,
                    icon: P,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            I = g.length > 1,
            w =
              i && E && I
                ? l.a.createElement(b.a, {
                    accessibilityLabel: j,
                    icon: H,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: N, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return l.a.createElement(x.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: U.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            M = l.a.createElement(F.a, { style: U.rightControlStyle }, _, w),
            R = { displayType: S.a.Default, getPivotLink: void 0 }
          return (
            E &&
              a &&
              ((R.displayType = S.a.Pivot),
              (R.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            l.a.createElement(
              L.d,
              null,
              l.a.createElement(
                L.b,
                { exact: !0, path: ''.concat(v, '/') },
                l.a.createElement(
                  y.a,
                  null,
                  l.a.createElement(
                    k.a,
                    { communityId: d, rightControl: M, screenType: 'primaryDetail', title: K },
                    l.a.createElement(
                      S.b,
                      r()(
                        {
                          badgeStyle: C.badgeStyle,
                          explanation: O,
                          headerContainerStyle: C.headerContainerStyle,
                          ruleContainerStyle: C.ruleContainerStyle,
                          rules: g,
                          theme: h,
                        },
                        R,
                      ),
                    ),
                  ),
                ),
              ),
              l.a.createElement(
                L.b,
                { exact: !0, path: ''.concat(v, '/reorder') },
                l.a.createElement(T, { community: s, explanation: O, history: u }),
              ),
              l.a.createElement(L.b, null, l.a.createElement(p.a, { to: ''.concat(v, '/') })),
            )
          )
        },
        U = _.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(D)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityTimelineType', function () {
          return rr
        }),
        n.d(t, 'CommunityScreen', function () {
          return lr
        })
      var a,
        r,
        i,
        l = n('yiKp'),
        o = n.n(l),
        c = n('VrFO'),
        s = n.n(c),
        u = n('Y9Ll'),
        m = n.n(u),
        d = n('1Pcy'),
        y = n.n(d),
        p = n('5Yy7'),
        f = n.n(p),
        g = n('2VqO'),
        b = n.n(g),
        h = n('KEM+'),
        v = n.n(h),
        E = (n('yH/f'), n('2G9S'), n('KqXw'), n('WNMA'), n('ho0z'), n('ERkP')),
        _ = n.n(E),
        C = (n('1t7P'), n('jQ/y'), n('1Idg')),
        k = n('WpDa'),
        S = n('ZNT5'),
        I = n('hqKg'),
        w = n('rxPX'),
        T = function (e, t) {
          return t.communityId
        },
        F = function () {
          return Object(I.createSelector)(T, function (e) {
            return (function (e) {
              return Object(S.a)({
                timelineId: 'communityAbout-'.concat(e),
                getEndpoint: function (e) {
                  return e.Communities.fetchAboutTimeline
                },
                getEndpointParams: function (t) {
                  return { communityId: e }
                },
                context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                perfKey: 'communityAbout',
                formatResponse: k.a,
              })
            })(e)
          })
        },
        x = Object(w.a)()
          .propsFromState(function () {
            return { community: C.a, creator: C.g, aboutModule: F() }
          })
          .withAnalytics({ page: 'community', section: 'about' }),
        M = n('Ig1G'),
        R = n('yoO3'),
        L = n('fTQJ'),
        K = n('n0Rl'),
        O = n('v//M'),
        A = (n('enFi'), n('z84I'), n('PKbs')),
        N = n('3XMw'),
        j = n.n(N),
        P = n('X00g'),
        H = n('jAXQ'),
        B = n.n(H),
        D = function (e) {
          var t = B()(void 0 !== a ? a : (a = n('DCZs')), e),
            r = t.custom_theme,
            i = t.default_theme,
            l = null != r ? r : i
          return _.a.useMemo(
            function () {
              return P.a.getCommunityTheme(l)
            },
            [l],
          )
        },
        U = D,
        z = n('6vad'),
        V = n('rC8y'),
        q = n('0yYu'),
        W = n('rHpw'),
        Q = void 0 !== r ? r : (r = n('BX8b')),
        X = j.a.gfca5254,
        J = j.a.ffd9cfe6,
        G = W.a.create(function (e) {
          return {
            explanationStyle: { color: e.colors.text },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: 'initial' },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space24 },
            badgeStyle: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
          }
        }),
        Y = function (e) {
          var t = e.community,
            n = B()(Q, t),
            a = n.rules,
            r = U(n),
            i = _.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(z.b, { text: X }),
                _.a.createElement(A.b, {
                  badgeStyle: G.badgeStyle,
                  headerContainerStyle: [G.containerStyle, G.headingContainerStyle],
                  headerExplanationStyle: G.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: G.ruleContainerStyle,
                  rules: i,
                  theme: r,
                }),
                a.length > 5
                  ? _.a.createElement(
                      _.a.Fragment,
                      null,
                      _.a.createElement(V.a, { link: '/i/communities/'.concat(n.rest_id, '/rules'), text: J }),
                      ' ',
                      _.a.createElement(q.a, null),
                    )
                  : null,
              )
        },
        Z = void 0 !== i ? i : (i = n('sH2E')),
        $ = Object(K.b)(Z, { errorConfig: { context: 'RULES' } }),
        ee = function (e) {
          return _.a.createElement($, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry
              return null != t && t.community
                ? _.a.createElement(O.a, {
                    fetchStatus: n,
                    onRequestRetry: a,
                    render: function () {
                      return _.a.createElement(Y, { community: t.community })
                    },
                  })
                : null
            },
            variables: { communityId: e.communityId },
          })
        },
        te = n('t62R'),
        ne = n('csss'),
        ae = n('h0NW'),
        re = n('jV+4'),
        ie = n('v6aA'),
        le = n('cOhU'),
        oe = n('DlMI'),
        ce = n('Lxak'),
        se = j.a.i9028824,
        ue = j.a.cc683fb9,
        me = j.a.af7c11a9,
        de = j.a.db1b9462,
        ye = j.a.ea49402d
      function pe(e) {
        var t = e.date,
          n = e.userName
        return _.a.createElement(j.a.I18NFormatMessage, { $i18n: 'a346641a', date: t }, n)
      }
      var fe = (function (e) {
        f()(n, e)
        var t = b()(n)
        function n() {
          var e
          s()(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(r))),
            v()(y()(e), '_getItems', function () {
              var t = function (e) {
                  return _.a.createElement(te.b, null, e)
                },
                n = e._getCreationAttribution(),
                a = [
                  { decoration: be, label: t(de) },
                  { decoration: he, label: t(ye) },
                ]
              return n && a.push({ decoration: ve, label: n }), a
            }),
            v()(y()(e), '_renderInfoSection', function () {
              var t = e.props.community
              if (t) {
                var n = t.description,
                  a = t.role
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(z.b, { text: me }),
                  Object(M.f)(a) && n ? _.a.createElement(ne.a, { label: n }) : null,
                  _.a.createElement(ae.a, { containerStyle: ge.containerStyle, items: e._getItems() }),
                  _.a.createElement(q.a, null),
                )
              }
              return null
            }),
            v()(y()(e), '_getCreationAttribution', function () {
              var t = e.props,
                n = t.community,
                a = t.creator
              if (!a) return null
              var r = null == n ? void 0 : n.created_at,
                i = null == a ? void 0 : a.screen_name,
                l = a.verified
              if (r && i) {
                var o = new Date(r).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' }),
                  c = _.a.createElement(re.a, { isVerified: l, screenName: i, withLink: !0 })
                return _.a.createElement(te.b, { color: 'gray700' }, _.a.createElement(pe, { date: o, userName: c }))
              }
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
                  t = e.aboutModule,
                  n = e.communityId
                return _.a.createElement(
                  R.a,
                  { behavioralEventViewType: 'about' },
                  this._renderInfoSection(),
                  _.a.createElement(ee, { communityId: n }),
                  ';',
                  _.a.createElement(L.a, { loadingAccessibilityLabel: se, module: t, title: ue }),
                )
              },
            },
          ]),
          n
        )
      })(_.a.Component)
      v()(fe, 'contextType', ie.a)
      var ge = W.a.create(function (e) {
          return {
            text: { marginVertical: e.spaces.space12 },
            explanationStyle: { color: e.colors.text },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: 'initial' },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space24 },
            badgeStyle: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            icon: {
              marginLeft: '6px',
              marginRight: e.spaces.space20,
              color: e.colors.gray700,
              height: e.spaces.space24,
              width: e.spaces.space24,
            },
          }
        }),
        be = _.a.createElement(le.a, { style: ge.icon }),
        he = _.a.createElement(oe.a, { style: ge.icon }),
        ve = _.a.createElement(ce.a, { style: ge.icon }),
        Ee = x(fe),
        _e = n('+Kfv'),
        Ce = n('es0u'),
        ke = n('0KEI'),
        Se = n('R5kW'),
        Ie = function (e, t) {
          var n,
            a = Object(Se.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        we = function (e, t) {
          return Object(Se.c)(e, t.communityId)
        },
        Te = Object(w.a)()
          .propsFromState(function () {
            return { count: Ie, fetchStatus: we }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ke.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: Se.a,
            }
          }),
        Fe = n('kGix'),
        xe = n('TnY3'),
        Me = n('MWbm'),
        Re = n('mjJ+'),
        Le = n('/yvb'),
        Ke = n('Znyr'),
        Oe = n('zIWA'),
        Ae = n('SNyS'),
        Ne = n('Lsrn'),
        je = n('k/Ka'),
        Pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(je.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            _.a.createElement(
              'g',
              null,
              _.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      Pe.metadata = { width: 24, height: 24 }
      var He = Pe,
        Be = n('ACHU'),
        De = j.a.h6beb5fa,
        Ue = j.a.e3f04700,
        ze = j.a.e2429f56,
        Ve = j.a.df15d5b7,
        qe = j.a.e48fbb01,
        We = j.a.c8c6c4e9,
        Qe = j.a.h63a5c3b,
        Xe = j.a.dce5e1b3,
        Je = j.a.c5d8c93d,
        Ge = { viewType: 'app_bar_button' }
      var Ye = W.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        Ze = Object(xe.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            r = void 0 === a ? 0 : a,
            i = (e.history, e.userRole),
            l = _.a.useContext(ie.a).featureSwitches,
            o = l.isTrue('c9s_settings_enabled'),
            c = l.isTrue('c9s_report_community_enabled'),
            s = l.isTrue('c9s_moderation_enabled') && t,
            u = o && t,
            m = c && !t,
            d = _.a.useCallback(
              function (e) {
                var t = []
                return (
                  s &&
                    t.push({
                      text: ze,
                      subText: Ve({ count: r }),
                      Icon: Oe.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  m &&
                    t.push({
                      text: qe,
                      Icon: Oe.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: We, Icon: Ae.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  _.a.createElement(Re.a, { items: t, onCloseRequested: e })
                )
              },
              [n, r, s, m],
            ),
            y = t ? He : Be.a,
            p = t ? (i === M.a.Admin ? Xe : Je) : Qe
          return _.a.createElement(
            Me.a,
            { style: Ye.root },
            _.a.createElement(Le.a, {
              accessibilityLabel: p,
              behavioralEventContext: Ge,
              icon: _.a.createElement(y, null),
              link: u ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: u ? void 0 : d,
              size: 'xLarge',
              type: 'primaryText',
            }),
            s && r > 0
              ? _.a.createElement(Ke.a, {
                  count: r,
                  style: Ye.menuControlBadge,
                  truncatedCountFormatter: De,
                  unreadCountLabel: Ue,
                  withBorder: !1,
                })
              : null,
          )
        })
      var $e = Te(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            r = e.createLocalApiErrorHandler,
            i = e.fetchCommunityModerationData,
            l = e.fetchStatus,
            o = e.userRole
          return (
            _.a.useEffect(
              function () {
                l === Fe.a.NONE && t && i(n).catch(r())
              },
              [r, i, l, n, t],
            ),
            _.a.createElement(Ze, { canModerate: t, communityId: n, count: a, userRole: o })
          )
        }),
        et = (n('7xRU'), n('tVqn'), n('LW0h'), n('7x/C'), n('uFXj'), n('ddV6')),
        tt = n.n(et),
        nt = j.a.fad95333,
        at = function (e) {
          var t = e.offendingRule
          return _.a.createElement(
            Me.a,
            null,
            t
              ? _.a.createElement(
                  Me.a,
                  { style: rt.offendingRule },
                  (function (e) {
                    return _.a.createElement(
                      j.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      _.a.createElement(te.b, { weight: 'bold' }, j.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            _.a.createElement(te.b, null, nt),
          )
        },
        rt = W.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        it = j.a.hafa07f2,
        lt = j.a.fa94c9da,
        ot = j.a.c15bee31,
        ct = j.a.i859676b,
        st = _.a.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          _.a.createElement(te.b, { link: '/settings/audience_and_tagging' }, j.a.e77dfaf0),
        ),
        ut = j.a.fc2a5c92,
        mt = j.a.bf7bdb60,
        dt = j.a.h27d695f,
        yt = j.a.b02360f5,
        pt = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        ft = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        gt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var bt = n('CGyZ'),
        ht = n('feu+'),
        vt = j.a.e6057013,
        Et = { follow: j.a.b171d7c4, following: j.a.aa7ae3f6, unfollow: j.a.bb1d57b6 },
        _t = j.a.j24c37b2,
        Ct = function (e) {
          var t = _.a.useContext(ie.a).featureSwitches,
            n = _.a.useState(void 0),
            a = tt()(n, 2),
            r = a[0],
            i = a[1],
            l = t.isTrue('c9s_request_to_join_enabled'),
            c = e.community,
            s = e.createLocalApiErrorHandler,
            u = e.history,
            m = e.isProtectedUser,
            d = e.join,
            y = e.leave,
            p = c.actions,
            f = p.join_action_result,
            g = p.leave_action_result,
            b = c.id_str,
            h = c.name,
            v = c.role,
            E = Object(M.f)(v),
            C = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !E } },
            k = function () {
              i(void 0)
            },
            S = _.a.useMemo(
              function () {
                return f.reason === gt.ViewerJoinRequestRequired && l ? o()(o()({}, Et), {}, { follow: vt }) : Et
              },
              [l, f],
            )
          return _.a.createElement(
            Me.a,
            { style: kt.button },
            _.a.createElement(bt.a, {
              behavioralEventContext: C,
              buttonText: S,
              isFollowing: E,
              name: h,
              onFollow: function () {
                var e = c.rules,
                  t = c.viewerViolatedRule,
                  n = (function (e, t, n) {
                    var a = e.__typename,
                      r = e.reason,
                      i = function (e) {
                        return { canAction: !0, message: e }
                      },
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      o = l({ headline: ut, text: mt })
                    switch (a) {
                      case pt.joinAvailable:
                        return i()
                      case pt.joinUnavailable:
                        switch (r) {
                          case gt.ViewerIsRemoved:
                            return l({
                              headline: ot,
                              text: _.a.createElement(at, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case gt.ViewerNotInvited:
                            return l({ headline: it, text: lt })
                          case gt.ViewerIsProtected:
                            return t ? l({ headline: ct, text: st }) : i()
                          case gt.ViewerJoinRequestRequired:
                            return i()
                          default:
                            return o
                        }
                      default:
                        return o
                    }
                  })(f, m, t),
                  a = n.canAction,
                  r = n.message
                !a && r && i(r),
                  a &&
                    (e && e.length > 0
                      ? u.push({ pathname: '/i/communities/'.concat(b, '/join'), state: { community: c } })
                      : d(b).catch(s({})))
              },
              onUnfollow: function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      a = e.reason,
                      r = function (e) {
                        return { canAction: !1, message: e }
                      },
                      i = r({ headline: ut, text: mt })
                    switch (n) {
                      case pt.leaveAvailable:
                        return { canAction: !0, message: t }
                      case pt.leaveUnavailable:
                        switch (a) {
                          case ft.ViewerIsSoleAdmin:
                            return r({ headline: dt, text: yt })
                          default:
                            return i
                        }
                      default:
                        return i
                    }
                  })(g),
                  t = e.canAction,
                  n = e.message
                !t && n && i(n), t && y(b).catch(s({}))
              },
              type: 'community',
            }),
            r
              ? _.a.createElement(ht.a, {
                  actionLabel: _t,
                  graphicDisplayMode: 'none',
                  headline: r.headline,
                  onAction: k,
                  onClose: k,
                  subtext: r.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        kt = W.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        St = n('YeIG'),
        It = n('TIdA'),
        wt = n('A91F'),
        Tt = n('9Xij'),
        Ft = function (e) {
          var t = e.bannerMedia,
            n = null == t ? void 0 : t.image,
            a = W.a.theme.aspectRatios.communityBanner
          return n && !Object(St.a)(n)
            ? _.a.createElement(
                Me.a,
                null,
                _.a.createElement(It.a, {
                  accessibilityLabel: '',
                  aspectMode: wt.a.exact(a),
                  backgroundColor: W.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : _.a.createElement(Tt.a, { ratio: a }, _.a.createElement(Me.a, { style: xt.placeholderImageContainer }))
        },
        xt = W.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        Mt = n('n4Eu'),
        Rt = { red: 0, green: 0, blue: 0 },
        Lt = '10px',
        Kt = function (e) {
          var t,
            n = e.children,
            a = e.community,
            r = e.isThemeEnabled,
            i = a.media,
            l = a.theme,
            o = null == i || null === (t = i.image) || void 0 === t ? void 0 : t.palette
          return _.a.createElement(
            Me.a,
            null,
            _.a.createElement(Me.a, { style: Ot.descriptionContainer }, n),
            _.a.createElement(Me.a, { style: [W.a.absoluteFill, Ot.backgroundColorWhite] }),
            _.a.createElement(Me.a, {
              style: [
                W.a.absoluteFill,
                Ot.backgroundColor,
                (function (e, t) {
                  if (r) return P.a.getCommunityGradientStyle(t, Lt)
                  var n = e && Mt.a.get(e),
                    a = n ? (null == n ? void 0 : n.rgb) : Rt,
                    i = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(i, ' ')
                      .concat(Lt, ', ')
                      .concat(l, ' ')
                      .concat(Lt, ' 100%)'),
                  }
                })(o, l),
              ],
            }),
          )
        },
        Ot = W.a.create(function (e) {
          return {
            descriptionContainer: {
              paddingHorizontal: e.spaces.space16,
              paddingTop: e.spaces.space24,
              paddingBottom: e.spaces.space12,
              justifyContent: 'flex-end',
              zIndex: 2,
            },
            backgroundColor: { height: '100%', width: '100%', zIndex: 1 },
            backgroundColorWhite: { height: '100%', width: '100%', backgroundColor: e.colors.white, zIndex: 0 },
          }
        }),
        At = n('XtoV'),
        Nt = n('97Jx'),
        jt = n.n(Nt),
        Pt = n('m3Bd'),
        Ht = n.n(Pt),
        Bt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(je.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            _.a.createElement(
              'g',
              null,
              _.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              _.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      Bt.metadata = { width: 24, height: 24 }
      var Dt,
        Ut,
        zt,
        Vt,
        qt,
        Wt = Bt,
        Qt = ['renderMenu'],
        Xt = ['accessibilityLabel', 'behavioralEventContext'],
        Jt = _.a.createElement(Wt, null),
        Gt = function (e) {
          var t = e.renderMenu,
            n = Ht()(e, Qt),
            a = n.accessibilityLabel,
            r = n.behavioralEventContext,
            i = Ht()(n, Xt)
          return _.a.createElement(
            Le.a,
            jt()({ accessibilityLabel: a, behavioralEventContext: r, icon: Jt, renderMenu: t, type: 'primaryText' }, i),
          )
        },
        Yt = n('1YZw'),
        Zt = n('G6rE'),
        $t = n('li/m'),
        en = ['loggedInUser'],
        tn = Object(w.a)()
          .propsFromState(function () {
            return { community: C.a, loggedInUser: Zt.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Ht()(e, en)
            return o()({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              addToast: Yt.b,
              createLocalApiErrorHandler: Object(ke.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: $t.b,
              leave: $t.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        nn = j.a.hb9400db,
        an = function (e) {
          var t = e.community,
            a = B()(void 0 !== Dt ? Dt : (Dt = n('ldL/')), t),
            r = a.description,
            i = a.role,
            l = _.a.useState(!1),
            o = tt()(l, 2),
            c = o[0],
            s = o[1],
            u = _.a.useState(!1),
            m = tt()(u, 2),
            d = m[0],
            y = m[1],
            p = _.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), s(!c)
              },
              [c],
            )
          return !r || Object(M.f)(i)
            ? null
            : _.a.createElement(
                Me.a,
                { style: rn.description },
                _.a.createElement(te.b, { color: 'white', getTextOverflow: y, numberOfLines: c ? void 0 : 2 }, r),
                !c && d ? _.a.createElement(te.b, { color: 'white', onPress: p, weight: 'bold' }, nn) : null,
              )
        },
        rn = W.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        ln = _.a.memo(an),
        on = n('Fr3L'),
        cn = n('IAZG'),
        sn = { context: 'CommunityDescriptionToggleQuery' },
        un = void 0 !== Ut ? Ut : (Ut = n('2fn4')),
        mn = function (e) {
          var t = e.communityId,
            n = Object(cn.a)(un, { communityId: t })
          return _.a.createElement(ln, { community: n.community })
        },
        dn = function (e) {
          return _.a.createElement(on.a, { errorConfig: sn }, _.a.createElement(mn, { communityId: e.communityId }))
        },
        yn = _.a.memo(dn),
        pn = n('K1iM'),
        fn = n.n(pn),
        gn = n('MtXG'),
        bn = j.a.d58baa7e,
        hn = function (e) {
          var t = e.community,
            a = B()(void 0 !== zt ? zt : (zt = n('WuQQ')), t).member_count,
            r = void 0 === a ? 0 : a,
            i = bn(r)
          return _.a.createElement(
            gn.a.Group,
            null,
            _.a.createElement(
              gn.a,
              { onMedia: !0 },
              _.a.createElement(
                te.b,
                { color: 'white' },
                _.a.createElement(
                  j.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  _.a.createElement(gn.a.Value, null, j.a.ibd0106d({ formattedCount: i })),
                  _.a.createElement(gn.a.Label, null, j.a.cface2d0({ count: r })),
                ),
              ),
            ),
          )
        },
        vn = function (e) {
          var t = _.a.useContext(ie.a).featureSwitches
          return _.a.useMemo(
            function () {
              return t.isTrue(e)
            },
            [e, t],
          )
        },
        En = n('cm6r'),
        _n = n('MAI/'),
        Cn = n('I4+6'),
        kn = Cn.a.generate({
          backgroundColor: W.a.theme.colors.transparent,
          color: W.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        Sn = W.a.create(function (e) {
          return {
            description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 },
            membersContainer: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              left: -e.spacesPx.space4,
              top: -e.spacesPx.space2,
              padding: e.spaces.space4,
              borderRadius: e.borderRadii.small,
            },
            rightSpace: { marginRight: e.spaces.space12 },
          }
        }),
        In = function (e) {
          var t = e.community,
            a = B()(void 0 !== Vt ? Vt : (Vt = n('Eh7u')), t),
            r = vn('c9s_ui_colors_enabled_rweb'),
            i = a.members_facepile_results,
            l = a.rest_id,
            o = (function (e) {
              var t,
                n = [],
                a = fn()(e)
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var r = t.value.result
                  if ('User' === (null == r ? void 0 : r.__typename)) {
                    var i,
                      l = null === (i = r.legacy) || void 0 === i ? void 0 : i.profile_image_url_https
                    l && n.push(l)
                  }
                }
              } catch (o) {
                a.e(o)
              } finally {
                a.f()
              }
              return n
            })(i),
            c = D(a),
            s = r ? P.a.getCommunityBackgroundColorName(c) : void 0
          return _.a.createElement(
            En.a,
            { interactiveStyles: kn, link: '/i/communities/'.concat(l, '/members'), style: Sn.membersContainer },
            o.length > 0
              ? _.a.createElement(_n.a, {
                  borderColor: s,
                  style: Sn.rightSpace,
                  userAvatarSize: 'large',
                  userAvatarUrls: o,
                })
              : null,
            _.a.createElement(hn, { community: a }),
          )
        },
        wn = { context: 'CommunityFacePileQuery' },
        Tn = void 0 !== qt ? qt : (qt = n('ZYKh')),
        Fn = function (e) {
          var t = e.communityId,
            n = Object(cn.a)(Tn, { communityId: t })
          return _.a.createElement(In, { community: n.community })
        },
        xn = function (e) {
          return _.a.createElement(on.a, { errorConfig: wn }, _.a.createElement(Fn, { communityId: e.communityId }))
        },
        Mn = n('oQhu'),
        Rn = n('k/OQ'),
        Ln = n('CaKu'),
        Kn = n('I/9y'),
        On = n('pwey'),
        An = j.a.a0e3ece4,
        Nn = j.a.bec3b8f9,
        jn = j.a.e05c00b4,
        Pn = j.a.f88553c8,
        Hn = j.a.b139b549,
        Bn = j.a.ha8209bb,
        Dn = j.a.d601fc2f,
        Un = j.a.b721eb37,
        zn = { viewType: 'description' },
        Vn = { viewType: 'facepiles_with_count' },
        qn = { viewType: 'share_community' },
        Wn = { viewType: 'copy_link' },
        Qn = { viewType: 'invite_members' },
        Xn =
          (j.a.d58baa7e,
          (function (e) {
            f()(n, e)
            var t = b()(n)
            function n() {
              var e
              s()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                v()(y()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
                v()(y()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
                v()(
                  y()(e),
                  '_isTimelinesRankingEnabled',
                  e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
                ),
                v()(
                  y()(e),
                  '_isCommunitiesSharingEnabled',
                  e.context.featureSwitches.isTrue('c9s_share_community_enabled'),
                ),
                v()(y()(e), 'state', { shouldShowFullDescription: !1, hasOverflow: void 0 }),
                v()(y()(e), '_renderCommunityDescription', function () {
                  var t = e.props,
                    n = t.community,
                    a = t.communityId,
                    r = t.createLocalApiErrorHandler,
                    i = t.history,
                    l = t.isProtectedUser,
                    o = t.join,
                    c = t.leave
                  if (n) {
                    var s = n.name
                    return _.a.createElement(
                      _e.a,
                      { behavioralEventContext: zn },
                      _.a.createElement(
                        Kt,
                        { community: n, isThemeEnabled: e._isThemeEnabled },
                        _.a.createElement(
                          te.b,
                          { color: 'white', size: 'title2', style: Jn.name, weight: 'bold' },
                          s.trim(),
                        ),
                        _.a.createElement(yn, { communityId: a }),
                        _.a.createElement(
                          _e.a,
                          { behavioralEventContext: Vn },
                          _.a.createElement(
                            Me.a,
                            { style: Jn.bottomContainer },
                            _.a.createElement(xn, { communityId: a }),
                            _.a.createElement(
                              Me.a,
                              { style: Jn.buttons },
                              e._isCommunitiesSharingEnabled
                                ? _.a.createElement(Gt, {
                                    accessibilityLabel: Nn,
                                    behavioralEventContext: qn,
                                    renderMenu: e._renderActionMenu,
                                    style: Jn.inviteButton,
                                    type: 'onMediaOutlined',
                                  })
                                : _.a.createElement(At.a, {
                                    community: n,
                                    style: Jn.inviteButton,
                                    type: 'onMediaOutlined',
                                  }),
                              e._isParticipationEnabled
                                ? _.a.createElement(Ct, {
                                    community: n,
                                    createLocalApiErrorHandler: r,
                                    history: i,
                                    isProtectedUser: l,
                                    join: o,
                                    leave: c,
                                  })
                                : null,
                            ),
                          ),
                        ),
                      ),
                    )
                  }
                }),
                v()(y()(e), '_renderTabs', function () {
                  var t = e.props.communityId,
                    n = [
                      { to: '/i/communities/'.concat(t), label: Bn, key: Bn },
                      { to: '/i/communities/'.concat(t, '/latest'), label: Dn, key: Dn },
                      { to: '/i/communities/'.concat(t, '/about'), label: Un, key: Un },
                    ]
                  return _.a.createElement(Rn.a, {
                    accessibilityLabel: An,
                    links: e._isTimelinesRankingEnabled
                      ? n
                      : (function (e) {
                          return e.filter(function (e) {
                            return e.label !== Dn
                          })
                        })(n),
                  })
                }),
                v()(
                  y()(e),
                  '_getCommunityShareItems',
                  Object(Mn.a)(function (t, n) {
                    var a = []
                    return (
                      a.push({ behavioralEventContext: Wn, text: jn, Icon: Kn.a, onClick: e._handleCopyLink }),
                      t &&
                        a.push({
                          behavioralEventContext: Qn,
                          text: Hn,
                          Icon: On.a,
                          link: '/i/communities/'.concat(n, '/invite'),
                        }),
                      a
                    )
                  }),
                ),
                v()(y()(e), '_renderActionMenu', function (t) {
                  var n = e.props,
                    a = n.community,
                    r = n.communityId,
                    i = null == a ? void 0 : a.role,
                    l = Object(M.f)(i),
                    o = e._getCommunityShareItems(l, r)
                  return _.a.createElement(Re.a, { items: o, onCloseRequested: t })
                }),
                v()(y()(e), '_handleCopyLink', function (t) {
                  var n = e.props,
                    a = n.addToast,
                    r = n.communityId
                  Ln.a.setString('https://twitter.com/i/communities/'.concat(r)), t(), a({ text: Pn })
                }),
                v()(y()(e), '_handleDescriptionClick', function () {
                  var t = e.state.shouldShowFullDescription
                  e.setState({ shouldShowFullDescription: !t })
                }),
                v()(y()(e), '_getDescriptionOverflow', function (t) {
                  void 0 === e.state.hasOverflow && e.setState({ hasOverflow: t })
                }),
                e
              )
            }
            return (
              m()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.community
                    return e
                      ? _.a.createElement(
                          R.a,
                          { behavioralEventViewType: 'timeline' },
                          _.a.createElement(
                            Me.a,
                            { style: Jn.container },
                            _.a.createElement(
                              Me.a,
                              null,
                              _.a.createElement(Ft, { bannerMedia: e.media }),
                              this._renderCommunityDescription(),
                            ),
                            this._renderTabs(),
                          ),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(_.a.Component))
      v()(Xn, 'contextType', ie.a)
      var Jn = W.a.create(function (e) {
          return {
            access: { alignSelf: 'stretch', flexDirection: 'row' },
            name: { flexDirection: 'column', justifyContent: 'left', marginBottom: e.spaces.space8 },
            container: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
            button: { justifyContent: 'right' },
            bottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
            inviteButton: { marginRight: e.spaces.space8 },
            buttons: { flexDirection: 'row', height: 'fit-content' },
            description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 },
          }
        }),
        Gn = tn(Xn),
        Yn = n('eSoz'),
        Zn = n('8Lfv'),
        $n = n('LI/a'),
        ea = function (e, t) {
          return t.communityId
        },
        ta = function (e, t) {
          var n = Yn.c.select(e, t.communityId)
          return Object(M.f)(null == n ? void 0 : n.role)
        },
        na = Object(w.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: ta,
              rankedTweetsModule: Object(I.createSelector)(ea, function (e) {
                return Object($n.b)(e)
              }),
              tweetsModule: Object(I.createSelector)(ea, function (e) {
                return Object($n.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: Zn.a,
              createLocalApiErrorHandler: Object(ke.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        aa = n('FIs5'),
        ra = n('EUHl'),
        ia = n('7BdX'),
        la = n('7JQg'),
        oa = j.a.c18e3a3e,
        ca = j.a.d68146c0,
        sa = j.a.h5245afa,
        ua = j.a.f05dbeff,
        ma = { page: 'community', section: 'home' },
        da = { page: 'community', section: 'latest' },
        ya = { page: 'community', section: 'tweets' },
        pa = na(function (e) {
          var t = _.a.useContext(ie.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            r = e.isCommunityMember,
            i = e.rankedTweetsModule,
            l = e.tweetsModule,
            o = e.type === rr.Home ? { module: i, scribeNamespace: ma } : { module: l, scribeNamespace: da },
            c = t ? o : { module: l, scribeNamespace: ya },
            s = c.module,
            u = c.scribeNamespace
          _.a.useEffect(
            function () {
              n(s).catch(a())
            },
            [n, a, r, s],
          )
          var m = _.a.useCallback(function () {
            return _.a.createElement(aa.a, { buttonType: 'brandOutlined', header: oa, message: ca })
          }, [])
          return _.a.createElement(
            la.b,
            { namespace: u },
            _.a.createElement(
              R.a,
              { behavioralEventViewType: 'tweets' },
              _.a.createElement(L.a, {
                loadingAccessibilityLabel: ua,
                module: s,
                newTweetsPillMode: ra.a.CLIENT,
                prerollDisplayLocation: ia.c.OTHER,
                refreshControl: null,
                renderEmptyState: m,
                title: sa,
              }),
            ),
          )
        }),
        fa = n('o3oN'),
        ga = ['loggedInUser'],
        ba = Object(w.a)()
          .propsFromState(function () {
            return {
              communityId: C.c,
              community: C.a,
              communityTheme: C.f,
              fetchStatus: C.b,
              membershipsFetchStatus: fa.d,
              isCommunityMember: C.h,
              joinActionResultType: C.i,
              loggedInUser: Zt.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Ht()(e, ga)
            return o()({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ke.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: Yn.c.fetchOneIfNeeded,
              fetchCommunityMemberships: fa.a,
            }
          })
          .withAnalytics({ page: 'community' }),
        ha = (n('MvUL'), n('zCf4')),
        va = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(je.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ne.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            _.a.createElement(
              'g',
              null,
              _.a.createElement('path', {
                d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
              }),
              _.a.createElement('path', {
                d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
              }),
            ),
          )
        }
      va.metadata = { width: 24, height: 24 }
      var Ea = va,
        _a = n('wpLu'),
        Ca = j.a.bf359e0d,
        ka = j.a.e8fcdd3a,
        Sa = j.a.h54d99da,
        Ia = j.a.f30c8202,
        wa = j.a.ca7eeabf,
        Ta = j.a.acae4034,
        Fa = j.a.e2186ee2,
        xa = j.a.j24c37b2,
        Ma = _.a.memo(function (e) {
          var t = e.community,
            n = t.id_str,
            a = Object(ha.f)(),
            r = _.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(n, '/'))
              },
              [a, n],
            ),
            i = _.a.createElement(
              Me.a,
              { accessibilityRole: 'list', style: Ra.rulesContainer },
              t.rules.map(function (e) {
                return _.a.createElement(
                  te.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: Ra.rule },
                  e.name,
                )
              }),
            )
          return _.a.createElement(
            ht.a,
            {
              actionLabel: xa,
              graphicDisplayMode: 'none',
              headline: Ca,
              onAction: r,
              onClose: r,
              subtext: ka,
              withCloseButton: !0,
            },
            _.a.createElement(
              Me.a,
              { style: Ra.infoItemsContainer },
              _.a.createElement(ae.a, {
                containerStyle: Ra.itemContainer,
                items: [
                  { label: Sa, description: Ia, decoration: _.a.createElement(Ea, { style: Ra.decorationContainer }) },
                  { label: wa, decoration: _.a.createElement(_a.a, { style: Ra.decorationContainer }), description: i },
                  { label: Ta, description: Fa, decoration: _.a.createElement(He, { style: Ra.decorationContainer }) },
                ],
              }),
            ),
          )
        }),
        Ra = W.a.create(function (e) {
          return {
            infoItemsContainer: { marginBottom: e.spaces.space32 },
            itemContainer: { paddingHorizontal: 0 },
            decorationContainer: {
              color: e.colors.text,
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space20,
            },
            rulesContainer: { marginTop: e.spaces.space4, marginLeft: e.spaces.space8 },
            rule: { display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' },
          }
        }),
        La = Ma,
        Ka = n('dwig'),
        Oa = n('MDbM'),
        Aa = n('0+qk'),
        Na = n('/de5'),
        ja = (n('FtFR'), n('hBvt'), n('/ekK')),
        Pa = Object(w.a)()
          .propsFromState(function () {
            return { flags: ja.b }
          })
          .propsFromActions(function () {
            return { setFlag: ja.c, retrieveFlagsIfNeeded: ja.a }
          }),
        Ha = n('hOZg'),
        Ba = n('WtWS'),
        Da = n('0ULw'),
        Ua = j.a.a841c4ea,
        za = j.a.fd36e4f7,
        Va = j.a.b192b58b,
        qa = j.a.gd30278f,
        Wa = j.a.cbdddb09,
        Qa = j.a.h5890b1a,
        Xa = [
          {
            flag: 'setup_clicked_rules',
            title: j.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: j.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: j.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: j.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(qa, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        Ja = _.a.memo(function (e) {
          var t = e.community.id_str,
            n = e.flags,
            a = e.retrieveFlagsIfNeeded,
            r = e.setFlag,
            i = _.a.useContext(ie.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            l = Object(ha.f)()
          _.a.useEffect(
            function () {
              i && a(t)
            },
            [t, i, a],
          )
          var o = _.a.useCallback(
            function () {
              r(t, 'setup_show_checklist', !1)
            },
            [t, r],
          )
          if (!n.setup_show_checklist || !i) return null
          var c = function (e) {
              r(t, e.flag, !0).then(function () {
                l.push(e.link(t))
              })
            },
            s = function (e, t) {
              13 === t.keyCode && c(e)
            }
          return _.a.createElement(
            Me.a,
            { style: Ga.wrapper },
            _.a.createElement(Le.a, {
              accessibilityLabel: Va,
              icon: _.a.createElement(Ha.a, { style: Ga.close }),
              onClick: o,
              pullRight: !0,
              size: 'medium',
              style: Ga.dismiss,
              type: 'brandText',
            }),
            _.a.createElement(te.b, { size: 'title3', style: Ga.headline, weight: 'bold' }, Ua),
            _.a.createElement(te.b, { style: Ga.subtext }, za),
            _.a.createElement(
              Me.a,
              { accessibilityRole: 'list', style: Ga.list },
              Xa.map(function (e) {
                var t = Boolean(n[e.flag])
                return _.a.createElement(
                  Me.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !t,
                    key: e.flag,
                    onClick: t ? void 0 : c.bind(null, e),
                    onKeyPress: t ? void 0 : s.bind(null, e),
                    style: [Ga.entry, t ? Ga.completedEntry : Ga.uncompletedEntry],
                  },
                  _.a.createElement(te.b, { weight: 'bold' }, e.title),
                  t
                    ? _.a.createElement(Ba.a, { accessibilityLabel: Wa, style: Ga.iconCompleted })
                    : _.a.createElement(Da.a, { accessibilityLabel: Qa, style: Ga.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        Ga = W.a.create(function (e) {
          return {
            wrapper: {
              padding: e.spaces.space32,
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.gray200,
              color: e.colors.text,
            },
            dismiss: { marginLeft: 'auto' },
            headline: { paddingBottom: e.spaces.space4 },
            subtext: { color: e.colors.gray700, paddingBottom: e.spaces.space16 },
            close: { color: e.colors.text },
            list: { gap: e.spaces.space16 },
            entry: { display: 'flex', flexDirection: 'row', gap: e.spaces.space8, listStylePosition: 'inside' },
            completedEntry: {},
            uncompletedEntry: { cursor: 'pointer' },
            iconCompleted: { marginLeft: 'auto', color: e.colors.green500 },
            iconUncompleted: { marginLeft: 'auto', color: e.colors.gray300 },
          }
        }),
        Ya = Pa(Ja),
        Za = n('VS6U'),
        $a = n('QRqA'),
        er = n('Qwev'),
        tr = n('mw9i'),
        nr = 'community',
        ar = { type: 'serversideContextKey', serversideContextType: 'community' },
        rr = Object.freeze({ Home: 'home', Latest: 'latest' }),
        ir = j.a.a7c2e06c,
        lr = (function (e) {
          f()(n, e)
          var t = b()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(y()(e), '_getTweetButtonLocationState', function () {
                return { selectedCommunityId: e.props.communityId, defaultText: '' }
              }),
              v()(
                y()(e),
                '_getWelcomeEducationParams',
                Object(Mn.a)(function (e, t) {
                  return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === t, theme: e.theme } }
                }),
              ),
              v()(
                y()(e),
                '_getMemoizedBehavioralEventContext',
                Object(Mn.a)(function (e) {
                  return { clientEntity: o()(o()({}, ar), {}, { serversideContextId: e }), viewType: nr }
                }),
              ),
              v()(y()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.community,
                  a = t.communityId,
                  r = t.fetchStatus,
                  i = t.history,
                  l = t.joinActionResultType,
                  o = t.location,
                  c = t.match,
                  s = (null == n ? void 0 : n.role) === M.a.Admin && void 0 !== o.query.show_creation_summary,
                  u = e._isAllowedToTweet
                    ? _.a.createElement(Aa.a, { getLocationState: e._getTweetButtonLocationState, history: i })
                    : null
                return a && r === Oa.a.LOADING
                  ? _.a.createElement(er.a, { style: or.topMargin })
                  : a && null != n && n.name && r === Oa.a.LOADED
                  ? _.a.createElement(
                      Ka.a,
                      { component: tr.a, fab: u },
                      _.a.createElement($a.a, e._getWelcomeEducationParams(n, l)),
                      s && _.a.createElement(La, { community: n }),
                      e._renderCommunityDetail(),
                      _.a.createElement(Ya, { community: n }),
                      _.a.createElement(
                        ha.b,
                        { exact: !0, path: '/i/communities/'.concat(a, '/about') },
                        _.a.createElement(Ee, { communityId: a, match: c }),
                      ),
                      _.a.createElement(
                        ha.d,
                        null,
                        _.a.createElement(
                          ha.b,
                          { exact: !0, path: '/i/communities/'.concat(a, '/') },
                          _.a.createElement(pa, { communityId: a, location: o, match: c, type: rr.Home }),
                        ),
                        _.a.createElement(
                          ha.b,
                          { path: '/i/communities/'.concat(a, '/latest') },
                          _.a.createElement(pa, { communityId: a, location: o, match: c, type: rr.Latest }),
                        ),
                      ),
                    )
                  : _.a.createElement(Na.b, { history: i, location: o, match: c })
              }),
              v()(y()(e), '_renderCommunityDetail', function () {
                var t = e.props,
                  n = t.communityId,
                  a = t.history,
                  r = t.match
                return n ? _.a.createElement(Gn, { communityId: n, history: a, match: r }) : null
              }),
              v()(y()(e), '_handleFetchIfNeeded', function () {
                var t = e.props,
                  n = t.communityId,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetchCommunityIfNeeded,
                  i = t.fetchCommunityMemberships,
                  l = t.membershipsFetchStatus
                n && r(n).catch(a({})), l === Fe.a.NONE && i().catch(a())
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchIfNeeded()
                },
              },
              {
                key: '_isAllowedToTweet',
                get: function () {
                  var e = this.props.isCommunityMember
                  return this.context.featureSwitches.isTrue('c9s_participation_enabled') && e
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.community,
                    n = e.communityId,
                    a = e.history,
                    r = e.screenName,
                    i = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
                    l = null == t ? void 0 : t.name,
                    o = n
                      ? _.a.createElement($e, {
                          canModerate: Object(M.c)(null == t ? void 0 : t.role),
                          communityId: n,
                          userRole: null == t ? void 0 : t.role,
                        })
                      : null,
                    c = this._getMemoizedBehavioralEventContext(n || '')
                  return _.a.createElement(
                    _e.a,
                    { behavioralEventContext: c },
                    _.a.createElement(Za.a, {
                      backLocation: r && '/'.concat(r, '/communities'),
                      composeOptions: this._getTweetButtonLocationState(),
                      documentTitle: l ? ir({ communityName: l }) : '',
                      history: a,
                      primaryContent: this._renderPrimaryContent(),
                      rightControl: o,
                      sidebarContent: _.a.createElement(Ce.a, { communityId: n, withCommunityRules: i }),
                      title: l || null,
                      withTweetButton: this._isAllowedToTweet,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      v()(lr, 'contextType', ie.a)
      var or = W.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        cr = ba(lr)
      t.default = cr
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        o = n('v6aA'),
        c = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = u.a.e2df7cf1,
        y = u.a.be9bb312,
        p = u.a.e988475f,
        f = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityPurpose,
            i = e.onChange,
            s = l.a.useState(void 0),
            u = r()(s, 2),
            f = u[0],
            g = u[1],
            b = l.a.useState(!1),
            h = r()(b, 2),
            v = h[0],
            E = h[1],
            _ = l.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            C = l.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.g)(t, 3, _)
                n && g(p({ minCharacterCount: 3, maxCharacterCount: _ })), E(n), i(t, n)
              },
              [_, g, i],
            )
          return l.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: f,
            helperText: y,
            invalid: v,
            label: d,
            multiline: !0,
            name: 'typedCommunityPurpose',
            numberOfLines: 3,
            onChange: C,
            spellCheck: 'false',
            validLength: _,
            value: a,
          })
        }
    },
    U3Z9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateCommunityModal', function () {
          return M
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('KqXw'), n('MvUL'), n('ERkP')),
        l = n.n(i),
        o = n('+Kfv'),
        c = n('ROT1'),
        s = n('U0Qk'),
        u = n('eSoz'),
        m = n('RqPI'),
        d = n('rxPX'),
        y = Object(d.a)()
          .propsFromState(function () {
            return { communitiesActions: m.f }
          })
          .propsFromActions(function () {
            return { createCommunity: u.b }
          }),
        p = n('jHSc'),
        f = n('3XMw'),
        g = n.n(f),
        b = n('0weh'),
        h = n('5FtR'),
        v = n('MWbm'),
        E = n('/yvb'),
        _ = n('4zmP'),
        C = n('t62R'),
        k = n('rHpw'),
        S = g.a.i6e7e298,
        I = g.a.a226497c,
        w = g.a.c9d56b71,
        T = g.a.fc2a5c92,
        F = g.a.c1ad5a11,
        x = { viewType: 'community' },
        M = l.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            a = e.history,
            i = l.a.useState(!0),
            u = r()(i, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            f = r()(y, 2),
            g = f[0],
            k = f[1],
            M = m || g,
            L = l.a.useState(''),
            K = r()(L, 2),
            O = K[0],
            A = K[1],
            N = l.a.useState(''),
            j = r()(N, 2),
            P = j[0],
            H = j[1],
            B = l.a.useState(null),
            D = r()(B, 2),
            U = D[0],
            z = D[1],
            V = l.a.useCallback(function (e, t) {
              A(e), d(t)
            }, []),
            q = l.a.useCallback(function (e, t) {
              H(e), 0 === e.length ? k(!1) : k(t)
            }, []),
            W = l.a.useCallback(
              function () {
                z(null),
                  n(O, { description: P })
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && a.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && z(e)
                    })
                    .catch(function (e) {
                      z({ error: 'GraphQL error', reason: e })
                    })
              },
              [O, P, n, a],
            )
          if (null == t || !t.create) return l.a.createElement(h.a, { to: '/home' })
          var Q = l.a.createElement(E.a, { disabled: M, onClick: W, size: 'small', type: 'brandFilled' }, S),
            X = U
              ? l.a.createElement(
                  v.a,
                  { style: R.error },
                  l.a.createElement(_.a, { Icon: b.a, headline: T, text: F, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            o.a,
            { behavioralEventContext: x },
            l.a.createElement(
              p.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: R.root,
                history: a,
                rightControl: Q,
                title: I,
              },
              l.a.createElement(
                l.a.Fragment,
                null,
                X,
                l.a.createElement(C.b, { color: 'gray700', style: R.text }, w),
                l.a.createElement(c.a, { autoFocus: !0, communityName: O, onChange: V }),
                l.a.createElement(s.a, { communityPurpose: P, onChange: q }),
              ),
            ),
          )
        }),
        R = k.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        L = y(M)
      t.default = L
    },
    WuQQ: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityMemberCount_community',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null }],
        type: 'Community',
        abstractKey: null,
        hash: '793bedf8ae1b012c222a20424e8123bb',
      }
      t.default = a
    },
    XtoV: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        l = n.n(i),
        o = n('ERkP'),
        c = n.n(o),
        s = n('/yvb'),
        u = n('3XMw'),
        m = n.n(u),
        d = n('pwey'),
        y = ['community'],
        p = m.a.b139b549,
        f = c.a.createElement(d.a, null),
        g = c.a.memo(function (e) {
          var t = e.community,
            n = l()(e, y)
          if (!t || 'CommunityInvitesUnavailable' === t.invites_result.__typename) return null
          var a = '/i/communities/'.concat(t.id_str, '/invite')
          return c.a.createElement(s.a, r()({ accessibilityLabel: p, icon: f, link: a, type: 'primaryText' }, n))
        })
      t.a = g
    },
    ZYKh: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c,
        s,
        u,
        m,
        d,
        y,
        p,
        f,
        g = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityFacePileQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityFacePile_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'CommunityFacePileQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'UserResults',
                    kind: 'LinkedField',
                    name: 'members_facepile_results',
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'result',
                        plural: !1,
                        selections: [
                          (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiUser',
                                kind: 'LinkedField',
                                name: 'legacy',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'profile_image_url_https',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              (o = {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'defaultScalars',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'legacy',
                              }),
                              (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              (s = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                              {
                                alias: null,
                                args: null,
                                concreteType: 'TimelineRichText',
                                kind: 'LinkedField',
                                name: 'unavailable_message',
                                plural: !1,
                                selections: [
                                  { alias: null, args: null, kind: 'ScalarField', name: 'alignment', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'TimelineRichTextEntity',
                                    kind: 'LinkedField',
                                    name: 'entities',
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: 'fromIndex',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'from_index',
                                        storageKey: null,
                                      },
                                      {
                                        alias: 'toIndex',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'to_index',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'format',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'ref',
                                        plural: !1,
                                        selections: [
                                          l,
                                          { kind: 'TypeDiscriminator', abstractKey: '__isTimelineReferenceObject' },
                                          {
                                            alias: 'type',
                                            args: null,
                                            kind: 'ScalarField',
                                            name: '__typename',
                                            storageKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: (m = [
                                              (u = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'text',
                                                storageKey: null,
                                              }),
                                            ]),
                                            type: 'TimelineRichTextCashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              c,
                                              (d = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'url',
                                                storageKey: null,
                                              }),
                                            ],
                                            type: 'TimelineRichTextList',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: m,
                                            type: 'TimelineRichTextHashtag',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              d,
                                              {
                                                alias: 'urlType',
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'url_type',
                                                storageKey: null,
                                              },
                                              {
                                                alias: 'urtEndpointOptions',
                                                args: null,
                                                concreteType: 'TimelineUrtEndpointOptions',
                                                kind: 'LinkedField',
                                                name: 'urt_endpoint_options',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: 'cacheId',
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'cache_id',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'subtitle',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'title',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: 'requestParams',
                                                    args: null,
                                                    concreteType: 'RequestParamsEntry',
                                                    kind: 'LinkedField',
                                                    name: 'request_params',
                                                    plural: !0,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'key',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'value',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            type: 'TimelineUrl',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              (f = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'user_results',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: 'LinkedField',
                                                    name: 'result',
                                                    plural: !1,
                                                    selections: [
                                                      l,
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: 'ApiUser',
                                                            kind: 'LinkedField',
                                                            name: 'legacy',
                                                            plural: !1,
                                                            selections: [
                                                              (y = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'screen_name',
                                                                storageKey: null,
                                                              }),
                                                            ],
                                                            storageKey: null,
                                                          },
                                                          o,
                                                          i,
                                                          c,
                                                        ],
                                                        type: 'User',
                                                        abstractKey: null,
                                                      },
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          (p = {
                                                            alias: 'reason',
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'unavailable_reason',
                                                            storageKey: null,
                                                          }),
                                                          s,
                                                        ],
                                                        type: 'UserUnavailable',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              }),
                                            ],
                                            type: 'TimelineRichTextUser',
                                            abstractKey: null,
                                          },
                                          {
                                            kind: 'InlineFragment',
                                            selections: [y, f],
                                            type: 'TimelineRichTextMention',
                                            abstractKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'rtl', storageKey: null },
                                  u,
                                ],
                                storageKey: null,
                              },
                              p,
                            ],
                            type: 'UserUnavailable',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  c,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Qsm1_m7FFKtqLxruIZ_Wpg',
            metadata: {},
            name: 'CommunityFacePileQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(g.hash = 'e6fa6a6403decebf26b0d7a5b8332948'), (t.default = g)
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        l = n.n(i),
        o = n('ERkP'),
        c = n.n(o),
        s = n('v6aA'),
        u = n('XOJV'),
        m = n('eSoz'),
        d = n('rxPX'),
        y = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            a = n && u.a.select(e, n)
          return a ? Object(m.g)(e, a) : void 0
        },
        g = Object(d.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: u.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: m.c.fetchOneIfNeeded,
            }
          }),
        b = n('YeIG'),
        h = n('uCxL'),
        v = n('x5Pi'),
        E = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        _ = g(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            o = (e.tweetId, l()(e, E)),
            u = c.a.useContext(s.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == i ? void 0 : i.community_id_str
          c.a.useEffect(
            function () {
              y && Object(b.a)(t) && a(y).catch(n())
            },
            [t, y, n, a],
          )
          var p = m.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(v.f)(i, d, t),
            g = f && Object(v.e)(f),
            _ = m.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            h.a,
            r()({}, o, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: p,
              socialContextProps: g,
              tweet: i,
              withReactions: _,
            }),
          )
        })
      t.a = _
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        i = n('Ud88'),
        l = n('aQQo'),
        o = l.loadQuery,
        c = l.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        m = s.useEffect,
        d = s.useRef,
        y = s.useState,
        p = n('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function g(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : f,
          l = i()
        c()
        var s = r(),
          p = d(new Set([n])),
          b = y(function () {
            return n
          }),
          h = b[0],
          v = b[1],
          E = y(function () {
            return n
          }),
          _ = E[0],
          C = E[1]
        n !== _ && (p.current.add(n), C(n), v(n))
        var k = u(
            function () {
              s.current && (p.current.add(f), v(f))
            },
            [s],
          ),
          S = u(
            function (t, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (s.current) {
                var r,
                  i = o(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : l, e, t, a)
                p.current.add(i), v(i)
              }
            },
            [l, e, v, s],
          ),
          I = d(!1)
        return (
          m(function () {
            return function () {
              I.current = !0
            }
          }, []),
          m(
            function () {
              if (!0 === I.current)
                return (
                  (I.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    S(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var t = p.current
              if (s.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var i = n.value
                    if (i === h) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (g(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (l) {
                  r.e(l)
                } finally {
                  r.f()
                }
              }
            },
            [h, s, S, e],
          ),
          m(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(p.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (g(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, S, k]
        )
      }
    },
    cI4y: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'count' },
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'membersSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'members_slice',
                    args: [(i = { kind: 'Variable', name: 'count', variableName: 'count' })],
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: '__CommunityMembers_Query_members_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            args: [{ kind: 'Variable', name: 'communityId', variableName: 'communityId' }],
                            kind: 'FragmentSpread',
                            name: 'communityPeopleSliceItem_userResult',
                          },
                          (l = {
                            kind: 'ClientExtension',
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                            ],
                          }),
                        ],
                        storageKey: null,
                      },
                      (o = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'membersSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: 'members_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'result',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                                    kind: 'ScalarField',
                                    name: 'community_role',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiUser',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'id_str',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'followed_by',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'profile_image_url_https',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'protected',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'screen_name',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'verified',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    filters: null,
                                    handle: 'defaultScalars',
                                    key: '',
                                    kind: 'LinkedHandle',
                                    name: 'legacy',
                                  },
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          l,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: c,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityMembers_Query_members_slice',
                    kind: 'LinkedHandle',
                    name: 'members_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  s,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'OwzlW0I_RTCIsN-W8XScdQ',
            metadata: { sliceInfoPath: ['community', 'members_slice', 'slice_info'] },
            name: 'membersSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'd5eb23d40bcb19e36e32afc95695f334'), (t.default = u)
    },
    'cz/h': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesDiscoveryScreen', function () {
          return x
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        b = n('es0u'),
        h = n('WpDa'),
        v = n('ZNT5'),
        E = Object(v.a)({
          timelineId: 'communitiesDiscoveryTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunityDiscoveryTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_COMMUNITIES_DISCOVERY_TIMELINE',
          perfKey: 'communitiesDiscoveryTimeline',
          formatResponse: h.a,
        }),
        _ = n('OUEC'),
        C = n('3XMw'),
        k = n.n(C),
        S = n('oQhu'),
        I = n('yoO3'),
        w = n('fTQJ'),
        T = n('VS6U'),
        F = k.a.cb6adb1f,
        x = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var t = e._getModule()
                return g.a.createElement(w.a, { entryConfiguration: _.a, module: t, refreshControl: null, title: F })
              }),
              p()(
                c()(e),
                '_getModule',
                Object(S.a)(function () {
                  return E
                }),
              ),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return g.a.createElement(
                    I.a,
                    { behavioralEventViewType: 'discover' },
                    g.a.createElement(T.a, {
                      backLocation: '/',
                      history: e,
                      primaryContent: this._renderPrimaryContent(),
                      sidebarContent: g.a.createElement(b.a, null),
                      title: F,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.default = x
    },
    fS8x: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('VrFO'),
        l = n.n(i),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        f = n('KEM+'),
        g = n.n(f),
        b = n('/NU0'),
        h = n('rxPX'),
        v = n('AspN'),
        E = function (e, t) {
          return t.media ? t.media : Object(b.a)(t.mediaId) ? Object(v.k)(e, t.mediaId)[0] : void 0
        },
        _ = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        C = Object(h.a)()
          .propsFromState(function () {
            return { media: E, mediaId: _ }
          })
          .propsFromActions(function () {
            return { processMedia: v.f, updateMediaUpload: v.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        k = n('jHSc'),
        S = n('3XMw'),
        I = n.n(S),
        w = n('EeFI'),
        T = 'applyButton',
        F = n('/yvb'),
        x = n('rHpw'),
        M = I.a.gd80afba,
        R = I.a.a753a87f,
        L = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              g()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              g()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return r.a.createElement(
                  F.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: T, type: 'primaryFilled' },
                  R,
                )
              }),
              g()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              g()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  t = a._cropper.current
                if (t) {
                  var n = a.props,
                    r = n.analytics,
                    i = n.media,
                    l = n.mediaId,
                    o = n.onDone,
                    c = n.processMedia,
                    s = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    m = (i || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(b.a)(l) &&
                    (e
                      ? (e(u), o())
                      : (s({ id: l, cropData: d ? void 0 : u }),
                        c(l).then(function () {
                          a.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), o()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = r.a.createRef()),
              e.media || e.onCancel(),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    n = e.history,
                    a = e.title,
                    i = e.withAspectRatioOptions,
                    l = e.withZoomControl,
                    o = this._getMedia()
                  return r.a.createElement(
                    k.b,
                    {
                      backButtonType: 'back',
                      containerStyle: K.root,
                      documentTitle: a || M,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || M,
                    },
                    r.a.createElement(w.a, {
                      defaultAspectRatio: t,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: i,
                      withZoomControl: l,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        K = x.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = C(L),
        A = n('X8FW'),
        N = x.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: N.modal },
          r.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'MemberRequests_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: 'pending_join_requests_slice',
                            args: null,
                            concreteType: 'CommunityJoinRequestsSlice',
                            kind: 'LinkedField',
                            name: '__MemberRequests_Query_members_slice_slice',
                            plural: !1,
                            selections: [
                              (o = {
                                alias: null,
                                args: null,
                                concreteType: 'SliceInfo',
                                kind: 'LinkedField',
                                name: 'slice_info',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'next_cursor',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'previous_cursor',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              }),
                              { args: null, kind: 'FragmentSpread', name: 'list_communityJoinRequestsSlice' },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'MemberRequests_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  i,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      l,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'CommunityJoinRequestsSlice',
                            kind: 'LinkedField',
                            name: 'pending_join_requests_slice',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'CommunityJoinRequest',
                                kind: 'LinkedField',
                                name: 'items',
                                plural: !0,
                                selections: [
                                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'created_at',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'UserCommunityRelationship',
                                    kind: 'LinkedField',
                                    name: 'user_relationship',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'UserResults',
                                        kind: 'LinkedField',
                                        name: 'user_results',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: 'LinkedField',
                                            name: 'result',
                                            plural: !1,
                                            selections: [
                                              l,
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  {
                                                    alias: 'id_str',
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'rest_id',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiUser',
                                                    kind: 'LinkedField',
                                                    name: 'legacy',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'blocking',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'description',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'followed_by',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'following',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'muting',
                                                        storageKey: null,
                                                      },
                                                      i,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'profile_image_url_https',
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: 'screen_name',
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    filters: null,
                                                    handle: 'defaultScalars',
                                                    key: '',
                                                    kind: 'LinkedHandle',
                                                    name: 'legacy',
                                                  },
                                                  c,
                                                ],
                                                type: 'User',
                                                abstractKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      c,
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'CommunityJoinRequestActions',
                                    kind: 'LinkedField',
                                    name: 'actions',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'join_request_approve_action_result',
                                        plural: !1,
                                        selections: (s = [l]),
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'join_request_deny_action_result',
                                        plural: !1,
                                        selections: s,
                                        storageKey: null,
                                      },
                                      c,
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              o,
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            filters: [],
                            handle: 'slice',
                            key: 'MemberRequests_Query_members_slice',
                            kind: 'LinkedHandle',
                            name: 'pending_join_requests_slice',
                          },
                          c,
                        ],
                        type: 'CommunityJoinRequests',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  c,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'q0zU9DV_PwVNBDJoh59Pag',
            metadata: {
              sliceInfoPath: ['community', 'join_requests_result', 'pending_join_requests_slice', 'slice_info'],
            },
            name: 'MemberRequests_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = '39d8f08c35ba33dc591ead5e6c563c9c'), (t.default = u)
    },
    gDCe: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        l = n('Ig1G'),
        o = n('3XMw'),
        c = n.n(o),
        s = n('Nh1N'),
        u = n('MWbm'),
        m = n('4zmP'),
        d = n('rHpw'),
        y = c.a.b6e22e15,
        p = c.a.d17c10d9,
        f = c.a.a1ecaf33,
        g = r.a.memo(function (e) {
          var t,
            n = e.community,
            a = r.a.useContext(i.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !n || n.role !== l.a.Admin || a
            ? null
            : r.a.createElement(
                u.a,
                { style: b.info },
                r.a.createElement(m.a, {
                  Icon: s.a,
                  action: {
                    label: f,
                    link: {
                      pathname: '/messages/compose',
                      query: {
                        recipient_id: '1433894099178774532',
                        text:
                          ((t = n.id_str),
                          'Hi, my community is (https://twitter.com/i/communities/'.concat(
                            t,
                            ') and I would like to add the following accounts as moderators: ',
                          )),
                      },
                    },
                  },
                  headline: y,
                  text: p,
                  type: 'primary',
                }),
              )
        }),
        b = d.a.create(function (e) {
          return { info: { padding: e.spaces.space12 } }
        })
      t.a = g
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        l = n.n(i),
        o = n('ERkP'),
        c = n.n(o),
        s = n('t62R'),
        u = n('I4+6'),
        m = n('cm6r'),
        d = n('rHpw'),
        y = n('MWbm'),
        p = ['align', 'color', 'label'],
        f = d.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          i = e.label,
          o = l()(e, p),
          g = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          y.a,
          { style: f.container },
          c.a.createElement(
            m.a,
            r()({}, o, { interactiveStyles: g, style: f.root }),
            c.a.createElement(s.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('0vv5'),
        r = 500,
        i = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    krnS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ue
      })
      var a,
        r,
        i,
        l,
        o = n('ERkP'),
        c = n.n(o),
        s = n('v6aA'),
        u = n('WpDa'),
        m = n('ZNT5'),
        d = n('Ig1G'),
        y = n('FIs5'),
        p = n('3XMw'),
        f = n.n(p),
        g = (n('enFi'), n('TEoO')),
        b = n('Fr3L'),
        h = n('97Jx'),
        v = n.n(h),
        E = n('yiKp'),
        _ = n.n(E),
        C = n('ddV6'),
        k = n.n(C),
        S = (n('yH/f'), n('ho0z'), n('1YZw')),
        I = n('uDfI'),
        w = n('yrzJ'),
        T = n('mjJ+'),
        F = n('IMA+'),
        x = n('IG7M'),
        M = n('eb3s'),
        R = n('jAXQ'),
        L = n.n(R),
        K = n('9SqB'),
        O = n.n(K),
        A = n('Bg9b'),
        N = n('boUI'),
        j = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        P = f.a.g30bc699,
        H = f.a.af40a8ef,
        B = f.a.e68b09b4,
        D = f.a.ef4602eb,
        U = {
          confirmButtonLabel: H,
          headline: 'Add as moderator?',
          text: function (e) {
            var t = e.screenName
            return c.a.createElement(
              c.a.Fragment,
              null,
              'Are you sure you want to add ',
              c.a.createElement(w.a, { screenName: t }),
              ' as a moderator?',
            )
          },
        },
        z = {
          confirmButtonLabel: B,
          headline: 'Are you sure?',
          text: function (e) {
            var t = e.screenName
            return c.a.createElement(
              c.a.Fragment,
              null,
              'Are you sure you want to remove ',
              c.a.createElement(w.a, { screenName: t }),
              ' as a moderator?',
            )
          },
        },
        V = void 0 !== a ? a : (a = n('rPb+')),
        q = function (e) {
          var t = c.a.useContext(s.a),
            a = t.featureSwitches,
            i = t.loggedInUserId,
            l = a.isTrue('c9s_edit_moderators_enabled'),
            o = e.communityId,
            u = e.userResult,
            m = c.a.useState(null),
            y = k()(m, 2),
            p = y[0],
            f = y[1],
            g = Object(I.c)(),
            b = L()(void 0 !== r ? r : (r = n('tgdH')), u).result,
            h = O()(V),
            E = k()(h, 2),
            C = E[0],
            w = E[1],
            R = c.a.useCallback(
              function (e) {
                var t = e.communityId,
                  n = e.recordId,
                  a = e.role,
                  r = e.successMessage,
                  i = e.userId
                C({
                  variables: { communityId: t, userId: i, role: a },
                  updater: function (e) {
                    var r = e.get(n)
                    null == r || r.setValue(a, 'community_role(community_id:"'.concat(t, '")'))
                  },
                  onCompleted: function () {
                    g(Object(S.b)({ text: r }))
                  },
                  onError: function () {
                    g(Object(S.b)({ text: D }))
                  },
                })
              },
              [C, g],
            ),
            K = c.a.useCallback(
              function (e) {
                var t,
                  n,
                  a,
                  r = e.communityId,
                  i = e.recordId,
                  l = e.roleAction,
                  o = e.screenName,
                  c = e.userId
                switch (l) {
                  case j.PromoteModerator:
                    ;(t = U),
                      (n = d.a.Moderator),
                      (a = (function (e) {
                        var t = e.screenName
                        return '@'.concat(t, ' has been added as a moderator.')
                      })({ screenName: o }))
                    break
                  case j.DemoteModerator:
                    ;(t = z),
                      (n = d.a.Member),
                      (a = (function (e) {
                        var t = e.screenName
                        return '@'.concat(t, ' has been removed as a moderator.')
                      })({ screenName: o }))
                    break
                  default:
                    return
                }
                f(
                  _()(
                    _()({}, t),
                    {},
                    {
                      text: t.text({ screenName: o }),
                      onConfirm: function () {
                        R({ communityId: r, recordId: i, role: n, successMessage: a, userId: c }), f(null)
                      },
                      onCancel: function () {
                        f(null)
                      },
                    },
                  ),
                )
              },
              [R],
            ),
            H = c.a.useCallback(
              function (e) {
                if (!b || 'User' !== b.__typename || !b.legacy) return null
                var t = b.community_role,
                  n = b.id,
                  a = b.legacy,
                  r = a.id_str,
                  i = a.screen_name
                if (!i) return null
                var s = []
                if (l)
                  switch (t) {
                    case d.a.Moderator:
                      s.push({
                        behavioralEventContext: { viewType: 'remove_moderator' },
                        disabled: w,
                        text: 'Remove as a moderator',
                        Icon: A.a,
                        onClick: function () {
                          return K({
                            communityId: o,
                            recordId: n,
                            roleAction: j.DemoteModerator,
                            screenName: i,
                            userId: r,
                          })
                        },
                      })
                      break
                    case d.a.Member:
                      s.push({
                        behavioralEventContext: { viewType: 'add_moderator' },
                        disabled: w,
                        text: 'Add as a moderator',
                        Icon: A.a,
                        onClick: function () {
                          return K({
                            communityId: o,
                            recordId: n,
                            roleAction: j.PromoteModerator,
                            screenName: i,
                            userId: r,
                          })
                        },
                      })
                  }
                return (
                  s.push({
                    behavioralEventContext: { viewType: 'view_profile' },
                    text: P({ screenName: i }),
                    Icon: N.a,
                    link: '/'.concat(i),
                  }),
                  c.a.createElement(T.a, { items: s, onCloseRequested: e, shouldCloseOnClick: !0 })
                )
              },
              [o, K, l, w, b],
            )
          if (!b || 'User' !== b.__typename || !b.legacy) return null
          var B = b.community_role,
            q = b.legacy,
            W = q.id_str,
            Q = q.name,
            X = void 0 === Q ? '' : Q,
            J = q.profile_image_url_https,
            G = q.protected,
            Y = q.screen_name,
            Z = q.verified
          if (!Y || !J || !X) return null
          var $ = B === d.a.Admin || B === d.a.Moderator
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(F.a, {
              avatarUri: J,
              decoration: W !== i ? c.a.createElement(x.a, { renderActionMenu: H }) : void 0,
              displayMode: 'UserCompact',
              displayNameLabel: $ ? B : void 0,
              isProtected: G,
              isVerified: Z,
              name: X,
              screenName: Y,
              userId: W,
            }),
            p
              ? c.a.createElement(
                  M.a,
                  v()(
                    {
                      confirmButtonType: 'primary',
                      onCancel: function () {
                        f(null)
                      },
                    },
                    p,
                  ),
                )
              : null,
          )
        },
        W = n('DQzJ'),
        Q = { context: 'members' },
        X = void 0 !== i ? i : (i = n('cI4y')),
        J = function (e) {
          return e.__id
        },
        G = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(W.a)(X, { communityId: t }),
            r = a.data,
            i = a.fetchNext,
            l = r.community.members_slice.items_results
          return c.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(t),
            identityFunction: J,
            items: l,
            noItemsRenderer: n,
            onNearEnd: i,
            renderer: function (e) {
              return c.a.createElement(q, { communityId: t, userResult: e })
            },
          })
        },
        Y = function (e) {
          return c.a.createElement(b.a, { errorConfig: Q }, c.a.createElement(G, e))
        },
        Z = n('oQhu'),
        $ = { context: 'members' },
        ee = void 0 !== l ? l : (l = n('w9f9')),
        te = function (e) {
          return e.__id
        },
        ne = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(W.a)(ee, { communityId: t }),
            r = a.data,
            i = a.fetchNext,
            l = r.community.moderators_slice.items_results
          return c.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(t),
            identityFunction: te,
            items: l,
            noItemsRenderer: n,
            onNearEnd: i,
            renderer: function (e) {
              return c.a.createElement(q, { communityId: t, userResult: e })
            },
          })
        },
        ae = function (e) {
          return c.a.createElement(b.a, { errorConfig: $ }, c.a.createElement(ne, e))
        },
        re = n('fTQJ'),
        ie = f.a.cdd87523,
        le = f.a.cca5191f,
        oe = f.a.e442bbb4,
        ce = f.a.e9488b0d,
        se = f.a.j43fea20,
        ue = { Moderators: 'Moderators', Members: 'Members' },
        me = Object(Z.a)(function (e) {
          return (function (e) {
            return Object(m.a)({
              timelineId: 'communityMembers-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityMembers
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  a = t.cursor
                return { count: n, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MEMBERS_TIMELINE',
              perfKey: 'communityMembers',
              formatResponse: u.a,
            })
          })(e)
        }),
        de = Object(Z.a)(function (e) {
          return (function (e) {
            return Object(m.a)({
              timelineId: 'communityModerators-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityModerators
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  a = t.cursor
                return { count: n, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MODERATORS_TIMELINE',
              perfKey: 'communityModerators',
              formatResponse: u.a,
            })
          })(e)
        }),
        ye = function () {
          return c.a.createElement(y.a, { header: ie, message: le })
        }
      t.b = function (e) {
        var t = c.a.useContext(s.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          n = e.communityId,
          a = e.mode,
          r = e.userRole,
          i = a === ue.Moderators
        if (t && r === d.a.Admin)
          return i
            ? c.a.createElement(ae, { communityId: n, renderEmptyState: ye })
            : c.a.createElement(Y, { communityId: n, renderEmptyState: ye })
        var l = i ? de(n) : me(n),
          o = i ? ce : se
        return c.a.createElement(re.a, { loadingAccessibilityLabel: o, module: l, renderEmptyState: ye, title: oe })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return pe
        })
      n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        l = n('Ig1G'),
        o = n('EPsT'),
        c = n('eSoz'),
        s = n('rxPX'),
        u = n('0KEI'),
        m = n('R5kW'),
        d = function (e, t) {
          var n,
            a = Object(m.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        y = function (e, t) {
          var n = Object(c.h)(e, t.communityId)
          return 'CommunityJoinRequests' === (null == n ? void 0 : n.__typename)
        },
        p = function (e, t) {
          var n = Object(c.h)(e, t.communityId)
          return 'CommunityJoinRequests' === (null == n ? void 0 : n.__typename) ? n.pending_join_request_count : 0
        },
        f = function (e, t) {
          return Object(m.c)(e, t.communityId)
        },
        g = Object(s.a)()
          .propsFromState(function () {
            return { canReviewMemberRequests: y, count: d, joinRequestCount: p, moderationFetchStatus: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              fetchCommunityModerationData: m.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        b = n('kGix'),
        h = n('3XMw'),
        v = n.n(h),
        E = n('KQzH'),
        _ = n('yoO3'),
        C = n('mWs5'),
        k = n('MWbm'),
        S = n('rHpw'),
        I = n('Znyr'),
        w = n('6vad'),
        T = n('csss'),
        F = n('OOKO'),
        x = n('zIWA'),
        M = n('yiKp'),
        R = n.n(M),
        L = n('Lsrn'),
        K = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            R()(
              R()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [L.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var A = O,
        N = n('M2x3'),
        j = n('SNyS'),
        P = n('S+H3'),
        H = n('PU7B'),
        B = v.a.dce5e1b3,
        D = v.a.c5d8c93d,
        U = v.a.c8c7f9fc,
        z = v.a.c045c7b6,
        V = v.a.a87df2ee,
        q = v.a.dc6ce7b4,
        W = v.a.gfca5254,
        Q = v.a.bb081ea1,
        X = v.a.h6beb5fa,
        J = v.a.e3f04700,
        G = v.a.efc26607,
        Y = v.a.gfccba44,
        Z = v.a.adfcc3cd,
        $ = v.a.d0330d9c,
        ee = v.a.fd67f7c8,
        te = v.a.gc00d212,
        ne = v.a.a997eca0,
        ae = 'Leave moderation team',
        re = 'No longer wish to be a moderator?',
        ie =
          'By leaving the moderation team, you will no longer have access to Moderator Tools. You will also have to be re-invited as a moderator.',
        le = 'Leave moderation role',
        oe = S.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        ce = r.a.createElement(x.a, { style: oe.thumbnail }),
        se = r.a.createElement(A, { style: oe.thumbnail }),
        ue = r.a.createElement(N.a, { style: oe.thumbnail }),
        me = r.a.createElement(j.a, { style: oe.thumbnail }),
        de = r.a.createElement(P.a, { style: oe.thumbnail }),
        ye = r.a.createElement(H.a, { style: oe.thumbnail }),
        pe = function (e) {
          var t = r.a.useContext(i.a).featureSwitches,
            n = e.canReviewMemberRequests,
            a = e.community,
            c = e.communityId,
            s = e.count,
            u = e.createLocalApiErrorHandler,
            m = e.fetchCommunityModerationData,
            d = e.joinRequestCount,
            y = e.match,
            p = e.moderationFetchStatus,
            f = u(),
            g = t.isTrue('c9s_moderation_enabled'),
            h = t.isTrue('c9s_rule_management_enabled'),
            v = t.isTrue('c9s_request_to_join_enabled'),
            S = t.isTrue('c9s_edit_moderators_enabled')
          r.a.useEffect(
            function () {
              p === b.a.NONE && g && m(c).catch(f)
            },
            [f, c, m, p, g],
          )
          var x = r.a.useCallback(
              function () {
                return g && s > 0
                  ? r.a.createElement(I.a, {
                      count: s,
                      standalone: !0,
                      truncatedCountFormatter: X,
                      unreadCountLabel: J,
                      withBorder: !1,
                    })
                  : null
              },
              [s, g],
            ),
            M = r.a.useCallback(
              function () {
                return v && d > 0
                  ? r.a.createElement(I.a, {
                      count: d,
                      standalone: !0,
                      truncatedCountFormatter: X,
                      unreadCountLabel: J,
                      withBorder: !1,
                    })
                  : null
              },
              [d, v],
            ),
            R = a.role,
            L = R === l.a.Admin ? B : D,
            K = R === l.a.Admin ? Z : $,
            O = !y.isExact
          return r.a.createElement(
            _.a,
            { locationKey: 'communitySettingsRoot' },
            r.a.createElement(
              C.a,
              { communityId: c, screenType: 'secondaryRoot', title: L, withDetailOpen: O },
              r.a.createElement(
                k.a,
                null,
                g
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(w.b, { text: U }),
                      r.a.createElement(E.a, {
                        label: z,
                        link: '/i/communities/'.concat(c, '/moderation/reported_tweets'),
                        renderRightContent: x,
                        thumbnail: ce,
                      }),
                    )
                  : null,
                v && n
                  ? r.a.createElement(E.a, {
                      label: Y,
                      link: '/i/communities/'.concat(c, '/moderation/member_requests'),
                      renderRightContent: M,
                      thumbnail: se,
                    })
                  : null,
                r.a.createElement(w.b, { text: V }),
                r.a.createElement(E.a, {
                  description: G({ memberCount: a.member_count }),
                  label: q,
                  link: '/i/communities/'.concat(c, '/tools/members'),
                  thumbnail: de,
                }),
                h
                  ? r.a.createElement(E.a, {
                      description: K,
                      label: W,
                      link: '/i/communities/'.concat(c, '/tools/rules'),
                      thumbnail: ye,
                    })
                  : null,
                R === l.a.Admin
                  ? r.a.createElement(E.a, {
                      description: ee,
                      label: Q,
                      link: '/i/communities/'.concat(c, '/tools/settings'),
                      thumbnail: ue,
                    })
                  : null,
                r.a.createElement(T.a, {
                  description: ne,
                  label: te,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: me,
                }),
                R === l.a.Moderator && S
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(F.a, { spacing: 'space1' }),
                      r.a.createElement(o.a, {
                        confirmationSheetConfirmButtonLabel: le,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: re,
                        confirmationSheetText: ie,
                        label: ae,
                        onConfirmationSheetConfirm: function () {},
                        withBottomBorder: !1,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        fe = g(pe)
      t.default = fe
    },
    'ldL/': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDescriptionToggle_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'b0d158b55a32cd7c45788562b8f71a71',
      }
      t.default = a
    },
    m0MN: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesModerationContainer', function () {
          return Lt
        })
      var a,
        r,
        i,
        l,
        o = n('97Jx'),
        c = n.n(o),
        s = n('m3Bd'),
        u = n.n(s),
        m = (n('KqXw'), n('WNMA'), n('ERkP')),
        d = n.n(m),
        y = n('v6aA'),
        p = n('+Kfv'),
        f = n('Ig1G'),
        g = n('1Idg'),
        b = n('eSoz'),
        h = n('rxPX'),
        v = n('0KEI'),
        E = Object(h.a)()
          .propsFromState(function () {
            return { community: g.a, fetchStatus: g.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: b.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        _ = n('G1WX'),
        C = (n('ho0z'), n('es0u')),
        k = n('3XMw'),
        S = n.n(k),
        I = n('VTxf'),
        w = n('yoO3'),
        T = n('Fr3L'),
        F = n('FIs5'),
        x = n('TEoO'),
        M = (n('1t7P'), n('jQ/y'), n('fs1G')),
        R = n('MWbm'),
        L = n('/yvb'),
        K = n('rHpw'),
        O = (n('enFi'), n('jAXQ')),
        A = n.n(O),
        N = S.a.i22835dd,
        j = S.a.cb59a0fd,
        P = void 0 !== a ? a : (a = n('PMbW')),
        H = function (e) {
          var t = e.communityJoinRequestActions,
            n = A()(P, t),
            a = n.join_request_approve_action_result,
            r = n.join_request_deny_action_result,
            i = 'CommunityJoinRequestDenyAction' === (null == r ? void 0 : r.__typename),
            l = 'CommunityJoinRequestApproveAction' === (null == a ? void 0 : a.__typename)
          return d.a.createElement(
            R.a,
            { style: B.buttons },
            d.a.createElement(L.a, { disabled: !i, onPress: M.a, style: B.button, type: 'destructiveOutlined' }, j),
            d.a.createElement(L.a, { disabled: !l, onPress: M.a, style: B.button, type: 'primaryOutlined' }, N),
          )
        },
        B = K.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        D = n('tocL'),
        U = n('t62R'),
        z = n('IMA+'),
        V = n('GBcw'),
        q = n('0yYu'),
        W = void 0 !== r ? r : (r = n('8vG3')),
        Q = { blocking: S.a.g8907fde, muting: S.a.f69c2298 },
        X = {
          mutual: { contextType: D.a.FollowMutual, text: S.a.ae2205d1 },
          following: { contextType: D.a.FollowFollowing, text: S.a.d960b55b },
          followedBy: { contextType: D.a.FollowFollowed, text: S.a.b7f1e58a },
        },
        J = {},
        G = function (e) {
          var t = e.communityJoinRequest,
            n = A()(W, t),
            a = n.user_relationship.user_results.result
          if (!a || 'User' !== a.__typename || !a.legacy) return null
          var r = a.id_str,
            i = a.legacy,
            l = i.blocking,
            o = i.description,
            c = i.followed_by,
            s = i.following,
            u = i.muting,
            m = i.name,
            y = i.profile_image_url_https,
            p = i.screen_name
          if (!y || !p || !m) return null
          var f = n.created_at,
            g = (function (e) {
              var t = e.following,
                n = e.isFollowedBy
              return t && n ? X.mutual : t ? X.following : n ? X.followedBy : void 0
            })({ isFollowedBy: c, following: s }),
            b = (function (e) {
              var t = e.blocking,
                n = e.muting
              return t ? Q.blocking : n ? Q.muting : void 0
            })({ blocking: l, muting: u }),
            h = d.a.createElement(
              R.a,
              null,
              b && d.a.createElement(U.b, { color: 'red500', style: Y.bottomText }, b),
              d.a.createElement(H, { communityJoinRequestActions: n.actions }),
            )
          return d.a.createElement(
            d.a.Fragment,
            null,
            d.a.createElement(z.a, {
              avatarUri: y,
              bottomControl: h,
              description: o || void 0,
              displayMode: 'UserDetailed',
              entities: J,
              name: m,
              screenName: p,
              screenNameSuffix: d.a.createElement(V.a, { color: 'gray700', timestamp: f }),
              socialContext: g,
              userId: r,
            }),
            d.a.createElement(q.a, null),
          )
        },
        Y = K.a.create(function (e) {
          return { bottomText: { marginTop: e.spaces.space12 } }
        }),
        Z = S.a.addbb11e,
        $ = S.a.c38131de,
        ee = void 0 !== i ? i : (i = n('Jt8P')),
        te = function (e) {
          return e.id
        },
        ne = function (e) {
          return d.a.createElement(G, { communityJoinRequest: e })
        },
        ae = function () {
          return d.a.createElement(F.a, { header: Z, message: $ })
        },
        re = function (e) {
          var t = e.communityJoinRequests,
            n = e.fetchNext,
            a = A()(ee, t).items
          return d.a.createElement(x.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: te,
            items: a,
            noItemsRenderer: ae,
            onNearEnd: n,
            renderer: ne,
          })
        },
        ie = n('VS6U'),
        le = n('zCf4'),
        oe = n('DQzJ'),
        ce = S.a.gfccba44,
        se = 'member_requests',
        ue = { context: se },
        me = void 0 !== l ? l : (l = n('gAl+')),
        de = function (e) {
          var t = Object(le.f)(),
            n = e.communityId,
            a = Object(oe.a)(me, { communityId: n }),
            r = a.data,
            i = a.fetchNext,
            l = r.community,
            o = l.join_requests_result,
            c = l.name
          if ('CommunityJoinRequests' === o.__typename) {
            var s = o.pending_join_requests_slice,
              u = d.a.createElement(C.a, {
                communityId: n,
                withCommunityRules: !0,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              m = d.a.createElement(re, { communityJoinRequests: s, fetchNext: i })
            return d.a.createElement(
              w.a,
              { behavioralEventViewType: se },
              d.a.createElement(ie.a, {
                backLocation: '/i/communities/'.concat(n, '/tools'),
                history: t,
                primaryContent: m,
                sidebarContent: u,
                subtitle: c,
                title: ce,
              }),
            )
          }
          return d.a.createElement(I.a, null)
        },
        ye = function (e) {
          var t = e.communityId
          return d.a.createElement(T.a, { errorConfig: ue }, d.a.createElement(de, { communityId: t }))
        },
        pe = n('/de5'),
        fe = n('yiKp'),
        ge = n.n(fe),
        be = (n('2G9S'), n('uFXj'), n('ddV6')),
        he = n.n(be),
        ve = (n('z84I'), n('3zvM')),
        Ee = n('lMB6'),
        _e = Object(ve.f)({ namespace: 'communityReports' }),
        Ce = Ee.a.register(_e),
        ke = n('G6rE'),
        Se = function (e, t) {
          var n,
            a = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (a ? Ce.selectMany(e, a) : []).map(function (t) {
            var n = t.user
            return ge()(ge()({}, t), {}, { reporter: ke.e.select(e, n) })
          })
        },
        Ie = Object(h.a)().propsFromState(function () {
          return { reports: Se }
        }),
        we = n('855f'),
        Te = n('cHvH'),
        Fe = n('5mJL'),
        xe = n('efqG'),
        Me = n('21zW'),
        Re = function (e) {
          return (function (e) {
            var t = e.count,
              n = e.formattedCount
            return d.a.createElement(
              S.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              d.a.createElement(U.b, { color: 'primary' }, S.a.ff0f7429({ count: t, formattedCount: n })),
            )
          })({ count: e, formattedCount: we.a.getFormattedCount(e) })
        },
        Le = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            a = t.created_at,
            r = t.reporter,
            i = d.a.createElement(V.a, { timestamp: a })
          return r
            ? d.a.createElement(Te.a, null, function (e) {
                var a = e.windowWidth
                return d.a.createElement(
                  R.a,
                  { style: n ? Oe.bottomBorder : null },
                  d.a.createElement(z.a, {
                    avatarUri: r.profile_image_url_https,
                    decoration: i,
                    displayMode: 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    screenName: r.screen_name,
                    style: a > K.a.theme.breakpoints.small ? Oe.userCell : void 0,
                    userId: r.id_str,
                  }),
                  d.a.createElement(
                    Fe.a,
                    { avatarCell: null },
                    d.a.createElement(U.b, { color: 'gray700', size: 'subtext2', style: Oe.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        Ke = Ie(function (e) {
          var t = d.a.useState(!1),
            n = he()(t, 2),
            a = n[0],
            r = n[1],
            i = e.reports,
            l = e.tweetCase,
            o = l.report_count,
            c = l.report_created_at_max
          return d.a.createElement(
            d.a.Fragment,
            null,
            d.a.createElement(
              xe.a,
              {
                contentStyle: Oe.popover,
                onDismiss: function () {
                  r(!1)
                },
                renderContent: function () {
                  return d.a.createElement(
                    R.a,
                    { style: Oe.contentContainer },
                    i.map(function (e, t) {
                      return d.a.createElement(Le, { key: e.id_str, report: e, withBottomBorder: t < i.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: a ? 'forceVisible' : 'forceHidden',
              },
              d.a.createElement(
                U.b,
                {
                  onPress: function () {
                    r(!0)
                  },
                },
                Re(o),
              ),
            ),
            d.a.createElement(Me.a, null),
            d.a.createElement(V.a, { timestamp: c }),
          )
        }),
        Oe = K.a.create(function (e) {
          return {
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
              paddingBottom: e.spaces.space12,
            },
            contentContainer: { paddingBottom: e.componentDimensions.gutterVertical },
            popover: { maxWidth: '100%' },
            userCell: { width: e.breakpoints.small },
            rule: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        Ae = n('9EWH'),
        Ne = Object(ve.f)({ namespace: 'communityCases' }),
        je = {
          keepTweet: Object(ve.c)(Ne, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Ae.a)(e, function (e) {
                e.entities[n].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(ve.c)(Ne, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Ae.a)(e, function (e) {
                e.entities[n].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        Pe = ge()(ge()({}, Ne), je),
        He = Ee.a.register(Pe),
        Be = n('XOJV'),
        De = function (e, t) {
          var n = t.tweetId
          return n ? Be.a.selectHydrated(e, n) : void 0
        },
        Ue = function (e, t) {
          var n = t.tweetId
          return He.select(e, n)
        },
        ze = Object(h.a)()
          .propsFromState(function () {
            return { tweet: De, tweetCase: Ue }
          })
          .propsFromActions(function () {
            return { keep: He.keepTweet, dismiss: He.dismissTweet }
          }),
        Ve = n('b5s6'),
        qe = n('mjJ+'),
        We = n('IG7M'),
        Qe = n('boUI'),
        Xe = n('zIWA'),
        Je = n('5oT/'),
        Ge = n('fz3c'),
        Ye = (n('yH/f'), n('h0NW')),
        Ze = n('n5fo'),
        $e = n('6Rrp'),
        et = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        tt = S.a.ad10c66d,
        nt = S.a.c6caed9c,
        at = function (e) {
          return d.a.createElement(U.b, null, e)
        },
        rt = function (e) {
          var t = e.screenName
          switch (e.type) {
            case et.Hidden:
              var n = (function (e) {
                  return d.a.createElement(S.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                a = [{ label: at(n), decoration: lt }]
              return d.a.createElement(Ye.a, { accessibilityLabel: tt, containerStyle: it.container, items: a })
            case et.Kept:
              var r = (function (e) {
                  return d.a.createElement(S.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                i = [{ label: at(r), decoration: ot }]
              return d.a.createElement(Ye.a, { accessibilityLabel: nt, containerStyle: it.container, items: i })
            default:
              return null
          }
        },
        it = K.a.create(function (e) {
          return {
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            container: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        lt = d.a.createElement(Ze.a, { style: it.icon }),
        ot = d.a.createElement($e.a, { style: it.icon }),
        ct = { page: 'reported_tweets', component: 'tweet' },
        st = { viewType: 'tweet_moderation_case' },
        ut = S.a.f1d9930c,
        mt = S.a.a219e217,
        dt = S.a.fa524057,
        yt = S.a.g30bc699,
        pt = S.a.f0306107,
        ft = S.a.b99364a5,
        gt = ze(function (e) {
          var t,
            n = d.a.useContext(y.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            r = e.keep,
            i = e.tweet,
            l = e.tweetCase,
            o = e.tweetId,
            c = null == i || null === (t = i.user) || void 0 === t ? void 0 : t.screen_name,
            s = d.a.useCallback(
              function (e) {
                if (i && c) {
                  var t = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: yt({ screenName: c }),
                      Icon: Qe.a,
                      link: '/'.concat(c),
                    },
                    {
                      text: pt,
                      Icon: Xe.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(Ge.a.Tweet, '/').concat(i.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: ct },
                      },
                      onClick: function () {
                        e()
                      },
                    },
                  ]
                  return (
                    n &&
                      t.push({
                        text: ft({ screenName: c }),
                        Icon: Je.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(Ge.a.RemoveCommunityMember, '/').concat(i.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: ct },
                        },
                        onClick: function () {
                          e()
                        },
                      }),
                    d.a.createElement(qe.a, { items: t, onCloseRequested: e })
                  )
                }
                return null
              },
              [i, c, n],
            ),
            u = function () {
              r(o)
            },
            m = function () {
              a(o)
            }
          if (c && (null == i ? void 0 : i.reportingVisibility) === Ge.b.HiddenCommunityTweet)
            return d.a.createElement(
              d.a.Fragment,
              null,
              d.a.createElement(rt, { screenName: c, type: et.Hidden }),
              d.a.createElement(q.a, null),
            )
          if (
            (null != l && l.isDismissed) ||
            'community_tweet_member_removed' === (null == i ? void 0 : i.limited_actions)
          )
            return null
          if (c && null != l && l.isKept)
            return d.a.createElement(
              d.a.Fragment,
              null,
              d.a.createElement(rt, { screenName: c, type: et.Kept }),
              d.a.createElement(q.a, null),
            )
          if (!l) return null
          return d.a.createElement(
            p.a,
            { behavioralEventContext: st },
            d.a.createElement(
              R.a,
              { style: bt.container },
              d.a.createElement(
                R.a,
                { style: bt.reportsBar },
                d.a.createElement(Ke, { tweetCase: l }),
                d.a.createElement(We.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: s,
                  style: bt.menu,
                }),
              ),
              d.a.createElement(Ve.a, { tweetId: o }),
              i
                ? d.a.createElement(Te.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= K.a.theme.breakpoints.small
                    return d.a.createElement(
                      R.a,
                      { style: [bt.buttons, t && bt.buttonsMobile] },
                      d.a.createElement(
                        L.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(Ge.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: ge()(ge()({}, ct), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [bt.button, t && bt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        ut,
                      ),
                      d.a.createElement(
                        L.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [bt.button, t && bt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        dt,
                      ),
                    )
                  })
                : d.a.createElement(
                    R.a,
                    { style: bt.buttons },
                    d.a.createElement(
                      L.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: m,
                        style: bt.button,
                        type: 'primaryOutlined',
                      },
                      mt,
                    ),
                  ),
            ),
            d.a.createElement(q.a, null),
          )
        }),
        bt = K.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            buttonsMobile: { justifyContent: 'space-between' },
            button: { marginRight: e.spaces.space12 },
            buttonMobile: { flex: 1 },
            container: { marginHorizontal: e.spaces.space20 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            hiddenTweetContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            menu: { marginLeft: 'auto' },
            reportsBar: { marginVertical: e.spaces.space16, flexDirection: 'row' },
          }
        }),
        ht = n('hqKg'),
        vt = n('wAC9'),
        Et = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        _t = function () {
          return Object(ht.createSelector)(Et, function (e) {
            return e
              ? (function (e) {
                  return Object(vt.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (t) {
                      return ge()(ge()({}, t), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Ct = Object(h.a)()
          .propsFromState(function () {
            return { sliceModule: _t() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        kt = n('FS1z'),
        St = S.a.c045c7b6,
        It = S.a.dffb0774,
        wt = S.a.cbb2a93c,
        Tt = Ct(function (e) {
          var t = d.a.useContext(y.a).featureSwitches,
            n = e.community,
            a = e.history,
            r = e.sliceModule,
            i = n.id_str,
            l = n.name,
            o = (n || []).rules,
            c = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            s = t.isTrue('responsive_web_communities_slices_enabled'),
            u = r
              ? d.a.createElement(kt.a, {
                  module: r,
                  noItemsRenderer: function () {
                    return d.a.createElement(F.a, { header: It, message: wt })
                  },
                  renderer: function (e) {
                    return d.a.createElement(gt, { tweetId: e })
                  },
                })
              : null
          return d.a.createElement(
            w.a,
            { behavioralEventViewType: 'reported_tweets' },
            d.a.createElement(ie.a, {
              backLocation: '/i/communities/'.concat(i),
              history: a,
              primaryContent: s ? u : null,
              sidebarContent: d.a.createElement(C.a, {
                communityId: i,
                rulesLimit: null == o ? void 0 : o.length,
                withCommunityRules: c,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: l,
              title: St,
            }),
          )
        }),
        Ft = ['analytics', 'community'],
        xt = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        Mt = { viewType: 'community' }
      function Rt(e) {
        var t = d.a.useContext(y.a).featureSwitches,
          n = (e.analytics, e.community),
          a = u()(e, Ft),
          r = a.match.path,
          i = t.isTrue('c9s_request_to_join_enabled')
        return Object(f.c)(n.role)
          ? d.a.createElement(
              p.a,
              { behavioralEventContext: Mt },
              d.a.createElement(
                le.d,
                null,
                d.a.createElement(
                  le.b,
                  { exact: !0, path: ''.concat(r, '/reported_tweets') },
                  d.a.createElement(Tt, c()({}, a, { community: n })),
                ),
                i
                  ? d.a.createElement(
                      le.b,
                      { exact: !0, path: ''.concat(r, '/member_requests') },
                      d.a.createElement(ye, { communityId: n.id_str }),
                    )
                  : null,
                d.a.createElement(le.b, null, d.a.createElement(pe.b, a)),
              ),
            )
          : d.a.createElement(pe.b, a)
      }
      function Lt(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          r = e.fetchStatus,
          i = u()(e, xt),
          l = i.match.params.communityId,
          o = n(),
          s = d.a.useCallback(
            function () {
              l && a(l).catch(o)
            },
            [l, o, a],
          )
        return (
          d.a.useEffect(
            function () {
              return s()
            },
            [s],
          ),
          d.a.createElement(_.a, {
            fetchStatus: r,
            onRequestRetry: s,
            render: function () {
              return t ? d.a.createElement(Rt, c()({}, i, { community: t })) : null
            },
          })
        )
      }
      t.default = E(Lt)
    },
    mWs5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      n('KqXw'), n('MvUL'), n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        l = n.n(i),
        o = n('M2mT'),
        c = n('zCf4'),
        s = n('MWbm'),
        u = n('mw9i'),
        m = n('0yYu'),
        d = n('/yvb'),
        y = n('rHpw'),
        p = l.a.i2209530
      function f(e) {
        var t = e.children,
          n = e.communityId,
          a = e.onSubmit,
          i = e.rightControl,
          l = e.screenType,
          y = e.secondaryBar,
          f = e.submitDisabled,
          b = e.subtitle,
          h = e.title,
          v = e.withBottomBorder,
          E = e.withDetailOpen,
          _ = Object(c.f)(),
          C = 'secondaryRoot' === l,
          k = '/i/communities/'.concat(n),
          S = ''.concat(k, '/tools'),
          I = C ? k : S,
          w = r.a.useCallback(
            function () {
              C ? _.replace(I) : _.goBack({ backLocation: I })
            },
            [I, _, C],
          )
        return r.a.createElement(
          o.a,
          {
            backLocation: I,
            onBackClick: w,
            rightControl: i,
            screenType: l,
            secondaryBar: y,
            showSubtitleOnWideDetail: !1,
            subtitle: b,
            title: h,
            withBottomBorder: v,
            withDetailOpen: E,
          },
          r.a.createElement(
            u.a,
            { style: g.contentRoot },
            r.a.createElement(s.a, { style: g.chilrenRoot }, t),
            a
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(m.a, null),
                  r.a.createElement(
                    u.a,
                    { style: g.buttonContainer },
                    r.a.createElement(d.a, { disabled: f, onPress: a, style: g.button, type: 'brandFilled' }, p),
                  ),
                )
              : null,
          ),
        )
      }
      var g = y.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(y.a.iPhoneOffsetBottom, ')'),
          },
          chilrenRoot: { paddingBottom: e.spaces.space12 },
          buttonContainer: {
            backgroundColor: e.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: e.spaces.space12,
          },
          button: { marginHorizontal: e.spaces.space12 },
        }
      })
    },
    mys5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditRuleScreen', function () {
          return j
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        l = n.n(i),
        o = n('v6aA'),
        c = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('1Idg'),
        y = function (e, t) {
          return Object(s.z)(e, s.h)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: y }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.w)(s.h)
              },
              editRule: c.c.editRule,
              removeRule: c.c.removeRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_rule' }),
        f = n('k49u'),
        g = n('jHSc'),
        b = n('3XMw'),
        h = n.n(b),
        v = n('5FtR'),
        E = n('OwKm'),
        _ = n('AfjF'),
        C = n('MWbm'),
        k = n('/yvb'),
        S = n('jtO7'),
        I = n('4zmP'),
        w = n('eb3s'),
        T = n('rHpw'),
        F = h.a.h99020ef,
        x = h.a.i2209530,
        M = h.a.a1c93d73,
        R = h.a.f74a5adb,
        L = h.a.fbb0ed91,
        K = h.a.gea6cc19,
        O = h.a.hed35471,
        A = h.a.c8677445,
        N = h.a.c3a0d44e
      function j(e) {
        var t = l.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          i = e.createLocalApiErrorHandler,
          c = e.editRule,
          s = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          y = e.shouldShowRuleInformEducation,
          p = a.id_str,
          b = a.rules,
          h = l.a.useState(''),
          T = r()(h, 2),
          j = T[0],
          H = T[1],
          B = l.a.useState(''),
          D = r()(B, 2),
          U = D[0],
          z = D[1],
          V = l.a.useState(!1),
          q = r()(V, 2),
          W = q[0],
          Q = q[1],
          X = l.a.useState(''),
          J = r()(X, 2),
          G = J[0],
          Y = J[1],
          Z = l.a.useState(!1),
          $ = r()(Z, 2),
          ee = $[0],
          te = $[1],
          ne = l.a.useState(!1),
          ae = r()(ne, 2),
          re = ae[0],
          ie = ae[1],
          le = l.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              H(n), z(t), Q(a)
            },
            [H, z, Q],
          ),
          oe = l.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === f.a.GenericBadRequest && t.message ? t.message : M
                  return Y(n), Q(!1), []
                },
              })
              'string' == typeof d &&
                c(p, { ruleId: d, name: j, description: U })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, j, U, d, c, s, i],
          ),
          ce = l.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === f.a.GenericBadRequest && t.message ? t.message : M
                  return Y(n), te(!1), []
                },
              })
              'string' == typeof d &&
                u(p, { ruleId: d })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, d, u, s, i],
          )
        if (!d || !m) return l.a.createElement(v.a, { to: '/i/communities/'.concat(p, '/tools/rules') })
        var se = m.description,
          ue = m.name,
          me = l.a.createElement(
            k.a,
            {
              disabled: !W,
              onPress: function () {
                y ? ie(!0) : oe()
              },
              size: 'small',
              type: 'brandFilled',
            },
            x,
          ),
          de = 1 === b.length,
          ye = t
            ? l.a.createElement(
                C.a,
                { style: P.delete },
                l.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: L,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          pe = de ? l.a.createElement(C.a, { style: P.callout }, l.a.createElement(I.a, { text: R })) : void 0,
          fe = ee
            ? l.a.createElement(w.a, {
                cancelButtonLabel: N,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: K,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: ce,
                text: O,
              })
            : void 0,
          ge = re
            ? l.a.createElement(_.a, {
                onCancel: function () {
                  ie(!1)
                },
                onConfirm: function () {
                  n(), oe(), ie(!1)
                },
              })
            : void 0
        return l.a.createElement(
          g.b,
          { behavioralEventViewType: 'rules', history: s, rightControl: me, title: F },
          pe,
          l.a.createElement(E.a, { description: se || '', errorText: G, name: ue, onChange: le }),
          ye,
          fe,
          ge,
        )
      }
      t.default = p(j)
      var P = T.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return j
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('VrFO'),
        l = n.n(i),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        h = n.n(b),
        v = n('pXBW'),
        E = n('6/RC'),
        _ = n('UIzd'),
        C = n.n(_),
        k = n('kGix')
      n.d(t, 'a', function () {
        return k.a
      })
      var S = n('fs1G'),
        I = n('0KEI'),
        w = n('lU4h'),
        T = n.n(w),
        F = n('21nk'),
        x = n.n(F),
        M = n('bCEw'),
        R = n.n(M),
        L = n('Ud88'),
        K = n.n(L),
        O = function (e) {
          return (0, e.render)({ fetchStatus: k.a.LOADING, data: null, error: null, retry: S.a })
        },
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), g()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof v.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(h.a.Component),
        N = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = x()(t, n)
          return a({ fetchStatus: k.a.LOADED, data: r, error: null, retry: S.a })
        },
        j = function (e, t) {
          if (E.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                l = n.render,
                o = n.variables,
                c = R()(e),
                s = r()(c, 2),
                u = s[0],
                m = s[1],
                d = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                y = T()(o),
                p = r()(y, 1)[0],
                f = h.a.useCallback(
                  function () {
                    m(p, { fetchPolicy: 'network-only' })
                  },
                  [m, p],
                )
              return (
                h.a.useLayoutEffect(
                  function () {
                    m(p, { fetchPolicy: i })
                  },
                  [i, m, p],
                ),
                u
                  ? h.a.createElement(
                      h.a.Suspense,
                      { fallback: h.a.createElement(O, { render: l }) },
                      h.a.createElement(
                        A,
                        { errorHandler: d(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, n) {
                          return t
                            ? l({ fetchStatus: k.a.FAILED, error: t, data: null, retry: n })
                            : h.a.createElement(N, { query: e, queryRef: u, render: l })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var i = a.render,
              l = a.variables,
              o = K()(),
              c = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = T()(l),
              u = r()(s, 1)[0],
              m = n.get(o)
            if (m) return m
            var d = h.a.lazy(function () {
              return C()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: k.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: k.a.FAILED, data: null, error: e, retry: S.a }))
                      : h.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(o, e).get.bind(n, o) }
                })
            })
            return h.a.createElement(h.a.Suspense, null, h.a.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddRuleScreen', function () {
          return F
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        l = n.n(i),
        o = n('v6aA'),
        c = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          return Object(s.z)(e, s.h)
        },
        y = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.w)(s.h)
              },
              createRule: c.c.createRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_ADD_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'add_rule' }),
        p = n('k49u'),
        f = n('jHSc'),
        g = n('3XMw'),
        b = n.n(g),
        h = n('OwKm'),
        v = n('AfjF'),
        E = n('/yvb'),
        _ = n('eb3s'),
        C = b.a.j560c8ea,
        k = b.a.i2209530,
        S = b.a.gaa3239a,
        I = b.a.a67445d5,
        w = b.a.fcbe0992,
        T = b.a.j24c37b2
      function F(e) {
        var t = l.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          i = e.createLocalApiErrorHandler,
          c = e.createRule,
          s = e.history,
          u = e.shouldShowRuleInformEducation,
          m = a.id_str,
          d = a.rules,
          y = l.a.useState(''),
          g = r()(y, 2),
          b = g[0],
          F = g[1],
          x = l.a.useState(''),
          M = r()(x, 2),
          R = M[0],
          L = M[1],
          K = l.a.useState(!1),
          O = r()(K, 2),
          A = O[0],
          N = O[1],
          j = l.a.useState(!1),
          P = r()(j, 2),
          H = P[0],
          B = P[1],
          D = l.a.useState(''),
          U = r()(D, 2),
          z = U[0],
          V = U[1],
          q = l.a.useState(!1),
          W = r()(q, 2),
          Q = W[0],
          X = W[1],
          J = l.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              V(''), F(n), L(t), N(a)
            },
            [F, L, N],
          ),
          G = l.a.useCallback(
            function () {
              B(!0)
              var e = i({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === p.a.GenericBadRequest && t.message ? t.message : S
                  return V(n), N(!1), []
                },
              })
              c(m, { name: b, description: R })
                .then(function () {
                  s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, b, R, c, s, i],
          ),
          Y = l.a.useCallback(
            function () {
              u ? X(!0) : G()
            },
            [G, u],
          ),
          Z = l.a.createElement(E.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, k),
          $ = d.length >= t,
          ee = l.a.createElement(_.a, {
            confirmButtonLabel: T,
            headline: I,
            onConfirm: function () {
              s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: w({ maxRuleCount: t }),
            withCancelButton: !1,
          }),
          te = Q
            ? l.a.createElement(v.a, {
                onCancel: function () {
                  X(!1)
                },
                onConfirm: function () {
                  n(), G(), X(!1)
                },
              })
            : void 0
        return $ && !H
          ? ee
          : l.a.createElement(
              f.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: Z, title: C },
              l.a.createElement(h.a, { description: '', errorText: z, name: '', onChange: J }),
              te,
            )
      }
      t.default = y(F)
    },
    nTxI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesModal', function () {
          return w
        })
      n('7xRU'), n('KqXw'), n('WNMA'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('+Kfv'),
        l = n('PKbs'),
        o = n('egQk'),
        c = n('1Idg'),
        s = n('eSoz'),
        u = n('li/m'),
        m = n('rxPX'),
        d = n('0KEI'),
        y = function (e, t) {
          var n
          return (null === (n = t.location.state) || void 0 === n ? void 0 : n.community) || c.a(e, t)
        },
        p = Object(m.a)()
          .propsFromState(function () {
            return { community: y, fetchStatus: c.b, isCommunityMember: c.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: u.b,
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        f = n('MDbM'),
        g = n('jHSc'),
        b = n('3XMw'),
        h = n.n(b),
        v = n('5FtR'),
        E = n('t62R'),
        _ = n('/yvb'),
        C = n('rHpw'),
        k = h.a.h4fbfa57,
        S = h.a.dc1b14a1,
        I = { viewType: 'community' },
        w = function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            c = e.fetchStatus,
            s = e.history,
            u = e.isCommunityMember,
            m = e.join,
            d = e.match.params.communityId
          r.a.useEffect(function () {
            d && !t && c !== f.a.LOADED && a(d).catch(n())
          })
          var y,
            p = function () {
              if (t) {
                var e = t.id_str
                m(e)
                  .then(function () {
                    s.push('/i/communities/'.concat(e))
                  })
                  .catch(n())
              }
            }
          if (t) {
            var b = t.name,
              h = t.rules,
              C = t.theme
            return h && h.length && !u
              ? r.a.createElement(
                  i.a,
                  { behavioralEventContext: I },
                  r.a.createElement(
                    g.b,
                    {
                      behavioralEventViewType: 'rules',
                      history: s,
                      rightControl: r.a.createElement(_.a, { onPress: p, size: 'small', type: 'brandFilled' }, k),
                      title: Object(o.a)({ communityName: b }),
                    },
                    r.a.createElement(l.b, {
                      badgeStyle: F.badgeStyle,
                      headerContainerStyle: F.containerStyle,
                      headerExplanationStyle: F.headerExplanationStyle,
                      heading:
                        ((y = b), r.a.createElement(E.b, { size: 'title4', weight: 'bold' }, S({ communityName: y }))),
                      rules: h,
                      theme: C,
                    }),
                  ),
                )
              : r.a.createElement(v.a, { to: '/i/communities/'.concat(t.id_str) })
          }
          return c === f.a.LOADED ? r.a.createElement(v.a, { to: '/' }) : null
        },
        T = p(w),
        F =
          ((t.default = T),
          C.a.create(function (e) {
            return {
              badgeStyle: { marginRight: e.spaces.space16 },
              headerExplanationStyle: { marginTop: e.spaces.space8 },
              containerStyle: {
                paddingVertical: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
              },
            }
          }))
    },
    nmVb: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var r = a(n('yyPN'))
      e.exports = t.default
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'b', function () {
          return d
        }),
        n.d(t, 'g', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return b
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('yiKp'),
        l = n.n(i),
        o =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        c = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
        var n,
          a = c.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? l()(l()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function m(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(c.b.WordEnd),
          i = r >= 0 ? n.slice(r) : '',
          l = a.search(c.b.WordBoundary),
          o = i + a.slice(0, l)
        return o.trim() ? { start: r, end: e + l, word: o } : { start: -1, end: -1, word: '' }
      }
      function d() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function y(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function p(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          i = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(i))
      }
      var f = Object(o.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        b = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    'pd/v': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'restrictedMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  {
                    kind: 'Variable',
                    name: 'restricted_membership_settings',
                    variableName: 'restrictedMembershipSettings',
                  },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          (s = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'invites_policy',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'join_approval_policy',
                                storageKey: null,
                              },
                            ],
                            type: 'CommunityRestrictedMembershipSettings',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  (m = {
                    kind: 'InlineFragment',
                    selections: [
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  i,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      l,
                      o,
                      c,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          s,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'FqEbFNXw1mnkDrNk7OQl-Q',
            metadata: {},
            name: 'edit_CommunityRestricted_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '6add4fe7e5b5f45898213cba8e4ae0bf'), (t.default = y)
    },
    'rPb+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'communityId' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'role' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'communityPeopleSliceItem_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'role', variableName: 'role' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_role_put',
                plural: !1,
                selections: [
                  (o = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [a, i, r],
            kind: 'Operation',
            name: 'communityPeopleSliceItem_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_role_put',
                plural: !1,
                selections: [o, { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'ZFVCFqy3PBrHNcMX-zNQLA',
            metadata: {},
            name: 'communityPeopleSliceItem_roleUpdate_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(c.hash = '3998fef17abe741a7d272887d0adb522'), (t.default = c)
    },
    sH2E: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityRulesQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityRules_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'CommunityRulesQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      i,
                      { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  l,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'TFdlNPIMu57c2mmCv7ZN8g',
            metadata: {},
            name: 'CommunityRulesQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '6e211d651c75f6fae70fcc6ba46978c3'), (t.default = o)
    },
    tFuX: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c,
        s,
        u,
        m,
        d,
        y = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'openMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'open_membership_settings', variableName: 'openMembershipSettings' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          (s = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'invites_policy',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'join_approval_policy',
                                storageKey: null,
                              },
                            ],
                            type: 'CommunityRestrictedMembershipSettings',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  (m = {
                    kind: 'InlineFragment',
                    selections: [
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  i,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      l,
                      o,
                      c,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          s,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'T8cVbovU4L1jOLVfHdJ-Tg',
            metadata: {},
            name: 'edit_CommunityOpen_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = 'ea1908fb41cb57016d070125122b615d'), (t.default = y)
    },
    tgdH: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }],
        kind: 'Fragment',
        metadata: null,
        name: 'communityPeopleSliceItem_userResult',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'result',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
              {
                kind: 'InlineFragment',
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                  {
                    alias: null,
                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                    kind: 'ScalarField',
                    name: 'community_role',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiUser',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'profile_image_url_https',
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                    ],
                    storageKey: null,
                  },
                ],
                type: 'User',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'UserResults',
        abstractKey: null,
        hash: '8207e707560a4795bb4bc55f48b8501c',
      }
      t.default = a
    },
    tnnC: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      t.default = a
    },
    tot2: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityPeopleScreen', function () {
          return F
        })
      n('vrRf')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('+Kfv'),
        l = n('es0u'),
        o = n('XtoV'),
        c = n('1Idg'),
        s = n('eSoz'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { community: c.a, communityId: c.c, screenName: c.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        y = n('3XMw'),
        p = n.n(y),
        f = n('gDCe'),
        g = n('yoO3'),
        b = n('VS6U'),
        h = n('k/OQ'),
        v = n('krnS'),
        E = n('zCf4'),
        _ = p.a.h5245afa,
        C = p.a.dc6ce7b4,
        k = p.a.f8321d82,
        S = p.a.ga2aa43c,
        I = { viewType: 'community' },
        w = { viewType: 'all' },
        T = { viewType: 'moderators' },
        F = r.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            c = e.fetchCommunityIfNeeded,
            s = e.history,
            u = e.location
          r.a.useEffect(
            function () {
              n && c(n).catch(a())
            },
            [n, a, c],
          )
          var m = (null == u ? void 0 : u.pathname) && u.pathname.indexOf('members') > 0,
            d = m ? C : S,
            y = r.a.useMemo(
              function () {
                return n
                  ? [
                      { to: { pathname: '/i/communities/'.concat(n, '/members'), state: u.state }, label: k, key: k },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/moderators'), state: u.state },
                        label: S,
                        key: S,
                      },
                    ]
                  : []
              },
              [n, u.state],
            ),
            p = n
              ? r.a.createElement(
                  E.d,
                  null,
                  r.a.createElement(
                    E.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                    r.a.createElement(
                      i.a,
                      { behavioralEventContext: w },
                      r.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Members,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                  r.a.createElement(
                    E.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                    r.a.createElement(
                      i.a,
                      { behavioralEventContext: T },
                      r.a.createElement(f.a, { community: t }),
                      r.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Moderators,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                )
              : null
          return r.a.createElement(
            i.a,
            { behavioralEventContext: I },
            r.a.createElement(
              g.a,
              { behavioralEventViewType: 'members' },
              r.a.createElement(b.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: _,
                history: s,
                primaryContent: p,
                rightControl: m ? r.a.createElement(o.a, { community: t }) : null,
                secondaryBar: r.a.createElement(h.a, { accessibilityLabel: d, links: y }),
                sidebarContent: r.a.createElement(l.a, null),
                title: C,
              }),
            ),
          )
        }),
        x = d(F)
      t.default = x
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateButton', function () {
          return Be
        }),
        n.d(t, 'CommunitiesScreen', function () {
          return De
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        f = (n('2G9S'), n('vrRf'), n('ERkP')),
        g = n.n(f),
        b = n('+Kfv'),
        h = n('es0u'),
        v = n('1Idg'),
        E = n('RqPI'),
        _ = n('li/m'),
        C = n('G6rE'),
        k = n('rxPX'),
        S = n('0KEI'),
        I = function (e, t) {
          var n = v.j(e, t)
          if (n) return C.e.selectByScreenName(e, n)
        },
        w = Object(k.a)()
          .propsFromState(function () {
            return { communitiesActions: E.f, hasCommunityMemberships: _.d, screenName: v.j, user: I }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: C.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        T = n('GOQE'),
        F = n('3XMw'),
        x = n.n(F),
        M = n('5oT/'),
        R = (n('z84I'), n('M+/F'), n('yiKp')),
        L = n.n(R),
        K = (n('ho0z'), n('tVqn'), n('uFXj'), n('v6aA')),
        O = n('YeIG'),
        A = 'community-thumbnail-image',
        N = 'community-thumbnail-name-container',
        j = n('MWbm'),
        P = n('rHpw'),
        H = n('X00g'),
        B = n('htQn'),
        D = n('9Xij'),
        U = n('TIdA'),
        z = n('A91F'),
        V = n('t62R'),
        q = { type: 'serversideContextKey', serversideContextType: 'community' },
        W = P.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space4,
              marginHorizontal: e.spaces.space4,
              marginTop: e.spaces.space2,
              marginBottom: e.spaces.space8,
              borderRadius: e.borderRadii.large,
            },
            container: {
              width: 'calc(('.concat(P.a.theme.spaces.space36, ' * 3) + ').concat(P.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        Q = function (e) {
          var t = g.a.useContext(K.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            a = n.id_str,
            r = n.media,
            i = n.name,
            l = n.theme,
            o = g.a.useMemo(
              function () {
                return { clientEntity: L()(L()({}, q), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(O.a)(null == r ? void 0 : r.image) || !i) return null
          var c = null == r ? void 0 : r.image,
            s = null == r ? void 0 : r.crop,
            u = P.a.theme.aspectRatios.communityBanner,
            m = t ? H.a.getCommunityBackgroundColor(l) : P.a.theme.colors.translucentBlack77
          return c
            ? g.a.createElement(
                b.a,
                { behavioralEventContext: o },
                g.a.createElement(
                  B.a,
                  { link: '/i/communities/'.concat(a), style: W.root },
                  g.a.createElement(
                    j.a,
                    { style: W.container },
                    g.a.createElement(
                      D.a,
                      { ratio: u },
                      g.a.createElement(U.a, {
                        accessibilityLabel: '',
                        aspectMode: z.a.exact(u),
                        backgroundColor: P.a.theme.colors.gray300,
                        cropCandidates: s,
                        image: c,
                        testID: A,
                      }),
                    ),
                    g.a.createElement(
                      j.a,
                      { style: [W.name, { backgroundColor: m }], testID: N },
                      g.a.createElement(
                        V.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        i.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        X = n('eSoz'),
        J = n('o3oN'),
        G = function (e) {
          var t = Object(J.c)(e)
          return X.c.selectMany(e, t)
        },
        Y = Object(k.a)()
          .propsFromState(function () {
            return { communities: G, fetchStatus: J.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: J.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        Z = n('kGix'),
        $ = n('6iuV'),
        ee = n('rC8y'),
        te = x.a.d228a9a0,
        ne = g.a.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            r = e.fetchStatus,
            i = e.location.pathname
          g.a.useEffect(
            function () {
              r === Z.a.NONE && a().catch(n())
            },
            [n, a, r],
          )
          var l = g.a.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return g.a.createElement(Q, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(O.a)(t)
            ? null
            : g.a.createElement(
                g.a.Fragment,
                null,
                g.a.createElement($.a, { style: [ae.paddingHorizontal, ae.bottomBorder] }, l),
                t.length > 10 &&
                  g.a.createElement(
                    j.a,
                    { style: ae.bottomBorder },
                    g.a.createElement(ee.a, { link: '/'.concat(i, '/memberships'), text: te }),
                  ),
              )
        }),
        ae = P.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            paddingHorizontal: { paddingHorizontal: e.spaces.space4 },
            bottomBorder: {
              borderBottomWidth: e.spaces.space1,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        re = Y(ne),
        ie = n('WpDa'),
        le = n('ZNT5'),
        oe = Object(le.a)({
          timelineId: 'communitiesMainTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMainTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_COMMUNITIES_MAIN_TIMELINE',
          perfKey: 'communitiesMainTimeline',
          formatResponse: ie.a,
        }),
        ce = n('OUEC'),
        se = n('dwig'),
        ue = n('0+qk'),
        me = n('oQhu'),
        de = n('7BdX'),
        ye = n('fTQJ'),
        pe = n('QRqA'),
        fe = n('FIs5'),
        ge = n('mw9i'),
        be = x.a.c63602d3,
        he = x.a.d7346631,
        ve = x.a.fbd12fea,
        Ee = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(c()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              p()(
                c()(e),
                '_getModule',
                Object(me.a)(function () {
                  return oe
                }),
              ),
              p()(c()(e), '_renderEmptyTimeline', function () {
                return g.a.createElement(fe.a, { header: he, message: ve })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hasCommunityMemberships,
                    n = e.history,
                    a = e.isLoggedInUser,
                    r = e.location,
                    i = this._getModule(),
                    l = this._c9sParticipationEnabled && t ? g.a.createElement(ue.a, { history: n }) : null
                  return a && i
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(pe.a, null),
                        g.a.createElement(
                          se.a,
                          { container: ge.a, fab: l },
                          g.a.createElement(re, { location: r }),
                          g.a.createElement(ye.a, {
                            entryConfiguration: ce.a,
                            module: i,
                            prerollDisplayLocation: de.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: be,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      p()(Ee, 'contextType', K.a)
      var _e = Ee,
        Ce = n('hqKg'),
        ke = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        Se = function () {
          return Object(Ce.createSelector)(ke, function (e) {
            return e
              ? (function (e) {
                  return Object(le.a)({
                    timelineId: 'communityMemberships-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchCommunityMemberships
                    },
                    getEndpointParams: function (t) {
                      var n = t.cursor
                      return { cursor: 'string' == typeof n ? n : void 0, userId: e }
                    },
                    context: 'FETCH_COMMUNITY_MEMBERSHIPS_TIMELINE',
                    perfKey: 'communityMemberships',
                    formatResponse: ie.a,
                  })
                })(e)
              : void 0
          })
        },
        Ie = Object(k.a)()
          .propsFromState(function () {
            return { urtModule: Se() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        we = n('yoO3'),
        Te = x.a.c63602d3,
        Fe = x.a.d7346631,
        xe = x.a.hb01fe46,
        Me = Ie(
          (function (e) {
            u()(n, e)
            var t = d()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                p()(c()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? g.a.createElement(fe.a, { header: Fe, message: xe }) : null
                }),
                e
              )
            }
            return (
              l()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.urtModule
                    return e
                      ? g.a.createElement(
                          we.a,
                          { behavioralEventViewType: 'all' },
                          g.a.createElement(ye.a, {
                            entryConfiguration: ce.a,
                            module: e,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyState,
                            title: Te,
                          }),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(g.a.Component),
        ),
        Re = n('5FtR'),
        Le = n('Y6L+'),
        Ke = n('VS6U'),
        Oe = n('/yvb'),
        Ae = n('zCf4'),
        Ne = x.a.h02a6fe5,
        je = x.a.c63602d3,
        Pe = x.a.a226497c,
        He = { viewType: 'communities' },
        Be = g.a.memo(function (e) {
          var t = e.communitiesActions
          if (null == t || !t.create) return null
          return g.a.createElement(Oe.a, {
            icon: g.a.createElement(M.a, { accessibilityLabel: Pe, style: Ue.createButton }),
            link: '/i/communities/create',
            size: 'medium',
            type: 'brandText',
          })
        }),
        De = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.hasCommunityMemberships,
                  a = t.history,
                  r = t.location,
                  i = t.user,
                  l = e._isLoggedInUser()
                return g.a.createElement(
                  Ae.d,
                  null,
                  g.a.createElement(
                    Ae.b,
                    { exact: !0, path: '/'.concat(Le.J, '/communities') },
                    g.a.createElement(_e, { hasCommunityMemberships: n, history: a, isLoggedInUser: l, location: r }),
                  ),
                  g.a.createElement(
                    Ae.b,
                    { exact: !0, path: '/'.concat(Le.J, '/communities/memberships') },
                    g.a.createElement(Me, { isLoggedInUser: l, user: i }),
                  ),
                )
              }),
              p()(c()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.fetchOneUserByScreenNameIfNeeded,
                  i = n.screenName
                i && r(i).catch(a(T.a))
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUser()
                },
              },
              {
                key: '_isLoggedInUser',
                value: function () {
                  var e = this.props.user,
                    t = this.context.loggedInUserId
                  return (null == e ? void 0 : e.id_str) === t
                },
              },
              {
                key: '_isMembershipsView',
                value: function () {
                  return this.props.location.pathname.indexOf('memberships') >= 0
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.communitiesActions,
                    n = e.history
                  if (this._isLoggedInUser()) {
                    var a = this._isMembershipsView() ? je : Ne
                    return g.a.createElement(
                      b.a,
                      { behavioralEventContext: He },
                      g.a.createElement(Ke.a, {
                        backLocation: '/',
                        history: n,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: g.a.createElement(Be, { communitiesActions: t }),
                        sidebarContent: g.a.createElement(h.a, null),
                        title: a,
                      }),
                    )
                  }
                  return g.a.createElement(Re.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      p()(De, 'contextType', K.a)
      var Ue = P.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        ze = w(De)
      t.default = ze
    },
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('5Yy7'),
        c = n.n(o),
        s = n('2VqO'),
        u = n.n(s),
        m = n('KEM+'),
        d = n.n(m),
        y = (n('z84I'), n('ERkP')),
        p = n.n(y),
        f = n('yiKp'),
        g = n.n(f),
        b = n('1Pcy'),
        h = n.n(b),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        E = n('cm6r'),
        _ = n('rHpw'),
        C = n('k/Ka'),
        k = n('MWbm'),
        S = n('x0mb'),
        I = n('IMYl'),
        w = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              d()(h()(e), '_radioRef', p.a.createRef()),
              d()(h()(e), '_handleChange', function () {
                var t = e.props,
                  n = t.colorName
                ;(0, t.onChange)(n)
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autoFocus && this._radioRef && this._radioRef.current && this._radioRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.colorName,
                    a = e.isSelected,
                    r = e.name,
                    i = e.style,
                    l = _.a.theme.colors[n],
                    o = v.a.generate({
                      backgroundColor: _.a.theme.colors.transparent,
                      color: l,
                      withFocusWithinFocusRing: !0,
                    })
                  return p.a.createElement(
                    k.a,
                    { style: [T.container, i] },
                    p.a.createElement(
                      E.a,
                      { accessibilityRole: 'label', interactiveStyles: o, style: [T.choice, T.choiceContainer] },
                      p.a.createElement(S.a, { style: [T.choice, { color: l }] }),
                      Object(C.a)('input', {
                        accessibilityLabel: t,
                        name: r,
                        checked: a,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: T.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    a &&
                      p.a.createElement(
                        k.a,
                        { style: [T.choice, T.checkMarkContainer] },
                        p.a.createElement(I.a, { style: [T.choiceSelected, { backgroundColor: l }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        T = _.a.create(function (e) {
          return {
            container: { alignItems: 'center', paddingVertical: e.spaces.space4, userSelect: 'none' },
            choice: { cursor: 'pointer', height: 45, width: 45 },
            checkMarkContainer: { alignItems: 'center', justifyContent: 'center', position: 'absolute' },
            choiceSelected: { color: e.colors.whiteOnColor, height: 25, width: 25 },
            choiceContainer: { borderRadius: e.borderRadii.infinite },
            transitionStyle: { transitionProperty: 'transform', transitionDuration: '0.1s' },
            focusedStyle: { outlineStyle: 'none' },
            hoverStyle: { transform: [{ scale: 1.1 }] },
            pressedStyle: { transform: [{ scale: 0.95 }] },
            nativeControl: g()(
              g()({}, _.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        F = w,
        x = 1,
        M = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(x, '_LABEL')), (x += 1), e
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.autoFocus,
                    r = t.layout,
                    i = t.onChange,
                    l = t.options,
                    o = t.value,
                    c = 'two-rows' === r,
                    s = [R.root, c && R.flexWrap],
                    u = c ? { width: ''.concat((2 / l.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    k.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    l.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return p.a.createElement(F, {
                        accessibilityLabel: n,
                        autoFocus: a && o === r,
                        colorName: r,
                        isSelected: o === r,
                        key: r,
                        name: e._colorPickerId,
                        onChange: i,
                        style: u,
                      })
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      d()(M, 'defaultProps', { layout: 'one-row' })
      var R = _.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = M
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        i = n('N9G2'),
        l = n('BIH/'),
        o = n('lhaq'),
        c = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = i(this),
              n = l(t),
              a = c(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : o(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    w9f9: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'count' },
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'moderatorsSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'moderators_slice',
                    args: [(i = { kind: 'Variable', name: 'count', variableName: 'count' })],
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: '__CommunityModerators_Query_moderators_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            args: [{ kind: 'Variable', name: 'communityId', variableName: 'communityId' }],
                            kind: 'FragmentSpread',
                            name: 'communityPeopleSliceItem_userResult',
                          },
                          (l = {
                            kind: 'ClientExtension',
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                            ],
                          }),
                        ],
                        storageKey: null,
                      },
                      (o = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'moderatorsSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: 'moderators_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'result',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                                    kind: 'ScalarField',
                                    name: 'community_role',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiUser',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'id_str',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'followed_by',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'profile_image_url_https',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'protected',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'screen_name',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'verified',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    filters: null,
                                    handle: 'defaultScalars',
                                    key: '',
                                    kind: 'LinkedHandle',
                                    name: 'legacy',
                                  },
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          l,
                        ],
                        storageKey: null,
                      },
                      o,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: c,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityModerators_Query_moderators_slice',
                    kind: 'LinkedHandle',
                    name: 'moderators_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  s,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'lxb2peKfpD2yYwE4T2_Muw',
            metadata: { sliceInfoPath: ['community', 'moderators_slice', 'slice_info'] },
            name: 'moderatorsSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (t.default = u)
    },
    xPe1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitySettingsRouter', function () {
          return yt
        })
      n('KqXw'), n('WNMA'), n('1t7P'), n('jQ/y'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        l = n('rxPX'),
        o = Object(l.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        c = n('yiKp'),
        s = n.n(c),
        u = n('ddV6'),
        m = n.n(u),
        d = (n('kH1Z'), n('6U7i'), n('jTgF')),
        y = n('AspN'),
        p = n('eSoz'),
        f = n('0KEI'),
        g = function (e, t) {
          var n = t.localMediaId,
            a = n && isFinite(n) ? y.k(e, n) : []
          return m()(a, 1)[0]
        },
        b = Object(l.a)()
          .propsFromState(function () {
            return { localMedia: g }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: p.a,
              removeLocalMediaId: p.e,
              editCommunityBanner: p.d,
              removeBanner: p.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        h = n('3XMw'),
        v = n.n(h),
        E = n('Nh1N'),
        _ = n('fS8x'),
        C = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        k = Object(C.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(176)]).then(n.bind(null, 'P68U'))
          },
        }),
        S = n('eyty'),
        I = n('MWbm'),
        w = n('rHpw'),
        T = n('TIdA'),
        F = n('A91F'),
        x = n('4zmP'),
        M = n('eb3s'),
        R = v.a.a49f884d,
        L = v.a.ea965b81,
        K = v.a.c1ca95bd,
        O = v.a.e71cdf4d,
        A = v.a.gea6cc19,
        N = v.a.cfd2f35d,
        j = v.a.j35d3ad6,
        P = v.a.f1e8fb21,
        H = v.a.fc2a5c92,
        B = v.a.e405ec21
      var D,
        U,
        z,
        V = w.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        q = b(function (e) {
          var t = e.addLocalMediaId,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            i = e.editCommunityBanner,
            l = e.hasCustomMedia,
            o = e.localMedia,
            c = e.localMediaId,
            u = e.media,
            y = e.removeBanner,
            p = e.removeLocalMediaId,
            f = r.a.useState(!1),
            g = m()(f, 2),
            b = g[0],
            h = g[1],
            v = r.a.useState(!1),
            C = m()(v, 2),
            D = C[0],
            U = C[1],
            z = r.a.useState(!1),
            q = m()(z, 2),
            W = q[0],
            Q = q[1],
            X = r.a.useState(!1),
            J = m()(X, 2),
            G = J[0],
            Y = J[1],
            Z = r.a.useState(!1),
            $ = m()(Z, 2),
            ee = $[0],
            te = $[1],
            ne = null == u ? void 0 : u.image,
            ae = w.a.theme.aspectRatios.communityBanner,
            re = a({
              customErrorHandler: function (e) {
                return Y(B), []
              },
            }),
            ie = function (e) {
              return te(!1), e ? t(n, e) : p(n)
            },
            le = o
              ? s()(s()({}, o), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: o.mediaFile, cropData: void 0 })
              : void 0,
            oe = ne ? r.a.createElement(T.a, { accessibilityLabel: R, aspectMode: F.a.exact(ae), image: ne }) : null
          return r.a.createElement(
            r.a.Fragment,
            null,
            G
              ? r.a.createElement(
                  I.a,
                  { style: V.error },
                  r.a.createElement(x.a, { Icon: E.a, headline: H, text: G, type: 'danger' }),
                )
              : null,
            r.a.createElement(k, {
              accessibilityLabel: L,
              aspectRatio: ae,
              currentContent: oe,
              location: S.d.CommunityBanner,
              mediaItem: ee ? o : void 0,
              onChange: function (e) {
                var t = m()(e, 1)[0]
                Y(!1), ie(t), h(!0)
              },
              onFailure: function () {
                Y(B), p(n)
              },
              onRemove:
                l || ee
                  ? function () {
                      ie(), Q(!0)
                    }
                  : void 0,
            }),
            b && o
              ? r.a.createElement(_.a, {
                  defaultAspectRatio: ae,
                  media: o,
                  onCancel: function () {
                    h(!1), p(n)
                  },
                  onDone: function () {
                    h(!1), U(!0)
                  },
                  title: K,
                })
              : null,
            D && le && c
              ? r.a.createElement(_.a, {
                  defaultAspectRatio: 1,
                  media: le,
                  onCancel: function () {
                    U(!1), h(!0)
                  },
                  onCropDone: function (e) {
                    !(function (e, t) {
                      te(!0),
                        i(n, { mediaId: e, cropData: t }).catch(function (e) {
                          ie(), Object(d.a)(e) ? Y(B) : re(e)
                        })
                    })(c, e)
                  },
                  onDone: function () {
                    U(!1)
                  },
                  title: O,
                })
              : null,
            W
              ? r.a.createElement(M.a, {
                  cancelButtonLabel: N,
                  confirmButtonLabel: j,
                  confirmButtonType: 'destructiveFilled',
                  headline: A,
                  onCancel: function () {
                    Q(!1)
                  },
                  onConfirm: function () {
                    y(n).catch(re), Q(!1)
                  },
                  text: P,
                })
              : null,
          )
        }),
        W = Object(l.a)()
          .propsFromActions(function () {
            return {
              editAccess: p.c.editAccess,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        Q = n('yoO3'),
        X = n('mWs5'),
        J = n('3JAx'),
        G = v.a.f713fbd1,
        Y = [
          { label: v.a.fd00a769, value: 'Public', helpText: v.a.d0784408 },
          { label: v.a.ce0523a8, value: 'Closed', helpText: v.a.ccfafe8c },
        ],
        Z = W(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editAccess,
            i = e.history,
            l = t.id_str,
            o = r.a.useState(t.access),
            c = m()(o, 2),
            s = c[0],
            u = c[1],
            d = r.a.useCallback(
              function () {
                a(l, { access: s })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(l, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [l, s, a, i, n],
            ),
            y = s !== t.access
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              X.a,
              { communityId: l, onSubmit: d, submitDisabled: !y, title: G },
              r.a.createElement(
                I.a,
                { style: $.root },
                r.a.createElement(J.a, {
                  name: 'membershipSetting',
                  onChange: function (e, t) {
                    u(t)
                  },
                  options: Y,
                  value: s,
                }),
              ),
            ),
          )
        }),
        $ = w.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        ee = n('n0Rl'),
        te = (n('849X'), n('TJCb'), n('uDfI')),
        ne =
          (n('yH/f'),
          Object.freeze({
            Open: 'CommunityOpenMembershipSettings',
            Restricted: 'CommunityRestrictedMembershipSettings',
          })),
        ae = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        re = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        ie = (n('enFi'), n('9SqB')),
        le = n.n(ie),
        oe = void 0 !== D ? D : (D = n('tFuX')),
        ce = void 0 !== U ? U : (U = n('pd/v')),
        se = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var t
            switch (e.membership_settings.__typename) {
              case ne.Open:
                t = { __typename: ne.Open }
                break
              case ne.Restricted:
                t = {
                  __typename: ne.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: t }
          }
        },
        ue = n('zCf4'),
        me = n('t62R'),
        de = n('e0ey'),
        ye = n('Hsf0'),
        pe = n.n(ye),
        fe = void 0 !== z ? z : (z = n('tnnC'))
      var ge,
        be,
        he = n('jAXQ'),
        ve = n.n(he),
        Ee = v.a.f713fbd1,
        _e = [
          { label: v.a.fd00a769, value: ne.Open, helpText: v.a.a0a16d37 },
          { label: v.a.ce0523a8, value: ne.Restricted, helpText: v.a.f1b189f9 },
        ],
        Ce = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'd35773be' },
          r.a.createElement(me.b, { weight: 'bold' }, v.a.b1066579),
        ),
        ke = v.a.c85960a0,
        Se = v.a.ca373cd2,
        Ie = v.a.d42d9318,
        we = v.a.c5d1634d,
        Te = v.a.b983f9e0,
        Fe = void 0 !== ge ? ge : (ge = n('1tGk')),
        xe = function (e) {
          var t = e.children
          return r.a.createElement(me.b, { color: 'gray700', size: 'subtext2', style: Re.settingsItem }, t)
        },
        Me = function (e) {
          var t,
            n,
            a,
            i,
            l,
            o,
            c,
            s,
            u,
            d,
            y,
            f,
            g,
            b = e.community,
            h = ve()(Fe, b),
            E = h.membership_settings,
            _ = h.rest_id,
            C = (function (e) {
              var t = pe()(fe, e)
              switch (t.__typename) {
                case ne.Restricted:
                  return { access: ne.Restricted, invitesPolicy: t.invites_policy }
                case ne.Open:
                  return { access: ne.Open, invitesPolicy: ae.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(E),
            k = r.a.useState(C.access),
            S = m()(k, 2),
            I = S[0],
            w = S[1],
            T = r.a.useState(C.invitesPolicy),
            F = m()(T, 2),
            x = F[0],
            R = F[1],
            L = r.a.useState(),
            K = m()(L, 2),
            O = K[0],
            A = K[1],
            N =
              ((t = le()(oe)),
              (n = m()(t, 2)),
              (a = n[0]),
              (i = n[1]),
              (l = le()(ce)),
              (o = m()(l, 2)),
              (c = o[0]),
              (s = o[1]),
              (u = Object(te.c)()),
              function (e, t) {
                return i || s
                  ? Promise.reject(new Error('Already updating membership settings'))
                  : new Promise(function (n, r) {
                      var i = t.access,
                        l = t.invitesPolicy
                      i === ne.Open
                        ? a({
                            variables: { communityId: e, openMembershipSettings: {} },
                            onCompleted: function (e) {
                              var t = se(e.community_membership_settings_open_update)
                              t && u(p.c.updateOne(t.id_str, t)), n()
                            },
                            onError: function (e) {
                              r(e)
                            },
                          })
                        : i === ne.Restricted &&
                          c({
                            variables: {
                              communityId: e,
                              restrictedMembershipSettings: { invites_policy: l, join_approval_policy: re.Moderator },
                            },
                            onCompleted: function (e) {
                              var t = se(e.community_membership_settings_restricted_update)
                              t && u(p.c.updateOne(t.id_str, t)), n()
                            },
                            onError: function (e) {
                              r(e)
                            },
                          })
                    })
              }),
            j = Object(ue.f)(),
            P = r.a.useMemo(
              function () {
                return { access: I, invitesPolicy: x }
              },
              [I, x],
            ),
            H = r.a.useCallback(function (e, t) {
              w(t)
            }, []),
            B = r.a.useCallback(function (e, t) {
              R(t ? ae.Member : ae.Moderator)
            }, []),
            D = r.a.useCallback(
              function () {
                N(_, P).then(function () {
                  j.goBack({ backLocation: '/i/communities/'.concat(_, '/tools/settings') })
                })
              },
              [_, j, P, N],
            ),
            U = r.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === ne.Restricted && t.access === ne.Open) return v.a.daedd9fa
                })(C, P)
                e ? A(e) : D()
              },
              [C, P, D],
            ),
            z = r.a.useCallback(function () {
              return A(void 0)
            }, []),
            V =
              ((y = P),
              (f = (d = C).access !== y.access),
              (g = d.access === ne.Restricted && d.invitesPolicy !== y.invitesPolicy),
              !(f || g))
          return r.a.createElement(
            X.a,
            { communityId: _, onSubmit: U, submitDisabled: V, title: Ee },
            r.a.createElement(xe, null, Ce),
            r.a.createElement(J.a, { name: 'membershipSetting', onChange: H, options: _e, value: I }),
            r.a.createElement(xe, null, Ie),
            I === ne.Restricted &&
              r.a.createElement(de.a, {
                checked: x === ae.Member,
                helpText: Se,
                label: ke,
                name: 'allowInvites',
                onChange: B,
              }),
            O &&
              r.a.createElement(M.a, {
                confirmButtonLabel: we,
                confirmButtonType: 'primary',
                headline: Te,
                onCancel: z,
                onConfirm: D,
                text: O,
              }),
          )
        },
        Re = w.a.create(function (e) {
          return { settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        Le = n('v//M'),
        Ke = void 0 !== be ? be : (be = n('PbB6')),
        Oe = Object(ee.b)(Ke, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Ae = function (e) {
          var t = { communityId: e.communityId }
          return r.a.createElement(Oe, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                i = null == t ? void 0 : t.community
              return r.a.createElement(Le.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return i ? r.a.createElement(Me, { community: i }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        Ne = n('ROT1'),
        je = Object(l.a)()
          .propsFromActions(function () {
            return {
              editName: p.c.editName,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Pe = n('k49u'),
        He = v.a.h3c0f1a2,
        Be = v.a.fc2a5c92,
        De = v.a.cb5e6510
      var Ue = w.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        ze = je(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editName,
            i = e.history,
            l = t.id_str,
            o = t.name,
            c = r.a.useState(o),
            s = m()(c, 2),
            u = s[0],
            d = s[1],
            y = r.a.useState(!1),
            p = m()(y, 2),
            f = p[0],
            g = p[1],
            b = r.a.useState(void 0),
            h = m()(b, 2),
            v = h[0],
            _ = h[1],
            C = r.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = m()(e.errors, 1)[0],
                      n = t.code === Pe.a.GenericBadRequest && t.message ? t.message : De
                    return _(n), g(!0), []
                  },
                })
                a(l, { name: u })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(l, '/tools/settings') })
                  })
                  .catch(e)
              },
              [l, u, a, i, n],
            )
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              X.a,
              { communityId: l, onSubmit: C, submitDisabled: f, title: He },
              v
                ? r.a.createElement(
                    I.a,
                    { style: Ue.error },
                    r.a.createElement(x.a, { Icon: E.a, headline: Be, text: v, type: 'danger' }),
                  )
                : void 0,
              r.a.createElement(Ne.a, {
                autoFocus: !0,
                communityName: u,
                onChange: function (e, t) {
                  d(e), g(t)
                },
              }),
            ),
          )
        }),
        Ve = n('U0Qk'),
        qe = Object(l.a)()
          .propsFromActions(function () {
            return {
              editPurpose: p.c.editPurpose,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        We = v.a.a895549f,
        Qe = v.a.fc2a5c92,
        Xe = v.a.ced22929
      var Je = w.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ge = qe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            i = e.history,
            l = t.description,
            o = t.id_str,
            c = r.a.useState(l || ''),
            s = m()(c, 2),
            u = s[0],
            d = s[1],
            y = r.a.useState(!1),
            p = m()(y, 2),
            f = p[0],
            g = p[1],
            b = r.a.useState(void 0),
            h = m()(b, 2),
            v = h[0],
            _ = h[1],
            C = r.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = m()(e.errors, 1)[0],
                      n = t.code === Pe.a.GenericBadRequest && t.message ? t.message : Xe
                    return _(n), g(!0), []
                  },
                })
                a(o, { purpose: u })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, u, a, i, n],
            )
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              X.a,
              { communityId: o, onSubmit: C, submitDisabled: f, title: We },
              v
                ? r.a.createElement(
                    I.a,
                    { style: Je.error },
                    r.a.createElement(x.a, { Icon: E.a, headline: Qe, text: v, type: 'danger' }),
                  )
                : void 0,
              r.a.createElement(Ve.a, {
                autoFocus: !0,
                communityPurpose: u,
                onChange: function (e, t) {
                  d(e), g(t)
                },
              }),
            ),
          )
        }),
        Ye = n('Ig1G'),
        Ze = n('x0mb'),
        $e = n('5FtR'),
        et = n('X00g'),
        tt = n('6vad'),
        nt = n('csss'),
        at = n('0yYu'),
        rt = v.a.bb081ea1,
        it = v.a.h3e55b40,
        lt = v.a.j8af8ea9,
        ot = v.a.d5f01115,
        ct = v.a.c3c04b70,
        st = { Closed: v.a.ce0523a8, Public: v.a.fd00a769 },
        ut = v.a.f4a98e9e,
        mt = v.a.f713fbd1,
        dt = function (e) {
          var t = e.children
          return r.a.createElement(me.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        yt = function (e) {
          var t = e.community,
            n = e.history,
            a = e.match,
            l = t.access,
            o = t.description,
            c = t.hasCustomMedia,
            s = t.id_str,
            u = t.localMediaId,
            m = t.media,
            d = t.membership_settings,
            y = t.name,
            p = t.theme,
            f = r.a.useContext(i.a).featureSwitches,
            g = f.isTrue('c9s_edit_community_name_enabled'),
            b = f.isTrue('c9s_edit_community_description_enabled'),
            h = f.isTrue('c9s_edit_community_membership_settings_enabled'),
            v = f.isTrue('c9s_membership_settings_enabled'),
            E = f.isTrue('c9s_edit_community_banner_enabled'),
            _ = f.isTrue('c9s_edit_community_theme_enabled'),
            C = a.url,
            k = r.a.useMemo(
              function () {
                return v ? (d.__typename === ne.Open ? st.Public : st.Closed) : st[l]
              },
              [l, v, d.__typename],
            ),
            S = Object(Ye.d)(t),
            I = et.a.getCommunityThemeDisplayName(S),
            w = et.a.getCommunityBackgroundColor(p)
          return r.a.createElement(
            ue.d,
            null,
            g
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(C, '/name') },
                  r.a.createElement(ze, { community: t, history: n }),
                )
              : null,
            b
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(C, '/purpose') },
                  r.a.createElement(Ge, { community: t, history: n }),
                )
              : null,
            v
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(C, '/membership') },
                  r.a.createElement(Ae, { communityId: s }),
                )
              : h
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(C, '/membership') },
                  r.a.createElement(Z, { community: t, history: n }),
                )
              : null,
            r.a.createElement(
              ue.b,
              { exact: !0, path: ''.concat(C, '/') },
              r.a.createElement(
                Q.a,
                null,
                r.a.createElement(
                  X.a,
                  { communityId: s, screenType: 'primaryDetail', title: rt },
                  E ? r.a.createElement(q, { communityId: s, hasCustomMedia: c, localMediaId: u, media: m }) : null,
                  r.a.createElement(tt.b, { text: ut }),
                  r.a.createElement(nt.a, {
                    description: r.a.createElement(dt, null, y),
                    label: it,
                    link: g ? ''.concat(C, '/name') : void 0,
                  }),
                  r.a.createElement(nt.a, {
                    description: o ? r.a.createElement(dt, null, o) : void 0,
                    label: ot,
                    link: b ? ''.concat(C, '/purpose') : void 0,
                  }),
                  _
                    ? r.a.createElement(nt.a, {
                        description: r.a.createElement(dt, null, I),
                        label: ct,
                        link: _ ? ''.concat(C, '/theme') : void 0,
                        renderRightContent: function () {
                          return r.a.createElement(Ze.a, { style: [{ color: w }, pt.themeIcon] })
                        },
                      })
                    : null,
                  v || h
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(at.a, null),
                        r.a.createElement(tt.b, { text: mt }),
                        r.a.createElement(nt.a, {
                          description: r.a.createElement(dt, null, k),
                          label: lt,
                          link: ''.concat(C, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            r.a.createElement(ue.b, null, r.a.createElement($e.a, { to: ''.concat(C, '/') })),
          )
        },
        pt =
          ((t.default = o(yt)),
          w.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    yUT0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditThemeScreen', function () {
          return w
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('ERkP')),
        l = n.n(i),
        o = n('eSoz'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = Object(c.a)()
          .propsFromActions(function () {
            return {
              editTheme: o.c.editTheme,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_THEME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_theme' }),
        m = n('jHSc'),
        d = n('Ig1G'),
        y = n('3XMw'),
        p = n.n(y),
        f = n('MWbm'),
        g = n('X00g'),
        b = n('/yvb'),
        h = n('uI9t'),
        v = n('rHpw'),
        E = p.a.dbda7beb,
        _ = p.a.i2209530,
        C = p.a.hcf35d0c,
        k = p.a.da48b72c,
        S = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        I = {}
      function w(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.editTheme,
          i = e.history,
          o = t.id_str,
          c = t.theme,
          s = g.a.getCommunityBackgroundColorName(c),
          u = l.a.useState(!1),
          y = r()(u, 2),
          p = y[0],
          v = y[1],
          w = l.a.useState(Object(d.d)(t)),
          F = r()(w, 2),
          x = F[0],
          M = F[1],
          R = l.a.useState(g.a.getCommunityThemeDisplayName(x)),
          L = r()(R, 2),
          K = L[0],
          O = L[1],
          A = l.a.useState(s),
          N = r()(A, 2),
          j = N[0],
          P = N[1],
          H = l.a.useState([]),
          B = r()(H, 2),
          D = B[0],
          U = B[1]
        l.a.useEffect(
          function () {
            var e
            return (
              U(
                ((e = []),
                S.forEach(function (t) {
                  var n = g.a.getCommunityTheme(t),
                    a = g.a.getCommunityBackgroundColorName(n)
                  ;(I[a] = t), e.push({ accessibilityLabel: g.a.getCommunityThemeDisplayName(t), colorName: a })
                }),
                e),
              ),
              function () {
                U([])
              }
            )
          },
          [U],
        )
        var z = l.a.useCallback(
            function () {
              a(o, { theme: x })
                .then(function () {
                  i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [o, x, a, i, n],
          ),
          V = l.a.createElement(
            b.a,
            { accessibilityLabel: C({ themeName: K }), disabled: !p, onPress: z, size: 'small', type: 'brandFilled' },
            _,
          )
        return l.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: i, rightControl: V, title: E },
          l.a.createElement(
            f.a,
            { style: T.themePickerContainer },
            l.a.createElement(h.a, {
              accessibilityLabel: k,
              layout: 'two-rows',
              onChange: function (e) {
                var n = I[e],
                  a = n !== Object(d.d)(t)
                M(n), O(g.a.getCommunityThemeDisplayName(n)), P(e), v(a)
              },
              options: D,
              value: j,
            }),
          ),
        )
      }
      var T = v.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      t.default = u(w)
    },
  },
])
//# sourceMappingURL=WIPED
