;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '0ULw': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '1rMX': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityInfo_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
            { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'UserResults',
              kind: 'LinkedField',
              name: 'creator_results',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'result',
                  plural: !1,
                  selections: (a = [
                    { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                  ]),
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'membership_settings',
              plural: !1,
              selections: a,
              storageKey: null,
            },
            { args: null, kind: 'FragmentSpread', name: 'CommunityOriginationAttributes_community' },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = '022bcdc6e350ca307350d7e3cb0d6ee6'), (t.default = l)
    },
    '1tGk': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
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
      ;(l.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (t.default = l)
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        l = n('3KVO'),
        r = n('yLYC'),
        i = n('Ud88'),
        o = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, n) {
        o()
        var c,
          m = i(),
          d = t.fetchKey,
          y = t.fetchPolicy,
          p = t.source,
          g = t.variables,
          f = t.networkCacheConfig,
          b = r(e, g, f)
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
        return l(c)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = a.useEffect,
        r = a.useRef
      e.exports = function () {
        var e = r(!0)
        return (
          l(function () {
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
        l,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityDescriptionToggleQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
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
                args: l,
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
      ;(r.hash = '05581b25a196bea06f3f6c130610a5b9'), (t.default = r)
    },
    '2rr8': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CommunityCreationSummary_community',
          selections: [
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [a, { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = '8c8c438ea3efb83eebc0c6b3cd815b89'), (t.default = l)
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        r = n('fyvP'),
        i = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return l.a.createElement(o.a, { style: c.root }, l.a.createElement(r.a, e))
      }
      var c = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '7xtl': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o,
        c = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'communityId' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'role' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'userId' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: (i = [
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
            argumentDefinitions: [a, r, l],
            kind: 'Operation',
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            selections: [
              {
                alias: null,
                args: i,
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
            id: '-z7ecfy5Y04vSJHD3xQ1aA',
            metadata: {},
            name: 'communityPeopleActionMenu_roleUpdate_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(c.hash = '611e4e6390b7bb405821b13d8b63cd5d'), (t.default = c)
    },
    '8sFp': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return d
        })
      var a = n('ERkP'),
        l = n.n(a),
        r = n('3XMw'),
        i = n.n(r),
        o = n('mw9i'),
        c = n('FIs5'),
        s = n('rHpw'),
        u = i.a.c2117be6,
        m = i.a.c2c4dad3
      function d() {
        return l.a.createElement(o.a, { style: y.root }, l.a.createElement(c.a, { header: u, message: m }))
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
      var a,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'cell_CommunityJoinRequest',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
            { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
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
                            (a = {
                              alias: 'id_str',
                              args: null,
                              kind: 'ScalarField',
                              name: 'rest_id',
                              storageKey: null,
                            }),
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
                {
                  alias: null,
                  args: null,
                  concreteType: 'Community',
                  kind: 'LinkedField',
                  name: 'community',
                  plural: !1,
                  selections: [a],
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
        }
      ;(l.hash = '7f75bd5ecaab944dfcc33f3a9fd04df5'), (t.default = l)
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        l = n('ERkP'),
        r = n('Ud88'),
        i = n('K1lQ').commitMutation,
        o = l.useState,
        c = l.useEffect,
        s = l.useRef,
        u = l.useCallback,
        m = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = r(),
          l = m(),
          d = s(n),
          y = s(e),
          p = s(new Set()),
          g = o(!1),
          f = g[0],
          b = g[1],
          h = u(
            function (t) {
              d.current === n && y.current === e && (p.current.delete(t), l.current && b(p.current.size > 0))
            },
            [n, l, e],
          )
        c(
          function () {
            ;(d.current === n && y.current === e) ||
              ((p.current = new Set()), l.current && b(!1), (d.current = n), (y.current = e))
          },
          [n, l, e],
        )
        var _ = u(
          function (r) {
            var i = t(
              n,
              (0, a.default)(
                (0, a.default)({}, r),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    h(i), r.onCompleted && r.onCompleted(e, t)
                  },
                  onError: function (e) {
                    h(i), r.onError && r.onError(e)
                  },
                  onUnsubscribe: function () {
                    h(i), r.onUnsubscribe && r.onUnsubscribe()
                  },
                },
              ),
            )
            return p.current.add(i), l.current && b(!0), i
          },
          [h, t, n, l, e],
        )
        return [_, f]
      }
    },
    AfjF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var a = n('ERkP'),
        l = n.n(a),
        r = n('eb3s'),
        i = n('3XMw'),
        o = n.n(i),
        c = o.a.d45ae5e0,
        s = o.a.c1631260,
        u = o.a.d3190bdd,
        m = o.a.ifd6e91b,
        d = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return l.a.createElement(r.a, {
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
        l = {
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
      ;(l.hash = '1c2a2bab04f7a0662a8ed2956c2bfa8b'), (t.default = l)
    },
    C2fM: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
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
              { defaultValue: null, kind: 'LocalArgument', name: 'userId' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'actions_denyMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (s = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestDenyError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      c,
                    ],
                    type: 'CommunityJoinRequestDenyActionUnavailable',
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
            name: 'actions_denyMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_deny',
                plural: !1,
                selections: [
                  r,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
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
                                  r,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      (m = {
                                        alias: 'id_str',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'rest_id',
                                        storageKey: null,
                                      }),
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
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'name',
                                            storageKey: null,
                                          },
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
                                      i,
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
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Community',
                            kind: 'LinkedField',
                            name: 'community',
                            plural: !1,
                            selections: [m, i],
                            storageKey: null,
                          },
                          i,
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
                            selections: (d = [r]),
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_deny_action_result',
                            plural: !1,
                            selections: d,
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  s,
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'eV-2ywBT5uEdZDAXMx4imQ',
            metadata: {},
            name: 'actions_denyMemberRequest_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '462f05b8723504fff0bc89e5e613060e'), (t.default = y)
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
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
        o = n('ddV6'),
        c = n.n(o),
        s = (n('KqXw'), n('WNMA'), n('LW0h'), n('7x/C'), n('z84I'), n('1Iuc'), n('ERkP')),
        u = n.n(s),
        m = n('+Kfv'),
        d = n('eSoz'),
        y = n('rxPX'),
        p = n('0KEI'),
        g = function (e, t) {
          var n = t.match.params.communityId
          return n ? d.c.select(e, n) : void 0
        },
        f = Object(y.a)()
          .propsFromState(function () {
            return { community: g }
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
        _ = n.n(h),
        v = n('/yvb'),
        k = (n('2G9S'), n('KhuB')),
        E = n('li/m'),
        C = function (e, t) {
          return t.communityId && t.userId ? k.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        },
        S = Object(y.a)()
          .propsFromState(function () {
            return { inviteActionResult: C }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'INVITE_TO_COMMUNITY_BUTTON',
              ),
              inviteToCommunity: E.a,
            }
          }),
        F = _.a.cd133485,
        I = _.a.hb1e378e,
        w = _.a.bcd6bb0d,
        T = 'primaryFilled',
        K = { viewType: 'invite' }
      var M = S(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            a = e.inviteActionResult,
            l = e.inviteToCommunity,
            r = e.onInvite,
            i = e.onInviteActionResultChange,
            o = e.userId,
            c = e.viewerInvited,
            s = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return F
              switch (e.reason) {
                case 'UserIsMember':
                  return w
                case 'UserIsInvited':
                  return I
                default:
                  return F
              }
            })(a),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return T
              switch (e.reason) {
                case 'UserIsMember':
                  return T
                default:
                  return 'primaryOutlined'
              }
            })(a)
          u.a.useEffect(
            function () {
              a && i(o, a)
            },
            [a, o, i],
          )
          var d = 'UserCommunityInviteAction' === (null == a ? void 0 : a.__typename)
          return !d && !c
            ? null
            : u.a.createElement(
                v.a,
                {
                  accessibilityLabel: s,
                  behavioralEventContext: K,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      l(t, o)
                        .then(function () {
                          return r && r(o)
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
        x = n('MWbm'),
        O = n('4zmP'),
        A = n('t62R'),
        j = n('FIs5'),
        N = n('rHpw'),
        P = n('GZwR'),
        B = _.a.b139b549,
        H = _.a.dfddd842,
        D = _.a.cf4898a0,
        U = _.a.a3b3939a,
        V = _.a.db4f0cc9,
        z = _.a.h252ede6,
        q = _.a.a5cd93f9,
        Q = _.a.ba5a88e3,
        W = _.a.i6568549,
        J = _.a.b772cd65,
        X = _.a.b4f16d00,
        G = _.a.ja1387a7,
        Y = _.a.b92a21d8,
        Z = _.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        te = [P.a.CommunityUsers],
        ne = { viewType: 'community' }
      function ae(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          r = (t || {}).invites_result,
          o = e.match.params.communityId || '',
          s = u.a.useState(''),
          d = c()(s, 2),
          y = d[0],
          p = d[1],
          g = u.a.useState({}),
          f = c()(g, 2),
          h = f[0],
          _ = f[1],
          k = u.a.useState({}),
          E = c()(k, 2),
          C = E[0],
          S = E[1]
        u.a.useEffect(
          function () {
            o && a(o).catch(n())
          },
          [o, n, a],
        )
        var F,
          I,
          w = u.a.useMemo(
            function () {
              return y.length > 0 || !t
                ? ee
                : 'CommunityInvites' === r.__typename
                ? r.users_to_invite_slice.items.map(P.g).filter(Boolean)
                : ee
            },
            [t, r, y.length],
          ),
          T = u.a.useCallback(
            function (e, t) {
              _(function (n) {
                return i()(i()({}, n), {}, l()({}, e, t))
              })
            },
            [_],
          ),
          K = u.a.useCallback(
            function (e) {
              S(function (t) {
                return i()(i()({}, t), {}, l()({}, e, !0))
              })
            },
            [S],
          ),
          N = o
            ? u.a.createElement(R.a, { to: '/i/communities/'.concat(o, '/members') })
            : u.a.createElement(R.a, { to: '/' }),
          ae = u.a.createElement(
            v.a,
            {
              behavioralEventContext: $,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            J,
          )
        return 'CommunityInvitesUnavailable' === (null == r ? void 0 : r.__typename)
          ? N
          : u.a.createElement(
              m.a,
              { behavioralEventContext: ne },
              u.a.createElement(
                b.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ae, subtitle: H, title: B },
                ((F = (null == r ? void 0 : r.remaining_invite_count) || 0),
                (I = F > 999),
                'CommunityInvites' === (null == r ? void 0 : r.__typename) &&
                  !I &&
                  u.a.createElement(
                    x.a,
                    { style: le.callout },
                    u.a.createElement(O.a, { text: W({ remaining_invite_count: F }) }),
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
                        l = n.screen_name,
                        r = h[a]
                      if ('UserCommunityInviteActionUnavailable' === (null == r ? void 0 : r.__typename))
                        switch (r.reason) {
                          case 'UserIsInvited':
                            return U({ screen_name: l })
                          case 'UserIsMember':
                            return V({ screen_name: l })
                          case 'ViewerOutOfInvites':
                            return z
                          default:
                            return null !== (t = r.message) && void 0 !== t ? t : q({ screen_name: l })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var t = e.data.id_str,
                        n = h[t]
                      return !C[t] && 'UserCommunityInviteAction' !== (null == n ? void 0 : n.__typename)
                    }
                    return !0
                  },
                  injectedItems: w,
                  inputStyle: le.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    p(e)
                  },
                  placeholder: D,
                  renderEmptyState: function () {
                    return u.a.createElement(j.a, { header: X, message: G })
                  },
                  renderHeader: function () {
                    return (
                      0 === y.length &&
                      u.a.createElement(
                        x.a,
                        { style: le.input },
                        u.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, Q),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return u.a.createElement(j.a, { header: Y({ query: y }), message: Z })
                  },
                  renderUserDecoration: function (e) {
                    var t = e.userId
                    return u.a.createElement(M, {
                      communityId: o,
                      onInvite: K,
                      onInviteActionResultChange: T,
                      userId: t,
                      viewerInvited: C[t],
                    })
                  },
                  rounded: !0,
                  shouldAutoFocus: !0,
                  shouldFocusOnClear: !0,
                  source: P.d.CommunityInvites,
                  style: le.input,
                }),
              ),
            )
      }
      var le = N.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        re = f(ae)
      t.default = re
    },
    'Dm5+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
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
              { defaultValue: null, kind: 'LocalArgument', name: 'userId' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'actions_approveMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                  { kind: 'Variable', name: 'user_id', variableName: 'userId' },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'responded_at', storageKey: null }),
                      { args: null, kind: 'FragmentSpread', name: 'cell_CommunityJoinRequest' },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  (s = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      (c = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                    ],
                    type: 'CommunityJoinRequestApproveError',
                    abstractKey: null,
                  }),
                  (u = {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: 'unavailableReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                      c,
                    ],
                    type: 'CommunityJoinRequestApproveActionUnavailable',
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
            name: 'actions_approveMemberRequest_Mutation',
            selections: [
              {
                alias: null,
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_join_request_approve',
                plural: !1,
                selections: [
                  r,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
                      o,
                      { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
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
                                  r,
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      (m = {
                                        alias: 'id_str',
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'rest_id',
                                        storageKey: null,
                                      }),
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
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'name',
                                            storageKey: null,
                                          },
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
                                      i,
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
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Community',
                            kind: 'LinkedField',
                            name: 'community',
                            plural: !1,
                            selections: [m, i],
                            storageKey: null,
                          },
                          i,
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
                            selections: (d = [r]),
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'join_request_deny_action_result',
                            plural: !1,
                            selections: d,
                            storageKey: null,
                          },
                          i,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'CommunityJoinRequest',
                    abstractKey: null,
                  },
                  s,
                  u,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '1-KLiiXail72ZPMMpQUGHA',
            metadata: {},
            name: 'actions_approveMemberRequest_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(y.hash = '168a26932d6677cab856ee45e7245b7b'), (t.default = y)
    },
    EFld: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityCreationSummaryQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityCreationSummary_community' }],
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
            name: 'CommunityCreationSummaryQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      r,
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  i,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '0uVg2K6Uoih-4DPVHI3oOg',
            metadata: {},
            name: 'CommunityCreationSummaryQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = 'c9fd6a145c49f94141d4aba3b68679ac'), (t.default = o)
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var a = n('VrFO'),
        l = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        g = n('ERkP'),
        f = n.n(g),
        b = n('jtO7'),
        h = n('eb3s'),
        _ = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a
            return (
              l()(this, n),
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
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    l = e.confirmationSheetConfirmButtonType,
                    r = e.confirmationSheetHeadline,
                    i = e.confirmationSheetText,
                    o = e.label
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(b.a, { align: t, color: n, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? f.a.createElement(h.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: l,
                          headline: r,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: i,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(_, 'defaultProps', { color: 'red500', align: 'center' })
    },
    Eh7u: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
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
                      ],
                      type: 'User',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        (r = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
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
                                        (i = {
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
                                                    r,
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
                            i,
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
          return C
        })
      var a = n('ddV6'),
        l = n.n(a),
        r = (n('vrRf'), n('ERkP')),
        i = n.n(r),
        o = n('LgBi'),
        c = n('UZ0O'),
        s = n('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'people' }),
        m = n('3XMw'),
        d = n.n(m),
        y = n('gDCe'),
        p = n('yoO3'),
        g = n('k/OQ'),
        f = n('mWs5'),
        b = n('MWbm'),
        h = n('krnS'),
        _ = n('zCf4'),
        v = d.a.dc6ce7b4,
        k = d.a.f8321d82,
        E = d.a.ga2aa43c,
        C = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.location,
            r = i.a.useState(!1),
            s = l()(r, 2),
            u = s[0],
            m = s[1],
            d = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            C = d ? k : E,
            S = i.a.useMemo(
              function () {
                var e = n
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/members'), state: a.state },
                        label: k,
                        key: k,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/moderators'), state: a.state },
                        label: E,
                        key: E,
                      },
                    ]
                  : []
                return i.a.createElement(g.a, { accessibilityLabel: C, links: e })
              },
              [n, C, a],
            )
          return i.a.createElement(
            p.a,
            null,
            i.a.createElement(
              f.a,
              {
                communityId: t.id_str,
                rightControl: d ? i.a.createElement(o.a, { communityId: n }) : void 0,
                title: v,
              },
              i.a.createElement(
                b.a,
                null,
                i.a.createElement(c.a, { community: t, communityId: n, onIsSearchingChange: m }),
                u
                  ? null
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      S,
                      i.a.createElement(
                        _.d,
                        null,
                        i.a.createElement(
                          _.b,
                          { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                          i.a.createElement(h.b, {
                            communityId: t.id_str,
                            mode: h.a.Members,
                            userRole: null == t ? void 0 : t.role,
                          }),
                        ),
                        i.a.createElement(
                          _.b,
                          { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                          i.a.createElement(y.a, { community: t }),
                          i.a.createElement(h.b, {
                            communityId: t.id_str,
                            mode: h.a.Moderators,
                            userRole: null == t ? void 0 : t.role,
                          }),
                        ),
                      ),
                    ),
              ),
            ),
          )
        }
      t.default = u(C)
    },
    'Fq/Z': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeedbackType', function () {
          return J
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return X
        })
      var a = n('97Jx'),
        l = n.n(a),
        r = n('m3Bd'),
        i = n.n(r),
        o = (n('yH/f'), n('KqXw'), n('WNMA'), n('ERkP')),
        c = n.n(o),
        s = n('v6aA'),
        u = n('+Kfv'),
        m = n('es0u'),
        d = (n('ZVkB'), n('ulNE'), n('urw/'), n('jQ3i'), n('x4t0'), n('eSoz')),
        y = n('XOJV'),
        p = n('G6rE'),
        g = n('rxPX'),
        f = function (e, t) {
          var n = t.match.params.tweetId
          return n ? y.a.selectHydrated(e, n) : void 0
        },
        b = function (e, t) {
          var n = t.match.params
          return Object.entries(n).flat().includes('tweetId') ? J.HiddenTweet : J.RemovedMember
        },
        h = function (e, t) {
          if (b(0, t) === J.HiddenTweet) {
            var n,
              a = t.match.params.tweetId,
              l = a ? y.a.selectHydrated(e, a) : void 0,
              r = null == l || null === (n = l.community_relationship) || void 0 === n ? void 0 : n.community
            return r ? d.c.select(e, r) : void 0
          }
          var i = t.match.params.communityId
          return i ? d.c.select(e, i) : void 0
        },
        _ = function (e, t) {
          if (b(0, t) === J.HiddenTweet) {
            var n = t.match.params.tweetId
            return n ? y.a.selectFetchStatus(e, n) : void 0
          }
          var a = t.match.params.communityId
          return a ? d.c.selectFetchStatus(e, a) : void 0
        },
        v = Object(g.a)()
          .propsFromState(function () {
            return { community: h, fetchStatus: _, loggedInUser: p.e.selectLoggedInUser, tweet: f, type: b }
          })
          .propsFromActions(function () {
            return { fetchCommunity: d.c.fetchOne, fetchTweet: y.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        k = (n('ho0z'), n('PKbs')),
        E = n('egQk'),
        C = n('3XMw'),
        S = n.n(C),
        F = n('/de5'),
        I = n('b5s6'),
        w = n('MWbm'),
        T = n('X00g'),
        K = n('t62R'),
        M = n('4zmP'),
        R = n('0yYu'),
        L = n('6vad'),
        x = n('rHpw'),
        O = S.a.j643a234,
        A = S.a.c730a21c,
        j = S.a.a5baa7d1,
        N = S.a.icc32e3d,
        P = T.a.getCommunityTheme('Default'),
        B = x.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: x.a.theme.colors.gray50,
              borderRadius: x.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: x.a.theme.spacesPx.space16,
              marginBottom: x.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: x.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        H = function (e) {
          var t,
            n = e.community,
            a = e.history,
            l = e.location,
            r = e.match,
            i = e.tweet,
            o = e.type,
            s = { history: a, location: l, match: r },
            u = null == i ? void 0 : i.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (t = (function (e) {
                  switch (e) {
                    case J.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case J.RemovedMember:
                      return null == n ? void 0 : n.viewerViolatedRule
                    default:
                      return
                  }
                })(o)) || void 0 === t
                ? void 0
                : t.name) || '',
            y = null == n ? void 0 : n.name,
            p = null == n ? void 0 : n.rules,
            g = (null == n ? void 0 : n.theme) || P,
            f = T.a.getCommunityUIColorName(g),
            b = Object(E.a)({ communityName: y })
          return g && null != p && p.length
            ? c.a.createElement(
                w.a,
                { style: B.tweetInfo },
                c.a.createElement(
                  w.a,
                  { style: B.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case J.HiddenTweet:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { color: f, size: 'subtext1', style: B.communityTitle, weight: 'bold' },
                            y,
                          ),
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: [B.titleText, B.hiddenTweetWarningText], weight: 'heavy' },
                            O,
                          ),
                          c.a.createElement(I.a, {
                            style: B.tweetContainer,
                            tweetId: null == i ? void 0 : i.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          c.a.createElement(M.a, { headline: A, text: d }),
                          c.a.createElement(K.b, { style: B.helpText }, j),
                        )
                      case J.RemovedMember:
                        return c.a.createElement(
                          c.a.Fragment,
                          null,
                          c.a.createElement(
                            K.b,
                            { size: 'headline1', style: B.titleText, weight: 'heavy' },
                            N({ communityName: y }),
                          ),
                          c.a.createElement(
                            w.a,
                            { style: B.removedMemberReason },
                            c.a.createElement(K.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(o),
                ),
                c.a.createElement(R.a, null),
                c.a.createElement(L.b, { text: b }),
                c.a.createElement(k.b, {
                  badgeStyle: B.badges,
                  ruleContainerStyle: B.rules,
                  rules: p,
                  theme: g,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : c.a.createElement(F.b, s)
        },
        D = n('G1WX'),
        U = n('yoO3'),
        V = n('VS6U'),
        z = n('0KEI'),
        q = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        Q = S.a.jf99d610,
        W = { viewType: 'community' },
        J = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function X(e) {
        var t = c.a.useContext(s.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          a = e.fetchCommunity,
          r = e.fetchStatus,
          o = e.fetchTweet,
          d = e.loggedInUser,
          y = e.tweet,
          p = e.type,
          g = i()(e, q),
          f = function (e) {
            var t, a
            switch (e) {
              case J.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == y ? void 0 : y.user.id_str)),
                  _handleRetry: E,
                  shouldRenderFeedback: Boolean(
                    null == y || null === (t = y.community_relationship) || void 0 === t
                      ? void 0
                      : t.moderation_state.rule,
                  ),
                }
              case J.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == n ? void 0 : n.viewerViolatedRule)),
                  _handleRetry: C,
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
          _ = b.tweetId,
          v = Object(z.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          k = Object(z.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          E = c.a.useEffect(
            function () {
              _ && o(_).catch(v)
            },
            [v, o, _],
          ),
          C = c.a.useEffect(
            function () {
              h && a(h).catch(k)
            },
            [h, k, a],
          ),
          S = c.a.createElement(F.b, g)
        return c.a.createElement(D.a, {
          fetchStatus: r,
          onRequestRetry: f(p)._handleRetry,
          render: function () {
            var n = f(p),
              a = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              r = n.isAuthorizedViewer,
              i = n.shouldRenderFeedback
            return r && t
              ? c.a.createElement(
                  u.a,
                  { behavioralEventContext: W },
                  i
                    ? c.a.createElement(
                        U.a,
                        { behavioralEventViewType: a },
                        c.a.createElement(V.a, {
                          backLocation: '/notifications',
                          history: g.history,
                          primaryContent: c.a.createElement(H, l()({}, e, { type: p })),
                          sidebarContent: c.a.createElement(m.a, null),
                          title: Q,
                        }),
                      )
                    : S,
                )
              : S
          },
        })
      }
      var G = v(X)
      t.default = G
    },
    'I/KZ': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'd', function () {
          return k
        }),
        n.d(t, 'e', function () {
          return K
        }),
        n.d(t, 'c', function () {
          return M
        })
      n('yH/f')
      var a,
        l = Object.freeze({
          Open: 'CommunityOpenMembershipSettings',
          Restricted: 'CommunityRestrictedMembershipSettings',
        }),
        r = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        i = n('ERkP'),
        o = n.n(i),
        c = n('t62R'),
        s = n('3JAx'),
        u = n('e0ey'),
        m = n('rHpw'),
        d = n('3XMw'),
        y = n.n(d),
        p = [
          { label: y.a.fd00a769, value: l.Open, helpText: y.a.a0a16d37 },
          { label: y.a.ce0523a8, value: l.Restricted, helpText: y.a.f1b189f9 },
        ],
        g = y.a.c85960a0,
        f = y.a.ca373cd2,
        b = y.a.d42d9318,
        h = o.a.createElement(
          y.a.I18NFormatMessage,
          { $i18n: 'd35773be' },
          o.a.createElement(c.b, { weight: 'bold' }, y.a.b1066579),
        ),
        _ = function (e) {
          var t = e.children
          return o.a.createElement(c.b, { color: 'gray700', size: 'subtext2', style: E.settingsItem }, t)
        },
        v = function (e) {
          var t = e.state,
            n = t.access,
            a = t.invitesPolicy,
            i = e.setters,
            c = i.setAccess,
            m = i.setInvitesPolicy,
            d = !e.hideInvitePolicy,
            y = o.a.useCallback(
              function (e, t) {
                c(t)
              },
              [c],
            ),
            v = o.a.useCallback(
              function (e, t) {
                m(t ? r.Member : r.Moderator)
              },
              [m],
            )
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(_, null, h),
            o.a.createElement(s.a, { name: 'membershipSetting', onChange: y, options: p, value: n }),
            o.a.createElement(_, null, b),
            d &&
              n === l.Restricted &&
              o.a.createElement(u.a, {
                checked: a === r.Member,
                helpText: f,
                label: g,
                name: 'allowInvites',
                onChange: v,
              }),
          )
        },
        k = o.a.memo(v),
        E = m.a.create(function (e) {
          return { settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        C = n('ddV6'),
        S = n.n(C),
        F = n('KEM+'),
        I = n.n(F),
        w = ((a = {}), I()(a, l.Open, r.Member), I()(a, l.Restricted, r.Moderator), a),
        T = { access: l.Restricted, invitesPolicy: w[l.Restricted] }
      function K() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
          t = o.a.useState(e.access),
          n = S()(t, 2),
          a = n[0],
          l = n[1],
          r = o.a.useState(e.invitesPolicy),
          i = S()(r, 2),
          c = i[0],
          s = i[1],
          u = o.a.useMemo(function () {
            return {
              setAccess: function (e) {
                s(w[e]), l(e)
              },
              setInvitesPolicy: s,
            }
          }, []),
          m = o.a.useMemo(
            function () {
              return { access: a, invitesPolicy: c }
            },
            [a, c],
          )
        return [m, u]
      }
      function M(e) {
        var t, n
        switch (e.access) {
          case l.Open:
            t = 'Open'
            break
          case l.Restricted:
          default:
            t = 'RestrictedJoinRequestsDisabled'
        }
        switch (e.invitesPolicy) {
          case r.Moderator:
            n = 'ModeratorInvitesAllowed'
            break
          case r.Member:
            n = 'MemberInvitesAllowed'
            break
          case r.None:
          default:
            n = 'NoInvitesAllowed'
        }
        return { joinPolicy: t, invitesPolicy: n }
      }
    },
    JAeQ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ddV6'),
        i = n.n(r),
        o = (n('yH/f'), n('kH1Z'), n('6U7i'), n('ERkP')),
        c = n.n(o),
        s = n('3XMw'),
        u = n.n(s),
        m = n('fS8x'),
        d = u.a.b7fb6bd9,
        y = u.a.e71cdf4d,
        p = Object.freeze({ NotStarted: 'not_started', Started: 'started', Completed: 'completed' })
      function g(e) {
        var t = e.aspectRatio,
          n = e.media,
          a = e.onCancel,
          r = e.onCropDone,
          o = c.a.useState({ status: 'not_started' }),
          s = i()(o, 2),
          u = s[0],
          g = s[1],
          f = c.a.useState(!1),
          b = i()(f, 2),
          h = b[0],
          _ = b[1],
          v = c.a.useState(!1),
          k = i()(v, 2),
          E = k[0],
          C = k[1],
          S = u.croppedMediaId,
          F = void 0 === S ? void 0 : S,
          I = u.status
        c.a.useEffect(
          function () {
            I === p.NotStarted && (_(!0), g({ status: 'started' })),
              I === p.Completed && n.id !== F && g({ status: 'not_started', croppedMediaId: void 0 })
          },
          [I, n, F],
        )
        var w = c.a.useCallback(
            function () {
              _(!1), g({ status: p.Completed, croppedMediaId: n.id }), a()
            },
            [a, n],
          ),
          T = c.a.useCallback(function () {
            _(!1), C(!0)
          }, []),
          K = c.a.useCallback(function () {
            C(!1), _(!0)
          }, []),
          M = c.a.useCallback(function () {
            C(!1)
          }, []),
          R = c.a.useCallback(
            function (e) {
              g({ status: p.Completed, croppedMediaId: n.id }), null == r || r(e)
            },
            [r, n],
          ),
          L = l()(l()({}, n), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: n.mediaFile, cropData: void 0 })
        return c.a.createElement(
          c.a.Fragment,
          null,
          h ? c.a.createElement(m.a, { defaultAspectRatio: t, media: n, onCancel: w, onDone: T, title: d }) : null,
          E
            ? c.a.createElement(m.a, {
                defaultAspectRatio: 1,
                media: L,
                onCancel: K,
                onCropDone: R,
                onDone: M,
                title: y,
              })
            : null,
        )
      }
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
        l = n.n(a),
        r = (n('hBvt'), n('ERkP')),
        i = n.n(r),
        o = n('BUB3'),
        c = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return i.a.createElement(o.a, { exact: !0, path: e.link }, function (t) {
          var n = c.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return i.a.createElement(s.a, l()({ isActive: t }, e, { label: i.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    LgBi: function (e, t, n) {
      'use strict'
      var a,
        l,
        r = n('97Jx'),
        i = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        s = n('ERkP'),
        u = n.n(s),
        m = n('/yvb'),
        d = n('3XMw'),
        y = n.n(d),
        p = n('pwey'),
        g = (n('enFi'), n('jAXQ')),
        f = n.n(g),
        b = ['community'],
        h = y.a.b139b549,
        _ = u.a.createElement(p.a, null),
        v = function (e) {
          var t = e.community,
            l = c()(e, b),
            r = f()(void 0 !== a ? a : (a = n('qre1')), t)
          if (!r || 'CommunityInvitesUnavailable' === r.invites_result.__typename) return null
          var o = '/i/communities/'.concat(r.rest_id, '/invite')
          return u.a.createElement(m.a, i()({ accessibilityLabel: h, icon: _, link: o, type: 'primaryText' }, l))
        },
        k = u.a.memo(v),
        E = n('Fr3L'),
        C = n('IAZG'),
        S = ['communityId'],
        F = { context: 'CommunityInviteButtonQuery' },
        I = void 0 !== l ? l : (l = n('zakg')),
        w = function (e) {
          var t = e.communityId,
            n = c()(e, S),
            a = Object(C.a)(I, { communityId: t })
          return u.a.createElement(k, i()({ community: a.community }, n))
        },
        T = function (e) {
          return u.a.createElement(
            E.a,
            { errorConfig: F },
            u.a.createElement(w, i()({ communityId: e.communityId }, e)),
          )
        }
      t.a = u.a.memo(T)
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        l = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        b = (n('2G9S'), n('i4UL'), n('+/5o')),
        h = n('ERkP'),
        _ = n.n(h),
        v = n('HPNB'),
        k = n('VAZu'),
        E = n('wiP2'),
        C = n('Es6L'),
        S = n('yiKp'),
        F = n.n(S),
        I = n('rHpw'),
        w = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: F()(F()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        T = n('MWbm'),
        K = n('yw4N'),
        M = n('TnY3'),
        R = n('cHvH'),
        L = n('3xLC'),
        x = [
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
            i()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? _.a.createElement(
                      T.a,
                      { style: w.fill },
                      _.a.createElement(
                        K.a,
                        { style: w.viewportView },
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
                  return _.a.createElement(R.a, null, function (t) {
                    var n = t.windowWidth
                    return v.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      l()(e, x))
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : _.a.createElement(E.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return _.a.createElement(
                    _.a.Fragment,
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
                    l = n.TabBar,
                    r = n.TeamsSwitcher,
                    i = n.backLocation,
                    o = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    m = n.middleControl,
                    d = n.onBackClick,
                    y = n.rightControl,
                    p = n.screenType,
                    g = n.searchBoxOptions,
                    f = n.secondaryBar,
                    h = n.showSubtitleOnRoot,
                    v = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    S = n.title,
                    F = n.titleIconCell,
                    I = n.titleIconCellSize,
                    K = n.withDetailOpen,
                    M = n.withSearchBox,
                    R = n.withTweetButton,
                    L = 'root' === p,
                    x = 'secondaryRoot' === p,
                    O = 'primaryDetail' === p,
                    A = (O && v) || (L && h),
                    j = L || (O && t),
                    N = L ? b.c : O ? b.a : void 0,
                    P = _.a.createElement(
                      T.a,
                      { style: w.appBarContainer },
                      _.a.createElement(k.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: j,
                        history: s,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: y,
                        secondaryBar: f,
                        subtitle: A ? C : void 0,
                        title: S,
                        titleDomId: N,
                        titleIconCell: F,
                        titleIconCellSize: I,
                      }),
                    ),
                    B =
                      L || (x && K)
                        ? null
                        : _.a.createElement(E.a.Configure, {
                            SideNavButton: a,
                            TabBar: l,
                            TeamsSwitcher: r,
                            backLocation: i,
                            documentTitle: o,
                            headerless: c,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: y,
                            searchBoxOptions: g,
                            subtitle: C,
                            title: S,
                            withSearchBox: M,
                            withTweetButton: R,
                          })
                  return _.a.createElement(_.a.Fragment, null, B, P)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      f()(O, 'contextType', L.a),
        f()(O, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(M.a)(O)
    },
    MCGW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesScreen', function () {
          return C
        })
      var a = n('yiKp'),
        l = n.n(a),
        r = n('97Jx'),
        i = n.n(r),
        o = (n('KqXw'), n('WNMA'), n('ho0z'), n('uFXj'), n('ERkP')),
        c = n.n(o),
        s = n('v6aA'),
        u = n('es0u'),
        m = n('PKbs'),
        d = n('egQk'),
        y = n('1Idg'),
        p = n('eSoz'),
        g = n('rxPX'),
        f = n('0KEI'),
        b = Object(g.a)()
          .propsFromState(function () {
            return { community: y.a, fetchStatus: y.b, isCommunityMember: y.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              fetchCommunityIfNeeded: p.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules' }),
        h = n('MDbM'),
        _ = n('/de5'),
        v = n('5FtR'),
        k = n('VS6U'),
        E = n('rHpw'),
        C = function (e) {
          var t = c.a.useContext(s.a).featureSwitches,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.fetchStatus,
            y = e.history,
            p = e.isCommunityMember,
            g = e.location,
            f = e.match,
            b = f.params.communityId,
            E = t.isTrue('c9s_participation_enabled')
          c.a.useEffect(function () {
            b && !n && o !== h.a.LOADED && r(b).catch(a())
          })
          var C = c.a.useMemo(
            function () {
              return { selectedCommunityId: b || '', defaultText: '' }
            },
            [b],
          )
          if (n && b) {
            var S = n.name,
              I = n.rules,
              w = n.theme,
              T = {
                composeOptions: C,
                history: y,
                sidebarContent: c.a.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: E && p,
              }
            if (I.length > 0) {
              var K = c.a.createElement(m.b, {
                badgeStyle: F.badgeStyle,
                headerContainerStyle: F.containerStyle,
                headerExplanationStyle: F.explanationStyle,
                ruleContainerStyle: F.ruleContainerStyle,
                rules: I,
                theme: w,
                withBottomMargin: !0,
              })
              return c.a.createElement(
                k.a,
                i()({}, T, {
                  backLocation: '/i/communities/'.concat(b),
                  documentTitle: Object(d.a)({ communityName: S }),
                  primaryContent: K,
                }),
              )
            }
            var M = l()(l()({}, T), {}, { title: null }),
              R = c.a.createElement(_.b, { history: y, location: g, match: f })
            return c.a.createElement(k.a, i()({}, M, { primaryContent: R }))
          }
          return o === h.a.LOADED ? c.a.createElement(v.a, { to: '/' }) : null
        },
        S = b(C),
        F =
          ((t.default = S),
          E.a.create(function (e) {
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
    OBBW: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityDescriptionContainer_community',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useCommunityTheme_community' },
          { args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImage_community' },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '7160dd73830957dbef0814fa82a0296d',
      }
      t.default = a
    },
    OUEC: function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
        o = n('ezF+'),
        c =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(201).then(n.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: n('XBtf').a.Critical,
          }),
        s = o.e(c),
        u = n('QIgh'),
        m = n('8UdT')
      t.a = i()(i()({}, u.b), {}, l()({}, m.b.Community, s))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      var a = n('ddV6'),
        l = n.n(a),
        r = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(r),
        o = n('v6aA'),
        c = n('3XMw'),
        s = n.n(c),
        u = n('Nh1N'),
        m = n('MWbm'),
        d = n('Ig1G'),
        y = n('4zmP'),
        p = n('p+r5'),
        g = n('rHpw'),
        f = s.a.c66769a3,
        b = s.a.ef02695a,
        h = s.a.ef02695a,
        _ = s.a.c824202f,
        v = s.a.d32cf5e6,
        k = s.a.f8fa00c7,
        E = s.a.fc2a5c92,
        C = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            a = t.getNumberValue('c9s_max_rule_description_length', 160),
            r = e.description,
            c = e.errorText,
            s = e.name,
            g = e.onChange,
            C = i.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 3, n)
              },
              [n],
            ),
            F = i.a.useCallback(
              function (e) {
                return !Object(d.h)(e, 0, a)
              },
              [a],
            ),
            I = i.a.useState(s),
            w = l()(I, 2),
            T = w[0],
            K = w[1],
            M = i.a.useState(C(s)),
            R = l()(M, 2),
            L = R[0],
            x = R[1],
            O = i.a.useState(void 0),
            A = l()(O, 2),
            j = A[0],
            N = A[1],
            P = i.a.useState(r),
            B = l()(P, 2),
            H = B[0],
            D = B[1],
            U = i.a.useState(F(r)),
            V = l()(U, 2),
            z = V[0],
            q = V[1],
            Q = i.a.useState(void 0),
            W = l()(Q, 2),
            J = W[0],
            X = W[1],
            G = i.a.useState('' !== s),
            Y = l()(G, 2),
            Z = Y[0],
            $ = Y[1],
            ee = i.a.useCallback(
              function (e) {
                var t = !1,
                  a = e.target.value
                C(a) && ((t = !0), N(h({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  x(t),
                  K(a),
                  g({ description: H, name: a, valid: !t && !z })
              },
              [n, H, g, z, C],
            ),
            te = i.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                F(n) && ((t = !0), X(k({ maxCharacterCount: a }))),
                  q(t),
                  D(n),
                  g({ name: T, description: n, valid: !t && !L })
              },
              [a, T, g, L, F],
            ),
            ne = L && j ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: n }),
            ae = z ? void 0 : v({ maxCharacterCount: a }),
            le = c
              ? i.a.createElement(
                  m.a,
                  { style: S.error },
                  i.a.createElement(y.a, { Icon: u.a, headline: E, text: c, type: 'danger' }),
                )
              : void 0
          return i.a.createElement(
            i.a.Fragment,
            null,
            le,
            i.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: j,
              helperText: ne,
              invalid: L && Z,
              label: f,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: n,
              value: T,
            }),
            i.a.createElement(p.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: J,
              helperText: ae,
              invalid: z,
              label: _,
              name: 'typedRuleDescription',
              onChange: te,
              spellCheck: 'false',
              validLength: a,
              value: H,
            }),
          )
        },
        S = g.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    PMbW: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
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
      ;(l.hash = 'd9f3f2d3ef86dc1594fe3112f3b525a0'), (t.default = l)
    },
    PbB6: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
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
                args: l,
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
      ;(r.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (t.default = r)
    },
    Phky: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, l.default)(e), a = 0; a < n.length; a++) {
            var r = n[a].screenName
            t.push(r)
          }
          return t
        })
      var l = a(n('GiKA'))
      e.exports = t.default
    },
    QRqA: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA'),
        i = n('xZGM'),
        o = n('ddV6'),
        c = n.n(o),
        s = n('+Kfv'),
        u = n('3XMw'),
        m = n.n(u),
        d = n('feu+'),
        y = n('ii+P'),
        p = m.a.j24c37b2,
        g = function (e) {
          var t = e.Content,
            n = e.actionLabel,
            a = void 0 === n ? p : n,
            r = e.flag,
            i = e.headline,
            o = e.subtext,
            u = e.behavioralEventContext,
            m = e.withCloseButton,
            g = Object(y.a)(r),
            f = c()(g, 2),
            b = f[0],
            h = f[1]
          if (!b) return null
          var _ = l.a.createElement(
            d.a,
            {
              actionLabel: a,
              graphicDisplayMode: 'none',
              headline: i,
              onAction: h,
              onClose: h,
              subtext: o,
              withCloseButton: m,
            },
            l.a.createElement(t, null),
          )
          return u ? l.a.createElement(s.a, { behavioralEventContext: u }, _) : _
        },
        f = l.a.memo(g),
        b = n('MWbm'),
        h = n('X00g'),
        _ = n('h0NW'),
        v = n('rHpw'),
        k = n('r9x5'),
        E = n('cOhU'),
        C = n('uCrx'),
        S = m.a.b60e4f77,
        F = m.a.f0fc827d,
        I = m.a.c8e93b51,
        w = m.a.fc5c6913,
        T = m.a.ad211086,
        K = m.a.gf803ba1,
        M = m.a.e92fe01b,
        R = m.a.h3bb8068,
        L = m.a.a709f8f8,
        x = { viewType: 'welcome_education' },
        O = l.a.memo(function (e) {
          var t = e.forSingleCommunity,
            n = l.a.useContext(r.a).featureSwitches,
            a = l.a.useCallback(
              function () {
                var e = n.isTrue('c9s_ui_colors_enabled_rweb') && (null == t ? void 0 : t.theme),
                  a = [A.decorationContainer, e && { color: h.a.getCommunityUIColor(e) }],
                  r = l.a.createElement(k.a, { style: a }),
                  i = l.a.createElement(E.a, { style: a }),
                  o = l.a.createElement(C.a, { style: a })
                return l.a.createElement(
                  b.a,
                  { style: A.infoItemsContainer },
                  l.a.createElement(_.a, {
                    containerStyle: A.itemContainer,
                    items: [
                      { label: w, description: T, decoration: r },
                      { label: K, description: M, decoration: i },
                      { label: R, description: L, decoration: o },
                    ],
                  }),
                )
              },
              [n, t],
            )
          return !1 === (null == t ? void 0 : t.canJoinCommunity)
            ? null
            : l.a.createElement(f, {
                Content: a,
                actionLabel: S,
                behavioralEventContext: x,
                flag: i.i,
                headline: F,
                subtext: I,
                withCloseButton: !t,
              })
        }),
        A = v.a.create(function (e) {
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
        })
      t.a = O
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
          return f
        })
      var a = n('KEM+'),
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
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
      function g(e) {
        return e.meta.communityId
      }
      var f = function (e) {
        return function (t, n, a) {
          var l = a.api
          return o.b(t, { params: { communityId: e }, request: l.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      s.a.register(
        l()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return i()(i()({}, e), {}, { fetchStatus: i()(i()({}, e.fetchStatus), {}, l()({}, g(t), c.a.LOADING)) })
            case m.FAILURE:
              return i()(
                i()({}, e),
                {},
                { fetchStatus: i()(i()({}, e.fetchStatus), {}, l()({}, g(t), c.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return i()(
                  i()({}, e),
                  {},
                  ((n = {}),
                  l()(n, g(t), t.payload),
                  l()(n, 'fetchStatus', i()(i()({}, e.fetchStatus), {}, l()({}, g(t), c.a.LOADED))),
                  l()(n, 'error', null),
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
        return v
      })
      var a = n('ddV6'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('v6aA'),
        c = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = n('nmVb'),
        y = n.n(d),
        p = n('Phky'),
        g = n.n(p),
        f = u.a.h3e55b40,
        b = u.a.dd71d9c9,
        h = u.a.cf65e56a,
        _ = u.a.d936eeca,
        v = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityName,
            r = e.onChange,
            s = i.a.useContext(o.a).featureSwitches,
            u = i.a.useState(!1),
            d = l()(u, 2),
            p = d[0],
            v = d[1],
            k = i.a.useState(void 0),
            E = l()(k, 2),
            C = E[0],
            S = E[1],
            F = s.getNumberValue('c9s_max_community_name_length', 30),
            I = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(m.h)(t, 3, F)
                  ? (y()(t).length > 0 || g()(t).length > 0) && ((n = !0), S(_))
                  : ((n = !0), S(h({ minCharacterCount: 3, maxCharacterCount: F }))),
                  v(n),
                  r(t, n)
              },
              [F, r, S],
            ),
            w = b({ minCharacterCount: 3, maxCharacterCount: F })
          return i.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: C,
            helperText: w,
            invalid: p,
            label: f,
            name: 'typedCommunityName',
            onChange: I,
            spellCheck: 'false',
            validLength: F,
            value: a,
          })
        }
    },
    Rc1A: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityShareButtonQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityShareButton_community' }],
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
            name: 'CommunityShareButtonQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'uBj-FA1eH5oHJufmxwI9IQ',
            metadata: {},
            name: 'CommunityShareButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(r.hash = '3eeda317cb789b741e0d0c9703d0fc15'), (t.default = r)
    },
    'S+H3': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    S91Q: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'CommunitiesCreateButtonQuery',
            selections: [
              {
                alias: 'viewer',
                args: (a = [{ kind: 'Literal', name: 's', value: 23 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'create_community_action_result',
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: 'FragmentSpread',
                        name: 'CommunitiesCreateButton_create_community_action_result',
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'CommunitiesCreateButtonQuery',
            selections: [
              {
                alias: 'viewer',
                args: a,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'create_community_action_result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      { kind: 'TypeDiscriminator', abstractKey: '__isCommunityCreateActionResult' },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
            ],
          },
          params: {
            id: '8daJzV6tGCTssiKBRFpXtQ',
            metadata: {},
            name: 'CommunitiesCreateButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(l.hash = 'aaa46fdf5fd0dc56bacf696d9e8a4740'), (t.default = l)
    },
    SNyS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
              }),
              i.a.createElement('path', {
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
        l = n.n(a),
        r = (n('KqXw'), n('WNMA'), n('2G9S'), n('ERkP')),
        i = n.n(r),
        o = n('v6aA'),
        c = n('Ig1G'),
        s = n('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = n('3XMw'),
        d = n.n(m),
        y = n('yoO3'),
        p = n('5FtR'),
        g = n('ddV6'),
        f = n.n(g),
        b = (n('z84I'), n('/yvb')),
        h = n('eSoz'),
        _ = n('0KEI'),
        v = Object(s.a)()
          .propsFromActions(function () {
            return {
              reorderRules: h.c.reorderRules,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        k = n('rHpw'),
        E = k.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        C = n('mWs5'),
        S = n('PKbs'),
        F = d.a.b772cd65,
        I = d.a.gfca5254
      var w = v(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.explanation,
            l = e.history,
            r = e.reorderRules,
            o = t.id_str,
            c = t.rules,
            s = t.theme,
            u = i.a.useState(c),
            m = f()(u, 2),
            d = m[0],
            p = m[1],
            g = i.a.useCallback(
              function (e) {
                p(e)
              },
              [p],
            ),
            h = i.a.useCallback(
              function () {
                var e = n({}),
                  t = d.map(function (e) {
                    return e.rest_id
                  })
                r(o, { ruleIds: t })
                  .then(function () {
                    l.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/rules') })
                  })
                  .catch(e)
              },
              [o, d, r, l, n],
            ),
            _ = i.a.createElement(b.a, { onPress: h, size: 'small', type: 'brandFilled' }, F)
          return i.a.createElement(
            y.a,
            null,
            i.a.createElement(
              C.a,
              { communityId: o, rightControl: _, screenType: 'primaryDetail', title: I },
              i.a.createElement(S.b, {
                badgeStyle: E.badgeStyle,
                displayType: S.a.Reorder,
                explanation: a,
                headerContainerStyle: E.headerContainerStyle,
                onReorder: g,
                ruleContainerStyle: E.ruleContainerStyle,
                rules: d,
                theme: s,
              }),
            ),
          )
        }),
        T = n('MWbm'),
        K = n('mjJ+'),
        M = n('iY63'),
        R = n('ACHU'),
        L = n('zCf4'),
        x = d.a.gfca5254,
        O = d.a.d94edeb4,
        A = d.a.j560c8ea,
        j = d.a.ab8089ea,
        N = d.a.h63a5c3b,
        P = i.a.createElement(M.a, null),
        B = i.a.createElement(R.a, null),
        H = { viewType: 'add' },
        D = function (e) {
          var t = i.a.useContext(o.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            a = t.isTrue('c9s_rule_editing_enabled'),
            r = t.isTrue('c9s_rule_reordering_enabled'),
            s = e.community,
            u = e.history,
            m = e.match,
            d = s.id_str,
            g = s.role,
            f = s.rules,
            h = s.theme,
            _ = m.url,
            v = g === c.a.Admin,
            k =
              n && v
                ? i.a.createElement(b.a, {
                    accessibilityLabel: A,
                    behavioralEventContext: H,
                    icon: P,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            F = f.length > 1,
            I =
              r && v && F
                ? i.a.createElement(b.a, {
                    accessibilityLabel: N,
                    icon: B,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: j, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return i.a.createElement(K.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: U.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            M = i.a.createElement(T.a, { style: U.rightControlStyle }, k, I),
            R = { displayType: S.a.Default, getPivotLink: void 0 }
          return (
            v &&
              a &&
              ((R.displayType = S.a.Pivot),
              (R.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            i.a.createElement(
              L.d,
              null,
              i.a.createElement(
                L.b,
                { exact: !0, path: ''.concat(_, '/') },
                i.a.createElement(
                  y.a,
                  null,
                  i.a.createElement(
                    C.a,
                    { communityId: d, rightControl: M, screenType: 'primaryDetail', title: x },
                    i.a.createElement(
                      S.b,
                      l()(
                        {
                          badgeStyle: E.badgeStyle,
                          explanation: O,
                          headerContainerStyle: E.headerContainerStyle,
                          ruleContainerStyle: E.ruleContainerStyle,
                          rules: f,
                          theme: h,
                        },
                        R,
                      ),
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                L.b,
                { exact: !0, path: ''.concat(_, '/reorder') },
                i.a.createElement(w, { community: s, explanation: O, history: u }),
              ),
              i.a.createElement(L.b, null, i.a.createElement(p.a, { to: ''.concat(_, '/') })),
            )
          )
        },
        U = k.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(D)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'getTweetButtonLocationState', function () {
          return yr
        }),
        n.d(t, 'CommunityScreen', function () {
          return pr
        })
      var a = n('yiKp'),
        l = n.n(a),
        r = (n('KqXw'), n('WNMA'), n('ho0z'), n('ERkP')),
        i = n.n(r),
        o = n('+Kfv'),
        c = n('es0u'),
        s = n('v6aA'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('R5kW'),
        y = function (e, t) {
          var n = Object(d.b)(e, t.communityId) || {},
            a = n.pending_join_request_count,
            l = void 0 === a ? 0 : a,
            r = n.tweet_case_count
          return { pending_join_request_count: l, tweet_case_count: void 0 === r ? 0 : r }
        },
        p = function (e, t) {
          return Object(d.c)(e, t.communityId)
        },
        g = Object(u.a)()
          .propsFromState(function () {
            return { count: y, fetchStatus: p }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: d.a,
            }
          }),
        f = n('kGix'),
        b = n('TnY3'),
        h = n('Ig1G'),
        _ = n('3XMw'),
        v = n.n(_),
        k = n('MWbm'),
        E = n('mjJ+'),
        C = n('/yvb'),
        S = n('Znyr'),
        F = n('rHpw'),
        I = n('zIWA'),
        w = n('SNyS'),
        T = n('Lsrn'),
        K = n('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var R = M,
        L = n('ACHU'),
        x = v.a.h6beb5fa,
        O = v.a.e3f04700,
        A = v.a.e2429f56,
        j = v.a.df15d5b7,
        N = v.a.e48fbb01,
        P = v.a.c8c6c4e9,
        B = v.a.h63a5c3b,
        H = v.a.dce5e1b3,
        D = v.a.c5d8c93d,
        U = { viewType: 'app_bar_button' }
      var V = F.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        z = Object(b.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            l = void 0 === a ? 0 : a,
            r = (e.history, e.userRole),
            o = i.a.useContext(s.a).featureSwitches,
            c = o.isTrue('c9s_settings_enabled'),
            u = o.isTrue('c9s_report_community_enabled'),
            m = o.isTrue('c9s_moderation_enabled') && t,
            d = c && t,
            y = u && !t,
            p = i.a.useCallback(
              function (e) {
                var t = []
                return (
                  m &&
                    t.push({
                      text: A,
                      subText: j({ count: l }),
                      Icon: I.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  y &&
                    t.push({
                      text: N,
                      Icon: I.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: P, Icon: w.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  i.a.createElement(E.a, { items: t, onCloseRequested: e })
                )
              },
              [n, l, m, y],
            ),
            g = t ? R : L.a,
            f = t ? (r === h.a.Admin ? H : D) : B
          return i.a.createElement(
            k.a,
            { style: V.root },
            i.a.createElement(C.a, {
              accessibilityLabel: f,
              behavioralEventContext: U,
              hoverLabel: { label: f },
              icon: i.a.createElement(g, null),
              link: d ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: d ? void 0 : p,
              size: 'large',
              type: 'primaryText',
            }),
            m && l > 0
              ? i.a.createElement(S.a, {
                  count: l,
                  style: V.menuControlBadge,
                  truncatedCountFormatter: x,
                  unreadCountLabel: O,
                  withBorder: !1,
                })
              : null,
          )
        })
      var q,
        Q,
        W,
        J,
        X,
        G = g(function (e) {
          var t = i.a.useContext(s.a).featureSwitches.isTrue('c9s_request_to_join_enabled'),
            n = e.canModerate,
            a = e.communityId,
            l = e.count,
            r = e.createLocalApiErrorHandler,
            o = e.fetchCommunityModerationData,
            c = e.fetchStatus,
            u = e.userRole,
            m = l.pending_join_request_count,
            d = l.tweet_case_count
          return (
            i.a.useEffect(
              function () {
                c === f.a.NONE && n && o(a).catch(r())
              },
              [r, o, c, a, n],
            ),
            i.a.createElement(z, { canModerate: n, communityId: a, count: t ? m + d : d, userRole: u })
          )
        }),
        Y = n('m3Bd'),
        Z = n.n(Y),
        $ = n('1Idg'),
        ee = n('eSoz'),
        te = n('G6rE'),
        ne = n('o3oN'),
        ae = n('/ekK'),
        le = ['loggedInUser'],
        re = function (e, t) {
          var n = $.c(e, t)
          return !n || Object(ae.a)(e, n, 'mod_education_flag')
        },
        ie = Object(u.a)()
          .propsFromState(function () {
            return {
              communityId: $.c,
              community: $.a,
              communityTheme: $.f,
              fetchStatus: $.b,
              hasShownModEducation: re,
              membershipsFetchStatus: ne.d,
              isCommunityMember: $.g,
              joinActionResultType: $.h,
              loggedInUser: te.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Z()(e, le)
            return l()({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: ee.c.fetchOneIfNeeded,
              fetchCommunityMemberships: ne.a,
              setFlag: ae.c,
            }
          })
          .withAnalytics({ page: 'community' }),
        oe = n('MDbM'),
        ce = n('/de5'),
        se = (n('yH/f'), n('WpDa')),
        ue = n('ZNT5'),
        me = (n('enFi'), n('1t7P'), n('jQ/y'), n('jV+4')),
        de = n('t62R'),
        ye = n('jAXQ'),
        pe = n.n(ye),
        ge = function (e) {
          var t,
            a = pe()(void 0 !== q ? q : (q = n('pChJ')), e.community),
            l = i.a.useMemo(
              function () {
                return new Date(a.created_at).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              },
              [a.created_at],
            ),
            r = i.a.useMemo(
              function () {
                var e, t, n
                if ('User' === (null === (e = a.creator_results.result) || void 0 === e ? void 0 : e.__typename))
                  return i.a.createElement(me.a, {
                    isVerified:
                      (null === (t = a.creator_results.result.legacy) || void 0 === t ? void 0 : t.verified) || !1,
                    screenName:
                      (null === (n = a.creator_results.result.legacy) || void 0 === n ? void 0 : n.screen_name) || '',
                    withLink: !0,
                  })
              },
              [a],
            )
          return a.creator_results &&
            'User' === (null === (t = a.creator_results.result) || void 0 === t ? void 0 : t.__typename)
            ? i.a.createElement(
                de.b,
                { color: 'gray700' },
                i.a.createElement(v.a.I18NFormatMessage, { $i18n: 'a346641a', date: l }, r),
              )
            : null
        },
        fe = i.a.memo(ge),
        be = n('s8G+'),
        he = n('6vad'),
        _e = n('csss'),
        ve = n('h0NW'),
        ke = n('0yYu'),
        Ee = n('cOhU'),
        Ce = n('DlMI'),
        Se = n('Lxak'),
        Fe = n('a5gf'),
        Ie = i.a.createElement(de.b, { weight: 'bold' }),
        we = v.a.af7c11a9,
        Te = v.a.db1b9462,
        Ke = v.a.ea49402d,
        Me = i.a.createElement(v.a.I18NFormatMessage, { $i18n: 'he99cc29' }, i.a.cloneElement(Ie, null, v.a.gedb877c)),
        Re = v.a.fcef2921,
        Le = v.a.c93dd2c8,
        xe = function (e) {
          var t = pe()(void 0 !== Q ? Q : (Q = n('1rMX')), e.community),
            a = Object(be.a)('c9s_request_to_join_enabled'),
            l = i.a.useMemo(
              function () {
                var e,
                  n = function (e) {
                    return i.a.createElement(de.b, null, e)
                  },
                  l = i.a.createElement(fe, { community: t }),
                  r = t.membership_settings.__typename,
                  o = {
                    CommunityMemberAllowedActions: { decoration: Ae, label: n(Te) },
                    CommunityOpenMembershipEducation: { decoration: je, label: Me, description: Re },
                    CommunityRestrictedMembershipEducation: { decoration: Pe, label: Me, description: Le },
                    CommunityVisibilityEducation: { decoration: je, label: n(Ke) },
                    OriginationAttributionEducation: { decoration: Ne, label: l },
                  },
                  c = [o.CommunityMemberAllowedActions]
                return (
                  a
                    ? ('CommunityRestrictedMembershipSettings' === r &&
                        c.push(o.CommunityRestrictedMembershipEducation),
                      'CommunityOpenMembershipSettings' === r && c.push(o.CommunityOpenMembershipEducation))
                    : c.push(o.CommunityVisibilityEducation),
                  'User' === (null === (e = t.creator_results.result) || void 0 === e ? void 0 : e.__typename) &&
                    c.push(o.OriginationAttributionEducation),
                  c
                )
              },
              [t, a],
            )
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(he.b, { text: we }),
            Object(h.g)(t.role) && t.description ? i.a.createElement(_e.a, { label: t.description }) : null,
            i.a.createElement(ve.a, { containerStyle: Oe.containerStyle, items: l }),
            i.a.createElement(ke.a, null),
          )
        },
        Oe = F.a.create(function (e) {
          return {
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            icon: {
              marginLeft: '6px',
              marginRight: e.spaces.space20,
              color: e.colors.gray700,
              height: e.spaces.space24,
              width: e.spaces.space24,
            },
          }
        }),
        Ae = i.a.createElement(Ee.a, { style: Oe.icon }),
        je = i.a.createElement(Ce.a, { style: Oe.icon }),
        Ne = i.a.createElement(Se.a, { style: Oe.icon }),
        Pe = i.a.createElement(Fe.a, { style: Oe.icon }),
        Be = i.a.memo(xe),
        He = n('yoO3'),
        De = n('Fr3L'),
        Ue = n('fTQJ'),
        Ve = (n('z84I'), n('PKbs')),
        ze = n('X00g'),
        qe = function (e) {
          var t = pe()(void 0 !== W ? W : (W = n('DCZs')), e),
            a = t.custom_theme,
            l = t.default_theme,
            r = null != a ? a : l
          return i.a.useMemo(
            function () {
              return ze.a.getCommunityTheme(r)
            },
            [r],
          )
        },
        Qe = qe,
        We = n('rC8y'),
        Je = void 0 !== J ? J : (J = n('BX8b')),
        Xe = v.a.gfca5254,
        Ge = v.a.ffd9cfe6,
        Ye = function (e) {
          var t = e.community,
            n = pe()(Je, t),
            a = n.rules,
            l = Qe(n),
            r = i.a.useMemo(
              function () {
                return a.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [a],
            )
          return 0 === a.length
            ? null
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(he.b, { text: Xe }),
                i.a.createElement(Ve.b, {
                  badgeStyle: Ze.badgeStyle,
                  headerContainerStyle: [Ze.containerStyle, Ze.headingContainerStyle],
                  headerExplanationStyle: Ze.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: Ze.ruleContainerStyle,
                  rules: r,
                  theme: l,
                }),
                a.length > 5
                  ? i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(We.a, { link: '/i/communities/'.concat(n.rest_id, '/rules'), text: Ge }),
                      ' ',
                      i.a.createElement(ke.a, null),
                    )
                  : null,
              )
        },
        Ze = F.a.create(function (e) {
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
        $e = i.a.memo(Ye),
        et = n('7JQg'),
        tt = n('IAZG'),
        nt = v.a.i9028824,
        at = v.a.cc683fb9,
        lt = { page: 'community', section: 'about' },
        rt = void 0 !== X ? X : (X = n('jC8Z'))
      function it(e) {
        var t = e.communityId,
          n = Object(tt.a)(rt, { communityId: t })
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(Be, { community: n.community }),
          i.a.createElement($e, { community: n.community }),
        )
      }
      var ot = function (e) {
          var t = e.communityId,
            n = i.a.useMemo(
              function () {
                return (function (e) {
                  return Object(ue.a)({
                    timelineId: 'communityAbout-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchAboutTimeline
                    },
                    getEndpointParams: function (t) {
                      return { communityId: e }
                    },
                    context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                    perfKey: 'communityAbout',
                    formatResponse: se.a,
                  })
                })(t)
              },
              [t],
            )
          return i.a.createElement(
            et.c,
            { namespace: lt },
            i.a.createElement(
              He.a,
              { behavioralEventViewType: 'about' },
              i.a.createElement(
                De.a,
                { errorConfig: { context: 'CommunityAboutScreen' } },
                i.a.createElement(it, { communityId: t }),
              ),
              i.a.createElement(Ue.a, { loadingAccessibilityLabel: nt, module: n, title: at }),
            ),
          )
        },
        ct = n('VrFO'),
        st = n.n(ct),
        ut = n('Y9Ll'),
        mt = n.n(ut),
        dt = n('1Pcy'),
        yt = n.n(dt),
        pt = n('5Yy7'),
        gt = n.n(pt),
        ft = n('2VqO'),
        bt = n.n(ft),
        ht = n('KEM+'),
        _t = n.n(ht),
        vt = (n('2G9S'), n('LW0h'), n('7x/C'), n('7xRU'), n('tVqn'), n('uFXj'), n('97Jx')),
        kt = n.n(vt),
        Et = n('ddV6'),
        Ct = n.n(Et),
        St = n('egQk'),
        Ft = n('li/m'),
        It = function (e, t) {
          var n
          return (null === (n = t.location.state) || void 0 === n ? void 0 : n.community) || $.a(e, t)
        },
        wt = Object(u.a)()
          .propsFromState(function () {
            return { community: It, fetchStatus: $.b, isCommunityMember: $.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: Ft.b,
              requestToJoin: ee.c.requestToJoin,
              fetchCommunityIfNeeded: ee.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        Tt = n('jHSc'),
        Kt = n('5FtR'),
        Mt = v.a.h4fbfa57,
        Rt = v.a.ea8cfb1d,
        Lt = v.a.dc1b14a1,
        xt = { viewType: 'community' },
        Ot = wt(function (e) {
          var t,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            r = e.fetchStatus,
            c = e.isCommunityMember,
            s = e.join,
            u = e.match,
            m = e.onDismiss,
            d = e.requestToJoin,
            y = u.params.communityId,
            p =
              'ViewerRequestRequired' ===
              (null == n || null === (t = n.actions.join_action_result) || void 0 === t ? void 0 : t.reason)
          i.a.useEffect(function () {
            y && !n && r !== oe.a.LOADED && l(y).catch(a())
          })
          var g = i.a.useCallback(function (e) {
              return i.a.createElement(de.b, { size: 'title4', weight: 'bold' }, Lt({ communityName: e }))
            }, []),
            f = p ? Rt : Mt,
            b = i.a.useCallback(
              function () {
                if (n) {
                  var e = n.id_str
                  ;(p ? d : s)(e).then(m).catch(a())
                }
              },
              [n, a, s, p, m, d],
            ),
            h = i.a.useCallback(
              function () {
                return i.a.createElement(C.a, { onPress: b, size: 'small', type: 'brandFilled' }, f)
              },
              [f, b],
            )
          if (n) {
            var _ = n.name,
              v = n.rules,
              k = n.theme
            return v && v.length && !c
              ? i.a.createElement(
                  o.a,
                  { behavioralEventContext: xt },
                  i.a.createElement(
                    Tt.b,
                    {
                      behavioralEventViewType: 'rules',
                      onBackClick: m,
                      rightControl: h(),
                      title: Object(St.a)({ communityName: _ }),
                    },
                    i.a.createElement(Ve.b, {
                      badgeStyle: At.badgeStyle,
                      headerContainerStyle: At.containerStyle,
                      headerExplanationStyle: At.headerExplanationStyle,
                      heading: g(_),
                      rules: v,
                      theme: k,
                    }),
                  ),
                )
              : i.a.createElement(Kt.a, { to: '/i/communities/'.concat(n.id_str) })
          }
          return r === oe.a.LOADED ? i.a.createElement(Kt.a, { to: '/' }) : null
        }),
        At = F.a.create(function (e) {
          return {
            badgeStyle: { marginRight: e.spaces.space16 },
            headerExplanationStyle: { marginTop: e.spaces.space8 },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        jt = (n('ssJ/'), n('X8FW')),
        Nt = n('cHvH'),
        Pt = n('sgih'),
        Bt = i.a.memo(function (e) {
          var t = Object(Nt.b)().windowWidth,
            n = e.children
          return t > F.a.theme.breakpoints.medium
            ? i.a.createElement(jt.b, { modalSize: jt.a.fixed }, n)
            : i.a.createElement(Pt.a, { type: 'full' }, n)
        }),
        Ht = n('CGyZ'),
        Dt = n('feu+'),
        Ut = v.a.fad95333,
        Vt = function (e) {
          var t = e.offendingRule
          return i.a.createElement(
            k.a,
            null,
            t
              ? i.a.createElement(
                  k.a,
                  { style: zt.offendingRule },
                  (function (e) {
                    return i.a.createElement(
                      v.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      i.a.createElement(de.b, { weight: 'bold' }, v.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            i.a.createElement(de.b, null, Ut),
          )
        },
        zt = F.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        qt = v.a.hafa07f2,
        Qt = v.a.fa94c9da,
        Wt = v.a.c15bee31,
        Jt = v.a.i859676b,
        Xt = i.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          i.a.createElement(de.b, { link: '/settings/audience_and_tagging' }, v.a.e77dfaf0),
        ),
        Gt = v.a.fc2a5c92,
        Yt = v.a.bf7bdb60,
        Zt = v.a.h27d695f,
        $t = v.a.b02360f5,
        en = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        tn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        nn = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
          ViewerRequestPending: 'ViewerRequestPending',
          ViewerJoinRequestRequired: 'ViewerRequestRequired',
        })
      var an,
        ln,
        rn,
        on,
        cn,
        sn = n('zCf4'),
        un = v.a.e6057013,
        mn = v.a.b533478f,
        dn = { follow: v.a.b171d7c4, following: v.a.aa7ae3f6, unfollow: v.a.bb1d57b6 },
        yn = v.a.j24c37b2,
        pn = function (e) {
          var t = i.a.useContext(s.a).featureSwitches,
            n = i.a.useState(void 0),
            a = Ct()(n, 2),
            r = a[0],
            o = a[1],
            c = i.a.useState(!1),
            u = Ct()(c, 2),
            m = u[0],
            d = u[1],
            y = { history: Object(sn.f)(), location: Object(sn.g)(), match: Object(sn.i)() },
            p = t.isTrue('c9s_request_to_join_enabled'),
            g = e.community,
            f = e.createLocalApiErrorHandler,
            b = e.isProtectedUser,
            _ = e.join,
            v = e.leave,
            E = e.requestToJoin,
            S = g.actions,
            F = S.join_action_result,
            I = S.leave_action_result,
            w = g.id_str,
            T = g.name,
            K = g.role,
            M = Object(h.g)(K),
            R = F.reason === nn.ViewerJoinRequestRequired && p,
            L = F.reason === nn.ViewerRequestPending && p,
            x = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !M } },
            O = i.a.useCallback(
              function () {
                var e = g.rules,
                  t = g.viewerViolatedRule,
                  n = (function (e, t, n, a) {
                    var l = e.__typename,
                      r = e.reason,
                      o = function (e) {
                        return { canAction: !0, message: e }
                      },
                      c = function (e) {
                        return { canAction: !1, message: e }
                      },
                      s = c({ headline: Gt, text: Yt })
                    switch (l) {
                      case en.joinAvailable:
                        return o()
                      case en.joinUnavailable:
                        switch (r) {
                          case nn.ViewerIsRemoved:
                            return c({
                              headline: Wt,
                              text: i.a.createElement(Vt, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case nn.ViewerNotInvited:
                            return c({ headline: qt, text: Qt })
                          case nn.ViewerIsProtected:
                            return t ? c({ headline: Jt, text: Xt }) : o()
                          case nn.ViewerJoinRequestRequired:
                            return a ? o() : s
                          default:
                            return s
                        }
                      default:
                        return s
                    }
                  })(F, b, t, p),
                  a = n.canAction,
                  l = n.message
                !a && l && o(l), a && (e && e.length > 0 ? d(!0) : R ? E(w).catch(f({})) : _(w).catch(f({})))
              },
              [g, w, f, b, p, _, R, F, E],
            ),
            A = i.a.useCallback(
              function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      a = e.reason,
                      l = function (e) {
                        return { canAction: !1, message: e }
                      },
                      r = l({ headline: Gt, text: Yt })
                    switch (n) {
                      case en.leaveAvailable:
                        return { canAction: !0, message: t }
                      case en.leaveUnavailable:
                        switch (a) {
                          case tn.ViewerIsSoleAdmin:
                            return l({ headline: Zt, text: $t })
                          default:
                            return r
                        }
                      default:
                        return r
                    }
                  })(I),
                  t = e.canAction,
                  n = e.message
                !t && n && o(n), t && v(w).catch(f({}))
              },
              [w, f, v, I],
            ),
            j = i.a.useCallback(function () {
              o(void 0)
            }, []),
            N = i.a.useCallback(function () {
              d(!1)
            }, []),
            P = i.a.useMemo(
              function () {
                return R ? l()(l()({}, dn), {}, { follow: un }) : dn
              },
              [R],
            )
          return i.a.createElement(
            k.a,
            { style: gn.button },
            m ? i.a.createElement(Bt, null, i.a.createElement(Ot, kt()({ communityId: w, onDismiss: N }, y))) : null,
            L
              ? i.a.createElement(C.a, { disabled: !0, type: 'onMediaOutlined' }, mn)
              : i.a.createElement(Ht.a, {
                  behavioralEventContext: x,
                  buttonText: P,
                  isFollowing: M,
                  name: T,
                  onFollow: O,
                  onUnfollow: A,
                  type: 'community',
                }),
            r
              ? i.a.createElement(Dt.a, {
                  actionLabel: yn,
                  graphicDisplayMode: 'none',
                  headline: r.headline,
                  onAction: j,
                  onClose: j,
                  subtext: r.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        gn = F.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        fn = n('YeIG'),
        bn = n('cHTv'),
        hn = function (e) {
          var t = pe()(void 0 !== an ? an : (an = n('dMLx')), e)
          return i.a.useMemo(
            function () {
              return (
                (function (e) {
                  var t,
                    n,
                    a = null == e || null === (t = e.custom_banner_media) || void 0 === t ? void 0 : t.media_info
                  if (
                    null != a &&
                    a.original_img_url &&
                    null != a &&
                    a.original_img_height &&
                    null != a &&
                    a.original_img_width &&
                    null != a &&
                    null !== (n = a.color_info) &&
                    void 0 !== n &&
                    n.palette
                  ) {
                    var l = a.color_info.palette
                    return {
                      url: a.original_img_url,
                      height: a.original_img_height,
                      width: a.original_img_width,
                      palette: l,
                    }
                  }
                })(t) ||
                (function (e) {
                  var t,
                    n = null == e || null === (t = e.default_banner_media) || void 0 === t ? void 0 : t.media_info
                  if (
                    null != n &&
                    n.original_img_url &&
                    null != n &&
                    n.original_img_height &&
                    null != n &&
                    n.original_img_width
                  )
                    return { url: n.original_img_url, height: n.original_img_height, width: n.original_img_width }
                })(t) ||
                bn.b
              )
            },
            [t],
          )
        },
        _n = n('TIdA'),
        vn = n('A91F'),
        kn = n('9Xij'),
        En = void 0 !== ln ? ln : (ln = n('fK4d')),
        Cn = function (e) {
          var t = pe()(En, e.community),
            n = hn(t),
            a = F.a.theme.aspectRatios.communityBanner
          return n && !Object(fn.a)(n)
            ? i.a.createElement(
                k.a,
                null,
                i.a.createElement(_n.a, {
                  accessibilityLabel: '',
                  aspectMode: vn.a.exact(a),
                  backgroundColor: F.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : i.a.createElement(kn.a, { ratio: a }, i.a.createElement(k.a, { style: Sn.placeholderImageContainer }))
        },
        Sn = F.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        Fn = i.a.memo(Cn),
        In = { context: 'CommunityBannerImageQuery' },
        wn = void 0 !== rn ? rn : (rn = n('vUUo')),
        Tn = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(wn, { communityId: t }, { fetchPolicy: 'store-and-network' })
          return i.a.createElement(Fn, { community: n.community })
        },
        Kn = function (e) {
          return i.a.createElement(De.a, { errorConfig: In }, i.a.createElement(Tn, { communityId: e.communityId }))
        },
        Mn = i.a.memo(Kn),
        Rn = n('K1iM'),
        Ln = n.n(Rn),
        xn = n('n4Eu'),
        On = { red: 0, green: 0, blue: 0 },
        An = '10px',
        jn = F.a.create(function (e) {
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
        Nn = function (e) {
          var t = e.children,
            a = e.community,
            l = pe()(void 0 !== on ? on : (on = n('OBBW')), a),
            r = Qe(l),
            o = hn(l).palette,
            c = []
          if (o) {
            var s,
              u = Ln()(o)
            try {
              for (u.s(); !(s = u.n()).done; ) {
                var m = s.value
                c.push({ percentage: m.percentage, rgb: { blue: m.rgb.blue, green: m.rgb.green, red: m.rgb.red } })
              }
            } catch (y) {
              u.e(y)
            } finally {
              u.f()
            }
          }
          var d = Object(be.a)('c9s_ui_colors_enabled_rweb')
          return i.a.createElement(
            k.a,
            null,
            i.a.createElement(k.a, { style: jn.descriptionContainer }, t),
            i.a.createElement(k.a, { style: [F.a.absoluteFill, jn.backgroundColorWhite] }),
            i.a.createElement(k.a, {
              style: [
                F.a.absoluteFill,
                jn.backgroundColor,
                (function (e, t) {
                  if (d) return ze.a.getCommunityGradientStyle(t, An)
                  var n = e && xn.a.get(e),
                    a = n ? (null == n ? void 0 : n.rgb) : On,
                    l = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    r = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(l, ' ')
                      .concat(An, ', ')
                      .concat(r, ' ')
                      .concat(An, ' 100%)'),
                  }
                })(c, r),
              ],
            }),
          )
        },
        Pn = { context: 'CommunityDescriptionContainerQuery' },
        Bn = void 0 !== cn ? cn : (cn = n('a/V2')),
        Hn = function (e) {
          var t = e.children,
            n = e.communityId,
            a = Object(tt.a)(Bn, { communityId: n }, { fetchPolicy: 'store-and-network' })
          return i.a.createElement(Nn, { community: a.community }, t)
        },
        Dn = function (e) {
          return i.a.createElement(
            De.a,
            { errorConfig: Pn },
            i.a.createElement(Hn, { communityId: e.communityId }, e.children),
          )
        },
        Un = i.a.memo(Dn),
        Vn = n('LgBi'),
        zn = n('CaKu'),
        qn = n('1YZw'),
        Qn = Object(u.a)().propsFromActions(function () {
          return { addToast: qn.b }
        }),
        Wn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [T.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              i.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      Wn.metadata = { width: 24, height: 24 }
      var Jn,
        Xn,
        Gn,
        Yn,
        Zn,
        $n,
        ea,
        ta = Wn,
        na = n('I/9y'),
        aa = n('pwey'),
        la = v.a.bec3b8f9,
        ra = { viewType: 'share_community' },
        ia = v.a.f88553c8,
        oa = { viewType: 'copy_link' },
        ca = { viewType: 'invite_members' },
        sa = v.a.b139b549,
        ua = v.a.e05c00b4,
        ma = i.a.createElement(ta, null),
        da = F.a.create(function (e) {
          return { shareButton: { marginRight: e.spaces.space8 } }
        }),
        ya = Qn(function (e) {
          var t = pe()(void 0 !== Jn ? Jn : (Jn = n('X/n0')), e.community),
            a = e.addToast,
            l = t.rest_id,
            r = t.role,
            o = Object(h.g)(r),
            c = i.a.useCallback(
              function (e) {
                zn.a.setString('https://twitter.com/i/communities/'.concat(l)), e(), a({ text: ia })
              },
              [a, l],
            ),
            s = i.a.useMemo(
              function () {
                return function (e) {
                  var t = []
                  return (
                    t.push({ behavioralEventContext: oa, text: ua, Icon: na.a, onClick: c }),
                    o &&
                      t.push({
                        behavioralEventContext: ca,
                        text: sa,
                        Icon: aa.a,
                        link: '/i/communities/'.concat(l, '/invite'),
                      }),
                    i.a.createElement(E.a, { items: t, onCloseRequested: e })
                  )
                }
              },
              [o, l, c],
            )
          return i.a.createElement(C.a, {
            accessibilityLabel: la,
            behavioralEventContext: ra,
            icon: ma,
            renderMenu: s,
            style: da.shareButton,
            type: 'onMediaOutlined',
          })
        }),
        pa = i.a.memo(ya),
        ga = { context: 'CommunityShareButtonContainerQuery' },
        fa = void 0 !== Xn ? Xn : (Xn = n('Rc1A')),
        ba = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(fa, { communityId: t })
          return i.a.createElement(pa, { community: n.community })
        },
        ha = function (e) {
          return i.a.createElement(De.a, { errorConfig: ga }, i.a.createElement(ba, { communityId: e.communityId }))
        },
        _a = i.a.memo(ha),
        va = ['loggedInUser'],
        ka = Object(u.a)()
          .propsFromState(function () {
            return { community: $.a, loggedInUser: te.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Z()(e, va)
            return l()({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: Ft.b,
              requestToJoin: ee.c.requestToJoin,
              leave: Ft.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        Ea = v.a.hb9400db,
        Ca = function (e) {
          var t = e.community,
            a = pe()(void 0 !== Gn ? Gn : (Gn = n('ldL/')), t),
            l = a.description,
            r = a.role,
            o = i.a.useState(!1),
            c = Ct()(o, 2),
            s = c[0],
            u = c[1],
            m = i.a.useState(!1),
            d = Ct()(m, 2),
            y = d[0],
            p = d[1],
            g = i.a.useCallback(
              function (e) {
                e.preventDefault(), e.stopPropagation(), u(!s)
              },
              [s],
            )
          return !l || Object(h.g)(r)
            ? null
            : i.a.createElement(
                k.a,
                { style: Sa.description },
                i.a.createElement(de.b, { color: 'white', getTextOverflow: p, numberOfLines: s ? void 0 : 2 }, l),
                !s && y ? i.a.createElement(de.b, { color: 'white', onPress: g, weight: 'bold' }, Ea) : null,
              )
        },
        Sa = F.a.create(function (e) {
          return { description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } }
        }),
        Fa = i.a.memo(Ca),
        Ia = { context: 'CommunityDescriptionToggleQuery' },
        wa = void 0 !== Yn ? Yn : (Yn = n('2fn4')),
        Ta = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(wa, { communityId: t })
          return i.a.createElement(Fa, { community: n.community })
        },
        Ka = function (e) {
          return i.a.createElement(De.a, { errorConfig: Ia }, i.a.createElement(Ta, { communityId: e.communityId }))
        },
        Ma = i.a.memo(Ka),
        Ra = n('MtXG'),
        La = v.a.d58baa7e,
        xa = function (e) {
          var t = e.community,
            a = pe()(void 0 !== Zn ? Zn : (Zn = n('WuQQ')), t).member_count,
            l = void 0 === a ? 0 : a,
            r = La(l)
          return i.a.createElement(
            Ra.a.Group,
            null,
            i.a.createElement(
              Ra.a,
              { onMedia: !0 },
              i.a.createElement(
                de.b,
                { color: 'white' },
                i.a.createElement(
                  v.a.I18NFormatMessage,
                  { $i18n: 'b38e130b' },
                  i.a.createElement(Ra.a.Value, null, v.a.ibd0106d({ formattedCount: r })),
                  i.a.createElement(Ra.a.Label, null, v.a.cface2d0({ count: l })),
                ),
              ),
            ),
          )
        },
        Oa = n('cm6r'),
        Aa = n('MAI/'),
        ja = n('I4+6'),
        Na = ja.a.generate({
          backgroundColor: F.a.theme.colors.transparent,
          color: F.a.theme.colors.white,
          customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
        }),
        Pa = F.a.create(function (e) {
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
        Ba = function (e) {
          var t = e.community,
            a = pe()(void 0 !== $n ? $n : ($n = n('Eh7u')), t),
            l = Object(be.a)('c9s_ui_colors_enabled_rweb'),
            r = a.members_facepile_results,
            o = a.rest_id,
            c = (function (e) {
              var t,
                n = [],
                a = Ln()(e)
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var l = t.value.result
                  if ('User' === (null == l ? void 0 : l.__typename)) {
                    var r,
                      i = null === (r = l.legacy) || void 0 === r ? void 0 : r.profile_image_url_https
                    i && n.push(i)
                  }
                }
              } catch (o) {
                a.e(o)
              } finally {
                a.f()
              }
              return n
            })(r),
            s = qe(a),
            u = l ? ze.a.getCommunityBackgroundColorName(s) : void 0
          return i.a.createElement(
            Oa.a,
            { interactiveStyles: Na, link: '/i/communities/'.concat(o, '/members'), style: Pa.membersContainer },
            c.length > 0
              ? i.a.createElement(Aa.a, {
                  borderColor: u,
                  style: Pa.rightSpace,
                  userAvatarSize: 'large',
                  userAvatarUrls: c,
                })
              : null,
            i.a.createElement(xa, { community: a }),
          )
        },
        Ha = { context: 'CommunityFacePileQuery' },
        Da = void 0 !== ea ? ea : (ea = n('ZYKh')),
        Ua = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(Da, { communityId: t })
          return i.a.createElement(Ba, { community: n.community })
        },
        Va = function (e) {
          return i.a.createElement(De.a, { errorConfig: Ha }, i.a.createElement(Ua, { communityId: e.communityId }))
        },
        za = n('k/OQ'),
        qa = v.a.a0e3ece4,
        Qa = v.a.ha8209bb,
        Wa = v.a.d601fc2f,
        Ja = v.a.b721eb37,
        Xa = { viewType: 'description' },
        Ga = { viewType: 'facepiles_with_count' },
        Ya = (function (e) {
          gt()(n, e)
          var t = bt()(n)
          function n() {
            var e
            st()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              _t()(yt()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              _t()(yt()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
              _t()(
                yt()(e),
                '_isTimelinesRankingEnabled',
                e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
              ),
              _t()(
                yt()(e),
                '_isCommunitiesSharingEnabled',
                e.context.featureSwitches.isTrue('c9s_share_community_enabled'),
              ),
              _t()(yt()(e), '_isRequestToJoinEnabled', e.context.featureSwitches.isTrue('c9s_request_to_join_enabled')),
              _t()(yt()(e), '_requestToJoin', function (t) {
                return (0, e.props.requestToJoin)(t).then(function () {})
              }),
              _t()(yt()(e), '_renderTabs', function () {
                var t = e.props.communityId,
                  n = [
                    { to: '/i/communities/'.concat(t), label: Qa, key: Qa },
                    { to: '/i/communities/'.concat(t, '/latest'), label: Wa, key: Wa },
                    { to: '/i/communities/'.concat(t, '/about'), label: Ja, key: Ja },
                  ]
                return i.a.createElement(za.a, {
                  accessibilityLabel: qa,
                  links: e._isTimelinesRankingEnabled
                    ? n
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== Wa
                        })
                      })(n),
                })
              }),
              e
            )
          }
          return (
            mt()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.community,
                    n = e.communityId,
                    a = e.createLocalApiErrorHandler,
                    l = e.isProtectedUser,
                    r = e.join,
                    c = e.leave
                  return t
                    ? i.a.createElement(
                        He.a,
                        { behavioralEventViewType: 'timeline' },
                        i.a.createElement(
                          k.a,
                          { style: Za.container },
                          i.a.createElement(
                            k.a,
                            null,
                            i.a.createElement(Mn, { communityId: n }),
                            i.a.createElement(
                              o.a,
                              { behavioralEventContext: Xa },
                              i.a.createElement(
                                Un,
                                { communityId: n },
                                i.a.createElement(
                                  de.b,
                                  { color: 'white', size: 'title2', style: Za.name, weight: 'bold' },
                                  t.name.trim(),
                                ),
                                i.a.createElement(Ma, { communityId: n }),
                                i.a.createElement(
                                  o.a,
                                  { behavioralEventContext: Ga },
                                  i.a.createElement(
                                    k.a,
                                    { style: Za.bottomContainer },
                                    i.a.createElement(Va, { communityId: n }),
                                    i.a.createElement(
                                      k.a,
                                      { style: Za.buttons },
                                      this._isCommunitiesSharingEnabled
                                        ? i.a.createElement(_a, { communityId: n })
                                        : i.a.createElement(Vn.a, {
                                            communityId: n,
                                            style: Za.inviteButton,
                                            type: 'onMediaOutlined',
                                          }),
                                      this._isParticipationEnabled
                                        ? i.a.createElement(pn, {
                                            community: t,
                                            createLocalApiErrorHandler: a,
                                            isProtectedUser: l,
                                            join: r,
                                            leave: c,
                                            requestToJoin: this._requestToJoin,
                                          })
                                        : null,
                                    ),
                                  ),
                                ),
                              ),
                            ),
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
        })(i.a.Component)
      _t()(Ya, 'contextType', s.a)
      var Za = F.a.create(function (e) {
          return {
            name: { flexDirection: 'column', justifyContent: 'left', marginBottom: e.spaces.space8 },
            container: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
            bottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
            buttons: { flexDirection: 'row', height: 'fit-content' },
            inviteButton: { marginRight: e.spaces.space8 },
          }
        }),
        $a = ka(Ya),
        el = n('hqKg'),
        tl = n('8Lfv'),
        nl = n('LI/a'),
        al = function (e, t) {
          return t.communityId
        },
        ll = function (e, t) {
          var n = ee.c.select(e, t.communityId)
          return Object(h.g)(null == n ? void 0 : n.role)
        },
        rl = Object(u.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: ll,
              rankedTweetsModule: Object(el.createSelector)(al, function (e) {
                return Object(nl.b)(e)
              }),
              tweetsModule: Object(el.createSelector)(al, function (e) {
                return Object(nl.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: tl.a,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        il = n('FIs5'),
        ol = n('EUHl'),
        cl = n('7BdX'),
        sl = v.a.c18e3a3e,
        ul = v.a.d68146c0,
        ml = v.a.h5245afa,
        dl = v.a.f05dbeff,
        yl = { page: 'community', section: 'home' },
        pl = { page: 'community', section: 'latest' },
        gl = { page: 'community', section: 'tweets' },
        fl = rl(function (e) {
          var t = i.a.useContext(s.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            l = e.isCommunityMember,
            r = e.rankedTweetsModule,
            o = e.tweetsModule,
            c = e.type === lr.Home ? { module: r, scribeNamespace: yl } : { module: o, scribeNamespace: pl },
            u = t ? c : { module: o, scribeNamespace: gl },
            m = u.module,
            d = u.scribeNamespace
          i.a.useEffect(
            function () {
              n(m).catch(a())
            },
            [n, a, l, m],
          )
          var y = i.a.useCallback(function () {
            return i.a.createElement(il.a, { buttonType: 'brandOutlined', header: sl, message: ul })
          }, [])
          return i.a.createElement(
            et.c,
            { namespace: d },
            i.a.createElement(
              He.a,
              { behavioralEventViewType: 'tweets' },
              i.a.createElement(Ue.a, {
                loadingAccessibilityLabel: dl,
                module: m,
                newTweetsPillMode: ol.a.CLIENT,
                prerollDisplayLocation: cl.c.OTHER,
                refreshControl: null,
                renderEmptyState: y,
                title: ml,
              }),
            ),
          )
        }),
        bl = n('mw9i'),
        hl =
          (n('MvUL'),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object(K.a)(
              'svg',
              l()(
                l()({}, e),
                {},
                {
                  accessibilityHidden: void 0 === e.accessibilityLabel,
                  style: [T.a.root, e.style],
                  viewBox: '0 0 24 24',
                },
              ),
              i.a.createElement(
                'g',
                null,
                i.a.createElement('path', {
                  d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
                }),
                i.a.createElement('path', {
                  d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
                }),
              ),
            )
          })
      hl.metadata = { width: 24, height: 24 }
      var _l,
        vl,
        kl = hl,
        El = n('wpLu'),
        Cl = v.a.bf359e0d,
        Sl = v.a.e8fcdd3a,
        Fl = v.a.b37d580e,
        Il = v.a.cafca4b2,
        wl = v.a.ea3b38fa,
        Tl = v.a.jd667130,
        Kl = v.a.ca7eeabf,
        Ml = v.a.acae4034,
        Rl = v.a.e2186ee2,
        Ll = v.a.j24c37b2,
        xl = function (e) {
          var t = pe()(void 0 !== _l ? _l : (_l = n('2rr8')), e.community),
            a = Object(sn.f)(),
            l = i.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(t.rest_id, '/'))
              },
              [a, t.rest_id],
            ),
            r = i.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: Ol.rulesContainer },
              t.rules.map(function (e) {
                return i.a.createElement(
                  de.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: Ol.rule },
                  e.name,
                )
              }),
            ),
            o = 'Public' === t.access,
            c = o ? wl : Fl,
            s = o ? Tl : Il
          return i.a.createElement(
            Dt.a,
            {
              actionLabel: Ll,
              graphicDisplayMode: 'none',
              headline: Cl,
              isFullHeightOnMobile: !0,
              onAction: l,
              subtext: Sl,
            },
            i.a.createElement(
              k.a,
              { style: Ol.infoItemsContainer },
              i.a.createElement(ve.a, {
                containerStyle: Ol.itemContainer,
                items: [
                  { label: c, description: s, decoration: i.a.createElement(kl, { style: Ol.decorationContainer }) },
                  { label: Kl, decoration: i.a.createElement(El.a, { style: Ol.decorationContainer }), description: r },
                  { label: Ml, description: Rl, decoration: i.a.createElement(R, { style: Ol.decorationContainer }) },
                ],
              }),
            ),
          )
        },
        Ol = F.a.create(function (e) {
          return {
            infoItemsContainer: { paddingBottom: e.spaces.space32 },
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
        Al = i.a.memo(xl),
        jl = { context: 'CommunityCreationSummaryQuery' },
        Nl = void 0 !== vl ? vl : (vl = n('EFld')),
        Pl = function (e) {
          var t = e.communityId,
            n = Object(tt.a)(Nl, { communityId: t }, { fetchPolicy: 'store-and-network' })
          return i.a.createElement(Al, { community: n.community })
        },
        Bl = function (e) {
          return i.a.createElement(De.a, { errorConfig: jl }, i.a.createElement(Pl, { communityId: e.communityId }))
        },
        Hl = i.a.memo(Bl),
        Dl = n('dwig'),
        Ul = n('0+qk'),
        Vl =
          (n('FtFR'),
          n('hBvt'),
          Object(u.a)()
            .propsFromState(function () {
              return { flags: ae.b }
            })
            .propsFromActions(function () {
              return { setFlag: ae.c }
            })),
        zl = n('hOZg'),
        ql = n('WtWS'),
        Ql = n('0ULw'),
        Wl = v.a.c66b37f9,
        Jl = v.a.g2768d0e,
        Xl = v.a.b192b58b,
        Gl = v.a.gd30278f,
        Yl = v.a.cbdddb09,
        Zl = v.a.h5890b1a,
        $l = [
          {
            flag: 'setup_clicked_rules',
            title: v.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: v.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: v.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: v.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(Gl, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        er = function (e) {
          var t = e.community.id_str,
            n = e.flags,
            a = e.setFlag,
            l = i.a.useContext(s.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            r = Object(sn.f)(),
            o = i.a.useCallback(
              function () {
                a(t, 'setup_show_checklist', !1)
              },
              [t, a],
            )
          if (!n.setup_show_checklist || !l) return null
          var c = function (e) {
              a(t, e.flag, !0).then(function () {
                r.push(e.link(t))
              })
            },
            u = function (e, t) {
              13 === t.keyCode && c(e)
            }
          return i.a.createElement(
            k.a,
            { style: tr.wrapper },
            i.a.createElement(
              k.a,
              { style: tr.header },
              i.a.createElement(de.b, { size: 'title3', weight: 'bold' }, Wl),
              i.a.createElement(C.a, {
                accessibilityLabel: Xl,
                icon: i.a.createElement(zl.a, { style: tr.close }),
                onClick: o,
                pullRight: !0,
                size: 'medium',
                style: tr.dismiss,
                type: 'brandText',
              }),
            ),
            i.a.createElement(de.b, { style: tr.subtext }, Jl),
            i.a.createElement(
              k.a,
              { accessibilityRole: 'list', style: tr.list },
              $l.map(function (e) {
                var t = Boolean(n[e.flag])
                return i.a.createElement(
                  k.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !t,
                    key: e.flag,
                    onClick: t ? void 0 : c.bind(null, e),
                    onKeyPress: t ? void 0 : u.bind(null, e),
                    style: [tr.entry, t ? tr.completedEntry : tr.uncompletedEntry],
                  },
                  i.a.createElement(de.b, { weight: 'bold' }, e.title),
                  t
                    ? i.a.createElement(ql.a, { accessibilityLabel: Yl, style: tr.iconCompleted })
                    : i.a.createElement(Ql.a, { accessibilityLabel: Zl, style: tr.iconUncompleted }),
                )
              }),
            ),
          )
        },
        tr = F.a.create(function (e) {
          return {
            wrapper: {
              padding: e.spaces.space32,
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.gray200,
              color: e.colors.text,
            },
            header: { display: 'flex', flexDirection: 'row', paddingBottom: e.spaces.space4, alignItems: 'start' },
            dismiss: { marginLeft: 'auto' },
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
        nr = Vl(er),
        ar = n('QRqA'),
        lr = Object.freeze({ Home: 'home', Latest: 'latest' }),
        rr = function (e) {
          var t = e.community,
            n = e.composeOptions,
            a = e.history,
            l = e.isAllowedToTweet,
            r = e.joinActionResultType,
            o = e.location,
            c = e.match,
            s = t.id_str,
            u = (null == t ? void 0 : t.role) === h.a.Admin && void 0 !== o.query.show_creation_summary,
            m = i.a.useCallback(function (e, t) {
              return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === t, theme: e.theme } }
            }, []),
            d = i.a.useMemo(
              function () {
                return l
                  ? i.a.createElement(Ul.a, {
                      getLocationState: function () {
                        return n
                      },
                      history: a,
                    })
                  : null
              },
              [l, a, n],
            )
          return i.a.createElement(
            Dl.a,
            { component: bl.a, fab: d },
            i.a.createElement(ar.a, m(t, r)),
            u && i.a.createElement(Hl, { communityId: s }),
            s ? i.a.createElement($a, { communityId: s, history: a, match: c }) : null,
            i.a.createElement(
              sn.d,
              null,
              i.a.createElement(
                sn.b,
                { exact: !0, path: '/i/communities/'.concat(s, '/') },
                i.a.createElement(nr, { community: t }),
                i.a.createElement(fl, { communityId: s, location: o, match: c, type: lr.Home }),
              ),
              i.a.createElement(
                sn.b,
                { path: '/i/communities/'.concat(s, '/latest') },
                i.a.createElement(nr, { community: t }),
                i.a.createElement(fl, { communityId: s, location: o, match: c, type: lr.Latest }),
              ),
              i.a.createElement(
                sn.b,
                { exact: !0, path: '/i/communities/'.concat(s, '/about') },
                i.a.createElement(ot, { communityId: s }),
              ),
            ),
          )
        },
        ir = n('VS6U'),
        or = n('Qwev'),
        cr = { type: 'serversideContextKey', serversideContextType: 'community' },
        sr = v.a.a7c2e06c,
        ur = v.a.j24c37b2,
        mr = v.a.a94092a1,
        dr = v.a.i1fda797,
        yr = function (e) {
          return { selectedCommunityId: e, defaultText: '' }
        },
        pr = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            s = e.fetchCommunityMemberships,
            u = e.fetchStatus,
            m = e.hasShownModEducation,
            d = e.history,
            y = e.isCommunityMember,
            p = e.joinActionResultType,
            g = e.location,
            b = e.match,
            _ = e.membershipsFetchStatus,
            v = e.screenName,
            k = e.setFlag,
            E = Object(be.a)('c9s_participation_enabled'),
            C = Object(be.a)('c9s_edit_moderators_enabled'),
            S = i.a.useCallback(
              function () {
                n && r(n).catch(a({})), _ === f.a.NONE && s().catch(a())
              },
              [n, _, r, s, a],
            )
          i.a.useEffect(
            function () {
              S()
            },
            [S],
          )
          var F = i.a.useCallback(
              function () {
                n && k(n, 'mod_education_flag', !0)
              },
              [n, k],
            ),
            I = i.a.useMemo(
              function () {
                return { clientEntity: l()(l()({}, cr), {}, { serversideContextId: n || '' }), viewType: 'community' }
              },
              [n],
            ),
            w = i.a.useMemo(
              function () {
                return yr(n)
              },
              [n],
            ),
            T = null == t ? void 0 : t.name,
            K = null == t ? void 0 : t.role,
            M = !!y && E,
            R = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
            L = C && K === h.a.Moderator && !m,
            x = i.a.useMemo(
              function () {
                return n && u === oe.a.LOADING
                  ? i.a.createElement(or.a, { style: gr.topMargin })
                  : n && null != t && t.name && u === oe.a.LOADED
                  ? i.a.createElement(rr, {
                      community: t,
                      communityId: n,
                      composeOptions: w,
                      history: d,
                      isAllowedToTweet: M,
                      joinActionResultType: p,
                      location: g,
                      match: b,
                    })
                  : i.a.createElement(ce.b, { history: d, location: g, match: b })
              },
              [n, u, t, w, d, M, p, g, b],
            )
          if (!n) return null
          var O = i.a.createElement(G, { canModerate: Object(h.c)(K), communityId: n, userRole: K })
          return i.a.createElement(
            o.a,
            { behavioralEventContext: I },
            i.a.createElement(ir.a, {
              backLocation: v && '/'.concat(v, '/communities'),
              composeOptions: w,
              documentTitle: T ? sr({ communityName: T }) : '',
              history: d,
              primaryContent: x,
              rightControl: O,
              sidebarContent: i.a.createElement(c.a, { communityId: n, withCommunityRules: R }),
              title: T || null,
              withTweetButton: M,
            }),
            L
              ? i.a.createElement(Dt.a, {
                  actionLabel: ur,
                  graphicDisplayMode: 'none',
                  headline: mr,
                  onAction: F,
                  onClose: F,
                  subtext: dr,
                  withCloseButton: !0,
                })
              : null,
          )
        },
        gr = F.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        fr = ie(pr)
      t.default = fr
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('ddV6'),
        l = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        o = n('v6aA'),
        c = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = u.a.e2df7cf1,
        y = u.a.be9bb312,
        p = u.a.e988475f,
        g = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityPurpose,
            r = e.onChange,
            s = i.a.useState(void 0),
            u = l()(s, 2),
            g = u[0],
            f = u[1],
            b = i.a.useState(!1),
            h = l()(b, 2),
            _ = h[0],
            v = h[1],
            k = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            E = i.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.h)(t, 3, k)
                n && f(p({ minCharacterCount: 3, maxCharacterCount: k })), v(n), r(t, n)
              },
              [k, f, r],
            )
          return i.a.createElement(c.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: g,
            helperText: y,
            invalid: _,
            label: d,
            multiline: !0,
            name: 'typedCommunityPurpose',
            numberOfLines: 3,
            onChange: E,
            spellCheck: 'false',
            validLength: k,
            value: a,
          })
        }
    },
    U3Z9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateCommunityModal', function () {
          return A
        })
      var a = n('yiKp'),
        l = n.n(a),
        r = n('ddV6'),
        i = n.n(r),
        o = (n('KqXw'), n('MvUL'), n('ERkP')),
        c = n.n(o),
        s = n('+Kfv'),
        u = n('ROT1'),
        m = n('U0Qk'),
        d = n('eSoz'),
        y = n('RqPI'),
        p = n('rxPX'),
        g = Object(p.a)()
          .propsFromState(function () {
            return { communitiesActions: y.f }
          })
          .propsFromActions(function () {
            return { createCommunity: d.b }
          }),
        f = n('jHSc'),
        b = n('3XMw'),
        h = n.n(b),
        _ = n('0weh'),
        v = n('5FtR'),
        k = n('s8G+'),
        E = n('MWbm'),
        C = n('/yvb'),
        S = n('4zmP'),
        F = n('t62R'),
        I = n('rHpw'),
        w = n('I/KZ'),
        T = h.a.i6e7e298,
        K = h.a.a226497c,
        M = h.a.c9d56b71,
        R = h.a.fc2a5c92,
        L = h.a.c1ad5a11,
        x = h.a.f713fbd1,
        O = { viewType: 'community' },
        A = c.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            a = e.history,
            r = Object(k.a)('c9s_community_creation_form_membership_type_enabled'),
            o = c.a.useState(!0),
            d = i()(o, 2),
            y = d[0],
            p = d[1],
            g = c.a.useState(!1),
            b = i()(g, 2),
            h = b[0],
            I = b[1],
            A = y || h,
            N = c.a.useState(''),
            P = i()(N, 2),
            B = P[0],
            H = P[1],
            D = c.a.useState(''),
            U = i()(D, 2),
            V = U[0],
            z = U[1],
            q = c.a.useState(null),
            Q = i()(q, 2),
            W = Q[0],
            J = Q[1],
            X = c.a.useCallback(function (e, t) {
              H(e), p(t)
            }, []),
            G = c.a.useCallback(function (e, t) {
              z(e), 0 === e.length ? I(!1) : I(t)
            }, []),
            Y = Object(w.e)(),
            Z = i()(Y, 2),
            $ = Z[0],
            ee = Z[1],
            te = c.a.useCallback(
              function () {
                return r ? l()({ description: V }, Object(w.c)($)) : { description: V }
              },
              [V, r, $],
            ),
            ne = c.a.useCallback(
              function () {
                J(null),
                  n(B, te())
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && a.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && J(e)
                    })
                    .catch(function (e) {
                      J({ error: 'GraphQL error', reason: e })
                    })
              },
              [B, n, te, a],
            )
          if (null == t || !t.create) return c.a.createElement(v.a, { to: '/home' })
          var ae = c.a.createElement(C.a, { disabled: A, onClick: ne, size: 'small', type: 'brandFilled' }, T),
            le = W
              ? c.a.createElement(
                  E.a,
                  { style: j.error },
                  c.a.createElement(S.a, { Icon: _.a, headline: R, text: L, type: 'danger' }),
                )
              : void 0
          return c.a.createElement(
            s.a,
            { behavioralEventContext: O },
            c.a.createElement(
              f.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: j.root,
                history: a,
                rightControl: ae,
                title: K,
              },
              c.a.createElement(
                c.a.Fragment,
                null,
                le,
                c.a.createElement(F.b, { color: 'gray700', style: j.text }, M),
                c.a.createElement(u.a, { autoFocus: !0, communityName: B, onChange: X }),
                c.a.createElement(m.a, { communityPurpose: V, onChange: G }),
                r
                  ? c.a.createElement(
                      c.a.Fragment,
                      null,
                      c.a.createElement(F.b, { size: 'headline2', style: j.membership }, x),
                      c.a.createElement(w.d, { hideInvitePolicy: !0, setters: ee, state: $ }),
                    )
                  : null,
              ),
            ),
          )
        }),
        j = I.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
            membership: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 },
          }
        }),
        N = g(A)
      t.default = N
    },
    UZ0O: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var a = n('KEM+'),
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
        o = n('ddV6'),
        c = n.n(o),
        s = n('ERkP'),
        u = n.n(s),
        m = n('v6aA'),
        d = n('rHpw'),
        y = n('xvzJ'),
        p = (n('2G9S'), n('CxAY')),
        g = n('rxPX'),
        f = function (e, t) {
          return t.communityId && t.userId ? p.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        }
      var b = Object(g.a)().propsFromState(function () {
          return { userCommunityRoleRelationship: f }
        })(function (e) {
          var t = e.communityId,
            n = e.onCommunityRoleChange,
            a = e.userCommunityRoleRelationship,
            l = e.userId
          if (
            (u.a.useEffect(
              function () {
                a && n(l, a)
              },
              [a, l, n],
            ),
            !a)
          )
            return null
          var r = a.role,
            i = a.user,
            o = i.id,
            c = i.screen_name
          return u.a.createElement(y.a, { communityId: t, communityRole: r, recordId: o, screenName: c, userId: l })
        }),
        h = n('4e/K'),
        _ = n('Ig1G'),
        v = n('GZwR'),
        k = [v.a.CommunityMembers]
      function E(e) {
        var t = u.a.useContext(m.a).featureSwitches.isTrue('c9s_members_list_search_enabled'),
          n = e.community,
          a = e.communityId,
          r = e.onIsSearchingChange,
          o = (null == n ? void 0 : n.role) === _.a.Admin,
          s = u.a.useState(!1),
          d = c()(s, 2),
          y = d[0],
          p = d[1],
          g = u.a.useState(''),
          f = c()(g, 2),
          E = f[0],
          S = f[1],
          F = u.a.useState({}),
          I = c()(F, 2),
          w = I[0],
          T = I[1],
          K = u.a.useCallback(
            function (e, t) {
              T(function (n) {
                return i()(i()({}, n), {}, l()({}, e, t))
              })
            },
            [T],
          ),
          M = u.a.useCallback(
            function () {
              p(!0), r(!0)
            },
            [r],
          ),
          R = u.a.useCallback(
            function (e) {
              S(e)
              var t = !!e
              r(t), p(t)
            },
            [r],
          ),
          L = u.a.useCallback(
            function () {
              E || (r(!1), p(!1))
            },
            [r, E],
          )
        if (!a) return null
        return t && o
          ? u.a.createElement(h.default, {
              alwaysOpen: y,
              communityId: a,
              filter: k,
              getUserDisplayNameLabel: function (e) {
                if ('user' === e.type) {
                  var t = e.data.id_str,
                    n = w[t]
                  if (n) return Object(_.d)(n.role)
                }
              },
              inputStyle: C.textInput,
              isModal: !0,
              onDismiss: L,
              onFocus: M,
              onQueryChange: R,
              placeholder: 'Search for members',
              renderUserDecoration: function (e) {
                var t = e.userId
                return u.a.createElement(b, { communityId: a, onCommunityRoleChange: K, userId: t })
              },
              rounded: !0,
              source: v.d.CommunityMemberSearch,
              style: C.input,
            })
          : null
      }
      var C = d.a.create(function (e) {
        return {
          input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
          textInput: { marginBottom: e.spaces.space8 },
        }
      })
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
    'X/n0': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityShareButton_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
        ],
        type: 'Community',
        abstractKey: null,
        hash: '37cc56f41a8f3f8d99f58a4ba79f83e9',
      }
      t.default = a
    },
    ZYKh: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o,
        c,
        s,
        u,
        m,
        d,
        y,
        p,
        g,
        f = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityFacePileQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'member_count', storageKey: null },
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
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
                          (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                          i,
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
                                              (g = {
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
                                                      i,
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
                                                          r,
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
                                            selections: [y, g],
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
      ;(f.hash = 'e6fa6a6403decebf26b0d7a5b8332948'), (t.default = f)
    },
    'a/V2': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityDescriptionContainerQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityDescriptionContainer_community' }],
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
            name: 'CommunityDescriptionContainerQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'custom_banner_media',
                    plural: !1,
                    selections: (i = [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'media_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'MediaColorInfo',
                                kind: 'LinkedField',
                                name: 'color_info',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'MediaColorPaletteItem',
                                    kind: 'LinkedField',
                                    name: 'palette',
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'MediaColor',
                                        kind: 'LinkedField',
                                        name: 'rgb',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'red',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'green',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'blue',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'percentage',
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
                                kind: 'ScalarField',
                                name: 'original_img_url',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'original_img_width',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'original_img_height',
                                storageKey: null,
                              },
                            ],
                            type: 'ApiImage',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ]),
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'default_banner_media',
                    plural: !1,
                    selections: i,
                    storageKey: null,
                  },
                  r,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'IcU6hB6weFIQgg-cNrX1tw',
            metadata: {},
            name: 'CommunityDescriptionContainerQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '4eb6bb323cb9d6961883ce5100bc85d6'), (t.default = o)
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        l = n.n(a),
        r = n('m3Bd'),
        i = n.n(r),
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
        g = function (e, t) {
          var n = t.tweetId,
            a = n && u.a.select(e, n)
          return a ? Object(m.g)(e, a) : void 0
        },
        f = Object(d.a)()
          .propsFromState(function () {
            return { community: g, hydratedTweet: u.a.createHydratedTweetSelector(p) }
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
        _ = n('x5Pi'),
        v = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = f(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            r = e.hydratedTweet,
            o = (e.tweetId, i()(e, v)),
            u = c.a.useContext(s.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            y = null == r ? void 0 : r.community_id_str
          c.a.useEffect(
            function () {
              y && Object(b.a)(t) && a(y).catch(n())
            },
            [t, y, n, a],
          )
          var p = m.isTrue('responsive_web_alt_text_badge_enabled'),
            g = r && Object(_.f)(r, d, t),
            f = g && Object(_.e)(g),
            k = m.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            h.a,
            l()({}, o, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: p,
              socialContextProps: f,
              tweet: r,
              withReactions: k,
            }),
          )
        })
      t.a = k
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        l = n('23An'),
        r = n('Ud88'),
        i = n('aQQo'),
        o = i.loadQuery,
        c = i.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        m = s.useEffect,
        d = s.useRef,
        y = s.useState,
        p = n('K1lQ').getRequest,
        g = { kind: 'NullQueryReference' }
      function f(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : g,
          i = r()
        c()
        var s = l(),
          p = d(new Set([n])),
          b = y(function () {
            return n
          }),
          h = b[0],
          _ = b[1],
          v = y(function () {
            return n
          }),
          k = v[0],
          E = v[1]
        n !== k && (p.current.add(n), E(n), _(n))
        var C = u(
            function () {
              s.current && (p.current.add(g), _(g))
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
                var l,
                  r = o(null !== (l = null == n ? void 0 : n.__environment) && void 0 !== l ? l : i, e, t, a)
                p.current.add(r), _(r)
              }
            },
            [i, e, _, s],
          ),
          F = d(!1)
        return (
          m(function () {
            return function () {
              F.current = !0
            }
          }, []),
          m(
            function () {
              if (!0 === F.current)
                return (
                  (F.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    S(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var t = p.current
              if (s.current) {
                var n,
                  l = (0, a.default)(t)
                try {
                  for (l.s(); !(n = l.n()).done; ) {
                    var r = n.value
                    if (r === h) break
                    t.delete(r),
                      'NullQueryReference' !== r.kind &&
                        (f(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (i) {
                  l.e(i)
                } finally {
                  l.f()
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
                    var l = t.value
                    'NullQueryReference' !== l.kind &&
                      (f(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery())
                  }
                } catch (r) {
                  n.e(r)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, S, C]
        )
      }
    },
    cI4y: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
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
                args: (l = [
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
                    args: [(r = { kind: 'Variable', name: 'count', variableName: 'count' })],
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
                          (i = {
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [r, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
                          i,
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
          return K
        })
      var a = n('VrFO'),
        l = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        y = n('KEM+'),
        p = n.n(y),
        g = (n('2G9S'), n('ERkP')),
        f = n.n(g),
        b = n('es0u'),
        h = n('WpDa'),
        _ = n('ZNT5'),
        v = Object(_.a)({
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
        k = n('OUEC'),
        E = n('3XMw'),
        C = n.n(E),
        S = n('oQhu'),
        F = n('yoO3'),
        I = n('fTQJ'),
        w = n('VS6U'),
        T = C.a.cb6adb1f,
        K = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              p()(c()(e), '_renderPrimaryContent', function () {
                var t = e._getModule()
                return f.a.createElement(I.a, { entryConfiguration: k.a, module: t, refreshControl: null, title: T })
              }),
              p()(
                c()(e),
                '_getModule',
                Object(S.a)(function () {
                  return v
                }),
              ),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return f.a.createElement(
                    F.a,
                    { behavioralEventViewType: 'discover' },
                    f.a.createElement(w.a, {
                      backLocation: '/',
                      history: e,
                      primaryContent: this._renderPrimaryContent(),
                      sidebarContent: f.a.createElement(b.a, null),
                      title: T,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      t.default = K
    },
    dMLx: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'useCommunityBannerImage_community',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'ApiMedia',
              kind: 'LinkedField',
              name: 'custom_banner_media',
              plural: !1,
              selections: (a = [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'media_info',
                  plural: !1,
                  selections: [
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'MediaColorInfo',
                          kind: 'LinkedField',
                          name: 'color_info',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'MediaColorPaletteItem',
                              kind: 'LinkedField',
                              name: 'palette',
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'MediaColor',
                                  kind: 'LinkedField',
                                  name: 'rgb',
                                  plural: !1,
                                  selections: [
                                    { alias: null, args: null, kind: 'ScalarField', name: 'red', storageKey: null },
                                    { alias: null, args: null, kind: 'ScalarField', name: 'green', storageKey: null },
                                    { alias: null, args: null, kind: 'ScalarField', name: 'blue', storageKey: null },
                                  ],
                                  storageKey: null,
                                },
                                { alias: null, args: null, kind: 'ScalarField', name: 'percentage', storageKey: null },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_url', storageKey: null },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_width', storageKey: null },
                        { alias: null, args: null, kind: 'ScalarField', name: 'original_img_height', storageKey: null },
                      ],
                      type: 'ApiImage',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ]),
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'ApiMedia',
              kind: 'LinkedField',
              name: 'default_banner_media',
              plural: !1,
              selections: a,
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(l.hash = '66a8dff93611f1369bc53655a9aacb32'), (t.default = l)
    },
    fK4d: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityBannerImage_community',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'useCommunityBannerImage_community' }],
        type: 'Community',
        abstractKey: null,
        hash: 'ac657dadcf91c9440fdfcd1862830fd1',
      }
      t.default = a
    },
    fS8x: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        b = n('/NU0'),
        h = n('rxPX'),
        _ = n('AspN'),
        v = function (e, t) {
          return t.media ? t.media : Object(b.a)(t.mediaId) ? Object(_.k)(e, t.mediaId)[0] : void 0
        },
        k = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        E = Object(h.a)()
          .propsFromState(function () {
            return { media: v, mediaId: k }
          })
          .propsFromActions(function () {
            return { processMedia: _.f, updateMediaUpload: _.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        C = n('jHSc'),
        S = n('3XMw'),
        F = n.n(S),
        I = n('EeFI'),
        w = 'applyButton',
        T = n('/yvb'),
        K = n('rHpw'),
        M = F.a.gd80afba,
        R = F.a.a753a87f,
        L = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              f()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              f()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return l.a.createElement(
                  T.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: w, type: 'primaryFilled' },
                  R,
                )
              }),
              f()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              f()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  t = a._cropper.current
                if (t) {
                  var n = a.props,
                    l = n.analytics,
                    r = n.media,
                    i = n.mediaId,
                    o = n.onDone,
                    c = n.processMedia,
                    s = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    m = (r || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(b.a)(i) &&
                    (e
                      ? (e(u), o())
                      : (s({ id: i, cropData: d ? void 0 : u }),
                        c(i).then(function () {
                          a.setState({ isProcessing: !1 }), l.scribe({ action: 'done' }), o()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = l.a.createRef()),
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
                    r = e.withAspectRatioOptions,
                    i = e.withZoomControl,
                    o = this._getMedia()
                  return l.a.createElement(
                    C.b,
                    {
                      backButtonType: 'back',
                      containerStyle: x.root,
                      documentTitle: a || M,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || M,
                    },
                    l.a.createElement(I.a, {
                      defaultAspectRatio: t,
                      media: o,
                      ref: this._cropper,
                      withAspectRatioOptions: r,
                      withZoomControl: i,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(l.a.Component),
        x = K.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        O = E(L),
        A = n('X8FW'),
        j = K.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return l.a.createElement(
          A.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: j.modal },
          l.a.createElement(O, e),
        )
      }
    },
    'gAl+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o,
        c,
        s,
        u,
        m = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'MemberRequests_Query',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  r,
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'join_requests_result',
                    plural: !1,
                    selections: [
                      i,
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
                                  { alias: null, args: null, kind: 'ScalarField', name: 'state', storageKey: null },
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
                                              i,
                                              {
                                                kind: 'InlineFragment',
                                                selections: [
                                                  (s = {
                                                    alias: 'id_str',
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'rest_id',
                                                    storageKey: null,
                                                  }),
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
                                                      r,
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
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'Community',
                                        kind: 'LinkedField',
                                        name: 'community',
                                        plural: !1,
                                        selections: [s, c],
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
                                        selections: (u = [i]),
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: 'LinkedField',
                                        name: 'join_request_deny_action_result',
                                        plural: !1,
                                        selections: u,
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
            id: '5xZZjyUMx-lzjmohhjoOyg',
            metadata: {
              sliceInfoPath: ['community', 'join_requests_result', 'pending_join_requests_slice', 'slice_info'],
            },
            name: 'MemberRequests_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(m.hash = '39d8f08c35ba33dc591ead5e6c563c9c'), (t.default = m)
    },
    gDCe: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA'),
        i = n('Ig1G'),
        o = n('3XMw'),
        c = n.n(o),
        s = n('Nh1N'),
        u = n('MWbm'),
        m = n('4zmP'),
        d = n('rHpw'),
        y = c.a.b6e22e15,
        p = c.a.d17c10d9,
        g = c.a.a1ecaf33,
        f = l.a.memo(function (e) {
          var t,
            n = e.community,
            a = l.a.useContext(r.a).featureSwitches.isTrue('c9s_edit_moderators_enabled')
          return !n || n.role !== i.a.Admin || a
            ? null
            : l.a.createElement(
                u.a,
                { style: b.info },
                l.a.createElement(m.a, {
                  Icon: s.a,
                  action: {
                    label: g,
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
      t.a = f
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      n('FtFR')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('wtru')
      function i(e) {
        var t = Object(r.b)()
        return [
          !!t && !t.flags[e],
          l.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
    },
    jC8Z: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o,
        c,
        s = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'AboutQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { args: null, kind: 'FragmentSpread', name: 'CommunityInfo_community' },
                  { args: null, kind: 'FragmentSpread', name: 'CommunityRules_community' },
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
            name: 'AboutQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }),
                  { alias: null, args: null, kind: 'ScalarField', name: 'role', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'UserResults',
                    kind: 'LinkedField',
                    name: 'creator_results',
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
                          (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                          {
                            kind: 'InlineFragment',
                            selections: [
                              (o = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                                    name: 'screen_name',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
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
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'membership_settings',
                    plural: !1,
                    selections: [i],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
                  (c = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      c,
                      r,
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      o,
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'default_theme', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'custom_theme', storageKey: null },
                  o,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: '1F2pQyQp1ASlzFmWIUKbFA',
            metadata: {},
            name: 'AboutQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(s.hash = '765e8a2b911d9e61edc36a015f192e8c'), (t.default = s)
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        l = n.n(a),
        r = n('m3Bd'),
        i = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        s = n('t62R'),
        u = n('I4+6'),
        m = n('cm6r'),
        d = n('rHpw'),
        y = n('MWbm'),
        p = ['align', 'color', 'label'],
        g = d.a.create(function (e) {
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
          r = e.label,
          o = i()(e, p),
          f = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return c.a.createElement(
          y.a,
          { style: g.container },
          c.a.createElement(
            m.a,
            l()({}, o, { interactiveStyles: f, style: g.root }),
            c.a.createElement(s.b, { align: n, color: a }, r),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return r
        })
      var a = n('0vv5'),
        l = 500,
        r = {
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
        return H
      })
      var a,
        l,
        r,
        i = n('ERkP'),
        o = n.n(i),
        c = n('v6aA'),
        s = n('WpDa'),
        u = n('ZNT5'),
        m = n('Ig1G'),
        d = n('FIs5'),
        y = n('3XMw'),
        p = n.n(y),
        g = (n('enFi'), n('TEoO')),
        f = n('Fr3L'),
        b = (n('ho0z'), n('xvzJ')),
        h = n('IMA+'),
        _ = n('jAXQ'),
        v = n.n(_),
        k = function (e) {
          var t = e.communityId,
            l = e.userResult,
            r = v()(void 0 !== a ? a : (a = n('tgdH')), l).result
          if (!r || 'User' !== r.__typename || !r.legacy) return null
          var i = r.community_role,
            c = r.id,
            s = r.legacy,
            u = s.id_str,
            d = s.name,
            y = void 0 === d ? '' : d,
            p = s.profile_image_url_https,
            g = s.protected,
            f = s.screen_name,
            _ = s.verified
          if (!f || !p || !y) return null
          var k = Object(m.d)(i),
            E = o.a.createElement(b.a, { communityId: t, communityRole: i, recordId: c, screenName: f, userId: u })
          return o.a.createElement(h.a, {
            avatarUri: p,
            decoration: E,
            displayMode: 'UserCompact',
            displayNameLabel: k,
            isProtected: g,
            isVerified: _,
            name: y,
            screenName: f,
            userId: u,
          })
        },
        E = n('DQzJ'),
        C = { context: 'members' },
        S = void 0 !== l ? l : (l = n('cI4y')),
        F = function (e) {
          return e.__id
        },
        I = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(E.a)(S, { communityId: t }),
            l = a.data,
            r = a.fetchNext,
            i = l.community.members_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(t),
            identityFunction: F,
            items: i,
            noItemsRenderer: n,
            onNearEnd: r,
            renderer: function (e) {
              return o.a.createElement(k, { communityId: t, userResult: e })
            },
          })
        },
        w = function (e) {
          return o.a.createElement(f.a, { errorConfig: C }, o.a.createElement(I, e))
        },
        T = n('oQhu'),
        K = { context: 'members' },
        M = void 0 !== r ? r : (r = n('w9f9')),
        R = function (e) {
          return e.__id
        },
        L = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(E.a)(M, { communityId: t }),
            l = a.data,
            r = a.fetchNext,
            i = l.community.moderators_slice.items_results
          return o.a.createElement(g.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(t),
            identityFunction: R,
            items: i,
            noItemsRenderer: n,
            onNearEnd: r,
            renderer: function (e) {
              return o.a.createElement(k, { communityId: t, userResult: e })
            },
          })
        },
        x = function (e) {
          return o.a.createElement(f.a, { errorConfig: K }, o.a.createElement(L, e))
        },
        O = n('fTQJ'),
        A = p.a.cdd87523,
        j = p.a.cca5191f,
        N = p.a.e442bbb4,
        P = p.a.e9488b0d,
        B = p.a.j43fea20,
        H = { Moderators: 'Moderators', Members: 'Members' },
        D = Object(T.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
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
              formatResponse: s.a,
            })
          })(e)
        }),
        U = Object(T.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
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
              formatResponse: s.a,
            })
          })(e)
        }),
        V = function () {
          return o.a.createElement(d.a, { header: A, message: j })
        }
      t.b = function (e) {
        var t = o.a.useContext(c.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          n = e.communityId,
          a = e.mode,
          l = e.userRole,
          r = a === H.Moderators
        if (t && l === m.a.Admin)
          return r
            ? o.a.createElement(x, { communityId: n, renderEmptyState: V })
            : o.a.createElement(w, { communityId: n, renderEmptyState: V })
        var i = r ? U(n) : D(n),
          s = r ? P : B
        return o.a.createElement(O.a, { loadingAccessibilityLabel: s, module: i, renderEmptyState: V, title: N })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return me
        })
      n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA'),
        i = n('Ig1G'),
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
        g = function (e, t) {
          return Object(m.c)(e, t.communityId)
        },
        f = Object(s.a)()
          .propsFromState(function () {
            return { canReviewMemberRequests: y, count: d, joinRequestCount: p, moderationFetchStatus: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              updateModeratorRole: c.c.updateRole,
              fetchCommunityModerationData: m.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        b = n('kGix'),
        h = n('3XMw'),
        _ = n.n(h),
        v = n('KQzH'),
        k = n('yoO3'),
        E = n('mWs5'),
        C = n('MWbm'),
        S = n('rHpw'),
        F = n('Znyr'),
        I = n('6vad'),
        w = n('csss'),
        T = n('OOKO'),
        K = n('zIWA'),
        M = n('yiKp'),
        R = n.n(M),
        L = n('Lsrn'),
        x = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
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
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var A = O,
        j = n('M2x3'),
        N = n('SNyS'),
        P = n('S+H3'),
        B = n('PU7B'),
        H = _.a.dce5e1b3,
        D = _.a.c5d8c93d,
        U = _.a.c8c7f9fc,
        V = _.a.c045c7b6,
        z = _.a.a87df2ee,
        q = _.a.dc6ce7b4,
        Q = _.a.gfca5254,
        W = _.a.bb081ea1,
        J = _.a.h6beb5fa,
        X = _.a.e3f04700,
        G = _.a.efc26607,
        Y = _.a.gfccba44,
        Z = _.a.adfcc3cd,
        $ = _.a.d0330d9c,
        ee = _.a.fd67f7c8,
        te = _.a.gc00d212,
        ne = _.a.a997eca0,
        ae = { label: _.a.c6ea29a1, header: _.a.a6e13fac, text: _.a.e538848b, confirmButtonLabel: _.a.j49e6aa2 },
        le = S.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        re = l.a.createElement(K.a, { style: le.thumbnail }),
        ie = l.a.createElement(A, { style: le.thumbnail }),
        oe = l.a.createElement(j.a, { style: le.thumbnail }),
        ce = l.a.createElement(N.a, { style: le.thumbnail }),
        se = l.a.createElement(P.a, { style: le.thumbnail }),
        ue = l.a.createElement(B.a, { style: le.thumbnail }),
        me = function (e) {
          var t = l.a.useContext(r.a),
            n = t.featureSwitches,
            a = t.loggedInUserId,
            c = e.canReviewMemberRequests,
            s = e.community,
            u = e.communityId,
            m = e.count,
            d = e.createLocalApiErrorHandler,
            y = e.fetchCommunityModerationData,
            p = e.history,
            g = e.joinRequestCount,
            f = e.match,
            h = e.moderationFetchStatus,
            _ = e.updateModeratorRole,
            S = d(),
            K = n.isTrue('c9s_moderation_enabled'),
            M = n.isTrue('c9s_rule_management_enabled'),
            R = n.isTrue('c9s_request_to_join_enabled'),
            L = n.isTrue('c9s_edit_moderators_enabled')
          l.a.useEffect(
            function () {
              h === b.a.NONE && K && y(u).catch(S)
            },
            [S, u, y, h, K],
          )
          var x = l.a.useCallback(
              function () {
                return K && m > 0
                  ? l.a.createElement(F.a, {
                      count: m,
                      standalone: !0,
                      truncatedCountFormatter: J,
                      unreadCountLabel: X,
                      withBorder: !1,
                    })
                  : null
              },
              [m, K],
            ),
            O = l.a.useCallback(
              function () {
                return R && g > 0
                  ? l.a.createElement(F.a, {
                      count: g,
                      standalone: !0,
                      truncatedCountFormatter: J,
                      unreadCountLabel: X,
                      withBorder: !1,
                    })
                  : null
              },
              [g, R],
            ),
            A = s.role,
            j = A === i.a.Admin ? H : D,
            N = A === i.a.Admin ? Z : $,
            P = !f.isExact
          return l.a.createElement(
            k.a,
            { locationKey: 'communitySettingsRoot' },
            l.a.createElement(
              E.a,
              { communityId: u, screenType: 'secondaryRoot', title: j, withDetailOpen: P },
              l.a.createElement(
                C.a,
                null,
                K
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(I.b, { text: U }),
                      l.a.createElement(v.a, {
                        label: V,
                        link: '/i/communities/'.concat(u, '/moderation/reported_tweets'),
                        renderRightContent: x,
                        thumbnail: re,
                      }),
                    )
                  : null,
                R && c
                  ? l.a.createElement(v.a, {
                      label: Y,
                      link: '/i/communities/'.concat(u, '/moderation/member_requests'),
                      renderRightContent: O,
                      thumbnail: ie,
                    })
                  : null,
                l.a.createElement(I.b, { text: z }),
                l.a.createElement(v.a, {
                  description: G({ memberCount: s.member_count }),
                  label: q,
                  link: '/i/communities/'.concat(u, '/tools/members'),
                  thumbnail: se,
                }),
                M
                  ? l.a.createElement(v.a, {
                      description: N,
                      label: Q,
                      link: '/i/communities/'.concat(u, '/tools/rules'),
                      thumbnail: ue,
                    })
                  : null,
                A === i.a.Admin
                  ? l.a.createElement(v.a, {
                      description: ee,
                      label: W,
                      link: '/i/communities/'.concat(u, '/tools/settings'),
                      thumbnail: oe,
                    })
                  : null,
                l.a.createElement(w.a, {
                  description: ne,
                  label: te,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: ce,
                }),
                A === i.a.Moderator && L
                  ? l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(T.a, { spacing: 'space1' }),
                      l.a.createElement(o.a, {
                        confirmationSheetConfirmButtonLabel: ae.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: ae.header,
                        confirmationSheetText: ae.text,
                        label: ae.label,
                        onConfirmationSheetConfirm: function () {
                          a &&
                            _(u, { userId: a, role: i.a.Member }).then(function () {
                              p.push('i/communities/'.concat(u))
                            })
                        },
                        withBottomBorder: !1,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        de = f(me)
      t.default = de
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
          return Qt
        })
      var a,
        l,
        r,
        i,
        o,
        c,
        s = n('97Jx'),
        u = n.n(s),
        m = n('m3Bd'),
        d = n.n(m),
        y = (n('KqXw'), n('WNMA'), n('ERkP')),
        p = n.n(y),
        g = n('v6aA'),
        f = n('+Kfv'),
        b = n('Ig1G'),
        h = n('1Idg'),
        _ = n('eSoz'),
        v = n('rxPX'),
        k = n('0KEI'),
        E = Object(v.a)()
          .propsFromState(function () {
            return { community: h.a, fetchStatus: h.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: _.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        C = n('G1WX'),
        S = (n('ho0z'), n('es0u')),
        F = n('3XMw'),
        I = n.n(F),
        w = n('VTxf'),
        T = n('yoO3'),
        K = n('Fr3L'),
        M = n('FIs5'),
        R = n('TEoO'),
        L = (n('1t7P'), n('jQ/y'), n('ddV6')),
        x = n.n(L),
        O = n('1YZw'),
        A = n('uDfI'),
        j = n('MWbm'),
        N = n('/yvb'),
        P = n('rHpw'),
        B = (n('enFi'), n('jAXQ')),
        H = n.n(B),
        D = (n('7x/C'), n('JtPf'), n('849X'), n('TJCb'), n('9SqB')),
        U = n.n(D),
        V = void 0 !== a ? a : (a = n('Dm5+')),
        z = void 0 !== l ? l : (l = n('C2fM')),
        q = I.a.i22835dd,
        Q = I.a.cb59a0fd,
        W = I.a.ic7db4ea,
        J = void 0 !== r ? r : (r = n('PMbW')),
        X = function (e) {
          var t = e.communityId,
            n = e.communityJoinRequestActions,
            a = e.userId,
            l = H()(J, n),
            r = l.join_request_approve_action_result,
            i = l.join_request_deny_action_result,
            o = (function () {
              var e = U()(V),
                t = x()(e, 2),
                n = t[0],
                a = t[1]
              return [
                p.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: l },
                            onCompleted: function (t) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [n, a],
                ),
                a,
              ]
            })(),
            c = x()(o, 2),
            s = c[0],
            u = c[1],
            m = (function () {
              var e = U()(z),
                t = x()(e, 2),
                n = t[0],
                a = t[1]
              return [
                p.a.useCallback(
                  function (e) {
                    var t = e.communityId,
                      l = e.userId
                    return a
                      ? Promise.reject(new Error('Already committing action on member request'))
                      : new Promise(function (e, a) {
                          n({
                            variables: { communityId: t, userId: l },
                            onCompleted: function (t) {
                              e()
                            },
                            onError: a,
                          })
                        })
                  },
                  [n, a],
                ),
                a,
              ]
            })(),
            d = x()(m, 2),
            y = d[0],
            g = d[1],
            f = Object(A.c)(),
            b = u || g,
            h = 'CommunityJoinRequestDenyAction' === (null == i ? void 0 : i.__typename),
            _ = 'CommunityJoinRequestApproveAction' === (null == r ? void 0 : r.__typename),
            v = p.a.useCallback(
              function () {
                y({ communityId: t, userId: a }).catch(function () {
                  f(Object(O.b)({ text: W }))
                })
              },
              [f, y, t, a],
            ),
            k = p.a.useCallback(
              function () {
                s({ communityId: t, userId: a }).catch(function () {
                  f(Object(O.b)({ text: W }))
                })
              },
              [f, s, t, a],
            )
          return p.a.createElement(
            j.a,
            { style: G.buttons },
            p.a.createElement(N.a, { disabled: !h || b, onPress: v, style: G.button, type: 'destructiveOutlined' }, Q),
            p.a.createElement(N.a, { disabled: !_ || b, onPress: k, style: G.button, type: 'primaryOutlined' }, q),
          )
        },
        G = P.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: e.spaces.space16 },
            button: { alignSelf: 'flex-start', flex: 1, marginRight: e.spaces.space12 },
          }
        }),
        Y = n('tocL'),
        Z = n('h0NW'),
        $ = n('t62R'),
        ee = n('0yYu'),
        te = n('IMA+'),
        ne = n('GBcw'),
        ae = n('6Rrp'),
        le = n('5oT/'),
        re = void 0 !== i ? i : (i = n('8vG3')),
        ie = I.a.d7f13fb8,
        oe = I.a.a340df66,
        ce = function (e) {
          var t = e.icon,
            n = e.label
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(Z.a, {
              containerStyle: ye.container,
              items: [{ label: p.a.createElement($.b, null, n), decoration: t }],
            }),
            p.a.createElement(ee.a, null),
          )
        },
        se = { blocking: I.a.g8907fde, muting: I.a.f69c2298 },
        ue = {
          mutual: { contextType: Y.a.FollowMutual, text: I.a.ae2205d1 },
          following: { contextType: Y.a.FollowFollowing, text: I.a.d960b55b },
          followedBy: { contextType: Y.a.FollowFollowed, text: I.a.b7f1e58a },
        },
        me = {},
        de = function (e) {
          var t = e.communityJoinRequest,
            n = H()(re, t),
            a = n.user_relationship.community.id_str,
            l = n.user_relationship.user_results.result,
            r = n.state
          if (!l || 'User' !== l.__typename || !l.legacy) return null
          var i = l.id_str,
            o = l.legacy,
            c = o.blocking,
            s = o.description,
            u = o.followed_by,
            m = o.following,
            d = o.muting,
            y = o.name,
            g = o.profile_image_url_https,
            f = o.screen_name
          if (!g || !f || !y) return null
          switch (r) {
            case 'Approved':
              return p.a.createElement(ce, { icon: pe, label: ie({ screenName: f }) })
            case 'Denied':
              return p.a.createElement(ce, { icon: ge, label: oe({ screenName: f }) })
            case 'Invalid':
              return null
          }
          var b = n.created_at,
            h = (function (e) {
              var t = e.following,
                n = e.isFollowedBy
              return t && n ? ue.mutual : t ? ue.following : n ? ue.followedBy : void 0
            })({ isFollowedBy: u, following: m }),
            _ = (function (e) {
              var t = e.blocking,
                n = e.muting
              return t ? se.blocking : n ? se.muting : void 0
            })({ blocking: c, muting: d }),
            v = p.a.createElement(
              j.a,
              null,
              _ && p.a.createElement($.b, { color: 'red500', style: ye.bottomText }, _),
              p.a.createElement(X, { communityId: a, communityJoinRequestActions: n.actions, userId: i }),
            )
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(te.a, {
              avatarUri: g,
              bottomControl: v,
              description: s || void 0,
              displayMode: 'UserDetailed',
              entities: me,
              name: y,
              screenName: f,
              screenNameSuffix: p.a.createElement(ne.a, { color: 'gray700', timestamp: b }),
              socialContext: h,
              userId: i,
            }),
            p.a.createElement(ee.a, null),
          )
        },
        ye = P.a.create(function (e) {
          return {
            actioned: { flexDirection: 'row' },
            bottomText: { marginTop: e.spaces.space12 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            container: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        pe = p.a.createElement(ae.a, { style: ye.icon }),
        ge = p.a.createElement(le.a, { style: ye.icon }),
        fe = I.a.addbb11e,
        be = I.a.c38131de,
        he = void 0 !== o ? o : (o = n('Jt8P')),
        _e = function (e) {
          return e.id
        },
        ve = function (e) {
          return p.a.createElement(de, { communityJoinRequest: e })
        },
        ke = function () {
          return p.a.createElement(M.a, { header: fe, message: be })
        },
        Ee = function (e) {
          var t = e.communityJoinRequests,
            n = e.fetchNext,
            a = H()(he, t).items
          return p.a.createElement(R.a, {
            cacheKey: 'SlicesRelay_MemberRequestsList',
            identityFunction: _e,
            items: a,
            noItemsRenderer: ke,
            onNearEnd: n,
            renderer: ve,
          })
        },
        Ce = n('VS6U'),
        Se = n('zCf4'),
        Fe = n('DQzJ'),
        Ie = I.a.gfccba44,
        we = 'member_requests',
        Te = { context: we },
        Ke = void 0 !== c ? c : (c = n('gAl+')),
        Me = function (e) {
          var t = Object(Se.f)(),
            n = e.communityId,
            a = Object(Fe.a)(Ke, { communityId: n }),
            l = a.data,
            r = a.fetchNext,
            i = l.community,
            o = i.join_requests_result,
            c = i.name
          if ('CommunityJoinRequests' === o.__typename) {
            var s = o.pending_join_requests_slice,
              u = p.a.createElement(S.a, {
                communityId: n,
                withCommunityRules: !0,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              m = p.a.createElement(Ee, { communityJoinRequests: s, fetchNext: r })
            return p.a.createElement(
              T.a,
              { behavioralEventViewType: we },
              p.a.createElement(Ce.a, {
                backLocation: '/i/communities/'.concat(n, '/tools'),
                history: t,
                primaryContent: m,
                sidebarContent: u,
                subtitle: c,
                title: Ie,
              }),
            )
          }
          return p.a.createElement(w.a, null)
        },
        Re = function (e) {
          var t = e.communityId
          return p.a.createElement(K.a, { errorConfig: Te }, p.a.createElement(Me, { communityId: t }))
        },
        Le = n('/de5'),
        xe = n('yiKp'),
        Oe = n.n(xe),
        Ae = (n('2G9S'), n('uFXj'), n('z84I'), n('3zvM')),
        je = n('lMB6'),
        Ne = Object(Ae.e)({ namespace: 'communityReports' }),
        Pe = je.a.register(Ne),
        Be = n('G6rE'),
        He = function (e, t) {
          var n,
            a = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (a ? Pe.selectMany(e, a) : []).map(function (t) {
            var n = t.user
            return Oe()(Oe()({}, t), {}, { reporter: Be.e.select(e, n) })
          })
        },
        De = Object(v.a)().propsFromState(function () {
          return { reports: He }
        }),
        Ue = n('855f'),
        Ve = n('cHvH'),
        ze = n('5mJL'),
        qe = n('efqG'),
        Qe = n('21zW'),
        We = function (e) {
          return (function (e) {
            var t = e.count,
              n = e.formattedCount
            return p.a.createElement(
              I.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              p.a.createElement($.b, { color: 'primary' }, I.a.ff0f7429({ count: t, formattedCount: n })),
            )
          })({ count: e, formattedCount: Ue.a.getFormattedCount(e) })
        },
        Je = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            a = t.created_at,
            l = t.reporter,
            r = p.a.createElement(ne.a, { timestamp: a })
          return l
            ? p.a.createElement(Ve.a, null, function (e) {
                var a = e.windowWidth
                return p.a.createElement(
                  j.a,
                  { style: n ? Ge.bottomBorder : null },
                  p.a.createElement(te.a, {
                    avatarUri: l.profile_image_url_https,
                    decoration: r,
                    displayMode: 'UserCompact',
                    isProtected: l.protected,
                    isVerified: l.verified,
                    name: l.name,
                    screenName: l.screen_name,
                    style: a > P.a.theme.breakpoints.small ? Ge.userCell : void 0,
                    userId: l.id_str,
                  }),
                  p.a.createElement(
                    ze.a,
                    { avatarCell: null },
                    p.a.createElement($.b, { color: 'gray700', size: 'subtext2', style: Ge.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        Xe = De(function (e) {
          var t = p.a.useState(!1),
            n = x()(t, 2),
            a = n[0],
            l = n[1],
            r = e.reports,
            i = e.tweetCase,
            o = i.report_count,
            c = i.report_created_at_max
          return p.a.createElement(
            p.a.Fragment,
            null,
            p.a.createElement(
              qe.a,
              {
                contentStyle: Ge.popover,
                onDismiss: function () {
                  l(!1)
                },
                renderContent: function () {
                  return p.a.createElement(
                    j.a,
                    { style: Ge.contentContainer },
                    r.map(function (e, t) {
                      return p.a.createElement(Je, { key: e.id_str, report: e, withBottomBorder: t < r.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: a ? 'forceVisible' : 'forceHidden',
              },
              p.a.createElement(
                $.b,
                {
                  onPress: function () {
                    l(!0)
                  },
                },
                We(o),
              ),
            ),
            p.a.createElement(Qe.a, null),
            p.a.createElement(ne.a, { timestamp: c }),
          )
        }),
        Ge = P.a.create(function (e) {
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
        Ye = n('9EWH'),
        Ze = Object(Ae.e)({ namespace: 'communityCases' }),
        $e = {
          keepTweet: Object(Ae.c)(Ze, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Ye.a)(e, function (e) {
                e.entities[n].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(Ae.c)(Ze, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Ye.a)(e, function (e) {
                e.entities[n].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        et = Oe()(Oe()({}, Ze), $e),
        tt = je.a.register(et),
        nt = n('XOJV'),
        at = function (e, t) {
          var n = t.tweetId
          return n ? nt.a.selectHydrated(e, n) : void 0
        },
        lt = function (e, t) {
          var n = t.tweetId
          return tt.select(e, n)
        },
        rt = function (e, t) {
          var n = at(e, t)
          return !!n && Object(_.i)(e, n)
        },
        it = Object(v.a)()
          .propsFromState(function () {
            return { tweet: at, tweetCase: lt, disableRemoveFromCommunity: rt }
          })
          .propsFromActions(function () {
            return { keep: tt.keepTweet, dismiss: tt.dismissTweet }
          }),
        ot = n('b5s6'),
        ct = n('mjJ+'),
        st = n('IG7M'),
        ut = n('boUI'),
        mt = n('zIWA'),
        dt = n('fz3c'),
        yt = (n('yH/f'), n('n5fo')),
        pt = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        gt = I.a.ad10c66d,
        ft = I.a.c6caed9c,
        bt = function (e) {
          return p.a.createElement($.b, null, e)
        },
        ht = function (e) {
          var t = e.screenName
          switch (e.type) {
            case pt.Hidden:
              var n = (function (e) {
                  return p.a.createElement(I.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                a = [{ label: bt(n), decoration: vt }]
              return p.a.createElement(Z.a, { accessibilityLabel: gt, containerStyle: _t.container, items: a })
            case pt.Kept:
              var l = (function (e) {
                  return p.a.createElement(I.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                r = [{ label: bt(l), decoration: kt }]
              return p.a.createElement(Z.a, { accessibilityLabel: ft, containerStyle: _t.container, items: r })
            default:
              return null
          }
        },
        _t = P.a.create(function (e) {
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
        vt = p.a.createElement(yt.a, { style: _t.icon }),
        kt = p.a.createElement(ae.a, { style: _t.icon }),
        Et = { page: 'reported_tweets', component: 'tweet' },
        Ct = { viewType: 'tweet_moderation_case' },
        St = I.a.f1d9930c,
        Ft = I.a.a219e217,
        It = I.a.fa524057,
        wt = I.a.g30bc699,
        Tt = I.a.f0306107,
        Kt = I.a.b99364a5,
        Mt = it(function (e) {
          var t,
            n = p.a.useContext(g.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            l = e.keep,
            r = e.tweet,
            i = e.tweetCase,
            o = e.tweetId,
            c = null == r || null === (t = r.user) || void 0 === t ? void 0 : t.screen_name,
            s = p.a.useCallback(
              function (t) {
                if (r && c) {
                  var a = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: wt({ screenName: c }),
                      Icon: ut.a,
                      link: '/'.concat(c),
                    },
                    {
                      text: Tt,
                      Icon: mt.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(dt.a.Tweet, '/').concat(r.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: Et },
                      },
                      onClick: function () {
                        t()
                      },
                    },
                  ]
                  return (
                    n &&
                      !e.disableRemoveFromCommunity &&
                      a.push({
                        text: Kt({ screenName: c }),
                        Icon: le.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(dt.a.RemoveCommunityMember, '/').concat(r.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Et },
                        },
                        onClick: function () {
                          t()
                        },
                      }),
                    p.a.createElement(ct.a, { items: a, onCloseRequested: t })
                  )
                }
                return null
              },
              [r, c, n, e.disableRemoveFromCommunity],
            ),
            u = function () {
              l(o)
            },
            m = function () {
              a(o)
            }
          if (c && (null == r ? void 0 : r.reportingVisibility) === dt.b.HiddenCommunityTweet)
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(ht, { screenName: c, type: pt.Hidden }),
              p.a.createElement(ee.a, null),
            )
          if (
            (null != i && i.isDismissed) ||
            'community_tweet_member_removed' === (null == r ? void 0 : r.limited_actions)
          )
            return null
          if (c && null != i && i.isKept)
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(ht, { screenName: c, type: pt.Kept }),
              p.a.createElement(ee.a, null),
            )
          if (!i) return null
          return p.a.createElement(
            f.a,
            { behavioralEventContext: Ct },
            p.a.createElement(
              j.a,
              { style: Rt.container },
              p.a.createElement(
                j.a,
                { style: Rt.reportsBar },
                p.a.createElement(Xe, { tweetCase: i }),
                p.a.createElement(st.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: s,
                  style: Rt.menu,
                }),
              ),
              p.a.createElement(ot.a, { tweetId: o }),
              r
                ? p.a.createElement(Ve.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= P.a.theme.breakpoints.small
                    return p.a.createElement(
                      j.a,
                      { style: [Rt.buttons, t && Rt.buttonsMobile] },
                      p.a.createElement(
                        N.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(dt.a.HideCommunityTweet, '/').concat(o),
                            state: { scribeNamespace: Oe()(Oe()({}, Et), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [Rt.button, t && Rt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        St,
                      ),
                      p.a.createElement(
                        N.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: u,
                          size: 'large',
                          style: [Rt.button, t && Rt.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        It,
                      ),
                    )
                  })
                : p.a.createElement(
                    j.a,
                    { style: Rt.buttons },
                    p.a.createElement(
                      N.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: m,
                        style: Rt.button,
                        type: 'primaryOutlined',
                      },
                      Ft,
                    ),
                  ),
            ),
            p.a.createElement(ee.a, null),
          )
        }),
        Rt = P.a.create(function (e) {
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
        Lt = n('hqKg'),
        xt = n('wAC9'),
        Ot = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        At = function () {
          return Object(Lt.createSelector)(Ot, function (e) {
            return e
              ? (function (e) {
                  return Object(xt.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (t) {
                      return Oe()(Oe()({}, t), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        jt = Object(v.a)()
          .propsFromState(function () {
            return { sliceModule: At() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Nt = n('FS1z'),
        Pt = I.a.c045c7b6,
        Bt = I.a.dffb0774,
        Ht = I.a.cbb2a93c,
        Dt = jt(function (e) {
          var t = p.a.useContext(g.a).featureSwitches,
            n = e.community,
            a = e.history,
            l = e.sliceModule,
            r = n.id_str,
            i = n.name,
            o = (n || []).rules,
            c = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            s = t.isTrue('responsive_web_communities_slices_enabled'),
            u = l
              ? p.a.createElement(Nt.a, {
                  module: l,
                  noItemsRenderer: function () {
                    return p.a.createElement(M.a, { header: Bt, message: Ht })
                  },
                  renderer: function (e) {
                    return p.a.createElement(Mt, { tweetId: e })
                  },
                })
              : null
          return p.a.createElement(
            T.a,
            { behavioralEventViewType: 'reported_tweets' },
            p.a.createElement(Ce.a, {
              backLocation: '/i/communities/'.concat(r),
              history: a,
              primaryContent: s ? u : null,
              sidebarContent: p.a.createElement(S.a, {
                communityId: r,
                rulesLimit: null == o ? void 0 : o.length,
                withCommunityRules: c,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: i,
              title: Pt,
            }),
          )
        }),
        Ut = ['analytics', 'community'],
        Vt = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus'],
        zt = { viewType: 'community' }
      function qt(e) {
        var t = p.a.useContext(g.a).featureSwitches,
          n = (e.analytics, e.community),
          a = d()(e, Ut),
          l = a.match.path,
          r = t.isTrue('c9s_request_to_join_enabled')
        return Object(b.c)(n.role)
          ? p.a.createElement(
              f.a,
              { behavioralEventContext: zt },
              p.a.createElement(
                Se.d,
                null,
                p.a.createElement(
                  Se.b,
                  { exact: !0, path: ''.concat(l, '/reported_tweets') },
                  p.a.createElement(Dt, u()({}, a, { community: n })),
                ),
                r
                  ? p.a.createElement(
                      Se.b,
                      { exact: !0, path: ''.concat(l, '/member_requests') },
                      p.a.createElement(Re, { communityId: n.id_str }),
                    )
                  : null,
                p.a.createElement(Se.b, null, p.a.createElement(Le.b, a)),
              ),
            )
          : p.a.createElement(Le.b, a)
      }
      function Qt(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          l = e.fetchStatus,
          r = d()(e, Vt),
          i = r.match.params.communityId,
          o = n(),
          c = p.a.useCallback(
            function () {
              i && a(i).catch(o)
            },
            [i, o, a],
          )
        return (
          p.a.useEffect(
            function () {
              return c()
            },
            [c],
          ),
          p.a.createElement(C.a, {
            fetchStatus: l,
            onRequestRetry: c,
            render: function () {
              return t ? p.a.createElement(qt, u()({}, r, { community: t })) : null
            },
          })
        )
      }
      t.default = E(Qt)
    },
    mWs5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      n('KqXw'), n('MvUL'), n('2G9S')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('3XMw'),
        i = n.n(r),
        o = n('M2mT'),
        c = n('zCf4'),
        s = n('MWbm'),
        u = n('mw9i'),
        m = n('0yYu'),
        d = n('/yvb'),
        y = n('rHpw'),
        p = i.a.i2209530
      function g(e) {
        var t = e.children,
          n = e.communityId,
          a = e.onSubmit,
          r = e.rightControl,
          i = e.screenType,
          y = e.secondaryBar,
          g = e.submitDisabled,
          b = e.subtitle,
          h = e.title,
          _ = e.withBottomBorder,
          v = e.withDetailOpen,
          k = Object(c.f)(),
          E = 'secondaryRoot' === i,
          C = '/i/communities/'.concat(n),
          S = ''.concat(C, '/tools'),
          F = E ? C : S,
          I = l.a.useCallback(
            function () {
              E ? k.replace(F) : k.goBack({ backLocation: F })
            },
            [F, k, E],
          )
        return l.a.createElement(
          o.a,
          {
            backLocation: F,
            onBackClick: I,
            rightControl: r,
            screenType: i,
            secondaryBar: y,
            showSubtitleOnWideDetail: !1,
            subtitle: b,
            title: h,
            withBottomBorder: _,
            withDetailOpen: v,
          },
          l.a.createElement(
            u.a,
            { style: f.contentRoot },
            l.a.createElement(s.a, { style: f.chilrenRoot }, t),
            a
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(m.a, null),
                  l.a.createElement(
                    u.a,
                    { style: f.buttonContainer },
                    l.a.createElement(d.a, { disabled: g, onPress: a, style: f.button, type: 'brandFilled' }, p),
                  ),
                )
              : null,
          ),
        )
      }
      var f = y.a.create(function (e) {
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
          return N
        })
      var a = n('ddV6'),
        l = n.n(a),
        r = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(r),
        o = n('v6aA'),
        c = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('1Idg'),
        y = function (e, t) {
          return Object(s.A)(e, s.h)
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
        g = n('k49u'),
        f = n('jHSc'),
        b = n('3XMw'),
        h = n.n(b),
        _ = n('5FtR'),
        v = n('OwKm'),
        k = n('AfjF'),
        E = n('MWbm'),
        C = n('/yvb'),
        S = n('jtO7'),
        F = n('4zmP'),
        I = n('eb3s'),
        w = n('rHpw'),
        T = h.a.h99020ef,
        K = h.a.i2209530,
        M = h.a.a1c93d73,
        R = h.a.f74a5adb,
        L = h.a.fbb0ed91,
        x = h.a.gea6cc19,
        O = h.a.hed35471,
        A = h.a.c8677445,
        j = h.a.c3a0d44e
      function N(e) {
        var t = i.a.useContext(o.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          r = e.createLocalApiErrorHandler,
          c = e.editRule,
          s = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          y = e.shouldShowRuleInformEducation,
          p = a.id_str,
          b = a.rules,
          h = i.a.useState(''),
          w = l()(h, 2),
          N = w[0],
          B = w[1],
          H = i.a.useState(''),
          D = l()(H, 2),
          U = D[0],
          V = D[1],
          z = i.a.useState(!1),
          q = l()(z, 2),
          Q = q[0],
          W = q[1],
          J = i.a.useState(''),
          X = l()(J, 2),
          G = X[0],
          Y = X[1],
          Z = i.a.useState(!1),
          $ = l()(Z, 2),
          ee = $[0],
          te = $[1],
          ne = i.a.useState(!1),
          ae = l()(ne, 2),
          le = ae[0],
          re = ae[1],
          ie = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              B(n), V(t), W(a)
            },
            [B, V, W],
          ),
          oe = i.a.useCallback(
            function () {
              var e = r({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : M
                  return Y(n), W(!1), []
                },
              })
              'string' == typeof d &&
                c(p, { ruleId: d, name: N, description: U })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(p, '/tools/rules') })
                  })
                  .catch(e)
            },
            [p, N, U, d, c, s, r],
          ),
          ce = i.a.useCallback(
            function () {
              var e = r({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === g.a.GenericBadRequest && t.message ? t.message : M
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
            [p, d, u, s, r],
          )
        if (!d || !m) return i.a.createElement(_.a, { to: '/i/communities/'.concat(p, '/tools/rules') })
        var se = m.description,
          ue = m.name,
          me = i.a.createElement(
            C.a,
            {
              disabled: !Q,
              onPress: function () {
                y ? re(!0) : oe()
              },
              size: 'small',
              type: 'brandFilled',
            },
            K,
          ),
          de = 1 === b.length,
          ye = t
            ? i.a.createElement(
                E.a,
                { style: P.delete },
                i.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: L,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          pe = de ? i.a.createElement(E.a, { style: P.callout }, i.a.createElement(F.a, { text: R })) : void 0,
          ge = ee
            ? i.a.createElement(I.a, {
                cancelButtonLabel: j,
                confirmButtonLabel: A,
                confirmButtonType: 'destructiveFilled',
                headline: x,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: ce,
                text: O,
              })
            : void 0,
          fe = le
            ? i.a.createElement(k.a, {
                onCancel: function () {
                  re(!1)
                },
                onConfirm: function () {
                  n(), oe(), re(!1)
                },
              })
            : void 0
        return i.a.createElement(
          f.b,
          { behavioralEventViewType: 'rules', history: s, rightControl: me, title: T },
          pe,
          i.a.createElement(v.a, { description: se || '', errorText: G, name: ue, onChange: ie }),
          ye,
          ge,
          fe,
        )
      }
      t.default = p(N)
      var P = w.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return N
      })
      var a = n('ddV6'),
        l = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        b = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        h = n.n(b),
        _ = n('pXBW'),
        v = n('6/RC'),
        k = n('UIzd'),
        E = n.n(k),
        C = n('kGix')
      n.d(t, 'a', function () {
        return C.a
      })
      var S = n('fs1G'),
        F = n('0KEI'),
        I = n('lU4h'),
        w = n.n(I),
        T = n('21nk'),
        K = n.n(T),
        M = n('bCEw'),
        R = n.n(M),
        L = n('Ud88'),
        x = n.n(L),
        O = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: S.a })
        },
        A = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (e = t.call.apply(t, [this].concat(l))), f()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof _.a)) throw e
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
        j = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            l = K()(t, n)
          return a({ fetchStatus: C.a.LOADED, data: l, error: null, retry: S.a })
        },
        N = function (e, t) {
          if (v.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                r = void 0 === a ? 'store-or-network' : a,
                i = n.render,
                o = n.variables,
                c = R()(e),
                s = l()(c, 2),
                u = s[0],
                m = s[1],
                d = Object(F.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                y = w()(o),
                p = l()(y, 1)[0],
                g = h.a.useCallback(
                  function () {
                    m(p, { fetchPolicy: 'network-only' })
                  },
                  [m, p],
                )
              return (
                h.a.useLayoutEffect(
                  function () {
                    m(p, { fetchPolicy: r })
                  },
                  [r, m, p],
                ),
                u
                  ? h.a.createElement(
                      h.a.Suspense,
                      { fallback: h.a.createElement(O, { render: i }) },
                      h.a.createElement(
                        A,
                        { errorHandler: d(t.errorConfig.options || {}), key: u.fetchKey, retry: g },
                        function (t, n) {
                          return t
                            ? i({ fetchStatus: C.a.FAILED, error: t, data: null, retry: n })
                            : h.a.createElement(j, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var r = a.render,
              i = a.variables,
              o = x()(),
              c = Object(F.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = w()(i),
              u = l()(s, 1)[0],
              m = n.get(o)
            if (m) return m
            var d = h.a.lazy(function () {
              return E()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return r({ fetchStatus: C.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (c(t.errorConfig.options || {})(e),
                        r({ fetchStatus: C.a.FAILED, data: null, error: e, retry: S.a }))
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
          return T
        })
      var a = n('ddV6'),
        l = n.n(a),
        r = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        i = n.n(r),
        o = n('v6aA'),
        c = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          return Object(s.A)(e, s.h)
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
        g = n('jHSc'),
        f = n('3XMw'),
        b = n.n(f),
        h = n('OwKm'),
        _ = n('AfjF'),
        v = n('/yvb'),
        k = n('eb3s'),
        E = b.a.j560c8ea,
        C = b.a.i2209530,
        S = b.a.gaa3239a,
        F = b.a.a67445d5,
        I = b.a.fcbe0992,
        w = b.a.j24c37b2
      function T(e) {
        var t = i.a.useContext(o.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          r = e.createLocalApiErrorHandler,
          c = e.createRule,
          s = e.history,
          u = e.shouldShowRuleInformEducation,
          m = a.id_str,
          d = a.rules,
          y = i.a.useState(''),
          f = l()(y, 2),
          b = f[0],
          T = f[1],
          K = i.a.useState(''),
          M = l()(K, 2),
          R = M[0],
          L = M[1],
          x = i.a.useState(!1),
          O = l()(x, 2),
          A = O[0],
          j = O[1],
          N = i.a.useState(!1),
          P = l()(N, 2),
          B = P[0],
          H = P[1],
          D = i.a.useState(''),
          U = l()(D, 2),
          V = U[0],
          z = U[1],
          q = i.a.useState(!1),
          Q = l()(q, 2),
          W = Q[0],
          J = Q[1],
          X = i.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              z(''), T(n), L(t), j(a)
            },
            [T, L, j],
          ),
          G = i.a.useCallback(
            function () {
              H(!0)
              var e = r({
                customErrorHandler: function (e) {
                  var t = l()(e.errors, 1)[0],
                    n = t.code === p.a.GenericBadRequest && t.message ? t.message : S
                  return z(n), j(!1), []
                },
              })
              c(m, { name: b, description: R })
                .then(function () {
                  s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, b, R, c, s, r],
          ),
          Y = i.a.useCallback(
            function () {
              u ? J(!0) : G()
            },
            [G, u],
          ),
          Z = i.a.createElement(v.a, { disabled: !A, onPress: Y, size: 'small', type: 'brandFilled' }, C),
          $ = d.length >= t,
          ee = i.a.createElement(k.a, {
            confirmButtonLabel: w,
            headline: F,
            onConfirm: function () {
              s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: t }),
            withCancelButton: !1,
          }),
          te = W
            ? i.a.createElement(_.a, {
                onCancel: function () {
                  J(!1)
                },
                onConfirm: function () {
                  n(), G(), J(!1)
                },
              })
            : void 0
        return $ && !B
          ? ee
          : i.a.createElement(
              g.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: Z, title: E },
              i.a.createElement(h.a, { description: '', errorText: V, name: '', onChange: X }),
              te,
            )
      }
      t.default = y(T)
    },
    nmVb: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, l.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var l = a(n('yyPN'))
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
          return g
        }),
        n.d(t, 'f', function () {
          return b
        })
      var a = n('RhWx'),
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
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
          l = ''
        return n && (l = n && (1 === n.length ? n[0] : n[1])), a ? i()(i()({}, a.scope), {}, { src: t, q: l }) : null
      }
      function m(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          l = n.search(c.b.WordEnd),
          r = l >= 0 ? n.slice(l) : '',
          i = a.search(c.b.WordBoundary),
          o = r + a.slice(0, i)
        return o.trim() ? { start: l, end: e + i, word: o } : { start: -1, end: -1, word: '' }
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
          r = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, l()(r))
      }
      var g = Object(o.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        f = 0,
        b = function () {
          return 'typeaheadDropdown-'.concat((f += 1))
        }
    },
    pChJ: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityOriginationAttributes_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'created_at', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: 'UserResults',
            kind: 'LinkedField',
            name: 'creator_results',
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
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ApiUser',
                        kind: 'LinkedField',
                        name: 'legacy',
                        plural: !1,
                        selections: [
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
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'dccf59f4f7179587525bc0082363441a',
      }
      t.default = a
    },
    'pd/v': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
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
                args: (l = [
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
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                          r,
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  r,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
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
                          r,
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
    qre1: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunityInviteButton_community',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'invites_result',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'Community',
        abstractKey: null,
        hash: 'b7ab87af666f9d231a6b2be83eed0762',
      }
      t.default = a
    },
    's8G+': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA')
      t.a = function (e) {
        var t = l.a.useContext(r.a).featureSwitches
        return l.a.useMemo(
          function () {
            return t.isTrue(e)
          },
          [e, t],
        )
      }
    },
    tFuX: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
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
                args: (l = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'open_membership_settings', variableName: 'openMembershipSettings' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
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
                          r,
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
                args: l,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  r,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      i,
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
                          r,
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
          return R
        })
      var a = n('ddV6'),
        l = n.n(a),
        r = (n('vrRf'), n('ERkP')),
        i = n.n(r),
        o = n('+Kfv'),
        c = n('es0u'),
        s = n('LgBi'),
        u = n('UZ0O'),
        m = n('1Idg'),
        d = n('eSoz'),
        y = n('rxPX'),
        p = n('0KEI'),
        g = Object(y.a)()
          .propsFromState(function () {
            return { community: m.a, communityId: m.c, screenName: m.i }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        f = n('3XMw'),
        b = n.n(f),
        h = n('gDCe'),
        _ = n('yoO3'),
        v = n('VS6U'),
        k = n('k/OQ'),
        E = n('krnS'),
        C = n('zCf4'),
        S = b.a.h5245afa,
        F = b.a.dc6ce7b4,
        I = b.a.f8321d82,
        w = b.a.ga2aa43c,
        T = { viewType: 'community' },
        K = { viewType: 'all' },
        M = { viewType: 'moderators' },
        R = i.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            m = e.history,
            d = e.location
          i.a.useEffect(
            function () {
              n && r(n).catch(a())
            },
            [n, a, r],
          )
          var y = i.a.useState(!1),
            p = l()(y, 2),
            g = p[0],
            f = p[1],
            b = (null == d ? void 0 : d.pathname) && d.pathname.indexOf('members') > 0,
            R = b ? F : w,
            L = i.a.useMemo(
              function () {
                return n
                  ? [
                      { to: { pathname: '/i/communities/'.concat(n, '/members'), state: d.state }, label: I, key: I },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/moderators'), state: d.state },
                        label: w,
                        key: w,
                      },
                    ]
                  : []
              },
              [n, d.state],
            ),
            x = n
              ? i.a.createElement(
                  C.d,
                  null,
                  i.a.createElement(
                    C.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                    i.a.createElement(
                      o.a,
                      { behavioralEventContext: K },
                      i.a.createElement(E.b, {
                        communityId: n,
                        mode: E.a.Members,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                  i.a.createElement(
                    C.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                    i.a.createElement(
                      o.a,
                      { behavioralEventContext: M },
                      i.a.createElement(h.a, { community: t }),
                      i.a.createElement(E.b, {
                        communityId: n,
                        mode: E.a.Moderators,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                )
              : null,
            O = i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(u.a, { community: t, communityId: n, onIsSearchingChange: f }),
              g ? null : i.a.createElement(k.a, { accessibilityLabel: R, links: L }),
            )
          return i.a.createElement(
            o.a,
            { behavioralEventContext: T },
            i.a.createElement(
              _.a,
              { behavioralEventViewType: 'members' },
              i.a.createElement(v.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: S,
                history: m,
                primaryContent: g ? null : x,
                rightControl: b && n ? i.a.createElement(s.a, { communityId: n }) : null,
                secondaryBar: O,
                sidebarContent: i.a.createElement(c.a, null),
                title: F,
              }),
            ),
          )
        }),
        L = g(R)
      t.default = L
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesScreen', function () {
          return $e
        })
      var a,
        l,
        r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        y = n('2VqO'),
        p = n.n(y),
        g = n('KEM+'),
        f = n.n(g),
        b = (n('2G9S'), n('vrRf'), n('ERkP')),
        h = n.n(b),
        _ = n('+Kfv'),
        v = n('es0u'),
        k = n('1Idg'),
        E = n('li/m'),
        C = n('G6rE'),
        S = n('rxPX'),
        F = n('0KEI'),
        I = function (e, t) {
          var n = k.i(e, t)
          if (n) return C.e.selectByScreenName(e, n)
        },
        w = Object(S.a)()
          .propsFromState(function () {
            return { hasCommunityMemberships: E.d, screenName: k.i, user: I }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(F.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: C.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        T = n('3XMw'),
        K = n.n(T),
        M = n('5oT/'),
        R = n('/yvb'),
        L = n('rHpw'),
        x = (n('enFi'), n('jAXQ')),
        O = n.n(x),
        A = K.a.a226497c,
        j = h.a.memo(function (e) {
          return 'CommunityCreateAction' !== O()(void 0 !== a ? a : (a = n('zum0')), e.createActionResult).__typename
            ? null
            : h.a.createElement(R.a, {
                icon: h.a.createElement(M.a, { accessibilityLabel: A, style: N.createButton }),
                link: '/i/communities/create',
                size: 'medium',
                type: 'brandText',
              })
        }),
        N = L.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        P = h.a.memo(j),
        B = n('Fr3L'),
        H = n('IAZG'),
        D = { context: 'CommunityCreateButton' },
        U = void 0 !== l ? l : (l = n('S91Q')),
        V = function (e) {
          var t,
            n =
              null === (t = Object(H.a)(U, {}, { fetchPolicy: 'store-and-network' }).viewer) || void 0 === t
                ? void 0
                : t.create_community_action_result
          return n ? h.a.createElement(P, { createActionResult: n }) : null
        },
        z = function (e) {
          return h.a.createElement(B.a, { errorConfig: D }, h.a.createElement(V, null))
        },
        q = h.a.memo(z),
        Q = n('GOQE'),
        W = (n('z84I'), n('M+/F'), n('yiKp')),
        J = n.n(W),
        X = (n('ho0z'), n('tVqn'), n('uFXj'), n('v6aA')),
        G = n('YeIG'),
        Y = 'community-thumbnail-image',
        Z = 'community-thumbnail-name-container',
        $ = n('MWbm'),
        ee = n('X00g'),
        te = n('htQn'),
        ne = n('9Xij'),
        ae = n('TIdA'),
        le = n('A91F'),
        re = n('t62R'),
        ie = { type: 'serversideContextKey', serversideContextType: 'community' },
        oe = L.a.create(function (e) {
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
              width: 'calc(('.concat(L.a.theme.spaces.space36, ' * 3) + ').concat(L.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        ce = function (e) {
          var t = h.a.useContext(X.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            a = n.id_str,
            l = n.media,
            r = n.name,
            i = n.theme,
            o = h.a.useMemo(
              function () {
                return { clientEntity: J()(J()({}, ie), {}, { serversideContextId: a || '' }), viewType: 'thumbnail' }
              },
              [a],
            )
          if (Object(G.a)(null == l ? void 0 : l.image) || !r) return null
          var c = null == l ? void 0 : l.image,
            s = null == l ? void 0 : l.crop,
            u = L.a.theme.aspectRatios.communityBanner,
            m = t ? ee.a.getCommunityBackgroundColor(i) : L.a.theme.colors.translucentBlack77
          return c
            ? h.a.createElement(
                _.a,
                { behavioralEventContext: o },
                h.a.createElement(
                  te.a,
                  { link: '/i/communities/'.concat(a), style: oe.root },
                  h.a.createElement(
                    $.a,
                    { style: oe.container },
                    h.a.createElement(
                      ne.a,
                      { ratio: u },
                      h.a.createElement(ae.a, {
                        accessibilityLabel: '',
                        aspectMode: le.a.exact(u),
                        backgroundColor: L.a.theme.colors.gray300,
                        cropCandidates: s,
                        image: c,
                        testID: Y,
                      }),
                    ),
                    h.a.createElement(
                      $.a,
                      { style: [oe.name, { backgroundColor: m }], testID: Z },
                      h.a.createElement(
                        re.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        r.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        se = n('eSoz'),
        ue = n('o3oN'),
        me = function (e) {
          var t = Object(ue.c)(e)
          return se.c.selectMany(e, t)
        },
        de = Object(S.a)()
          .propsFromState(function () {
            return { communities: me, fetchStatus: ue.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(F.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: ue.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        ye = n('kGix'),
        pe = n('6iuV'),
        ge = n('rC8y'),
        fe = K.a.d228a9a0,
        be = h.a.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            l = e.fetchStatus,
            r = e.location.pathname
          h.a.useEffect(
            function () {
              l === ye.a.NONE && a().catch(n())
            },
            [n, a, l],
          )
          var i = h.a.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return h.a.createElement(ce, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(G.a)(t)
            ? null
            : h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(pe.a, { style: [he.paddingHorizontal, he.bottomBorder] }, i),
                t.length > 10 &&
                  h.a.createElement(
                    $.a,
                    { style: he.bottomBorder },
                    h.a.createElement(ge.a, { link: '/'.concat(r, '/memberships'), text: fe }),
                  ),
              )
        }),
        he = L.a.create(function (e) {
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
        _e = de(be),
        ve = n('WpDa'),
        ke = n('ZNT5'),
        Ee = Object(ke.a)({
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
          formatResponse: ve.a,
        }),
        Ce = n('OUEC'),
        Se = n('dwig'),
        Fe = n('0+qk'),
        Ie = n('oQhu'),
        we = n('7BdX'),
        Te = n('fTQJ'),
        Ke = n('QRqA'),
        Me = n('FIs5'),
        Re = n('mw9i'),
        Le = K.a.c63602d3,
        xe = K.a.d7346631,
        Oe = K.a.fbd12fea,
        Ae = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(u()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              f()(
                u()(e),
                '_getModule',
                Object(Ie.a)(function () {
                  return Ee
                }),
              ),
              f()(u()(e), '_renderEmptyTimeline', function () {
                return h.a.createElement(Me.a, { header: xe, message: Oe })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hasCommunityMemberships,
                    n = e.history,
                    a = e.isLoggedInUser,
                    l = e.location,
                    r = this._getModule(),
                    i = this._c9sParticipationEnabled && t ? h.a.createElement(Fe.a, { history: n }) : null
                  return a && r
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(Ke.a, null),
                        h.a.createElement(
                          Se.a,
                          { container: Re.a, fab: i },
                          h.a.createElement(_e, { location: l }),
                          h.a.createElement(Te.a, {
                            entryConfiguration: Ce.a,
                            module: r,
                            prerollDisplayLocation: we.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: Le,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      f()(Ae, 'contextType', X.a)
      var je = Ae,
        Ne = n('hqKg'),
        Pe = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        Be = function () {
          return Object(Ne.createSelector)(Pe, function (e) {
            return e
              ? (function (e) {
                  return Object(ke.a)({
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
                    formatResponse: ve.a,
                  })
                })(e)
              : void 0
          })
        },
        He = Object(S.a)()
          .propsFromState(function () {
            return { urtModule: Be() }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        De = n('yoO3'),
        Ue = K.a.c63602d3,
        Ve = K.a.d7346631,
        ze = K.a.hb01fe46,
        qe = He(
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              i()(this, n)
              for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
              return (
                (e = t.call.apply(t, [this].concat(l))),
                f()(u()(e), '_renderEmptyState', function () {
                  return e.props.isLoggedInUser ? h.a.createElement(Me.a, { header: Ve, message: ze }) : null
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.urtModule
                    return e
                      ? h.a.createElement(
                          De.a,
                          { behavioralEventViewType: 'all' },
                          h.a.createElement(Te.a, {
                            entryConfiguration: Ce.a,
                            module: e,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyState,
                            title: Ue,
                          }),
                        )
                      : null
                  },
                },
              ]),
              n
            )
          })(h.a.Component),
        ),
        Qe = n('5FtR'),
        We = n('Y6L+'),
        Je = n('VS6U'),
        Xe = n('zCf4'),
        Ge = K.a.h02a6fe5,
        Ye = K.a.c63602d3,
        Ze = { viewType: 'communities' },
        $e = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(u()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.hasCommunityMemberships,
                  a = t.history,
                  l = t.location,
                  r = t.user,
                  i = e._isLoggedInUser()
                return h.a.createElement(
                  Xe.d,
                  null,
                  h.a.createElement(
                    Xe.b,
                    { exact: !0, path: '/'.concat(We.J, '/communities') },
                    h.a.createElement(je, { hasCommunityMemberships: n, history: a, isLoggedInUser: i, location: l }),
                  ),
                  h.a.createElement(
                    Xe.b,
                    { exact: !0, path: '/'.concat(We.J, '/communities/memberships') },
                    h.a.createElement(qe, { isLoggedInUser: i, user: r }),
                  ),
                )
              }),
              f()(u()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  a = n.createLocalApiErrorHandler,
                  l = n.fetchOneUserByScreenNameIfNeeded,
                  r = n.screenName
                r && l(r).catch(a(Q.a))
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  var e = this.props.history
                  if (this._isLoggedInUser()) {
                    var t = this._isMembershipsView() ? Ye : Ge
                    return h.a.createElement(
                      _.a,
                      { behavioralEventContext: Ze },
                      h.a.createElement(Je.a, {
                        backLocation: '/',
                        history: e,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: h.a.createElement(q, null),
                        sidebarContent: h.a.createElement(v.a, null),
                        title: t,
                      }),
                    )
                  }
                  return h.a.createElement(Qe.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      f()($e, 'contextType', X.a)
      var et = w($e)
      t.default = et
    },
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        l = n.n(a),
        r = n('Y9Ll'),
        i = n.n(r),
        o = n('5Yy7'),
        c = n.n(o),
        s = n('2VqO'),
        u = n.n(s),
        m = n('KEM+'),
        d = n.n(m),
        y = (n('z84I'), n('ERkP')),
        p = n.n(y),
        g = n('yiKp'),
        f = n.n(g),
        b = n('1Pcy'),
        h = n.n(b),
        _ = (n('2G9S'), n('ho0z'), n('I4+6')),
        v = n('cm6r'),
        k = n('rHpw'),
        E = n('k/Ka'),
        C = n('MWbm'),
        S = n('x0mb'),
        F = n('IMYl'),
        I = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
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
            i()(n, [
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
                    l = e.name,
                    r = e.style,
                    i = k.a.theme.colors[n],
                    o = _.a.generate({
                      backgroundColor: k.a.theme.colors.transparent,
                      color: i,
                      withFocusWithinFocusRing: !0,
                    })
                  return p.a.createElement(
                    C.a,
                    { style: [w.container, r] },
                    p.a.createElement(
                      v.a,
                      { accessibilityRole: 'label', interactiveStyles: o, style: [w.choice, w.choiceContainer] },
                      p.a.createElement(S.a, { style: [w.choice, { color: i }] }),
                      Object(E.a)('input', {
                        accessibilityLabel: t,
                        name: l,
                        checked: a,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: w.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    a &&
                      p.a.createElement(
                        C.a,
                        { style: [w.choice, w.checkMarkContainer] },
                        p.a.createElement(F.a, { style: [w.choiceSelected, { backgroundColor: i }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        w = k.a.create(function (e) {
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
            nativeControl: f()(
              f()({}, k.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        T = I,
        K = 1,
        M = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            return l()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(K, '_LABEL')), (K += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.autoFocus,
                    l = t.layout,
                    r = t.onChange,
                    i = t.options,
                    o = t.value,
                    c = 'two-rows' === l,
                    s = [R.root, c && R.flexWrap],
                    u = c ? { width: ''.concat((2 / i.length) * 100, '%') } : void 0
                  return p.a.createElement(
                    C.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    i.map(function (t) {
                      var n = t.accessibilityLabel,
                        l = t.colorName
                      return p.a.createElement(T, {
                        accessibilityLabel: n,
                        autoFocus: a && o === l,
                        colorName: l,
                        isSelected: o === l,
                        key: l,
                        name: e._colorPickerId,
                        onChange: r,
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
      var R = k.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = M
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        l = n('42ly'),
        r = n('N9G2'),
        i = n('BIH/'),
        o = n('lhaq'),
        c = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = r(this),
              n = i(t),
              a = c(t, 0)
            return (a.length = l(a, t, t, n, 0, void 0 === e ? 1 : o(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    vUUo: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
        o = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityBannerImageQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityBannerImage_community' }],
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
            name: 'CommunityBannerImageQuery',
            selections: [
              {
                alias: 'community',
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'custom_banner_media',
                    plural: !1,
                    selections: (i = [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'media_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'MediaColorInfo',
                                kind: 'LinkedField',
                                name: 'color_info',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'MediaColorPaletteItem',
                                    kind: 'LinkedField',
                                    name: 'palette',
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'MediaColor',
                                        kind: 'LinkedField',
                                        name: 'rgb',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'red',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'green',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'blue',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'percentage',
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
                                kind: 'ScalarField',
                                name: 'original_img_url',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'original_img_width',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'original_img_height',
                                storageKey: null,
                              },
                            ],
                            type: 'ApiImage',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ]),
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiMedia',
                    kind: 'LinkedField',
                    name: 'default_banner_media',
                    plural: !1,
                    selections: i,
                    storageKey: null,
                  },
                  r,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'koDZVDC7OJ_T9UpEaa9rJw',
            metadata: {},
            name: 'CommunityBannerImageQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '0aeee2e1ee9d817082637a69ecbc6ce3'), (t.default = o)
    },
    w9f9: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i,
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
                args: (l = [
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
                    args: [(r = { kind: 'Variable', name: 'count', variableName: 'count' })],
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
                          (i = {
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
                args: l,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (c = [r, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
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
                          i,
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
          return at
        })
      n('KqXw'), n('WNMA'), n('1t7P'), n('jQ/y'), n('ho0z')
      var a = n('ERkP'),
        l = n.n(a),
        r = n('v6aA'),
        i = n('rxPX'),
        o = Object(i.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        c = n('ddV6'),
        s = n.n(c),
        u = n('jTgF'),
        m = n('AspN'),
        d = n('eSoz'),
        y = n('0KEI'),
        p = function (e, t) {
          var n = t.localMediaId,
            a = n && isFinite(n) ? m.k(e, n) : []
          return s()(a, 1)[0]
        },
        g = Object(i.a)()
          .propsFromState(function () {
            return { localMedia: p }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: d.a,
              removeLocalMediaId: d.e,
              editCommunityBanner: d.d,
              removeBanner: d.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        f = n('3XMw'),
        b = n.n(f),
        h = n('Nh1N'),
        _ = n('JAeQ'),
        v = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        k = Object(v.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(178)]).then(n.bind(null, 'P68U'))
          },
        }),
        E = n('eyty'),
        C = n('MWbm'),
        S = n('rHpw'),
        F = n('TIdA'),
        I = n('A91F'),
        w = n('4zmP'),
        T = n('eb3s'),
        K = b.a.a49f884d,
        M = b.a.ea965b81,
        R = b.a.gea6cc19,
        L = b.a.cfd2f35d,
        x = b.a.j35d3ad6,
        O = b.a.f1e8fb21,
        A = b.a.fc2a5c92,
        j = b.a.e405ec21
      var N,
        P,
        B,
        H = S.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        D = g(function (e) {
          var t = e.addLocalMediaId,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            r = e.editCommunityBanner,
            i = e.hasCustomMedia,
            o = e.localMedia,
            c = e.localMediaId,
            m = e.media,
            d = e.removeBanner,
            y = e.removeLocalMediaId,
            p = l.a.useState(!1),
            g = s()(p, 2),
            f = g[0],
            b = g[1],
            v = l.a.useState(!1),
            N = s()(v, 2),
            P = N[0],
            B = N[1],
            D = l.a.useState(!1),
            U = s()(D, 2),
            V = U[0],
            z = U[1],
            q = l.a.useState(!1),
            Q = s()(q, 2),
            W = Q[0],
            J = Q[1],
            X = null == m ? void 0 : m.image,
            G = S.a.theme.aspectRatios.communityBanner,
            Y = a({
              customErrorHandler: function (e) {
                return B(j), []
              },
            }),
            Z = function (e) {
              return z(!1), J(Boolean(e)), e ? t(n, e) : y(n)
            },
            $ = X ? l.a.createElement(F.a, { accessibilityLabel: K, aspectMode: I.a.exact(G), image: X }) : null
          return l.a.createElement(
            l.a.Fragment,
            null,
            P
              ? l.a.createElement(
                  C.a,
                  { style: H.error },
                  l.a.createElement(w.a, { Icon: h.a, headline: A, text: P, type: 'danger' }),
                )
              : null,
            l.a.createElement(k, {
              accessibilityLabel: M,
              aspectRatio: G,
              currentContent: $,
              location: E.d.CommunityBanner,
              mediaItem: V ? o : void 0,
              onChange: function (e) {
                var t = s()(e, 1)[0]
                B(!1), Z(t)
              },
              onFailure: function () {
                B(j), y(n)
              },
              onRemove:
                i || V
                  ? function () {
                      Z(), b(!0)
                    }
                  : void 0,
            }),
            W && o
              ? l.a.createElement(_.a, {
                  aspectRatio: G,
                  media: o,
                  onCancel: Z,
                  onCropDone: function (e) {
                    J(!1),
                      c
                        ? (z(!0),
                          r(n, { mediaId: c, cropData: e }).catch(function (e) {
                            Z(), Object(u.a)(e) ? B(j) : Y(e)
                          }))
                        : B(j)
                  },
                })
              : null,
            f
              ? l.a.createElement(T.a, {
                  cancelButtonLabel: L,
                  confirmButtonLabel: x,
                  confirmButtonType: 'destructiveFilled',
                  headline: R,
                  onCancel: function () {
                    b(!1)
                  },
                  onConfirm: function () {
                    d(n).catch(Y), b(!1)
                  },
                  text: O,
                })
              : null,
          )
        }),
        U = Object(i.a)()
          .propsFromActions(function () {
            return {
              editAccess: d.c.editAccess,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        V = n('yoO3'),
        z = n('mWs5'),
        q = n('3JAx'),
        Q = b.a.f713fbd1,
        W = [
          { label: b.a.fd00a769, value: 'Public', helpText: b.a.d0784408 },
          { label: b.a.ce0523a8, value: 'Closed', helpText: b.a.ccfafe8c },
        ],
        J = U(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editAccess,
            r = e.history,
            i = t.id_str,
            o = l.a.useState(t.access),
            c = s()(o, 2),
            u = c[0],
            m = c[1],
            d = l.a.useCallback(
              function () {
                a(i, { access: u })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [i, u, a, r, n],
            ),
            y = u !== t.access
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: i, onSubmit: d, submitDisabled: !y, title: Q },
              l.a.createElement(
                C.a,
                { style: X.root },
                l.a.createElement(q.a, {
                  name: 'membershipSetting',
                  onChange: function (e, t) {
                    m(t)
                  },
                  options: W,
                  value: u,
                }),
              ),
            ),
          )
        }),
        X = S.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        G = n('n0Rl'),
        Y = n('k49u'),
        Z = (n('849X'), n('TJCb'), n('uDfI')),
        $ = (n('yH/f'), n('I/KZ')),
        ee = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        te = (n('enFi'), n('9SqB')),
        ne = n.n(te),
        ae = void 0 !== N ? N : (N = n('tFuX')),
        le = void 0 !== P ? P : (P = n('pd/v')),
        re = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var t
            switch (e.membership_settings.__typename) {
              case $.a.Open:
                t = { __typename: $.a.Open }
                break
              case $.a.Restricted:
                t = {
                  __typename: $.a.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: t }
          }
        },
        ie = n('zCf4'),
        oe = n('Hsf0'),
        ce = n.n(oe),
        se = void 0 !== B ? B : (B = n('tnnC'))
      var ue,
        me,
        de = n('jAXQ'),
        ye = n.n(de),
        pe = b.a.f713fbd1,
        ge = b.a.c5d1634d,
        fe = b.a.b983f9e0,
        be = b.a.fc2a5c92,
        he = b.a.a1c93d73,
        _e = void 0 !== ue ? ue : (ue = n('1tGk')),
        ve = function (e) {
          var t,
            n,
            a,
            r,
            i,
            o,
            c,
            u,
            m,
            p,
            g,
            f,
            _,
            v = e.community,
            k = ye()(_e, v),
            E = k.membership_settings,
            S = k.rest_id,
            F = (function (e) {
              var t = ce()(se, e)
              switch (t.__typename) {
                case $.a.Restricted:
                  return { access: $.a.Restricted, invitesPolicy: t.invites_policy }
                case $.a.Open:
                  return { access: $.a.Open, invitesPolicy: $.b.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(E),
            I = l.a.useState(),
            K = s()(I, 2),
            M = K[0],
            R = K[1],
            L =
              ((t = ne()(ae)),
              (n = s()(t, 2)),
              (a = n[0]),
              (r = n[1]),
              (i = ne()(le)),
              (o = s()(i, 2)),
              (c = o[0]),
              (u = o[1]),
              (m = Object(Z.c)()),
              l.a.useCallback(
                function (e, t) {
                  return r || u
                    ? Promise.reject(new Error('Already updating membership settings'))
                    : new Promise(function (n, l) {
                        var r = t.access,
                          i = t.invitesPolicy
                        r === $.a.Open
                          ? a({
                              variables: { communityId: e, openMembershipSettings: {} },
                              onCompleted: function (e) {
                                var t = re(e.community_membership_settings_open_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: l,
                            })
                          : r === $.a.Restricted &&
                            c({
                              variables: {
                                communityId: e,
                                restrictedMembershipSettings: { invites_policy: i, join_approval_policy: ee.Moderator },
                              },
                              onCompleted: function (e) {
                                var t = re(e.community_membership_settings_restricted_update)
                                t && m(d.c.updateOne(t.id_str, t)), n()
                              },
                              onError: l,
                            })
                      })
                },
                [a, c, m, r, u],
              )),
            x = Object(ie.f)(),
            O = l.a.useState(),
            A = s()(O, 2),
            j = A[0],
            N = A[1],
            P = Object(y.useCreateLocalApiErrorHandler)('COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE'),
            B = Object($.e)(F),
            H = s()(B, 2),
            D = H[0],
            U = H[1],
            V = l.a.useCallback(
              function () {
                var e = P({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : he
                    return N(n), []
                  },
                })
                L(S, D)
                  .then(function () {
                    x.goBack({ backLocation: '/i/communities/'.concat(S, '/tools/settings') })
                  })
                  .catch(e)
              },
              [S, P, x, D, L],
            ),
            q = l.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === $.a.Restricted && t.access === $.a.Open) return b.a.daedd9fa
                })(F, D)
                e ? R(e) : V()
              },
              [F, D, V],
            ),
            Q = l.a.useCallback(function () {
              return R(void 0)
            }, []),
            W =
              ((g = D),
              (f = (p = F).access !== g.access),
              (_ = p.access === $.a.Restricted && p.invitesPolicy !== g.invitesPolicy),
              !(f || _)),
            J = j
              ? l.a.createElement(
                  C.a,
                  { style: ke.error },
                  l.a.createElement(w.a, { Icon: h.a, headline: be, text: j, type: 'danger' }),
                )
              : void 0
          return l.a.createElement(
            z.a,
            { communityId: S, onSubmit: q, submitDisabled: W, title: pe },
            J,
            l.a.createElement($.d, { setters: U, state: D }),
            M &&
              l.a.createElement(T.a, {
                confirmButtonLabel: ge,
                confirmButtonType: 'primary',
                headline: fe,
                onCancel: Q,
                onConfirm: V,
                text: M,
              }),
          )
        },
        ke = S.a.create(function (e) {
          return { error: { marginVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ee = n('v//M'),
        Ce = void 0 !== me ? me : (me = n('PbB6')),
        Se = Object(G.b)(Ce, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Fe = function (e) {
          var t = { communityId: e.communityId }
          return l.a.createElement(Se, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                r = null == t ? void 0 : t.community
              return l.a.createElement(Ee.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return r ? l.a.createElement(ve, { community: r }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        Ie = n('ROT1'),
        we = Object(i.a)()
          .propsFromActions(function () {
            return {
              editName: d.c.editName,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        Te = b.a.h3c0f1a2,
        Ke = b.a.fc2a5c92,
        Me = b.a.cb5e6510
      var Re = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Le = we(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editName,
            r = e.history,
            i = t.id_str,
            o = t.name,
            c = l.a.useState(o),
            u = s()(c, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            p = s()(y, 2),
            g = p[0],
            f = p[1],
            b = l.a.useState(void 0),
            _ = s()(b, 2),
            v = _[0],
            k = _[1],
            E = l.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Me
                    return k(n), f(!0), []
                  },
                })
                a(i, { name: m })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(i, '/tools/settings') })
                  })
                  .catch(e)
              },
              [i, m, a, r, n],
            )
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: i, onSubmit: E, submitDisabled: g, title: Te },
              v
                ? l.a.createElement(
                    C.a,
                    { style: Re.error },
                    l.a.createElement(w.a, { Icon: h.a, headline: Ke, text: v, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(Ie.a, {
                autoFocus: !0,
                communityName: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        xe = n('U0Qk'),
        Oe = Object(i.a)()
          .propsFromActions(function () {
            return {
              editPurpose: d.c.editPurpose,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        Ae = b.a.a895549f,
        je = b.a.fc2a5c92,
        Ne = b.a.ced22929
      var Pe = S.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Be = Oe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            r = e.history,
            i = t.description,
            o = t.id_str,
            c = l.a.useState(i || ''),
            u = s()(c, 2),
            m = u[0],
            d = u[1],
            y = l.a.useState(!1),
            p = s()(y, 2),
            g = p[0],
            f = p[1],
            b = l.a.useState(void 0),
            _ = s()(b, 2),
            v = _[0],
            k = _[1],
            E = l.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = s()(e.errors, 1)[0],
                      n = t.code === Y.a.GenericBadRequest && t.message ? t.message : Ne
                    return k(n), f(!0), []
                  },
                })
                a(o, { purpose: m })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, m, a, r, n],
            )
          return l.a.createElement(
            V.a,
            null,
            l.a.createElement(
              z.a,
              { communityId: o, onSubmit: E, submitDisabled: g, title: Ae },
              v
                ? l.a.createElement(
                    C.a,
                    { style: Pe.error },
                    l.a.createElement(w.a, { Icon: h.a, headline: je, text: v, type: 'danger' }),
                  )
                : void 0,
              l.a.createElement(xe.a, {
                autoFocus: !0,
                communityPurpose: m,
                onChange: function (e, t) {
                  d(e), f(t)
                },
              }),
            ),
          )
        }),
        He = n('Ig1G'),
        De = n('x0mb'),
        Ue = n('5FtR'),
        Ve = n('t62R'),
        ze = n('X00g'),
        qe = n('6vad'),
        Qe = n('csss'),
        We = n('0yYu'),
        Je = b.a.bb081ea1,
        Xe = b.a.h3e55b40,
        Ge = b.a.j8af8ea9,
        Ye = b.a.d5f01115,
        Ze = b.a.c3c04b70,
        $e = { Closed: b.a.ce0523a8, Public: b.a.fd00a769 },
        et = b.a.f4a98e9e,
        tt = b.a.f713fbd1,
        nt = function (e) {
          var t = e.children
          return l.a.createElement(Ve.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        at = function (e) {
          var t = e.community,
            n = e.history,
            a = e.match,
            i = t.access,
            o = t.description,
            c = t.hasCustomMedia,
            s = t.id_str,
            u = t.localMediaId,
            m = t.media,
            d = t.membership_settings,
            y = t.name,
            p = t.theme,
            g = l.a.useContext(r.a).featureSwitches,
            f = g.isTrue('c9s_edit_community_name_enabled'),
            b = g.isTrue('c9s_edit_community_description_enabled'),
            h = g.isTrue('c9s_edit_community_membership_settings_enabled'),
            _ = g.isTrue('c9s_membership_settings_enabled'),
            v = g.isTrue('c9s_edit_community_banner_enabled'),
            k = g.isTrue('c9s_edit_community_theme_enabled'),
            E = a.url,
            C = l.a.useMemo(
              function () {
                return _ ? (d.__typename === $.a.Open ? $e.Public : $e.Closed) : $e[i]
              },
              [i, _, d.__typename],
            ),
            S = Object(He.e)(t),
            F = ze.a.getCommunityThemeDisplayName(S),
            I = ze.a.getCommunityBackgroundColor(p)
          return l.a.createElement(
            ie.d,
            null,
            f
              ? l.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/name') },
                  l.a.createElement(Le, { community: t, history: n }),
                )
              : null,
            b
              ? l.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/purpose') },
                  l.a.createElement(Be, { community: t, history: n }),
                )
              : null,
            _
              ? l.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(Fe, { communityId: s }),
                )
              : h
              ? l.a.createElement(
                  ie.b,
                  { exact: !0, path: ''.concat(E, '/membership') },
                  l.a.createElement(J, { community: t, history: n }),
                )
              : null,
            l.a.createElement(
              ie.b,
              { exact: !0, path: ''.concat(E, '/') },
              l.a.createElement(
                V.a,
                null,
                l.a.createElement(
                  z.a,
                  { communityId: s, screenType: 'primaryDetail', title: Je },
                  v ? l.a.createElement(D, { communityId: s, hasCustomMedia: c, localMediaId: u, media: m }) : null,
                  l.a.createElement(qe.b, { text: et }),
                  l.a.createElement(Qe.a, {
                    description: l.a.createElement(nt, null, y),
                    label: Xe,
                    link: f ? ''.concat(E, '/name') : void 0,
                  }),
                  l.a.createElement(Qe.a, {
                    description: o ? l.a.createElement(nt, null, o) : void 0,
                    label: Ye,
                    link: b ? ''.concat(E, '/purpose') : void 0,
                  }),
                  k
                    ? l.a.createElement(Qe.a, {
                        description: l.a.createElement(nt, null, F),
                        label: Ze,
                        link: k ? ''.concat(E, '/theme') : void 0,
                        renderRightContent: function () {
                          return l.a.createElement(De.a, { style: [{ color: I }, lt.themeIcon] })
                        },
                      })
                    : null,
                  _ || h
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(We.a, null),
                        l.a.createElement(qe.b, { text: tt }),
                        l.a.createElement(Qe.a, {
                          description: l.a.createElement(nt, null, C),
                          label: Ge,
                          link: ''.concat(E, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            l.a.createElement(ie.b, null, l.a.createElement(Ue.a, { to: ''.concat(E, '/') })),
          )
        },
        lt =
          ((t.default = o(at)),
          S.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    xvzJ: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        l = n.n(a),
        r = n('yiKp'),
        i = n.n(r),
        o = n('ddV6'),
        c = n.n(o),
        s = (n('yH/f'), n('2G9S'), n('ERkP')),
        u = n.n(s),
        m = n('1YZw'),
        d = n('v6aA'),
        y = n('Ig1G'),
        p = n('uDfI'),
        g = n('CxAY'),
        f = n('yrzJ'),
        b = n('mjJ+'),
        h = n('IG7M'),
        _ = n('eb3s'),
        v = (n('enFi'), n('9SqB')),
        k = n.n(v),
        E = n('3XMw'),
        C = n.n(E),
        S = n('Lsrn'),
        F = n('k/Ka'),
        I = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [S.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M21.248 10.242c-.098 0-.196.02-.287.057-.09.038-.173.094-.243.163-.07.07-.125.153-.162.244-.038.09-.057.189-.057.287v1.839c.012 1.1-.195 2.19-.608 3.21-.414 1.019-1.026 1.945-1.8 2.726-.698-.957-1.61-1.736-2.665-2.275-1.055-.538-2.22-.821-3.405-.825h-.04c-1.185.003-2.353.286-3.408.824-1.055.539-1.968 1.319-2.666 2.276-.774-.78-1.386-1.707-1.799-2.727-.413-1.018-.62-2.11-.608-3.209V4.705c3.213-1.64 6.832-2.318 10.421-1.949.098.011.198.003.293-.024.095-.028.183-.074.26-.136.077-.062.14-.139.187-.226.047-.087.076-.183.085-.281.02-.198-.038-.396-.163-.55-.125-.155-.306-.254-.504-.275-4.04-.414-8.113.397-11.686 2.329-.119.064-.218.16-.287.275-.07.116-.106.249-.106.384v8.58c-.009 1.431.296 2.848.893 4.149.597 1.3 1.472 2.455 2.563 3.382.062.085.142.156.234.208h.012c1.8 1.47 3.888 2.544 6.13 3.155.111.027.227.027.338 0 2.242-.609 4.33-1.682 6.13-3.151h.015c.092-.052.171-.123.233-.209 1.092-.927 1.966-2.082 2.563-3.384.596-1.302.9-2.719.89-4.151v-1.84c0-.099-.02-.196-.058-.287-.038-.091-.093-.174-.163-.244s-.153-.124-.244-.162c-.091-.037-.19-.056-.288-.056zM12 22.227c-1.793-.499-3.476-1.331-4.96-2.453.547-.806 1.285-1.465 2.147-1.92.863-.454 1.823-.69 2.798-.686h.036c.974-.003 1.934.232 2.795.687.862.454 1.599 1.113 2.146 1.918-1.485 1.123-3.168 1.955-4.962 2.454zM12 6C9.936 6 8.52 7.369 8.21 9.66c-.151.6-.172 1.226-.061 1.835.111.609.352 1.187.705 1.695.417.394.914.692 1.457.875.543.183 1.12.246 1.69.185.569.06 1.144-.002 1.687-.185.542-.183 1.039-.481 1.455-.874.354-.508.594-1.087.705-1.696.111-.609.09-1.235-.06-1.835C15.475 7.369 14.06 6 12 6zm2.014 6.2c-.282.22-.606.382-.952.477-.345.094-.706.119-1.062.073-.356.046-.717.022-1.063-.073-.347-.094-.67-.256-.954-.477-.388-.715-.49-1.552-.283-2.339.142-1.077.66-2.361 2.3-2.361 1.641 0 2.155 1.284 2.3 2.361.205.788.102 1.624-.288 2.339h.002zm8.836-9.915L21.136 4l1.714 1.715c.133.142.205.33.201.524-.003.195-.082.38-.22.518-.137.137-.322.216-.516.22-.195.003-.383-.07-.525-.202l-1.715-1.714-1.715 1.714c-.069.074-.151.133-.243.174-.092.04-.192.063-.292.065-.101.001-.201-.017-.294-.055-.094-.038-.179-.094-.25-.165-.071-.071-.127-.156-.165-.25-.038-.093-.056-.193-.054-.294.001-.1.023-.2.064-.292.041-.092.1-.174.174-.243L19.014 4 17.3 2.285c-.073-.069-.133-.151-.174-.243-.04-.092-.063-.192-.064-.292-.002-.101.016-.201.054-.295.038-.093.094-.178.165-.25.071-.07.156-.126.25-.164.093-.038.193-.056.294-.055.1.002.2.024.292.065.092.041.174.1.243.174l1.715 1.714 1.715-1.714c.142-.133.33-.205.525-.201.194.003.38.082.517.22.137.137.216.322.22.516.003.195-.07.383-.202.525z',
              }),
            ),
          )
        }
      I.metadata = { width: 24, height: 24 }
      var w = I,
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [S.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            u.a.createElement(
              'g',
              null,
              u.a.createElement('path', {
                d: 'M21.248 10.242c-.098 0-.196.02-.287.057-.09.038-.173.094-.243.163-.07.07-.125.153-.162.244-.038.091-.057.189-.057.287v1.839c.012 1.1-.195 2.19-.608 3.21-.414 1.019-1.026 1.945-1.8 2.726-.698-.957-1.61-1.736-2.665-2.275-1.055-.538-2.22-.821-3.405-.825h-.04c-1.185.003-2.353.286-3.408.824-1.055.539-1.968 1.319-2.666 2.276-.774-.78-1.386-1.707-1.799-2.726-.413-1.02-.62-2.11-.608-3.21V4.705c3.213-1.64 6.832-2.318 10.421-1.949.098.012.198.004.293-.024.095-.027.183-.073.26-.136.077-.062.14-.139.188-.226.046-.087.075-.183.084-.281.02-.198-.038-.396-.163-.55-.125-.155-.306-.254-.504-.275-4.04-.414-8.113.397-11.686 2.329-.119.064-.218.16-.287.275-.07.116-.106.249-.106.384v8.58c-.009 1.431.296 2.848.893 4.149.597 1.3 1.472 2.455 2.563 3.382.062.085.142.156.234.208h.012c1.8 1.47 3.888 2.544 6.13 3.155.111.027.227.027.338 0 2.242-.609 4.33-1.682 6.13-3.151h.015c.092-.052.171-.123.233-.209 1.092-.927 1.966-2.082 2.563-3.384.596-1.302.9-2.719.89-4.151v-1.84c0-.099-.02-.196-.058-.287-.038-.091-.093-.174-.163-.244s-.153-.124-.244-.162c-.091-.037-.19-.056-.288-.056zM12 22.227c-1.793-.499-3.476-1.331-4.96-2.453.547-.806 1.285-1.465 2.147-1.92.863-.454 1.823-.69 2.798-.686h.036c.974-.003 1.934.233 2.795.687.862.454 1.599 1.113 2.146 1.918-1.485 1.123-3.168 1.955-4.962 2.454zM12 6C9.936 6 8.52 7.369 8.21 9.66c-.151.6-.172 1.226-.061 1.835.111.609.352 1.187.705 1.695.417.394.914.692 1.457.875.543.183 1.12.246 1.69.185.569.06 1.144-.002 1.687-.185.542-.183 1.039-.481 1.455-.874.354-.508.594-1.087.705-1.696.111-.609.09-1.235-.06-1.835C15.475 7.369 14.06 6 12 6zm2.014 6.2c-.282.22-.606.382-.952.477-.345.094-.706.119-1.062.073-.356.046-.717.022-1.063-.073-.347-.094-.67-.256-.954-.477-.388-.715-.49-1.552-.283-2.339.142-1.077.66-2.361 2.3-2.361 1.641 0 2.155 1.284 2.3 2.361.205.788.102 1.624-.288 2.339h.002zM24 4c0 .199-.079.39-.22.53-.14.141-.33.22-.53.22h-2.425v2.425c0 .199-.079.39-.22.53-.14.141-.33.22-.53.22-.199 0-.39-.079-.53-.22-.14-.14-.22-.331-.22-.53V4.75H16.9c-.199 0-.39-.079-.53-.22-.14-.14-.22-.331-.22-.53s.08-.39.22-.53c.14-.141.331-.22.53-.22h2.425V.825c0-.199.08-.39.22-.53.14-.141.331-.22.53-.22.2 0 .39.079.53.22.141.14.22.331.22.53V3.25h2.425c.2 0 .39.079.53.22.141.14.22.331.22.53z',
              }),
            ),
          )
        }
      T.metadata = { width: 24, height: 24 }
      var K,
        M = T,
        R = n('boUI'),
        L = Object.freeze({ PromoteModerator: 'PROMOTE_MODERATOR', DemoteModerator: 'DEMOTE_MODERATOR' }),
        x = C.a.g30bc699,
        O = C.a.e585d844,
        A = C.a.cab7c6f8,
        j = C.a.af40a8ef,
        N = C.a.e96d5254,
        P = C.a.f348a395,
        B = C.a.c3a1aebd,
        H = C.a.c273c8a6,
        D = C.a.e68b09b4,
        U = C.a.c0eb2a52,
        V = C.a.a5808125,
        z = {
          confirmButtonLabel: j,
          headline: A,
          text: function (e) {
            return u.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'd46c6e8f' },
              u.a.createElement(f.a, { screenName: e }),
            )
          },
        },
        q = {
          confirmButtonLabel: D,
          headline: H,
          text: function (e) {
            return u.a.createElement(
              C.a.I18NFormatMessage,
              { $i18n: 'c3a1f2be' },
              u.a.createElement(f.a, { screenName: e }),
            )
          },
        },
        Q = void 0 !== K ? K : (K = n('7xtl'))
      t.a = function (e) {
        var t = u.a.useContext(d.a),
          n = t.featureSwitches,
          a = t.loggedInUserId,
          r = n.isTrue('c9s_edit_moderators_enabled'),
          o = e.communityId,
          s = e.communityRole,
          f = e.recordId,
          v = e.screenName,
          E = e.userId,
          C = u.a.useState(null),
          S = c()(C, 2),
          F = S[0],
          I = S[1],
          T = Object(p.c)(),
          K = k()(Q),
          A = c()(K, 2),
          j = A[0],
          H = A[1],
          D = u.a.useCallback(
            function (e) {
              var t = e.communityId,
                n = e.errorMessage,
                a = e.recordId,
                l = e.role,
                r = (e.screenName, e.successMessage),
                i = e.userId
              j({
                variables: { communityId: t, userId: i, role: l },
                updater: function (e) {
                  var n = e.get(a)
                  null == n || n.setValue(l, 'community_role(community_id:"'.concat(t, '")')),
                    T(g.b.updateOne(''.concat(t, '_').concat(i), { role: l }))
                },
                onCompleted: function () {
                  T(Object(m.b)({ text: r }))
                },
                onError: function () {
                  T(Object(m.b)({ text: n }))
                },
              })
            },
            [j, T],
          ),
          W = u.a.useCallback(
            function (e) {
              var t,
                n,
                a,
                l,
                r = e.communityId,
                o = e.recordId,
                c = e.roleAction,
                s = e.screenName,
                u = e.userId
              switch (c) {
                case L.PromoteModerator:
                  ;(t = z), (a = y.a.Moderator), (l = N({ screenName: s })), (n = P({ screenName: s }))
                  break
                case L.DemoteModerator:
                  ;(t = q), (a = y.a.Member), (l = U({ screenName: s })), (n = V({ screenName: s }))
                  break
                default:
                  return
              }
              I(
                i()(
                  i()({}, t),
                  {},
                  {
                    text: t.text(s),
                    onConfirm: function () {
                      D({
                        communityId: r,
                        errorMessage: n,
                        recordId: o,
                        role: a,
                        screenName: s,
                        successMessage: l,
                        userId: u,
                      }),
                        I(null)
                    },
                    onCancel: function () {
                      I(null)
                    },
                  },
                ),
              )
            },
            [D],
          ),
          J = u.a.useCallback(
            function (e) {
              var t = []
              if (r)
                switch (s) {
                  case y.a.Moderator:
                    t.push({
                      behavioralEventContext: { viewType: 'remove_moderator' },
                      disabled: H,
                      text: B,
                      Icon: w,
                      onClick: function () {
                        return W({
                          communityId: o,
                          recordId: f,
                          roleAction: L.DemoteModerator,
                          screenName: v,
                          userId: E,
                        })
                      },
                    })
                    break
                  case y.a.Member:
                    t.push({
                      behavioralEventContext: { viewType: 'add_moderator' },
                      disabled: H,
                      text: O,
                      Icon: M,
                      onClick: function () {
                        return W({
                          communityId: o,
                          recordId: f,
                          roleAction: L.PromoteModerator,
                          screenName: v,
                          userId: E,
                        })
                      },
                    })
                }
              return (
                t.push({
                  behavioralEventContext: { viewType: 'view_profile' },
                  text: x({ screenName: v }),
                  Icon: R.a,
                  link: '/'.concat(v),
                }),
                u.a.createElement(b.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
              )
            },
            [o, W, r, f, s, H, v, E],
          )
        return E !== a
          ? u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(h.a, { renderActionMenu: J }),
              F
                ? u.a.createElement(
                    _.a,
                    l()(
                      {
                        confirmButtonType: 'primary',
                        onCancel: function () {
                          I(null)
                        },
                      },
                      F,
                    ),
                  )
                : null,
            )
          : null
      }
    },
    yUT0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditThemeScreen', function () {
          return I
        })
      var a = n('ddV6'),
        l = n.n(a),
        r = (n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('ERkP')),
        i = n.n(r),
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
        g = n('MWbm'),
        f = n('X00g'),
        b = n('/yvb'),
        h = n('uI9t'),
        _ = n('rHpw'),
        v = p.a.dbda7beb,
        k = p.a.i2209530,
        E = p.a.hcf35d0c,
        C = p.a.da48b72c,
        S = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        F = {}
      function I(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.editTheme,
          r = e.history,
          o = t.id_str,
          c = t.theme,
          s = f.a.getCommunityBackgroundColorName(c),
          u = i.a.useState(!1),
          y = l()(u, 2),
          p = y[0],
          _ = y[1],
          I = i.a.useState(Object(d.e)(t)),
          T = l()(I, 2),
          K = T[0],
          M = T[1],
          R = i.a.useState(f.a.getCommunityThemeDisplayName(K)),
          L = l()(R, 2),
          x = L[0],
          O = L[1],
          A = i.a.useState(s),
          j = l()(A, 2),
          N = j[0],
          P = j[1],
          B = i.a.useState([]),
          H = l()(B, 2),
          D = H[0],
          U = H[1]
        i.a.useEffect(
          function () {
            var e
            return (
              U(
                ((e = []),
                S.forEach(function (t) {
                  var n = f.a.getCommunityTheme(t),
                    a = f.a.getCommunityBackgroundColorName(n)
                  ;(F[a] = t), e.push({ accessibilityLabel: f.a.getCommunityThemeDisplayName(t), colorName: a })
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
        var V = i.a.useCallback(
            function () {
              a(o, { theme: K })
                .then(function () {
                  r.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [o, K, a, r, n],
          ),
          z = i.a.createElement(
            b.a,
            { accessibilityLabel: E({ themeName: x }), disabled: !p, onPress: V, size: 'small', type: 'brandFilled' },
            k,
          )
        return i.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: r, rightControl: z, title: v },
          i.a.createElement(
            g.a,
            { style: w.themePickerContainer },
            i.a.createElement(h.a, {
              accessibilityLabel: C,
              layout: 'two-rows',
              onChange: function (e) {
                var n = F[e],
                  a = n !== Object(d.e)(t)
                M(n), O(f.a.getCommunityThemeDisplayName(n)), P(e), _(a)
              },
              options: D,
              value: N,
            }),
          ),
        )
      }
      var w = _.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      t.default = u(I)
    },
    zakg: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        l,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'CommunityInviteButtonQuery',
            selections: [
              {
                alias: 'community',
                args: (l = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'CommunityInviteButton_community' }],
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
            name: 'CommunityInviteButtonQuery',
            selections: [
              {
                alias: 'community',
                args: l,
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
                    name: 'invites_result',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          (r = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                        ],
                        type: 'CommunityInvites',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  r,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'OgVu1WJu62PoPazegBf3mw',
            metadata: {},
            name: 'CommunityInviteButtonQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '9533cbfb5394a4601514cbc83020138b'), (t.default = i)
    },
    zum0: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommunitiesCreateButton_create_community_action_result',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }],
        type: 'CommunityCreateActionResult',
        abstractKey: '__isCommunityCreateActionResult',
        hash: '4ec23170ec30a580f998dd33b20018aa',
      }
      t.default = a
    },
  },
])
//# sourceMappingURL=WIPED
