(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5301: function(e, r, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(120)
            }])
        },
        3010: function(e, r, s) {
            "use strict";
            s.d(r, {
                Z: function() {
                    return i
                }
            });
            var t = s(5893),
                n = s(6010);

            function i(e) {
                var r = e.value,
                    s = e.children;
                return (0, t.jsx)("span", {
                    className: (0, n.Z)("Easy" === r ? "text-emerald-500" : null, "Medium" === r ? "text-yellow-500" : null, "Hard" === r ? "text-red-500" : null),
                    children: null !== s && void 0 !== s ? s : r
                })
            }
        },
        120: function(e, r, s) {
            "use strict";
            s.r(r), s.d(r, {
                __N_SSP: function() {
                    return ne
                },
                default: function() {
                    return ie
                }
            });
            var t = s(5893),
                n = s(8319);

            function i(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var s = 0, t = new Array(r); s < r; s++) t[s] = e[s];
                return t
            }

            function l(e, r, s) {
                return r in e ? Object.defineProperty(e, r, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = s, e
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, r) {
                    if (!e) return;
                    if ("string" === typeof e) return i(e, r);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return i(e, r)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var o = 1.96,
                c = {
                    Easy: 0,
                    Medium: 1,
                    Hard: 2
                },
                d = {
                    array: 0,
                    string: 1,
                    matrix: 2,
                    "binary-search": 3,
                    graph: 4,
                    "binary-search-tree": 5,
                    "binary-tree": 6,
                    "hash-table": 10,
                    recursion: 11,
                    "linked-list": 12,
                    stack: 13,
                    queue: 14,
                    heap: 15,
                    trie: 16,
                    "dynamic-programming": 20,
                    binary: 21,
                    math: 22
                };

            function u(e, r) {
                return a(e).sort((function(e, s) {
                    switch (r) {
                        case "all_rounded":
                            return e.priority - s.priority;
                        case "topics":
                            return d[e.topic] - d[s.topic];
                        case "difficulty":
                            return c[e.difficulty] - c[s.difficulty]
                    }
                }))
            }

            function m(e) {
                var r = {
                    Easy: [],
                    Medium: [],
                    Hard: []
                };
                return e.forEach((function(e) {
                        r[e.difficulty].push(e)
                    })),
                    function(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var s = null != arguments[r] ? arguments[r] : {},
                                t = Object.keys(s);
                            "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(s, e).enumerable
                            })))), t.forEach((function(r) {
                                l(e, r, s[r])
                            }))
                        }
                        return e
                    }({}, r)
            }

            function f(e) {
                return Object.keys(e).forEach((function(r) {
                    u(e[r], "difficulty")
                })), e
            }
            var x = s(2806),
                h = s(7294),
                p = s(5131),
                g = s(8346),
                y = s(3010),
                b = s(8137),
                v = s(6010),
                j = s(3801);

            function w(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var s = 0, t = new Array(r); s < r; s++) t[s] = e[s];
                return t
            }

            function N(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var s = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != s) {
                        var t, n, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (s = s.call(e); !(l = (t = s.next()).done) && (i.push(t.value), !r || i.length !== r); l = !0);
                        } catch (o) {
                            a = !0, n = o
                        } finally {
                            try {
                                l || null == s.return || s.return()
                            } finally {
                                if (a) throw n
                            }
                        }
                        return i
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" === typeof e) return w(e, r);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return w(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = ["Easy", "Medium", "Hard"];

            function S(e) {
                var r = e.allTopics,
                    s = e.initialTopics,
                    n = e.submitTopics,
                    i = e.isOpen,
                    l = e.onClose,
                    a = (0, h.useState)(s),
                    o = a[0],
                    c = a[1];
                return (0, t.jsx)(p.u.Root, {
                    show: i,
                    as: h.Fragment,
                    children: (0, t.jsx)(g.V, {
                        as: "div",
                        className: "fixed z-10 inset-0 overflow-y-auto",
                        onClose: l,
                        children: (0, t.jsxs)("div", {
                            className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                            children: [(0, t.jsx)(p.u.Child, {
                                as: h.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, t.jsx)(g.V.Overlay, {
                                    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                })
                            }), (0, t.jsx)("span", {
                                className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                                "aria-hidden": "true",
                                children: "\u200b"
                            }), (0, t.jsx)(p.u.Child, {
                                as: h.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                children: (0, t.jsxs)("div", {
                                    className: "relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6",
                                    children: [(0, t.jsx)("div", {
                                        children: (0, t.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, t.jsx)(g.V.Title, {
                                                as: "h3",
                                                className: "text-lg leading-6 font-medium text-gray-900 mb-3",
                                                children: "Select Topics"
                                            }), (0, t.jsx)("div", {
                                                className: "mt-2",
                                                children: (0, t.jsx)("p", {
                                                    className: "text-sm text-gray-500 space-y-1",
                                                    children: Array.from(r).sort().map((function(e) {
                                                        return (0, t.jsxs)("div", {
                                                            className: "relative flex items-start",
                                                            children: [(0, t.jsx)("div", {
                                                                className: "flex items-center h-5",
                                                                children: (0, t.jsx)("input", {
                                                                    id: e,
                                                                    name: e,
                                                                    type: "checkbox",
                                                                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",
                                                                    checked: o.has(e),
                                                                    onChange: function() {
                                                                        var r = new Set(o);
                                                                        r.has(e) ? (r.delete(e), c(r)) : c(r.add(e))
                                                                    }
                                                                })
                                                            }), (0, t.jsx)("div", {
                                                                className: "ml-3 text-sm",
                                                                children: (0, t.jsx)("label", {
                                                                    htmlFor: e,
                                                                    className: "font-medium text-gray-700",
                                                                    children: e.split("-").map(b.Z).join(" ")
                                                                })
                                                            })]
                                                        }, e)
                                                    }))
                                                })
                                            })]
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "mt-5 sm:mt-6 space-y-2",
                                        children: [(0, t.jsxs)("div", {
                                            className: "relative z-0 flex shadow-sm rounded-md",
                                            children: [(0, t.jsx)("button", {
                                                type: "button",
                                                className: "relative inline-flex grow justify-center items-center px-2.5 py-1.5 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                                                onClick: function() {
                                                    c(r)
                                                },
                                                children: "Select all"
                                            }), (0, t.jsx)("button", {
                                                type: "button",
                                                className: "-ml-px relative inline-flex grow justify-center items-center px-2.5 py-1.5 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                                                onClick: function() {
                                                    c(new Set)
                                                },
                                                children: "Clear all"
                                            })]
                                        }), (0, t.jsx)("button", {
                                            type: "button",
                                            className: "inline-flex justify-center w-full items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                            onClick: function() {
                                                n(o), l()
                                            },
                                            children: "Done"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }

            function C(e) {
                var r = e.allTopics,
                    s = e.topics,
                    n = e.setTopics,
                    i = e.difficulties,
                    l = e.setDifficulties,
                    a = e.hoursPerWeek,
                    o = e.weeks,
                    c = e.willIgnorePreferences,
                    d = e.setHoursPerWeek,
                    u = e.setWeeks,
                    m = (0, h.useState)(!1),
                    f = m[0],
                    p = m[1],
                    g = (0, h.useState)(!1),
                    b = g[0],
                    w = g[1];
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("button", {
                        className: (0, v.Z)("text-xs w-full flex justify-between bg-indigo-600 text-white px-4 py-4 sm:px-6 lg:px-8", b ? "hidden" : "lg:hidden"),
                        onClick: function() {
                            return w(!0)
                        },
                        children: [(0, t.jsx)("div", {
                            children: "Change question preferences"
                        }), (0, t.jsx)(j.v4q, {
                            className: "h-4 w-4",
                            "aria-hidden": "true"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: (0, v.Z)(!b && "hidden lg:block"),
                        children: [(0, t.jsxs)("div", {
                            className: "text-xs flex items-center justify-between bg-indigo-600 text-white px-4 py-4 sm:px-6 lg:px-8",
                            children: [(0, t.jsx)("div", {
                                children: "Indicate your preferences and we will recommend the best LeetCode questions for you to practice."
                            }), (0, t.jsx)("button", {
                                className: (0, v.Z)("lg:hidden shrink-0 inline-flex items-center border border-transparent py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1", "text-white-500 hover:text-white-600 focus:ring-white-500"),
                                onClick: function() {
                                    return w(!1)
                                },
                                children: (0, t.jsx)(j.g8U, {
                                    className: "h-4 w-4",
                                    "aria-hidden": "true"
                                })
                            })],
                            style: {
                                display: "none"
                            }
                        }), c && (0, t.jsx)("div", {
                            className: "text-xs bg-yellow-400 text-gray-900 px-4 py-4 sm:px-6 lg:px-8",
                            children: 'Preferences will be ignored since you have selected to "View All Questions"'
                        }), (0, t.jsxs)("div", {
                            className: "sm:flex xl:block",
                            children: [(0, t.jsx)("div", {
                                className: "grow shrink basis-0 px-4 py-4 sm:px-6 lg:px-8",
                                children: (0, t.jsxs)("fieldset", {
                                    className: "space-y-1",
                                    children: [(0, t.jsx)("legend", {
                                        className: "text-xs font-semibold uppercase",
                                        children: "Schedule"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex sm:block sm:space-y-1 space-x-2 sm:space-x-0",
                                        children: [(0, t.jsxs)("div", {
                                            className: "space-y-1 grow shrink basis-0",
                                            children: [(0, t.jsx)("div", {
                                                children: (0, t.jsxs)("label", {
                                                    className: "text-xs",
                                                    htmlFor: "weeks",
                                                    children: [o, " week", 1 !== o && "s"]
                                                })
                                            }), (0, t.jsx)("div", {
                                                children: (0, t.jsxs)(x.fC, {
                                                    className: "relative flex items-center w-full h-4",
                                                    id: "weeks",
                                                    value: [o],
                                                    max: 26,
                                                    step: 1,
                                                    onValueChange: function(e) {
                                                        var r = N(e, 1)[0];
                                                        return u(r)
                                                    },
                                                    children: [(0, t.jsx)(x.fQ, {
                                                        className: "bg-gray-300 relative flex-grow-1 rounded w-full !h-2",
                                                        children: (0, t.jsx)(x.e6, {
                                                            className: "absolute bg-indigo-600 rounded h-full"
                                                        })
                                                    }), (0, t.jsx)(x.bU, {
                                                        className: "block w-5 h-5 bg-indigo-600 shadow-sm rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    })]
                                                })
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "space-y-1 grow shrink basis-0",
                                            children: [(0, t.jsx)("div", {
                                                children: (0, t.jsxs)("label", {
                                                    className: "text-xs",
                                                    htmlFor: "hours",
                                                    children: [a, " hour", 1 !== a && "s", " per week"]
                                                })
                                            }), (0, t.jsx)("div", {
                                                children: (0, t.jsxs)(x.fC, {
                                                    className: "relative flex items-center w-full h-4",
                                                    id: "hours",
                                                    value: [a],
                                                    max: 40,
                                                    step: 1,
                                                    onValueChange: function(e) {
                                                        var r = N(e, 1)[0];
                                                        return d(r)
                                                    },
                                                    children: [(0, t.jsx)(x.fQ, {
                                                        className: "bg-gray-300 relative flex-grow-1 rounded w-full !h-2",
                                                        children: (0, t.jsx)(x.e6, {
                                                            className: "absolute bg-indigo-600 rounded h-full"
                                                        })
                                                    }), (0, t.jsx)(x.bU, {
                                                        className: "block w-5 h-5 bg-indigo-600 shadow-sm rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "grow shrink basis-0 space-y-2 border-t border-gray-300 px-4 py-4 sm:px-6 lg:px-8",
                                children: (0, t.jsxs)("fieldset", {
                                    className: "space-y-1",
                                    children: [(0, t.jsx)("legend", {
                                        className: "text-xs font-semibold uppercase",
                                        children: "Difficulty"
                                    }), (0, t.jsx)("div", {
                                        className: "flex sm:block sm:space-y-1",
                                        children: k.map((function(e) {
                                            return (0, t.jsxs)("div", {
                                                className: "relative flex items-start grow shrink basis-0",
                                                children: [(0, t.jsx)("div", {
                                                    className: "flex items-center h-5",
                                                    children: (0, t.jsx)("input", {
                                                        id: e,
                                                        name: e,
                                                        type: "checkbox",
                                                        className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",
                                                        checked: i.has(e),
                                                        onChange: function() {
                                                            var r = new Set(i);
                                                            r.has(e) ? (r.delete(e), l(r)) : l(r.add(e))
                                                        }
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "ml-3 text-sm",
                                                    children: (0, t.jsx)("label", {
                                                        htmlFor: e,
                                                        className: "font-medium text-gray-700",
                                                        children: (0, t.jsx)(y.Z, {
                                                            value: e
                                                        })
                                                    })
                                                })]
                                            }, e)
                                        }))
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "grow shrink basis-0 space-y-2 border-t border-gray-300 px-4 py-4 sm:px-6 lg:px-8",
                                children: (0, t.jsxs)("fieldset", {
                                    className: "space-y-2",
                                    children: [(0, t.jsx)("legend", {
                                        className: "text-xs font-semibold uppercase",
                                        children: "Topics"
                                    }), (0, t.jsxs)("div", {
                                        className: "text-xs",
                                        children: [0 === s.size ? "No" : s.size === r.size ? "All" : s.size, " ", "topic", s.size > 1 && "s", " selected (", (0, t.jsx)("a", {
                                            type: "button",
                                            className: "text-indigo-500 hover:underline",
                                            href: "#",
                                            onClick: function() {
                                                p(!0)
                                            },
                                            children: "Change"
                                        }), ")"]
                                    }), (0, t.jsx)(S, {
                                        isOpen: f,
                                        onClose: function() {
                                            p(!1)
                                        },
                                        allTopics: r,
                                        initialTopics: s,
                                        submitTopics: n
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            }
            var A = s(3153),
                q = s(5339),
                O = s(1664);

            function T(e) {
                var r = e.index,
                    s = e.question,
                    n = e.showTopics,
                    i = e.isCompleted,
                    l = e.setIsCompleted;
                return (0, t.jsxs)("div", {
                    className: (0, v.Z)("flex items-center text-sm font-medium text-gray-90 px-4 md:px-6 py-4 space-x-6 text-gray-600", i && "bg-emerald-50"),
                    role: "listitem",
                    suppressHydrationWarning: !0,
                    children: [(0, t.jsx)("div", {
                        className: "shrink-0 text-xl w-8 text-center",
                        children: r
                    }), (0, t.jsxs)("div", {
                        className: "grow",
                        children: [(0, t.jsx)("div", {
                            className: "space-y-1",
                            children: (0, t.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [(0, t.jsx)("a", {
                                    className: (0, v.Z)("text-indigo-600 text-base hover:underline"),
                                    href: s.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: s.title
                                }), s.premium && (0, t.jsx)(j.khe, {
                                    "aria-label": "LeetCode Premium question",
                                    className: "inline h-5 w-5 text-amber-500"
                                })]
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [(0, t.jsx)(y.Z, {
                                value: s.difficulty
                            }), (0, t.jsx)("span", {
                                className: "not-sr-only",
                                children: "\xb7"
                            }), (0, t.jsxs)("span", {
                                children: [s.duration, " mins"]
                            }), n && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    className: "not-sr-only",
                                    children: "\xb7"
                                }), (0, t.jsx)("span", {
                                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800",
                                    children: s.topic.split("-").map(b.Z).join(" ")
                                })]
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: "shrink",
                        children: (0, t.jsx)("button", {
                            "aria-label": "Mark ".concat(s.title, " as ").concat(i ? "incomplete" : "complete"),
                            className: (0, v.Z)("inline-flex items-center border border-transparent p-0 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1", i ? "text-emerald-500 hover:text-emerald-600 focus:ring-emerald-500" : "text-gray-300  hover:text-gray-400 focus:ring-gray-300"),
                            suppressHydrationWarning: !0,
                            type: "button",
                            onClick: function() {
                                l(!i)
                            },
                            children: (0, t.jsx)(j.rE2, {
                                className: "h-8 w-8",
                                "aria-hidden": "true"
                            })
                        })
                    })]
                }, Math.random())
            }

            function _(e) {
                var r = e.completed,
                    s = e.total;
                return 0 === s ? null : (0, t.jsx)("div", {
                    className: (0, v.Z)("h-3 w-full"),
                    children: (0, t.jsx)("div", {
                        className: "bg-gray-300 relative flex-grow-1 rounded-lg w-full h-full overflow-clip",
                        children: (0, t.jsx)("div", {
                            className: "bg-emerald-500 h-full w-full origin-left transition-transform duration-500",
                            role: "progressbar",
                            "aria-valuenow": r,
                            "aria-valuemin": 0,
                            "aria-valuemax": s,
                            style: {
                                transform: "scaleX(".concat(r / s, ")")
                            }
                        })
                    })
                })
            }

            function E(e) {
                var r = e.title,
                    s = e.questions,
                    n = e.completedQuestions,
                    i = e.showTopics,
                    l = e.toggleComplete,
                    a = s.reduce((function(e, r) {
                        return e + (n.includes(r.slug) ? 1 : 0)
                    }), 0),
                    o = a === s.length,
                    c = (0, h.useState)(!o),
                    d = c[0],
                    u = c[1];
                return (0, t.jsxs)("div", {
                    className: "bg-white",
                    children: [(0, t.jsxs)("button", {
                        className: (0, v.Z)("w-full flex items-center justify-between md:sticky md:top-16 bg-white border border-gray-300 font-semibold text-base md:text-lg text-black px-4 md:px-6 py-4 space-x-6"),
                        "aria-label": "".concat(d ? "Close" : "Expand", " ").concat(r, " section"),
                        type: "button",
                        onClick: function() {
                            u(!d)
                        },
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center space-x-2 shrink-0",
                            children: [(0, t.jsx)("h2", {
                                children: r.split("-").map(b.Z).join(" ")
                            }), o && (0, t.jsx)("span", {
                                className: "hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 uppercase",
                                children: "Completed"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex space-x-4 items-center grow md:grow-0 min-w-[50%]",
                            children: [(0, t.jsxs)("div", {
                                className: (0, v.Z)("text-sm shrink-0", {
                                    "text-emerald-500": o
                                }),
                                suppressHydrationWarning: !0,
                                children: [a, " / ", s.length]
                            }), (0, t.jsx)("div", {
                                className: "grow",
                                suppressHydrationWarning: !0,
                                children: (0, t.jsx)(_, {
                                    completed: a,
                                    total: s.length
                                })
                            }), (0, t.jsx)("span", {
                                className: (0, v.Z)("inline-flex items-center border border-transparent p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1", "text-slate-500 hover:text-slate-600 focus:ring-slate-500"),
                                children: d ? (0, t.jsx)(j.g8U, {
                                    className: "h-6 w-6",
                                    "aria-hidden": "true"
                                }) : (0, t.jsx)(j.v4q, {
                                    className: "h-6 w-6",
                                    "aria-hidden": "true"
                                })
                            })]
                        })]
                    }), d && (0, t.jsx)("div", {
                        className: "border-x border-b border-gray-300 divide-y divide-gray-300",
                        role: "list",
                        children: s.map((function(e, r) {
                            return (0, t.jsx)(T, {
                                index: r + 1,
                                question: e,
                                showTopics: i,
                                isCompleted: n.includes(e.slug),
                                setIsCompleted: function(r) {
                                    l(e, r)
                                }
                            }, e.slug)
                        }))
                    })]
                }, r)
            }

            function P(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var s = 0, t = new Array(r); s < r; s++) t[s] = e[s];
                return t
            }

            function F(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var s = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != s) {
                        var t, n, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (s = s.call(e); !(l = (t = s.next()).done) && (i.push(t.value), !r || i.length !== r); l = !0);
                        } catch (o) {
                            a = !0, n = o
                        } finally {
                            try {
                                l || null == s.return || s.return()
                            } finally {
                                if (a) throw n
                            }
                        }
                        return i
                    }
                }(e, r) || Z(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return P(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Z(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(e, r) {
                if (e) {
                    if ("string" === typeof e) return P(e, r);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(s) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? P(e, r) : void 0
                }
            }
            var Q = [{
                    label: "Based on Preferences",
                    value: "preferences"
                }, {
                    label: "View All Questions",
                    value: "all"
                }],
                W = [{
                    label: "All Rounded",
                    value: "all_rounded"
                }, {
                    label: "Order by Difficulty",
                    value: "difficulty"
                }, {
                    label: "Order by Topics",
                    value: "topics"
                }],
                G = [{
                    label: "No Grouping",
                    value: "none"
                }, {
                    label: "Group by Weeks",
                    value: "weeks"
                }, {
                    label: "Group by Topics",
                    value: "topics"
                }, {
                    label: "Group by Difficulty",
                    value: "difficulty"
                }];

            function M(e) {
                var r = e.allQuestionsLength;
                return (0, t.jsx)("div", {
                    className: "rounded-md bg-yellow-50 p-4",
                    children: (0, t.jsxs)("div", {
                        className: "flex",
                        children: [(0, t.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, t.jsx)(A.AV5, {
                                className: "h-5 w-5 text-yellow-400",
                                "aria-hidden": "true"
                            })
                        }), (0, t.jsx)("div", {
                            className: "ml-3 flex-1 md:flex md:justify-between",
                            children: (0, t.jsxs)("p", {
                                className: "text-sm text-yellow-700",
                                children: ["You are being shown all ", r, " recommended questions.", " ", (0, t.jsx)(O.default, {
                                    href: "/faq",
                                    children: (0, t.jsxs)("a", {
                                        className: "text-yellow-600 underline font-medium",
                                        children: ["Why are there only ", n.length, " questions?"]
                                    })
                                })]
                            })
                        })]
                    })
                })
            }

            function z() {
                return (0, t.jsx)("div", {
                    className: "rounded-md bg-green-50 p-4",
                    children: (0, t.jsxs)("div", {
                        className: "flex",
                        children: [(0, t.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, t.jsx)(j.tWY, {
                                className: "h-5 w-5 text-green-600",
                                "aria-hidden": "true"
                            })
                        }), (0, t.jsx)("div", {
                            className: "ml-3 flex-1 md:flex md:justify-between",
                            children: (0, t.jsxs)("p", {
                                className: "text-sm text-green-700",
                                children: ["You can now bookmark the page to save your preferences! We also recently changed the questions presentation settings. Refer to the", " ", (0, t.jsx)(O.default, {
                                    href: "/changelog",
                                    children: (0, t.jsx)("a", {
                                        className: "text-green-600 underline font-medium",
                                        children: "changelog"
                                    })
                                }), " ", "for more details."]
                            })
                        })]
                    })
                })
            }

            function H() {
                return (0, t.jsxs)("div", {
                    className: "text-center py-1",
                    children: [(0, t.jsx)(j.kSp, {
                        "aria-hidden": !0,
                        className: "mx-auto h-12 w-12 text-gray-400"
                    }), (0, t.jsx)("h3", {
                        className: "mt-2 text-sm font-medium text-gray-900",
                        children: "No questions to recommend"
                    }), (0, t.jsx)("p", {
                        className: "mt-1 text-sm text-gray-500",
                        children: "Change your question preferences."
                    })]
                })
            }

            function D(e) {
                var r, s = e.allQuestionsSelected,
                    n = e.questions,
                    i = e.hoursPerWeek,
                    a = e.weeks,
                    c = e.questionsMode,
                    d = e.setQuestionsMode,
                    u = e.questionsOrder,
                    x = e.setQuestionsOrder,
                    h = e.questionsGrouping,
                    p = e.setQuestionsGrouping,
                    g = function(e, r) {
                        D(r ? I(Z).concat([e.slug]) : Z.filter((function(r) {
                            return r !== e.slug
                        })))
                    },
                    v = F((0, q._)("1:showTopics", !1), 2),
                    j = v[0],
                    w = v[1],
                    N = m(n),
                    k = function(e) {
                        var r = {};
                        return e.forEach((function(e) {
                            var s = e.topic;
                            r.hasOwnProperty(s) || (r[s] = []), r[s].push(e)
                        })), f(r)
                    }(n),
                    S = (r = n, Math.ceil(r.reduce((function(e, r) {
                        return r.duration * o + e
                    }), 0))),
                    C = Math.ceil(S / 60),
                    A = i * a,
                    P = F((0, q._)("1:completedQuestions", []), 2),
                    Z = P[0],
                    D = P[1];
                if (0 === n.length) return (0, t.jsx)(H, {});
                var U = n.reduce((function(e, r) {
                        return e + (Z.includes(r.slug) ? 1 : 0)
                    }), 0),
                    V = "all" === c,
                    L = function() {
                        switch (h) {
                            case "difficulty":
                                return N;
                            case "weeks":
                                return function(e, r, s) {
                                    var t = 60 * s,
                                        n = 1,
                                        i = 0,
                                        a = l({}, "Week ".concat(n), []);
                                    return e.forEach((function(e) {
                                        var s = e.duration * o;
                                        n < r && i + s > t && (i = 0, a["Week ".concat(n += 1)] = []), a["Week ".concat(n)].push(e), i += s
                                    })), f(a)
                                }(n, a, i);
                            case "topics":
                            default:
                                return k
                        }
                    }(),
                    R = (0, t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsx)("label", {
                                htmlFor: "questions_mode",
                                className: "sr-only",
                                children: "Viewing Mode"
                            }), (0, t.jsx)("select", {
                                id: "questions_mode",
                                name: "questions_mode",
                                className: "-ml-px pl-3 pr-10 py-2 text-sm font-medium border-gray-300 focus:z-10 focus:outline-none focus-ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-md",
                                value: c,
                                onChange: function(e) {
                                    return d(e.target.value)
                                },
                                children: Q.map((function(e) {
                                    var r = e.label,
                                        s = e.value;
                                    return (0, t.jsx)("option", {
                                        value: s,
                                        children: r
                                    }, s)
                                }))
                            }), (0, t.jsx)("select", {
                                id: "questions_order",
                                name: "questions_order",
                                className: "-ml-px pl-3 pr-10 py-2 text-sm font-medium border-gray-300 focus:z-10 focus:outline-none focus-ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                                value: u,
                                onChange: function(e) {
                                    return x(e.target.value)
                                },
                                children: W.map((function(e) {
                                    var r = e.label,
                                        s = e.value;
                                    return (0, t.jsx)("option", {
                                        value: s,
                                        children: r
                                    }, s)
                                }))
                            }), (0, t.jsx)("label", {
                                htmlFor: "questions_grouping",
                                className: "sr-only",
                                children: "Questions Grouping"
                            }), (0, t.jsx)("select", {
                                id: "questions_grouping",
                                name: "questions_grouping",
                                className: "-ml-px pl-3 pr-10 py-2 text-sm font-medium border-gray-300 focus:outline-none focus-ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-r-md",
                                value: h,
                                onChange: function(e) {
                                    return p(e.target.value)
                                },
                                children: G.map((function(e) {
                                    var r = e.label,
                                        s = e.value;
                                    return (0, t.jsx)("option", {
                                        value: s,
                                        children: r
                                    }, s)
                                }))
                            })]
                        }), (0, t.jsx)("div", {
                            children: (0, t.jsx)("button", {
                                className: "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm whitespace-nowrap text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                                type: "button",
                                onClick: function() {
                                    return w(!j)
                                },
                                children: j ? "Hide topics" : "Show topics"
                            })
                        })]
                    });
                return (0, t.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, t.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0, t.jsxs)("div", {
                            className: "text-3xl sm:text-5xl font-bold",
                            children: ["Grind ", V && "all", " ", n.length, " question", 1 !== n.length && "s"]
                        }), (0, t.jsxs)("div", {
                            className: "text-gray-500",
                            children: ["Customize LeetCode study plans according to your needs. You are recommended to work on the questions in order.", " ", (0, t.jsx)(O.default, {
                                href: "/faq",
                                children: (0, t.jsx)("a", {
                                    className: "text-indigo-500 hover:underline",
                                    children: "Find out why"
                                })
                            }), "."]
                        })]
                    }), s && (0, t.jsx)(M, {
                        allQuestionsLength: n.length
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            className: "border border-gray-300 bg-white",
                            children: [(0, t.jsx)("h2", {
                                className: "text-base md:text-lg border-b border-gray-300 font-semibold text-gray-600 px-4 md:px-6 py-4",
                                children: "Questions Summary"
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col lg:flex-row",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex lg:block items-center justify-between grow shrink basis-0 border-b lg:border-b-0 lg:border-r border-gray-300 p-4 lg:p-6 space-x-2 lg:space-x-0 lg:space-y-2",
                                    children: [(0, t.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [(0, t.jsx)("h3", {
                                            className: "text-sm font-semibold text-gray-600 uppercase",
                                            children: "Time Needed"
                                        }), (0, t.jsx)("p", {
                                            className: "hidden md:block text-xs text-gray-500",
                                            children: "How long doing these questions will take for an average person. It's a conservative estimate where it is assumed that roughly the same amount of time will be needed to check the answer for each question."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "space-y-1 text-right lg:text-left shrink-0",
                                        children: [(0, t.jsxs)("div", {
                                            className: "text-sm md:text-xl font-medium",
                                            children: [C, " hour", 1 !== C && "s"]
                                        }), (0, t.jsx)("div", {
                                            className: "text-xs font-medium",
                                            children: C <= A ? (0, t.jsx)("span", {
                                                className: "text-green-500",
                                                children: "Fits into your schedule."
                                            }) : (0, t.jsxs)("span", {
                                                className: "text-rose-500",
                                                children: ["Doesn't fit into your schedule of", " ", A, " hours."]
                                            })
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex lg:block items-center justify-between grow shrink basis-0 border-b lg:border-b-0 lg:border-r border-gray-300 p-4 lg:p-6 space-x-2 lg:space-x-0 lg:space-y-2",
                                    children: [(0, t.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [(0, t.jsx)("h3", {
                                            className: "text-sm font-semibold text-gray-600 uppercase",
                                            children: "Difficulty"
                                        }), (0, t.jsx)("p", {
                                            className: "hidden md:block text-xs text-gray-500",
                                            children: "Questions grouped by difficulty"
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "flex justify-end md:justify-start space-x-4 md:space-x-8",
                                        children: Object.entries(N).map((function(e) {
                                            var r = F(e, 2),
                                                s = r[0],
                                                n = r[1];
                                            return (0, t.jsx)("div", {
                                                className: "text-sm md:text-sm font-medium",
                                                children: (0, t.jsxs)(y.Z, {
                                                    value: s,
                                                    children: [s, ": ", n.length]
                                                })
                                            }, s)
                                        }))
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "grow shrink basis-0 p-4 lg:p-6 space-y-2",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex lg:block items-center justify-between space-x-2 lg:space-x-0 lg:space-y-2",
                                        children: [(0, t.jsxs)("div", {
                                            className: "space-y-1",
                                            children: [(0, t.jsx)("h3", {
                                                className: "text-sm font-semibold text-gray-600 uppercase",
                                                children: "Topics"
                                            }), (0, t.jsx)("p", {
                                                className: "hidden md:block text-xs text-gray-500",
                                                children: "Questions grouped by topics"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "flex flex-wrap justify-end md:justify-start",
                                            children: Object.entries(k).sort((function(e, r) {
                                                var s = F(e, 1)[0],
                                                    t = F(r, 1)[0];
                                                return s.localeCompare(t)
                                            })).map((function(e) {
                                                var r = F(e, 2),
                                                    s = r[0],
                                                    n = r[1];
                                                return (0, t.jsxs)("span", {
                                                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ml-1 md:ml-0 md:mr-1 mb-1",
                                                    children: [s.split("-").map(b.Z).join(" "), ":", " ", n.length]
                                                }, s)
                                            }))
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "text-xs",
                                        children: ["Need study resources? Check out", " ", (0, t.jsx)("a", {
                                            className: "text-indigo-500 hover:underline",
                                            href: "/algorithms/study-cheatsheet/",
                                            children: "Tech Interview Handbook's algorithm study cheatsheets."
                                        })]
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex items-center space-x-4 text-base md:text-lg border-t border-gray-300 font-semibold text-gray-600 px-4 md:px-6 py-4",
                                children: [(0, t.jsxs)("h3", {
                                    className: "text-sm font-semibold text-gray-600 uppercase",
                                    suppressHydrationWarning: !0,
                                    children: ["Completed ", U, " / ", n.length]
                                }), (0, t.jsx)("div", {
                                    className: "grow",
                                    suppressHydrationWarning: !0,
                                    children: (0, t.jsx)(_, {
                                        completed: U,
                                        total: n.length
                                    })
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "pt-4",
                            children: (0, t.jsx)(z, {})
                        }), (0, t.jsx)("div", {
                            className: "bg-gray-50 md:sticky md:top-0 py-4 z-10",
                            children: R
                        }), "none" === h ? (0, t.jsx)("div", {
                            className: "bg-white border border-gray-300 divide-y divide-gray-300",
                            role: "list",
                            children: n.map((function(e, r) {
                                return (0, t.jsx)(T, {
                                    index: r + 1,
                                    question: e,
                                    showTopics: j,
                                    isCompleted: Z.includes(e.slug),
                                    setIsCompleted: function(r) {
                                        g(e, r)
                                    }
                                }, e.slug)
                            }))
                        }) : (0, t.jsx)(t.Fragment, {
                            children: (0, t.jsx)("div", {
                                className: "space-y-4",
                                children: Object.entries(L).map((function(e) {
                                    var r = F(e, 2),
                                        s = r[0],
                                        n = r[1];
                                    return (0, t.jsx)(E, {
                                        title: s,
                                        showTopics: j,
                                        questions: n,
                                        completedQuestions: Z,
                                        toggleComplete: g
                                    }, s)
                                }))
                            })
                        })]
                    })]
                })
            }
            var U = "block py-6 px-4 sm:px-6 text-xs text-white transition";

            function V(e) {
                var r = e.position;
                return (0, t.jsxs)("a", {
                    className: (0, v.Z)(U, "bg-rose-500 hover:bg-rose-600"),
                    href: "https://www.faangtechleads.com?utm_source=grind75&utm_medium=referral&utm_content=".concat(r),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: function() {
                        window.gtag("event", "faangtechleads.".concat(r, ".click"))
                    },
                    children: [(0, t.jsx)("strong", {
                        className: "text-xs block mb-1",
                        children: "Craft the Perfect Resume for FAANG"
                    }), (0, t.jsxs)("div", {
                        className: "hidden lg:block",
                        children: ["Save time crafting your resume with FAANG Tech Leads'", " ", (0, t.jsx)("u", {
                            children: "FAANG-quality resume templates and examples"
                        }), " which have helped many Software Engineers get interviews at top Bay Area companies. Grab them now for a ", (0, t.jsx)("u", {
                            children: "whopping 70% off"
                        }), "!"],
                        style: {
                            display: "none"
                        }
                    }), (0, t.jsxs)("div", {
                        className: "block lg:hidden",
                        children: ["Grab FAANG-quality resume templates and examples now for a", " ", (0, t.jsx)("u", {
                            children: "whopping 70% off"
                        }), "!"]
                    })]
                })
            }

            function L(e) {
                var r = e.position;
                return (0, t.jsxs)("a", {
                    className: (0, v.Z)(U, "bg-indigo-500 hover:bg-indigo-600"),
                    href: "https://www.greatfrontend.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: function() {
                        window.gtag("event", "gfe.".concat(r, ".click"))
                    },
                    children: [(0, t.jsx)("strong", {
                        className: "text-xs block mb-1",
                        children: "LeetCode for Front End Interviews"
                    }), "Developed by ex-FAANG Senior Engineers, ", (0, t.jsx)("u", {
                        children: "GreatFrontEnd"
                    }), " is the fastest way to prepare for a Front End Engineering interview. ", (0, t.jsx)("u", {
                        children: "Join today for a 25% discount!"
                    })]
                })
            }
            var R = h.memo((function(e) {
                    var r = e.position;
                    return (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(L, {
                            position: r
                        }), (0, t.jsx)(V, {
                            position: r
                        })]
                    })
                })),
                Y = s(8900),
                $ = s(1163);

            function X(e, r) {
                return null != r && "undefined" !== typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](e) : e instanceof r
            }

            function B(e, r) {
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Y.Z,
                    t = (0, $.useRouter)(),
                    n = (0, h.useState)(e),
                    i = n[0],
                    l = n[1],
                    a = (0, h.useRef)(!1);
                return (0, h.useEffect)((function() {
                    if ((a.current || i != e) && !s(t.query[r], i)) {
                        a.current = !0;
                        var n = new URL(window.location.href);
                        // n.searchParams.delete(r), Array.isArray(i) || X(i, Set) ? i.forEach((function(e) {
                        //     return n.searchParams.append(r, e)
                        // })) : n.searchParams.set(r, String(i)), t.replace(n.href, void 0, {
                        //     shallow: !0
                        // })
                    }
                }), [r, e, i, t, s]), [i, l]
            }

            function J(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var s = 0, t = new Array(r); s < r; s++) t[s] = e[s];
                return t
            }

            function K(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var s = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != s) {
                        var t, n, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (s = s.call(e); !(l = (t = s.next()).done) && (i.push(t.value), !r || i.length !== r); l = !0);
                        } catch (o) {
                            a = !0, n = o
                        } finally {
                            try {
                                l || null == s.return || s.return()
                            } finally {
                                if (a) throw n
                            }
                        }
                        return i
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" === typeof e) return J(e, r);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(s);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return J(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ee = new Set(["Easy", "Medium", "Hard"]),
                re = new Set(n.map((function(e) {
                    return e.topic
                })));

            function se(e) {
                var r, s, i, l, a, c = K(B(null !== (r = e.mode) && void 0 !== r ? r : "preferences", "mode"), 2),
                    d = c[0],
                    m = c[1],
                    f = K(B(null !== (s = e.order) && void 0 !== s ? s : "difficulty", "order"), 2),
                    x = f[0],
                    h = f[1],
                    p = K(B(null !== (i = e.grouping) && void 0 !== i ? i : "weeks", "grouping"), 2),
                    g = p[0],
                    y = p[1],
                    b = K(B(null == e.topics ? re : new Set(e.topics), "topics", (function(e, r) {
                        if (null == e && 0 === r.size) return !0;
                        var s = new Set(Array.isArray(e) ? e : [e]);
                        return (0, Y.Z)(s, r)
                    })), 2),
                    v = b[0],
                    j = b[1],
                    w = K(B(null == e.difficulty ? ee : new Set(e.difficulty), "difficulty", (function(e, r) {
                        if (null == e && 0 === r.size) return !0;
                        var s = new Set(Array.isArray(e) ? e : [e]);
                        return (0, Y.Z)(s, r)
                    })), 2),
                    N = w[0],
                    k = w[1],
                    S = K(B(null !== (l = e.weeks) && void 0 !== l ? l : 8, "weeks", (function(e, r) {
                        return +e === r
                    })), 2),
                    A = S[0],
                    q = S[1],
                    O = K(B(null !== (a = e.hours) && void 0 !== a ? a : 8, "hours", (function(e, r) {
                        return +e === r
                    })), 2),
                    T = O[0],
                    _ = O[1],
                    E = "all" === d ? n : function(e, r, s) {
                        for (var t = u(n, "all_rounded"), i = e, l = [], a = 0; a < t.length; a++) {
                            var c = t[a];
                            if (r.has(c.difficulty) && s.has(c.topic)) {
                                if ((i -= c.duration * o) < 0) break;
                                l.push(c)
                            }
                        }
                        return l
                    }(60 * (T * A), N, v),
                    P = u(E, x);
                return (0, t.jsx)("div", {
                    className: "mx-auto border-y border-gray-300 bg-gray-50",
                    children: (0, t.jsx)("div", {
                        className: "flex-grow w-full lg:flex",
                        children: (0, t.jsxs)("div", {
                            className: "flex-1 min-w-0 xl:flex",
                            children: [(0, t.jsx)("div", {
                                className: "border-b border-gray-300 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-300 bg-white",
                                children: (0, t.jsx)("div", {
                                    className: "h-full",
                                    children: (0, t.jsx)("div", {
                                        className: "h-full relative",
                                        children: (0, t.jsx)("div", {
                                            className: "sticky top-0",
                                            children: (0, t.jsx)(C, {
                                                allTopics: re,
                                                topics: v,
                                                setTopics: j,
                                                difficulties: N,
                                                setDifficulties: k,
                                                hoursPerWeek: T,
                                                weeks: A,
                                                willIgnorePreferences: "all" === d,
                                                setHoursPerWeek: _,
                                                setWeeks: q
                                            })
                                        })
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: "lg:min-w-0 lg:flex-1 md:flex",
                                children: [(0, t.jsx)("div", {
                                    className: "hidden md:block md:order-2 md:w-1/5 shrink-0",
                                    children: (0, t.jsx)("div", {
                                        className: "md:sticky md:top-0",
                                        children: (0, t.jsx)(R, {
                                            position: "sidebar"
                                        })
                                    }),
                                    style: {
                                        display: "none"
                                    }
                                }), (0, t.jsx)("div", {
                                    className: "h-full py-6 px-4 sm:px-6 md:order-1 grow",
                                    children: (0, t.jsx)("div", {
                                        className: "flex h-full items-center justify-center",
                                        children: (0, t.jsx)(D, {
                                            allQuestionsSelected: n.length === E.length,
                                            questions: P,
                                            questionsMode: d,
                                            setQuestionsMode: m,
                                            questionsOrder: x,
                                            setQuestionsOrder: h,
                                            questionsGrouping: g,
                                            setQuestionsGrouping: y,
                                            hoursPerWeek: T,
                                            weeks: A
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                })
            }

            function te(e, r, s) {
                return r in e ? Object.defineProperty(e, r, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = s, e
            }
            var ne = !0;

            function ie(e) {
                return (0, t.jsx)(se, function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var s = null != arguments[r] ? arguments[r] : {},
                            t = Object.keys(s);
                        "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(s, e).enumerable
                        })))), t.forEach((function(r) {
                            te(e, r, s[r])
                        }))
                    }
                    return e
                }({}, e))
            }
        }
    },
    function(e) {
        e.O(0, [19, 319, 774, 888, 179], (function() {
            return r = 5301, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);