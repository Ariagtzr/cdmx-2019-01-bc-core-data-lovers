! function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    si(!e.document) arroja un nuevo error("jQuery requiere una ventana con un documento");
    devuelva t(e)
  } : t(e)
}("undefined"! = typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
        return "function " == typeof t && " número "! = typeof t.nodeType
      },
      y = function e(t) {
        return null! = t && t === t.window
      },
      v = {
        type: !0,
        src: !0,
        noModule: !0
      };
    función m(e, t, n) {
      var i, o = (t = t || r).createElement("script");
      if (o.text = e, n) para(i en v) n[i] && (o[i] = n[i]);
      t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || " objeto " : typeof e
    }
    var b = " 3.3.1 ",
      w = función(e, t) {
        devolver nuevo w.fn.init(e, t)
      },
      T = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ /
    g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
          return o.call(this)
        },
        get: function (e) {
          return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
          var t = w.merge(this.constructor(), e);
          return t.prevObject = this, t
        },
        cada uno: function (e) {
          return w.each(this, e)
        },
        map: function (e) {
          return this.pushStack(w.map(this, function (t, n) {
            return e.call(t, n, t)
          })), slice: function () {
            return this.pushStack(o.apply(esto, argumentos))
          }, primero: function () {
            return this.eq(0)
          }, last: function () {
            return this.eq(-1)
          }, eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            devuelva this.pushStack(n > = 0 && n < t ? [this[n]] : [])
          }, end: function () {
            return this.prevObject || this.constructor()
          }, push: s, sort: n.sort, splice: n.splice
        },
        w.extend = w.fn.extend = function () {
          var e, t, n, r, i, o, a = argumentos[0] || {},
            s = 1,
            u = argumentos.longitud,
            l = !1;
          para("boolean" == tipo de un && (l = a, a = argumentos[s] || {}, s++), "objeto" == tipo de un || g(a) || (a = {}), s === u && (a = this, s - ); s < u; s++) if (null! = (e = argumentos[s]))
            for (t en e) n = a[t], a! == (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0! == r && (a[t] = r));
          devuelve a
        },
        w.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/ \ D /
            g, ""),
          isReady: !0,
          error: function (e) {
            lanzar nuevo Error(e)
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]"! == c.call(e)) && (!(t = i(e)) || "function " == typeof (n = f.call(t, " constructor ") && t.constructor) && p.call(n) === d)
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
          },
          globalEval: function (e) {
            m(e)
          },
          cada uno: function (e, t) {
            var n, r = 0;
            if (C(e)) {
              for (n = e.length; r < n; r++)
                if (!1 === t.call(e[r], r, e[r])) break
            } else para(r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(T, " ")
          },
          makeArray: function (e, t) {
            var n = t || [];
            return null! = e && (C(Objeto(e)) ? w.merge(n, " string " == typeof e ? [e] : e) : s.call(n, e)), n
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
          },
          fusionar: función(e, t) {
            para(var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.longitud = i, e
          },
          grep: función(e, t, n) {
            para(var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) ! == s && i.push(e[o]);
            return i
          },
          map: function (e, t, n) {
            var r, i, o = 0,
              s = [];
            if (C(e)) para(r = e.length; o < r; o++) null! = (i = t(e[o], o, n)) && s.push(i);
            else para(o en e) null! = (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
          },
          guid: 1,
          support: h
        }),
        "function" = = tipo de símbolo && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Número de código de cadena String Función Array Date RegExp Objeto Error Symbol".split(""), function (e, t) {
          l["[object" + t + "]"] = t.toLowerCase()
        });

        function C(e) {
          var t = !!e && "length"
          en e && e.length, n = x(e);
          return !g(e) && !y(e) && ("array" === n || 0 === t || "número" == tipo de t && t > 0 && t - 1 en e)
        }
        var E = función(e) {
            var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "chisporroteo" + 1 * nueva fecha,
              w = e.document,
              T = 0,
              C = 0,
              E = ae(),
              k = ae(),
              S = ae(),
              D = función(e, t) {
                return e === t && (f = !0), 0
              },
              N = {}.hasOwnProperty,
              A = [],
              j = A.pop,
              q = A.push,
              L = A.push,
              H = A.slice,
              O = function (e, t) {
                para(var n = 0, r = e.length; n < r; n++) si(e[n] === t) devuelve n;
                return -1
              },
              P = "seleccionado | seleccionado | async | autofocus | autoplay | controles | diferir | deshabilitado | oculto | ismap | loop | multiple | open | readonly | required | scoped",
              M = "[\\ x20 \\ t \\ r \\ n \\ f] ",
              R = " (?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) + ",
              I = " \\ [" + M + " * (" + R + ") (?: " + M + " * ([* ^ $ |! ~]? =) " + M + " * (?: '((?: \\\\. | [^ \\\\ ']) *)' | \ "(( ? : \\\\. | [ ^ \\\\\"]) *) \ " | (" + R + ")) | )
                "+ M +" * \\]
            ", W =": ("+ R +")( ? : \\((((( ? ? \\\\. | [ ^ \\\\']) *) ' | \"(((?: \\\\. | [^ \\\\\")) *) \ ") | (( ? : \\\\. | [ ^ \\\\()[\\]] | "+ I +") * ) | .*)\\) | )
                ", $ = new RegExp (M +" + ","
                g "), B = new RegExp (" ^ "+ M +" + | (( ? : ^ | [ ^ \\\\])( ? : \\\\.) * )
                "+ M +" + $ ","
                g "), F = new RegExp (" ^ "+ M +" * , "+ M +" * "), _ = new RegExp (" ^ " + M + " * ([ > +~] | " + M + ")
                " + M + " * "), z = nuevo RegExp (" = " + M + " * ([ ^ \\]
                  '\"] *?) "+ M +" * \\] "," g "), X = nuevo RegExp (W), U = nuevo RegExp (" ^ "+ R +" $ "), V = {ID: new RegExp (" ^ # ("+ R +") "), CLASS: new RegExp (" ^ \\. ("+ R +") "), TAG: new RegExp (" ^ ("+ R +" | [*]) "), ATTR: nuevo RegExp ("^" + I), PSEUDO: nuevo RegExp ("^" + W), NIÑO: nuevo RegExp ("^ :( solo | primero | último | nth | nth-last) - (niño | de -type) (?: \\ ("+ M +" * (even | odd | (([+ -] |) (\\ d *) n |) "+ M +" * (?: ([+ -] | ) "+ M +"* (\\ d +) |)) "+ M +" * \\) |) "," i "), bool: new RegExp (" ^ (?: "+ P +") $ "," i "), needsContext : nuevo RegExp ("^" + M + "* [> + ~] |: (par | impar | eq | gt | lt | nth | first | last) (?: \\ (" + M + "* ((?: - \\ d)? \\ d *) "+ M +" * \\) |) (? = [^ -] | $) "," i ")}, G = / ^ (?: input | select | textarea | botón) $ / i, Y = / ^ h \ d $ / i, Q = / ^ [^ {] + \ {\ s * \ [nativo \ w /, J = / ^ (?: # ([ \ w -] +) | (\ w +) | \. ([\ w -] +)) $ /, K = / [+ ~] /, Z = new RegExp ("\\\\ ([\\ da -f] {1,6} "+ M +"? | ("+ M +") |.) "," ig "), ee = función (e, t, n) {var r =" 0x "+ t- 65536; return r! == r || n? T: r <0? String.fromCharCode (r + 65536): String.fromCharCode (r >> 10 | 55296,1023 & r | 56320)}, te = / ([\ 0- \ x1f \ x7f] | ^ -? \ D) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g, ne = function (e, t) {return t? "\ 0" === e? "\ Ufffd": e.slice (0, -1) + "\\" + e.charCodeAt (e.length-1).toString (16) + "": "\\" + e}, re = function () {p ()}, ie = me (function (e) {return! 0 === e.disabled && ("form" en e || "etiqueta" en e)}, {dir: "parentNode", siguiente: "legend"}); intente {L.apply (A = H.call (w.childNodes), w.childNodes), A [ w.childNodes.length] .nodeType} catch (e) {L = {apply: A.length? function (e, t) {q.apply (e, H.call (t))}: function (e, t ) {var n = e.length, r = 0; while (e [n ++] = t [r ++]); e.length = n-1}}} función oe (e, t, r, i) {var o , s, l, c, f, h, v, m = t && t.ownerDocument, T = t? t.nodeType: 9; if (r = r || [], "string"! = typeof e ||! e || 1! == T & Y 9! == T && 11! == T) devuelve r; if (! I && ((t? T.ownerDocument || t: w)! == d && p (t), t = t || d , g)) {if (11! == T && (f = J.exec (e))) if (o = f [1]) {if (9 === T) {if (! (l = t. getElementById (o))) devuelve r; if (l.id === o) devuelve r.push (l), r} else if (m && (l = m.getElementById (o)) && x (t, l) && l.id === o) devolver r.push (l), r} else {if (f [2]) devolver L.apply (r, t.getElementsByTagName (e)), r; if ((o = f [3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply (r, t.getElementsByClassName (o)) r} if (n.qsa &&! S [e + ""] && (! Y ||! Y.test ( e))) {if (1! == T) m = t, v = e; else if ("object"! == t.nodeName.toLowerCase ()) {(c = t.getAttribute ("id") )? c = c. lugar (te, ne): t.setAttribute ("id", c = b), s = (h = a (e)). length; while (s -) h [s] = "#" + c + "" + ve (h [s]); v = h.join (","), m = K.test (e) && ge (t.parentNode) || t} if (v) try {return L.apply (r, m.querySelectorAll (v)), r} catch (e) {} finalmente {c === b && t.removeAttribute ("id")}}} return u (e.replace (B, "$ 1"), t, r, i)} función ae () {var e = []; función t (n, i) {return e.push (n + "")> r.cacheLength && delete t [e.shift ()], t [n + ""] = i} return t} function se (e) {return e [b] =! 0, e} function ue (e) {var t = d.createElement ("fieldset" ); intente {return !! e (t)} catch (e) {return! 1} finalmente {t.parentNode && t.parentNode.removeChild (t), t = null}} function le (e, t) {var n = e.split ("|"), i = n.length; while (i -) r.attrHandle [n [i]] = t} función ce (e, t) {var n = t && e, r = n && 1 = == e.nodeType && 1 === t.nodeType && e.sourceIndex-t.sourceIndex; if (r) devuelve r; if (n) while (n = n.nextSibling) if (n === t) return-1; return e? 1: -1} función fe (e) {return function (t) {return "input" === t.nodeName.toLowerCase () && t.type === e}} function pe (e) {return función (t) {var n = t.nodeName.toLowerCase (); return ("input" === n || "button" === n) && t.type === e}} function de (e) {return function (t) {return "form" en t? t.parentNode &&! 1 === t.¿está desactivada? ¿"label" en t? "label" en t.parentNode? t.parentNode.disabled === e: t.disabled === e: t.isDisabled === e || t.isDisabled! ==! e && ie (t) === e: t.disabled === e: "label" en t && t.disabled === e}} función he (e) {return se (function (t) {return t = + t, se (función (n, r) {var i, o = e ([], n.length, t), a = o.length; mientras que (a -) n [i = o [a]] && (n [i] =! (r [i] = n [i]))})}) función ge (e) {return e && "undefined"! = typeof e.getElementsByTagName && e} n = oe.support = {}, o = oe.isXML = function (e) {var t = e && (e.ownerDocument || e) .documentElement; return !! t && "HTML"! == t.nodeName}, p = oe.setDocument = function (e) {var t, i, a = e? e.ownerDocument || e: w; devolver a! == d && 9 === a.nodeType && a.documentElement? (d = a, h = d.documentElement, g =! o ( d), w! == d && (i = d.defaultView) && i.top! == i && (i.addEventListener? i.addEventListener ("unload", re,! 1): i.attachEvent && i.attachEvent ("onunload", re)), n.attributes = ue (function (e) {return e.className = "i",! e.getAttribute ("className")}), n.getElementsByTagName = ue (function (e) {return e.appendChild (d.createComment ("")) ,! e.getElementsByTagName ("*"). length}), n.getElementsByClassName = Q.test (d.getElementsByClassName), n.getById = ue (función (e) {return h.appendChild (e) .id = b,! D.getElementsByName ||! D.getElementsByName (b) .length)) , n.getById? (r.filter.ID = function (e) {var t = e.replace (Z, ee); función de retorno (e) {return e.getAttribute ("id") === t}} , r.find.ID = función (e, t) {if ("undefined"! = typeof t.getElementById && g) {var n = t.getElementById (e); return n? [n]: []}}): (r.filter.ID = función (e) {var t = e.replace (Z, ee); función de retorno (e) {var n = "indefinido"!= typeof e.getAttributeNode && e.getAttributeNode ("id"); return n && n.value === t}}, r.find.ID = function (e, t) {if ("undefined"! = typeof t.getElementByd &&g) { var n, r, i, o = t.getElementById (e); if (o) {if ((n = o.getAttributeNode ("id")) && n.value === e) return [o]; i = t.getElementsByName (e), r = 0; while (o = i [r ++]) if ((n = o.getAttributeNode ("id")) && n.value === e) return [o]} return [] }}), r.find.TAG = n.getElementsByTagName? function (e, t) {return "undefined"! = typeof t.getElementsByTagName? t.getElementsByTagName (e): n.qsa? t.querySelectorAll (e): void 0}: función (e, t) {var n, r = [], i = 0, o = t.getElementsByTagName (e); if ("*" === e) {while (n = o [i ++ ]) 1 === n.nodeType && r.push (n); return r} return o}, r.find.CLASS = n.getElementsByClassName && function (e, t) {if ("undefined"! = Typeof t.getElementsByClassName && g) devuelve t.getElementsByClassName (e)}, v = [], y = [], (n.qsa = Q.test (d.querySelectorAll)) && (ue (función (e) {h.appendChild (e) .innerHTML = "<a id='
                  "+b+"
                  '> </a> <select id = '
                  " + b + " - \r\\ ' msallowcapture = '
                  '> <option selected = '
                  '> </option> </select> ", e.querySelectorAll (" [msallowcapture ^ = '
                  '] "). length && y.push (" [* ^ $] = "+ M +" * (?: '
                  ' | \ "\") ") , e.querySelectorAll ("[selected]"). length || y.push ("\\ [" + M + "* (?: value |" + P + ")"), e.querySelectorAll ("[id ~ = "+ b +" -] "). length || y.push (" ~ = "), e.querySelectorAll (": checked "). length || y.push (": checked "), e.querySelectorAll (" a # "+ b +" + * ". longitud || y.push (". #. + [+ ~]")}), ue (function (e) {e.innerHTML = "<a href='
                  ' disabled='
                  disabled '> </a> <select disabled = '
                  disabled '> <option /> </select> "; var t = d.createElement (" input "); t.setAttribute (" type "," hidden "), e.appendChild (t) .setAttribute (" name ", "D"), e.querySelectorAll ("[name = d]"). Length && y.push ("name" + M + "* [* ^ $ |! ~]? ="), 2! == e.querySelectorAll ( ": enabled"). length && y.push (": enabled", ": disabled"), h.appendChild (e) .disabled =! 0,2! == e.querySelectorAll (": disabled"). length && y.push (": enabled", ": disabled"), e.querySelectorAll ("* ,: x"), y.push (",. *:")})), (n.matchesSelector = Q.test (m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue (function (e) {n.disconnectedMatch = m.call (e, "*"), m.call (e, "[s! = '
                  ' ': x "), v.push ("! = ", W)}), y = y.length && new RegExp (y.join (" | ")), v = v.length && new RegExp (v.join (" | ") ), t = Q.test (h.compareDocumentPosition), x = t || Q.test (h.contains)? función (e, t) {var n = 9 === e.nodeType? e.documentElement: e , r = t && t.parentNode; return e === r ||! (! r || 1! == r.nodeType ||! (n.contains? n.contains (r): e.compareDocumentPosition && 16 & e.compareDocumentPosition (r )))}: función (e, t) {if (t) while (t = t.parentNode) if (t === e) return! 0; return! 1}, D = t? function (e, t ) {if (e === t) devuelve f =! 0,0; var r =! e.compareDocumentPosition-! t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) == = (t.ownerDocument || t)? e.compareDocumentPosition (t): 1) ||! n.sortDetached && t.compareDocumentPosition (e) === r? e === d || e.ownerDocument === w && x (w, e)? - 1: t === d || t.ownerDocument === w && x (w , t)? 1: c? O (c, e) -O (c, t): 0: 4 & r? -1: 1)}: function (e, t) {if (e === t) return f =! 0,0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (! I ||! O) return e == = d? -1: t === d? 1: i? -1: o? 1: c? O (c, e) -O (c, t): 0; if (i === o) return ce (e, t); n = e; while (n = n.parentNode) a.unshift (n); n = t; while (n = n.parentNode) s.unshift (n); while (a [r ] === s [r]) r ++; devolver r? ce (a [r], s [r]): a [r] === w? -1: s [r] === w? 1: 0}, d): d}, oe.matches = function (e, t) {return oe (e, null, null, t)}, oe.matchesSelector = function (e, t) {if ((e.ownerDocument || e)! == d && p (e), t = t.replace (z, " = '$ 1']
                "), n.matchesSelector && g &&! S [t + "
                "] && (! v ||! v.test ( t)) && (! y ||! y.test (t))) intente {var r = m.call (e, t); if (r || n.disconnectedMatch || e.document && 11! == e.document.nodeType) return r} catch (e) {} return oe (t, d, null, [e]). length> 0}, oe.contains = function (e, t) {return (e.ownerDocument || e)! == d && p (e), x (e, t)}, oe.attr = function (e, t) {(e.ownerDocument || e)! == d && p (e); var i = r. attrHandle [t.toLowerCase ()], o = i && N.call (r.attrHandle, t.toLowerCase ())? i (e, t,! g): void 0; return void 0! == o? o: n .attributes ||! g? e.getAttribute (t) :( o = e.getAttributeNode (t)) && o.specified? o.value: null}, oe.escape = function (e) {return (e + "
                ") .replace (te, ne)}, oe.error = function (e) {arroja un nuevo error ("
                Error de sintaxis, expresión no reconocida: " + e)}, oe.uniqueSort = function (e) {var t, r = [ ], i = 0, o = 0; if (f =! n.detectDuplicates, c =! n.sortStable && e.slice (0), e.sort (D), f) {while (t = e [o ++]) t === e [o] && (i = r.push (o)), mientras que (i -) e.splice (r [i], 1)} devuelve c = null, e}, i = oe. getText = función (e) {var t, n = "
                ", r = 0, o = e.nodeType;if (o) {if (1 === o || 9 === o || 11 === o) {if ("
                string " == typeof e.textContent) devolver e.textContent; para (e = e .firstChild; e; e = e.nextSibling) n + = i (e)} else if (3 === o || 4 === o) return e.nodeValue} else while (t = e [r ++]) n + = i (t); return n}, (r = oe.selectors = {cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: {" > ": {dir: "
                parentNode ", primero:! 0}, "
                ": {dir: "
                parentNode "}, " + ": {dir: "
                previousSibling ", primero:! 0}, "~": {dir: "
                previousSibling "}} , prefiltro: {ATTR: función (e) {retorno e [1] = e [1] .replace (Z, ee), e [3] = (e [3] || e [4] || e [5 ] || "
                "). replace (Z, ee), "~ = " === e [2] && (e [3] = "
                " + e [3] + "
                "), e.slice (0, 4)}, CHILD: function (e) {return e [1] = e [1] .toLowerCase (), "
                nth " === e [1] .slice (0,3)? (E [3] | | oe.error (e [0]), e [4] = + (e [4]? e [5] + (e [6] || 1): 2 * ("
                par ")=== e [3] || "
                impar " === e [3])), e [5] = + (e [7] + e [8] || "
                impar " === e [3] )): e [3] && oe.error (e [0]), e}, PSEUDO: function (e) {var t, n =! e [6] && e [2]; return V.CHILD.test (e [0])? Nulo: (e [3]? E [2] = e [4] || e [5] || "
                ": n && X.test (n) && (t = a (n,! 0) ) && (t = n.indexOf (")
              ", n.length-t) -n.length) && (e [0] = e [0] .slice (0, t), e [2] = n. slice (0, t)), elice (0,3))}}, filter: {TAG: function (e) {var t = e.replace (Z, ee) .toLowerCase (); return " * " === e? function () {return! 0}: function (e) {return e.nodeName && e.nodeName.toLowerCase () === t}}, CLASS: function (e) {var t = E [e + "
              "]; return t || (t = new RegExp ("( ^ | "+ M +")
              "+ e +"("+ M +" | $)
              ")) && E (e, function (e) {return t.test ("
              string " == typeof e.className && e.className || "
              undefined "! = typeof e.getAttribute && e.getAttribute ("
              class ") || "
              ")})}, ATTR: function (e, t, n) {return function (r) {var i = oe.attr (r, e); return null == i? "! = " === t:! t || (i + = "
              ", " = " === t? i === n: "! = " === t? i! == n: " ^ = "=== t? n && 0 === i.indexOf (n):" * = "=== t? n && i.indexOf (n)> - 1:"
              $ = "=== t? n && i.slice ( -n.length) === n: "~ = " === t? ("
              " + i.replace ($, "
              ") + "
              ") .indexOf (n)> - 1: " | = " = == t && (i === n || i.slice (0, n.length + 1) === n + " - "))}}, CHILD: function (e, t, n, r, i) { var o = "
              nth "! == e.slice (0,3), a = "
              last "! == e.slice (-4), s = " of -type " === t; return 1 == = r && 0 === i? function (e) {return !! e.parentNode}: function (t, n, u) {var l, c, f, p, d, h, g = o! == a? "
              nextSibling ": "
              previousSibling ", y = t.parentNode, v = s && t.nodeName.toLowerCase (), m =! u &&! s, x =! 1; if (y) {if (o) {while (g) {p = t; while (p = p [g]) if (s? p. nodeName.toLowerCase () === v: 1 === p.nodeType) return! 1; h = g = "
              only " === e &&! h && "
              nextSibling "} return! 0} if (h = [a? y.firstChild: y.lastChild], a && m) {x = (d = (l = (c = (f = (p = y) [b] || (p [b] = {})) [p.uniqueID ] || (f [p.uniqueID] = {})) [e] || []) [0] === T && l [1]) && l [2], p = d && y.childNodes [d]; p = ++ d && p && p [g] || (x = d = 0) || h.pop ()) if (1 === p.nodeType && ++ x && p === t) {c [e] = [T , d, x]; break}} else if (m && (x = d = (l = (c = (f = (p = t) [b] || (p [b] = {})) [p. uniqueID] || (f [p.uniqueID] = {})) [e] || []) [0] === T && l [1]) ,! 1 === x) while (p = ++ d && p && p [g] || (x = d = 0) || h.pop ()) if ((s? p.nodeName.toLowerCase () === v: 1 === p.nodeType) && ++ x && ( m && ((c = (f = p [b] || (p [b] = {})) [p.uniqueID] || (f [p.uniqueID] = {})) [e] = [T, X]),p === t)) break; return (x- = i) === r || x% r == 0 && x / r> = 0}}}, PSEUDO: function (e, t) {var n, i = r.pseudos [e] || r.setFilters [e.toLowerCase ()] || oe.error ("
              pseudo no compatible: " + e); return i [b]? i (t): i.length> 1 ? (n = [e, e, "
              ", t], r.setFilters.hasOwnProperty (e.toLowerCase ())? se (función (e, n) {var r, o = i (e, t), a = o.length; while (a -) e [r = O (e, o [a])] =! (n [r] = o [a])}): function (e) {return i (e , 0, n)}): i}}, pseudos: {no: se (función (e) {var t = [], n = [], r = s (e.replace (B, "
              $ 1 "))) ; return r [b]? se (función (e, t, n, i) {var o, a = r (e, null, i, []), s = e.length; while (s -) ( o = a [s]) && (e [s] =! (t [s] = o))}): función (e, i, o) {return t [0] = e, r (t, null, o, n), t [0] = nulo,! n.pop ()}}), tiene: se (función (e) {función de retorno (t) {retorno oe (e, t) .length> 0}} ), contiene: se (función (e) {return e = e.replace (Z, ee), función (t) {return (t.textContent || t.innerText || i (t)). indexOf (e) > -1}}), lang:se (función (e) {return U.test (e || "
              ") || oe.error ("
              idioma no admitido: " + e), e = e.replace (Z, ee) .toLowerCase (), función ( t) {var n; do {if (n = g? t.lang: t.getAttribute ("
              xml: lang ") || t.getAttribute ("
              lang ")) return (n = n.toLowerCase ()) = == e || 0 === n.indexOf (e + " - ")} while ((t = t.parentNode) && 1 === t.nodeType); return! 1}}), target: function (t) {var n = e.location && e.location.hash; return n && n.slice (1) === t.id}, root: function (e) {return e === h}, focus: function (e) {return e === d.activeElement && (! d.hasFocus || d.hasFocus ()) && !! (e.type || e.href || ~ e.tabIndex)}, habilitado: de (! 1), deshabilitado : de (! 0), marcado: function (e) {var t = e.nodeName.toLowerCase (); devolver "
              input " === t && !! e.checked || "
              option " === t && !! e .selected}, seleccionado: function (e) {return e.parentNode && e.parentNode.selectedIndex ,!0 === e.seleccionado}, vacío: función (e) {para (e = e.firstChild; e; e = e.nextSibling) si (e.nodeType <6) return! 1; return! 0}, padre : function (e) {return! r.pseudos.empty (e)}, cabecera: function (e) {return Y.test (e.nodeName)}, input: function (e) {return G.test (e. nodeName)}, button: function (e) {var t = e.nodeName.toLowerCase (); devuelve "
              input " === t && "
              button " === e.type || "
              button " === t}, text: function (e) {var t; devolver "
              input " === e.nodeName.toLowerCase () && "
              text " === e.type && (null == (t = e.getAttribute ("
              type ")) || "
              texto " === t.toLowerCase ())}, primero: he (function () {return [0]}), last: he (function (e, t) {return [t-1]}) , eq: he (función (e, t, n) {return [n <0? n + t: n]}), incluso: he (función (e, t) {para (var n = 0; n <t ; n + = 2) e.push (n); retorno e}), impar: he (función (e, t) {para (var n = 1; n <t; n + = 2) e.push (n); return e}), lt: he (función (e, t,n) {para (var r = n <0? n + t: n; - r> = 0;) e.push (r); return e}), gt: he (función (e, t, n) {para (var r = n <0? n + t: n; ++ r <t;) e.push (r); return e})}}). pseudos.nth = r.pseudos.eq; para ( t en {radio:! 0, casilla de verificación:! 0, archivo:! 0, contraseña:! 0, imagen:! 0}) r.pseudos [t] = fe (t); para (t in {submit:! 0 , restablecer:! 0}) r.pseudos [t] = pe (t); función ye () {} ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = función (e, t) {var n, i, o, a, s, u, l, c = k [e + "
              "]; si (c) devuelve t? 0: c.slice (0); s = e , u = [], l = r.preFilter; while (s) {n &&! (i = F.exec (s)) || (i && (s = s.slice (i [0] .length) || s ), u.push (o = [])), n =! 1, (i = _. exec (s)) && (n = i.shift (), o.push ({value: n, tipo: i [0] .replace (B, "
              ")}), s = s.slice (n.length)); para (a en r.filter)! (I = V [a] .exec (s)) || l [a] &&! (i = l [a] (i)) || (n = i.shift (), o.push ({valor: n, tipo: a, coincidencias: i}), s = s .slice (n.length)); if (! n) break} return t? s.length: s? oe.error (e):k (e, u) .slice (0)}; función ve (e) {para (var t = 0, n = e.length, r = "
              "; t <n; t ++) r + = e [t]. valor; return r} me funciona (e, t, n) {var r = t.dir, i = t.next, o = i || r, a = n && "
              parentNode " === o, s = C ++; devolver la función t.first? (t, n, i) {while (t = t [r]) if (1 === t.nodeType || a) return e (t, n, i); return! 1} : función (t, n, u) {var l, c, f, p = [T, s]; if (u) {while (t = t [r]) if ((1 === t.nodeType | | a) && e (t, n, u)) return! 0} else while (t = t [r]) if (1 === t.nodeType || a) if (f = t [b] || ( t [b] = {}), c = f [t.uniqueID] || (f [t.uniqueID] = {}), i && i === t.nodeName.toLowerCase ()) t = t [r] | | t; else {if ((l = c [o]) && l [0] === T && l [1] === s) devuelve p [2] = l [2]; if (c [o] = p , p [2] = e (t, n, u)) return! 0} return! 1}} function xe (e) {return e.length> 1? function (t, n, r) {var i = e .length; while (i -) if (! e [i] (t, n, r)) return! 1; return! 0}: e [0]} función be (e, t, n) {para ( var r = 0, i = t.length; r <i; r ++) oe (e, t [r], n); return n} función we (e, t, n,r, i) {para (var o, a = [], s = 0, u = e.length, l = null! = t; s <u; s ++) (o = e [s]) && (n &&! n (o, r, i) || (a.push (o), l && t.push (s)); devolver una función} Te (e, t, n, r, i, o) {return r &&! r [b] && (r = Te (r)), i &&! i [b] && (i = Te (i, o)), se (función (o, a, s, u) {var l, c, f , p = [], d = [], h = a.length, g = o || be (t || " * ", s.nodeType? [s]: s, []), y =! e | |! o && t? g: nosotros (g, p, e, s, u), v = n? i || (o? e: h || r)? []: a: y; if (n && n (y, v, s, u), r) {l = nosotros (v, d), r (l, [], s, u), c = l.length; mientras que (c -) (f = l [c] ) && (v [d [c]] =! (y [d [c]] f))} if (o) {if (i || e) {if (i) {l = [], c = v.length; while (c -) (f = v [c]) && l.push (y [c] = f); i (null, v = [], l, u)} c = v.length; while (c -) (f = v [c]) && (l = i? O (o, f): p [c])> - 1 && (o [l] =! (a [l] = f) )}} else else = we (v === a? v.splice (h, v.length): v), i? i (null, a, v, u): L.apply (a, v)} )} función Ce (e) {para (var t, n, i, o = e.length, a = r.relativo [e [0] .type], s = a || r.relativo ["
              "], u = a? 1: 0, c = me (función (e) {return e === t}, s,! 0), f = me (function (e) {return O (t , e)> - 1}, s,! 0), p = [función (e, n, r) {var i =! a && (r || n! == l) || ((t = n). nodeType? c (e, n, r): f (e, n, r)); devolver t = nulo, i}]; u <o; u ++) if (n = r.relative [e [u] .type ]) p = [me (xe (p), n)]; else {if ((n = r.filter [e [u] .type] .apply (null, e [u] .matches)) [b] ) {para (i = ++ u; i <o; i ++) if (r.relativo [e [i] .type]) break; devuelva Te (u> 1 && xe (p), u> 1 && ve (e.slice ( 0, u-1) .concat ({value: "
              " === e [u-2] .type? " * ": "
              "})). Replace (B, "
              $ 1 "), n, u <i && Ce (e.slice (u, i)), i <o && Ce (e = e.slice (i)), i <o && ve (e))} p.push (n)} devolver xe (p)} función Ee (e , t) {var n = t.length> 0, i = e.length> 0, o = function (o, a, s, u, c) {var f, h, y, v = 0, m = "
              0 ", x = o && [], b = [], w = l, C = o || i && r.find.TAG (" * ", c), E = T + = nulo == w? 1: Matemáticas.random () || .1, k = C.length; para (c && (l = a === d || a || c); m! == k && null! = (f = C [m]); m ++ ) {if (i && f) {h = 0, a || f.ownerDocument === d || (p (f), s =! g); mientras que (y = e [h ++]) if (y (f, a || d, s)) {u.push (f); break} c && (T = E)} n && ((f =! y && f) && v -, o && x.push (f))} if (v + = m , n && m! == v) {h = 0; while (y = t [h ++]) y (x, b, a, s); if (o) {if (v> 0) while (m -) x [m] || b [m] || (b [m] = j.call (u)); b = we (b)} L.apply (u, b), c &&! o && b.length> 0 && v + t .length> 1 && oe.uniqueSort (u)} return c && (T = E, l = w), x}; return n? se (o): o} return s = oe.compile = function (e, t) {var n, r = [], i = [], o = S [e + "
              "]; if (! o) {t || (t = a (e)), n = t.length; while (n-- ) (o = Ce (t [n])) [b]? r.push (o): i.push (o); (o = S (e, Ee (i, r))). selector = e} return o}, u = oe.select = function (e, t, n, i) {var o, u, l, c, f, p = "
              function " == typeof e && e, d =! i && a (e = p .selector || e);if (n = n || [], 1 === d.length) {if ((u = d [0] = d [0] .slice (0)). length> 2 && "
              ID " === ( l = u [0]). tipo && 9 === t.nodeType && g && r.relative [u [1] .type]) {if (! (t = (r.find.ID (l.matches [0] .replace (Z , ee), t) || []) [0])) return n; p && (t = t.parentNode), e = e.slice (u.shift (). value.length)} o = V.needsContext .test (e)? 0: u.length; while (o -) {if (l = u [o], r.relative [c = l.type]) break; if ((f = r.find [ c]) && (i = f (l.matches [0] .replace (Z, ee), K.test (u [0] .type) && ge (t.parentNode) || t))) {if (u .splice (o, 1),! (e = i.length && ve (u))) return L.apply (n, i), n; break}}} return (p || s (e, d)) (i , t,! g, n,! t || K.test (e) && ge (t.parentNode) || t), n}, n.sortStable = b.split ("
              "). sort (D) .join ("
              ") === b, n.detectDuplicates = !! f, p (), n.sortDetached = ue (function (e) {return 1 & e.compareDocumentPosition (d.createElement ("
              fieldset ")))))ue (función (e) {return e.innerHTML = " < a href = '#' > < /a>", "#" === e.firstChild.getAttribute ("href")}) || le (" type | href | height | width ", function (e, t, n) {if (! n) devolver e.getAttribute (t," type "=== t.toLowerCase ()? 1: 2)}), n .attributes && ue (function (e) {return e.innerHTML = "<input / > ", e.firstChild.setAttribute ("
              value ", "
              "), "
              " === e.firstChild.getAttribute ("
              value ")} ) || le ("
              valor ", función (e, t, n) {si (! n && "
              input " === e.nodeName.toLowerCase ()) devuelve e.defaultValue}), ue (function (e) { return null == e.getAttribute ("
              disabled ")}) || le (P, función (e, t, n) {var r; if (! n) return! 0 === e [t]? t. toLowerCase () :( r = e.getAttributeNode (t)) && r.specified? r.value: null}), oe} (e); w.find = E, w.expr = E.selectors, w.expr [ ": "] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape; var k = función (e, t, n) {var r = [], i = void 0! == n; while ((e = e [t]) && 9! == e.nodeType) if (1 === e.nodeType ) {if (i && w (e) .is (n)) break; r.push (e)} return r}, S = función (e, t) {para (var n = []; e; e = e. nextSibling) 1 === e.nodeType && e! == t && n.push (e); return n}, D = w.expr.match.needsContext; function N (e, t) {return e.nodeName && e.nodeName.toLowerCase ( ) === t.toLowerCase ()} var A = / ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> (?: <\ / \ 1> |) $ / i; función j (e, t, n) {devolver g (t)? w.grep (e, función (e, r ) {return !! t.call (e, r, e)! == n}): t.nodeType? w.grep (e, function (e) {return e === t! == n}): "
              string "! = typeof t? w.grep (e, función (e) {return u.call (t, e)> - 1! == n}): w.filter (t, e, n)} w .filter = función (e, t, n) {var r = t [0];devuelve n && (e = ": not(" + e + ")
              "), 1 === t.length && 1 === r.nodeType? w.find.matchesSelector (r, e)? [r]: []: w .find.matches (e, w.grep (t, función (e) {return 1 === e.nodeType}))}, w.fn.extend ({find: function (e) {var t, n, r = this.length, i = this; if ("
              string "! = typeof e) devuelve this.pushStack (w (e) .filter (function () {for (t = 0; t <r; t ++) if ( w.contains (i [t], this)) return! 0})); para (n = this.pushStack ([]), t = 0; t <r; t ++) w.find (e, i [t ], n); devolver r> 1? w.uniqueSort (n): n}, filter: function (e) {return this.pushStack (j (this, e || [] ,! 1))}, no: La función (e) {return this.pushStack (j (this, e || [] ,! 0))}, es: function (e) {return !! j (this, "
              string " == typeof e && D.test ( e)? w (e): e || [] ,! 1) .length}}); var q, L = / ^ (?: \ s * (<[\ w \ W] +>) [^> ] * | # ([\ w -] +)) $ /; (w.fn.init = function (e, t, n) {var i, o; if (! e) devuelve esto; if (n = n || q, "
              cadena " == tipo de e) {if (! (i = " < "=== e [0] &&" > "=== e [e.length-1] && e.length> = 3? [null, e, null]: L.exec (e)) ||! i [ 1] && t) return! T || t.jquery? (T || n) .find (e): this.constructor (t) .find (e); if (i [1]) {if (t = t instanceof w? t [0]: t, w.merge (este, w.parseHTML (i [1], t&& t.nodeType? t.ownerDocument || t: r,! 0)), A.test (i [1 ]) && w.isPlainObject (t)) para (i in t) g (este [i])? este [i] (t [i]): this.attr (i, t [i]); devuelva este} return (o = r.getElementById (i [2])) && (this [0] = o, this.length = 1), this} return e.nodeType? (this [0] = e, this.length = 1, this): g (e)? void 0! == n.ready? n.ready (e): e (w): w.makeArray (e, this)}). prototype = w.fn, q = w ( r); var H = / ^ (?: parents | prev (?: Until | All)) /, O = {children:! 0, contents:! 0, next:! 0, prev:! 0}; w. fn.extend ({tiene: function (e) {var t = w (e, this), n = t.length; devolver este.filter (function () {for (var e = 0; e <n; e ++) if (w.contains (this, t [e])) return! 0})}, closest: function (e,t) {var n, r = 0, i = this.length, o = [], a = "
              string "! = typeof e && w (e); if (! D.test (e)) for (; r <i ; r ++) para (n = this [r]; n && n! == t; n = n.parentNode) if (n.nodeType <11 && (a? a.index (n)> - 1: 1 === n. nodeType && w.find.matchesSelector (n, e))) {o.push (n); break} devolver this.pushStack (o.length> 1? w.uniqueSort (o): o)}, index: function (e) {return e? "
              string " == typeof e? u.call (w (e), this [0]): u.call (this, e.jquery? e [0]: e): this [0] && this [0] .parentNode? This.first (). PrevAll (). Length: -1}, add: function (e, t) {return this.pushStack (w.uniqueSort (w.merge (this.get (), w (e, t))))}, addBack: function (e) {return this.add (null == e? this.prevObject: this.prevObject.filter (e))}}); función P (e, t) {while ((e = e [t]) && 1! == e.nodeType); return e} w.each ({parent: function (e) {var t = e.parentNode; return t && 11! == t .nodeType? t: null}, padres:función (e) {return k (e, "
              parentNode ")}, parentsUntil: function (e, t, n) {return k (e, "
              parentNode ", n)}, siguiente: function (e) {return P ( e, "
              nextSibling ")}, prev: function (e) {return P (e, "
              previousSibling ")}, nextAll: function (e) {return k (e, "
              nextSibling ")}, prevAll: function (e) {return k (e, "
              PreviousSibling ")}, nextUntil: function (e, t, n) {return k (e, "
              nextSibling ", n)}, prevUntil: function (e, t, n) {return k ( e, "
              previousSibling ", n)}, hermanos: function (e) {return S ((e.parentNode || {}). firstChild, e)}, children: function (e) {return S (e.firstChild) }, contents: function (e) {return N (e, "
              iframe ")? e.contentDocument: (N (e, "
              template ") && (e = e.content || e), w.merge ([] , e.childNodes))}}, function (e, t) {w.fn [e] = function (n, r) {var i = w.map (this, t, n); devuelva "
              Until "! = = e.slice (-5) && (r = n), r && "
              string " == typeof r && (i = w.filter (r, i)), this.length> 1 && (O [e] || w.uniqueSort (i), H.test (e) && i.reverse ( )), this.pushStack (i)}}); var M = / [^ \ x20 \ t \ r \ n \ f] + / g; función R (e) {var t = {}; return w.each (e.match (M) || [], function (e, n) {t [n] =! 0}), t} w.Callbacks = function (e) {e = "
              string " == typeof e? R (e): w. Extensión ({}, e); var t, n, r, i, o = [], a = [], s = -1, u = función () {para (i = i || e.once, r = t =! 0; a.length; s = -1) {n = a.shift (); while (++ s <o.length)! 1 === o [s] .apply (n [0], n [1]) && e.stopOnFalse && (s = o.length, n =! 1)} e.memory || (n =! 1), t =! 1, i && (o = n? []: "
              ")}, l = {add: function () {return o && (n &&! t && (s = o.length-1, a.push (n)), función t (n) {w. cada (n, función (n, r) {g (r)? e.unique && l.has (r) || o.push (r): r && r.length && "
              string "! == x (r) && t (r) })} (argumentos), n &&! t &&u ()), this}, remove: function () {return w.each (argumentos, function (e, t) {var n; while ((n = w.inArray (t, o, n))> - 1 ) o.splice (n, 1), n ​​<= s && s -}), this}, tiene: function (e) {return e? w.inArray (e, o)> - 1: o.length> 0} , vacío: function () {return o && (o = []), this}, disable: function () {return i = a = [], o = n = "
              ", this}, disabled: function () {return ! o}, lock: function () {return i = a = [], n || t || (o = n = "
              "), this}, locked: function () {return !! i}, fireWith: función (e, n) {return i || (n = [e, (n = n || []). slice? n.slice (): n], a.push (n), t || u ( )), this}, fire: function () {return l.fireWith (this, argumentos), this}, fired: function () {return !! r}}; return l}; function I (e) {return e } función W (e) {lanzar e} función $ (e, t, n, r) {var i; intente {e && g (i = e.promise)? i.call (e) .done (t) .fail ( n): e && g (i = e.then)? i.call (e, t, n): t.apply (void 0, [e] .slice (r))} catch (e) {n.apply (void 0, [e])}} w.extend ({Deferred: function (t) {var n = [["
              notification ", "
              progress ", w.Callbacks ("
              memory "), w.Callbacks ("
              memory "), 2], ["
              resolver ", "
              hecho ", w.Callbacks ("
              once memoria "), w.Callbacks ("
              once memoria "), 0,"
              resuelto "], ["
              rechazar ","
              fallar ", w.Callbacks ("
              una vez memoria "), w .Callbacks ("
              once memory "), 1, "
              rechazado "]], r = "
              pendiente ", i = {estado: función () {retorno r}, siempre: función () {retorno o.done (argumentos). fail (argumentos), this}, "
              catch ": function (e) {return i.then (null, e)}, pipe: function () {var e = argumentos; return w.Deferred (function (t) {w .each (n, función (n, r) {var i = g (e [r [4]]) && e [r [4]]; o [r [1]] (function () {var e = i && i. apply (this, argumentos); e && g (e.promise)? e.promise (). progress (t.notify) .done (t.resolve) .fail (t.reject):t [r [0] + "
              Con "] (esto, i? [e]: argumentos)})}), e = nulo}). promise ()}, luego: function (t, r, i) {var o = 0; función a (t, n, r, i) {return function () {var s = this, u = argumentos, l = function () {var e, l; if (! (t <o)) {if ((e = r.apply (s, u)) === n.promise ()) lanza un nuevo TypeError ("
              Auto resolución de Thenable "); l = e && ("
              object " == typeof e || "
              función "== typeof e) && e.then, g (l)? i? l.call (e, a (o, n, I, i), a (o, n, W, i)) :( o ++, l.call (e, a (o, n, I, i), a (o, n, W, i), a (o, n, I, n.notifyWith)) )(( r! == I&& ( s = void 0, u = [e]), (i || n.resolveWith) (s, u))}}, c = i? l: function () {try {l ()} catch (e) { w.Deferred.exceptionHook && w.Deferred.exceptionHook (e, c.stackTrace), t + 1> = o && (r! == W && (s = void 0, u = [e]), n.rejectWith (s, u) )}}; t? c () :( w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook ()), e.setTimeout (c))}} return w.Deferred (function (e) {n [0] [3].añada (a (0, e, g (i)? i: I, e.notifyWith)), n [1] [3] .add (a (0, e, g (t)? t: I)), n [2] [3] .add (a (0, e, g (r)? r: W))}). promesa ()}, promesa: función (e) {return null! = e? w.extend (e, i): i}}, o = {}; return w.each (n, función (e, t) {var a = t [2], s = t [5]; i [t [1] ] = a.add, s && a.add (function () {r = s}, n [3-e] [2] .disable, n [3-e] [3] .disable, n [0] [2] .lock, n [0] [3] .lock), a.add (t [3] .fire), o [t [0]] = función () {retorno o [t [0] + "
              Con "] (esto === o? void 0: this, argumentos), this}, o [t [0] + "
              With "] = a.fireWith}), i.promise (o), t && t.call (o, o ), o}, cuando: función (e) {var t = argumentos.longitud, n = t, r = Array (n), i = o.call (argumentos), a = w.Deferred (), s = función (e) {función de retorno (n) {r [e] = esto, i [e] = argumentos.longitud> 1? o.call (argumentos): n, - t || a.resolveWith (r, i) }}; if (t <= 1 && ($ (e, a.done (s (n)). resolver, a.reject,! t), "
              pendiente " === a.state () || g (i [n] && i [n] .then))) return a.then ();while (n -) $ (i [n], s (n), a.reject); return a.promise ()}}); var B = / ^ (Eval | Internal | Range | Reference | Syntax | Type | URI) Error $ /; w.Deferred.exceptionHook = function (t, n) {e.console && e.console.warn && t && B.test (t.name) && e.console.warn ("
              jQuery.Deferred excepción: " + t. mensaje, t.stack, n)}, w.readyException = function (t) {e.setTimeout (function () {throw t})}; var F = w.Deferred (); w.fn.ready = function ( e) {return F.then (e) ["
              catch "] (function (e) {w.readyException (e)}), this}, w.extend ({isReady:! 1, readyWait: 1, ready: function (e) {(! 0 === e? - w.readyWait: w.isReady) || (w.isReady =! 0,! 0! == e && - w.readyWait> 0 || F.resolveWith (r, [w]))}}), w.ready.then = F.then; function _ () {r.removeEventListener ("
              DOMContentLoaded ", _), e.removeEventListener ("
              load ", _), w .ready ()} "
              complete " === r.readyState || "
              cargando "! == r.readyState &&! r.documentElement.doScroll? e.setTimeout (w.ready) :( r.addEventListener ("
              DOMContentLoaded ", _), e.addEventListener ("
              load ", _)); var z = function (e, t, n, r, i, o, a) {var s = 0, u = e.length, l = null == n; if ("
              objeto " === x (n)) {i =! 0; para ( s en n) z (e, t, s, n [s] ,! 0, o, a)} else if (void 0! == r && (i =! 0, g (r) || (a =! 0), l && (a? (T.call (e, r), t = nulo) :( l = t, t = función (e, t, n) {return l.call (w (e), n) })), t)) para (; s <u; s ++) t (e [s], n, a? r: r.call (e [s], s, t (e [s], n)) ); return i? e: l? t.call (e): u? t (e [0], n): o}, X = / ^ - ms - /, U = / - ([az]) / g; función V (e, t) {return t.toUpperCase ()} función G (e) {return e.replace (X, "
              ms - "). replace (U, V)} var Y = función (e) {return 1 === e.nodeType || 9 === e.nodeType ||! + e.nodeType}; función Q () {this.expando = w.expando + Q.uid ++} Q.uid = 1, Q.prototype = {cache: function (e) {var t = e [this.expando]; devolver t || (t = {}, Y (e) && (e.nodeType? e [this.expando] = t: Object.defineProperty (e, this.expando, {value: t, configurable:! 0}))), t}, set: function (e, t, n) {var r, i = this.cache (e); if ("
              string " == typeof t) i [G (t)] = n; otra cosa para (r in t) i [G (r)] = t [r] ; return i}, get: function (e, t) {return void 0 === t? this.cache (e): e [this.expando] && e [this.expando] [G (t)]}, acceso : function (e, t, n) {return void 0 === t || t && "
              string " == typeof t && void 0 === n? this.get (e, t) :( this.set (e, t , n), void 0! == n? n: t)}, remove: function (e, t) {var n, r = e [this.expando]; if (void 0! == r) {if ( void 0! == t) {n = (t = Array.isArray (t)? t.map (G) :( t = G (t)) en r? [t]: t.match (M) || []). length; while (n -) elimina r [t [n]]} (void 0 === t || w.isEmptyObject (r)) && (e.nodeType? e [this.expando] = void 0: delete e [this.expando])}}, hasData: function (e) {var t = e [this.expando]; return void 0! == t &&! w.isEmptyObject (t)}}; var J = nuevo Q, K = nuevo Q, Z = / ^ (?:\ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /, ee = / [AZ] / g; function te (e) {return "
              true " === e || "
              false "! == e && ("
              null " === e? null: e === + e + "
              "? + e: Z.test (e)? JSON.parse (e): e)} function ne (e, t, n) {var r; if (void 0 === n && 1 === e.nodeType) if (r = "
              data - " + t.replace (ee, " - $ & "). toLowerCase (), "
              cadena " == typeof (n = e.getAttribute (r))) {try {n = te (n)} catch (e) {} K.set (e, t, n)} else n = void 0; return n} w.extend ({hasData: function (e) {return K.hasData (e) || J.hasData (e)}, data: function (e, t, n) {return K.access (e, t, n)}, removeData: function (e, t) {K.remove (e, t)}, _ data: function (e, t, n) {return J.access (e, t, n) }, _ removeData: function (e, t) {J.remove (e, t)}}), w.fn.extend ({data: function (e, t) {var n, r, i, o = this [ 0], a = o && o.attributes; if (void 0 === e) {if (this.length && (i = K.get (o), 1 === o.nodeType &&! J.get (o, "
              hasDataAttrs "))) {n = a.length; mientras que (n -) a [n] && 0 === (r = a [n] .name) .indexOf ("
              data - ") && (r = G (r. slice (5)), ne (o, r, i [r])); J.set (o, "
              hasDataAttrs ",! 0)} return i} return "
              object " == typeof e? this.each (función () {K.set (this, e)}): z (this, function (t) {var n; if (o && void 0 === t) {if (void 0! == (n = K.get ( o, e))) devuelve n; if (void 0! == (n = ne (o, e))) devuelve n} else this.each (function () {K.set (this, e, t)} )}, nulo, t, argumentos.longitud> 1, nulo,! 0)}, removerData: función (e) {devolver este.cada vez (función () {K. remover (este, e)})}}), w.extend ({queue: function (e, t, n) {var r; si (e) devuelve t = (t || "
              fx ") + "
              queue ", r = J.get (e, t), n && (! r || Array.isArray (n)? r = J.access (e, t, w.makeArray (n)): r.push (n)), r || []}, dequeue: function ( e, t) {t = t || "
              fx "; var n = w.queue (e, t), r = n.length, i = n.shift (), o = w._queueHooks (e, t) , a = function () {w.dequeue (e, t)}; "
              inprogress "=== i && (i = n.shift (), r -), i && ("
              fx " === t && n.unshift ("
              inprogress "), eliminar o.stop, i.call (e, a, o) ) ,! r && o && o.empty.fire ()}, _ queueHooks: function (e, t) {var n = t + "
              queueHooks "; return J.get (e, n) || J.access (e, n, {empty : w.Callbacks ("
              once memory "). add (function () {J.remove (e, [t + "
              queue ", n])})}}}), w.fn.extend ({queue: function (e, t) {var n = 2; devuelve "
              string "! = typeof e && (t = e, e = "
              fx ", n -), argumentos.longitud <n? w.queue (esto [0], e): void 0 === t? this: this.each (function () {var n = w.queue (this, e, t); w._queueHooks (this, e), "
              fx " === e&& "
              inprogress "! == n [0] && w.dequeue (this, e)})}, dequeue: function (e) {return this.each (function () {w.dequeue (this, e)})}, clearQueue: function (e) {return this.queue (e || "
              fx ", [])}, promesa: function (e, t) {var n, r = 1, i = w.Aplazado (), o = esto, a = this.length, s = function () {- r || i.resolveWith (o, [o])}; "
              string "! = Typeof e && (t = e, e = void 0), e = e || "
              fx "; mientras que (a -) (n = J.get (o [a], e + "
              queueHooks ")) && n.empty && (r ++, n.empty.add ( s)); return s (), i.promise (t)}}); var re = / [+ -]? (?: \ d * \. |) \ d + (?: [eE] [+ -] ? \ d + |) /. source, ie = new RegExp (" ^ ( ? : ([+ -]) = | )(" + re + ")([az % ] * ) $ ", "
              i "), oe = ["
              Top ", "
              Right ", "
              Bottom ", "
              Left "], ae = function (e, t) {return "
              none " === (e = t || e) .style.display || "
              "=== e.style.display && w.contains (e.ownerDocument, e) &&"
              none "=== w.css (e,"
              display ")}, se = function (e, t, n, r) { var i, o, a = {}; para (o in t) a [o] = e.style [o], e.style [o] = t [o]; i = n.apply (e, r | | []); para (o en t) e.style [o] = a [o]; return i}; función ue (e, t, n, r) {var i, o, a = 20,s = r? function () {return r.cur ()}: function () {return w.css (e, t, "
              ")}, u = s (), l = n && n [3] || (w .cssNumber [t]? "
              ": "
              px "), c = (w.cssNumber [t] || "
              px "! == l && + u) && ie.exec (w.css (e, t)); if (c && c [3]! == l) {u / = 2, l = l || c [3], c = + u || 1; mientras que (a -) w.style (e, t, c + l), (1-o) * (1- (o = s () / u || .5)) <= 0 && (a = 0), c / = o; c * = 2, w.style (e , t, c + l), n = n || []} devuelve n && (c = + c || + u || 0, i = n [1]? c + (n [1] +1) * n [ 2]: + n [2], r && (r.unit = l, r.start = c, r.end = i)), i} var le = {}; función ce (e) {var t, n = e.ownerDocument, r = e.nodeName, i = le [r]; return i || (t = n.body.appendChild (n.createElement (r)), i = w.css (t, "
              display ") , t.parentNode.removeChild (t), "
              none " === i && (i = "
              bloque "), le [r] = i, i)} función fe (e, t) {for (var n, r, i = [], o = 0, a = e.length; o <a; o ++) (r = e [o]). && (n = r.style.display, t? ("
              none " === n && (i [o] = J.get (r, "
              display ") || null, i [o] || (r.style.display = "
              ")), "
              " === r.style.display && ae ( r) && (i [o] = ce (r))): "
              none "! == n && (i [o] = "
              none ", J.set (r, "
              display ", n))); para ( o = 0; o <a; o ++) null! = i [o] && (e [o] .style.display = i [o]); return e} w.fn.extend ({show: function () { return fe (this,! 0)}, hide: function () {return fe (this)}, toggle: function (e) {return "
              boolean " == typeof e? e? this.show (): this.hide (): this.each (function () {ae (this)? w (this) .show (): w (this) .hide ()})}}); var pe = / ^ (?: checkbox | radio ) $ / i, de = / <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +) / i, he = / ^ $ | ^ módulo $ | \ / (? : java | ecma) script / i, ge = {opción: [1, " < select multiple = 'multiple' > ", " < /select>"], thead: [1, "<table>", "</ table> "], col: [2," <table> <colgroup>"," </colgroup> </table> "], tr: [2," <table> <tbody> "," </tbody> </table> "], td: [3," <table> < tbody> <tr> "," </tr> </tbody> </table> "], _ default: [0," "," "]}; ge.optgroup = ge.option, ge.tbody = ge. tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td; función ye (e, t) {var n; return n = "undefined"! = typeof e.getElementsByTagName? e.getElementsByTagName ( t || "*"): "undefined"! = typeof e.querySelectorAll? e.querySelectorAll (t || "*"): [], void 0 === t || t && N (e, t)? w. fusionar ([e], n): n} función ve (e, t) {para (var n = 0, r = e.length; n <r; n ++) J.set (e [n], "globalEval" ,! t || J.get (t [n], "globalEval"))} var me = / < | & # ? \w + ;
              /; función xe (e, t, n, r, i) {para ( var o, a, s, u, l, c, f = t.createDocumentFragment (),p = [], d = 0, h = e.length; d <h; d ++) if ((o = e [d]) || 0 === o) if ("object" === x (o )) w.merge (p, o.nodeType? [o]: o); else if (me.test (o)) {a = a || f.appendChild (t.createElement ("div")), s = (de.exec (o) || ["", ""]) [1] .toLowerCase (), u = ge [s] || ge._default, a.innerHTML = u [1] + w.htmlPrefilter (o) + u [2], c = u [0]; mientras que (c -) a = a.lastChild; w.merge (p, a.childNodes), (a = f.firstChild) .textContent = " "} else p.push (t.createTextNode (o)); f.textContent =" ", d = 0; while (o = p [d ++]) if (r && w.inArray (o, r)> - 1) i && i .push (o); else si (l = w.contains (o.ownerDocument, o), a = ye (f.appendChild (o), "script"), l && ve (a), n) {c = 0; while (o = a [c ++]) he.test (o.type || "") && n.push (o)} return f}! function () {var e = r.createDocumentFragment (). appendChild (r.createElement ("div")), t = r.createElement ("input"); t.setAttribute ("type", "radio"), t.setAttribute ("checked", "checked"), t.setAttribute ("name", "t"), e.appendChild (t), h.checkClone = e. cloneNode (! 0) .cloneNode (! 0) .lastChild.checked, e.innerHTML = "<textarea> x </textarea > ", h.noCloneChecked = !! e.cloneNode (! 0) .lastChild.defaultValue} ( ); var be = r.documentElement, we = / ^ key /, Te = / ^ (?: mouse | pointer | contextmenu | drag | drop) | click /, Ce = / ^ ([^.] *) (? : \. (. +) |) /; function Ee () {return! 0} function ke () {return! 1} function Se () {try {return r.activeElement} catch (e) {}} function De (e, t, n, r, i, o) {var a, s; if ("
              object " == typeof t) {"
              string "! = typeof n && (r = r || n, n = void 0) ; para (s en t) De (e, s, n, r, t [s], o); devolver e} if (null == r && null == i? (i = n, r = n = void 0) : null == i && ("
              string " == typeof n? (i = r, r = void 0) :( i = r, r = n, n = void 0)) ,! 1 === i) i = kede lo contrario, si (! i) return e; return 1 === o && (a = i, (i = function (e) {return w (). off (e), a.apply (this, argumentos)}). guid = a.guid || (a.guid = w.guid ++)), e.each (function () {w.event.add (this, t, i, r, n)})} w.event = {global : {}, agregue: función (e, t, n, r, i) {var o, a, s, u, l, c, f, p, d, h, g, y = J.get (e) ; if (y) {n.handler && (n = (o = n) .handler, i = o.selector), i && w.find.matchesSelector (be, i), n.guid || (n.guid = w. guid ++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {return "
              undefined "! = typeof w && w.event.triggered! == t.type? w.event.dispatch.apply (e, argumentos): void 0}), l = (t = (t || "
              "). match (M) || ["
              "]). length; while (l -) d = g = (s = Ce.exec (t [l]) || []) [1], h = (s [2] || "
              " ) .split (".
              "). sort (), d && (f = w.event.special [d] || {}, d = (i? f.delegateType: f.bindType) || d, f = w .event.special [d] || {}, c = w.extend ({type: d, origType: g, data: r,controlador: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test (i), namespace: h.join (".
              ")}, o), (p = u [d ]) || ((p = u [d] = []). delegateCount = 0, f.setup &&! 1! == f.setup.call (e, r, h, a) || e.addEventListener && e.addEventListener (d, a)), f.add && (f.add.call (e, c), c.handler.guid || (c.handler.guid = n.guid)), i? p.splice (pág. delegateCount ++, 0, c): p.push (c), w.event.global [d] =! 0)}}, eliminar: función (e, t, n, r, i) {var o, a, s , u, l, c, f, p, d, h, g, y = J. hasData (e) && J.get (e); if (y && (u = y.events)) {l = (t = ( t || "
              "). coincidir (M) || ["
              "]). length; while (l -) if (s = Ce.exec (t [l]) || [], d = g = s [1], h = (s [2] || "
              "). Split (".
              "). Sort (), d) {f = w.event.special [d] || {}, p = u [ d = (r? f.delegateType: f.bindType) || d] || [], s = s [2] && nuevo RegExp ("( ^ | \\.)
              " + h.join ("\\.( ? : .*\\. | )
              ") +"(\\. | $)
              "), a = o = p.length;while (o -) c = p [o] ,! i && g! == c.origType || n && n.guid! == c.guid || s &&! s.test (c.namespace) || r && r! == c.selector && (" ** "! == r ||! c.selector) || (p.splice (o, 1), c.selector && p.delegateCount -, f.remove && f.remove.call (e, c )); a &&! p.length && (f.teardown &&! 1! == f.teardown.call (e, h, y.handle) || w.removeEvent (e, d, y.handle), eliminar u [d ])} else for (d in u) w.event.remove (e, d + t [l], n, r,! 0); w.isEmptyObject (u) && J.remove (e, "
              eventos de manejo ") }}, dispatch: function (e) {var t = w.event.fix (e), n, r, i, o, a, s, u = new Array (argumentos.length), l = (J.get (esto, "
              eventos ") || {}) [t.type] || [], c = w.event.special [t.type] || {}; para (u [0] = t, n = 1; n <argumentos.longitud; n ++) u [n] = argumentos [n]; if (t.delegateTarget = this,! C.preDispatch ||! 1! == c.preDispatch.call (this, t)) {s = w.event.handlers.call (esto, t, l), n = 0;while ((o = s [n ++]) &&! t.isPropagationStopped ()) {t.currentTarget = o.elem, r = 0; while ((a = o.handlers [r ++]) &&! t.isImmediatePropagationStopped () ) t.rnamespace &&! t.rnamespace.test (a.namespace) || (t.handleObj = a, t.data = a.data, void 0! == (i = ((w.event.special [a. origType] || {}). handle || a.handler) .apply (o.elem, u)) &&! 1 === (t.result = i) && (t.preventDefault (), t.stopPropagation ( )))} return c.postDispatch && c.postDispatch.call (this, t), t.result}}, handlers: function (e, t) {var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType &&! ("
              click " === e.type && e.button> = 1)) para (; l! == this; l = l.parentNode || esto) si (1 === l.nodeType && ("
              click "! == e.type ||! 0! == l.disabled)) {for (o = [], a = {}, n = 0; n <u; n ++) void 0 === a [i = (r = t [n]). selector + "
              "] && (a [i] = r.needsContext? w (i, this) .index (l) >-1: w.find (i, this, null, [l]). Length), a [i] && o.push (r); o.length && s.push ({elem: l, handlers: o})} return l = esto, u <t.length && s.push ({elem: l, handlers: t.slice (u)}), s}, addProp: function (e, t) {Object.defineProperty (w.Event.prototype, e, {enumerable:! 0, configurable:! 0, get: g (t)? function () {if (this.originalEvent) return t (this.originalEvent)}: function () {if (this.originalEvent) return this.originalEvent [e]}, set: function (t) {Object.defineProperty (this, e, {enumerable:! 0, configurable:! 0, writable:! 0, value: t})}})}, corregir : function (e) {return e [w.expando]? e: new w.Event (e)}, special: {load: {noBubble:! 0}, focus: {trigger: function () {if (this! == Se () && this.focus) devuelve this.focus () ,! 1}, delegateType: "
              focusin "}, blur: {trigger: function () {if (this === Se () && this.blur) return this.blur () ,! 1}, delegateType: "
              focusout "}, haga clic en: {disparador:function () {if ("
              checkbox " === this.type && this.click && N (this, "
              input ")) devuelve this.click () ,! 1}, _ default: function (e) {return N (e.target, "
              a ")}}, antes de descargar: {postDispatch: function (e) {void 0! == e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)}}}}, w.removeEvent = function (e , t, n) {e.removeEventListener && e.removeEventListener (t, n)}, w.Event = function (e, t) {if (! (! (this instanceof w.Event)) devolver new w.Event (e, t) ; e && e.type? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented &&! 1 === e.returnValue? Ee: ke, this.target = e.target && 3 === e.target.nodeType? e.target.parentNode: e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget): this.type = e, t&& w .extender (esto, t), this.timeStamp = e && e.timeStamp || Date.now (), este [w.expando] =! 0}, w.Event.prototype = {constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated :! 1, preventDefault: function () {var e = this.originalEvent; this.isDefaultPrevented = Ee, e &&! This.isSimulated && e.preventDefault ()}, stopPropagation: function () {var e = this.originalEvent; this.isPropagationStopped =e , e &&! this.isSimulated && e.stopPropagation ()}, stopImmediatePropagation: function () {var e = this.originalEvent; this.isImmediatePropagationStoppedationationpaciones en las que se encuentran estas áreas: .each ({altKey:! 0, bubbles:! 0, cancelable:! 0, changedTouches:! 0, ctrlKey:! 0, detail:! 0, eventPhase:! 0, metaKey:! 0, pageX:! 0, pageY :! 0, shiftKey:! 0, ver:! 0, "
              char ":! 0, charCode:! 0, key:! 0, keyCode:! 0, button:! 0,botones:! 0, clientX:! 0, clientY:! 0, offsetX:! 0, offsetY:! 0, pointerId:! 0, pointerType:! 0, screenX:! 0, screenY:! 0, targetTouches:! 0, toElement:! 0, toca:! 0, que: function (e) {var t = e.button; return null == e.which && we.test (e.type)? null! = e.charCode? e.charCode: e.keyCode:! e.which && void 0! == t && Te.test (e.type)? 1 & t? 1: 2 & t? 3: 4 & t? 2: 0: e.which}}, w.event.addProp), w. each ({mouseenter: "
              mouseover ", mouseleave: "
              mouseout ", pointerenter: "
              pointerover ", pointerleave: "
              pointerout "}, function (e, t) {w.event.special [e] = {delegateType: t, bindType : t, handle: function (e) {var n, r = this, i = e.relatedTarget, o = e.handleObj; return i && (i === r || w.contains (r, i)) || (e.type = o.origType, n = o.handler.apply (this, argumentos), e.type = t), n}}}), w.fn.extend ({on: function (e, t, n, r) {return De (este, e, t, n, r)}, one: function (e, t, n, r) {return De (this, e, t,n, r, 1)}, desactivado: función (e, t, n) {var r, i; if (e && e.preventDefault && e.handleObj) devuelve r = e.handleObj, w (e.delegateTarget) .off (r. namespace? r.origType + ".
              " + r.namespace: r.origType, r.selector, r.handler), esto; if ("
              object " == typeof e) {for (i in e) this.off (i , t, e [i]); devuelve este} return! 1! == t && "
              function "! = typeof t || (n = t, t = void 0) ,! 1 === n && (n = ke) , this.each (function () {w.event.remove (this, e, n, t)})}}); var Ne = / <(?! area | br | col | embed | hr | img | input | link | meta | param) (([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) [^>] *) \ /> / gi, Ae = / <script | <style | <link / i, je = / checked \ s * (?: [^ =] | = \ s * .checked.) / i, qe = / ^ \ s * <! (?: \ [CDATA \ [| -) | (?: \] \] | -)> \ s * $ / g; función Le (e, t) {return N (e, "
              tabla ") && N (11! == t. nodeType? t: t.firstChild, "
              tr ")? w (e) .children ("
              tbody ") [0] || e: e} función He (e) {return e.type = (null! == e.getAttribute ("
              type ")) + " / " + e.type, e} function Oe (e) {return "
              true / " === (e.type || "
              ") .slice (0,5)? e.type = e.type.slice (5): e.removeAttribute ("
              type "), e} función Pe (e, t) {var n, r, i, o, a , s, u, l; if (1 === t.nodeType) {if (J.hasData (e) && (o = J.access (e), a = J.set (t, o), l = o.eventos)) {eliminar a.handle, a.eventos = {}; para (i en l) para (n = 0, r = l [i] .length; n <r; n ++) w.event.add (t, i, l [i] [n])} K. hasData (e) && (s = K.access (e), u = w.extend ({}, s), K.set (t, u ))}} me funciona (e, t) {var n = t.nodeName.toLowerCase (); "
              input " === n && pe.test (e.type)? t.checked = e.checked: "
              input "! == n && "
              textarea "! == n || (t.defaultValue = e.defaultValue)} función Re (e, t, n, r) {t = a.apply ([], t); var i, o , s, u, l, c, f = 0, p = e.length, d = p-1, y = t [0], v = g (y); if (v || p> 1 && "
              cadena " == typeof y &&! h.checkClone && je.test (y)) return e.each (función (i) {var o = e.eq (i); v && (t [0] = y.call (this, i, o.html ())), Re (o, t, n, r)}); if (p && (i = xe (t, e [0] .ownerDocument,! 1, e, r), o = i.firstChild, 1 === i. childNodes.length && (i = o), o || r)) {para (u = (s = w.map (ye (i, "
              script "), He)). length; f <p; f ++) l = i, f! == d && (l = w.clone (l,! 0,! 0), u&& w.merge (s, ye (l, "
              script "))) n.call (e [f], l , f); si (u) para (c = s [s.length-1] .ownerDocument, w.map (s, Oe), f = 0; f <u; f ++) l = s [f], he .test (l.type || "
              ") &&! J.access (l, "
              globalEval ") && w.contains (c, l) && (l.src && "
              module "! == (l.type || "
              " ) .toLowerCase ()? w._evalUrl && w._evalUrl (l.src): m (l.textContent.replace (qe, "
              "), c, l))} return e} function Ie (e, t, n) { para (var r, i = t? w.filter (t, e): e, o = 0; null! = (r = i [o]); o ++) n || 1! == r.nodeType || wcleanData (ye (r)), r.parentNode && (n && w.contains (r.ownerDocument, r) && ve (ye (r, "
              script ")), r.parentNode.removeChild (r)); return e} w.extend ({htmlPrefilter: function (e) {return e.replace (Ne, " < $ 1 > < / $ 2>")}, clonar: función (e, t, n) {var r, i, o, a, s = e.cloneNode (! 0), u = w.contains (e.ownerDocument, e); if (! (h.noCloneChecked || 1! == e.nodeType && 11! == e.nodeType || w.isXMLDoc (e ))) para (a = ye (s), r = 0, i = (o = ye (e)). length; r <i; r ++) Me (o [r], a [r]); if ( t) si (n) para (o = o || ye (e), a = a || ye (s), r = 0, i = o.length; r <i; r ++) Pe (o [r] , a [r]); else Pe (e, s); return (a = ye (s, "script")). length> 0 && ve (a,! u && ye (e, "script")), s}, cleanData : función (e) {para (var t, n, r, i = w.event.special, o = 0; void 0! == (n = e [o]); o ++) if (Y (n)) {if (t = n [J.expando]) {if (t.events) para (r in t.events) i [r]? w.event.remove (n, r): w.removeEvent (n, r , t.handle); n [J.expando] = void 0} n [K.expando] && (n [K.expando] = void 0)}}}), w.fn.extend ({detach: function (e) {return Ie (this, e, ! 0)}, eliminar: función (e) {return Ie (this, e)}, text: function (e) {return z (this, function (e) {return void 0 === e? W.text ( this): this.empty (). each (function () {1! == this.nodeType && 11! == this.nodeType && 9! == this.nodeType || (this.textContent = e)})}, null, e , argumentos.longitud)}, añadir: función () {devolver Re (esto, argumentos, función (e) {1! == this.nodeType && 11! == this.nodeType && 9! == this.nodeType || Le (this, e) .appendChild (e)})}, prepend: function () {return Re (this, argumentos, function (e) {if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {var t = Le (this, e); t.insertBefore (e, t.firstChild)}})}, antes de: function () {return Re (this, argumentos, function (e) {this.parentNode && this.parentNode.insertBefore (e, this)})}, después de:function () {return Re (this, argumentos, function (e) {this.parentNode && this.parentNode.insertBefore (e, this.nextSibling)})}, empty: function () {for (var e, t = 0; null ! = (e = this [t]); t ++) 1 === e.nodeType && (w.cleanData (ye (e,! 1)), e.textContent = ""); devuélvalo}, clone: ​​function ( e, t) {return e = null! = e && e, t = null == t? e: t, this.map (function () {return w.clone (this, e, t)})}, html: function (e) {return z (this, function (e) {var t = this [0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType ) devuelve t.innerHTML; if ("string" == typeof e &&! Ae.test (e) &&! ge [(de.exec (e) || ["", ""]) [1] .toLowerCase () ]) {e = w.htmlPrefilter (e); intente {para (; n <r; n ++) 1 === (t = this [n] || {}). nodeType && (w.cleanData (ye (t, ! 1)), t.innerHTML = e); t = 0} catch (e) {}} t && this.empty (). Append (e)}, null, e, argumentos.length)}, replaceWith:function () {var e = []; return Re (this, argumentos, function (t) {var n = this.parentNode; w.inArray (this, e) <0 && (w.cleanData (ye (this)), n && n.replaceChild (t, this)), e)}}), w.each ({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith "}, función (e, t) {w.fn [e] = función (e) {para (var n, r = [], i = w (e), o = i.length-1, a = 0 ; a <= o; a ++) n = a === o? esto: este.clone (! 0), w (i [a]) [t] (n), s.apply (r, n.get ( )); devuelva this.pushStack (r)}}); var We = new RegExp ("^ (" + re + ") (?! px) [az%] + $", "i"), $ e = function (t) {var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle (t)}, Be = new RegExp (oe.join ("|"), "i" );! function () {function t () {if (c) {l.style.cssText = "position: absolute; left: -11111px; width: 60px; margin-top:1px; relleno: 0; borde: 0 ", c.style.cssText =" posición: relativo; pantalla: bloque; tamaño de caja: borde-caja; desbordamiento: desplazamiento; margen: automático; borde: 1px; relleno: 1px; ancho: 60%; máximo: 1% ", be.appendChild (l) .appendChild (c); var t = e.getComputedStyle (c); i =" 1% "! == t.top, u = 12 = == n (t.marginLeft), c.style.right = "60%", s = 36 === n (t.right), o = 36 === n (t.width), c.style. position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild (l), c = null}} function n (e) {return Math.round (parseFloat (e))} var i, o, a, s, u, l = r.createElement ("div"), c = r.createElement ("div"); c.style && (c.style.backgroundClip = "content-box", c .cloneNode (! 0) .style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend (h, {boxSizingReliable: function () {return t (), o}, pixelBoxStyles:function () {return t (), s}, pixelPosition: function () {return t (), i}, reliableMarginLeft: function () {return t (), u}, scrollboxSize: function () {return t () , a}}))} (); función Fe (e, t, n) {var r, i, o, a, s = e.style; retorno (n = n || $ e (e)) && ( ""! == (a = n.getPropertyValue (t) || n [t]) || w.contains (e.ownerDocument, e) || (a = w.style (e, t)) ,! h .pixelBoxStyles () && We.test (a) && Be.test (t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0! == a? a + "": a} function _e (e, t) {return {obtener : function () {if (! e ()) return (this.get = t) .apply (this, argumentos); delete this.get}}} var ze = / ^ (none | table( ? !-c[ea]). + ) / , Xe = / ^ - /, Ue = {
                posición: "absoluta",
                visibilidad: "oculta",
                pantalla: "bloque"
              }, Ve = {
                letterSpacing: "0",
                fontWeight: " 400 "
              }, Ge = [" Webkit ", "Moz", "ms"], Ye = r.createElement("div").Style;

              function Qe(e) {
                if (e en Ye) devuelve e;
                var t = e[0].toUpperCase() + e.slice(1),
                  n​​ = Ge.length;
                mientras que(n - ) if ((e = Ge[n] + t) en Ye) devuelve la función e
              }
              Je(e) {
                var t = w.cssProps[e];
                return t || (t = w.cssProps[e] = Qe(e) || e), t
              }
              función Ke(e, t, n) {
                var r = ie.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
              }
              función Ze(e, t, n, r, i, o) {
                var a = "ancho" === t ? 1 : 0,
                  s = 0,
                  u = 0;
                if (n === (r ? "border" : "content")) devuelve 0;
                para(; a < 4; a + = 2)
                "margen" === n && (u + = w.css(e, n + oe[a], !0, i)), r ? ("contenido" === n && (u - = w.css(e, "relleno" + oe[a], !0, i)), "margen"! == n && (u - = w.css(e, "borde" + oe[a] + "Ancho", !0, i))) : (u + = w.css(e, "padding" + oe[a], !0, i), "padding"! == n ? U + = w.css(e, "border " + oe[a] + "Ancho ", !0, i) : s + = w.css(r ","
                    contentEditable "], function () {w.propFix [this.toLowerCase ()] = this}); function vt (e) {return (e.match (M) || []). join ("
                    ")} function mt (e) {return e.getAttribute && e.getAttribute ("
                    class ") ||"
                    "} function xt (e) {return Array.isArray (e)? e:"
                    string "== typeof e? e .match (M) || []: []} w.fn.extend ({addClass: function (e) {var t, n, r, i, o, a, s, u = 0; if (g ( e)) devuelve this.each (función (t) {w (this) .addClass (e.call (this, t, mt (this)))); if ((t = xt (e)). length) while (n = this [u ++]) if (i = mt (n), r = 1 === n.nodeType && "
                    " + vt (i) + "
                    ") {a = 0; while (o = t [a ++ ]) r.indexOf ("
                    " + o + "
                    ") <0 && (r + = o + "
                    "); i! == (s = vt (r)) && n.setAttribute ("
                    class ", s)} devolver esto}, removeClass: function (e) {var t, n, r, i, o, a, s, u = 0; si (g (e)) devuelve this.each (function (t) {w (this) .removeClass ( e.call (esto, t,mt (this))}); if (! discusiones.length) devuelve this.attr ("
                    class ", "
                    "); if ((t = xt (e)). length) while (n = this [u ++] ) si (i = mt (n), r = 1 === n.nodeType && "
                    " + vt (i) + "
                    ") {a = 0; while (o = t [a ++]) while (r.indexOf ( "
                    " + o + "
                    ")> - 1) r = r.replace ("
                    " + o + "
                    ", "); i! == (s = vt(r)) && n.setAttribute(" class ", s)
                }
                devuelve esto
              }, toggleClass : function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                  w(this).toggleClass(e.call(this, n, mt(this), t), t)
                }) : this.each(function () {
                  var t, i, o, a;
                  if (r) {
                    i = 0, o = w(este), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                  } else void 0! == e && "boolean"! == n || ((t = mt(this)) && J.set(esto, "__className __ ", t), this.setAttribute && this.setAttribute(" class ", t || !1 === e ? " " : J.get(this, " __ className __ ") || " "))
                })
              }, hasClass: función(e) {
                var t, n, r = 0;
                t = "" + e + "";
                mientras que(n = este[r++]) if (1 === n.nodeType && ("" + vt(mt(n)) + "").indexOf(t) > -1) return !0;
                return !1
              }
            });
            var bt = / \ r /
            g;
            w.fn.extend({
              val: function (e) {
                var t, n, r, i = este[0]; {
                  if (argumentos.longitud) devuelve r = g(e), este.cada(función(n) {
                    var i;
                    1 === this.nodeType && (nulo == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i + = "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                      })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"
                      en t && void 0! == t.set(this, i, "value") || (this.value = i))
                  });
                  if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"
                  en t && void 0! == (n = t.get(i, "valor")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
                }
              }
            }), w.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = w.find.attr(e, "valor");
                    return null! = t ? t : vt(w.texto(e))
                  }
                },
                seleccione: {
                  obtener: función(e) {
                    var t, n, r, i = opciones.o,
                      o = e.selectedIndex,
                      a = "seleccionar uno" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                    para(r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).seleccionado || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                      if (t = w(n).val(), a) return t;
                      s.push(t)
                    }
                    return s
                  },
                  set: function (e, t) {
                    var n, r, i = e.options,
                      o = w.makeArray(t),
                      a = i.length;
                    while (a - )((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    devuelve n || (e.selectedIndex = -1), o
                  }
                }
              }
            }), w.each(["radio", "checkbox"], function () {
              w.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
                }
              }, h.checkOn || (w.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
              })
            }), h.focusin = "onfocusin"
            en e;
            var wt = / ^ (?: focusinfocus | focusoutblur) $ /,
              Tt = function (e) {
                e.stopPropagation()
              };
            w.extend(w.event, {
                  trigger: function (t, n, i, o) {
                    var a, s, u, l, c, p, d, h, v = [i || r],
                      m = f.call(t, "tipo") ? t.type : t,
                      x = f.call(t, "espacio de nombres") ? t.namespace.split(".") : [];
                    if (s = h = u = i = i || r, 3! == i.nodeType && 8! == i.nodeType && !wt.prueba(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "en " + m, t = t[w.expando] ? t : new w.Event(m, " object " == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^ | \\.)" + x.join("\\. (?:. * \\. |)") + "(\ \. | $) ") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1! == d.trigger.apply(i, n))) {
                      if (!o && !d.noBubble && !y(i)) {
                        para(l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                        u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                      }
                      a = 0;
                      while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "eventos") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                      return t.type = m, o || t.isDefaultPrevented() || d._default && !1! == d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = nulo, w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
                      }
                    }, simular: función(e, t, n) {
                      var r = w.extend(nuevo w.Event, n, {
                        type: e,
                        isSimulated: !0
                      });
                      w.event.trigger(r, null, t)
                    }
                  }), w.fn.extend({
                  trigger: function (e, t) {
                    return this.each(function () {
                      w.event.trigger(e, t, this)
                    })
                  },
                  triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) devuelve w.event.trigger(e, t, n, !0)
                  }
                }), h.focusin || w.each({
                  focus: "focusin",
                  blur: "focusout"
                }, function (e, t) {
                  var n = function (e) {
                    w.evento.simulate(t, e.target, w.event.fix(e))
                  };
                  w.event.special[t] = {
                    setup: function () {
                      var r = this.ownerDocument || this,
                        i = J.access(r, t);
                      i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                    },
                    teardown: function () {
                      var r = this.ownerDocument || this,
                        i = J.access(r, t) - 1;
                      i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                    }
                  }
                });
                var Ct = e.location, Et = Date.now(), kt = / \? /; w.parseXML = function (t) {
                  var n;
                  if (!t || "string"! = typeof t) devuelve nulo;
                  intente {
                    n = (nuevo e.DOMParser).parseFromString(t, "text / xml")
                  } catch (e) {
                    n = void 0
                  }
                  return n && !n.getElementsByTagName("parsererror").length | | w.error("XML no válido:" + t), n
                };
                var St = / \ [\] $ /, Dt = / \ r? \ n / g, Nt = / ^ (?: submit | button | imagen | reiniciar | archivo) $ / i, At = / ^ (?: input | select | textarea | keygen) / i; function jt (e, t, n, r) {var i; if (Array.isArray (t )) w.each (t, función (t, i) {n || St.test (e)? r (e, i): jt (e + "[" + ("objeto"== tipo de i && nulo! = i? t: "") + "]", i, n, r)}); de lo contrario, si (n || "objeto"! == x (t)) r (e, t) ; else para (i in t) jt (e + "[" + i + "]", t [i], n, r)} w.param = función (e, t) {var n, r = [], i = función (e, t) {var n = g (t)? t (): t; r [r.length] = encodeURIComponent (e) + "=" + encodeURIComponent (null == n? "": n) }; if (Array.isArray (e) || e.jquery &&! w.isPlainObject (e)) w.each (e, function () {i (this.name, this.value)}); else para (n en e) jt (n, e [n], t, i); return r.join ("&")}, w.fn.extend ({serialize: function () {return w.param (this.serializeArray ( ))}, serializeArray: function () {return this.map (function () {var e = w.prop (this, "elements"); return e? w.makeArray (e): this}). filter (function () {var e = este.tipo; devolver este.nombre &&! w (este) .is (": desactivado") && At.test (this.nodeName) &&! Nt.test (e) && (este.marcado ||! pe.test (e))}). map (function (e, t) {var n = w (this) .val (); return null == n? null: Array.isArray (n)? w.map (n, function (e) {return {name: t.name, value: e.replace (Dt, "\ r \ n")}}): {name: t.name, value: n.replace (Dt, "\ r \ n")}}). Get ()}}); var qt = / % 20 / g, Lt = / #. * $ /, Ht = / ([? &]) _ = [^ &] * /, Ot = / ^ (. *?): [\ T] * ([^ \ r \ n] *) $ /
                gm, Pt = / ^ (?: about | app | app-storage |. + - extensión | archivo | res | widget): $ /, Mt = / ^ (?: GET | HEAD) $ /, Rt = / ^ \ /\ //, It = {}, Wt = {}, $ t = "* /". concat ("*"), Bt = r.createElement ("a"); Bt.href = Ct.href; function Ft (e) {return function (t, n) {"string "! = typeof t && (n = t, t =" * "); var r, i = 0, o = t.toLowerCase (). match (M) || []; if (g (n)) while ( r = o [i ++]) "+" === r [0]? (r = r.slice (1) || "*", (e [r] = e [r] || []). Unshift (n)) :( e [r] = e [r] || []). push (n)}} función _t (e, t, n, r) {var i = {}, o = e == = Wt; función a (s) {var u; retorno i [s] =! 0, w.cada (e [s] || [], función (e, s) {var l = s (t, n, r); devuelve "string"! = typeof l || o || i [l]? o? ! (u = l): void 0: (t.dataTypes.unshift (l), a (l) ,! 1)}), u} devuelve a (t.dataTypes [0]) ||! i ["* "] && a (" * ")} función zt (e, t) {var n, r, i = w.ajaxSettings.flatOptions || {}; para (n in t) void 0! == t [n] && ((i [n]? e: r || (r = {})) [n] = t [n]); devuelve r && w.extend (! 0, e, r), e} función Xt (e, t , n) {var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u [0]) u.shift (), void 0 === r && (r = e.mimeType || t.getResponseHeader ("Content-Type")); if (r) para (i in s) if (s [i] && s [i] .test (r)) {u.unshift (i); break} if (u [0] en n) o = u [0]; de lo contrario, {for (i in n) {if (! u [0] || e.converters [i + "" + u [ 0]]) {o = i; break} a || (a = i)} o = o || a} si (o) devuelve o! == u [0] && u.unshift (o), n [o ]} función Ut (e, t, n, r) {var i, o, a, s, u, l = {}, c = e.dataTypes.slice (); if (c [1]) para (a en e.converters) l [a.toLowerCase ()] = e.converters [a]; o = c.shift (); while (o) if (e.responseFields [o] && (n [e.responseFields [o] = t),! u && r && e.dataFilter && (t = e.dataFilter (t, e.dataType)), u = o, o = c.shift ()) if ("*" === o) o = u; else si ("*"! == u && u! == o) {if (! (a = l [u + "" + o] || l ["*" + o])) para (i in l) if ((s = i.split ("")) [1] === o && (a = l [u + "" + s [0]] || l ["*" + s [0]])) {! 0 == = a? a = l [i] :! 0! == l [i] && (o = s [0], c.unshift (s [1])); break} if (! 0! == a) if (a && e ["lanza"]) t = a (t); de lo contrario, intente {t = a (t)} catch (e) {return {state: "parsererror", error: a? ​​e: "No hay conversión de" + u + "to" + o}}} return {state: "success", data: t}} w.extend ({active: 0, LastModified: {}, etag: {}, ajaxSettings: {url: Ct.href , escriba: "GET", isLocal: Pt.test (Ct.protocol), global:! 0,processData:! 0, async:! 0, contentType: "application / x-www-form-urlencoded; charset = UTF-8", acepta: {"*": $ t, texto: "text / plain", html: "text / html", xml: "application / xml, text / xml", json: "application / json, text / javascript"}, contenidos: {xml: / \ bxml \ b /, html: / \ bhtml /, json: / \ bjson \ b /}, responseFields: {xml: "responseXML", texto: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html":! 0, "text json": JSON.parse, "text xml": w.parseXML}, flatOptions: {url:! 0, context:! 0}}, ajaxSetup: function (e, t) {return t? zt (zt ( e, w.ajaxSettings), t): zt (w.ajaxSettings, e)}, ajaxPrefilter: Ft (It), ajaxTransport: Ft (Wt), ajax: function (t, n) {"objeto" == tipo de t&& (n = t, t = void 0), n = n || {}; var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup ({}, n ), g = h.context || h,y = h.context && (g.nodeType || g.jquery)? w (g): w.event, v = w.Deferred (), m = w.Callbacks ("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "cancelado", E = {readyState: 0, getResponseHeader: function (e) {var t; if (c) {if (! s) {s = {}; while (t = Ot.exec (a)) s [t [1] .toLowerCase ()] = t [2]} t = s [e.toLowerCase ()]} return null == t? null : t}, getAllResponseHeaders: function () {return c? a: null}, setRequestHeader: function (e, t) {return null == c && (e = T [e.toLowerCase ()] = T [e.toLowerCase ( )] || e, b [e] = t), this}, overrideMimeType: function (e) {return null == c && (h.mimeType = e), this}, statusCode: function (e) {var t; si (e) si (c) E. siempre (e [E.status]); de lo contrario, para (t en e) x [t] = [x [t], e [t]]; devuelva esto}, abortar: función (e) {var t = e || C; devolver i && i.abort (t), k (0, t), this}}; if (v.promise (E), h.url = ((t || h.url || Ct.href) + ""). replace (Rt, Ct.protocol + "//"), h.type = n.method || n.escriba || h.method || h.type, h.dataTypes = (h.dataType || "*". toLowerCase (). match (M) || [""], null == h.crossDomain) { l = r.createElement ("a"); intente {l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host! = l.protocol + " //"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data && (h.data = w.param (h.data, h.traditional)), _ t (It, h, n, E), c) devolver E; (f = w.event && h.global) && 0 == w.active ++ && w.event.trigger ("ajaxStart"), h.type = h.type.toUpperCase (), h.hasContent =! Mt.test (h.type), o = h.url.replace (Lt, ""), h.hasContent? h.data && h.processData && 0 = == (h.contentType || ""). indexOf ("application / x-www-form-urlencoded") && (h.data = h.data.replace (qt, "+")) :( d = h .url.slice (o.length), h.data && (h.processData || "string" == typeof h.data) && (o + = (kt.test (o)? "&": "?") + h.data, delete h.data) ,! 1 === h.cache && (o = o.replace (Ht, "$ 1"), d = (kt.test (o)? "&": "?") + "_ =" + Et +++ d) , h.url = o + d), h.ifModified && (w.lastModified [o] && E.setRequestHeader ("If-Modified-Since", w.lastModified [o]), w.etag [o] && E.setRequestHeader ( "If-None-Match", w.etag [o])), (h.data && h.hasContent &&! 1! == h.contentType || n.contentType) && E.setRequestHeader ("Content-Type", h.contentType ), E.setRequestHeader ("Aceptar", h.dataTypes [0] && h.accepts [h.dataTypes [0]]? H.accepts [h.dataTypes [0]] + ("*"! == h.dataTypes [0]? "," + $ T + "; q = 0.01": ""): h.accepts ["*"]); para (p en h.encabezados) E.setRequestHeader (p, h.headers [p]); if (h.beforeSend && (! 1 === h.beforeSend.call (g, E, h) || c)) return E.abort () ; si (C = "abortar", m.add (h.complete), E.done (h.success), E.fail (h.error), i = _t (Wt, h, n, E)) { if (E.readyState = 1, f && y.trigger ("ajaxSend", [E, h]), c) devuelve E; h.async && h.timeout> 0 && (u = e.setTimeout (función () {E.abort ( "timeout")}, h.timeout)); intente {c =! 1, i.send (b, k)} catch (e) {if (c) throw e; k (-1, e)}} else k (-1, "Sin transporte"); función k (t, n, r, s) {var l, p, d, b, T, C = n; c || (c =! 0, u && e.clearTimeout (u), i = void 0, a = s || "", E.readyState = t> 0? 4: 0, l = t> = 200 && t <300 || 304 === t, r && (b = Xt (h, E, r)), b = Ut (h, b, E, l), l? (h.ifModified && ((T = E.getResponseHeader ("Last-Modified")) && (w.lastModified [o ] = T), (T = E.getResponseHeader ("etag")) && (w.etag [o] = T)), 204 === t || "HEAD" === h.type? C = "nocontent": 304 === t? C = "notmodified" :( C = b.state , p = b.data, l =! (d = b.error))) :( d = C,! t && C || (C = "error", t <0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l? v.resolveWith (g, [p, C, E]): v.rejectWith (g, [E, C, d]), E .statusCode (x), x = void 0, f && y.trigger (l? "ajaxSuccess": "ajaxError", [E, h, l? p: d]), m.fireWith (g, [E, C]) , f && (y.trigger ("ajaxComplete", [E, h]), - w.active || w.event.trigger ("ajaxStop")))} return E}, getJSON: function (e, t, n) {return w.get (e, t, n, "json")}, getScript: function (e, t) {return w.get (e, void 0, t, "script")}}), w .each (["get", "post"], función (e, t) {w [t] = función (e, n, r, i) {devolver g (n) && (i = i || r, r = n, n = void 0), w.ajax (w.extend ({url: e, tipo: t, tipo de datos: i, datos: n, éxito: r},w.isPlainObject (e) && e))}), w._evalUrl = function (e) {return w.ajax ({url: e, escriba: "GET", dataType: "script", caché:! 0, async :! 1, global:! 1, "throws":! 0})}, w.fn.extend ({wrapAll: function (e) {var t; devolver este [0] && (g (e) && (e = e.call (this [0])), t = w (e, this [0] .ownerDocument) .eq (0) .clone (! 0), this [0] .parentNode && t.insertBefore (this [0] ), t.map (function () {var e = this; while (e.firstElementChild) e = e.firstElementChild; return e}). append (this)), wrapInner: function (e) {return g (e)? this.each (función (t) {w (this) .wrapInner (e.call (this, t))}): this.each (function () {var t = w (this), n = t.contents (); n.length? n.wrapAll (e): t.append (e)})}, wrap: function (e) {var t = g (e); devuelva this.each (función (n ) {w (this) .wrapAll (t? e.call (this, n): e)})}, unwrap: function (e) {return this.parent (e) .not ("body"). each ( función () {w (este).replaceWith (this.childNodes)}), this}}), w.expr.pseudos.hidden = function (e) {return! w.expr.pseudos.visible (e)}, w.expr.pseudos.visible = function (e) {return !! (e.offsetWidth || e.offsetHeight || e.getClientRects (). length)}, w.ajaxSettings.xhr = function () {try {return new e.XMLHttpRequest} catch (e) {}}; var Vt = {0: 200,1223: 204}, Gt = w.ajaxSettings.xhr (); h.cors = !! Gt && "withCredentials" en Gt, h.ajax = Gt = !! Gt, w.ajaxTransport (función (t) {var n, r; if (h.cors || Gt &&! t.crossDomain) devolver {enviar: función (i, o) {var a, s = t.xhr (); if (abrir) (t.type, t.url, t.async, t.username, t.password), t.xhrFields) para (a in t.xhrFields) s [a] = t.xhrFields [a]; t.mimeType && s.overrideMimeType && s.overrideMimeType (t.mimeType), t.crossDomain || i ["X-Request-With"] || (i ["X-Requested With"] = "XMLHttpRequest"); para (a en i) s.setRequestHeader (a, i [a]);n = function (e) {return function () {n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e? s. abort (): "error" === e? "número"! = typeof s.status? o (0, "error"): o (s.status, s.statusText): o (Vt [s.status] || s.status, s.statusText, "text"! == (s.responseType || "text") || "string"! = typeof s.responseText? {binary: s.response}: {text: s .responseText}, s.getAllResponseHeaders ()))}}, s.onload = n (), r = s.onerror = s.ontimeout = n ("error"), void 0! == s.onabort? s. onabort = r: s.onreadystatechange = function () {4 === s.readyState && e.setTimeout (function () {n && r ()})}, n = n ("abort"); intente {s.send (t. hasContent && t.data || null)} catch (e) {if (n) throw e}}, abort: function () {n && n ()}}}), w.ajaxPrefilter (function (e) {e.crossDomain && (e .contents.script =! 1)}), w.ajaxSetup ({acepta: {script: "text / javascript, application / javascript, application / ecmascript, application / x-ecmascript"}, contenidos: {script: / \ b (?: java | ecma) script \ b /}, convertidores: {"script de texto": función (e) {return w.globalEval (e), e}}}), w.ajaxPrefilter ("script", función (e) {void 0 === e.cache && (e .cache =! 1), e.crossDomain && (e.type = "GET")}), w.ajaxTransport ("script", función (e) {if (e.crossDomain) {var t, n; devolver {enviar : function (i, o) {t = w ("<script>") .prop ({charset: e.scriptCharset, src: e.url}). on ("load error", n = function (e) { t.remove (), n = null, e && o ("error" === e.type? 404: 200, e.type)}), r.head.appendChild (t [0])}, abortar: función ( ) {n && n ()}}}}); var Yt = [], Qt = / (=) \? (? = & | $) | \? \? /; w.ajaxSetup ({jsonp: "callback", jsonpCallback: function () {var e = Yt.pop () || w.expando + "_" + Et ++; devuelva este [e] =! 0, e}}), w.ajaxPrefilter ("json jsonp", función (t, n, r) {var i, o, a, s =! 1 ! == t.jsonp && (Qt.test (t.url)? "url": "string" == typeof t.data && 0 === (t.contentType || ""). indexOf ("application / x-www -form-urlencoded ") && Qt.test (t.data) &&" data "); if (s ||" jsonp "=== t.dataTypes [0]) return i = t.jsonpCallback = g (t.jsonpCallback )? t.jsonpCallback (): t.jsonpCallback, s? t [s] = t [s] .replace (Qt, "$ 1" + i) :! 1! == t.jsonp && (t.url + = (kt .test (t.url)? "&": "?") + t.jsonp + "=" + i), t.converters ["script json"] = function () {return a || w.error (i + "no se llamó"), a [0]}, t.dataTypes [0] = "json", o = e [i], e [i] = función () {a = argumentos}, r.always (función () {void 0 === o? w (e) .removeProp (i): e [i] = o, t [i] && (t.jsonpCallback = n.jsonpCallback, Yt.push (i)), && g (o) && o (a [0]), a = o = void 0}), "script"}), h.createHTMLDocument = function () {var e = r.implementation.createHTMLDocument (""). body; return e.innerHTML = "<form> </form> <form> </form>", 2 === e.childNodes.length} (), w.parseHTML = function (e, t, n) {if ("string"! = typeof e) return []; "boolean" == typeof t && (n = t, t =! 1); var i , o, a; return t || (h.createHTMLDocument? ((i = (t = r.implementation.createHTMLDocument ("")). createElement ("base")). href = r.location.href, t. head.appendChild (i)): t = r), o = A.exec (e), a =! n && [], o? [t.createElement (o [1])] :( o = xe ([e ], t, a), a&& a.length && w (a) .remove (), w.merge ([], o.childNodes))}, w.fn.load = function (e, t, n) {var r, i, o, a = esto, s = e.indexOf (""); devuelve s> -1 &&(r = vt (e.slice (s)), e = e.slice (0, s)), g (t)? (n = t, t = void 0): t && "objeto" == tipo de t && ( i = "POST"), a.length> 0 && w.ajax ({url: e, escriba: i || "GET", dataType: "html", data: t}). done (función (e) {o = argumentos, a.html (r? w ("<div>") .append (w.parseHTML (e)) find (r): e)}). always (n && function (e, t) {a.each ( function () {n.apply (this, o || [e.responseText, t, e])})}), this}, w.each (["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError "," ajaxSuccess "," ajaxSend "], function (e, t) {w.fn [t] = function (e) {return this.on (t, e)}}), w.expr.pseudos.animated = función (e) {return w.grep (w.timers, función (t) {return e === t.elem}). length}, w.offset = {setOffset: function (e, t, n) { var r, i, o, a, s, u, l, c = w.css (e, "posición"), f = w (e), p = {}; "static" === c && (e. estilo.position = "relative"), s = f.offset (), o = w.css (e, "top"), u = w.css (e, "left"), (l = ("absolute" == = c || "corregido" === c) && (o + u) .indexOf ("auto")> - 1)? (a = (r = f.position ()). top, i = r.left ) :( a = parseFloat (o) || 0, i = parseFloat (u) || 0), g (t) && (t = t.call (e, n, w.extend ({}, s)) ), null! = t.top && (p.top = t.top-s.top + a), null! = t.left && (p.left = t.left-s.left + i), "utilizando" en t? t.using.call (e, p): f.css (p)}}, w.fn.extend ({offset: function (e) {if (argumentos.length) devuelve void 0 === e? this: this.each (función (t) {w.offset.setOffset (this, e, t)}); var t, n, r = this [0]; if (r) devuelve r.getClientRects (). length ? (t = r.getBoundingClientRect (), n = r.ownerDocument.defaultView, {top: t.top + n.pageYOffset, izquierda: t.left + n.pageXOffset}): {top: 0, left: 0} }, posición: función () {si (este [0]) {var e, t, n, r = este [0], i = {arriba: 0, izquierda: 0}; if ("corregido "=== w.css (r," posición ")) t = r.getBoundingClientRect (); else {t = this.offset (), n = r.ownerDocument, e = r.offsetParent || n.documentElement ; while (e && (e === n.body || e === n.documentElement) && "static" === w.css (e, "position")) e = e.parentNode; e && e! == r && 1 === e.nodeType && ((i = w (e) .offset ()). top + = w.css (e, "borderTopWidth",! 0), i.left + = w.css (e, "borderLeftWidth" ,! 0))} return {top: t.top-i.top-w.css (r, "marginTop",! 0), izquierda: t.left-i.left-w.css (r, "marginLeft ",! 0)}}}, offsetParent: function () {return this.map (function () {var e = this.offsetParent; while (e&&" static "=== w.css (e," position ") ) e = e.offsetParent; return e || be})}}), w.each ({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {var n = "pageYOffset" = == t; w.fn [e] = función (r) {devolver z (esta, función (e, r, i) {var o; if (y (e)? o = e: 9 === e.nodeType && (o = e. defaultView), void 0 === i) return o? o [t]: e [r]; o? o.scrollTo (n? o.pageXOffset: i, n? i: o.pageYOffset): e [r] = i}, e, r, argumentos.longitud)}}), w.each (["top", "left"], función (e, t) {w.cssHooks [t] = _ e (h.pixelPosition, función (e, n) {si (n) devuelve n = Fe (e, t), We.test (n)? w (e) .position () [t] + "px": n})}), w.each ({Altura: "altura", Ancho: "ancho"}, función (e, t) {w.each ({relleno: "interior" + e, contenido: t, "": "exterior" + e }, función (n, r) {w.fn [r] = función (i, o) {var a = argumentos.longitud && (n || "booleano"! = tipo de i), s = n || (! 0 === i ||! 0 === o? "margen": "borde"); retorno z (esto, función (t, n, i) {var o; retorno y (t)? 0 === r .indexOf ("outside")? t ["inner" + e]: t.document.documentElement ["cliente "+ e]: 9 === t.nodeType? (o = t.documentElement, Math.max (t.body [" scroll "+ e], o [" scroll "+ e], t.body [" offset "+ e], o [" offset "+ e], o [" client "+ e])): void 0 === i? w.css (t, n, s): w.style (t, n, i, s)}, t, a? i: void 0, a)}})}), w.each ("desenfoque focus focusin focusout redize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave cambiar presionar enviar presionar presionar la tecla presionar la tecla presionar presionar la tecla keyup contextmenu ".split (" "), function (e, t) {w.fn [t] = function (e, n) {return actions.length> 0? this.on (t, null, e, n) : this.trigger (t)}}), w.fn.extend ({hover: function (e, t) {return this.mouseenter (e) .mouseleave (t || e)}}), w.fn. extend ({bind: function (e, t, n) {return this.on (e, null, t, n)}, desvincular: function (e, t) {return this.off (e, null, t)} , delegate: function (e, t, n, r) {return this.on (t, e, n, r)}, undelegate: function (e, t,n) {devolver 1 === argumentos.longitud? this.off (e, "**"): this.off (t, e || "**", n)}}), w.proxy = function ( e, t) {var n, r, i; if ("cadena" == tipo de t && (n = e [t], t = e, e = n), g (e)) devolver r = o.call ( argumentos, 2), i = función () {devolver e.apply (t || esto, r.concat (o.call (argumentos)))}, i.guid = e.guid = e.guid || w. guid ++, i}, w.holdReady = function (e) {e? w.readyWait ++: w.ready (! 0)}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N , w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {var t = w.type (e return ("number" === t || "string" === t) &&! isNaN (e-parseFloat (e))}, "function" == typeof define && define.amd && define ("jquery", [] , function () {return w}); var Jt = e.jQuery, Kt = e. $; return w.noConflict = function (t) {return e. $ === w && (e. $ = Kt), t && e .jQuery === w && (e.jQuery = Jt), w}, t || (e.jQuery = e. $ = w), w});
