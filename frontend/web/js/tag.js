﻿(function (p, q, y) {
    function B(a, b, d) {
        return function () {
            try {
                return a.apply(this, arguments)
            } catch (f) {
                d || jb(f, b)
            }
        }
    }

    function jb(a, b) {
        var d;
        if (.01 > Math.random()) try {
            var f = a && a.message || "";
            (d = -1 < f.indexOf("network error occurred") || -1 < f.indexOf("send beacon") && -1 < f.indexOf("Content Security Policy")) || (new Na).log("jserrs", Aa, a.message, b, L.href, "", "string" === typeof a.stack && a.stack.replace(/\n/g, "\\n"))
        } catch (g) {}
    }

    function E(a, b, d, f) {
        return p.setTimeout(B(a, d || "setTimeout", f), b)
    }

    function Db(a, b, d, f, g) {
        function m(c,
                   e) {
            e = Math.max(0, Math.min(e, 65535));
            l.mergeArrays(c, [e >> 8, e & 255])
        }

        function h(c, e) {
            l.mergeArrays(c, [e & 255])
        }

        function n(c, e) {
            if (-1 == ua.indexOf(e)) return !0;
            h(c, e)
        }

        function e(c, e) {
            for (e = Math.max(0, e | 0); 127 < e;) l.mergeArrays(c, [e & 127 | 128]), e >>= 7;
            l.mergeArrays(c, [e])
        }

        function c(c, e) {
            255 < e.length && (e = e.substr(0, 255));
            l.mergeArrays(c, [e.length]);
            for (var a = 0; a < e.length; a++) m(c, e.charCodeAt(a))
        }

        function k(c, a) {
            e(c, a.length);
            for (var k = 0; k < a.length; k++) e(c, a.charCodeAt(k))
        }

        function v(a) {
            if (!a.nodeName) return a[Y] = -1, null;
            var k = +a[Y];
            if (!isFinite(k) || 0 >= k) return null;
            if (a.attributes)
                for (var b = a; b;) {
                    if (b.attributes.__ym_wv_ign) return null;
                    b = b.parentElement
                }
            b = 64;
            var d = 0,
                f = r.getElementParent(a),
                g = f && f[Y] ? f[Y] : 0;
            0 > g && (g = 0);
            var v = a.nodeName.toUpperCase(),
                A = Fb[v];
            A || (b |= 2);
            var M = r.getElementNeighborPosition(a);
            M || (b |= 4);
            var z = r.getElementRegion(a);
            (f = f ? r.getElementRegion(f) : null) && z[0] == f[0] && z[1] == f[1] && z[2] == f[2] && z[3] == f[3] && (b |= 8);
            Oa[k].pos = z[0] + "x" + z[1];
            Oa[k].size = z[2] + "x" + z[3];
            a.id && "string" == typeof a.id &&
            (b |= 32);
            (f = r.calcTextChecksum(a)) && (b |= 16);
            var x = r.calcAttribChecksum(a);
            x && (d |= 2);
            a: {
                var l = r.getElementChildren(r.getElementParent(a), a.tagName);
                for (var F = 0; F < l.length; F++)
                    if ((!l[F].id || "string" != typeof l[F].id) && r.calcAttribChecksum(l[F]) == x && r.calcTextChecksum(l[F]) == f) {
                        l = !0;
                        break a
                    }
                l = !1
            }
            if (l) {
                b |= 1;
                var K = r.calcChildrenChecksum(a)
            }
            l = [];
            if (n(l, 1)) return null;
            e(l, k);
            h(l, b);
            e(l, g);
            A ? h(l, A) : c(l, v);
            M && e(l, M);
            b & 8 || (e(l, z[0]), e(l, z[1]), e(l, z[2]), e(l, z[3]));
            b & 32 && c(l, a.id);
            f && m(l, f);
            b & 1 && m(l, K);
            h(l, d);
            x && m(l, x);
            return l
        }

        function A(c, a, k, b, d, f) {
            for (var g; k && (g = r.getElementSize(k)) && (!g[0] || !g[1]);) k = r.getElementParent(k);
            if (!k) return null;
            g = k[Y];
            if (!g || 0 > g) return null;
            var m = {
                mousemove: 2,
                click: 32,
                dblclick: 33,
                mousedown: 4,
                mouseup: 30,
                touch: 12
            }[a];
            if (!m) return null;
            var v = r.getElementXY(k);
            k = [];
            if (n(k, m)) return null;
            e(k, c);
            e(k, g);
            e(k, Math.max(0, b[0] - v[0]));
            e(k, Math.max(0, b[1] - v[1]));
            /^mouse(up|down)|click$/.test(a) && (c = d || f, h(k, 2 > c ? 1 : c == (d ? 2 : 4) ? 4 : 2));
            return k
        }

        function M(c, a, k, b, d) {
            var f = [];
            if (n(f, 38)) return null;
            e(f, c);
            m(f, a);
            h(f, k);
            c = b[Y];
            if (!c || 0 > c) c = 0;
            e(f, c);
            h(f, d ? 1 : 0);
            return f
        }

        function x(c, a) {
            var b;
            if (0 == a.length) var h = b = "";
            else 100 >= a.length ? (b = a, h = "") : 200 >= a.length ? (b = a.substr(0, 100), h = a.substr(100)) : (b = a.substr(0, 97), h = a.substr(a.length - 97));
            var d = [];
            if (n(d, 29)) return null;
            e(d, c);
            k(d, b);
            k(d, h);
            return d
        }

        function F(c) {
            var a = [];
            if (n(a, 27)) return null;
            e(a, c);
            return a
        }

        function K(c) {
            var a = [];
            h(a, 14);
            e(a, c);
            return a
        }

        function z(c) {
            var a = [];
            if (n(a, 15)) return null;
            e(a, c);
            return a
        }

        function ba(c, a) {
            var k = [];
            if (n(k,
                17)) return null;
            e(k, c);
            e(k, a[Y]);
            return k
        }

        function Ua(c, a) {
            var k = [];
            if (n(k, 18)) return null;
            e(k, c);
            e(k, a[Y]);
            return k
        }

        function Pa(a, k, b, d) {
            var f = [];
            if (n(f, 39)) return null;
            e(f, a);
            e(f, k[Y]);
            c(f, String(b));
            h(f, d ? 1 : 0);
            return f
        }

        function pa(c, a) {
            var k = a[Y];
            if (0 < k) {
                var b = [],
                    h = r.getElementRegion(a),
                    d = Oa[k],
                    f = h[0] + "x" + h[1],
                    g = h[2] + "x" + h[3];
                if (f != d.pos) {
                    d.pos = f;
                    if (n(b, 9)) return null;
                    e(b, c);
                    e(b, k);
                    e(b, h[0]);
                    e(b, h[1])
                }
                if (g != d.size) {
                    d.size = g;
                    if (n(b, 10)) return null;
                    e(b, c);
                    e(b, k);
                    e(b, h[2]);
                    e(b, h[3])
                }
                if (b.length) return b
            }
            return null
        }

        function va(c) {
            var a = c[Y];
            if (!a || 0 > a || !/^INPUT|SELECT|TEXTAREA$/.test(c.nodeName) || !c.form || D(c.form)) return null;
            var b = r.getFormNumber(c.form);
            if (0 > b) return null;
            var h = "INPUT" == c.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }[c.type] : {
                SELECT: 1,
                TEXTAREA: 5
            }[c.nodeName];
            if ("number" != typeof h) return null;
            for (var d = -1, f = c.form.elements, g = f.length, m = 0, v = 0; m < g; m++)
                if (f[m].name ==
                    c.name) {
                    if (f[m] == c) {
                        d = v;
                        break
                    }
                    v++
                }
            if (0 > d) return null;
            f = [];
            if (n(f, 7)) return null;
            e(f, a);
            e(f, b);
            e(f, h);
            k(f, c.name || "");
            e(f, d);
            return f
        }

        function C(c, a) {
            var k = r.getFormNumber(a);
            if (0 > k) return null;
            for (var b = a.elements, h = b.length, d = [], f = 0; f < h; f++)
                if (!r.isEmptyField(b[f])) {
                    var g = b[f][Y];
                    g && 0 < g && l.mergeArrays(d, [g])
                }
            b = [];
            if (n(b, 11)) return null;
            e(b, c);
            e(b, k);
            e(b, d.length);
            for (k = 0; k < d.length; k++) e(b, d[k]);
            return b
        }

        function ka(c, e, a) {
            c = c.apply(p, e);
            S.append(c, a)
        }

        function t(c) {
            if (c[Y]) c = pa(u.nowEventTime(),
                c);
            else {
                var e = r.getElementParent(c);
                e && t(e);
                c[Y] = R;
                Oa[R] = {};
                R++;
                e = v(c);
                S.append(e, void 0);
                c = va(c)
            }
            S.append(c, void 0)
        }

        function y(c, e) {
            var a = c && r.classNameExists(c, "(ym-disable-keys|-metrika-nokeys)");
            e && c && (a = a || !!r.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", c).length);
            return a
        }

        function D(c) {
            return c && r.classNameExists(c, "(ym-disable-submit|-metrika-noform)")
        }

        function B(c) {
            var e = T.getTarget(c);
            if (e && "SCROLLBAR" != e.nodeName) {
                if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e.tagName))
                    if (e[Y]) t(e);
                    else {
                        var a = e.form;
                        if (a) {
                            a = a.elements;
                            for (var k = a.length, b = 0; b < k; b++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a[b].tagName) && !a[b][Y] && t(a[b])
                        } else t(e)
                    }
                else t(e);
                ka(A, [u.nowEventTime(), c.type, e, T.getPos(c), c.which, c.button])
            }
        }

        function kb(c) {
            B(c);
            G()
        }

        function Ga(c) {
            return (c.shiftKey ? 2 : 0) | (c.ctrlKey ? 4 : 0) | (c.altKey ? 1 : 0) | (c.metaKey ? 8 : 0) | (c.ctrlKey || c.altKey ? 16 : 0)
        }

        function na(c) {
            if (!c) return {
                ignore: !0,
                forceRecord: !1,
                isPrivate: !1,
                privateFlag: !1,
                recordData: !0
            };
            var e = "password" === c.type || Z.test(c.name) || Z.test(c.id),
                a = l.reduce(function (e, a) {
                    return e || la.generalRegex.test(c[a])
                }, !1, ["className", "id", "name"]) || la.placeholderRegex.test(c.placeholder),
                k = la.forceRecordRegex.test(c.className);
            return {
                forceRecord: k,
                ignore: e,
                isPrivate: a,
                privateFlag: !k && (a || e),
                recordData: k || !(a && g.get("isEU") || e)
            }
        }

        function lb(c) {
            return "INPUT" == c.tagName ? "password" == c.type || c.name && Z.test(c.name) || c.id && Z.test(c.id) : !1
        }

        function P(c, e, a) {
            c = T.getTarget(c);
            var k = na(c);
            k.ignore || !k.forceRecord && (k.isPrivate && g.get("isEU") || y(c)) || (t(c), ka(M, [u.nowEventTime(), e, a, c, k.privateFlag]))
        }

        function Q(c) {
            var e = c.keyCode,
                a = Ga(c);
            if ({
                3: 1,
                8: 1,
                9: 1,
                13: 1,
                16: 1,
                17: 1,
                18: 1,
                19: 1,
                20: 1,
                27: 1,
                33: 1,
                34: 1,
                35: 1,
                36: 1,
                37: 1,
                38: 1,
                39: 1,
                40: 1,
                45: 1,
                46: 1,
                91: 1,
                92: 1,
                93: 1,
                106: 1,
                110: 1,
                111: 1,
                144: 1,
                145: 1
            }[e] || 112 <= e && 123 >= e || 96 <= e && 105 >= e || a & 16) 19 == e && 4 == (a & -17) && (e = 144), P(c, e, a | 16), qa = !1, l.setTimeout(function () {
                qa = !0
            }, 1, "fvl.keyDown"), !(67 == e && a & 4) || a & 1 || a & 2 || L()
        }

        function E(c) {
            qa && !oa && 0 !== c.which && (P(c, c.charCode || c.keyCode, Ga(c)), oa = !0, l.setTimeout(function () {
                oa = !1
            }, 1, "fvl.keyPress"))
        }

        function G() {
            if (p.getSelection) {
                try {
                    var c = p.getSelection()
                } catch (Eb) {
                    return
                }
                var e = c.toString();
                var a = c.anchorNode
            } else q.selection && q.selection.createRange && (c = q.selection.createRange(), e = c.text, a = c.parentElement());
            if ("string" == typeof e) {
                try {
                    for (; a && 1 != a.nodeType;) a = a.parentNode
                } catch (Eb) {
                    return
                }
                if (a) {
                    c = na(a).privateFlag || y(a, !0);
                    a = a.getElementsByTagName("*");
                    for (var k = 0; k < a.length && !c;) c = na(a[k]).privateFlag || y(a[k], !0), k++;
                    e != Va && (Va = e, e = c ? l.map(function () {
                            return la.obfuscatedSymbol
                        }, e.split("")).join("") :
                        e, ka(x, [u.nowEventTime(), e]))
                }
            }
        }

        function L() {
            Wa || (Wa = !0, Va && ka(F, [u.nowEventTime()]), l.setTimeout(function () {
                Wa = !1
            }, 1, "fvl.copy"))
        }

        function J() {
            wa || (wa = !0, ka(K, [u.nowEventTime()]))
        }

        function I() {
            wa && (wa = !1, ka(z, [u.nowEventTime()]))
        }

        function N(c) {
            (!wa || c && !c.fromElement) && J()
        }

        function aa(c) {
            c && !c.toElement && I()
        }

        function ca(c) {
            if ((c = T.getTarget(c)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c.tagName)) {
                if (c[Y]) t(c);
                else {
                    var e = c.form;
                    if (e) {
                        e = e.elements;
                        for (var a = e.length, k = 0; k < a; k++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e[k].tagName) &&
                        !e[k][Y] && t(e[k])
                    } else t(c)
                }
                ka(ba, [u.nowEventTime(), c])
            }
        }

        function V(c) {
            (c = T.getTarget(c)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c.tagName) && (t(c), ka(Ua, [u.nowEventTime(), c]))
        }

        function X(c) {
            if ((c = T.getTarget(c)) && !lb(c) && !y(c) && /^INPUT|SELECT|TEXTAREA$/.test(c.tagName)) {
                var e = na(c),
                    a = /^(checkbox|radio)$/.test(c.type) ? c.checked : c.value;
                a = e.recordData ? a : l.map(function () {
                    return la.obfuscatedSymbol
                }, a.split("")).join("");
                t(c);
                ka(Pa, [u.nowEventTime(), c, a, e.privateFlag])
            }
        }

        function ea(c) {
            if ((c = T.getTarget(c)) &&
                !D(c) && "FORM" == c.nodeName) {
                for (var e = c.elements, a = 0; a < e.length; a++) r.isEmptyField(e[a]) || t(e[a]);
                ka(C, [u.nowEventTime(), c], !0)
            }
        }

        function O(c) {
            (c = T.getTarget(c)) && "BODY" == c.tagName && S.append([], !0)
        }
        var S = new mb({
                protocol: a,
                counterId: b,
                globalConfig: g,
                counterType: d,
                meta: {
                    url: H().href,
                    hitId: f,
                    timezone: Xa,
                    timestamp: Za
                }
            }),
            Fb = {
                A: 1,
                ABBR: 2,
                ACRONYM: 3,
                ADDRESS: 4,
                APPLET: 5,
                AREA: 6,
                B: 7,
                BASE: 8,
                BASEFONT: 9,
                BDO: 10,
                BIG: 11,
                BLOCKQUOTE: 12,
                BODY: 13,
                BR: 14,
                BUTTON: 15,
                CAPTION: 16,
                CENTER: 17,
                CITE: 18,
                CODE: 19,
                COL: 20,
                COLGROUP: 21,
                DD: 22,
                DEL: 23,
                DFN: 24,
                DIR: 25,
                DIV: 26,
                DL: 27,
                DT: 28,
                EM: 29,
                FIELDSET: 30,
                FONT: 31,
                FORM: 32,
                FRAME: 33,
                FRAMESET: 34,
                H1: 35,
                H2: 36,
                H3: 37,
                H4: 38,
                H5: 39,
                H6: 40,
                HEAD: 41,
                HR: 42,
                HTML: 43,
                I: 44,
                IFRAME: 45,
                IMG: 46,
                INPUT: 47,
                INS: 48,
                ISINDEX: 49,
                KBD: 50,
                LABEL: 51,
                LEGEND: 52,
                LI: 53,
                LINK: 54,
                MAP: 55,
                MENU: 56,
                META: 57,
                NOFRAMES: 58,
                NOSCRIPT: 59,
                OBJECT: 60,
                OL: 61,
                OPTGROUP: 62,
                OPTION: 63,
                P: 64,
                PARAM: 65,
                PRE: 66,
                Q: 67,
                S: 68,
                SAMP: 69,
                SCRIPT: 70,
                SELECT: 71,
                SMALL: 72,
                SPAN: 73,
                STRIKE: 74,
                STRONG: 75,
                STYLE: 76,
                SUB: 77,
                SUP: 78,
                TABLE: 79,
                TBODY: 80,
                TD: 81,
                TEXTAREA: 82,
                TFOOT: 83,
                TH: 84,
                THEAD: 85,
                TITLE: 86,
                TR: 87,
                TT: 88,
                U: 89,
                UL: 90,
                VAR: 91,
                NOINDEX: 100
            },
            ua = [17, 18, 38, 32, 39, 15, 11, 7, 1],
            la = function () {
                var c = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                return {
                    generalRegex: new RegExp("(" + c.join("|") + ")", "i"),
                    placeholderRegex: new RegExp("(" + c.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";")).join("|") +
                        ")", "i"),
                    forceRecordRegex: /ym-record-keys/i,
                    obfuscatedSymbol: String.fromCharCode(8226),
                    obfuscatedKeyCode: 88
                }
            }(),
            R = 1,
            Z = /^(password|passwd|pswd)$/,
            qa = !0,
            oa = !1,
            Va = "",
            Wa = !1,
            wa = !0;
        u.initCorrector();
        u.nowTime();
        var Y = "metrikaId_" + Math.random(),
            Oa = {},
            Qa = ":submit" + Math.random();
        if (!l.isMetrikaPlayer()) {
            w.on(q, "click,dblclick,mousedown", B);
            w.on(q, "mouseup", kb);
            w.on(q, "keydown", Q);
            w.on(q, "keypress", E);
            w.on(q, "copy", L);
            if (r.getBody()) w.on(q, "mouseleave", O);
            q.attachEvent && !p.opera ? (w.on(q, "focusin", N), w.on(q,
                "focusout", aa)) : (w.on(p, "focus", J), w.on(p, "blur", I), w.on(q, "blur", I));
            q.addEventListener ? (w.on(q, "focus", ca), w.on(q, "blur", V), w.on(q, "change", X), w.on(q, "submit", ea)) : q.attachEvent && (w.on(q, "focusin", ca), w.on(q, "focusout", V), function () {
                for (var c = q.getElementsByTagName("form"), e = 0; e < c.length; e++) {
                    for (var a = c[e].getElementsByTagName("*"), k = 0; k < a.length; k++)
                        if (/^INPUT|SELECT|TEXTAREA$/.test(a[k].tagName)) w.on(a[k], "change", X);
                    w.on(c[e], "submit", ea)
                }
            }());
            (function () {
                var c = q.getElementsByTagName("form");
                if (c.length)
                    for (var e = 0; e < c.length; e++) {
                        var a = c[e].submit;
                        if ("function" == typeof a || "object" == typeof a && /^\s*function submit\(\)/.test(String(a))) c[e][Qa] = a, c[e].submit = function () {
                            ea({
                                target: this
                            });
                            return this[Qa]()
                        }
                    }
            })()
        }
        return {
            start: function () {
                S.activate()
            },
            stop: function () {
                S.clear();
                w.un(q, "click", B);
                w.un(q, "dblclick", B);
                w.un(q, "mousedown", B);
                w.un(q, "mouseup", kb);
                w.un(q, "keydown", Q);
                w.un(q, "keypress", E);
                w.un(q, "copy", L);
                w.un(q, "focusin", N);
                w.un(q, "focusout", aa);
                w.un(p, "focus", J);
                w.un(p, "blur", I);
                w.un(q, "blur", I);
                q.removeEventListener ? (w.un(q, "focus", ca), w.un(q, "blur", V), w.un(q, "change", X), w.un(q, "submit", ea)) : q.detachEvent && (w.un(q, "focusin", ca), w.un(q, "focusout", V), function () {
                    for (var c = q.getElementsByTagName("form"), e = 0; e < c.length; e++) {
                        for (var a = c[e].getElementsByTagName("*"), k = 0; k < a.length; k++) /^INPUT|SELECT|TEXTAREA$/.test(a[k].tagName) && w.un(a[k], "change", X);
                        w.un(c[e], "submit", ea)
                    }
                }());
                (function () {
                    for (var c = q.getElementsByTagName("form"), e = 0; e < c.length; e++) c[e][Qa] && (c[e].submit = c[e][Qa])
                })()
            }
        }
    }

    function H() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), d = b.length, f = d, g, m; f--;) a[b[f]] = "";
        try {
            for (g = p.location, f = d; f--;) m = b[f], a[m] = "" + g[m]
        } catch (h) {
            L && (a = L)
        }
        return a
    }

    function ra() {
        return 0 == H().hostname.search(/^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex)$/)
    }

    function $a(a) {
        return -1 !== ("" + p.navigator.userAgent).toLowerCase().search(a)
    }

    function nb(a) {
        return (a = a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi,
            "")) ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function ob(a, b) {
        var d;
        if (!a || !b) return !1;
        var f = [];
        for (d = 0; d < b.length; d++) f.push(b[d].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return (new RegExp("\\.(" + f.join("|") + ")$", "i")).test(a)
    }

    function Hb(a, b) {
        return (a ? a.replace(/^www\./,
            "") : "").toLowerCase() == (b ? b.replace(/^www\./, "") : "").toLowerCase()
    }

    function Ib(a, b) {
        function d(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }
        return a && b ? d(a) == d(b) : a || b ? !1 : !0
    }

    function pb() {
        var a = p.performance || p.webkitPerformance,
            b = a && a.timing,
            d, f = [];
        if (b && (d = b.navigationStart))
            for (f = [b.domainLookupEnd - b.domainLookupStart, b.connectEnd - b.connectStart, b.responseStart - b.requestStart, b.responseEnd - b.responseStart, b.fetchStart - d, b.redirectEnd - b.redirectStart,
                b.redirectCount || a.navigation && a.navigation.redirectCount
            ], f.push(b.domInteractive && b.domLoading ? b.domInteractive - b.domLoading : null), f.push(b.domContentLoadedEventStart && b.domContentLoadedEventEnd ? b.domContentLoadedEventEnd - b.domContentLoadedEventStart : null), f.push(b.domComplete ? b.domComplete - d : null), f.push(b.loadEventStart ? b.loadEventStart - d : null), f.push(b.loadEventStart && b.loadEventEnd ? b.loadEventEnd - b.loadEventStart : null), f.push(b.domContentLoadedEventStart ? b.domContentLoadedEventStart - d : null),
                     a = 0; a < f.length; a++) b = f[a], null !== b && (0 > b || 36E5 < b) && (f[a] = null);
        return f
    }

    function Jb(a) {
        var b = [],
            d = a._lastPerformanceTiming,
            f = pb(),
            g;
        if (d) {
            var m = 0;
            for (g = d.length; m < g; m++) null === f[m] ? b.push(f[m]) : b.push(d[m] === f[m] ? "" : f[m])
        } else b = f;
        a._lastPerformanceTiming = f;
        return b.join(",")
    }

    function Kb(a) {
        return "first-contentful-paint" === a.name
    }

    function Lb() {
        var a = p.performance && p.performance.getEntriesByType,
            b = a ? l.filter(Kb, p.performance.getEntriesByType("paint")) : [];
        if (b.length) return b = b[0], Math.round(b.startTime);
        if (a) return 0;
        if ("object" == typeof p.chrome && p.chrome.loadTimes) {
            if (b = p.chrome.loadTimes(), b.requestTime && b.firstPaintTime && p.performance && p.performance.timing) return Math.round(1E3 * b.firstPaintTime - p.performance.timing.navigationStart)
        } else if (p.performance && p.performance.timing && (b = p.performance.timing, b.navigationStart && b.msFirstPaint)) return b.msFirstPaint - b.navigationStart;
        return null
    }
    var Ja = !1;
    try {
        var Mb = function (a) {
            function b(f) {
                if (d[f]) return d[f].exports;
                var g = d[f] = {
                    i: f,
                    l: !1,
                    exports: {}
                };
                a[f].call(g.exports,
                    g, g.exports, b);
                g.l = !0;
                return g.exports
            }
            var d = {};
            b.m = a;
            b.c = d;
            b.d = function (a, d, m) {
                b.o(a, d) || Object.defineProperty(a, d, {
                    enumerable: !0,
                    get: m
                })
            };
            b.r = function (a) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            };
            b.t = function (a, d) {
                d & 1 && (a = b(a));
                if (d & 8 || d & 4 && "object" === typeof a && a && a.__esModule) return a;
                var f = Object.create(null);
                b.r(f);
                Object.defineProperty(f, "default", {
                    enumerable: !0,
                    value: a
                });
                if (d &
                    2 && "string" != typeof a)
                    for (var h in a) b.d(f, h, function (b) {
                        return a[b]
                    }.bind(null, h));
                return f
            };
            b.n = function (a) {
                var d = a && a.__esModule ? function () {
                    return a["default"]
                } : function () {
                    return a
                };
                b.d(d, "a", d);
                return d
            };
            b.o = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            };
            b.p = "";
            return b(b.s = 65)
        }([function (a, b, d) {
            b.a = function () {
                if ("undefined" !== typeof p) return p;
                if ("undefined" !== typeof self) return self;
                if ("undefined" !== typeof global) return global
            }()
        }, function (a, b) {
            a.exports = function (a, b, g) {
                b in
                a ? Object.defineProperty(a, b, {
                    value: g,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[b] = g;
                return a
            }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "IterableUtils", function () {
                return v
            });
            var f = d(25),
                g = d(16),
                m = d(24),
                h = d(5),
                n = d(11);
            a = d(6);
            var e = d(8),
                c = a.a.Map,
                k = a.a.Set,
                v = {
                    binarySearch: function (c, e, a) {
                        var k = 0,
                            b = c.length - 1;
                        for (a = "function" === typeof a ? a : function (c) {
                            return c
                        }; k <= b;) {
                            var h = Math.round((k + b) / 2),
                                d = a(c[h]);
                            if (d === e) {
                                var n = c[h];
                                break
                            } else e > d ? k = h + 1 : b = h - 1
                        }
                        return n
                    },
                    forof: function (c, e) {
                        c instanceof h.List ? c.forEach(e) :
                            c instanceof n.KeyValue ? c.forEach(e) : Object(f.a)(c, e)
                    },
                    forin: function (c, e) {
                        Object(g.a)(c, e)
                    },
                    fastIterate: function (c, e) {
                        for (var a = 0, k = c.length; a < k; a++) e(a, c[a])
                    },
                    toArray: function (e) {
                        return e instanceof h.List || e instanceof n.KeyValue ? k && e instanceof k || c && e instanceof c ? Object(m.a)(e) : e.toArray() : Object(m.a)(e)
                    },
                    addToArray: function (c) {
                        for (var e, a = arguments.length, k = Array(1 < a ? a - 1 : 0), b = 1; b < a; b++) k[b - 1] = arguments[b];
                        return (e = []).concat.apply(e, k).reduce(function (c, e) {
                                0 > c.indexOf(e) && c.push(e);
                                return c
                            },
                            c)
                    },
                    removeFromArray: function (c) {
                        for (var e, a = arguments.length, k = Array(1 < a ? a - 1 : 0), b = 1; b < a; b++) k[b - 1] = arguments[b];
                        return (e = []).concat.apply(e, k).reduce(function (c, e) {
                            var a = c.indexOf(e);
                            0 <= a && c.splice(a, 1);
                            return c
                        }, c)
                    },
                    isArray: function (c) {
                        return "function" === typeof Array.isArray ? Array.isArray(c) : "[object Array]" === {}.toString.call(c)
                    },
                    inArray: function (c, e) {
                        return c ? "function" === typeof c.includes ? c.includes(e) : 0 <= c.indexOf(e) : !1
                    },
                    fill: function (c, e) {
                        if (Array.prototype.fill) return c.fill(e);
                        for (var a = c.length; 0 <
                        a--;) c[a] = e;
                        return c
                    },
                    reduce: function (c, e, a) {
                        return this.toArray(c).reduce(e, a)
                    },
                    reduceRight: function (c, e, a) {
                        return this.toArray(c).reduceRight(e, a)
                    },
                    map: function (c, a) {
                        var k = this.toArray(c);
                        if (e.ObjectUtils.isNative(k.map, "map")) return k.map(a);
                        for (var b = [], h = 0; h < k.length; h++) b[h] = a(k[h], h, k);
                        return b
                    },
                    find: function (c, e) {
                        if (Array.prototype.find) return c.find(e);
                        var a;
                        this.forof(c, function (k, b) {
                            return !0 === !!e(k, b, c) ? (a = k, !1) : !0
                        });
                        return a
                    },
                    keys: function (c) {
                        if ("function" === typeof c.keys) return c.keys();
                        var e = [];
                        this.forof(c, function (c, a) {
                            e.push(a)
                        });
                        return e
                    },
                    values: function (c) {
                        if (c.hasOwnProperty("values")) return c.values();
                        var e = [];
                        this.forof(c, function (c, a) {
                            e.push(c)
                        });
                        return e
                    },
                    includes: function (c, a, k) {
                        void 0 === k && (k = 0);
                        if (e.ObjectUtils.isNative(Array.prototype.includes, "includes")) return c.includes(a, k);
                        for (var b = c.length; k < b; k++)
                            if (c[k] === a) return !0;
                        return !1
                    }
                }
        }, function (a, b) {
            a.exports = function (a) {
                if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return a
            }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "DO_NOT_TRACK", function () {
                return m
            });
            d.d(b, "IS_INCOGNITO", function () {
                return h
            });
            d.d(b, "IS_MOBILE_DEVICE", function () {
                return n
            });
            d.d(b, "IS_DEVELOPMENT", function () {
                return e
            });
            a = d(9);
            var f = d.n(a);
            a = d(12);
            var g = d(0);
            d = f()({}, d(32).BrowserUtils, d(33).DocumentUtils, d(34).DOMUtils, d(35).FunctionUtils, d(2).IterableUtils, d(85).MapUtils, d(31).NumberUtils, d(8).ObjectUtils, d(22).StringUtils, d(86).TimeUtils, d(23).Tools, {
                math: d(88).MathUtils
            });
            try {
                var m = a.a.respectDoNotTrack &&
                    !0 === navigator.doNotTrack
            } catch (c) {
                m = !1
            }
            var h = function () {
                try {
                    g.a.localStorage.setItem("test", "test");
                    var c = "test" !== g.a.localStorage.getItem("test");
                    g.a.localStorage.removeItem("test");
                    return c
                } catch (k) {
                    return !0
                }
            }();
            try {
                var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) ? !0 : !1
            } catch (c) {
                n = !1
            }
            var e = "development" === a.a.environment;
            Object.defineProperties(d, {
                DO_NOT_TRACK: {
                    value: m
                },
                IS_INCOGNITO: {
                    value: h
                },
                IS_MOBILE_DEVICE: {
                    value: n
                },
                IS_DEVELOPMENT: {
                    value: e
                }
            });
            b["default"] =
                d
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "List", function () {
                return n
            });
            a = d(13);
            var f = d.n(a);
            a = d(1);
            var g = d.n(a),
                m = d(6);
            a = d(8);
            var h = d(2);
            d = m.a.Set;
            a = a.ObjectUtils.isMonkeyPatchedOrUndefined("Set", "add has clear delete forEach toString".split(" "));
            var n = function () {
                function e(c) {
                    g()(this, "list", []);
                    c && (c instanceof e ? this.create(h.IterableUtils.toArray(c)) : c instanceof Array && this.create(c))
                }
                var c = e.prototype;
                c.add = function (c) {
                    !1 === this.has(c) && this.list.push(c);
                    return this
                };
                c.has = function (c) {
                    return 0 <= this.list.indexOf(c)
                };
                c.clear = function () {
                    this.list.length = 0;
                    return this
                };
                c["delete"] = function (c) {
                    c = this.list.indexOf(c);
                    return 0 <= c ? (this.list.splice(c, 1), !0) : !1
                };
                c.each = function (c) {
                    if ("function" === typeof c)
                        for (var e = 0; e < this.list.length;) {
                            var a = this.list[e];
                            2 === c.length ? c(a, a) : c(a);
                            e++
                        }
                };
                c.forEach = function (c) {
                    this.each(c)
                };
                c.values = function () {
                    return this.list.slice(0)
                };
                c.keys = function () {
                    return this.list.slice(0)
                };
                c.toArray = function () {
                    return this.list.slice(0)
                };
                c.toString = function () {
                    return "List(" + this.size + ")"
                };
                c.create =
                    function (c) {
                        for (var e = 0; e < c.length;) this.add(c[e]), e++
                    };
                f()(e, [{
                    key: "size",
                    get: function () {
                        return this.list.length
                    }
                }]);
                return e
            }();
            b["default"] = a ? n : d
        }, function (a, b, d) {
            var f = function (a, b) {
                var h = a.contentWindow;
                return h ? b.reduce(function (a, e) {
                    return a && h.hasOwnProperty(e)
                }, !0) : !1
            };
            b.a = function () {
                var a = "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : p;
                if ("undefined" !== typeof q && q.body) {
                    var b = q.createElement("iframe");
                    b.name = "_ym_native";
                    b.frameBorder = "0";
                    b.style.opacity = "0";
                    b.style.width =
                        "0px";
                    b.style.height = "0px";
                    b.style.position = "absolute";
                    b.style.left = "100%";
                    b.style.bottom = "100%";
                    b.style.setProperty("border", "0", "important");
                    q.body.appendChild(b);
                    f(b, ["Set", "Map"]) && (a = b.contentWindow || a)
                }
                return a
            }()
        }, function (a, b, d) {
            (function (a, g) {
                d.d(b, "b", function () {
                    return v
                });
                d.d(b, "a", function () {
                    return A
                });
                var f = d(26),
                    h = d.n(f);
                f = d(12);
                var n = d(8),
                    e = d(2),
                    c = d(34),
                    k = d(23);
                f = f.a.DOMIndexer;
                var v = f.IGNORED_NODES,
                    A = f.IGNORED_ATTRIBUTES,
                    M = f.SKIPPED_ATTRIBUTES,
                    x = f.EXTRA_ATTRIBUTES,
                    l = [],
                    K = function (c) {
                        if (null ==
                            c) return !1;
                        c = c.nodeType;
                        return c === Node.TEXT_NODE || c === Node.COMMENT_NODE
                    },
                    z = function na(c, e) {
                        var a = [];
                        if ("function" === typeof e) {
                            var k = e(c);
                            null != k && k !== NodeFilter.FILTER_ACCEPT || a.push(c)
                        } else a.push(c);
                        if (c.childNodes && 0 < c.childNodes.length) {
                            k = c.childNodes;
                            for (var b = 0, h = k.length; b < h; b++) a.push.apply(a, na(k[b]))
                        }
                        return a
                    },
                    ba = function (c, e, a) {
                        void 0 === a && (a = null);
                        var k = function (c) {
                            return "function" === typeof a ? a(c) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                        };
                        if ("function" ===
                            typeof e && k(c) === NodeFilter.FILTER_ACCEPT && (e(c), !1 === K(c)))
                            for (c = q.createTreeWalker(c, -1, a ? {
                                acceptNode: k
                            } : null, !1); c.nextNode() && !1 !== e(c.currentNode););
                    },
                    p = function (e, a) {
                        void 0 === a && (a = null);
                        var k = [];
                        e && (c.DOMUtils.nodeIsInTree(e) ? (e = null == e ? q.documentElement : e, ba(e, function (c) {
                            k.push(c)
                        }, a)) : k.push.apply(k, z(e, a)));
                        return k
                    },
                    Pa = function (c) {
                        var e = c["*"],
                            k = h()(c, ["*"]),
                            b = {},
                            d = new RegExp(e.join("|"), "i");
                        a.forin(k, function (c) {
                            var a, h = (a = []).concat.apply(a, k[c].concat(e));
                            b[c] = new RegExp(h.join("|"),
                                "i")
                        });
                        return function (c, e) {
                            if (c && e) {
                                var a = b[("string" === typeof c ? c : c.nodeName).toLowerCase()];
                                return a && !!e.match(a) || !!e.match(d)
                            }
                            return !1
                        }
                    }(A),
                    pa = [function (c, e, a) {
                        return null == a || /^javascript/.test(a)
                    }, function (c, e) {
                        return "SCRIPT" === c.nodeName && "src" === e
                    }, function (c, e) {
                        return "A" === c.nodeName && "href" === e
                    }],
                    va = {
                        src: function (c, e, a) {
                            if ("src" === e && c.getAttribute("srcset")) return c.currentSrc || a
                        }
                    },
                    C = function (c, e, a) {
                        for (var k = 0, b = pa.length; k < b; k++)
                            if (!0 === pa[k](c, e, a)) return !1;
                        return !0
                    },
                    w = function (c,
                                  e, a) {
                        var k = a;
                        if (C(c, e, a)) {
                            k = l.reduce(function (a, k) {
                                try {
                                    var b = k(c, e, a);
                                    return null != b ? b : a
                                } catch (ja) {
                                    return g.log("Filtering error", ja), a
                                }
                            }, k);
                            if ("string" === typeof k) return (a = va[e]) ? a(c, e, k) || k : k;
                            if (null != k && !1 !== k) return k.baseVal
                        }
                        return null
                    },
                    t = function (c, e) {
                        a: {
                            try {
                                q.createAttribute(e)
                            } catch (lb) {
                                var a = !1;
                                break a
                            }
                            a = !0
                        }
                        return !a || Pa({
                            nodeName: c
                        }, e) ? !1 : e
                    },
                    r = function (c, e, a) {
                        if (a) {
                            if (!1 !== t(e, a.name)) try {
                                var k, b = w(c, a.name, a.value);
                                return k = {}, k[a.name] = b || "", k
                            } catch (Q) {
                                g.warn("Error while reading attribute",
                                    a, c), g.log(Q)
                            }
                        } else g.warn("Error while reading attribute", a, c);
                        return null
                    };
                f = function (c) {
                    var e = new RegExp(c.join("|"), "gi");
                    return function (c) {
                        return c && !!c.nodeName.match(e)
                    }
                }(v);
                var y = function (c) {
                    return /svg/.test(c.namespaceURI)
                };
                f = {
                    all: p,
                    map: function (c, a, k) {
                        void 0 === k && (k = null);
                        var b = [];
                        c = p(c, k);
                        e.IterableUtils.fastIterate(c, function (c, e) {
                            b.push(a(e))
                        });
                        return b
                    },
                    walk: ba,
                    each: function (c, a, k) {
                        c && (c = p(c, k), e.IterableUtils.fastIterate(c, a))
                    },
                    getAttributes: function (c) {
                        var a = c.nodeName,
                            k = c.attributes,
                            b = {};
                        k && k.length && (e.IterableUtils.fastIterate(k, function (e, k) {
                            var h = r(c, a, k);
                            h && n.ObjectUtils.assign(b, h)
                        }), x[a] && e.IterableUtils.fastIterate(x[a], function (e, a) {
                            r(b, {
                                name: a,
                                value: c[a]
                            })
                        }));
                        "INPUT" === a && ("checkbox" === b.type || "radio" === b.type ? b.checked = c.checked ? "checked" : "" : b.value = c.value);
                        return b
                    },
                    getContent: function (c) {
                        if (null != c && K(c)) return c.textContent
                    },
                    getNamespace: function (c) {
                        if (y(c)) return c.namespaceURI
                    },
                    normalizeAttributeValue: w,
                    cloneAttributes: function (c, a) {
                        e.IterableUtils.forof(c.attributes,
                            function (c) {
                                var e = !1 === k.Tools.isNULL(c.namespaceURI);
                                c = c.cloneNode();
                                e ? a.attributes.setNamedItemNS(c) : a.attributes.setNamedItem(c)
                            });
                        return a
                    },
                    isSVG: y,
                    isTextNode: K,
                    isIgnoredNode: f,
                    isIgnoredAttr: Pa,
                    isAttributeNameValid: t,
                    isSkippedAttribute: function (c) {
                        return a.includes(M, c)
                    }
                };
                Object.defineProperty(f, "addAttributesFilter", {
                    value: function (c) {
                        "function" === typeof c && l.push(c)
                    }
                });
                b.c = f
            }).call(this, d(4)["default"], d(10)["default"])
        }, function (a, b, d) {
            d.r(b);
            a = d(9);
            var f = d.n(a),
                g = d(6),
                m = g.a.Object.assign ||
                    function (c) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = arguments[e],
                                k;
                            for (k in a) g.a.Object.prototype.hasOwnProperty.call(a, k) && (c[k] = a[k])
                        }
                        return c
                    },
                h = d(16),
                n = d(25),
                e = d(31);
            d.d(b, "ObjectUtils", function () {
                return c
            });
            var c = {
                sizeof: function (c, a) {
                    void 0 === c && (c = {});
                    void 0 === a && (a = !1);
                    var k = JSON.stringify(c);
                    k = -~encodeURI(k).split(/%..|./).length;
                    return a ? e.NumberUtils.bytesToSize(k) : k
                },
                assign: function (c) {
                    for (var e = arguments.length, a = Array(1 < e ? e - 1 : 0), k = 1; k < e; k++) a[k - 1] = arguments[k];
                    return m.apply(void 0, [c].concat(a))
                },
                deleteProps: function (c, e) {
                    void 0 === e && (e = []);
                    Object(n.a)(e, function (e) {
                        delete c[e]
                    });
                    return c
                },
                copyObject: function (c) {
                    return f()({}, c)
                },
                type: function (c) {
                    return {}.toString.call(c)
                },
                deepCopyObject: function (c) {
                    return JSON.parse(JSON.stringify(c))
                },
                combine: function () {
                    for (var c = arguments.length, e = Array(c), a = 0; a < c; a++) e[a] = arguments[a];
                    return e.reduce(function (c, e) {
                        return null != e ? f()({}, c, e) : c
                    }, {})
                },
                findNativeImplementation: function (c) {
                    if (this.isNative(g.a[c], c)) return g.a[c];
                    var e = ["webkit",
                        "moz", "ms", "o"
                    ];
                    c = "" + c.slice(0, 1).toUpperCase() + c.slice(1);
                    for (var a = 0; a < e.length; a++) {
                        var k = "" + e[a] + c;
                        if (this.isNative(g.a[k], k)) return g.a[k]
                    }
                    return null
                },
                isNative: function (c, e) {
                    return c ? (new RegExp("function\\s*" + e + "\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", "i")).test(c.toString()) : !1
                },
                isMonkeyPatchedOrUndefined: function (c, e) {
                    if (g.a[c] === y || !this.isNative(g.a[c], c)) return !0;
                    if (e)
                        for (var a = 0; a < e.length; a++)
                            if (!this.isNative(g.a[c].prototype[e[a]], e[a])) return !0;
                    return !1
                },
                objectKeys: function (c) {
                    var e = [];
                    Object(h.a)(c, function (c) {
                        return e.push(c)
                    });
                    return e
                },
                objectValues: function (c) {
                    var e = [];
                    Object(h.a)(c, function (c, a) {
                        return e.push(a)
                    });
                    return e
                },
                safeAccess: function (c, e) {
                    if (null == c || "string" !== typeof e) return y;
                    for (var a = e.split("."), k = c, b = 0, h = a.length; b < h; b++)
                        if (k = k[a[b]], null == k) return y;
                    return k
                }
            }
        }, function (a, b, d) {
            var f = d(1);
            a.exports = function (a) {
                for (var b = 1; b < arguments.length; b++) {
                    var h = null != arguments[b] ? arguments[b] : {},
                        d = Object.keys(h);
                    "function" === typeof Object.getOwnPropertySymbols && (d =
                        d.concat(Object.getOwnPropertySymbols(h).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(h, e).enumerable
                        })));
                    d.forEach(function (e) {
                        f(a, e, h[e])
                    })
                }
                return a
            }
        }, function (a, b, d) {
            d.r(b);
            a = d(16);
            var f = d(0);
            d = d(6).a.console;
            var g = {},
                m = ["%cWV:", "font-weight: bold;"];
            f.a !== f.a.top && m.length && (m[1] += "color: purple");
            Object(a.a)(d, function (a) {
                g[a] = function () {}
            });
            g.__native = d;
            g.__debugMode = !1;
            g.__addDebug = function (a, b) {};
            b["default"] = g
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "KeyValue", function () {
                return n
            });
            a =
                d(13);
            var f = d.n(a);
            a = d(1);
            var g = d.n(a);
            a = d(8);
            var m = d(6),
                h = d(2);
            d = m.a.Map;
            a = a.ObjectUtils.isMonkeyPatchedOrUndefined("Map", "set get has clear delete forEach toString".split(" "));
            var n = function () {
                function e(c) {
                    g()(this, "lastIndex", 0);
                    g()(this, "list", []);
                    g()(this, "index", []);
                    c instanceof e ? this.create(h.IterableUtils.toArray(c)) : c instanceof Array && this.create(c)
                }
                var c = e.prototype;
                c.allocate = function (c) {
                    void 0 === c && (c = 0);
                    this.list.length = c;
                    this.index.length = c
                };
                c.set = function (c, e) {
                    var a = this.indexOf(this.index,
                        c); - 1 !== a ? this.list[a].value = e : (this.list[this.lastIndex] = {
                        key: c,
                        value: e
                    }, this.index[this.lastIndex] = c, this.lastIndex++);
                    return this
                };
                c.get = function (c) {
                    return (c = this.find(c)) ? c.value : y
                };
                c.keys = function () {
                    return this.list.map(function (c) {
                        return c.key
                    })
                };
                c.values = function () {
                    return this.list.map(function (c) {
                        return c.value
                    })
                };
                c.has = function (c) {
                    return -1 !== this.indexOf(this.index, c)
                };
                c.clear = function () {
                    this.lastIndex = 0;
                    this.list.length = 0;
                    this.index.length = 0;
                    return this
                };
                c["delete"] = function (c) {
                    if (c = this.find(c))
                        if (c =
                            this.indexOf(this.list, c), -1 !== c) return this.list.splice(c, 1), this.index.splice(c, 1), this.lastIndex--, !0;
                    return !1
                };
                c.each = function (c) {
                    "function" === typeof c && this.loop(function (e) {
                        var a = e.key;
                        e = e.value;
                        2 === c.length ? c(a, e) : c([a, e])
                    })
                };
                c.forEach = function (c) {
                    var e = this;
                    "function" === typeof c && this.loop(function (a) {
                        c(a.value, a.key, e)
                    })
                };
                c.toArray = function () {
                    return this.list.map(function (c) {
                        return [c.key, c.value]
                    })
                };
                c.toString = function () {
                    return "KeyValue(" + this.size + ")"
                };
                c.loop = function (c) {
                    if ("function" ===
                        typeof c)
                        for (var e = 0; e < this.list.length;) c.call(this, this.list[e]), e++
                };
                c.create = function (c) {
                    var e = 0;
                    if (c && 0 < c.length)
                        for (; e < c.length;) {
                            var a = c[e];
                            this.set(a[0], a[1]);
                            e++
                        }
                };
                c.find = function (c) {
                    c = this.indexOf(this.index, c);
                    if (-1 !== c) return this.list[c]
                };
                c.indexOf = function (c, e) {
                    return [].indexOf.call(c, e)
                };
                f()(e, [{
                    key: "size",
                    get: function () {
                        return this.lastIndex
                    }
                }]);
                return e
            }();
            b["default"] = a ? n : d
        }, function (a, b, d) {
            d.d(b, "a", function () {
                return f
            });
            var f = {
                environment: "production",
                "package": {
                    version: "2.6.1"
                },
                server: function (a) {
                    switch (a) {
                        case "development":
                            return {
                                port: 8080,
                                css_path: "/",
                                public_host: "webvisor.local"
                            };
                        case "test":
                            return {
                                port: 8080,
                                css_path: "/",
                                public_host: "webvisor.local"
                            };
                        case "production":
                            return {
                                port: 8080,
                                css_path: "/",
                                public_host: "webvisor.local"
                            };
                        case "metrika":
                            return {
                                port: 8080,
                                css_path: "/",
                                public_host: "webvisor.local"
                            }
                    }
                }("production"),
                respectDoNotTrack: !0,
                experimentalWebSocket: !0,
                captors: {
                    canvas: !1,
                    input: !0,
                    checkable: !0,
                    keystrokes: !0,
                    media: !1,
                    mouse: !0,
                    focus: !0,
                    mutations: !0,
                    resize: !0,
                    deviceRotation: !0,
                    selection: !0,
                    scroll: !0,
                    touch: !0,
                    zoom: !0,
                    window: !0
                },
                captorsConfig: {
                    input: {
                        PD: function () {
                            return {
                                delimiter: "(-|\\.|_|\\s){0,2}",
                                suspiciosWords: "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" "),
                                placeholderSuspiciousWords: "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" ")
                            }
                        }
                    }
                },
                DOMIndexer: {
                    IGNORED_NODES: ["script", "noscript", "audio"],
                    IGNORED_ATTRIBUTES: {
                        "*": ["^on*", "srcset", "integrity", "crossorigin"],
                        iframe: ["src"],
                        script: ["src", "type"],
                        a: ["href"]
                    },
                    SKIPPED_ATTRIBUTES: [],
                    EXTRA_ATTRIBUTES: {
                        VIDEO: ["width", "height"]
                    },
                    URL_NODES: ["link", "img", "svg"],
                    URL_ATTRIBUTES: "href link content poster style src srcset".split(" "),
                    IGNORE_NODES_ORDER: ["HEAD"],
                    HIDABLE_NODES: "#text IMG INPUT BUTTON SELECT TEXTAREA".split(" "),
                    REPLACE_ATTRIBUTES: {
                        a: {
                            href: "#"
                        }
                    }
                }
            }
        }, function (a, b) {
            function d(a, b) {
                for (var d =
                    0; d < b.length; d++) {
                    var h = b[d];
                    h.enumerable = h.enumerable || !1;
                    h.configurable = !0;
                    "value" in h && (h.writable = !0);
                    Object.defineProperty(a, h.key, h)
                }
            }
            a.exports = function (a, b, m) {
                b && d(a.prototype, b);
                m && d(a, m);
                return a
            }
        }, function (a, b, d) {
            (function (a, g) {
                var f = d(5),
                    h = d(2),
                    n = function () {
                        function e(c, e) {
                            var b = void 0 === e ? {} : e,
                                k = b.context;
                            k = void 0 === k ? null : k;
                            b = b.expose;
                            b = void 0 === b ? !1 : b;
                            this.allowedEvents = new f["default"]((this.eventsList || c || []).map(function (c) {
                                return c.split(":")[0]
                            }));
                            this.context = k || this;
                            this._define("_events",
                                new a)._define("_memory", new a)._define("_namespaces", new a)._define("_options", new a)._define("_once", new a);
                            this._setupEvents();
                            this._exposeEvents(k, b)
                        }
                        var c = e.prototype;
                        c.emit = function (c) {
                            for (var e = this, a = arguments.length, b = Array(1 < a ? a - 1 : 0), k = 1; k < a; k++) b[k - 1] = arguments[k];
                            return new g(function (a, k) {
                                var d = c.split(" ");
                                h.IterableUtils.forof(d, function (c) {
                                    e._invokeEvent(c, b, a, k)
                                });
                                return e
                            })
                        };
                        c.on = function (c, e) {
                            var a = this;
                            if ("function" === typeof e) {
                                var b = c.split(" ");
                                h.IterableUtils.forof(b, function (c) {
                                    a._saveEvent(c,
                                        e)
                                })
                            } else throw Error("Callback sould be a function");
                            return this
                        };
                        c.off = function (c, e) {
                            var a = this;
                            var b = c ? c.split(" ") : h.IterableUtils.keys(a._events);
                            h.IterableUtils.forof(b, function (c) {
                                a._removeEvent(c, e)
                            });
                            return this
                        };
                        c._define = function (c, e) {
                            Object.defineProperty(this, c, {
                                value: e,
                                writable: !1
                            });
                            return this
                        };
                        c._exposeEvents = function (c, e) {
                            e && Object.assign(c, {
                                on: this.on.bind(this),
                                off: this.off.bind(this),
                                emit: this.emit.bind(this)
                            })
                        };
                        c._getNamespace = function (c, e) {
                            var a = this._namespaces.get(c);
                            return a ?
                                a.get(e) || this._events.get(c) : this._events.get(c)
                        };
                        c._hasOption = function (c, e) {
                            var a = this._options.get(c);
                            return !!a && a.has(e)
                        };
                        c._invokeEvent = function (c, e, a) {
                            var b = this;
                            c = c.split(".");
                            var k = c[0];
                            c = c[1];
                            var d = this._hasOption(k, "stop");
                            if ((c = this._getNamespace(k, c)) && 0 < c.size) {
                                var n = g.resolve();
                                e = this._saveMemory(k, e);
                                h.IterableUtils.forof(c, function (c) {
                                    if (b._isAlreadyCalled(k, c)) return !0;
                                    n = n.then(function (h) {
                                        return !1 !== h ? (h = b._runCallback(k, c, e), a(h), d ? h : null) : !1
                                    })
                                })
                            }
                        };
                        c._isAlreadyCalled = function (c,
                                                       e) {
                            if (this._hasOption(c, "once")) {
                                var a = this._once.get(c) || new f["default"];
                                if (a.has(e)) return !0;
                                a.add(e);
                                this._once.set(c, a)
                            }
                            return !1
                        };
                        c._runCallback = function (c, e, a) {
                            a = this._saveMemory(c, a);
                            return e.call.apply(e, [this.context].concat(a))
                        };
                        c._saveEvent = function (c, e) {
                            var a = c.split(":"),
                                b = a[0];
                            a = a.slice(1);
                            var k = b.split(".");
                            b = k[0];
                            k = k[1];
                            var h = this._events.get(b) || new f["default"];
                            a = this._options.get(b) || new f["default"](a);
                            var d = this._memory.get(b) || !1;
                            h.has(e) || (h.add(e), this._events.set(b, h), this._options.set(b,
                                a), this._saveNamespace(b, k, e), d && this._runCallback(b, e, d))
                        };
                        c._saveMemory = function (c, e) {
                            return this._hasOption(c, "memory") ? this._memory.has(c) ? this._memory.get(c) || [] : this._memory.set(c, e) && e : e
                        };
                        c._saveNamespace = function (c, e, b) {
                            var k = this._namespaces.get(c) || new a,
                                h = k.get(e || "__global") || new f["default"];
                            h.add(b);
                            k.set(e || "__global", h);
                            this._namespaces.set(c, k)
                        };
                        c._setupEvents = function () {
                            var c = this;
                            this.allowedEvents.size && h.IterableUtils.forof(this.allowedEvents, function (e) {
                                var a = e.split(":");
                                e =
                                    a[0];
                                a = a.slice(1);
                                c._options.set(e, new f["default"](a));
                                c._events.set(e, new f["default"])
                            })
                        };
                        c._removeCallbacks = function (c, e) {
                            if (e instanceof f["default"]) {
                                var a = this._events.get(c);
                                h.IterableUtils.forof(e, function (c) {
                                    a && a["delete"](c)
                                })
                            }
                        };
                        c._removeEvent = function (c, e) {
                            var a = c.split("."),
                                b = a[0];
                            a = a[1];
                            var k = this._events.get(b) || new f["default"];
                            k.has(e) ? (a || k["delete"](e), this._removeNamespace(b, a, e)) : (a || (this._events["delete"](b), this._options["delete"](b)), this._removeNamespace(b, a))
                        };
                        c._removeNamespace =
                            function (c, e) {
                                var a = this,
                                    b = this._namespaces.get(c);
                                b && (e ? (this._removeCallbacks(c, b.get(e)), b["delete"](e)) : (h.IterableUtils.forof(b, function (e) {
                                    a._removeCallbacks(c, e)
                                }), this._namespaces["delete"](c)))
                            };
                        return e
                    }();
                b.a = n
            }).call(this, d(11)["default"], d(21).Promise)
        }, function (a, b) {
            a.exports = function (a, b) {
                a.prototype = Object.create(b.prototype);
                a.prototype.constructor = a;
                a.__proto__ = b
            }
        }, function (a, b, d) {
            b.a = function (a, b) {
                var d = 2 === b.length;
                if (a && b instanceof Function)
                    for (var h in a) {
                        var n = d ? b(h, a[h]) :
                            b(h);
                        if (!0 !== n && !1 === n) break
                    }
            }
        }, function (a, b, d) {
            (function (a, g) {
                d.d(b, "a", function () {
                    return v
                });
                var f = d(12),
                    h = new a,
                    n = String.fromCharCode(8226),
                    e = f.a.captorsConfig.input.PD();
                f = e.suspiciosWords;
                e = e.placeholderSuspiciousWords;
                var c = new RegExp("(" + f.join("|") + ")", "i"),
                    k = new RegExp("(" + f.concat(e).join("|") + ")", "i"),
                    v = {
                        isValidType: function (c) {
                            return /color|date|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/i.test(c)
                        },
                        isValidNode: function (c) {
                            var e = c.nodeName;
                            c = c.type;
                            return "INPUT" ===
                            e ? v.isValidType(c) : /textarea|select|progress/i.test(e)
                        },
                        isPrivateInformationField: function (e) {
                            var a = e.placeholder;
                            return [e.className, e.id, e.name].reduce(function (e, a) {
                                return e || c.test(a)
                            }, !1) || k.test(a)
                        },
                        isIgnored: function (c) {
                            var e = c.className;
                            return /password/i.test(c.type) || /ym-disable-keys/i.test(e) || g.isHiddenContent(c) ? !0 : !1
                        },
                        isRecordable: function (c) {
                            return this.matchesClass(c.className, "ym-record-keys") ? !0 : !1
                        },
                        matchesClass: function (c, e) {
                            return (new RegExp(e, "i")).test(c)
                        },
                        isAllowed: function (c,
                                             e) {
                            void 0 === e && (e = !1);
                            return e ? !0 === v.isRecordable(c) : !1 === v.isIgnored(c)
                        },
                        isChanged: function (c, e) {
                            var a = !0;
                            h.has(c) && (a = h.get(c)[0], a = e !== a);
                            a && h.set(c, [e]);
                            return a
                        },
                        validate: function (c, e) {
                            void 0 === e && (e = {});
                            var a = e,
                                b = a.isEU,
                                k = a.recording.keysMode;
                            a = v.isRecordable(c);
                            var h = v.isPrivateInformationField(c);
                            b = v.isAllowed(c, "explicit" === k) && (!b || !h);
                            return {
                                forceRecord: a,
                                isPrivate: h,
                                isAllowed: b
                            }
                        },
                        encode: function (c) {
                            void 0 === c && (c = "");
                            return c && 0 < c.length ? c.split(/\n/).map(function (c) {
                                return g.repeatString(n,
                                    c.length)
                            }).join("\n") : c
                        }
                    }
            }).call(this, d(11)["default"], d(4)["default"])
        }, function (a, b, d) {
            (function (a, d) {
                var f = new a;
                b.a = {
                    throttledFunctions: f,
                    invokeAll: function (a) {
                        d.fastIterate(f, function (b, e) {
                            e.invoke.call(a)
                        })
                    },
                    create: function (a, b) {
                        var e = void 0 === b ? {} : b,
                            c = e.timeout,
                            k = void 0 === c ? 0 : c;
                        c = e.immediateFirstRun;
                        var h = void 0 === c ? !1 : c;
                        e = e.context;
                        var n = !0,
                            g = null,
                            m = null,
                            l = null,
                            K = null,
                            z = !1,
                            ba = null,
                            p = null;
                        e = {
                            invoke: function () {
                                var c = this.context || this;
                                l !== g && (K = d.now(), l = g, a.call(c, {
                                    object: g,
                                    prevObject: null,
                                    timeDifff: 0,
                                    args: p
                                }))
                            },
                            run: function (c) {
                                var e = this.context || this;
                                h && (clearTimeout(ba), ba = E(function () {
                                    return n = !0
                                }, k));
                                if (!z) {
                                    g = c;
                                    for (var b = arguments.length, f = Array(1 < b ? b - 1 : 0), v = 1; v < b; v++) f[v - 1] = arguments[v];
                                    p = f;
                                    n && h ? (n = !1, l = c, a.call(e, {
                                        object: c,
                                        prevObject: null,
                                        timeDifff: 0,
                                        args: p
                                    })) : (K = d.now(), z = !0, E(function Gb() {
                                        var c = parseInt(d.now() - K, 10);
                                        c >= k ? (z = !1, K = d.now(), l !== g && (m = l, l = g, a.call(e, {
                                            object: g,
                                            prevObject: m,
                                            timeDiff: c,
                                            args: p
                                        }))) : E(Gb)
                                    }))
                                }
                            },
                            context: void 0 === e ? null : e,
                            call: function () {
                                var c;
                                (c = this.run).call.apply(c,
                                    arguments)
                            }
                        };
                        f.set(a, e);
                        return e
                    },
                    setContext: function (a, b) {
                        if (f.has(a)) {
                            var e = f.get(a);
                            null == e.context && (e.context = b)
                        }
                    }
                }
            }).call(this, d(11)["default"], d(4)["default"])
        }, function (a, b, d) {
            var f = d(0),
                g = function () {
                    var a = !1;
                    try {
                        f.a.addEventListener("test", null, Object.defineProperties({}, {
                            passive: {
                                get: function () {
                                    return a = !0
                                },
                                configurable: !0,
                                enumerable: !0
                            }
                        }))
                    } catch (n) {}
                    return a
                }(),
                m = function (a, b, e, c, k) {
                    void 0 === k && (k = {});
                    a += "EventListener";
                    return g ? b[a](e, c, k) : b[a](e, c, k.capture || k.useCapture || !1)
                };
            a = function () {
                function a() {}
                a.on = function () {
                    for (var a = arguments.length, e = Array(a), c = 0; c < a; c++) e[c] = arguments[c];
                    return m.apply(void 0, ["add"].concat(e))
                };
                a.off = function () {
                    for (var a = arguments.length, e = Array(a), c = 0; c < a; c++) e[c] = arguments[c];
                    return m.apply(void 0, ["remove"].concat(e))
                };
                return a
            }();
            b.a = a
        }, function (a, b, d) {
            d.r(b);
            a = d(0);
            d = a.a.Symbol instanceof Function && a.a.Symbol.iterator ? a.a.Symbol : d(66);
            b["default"] = d
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "Promise", function () {
                return f
            });
            var f = d(0).a.Promise || d(87).Promise
        }, function (a,
                     b, d) {
            d.r(b);
            d.d(b, "StringUtils", function () {
                return m
            });
            var f = d(0),
                g = d(2),
                m = {
                    dasherize: function (a) {
                        return a.replace(/[A-Z]/g, function (b, e) {
                            var c = /[A-Z]/g.test(a[e - 1]);
                            return (0 === e || c ? "" : "-") + b.toLowerCase()
                        })
                    },
                    pad: function (a, b, e, c) {
                        void 0 === b && (b = 2);
                        void 0 === e && (e = " ");
                        void 0 === c && (c = !1);
                        a = String(a);
                        b = g.IterableUtils.fill(Array(Math.max(0, Math.min(b - a.length, b))), e);
                        return c ? "" + a + b.join("") : "" + b.join("") + a
                    },
                    stringToBlobURL: function (a, b, e) {
                        void 0 === e && (e = f.a.location);
                        var c = function () {
                                try {
                                    return new Blob([a], {
                                        type: b
                                    })
                                } catch (A) {
                                    var c = f.a;
                                    c = new(c.BlobBuilder || c.WebKitBlobBuilder || c.MozBlobBuilder || c.MSBlobBuilder);
                                    c.append(a);
                                    return c.getBlob(b)
                                }
                            }(),
                            k = function (c) {
                                return c ? (c = (URL || webkitURL).createObjectURL(c), /blob:(?!http[s]?).*/.test(c) ? c.replace("blob:", "blob:" + (e.protocol + "//" + e.host) + "/") : c) : y
                            }(c);
                        return c ? {
                            blob: c,
                            url: k
                        } : null
                    },
                    repeatString: function (a, b) {
                        void 0 === b && (b = 1);
                        return Array(b + 1).join(a)
                    },
                    parseURL: function (a) {
                        if (!a) return y;
                        if ("string" !== typeof a) return f.a.console.warn("URL was expected to be a string",
                            a), y;
                        var b = a.match(/^(http[s]?|file):\/\/([^/\n]*)([^?\n]*)(\?[^\n]*)?/);
                        if (b) {
                            var e = b.slice(1);
                            b = e[0];
                            var c = e[1],
                                k = e[2];
                            e = e[3];
                            var h = c ? (c.match(/([^:\s]+)(:[0-9]*)?/) || []).slice(1) : [],
                                d = h[0];
                            d = void 0 === d ? y : d;
                            h = h[1];
                            h = void 0 === h ? y : h;
                            var g = d ? (d.match(/\.([^.]+)$/) || [])[1] : y,
                                m = k ? function () {
                                    var c = k.match(/([^/]+)\.([^/]*)$/);
                                    return c ? c[0] : y
                                }() : y,
                                l = k && m ? k.replace("/" + m, "") : k || "/";
                            return {
                                protocol: b ? b + ":" : y,
                                hostname: c,
                                host: d,
                                port: (h || "80").replace(/:/, ""),
                                path: k || "/",
                                tld: g,
                                file: m,
                                pathname: l,
                                search: e ? e.replace(/^\?/,
                                    "") : y,
                                url: a,
                                assemble: function (c) {
                                    var e = this;
                                    return c ? c.replace(/(\{([^}]+)\})/g, function () {
                                        return e[2 >= arguments.length ? y : arguments[2]]
                                    }) : this.url
                                }
                            }
                        }
                        return y
                    }
                }
        }, function (a, b, d) {
            d.r(b);
            (function (a, g) {
                d.d(b, "Tools", function () {
                    return n
                });
                var f = d(12),
                    h = d(0),
                    n = {
                        delay: function (e, c) {
                            void 0 === c && (c = 0);
                            return new a(function (a) {
                                E(function () {
                                    a(e())
                                }, c)
                            })
                        },
                        copyText: function (e) {
                            return new a(function (c) {
                                var a = q.createElement("textarea");
                                a.value = e;
                                a.style.opacity = "0";
                                a.style.position = "absolute";
                                a.style.top = "-99999px";
                                a.style.left = "-99999px";
                                a.onselect = function () {
                                    try {
                                        a.onselect = null, q.execCommand && q.execCommand("copy"), c()
                                    } catch (v) {}
                                    a.parentNode.removeChild(a)
                                };
                                q.body.appendChild(a);
                                a.select()
                            })
                        },
                        globalize: function (e, c) {
                            if ("undefined" !== typeof h.a) h.a[c] = e;
                            else return !1
                        },
                        guid: function () {
                            var e = function () {
                                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                            };
                            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                        },
                        measure: function (e, c, a) {
                            if (null != c) return this.isFunction(c) ? c() : c
                        },
                        apiMock: function (e) {
                            var c = {
                                properties: [],
                                methods: []
                            };
                            e = e.prototype;
                            for (var a in e)
                                if (e.hasOwnProperty(a)) try {
                                    e[a] instanceof Function ? c.methods.push(a) : c.properties.push(a)
                                } catch (v) {
                                    c.properties.push(a)
                                }
                            return c
                        },
                        imageUrl: function (a) {
                            return /^\//.test(a) ? a : [f.a.server.css_path.replace(/([/]+)$/, ""), a].join("/")
                        },
                        cast: function (a) {
                            if ("null" === a) return null;
                            if ("undefined" === a) return y;
                            if ("true" === a) return !0;
                            if ("false" === a) return !1;
                            var c = Number(a);
                            return String(c) === a ? c : a
                        },
                        "catch": function (a) {
                            try {
                                a()
                            } catch (c) {
                                return g.log(c), c
                            }
                        },
                        fetch: d(39).a,
                        promise: function (e) {
                            return (new a(function (c, a) {
                                e(c, a)
                            }))["catch"](function (c) {
                                h.a.console.log(c)
                            })
                        },
                        isNULL: function (a) {
                            return null == a
                        },
                        isFunction: function (a) {
                            return "function" === typeof a
                        },
                        promiseError: function (e) {
                            h.a.console.log(e);
                            return a.reject(e)
                        },
                        promiseExec: function (e) {
                            return new a(function (c) {
                                c(e())
                            })
                        },
                        requestAnimationFrame: function (a) {
                            var c = this.findNativeImplementation("requestAnimationFrame"),
                                e = this.findNativeImplementation("cancelAnimationFrame");
                            if (c && e) return this.requestAnimationFrame =
                                c.bind(p), this.requestAnimationFrame(a);
                            this.requestAnimationFrame = c = function (c) {
                                return E(c, 4)
                            };
                            return c(a)
                        },
                        cancelAnimationFrame: function (a) {
                            var c = this.findNativeImplementation("requestAnimationFrame"),
                                e = this.findNativeImplementation("cancelAnimationFrame");
                            if (c && e) return this.cancelAnimationFrame = e.bind(p), this.cancelAnimationFrame(a);
                            this.cancelAnimationFrame = function (c) {
                                return clearTimeout(c)
                            };
                            return clearTimeout(a)
                        },
                        errorProxy: function (a, c, b) {
                            void 0 === c && (c = !1);
                            void 0 === b && (b = null);
                            try {
                                return a()
                            } catch (v) {
                                return p.console.warn("Error while running " +
                                    (b || a.name), v), c
                            }
                        }
                    }
            }).call(this, d(21).Promise, d(10)["default"])
        }, function (a, b, d) {
            (function (a) {
                function f(b) {
                    if (null != b) {
                        if (b instanceof Array) return [].slice.call(b, 0);
                        if (h.ObjectUtils.isNative(m.a.Array.from, "from")) return m.a.Array.from(b);
                        var e = b.size || b.length,
                            c = [].slice.call(b, 0);
                        if (c.length === e) return c;
                        try {
                            var k = [];
                            if (b.forEach) b.forEach(function (c, a) {
                                a && c && a !== c ? k.push([a, c]) : k.push(c)
                            });
                            else
                                for (var d = b[a.iterator](), f, n; f = d.next(), n = f.value, !f.done;) k.push(n);
                            return k
                        } catch (x) {}
                    }
                    return []
                }
                d.d(b, "a", function () {
                    return f
                });
                var m = d(6),
                    h = d(8)
            }).call(this, d(20)["default"])
        }, function (a, b, d) {
            (function (a) {
                var f = d(24),
                    m = function (a, b, e) {
                        a.forEach(function (c, a) {
                            2 == b.length ? e ? b(c, a) : b([c, a]) : b(c)
                        })
                    };
                b.a = function (b, d) {
                    var e = 2 === d.length;
                    if (b && d instanceof Function)
                        if (null != b[a.iterator])
                            if (e)
                                if (b instanceof Array) {
                                    e = 0;
                                    for (var c = b.length; e < c; e++) {
                                        var k = d(e, b[e]);
                                        if (!0 !== k && !1 === k) break
                                    }
                                } else {
                                    c = b;
                                    k = Array.isArray(c);
                                    var h = 0;
                                    for (c = k ? c : c[a.iterator]();;) {
                                        if (k) {
                                            if (h >= c.length) break;
                                            e = c[h++]
                                        } else {
                                            h = c.next();
                                            if (h.done) break;
                                            e = h.value
                                        }
                                        var n = e;
                                        e = n[1];
                                        e = d(n[0], e);
                                        if (!0 !== e && !1 === e) break
                                    }
                                }
                            else
                                for (c = b, k = Array.isArray(c), h = 0, c = k ? c : c[a.iterator]();;) {
                                    if (k) {
                                        if (h >= c.length) break;
                                        e = c[h++]
                                    } else {
                                        h = c.next();
                                        if (h.done) break;
                                        e = h.value
                                    }
                                    e = d(e);
                                    if (!0 !== e && !1 === e) break
                                } else if (b.forEach) m(b, d, e);
                        else
                            for (c = Object(f.a)(b), k = 0; k < c.length && (h = e ? d.apply(void 0, c[k]) : d(c[k]), !0 === h || !1 !== h); k++);
                }
            }).call(this, d(20)["default"])
        }, function (a, b) {
            a.exports = function (a, b) {
                if (null == a) return {};
                var d = {},
                    f = Object.keys(a),
                    h;
                for (h = 0; h <
                f.length; h++) {
                    var n = f[h];
                    0 <= b.indexOf(n) || (d[n] = a[n])
                }
                return d
            }
        }, function (a, b, d) {
            (function (a, g, m, h) {
                d.d(b, "b", function () {
                    return l
                });
                var f = d(1);
                f = d.n(f);
                var e = d(14),
                    c = "2d webgl experimental-webgl webgl2 experimental-webgl2 bitmaprenderer".split(" "),
                    k = function () {
                        var a = q.createElement("canvas");
                        a.proxy = !1;
                        return c.filter(function (c) {
                            return null != a.getContext(c)
                        })
                    }(),
                    v = new a,
                    A = HTMLCanvasElement.prototype.getContext,
                    l = function (c) {
                        var a = q.createElement("canvas");
                        a.width = c.width;
                        a.height = c.height;
                        a.proxy = !1;
                        a.getContext("2d").drawImage(c, 0, 0);
                        return a.toDataURL("image/jpeg")
                    },
                    x = function (c) {
                        c = c.constructor;
                        if (v.has(c)) return v.has(c);
                        var a = g.apiMock(c);
                        v.set(c, a);
                        return a
                    };
                a = function () {
                    function a() {}
                    a.mock = function () {
                        if (!this.mocked) {
                            this.mocked = !0;
                            HTMLCanvasElement.prototype.getContext = function (c) {
                                var e = A.call(this, c);
                                if (null !== e) return !1 !== this.proxy && 0 <= k.indexOf(c) && a.update(e), e
                            };
                            var e = q.querySelectorAll("canvas");
                            g.forof(e, function (a) {
                                g.forof(c, a.getContext.bind(a))
                            })
                        }
                    };
                    a.remove = function () {
                        this.mocked &&
                        (this.mocked = !1, this.events.off(), HTMLCanvasElement.prototype.getContext = A)
                    };
                    a.update = function (c) {
                        if (!1 === a.proxies.has(c)) {
                            var e = this,
                                b = c.canvas,
                                k = Object.getPrototypeOf(c),
                                h = x(c);
                            g.nodeIsRecordable(b) && h.properties ? (g.forof(h.properties, function (a) {
                                var b = Object.getOwnPropertyDescriptor(k, a),
                                    h = g.combine(b);
                                b.get && (h.get = b.get.bind(c));
                                b.set && (h.set = function (k) {
                                    e.setterInvoked(c, a, k);
                                    return b.set.call(c, k)
                                });
                                Object.defineProperty(c, a, h)
                            }), g.forof(h.methods, function (a) {
                                var b = c[a];
                                Object.defineProperty(c,
                                    a, {
                                        configurable: !0,
                                        value: function () {
                                            for (var k = arguments.length, h = Array(k), d = 0; d < k; d++) h[d] = arguments[d];
                                            e.methodInvoked(c, a, h);
                                            return b.bind.apply(b, [c].concat(h))
                                        }
                                    })
                            }), m.log("Initialized proxy for " + c.constructor.name, c.canvas)) : m.warn("Canvas ignored: -metrika-ignore provided");
                            a.proxies.add(c)
                        }
                    };
                    a.setterInvoked = function (c, a, e) {
                        var b = this;
                        this.mocked && E(function () {
                            b.send(c, "setter", {
                                name: a,
                                value: String(e)
                            })
                        })
                    };
                    a.methodInvoked = function (c, a, e) {
                        var b = this;
                        this.mocked && E(function () {
                            e = e.map(function (c) {
                                return c instanceof
                                Image ? l(c) : String(c)
                            });
                            b.send(c, "method", {
                                name: a,
                                args: e
                            })
                        })
                    };
                    a.send = function (c, a, e) {};
                    return a
                }();
                f()(a, "proxies", new h);
                f()(a, "mocked", !1);
                f()(a, "events", new e.a(["setter:memory", "method:memory"]));
                b.a = a
            }).call(this, d(11)["default"], d(4)["default"], d(10)["default"], d(5)["default"])
        }, function (a, b, d) {
            (function (a, g) {
                var f = d(13),
                    h = d.n(f);
                f = d(1);
                var n = d.n(f);
                f = function () {
                    function e() {
                        n()(this, "executionFrameId", null);
                        n()(this, "jobExecutionStartStamp", null);
                        this.jobs = [];
                        this.isRunning = !1
                    }
                    var c = e.prototype;
                    c.push = function (c, e) {
                        var b, k = this;
                        void 0 === e && (e = !1);
                        (b = this.jobs).push.apply(b, [].concat(c));
                        e ? this.start(!0) : a.requestAnimationFrame(function () {
                            return k.start(e)
                        })
                    };
                    c.start = function (c) {
                        void 0 === c && (c = !1);
                        this.isRunning || this.executeNextJob(c)
                    };
                    c.executeNextJob = function (c) {
                        void 0 === c && (c = !1);
                        this.hasJobs && (c ? this._executeJobsSync() : this._executeJobsAsync())
                    };
                    c._executeJobsSync = function () {
                        if (this.hasJobs && this.isRunning) {
                            for (a.cancelAnimationFrame(this.executionFrameId); this.hasJobs;) this._executeJob();
                            this.jobExecutionStartStamp = null;
                            this.isRunning = !1
                        }
                    };
                    c._executeJobsAsync = function () {
                        var c = this;
                        if (this.hasJobs) {
                            this.isRunning = !0;
                            var e;
                            this.executionFrameId = a.requestAnimationFrame(function () {
                                for (; c.hasJobs && (!c.jobExecutionStartStamp || 150 > e);) e = c._executeJob(!c.jobExecutionStartStamp);
                                c.jobExecutionStartStamp = null;
                                c._executeJobsAsync()
                            })
                        } else this.isRunning = !1
                    };
                    c._executeJob = function (c) {
                        void 0 === c && (c = !0);
                        c && (this.jobExecutionStartStamp = (new Date).valueOf());
                        c = this.jobs.shift();
                        try {
                            c()
                        } catch (v) {
                            g.log("Error occurred when running job"),
                                g.log(v), g.log(c.toString())
                        }
                        return (new Date).valueOf() - this.jobExecutionStartStamp
                    };
                    h()(e, [{
                        key: "hasJobs",
                        get: function () {
                            return 0 < this.jobs.length
                        }
                    }]);
                    return e
                }();
                b.a = f
            }).call(this, d(4)["default"], d(10)["default"])
        }, function (a, b, d) {
            d.d(b, "a", function () {
                return f
            });
            d.d(b, "b", function () {
                return g
            });
            var f = function () {
                    function a() {
                        this.m = []
                    }
                    var b = a.prototype;
                    b.use = function (a) {
                        this.m.push(a)
                    };
                    b.useRight = function (a) {
                        this.m.unshift(a)
                    };
                    b.run = function (a, e) {
                        this._execute(a, e)
                    };
                    b._execute = function (a, e) {
                        this.m.reduceRight(function (c,
                                                     e) {
                            return function (b) {
                                return e(b || a, c)
                            }
                        }, function (c) {
                            return e(c || a)
                        })(a)
                    };
                    return a
                }(),
                g = function () {
                    function a() {
                        this.m = []
                    }
                    var b = a.prototype;
                    b.use = function (a) {
                        this.m.push(a)
                    };
                    b.useRight = function (a) {
                        this.m.unshift(a)
                    };
                    b.run = function (a, e) {
                        return this._execute(a, e)
                    };
                    b._execute = function (a) {
                        for (var e = 0, c = this.m.length; e < c; e++) {
                            var b = this.m[e](a);
                            if (b === y) break;
                            a = b
                        }
                        return a
                    };
                    return a
                }()
        }, function (a, b, d) {
            var f = d(76)();
            a.exports = function (a) {
                return a !== f && null !== a
            }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "NumberUtils",
                function () {
                    return f
                });
            var f = {
                size: function (a, b) {
                    void 0 === b && (b = "kb");
                    switch (b.toLowerCase()) {
                        case "b":
                        case "byte":
                        case "bytes":
                            return a;
                        case "kb":
                        case "kilobyte":
                        case "kilobytes":
                            return a * this.size(1024, "bytes");
                        case "mb":
                        case "megabyte":
                        case "megabytes":
                            return a * this.size(1024, "kilobytes");
                        case "gb":
                        case "gigabyte":
                        case "gigabytes":
                            return a * this.size(1024, "megabytes");
                        case "tb":
                        case "terabyte":
                        case "terabytes":
                            return a * this.size(1024, "gigabytes")
                    }
                },
                bytesToSize: function (a) {
                    if (0 === a) return "0 Byte";
                    var b = parseInt(Math.floor(Math.log(a) / Math.log(1024)), 10);
                    return Math.round(a / Math.pow(1024, b), 2) + " " + ["Bytes", "KB", "MB", "GB", "TB"][b]
                },
                closestNumber: function (a, b) {
                    return a.length ? a.reduce(function (a, d) {
                        return Math.abs(d - b) < Math.abs(a - b) ? d : a
                    }) : null
                }
            }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "BrowserUtils", function () {
                return g
            });
            var f = d(0),
                g = {
                    isMSIE: function () {
                        var a = f.a.navigator.userAgent,
                            b = a.indexOf("MSIE ");
                        if (0 < b) return parseInt(a.substring(b + 5, a.indexOf(".", b)), 10);
                        if (0 < a.indexOf("Trident/")) return b = a.indexOf("rv:"),
                            parseInt(a.substring(b + 3, a.indexOf(".", b)), 10);
                        b = a.indexOf("Edge/");
                        return 0 < b ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : !1
                    },
                    isIframe: function (a) {
                        return a.top !== a
                    },
                    isMobile: function (a) {
                        a = a || p && p.navigator ? navigator.userAgent : null;
                        if (null == a) return !1;
                        var b = !1;
                        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
                            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,
                                4))) b = !0;
                        return b
                    },
                    isAndroid: function () {
                        return /android/i.test(navigator.userAgent)
                    },
                    isIOS: function () {
                        return /ipad|iphone|ipod/i.test(navigator.userAgent)
                    },
                    orientation: function (a) {
                        a = a || f.a;
                        return null != a ? a : (a = a.screen.orientation || a.screen.mozOrientation || a.screen.msOrientation) && a.angle || 0
                    },
                    devicePixelRatio: function () {
                        return f.a.devicePixelRatio || 1
                    },
                    meta: function (a) {
                        return (a = q.querySelector('meta[name\x3d"ym:' + a + '"]')) ? a.content : null
                    },
                    scaleFactor: function (a, b) {
                        var d = a.clientWidth,
                            e = a.clientHeight,
                            c = b.clientWidth,
                            k = b.clientHeight;
                        return c > d || k > e ? (d /= c, e /= k, Math.min(1, Math.max(d > e ? .1 : .35, Math.min(d, e)))) : 1
                    },
                    viewportGetter: function (a) {
                        a = a || p.document;
                        var b = a.defaultView,
                            d = a.querySelector("ym-measure.ym-viewport"),
                            e = a.querySelector("ym-measure.ym-zoom");
                        null === d && (d = this.createElement("ym-measure", {
                            className: "ym-viewport",
                            style: {
                                display: "block",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                position: "fixed",
                                transform: "translate(0, -100%)",
                                msTransform: "translate(0, -100%)",
                                webkitTransform: "translate(0, -100%)",
                                transformOrigin: "0 0",
                                msTransformOrigin: "0 0",
                                webkitTransformOrigin: "0 0"
                            }
                        }), a.body.appendChild(d));
                        null === e && (e = this.createElement("ym-measure", {
                            className: "ym-zoom",
                            style: {
                                bottom: "100%",
                                position: "fixed",
                                width: "100vw"
                            }
                        }), a.body.appendChild(e));
                        return Object.defineProperties({
                            getSize: function (c) {
                                void 0 === c && (c = 1);
                                var a = d;
                                return {
                                    width: Math.round(a.clientWidth * c),
                                    height: Math.round(a.clientHeight * c)
                                }
                            }
                        }, {
                            zoomLevel: {
                                get: function () {
                                    return parseFloat((e.clientWidth / b.innerWidth).toFixed(3))
                                },
                                configurable: !0,
                                enumerable: !0
                            },
                            scrollingElement: {
                                get: function () {
                                    return a.scrollingElement || (a.documentElement.scrollHeight > a.body.scrollHeight && 0 === a.compatMode.indexOf("CSS1") ? a.documentElement : a.body)
                                },
                                configurable: !0,
                                enumerable: !0
                            },
                            orientation: {
                                get: function () {
                                    var c = da ? da.orientation || da.mozOrientation || da.msOrientation : null;
                                    return c && c.angle || 0
                                },
                                configurable: !0,
                                enumerable: !0
                            }
                        })
                    }
                }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "DocumentUtils", function () {
                return g
            });
            var f = d(32),
                g = {
                    open: function (a) {
                        a && ("IFRAME" === a.nodeName ? a.contentDocument.open() :
                            a.open())
                    },
                    write: function (a, b) {
                        a && ("IFRAME" === a.nodeName ? a.contentDocument.write(b) : a.write(b))
                    },
                    close: function (a) {
                        a && !1 === f.BrowserUtils.isMSIE() && ("IFRAME" === a.nodeName ? a.contentDocument.close() : a.close())
                    },
                    initDocument: function (a) {
                        var b = void 0 === a ? {} : a;
                        a = b.doc;
                        var d = b.doctype;
                        d = void 0 === d ? "\x3c!DOCTYPE html\x3e" : d;
                        b = b.html;
                        b = void 0 === b ? null : b;
                        a = (void 0 === a ? null : a) || q.cloneNode(!1);
                        this.open(a);
                        this.write(a, b || d + "\x3chtml\x3e\x3chead\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                        this.close(a);
                        return a
                    }
                }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "DOMUtils", function () {
                return m
            });
            var f = d(0),
                g = d(2),
                m = {
                    base: function () {
                        var a = q.querySelector("base[href]"),
                            b = q.createElement("a");
                        b.href = a ? a.href : "/";
                        return b.href
                    },
                    getScroll: function (a) {
                        if (null != a) return a.window === a ? {
                            top: a.scrollY,
                            left: a.scrollX
                        } : {
                            top: a.scrollTop,
                            left: a.scrollLeft
                        }
                    },
                    documentVisible: function () {
                        if ("undefined" !== typeof q) {
                            var a = function () {
                                if ("undefined" !== typeof q.hidden) return "hidden";
                                if ("undefined" !== typeof q.msHidden) return "msHidden";
                                if ("undefined" !==
                                    typeof q.webkitHidden) return "webkitHidden"
                            }();
                            return function () {
                                return q[a]
                            }
                        }
                    }(),
                    isDOMNode: function (a) {
                        if (a) try {
                            var b = a.ownerDocument;
                            return a instanceof(b.defaultView || b.parentWindow).Node
                        } catch (e) {
                            return "object" === typeof a && "object" === typeof a.style && "object" === typeof a.ownerDocument
                        } else return !1
                    },
                    isScrollable: function (a) {
                        var b = a.scrollHeight !== a.clientHeight;
                        return a.scrollWidth !== a.clientWidth || b
                    },
                    scrollingElement: function (a) {
                        a = a || q;
                        return a.scrollingElement || (a.documentElement.scrollHeight >
                        a.body.scrollHeight && 0 === a.compatMode.indexOf("CSS1") ? a.documentElement : a.body)
                    },
                    convertNode: function (a, b, e) {
                        var c = void 0 === e ? {} : e;
                        e = c.document;
                        c = c.saveChildren;
                        e = e || a.ownerDocument;
                        var k = e.createElement(b);
                        g.IterableUtils.forof(a.attributes, function (c) {
                            k.setAttribute(c.name, c.value)
                        });
                        c && g.IterableUtils.forof(a.childNodes, function (c) {
                            k.appendChild(c.cloneNode(!0))
                        });
                        return k
                    },
                    nodeIsRecordable: function (a) {
                        if (null !== a) {
                            var b = null != a.getAttribute("metrika-ignore") || /-metrika-ignore/.test(a.className),
                                e = null != a.getAttribute("metrika-force") || /-metrika-force/.test(a.className);
                            a = a.getAttribute("type");
                            return e ? !0 : !b && "password" !== a
                        }
                        return !1
                    },
                    contentSizeChanged: function (a, b) {
                        var e = this,
                            c = {
                                stopped: !1,
                                height: null,
                                width: null,
                                runner: function () {
                                    if (!this.stopped) {
                                        var c = null == a ? {} : "function" === typeof a ? a() || {} : a;
                                        var d = c.scrollHeight;
                                        c = c.scrollWidth;
                                        if (d !== this.height || c !== this.width) this.height = d, this.width = c, b({
                                            width: c,
                                            height: d
                                        });
                                        e.requestAnimationFrame(this.runner.bind(this))
                                    }
                                },
                                stop: function () {
                                    this.stopped = !0
                                }
                            };
                        c.runner();
                        return c
                    },
                    elementsFromPoint: function (a, b, e) {
                        e = e || q;
                        var c = e.msElementsFromPoint || e.elementsFromPoint;
                        if (c) return c.call(e, a, b);
                        c = [];
                        for (var k = [], d;
                             (d = e.elementFromPoint(a, b)) && -1 === c.indexOf(d) && null != d;) c.push(d), k.push({
                            value: d.style.getPropertyValue("pointer-events"),
                            priority: d.style.getPropertyPriority("pointer-events")
                        }), d.style.setProperty("pointer-events", "none", "important");
                        for (a = k.length; b = k[--a];) c[a].style.setProperty("pointer-events", b.value ? b.value : "", b.priority);
                        return c
                    },
                    nodeIndentLevel: function (a) {
                        for (var b = 0; a.parentNode;) a = a.parentNode, b++;
                        return b
                    },
                    offsets: function (a, b) {
                        var e = void 0 === b ? {} : b,
                            c = e.relative,
                            k = void 0 === c ? !1 : c;
                        c = e.excludeBorder;
                        var d = void 0 === c ? !1 : c;
                        e = e.excludePadding;
                        var h = void 0 === e ? !1 : e;
                        null == a.getBoundingClientRect && (a = a.documentElement || a.document.documentElement);
                        var f = a.getBoundingClientRect(),
                            g = a.ownerDocument.defaultView;
                        e = f.top;
                        c = f.right;
                        var n = f.bottom,
                            m = f.left;
                        k && (e = f.y, m = f.x);
                        if (d || h) k = g.getComputedStyle(a), d && (d = k.borderRightWidth, f = k.borderBottomWidth,
                            g = k.borderLeftWidth, e += parseInt(k.borderTopWidth, 10), c += parseInt(d, 10), n += parseInt(f, 10), m += parseInt(g, 10)), h && (h = k.paddingRight, d = k.paddingBottom, f = k.paddingLeft, e += parseInt(k.paddingTop, 10), c += parseInt(h, 10), n += parseInt(d, 10), m += parseInt(f, 10));
                        return {
                            top: e,
                            right: c,
                            bottom: n,
                            left: m
                        }
                    },
                    nodeIsInTree: function (a) {
                        if (this.isDOMNode(a)) {
                            var b = a.ownerDocument;
                            if (null != b) return b.documentElement.contains(a)
                        }
                        return !1
                    },
                    waitForNode: function (a, b, e) {
                        var c = this;
                        void 0 === e && (e = 500);
                        var k = {
                            disconnect: function () {
                                return !1
                            }
                        };
                        if (c.nodeIsInTree(a)) b(!0);
                        else {
                            var d = new MutationObserver(function () {
                                c.nodeIsInTree(a) && (b(!0), d.disconnect())
                            });
                            d.observe(a.ownerDocument.documentElement, {
                                subtree: !0,
                                childList: !0
                            });
                            var h = isFinite(e) ? E(function () {
                                c.nodeIsInTree(a) || (b(!1), d.disconnect())
                            }, e) : null;
                            k.disconnect = function () {
                                clearTimeout(h);
                                d.disconnect()
                            }
                        }
                        return k
                    },
                    placeholderFor: function (a, b) {
                        if (a.placeholder) return a.placeholder;
                        var e = this.convertNode("YM-" + a.nodeName, {
                            saveChildren: b
                        });
                        e.originalNodeName = a.nodeName;
                        return a.placeholder =
                            e
                    },
                    createElement: function (a, b, e) {
                        var c = this;
                        e = e || q;
                        var d = e.createElement(a);
                        this.forin(b, function (a) {
                            var e = b[a];
                            "style" === a ? c.assign(d[a], e) : d[a] = e
                        });
                        return d
                    },
                    matchesSelector: function (a, b) {
                        var e = g.IterableUtils.find(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function (c) {
                            return "function" === typeof q.body[c]
                        });
                        this.matchesSelector = function (c, a) {
                            if (null == c || null == c.ownerDocument) return !1;
                            try {
                                return c[e](a)
                            } catch (v) {
                                return !1
                            }
                        };
                        return this.matchesSelector(a,
                            b)
                    },
                    closestParent: function (a, b, e) {
                        void 0 === e && (e = !1);
                        for (a = e && -1 !== [Node.TEXT_NODE, Node.COMMENT_NODE].indexOf(a.nodeType) ? a : a.parentNode; a;) {
                            if (a && this.matchesSelector(a, b)) return a;
                            a = a.parentNode
                        }
                        return null
                    },
                    isChildOf: function (a, b, e) {
                        return null != this.closestParent(a, b, e)
                    },
                    copyAttributes: function (a, b) {
                        g.IterableUtils.forof(a.attributes, function (e) {
                            try {
                                b.setAttribute(e.name, e.value)
                            } catch (c) {
                                f.a.console.warn("Can't copy attribute [" + e.name + "\x3d" + e.value + "]", {
                                    sourceNode: a
                                })
                            }
                        });
                        return b
                    },
                    isHiddenContent: function (a) {
                        if (null ==
                            a) return !1;
                        if ("#text" === a.nodeName) return this.isHiddenContent(a.parentNode);
                        if (/ym-hidden-content/.test(a.className)) return !1;
                        var b = this.closestParent(a, ".ym-hide-content", !0);
                        a = this.closestParent(a, ".ym-show-content", !0);
                        return function (a, c) {
                            a === c && (c = null);
                            if (null == a && null == c) return !1;
                            if (a && null == c) return !0;
                            if (null == a && c) return !1;
                            if (a && c) return !a.contains(c)
                        }(b, a)
                    }
                }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "FunctionUtils", function () {
                return f
            });
            var f = {
                invoke: function (a, b, d) {
                    void 0 === b && (b = []);
                    return "function" ===
                    typeof a ? (d && (a = a.bind(d)), a.apply(void 0, b)) : a
                },
                lazy: function (a, b) {
                    void 0 === b && (b = 0);
                    var d;
                    return function () {
                        for (var h = arguments.length, e = Array(h), c = 0; c < h; c++) e[c] = arguments[c];
                        clearTimeout(d);
                        d = E(function () {
                            a.apply(void 0, e)
                        }, b)
                    }
                },
                once: function (a) {
                    var b = function () {
                        var d = a.apply(void 0, arguments);
                        b = function () {
                            return d
                        };
                        return d
                    };
                    return function () {
                        return b.apply(void 0, arguments)
                    }
                },
                noop: function () {
                    return function () {}
                },
                toFunction: function (a) {
                    return "function" === typeof a ? a : this.noop()
                },
                repeat: function (a,
                                  b) {
                    var d = void 0 === b ? {} : b,
                        f = d.context,
                        e = void 0 === f ? null : f;
                    f = d.args;
                    var c = void 0 === f ? [] : f;
                    f = d.delay;
                    var k = void 0 === f ? 0 : f;
                    d = d.raf;
                    d = void 0 === d ? !0 : d;
                    var g = Date.now(),
                        m = !1,
                        l = null,
                        x = d ? this.requestAnimationFrame.bind(this) : E,
                        F = d ? this.cancelAnimationFrame.bind(this) : clearTimeout;
                    d = function z() {
                        m ? F(l) : (Date.now() - g >= k && (g = Date.now(), a.apply(e, c)), l = x(z))
                    };
                    d.stop = function () {
                        m = !0
                    };
                    d();
                    return d
                }
            }
        }, function (a, b, d) {
            d.d(b, "a", function () {
                return g
            });
            var f = d(7),
                g = {
                    rand: function (a, b) {
                        return Math.round(Math.random() *
                            (b - a)) + a
                    },
                    charFromRange: function (a, b) {
                        var d = this.rand(a, b);
                        return String.fromCharCode(d)
                    },
                    isLetter: function (a) {
                        return /[\w\u0410-\u042f\u0430-\u044f]/.test(a)
                    },
                    isNumber: function (a) {
                        return /[0-9]/.test(a)
                    },
                    isUpperCase: function (a) {
                        return a === a.toUpperCase()
                    },
                    randomizeString: function (a) {
                        var b = this;
                        return (a || "").split("").map(function (a) {
                            return b.isNumber(a) ? b.rand(0, 9) : b.isLetter(a) ? b.isUpperCase(a) ? b.charFromRange(65, 90) : b.charFromRange(97, 122) : a
                        }).join("")
                    },
                    getNodeBounds: function (a) {
                        if (a.getBoundingClientRect) return a.getBoundingClientRect();
                        var b = q.createRange();
                        b.selectNode(a);
                        a = b.getBoundingClientRect();
                        b.detach();
                        return a
                    }
                };
            (function () {
                function a() {}
                a.simplify = function (a) {
                    var b = a.nodeName,
                        e = a.textContent.trim(),
                        c = "#text" === b;
                    if (c && 0 === e.length) return null;
                    if (c || "IMG" === b) {
                        b = this.getNode(a);
                        var d = g.getNodeBounds(a);
                        f.c.cloneAttributes(a, b);
                        var h = a.className || "",
                            m = this.getClass(c ? "text" : "content");
                        h = (h + " " + m).trim();
                        this.fitGrayBox(b, a, {
                            width: d.width,
                            height: d.height,
                            style: c ? "blur" : "color"
                        }, !1 === !!m);
                        c && (b.textContent = this.randomizeString(e));
                        h && (b.className = h);
                        return b
                    }
                    return this.clone(a)
                };
                a.fitGrayBox = function (a, b, e, c) {
                    var d = void 0 === e ? {} : e;
                    e = d.width;
                    var h = d.height;
                    d = d.style;
                    d = void 0 === d ? "color" : d;
                    void 0 === c && (c = !0);
                    a = a.style;
                    "color" === d && (a.borderRadius = this.copyStyle(b, "borderRadius") || "5px");
                    !1 === c ? (a.width = e + "px", a.height = h + "px") : "blur" === d ? (a.filter = "blur(3px)", a.pointerEvents = "none") : (a.width = e + "px", a.height = h + "px", a.display = "inline-block", a.verticalAlign = "top", a.backgroundColor = "#dfdfdf")
                };
                a.createGrayBox = function () {
                    this._grayBox ===
                    y && (this._grayBox = q.createElement("span"))
                };
                a.copyStyle = function (a, b) {
                    return a && a.style ? a.style[b] || getComputedStyle(a)[b] : y
                };
                a.randomizeString = function (a) {
                    return g.randomizeString(a)
                };
                return a
            })()
        }, function (a, b) {
            function d() {
                throw Error("setTimeout has not been defined");
            }

            function f() {
                throw Error("clearTimeout has not been defined");
            }

            function g(c) {
                if (v === E) return E(c, 0);
                if ((v === d || !v) && E) return v = E, E(c, 0);
                try {
                    return v(c, 0)
                } catch (ba) {
                    try {
                        return v.call(null, c, 0)
                    } catch (Ua) {
                        return v.call(this, c, 0)
                    }
                }
            }

            function m(c) {
                if (A === clearTimeout) return clearTimeout(c);
                if ((A === f || !A) && clearTimeout) return A = clearTimeout, clearTimeout(c);
                try {
                    return A(c)
                } catch (ba) {
                    try {
                        return A.call(null, c)
                    } catch (Ua) {
                        return A.call(this, c)
                    }
                }
            }

            function h() {
                x && F && (x = !1, F.length ? l = F.concat(l) : K = -1, l.length && n())
            }

            function n() {
                if (!x) {
                    var c = g(h);
                    x = !0;
                    for (var a = l.length; a;) {
                        F = l;
                        for (l = []; ++K < a;) F && F[K].run();
                        K = -1;
                        a = l.length
                    }
                    F = null;
                    x = !1;
                    m(c)
                }
            }

            function e(c, a) {
                this.fun = c;
                this.array = a
            }

            function c() {}
            var k = a.exports = {};
            try {
                var v = "function" ===
                typeof E ? E : d
            } catch (z) {
                v = d
            }
            try {
                var A = "function" === typeof clearTimeout ? clearTimeout : f
            } catch (z) {
                A = f
            }
            var l = [],
                x = !1,
                F, K = -1;
            k.nextTick = function (c) {
                var a = Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var b = 1; b < arguments.length; b++) a[b - 1] = arguments[b];
                l.push(new e(c, a));
                1 !== l.length || x || g(n)
            };
            e.prototype.run = function () {
                this.fun.apply(null, this.array)
            };
            k.title = "browser";
            k.browser = !0;
            k.env = {};
            k.argv = [];
            k.version = "";
            k.versions = {};
            k.on = c;
            k.addListener = c;
            k.once = c;
            k.off = c;
            k.removeListener = c;
            k.removeAllListeners =
                c;
            k.emit = c;
            k.prependListener = c;
            k.prependOnceListener = c;
            k.listeners = function (c) {
                return []
            };
            k.binding = function (c) {
                throw Error("process.binding is not supported");
            };
            k.cwd = function () {
                return "/"
            };
            k.chdir = function (c) {
                throw Error("process.chdir is not supported");
            };
            k.umask = function () {
                return 0
            }
        }, function (a, b, d) {
            (function (a, d) {
                var f = function () {
                        if ("undefined" !== typeof p) return p;
                        if ("undefined" !== typeof global) return global;
                        if ("undefined" !== typeof self) return self
                    }(),
                    h = function () {
                        return Date.now()
                    },
                    g = function (c) {
                        return c ?
                            (c = this._getTime() - c, 0 > c && a.warn("Invalid stamp: " + c), c) : 0
                    },
                    e = function (c, a) {
                        var e;
                        (e = f.console).log.apply(e, c.concat([a + "ms"]))
                    };
                b.a = function (c) {
                    void 0 === c && (c = {});
                    var a = c.getStamp || g,
                        b = c.printLog || e,
                        d = {
                            start: function () {
                                var c = this._getTime();
                                this._initializedAt = this._initializedAt || c;
                                this._startedAt = c;
                                return d
                            },
                            stamp: function () {
                                return this._getStamp(this._startedAt)
                            },
                            stampSinceCreated: function () {
                                return this._getStamp(this._initializedAt)
                            },
                            reset: function () {
                                return this.start()
                            },
                            log: function () {
                                for (var c =
                                    arguments.length, a = Array(c), e = 0; e < c; e++) a[e] = arguments[e];
                                b(a, this.stamp());
                                return this
                            },
                            logSinceCreated: function () {
                                for (var c = arguments.length, a = Array(c), e = 0; e < c; e++) a[e] = arguments[e];
                                b(a, this.stampSinceCreated());
                                return this
                            }
                        };
                    Object.defineProperties(d, {
                        _getTime: {
                            value: (c.getTime || h).bind(d)
                        },
                        _getStamp: {
                            value: a.bind(d)
                        }
                    });
                    return d
                }
            }).call(this, d(10)["default"], d(37))
        }, function (a, b, d) {
            (function (a) {
                var f = d(33),
                    m = d(8),
                    h = d(16);
                b.a = function (b) {
                    void 0 === b && (b = {});
                    var e = m.ObjectUtils.assign({
                        url: null,
                        headers: {},
                        method: "get",
                        type: "json",
                        data: null
                    }, b);
                    if (b.headers === y || b.headers["Content-Type"] === y) e.headers["Content-Type"] = function () {
                        switch (e.type) {
                            case "json":
                                return "application/json";
                            case "css":
                                return "text/css";
                            case "html":
                                return "text/html";
                            default:
                                return "text/plain"
                        }
                    }();
                    return (new a(function (c, a) {
                        var b = new XMLHttpRequest;
                        b.addEventListener("readystatechange", function () {
                            var d = b.status;
                            if (4 === b.readyState)
                                if (200 <= d && 301 > d) {
                                    a: switch (d = b.responseText, e.type) {
                                        case "json":
                                            d = JSON.parse(d);
                                            break a;
                                        case "html":
                                            d =
                                                f.DocumentUtils.initDocument({
                                                    html: d
                                                })
                                    }
                                    c({
                                        result: d,
                                        error: null
                                    })
                                }
                                else a(Error(d + " " + b.statusText))
                        });
                        b.addEventListener("error", a);
                        b.open(e.method.toUpperCase(), e.url);
                        Object(h.a)(e.headers, function (c, a) {
                            b.setRequestHeader(c, a)
                        });
                        b.send(e.data ? JSON.stringify(e.data) : y)
                    }))["catch"](function (c) {
                        return {
                            result: null,
                            error: c
                        }
                    })
                }
            }).call(this, d(21).Promise)
        }, function (a, b, d) {
            function f() {
                if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                } catch (h) {
                    return !1
                }
            }

            function g(b, d, e) {
                f() ? a.exports = g = Reflect.construct : a.exports = g = function (c, a, e) {
                    var b = [null];
                    b.push.apply(b, a);
                    c = new(Function.bind.apply(c, b));
                    e && m(c, e.prototype);
                    return c
                };
                return g.apply(null, arguments)
            }
            var m = d(89);
            a.exports = g
        }, function (a, b, d) {
            (function (a, g) {
                var f = d(17),
                    h = new a,
                    n = {
                        input: {
                            capture: !0,
                            passive: !0
                        },
                        change: {
                            capture: !0
                        },
                        keyup: {
                            capture: !0
                        },
                        paste: {
                            capture: !0
                        },
                        cut: {
                            capture: !0
                        }
                    },
                    e = function (c) {
                        if (f.a.isValidNode(c.target)) {
                            c =
                                c.target;
                            var a = f.a.validate(c, this.options),
                                e = a.forceRecord,
                                b = a.isPrivate;
                            a = a.isAllowed;
                            var d = c.value;
                            f.a.isChanged(c, d) && (a = a || e ? d : f.a.encode(d), c = this._getEventObject("change", c, {
                                value: a,
                                hidden: b && !e
                            }), this._publishActions(c))
                        }
                    };
                b.a = {
                    create: function (c) {
                        var a = c._universalHandler(e);
                        g.forin(n, function (e) {
                            h.add(c.attachEvent(c.document, e, a, n[e]))
                        })
                    },
                    destroy: function (c) {
                        g.forof(h, function (a) {
                            return c.removeEvent(a)
                        });
                        h.clear()
                    }
                }
            }).call(this, d(5)["default"], d(4)["default"])
        }, function (a, b, d) {
            (function (a,
                       g) {
                var f = d(18),
                    h = {
                        mousemove: {
                            capture: !0,
                            passive: !0,
                            lazy: 5
                        },
                        mousedown: {
                            capture: !0
                        },
                        mouseup: {
                            capture: !0
                        },
                        click: {
                            capture: !0
                        }
                    },
                    n = new a,
                    e = function (c) {
                        var a = c.object;
                        c = c.args[0];
                        var e = a.type,
                            b = a.target,
                            d = a.pageX,
                            k = a.pageY,
                            h = a.clientX;
                        h = void 0 === h ? null : h;
                        a = a.clientY;
                        a = void 0 === a ? null : a;
                        b = this.document.elementFromPoint(void 0 === d ? null : d, void 0 === k ? null : k) || b;
                        c = this._getEventObject(e, b, {
                            x: h,
                            y: a
                        }, c);
                        this._publishActions(c)
                    },
                    c = f.a.create(e, {
                        timeout: 0
                    }),
                    k = function (a) {
                        var b = this.stamp;
                        "mousemove" === a.type ? c.call(this,
                            a, b) : e.call(this, {
                            object: a,
                            args: [b]
                        })
                    };
                b.a = {
                    create: function (c) {
                        var a = c._universalHandler(k);
                        g.forin(h, function (e) {
                            n.add(c.attachEvent(c.document, e, a, h[e]))
                        })
                    },
                    destroy: function (c) {
                        g.forof(n, function (a) {
                            return c.removeEvent(a)
                        });
                        n.clear()
                    }
                }
            }).call(this, d(5)["default"], d(4)["default"])
        }, function (a, b, d) {
            (function (a, d) {
                var f = {
                        focus: {
                            capture: !0
                        },
                        blur: {
                            capture: !0
                        }
                    },
                    h = new a,
                    g = function (a) {
                        a = this._getEventObject(a.type, a.target);
                        this._publishActions(a)
                    };
                b.a = {
                    create: function (a) {
                        var c = a._universalHandler(g);
                        d.forin(f, function (e) {
                            h.add(a.attachEvent(a.document, e, c, f[e]))
                        })
                    },
                    destroy: function (a) {
                        d.forof(h, function (c) {
                            return a.removeEvent(c)
                        });
                        h.clear()
                    }
                }
            }).call(this, d(5)["default"], d(4)["default"])
        }, function (a, b, d) {
            (function (a) {
                var d, f = function (b, d) {
                    var e = this,
                        c = a.now();
                    this._blockUpcomingCaptor("resize");
                    this._executeCaptor("deviceRotation", function () {
                        E(function () {
                            var k = a.now() - c;
                            e._publishActions(d.getValue.call(e, b, k))
                        }, 300)
                    })
                };
                b.a = {
                    getValue: function (a, b) {
                        var e = this.viewport.getSize(1);
                        e = this._getEventObject("deviceRotation",
                            0, {
                                width: e.width,
                                height: e.height,
                                orientation: this.viewport.orientation
                            });
                        e.stamp -= b;
                        return e
                    },
                    create: function (a) {
                        d = a.attachEvent(a.window, "orientationchange", a._universalHandler(f, {
                            extra: [this]
                        }), {
                            passive: !0
                        })
                    },
                    destroy: function (a) {
                        a.removeEvent(d)
                    }
                }
            }).call(this, d(4)["default"])
        }, function (a, b, d) {
            (function (a, g, m) {
                var h = d(18),
                    f, e = new a,
                    c = function (c) {
                        var a = c.object;
                        c = c.args[0];
                        var e = this.viewport.scrollingElement,
                            b = this.document,
                            d = this.window;
                        var k = a.target;
                        b = k === d || k === b || k === b.body ? d : k;
                        d = g.getScroll(b);
                        c = this._getEventObject("scroll", b, {
                            x: Math.max(d.left, 0),
                            y: Math.max(d.top, 0),
                            page: b === e || b === p || b === q
                        }, c);
                        m.log(b, a.target, c, d);
                        this._publishActions(c)
                    },
                    k = function (a) {
                        var b = a.target;
                        if (e.has(b)) b = e.get(b);
                        else {
                            var d = h.a.create(c, {
                                timeout: g.isAndroid() ? 0 : 100,
                                immediateFirstRun: !0
                            });
                            e.set(b, d);
                            b = d
                        }
                        b.call(this, a)
                    };
                b.a = {
                    create: function (c) {
                        var a = c._universalHandler(k);
                        f = c.attachEvent(c.document, "scroll", a.bind(c), {
                            capture: !0,
                            passive: !0
                        })
                    },
                    destroy: function (c) {
                        c.removeEvent(f);
                        e.clear()
                    }
                }
            }).call(this, d(11)["default"],
                d(4)["default"], d(10)["default"])
        }, function (a, b, d) {
            (function (a, d, m) {
                var h = {
                        mousemove: {
                            capture: !0,
                            passive: !0,
                            lazy: 5
                        },
                        touchmove: {
                            capture: !0,
                            passive: !0,
                            lazy: 5
                        },
                        mousedown: {
                            capture: !0
                        },
                        touchdown: {
                            capture: !0
                        }
                    },
                    f = new a,
                    e = !1,
                    c = function (c) {
                        var a = "select" === c.type ? this.selection.getSelectionFor(c.target) : this.selection.getPageSelection();
                        a && a.start !== a.end && -1 !== ["mousemove", "touchmove", "touchdown"].indexOf(c.type) ? (e = !0, c = this._getEventObject("selection", "select" === c.type ? c.target : this.rootNode, a), this._publishActions(c)) :
                            e && -1 !== ["mousedown", "touchmove", "touchdown"].indexOf(c.type) && (d.log("selection clear"), e = !1, c = this._getEventObject("selection", null, {
                                start: 0,
                                end: 0
                            }), this._publishActions(c))
                    };
                b.a = {
                    create: function (a) {
                        var e = a._universalHandler(function (e) {
                            ("mousemove" === e.type && 1 === e.which || -1 !== ["mousedown", "touchmove", "touchdown"].indexOf(e.type)) && c.call(a, e)
                        });
                        m.forin(h, function (c) {
                            f.add(a.attachEvent(a.document, c, e, h[c]))
                        })
                    },
                    destroy: function (c) {
                        m.forof(f, function (a) {
                            return c.removeEvent(a)
                        })
                    }
                }
            }).call(this, d(5)["default"],
                d(10)["default"], d(4)["default"])
        }, function (a, b, d) {
            (function (a, g, m) {
                var h = d(18),
                    f = {
                        touchmove: {
                            capture: !0,
                            passive: !0
                        },
                        touchstart: {
                            capture: !0
                        },
                        touchend: {
                            capture: !0
                        },
                        touchcancel: {
                            capture: !0
                        },
                        touchforcechange: {
                            capture: !0
                        }
                    },
                    e = new a,
                    c = new g,
                    k = !1,
                    v = function (c) {
                        var a = c.object;
                        c = c.args[0];
                        var e = a.type,
                            b = m.map(a.changedTouches, function (c) {
                                return {
                                    id: c.__id,
                                    x: Math.round(c.clientX),
                                    y: Math.round(c.clientY),
                                    force: c.force
                                }
                            });
                        a = this._getEventObject(e, a.target, {
                            touches: b
                        }, c);
                        this._publishActions(a)
                    },
                    A = h.a.create(v, {
                        timeout: m.isAndroid() ? 0 : 300
                    }),
                    l = function (a) {
                        var e = this.stamp,
                            b = "touchcancel" === a.type || "touchend" === a.type;
                        0 < a.changedTouches.length && m.forof(a.changedTouches, function (a) {
                            var e = void 0 === b ? !1 : b;
                            if (c.has(a.identifier)) var d = c.get(a.identifier);
                            else d = m.guid(), c.set(a.identifier, d);
                            e && c["delete"](a.identifier);
                            a.__id = d
                        });
                        "touchmove" === a.type ? k ? v.call(this, {
                            object: a,
                            args: [e]
                        }) : A.call(this, a, e) : v.call(this, {
                            object: a,
                            args: [e]
                        })
                    };
                b.a = {
                    create: function (c) {
                        var a = c._universalHandler(l);
                        m.forin(f, function (b) {
                            e.add(c.attachEvent(c.document,
                                b, a, f[b]))
                        });
                        var b = null,
                            d = c._universalHandler(function () {
                                clearTimeout(b);
                                k = !0;
                                b = E(function () {
                                    return k = !1
                                }, 150)
                            });
                        e.add(c.attachEvent(q, "scroll", d, {
                            passive: !0,
                            capture: !0
                        }))
                    },
                    destroy: function (c) {
                        m.forof(e, function (a) {
                            return c.removeEvent(a)
                        });
                        e.clear()
                    }
                }
            }).call(this, d(5)["default"], d(11)["default"], d(4)["default"])
        }, function (a, b, d) {
            (function (a, d) {
                var f = new a,
                    h = [],
                    g = null,
                    e = function () {
                        var c = this,
                            a = this.stamp,
                            e = this.viewport.zoomLevel;
                        if (this.zoomLevel !== e) {
                            clearTimeout(g);
                            var b = d.scrollingElement(),
                                f =
                                    b.scrollLeft;
                            b = b.scrollTop;
                            this.zoomLevel = e;
                            h.push([a, e, f, b]);
                            g = E(function () {
                                var a = h[0],
                                    e = h[h.length - 1],
                                    b = e[0];
                                a = c._getEventObject("zoom", 0, {
                                    zoomFrom: {
                                        level: a[1],
                                        x: a[2],
                                        y: a[3]
                                    },
                                    zoomTo: {
                                        level: e[1],
                                        x: e[2],
                                        y: e[3]
                                    },
                                    duration: b - a[0]
                                }, b);
                                h.length = 0;
                                c._publishActions(a)
                            }, 100)
                        }
                    };
                b.a = {
                    create: function (c) {
                        c = c._universalHandler(e);
                        this.captor = d.repeat(c)
                    },
                    destroy: function () {
                        this.captor.stop();
                        f.clear()
                    }
                }
            }).call(this, d(5)["default"], d(4)["default"])
        }, function (a, b, d) {
            (function (a, d) {
                var f, h = "undefined" !== typeof q.hidden ? {
                        hidden: "hidden",
                        event: "visibilitychange"
                    } : "undefined" !== typeof q.msHidden ? {
                        hidden: "msHidden",
                        event: "msvisibilitychange"
                    } : "undefined" !== typeof q.webkitHidden ? {
                        hidden: "webkitHidden",
                        event: "webkitvisibilitychange"
                    } : null,
                    g = h ? (f = {}, f[h.event] = {
                        capture: !0
                    }, f) : {
                        focus: {
                            capture: !0
                        },
                        blur: {
                            capture: !0
                        }
                    },
                    e = {
                        focus: "windowfocus",
                        blur: "windowblur"
                    },
                    c = new a,
                    k = function (c) {
                        c = h ? this._getEventObject(e[q[h.hidden] ? "blur" : "focus"], p) : this._getEventObject(e[c.type], p);
                        this._publishActions(c)
                    };
                b.a = {
                    create: function (a) {
                        var e =
                            a._universalHandler(k);
                        d.forin(g, function (b) {
                            c.add(a.attachEvent(a.window, b, e, g[b]))
                        })
                    },
                    destroy: function (a) {
                        d.forof(c, function (c) {
                            return a.removeEvent(c)
                        });
                        c.clear()
                    }
                }
            }).call(this, d(5)["default"], d(4)["default"])
        }, function (a, b, d) {
            (function (a) {
                var f = d(13),
                    m = d.n(f);
                f = d(15);
                var h = d.n(f);
                f = d(3);
                var n = d.n(f);
                f = d(1);
                var e = d.n(f);
                f = d(14);
                var c = d(51),
                    k = d(28),
                    v = d(7);
                f = function (b) {
                    function d(d, f) {
                        var h = b.call(this) || this;
                        e()(n()(n()(h)), "IGNORE_NODE_ATTRIBUTE", "__ym_wv_ign");
                        e()(n()(n()(h)), "eventsList", ["mutation"]);
                        h.indexer = f;
                        h.originalHTML = h.indexer.html;
                        h.target = d;
                        h.watcher = new c.a(h.target);
                        h.queue = new k.a;
                        h._timer = a.timer();
                        h.watcher.on("mutation", h.collectMutations.bind(n()(n()(h))));
                        return h
                    }
                    h()(d, b);
                    var f = d.prototype;
                    f.addChanges = function (c, e) {
                        for (var b = arguments.length, d = Array(2 < b ? b - 2 : 0), k = 2; k < b; k++) d[k - 2] = arguments[k];
                        if (null != c[e] && 0 < d.length) {
                            var h, f = c[e].length;
                            a.fastIterate(d, function (c, a) {
                                return a.i = f + c
                            });
                            c[e] = (h = c[e]).concat.apply(h, d)
                        }
                    };
                    f.collectMutations = function (c) {
                        var a = this;
                        this.queue.push(function () {
                            var e =
                                a.processMutations(c);
                            e.hasData && a.emit("mutation", e.store)
                        })
                    };
                    f.destroy = function () {
                        this.queue.start(!0);
                        this.off();
                        this.watcher.off();
                        this.watcher.stop()
                    };
                    f.cleanChangesObject = function (c) {
                        a.forin(c, function (a) {
                            0 === c[a].length && delete c[a]
                        });
                        return c
                    };
                    f.initObserver = function () {
                        this.initObserver = a.noop();
                        this.watcher.start();
                        this._timer.start()
                    };
                    f.processMutations = function (c) {
                        var e = this,
                            b = !1,
                            d = [];
                        a.fastIterate(c, function (c, a) {
                            if (a.target.parentNode && !v.c.isIgnoredNode(a.target.parentNode)) {
                                var k = e.changesObject;
                                !1 !== function () {
                                    var c = a.type,
                                        b = a.target,
                                        d = e.indexer.getIndexedNodeId(b);
                                    if (null == d) return !1;
                                    b = [a, d, b, k];
                                    switch (c) {
                                        case "childList":
                                            return e.processTreeChanges.apply(e, b);
                                        case "attributes":
                                            return e.processAttributesChanges.apply(e, b);
                                        case "characterData":
                                            return e.processContentChanges.apply(e, b)
                                    }
                                }() && (b = !0, d.push(e.cleanChangesObject(k)))
                            }
                        });
                        return {
                            store: d,
                            hasData: b
                        }
                    };
                    f.combineMutations = function (c, e) {
                        return a.reduce(Object.keys(e), function (c, a) {
                            var b;
                            null == c[a] && (c[a] = []);
                            c[a] = (b = c[a]).concat.apply(b,
                                e[a]);
                            return c
                        }, c)
                    };
                    f.processTreeChanges = function (c, e, b, d) {
                        var k = this,
                            h = c.nextSibling,
                            f = c.previousSibling;
                        b = c.meta;
                        c = b.addedNodes;
                        b = b.removedNodes;
                        b = void 0 === b ? [] : b;
                        var g = [],
                            n = [];
                        a.fastIterate(void 0 === c ? [] : c, function (c, b) {
                            k.indexer.reindexNodeTree(b, {
                                parentID: e,
                                callback: function (c, e) {
                                    if (c) {
                                        var d = a.combine({
                                            id: c.id,
                                            pa: c.parent,
                                            nm: c.name
                                        }, e === b && {
                                            pr: k.getIDForNode(f),
                                            nx: k.getIDForNode(h)
                                        });
                                        c.content && (d.ct = c.content);
                                        c.namespace && (d.ns = c.namespace);
                                        d.at = k._getNodeAttributes(c);
                                        g.push(d)
                                    }
                                }
                            })
                        });
                        a.fastIterate(b,
                            function (c, a) {
                                var b = {
                                    id: k.indexer.removeNodeTree(a),
                                    pa: e,
                                    pr: k.getIDForNode(f),
                                    nx: k.getIDForNode(h)
                                };
                                b.id && n.push(b)
                            });
                        if (0 === g.length && 0 === n.length) return !1;
                        this.addChanges.apply(this, [d, "a"].concat(n));
                        this.addChanges.apply(this, [d, "b"].concat(g))
                    };
                    f.processAttributesChanges = function (c, a, e, b) {
                        var d, k = c.meta;
                        c = k.name;
                        e = k.oldValue;
                        k = k.newValue;
                        this.addChanges(b, "c", {
                            id: a,
                            at: (d = {}, d[c] = {
                                n: k,
                                o: e
                            }, d)
                        })
                    };
                    f.processContentChanges = function (c, a, e, b) {
                        this.addChanges(b, "d", {
                            id: a,
                            ct: {
                                n: c.meta.newValue,
                                o: c.meta.oldValue
                            }
                        })
                    };
                    f.getIDForNode = function (c) {
                        if (c) {
                            var a = this.indexer.getNodeId(c);
                            if (null != a) return a;
                            this.indexer.reindexNodeTree(c);
                            return this.indexer.getNodeId(c)
                        }
                    };
                    f._getNodeAttributes = function (c) {
                        var e = c.attributes ? a.copyObject(c.attributes) : null;
                        e && "INPUT" === c.name && ("checkbox" === e.type || "radio" === e.type) && c.nativeNode.checked && (e.checked = !0);
                        return e
                    };
                    m()(d, [{
                        key: "changesObject",
                        get: function () {
                            return {
                                a: [],
                                b: [],
                                c: [],
                                d: []
                            }
                        }
                    }, {
                        key: "html",
                        get: function () {
                            return this.originalHTML
                        }
                    }]);
                    return d
                }(f.a);
                b.a = f
            }).call(this,
                d(4)["default"])
        }, function (a, b, d) {
            (function (a, g, m) {
                var h = d(15),
                    f = d.n(h);
                h = d(3);
                var e = d.n(h);
                h = d(1);
                var c = d.n(h),
                    k = d(7);
                h = function (b) {
                    function d(a) {
                        var d = b.call(this) || this;
                        c()(e()(e()(d)), "eventsList", ["mutation"]);
                        d.paused = !0;
                        d.element = a;
                        d.document = a.ownerDocument;
                        d.observer = null;
                        d.initMutationObserver();
                        return d
                    }
                    f()(d, b);
                    var h = d.prototype;
                    h.start = function () {
                        this.observer.observe(this.element, {
                            childList: !0,
                            attributes: !0,
                            characterData: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    h.stop = function () {
                        this.observer.disconnect()
                    };
                    h.initMutationObserver = function () {
                        var c = this;
                        a.log("Observer created");
                        this.observer = new MutationObserver(function () {
                            try {
                                for (var e = arguments.length, b = Array(e), d = 0; d < e; d++) b[d] = arguments[d];
                                c.processMutations.apply(c, b)
                            } catch (ba) {
                                a.warn("Process Mutation failed " + ba)
                            }
                        })
                    };
                    h.processMutations = function (c) {
                        var a = this;
                        c = g.toArray(c);
                        var e = {
                            added: new m,
                            removed: new m
                        };
                        c = g.reduceRight(c, function (c, b) {
                            var d = b.type,
                                k = b.target,
                                h = a.collectSummary(d, k, e, b);
                            null != h &&
                            c.unshift({
                                target: k,
                                type: d,
                                meta: h,
                                nextSibling: b.nextSibling,
                                previousSibling: b.previousSibling
                            });
                            return c
                        }, []);
                        0 < c.length && this.emit("mutation", c);
                        e.added.clear();
                        e.removed.clear()
                    };
                    h.collectSummary = function (c, a, e, b) {
                        switch (c) {
                            case "childList":
                                a = g.reduce(b.addedNodes, function (c, a) {
                                    !1 === e.added.has(a) && (c.push(a), k.c.walk(a, function (c) {
                                        return e.added.add(c)
                                    }));
                                    return c
                                }, []);
                                b = g.reduce(b.removedNodes, function (c, a) {
                                    !1 === e.removed.has(a) && (c.push(a), k.c.walk(a, function (c) {
                                        return e.removed.add(c)
                                    }));
                                    return c
                                }, []);
                                if (0 < a.length || 0 < b.length) return {
                                    addedNodes: a,
                                    removedNodes: b
                                };
                                break;
                            case "attributes":
                                c = b.attributeName;
                                b = b.oldValue;
                                var d = a.getAttribute(c);
                                if (b !== d) return {
                                    name: c,
                                    oldValue: k.c.normalizeAttributeValue(a, c, b),
                                    newValue: k.c.normalizeAttributeValue(a, c, d)
                                };
                                break;
                            case "characterData":
                                if (b = b.oldValue, a = a.textContent, a !== b) return {
                                    oldValue: b,
                                    newValue: a
                                }
                        }
                    };
                    return d
                }(d(14).a);
                b.a = h
            }).call(this, d(10)["default"], d(4)["default"], d(5)["default"])
        }, function (a, b, d) {
            (function (a) {
                var f = d(15),
                    m = d.n(f);
                f = function (b) {
                    function d(c) {
                        void 0 ===
                        c && (c = []);
                        var e = b.call(this) || this;
                        a.fastIterate(c, function (c, a) {
                            e.use(a)
                        });
                        return e
                    }
                    m()(d, b);
                    var e = d.prototype;
                    e.main = function (c, a) {
                        a()
                    };
                    e.send = function (c) {
                        this.run(c, this.main.bind(this))
                    };
                    return d
                }(d(29).a);
                b.a = f
            }).call(this, d(4)["default"])
        }, function (a, b, d) {
            (function (a) {
                var f = d(1),
                    m = d.n(f),
                    h = d(0);
                f = function () {
                    function b(c) {
                        var a = this;
                        m()(this, "_options", {
                            checkOnLoad: !1,
                            resetOnEnd: !1,
                            loopCheckTime: 50,
                            loopMaxNumber: 5,
                            baitClass: "adsbygoogle yap-reset ya_partner",
                            baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
                            debug: !1
                        });
                        m()(this, "_var", {
                            version: "3.2.1",
                            bait: null,
                            checking: !1,
                            loop: null,
                            loopNumber: 0,
                            event: {
                                detected: [],
                                notDetected: []
                            }
                        });
                        c !== y && this.setOption(c);
                        c = function () {
                            E(function () {
                                !0 === a._options.checkOnLoad && (!0 === a._options.debug && a._log("onload-\x3eeventCallback", "A check loading is launched"), null === a._var.bait && a._creatBait(), E(function () {
                                    a.check()
                                }, 1))
                            }, 1)
                        };
                        h.a.addEventListener !== y ? h.a.addEventListener("load", c, !1) : h.a.attachEvent("onload", c)
                    }
                    var e = b.prototype;
                    e._log = function (c, e) {
                        a.log("[FuckAdBlock][" +
                            c + "] " + e)
                    };
                    e.setOption = function (c, a) {
                        if (a !== y) {
                            var e = c;
                            c = {};
                            c[e] = a
                        }
                        for (var b in c) this._options[b] = c[b], !0 === this._options.debug && this._log("setOption", 'The option "' + b + '" he was assigned to "' + c[b] + '"');
                        return this
                    };
                    e._creatBait = function () {
                        var c = q.createElement("div");
                        c.setAttribute("class", this._options.baitClass);
                        c.setAttribute("style", this._options.baitStyle);
                        this._var.bait = h.a.document.body.appendChild(c);
                        this._var.bait = h.a.document.body.appendChild(c);
                        this._var.bait.offsetParent;
                        this._var.bait.offsetHeight;
                        this._var.bait.offsetLeft;
                        this._var.bait.offsetTop;
                        this._var.bait.offsetWidth;
                        this._var.bait.clientHeight;
                        this._var.bait.clientWidth;
                        !0 === this._options.debug && this._log("_creatBait", "Bait has been created")
                    };
                    e._destroyBait = function () {
                        h.a.document.body.removeChild(this._var.bait);
                        this._var.bait = null;
                        !0 === this._options.debug && this._log("_destroyBait", "Bait has been removed")
                    };
                    e.check = function (c) {
                        var a = this;
                        c === y && (c = !0);
                        !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === c ? "with a" :
                            "without") + " loop");
                        if (!0 === this._var.checking) return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"), !1;
                        this._var.checking = !0;
                        null === this._var.bait && this._creatBait();
                        this._var.loopNumber = 0;
                        !0 === c && (this._var.loop = setInterval(function () {
                            a._checkBait(c)
                        }, this._options.loopCheckTime));
                        E(function () {
                            a._checkBait(c)
                        }, 1);
                        !0 === this._options.debug && this._log("check", "A check is in progress ...");
                        return !0
                    };
                    e.checkSync = function () {
                        return this._checkBait()
                    };
                    e._checkBait = function (c) {
                        var a = !1;
                        null === this._var.bait && this._creatBait();
                        if (null !== h.a.document.body.getAttribute("abp") || null === this._var.bait.offsetParent || 0 === parseInt(this._var.bait.offsetHeight, 10) || 0 === parseInt(this._var.bait.offsetLeft, 10) || 0 === parseInt(this._var.bait.offsetTop, 10) || 0 === parseInt(this._var.bait.offsetWidth, 10) || 0 === parseInt(this._var.bait.clientHeight, 10) || 0 === parseInt(this._var.bait.clientWidth, 10)) a = !0;
                        if (h.a.getComputedStyle !== y) {
                            var e = h.a.getComputedStyle(this._var.bait,
                                null);
                            !e || "none" !== e.getPropertyValue("display") && "hidden" !== e.getPropertyValue("visibility") || (a = !0)
                        }!0 === this._options.debug && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === a ? "positive" : "negative"));
                        !0 === c && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop());
                        if (!0 === a) this._stopLoop(), this._destroyBait(), this.emitEvent(!0), !0 === c && (this._var.checking = !1);
                        else if (null === this._var.loop || !1 === c) this._destroyBait(), this.emitEvent(!1), !0 === c && (this._var.checking = !1);
                        return a
                    };
                    e._stopLoop = function () {
                        clearInterval(this._var.loop);
                        this._var.loop = null;
                        this._var.loopNumber = 0;
                        !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped")
                    };
                    e.emitEvent = function (c) {
                        !0 === this._options.debug && this._log("emitEvent", "An event with a " + (!0 === c ? "positive" : "negative") + " detection was called");
                        c = this._var.event[!0 === c ? "detected" :
                            "notDetected"];
                        for (var a in c)
                            if (!0 === this._options.debug && this._log("emitEvent", "Call function " + (parseInt(a, 10) + 1) + "/" + c.length), c.hasOwnProperty(a)) c[a]();
                        !0 === this._options.resetOnEnd && this.clearEvent();
                        return this
                    };
                    e.clearEvent = function () {
                        this._var.event.detected = [];
                        this._var.event.notDetected = [];
                        !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared")
                    };
                    e.on = function (c, a) {
                        this._var.event[!0 === c ? "detected" : "notDetected"].push(a);
                        !0 === this._options.debug && this._log("on",
                            'A type of event "' + (!0 === c ? "detected" : "notDetected") + '" was added');
                        return this
                    };
                    e.onDetected = function (c) {
                        return this.on(!0, c)
                    };
                    e.onNotDetected = function (c) {
                        return this.on(!1, c)
                    };
                    return b
                }();
                b.a = f
            }).call(this, d(10)["default"])
        }, function (a, b, d) {
            a = function () {
                function a(a) {
                    void 0 === a && (a = "body");
                    this.root = "string" === typeof a ? q.querySelector(a) : a;
                    a = -1 !== navigator.appVersion.indexOf("Mac") ? "macos" : "other";
                    this.OS = a;
                    this.modifierCodes = {
                        91: "super",
                        93: "super",
                        224: "super",
                        18: "alt",
                        17: "ctrl",
                        16: "shift",
                        9: "tab",
                        8: "backspace",
                        46: "delete"
                    };
                    this.keyOrder = {
                        "super": 1,
                        ctrl: 2,
                        alt: 3,
                        shift: 4,
                        tab: 5,
                        "delete": 6,
                        backspace: 6
                    };
                    this.singleKeys = [4, 9, 8, 32, 37, 38, 39, 40, 46];
                    this.keyDict = {
                        macos: {
                            91: "\x26#8984;",
                            93: "\x26#8984;",
                            224: "\x26#8984;",
                            18: "\x26#8997;",
                            17: "\x26#8963;",
                            16: "\x26#8679;",
                            9: "\x26#8677;",
                            8: "\x26#9003;",
                            46: "\x26#9003;"
                        },
                        other: {
                            91: "\x26#xff;",
                            93: "\x26#xff;",
                            224: "\x26#xff;",
                            18: "Alt",
                            17: "Ctrl",
                            16: "Shift",
                            9: "Tab",
                            8: "Backspace",
                            46: "Delete"
                        },
                        multi: {
                            32: "SPACEBAR",
                            37: "\x26larr;",
                            38: "\x26uarr;",
                            39: "\x26rarr;",
                            40: "\x26darr;",
                            13: "Enter"
                        }
                    };
                    this.initialModifier = null;
                    this.modifierPressed = 0;
                    this.events = [];
                    this.modifiers = {};
                    this.captors = [];
                    this.filters = [];
                    this.keyStroke = [];
                    this.holding = [];
                    this.initHandler()
                }
                var b = a.prototype;
                b.onCapture = function (a) {
                    "function" === typeof a && 0 > this.captors.indexOf(a) && this.captors.push(a)
                };
                b.addElementFilter = function (a) {
                    "function" === typeof a && 0 > this.captors.indexOf(a) && this.filters.push(a)
                };
                b.applyFilters = function (a) {
                    var b = this;
                    return this.filters.reduce(function (d, e) {
                        return !0 === d ? d && e.call(b,
                            a) : !1
                    }, !0)
                };
                b.initHandler = function () {
                    this.attachEvent("keydown", this.keydownHandler);
                    this.attachEvent("keyup", this.keyupHandler)
                };
                b.getKeystroke = function (a) {
                    var b = this,
                        d = this.keyOrder;
                    return a.map(function (a) {
                        var c = a.keyCode,
                            e = b.modifierCodes[a.keyCode],
                            d = b.getKeySymbol(a);
                        return {
                            id: c,
                            key: b.getKeySymbol(a),
                            isMeta: !!e && /^&#/.test(d),
                            modifier: e
                        }
                    }).sort(function (a, c) {
                        return (d[a.modifier] || 100) - (d[c.modifier] || 100)
                    })
                };
                b.getKeySymbol = function (a) {
                    return this.keyDict[this.OS][a.keyCode] || this.keyDict.multi[a.keyCode] ||
                        String.fromCharCode(a.keyCode)
                };
                b.startCapture = function (a) {
                    this.initialModifier = a;
                    this.pushKey(a);
                    this.cancelCapture()
                };
                b.sendKeys = function (a, b) {
                    var d = this;
                    void 0 === b && (b = !1);
                    if (1 < a.length || b) {
                        var e = this.getKeystroke(a);
                        this.captors.forEach(function (a) {
                            return a.call(d, e, b)
                        })
                    }
                };
                b.endCapture = function () {
                    var a = this;
                    this._keyStroke = this.keyStroke.slice(0);
                    clearTimeout(this._endCapture);
                    this._endCapture = E(function () {
                        a.sendKeys(a._keyStroke)
                    })
                };
                b.pushKey = function (a) {
                    !1 === this.isCaptured(a) && this.keyStroke.push(a)
                };
                b.removeKey = function (a) {
                    this.keyStroke = this.keyStroke.reduce(function (b, d) {
                        d.keyCode !== a.keyCode && b.push(d);
                        return b
                    }, [])
                };
                b.cancelCapture = function () {
                    this.isModifierPressed() ? E(this.cancelCapture.bind(this), 100) : this.keyStroke.length = 0
                };
                b.reset = function () {
                    var a = this;
                    this._reset = E(function () {
                        a.resetImmediate()
                    }, 300)
                };
                b.resetImmediate = function () {
                    this.modifierPressed = 0;
                    this.keyStroke.length = 0;
                    this.holding.length = 0;
                    clearTimeout(this._endCapture)
                };
                b.cancelReset = function () {
                    clearTimeout(this._reset)
                };
                b.keydownHandler =
                    function (a) {
                        this.applyFilters(a.target) && !1 === this.isInputWithShift(a) && !a.repeat && 0 > this.held(a.keyCode) && (this.holding.push(a.keyCode), this.isModifier(a.keyCode) && !this.isModifierPressed() ? (this.modifierPressed += 1, this.startCapture(a), this.reset()) : this.isModifierPressed() ? (this.cancelReset(), this.pushKey(a), this.endCapture()) : (this.resetImmediate(), this.pushKey(a)))
                    };
                b.keyupHandler = function (a) {
                    if (this.applyFilters(a.target)) {
                        var b = this.isModifier(a.keyCode),
                            d = this.held(a.keyCode);
                        0 <= d && this.holding.splice(d,
                            1);
                        b && this.isModifierPressed() && (this.modifierPressed = 0, this.holding.length = 0);
                        1 === this.keyStroke.length && (b = this.keyStroke[0], 0 <= this.singleKeys.indexOf(b.keyCode) && (this.sendKeys([b], !0), this.resetImmediate()));
                        this.removeKey(a);
                        clearTimeout(this._endCapture)
                    }
                };
                b.attachEvent = function (a, b) {
                    var d = this;
                    if ("function" === typeof b) {
                        var e = function (a) {
                            (d.root && d.root.contains(a.target) || a.target === d.root) && b.call(d, a)
                        };
                        q.addEventListener(a, e, !0);
                        this.events.push(function () {
                            q.removeEventListener(a, e, !0)
                        })
                    }
                };
                b.held = function (a) {
                    return this.holding.indexOf(a)
                };
                b.isModifier = function (a) {
                    return null != this.modifierCodes[a]
                };
                b.isModifierPressed = function () {
                    return 0 < this.modifierPressed
                };
                b.isInitialModifier = function (a) {
                    return this.initialModifier ? this.initialModifier.keyCode === a.keyCode : !1
                };
                b.isCaptured = function (a) {
                    return null != this.keyStroke.reduce(function (b, d) {
                        null == b && d.keyCode === a.keyCode && (b = d);
                        return b
                    }, null)
                };
                b.isInputWithShift = function (a) {
                    return "INPUT" === a.target.nodeName ? a.shiftKey || 32 === a.keyCode ||
                        "shift" === this.modifierCodes[a.keyCode] : !1
                };
                b.destroy = function () {
                    var a;
                    for (this.resetImmediate(); a = this.events.pop();) a();
                    this.filters.length = 0
                };
                return a
            }();
            b.a = a
        }, function (a, b, d) {
            (function (a, g, m) {
                var f = d(1),
                    n = d.n(f),
                    e = d(14),
                    c = d(27);
                f = "HTMLMediaElement" in p;
                var k = {},
                    v = new a(["addEventListener", "removeEventListener"]);
                a = function () {
                    function a() {
                        n()(this, "originalDescriptors", new m);
                        n()(this, "mocked", !1);
                        n()(this, "events", new e.a(["setter", "method"]));
                        g.assign(k, g.apiMock(HTMLMediaElement))
                    }
                    var b = a.prototype;
                    b.descriptor = function (a, c) {
                        return Object.getOwnPropertyDescriptor(a, c)
                    };
                    b.mock = function () {
                        var a = this,
                            c = HTMLMediaElement.prototype,
                            e = this;
                        g.forof(k.properties, function (b) {
                            if (v.has(b)) return !0;
                            var d = a.descriptor(c, b);
                            if (d) {
                                a.originalDescriptors.set(b, d);
                                var k = g.combine(d);
                                d.get && (k.get = function () {
                                    return d.get.call(this)
                                });
                                d.set && (k.set = function (a) {
                                    e.setterInvoked(this, b, a);
                                    return d.set.call(this, a)
                                });
                                Object.defineProperty(c, b, k)
                            }
                        });
                        g.forof(k.methods, function (b) {
                            if (v.has(b)) return !0;
                            var d = a.descriptor(c,
                                b);
                            a.originalDescriptors.set(b, d);
                            Object.defineProperty(c, b, {
                                configurable: !0,
                                value: function () {
                                    for (var a, c = arguments.length, k = Array(c), f = 0; f < c; f++) k[f] = arguments[f];
                                    e.methodInvoked(this, b, k);
                                    return (a = d.value).call.apply(a, [this].concat(k))
                                }
                            })
                        });
                        this.mocked = !0
                    };
                    b.remove = function () {
                        this.events.off();
                        var a = HTMLMediaElement.prototype;
                        g.forof(this.originalDescriptors, function (c, e) {
                            delete a[e];
                            Object.defineProperty(a, e, c)
                        });
                        this.mocked = !1
                    };
                    b.setterInvoked = function (a, c, e) {
                        var b = this;
                        this.mocked && E(function () {
                            b.send(a,
                                "setter", {
                                    name: c,
                                    value: e
                                })
                        })
                    };
                    b.methodInvoked = function (a, e, b) {
                        var d = this;
                        this.mocked && E(function () {
                            b = b.map(function (a) {
                                return a instanceof Image ? Object(c.b)(a) : a
                            });
                            d.send(a, "method", {
                                name: e,
                                args: b
                            })
                        })
                    };
                    b.send = function (a, c, e) {
                        this.events.emit(c, g.combine(e, {
                            media: a
                        }))
                    };
                    return a
                }();
                n()(a, "supported", f);
                b.a = a
            }).call(this, d(5)["default"], d(4)["default"], d(11)["default"])
        }, function (a, b, d) {
            (function (a) {
                d.d(b, "a", function () {
                    return m
                });
                var f = d(57),
                    m = function (b, d) {
                        void 0 === d && (d = "body");
                        return new a(function (a) {
                            null ==
                            b.querySelector(d) || Object(f.a)() ? function k() {
                                null == b.querySelector(d) || Object(f.a)() ? E(k, 100) : a()
                            }() : a()
                        })
                    }
            }).call(this, d(21).Promise)
        }, function (a, b, d) {
            function f() {
                return !!(q.hidden || q.msHidden || q.webkitHidden)
            }
            d.d(b, "a", function () {
                return f
            })
        }, function (a, b, d) {
            (function (a, g, m) {
                var f = d(13),
                    n = d.n(f);
                f = d(15);
                var e = d.n(f);
                f = d(3);
                var c = d.n(f);
                f = d(1);
                var k = d.n(f),
                    v = d(7);
                f = d(14);
                var A = d(29),
                    l = d(2),
                    x = d(8),
                    p = d(35),
                    K = d(23),
                    z = ["attributes", "namespace", "content", "parent"];
                f = function (b) {
                    function d(e, d) {
                        var f =
                            (void 0 === d ? {} : d).autoIndex;
                        var h = void 0 === f ? !0 : f;
                        f = b.call(this) || this;
                        k()(c()(c()(f)), "eventsList", ["initialIndex:once:memory", "add", "remove", "node"]);
                        f.nextID = 0;
                        f.closed = !1;
                        f.dom = new a;
                        f.index = new a;
                        f.initialDOM = new g;
                        f.middleware = new A.b;
                        f.document = e;
                        f.quickAccess = {};
                        h && f.initialIndex();
                        return f
                    }
                    e()(d, b);
                    var f = d.prototype;
                    f.initialIndex = function () {
                        this.fastIndex(this.document.documentElement)
                    };
                    f.use = function (a) {
                        this.middleware.use(a)
                    };
                    f.initDOMCache = function () {
                        this.domCache = new a(this.index)
                    };
                    f.writeCache = function (a, c, e) {
                        this.domCache && this.domCache.set(a, {
                            node: c,
                            data: e
                        })
                    };
                    f.findCache = function (a) {
                        if (this.domCache) return this.domCache.get(a)
                    };
                    f.addQuckAccessItem = function (a, c) {
                        null == this.quickAccess[a] && null == this[a] && (this.quickAccess[a] = c, Object.defineProperty(this, a, {
                            get: function () {
                                return this.quickAccess[a]
                            }
                        }))
                    };
                    f.addToIndex = function (a, c, e) {
                        void 0 === e && (e = null);
                        if (a = this.middleware.run(a)) {
                            this.emit("node", a);
                            var b = a._DOMIndexerInfo;
                            if (!1 === this.dom.has(a) || null == b) {
                                e = this.generateNodeID(e);
                                var d = a.tagName || a.nodeName;
                                b = {
                                    id: e,
                                    name: d,
                                    parent: c,
                                    nativeNode: a,
                                    namespace: v.c.getNamespace(a),
                                    attributes: v.c.getAttributes(a),
                                    content: v.c.getContent(a)
                                };
                                this.domCache && this.writeCache(e, a, b);
                                /HTML|BODY/i.test(d) && this.addQuckAccessItem(d, b);
                                this.dom.set(a, b);
                                this.index.set(e, a);
                                a._DOMIndexerID = e;
                                a._DOMIndexerInfo = b;
                                a._DOMIndexer = this
                            }
                            this.emit("add", b);
                            return b
                        }
                        m.warn("Can't index undefined node")
                    };
                    f.clear = function (a) {
                        void 0 === a && (a = !0);
                        l.IterableUtils.forof(l.IterableUtils.keys(this.dom), function (a) {
                            l.IterableUtils.forof(["_DOMIndexer",
                                "_DOMIndexerID", "_DOMIndexerInfo"
                            ], function (c) {
                                a[c] = null;
                                delete a[c]
                            })
                        });
                        a && (this.document = null);
                        this.dom.clear();
                        this.index.clear()
                    };
                    f.dump = function () {
                        return {
                            dom: new a(this.dom),
                            index: new a(this.index)
                        }
                    };
                    f.dumpRestore = function (a) {
                        x.ObjectUtils.assign(this, a);
                        this.document.body.innerHTML = ""
                    };
                    f.findByID = function (a) {
                        return this.find(a)
                    };
                    f.findByNode = function (a) {
                        return this.get(a)
                    };
                    f.find = function (a) {
                        if (null != a) {
                            var c = this.index.get(a);
                            return null == c && this.domCache ? (a = this.findCache(a)) && a.node : c
                        }
                    };
                    f.findInfo = function (a) {
                        return this.dom.get(this.find(a))
                    };
                    f.generateNodeID = function (a) {
                        return null != a ? a : this.nextID++
                    };
                    f.get = function (a) {
                        return this.dom.get(a)
                    };
                    f.getNodeId = function (a) {
                        return (a = this.get(a)) && a.id
                    };
                    f.getIndexedNodeId = function (a) {
                        var c = this.getNodeId(a);
                        return null == c ? (this.reindexNodeTree(a), this.getNodeId(a)) : c
                    };
                    f.getNodesIds = function (a) {
                        var c = this;
                        return l.IterableUtils.toArray(a).map(function (a) {
                            return {
                                id: c.getNodeId(a),
                                nodes: c.getNodesIds(a.childNodes)
                            }
                        })
                    };
                    f.reindexNodeTree = function (a,
                                                  c) {
                        var e = this,
                            b = void 0 === c ? {} : c,
                            d = b.returnAll;
                        d = void 0 === d ? !1 : d;
                        var k = b.callback,
                            f = void 0 === k ? null : k;
                        b = b.parentID;
                        var h = void 0 === b ? null : b;
                        if (a) {
                            var g = [];
                            if (a.parentNode || h) f = p.FunctionUtils.toFunction(f), v.c.each(a, function (a, c) {
                                h = c.parentNode && e.getNodeId(c.parentNode) || h;
                                if (null != h) {
                                    var b = e.addToIndex(c, h);
                                    g.push(b);
                                    f(b, c)
                                }
                            });
                            return d ? g : a._DOMIndexerID
                        }
                    };
                    f.removeFromIndex = function (a) {
                        var c = this.getNodeId(a);
                        this.dom["delete"](a);
                        this.index["delete"](c);
                        l.IterableUtils.toArray(a.childNodes).map(this.removeFromIndex.bind(this));
                        this.emit("remove", a);
                        return c
                    };
                    f.removeNodeTree = function (a, c) {
                        var e = this;
                        void 0 === c && (c = !1);
                        if (a) {
                            var b = [],
                                d = a._DOMIndexerID;
                            v.c.each(a, function (a, c) {
                                var d = c._DOMIndexerID;
                                e.dom["delete"](c);
                                e.index["delete"](d);
                                e.emit("remove", c);
                                b.push(d)
                            });
                            return c ? b : d
                        }
                    };
                    f.fastIndex = function (a) {
                        var c = this.addToIndex.bind(this),
                            e = this.initialDOM.add.bind(this.initialDOM);
                        v.c.each(a, function (a, b) {
                            var d = c(b, b.parentNode && b.parentNode._DOMIndexerID);
                            e(x.ObjectUtils.copyObject(d))
                        })
                    };
                    f.toJSON = function (a) {
                        return d.toJSON(a ||
                            this.dom)
                    };
                    f.isIndexed = function (a) {
                        return this.dom.has(a)
                    };
                    f.showMissingNodes = function (a) {
                        var c = this;
                        void 0 === a && (a = !1);
                        a && K.Tools.measure("Show missing nodes", function () {
                            var a = v.c.all(c.document.documentElement);
                            l.IterableUtils.fastIterate(a, function (a, e) {
                                !1 === c.dom.has(e) && m.log("Missing node", e)
                            });
                            m.log("Index diff: [DOM: " + a.length + "] [INDEX: " + c.dom.size + "] [DIFF: " + (c.dom.size - a.length) + "]")
                        })
                    };
                    f.getCurrentHtml = function () {
                        var a = l.IterableUtils.map(this.dom, function (a) {
                            return a[1]
                        });
                        return d.simplify(a)
                    };
                    f.getDocument = function () {
                        return this.document
                    };
                    f.setDocument = function (a) {
                        this.document = a
                    };
                    n()(d, [{
                        key: "html",
                        get: function () {
                            return d.simplify(this.initialDOM)
                        }
                    }]);
                    return d
                }(f.a);
                k()(f, "simplify", function (a) {
                    return l.IterableUtils.map(a, function (a) {
                        var c = {
                            id: a.id,
                            name: a.name.toLowerCase()
                        };
                        l.IterableUtils.forof(z, function (e) {
                            null != a[e] && (c[e] = a[e])
                        });
                        return c
                    })
                });
                k()(f, "toNodesTree", function (a) {
                    var c = {};
                    a = l.IterableUtils.toArray(a);
                    l.IterableUtils.forof(a, function (a) {
                        if (null == c[a.id]) {
                            var e = x.ObjectUtils.combine(a);
                            c[a.id] = e;
                            null != a.parent && (a = c[a.parent]) && (a.children = a.children || [], a.children.push(e))
                        }
                    });
                    return c[0]
                });
                b.a = f
            }).call(this, d(11)["default"], d(5)["default"], d(10)["default"])
        }, function (a, b, d) {
            (function (a, g) {
                var f = d(9),
                    h = d.n(f);
                f = d(13);
                var n = d.n(f);
                f = d(1);
                var e = d.n(f);
                f = function () {
                    function c(c) {
                        void 0 === c && (c = p);
                        e()(this, "_cancelMainHandler", null);
                        e()(this, "subscriptions", {});
                        var b = a.isIframe(c);
                        this.window = b ? c.parent : c;
                        if (c._messenger) return c._messenger;
                        this.targetWindow = c;
                        c._messenger = this;
                        g.log("Messenger created [isFrame: " +
                            b + "]", this.targetWindow.location.href);
                        c = this.targetWindow;
                        b = this.targetWindow.name || "";
                        b = /^ym-/.test(b) ? b : "ym-" + a.guid();
                        c.name = b;
                        this.identifier = this.targetWindow.name;
                        this._handleMessages();
                        return this
                    }
                    var b = c.prototype;
                    b.send = function (a, c) {
                        var e = void 0 === c ? {} : c,
                            b = e.data,
                            d = e.onResponse;
                        e = e.receiver;
                        var k = null,
                            f = [];
                        "function" === typeof d && (k = a + "." + this.timestamp, this.listenOnce(function (a) {
                            a = a.data;
                            var c = a._ym_cancel_response,
                                e = a.data;
                            if (a.type === k) c ? g.warn("Seems like you forgot to call `answer` in message handler. This message requires your response") :
                                d(e);
                            else return !1
                        }, this.targetWindow));
                        k && f.push("response:" + k);
                        this._sendMessage({
                            data: b,
                            type: a,
                            target: this._getReceiver(e),
                            flags: f
                        })
                    };
                    b.subscribe = function (a, c) {
                        var e = this._createSubscriptionsGroup(a);
                        if (!1 === this._isSubscribed(e, c)) e.push(c);
                        else throw Error("This callback has already been subscribed to " + a);
                    };
                    b.unsubscribe = function (c, e) {
                        var b = this._getSubcribers(c);
                        !0 === this._isSubscribed(b, e) && a.removeFromArray(b, e)
                    };
                    b.unsubscribeAll = function (a) {
                        (a = this._getSubcribers(a)) && a.splice(0)
                    };
                    b.listen =
                        function (a) {
                            var c = this;
                            this._attachEvent("message", a);
                            return function () {
                                return c._removeEvent("message", a)
                            }
                        };
                    b.listenOnce = function (a, c) {
                        var e = this;
                        c = c || this.window;
                        var b = function (c) {
                                !1 !== a(c) && d()
                            },
                            d = function () {
                                e._removeEvent("message", b, c)
                            };
                        this._attachEvent("message", b, c);
                        return d
                    };
                    b._attachEvent = function (a, c, e) {
                        var b = this;
                        (e || this.window).addEventListener(a, c);
                        return function () {
                            return b._removeEvent(a, c)
                        }
                    };
                    b._createSubscriptionsGroup = function (a) {
                        return this._getSubcribers(a) || (this.subscriptions[a] = [])
                    };
                    b._isSubscribed = function (a, c) {
                        return a && c && 0 <= a.indexOf(c)
                    };
                    b._removeEvent = function (a, c, e) {
                        (e || this.window).removeEventListener(a, c)
                    };
                    b._getSubcribers = function (a) {
                        return this.subscriptions[a] || null
                    };
                    b._sendMessage = function (a) {
                        var c = void 0 === a ? {} : a;
                        a = c.target;
                        var e = c.flags;
                        e = void 0 === e ? [] : e;
                        c = {
                            _ym_messenger: !0,
                            _ym_identifier: this.identifier,
                            type: c.type,
                            data: c.data
                        };
                        if (e && 0 < e.length)
                            for (var b = 0, d = e.length; b < d; b++) {
                                var k = e[b].split(":");
                                c["_ym_" + k[0]] = k[1] || !0
                            }
                        this._postMessage(c, a)
                    };
                    b._postMessage =
                        function (a, c) {
                            (c || this.window).postMessage(a, "*")
                        };
                    b._getReceiver = function (a) {
                        if (null != a) {
                            if (a.postMessage) return a;
                            if (a.contentWindow) return a.contentWindow
                        }
                    };
                    b._handleMessages = function () {
                        var a = this;
                        if (null == this._cancelMainHandler) {
                            var c = this._attachEvent("message", function (c) {
                                c = c.data || {};
                                var e = c._ym_response,
                                    b = c._ym_identifier,
                                    d = c.data,
                                    k = c.type;
                                if (!0 === c._ym_messenger && k && !/\.([0-9]+)$/.test(k)) {
                                    c = a._getSubcribers(k);
                                    var f = a._findIframeByName(b);
                                    if (null === f) g.warn("Cannot find iframe with id " +
                                        b);
                                    else {
                                        var n = {
                                            id: b,
                                            sender: f,
                                            data: d,
                                            type: k
                                        };
                                        b = 0;
                                        for (d = c.length; b < d; b++) {
                                            var m = c[b];
                                            e ? function () {
                                                var c = {
                                                        type: e,
                                                        target: f.contentWindow
                                                    },
                                                    b = 2 === m.length,
                                                    d = null,
                                                    k = function (e) {
                                                        clearTimeout(d);
                                                        e = b ? h()({}, c, {
                                                            data: e
                                                        }) : h()({}, c, {
                                                            flags: ["cancel_response"]
                                                        });
                                                        a._sendMessage(e)
                                                    };
                                                b ? (d = E(function () {
                                                    g.warn("Response has been canceled because `answer` was never called");
                                                    b = !1;
                                                    k()
                                                }, 2E3), m(n, k)) : (m(n), k())
                                            }() : m(n)
                                        }
                                    }
                                }
                            }, this.targetWindow);
                            this._cancelMainHandler = function () {
                                c();
                                a._cancelMainHandler = null
                            }
                        }
                    };
                    b._findIframe =
                        function (c) {
                            var e = [].slice.call(q.querySelectorAll("iframe"));
                            return a.find(e, function (a) {
                                return a.contentWindow === c
                            }) || null
                        };
                    b._findIframeByName = function (a) {
                        return this._findIframe(this.targetWindow.frames[a]) || null
                    };
                    n()(c, [{
                        key: "timestamp",
                        get: function () {
                            return a.now()
                        }
                    }]);
                    return c
                }();
                b.a = f
            }).call(this, d(4)["default"], d(10)["default"])
        }, function (a, b, d) {
            (function (a, g) {
                var f = d(9),
                    h = d.n(f);
                f = function () {
                    function b(a, e, b) {
                        void 0 === a && (a = p);
                        void 0 === e && (e = q);
                        Object.defineProperty(this, "_indexer", {
                            value: b
                        });
                        this.window = a;
                        this.document = e;
                        this.indexer = this._indexer;
                        this.selection = this.window.getSelection()
                    }
                    var e = b.prototype;
                    e.getPageSelection = function () {
                        var a = this.getSelection();
                        if (a) {
                            var e = this.indexer.getNodeId(a.startNode),
                                b = this.indexer.getNodeId(a.endNode);
                            this.restoreIndexer();
                            return h()({}, a, {
                                startNode: e,
                                endNode: b
                            })
                        }
                    };
                    e.restorePageSelection = function (c) {
                        if (c) {
                            var e = this.indexer.find(c.startNode),
                                b = this.indexer.find(c.endNode);
                            this.restoreIndexer();
                            a.isDOMNode(e) && a.isDOMNode(b) && this.restoreSelection(h()({},
                                c, {
                                    startNode: e,
                                    endNode: b
                                }))
                        }
                    };
                    e.getSelection = function () {
                        if (0 < this.selection.rangeCount) {
                            var a = this.selection.getRangeAt(0) || this.document.createRange();
                            return {
                                start: a.startOffset,
                                end: a.endOffset,
                                startNode: a.startContainer,
                                endNode: a.endContainer
                            }
                        }
                    };
                    e.restoreSelection = function (a) {
                        var c = a.start,
                            e = a.end,
                            b = a.startNode;
                        a = a.endNode;
                        try {
                            var d = b.ownerDocument,
                                f = d.defaultView.getSelection(),
                                h = d.createRange();
                            h.setStart(b, c);
                            h.setEnd(a, e);
                            f.removeAllRanges();
                            f.addRange(h)
                        } catch (K) {
                            g.log({
                                start: {
                                    startNode: b,
                                    start: c
                                },
                                end: {
                                    endNode: a,
                                    end: e
                                }
                            })
                        }
                    };
                    e.getSelectionFor = function (a) {
                        if (/text|search|password|tel|url/.test(a.type)) return {
                            start: a.selectionStart,
                            end: a.selectionEnd
                        }
                    };
                    e.restoreSelectionFor = function (a, e) {
                        e && null != e.start && null != e.end && /text|search|password|tel|url/.test(a.type) && (a.selectionStart = e.start, a.selectionEnd = e.end)
                    };
                    e.clear = function () {
                        var a = this.document.createRange();
                        a.setStart(this.document.body, 0);
                        a.setEnd(this.document.body, 0);
                        this.selection.removeAllRanges();
                        this.selection.addRange(a)
                    };
                    e.setIndexer = function (a) {
                        a !== this.indexer && (this.indexer = a)
                    };
                    e.restoreIndexer = function () {
                        this.indexer = this._indexer
                    };
                    return b
                }();
                b.a = f
            }).call(this, d(4)["default"], d(10)["default"])
        }, function (a, b, d) {
            (function (a, g) {
                var f = d(0),
                    h = {
                        doNotTrack: function () {
                            return !0 !== navigator.doNotTrack
                        },
                        localStorage: function () {
                            try {
                                return f.a.localStorage.setItem("test", "value"), f.a.localStorage.removeItem("test"), !0
                            } catch (n) {
                                return !1
                            }
                        },
                        defineProperty: function () {
                            try {
                                return Object.defineProperty({}, "test", {
                                    value: 123
                                }), !0
                            } catch (n) {
                                return !1
                            }
                        }
                    };
                b.a = function () {
                    a.forin(h, function (a) {
                        if (!h[a]()) return g.log("Feature not supported: " + a), !1
                    });
                    return !0
                }()
            }).call(this, d(4)["default"], d(10)["default"])
        }, function (a, b, d) {
            (function (a) {
                var f = d(26),
                    m = d.n(f);
                f = d(11);
                var h = d(2),
                    n = d(22),
                    e = d(8),
                    c = {
                        items: {
                            extnameFinder: /\.(css|png|gif|svg|jp[e]?g|mp4|ogv|webm|webp|mp3|ico|woff|ttf|eot)/gi,
                            urlPartsFinder: /([?./]*)/gi,
                            anchorFinder: /^(?!#).*([#]+)/g,
                            cssURLFinder: /url\(['"]?(?!(#|data|blob))([^()'"]+)['"]?\)/g,
                            protocolMissing: /^(?!http[s]?).*/,
                            dataurlTest: /^(data|blob):/,
                            selectorTest: /^#(.*)/,
                            protocolIncomplete: /^(http[s]?)?(:?\/\/)/,
                            resourceFinder: /{{RESOURCE_URL}}/,
                            proxiedURL: /proxy([^?]*)\?url=/i
                        },
                        get: function (a) {
                            return this.items[a]
                        },
                        reset: function (a) {
                            this.items[a].lastIndex = 0
                        },
                        test: function (a, c) {
                            var e = this.get(a);
                            this.reset(a);
                            return e.test(c)
                        },
                        resetMultiple: function () {
                            for (var a, c = this, e = arguments.length, b = Array(e), d = 0; d < e; d++) b[d] = arguments[d];
                            b = (a = []).concat.apply(a, b);
                            h.IterableUtils.fastIterate(b, function (a, e) {
                                return c.reset(e)
                            })
                        },
                        resetAll: function () {
                            this.resetMultiple(h.IterableUtils.keys(this.items))
                        }
                    },
                    k = {
                        location: null,
                        proxy: null,
                        base: null,
                        window: "object" === typeof p && p || null,
                        document: "object" === typeof q && q || null
                    },
                    v = new f["default"],
                    A = new f["default"],
                    l = function (a) {
                        return "string" === typeof a ? URL.parse ? URL.parse(a) : new URL(a) : a
                    },
                    x = function (a) {
                        return A.get(a) || a
                    },
                    F = function () {
                        var a = l(function () {
                            if (k.base) return k.base;
                            if (k.document) {
                                var a = k.document.querySelector("base[href]");
                                return a ? a.href : k.location
                            }
                            return k.location
                        }());
                        return k.location = {
                            host: a.host,
                            protocol: a.protocol,
                            path: (a.pathname || a.path ||
                                "").replace(/[^/]*$/, "")
                        }
                    },
                    K = [];
                f = Object.defineProperties({
                    regexp: c,
                    patchCSS: function (a, e) {
                        var b = (void 0 === e ? {} : e).location;
                        b = void 0 === b ? null : b;
                        c.reset("cssURLFinder");
                        return this.patchURLS(a, c.get("cssURLFinder"), b, function (a) {
                            return "url('" + a + "')"
                        })
                    },
                    patchURLS: function (a, c, e, b) {
                        var d = this,
                            k = a,
                            f = function (a) {
                                return "function" === typeof a ? a : function (a) {
                                    return a
                                }
                            }(b);
                        "string" === typeof a && a.match(c) && (k = a.replace(c, function () {
                            var a = d.patchURL(2 >= arguments.length ? y : arguments[2], {
                                location: e
                            });
                            return f(a)
                        }));
                        return k
                    },
                    patchURL: function (a, c) {
                        var e = this,
                            b = void 0 === c ? {} : c,
                            d = b.location,
                            k = void 0 === d ? null : d;
                        b = b.split;
                        var f = void 0 === b ? !1 : b;
                        return "string" === typeof a ? function (a) {
                            return f ? a.split(",") : [a]
                        }(a).reduce(function (a, c) {
                            var b = c.trim().split(" "),
                                d = b[0];
                            b = b.slice(1);
                            d = e.applyPatch(d, k);
                            a.push([d].concat(b).join(" "));
                            return a
                        }, []).join(", ") : a
                    },
                    applyPatch: function (e, b) {
                        if (0 <= K.indexOf(e)) return e;
                        if (v.has(e)) return v.get(e);
                        var d = this.location,
                            f = {
                                isRelative: /^\./.test(e)
                            };
                        f = (void 0 === f ? {} : f).isRelative;
                        var h = !k.base || (void 0 === f ? 0 : f) ? n.StringUtils.parseURL(x(b)) || Object.assign({}, d, {
                            path: b || d.path
                        }) : d;
                        d = h.host;
                        f = h.protocol;
                        h = h.pathname || h.path || "";
                        var g = e;
                        c.resetAll();
                        if (c.test("dataurlTest", e) || c.test("selectorTest", e)) return e;
                        c.test("protocolMissing", e) && (c.test("protocolIncomplete", e) ? d = e.replace(c.get("protocolIncomplete"), f + "//") : (h = this.resolvePath(e, h), d = f + "//" + (d + "/" + h).replace(/([/]+)/g, "/")), g = d);
                        A.set(e, g);
                        /http[s]?/.test(g) ? (d = g, c.test("proxiedURL", d) ? g = d : (k.isWhitelisted ? (f = k.isWhitelisted(d)) &&
                            a.warn("Whitelisted: " + d) : f = !1, g = f ? d : (f = k.proxy) && c.test("resourceFinder", f) ? f.replace(c.get("resourceFinder"), d.replace(/&/g, "%26")) : d), K.push(g), v.set(e, g), d = g) : (K.push(e), v.set(e, g), d = e);
                        return k.noEncode ? decodeURIComponent(d) : d
                    },
                    resolvePath: function (a, c) {
                        if (/^\//.test(a)) return a;
                        for (var e = (c + "/" + a).replace(/([/]+)/g, "/").split("/"), b = [], d = 0, k = e.length; d < k; d++) {
                            var f = e[d];
                            "" === f ? b.length = 0 : "." !== f && (".." === f ? 0 < b.length && --b.length : b.push(f))
                        }
                        b.unshift("");
                        return b.join("/")
                    },
                    configure: function (a) {
                        void 0 ===
                        a && (a = {});
                        var c = a;
                        a = c.proxyWhitelist;
                        c = m()(c, ["proxyWhitelist"]);
                        k = e.ObjectUtils.assign({}, k, c);
                        if (a) {
                            a = a.map(function (a) {
                                return a.replace("*", "(.*)")
                            }).join("|");
                            var b = new RegExp("" + a, "ig");
                            k.isWhitelisted = function (a) {
                                b.lastIndex = 0;
                                return b.test(a)
                            }
                        }
                    },
                    isURLLike: function (a) {
                        c.resetMultiple(["dataurlTest", "selectorTest", "extnameFinder", "protocolMissing"]);
                        return c.test("dataurlTest", a) || c.test("selectorTest", a) ? !1 : c.test("extnameFinder", a) && c.test("protocolMissing", a)
                    },
                    clearCache: function () {
                        v.clear()
                    },
                    isProxiedURL: function (a) {
                        return a ? c.test("proxiedURL", a) : !1
                    }
                }, {
                    location: {
                        get: function () {
                            return F()
                        },
                        set: function (a) {
                            return (k = Object.assign({}, k, {
                                location: a
                            })).location
                        },
                        configurable: !0,
                        enumerable: !0
                    },
                    config: {
                        get: function () {
                            return k
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                });
                b.a = f
            }).call(this, d(10)["default"])
        }, function (a, b, d) {
            function f() {
                try {
                    if (!p.sessionStorage) return null;
                    var a = p.sessionStorage.getItem(m),
                        b = !1;
                    try {
                        var e = p.opener ? p.opener.sessionStorage : null;
                        b = !!e && a === e.getItem(m)
                    } catch (c) {
                        b = !0
                    }
                    if (!a ||
                        b) a = g["default"].guid(), p.sessionStorage.setItem(m, a);
                    return a
                } catch (c) {
                    return null
                }
            }
            d.d(b, "a", function () {
                return f
            });
            var g = d(4),
                m = "__vw_tab_guid"
        }, function (a, b, d) {
            a = d(41);
            var f = new(d(28).a),
                g = 0,
                m = 0,
                h = function (a) {
                    var c = this,
                        e = this.stamp;
                    f.push(function () {
                        e !== g && (m = 0);
                        g = e;
                        c._publishMutations(c._getMutationObject(a, e, m++))
                    })
                },
                n = d(42),
                e = d(43),
                c, k = function (a, c) {
                    if (!this.IS_MOBILE_DEVICE) {
                        var e = 0,
                            b = function () {
                                var d = c.getValue.call(this, a);
                                d && (0 !== d.stamp ? this._publishActions(d) : 3 > e && (E(b, 300), e += 1))
                            }.bind(this);
                        b()
                    }
                },
                v = d(44),
                A = d(45),
                l = d(46),
                x = d(47),
                p = d(48);
            d = d(49);
            b.a = {
                canvas: {
                    create: function (a) {
                        var c = a.canvasProxy,
                            e = a._universalHandler(function (a) {
                                a = this._getEventObject("canvasProperty", a.canvas, {
                                    property: a.name,
                                    value: a.value
                                });
                                this._publishActions(a)
                            });
                        a = a._universalHandler(function (a) {
                            a = this._getEventObject("canvasMethod", a.canvas, {
                                method: a.name,
                                args: a.args
                            });
                            this._publishActions(a)
                        });
                        c.events.on("setter", e);
                        c.events.on("method", a);
                        c.mock()
                    },
                    destroy: function (a) {
                        a.canvasProxy.remove()
                    }
                },
                input: a.a,
                keystrokes: {
                    create: function (a) {
                        a.keyCapture.onCapture(function (c) {
                            c =
                                a._getEventObject("keystroke", -1, c);
                            a._publishActions(c)
                        })
                    },
                    destroy: function (a) {
                        a.keyCapture.destroy()
                    }
                },
                media: {
                    create: function (a) {
                        var c = new a.MediaProxy,
                            e = a._universalHandler(function (c) {
                                c = a._getEventObject("mediaProperty", c.media, {
                                    property: c.name,
                                    value: c.value
                                });
                                a._publishActions(c)
                            }),
                            b = a._universalHandler(function (c) {
                                c = a._getEventObject("mediaMethod", c.media, {
                                    method: c.name,
                                    args: c.args
                                });
                                a._publishActions(c)
                            });
                        c.events.on("setter", e);
                        c.events.on("method", b);
                        c.mock()
                    },
                    destroy: function (a) {
                        a.mediaProxy.remove()
                    }
                },
                mutations: {
                    create: function (a) {
                        a.summary.on("mutation", a._universalHandler(h))
                    },
                    destroy: function (a) {
                        a.summary.off("mutation");
                        f.start(!0)
                    }
                },
                mouse: n.a,
                focus: e.a,
                resize: {
                    getValue: function () {
                        var a = this.viewport.getSize(1),
                            c = a.width;
                        a = a.height;
                        var e = this.viewport.scrollingElement;
                        if (0 < c && 0 < a) return this._getEventObject("resize", 0, {
                            width: c,
                            height: a,
                            pageWidth: e.scrollWidth,
                            pageHeight: e.scrollHeight
                        })
                    },
                    create: function (a) {
                        c = a.attachEvent(a.window, "resize", a._universalHandler(k, {
                            extra: [this]
                        }), {
                            passive: !0
                        })
                    },
                    destroy: function (a) {
                        a.removeEvent(c)
                    }
                },
                deviceRotation: v.a,
                scroll: A.a,
                selection: l.a,
                touch: x.a,
                zoom: p.a,
                window: d.a,
                checkable: {
                    scanFrequency: 50,
                    timeoutId: null,
                    checkables: {},
                    recorder: null,
                    create: function (a) {
                        this.recorder = a;
                        this.handleNodeIndex = this.handleNodeIndex.bind(this);
                        this.handleNodeRemoval = this.handleNodeRemoval.bind(this);
                        a.indexer.on("add", this.handleNodeIndex);
                        a.indexer.on("remove", this.handleNodeRemoval);
                        this.updatecheckablesStates()
                    },
                    updatecheckablesStates: function () {
                        var a = this;
                        Object.keys(this.checkables).forEach(function (c) {
                            if ((c =
                                a.checkables[c]) && c.nodeInfo.nativeNode.checked !== c.checked) {
                                var e = a.recorder._getEventObject("change", c.nodeInfo.id, {
                                    checked: c.nodeInfo.nativeNode.checked
                                });
                                a.recorder._publishActions(e);
                                c.checked = c.nodeInfo.nativeNode.checked
                            }
                        });
                        E(this.updatecheckablesStates.bind(this), this.scanFrequency)
                    },
                    handleNodeIndex: function (a) {
                        "INPUT" !== a.name || "checkbox" !== a.attributes.type && "radio" !== a.attributes.type || (this.checkables[a.id] = {
                            checked: a.nativeNode.checked,
                            nodeInfo: a
                        })
                    },
                    handleNodeRemoval: function (a) {
                        delete this.checkables[a.id]
                    },
                    destroy: function () {
                        clearTimeout(this.timeoutId);
                        this.recorder.indexer.off("add", this.handleNodeIndex);
                        this.recorder.indexer.off("remove", this.handleNodeRemoval)
                    }
                }
            }
        }, function (a, b, d) {
            d.r(b);
            (function (a, g, m, h, n) {
                d.d(b, "default", function () {
                    return V
                });
                var e = d(40),
                    c = d.n(e);
                e = d(9);
                var k = d.n(e);
                e = d(13);
                var f = d.n(e);
                e = d(15);
                var A = d.n(e);
                e = d(3);
                var l = d.n(e);
                e = d(1);
                var x = d.n(e),
                    F = d(12),
                    K = d(36),
                    z = d(27),
                    ba = d(64),
                    w = d(50),
                    t = d(52),
                    r = d(17);
                e = d(53);
                var y = d(54),
                    u = d(55),
                    D = d(56),
                    B = d(58),
                    G = d(14),
                    H = d(19);
                d(59);
                var I = d(60),
                    J = d(61),
                    O = d(18),
                    na = d(62),
                    T = d(7),
                    P = d(63),
                    Q = d(4);
                a.log("Webvisor " + F.a["package"].version);
                var U = new g,
                    ja = new e.a({
                        checkOnLoad: !1,
                        resetOnEnd: !0
                    }),
                    W = {};
                a.__addDebug("lsft", W);
                var ha = {
                        maxSize: m.size(50, "mb"),
                        maxDuration: 864E5,
                        compression: !1,
                        isEU: !1,
                        recording: {
                            keysMode: "explicit"
                        }
                    },
                    fa = F.a.DOMIndexer.HIDABLE_NODES,
                    N = !0 === J.a,
                    aa = Q.IS_INCOGNITO || Q.DO_NOT_TRACK || "disable" === m.meta("webvisor"),
                    ca = p !== p.top,
                    V = function (e) {
                        function b(c, b) {
                            void 0 === c && (c = {});
                            void 0 === b && (b = {});
                            var d = e.call(this) || this;
                            x()(l()(l()(d)),
                                "middlewares", []);
                            x()(l()(l()(d)), "iframes", []);
                            x()(l()(l()(d)), "waitingBody", null);
                            x()(l()(l()(d)), "_identifier", m.guid());
                            x()(l()(l()(d)), "offsets", {
                                left: 0,
                                top: 0
                            });
                            x()(l()(l()(d)), "nodeProxy", function (a) {
                                if (0 <= fa.indexOf(a.nodeName)) {
                                    var c = m.isHiddenContent(a);
                                    if (U.has(a)) return U.get(a);
                                    if (c) {
                                        var e = a.nodeName;
                                        if ("#text" === e && "" === a.textContent.trim()) return a;
                                        c = function (a) {
                                            switch (e) {
                                                case "#text":
                                                    var c = d.createPlaceholder(a, "span").placeholder;
                                                    c.setAttribute("ym-text-content", K.a.randomizeString(a.textContent));
                                                    return c;
                                                case "IMG":
                                                    return c = d.createPlaceholder(a, "img"), a = c.placeholder, c = c.bounds, a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII\x3d", a.width = c.width, a.height = c.height, a;
                                                case "TEXTAREA":
                                                case "INPUT":
                                                    return c = d.createPlaceholder(a, "input"), a = c.placeholder, c = c.bounds, a.style.width = c.width + "px", a.style.height = c.height + "px", a;
                                                default:
                                                    return c = d.createPlaceholder(a, "span"), a = c.placeholder, c = c.bounds, a.style.width = c.width + "px",
                                                        a.style.height = c.height + "px", a
                                            }
                                        }(a);
                                        U.set(a, c);
                                        return c
                                    }
                                }
                                return a
                            });
                            x()(l()(l()(d)), "_sendEOF", m.once(function () {
                                if (!d._EOF_SENT) {
                                    var a = d._getEventObject("eof");
                                    d._saveChanges({
                                        events: [a]
                                    });
                                    d._EOF_SENT = !0
                                }
                            }));
                            d._context = function (a) {
                                var c = {};
                                return a ? (c.window = a.window || p, c.document = a.document || q, c) : {
                                    window: p,
                                    document: q
                                }
                            }(b);
                            d._configOptions = c;
                            Object.defineProperty(d.window, "__YM_WV_ENABLED__", {
                                value: !0
                            });
                            a.log("State: " + L.href + " [iframe: " + ca + "]");
                            return !N || aa ? l()(l()(d)) || l()(d) : d
                        }
                        A()(b, e);
                        var d =
                            b.prototype;
                        d.configure = function () {
                            var a = this,
                                c = this._configOptions;
                            this.frames = [];
                            this.viewport = m.viewportGetter(this.document);
                            this.zoomLevel = this.viewport.zoomLevel;
                            this.captors = new g;
                            this.prevMutationStamp = null;
                            this.prevMutationOrderingID = 0;
                            this.inited = !1;
                            this.startOptions = this.initException = null;
                            this.precache = [];
                            this.options = m.combine(ha, c);
                            this.paused = !0;
                            this.started = !1;
                            this.canvasProxy = z.a;
                            this.MediaProxy = u.a;
                            this.sender = new t.a(this.middlewares.splice(0));
                            this._universalHandler = this._universalHandler.bind(this);
                            this._timer = m.timer();
                            T.c.addAttributesFilter(function (c, e, b) {
                                if (r.a.isValidNode(c) && "value" === e) return c = r.a.validate(c, a.options), e = c.forceRecord, c.isAllowed || e ? b : r.a.encode(b)
                            })
                        };
                        d.attachEvent = function () {
                            for (var a, c = arguments.length, e = Array(c), b = 0; b < c; b++) e[b] = arguments[b];
                            H.a.on.apply(H.a, (a = []).concat.apply(a, e));
                            return e
                        };
                        d.removeEvent = function () {
                            for (var a, c = arguments.length, e = Array(c), b = 0; b < c; b++) e[b] = arguments[b];
                            H.a.off.apply(H.a, (a = []).concat.apply(a, e));
                            return e
                        };
                        d["continue"] = function () {
                            aa ||
                            (this.paused = !1)
                        };
                        d.findNode = function (a) {
                            return this.indexer.getNodeId(a)
                        };
                        d.pause = function () {
                            aa || (this.paused = !0)
                        };
                        d.middleware = function (a) {
                            this.sender ? this.sender.use(a) : this.middlewares.push(a);
                            return this
                        };
                        d.init = function () {
                            var c = this;
                            N && !aa && (a.info("iFrame recording is disabled"), this.waitingBody = Object(D.a)(this.document), this.waitingBody.then(function () {
                                c.configure();
                                c.dataSent = 0;
                                c.hitDuration = 0;
                                c.paused = !1;
                                var a = c._initMessenger();
                                a["catch"](function (a) {
                                    throw a;
                                });
                                return a.then(function () {
                                    c.waitingBody =
                                        null;
                                    c.indexer = new B.a(c.document, {
                                        autoIndex: !1
                                    });
                                    c.indexer.on("node", function (a) {
                                        return c.connectSlaveRecorder(a)
                                    });
                                    c.indexer.use(c.nodeProxy);
                                    c.indexer.initialIndex();
                                    c.summary = new w.a(c.document.documentElement, c.indexer);
                                    c.selection = new I.a(c.window, c.document, c.indexer);
                                    c.keyCapture = new y.a("body");
                                    c.summary.initObserver();
                                    c._initCaptors();
                                    c._saveOriginalHTML();
                                    c._timer.start();
                                    c.cancelIfNotStarted = E(function () {
                                        c.stop(!0, !1)
                                    }, 3E4);
                                    c.emit("ready");
                                    c.inited = !0;
                                    c.requestDelayedStart && c.start(c.startOptions)
                                })
                            })["catch"](function (e) {
                                a.warn("Initialization failed");
                                c.initException = e;
                                throw e;
                            }))
                        };
                        d.connectSlaveRecorder = function (a) {};
                        d.createPlaceholder = function (a, c) {
                            var e = q.createElement(c),
                                b = K.a.getNodeBounds(a);
                            e.setAttribute("ym-node-type", a.nodeName.toLowerCase());
                            a.attributes && (m.copyAttributes(a, e), e.className = a.className);
                            e.className += " ym-hidden-content";
                            return {
                                placeholder: e,
                                bounds: b
                            }
                        };
                        d.start = function (a) {
                            var c = this;
                            void 0 === a && (a = {});
                            this.startOptions = a;
                            if (!this.started)
                                if (this.waitingBody) this.requestDelayedStart = !0;
                                else {
                                    if (!this.inited) {
                                        if (this.initException) throw Error("Recorder is not inited due to error: " +
                                            this.initException.message);
                                        throw Error("Recorder is not inited due to unknown error");
                                    }
                                    N && !aa && (clearTimeout(this.cancelIfNotStarted), a = (a || {}).forms, this.options.recording = m.combine(ha.recording, {
                                        keysMode: void 0 === a || a ? "regular" : "explicit"
                                    }), this.start = m.noop(), this.started = !0, this.originalHTML.then(function (a) {
                                        c._request("/dump", {
                                            page: k()({
                                                recordStamp: (new Date).getTime(),
                                                tabId: Object(P.a)()
                                            }, a, {
                                                stamp: c._stampForType("page")
                                            })
                                        });
                                        c._sendInitialEvents();
                                        c._sendPreCachedData()
                                    })["catch"](function (a) {
                                        c.stop()
                                    }))
                                }
                        };
                        d.stop = function (a, c) {
                            var e = this;
                            void 0 === a && (a = !1);
                            void 0 === c && (c = !0);
                            N && !aa && (!1 !== this.started && this.inited || a) && (this.captors.forEach(function (a) {
                                a && a.hasOwnProperty("destroy") && a.destroy(e)
                            }), this.indexer.clear(), this.captors.clear(), O.a.invokeAll(this), this.summary.destroy(), this.keyCapture.destroy(), c ? (this._sendEOF(), this.emit("stop")) : a && this.emit("close"), this.started = !1)
                        };
                        d.setURLProxy = function (a) {
                            na.a.proxy = function () {
                                if ("string" === typeof a) return a;
                                if ("function" === typeof a) return a.call(this)
                            }(a)
                        };
                        d._initCaptors = function () {
                            var a = this;
                            this.keyCapture.addElementFilter(function (a) {
                                return "INPUT" === a.nodeName ? "password" !== a.type && !1 === /ym-disable-keys/.test(a.className) : !0
                            });
                            var c = m.combine({}, F.a.captors, ca ? F.a.iframeCaptors : null);
                            m.forin(c, function (e) {
                                if (!0 === c[e]) {
                                    var b = ba.a[e];
                                    b.create(a);
                                    a.captors.set(e, b)
                                }
                            });
                            H.a.on(this.window, "beforeunload", this.stop.bind(this))
                        };
                        d._blockUpcomingCaptor = function (a, c) {
                            var e = this;
                            void 0 === c && (c = Infinity);
                            a && (this._blockedCaptors = this._blockedCaptors || new h,
                                this._blockedCaptors.add(a), Infinity > c && E(function () {
                                return e._releaseCaptor(a)
                            }, c))
                        };
                        d._releaseCaptor = function (a) {
                            a && this._blockedCaptors.has(a) && this._blockedCaptors["delete"](a)
                        };
                        d._executeCaptor = function (a, c) {
                            a && "function" === typeof c && (this._blockedCaptors && this._blockedCaptors.has(a) ? this._releaseCaptor(a) : c())
                        };
                        d._getEventObject = function (a, c, e, b) {
                            c = "number" === typeof c ? c : c ? this.findNode(c) || -1 : null;
                            return {
                                stamp: this._stampForType(a, b),
                                type: a,
                                target: c,
                                meta: e || null
                            }
                        };
                        d._getMutationObject = function (a,
                                                         c, e) {
                            void 0 === e && (e = 0);
                            return {
                                stamp: this._stampForType("mutation", c),
                                meta: {
                                    changes: a,
                                    index: e
                                }
                            }
                        };
                        d._stampForType = function (a, c) {
                            var e = c || this.stamp;
                            return W[a] = e + (e === W[a] ? 1 : 0)
                        };
                        d._getInitialScroll = function () {
                            var a = [],
                                c = this.document.body,
                                e = this._getScroll(c);
                            null != e && a.push(e);
                            a.concat(this._getScrolls(c.childNodes));
                            return a
                        };
                        d._getScrolls = function (a) {
                            var c = this;
                            return m.toArray(a).reduce(function (a, e) {
                                var b = c._getScroll(e);
                                null != b && a.push(b);
                                0 < e.childNodes.length && a.concat(c._getScrolls(e.childNodes));
                                return a
                            }, [])
                        };
                        d._getScroll = function (a) {
                            var c = a.scrollTop,
                                e = a.scrollLeft;
                            if (0 < c || 0 < e) return {
                                target: this.findNode(a),
                                scroll: [c, e]
                            }
                        };
                        d._initMessenger = function () {
                            return n.resolve()
                        };
                        d._initMasterMessenger = function () {
                            var c = this;
                            a.log("Created master messenger");
                            this.messenger.subscribe("iframe_register", function (c, e) {
                                var b = c.sender,
                                    d = m.offsets(b),
                                    k = d.top;
                                d = d.left;
                                a.log("Got registration request", b);
                                e({
                                    success: !0,
                                    offsets: {
                                        top: k,
                                        left: d
                                    }
                                })
                            });
                            this.messenger.subscribe("iframe_data", function (a) {
                                var e = a.data;
                                a = a.sender;
                                var b = c.findNode(a);
                                if (null != b) {
                                    var d = {
                                        frameId: b
                                    };
                                    e.page && (b = k()({}, e.page, d, {
                                        stamp: c._stampForType("page")
                                    }), c._request("/dump", {
                                        page: b
                                    }));
                                    if (e.events) {
                                        a = m.offsets(a, {
                                            relative: !0
                                        });
                                        var f = a.left,
                                            h = a.top;
                                        a = e.events.map(function (a) {
                                            /mouse/.test(a.type) && (a.meta.x = Math.round(a.meta.x + f), a.meta.y = Math.round(a.meta.y + h));
                                            return k()({}, a, d, {
                                                stamp: c._stampForType(a.type)
                                            })
                                        });
                                        c._publishActions(a)
                                    }
                                    e.mutations && (e = e.mutations.map(function (a) {
                                        return k()({}, a, d, {
                                            stamp: c._stampForType("mutation")
                                        })
                                    }),
                                        c._publishMutations(e))
                                }
                            })
                        };
                        d._initSlaveMessenger = function () {};
                        d._publishActions = function () {
                            var a;
                            this._saveChanges({
                                events: (a = []).concat.apply(a, arguments)
                            })
                        };
                        d._publishMutations = function () {
                            var a;
                            this._saveChanges({
                                mutations: (a = []).concat.apply(a, arguments)
                            })
                        };
                        d._request = function (a, c) {
                            void 0 === c && (c = {});
                            if (!this._EOF_SENT)
                                if (!1 === this.started) this.precache.push([a, c]);
                                else {
                                    var e = m.combine({
                                        _v: F.a["package"].version
                                    }, k()({}, c));
                                    this.sender.send({
                                        url: a,
                                        data: k()({}, e)
                                    })
                                }
                        };
                        d._saveChanges = function (a) {
                            this._request("/dump",
                                a);
                            !this._EOF_SENT && this.started && (this.dataSent >= this.options.maxSize || this.hitDuration >= this.options.maxDuration) && this.stop()
                        };
                        d._saveOriginalHTML = function () {
                            var a = this;
                            this.originalHTML = new n(function (c) {
                                var e = a.viewport.getSize(a.zoomLevel),
                                    b = m.base(),
                                    d = !!q.querySelector("base[href]");
                                c({
                                    meta: {
                                        doctype: a.doctype,
                                        title: q.title,
                                        address: L.href,
                                        ua: navigator.userAgent,
                                        base: b,
                                        hasBase: d,
                                        referrer: q.referrer,
                                        viewport: e,
                                        adblocking: ja.checkSync(),
                                        screen: {
                                            width: da.width,
                                            height: da.height
                                        },
                                        location: {
                                            host: L.host,
                                            protocol: L.protocol,
                                            path: L.pathname
                                        }
                                    },
                                    content: a.summary.html
                                })
                            })
                        };
                        d._sendInitialEvents = function () {
                            var a = this,
                                c = [],
                                e = function () {
                                    var c = a.captors.get("resize");
                                    return c && c.getValue.call(a)
                                }(),
                                b = this.viewport.scrollingElement,
                                d = this._getInitialScroll().map(function (c) {
                                    var e = c.scroll,
                                        d = e[0];
                                    e = e[1];
                                    c = function (a) {
                                        return a === this.document || a === this.window ? b : a
                                    }(a.indexer.find(c.target));
                                    return a._getEventObject("scroll", c, {
                                        x: e,
                                        y: d,
                                        page: c === b
                                    })
                                });
                            e && c.push(e);
                            c.push.apply(c, d);
                            this._saveChanges({
                                events: c
                            })
                        };
                        d._sendPreCachedData = function () {
                            var a = this;
                            m.fastIterate(this.precache, function (c, e) {
                                a._request.apply(a, e)
                            })
                        };
                        d._connectToParent = function () {
                            this._sendMessage("connect", {
                                id: this._identifier
                            })
                        };
                        d._sendMessage = function (a, c) {
                            (ca ? this.window.top : this.window).postMessage({
                                type: a,
                                data: c
                            }, "*")
                        };
                        d._universalHandler = function (a, c) {
                            var e = this,
                                b = (void 0 === c ? {} : c).extra,
                                d = void 0 === b ? [] : b;
                            return function () {
                                if (!e.paused) {
                                    for (var c = arguments.length, b = Array(c), k = 0; k < c; k++) b[k] = arguments[k];
                                    a.apply(e, b.concat(d))
                                }
                            }
                        };
                        d._createInstance = function () {
                            for (var a = arguments.length, e = Array(a), b = 0; b < a; b++) e[b] = arguments[b];
                            return c()(this.constructor, e)
                        };
                        f()(b, [{
                            key: "window",
                            get: function () {
                                return this._context.window
                            }
                        }, {
                            key: "document",
                            get: function () {
                                return this._context.document
                            }
                        }, {
                            key: "bodyNode",
                            get: function () {
                                return this.__bodyNode || (this.__bodyNode = this.document.body)
                            }
                        }, {
                            key: "fpsDelay",
                            get: function () {
                                return 1E3 / this.fps
                            }
                        }, {
                            key: "doctype",
                            get: function () {
                                var a = this.document.doctype || {},
                                    c = a.publicId,
                                    e = a.systemId;
                                return "\x3c!DOCTYPE " + [a.name || "html", c ? ' PUBLIC "' + c + '"' : "", !c && e ? " SYSTEM" : "", e ? ' "' + e + '"' : ""].join("") + "\x3e"
                            }
                        }, {
                            key: "rootNode",
                            get: function () {
                                return this.__rootNode || (this.__rootNode = this.document.documentElement)
                            }
                        }, {
                            key: "stamp",
                            get: function () {
                                return this._timer.stamp()
                            }
                        }, {
                            key: "eventID",
                            get: function () {
                                return this._eventID ? this._eventID += 1 : this._eventID = 1
                            }
                        }]);
                        return b
                    }(G.a),
                    X = {
                        IS_INCOGNITO: Q.IS_INCOGNITO,
                        IS_MOBILE_DEVICE: Q.IS_MOBILE_DEVICE,
                        DO_NOT_TRACK: Q.DO_NOT_TRACK
                    };
                m.forin(X, function (a) {
                    var c = {
                        value: X[a]
                    };
                    Object.defineProperty(V,
                        a, c);
                    Object.defineProperty(V.prototype, a, c)
                })
            }).call(this, d(10)["default"], d(11)["default"], d(4)["default"], d(5)["default"], d(21).Promise)
        }, function (a, b, d) {
            b = d(20)["default"];
            a.exports = d(67)() ? b : d(68)
        }, function (a, b, d) {
            (function (b) {
                var d = {
                    object: !0,
                    symbol: !0
                };
                a.exports = function () {
                    if ("function" !== typeof b) return !1;
                    var a = b("test symbol");
                    try {
                        String(a)
                    } catch (h) {
                        return !1
                    }
                    return d[typeof b.iterator] && d[typeof b.toPrimitive] && d[typeof b.toStringTag] ? !0 : !1
                }
            }).call(this, d(20)["default"])
        }, function (a, b, d) {
            (function (b) {
                var f =
                        d(69),
                    m = d(83),
                    h = Object.create,
                    n = Object.defineProperties,
                    e = Object.defineProperty,
                    c = Object.prototype,
                    k, v = h(null);
                if ("function" === typeof b) {
                    var l = b;
                    try {
                        String(l());
                        var p = !0
                    } catch (K) {}
                }
                var x = function () {
                    var a = h(null);
                    return function (b) {
                        for (var d = 0, k, h; a[b + (d || "")];) ++d;
                        b += d || "";
                        a[b] = !0;
                        k = "@@" + b;
                        e(c, k, f.gs(null, function (a) {
                            h || (h = !0, e(this, k, f(a)), h = !1)
                        }));
                        return k
                    }
                }();
                var q = function (a) {
                    if (this instanceof q) throw new TypeError("Symbol is not a constructor");
                    return k(a)
                };
                a.exports = k = function ba(a) {
                    if (this instanceof ba) throw new TypeError("Symbol is not a constructor");
                    if (p) return l(a);
                    var c = h(q.prototype);
                    a = a === y ? "" : String(a);
                    return n(c, {
                        __description__: f("", a),
                        __name__: f("", x(a))
                    })
                };
                n(k, {
                    "for": f(function (a) {
                        return v[a] ? v[a] : v[a] = k(String(a))
                    }),
                    keyFor: f(function (a) {
                        var c;
                        m(a);
                        for (c in v)
                            if (v[c] === a) return c
                    }),
                    hasInstance: f("", l && l.hasInstance || k("hasInstance")),
                    isConcatSpreadable: f("", l && l.isConcatSpreadable || k("isConcatSpreadable")),
                    iterator: f("", l && l.iterator || k("iterator")),
                    match: f("", l && l.match || k("match")),
                    replace: f("", l && l.replace || k("replace")),
                    search: f("", l && l.search || k("search")),
                    species: f("", l && l.species || k("species")),
                    split: f("", l && l.split || k("split")),
                    toPrimitive: f("", l && l.toPrimitive || k("toPrimitive")),
                    toStringTag: f("", l && l.toStringTag || k("toStringTag")),
                    unscopables: f("", l && l.unscopables || k("unscopables"))
                });
                n(q.prototype, {
                    constructor: f(k),
                    toString: f("", function () {
                        return this.__name__
                    })
                });
                n(k.prototype, {
                    toString: f(function () {
                        return "Symbol (" + m(this).__description__ + ")"
                    }),
                    valueOf: f(function () {
                        return m(this)
                    })
                });
                e(k.prototype, k.toPrimitive, f("", function () {
                    var a = m(this);
                    return "symbol" === typeof a ? a : a.toString()
                }));
                e(k.prototype, k.toStringTag, f("c", "Symbol"));
                e(q.prototype, k.toStringTag, f("c", k.prototype[k.toStringTag]));
                e(q.prototype, k.toPrimitive, f("c", k.prototype[k.toPrimitive]))
            }).call(this, d(20)["default"])
        }, function (a, b, d) {
            var f = d(70),
                g = d(78),
                m = d(79),
                h = d(80);
            (a.exports = function (a, e) {
                var c;
                if (2 > arguments.length || "string" !== typeof a) {
                    var b = e;
                    e = a;
                    a = null
                } else b = arguments[2];
                if (null == a) {
                    var d = c = !0;
                    var n = !1
                } else d =
                    h.call(a, "c"), n = h.call(a, "e"), c = h.call(a, "w");
                d = {
                    value: e,
                    configurable: d,
                    enumerable: n,
                    writable: c
                };
                return b ? f(g(b), d) : d
            }).gs = function (a, e, c, b) {
                "string" !== typeof a && (b = c, c = e, e = a, a = null);
                null == e ? e = y : m(e) ? null == c ? c = y : m(c) || (b = c, c = y) : (b = e, e = c = y);
                if (null == a) {
                    var d = !0;
                    a = !1
                } else d = h.call(a, "c"), a = h.call(a, "e");
                e = {
                    get: e,
                    set: c,
                    configurable: d,
                    enumerable: a
                };
                return b ? f(g(b), e) : e
            }
        }, function (a, b, d) {
            a.exports = d(71)() ? Object.assign : d(72)
        }, function (a, b, d) {
            a.exports = function () {
                var a = Object.assign;
                if ("function" !== typeof a) return !1;
                var b = {
                    foo: "raz"
                };
                a(b, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                });
                return "razdwatrzy" === b.foo + b.bar + b.trzy
            }
        }, function (a, b, d) {
            var f = d(73),
                g = d(77),
                m = Math.max;
            a.exports = function (a, b) {
                var e, c, d = m(arguments.length, 2);
                a = Object(g(a));
                var h = function (c) {
                    try {
                        a[c] = b[c]
                    } catch (M) {
                        e || (e = M)
                    }
                };
                for (c = 1; c < d; ++c) b = arguments[c], f(b).forEach(h);
                if (e !== y) throw e;
                return a
            }
        }, function (a, b, d) {
            a.exports = d(74)() ? Object.keys : d(75)
        }, function (a, b, d) {
            a.exports = function () {
                try {
                    return Object.keys("primitive"), !0
                } catch (f) {
                    return !1
                }
            }
        }, function (a, b, d) {
            var f =
                    d(30),
                g = Object.keys;
            a.exports = function (a) {
                return g(f(a) ? Object(a) : a)
            }
        }, function (a, b, d) {
            a.exports = function () {}
        }, function (a, b, d) {
            var f = d(30);
            a.exports = function (a) {
                if (!f(a)) throw new TypeError("Cannot use null or undefined");
                return a
            }
        }, function (a, b, d) {
            var f = d(30),
                g = Array.prototype.forEach,
                m = Object.create;
            a.exports = function (a) {
                var b = m(null);
                g.call(arguments, function (a) {
                    if (f(a)) {
                        a = Object(a);
                        for (var c in a) b[c] = a[c]
                    }
                });
                return b
            }
        }, function (a, b, d) {
            a.exports = function (a) {
                return "function" === typeof a
            }
        }, function (a,
                     b, d) {
            a.exports = d(81)() ? String.prototype.contains : d(82)
        }, function (a, b, d) {
            a.exports = function () {
                return "function" !== typeof "razdwatrzy".contains ? !1 : !0 === "razdwatrzy".contains("dwa") && !1 === "razdwatrzy".contains("foo")
            }
        }, function (a, b, d) {
            var f = String.prototype.indexOf;
            a.exports = function (a, b) {
                return -1 < f.call(this, a, b)
            }
        }, function (a, b, d) {
            var f = d(84);
            a.exports = function (a) {
                if (!f(a)) throw new TypeError(a + " is not a symbol");
                return a
            }
        }, function (a, b, d) {
            a.exports = function (a) {
                return a ? "symbol" === typeof a ? !0 : a.constructor &&
                "Symbol" === a.constructor.name ? "Symbol" === a[a.constructor.toStringTag] : !1 : !1
            }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "MapUtils", function () {
                return f
            });
            var f = {
                setIfNotExists: function (a, b, d) {
                    !1 === a.has(b) && a.set(b, this.invoke(d))
                },
                getOrSet: function (a, b, d) {
                    if (a.has(b)) return a.get(b);
                    d = this.invoke(d);
                    a.set(b, d);
                    return d
                },
                getAndUpdate: function (a, b, d) {
                    var f = d = this.invoke(d);
                    a.has(b) && (f = a.get(b));
                    a.set(b, d);
                    return f
                }
            }
        }, function (a, b, d) {
            d.r(b);
            d.d(b, "TimeUtils", function () {
                return g
            });
            a = d(38);
            var f = d(22),
                g = {
                    now: function () {
                        return (new Date).getTime()
                    },
                    formatTime: function (a, b) {
                        void 0 === b && (b = !0);
                        a = Number(a);
                        return [Math.floor(a / 3600), Math.floor(a / 60 % 60), Math.floor(a % 60)].filter(function (a, e) {
                            return !(0 === a && 0 === e)
                        }).map(function (a, e) {
                            return f.StringUtils.pad(a, 0 !== e || b ? 2 : 0, "0")
                        })
                    },
                    formattedTime: function (a, b, d) {
                        void 0 === b && (b = ["sec", "min", "hours"]);
                        void 0 === d && (d = !0);
                        var e = g.formatTime(a, d).reverse();
                        return b.reduce(function (a, b, d) {
                            e[d] && parseInt(e[d], 10) && a.push(parseInt(e[d], 10) + " " + b);
                            return a
                        }, []).reverse().join(" ")
                    },
                    timer: a.a
                }
        }, function (a, b,
                     d) {
            (function (b) {
                (function (b, d) {
                    a.exports = d()
                })(this, function () {
                    function a(a) {
                        return "function" === typeof a
                    }

                    function d() {
                        return function () {
                            return b.nextTick(k)
                        }
                    }

                    function f() {
                        return "undefined" !== typeof U ? function () {
                            U(k)
                        } : c()
                    }

                    function n() {
                        var a = 0,
                            c = new W(k),
                            e = q.createTextNode("");
                        c.observe(e, {
                            characterData: !0
                        });
                        return function () {
                            e.data = a = ++a % 2
                        }
                    }

                    function e() {
                        var a = new MessageChannel;
                        a.port1.onmessage = k;
                        return function () {
                            return a.port2.postMessage(0)
                        }
                    }

                    function c() {
                        return function () {
                            return E(k, 1)
                        }
                    }

                    function k() {
                        for (var a =
                            0; a < O; a += 2)(0, ha[a])(ha[a + 1]), ha[a] = y, ha[a + 1] = y;
                        O = 0
                    }

                    function v() {
                        try {
                            var a = Function("return this")().require("vertx");
                            U = a.runOnLoop || a.runOnContext;
                            return f()
                        } catch (ua) {
                            return c()
                        }
                    }

                    function l(a, c) {
                        var e = this,
                            b = new this.constructor(x);
                        b[N] === y && I(b);
                        var d = e._state;
                        if (d) {
                            var k = arguments[d - 1];
                            Q(function () {
                                return H(d, b, k, e._result)
                            })
                        } else D(e, b, a, c);
                        return b
                    }

                    function M(a) {
                        if (a && "object" === typeof a && a.constructor === this) return a;
                        var c = new this(x);
                        r(c, a);
                        return c
                    }

                    function x() {}

                    function F(a) {
                        try {
                            return a.then
                        } catch (ua) {
                            return X.error =
                                ua, X
                        }
                    }

                    function K(a, c, e, b) {
                        try {
                            a.call(c, e, b)
                        } catch (Z) {
                            return Z
                        }
                    }

                    function z(a, c, e) {
                        Q(function (a) {
                            var b = !1,
                                d = K(e, c, function (e) {
                                    b || (b = !0, c !== e ? r(a, e) : u(a, e))
                                }, function (c) {
                                    b || (b = !0, C(a, c))
                                }, "Settle: " + (a._label || " unknown promise"));
                            !b && d && (b = !0, C(a, d))
                        }, a)
                    }

                    function ba(a, c) {
                        c._state === ca ? u(a, c._result) : c._state === V ? C(a, c._result) : D(c, y, function (c) {
                            return r(a, c)
                        }, function (c) {
                            return C(a, c)
                        })
                    }

                    function w(c, e, b) {
                        e.constructor === c.constructor && b === l && e.constructor.resolve === M ? ba(c, e) : b === X ? (C(c, X.error), X.error =
                            null) : b === y ? u(c, e) : a(b) ? z(c, e, b) : u(c, e)
                    }

                    function r(a, c) {
                        if (a === c) C(a, new TypeError("You cannot resolve a promise with itself"));
                        else {
                            var e = typeof c;
                            null === c || "object" !== e && "function" !== e ? u(a, c) : w(a, c, F(c))
                        }
                    }

                    function t(a) {
                        a._onerror && a._onerror(a._result);
                        B(a)
                    }

                    function u(a, c) {
                        a._state === aa && (a._result = c, a._state = ca, 0 !== a._subscribers.length && Q(B, a))
                    }

                    function C(a, c) {
                        a._state === aa && (a._state = V, a._result = c, Q(t, a))
                    }

                    function D(a, c, e, b) {
                        var d = a._subscribers,
                            k = d.length;
                        a._onerror = null;
                        d[k] = c;
                        d[k + ca] = e;
                        d[k +
                        V] = b;
                        0 === k && a._state && Q(B, a)
                    }

                    function B(a) {
                        var c = a._subscribers,
                            e = a._state;
                        if (0 !== c.length) {
                            for (var b, d, k = a._result, f = 0; f < c.length; f += 3) b = c[f], d = c[f + e], b ? H(e, b, d, k) : d(k);
                            a._subscribers.length = 0
                        }
                    }

                    function H(c, e, b, d) {
                        var k = a(b),
                            f = void 0,
                            h = void 0,
                            g = void 0,
                            n = void 0;
                        if (k) {
                            try {
                                f = b(d)
                            } catch (wa) {
                                X.error = wa, f = X
                            }
                            f === X ? (n = !0, h = f.error, f.error = null) : g = !0;
                            if (e === f) {
                                C(e, new TypeError("A promises callback cannot return that same promise."));
                                return
                            }
                        } else f = d, g = !0;
                        e._state === aa && (k && g ? r(e, f) : n ? C(e, h) : c === ca ? u(e, f) :
                            c === V && C(e, f))
                    }

                    function G(a, c) {
                        try {
                            c(function (c) {
                                r(a, c)
                            }, function (c) {
                                C(a, c)
                            })
                        } catch (la) {
                            C(a, la)
                        }
                    }

                    function I(a) {
                        a[N] = ea++;
                        a._state = y;
                        a._result = y;
                        a._subscribers = []
                    }
                    var J = void 0,
                        L = J = Array.isArray ? Array.isArray : function (a) {
                            return "[object Array]" === Object.prototype.toString.call(a)
                        },
                        O = 0,
                        U = void 0,
                        P = void 0,
                        Q = function (a, c) {
                            ha[O] = a;
                            ha[O + 1] = c;
                            O += 2;
                            2 === O && (P ? P(k) : ia())
                        },
                        T = (J = "undefined" !== typeof p ? p : y) || {},
                        W = T.MutationObserver || T.WebKitMutationObserver;
                    T = "undefined" === typeof self && "undefined" !== typeof b && "[object process]" === {}.toString.call(b);
                    var fa = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel,
                        ha = Array(1E3),
                        ia = void 0;
                    ia = T ? d() : W ? n() : fa ? e() : J === y ? v() : c();
                    var N = Math.random().toString(36).substring(2),
                        aa = void 0,
                        ca = 1,
                        V = 2,
                        X = {
                            error: null
                        },
                        ea = 0,
                        da = function () {
                            function a(a, c) {
                                this._instanceConstructor = a;
                                this.promise = new a(x);
                                this.promise[N] || I(this.promise);
                                L(c) ? (this._remaining = this.length = c.length, this._result = Array(this.length), 0 === this.length ? u(this.promise,
                                    this._result) : (this.length = this.length || 0, this._enumerate(c), 0 === this._remaining && u(this.promise, this._result))) : C(this.promise, Error("Array Methods must be provided an Array"))
                            }
                            a.prototype._enumerate = function (a) {
                                for (var c = 0; this._state === aa && c < a.length; c++) this._eachEntry(a[c], c)
                            };
                            a.prototype._eachEntry = function (a, c) {
                                var e = this._instanceConstructor,
                                    b = e.resolve;
                                b === M ? (b = F(a), b === l && a._state !== aa ? this._settledAt(a._state, c, a._result) : "function" !== typeof b ? (this._remaining--, this._result[c] = a) : e ===
                                S ? (e = new e(x), w(e, a, b), this._willSettleAt(e, c)) : this._willSettleAt(new e(function (c) {
                                    return c(a)
                                }), c)) : this._willSettleAt(b(a), c)
                            };
                            a.prototype._settledAt = function (a, c, e) {
                                var b = this.promise;
                                b._state === aa && (this._remaining--, a === V ? C(b, e) : this._result[c] = e);
                                0 === this._remaining && u(b, this._result)
                            };
                            a.prototype._willSettleAt = function (a, c) {
                                var e = this;
                                D(a, y, function (a) {
                                    return e._settledAt(ca, c, a)
                                }, function (a) {
                                    return e._settledAt(V, c, a)
                                })
                            };
                            return a
                        }(),
                        S = function () {
                            function c(a) {
                                this[N] = ea++;
                                this._result = this._state =
                                    y;
                                this._subscribers = [];
                                if (x !== a) {
                                    if ("function" !== typeof a) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                                    if (this instanceof c) G(this, a);
                                    else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                                }
                            }
                            c.prototype["catch"] = function (a) {
                                return this.then(null, a)
                            };
                            c.prototype["finally"] = function (c) {
                                var e = this.constructor;
                                return a(c) ? this.then(function (a) {
                                        return e.resolve(c()).then(function () {
                                            return a
                                        })
                                    },
                                    function (a) {
                                        return e.resolve(c()).then(function () {
                                            throw a;
                                        })
                                    }) : this.then(c, c)
                            };
                            return c
                        }();
                    S.prototype.then = l;
                    S.all = function (a) {
                        return (new da(this, a)).promise
                    };
                    S.race = function (a) {
                        var c = this;
                        return L(a) ? new c(function (e, b) {
                            for (var d = a.length, k = 0; k < d; k++) c.resolve(a[k]).then(e, b)
                        }) : new c(function (a, c) {
                            return c(new TypeError("You must pass an array to race."))
                        })
                    };
                    S.resolve = M;
                    S.reject = function (a) {
                        var c = new this(x);
                        C(c, a);
                        return c
                    };
                    S._setScheduler = function (a) {
                        P = a
                    };
                    S._setAsap = function (a) {
                        Q = a
                    };
                    S._asap = Q;
                    S.polyfill = function () {
                        var a = void 0;
                        if ("undefined" !== typeof global) a = global;
                        else if ("undefined" !== typeof self) a = self;
                        else try {
                                a = Function("return this")()
                            } catch (R) {
                                throw Error("polyfill failed because global object is unavailable in this environment");
                            }
                        var c = a.Promise;
                        if (c) {
                            var e = null;
                            try {
                                e = Object.prototype.toString.call(c.resolve())
                            } catch (R) {}
                            if ("[object Promise]" === e && !c.cast) return
                        }
                        a.Promise = S
                    };
                    return S.Promise = S
                })
            }).call(this, d(37))
        }, function (a, b, d) {
            d.r(b);
            (function (a) {
                d.d(b, "MathUtils", function () {
                    return f
                });
                var f = {
                    toChunks: function (b, d) {
                        var f = b.slice(0),
                            e = f.length,
                            c = e === d ? Math.round : Math.floor,
                            k = 0;
                        return f.reduce(function (b, h, g) {
                            var n = c(d / (e / g));
                            0 < g && 1 < n - k && a.warn("Invalid index " + n + ": " + c(d / (e / (g - 1))) + " \x3c\x3d\x3e " + c(d / (e / g)), [f.length, g, d], [f.length / g], [d / (f.length / g)]);
                            k = n;
                            b[n] = b[n] || [];
                            b[n].push(h);
                            return b
                        }, [])
                    },
                    split: function (a, b) {
                        return a.reduce(function (a, e, c) {
                            c = Math.floor(c / b);
                            a[c] = (a[c] || []).concat(e);
                            return a
                        }, [])
                    },
                    avg: function (a) {
                        return a.length ? a.reduce(function (a, b) {
                            return a + b
                        }) / a.length :
                            NaN
                    },
                    max: function (a) {
                        return a.length ? a.reduce(function (a, b) {
                            return a > b ? a : b
                        }) : NaN
                    },
                    random: function (a, b) {
                        void 0 === a && (a = 0);
                        return Math.round(Math.random() * b + a)
                    }
                }
            }).call(this, d(10)["default"])
        }, function (a, b) {
            function d(b, g) {
                a.exports = d = Object.setPrototypeOf || function (a, b) {
                    a.__proto__ = b;
                    return a
                };
                return d(b, g)
            }
            a.exports = d
        }])["default"]
    } catch (a) {
        Ja = {
            error: a,
            scope: "recoder"
        }
    }
    var l = {
            mixin: function (a) {
                var b, d;
                for (b = 1; b < arguments.length; b++)
                    if (arguments[b]) {
                        for (d in arguments[b]) arguments[b].hasOwnProperty(d) &&
                        (a[d] = arguments[b][d]);
                        arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
                    }
                return a
            }
        },
        I = function (a) {
            a = a || {};
            l.mixin(this, a);
            this._initComponent()
        };
    I.prototype._initComponent = function () {};
    I.inherit = function (a) {
        a = a || {};
        var b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function () {
            b.apply(this, arguments)
        });
        var d = function () {};
        d.prototype = b.prototype;
        a.constructor.prototype = new d;
        l.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor =
            a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = I.inherit;
        return a.constructor
    };
    l.forEachKey = function (a, b, d) {
        for (var f in a) a.hasOwnProperty(f) && b.call(d, f, a[f], a)
    };
    l.isEqual = function (a, b) {
        var d = !0;
        l.forEachKey(a, function (a, g) {
            b.hasOwnProperty(a) && b[a] === g || (d = !1)
        });
        if (!d) return d;
        l.forEachKey(b, function (b, g) {
            a.hasOwnProperty(b) && a[b] === g || (d = !1)
        });
        return d
    };
    l.getNativeFunction = function (a, b) {
        var d;
        b = b || p;
        return (d = b.constructor && b.constructor.prototype && b.constructor.prototype[a] ||
            b[a]) && "apply" in d ? function () {
            return d.apply(b, arguments)
        } : function () {}
    };
    l.setTimeout = function (a, b, d) {
        return l.getNativeFunction("setTimeout")(B(a, d || "setTimeout"), b)
    };
    var w = I.inherit({
        _initComponent: function () {
            w.superclass._initComponent.apply(this, arguments);
            this._listeners = []
        },
        on: function (a, b, d, f, g) {
            g = w._getOpts(g);
            b = b.split(",");
            var m = b.length,
                h = this._listeners,
                n;
            for (n = 0; n < m; n++) {
                var e = b[n];
                var c = B(function (a) {
                    d.call(f || this, a || p.event)
                }, "on" + (e || "") + (g.name || ""));
                h[h.length] = [a, e, d, f, g, c];
                a.addEventListener ?
                    a.addEventListener(e, c, w._prepOpts(g)) : a.attachEvent && a.attachEvent("on" + e, c)
            }
        },
        un: function (a, b, d, f, g) {
            g = w._getOpts(g);
            var m = this._listeners,
                h = m.length,
                n;
            for (n = 0; n < h; n++) {
                var e = m[n];
                if (e[0] == a && e[1] == b && e[2] == d && e[3] == f && l.isEqual(e[4], g)) {
                    m.splice(n, 1);
                    this._removeListener(a, b, e[5], g);
                    break
                }
            }
        },
        unAll: function () {
            var a = this._listeners,
                b = a.length,
                d;
            for (d = 0; d < b; d++) {
                var f = a[d];
                this._removeListener(f[0], f[1], f[5], f[4])
            }
            a.length = 0
        },
        _removeListener: function (a, b, d, f) {
            a.removeEventListener ? a.removeEventListener(b,
                d, w._prepOpts(f)) : a.detachEvent && a.detachEvent("on" + b, d)
        }
    });
    w.supportsPassive = function () {
        if (w._supportsPassive !== y) return w._supportsPassive;
        w._supportsPassive = !1;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function () {
                    w._supportsPassive = !0
                }
            });
            p.addEventListener("test", null, a)
        } catch (b) {}
        return w._supportsPassive
    };
    w._getOpts = function (a) {
        return l.mixin({
            capture: !0,
            passive: !0
        }, a || {})
    };
    w._prepOpts = function (a) {
        return w.supportsPassive() ? a : !!a.capture
    };
    w.on = function () {
        w._instance || (w._instance = new w);
        w._instance.on.apply(w._instance, arguments)
    };
    w.un = function () {
        w._instance && w._instance.un.apply(w._instance, arguments)
    };
    var u = {
        UNLOAD_MS: 0,
        isPerfomance: p.performance && p.performance.timing && p.performance.timing.navigationStart && p.performance.now,
        getMs: function () {
            return 0 < this.UNLOAD_MS ? this.UNLOAD_MS : this.isPerfomance ? Math.round(p.performance.timing.navigationStart + p.performance.now()) : u.oldMs()
        },
        getFormStart: function () {
            return this.isPerfomance ? Math.round(p.performance.now()) : this.getMs() - this.initTime
        }
    };
    u.oldMs = Date.now ? Date.now : function () {
        return (new Date).getTime()
    };
    u.initTime = u.getMs();
    w.on(p, "beforeunload,unload", function () {
        0 === u.UNLOAD_MS && (u.UNLOAD_MS = u.getMs())
    });
    l.pad = function (a) {
        return (10 > a ? "0" : "") + a
    };
    u.getTimestamp = function () {
        var a = new Date;
        a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()];
        var b = "",
            d;
        for (d = 0; d < a.length; d++) b += l.pad(a[d]);
        return b
    };
    u.getTimezone = function () {
        return -(new Date).getTimezoneOffset()
    };
    u.getMinutes = function () {
        return Math.floor(this.getMs() /
            1E3 / 60)
    };
    u.getSeconds = function () {
        return Math.round(this.getMs() / 1E3)
    };
    u.isPerfomance || (u.deltaTime = 0, u.lastNowTime = 0, u.correctTime = 0, u.timeCorrector = function (a) {
        u.correctTime = u.getMs();
        a && u.correctTime < u.lastTime && (u.deltaTime += a - u.correctTime + 20);
        l.setTimeout(function () {
            u.timeCorrector(u.correctTime)
        }, 20, "timeCorrector")
    });
    u.initCorrector = function () {
        u.isPerfomance || u.timeCorrector(0)
    };
    u.nowTime = function () {
        if (this.isPerfomance) return this.getMs();
        var a = this.getMs() + u.deltaTime;
        a < u.lastNowTime && (a +=
            u.lastNowTime + 10);
        return u.lastNowTime = a
    };
    u.nowEventTime = function () {
        return Math.round((u.nowTime() - u.initTime) / 50)
    };
    l.toString = function (a) {
        return Object.prototype.toString.call(a)
    };
    l.isFunction = function (a) {
        return "function" === typeof a
    };
    l.isArray = function (a) {
        return "function" === l.isFunction(Array.isArray) ? Array.isArray(a) : "[object Array]" === l.toString(a)
    };
    l.mergeArrays = function (a) {
        var b, d, f = arguments.length;
        for (b = 1; b < f; b++) {
            var g = arguments[b];
            if (l.isArray(g) || g && "[object Arguments]" === g.toString())
                for (d =
                         0; d < g.length; d++) a[a.length] = g[d]
        }
        return a
    };
    l.defer = function (a, b, d, f, g) {
        return l.setTimeout(function () {
            a.apply(d, f || [])
        }, b, g)
    };
    l.throttle = function (a, b, d, f) {
        var g, m, h;
        return function () {
            m = arguments;
            h = this;
            g || function () {
                g = null;
                m && (a.apply(d || h, m), m = null, g = l.setTimeout(arguments.callee, b, f))
            }()
        }
    };
    var Ba = I.inherit({
            storage: null,
            storageKey: "dataBuffer",
            store: {
                _keys: [],
                _values: [],
                get: function (a) {
                    a = l.arrayIndexOf(this._keys, a);
                    return -1 == a ? null : this._values[a]
                },
                set: function (a, b) {
                    this._keys.push(a);
                    this._values.push(b)
                },
                pop: function (a) {
                    a = l.arrayIndexOf(this._keys, a);
                    if (-1 == a) return null;
                    var b = this._values[a];
                    this._keys.splice(a, 1);
                    this._values.splice(a, 1);
                    return b
                }
            },
            maxBufferSize: 255,
            flushTimeout: 1E4,
            startBufferTime: 0,
            wrappers: [],
            active: !0,
            meta: null,
            onFlush: function () {},
            onFlushCtx: null,
            bufferExpireTime: 864E5,
            _initComponent: function () {
                var a;
                Ba.superclass._initComponent.apply(this, arguments);
                this._data = [];
                this._packetNumber = 0;
                this._flushTID = null;
                this._saveToStorageThrottled = l.throttle(this._saveToStorage, 300, this,
                    "DataBuffer._saveToStorage");
                this.storage && (a = this.storage.get(this.storageKey)) && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +u.getMs() && this.onFlush.call(this.onFlushCtx || this, this.dataFromStorage(a.data), a.meta, a.pnum);
                this.clear()
            },
            setWVType: function (a) {
                this.wvType = a;
                this._sender.version = a
            },
            getFlushSize: function () {
                return this._data.length
            },
            mergeData: function (a, b) {
                l.mergeArrays(a, b)
            },
            append: function (a, b) {
                this.mergeData(this._data, a);
                this._saveToStorageThrottled();
                this.active && ((b || this.getFlushSize() >=
                    this.maxBufferSize || this.getFlushSize() === this.maxChunkSize) && this._flush(b), this._flushTID || (this._flushTID = l.defer(this._flush, this.flushTimeout, this, [b], "DataBuffer._flush")))
            },
            activate: function () {
                this.active || (this.active = !0, this.append([]))
            },
            clear: function () {
                this._data.length = 0;
                this._flushTID = null;
                this.storage && this.storage.remove(this.storageKey)
            },
            _flush: function (a) {
                if (!this.getFlushSize()) return this.clear(), !1;
                this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber,
                    a);
                this._packetNumber++;
                this.clear()
            },
            dataFromStorage: function (a) {
                return a
            },
            dataToStorage: function (a) {
                return a
            },
            _saveToStorage: function () {
                this.storage && this._data.length && this.storage.set(this.storageKey, {
                    data: this.dataToStorage(this._data),
                    meta: this.meta,
                    pnum: this._packetNumber,
                    time: u.getMs()
                })
            }
        }),
        qb = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "),
        D = {
            storage: {},
            init: function () {
                var a = this;
                B(function () {
                        p.Ya = p.Ya || {};
                        p.Ya._metrika = p.Ya._metrika || {};
                        a.storage = p.Ya._metrika
                    },
                    "", !0)();
                return this
            },
            setSafe: function (a, b) {
                var d = this;
                B(function () {
                    d.storage[a] === y && (d.storage[a] = b)
                }, "", !0)();
                return this
            },
            set: function (a, b) {
                B(function () {
                    p.Ya._metrika[a] = b
                }, "", !0)();
                return this
            },
            get: function (a, b) {
                return B(function () {
                    var d = p.Ya._metrika[a];
                    return d === y ? b : d
                }, "", !0)()
            }
        };
    l.async = function (a, b, d) {
        if (p.postMessage) {
            var f = "__ym__promise" + Math.random() + "_" + u.getMs();
            var g = function (d) {
                try {
                    var h = d.data
                } catch (n) {
                    return
                }
                h === f && (d.stopPropagation && d.stopPropagation(), a.call(b), w.un(p, "message",
                    g, null, {
                        passive: !1
                    }))
            };
            w.on(p, "message", g, null, {
                passive: !1,
                name: ".async." + (d || "")
            });
            p.postMessage(f, "*")
        } else l.setTimeout(function () {
            a.call(b)
        }, 0)
    };
    var Nb = I.inherit({
            transports: [],
            globalConfig: D,
            postParams: [],
            isDisabled: function () {
                return this.globalConfig.get("oo")
            },
            send: function (a, b, d, f) {
                var g = [a],
                    m = this,
                    h = d || function () {};
                m.isDisabled() ? h.call(f) : function c(a) {
                    if (a < this.transports.length) try {
                        var e = new this.transports[a]({
                            postParams: this.postParams,
                            queryStringParams: this.queryStringParams
                        });
                        b["browser-info"] =
                            e.logInfo(b["browser-info"]);
                        (function M(d) {
                            d >= g.length ? e.blockNext() || c.call(this, a + 1) : e.request(g[d], b, function (a, c, e) {
                                a ? h.call(f, c, e) : l.async(function () {
                                    M.call(m, d + 1)
                                }, this, "senderCall")
                            }, this)
                        }).call(this, 0)
                    } catch (v) {
                        jb(v, "send by " + (e && e.id)), c.call(this, a + 1)
                    }
                }.call(this, 0)
            }
        }),
        xa = {};
    l.keys = function (a) {
        var b, d = [];
        for (b in a) a.hasOwnProperty(b) && d.push(b);
        return d
    };
    l.map = function (a, b) {
        var d, f = [];
        for (d = 0; d < b.length; d++) f.push(a(b[d], d));
        return f
    };
    xa.stringify = function (a, b) {
        var d = [],
            f = b || {},
            g = {},
            m = l.keys(a).length,
            h, n;
        if (f.lastOrdering !== y)
            for (n = 1; n <= b.lastOrdering.length; n++) g[b.lastOrdering[n - 1]] = m + n;
        if (f.firstOrdering !== y)
            for (n = 0; n < b.firstOrdering.length; n++) g[b.firstOrdering[n]] = n;
        for (h in a)
            if (a.hasOwnProperty(h))
                if (f = a[h], l.isArray(f))
                    for (n = 0; n < f.length; n++) d.push({
                        key: h,
                        value: encodeURIComponent(h) + "\x3d" + encodeURIComponent(String(f[n]))
                    });
                else d.push({
                    key: h,
                    value: encodeURIComponent(h) + "\x3d" + encodeURIComponent(String(f))
                });
        d.sort(function (a, c) {
            var e = g[a.key],
                b = g[c.key];
            "undefined" ===
            typeof e && (e = m);
            "undefined" === typeof b && (b = m);
            return e - b
        });
        return l.map(function (a) {
            return a.value
        }, d).join("\x26")
    };
    l.inArray = function (a, b) {
        var d;
        for (d = 0; d < a.length; d++)
            if (a[d] == b) return !0;
        return !1
    };
    var sa = I.inherit({
            postParams: [],
            index: 0,
            blockNext: function () {
                return !1
            },
            logInfo: function (a) {
                var b;
                if (a) return a = (b = a.match(/^ti:\d:/)) ? a.replace(b[0], "") : a, "ti:" + this.index + ":" + a
            },
            _buildUrl: function (a, b) {
                var d = xa.stringify(b, this.queryStringParams);
                return a + (-1 < a.indexOf("?") ? "\x26" : d ? "?" : "") + d
            },
            _splitParams: function (a) {
                var b = {},
                    d = {};
                l.forEachKey(a, function (a, g) {
                    l.inArray(this.postParams, a) ? d[a] = g : b[a] = g
                }, this);
                return {
                    get: b,
                    post: d
                }
            },
            _parseResp: function (a) {
                return a
            }
        }),
        ya = sa.inherit({
            id: "XHR",
            index: 7,
            method: "POST",
            withCredentials: !0,
            request: function (a, b, d, f) {
                var g = this,
                    m;
                if (/[^a-z0-9.:-]/.test(L.host) && p.opera && "function" === typeof p.opera.version) {
                    var h = p.opera.version();
                    if ("string" === typeof h && "12" === h.split(".")[0]) return d.call(f, !1)
                }
                if (p.XMLHttpRequest) {
                    var n = new XMLHttpRequest;
                    if ("withCredentials" in n) {
                        b = this._splitParams(b);
                        a = this._buildUrl(a, b.get);
                        try {
                            n.open(this.method, a, !0)
                        } catch (e) {
                            return d.call(f, !1)
                        }
                        n.withCredentials = this.withCredentials;
                        this._setHeaders(n);
                        n.send(this._preparePostParams(b));
                        n.onreadystatechange = function () {
                            if (4 === n.readyState) {
                                try {
                                    m = g._parseResp(n.responseText)
                                } catch (e) {
                                    return d.call(f, !1)
                                }
                                d.apply(f, [200 === n.status].concat(m))
                            }
                        };
                        return
                    }
                }
                d.call(f, !1)
            },
            setMethod: function (a) {
                this.method = a
            },
            _preparePostParams: function (a) {
                return xa.stringify(a.post)
            },
            _setHeaders: function (a) {
                a.setRequestHeader("Content-Type",
                    "application/x-www-form-urlencoded")
            }
        }),
        t = {};
    t.isAndroidWebView = B(function () {
        var a = navigator.userAgent || "";
        return a.match(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]/) || a.match(/Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*/) || a.match(/; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
    }, "isAndroidWebView");
    var Ob = sa.inherit({
        id: "beacon",
        index: 1,
        request: function (a, b, d, f) {
            "function" === typeof navigator.sendBeacon && !t.isAndroidWebView() && navigator.onLine ? (b = this._splitParams(b),
                b.get["force-urlencoded"] = 1, d.call(f, navigator.sendBeacon(this._buildUrl(a, b.get), xa.stringify(b.post)))) : d.call(f, !1)
        }
    });
    l.random = function (a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    var Ca = sa.inherit({
            id: "form",
            index: 2,
            enctype: "application/x-www-form-urlencoded",
            htmlfileOnly: !1,
            _initComponent: function () {
                Ca.superclass._initComponent.apply(this, arguments);
                "_htmlfile" in Ca.prototype || (Ca.prototype._htmlfile = this._createHtmlfile());
                this._doc = this._htmlfile || (this.htmlfileOnly ? null : q)
            },
            request: function (a, b, d, f) {
                var g = this._doc;
                if (!g) return d.call(f, !1);
                b = this._splitParams(b);
                var m = "ifr" + l.random();
                var h = g.createElement("div");
                h.style.position = "absolute";
                h.style.left = "-99999px";
                h.style.top = "-99999px";
                var n = ['\x3ciframe name\x3d"', m, '"\x3e\x3c/iframe\x3e', '\x3cform action\x3d"', this._buildUrl(a, b.get), '" method\x3d"post" target\x3d"', m, '" enctype\x3d"', this.enctype, '"\x3e'];
                l.forEachKey(b.post, function (a) {
                    l.mergeArrays(n, ['\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"',
                        ' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"', a, '"/\x3e'
                    ])
                });
                l.mergeArrays(n, ["\x3c/form\x3e"]);
                h.innerHTML = n.join("");
                g.body.appendChild(h);
                var e = h.getElementsByTagName("form")[0];
                l.forEachKey(b.post, function (a, b) {
                    e[a].value = b
                });
                e.submit();
                l.setTimeout(function () {
                    g.body.removeChild(h)
                }, 1E4, "TransportForm.request.2");
                return d.call(f, !0, "tf.request")
            },
            _createHtmlfile: function () {
                try {
                    if (p.ActiveXObject) {
                        var a = new ActiveXObject("htmlfile");
                        a.open();
                        a.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                        a.close();
                        return a
                    }
                } catch (b) {}
                return null
            }
        }),
        Pb = Ca.inherit({
            id: "htmlfile",
            index: 3,
            htmlfileOnly: !0
        }),
        za = sa.inherit({
            id: "img",
            index: 4,
            request: function (a, b, d, f) {
                a = this._buildUrl(a, b);
                var g = !1;
                b = q.createElement("img");
                d = d || function () {};
                b.onload = B(function () {
                    g || (d.call(f, !0), g = !0)
                }, "TransportImage.request");
                b.onerror = B(function () {
                    g || (d.call(f, !1), g = !0)
                }, "TransportImage.request");
                b.src = a;
                this.timeout && l.setTimeout(function () {
                    g || (d.call(f, !1), g = !0)
                }, this.timeout, "ti.request")
            }
        }),
        fa = {
            stringify: function (a) {
                try {
                    var b =
                        JSON.stringify(a)
                } catch (d) {}
                return l.inArray(["{}", y], b) ? "null" : b
            }
        };
    l.toJSON = function (a) {
        var b;
        if (a === y) return "";
        if (null === a) return "null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a) ? a.toString() : "null";
            case String:
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
            case Array:
                var d = [];
                var f = 0;
                for (b = a.length; f < b; f++) d[d.length] = l.toJSON(a[f]);
                return "[" + d.join(",") + "]";
            case Object:
                d = [];
                for (f in a) a.hasOwnProperty(f) &&
                a[f] !== y && (d[d.length] = l.toJSON(f) + ":" + l.toJSON(a[f]));
                return "{" + d.join(",") + "}";
            default:
                return fa.stringify(a)
        }
    };
    var ia = I.inherit({
        counterId: "",
        _initComponent: function () {
            ia.superclass._initComponent.apply(this, arguments);
            this._ls = null;
            try {
                this._ls = p.localStorage
            } catch (a) {}
        },
        set: function (a, b) {
            if (this.isEnabled()) try {
                !b || b && l.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), l.toJSON(b))
            } catch (d) {}
        },
        get: function (a) {
            if (this.isEnabled()) try {
                return JSON.parse(this._ls.getItem(this._getLsKey(a)))
            } catch (b) {}
            return null
        },
        remove: function (a) {
            if (this.isEnabled()) try {
                this._ls.removeItem(this._getLsKey(a))
            } catch (b) {}
        },
        isEnabled: function () {
            return this._ls && p.JSON && "object" == typeof this._ls && "object" == typeof p.JSON
        },
        getStorageId: function () {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * u.getMs()), this.set("lsid", a));
            return a
        },
        clearStorageId: function () {
            this.remove("lsid")
        },
        _getLsKey: function (a) {
            return "_ym" + this.counterId + "_" + a
        }
    });
    l.fnv32a = function (a) {
        var b = 2166136261,
            d;
        var f = 0;
        for (d = a.length; f < d; ++f) b ^= a.charCodeAt(f),
            b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    };
    l.getTld = function () {
        if (!this._tld) {
            var a = L.hostname.split(".");
            this._tld = a[a.length - 1]
        }
        return this._tld
    };
    var W = {
            abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            tail: "+/\x3d",
            tailSafe: "*-_"
        },
        J = I.inherit({
            counterId: "",
            onlyCurrentDomain: !1,
            skipPrefix: !1,
            _initComponent: function () {
                var a;
                J.superclass._initComponent.apply(this, arguments);
                this._domain = null;
                if (!this.onlyCurrentDomain) {
                    var b = p.location.host.split(".");
                    for (a = 2;;)
                        if (a <=
                            b.length) {
                            if (this._domain = "." + b.slice(-a).join("."), a++, this.isEnabled()) break
                        } else {
                            this._domain = null;
                            break
                        }
                }
            },
            create: function (a, b, d) {
                a = [this._prepareName(a) + "\x3d" + encodeURIComponent(b)];
                d && (b = new Date, b.setTime(b.getTime() + 6E4 * d), a.push("expires\x3d" + b.toGMTString()));
                this._domain && a.push("domain\x3d" + this._domain);
                a.push("path\x3d/");
                try {
                    q.cookie = a.join(";")
                } catch (f) {}
            },
            read: function (a) {
                try {
                    var b = q.cookie
                } catch (d) {}
                return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "\x3d([^;]*)")) ?
                    decodeURIComponent(RegExp.$1) : null
            },
            erase: function (a) {
                this.create(a, "", -1)
            },
            isEnabled: function () {
                this.create("metrika_enabled", "1", 60);
                var a = !!this.read("metrika_enabled");
                this.erase("metrika_enabled");
                return a
            },
            _prepareName: function (a) {
                return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
            }
        });
    J.get = function (a) {
        return (new J({
            onlyCurrentDomain: !0
        })).read(a)
    };
    J.set = function (a, b, d) {
        return (new J({
            onlyCurrentDomain: !0
        })).create(a, b, d)
    };
    J.isEnabled = function () {
        return (new J({
            onlyCurrentDomain: !0
        })).isEnabled()
    };
    var r = {
        removeNode: function (a) {
            var b = a && a.parentNode;
            b && b.removeChild(a)
        }
    };
    t.isSafariWebView = B(function () {
        var a = navigator.userAgent || "";
        return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && (!a.match(/Safari/) && a.match(/Mobile/) || a.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== a.indexOf("FB_IAB") || -1 !== a.indexOf("FBAV") || -1 !== a.indexOf("OKApp") || -1 !== a.indexOf("GSA/"))
    }, "isSafariWebView");
    t.isSafari = function () {
        try {
            return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") &&
                navigator.userAgent && !navigator.userAgent.match("CriOS")
        } catch (a) {}
        return !1
    };
    t.getMacOSVersion = B(function () {
        var a = navigator.userAgent.match(/Mac OS X ([0-9]+)_([0-9]+)_([0-9]+)/);
        return a ? [+a[1], +a[2], +a[2]] : [0, 0, 0]
    }, "", !0);
    t.getPlatform = B(function () {
        return "" + navigator.platform
    }, "", !0);
    t.isIOS = B(function () {
        var a = t.getPlatform() || "";
        return "iPhone" === a || "iPad" === a
    }, "", !0);
    t.isFF = B(function () {
        return p && p.document && p.document.documentElement && p.document.documentElement.style ? "MozAppearance" in p.document.documentElement.style &&
            "undefined" !== typeof p.InstallTrigger : !1
    }, "isFF");
    var Ka = {
            _storage: new ia,
            _cookie: new J,
            key: "zzlc",
            updateInfo: function (a) {
                l.forEachKey(this.getInfoFlags(), function (b, d) {
                    var f = d.call(this);
                    f && (a[b] = f)
                }, this);
                return a
            },
            getZZ: function () {
                return this._storage.get(this.key) ? this._storage.get(this.key) : this.zz
            },
            getPP: function () {
                return this.globalConfig && this.globalConfig.get("pp") ? this.globalConfig.get("pp") : this.pp
            },
            getPU: function () {
                return this.globalConfig && this.globalConfig.get("pu") ? this.globalConfig.get("pu") :
                    this.pu
            },
            getFip: function () {
                if (this._storage.get(this.fipKey)) return this._storage.get(this.fipKey)
            },
            getInfoFlags: function () {
                return {
                    zz: this.getZZ,
                    pp: this.getPP,
                    pu: this.getPU,
                    fip: this.getFip
                }
            },
            checkVersion: function () {
                var a = t.getMacOSVersion();
                return !((t.isIOS() || 10 <= a[0] && 13 <= a[2]) && t.isSafari()) || t.isSafariWebView()
            },
            noop: function () {},
            genPu: function (a) {
                var b = l.fnv32a(p.location.host) + this._cookie.read("uid");
                this.pu = b;
                a.set("pu", b);
                return b
            },
            initPU: function (a, b) {
                var d = this;
                b.get("pu") !== y || this.checkVersion() ||
                (this.globalConfig = b, b.setSafe("pu", null), a.addHandler("gpu-get", function () {
                    return {
                        type: "gpu-get",
                        pu: b.get("pu")
                    }
                }, this), p.opener ? (l.setTimeout(function () {
                    d.genPu(b)
                }, 200, "pu"), a.sendToIframe(p.opener, {
                    type: "gpu-get"
                }, this.handleGpu, this)) : this.genPu(b))
            },
            handleGpu: function (a) {
                if (a = a.pu) this.pu = a, this.globalConfig.set("pu", a)
            },
            onicecandidate: B(function (a) {
                var b;
                try {
                    var d = (b = a.localDescription.sdp) && b.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                } catch (f) {
                    a.onicecandidate = this.noop;
                    "closed" !== a.iceConnectionState &&
                    a.close();
                    return
                }
                d && 0 < d.length && (this.pp = l.fnv32a(d[1]), this.globalConfig.set("pp", this.pp));
                a.onicecandidate = this.noop;
                a.close()
            }, "wrt"),
            onOffer: function (a, b) {
                l.isFunction(a.setLocalDescription) && a.setLocalDescription(b, this.noop, this.noop)
            },
            initPP: B(function (a) {
                var b = p.RTCPeerConnection || p.mozRTCPeerConnection || p.webkitRTCPeerConnection;
                this.globalConfig = a;
                if (p.navigator.onLine && b && a.get("pp") == y && (this.globalConfig.setSafe("pp", null), b && b.prototype && b.prototype.constructor && b.prototype.constructor.name)) {
                    try {
                        var d =
                            new b({
                                iceServers: []
                            });
                        d.createDataChannel("y.metrika")
                    } catch (g) {
                        return
                    }
                    if (l.isFunction(d.createOffer) && !d.createOffer.length) {
                        try {
                            var f = d.createOffer()
                        } catch (g) {
                            return
                        }
                        l.isFunction(f.then) && f.then(l.bind(this.onOffer, this, d));
                        d.onicecandidate = l.bind(this.onicecandidate, this, d)
                    }
                }
            }, "rcinit"),
            initZZ: function () {
                var a = this;
                if (!this.getZZ() && !this.checkVersion()) {
                    var b = l.getNativeFunction("createElement", q)("iframe");
                    b.style.display = "none";
                    b.style.width = "1px";
                    b.style.height = "1px";
                    b.style.visibility = "hidden";
                    b.src = "https://mc.yandex.ru" + W.decode("L21ldHJpa2EvenpsYy5odG1s");
                    p.document.documentElement.appendChild(b);
                    w.on(p, "message", this.onMessage, this, {
                        passive: !1
                    });
                    this.frame = b;
                    this.timeout = l.setTimeout(function () {
                        w.un(p, "message", a.onMessage, a, {
                            passive: !1
                        });
                        r.removeNode(a.frame);
                        a.zz = "na"
                    }, 3E3, "cd.initZZ")
                }
            },
            onMessage: function (a) {
                a.data && a.data.substr && "__ym__zz" === a.data.substr(0, 8) && (this.zz = a.data.substr(8), r.removeNode(this.frame), this._storage.set(this.key, this.zz), w.un(p, "message", this.onMessage,
                    this, {
                        passive: !1
                    }), clearTimeout(this.timeout))
            },
            fipKey: "fip",
            fpFactors: ["webGL", "plugins", "applePay", "dnt"],
            initFip: function () {
                if (Object.keys && !this.checkVersion() && !this._storage.get(this.fipKey)) {
                    var a = new ab(l.reduce(function (a, d) {
                        a[d] = 1;
                        return a
                    }, {}, this.fpFactors));
                    a = a.toString(!1).join("-");
                    this._storage.set(this.fipKey, a)
                }
            }
        },
        O = Nb.inherit({
            protocol: "",
            host: "mc.yandex.ru",
            queryStringParams: {
                firstOrdering: ["wmode", "callback", "cnt-class"],
                lastOrdering: ["browser-info"]
            },
            resource: "",
            counterId: "",
            counterType: 0,
            retry: !1,
            transports: [Ob, ya, za, Pb],
            _initComponent: function () {
                O.superclass._initComponent.apply(this, arguments);
                this.retry && (this._storage = new ia)
            },
            send: function (a, b, d, f) {
                var g = this.globalConfig.get(ta.globalKey),
                    m = this;
                g && 3 !== this.counterId ? g(function () {
                    var h = m._registerRequest(a, b);
                    m._sendSavedRequest(h, a, b, d, f)
                }, a) : (g = m._registerRequest(a, b), m._sendSavedRequest(g, a, b, d, f))
            },
            _sendSavedRequest: function (a, b, d, f, g) {
                var m = this.globalConfig.get("firstReqStatus"),
                    h = b.forceNoRedirect;
                if ("process" ==
                    m) this.globalConfig.set("firstReqCallbacks", l.mergeArrays(this.globalConfig.get("firstReqCallbacks") || [], [
                    [this, arguments]
                ]));
                else {
                    m || this.globalConfig.set("firstReqStatus", "process");
                    this.counterType && (b["cnt-class"] = this.counterType);
                    this.globalConfig.get("pri") && (d.pri = this.globalConfig.get("pri"));
                    d.st = u.getSeconds();
                    d.u = O._userID;
                    d = Ka.updateInfo(d);
                    m = [this.protocol, "//", this.host, "/", this.resource, "/", this.counterId, h ? "/1" : ""].join("");
                    delete b.forceNoRedirect;
                    var n = [];
                    d && (l.forEachKey(d, function (a,
                                                    c) {
                        "t" != a && l.mergeArrays(n, [a, c])
                    }), d.t && l.mergeArrays(n, ["t", d.t]));
                    n.length && (b["browser-info"] = n.join(":"));
                    return O.superclass.send.call(this, m, b, function () {
                        var e;
                        this.globalConfig.set("firstReqStatus", "complete");
                        this._unregisterRequest(a);
                        var c = this.globalConfig.get("firstReqCallbacks");
                        this.globalConfig.set("firstReqCallbacks", null);
                        if (c)
                            for (e = 0; e < c.length; e++) c[e][0]._sendSavedRequest.apply(c[e][0], c[e][1]);
                        f && f.apply(g, arguments)
                    }, this)
                }
            },
            _isRetryEnabled: function () {
                return this.retry && this._storage &&
                    this._storage.isEnabled()
            },
            _registerRequest: function (a, b) {
                var d;
                if (this._isRetryEnabled()) {
                    b.rqnl = b.rqnl || 0;
                    b.rqnl++;
                    var f = this._storage.get("retryReqs") || {};
                    for (d = 1; f[d];) d++;
                    f[d] = {
                        protocol: this.protocol,
                        host: this.host,
                        resource: this.resource,
                        counterId: this.counterId,
                        counterType: this.counterType,
                        postParams: this.postParams,
                        params: a,
                        browserInfo: b,
                        ghid: this.globalConfig.get("_globalMetrikaHitId"),
                        time: u.getMs()
                    };
                    this._storage.set("retryReqs", f);
                    return d
                }
            },
            _unregisterRequest: function (a) {
                if (a && this._isRetryEnabled()) {
                    var b =
                        this._storage.get("retryReqs") || {};
                    b[a] && (delete b[a], this._storage.set("retryReqs", b))
                }
            },
            _getVersion: B(function () {
                return Aa
            }, "", !0)
        });
    O._storage = new ia;
    O.initCookie = function () {
        var a = new J,
            b = a.read("uid"),
            d = a.read("d"),
            f = u.getSeconds();
        if (!b) b = f + "" + l.random(), a.create("uid", b, 525600), a.create("d", f, 525600);
        else if (!d || 15768E3 < f - parseInt(d)) a.create("uid", b, 525600), a.create("d", f, 525600);
        O._userID = b
    };
    O.retransmit = function (a) {
        var b = O._storage,
            d = b.get("retryReqs") || {},
            f;
        b.remove("retryReqs");
        l.forEachKey(d,
            function (b, d) {
                var h = u.getMs();
                a.get("firstReqStatus") || a.set("firstReqStatus", "complete");
                d.ghid && d.ghid != a.get("_globalMetrikaHitId") && d.time && d.time + 864E5 > h && 500 < h - d.time && 2 >= d.browserInfo.rqnl && (f = new O({
                    protocol: d.protocol,
                    host: d.host,
                    resource: d.resource,
                    counterId: d.counterId,
                    counterType: d.counterType,
                    postParams: d.postParams || [],
                    retry: !0
                }), f.send(d.params, d.browserInfo))
            })
    };
    l.fletcher = function (a) {
        for (var b = a.length, d = 0, f = 255, g = 255, m, h, n; b;) {
            m = 21 < b ? 21 : b;
            b -= m;
            do h = "string" == typeof a ? a.charCodeAt(d) :
                a[d], d++, 255 < h && (n = h >> 8, h &= 255, h ^= n), f += h, g += f; while (--m);
            f = (f & 255) + (f >> 8);
            g = (g & 255) + (g >> 8)
        }
        a = (f & 255) + (f >> 8) << 8 | (g & 255) + (g >> 8);
        return 65535 == a ? 0 : a
    };
    W.encode = function (a, b) {
        var d = (W.abc + (b ? W.tailSafe : W.tail)).split(""),
            f = a.length,
            g = [],
            m = f - f % 3,
            h;
        for (h = 0; h < m; h += 3) {
            var n = (a[h] << 16) + (a[h + 1] << 8) + a[h + 2];
            l.mergeArrays(g, [d[n >> 18 & 63], d[n >> 12 & 63], d[n >> 6 & 63], d[n & 63]])
        }
        switch (f - m) {
            case 1:
                n = a[m] << 4;
                l.mergeArrays(g, [d[n >> 6 & 63], d[n & 63], d[64], d[64]]);
                break;
            case 2:
                n = (a[m] << 10) + (a[m + 1] << 2), l.mergeArrays(g, [d[n >> 12 &
                63], d[n >> 6 & 63], d[n & 63], d[64]])
        }
        return g.join("")
    };
    l.arrayEvery = function (a, b, d) {
        var f;
        for (f = 0; f < a.length; f++)
            if (!b.call(d, a[f], f, a)) return !1;
        return !0
    };
    l.is4Bytes = function (a) {
        return !l.arrayEvery((encodeURIComponent(a).match(/(%[A-F,\d]{2})+/g) || []).join("").split("%"), function (a) {
            return 240 > parseInt(a, 16)
        })
    };
    l.trim = function (a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    l.isNumber = function (a) {
        return isFinite(a) && !isNaN(a) && "[object Number]" === l.toString(a)
    };
    l.isString =
        function (a) {
            return "[object String]" === l.toString(a)
        };
    l._hasIndexOf = [].indexOf && -1 === [].indexOf(1);
    l.arrayIndexOf = l._hasIndexOf ? function (a, b) {
        return a.indexOf(b)
    } : function (a, b) {
        var d;
        for (d = 0; d < a.length; d++)
            if (a[d] === b) return d;
        return -1
    };
    l.warning = function () {
        p.console && "function" === typeof p.console.warn && console.warn.apply(console, arguments)
    };
    l.isObject = function (a) {
        try {
            return a && null !== a && "[object Object]" === l.toString(a)
        } catch (b) {
            return !1
        }
    };
    l._urlParser = null;
    l.parseUrl = function (a) {
        if (!this._urlParser) try {
            this._urlParser =
                q.createElement("a")
        } catch (b) {}
        return this._urlParser ? (this._urlParser.href = a, {
            protocol: this._urlParser.protocol,
            host: this._urlParser.host,
            port: this._urlParser.port,
            hostname: this._urlParser.hostname,
            hash: this._urlParser.hash,
            search: this._urlParser.search,
            query: this._urlParser.search.replace(/^\?/, ""),
            pathname: this._urlParser.pathname || "/",
            path: (this._urlParser.pathname || "/") + this._urlParser.search,
            href: this._urlParser.href
        }) : {}
    };
    l._playerRegexp = /^.+\.mtproxy\.yandex\.net$/;
    l.isMetrikaPlayer = function () {
        return "MetrikaPlayer" ==
            p.name || this._playerRegexp.test(p.location.hostname)
    };
    r.getDocumentCharset = function () {
        return ("" + (q.characterSet || q.charset || "")).toLowerCase()
    };
    r.getBody = function () {
        for (var a = q.getElementsByTagName("body"); 0 < a.length;) return a[0]
    };
    r.getRootElement = function () {
        var a = q.documentElement,
            b = r.getBody();
        return "CSS1Compat" == q.compatMode ? a : b || a
    };
    r.getViewportSize = function () {
        var a = r.getRootElement();
        return [a.clientWidth || p.innerWidth, a.clientHeight || p.innerHeight]
    };
    r.getDocumentTitle = function () {
        var a = q.title;
        "string" != typeof a && (a = (a = q.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
        return a
    };
    t._silverlightVersion = "";
    t.getSilverlightVersion = function () {
        if (!t._silverlightVersion)
            if (p.ActiveXObject) try {
                var a = new ActiveXObject("AgControl.AgControl");
                var b = function (a, b, f, n) {
                    for (; d(a, b);) b[f] += n;
                    b[f] -= n
                };
                var d = function (a, b) {
                    return a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])
                };
                var f = [1, 0, 0, 0];
                b(a, f, 0, 1);
                b(a, f, 1, 1);
                b(a, f, 2, 1E4);
                b(a, f, 2, 1E3);
                b(a, f, 2, 100);
                b(a, f, 2, 10);
                b(a, f, 2, 1);
                b(a, f, 3, 1);
                t._silverlightVersion = f.join(".")
            } catch (g) {} else if (b = p.navigator, b = b.plugins && b.plugins["Silverlight Plug-In"]) t._silverlightVersion = b.description;
        return t._silverlightVersion || ""
    };
    t._flashVersion = 0;
    t.getFlashVersion = function () {
        if (!t._flashVersion) {
            var a = p.navigator;
            if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                var b = a.plugins["Shockwave Flash"];
                var d = b.version;
                if ((b = b.description) || d)
                    if (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] ||
                    a["application/x-shockwave-flash"].enabledPlugin) d ? t._flashVersion = d : b && (t._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
            } else if ("undefined" != typeof p.ActiveXObject) try {
                if (d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = d.GetVariable("$version")) t._flashVersion = b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
            } catch (f) {}
        }
        return t._flashVersion
    };
    t.getLanguage = function () {
        var a = (p.navigator ? navigator.language || navigator.userLanguage || navigator.browserLanguage ||
            navigator.systemLanguage : "").toLowerCase();
        return l.isString(a) ? a : ""
    };
    t.getJavaEnabled = function () {
        try {
            return navigator.javaEnabled()
        } catch (a) {
            return !1
        }
    };
    t.getFingerPrint = function () {
        var a = [],
            b;
        if (navigator.plugins && navigator.plugins.length)
            for (b = 0; b < navigator.plugins.length; b++) {
                var d = navigator.plugins[b];
                l.mergeArrays(a, [d.name, d.version, d.description, d.filename])
            }
        if (navigator.mimeTypes && navigator.mimeTypes.length)
            for (b = 0; b < navigator.mimeTypes.length; b++) d = navigator.mimeTypes[b], l.mergeArrays(a, [d.type,
                d.description, d.suffixes
            ]);
        return l.fnv32a(a.join(";")) + "01"
    };
    t.getNotificationPermission = function () {
        try {
            var a = Notification.permission
        } catch (b) {}
        switch (a) {
            case "denied":
                return 1;
            case "granted":
                return 2
        }
    };
    t.isIframe = function () {
        try {
            return p.top != p.self
        } catch (a) {
            return !1
        }
    };
    t._nMap = {
        other: "0",
        none: "1",
        unknown: "2",
        wifi: "3",
        ethernet: "4",
        bluetooth: "5",
        cellular: "6",
        wimax: "7",
        mixed: "8"
    };
    t.netType = function () {
        var a = (navigator.connection || {
            type: ""
        }).type;
        return t._nMap[a] || a
    };
    t.getNavigationStart = function () {
        var a =
            p.performance || p.webkitPerformance;
        return a && a.timing && a.timing.navigationStart
    };
    t.isSameOriginTopFrame = function () {
        try {
            return p.top.contentWindow || !0
        } catch (a) {
            return !1
        }
    };
    t.isDesktop = function (a) {
        var b = a.get("bt", {});
        a.get("bt") === y && (b.p = navigator.getBattery ? navigator.getBattery() : null, a.set("bt", b), b.p && b.p.then && b.p.then(function (a) {
            b.v = a.charging && 0 === a.chargingTime
        }));
        return b.v
    };
    w.ready = function (a) {
        var b = q.readyState;
        if ("interactive" === b || "complete" === b) l.setTimeout(a, 0, "evt::ready");
        else {
            var d =
                function () {
                    w.un(q, "DOMContentLoaded", d);
                    w.un(p, "load", d);
                    a()
                };
            w.on(q, "DOMContentLoaded", d);
            w.on(p, "load", d)
        }
    };
    var rb = {
            url: "https://mc.yandex.ru/metrika/",
            _value: null,
            init: function (a) {
                var b = this._getLs().read("isad");
                this.globalConfig = a || D;
                b ? this._set(b) : this._getReqStatus() || this._send()
            },
            getVal: function () {
                return this._value
            },
            _set: function (a) {
                this._value = "1" == a || "2" == a ? a : null
            },
            _send: function () {
                var a = this;
                this._setReqStatus("process");
                w.ready(function () {
                    var b = q.createElement("img");
                    b.onload = function () {
                        a._saveReq(!1);
                        r.removeNode(this)
                    };
                    b.onerror = function () {
                        a._saveReq(!0);
                        r.removeNode(this)
                    };
                    b.src = a.url + String.fromCharCode(97, 100, 118, 101, 114, 116, 46, 103, 105, 102);
                    t.isSafari() && (b.style.position = "absolute", b.style.visibility = "hidden", b.style.width = "0px", b.style.height = "0px", r.getRootElement().appendChild(b))
                })
            },
            _saveReq: function (a) {
                this._value = a = a ? "1" : "2";
                this._setReqStatus("complete");
                this._getLs().create("isad", a, 1200)
            },
            _setReqStatus: function (a) {
                try {
                    this.globalConfig.set("adStatus", a)
                } catch (b) {}
            },
            _getReqStatus: function () {
                try {
                    return this.globalConfig.get("adStatus")
                } catch (a) {
                    return "complete"
                }
            },
            _getLs: function () {
                this._ls || (this._ls = new J);
                return this._ls
            }
        },
        bb = {
            encode: function (a) {
                var b = [],
                    d;
                var f = 0;
                for (d = a.length; f < d; f++) {
                    var g = a.charCodeAt(f);
                    128 > g ? b.push(g) : (127 < g && 2048 > g ? b.push(g >> 6 | 192) : (b.push(g >> 12 | 224), b.push(g >> 6 & 63 | 128)), b.push(g & 63 | 128))
                }
                return b
            },
            decode: function (a) {
                for (var b = "", d = 0, f, g, m; d < a.length;) f = a.charCodeAt(d), 128 > f ? (b += String.fromCharCode(f), d++) : 191 < f && 224 > f ? (g = a.charCodeAt(d + 1), b += String.fromCharCode((f & 31) << 6 | g & 63), d += 2) : (g = a.charCodeAt(d + 1), m = a.charCodeAt(d + 2), b += String.fromCharCode((f &
                    15) << 12 | (g & 63) << 6 | m & 63), d += 3);
                return b
            }
        };
    W.decode = function (a, b) {
        for (var d = W.abc + (b ? W.tailSafe : W.tail), f = 0, g = "", m, h, n, e, c; a.length % 4;) a += "\x3d";
        do {
            m = d.indexOf(a.charAt(f++));
            h = d.indexOf(a.charAt(f++));
            e = d.indexOf(a.charAt(f++));
            c = d.indexOf(a.charAt(f++));
            if (0 > m || 0 > h || 0 > e || 0 > c) return null;
            n = m << 18 | h << 12 | e << 6 | c;
            m = n >> 16 & 255;
            h = n >> 8 & 255;
            n &= 255;
            g = 64 == e ? g + String.fromCharCode(m) : 64 == c ? g + String.fromCharCode(m, h) : g + String.fromCharCode(m, h, n)
        } while (f < a.length);
        return g
    };
    l.reduce = function (a, b, d) {
        var f = 0;
        b == y &&
        (b = d[0], f++);
        for (; f < d.length;) b = a(b, d[f]), f++;
        return b
    };
    l.filter = function (a, b) {
        var d, f = [];
        for (d = 0; d < b.length; d++) a(b[d]) && f.push(b[d]);
        return f
    };
    fa.parse = function (a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    var La = O.inherit({
        hitId: 0,
        trackHash: !1,
        trimParams: !1,
        webvisor: !1,
        counter: null,
        counterNum: 0,
        resource: "watch",
        retry: !0,
        paramsQueue: {
            paramsQueue: [],
            length: function () {
                return this.paramsQueue.length
            },
            push: function (a) {
                this.paramsQueue.push(a)
            },
            _reduce: function (a) {
                return function (b, d) {
                    l.arrayEvery(l.keys(d),
                        function (f) {
                            if (b.hasOwnProperty(f)) return 1; - 1 == l.arrayIndexOf(a, f) && (b[f] = d[f], delete d[f]);
                            return 1
                        });
                    return b
                }
            },
            _filter: function (a) {
                return l.keys(a).length
            },
            mixin: function (a) {
                var b = {};
                this.paramsQueue.length && (b = l.reduce(this._reduce(l.keys(a)), {}, this.paramsQueue), this.paramsQueue = l.filter(this._filter, this.paramsQueue));
                return l.mixin({}, a, b)
            }
        },
        postParams: ["site-info"],
        countersNoTitle: "22836271 1143050 29626870 9928105 26128362 29850769".split(" "),
        fake: !1,
        sendTitle: !0,
        _initComponent: function () {
            La.superclass._initComponent.apply(this,
                arguments);
            this._trackHash = this.trackHash;
            "0" === "" + this.counterType && (this.sendTitle = -1 === l.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
        },
        setTrackHash: function (a) {
            this._trackHash = a
        },
        sendHit: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                vParams: a.vParams,
                modes: l.mixin(a.modes || {}, {
                    ar: !0,
                    saveRef: !0,
                    pv: !0
                }),
                callback: a.callback,
                hasPrerender: a.hasPrerender,
                ctx: a.ctx
            }, "hit")
        },
        sendExperiments: function (a) {
            this._hitExt({
                url: H().href,
                title: "",
                referrer: "",
                modes: {
                    ex: !0,
                    ar: !0
                },
                experiments: a.experiments,
                callback: a.callback,
                ctx: a.ctx
            }, "exp")
        },
        sendPrerenderHit: function (a) {
            this._hitExt({
                url: a.url,
                vParams: a.vParams,
                title: a.title,
                referrer: a.referrer,
                modes: {
                    ar: !0,
                    pq: !0
                }
            }, "hit")
        },
        sendAjaxHit: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                modes: a.modes
            }, "hit")
        },
        sendParams: function (a, b, d, f) {
            this._hitExt({
                url: f || H().href,
                title: "",
                referrer: "",
                forceNoRedirect: !0,
                vParams: a,
                modes: {
                    ar: !0,
                    pa: !0,
                    onlyData: !0
                },
                callback: b,
                ctx: d
            }, "pa")
        },
        sendGoal: function (a, b) {
            if (/[/&=?#]/.test(a)) l.warning("Incorrect goal");
            else if (a) {
                var d = b.url ? l.parseUrl(b.url) : H();
                this._hitExt({
                    url: "goal://" + d.hostname + "/" + encodeURIComponent(a),
                    title: r.getDocumentTitle(),
                    referrer: d.href,
                    forceNoRedirect: !0,
                    vParams: b.vParams,
                    modes: {
                        ar: !0
                    },
                    callback: b.callback,
                    ctx: b.ctx
                }, "go")
            } else l.warning("Empty goal")
        },
        sendClickLink: function (a, b) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: b || H().href,
                modes: a.modes
            })
        },
        sendExtLink: function (a, b) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: b || H().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    ut: cb
                },
                callback: a.callback,
                ctx: a.ctx
            }, "cl")
        },
        sendFileUpload: function (a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: H().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    dl: !0
                },
                callback: a.callback,
                ctx: a.ctx
            }, "fu")
        },
        sendNotBounce: function (a, b) {
            this._hitExt({
                url: b.url || H().href,
                title: "",
                referrer: "",
                modes: {
                    cl: a,
                    ar: !0,
                    nb: !0,
                    onlyData: !0
                },
                callback: b.callback,
                ctx: b.ctx
            }, "nb")
        },
        sendDevice: function (a) {
            this._hitExt({
                browserInfo: {
                    di: a.data,
                    dip: a.port
                },
                callback: a.callback,
                ctx: a.ctx
            }, "de")
        },
        _hitExt: function (a,
                           b) {
            function d(a, c) {
                c && (v[a] = c)
            }
            var f, g, m, h = {};
            if (!l.isMetrikaPlayer()) {
                var n = a.modes || {};
                var e = a.browserInfo || {};
                var c = "undefined" !== typeof a.referrer ? a.referrer : Ra.lastReferrer;
                var k = a.url || "";
                var v = {};
                a.nohit && d("nohit", 1);
                n.ar && !n.onlyData && (c = null === c || "" === c ? "" : this._prepareHitUrl(c), k = this._prepareHitUrl(a.url));
                d("forceNoRedirect", a.forceNoRedirect);
                d("page-ref", l.trim(c, db));
                d("page-url", l.trim(k, db));
                l.is4Bytes(a.title) && d("charset", "utf-8"); - 1 != H().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/) ?
                    d("ut", cb) : "undefined" != typeof n.ut && d("ut", l.trim(n.ut, Qb));
                d("exp", a.experiments);
                (g = a.vParams) && this.counter && g.__ym && (l.isNumber(g.__ym.turbo_page) && (this.counter.tp = g.__ym.turbo_page), l.isNumber(g.__ym.turbo_page_id) && (this.counter.tpid = g.__ym.turbo_page_id));
                (!g || l.isObject(g) && !g.__ym && !g.__ymu) && this.paramsQueue.length() && l.inArray(["go", "hit", "pa"], b) && (g = this.paramsQueue.mixin(g));
                g && (k = l.toJSON(g), this.trimParams && k.length > Rb ? m = !0 : 7E5 < k ? l.warning("Too big params") : d("site-info", k));
                n.saveRef &&
                (Ra.lastReferrer = c);
                h = function (a, c) {
                    var e = {};
                    l.forEachKey(c, function (a, c) {
                        -1 === l.arrayIndexOf(["", 0, y, null], c) && (e[a] = c)
                    });
                    return l.mixin({}, a, e)
                }(h, {
                    gdpr: ta.getState(this.globalConfig),
                    tp: this.counter && this.counter.tp,
                    tpid: this.counter && this.counter.tpid,
                    fu: this.getFu(a.url, a.referrer),
                    eu: this.globalConfig.get("isEU"),
                    v: this._getVersion(),
                    pr: a.hasPrerender ? 1 : null
                });
                this.fake || (f = this._getTechInfo(a.title, n, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter, a.nohit));
                h.wv =
                    2;
                l.mixin(e, f, h);
                this.send(v, e, function () {
                    m && this.counter.params(g);
                    a.userParams && this.counter.userParams(a.userParams);
                    l.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
                }, this)
            }
        },
        _prepareHitUrl: function (a) {
            var b = H(),
                d = b.host;
            b = b.href;
            if (!l.isString(a)) return b;
            if (-1 != a.search(/^[a-z][\w.+-]+:\/\//i)) return a;
            var f = a.charAt(0);
            if ("?" == f) return f = b.search(/\?/), -1 == f ? b + a : b.substr(0, f) + a;
            if ("#" == f) return f = b.search(/#/), -1 == f ? b + a : b.substr(0, f) + a;
            if ("/" == f) {
                if (f = b.search(d), -1 != f) return b.substr(0,
                    f + d.length) + a
            } else return d = b.split("/"), d[d.length - 1] = a, d.join("/");
            return a
        },
        getFu: function (a, b) {
            var d = a !== H().href,
                f = q.referrer.replace(/\/$/, ""),
                g = (b || "").replace(/\/$/, "");
            f = f !== g;
            g = 0;
            f && d ? g = 3 : f ? g = 1 : d && (g = 2);
            return g
        },
        _getTechInfo: function (a, b, d, f, g, m, h, n, e, c) {
            function k(a, c, e) {
                var b = "" + c;
                a && c && (e || -1 === b.indexOf(":")) && (A[a] = b)
            }

            function v(a) {
                b[a] && k(a, "1")
            }
            var A = {};
            b = b || {};
            f = f || u.getTimestamp();
            g = g || u.getTimezone();
            k("j", t.getJavaEnabled() ? "1" : "");
            var M = t.isDesktop(this.globalConfig);
            M !== y &&
            k("dp", M ? "1" : "0");
            k("nt", t.netType());
            k("ns", t.getNavigationStart());
            da && k("s", da.width + "x" + da.height + "x" + (da.colorDepth || da.pixelDepth));
            p.devicePixelRatio && k("sk", p.devicePixelRatio);
            t.isIframe() && (k("ifr", "1"), k("sti", t.isSameOriginTopFrame() ? "1" : "0"));
            p.ia_document && p.ia_document.shareURL && p.ia_document.referrer && k("iia", "1");
            k("adb", rb.getVal());
            k("f", t.getFlashVersion());
            k("l", t.getSilverlightVersion());
            k("fpr", t.getFingerPrint());
            k("cn", this.counterNum);
            b.pa || (M = r.getViewportSize(), k("w", M[0] +
                "x" + M[1]));
            k("z", g);
            k("i", f);
            k("et", u.getSeconds());
            k("en", r.getDocumentCharset());
            k("c", navigator.cookieEnabled ? "1" : "");
            k("la", t.getLanguage());
            k("ntf", t.getNotificationPermission());
            l.random(100) || k("np", W.encode(bb.encode(l.trim(t.getPlatform(), 100))));
            m && k("wh", "1");
            g = "ar ln dl cpf ad nb pa pq pv ex".split(" ");
            for (f = 0; f < g.length; f++) v(g[f]);
            g = "va vt sn sa he pai".split(" ");
            b.nb && g.push("cl");
            for (f = 0; f < g.length; f++) m = g[f], k(m, b[m]);
            g = new ia({
                counterId: d
            });
            g.isEnabled() && (d = g.getStorageId(), f =
                g.get("reqNum"), c || (f ? f++ : f = 1), g.set("reqNum", f), g.get("reqNum") == f ? (k("ls", d), k("rqn", f)) : (g.remove("reqNum"), g.clearStorageId(), 1 < f && (k("ls", d), k("rqn", 0))));
            k("rn", l.random());
            k("hid", h);
            c || 3 == this.counterId || b.pq || k("ds", Jb(e));
            e._firstPaint || c || (e._firstPaint = Lb(), k("fp", e._firstPaint));
            if (n) {
                p.name || (p.name = Math.round(65535 * Math.random()));
                if (h = +p.name) 0 > h && (h *= -1), h %= 65535;
                k("wn", h || l.fletcher(p.name));
                try {
                    p.history && k("hl", String(p.history.length))
                } catch (x) {}
            }
            h = "";
            this.sendTitle && (h = this._getTitle(a));
            k("t", h, !0);
            return A
        },
        _getTitle: function (a) {
            a = "undefined" == typeof a ? (a = r.getDocumentTitle()) ? l.trim(a, sb) : "" : l.trim(a, sb);
            return a
        }
    });
    l.array2Props = function (a) {
        var b = a.length,
            d = {},
            f = d,
            g;
        for (g = 0; g < b - 1; g++) {
            var m = a[g];
            f[m] = {};
            g < b - 2 && (f = f[m])
        }
        f[m] = a[b - 1];
        return d
    };
    var Na = I.inherit({
            sampling: 1,
            counterId: 26302566,
            _initComponent: function () {
                Na.superclass._initComponent.apply(this, arguments);
                this._sender = new La({
                    protocol: "https:",
                    counterId: this.counterId,
                    retry: !1,
                    counter: {}
                })
            },
            log: function () {
                this.logParams(l.array2Props(arguments))
            },
            logParams: function (a) {
                Math.random() < this.sampling && this._sender.sendHit({
                    url: L.href,
                    title: "",
                    referrer: "",
                    vParams: a
                })
            }
        }),
        Sb = O.inherit({
            resource: "webvisor",
            retry: !0,
            postParams: ["wv-data"],
            sendPacket: function (a, b, d, f, g, m, h, n) {
                if (!a || !a.length) return !1;
                var e = W.encode(a, !0);
                if (0 == e.indexOf("AAAAAAAAADw") && p.Error) {
                    var c = Error();
                    "string" == typeof c.stack && (new Na({
                        sampling: .1
                    })).log("bad visor packet 5", 1)
                }
                a = {
                    rn: l.random(),
                    "page-url": b,
                    wmode: 0,
                    "wv-type": 0,
                    "wv-hit": d,
                    "wv-part": f + 1,
                    "wv-check": l.fletcher(a),
                    "wv-data": e
                };
                g = {
                    v: this._getVersion(),
                    z: g,
                    i: m
                };
                return this.send(a, g, h, n)
            }
        }),
        mb = Ba.inherit({
            protocol: "",
            counterId: "",
            counterType: "",
            meta: null,
            maxBufferSize: 7500,
            flushTimeout: 3E4,
            storageKey: "visorbuff",
            active: !1,
            _initComponent: function () {
                this.storage = new ia({
                    counterId: this.counterId
                });
                this._sender = new Sb({
                    globalConfig: this.globalConfig,
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                mb.superclass._initComponent.apply(this, arguments)
            },
            onFlush: function (a, b, d) {
                this._sender.sendPacket(a,
                    b.url, b.hitId, d, b.timezone, b.timestamp)
            }
        });
    r.getDocumentHTML = function () {
        var a = "";
        var b = q.documentElement;
        var d = b.outerHTML,
            f, g;
        if (d) b = d;
        else {
            d = b.attributes;
            var m = "";
            for (f = 0; f < d.length; f++)(g = d[f]) && (m += " " + g.name + '\x3d"' + (g.value || "") + '"');
            b = "\x3chtml" + m + "\x3e" + b.innerHTML + "\x3c/html\x3e"
        }
        if (d = q.doctype) a = d.publicId ? ' PUBLIC "' + d.publicId + '"' : "", m = d.systemId ? ' "' + d.systemId + '"' : "", a = "\x3c!DOCTYPE " + d.name + a + m + "\x3e\n";
        return a + b
    };
    r.getElementParent = function (a) {
        if (!a || a == q.documentElement) return null;
        if (a == r.getBody()) return q.documentElement;
        var b = null;
        try {
            b = a.parentNode
        } catch (d) {}
        return b
    };
    r.getElementChildren = function (a, b) {
        var d = [],
            f, g, m;
        if (a && (f = a.childNodes)) {
            var h = 0;
            for (m = f.length; h < m; h++) {
                var n = f[h];
                (g = "INPUT" == n.nodeName && n.type && "hidden" == n.type.toLocaleLowerCase()) || b && n.nodeName != b || l.mergeArrays(d, [n])
            }
        }
        return d
    };
    r.getElementNeighborPosition = function (a) {
        var b = r.getElementParent(a),
            d;
        if (b) {
            var f = 0;
            b = b.childNodes;
            var g = a && a.nodeName;
            for (d = 0; d < b.length; d++) {
                var m = b[d] && b[d].nodeName;
                if (g == m) {
                    if (a == b[d]) return f;
                    f++
                }
            }
        }
        return 0
    };
    r.getDocumentScroll = function () {
        var a = r.getBody();
        return [p.pageXOffset || q.documentElement && q.documentElement.scrollLeft || a && a.scrollLeft || 0, p.pageYOffset || q.documentElement && q.documentElement.scrollTop || a && a.scrollTop || 0]
    };
    r.getElementXY = function (a) {
        var b;
        if (!a || !a.ownerDocument || "PARAM" == a.tagName || a == r.getBody() || a == q.documentElement) return [0, 0];
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            var d = r.getDocumentScroll();
            return [Math.round(a.left +
                d[0]), Math.round(a.top + d[1])]
        }
        for (b = d = 0; a;) d += a.offsetLeft, b += a.offsetTop, a = a.offsetParent;
        return [d, b]
    };
    r.getDocumentSize = function () {
        var a = r.getRootElement(),
            b = r.getViewportSize();
        return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
    };
    r.getElementSize = function (a) {
        var b;
        return a == r.getBody() || a == q.documentElement ? r.getDocumentSize() : (b = a.getBoundingClientRect && a.getBoundingClientRect()) ? [b.width, b.height] : [a.offsetWidth, a.offsetHeight]
    };
    r.getElementRegion = function (a) {
        var b = r.getElementXY(a);
        a = r.getElementSize(a);
        return [b[0], b[1], a[0], a[1]]
    };
    r.calcChildrenChecksum = function (a) {
        var b = B(function () {
            return a.innerHTML
        }, "", !0)() || "";
        return l.fletcher(b.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    r.getFormNumber = function (a) {
        var b = q.getElementsByTagName("form"),
            d;
        var f = 0;
        for (d = b.length; f < d; f++)
            if (b[f] == a) return f;
        return -1
    };
    r.isEmptyField = function (a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" ==
        a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
    };
    r.calcTextChecksum = function (a) {
        var b = "";
        a = a.childNodes;
        var d;
        var f = 0;
        for (d = a.length; f < d; f++) a[f] && 3 == a[f].nodeType && (b += a[f].nodeValue);
        return l.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    r.calcAttribChecksum = function (a) {
        var b = "",
            d = "width height align title alt name".split(" "),
            f;
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        b += String(a.className || "").toLowerCase();
        for (f = 0; f < d.length; f++) a.getAttribute &&
        (b += String(a.getAttribute(d[f]) || "").toLowerCase());
        return l.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    r.classNameExists = function (a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
        } catch (d) {
            return !1
        }
    };
    r.getElementsByClassName = function (a, b) {
        var d;
        b = b || q;
        var f = b.getElementsByTagName("*");
        var g = [];
        for (d = 0; d < f.length; d++) r.classNameExists(f[d], a) && g.push(f[d]);
        return g
    };
    try {
        var ab = function (a) {
            function b(f) {
                if (d[f]) return d[f].f;
                var g = d[f] = {
                    H: f,
                    L: !1,
                    f: {}
                };
                a[f].call(g.f, g, g.f, b);
                g.L = !0;
                return g.f
            }
            var d = {};
            b.Z = a;
            b.W = d;
            b.H = function (a) {
                return a
            };
            b.B = function (a, d) {
                b.C(a) || Object.defineProperty(a, "a", {
                    configurable: !1,
                    enumerable: !0,
                    get: d
                })
            };
            b.X = function (a) {
                var d = a && a.a ? function () {
                    return a["default"]
                } : function () {
                    return a
                };
                b.B(d, d);
                return d
            };
            b.C = function (a) {
                return Object.prototype.hasOwnProperty.call(a, "a")
            };
            b.Y = "";
            return b(b.$ = 5)
        }([function (a, b) {
            b.a = !0;
            a = function () {
                function a() {
                    this.m = p.ApplePaySession
                }
                a.prototype.g = function () {
                    var a = !1;
                    try {
                        a = p.self !== p.top
                    } catch (m) {}
                    if (!this.m ||
                        "https:" !== L.protocol || a) return "";
                    a = "";
                    for (var b = 1; 10 >= b; b++) a += this.m.supportsVersion(b) ? b : "0";
                    return a + this.m.canMakePayments()
                };
                return a
            }();
            b.u = a
        }, function (a, b) {
            var d = this && this.V || function () {
                var a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (a, b) {
                        a.__proto__ = b
                    } || function (a, b) {
                        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d])
                    };
                return function (b, d) {
                    function f() {
                        this.constructor = b
                    }
                    a(b, d);
                    b.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f)
                }
            }();
            b.a = !0;
            a = function () {
                function a(a) {
                    this.D =
                        a;
                    this.h = !0;
                    this.canvas = q.createElement("canvas");
                    this.I() || (this.h = !1)
                }
                a.prototype.I = function () {
                    this.c = this.canvas.getContext(this.D);
                    return !(!this.canvas.getContext || !this.c)
                };
                a.prototype.g = function () {
                    return this.h ? this.o() : this.id
                };
                return a
            }();
            var f = function (a) {
                function b() {
                    var b = a.call(this, "webgl") || this;
                    b.h && !b.J() && (b.h = !1);
                    return b
                }
                d(b, a);
                b.prototype.J = function () {
                    var a = this.canvas.getContext && (this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl"));
                    return !!p.WebGLRenderingContext &&
                        !!a
                };
                b.prototype.j = function (a) {
                    var b = this.c;
                    b.clearColor(0, 0, 0, 1);
                    b.enable(b.DEPTH_TEST);
                    b.depthFunc(b.LEQUAL);
                    b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                    return "[" + a[0] + ", " + a[1] + "]"
                };
                b.prototype.M = function (a) {
                    var b, e = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return e ? (b = a.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === b && (b = 2), b) : null
                };
                b.prototype.o = function () {
                    var a = this.c,
                        b = [],
                        e = a.createBuffer();
                    a.bindBuffer(a.ARRAY_BUFFER, e);
                    a.bufferData(a.ARRAY_BUFFER, new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]), a.STATIC_DRAW);
                    e.K = 3;
                    e.O = 3;
                    var c = a.createProgram(),
                        d = a.createShader(a.VERTEX_SHADER);
                    a.shaderSource(d, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate\x3dattrVertex+uniformOffset;gl_Position\x3dvec4(attrVertex,0,1);}");
                    a.compileShader(d);
                    var f = a.createShader(a.FRAGMENT_SHADER);
                    a.shaderSource(f,
                        "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor\x3dvec4(varyinTexCoordinate,0,1);}");
                    a.compileShader(f);
                    a.attachShader(c, d);
                    a.attachShader(c, f);
                    a.linkProgram(c);
                    a.useProgram(c);
                    c.R = a.getAttribLocation(c, "attrVertex");
                    c.P = a.getUniformLocation(c, "uniformOffset");
                    a.enableVertexAttribArray(c.aa);
                    a.vertexAttribPointer(c.R, e.K, a.FLOAT, !1, 0, 0);
                    a.uniform2f(c.P, 1, 1);
                    a.drawArrays(a.TRIANGLE_STRIP, 0, e.O);
                    null != a.canvas && b.push(a.canvas.toDataURL());
                    b.push("extensions:" + a.getSupportedExtensions().join(";"));
                    b.push("webgl aliased line width range:" + this.j(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
                    b.push("webgl aliased point size range:" + this.j(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
                    b.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS));
                    b.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no"));
                    b.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS));
                    b.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS));
                    b.push("webgl green bits:" + a.getParameter(a.GREEN_BITS));
                    b.push("webgl max anisotropy:" +
                        this.M(a));
                    b.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
                    b.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
                    b.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
                    b.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
                    b.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
                    b.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE));
                    b.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS));
                    b.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS));
                    b.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
                    b.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
                    b.push("webgl max viewport dims:" + this.j(a.getParameter(a.MAX_VIEWPORT_DIMS)));
                    b.push("webgl red bits:" + a.getParameter(a.RED_BITS));
                    b.push("webgl renderer:" + a.getParameter(a.RENDERER));
                    b.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
                    b.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS));
                    b.push("webgl vendor:" + a.getParameter(a.VENDOR));
                    b.push("webgl version:" + a.getParameter(a.VERSION));
                    try {
                        var g = a.getExtension("WEBGL_debug_renderer_info");
                        g && (b.push("webgl unmasked vendor:" + a.getParameter(g.UNMASKED_VENDOR_WEBGL)), b.push("webgl unmasked renderer:" + a.getParameter(g.UNMASKED_RENDERER_WEBGL)))
                    } catch (M) {}
                    if (!a.getShaderPrecisionFormat) return b.join("~");
                    b.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision);
                    b.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin);
                    b.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax);
                    b.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision);
                    b.push("webgl vertex shader medium float precision rangeMin:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin);
                    b.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax);
                    b.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision);
                    b.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin);
                    b.push("webgl vertex shader low float precision rangeMax:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax);
                    b.push("webgl fragment shader high float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision);
                    b.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin);
                    b.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax);
                    b.push("webgl fragment shader medium float precision:" +
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision);
                    b.push("webgl fragment shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin);
                    b.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax);
                    b.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision);
                    b.push("webgl fragment shader low float precision rangeMin:" +
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin);
                    b.push("webgl fragment shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax);
                    b.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision);
                    b.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin);
                    b.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                        a.HIGH_INT).rangeMax);
                    b.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision);
                    b.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin);
                    b.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax);
                    b.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision);
                    b.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin);
                    b.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax);
                    b.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision);
                    b.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin);
                    b.push("webgl fragment shader high int precision rangeMax:" +
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax);
                    b.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision);
                    b.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin);
                    b.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax);
                    b.push("webgl fragment shader low int precision:" +
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision);
                    b.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin);
                    b.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax);
                    return b.join("~")
                };
                return b
            }(a);
            b.A = f;
            a = function (a) {
                function b() {
                    return a.call(this, "2d") || this
                }
                d(b, a);
                b.prototype.o = function () {
                    var a = this.canvas,
                        b = this.c,
                        e = [];
                    a.width = 2E3;
                    a.height = 200;
                    a.style.display = "inline";
                    b.rect(0, 0, 10, 10);
                    b.rect(2, 2, 6, 6);
                    e.push("canvas winding:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no"));
                    b.textBaseline = "alphabetic";
                    b.fillStyle = "#f60";
                    b.fillRect(125, 1, 62, 20);
                    b.fillStyle = "#069";
                    b.font = "11pt Arial";
                    b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
                    b.fillStyle = "rgba(102, 204, 0, 0.2)";
                    b.font = "18pt Arial";
                    b.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);
                    b.globalCompositeOperation = "multiply";
                    b.fillStyle = "rgb(255,0,255)";
                    b.beginPath();
                    b.arc(50, 50, 50, 0, 2 * Math.PI, !0);
                    b.closePath();
                    b.fill();
                    b.fillStyle = "rgb(0,255,255)";
                    b.beginPath();
                    b.arc(100, 50, 50, 0, 2 * Math.PI, !0);
                    b.closePath();
                    b.fill();
                    b.fillStyle = "rgb(255,255,0)";
                    b.beginPath();
                    b.arc(75, 100, 50, 0, 2 * Math.PI, !0);
                    b.closePath();
                    b.fill();
                    b.fillStyle = "rgb(255,0,255)";
                    b.arc(75, 75, 75, 0, 2 * Math.PI, !0);
                    b.arc(75, 75, 25, 0, 2 * Math.PI, !0);
                    b.fill("evenodd");
                    e.push("canvas fp:" + a.toDataURL());
                    return e.join("~")
                };
                return b
            }(a);
            b.S = a
        }, function (a, b) {
            b.a = !0;
            a = function () {
                function a() {
                    this.b = p.navigator
                }
                a.prototype.g =
                    function () {
                        return this.b.i ? this.b.i : this.b.N ? this.b.N : this.b.i ? this.b.i : "unknown"
                    };
                return a
            }();
            b.v = a
        }, function (a, b) {
            function d(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var e = [0, 0, 0, 0];
                e[3] += a[3] * c[3];
                e[2] += e[3] >>> 16;
                e[3] &= 65535;
                e[2] += a[2] * c[3];
                e[1] += e[2] >>> 16;
                e[2] &= 65535;
                e[2] += a[3] * c[2];
                e[1] += e[2] >>> 16;
                e[2] &= 65535;
                e[1] += a[1] * c[3];
                e[0] += e[1] >>> 16;
                e[1] &= 65535;
                e[1] += a[2] * c[2];
                e[0] += e[1] >>> 16;
                e[1] &= 65535;
                e[1] += a[3] * c[1];
                e[0] += e[1] >>> 16;
                e[1] &= 65535;
                e[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                e[0] &= 65535;
                return [e[0] << 16 | e[1], e[2] << 16 | e[3]]
            }

            function f(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var e = [0, 0, 0, 0];
                e[3] += a[3] + c[3];
                e[2] += e[3] >>> 16;
                e[3] &= 65535;
                e[2] += a[2] + c[2];
                e[1] += e[2] >>> 16;
                e[2] &= 65535;
                e[1] += a[1] + c[1];
                e[0] += e[1] >>> 16;
                e[1] &= 65535;
                e[0] += a[0] + c[0];
                e[0] &= 65535;
                return [e[0] << 16 | e[1], e[2] << 16 | e[3]]
            }

            function g(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] <<
                c | a[0] >>> 32 - c
                ];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function m(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function h(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function n(a) {
                a = h(a, [0, a[0] >>> 1]);
                a = d(a, [4283543511, 3981806797]);
                a = h(a, [0, a[0] >>> 1]);
                a = d(a, [3301882366, 444984403]);
                return h(a, [0, a[0] >>> 1])
            }
            b.a = !0;
            b.hash = function (a, c) {
                a = a || "";
                c = c || 0;
                var e = a.length % 16,
                    b = a.length - e,
                    l = [0, c];
                c = [0, c];
                for (var p, x, q = [2277735313, 289559509], r = [1291169091, 658871167], z = 0; z < b; z +=
                    16) p = [a.charCodeAt(z + 4) & 255 | (a.charCodeAt(z + 5) & 255) << 8 | (a.charCodeAt(z + 6) & 255) << 16 | (a.charCodeAt(z + 7) & 255) << 24, a.charCodeAt(z) & 255 | (a.charCodeAt(z + 1) & 255) << 8 | (a.charCodeAt(z + 2) & 255) << 16 | (a.charCodeAt(z + 3) & 255) << 24], x = [a.charCodeAt(z + 12) & 255 | (a.charCodeAt(z + 13) & 255) << 8 | (a.charCodeAt(z + 14) & 255) << 16 | (a.charCodeAt(z + 15) & 255) << 24, a.charCodeAt(z + 8) & 255 | (a.charCodeAt(z + 9) & 255) << 8 | (a.charCodeAt(z + 10) & 255) << 16 | (a.charCodeAt(z + 11) & 255) << 24], p = d(p, q), p = g(p, 31), p = d(p, r), l = h(l, p), l = g(l, 27), l = f(l, c), l = f(d(l, [0,
                    5
                ]), [0, 1390208809]), x = d(x, r), x = g(x, 33), x = d(x, q), c = h(c, x), c = g(c, 31), c = f(c, l), c = f(d(c, [0, 5]), [0, 944331445]);
                p = [0, 0];
                x = [0, 0];
                switch (e) {
                    case 15:
                        x = h(x, m([0, a.charCodeAt(z + 14)], 48));
                    case 14:
                        x = h(x, m([0, a.charCodeAt(z + 13)], 40));
                    case 13:
                        x = h(x, m([0, a.charCodeAt(z + 12)], 32));
                    case 12:
                        x = h(x, m([0, a.charCodeAt(z + 11)], 24));
                    case 11:
                        x = h(x, m([0, a.charCodeAt(z + 10)], 16));
                    case 10:
                        x = h(x, m([0, a.charCodeAt(z + 9)], 8));
                    case 9:
                        x = h(x, [0, a.charCodeAt(z + 8)]), x = d(x, r), x = g(x, 33), x = d(x, q), c = h(c, x);
                    case 8:
                        p = h(p, m([0, a.charCodeAt(z + 7)],
                            56));
                    case 7:
                        p = h(p, m([0, a.charCodeAt(z + 6)], 48));
                    case 6:
                        p = h(p, m([0, a.charCodeAt(z + 5)], 40));
                    case 5:
                        p = h(p, m([0, a.charCodeAt(z + 4)], 32));
                    case 4:
                        p = h(p, m([0, a.charCodeAt(z + 3)], 24));
                    case 3:
                        p = h(p, m([0, a.charCodeAt(z + 2)], 16));
                    case 2:
                        p = h(p, m([0, a.charCodeAt(z + 1)], 8));
                    case 1:
                        p = h(p, [0, a.charCodeAt(z)]), p = d(p, q), p = g(p, 31), p = d(p, r), l = h(l, p)
                }
                l = h(l, [0, a.length]);
                c = h(c, [0, a.length]);
                l = f(l, c);
                c = f(c, l);
                l = n(l);
                c = n(c);
                l = f(l, c);
                c = f(c, l);
                return ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[1] >>> 0).toString(16)).slice(-8) +
                    ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
            }
        }, function (a, b, d) {
            b.a = !0;
            var f = d(6);
            a = function () {
                function a() {}
                a.prototype.g = function () {
                    return f.s(navigator.plugins).sort(function (a, b) {
                        return a.name > b.name ? 1 : 2
                    }).map(function (a) {
                        return [a.name, a.description, f.s(a).map(function (a) {
                            return [a.description, a.suffixes, a.type].join()
                        }).join()].join()
                    }).join()
                };
                return a
            }();
            b.w = a
        }, function (a, b, d) {
            var f = this && this.U || Object.assign || function (a) {
                for (var c, e = 1, b = arguments.length; e <
                b; e++) {
                    c = arguments[e];
                    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                }
                return a
            };
            b.a = !0;
            var g = d(1),
                m = d(4),
                h = d(0),
                n = d(2),
                e = d(3);
            a = function () {
                function a(a) {
                    var c = this;
                    this.l = a;
                    this.G = {
                        webGL: g.A,
                        dnt: n.v,
                        plugins: m.w,
                        applePay: h.u
                    };
                    this.l = f({
                        webGL: !1,
                        dnt: !1,
                        plugins: !1,
                        applePay: !1
                    }, a);
                    this.F = Object.keys(this.l).filter(function (a) {
                        return c.l[a]
                    }).map(function (a) {
                        return new c.G[a]
                    })
                }
                a.prototype.toString = function (a) {
                    void 0 === a && (a = !0);
                    var c = this.F.map(function (a) {
                        var c = "";
                        try {
                            c = a.g()
                        } catch (x) {}
                        return c
                    });
                    return a ? [e.hash(c.join(""), 210)] : c.map(function (a) {
                        return e.hash(a, 210)
                    })
                };
                return a
            }();
            b.T = a;
            b["default"] = a
        }, function (a, b) {
            b.a = !0;
            b.s = function (a) {
                return Array.prototype.slice.call(a)
            }
        }]);
        ab = ab["default"]
    } catch (a) {
        Ja = {
            error: a,
            scope: "fip"
        }
    }
    l.arrayFilter = function (a, b, d) {
        var f = [],
            g;
        for (g = 0; g < a.length; g++) b.call(d, a[g], g, a) && f.push(a[g]);
        return f
    };
    l.arrDiff = function (a, b) {
        return l.arrayFilter(a, function (a) {
            return -1 === l.arrayIndexOf(b, a)
        })
    };
    l.encodeURIComponent = function (a, b) {
        a = String(a);
        b && a.length > b &&
        (a = a.substr(0, b));
        return (p.encodeURIComponent || p.escape)(a).replace(/\+/g, "%2B")
    };
    l.bind = function (a, b) {
        var d = [].slice.call(arguments, 2);
        return function () {
            return a.apply(b || this, d.concat([].slice.call(arguments, 0)))
        }
    };
    l.clearTimeout = function (a) {
        return l.getNativeFunction("clearTimeout")(a)
    };
    l.safeDecodeURIComponent = function (a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    };
    l.isDev = function () {
        return !1
    };
    !$a(/webkit/) && $a(/gecko/);
    var eb = {
            asyncChunk: 400,
            maxDuration: 20,
            restTime: 100,
            asyncBuffer: [],
            timeout: null,
            rest: 0,
            addAsyncItem: function (a, b, d, f, g) {
                var m = this;
                this.asyncBuffer.push({
                    fn: a,
                    ctx: b,
                    args: f || [],
                    loggerName: g || ""
                });
                d ? (clearTimeout(this.timeout), m.flushAsync(!0)) : u.getMs() - this.rest >= this.restTime && !this.timeout ? (this.rest = u.getMs(), m.flushAsync()) : this.timeout || (this.timeout = l.setTimeout(function () {
                    m.rest = u.getMs();
                    m.flushAsync();
                    m.timeout = !1
                }, this.restTime))
            },
            chain: function (a, b, d, f) {
                var g = this;
                a.push = function (a) {
                    throw 'Try to push in Executor when it started "' + a + '"';
                };
                (function c(b,
                            d, e) {
                    g.addAsyncItem(function (e, b, d) {
                        b = a[e++](b);
                        e <= a.length - 1 && c(e, b, d)
                    }, null, e, [b, d], f + "." + b)
                })(0, b, d)
            },
            callByTimeout: function (a, b) {
                for (var d = u.getMs(), f = 0, g, m = (b || 0) + 1, h = 0, n = this; this.asyncBuffer.length;)
                    if (g = this.asyncBuffer.shift(), h += 1, !g.isExecuted && (B(function () {
                        g.fn.apply(g.ctx, g.args)
                    }, "AsyncExecutor." + g.loggerName)(), f = u.getMs() - d, g.isExecuted = !0, !a && (h >= this.asyncChunk || f >= this.maxDuration))) {
                        l.setTimeout(function () {
                            n.callByTimeout(a, m)
                        }, this.restTime);
                        break
                    }
            },
            flushAsync: function (a) {
                this.asyncBuffer.length &&
                this.callByTimeout(a)
            }
        },
        Tb = ya.inherit({
            id: "XHRPlain",
            index: 8,
            _splitParams: function (a) {
                var b = {},
                    d = {};
                l.forEachKey(a, function (a, g) {
                    l.inArray(this.postParams, a) ? this.postParams.isSingle ? d = g : d[a] = g : b[a] = g
                }, this);
                return {
                    get: b,
                    post: d
                }
            },
            _preparePostParams: function (a) {
                return a.post
            },
            _setHeaders: function (a) {
                a.setRequestHeader("Content-Type", "text/plain")
            }
        }),
        fb = O.inherit({
            resource: "webvisor",
            version: 2,
            retry: !1,
            postParams: ["wv-data"],
            transports: [Tb],
            _initComponent: function () {
                fb.superclass._initComponent.apply(this,
                    arguments);
                this.postParams.isSingle = !0
            },
            sendPacket: function (a, b, d, f, g, m, h, n, e) {
                var c = r.getViewportSize();
                if (!a || !a.length) return !1;
                a = {
                    rn: l.random(),
                    "page-url": b,
                    wmode: 0,
                    "wv-type": this.version,
                    "wv-hit": d,
                    "wv-part": f + 1,
                    "wv-data": a
                };
                g = {
                    et: h,
                    w: c[0] + "x" + c[1],
                    v: this._getVersion(),
                    z: g,
                    i: m
                };
                return this.send(a, g, n, e)
            }
        }),
        Sa = Ba.inherit({
            protocol: "",
            chunkSize: 0,
            counterId: "",
            counterType: "",
            meta: null,
            maxBufferSize: 7E5,
            flushTimeout: 2E3,
            storageKey: "visorbuff2",
            active: !1,
            wvType: 2,
            _v: "",
            _initComponent: function () {
                this._sender =
                    new fb({
                        version: this.wvType,
                        protocol: this.protocol,
                        globalConfig: this.globalConfig,
                        counterId: this.counterId,
                        counterType: this.counterType
                    });
                Sa.superclass._initComponent.apply(this, arguments)
            },
            append: function (a) {
                !this._data.length && a && a.length && (this.startBufferTime = u.getSeconds());
                Sa.superclass.append.apply(this, arguments)
            },
            _getSize: function (a) {
                var b = this;
                this.chunkSize = p.Blob ? this.chunkSize + (new Blob([a])).size : this.chunkSize + 2 * a.length;
                this.wrappers.length && l.reduce(function (a, f) {
                    var d = f.getBufferData();
                    b.chunkSize += l.toJSON(d).length
                }, 0, this.wrappers);
                return this.chunkSize
            },
            addData: function (a, b, d, f) {
                var g = 0,
                    m = 1,
                    h = {
                        type: a
                    },
                    n = .9 * this.maxBufferSize;
                this._v = d;
                this.wrappers.length && l.arrayEvery(this.wrappers, function (c) {
                    c.trigger && c.trigger(a, b);
                    return 1
                });
                b.stamp && (h.stamp = b.stamp, delete b.stamp);
                d = fa.stringify(b);
                var e = this._getSize(d);
                if (e > this.maxBufferSize)
                    for (this._data.length && this._flush(), f = Math.ceil(e / n); g < d.length;) h.partNum = m, h.end = m === f, h.data = d.slice(g, g += n), m++, this._getSize(h.data), this.append([h], !0);
                else h.data = d, this.append([h], f);
                this.store.set(h, {
                    id: a,
                    data: b
                })
            },
            onFlush: function (a, b, d) {
                this.chunkSize = 0;
                l.arrayEvery(this.wrappers, function (b) {
                    if (!b.onFlush) return 1;
                    l.arrayEvery(a, function (a) {
                        a = this.store.pop(a);
                        if (!a) return 1;
                        b.onFlush(a.id, a.data);
                        return 1
                    }, this);
                    return 1
                }, this);
                l.arrayEvery(this.wrappers, function (b) {
                    b = b.getBufferData();
                    b.data = fa.stringify(b.data);
                    a.push(b);
                    return 1
                });
                this._sender.sendPacket(fa.stringify(a), b.url, b.hitId, d, b.timezone, b.timestamp, this.startBufferTime)
            },
            getFlushSize: function () {
                return this.chunkSize
            }
        }),
        G = function (a) {
            function b(f) {
                if (d[f]) return d[f].exports;
                var g = d[f] = {
                    i: f,
                    l: !1,
                    exports: {}
                };
                a[f].call(g.exports, g, g.exports, b);
                g.l = !0;
                return g.exports
            }
            var d = {};
            b.m = a;
            b.c = d;
            b.d = function (a, d, m) {
                b.o(a, d) || Object.defineProperty(a, d, {
                    configurable: !1,
                    enumerable: !0,
                    get: m
                })
            };
            b.r = function (a) {
                Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            };
            b.n = function (a) {
                var d = a && a.__esModule ? function () {
                    return a["default"]
                } : function () {
                    return a
                };
                b.d(d, "a", d);
                return d
            };
            b.o = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a,
                    b)
            };
            b.p = "";
            return b(b.s = 18)
        }([function (a, b, d) {
            function f(a, b, d) {
                for (var e = Object.keys(b), c = 0; c < e.length; ++c) void 0 !== a[e[c]] && d || (a[e[c]] = b[e[c]]);
                return a
            }

            function g(a) {
                function b(a, e) {
                    if (!(this instanceof b)) return new b(a, e);
                    Object.defineProperty(this, "message", {
                        get: function () {
                            return a
                        }
                    });
                    Error.captureStackTrace ? Error.captureStackTrace(this, b) : Object.defineProperty(this, "stack", {
                        value: Error().stack || ""
                    });
                    e && f(this, e)
                }(b.prototype = Object.create(Error.prototype)).constructor = b;
                Object.defineProperty(b.prototype,
                    "name", {
                        get: function () {
                            return a
                        }
                    });
                b.prototype.toString = function () {
                    return this.name + ": " + this.message
                };
                return b
            }
            b.asPromise = d(15);
            b.base64 = d(14);
            b.EventEmitter = d(13);
            b["float"] = d(12);
            b.inquire = d(11);
            b.utf8 = d(10);
            b.pool = d(9);
            b.LongBits = d(8);
            b.global = "undefined" != typeof p && p || "undefined" != typeof global && global || "undefined" != typeof self && self || this;
            b.emptyArray = Object.freeze ? Object.freeze([]) : [];
            b.emptyObject = Object.freeze ? Object.freeze({}) : {};
            b.isNode = !!(b.global.process && b.global.process.versions &&
                b.global.process.versions.node);
            b.isInteger = Number.isInteger || function (a) {
                return "number" == typeof a && isFinite(a) && Math.floor(a) === a
            };
            b.isString = function (a) {
                return "string" == typeof a || a instanceof String
            };
            b.isObject = function (a) {
                return a && "object" == typeof a
            };
            b.isset = b.isSet = function (a, b) {
                var d = a[b];
                return !(null == d || !a.hasOwnProperty(b)) && ("object" != typeof d || 0 < (Array.isArray(d) ? d.length : Object.keys(d).length))
            };
            b.Buffer = function () {
                try {
                    var a = b.inquire("buffer").Buffer;
                    return a.prototype.utf8Write ? a : null
                } catch (h) {
                    return null
                }
            }();
            b._Buffer_from = null;
            b._Buffer_allocUnsafe = null;
            b.newBuffer = function (a) {
                return "number" == typeof a ? b.Buffer ? b._Buffer_allocUnsafe(a) : new b.Array(a) : b.Buffer ? b._Buffer_from(a) : "undefined" == typeof Uint8Array ? a : new Uint8Array(a)
            };
            b.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
            b.Long = b.global.dcodeIO && b.global.dcodeIO.Long || b.global.Long || b.inquire("long");
            b.key2Re = /^true|false|0|1$/;
            b.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
            b.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
            b.longToHash = function (a) {
                return a ?
                    b.LongBits.from(a).toHash() : b.LongBits.zeroHash
            };
            b.longFromHash = function (a, d) {
                var f = b.LongBits.fromHash(a);
                return b.Long ? b.Long.fromBits(f.lo, f.hi, d) : f.toNumber(!!d)
            };
            b.merge = f;
            b.lcFirst = function (a) {
                return a.charAt(0).toLowerCase() + a.substring(1)
            };
            b.newError = g;
            b.ProtocolError = g("ProtocolError");
            b.oneOfGetter = function (a) {
                for (var b = {}, d = 0; d < a.length; ++d) b[a[d]] = 1;
                return function () {
                    for (var a = Object.keys(this), c = a.length - 1; - 1 < c; --c)
                        if (1 === b[a[c]] && void 0 !== this[a[c]] && null !== this[a[c]]) return a[c]
                }
            };
            b.oneOfSetter = function (a) {
                return function (b) {
                    for (var d = 0; d < a.length; ++d) a[d] !== b && delete this[a[d]]
                }
            };
            b.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            };
            b._configure = function () {
                var a = b.Buffer;
                a ? (b._Buffer_from = a.from !== Uint8Array.from && a.from || function (b, d) {
                    return new a(b, d)
                }, b._Buffer_allocUnsafe = a.allocUnsafe || function (b) {
                    return new a(b)
                }) : b._Buffer_from = b._Buffer_allocUnsafe = null
            }
        }, function (a, b, d) {
            function f(a, c) {
                return RangeError("index out of range: " + a.pos + " + " + (c || 1) + " \x3e " +
                    a.len)
            }

            function g(a) {
                this.buf = a;
                this.pos = 0;
                this.len = a.length
            }

            function l() {
                var a = new k(0, 0),
                    c = 0;
                if (!(4 < this.len - this.pos)) {
                    for (; 3 > c; ++c) {
                        if (this.pos >= this.len) throw f(this);
                        a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * c) >>> 0;
                        if (128 > this.buf[this.pos++]) return a
                    }
                    a.lo = (a.lo | (127 & this.buf[this.pos++]) << 7 * c) >>> 0;
                    return a
                }
                for (; 4 > c; ++c)
                    if (a.lo = (a.lo | (127 & this.buf[this.pos]) << 7 * c) >>> 0, 128 > this.buf[this.pos++]) return a;
                a.lo = (a.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
                a.hi = (a.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
                if (128 >
                    this.buf[this.pos++]) return a;
                c = 0;
                if (4 < this.len - this.pos)
                    for (; 5 > c; ++c) {
                        if (a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * c + 3) >>> 0, 128 > this.buf[this.pos++]) return a
                    } else
                    for (; 5 > c; ++c) {
                        if (this.pos >= this.len) throw f(this);
                        a.hi = (a.hi | (127 & this.buf[this.pos]) << 7 * c + 3) >>> 0;
                        if (128 > this.buf[this.pos++]) return a
                    }
                throw Error("invalid varint encoding");
            }

            function h(a, c) {
                return (a[c - 4] | a[c - 3] << 8 | a[c - 2] << 16 | a[c - 1] << 24) >>> 0
            }

            function n() {
                if (this.pos + 8 > this.len) throw f(this, 8);
                return new k(h(this.buf, this.pos += 4), h(this.buf,
                    this.pos += 4))
            }
            a.exports = g;
            var e, c = d(0),
                k = c.LongBits,
                v = c.utf8,
                A, p = "undefined" != typeof Uint8Array ? function (a) {
                    if (a instanceof Uint8Array || Array.isArray(a)) return new g(a);
                    throw Error("illegal buffer");
                } : function (a) {
                    if (Array.isArray(a)) return new g(a);
                    throw Error("illegal buffer");
                };
            g.create = c.Buffer ? function (a) {
                return (g.create = function (a) {
                    return c.Buffer.isBuffer(a) ? new e(a) : p(a)
                })(a)
            } : p;
            g.prototype._slice = c.Array.prototype.subarray || c.Array.prototype.slice;
            g.prototype.uint32 = (A = 4294967295, function () {
                A =
                    (127 & this.buf[this.pos]) >>> 0;
                if (128 > this.buf[this.pos++]) return A;
                A = (A | (127 & this.buf[this.pos]) << 7) >>> 0;
                if (128 > this.buf[this.pos++]) return A;
                A = (A | (127 & this.buf[this.pos]) << 14) >>> 0;
                if (128 > this.buf[this.pos++]) return A;
                A = (A | (127 & this.buf[this.pos]) << 21) >>> 0;
                if (128 > this.buf[this.pos++]) return A;
                A = (A | (15 & this.buf[this.pos]) << 28) >>> 0;
                if (128 > this.buf[this.pos++]) return A;
                if ((this.pos += 5) > this.len) throw this.pos = this.len, f(this, 10);
                return A
            });
            g.prototype.int32 = function () {
                return 0 | this.uint32()
            };
            g.prototype.sint32 =
                function () {
                    var a = this.uint32();
                    return a >>> 1 ^ -(1 & a) | 0
                };
            g.prototype.bool = function () {
                return 0 !== this.uint32()
            };
            g.prototype.fixed32 = function () {
                if (this.pos + 4 > this.len) throw f(this, 4);
                return h(this.buf, this.pos += 4)
            };
            g.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw f(this, 4);
                return 0 | h(this.buf, this.pos += 4)
            };
            g.prototype["float"] = function () {
                if (this.pos + 4 > this.len) throw f(this, 4);
                var a = c["float"].readFloatLE(this.buf, this.pos);
                this.pos += 4;
                return a
            };
            g.prototype["double"] = function () {
                if (this.pos +
                    8 > this.len) throw f(this, 4);
                var a = c["float"].readDoubleLE(this.buf, this.pos);
                this.pos += 8;
                return a
            };
            g.prototype.bytes = function () {
                var a = this.uint32(),
                    c = this.pos,
                    b = this.pos + a;
                if (b > this.len) throw f(this, a);
                this.pos += a;
                return Array.isArray(this.buf) ? this.buf.slice(c, b) : c === b ? new this.buf.constructor(0) : this._slice.call(this.buf, c, b)
            };
            g.prototype.string = function () {
                var a = this.bytes();
                return v.read(a, 0, a.length)
            };
            g.prototype.skip = function (a) {
                if ("number" == typeof a) {
                    if (this.pos + a > this.len) throw f(this, a);
                    this.pos +=
                        a
                } else {
                    do
                        if (this.pos >= this.len) throw f(this); while (128 & this.buf[this.pos++])
                }
                return this
            };
            g.prototype.skipType = function (a) {
                switch (a) {
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for (; 4 != (a = 7 & this.uint32());) this.skipType(a);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + a + " at offset " + this.pos);
                }
                return this
            };
            g._configure = function (a) {
                e = a;
                var b = c.Long ? "toLong" : "toNumber";
                c.merge(g.prototype, {
                    int64: function () {
                        return l.call(this)[b](!1)
                    },
                    uint64: function () {
                        return l.call(this)[b](!0)
                    },
                    sint64: function () {
                        return l.call(this).zzDecode()[b](!1)
                    },
                    fixed64: function () {
                        return n.call(this)[b](!0)
                    },
                    sfixed64: function () {
                        return n.call(this)[b](!1)
                    }
                })
            }
        }, function (a, b, d) {
            function f(a, c, b) {
                this.fn = a;
                this.len = c;
                this.next = void 0;
                this.val = b
            }

            function g() {}

            function l(a) {
                this.head = a.head;
                this.tail = a.tail;
                this.len = a.len;
                this.next = a.states
            }

            function h() {
                this.len = 0;
                this.tail = this.head = new f(g, 0, 0);
                this.states = null
            }

            function n(a, c, b) {
                c[b] = 255 & a
            }

            function e(a, c) {
                this.len =
                    a;
                this.next = void 0;
                this.val = c
            }

            function c(a, c, b) {
                for (; a.hi;) c[b++] = 127 & a.lo | 128, a.lo = (a.lo >>> 7 | a.hi << 25) >>> 0, a.hi >>>= 7;
                for (; 127 < a.lo;) c[b++] = 127 & a.lo | 128, a.lo >>>= 7;
                c[b++] = a.lo
            }

            function k(a, c, b) {
                c[b] = 255 & a;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }
            a.exports = h;
            var v, A = d(0),
                p = A.LongBits,
                x = A.base64,
                q = A.utf8;
            h.create = A.Buffer ? function () {
                return (h.create = function () {
                    return new v
                })()
            } : function () {
                return new h
            };
            h.alloc = function (a) {
                return new A.Array(a)
            };
            A.Array !== Array && (h.alloc = A.pool(h.alloc, A.Array.prototype.subarray));
            h.prototype._push = function (a, c, b) {
                this.tail = this.tail.next = new f(a, c, b);
                this.len += c;
                return this
            };
            e.prototype = Object.create(f.prototype);
            e.prototype.fn = function (a, c, b) {
                for (; 127 < a;) c[b++] = 127 & a | 128, a >>>= 7;
                c[b] = a
            };
            h.prototype.uint32 = function (a) {
                this.len += (this.tail = this.tail.next = new e(128 > (a >>>= 0) ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a)).len;
                return this
            };
            h.prototype.int32 = function (a) {
                return 0 > a ? this._push(c, 10, p.fromNumber(a)) : this.uint32(a)
            };
            h.prototype.sint32 = function (a) {
                return this.uint32((a <<
                    1 ^ a >> 31) >>> 0)
            };
            h.prototype.uint64 = function (a) {
                a = p.from(a);
                return this._push(c, a.length(), a)
            };
            h.prototype.int64 = h.prototype.uint64;
            h.prototype.sint64 = function (a) {
                a = p.from(a).zzEncode();
                return this._push(c, a.length(), a)
            };
            h.prototype.bool = function (a) {
                return this._push(n, 1, a ? 1 : 0)
            };
            h.prototype.fixed32 = function (a) {
                return this._push(k, 4, a >>> 0)
            };
            h.prototype.sfixed32 = h.prototype.fixed32;
            h.prototype.fixed64 = function (a) {
                a = p.from(a);
                return this._push(k, 4, a.lo)._push(k, 4, a.hi)
            };
            h.prototype.sfixed64 = h.prototype.fixed64;
            h.prototype["float"] = function (a) {
                return this._push(A["float"].writeFloatLE, 4, a)
            };
            h.prototype["double"] = function (a) {
                return this._push(A["float"].writeDoubleLE, 8, a)
            };
            var r = A.Array.prototype.set ? function (a, c, b) {
                c.set(a, b)
            } : function (a, c, b) {
                for (var e = 0; e < a.length; ++e) c[b + e] = a[e]
            };
            h.prototype.bytes = function (a) {
                var c = a.length >>> 0;
                if (!c) return this._push(n, 1, 0);
                if (A.isString(a)) {
                    var b = h.alloc(c = x.length(a));
                    x.decode(a, b, 0);
                    a = b
                }
                return this.uint32(c)._push(r, c, a)
            };
            h.prototype.string = function (a) {
                var c = q.length(a);
                return c ? this.uint32(c)._push(q.write, c, a) : this._push(n, 1, 0)
            };
            h.prototype.fork = function () {
                this.states = new l(this);
                this.head = this.tail = new f(g, 0, 0);
                this.len = 0;
                return this
            };
            h.prototype.reset = function () {
                this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new f(g, 0, 0), this.len = 0);
                return this
            };
            h.prototype.ldelim = function () {
                var a = this.head,
                    c = this.tail,
                    b = this.len;
                this.reset().uint32(b);
                b && (this.tail.next = a.next, this.tail =
                    c, this.len += b);
                return this
            };
            h.prototype.finish = function () {
                for (var a = this.head.next, c = this.constructor.alloc(this.len), b = 0; a;) a.fn(a.val, c, b), b += a.len, a = a.next;
                return c
            };
            h._configure = function (a) {
                v = a
            }
        }, function (a, b, d) {
            a.exports = {}
        }, function (a, b, d) {
            function f(a, b, d) {
                if ("function" != typeof a) throw TypeError("rpcImpl must be a function");
                g.EventEmitter.call(this);
                this.rpcImpl = a;
                this.requestDelimited = !!b;
                this.responseDelimited = !!d
            }
            a.exports = f;
            var g = d(0);
            (f.prototype = Object.create(g.EventEmitter.prototype)).constructor =
                f;
            f.prototype.rpcCall = function v(a, b, e, c, d) {
                if (!c) throw TypeError("request must be specified");
                var f = this;
                if (!d) return g.asPromise(v, f, a, b, e, c);
                if (f.rpcImpl) try {
                    return f.rpcImpl(a, b[f.requestDelimited ? "encodeDelimited" : "encode"](c).finish(), function (c, b) {
                        if (c) return f.emit("error", c, a), d(c);
                        if (null !== b) {
                            if (!(b instanceof e)) try {
                                b = e[f.responseDelimited ? "decodeDelimited" : "decode"](b)
                            } catch (F) {
                                return f.emit("error", F, a), d(F)
                            }
                            f.emit("data", b, a);
                            return d(null, b)
                        }
                        f.end(!0)
                    })
                } catch (M) {
                    f.emit("error", M, a),
                        E(function () {
                            d(M)
                        }, 0)
                } else E(function () {
                    d(Error("already ended"))
                }, 0)
            };
            f.prototype.end = function (a) {
                this.rpcImpl && (a || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off());
                return this
            }
        }, function (a, b, d) {
            b.Service = d(4)
        }, function (a, b, d) {
            function f(a) {
                g.call(this, a)
            }
            a.exports = f;
            var g = d(1);
            (f.prototype = Object.create(g.prototype)).constructor = f;
            a = d(0);
            a.Buffer && (f.prototype._slice = a.Buffer.prototype.slice);
            f.prototype.string = function () {
                var a = this.uint32();
                return this.buf.utf8Slice(this.pos,
                    this.pos = Math.min(this.pos + a, this.len))
            }
        }, function (a, b, d) {
            function f() {
                l.call(this)
            }

            function g(a, b, e) {
                40 > a.length ? h.utf8.write(a, b, e) : b.utf8Write(a, e)
            }
            a.exports = f;
            var l = d(2);
            (f.prototype = Object.create(l.prototype)).constructor = f;
            var h = d(0),
                n = h.Buffer;
            f.alloc = function (a) {
                return (f.alloc = h._Buffer_allocUnsafe)(a)
            };
            var e = n && n.prototype instanceof Uint8Array && "set" === n.prototype.set.name ? function (a, b, e) {
                b.set(a, e)
            } : function (a, b, e) {
                if (a.copy) a.copy(b, e, 0, a.length);
                else
                    for (var c = 0; c < a.length;) b[e++] = a[c++]
            };
            f.prototype.bytes = function (a) {
                h.isString(a) && (a = h._Buffer_from(a, "base64"));
                var c = a.length >>> 0;
                this.uint32(c);
                c && this._push(e, c, a);
                return this
            };
            f.prototype.string = function (a) {
                var c = n.byteLength(a);
                this.uint32(c);
                c && this._push(g, c, a);
                return this
            }
        }, function (a, b, d) {
            function f(a, c) {
                this.lo = a >>> 0;
                this.hi = c >>> 0
            }
            a.exports = f;
            var g = d(0),
                l = f.zero = new f(0, 0);
            l.toNumber = function () {
                return 0
            };
            l.zzEncode = l.zzDecode = function () {
                return this
            };
            l.length = function () {
                return 1
            };
            var h = f.zeroHash = "\x00\x00\x00\x00\x00\x00\x00\x00";
            f.fromNumber = function (a) {
                if (0 === a) return l;
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return new f(b, a)
            };
            f.from = function (a) {
                if ("number" == typeof a) return f.fromNumber(a);
                if (g.isString(a)) {
                    if (!g.Long) return f.fromNumber(parseInt(a, 10));
                    a = g.Long.fromString(a)
                }
                return a.low || a.high ? new f(a.low >>> 0, a.high >>> 0) : l
            };
            f.prototype.toNumber = function (a) {
                if (!a && this.hi >>> 31) {
                    a = 1 + ~this.lo >>> 0;
                    var c = ~this.hi >>> 0;
                    a || (c = c + 1 >>> 0);
                    return -(a +
                        4294967296 * c)
                }
                return this.lo + 4294967296 * this.hi
            };
            f.prototype.toLong = function (a) {
                return g.Long ? new g.Long(0 | this.lo, 0 | this.hi, !!a) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: !!a
                }
            };
            var n = String.prototype.charCodeAt;
            f.fromHash = function (a) {
                return a === h ? l : new f((n.call(a, 0) | n.call(a, 1) << 8 | n.call(a, 2) << 16 | n.call(a, 3) << 24) >>> 0, (n.call(a, 4) | n.call(a, 5) << 8 | n.call(a, 6) << 16 | n.call(a, 7) << 24) >>> 0)
            };
            f.prototype.toHash = function () {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 &
                    this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            };
            f.prototype.zzEncode = function () {
                var a = this.hi >> 31;
                this.hi = ((this.hi << 1 | this.lo >>> 31) ^ a) >>> 0;
                this.lo = (this.lo << 1 ^ a) >>> 0;
                return this
            };
            f.prototype.zzDecode = function () {
                var a = -(1 & this.lo);
                this.lo = ((this.lo >>> 1 | this.hi << 31) ^ a) >>> 0;
                this.hi = (this.hi >>> 1 ^ a) >>> 0;
                return this
            };
            f.prototype.length = function () {
                var a = this.lo,
                    c = (this.lo >>> 28 | this.hi << 4) >>> 0,
                    b = this.hi >>> 24;
                return 0 === b ? 0 === c ? 16384 > a ? 128 > a ? 1 : 2 : 2097152 > a ? 3 : 4 : 16384 > c ? 128 > c ? 5 : 6 : 2097152 > c ? 7 : 8 : 128 > b ?
                    9 : 10
            }
        }, function (a, b, d) {
            a.exports = function (a, b, d) {
                var f = d || 8192,
                    g = f >>> 1,
                    e = null,
                    c = f;
                return function (d) {
                    if (1 > d || d > g) return a(d);
                    c + d > f && (e = a(f), c = 0);
                    d = b.call(e, c, c += d);
                    7 & c && (c = 1 + (7 | c));
                    return d
                }
            }
        }, function (a, b, d) {
            b.length = function (a) {
                for (var b = 0, d, f = 0; f < a.length; ++f) d = a.charCodeAt(f), 128 > d ? b += 1 : 2048 > d ? b += 2 : 55296 == (64512 & d) && 56320 == (64512 & a.charCodeAt(f + 1)) ? (++f, b += 4) : b += 3;
                return b
            };
            b.read = function (a, b, d) {
                if (1 > d - b) return "";
                for (var f, g = null, e = [], c = 0; b < d;) f = a[b++], 128 > f ? e[c++] = f : 191 < f && 224 > f ? e[c++] = (31 &
                    f) << 6 | 63 & a[b++] : 239 < f && 365 > f ? (f = ((7 & f) << 18 | (63 & a[b++]) << 12 | (63 & a[b++]) << 6 | 63 & a[b++]) - 65536, e[c++] = 55296 + (f >> 10), e[c++] = 56320 + (1023 & f)) : e[c++] = (15 & f) << 12 | (63 & a[b++]) << 6 | 63 & a[b++], 8191 < c && ((g || (g = [])).push(String.fromCharCode.apply(String, e)), c = 0);
                return g ? (c && g.push(String.fromCharCode.apply(String, e.slice(0, c))), g.join("")) : String.fromCharCode.apply(String, e.slice(0, c))
            };
            b.write = function (a, b, d) {
                for (var f, g, e = d, c = 0; c < a.length; ++c) f = a.charCodeAt(c), 128 > f ? b[d++] = f : (2048 > f ? b[d++] = f >> 6 | 192 : (55296 == (64512 &
                    f) && 56320 == (64512 & (g = a.charCodeAt(c + 1))) ? (f = 65536 + ((1023 & f) << 10) + (1023 & g), ++c, b[d++] = f >> 18 | 240, b[d++] = f >> 12 & 63 | 128) : b[d++] = f >> 12 | 224, b[d++] = f >> 6 & 63 | 128), b[d++] = 63 & f | 128);
                return d - e
            }
        }, function (a, b, d) {
            a.exports = function (a) {
                return null
            }
        }, function (a, b, d) {
            function f(a) {
                "undefined" != typeof Float32Array ? function () {
                    function c(a, c, b) {
                        f[0] = a;
                        c[b] = g[0];
                        c[b + 1] = g[1];
                        c[b + 2] = g[2];
                        c[b + 3] = g[3]
                    }

                    function b(a, c, b) {
                        f[0] = a;
                        c[b] = g[3];
                        c[b + 1] = g[2];
                        c[b + 2] = g[1];
                        c[b + 3] = g[0]
                    }

                    function e(a, c) {
                        g[0] = a[c];
                        g[1] = a[c + 1];
                        g[2] = a[c + 2];
                        g[3] = a[c + 3];
                        return f[0]
                    }

                    function d(a, c) {
                        g[3] = a[c];
                        g[2] = a[c + 1];
                        g[1] = a[c + 2];
                        g[0] = a[c + 3];
                        return f[0]
                    }
                    var f = new Float32Array([-0]),
                        g = new Uint8Array(f.buffer),
                        h = 128 === g[3];
                    a.writeFloatLE = h ? c : b;
                    a.writeFloatBE = h ? b : c;
                    a.readFloatLE = h ? e : d;
                    a.readFloatBE = h ? d : e
                }() : function () {
                    function c(a, c, b, e) {
                        var d = 0 > c ? 1 : 0;
                        d && (c = -c);
                        if (0 === c) a(0 < 1 / c ? 0 : 2147483648, b, e);
                        else if (isNaN(c)) a(2143289344, b, e);
                        else if (3.4028234663852886e+38 < c) a((d << 31 | 2139095040) >>> 0, b, e);
                        else if (1.1754943508222875e-38 > c) a((d << 31 | Math.round(c / 1.401298464324817e-45)) >>>
                            0, b, e);
                        else {
                            var f = Math.floor(Math.log(c) / Math.LN2);
                            a((d << 31 | f + 127 << 23 | 8388607 & Math.round(c * Math.pow(2, -f) * 8388608)) >>> 0, b, e)
                        }
                    }

                    function b(a, c, b) {
                        b = a(c, b);
                        a = 2 * (b >> 31) + 1;
                        c = b >>> 23 & 255;
                        b &= 8388607;
                        return 255 === c ? b ? NaN : 1 / 0 * a : 0 === c ? 1.401298464324817e-45 * a * b : a * Math.pow(2, c - 150) * (b + 8388608)
                    }
                    a.writeFloatLE = c.bind(null, g);
                    a.writeFloatBE = c.bind(null, l);
                    a.readFloatLE = b.bind(null, h);
                    a.readFloatBE = b.bind(null, n)
                }();
                "undefined" != typeof Float64Array ? function () {
                    function c(a, c, b) {
                        f[0] = a;
                        c[b] = g[0];
                        c[b + 1] = g[1];
                        c[b + 2] =
                            g[2];
                        c[b + 3] = g[3];
                        c[b + 4] = g[4];
                        c[b + 5] = g[5];
                        c[b + 6] = g[6];
                        c[b + 7] = g[7]
                    }

                    function b(a, c, b) {
                        f[0] = a;
                        c[b] = g[7];
                        c[b + 1] = g[6];
                        c[b + 2] = g[5];
                        c[b + 3] = g[4];
                        c[b + 4] = g[3];
                        c[b + 5] = g[2];
                        c[b + 6] = g[1];
                        c[b + 7] = g[0]
                    }

                    function e(a, c) {
                        g[0] = a[c];
                        g[1] = a[c + 1];
                        g[2] = a[c + 2];
                        g[3] = a[c + 3];
                        g[4] = a[c + 4];
                        g[5] = a[c + 5];
                        g[6] = a[c + 6];
                        g[7] = a[c + 7];
                        return f[0]
                    }

                    function d(a, c) {
                        g[7] = a[c];
                        g[6] = a[c + 1];
                        g[5] = a[c + 2];
                        g[4] = a[c + 3];
                        g[3] = a[c + 4];
                        g[2] = a[c + 5];
                        g[1] = a[c + 6];
                        g[0] = a[c + 7];
                        return f[0]
                    }
                    var f = new Float64Array([-0]),
                        g = new Uint8Array(f.buffer),
                        h = 128 === g[7];
                    a.writeDoubleLE =
                        h ? c : b;
                    a.writeDoubleBE = h ? b : c;
                    a.readDoubleLE = h ? e : d;
                    a.readDoubleBE = h ? d : e
                }() : function () {
                    function c(a, c, b, e, d, f) {
                        var k = 0 > e ? 1 : 0;
                        k && (e = -e);
                        if (0 === e) a(0, d, f + c), a(0 < 1 / e ? 0 : 2147483648, d, f + b);
                        else if (isNaN(e)) a(0, d, f + c), a(2146959360, d, f + b);
                        else if (1.7976931348623157e+308 < e) a(0, d, f + c), a((k << 31 | 2146435072) >>> 0, d, f + b);
                        else if (2.2250738585072014e-308 > e) e /= 5e-324, a(e >>> 0, d, f + c), a((k << 31 | e / 4294967296) >>> 0, d, f + b);
                        else {
                            var g = Math.floor(Math.log(e) / Math.LN2);
                            1024 === g && (g = 1023);
                            e *= Math.pow(2, -g);
                            a(4503599627370496 * e >>>
                                0, d, f + c);
                            a((k << 31 | g + 1023 << 20 | 1048576 * e & 1048575) >>> 0, d, f + b)
                        }
                    }

                    function b(a, c, b, e, d) {
                        c = a(e, d + c);
                        e = a(e, d + b);
                        a = 2 * (e >> 31) + 1;
                        b = e >>> 20 & 2047;
                        c = 4294967296 * (1048575 & e) + c;
                        return 2047 === b ? c ? NaN : 1 / 0 * a : 0 === b ? 5e-324 * a * c : a * Math.pow(2, b - 1075) * (c + 4503599627370496)
                    }
                    a.writeDoubleLE = c.bind(null, g, 0, 4);
                    a.writeDoubleBE = c.bind(null, l, 4, 0);
                    a.readDoubleLE = b.bind(null, h, 0, 4);
                    a.readDoubleBE = b.bind(null, n, 4, 0)
                }();
                return a
            }

            function g(a, c, b) {
                c[b] = 255 & a;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function l(a, c, b) {
                c[b] = a >>>
                    24;
                c[b + 1] = a >>> 16 & 255;
                c[b + 2] = a >>> 8 & 255;
                c[b + 3] = 255 & a
            }

            function h(a, c) {
                return (a[c] | a[c + 1] << 8 | a[c + 2] << 16 | a[c + 3] << 24) >>> 0
            }

            function n(a, c) {
                return (a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3]) >>> 0
            }
            a.exports = f(f)
        }, function (a, b, d) {
            function f() {
                this._listeners = {}
            }
            a.exports = f;
            f.prototype.on = function (a, b, d) {
                (this._listeners[a] || (this._listeners[a] = [])).push({
                    fn: b,
                    ctx: d || this
                });
                return this
            };
            f.prototype.off = function (a, b) {
                if (void 0 === a) this._listeners = {};
                else if (void 0 === b) this._listeners[a] = [];
                else
                    for (var d = this._listeners[a],
                             f = 0; f < d.length;) d[f].fn === b ? d.splice(f, 1) : ++f;
                return this
            };
            f.prototype.emit = function (a) {
                var b = this._listeners[a];
                if (b) {
                    for (var d = [], f = 1; f < arguments.length;) d.push(arguments[f++]);
                    for (f = 0; f < b.length;) b[f].fn.apply(b[f++].ctx, d)
                }
                return this
            }
        }, function (a, b, d) {
            b.length = function (a) {
                var b = a.length;
                if (!b) return 0;
                for (var d = 0; 1 < --b % 4 && "\x3d" === a.charAt(b);) ++d;
                return Math.ceil(3 * a.length) / 4 - d
            };
            var f = Array(64),
                g = Array(123);
            for (a = 0; 64 > a;) g[f[a] = 26 > a ? a + 65 : 52 > a ? a + 71 : 62 > a ? a - 4 : a - 59 | 43] = a++;
            b.encode = function (a,
                                 b, d) {
                for (var e, c = null, k = [], g = 0, h = 0; b < d;) {
                    var n = a[b++];
                    switch (h) {
                        case 0:
                            k[g++] = f[n >> 2];
                            e = (3 & n) << 4;
                            h = 1;
                            break;
                        case 1:
                            k[g++] = f[e | n >> 4];
                            e = (15 & n) << 2;
                            h = 2;
                            break;
                        case 2:
                            k[g++] = f[e | n >> 6], k[g++] = f[63 & n], h = 0
                    }
                    8191 < g && ((c || (c = [])).push(String.fromCharCode.apply(String, k)), g = 0)
                }
                h && (k[g++] = f[e], k[g++] = 61, 1 === h && (k[g++] = 61));
                return c ? (g && c.push(String.fromCharCode.apply(String, k.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, k.slice(0, g))
            };
            b.decode = function (a, b, d) {
                for (var e, c = d, f = 0, h = 0; h < a.length;) {
                    var n =
                        a.charCodeAt(h++);
                    if (61 === n && 1 < f) break;
                    if (void 0 === (n = g[n])) throw Error("invalid encoding");
                    switch (f) {
                        case 0:
                            e = n;
                            f = 1;
                            break;
                        case 1:
                            b[d++] = e << 2 | (48 & n) >> 4;
                            e = n;
                            f = 2;
                            break;
                        case 2:
                            b[d++] = (15 & e) << 4 | (60 & n) >> 2;
                            e = n;
                            f = 3;
                            break;
                        case 3:
                            b[d++] = (3 & e) << 6 | n, f = 0
                    }
                }
                if (1 === f) throw Error("invalid encoding");
                return d - c
            };
            b.test = function (a) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)
            }
        }, function (a, b, d) {
            a.exports = function (a, b) {
                for (var d = Array(arguments.length - 1), f = 0, g = 2, e = !0; g < arguments.length;) d[f++] =
                    arguments[g++];
                return new Promise(function (c, k) {
                    d[f] = function (a) {
                        if (e)
                            if (e = !1, a) k(a);
                            else {
                                for (var b = Array(arguments.length - 1), d = 0; d < b.length;) b[d++] = arguments[d];
                                c.apply(null, b)
                            }
                    };
                    try {
                        a.apply(b || null, d)
                    } catch (v) {
                        e && (e = !1, k(v))
                    }
                })
            }
        }, function (a, b, d) {
            function f() {
                g.Reader._configure(g.BufferReader);
                g.util._configure()
            }
            var g = b;
            g.build = "minimal";
            g.Writer = d(2);
            g.BufferWriter = d(7);
            g.Reader = d(1);
            g.BufferReader = d(6);
            g.util = d(0);
            g.rpc = d(5);
            g.roots = d(3);
            g.configure = f;
            g.Writer._configure(g.BufferWriter);
            f()
        },
            function (a, b, d) {
                a.exports = d(16)
            },
            function (a, b, d) {
                b = d(17);
                var f = b.Reader,
                    g = b.Writer,
                    l = b.util,
                    h = b.roots["default"] || (b.roots["default"] = {});
                h.BufferWrapper = function () {
                    function a(a) {
                        this.buffer = [];
                        if (a)
                            for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                    }
                    a.prototype.buffer = l.emptyArray;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, c) {
                        c || (c = g.create());
                        if (null != a.buffer && a.buffer.length)
                            for (var b = 0; b < a.buffer.length; ++b) h.Buffer.encode(a.buffer[b], c.uint32(10).fork()).ldelim();
                        return c
                    };
                    a.decode = function (a, c) {
                        a instanceof f || (a = f.create(a));
                        for (var b = void 0 === c ? a.len : a.pos + c, e = new h.BufferWrapper; a.pos < b;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.buffer && e.buffer.length || (e.buffer = []);
                                    e.buffer.push(h.Buffer.decode(a, a.uint32()));
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.Buffer = function () {
                    function a(a) {
                        if (a)
                            for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                    }
                    a.prototype.stamp = 0;
                    a.prototype.data = null;
                    a.prototype.page = 0;
                    a.prototype.chunk =
                        l.newBuffer([]);
                    a.prototype.end = !1;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, c) {
                        c || (c = g.create());
                        null != a.stamp && a.hasOwnProperty("stamp") && c.uint32(8).int32(a.stamp);
                        null != a.data && a.hasOwnProperty("data") && h.Wrapper.encode(a.data, c.uint32(18).fork()).ldelim();
                        null != a.page && a.hasOwnProperty("page") && c.uint32(24).int32(a.page);
                        null != a.chunk && a.hasOwnProperty("chunk") && c.uint32(34).bytes(a.chunk);
                        null != a.end && a.hasOwnProperty("end") && c.uint32(40).bool(a.end);
                        return c
                    };
                    a.decode = function (a,
                                         c) {
                        a instanceof f || (a = f.create(a));
                        for (var b = void 0 === c ? a.len : a.pos + c, e = new h.Buffer; a.pos < b;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.stamp = a.int32();
                                    break;
                                case 2:
                                    e.data = h.Wrapper.decode(a, a.uint32());
                                    break;
                                case 3:
                                    e.page = a.int32();
                                    break;
                                case 4:
                                    e.chunk = a.bytes();
                                    break;
                                case 5:
                                    e.end = a.bool();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.Wrapper = function () {
                    function a(a) {
                        if (a)
                            for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                    }
                    a.prototype.page = null;
                    a.prototype.mutation =
                        null;
                    a.prototype.event = null;
                    a.prototype.articleInfo = null;
                    a.prototype.publishersHeader = null;
                    a.prototype.activity = 0;
                    var b;
                    Object.defineProperty(a.prototype, "data", {
                        get: l.oneOfGetter(b = "page mutation event articleInfo publishersHeader activity".split(" ")),
                        set: l.oneOfSetter(b)
                    });
                    a.create = function (c) {
                        return new a(c)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.page && a.hasOwnProperty("page") && h.Page.encode(a.page, b.uint32(10).fork()).ldelim();
                        null != a.mutation && a.hasOwnProperty("mutation") && h.Mutation.encode(a.mutation,
                            b.uint32(18).fork()).ldelim();
                        null != a.event && a.hasOwnProperty("event") && h.Event.encode(a.event, b.uint32(26).fork()).ldelim();
                        null != a.articleInfo && a.hasOwnProperty("articleInfo") && h.ArticleInfo.encode(a.articleInfo, b.uint32(34).fork()).ldelim();
                        null != a.publishersHeader && a.hasOwnProperty("publishersHeader") && h.PublishersHeader.encode(a.publishersHeader, b.uint32(42).fork()).ldelim();
                        null != a.activity && a.hasOwnProperty("activity") && b.uint32(48).uint32(a.activity);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof
                        f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Wrapper; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.page = h.Page.decode(a, a.uint32());
                                    break;
                                case 2:
                                    e.mutation = h.Mutation.decode(a, a.uint32());
                                    break;
                                case 3:
                                    e.event = h.Event.decode(a, a.uint32());
                                    break;
                                case 4:
                                    e.articleInfo = h.ArticleInfo.decode(a, a.uint32());
                                    break;
                                case 5:
                                    e.publishersHeader = h.PublishersHeader.decode(a, a.uint32());
                                    break;
                                case 6:
                                    e.activity = a.uint32();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.Page = function () {
                    function a(a) {
                        this.content = [];
                        if (a)
                            for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                    }
                    a.prototype.meta = null;
                    a.prototype.content = l.emptyArray;
                    a.prototype.frameId = 0;
                    a.prototype.tabId = "";
                    a.prototype.recordStamp = l.Long ? l.Long.fromBits(0, 0, !1) : 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, c) {
                        c || (c = g.create());
                        null != a.meta && a.hasOwnProperty("meta") && h.Page.Meta.encode(a.meta, c.uint32(10).fork()).ldelim();
                        if (null != a.content && a.content.length)
                            for (var b = 0; b < a.content.length; ++b) h.Page.Content.encode(a.content[b],
                                c.uint32(18).fork()).ldelim();
                        null != a.frameId && a.hasOwnProperty("frameId") && c.uint32(24).sint32(a.frameId);
                        null != a.tabId && a.hasOwnProperty("tabId") && c.uint32(34).string(a.tabId);
                        null != a.recordStamp && a.hasOwnProperty("recordStamp") && c.uint32(40).int64(a.recordStamp);
                        return c
                    };
                    a.decode = function (a, c) {
                        a instanceof f || (a = f.create(a));
                        for (var b = void 0 === c ? a.len : a.pos + c, e = new h.Page; a.pos < b;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.meta = h.Page.Meta.decode(a, a.uint32());
                                    break;
                                case 2:
                                    e.content && e.content.length ||
                                    (e.content = []);
                                    e.content.push(h.Page.Content.decode(a, a.uint32()));
                                    break;
                                case 3:
                                    e.frameId = a.sint32();
                                    break;
                                case 4:
                                    e.tabId = a.string();
                                    break;
                                case 5:
                                    e.recordStamp = a.int64();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    a.Box = function () {
                        function a(a) {
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.width = 0;
                        a.prototype.height = 0;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.width && a.hasOwnProperty("width") && b.uint32(8).int32(a.width);
                            null != a.height && a.hasOwnProperty("height") && b.uint32(16).int32(a.height);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Page.Box; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.width = a.int32();
                                        break;
                                    case 2:
                                        e.height = a.int32();
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    a.Location = function () {
                        function a(a) {
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.host = "";
                        a.prototype.protocol =
                            "";
                        a.prototype.path = "";
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.host && a.hasOwnProperty("host") && b.uint32(10).string(a.host);
                            null != a.protocol && a.hasOwnProperty("protocol") && b.uint32(18).string(a.protocol);
                            null != a.path && a.hasOwnProperty("path") && b.uint32(26).string(a.path);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Page.Location; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.host = a.string();
                                        break;
                                    case 2:
                                        e.protocol = a.string();
                                        break;
                                    case 3:
                                        e.path = a.string();
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    a.Scroll = function () {
                        function a(a) {
                            this.scroll = [];
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.target = 0;
                        a.prototype.scroll = l.emptyArray;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.target && a.hasOwnProperty("target") && b.uint32(8).int32(a.target);
                            if (null != a.scroll && a.scroll.length) {
                                b.uint32(18).fork();
                                for (var c = 0; c < a.scroll.length; ++c) b.int32(a.scroll[c]);
                                b.ldelim()
                            }
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Page.Scroll; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.target = a.int32();
                                        break;
                                    case 2:
                                        e.scroll && e.scroll.length || (e.scroll = []);
                                        if (2 == (7 & d))
                                            for (d = a.uint32() + a.pos; a.pos < d;) e.scroll.push(a.int32());
                                        else e.scroll.push(a.int32());
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    a.Meta = function () {
                        function a(a) {
                            this.initialScroll = [];
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.doctype = "";
                        a.prototype.title = "";
                        a.prototype.address = "";
                        a.prototype.ua = "";
                        a.prototype.referrer = "";
                        a.prototype.base = "";
                        a.prototype.hasBase = !1;
                        a.prototype.screen = null;
                        a.prototype.viewport = null;
                        a.prototype.location = null;
                        a.prototype.initialScroll = l.emptyArray;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.doctype && a.hasOwnProperty("doctype") && b.uint32(10).string(a.doctype);
                            null != a.title && a.hasOwnProperty("title") && b.uint32(18).string(a.title);
                            null != a.address && a.hasOwnProperty("address") && b.uint32(26).string(a.address);
                            null != a.ua && a.hasOwnProperty("ua") && b.uint32(34).string(a.ua);
                            null != a.referrer && a.hasOwnProperty("referrer") && b.uint32(42).string(a.referrer);
                            null != a.base && a.hasOwnProperty("base") && b.uint32(50).string(a.base);
                            null != a.hasBase && a.hasOwnProperty("hasBase") && b.uint32(56).bool(a.hasBase);
                            null != a.screen && a.hasOwnProperty("screen") && h.Page.Box.encode(a.screen,
                                b.uint32(66).fork()).ldelim();
                            null != a.viewport && a.hasOwnProperty("viewport") && h.Page.Box.encode(a.viewport, b.uint32(74).fork()).ldelim();
                            null != a.location && a.hasOwnProperty("location") && h.Page.Location.encode(a.location, b.uint32(82).fork()).ldelim();
                            if (null != a.initialScroll && a.initialScroll.length)
                                for (var c = 0; c < a.initialScroll.length; ++c) h.Page.Scroll.encode(a.initialScroll[c], b.uint32(90).fork()).ldelim();
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len :
                                a.pos + b, e = new h.Page.Meta; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.doctype = a.string();
                                        break;
                                    case 2:
                                        e.title = a.string();
                                        break;
                                    case 3:
                                        e.address = a.string();
                                        break;
                                    case 4:
                                        e.ua = a.string();
                                        break;
                                    case 5:
                                        e.referrer = a.string();
                                        break;
                                    case 6:
                                        e.base = a.string();
                                        break;
                                    case 7:
                                        e.hasBase = a.bool();
                                        break;
                                    case 8:
                                        e.screen = h.Page.Box.decode(a, a.uint32());
                                        break;
                                    case 9:
                                        e.viewport = h.Page.Box.decode(a, a.uint32());
                                        break;
                                    case 10:
                                        e.location = h.Page.Location.decode(a, a.uint32());
                                        break;
                                    case 11:
                                        e.initialScroll && e.initialScroll.length ||
                                        (e.initialScroll = []);
                                        e.initialScroll.push(h.Page.Scroll.decode(a, a.uint32()));
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    a.Content = function () {
                        function a(a) {
                            this.attributes = {};
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.id = 0;
                        a.prototype.name = "";
                        a.prototype.attributes = l.emptyObject;
                        a.prototype.parent = 0;
                        a.prototype.content = "";
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.id && a.hasOwnProperty("id") &&
                            b.uint32(8).int32(a.id);
                            null != a.name && a.hasOwnProperty("name") && b.uint32(18).string(a.name);
                            if (null != a.attributes && a.hasOwnProperty("attributes"))
                                for (var c = Object.keys(a.attributes), e = 0; e < c.length; ++e) b.uint32(26).fork().uint32(10).string(c[e]).uint32(18).string(a.attributes[c[e]]).ldelim();
                            null != a.parent && a.hasOwnProperty("parent") && b.uint32(32).int32(a.parent);
                            null != a.content && a.hasOwnProperty("content") && b.uint32(42).string(a.content);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c, e = void 0 === b ? a.len : a.pos + b, d = new h.Page.Content; a.pos < e;) switch (c = a.uint32(), c >>> 3) {
                                case 1:
                                    d.id = a.int32();
                                    break;
                                case 2:
                                    d.name = a.string();
                                    break;
                                case 3:
                                    a.skip().pos++;
                                    d.attributes === l.emptyObject && (d.attributes = {});
                                    c = a.string();
                                    a.pos++;
                                    d.attributes[c] = a.string();
                                    break;
                                case 4:
                                    d.parent = a.int32();
                                    break;
                                case 5:
                                    d.content = a.string();
                                    break;
                                default:
                                    a.skipType(7 & c)
                            }
                            return d
                        };
                        return a
                    }();
                    return a
                }();
                h.Mutation = function () {
                    function a(a) {
                        if (a)
                            for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] &&
                            (this[c[b]] = a[c[b]])
                    }
                    a.prototype.target = 0;
                    a.prototype.stamp = 0;
                    a.prototype.meta = null;
                    a.prototype.frameId = 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, c) {
                        c || (c = g.create());
                        null != a.target && a.hasOwnProperty("target") && c.uint32(8).int32(a.target);
                        null != a.stamp && a.hasOwnProperty("stamp") && c.uint32(16).int32(a.stamp);
                        null != a.meta && a.hasOwnProperty("meta") && h.Mutation.Meta.encode(a.meta, c.uint32(26).fork()).ldelim();
                        null != a.frameId && a.hasOwnProperty("frameId") && c.uint32(32).sint32(a.frameId);
                        return c
                    };
                    a.decode = function (a, c) {
                        a instanceof f || (a = f.create(a));
                        for (var b = void 0 === c ? a.len : a.pos + c, e = new h.Mutation; a.pos < b;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.target = a.int32();
                                    break;
                                case 2:
                                    e.stamp = a.int32();
                                    break;
                                case 3:
                                    e.meta = h.Mutation.Meta.decode(a, a.uint32());
                                    break;
                                case 4:
                                    e.frameId = a.sint32();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    a.Delete = function () {
                        function a(a) {
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.id = 0;
                        a.prototype.pr = 0;
                        a.prototype.nx =
                            0;
                        a.prototype.pa = 0;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.id && a.hasOwnProperty("id") && b.uint32(8).int32(a.id);
                            null != a.pr && a.hasOwnProperty("pr") && b.uint32(16).int32(a.pr);
                            null != a.nx && a.hasOwnProperty("nx") && b.uint32(24).int32(a.nx);
                            null != a.pa && a.hasOwnProperty("pa") && b.uint32(32).int32(a.pa);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Mutation.Delete; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>>
                                3) {
                                    case 1:
                                        e.id = a.int32();
                                        break;
                                    case 2:
                                        e.pr = a.int32();
                                        break;
                                    case 3:
                                        e.nx = a.int32();
                                        break;
                                    case 4:
                                        e.pa = a.int32();
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    a.Add = function () {
                        function a(a) {
                            this.at = {};
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.id = 0;
                        a.prototype.nm = "";
                        a.prototype.pa = 0;
                        a.prototype.ns = "";
                        a.prototype.pr = 0;
                        a.prototype.at = l.emptyObject;
                        a.prototype.ct = "";
                        a.prototype.nx = 0;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b ||
                            (b = g.create());
                            null != a.id && a.hasOwnProperty("id") && b.uint32(8).int32(a.id);
                            null != a.nm && a.hasOwnProperty("nm") && b.uint32(18).string(a.nm);
                            null != a.pa && a.hasOwnProperty("pa") && b.uint32(24).int32(a.pa);
                            null != a.ns && a.hasOwnProperty("ns") && b.uint32(34).string(a.ns);
                            null != a.pr && a.hasOwnProperty("pr") && b.uint32(40).int32(a.pr);
                            if (null != a.at && a.hasOwnProperty("at"))
                                for (var c = Object.keys(a.at), e = 0; e < c.length; ++e) b.uint32(50).fork().uint32(10).string(c[e]).uint32(18).string(a.at[c[e]]).ldelim();
                            null != a.ct &&
                            a.hasOwnProperty("ct") && b.uint32(58).string(a.ct);
                            null != a.nx && a.hasOwnProperty("nx") && b.uint32(64).int32(a.nx);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c, e = void 0 === b ? a.len : a.pos + b, d = new h.Mutation.Add; a.pos < e;) switch (c = a.uint32(), c >>> 3) {
                                case 1:
                                    d.id = a.int32();
                                    break;
                                case 2:
                                    d.nm = a.string();
                                    break;
                                case 3:
                                    d.pa = a.int32();
                                    break;
                                case 4:
                                    d.ns = a.string();
                                    break;
                                case 5:
                                    d.pr = a.int32();
                                    break;
                                case 6:
                                    a.skip().pos++;
                                    d.at === l.emptyObject && (d.at = {});
                                    c = a.string();
                                    a.pos++;
                                    d.at[c] = a.string();
                                    break;
                                case 7:
                                    d.ct = a.string();
                                    break;
                                case 8:
                                    d.nx = a.int32();
                                    break;
                                default:
                                    a.skipType(7 & c)
                            }
                            return d
                        };
                        return a
                    }();
                    a.BeforeAfter = function () {
                        function a(a) {
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.o = "";
                        a.prototype.n = "";
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.o && a.hasOwnProperty("o") && b.uint32(10).string(a.o);
                            null != a.n && a.hasOwnProperty("n") && b.uint32(18).string(a.n);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof
                            f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Mutation.BeforeAfter; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.o = a.string();
                                        break;
                                    case 2:
                                        e.n = a.string();
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    a.AttributeChange = function () {
                        function a(a) {
                            this.at = {};
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.id = 0;
                        a.prototype.at = l.emptyObject;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.id &&
                            a.hasOwnProperty("id") && b.uint32(8).int32(a.id);
                            if (null != a.at && a.hasOwnProperty("at"))
                                for (var c = Object.keys(a.at), e = 0; e < c.length; ++e) b.uint32(18).fork().uint32(10).string(c[e]), h.Mutation.BeforeAfter.encode(a.at[c[e]], b.uint32(18).fork()).ldelim().ldelim();
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c, e = void 0 === b ? a.len : a.pos + b, d = new h.Mutation.AttributeChange; a.pos < e;) switch (c = a.uint32(), c >>> 3) {
                                case 1:
                                    d.id = a.int32();
                                    break;
                                case 2:
                                    a.skip().pos++;
                                    d.at === l.emptyObject && (d.at = {});
                                    c = a.string();
                                    a.pos++;
                                    d.at[c] = h.Mutation.BeforeAfter.decode(a, a.uint32());
                                    break;
                                default:
                                    a.skipType(7 & c)
                            }
                            return d
                        };
                        return a
                    }();
                    a.TextChange = function () {
                        function a(a) {
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.id = 0;
                        a.prototype.ct = null;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.id && a.hasOwnProperty("id") && b.uint32(8).int32(a.id);
                            null != a.ct && a.hasOwnProperty("ct") && h.Mutation.BeforeAfter.encode(a.ct, b.uint32(18).fork()).ldelim();
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Mutation.TextChange; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.id = a.int32();
                                        break;
                                    case 2:
                                        e.ct = h.Mutation.BeforeAfter.decode(a, a.uint32());
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    a.Changes = function () {
                        function a(a) {
                            this.a = [];
                            this.b = [];
                            this.c = [];
                            this.d = [];
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.a = l.emptyArray;
                        a.prototype.b =
                            l.emptyArray;
                        a.prototype.c = l.emptyArray;
                        a.prototype.d = l.emptyArray;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            if (null != a.a && a.a.length)
                                for (var c = 0; c < a.a.length; ++c) h.Mutation.Delete.encode(a.a[c], b.uint32(10).fork()).ldelim();
                            if (null != a.b && a.b.length)
                                for (c = 0; c < a.b.length; ++c) h.Mutation.Add.encode(a.b[c], b.uint32(18).fork()).ldelim();
                            if (null != a.c && a.c.length)
                                for (c = 0; c < a.c.length; ++c) h.Mutation.AttributeChange.encode(a.c[c], b.uint32(26).fork()).ldelim();
                            if (null !=
                                a.d && a.d.length)
                                for (c = 0; c < a.d.length; ++c) h.Mutation.TextChange.encode(a.d[c], b.uint32(34).fork()).ldelim();
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Mutation.Changes; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.a && e.a.length || (e.a = []);
                                        e.a.push(h.Mutation.Delete.decode(a, a.uint32()));
                                        break;
                                    case 2:
                                        e.b && e.b.length || (e.b = []);
                                        e.b.push(h.Mutation.Add.decode(a, a.uint32()));
                                        break;
                                    case 3:
                                        e.c && e.c.length || (e.c = []);
                                        e.c.push(h.Mutation.AttributeChange.decode(a,
                                            a.uint32()));
                                        break;
                                    case 4:
                                        e.d && e.d.length || (e.d = []);
                                        e.d.push(h.Mutation.TextChange.decode(a, a.uint32()));
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    a.Meta = function () {
                        function a(a) {
                            this.changes = [];
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.index = 0;
                        a.prototype.changes = l.emptyArray;
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.index && a.hasOwnProperty("index") && b.uint32(8).int32(a.index);
                            if (null !=
                                a.changes && a.changes.length)
                                for (var c = 0; c < a.changes.length; ++c) h.Mutation.Changes.encode(a.changes[c], b.uint32(18).fork()).ldelim();
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Mutation.Meta; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.index = a.int32();
                                        break;
                                    case 2:
                                        e.changes && e.changes.length || (e.changes = []);
                                        e.changes.push(h.Mutation.Changes.decode(a, a.uint32()));
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    return a
                }();
                h.Event =
                    function () {
                        function a(a) {
                            if (a)
                                for (var c = Object.keys(a), b = 0; b < c.length; ++b) null != a[c[b]] && (this[c[b]] = a[c[b]])
                        }
                        a.prototype.type = 0;
                        a.prototype.target = 0;
                        a.prototype.frameId = 0;
                        a.prototype.mouseEvent = null;
                        a.prototype.scrollEvent = null;
                        a.prototype.windowEvent = null;
                        a.prototype.selectionEvent = null;
                        a.prototype.changeEvent = null;
                        a.prototype.touchEvent = null;
                        a.prototype.methodEvent = null;
                        a.prototype.propertyEvent = null;
                        a.prototype.zoomEvent = null;
                        a.prototype.resizeEvent = null;
                        a.prototype.keystrokesEvent = null;
                        a.prototype.deviceRotationEvent =
                            null;
                        a.prototype.fatalErrorEvent = null;
                        a.prototype.hashchangeEvent = null;
                        var b;
                        Object.defineProperty(a.prototype, "meta", {
                            get: l.oneOfGetter(b = "mouseEvent scrollEvent windowEvent selectionEvent changeEvent touchEvent methodEvent propertyEvent zoomEvent resizeEvent keystrokesEvent deviceRotationEvent fatalErrorEvent hashchangeEvent".split(" ")),
                            set: l.oneOfSetter(b)
                        });
                        a.create = function (c) {
                            return new a(c)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.type && a.hasOwnProperty("type") && b.uint32(8).int32(a.type);
                            null != a.target && a.hasOwnProperty("target") && b.uint32(16).sint32(a.target);
                            null != a.frameId && a.hasOwnProperty("frameId") && b.uint32(24).sint32(a.frameId);
                            null != a.mouseEvent && a.hasOwnProperty("mouseEvent") && h.MouseEvent.encode(a.mouseEvent, b.uint32(34).fork()).ldelim();
                            null != a.scrollEvent && a.hasOwnProperty("scrollEvent") && h.ScrollEvent.encode(a.scrollEvent, b.uint32(42).fork()).ldelim();
                            null != a.windowEvent && a.hasOwnProperty("windowEvent") && h.WindowEvent.encode(a.windowEvent, b.uint32(50).fork()).ldelim();
                            null != a.selectionEvent && a.hasOwnProperty("selectionEvent") && h.SelectionEvent.encode(a.selectionEvent, b.uint32(58).fork()).ldelim();
                            null != a.changeEvent && a.hasOwnProperty("changeEvent") && h.ChangeEvent.encode(a.changeEvent, b.uint32(66).fork()).ldelim();
                            null != a.touchEvent && a.hasOwnProperty("touchEvent") && h.TouchEvent.encode(a.touchEvent, b.uint32(74).fork()).ldelim();
                            null != a.methodEvent && a.hasOwnProperty("methodEvent") && h.MethodEvent.encode(a.methodEvent, b.uint32(82).fork()).ldelim();
                            null != a.propertyEvent &&
                            a.hasOwnProperty("propertyEvent") && h.PropertyEvent.encode(a.propertyEvent, b.uint32(90).fork()).ldelim();
                            null != a.zoomEvent && a.hasOwnProperty("zoomEvent") && h.ZoomEvent.encode(a.zoomEvent, b.uint32(98).fork()).ldelim();
                            null != a.resizeEvent && a.hasOwnProperty("resizeEvent") && h.ResizeEvent.encode(a.resizeEvent, b.uint32(106).fork()).ldelim();
                            null != a.keystrokesEvent && a.hasOwnProperty("keystrokesEvent") && h.KeystrokesEvent.encode(a.keystrokesEvent, b.uint32(114).fork()).ldelim();
                            null != a.deviceRotationEvent && a.hasOwnProperty("deviceRotationEvent") &&
                            h.DeviceRotationEvent.encode(a.deviceRotationEvent, b.uint32(122).fork()).ldelim();
                            null != a.fatalErrorEvent && a.hasOwnProperty("fatalErrorEvent") && h.FatalErrorEvent.encode(a.fatalErrorEvent, b.uint32(130).fork()).ldelim();
                            null != a.hashchangeEvent && a.hasOwnProperty("hashchangeEvent") && h.HashchangeEvent.encode(a.hashchangeEvent, b.uint32(138).fork()).ldelim();
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.Event; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>>
                                3) {
                                    case 1:
                                        e.type = a.int32();
                                        break;
                                    case 2:
                                        e.target = a.sint32();
                                        break;
                                    case 3:
                                        e.frameId = a.sint32();
                                        break;
                                    case 4:
                                        e.mouseEvent = h.MouseEvent.decode(a, a.uint32());
                                        break;
                                    case 5:
                                        e.scrollEvent = h.ScrollEvent.decode(a, a.uint32());
                                        break;
                                    case 6:
                                        e.windowEvent = h.WindowEvent.decode(a, a.uint32());
                                        break;
                                    case 7:
                                        e.selectionEvent = h.SelectionEvent.decode(a, a.uint32());
                                        break;
                                    case 8:
                                        e.changeEvent = h.ChangeEvent.decode(a, a.uint32());
                                        break;
                                    case 9:
                                        e.touchEvent = h.TouchEvent.decode(a, a.uint32());
                                        break;
                                    case 10:
                                        e.methodEvent = h.MethodEvent.decode(a,
                                            a.uint32());
                                        break;
                                    case 11:
                                        e.propertyEvent = h.PropertyEvent.decode(a, a.uint32());
                                        break;
                                    case 12:
                                        e.zoomEvent = h.ZoomEvent.decode(a, a.uint32());
                                        break;
                                    case 13:
                                        e.resizeEvent = h.ResizeEvent.decode(a, a.uint32());
                                        break;
                                    case 14:
                                        e.keystrokesEvent = h.KeystrokesEvent.decode(a, a.uint32());
                                        break;
                                    case 15:
                                        e.deviceRotationEvent = h.DeviceRotationEvent.decode(a, a.uint32());
                                        break;
                                    case 16:
                                        e.fatalErrorEvent = h.FatalErrorEvent.decode(a, a.uint32());
                                        break;
                                    case 17:
                                        e.hashchangeEvent = h.HashchangeEvent.decode(a, a.uint32());
                                        break;
                                    default:
                                        a.skipType(7 &
                                            d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                h.MouseEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.x = 0;
                    a.prototype.y = 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.x && a.hasOwnProperty("x") && b.uint32(8).int32(a.x);
                        null != a.y && a.hasOwnProperty("y") && b.uint32(16).int32(a.y);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.MouseEvent; a.pos < c;) {
                            var d =
                                a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.x = a.int32();
                                    break;
                                case 2:
                                    e.y = a.int32();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.ScrollEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.x = 0;
                    a.prototype.y = 0;
                    a.prototype.page = !1;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.x && a.hasOwnProperty("x") && b.uint32(8).int32(a.x);
                        null != a.y && a.hasOwnProperty("y") && b.uint32(16).int32(a.y);
                        null !=
                        a.page && a.hasOwnProperty("page") && b.uint32(24).bool(a.page);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.ScrollEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.x = a.int32();
                                    break;
                                case 2:
                                    e.y = a.int32();
                                    break;
                                case 3:
                                    e.page = a.bool();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.WindowEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.WindowEvent; a.pos < c;) {
                            var d = a.uint32();
                            a.skipType(7 & d)
                        }
                        return e
                    };
                    return a
                }();
                h.SelectionEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.start = 0;
                    a.prototype.end = 0;
                    a.prototype.startNode = 0;
                    a.prototype.endNode = 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b ||
                        (b = g.create());
                        null != a.start && a.hasOwnProperty("start") && b.uint32(8).int32(a.start);
                        null != a.end && a.hasOwnProperty("end") && b.uint32(16).int32(a.end);
                        null != a.startNode && a.hasOwnProperty("startNode") && b.uint32(24).int32(a.startNode);
                        null != a.endNode && a.hasOwnProperty("endNode") && b.uint32(32).int32(a.endNode);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.SelectionEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.start = a.int32();
                                    break;
                                case 2:
                                    e.end = a.int32();
                                    break;
                                case 3:
                                    e.startNode = a.int32();
                                    break;
                                case 4:
                                    e.endNode = a.int32();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.ChangeEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.value = "";
                    a.prototype.checked = !1;
                    a.prototype.hidden = !1;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.value && a.hasOwnProperty("value") && b.uint32(10).string(a.value);
                        null != a.checked &&
                        a.hasOwnProperty("checked") && b.uint32(16).bool(a.checked);
                        null != a.hidden && a.hasOwnProperty("hidden") && b.uint32(24).bool(a.hidden);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.ChangeEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.value = a.string();
                                    break;
                                case 2:
                                    e.checked = a.bool();
                                    break;
                                case 3:
                                    e.hidden = a.bool();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.TouchEvent = function () {
                    function a(a) {
                        this.touches = [];
                        if (a)
                            for (var b =
                                Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.touches = l.emptyArray;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        if (null != a.touches && a.touches.length)
                            for (var c = 0; c < a.touches.length; ++c) h.TouchEvent.SubMeta.encode(a.touches[c], b.uint32(10).fork()).ldelim();
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.TouchEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.touches &&
                                    e.touches.length || (e.touches = []);
                                    e.touches.push(h.TouchEvent.SubMeta.decode(a, a.uint32()));
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    a.SubMeta = function () {
                        function a(a) {
                            if (a)
                                for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                        }
                        a.prototype.id = "";
                        a.prototype.x = 0;
                        a.prototype.y = 0;
                        a.prototype.force = 0;
                        a.create = function (b) {
                            return new a(b)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.id && a.hasOwnProperty("id") && b.uint32(10).string(a.id);
                            null != a.x && a.hasOwnProperty("x") && b.uint32(21)["float"](a.x);
                            null != a.y && a.hasOwnProperty("y") && b.uint32(29)["float"](a.y);
                            null != a.force && a.hasOwnProperty("force") && b.uint32(37)["float"](a.force);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.TouchEvent.SubMeta; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.id = a.string();
                                        break;
                                    case 2:
                                        e.x = a["float"]();
                                        break;
                                    case 3:
                                        e.y = a["float"]();
                                        break;
                                    case 4:
                                        e.force = a["float"]();
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    return a
                }();
                h.ZoomEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b =
                                Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.zoomFrom = null;
                    a.prototype.zoomTo = null;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.zoomFrom && a.hasOwnProperty("zoomFrom") && h.ZoomEvent.ZoomPoint.encode(a.zoomFrom, b.uint32(10).fork()).ldelim();
                        null != a.zoomTo && a.hasOwnProperty("zoomTo") && h.ZoomEvent.ZoomPoint.encode(a.zoomTo, b.uint32(18).fork()).ldelim();
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c =
                            void 0 === b ? a.len : a.pos + b, e = new h.ZoomEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.zoomFrom = h.ZoomEvent.ZoomPoint.decode(a, a.uint32());
                                    break;
                                case 2:
                                    e.zoomTo = h.ZoomEvent.ZoomPoint.decode(a, a.uint32());
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    a.ZoomPoint = function () {
                        function a(a) {
                            if (a)
                                for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                        }
                        a.prototype.level = 0;
                        a.prototype.x = 0;
                        a.prototype.y = 0;
                        a.create = function (b) {
                            return new a(b)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.level && a.hasOwnProperty("level") && b.uint32(13)["float"](a.level);
                            null != a.x && a.hasOwnProperty("x") && b.uint32(16).int32(a.x);
                            null != a.y && a.hasOwnProperty("y") && b.uint32(24).int32(a.y);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.ZoomEvent.ZoomPoint; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.level = a["float"]();
                                        break;
                                    case 2:
                                        e.x = a.int32();
                                        break;
                                    case 3:
                                        e.y = a.int32();
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    return a
                }();
                h.ResizeEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.width = 0;
                    a.prototype.height = 0;
                    a.prototype.pageWidth = 0;
                    a.prototype.pageHeight = 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.width && a.hasOwnProperty("width") && b.uint32(8).int32(a.width);
                        null != a.height && a.hasOwnProperty("height") && b.uint32(16).int32(a.height);
                        null != a.pageWidth && a.hasOwnProperty("pageWidth") && b.uint32(24).int32(a.pageWidth);
                        null != a.pageHeight && a.hasOwnProperty("pageHeight") && b.uint32(32).int32(a.pageHeight);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.ResizeEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.width = a.int32();
                                    break;
                                case 2:
                                    e.height = a.int32();
                                    break;
                                case 3:
                                    e.pageWidth = a.int32();
                                    break;
                                case 4:
                                    e.pageHeight = a.int32();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.MethodEvent = function () {
                    function a(a) {
                        this.args = [];
                        if (a)
                            for (var b = Object.keys(a),
                                     e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.method = "";
                    a.prototype.args = l.emptyArray;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.method && a.hasOwnProperty("method") && b.uint32(10).string(a.method);
                        if (null != a.args && a.args.length)
                            for (var c = 0; c < a.args.length; ++c) b.uint32(18).string(a.args[c]);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.MethodEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.method = a.string();
                                    break;
                                case 2:
                                    e.args && e.args.length || (e.args = []);
                                    e.args.push(a.string());
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.PropertyEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.property = "";
                    a.prototype.value = "";
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.property && a.hasOwnProperty("property") && b.uint32(10).string(a.property);
                        null !=
                        a.value && a.hasOwnProperty("value") && b.uint32(18).string(a.value);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.PropertyEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.property = a.string();
                                    break;
                                case 2:
                                    e.value = a.string();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.KeystrokesEvent = function () {
                    function a(a) {
                        this.keystrokes = [];
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.keystrokes =
                        l.emptyArray;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        if (null != a.keystrokes && a.keystrokes.length)
                            for (var c = 0; c < a.keystrokes.length; ++c) h.KeystrokesEvent.KeystrokeEvent.encode(a.keystrokes[c], b.uint32(10).fork()).ldelim();
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.KeystrokesEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.keystrokes && e.keystrokes.length || (e.keystrokes = []);
                                    e.keystrokes.push(h.KeystrokesEvent.KeystrokeEvent.decode(a,
                                        a.uint32()));
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    a.KeystrokeEvent = function () {
                        function a(a) {
                            if (a)
                                for (var b = Object.keys(a), c = 0; c < b.length; ++c) null != a[b[c]] && (this[b[c]] = a[b[c]])
                        }
                        a.prototype.id = 0;
                        a.prototype.key = "";
                        a.prototype.isMeta = !1;
                        a.prototype.modifier = "";
                        a.create = function (b) {
                            return new a(b)
                        };
                        a.encode = function (a, b) {
                            b || (b = g.create());
                            null != a.id && a.hasOwnProperty("id") && b.uint32(8).int32(a.id);
                            null != a.key && a.hasOwnProperty("key") && b.uint32(18).string(a.key);
                            null != a.isMeta && a.hasOwnProperty("isMeta") &&
                            b.uint32(24).bool(a.isMeta);
                            null != a.modifier && a.hasOwnProperty("modifier") && b.uint32(34).string(a.modifier);
                            return b
                        };
                        a.decode = function (a, b) {
                            a instanceof f || (a = f.create(a));
                            for (var c = void 0 === b ? a.len : a.pos + b, e = new h.KeystrokesEvent.KeystrokeEvent; a.pos < c;) {
                                var d = a.uint32();
                                switch (d >>> 3) {
                                    case 1:
                                        e.id = a.int32();
                                        break;
                                    case 2:
                                        e.key = a.string();
                                        break;
                                    case 3:
                                        e.isMeta = a.bool();
                                        break;
                                    case 4:
                                        e.modifier = a.string();
                                        break;
                                    default:
                                        a.skipType(7 & d)
                                }
                            }
                            return e
                        };
                        return a
                    }();
                    return a
                }();
                h.DeviceRotationEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b =
                                Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.width = 0;
                    a.prototype.height = 0;
                    a.prototype.orientation = 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.width && a.hasOwnProperty("width") && b.uint32(8).int32(a.width);
                        null != a.height && a.hasOwnProperty("height") && b.uint32(16).int32(a.height);
                        null != a.orientation && a.hasOwnProperty("orientation") && b.uint32(24).int32(a.orientation);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.DeviceRotationEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.width = a.int32();
                                    break;
                                case 2:
                                    e.height = a.int32();
                                    break;
                                case 3:
                                    e.orientation = a.int32();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.FatalErrorEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.code = "";
                    a.prototype.exception = "";
                    a.prototype.stack = "";
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a,
                                         b) {
                        b || (b = g.create());
                        null != a.code && a.hasOwnProperty("code") && b.uint32(10).string(a.code);
                        null != a.exception && a.hasOwnProperty("exception") && b.uint32(18).string(a.exception);
                        null != a.stack && a.hasOwnProperty("stack") && b.uint32(26).string(a.stack);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.FatalErrorEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>> 3) {
                                case 1:
                                    e.code = a.string();
                                    break;
                                case 2:
                                    e.exception = a.string();
                                    break;
                                case 3:
                                    e.stack = a.string();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.HashchangeEvent = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), e = 0; e < b.length; ++e) null != a[b[e]] && (this[b[e]] = a[b[e]])
                    }
                    a.prototype.hash = "";
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.hash && a.hasOwnProperty("hash") && b.uint32(10).string(a.hash);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, e = new h.HashchangeEvent; a.pos < c;) {
                            var d = a.uint32();
                            switch (d >>>
                            3) {
                                case 1:
                                    e.hash = a.string();
                                    break;
                                default:
                                    a.skipType(7 & d)
                            }
                        }
                        return e
                    };
                    return a
                }();
                h.EventType = function () {
                    var a = {},
                        b = Object.create(a);
                    b[a[0] = "mousemove"] = 0;
                    b[a[1] = "mouseup"] = 1;
                    b[a[2] = "mousedown"] = 2;
                    b[a[3] = "click"] = 3;
                    b[a[4] = "scroll"] = 4;
                    b[a[5] = "windowblur"] = 5;
                    b[a[6] = "windowfocus"] = 6;
                    b[a[7] = "focus"] = 7;
                    b[a[8] = "blur"] = 8;
                    b[a[9] = "eof"] = 9;
                    b[a[10] = "selection"] = 10;
                    b[a[11] = "change"] = 11;
                    b[a[12] = "input"] = 12;
                    b[a[13] = "touchmove"] = 13;
                    b[a[14] = "touchstart"] = 14;
                    b[a[15] = "touchend"] = 15;
                    b[a[16] = "touchcancel"] = 16;
                    b[a[17] =
                        "touchforcechange"] = 17;
                    b[a[18] = "canvasMethod"] = 18;
                    b[a[19] = "canvasProperty"] = 19;
                    b[a[20] = "zoom"] = 20;
                    b[a[21] = "resize"] = 21;
                    b[a[22] = "mediaMethod"] = 22;
                    b[a[23] = "mediaProperty"] = 23;
                    b[a[24] = "keystroke"] = 24;
                    b[a[25] = "deviceRotation"] = 25;
                    b[a[26] = "fatalError"] = 26;
                    b[a[27] = "hashchange"] = 27;
                    return b
                }();
                h.PublishersHeader = function () {
                    function a(a) {
                        this.articleMeta = [];
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d) null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.articleMeta = l.emptyArray;
                    a.prototype.involvedTime = 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        if (null != a.articleMeta && a.articleMeta.length)
                            for (var c = 0; c < a.articleMeta.length; ++c) h.ArticleMeta.encode(a.articleMeta[c], b.uint32(10).fork()).ldelim();
                        null != a.involvedTime && a.hasOwnProperty("involvedTime") && b.uint32(16).int32(a.involvedTime);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, d = new h.PublishersHeader; a.pos < c;) {
                            var e = a.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    d.articleMeta &&
                                    d.articleMeta.length || (d.articleMeta = []);
                                    d.articleMeta.push(h.ArticleMeta.decode(a, a.uint32()));
                                    break;
                                case 2:
                                    d.involvedTime = a.int32();
                                    break;
                                default:
                                    a.skipType(7 & e)
                            }
                        }
                        return d
                    };
                    return a
                }();
                h.ArticleMeta = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d) null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.id = 0;
                    a.prototype.x = 0;
                    a.prototype.y = 0;
                    a.prototype.width = 0;
                    a.prototype.height = 0;
                    a.prototype.involvedTime = 0;
                    a.prototype.maxScrolled = 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode =
                        function (a, b) {
                            b || (b = g.create());
                            null != a.id && a.hasOwnProperty("id") && b.uint32(8).uint32(a.id);
                            null != a.x && a.hasOwnProperty("x") && b.uint32(16).int32(a.x);
                            null != a.y && a.hasOwnProperty("y") && b.uint32(24).int32(a.y);
                            null != a.width && a.hasOwnProperty("width") && b.uint32(32).int32(a.width);
                            null != a.height && a.hasOwnProperty("height") && b.uint32(40).int32(a.height);
                            null != a.involvedTime && a.hasOwnProperty("involvedTime") && b.uint32(48).int32(a.involvedTime);
                            null != a.maxScrolled && a.hasOwnProperty("maxScrolled") && b.uint32(61)["float"](a.maxScrolled);
                            return b
                        };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleMeta; a.pos < c;) {
                            var e = a.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    d.id = a.uint32();
                                    break;
                                case 2:
                                    d.x = a.int32();
                                    break;
                                case 3:
                                    d.y = a.int32();
                                    break;
                                case 4:
                                    d.width = a.int32();
                                    break;
                                case 5:
                                    d.height = a.int32();
                                    break;
                                case 6:
                                    d.involvedTime = a.int32();
                                    break;
                                case 7:
                                    d.maxScrolled = a["float"]();
                                    break;
                                default:
                                    a.skipType(7 & e)
                            }
                        }
                        return d
                    };
                    return a
                }();
                h.ArticleInfo = function () {
                    function a(a) {
                        this.authors = [];
                        this.topics = [];
                        this.rubric = [];
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d) null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.id = 0;
                    a.prototype.pageUrlCanonical = "";
                    a.prototype.pageTitle = "";
                    a.prototype.authors = l.emptyArray;
                    a.prototype.topics = l.emptyArray;
                    a.prototype.publicationDate = "";
                    a.prototype.chars = 0;
                    a.prototype.rubric = l.emptyArray;
                    a.prototype.updateDate = "";
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.id && a.hasOwnProperty("id") && b.uint32(8).uint32(a.id);
                        null != a.pageUrlCanonical &&
                        a.hasOwnProperty("pageUrlCanonical") && b.uint32(18).string(a.pageUrlCanonical);
                        null != a.pageTitle && a.hasOwnProperty("pageTitle") && b.uint32(26).string(a.pageTitle);
                        if (null != a.authors && a.authors.length)
                            for (var c = 0; c < a.authors.length; ++c) h.ArticleAuthor.encode(a.authors[c], b.uint32(34).fork()).ldelim();
                        if (null != a.topics && a.topics.length)
                            for (c = 0; c < a.topics.length; ++c) h.ArticleTopic.encode(a.topics[c], b.uint32(42).fork()).ldelim();
                        null != a.publicationDate && a.hasOwnProperty("publicationDate") && b.uint32(50).string(a.publicationDate);
                        null != a.chars && a.hasOwnProperty("chars") && b.uint32(56).int32(a.chars);
                        if (null != a.rubric && a.rubric.length)
                            for (c = 0; c < a.rubric.length; ++c) h.ArticleRubric.encode(a.rubric[c], b.uint32(66).fork()).ldelim();
                        null != a.updateDate && a.hasOwnProperty("updateDate") && b.uint32(74).string(a.updateDate);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleInfo; a.pos < c;) {
                            var e = a.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    d.id = a.uint32();
                                    break;
                                case 2:
                                    d.pageUrlCanonical =
                                        a.string();
                                    break;
                                case 3:
                                    d.pageTitle = a.string();
                                    break;
                                case 4:
                                    d.authors && d.authors.length || (d.authors = []);
                                    d.authors.push(h.ArticleAuthor.decode(a, a.uint32()));
                                    break;
                                case 5:
                                    d.topics && d.topics.length || (d.topics = []);
                                    d.topics.push(h.ArticleTopic.decode(a, a.uint32()));
                                    break;
                                case 6:
                                    d.publicationDate = a.string();
                                    break;
                                case 7:
                                    d.chars = a.int32();
                                    break;
                                case 8:
                                    d.rubric && d.rubric.length || (d.rubric = []);
                                    d.rubric.push(h.ArticleRubric.decode(a, a.uint32()));
                                    break;
                                case 9:
                                    d.updateDate = a.string();
                                    break;
                                default:
                                    a.skipType(7 &
                                        e)
                            }
                        }
                        return d
                    };
                    return a
                }();
                h.ArticleAuthor = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d) null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.name = "";
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.name && a.hasOwnProperty("name") && b.uint32(10).string(a.name);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleAuthor; a.pos < c;) {
                            var e = a.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    d.name = a.string();
                                    break;
                                default:
                                    a.skipType(7 & e)
                            }
                        }
                        return d
                    };
                    return a
                }();
                h.ArticleTopic = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d) null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.name = "";
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.name && a.hasOwnProperty("name") && b.uint32(10).string(a.name);
                        return b
                    };
                    a.decode = function (a, b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleTopic; a.pos < c;) {
                            var e = a.uint32();
                            switch (e >>>
                            3) {
                                case 1:
                                    d.name = a.string();
                                    break;
                                default:
                                    a.skipType(7 & e)
                            }
                        }
                        return d
                    };
                    return a
                }();
                h.ArticleRubric = function () {
                    function a(a) {
                        if (a)
                            for (var b = Object.keys(a), d = 0; d < b.length; ++d) null != a[b[d]] && (this[b[d]] = a[b[d]])
                    }
                    a.prototype.name = "";
                    a.prototype.position = 0;
                    a.create = function (b) {
                        return new a(b)
                    };
                    a.encode = function (a, b) {
                        b || (b = g.create());
                        null != a.name && a.hasOwnProperty("name") && b.uint32(10).string(a.name);
                        null != a.position && a.hasOwnProperty("position") && b.uint32(16).int32(a.position);
                        return b
                    };
                    a.decode = function (a,
                                         b) {
                        a instanceof f || (a = f.create(a));
                        for (var c = void 0 === b ? a.len : a.pos + b, d = new h.ArticleRubric; a.pos < c;) {
                            var e = a.uint32();
                            switch (e >>> 3) {
                                case 1:
                                    d.name = a.string();
                                    break;
                                case 2:
                                    d.position = a.int32();
                                    break;
                                default:
                                    a.skipType(7 & e)
                            }
                        }
                        return d
                    };
                    return a
                }();
                a.exports = h
            }
        ]),
        gb = {
            ScrollEvent: {
                type: G.ScrollEvent,
                events: ["scroll"]
            },
            SelectionEvent: {
                type: G.SelectionEvent,
                events: ["selection"]
            },
            ChangeEvent: {
                type: G.ChangeEvent,
                events: ["change", "input"]
            },
            MethodEvent: {
                type: G.MethodEvent,
                events: ["canvasMethod", "mediaMethod"]
            },
            PropertyEvent: {
                type: G.PropertyEvent,
                events: ["canvasProperty", "mediaProperty"]
            },
            KeystrokeEvent: {
                type: G.KeystrokesEvent,
                events: ["keystroke"]
            },
            ZoomEvent: {
                type: G.ZoomEvent,
                events: ["zoom"]
            },
            ResizeEvent: {
                type: G.ResizeEvent,
                events: ["resize"]
            },
            WindowEvent: {
                type: G.WindowEvent,
                events: ["windowfocus", "windowblur", "focus", "blur", "eof"]
            },
            MouseEvent: {
                type: G.MouseEvent,
                events: ["mousemove", "mouseup", "mousedown", "click"]
            },
            DeviceRotationEvent: {
                type: G.DeviceRotationEvent,
                events: ["deviceRotation"]
            },
            FatalErrorEvent: {
                type: G.FatalErrorEvent,
                events: ["fatalError"]
            },
            TouchEvent: {
                type: G.TouchEvent,
                events: ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"]
            }
        },
        Ub = l.reduce(function (a, b) {
            return a.concat(l.map(function (a) {
                return {
                    eventName: a,
                    type: gb[b].type,
                    typeStr: b
                }
            }, gb[b].events))
        }, [], l.keys(gb)),
        Vb = Ba.inherit({
            protocol: "",
            chunkSize: 0,
            counterId: "",
            counterType: "",
            meta: null,
            maxBufferSize: 7E5,
            serializer: {
                nullToStr: function (a) {
                    var b = this;
                    if (l.isArray(a)) return l.map(function (a) {
                        return b.nullToStr(a)
                    }, a);
                    if (l.isObject(a)) l.forEachKey(a,
                        function (d, f) {
                            a[d] = b.nullToStr(f);
                            return !0
                        });
                    else if (null === a || a === y) a = "";
                    return a
                },
                uncapitalize: function (a, b) {
                    var d = a.slice(1);
                    return a.charAt(0).toLowerCase() + (b ? d.toLowerCase() : d)
                },
                capitalize: function (a, b) {
                    var d = a.slice(1);
                    return a.charAt(0).toUpperCase() + (b ? d.toLowerCase() : d)
                },
                notNaN: function (a) {
                    return isNaN(a) && "number" == typeof a ? 0 : a
                },
                eventSerialize: function (a) {
                    var b = l.filter(function (b) {
                            return b.eventName == a.type
                        }, Ub),
                        d;
                    for (d = 0; d < b.length; d++) var f = b[d];
                    if (f) return d = new f.type(this.nullToStr(a.meta)),
                        b = new G.Event({
                            type: G.EventType[f.eventName],
                            target: a.target,
                            frameId: a.frameId
                        }), b[this.uncapitalize(f.typeStr)] = d, b
                },
                pageSerialize: function (a) {
                    return new G.Page(this.nullToStr(a))
                },
                articleInfoSerialize: function (a) {
                    return new G.ArticleInfo(this.nullToStr(a))
                },
                publishersHeaderSerialize: function (a) {
                    return new G.PublishersHeader(this.nullToStr(a))
                },
                mutationSerialize: function (a) {
                    return new G.Mutation(this.nullToStr(a))
                },
                initBuffer: function () {
                    return new G.BufferWrapper
                },
                appendBuffer: function (a, b) {
                    a.buffer.push(b)
                },
                serializeChunk: function (a) {
                    return this.serializeBuffer(null, a)
                },
                serializeBuffer: function (a, b, d) {
                    var f = new G.Buffer(b);
                    a = a || new G.Wrapper;
                    b || (f.data = a);
                    d !== y && (f.stamp = d);
                    b && b.stamp === y && (f.stamp = u.getFormStart());
                    return f
                },
                toTransport: function (a, b, d, f) {
                    var g = b || "BufferWrapper",
                        l = this;
                    if (d) eb.chain([function () {
                        return l.nullToStr(a)
                    }, function (a) {
                        return G[g].encode(a)
                    }, function (a) {
                        return a.finish()
                    }, function (a) {
                        return d.call(f, a)
                    }], "", !1, "toTransportChain." + g);
                    else return G[g].encode(this.nullToStr(a)).finish()
                },
                fromTrasport: function (a, b) {
                    if ("number" == typeof a[0]) return G[b || "BufferWrapper"].decode(a)
                },
                serialize: function (a, b, d) {
                    var f = {},
                        g = {},
                        l = this[a + "Serialize"];
                    if (l) f[a] = l.call(this, b), g = new G.Wrapper(f);
                    else if (d && G.Wrapper.prototype[a] !== y) g[a] = b;
                    else throw "Unrecoginze type of message";
                    return d ? G.Wrapper.encode(g).finish() : g
                }
            },
            _dataSize: 0,
            flushTimeout: 2E3,
            storageKey: "visorbuff3",
            active: !1,
            wvType: 3,
            _v: "",
            _initComponent: function () {
                this._sender = new fb({
                    version: this.wvType,
                    protocol: this.protocol,
                    globalConfig: this.globalConfig,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                this.maxChunkSize = .9 * this.maxBufferSize;
                Sa.superclass._initComponent.apply(this, arguments)
            },
            activate: function () {
                this.active || (this.active = !0)
            },
            mergeData: function (a, b) {
                this.serializer.appendBuffer(a, b);
                this._dataSize = 0
            },
            _getSize: function (a) {
                return a.length
            },
            sendEncoded: function (a, b, d, f, g) {
                var l = this._getSize(a),
                    h = this.getFlushSize(),
                    n = 0,
                    e = 0,
                    c = 1;
                d.size = l;
                h + l > this.maxBufferSize && h && this._flush(f);
                if (l > this.maxBufferSize)
                    for (h = Math.ceil(l / this.maxChunkSize); e <
                    l;) {
                        b.page = c;
                        b.end = c === h;
                        b.chunk = a.slice(n, n += this.maxChunkSize);
                        if (0 == b.chunk.length) break;
                        b.size = this._getSize(b.chunk);
                        e += b.size;
                        d = this.serializer.serializeChunk(b);
                        this.store.set(d, g);
                        this.append(d, f);
                        c++
                    } else d = this.serializer.serializeBuffer(d, null, b.stamp), this.store.set(d, g), this.append(d, f)
            },
            addData: function (a, b, d, f) {
                var g = {
                    type: a
                };
                this._v = d;
                this.wrappers.length && l.arrayEvery(this.wrappers, function (d) {
                    d.trigger && d.trigger(a, b);
                    return 1
                });
                this._data && 0 == this._data.buffer.length && (this.startBufferTime =
                    u.getSeconds());
                b.stamp !== y && (g.stamp = b.stamp, delete b.stamp);
                var m = this.serializer.serialize(a, b);
                f ? (d = this.serializer.toTransport(m, "Wrapper"), this.sendEncoded(d, g, m, !0, {
                    id: a,
                    data: b
                })) : this.serializer.toTransport(m, "Wrapper", function (d) {
                    this.sendEncoded(d, g, m, !1, {
                        id: a,
                        data: b
                    })
                }, this)
            },
            dataFromStorage: function (a) {
                return this.serializer.fromTrasport(a)
            },
            dataToStorage: function (a) {
                return this.serializer.toTransport(a)
            },
            getFlushSize: function () {
                var a = this,
                    b = l.reduce(function (a, b) {
                        return a + (b.data ? b.data.size :
                            b.size)
                    }, 0, this._data.buffer);
                this.wrappers.length && (b += l.reduce(function (b, f) {
                    var d = f.getBufferData();
                    return b += a.serializer.serialize(d.type, d.data, !0).length
                }, b, this.wrappers));
                return b
            },
            onFlush: function (a, b, d, f) {
                var g = this;
                this._dataSize = 0;
                a && (this.wrappers.length && (l.arrayEvery(this.wrappers, function (b) {
                    if (!b.onFlush) return 1;
                    l.arrayEvery(a.buffer, function (a) {
                        a = this.store.pop(a);
                        if (!a) return 1;
                        b.onFlush(a.id, a.data);
                        return 1
                    }, this)
                }, this), a = l.reduce(function (a, b) {
                    var d = b.getBufferData(),
                        e = {
                            data: {}
                        };
                    e.data[d.type] = d.data;
                    d = new g.serializer.serializeBuffer(null, e);
                    g.mergeData(a, d);
                    return a
                }, a, this.wrappers)), f ? this._sender.sendPacket(this.serializer.toTransport(a), b.url, b.hitId, d, b.timezone, b.timestamp, this.startBufferTime) : this.serializer.toTransport(a, "BufferWrapper", function (a) {
                    this._sender.sendPacket(a, b.url, b.hitId, d, b.timezone, b.timestamp, this.startBufferTime)
                }, this))
            },
            clear: function () {
                this._data = this.serializer.initBuffer();
                this._dataSize = 0;
                this._flushTID = null;
                this.storage && this.storage.remove(this.storageKey)
            }
        }),
        U = {};
    U._cookie = new J({
        onlyCurrentDomain: !0
    });
    U._check = B(function () {
        return -1 < p.location.href.indexOf("_ym_debug\x3d1") || p._ym_debug || "1" === U._cookie.read("debug")
    });
    U.enabled = U._check();
    U.log = B(function () {
        (-1 < L.href.indexOf("_ym_debug\x3d1") || p._ym_debug) && this._cookie.create("debug", "1");
        p.console && console.log && this._check() && (U.enabled = !0, console.log.apply(console, arguments))
    }, "DebugConsole.log");
    var Wb = I.inherit({
            eventMap: {
                mousemove: {
                    val: 0,
                    multiply: 1 / .68
                },
                click: {
                    val: 0,
                    multiply: 1 / .00975
                },
                input: {
                    val: 0,
                    multiply: 1 / .0116
                },
                scroll: {
                    val: 0,
                    multiply: 1 / .31
                },
                fatalError: {
                    val: 0,
                    multiply: 1
                }
            },
            getBufferData: function () {
                var a = this;
                return {
                    type: "activity",
                    data: l.reduce(function (b, d) {
                        var f = a.eventMap[d];
                        return Math.round(b + f.val * f.multiply)
                    }, 0, l.keys(this.eventMap))
                }
            },
            onFlush: function (a, b) {
                var d;
                if (d = this.eventMap["event" !== a ? a : b.type]) d.val += 1
            }
        }),
        tb = I.inherit({
            hid: 0,
            tz: 0,
            ts: 0,
            counterId: 0,
            counterType: 0,
            url: "",
            protocol: "",
            executor: eb,
            enabled: !1,
            _map: {
                page: {
                    iterate: !1,
                    name: "page"
                },
                events: {
                    iterate: !0,
                    name: "event"
                },
                mutations: {
                    iterate: !0,
                    name: "mutation"
                },
                articleInfo: {
                    iterate: !0,
                    name: "articleInfo"
                }
            },
            _getBufferType: function () {
                var a = Sa;
                U.enabled || p.Uint8Array && p.Uint8Array.prototype.slice && (a = Vb);
                return a
            },
            _initComponent: B(function () {
                var a = this._getBufferType();
                if (this.isEnabled() && !this.globalConfig.get("wv2Counter")) {
                    this.globalConfig.set("wv2Counter", this.counterId);
                    var b = this._getStorage();
                    var d = b.read("visorc");
                    "b" !== d && "w" !== d && (d = "");
                    if (!b.isEnabled() || $a("opera mini")) d = "b";
                    this._vc = d;
                    "b" !== d && (this._formRecorder = new Db(this.protocol,
                        this.counterId, this.counterType, this.hid, this.globalConfig), this._recorder = new Mb, this._recorder.init(), this._activity = new Wb, this._buffer = new a({
                        protocol: this.protocol,
                        counterId: this.counterId,
                        counterType: this.counterType,
                        globalConfig: this.globalConfig,
                        meta: {
                            url: this.url,
                            hitId: this.hid,
                            timezone: this.tz,
                            timestamp: this.ts
                        }
                    }), this._buffer.activate());
                    tb.superclass._initComponent.apply(this, arguments)
                }
            }, "wv2.init"),
            start: B(function (a, b) {
                var d = this;
                if (this._isCorrectCounter() && this.isEnabled() && this._recorder) {
                    a =
                        a || {};
                    var f = +a.recp;
                    if (!isFinite(f) || 0 > f || 1 < f) var g = "w";
                    g || (g = this.hid % 1E4 / 1E4 < f ? "w" : "b");
                    this._getStorage().create("visorc", g, 30);
                    "w" === g ? (this._recorder.middleware(function (a) {
                        d.send(a.data)
                    }), this.globalConfig.get("stopRecoder", function () {})(), this.globalConfig.set("stopRecoder", function () {
                        d.stop()
                    }), this._buffer.wrappers.push(this._activity), this._recorder.start(a), this._formRecorder.start()) : (this._recorder.stop(), this._formRecorder.stop())
                }
            }, "wv2.start"),
            stop: function () {
                this._isCorrectCounter() &&
                this._recorder && (this._recorder.stop(), this._formRecorder.stop())
            },
            isEnabled: function () {
                var a = !this.globalConfig.get("oo");
                return this.enabled && p.MutationObserver && a
            },
            send: function (a) {
                var b = a._v;
                l.forEachKey(a, function (a, f) {
                    var d = this._map[a];
                    if (d) {
                        var m = d.name;
                        d.iterate ? l.forEachKey(f, function (a, d) {
                            var e = "eof" === d.type;
                            this.executor.addAsyncItem(this._buffer.addData, this._buffer, e, [m, d, b, e, d.stamp], "send." + (d ? d.type || d.group || "" : "empty"))
                        }, this) : this._buffer.addData(m, f, b)
                    }
                }, this)
            },
            getVc: function () {
                return this._vc
            },
            _getStorage: function () {
                this._storage || (this._storage = new J({
                    counterId: this.counterId
                }));
                return this._storage
            },
            _isCorrectCounter: function () {
                return this.counterId === this.globalConfig.get("wv2Counter")
            }
        }),
        ub = {
            FN: "ym",
            STACK: "a",
            counters: [],
            waitPool: {},
            handle: function (a) {
                if (2 > a.length) return 1;
                var b = "" + a[0];
                l.inArray(b, ":") || (b += ":0");
                var d = b.split(":")[0];
                var f = a[1];
                var g = this.globalConfig.get("counters", {})[b];
                "init" == f ? (f = "yaCounter" + d, p[f] || (a = l.mixin(a[2] || {}, {
                        id: +d
                    }), p[f] = new p.Ya[this.constructorName](a))) :
                    l.inArray(this.counters, b) && g && g[f] ? (a = [].slice.call(a, 2), g[f].apply(g, a)) : l.inArray(this.counters, b) || (this.waitPool[b] || (this.waitPool[b] = []), this.waitPool[b].push(a));
                return 1
            },
            subscribe: function (a) {
                a && (this.counters.push(a), this.waitPool[a] && (l.arrayEvery(this.waitPool[a], this.handle, this), delete this.waitPool[a]))
            },
            init: function (a, b) {
                var d = this,
                    f = p[this.FN];
                if (f) {
                    var g = f[this.STACK];
                    this.constructorName = a;
                    this.globalConfig = b;
                    g || (f[this.STACK] = g = []);
                    var m = g.push;
                    g.push = function () {
                        var a = m.apply(g,
                            arguments);
                        l.arrayEvery(arguments, d.handle, d);
                        return a
                    };
                    f && l.isArray(g) && l.arrayEvery(g, this.handle, this)
                }
            }
        };
    r.loadScript = function (a, b) {
        b = b || p;
        var d = l.mixin({
                type: "text/javascript",
                charset: "utf-8",
                async: !0
            }, a),
            f = b.document,
            g = l.getNativeFunction("createElement", f),
            m = g("script");
        if (m) {
            m.type = d.type;
            m.charset = d.charset;
            m.src = d.src;
            d.async && (m.async = !0);
            try {
                var h = f.getElementsByTagName("head")[0];
                if (!h) {
                    var n = f.getElementsByTagName("html")[0];
                    h = g("head");
                    n && n.appendChild(h)
                }
                h.insertBefore(m, h.firstChild);
                return m
            } catch (e) {}
        }
    };
    var Xb = sa.inherit({
            id: "script",
            index: 6,
            request: function (a, b, d, f) {
                var g = !1,
                    m = l.getNativeFunction("createElement", q)("script");
                this.timeout && l.setTimeout(function () {
                    g || (g = !0, r.removeNode(m), d.call(f, !1))
                }, this.timeout, "ts.request");
                if (!m) return g = !0, d.call(f, !1), !1;
                var h = "_ymjsp" + l.random();
                p[h] = B(function () {
                    if (!g) {
                        try {
                            delete p[h]
                        } catch (e) {
                            p[h] = y
                        }
                        d.apply(f, l.mergeArrays([!0], arguments));
                        g = !0;
                        r.removeNode(m)
                    }
                }, "transport.script");
                m.type = "text/javascript";
                m.src = this._buildUrl(a,
                    l.mixin({
                        wmode: 5,
                        callback: h
                    }, b));
                m.async = "async";
                var n = q.getElementsByTagName("head")[0];
                n || (n = q.createElement("head"), q.documentElement.appendChild(n));
                l.async(function () {
                    n.insertBefore(m, n.firstChild)
                });
                m.onerror = function () {
                    g = !0;
                    d.call(f, !1);
                    p[h] = y
                };
                return !0
            }
        }),
        vb = ya.inherit({
            id: "XHRhit",
            index: 10,
            _buildUrl: function (a, b) {
                b.wmode = 7;
                return vb.superclass._buildUrl.apply(this, [a, b])
            },
            _parseResp: function (a) {
                var b = fa.parse(a);
                if (!b) throw "";
                return l.map(function (a) {
                    return b[a]
                }, l.keys(b))
            }
        }),
        hb = La.inherit({
            transports: [vb,
                Xb
            ],
            trimParams: !0,
            _initComponent: function () {
                hb.superclass._initComponent.apply(this, arguments);
                this._ilStorage = new ia({
                    counterId: this.counterId
                })
            },
            postParams: [],
            checkYandexHost: function (a) {
                if (a) {
                    a: {
                        if (a = l.parseUrl(a).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/))
                            if (a = a[0].split("yandex").reverse()[0].substring(1), -1 != l.arrayIndexOf(qb, a)) break a;a = !1
                    }
                    a && (this.host = "mc.yandex." + a)
                }
            },
            sendHit: function (a) {
                var b = {},
                    d = this._ilStorage.get("il"),
                    f = this._ilStorage.get("pai");
                a.visitColor && (b.vc =
                    a.visitColor);
                d && (this._ilStorage.remove("il"), b.ilt = W.encode(bb.encode(l.trim(d, wb))));
                f && (this._ilStorage.remove("pai"), b.pai = f);
                this.checkYandexHost(a.referrer);
                this._hitExt({
                    url: a.url,
                    forceNoRedirect: a.forceNoRedirect,
                    nohit: a.nohit,
                    hasPrerender: a.hasPrerender,
                    title: a.title,
                    referrer: a.referrer,
                    vParams: a.vParams,
                    userParams: a.userParams,
                    experiments: a.experiments,
                    modes: a.modes,
                    browserInfo: b,
                    ts: a.ts,
                    tz: a.tz,
                    callback: a.callback,
                    ctx: a.ctx
                }, "hit")
            }
        }),
        xb = I.inherit({
            cid: 3,
            cnt: 0,
            KEY_NAME: "wasSynced",
            _initComponent: function () {
                this._storage =
                    new ia;
                this._cookie = new J
            },
            hit: function (a, b) {
                var d = this,
                    f = b === y ? !0 : !1,
                    g = f ? this._storage.get(this.KEY_NAME) : !1,
                    m = [],
                    h = this.globalConfig.get("fakeHit");
                if (h) return h(function (b) {
                    a(b)
                });
                !g && f && (g = this._cookie.read(this.KEY_NAME)) && (g = fa.parse(g));
                g && g.params && g.time + 864E5 > u.getMs() ? (d.globalConfig.set("isEU", g.params.eu), a(g)) : (this.globalConfig.set("fakeHit", function (a) {
                    m.push(a)
                }), this._getSender().sendHit({
                    forceNoRedirect: this.forceNoRedirect,
                    callback: function (b, e) {
                        var c = b || {};
                        g = {
                            time: u.getMs(),
                            params: c,
                            bkParams: e
                        };
                        d.globalConfig.set("isEU", c.eu);
                        d._storage.set(d.KEY_NAME, g);
                        d._cookie.create(d.KEY_NAME, fa.stringify(g), 1728);
                        a(g);
                        d.globalConfig.set("fakeHit", function (a) {
                            a(g)
                        });
                        l.arrayEvery(m, function (a) {
                            a(g);
                            return 1
                        })
                    }
                }))
            },
            _getSender: function () {
                this._sender || (this._sender = new hb({
                    protocol: "https:",
                    counterType: this.cnt,
                    counterId: this.cid,
                    sendTitle: !1,
                    globalConfig: this.globalConfig,
                    fake: !0
                }));
                return this._sender
            }
        }),
        yb = I.inherit({
            baseUrl: "mc.yandex.",
            globalConfig: D,
            baseTld: "ru",
            partners: {
                "mc.beru.ru": {
                    regex: /^([^/]+\.)?beru\.ru$/,
                    tld: "ru"
                },
                "mc.kinopoisk.ru": {
                    regex: /^([^/]+\.)?kinopoisk\.ru$/,
                    tld: "ru"
                }
            },
            _initComponent: function () {
                var a = this;
                yb.superclass._initComponent.apply(this, arguments);
                this.syncTlds = l.reduce(function (a, d) {
                    return d(a)
                }, qb, [l.bind(l.filter, null, function (b) {
                    return b !== a.baseTld
                }), l.bind(l.reduce, null, function (a, d) {
                    a[d] = [d];
                    return a
                }, {})]);
                l.forEachKey(this.partners, function (a, d) {
                    d.regex.test(p.location.hostname) && (this.syncTlds[d.tld] || (this.syncTlds[d.tld] = []), this.syncTlds[d.tld].push(a), this._replaceBase[a] = !0)
                }, this)
            },
            _replaceBase: {},
            langToDomain: {
                ka: "ge",
                ro: "md",
                tg: "tj",
                tk: "tm",
                et: "ee",
                hy: "com.am",
                he: "co.li",
                ky: "kg",
                uk: "ua",
                be: "by",
                tr: "com.tr",
                kk: "kz"
            },
            sync: function (a) {
                var b = this,
                    d = this._need(),
                    f = -1 != H().hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk)\.(?:\w+|com?\.\w+)$/);
                !this._is() && d ? (this._setStatus(!0), f ? this._getCn().hit(function () {
                    b._sync(d, a)
                }) : a()) : a();
                f && this._addMda()
            },
            _addMda: function () {
                var a = new J({
                        skipPrefix: !0
                    }),
                    b = new J,
                    d = a.read("mda");
                "0" !== d && "1" !== d && a.create("mda", "0", 1036800);
                b.read("mda") && b.erase("mda")
            },
            _is: function () {
                try {
                    return !!this.globalConfig.get("startSync")
                } catch (a) {
                    return !1
                }
            },
            _setStatus: function (a) {
                try {
                    this.globalConfig.set("startSync", a)
                } catch (b) {}
            },
            _need: function () {
                var a = this._getDomainByLang(),
                    b = this._getTld(),
                    d = [],
                    f;
                (f = this.syncTlds[b]) && d.push.apply(d, f);
                f = this.syncTlds[a];
                a !== b && f && d.push.apply(d, f);
                var g = this._getLs().get("synced") || {};
                d = l.arrayFilter(d, function (a) {
                    return (g[a] || 1) + 1440 < u.getMinutes()
                });
                return d.length && d || !1
            },
            _sync: function (a, b) {
                var d,
                    f = 0,
                    g = a.length,
                    l = this;
                if (0 < g) {
                    b = b || function () {};
                    var h = function () {
                        f++;
                        g === f && b()
                    };
                    var n = l._getLs();
                    var e = new za({});
                    for (d = 0; d < g; d++)(function (a) {
                        e.request("https://" + (l._replaceBase[a] ? a : l.baseUrl + a) + "/sync_cookie_image_check", {}, function (b) {
                            h();
                            var c = u.getMinutes();
                            b || (c -= 1435);
                            b = n.get("synced") || {};
                            b[a] = c;
                            n.set("synced", b)
                        })
                    })(a[d])
                } else b()
            },
            _getCn: function () {
                this._cn || (this._cn = new xb({
                    fake: !0,
                    globalConfig: this.globalConfig
                }));
                return this._cn
            },
            _getLs: function () {
                this._ls || (this._ls = new ia);
                return this._ls
            },
            _getTld: function () {
                var a = l.getTld();
                return {
                    am: "com.am",
                    tr: "com.tr",
                    ge: "com.ge",
                    il: "co.il",
                    "\u0440\u0444": "ru",
                    "xn--p1ai": "ru",
                    "\u0443\u043a\u0440": "ua",
                    "xn--j1amh": "ua",
                    "\u0431\u0435\u043b": "by",
                    "xn--90ais": "by"
                }[a] || a
            },
            _getDomainByLang: function () {
                if (!p.navigator) return "ru";
                try {
                    var a = navigator.languages ? navigator.languages[0] : t.getLanguage()
                } catch (b) {}
                a && a.toLowerCase && (a = a.toLowerCase().split("-")[0]);
                return this.langToDomain[a] || "ru"
            }
        }),
        Yb = ya.inherit({
            id: "RawBodyXHR",
            index: 9,
            postParams: ["body"],
            _setHeaders: function () {},
            _preparePostParams: function (a) {
                return a.post.body || ""
            }
        });
    t.isAndroid = B(function () {
        var a = navigator.userAgent.toLowerCase(),
            b = t.getPlatform() || "";
        return -1 < a.indexOf("android") && -1 < a.indexOf("mobile") && b.match(/^android|linux armv/i)
    }, "", !0);
    var Ma = {
            _url: "https://mc.yandex.ru/user_storage_set?",
            _params: {},
            init: function (a) {
                this._params = a || {}
            },
            save: function (a, b) {
                this._getReq().request(this._url + xa.stringify({
                    key: a,
                    value: l.toJSON(b)
                }));
                this._getLs().set(a, b)
            },
            get: function (a) {
                return {
                    remote: this._params[a],
                    local: this._getLs().get(a)
                }
            },
            getNum: function (a) {
                a = this.get(a);
                return Math.max(+a.remote || 0, +a.local || 0)
            },
            _getLs: function () {
                this._ls || (this._ls = new ia);
                return this._ls
            },
            _getReq: function () {
                this._req || (this._req = new za);
                return this._req
            }
        },
        Zb = {
            sync: B(function (a, b, d, f) {
                var g = {
                    t: 'UV|L7,!"T[rwe\x26D_\x3eZIb\\aW#98Y.PC6k'
                };
                this.globalConfig = f || D;
                if (this._enabled(a, b, d)) {
                    this._setStatus(!0);
                    var l = new Yb({
                        method: "GET",
                        withCredentials: !1
                    });
                    var h = this._getHosts();
                    var n = h.length;
                    (function k(a) {
                        var b = h[a];
                        a < n ?
                            l.request(b[0] + ":" + b[1] + "/p", g, function (c, d) {
                                c ? this._save(c, d, b[1]) : k.call(this, a + 1)
                            }, this) : this._save(!1)
                    }).call(this, 0)
                }
            }, "ds"),
            _getHosts: function () {
                var a = [],
                    b = L.protocol,
                    d = t.isIOS();
                (t.isAndroid() || d && "http:" === b) && a.push(["http://127.0.0.1", "30102"], ["http://127.0.0.1", "29009"]);
                d && "https:" === b && a.push(["https://yandexmetrica.com", "30103"], ["https://yandexmetrica.com", "29010"]);
                return a
            },
            _save: function (a, b, d) {
                var f = u.getMinutes();
                a ? (new La({
                    protocol: "https:",
                    counterType: 0,
                    counterId: 42822899,
                    sendTitle: !1,
                    fake: !0
                })).sendDevice({
                    data: l.trim(b),
                    port: d
                }) : f -= 45;
                Ma.save("ds", f)
            },
            _is: function () {
                try {
                    return !!this.globalConfig.get("dSync")
                } catch (a) {
                    return !1
                }
            },
            _enabled: function (a, b, d) {
                if (!(60 < u.getMinutes() - Ma.getNum("ds")) || this._is() || l.isDev(this.globalConfig)) return !1;
                a = 0 === b && 0 <= l.arrayIndexOf([39370095, 1282253, 29302335, 43653484, 41734944, 31048081, 16443139, 27737346, 41870499, 33911514, 30744873, 5564395, 2580487], a);
                a = ra() || !d && .1 >= Math.random() && a;
                d = t.isIOS() && a;
                return t.isAndroid() && a || d
            },
            _setStatus: function (a) {
                try {
                    this.globalConfig.set("dSync",
                        a)
                } catch (b) {}
            }
        },
        T = {
            getPos: function (a) {
                var b = r.getRootElement(),
                    d = r.getDocumentScroll();
                return [a.pageX || a.clientX + d[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + d[1] - (b.clientTop || 0) || 0]
            },
            getTarget: function (a) {
                var b = null;
                try {
                    if (b = a.target || a.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== q && (b = null)
                } catch (d) {}
                return b
            },
            getMouseButton: function (a) {
                return a.which || a.button == y ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
            },
            prevent: function (a) {
                a = a || p.event;
                a.preventDefault ?
                    a.preventDefault() : a.returnValue = !1
            }
        };
    T.dispatchCustomEvent = B(function (a, b) {
        var d;
        b = b || q;
        if (d = l.getNativeFunction("createEvent", q)("Event")) d.initEvent(a, !1, !1), l.getNativeFunction("dispatchEvent", b)(d)
    }, "evt.dispatch");
    var Ra = {
            lastReferrer: null
        },
        Da = I.inherit({
            counter: null,
            prefsEcommerce: null,
            status: {
                NEW: y,
                PENDING: 1,
                OK: 2,
                FAIL: 3
            },
            dataLayerName: "dataLayer",
            _initComponent: function () {
                Da.superclass._initComponent.apply(this, arguments);
                this.frameConnector && this.frameConnector.addHandler("params", function (a,
                                                                                          b) {
                    if (this.counter && this.counter.params) this.onCookies(function (a) {
                        this.counter.params(a.data)
                    }, this, b)
                }, this);
                this._overridePush(this.globalConfig.get("dataLayer"))
            },
            waitPool: [],
            onCookies: function (a, b) {
                this.waitPool.push({
                    fn: a,
                    ctx: b,
                    args: [].slice.call(arguments, 2)
                })
            },
            initUserLayer: function () {
                var a = "customArr";
                l.arrayEvery(this.waitPool, function (a) {
                    a.fn.apply(a.ctx, a.args);
                    return 1
                });
                this.onCookies = function (a, d) {
                    a.apply(d, [].slice.call(arguments, 2))
                };
                if (this.prefsEcommerce || this.prefsUseDataLayer) this._overridePush(this.prefsEcommerce) ||
                (l.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce), a = this.dataLayerName, this._tryTimeout = l.bind(this._tryTimeout, this), this._tryTimeout()), this.counter._ecommerce = a
            },
            _overridePush: function (a) {
                if (a && "function" == typeof a.push) {
                    var b = this;
                    b._send(a);
                    var d = a.push;
                    a.push = function () {
                        var a = d.apply(this, arguments);
                        b._send([].slice.call(arguments, 0));
                        return a
                    };
                    return !0
                }
                return !1
            },
            _tryTimeout: function () {
                this._overridePush(p[this.dataLayerName]) || l.setTimeout(this._tryTimeout, 1E3, "dlObserver")
            },
            _callHandlers: function (a) {
                l.arrayEvery(Da.handlers, function (b) {
                    b && b.type && l.arrayEvery(b.type.split(","), function (d) {
                        d.replace(" ", "") === a.type && b.callback && b.callback(a);
                        return 1
                    });
                    return 1
                })
            },
            allowedEvents: "currencyCode add delete remove purchase checkout detail".split(" "),
            _convert: function (a, b) {
                var d = l.keys(b),
                    f = !1,
                    g = {
                        transaction_id: "id",
                        value: "revenue"
                    };
                if (b.items) {
                    var m = {};
                    m[a] = {
                        products: b.items
                    };
                    1 < d.length && (m[a].actionField = l.reduce(function (a, d) {
                        g[d] ? a[g[d]] = b[d] : "currency" === d ? f = b[d] : "items" !==
                            d && b[d] && (a[d] = b[d]);
                        return a
                    }, {}, d));
                    f && (m.currencyCode = f);
                    return m
                }
            },
            _checkGtag: function (a) {
                var b = {
                        view_item: "detail",
                        add_to_cart: "add",
                        remove_from_cart: "remove",
                        begin_checkout: "checkout",
                        purchase: "purchase"
                    },
                    d = [];
                a && "event" === a[0] && b[a[1]] && (a = this._convert(b[a[1]], a[2])) && d.push(a);
                return d
            },
            _send: function (a) {
                var b = [],
                    d = this.allowedEvents,
                    f, g;
                var m = 0;
                for (g = a.length; m < g; m++) {
                    if ((f = a[m]) && f.ymetrikaEvent) {
                        var h = f.ymetrikaEvent;
                        this._callHandlers(h);
                        if ("params" === h.type && h.data) {
                            h.sended || (h.sended = []);
                            if (h.counter) this.counter && this.counter.params && this.counterId == h.counter && (this.onCookies(function (a) {
                                this.counter.params(a.data)
                            }, this, l.mixin({}, h)), h.sended.push(this.counterId));
                            else this.onCookies(function (a) {
                                l.forEachKey(this.globalConfig.get("counters"), function (b, c) {
                                    var d = b.split(":")[0];
                                    !l.inArray(a.sended, d) && c && c.params && (c.params(a.data), a.sended.push(d))
                                }, this)
                            }, this, l.mixin({}, h));
                            h.status == this.status.NEW && h.parent && this.frameConnector && this.frameConnector.checkFrame(p.parent) &&
                            p.parent !== p && (this.frameConnector.sendToParents({
                                type: "params",
                                data: h.data
                            }, function () {
                                h.status = this.status.OK
                            }, this), h.status = this.status.PENDING)
                        }
                    }
                    if (f && f.ecommerce) {
                        var n = {};
                        var e = !1;
                        l.forEachKey(f.ecommerce, function (a, b) {
                            0 <= l.arrayIndexOf(d, a) && (e = !0, n[a] = b)
                        });
                        e && b.push(n)
                    }
                    b = b.concat(this._checkGtag(f))
                }
                if (b.length) this.onCookies(function (a) {
                    this.counter.params({
                        __ym: {
                            ecommerce: a
                        }
                    })
                }, this, b)
            }
        });
    Da.handlers = [];
    var zb = "GDPR-ok GDPR-cross GDPR-cancel GDPR-skip GDPR-frame-skip GDPR-frame-ya GDPR-frame-noya GDPR-open-start GDPR-eu-skip GDPR-open-fail GDPR-open-success GDPR-cookie-success GDPR-cookie-fail GDPR-skip-login GDPR-skip-domain GDPR-skip-na GDPR-skip-eu-na GDPR-skip-wv".split(" "),
        $b = ["https://brozen.yandex.ru", "https://yabro1.zen-test.yandex.ru/yabro/index.html", "https://yabro2.zen-test.yandex.ru/yabro/index.html"],
        ta = I.inherit({
            globalKey: "f1",
            MAX_SIZE: 1E6,
            isYAN: !1,
            trigger: function (a) {
                this.globalConfig.get("dataLayer").push({
                    ymetrikaEvent: {
                        type: a
                    }
                })
            },
            initCounter: function () {},
            enabled: ra() && -1 < p.location.href.indexOf("yagdprcheck\x3d1"),
            _initComponent: function () {
                this._cookie = ta.cookie;
                this._sender = new xb({
                    fake: !0,
                    globalConfig: this.globalConfig,
                    forceNoRedirect: !0
                })
            },
            realise: function (a,
                               b) {
                this.initCounter.apply(p, a);
                this.globalConfig.set(this.globalKey, function (a) {
                    a()
                });
                b.length && eb.chain(b.concat([function () {
                    b = []
                }]), null, !1, "GDPR")
            },
            showPopup: function (a, b, d, f, g) {
                var l = this;
                a = r.loadScript({
                    src: "https://yastatic.net/q/global-notifications/cc/_lego-cc" + a + "." + b + ".js"
                });
                l.trigger("GDPR-open-start");
                a.onerror = function (a) {
                    B(function () {
                        throw a;
                    }, "gdpr-popup")();
                    l.trigger("GDPR-open-fail");
                    l.realise(d, f);
                    l.frameConnector.sendToChildren({
                        type: "GDPR-ok"
                    })
                };
                a.onload = function () {
                    l.trigger("GDPR-open-success");
                    Da.handlers = Da.handlers.concat([{
                        type: "GDPR-ok, GDPR-cross",
                        callback: function (a) {
                            a.once || (g.create("gdpr", "0", 525600), l.realise(d, f), l.frameConnector.sendToChildren({
                                type: "GDPR-ok"
                            }), a.once = !0)
                        }
                    }, {
                        type: "GDPR-cancel",
                        callback: function () {
                            g.create("gdpr", "1");
                            l.logCancel();
                            l.frameConnector.sendToChildren({
                                type: "GDPR-cancel"
                            })
                        }
                    }])
                }
            },
            askGDPR: function (a, b, d, f, g, m) {
                if (l.inArray([null, ""], a)) this.showPopup(b, d, f, g, m);
                else if ("0" === a) this.trigger("GDPR-cookie-success"), this.realise(f, g);
                else if ("1" === a) return this.trigger("GDPR-cookie-fail"),
                    this.logCancel(), !1
            },
            logCancel: function () {
                this._sender.hit(function () {}, !1)
            },
            handle: function () {
                var a = this._sender,
                    b = [],
                    d = (t.getLanguage() || "").toLowerCase().split("-")[0],
                    f = "ontouchstart" in p ? "-touch" : "",
                    g = this._cookie,
                    m = g.read("gdpr"),
                    h = g.read("yaGdprCheck"),
                    n = this,
                    e = this.globalConfig.get(this.globalKey),
                    c = arguments;
                b.size = 0;
                if (e) return e(function () {
                    n.realise(c, b)
                });
                l.inArray("ru en kk be ky tr tt uk".split(" "), d) || (d = "en");
                if (!this.enabled && ("0" === m || t.isSafariWebView() || t.isAndroidWebView() ||
                    l.inArray($b, p.location.href.split("?")[0]) || !ra() || g.read("yandex_login") || this.disable)) return g.read("yandex_login") ? this.trigger("GDPR-skip-login") : ra() ? "0" === m ? this.trigger("GDPR-skip") : t.isSafariWebView() || t.isAndroidWebView() ? this.trigger("GDPR-skip-wv") : this.trigger("GDPR-skip-na") : this.trigger("GDPR-skip-domain"), this.realise(c, b);
                this.globalConfig.set(this.globalKey, function (a, c) {
                    var d = 0;
                    try {
                        d = JSON.stringify(c).length || 0
                    } catch (M) {}
                    b.size + d < n.MAX_SIZE ? (b.push(a), b.size += d) : l.warning("GDPR buffer is exceeded")
                });
                a.hit(function (a) {
                    if (a.params.eu || h || n.enabled)
                        if (n.frameConnector && n.frameConnector.addHandler("isYandex", function () {
                            return {
                                type: "isYandex",
                                isYandex: ra()
                            }
                        }), n.frameConnector.isIframe) {
                            n.frameConnector.sendToParents({
                                type: "isYandex"
                            }, function (a, c) {
                                var d = !1;
                                clearTimeout(e);
                                c[0].isYandex ? (n.trigger("GDPR-frame-ya"), n.frameConnector.addHandler("GDPR-ok", function () {
                                    d || (g.create("gdpr", "0", 525600), n.realise(c, b), d = !0)
                                }), n.frameConnector.addHandler("GDPR-cancel", function () {
                                    g.create("gdpr", "1")
                                })) : (n.trigger("GDPR-frame-noya"),
                                    n.realise(c, b))
                            });
                            var e = l.setTimeout(function () {
                                n.trigger("GDPR-frame-skip");
                                n.realise(c, b)
                            }, 2E3)
                        } else n.askGDPR(m, f, d, c, b, g);
                    else return a.params.eu ? n.trigger("GDPR-skip-eu-na") : n.trigger("GDPR-eu-skip"), n.realise(c, b)
                })
            }
        });
    ta.globalKey = "f1";
    ta.cookie = new J({
        skipPrefix: !0
    });
    ta.getState = function (a) {
        var b = ta.cookie.read("gdpr");
        a = l.reduce(function (a, b) {
            b.ymetrikaEvent && l.inArray(zb, b.ymetrikaEvent.type) && a.push(l.arrayIndexOf(zb, b.ymetrikaEvent.type));
            return a
        }, [], a.get("dataLayer"));
        return a.length ?
            (a = a.join(","), b && (a += "-" + (l.inArray(["0", "1"], b) ? b : "2")), a) : ""
    };
    var ac = {
        init: function (a, b) {
            var d = q.createElement("img");
            a && a.account && a.tmsec && b && (d.src = "https://www.tns-counter.ru/V13a****" + a.account + "/ru/UTF-8/tmsec\x3d" + a.tmsec + "/" + b)
        }
    };
    t.isIE = function () {
        return q && !q.addEventListener || !1
    };
    t.isChromePdf = function () {
        var a, b = navigator.plugins;
        if (b && b.length)
            for (a = 0; a < b.length; a++)
                if (/Chrome PDF Viewer/.test(b[a].name)) return !0;
        return !1
    };
    t.isPrivate = B(function (a) {
        var b = l.bind(a, null, 0),
            d = l.bind(a,
                null, 1);
        if (l.isFunction(p.webkitRequestFileSystem)) return p.webkitRequestFileSystem(0, 0, b, d);
        if (t.isFF()) try {
            if (p.indexedDB && l.isFunction(p.indexedDB.open)) {
                var f = p.indexedDB.open("testYaCall");
                f.onerror = B(function () {
                    d()
                }, "pdbE");
                f.onsuccess = B(function () {
                    b()
                }, "pdbS")
            } else b()
        } catch (g) {
            b()
        } else if (t.isSafari() && l.isFunction(p.openDatabase)) try {
            p.openDatabase(null, null, null, null), b()
        } catch (g) {
            d()
        } else {
            if (p.indexedDB || !p.PointerEvent && !p.MSPointerEvent) return b();
            d()
        }
    }, "isPrivate");
    t.findTarget = function (a) {
        a =
            a.target || a.srcElement;
        var b;
        if (!a) return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (b = a && a.nodeName && a.nodeName.toString().toLowerCase(); a && a.parentNode && a.parentNode.nodeName && ("a" !== b && "area" !== b || !a.href && !a["xlink:href"]);) b = (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    };
    t.getHref = function (a) {
        if (!a) return "";
        a = a.href;
        return l.isString(a) ? "" + a : "[object SVGAnimatedString]" === l.toString(a) ? "" + a.baseVal : ""
    };
    var bc = O.inherit({
            resource: "clmap",
            retry: !0,
            transports: [za],
            sendClick: function (a, b, d, f) {
                this.send({
                    "page-url": a,
                    "pointer-click": b
                }, {}, d, f)
            }
        }),
        cc = I.inherit({
            filter: null,
            ignoreTags: [],
            quota: 0,
            isTrackHash: !1,
            protocol: "",
            counterId: 0,
            counterType: 0,
            startTime: 0,
            MAX_LEN_PATH: 128,
            TIMEOUT_CLICK: 50,
            TIMEOUT_SAME_CLICKS: 1E3,
            DELTA_SAME_CLICKS: 2,
            tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
            _initComponent: function () {
                var a, b;
                this._lastClick = null;
                this.hasQuota = !!this.quota;
                this._quota = this.quota;
                this._ignoreTags = [];
                if (this.ignoreTags)
                    for (a = 0; a < this.ignoreTags.length; a++) this.ignoreTags[a] && l.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
                this._cacheTags = {};
                a = 59;
                var d = String.fromCharCode;
                for (b = 0; b < this.tags.length; b++) this._cacheTags[this.tags[b]] = d(a), d(a), a++;
                this._sender = new bc({
                    globalConfig: this.globalConfig,
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                this._start = !1;
                this.start()
            },
            destroy: function () {
                this.stop()
            },
            start: function () {
                if (!this._start) w.on(q, "click", this._handler, this);
                this._start = !0
            },
            stop: function () {
                this._start && w.un(q, "click", this._handler, this);
                this._start = !1
            },
            setTrackHash: function (a) {
                this.isTrackHash = a
            },
            _isIgnore: function (a) {
                return r.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
            },
            _handler: function (a) {
                a = {
                    el: T.getTarget(a),
                    pos: T.getPos(a),
                    button: T.getMouseButton(a),
                    time: +new Date
                };
                if (this._isTrackingClick(a)) {
                    var b =
                        r.getElementSize(a.el);
                    var d = r.getElementXY(a.el);
                    b = ["rn", l.random(), "x", Math.floor(65535 * (a.pos[0] - d[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - d[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el)];
                    d = H().href;
                    this.isTrackHash ? l.mergeArrays(b, ["wh", "1"]) : d = d.split("#")[0];
                    this._sender.sendClick(l.trim(d, db), b.join(":"));
                    this._lastClick = a
                }
            },
            _isTrackingClick: function (a) {
                var b;
                if (p.ymDisabledClickmap || l.isMetrikaPlayer() || !a.el) return !1;
                var d = a.el.tagName;
                if ((2 ==
                    a.button || 3 == a.button) && "A" != d || this.filter && !this.filter(a.el, d)) return !1;
                for (b = 0; b < this._ignoreTags.length; b++)
                    if (this._ignoreTags[b] == d) return !1;
                for (d = a.el; d;) {
                    if (this._isIgnore(d)) return !1;
                    d = d.parentNode
                }
                if (this._lastClick) {
                    if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
                    d = Math.abs(this._lastClick.pos[0] - a.pos[0]);
                    b = Math.abs(this._lastClick.pos[1] - a.pos[1]);
                    var f = a.time - this._lastClick.time;
                    if (this._lastClick.el == a.el && d < this.DELTA_SAME_CLICKS && b < this.DELTA_SAME_CLICKS && f < this.TIMEOUT_SAME_CLICKS) return !1
                }
                if (this.hasQuota) {
                    if (!this._quota) return !1;
                    this._quota--
                }
                return !0
            },
            _getElPath: function (a) {
                for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;) b += this._cacheTags[a.tagName] || "*", b += r.getElementNeighborPosition(a) || "", a = a.parentNode;
                return l.trim(b, this.MAX_LEN_PATH)
            }
        }),
        Ab = I.inherit({
            injectHash: {
                Wjw75ghm7fa7JW8p: "https://yastatic.net/metrika-static-watch/assessor-init.js",
                Z4RhWJNDJanzkGJa: "https://yastatic.net/metrika-static-watch/assessor-compare.js"
            },
            ASSESSOR_COOKIE: "assessor",
            REMOTE_CONTROL: "i",
            getInjectHash: function () {
                var a = {};
                l.forEachKey(this.injectHash, function (b) {
                    a[Aa + ("" + l.fnv32a(b))] = this.injectHash[b]
                }, this);
                return a
            },
            checkAssessor: function () {
                var a = [],
                    b = this.getInjectHash();
                l.forEachKey(b, function (d) {
                    if ((new RegExp(d)).test(p.location.hash) || J.get(this.ASSESSOR_COOKIE + d)) J.set(this.ASSESSOR_COOKIE + d), a.push(b[d])
                }, this);
                return a
            },
            _initComponent: function () {
                var a = this.checkAssessor();
                this.globalConfig.get(this.REMOTE_CONTROL) || (this.globalConfig.set(this.REMOTE_CONTROL, !0), Ab.superclass._initComponent.apply(this,
                    arguments), this._executedMsgs = {}, w.on(p, "message", this._onMessage, this), a.length && (this.globalConfig.set("oo", !0), this.globalConfig.get("stopRecoder", function () {})(), l.arrayEvery(a, function (a) {
                    r.loadScript({
                        src: a
                    }, p);
                    return 1
                })))
            },
            _buildRemoteIframe: function (a) {
                var b = l.getNativeFunction("createElement", q)("div"),
                    d = r.getBody() || q.documentElement;
                if (d) {
                    b.innerHTML = '\x3ciframe name\x3d"RemoteIframe" allowtransparency\x3d"true" style\x3d"position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"\x3e\x3c/iframe\x3e';
                    var f = b.firstChild;
                    f.onload = function () {
                        r.loadScript({
                            src: a
                        }, f.contentWindow)
                    };
                    p._ym__remoteIframeEl = f;
                    b.createShadowRoot || b.webkitCreateShadowRoot ? (d.appendChild(b), b.removeChild(f), (d = b.createShadowRoot ? b.createShadowRoot() : b.webkitCreateShadowRoot()) && d.appendChild(f), p._ym__remoteIframeContainer = b) : (d.appendChild(f), p._ym__remoteIframeContainer = f)
                }
            },
            _isAllowedLang: function (a) {
                return -1 !== l.arrayIndexOf(["ru", "uk", "en", "tr"], a)
            },
            _isAllowedOrigin: function (a) {
                return /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/.test(a)
            },
            _isAllowedStatic: function (a) {
                return /^(([\w\-.]+\.)?dev\.webvisor\.com|yastatic\.net|[\w\-.]+\.s3\.yandex\.net)$/.test(a)
            },
            _onMessage: function (a) {
                try {
                    var b = a.origin
                } catch (d) {}
                b && this._isAllowedOrigin(b) && (b = fa.parse(a.data)) && "appendremote" === b.action && this._isAllowedStatic(l.parseUrl(b.domain).host) && this._isAllowedLang(b.lang) && !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0, p._ym__postMessageEvent = a, p._ym__inpageMode = b.inpageMode, p._ym__initMessage = b.initMessage, this._buildRemoteIframe(b.domain +
                    "/cdn/inpage-remote/" + (b.newScriptAddr ? "_inpage-remote_" : "inpage-remote.") + b.lang + ".js"))
            }
        }),
        dc = {
            match: function () {
                this.enabled() && w.ready(function () {
                    var a = l.getNativeFunction("createElement", q)("iframe");
                    a.onload = function () {
                        Ma.save("cm", u.getMinutes());
                        r.removeNode(a)
                    };
                    a.style.display = "none";
                    a.src = "https://mc.yandex.ru/metrika/watch_match.html";
                    q.documentElement.appendChild(a)
                })
            },
            enabled: function () {
                return 1440 < u.getMinutes() - Ma.getNum("cm") && "tr" === l.getTld()
            }
        };
    B(function () {
        (function (a) {
            function b(f) {
                if (d[f]) return d[f].exports;
                var g = d[f] = {
                    i: f,
                    l: !1,
                    exports: {}
                };
                a[f].call(g.exports, g, g.exports, b);
                g.l = !0;
                return g.exports
            }
            var d = {};
            b.m = a;
            b.c = d;
            b.d = function (a, d, l) {
                b.o(a, d) || Object.defineProperty(a, d, {
                    configurable: !1,
                    enumerable: !0,
                    get: l
                })
            };
            b.n = function (a) {
                var d = a && a.__esModule ? function () {
                    return a["default"]
                } : function () {
                    return a
                };
                b.d(d, "a", d);
                return d
            };
            b.o = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            };
            b.p = "";
            return b(b.s = 3)
        })({
            0: function (a, b, d) {
                b.__esModule = !0;
                b.listToArray = function (a) {
                    return a ? [].slice.call(a) : []
                }
            },
            1: function (a, b, d) {
                b.__esModule = !0;
                var f = [".googlesyndication.com/", "/googleads"];
                b.isGoogleSrc = function (a) {
                    return !(!a || !f.filter(function (b) {
                        return 0 < a.indexOf(b)
                    }).length)
                }
            },
            3: function (a, b, d) {
                b.__esModule = !0;
                a = {
                    detectAd: d(4).detectAd
                };
                p.Ya ? p.Ya.AdDetector ? a = p.Ya.AdDetector : p.Ya.AdDetector = a : p.Ya = {
                    AdDetector: a
                };
                b.AdDetector = a
            },
            34: function (a, b, d) {
                b.__esModule = !0;
                b.getParentElementsCount = function (a) {
                    for (var b = 0;;)
                        if (a = a.parentElement) b++;
                        else return b
                }
            },
            4: function (a, b, d) {
                b.__esModule = !0;
                var f =
                        d(5),
                    g = d(9),
                    l = d(34),
                    h = d(6),
                    n = q.body,
                    e = q.documentElement;
                b.detectAd = function () {
                    var a = p.pageYOffset || e.scrollTop || n.scrollTop,
                        b = p.pageXOffset || e.scrollLeft || n.scrollLeft,
                        d = e.clientTop || n.clientTop || 0,
                        m = e.clientLeft || n.clientLeft || 0,
                        q = e.scrollWidth || e.offsetWidth || p.innerWidth,
                        r = e.scrollHeight || e.offsetHeight || p.innerHeight,
                        w = h.getFrienlyWindowsTree(p),
                        t = [];
                    h.windowsTreeEach(w, function (a) {
                        var b = a.window,
                            c = a.parent,
                            d = 0 < f.getParentFriendlyIFrames(b.document.documentElement).length,
                            e = g.getAdsInWindow(b, {
                                isInIFrame: d
                            });
                        d = e.adElements;
                        e = e.iframeProviders;
                        if (c) {
                            var h = b.frameElement,
                                k = t.filter(function (a) {
                                    return a.windowsTree === c
                                })[0].adElements;
                            e.forEach(function (a) {
                                k.push({
                                    provider: a,
                                    element: h
                                })
                            })
                        }
                        t.push({
                            windowsTree: a,
                            adElements: d
                        })
                    });
                    t.forEach(function (a) {
                        a.adElements = a.adElements.sort(function (a, b) {
                            return l.getParentElementsCount(a.element) - l.getParentElementsCount(b.element)
                        })
                    });
                    var u = [],
                        y = [];
                    t.forEach(function (a) {
                        var b = a.windowsTree,
                            c = b.parent;
                        a = a.adElements;
                        b = f.getParentFriendlyIFrames(b.window.document.documentElement);
                        var d = b[b.length - 1];
                        a.forEach(function (a) {
                            var b = a.element;
                            y.push({
                                provider: a.provider,
                                element: c ? d : b
                            })
                        })
                    });
                    y.forEach(function (c) {
                        var e = c.element;
                        var f = e.getBoundingClientRect();
                        var g = f.top + a - d;
                        f = f.left + b - m;
                        var h = e.clientWidth;
                        e = e.clientHeight;
                        var k = f + h,
                            l = g + e,
                            n = 0 > f ? 0 : f < q ? f : q,
                            p = 0 > g ? 0 : g < r ? g : r;
                        100 <= ((k > q ? q : k > n ? k : n) - n) * ((l > r ? r : l > p ? l : p) - p) && u.push({
                            top: g,
                            left: f,
                            width: h,
                            height: e,
                            provider: c.provider
                        })
                    });
                    return {
                        page: {
                            width: q,
                            height: r
                        },
                        window: {
                            top: a,
                            left: b,
                            width: p.innerWidth,
                            height: p.innerHeight
                        },
                        ads: u
                    }
                }
            },
            5: function (a,
                         b, d) {
                b.__esModule = !0;
                b.getParentFriendlyIFrames = function (a) {
                    for (var b = [];;) try {
                        if (a = a.ownerDocument.defaultView.frameElement) b.push(a);
                        else return b
                    } catch (m) {
                        return b
                    }
                }
            },
            6: function (a, b, d) {
                function f(a) {
                    return n.listToArray(a.document.getElementsByTagName("iframe")).filter(function (a) {
                        if (h.isSafari) return !1;
                        try {
                            return a.contentWindow.document
                        } catch (k) {
                            return !1
                        }
                    }).map(function (a) {
                        return a.contentWindow
                    })
                }

                function g(a, b) {
                    var c = {
                        window: a,
                        children: [],
                        parent: b
                    };
                    c.children = f(a).map(function (a) {
                        return g(a,
                            c)
                    });
                    return c
                }

                function l(a, b) {
                    b(a);
                    a.children.forEach(function (a) {
                        return l(a, b)
                    })
                }
                b.__esModule = !0;
                var h = d(7),
                    n = d(0);
                b.getFrienlyWindowsTree = g;
                b.windowsTreeEach = l
            },
            7: function (a, b, d) {
                b.__esModule = !0;
                a = d(8);
                b.isSafari = a.isSafari()
            },
            8: function (a, b, d) {
                b.__esModule = !0;
                b.isSafari = function () {
                    var a = navigator.userAgent.toLowerCase();
                    return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") && -1 === a.indexOf("android")
                }
            },
            9: function (a, b, d) {
                b.__esModule = !0;
                var f = d(0),
                    g = d(1);
                b.getAdsInWindow = function (a, b) {
                    function d(a,
                               b) {
                        b.forEach(function (b) {
                            q.push({
                                provider: a,
                                element: b
                            })
                        })
                    }
                    var e = b.isInIFrame,
                        c = a.document.body,
                        h = f.listToArray(c.querySelectorAll("img")),
                        l = f.listToArray(c.querySelectorAll("iframe")),
                        m = f.listToArray(c.querySelectorAll("script")),
                        p = f.listToArray(c.querySelectorAll("div")),
                        q = [],
                        r = [],
                        w = f.listToArray(c.querySelectorAll("yatag")),
                        t = f.listToArray(c.querySelectorAll("yatag yatag"));
                    d("yandex", w.filter(function (a) {
                        return -1 === t.indexOf(a)
                    }));
                    d("adriver", l.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf(".adriver.ru/")
                    }));
                    d("adfox", l.filter(function (a) {
                        return (a = a.id) && -1 < a.toLowerCase().indexOf("adfox")
                    }));
                    d("adfox", h.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf("/banners.adfox.ru/")
                    }));
                    d("adfox", p.filter(function (a) {
                        return -1 < a.id.indexOf("AdFox_banner_")
                    }));
                    e && h.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf(".adfox.ru/")
                    }).length && r.push("adfox");
                    l.filter(function (a) {
                        return g.isGoogleSrc(a.src)
                    }).forEach(function (a) {
                        q.push({
                            provider: "google",
                            element: a
                        })
                    });
                    e && m.filter(function (a) {
                        return g.isGoogleSrc(a.src)
                    }).length &&
                    r.push("google");
                    d("awaps", l.filter(function (a) {
                        return (a = a.src) && -1 < a.indexOf("awaps.yandex.net/")
                    }));
                    d("criteo", l.filter(function (a) {
                        var b = a.src;
                        a = a.id;
                        return b && (-1 < b.indexOf(".criteo.com/") || a && -1 < a.indexOf("cto_iframe_")) ? !0 : !1
                    }));
                    return {
                        adElements: q,
                        iframeProviders: r
                    }
                }
            }
        })
    }, "", !0)();
    var ec = {
            init: function (a, b) {
                if (Math.random() < (b || .005) && !D.get("adDetect")) {
                    D.set("adDetect", !0);
                    var d = function (b) {
                        var d = p.Ya.AdDetector.detectAd();
                        var f = d.window;
                        var g = d.page;
                        a.sendParams({
                            __ym: {
                                ads: {
                                    w: {
                                        t: f.top,
                                        l: f.left,
                                        w: f.width,
                                        h: f.height
                                    },
                                    p: {
                                        w: g.width,
                                        h: g.height
                                    },
                                    a: l.map(function (a) {
                                        return {
                                            t: a.top,
                                            l: a.left,
                                            w: a.width,
                                            h: a.height,
                                            p: a.provider
                                        }
                                    }, d.ads),
                                    full: b ? 1 : 0
                                }
                            }
                        })
                    };
                    var f = B(function () {
                        w.un(p, "load", f);
                        d(!0)
                    }, "", !0);
                    w.on(p, "load", f);
                    l.setTimeout(d, 1E4, "AdDetector", !0)
                }
            }
        },
        Bb = I.inherit({
            message: p.postMessage,
            spliter: ":",
            nameSpace: "__yminfo",
            pending: {},
            childs: {},
            isIframe: !1,
            parents: {},
            dataToSend: {
                parents: [],
                childs: []
            },
            checkFrame: function (a) {
                try {
                    var b = a && a.postMessage
                } catch (d) {
                    return !1
                }
                return b
            },
            checkChildrenData: function (a,
                                         b) {
                l.arrayEvery(this.dataToSend.childs, function (d) {
                    -1 == l.arrayIndexOf(d.tryTo, b.counterId) && (d.tryTo.push(b.counterId), l.mixin(d.data, {
                        toCounter: b.counterId
                    }), this.sendToIframe(a, d.data, function () {
                        d.sendedTo.push(b.counterId);
                        d.callback && d.callback(b, arguments)
                    }));
                    return !0
                }, this)
            },
            checkParentData: function (a, b) {
                l.arrayEvery(this.dataToSend.parents, function (d) {
                    -1 == l.arrayIndexOf(d.tryTo, b.counterId) && (d.tryTo.push(b.counterId), l.mixin(d.data, {
                        toCounter: b.counterId
                    }), this.sendToIframe(a, d.data, function () {
                        d.sendedTo.push(b.counterId);
                        d.callback && d.callback(b, arguments)
                    }));
                    return !0
                }, this)
            },
            getHandlers: function () {
                return {
                    initToChild: [{
                        fn: function (a, b) {
                            a.source === p.top && this.trigger("parentConnect", a, b)
                        }
                    }],
                    initToParent: [{
                        fn: function (a, b) {
                            this.childs[b.counterId] = {
                                info: b,
                                window: a.source
                            };
                            this.checkChildrenData(a.source, b)
                        }
                    }],
                    parentConnect: [{
                        fn: function (a, b) {
                            this.parents[b.counterId] = {
                                info: b,
                                window: a.source
                            };
                            this.checkParentData(a.source, b)
                        }
                    }]
                }
            },
            genMessage: function (a, b) {
                var d = {
                    date: u.getMs(),
                    key: Math.random(),
                    dir: 0
                };
                b && (d = {
                    date: b[0],
                    key: b[1],
                    dir: b[2]
                });
                l.mixin(a, {
                    counterId: this.counterId,
                    hid: this.hid
                });
                var f = {
                    data: a
                };
                f[this.nameSpace] = [this.nameSpace, d.date, d.key, d.dir].join(this.spliter);
                return {
                    meta: d,
                    string: fa.stringify(f)
                }
            },
            sendToIframe: function (a, b, d, f) {
                b = this.genMessage(b);
                var g = this,
                    m = [b.meta.date, b.meta.key].join(this.spliter);
                this.checkFrame(a) && (a.postMessage(b.string, "*"), this.pending[m] = l.bind(d, f || this), l.setTimeout(function () {
                    delete g.pending[m]
                }, 5E3, this, "fc.toSendToIframe"))
            },
            sendToChildren: function (a, b, d) {
                var f =
                        this,
                    g = this.dataToSend.childs.push({
                        sendedTo: [],
                        tryTo: [],
                        callback: b ? l.bind(b, d || this) : !1,
                        data: a
                    }) - 1;
                l.forEachKey(this.childs, function (a) {
                    this.dataToSend.childs[g].tryTo.push(a);
                    return 1
                }, this);
                l.keys(this.childs).length && l.forEachKey(this.childs, function (b) {
                    this.sendToIframe(f.childs[b].window, l.mixin(a, {
                        toCounter: b
                    }), function (a) {
                        this.dataToSend.childs[g].sendedTo.push(b);
                        this.dataToSend.childs[g].callback && this.dataToSend.childs[g].callback(a)
                    }, this)
                }, this)
            },
            sendToParents: function (a, b, d) {
                var f = this.dataToSend.parents.push({
                    sendedTo: [],
                    tryTo: [],
                    callback: b ? l.bind(b, d || this) : !1,
                    data: a
                }) - 1;
                l.forEachKey(this.parents, function (a) {
                    this.dataToSend.parents[f].tryTo.push(a);
                    return 1
                }, this);
                l.keys(this.parents).length && this.sendToIframe(p.parent, a, function (a) {
                    l.forEachKey(this.parents, function (b) {
                        this.dataToSend.parents[f].sendedTo.push(b);
                        this.dataToSend.parents[f].callback && this.dataToSend.parents[f].callback(a)
                    }, this)
                }, this)
            },
            addHandler: function (a, b, d) {
                this.handlers[a] || (this.handlers[a] = []);
                this.handlers[a].push({
                    fn: b,
                    ctx: d
                })
            },
            _initComponent: function () {
                var a =
                        p.document.getElementsByTagName("iframe"),
                    b = 0;
                Bb.superclass._initComponent.apply(this, arguments);
                this.handlers = l.mixin({}, this.getHandlers());
                this.isIframe = t.isIframe();
                if (this.message) {
                    for (b = 0; b < a.length; b++) {
                        var d = a[b];
                        (function (a, b) {
                            a.sendToIframe(b.contentWindow, {
                                type: "initToChild"
                            }, function (d) {
                                a.childs[d.counterId] = {
                                    info: d,
                                    window: b.contentWindow
                                }
                            })
                        })(this, d)
                    }
                    this.isIframe && this.sendToIframe(p.parent, {
                        type: "initToParent"
                    }, function (a) {
                        this.trigger("parentConnect", {
                            source: p.parent
                        }, a)
                    });
                    w.on(p,
                        "message", this.onMessage, this, {
                            passive: !1,
                            name: "FrameConnector"
                        })
                }
            },
            trigger: function (a, b, d) {
                var f = this;
                return l.map(function (a) {
                    a = a.fn.call(a.ctx || f, b, d) || {};
                    return l.mixin(a, {
                        counterId: f.counterId,
                        hid: f.hid
                    })
                }, this.handlers[a])
            },
            DIR_INDEX: 2,
            onMessage: function (a) {
                var b, d = [];
                try {
                    var f = a.data;
                    f = fa.parse(a.data);
                    var g = f[this.nameSpace]
                } catch (h) {
                    return
                }
                if (g && g.substring && g.substring(0, this.nameSpace.length) == this.nameSpace) {
                    for (b = 0; 3 >= b; b++) {
                        var m = l.arrayIndexOf(g, this.spliter); - 1 !== m ? d.push(g.substring(0,
                            m)) : d.push(g);
                        g = g.substring(m + 1)
                    }
                    b = d.splice(1, 3);
                    if ((f = f.data) && f.type && this.handlers[f.type] && "0" === b[this.DIR_INDEX]) {
                        if (!f.toCounter || f.toCounter === this.counterId) {
                            try {
                                a.source
                            } catch (h) {
                                return
                            }
                            f.counterId && this.checkFrame(a.source) && (m = this.trigger(f.type, a, f), a.source.postMessage(this.genMessage(m, [b[0], b[1], f.counterId]).string, "*"))
                        }
                    } else b[this.DIR_INDEX] == this.counterId && l.isArray(f) && l.arrayEvery(f, function (a) {
                        return a.counterId && a.hid
                    }) && (a = this.pending[[b[0], b[1]].join(this.spliter)]) &&
                    a.apply(this, f)
                }
            }
        }),
        L = H(),
        Xa = u.getTimezone(),
        Za = u.getTimestamp(),
        da = p.screen,
        Qb = 64,
        db = t.isIE() ? 512 : 2048,
        Rb = t.isIE() ? 512 : 2048,
        sb = t.isIE() ? 100 : 400,
        wb = 100,
        cb = "noindex",
        Cb = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
        fc = +new Date,
        ma = "Metrika",
        ib, Ta, Aa = function () {
            return "1409"
        }();
    D.init().setSafe("counters", {}).setSafe("hitParam", {}).setSafe("counterNum", 0).setSafe("dataLayer", []).setSafe("hitId", l.random(1, 1073741824)).setSafe("_globalMetrikaHitId", l.random()).setSafe("v", Aa);
    ma = "Metrika2";
    p.Ya[ma] = function (a, b, d, f) {
        var g = this;
        return B(function () {
            function m(a) {
                var b = q.referrer || "",
                    c, d;
                if ((new RegExp("^https?://" + L.host + "/")).test(b)) return !1;
                var e = a.patterns;
                for (c = 0; c < e.length; c++) {
                    var f = new RegExp(e[c], "i");
                    if (b.match(f))
                        if (f =
                            a.params || [], f.length) {
                            var g = l.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20"));
                            for (d = 0; d < f.length; d++)
                                if (g == l.safeDecodeURIComponent(f[d])) return !0
                        } else return !0
                }
                return !1
            }

            function h(a, b) {
                var c = !1,
                    d;
                if (a && "string" != typeof a && a.length)
                    for (d = 0; d < a.length; d++) {
                        var e = a[d].selector;
                        var f = a[d].text;
                        var g = e.charAt(0);
                        e = e.slice(1);
                        if ("#" == g) {
                            if (g = q.getElementById(e)) c = !0, b && Ia.unshift([g, g.innerHTML]), g.innerHTML = f
                        } else if ("." == g)
                            for (g = r.getElementsByClassName(e), e = 0; e < g.length; e++) {
                                c = !0;
                                var h =
                                        g[e],
                                    l = f;
                                b && Ia.unshift([h, h.innerHTML]);
                                h.innerHTML = l
                            }
                    }
                return c
            }

            function n() {
                var a;
                for (a = 0; a < Ia.length; a++) Ia[a][0].innerHTML = Ia[a][1]
            }

            function e(a, b) {
                var c, d = "";
                a = a && a.replace(/^\?/, "");
                b = b && b.replace(/^#/, "") || "";
                if (a) {
                    var e = a.split("\x26");
                    for (c = 0; c < e.length; c++) {
                        var f = e[c].split("\x3d");
                        "_openstat" === f[0] && (d = f[1])
                    }
                }
                var g = b.split("?");
                for (c = 0; c < g.length; c++) {
                    var h = g[c].split("\x26");
                    for (e = 0; e < h.length; e++) f = h[e].split("\x3d"), "_openstat" === f[0] && (d = f[1])
                }
                d && (d = -1 < d.indexOf(";") ? l.safeDecodeURIComponent(d) :
                    bb.decode(W.decode(d.replace(/[-*_]/g, function (a) {
                        return {
                            "*": "+",
                            "-": "/",
                            _: "\x3d"
                        }[a] || a
                    }))));
                return d && (c = d.split(";"), 4 == c.length) ? {
                    service: c[0],
                    campaign: c[1],
                    ad: c[2],
                    source: c[3]
                } : null
            }

            function c(a, b) {
                return B(function () {
                    if (!g.isDestructing()) return a.apply(this, arguments)
                }, b || "")
            }

            function k() {
                var c = !1;
                Ba || (O.initCookie(), rb.init(D));
                Ka.initPU(ha, D);
                t.isAndroidWebView() || Ka.initPP(D);
                O.retransmit(D);
                Ga && ac.init(Ga, Ha);
                aa.init(sa);
                ub.subscribe(ja);
                if (D.get("hitParam")[ja]) {
                    if (1 != d || D.get("counters")[ja]) return !1;
                    c = !0
                }
                D.get("counters")[ja] = g;
                D.get("hitParam")[ja] = 1;
                l.async(function () {
                    Ka.initFip(D)
                }, this, "initFip");
                g._webvisor = C.webvisor || !1;
                g._directCampaign = C.directCampaign;
                C.trackHash && da(!0);
                if (!c) {
                    Fa = new tb({
                        protocol: "https:",
                        globalConfig: D,
                        counterId: a,
                        counterType: d,
                        hid: Ha,
                        tz: Xa,
                        ts: Za,
                        url: L.href,
                        enabled: g._webvisor
                    });
                    g.replacePhones();
                    c = new yb({
                        globalConfig: D
                    });
                    var k = function (c) {
                        var k = new hb({
                                protocol: "https:",
                                counterType: d,
                                counterId: a,
                                trackHash: ea,
                                hitId: Ha,
                                webvisor: g._webvisor,
                                counter: g,
                                globalConfig: D,
                                counterNum: ya
                            }),
                            la = {
                                ut: va,
                                he: ~~C.httpError,
                                ad: 1 == d && p.Ya && p.Ya.Direct,
                                pv: !0,
                                cpf: t.isChromePdf(),
                                saveRef: !0
                            };
                        ib = +new Date;
                        k.sendHit({
                            url: P,
                            referrer: Q,
                            title: r.getDocumentTitle(),
                            vParams: b,
                            userParams: Aa,
                            nohit: f,
                            experiments: na,
                            modes: la,
                            visitColor: Fa.getVc(),
                            hasPrerender: Ea,
                            ts: Za,
                            tz: Xa,
                            callback: function (k, la) {
                                var R;
                                f || (Ea = !1);
                                k = k || {};
                                (R = "0" !== k.pcs) || Ka.initZZ();
                                k.eu !== y && D.set("isEU", k.eu);
                                Ma.init(la);
                                dc.match();
                                Zb.sync(a, d, R, D);
                                U.log("PageView. Counter ", a, ". URL: ", L.href, ". Referrer: " + q.referrer,
                                    ". Params: ", b);
                                Ta || (Ta = +new Date);
                                k.webvisor && (k.webvisor.isEU = D.get("isEU"));
                                if (!g.isDestructing()) {
                                    Fa.start(k.webvisor, k.publisher);
                                    var r = k.mp2;
                                    R = new J({
                                        counterId: a
                                    });
                                    R.erase("mp2_substs");
                                    if (r) {
                                        b: {
                                            var t = r.conditions;
                                            var v;
                                            if (t && t.length)
                                                for (v = 0; v < t.length; v++) {
                                                    var u = t[v];
                                                    if ("ref" == u.type) u = m(u);
                                                    else if ("adv" == u.type) {
                                                        var x;
                                                        var Z = u;
                                                        var A = p.Ya._metrika.counter._directCampaign;
                                                        var z = Z.ServiceNamePattern;
                                                        var qa = Z.RefererPattern;
                                                        u = A ? Z.direct_orders : Z.direct_camp;
                                                        var B = q.referrer,
                                                            C = xa.parse(L.search),
                                                            E = e(L.search, L.hash),
                                                            oa = {};
                                                        var F = ["source", "medium", "campaign", "term", "content"];
                                                        for (x = 0; x < F.length; x++) C["utm_" + F[x]] && (oa[F[x]] = C["utm_" + F[x]]);
                                                        var G = A ? "direct.yandex.ru" : E && E.service || oa.source;
                                                        x = !1;
                                                        if (!x && z && z.length)
                                                            for (F = 0; F < z.length; F++)
                                                                if ((new RegExp(z[F], "i")).test(G)) {
                                                                    x = !0;
                                                                    break
                                                                }
                                                        if (!x && !Z.yandex_direct && qa && qa.length)
                                                            for (z = 0; z < qa.length; z++)
                                                                if ((new RegExp(qa[z], "i")).test(B)) {
                                                                    x = !0;
                                                                    break
                                                                }!x && Z.google_adwords && C.gclid && (x = !0);
                                                        if (x && u && u.length && (x = !1, A = A || E && E.campaign || oa && oa.campaign))
                                                            for (Z =
                                                                     0; Z < u.length; Z++)
                                                                if (u[Z] == A) {
                                                                    x = !0;
                                                                    break
                                                                }
                                                        u = x
                                                    } else u = !1;
                                                    if (u) {
                                                        t[v].track_id && R.create("mp2_track", t[v].track_id, 43200);
                                                        break b
                                                    }
                                                }
                                        }
                                        t = R.read("mp2_track");r = r.substs && r.substs[t];t && r ? (R.create("mp2_substs", l.toJSON(r)), R = h(r), g.params("__ym", R ? "mp_trackid" : "mp_trackid_bad", t)) : n()
                                    }
                                    else n();
                                    w.on(p, "load", g.replacePhones, g)
                                }
                                g._inited = !0;
                                c && c()
                            }
                        })
                    };
                    c.sync(k)
                }
                A(!1);
                w.on(q, "click", E);
                0 != l.keys(C).length && (za && za.initUserLayer(), C.enableAll ? (A(!0), F(!0), z()) : (C.clickmap && F(C.clickmap), C.trackLinks && A(C.trackLinks),
                C.accurateTrackBounce && z(C.accurateTrackBounce)), C.triggerEvent && l.async(function () {
                    T.dispatchCustomEvent("yacounter" + a + "inited")
                }, this, "yacounterInit"))
            }

            function v(a) {
                var b = new ta({
                    frameConnector: ha,
                    globalConfig: D,
                    initCounter: k,
                    disable: C.yaDisableGDPR
                });
                Ea = a;
                b.handle.apply(b, arguments)
            }

            function A(a) {
                var b = {};
                switch (typeof a) {
                    case "string":
                        b.on = !0;
                        break;
                    case "object":
                        b.on = !0;
                        break;
                    case "boolean":
                        b.on = a;
                        break;
                    default:
                        return
                }
                g._trackLinks = b
            }

            function E(a) {
                g._trackLinks && g._trackLinks.on && x(a)
            }

            function x(a) {
                var b =
                        t.findTarget(a),
                    c = t.getHref(b);
                a = {
                    pai: D.get("pai", function () {})()
                };
                if (c) {
                    var d = !1;
                    var e = c ? c.split(/\?/)[0] : "";
                    var f = function (a) {
                        var d = nb(b);
                        N.sendClickLink({
                            url: c,
                            title: c === d ? "" : d,
                            modes: a
                        }, P)
                    };
                    if (Cb.test(e) || Cb.test(c) || ob(c, V) || ob(e, V)) d = !0;
                    e = r.classNameExists(b, "ym-disable-tracklink");
                    var g = r.classNameExists(b, "ym-external-link");
                    e || (a = l.mixin(a, {
                        ln: !0,
                        dl: d
                    }), g ? f(a) : (g = b.hostname || l.parseUrl(b.href).hostname || "", e = C.url ? l.parseUrl(P).hostname : H().hostname, Hb(e, g) ? d ? (a.ln = !1, f(a)) : (d = nb(b), ca.set("pai",
                        a.pai), d && d != c && ca.set("il", l.trim(d, wb))) : c && -1 != c.search(/^ *(data|javascript):/i) || (a.ut = cb, f(a))))
                }
            }

            function F(b) {
                "undefined" === typeof b && (b = !0);
                !0 === b && (b = {});
                g._clickmap && g._clickmap.destroy();
                b && (g._clickmap = new cc({
                    globalConfig: D,
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    isTrackHash: b.isTrackHash,
                    protocol: "https:",
                    counterId: a,
                    counterType: d,
                    startTime: fc
                }))
            }

            function G(a, b) {
                function c() {
                    if (!r) {
                        n && l.clearTimeout(n);
                        var c = h ? k : k + +new Date - m;
                        c = b - c;
                        0 > c && (c = 0);
                        n = l.setTimeout(function () {
                            r = !0;
                            e(!1);
                            a()
                        }, c, "trackUserTime")
                    }
                }

                function d() {
                    g || (f = !0, h = !1, g = !0, c())
                }

                function e(a) {
                    var b;
                    for (b = 0; b < R.length; b += 3)
                        if (a) w.on(R[b], R[b + 1], R[b + 2], {
                            name: "tabTrack"
                        });
                        else w.un(R[b], R[b + 1], R[b + 2])
                }
                var f = !1,
                    g = !1,
                    h = !0,
                    k = 0,
                    m = +new Date,
                    n = null,
                    r = !1;
                if (t.isIE()) l.setTimeout(a, b, "trackUserTime");
                else {
                    var R = [p, "blur", function () {
                        h = f = g = !0;
                        k += +new Date - m;
                        m = +new Date;
                        c()
                    }, p, "focus", function () {
                        f || g || (k = 0);
                        m = +new Date;
                        f = g = !0;
                        h = !1;
                        c()
                    }, q, "click", d, q, "mousemove", d, q, "keydown", d, q, "scroll", d];
                    e(!0);
                    c()
                }
            }

            function z(b) {
                var c =
                        C.referrer ? Q : q.referrer,
                    d = C.url ? P : H().href;
                "number" !== typeof b && (b = 15E3);
                if (!g._isAccurateTrackBounce) {
                    g._isAccurateTrackBounce = !0;
                    var e = new ia({
                        counterId: a
                    });
                    var f = e.get("lastHit");
                    e.set("lastHit", u.getMs());
                    ((e = e.get("lastHit")) && (!f || f < e - 18E5) || !Ib(c, d) || .1 > Math.random()) && G(function () {
                        g.notBounce()
                    }, b)
                }
            }

            function I(a) {
                var b = function () {
                    var a = H().hash.split("#")[1];
                    if ("undefined" == typeof a) return !1;
                    var b = a.indexOf("?");
                    0 < b && (a = a.substring(0, b));
                    return a
                };
                var c = b();
                (function oa() {
                    var d = b();
                    d !== c &&
                    (a(), c = d);
                    X = l.setTimeout(oa, 200, "trackHash")
                })()
            }

            function da(a) {
                if (!1 === a) ea && ("onhashchange" in p ? w.un(p, "hashchange", ma) : l.clearTimeout(X), ea = !1);
                else if (a = ma, !ea) {
                    if ("onhashchange" in p) w.on(p, "hashchange", a);
                    else I(a);
                    ea = !0
                }
                N.setTrackHash(ea);
                g._trackHash = ea
            }

            function ma() {
                var a = {
                    ut: va,
                    ad: 1 == d && p.Ya && p.Ya.Direct,
                    wh: !0,
                    saveRef: !0,
                    pv: !0
                };
                ka = Ra.lastReferrer = ra;
                N.sendAjaxHit({
                    url: C.url ? P : H().href,
                    title: r.getDocumentTitle(),
                    referrer: ka,
                    modes: a
                });
                ra = H().href
            }

            function pa(a, b, c) {
                a = Ca.parseValidate(a, b);
                b = [];
                a && (b.push(a), c = c || {}, l.isFunction(c.callback) && (b.push(c.callback), c.ctx && b.push(c.ctx)));
                b.length && g.params.apply(g, b)
            }
            var va = "",
                C = {},
                ka = "",
                ra = Ra.lastReferrer = L.href,
                sa = 0,
                Ea = !1,
                Fa;
            D.setSafe("counter", g);
            Ja && B(function () {
                throw Ja.error;
            }, "include." + Ja.scope)();
            if ("object" === typeof a) {
                C = a;
                f = a.defer;
                va = a.ut;
                d = a.type;
                b = a.params;
                var Aa = a.userParams;
                var Ga = a.tns;
                var na = C.experiments;
                var Ba = C.nck;
                var P = a.url;
                var Q = a.referrer;
                a = a.id
            }
            if (!p["disableYaCounter" + a]) {
                xa.parse = function (a, b) {
                    var c = {},
                        d;
                    a =
                        a && a.replace(/^\?/, "") || "";
                    if (a.length) {
                        var e = a.split("\x26");
                        for (d = 0; d < e.length; d++)
                            if (e[d]) {
                                var f = e[d].split("\x3d");
                                if (f[0]) {
                                    var g = l.safeDecodeURIComponent(f[0]);
                                    f = l.safeDecodeURIComponent((f[1] || "").replace(/\+/g, "%20"));
                                    b && g in c ? l.isArray(c[g]) ? c[g].push(f) : c[g] = [c[g], f] : c[g] = f
                                }
                            }
                    }
                    return c
                };
                var Ia = [];
                P = P ? P : H().href;
                Q = Q ? Q : q.referrer;
                a = a || 0;
                /^\d+$/.test(a) || (a = 0);
                d = d || 0;
                var ja = a + ":" + d;
                if (D.get("counters")[ja]) return U.log("Duplicate counter " + ja + " initialization"), D.get("counters")[ja];
                var Ha =
                    D.get("hitId");
                var ha = new Bb({
                    counterId: a,
                    hid: Ha
                });
                D.set("counterNum", D.get("counterNum") + 1);
                var ya = D.get("counterNum");
                var N = new La({
                    protocol: "https:",
                    counterType: d,
                    counterId: a,
                    hitId: Ha,
                    counter: g,
                    globalConfig: D,
                    counterNum: ya
                });
                var aa = {
                    init: function (a, b) {
                        if (p.performance && "function" === typeof performance.getEntries && (a === y && (a = 1), !(Math.random() >= a))) {
                            var c = {
                                    1882689622: 1,
                                    2318205080: 1,
                                    3115871109: 1,
                                    3604875100: 1,
                                    339366994: 1,
                                    2890452365: 1,
                                    849340123: 1,
                                    173872646: 1,
                                    2343947156: 1,
                                    655012937: 1,
                                    1996539654: 1,
                                    2065498185: 1,
                                    823651274: 1,
                                    12282461: 1,
                                    1555719328: 1,
                                    1417229093: 1,
                                    138396985: 1
                                },
                                d = performance.getEntries(),
                                e = {},
                                f = {},
                                g = {},
                                h = {},
                                k;
                            b && (g.counterId = 51533966);
                            for (k = 0; k < d.length; k++) {
                                var m = d[k];
                                var n = m.name.replace(/^https?:\/\//, "").split("?")[0];
                                var q = l.fnv32a(n);
                                "script" == m.initiatorType && b && (f[n] = {
                                    dns: Math.round(m.domainLookupEnd - m.domainLookupStart),
                                    tcp: Math.round(m.connectEnd - m.connectStart),
                                    duration: Math.round(m.duration),
                                    response: Math.round(m.responseEnd - m.requestStart),
                                    name: m.name,
                                    decodedBodySize: m.decodedBodySize
                                });
                                !c[q] || e[n] || b || (e[n] = {
                                    dns: Math.round(m.domainLookupEnd - m.domainLookupStart),
                                    tcp: Math.round(m.connectEnd - m.connectStart),
                                    duration: Math.round(m.duration),
                                    response: Math.round(m.responseEnd - m.requestStart),
                                    pages: L.href
                                })
                            }
                            l.keys(e).length && (h.timings8 = e);
                            l.keys(f).length && (h.scripts = f);
                            l.keys(h).length && (new Na(g)).logParams(h)
                        }
                    }
                };
                sa = 24226447 == a ? 1 : .002;
                g.replacePhones = c(function () {
                    var b, c;
                    try {
                        (b = (new J({
                            counterId: a
                        })).read("mp2_substs")) && (c = fa.parse(b)) && h(c, !0)
                    } catch (Z) {}
                    return g
                }, "counter.replacePhones");
                g.reachGoal = c(function (b, c, d, e) {
                    2 <= arguments.length && "function" === typeof c && (e = d, d = c, c = y);
                    U.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                    N.sendGoal(b, {
                        url: C.url ? P : H().href,
                        vParams: c,
                        callback: d,
                        ctx: e
                    });
                    return g
                }, "counter.reachGoal");
                g.trackLinks = c(function (a) {
                    A(a);
                    return g
                }, "counter.trackLinks");
                var ca = new ia({
                    counterId: a
                });
                g.hit = c(function (b, c, d, e, f, h) {
                    b ? (l.isObject(c) && (d = c.referer, e = c.params, f = c.callback, h = c.ctx, c = c.title), P = b, U.log("PageView. Counter " + a, ". URL: " + b, ". Referrer: " +
                        d, ". Params: ", e), N.sendHit({
                        url: b,
                        title: c,
                        hasPrerender: Ea,
                        referrer: d,
                        vParams: e,
                        callback: f,
                        ctx: h
                    }), Ea = !1) : l.warning("Empty hit url");
                    return g
                }, "counter.hit");
                g.params = c(function (b) {
                    var c = arguments.length,
                        d = c,
                        e = [].slice.call(arguments, 0);
                    if (b) {
                        if (1 < arguments.length) {
                            if (l.isFunction(arguments[c - 1])) {
                                var f = arguments[c - 1];
                                d = c - 1
                            } else if (l.isFunction(arguments[c - 2])) {
                                f = arguments[c - 2];
                                var h = arguments[c - 1];
                                d = c - 2
                            }
                            e = [].slice.call(e, 0, d);
                            1 < e.length && (e = [l.array2Props(e)])
                        }
                        c = -1 !== l.arrayIndexOf(l.keys(e[0]),
                            "__ymu");
                        (d = -1 !== l.arrayIndexOf(l.keys(e[0]), "__ym") && e[0].__ym.user_id) ? U.log('Set user id "' + e[0].__ym.user_id + '"'): U.log((c ? "User p" : "P") + "arams. Counter " + a + ". Params: ", e[0]);
                        N.sendParams(e[0], f, h, C.url ? P : H().href)
                    } else l.warning("Wrong params");
                    return g
                }, "counter.params");
                ha.addHandler("pluginInfo", function () {
                    return C
                }, this);
                ha.addHandler("parentConnect", function (a, b) {
                    N.paramsQueue.push({
                        __ym: {
                            parentIframe: {
                                counterId: b.counterId,
                                hid: b.hid
                            }
                        }
                    })
                }, this);
                g.file = c(function (a, b) {
                    a ? (b = b || {}, N.sendFileUpload({
                        url: a,
                        title: b.title,
                        vParams: b.params,
                        callback: b.callback,
                        ctx: b.ctx,
                        referrer: C.url ? P : H().href
                    })) : l.warning("Empty file url");
                    return g
                }, "counter.file");
                g.extLink = c(function (a, b) {
                    a ? (b = b || {}, N.sendExtLink({
                        url: a,
                        title: b.title,
                        vParams: b.params,
                        callback: b.callback,
                        ctx: b.ctx,
                        referrer: C.url ? P : H().href
                    }, P)) : l.warning("Empty link");
                    return g
                }, "counter.extLink");
                g.notBounce = c(function (a) {
                    var b = 0;
                    a = a || {};
                    ib && Ta && (b = Ta - ib);
                    N.sendNotBounce(b, {
                        url: C.url ? P : H().href,
                        callback: a.callback,
                        ctx: a.ctx
                    });
                    return g
                }, "counter.notBounce");
                var V = [];
                g.addFileExtension = c(function (a) {
                    if (!a) return l.warning("Empty extension"), g;
                    "string" === typeof a ? V.push(a) : V = V.concat(a);
                    return g
                });
                g.clickmap = function (a) {
                    F(a);
                    return g
                };
                g.accurateTrackBounce = c(function (a) {
                    z(a);
                    return g
                });
                var X = null;
                var ea = !1;
                g.trackHash = c(function (a) {
                    da(a);
                    return g
                });
                var Ca = {
                    requiredEcommerceFields: ["currency", "goods"],
                    parseValidate: function (a, b) {
                        var c = this.validate(a, b),
                            d;
                        if (!c.isValid) return console && console.log(c.message), !1;
                        c = {};
                        c[a] = {};
                        b.currency && (c.currencyCode = b.currency);
                        b.goods && (c[a].products = b.goods);
                        for (d in b) b.hasOwnProperty(d) && -1 === l.arrayIndexOf(this.requiredEcommerceFields, d) && (c[a].actionField || (c[a].actionField = {}), c[a].actionField[d] = b[d]);
                        return {
                            __ym: {
                                ecommerce: [c]
                            }
                        }
                    },
                    validate: function (a, b) {
                        var c = !1,
                            d = "";
                        if (l.isObject(b)) switch (a) {
                            case "detail":
                            case "add":
                            case "remove":
                                l.isArray(b.goods) && b.goods.length ? (c = l.arrayEvery(b.goods, function (a) {
                                    return l.isObject(a) && (l.isString(a.id) || l.isNumber(a.id) || l.isString(a.name) || l.isString(a.name))
                                })) || (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") :
                                    d = "Ecommerce data should contain 'goods' non-empty array";
                                break;
                            case "purchase":
                                l.isNumber(b.id) || l.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
                        } else d = "Ecommerce data should be an object";
                        return {
                            isValid: c,
                            message: d
                        }
                    }
                };
                g.ecommerceDetail = c(function (a, b) {
                    pa("detail", a, b);
                    return g
                }, "ecommerce.detail");
                g.ecommerceAdd = c(function (a, b) {
                    pa("add", a, b);
                    return g
                }, "ecommerce.add");
                g.ecommerceRemove = c(function (a, b) {
                    pa("remove", a, b);
                    return g
                }, "ecommerce.remove");
                g.ecommercePurchase =
                    c(function (a, b) {
                        pa("purchase", a, b);
                        return g
                    }, "ecommerce.purchase");
                g.userParams = c(function (a, b, c) {
                    l.isObject(a) ? g.params({
                        __ymu: a
                    }, b || function () {}, c) : l.warning("Wrong user params");
                    return g
                }, "uparams");
                g.experiments = c(function (a, b, c) {
                    N.sendExperiments({
                        callback: b,
                        ctx: c,
                        experiments: a
                    });
                    return g
                }, "exps");
                g.id = g.setUserID = c(function (a, b, c) {
                    l.isString(a) || l.isNumber(a) ? g.params({
                        __ym: {
                            user_id: a
                        }
                    }, b || function () {}, c) : l.warning("Incorrect user ID");
                    return g
                }, "id");
                var S = new J;
                g.getClientID = c(function (a) {
                    var b =
                        S.read("uid");
                    a && l.isFunction(a) && a(b);
                    return b
                }, "guid");
                g.enableAll = function () {
                    A(!0);
                    F(!0);
                    z();
                    return g
                };
                g.uploadPage = function () {};
                g.destruct = c(function () {
                    g._isDestructing = !0;
                    w.un(q, "click", E);
                    w.un(p, "load", g.replacePhones, g);
                    da(!1);
                    Fa && Fa.stop();
                    D.set("stopRecoder", y);
                    D.set("counter", y);
                    F(!1);
                    try {
                        delete p["yaCounter" + a], delete D.get("counters")[ja], delete D.get("hitParam")[ja]
                    } catch (la) {}
                });
                g.isDestructing = function () {
                    return !!g._isDestructing
                };
                ec.init(N);
                g._performanceTiming = pb;
                if (a) {
                    var za = new Da({
                        counter: g,
                        counterId: a,
                        globalConfig: D,
                        frameConnector: ha,
                        prefsEcommerce: C.ecommerce,
                        prefsUseDataLayer: C.useDataLayer
                    });
                    if ("prerender" === q.webkitVisibilityState || "prerender" === q.visibilityState) {
                        N.sendPrerenderHit({
                            url: P,
                            vParams: b,
                            title: r.getDocumentTitle(),
                            referrer: q.referrer
                        });
                        var ua = function () {
                            "prerender" !== q.webkitVisibilityState && "prerender" !== q.visibilityState && (w.un(q, "webkitvisibilitychange,visibilitychange", ua), v(!0))
                        };
                        w.on(q, "webkitvisibilitychange,visibilitychange", ua)
                    } else v(!1)
                }
            }
        }, "init")()
    };
    ub.init(ma,
        D);
    new Ab({
        globalConfig: D
    });
    p.Ya[ma].counters = function () {
        var a = [];
        l.forEachKey(D.get("counters"), function (b, d) {
            var f = b.split(":");
            a.push({
                id: +f[0],
                type: +f[1],
                accurateTrackBounce: d._isAccurateTrackBounce,
                clickmap: d._clickmap && d._clickmap._start,
                oldCode: !!p.ya_cid,
                trackHash: !!d._trackHash,
                trackLinks: d._trackLinks && d._trackLinks.on,
                webvisor: !!d._webvisor
            })
        });
        return a
    };
    D.setSafe("getCounters", function () {
        var a = [];
        l.forEachKey(D.get("counters"), function (b, d) {
            var f = b.split(":");
            a.push({
                id: +f[0],
                type: +f[1],
                accurateTrackBounce: d._isAccurateTrackBounce,
                clickmap: d._clickmap && d._clickmap._start,
                oldCode: !!p.ya_cid,
                trackHash: !!d._trackHash,
                trackLinks: d._trackLinks && d._trackLinks.on,
                webvisor: !!d._webvisor
            })
        });
        return a
    });
    p.ya_cid && p.Ya.Metrika && new p.Ya.Metrika(p.ya_cid, p.ya_params, p.ya_class);
    p.ya_cid && !p.ya_hit && (p.ya_hit = function (a, b) {
        p.Ya._metrika.counter && p.Ya._metrika.counter.reachGoal(a, b)
    });
    (function () {
        function a(a) {
            try {
                delete p[a]
            } catch (n) {
                p[a] = y
            }
        }
        var b = "yandex_metrika_callback",
            d = "yandex_metrika_callbacks";
        b = "yandex_metrika_callback2";
        d = "yandex_metrika_callbacks2";
        var f = p[b],
            g = p[d],
            l;
        "function" == typeof f && f();
        if ("object" == typeof g)
            for (f = 0; f < g.length; f++)
                if (l = g[f]) g[f] = null, l();
        a(b);
        a(d)
    })();
    p.Ya[ma].informer = function (a) {
        var b = !!p.Ya[ma]._informer;
        Ya[ma]._informer = a;
        Ya[ma]._informer.domain = "informer.yandex.ru";
        b || r.loadScript({
            src: "https://informer.yandex.ru/metrika/informer.js"
        })
    };
    w.on(q, "click", B(function (a) {
        var b = T.getTarget(a);
        if (b && "ym-advanced-informer" === b.className) {
            var d = b.getAttribute("data-lang");
            var f = b.getAttribute("data-cid");
            p.Ya[ma].informer({
                i: b,
                id: +f,
                lang: d
            });
            T.prevent(a)
        }
    }, "adv-inf"), null, {
        passive: !1
    })
})(this, this.document);